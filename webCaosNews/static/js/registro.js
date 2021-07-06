class Registro {
    usuario;
    email;
    contraseña;
    contraseña2;

    //  Mutadores
    setusuario(usuario) {
        this.usuario = usuario;
    }

    setEmail(email) {
        this.email = email;
    }

    setcontraseña(contraseña) {
        this.contraseña = contraseña;
    }

    setcontraseña2(contraseña2) {
        this.contraseña2 = contraseña2;
    }

    //  Accesadores
    getusuario() {
        return this.usuario;
    }

    getEmail() {
        return this.email;
    }

    getcontraseña() {
        return this.contraseña;
    }

    getcontraseña2() {
        return this.contraseña2;
    }

}

function validarRegistro() {
    var usuario = document.getElementById("txtUsuario").value;
    var email = document.getElementById("txtEmail").value;
    var contraseña = document.getElementById("txtContraseña").value;
    var contraseña2 = document.getElementById("txtContraseña2").value;
    var caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var mensajeTemp = "";

    if(usuario.length < 2) {
        mensajeTemp = mensajeTemp + "Debe ingresar un usuario válido.\n";
    }
    if(!caracteres.test(email)) {
        mensajeTemp = mensajeTemp + "Debe ingresar un email válido.\n";
    }
    if(contraseña.length < 4) {
        mensajeTemp = mensajeTemp + "Debe ingresar una contraseña válida.\n";
    }
    if(contraseña2 != contraseña) {
        mensajeTemp = mensajeTemp + "Contraseñas no coinciden. \n";
    }

    return mensajeTemp;
}

var arreglo = new Array();
var x = 0;

function RegistrarSesion() {
    var mensaje = validarRegistro();
    if(mensaje == "") {
        var usuario = document.getElementById("txtUsuario").value;
        var email = document.getElementById("txtEmail").value;
        var contraseña = document.getElementById("txtContraseña").value;

        reg = new Registro();

        reg.setusuario(usuario);
        reg.setEmail(email);
        reg.setcontraseña(contraseña);

        arreglo[x] = JSON.stringify(reg);
        x++;
        localStorage.setItem('registros', arreglo);
        alert("Usuario Registrado");
    }
    else {
        alert(mensaje);
    }
}

function listar(){
    var todo='<table border=1>';
    todo = todo + '<tr> <td>Usuario</td> <td>Email</td> <td>Contraseña</td> </tr>';
    var datos = localStorage.getItem('registros');
    var arreglo_temp = new Array();
    datos = datos.split('},{').join('};{');
    arreglo_temp = datos.split(';');
    for (let index = 0; index < arreglo_temp.lenght; index++) {
        var registro = arreglo_temp[index];
        var reg = JSON.parse(registro);
        todo = todo + "<tr> <td>"+reg.usuario+"</td> <td>"+reg.email+"</td> <td>"+reg.contraseña+"</td> </tr>";
    }
    todo = todo + "</table>";
    document.getElementById('listado').innerHTML=todo;

}

