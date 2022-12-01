
import styles from "../title/title.module.css";

const Title = ({title, price}) => {
    return (
        <div className={styles['title']}>
            <h2>{title}</h2>
            <p className={styles['price']}>${price}</p>
        </div>
    );
}


export default Title;