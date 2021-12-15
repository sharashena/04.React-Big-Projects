import React from "react";
import { useGlobalContext } from "./context";
// material UI
import { Typography, Container } from "@material-ui/core";

const Alert = () => {
  const { alert, closeAlert } = useGlobalContext();

  React.useEffect(() => {
    const hideAlert = setTimeout(() => {
      closeAlert();
    }, 3000);
    return () => clearTimeout(hideAlert);
  });

  return (
    <Container className={`alert alert-${alert.type}`}>
      <Typography variant="subtitle1">{alert.msg}</Typography>
    </Container>
  );
};

export default Alert;
