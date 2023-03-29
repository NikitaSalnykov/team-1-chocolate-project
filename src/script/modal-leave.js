const toggleBtn = document.getElementById("toggle-btn-leave");
const modal = document.getElementById("modal-leave");
const closeBtn = modal.querySelector(".close-leave");

toggleBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});