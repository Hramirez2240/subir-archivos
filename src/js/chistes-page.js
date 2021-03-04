import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList, contador = 1;

const crearChistehtml = () => {

    const html = 
    `<h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group"> </ol>`;

    const divChistes = document.createElement("div");
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () => {

    olList = document.querySelector("ol");
    btnOtro = document.querySelector("button");

    btnOtro.addEventListener("click", async() => {

        btnOtro.disabled = true;

        try{
            dibujarchiste(await obtenerChiste());
            btnOtro.disabled = false;
            contador++;

        } catch(err){
            throw err;
        }
    });
}

// id, value
const dibujarchiste = (chiste) => {

    const olItem = document.createElement("li");
    olItem.innerHTML =
    `${contador}. <b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add("list-group-item");
    olList.append(olItem);
}

export const init = () => {
    crearChistehtml();
    eventos();
}