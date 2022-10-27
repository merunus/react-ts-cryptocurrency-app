import React from "react";
import { TActionBarContProps } from "./types";
import styles from "./ActionBar.module.scss";
import Select from "react-select";
import {
  customStyles,
  customStylesTime,
  timeOptions,
} from "../../utils/options/selectOptions";
import { Paths } from "../../models/paths";
import { Link } from "react-router-dom";

const ActionBarContainer: React.FC<TActionBarContProps> = ({
  isSingleCoin,
  coinName,
  currencyOptions,
  currentCurrency,
  handleChangeCurrency,
  currentTimePeriod,
  handleChangeTimePeriod,
}) => {
  return (
    <>
      <div className={styles.actionBar}>
        {isSingleCoin && (
          <ol className={styles.historyChain}>
            <li className={styles.historyChain__item}>
              <Link to={Paths.Home}>Coins</Link>
            </li>
            <li className={styles.historyChain__item}>
              {coinName?.replace(/[\$\&\'\"\:\<\>\[\]\{\}\+]/g, "")}
            </li>
          </ol>
        )}

        <div className={styles.actionButtons}>
          <div className={styles.actionButtons__selects}>
            <Select
              options={currencyOptions}
              placeholder={currentCurrency.symbol}
              styles={customStyles}
              onChange={handleChangeCurrency}
            />
            <Select
              options={timeOptions}
              placeholder={currentTimePeriod}
              styles={customStylesTime}
              onChange={handleChangeTimePeriod}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionBarContainer;
