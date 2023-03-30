const toggleBtn = document.getElementById("toggle-btn-send");
const modal = document.getElementById("modal-thankyou");
const lastmodal = document.getElementById("modal-leave");
const closeBtn = modal.querySelector(".close-button-thank-you");
const backgroundColor = document.querySelector(".leave-background-color");


// заполни поля Name + Email + phone
const nameInput = document.getElementById("name-leave");
const emailInput = document.getElementById("email-leave");
const phoneInput = document.getElementById("tel-leave"); 
const commentInput = document.getElementById("leave-comment");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault()

  if (!nameInput.value) { 
  } else if (!emailInput.value) {
  } else if (!phoneInput.value) {
  } else if (!commentInput.value) {
  } else {
    lastmodal.style.display = "none";
    modal.style.display = "block";
    backgroundColor.style.position = "unset";
  }  

});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {

  if (event.target === modal ) {

    modal.style.display = "none";
  }
});