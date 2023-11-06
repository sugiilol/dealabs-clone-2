import "./NavbarMobile.scss"
import logo from "./img/logo.png"


export default function NavbarMobile(){
    return(
        <>
            <div className="navbar-container-mobile">
                <div className="navbar-mobile-left-part">
                    <button className="burger-menu-button"><span className="material-symbols-outlined">menu</span></button>
                    <button className="post-button"><span className="material-symbols-outlined">add</span><span className="vanish-action"></span></button>
                </div>
                <div className="navbar-mobile-center-part">
                    <a href="#"><img src={logo} alt="Dealabs-logo" /></a>
                </div>
                <div className="navbar-mobile-right-part">
                    <button className="search-button"><span className="material-symbols-outlined navbar-search-icon">search</span></button>
                    <button className="connexion-button"><span className="material-symbols-outlined">person</span><span className="vanish-action"></span></button>
                </div>
            </div>           
        </>       
    )
}