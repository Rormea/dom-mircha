
const d = document;
let x = 0,
    y = 0;

export function moveBall(e,ball, stage){
    const $ball = d.querySelector(ball),
          $stage = d.querySelector(stage),
            limitBall   = $ball.getBoundingClientRect(),
            limitStage  = $stage.getBoundingClientRect();
        //   console.log(e.keyCode)
        //   console.log(e.key)
        //   console.log(limitBall,limitStage)
          


          
    switch (e.keyCode){
        case 37:
            
            // move("left")
            if(limitBall.left-10 > limitStage.left) {
                x--
                e.preventDefault();
            }
            break;
        case 39:
            
            // move("rigth")
            if(limitBall.right+10 < limitStage.right) {
                x++
                e.preventDefault();e.preventDefault();
            }
            break;
        case 38:
            
            // move("up")
            if(limitBall.top-10 > limitStage.top) {
                y--
                e.preventDefault();
            }
            break;
        case 40:
            // move("down")
            if(limitBall.bottom+10 < limitStage.bottom) {
                y++
                e.preventDefault();
            }
            break; 
        
        default:
            break;  

    }    
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`
}






export function shortcuts (e){
    // console.log(e)
    // console.log(e.type)
    // console.log(e.key)
    // console.log(typeof(e.key))
    // console.log(e.keyCode)
    // console.log(`ctrl:${e.ctrlKey}`)
    // console.log(`alt:${e.altKey}`)
    // console.log(`shif:${e.shiftKey}`)

   

    if(e.keyCode === 65 && e.altKey){
        alert("Lanzaste un alerta con el teclado");
    } else{console.log("nay")}

    if(e.key == "c" && e.altKey){
        confirm("Lanzaste un confirm con el teclado");
    }else{console.log("Manan")}

    if(e.key =="p" && e.altKey==true){
        prompt("Lanzaste un promp con el teclado");
    }
}
