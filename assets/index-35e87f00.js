(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();new Swiper(".swiper-our-prod",{direction:"horizontal",loop:!1,breakpoints:{375:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2.5,spaceBetween:0},1200:{slidesPerView:4,spaceBetween:0}},pagination:{el:".swiper-pagination1",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});new Swiper(".swipers",{direction:"horizontal",loop:!1,breakpoints:{375:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:0},1200:{slidesPerView:3,spaceBetween:0}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(o){for(var n=this,l=(n.document||n.ownerDocument).querySelectorAll(o),e=0;l[e]&&l[e]!==n;)++e;return Boolean(l[e])}),typeof t.closest!="function"&&(t.closest=function(o){for(var n=this;n&&n.nodeType===1;){if(n.matches(o))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");t.forEach(function(l){l.addEventListener("click",function(e){e.preventDefault();var s=this.getAttribute("data-modal"),a=document.querySelector('.modal[data-modal="'+s+'"]');a.classList.add("active"),o.classList.add("active")})}),n.forEach(function(l){l.addEventListener("click",function(e){var s=this.closest(".modal");s.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(l){var e=l.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});const y=document.querySelectorAll('a[href*="#"]'),v=50;for(let t of y)t.addEventListener("click",function(o){o.preventDefault();const n=t.getAttribute("href").substr(1),e=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:e-v,behavior:"smooth"})});(()=>{const t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),l=()=>t.classList.toggle("is-open");o.addEventListener("click",l),n.addEventListener("click",l),window.matchMedia("(min-width: 600px)").addEventListener("change",e=>e.matches&&t.classList.remove("is-open"))})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();new Swiper(".swiper",{direction:"horizontal",loop:!1,breakpoints:{375:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:0},1200:{slidesPerView:4,spaceBetween:0}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});const f=document.getElementById("toggle-btn-leave"),r=document.getElementById("modal-leave"),g=r.querySelector(".close-leave"),c=document.querySelector(".leave-background-color");f.addEventListener("click",()=>{r.style.display="block",c.style.backgroundColor="rgba(0, 0, 0, 0.5)",c.style.position="fixed",c.style.top="0",c.style.left="0",c.style.zIndex="9999",c.style.width="100%",c.style.height="100%"});g.addEventListener("click",()=>{r.style.display="none",c.style.position="unset"});window.addEventListener("click",t=>{t.target===r&&(r.style.display="none",c.style.position="unset")});const w=document.getElementById("toggle-btn-send"),d=document.getElementById("modal-thankyou"),E=document.getElementById("modal-leave"),h=d.querySelector(".close-button-thank-you"),b=document.querySelector(".leave-background-color"),m=document.getElementById("name-leave"),p=document.getElementById("email-leave"),k=document.getElementById("tel-leave");w.addEventListener("click",t=>{t.preventDefault(),!m.value||m.checkValidity()?alert("Name is empty"):!p.value||p.checkValidity()?alert("Email is empty"):k.value?(E.style.display="none",d.style.display="block",b.style.position="unset"):alert("Phone is empty")});h.addEventListener("click",()=>{d.style.display="none"});window.addEventListener("click",t=>{t.target===d&&(d.style.display="none")});const B=document.getElementById("open-modal-btn"),L=document.getElementById("hero-btn-bue"),S=document.getElementById("open-modal-btn-mobile"),I=document.getElementById("close-modal-btn"),M=document.getElementById("close-modal-thankyou"),i=document.getElementById("modal-container");document.getElementById("modal-form");const q=document.getElementById("modal-thankyou");function u(){i.style.opacity="0",i.style.display="block",setTimeout(()=>{i.style.opacity="1"},10)}function P(){i.style.opacity=0,setTimeout(()=>{i.style.display="none",i.style.opacity=1},500)}B.addEventListener("click",u);L.addEventListener("click",u);S.addEventListener("click",u);I.addEventListener("click",P);M.addEventListener("click",()=>{q.style.display="block"});
