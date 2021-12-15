import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  toggleMode: {
    textAlign: "right",
    maxWidth: "1124px",
    margin: "1rem auto",
  },
  todoContent: {
    overflowY: "scroll",
    height: "200px",
  },
  clearBtn: {
    display: "block",
    margin: "3rem auto",
    letterSpacing: "5px",
  },
  formControl: {
    width: "100%",
  },
}));

export default useStyles;
