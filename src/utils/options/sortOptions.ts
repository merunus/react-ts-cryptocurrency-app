export type SortOption = {
  label: string;
  value: string;
  orderDirection: string;
};

export const sortOptions: SortOption[] = [
  { label: "Market cap", value: "marketCap", orderDirection: "desc" },
  { label: "Trading volume", value: "24hVolume", orderDirection: "desc" },
  { label: "Highest price", value: "price", orderDirection: "desc" },
  { label: "Lowest price", value: "price", orderDirection: "asc" },
  { label: "Best performing", value: "change", orderDirection: "desc" },
  { label: "Worst performing", value: "change", orderDirection: "asc" },
];
