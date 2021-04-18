const { resolve } = require("path");
export default [
  {
    path: "/",
    name: "Home",
    component: resolve(__dirname, "../pages/Home"),
  },{
    path:"/product/:slug",
    name:"Teknoloji",
    component:resolve(__dirname,"../pages/Technology/index")
  },{
    path:"/productDetail/:slug",
    name:"Ürün Detay",
    component:resolve(__dirname,"../components/Cards/ProductDetail")
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
