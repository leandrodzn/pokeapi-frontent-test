import { useState, useRef, type FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export const SearchBar = ({ onSearch, loading }: SearchBarProps) => {
  const timerRef = useRef<number | null>(null);
  const [localValue, setLocalValue] = useState("");

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();

    if (loading) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    onSearch(localValue);
  };

  const handleSearchChange = (value: string) => {
    setLocalValue(value);

    if (loading) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center w-full p-4">
      <input
        type="text"
        value={localValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Buscar Pokémon..."
        className="border p-2 rounded w-full max-w-md"
      />
    </form>
  );
};
