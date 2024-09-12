import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((res) => setUsuario(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={usuario}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
