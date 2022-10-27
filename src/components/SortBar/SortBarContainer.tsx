import React from "react";
import Search from "../Search/Search";
import rankListIcon from "../../assets/images/rank.svg";
import Dropdown from "rc-dropdown";
import styles from "./SortBar.module.scss";
import { TSortBarContProps } from "./types";

const SortBarContainer: React.FC<TSortBarContProps> = ({
  handleChangeTag,
  handleCloseSearch,
  handleOpenSearch,
  isSearchActive,
  menu,
  currentTag,
  tagsOptions,
}) => {
  return (
    <section className={styles.sortBartContainer}>
      <div className={styles.actions}>
        <Search
          isSearchActive={isSearchActive}
          handleOpenSearch={handleOpenSearch}
          handleCloseSearch={handleCloseSearch}
        />
        {!isSearchActive && (
          <>
            <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
              <button className={styles.rankList}>
                <img src={rankListIcon} alt="rank list" />
              </button>
            </Dropdown>
            <div className={styles.tagsContainer}>
              <nav className={styles.tags}>
                <ul className={styles.tags__list}>
                  {tagsOptions.map((option, index) => {
                    return (
                      <li
                        onClick={() => handleChangeTag(option)}
                        key={index}
                        className={`${styles.tags__item} ${
                          currentTag.value === option.value && styles.activeTag
                        }`}
                      >
                        {option.label}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SortBarContainer;
