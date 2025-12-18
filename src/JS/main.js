let searchBtn = document.getElementById("searchbtn");
searchBtn.addEventListener("click", ()=>{
    let city = document.getElementById("cityInput").value.trim();
    if(city === ""){
        alert("Please Enter a city or Country Name");
        return;
    }
    window.location.href = `destination.html?city=${city}`;

});