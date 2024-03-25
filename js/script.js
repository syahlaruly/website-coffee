// togle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik
document.querySelector("#hamburger-menu").onclic = () => {
  navbarNav.classList.toggle("active");
};

// togle class active untuk pencarian
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
