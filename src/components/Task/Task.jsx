import css from "./Task.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

export default function Task({ obj: { name, number }, onDelete }) {
    return (
        <div className={css.item}>
            <div className={css.itemText}>
                <p className={css.text}><BsFillPersonFill />{name}</p>
                <p className={css.text}><AiFillPhone />{number}</p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}