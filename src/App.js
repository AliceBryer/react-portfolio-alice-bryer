import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import "./App.css";

import Header from "./components/header";
import AboutMe from "./components/AboutMe";
// import Portfolio from "./components/Portfolio";
// import ContactMe from "./components/contactMe";
// import Resume from "./components/Resume";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    document.title = "Alice Bryer - React Portfolio";
  }, []);

  return (
    <Router>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          {/* <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Resume" element={<Resume />} />  */}
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
