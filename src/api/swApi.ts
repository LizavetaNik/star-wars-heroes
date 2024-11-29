import axios, { AxiosResponse } from "axios";
import { HeroesResponse } from "../types/Hero";
import { FilmsResponse } from "../types/Film";
import { Starship, StarshipsResponse } from "../types/Starship";

const apiUrl = process.env.REACT_APP_BASE_URL;
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getHeroes = async (page: number = 1) => {
  try {
    const response = await axios.get<HeroesResponse>(
      `${apiUrl}/people/?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching heroes:", error);
    throw new Error("Could not fetch heroes");
  }
};

export const getFilms = async (): Promise<FilmsResponse> => {
  try {
    const response = await axios.get<FilmsResponse>(`${apiUrl}/films`);
    return response.data;
  } catch (error) {
    console.error("Error fetching films:", error);
    throw new Error("Failed to fetch films");
  }
};

export const getStarships = async (): Promise<Starship[]> => {
  let allResults: Starship[] = [];
  let currentUrl: string | null = `${apiUrl}/starships`;

  try {
    while (currentUrl) {
      await delay(1000);
      const response: AxiosResponse<StarshipsResponse> =
        await axios.get<StarshipsResponse>(currentUrl);
      allResults = allResults.concat(response.data.results);
      currentUrl = response.data.next;
    }
  } catch (error) {
    console.error("Error fetching starships:", error);
  }
  return allResults;
};
