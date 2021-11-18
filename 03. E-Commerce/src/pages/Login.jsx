import React from "react";
// import router link
import { Link, useNavigate } from "react-router-dom";
// import user context
import { useGlobalUserContext } from "../context/user";
// import styled
import { LoginStyled } from "../styles/LoginStyled";
// import strapi
import { loginUser } from "../strapi/loginUser";
import { registerUser } from "../strapi/registerUser";

const Login = () => {
  const {
    isMember,
    toggleMember,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    userLogin,
    showAlert,
    setAlert,
    alert,
  } = useGlobalUserContext();
  let isEmpty = !email || !password || !username || alert.show;
  // navigate
  let navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    let response;
    if (isMember) {
      setAlert({ show: true, msg: "loading...", type: "success" });
      response = await loginUser({ email, password });
      showAlert();
      setEmail("");
      setUsername("");
      setPassword("");
    } else {
      response = await registerUser({ email, username, password });
    }

    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      navigate("/products");
    } else {
      // alert
      setAlert({
        show: true,
        msg: "oops, email or password incorrect",
        type: "danger",
      });
    }
  };
  return (
    <React.Fragment>
      <section className="header-section">
        <article className="section-center">
          <aside className="navigates">
            <Link to="/">home</Link>
            <Link to="/login">
              <span> / </span>
              login
            </Link>
          </aside>
        </article>
      </section>

      <section className="section">
        <div className="section-center login-center">
          <LoginStyled>
            {isMember ? (
              <>
                <article className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email"
                  />
                </article>
                <article className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password"
                  />
                </article>
              </>
            ) : (
              <>
                <article className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email"
                  />
                </article>
                <article className="form-group">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="username"
                  />
                </article>
                <article className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password"
                  />
                </article>
              </>
            )}
            {isEmpty && <p className="empty">please fill out all form field</p>}

            <button
              type="submit"
              className="btn btn-primary login-btn"
              onClick={handleSubmit}
            >
              submit
            </button>

            <article className="form-footer">
              <p>{!isMember ? "already a member?" : "need to register?"}</p>
              <button
                type="button"
                className="member-btn"
                onClick={toggleMember}
              >
                click here
              </button>
            </article>
          </LoginStyled>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
