import React from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectCurrencyData } from "../../redux/currency/selectors";
import { changeInitialPage } from "../../redux/currency/slice";
import { useMediaQuery } from "react-responsive";
import PaginationContainer from "./PaginationContainer";

const Pagination: React.FC = () => {
  //? offset = (page - 1) * itemsPerPage + 1.
  const { totalPages, initialPage, search } =
    useAppSelector(selectCurrencyData);
  const dispatch = useAppDispatch();
  const isBigScreen = useMediaQuery({ query: "(min-width: 1600px)" });

  const handleChangePage = (e: { selected: number }) => {
    dispatch(changeInitialPage(e.selected + 1));
    window.scroll(0, 0);
  };

  return (
    <PaginationContainer
      handleChangePage={handleChangePage}
      initialPage={initialPage}
      isBigScreen={isBigScreen}
      totalPages={totalPages}
    />
  );
};

export default Pagination;
