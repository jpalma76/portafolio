let cursos = [
  {
    id: 1,
    name: "Aplicación de Herramientas para la Certificación de Calidad de Servicios de Telecomunicaciones HFC",
    image:
      "./img-certificados/certificaciones-vtr/aplicación_de_herramientas_para_la_certificación_de_calidad_de_servicios_de_telecomunicaciones.png",
    url: "./img-certificados/certificaciones-vtr/aplicación_de_herramientas_para_la_certificación_de_calidad_de_servicios_de_telecomunicaciones.png",
  },
  {
    id: 2,
    name: "Aplicación Práctica de Procotolos de Atención y Servicios para la Atención de Clientes",
    image:
      "./img-certificados/certificaciones-vtr/aplicacion_practica_de_procotolos_de_atencion_y_servicios_para_la_atencion_de_clientes.png",
    url: "./img-certificados/certificaciones-vtr/aplicacion_practica_de_procotolos_de_atencion_y_servicios_para_la_atencion_de_clientes.png",
  },
  {
    id: 3,
    name: "instalación de los Servicios en Redes HFC (Hibrido de Fibra Coaxial)",
    image:
      "./img-certificados/certificaciones-vtr/instalacion_de_los_servicios_en_redes_hfc_hibrido_de_fibra_coaxial.png",
    url: "./img-certificados/certificaciones-vtr/instalacion_de_los_servicios_en_redes_hfc_hibrido_de_fibra_coaxial.png",
  },
  {
    id: 4,
    name: "Instalación de productos domiciliarios",
    image:
      "./img-certificados/certificaciones-vtr/instalacion_de_productos_domiciliarios.png",
    url: "./img-certificados/certificaciones-vtr/instalacion_de_productos_domiciliarios.png",
  },
  {
    id: 5,
    name: "Instalación de Servicios en redes FTTH",
    image:
      "./img-certificados/certificaciones-vtr/instalacion_de_servicios_en_redes_ftth.png",
    url: "./img-certificados/certificaciones-vtr/instalacion_de_servicios_en_redes_ftth.png",
  },
  {
    id: 6,
    name: "Manejo de Procedimiento de Instalaciones de Calidad",
    image:
      "./img-certificados/certificaciones-vtr/manejo_de_procedimiento_de_instalaciones_de_calidad.png",
    url: "./img-certificados/certificaciones-vtr/manejo_de_procedimiento_de_instalaciones_de_calidad.png",
  },
  {
    id: 7,
    name: "Trabajo en Altura para la Industria de Telecomunicaciones",
    image:
      "./img-certificados/certificaciones-vtr/trabajo_en_altura_para_la_industria_de_telecomunicaciones.png",
    url: "./img-certificados/certificaciones-vtr/trabajo_en_altura_para_la_industria_de_telecomunicaciones.png",
  },

  {
    id: 8,
    name: "Induccion Instalacion de Servicios ClaroVTR en Red Neutra",
    image: "./img-certificados/certificaciones-vtr/instalacion_de_servicios_clarovtr_en_red_neutra.png",
    url: "./img-certificados/certificaciones-vtr/instalacion_de_servicios_clarovtr_en_red_neutra.png",
  },


  {
    id: 9,
    name: "Seguridad Eléctrica General Nº 1",
    image: "./img-certificados/cursos-achs/Seguridad_electrica_general_N1.png",
    url: "./img-certificados/cursos-achs/Seguridad_electrica_general_N1.png",
  },
  {
    id: 10,
    name: "Seguridad Eléctrica Operacional Nº 2",
    image:
      "./img-certificados/cursos-achs/seguridad_electrica_operacional_N2.png",
    url: "./img-certificados/cursos-achs/seguridad_electrica_operacional_N2.png",
  },
  {
    id: 11,
    name: "Identificación de Peligros y Evaluación de Riesgos en el Trabajo",
    image:
      "./img-certificados/cursos-achs/identificacion_de_peligros_y_evaluacion_de_riesgos_en_el_trabajo.png",
    url: "./img-certificados/cursos-achs/identificacion_de_peligros_y_evaluacion_de_riesgos_en_el_trabajo.png",
  },
  {
    id: 12,
    name: "Conducción Defensiva en Vehículos Livianos",
    image:
      "./img-certificados/cursos-achs/conduccion_defensiva_en_vehiculos_livianos.png",
    url: "./img-certificados/cursos-achs/conduccion_defensiva_en_vehiculos_livianos.png",
  },
  {
    id: 13,
    name: "12.- Medidas Preventivas Frente a Radiación UV",
    image:
      "./img-certificados/cursos-achs/medidas_preventivas_frente_a_radiacion_uv.png",
    url: "./img-certificados/cursos-achs/medidas_preventivas_frente_a_radiacion_uv.png",
  },
  {
    id: 14,
    name: "13.- Uso de Extintores",
    image: "./img-certificados/cursos-achs/uso de extintores.png",
    url: "./img-certificados/cursos-achs/uso de extintores.png",
  },
  {
    id: 15,
    name: "14.- Primera Respuesta Frente a Emergencias de Salud",
    image:
      "./img-certificados/cursos-achs/primera_respuesta_frente_a_emergencias_de_salud.png",
    url: "./img-certificados/cursos-achs/primera_respuesta_frente_a_emergencias_de_salud.png",
  },
  {
    id: 16,
    name: "15.- Manejo Manual de Cargas",
    image: "./img-certificados/cursos-achs/manejo_manual_de_cargas.png",
    url: "./img-certificados/cursos-achs/manejo_manual_de_cargas.png",
  },
  {
    id: 17,
    name: "16.- Evitando Dolencias Músculo esqueléticas de Extremidades Superiores (TMERT) en su Trabajo",
    image:
      "./img-certificados/cursos-achs/evitando_dolencias_musculoesqueleticas_de_extremidades_superiores-TMERT_en_su_trabajo.png",
    url: "./img-certificados/cursos-achs/evitando_dolencias_musculoesqueleticas_de_extremidades_superiores-TMERT_en_su_trabajo.png",
  },
];

let card = document.getElementById("skill-container");

cursos.forEach((curso) => {
  const p = document.createElement("p");

  const link = document.createElement("a");
  link.href = curso.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");

  const img = document.createElement("img");
  img.classList.add("img-cert");
  img.src = curso.image;
  img.alt = curso.name;

  cardItem.appendChild(img);

  const nombreCurso = document.createElement("div");
  nombreCurso.classList.add("nombre-curso");

  const pName = document.createElement("p");
  pName.classList.add("img-name");
  pName.textContent = curso.name;

  nombreCurso.appendChild(pName);

  gridItem.appendChild(cardItem);
  gridItem.appendChild(nombreCurso);

  link.appendChild(gridItem);
  p.appendChild(link);

  card.appendChild(p);
});
