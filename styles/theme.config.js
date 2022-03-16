import { createGlobalStyle } from "styled-components";

export const theme = {
  // color
  primary: "#3B82F6",
  dark: "#193766",
  muted: "#697B98",
  primaryLight: "#C6DBFF",
  mutedLight: "#FFFFFF",

  // screen size
  screen: {
    huge: "1440px",
    large: "1170px",
    medium: "768px",
    small: "450px",
  },

  // font size
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },

  // font weight
  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
    }
    body{
        background:#E4EFFF;
        padding:0;
        margin:0;
        font-family: 'DM Sans', sans-serif;
    }
`;
