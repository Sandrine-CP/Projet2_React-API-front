import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./DestinationChoisie.css";
import ComposantHeader from "../components/ComposantHeader";
import IconePlanete from "../assets/images/iconePlanete.png";
import IconePiece from "../assets/images/iconePiece.png";
import IconeMaison from "../assets/images/iconeMaison.png";
import IconePiscine from "../assets/images/iconePiscine.png";
import IconeEnviron from "../assets/images/IconeEnviron.png";

function DestinationChoisie() {
  const [destination, setDestination] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const idDestination = id;

  useEffect(() => {
    const fetchResidences = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/destinationchoisie/${idDestination}`
        );
        const data = await response.json();
        setDestination(data);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data from json", error);
      }
    };
    fetchResidences();
  }, [idDestination]);

  // enlever index pour rapport a chaque residence
  const Background = `../../public/${destination.imgSrc}`;
  return (
    <div className="destination-choisie-container">
      <div
        className="background2"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <ComposantHeader />
        <p className="title">{destination.Planet}</p>
        {/* <p>{destination.Planet}</p> */}
      </div>
      <div className="bottom">
        <div className="details">
          {/* Detail technique */}
          {/* partie 1 des details techniques en haut de la boites "details techniques" */}
          <div className="detailPart1 detailTop">
            <div>
              <div>
                <h3 className="detailNomResidencePlanet">
                  |&nbsp;
                  <span className="gras policeTitre">{destination.Name}</span>
                  &nbsp;|&nbsp;
                  <span className="gras policeTitre">{destination.Planet}</span>
                  &nbsp;|
                </h3>
              </div>
              <div>
                <p>
                  <i>
                    {destination.Beds}&nbsp;lits - {destination.Baths}
                    &nbsp;salle de bains
                  </i>
                </p>
              </div>
            </div>
          </div>
          {/* partie 2 des details techniques en haut de la boites "details techniques" */}
          <div className="detailBot">
            <div className="detailPart2">
              <div className="exemple4">
                <img src={IconePlanete} alt="" className="IconeDesc" />
                <span>Système Solaire :&nbsp;</span>
                <span className="detailvar">{destination.SolarSystem}</span>
              </div>
              <hr />
              <div className="exemple4">
                <div className="IconeMaison">
                  <img src={IconeMaison} alt="" className="IconeDesc" />
                </div>
                <div>
                  <div>
                    <span className="detailType">Type de bien :&nbsp;</span>
                    <span className="detailvar">{destination.Type}</span>
                  </div>
                  <div>
                    <span className="detailAltitude">Altitude :&nbsp;</span>
                    <span>{destination.altitude}</span>
                  </div>
                  <div>
                    <span className="detailSize1">
                      Mesure résidence* :&nbsp;
                    </span>
                    <span className="detailvar">{destination.Size}</span>
                  </div>
                  <div className="positionAsterix">
                    <span className="asterix">*Indiqué en m²</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="exemple4">
                <div className="IconePiece">
                  <img src={IconePiece} alt="" className="IconeDesc" />
                </div>
                <div>
                  <div>
                    <span className="detailRooms">
                      Nombre de pièces :&nbsp;
                    </span>
                    <span>{destination.Rooms}</span>
                  </div>
                  <div>
                    <span className="detailBeds">Nombre de lit :&nbsp;</span>
                    <span>{destination.Beds}</span>
                  </div>
                  <div>
                    <span className="detailBaths">
                      Nombre de salle de bain :&nbsp;
                    </span>
                    <span>{destination.Baths}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* partie 3 des details techniques en haut de la boites "details techniques" */}
            <div className="detailPart3">
              <div className="exemple5">
                <div>
                  <div className="detailBio">
                    <div className="detailBio1">
                      <span>Description :</span>
                      <div />
                    </div>
                    <div>
                      <span className="detailBio2">
                        {destination.Description}
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="exemple6">
                    <div>
                      <span className="detailResiCaract1">
                        <div className="IconePiscine">
                          <img
                            src={IconePiscine}
                            alt=""
                            className="IconeDesc"
                          />
                        </div>
                        Spécificité :
                      </span>
                    </div>
                    <div>
                      <span>
                        <ul className="detailResiCaract2">
                          {isLoading &&
                            destination.ResidenceCaract.map((caract) => (
                              <li key={caract}>{caract}</li>
                            ))}
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* <hr /> */}
              <div className="exemple5">
                <img src={IconeEnviron} alt="" className="IconeDesc" />
                <div>
                  <div>
                    <span className="detailEnviCaract1">
                      Evenements environnants :
                    </span>
                  </div>
                  <div>
                    <span>
                      <ul className="detailEnviCaract2">
                        {isLoading &&
                          destination.environmentCaract.map((caract) => (
                            <li key={caract}>{caract}</li>
                          ))}
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons buttonsBas">
          <button type="button">VOIR LE MEILLEUR MOMENT POUR PARTIR</button>
          <button type="button">
            <Link className="linkButton" to={`/reservation/${idDestination}`}>
              JE VEUX
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationChoisie;
