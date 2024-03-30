import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import {selectIsLoggedIn} from "../redux/auth/selectors"
import AuthNav from "./AuthNav.jsx";
import UserMenu from "./UserMenu";
import css from "./AppBar.module.css"

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
{isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
  );
}
