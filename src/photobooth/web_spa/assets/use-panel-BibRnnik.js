import{I as ge,ax as V,aH as B,be as X,O as we,ay as $,b7 as R,bf as me,an as oe,bg as Ce,ad as J,f as We,ap as Ie,a2 as Fe,ar as Ve,a3 as xe,a4 as Xe,at as qe,a_ as je,bh as ue,bi as Ye,j as F,k as p,av as He,bj as Re,$ as x,bk as Ue,ae as pe,l as Ke,m as Qe,n as Ge,i as A,L as he,M as de,T as Je,aG as Ze,bl as et}from"./index-DuSR13Tw.js";import{c as ke}from"./selection-9ajFdbS0.js";import{b as G}from"./format-CJebrXOQ.js";const ce={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},tt=Object.keys(ce);ce.all=!0;function Z(t){const a={};for(const u of tt)t[u]===!0&&(a[u]=!0);return Object.keys(a).length===0?ce:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const nt=["INPUT","TEXTAREA"];function ee(t,a){return a.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof a.handler=="function"&&nt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(a.uid)===-1)}function le(t,a,u){const h=R(t);let n,e=h.left-a.event.x,o=h.top-a.event.y,s=Math.abs(e),d=Math.abs(o);const c=a.direction;c.horizontal===!0&&c.vertical!==!0?n=e<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?n=o<0?"up":"down":c.up===!0&&o<0?(n="up",s>d&&(c.left===!0&&e<0?n="left":c.right===!0&&e>0&&(n="right"))):c.down===!0&&o>0?(n="down",s>d&&(c.left===!0&&e<0?n="left":c.right===!0&&e>0&&(n="right"))):c.left===!0&&e<0?(n="left",s<d&&(c.up===!0&&o<0?n="up":c.down===!0&&o>0&&(n="down"))):c.right===!0&&e>0&&(n="right",s<d&&(c.up===!0&&o<0?n="up":c.down===!0&&o>0&&(n="down")));let r=!1;if(n===void 0&&u===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};n=a.event.lastDir,r=!0,n==="left"||n==="right"?(h.left-=e,s=0,e=0):(h.top-=o,d=0,o=0)}return{synthetic:r,payload:{evt:t,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:h,direction:n,isFirst:a.event.isFirst,isFinal:u===!0,duration:Date.now()-a.event.time,distance:{x:s,y:d},offset:{x:e,y:o},delta:{x:h.left-a.event.lastX,y:h.top-a.event.lastY}}}}let at=0;const se=ge({name:"touch-pan",beforeMount(t,{value:a,modifiers:u}){if(u.mouse!==!0&&B.has.touch!==!0)return;function h(e,o){u.mouse===!0&&o===!0?J(e):(u.stop===!0&&oe(e),u.prevent===!0&&me(e))}const n={uid:"qvtp_"+at++,handler:a,modifiers:u,direction:Z(u),noop:we,mouseStart(e){ee(e,n)&&Ce(e)&&($(n,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),n.start(e,!0))},touchStart(e){if(ee(e,n)){const o=e.target;$(n,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),n.start(e)}},start(e,o){if(B.is.firefox===!0&&X(t,!0),n.lastEvt=e,o===!0||u.stop===!0){if(n.direction.all!==!0&&(o!==!0||n.modifiers.mouseAllDir!==!0&&n.modifiers.mousealldir!==!0)){const c=e.type.indexOf("mouse")!==-1?new MouseEvent(e.type,e):new TouchEvent(e.type,e);e.defaultPrevented===!0&&me(c),e.cancelBubble===!0&&oe(c),Object.assign(c,{qKeyEvent:e.qKeyEvent,qClickOutside:e.qClickOutside,qAnchorHandled:e.qAnchorHandled,qClonedBy:e.qClonedBy===void 0?[n.uid]:e.qClonedBy.concat(n.uid)}),n.initialEvent={target:e.target,event:c}}oe(e)}const{left:s,top:d}=R(e);n.event={x:s,y:d,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:d}},move(e){if(n.event===void 0)return;const o=R(e),s=o.left-n.event.x,d=o.top-n.event.y;if(s===0&&d===0)return;n.lastEvt=e;const c=n.event.mouse===!0,r=()=>{h(e,c);let g;u.preserveCursor!==!0&&u.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ke(),n.styleCleanup=f=>{if(n.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),c===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{P(),f()},50):P()}else f!==void 0&&f()}};if(n.event.detected===!0){n.event.isFirst!==!0&&h(e,n.event.mouse);const{payload:g,synthetic:f}=le(e,n,!1);g!==void 0&&(n.handler(g)===!1?n.end(e):(n.styleCleanup===void 0&&n.event.isFirst===!0&&r(),n.event.lastX=g.position.left,n.event.lastY=g.position.top,n.event.lastDir=f===!0?void 0:g.direction,n.event.isFirst=!1));return}if(n.direction.all===!0||c===!0&&(n.modifiers.mouseAllDir===!0||n.modifiers.mousealldir===!0)){r(),n.event.detected=!0,n.move(e);return}const w=Math.abs(s),m=Math.abs(d);w!==m&&(n.direction.horizontal===!0&&w>m||n.direction.vertical===!0&&w<m||n.direction.up===!0&&w<m&&d<0||n.direction.down===!0&&w<m&&d>0||n.direction.left===!0&&w>m&&s<0||n.direction.right===!0&&w>m&&s>0?(n.event.detected=!0,n.move(e)):n.end(e,!0))},end(e,o){if(n.event!==void 0){if(V(n,"temp"),B.is.firefox===!0&&X(t,!1),o===!0)n.styleCleanup!==void 0&&n.styleCleanup(),n.event.detected!==!0&&n.initialEvent!==void 0&&n.initialEvent.target.dispatchEvent(n.initialEvent.event);else if(n.event.detected===!0){n.event.isFirst===!0&&n.handler(le(e===void 0?n.lastEvt:e,n).payload);const{payload:s}=le(e===void 0?n.lastEvt:e,n,!0),d=()=>{n.handler(s)};n.styleCleanup!==void 0?n.styleCleanup(d):d()}n.event=void 0,n.initialEvent=void 0,n.lastEvt=void 0}}};if(t.__qtouchpan=n,u.mouse===!0){const e=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";$(n,"main",[[t,"mousedown","mouseStart",`passive${e}`]])}B.has.touch===!0&&$(n,"main",[[t,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,a){const u=t.__qtouchpan;u!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&u.end(),u.handler=a.value),u.direction=Z(a.modifiers))},beforeUnmount(t){const a=t.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),V(a,"main"),V(a,"temp"),B.is.firefox===!0&&X(t,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete t.__qtouchpan)}}),ye=150,ct=We({name:"QDrawer",inheritAttrs:!1,props:{...Ve,...Fe,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ie,"onLayout","miniState"],setup(t,{slots:a,emit:u,attrs:h}){const n=xe(),{proxy:{$q:e}}=n,o=Xe(t,e),{preventBodyScroll:s}=Ue(),{registerTimeout:d,removeTimeout:c}=qe(),r=je(Ye,ue);if(r===ue)return console.error("QDrawer needs to be child of QLayout"),ue;let w,m=null,g;const f=F(t.behavior==="mobile"||t.behavior!=="desktop"&&r.totalWidth.value<=t.breakpoint),P=p(()=>t.mini===!0&&f.value!==!0),C=p(()=>P.value===!0?t.miniWidth:t.width),y=F(t.showIfAbove===!0&&f.value===!1?!0:t.modelValue===!0),j=p(()=>t.persistent!==!0&&(f.value===!0||Pe.value===!0));function Y(i,v){if(U(),i!==!1&&r.animate(),T(0),f.value===!0){const k=r.instances[q.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),D(1),r.isContainer.value!==!0&&s(!0)}else D(0),i!==!1&&ae(!1);d(()=>{i!==!1&&ae(!0),v!==!0&&u("show",i)},ye)}function L(i,v){W(),i!==!1&&r.animate(),D(0),T(E.value*C.value),ie(),v!==!0?d(()=>{u("hide",i)},ye):c()}const{show:z,hide:N}=He({showing:y,hideOnRouteChange:j,handleShow:Y,handleHide:L}),{addToHistory:U,removeFromHistory:W}=Re(y,N,j),I={belowBreakpoint:f,hide:N},S=p(()=>t.side==="right"),E=p(()=>(e.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),K=F(0),M=F(!1),l=F(!1),b=F(C.value*E.value),q=p(()=>S.value===!0?"left":"right"),O=p(()=>y.value===!0&&f.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:C.value:0),te=p(()=>t.overlay===!0||t.miniToOverlay===!0||r.view.value.indexOf(S.value?"R":"L")!==-1||e.platform.is.ios===!0&&r.isContainer.value===!0),H=p(()=>t.overlay===!1&&y.value===!0&&f.value===!1),Pe=p(()=>t.overlay===!0&&y.value===!0&&f.value===!1),Se=p(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&M.value===!1?" hidden":"")),Te=p(()=>({backgroundColor:`rgba(0,0,0,${K.value*.4})`})),ve=p(()=>S.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Be=p(()=>S.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ae=p(()=>{const i={};return r.header.space===!0&&ve.value===!1&&(te.value===!0?i.top=`${r.header.offset}px`:r.header.space===!0&&(i.top=`${r.header.size}px`)),r.footer.space===!0&&Be.value===!1&&(te.value===!0?i.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(i.bottom=`${r.footer.size}px`)),i}),Ee=p(()=>{const i={width:`${C.value}px`,transform:`translateX(${b.value}px)`};return f.value===!0?i:Object.assign(i,Ae.value)}),Me=p(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Oe=p(()=>`q-drawer q-drawer--${t.side}`+(l.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(te.value===!0||H.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(ve.value===!0?" q-drawer--top-padding":""))),De=p(()=>{const i=e.lang.rtl===!0?t.side:q.value;return[[se,ze,void 0,{[i]:!0,mouse:!0}]]}),_e=p(()=>{const i=e.lang.rtl===!0?q.value:t.side;return[[se,fe,void 0,{[i]:!0,mouse:!0}]]}),$e=p(()=>{const i=e.lang.rtl===!0?q.value:t.side;return[[se,fe,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function ne(){Ne(f,t.behavior==="mobile"||t.behavior!=="desktop"&&r.totalWidth.value<=t.breakpoint)}x(f,i=>{i===!0?(w=y.value,y.value===!0&&N(!1)):t.overlay===!1&&t.behavior!=="mobile"&&w!==!1&&(y.value===!0?(T(0),D(0),ie()):z(!1))}),x(()=>t.side,(i,v)=>{r.instances[v]===I&&(r.instances[v]=void 0,r[v].space=!1,r[v].offset=0),r.instances[i]=I,r[i].size=C.value,r[i].space=H.value,r[i].offset=O.value}),x(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ne()}),x(()=>t.behavior+t.breakpoint,ne),x(r.isContainer,i=>{y.value===!0&&s(i!==!0),i===!0&&ne()}),x(r.scrollbarWidth,()=>{T(y.value===!0?0:void 0)}),x(O,i=>{_("offset",i)}),x(H,i=>{u("onLayout",i),_("space",i)}),x(S,()=>{T()}),x(C,i=>{T(),re(t.miniToOverlay,i)}),x(()=>t.miniToOverlay,i=>{re(i,C.value)}),x(()=>e.lang.rtl,()=>{T()}),x(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Le(),r.animate())}),x(P,i=>{u("miniState",i)});function T(i){i===void 0?pe(()=>{i=y.value===!0?0:C.value,T(E.value*i)}):(r.isContainer.value===!0&&S.value===!0&&(f.value===!0||Math.abs(i)===C.value)&&(i+=E.value*r.scrollbarWidth.value),b.value=i)}function D(i){K.value=i}function ae(i){const v=i===!0?"remove":r.isContainer.value!==!0?"add":"";v!==""&&document.body.classList[v]("q-body--drawer-toggle")}function Le(){m!==null&&clearTimeout(m),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),l.value=!0,m=setTimeout(()=>{m=null,l.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ze(i){if(y.value!==!1)return;const v=C.value,k=G(i.distance.x,0,v);if(i.isFinal===!0){k>=Math.min(75,v)===!0?z():(r.animate(),D(0),T(E.value*v)),M.value=!1;return}T((e.lang.rtl===!0?S.value!==!0:S.value)?Math.max(v-k,0):Math.min(0,k-v)),D(G(k/v,0,1)),i.isFirst===!0&&(M.value=!0)}function fe(i){if(y.value!==!0)return;const v=C.value,k=i.direction===t.side,Q=(e.lang.rtl===!0?k!==!0:k)?G(i.distance.x,0,v):0;if(i.isFinal===!0){Math.abs(Q)<Math.min(75,v)===!0?(r.animate(),D(1),T(0)):N(),M.value=!1;return}T(E.value*Q),D(G(1-Q/v,0,1)),i.isFirst===!0&&(M.value=!0)}function ie(){s(!1),ae(!0)}function _(i,v){r.update(t.side,i,v)}function Ne(i,v){i.value!==v&&(i.value=v)}function re(i,v){_("size",i===!0?t.miniWidth:v)}return r.instances[t.side]=I,re(t.miniToOverlay,C.value),_("space",H.value),_("offset",O.value),t.showIfAbove===!0&&t.modelValue!==!0&&y.value===!0&&t["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),Ke(()=>{u("onLayout",H.value),u("miniState",P.value),w=t.showIfAbove===!0;const i=()=>{(y.value===!0?Y:L)(!1,!0)};if(r.totalWidth.value!==0){pe(i);return}g=x(r.totalWidth,()=>{g(),g=void 0,y.value===!1&&t.showIfAbove===!0&&f.value===!1?z(!1):i()})}),Qe(()=>{g!==void 0&&g(),m!==null&&(clearTimeout(m),m=null),y.value===!0&&ie(),r.instances[t.side]===I&&(r.instances[t.side]=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const i=[];f.value===!0&&(t.noSwipeOpen===!1&&i.push(Ge(A("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),De.value)),i.push(he("div",{ref:"backdrop",class:Se.value,style:Te.value,"aria-hidden":"true",onClick:N},void 0,"backdrop",t.noSwipeBackdrop!==!0&&y.value===!0,()=>$e.value)));const v=P.value===!0&&a.mini!==void 0,k=[A("div",{...h,key:""+v,class:[Me.value,h.class]},v===!0?a.mini():de(a.default))];return t.elevated===!0&&y.value===!0&&k.push(A("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(he("aside",{ref:"content",class:Oe.value,style:Ee.value},k,"contentclose",t.noSwipeClose!==!0&&f.value===!0,()=>_e.value)),A("div",{class:"q-drawer-container"},i)}}});function it(t){const a=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((u,h)=>{const n=parseFloat(u);n&&(a[h]=n)}),a}const rt=ge({name:"touch-swipe",beforeMount(t,{value:a,arg:u,modifiers:h}){if(h.mouse!==!0&&B.has.touch!==!0)return;const n=h.mouseCapture===!0?"Capture":"",e={handler:a,sensitivity:it(u),direction:Z(h),noop:we,mouseStart(o){ee(o,e)&&Ce(o)&&($(e,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(o,!0))},touchStart(o){if(ee(o,e)){const s=o.target;$(e,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),e.start(o)}},start(o,s){B.is.firefox===!0&&X(t,!0);const d=R(o);e.event={x:d.left,y:d.top,time:Date.now(),mouse:s===!0,dir:!1}},move(o){if(e.event===void 0)return;if(e.event.dir!==!1){J(o);return}const s=Date.now()-e.event.time;if(s===0)return;const d=R(o),c=d.left-e.event.x,r=Math.abs(c),w=d.top-e.event.y,m=Math.abs(w);if(e.event.mouse!==!0){if(r<e.sensitivity[1]&&m<e.sensitivity[1]){e.end(o);return}}else if(window.getSelection().toString()!==""){e.end(o);return}else if(r<e.sensitivity[2]&&m<e.sensitivity[2])return;const g=r/s,f=m/s;e.direction.vertical===!0&&r<m&&r<100&&f>e.sensitivity[0]&&(e.event.dir=w<0?"up":"down"),e.direction.horizontal===!0&&r>m&&m<100&&g>e.sensitivity[0]&&(e.event.dir=c<0?"left":"right"),e.direction.up===!0&&r<m&&w<0&&r<100&&f>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&r<m&&w>0&&r<100&&f>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&r>m&&c<0&&m<100&&g>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&r>m&&c>0&&m<100&&g>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(J(o),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ke(),e.styleCleanup=P=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};P===!0?setTimeout(C,50):C()}),e.handler({evt:o,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:s,distance:{x:r,y:m}})):e.end(o)},end(o){e.event!==void 0&&(V(e,"temp"),B.is.firefox===!0&&X(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),o!==void 0&&e.event.dir!==!1&&J(o),e.event=void 0)}};if(t.__qtouchswipe=e,h.mouse===!0){const o=h.mouseCapture===!0||h.mousecapture===!0?"Capture":"";$(e,"main",[[t,"mousedown","mouseStart",`passive${o}`]])}B.has.touch===!0&&$(e,"main",[[t,"touchstart","touchStart",`passive${h.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,a){const u=t.__qtouchswipe;u!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&u.end(),u.handler=a.value),u.direction=Z(a.modifiers))},beforeUnmount(t){const a=t.__qtouchswipe;a!==void 0&&(V(a,"main"),V(a,"temp"),B.is.firefox===!0&&X(t,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete t.__qtouchswipe)}});function ot(){let t=Object.create(null);return{getCache:(a,u)=>t[a]===void 0?t[a]=typeof u=="function"?u():u:t[a],setCache(a,u){t[a]=u},hasCache(a){return Object.hasOwnProperty.call(t,a)},clearCache(a){a!==void 0?delete t[a]:t=Object.create(null)}}}const vt={name:{required:!0},disable:Boolean},be={setup(t,{slots:a}){return()=>A("div",{class:"q-panel scroll",role:"tabpanel"},de(a.default))}},ft={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},mt=["update:modelValue","beforeTransition","transition"];function pt(){const{props:t,emit:a,proxy:u}=xe(),{getCache:h}=ot(),{registerTimeout:n}=qe();let e,o;const s=F(null),d={value:null};function c(l){const b=t.vertical===!0?"up":"left";W((u.$q.lang.rtl===!0?-1:1)*(l.direction===b?1:-1))}const r=p(()=>[[rt,c,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),w=p(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),m=p(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),g=p(()=>`--q-transition-duration: ${t.transitionDuration}ms`),f=p(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),P=p(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),C=p(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);x(()=>t.modelValue,(l,b)=>{const q=L(l)===!0?z(l):-1;o!==!0&&U(q===-1?0:q<z(b)?-1:1),d.value!==q&&(d.value=q,a("beforeTransition",l,b),n(()=>{a("transition",l,b)},t.transitionDuration))});function y(){W(1)}function j(){W(-1)}function Y(l){a("update:modelValue",l)}function L(l){return l!=null&&l!==""}function z(l){return e.findIndex(b=>b.props.name===l&&b.props.disable!==""&&b.props.disable!==!0)}function N(){return e.filter(l=>l.props.disable!==""&&l.props.disable!==!0)}function U(l){const b=l!==0&&t.animated===!0&&d.value!==-1?"q-transition--"+(l===-1?w.value:m.value):null;s.value!==b&&(s.value=b)}function W(l,b=d.value){let q=b+l;for(;q!==-1&&q<e.length;){const O=e[q];if(O!==void 0&&O.props.disable!==""&&O.props.disable!==!0){U(l),o=!0,a("update:modelValue",O.props.name),setTimeout(()=>{o=!1});return}q+=l}t.infinite===!0&&e.length!==0&&b!==-1&&b!==e.length&&W(l,l===-1?e.length:-1)}function I(){const l=z(t.modelValue);return d.value!==l&&(d.value=l),!0}function S(){const l=L(t.modelValue)===!0&&I()&&e[d.value];return t.keepAlive===!0?[A(et,P.value,[A(C.value===!0?h(f.value,()=>({...be,name:f.value})):be,{key:f.value,style:g.value},()=>l)])]:[A("div",{class:"q-panel scroll",style:g.value,key:f.value,role:"tabpanel"},[l])]}function E(){if(e.length!==0)return t.animated===!0?[A(Je,{name:s.value},S)]:S()}function K(l){return e=Ze(de(l.default,[])).filter(b=>b.props!==null&&b.props.slot===void 0&&L(b.props.name)===!0),e.length}function M(){return e}return Object.assign(u,{next:y,previous:j,goTo:Y}),{panelIndex:d,panelDirectives:r,updatePanelsList:K,updatePanelIndex:I,getPanelContent:E,getEnabledPanels:N,getPanels:M,isValidPanelName:L,keepAliveProps:P,needsUniqueKeepAliveWrapper:C,goToPanelByOffset:W,goToPanel:Y,nextPanel:y,previousPanel:j}}export{ct as Q,rt as T,mt as a,ft as b,pt as c,se as d,ot as e,vt as u};
