import styles from '../summary/summary.module.css';

const Summary = ()=>
{
    return(
        <div className={styles['summary']}>
            <h2>WELCOME</h2>
            <p>
            The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table. 
            Simply put, we’re here to bring you a sandwich experience you can feel good about.
            </p>
        </div>
    );
}

export default Summary;