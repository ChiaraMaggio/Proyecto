/* window.addEventListener("load", function(){ */
    
    /* creación de un array vacío para almacenar las películas que el usuario desee agregar a la lista */

    /* let favoritos = [];

    if (localStorage.getItem("favString")!=null){
        
        favoritos = JSON.parse(localStorage.getItem("favString"));
        console.log(favoritos);

        for (let i = 0; i < favoritos.length; i++) {

            console.log(favoritos[i]); */

            /* fetch películas añadidas a favoritos */

            /* fetch(`https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=a114d2c8656f1a238841af09c2a4f418`)
            .then(function (response) {
                return response.json();
            })
            .then (function (datos) { */
                /* console.log(datos.favoritos[i]) */

                /* document.querySelector(".contenedor-géneros").innerHTML += `
                    <article class="artículo-género">
                        <div>
                            <a href="detail-movie.html?id=${favoritos[i]}"><img src="${}" alt="Portada de ${}"></a>
                            <div class="nombre-estreno">
                                <h4>${}</h4>
                                <p>${}</p>
                            </div>
                        </div>
                    </article>
                `;
            })
            .catch(function (error) {
                console.log(`El error fue: ${error}`);
            }) */

            /* fetch series añadidas a favoritos */

           /*  fetch(`https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=a114d2c8656f1a238841af09c2a4f418`)
            .then(function (response) {
                return response.json();
            })
            .then (function (datos) {
                /* console.log(datos.favoritos[i]) */

                /* document.querySelector(".contenedor-géneros").innerHTML += `
                    <article class="artículo-género">
                        <div>
                            <a href="detail-serie.html?id=${favoritos[i]}"><img src="${}" alt="Portada de ${}"></a>
                            <div class="nombre-estreno">
                                <h4>${}</h4>
                                <p>${}</p>
                            </div>
                        </div>
                    </article>
                `;
            })
            .catch(function (error) {
                console.log(`El error fue: ${error}`);
            })
        }
    }else{
        document.querySelector(".contenedor-géneros").innerHTML += `
            <h3>No tienes agregados a <span class="texto-verde">tu lista</span></h3>
        `;
    }
}) */