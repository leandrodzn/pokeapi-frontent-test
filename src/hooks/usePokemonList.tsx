import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { fetchAll, changePage } from "@/store/pokemon";

export const usePokemonList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, error, offset, page, count } = useSelector(
    (state: RootState) => state.pokemon
  );

  const totalPages = Math.ceil(count / 6);

  useEffect(() => {
    dispatch(fetchAll({ offset }));
  }, [dispatch, offset]);

  const handlePageChange = (newPage: number) => {
    const isValidPage = newPage >= 1 && newPage <= totalPages;
    if (isValidPage) {
      dispatch(changePage(newPage));
    }
  };

  return {
    pokemons: list,
    loading,
    error,
    currentPage: page,
    totalPages,
    handlePageChange,
  };
};
