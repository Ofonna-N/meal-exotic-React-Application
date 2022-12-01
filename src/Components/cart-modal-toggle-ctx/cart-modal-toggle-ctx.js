import { createContext } from "react";


const CartModalToggleContext = createContext({
    isOPen:false,
    toggle:function(){}
});


export default CartModalToggleContext;