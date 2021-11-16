window.addEventListener("load", function(){
    
    /* acceder a la query string */
    
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let busqueda = objetoQueryString.get("buscador");
    console.log(busqueda);

    /* fetch */

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=a114d2c8656f1a238841af09c2a4f418&q=${busqueda}`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        console.log(datos.results);

        document.querySelector("section").innerHTML = `
            <h3>Buscaste <span class="texto-verde">${busqueda}</span> en God Films</h3>
        `

        for (let i = 0; i < datos.results.length; i++) {
            document.querySelector(".contenedor-géneros").innerHTML += `
                <article class="artículo-género">
                    <div>
                        <p id="clasificación">${datos.results[i].media_type} </p>
                        <a href="detail-movie.html?id=${datos.results[i].id}"><img src="https://image.tmdb.org/t/p/w185${datos.results[i].poster_path}" alt="poster 1"></a>
                        <div class="nombre-estreno">
                            <h4>${datos.results[i].name} </h4>
                            <p>${datos.results[i].first_air_date}</p>
                        </div>
                    </div>
                </article>
            `;
        }

    })

    .catch(function(error){
        console.log(`El error fue ${error}`);
    })

})