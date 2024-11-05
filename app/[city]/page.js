import { getForecastData } from "@/lib/weatherApi";
import CityDetail from "@/components/CityDetail";
import { notFound } from "next/navigation";

export default async function CityDetailPage({ params }) {
  const data = await getForecastData(params.city);

  if (data.error) {
    notFound();
  }

  return <CityDetail data={data} />;
}
