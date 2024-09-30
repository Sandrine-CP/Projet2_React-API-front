import LogoFooter from "../assets/images/logo_complet.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="grid">
        <img src={LogoFooter} alt="" />
        <div className="colonne-2">
          <h2>COSMONEST ET VOUS</h2>
          <ul>
            <li>Nous contacter</li>
            <li>Revue de presse spatial</li>
            <li>Politique de confidentialité</li>
            <li>Politique protection des donnees</li>
            <li>CGV & Mentions légales</li>
            <li>Nos prioritees</li>
            <li>Notre newsletter</li>
            <li>Paiement securise</li>
          </ul>
        </div>
        <div className="colonne-3">
          <h2>VOTRE SÉJOUR</h2>
          <ul>
            <li>Référentiel de voyage</li>
            <li>Notre personnels qualiflés</li>
            <li>Info Covid-Spatial</li>
            <li>Activité pendant sejour</li>
            <li>Les Bonnes pratiques</li>
          </ul>
        </div>
        <div className="colonne-4">
          <h2>RETROUVER UN VOYAGE</h2>
          <input type="text" placeholder="REFERENCE" />
          <button type="button">OK</button>
        </div>
      </div>
      <span className="copyright">All Rights Reserved © 2024 Cosmonest. </span>
    </footer>
  );
}
