let mbMenu = document.getElementById("mbMenu");
const petHeader = document.getElementById("petHeader");
const showList = document.getElementById("showList");

mbMenu.addEventListener("click", () => {
  petHeader.classList.toggle("showMenu");
  showList.classList.toggle("openList");
  mbMenu.classList.toggle("change");
});
