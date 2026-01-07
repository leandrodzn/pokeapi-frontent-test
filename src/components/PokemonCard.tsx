interface PokemonCardProps {
  name: string;
  imageUrl: string;
  url: string;
}

export const PokemonCard = ({ name, imageUrl, url }: PokemonCardProps) => {
  return (
    <article
      className="
        bg-white dark:bg-zinc-900
        rounded-2xl shadow-sm
        p-4
        flex flex-col items-center
        transition
        hover:scale-105 hover:shadow-md
      "
    >
      <img
        src={imageUrl}
        alt={`Imagen de ${name}`}
        loading="lazy"
        className="w-24 h-24 object-contain mb-3"
      />

      <h3 className="capitalize font-semibold text-lg text-center">{name}</h3>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-2 text-sm text-blue-500
          hover:underline
        "
      >
        Ver en PokéAPI
      </a>
    </article>
  );
};
