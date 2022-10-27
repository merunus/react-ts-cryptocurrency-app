export const getCurrentCurrencyFromLC = () => {
  const data = localStorage.getItem("currentCurrency");
  const result = data
    ? JSON.parse(data)
    : {
        uuid: "yhjMzLPhuIDl",
        type: "fiat",
        symbol: "USD",
        name: "US Dollar",
        iconUrl: "https://cdn.coinranking.com/kz6a7w6vF/usd.svg",
        sign: "$",
      };
  return result;
};
export const getCurrentTimePeriodFromLC = () => {
  const data = localStorage.getItem("currentTimePeriod");
  const result = data ? JSON.parse(data) : "24h";
  return result;
};
export const getInitialPageFromLC = () => {
  const data = localStorage.getItem("initialPage");
  const result = data ? JSON.parse(data) : 1;
  return result;
};
export const getCurrentSortOptionFromLC = () => {
  const data = localStorage.getItem("currentSortOption");
  const result = data
    ? JSON.parse(data)
    : { label: "Market cap", value: "marketCap", orderDirection: "desc" };
  return result;
};
export const getCurrentTagFromLC = () => {
  const data = localStorage.getItem("currentTagOption");
  const result = data ? JSON.parse(data) : { label: "All", value: "all" };
  return result;
};

export const getFavoritesFromLC = () => {
  const data = localStorage.getItem("favorites");
  const result = data ? JSON.parse(data) : [];
  return result;
};
