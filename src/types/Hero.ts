export interface Hero {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: number;
  films: number[];
}

export interface HeroesResponse {
  count: number;
  results: Hero[];
}

export enum TypeCardHero {
  Short = "SHORT", // this use for Herois list
  Full = "FULL", // this use the page Hero
}
