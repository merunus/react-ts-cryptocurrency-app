import { Coin, Currency } from "../../../redux/currency/types";

export interface CurrencyRowProps extends Coin {
  currentCurrency: Currency;
  isFavorite: boolean;
  handleRowClick: ({
    coinId,
    coinName,
  }: {
    coinId: string;
    coinName: string;
  }) => void;
  handleAddToFavorites: (e: React.MouseEvent, coinId: string) => void;
}
