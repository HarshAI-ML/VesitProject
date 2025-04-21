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
    <Link to ="/about">{t("navbar.about")}</Link>
  </li>
  <li>
    <Link to ="/hire">{t("navbar.hire")}</Link>
  </li>
  <li>
    <Link to ="/rent">{t("navbar.rent")}</Link>
  </li>
  <li>
    <Link to ="/partnerships">{t("navbar.partnerships")}</Link>
  </li>
  <li>
    <Link to="/fpo">{t("navbar.fpo")}</Link>
  </li>
  <li>
    <Link to="/newsroom">{t("navbar.newsroom")}</Link>
  </li>
  <li>
    <Link to="/contact">{t("navbar.contact")}</Link>
  </li>
  <li>
  <Link to="/signup">{t("navbar.signup")}</Link>
  </li>
  <li>
  <Link to="/login">{t("navbar.login")}</Link>
  </li>
</ul>

      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
