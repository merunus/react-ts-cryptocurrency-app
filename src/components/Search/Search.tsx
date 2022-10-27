import React, { useCallback } from "react";
import { TSearchProps } from "./types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectCurrencyData } from "../../redux/currency/selectors";
import { changeSearch, fetchCoins } from "../../redux/currency/slice";
import debounce from "lodash.debounce";
import SearchContainer from "./SearchContainer";

const Search: React.FC<TSearchProps> = React.memo(
  ({ isSearchActive, handleOpenSearch, handleCloseSearch }) => {
    const dispatch = useAppDispatch();
    const {
      search,
      currentTimePeriod,
      currentCurrency,
      favorites,
      currentTag,
    } = useAppSelector(selectCurrencyData);

    const handleChange = (value: string) => {
      dispatch(changeSearch(value));
      updateSearchValue(value);
    };

    const updateSearchValue = useCallback(
      debounce((str: string) => {
        dispatch(
          fetchCoins({
            referenceCurrencyUuid: currentCurrency.uuid,
            timePeriod: currentTimePeriod,
            search: str,
            tags: currentTag.value,
            uuids: favorites,
          })
        );
      }, 650),
      []
    );

    return (
      <SearchContainer
        handleChange={handleChange}
        handleCloseSearch={handleCloseSearch}
        handleOpenSearch={handleOpenSearch}
        isSearchActive={isSearchActive}
        search={search}
      />
    );
  }
);

export default Search;
