import "./Criteres.css";
import { useState } from "react";
import PropTypes from "prop-types";
import closeButton from "../assets/images/close.svg";

function Criteres({
  setCriteres,
  setMask,
  setSelectedLits,
  setSelectedChambres,
  setSelectedBudget,
}) {
  const [budget, setBudget] = useState(NaN);
  const [nuits, setNuits] = useState(NaN);

  const numbersList = (number, iterator) => {
    const numbers = [];
    for (let i = 1; i <= number; i += iterator) {
      numbers.push(i);
    }
    return numbers;
  };

  const handleClose = () => {
    setCriteres(false);
    setMask(false);
  };

  const handleBudgetMax = (e) => {
    setBudget(e.target.value);
    setSelectedBudget(budget * nuits);
  };

  const handleBudgetNuit = (e) => {
    setNuits(e.target.value);
    setSelectedBudget(budget * nuits);
  };

  return (
    <div className="criteres-container">
      <header>
        <button className="close" type="button" onClick={handleClose}>
          <img src={closeButton} alt="the close button for this component" />
          <p>close</p>
        </button>
        <h1>Filtres</h1>
      </header>
      <section className="budget">
        <h2>Budget par nuit</h2>
        <div>
          <input
            type="range"
            name="budget-slider"
            min="1"
            max="200000"
            onChange={handleBudgetMax}
          />
          <p>{budget}</p>
        </div>
      </section>
      <section className="lits">
        <h2>Nombre de lits</h2>
        <div className="liste-lits">
          <button
            className="tout"
            type="button"
            onClick={() => setSelectedLits("")}
          >
            Tout
          </button>
          {numbersList(101, 15).map((e) => (
            <button key={e} type="button" onClick={() => setSelectedLits(e)}>
              {e}
            </button>
          ))}
        </div>
      </section>
      <section className="chambre">
        <h2>Nombre de chambres minimum</h2>
        <div className="liste-chambres">
          {" "}
          <button
            className="tout"
            type="button"
            onClick={() => setSelectedChambres("")}
          >
            Tout
          </button>
          {numbersList(44, 7).map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => setSelectedChambres(e)}
            >
              {e}
            </button>
          ))}
        </div>
      </section>
      <section className="date">
        <h2>date de reservation</h2>
        <div className="date-grid">
          <div className="calendar">
            <input type="date" name="" id="" />
            <p>date d'arrivée</p>
          </div>
          <div className="nuits">
            <input
              type="number"
              name=""
              id=""
              min="1"
              onChange={handleBudgetNuit}
            />
            <p>nombre de nuits</p>
          </div>
        </div>
      </section>
      <section className="budget-max">
        <h2>Budget Maximal</h2>
        {Number.isNaN(nuits) || Number.isNaN(budget) ? (
          <p>choisissez un nombre de nuits et un budget par nuit</p>
        ) : (
          <p>{nuits * budget}</p>
        )}
      </section>
    </div>
  );
}

Criteres.propTypes = {
  setCriteres: PropTypes.bool.isRequired,
  setMask: PropTypes.bool.isRequired,
  setSelectedChambres: PropTypes.func.isRequired,
  setSelectedLits: PropTypes.func.isRequired,
  setSelectedBudget: PropTypes.func.isRequired,
};

export default Criteres;
