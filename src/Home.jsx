import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Hola, Bienvenido a EDmarket</h1>
      <p>Cónoce las criptomonedas más usadas </p>
      <Link to="/criptomonedas">Ver Criptomonedas</Link>
    </>
  );
};

export default Home;
