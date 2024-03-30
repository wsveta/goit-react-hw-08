import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import {selectIsLoggedIn} from "../redux/auth/selectors"
import AuthNav from "./AuthNav.jsx";
import UserMenu from "./UserMenu";


export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
{isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
  );
}
