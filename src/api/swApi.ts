import axios from "axios";
import { HeroesResponse } from "../types/Hero";

const apiUrl = process.env.REACT_APP_BASE_URL;

// Function for get heroes
export const getHeroes = async (page: number = 1) => {
  try {
    console.log(`${apiUrl}/people/?page=${page}`);
    const response = await axios.get<HeroesResponse>(
      `${apiUrl}/people/?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching heroes:", error);
    throw error;
  }
};
