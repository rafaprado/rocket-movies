import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { token } = useAuth();

  return(
    <BrowserRouter>
      {token ? <AppRoutes/> : <AuthRoutes />}
    </BrowserRouter>
  )
}