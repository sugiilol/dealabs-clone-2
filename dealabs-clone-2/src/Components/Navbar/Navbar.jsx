import "./Navbar.scss"
import logo from "./img/logo.png"

export default function Navbar(){


    return(
        <>
            <div className="navbar-container"> 
                <div className="navbar-left-part">
                    <a href="#"><img src={logo} alt="Dealabs-logo" /></a>
                    <ul className="vanish-appear-menu">
                        <li><a href="#">Menu <span class="material-symbols-outlined">expand_more</span></a></li>
                    </ul>
                    <ul className="vanish-appear-list">
                        <li><a href="#">Bons plans</a></li>
                        <button>Codes promo<span class="material-symbols-outlined">expand_more</span></button>
                        <li><a href="#">Gratuit</a></li>
                        <li><a href="#">Discussions</a></li>                   
                        <button>Plus<span class="material-symbols-outlined">expand_more</span></button>                 
                    </ul>
                </div>
                <div className="navbar-right-part">
                    <div className="navbar-search">
                        <span class="material-symbols-outlined">search</span>
                        <input type="text" placeholder="Recherche..." />
                    </div>
                    <button className="connexion-button"><span class="material-symbols-outlined">person</span>Connexion</button>
                    <button className="post-button"><span class="material-symbols-outlined">add</span>Poster...</button>
                </div>                                           
            </div>               
        </>
    )
}