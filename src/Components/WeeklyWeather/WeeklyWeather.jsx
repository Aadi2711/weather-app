import React from 'react'
import "./WeeklyWeather.css"
import weatherIcon from "../../icons/01d.png"

function WeeklyWeather({weather_value}) {
    const arr= [0,1,2,3,4,5,6];
    console.log(weather_value)

    const time_converter = (time_val) =>{
        var date= new Date(String(time_val)+'Z');
        var val= String(date)
        const val_arr= val.split(" ");
        return (val_arr[4].slice(0,5));
    }

    const day_converter = (day_val) =>{
        var date= new Date(String(day_val)+'T00:00:00Z');
        var val= String(date);
        const val_arr= val.split(" ");
        const day= val_arr[0];

        if(day==="Mon"){
            return "MONDAY"
        }
        else if(day==="Tue"){
            return "TUESDAY"
        }
        else if(day==="Wed"){
            return "WEDNESDAY"
        }
        else if(day==="Thu"){
            return "THURSDAY"
        }
        else if(day==="Fri"){
            return "FRIDAY"
        }
        else if(day==="Sat"){
            return "SATURDAY"
        }
        else{
            return "SUNDAY"
        }
    }

    return (
        <div className='weekly-container'>
            {arr?.map((index)=>{
                return(
                <div className='daily-weather-container'>
                    <div className='left-daily'>
                        <div className="icon-temp">
                            <img src={weatherIcon} alt="Weather" className='icon-daily-weather'/>
                        </div>
                        <p className="day-min-max-temp" style={{width:"30%"}}>{day_converter(weather_value.time[index])}</p>
                        <p className="day-min-max-temp" style={{width:"30%"}}>{weather_value.temperature_2m_max[index]}°C / {weather_value.temperature_2m_min[index]}°C</p>
                    </div>
                    
                    <div className='right-daily'>
                                <div>
                                    <div className='parameter-row'>
                                        <span className='parameter-label top-label'>Details</span>
                                    </div>
                                    <div className='parameter-row'>
                                        <span className='parameter-label'>Sunrise</span>
                                        <span className='parameter-value'>{time_converter(weather_value.sunrise[index])} AM</span>
                                    </div>
                                    <div className='parameter-row'>
                                        <span className='parameter-label'>Sunset</span>
                                        <span className='parameter-value'>{time_converter(weather_value.sunset[index])} PM</span>
                                    </div>
                                    <div className='parameter-row'>
                                        <span className='parameter-label'>Precipitation</span>
                                        <span className='parameter-value'>{weather_value.precipitation_probability_max[index]}%</span>
                                    </div>
                                    <div className='parameter-row'>
                                        <span className='parameter-label'>Wind Speed</span>
                                        <span className='parameter-value'>{weather_value.wind_speed_10m_max[index]} Km/h</span>
                                    </div>
                                </div>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default WeeklyWeather