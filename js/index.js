function visitar() {
    var projects = document.getElementById("projects");
    if (projects.value == 0) {
        $('#message').html("* Debe seleccionar una página").css({
            "color":"red", 
            "font-weight":"bold",
            "background-color": "white",
            "padding": "3px 10px",
            "border-radius": "5px"
        });
        setTimeout(()=> {
            $('#message').html("").css({
                "display":"none"
            });
            location.reload()
        },3000);
    } else if(projects.value == 1) {
        window.open("https://otro-portafolio.netlify.app/", "_blank");
    } else if(projects.value == 2) {
        window.open("https://portafolio-tres.netlify.app/", "_blank");
    } else if(projects.value == 3) {
        window.open("https://ejercicio-de-validacion-rut-chileno.netlify.app/", "_blank");
    } else if(projects.value == 4) {
        window.open("https://renderizado-de-peliculas.netlify.app/", "_blank");
    } else if(projects.value == 5) {
        window.open("https://dibujando-con-canvas.netlify.app/", "_blank");
    } else if(projects.value == 6) {
        window.open("https://proyecto-react-carrito-de-compras.netlify.app/", "_blank");
    } else if(projects.value == 7) {
        window.open("https://github.com/jpalma76", "_blank");
    }
}