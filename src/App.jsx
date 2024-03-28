import React, { useState } from 'react'
import './App.css'
import Search from './Components/Search'
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import { weather_api_url, weather_const } from './api'
import WeeklyWeather from './Components/WeeklyWeather/WeeklyWeather'

function App() {

    const [weatherResponse, setWeatherResponse] = useState(null);
    const [dailyWeatherResponse, setDailyWeatherResponse] = useState(null);
    const handleOnSearchChange = async(searchData) =>{
        const [lat, lon]= searchData.value.split(" ");

        try{
            const response = await(fetch(`${weather_api_url}latitude=${lat}&longitude=${lon}&${weather_const}`));
            const currentWeatherSearch = await response.json();
            setWeatherResponse({city: searchData.label, ...currentWeatherSearch.current});
            setDailyWeatherResponse({...currentWeatherSearch.daily})
        } catch(error){
            console.log(error);
        }
    }
    return (
        <div className='container'>
            <Search onSearchChange={handleOnSearchChange}/>
            {weatherResponse && <CurrentWeather weatherInformation={weatherResponse}/>}
            {dailyWeatherResponse &&<WeeklyWeather weather_value={dailyWeatherResponse}/>}
        </div>
    )
}

export default App