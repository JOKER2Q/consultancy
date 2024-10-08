import React, { useContext } from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import "./header.css";
import Setting from "../Setting";
import { Context } from "../../context/Context";
const Header = () => {
  window.addEventListener("scroll", () => {
    const btn = document.querySelector(".scroll-to-top");
    const header = document.querySelector("header");
    if (window.scrollY >= 500 && btn) btn.classList.add("active");
    else btn && btn.classList.remove("active");
    if (window.scrollY >= 600 && header) header.classList.add("scroll");
    else header && header.classList.remove("scroll");
  });
  window.onclick = () => {
    const langDiv = document.querySelector(".language > article.active");
    const navbar = document.querySelector("nav.navbar");
    langDiv && langDiv.classList.remove("active");
    navbar && navbar.classList.remove("active");
  };
  const context = useContext(Context);
  const language = context.language && context.language;


  return (
    <>
      <header className="center">
        <div className="container">
          <div className="flex">
            <Logo />
            <div className="center flex flex-1 justify-end nav-links">
              <NavLink to={"/"}>
                {language.header && language.header.home}
              </NavLink>
              <NavLink to={"our_services"}>
                {language.header && language.header.services}
              </NavLink>
              <NavLink to={"/about_us"}>
                {language.header && language.header.about_us}
              </NavLink>
              <NavLink to={"/contact_us"}>
                {language.header && language.header.contact_us}
              </NavLink>
              <NavLink to={"/join_us"}>
                {language.header && language.header.join_us}
              </NavLink>
              <Setting position="header" />
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  const nav = document.querySelector("nav.navbar");
                  nav && nav.classList.toggle("active");
                }}
                className="menu fa-solid fa-bars-staggered"
              ></i>
            </div>
          </div>
        </div>
      </header>
      <div
        className="center scroll-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <i className="fa-solid fa-angles-up "></i>
      </div>
      <nav className="navbar center">
        <div className="container">
          <NavLink to={"/"}>
            <i className="fa-solid fa-house"></i>
            {language.header && language.header.home}
          </NavLink>
          <NavLink to={"our_services"}>
            <i className="fa-solid fa-list-check"></i>
            {language.header && language.header.services}
          </NavLink>
          <NavLink to={"/about_us"}>
            <i className="fa-solid fa-circle-exclamation"></i>
            {language.header && language.header.about_us}
          </NavLink>
          <NavLink to={"/contact_us"}>
            <i className="fa-solid fa-phone-volume"></i>
            {language.header && language.header.contact_us}
          </NavLink>
          <NavLink to={"/join_us"}>
            <i className="fa-solid fa-circle-plus"></i>{" "}
            {language.header && language.header.join_us}
          </NavLink>
          <div className="flex align-center">
            <i
              onClick={(e) => {
                e.stopPropagation();
                document.querySelector("i.lang-i + div > div").click();
              }}
              className="fa-solid fa-earth-americas lang-i"
            ></i>
            <Setting position="navbar" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
