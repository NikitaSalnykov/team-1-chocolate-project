const toggleBtn = document.getElementById("toggle-btn-send");
const modal = document.getElementById("modal-thankyou");
const lastmodal = document.getElementById("modal-leave");
const closeBtn = modal.querySelector(".close-button-thank-you");
const backgroundColor = document.querySelector(".leave-background-color")

// заполни поля Name + Email + phone
const nameInput = document.getElementById("name-leave");
const emailInput = document.getElementById("email-leave");
const phoneInput = document.getElementById("tel-leave"); 

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault()

  if (!nameInput.value) { 
    alert("Name is empty");
  } else if (!emailInput.value) {
    alert("Email is empty");
  } else if (!phoneInput.value) {
    alert("Phone is empty");
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