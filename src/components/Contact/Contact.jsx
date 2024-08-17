import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required")

});

const initialValues = {
    username: "",
    email: "",
    message: ""

};

export default function FeedbackForm() {
    const nameFieldId = useId();
    const emailFieldId = useId();
    const msgFieldId = useId();


    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form>
                <label htmlFor={nameFieldId}>Username</label>
                <Field type="text" name="username" id={nameFieldId} />

                <label htmlFor={emailFieldId}>Email</label>
                <Field type="email" name="email" id={emailFieldId} />

                <label htmlFor={msgFieldId}>Message</label>
                <Field as="textarea" name="message" id={msgFieldId} rows="5" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};



