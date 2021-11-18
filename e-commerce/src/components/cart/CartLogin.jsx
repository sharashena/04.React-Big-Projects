import React from "react";
// import router link
import { Link } from "react-router-dom";
// import user context;
import { useGlobalUserContext } from "../../context/user";
const CartLogin = () => {
  const { user } = useGlobalUserContext();

  return (
    <div className="toggle-btn">
      {user.token ? (
        <Link to="/checkout" className="btn btn-primary btn-block">
          checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary btn-block">
          login
        </Link>
      )}
    </div>
  );
};

export default CartLogin;
