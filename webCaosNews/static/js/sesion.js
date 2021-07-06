class Sesion {
    usuario;
    contraseña;
    contraseña2;

    //  Mutadores
    setusuario(usuario) {
        this.usuario = usuario;
    }

    setcontraseña(contraseña) {
        this.contraseña = contraseña;
    }

    //  Accesadores
    getusuario() {
        return this.usuario;
    }

    getcontraseña() {
        return this.contraseña;
    }

}

function validarInicioSesion() {
    var usuario = document.getElementById("txtUsuario").value;
    var contraseña = document.getElementById("txtContraseña").value;
    var mensajeTemp = "";

    if(usuario.length < 2) {
        mensajeTemp = mensajeTemp + "Debe ingresar un usuario válido.\n";
    }
    if(contraseña.length < 4) {
        mensajeTemp = mensajeTemp + "Debe ingresar una contraseña válida.\n";
    }
    return mensajeTemp;
}

var arreglo = new Array();
var x = 0;

/*
function iniciarSesion() {
    var mensaje = validarInicioSesion();
    if(mensaje == "") {
        var usuario = document.getElementById("txtUsuario").value;
        var contraseña = document.getElementById("txtContraseña").value;

        contacto = new Contacto();

        contacto.setusuario(usuario);
        contacto.setEmail(email);
        contacto.setcontraseña(contraseña);
        contacto.setcontraseña2(contraseña2);

        arreglo[x] = JSON.stringify(contacto);
        x++;
        localStorage.setItem('contactos', arreglo);
        alert("Sesion iniciada");
    }
    else {
        alert(mensaje);
    }
}
*/
