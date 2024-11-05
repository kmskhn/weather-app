"use client";

import Link from 'next/link';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const weatherColors = {
  Clear: 'bg-blue-400',
  Rain: 'bg-gray-400',
  Snow: 'bg-white',
  Clouds: 'bg-gray-300',
  Thunderstorm: 'bg-purple-600',
  Drizzle: 'bg-blue-200',
  Mist: 'bg-gray-200',
};

export default function CityWeatherCard({ data, isFavorite, onToggleFavorite }) {
  const { name, main, weather, wind } = data;
  const weatherCondition = weather[0].main;
  const cardBackgroundColor = weatherColors[weatherCondition] || 'bg-gray-200';

  return (
    <div className={`relative block p-4 m-2 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer ${cardBackgroundColor}`}>
      <div className="absolute top-2 right-2">
        {isFavorite ? (
          <AiFillHeart className="text-red-500 cursor-pointer" onClick={onToggleFavorite} />
        ) : (
          <AiOutlineHeart className="text-white cursor-pointer" onClick={onToggleFavorite} />
        )}
      </div>
      <Link href={`/${name.toLowerCase()}`}>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-md text-white">Temperature: {main.temp} °C</p>
        <p className="text-md text-white">Condition: {weatherCondition}</p>
        <p className="text-md text-white">Wind: {wind.speed} m/s</p>
        <p className="text-md text-white">Humidity: {main.humidity} %</p>
        <Image
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
          width={64}
          height={64}
          className="mt-2"
        />
      </Link>
    </div>
  );
}
