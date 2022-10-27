import React from "react";
import { NumericFormat } from "react-number-format";
import styles from "../ChartBlock.module.scss";
import { TChartHeaderProps } from "./types";

const ChartHeader: React.FC<TChartHeaderProps> = ({
  coin,
  currentCurrency,
  currentTimePeriod,
  highestNumber,
  lowestNumber,
}) => {
  return (
    <div className={styles.chart__headerWrapper}>
      <header className={styles.chart__header}>
        <h2>Price chart</h2>
        <div className={styles.chart__statsRow}>
          <h1>{currentTimePeriod}</h1>
          <span
            className={`${
              Number(coin?.change) > 0 ? styles.positive : styles.negative
            }`}
          >
            {coin && Number(coin.change) > 0 && "+"}
            {coin && coin.change ? coin.change : "--"}%
          </span>
        </div>
        <div className={styles.chart__statsRow}>
          <h1>Highest</h1>
          <span className={styles.chart__numbers}>
            <NumericFormat
              value={highestNumber}
              thousandSeparator=","
              displayType="text"
              decimalScale={2}
              prefix={currentCurrency.sign ? currentCurrency.sign : ""}
            />
          </span>
        </div>
        <div className={styles.chart__statsRow}>
          <h1>Lowest</h1>
          <span className={styles.chart__numbers}>
            <NumericFormat
              value={lowestNumber}
              thousandSeparator=","
              displayType="text"
              decimalScale={2}
              prefix={currentCurrency.sign ? currentCurrency.sign : ""}
            />
          </span>
        </div>
      </header>
    </div>
  );
};

export default ChartHeader;
