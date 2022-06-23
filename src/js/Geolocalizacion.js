
const d = document,
n = navigator;

export function getGeoLocation(id) {

    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const success = (position) => {
        let coords = position.coords;
        // console.log(position);

        $id.innerHTML = `
            <p>Tu posición actual es:</p>
                <ul>
                <li>Latitud: <b>${coords.latitude} </b> </li>
                <li>Longitud: <b>${coords.longitude} </b> </li>
                <li>Presición: <b>${coords.accuracy} </b> metros</li>
         
                </ul>
            
                <a href="https://www.google.com/maps/@$${coords.latitude},${coords.longitude},  " target="_blank" 
                10z" traget="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    };
        

    const error   = (err)=>{

        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error: ${err.code}: ${err.message}`);
    }; 
    

    n.geolocation.getCurrentPosition(success,error, options);

};