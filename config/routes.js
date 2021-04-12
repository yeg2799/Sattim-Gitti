const { resolve } = require("path");
export default [
  {
    path: "/",
    name: "Home",
    component: resolve(__dirname, "../pages/Home"),
  },{
    path:"/teknoloji",
    name:"Teknoloji",
    component:resolve(__dirname,"../pages/Technology/index")
  },
  {
    path: "/login/",
    alias: "/login",
    name: "Login",
    component: resolve(__dirname, "../pages/login"),
  },
  {
    path: "/register/",
    alias: "/register",
    name: "Register",
    component: resolve(__dirname, "../pages/login"),
  }
];
