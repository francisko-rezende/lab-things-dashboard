export const formatToCelcius = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: "celsius",
    maximumSignificantDigits: 3,
  }).format(value);
};
