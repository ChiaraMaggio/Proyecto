window.addEventListener("load", function(){
    
    /* acceder a la querystring */

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let id = objetoQueryString.get("id");
    let tipo = objetoQueryString.get("tipo");
    let nombre = objetoQueryString.get("name")
    let urlApi;

    if(tipo == "movie"){
        urlApi = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=a114d2c8656f1a238841af09c2a4f418`;
    }else {
        urlApi = `https://api.themoviedb.org/3/discover/tv?with_genres=${id}&api_key=a114d2c8656f1a238841af09c2a4f418`
    }
    /* fetch sección películas */

    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=a114d2c8656f1a238841af09c2a4f418`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos.results);
        
        document.querySelector(".título-h2").innerHTML =  `
            ${nombre}
        `;

        for (let i = 0; i < datos.results.length; i++) {
            document.querySelector(".contenedor-géneros").innerHTML += `
                <article class="artículo-género">
                    <div>
                        <a href="detail-movie.html?id=${datos.results[i].id}"><img class="portadas" src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="Portada de ${datos.results[i].original_title}"></a>   
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
    
    /* fetch sección series */

    /* fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${id}&api_key=a114d2c8656f1a238841af09c2a4f418`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){     
        console.log(datos.results);

        for (let i = 0; i < datos.results.length; i++) {
            document.querySelector(".contenedor-géneros").innerHTML += `
                <article class="artículo-género">
                    <div>
                        <a href="detail-serie.html?id=${datos.results[i].id}"><img class="portadas" src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="Portada de ${datos.results[i].original_name}"></a>    
                        <div class="nombre-estreno">
                            <h4>${datos.results[i].original_name}</h4>
                            <p>${datos.results[i].first_air_date}</p>
                        </div>
                    </div>
                </article>
            `; 
        }
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })  */
   
})
