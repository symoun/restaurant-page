import IconLogo from "../images/pizza-svgrepo-com.svg";

export default (function Header() {
  const header = document.createElement("header");
  header.classList.add("header");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  header.appendChild(logo);

  const iconLogo = new Image();
  iconLogo.classList.add("logo-icon");
  logo.appendChild(iconLogo);
  iconLogo.src = IconLogo;
  const ul = document.createElement("ul");
  header.appendChild(ul);

  const navigation = ["about", "menu", "contact"];

  for (const item of navigation) {
    const li = document.createElement("li");
    ul.appendChild(li);
    const a = document.createElement("a");
    a.setAttribute("href", ` #${item}`);
    a.textContent = `${item[0].toUpperCase()}${item.slice(1)}`;
    li.appendChild(a);
  }

  return header;
})();
