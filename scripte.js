

let city = document.querySelector('div #city');
console.log(city);
let cityInput
function getvalue(){cityInput = city.value;}


city.addEventListener("keyup",(event) => {
    
    if(event.keyCode == 13){
        getvalue();
        city.value = "";
        meteo();
    }
        

    });
let API_KEY = "8d1ea57f5c7bb682b127c50f23b95b2b";
let unit = "metric";
let div = document.getElementById("div")
async function meteo(){
  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=${unit}`)
    .then(Response => Response.json())
    .then(data => {console.log(data);console.log(data.main)
    let nomCity = data.name;
    let temperature = data.main.temp
    let h1 = document.querySelector('div h1');
    h1.textContent = nomCity;
    let temp = document.getElementById('temp');    
    temp.innerText = temperature+"°C";    
    }
        
         )

    .catch(error => console.error(error));
}
