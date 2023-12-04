import './BurgerMenuContent.scss'

export default function BurgerMenuContent() {
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
                <div></div>
                <div></div>
            </div>
            <div className='burger-menu-content_third-part'>

            </div>
            <div className='burger-menu-content_fourth-part'>

            </div>
            <div className='burger-menu-content_fifth-part'>

            </div>
        </div>
    )
}