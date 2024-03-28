import React from 'react'
import "./CurrentWeather.css"
import weatherIcon from "../../icons/01d.png"

function CurrentWeather({weatherInformation}) {
  return (
    <>
        {weatherInformation ? (
            <div className="weather">
                <div className="top">
                    <div>
                        <p className="city">{weatherInformation.city}</p>
                        {/* <p className='weather-description'>Sunny</p> */}
                    </div>
                    <img src={weatherIcon} alt="Weather" className='weather-icon'/>
                </div>
                <div className="bottom">
                    <p className="temperature">
                        {weatherInformation.temperature_2m}°C
                    </p>
                    <div className="details">
                        <div className='parameter-row'>
                            <span className='parameter-label top-label'>Details</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Wind</span>
                            <span className='parameter-value'>{weatherInformation.wind_speed_10m} Km/hr</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Humidity</span>
                            <span className='parameter-value'>{weatherInformation.relative_humidity_2m}%</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Pressure</span>
                            <span className='parameter-value'>{weatherInformation.pressure_msl} hPa</span>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <div>

            </div>  
        )
        }
    </>
  )
}

export default CurrentWeather