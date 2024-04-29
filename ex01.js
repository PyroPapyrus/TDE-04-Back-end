function resultadoSoma(numero1, numero2, callBackSucesso, callBackError) {
    const resultado = numero1 + numero2

    if (resultado % 2 === 0) {
        callBackSucesso(resultado)
    } else {
        callBackError(resultado)
    }

}


function callBackSucesso(resultado) {
    console.log("A soma foi um sucesso! Resultado: " + resultado)
}


function callBackError(resultado) {
    console.log("A operação falhou! Resultado: " + resultado)
}

resultadoSoma(1,3,callBackSucesso,callBackError)
resultadoSoma(2,5,callBackSucesso,callBackError)