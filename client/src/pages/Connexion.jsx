import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import imageLogoTexte from "../assets/images/logoTexte.png";
import menuIcon from "../assets/images-header/menu_icon.svg";
import closeIcon from "../assets/images-header/close_icon.svg";
import "./Connexion.css";

function Connexion() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

  const headerMenuRef = useRef(null);

  useEffect(() => {
    const headerMenu = headerMenuRef.current;

    if (isMenuOpen) {
      headerMenu.classList.add("active");
    } else {
      headerMenu.classList.remove("active");
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleMenuClick();
    }
  };
  const handleAuth = async () => {
    try {
      if (isRegister) {
        await axios.post("http://localhost:3310/register", {
          username,
          email,
          password,
        });
        console.info("User registered successfully");
      } else {
        const response = await axios.post("http://localhost:3310/login", {
          email,
          password,
        });
        if (response && response.data) {
          console.info("Login successful", response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.username);
          navigate("/espaceclient"); // Redirige vers /espaceclient après la connexion
        } else {
          throw new Error("Login failed");
        }
      }
    } catch (error) {
      console.info(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="background">
      <div className="top-logo">
        <Link className="link_logo" to="/">
          <img className="logoTexte" src={imageLogoTexte} alt="" />
        </Link>
      </div>
      <div className="header-nav__inner">
        <button
          className="device-menu"
          onClick={handleMenuClick}
          onKeyDown={handleKeyDown}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          type="button"
        >
          <img
            className="header_icon"
            src={isMenuOpen ? closeIcon : menuIcon}
            alt="icon_menu"
          />
        </button>
        <ul className="header-menu-list" ref={headerMenuRef}>
          <li className="header-menu-item">
            <Link to="/destinations">| Nos destinations |</Link>
          </li>
          <li className="header-menu-item">
            <Link to="/nosprestations">| Nos prestations |</Link>
          </li>
          <li className="header-menu-item">
            <Link to="/contact">| Nous contacter |</Link>
          </li>
          <li className="header-menu-item">
            <Link to="/connexion">| Se connecter |</Link>
          </li>
        </ul>
      </div>

      <div className="containerConnection">
        <div className="buttonAction">
          <button
            type="button"
            className="btnA"
            onClick={() => setIsRegister(true)}
          >
            S'inscrire
          </button>
          <button
            type="button"
            className="btnLogin"
            onClick={() => setIsRegister(false)}
          >
            Se connecter
          </button>
        </div>
        <div className="blockInput">
          {isRegister && (
            <input
              className="identification"
              placeholder="Nom d'utilisateur"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            className="identification"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr />
        </div>

        <button
          className="bouton-authentification"
          type="button"
          onClick={handleAuth}
        >
          {isRegister ? "S'inscrire" : "Se connecter"}
        </button>
        <div className="mdpOublie">mot de passe oublié</div>
      </div>
    </div>
  );
}

export default Connexion;
