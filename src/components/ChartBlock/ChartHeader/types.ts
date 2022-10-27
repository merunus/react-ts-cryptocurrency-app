import { Currency, SingleCoin } from "../../../redux/currency/types";

export type TChartHeaderProps = {
  currentTimePeriod: string;
  coin: SingleCoin | null;
  highestNumber: number;
  currentCurrency: Currency;
  lowestNumber: number;
};
