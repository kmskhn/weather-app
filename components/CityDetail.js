"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const weatherColors = {
  Clear: "bg-blue-500/80 dark:bg-blue-400/80",
  Rain: "bg-gray-500/80 dark:bg-gray-600/80",
  Snow: "bg-white/80 text-gray-800 dark:bg-gray-800/80",
  Clouds: "bg-gray-400/80 dark:bg-gray-700/80",
  Thunderstorm: "bg-purple-700/80 dark:bg-purple-600/80",
  Drizzle: "bg-blue-300/80 dark:bg-blue-200/80",
  Mist: "bg-gray-300/80 dark:bg-gray-400/80",
};

function getUniqueDates(list) {
  const seenDates = new Set();
  return list.filter((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString("en-US");
    if (seenDates.has(date)) {
      return false;
    }
    seenDates.add(date);
    return true;
  });
}

export default function CityDetail({ data }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteCities")) || [];
    setIsFavorite(savedFavorites.includes(data.city.name));
  }, [data.city.name]);

  const toggleFavorite = () => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteCities")) || [];
    let updatedFavorites = isFavorite
      ? savedFavorites.filter((city) => city !== data.city.name)
      : [...savedFavorites, data.city.name];

    localStorage.setItem("favoriteCities", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  const weatherCondition = data.list[0].weather[0].main;
  const cardBackgroundColor =
    weatherColors[weatherCondition] || "bg-gray-300/80 dark:bg-gray-600/80";

  const uniqueDateForecasts = getUniqueDates(data.list);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div
        className={`relative max-w-4xl w-full rounded-lg shadow-lg p-6 text-white ${cardBackgroundColor}`}
      >
        <div className="absolute top-4 right-4 text-4xl font-extrabold tracking-wide text-white drop-shadow-lg">
          {data.city.name}
        </div>

        <div
          className="absolute top-4 left-4 cursor-pointer"
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <AiFillHeart className="text-red-500 text-3xl" />
          ) : (
            <AiOutlineHeart className="text-white text-3xl" />
          )}
        </div>

        <div className="flex flex-col items-center mt-6">
          <Image
            src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`}
            alt={data.list[0].weather[0].description}
            width={120}
            height={120}
            className="object-contain"
          />
          <h1 className="text-5xl font-semibold mt-4">
            {data.list[0].main.temp} °C
          </h1>
          <p className="text-2xl capitalize font-medium">{weatherCondition}</p>
          <p className="text-lg">
            Feels Like:{" "}
            <span className="font-semibold">
              {data.list[0].main.feels_like} °C
            </span>
          </p>
          <p className="text-lg">
            Wind Speed:{" "}
            <span className="font-semibold">{data.list[0].wind.speed} m/s</span>
          </p>
          <p className="text-lg">
            Humidity:{" "}
            <span className="font-semibold">
              {data.list[0].main.humidity} %
            </span>
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            5-Day Forecast
          </h2>
          <div className="flex overflow-x-auto space-x-4">
            {uniqueDateForecasts.slice(1, 6).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-700 rounded-lg p-4 text-white shadow-md min-w-[120px]"
              >
                <p className="text-lg font-medium">
                  {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <Image
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description}
                  width={50}
                  height={50}
                />
                <p className="font-semibold mt-2">{item.main.temp} °C</p>
                <p className="text-sm capitalize">{item.weather[0].main}</p>
                <div className="text-left">
                  
                 
                  <p className="text-xs flex justify-between">
                    <strong>Feels Like:</strong> <span className="ml-2">{item.main.feels_like} °C</span>
                  </p>
                  <p className="text-xs flex justify-between">
                    <strong>Max:</strong> <span className="ml-2">{item.main.temp_max} °C</span>
                  </p>
                  <p className="text-xs flex justify-between">
                    <strong>Min:</strong> <span className="ml-2">{item.main.temp_min} °C</span>
                  </p>
                  <p className="text-xs flex justify-between">
                    <strong>Humidity:</strong> <span className="ml-2">{item.main.humidity} %</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
