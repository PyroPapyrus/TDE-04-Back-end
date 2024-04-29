function somaPromise(numero1, numero2) {
    return new Promise((resolve,reject) =>{
        const resultado = numero1 + numero2

        if(resultado % 2 === 0) {
            resolve(resultado)
        } else {
            reject(resultado)
        }
    })
}


somaPromise(1,4)
.then( resultado =>{
    console.log("A operação foi um sucesso! Resultado par: " + resultado)
})

.catch( resultado =>{
    console.log("A soma falhou! Resultado ímpar: " + resultado)
})

