function MenuCard(obj) {
  const card = document.createElement("div");
  card.classList.add("card-menu");
  const image = new Image();
  image.src = obj.image;
  card.appendChild(image);

  return card;
}

export default MenuCard;
