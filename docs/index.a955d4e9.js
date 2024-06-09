let e,a,t;var n=globalThis,s={},r={},i=n.parcelRequirefdbc;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in r){var a=r[e];delete r[e];var t={id:e,exports:{}};return s[e]=t,a.call(t.exports,t,t.exports),t.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){r[e]=a},n.parcelRequirefdbc=i),(0,i.register)("27Lyk",function(e,a){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,n=new Map;t=function(e,a){for(var t=0;t<a.length-1;t+=2)n.set(a[t],{baseUrl:e,path:a[t+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["gcEgd","index.a955d4e9.js","84KD2","favicon.87c32cef.png"]'));var o={};o=new URL("favicon.87c32cef.png",import.meta.url).toString();const l='<span class="icon"><i class="fas fa-xl fa-sun"></i></span>';!function(){var e;let a=`<header>
        <nav class="navbar is-warning">
          <div class="navbar-brand is-size-4">
            <img class="logo" src="${(e=o)&&e.__esModule?e.default:e}" alt="Logo Buguela">
            <a class="navbar-item">Buguela</a>
            <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          
          <div class="navbar-menu" id="navMenu">
            <div class="navbar-end">
              <a href="#produtos" class="navbar-item">Produtos</a>
              <a href="#proposito" class="navbar-item">Prop\xf3sito</a>           
              <div class="navbar-item">
                <div class="buttons">
                  <button type="button" class="button is-warning" id="button-theme" title="button-theme"></button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      `;document.body.insertAdjacentHTML("afterbegin",a)}();const d=()=>{e.addEventListener("click",()=>{a.classList.toggle("theme-light"),a.classList.toggle("theme-dark")?e.innerHTML='<span class="icon"><i class="fas fa-xl fa-moon"></i></span>':e.innerHTML=l})};document.addEventListener("DOMContentLoaded",()=>{e=document.getElementById("button-theme"),(a=document.getElementsByTagName("html")[0]).classList.add("theme-light"),e.innerHTML=l,d(),t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0),c()});const c=()=>{t.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.target,t=document.getElementById(a);e.classList.toggle("is-active"),t.classList.toggle("is-active")})})};
//# sourceMappingURL=index.a955d4e9.js.map
