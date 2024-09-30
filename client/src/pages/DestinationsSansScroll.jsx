import "./Destinations.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CaracteristiqueButton from "../components/CaracteristiqueButton";
import DestinationList from "../components/DestinationList";
import filter from "../assets/images/filtre.png";
import Criteres from "../components/Criteres";

function Destinations() {
  const { urlPlanet } = useParams();

  const [residences, setResidences] = useState([]);
  // Sprint 2 (Sandrine) Extraire les systèmes solaires disponibles
  const [selectedSolarSystem, setSelectedSolarSystem] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState(urlPlanet || "");

  const [selectedEnvironment, setSelectedEnvironment] = useState("");
  const [selectedChambres, setSelectedChambres] = useState("");
  const [selectedLits, setSelectedLits] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [criteres, setCriteres] = useState(false);
  const [mask, setMask] = useState(false);
  // const [filteredDestinations, setFilteredDestinations] = useState([]);

  useEffect(() => {
    const fetchResidences = async () => {
      try {
        const response = await fetch("http://localhost:3310/");
        const data = await response.json();
        setResidences(data);
      } catch (error) {
        console.error("Error fetching data from json", error);
      }
    };
    fetchResidences();
  }, []);

  // Sprint 2 (Sandrine) Extraire les systèmes solaires disponibles
  // Sprint 2 (Sandrine) utilisation de new et Set pour éliminer les eventuels doublons
  // => A METTRE DANS UN COMPOSANT SEPARE ?
  // Sprint 2 (Sandrine) Extraire les systèmes solaires disponibles
  // Sprint 2 (Sandrine) utilisation de new et Set pour éliminer les eventuels doublons
  // => A METTRE DANS UN COMPOSANT SEPARE ?
  const solarSystems = Array.from(
    new Set(residences.map((dest) => dest.SolarSystem))
  );

  // Sprint 2  (Sandrine) Extraire les planètes en fonction du système solaire sélectionné
  // => A METTRE DANS UN COMPOSANT SEPARE ?
  // Sprint 2  (Sandrine) Extraire les planètes en fonction du système solaire sélectionné
  // => A METTRE DANS UN COMPOSANT SEPARE ?
  const planets = selectedSolarSystem
    ? Array.from(
        new Set(
          residences
            .filter((dest) => dest.SolarSystem === selectedSolarSystem)
            .map((dest) => dest.Planet)
        )
      )
    : [];

  // Sprint 2  (Sandrine) Extraire les environnements en fonction de la planète sélectionnée
  // => A METTRE DANS UN COMPOSANT SEPARE ?
  // Sprint 2  (Sandrine) Extraire les environnements en fonction de la planète sélectionnée
  // => A METTRE DANS UN COMPOSANT SEPARE ?
  const environments = selectedPlanet
    ? Array.from(
        new Set(
          residences
            .filter((dest) => dest.Planet === selectedPlanet)
            .flatMap((dest) => dest.environmentCaract) || []
        )
      )
    : [];

  // Sprint 2  (Sandrine) Filtrer les destinations en fonction des sélections
  // => A METTRE DANS UN COMPOSANT SEPARE ?
  const filteredDestinations = residences
    .filter(
      (dest) =>
        (!selectedSolarSystem || dest.SolarSystem === selectedSolarSystem) &&
        (!selectedPlanet || dest.Planet === selectedPlanet) &&
        (!selectedEnvironment ||
          dest.environmentCaract.includes(selectedEnvironment)) &&
        (!selectedChambres || dest.Rooms >= selectedChambres) &&
        (!selectedLits || dest.Beds >= selectedLits) &&
        (!selectedBudget || dest.Price >= selectedBudget)
    )
    // Sprint 3 (Sandrine) ajout du .map pour création des props à passer à DestinationList.jsx pour la modal détails
    .map((dest) => ({
      Id: dest.Id,
      Name: dest.Name,
      imgSrc: dest.imgSrc,
      Description: dest.Description,
      Rooms: dest.Rooms,
      piscine: dest.piscine,
      Price: dest.Price,
    }));

  // const filterDestinations = () => {
  //   setFilteredDestinations(
  //     residences
  //       .filter(
  //         (dest) =>
  //           (!selectedSolarSystem ||
  //             dest.SolarSystem === selectedSolarSystem) &&
  //           (!selectedPlanet || dest.Planet === selectedPlanet) &&
  //           (!selectedEnvironment ||
  //             dest.environmentCaract.includes(selectedEnvironment)) &&
  //           (!selectedChambres || dest.Rooms >= selectedChambres) &&
  //           (!selectedLits || dest.Beds >= selectedLits) &&
  //           (!selectedBudget || dest.Price >= selectedBudget)
  //       )
  //       .map((dest) => ({
  //         Id: dest.Id,
  //         Name: dest.Name,
  //         imgSrc: dest.imgSrc,
  //         Description: dest.Description,
  //         Rooms: dest.Rooms,
  //         piscine: dest.piscine,
  //         Price: dest.Price,
  //       }))
  //   );
  // };

  // Sprint 3 (Lorys)Afficher le composant Criteres
  const handleCriteres = () => {
    setCriteres(!criteres);
    setMask(!mask);
  };

  return (
    <div className="destinations-container">
      <div className="BgImg">
        <div className="destinationsComponent">
          <div className="selectSolarSystemContainer">
            <label htmlFor="solarSystem"> . </label>
            <select
              id="solarSystem"
              value={selectedSolarSystem}
              onChange={(e) => {
                setSelectedSolarSystem(e.target.value);
                selectedPlanet("");
                selectedEnvironment("");
              }}
            >
              <option value="">Sélectionnez un système Solaire</option>
              {solarSystems.map((system) => (
                <option key={system} value={system}>
                  {system}
                </option>
              ))}
            </select>
          </div>
          <div className="selectPlanetContainer">
            {selectedSolarSystem && (
              <>
                <h3 className="planetTitle">
                  Planètes du système "{selectedSolarSystem}""
                </h3>
                <div className="listPlanetsContainer">
                  {planets.map((planet) => (
                    <CaracteristiqueButton
                      key={planet}
                      caracteristique={planet}
                      onClick={() => {
                        setSelectedPlanet(planet);
                        setSelectedEnvironment("");
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <hr className=".breakLineContainer " />
      <h3 className="environmentTitle">Environnements sur {selectedPlanet}</h3>
      <div className="filters-container">
        <div className="selectEnvironmentContainer">
          {selectedPlanet && (
            <>
              {environments.map((environment) => (
                <CaracteristiqueButton
                  key={environment}
                  caracteristique={environment}
                  onClick={() => setSelectedEnvironment(environment)}
                />
              ))}
            </>
          )}
        </div>
        <div className="filter">
          <button
            type="button"
            onClick={handleCriteres}
            className="criteres-button"
          >
            <img src={filter} alt="" />

            <p className="label-criteres">Critères</p>
          </button>
          {criteres === true && (
            <Criteres
              setCriteres={setCriteres}
              setMask={setMask}
              setSelectedLits={setSelectedLits}
              setSelectedChambres={setSelectedChambres}
              setSelectedBudget={setSelectedBudget}
            />
          )}
        </div>
        <button
          className="invisible-button"
          type="button"
          onClick={handleCriteres}
        >
          <div
            className={`mask ${mask ? "visible animation-enter" : "hidden animation-exit"}`}
          >
            <p> mask</p>
          </div>
        </button>
      </div>
      <hr className=".breakLineContainer margin-breakline" />
      <div className="filteredDestinationsContainer">
        {filteredDestinations.length > 0 && (
          <div className="listDestinations">
            <div>
              <DestinationList destinations={filteredDestinations} />
            </div>
          </div>
        )}
      </div>

      <div className="linksContainer">
        <button className="links" type="button">
          VOIR LE MEILLEUR MOMENT POUR PARTIR
        </button>
        <button className="links" type="button">
          <Link className="linkButton" to="/contact">
            ME CONTACTER POUR PERSONNALISER
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Destinations;
