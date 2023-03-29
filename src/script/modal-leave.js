const toggleBtn = document.getElementById("toggle-btn-leave");
const modals = document.getElementById("modal-leave");
const closeBtn = modals.querySelector(".close-leave");
const backgroundColor = document.querySelector(".leave-background-color")

toggleBtn.addEventListener("click", () => {
  modals.style.display = "block";
  backgroundColor.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  backgroundColor.style.position = "fixed";
  backgroundColor.style.top = "0";
  backgroundColor.style.left = "0";
  backgroundColor.style.zIndex = "9999";
  backgroundColor.style.width = "100%";
  backgroundColor.style.height = "100%";

});

closeBtn.addEventListener("click", () => {
  modals.style.display = "none";
  backgroundColor.style.position = "unset";
});

window.addEventListener("click", (event) => {
  if (event.target === modals) {
    modals.style.display = "none";
    backgroundColor.style.position = "unset";
  }
});