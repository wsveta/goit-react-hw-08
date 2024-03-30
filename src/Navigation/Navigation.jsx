import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export const Navigation = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);

  return (
    <nav >
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggenIn && (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
