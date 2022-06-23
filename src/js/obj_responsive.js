
const d = document;
const w = window;

export function responsiveMedia(id, mq, mobileContent, desktopContent){

    let breakpoint = w.matchMedia(mq);

    const responsive = (e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent
        } else {
            d.getElementById(id).innerHTML = mobileContent
        }

        // console.log("MQ", breakpoint, e.matches,innerWidth )

    /* 
    MQ MediaQueryList { media: "(min-width: 1024px)", matches: true, true 1029
    MQ MediaQueryList { media: "(min-width: 1024px)", matches: true,true 1029
    MQ MediaQueryList { media: "(min-width: 1024px)", matches: false, false 1023
    MQ MediaQueryList { media: "(min-width: 1024px)", matches: false,false 1023
    */
    }
    breakpoint.addEventListener("change",responsive)

    responsive(breakpoint);

}
