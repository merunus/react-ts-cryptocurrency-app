import { Currency } from "../../../redux/currency/types";

export type TChartProps = {
  currentCurrency: Currency;
  isBigScreen: boolean;
  currentTimePeriod: string;
  chartLabels: number[][];
  chartData: number[][];
};
