import css from "./ContactForm.module.css";
import { useId } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsOps";

const initialValues = { name: "", number: "" };

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string().required("Required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (contact, actions) => {
    dispatch(addContact(contact))
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId} className={css.nameLabel}>
          Name
        </label>
        <Field
          autoComplete="on"
          id={nameId}
          className={css.nameInput}
          name="name"
          type="text"
        />
        <ErrorMessage name="name" component="span" className={css.error} />
        <label htmlFor={numberId} className={css.numberLabel}>
          Number
        </label>
        <Field
          autoComplete="on"
          id={numberId}
          className={css.numberInput}
          name="number"
          type="tel"
        />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit" className={css.addContactBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
