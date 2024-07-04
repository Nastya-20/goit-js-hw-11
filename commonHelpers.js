import{S as c,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l="44783480-725b805b80ef605c474d620ee",d=`https://pixabay.com/api/?key=${l}&image_type=photo&orientation=horizontal&safesearch=true`;async function m(n){const t=await fetch(`${d}&q=${n}`);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits}const f=new c(".gallery a");function u(n){const t=document.getElementById("gallery");if(t.innerHTML="",n.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=n.map(o=>`
        <div class="card">
            <a href="${o.largeImageURL}" data-lightbox="gallery">
                <img src="${o.webformatURL}" alt="${o.tags}">
            </a>
            <div class="card-info">
                <p>Likes: ${o.likes}</p>
                <p>Views: ${o.views}</p>
                <p>Comments: ${o.comments}</p>
                <p>Downloads: ${o.downloads}</p>
            </div>
        </div>
    `);t.innerHTML=s.join(""),f.refresh()}const g=document.getElementById("search-form"),p=document.getElementById("search-input");g.addEventListener("submit",async n=>{n.preventDefault();const t=p.value.trim();if(t===""){i.warning({title:"Warning",message:"Please enter a search term."});return}try{document.body.classList.add("loading");const s=await m(t);u(s)}catch(s){console.error("Error searching images:",s),i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{document.body.classList.remove("loading")}});
//# sourceMappingURL=commonHelpers.js.map
