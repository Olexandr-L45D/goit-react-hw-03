import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"
import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";


const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

export default function ContactForm() {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };
    return (
        <div className={css.item}>
            <Formik initialValues={{
                name: " ",
                number: " "
            }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form>

                    <label htmlFor={nameFieldId} className={css.paragraf}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="name" component="span" />
                    <label htmlFor={numberFieldId} className={css.paragraf}>Number</label>
                    <Field type="number" name="number" id={numberFieldId} />
                    <ErrorMessage name="number" component="span" />
                    <div className={css.btn}>
                        <button className={css.addContact} type="submit">Add contact</button>
                    </div>
                </Form>

            </Formik>
        </div>
    );
};

{/* <Field as="number" type="text" name="number" id={numberFieldId} /> */ }
// const handleSubmit = (evt) => {
//     evt.preventDefault();
//     onAdd({
//         id: id + nanoid(), name: evt.target.elements.name.value, number: evt.target.elements.number.value,
//     }); evt.target.reset();
// };
// <form onSubmit={handleSubmit}>
//     куди цю функцію onSubmit={handleSubmit}
// </form>
// id: Date.now(),
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