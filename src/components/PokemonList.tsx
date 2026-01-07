import { PokemonCard } from "@/components/PokemonCard";
import type { PokemonListItem } from "@/types/pokemon";

interface PokemonListProps {
  list: PokemonListItem[];
  loading: boolean;
  error: string | null;
}

export const PokemonList = ({ list, loading, error }: PokemonListProps) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <span className="text-lg font-medium animate-pulse">
          Cargando Pokémon…
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20 text-red-500">
        Error: {error}
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-500">
        No se encontraron Pokémon
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {list.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            imageUrl={pokemon.imageUrl}
            url={pokemon.url}
          />
        ))}
      </div>
    </section>
  );
};
