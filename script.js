const fotos = {
    principal: "imagenes/foto2.jpg"
};

document.getElementById("foto-principal").src = fotos.principal;

function mostrarMensaje() {

    const mensaje = document.getElementById("mensaje");

    if (mensaje.style.display === "block") {
        mensaje.style.display = "none";
    } else {
        mensaje.style.display = "block";
    }

}

const pestanas = document.querySelectorAll(".pestana");
const paneles = document.querySelectorAll(".panel");

pestanas.forEach((pestana) => {
    pestana.addEventListener("click", () => {
        const seccion = pestana.dataset.seccion;

        pestanas.forEach((elemento) => {
            elemento.classList.toggle("activa", elemento === pestana);
        });

        paneles.forEach((panel) => {
            const estaActivo = panel.dataset.panel === seccion;
            panel.hidden = !estaActivo;
            panel.classList.toggle("activo", estaActivo);
        });
    });
});