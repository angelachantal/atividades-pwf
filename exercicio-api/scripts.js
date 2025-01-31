function getById(id){
    return document.getElementById(id);
}

let botaoConsultarConversao = getById('botaoConsultarConversao');
botaoConsultarConversao.addEventListener('click', consultarPreco); 

let botaoInverter = getById('botaoInverter');
botaoInverter.addEventListener('click', inverterMoeda); 

let botaoLimpar = getById('botaoLimpar');
botaoLimpar.addEventListener('click', limparCampos); 

let botaoConsultarClima = getById('botaoConsultarClima');
botaoConsultarClima.addEventListener('click', consultarClima); 

let botaoConsultarNoticias = getById('botaoConsultarNoticias');
botaoConsultarNoticias.addEventListener('click', consultarNoticia);

async function consultarPreco() {
    let moedaBase = getById('moedaBase').value.toUpperCase(); // Moeda base (ex.: BTC)
    let moedaConversao = getById('moedaConversao').value.toUpperCase(); // Moeda de conversão (ex.: USDT)
    let resultadoConversao = getById('resultadoConversao');
    let url = `https://api.binance.com/api/v3/ticker/price?symbol=${moedaBase}${moedaConversao}`;
    
    try {
        let response = await fetch(url); // Faz a requisição à API Binance
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        let json = await response.json();
    
        resultadoConversao.innerHTML = `
        <p><strong>Par de Moedas:</strong> ${json.symbol}</p>
        <p><strong>Preço:</strong> ${parseFloat(json.price).toFixed(2)}${moedaConversao}</p>`;
        } catch (error) {
            resultadoConversao.innerHTML = 'Erro: ' + error.message;
        }
    }

 function inverterMoeda(){
    let moedaBase = getById("moedaBase").value;
    let moedaConversao = getById("moedaConversao").value;
    getById("moedaBase").value = moedaConversao;
    getById("moedaConversao").value = moedaBase;
    getById("resultadoConversao").innerHTML = "";
}

function limparCampos(){
    getById("moedaBase").value = "";
    getById("moedaConversao").value = "";
    getById("resultadoConversao").innerHTML = "";
}

async function consultarClima(){
    let cidade = getById('cidade').value.trim();
    let estado = getById('estado').value.trim();
    let resultadoClima = getById('resultadoClima');
    let apiKey = ''; 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${estado},br&appid=${apiKey}&lang=pt_br&units=metric`;
    
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Cidade não encontrada.`);
        }

        let jsonClima = await response.json();
        resultadoClima.innerHTML = `
        <p><strong>Cidade:</strong> ${jsonClima.name}</p>
        <p><strong>Temperatura:</strong> ${jsonClima.main.temp}°C</p>
        <p><strong>Condição:</strong> ${jsonClima.weather[0].description}</p>
        <p><strong>Umidade:</strong> ${jsonClima.main.humidity}%</p>
        `;
        } catch (error) {             
            resultadoClima.innerHTML = 'Erro: ' + error.message;         
        } 
}

async function consultarNoticia(){
    let apikey_noticias = '';
    let noticias = getById('noticias').value.trim();
    let resultadoNoticias = getById('resultadoNoticias');
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(noticias)}&api-key=${apikey_noticias}`;
    // &fq=lang:("por")

    try {
        let response = await fetch(url); 
        if (!response.ok) {
            throw new Error("Erro ao carregar as notícias.");
        }
        let jsonNoticias = await response.json();

        if (jsonNoticias.response && jsonNoticias.response.docs.length > 0) {
            let artigos = jsonNoticias.response.docs.map(article => `
                <div>
                    <h3><a href="${article.web_url}" target="_blank">${article.headline.main}</a></h3>
                    <p>${article.abstract}</p>
                    <small>Publicado em: ${new Date(article.pub_date).toLocaleDateString()}</small>
                    <hr>
                </div>
            `).join("");

            resultadoNoticias.innerHTML= artigos;
        } else {
            resultadoNoticias.innerHTML="Nenhum artigo encontrado.";
            return [];
        }
    } catch (error) {
        resultadoNoticias.innerHTML="Erro ao buscar artigos: ${error.message}";
    }
}
    
