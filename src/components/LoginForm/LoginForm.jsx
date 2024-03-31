import { Formik, Form, Field, ErrorMessage } from "formik";
import css from './LoginForm.module.css'
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, actions) => {
    dispatch(login(value));
    actions.resetForm();
  }
  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={{ email: "", password: "" }}>
        <Form className={css.form}>
          <label>
            Email
            <Field className={css.input} type="email" name="email"></Field>
          </label>

          <ErrorMessage className={css.error} name="email" component="span" />
          <label>
            Password
            <Field autoComplete="off" className={css.input} type="password" name="password"></Field>
          </label>

          <ErrorMessage className={css.error} name="password" component="span" />
          <button className={css.loginBtn} type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
