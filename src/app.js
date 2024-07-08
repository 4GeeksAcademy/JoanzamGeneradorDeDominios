/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generarDominios() {
    let pronombres = ["the", "our"];
    let adjetivos = ["great", "big"];
    let nombres = ["jogger", "racoon"];
    let extenciones = [".net", ".com"];
    let dominios = [];

    // Primer bucle: Itera sobre cada pronombre
    pronombres.forEach(function(pronombre) {
      console.log(pronombre, "Primer array");
      // Segundo bucle: Itera sobre cada adjetivo
      adjetivos.forEach(function(adjetivo) {
        console.log(adjetivo, "segundo array"); // Tercer bucle: Itera sobre cada nombre
        nombres.forEach(function(nombre) {
          console.log(nombre, "terce array");
          extenciones.forEach(function(extencion) {
            // Combina pronombre, adjetivo y nombre para formar un dominio y lo añade al array dominios
            dominios.push(pronombre + adjetivo + nombre + extencion);
            console.log(dominios);
          });
        });
      });
    });

    // Devuelve el array de dominios generados
    return dominios;
  }
  // Llamar a la función y guardar el resultado en una variable
  document.getElementById("dominio").innerHTML = generarDominios();
};
