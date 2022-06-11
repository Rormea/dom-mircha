

import { countdown } from './js/cuentaatras';
import { hamburgerMenu } from './js/menu-hambur';
import { alarm, digiClock } from './js/reloj';
import { moveBall, shortcuts } from './js/teclado';
import './styles.css';


const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{


    hamburgerMenu(".panel-btn",".panel",".menu a")

    digiClock("#reloj","#activar-reloj","#desactivar-reloj")

    alarm("assets/sound/ohno.mp3","#activar-alarma","#desactivar-alarma");

    countdown("cuentAtras","Mar 17,2023 23:01:01","Feliz Cumple Ronital 💪")


});



d.addEventListener("keydown", (e)=>{

    shortcuts(e);

    moveBall(e,".ball",".stage");
})




