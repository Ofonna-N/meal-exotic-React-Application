
import styles from '../header/header.module.css';

import image from '../../assets/imgs/meals.jpg';

const Header = ()=>
{
    return(
        <div className={styles['main-header']}>
            <img src={image} alt="Supper"/>
            <div className={styles['overlay']}></div>
        </div>
    );
}

export default Header;