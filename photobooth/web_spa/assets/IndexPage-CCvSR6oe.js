import{x as G,y as D,z as H,A as F,d as Q,B as L,e as l,C as O,o as K,D as E,E as $,f as n,g as u,s as p,n as c,m,F as W,t as N,G as X,H as J,p as g,I,l as h,q as P,v as s,J as M,Q as S,h as U,i as Y,a as Z,K as ee,L as z}from"./index-Bu4TEJL3.js";import{Q as T}from"./QPageSticky-B28n5f_b.js";import{Q as te}from"./QPage-BwWqQkcY.js";import{Q as ne}from"./QCircularProgress-DcOZHgWY.js";import"./format-CJebrXOQ.js";const ie='<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',ae=G({name:"QSpinnerGrid",props:D,setup(v){const{cSize:e,classes:t}=H(v);return()=>F("svg",{class:t.value,fill:"currentColor",width:e.value,height:e.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg",innerHTML:ie})}}),oe='<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>',se=G({name:"QSpinnerPuff",props:D,setup(v){const{cSize:e,classes:t}=H(v);return()=>F("svg",{class:t.value,stroke:"currentColor",width:e.value,height:e.value,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",innerHTML:oe})}}),re={id:"countdown-timer-container",class:"flex flex-center",style:{width:"70vw",height:"70vh"}},ce=["innerHTML"],le={style:{height:"100%"}},ue=Q({__name:"CountdownTimer",props:{duration:{},messageDuration:{default:.5},messageText:{default:"😃"}},setup(v){let e;const t=L(0),d=L(0),r=v,_=l(()=>t.value>0),o=l(()=>t.value>0),f=l(()=>t.value<=r.messageDuration);O(()=>{k()}),K(()=>{C()});const C=()=>{clearInterval(e),t.value=0},k=()=>{d.value=r.duration,t.value=d.value,console.log(`starting timer, duration=${d.value}`),e=window.setInterval(()=>{t.value-=.05,t.value<=0&&clearInterval(e)},50)};return(y,q)=>E((n(),u("div",re,[E(p("div",{id:"countdown-timer-message",style:{position:"absolute","font-size":"150px"},innerHTML:y.messageText},null,8,ce),[[$,f.value]]),p("div",le,[E(c(ne,{"show-value":!f.value,style:{width:"100%",height:"100%"},value:t.value,min:0,max:d.value,reverse:"","animation-speed":"100","font-size":"0.5em",size:"70vh",color:"primary",class:"text-secondary"},{default:m(()=>[W(N(parseFloat(t.value.toFixed(0))),1)]),_:1},8,["show-value","value","max"]),[[$,o.value]])])],512)),[[$,_.value]])}}),de={class:"row q-gutter-md action-buttons"},me={style:{"white-space":"nowrap"},class:"gt-sm"},pe=Q({__name:"FrontpageTriggerButtons",props:{triggers:{}},emits:["triggerAction"],setup(v,{emit:e}){const t=e;function d(r,_){t("triggerAction",r,_)}return(r,_)=>(n(),u("div",de,[(n(!0),u(X,null,J(r.triggers,(o,f)=>(n(),u("div",{key:f},[o.show_button&&!(g(I.isEmpty)(o.title)&&g(I.isEmpty)(o.icon))?(n(),h(S,{key:0,stack:"",color:"primary","no-caps":"",rounded:"",class:M(["action-button col-auto",["action-button-"+f]]),onClick:C=>d(o.action,o.config_index)},{default:m(()=>[g(I.isEmpty)(o.icon)?s("",!0):(n(),h(P,{key:0,name:`sym_o_${o.icon}`},null,8,["name"])),p("div",me,N(o.title),1)]),_:2},1032,["class","onClick"])):s("",!0)]))),128))]))}}),ge={key:0,class:"full-height full-width column justify-center content-center",style:{position:"absolute"}},ve={key:1,id:"frontpage-countdown",class:"full-height full-width column justify-center content-center",style:{position:"absolute"}},fe=["innerHTML"],_e={key:0},he={key:0},ye={class:"q-gutter-md"},be={class:"gt-sm"},we={key:0},Ce={class:"q-gutter-md"},ke={class:"gt-sm"},Ae=Q({__name:"IndexPage",setup(v){const e=U(),t=Y(),d=Z(),r=L(0);ee(r,()=>{r.value>=5&&d.push("/admin"),r.value=0},{debounce:500});const _=l(()=>{const i=[];return Object.entries(t.configuration.actions).forEach(([a,b])=>{console.log(a),console.log(b),b.forEach((w,A)=>{const B={action:`actions/${a}`,config_index:A,show_button:w.trigger.ui_trigger.show_button,title:w.trigger.ui_trigger.title,icon:w.trigger.ui_trigger.icon};i.push(B)})}),console.log(i),i}),o=l(()=>{const i=e.state=="capture";return e.state=="captures_completed"||i&&!y.value}),f=l(()=>e.state=="record"),C=l(()=>t.configuration.uisettings.livestream_mirror_effect),k=l(()=>t.configuration.uisettings.admin_button_invisible),y=l(()=>{const i=e.state=="counting",a=e.state=="capture";return e.duration&&e.duration>0&&i||a}),q=l(()=>{const i=t.configuration.uisettings.enable_livestream_when_idle,a=t.configuration.uisettings.enable_livestream_when_active,b=!e.state||e.state=="finished",w=e.state=="record",A=e.state=="counting",B=e.state=="capture";return b&&i||(A||B)&&a||w}),x=l(()=>!e.state||e.state=="finished"),R=()=>{k.value?r.value++:d.push("/admin")},j=(i,a)=>{z(`/api/${i}/${a}`)},V=()=>{z("/api/actions/stop")};return(i,a)=>(n(),h(te,{id:"index-page",class:"q-pa-none column full-height"},{default:m(()=>[p("div",{id:"preview-stream-wrapper",class:M({mirroreffect:C.value})},[q.value?(n(),u("div",{key:0,id:"preview-stream",style:{"background-image":"url('/api/aquisition/stream.mjpg')"},class:M(["full-width column justify-center content-center",{countdowncounting:y.value}])},null,2)):s("",!0)],2),o.value?(n(),u("div",ge,[c(ae,{size:"20em"})])):s("",!0),y.value?(n(),u("div",ve,[c(ue,{ref:"countdowntimer",duration:g(e).duration,"message-duration":g(t).configuration.uisettings.TAKEPIC_MSG_TIME,"message-text":g(t).configuration.uisettings.TAKEPIC_MSG_TEXT},null,8,["duration","message-duration","message-text"])])):s("",!0),x.value?(n(),u("div",{key:2,id:"frontpage_text",innerHTML:g(t).configuration.uisettings.FRONTPAGE_TEXT},null,8,fe)):s("",!0),c(T,{position:"bottom",class:"q-mb-lg"},{default:m(()=>[x.value?(n(),u("div",_e,[c(pe,{triggers:_.value,onTriggerAction:j},null,8,["triggers"])])):s("",!0)]),_:1}),c(T,{position:"top-left",class:"q-ma-lg"},{default:m(()=>[x.value?(n(),u("div",he,[p("div",ye,[g(t).configuration.uisettings.show_gallery_on_frontpage?(n(),h(S,{key:0,id:"frontpage-button-to-gallery",color:"primary","no-caps":"",rounded:"",to:"/gallery",class:"action-button"},{default:m(()=>[c(P,{left:"",name:"sym_o_photo_library"}),p("div",be,N(i.$t("BTN_LABEL_MAINPAGE_TO_GALLERY")),1)]),_:1})):s("",!0)])])):s("",!0)]),_:1}),c(T,{position:"top-right",class:"q-ma-lg"},{default:m(()=>[x.value?(n(),u("div",we,[p("div",Ce,[g(t).configuration.uisettings.show_admin_on_frontpage?(n(),h(S,{key:0,id:"frontpage-button-to-admin",rounded:"",color:"transparent","no-caps":"",class:M(["action-button action-button-admin",{"action-button-admin-invisible":k.value}]),onClick:R},{default:m(()=>[c(P,{left:"",name:"sym_o_admin_panel_settings"}),p("div",ke,N(i.$t("BTN_LABEL_MAINPAGE_TO_ADMIN")),1)]),_:1},8,["class"])):s("",!0)])])):s("",!0)]),_:1}),f.value?(n(),h(T,{key:3,id:"frontpage-indicator-recording",position:"top",offset:[0,25],align:"center"},{default:m(()=>[c(se,{color:"red",size:"10em"}),a[1]||(a[1]=p("br",null,null,-1)),c(S,{flat:"",color:"red",label:"Stop recording",onClick:a[0]||(a[0]=b=>V())})]),_:1})):s("",!0)]),_:1}))}});export{Ae as default};
