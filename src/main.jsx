import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagina404 from "./components/Pagina404.jsx";
import Cuadricula from "./components/Cuadricula.jsx";
import Home from "./Home.jsx";
import CriptoPage from "./components/cripto/CriptoPage.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import Perfil from "./components/usuarios/Perfil.jsx";
import Login from "./components/usuarios/Login.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path=":id" element={<CriptoPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
);
