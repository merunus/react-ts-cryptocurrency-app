import React from "react";
import { TCalculatorContProps } from "./types";
import Select from "react-select";
import { Title } from "../../components";
import { customStylesCalculator } from "../../utils/options/selectOptions";
import styles from "./Calculator.module.scss";

const CalculatorContainer: React.FC<TCalculatorContProps> = ({
  amountTo,
  currencyOptions,
  handleChangeAmountFrom,
  handleChangeAmountTo,
  handleChangeCurrencyFrom,
  handleChangeCurrencyTo,
  handleSwapCurrencies,
  isSingleCoin,
  singleCoinId,
  isBigScreen,
  amountFrom,
  currenciesRefs,
  currencyFrom,
  currencyTo,
}) => {
  return (
    <section
      className={`${styles.calculator} ${
        isSingleCoin && styles.calculatorSection
      }`}
    >
      <Title
        mainText="Calculator"
        subText="Use the calculator to convert real-time prices between all available cryptocurrencies and fiat."
      />
      <div className={styles.calculator__main}>
        <div className={styles.calculator__baseCurrency}>
          <div className={styles.calculator__inputArea}>
            <input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              autoComplete="off"
              onChange={(e) => handleChangeAmountFrom(Number(e.target.value))}
              value={amountFrom.toString()}
              className={styles.calculator__input}
            />
          </div>
          <div>
            <Select
              options={currencyOptions}
              placeholder={
                isBigScreen
                  ? currenciesRefs.find(
                      (el) =>
                        el.uuid === (isSingleCoin ? singleCoinId : currencyFrom)
                    )?.name
                  : currenciesRefs.find(
                      (el) =>
                        el.uuid === (isSingleCoin ? singleCoinId : currencyFrom)
                    )?.symbol
              }
              styles={customStylesCalculator}
              onChange={handleChangeCurrencyFrom}
            />
          </div>
        </div>
        <button
          onClick={handleSwapCurrencies}
          className={styles.calculator__swapBtn}
        >
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            width="16"
            height="18"
            viewBox="0 0 16 18"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#5986c9"
          >
            <g fill="none" strokeWidth="2">
              <path d="m10 1 5 5h-14"></path>
              <path d="m6 17-5-5h14"></path>
            </g>
          </svg>
        </button>
        <div className={styles.calculator__baseCurrency}>
          <div className={styles.calculator__inputArea}>
            <input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              autoComplete="off"
              onChange={(e) => handleChangeAmountTo(Number(e.target.value))}
              value={amountTo}
              className={styles.calculator__input}
            />
          </div>
          <div>
            <Select
              options={currencyOptions}
              placeholder={
                isBigScreen
                  ? currenciesRefs.find((el) => el.uuid === currencyTo)?.name
                  : currenciesRefs.find((el) => el.uuid === currencyTo)?.symbol
              }
              styles={customStylesCalculator}
              onChange={handleChangeCurrencyTo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorContainer;
