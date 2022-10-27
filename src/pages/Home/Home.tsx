import { useEffect } from "react";
import { selectCurrencyData } from "../../redux/currency/selectors";
import { fetchCoins, fetchCurrenciesRefs } from "../../redux/currency/slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import HomeContainer from "./HomeContainer";

const Home = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    initialPage,
    currentSortOption,
    coins,
    search,
    currentTag,
    favorites,
  } = useAppSelector(selectCurrencyData);

  useEffect(() => {
    dispatch(
      fetchCoins({
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        offset: (initialPage - 1) * 50,
        orderBy: currentSortOption.value,
        orderDirection: currentSortOption.orderDirection,
        search,
        tags: currentTag.value,
        uuids: favorites,
      })
    );
  }, [
    currentSortOption.orderDirection,
    currentSortOption.value,
    dispatch,
    initialPage,
    currentTag,
  ]);
  //! Adding search to dependencies remove functionality of debounce

  useEffect(() => {
    dispatch(fetchCurrenciesRefs({ limit: 100 }));
  }, [dispatch]);

  return (
    <HomeContainer
      coins={coins}
      currentTag={currentTag}
      isLoading={isLoading}
    />
  );
};

export default Home;
