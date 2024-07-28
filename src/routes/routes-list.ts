import Dashboard from "../pages/dashboard/dashnoard.page";
import Login from "../pages/login/login.page";
import Users from "../pages/users/users.page";

export const routes = [
  {
    title: "Login",
    url: "/login",
    component: Login,
    isProtected: false,
    permission: null,
  },
  {
    title: "Dashboard Home",
    url: "/",
    component: Dashboard,
    isProtected: true,
    permission: null,
  },
  {
    title: "User",
    url: "/users",
    component: Users,
    isProtected: true,
    permission: null,
  },
];
