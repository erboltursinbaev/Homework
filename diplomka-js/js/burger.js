export const burgerMenu = () => {
const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__menu");
const menu = document.querySelector(".menu__list");

function toggleMenu(){
headerMenu.classList.toggle("header__menu--open");
  burger.classList.toggle("burger--open");
}


burger.addEventListener("click", () => {
  toggleMenu();
});

  

menu.addEventListener("click", (e) => {
 const li = e.target.closest("li");
 
  if(li){
  toggleMenu();
}});

let startX = 0;
document.ontouchend = e => {
  let diff = e.changedTouches[0].clientX - startX;

  
  if (diff < -50) {
    headerMenu.classList.add("header__menu--open");
    burger.classList.add("burger--open");
  }

    if (diff > 50) {
    headerMenu.classList.remove("header__menu--open");
    burger.classList.remove("burger--open");
  }
};
};
