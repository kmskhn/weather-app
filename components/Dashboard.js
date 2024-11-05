"use client";

import { useEffect, useState } from 'react';
import CityWeatherCard from '@/components/CityWeatherCard';
import CitySearch from '@/components/CitySearch';

export default function Dashboard({ initialWeatherData }) {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favoriteCities')) || [];
  });

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteCities')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCities', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (cityName) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(cityName)
        ? prevFavorites.filter(city => city !== cityName)
        : [...prevFavorites, cityName]
    );
  };

  const sortedWeatherData = [
    ...initialWeatherData.filter(data => favorites.includes(data.name)),
    ...initialWeatherData.filter(data => !favorites.includes(data.name)),
  ];

  return (
    <>
      <CitySearch />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedWeatherData.map((data, index) => {
          if (data.error) {
            return <p key={index} className="text-red-500">{data.message}</p>;
          }
          return (
            <CityWeatherCard
              key={index}
              data={data}
              isFavorite={favorites.includes(data.name)}
              onToggleFavorite={() => toggleFavorite(data.name)}
            />
          );
        })}
      </div>
    </>
  );
}
