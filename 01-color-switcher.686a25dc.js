const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;function o(){let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}t.addEventListener("click",(function(){n=setInterval(o,1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.686a25dc.js.map
