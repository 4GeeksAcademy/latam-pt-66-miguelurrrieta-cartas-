import "bootstrap";
import "./style.css";

window.onload = function() {

    const generarCarta = () => {
        const valores = ["A", "2", "3", "4", "5", "6", "7","J", "Q", "K"];
        const palos = [
            { nombre: "spade", simbolo: "♠" },
            { nombre: "heart", simbolo: "♥" },
            { nombre: "diamond", simbolo: "♦" },
            { nombre: "club", simbolo: "♣" }
        ];

        const pIndice = Math.floor(Math.random() * palos.length);
        const vIndice = Math.floor(Math.random() * valores.length);

        const paloSeleccionado = palos[pIndice];
        const valorSeleccionado = valores[vIndice];

        document.querySelector(".number").innerHTML = valorSeleccionado;

        const iconos = document.querySelectorAll(".top-suit, .bottom-suit");
        iconos.forEach(el => {
            el.innerHTML = paloSeleccionado.simbolo;
            if (paloSeleccionado.nombre === "heart" || paloSeleccionado.nombre === "diamond") {
                el.style.color = "red";
            } else {
                el.style.color = "black";
            }
        });
    };

    generarCarta();
   
    const boton = document.getElementById("btn-generar");
    if (boton) {
        boton.addEventListener("click", generarCarta);
    }
};
