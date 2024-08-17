
import { useId } from 'react';
// з одним ідентифікатором на одному лейбел
// const MyComponent = () => {
//     const loginId = useId();

//     return (
//         <div>
//             <label htmlFor={loginId}>Text field label</label>
//             <input type="text" id={id} />
//         </div>
//     );
// };
// з двума ідентифікаторами на 2-х лейбелах (якщо на сторінці декілька форм)
export default function LoginForm3() {
    const loginId = useId();
    const passwordId = useId();

    return (
        <form>
            <label htmlFor={loginId}>Login</label>
            <input type="text" name="login" id={loginId} />

            <label htmlFor={passwordId}>Password</label>
            <input type="password" name="password" id={passwordId} />

            <button type="submit">Login</button>
        </form>
    );
};

// атрибутом htmlFor, допомагає асистивним технологіям, зв'язуючи поле і label за ідентифікатором.
