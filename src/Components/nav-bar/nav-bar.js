
import CartButton from './cart-button/cart-button';
import styles from './nav-bar.module.css';
import React from 'react';

const NavBar = ()=>
{
    // console.log("Evaluating nav bar!");
    return(
        <div className={styles['nav-bar']}>
            <h1>Meal Exotic</h1>
            <CartButton/>
        </div>
    );
}


export default (NavBar);