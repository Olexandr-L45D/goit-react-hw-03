import css from "./FormSecond.module.css"

export default function LoginFormSecond({ onLogin }) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const { login, password } = form.elements;
        // Викликаємо пропс onLogin
        onLogin({
            login: login.value,
            password: password.value,
        });
        form.reset();
    };
    return (
        <div className={css.item}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};