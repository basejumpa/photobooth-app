import{f as S,k as h,i as E,M as Q,aC as Y,a2 as V,a3 as I,a4 as F,aD as G,j as W,bn as U,ad as J,aO as Z,bf as P,ay as R,ae as O,$ as C,l as ee,m as X,ax as te,aP as A,bz as j,aH as le,bA as ne}from"./index-DuSR13Tw.js";import{c as ie}from"./selection-9ajFdbS0.js";const me=S({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=h(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>E("div",{class:n.value},Q(t.default))}}),ve=S({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=h(()=>parseInt(e.lines,10)),l=h(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),a=h(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>E("div",{style:a.value,class:l.value},Q(t.default))}}),he=S({name:"QItem",props:{...V,...Y,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=I(),a=F(e,l),{hasLink:s,linkAttrs:o,linkClass:d,linkTag:m,navigateOnClick:c}=G(),f=W(null),g=W(null),b=h(()=>e.clickable===!0||s.value===!0||e.tag==="label"),i=h(()=>e.disable!==!0&&b.value===!0),u=h(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=h(()=>e.insetLevel===void 0?null:{["padding"+(l.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function q(r){i.value===!0&&(g.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===f.value?g.value.focus():document.activeElement===g.value&&f.value.focus()),c(r))}function T(r){if(i.value===!0&&U(r,[13,32])===!0){J(r),r.qKeyEvent=!0;const x=new MouseEvent("click",r);x.qKeyEvent=!0,f.value.dispatchEvent(x)}n("keyup",r)}function _(){const r=Z(t.default,[]);return i.value===!0&&r.unshift(E("div",{class:"q-focus-helper",tabindex:-1,ref:g})),r}return()=>{const r={ref:f,class:u.value,style:L.value,role:"listitem",onClick:q,onKeyup:T};return i.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,o.value)):b.value===!0&&(r["aria-disabled"]="true"),E(m.value,r,_())}}}),ae=["ul","ol"],ge=S({name:"QList",props:{...V,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=I(),l=F(e,n.proxy.$q),a=h(()=>ae.includes(e.tag)?null:"list"),s=h(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>E(e.tag,{class:s.value,role:a.value},Q(t.default))}}),oe={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},be={...oe,contextMenu:Boolean};function xe({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:a,emit:s}=I(),o=W(null);let d=null;function m(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){U(i,13)===!0&&c.toggle(i)},contextClick(i){a.hide(i),P(i),O(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:P,mobileTouch(i){if(c.mobileCleanup(i),m(i)!==!0)return;a.hide(i),o.value.classList.add("non-selectable");const u=i.target;R(c,"anchor",[[u,"touchmove","mobileCleanup","passive"],[u,"touchend","mobileCleanup","passive"],[u,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&i!==void 0&&ie()}}),n=function(i=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let u;i===!0?a.$q.platform.is.mobile===!0?u=[[o.value,"touchstart","mobileTouch","passive"]]:u=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:u=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],R(c,"anchor",u)});function f(){te(c,"anchor")}function g(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function b(){if(l.target===!1||l.target===""||a.$el.parentNode===null)o.value=null;else if(l.target===!0)g(a.$el.parentNode);else{let i=l.target;if(typeof l.target=="string")try{i=document.querySelector(l.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,n()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return C(()=>l.contextMenu,i=>{o.value!==null&&(f(),n(i))}),C(()=>l.target,()=>{o.value!==null&&f(),b()}),C(()=>l.noParentEvent,i=>{o.value!==null&&(i===!0?f():n())}),ee(()=>{b(),t!==!0&&l.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),X(()=>{d!==null&&clearTimeout(d),f()}),{anchorEl:o,canShow:m,anchorEvents:c}}function pe(e,t){const n=W(null);let l;function a(d,m){const c=`${m!==void 0?"add":"remove"}EventListener`,f=m!==void 0?m:l;d!==window&&d[c]("scroll",f,A.passive),window[c]("scroll",f,A.passive),l=m}function s(){n.value!==null&&(a(n.value),n.value=null)}const o=C(()=>e.noParentEvent,()=>{n.value!==null&&(s(),t())});return X(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:a}}const{notPassiveCapture:B}=A,y=[];function M(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=j.length-1;for(;n>=0;){const l=j[n].$;if(l.type.name==="QTooltip"){n--;continue}if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=y.length-1;l>=0;l--){const a=y[l];if((a.anchorEl.value===null||a.anchorEl.value.contains(t)===!1)&&(t===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(t)===!1))e.qClickOutside=!0,a.onClickOutside(e);else return}}function ye(e){y.push(e),y.length===1&&(document.addEventListener("mousedown",M,B),document.addEventListener("touchstart",M,B))}function qe(e){const t=y.findIndex(n=>n===e);t!==-1&&(y.splice(t,1),y.length===0&&(document.removeEventListener("mousedown",M,B),document.removeEventListener("touchstart",M,B)))}let K,D;function ke(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function we(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{z[`${e}#ltr`]=e,z[`${e}#rtl`]=e});function Ee(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:z[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function ue(e,t){let{top:n,left:l,right:a,bottom:s,width:o,height:d}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],s+=t[1],a+=t[0],o+=t[0],d+=t[1]),{top:n,bottom:s,height:d,left:l,right:a,width:o,middle:l+(a-l)/2,center:n+(s-n)/2}}function re(e,t,n){let{top:l,left:a}=e.getBoundingClientRect();return l+=t.top,a+=t.left,n!==void 0&&(l+=n[1],a+=n[0]),{top:l,bottom:l+1,height:1,left:a,right:a+1,width:1,middle:a,center:l}}function se(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function N(e,t,n,l){return{top:e[n.vertical]-t[l.vertical],left:e[n.horizontal]-t[l.horizontal]}}function ce(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ce(e,t+1)},10);return}const{targetEl:n,offset:l,anchorEl:a,anchorOrigin:s,selfOrigin:o,absoluteOffset:d,fit:m,cover:c,maxHeight:f,maxWidth:g}=e;if(le.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:k,offsetTop:p}=window.visualViewport;k!==K&&(H.setProperty("--q-pe-left",k+"px"),K=k),p!==D&&(H.setProperty("--q-pe-top",p+"px"),D=p)}const{scrollLeft:b,scrollTop:i}=n,u=d===void 0?ue(a,c===!0?[0,0]:l):re(a,d,l);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:f,visibility:"visible"});const{offsetWidth:L,offsetHeight:q}=n,{elWidth:T,elHeight:_}=m===!0||c===!0?{elWidth:Math.max(u.width,L),elHeight:c===!0?Math.max(u.height,q):q}:{elWidth:L,elHeight:q};let r={maxWidth:g,maxHeight:f};(m===!0||c===!0)&&(r.minWidth=u.width+"px",c===!0&&(r.minHeight=u.height+"px")),Object.assign(n.style,r);const x=se(T,_);let v=N(u,x,s,o);if(d===void 0||l===void 0)$(v,u,x,s,o);else{const{top:H,left:k}=v;$(v,u,x,s,o);let p=!1;if(v.top!==H){p=!0;const w=2*l[1];u.center=u.top-=w,u.bottom-=w+2}if(v.left!==k){p=!0;const w=2*l[0];u.middle=u.left-=w,u.right-=w+2}p===!0&&(v=N(u,x,s,o),$(v,u,x,s,o))}r={top:v.top+"px",left:v.left+"px"},v.maxHeight!==void 0&&(r.maxHeight=v.maxHeight+"px",u.height>v.maxHeight&&(r.minHeight=r.maxHeight)),v.maxWidth!==void 0&&(r.maxWidth=v.maxWidth+"px",u.width>v.maxWidth&&(r.minWidth=r.maxWidth)),Object.assign(n.style,r),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==b&&(n.scrollLeft=b)}function $(e,t,n,l,a){const s=n.bottom,o=n.right,d=ne(),m=window.innerHeight-d,c=document.body.clientWidth;if(e.top<0||e.top+s>m)if(a.vertical==="center")e.top=t[l.vertical]>m/2?Math.max(0,m-s):0,e.maxHeight=Math.min(s,m);else if(t[l.vertical]>m/2){const f=Math.min(m,l.vertical==="center"?t.center:l.vertical===a.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,f),e.top=Math.max(0,f-s)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===a.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,m-e.top);if(e.left<0||e.left+o>c)if(e.maxWidth=Math.min(o,c),a.horizontal==="middle")e.left=t[l.horizontal]>c/2?Math.max(0,c-o):0;else if(t[l.horizontal]>c/2){const f=Math.min(c,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.right:t.left);e.maxWidth=Math.min(o,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.left:t.right),e.maxWidth=Math.min(o,c-e.left)}export{ge as Q,he as a,me as b,ve as c,ke as d,pe as e,xe as f,ye as g,be as h,Ee as p,qe as r,ce as s,oe as u,we as v};
