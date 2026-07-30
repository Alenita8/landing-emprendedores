import { GestorContactos } from "./formulario.js";

// Inicializa el gestor vinculando los selectores del HTML
const gestor = new GestorContactos("#formulario", "#error", "#lista-contactos");

// Asigna el evento de clic al botón de descargar archivo
const btnGuardar = document.querySelector("#guardar") as HTMLButtonElement;
if (btnGuardar) {
  btnGuardar.addEventListener("click", () => gestor.guardarJSON());
}

// Puedes conservar aquí abajo tus líneas antiguas del menú responsive si las tenías

