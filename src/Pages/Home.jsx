import React from 'react';
import './Home.css';
import useWeatherData from '../Hooks/fetchWeather.js';
import { getWindDirection } from '../Controller/controller.js';

export const Home = () => {
  const cityName = 'Eilenburg'; // Stadtnamen hier eintragen oder aus einer anderen Quelle erhalten
  const weatherData = useWeatherData(cityName);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, weather, wind } = weatherData;
  const temperature = Math.round(main.temp); // Keine Umrechnung erforderlich

  return (
    <div id="home">
        <div className="headline align-middle text-center fw-bold"><h1>WAKE WITH US</h1></div>
        <div className="wetterApi d-flex flex-row justify-content-around align-items-center flex-wrap ">
            <div className="wetter-item">Temperatur: {temperature}°C</div>
            <div className="wetter-item">Bewölkung:<img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="Weather Icon" /></div>
            
            <div className="wetter-item">Windrichtung: {getWindDirection(wind.deg)}</div>
            <div className="wetter-item">Windgeschwindigkeit: {wind.speed} m/s
            </div>
        </div>
    </div>
  );
};
