import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import LanguageSwitcher from "../languageTranslate/LanguageSwitcher";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { t } = useTranslation("common");


  return (
    <nav className="navbar">
      <div className="logo">
        <img src="public/locales/images/kisanlogo.webp" alt="Phygital Logo" />
      </div>
      <ul className="nav-links">
  <li>
    <a href="#about">{t("navbar.about")}</a>
  </li>
  <li>
    <a href="#hire">{t("navbar.hire")}</a>
  </li>
  <li>
    <a href="#rent">{t("navbar.rent")}</a>
  </li>
  <li>
    <a href="#partnerships">{t("navbar.partnerships")}</a>
  </li>
  <li>
    <a href="#fpo">{t("navbar.fpo")}</a>
  </li>
  <li>
    <a href="#newsroom">{t("navbar.newsroom")}</a>
  </li>
  <li>
    <a href="#contact">{t("navbar.contact")}</a>
  </li>
  <li>
  <Link to="/signup">{t("navbar.signup")}</Link>
  </li>
</ul>

      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
