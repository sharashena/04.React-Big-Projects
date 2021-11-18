import { createGlobalStyle } from "styled-components";

export const GlobalVariables = {
  primaryColor: "#102A42",
  primaryColor2: "#617D98",
  bcgPrimary: "#FFFFFF",
  bcgPrimary2: "#F1F5F8",
  bcgPrimary3: "#EADED7",
  bcgPrimary4: "#222222",
  bcgPrimary5: "#AB7A5F",
  mainSpacing: "2px",
  mainTransition: "all .3s linear",
  mainRadius: ".25rem",
  maxWidth: "1124px",
  lightShadow: "0px 5px 15px rgba(0,0,0,0.1)",
  mainTransform: "capitalize",
};

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
