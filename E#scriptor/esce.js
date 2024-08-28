
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.cajatexto');
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const btnCopiar = document.querySelector('.btn-copiar');
    const contenedorResultado = document.querySelector('.contenedor-resultado p');
    const contenedorMuneco = document.querySelector('.contenedor-muneco');

    // Función para validar solo letras minúsculas y sin acentos
    function validarTexto(texto) {
        const regex = /^[a-z\s]+$/;
        return regex.test(texto);
    }

    // Función para encriptar el texto
    function encriptarTexto(texto) {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    }

    // Función para ocultar el muñeco cuando el usuario escribe
    function ocultarMuneco() {
        if (textarea.value.trim() !== "") {
            contenedorMuneco.style.display = 'none';
        } else {
            contenedorMuneco.style.display = 'block';
        }
    }

    // Manejador de evento para encriptar
    btnEncriptar.addEventListener('click', function() {
        const texto = textarea.value;
        if (validarTexto(texto)) {
            contenedorResultado.textContent = encriptarTexto(texto);
            ocultarMuneco();
        } else {
            alert('El texto contiene caracteres inválidos. Por favor ingrese solo letras minúsculas y sin acentos.');
        }
    });

    // Manejador de evento para desencriptar
    btnDesencriptar.addEventListener('click', function() {
        const texto = textarea.value;
        if (validarTexto(texto)) {
            contenedorResultado.textContent = desencriptarTexto(texto);
            ocultarMuneco();
        } else {
            alert('El texto contiene caracteres inválidos. Por favor ingrese solo letras minúsculas y sin acentos.');
        }
    });

    // Manejador de evento para copiar el texto encriptado/desencriptado
    btnCopiar.addEventListener('click', function() {
        const textoResultado = contenedorResultado.textContent;
        if (textoResultado) {
            navigator.clipboard.writeText(textoResultado).then(function() {
                alert('Texto copiado al portapapeles');
            }, function(err) {
                console.error('Error al copiar el texto: ', err);
            });
        } else {
            alert('No hay texto para copiar.');
        }
    });

    // Manejador de evento para ocultar el muñeco cuando se escribe en el textarea
    textarea.addEventListener('input', ocultarMuneco);
});