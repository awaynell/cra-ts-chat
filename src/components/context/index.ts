import { createContext } from "react";

export const Context = createContext({} as AppContextInterface);

interface AppContextInterface {
  firebase: any;
  auth: any;
  firestore: any;
  isAuth: boolean;
  setIsAuth: any;
  user?: any;
}
