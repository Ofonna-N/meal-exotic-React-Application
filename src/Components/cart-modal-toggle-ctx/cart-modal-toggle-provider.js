

import { useState } from "react";
import CartModalToggleContext from "./cart-modal-toggle-ctx";


const CartModalToggleContextProvider = ({children})=>
{

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleModal = (toggle)=>
    {
        console.log(toggle + " modal");
        setIsOpen(toggle)
    }

    return(
        <CartModalToggleContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </CartModalToggleContext.Provider>
    );
}


export default CartModalToggleContextProvider;