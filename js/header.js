(()=>{"use strict";const e=document.querySelector("html");let t=document.querySelector(".catalog-button"),o=document.querySelector(".catalog-button svg.close"),c=document.querySelector(".search__wrapper"),l=document.querySelector(".search__wrapper input"),s=document.querySelector(".search_button"),r=document.querySelector(".catalog-menu__wrapper");document.querySelector(".menu-button"),document.querySelector(".desctop-menu"),s.addEventListener("click",(()=>{c.classList.toggle("active"),t.classList.toggle("short"),l.focus()})),t.addEventListener("click",(()=>{t.classList.toggle("open"),c.classList.remove("active"),t.classList.toggle("short"),r.classList.toggle("active"),e.classList.toggle("lock"),window.scrollTo({top:0,behavior:"smooth"}),o.classList.toggle("d-none")}));let n=document.querySelectorAll(".user-in__mail"),u=document.querySelectorAll(".user-in__mail span"),a=document.querySelectorAll(".user-in__menu"),i=document.querySelector(".login-button");i.addEventListener("click",(()=>{i.nextElementSibling.classList.toggle("show")}));for(let e=0;e<u.length;e++)u[e].addEventListener("click",(()=>{n[e].classList.toggle("show"),a[e].classList.toggle("show")}))})();