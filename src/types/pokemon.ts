export interface PokemonListResponseItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListResponseItem[];
}

export interface PokemonListItem extends PokemonListResponseItem {
  imageUrl: string;
}

export interface PokemonState {
  list: PokemonListItem[];
  loading: boolean;
  error: string | null;
  offset: number;
  count: number;
  page: number;
  searchQuery: string;
}
