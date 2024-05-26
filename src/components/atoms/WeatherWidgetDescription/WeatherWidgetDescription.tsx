type WeatherWidgetDescriptionProps = React.ComponentProps<"p">;

export function WeatherWidgetDescription(props: WeatherWidgetDescriptionProps) {
  return <p {...props} className="text-3xl text-stone-900 " />;
}
