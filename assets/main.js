//npm i - gh-pages --save-dev


const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCq0OueAsdxH6b8nyAspwViw&part=snippet%2Cid&order=date&maxResults=15'

const content = null || document.getElementById('content')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com ',
		'X-RapidAPI-Key': '9dee01037dmsh09060f7a4c01728p15a293jsn8f00d37be8a1'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const videos = await fetchData (API)
        let view = `
        ${videos.items.map(video => `
                <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>       
        `).slice(0,50).join('')}
        `;
        content.innerHTML=view
    }catch (error){
        console.log(error);
    }
})();


//async y await.
//async devuelve una promesa.
//await espera a que la promesa se ejecute y responda y devuelve resultado. - await suspende la ejecucion de la funcion hasta que se establezca la promesa.

//.then es una cadena de manejadores de errores. 
//dentro de then es posible alojar mas promesas.


//fetch: crea ordenes. carga nueva informacion. recibe actualizaciones. sin recargar la pagina. 

//necesitamos saber mas de js. 

//hay que revisar el videojuego ahora.