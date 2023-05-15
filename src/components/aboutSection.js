export default (function AboutSection() {
  const section = document.createElement("section");
  section.classList.add("about-section");
  const div = document.createElement("div");
  section.appendChild(div);
  const p = document.createElement("p");
  p.classList.add("about");
  p.textContent = `Welcome to [Pizza Store Name], where passion for pizza meets the
              art of flavor! We are an exceptional pizzeria dedicated to
              crafting mouthwatering pizzas that ignite your taste buds and
              leave you craving for more.`;
  div.appendChild(p);
  const button = document.createElement("button");
  button.classList.add("btn-menu");
  button.textContent = "Menu";
  div.appendChild(button);
  return section;
})();
