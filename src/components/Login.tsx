import React, { useContext } from "react";
import { Context } from "..";
import firebase from "firebase";
const { GoogleAuthProvider, getAuth, signInWithPopup } = require("firebase/firestore");

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log({ user });
  };

  return (
    <div className='login'>
      <button className='login-btn' onClick={login}>
        Войти
      </button>
    </div>
  );
};

export default Login;
