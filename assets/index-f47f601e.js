(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new Swiper(".swiper-our-prod",{direction:"horizontal",loop:!1,breakpoints:{375:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2.5,spaceBetween:0},1200:{slidesPerView:4,spaceBetween:0}},pagination:{el:".swiper-pagination1",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});new Swiper(".swipers",{direction:"horizontal",loop:!1,breakpoints:{375:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:0},1200:{slidesPerView:3,spaceBetween:0}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(()=>{const o=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=()=>o.classList.toggle("is-open");n.addEventListener("click",i),s.addEventListener("click",i),window.matchMedia("(min-width: 600px)").addEventListener("change",e=>e.matches&&o.classList.remove("is-open"))})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-hidden")}})();new Swiper(".swiper",{direction:"horizontal",loop:!1,breakpoints:{375:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:0},1200:{slidesPerView:4,spaceBetween:0}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});const a=document.getElementById("open-modal-btn"),d=document.getElementById("hero-btn-bue"),p=document.getElementById("open-modal-btn-mobile"),u=document.getElementById("close-modal-btn"),m=document.getElementById("close-modal-thankyou"),l=document.getElementById("modal-container");document.getElementById("modal-form");const w=document.getElementById("modal-thankyou");function c(){l.style.opacity="0",l.style.display="block",setTimeout(()=>{l.style.opacity="1"},10)}function y(){l.style.opacity=0,setTimeout(()=>{l.style.display="none",l.style.opacity=1},500)}a.addEventListener("click",c);d.addEventListener("click",c);p.addEventListener("click",c);u.addEventListener("click",y);m.addEventListener("click",()=>{w.style.display="block"});
