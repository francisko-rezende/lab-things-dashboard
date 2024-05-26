import { ENDPOINTS } from "@/constants/endpoints";
import { WeatherData } from "@/types/weatherData";
import { unstable_noStore as noStore } from "next/cache";

interface GetWeatherDataProps {
  lat: number;
  lon: number;
}

export const getWeatherData = async ({ lat, lon }: GetWeatherDataProps) => {
  noStore();
  try {
    const weatherRes = await fetch(ENDPOINTS.GET_CITY_WEATHER({ lat, lon }));
    const data = (await weatherRes.json()) as WeatherData;

    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
