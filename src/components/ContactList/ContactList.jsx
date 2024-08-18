// ContactList
// import FeedbackForm from "../Contact/Contact"
import css from './ContactList.module.css';
import Contact from "../Contact/Contact"

export default function ContactList({ object, onDelete }) {
    return (
        <ul className={css.list}>
            {object.map((task) => (
                <li className={css.item} key={task.id}>
                    <Contact obj={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}
