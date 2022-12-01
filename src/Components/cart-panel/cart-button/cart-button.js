
import styles from "../cart-button/cart-button.module.css";

const CartButton = ({children, onclick})=>
{
    
    return(
        <button className={styles['cart-button']} onClick={onclick}>
            {children}
        </button>
    );
}

export default CartButton;