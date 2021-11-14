import Chat from "../components/Chat";
import Login from "../components/Login";

export const privateRoutes = [
  {
    path: "/chat",
    component: Chat,
    exact: true,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];
