import{f as ae,ap as ne,aq as se,ak as le,a2 as ue,ar as ie,a3 as re,j as M,k as l,a4 as ce,as as de,at as fe,au as ve,av as ge,aw as he,$ as A,bt as me,bu as D,bv as ye,b7 as be,bw as xe,az as Pe,bx as Te,by as ke,i as R,M as Ce,T as Se,m as Oe,af as qe,ad as Ee}from"./index-DuSR13Tw.js";import{v as we,d as H,h as Be,e as Fe,f as Me,p as K,g as Ae,r as j,s as De}from"./position-engine-C_Ueb4cg.js";const je=ae({name:"QMenu",inheritAttrs:!1,props:{...Be,...ie,...ue,...le,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:H},self:{type:String,validator:H},offset:{type:Array,validator:we},scrollTarget:se,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ne,"click","escapeKey"],setup(e,{slots:c,emit:d,attrs:v}){let n=null,f,u,g;const P=re(),{proxy:h}=P,{$q:o}=h,a=M(null),s=M(!1),L=l(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),Q=ce(e,o),{registerTick:W,removeTick:_}=de(),{registerTimeout:T}=fe(),{transitionProps:$,transitionStyle:p}=ve(e),{localScrollTarget:k,changeScrollEvent:z,unconfigureScrollTarget:I}=Fe(e,B),{anchorEl:i,canShow:U}=Me({showing:s}),{hide:C}=ge({showing:s,canShow:U,handleShow:X,handleHide:Y,hideOnRouteChange:L,processOnMount:!0}),{showPortal:S,hidePortal:O,renderPortal:G}=he(P,a,ee,"menu"),m={anchorEl:i,innerRef:a,onClickOutside(t){if(e.persistent!==!0&&s.value===!0)return C(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&Ee(t),!0}},q=l(()=>K(e.anchor||(e.cover===!0?"center middle":"bottom start"),o.lang.rtl)),J=l(()=>e.cover===!0?q.value:K(e.self||"top start",o.lang.rtl)),N=l(()=>(e.square===!0?" q-menu--square":"")+(Q.value===!0?" q-menu--dark q-dark":"")),V=l(()=>e.autoClose===!0?{onClick:Z}:{}),E=l(()=>s.value===!0&&e.persistent!==!0);A(E,t=>{t===!0?(me(b),Ae(m)):(D(b),j(m))});function y(){qe(()=>{let t=a.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function X(t){if(n=e.noRefocus===!1?document.activeElement:null,ye(F),S(),B(),f=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const x=be(t);if(x.left!==void 0){const{top:te,left:oe}=i.value.getBoundingClientRect();f={left:x.left-oe,top:x.top-te}}}u===void 0&&(u=A(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,r)),e.noFocus!==!0&&document.activeElement.blur(),W(()=>{r(),e.noFocus!==!0&&y()}),T(()=>{o.platform.is.ios===!0&&(g=e.autoClose,a.value.click()),r(),S(!0),d("show",t)},e.transitionDuration)}function Y(t){_(),O(),w(!0),n!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),T(()=>{O(!0),d("hide",t)},e.transitionDuration)}function w(t){f=void 0,u!==void 0&&(u(),u=void 0),(t===!0||s.value===!0)&&(xe(F),I(),j(m),D(b)),t!==!0&&(n=null)}function B(){(i.value!==null||e.scrollTarget!==void 0)&&(k.value=Pe(i.value,e.scrollTarget),z(k.value,r))}function Z(t){g!==!0?(Te(h,t),d("click",t)):g=!1}function F(t){E.value===!0&&e.noFocus!==!0&&ke(a.value,t.target)!==!0&&y()}function b(t){d("escapeKey"),C(t)}function r(){De({targetEl:a.value,offset:e.offset,anchorEl:i.value,anchorOrigin:q.value,selfOrigin:J.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(){return R(Se,$.value,()=>s.value===!0?R("div",{role:"menu",...v,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+N.value,v.class],style:[v.style,p.value],...V.value},Ce(c.default)):null)}return Oe(w),Object.assign(h,{focus:y,updatePosition:r}),G}});let Re=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,Re=e.scrollLeft>=0,e.remove()}export{je as Q,Re as r};
