import MenuCard from "../components/menuCard";

export default (function MenuSection() {
  const section = document.createElement("section");
  section.appendChild(MenuCard());
  return section;
})();
