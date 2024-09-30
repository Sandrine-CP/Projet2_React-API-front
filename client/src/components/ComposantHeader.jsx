import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/images/logo.png";
import menuIcon from "../assets/images-header/menu_icon.svg";
import closeIcon from "../assets/images-header/close_icon.svg";
import "./ComposantHeader.css";

function Header({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <div className={`header-holder ${className}`}>
      <header className="header">
        <nav className="header-nav">
          <Link className="link_logo" to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
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
        </nav>
      </header>
    </div>
  );
}
Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: "",
};
export default Header;
