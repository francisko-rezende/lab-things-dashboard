import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithUser } from "@/utils/tests/renderWithUser";
import { WeatherWidgetLoading } from "./WeatherWidgetLoading";

describe("<WeatherWidgetLoading />", () => {
  test("that the loading message is detectable by screen readers", async () => {
    renderWithUser(<WeatherWidgetLoading />);
    const component = screen.getByText("Carregando informações do tempo...");
    expect(component).toBeInTheDocument();
  });
});
