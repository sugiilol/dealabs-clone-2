import "./MenuPlusContent.scss"

export default function MenuPlusContent() {

    const categoriesList = [
        ["High-Tech", "Epicerie & courses", "Santé & Cosmétiques", "Maison & Habitat", "Auto-Moto", "Sport & Plein air", "Finance & Assurances", "Voyages"],
        ["Consoles & Jeux vidéos", "Mode & Accesoires", "Famille & Enfants", "Jardin & Bricolage", "Culture & Divertissement", "Forfaits mobiles et internet", "Services"]
    ]

    return (
        <div className="menu-plus-container">
            <div className="menu-plus-top-part">
                <button><span className="material-symbols-outlined">newspaper</span>Magazine <span className="menu-plus-new">Nouveau</span></button>
            </div>
            <div className="menu-plus-middle1-part">
                <button><span className="material-symbols-outlined">snippet_folder</span>Toutes les catégories</button>
                <div className="middle1-categories-list">
                    {categoriesList.map((list, indexList) => {
                        return (
                            <ul key={indexList}>
                                {list.map((categorie, indexCategorie) => {
                                    return (
                                        <li key={indexCategorie}><a href="#">{categorie}</a></li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                </div>
            </div>
            <div className="menu-plus-middle2-part">
                <h2><span className="material-symbols-outlined">star</span>Événements</h2>
                <a href="#">Les dépenses du quotidien</a>
            </div>
            <div className="menu-plus-bottom-part">
                    <button><span className="material-symbols-outlined">collections_bookmark</span>Guides d'achat</button>
                    <button><span className="material-symbols-outlined">tv_options_edit_channels</span>Sondages</button>
            </div>
        </div>
    )
}