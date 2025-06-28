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
            //location.reload()
        },3000);
    } else if(projects.value == 1) {
        window.open("https://porfolio-version-azul.netlify.app/", "_blank");
    } else if(projects.value == 2) {
        window.open("https://copia-de-portfolio-dev.netlify.app/", "_blank");
    } else if(projects.value == 3) {
        window.open("https://la-desvelada-v-sitio-no-oficial.netlify.app/", "_blank");
    } else if(projects.value == 4) {
        window.open("https://portafolio-con-astro.netlify.app/", "_blank");
    } else if(projects.value == 5) {
        window.open("https://portafolio-tres.netlify.app/", "_blank");   
    } else if(projects.value == 6) {
        window.open("https://copia-de-pre-landing-de-la-velada-iv.netlify.app/", "_blank");
    } else if(projects.value == 7) {
        window.open("https://renderizado-de-peliculas.netlify.app/", "_blank");
    } else if(projects.value == 8) {
        window.open("https://proyecto-react-carrito-de-compras.netlify.app/", "_blank");
    } else if(projects.value == 9) {
        window.open("https://github.com/jpalma76", "_blank");
    }
}