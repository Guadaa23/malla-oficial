// script.js

const materias = [
  { nombre: "Mecánica y Calor", correlativas: [] },
  { nombre: "Cálculo 1", correlativas: [] },
  { nombre: "Geometría Vectorial", correlativas: [] },
  { nombre: "Álgebra Moderna", correlativas: [] },
  { nombre: "Geometría Descriptiva", correlativas: [] },
  { nombre: "Dibujo Técnico", correlativas: [] },
  { nombre: "Óptica y Ondas", correlativas: ["Mecánica y Calor", "Cálculo 1"] },
  { nombre: "Cálculo 2", correlativas: ["Geometría Vectorial", "Cálculo 1"] },
  { nombre: "Álgebra Lineal", correlativas: ["Geometría Vectorial", "Álgebra Moderna"] },
  { nombre: "Fundamentos de la Programación", correlativas: ["Álgebra Moderna"] },
  { nombre: "Química General", correlativas: [] },
  { nombre: "Electricidad y Magnetismo", correlativas: ["Óptica y Ondas", "Cálculo 2"] },
  { nombre: "Ecuaciones Diferenciales", correlativas: ["Álgebra Lineal", "Cálculo 2"] },
  { nombre: "Análisis Vectorial", correlativas: ["Álgebra Lineal", "Cálculo 2"] },
  { nombre: "Probabilidad", correlativas: ["Cálculo 2"] },
  { nombre: "Estática", correlativas: ["Mecánica y Calor", "Cálculo 2"] },
  { nombre: "Materiales de Obras Civiles 1", correlativas: ["Química General", "Dibujo Técnico"] },
  { nombre: "Geología Aplicada", correlativas: ["Química General"] },
  { nombre: "Dinámica", correlativas: ["Ecuaciones Diferenciales", "Estática"] },
  { nombre: "Métodos Numéricos", correlativas: ["Ecuaciones Diferenciales", "Fundamentos de la Programación"] },
  { nombre: "Estadística", correlativas: ["Probabilidad", "Fundamentos de la Programación"] },
  { nombre: "Mecánica de Materiales", correlativas: ["Ecuaciones Diferenciales", "Estática"] },
  { nombre: "Análisis Estructural 1", correlativas: ["Estática", "Fundamentos de la Programación"] },
  { nombre: "Introducción a la Hidráulica", correlativas: ["Ecuaciones Diferenciales", "Óptica y Ondas"] },
  { nombre: "Hidráulica de Conductos Forzados", correlativas: ["Introducción a la Hidráulica", "Métodos Numéricos"] },
  { nombre: "Geotecnia", correlativas: ["Mecánica de Materiales", "Geología Aplicada"] },
  { nombre: "Topografía y Geodesia", correlativas: ["Estadística", "Dibujo Técnico"] },
  { nombre: "Mecánica de Materiales 2", correlativas: ["Mecánica de Materiales", "Análisis Estructural 1"] },
  { nombre: "Análisis Estructural 2", correlativas: ["Mecánica de Materiales", "Análisis Estructural 1"] },
  { nombre: "Materiales de Obras Civiles 2", correlativas: ["Materiales de Obras Civiles 1", "Estadística"] },
  { nombre: "Hidráulica de Canales", correlativas: ["Hidráulica de Conductos Forzados"] },
  { nombre: "Geotecnia Aplicada", correlativas: ["Introducción a la Hidráulica", "Geotecnia"] },
  { nombre: "Tecnología del Hormigón", correlativas: ["Materiales de Obras Civiles 2", "Análisis Estructural 1"] },
  { nombre: "Construcciones 1", correlativas: ["Materiales de Obras Civiles 2", "Geometría Descriptiva"] },
  { nombre: "Análisis Estructural 3", correlativas: ["Mecánica de Materiales 2", "Análisis Estructural 2"] },
  { nombre: "Estructuras de Madera y Metal", correlativas: ["Mecánica de Materiales", "Materiales de Obras Civiles 1"] },
  { nombre: "Contabilidad y Finanzas", correlativas: ["Hidráulica de Conductos Forzados", "Geotecnia", "Topografía y Geodesia", "Mecánica de Materiales 2", "Análisis Estructural 2", "Materiales de Obras Civiles 2"] },
  { nombre: "Hidrología", correlativas: ["Hidráulica de Canales", "Topografía y Geodesia"] },
  { nombre: "Vías de Comunicación 1", correlativas: ["Hidráulica de Canales", "Geotecnia Aplicada"] },
  { nombre: "Hormigón Armado 1", correlativas: ["Tecnología del Hormigón", "Análisis Estructural 3"] },
  { nombre: "Construcciones 2", correlativas: ["Construcciones 1", "Estructuras de Madera y Metal"] },
  { nombre: "Instalaciones Eléctricas", correlativas: ["Construcciones 1", "Estructuras de Madera y Metal"] },
  { nombre: "Saneamiento Ambiental", correlativas: ["Química General", "Hidráulica de Canales"] },
  { nombre: "Legislación", correlativas: ["Contabilidad y Finanzas"] },
  { nombre: "Obras Hidráulicas", correlativas: ["Hidrología"] },
  { nombre: "Vías de Comunicación 2", correlativas: ["Vías de Comunicación 1"] },
  { nombre: "Hormigón Armado 2", correlativas: ["Hormigón Armado 1", "Geotecnia Aplicada"] },
  { nombre: "Instalaciones Hidrosanitarias y PCI", correlativas: ["Construcciones 2", "Hidráulica de Canales"] },
  { nombre: "Infraestructura Sanitaria", correlativas: ["Saneamiento Ambiental"] },
  { nombre: "Organización de Empresas", correlativas: ["Contabilidad y Finanzas"] },
  { nombre: "Seguridad en el Trabajo", correlativas: ["Legislación"] },
  { nombre: "Hidráulica Fluvial", correlativas: ["Obras Hidráulicas"] },
  { nombre: "Vías de Comunicación 3", correlativas: ["Vías de Comunicación 2"] },
  { nombre: "Construcciones 3", correlativas: ["Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI"] },
  { nombre: "Optativa 1", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Optativa 2", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Gestión de Calidad y Medio Ambiente", correlativas: ["Seguridad en el Trabajo", "Organización de Empresas"] },
  { nombre: "Proyecto TFG", correlativas: ["Hidráulica Fluvial", "Vías de Comunicación 3", "Gestión de Calidad y Medio Ambiente"] },
  { nombre: "Puentes", correlativas: ["Hormigón Armado 2", "Hidráulica Fluvial"] },
  { nombre: "Planeamiento de Trans. y Transporte", correlativas: ["Vías de Comunicación 3"] },
  { nombre: "Programación y Control de Obras", correlativas: ["Vías de Comunicación 3", "Construcciones 3"] },
  { nombre: "Optativa 3", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Optativa 4", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Optativa 5", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Formación y Evaluación de Proyecto", correlativas: ["Organización de Empresas"] }
];

function crearMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  materias.forEach((materia) => {
    const div = document.createElement("div");
    div.className = "materia";
    const id = materia.nombre;
    const checked = localStorage.getItem(id) === "true";

    div.innerHTML = `
      <h3>${materia.nombre}</h3>
      <label class="checkbox">
        <input type="checkbox" id="${id}" ${checked ? "checked" : ""}> Aprobada
      </label>
    `;

    if (!puedeDesbloquear(materia)) {
      div.classList.add("bloqueada");
    }

    if (checked) {
      div.classList.add("aprobada");
    }

    container.appendChild(div);

    document.getElementById(id).addEventListener("change", function (e) {
      localStorage.setItem(id, e.target.checked);
      crearMalla();
    });
  });
}

function puedeDesbloquear(materia) {
  return materia.correlativas.every((correlativa) => {
    return localStorage.getItem(correlativa) === "true";
  });
}

window.onload = crearMalla;
