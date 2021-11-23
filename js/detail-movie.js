window.addEventListener("load", function () {

    /* array para poder almacenar los id de las películas que vayan a favoritos en el localstorage */
    
    let favoritos = [];

    /* acceso a la queryString */

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let id = objetoQueryString.get('id');
    console.log(id);

    /* fetch */

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

        /* selector para el botón de favoritos */
    
        let buttonFav = document.querySelector(".fav"); 
        /*  console.log(buttonFav); para saber si capturó correctamente el elemento*/

        /* local storage */

        if (localStorage.getItem('favMovieString') != null) { 
        
            favoritos = JSON.parse(localStorage.getItem('favMovieString')); 

            /* cambios en el contenido del botón para avisar al usuario */ 
        
            if (favoritos.includes(id)) {
                buttonFav.innerText = "Remover de favoritos"; 
            } 
            else {
                buttonFav.innerText = "Agregar a favoritos";
            }
        }

        /* evento para el botón de agregar o remover */
        
        buttonFav.addEventListener('click', function () {

            /* chequear si la película está o no en el array de favoritos */
            
            if (favoritos.includes(id)){ 
                favoritos.splice(favoritos.indexOf(id),1);
                buttonFav.innerText = "Agregar a favoritos";
            } 
            else {
                favoritos.push(id); 
                buttonFav.innerText = "Remover de favoritos"; 
            }

            localStorage.setItem('favMovieString', JSON.stringify(favoritos));
            console.log(localStorage);
        })
    }) 
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })
 })
        