import{v as Nl,d as ml,u as Al,p as cl,e as Bl,f as Vl,g as ql,r as _l,s as Ol,Q as I,c as r,a as m,b as f}from"./position-engine-C_Ueb4cg.js";import{f as Il,ak as ul,ap as Rl,aq as Ml,ar as Pl,a3 as Dl,j as w,k as ll,as as Ql,at as Ul,au as Hl,av as Fl,aw as jl,$ as pl,m as yl,ax as vl,ay as gl,az as Gl,i as bl,T as zl,M as Wl,ad as Yl,d as Xl,aA as Jl,D as Kl,c as h,w as e,q as T,e as l,p as P,U as v,y as U,s as u,t,Q as i,z as s,N as g,x as D,F as Q,W as C,V as N,n as p,H as V,S as A,o as _,B as Zl,X as y}from"./index-DuSR13Tw.js";import{c as hl}from"./selection-9ajFdbS0.js";import{Q as el}from"./QSeparator-BSHCe9Wz.js";import{Q as tl}from"./QLinearProgress-CdRbt8GM.js";import{Q as xl}from"./QPage-CID792zh.js";import{getLanguageName as le,preferredLanguages as ee,enableInContextTranslation as te}from"./i18n-DnnCngxX.js";import{u as ae}from"./vue-i18n-F5n4CR0J.js";const al=Il({name:"QTooltip",inheritAttrs:!1,props:{...Al,...Pl,...ul,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...ul.transitionShow,default:"jump-down"},transitionHide:{...ul.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ml},self:{type:String,default:"top middle",validator:ml},offset:{type:Array,default:()=>[14,14],validator:Nl},scrollTarget:Ml,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Rl],setup(c,{slots:X,emit:d,attrs:H}){let S,k;const q=Dl(),{proxy:{$q:$}}=q,B=w(null),O=w(!1),J=ll(()=>cl(c.anchor,$.lang.rtl)),F=ll(()=>cl(c.self,$.lang.rtl)),j=ll(()=>c.persistent!==!0),{registerTick:G,removeTick:z}=Ql(),{registerTimeout:R}=Ul(),{transitionProps:K,transitionStyle:ol}=Hl(c),{localScrollTarget:Z,changeScrollEvent:a,unconfigureScrollTarget:n}=Bl(c,dl),{anchorEl:o,canShow:L,anchorEvents:E}=Vl({showing:O,configureAnchorEl:Tl}),{show:nl,hide:W}=Fl({showing:O,canShow:L,handleShow:$l,handleHide:Ll,hideOnRouteChange:j,processOnMount:!0});Object.assign(E,{delayShow:wl,delayHide:El});const{showPortal:x,hidePortal:sl,renderPortal:Cl}=jl(q,B,kl,"tooltip");if($.platform.is.mobile===!0){const b={anchorEl:o,innerRef:B,onClickOutside(M){return W(M),M.target.classList.contains("q-dialog__backdrop")&&Yl(M),!0}},rl=ll(()=>c.modelValue===null&&c.persistent!==!0&&O.value===!0);pl(rl,M=>{(M===!0?ql:_l)(b)}),yl(()=>{_l(b)})}function $l(b){x(),G(()=>{k=new MutationObserver(()=>Y()),k.observe(B.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),Y(),dl()}),S===void 0&&(S=pl(()=>$.screen.width+"|"+$.screen.height+"|"+c.self+"|"+c.anchor+"|"+$.lang.rtl,Y)),R(()=>{x(!0),d("show",b)},c.transitionDuration)}function Ll(b){z(),sl(),il(),R(()=>{sl(!0),d("hide",b)},c.transitionDuration)}function il(){k!==void 0&&(k.disconnect(),k=void 0),S!==void 0&&(S(),S=void 0),n(),vl(E,"tooltipTemp")}function Y(){Ol({targetEl:B.value,offset:c.offset,anchorEl:o.value,anchorOrigin:J.value,selfOrigin:F.value,maxHeight:c.maxHeight,maxWidth:c.maxWidth})}function wl(b){if($.platform.is.mobile===!0){hl(),document.body.classList.add("non-selectable");const rl=o.value,M=["touchmove","touchcancel","touchend","click"].map(fl=>[rl,fl,"delayHide","passiveCapture"]);gl(E,"tooltipTemp",M)}R(()=>{nl(b)},c.delay)}function El(b){$.platform.is.mobile===!0&&(vl(E,"tooltipTemp"),hl(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),R(()=>{W(b)},c.hideDelay)}function Tl(){if(c.noParentEvent===!0||o.value===null)return;const b=$.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];gl(E,"anchor",b)}function dl(){if(o.value!==null||c.scrollTarget!==void 0){Z.value=Gl(o.value,c.scrollTarget);const b=c.noParentEvent===!0?Y:W;a(Z.value,b)}}function Sl(){return O.value===!0?bl("div",{...H,ref:B,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",H.class],style:[H.style,ol.value],role:"tooltip"},Wl(X.default)):null}function kl(){return bl(zl,K.value,Sl)}return yl(il),Object.assign(q.proxy,{updatePosition:Y}),Cl}}),oe={class:"q-pa-none q-mt-none row col-xs-12 col-sm-4 col-md-3 col-lg-3"},ne={class:"q-ml-sm"},re={class:"q-ml-sm"},ue={class:"q-ml-sm"},se={class:"q-ml-sm"},ie={class:"q-ml-sm"},de={class:"q-ml-sm"},fe={class:"q-ml-sm"},me={class:"q-ml-sm"},ce={class:"q-ml-sm"},_e={class:"q-ml-sm"},Le=Xl({__name:"AdminDashboardPage",setup(c){const{locale:X}=ae({useScope:"global"}),d=Jl(),H=Kl(),S=w(""),k=w(!1),q=w(!1),$=w(!1),B=w(!1),O=w(!1),J=w(!1),F=w(!1),j=w(!1),G=w(!1),z=w(!1),R=a=>{S.value=a,k.value=!0},K=a=>{S.value=a,q.value=!0},ol=()=>{V("/api/admin/information/cntr/reset/"+S.value),q.value=!1},Z=()=>{V("/api/admin/share/cntr/reset/"+S.value),k.value=!1};return(a,n)=>(_(),h(xl,{id:"admin-page",padding:""},{default:e(()=>[T("div",oe,[l(g,{flat:"",class:"q-mr-md q-mb-md"},{default:e(()=>[l(v,null,{default:e(()=>[l(I,null,{default:e(()=>[l(r,{header:""},{default:e(()=>[u(t(a.$t("TITLE_SERVER_CONTROL")),1)]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("Host")),1)]),_:1}),l(r,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("BTN_LABEL_REBOOT_HOST"),onClick:n[0]||(n[0]=o=>$.value=!0)},null,8,["label"])]),_:1}),l(r,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("BTN_LABEL_SHUTDOWN_HOST"),onClick:n[1]||(n[1]=o=>B.value=!0)},null,8,["label"])]),_:1})]),_:1})]),_:1}),s(d).information.platform_system=="Linux"?(_(),h(m,{key:0},{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("Service (Linux only)")),1)]),_:1}),l(r,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("BTN_LABEL_INSTALL_SERVICE"),onClick:n[2]||(n[2]=o=>F.value=!0)},null,8,["label"])]),_:1}),l(r,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("BTN_LABEL_UNINSTALL_SERVICE"),onClick:n[3]||(n[3]=o=>j.value=!0)},null,8,["label"])]),_:1}),l(r,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("BTN_LABEL_RESTART_SERVICE"),onClick:n[4]||(n[4]=o=>O.value=!0)},null,8,["label"])]),_:1})]),_:1})]),_:1})):U("",!0)]),_:1})]),_:1})]),_:1}),l(g,{flat:"",class:"q-mr-md q-mb-md column"},{default:e(()=>[l(v,{style:{"flex-grow":"1"}},{default:e(()=>[l(I,null,{default:e(()=>[l(r,{header:""},{default:e(()=>[u(t(a.$t("Language")),1)]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("Selected language")),1)]),_:1}),l(r,null,{default:e(()=>[u(t(s(le)(s(X)))+", "+t(s(X)),1)]),_:1})]),_:1}),l(f,{side:""},{default:e(()=>[l(i,{flat:"",color:"primary",round:"",icon:"sym_o_translate",href:"https://github.com/photobooth-app/photobooth-app/blob/main/CONTRIBUTING.md#help-translate-the-app",target:"_blank"},{default:e(()=>[l(al,{class:""},{default:e(()=>[u(t(a.$t("Learn how to help translating the app")),1)]),_:1})]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("Browsers preferred languages")),1)]),_:1}),(_(!0),P(Q,null,D(s(ee),(o,L)=>(_(),h(r,{key:o,class:Zl({"text-italic":L==0})},{default:e(()=>[u(t(o),1)]),_:2},1032,["class"]))),128))]),_:1}),l(f,{side:""},{default:e(()=>[l(i,{flat:"",color:"primary",round:"",icon:"sym_o_open_in_new",href:"https://github.com/photobooth-app/photobooth-frontend/tree/main/src/i18n/locales",target:"_blank"},{default:e(()=>[l(al,{class:""},{default:e(()=>[u(t(a.$t("Check which languages are supported by the app.")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(el),l(C,{align:"right",vertical:""},{default:e(()=>[l(i,{flat:"",color:"primary",onClick:n[5]||(n[5]=o=>s(te)())},{default:e(()=>[u(t(a.$t("Translate in context using Crowdin")),1)]),_:1})]),_:1})]),_:1}),l(g,{flat:"",class:"q-mr-md q-mb-md"},{default:e(()=>[l(v,null,{default:e(()=>[l(I,null,{default:e(()=>[l(r,{header:""},{default:e(()=>[u(t(a.$t("system information")),1)]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("data directory")),1)]),_:1}),l(r,null,{default:e(()=>[u(t(s(d).information.data_directory),1)]),_:1})]),_:1}),l(f,{side:""},{default:e(()=>[l(i,{flat:"",round:"",color:"primary",icon:"sym_o_folder_shared",to:"/admin/files"})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("app version")),1)]),_:1}),l(r,null,{default:e(()=>[u(t(s(d).information.version),1)]),_:1})]),_:1}),l(f,{side:""},{default:e(()=>[l(i,{flat:"",round:"",color:"primary",icon:"sym_o_upgrade",href:"https://pypi.org/project/photobooth-app/",target:"_blank"})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("cpu load")),1)]),_:1}),l(r,null,{default:e(()=>[l(tl,{size:"lg",value:s(d).information.cpu_percent/100},null,8,["value"])]),_:1}),l(r,null,{default:e(()=>[u(t(s(d).information.cpu_percent)+"% ",1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("disk space")),1)]),_:1}),l(r,null,{default:e(()=>[l(tl,{size:"lg",value:s(d).information.disk.used/s(d).information.disk.total},null,8,["value"])]),_:1}),l(r,null,{default:e(()=>[u(t((s(d).information.disk.free/1024**3).toFixed(1))+t(a.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("memory")),1)]),_:1}),l(r,null,{default:e(()=>[l(tl,{size:"lg",value:s(d).information.memory.used/s(d).information.memory.total},null,8,["value"])]),_:1}),l(r,null,{default:e(()=>[u(t((s(d).information.memory.available/1024**3).toFixed(1))+t(a.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),s(d).information.battery_percent!==null?(_(),h(m,{key:0},{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("Battery")),1)]),_:1}),l(r,null,{default:e(()=>[l(tl,{size:"lg",value:s(d).information.battery_percent/100},null,8,["value"])]),_:1}),l(r,null,{default:e(()=>[u(t(s(d).information.battery_percent.toFixed(0))+"% ",1)]),_:1})]),_:1})]),_:1})):U("",!0),Object.keys(s(d).information.temperatures).length>0?(_(),h(m,{key:1},{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("System Temperatures")),1)]),_:1}),(_(!0),P(Q,null,D(s(d).information.temperatures,(o,L,E)=>(_(),h(m,{key:E},{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(L),1)]),_:2},1024),l(r,null,{default:e(()=>[u(t(o),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):U("",!0)]),_:1})]),_:1})]),_:1}),l(g,{flat:"",class:"q-mr-md q-mb-md"},{default:e(()=>[l(v,null,{default:e(()=>[l(I,null,{default:e(()=>[l(r,{header:""},{default:e(()=>[u(t(a.$t("platform")),1)]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("hostname")),1)]),_:1}),l(r,null,{default:e(()=>[u(t(s(d).information.platform_node),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("machine")),1)]),_:1}),l(r,null,{default:e(()=>[u(t(a.$t("{platform_machine}, {cpu_count} cores",{platform_machine:s(d).information.platform_machine,cpu_count:s(d).information.platform_cpu_count})),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("platform system")),1)]),_:1}),l(r,null,{default:e(()=>[u(t(s(d).information.platform_system)+" "+t(s(d).information.platform_release),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("computer model")),1)]),_:1}),l(r,null,{default:e(()=>[u(t(s(d).information.model),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("python executable")),1)]),_:1}),l(r,null,{default:e(()=>[u(t(s(d).information.python_executable),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(a.$t("python version")),1)]),_:1}),l(r,null,{default:e(()=>[u(t(s(d).information.platform_python_version),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(g,{flat:"",class:"q-mr-md q-mb-md column"},{default:e(()=>[l(v,{style:{"flex-grow":"1"}},{default:e(()=>[l(I,null,{default:e(()=>[l(r,{header:""},{default:e(()=>[u(t(a.$t("Media Database")),1)]),_:1}),Object.keys(s(d).information.mediacollection).length==0?(_(),h(m,{key:0},{default:e(()=>[u(t(a.$t("Currently there is no item to display.")),1)]),_:1})):U("",!0),(_(!0),P(Q,null,D(s(d).information.mediacollection,(o,L)=>(_(),h(m,{key:L},{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(L),1)]),_:2},1024),l(r,null,{default:e(()=>[l(r,null,{default:e(()=>[u(t(o),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l(el),l(C,{align:"right",vertical:""},{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("BTN_LABEL_DELETE_ALL_MEDIA_FILES"),onClick:n[6]||(n[6]=o=>G.value=!0)},null,8,["label"]),l(i,{flat:"",color:"primary",label:a.$t("Clear recycle directory"),onClick:n[7]||(n[7]=o=>z.value=!0)},null,8,["label"])]),_:1})]),_:1}),(_(!0),P(Q,null,D(s(d).information.backends,(o,L,E)=>(_(),h(g,{key:E,flat:"",class:"q-mr-md q-mb-md"},{default:e(()=>[l(v,null,{default:e(()=>[l(I,null,{default:e(()=>[l(r,{header:""},{default:e(()=>[u(t(a.$t("Backend Index: "))+t(E),1)]),_:2},1024),(_(!0),P(Q,null,D(o,(nl,W,x)=>(_(),h(m,{key:x},{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(W),1)]),_:2},1024),l(r,null,{default:e(()=>[u(t(nl),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),l(g,{flat:"",class:"q-mr-md q-mb-md column"},{default:e(()=>[l(v,{style:{"flex-grow":"1"}},{default:e(()=>[l(I,null,{default:e(()=>[l(r,{header:""},{default:e(()=>[u(t(a.$t("Stats counter")),1)]),_:1}),Object.keys(s(d).information.stats_counter).length==0?(_(),h(m,{key:0},{default:e(()=>[u(t(a.$t("Currently there is no item to display.")),1)]),_:1})):U("",!0),(_(!0),P(Q,null,D(s(d).information.stats_counter,(o,L)=>(_(),h(m,{key:L},{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(o.action),1)]),_:2},1024),l(r,null,{default:e(()=>[l(al,null,{default:e(()=>[u(" last used at: "+t(o.last_used_at),1)]),_:2},1024),l(r,null,{default:e(()=>[u(t(o.count),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),l(f,{side:""},{default:e(()=>[l(i,{flat:"",color:"primary",icon:"sym_o_history",onClick:E=>K(o.action)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l(el),l(C,{align:"right"},{default:e(()=>[l(i,{flat:"",color:"primary",label:"reset",onClick:n[8]||(n[8]=o=>K(""))})]),_:1})]),_:1}),l(g,{flat:"",class:"q-mr-md q-mb-md column"},{default:e(()=>[l(v,{style:{"flex-grow":"1"}},{default:e(()=>[l(I,null,{default:e(()=>[l(r,{header:""},{default:e(()=>[u(t(a.$t("Limits counter")),1)]),_:1}),Object.keys(s(d).information.limits_counter).length==0?(_(),h(m,{key:0},{default:e(()=>[u(t(a.$t("Currently there is no item to display.")),1)]),_:1})):U("",!0),(_(!0),P(Q,null,D(s(d).information.limits_counter,(o,L)=>(_(),h(m,{key:L},{default:e(()=>[l(f,null,{default:e(()=>[l(r,{caption:""},{default:e(()=>[u(t(o.action),1)]),_:2},1024),l(r,null,{default:e(()=>[l(al,null,{default:e(()=>[u(" last used at: "+t(o.last_used_at),1)]),_:2},1024),l(r,null,{default:e(()=>[u(t(o.count),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),l(f,{side:""},{default:e(()=>[l(i,{flat:"",color:"primary",icon:"sym_o_history",onClick:E=>R(o.action)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l(el),l(C,{align:"right"},{default:e(()=>[l(i,{flat:"",color:"primary",label:"reset",onClick:n[9]||(n[9]=o=>R(""))})]),_:1})]),_:1})]),l(A,{modelValue:$.value,"onUpdate:modelValue":n[11]||(n[11]=o=>$.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),T("span",ne,t(a.$t("MSG_CONFIRM_REBOOT")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL"),color:"primary"},null,8,["label"]),[[y]]),p(l(i,{label:a.$t("BTN_LABEL_REBOOT"),color:"primary",onClick:n[10]||(n[10]=o=>s(V)("/api/system/server/reboot"))},null,8,["label"]),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(A,{modelValue:B.value,"onUpdate:modelValue":n[13]||(n[13]=o=>B.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_power_settings_new",color:"primary","text-color":"white"}),T("span",re,t(a.$t("MSG_CONFIRM_SHUTDOWN")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[y]]),p(l(i,{label:a.$t("BTN_LABEL_SHUTDOWN"),color:"primary",onClick:n[12]||(n[12]=o=>s(V)("/api/system/server/shutdown"))},null,8,["label"]),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(A,{modelValue:O.value,"onUpdate:modelValue":n[15]||(n[15]=o=>O.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),T("span",ue,t(a.$t("MSG_CONFIRM_RESTART_SERVICE")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[y]]),p(l(i,{label:a.$t("BTN_LABEL_RESTART_SERVICE"),color:"primary",onClick:n[14]||(n[14]=o=>s(V)("/api/system/service/restart"))},null,8,["label"]),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(A,{modelValue:J.value,"onUpdate:modelValue":n[17]||(n[17]=o=>J.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),T("span",se,t(a.$t("MSG_CONFIRM_RELOAD_SERVICE")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[y]]),p(l(i,{label:a.$t("BTN_LABEL_RELOAD_SERVICE"),color:"primary",onClick:n[16]||(n[16]=o=>s(V)("/api/system/service/reload"))},null,8,["label"]),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(A,{modelValue:F.value,"onUpdate:modelValue":n[19]||(n[19]=o=>F.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_add_circle",color:"primary","text-color":"white"}),T("span",ie,t(a.$t("MSG_CONFIRM_INSTALL_SERVICE")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[y]]),p(l(i,{label:a.$t("BTN_LABEL_INSTALL_SERVICE"),color:"primary",onClick:n[18]||(n[18]=o=>s(V)("/api/system/service/install"))},null,8,["label"]),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(A,{modelValue:j.value,"onUpdate:modelValue":n[21]||(n[21]=o=>j.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_cancel",color:"primary","text-color":"white"}),T("span",de,t(a.$t("MSG_CONFIRM_UNINSTALL_SERVICE")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[y]]),p(l(i,{label:a.$t("BTN_LABEL_UNINSTALL_SERVICE"),color:"primary",onClick:n[20]||(n[20]=o=>s(V)("/api/system/service/uninstall"))},null,8,["label"]),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(A,{modelValue:q.value,"onUpdate:modelValue":n[23]||(n[23]=o=>q.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm"},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_history",color:"primary","text-color":"white"}),T("span",fe,t(a.$t("Are you sure you want to reset the usage statistics counter?")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:"Cancel",color:"primary"},null,512),[[y]]),p(l(i,{label:"Yes, reset!",color:"primary",onClick:n[22]||(n[22]=o=>ol())},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(A,{modelValue:k.value,"onUpdate:modelValue":n[25]||(n[25]=o=>k.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm"},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_history",color:"primary","text-color":"white"}),T("span",me,t(a.$t("Are you sure you want to reset the share limits counter?")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:"Cancel",color:"primary"},null,512),[[y]]),p(l(i,{label:"Yes, reset!",color:"primary",onClick:n[24]||(n[24]=o=>Z())},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(A,{modelValue:G.value,"onUpdate:modelValue":n[27]||(n[27]=o=>G.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm"},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_delete",color:"primary","text-color":"white"}),T("span",ce,t(a.$t("MSG_CONFIRM_DELETE_ALL_MEDIA_FILES")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:"Cancel",color:"primary"},null,512),[[y]]),p(l(i,{label:"Delete all",color:"primary",onClick:n[26]||(n[26]=o=>s(H).deleteAllItems())},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(A,{modelValue:z.value,"onUpdate:modelValue":n[29]||(n[29]=o=>z.value=o)},{default:e(()=>[l(g,{class:"q-pa-sm"},{default:e(()=>[l(v,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(N,{icon:"sym_o_delete",color:"primary","text-color":"white"}),T("span",_e,t(a.$t("Are you sure to clear the recycle directory?")),1)]),_:1}),l(C,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:"Cancel",color:"primary"},null,512),[[y]]),p(l(i,{label:"Yes, clear!",color:"primary",onClick:n[28]||(n[28]=o=>s(V)("/api/admin/files/clearrecycledir"))},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{Le as default};
