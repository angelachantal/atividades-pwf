function getById(id){
    return document.getElementById(id);
}

let exibircaixa = getById('exibircaixa');
let ocultarcaixa = getById('ocultarcaixa');
let resultado = getById('resultado');

exibircaixa.addEventListener('click', () =>{
    resultado.style.visibility = 'visible';
});

ocultarcaixa.addEventListener('click', () =>{
    resultado.style.visibility = 'hidden';
});

// exibircaixa.addEventListener('click', () =>{
//     function visivel (resultado){
//         return resultado.style.visibility = 'visible';
//     };
//     if (visivel){
//         resultado.style.visibility = 'hidden';
//     }else{
//         resultado.style.visibility = 'visible';
//     }
// })

let enviarTexto = getById('enviarTexto');
let texto = getById('texto');
let fonte = texto.style.fontSize;

enviarTexto.addEventListener('click', () =>{
    let inserirTexto = getById('inserirTexto').value;
    texto.innerHTML = inserirTexto;
});

let aumentarTexto = getById('aumentarFonte');
aumentarTexto.addEventListener('click', () =>{
    texto.style.fontSize = parseInt(fonte);
    let fonteAumentada = texto.style.fontSize + 1;
    texto.style.fontSize = fonteAumentada + 'px';
});

let hora = getById('hora').value;
let enviarHora = getById('enviarHora');
enviarHora.addEventListener('click', () =>{
    // if  
})

let alterarClasse = getById('alterarClasse');
alterarClasse.addEventListener('click', () =>{
    caixaClasse.classList.toggle('novoEstilo')
})
