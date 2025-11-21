import React from "react";
import { useState } from "react";
import WeatherCard from "./WeatherCard";

const ApiKey = import.meta.env.VITE_API_KEY;

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const image =
    "https://i.pinimg.com/1200x/dd/34/f2/dd34f2caf11d4e4f235559eba14bf832.jpg";

  const getWeather = async () => {
    if (!city) {
      setError("Please Enter a City First");
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setError("City Not Found. Try Again");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
        setCity("");
      }
    } catch (err) {
      setError(`Failed to Fetch the weather data : ${err.message}`);
      setWeather(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <div
      className="flex min-h-screen text-white flex-col lg:flex-row lg:gap-16 bg-cover bg-no-repeat bg-center justify-center items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-white/10 ring-1 hover:ring-2 ring-white/30 transition ease-in-out backdrop-blur-xs mt-4 sm:mt-4 p-1 rounded-3xl">
        <form
          className="rounded-3xl bg-black/15 backdrop-blur-none flex flex-col p-4 sm:p-6 gap-4 justify-center items-center"
          onSubmit={handleSearch}
        >
          <h1 className="text-2xl sm:text-3xl font-medium font-cabinet">
            {" "}
            Weather &nbsp;Forecast
          </h1>
          <input
            className="text-2xl bg-black/25 backdrop-blur-none outline-none capitalize font-cabinet py-2 px-8 my-4 w-64 sm:w-80 rounded-2xl"
            type="text"
            value={city}
            placeholder="Enter City Name"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="text-lg bg-white/15 hover:scale-105 font-cabinet backdrop-blur-sm p-3 sm:py-2 sm:px-4 rounded-2xl hover:ring-1 ring-gray-600 transition ease-in-out"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {error && <p className="error">{error}</p>}

      {weather ? (
        <div className="p-1 ring-1 hover:ring-2 ring-white/30 transition ease-in-out rounded-3xl backdrop-blur-xs bg-white/10 mt-10 mb-10">
          <div className="flex justify-center">
            <WeatherCard ele={weather} />
          </div>
        </div>
      ) : error ? (
        <p className="text-xl">{error}</p>
      ) : (
        <p className="text-xl opacity-70 mt-8">
          Search for a city to get weather data
        </p>
      )}
    </div>
  );
};

export default WeatherApp;
