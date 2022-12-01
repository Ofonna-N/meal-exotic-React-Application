
import styles from '../menu/menu.module.css';
import MenuItem from './menu-item/menu-item';

const Menu = ()=>
{
    const menuItems = 
    [
        {
            id: Math.random(),
            title:"Goat Leg Soup",
            description:"Goat meat with steam broccoli soup",
            price: 59.99
        },
        {
            id: Math.random(),
            title:"Frog Intestine",
            description:"frog intestine served with chili and garlic mushroom",
            price: 79.99
        },
        {
            id: Math.random(),
            title:"Cow Tongue",
            description:"slice and diced cow tongue intestine served fries and bbq sauce",
            price: 40.99
        },
        {
            id: Math.random(),
            title:"Pig Eyes",
            description:"Pig eye soup in blended lettuce and roach feet",
            price: 20.99
        }
    ];

    const menuDisplay = menuItems.map(x => 
    <MenuItem 
        key={x.id} 
        id={x.id} 
        title={x.title}
        description={x.description}
        price={x.price}/>)

    return(
        <div className={styles['menu']}>
            <h1>MENU</h1>
            <hr/>
            <div>
                {menuDisplay}
            </div>
        </div>
    );
}

export default Menu;