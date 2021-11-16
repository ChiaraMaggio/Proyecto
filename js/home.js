/* Clave de la API = a114d2c8656f1a238841af09c2a4f418 */

const apiKey = "a114d2c8656f1a238841af09c2a4f418";

/* Comillas invertidas = `` */
/* Parte inicial de la url de imágenes = https://image.tmdb.org/t/p/w200 */

window.addEventListener("load", function(){
    
    /* fetch sección 1 */

    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        
        console.log(datos.results);  

        for (let i = 1; i < 3; i++) {
            document.querySelector(".contenedor-artículo1").innerHTML += `
                <article>
                    <div>
                        <a href="detail-movie.html?id=${datos.results[i].id}"><img src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="poster 1"></a>
                        <div class="nombre-estreno">
                            <h4>${datos.results[i].title}</h4>
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

    fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        
        console.log(datos.results);

        for (let i = 0; i < 3; i++) {
            document.querySelector(".contenedor-artículo1").innerHTML += `
        
                <article>
                    <div>
                        <a href="detail-serie.html?id=${datos.results[i].id}"><img src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="poster 2"></a>
                        <div class="nombre-estreno">
                            <h4>${datos.results[i].name}</h4>
                            <p>${datos.results[i].first_air_date}</p>
                        </div>
                    </div>
                </article>
            `;
        }
    })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })
   
    /* fetch sección 2 */

    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        
        console.log(datos.results);  

        for (let i = 3; i < 5; i++) {
            document.querySelector(".contenedor-artículo2").innerHTML += `
                <article>
                    <div>
                        <a href="detail-movie.html?id=${datos.results[i].id}"><img src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="poster 1"></a>
                        <div class="nombre-estreno">
                            <h4>${datos.results[i].title}</h4>
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

    fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        
        console.log(datos.results);

        for (let i = 3; i < 6; i++) {
            document.querySelector(".contenedor-artículo2").innerHTML += `
        
                <article>
                    <div>
                        <a href="detail-serie.html?id=${datos.results[i].id}"><img src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="poster 2"></a>
                        <div class="nombre-estreno">
                            <h4>${datos.results[i].name}</h4>
                            <p>${datos.results[i].first_air_date}</p>
                        </div>
                    </div>
                </article>
            `;
        }
    })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    /* fetch sección 3 */

    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        
        console.log(datos.results);  

        for (let i = 5; i < 7; i++) {
            document.querySelector(".contenedor-artículo3").innerHTML += `
                <article>
                    <div>
                        <a href="detail-movie.html?id=${datos.results[i].id}"><img src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="poster 1"></a>
                        <div class="nombre-estreno">
                            <h4>${datos.results[i].title}</h4>
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

    fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        
        console.log(datos.results);

        for (let i = 6; i < 9; i++) {
            document.querySelector(".contenedor-artículo3").innerHTML += `
        
                <article>
                    <div>
                        <a href="detail-serie.html?id=${datos.results[i].id}"><img src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="poster 2"></a>
                        <div class="nombre-estreno">
                            <h4>${datos.results[i].name}</h4>
                            <p>${datos.results[i].first_air_date}</p>
                        </div>
                    </div>
                </article>
            `;
        }
    })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

})
