(()=>{"use strict";let e=document.querySelectorAll(".block-main-catalog .main-catalog__submenu li"),t=document.querySelectorAll(".block-main-catalog .main-catalog__submenu-items .submenu-item"),a=document.querySelector(".block-main-catalog .page-title__wrapper .title");if(e)for(let l=0;l<e.length;l++)e[l].addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active")})),t.forEach((e=>{e.classList.remove("active")})),e[l].classList.add("active"),t[l].classList.add("active"),a&&(a.textContent=t[l].querySelector(".title__wrapper .title").textContent)}))})();