import './App.scss'
import Navbar from "./Components/Navbar/Navbar"
import NavbarMobile from './Components/NavbarMobile/NavbarMobile'
import BreadCrumb from './Components/BreadCrumb/BreadCrumb'
import DealProduct from './Components/DealProduct/DealProduct'

function App() {

  return (
    <>
      <header className='navbar-desktop-tablet'>
        <Navbar />
      </header>
      <header className='navbar-mobile'>
        <NavbarMobile />
      </header>
      <BreadCrumb />
      <main>
        <DealProduct />
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default App
