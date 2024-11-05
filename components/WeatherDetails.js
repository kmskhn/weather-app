import Image from "next/image";

export default function WeatherDetails({ data }) {
    const { name, main, weather, wind } = data;
  
    return (
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="mt-2">
          <p className="text-md">Temperature: {main.temp} °C</p>
          <p className="text-md">Weather: {weather[0].description}</p>
          <p className="text-md">Wind Speed: {wind.speed} m/s</p>
          <p className="text-md">Humidity: {main.humidity} %</p>
          <Image
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
            className="w-16 h-16 mt-2"
          />
        </div>
      </div>
    );
  }
  