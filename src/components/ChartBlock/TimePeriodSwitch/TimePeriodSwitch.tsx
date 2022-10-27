import React from "react";
import { TTimePeriodProps } from "./types";
import styles from "../ChartBlock.module.scss";
import { timeOptions } from "../../../utils/options/selectOptions";

const TimePeriodSwitch: React.FC<TTimePeriodProps> = ({
  currentTimePeriod,
  handleChangeTimePeriod,
}) => {
  return (
    <div className={styles.timePeriod}>
      <div className={styles.timePeriod_switch}>
        <div className={styles.timePeriod_switch__label}>Time Period</div>
        <div className={styles.timePeriod_switch__scrollable}>
          <ul className={styles.timePeriod_switch__list}>
            {timeOptions.map((option, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => handleChangeTimePeriod(option.value)}
                    className={`${styles.timePeriod_switch__actionBtn} ${
                      currentTimePeriod === option.value && styles.selected
                    }`}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimePeriodSwitch;
