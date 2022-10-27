import { Currency, SingleCoin } from "../../redux/currency/types";

export type TChartBlockContProps = {
  currentTimePeriod: string;
  currentCurrency: Currency;
  highestNumber: number;
  lowestNumber: number;
  isBigScreen: boolean;
  chartData: number[][];
  chartLabels: number[][];
  handleChangeTimePeriod: (value: string) => void;
  coin: SingleCoin | null;
};
