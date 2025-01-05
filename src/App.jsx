import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CurrentWeatherData from "./currentweatherdata/CurrentWeatherData";
import Error from "./errocomp/Error";
import HoursSection from "./HoursSection/HoursSection";
import DayWiseForecast from "./DayWiseForecast/DayWiseForecast";

function App() {
  let [location, setLocation] = useState({ city: "Surat" });
  const [weatherData, setWeatherData] = useState(null);
  let [showError, setShowError] = useState(false);
  let [errorMessage, setErrorMessage] = useState("Error");
  let [forecastData, setForecastData] = useState(null);
  function handleErrorMessage() {
    setShowError(!showError);
  }

  const fetchLocationOnSearch = async (city) => {
    const locURL2 = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${
      import.meta.env.VITE_API_ID
    }`;
    try {
      const locResponse2 = await fetch(locURL2);
      const locData2 = await locResponse2.json();
      if (locData2.length > 0) {
        setLocation({
          city: locData2[0].name,
          region: locData2[0].state,
          country: locData2[0].country,
        });
      } else {
        throw new Error("City not found");
      }
    } catch (error) {
      setShowError(!showError);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const ipURL = `https://api.ipify.org?format=json`;
      try {
        const ipResponse = await fetch(ipURL);
        const ipData = await ipResponse.json();
        const LocURL = `https://ipinfo.io/${ipData.ip}?token=${
          import.meta.env.VITE_API_IP_ID
        }`;
        const locResponse = await fetch(LocURL);
        const locData = await locResponse.json();
        setLocation(locData);
      } catch (error) {
        setShowError(!showError);
        setErrorMessage(error);
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async (city) => {
      try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_API_ID
        }`;
        const response = await fetch(URL);
        const data = await response.json();
        if (data.cod == 200) {
          setWeatherData({
            cod: data.cod,
            temperature: Math.round(data.main.temp),
            weather:
              String(data.weather[0].description)[0].toUpperCase() +
              String(data.weather[0].description).slice(1),
            feelsLike: Math.round(data.main.feels_like),
            wind: Math.round(data.wind.speed),
            humidity: Math.round(data.main.humidity),
            visibility: Math.round(data.visibility / 1000),
            pressure: data.main.pressure,
            weatherIcon: data.weather[0].icon,
          });
          setLocation({
            city: data.name,
            region: location.region,
            country: data.sys.country,
          });
        } else if (data.cod != 200) {
          setShowError(!showError);
          setErrorMessage(data.message);
        }
      } catch (error) {
        setShowError(!showError);
        setErrorMessage(error);
      }
    };

    fetchWeatherData(location.city);
  }, [location.city]);

  useEffect(() => {
    const fetchForecast = async (city) => {
      let forecastData_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
        import.meta.env.VITE_API_ID
      }&units=metric`;
      try {
        const forecastDataResponse = await fetch(forecastData_URL);
        const forecastDataTemp = await forecastDataResponse.json();
        if (forecastDataTemp.cod == 200) {
          setForecastData(forecastDataTemp);
        }
      } catch (error) {
        setShowError(!showError);
        setErrorMessage(error);
      }
    };
    fetchForecast(location.city);
  }, [location.city]);

  function handleSearchValue(newCity) {
    fetchLocationOnSearch(newCity);
  }
  return (
    <>
      <Navbar newCity={handleSearchValue}></Navbar>
      {weatherData && (
        <CurrentWeatherData
          location={
            `${location.city}` +
            (location.region ? `, ${location.region}` : "") +
            `, ${location.country}`
          }
          temperature={weatherData.temperature}
          weather={weatherData.weather}
          feelsLike={weatherData.feelsLike}
          wind={weatherData.wind}
          humidity={weatherData.humidity}
          visibility={weatherData.visibility}
          pressure={weatherData.pressure}
          icon={weatherData.weatherIcon}
        />
      )}
      {showError && (
        <Error handleErrorMessage={handleErrorMessage}>{errorMessage}</Error>
      )}
      {forecastData && <HoursSection data={forecastData}></HoursSection>}
      {/* {forecastData && <DayWiseForecast data={forecastData}></DayWiseForecast>} */}
    </>
  );
}

export default App;
