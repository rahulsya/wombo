import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#3B82F6",
  dark: "#193766",
  muted: "#697B98",
  primaryLight: "#C6DBFF",
  mutedLight: "#FFFFFF",

  screen: {
    huge: "1440px",
    large: "1170px",
    medium: "768px",
    small: "450px",
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
