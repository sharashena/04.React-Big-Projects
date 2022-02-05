import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
  // header

  header: {
    maxWidth: "1024px",
    margin: "2rem auto",
    padding: "0 1rem",
  },
  nextPage: {
    maxWidth: "1124px !important",
    margin: "0 auto !important",
    textDecoration: "none !important",
    ...theme.typography.globalText,
    "&:hover": {
      background: "transparent",
    },
  },
  navLinks: {
    color: "white !important",
    ...theme.typography.globalText,
  },
}));
