document.getElementById("mostrarFormulario").addEventListener("click", function() {
    document.getElementById("formulario").classList.remove("hidden");
});

document.getElementById("guardar").addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var rol = document.getElementById("rol").value;
    alert("Usuario Creado Exitosamente");
    // Aquí puedes hacer algo con los datos, como enviarlos a un servidor o guardarlos en localStorage.
    // Por ahora, solo mostraremos los datos en la consola.
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Fecha de Contratación: " + fecha);
    console.log("Usuario: " + usuario);
    console.log("Contraseña: " + contrasena);
    console.log("Rol: " + rol);
});
