function calcular(){
    var num1 = Number(document.getElementById('n1').value)
    var num2 = Number(document.getElementById('n2').value)
    var soma = num1 + num2
    var produto = num1 * num2
    var divisao = num1 / num2
    var resto = num1 % num2

    var tr = document.createElement('tr')
    
    var td1 = tr.appendChild(document.createElement('td'))
    var td2 = tr.appendChild(document.createElement('td'))
    var td3 = tr.appendChild(document.createElement('td'))
    var td4 = tr.appendChild(document.createElement('td'))

    td1.innerHTML = soma
    td2.innerHTML = produto
    td3.innerHTML = divisao
    td4.innerHTML = resto

    document.getElementById("tabela").appendChild(tr)
}
