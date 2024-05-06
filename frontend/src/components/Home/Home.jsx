import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";



function Home(props) {

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1 className={styles.heading}>
          <Link to="/register">Register</Link>
        </h1>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
