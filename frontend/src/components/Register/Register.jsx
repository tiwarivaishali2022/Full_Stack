// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import InputControl from "../InputControl/InputControl";
// import styles from "./Register.module.css";
// import { auth } from "../../firebase";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// export default function Register() {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const navigate = useNavigate();
//   const handleSubmission = () => {
//     if (!values.name || !values.email || !values.password) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");
//     createUserWithEmailAndPassword(auth, values.email, values.password)
//       .then((res) => {
//         const user = res.user;
//         console.log(user);
//         updateProfile(user, {
//           displayName: values.name,
//         });
//         alert("Register successfully")
//         navigate("/");
//       })
//       .catch((err) => {
//         setErrorMsg(err.message);
//       });
//   };
//   return (
//     <div className={styles.container}>
//       <div className={styles.innerBox}>
//         <h1 className={styles.heading}> Register</h1>
//         <InputControl
//           label="Name"
//           type="text"
//           placeholder="Enter your Name"
//           onChange={(event) => {
//             setValues((prev) => ({ ...prev, name: event.target.value }));
//           }}
//         />
//         <InputControl
//           label="Email"
//           type="email"
//           placeholder="Enter your Email"
//           onChange={(event) => {
//             setValues((prev) => ({ ...prev, email: event.target.value }));
//           }}
//         />
//         <InputControl
//           label="Password"
//           type="password"
//           placeholder="Enter your Password"
//           onChange={(event) => {
//             setValues((prev) => ({ ...prev, password: event.target.value }));
//           }}
//         />
//         <div className={styles.footer}>
//           <b className={styles.error}>{errorMsg}</b>
//           <button onClick={handleSubmission}>Register</button>
           
//           <p>
//             Already have an account?{" "}
//             <span>
//               <Link to="/login">Login</Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../InputControl/InputControl";
import styles from "./Register.module.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";



export default function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmission = async () => {
    try {
      if (!values.name || !values.email || !values.password) {
        setErrorMsg("Fill all fields");
        return;
      }

      setErrorMsg("");

      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = res.user;
      console.log(user);

      // Update user profile with name
      await updateProfile(user, {
        displayName: values.name,
      });

      alert("Register successfully");
      navigate("/");
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}> Register</h1>
        <InputControl
          label="Name"
          type="text"
          placeholder="Enter your Name"
          onChange={(event) => {
            setValues((prev) => ({ ...prev, name: event.target.value }));
          }}
        />
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
          <button onClick={handleSubmission}>Register</button>

          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

