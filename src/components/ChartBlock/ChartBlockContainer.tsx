import React from "react";
import { TChartBlockContProps } from "./types";
import styles from "./ChartBlock.module.scss";
import ChartHeader from "./ChartHeader/ChartHeader";
import LineChart from "./LineChart/LineChart";
import TimePeriodSwitch from "./TimePeriodSwitch/TimePeriodSwitch";

const ChartBlockContainer: React.FC<TChartBlockContProps> = ({
  chartData,
  chartLabels,
  currentCurrency,
  currentTimePeriod,
  handleChangeTimePeriod,
  highestNumber,
  isBigScreen,
  coin,
  lowestNumber,
}) => {
  return (
    <section className={styles.chart}>
      <ChartHeader
        highestNumber={highestNumber}
        lowestNumber={lowestNumber}
        coin={coin}
        currentCurrency={currentCurrency}
        currentTimePeriod={currentTimePeriod}
      />
      <div className={styles.chart__chartWrapper}>
        <LineChart
          isBigScreen={isBigScreen}
          chartData={chartData}
          chartLabels={chartLabels}
          currentCurrency={currentCurrency}
          currentTimePeriod={currentTimePeriod}
        />
      </div>
      <TimePeriodSwitch
        currentTimePeriod={currentTimePeriod}
        handleChangeTimePeriod={handleChangeTimePeriod}
      />
    </section>
  );
};

export default ChartBlockContainer;
