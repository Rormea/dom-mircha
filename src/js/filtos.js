

const d = document;

export function searchFilter(input, selector){

    d.addEventListener("keyup", (e)=>{
        if(e.target.matches(input)){
            // console.log(e.key)
            // console.log(e.target.value) aqui te el resultado final de lo escrito en el input
            d.querySelectorAll(selector).forEach((el) => 
                el.textContent.toLowerCase().includes(e.target.value)
                ? el.classList.remove("filter")
                : el.classList.add("filter") ) 
        }


        if(e.key=="Escape") e.target.value="";
        
        
    })
}


/* 
    d.querySelectorAll(selector).forEach(el => 
        va a buscar en todas las figuras con clase card
        y por cada una de ellas, es decir por cada elemento 
        que tenga texto convertido a minusculas e incluya 
        e.target.value o sea que incluya lo que el usuario escribe en el input

                el.textContent.toLowerCase().includes(e.target.value))

                ? el.classList.remove("filter")
        entonces removemnos la clase filter 
                : el.classList.add("filter")  
        si no agregamos  la clase filter  
        
        ES DECIR a los que no encunetre la coincidencia los va sacar del display 
        y no van aparecer , lo que si encuntra coincidencia se quedan dehtro del 
        display removiendo la clase filter que lo que hace es aplicar display none
*/