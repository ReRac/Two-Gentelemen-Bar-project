// const toogleBtn = document.querySelector(".toogle-btn");
// const phoneNavbar = document.querySelector("phone-nav-list");

// toogleBtn.addEventListener("click", () => {
//   phoneNavbar.classList.toggle("active");
// });

// const hamburgerBtn = document.querySelector(".phone-menu-item");
// let hamburgerOpen = false;

// hamburgerBtn.addEventListener("click", () => {
//   if (!hamburgerOpen) {
//     hamburgerBtn.classList.add("open");
//     hamburgerOpen = true;
//   } else {
//     hamburgerBtn.classList.remove("open");
//     hamburgerOpen = false;
//   }
// });

function initMap() {
  const barLocation = { lat: 54.675914, lng: 25.215014 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: barLocation,
  });

  const marker = new google.maps.Marker({
    position: barLocation,
    map: map,
  });
}
window.initMap = initMap;
