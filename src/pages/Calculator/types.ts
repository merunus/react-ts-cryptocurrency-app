import { TOptions } from "../../components/ActionBar/types";
import { Currency } from "../../redux/currency/types";

export type TCalculatorProps = {
  isSingleCoin?: boolean;
  singleCoinId?: string;
};

export type TCalculatorContProps = {
  isSingleCoin?: boolean;
  singleCoinId?: string;
  amountTo: number;
  currencyOptions: TOptions[];
  isLoading: boolean;
  handleChangeAmountFrom: (value: number) => void;
  handleChangeAmountTo: (value: number) => void;
  handleChangeCurrencyFrom: (option: TOptions | null) => void;
  handleChangeCurrencyTo: (option: TOptions | null) => void;
  handleSwapCurrencies: () => void;
  isBigScreen: boolean;
  amountFrom: number;
  currenciesRefs: Currency[];
  currencyFrom: string;
  currencyTo: string;
};
