
const d = document;

export function digiClock(clock,btnPlay,btnStop){
    let clockTempo; 

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
            d.querySelector(clock).insertAdjacentHTML("afterbegin",`<h3></h3>`)
            

            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector("#reloj h3").innerHTML = `${clockHour}`;
            },1000);

            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo)
            d.querySelector(clock).removeChild(d.querySelector("#reloj h3"))
            d.querySelector(btnPlay).disabled = false;
        }
    })
}


export function alarm(sound,btnPlay,btnStop){
    let alarmT;

    const $alarm = d.createElement("audio");
    $alarm.src = sound;
    
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){

            alarmT = setTimeout(()=>{
                
                $alarm.play();            
            },2000);

            e.target.disabled = true;

        }


        if(e.target.matches(btnStop)){

            clearTimeout(alarmT);
            $alarm.pause();
            $alarm.currentTime = 0
            d.querySelector(btnPlay).disabled = false;
        }

    })
    
}

