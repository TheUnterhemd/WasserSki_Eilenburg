import { useState, useEffect } from 'react';

const useWeatherData = (cityName) => {
  const [weatherData, setWeatherData] = useState(null);
  let key = 'e98235eb6b105627783074ea73531957' // process.env.REACT_APP_WEATHER_API_KEY

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [cityName]);

  return weatherData;
};

export default useWeatherData;