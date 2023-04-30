const txt1 = window.document.getElementById("txt-1");
const txt2 = window.document.getElementById("txt-2");
const res = window.document.getElementById("res");


function somar() {

}
function render() {
    const number1 = Number(txt1.value);
    const number2 = Number(txt2.value);

    const soma = number1 + number2;
    res.innerHTML = ` O resultado de ${number1} + ${number2} é ${soma}.`
    requestAnimationFrame(render)
}

const a = requestAnimationFrame(render)
console.log(a)