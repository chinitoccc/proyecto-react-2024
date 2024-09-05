import { Link } from "react-router-dom";
import "./Cripto.css";

const Cripto = ({ id, name, priceUSD, symbol, changePercent24Hr }) => {
  return (
    <div className="cripto">
      <h2>{name}</h2>
      <div className="info">
        <p>
          <span className="label">Precio: </span>
          {parseFloat(priceUSD).toFixed(4)} USD
        </p>
        <p>
          <span className="label">Código </span>
          {symbol} USD
        </p>
        <p>
          <span>Variacion ultimas 24 hrs: </span>
          <span
            className={
              parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"
            }
          >
            {parseFloat(changePercent24Hr).toFixed(2)} %
          </span>
        </p>
        <Link className="ver-mas" to={`/criptomonedas/${id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Cripto;
