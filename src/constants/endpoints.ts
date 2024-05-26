import env from "@/config/env";

export const ENDPOINTS = {
  GET_CITY_GEOLOCATION: ({ cityName }: { cityName: string }) =>
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${env.OPENWEATHER_KEY}` as const,
  GET_CITY_WEATHER: ({ lat, lon }: { lat: number; lon: number }) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&appid=${env.OPENWEATHER_KEY}` as const,
};
