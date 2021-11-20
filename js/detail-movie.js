window.addEventListener(`load`, function () {

    /* Array para poder almacenar los id de las películas que vayan a favoritos */
    
    let favoritos = [];

    /* Acceso QueryString */

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let id = objetoQueryString.get('id');
    console.log(id);

    /* Fetch */

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5176e8222efbe559636bd80e7f2092f9`)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {

            console.log(datos);

            document.querySelector("#título-detalle").innerText += `${datos.original_title}`;

            document.querySelector(".contenedor-detalles").innerHTML += `
                <div id="portada">
                    <img class="portadas" src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="Portada de ${datos.original_title}"
                </div>
            `;

            document.querySelector(".contenedor-lis-desc").innerHTML += `
                <p class="descripción">${datos.overview}</p>
                <ul>
                    <li class="lista"> 
                        <h4>Estreno: </h4>
                        <span>${datos.release_date} </span>
                    </li>
                    <li class="lista"> 
                        <h4>Duración: </h4>
                        <span>${datos.runtime} minutos</span>
                    </li>
                    <li class="lista">
                        <a href="generos.html"><h4>Género: </h4></a>
                        <span><a href="detallegeneros.html?id=${datos.genres[0].id}">${datos.genres[0].name}</a></span>
                    </li>
                    <li class="lista"> 
                        <h4>Calificación: </h4>
                        <span>${datos.vote_average}</span> 
                    </li>
                    <li class="lista"> 
                        <h4>Productora: </h4>
                        <span>${datos.production_companies[0].name}</span> 
                    </li>
                </ul>
            `;
        })
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })


        /* TODO LO DE ABAJO HAY QUE REVISAR PORQUE NO FUNCIONA. EN LO DE ARRIBA NO HACER MÁS CAMBIOS. */

    /* Selector para el hipervínculo de favoritos */
     
    let buttonFav = document.querySelector(".fav");
    console.log(buttonFav);

    /* Local Storage */

    if (localStorage.getItem('favString') != null) {
        favoritos = JSON.parse(localStorage.getItem('favString'));

        /* cambios en el texto del hipervínculo para avisar al usuario */

        if (favoritos.includes(id)) {
            buttonFav.innerHTML = "Remover de favoritos";
        } else {
            buttonFav.innerHTML = "Agregar a favoritos";
        }
    }

    /* Evento para el hipervínculo de agregar o remover */

    buttonFav.addEventListener('click', function (e) {

        /* chequear si la película está o no en el array de favoritos */
        
        if (favoritos.includes(id)) {
            favoritos.splice(favoritos.indexOf(id, 1));
            buttonFav.innerHTML = `Agregar a favoritos`;
        } else {
            favoritos.push(id);
            buttonFav.innerHTML = `Remover de favoritos`;
        }

        localStorage.setItem('favString', JSON.stringify(favoritos));
        console.log(localStorage);
    }) 
})

/* https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster.path} */