
const d = document;

export function countdown (id, limitDate, FinalMensj){

    const $countDown = d.getElementById(id), 
    countDownDate = new Date(limitDate).getTime();

    let countDownTempo = setInterval(()=>{

        let now = new Date().getTime(),
        limitTime = countDownDate - now,

        days    = Math.floor(limitTime/(1000*60*60*24))
        hours   = Math.floor(limitTime%(1000*60*60*24))
        minutes,
        seconds;

        // $countDown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas
        //  ${minutes} minutos ${seconds} segundos</h3>`
         
        console.log(countDownDate, now, limitTime)

    },1000);


}