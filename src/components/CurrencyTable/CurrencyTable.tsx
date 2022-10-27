import React from "react";
import { selectCurrencyData } from "../../redux/currency/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import CurrencyRow from "./CurrencyRow/CurrencyRow";
import styles from "./CurrencyTable.module.scss";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../models/paths";
import NoResults from "../NoResults/NoResults";
import NoResultsImage from "../../assets/images/no-results.png";
import NoFavoritesImage from "../../assets/images/no-favorites.png";
import {
  addToFavorites,
  changeCurrentSortOption,
  changeCurrentTagOption,
  clearSearch,
  deleteFromFavorites,
  fetchCoins,
} from "../../redux/currency/slice";
import { closeSearch } from "../../redux/user/slice";
import CurrencyTableContainer from "./CurrencyTableContainer";

const CurrencyTable: React.FC = () => {
  const {
    coins,
    currentCurrency,
    isLoading,
    currentTimePeriod,
    search,
    currentTag,
    favorites,
  } = useAppSelector(selectCurrencyData);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRowClick = (coinInfo: { coinId: string; coinName: string }) => {
    const { coinId, coinName } = coinInfo;
    navigate(`${Paths.SingleCoin}/${coinId}/${coinName}`);
  };

  const handleAddToFavorites = (e: React.MouseEvent, coinId: string) => {
    e.stopPropagation();
    if (favorites.includes(coinId)) {
      dispatch(deleteFromFavorites(coinId));
      return;
    }
    dispatch(addToFavorites(coinId));
  };

  const handleGoBack = () => {
    dispatch(closeSearch());
    if (currentTag.value === "favorites") {
      navigate(Paths.Home);
      dispatch(changeCurrentTagOption({ label: "All", value: "all" }));
    }
    if (search) {
      dispatch(clearSearch());
      dispatch(
        fetchCoins({
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          tags: currentTag.value,
          uuids: favorites,
        })
      );
      dispatch(
        changeCurrentSortOption({
          label: "Market cap",
          value: "marketCap",
          orderDirection: "desc",
        })
      );
    }
  };

  const coinsBlock = coins.map((coin) => {
    const isFavorite = favorites.includes(coin.uuid);
    return (
      <CurrencyRow
        isFavorite={isFavorite}
        key={coin.uuid}
        {...coin}
        currentCurrency={currentCurrency}
        handleRowClick={handleRowClick}
        handleAddToFavorites={handleAddToFavorites}
      />
    );
  });

  const noResultsBlock = (
    <NoResults
      image={
        !search && currentTag.value === "favorites"
          ? NoFavoritesImage
          : NoResultsImage
      }
      text={
        !search && currentTag.value === "favorites"
          ? "No favorites"
          : "No results"
      }
      subtext={
        !search && currentTag.value === "favorites"
          ? "Add coins to your favorites by clicking their heart icons."
          : "We couldn't find a matching result"
      }
      buttonText={
        !search && currentTag.value === "favorites"
          ? "Go to all coins"
          : "Go back"
      }
      handleGoBack={handleGoBack}
    />
  );

  const loadingBlock = (
    <Oval
      height={50}
      width={50}
      color="#002358"
      wrapperStyle={{}}
      wrapperClass={styles.loaderWrapper}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#214a88"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );

  return (
    <CurrencyTableContainer
      coinsBlock={coinsBlock}
      loadingBlock={loadingBlock}
      noResultsBlock={noResultsBlock}
      isLoading={isLoading}
      search={search}
      currentTimePeriod={currentTimePeriod}
      coins={coins}
      currentTag={currentTag}
    />
  );
};

export default CurrencyTable;
