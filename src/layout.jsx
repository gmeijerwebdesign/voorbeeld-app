import React from "react";
import Topper from "./components/topper";
import Header from "./components/header";

function Layout({ children }) {
  return (
    <div className="min-h-screen ">
      <Topper />
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
