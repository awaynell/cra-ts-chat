import React, { useContext, useEffect, useState } from "react";
import { Context } from "./context/index";
import firebase from "firebase";
import "firebase/firestore";

const Login = () => {
  const { auth, isAuth, setIsAuth } = useContext(Context);

  const signIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    localStorage.setItem("user", JSON.stringify(user));
    console.log(isAuth);
    setIsAuth(true);
  };

  return (
    <div className='login'>
      <button className='login-btn' onClick={signIn}>
        Войти
      </button>
    </div>
  );
};

export default Login;
