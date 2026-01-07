import styles from "./Pagination.module.css";
import type { CSSProperties, MouseEvent } from "react";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  loading?: boolean;
}

export const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  loading,
}: PaginationProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePrevButton: CSSProperties =
    isFirstPage || loading ? { pointerEvents: "none", opacity: 0.5 } : {};
  const styleNextButton: CSSProperties =
    isLastPage || loading ? { pointerEvents: "none", opacity: 0.5 } : {};

  const handlePrevClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (!isFirstPage && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (!isLastPage && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className={styles.pagination}>
      <a
        href={"#"}
        style={stylePrevButton}
        onClick={handlePrevClick}
        aria-disabled={loading || isFirstPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>

      <a
        href={"#"}
        style={styleNextButton}
        onClick={handleNextClick}
        aria-disabled={loading || isLastPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  );
};
