
const numero1 = Number(prompt('Digite o primeiro número'));
const numero2 = Number(prompt('Digite o segundo número'));
const op = prompt('Digite o operador');
let res;

console.log(numero1, numero2, op)

switch (op) {
    case '+':
        alert(numero1 + numero2)
        break
    case '-':
        alert(numero1 - numero2)
        break
    case '*':
        alert(numero1 * numero2)
        break
    case '/':
        alert(numero1 / numero2)
}



