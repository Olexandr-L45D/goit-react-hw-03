// ContactList
// import FeedbackForm from "../Contact/Contact"
import css from './ContactList.module.css';
import Task from "../Task/Task"

export default function ContactList({ object, onDelete }) {
    return (
        <ul className={css.list}>
            {object.map((task) => (
                <li className={css.item} key={task.id}>
                    <Task obj={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}
