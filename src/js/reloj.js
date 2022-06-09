
const d = document;

export function digiClock(clock,btnPlay,btnStop){
    let clockTempo; 

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>Hola</h3>`;
            },1000);

            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){}
    })
}


export function alarm(){
    
}

