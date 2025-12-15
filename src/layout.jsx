import React from "react";
import Topper from "./components/topper";

function Layout({ children }) {
  return (
    <div className="min-h-screen ">
      <Topper />
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}

export default Layout;
