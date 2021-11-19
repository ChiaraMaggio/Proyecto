window.addEventListener("load", function(){
    
    /* acceder a la querystring */

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let busqueda = objetoQueryString.get("id");

    /* fetch sección 1 */

    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${busqueda}&api_key=a114d2c8656f1a238841af09c2a4f418`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        
        console.log(datos.results);  

        for (let i = 0; i < datos.results.length; i++) {
            document.querySelector(".contenedor-géneros").innerHTML += `
            
                <article>
                    <div>
                        <img src="https://image.tmdb.org/t/p/w185${datos.results[i].backdrop_path}" alt="poster 2">   
                        <div class="nombre-estreno">
                        <h4>${datos.results[i].original_title}</h4>
                        <p>${datos.results[i].release_date}</p>
                        </div>
                    </div>
                </article>   
            `;
        }
    })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })        
    

/*     fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=a114d2c8656f1a238841af09c2a4f418`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        
        console.log(datos);

        for (let i = 0; i < 5; i++) {
            document.querySelector(".contenedor-géneros2").innerHTML += `
        
                <article>
                    <div>
                        <a href="detallegeneros.html"></a>   
                        <div class="nombre-estreno">
                        <a href="detallegeneros.html"><h3>${datos.genres[i].name}</h3></a>
                        <p>${datos.genres[i].id}</p>
                        </div>
                    </div>
                </article>   
            `;
        }
    })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    }) */
   


    
})































/* window.addEventListener('load', function(){

    // Array para almacenar ids de Gifs favoritos
    let favoritos = [];
    
    // Acceder a la Query String
    
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let idGif = objetoQueryString.get('idGif');
    console.log(idGif)
    
    // fetch
    
    fetch(`https://api.giphy.com/v1/gifs/${idGif}?api_key=QWhylJzN2YEo4E02DqmuPkRgUfg2dvK2`)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
    
            console.log(datos.data);
    
            document.querySelector('section').innerHTML = `
                <article>
                    <h3>${datos.data.title}</h3>
                    <div><img src="${datos.data.images.original.url}" alt=""></div>
                    <p><b>Username:</b> ${datos.data.username}</p>
                    <p><b>idGIF:</b> ${datos.data.id}</p>
                    <button class="fav">Agregar a favoritos</button>
                </article>
            `;
    
            // Selector del botón favorito
            let buttonFav = document.querySelector('.fav');
            
            // localStorage
                
            if(localStorage.getItem('favoritosToString')!=null){
                favoritos = JSON.parse(localStorage.getItem('favoritosToString'));
                if(favoritos.includes(idGif)) {
                    buttonFav.innerHTML = `Remover de favoritos`;
                }else{
                    buttonFav.innerHTML = `Agregar a favoritos`;
                }
            }
            
            // Evento del botón agregar/remover favorito
    
            buttonFav.addEventListener('click', function(e){
    
                // e.preventDefault(); En caso de ser un hipervínculo (etiquetas <a href="">Enlace</a>)
    
                if (favoritos.includes(idGif)){
                    favoritos.splice(favoritos.indexOf(idGif),1);
                    buttonFav.innerHTML = `Agregar a favoritos`;
                }else{
                    favoritos.push(idGif);
                    buttonFav.innerHTML = `Remover de favoritos`;
                }
                
                localStorage.setItem('favoritosToString', JSON.stringify(favoritos));
                console.log(localStorage);
    
            })
    
        })
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })
    
    }) */