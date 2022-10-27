import React from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../models/paths";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectUserData } from "../../redux/user/selectors";
import { closeSearch, toggleSidebar } from "../../redux/user/slice";
import {
  changeCurrentSortOption,
  changeCurrentTagOption,
  clearSearch,
  fetchCoins,
} from "../../redux/currency/slice";
import { selectCurrencyData } from "../../redux/currency/selectors";
import NavbarContainer from "./NavbarContainer";

const Navbar: React.FC = () => {
  const { isSidebarActive } = useAppSelector(selectUserData);
  const { currentCurrency, currentTimePeriod, search } =
    useAppSelector(selectCurrencyData);
  const dispatch = useAppDispatch();
  const handleToggleHamburger = () => dispatch(toggleSidebar());
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(Paths.Home);
    dispatch(
      fetchCoins({
        referenceCurrencyUuid: currentCurrency.uuid,
        timePeriod: currentTimePeriod,
      })
    );
    dispatch(changeCurrentTagOption({ label: "All", value: "all" }));
    dispatch(
      changeCurrentSortOption({
        label: "Market cap",
        value: "marketCap",
        orderDirection: "desc",
      })
    );
    if (search) dispatch(clearSearch());
    dispatch(closeSearch());
  };

  return (
    <NavbarContainer
      handleLogoClick={handleLogoClick}
      handleToggleHamburger={handleToggleHamburger}
      isSidebarActive={isSidebarActive}
    />
  );
};

export default Navbar;
