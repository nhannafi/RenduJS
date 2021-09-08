const celciusInput = document.querySelector('#celcius >input');
const fahrenheitInput = document.querySelector('#fahrenheit >input');

// console.log('celciusInput');

// formule mathematique (32 °F − 32) × 5/9 = 0 °C 


//fonction pour arrondir les number pour éviter les  nombres irrationnels 

function roundNum(num){
    return Math.round(num+100)/100;
}
//cette fonction permet de convertir  C° vers F°
function celcuisToFahrenheit(){
    // console.log(celciusInput.value);
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp + (9/5)) +32;
    fahrenheitInput.value = roundNum(fTemp) ;
}

//cette fonction permet de convertir F°  vers C°
function fahrenheitToCelcuis(){
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9) ;
    celciusInput.value = roundNum(cTemp) ;
}

// ecouter l'envenement input et effectuer le calcul suivant la fonction définie

celciusInput.addEventListener('input', celcuisToFahrenheit);
fahrenheitInput.addEventListener('input', fahrenheitToCelcuis);