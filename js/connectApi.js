async function listaVideos() {
    const conexaoApi = await fetch('http://localhost:3000/videos');
    const apiResponse = await conexaoApi.json();

    return apiResponse;

}

export const connectApi = {
    listaVideos
}