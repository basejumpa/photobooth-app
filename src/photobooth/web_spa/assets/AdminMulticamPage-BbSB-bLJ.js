import{d as k,E as v,k as C,o as r,c as d,w as a,e,N as u,q as n,t as l,S as m,C as o,y as p,H as f,p as w,F as q,x as Q,V as $,s as g}from"./index-Bp1hDh5D.js";import{Q as S}from"./QImg-CllrYUN_.js";import{Q as B}from"./QPage-D1qyoMOW.js";const N={class:"text-h5"},V={class:"q-ma-none"},y={class:"text-caption"},P={class:"text-caption"},h={class:"q-pa-md row items-start q-gutter-md"},A={class:"absolute-bottom"},E={class:"text-subtitle2"},j=k({__name:"AdminMulticamPage",setup(F){const c=v(),_=C(()=>{const s=c.configuration.backends.group_backends,t=c.configuration.backends.index_backend_multicam;return s==null||t==null?(console.error("cannot get multicam backend from config"),[]):s[t].wigglecam.nodes});return(s,t)=>(r(),d(B,{id:"multicam-page",padding:""},{default:a(()=>[e(u,{flat:"",class:"q-pa-md"},{default:a(()=>[n("div",N,l(s.$t("Multicamera Tool")),1),n("div",V,[e(m,{class:"q-gutter-sm q-px-none"},{default:a(()=>[n("div",y,l(s.$t("Single Camera Calibration")),1),e(o,{label:s.$t("calibrate intrinsics"),onClick:t[0]||(t[0]=i=>p(f)("/api/wigglecam/xxx"))},null,8,["label"]),e(o,{label:s.$t("calibrate extrinsics"),onClick:t[1]||(t[1]=i=>p(f)("/api/wigglecam/xxx"))},null,8,["label"])]),_:1}),e(m,{class:"q-px-none"},{default:a(()=>[n("div",P,l(s.$t("Live View")),1),n("div",h,[(r(!0),w(q,null,Q(_.value,(i,b,x)=>(r(),d(u,{key:x,style:{width:"100%","max-width":"250px"}},{default:a(()=>[e(S,{fit:"contain",src:`${i.base_url}api/camera/stream.mjpg`},{default:a(()=>[n("div",A,[t[2]||(t[2]=n("div",{class:"text-subtitle2"},null,-1)),n("div",E,l(b)+": "+l(i.description),1)])]),_:2},1032,["src"]),e($,null,{default:a(()=>[e(o,{flat:""},{default:a(()=>t[3]||(t[3]=[g("calibrate")])),_:1}),e(o,{flat:""},{default:a(()=>t[4]||(t[4]=[g("capture")])),_:1})]),_:1})]),_:2},1024))),128))])]),_:1})])]),_:1})]),_:1}))}});export{j as default};
