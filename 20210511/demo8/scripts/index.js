let a = 1;
let b = 2
let c = true; // false

a > 1
a < b
a >= 1
a <= b

// OR
a == 1 || a == 3

// AND
a == 1 && b == 3

if ((a == 1 && b == 3) || b > 1) {
//if (a == 1 || a == 3) {
//if (a == 1) {
    //if (false) {
    console.log('Es verdadero');
} else {
    console.log('No es verdadero');
}

// Igualdad
// == -> puede hacer conversión de tipo
// === -> no hace conversión de tipo, requiere que el tipo y valor sean iguales
let v1 = '123';
let v2 = 123;
123 == v1
v1 == v2
v1 === v2
let v3 = Number(v1)
v3 === v2

// Diferencia
// != -> puede hacer conversión de tipo
// !== -> no hace conversión de tipo, requiere que el tipo y valor sean iguales
v1 != v2
v1 !== v2

let n = 6;
switch (n) {
    case 0:
    case 1:
        console.log('n = 1');
        break;
    case 5:
        console.log('n = 5');
        break;
    case 6:
        console.log('n = 6');
        break;
    default:
        console.log('n es otro número!');
        break;
}

// if (n === 1) {
//     console.log('n = 1');
// } else if (n === 5) {
//     console.log('n = 5');
// } else  {
//     console.log('n es otro número!');
// }

let m = 0;

while (m < 10 ) {
    console.log(`while: Procesando a m ... ${m}`);
    m++;
}

do {
    console.log(`do/while: Procesando a m ... ${m}`);
    m++;
}
while (m < 10 )