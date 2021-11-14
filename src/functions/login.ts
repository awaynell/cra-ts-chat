import firebase from "firebase";

export const signIn = async (setIsAuth: any, isAuth: boolean, auth: any) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const { user } = await auth.signInWithPopup(provider);
  localStorage.setItem("user", JSON.stringify(user));
  console.log(isAuth);
  setIsAuth(true);
};

export const signOut = (setIsAuth: any) => {
  firebase.auth().signOut();
  setIsAuth(false);
  localStorage.removeItem("user");
};
