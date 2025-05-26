import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import {
  RouteHome,
  RouteIndex,
  RouteLogin,
  RouteLoginVerify,
  RouteRegisterVerify,
  RouteSignup,
} from "./helper/RouteNames.js";
import Index from "./Pages/Index";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Page_404 from "./Pages/Page_404";
import AuthRouteProtection from "./Components/AuthRouteProtection";
import Layout from "./Layout";
import Landing from "./Pages/Landing";
import LoginVerify from "./Pages/LoginVerify";
import SignupVerify from "./Pages/SignupVerify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />}></Route>
          <Route path="*" element={<Page_404 />}></Route>

          <Route element={<AuthRouteProtection />}>
            <Route path={RouteHome} element={<HomePage />}></Route>
            <Route path="/react-lib" element={<Landing/>}></Route>
          </Route>
        </Route>
        <Route path={RouteSignup} element={<Signup />}></Route>
        <Route path={RouteLogin} element={<Login />}></Route>
        <Route path={RouteLoginVerify} element={<LoginVerify />}></Route>
        <Route path={RouteRegisterVerify} element={<SignupVerify />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
