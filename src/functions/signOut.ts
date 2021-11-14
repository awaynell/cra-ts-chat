import firebase from "firebase";
import { useContext } from "react";
import { Context } from "../components/context";

export const signOut = (setIsAuth: any) => {
  firebase.auth().signOut();
  setIsAuth(false);
  localStorage.removeItem("user");
};
