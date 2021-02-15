function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
       // bom dia
       img.src = '/foto/manha.png'
       document.body.style.backgroundColor =  rgba(214, 228, 28, 0.698)
    }    
    else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src=  '/foto/tarde.png'
        document.body.style.backgroundColor =  rgba(209, 206, 158, 0.89)
    }
    else {
        //boa noite
        img.src='/foto/noite.png'
        document.body.style.backgroundColor =  rgba(8, 24, 117, 0.986) 
    } 
}