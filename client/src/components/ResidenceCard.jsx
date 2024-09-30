import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ResidenceCard.css";

function ResidenceCard({ imgSrc, name, id, description, piscine, price }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const handleDetail = (destinationId) => {
    navigate(`/destination/${destinationId}`);
  };

  useEffect(() => {
    const storedFavoris = JSON.parse(localStorage.getItem("favorisIds")) || [];
    setIsFavorite(storedFavoris.includes(id));
  }, [id]);

  const toggleFavoris = () => {
    setIsFavorite((prevIsFavorite) => {
      let updatedFavoris = JSON.parse(localStorage.getItem("favorisIds")) || [];

      if (prevIsFavorite) {
        updatedFavoris = updatedFavoris.filter((favId) => favId !== id);
      }
      if (!updatedFavoris.includes(id)) {
        updatedFavoris.push(id);
      }

      localStorage.setItem("favorisIds", JSON.stringify(updatedFavoris));
      return !prevIsFavorite;
    });
  };

  return (
    <div
      key={id}
      className="destinationItem"
      // initial={{
      //   opacity: 0,
      // }}
      // animate={{
      //   opacity: 1,
      //   x: 0,
      // }}
      // transition={{ duration: 0.5 }}
    >
      <div className="residence-image">
        <img className="main-img" src={`../../public/${imgSrc}`} alt={name} />
        <div className="modal">
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Piscine:</strong> {piscine}
          </p>
          <p>
            <strong>Price Per Night:</strong> {price}
          </p>
          <button
            className="detailsResidenceButton"
            type="button"
            onClick={() => handleDetail(id)}
          >
            DETAILS
          </button>
        </div>
      </div>
      <h3 className="destinationTitle">{name}</h3>
      <button type="button" className="favorite" onClick={toggleFavoris}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

ResidenceCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  piscine: PropTypes.number.isRequired,
};

export default ResidenceCard;
