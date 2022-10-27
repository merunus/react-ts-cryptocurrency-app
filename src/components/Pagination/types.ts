export type TPaginationContProps = {
  initialPage: number;
  totalPages: number;
  handleChangePage: (e: { selected: number }) => void;
  isBigScreen: boolean;
};
