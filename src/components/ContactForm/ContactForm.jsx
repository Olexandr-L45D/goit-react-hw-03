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

export default function ContactForm({ onAdd }) {
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
                    <Field type="text" name="number" id={numberFieldId} />
                    <ErrorMessage name="number" component="span" />
                    <div className={css.btn}>
                        <button className={css.addContact} type="submit">Add contact</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};


// const handleSubmit = (e) => {
//     onAdd({
//         id: nanoid(),
//         name: e.target.value,
//         number: e.target.value
//     });
//     e.target.reset();
// };
// id: Date.now(),
// name: e.target.elements.text.value,
//number: e.target.elements.text.value
// 