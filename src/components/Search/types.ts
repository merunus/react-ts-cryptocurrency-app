export type TSearchProps = {
  isSearchActive: boolean;
  handleOpenSearch: () => void;
  handleCloseSearch: () => void;
};

export type TSearchContProps = {
  handleOpenSearch: () => void;
  handleCloseSearch: () => void;
  handleChange: (value: string) => void;
  isSearchActive: boolean;
  search: string;
};
