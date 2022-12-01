import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../general/button";

import styles from './cart-button.module.css';
import CartModalToggleContext from "../../cart-modal-toggle-ctx/cart-modal-toggle-ctx";
import { useContext } from "react";
import CartContext from "../../cart-ctx/cart-context";


const CartButton = () => {
    const { isOpen, setIsOpen } = useContext(CartModalToggleContext);
    const { items, total_amount } = useContext(CartContext);
    let sumOfItems = 0;

    items.forEach(meal => {
        sumOfItems += meal.count;
    });
    // console.log(sumOfItems);

    const toggle = () => {
        setIsOpen(x => true);
    }

    return (
        <Button onClicked={toggle}>
            <div className={styles['cart-button']}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>Cart</span>
                <span className={styles['cart-count']}>{sumOfItems}</span>
            </div>
        </Button>
    );
}


export default CartButton;