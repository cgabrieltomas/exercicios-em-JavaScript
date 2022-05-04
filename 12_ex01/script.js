function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>= 0 && hora<12){
        img.src = "manha.png"
        //msg.innerHTML+="<p>Bom dia!</p>"
        document.body.style.background = "rgb(249,219,141)"
    }else if (hora>=12 && hora<18){
        img.src = "tarde.png"
        //msg.innerHTML+="<p>Boa tarde!</p>"
        document.body.style.background = "rgb(190,179,163)"
    }else{
        img.src = "noite.png"
        //msg.innerHTML+="<p>Boa noite!</p>"
        document.body.style.background = "rgb(1, 28, 45)"
    }
}