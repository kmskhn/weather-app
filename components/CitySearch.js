"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CitySearch() {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (city) {
      router.push(`/${city}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col items-center mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border border-gray-300 rounded-lg p-2 mb-4 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
      <button
        type="submit" 
        className="bg-blue-500 text-white rounded-lg p-2 w-full max-w-xs hover:bg-blue-600 transition duration-300"
      >
        Search
      </button>
    </form>
  );
}
