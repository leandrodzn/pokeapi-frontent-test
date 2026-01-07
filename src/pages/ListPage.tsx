import { PokemonList } from "@/components/PokemonList";
import { Pagination } from "@/components/Pagination";
import { SearchBar } from "@/components/SearchBar";

import { usePokemonList } from "@/hooks/usePokemonList";

export const ListPage = () => {
  const {
    pokemons,
    loading,
    error,
    currentPage,
    totalPages,
    handlePageChange,
    handleSearchChange,
  } = usePokemonList();

  return (
    <main className="min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Pokémon</h1>
      <SearchBar onSearch={handleSearchChange} loading={loading} />
      <PokemonList list={pokemons} loading={loading} error={error} />
      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          loading={loading}
          onPageChange={(page) => {
            handlePageChange(page);
          }}
        />
      </div>
    </main>
  );
};
