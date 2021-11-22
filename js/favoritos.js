window.addEventListener("load", function(){
    
    /* creación de un array vacío para almacenar las películas y series que el usuario desee agregar a la lista */

    let favoritos = [];

    if (localStorage.getItem("favMovieString")!=null){
        
        favoritos = JSON.parse(localStorage.getItem("favMovieString"));
        console.log(favoritos);

        for (let i = 0; i < favoritos.length; i++) {

            /* fetch películas añadidas a favoritos */

            fetch(`https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=a114d2c8656f1a238841af09c2a4f418`)
            .then(function (response) {
                return response.json();
            })
            .then (function (datos) {
                
                console.log(datos);

                document.querySelector(".contenedor-géneros").innerHTML += `
                    <article class="artículo-género">
                        <div>
                            <p id="clasificación">Película</p>
                            <a href="detail-movie.html?id=${favoritos[i]}"><img class="portadas" src="https://image.tmdb.org/t/p/w200${datos.poster_path}" alt="Portada de ${datos.original_title}"></a>
                            <div class="nombre-estreno">
                                <h4>${datos.original_title}</h4>
                                <p>${datos.release_date}</p>
                            </div>
                        </div>
                    </article>
                `;
            })
            .catch(function (error) {
                console.log(`El error fue: ${error}`);
            })
        }
    }

    if(localStorage.getItem("favSerieString")!=null){
        
        favoritos = JSON.parse(localStorage.getItem("favSerieString"));
        console.log(favoritos);

        for (let i = 0; i < favoritos.length; i++) {

            /* fetch series añadidas a favoritos */

            fetch(`https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=a114d2c8656f1a238841af09c2a4f418`)
            .then(function (response) {
                return response.json();
            })
            .then (function (datos) {
                
                console.log(datos);

                document.querySelector(".contenedor-géneros").innerHTML += `
                    <article class="artículo-género">
                        <div>
                            <p id="clasificación">Serie</p>
                            <a href="detail-serie.html?id=${favoritos[i]}"><img class="portadas" src="https://image.tmdb.org/t/p/w200${datos.poster_path}" alt="Portada de ${datos.original_name}"></a>
                            <div class="nombre-estreno">
                                <h4>${datos.original_name}</h4>
                                <p>${datos.first_air_date}</p>
                            </div>
                        </div>
                    </article>
                `;
            })
            .catch(function (error) {
                console.log(`El error fue: ${error}`);
            })
        }
    }

    /* if(favoritos.length == 0){
        document.querySelector("#leyenda-fav").innerHTML = `
            <h3>No tienes agregados a <span class="texto-verde">tu lista</span></h3>
        `;
    }else{
        document.querySelector("#leyenda-fav").style.display = "none"; 
    } */
})