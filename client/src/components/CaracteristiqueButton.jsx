import PropTypes from "prop-types";

function CaracteristiqueButton({ caracteristique, onClick }) {
  return (
    <div>
      <button type="button" onClick={() => onClick(caracteristique)}>
        {caracteristique}
      </button>
    </div>
  );
}
CaracteristiqueButton.propTypes = {
  caracteristique: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CaracteristiqueButton;
