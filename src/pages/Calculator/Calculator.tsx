import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { TOptions } from "../../components/ActionBar/types";
import { selectCurrencyData } from "../../redux/currency/selectors";
import {
  changeCurrencyFrom,
  changeCurrencyTo,
  fetchCoinPrice,
  fetchCurrenciesRefs,
} from "../../redux/currency/slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import CalculatorContainer from "./CalculatorContainer";
import { TCalculatorProps } from "./types";

const Calculator: React.FC<TCalculatorProps> = ({
  isSingleCoin,
  singleCoinId,
}) => {
  const dispatch = useAppDispatch();
  const { exchangeRate, currencyFrom, currencyTo } =
    useAppSelector(selectCurrencyData);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1400px)" });
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(
    Number((amountFrom * exchangeRate).toFixed(4))
  );

  const { currenciesRefs } = useAppSelector(selectCurrencyData);

  const currencyOptions: TOptions[] = currenciesRefs.map((currency) => {
    return {
      ...currency,
      label: isBigScreen ? currency.name : currency.symbol,
      value: currency.uuid,
    };
  });

  useEffect(() => {
    dispatch(
      fetchCoinPrice({
        coinId: currencyFrom,
        referenceCurrencyUuid: currencyTo,
      })
    );
  }, [currencyFrom, currencyTo, dispatch]);

  useEffect(() => {
    setAmountTo(Number((amountFrom * exchangeRate).toFixed(4)));
  }, [amountFrom, exchangeRate]);

  useEffect(() => {
    dispatch(fetchCurrenciesRefs({ limit: 100 }));
  }, [dispatch]);

  const handleChangeAmountFrom = (value: number) => {
    if (isNaN(value) || value.toString() === "Infinity") return;
    setAmountFrom(Number(value.toFixed(4)));
    setAmountTo(Number((value * exchangeRate).toFixed(4)));
  };

  const handleChangeAmountTo = (value: number) => {
    if (isNaN(value) || value.toString() === "Infinity") return;
    setAmountTo(value);
    setAmountFrom(Number((value / exchangeRate).toFixed(4)));
  };

  const handleChangeCurrencyFrom = (option: TOptions | null) =>
    option && dispatch(changeCurrencyFrom(option.uuid));

  const handleChangeCurrencyTo = (option: TOptions | null) =>
    option && dispatch(changeCurrencyTo(option?.uuid));

  const handleSwapCurrencies = () => {
    dispatch(dispatch(changeCurrencyTo(currencyFrom)));
    dispatch(dispatch(changeCurrencyFrom(currencyTo)));
  };

  return (
    <CalculatorContainer
      amountFrom={amountFrom}
      amountTo={amountTo}
      currenciesRefs={currenciesRefs}
      currencyFrom={currencyFrom}
      currencyOptions={currencyOptions}
      currencyTo={currencyTo}
      handleChangeAmountFrom={handleChangeAmountFrom}
      handleChangeAmountTo={handleChangeAmountTo}
      handleChangeCurrencyFrom={handleChangeCurrencyFrom}
      handleChangeCurrencyTo={handleChangeCurrencyTo}
      handleSwapCurrencies={handleSwapCurrencies}
      isBigScreen={isBigScreen}
      isSingleCoin={isSingleCoin}
      singleCoinId={singleCoinId}
    />
  );
};

export default Calculator;
