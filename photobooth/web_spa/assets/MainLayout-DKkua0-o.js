import{Q as T,a as A}from"./QLayout-DVtPHIH-.js";import{d as $,u as M,a as C,b,c as g,o as k,w as h,_ as R,e as _,f as N,g as E,h as L,i as B,r as w,j as v,k as y,l as S,m as P}from"./index-DyBYTJ4X.js";import{u as x}from"./use-quasar-C9megnz2.js";const O=$({__name:"RouteAfterTimeout",props:{route:{type:String,required:!0},timeoutMs:{type:Number,required:!0},warningMessage:{type:String,default:"Auto-starting slideshow... Click anywhere to stay on this page."},warningTimeMs:{type:Number,default:1e4}},setup(e,{expose:a}){a();const n=x(),s=M(),t=e,{idle:o,lastActive:u}=C(t.timeoutMs),p=b({interval:1e3}),m=g(()=>t.timeoutMs-(p.value-u.value)),f=g(()=>t.warningTimeMs>m.value);let i=null;function l(){i=n.notify({progress:!0,message:t.warningMessage,type:"info",multiLine:!0,timeout:m.value,icon:"sym_o_slideshow"})}function c(){i&&i()}k(()=>{c()}),h(f,r=>{r?l():c()}),h(o,r=>{r&&(c(),s.push({path:t.route}))});const d={$q:n,router:s,props:t,idle:o,lastActive:u,now:p,remainingTime:m,showWarning:f,get warningPopup(){return i},set warningPopup(r){i=r},showNotification:l,hideNotification:c};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}});function Q(e,a,n,s,t,o){return _(),N("div")}const q=R(O,[["render",Q],["__file","RouteAfterTimeout.vue"]]),W=$({name:"MainLayout",components:{RouteAfterTimeout:q},setup(){const e=E(),a=L(),n=M(),s=B();return e.$subscribe((t,o)=>{o.state=="counting"&&s.path!="/"&&(console.log("counting state received, pushing to index page to countdown"),n.push("/")),o.state=="present_capture"&&n.push({name:"itempresenter",params:{id:e.last_captured_mediaitem.id}}),o.state=="approve_capture"&&o.ask_user_for_approval&&n.push({path:"/itemapproval"})}),{configurationStore:a}},computed:{}});function j(e,a,n,s,t,o){const u=w("router-view"),p=w("RouteAfterTimeout");return _(),v(A,{id:"main-layout",view:"hHh lpR fFf"},{default:y(()=>[S(T,null,{default:y(()=>[S(u),e.configurationStore.getConfigElement("uisettings.show_automatic_slideshow_timeout",0)>0?(_(),v(p,{key:0,route:"/slideshow/random","timeout-ms":e.configurationStore.getConfigElement("uisettings.show_automatic_slideshow_timeout",60)*1e3,"warning-message":e.$t("MSG_WARN_BEFORE_AUTO_SLIDESHOW")},null,8,["timeout-ms","warning-message"])):P("",!0)]),_:1})]),_:1})}const U=R(W,[["render",j],["__file","MainLayout.vue"]]);export{U as default};
