const menu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close-menu");
const navMobile = document.querySelector("#mobile-navbar");

[menu, closeMenu].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    navMobile.classList.toggle("active");
  });
});
