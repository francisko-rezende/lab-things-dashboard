type WeatherWidgetWrapperProps = React.ComponentProps<"section">;
export function WeatherWidgetWrapper(props: WeatherWidgetWrapperProps) {
  return (
    <section
      className="flex w-full flex-col items-center rounded-lg bg-stone-50 px-2 py-5"
      {...props}
    />
  );
}
