import { Coin } from "../../redux/currency/types";
import { TagOption } from "../../utils/options/tagsOptions";

export type TCurrencyTableContProps = {
  currentTimePeriod: string;
  isLoading: boolean;
  search: string;
  coinsBlock: JSX.Element[];
  noResultsBlock: JSX.Element;
  loadingBlock: JSX.Element;
  coins: Coin[];
  currentTag: TagOption;
};
