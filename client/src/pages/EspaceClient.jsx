import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DestinationList from "../components/DestinationList";
import "./EspaceClient.css";

function EspaceClient() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (!token || !storedUsername) {
      navigate("/connexion");
    } else {
      setUsername(storedUsername);
    }
  }, [navigate]);

  useEffect(() => {
    const listRes = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
      } catch (err) {
        console.error("Error fetching data from json", err);
      }
    };

    listRes();
  }, []);

  // FETCH RESIDENCE
  const [favoris, setFavoris] = useState([]);
  const [residence, setResidence] = useState([]);
  useEffect(() => {
    const listRes = async () => {
      try {
        const response = await fetch("http://localhost:3310/");
        const data = await response.json();
        setResidence(data);
      } catch (error) {
        console.error("Error fetching data from json", error);
      }
    };
    listRes();
  }, []);
  // FIN FETCH RESIDENCE

  useEffect(() => {
    const IdsFavoris = localStorage.getItem("favorisIds");
    setFavoris(IdsFavoris);
  }, [favoris]);
  console.info(favoris);

  const isFavorite = residence.filter((resi) => favoris.includes(resi.Id));
  console.info(isFavorite);
  return (
    <div className="espace-client-container">
      <div className="grid">
        <div className="left">
          <ul className="menu-top">
            <h1 className="salutation">Bonjour {username}</h1>
            <li>|MES RESERVATIONS|</li>

            <hr />
            <li>|MES FAVORIS|</li>
            <hr />
            <li>|MON HISTORIQUE|</li>
            <hr />
            <li>|MES TICKETS D'AIDE|</li>
            <hr />
            <li>|DESTINATIONS POPULAIRES|</li>
          </ul>
          <div className="menu-bottom">
            <p>|PARAMETRE UTILISATEUR|</p>
            <div>
              <p>|FAQ|</p>
              <p>|LANGAGE|</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="filteredDestinationsContainer-2">
            <DestinationList destinations={isFavorite} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EspaceClient;
