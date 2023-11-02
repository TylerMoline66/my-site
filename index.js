const nav = document.getElementById("topNav");
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const navButton = document.querySelector("button[aria-expanded]");

function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);
}

navButton.addEventListener("click", toggleNav);

const clickableDiv = document.getElementById("clickableDiv");
const leftSticky = document.getElementById("leftSticky");

clickableDiv.addEventListener("click", () => {
  if (leftSticky.style.display === "none" || leftSticky.style.display === "") {
    leftSticky.style.display = "block";
  } else {
    leftSticky.classList.add("animate__slideOutDown");
    setTimeout(() => {
      leftSticky.style.display = "none";
      leftSticky.classList.remove("animate__slideOutDown");
    }, 800);
  }
});
