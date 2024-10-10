async function listaVideos() {
    const conexaoApi = await fetch('http://localhost:3000/videos');
    const apiResponse = await conexaoApi.json();

    return apiResponse;
}

async function addVideos(titulo, descricao, url, imagem) {
    const conexaoApi = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        }),
    });
    const apiResponse = await conexaoApi.json();

    return apiResponse;
}

export const connectApi = {
    listaVideos, addVideos
};
