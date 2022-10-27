import React from "react";
import { NoResultsProps } from "./types";
import styles from "./NoResults.module.scss";

const NoResults: React.FC<NoResultsProps> = ({
  buttonText,
  image,
  text,
  subtext,
  handleGoBack,
}) => {
  return (
    <div className={styles.noResults}>
      <img src={image} alt="no results" />
      <h2 className={styles.noResults__title}>{text}</h2>
      <p className={styles.noResults__subtitle}>{subtext}</p>
      <button onClick={handleGoBack} className={styles.noResults__button}>
        {buttonText}
      </button>
    </div>
  );
};

export default NoResults;
