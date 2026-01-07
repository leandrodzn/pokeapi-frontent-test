import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { PokemonState, PokemonListResponse } from "@/types/pokemon";

export const initialPokemonState: PokemonState = {
  list: [],
  loading: false,
  error: null,
  offset: 0,
  count: 0,
  page: 1,
  searchQuery: "",
};

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const ITEMS_PER_PAGE = 6;
const TOTAL_POKEMON_COUNT = 1500; // Total number of Pokémon in the API

export const fetchAll = createAsyncThunk(
  "pokemon/fetchAll",
  async ({
    offset,
    searchQuery = "",
  }: {
    offset: number;
    searchQuery?: string;
  }) => {
    // If there's a search query, fetch a larger set to filter from client-side
    const limit = searchQuery ? TOTAL_POKEMON_COUNT : ITEMS_PER_PAGE;
    const currentOffset = searchQuery ? 0 : offset;

    const response = await axios.get(
      `${BASE_URL}?limit=${limit}&offset=${currentOffset}`
    );

    const data: PokemonListResponse = response.data;
    let results = data.results;

    if (searchQuery) {
      results = results.filter((p: { name: string }) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // If there's a search query, we need to paginate the filtered results
    const paginatedResults = searchQuery
      ? results.slice(offset, offset + ITEMS_PER_PAGE)
      : results;

    // Set up promises to fetch details for each Pokémon
    const pokemonDetailsPromises = paginatedResults.map(
      async (pokemon: { name: string; url: string }) => {
        const detailsResponse = await axios.get(pokemon.url);
        const details = detailsResponse.data;
        return {
          name: pokemon.name,
          url: pokemon.url,
          imageUrl: details.sprites.other["official-artwork"].front_default,
        };
      }
    );

    const detailedPokemons = await Promise.all(pokemonDetailsPromises);

    return {
      count: searchQuery ? results.length : data.count,
      results: detailedPokemons,
    };
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: initialPokemonState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.page = 1;
      state.offset = 0;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      state.offset = (action.payload - 1) * ITEMS_PER_PAGE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch Pokémon";
      });
  },
});

export const { setSearchQuery, changePage } = pokemonSlice.actions;
export default pokemonSlice.reducer;
