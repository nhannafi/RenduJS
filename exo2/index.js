const celciusInput = document.querySelector('#celcius >input');
const fahrenheitInput = document.querySelector('#fahrenheit >input');

// console.log('celciusInput');


//cette fonction permet de convertir  C° vers F°
function celcuisToFahrenheit(){
    // console.log(celciusInput.value);
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp + (9/5)) +32;
    fahrenheitInput.value =fTemp ;
}

//cette fonction permet de convertir F°  vers C°
function fahrenheitToCelcuis(){
    // console.log(celciusInput.value);
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9) ;
    celciusInput.value =cTemp ;
}

celciusInput.addEventListener('input', celcuisToFahrenheit);
fahrenheitInput.addEventListener('input', fahrenheitToCelcuis);