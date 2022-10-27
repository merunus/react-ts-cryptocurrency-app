import React from "react";
import { TCurrencyTableContProps } from "./types";
import styles from "./CurrencyTable.module.scss";

const CurrencyTableContainer: React.FC<TCurrencyTableContProps> = ({
  currentTimePeriod,
  coinsBlock,
  isLoading,
  loadingBlock,
  noResultsBlock,
  search,
  coins,
  currentTag,
}) => {
  return (
    <section className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.thead__row}>
            <th className={`${styles.thead__ceil} ${styles.thead__ceil_1}`}>
              <span>All coins</span>
            </th>
            <th className={`${styles.thead__ceil} ${styles.thead__ceil_2}`}>
              <span>Price</span>
            </th>
            <th className={`${styles.thead__ceil} ${styles.thead__ceil_3}`}>
              <span>Market cap</span>
            </th>
            <th className={`${styles.thead__ceil} ${styles.thead__ceil_4}`}>
              <span>{currentTimePeriod}</span>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {isLoading ? loadingBlock : coinsBlock}
          {search && coins.length < 1 && !isLoading && noResultsBlock}
          {!search &&
            currentTag.value === "favorites" &&
            coins.length < 1 &&
            noResultsBlock}
        </tbody>
      </table>
    </section>
  );
};

export default CurrencyTableContainer;
