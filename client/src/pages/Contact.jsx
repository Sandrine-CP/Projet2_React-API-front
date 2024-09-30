import "./Contact.css";
import imageBureauContact from "../assets/images/images006/photo-bureau-contact.jpg";

function Contact() {
  return (
    <>
      <h1 className="mainTitleContact">| NOUS CONTACTER |</h1>
      <div className="break-container">
        {" "}
        <hr className="breakLineContact" />
      </div>
      <div className="globalContainerContact">
        <div className="globalAddressContainerContact">
          <div className="addressContainerContact">
            <h2>Cosmonest, avec vous</h2>
            <address>
              21 bis, rue du site perdu, <br />
              73480 Bessans, France, <br />
              TERRE
            </address>
          </div>
          <div className="linkContainerContact">
            <a href="../App.jsx">CONTACTER L'AGENCE</a>
            <a href="../App.jsx">CONTACT PRESSE</a>
            <a href="../App.jsx">NOUS REJOINDRE</a>
          </div>
        </div>
        <div className="imageContainerContact">
          <img src={imageBureauContact} alt="bureau" />
        </div>
      </div>
    </>
  );
}

export default Contact;
