const materias = {
  "1er Semestre": [
    { nombre: "Mecánica y Calor" },
    { nombre: "Cálculo 1" },
    { nombre: "Geometría Vectorial" },
    { nombre: "Álgebra Moderna" },
    { nombre: "Geometría Descriptiva" },
    { nombre: "Dibujo Técnico" }
  ],
  "2do Semestre": [
    { nombre: "Óptica y Ondas", requiere: ["Mecánica y Calor", "Cálculo 1"] },
    { nombre: "Cálculo 2", requiere: ["Geometría Vectorial", "Cálculo 1"] },
    { nombre: "Álgebra Lineal", requiere: ["Geometría Vectorial", "Álgebra Moderna"] },
    { nombre: "Fundamentos de la Programación", requiere: ["Álgebra Moderna"] },
    { nombre: "Química General" }
  ],
  "3er Semestre": [
    { nombre: "Electricidad y Magnetismo", requiere: ["Óptica y Ondas", "Cálculo 2"] },
    { nombre: "Ecuaciones Diferenciales", requiere: ["Álgebra Lineal", "Cálculo 2"] },
    { nombre: "Análisis Vectorial", requiere: ["Álgebra Lineal", "Cálculo 2"] },
    { nombre: "Probabilidad", requiere: ["Cálculo 2"] },
    { nombre: "Estática", requiere: ["Álgebra Lineal", "Mecánica y Calor"] },
    { nombre: "Materiales de Obras Civiles 1", requiere: ["Química General", "Dibujo Técnico"] },
    { nombre: "Geología Aplicada", requiere: ["Química General"] }
  ],
  "4to Semestre": [
    { nombre: "Dinámica", requiere: ["Ecuaciones Diferenciales", "Estática"] },
    { nombre: "Métodos Numéricos", requiere: ["Ecuaciones Diferenciales", "Fundamentos de la Programación"] },
    { nombre: "Estadística", requiere: ["Probabilidad", "Fundamentos de la Programación"] },
    { nombre: "Mecánica de Materiales", requiere: ["Ecuaciones Diferenciales", "Estática"] },
    { nombre: "Análisis Estructural 1", requiere: ["Estática", "Fundamentos de la Programación"] },
    { nombre: "Introducción a la Hidráulica", requiere: ["Ecuaciones Diferenciales", "Óptica y Ondas"] }
  ],
  "5to Semestre": [
    { nombre: "Hidráulica de Conductos Forzados", requiere: ["Introducción a la Hidráulica", "Métodos Numéricos"] },
    { nombre: "Geotecnia", requiere: ["Mecánica de Materiales", "Geología Aplicada"] },
    { nombre: "Topografía y Geodesia", requiere: ["Estadística", "Dibujo Técnico"] },
    { nombre: "Mecánica de Materiales 2", requiere: ["Mecánica de Materiales", "Análisis Estructural 1"] },
    { nombre: "Análisis Estructural 2", requiere: ["Mecánica de Materiales", "Análisis Estructural 1"] },
    { nombre: "Materiales de Obras Civiles 2", requiere: ["Materiales de Obras Civiles 1", "Estadística"] }
  ],
  "6to Semestre": [
    { nombre: "Hidráulica de Canales", requiere: ["Hidráulica de Conductos Forzados"] },
    { nombre: "Geotecnia Aplicada", requiere: ["Introducción a la Hidráulica", "Geotecnia"] },
    { nombre: "Tecnología del Hormigón", requiere: ["Materiales de Obras Civiles 2", "Análisis Estructural 1"] },
    { nombre: "Construcciones 1", requiere: ["Materiales de Obras Civiles 2", "Geometría Descriptiva"] },
    { nombre: "Análisis Estructural 3", requiere: ["Mecánica de Materiales 2", "Análisis Estructural 2"] },
    { nombre: "Estructuras de Madera y Metal", requiere: ["Mecánica de Materiales", "Materiales de Obras Civiles 1"] },
    { nombre: "Contabilidad y Finanzas", requiere: ["Hidráulica de Conductos Forzados", "Geotecnia", "Topografía y Geodesia", "Mecánica de Materiales 2", "Análisis Estructural 2", "Materiales de Obras Civiles 2"] }
  ],
  "7mo Semestre": [
    { nombre: "Hidrología", requiere: ["Hidráulica de Canales", "Topografía y Geodesia"] },
    { nombre: "Vías de Comunicación 1", requiere: ["Hidráulica de Canales", "Geotecnia Aplicada"] },
    { nombre: "Hormigón Armado 1", requiere: ["Tecnología del Hormigón", "Análisis Estructural 3"] },
    { nombre: "Construcciones 2", requiere: ["Construcciones 1", "Estructuras de Madera y Metal"] },
    { nombre: "Instalaciones Eléctricas", requiere: ["Construcciones 1", "Estructuras de Madera y Metal"] },
    { nombre: "Saneamiento Ambiental", requiere: ["Química General", "Hidráulica de Canales"] },
    { nombre: "Legislación", requiere: ["Contabilidad y Finanzas"] }
  ],
  "8vo Semestre": [
    { nombre: "Obras Hidráulicas", requiere: ["Hidrología"] },
    { nombre: "Vías de Comunicación 2", requiere: ["Vías de Comunicación 1"] },
    { nombre: "Hormigón Armado 2", requiere: ["Hormigón Armado 1", "Geotecnia Aplicada"] },
    { nombre: "Instalaciones Hidrosanitarias y PCI", requiere: ["Construcciones 2", "Hidráulica de Canales"] },
    { nombre: "Infraestructura Sanitaria", requiere: ["Saneamiento Ambiental"] },
    { nombre: "Organización de Empresas", requiere: ["Contabilidad y Finanzas"] },
    { nombre: "Seguridad en el Trabajo", requiere: ["Legislación"] }
  ],
  "9no Semestre": [
    { nombre: "Hidráulica Fluvial", requiere: ["Obras Hidráulicas"] },
    { nombre: "Vías de Comunicación 3", requiere: ["Vías de Comunicación 2"] },
    { nombre: "Construcciones 3", requiere: ["Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI"] },
    { nombre: "Optativa 1", requiere: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
    { nombre: "Optativa 2", requiere: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
    { nombre: "Gestión de Calidad y Medio Ambiente", requiere: ["Seguridad en el Trabajo", "Organización de Empresas"] },
    { nombre: "Proyecto TFG", requiere: ["Hidráulica Fluvial", "Vías de Comunicación 3", "Gestión de Calidad y Medio Ambiente"] }
  ],
  "10° Semestre": [
    { nombre: "Puentes", requiere: ["Hormigón Armado 2", "Hidráulica Fluvial"] },
    { nombre: "Planeamiento de Trans. y Transporte", requiere: ["Vías de Comunicación 3"] },
    { nombre: "Programación y Control de Obras", requiere: ["Vías de Comunicación 3", "Construcciones 3"] },
    { nombre: "Optativa 3", requiere: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
    { nombre: "Optativa 4", requiere: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
    { nombre: "Optativa 5", requiere: ["Obras Hidráulicas", "Vías de Comunicación 2", "Hormigón Armado 2", "Instalaciones Hidrosanitarias y PCI", "Infraestructura Sanitaria", "Organización de Empresas", "Seguridad en el Trabajo"] },
    { nombre: "Formación y Evaluación de Proyecto", requiere: ["Organización de Empresas"] }
  ]
};

const container = document.getElementById("malla-container");
const estado = {}; // Guarda qué materias están aprobadas

// Crear los semestres como columnas
for (const [semestre, listaMaterias] of Object.entries(materias)) {
  const columna = document.createElement("div");
  columna.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  columna.appendChild(titulo);

  listaMaterias.forEach((materia) => {
    const div = document.createElement("div");
    div.className = "materia";
    div.textContent = materia.nombre;
    div.dataset.nombre = materia.nombre;

    if (materia.requiere) {
      div.classList.add("bloqueada");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueada")) return;

      const aprobada = div.classList.toggle("aprobada");
      estado[materia.nombre] = aprobada;

      actualizarBloqueos();
      guardarEstado();
    });

    columna.appendChild(div);
  });

  container.appendChild(columna);
}

// Habilita o bloquea materias según correlativas
function actualizarBloqueos() {
  document.querySelectorAll(".materia").forEach((div) => {
    const nombre = div.dataset.nombre;
    const materia = buscarMateria(nombre);

    if (!materia.requiere) return;

    const requisitosCumplidos = materia.requiere.every((req) => estado[req]);
    if (requisitosCumplidos) {
      div.classList.remove("bloqueada");
    } else {
      div.classList.add("bloqueada");
    }
  });
}

// Buscar la definición de una materia en el objeto
function buscarMateria(nombre) {
  for (const lista of Object.values(materias)) {
    for (const mat of lista) {
      if (mat.nombre === nombre) return mat;
    }
  }
  return null;
}

// Guardar estado en localStorage para que se mantenga al recargar
function guardarEstado() {
  localStorage.setItem("estadoMaterias", JSON.stringify(estado));
}

// Al cargar la página, restaurar el estado guardado
function restaurarEstado() {
  const datos = JSON.parse(localStorage.getItem("estadoMaterias"));
  if (!datos) return;

  Object.entries(datos).forEach(([nombre, aprobado]) => {
    const div = document.querySelector(`.materia[data-nombre="${nombre}"]`);
    if (div && aprobado) {
      div.classList.add("aprobada");
      estado[nombre] = true;
    }
  });

  actualizarBloqueos();
}

restaurarEstado();

