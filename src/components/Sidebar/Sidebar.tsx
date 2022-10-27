import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectUserData } from "../../redux/user/selectors";
import { toggleSidebar } from "../../redux/user/slice";
import SidebarContainer from "./SidebarContainer";

const Sidebar: React.FC = () => {
  const { isSidebarActive } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    if (isSidebarActive) {
      dispatch(toggleSidebar());
    }
  };

  return (
    <SidebarContainer
      handleToggleSidebar={handleToggleSidebar}
      isSidebarActive={isSidebarActive}
    />
  );
};

export default Sidebar;
