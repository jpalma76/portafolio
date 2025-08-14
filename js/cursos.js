let cursos = [
  {
    id: 1,
    name: "Curso Programación Basica",
    image: "./img-certificados/platzi/curso_de_programacion_basica.png",
    url: "./img-certificados/platzi/curso_de_programacion_basica.png",
  },
  {
    id: 2,
    name: "Curso Básico de C#, Fundamentos Variables y Operadores",
    image:
      "./img-certificados/platzi/curso_basico_de_c_sharp_fundamentos_variables_y_operadores.png",
    url: "./img-certificados/platzi/curso_basico_de_c_sharp_fundamentos_variables_y_operadores.png",
  },
  {
    id: 3,
    name: "Curso Básico de JavaScript",
    image: "./img-certificados/platzi/curso_basico_de_javascript.png",
    url: "./img-certificados/platzi/curso_basico_de_javascript.png",
  },

  {
    id: 4,
    name: "curso de frontend developer",
    image: "./img-certificados/platzi/curso_de_frontend_developer.png",
    url: "./img-certificados/platzi/curso_de_frontend_developer.png",
  },
  {
    id: 5,
    name: "curso practico de frontend developer",
    image: "./img-certificados/platzi/curso_practico_de_frontend_developer.png",
    url: "./img-certificados/platzi/curso_practico_de_frontend_developer.png",
  },
  {
    id: 6,
    name: "curso html y css practico",
    image: "./img-certificados/platzi/curso_practico_html_css.png",
    url: "./img-certificados/platzi/curso_practico_html_css.png",
  },
  {
    id: 7,
    name: "curso de fundamentos de punto net",
    image: "./img-certificados/platzi/Curso_de_punto_net.png",
    url: "./img-certificados/platzi/Curso_de_punto_net.png",
  },
  {
    id: 8,
    name: "curso definitivo html y css",
    image: "./img-certificados/platzi/curso_html_css_definitivo-min.png",
    url: "./img-certificados/platzi/curso_html_css_definitivo-min.png",
  },
  {
    id: 9,
    name: "curso introduccion al desarrollo backend",
    image:
      "./img-certificados/platzi/curso_de_introduccion_al_desarrollo_backend.png",
    url: "./img-certificados/platzi/curso_de_introduccion_al_desarrollo_backend.png",
  },
  {
    id: 10,
    name: "curso npm gestion de paquetes y dependencias en javascript",
    image:
      "./img-certificados/platzi/curso_npm_gestion_de_paquetes_y_dependencias_en_javascript.png",
    url: "./img-certificados/platzi/curso_npm_gestion_de_paquetes_y_dependencias_en_javascript.png",
  },
  {
    id: 11,
    name: "curso pensamiento logico de lenguajes de programación",
    image:
      "./img-certificados/platzi/curso_pensamiento_logico_lenguajes_de_programacion.png",
    url: "./img-certificados/platzi/curso_pensamiento_logico_lenguajes_de_programacion.png",
  },
  {
    id: 12,
    name: "curso de php instalacion fundamentos y operaciones basico",
    image:
      "./img-certificados/platzi/curso_php_instalacion_fundamentos_y_operaciones_basico.png",
    url: "./img-certificados/platzi/curso_php_instalacion_fundamentos_y_operaciones_basico.png",
  },
  {
    id: 13,
    name: "curso practico de php",
    image: "./img-certificados/platzi/curso_practico_php.png",
    url: "./img-certificados/platzi/curso_practico_php.png",
  },
  {
    id: 14,
    name: "curso  integracion de php y html",
    image: "./img-certificados/platzi/curso_practico_php.png",
    url: "./img-certificados/platzi/curso_practico_php.png",
  },

  {
    id: 15,
    name: "curso prework linux: Configuracion de entorno de desarrollo en linux",
    image:
      "./img-certificados/platzi/curso_de_prework_configuracion_de_entorno_de_desarrollo_en_linux.png",
    url: "./img-certificados/platzi/curso_de_prework_configuracion_de_entorno_de_desarrollo_en_linux.png",
  },
  {
    id: 16,
    name: "curso prework: configuracion de entorno de desarrollo en windows",
    image:
      "./img-certificados/platzi/curso_de_prework_configuracion_de_entorno_de_desarrollo_en_windows.png",
    url: "./img-certificados/platzi/curso_de_prework_configuracion_de_entorno_de_desarrollo_en_windows.png",
  },
  {
    id: 17,
    name: "curso javascript nivel 1 - Jóvenes Programadores",
    image:
      "./img-certificados/jovenes-programadores/curso_javascript_nivel1-min.png",
    url: "./img-certificados/jovenes-programadores/curso_javascript_nivel1-min.png",
  },
  {
    id: 18,
    name: "curso javascript nivel 2 - Jóvenes Programadores",
    image:
      "./img-certificados/jovenes-programadores/curso_javascript_nivel2-min.png",
    url: "./img-certificados/jovenes-programadores/curso_javascript_nivel2-min.png",
  },
  {
    id: 29,
    name: "Curso PHP nivel 1 - Jóvenes Programadores",
    image:
      "./img-certificados/jovenes-programadores/curso_php_jovenes_programadores-min.png",
    url: "./img-certificados/jovenes-programadores/curso_php_jovenes_programadores-min.png",
  },
  {
    id: 20,
    name: "Curso CSS - Jóvenes Programadores",
    image:
      "./img-certificados/jovenes-programadores/curso_css_jovenesprogramadores-min.png",
    url: "./img-certificados/jovenes-programadores/curso_css_jovenesprogramadores-min.png",
  },
  {
    id: 21,
    name: "Curso Introducción a Python - Jóvenes Programadores",
    image:
      "./img-certificados/jovenes-programadores/curso-introduccion-a-python-min.png",
    url: "./img-certificados/jovenes-programadores/curso-introduccion-a-python-min.png",
  },
  {
    id: 22,
    name: "Curso de React - Jóvenes Programadores",
    image: "./img-certificados/jovenes-programadores/curso-de-react-min.png",
    url: "./img-certificados/jovenes-programadores/curso-de-react-min.png",
  },
];

let card = document.getElementById("certificados-container");

cursos.forEach((curso) => {
  let item = `
  <a href="${curso.url}" target="_blank" rel="noopener noreferrer">
    <div class="grid-item">
      <div class="card-item">
          <img class="img-cert" src="${curso.image}" alt="${curso.name}">
      </div>

      <div class="nombre-curso">
        <p class="img-name">${curso.name}</p>
      </div>
    </div>
  </a>
    `;

  let parrafo = document.createElement("p");
  parrafo.innerHTML = item;
  card.appendChild(parrafo);
});
