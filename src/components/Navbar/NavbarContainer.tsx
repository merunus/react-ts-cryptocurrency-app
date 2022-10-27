import React from "react";
import { TNavbarContProps } from "./types";
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { Paths } from "../../models/paths";

const NavbarContainer: React.FC<TNavbarContProps> = ({
  handleLogoClick,
  handleToggleHamburger,
  isSidebarActive,
}) => {
  return (
    <nav className={styles.nav}>
      <div onClick={handleLogoClick} className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>Cryptonity</h1>
      </div>
      <ul className={styles.links}>
        <li className={styles.links__link}>
          <NavLink
            to={Paths.Home}
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            <h1>Cryptocurrencies</h1>
          </NavLink>
        </li>
        <li className={styles.links__link}>
          <NavLink
            to={Paths.Calculator}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            <h1>Calculator</h1>
          </NavLink>
        </li>
      </ul>
      <button
        onClick={handleToggleHamburger}
        className={`${styles.hamburger} ${isSidebarActive && styles.isActive}`}
      >
        <div className={styles.bar}></div>
      </button>
    </nav>
  );
};

export default NavbarContainer;
