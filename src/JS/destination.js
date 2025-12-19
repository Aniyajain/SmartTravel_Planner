const params = new URLSearchParams(window.location.search);

const city = params.get("city");
// console.log(city);
let GEODB_API_KEY = "d9a8041231msh39718dc76557e72p1336e4jsn8b88afa54fbd";
let GEODB_HOST = "wft-geo-db.p.rapidapi.com"

const CityName = document.getElementById("cityName");
if(city){
    CityName.textContent = city;
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

            
            
            
        } catch (error) {
            console.log(error);
            
            
        }
    }

    fetchCityData(city); 
}else{
    CityName.textContent = "Unknown City";
}
