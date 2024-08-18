// ContactList
import { nanoid } from 'nanoid'
import css from './ContactList.module.css';
import Contact from "../Contact/Contact"

export default function ContactList({ object, onDelete }) {
    return (
        <ul className={css.list}>
            {object.map((task) => (
                <li className={css.item} key={nanoid()}>

                    <Contact obj={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}

// key={task.id}>
