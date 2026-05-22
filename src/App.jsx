
import './App.css'
import Banner from './Banner'
import Footer from './Footer'
import Navbar from './Navbar'
import Service from './Service'
import Servicee from './Servicee'

function App() {

  return (
    <div className='text-left'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Servicee></Servicee>
      <Service></Service>
      <Footer></Footer>
    </div>
  )
}

export default App
