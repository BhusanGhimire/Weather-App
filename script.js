        let btn = document.getElementById("searchBtn");
        let interedLocation = document.getElementById("location");
        let outputDiv = document.getElementById("output");

        btn.addEventListener("click", getWeather);
            function getWeather() {
            (async function (){
                try{
                    let request = await fetch(`https://goweather.herokuapp.com/weather/${interedLocation.value}`)
                    return request.json()
                }catch(error){
                    console.log(error)
                }
            })().then(data => {
               outputDiv.innerHTML = `temperature: ${data.temperature}<br><br>wind speed: ${data.wind}<br><br>overall weather: ${data.description}`;
               console.log(data)
            })
        };
         window.addEventListener("keypress",e => {
             if(e.key == "Enter"){
                 getWeather();
             }
         });
