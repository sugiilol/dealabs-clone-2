import './App.scss'
import Navbar from "./Components/Navbar/Navbar"
import NavbarMobile from './Components/NavbarMobile/NavbarMobile'

function App() {

  return (
    <>
      <header className='navbar-desktop-tablet'>
        <Navbar />
      </header>
      <header className='navbar-mobile'>
        <NavbarMobile />
      </header>
    </>
  )
}

export default App
