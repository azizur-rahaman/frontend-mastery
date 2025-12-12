import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import useDarkMode from "./hooks/useDarkMode";

const API_KEY = "4ce39ca78543b41ef63093676cc144be";

function App() {
  const [city, setCity] = useState("Dhaka");
  const [inputValue, setInputValue] = useState("Dhaka");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dark, setDark] = useDarkMode();

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        if (data.cod === 200) {
          setWeather(data);
        } else {
          setError("City not found");
          setWeather(null);
        }
      } catch (err) {
        setError("Failed to fetch weather data");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);


  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue.trim());
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1 className="title">Weather App</h1>
          <button 
            className="theme-toggle" 
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Enter city name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weather && !loading && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;