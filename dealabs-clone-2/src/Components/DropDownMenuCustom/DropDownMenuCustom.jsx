import { useState } from 'react'
import './DropDownMenuCustom.scss'
export default function MenuPromo(props) {

    const [isOpen, setIsOpen] = useState(false)
    const dropDownClasses = ["dropdown-menu"]

    if (isOpen) {
        dropDownClasses.push('dropdown-menu--opened')
    }

    return (
        <li className={dropDownClasses.join(" ")}>
            <button onClick={() => setIsOpen(!isOpen)}>{props.name}
                <span className="material-symbols-outlined icon">expand_more</span>
            </button>

            {isOpen &&
                (
                    <div className='scrim' onClick={() => setIsOpen(false)}></div>
                )
            }
            <div className='dropdown-menu__container'>
                {props.content}
            </div>
        </li>
    )
}