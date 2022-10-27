import React from "react";
import { selectCurrencyData } from "../../redux/currency/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useMediaQuery } from "react-responsive";

import { changeCurrentTimePeriod } from "../../redux/currency/slice";
import ChartBlockContainer from "./ChartBlockContainer";

const ChartBlock: React.FC = () => {
  const { coin, currentTimePeriod, currentCurrency, coinHistory } =
    useAppSelector(selectCurrencyData);
  const numbers = coin?.sparkline.map((item) => Number(item));
  const highestNumber = Math.max.apply(0, numbers ? numbers : []);
  const lowestNumber = Math.min.apply(0, numbers ? numbers : []);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1600px)" });
  const dispatch = useAppDispatch();
  const chartData = [
    coinHistory
      .filter((item) => Number(item.price) !== 0)
      .map((history) => Number(history.price))
      .reverse(),
  ];

  const chartLabels = [
    coinHistory
      .map((history) => {
        return history.timestamp;
      })
      .reverse(),
  ];

  const handleChangeTimePeriod = (value: string) => {
    dispatch(changeCurrentTimePeriod(value));
  };

  return (
    <ChartBlockContainer
      chartData={chartData}
      chartLabels={chartLabels}
      currentCurrency={currentCurrency}
      currentTimePeriod={currentTimePeriod}
      isBigScreen={isBigScreen}
      lowestNumber={lowestNumber}
      highestNumber={highestNumber}
      handleChangeTimePeriod={handleChangeTimePeriod}
      coin={coin}
    />
  );
};

export default ChartBlock;
