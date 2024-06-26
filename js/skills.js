
let cursos = [

    {
        "id": 1,
        "name": "Aplicación de Herramientas para la Certificación de Calidad de Servicios de Telecomunicaciones HFC",
        "image": "./img-certificados/certificaciones-vtr/aplicación_de_herramientas_para_la_certificación_de_calidad_de_servicios_de_telecomunicaciones-min.png",
        "url": "./img-certificados/certificaciones-vtr/aplicación_de_herramientas_para_la_certificación_de_calidad_de_servicios_de_telecomunicaciones-min.png"
    },
    {
        "id": 2,
       "name": "Aplicación Práctica de Procotolos de Atención y Servicios para la Atención de Clientes",
        "image": "./img-certificados/certificaciones-vtr/aplicacion_practica_de_procotolos_de_atencion_y_servicios_para_la_atencion_de_clientes-min.png",
        "url": "./img-certificados/certificaciones-vtr/aplicacion_practica_de_procotolos_de_atencion_y_servicios_para_la_atencion_de_clientes-min.png"
    },
    {
        "id": 3,
       "name": "instalación de los Servicios en Redes HFC (Hibrido de Fibra Coaxial)",
        "image": "./img-certificados/certificaciones-vtr/instalacion_de_los_servicios_en_redes_hfc_(hibrido_de_fibra_coaxial)-min.png",
        "url": "./img-certificados/certificaciones-vtr/instalacion_de_los_servicios_en_redes_hfc_(hibrido_de_fibra_coaxial)-min.png"
    },
    {
        "id": 4,
       "name": "Instalación de productos domiciliarios",
        "image": "./img-certificados/certificaciones-vtr/instalacion_de_productos_domiciliarios-min.png",
        "url": "./img-certificados/certificaciones-vtr/instalacion_de_productos_domiciliarios-min.png"
    },
    {
        "id": 5,
       "name": "Instalación de Servicios en redes FTTH",
        "image": "./img-certificados/certificaciones-vtr/instalacion_de_servicios_en_redes_ftth-min.png",
        "url": "./img-certificados/certificaciones-vtr/instalacion_de_servicios_en_redes_ftth-min.png"
    },
    {
        "id": 6,
       "name": "Manejo de Procedimiento de Instalaciones de Calidad",
        "image": "./img-certificados/certificaciones-vtr/manejo_de_procedimiento_de_instalaciones_de_calidad-min.png",
        "url": "./img-certificados/certificaciones-vtr/manejo_de_procedimiento_de_instalaciones_de_calidad-min.png"
    },
    {
        "id": 7,
       "name": "Trabajo en Altura para la Industria de Telecomunicaciones",
        "image": "./img-certificados/certificaciones-vtr/trabajo_en_altura_para_la_industria_de_telecomunicaciones-min.png",
        "url": "./img-certificados/certificaciones-vtr/trabajo_en_altura_para_la_industria_de_telecomunicaciones-min.png"
    }
];
let card = document.getElementById('skill-container');

cursos.forEach(curso => {
    let item = `
    <div class="grid-item">
        <div className="card-item">
            <a href="${curso.url}"  target="_blank" rel="noopener noreferrer">
            <picture>
                <img class="img-cert" src="${curso.image}" alt="${curso.name}">
            </picture>
            <div class="nombre-curso">
                <p class="img-name">${curso.name}</p>
            </div>
            </a>
        </div>

    </div>
    `;

    let parrafo = document.createElement('p');
    parrafo.innerHTML = item;
    card.appendChild(parrafo);
});