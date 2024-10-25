export interface Film {
  id: number;
  title: string;
  starships: number[];
}

export interface FilmsResponse {
  results: Film[];
}
