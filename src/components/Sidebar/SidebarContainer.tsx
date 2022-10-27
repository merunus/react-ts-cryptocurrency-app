import React from "react";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/sidebarLinks";
import { TSideBarContProps } from "./type";

const SidebarContainer: React.FC<TSideBarContProps> = ({
  handleToggleSidebar,
  isSidebarActive,
}) => {
  return (
    <>
      <div
        className={`${isSidebarActive && styles.overlay}`}
        onClick={handleToggleSidebar}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`${styles.mobileNav} ${
            isSidebarActive && styles.isActive
          }`}
        >
          {links.map((link) => {
            return (
              <NavLink
                key={link.id}
                onClick={handleToggleSidebar}
                to={link.path}
                end
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
              >
                {link.title}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default SidebarContainer;
