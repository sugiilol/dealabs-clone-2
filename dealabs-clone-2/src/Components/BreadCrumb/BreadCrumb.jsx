import "./BreadCrumb.scss"

export default function BreadCrumb(){
    return(
        <div className="breadCrumb-container">
            <ul>
                <li><a href="#">Accueil</a><span class="material-symbols-outlined">chevron_right</span></li>
                <li><a href="#">High-Tech</a><span class="material-symbols-outlined">chevron_right</span></li>
                <li><a href="#">Informatique</a><span class="material-symbols-outlined">chevron_right</span></li>
                <li><a href="#">Montage PC</a><span class="material-symbols-outlined">chevron_right</span></li>
                <li><a href="#">Cartes graphiques</a></li>
            </ul>
            
        </div>
    )
}