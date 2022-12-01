
import styles from "../cart-item/cart-item.module.css";
import Title from "../../menu/menu-item/menu-item-component/detail/title/title";
import CartButton from "../cart-button/cart-button";
const CartItem = ({ title, price, count, onAddItem, onRemoveItem }) => {


    return (
        <>
            <div className={styles['cart-item']}>
                <div className={styles['details']}>
                    <Title title={title} price={price} />
                    <span className={styles['count']}>x{count}</span>
                </div>
                <div className={styles['action']}>
                    <CartButton onclick={onRemoveItem}>-</CartButton>
                    <CartButton onclick={onAddItem}>+</CartButton>
                </div>
            </div>
            <hr />
        </>
    );
}

export default CartItem;