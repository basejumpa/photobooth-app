import{f as L,k as b,i as d,N as k,al as P,am as D,a4 as N,j as S,an as O,a0 as C,l as j,D as c,Q as _,ao as x,d as F,c as G,w as n,e as a,q as f,s as g,t as h,r as z,ap as U,b as W,o as K}from"./index-Bb_NmagZ.js";import{Q as J,a as X,b as m,c as Y}from"./QToolbar-Dp-DHxEo.js";import{Q as Z,a as w,b as i,c as B}from"./position-engine-C9FgiDJu.js";import{Q as ee}from"./rtl-Ccc5pG2X.js";import{u as ae}from"./use-id-BPW5o4VZ.js";import{Q as te}from"./QHeader-DVFVRbMc.js";import{Q as ne,a as oe}from"./QLayout-DFNxkkeZ.js";import"./selection-Da40UDNM.js";const le=L({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:u}){const l=b(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(s=>e[s]===!0).map(s=>`q-btn-group--${s}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>d("div",{class:l.value},k(u.default))}}),se=Object.keys(D);function ue(e){return se.reduce((u,l)=>{const o=e[l];return o!==void 0&&(u[l]=o),u},{})}const re=L({name:"QBtnDropdown",props:{...D,...P,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:u,emit:l}){const{proxy:o}=N(),s=S(e.modelValue),r=S(null),y=ae(),p=b(()=>{const t={"aria-expanded":s.value===!0?"true":"false","aria-haspopup":"true","aria-controls":y.value,"aria-label":e.toggleAriaLabel||o.$q.lang.label[s.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(t["aria-disabled"]="true"),t}),T=b(()=>"q-btn-dropdown__arrow"+(s.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),A=b(()=>O(e)),q=b(()=>ue(e));C(()=>e.modelValue,t=>{r.value!==null&&r.value[t?"show":"hide"]()}),C(()=>e.split,v);function I(t){s.value=!0,l("beforeShow",t)}function $(t){l("show",t),l("update:modelValue",!0)}function H(t){s.value=!1,l("beforeHide",t)}function R(t){l("hide",t),l("update:modelValue",!1)}function E(t){l("click",t)}function V(t){x(t),v(),l("click",t)}function M(t){r.value!==null&&r.value.toggle(t)}function Q(t){r.value!==null&&r.value.show(t)}function v(t){r.value!==null&&r.value.hide(t)}return Object.assign(o,{show:Q,hide:v,toggle:M}),j(()=>{e.modelValue===!0&&Q()}),()=>{const t=[d(c,{class:T.value,name:e.dropdownIcon||o.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&t.push(d(ee,{ref:r,id:y.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:I,onShow:$,onBeforeHide:H,onHide:R},u.default)),e.split===!1?d(_,{class:"q-btn-dropdown q-btn-dropdown--simple",...q.value,...p.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:E},{default:()=>k(u.label,[]).concat(t),loading:u.loading}):d(le,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...A.value,glossy:e.glossy,stretch:e.stretch},()=>[d(_,{class:"q-btn-dropdown--current",...q.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:V},{default:u.label,loading:u.loading}),d(_,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...p.value,...A.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>t)])}}}),he=F({__name:"AdminLayout",setup(e){const u=W(),l=()=>{U(),u.push("/")};return(o,s)=>{const r=z("router-view");return K(),G(ne,{id:"admin-layout",view:"hHh lpR fFf"},{default:n(()=>[a(te,{class:"bg-secondary text-white"},{default:n(()=>[a(J,{class:"q-pa-none"},{default:n(()=>[a(_,{class:"q-mx-sm",stack:"",to:"/",icon:"sym_o_arrow_back_ios_new",label:o.$t("BTN_LABEL_BACK")},null,8,["label"]),a(X,{"mobile-arrows":"",shrink:"",stretch:""},{default:n(()=>[a(m,{to:"/admin",icon:"sym_o_dashboard",label:o.$t("TAB_LABEL_DASHBOARD")},null,8,["label"]),a(m,{to:{name:"config"},icon:"sym_o_settings",label:o.$t("TAB_LABEL_CONFIG")},null,8,["label"]),a(m,{to:"/admin/files",icon:"sym_o_folder_shared",label:o.$t("TAB_LABEL_FILES")},null,8,["label"]),a(m,{to:"/admin/multicam",icon:"sym_o_burst_mode",label:o.$t("TAB_MULTICAM")},null,8,["label"]),a(m,{to:"/admin/logs",icon:"sym_o_list",label:o.$t("Logs")},null,8,["label"]),a(re,{"auto-close":"",stretch:"",flat:"",label:""},{default:n(()=>[a(Z,null,{default:n(()=>[a(w,{to:"/admin/1ststart"},{default:n(()=>[a(i,{avatar:""},{default:n(()=>[a(c,{name:"sym_o_info"})]),_:1}),a(i,null,{default:n(()=>[a(B,null,{default:n(()=>[g(h(o.$t("1st Start")),1)]),_:1})]),_:1})]),_:1}),a(w,{to:"/admin/help"},{default:n(()=>[a(i,{avatar:""},{default:n(()=>[a(c,{name:"sym_o_help"})]),_:1}),a(i,null,{default:n(()=>[a(B,null,{default:n(()=>[g(h(o.$t("TAB_LABEL_HELP")),1)]),_:1})]),_:1})]),_:1}),a(w,{href:"/api/doc",target:"_blank"},{default:n(()=>[a(i,{avatar:""},{default:n(()=>[a(c,{name:"sym_o_api"})]),_:1}),a(i,null,{default:n(()=>[a(B,null,{default:n(()=>[g(h(o.$t("Rest-API documentation")),1)]),_:1})]),_:1}),a(i,{side:""},{default:n(()=>[a(c,{name:"sym_o_open_in_new"})]),_:1})]),_:1}),a(w,{href:"https://photobooth-app.org/",target:"_blank"},{default:n(()=>[a(i,{avatar:""},{default:n(()=>[a(c,{name:"sym_o_link"})]),_:1}),a(i,null,{default:n(()=>[a(B,null,{default:n(()=>s[0]||(s[0]=[g("photobooth-app.org")])),_:1})]),_:1}),a(i,{side:""},{default:n(()=>[a(c,{name:"sym_o_open_in_new"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(Y,{align:"right",class:"q-mr-lg"},{default:n(()=>[f("span",null,h(o.$t("TITLE_ADMIN_CENTER")),1)]),_:1}),s[1]||(s[1]=f("div",null,[f("a",{href:"https://photobooth-app.org/",target:"_new",class:"q-mr-lg"},[f("img",{src:"icons/logo-notext-white-transparent.png",style:{"max-height":"40px"}})])],-1)),f("div",null,[a(_,{class:"q-mx-sm",stack:"",icon:"sym_o_logout",label:o.$t("Sign out"),onClick:l},null,8,["label"])])]),_:1})]),_:1}),a(oe,null,{default:n(()=>[a(r)]),_:1})]),_:1})}}});export{he as default};
