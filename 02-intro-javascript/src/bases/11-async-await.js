
const getImagen = async () =>{
    
    try {

        const apikey = 'pSnWEIdiYURKQuNwm015ZWRrd7ZyoijC';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const data = await respuesta.json();
        const {url} = data.data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {

        console.error(error);
        
    }   
}

getImagen();