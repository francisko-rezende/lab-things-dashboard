type WeatherWidgetTitleProps = React.ComponentProps<"h2">;

export function WeatherWidgetTitle(props: WeatherWidgetTitleProps) {
  return <h2 {...props} className="text-5xl font-bold text-orange-500" />;
}
