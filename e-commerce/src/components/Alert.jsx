import React from "react";
import { useGlobalUserContext } from "../context/user";

const Alert = () => {
  const { alert, user, hideAlert } = useGlobalUserContext();

  React.useEffect(() => {
    const hide = setTimeout(() => {
      hideAlert();
      return () => clearTimeout(hide);
    }, 2000);
  });
  return (
    <article className="alert">
      <div className={`alert-center alert-${alert.type}`}>
        <h4>{alert.msg}</h4>
        <p>{user.token && <em>{`good luck ${user.username}`}</em>}</p>
      </div>
    </article>
  );
};

export default Alert;
