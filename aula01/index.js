function calcularDesconto () {
    let valor =document.getElementById('preço').value;

    let resultado = valor - (valor * 0.2)
    console.log(resultado)

    let resultadoFormatado = parseFloat(resultado).toFixed(2);

    let textoResultado = `O valor do desconto de 20% do produto é: R$ ${resultadoFormatado}`;

     document.getElementsByTagName('h3') [0].innerHTML = textoResultado

}

