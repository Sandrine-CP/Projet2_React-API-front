// eslint-disable-next-line import/no-unresolved
import Spline from "@splinetool/react-spline";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Accueil.css";

function Accueil() {
  const [currentSystemIndex, setCurrentSystemIndex] = useState(0);

  const systems = useMemo(
    () => [
      {
        id: 1,
        scene: "https://prod.spline.design/0yoxCnnetMLckF-C/scene.splinecode",
        description: "Les planètes à visiter sont : ",
        planetes: "Saturne, Venus, Mercure, Mars, Jupiter, Saturne et Neptune",
        systeme: "solaire",
      },
      {
        id: 2,
        scene: "https://prod.spline.design/6KY554nKnsj26QUl/scene.splinecode",
        description: "Les planètes à visiter sont : ",
        planetes:
          "Nabooris, Alderaan V, Mustafarix, Geonosia, Mandalorex et Kessel IX",
        systeme: "Betelgeuse",
      },
      {
        id: 3,
        scene: "https://prod.spline.design/xgJGV1Y8sod3D8Qc/scene.splinecode",
        description: "Les planètes à visiter sont : ",
        planetes:
          "Tatoo IV, Jakku Alpha, Ryloth Prime, Polis Massa, Kamino Delta, Scarifia, Exogolia et Dathomirium",
        systeme: "Pegasi",
      },
      {
        id: 4,
        scene: "https://prod.spline.design/OQLI5xsqaBjq4G2b/scene.splinecode",
        description: "Les planètes à visiter sont : ",
        planetes:
          "Andor Prime, Coruscanta, Dantooine II, Endoria Major, Kashyyk Minor, Mygeeto, Hotharia, Yavino, Bespina et Jedhania",
        systeme: "Alpha Centauri",
      },
    ],
    []
  );

  const handleNextClick = () => {
    setCurrentSystemIndex((prevIndex) => (prevIndex + 1) % systems.length);
  };

  const handlePrevClick = () => {
    setCurrentSystemIndex(
      (prevIndex) => (prevIndex - 1 + systems.length) % systems.length
    );
  };

  return (
    <div className="background">
      <div className="carousel-container">
        <div className="carousel-content">
          <div className="carousel-left">
            <Spline
              className="spline"
              scene={systems[currentSystemIndex].scene}
            />
          </div>
          <div className="carousel-right">
            <h2>Système : {systems[currentSystemIndex].systeme}</h2>
            <p>{systems[currentSystemIndex].description}</p>
            <p>{systems[currentSystemIndex].planetes}</p>
          </div>
        </div>
        <div className="carousel-controls">
          <button
            onClick={handlePrevClick}
            type="button"
            className="carousel-button"
          >
            Précédent
          </button>
          <button
            onClick={handleNextClick}
            type="button"
            className="carousel-button"
          >
            Suivant
          </button>
        </div>
      </div>
      <div className="guide-div">
        <Link to="/destinations" className="link">
          <button type="button" className="guide">
            GUIDEZ MOI
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
