

document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const mensajesError = document.getElementById('mensajes-error');
    mensajesError.innerHTML = '';

    
    let valid = true;
    let errores = '';

    if (nombre === '') {
        valid = false;
        errores += 'El nombre es requerido. ';
    }
    
    if (email === '') {
        valid = false;
        errores += 'El correo electrónico es requerido. ';
    }
    
    if (password === '') {
        valid = false;
        errores += 'La contraseña es requerida. ';
    } else if (password.length < 6) {
        valid = false;
        errores += 'La contraseña debe tener al menos 6 caracteres. ';
    }

    if (!valid) {
        mensajesError.innerHTML = errores;
        console.log(errores) 
    } else {
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Contraseña:', password);
        alert('Formulario enviado con éxito!');
    }
});
