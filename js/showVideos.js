import { connectApi } from './connectApi.js';

const lista = document.querySelector('[data-lista]');

export default function videoCard(titulo, descricao, url, imagem) {
    const video = document.createElement('li'); //cria elemento li no dom
    video.className = 'videos__item'; //elemento com classe videos__item
    //cria a estrutura para o elemento li
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`;

    return video;
}

//async function para chamar função que conecta com a API
async function listaVideo() {
    const listaApi = await connectApi.listaVideos();
    //para cada elemento da listaApi
    listaApi.forEach((element) => {
        //adiciona um filho à lista(ul)
        lista.appendChild(
            //filho será retorno da função videoCard (li)
            videoCard(element.titulo, element.descricao, element.url, element.imagem)
        );
    });
}

listaVideo();
