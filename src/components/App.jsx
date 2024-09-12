import Menu from "./menu/Menu";
import { Outlet, Navigate } from "react-router-dom";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("token")) return <Navigate to="/login" />;

  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default App;
