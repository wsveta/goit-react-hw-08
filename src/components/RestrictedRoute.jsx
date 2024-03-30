import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ redirectTo, component: Component }) {
  const isLogedIn = useSelector(selectIsLoggedIn);
  
  return isLogedIn ? <Navigate to={redirectTo} /> : Component;
}
