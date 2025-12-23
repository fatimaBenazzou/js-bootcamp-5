import { useEffect, useState } from "react";

const details = [
  {
    icon: "icon-[wi--humidity]",
    value: (weatherData) => `${weatherData.main.humidity}%`,
  },
  {
    icon: "icon-[wi--strong-wind]",
    value: (weatherData) => `${weatherData.wind.speed} m/s`,
  },
  {
    icon: "icon-[wi--barometer]",
    value: (weatherData) => `${weatherData.main.pressure} hPa`,
  },
  {
    icon: "icon-[wi--cloudy]",
    value: (weatherData) => `${weatherData.clouds.all}%`,
  },
];

const getWeatherIcon = (weather) => {
  switch (weather) {
    case "Clear":
      return "icon-[wi--day-sunny]";
    case "Clouds":
      return "icon-[wi--cloudy]";
    case "Rain":
      return "icon-[wi--rain]";
    case "Snow":
      return "icon-[wi--snow]";
    case "Thunderstorm":
      return "icon-[wi--thunderstorm]";
    case "Drizzle":
      return "icon-[wi--showers]";
    case "Mist":
      return "icon-[mdi--weather-mist]";
    case "Smoke":
      return "icon-[mdi--smoke]";
    case "Haze":
      return "icon-[mdi--weather-hazy]";
    case "Dust":
      return "icon-[mdi--weather-dust]";
    case "Fog":
      return "icon-[mdi--weather-fog]";
    case "Tornado":
      return "icon-[mdi-weather-tornado]";
    default:
      return "icon-[wi--day-sunny]";
  }
};

const getBackgroundColor = (weather) => {
  switch (weather) {
    case "Clear":
      return "from-orange-300 to-yellow-300";
    case "Clouds":
      return "from-gray-300 to-blue-300";
    case "Rain":
      return "from-blue-300 to-indigo-500";
    case "Snow":
      return "from-white to-blue-200";
    case "Thunderstorm":
      return "from-gray-700 to-black";
    default:
      return "from-gray-300 to-blue-300";
  }
};

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("alger");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        throw new Error("City not Found.");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error fetching weather data, ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <section className="w-full max-w-md">
        {/* input */}
        <form onSubmit={handleSearch} className="flex gap-4 items-center mb-4">
          <input
            type="text"
            placeholder="Enter a city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input bg-white text-black rounded-full flex-1"
          />
          <button
            type="submit"
            className="bg-white text-black btn btn-circle border-0"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <span class="icon-[mdi--search]"></span>
            )}
          </button>
        </form>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* weather card */}
        {weatherData && weatherData.cod === 200 && (
          <div
            className={`card p-6 text-white bg-linear-to-b ${getBackgroundColor(
              weatherData.weather[0].main
            )}`}
          >
            {/* details */}
            <div className="flex flex-col items-center gap-4">
              <span
                className={`w-16 h-16 ${getWeatherIcon(
                  weatherData.weather[0].main
                )}`}
              ></span>
              <div className="text-center">
                <h2 className="text-2xl font-bold">{weatherData.name}</h2>
                <p className="text-sm">{weatherData.weather[0].description}</p>
              </div>
              <p className="text-6xl font-bold">
                {Math.round(weatherData.main.temp)}°C
              </p>
            </div>
            {/* grid */}
            <ul className="grid grid-cols-2 gap-4 mt-6">
              {details.map((detail, i) => (
                <li key={detail.icon + i} className="flex items-center">
                  <span className={`w-6 h-6 mr-2 ${detail.icon}`}></span>
                  <p>{detail.value(weatherData)}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
