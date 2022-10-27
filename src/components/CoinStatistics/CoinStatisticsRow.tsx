import React from "react";
import { TCoinStatisticsRowProps } from "./types";
import styles from "./CoinStatistics.module.scss";

const CoinStatisticsRow: React.FC<TCoinStatisticsRowProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <tr className={styles.stats__item}>
      <td className={styles.stats__icon}>
        <img src={icon} alt="price icon" />
      </td>
      <th className={styles.stats__label}>
        <span>{label}</span>
      </th>
      <td className={styles.stats__value}>
        <span>{value}</span>
      </td>
    </tr>
  );
};

export default CoinStatisticsRow;
