import { useId } from 'react';
import css from './Password.module.css';

export default function PasswordField() {
    const passwordHintId = useId();
    return (
        <div className={css.item}>
            <label>
                Password:
                <input
                    type="password"
                    aria-describedby={passwordHintId}
                />
            </label>
            <p id={passwordHintId}>
                The password should contain at least 18 characters
            </p>
        </div>
    );
}