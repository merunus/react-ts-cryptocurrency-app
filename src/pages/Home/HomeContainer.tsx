import React from "react";
import {
  ActionBar,
  CurrencyTable,
  Pagination,
  SortBar,
  Title,
} from "../../components";
import { THomeContProps } from "./types";

const HomeContainer: React.FC<THomeContProps> = ({
  coins,
  currentTag,
  isLoading,
}) => {
  return (
    <section>
      <ActionBar isSingleCoin={false} />
      <Title
        mainText="Cryptocurrency price list"
        subText="All cryptocurrencies ranked by market cap."
      />
      <SortBar />
      <CurrencyTable />
      {!isLoading && coins.length > 1 && currentTag.value !== "favorites" && (
        <Pagination />
      )}
    </section>
  );
};

export default HomeContainer;
