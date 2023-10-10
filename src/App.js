import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const name = 'PHUKET';
  const apiKey = 'ee90f8e2e4272a5cc88b9efd0ff7687d';
  const [city, setCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        setIsLoading(true);
      });
  }, []);
  const covertTemp = (k) => {
    return (k - 273).toFixed();
  };
  return (
    isLoading && (
      <div className="App">
        <section>
          <div className="location">
            <h1 className="city">{city.name}</h1>
            <p className="state">{city.sys.country}</p>
          </div>
          <div className="card">
            <div className="weather">
              <h1>{covertTemp(city.main.temp)}&deg;C</h1>
              <small>
                สูงสุด:{covertTemp(city.main.temp_max)}&deg;C , ต่ำสุด:
                {covertTemp(city.main.temp_min)}&deg;C
              </small>
            </div>
            <div className="info">
              <div className="status">{city.weather[0].main}</div>
              <div className="humidity">ความชื้น: {city.main.humidity}</div>
              <div className="wind">ความเร็วลม: {city.wind.speed}</div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default App;
