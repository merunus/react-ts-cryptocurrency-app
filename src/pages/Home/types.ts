import { Coin } from "../../redux/currency/types";
import { TagOption } from "../../utils/options/tagsOptions";

export type THomeContProps = {
  isLoading: boolean;
  coins: Coin[];
  currentTag: TagOption;
};
