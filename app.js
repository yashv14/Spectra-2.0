const countdown = () => {
  const eventDate = new Date('February 13, 2025 00:00:00').getTime(); // Set your event date here
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Calculating time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Updating the DOM
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Timer expires
  if (distance < 0) {
      clearInterval(timerInterval);
      document.getElementById("countdown").innerHTML = "Event Started!";
  }
};

// Update the timer every second
let timerInterval = setInterval(countdown, 1000);
/* Created by Tivotal */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
menu.classList.toggle("fa-times");
navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
themeToggler.classList.toggle("active");
};

window.onscroll = () => {
menu.classList.remove("fa-times");
navbar.classList.remove("active");
themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
btn.onclick = () => {
  let color = btn.style.background;
  document.querySelector(":root").style.setProperty("--theme-color", color);
};
});

var swiper = new Swiper(".home-slider", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",
coverflowEffect: {
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2,
  slideShadows: true,
},
loop: true,
autoplay: {
  delay: 3000,
  disableOnInteraction: false,
},
});

var swiper = new Swiper(".review-slider", {
slidesPerView: 1,
grabCursor: true,
loop: true,
spaceBetween: 10,
breakpoints: {
  0: {
    slidesPerView: 1,
  },
  700: {
    slidesPerView: 2,
  },
  1050: {
    slidesPerView: 3,
  },
},
autoplay: {
  delay: 5000,
  disableOnInteraction: false,
},
});



