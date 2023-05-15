function MenuCard(obj) {
  const card = document.createElement("div");
  card.classList.add("card-menu");
  const image = new Image();
  image.classList.add("image-card-menu");
  image.src = obj.image;
  card.appendChild(image);

  const divContent = document.createElement("div");
  divContent.classList.add("menu-text");
  const menuTitle = document.createElement("h2");
  const menuDescription = document.createElement("p");

  card.appendChild(divContent);
  divContent.appendChild(menuTitle);
  divContent.appendChild(menuDescription);
  menuTitle.textContent = obj.title;
  menuDescription.textContent = obj.description;

  return card;
}

export default MenuCard;
