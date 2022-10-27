import React from "react";
import CoinStatisticsRow from "./CoinStatisticsRow";
import styles from "./CoinStatistics.module.scss";
import { TCoinStatisticContProps } from "./types";

const CoinStatisticsContainer: React.FC<TCoinStatisticContProps> = ({
  options,
  coin,
}) => {
  return (
    <section className={styles.doubleSection}>
      <div className={styles.stats}>
        <div className={styles.stats__top}>
          <h2>Value statistics</h2>
          <p>
            An overview showing the statistics of <span>{coin?.name}</span>,
            such as the base and quote currency, the rank, and trading volume.
          </p>
        </div>
        <table className={styles.stats__list}>
          <tbody>
            {options.map((option) => {
              return (
                <CoinStatisticsRow
                  icon={option.icon}
                  label={option.label}
                  value={option.value}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CoinStatisticsContainer;
