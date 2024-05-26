import { getStateAbbreviation } from "@/utils/strings/getStateAbbreviation";
import { formatToCelcius } from "@/utils/strings/formatToCelsius";
import Image from "next/image";
import { capitalize } from "@/utils/strings/capitalize";
import { getCityCoordinates } from "@/api/getCityCoordinates";
import { getWeatherData } from "@/api/getWeatherData";
import { WeatherWidgetWrapper } from "@/components/atoms/WeatherWidgetWrapper";
import { WeatherWidgetTitle } from "@/components/atoms/WeatherWidgetTitle";
import { WeatherWidgetDescription } from "@/components/atoms/WeatherWidgetDescription";

export async function WeatherWidget() {
  const CITY = "Itutinga";

  const cityCoordinates = await getCityCoordinates({ cityName: CITY });
  if (!cityCoordinates) {
    return <WeatherWidgetWrapper>Houve um erro</WeatherWidgetWrapper>;
  }
  const { lat, lon, state } = cityCoordinates;
  const weatherData = await getWeatherData({ lat, lon });

  if (!weatherData) {
    return <WeatherWidgetWrapper>Houve um erro</WeatherWidgetWrapper>;
  }

  const {
    weather: [{ description, icon }],
    main: { temp, feels_like },
  } = weatherData;

  const capitalizedDescription = capitalize(description);
  const stateAbbreviation = getStateAbbreviation(state);
  const formattedTemperature = formatToCelcius(temp);
  const formattedFeelsLike = formatToCelcius(feels_like);

  return (
    <WeatherWidgetWrapper>
      <WeatherWidgetTitle>{formattedTemperature}</WeatherWidgetTitle>
      <WeatherWidgetDescription>
        {capitalizedDescription}
      </WeatherWidgetDescription>
      <Image
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
        aria-hidden
        width={100}
        height={100}
      />
      <p>
        {CITY}, {stateAbbreviation}
      </p>
      <p>Sensação térmica: {formattedFeelsLike}</p>
    </WeatherWidgetWrapper>
  );
}
