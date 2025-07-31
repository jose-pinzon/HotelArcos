
import './App.css'
import { Feature } from './components/Feature'
import { Header } from './components/Header'
import { Service } from './components/Service'
import { Galeria } from './components/Galeria'
import { Reserva } from './components/Reserva'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useEffect } from "react";
import WOW from "wowjs";

function App() {

  useEffect(() => {
    new WOW.WOW({ animateClass: 'animated', offset: 100 }).init();
  }, []);


  return (
    <>
      <div className="loader"></div>
        <div id="myDiv">
              <Header></Header>
              <Feature></Feature>
              <Service></Service>
              <Galeria></Galeria>
              <Reserva></Reserva>
              <Blog></Blog>
              <Contact></Contact>
              <Footer></Footer>
        </div>
    </>
  )
}

export default App
