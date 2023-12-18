import './App.css';
import Search from './components/search/search'
import Forecast from './components/forecast/forecast';
import CurrentWeather from './components/current-weather/current-weather';
// import Map from './components/map/map';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';

import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  // const [map, setMap] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
    // const mapFetch = fetch(`https://tile.openweathermap.org/map/precipitation_new/1/1.png?appid=${WEATHER_API_KEY}&units=imperial`);

  

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        // const mapResponse = await response[2];

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse })
        // setMap({city: searchData.label, ...mapResponse})
      })
      .catch((err) => console.log(err));
  }

  console.log(forecast);



  return (
    <div className="container">
      <h1> Weather </h1>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      {/* {map && <Map data ={map} />} */}
    </div>
  );
}

export default App;
