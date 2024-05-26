import z from "zod";

const coordinatesSchema = z.array(
  z.object({
    name: z.string(),
    lat: z.number(),
    lon: z.number(),
    country: z.string(),
    state: z.string(),
  }),
);

export type Coordinates = z.infer<typeof coordinatesSchema>;
