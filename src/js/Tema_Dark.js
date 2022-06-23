
const d = document,

ls = localStorage;




export function DarkTheme (btn,classDark) {

    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"); 

    /*  data-dark es un "data atributos"  que nosotros estamos inventando para usarlo de 
    selector y decir que aplique el nuevo tema  todas las etiquetas que tengan
    ese selector con este console.log podemos ver en una nodelist cuales son todas las
    etiquetas que teien este data attribute. */

    console.log($selectors);

    let moon ="🌙",
    sun = "☀️";

    const lightMode = ()=>{
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon
        ls.setItem("theme", "light")
    }

    const DarkMode  = ()=>{
        $selectors.forEach((el) => el.classList.add(classDark));
            $themeBtn.textContent = sun
            ls.setItem("theme", "dark")
    }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)) {
            //si aplicas un console.log sun o monn.textcontent sale su codido por 
            // tanto aplicasmos otro si, si boton,txtcontent es igual a luna
            // entonces que a "cada uno de los nodos con data atribute  data-dark"
            // que estan guardados en uno node list como arreglo (for each)
            // le agregue la clase "classDark" ademas que cambie el iconoa  solo
            // hay que suar los metoso set item para establecer nombres de la key 
            // y sus valore en el localStore y set items para establecer los valores
            // y get items para obtenerlos o utilizarlos 
        if($themeBtn.textContent === moon) {
                DarkMode();
        } else{
                 lightMode();   
            }

        }
    });



    d.addEventListener("DOMContentLoaded", (e)=> {
        if(ls.getItem("theme") === null) ls.setItem("theme", "light");

        if (ls.getItem("theme") === "light") lightMode();

        if (ls.getItem("theme") === "dark") DarkMode();
    })

    // para hacer que cuando selecciones el modo oscuro se quede en ese modo asi recargues
    // la pagina o vuelva a entrar hasta que tu mismo lo modifiques 
    // debemos usar el localStorage para eso necesitamo el evento DOMContentLoaded
    // pero al ejecutarlo dentro de la funcion DarkTheme, que se ejecuta en el index
    // que teien otro evento DOMContentLoaded no se puedes es decir no podmemos 
    // ejecutar un evento DOMContentLoaded dentro de otro evento DOMContentLoaded
    // sacamos del evento DOMCont... del  index la funcion , mas afuera
    // por eso vamos a modificaR un poco nustra funcion 
    // vamos a encerrar los if en funciones ("modo oscuro", "modo claro")
}


