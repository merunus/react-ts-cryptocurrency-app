import { SingleCoin } from "../../redux/currency/types";

export type TCoinStatisticsRowProps = {
  icon: string;
  label: string;
  value: any;
};

export type TCoinStatisticContProps = {
  options: TStatisticOption[];
  coin: SingleCoin | null;
};
export type TStatisticOption = {
  label: string;
  icon: string;
  value: JSX.Element | string | number | undefined;
};
