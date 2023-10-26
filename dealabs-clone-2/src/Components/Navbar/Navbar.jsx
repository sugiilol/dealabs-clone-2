import "./Navbar.scss"
import logo from "./img/logo.png"

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
                        <li><button>Codes promo<span className="material-symbols-outlined">expand_more</span></button></li>
                        <li><a href="#">Gratuit</a></li>
                        <li><a href="#">Discussions</a></li>
                        <li><button>Plus<span className="material-symbols-outlined">expand_more</span></button></li>
                    </ul>
                </div>
                <div className="navbar-right-part">
                    <div className="navbar-search">
                        <span className="material-symbols-outlined navbar-search-icon">search</span>
                        <input type="text" placeholder="Recherche..." />
                    </div>
                    <button className="connexion-button"><span className="material-symbols-outlined">person</span><span className="vanish-action">Connexion</span></button>
                    <button className="post-button"><span className="material-symbols-outlined">add</span><span className="vanish-action">Poster...</span></button>
                </div>
            </div>
        </>
    )
}