import { connectApi } from './connectApi.js';
import videoCard from './showVideos.js';

async function searchVideo(evento) {
    evento.preventDefault();

    const query = document.querySelector('[data-search]').value;
    const search = await connectApi.buscaVideos(query);

    const lista = document.querySelector('[data-lista]');

/* Enquanto lista tiver um primeiroFilho, remove primeirofilho */
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    search.forEach((elemento) =>
        lista.appendChild(
            videoCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
        )
    );
}

const searchBtn = document.querySelector('[data-searchBtn]');
searchBtn.addEventListener('click', (evento) => searchVideo(evento));
