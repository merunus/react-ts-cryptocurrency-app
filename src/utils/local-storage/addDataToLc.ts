import { Currency } from "../../redux/currency/types";
import { SortOption } from "../options/sortOptions";
import { TagOption } from "../options/tagsOptions";

export const updateCurrentCurrencyToLC = (data: Currency) => {
  localStorage.setItem("currentCurrency", JSON.stringify(data));
};

export const updateCurrentTimePeriodToLC = (data: string) => {
  localStorage.setItem("currentTimePeriod", JSON.stringify(data));
};

export const updateInitialPageToLC = (data: number) => {
  localStorage.setItem("initialPage", JSON.stringify(data));
};

export const updateCurrentSortOptionToLC = (data: SortOption) => {
  localStorage.setItem("currentSortOption", JSON.stringify(data));
};

export const updateCurrentTagOptionToLC = (data: TagOption) => {
  localStorage.setItem("currentTagOption", JSON.stringify(data));
};

export const updateFavoritesListToLC = (data: string[]) => {
  localStorage.setItem("favorites", JSON.stringify(data));
};
