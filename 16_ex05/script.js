var lista = []
var tabela = document.getElementById("seltab")
var num = document.getElementById("txtnum")
var res=document.getElementById("res")

function isNumber(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, lista)){
        var item = document.createElement("option")
        item.text = `Valor ${Number(num.value)} adicionado.`
        tabela.appendChild(item)
        lista.push(Number(num.value))
        res.innerHTML=""
    }else{
        alert("Valor inválido ou já encontrado na lista")
    }
num.value = ""
num.focus()
}
function finalizar(){
    if(lista.length == 0){
        alert("Preencha corretamente os dados.")
    }else{
        var total = lista.length
        var maior = lista[0]
        var menor = lista[0]
        var soma = 0
        var média = 0
        for(var pos in lista){
            soma += lista[pos]
            if(lista[pos]>maior){
                maior= lista[pos]
            }
            if(lista[pos]<menor){
                menor = lista[pos]
            }

        }
        média = soma/lista.length
        res.innerHTML = `<p>A lista possui ${total} elementos;</p>`
        res.innerHTML += `<p>O maior valor da lista é o ${maior};</p>`
        res.innerHTML += `<p>O menor valor da lista é o ${menor};</p>`
        res.innerHTML += `<p>A soma dos elementos da lista é ${soma};</p>`
        res.innerHTML += `<p>A média dos elementos da lista é ${média.toFixed(2)};</p>`

    }
}
