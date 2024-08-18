// ContactForm
import css from "./ContactForm.module.css"

export default function ContactForm({ onAdd }) {

    const handleSubmit = (evt) => {
        evt.preventDefault();

        onAdd({
            id: Date.now(),
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
        })
        evt.target.reset();
    };
    return (
        <div className={css.item}>
            <form onSubmit={handleSubmit}>
                <p className={css.paragraf}>Name</p>
                <input type="text" name="name" />
                <p className={css.paragraf}>Number</p>
                <input type="number" name="number" />
                <div className={css.btn}>
                    <button className={css.addContact} type="submit">Add contact</button>
                </div>
            </form>
        </div>
    );
};


// export default function LoginForm3() {
//     const loginId = useId();
//     const passwordId = useId();

//     return (
//         <form>
//             <label htmlFor={loginId}>Login</label>
//             <input type="text" name="login" id={loginId} />

//             <label htmlFor={passwordId}>Password</label>
//             <input type="password" name="password" id={passwordId} />

//             <button type="submit">Login</button>
//         </form>
//     );
// };