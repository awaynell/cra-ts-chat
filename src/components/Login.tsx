import React, { useContext, useEffect, useState } from "react";
import { Context } from "./context/index";
import firebase from "firebase";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { signIn } from "../functions/login";

const Login = () => {
  const { auth, isAuth, setIsAuth } = useContext(Context);

  return (
    <div className='login'>
      <button className='login-btn' onClick={() => signIn(setIsAuth, isAuth, auth)}>
        Войти
      </button>
    </div>
  );
};

export default Login;
