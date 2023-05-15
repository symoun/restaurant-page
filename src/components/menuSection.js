import MenuCard from "./menuCard";
import FourCheese from "../images/four-cheese.jpg";
import ArugulaCreamCheese from "../images/arugula-creamcheese.jpg";
import Margherita from "../images/pizza-margerita.jpg";

export default (function MenuSection() {
  const section = document.createElement("section");
  section.classList.add("menu-section");
  section.setAttribute("id", "menu");
  const h1 = document.createElement("h1");
  section.appendChild(h1);
  h1.textContent = "Menu";

  const list = [
    {
      image: FourCheese,
      title: "Four Cheese Pizza",
      description:
        "Indulge your taste buds with the tantalizing delight of a Four Cheese Pizza, a culinary masterpiece that combines the richness of multiple cheeses to create a symphony of flavors. This pizza is a celebration of cheese lovers, an irresistible combination of gooey, melted cheeses that will leave you craving for more with every bite.",
    },
    {
      image: ArugulaCreamCheese,
      title: "Arugula with Cream Cheese Pizza",
      description:
        "Experience a delightful harmony of flavors and textures with the captivating combination of arugula and cream cheese. This enticing pairing brings together the vibrant freshness of arugula leaves and the creamy indulgence of luscious cream cheese, resulting in a culinary symphony that will tantalize your taste buds.",
    },
    {
      image: Margherita,
      title: "Pizza Margherita",
      description:
        "The star of the show is the creamy and elastic buffalo mozzarella, expertly scattered across the pizza. Sourced from the milk of water buffaloes, this cheese boasts a delicate and milky flavor, which harmonizes beautifully with the other ingredients. As the pizza bakes, the mozzarella melts and forms delightful pools of creamy goodness, creating a luscious, molten layer that blankets the entire pie.",
    },
  ];
  for (const item of list) {
    section.appendChild(MenuCard(item));
  }
  return section;
})();
