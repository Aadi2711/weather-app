export const geo_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geo_options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46f532b163mshdb6f5498f89ddaap15ee86jsn44e6de7eefd2',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const weather_api_url = 'https://api.open-meteo.com/v1/forecast?'
export const weather_const= 'current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,cloud_cover,pressure_msl,wind_speed_10m&minutely_15=weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,wind_speed_10m_max';


