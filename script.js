const btnMobile = document.querySelector(".mobile_menu");

const toogleMenu = (e) => {
  if (e.type === "touchstart") {
    e.preventDefault();
  }
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
  
};

btnMobile.addEventListener("click", toogleMenu);
btnMobile.addEventListener("touchstart", toogleMenu);

