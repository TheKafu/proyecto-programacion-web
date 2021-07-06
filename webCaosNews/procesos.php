<?php

$usuario = $_POST['txtUsuario'];

$email = $_POST['txtEmail'];

$contraseña = $_POST['txtContraseña'];

$conexion = mysqli_connect("localhost","root","","");

$sql="insert into usuario values ('$usuario','$email','$contraseña')";

$reg = mysqli_query($conexion,$sql);

echo "Grabo Usuario";
?>