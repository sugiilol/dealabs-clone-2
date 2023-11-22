import "./MenuPromoContent.scss"

export default function MenuPromoContent() {

    const brandsLists = [
        ["AliExpress", "Cdiscount", "Nike", "Intersport", "Samsung", "Conforama", "Norauto", "Booking.com"],
        ["Amazon", "Zalando", "Carrefour", "Blancheporte", "Fnac", "Decathlon", "Courir", "Lastminute"],
    ]

    return (
        <div className="menu-promo-container">
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
    )
}