
import './App.css'
import { Feature } from './components/Feature'
import { Header } from './components/Header'
import { Service } from './components/Service'
import { Galeria } from './components/Galeria'
import { Reserva } from './components/Reserva'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import Chatbot from './components/chatbot'
import { useNavigate } from 'react-router-dom'

  



function App() {

  const navigate = useNavigate()

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
              <Chatbot/>
              
              <button className='btn__admin' onClick={() => navigate('admin')}>Admin</button>
        </div>
    </>
  )
}

export default App
