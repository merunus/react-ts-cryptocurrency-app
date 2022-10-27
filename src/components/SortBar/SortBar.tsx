import React from "react";
import styles from "./SortBar.module.scss";

import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import { SortOption, sortOptions } from "../../utils/options/sortOptions";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectCurrencyData } from "../../redux/currency/selectors";
import { TagOption, tagsOptions } from "../../utils/options/tagsOptions";
import {
  changeCurrentSortOption,
  changeCurrentTagOption,
  clearSearch,
  fetchCoins,
} from "../../redux/currency/slice";
import { selectUserData } from "../../redux/user/selectors";
import { closeSearch, openSearch } from "../../redux/user/slice";
import SortBarContainer from "./SortBarContainer";

const SortBar: React.FC = () => {
  const { isSearchActive } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const { currentSortOption, currentTag, search, favorites } =
    useAppSelector(selectCurrencyData);

  const handleOpenSearch = () => dispatch(openSearch());

  const handleCloseSearch = () => {
    dispatch(closeSearch());
    if (search) {
      dispatch(clearSearch());
      dispatch(
        fetchCoins({
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          tags: currentTag.value,
          uuids: favorites,
        })
      );
      dispatch(
        changeCurrentSortOption({
          label: "Market cap",
          value: "marketCap",
          orderDirection: "desc",
        })
      );
    }
  };

  const handleChangeTag = (option: TagOption) => {
    console.log(option);
    dispatch(changeCurrentTagOption(option));
  };

  const handleChangeSort = (option: SortOption) => {
    console.log(option);
    dispatch(changeCurrentSortOption(option));
  };

  const menu = (
    <Menu activeKey={"1"} className={styles.menu}>
      {sortOptions.map((option, index) => (
        <MenuItem
          onClick={() => handleChangeSort(option)}
          className={`${styles.menuItem} ${
            currentSortOption.label === option.label && styles.activeMenuItem
          }`}
          key={index + 1}
        >
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <SortBarContainer
      currentTag={currentTag}
      menu={menu}
      handleChangeTag={handleChangeTag}
      handleCloseSearch={handleCloseSearch}
      handleOpenSearch={handleOpenSearch}
      isSearchActive={isSearchActive}
      tagsOptions={tagsOptions}
    />
  );
};

export default SortBar;
