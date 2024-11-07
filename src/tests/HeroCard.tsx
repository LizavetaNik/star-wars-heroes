import React from "react";
import { render, screen } from "@testing-library/react";
import HeroCard from "../components/HeroCard";
import { Hero, TypeCardHero } from "../types/Hero";
import { BrowserRouter } from "react-router-dom";

const hero: Hero = {
  id: 1,
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: 1,
  films: [1, 3],
};

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("HeroCard", () => {
  test("renders short hero card correctly", () => {
    renderWithRouter(
      <HeroCard hero={hero} typeCardHero={TypeCardHero.Short} />
    );

    // Проверяем, что имя героя отображается
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();

    // Проверяем наличие ссылки "More..."
    expect(screen.getByText(/More\.\.\./i)).toBeInTheDocument();

    // Проверяем, что дополнительные данные не отображаются
    expect(screen.queryByText(/Height:/i)).not.toBeInTheDocument();
  });

  test("renders detailed hero card correctly", () => {
    renderWithRouter(<HeroCard hero={hero} typeCardHero={TypeCardHero.Full} />);

    // Проверяем, что имя героя отображается
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();

    // Проверяем, что все детали отображаются
    expect(screen.getByText(/Height:/i)).toBeInTheDocument();
    expect(screen.getByText(/Mass:/i)).toBeInTheDocument();
    expect(screen.getByText(/Hair Color:/i)).toBeInTheDocument();
    expect(screen.getByText(/Skin Color:/i)).toBeInTheDocument();
    expect(screen.getByText(/Eye Color:/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth Year:/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
    expect(screen.getByText(/Homeworld:/i)).toBeInTheDocument();

    // Проверяем наличие ссылки "Show films"
    expect(screen.getByText(/Show films/i)).toBeInTheDocument();
  });
});
