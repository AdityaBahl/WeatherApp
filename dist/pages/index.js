const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '74ab579278msh20e9167de9f9b48p117f57jsn9a46c672cccf',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then(response => {


        console.log(response)

        cloud_pct.innerHtml = response.cloud_pct
        temp.innerHtml = response.temp
        feels_like.innerHtml = response.feels_like
        humidity.innerHtml = response.humidity
        min_temp.innerHtml = response.min_temp
        max_temp.innerHtml = response.max_temp
        wind_speed.innerHtml = response.wind_speed
        wind_degrees.innerHtml = response.wind_degrees

    })
    .catch(err => console.error(err));