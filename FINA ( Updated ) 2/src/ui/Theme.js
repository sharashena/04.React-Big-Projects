import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    globalTitles: {
      textTransform: "capitalize",
      letterSpacing: "2px !important",
      fontFamily: "arial",
      fontWeight: "700 !important",
      fontSize: "1.5rem !important",
    },
    globalText: {
      fontSize: "1rem !imprtant",
      fontFamily: "arial",
      letterSpacing: "2px !important",
      textTransform: "capitalize",
    },
  },
});

export default theme;
