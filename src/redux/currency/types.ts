import { SortOption } from "../../utils/options/sortOptions";
import { TagOption } from "../../utils/options/tagsOptions";

export interface ICurrencySliceState {
  coins: Coin[];
  coin: SingleCoin | null;
  isLoading: boolean;
  currentCurrency: Currency;
  currenciesRefs: Currency[];
  currentTimePeriod: string;
  totalPages: number;
  initialPage: number;
  search: string;
  currentSortOption: SortOption;
  currentTag: TagOption;
  coinHistory: History[];
  currencyFrom: string;
  currencyTo: string;
  exchangeRate: number;
  favorites: string[];
}

export interface Currency {
  iconUrl: null | string;
  name: string;
  sign: null | string;
  symbol: string;
  type: string;
  uuid: string;
}

export type History = {
  price: string;
  timestamp: number;
};

export type TFetchCoinsParams = {
  referenceCurrencyUuid?: string;
  timePeriod?: string;
  symbols?: string[];
  uuids?: string[];
  tiers?: string[];
  tags?: string;
  orderBy?: string;
  search?: string;
  orderDirection?: string;
  limit?: number;
  offset?: number;
};

export type TFetchSingleCoinParams = {
  referenceCurrencyUuid?: string;
  timePeriod?: string;
  coinId: string;
};

export type TFetchCoinPriceParams = {
  referenceCurrencyUuid?: string;
  coinId: string;
  timestamp?: string;
};

export type TFetchCurrenciesRefsParams = {
  types?: string[];
  search?: string;
  limit?: number;
  offset?: string;
};

export interface RootObject {
  data: Data;
  status: string;
}

export interface Data {
  coins: Coin[];
  stats: Stats;
}

export interface Coin {
  "24hVolume": string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: null | string;
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
  symbol: string;
  tier: number;
  uuid: string;
}

export interface Stats {
  total: number;
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
}

export interface SingleCoin {
  "24hVolume": string;
  allTimeHigh: AllTimeHigh;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  description: string;
  fullyDilutedMarketCap: string;
  iconUrl: string;
  links: Link[];
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  numberOfExchanges: number;
  numberOfMarkets: number;
  price: string;
  priceAt: number;
  rank: number;
  sparkline: string[];
  supply: Supply;
  symbol: string;
  tags: string[];
  tier: number;
  uuid: string;
  websiteUrl: string;
}

export interface AllTimeHigh {
  price: string;
  timestamp: number;
}

export interface Link {
  name: string;
  type: string;
  url: string;
}

export interface Supply {
  circulating: string;
  confirmed: boolean;
  max: string;
  supplyAt: number;
  total: string;
}
