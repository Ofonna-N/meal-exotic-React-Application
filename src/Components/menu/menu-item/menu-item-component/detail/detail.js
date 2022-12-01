
import styles from "../detail/detail.module.css";
import Title from "./title/title";

const Details = ({title, description, price}) => {
    return (
        <div>
            <Title title={title} price={price}/>
            <p className={styles['description']}>{description}</p>
        </div>
    );
}


export default Details;