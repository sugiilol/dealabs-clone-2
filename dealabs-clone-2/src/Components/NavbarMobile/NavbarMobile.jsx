import "./NavbarMobile.scss"
import logo from "./img/logo.png"
import ModalCustom from "../ModalCustom/ModalCustom"
import ConnexionModalContent from "../ConnexionModalContent/ConnexionModalContent"
import DropDownMenuCustom from "../DropDownMenuCustom/DropDownMenuCustom"
import MenuPromoContent from "../MenuPromoContent/MenuPromoContent"


export default function NavbarMobile(){

    const iconBurger = <span className="material-symbols-outlined">menu</span>
    return(
        <>
            <div className="navbar-container-mobile">
                <div className="navbar-mobile-left-part">
                    <button className="burger-menu-button"><span className="material-symbols-outlined">menu</span></button>
                    <ModalCustom class="post-button" icon="add" content={<ConnexionModalContent />}/>
                </div>
                <div className="navbar-mobile-center-part">
                    <a href="#"><img src={logo} alt="Dealabs-logo" /></a>
                </div>
                <div className="navbar-mobile-right-part">
                    <button className="search-button"><span className="material-symbols-outlined navbar-search-icon">search</span></button>
                    <ModalCustom class="connexion-button" icon="person" content={<ConnexionModalContent />}/>
                </div>
            </div>           
        </>       
    )
}