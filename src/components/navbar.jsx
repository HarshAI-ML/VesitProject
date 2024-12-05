import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";


const Navbar = () => {
    const { t } = useTranslation("common");


  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://tse4.mm.bing.net/th?id=OIP.05qb5mT_CO-lOxwjiYo4vwHaEk&pid=Api&P=0&h=180" alt="Phygital Logo" />
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
</ul>

      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
