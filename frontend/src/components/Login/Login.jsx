import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../InputControl/InputControl";
import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Login({ handleAuthentication }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        alert("Login successfully");

        navigate("/Voting");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });

    handleAuthentication(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl
          label="Email"
          type="email"
          placeholder="Enter your Email"
          onChange={(event) => {
            setValues((prev) => ({ ...prev, email: event.target.value }));
          }}
        />
        <InputControl
          label="Password"
          type="password"
          placeholder="Enter your Password"
          onChange={(event) => {
            setValues((prev) => ({ ...prev, password: event.target.value }));
          }}
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission}>Login</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

LoginPage.js



