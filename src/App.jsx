import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Einstellungen from "./pages/Einstellungen";
import Urkundenbox from "./pages/Urkundenbox"; // Stellen Sie sicher, dass dies die Login-Komponente ist
import NichtGefunden from "./pages/NichtGefunden";
import AppLayout from "./ui/AppLayout";
import Bezahlbox from "./pages/Bezahlbox";
import Suche from "./pages/Suche";
import Postbox from "./pages/Postbox";
import Teambox from "./pages/Teambox";
import Hilfe from "./pages/Hilfe";
import NeuerEintrag from "./pages/NeuerEintrag";
import LetzteSuchanfragen from "./pages/LetzteSuchanfragen";
import Datensatz from "./pages/Datensatz";
import Account from "./pages/Account";
// import useAuth from "./hooks/useAuth";

function App() {
  //Erhalte isLogin später von useAuth, Einbindung Keycloak ausstehend
  const  isLogin  = true;
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {isLogin ? (
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bezahlbox" element={<Bezahlbox />} />
              <Route path="suche" element={<Suche />} />
              <Route path="letztesuchanfrage" element={<LetzteSuchanfragen />} />
              <Route path="postbox" element={<Postbox />} />
              <Route path="teambox" element={<Teambox />} />
              <Route path="urkundenbox" element={<Urkundenbox />} />
              <Route path="help" element={<Hilfe />} />
              <Route path="settings" element={<Einstellungen />} />
              <Route path="neuereintrag" element={<NeuerEintrag />} />
              <Route path="datensatz/:id" element={<Datensatz />} />
              <Route path="account" element={<Account />} />
            </Route>
          ) : (
            <Route path="login" element={<Urkundenbox />} /> 
          )}
          <Route path="*" element={<NichtGefunden />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
