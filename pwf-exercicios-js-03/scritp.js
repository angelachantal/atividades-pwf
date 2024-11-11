function getById(id) {
    return document.getElementById(id)
};

function clique (id, funcao){
    getById(id).addEventListener("click", funcao)
};

// 1.1) Leia um texto de uma caixa de texto e exiba-o invertido usando a função das strings chamada reverse().
clique ('enviarFrase', () => {
    let frase1 = document.getElementById('frase').value
    let invertida = frase1.split('').reverse().join('')   
    
    getById('fraseInvertida').innerHTML = invertida
});

// 1.2) Leia um texto de uma caixa de texto que represente um número. Adicione 5 zeros à esquerda usando a função padStart() das strings.
clique('enviarNumero', () =>{
    let numero = document.getElementById('digitarNumero').value
    getById('mostrarNumero').innerHTML = numero.padStart(5,'0')
});

// 2) Leia 2 números e exiba as 4 operações matemáticas básicas.

clique ('enviarNumeros', () =>{
    let numero1 = parseFloat(document.getElementById('digitarNumero-1').value);
    let numero2 = parseFloat(document.getElementById('digitarNumero-2').value);
    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    getById('mostrarOperacoes').innerHTML =`
        Soma: ${soma}<br>
        Subtração: ${subtracao}<br>
        Multiplicação: ${multiplicacao}<br>
        Divisão: ${divisao}
    `
});

//3) Leia uma temperatura em Celsius e converta para Fahrenheit.
clique ('converterTemperatura', () =>{
    let temperaturaC = parseFloat(document.getElementById('digitarTemperaturaC').value)
    let temperaturaF = (temperaturaC * 9/5) + 32 
    getById('mostrarTemperaturaF').innerHTML=`
        Temperatura em Fahrenheit: ${temperaturaF}
    `
})
