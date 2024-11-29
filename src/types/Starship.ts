export interface Starship {
  id: number;
  name: string;
}

export interface StarshipsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}
