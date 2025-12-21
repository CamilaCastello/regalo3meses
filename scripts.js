const inputFecha = document.getElementById("fecha");
const form = document.getElementById("loginForm");
const error = document.getElementById("error");

// 👉 MÁSCARA DE FECHA (agrega / automáticamente)
inputFecha.addEventListener("input", function (e) {
    let valor = e.target.value;

    // eliminar todo lo que no sea número
    valor = valor.replace(/\D/g, "");

    // agregar las barras
    if (valor.length >= 3) {
        valor = valor.slice(0, 2) + "/" + valor.slice(2);
    }
    if (valor.length >= 6) {
        valor = valor.slice(0, 5) + "/" + valor.slice(5, 7);
    }

    e.target.value = valor;
});

// 👉 VALIDACIÓN DEL FORM
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fechaIngresada = inputFecha.value;
    const fechaCorrecta = "21/10/25"; // 👈 cambiá la fecha acá

    if (fechaIngresada === fechaCorrecta) {
        window.location.href = "pages/principal.html";
    } else {
        error.textContent = "Fecha incorrecta";
    }
});


/* SCRIPTS DEL CERTIFICADO */

function abrirCarta() {
    document.querySelector('.sobre').classList.add('abierta');
}

function cerrarCarta() {
    document.querySelector('.sobre').classList.remove('abierta');
}




