//Неконтрольована форма-значення полів форми потрібні лише в момент її відправки (function-login)
import css from "./Form.module.css"
export default function LoginForm() {

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const form = evt.target;
        const { login, password } = form.elements;

        // Посилання на DOM-елементи
        console.log(login, password);

        // Значення полів
        console.log(login.value, password.value)

        // Скидаємо значення полів після відправки
        form.reset();
    };

    return (
        <div className={css.item}>
            <form onSubmit={handleSubmit}>
                <p>FORM-1-"Лише для відправки 1 раз при логіні"</p>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};