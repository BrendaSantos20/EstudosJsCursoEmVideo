function carregar() {
    const msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    const data = new Date();
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`;
    hora = 14;

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia!`;
        img.src = './images/manha.png'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde!`
        img.src = './images/tarde.png'
    } else {
        msg.innerHTML = `Boa noite!`
        img.src = './images/noite.png'
    }
}
