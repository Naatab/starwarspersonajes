import { getInfoFromApiPrincipales } from "./principales.js";
import { getInfoFromApiSecundarios } from "./secundarios.js";
import { getInfoFromApiSignificativos } from "./significativos.js";

let principalesIndex = 1;
let secundariosIndex = 6;
let significativosIndex = 11;
let principales = document.getElementById(`principales`);
let secundarios = document.getElementById(`secundarios`);
let significativos = document.getElementById(`significativos`);


principales.addEventListener('mouseover', () => {

    if (principalesIndex <= 5) {
        getInfoFromApiPrincipales(principalesIndex);
        principalesIndex++;
    };

});

secundarios.addEventListener('mouseover', () => {

    if (secundariosIndex <= 10) {
        getInfoFromApiSecundarios(secundariosIndex);
        secundariosIndex++;
    };

});

significativos.addEventListener('mouseover', () => {

    if (significativosIndex <= 15) {
        getInfoFromApiSignificativos(significativosIndex);
        significativosIndex++;
    };

});
