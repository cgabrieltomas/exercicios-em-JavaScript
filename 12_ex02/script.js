function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtnasc")
    var res = document.getElementById("res")
    if(fano.value.length == 0 || Number(fano.value)>ano){
        alert("[ERRO] Verifique os dados e tente novamente.")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano-Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id","foto") // é como se eu fosse no html criar uma tag img com id = "foto" 
        if(fsex[0].checked){ //esse [0] indica a primeira opção
            gênero = "Homem"
            if(idade >=0 && idade<12){
                img.setAttribute("src" , "criançaH.png")
                //
            }else if (idade<21){
                img.setAttribute("src", "jovemH.png")
                //
            }else if (idade<60){
                img.setAttribute("src", "adultoH.png")
                //
            }else{
                img.setAttribute("src", "idosoH.png")
                //
            }
        }else{
            gênero = "Mulher"
            if(idade >=0 && idade<12){
                img.setAttribute("src", "criançaM.png")
                //
            }else if (idade<21){
                img.setAttribute("src", "jovemM.png")
                //
            }else if (idade<60){
                img.setAttribute("src", "adultoM.png")
                //
            }else{
                img.setAttribute("src", "idosoM.png")
                //
            }
        }
        //res.style.textAlign = "center"
        res.innerHTML = `Detectamos: ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}