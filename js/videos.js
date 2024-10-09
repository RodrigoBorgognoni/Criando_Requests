import { apiResponse } from "./connectApi.js";

const lista = document.querySelector('[data-lista]');

function videoCard() {
    const video = document.createElement('li'); //cria elemento li no dom
    video.className('videos__item')//elemento com classe videos__item
    //cria a estrutura para o elemento li
    video.innerHTML = `<iframe width="100%" height="72%" src="https://www.youtube.com/embed/pA-EgOaF23I"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="./img/logo.png" alt="logo canal alura">
                <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
                <p>236 mil visualizações</p>
            </div>`

    return video;
}

//async function para chamar função que conecta com a API
async function listaVideo() {
    const lista = await apiResponse.listaVideos();
}