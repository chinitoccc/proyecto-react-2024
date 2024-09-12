import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Perfil = () => {
  const usuario = useContext(UserContext);

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <div>
        <ol>
          <li>Nombre: {usuario.first_name}</li>
          <li>Apellido: {usuario.last_name}</li>
          <li>Correo: {usuario.email}</li>
          <li>
            <img src={usuario.avatar} alt="Foto de Pefil" />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Perfil;
