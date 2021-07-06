class Noticia {

    titulo;
    texto;

    //  Mutadores

    setTitulo(titulo) {
        this.titulo = titulo;
    }

    setTexto(texto) {
        this.texto = texto;
    }

    //  Accesadores

    getTitulo() {
        return this.titulo;
    }

    getTexto() {
        return this.texto;
    }
}

function validarFormularioNoticia() {
    var titulo = document.getElementById("txtTitulo").value;
    var texto = document.getElementById("txtTexto").value;
    var mensajeTemp = "";

    if(titulo.length < 2) {
        mensajeTemp = mensajeTemp + "Debe ingresar un título válido.\n";
    }
    if(texto.length < 10) {
        mensajeTemp = mensajeTemp + "La noticia es demasiado corta.";
    }

    return mensajeTemp;
}

var arreglo = new Array();
var x = 0;

function agregarNoticia() {
    var mensaje = validarFormularioNoticia();
    if(mensaje == "") {
        var titulo = document.getElementById("txtTitulo").value;
        var texto = document.getElementById("txtTexto").value;

        not = new Noticia();

        not.setTitulo(titulo);
        not.setTexto(texto);

        arreglo[x] = JSON.stringify(not);
        x++;
        localStorage.setItem('noticias', arreglo);
        alert("Noticia Agregada.")
    }
    else {
        alert(mensaje);
    }
}

function listar(){
    var todo='<table border=1>';
    todo = todo + '<tr> <td>Titulo</td> <td>Texto</td> </tr>';
    var datos = localStorage.getItem('noticias');
    var arreglo_temp = new Array();
    datos = datos.split('},{').join('};{');
    arreglo_temp = datos.split(';');
    for (let index = 0; index < arreglo_temp.lenght; index++) {
        var registro = arreglo_temp[index];
        var reg = JSON.parse(registro);
        todo = todo + "<tr> <td>"+not.titulo+"</td> <td>"+not.texto+"</td> </tr>";
    }
    todo = todo + "</table>";
    document.getElementById('listado').innerHTML=todo;

}