import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Resas.css";

function Resas() {
  const { id } = useParams();
  const idDestination = id; // Déclaration de l'état residence
  const [destination, setDestination] = useState(idDestination || {});
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResidences = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/residences/${idDestination}`
          // `http://localhost:3310/residence`
        );
        const data = await response.json();
        setDestination(data);
      } catch (error) {
        console.error("Error fetching data from json", error);
      }
    };
    fetchResidences();
  }, [idDestination]);
  return (
    <div className="body">
      <div className="reservation__main">
        <div className="reservation__main__title">
          <h1>| Réservez votre destination</h1>
        </div>
        <div className="reservation__content">
          <div className="reservation__column__left">
            {/* Start block destination gauche */}

            <h2 className="reservation__title">Votre destination</h2>

            <div className="destination__info__details">
              <div>
                <img
                  className="destination__infos__img"
                  src={`../../public/${destination.imgSrc}`}
                  alt={destination.Name}
                />
              </div>
              <div className="destination__info__residence">
                <p>
                  Système :
                  <span className=".alignRight">
                    {" "}
                    {destination.SolarSystem}
                  </span>
                </p>

                <p>
                  Planète :
                  <span className=".alignRight"> {destination.Planet}</span>
                </p>

                <p>
                  Résidence :
                  <span className=".alignRight"> {destination.Name}</span>
                </p>

                <p>
                  Type :<span className=".alignRight"> {destination.Type}</span>
                </p>
                <p>Description :</p>
                <p>
                  <span className=".alignRight">{destination.Description}</span>
                </p>
              </div>
            </div>

            <div className="destination__info__details">
              <h3 className="reservation__title"> Détails</h3>

              <p>
                Surface Résidence (m²) :
                <span className=".alignRight"> {destination.Size}</span>
              </p>

              <p>
                Nombre de pièces :
                <span className=".alignRight"> {destination.Rooms}</span>
              </p>

              <p>
                Nombre de lits :
                <span className=".alignRight"> {destination.Beds}</span>
              </p>

              <p>
                Nombre de salles de bain :
                <span className=".alignRight"> {destination.Baths}</span>
              </p>
              <p>
                Altitude :
                <span className=".alignRight"> {destination.altitude}</span>
              </p>
            </div>
          </div>{" "}
          {/* End block destination gauche */}
          {/* bloc reservation à droite */}
          <div className="reservation__column__right">
            <h2 className="reservation__title">Votre réservation</h2>

            <div className="dates_duration">
              <h3 className="reservation__title">Vos dates de séjour</h3>

              <form>
                <label className="label__reservation__dates">
                  <p>Date d'arrivée</p>
                  <input type="date" className="arrivalDate" />
                </label>
                <label className="">
                  <p>Date de départ</p>
                  <input type="date" className="departure_date" />
                </label>
                <label className="label__stay__duration">
                  <p>Durée </p>
                  <input type="number" size="10" className="stay_length" />
                </label>
              </form>
              {/* <label className="label__stay__duration">
                <p>Durée du séjour</p>
                <input type="number" className="stay_length" />
              </label> */}
            </div>

            <div className="reservation__facturation">
              <h3 className="reservation__title">Prix et détails</h3>
            </div>
            <div className="destination__info__details">
              <p>
                Tarif par nuit : <strong>{destination.Price}</strong>
              </p>
              {/* <p> Tarif du séjour : <strong>{destination.Price}</strong></p> */}
              <p>Tarif transport :</p>
              <p>Taxes planétaire:</p>
              <p>Taxes systeme stellaire:</p>
              <p>Taxes galactique:</p>
              <hr />
              <p>Total : </p>
            </div>

            <div className="facturation__Info">
              <form className="facturation__Info">
                <label className="label_facturation">
                  <p>E-mail</p>
                  <input
                    type="text"
                    className="input_reservation"
                    placeholder="Indiquez votre e-mail"
                  />
                </label>
                <label className="label_facturation">
                  <p>IBAN</p>
                  <input
                    className="input_reservation"
                    type="text"
                    placeholder="Indiquez votre IBAN"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        {/* End bloc reservation à droite */}
        <div className="buttons">
          <button className="submit_reservation" type="button">
            VALIDER MA RESERVATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resas;
