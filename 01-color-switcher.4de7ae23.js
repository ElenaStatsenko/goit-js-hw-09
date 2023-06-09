const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){let t=[`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`];setInterval((()=>document.body.style.backgroundColor=t),1e3)})),e.addEventListener(click,(function(){clearInterval(null)}));
//# sourceMappingURL=01-color-switcher.4de7ae23.js.map
