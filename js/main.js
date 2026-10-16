// sumar, restar y multiplicar
function sumar( a, b) {
    return a + b;
}
const restar = (a,b) => a - b
const multiplicar = function (a,b) {
    return a * b;
}


function iniciar() {
    
    let num1 = Number(prompt("Ingrese su primer número"));
    let num2 = Number(prompt("Ingrese su segundo número")); 

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Por favor, ingrese solo números");
    return; 
    }

    alert("La suma da: " + sumar (num1, num2));
    alert("La resta da: " + restar (num1, num2));
    alert("La multiplicacion da: " + multiplicar (num1, num2));
}


while (confirm("¿Desea sumar, restar y multiplicar dos números?")) {
    iniciar();
}