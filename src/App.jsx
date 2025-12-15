import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Banner from "./components/banner";
import CallToAction from "./components/calltoaction";
import Vacatures from "./posts";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <CallToAction />
              </>
            }
          />
          <Route path="/vacatures" element={<Vacatures />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
