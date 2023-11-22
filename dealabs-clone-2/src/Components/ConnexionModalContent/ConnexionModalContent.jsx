import "./ConnexionModalContent.scss"
import logoDealabs from "./img/logo-vertical_a8d6c.svg"
import logoFacebook from "./img/facebook_6853e.svg"
import logoGoogle from "./img/google_e6956.svg"
import logoApple from "./img/apple_6ecdb.svg"


export default function ConnexionModalContent() {

    return (
        <div className="modal-connexion-content">
            <div className="modal-connexion-left-part">
                <div className="modal-connexion-left-part-top">
                    Bienvenue sur Dealabs !
                </div>
                <div className="modal-connexion-left-part-bottom">
                    <img className="modal-connexion-left-part-logo" src={logoDealabs} alt="logo-dealabs" />
                    <h1>Rejoignez la communauté !</h1>
                    <h2>Sur Dealabs, vous trouverez les meilleurs deals de vos marques et marchands préférés, partagés par notre communauté</h2>
                    <a href="#">En savoir plus</a>
                    <button>Créer un compte</button>
                </div>
            </div>
            <div className="modal-connexion-right-part">
                <div className="modal-connexion-right-part-top">
                    <button className="button-closed-modal"><span className="material-symbols-outlined">close</span></button>
                </div>
                <div className="modal-connexion-right-middle-part">
                    <ul>
                        <li><h2>Connectez-vous via un réseau social</h2></li>
                        <li><a href="#"><img src={logoFacebook} alt="logo Facebook" /><span>Connexion via Facebook</span></a></li>
                        <li><a href="#"><img src={logoGoogle} alt="logo Google" /><span>Connexion via Google</span></a></li>
                        <li><a href="#"><img src={logoApple} alt="logo Apple" /><span>Connexion via Apple</span></a></li>
                    </ul>
                </div>
                <div className="modal-connexion-right-part-bottom">
                    <ul>
                        <li><h2>Connexion</h2></li>
                        <li>
                            <label>Pseudo ou e-mail</label>
                            <input type="text" className="modal-input-email-pass" placeholder="gandalfleblanc@example.com"/>
                        </li>
                        <li>
                            <label>Mot de passe</label>
                            <input type="pass" className="modal-input-email-pass"/>
                        </li>
                        <li className="modal-connexion-checkbox">
                            <input type="checkbox" name="remember" id="login-remember" /><span>Rester connecté(e) sur cet appareil</span>
                        </li>
                        <li>
                            <button>Connexion</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}