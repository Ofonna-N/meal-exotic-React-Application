
import styles from "../modal/modal.module.css";

import CartModalToggleContext from "../cart-modal-toggle-ctx/cart-modal-toggle-ctx";
import { useContext } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const {isOpen, setIsOpen} = useContext(CartModalToggleContext);

    const toggle = (event)=>
    {
        if(event.target !== event.currentTarget)return;
        setIsOpen(x=> false);
    }

    const modalDisplay = (isOpen) ? <div className={styles['modal']} onClick={toggle}>
        {children}
    </div> : "";

    return (
        createPortal(<>
            {modalDisplay}
        </>, document.getElementById("cart-modal"))
    );
}

export default Modal;