import { useRef, useState, useEffect } from "react";
import "./LoginSignup.css";

import logo from "./logo.png";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Home from "../home";
import Icon from "@mui/material";

export const LoginSignup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, SetPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setSuccess(true);
  };
  const [action, setAction] = useState("Login");

  const account = { name: user, password: pwd };
  const result = localStorage.getItem("newac");

  useEffect(() => {
    localStorage.setItem("newac", JSON.stringify(account));
  }, [result]);
  function login() {
    for (let i = 0; i < account.length; i++) {
      if (user === account.name && pwd === account.pwd) {
        console.log(user, pwd);
        setSuccess(true);
        return;
      }
    }
  }

  useEffect(() => {});

  return (
    <>
      {success ? (
        <Home />
      ) : (
        <div>
          <div className="logo-bar">
            <img className="logo" src={logo} alt="" />
          </div>

          <div className="container">
            <div className="header">
              <div className="text">Login</div>
              <div className="underline"></div>
            </div>
            <form>
              <div className="inputs">
                <div className="input">
                  <img src={PersonIcon} alt="" />
                  <input
                    type="text"
                    placeholder="Name"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                </div>
                <div className="input">
                  <img src={LockOpenIcon} alt="" />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => SetPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                </div>
              </div>
              <div className="forgot-password">
                Lost Password?<span>Click Here!</span>
              </div>
              <div className="submit-container">
                <button
                  className={action === "Login" ? "submit gray" : "submit"}
                >
                  Sign Up
                </button>

                <button
                  className={action === "Sign Up" ? "submit gray" : "submit"}
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignup;
