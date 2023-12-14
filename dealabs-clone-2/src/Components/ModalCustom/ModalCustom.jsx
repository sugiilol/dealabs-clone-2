import { useState } from "react"
import "./ModalCustom.scss"

export default function ModalCustom(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const modalClassList = ["modal-scrim"]

    if (modalIsOpen) {
        modalClassList.push("modal-scrim--opened")
    }

    const closeOrOpenModal = () => setModalIsOpen(!modalIsOpen)

    return (
        <>
            <button className={props.class} onClick={() => closeOrOpenModal()}>
                <span className="material-symbols-outlined">{props.icon}</span>
                <span className="vanish-action">{props.name}</span>
            </button>
            <div className={modalClassList.join(" ")} onClick={() => closeOrOpenModal()}>              
                {props.content}                           
            </div>
        </>
    )
}