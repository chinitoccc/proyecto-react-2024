import { useContext } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Menu = () => {
  const usuario = useContext(UserContext);

  const closeSesion = () => {
    localStorage.removeItem("token");
  };

  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/criptomonedas">Criptomonedas</NavLink>
        </li>
        <li>
          <NavLink to="/perfil">Usuario {usuario.first_name}</NavLink>
        </li>
        <li>
          <NavLink onClick={closeSesion} to="/login">
            Cerrar Sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
