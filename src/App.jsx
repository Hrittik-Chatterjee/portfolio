

import './App.css'
import Skills from './components/Skills/Skills'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Portfolio from './components/projects/Portfolio'


import ScrollUp from './components/scrollup/ScrollUp'



function App() {
 

  return (
    <>
      
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
     
        <Portfolio></Portfolio>
        
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  )
}

export default App
