import{a4 as v,j as F,aP as y,a0 as f,aQ as p,a7 as h,l as x,m as b}from"./index-Bb_NmagZ.js";let s=0;const E={fullscreen:Boolean,noRouteFullscreenExit:Boolean},g=["update:fullscreen","fullscreen"];function B(){const d=v(),{props:u,emit:m,proxy:e}=d;let n,o,a;const l=F(!1);y(d)===!0&&f(()=>e.$route.fullPath,()=>{u.noRouteFullscreenExit!==!0&&t()}),f(()=>u.fullscreen,r=>{l.value!==r&&c()}),f(l,r=>{m("update:fullscreen",r),m("fullscreen",r)});function c(){l.value===!0?t():i()}function i(){l.value!==!0&&(l.value=!0,a=e.$el.parentNode,a.replaceChild(o,e.$el),document.body.appendChild(e.$el),s++,s===1&&document.body.classList.add("q-body--fullscreen-mixin"),n={handler:t},p.add(n))}function t(){l.value===!0&&(n!==void 0&&(p.remove(n),n=void 0),a.replaceChild(e.$el,o),l.value=!1,s=Math.max(0,s-1),s===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),e.$el.scrollIntoView!==void 0&&setTimeout(()=>{e.$el.scrollIntoView()})))}return h(()=>{o=document.createElement("span")}),x(()=>{u.fullscreen===!0&&i()}),b(t),Object.assign(e,{toggleFullscreen:c,setFullscreen:i,exitFullscreen:t}),{inFullscreen:l,toggleFullscreen:c}}export{E as a,B as b,g as u};
