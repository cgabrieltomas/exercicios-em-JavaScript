function tabuada(){
    var txtnum = document.getElementById("txtnum")
    var num = Number(txtnum.value)
    var res = document.getElementById("seltab")
    if (txtnum.value.length == 0){
        alert("[ERRO] Preencha corretamente os dados.")
    }else{
        res.innerHTML="" // limpa minha select, antes de iniciar a tabuada, recebe nada
        for(var c=1;c<=10;c++){
            var item = document.createElement("option")
            item.text = `${num} X ${c} = ${num*c}`
            item.value = `tab${c}` //importante pra outras linguagens, PhP
            res.appendChild(item)
        }
        res.setAttribute("size", "10")
    }
}