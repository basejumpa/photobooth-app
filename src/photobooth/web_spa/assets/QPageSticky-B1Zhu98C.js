import{a4 as m,aS as $,bg as c,bh as b,k as a,N as k,i as v,f as S}from"./index-Bb_NmagZ.js";const P={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function Q(){const{props:e,proxy:{$q:i}}=m(),o=$(b,c);if(o===c)return console.error("QPageSticky needs to be child of QLayout"),c;const d=a(()=>{const t=e.position;return{top:t.indexOf("top")!==-1,right:t.indexOf("right")!==-1,bottom:t.indexOf("bottom")!==-1,left:t.indexOf("left")!==-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),l=a(()=>o.header.offset),f=a(()=>o.right.offset),u=a(()=>o.footer.offset),p=a(()=>o.left.offset),h=a(()=>{let t=0,r=0;const n=d.value,g=i.lang.rtl===!0?-1:1;n.top===!0&&l.value!==0?r=`${l.value}px`:n.bottom===!0&&u.value!==0&&(r=`${-u.value}px`),n.left===!0&&p.value!==0?t=`${g*p.value}px`:n.right===!0&&f.value!==0&&(t=`${-g*f.value}px`);const s={transform:`translate(${t}, ${r})`};return e.offset&&(s.margin=`${e.offset[1]}px ${e.offset[0]}px`),n.vertical===!0?(p.value!==0&&(s[i.lang.rtl===!0?"right":"left"]=`${p.value}px`),f.value!==0&&(s[i.lang.rtl===!0?"left":"right"]=`${f.value}px`)):n.horizontal===!0&&(l.value!==0&&(s.top=`${l.value}px`),u.value!==0&&(s.bottom=`${u.value}px`)),s}),x=a(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function y(t){const r=k(t.default);return v("div",{class:x.value,style:h.value},e.expand===!0?r:[v("div",r)])}return{$layout:o,getStickyContent:y}}const O=S({name:"QPageSticky",props:P,setup(e,{slots:i}){const{getStickyContent:o}=Q();return()=>o(i)}});export{O as Q};
