import React from "react";
import { Header, Footer, Login } from "./Components";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* <Login /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
