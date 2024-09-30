import ComposantHeader from "../components/ComposantHeader";
import "./Labels.css";
import logoVirtuoso from "../assets/images/images010/label-virtuoso.png";
import logoIso9001 from "../assets/images/images010/label-ISO9001.png";
import logoIso27001 from "../assets/images/images010/label-ISO27001.png";
import logoAstm from "../assets/images/images010/label-astm.png";

function Labels() {
  return (
    <div>
      <ComposantHeader />
      <h1 className="mainTitleLabels">| NOS LABELS ET NORMES CERTIFIES |</h1>
      <hr className="breakLineLabels" />
      <p>
        Garant d’un service d’exception et de qualité a la hauteur de nos
        clients unique, “Cosmonest” possède plusieurs labels et normes
        certifiant la qualité et le respect de nos voyageurs interstellaire.
      </p>
      <div className="labelsContainer1">
        <div className="labelsBloc Virtuoso">
          <img
            className="logoVirtuoso"
            src={logoVirtuoso}
            alt="logo label Virtuoso"
          />
          <p>
            En tant que partenaire privilégié Virtuoso, nous offrons des
            expériences de voyage ultra-luxueuses, conçues pour dépasser les
            attentes les plus élevées de nos clients.
          </p>
        </div>
        <div className="labelsBloc ATSM">
          <img
            className="logoAstm"
            src={logoAstm}
            alt="logo label ATSM International"
          />
          <p>
            Les normes ASTM International pour les vols spatiaux commerciaux
            garantissent que chaque voyage vers les étoiles est non seulement
            luxueux mais aussi conforme aux plus stricts critères de sécurité.
          </p>
        </div>
      </div>
      <hr className="breakLineLabels" />
      <div className="labelsContainer2">
        <div className="labelsBloc Iso27001">
          <img
            className="logoIso27001"
            src={logoIso27001}
            alt="logo certif afaq Iso 27001"
          />
          <p>
            La certification ISO 27001 assure que vos données personnelles et
            confidentielles sont protégées avec les plus hauts standards de
            sécurité. Voyagez en toute sérénité, vos informations sont en
            sécurité.
          </p>
        </div>
        <div className="labelsBloc Iso9001">
          <img
            className="logoIso9001"
            src={logoIso9001}
            alt="logo certif afaq Iso 9001"
          />
          <p>
            La certification ISO 9001 garantit une gestion exemplaire de la
            qualité à chaque étape de nos services. Elle assure une amélioration
            continue, synonyme d'une expérience client irréprochable et
            personnalisée.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Labels;
