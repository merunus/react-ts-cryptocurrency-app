import React from "react";
import { TSearchContProps } from "./types";
import styles from "./Search.module.scss";
import searchIcon from "../../assets/images/search.svg";
import clearIcon from "../../assets/images/close.svg";

const SearchContainer: React.FC<TSearchContProps> = ({
  handleChange,
  handleCloseSearch,
  handleOpenSearch,
  isSearchActive,
  search,
}) => {
  return (
    <div className={styles.search}>
      <button className={styles.search__btn} onClick={handleOpenSearch}>
        <img src={searchIcon} alt="searchIcon" />
      </button>
      {isSearchActive && (
        <div className={styles.searchPopup}>
          <div className={styles.searchPopup__wrapper}>
            <form className={styles.searchPopup__form}>
              <input
                onChange={(e) => handleChange(e.target.value)}
                className={styles.searchPopup__input}
                type="text"
                value={search}
                placeholder="Search a coin"
                autoComplete="off"
              />
            </form>
            <button
              className={styles.searchPopup__clearBtn}
              onClick={handleCloseSearch}
            >
              <img src={clearIcon} alt="close" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
