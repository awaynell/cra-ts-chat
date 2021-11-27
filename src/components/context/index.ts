import { createContext, SetStateAction } from "react";

export const Context = createContext({} as AppContextInterface);

interface AppContextInterface {
  firebase: any;
  auth: any;
  firestore: any;
  isAuth: boolean;
  setIsAuth: SetStateAction<unknown>;
  user: any;
  messages: Array<object>;
  theme: string;
  setTheme: SetStateAction<unknown>;
  load: boolean;
}
