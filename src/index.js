

import { scrollTopBtn } from './js/boton_scroll';
import { slider } from './js/carrusel';
import { countdown } from './js/cuentaatras';
import { searchFilter } from './js/filtos';
import { contactFormValidation } from './js/formulario';
import { getGeoLocation } from './js/Geolocalizacion';
import { hamburgerMenu } from './js/menu-hambur';
import { responsiveMedia } from './js/obj_responsive';
import { alarm, digiClock } from './js/reloj';
import { responsiveTester } from './js/respons_tester';
import { scrollSpy } from './js/scroll_spicy';
import { smartVideo } from './js/smart_video';
import { draw } from './js/sorteo';
import { moveBall, shortcuts } from './js/teclado';
import { DarkTheme } from './js/Tema_Dark';
import './styles.css';


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {


    hamburgerMenu(".panel-btn", ".panel", ".menu a")

    digiClock("#reloj", "#activar-reloj", "#desactivar-reloj")

    alarm("assets/sound/ohno.mp3", "#activar-alarma", "#desactivar-alarma");

    countdown("cuentAtras", "Mar 17,2023 23:01:01", "Feliz Cumple Ronital 💪")

    scrollTopBtn(".scroll-top-btn")

    responsiveMedia(
        "youtube", "(min-width: 1024px)",
        //  "contMovil"
        `<a href="https://youtu.be/6N3JOYCnhek" target="_blank" rel="noopener">
         Ver Video</a>`,
        // "contEscritorio"
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6N3JOYCnhek" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>`
    )

    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        // "contMovil", 
        `<a href="https://goo.gl/maps/ta2nRCewrzgVxEtu8" target="_blank" 
        rel="noopener">Ver Ubicación</a>`,

        // "contEscritorio"
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.
        8200692363207!2d-76.998847671662!3d-12.195709548872173!2m3!1f0!2f0!3f0!
        3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9e789c2d41d%3A0xafc900a211c80bd
        9!2sMotopoint%20Chorrillos!5e0!3m2!1ses-419!2spe!4v1655229983158!5m2!1ses
        -419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    )




    // responsiveTester("responsive-tester");



    getGeoLocation("geolocation");

    searchFilter(".car-filter", ".card");


    draw("#winner-btn", ".player");

    slider();

    scrollSpy();

    // smartVideo();

    contactFormValidation();

});



d.addEventListener("keydown", (e) => {

    shortcuts(e);

    moveBall(e, ".ball", ".stage");
})

DarkTheme(".dark-theme-btn", "dark-mode")


