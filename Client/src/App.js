import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/RegistrationAdmin";
import Welcome from "./pages/Welcome";
import AuthGuard from "./routing/AuthGuard";
import PublicRoutes from "./routing/PublicRoutes";
import RegistrationAdmin from "./pages/RegistrationAdmin";
import RegistrationCustomer from "./pages/RegistrationCustomer";

function App() {
  const ROLES = {
    ADMIN: "admin",
    CLIENT: "customer",
  };

  const routes = [
    {
      path: "/",
      element: <Welcome />,
      accessibleRoles: [ROLES?.ADMIN],
      title: "Welcome",
    },
  ];

  const commonRoutes = [
    {
      path: "/login",
      element: <Login />,
      title: "Login",
    },
    {
      path: "/admin/registration",
      element: <RegistrationAdmin />,
      title: "Register",
    },
    {
      path: "/customer/registration",
      element: <RegistrationCustomer />,
      title: "Register",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {commonRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <PublicRoutes title={route.title}>{route.element}</PublicRoutes>
              }
            />
          ))}

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <AuthGuard
                  title={route.title}
                  accessibleRoles={route.accessibleRoles}>
                  {route.element}
                </AuthGuard>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
