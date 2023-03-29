      // Get elements
        const openModalBtn = document.getElementById('open-modal-btn');
        const openModalBtnhero = document.getElementById('hero-btn-bue');
        const openModalBtnmobile = document.getElementById('open-modal-btn-mobile');
        const closeModalBtn = document.getElementById('close-modal-btn');
        const closeModalThankyou = document.getElementById('close-modal-thankyou');
        const modalContainer = document.getElementById('modal-container');
        const modalForm = document.getElementById('modal-form');
        const modalThankyou = document.getElementById('modal-thankyou');

        // Show modal
function showModal() {
  modalContainer.style.opacity = '0'; // Додаємо першу анімацію
  modalContainer.style.display = 'block';
  setTimeout(() => {
    modalContainer.style.opacity = '1'; // Додаємо другу анімацію
  }, 10);
}
        function showModalThank() {
          modalThankyou.style.display = 'block';
        }

        // Hide modal
function hideModal() {
  modalContainer.style.opacity = 0;
  setTimeout(() => {
    modalContainer.style.display = 'none';
    modalContainer.style.opacity = 1;
  }, 500); // тривалість анімації + затримка
}
        

        
        function handleSubmit(event) {
          event.preventDefault();
          hideModal();
          modalThankyou.style.display = 'block';
        }

        // Event listeners
        openModalBtn.addEventListener('click', showModal);
        openModalBtnhero.addEventListener('click', showModal);
        openModalBtnmobile.addEventListener('click', showModal);
        closeModalBtn.addEventListener('click', hideModal);
       closeModalThankyou.addEventListener('click', () => {
          modalThankyou.style.display = 'block';
        });
        


const toggleBtn = document.getElementById("toggle-btn-sendTT");
const modal = document.getElementById("modal-thankyou");
const lastmodal = document.getElementById("modal-container");
const closeBtn = modal.querySelector(".close-button-thank-you");
//const backgroundColor = document.querySelector(".leave-background-color")

// заполни поля Name + Email + phone
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const CardInput = document.getElementById("cardnumber");
var phonePattern = /^\d{9}$/;
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phoneError = document.getElementById("phone-error");
toggleBtn.addEventListener("click", (e) => {
  e.preventDefault()

 

  if (nameInput.value && surnameInput.value && emailInput.value && emailPattern.test(emailInput.value) && phonePattern.test(phoneInput.value) && CardInput.value)
  
  {
    lastmodal.style.display = "none";
    modal.style.display = "block";
    
  }


  else
  {
    
 if (!nameInput.value ) {
   phoneError.innerHTML = "Name is empty.";
   return false;
 }
 else if (!surnameInput.value ) {
   phoneError.innerHTML = "Surname is empty.";
   return false;
 }
     else if (!emailInput.value) {
   phoneError.innerHTML = "Email is empty.";
   return false;
 }
    else if (!emailPattern.test(emailInput.value)) {
   phoneError.innerHTML = "Email is Invalid.";
  return false;
 }
    else if (!emailPattern.test(emailInput.value)) {
   phoneError.innerHTML = "Email is Invalid.";
   return false;
  
 }
     else if (!phoneInput.value) {
   phoneError.innerHTML = "Phone is empty.";

    return false;
 }
    else if (!phonePattern.test(phoneInput.value)) {
   phoneError.innerHTML = "Invalid phone number.";

    return false;
    } 
        else if (!CardInput.value) {
   phoneError.innerHTML = "Cart nubmer is empty.";

    return false;
 }
   
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