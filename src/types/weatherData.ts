import z from "zod";

const coordSchema = z.object({
  lon: z.number(),
  lat: z.number(),
});

const weatherSchema = z.array(
  z.object({
    id: z.number(),
    main: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
);

const mainSchema = z.object({
  temp: z.number(),
  feels_like: z.number(),
  temp_min: z.number(),
  temp_max: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  sea_level: z.number(),
  grnd_level: z.number(),
});

const windSchema = z.object({
  speed: z.number(),
  deg: z.number(),
  gust: z.number(),
});

const cloudsSchema = z.object({
  all: z.number(),
});

const sysSchema = z.object({
  country: z.string(),
  sunrise: z.number(),
  sunset: z.number(),
});
const weatherDataSchema = z.object({
  coord: coordSchema,
  weather: weatherSchema,
  base: z.string(),
  main: mainSchema,
  visibility: z.number(),
  wind: windSchema,
  clouds: cloudsSchema,
  dt: z.number(),
  sys: sysSchema,
  timezone: z.number(),
  id: z.number(),
  name: z.string(),
  cod: z.number(),
});

export type WeatherData = z.infer<typeof weatherDataSchema>;
