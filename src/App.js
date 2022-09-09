import React {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route} from"react-router-dom";
import Wrapper from "./components/Wrapper";
import "./App.css";

import Header from "";
import AboutMe from "";
import Portfolio from "";
import ContactMe from "";
import Resume from "";
import Footer from "";

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
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/ContactMe" element={<ContactMe /> }/>       
        <Route path="/Resume" element={<Resume />} />
        </Routes>
    </Wrapper>
    <Footer />
  </Router>
    
  );
}

export default App;
