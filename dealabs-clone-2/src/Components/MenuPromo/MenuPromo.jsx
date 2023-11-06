import { useRef } from 'react'
import './MenuPromo.scss'
export default function MenuPromo() {

    const brandsLists = [
        ["Amazon", "AliExpress", "Nike", "Intersport", "Samsung", "Conforama", "Norauto", "Booking.com"],
        ["Cdiscount", "Zalando", "Carrefour", "Blancheporte", "Fnac", "Decathlon", "Courir", "Lasrminute"]
    ]

    const menuRef = useRef()
    const buttonMenuRef = useRef()

    const displayMenuPromo = () => {
        if (menuRef.current.style.display === "" || menuRef.current.style.display === "none") {
            menuRef.current.style.display = "block"
            buttonMenuRef.current.style.backgroundColor = "rgb(204, 203, 203)"
        }
        else {
            menuRef.current.style.display = "none"
            buttonMenuRef.current.style.backgroundColor = "#35373b"
        }
    }

    return (
        <>
            <li><button ref={buttonMenuRef} onClick={displayMenuPromo}>Codes promo<span className="material-symbols-outlined">expand_more</span></button></li>
            <div ref={menuRef} className='menu-promo-container'>
                <div className='menu-promo-top-part'>
                    {brandsLists.map((list, listIndex) => {
                        return (
                            <ul key={listIndex}>
                                {list.map((brand, brandIndex) => {
                                    return (
                                        <li key={brandIndex}><a href="#">{brand}</a></li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                </div>
                <div className='menu-promo-bot-part'>
                    <button><span>Voir tous les codes promo</span></button>
                </div>
            </div>
        </>
    )
}