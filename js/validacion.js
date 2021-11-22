window.addEventListener("load",function(){

    /* validar form */

    let formulario = document.querySelector(".buscador"); 
    let campoBuscar = document.querySelector("[name=buscador]");
    let mensajeAlerta = document.querySelector(".alerta");

    formulario.addEventListener("submit", function(event){
        /* evitar comportamiento por defecto */
        event.preventDefault();
        /* chequear condiciones de envío del form */
        if (campoBuscar.value == ""){
            mensajeAlerta.innerText = "Búsqueda vacía";
        }
        else if (campoBuscar.value.length < 3){
            mensajeAlerta.innerText = "Ingrese al menos 3 caracteres";
        }
        /* si no hay errores, el form se debe enviar */
        else {
            /* con this se refiere al formulario y ya no al campoBuscar */
            this.submit();
        }
    })

    /* limpiar el contenido del mensaje en cuanto cambia el input del campoBuscar (desaparece el mensaje de alerta) */

    campoBuscar.addEventListener("input", function(){
        mensajeAlerta.innerText = "";
    })
})