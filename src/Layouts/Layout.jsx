import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className=" p-4 md:p-8 max-w-7xl mx-auto">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
