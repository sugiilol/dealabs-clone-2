import { useEffect, useState } from 'react'
import './BurgerMenu.scss'


export default function BurgerMenu(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [icon, setIcon] = useState('menu')

    const burgerClasses = ['burger-menu__container']

    useEffect(() => {
        if (isOpen) {
            setIcon('close')
        } else {
            setIcon('menu')
        }
    }, [isOpen])

    if (isOpen) {
        burgerClasses.push('burger-menu__container--opened')
    }

    return (
        <>
            <button
                className={props.class}
                onClick={() => setIsOpen(!isOpen)}>
                <span className="material-symbols-outlined">{icon}</span>
            </button>
            {isOpen &&
                (
                    <div className='scrim' onClick={() => setIsOpen(false)}></div>
                )
            }
            <div className={burgerClasses.join(' ')}>
                {props.content}
            </div>
        </>
    )
}