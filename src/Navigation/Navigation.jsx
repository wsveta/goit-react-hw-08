import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export const Navigation = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.links}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggenIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
