import React from "react";
import Topper from "./components/topper";
import Header from "./components/header";

function Layout({ children }) {
  return (
    <div className="min-h-screen ">
      <Topper />
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-6">{children}</main>
    </div>
  );
}

export default Layout;
