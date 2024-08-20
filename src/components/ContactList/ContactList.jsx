import css from './ContactList.module.css';
import Contact from "../Contact/Contact"

export default function ContactList({ objects, onDelete }) {
    return (
        <ul className={css.list}>
            {objects.map((task) => (
                <li className={css.item} key={task.id} >

                    <Contact obj={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}


{/* <li className={css.item} key={nanoid()}> */ }

