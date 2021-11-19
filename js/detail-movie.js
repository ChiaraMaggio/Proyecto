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

            document.querySelector(`.titulo-detalle`).innerHTML += `
            <h2> ${datos.title} </h2>
        `
            document.querySelector(`.contenedor-detalles`).innerHTML += `
                <div class="portada">
                    <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="Photo"
                </div>
                <div class="contenedor-desc-lis">
                    <p class="descripción">${datos.overwiew}</p>
                    <ul>
                        <li class="lista">
                            <h4> Reparto: </h4>
                            <span> </span>
                        </li>
                        <li class="lista">
                            <h4> Duración: </h4>
                            <span>${datos.runtime} minutes </span>
                        </li>
                        <li class="lista">
                            <span><a href="detallegeneros.html"> ${datos.genres[3]}.name </a></span>                      
                        </li>
                        <li class="lista">
                            <h4> Calificación:</h4>
                            <span> ${datos.vote_average}</span>
                        </li>
                        <li class="lista">
                            <h4> Producción:${datos.production_companies[4]} </h4>
                            <span></span>
                        </li>
                        <li class="lista">

                    /* <form action="favoritos.html" method="GET" class="form-fav">
                        <label><h4>Añadir a Mi lista</h4></label>
                        <button type="submit" class="fav"><i class="fas fa-heart"></i></button>  */


                        
                /div>
     `
        }).catch(function(error){
            console.log(`El error fue: ${error}`)
        })

    //Selector para el botón de favoritos.
     let buttonFav = document.querySelector('.fav')

    //Local Storage

     if (localStorage.getItem('favoritosToString') != null) {
        favoritos = JSON.parse(localStorage.getItem('favoritosToString'));
        if (favoritos.includes(id)) {
            buttonFav.innerHTML = `Remover de favoritos`;
        } else {
            buttonFav.innerHTML = `Agregar a favoritos`;
        }
    }
 
    //Evento para el botón de agregar o remover.


    buttonFav.addEventListener('click', function (e) {

        // e.preventDefault(); En caso de ser un hipervínculo (etiquetas <a href="">Enlace</a>)

        if (favoritos.includes(id)) {
            favoritos.splice(favoritos.indexOf(id, 1));
            buttonFav.innerHTML = `Agregar a favoritos`;
        } else {
            favoritos.push(id);
            buttonFav.innerHTML = `Remover de favoritos`;
        }

        localStorage.setItem('favoritosToString', JSON.stringify(favoritos));
        console.log(localStorage);

    })

   
})
/* https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster.path} */