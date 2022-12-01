import { createContext } from "react";


const CartContext = createContext({
    menu_items:[],
    total_amount:0
});


export default CartContext;