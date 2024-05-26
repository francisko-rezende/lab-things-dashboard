import { ENDPOINTS } from "@/constants/endpoints";
import { Coordinates } from "@/types/coordinates";
import { unstable_noStore as noStore } from "next/cache";

interface GetCityCoordinates {
  cityName: string;
}
export const getCityCoordinates = async ({ cityName }: GetCityCoordinates) => {
  noStore();
  try {
    const cityCoordinatesRes = await fetch(
      ENDPOINTS.GET_CITY_GEOLOCATION({ cityName }),
    );

    const cityCoordinates = (await cityCoordinatesRes.json()) as Coordinates;

    const { lat, lon, state } = cityCoordinates[0];
    return { lat, lon, state };
  } catch (error) {
    console.error(error);
    return;
  }
};
