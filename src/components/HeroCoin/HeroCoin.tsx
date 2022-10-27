import React from "react";
import { NumericFormat } from "react-number-format";
import { selectCurrencyData } from "../../redux/currency/selectors";
import { useAppSelector } from "../../redux/store";
import styles from "./HeroCoin.module.scss";

const HeroCoin: React.FC = () => {
  const { coin, currentCurrency } = useAppSelector(selectCurrencyData);
  return (
    <div className={styles.heroCoin}>
      <div className={styles.heroCoin__wrapper}>
        <div className={styles.heroCoin__main}>
          <div className={styles.heroCoin__profile}>
            <div className={styles.heroCoin__icon}>
              <img src={coin?.iconUrl} alt={`${coin?.name} icon`} />
            </div>
            <div className={styles.heroCoin__identifier}>
              <h1>{coin?.name}</h1>
              <div className={styles.heroCoin__symbol}>
                {coin?.symbol}
                <span># {coin?.rank}</span>
              </div>
            </div>
          </div>
          <div className={styles.heroCoin__values}>
            <div className={styles.heroCoin__price}>
              <NumericFormat
                value={coin && Number(coin.price)}
                thousandSeparator=","
                displayType="text"
                decimalScale={2}
                prefix={currentCurrency.sign ? currentCurrency.sign : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCoin;
