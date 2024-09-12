import { useParams } from "react-router-dom";
import "./CriptoPage.css";
import usePetition from "../../hooks/usePetition";
import CriptoInfo from "./info/CriptoInfo";
import CriptoHistory from "./info/CriptoHistory";

const CriptoPage = () => {
  const params = useParams();

  const cripto = usePetition(`assets/${params.id}`);
  const history = usePetition(`assets/${params.id}/history?interval=d1`);

  return (
    <div className="cripto-page-container">
      {cripto && <CriptoInfo cripto={cripto} />}
      <div className="history">
        {history && <CriptoHistory history={history} />}
      </div>
    </div>
  );
};

export default CriptoPage;
