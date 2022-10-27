import { TagOption } from "../../utils/options/tagsOptions";

export type TSortBarContProps = {
  isSearchActive: boolean;
  handleOpenSearch: () => void;
  handleCloseSearch: () => void;
  menu: JSX.Element;
  tagsOptions: TagOption[];
  handleChangeTag: (option: TagOption) => void;
  currentTag: TagOption;
};
