import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectCurrencyData } from "../../redux/currency/selectors";
import {
  fetchCoinHistory,
  fetchCurrenciesRefs,
  fetchSingleCoin,
} from "../../redux/currency/slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import SingleCoinContainer from "./SingleCoinContainer";

const SingleCoin = () => {
  const { coinId, coinName } = useParams();
  const dispatch = useAppDispatch();
  const { currentTimePeriod, currentCurrency } =
    useAppSelector(selectCurrencyData);

  useEffect(() => {
    if (coinId) {
      dispatch(
        fetchSingleCoin({
          coinId,
          referenceCurrencyUuid: currentCurrency.uuid,
          timePeriod: currentTimePeriod,
        })
      );
      dispatch(
        fetchCoinHistory({
          coinId,
          referenceCurrencyUuid: currentCurrency.uuid,
          timePeriod: currentTimePeriod,
        })
      );
    }
  }, [coinId, currentCurrency.uuid, currentTimePeriod, dispatch]);

  useEffect(() => {
    dispatch(fetchCurrenciesRefs({ limit: 100 }));
  }, [dispatch]);

  return <SingleCoinContainer coinId={coinId} coinName={coinName} />;
};

export default SingleCoin;
