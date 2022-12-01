

import styles from '../general/button.module.css';

const Button = ({children, onClicked})=>
{

    return(
        <div className={styles['button']} onClick={onClicked}>
            {children}
        </div>
    );
}

export default Button;