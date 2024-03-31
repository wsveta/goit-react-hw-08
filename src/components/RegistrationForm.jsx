import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import {register} from "../redux/auth/operations"

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, actions) => {
    dispatch(register(value));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label>
            Username
            <Field autoComplete="off" className={css.input} type="text" name="name"></Field>
          </label>
          <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          />
          <label>
            Email
            <Field className={css.input} type="email" name="email"></Field>
          </label>

          <ErrorMessage className={css.error} name="email" component="span" />
          <label>
            Password
            <Field autoComplete="off" className={css.input} type="password" name="password"></Field>
          </label>

          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <button className={css.registerBtn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
