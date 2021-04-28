function Sumar(a,b) {
    console.log(`Llamando a Sumar: a = ${a}, b = ${b}`);

    return a + b;
}

function Restar(a,b) {
    console.log(`Llamando a Restar: a = ${a}, b = ${b}`);

    return a - b;
}

function Multiplicar(a,b) {
    console.log(`Llamando a Multiplicar: a = ${a}, b = ${b}`);

    return a * b;
}

function Dividir(a,b) {
    console.log(`Llamando a Dividir: a = ${a}, b = ${b}`);

    return a / b;
}

function SinNada() {
}

let operaciones = {
    Sumar, Restar, Multiplicar, Dividir
}