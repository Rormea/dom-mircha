

const d = document;

export function draw (btn,selector){

    const getWinner = (selector)=>{
        const $players = d.querySelectorAll(selector),
            aleatorio = Math.floor(Math.random()*$players.length),
            winner = $players[aleatorio];

            console.log($players,aleatorio,winner);

            return `El Gnador es ${winner.textContent}`

      /* 
            $players selcciones todos los jugadores en un nodelist 
            aleatorio toma n°s de 0 y la cantidad de players ($players.length) 
            winner nos da la posicion del resultado de aleatorio
      */  

    }

    d.addEventListener("click", (e) =>{
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);

        }
    })
}