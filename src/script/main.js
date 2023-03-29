// import './modal-leave';
// import './thankyou';
// import './modals';
// import './modal';
// import './mobile-menu';
// import './modal-for-mobile-menu';
// import './swiper-our-prod';
// import './swiper';
// import './swipers';

!(function (e) {
    'function' != typeof e.matches &&
      (e.matches =
        e.msMatchesSelector ||
        e.mozMatchesSelector ||
        e.webkitMatchesSelector ||
        function (e) {
          for (
            var t = this,
              o = (t.document || t.ownerDocument).querySelectorAll(e),
              n = 0;
            o[n] && o[n] !== t;
  
          )
            ++n;
          return Boolean(o[n]);
        }),
      'function' != typeof e.closest &&
        (e.closest = function (e) {
          for (var t = this; t && 1 === t.nodeType; ) {
            if (t.matches(e)) return t;
            t = t.parentNode;
          }
          return null;
        });
  })(window.Element.prototype);
  
  document.addEventListener('DOMContentLoaded', function () {
    /* Записываем в переменные массив элементов-кнопок и подложку.
        Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay = document.querySelector('.js-overlay-modal'),
      closeButtons = document.querySelectorAll('.js-modal-close');
  
    /* Перебираем массив кнопок */
    modalButtons.forEach(function (item) {
      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function (e) {
        /* Предотвращаем стандартное действие элемента. Так как кнопку разные
              люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
              Нужно подстраховаться. */
        e.preventDefault();
  
        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
              и будем искать модальное окно с таким же атрибутом. */
        var modalId = this.getAttribute('data-modal'),
          modalElem = document.querySelector(
            '.modal[data-modal="' + modalId + '"]'
          );
  
        /* После того как нашли нужное модальное окно, добавим классы
              подложке и окну чтобы показать их. */
        modalElem.classList.add('active');
        overlay.classList.add('active');
      }); // end click
    }); // end foreach
  
    closeButtons.forEach(function (item) {
      item.addEventListener('click', function (e) {
        var parentModal = this.closest('.modal');
  
        parentModal.classList.remove('active');
        overlay.classList.remove('active');
      });
    }); // end foreach
  
    document.body.addEventListener(
      'keyup',
      function (e) {
        var key = e.keyCode;
  
        if (key == 27) {
          document.querySelector('.modal.active').classList.remove('active');
          document.querySelector('.overlay').classList.remove('active');
        }
      },
      false
    );
  
    overlay.addEventListener('click', function () {
      document.querySelector('.modal.active').classList.remove('active');
      this.classList.remove('active');
    });
  }); // end ready
  
  const anchors = document.querySelectorAll('a[href*="#"]')
  
  const offset = 50 // значение смещения, которое вы хотите применить
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      const targetElement = document.getElementById(blockID)
      const topPos = targetElement.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: topPos - offset,
        behavior: 'smooth'
      })
    })
  }
  
//   ======================


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