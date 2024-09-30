import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import ResidenceCard from "./ResidenceCard";
import "../pages/Destinations.css";

function DestinationList({ destinations }) {
  const [favoris, setFavoris] = useState(() => {
    const storedFavoris = localStorage.getItem("favorisIds");
    return storedFavoris ? JSON.parse(storedFavoris) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorisIds", JSON.stringify(favoris));
  }, [favoris]);

  const toggleFavoris = (favoriteID) => {
    setFavoris((prevFavoris) => {
      const updatedFavoris = prevFavoris.includes(favoriteID)
        ? prevFavoris.filter((favId) => favId !== favoriteID)
        : [...prevFavoris, favoriteID];
      return updatedFavoris;
    });
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    exit: {
      opacity: 0,
      duration: 0.3,
    },
  };

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div>
      <AnimatePresence>
        <motion.ul
          variants={list}
          initial="hidden"
          animate="visible"
          className="filteredDestinationsContainer"
        >
          {destinations.map((residence) => (
            <motion.li key={residence.id} variants={item}>
              <ResidenceCard
                key={residence.Id}
                imgSrc={residence.imgSrc}
                name={residence.Name}
                id={residence.Id}
                piscine={residence.piscine}
                price={residence.Price}
                description={residence.Description}
                isFavorite={favoris.includes(residence.Id)}
                toggleFavoris={toggleFavoris}
              />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
DestinationList.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default DestinationList;
