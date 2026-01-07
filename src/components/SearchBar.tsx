import { useState, type FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [localValue, setLocalValue] = useState("");

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();

    console.log("Searching for:", localValue);

    onSearch(localValue);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center w-full p-4">
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder="Buscar Pokémon..."
        className="border p-2 rounded w-full max-w-md"
      />
    </form>
  );
};
