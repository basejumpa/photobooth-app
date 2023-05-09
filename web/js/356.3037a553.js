"use strict";(globalThis["webpackChunkqPhotobooth"]=globalThis["webpackChunkqPhotobooth"]||[]).push([[356],{4356:(e,l,a)=>{a.r(l),a.d(l,{default:()=>R});var o=a(9835);const t=(0,o._)("div",{class:"text-h5"},"Server Control",-1),r={class:"row"},s={class:"q-ma-sm"},m={class:"text-no-wrap"},c=(0,o._)("span",{class:"q-ml-sm"},"You sure to reboot the system?",-1),i=(0,o._)("span",{class:"q-ml-sm"},"You sure to shutdown the system?",-1),n=(0,o._)("span",{class:"q-ml-sm"},"You sure to restart the service?",-1),d=(0,o._)("div",{class:"text-h5"},"Maintain Gallery",-1),u={class:"row"},_={class:"q-ma-sm"},w={class:"text-no-wrap"},p=(0,o._)("span",{class:"q-ml-sm"},"Are you sure to delete all media items from gallery?",-1);function f(e,l,a,f,W,h){const b=(0,o.up)("q-avatar"),y=(0,o.up)("q-card-section"),q=(0,o.up)("q-btn"),C=(0,o.up)("q-card-actions"),v=(0,o.up)("q-card"),g=(0,o.up)("q-dialog"),k=(0,o.up)("q-page"),V=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(k,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"q-pa-md"},{default:(0,o.w5)((()=>[t,(0,o._)("div",r,[(0,o._)("div",s,[(0,o._)("div",m,[(0,o.Wm)(g,{modelValue:e.confirm_reboot,"onUpdate:modelValue":l[1]||(l[1]=l=>e.confirm_reboot=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{icon:"restart_alt",color:"primary","text-color":"white"}),c])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel",color:"primary"},null,512),[[V]]),(0,o.wy)((0,o.Wm)(q,{label:"Reboot",color:"primary",onClick:l[0]||(l[0]=l=>e.remoteProcedureCall("/system/server/reboot"))},null,512),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(g,{modelValue:e.confirm_shutdown,"onUpdate:modelValue":l[3]||(l[3]=l=>e.confirm_shutdown=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{icon:"power_settings_new",color:"primary","text-color":"white"}),i])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel"},null,512),[[V]]),(0,o.wy)((0,o.Wm)(q,{label:"Shutdown",color:"primary",onClick:l[2]||(l[2]=l=>e.remoteProcedureCall("/system/server/shutdown"))},null,512),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(g,{modelValue:e.confirm_restart_service,"onUpdate:modelValue":l[5]||(l[5]=l=>e.confirm_restart_service=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{icon:"restart_alt",color:"primary","text-color":"white"}),n])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel"},null,512),[[V]]),(0,o.wy)((0,o.Wm)(q,{label:"Restart",color:"primary",onClick:l[4]||(l[4]=l=>e.remoteProcedureCall("/system/service/restart"))},null,512),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(q,{class:"q-mr-sm",label:"Reboot Host",onClick:l[6]||(l[6]=l=>e.confirm_reboot=!0)}),(0,o.Wm)(q,{class:"q-mr-sm",label:"Shutdown Host",onClick:l[7]||(l[7]=l=>e.confirm_shutdown=!0)}),(0,o.Wm)(q,{class:"q-mr-sm",label:"Restart Service",onClick:l[8]||(l[8]=l=>e.confirm_restart_service=!0)})])])])])),_:1}),(0,o.Wm)(v,{class:"q-pa-md q-mt-md"},{default:(0,o.w5)((()=>[d,(0,o._)("div",u,[(0,o._)("div",_,[(0,o._)("div",w,[(0,o.Wm)(g,{modelValue:e.confirm_delete_all,"onUpdate:modelValue":l[10]||(l[10]=l=>e.confirm_delete_all=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{icon:"delete",color:"primary","text-color":"white"}),p])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel",color:"primary"},null,512),[[V]]),(0,o.wy)((0,o.Wm)(q,{label:"Delete all",color:"primary",onClick:l[9]||(l[9]=l=>e.remoteProcedureCall("/mediacollection/delete_all"))},null,512),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(q,{class:"q-mr-sm",label:"Delete all media files",onClick:l[11]||(l[11]=l=>e.confirm_delete_all=!0)})])])])])),_:1})])),_:1})}var W=a(499),h=a(7575),b=a(1569);const y=(0,o.aZ)({name:"MainLayout",setup(){const e=(0,h.h)();return{store:e,remoteProcedureCall:b.remoteProcedureCall,confirm_reboot:(0,W.iH)(!1),confirm_shutdown:(0,W.iH)(!1),confirm_restart_service:(0,W.iH)(!1),confirm_delete_all:(0,W.iH)(!1)}}});var q=a(1639),C=a(9885),v=a(4458),g=a(7743),k=a(3190),V=a(1357),P=a(1821),Z=a(8879),x=a(2146),Q=a(9984),H=a.n(Q);const S=(0,q.Z)(y,[["render",f]]),R=S;H()(y,"components",{QPage:C.Z,QCard:v.Z,QDialog:g.Z,QCardSection:k.Z,QAvatar:V.Z,QCardActions:P.Z,QBtn:Z.Z}),H()(y,"directives",{ClosePopup:x.Z})}}]);