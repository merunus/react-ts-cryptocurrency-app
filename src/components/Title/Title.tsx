import React from "react";

import styles from "./Title.module.scss";
import { TTitleProps } from "./types";

const Title: React.FC<TTitleProps> = ({ mainText, subText }) => {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.title__text}>
          <h1>{mainText}</h1>
          <p>{subText}</p>
        </div>
      </div>
    </>
  );
};

export default Title;
