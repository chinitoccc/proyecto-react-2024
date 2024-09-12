import axios from "axios";
import { useState, useEffect } from "react";

const usePetition = (linkId) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}${linkId}`)
      .then((data) => {
        setState(data.data.data);
      })
      .catch(() => console.error("Error al hacer la peticion"));
  }),
    [];

  return state;
};

export default usePetition;
