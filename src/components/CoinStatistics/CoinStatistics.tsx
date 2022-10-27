import React from "react";
import priceIcon from "../../assets/images/price.svg";
import rankIcon from "../../assets/images/rank-statistic.svg";
import volumeIcon from "../../assets/images/24volume.svg";
import marketCapIcon from "../../assets/images/market-cap.svg";
import btcPriceIcon from "../../assets/images/btc-price.svg";
import { useAppSelector } from "../../redux/store";
import { selectCurrencyData } from "../../redux/currency/selectors";
import { NumericFormat } from "react-number-format";
import CoinStatisticsContainer from "./CoinStatisticsContainer";
import { TStatisticOption } from "./types";

const CoinStatistics: React.FC = () => {
  const { currentCurrency, coin } = useAppSelector(selectCurrencyData);

  const options: TStatisticOption[] = [
    {
      icon: priceIcon,
      label: `Price to ${currentCurrency.symbol}`,
      value: (
        <NumericFormat
          value={Number(coin?.price)}
          thousandSeparator=","
          displayType="text"
          decimalScale={2}
          prefix={currentCurrency.sign ? currentCurrency.sign : ""}
        />
      ),
    },
    {
      icon: btcPriceIcon,
      label: `Price to BTC`,
      value: ` ${Number(coin?.btcPrice).toFixed(5)} BTC`,
    },
    {
      icon: rankIcon,
      label: `Rank`,
      value: coin?.rank,
    },
    {
      icon: volumeIcon,
      label: `24h Volume`,
      value: `${currentCurrency.sign}${new Intl.NumberFormat("en-US", {
        notation: "standard",
      }).format(Number(coin?.["24hVolume"]))}`,
    },
    {
      icon: marketCapIcon,
      label: `Market Cap`,
      value: `${currentCurrency.sign}${new Intl.NumberFormat("en-US", {
        notation: "standard",
      }).format(Number(coin?.marketCap))}`,
    },
  ];

  return <CoinStatisticsContainer options={options} coin={coin} />;
};

export default CoinStatistics;
