/*  1) Crie uma funcionalidade (página + script) que tenha dois botões:
    a) Em um, chame uma função chamada boaTarde(), escrevendo a frase boa tarde em uma div.
    b) No outro, chame uma função chamada boaNoite(), escrevendo a frase boa noite na mesma div.
    Altere a questão anterior para ler de uma caixa de texto o nome da pessoa a receber a saudação. Dessa forma, deve ser exibido algo como: “Boa tarde, Ely” ou “Boa noite, Fulano”*/

var botao1 = document.getElementById('boaTarde');
botao1.addEventListener('click', cliqueDoBotao1);

var botao2 = document.getElementById('boaNoite');
botao2.addEventListener('click', cliqueDoBotao2);

function cliqueDoBotao2() {
    var saudacao = document.getElementById('saudacao');
    var nome= document.getElementById('nome').value;
    saudacao.innerHTML = saudacao.innerHTML + 'Boa Noite, '+ nome +'!'+ '<br>';
}

function cliqueDoBotao1() {
    var saudacao = document.getElementById('saudacao');
    var nome= document.getElementById('nome').value;
    saudacao.innerHTML = 'Boa Tarde, ' + nome +'!'+ '<br>';
}

//3) Pesquise a biblioteca Math no w3schools e crie uma implementação que://
//a) Exiba um número randômico entre 1 e 10 (Math.random);//
var botao3 = document.getElementById('exibirNumRandom');
botao3.addEventListener('click', cliqueDoBotao3);

function cliqueDoBotao3() {
    var numeroRandom = document.getElementById('numRandom');
    numeroRandom.innerHTML = Math.random();
}

//b) Exiba o valor absoluto de um número lido (Math.abs);//
var botao4 = document.getElementById('exibirValorAbsoluto');
botao4.addEventListener('click', cliqueDoBotao4);

function cliqueDoBotao4() {
    var num_1 = document.getElementById('numero_1').value;
    var valAbs = document.getElementById('valorAbsoluto');
    valAbs.innerHTML = Math.abs(num_1);
}

//c) Leia 2 números e exiba o maior deles (Math.max);//
var botao5 = document.getElementById('exibirMaiorNumero');
botao5.addEventListener('click', cliqueDoBotao5);

function cliqueDoBotao5() {
    var num_3 = document.getElementById('numero_3').value;
    var num_4 = document.getElementById('numero_4').value;
    var maiorNum = document.getElementById('maiorNumero');
    maiorNum.innerHTML = Math.max(num_3, num_4);
}

//d) Leia um número real e exiba-o de forma arredondada (Math.round);//
var botao6 = document.getElementById('exibirValorArredondado');
botao6.addEventListener('click', cliqueDoBotao6);

function cliqueDoBotao6() {
    var num_5 = document.getElementById('numero_5').value;
    var valRound = document.getElementById('valorArredondado');
    valRound.innerHTML = Math.round(num_5);
}

//e) Leia dois números e exiba um elevado ao outro (Math.pow)//
var botao7 = document.getElementById('elevarNumero');
botao7.addEventListener('click', cliqueDoBotao7);

function cliqueDoBotao7(){
    var num_6 = document.getElementById('numero_6').value;
    var num_7 = document.getElementById('numero_7').value;
    var numPow = document.getElementById('numeroElevado');
    numPow.innerHTML = Math.pow(num_6,num_7);
}

// 4) Pesquise a documentação para uso de métodos de strings e crie implementações que:
// a) Exiba o seu tamanho (length);
var botao8 = document.getElementById('enviarFrase1');
botao8.addEventListener('click', cliqueDoBotao8);

function cliqueDoBotao8(){
    var frase1 = document.getElementById('frase1').value;
    var fraseLength = document.getElementById('tamanho');
    fraseLength.innerHTML = frase1.length;
}

// b) Converta-o para minúsculo (toLowerCase);
var botao9 = document.getElementById('enviarFrase2');
botao9.addEventListener('click', cliqueDoBotao9);

function cliqueDoBotao9(){
    var frase2 = document.getElementById('frase2').value;
    var fraseMinusculo = document.getElementById('minusculo');
    fraseMinusculo.innerHTML = frase2.toLowerCase();
}
    
// c) Substitua as ocorrências de 'a', 'e', 'i', 'o' por '@', '3', '1', '0' (replace);
var botao10 = document.getElementById('enviarFrase3');
botao10.addEventListener('click', cliqueDoBotao10);

function cliqueDoBotao10(){
    var frase3 = document.getElementById('frase3').value;
    var fraseReplace = document.getElementById('substituir');
    fraseReplace.innerHTML = frase3.replace(/a/g, '@').replace(/e/g, '3').replace(/i/g, '1').replace(/o/g,'0');
}

// d) Exiba-o sem espaços antes e depois (trim);
var botao11 = document.getElementById('enviarFrase4');
botao11.addEventListener('click', cliqueDoBotao11);

function cliqueDoBotao11(){
    var frase4 = document.getElementById('frase4').value;
    var fraseTrim = document.getElementById('semEspaco');
    fraseTrim.innerHTML = frase4.trim();
}

// Crie implementações que:
// a) Leia o nome e o sobrenome de uma pessoa de duas caixas de texto eexiba o nome completo;
// b) Leia 2 números de um formulário HTML números e exiba a soma e
// diferença deles;
// c) Limpe o conteúdo de uma Caixa ao clicar em um botão.
// d) Copie o texto de uma caixa de texto para outra.