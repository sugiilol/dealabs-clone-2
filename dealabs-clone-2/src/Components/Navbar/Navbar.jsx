import "./Navbar.scss"
import logo from "./img/logo.png"
import DropDownMenuCustom from "../DropDownMenuCustom/DropDownMenuCustom"
import MenuPromoContent from "../MenuPromoContent/MenuPromoContent"
import MenuPlusContent from "../MenuPlusContent/MenuPlusContent"
import ModalCustom from "../ModalCustom/ModalCustom"
import ConnexionModalContent from "../ConnexionModalContent/ConnexionModalContent"

export default function Navbar() {

    return (
        <>
            <div className="navbar-container">
                <div className="navbar-left-part">
                    <a href="#"><img src={logo} alt="Dealabs-logo" /></a>
                    <ul className="vanish-appear-menu">
                        <button>Menu<span className="material-symbols-outlined">expand_more</span></button>
                    </ul>
                    <ul className="vanish-appear-list">
                        <li><a href="#"><span className="navbar-first-item">Bons plans</span></a></li>
                        <DropDownMenuCustom name="Codes promo" content={<MenuPromoContent />} />
                        <li><a href="#">Gratuit</a></li>
                        <li><a href="#">Discussions</a></li>
                        {/* <li><button>Plus<span className="material-symbols-outlined">expand_more</span></button></li> */}
                        <DropDownMenuCustom name="Plus" content={<MenuPlusContent />} />
                    </ul>
                </div>
                <div className="navbar-right-part">
                    <div className="navbar-search">
                        <span className="material-symbols-outlined navbar-search-icon">search</span>
                        <input type="text" placeholder="Recherche..." />
                    </div>
                    <ModalCustom class="connexion-button" name="Connexion" icon="person" content={<ConnexionModalContent />}/>
                    <ModalCustom class="post-button" name="Poster..." icon="add" content={<ConnexionModalContent />}/>
                </div>
            </div>
        </>
    )
}