const btnMobile = document.querySelector(".mobile_menu");

const toogleMenu = () => {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
};

btnMobile.addEventListener("click", toogleMenu);
