const toggleBtn = document.getElementById("toggle-btn-leave");
const modals = document.getElementById("modal-leave");
const closeBtn = modals.querySelector(".close-leave");

toggleBtn.addEventListener("click", () => {
  modals.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modals.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modals) {
    modals.style.display = "none";
  }
});