"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import Head from "next/head";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = () => {
    if (validation()) {
      window.localStorage.setItem("user", "true");
      router.push("/");
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("user") === "true") {
      router.push("/");
    }
  }, []);

  const validation = () => {
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(.{8,})$/;
    if (!pattern.test(password)) {
      setErrorMessage("Please enter a valid password");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>Login</div>
        <input
          className={styles.userName}
          placeholder="User Name"
          type="email"
          value={email}
          onChange={emailHandler}
        />
        <input
          className={styles.password}
          placeholder="Password"
          type="password"
          value={password}
          onChange={passwordHandler}
        />
        <button className={styles.submitButton} onClick={submitHandler}>
          Submit
        </button>
        <div className={styles.errorMessage}>{errorMessage}</div>
      </div>
    </div>
  );
};

export default Login;
