

const apikey = 'pSnWEIdiYURKQuNwm015ZWRrd7ZyoijC';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion
    .then( resp => resp.json() )
    .then (data => {
       // console.log(data.data.images.original.url);
       const {url} = data.data.images.original;
       const img = document.createElement('img');
       img.src = url;

       document.body.append(img);
    }) 
    .catch(console.warn);
   