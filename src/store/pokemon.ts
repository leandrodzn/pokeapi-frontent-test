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

export const fetchAll = createAsyncThunk(
  "pokemon/fetchAll",
  async ({ offset, limit = 6 }: { offset: number; limit?: number }) => {
    const response = await axios.get(
      `${BASE_URL}?limit=${limit}&offset=${offset}`
    );

    const data: PokemonListResponse = response.data;

    const pokemonDetailsPromises = data.results.map(
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
      count: data.count,
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
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      state.offset = (action.payload - 1) * 6;
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
