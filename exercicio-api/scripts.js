function getByID(id) {
  return document.getElementById(id);
}

let botaoConsultar = getByID("botaoConsultar");
let botaoLimpar = getByID("botaoLimpar");
let botaoInverter = getByID("botaoInverter");

botaoConsultar.addEventListener("click", consultarPreco);
botaoLimpar.addEventListener("click", limparConsulta);
botaoInverter.addEventListener("click", inverterMoedas);

async function consultarPreco() {
  let moedaBase = getByID("moedaBase").value.toUpperCase(); // Moeda base (ex.: BTC)
  let moedaConversao = getByID("moedaConversao").value.toUpperCase(); // Moeda de conversão (ex.: USDT)
  let resultado = getByID("resultado");
  if (!moedaBase || !moedaConversao) {
    resultado.innerHTML = "Preencha todos os campos!";
    return;
  }
  let url = `https://api.binance.com/api/v3/ticker/price?symbol=${moedaBase}${moedaConversao}`;
  try {
    let response = await fetch(url); // Faz a requisição à API Binance
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }
    let json = await response.json();
    resultado.innerHTML = ` 
        <p><strong>Par de Moedas:</strong> ${json.symbol}</p>
        <p><strong>Preço:</strong> ${parseFloat(json.price).toFixed(
          2
        )} ${moedaConversao}</p>`;
  } catch (error) {
    resultado.innerHTML = "Erro: " + error.message;
  }
}
function limparConsulta() {
  getByID("moedaBase").value = "";
  getByID("moedaConversao").value = "";
  getByID("resultado").innerHTML = "";
}
function inverterMoedas() {
  let moedaBase = getByID("moedaBase").value;
  let moedaConversao = getByID("moedaConversao").value;
  getByID("moedaBase").value = moedaConversao;
  getByID("moedaConversao").value = moedaBase;
  consultarPreco();
}

const botaoConsultarClima = getByID('botaoConsultarClima');
const resultadoClima = getByID('resultadoClima');
botaoConsultarClima.addEventListener('click', consultarClima);

async function consultarClima() {
  const cidade = getByID('cidade').value.trim();
  const estado = getByID('estado').value.trim();

  if (!cidade || !estado) {
    resultadoClima.innerHTML = 'Por favor, preencha a cidade e o estado!';
    return;
  }

  const apiKey = 'ba4f880f95e2bafcccf7046e0533a697';  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${estado},br&appid=${apiKey}&lang=pt_br&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Cidade não encontrada.');
    }
    const data = await response.json();
    resultadoClima.innerHTML = `
      <p><strong>Cidade:</strong> ${data.name}</p>
      <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
      <p><strong>Condição:</strong> ${data.weather[0].description}</p>
      <p><strong>Umidade:</strong> ${data.main.humidity}%</p>
      <p><strong>Pressão:</strong> ${data.main.pressure} hPa</p>
    `;
  } catch (error) {
    resultadoClima.innerHTML = `Erro: ${error.message}`;
  }
}



const botaoConsultarNoticias = getByID('botaoConsultarNoticias');
const resultadoNoticias = getByID('resultadoNoticias');
botaoConsultarNoticias.addEventListener('click', consultarNoticias);

async function consultarNoticias() {
  const categoria = getByID('categoriaNoticias').value.trim();

  if (!categoria) {
    resultadoNoticias.innerHTML = 'Por favor, digite uma categoria!';
    return;
  }

  const url = `https://newsdata.io/api/1/news?apikey=pub_66914f4f5875ed0db171045551b90cdb83c22&q=${categoria}&language=pt`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao carregar as notícias.');
    }
    const data = await response.json();
    if (data.results.length === 0) {
      resultadoNoticias.innerHTML = 'Não há notícias disponíveis para essa categoria.';
      return;
    }
    resultadoNoticias.innerHTML = data.results.map(article => `
      <div class="noticia">
        <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
        <p>${article.description}</p>
        <p><strong>Fonte:</strong> ${article.source_id}</p>
      </div>
    `).join('');
  } catch (error) {
    resultadoNoticias.innerHTML = `Erro: ${error.message}`;
  }
}
 