import React from "react";
import { TActionBarProps, TOptions, TTimeOptions } from "./types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectCurrencyData } from "../../redux/currency/selectors";
import {
  changeCurrentCurrency,
  changeCurrentTimePeriod,
  fetchCoins,
} from "../../redux/currency/slice";
import ActionBarContainer from "./ActionBarContainer";

const ActionBar: React.FC<TActionBarProps> = ({ isSingleCoin, coinName }) => {
  const dispatch = useAppDispatch();
  const {
    currentCurrency,
    currenciesRefs,
    currentTimePeriod,
    currentTag,
    currentSortOption,
    favorites,
  } = useAppSelector(selectCurrencyData);

  const handleChangeCurrency = (option: TOptions | null) => {
    if (option && !isSingleCoin) {
      dispatch(
        fetchCoins({
          referenceCurrencyUuid: option?.uuid,
          timePeriod: currentTimePeriod,
          orderBy: currentSortOption.value,
          orderDirection: currentSortOption.orderDirection,
          tags: currentTag.value,
          uuids: favorites,
        })
      ).then(() => {
        dispatch(changeCurrentCurrency(option));
      });
    } else {
      option && dispatch(changeCurrentCurrency(option));
    }
  };

  const handleChangeTimePeriod = (option: TTimeOptions | null) => {
    if (option && !isSingleCoin) {
      dispatch(
        fetchCoins({
          referenceCurrencyUuid: currentCurrency.uuid,
          timePeriod: option.value,
          orderBy: currentSortOption.value,
          orderDirection: currentSortOption.orderDirection,
          tags: currentTag.value,
          uuids: favorites,
        })
      ).then(() => {
        dispatch(changeCurrentTimePeriod(option.value));
      });
    } else {
      option && dispatch(changeCurrentTimePeriod(option.value));
    }
  };

  const currencyOptions: TOptions[] = currenciesRefs.map((currency) => {
    return { ...currency, label: currency.symbol, value: currency.uuid };
  });

  return (
    <ActionBarContainer
      handleChangeCurrency={handleChangeCurrency}
      handleChangeTimePeriod={handleChangeTimePeriod}
      coinName={coinName}
      isSingleCoin={isSingleCoin}
      currencyOptions={currencyOptions}
      currentCurrency={currentCurrency}
      currentTimePeriod={currentTimePeriod}
    />
  );
};

export default ActionBar;
