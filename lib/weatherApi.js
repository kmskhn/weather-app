import axios from 'axios';

export async function getWeatherData(city) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    
    if (response.status === 404 || response.data.cod === '404') {
      throw new Error('City not found');
    }
    
    return response.data;
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);

    return { error: true, message: error.message || `Could not fetch weather data for ${city}. Please try again later.` };
  }
}

export async function getForecastData(city) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    
    if (response.status === 404 || response.data.cod === '404') {
      throw new Error('City not found');
    }
    
    return response.data;
  } catch (error) {
    console.error(`Error fetching forecast data for ${city}:`, error);

    return { error: true, message: error.message || `Could not fetch forecast data for ${city}. Please try again later.` };
  }
}

