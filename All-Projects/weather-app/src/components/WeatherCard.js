function WeatherCard({ weather }) {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    
    return (
        <div className="weather-card">
            <div className="location">
                <h2>{weather.name}</h2>
                <p className="country">{weather.sys.country}</p>
            </div>
            
            <div className="weather-icon">
                <img src={iconUrl} alt={weather.weather[0].description} />
            </div>
            
            <div className="temperature">
                <h1>{Math.round(weather.main.temp)}°C</h1>
                <p className="feels-like">Feels like {Math.round(weather.main.feels_like)}°C</p>
            </div>
            
            <p className="description">{weather.weather[0].description}</p>
            
            <div className="details">
                <div className="detail-item">
                    <span className="detail-label">Humidity</span>
                    <span className="detail-value">{weather.main.humidity}%</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Wind Speed</span>
                    <span className="detail-value">{weather.wind.speed} m/s</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Pressure</span>
                    <span className="detail-value">{weather.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;