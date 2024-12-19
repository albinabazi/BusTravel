//b961f5d3580a305b4c54d6287d491d08

import React, { useState, useEffect } from 'react';
import backgroundImage from './clouds.jpg'; // Update the path to your image

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const apiKey = 'b961f5d3580a305b4c54d6287d491d08';

  useEffect(() => {
    const fetchWeatherDataForCity = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData([data]);
      } catch (error) {
        console.error(`Error fetching weather data for ${searchCity}:`, error);
      }
    };

    if (searchCity) {
      fetchWeatherDataForCity();
    }
  }, [searchCity]);

  const handleSearchChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleSearch = () => {
    if (searchCity) {
      setSearchCity(searchCity);
    }
  };

  return (
    <div
      style={{
        marginBottom: '20px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px', 
        color: '#fff', 
      }}
    >
      <h2>
        <img
          src="./images/weather.png"
          alt="Weather"
          style={{ width: '35px', height: '35px', marginRight: '5px' }}
        />
        Kërkoni motin në qytetin tuaj
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input
          className="form-control"
          type="text"
          placeholder="Shkruani qytetin"
          value={searchCity}
          onChange={handleSearchChange}
          style={{ marginRight: '10px', width: '350px' }}
        />
        <button onClick={handleSearch} style={{ border: 'none', background: 'none' }}>
          <img
            src="./images/search.png"
            alt="Search"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </div>
      <div>
        {weatherData.map((cityWeather, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{cityWeather.name}</h3>
            <p>
              <img
                src="./images/hot.png"
                alt="Temperature"
                style={{ width: '25px', height: '25px', marginRight: '5px' }}
              />
              Temperature: {cityWeather.main.temp} °C
            </p>
            <p>
              <img
                src="./images/humidity.png"
                alt="Humidity"
                style={{ width: '30px', height: '30px', marginRight: '5px' }}
              />
              Humidity: {cityWeather.main.humidity} %
            </p>
            <p>
              <img
                src="./images/rainy.png"
                alt="Rain"
                style={{ width: '30px', height: '30px', marginRight: '5px' }}
              />
              Rain: {cityWeather.rain ? `${cityWeather.rain['1h']} mm/h` : '0 mm/h'}
            </p>
            <p>
              <img
                src="./images/wind.png"
                alt="Wind Speed"
                style={{ width: '30px', height: '30px', marginRight: '5px' }}
              />
              Wind Speed: {cityWeather.wind.speed} m/s
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
              alt="Weather Icon"
              style={{ width: '80px' }}
            />
            <p>Description: {cityWeather.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;