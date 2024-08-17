// Checkbox Щоб дізнатися, обраний чекбокс чи ні при зміні, у функції-обробнику звертаємося до властивості DOM evt.target.checked, значення якої буде true або false, і записуємо його в стан.
//Передаємо чекбоксу значення стану і функцію оновлення як атрибути checked і onChange.
//При роботі з групою чекбоксів їх значення зберігаються в властивості value, як і в разі з радіо-кнопками, а обрані значення зберігаються в стані як масив чи об'єкт. Це потрібно в більш складних формах, створення яких ми розглянемо пізніше.
import { useState } from "react";
export default function Checkbox() {
    const [hasAccepted, setHasAccepted] = useState(false);

    const handleChange = (evt) => {
        setHasAccepted(evt.target.checked);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name="terms"
                    checked={hasAccepted}
                    onChange={handleChange}
                />
                I accept terms and conditions
            </label>
            <button type="button" disabled={!hasAccepted}>
                Proceed
            </button>
        </div>
    );
};