function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle("mydark");
}
function loadCoupon(){
    document.getElementById("coupon").style.display="block"

}
function closeCoupon(){
    document.getElementById("coupon").style.display="none"
    
} 
let x = document.getElementById('out');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText="Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
    sessionStorage.setItem('data',data)
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

    /// api Calling 
    fetch(url,{method:'GET'})
    // return promise
    .then((res) => res.json())
    // return data
    .then((data) => {
        let cityName = data.city.name
        let weather = data.list[0].temp.day
        x.innerText = `Weather of ${cityName} is ${weather} °C`
    })
}