
import { useContext } from 'react';
import styles from '../menu-item/menu-item.module.css';
import Action from './menu-item-component/action/action';
import Details from './menu-item-component/detail/detail';
// import Button from '../../general/button';
import CartContext from '../../cart-ctx/cart-context';

const MenuItem = ({id, title, description, price})=>
{
    const cart = useContext(CartContext);

    const onAdd = (count)=>
    {
        // console.log(count);
        cart.addItem({id, title, description, price}, count);
    }

    return(
        <>
            <div className={styles['menu-item']}>
                <Details title={title} description={description} price={price}/>
                <Action onAddItem={onAdd}/>
            </div>
            <hr/>
        </>
    );
}

export default MenuItem;