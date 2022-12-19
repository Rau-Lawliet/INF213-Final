let date = new Date();
document.getElementById('date').innerHTML =  date.getUTCDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

const hamburger = document.querySelector(".hamburger");
const bar = document.querySelectorAll(".bar");
const navMenu = document.querySelector(".nav-menu");
const sovaImg = document.querySelector(".sova-img");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bar.forEach((el) => {
    el.classList.toggle("active");
  });
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    bar.forEach((el) => {
      el.classList.remove("active");
    });
  }