import React from 'react'

export const fetchWeather = async (rivers) => rivers.map( async (river) => {
    try {
        const weatherResponse = fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${river.zip},us&APPID=aa448cbd88506531166118202cf29945`)
        const weather = await weatherResponse
        const currentWeather = await weather.json()
        console.log(currentWeather)
        river.weather = currentWeather.weather[0].main
        river.temp = convertTemp(currentWeather.main.temp)
        river.low = convertTemp(currentWeather.main.temp_min)
        river.high = convertTemp(currentWeather.main.temp_max)
        river.wind = currentWeather.wind.speed < 1 ? 1 : Math.round(currentWeather.wind.speed)
        console.log(river)
        return river
    }
    catch (error) {
        return error;
    }
}) 

const convertTemp = (temp) => {
    let fahrenheit = ((temp - 273.15) * 1.8) + 32
    return Math.round(fahrenheit);
}

const DNR_URL = 'http://dnrweb.state.co.us/DWR/DwrApiService/api/v2/telemetrystations/telemetrystation/?format=json&abbrev='

// export const fetchRiverFlows = (rivers) => rivers.map( river => {
//     fetch(DNR_URL + river.abbrev)
//     .then(response => response.json())
//     .then(data => {
//         console.log(river.name, data.ResultList[0].measValue + data.ResultList[0].units);
//         river.flows = (data.ResultList[0].measValue + data.ResultList[0].units)
//         return river
//     })
// })

export const fetchRiver = async (rivers) => rivers.map( async (river) => {
    try {
        const riverResponse = fetch(DNR_URL + river.abbrev)
        const flows = await riverResponse
        const currentFlow = await flows.json()
        console.log(currentFlow)
        river.flows = currentFlow.ResultList[0].measValue + currentFlow.ResultList[0].units
        console.log(river.flows)
        return await river
    }
        catch (error) {
        return error;
    }
})




