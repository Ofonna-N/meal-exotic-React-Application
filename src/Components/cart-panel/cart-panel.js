
import { useContext } from "react";
import CartModalToggleContext from "../cart-modal-toggle-ctx/cart-modal-toggle-ctx";
import styles from "../cart-panel/cart-panel.module.css";
import CartButton from "./cart-button/cart-button";
import CartItem from "./cart-item/cart-item";
import CartContext from "../cart-ctx/cart-context";

const CartPanel = ()=>
{
    const cart = useContext(CartContext);
    // console.log(cart);
    const cartItemsDisplay = cart.items.map(x => 
    <CartItem 
    key={x.id} 
    title={x.title} 
    price={x.price} 
    count={x.count}
    onAddItem={cart.addItem.bind(null, x, 1)}
    onRemoveItem={cart.removeItem.bind(null, x.id)}
    />);

    const {isOpen, setIsOpen} = useContext(CartModalToggleContext);

    const closeCartHandler = ()=>
    {
        setIsOpen(x => false);
    }

    return(
        <div className={styles['cart-panel']}>
            <h2>CART</h2>
            <hr/>
            <div>
                {cartItemsDisplay}
            </div>
            <div className={styles['total']}>
                <h1>Total</h1>
                <h2>${cart.total_amount.toFixed(2)}</h2>
            </div>
            <div className={styles['action']}>
                <CartButton onclick={closeCartHandler}>Close</CartButton>
                <CartButton>Order</CartButton>
            </div>
        </div>
    );
}


export default CartPanel;