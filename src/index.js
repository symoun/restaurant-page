"use strict";
import "./style.scss";
import Header from "./components/header";
import AboutSection from "./components/aboutSection";
import MenuSection from "./components/menuSection";

const content = document.querySelector("#content");
const main = document.createElement("main");

content.appendChild(Header);
content.appendChild(main);
main.appendChild(AboutSection);
main.appendChild(MenuSection);

/* function createEl(htmlEl, attObj, childEl, parentEl) {
  const el = document.createElement(htmlEl);
  for (const [key, value] of Object.entries(attObj)) {
    el.setAttribute(key, value);
  }
  if (parentEl) {
    parentEl.appendChild(el);
  }
  return el;
} */
