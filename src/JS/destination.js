const params = new URLSearchParams(window.location.search);

const city = params.get("city");
// console.log(city);
const cityName = document.getElementById("cityName");
const loading = document.querySelector("#loading");
const cityInfoBox = document.querySelector("#cityInfo");
const errorBox = document.querySelector("#error");

const lat = document.querySelector("#lat");
const long = document.querySelector("#long");
const country  = document.querySelector("#country");
const state = document.querySelector("#state");
const population = document.querySelector("#population");

let GEODB_API_KEY = "d9a8041231msh39718dc76557e72p1336e4jsn8b88afa54fbd";
let GEODB_HOST = "wft-geo-db.p.rapidapi.com"

// const CityName = document.getElementById("#cityName");
if(city){
    cityName.textContent = city;
    async function fetchCityData(cityName){
        try {
            let  res =  await fetch(`https://${GEODB_HOST}/v1/geo/cities?namesPrefix=${city}&limit=1`,{
                method : "GET",
                headers : {
                    "X-RapidAPI-Key": GEODB_API_KEY,
                    "X-RapidAPI-Host": GEODB_HOST,
                },

            });
            console.log(res);
            if(!res.ok){
                console.log("API Response Not Fetched,...");
                
            }
            let data = await res.json();
            console.log(data);

            if(!data.data || data.data.length === 0){
                console.log("City Not Found");
                
            }
            let cityData = data.data[0];
            console.log(cityData);

            lat.textContent = cityData.latitude;
            long.textContent = cityData.longitude;
            country.textContent = cityData.country;
            state.textContent = cityData.region || "N/A";
            population.textContent = cityData.population ? cityData.population.toLocaleString(): "N/A";

            loading.classList.add("hidden");
            cityInfoBox.classList.remove("hidden");
            
            
            
        } catch (error) {
            console.log(error);
            loading.classList.add("hidden");
            errorBox.classList.remove("hidden");
            
            
        }
    }

    fetchCityData(city); 
}else{
    CityName.textContent = "Unknown City";
    loading.classList.add("hidden");
    errorBox.classList.remove("hidden");
}
