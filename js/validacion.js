function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener('DOMContentLoaded', function(){
    const registroBoton = document.getElementById('regBtn');
    
    registroBoton.addEventListener('click', function(evento) {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const constrasena1 = document.getElementById('password1').value;
        const contrasena2 = document.getElementById('password2').value;
        const terminos = document.getElementById('terminos').checked;
        
        if (nombre === '' || apellido === '' || email === '' || constrasena1 === '' || contrasena2 === '' || !terminos && (constrasena1 !== contrasena2) || constrasena1.length <= 6) {
            evento.preventDefault();
            showAlertError();
        }else{
            showAlertSuccess();
        }
    });
});
