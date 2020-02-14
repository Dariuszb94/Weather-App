import React from 'react';

const Result= props => {
const{date,sunrise, sunset, temp, pressure, wind, err}=props.weather;
let{city}=props.weather;

let content=null;

    if(!err && city){
        const sunriseTime =new Date(sunrise*1000).toLocaleTimeString();
        const sunsetTime =new Date(sunset*1000).toLocaleTimeString();
        city=city.charAt(0).toUpperCase() + city.slice(1);

content=(
<div class="results">
   <h4>Wyniki wyszukiwania dla <em>{city}</em></h4> 
<h5>Dane dla dnia i godziny: {date}</h5>
<h5>Aktualna temperatura: {temp} &#176;C</h5>
<h5>Aktualne ciśnienie: {pressure} hPa</h5>
<h5>Wschód słońca dzisiaj: {sunriseTime}</h5>
<h5>Zachód słońca dzisiaj: {sunsetTime}</h5>
<h5> Aktualna siła wiatru: {wind} m/s</h5>

   
    </div>
)
    }
    return(
<div className="result">
  {err ? 'Nie ma w bazie ' + city  : content }  
</div>
    );
}
export default Result;