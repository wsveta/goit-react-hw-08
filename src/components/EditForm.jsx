import css from "./ContactForm.module.css";
import { useId } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { selectContacts } from "../redux/contacts/selectors";
import { updateContact } from "../redux/contacts/operations";

const EditForm = ({ fullContact, setIsModalEditOpen }) => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (contact, actions) => {
    dispatch(updateContact({ id: fullContact.id, contact }))
      .unwrap()
      .then(() => {
        toast("Contact edited");
      });
    setIsModalEditOpen(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: fullContact.name, number: fullContact.number }}
      onSubmit={handleSubmit}
    >
      <Form className={css.editForm}>
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
        <div className={css.btnWrapper}>
          <button type="button" onClick={() => setIsModalEditOpen(false)}>
            Cancel
          </button>
          <button type="submit">Update</button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditForm;
