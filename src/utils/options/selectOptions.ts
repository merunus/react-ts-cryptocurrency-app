import { TOptions, TTimeOptions } from "../../components/ActionBar/types";
import { StylesConfig } from "react-select";

export const timeOptions: TTimeOptions[] = [
  { value: "3h", label: "3h" },
  { value: "24h", label: "24h" },
  { value: "7d", label: "7d" },
  { value: "30d", label: "30d" },
  { value: "3m", label: "3m" },
  { value: "1y", label: "1y" },
  { value: "3y", label: "3y" },
  { value: "5y", label: "5y" },
];

type isMulti = false;
export const customStyles: StylesConfig<TOptions, isMulti> = {
  option: (styles, state) => ({
    ...styles,
    color: "#002358",
    fontWeight: state.isSelected ? "800" : "500",
    fontSize: "12px ",
    backgroundColor: state.isFocused ? "#DEEBFF" : "#fff",
    cursor: "pointer",
  }),
  control: () => ({
    border: "1px solid #cee1ff",
    display: "flex",
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
  }),
  input: (styles) => ({
    ...styles,
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: "56px",
  }),
  menu: (styles) => ({
    ...styles,
    zIndex: "10",
    maxHeight: "250px",
  }),
  menuList: (styles) => ({
    ...styles,
    maxHeight: "250px",
    overflowY: "auto",
    scrollBehavior: "smooth",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "#fff",
  }),
  singleValue: (styles) => {
    return {
      ...styles,
      color: "#214a88",
      fontWeight: "600",
      fontSize: "13px ",
    };
  },
  dropdownIndicator: (styles) => {
    return {
      ...styles,
      color: "#002358",
      "&:hover": {
        color: "#002358",
      },
    };
  },
  placeholder: (styles) => {
    return {
      ...styles,
      color: "#214a88",
      fontSize: "13px",
      fontWeight: "600",
    };
  },
  container: (styles) => ({
    ...styles,

    ":focus": {
      ...styles[":focus"],
      outline: "none",
    },
    maxWidth: "115px",
    "@media only screen and (max-width: 1200px)": {
      width: "100%",
      maxWidth: "100%",
    },
    cursor: "pointer",
  }),
};

// Action Bar Select Time Styles

export const customStylesTime: StylesConfig<TTimeOptions, isMulti> = {
  option: (styles, state) => ({
    ...styles,
    color: "#002358",
    fontWeight: state.isSelected ? "800" : "500",
    fontSize: "12px ",
    backgroundColor: state.isFocused ? "#DEEBFF" : "#fff",
    cursor: "pointer",
  }),
  control: () => ({
    border: "1px solid #cee1ff",
    display: "flex",
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
  }),
  input: (styles) => ({
    ...styles,
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: "56px",
  }),
  menu: (styles) => ({
    ...styles,
    zIndex: "10",
    maxHeight: "250px",
  }),
  menuList: (styles) => ({
    ...styles,
    maxHeight: "250px",
    overflowY: "auto",
    scrollBehavior: "smooth",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "#fff",
  }),
  singleValue: (styles) => {
    return {
      ...styles,
      color: "#214a88",
      fontWeight: "600",
      fontSize: "13px ",
    };
  },
  dropdownIndicator: (styles) => {
    return {
      ...styles,
      color: "#002358",
      "&:hover": {
        color: "#002358",
      },
    };
  },
  placeholder: (styles) => {
    return {
      ...styles,
      color: "#214a88",
      fontSize: "13px",
      fontWeight: "600",
    };
  },
  container: (styles) => ({
    ...styles,
    ":focus": {
      ...styles[":focus"],
      outline: "none",
    },

    maxWidth: "115px",
    "@media only screen and (max-width: 1200px)": {
      width: "100%",
      maxWidth: "100%",
    },
    cursor: "pointer",
  }),
};

//?  Calculator Selects Styles

export const customStylesCalculator: StylesConfig<TOptions, isMulti> = {
  option: (styles, state) => ({
    ...styles,
    color: "#002358",
    fontWeight: state.isSelected ? "800" : "500",
    fontSize: "12px ",
    backgroundColor: state.isFocused ? "#DEEBFF" : "#fff",
    cursor: "pointer",
  }),
  control: () => ({
    border: "1px solid #cee1ff",
    display: "flex",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    height: "47px",
    background: "#126BFF",
  }),
  input: (styles) => ({
    ...styles,
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: "56px",

    color: "#fff",
  }),
  menu: (styles) => ({
    ...styles,
    zIndex: "10",
    maxHeight: "250px",
  }),
  menuList: (styles) => ({
    ...styles,
    maxHeight: "250px",
    overflowY: "auto",
    scrollBehavior: "smooth",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "#126BFF",
    width: "0px",
  }),
  singleValue: (styles) => {
    return {
      ...styles,
      color: "#fff",
      fontWeight: "600",
      fontSize: "15px",
    };
  },
  dropdownIndicator: (styles) => {
    return {
      ...styles,
      color: "#fff",
      "&:hover": {
        color: "#fff",
      },
    };
  },
  placeholder: (styles) => {
    return {
      ...styles,
      color: "#fff",
      fontSize: "15px",
      fontWeight: "600",
    };
  },
  container: (styles) => ({
    ...styles,
    ":focus": {
      ...styles[":focus"],
      outline: "none",
    },
    height: "47px",
    cursor: "pointer",
  }),
};
