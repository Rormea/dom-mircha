

import { hamburgerMenu } from './js/menu-hambur';
import { alarm, digiClock } from './js/reloj';
import './styles.css';

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a")
    digiClock("#reloj","#activar-reloj","#desactivar-reloj")
});




alarm()


d.querySelector("#activar-reloj") = "<h3>Hola</h3>"