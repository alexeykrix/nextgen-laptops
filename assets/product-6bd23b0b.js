import"./modulepreload-polyfill-3cfb730f.js";const r=document.querySelectorAll(".gallery-thumbs__btn");r.forEach(t=>{t.addEventListener("click",c=>{r.forEach(e=>e.classList.remove("-active")),t.classList.add("-active")})});document.addEventListener("DOMContentLoaded",()=>{document.fonts.ready.then(()=>{document.body.style.opacity="1"});const t=JSON.parse(localStorage.getItem("product"));console.log("productData: ",t);const c=document.querySelectorAll(".gallery img"),e=document.querySelector(".product-title"),n=document.querySelector(".product-description"),d=document.querySelector(".product-price");c.forEach(o=>{o.src=t.img,o.style.filter=t.filter}),e.innerHTML=t.title,n.innerHTML=t.description,d.innerHTML=t.price});