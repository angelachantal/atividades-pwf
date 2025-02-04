function getById(id) {
    return document.getElementById(id);
}

document.addEventListener("DOMContentLoaded", function() {
    post(1);
    post(2);
    post(3);
    post(4);
    exibirAutor(1);
    exibirAutor(2);
    exibirAutor(3);
    exibirAutor(4);

    let botaoAutor1 = getById('botaoAutor1');
    botaoAutor1.addEventListener('click',  () => maisDadosAutor(1));
    
    let botaoAutor2 = getById('botaoAutor2');
    botaoAutor2.addEventListener('click',  () => maisDadosAutor(2));

    let botaoAutor3 = getById('botaoAutor3');
    botaoAutor3.addEventListener('click',  () => maisDadosAutor(3));

    let botaoAutor4 = getById('botaoAutor4');
    botaoAutor4.addEventListener('click',  () => maisDadosAutor(4));

    let botaoComentarios1 = getById('botaoComentarios1');
    botaoComentarios1.addEventListener('click', () => exibirComentarios(1));
    
    let botaoComentarios2 = getById('botaoComentarios2');
    botaoComentarios2.addEventListener('click', () => exibirComentarios(2));
    
    let botaoComentarios3 = getById('botaoComentarios3');
    botaoComentarios3.addEventListener('click', () => exibirComentarios(3));
    
    let botaoComentarios4 = getById('botaoComentarios4');
    botaoComentarios4.addEventListener('click', () => exibirComentarios(4));
});

async function post(postId) {
    let urlPost = `https://jsonplaceholder.typicode.com/posts/${postId}`;    
    try {
        let response = await fetch(urlPost);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        let json = await response.json();
        let publicacao = getById(`post${postId}`);
        publicacao.innerHTML = `<h5 class='titulo'>${json.title}</h5><p>${json.body}</p>`;
    } catch (error) {
            resultadoConversao.innerHTML = 'Erro: ' + error.message;
        }
    }

async function exibirAutor(postId) {
        let urlAutor = `https://jsonplaceholder.typicode.com/users/${postId}`;
        try {
            let response = await fetch(urlAutor);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
            }
            let dadosAutor = await response.json();
            let autor = getById(`autor${postId}`);
            autor.innerHTML = `<p><strong>${dadosAutor.name}</strong></p><p>${dadosAutor.email}</p>`;
        } catch (error) {
            console.error('Erro:', error.message);
        }
    }

    // Função exibirComentários construída com ajuda do chatGPT Função exibirAutor construída por mim. 

    function exibirComentarios(postId) {
        window.location.href = `comentarios.html?postId=${postId}`;
    }
    if (window.location.pathname.includes("comentarios.html")) {
        document.addEventListener("DOMContentLoaded", carregarComentarios);
    }

    function maisDadosAutor(postId) {
        window.location.href = `autor.html?postId=${postId}`;
    }
    if (window.location.pathname.includes("autor.html")) {
        document.addEventListener("DOMContentLoaded", carregarDadosAutor);
    }


    function carregarComentarios() {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('postId');
    
        if (!postId) {
            console.error("ID do post não encontrado na URL.");
            return;
        }
    
        let urlComentarios = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        fetch(urlComentarios)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then(comments => {
                let comentariosDiv = document.getElementById('comentarios');
                let tituloComentarios = document.getElementById('tituloComentarios');
                tituloComentarios.innerHTML = `<h1>Comentários do Post ${postId}</h1>`
                if (comentariosDiv) {
                    comentariosDiv.innerHTML = comments.map(comment =>
                        `<p><strong>${comment.name}:</strong> ${comment.body}</p>`
                    ).join('');
                }
            })
            .catch(error => console.error('Erro ao carregar comentários:', error));
    }


    async function carregarDadosAutor() {
        const urlParams2 = new URLSearchParams(window.location.search);
        const postId2 = urlParams2.get('postId');
    
        if (!postId2) {
            console.error("ID do post não encontrado na URL.");
            return;
        }

        let urlAutor2 = `https://jsonplaceholder.typicode.com/users/${postId2}`;
        try {
            let response = await fetch(urlAutor2);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
            }
            let jsonAutor = await response.json();

            let infoAutor = document.getElementById('infoAutor');
            let tituloAutor = document.getElementById('tituloAutor');
            tituloAutor.innerHTML = `<h1>Dados do Autor do Post ${postId2}</h1>`
            
            infoAutor.innerHTML = `
            <p><strong>Nome:</strong></p><p>${jsonAutor.name}</p>
            <p><strong>Username:</strong></p><p>${jsonAutor.username}</p>
            <p><strong>Email:</strong></p><p>${jsonAutor.email}</p>
            <p><strong>Telefone:</strong></p><p>${jsonAutor.phone}</p>
            <p><strong>Site:</strong></p><p>${jsonAutor.website}</p>
            `;
            
        } catch (error) {
            console.error('Erro:', error.message);
        }
    }
    