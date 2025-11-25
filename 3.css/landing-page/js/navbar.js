const navigation = document.querySelector("header nav .navigation");
const closeNavigation = document.querySelector("header nav .navigation .close");
const menuHamburger = document.querySelector("header nav .hamburger");

if (!navigation || !closeNavigation || !menuHamburger) {
  console.error(
    "Navigation elements not found in the DOM. Please check your HTML structure."
  );
} else {
  closeNavigation.addEventListener("click", function () {
    navigation.classList.remove("open");
  });

  menuHamburger.addEventListener("click", function () {
    navigation.classList.add("open");
  });
}
