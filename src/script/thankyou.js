const toggleBtn = document.getElementById("toggle-btn-send");
const modal = document.getElementById("modal-thankyou");
const lastmodal = document.getElementById("modal-leave");
const closeBtn = modal.querySelector(".close-button-thank-you");

toggleBtn.addEventListener("click", () => {
    lastmodal.style.display = "none";
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