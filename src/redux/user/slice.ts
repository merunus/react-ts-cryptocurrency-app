import { createSlice } from "@reduxjs/toolkit";
import { IUserSliceState } from "./types";

const initialState: IUserSliceState = {
  isSidebarActive: false,
  isSearchActive: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    closeSearch: (state) => {
      state.isSearchActive = false;
    },
    openSearch: (state) => {
      state.isSearchActive = true;
    },
    toggleSidebar: (state) => {
      state.isSidebarActive = !state.isSidebarActive;
      !state.isSidebarActive
        ? (document.body.style.overflow = "auto")
        : (document.body.style.overflow = "hidden");
    },
  },
});
export const { toggleSidebar, closeSearch, openSearch } = userSlice.actions;

export default userSlice.reducer;
