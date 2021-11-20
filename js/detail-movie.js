window.addEventListener(`load`, function () {

    //Array para poder almacenar los ID de las películas que vayan a favoritos.
    
    let favoritos = [];

    //Acceso QueryString

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let id = objetoQueryString.get('id');
    console.log(id);

    //Fetch
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5176e8222efbe559636bd80e7f2092f9`)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {

            console.log(datos);

            document.querySelector("#título-detalle").innerText += `${datos.original_title}`;

            document.querySelector(".contenedor-detalles").innerHTML += `
                <div id="portada">
                    <img class="portadas" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="Portada de ${datos.original_title}"
                </div>
                <div class="contenedor-desc-lis">
                    <p class="descripción">${datos.overview}</p>
                    <ul>
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
                            <h4>Productoras: </h4>
                            <span>${datos.production_companies[0].name}</span> 
                        </li>
                        <li class="lista">
                            <button class="fav">Agregar a favoritos</button>   
                        </li>
                        </ul>
                </div>        
            `;
        })
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })

    /* Selector para el hipervínculo de favoritos */
     
    let hipervínculoFav = document.querySelector(".fav");

    /* Local Storage */

    if (localStorage.getItem('favString') != null) {
        favoritos = JSON.parse(localStorage.getItem('favString'));
        /* cambios en el texto del hipervínculo para avisar al usuario */
        if (favoritos.includes(id)) {
            hipervínculoFav.innerHTML = `Remover de favoritos`;
        } else {
            hipervínculoFav.innerHTML = `Agregar a favoritos`;
        }
    }

    /* Evento para el hipervínculo de agregar o remover */

    hipervínculoFav.addEventListener('submit', function (e) {
        /* evitar el comportamiento por defecto del hipervínculo */
        e.preventDefault();
        /* chequear si la película está o no en el array de favoritos */
        if (favoritos.includes(id)) {
            favoritos.splice(favoritos.indexOf(id, 1));
            hipervínculoFav.innerHTML = `Agregar a favoritos`;
        } else {
            favoritos.push(id);
            hipervínculoFav.innerHTML = `Remover de favoritos`;
        }

        localStorage.setItem('favString', JSON.stringify(favoritos));
        console.log(localStorage);
    })
    
})

/* https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster.path} */