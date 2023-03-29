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
        

        // Handle form submission
        function handleSubmit(event) {
          event.preventDefault();

          // Submit form using AJAX or fetch
          // ...

          // Show thank you modal
          //modalForm.reset();
          hideModal();
          modalThankyou.style.display = 'block';
        }

        // Event listeners
        openModalBtn.addEventListener('click', showModal);
        openModalBtnhero.addEventListener('click', showModal);
        openModalBtnmobile.addEventListener('click', showModal);
        closeModalBtn.addEventListener('click', hideModal);

        closeModalThankyou.addEventListener('click', () => {
        modalThankyou.style.display = 'none';

       closeModalThankyou.addEventListener('click', () => {
          modalThankyou.style.display = 'block';

        });