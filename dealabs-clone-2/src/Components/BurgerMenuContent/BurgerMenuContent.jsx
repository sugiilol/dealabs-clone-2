import './BurgerMenuContent.scss'

export default function BurgerMenuContent() {

    const categoriesList = [
        ["High-Tech", "Epicerie & Courses", "Santé & Cosmétiques", "Maison & Habitat", "Auto-Moto", "Sport & Plein air", "Finances & Assurances", "Voyages"],
        ["Consoles & Jeux vidéo", "Mode & Accessoires", "Famille & Enfants", "Jardin & Bricolage", "Culture & Divertissement", "Forfait Mobiles et internet", "Services"]
    ]     
    
    const brandsList = [
        ["AliExpress", "Cdiscount", "Nike", "Intersport", "Samsung", "Conforama", "Norauto", "Booking.com"],
        ["Amazon", "Zalando", "Carrefour", "Blancheporte", "Fnac", "Decathlon", "Courir", "Lastminute"]
    ]
    

    return (
        <div className='burger-menu-content'>
            <div className='burger-menu-content_first-part'>
                <ul>
                    <li><a href="#" className='good-deal-link'><span className="material-symbols-outlined">bomb</span>Bon plans</a></li>
                    <li className='burger-menu-content-button'><a href="#">0<span className="material-symbols-outlined">euro</span>Gratuit</a></li>
                    <li className='burger-menu-content-button'><a href="#"><span className="material-symbols-outlined">forum</span>Discussions</a></li>
                    <li className='burger-menu-content-button'><a href="#"><span className="material-symbols-outlined">newspaper</span>Magazine</a><span className='blue-span'>Nouveau</span></li>
                </ul>
            </div>
            <div className='burger-menu-content_second-part'>
                <a href="#" className='burger-menu-content-button'><span className="material-symbols-outlined">Folder</span>Toutes les catégories</a>
                <div className='second-part-categories-list'>
                    {categoriesList.map((list, indexList) => {
                        return(
                            <ul key={indexList}>
                                {list.map((categorie, indexCategorie) =>{
                                    return(
                                        <li key={indexCategorie}><a href="#">{categorie}</a></li>
                                    )
                                })}
                            </ul>
                        )                    
                    })}
                </div>
            </div>
            <div className='burger-menu-content_third-part'>
            <a href="#" className='burger-menu-content-button'><span className="material-symbols-outlined">cut</span>Codes promo</a>
                <div className='second-part-categories-list'>
                    {brandsList.map((list, indexList) => {
                        return(
                            <ul key={indexList}>
                                {list.map((brand, indexBrand) =>{
                                    return(
                                        <li key={indexBrand}><a href="#">{brand}</a></li>
                                    )
                                })}
                            </ul>
                        )                    
                    })}
                </div>
            </div>
            <div className='burger-menu-content_fourth-part'>
                <div className='title-event'>
                     <span className="material-symbols-outlined star-color">star</span><span>Évenements</span>
                </div>
                <a href="#">Les dépenses du quotidien</a>
            </div>
            <div className='burger-menu-content_fifth-part'>
                <li className='burger-menu-content-button'><a href="#"><span className="material-symbols-outlined">developer_guide</span>Guide d'achat</a></li>
                <li className='burger-menu-content-button'><a href="#"><span className="material-symbols-outlined">tv_options_edit_channels</span>Sondages</a></li>
            </div>
        </div>
    )
}