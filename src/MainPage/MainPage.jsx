import "../App.css";
import Skills from "../components/Skills/Skills";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

import Home from "../components/home/Home";
// import Portfolio from "../components/projects/Portfolio";

import ScrollUp from "../components/scrollup/ScrollUp";

import Header from "../components/header/Header";

const MainPage = () => {
  return (
    <>
      <main className="main">
        <Header />
        <Home></Home>
        <About></About>
        <Skills></Skills>
        {/* 
        <Portfolio></Portfolio> */}

        <Contact></Contact>
      </main>

      <ScrollUp></ScrollUp>
    </>
  );
};

export default MainPage;
