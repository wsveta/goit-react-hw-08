import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"
export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button className={css.logoutBtn} onClick={() => dispatch(logout())} type="button">
        Logout
      </button>
    </div>
  );
}
