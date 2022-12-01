
import { counter } from "@fortawesome/fontawesome-svg-core";
import { useRef, useState } from "react";
import styles from "../action/action.module.css";

const Action = ({onAddItem}) => {

    const countRef = useRef(0);

    const [count, setCount] = useState(1);

    const updateCountHandler = ()=>
    {
        setCount(x => Number(countRef.current.value));
    }

    const addItemHandler = (event)=>
    {
        onAddItem(count);
    }

    return (
        <div className={styles['action']}>
            <div className={styles['button']} onClick={addItemHandler}>
                <span>Add Item</span>
            </div>
            <input ref={countRef} type="number" defaultValue={1} min={1} max={30} onChange={updateCountHandler}></input>
        </div>
    );
}


export default Action;