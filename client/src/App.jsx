import { Outlet, useLocation } from "react-router-dom";
import ComposantHeader from "./components/ComposantHeader";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const location = useLocation();
  const isConnectionPage = location.pathname === "/connexion";
  const isHomePage = location.pathname === "/";
  const isDestinationsPage = location.pathname === "/destinations";

  return (
    <main className={isDestinationsPage ? "fixed-header-padding" : ""}>
      {!isConnectionPage && (
        <ComposantHeader className={isDestinationsPage ? "fixed-header" : ""} />
      )}
      <Outlet />
      {!isHomePage && <Footer />}
    </main>
  );
}

export default App;
