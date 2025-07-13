const materias = [
  // 1er semestre (sin correlativas)
  { nombre: "Mecánica y Calor", correlativas: [] },
  { nombre: "Cálculo 1", correlativas: [] },
  { nombre: "Geometría Vectorial", correlativas: [] },
  { nombre: "Álgebra Moderna", correlativas: [] },
  { nombre: "Geometría Descriptiva", correlativas: [] },
  { nombre: "Dibujo Técnico", correlativas: [] },

  // 2do semestre
  { nombre: "Óptica y Ondas", correlativas: ["Mecánica y Calor", "Cálculo 1"] },
  { nombre: "Cálculo 2", correlativas: ["Geometría Vectorial", "Cálculo 1"] },
  { nombre: "Álgebra Lineal", correlativas: ["Geometría Vectorial", "Álgebra Moderna"] },
  { nombre: "Fundamentos de la Programación", correlativas: ["Álgebra Moderna"] },
  { nombre: "Química General", correlativas: [] },

  // 3er semestre
  { nombre: "Electricidad y Magnetismo", correlativas: ["Óptica y Ondas", "Cálculo 2"] },
  { nombre: "Ecuaciones Diferenciales", correlativas: ["Álgebra Lineal", "Cálculo 2"] },
  { nombre: "Análisis Vectorial", correlativas: ["Álgebra Lineal", "Cálculo 2"] },
  { nombre: "Probabilidad", correlativas: ["Cálculo 2"] },
  { nombre: "Estática", correlativas: ["Mecánica y Calor", "Cálculo 2"] },
  { nombre: "Materiales de Obras Civiles 1", correlativas: ["Química General", "Dibujo Técnico"] },
  { nombre: "Geología Aplicada", correlativas: ["Química General"] },

  // 4to semestre
  { nombre: "Dinámica", correlativas: ["Ecuaciones Diferenciales", "Estática"] },
  { nombre: "Métodos Numéricos", correlativas: ["Ecuaciones Diferenciales", "Fundamentos de la Programación"] },
  { nombre: "Estadística", correlativas: ["Probabilidad", "Fundamentos de la Programación"] },
  { nombre: "Mecánica de Materiales", correlativas: ["Ecuaciones Diferenciales", "Estática"] },
  { nombre: "Análisis Estructural 1", correlativas: ["Estática", "Fundamentos de la Programación"] },
  { nombre: "Introducción a la Hidráulica", correlativas: ["Ecuaciones Diferenciales", "Óptica y Ondas"] },

  // 5to semestre
  { nombre: "Hidráulica de Conductos Forzados", correlativas: ["Introducción a la Hidráulica", "Métodos Numéricos"] },
  { nombre: "Geotecnia", correlativas: ["Mecánica de Materiales", "Geología Aplicada"] },
  { nombre: "Topografía y Geodesia", correlativas: ["Estadística", "Dibujo Técnico"] },
  { nombre: "Mecánica de Materiales 2", correlativas: ["Mecánica de Materiales", "Análisis Estructural 1"] },
  { nombre: "Análisis Estructural 2", correlativas: ["Mecánica de Materiales", "Análisis Estructural 1"] },
  { nombre: "Materiales de Obras Civiles 2", correlativas: ["Materiales de Obras Civiles 1", "Estadística"] },

  // 6to semestre
  { nombre: "Hidráulica de Canales", correlativas: ["Hidráulica de Conductos Forzados"] },
  { nombre: "Geotecnia Aplicada", correlativas: ["Introducción a la Hidráulica", "Geotecnia"] },
  { nombre: "Tecnología del Hormigón", correlativas: ["Materiales de Obras Civiles 2", "Análisis Estructural 1"] },
  { nombre: "Construcciones 1", correlativas: ["Materiales de Obras Civiles 2", "Geometría Descriptiva"] },
  { nombre: "Análisis Estructural 3", correlativas: ["Mecánica de Materiales 2", "Análisis Estructural 2"] },
  { nombre: "Estructuras de Madera y Metal", correlativas: ["Mecánica de Materiales", "Materiales de Obras Civiles 1"] },
  { nombre: "Contabilidad y Finanzas", correlativas: ["Hidráulica de Conductos Forzados", "Geotecnia", "Topografía y Geodesia", "Mecánica de Materiales 2", "Análisis Estructural 2", "Materiales de Obras Civiles 2"] },

  // 7mo semestre
  { nombre: "Hidrología", correlativas: ["Hidráulica de Canales", "Topografía y Geodesia"] },
  { nombre: "Vías de Comunicación 1", correlativas: ["Hidráulica de Canales", "Geotecnia Aplicada"] },
  { nombre: "Hormigón Armado 1", correlativas: ["Tecnología del Hormigón", "Análisis Estructural 3"] },
  { nombre: "Construcciones 2", correlativas: ["Construcciones 1", "Estructuras de Madera y Metal"] },
  { nombre: "Instalaciones Eléctricas", correlativas: ["Construcciones 1", "Estructuras de Madera y Metal"] },
  { nombre: "Saneamiento Ambiental", correlativas: ["Química General", "Hidráulica de Canales"] },
  { nombre: "Legislación", correlativas: ["Contabilidad y Finanzas"] },

  // 8vo semestre
  { nombre: "Obras Hidráulicas", correlativas: ["Hidrología"] },
  { nombre: "Vías de Comunicación 2", correlativas: ["Vías de Comunicación 1"] },
  { nombre: "Hormigón Armado 2", correlativas: ["Hormigón Armado 1", "Geotecnia Aplicada"] },
  { nombre: "Instalaciones Hidrosanitarias y PCI", correlativas: ["Construcciones 2", "Hidráulica de Canales"] },
  { nombre: "Infraestructura Sanitaria", correlativas: ["Saneamiento Ambiental"] },
  { nombre: "Organización de Empresas", correlativas: ["Contabilidad y Finanzas"] },
  { nombre: "Seguridad en el Trabajo", correlativas: ["Legislación"] },

  // 9no semestre
  { nombre: "Hidráulica Fluvial", correlativas: ["Obras Hidráulicas"] },
  { nombre: "Vías de Comunicación 3", correlativas: ["Vías de Comunicación 2"] },
  { nombre: "Construcciones 3", correlativas: ["Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI"] },
  { nombre: "Optativa 1", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Optativa 2", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Gestión de Calidad y Medio Ambiente", correlativas: ["Seguridad en el Trabajo", "Organización de Empresas"] },
  { nombre: "Proyecto TFG", correlativas: ["Hidráulica Fluvial", "Vías de Comunicación 3", "Gestión de Calidad y Medio Ambiente"] },

  // 10° semestre
  { nombre: "Puentes", correlativas: ["Hormigón Armado 2", "Hidráulica Fluvial"] },
  { nombre: "Planeamiento de Trans. y Transporte", correlativas: ["Vías de Comunicación 3"] },
  { nombre: "Programación y Control de Obras", correlativas: ["Vías de Comunicación 3", "Construcciones 3"] },
  { nombre: "Optativa 3", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Optativa 4", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Optativa 5", correlativas: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
  { nombre: "Formación y Evaluación de Proyecto", correlativas: ["Organización de Empresas"] },
];

// Crear contenedor y materias
const container = document.getElementById("malla-container");

function crearMateria(materia) {
  const div = document.createElement("div");
  div.classList.add("materia", "bloqueada");

  const titulo = document.createElement("h3");
  titulo.textContent = materia.nombre;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.disabled = true;

  div.appendChild(titulo);
  div.appendChild(checkbox);

  return { div, checkbox, materia };
}

const materiasMap = materias.map(crearMateria);

materiasMap.forEach(({ div }) => container.appendChild(div));

function actualizarEstado() {
  // Obtener materias aprobadas
  const aprobadas = materiasMap
    .filter((m) => m.checkbox.checked)
    .map((m) => m.materia.nombre);

  materiasMap.forEach(({ div, checkbox, materia }) => {
    // Verificar si todas las correlativas están aprobadas
    const desbloqueada = materia.correlativas.every((correl) =>
      aprobadas.includes(correl)
    );

    div.classList.toggle("bloqueada", !desbloqueada);
    checkbox.disabled = !desbloqueada;
  });
}

materiasMap.forEach(({ checkbox }) => {
  checkbox.addEventListener("change", () => {
    const div = checkbox.parentElement;
    if (checkbox.checked) {
      div.classList.add("aprobada");
    } else {
      div.classList.remove("aprobada");
    }
    actualizarEstado();
  });
});

// Inicializar desbloqueo de materias sin correlativas
actualizarEstado();
