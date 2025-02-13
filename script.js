
let total = 0;
let transacoes = [];

function gestor(){
    
    let valor =  parseFloat(document.getElementById("ivalor").value);
    let despesa = document.getElementById("idespesa").checked;
    let ganho = document.getElementById("iganho").checked;
    if(ganho){
        transacoes.push({tipo : "ganho", valor: valor});
        total += valor;
        document.getElementById("res-total").innerText = `Total: ${total}`;
        document.getElementById("res-ganho").innerText = `Ganho: ${valor}`;
    }else if(despesa){
        transacoes.push({tipo : "despesa", valor: valor});
        total -= valor;
        document.getElementById("res-total").innerText = `Total: ${total}`;
        document.getElementById('res-despesa').innerText = `Despesas: ${valor*-1}`;
    }
    document.getElementById("ivalor").value = "";
}