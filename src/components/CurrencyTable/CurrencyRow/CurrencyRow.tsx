import React from "react";
import styles from "../CurrencyTable.module.scss";
import heartDisabled from "../../../assets/images/heart-disabled.svg";
import heartActive from "../../../assets/images/heart-active.svg";
import { NumericFormat } from "react-number-format";
import { CurrencyRowProps } from "./types";
import { marketCapFormatter } from "../../../utils/numberFormatter";

const CurrencyRow: React.FC<CurrencyRowProps> = ({
  change,
  marketCap,
  name,
  rank,
  iconUrl,
  price,
  symbol,
  currentCurrency,
  uuid,
  handleRowClick,
  handleAddToFavorites,
  isFavorite,
}) => {
  return (
    <tr
      className={styles.tbody__row}
      onClick={() => handleRowClick({ coinId: uuid, coinName: name })}
    >
      <td className={`${styles.tbody__ceil} ${styles.tbody__ceil_1}`}>
        <div className={styles.profile}>
          <span
            onClick={(e) => handleAddToFavorites(e, uuid)}
            className={styles.profile__favoriteBtn}
          >
            <img
              src={isFavorite ? heartActive : heartDisabled}
              alt="heart-disabled"
            />
          </span>
          <span className={styles.profile__rank}>{rank}</span>
          <span className={styles.profile__logo}>
            <img src={iconUrl} alt="currency-logo" />
          </span>
          <span className={styles.profile__name}>
            <span>{symbol}</span>
            <span className={styles.profile__subtitle}>
              <span className={styles.profile__subtitle_name}>{name}</span>
              <span className={styles.profile__tags}></span>
            </span>
          </span>
        </div>
      </td>
      <td className={`${styles.tbody__ceil} ${styles.tbody__ceil_2}`}>
        <div className={styles.tbody__ceil_price}>
          <NumericFormat
            value={Number(price)}
            thousandSeparator=","
            displayType="text"
            decimalScale={2}
            prefix={currentCurrency.sign ? currentCurrency.sign : ""}
          />
        </div>
        <span className={styles.tbody__ceil_mobileSubtitle}>
          {currentCurrency.sign}
          {marketCapFormatter(Number(marketCap))}
        </span>
      </td>
      <td className={`${styles.tbody__ceil} ${styles.tbody__ceil_3}`}>
        <div className={styles.tbody__ceil_price}>
          {marketCap ? (
            <NumericFormat
              value={marketCap}
              thousandSeparator=","
              displayType="text"
              decimalScale={0}
              prefix={currentCurrency.sign ? currentCurrency.sign : ""}
            />
          ) : (
            "$ --"
          )}
        </div>
      </td>
      <td className={`${styles.tbody__ceil} ${styles.tbody__ceil_4}`}>
        <div
          className={`${styles.tbody__ceil_change} ${
            Number(change) > 0 ? styles.positive : styles.negative
          }`}
        >
          {Number(change) > 0 && "+"}
          {change ? change : "--"}%
        </div>
      </td>
    </tr>
  );
};

export default CurrencyRow;
