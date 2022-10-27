import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  Currency,
  ICurrencySliceState,
  RootObject,
  TFetchCoinPriceParams,
  TFetchCoinsParams,
  TFetchCurrenciesRefsParams,
  TFetchSingleCoinParams,
} from "./types";
import { Thunks } from "../../models/thunks";
import customAxios from "../../utils/customAxios";
import {
  updateCurrentCurrencyToLC,
  updateCurrentSortOptionToLC,
  updateCurrentTagOptionToLC,
  updateCurrentTimePeriodToLC,
  updateFavoritesListToLC,
  updateInitialPageToLC,
} from "../../utils/local-storage/addDataToLc";
import {
  getCurrentCurrencyFromLC,
  getCurrentSortOptionFromLC,
  getCurrentTagFromLC,
  getCurrentTimePeriodFromLC,
  getFavoritesFromLC,
  getInitialPageFromLC,
} from "../../utils/local-storage/getDataFromLc";
import { Endpoints } from "../../models/endpoints";
import { SortOption } from "../../utils/options/sortOptions";
import { TagOption } from "../../utils/options/tagsOptions";

export const fetchCurrenciesRefs = createAsyncThunk(
  Thunks.FetchCurrencies,
  async (params: TFetchCurrenciesRefsParams, thunkAPI) => {
    try {
      const { limit } = params;
      const { data } = await customAxios(
        `${Endpoints.CurrenciesRefs}?limit=${limit}`
      );
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("There was an error!");
    }
  }
);

export const fetchCoins = createAsyncThunk(
  Thunks.FetchCoins,
  async (params: TFetchCoinsParams, thunkAPI) => {
    try {
      const {
        referenceCurrencyUuid,
        timePeriod,
        offset,
        tags,
        orderBy,
        orderDirection,
        search,
        uuids,
      } = params;

      // Favorites
      const coinIds =
        uuids &&
        tags === "favorites" &&
        uuids?.map((item) => `&uuids[]=${item}`).join("");
      // Current Currency
      const currency = `?referenceCurrencyUuid=${
        referenceCurrencyUuid ? referenceCurrencyUuid : "yhjMzLPhuIDl"
      }`;
      // Current Tag Option
      const tag = `&tags=${tags && tags !== "all" ? tags : ""}`;
      // Search Param
      const searchParam = `&search=${search ? search : ""}`;
      // Offset Skip (Pagination)
      const oset = `&offset=${offset ? offset : 0}`;
      // Direction (asc/decs)
      const direction = `&orderDirection=${
        orderDirection ? orderDirection : "desc"
      }`;
      // Limit for coins
      const lim = "&limit=50";
      // Sort Order
      const order = `&orderBy=${orderBy ? orderBy : "marketCap"}`;
      // Time Period
      const time = `&timePeriod=${timePeriod ? timePeriod : "24h"}`;

      const { data } = await customAxios<RootObject>(
        `${
          Endpoints.Coins
        }${currency}${time}${oset}${lim}${order}${direction}${searchParam}${
          coinIds ? coinIds : tag
        }
        `
      );

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("There was an error!");
    }
  }
);

export const fetchSingleCoin = createAsyncThunk(
  Thunks.FetchSingleCoin,
  async (params: TFetchSingleCoinParams, thunkAPI) => {
    try {
      const { referenceCurrencyUuid, timePeriod, coinId } = params;

      const currency = `?referenceCurrencyUuid=${
        referenceCurrencyUuid ? referenceCurrencyUuid : "yhjMzLPhuIDl"
      }`;
      const time = `&timePeriod=${timePeriod ? timePeriod : "24h"}`;

      const { data } = await customAxios(
        `${Endpoints.SingleCoin}/${coinId}${currency}${time}`
      );

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("There was an error!");
    }
  }
);

export const fetchCoinHistory = createAsyncThunk(
  Thunks.FetchHistory,
  async (params: TFetchSingleCoinParams, thunkAPI) => {
    try {
      const { referenceCurrencyUuid, timePeriod, coinId } = params;
      const currency = `?referenceCurrencyUuid=${
        referenceCurrencyUuid ? referenceCurrencyUuid : "yhjMzLPhuIDl"
      }`;
      const time = `&timePeriod=${timePeriod ? timePeriod : "24h"}`;

      const { data } = await customAxios(
        `${Endpoints.CoinHistory}/${coinId}/history${currency}${time}`
      );

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("There was an error!");
    }
  }
);

export const fetchCoinPrice = createAsyncThunk(
  Thunks.FetchCoinPrice,
  async (params: TFetchCoinPriceParams, thunkAPI) => {
    try {
      const { referenceCurrencyUuid, coinId } = params;
      const currency = `?referenceCurrencyUuid=${
        referenceCurrencyUuid ? referenceCurrencyUuid : "yhjMzLPhuIDl"
      }`;

      const { data } = await customAxios(
        `${Endpoints.CoinPrice}/${coinId}/price${currency}`
      );

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("There was an error!");
    }
  }
);

const initialState: ICurrencySliceState = {
  isLoading: false,
  currentCurrency: getCurrentCurrencyFromLC(),
  currentTimePeriod: getCurrentTimePeriodFromLC(),
  coins: [],
  currenciesRefs: [],
  totalPages: 0,
  initialPage: getInitialPageFromLC(),
  search: "",
  coin: null,
  currentSortOption: getCurrentSortOptionFromLC(),
  currentTag: getCurrentTagFromLC(),
  coinHistory: [],
  exchangeRate: 20130.40148256488,
  currencyFrom: "Qwsogvtv82FCd", // BTC
  currencyTo: "yhjMzLPhuIDl", // USD
  favorites: getFavoritesFromLC(),
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    // Currency
    changeCurrentCurrency: (state, { payload }: PayloadAction<Currency>) => {
      state.currentCurrency = payload;
      updateCurrentCurrencyToLC(payload);
    },
    // Time Period
    changeCurrentTimePeriod: (state, { payload }: PayloadAction<string>) => {
      state.currentTimePeriod = payload;
      updateCurrentTimePeriodToLC(payload);
    },
    // Initial Page
    changeInitialPage: (state, { payload }: PayloadAction<number>) => {
      state.initialPage = payload;
      updateInitialPageToLC(payload);
    },
    // Sort Option
    changeCurrentSortOption: (
      state,
      { payload }: PayloadAction<SortOption>
    ) => {
      state.currentSortOption = payload;
      updateCurrentSortOptionToLC(payload);
    },
    // Tag Option
    changeCurrentTagOption: (state, { payload }: PayloadAction<TagOption>) => {
      state.currentTag = payload;
      updateCurrentTagOptionToLC(payload);
    },
    // Search
    changeSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    // Search
    clearSearch: (state) => {
      state.search = "";
    },

    // Currency From
    changeCurrencyFrom: (state, { payload }: PayloadAction<string>) => {
      state.currencyFrom = payload;
    },

    // Currency To
    changeCurrencyTo: (state, { payload }: PayloadAction<string>) => {
      state.currencyTo = payload;
    },
    // Add To Favorites
    addToFavorites: (state, { payload }: PayloadAction<string>) => {
      state.favorites.push(payload);
      updateFavoritesListToLC(state.favorites);
    },
    // Add To Favorites

    deleteFromFavorites: (state, { payload }: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((item) => item !== payload);
      state.coins = state.coins.filter((item) => payload !== item.uuid);
      updateFavoritesListToLC(state.favorites);
    },
  },

  extraReducers: (builder) => {
    // Fetch Coins

    builder.addCase(fetchCoins.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoins.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.coins = payload.data.coins;
      state.totalPages = Math.ceil(payload.data.stats.total / 50);
    });
    builder.addCase(fetchCoins.rejected, (state) => {
      state.isLoading = false;
    });

    // Fetch Single Coin

    builder.addCase(fetchSingleCoin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleCoin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.coin = payload.data.coin;
      console.log(payload);
    });
    builder.addCase(fetchSingleCoin.rejected, (state) => {
      state.isLoading = false;
    });

    // Fetch Currencies Refs

    builder.addCase(fetchCurrenciesRefs.fulfilled, (state, { payload }) => {
      state.currenciesRefs = payload.data.currencies;
    });

    // Fetch Coin History

    builder.addCase(fetchCoinHistory.fulfilled, (state, { payload }) => {
      state.coinHistory = payload.data.history;
    });

    // Fetch Coin Price

    builder.addCase(fetchCoinPrice.fulfilled, (state, { payload }) => {
      state.exchangeRate = Number(payload.data.price);
      console.log("Exchange Rate is " + state.exchangeRate);
    });
  },
});
export const {
  changeCurrentCurrency,
  changeCurrentTimePeriod,
  changeInitialPage,
  changeSearch,
  clearSearch,
  changeCurrentSortOption,
  changeCurrentTagOption,
  changeCurrencyTo,
  changeCurrencyFrom,
  addToFavorites,
  deleteFromFavorites,
} = currencySlice.actions;

export default currencySlice.reducer;
