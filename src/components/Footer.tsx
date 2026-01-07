export const Footer = () => {
  return (
    <footer className="mt-auto pt-8 text-center text-sm text-gray-500 flex flex-col items-center gap-2 mb-2">
      <p>
        Hecho por{" "}
        <span className="font-medium text-gray-700 dark:text-gray-300">
          Leandro Dzib
        </span>
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/leandrodzn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition"
          aria-label="GitHub"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/leandrodzib"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
