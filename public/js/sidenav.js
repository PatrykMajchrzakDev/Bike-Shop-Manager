let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".searchButton");

btn.onclick = function () {
  sidebar.classList.toggle("sidenavActive");
};

searchBtn.onclick = function () {
  sidebar.classList.toggle("sidenavActive");
};
