import "./ListResidence.css";
import PropTypes from "prop-types";
import ResidenceCard from "./ResidenceCard";
import "./ResidenceCard.css";
import ComposantHeader from "./ComposantHeader";

function ListResidences({ residences }) {
  return (
    <div className="ListResidence">
      <ComposantHeader />
      {residences.map((residence) => (
        <ResidenceCard key={residence.id} imgSrc={residence.imgSrc} />
      ))}
      {/* <img src="https://place-hold.it/300x200" alt="" /> */}
    </div>
  );
}
ListResidences.propTypes = {
  residences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListResidences;
