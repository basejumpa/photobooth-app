import{Q as C}from"./QImg-CllrYUN_.js";import{d as A,a as k,u as y,k as L,o as m,c as p,w as o,A as P,e as t,C as n,Q as _,q as s,t as d,s as Q,y as f,H as c}from"./index-Bp1hDh5D.js";import{Q as b}from"./QPageSticky-fpeOizRA.js";import{Q as q}from"./QBadge-DMLOrW8T.js";import{Q as O}from"./QPage-D1qyoMOW.js";const S={class:"q-mb-lg action-buttons col"},R={class:"q-mb-sm row flex flex-center"},V={class:"row"},x=A({__name:"ItemApprovalPage",setup($){const l=k(),r=y(),i=L(()=>r.last_captured_mediaitem_id),g=()=>{c("/api/actions/confirm"),l.push("/")},v=()=>{c("/api/actions/reject"),l.push("/")},E=()=>{c("/api/actions/abort"),l.push("/")};return(a,e)=>(m(),p(O,{id:"itemapproval-page",class:"absolute-full flex flex-center"},{default:o(()=>[i.value?(m(),p(C,{key:0,src:`/media/preview/${i.value}`,fit:"contain",style:{height:"95%"}},null,8,["src"])):P("",!0),t(b,{position:"top-left",class:"q-ma-lg"},{default:o(()=>[t(n,{id:"layout-button-back",color:"grey",rounded:"","no-caps":"",onClick:e[0]||(e[0]=u=>E()),class:"action-button glass-effect"},{default:o(()=>[t(_,{left:"",name:"sym_o_cancel"}),s("div",null,d(a.$t("MSG_APPROVE_COLLAGE_ITEM_CANCEL_COLLAGE")),1)]),_:1})]),_:1}),t(b,{position:"bottom",class:"q-ma-lg"},{default:o(()=>[s("div",S,[s("div",R,[t(q,{color:"grey-8",class:"q-mr-xs"},{default:o(()=>[t(_,{name:"sym_o_tag",color:"white",class:"q-mr-xs"}),Q(" "+d(a.$t("LABEL_ELEMENT_X_OF_Y",{no:f(r).number_captures_taken,total:f(r).total_captures_to_take})),1)]),_:1})]),s("div",V,[t(n,{id:"item-approval-button-reject",stack:"",rounded:"",class:"q-mr-lg action-button col-auto glass-effect",color:"negative","no-caps":"",icon:"sym_o_thumb_down",label:a.$t("MSG_APPROVE_COLLAGE_ITEM_RETRY"),onClick:e[1]||(e[1]=u=>v())},null,8,["label"]),t(n,{id:"item-approval-button-approve",stack:"",rounded:"",class:"q-mr-sm action-button col-auto glass-effect",color:"positive","no-caps":"",icon:"sym_o_thumb_up",label:a.$t("MSG_APPROVE_COLLAGE_ITEM_APPROVE"),onClick:e[2]||(e[2]=u=>g())},null,8,["label"])])])]),_:1})]),_:1}))}});export{x as default};
