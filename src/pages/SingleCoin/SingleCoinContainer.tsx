import React from "react";
import { TSingleCoinContProps } from "./types";
import styles from "./SingleCoin.module.scss";
import HeroCoin from "../../components/HeroCoin/HeroCoin";
import Calculator from "../Calculator/Calculator";
import CoinStatistics from "../../components/CoinStatistics/CoinStatistics";
import { ActionBar, LineChart } from "../../components";

const SingleCoinContainer: React.FC<TSingleCoinContProps> = ({
  coinId,
  coinName,
}) => {
  return (
    <section className={styles.container}>
      <ActionBar isSingleCoin={true} coinName={coinName} />
      <HeroCoin />
      <LineChart />
      <div className={styles.double}>
        <Calculator isSingleCoin={true} singleCoinId={coinId} />
        <CoinStatistics />
      </div>
    </section>
  );
};

export default SingleCoinContainer;
