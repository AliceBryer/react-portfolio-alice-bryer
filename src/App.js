import * as React from "react";

import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import "../src/css/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  );
};
export default App;
