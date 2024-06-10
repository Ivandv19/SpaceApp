// Definición de la función uno que imprime "uno" en la consola y luego llama a la función dos después de 2000 milisegundos (2 segundos)
function uno(dos) {
    console.log("uno");
    setTimeout(dos, 2000);
}

// Definición de la función dos que imprime "dos" en la consola
function dos() {
    console.log("dos");
}

// Llama a la función uno después de 5000 milisegundos (5 segundos) y pasa la función dos como argumento
setTimeout(() => uno(dos), 5000);

// Declaración de una función anónima llamada nombre que imprime 'nombre' en la consola
const nombre = function() {
    console.log('nombre');
}
nombre(); // Llama a la función nombre

// Declaración de una arrow function llamada persona que imprime 'Barbara' en la consola
const persona = () => console.log('Barbara');
persona(); // Llama a la arrow function persona

// Declaración de una arrow function anónima que no realiza ninguna acción
() => console.log();