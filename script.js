const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const links = navLinks.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

});
