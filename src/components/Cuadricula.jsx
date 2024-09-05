import { useEffect, useState } from "react";
import Cripto from "./cripto/Cripto";
import axios from "axios";
import "./Cuadricula.css";

function Cuadricula() {
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
    <div className="app-container">
      <h1>Lista de CriptoMonedas</h1>
      <div className="cripto-container">
        {criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
          <Cripto
            key={id}
            name={name}
            priceUSD={priceUsd}
            symbol={symbol}
            changePercent24Hr={changePercent24Hr}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}

export default Cuadricula;
