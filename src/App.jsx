import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [criptos, setCriptos] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data); //destructurar a ver que pasa
      })
      .catch(() => console.error("Error al obtener la lista de criptomonedas"));
  }, []);

  if (!criptos) return <h1>Cargando...</h1>;

  return (
    <>
      <h1>Lista de CriptoMonedas</h1>
      <ol>
        {criptos.map(({ id, name, priceUsd }) => (
          <li key={id}>
            Nombre: {name} Precio {priceUsd}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
