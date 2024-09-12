import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [cargando, setCargando] = useState(false);

  const [error, setError] = useState();

  const navigation = useNavigate();

  const cambioEmail = (e) => {
    let element = e.target.name;
    setUser({ ...user, [element]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null);
    axios
      .post("https://reqres.in/api/login", user)
      .then((res) => {
        setCargando(false);
        localStorage.setItem("token", res.data.token);
        navigation("/");
      })
      .catch((err) => {
        setCargando(false);
        setError(err.response.data.error);
        console.log(err.response.data.error);
      });
  };

  if (localStorage.getItem("token")) return <Navigate to="/" />;

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Elctrónico</label>
          <input required onChange={cambioEmail} type="email" name="email" />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            required
            onChange={cambioEmail}
            type="password"
            name="password"
          />
        </div>
        <div className="submit">
          <input type="submit" value={cargando ? "Cargando..." : "ingresar"} />
        </div>
      </form>
      <div className={error ? "error" : ""}>
        <span>{error}</span>
      </div>
    </div>
  );
};

export default Login;
