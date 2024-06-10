// Definición de la función cuatro que imprime "cuatro" en la consola
function cuatro() {
    console.log("cuatro");
}

// Definición de la función tres que imprime "tres" en la consola y luego llama a la función cuatro
function tres() {
    console.log("tres");
    cuatro();
}

// Definición de la función dos que imprime "dos" en la consola y luego llama a la función tres
function dos() {
    console.log("dos");
    tres();
}

// Definición de la función uno que imprime "uno" en la consola y luego llama a la función dos
function uno() {
    console.log("uno");
    dos();
}

// Llamada a la función uno para iniciar la secuencia de ejecución
uno();