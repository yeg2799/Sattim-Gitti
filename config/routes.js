const { resolve } = require("path");
export default [
  {
    path: "/",
    name: "Home",
    component: resolve(__dirname, "../pages/Home"),
  },{
    path:"/product/:slug",
    name:"Product",
    component:resolve(__dirname,"../pages/Product/Product")
  },{
    path:"/productDetail/:slug",
    name:"ProductDetail",
    component:resolve(__dirname,"../pages/Product/ProductDetail")
  },
  {
    path:"/productPayment",
    name:"ProductPayment",
    component:resolve(__dirname,"../pages/Product/ProductPayment")
  },
  {
    path:"/paymentResult",
    name:"PaymentResult",
    component:resolve(__dirname,"../pages/PaymentResult")
  },
  {
    path: "/cart",
    name: "Cart",
    component: resolve(__dirname, "../pages/Cart")
  },
  {
    path: "/login",
    name: "Login",
    component: resolve(__dirname, "../pages/User/Login"),
  },
  {
    path: "/register",
    name: "Register",
    component: resolve(__dirname, "../pages/User/Register"),
  },
  {
    path: "/forgetPassword",
    alias: "/forgetPassword",
    name: "forgetPassword",
    component: resolve(__dirname, "../pages/User/ForgetPassword"),
  }
];
