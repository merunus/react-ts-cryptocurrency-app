import { Currency } from "../../redux/currency/types";

export type TActionBarProps = {
  isSingleCoin: boolean;
  coinName?: string;
};

export interface TOptions extends Currency {
  label: string;
  value: string;
}

export type TTimeOptions = {
  label: string;
  value: string;
};

export type TActionBarContProps = {
  isSingleCoin: boolean;
  coinName?: string;
  currencyOptions: TOptions[];
  handleChangeTimePeriod: (option: TTimeOptions | null) => void;
  handleChangeCurrency: (option: TOptions | null) => void;
  currentCurrency: Currency;
  currentTimePeriod: string;
};
