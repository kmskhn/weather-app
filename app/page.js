import Dashboard from '@/components/Dashboard';
import { getWeatherData } from '@/lib/weatherApi';

const defaultCities = ['Dubai', 'London', 'Tokyo', 'Sydney', 'Mumbai', 'New York', 'Riyadh', 'Singapore'];

export default async function DashboardPage() {
  const weatherData = await Promise.all(defaultCities.map(city => getWeatherData(city)));

  return (
    <div className="container m-auto p-4 min-h-screen">
      <Dashboard initialWeatherData={weatherData} />
    </div>
  );
}
