import{f as B,j as F,ab as E,ac as $,l as A,a4 as I,i as R,N as j,ad as N,ae as k,af as D,ag as O,ah as L,ai as T,d as z,aj as K,c as M,w as c,e as i,Q as q,z as U,b as G,V as v,q as g,t as b,s as H,O as J,ak as W,o as X}from"./index-Bb_NmagZ.js";import{Q as Y}from"./QInput-DIXjpnJl.js";import{Q as Z}from"./QPage-Dyz_jaUx.js";import"./use-id-BPW5o4VZ.js";const ee=B({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(u,{slots:f,emit:d}){const h=I(),o=F(null);let a=0;const s=[];function y(e){const l=typeof e=="boolean"?e:u.noErrorFocus!==!0,p=++a,C=(t,n)=>{d(`validation${t===!0?"Success":"Error"}`,n)},V=t=>{const n=t.validate();return typeof n.then=="function"?n.then(r=>({valid:r,comp:t}),r=>({valid:!1,comp:t,err:r})):Promise.resolve({valid:n,comp:t})};return(u.greedy===!0?Promise.all(s.map(V)).then(t=>t.filter(n=>n.valid!==!0)):s.reduce((t,n)=>t.then(()=>V(n).then(r=>{if(r.valid===!1)return Promise.reject(r)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return p===a&&C(!0),!0;if(p===a){const{comp:n,err:r}=t[0];if(r!==void 0&&console.error(r),C(!1,n),l===!0){const P=t.find(({comp:Q})=>typeof Q.focus=="function"&&N(Q.$)===!1);P!==void 0&&P.comp.focus()}}return!1})}function x(){a++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function _(e){e!==void 0&&k(e);const l=a+1;y().then(p=>{l===a&&p===!0&&(u.onSubmit!==void 0?d("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function S(e){e!==void 0&&k(e),d("reset"),D(()=>{x(),u.autofocus===!0&&u.noResetFocus!==!0&&m()})}function m(){O(()=>{if(o.value===null)return;const e=o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"),l=>l.tabIndex!==-1);e?.focus({preventScroll:!0})})}L(T,{bindComponent(e){s.push(e)},unbindComponent(e){const l=s.indexOf(e);l!==-1&&s.splice(l,1)}});let w=!1;return E(()=>{w=!0}),$(()=>{w===!0&&u.autofocus===!0&&m()}),A(()=>{u.autofocus===!0&&m()}),Object.assign(h.proxy,{validate:y,resetValidation:x,submit:_,reset:S,focus:m,getValidationComponents:()=>s}),()=>R("form",{class:"q-form",ref:o,onSubmit:_,onReset:S},j(f.default))}}),te={class:"text-h5 text-weight-bold"},oe={class:""},ae={class:""},ne={href:"http://photobooth-app.org/setup/admincenter/",target:"_blank",class:"text-weight-bold",style:{"text-decoration":"none"}},de=z({__name:"LoginPage",setup(u){const f=G(),d=K({username:"admin",password:null}),h=async()=>{try{await W(d),f.push("/admin")}catch(o){console.error(o)}};return(o,a)=>(X(),M(Z,{id:"login-page",class:"flex flex-center"},{default:c(()=>[i(J,{class:"q-pa-md no-shadow login-card",bordered:""},{default:c(()=>[i(q,{flat:"",color:"grey",icon:"sym_o_arrow_back_ios_new",onClick:a[0]||(a[0]=s=>U(f).go(-1))}),i(ee,{ref:"form",class:"q-gutter-md",onSubmit:h},{default:c(()=>[i(v,{class:"text-center"},{default:c(()=>[g("div",te,b(o.$t("Sign in")),1),g("div",oe,b(o.$t("Sign in below to access the admin dashboard.")),1)]),_:1}),i(v,null,{default:c(()=>[i(Y,{modelValue:d.password,"onUpdate:modelValue":a[1]||(a[1]=s=>d.password=s),filled:"",type:"password",label:"Password"},null,8,["modelValue"])]),_:1}),i(v,null,{default:c(()=>[i(q,{rounded:"",color:"primary",label:"Sign in",class:"full-width",type:"submit"})]),_:1}),i(v,{class:"text-center"},{default:c(()=>[g("div",ae,[H(b(o.$t("Looking for the default password or issues signing in?"))+" ",1),g("a",ne,b(o.$t("Check the documentation.")),1)])]),_:1})]),_:1},512)]),_:1})]),_:1}))}});export{de as default};
