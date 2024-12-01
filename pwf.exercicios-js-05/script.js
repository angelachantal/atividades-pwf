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

let enviartexto = getById('enviartexto');
enviartexto.addEventListener('click', () =>{
    let inserirtexto = getById('inserirtexto').value;
    let texto = getById('texto')
    texto.innerHTML = inserirtexto
})

// let fontSizeOriginal;

let aumentartexto = getById('aumentarfonte');
aumentartexto.addEventListener('click', () =>{

})

let diminuirfonte = getById('diminuirfonte');
diminuirfonte.addEventListener('click', ()=>{

})
