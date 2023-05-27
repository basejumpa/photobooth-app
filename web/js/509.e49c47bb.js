"use strict";(globalThis["webpackChunkqPhotobooth"]=globalThis["webpackChunkqPhotobooth"]||[]).push([[509],{7343:(e,t,i)=>{i.d(t,{Z:()=>P});var a=i(9835),l=i(6970);const r={class:"q-mr-sm"},n={class:"q-mr-sm"},o={class:"q-gutter-sm"};function s(e,t,i,s,d,g){const m=(0,a.up)("q-btn"),c=(0,a.up)("q-space"),u=(0,a.up)("q-icon"),h=(0,a.up)("q-toolbar"),p=(0,a.up)("q-linear-progress"),w=(0,a.up)("q-header"),I=(0,a.up)("q-drawer"),y=(0,a.up)("q-carousel-slide"),S=(0,a.up)("q-carousel"),f=(0,a.up)("vue-qrcode"),v=(0,a.up)("q-page-sticky"),b=(0,a.up)("q-page-container"),q=(0,a.up)("q-layout"),D=(0,a.Q2)("close-popup"),x=(0,a.Q2)("touch-swipe");return(0,a.wg)(),(0,a.j4)(q,{view:"hhh Lpr ffr",onClick:g.abortTimer},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{elevated:"",class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(m,{flat:"",class:"q-mr-sm",icon:"delete",label:"Delete",onClick:t[0]||(t[0]=e=>g.deleteImage(s.currentSlideId))},null,512),[[D]]),(0,a.Wm)(m,{flat:"",class:"q-mr-sm",icon:"download",label:"Download",onClick:t[1]||(t[1]=e=>{s.openURL(s.store.gallery.images[s.currentSlideIndex]["full"])})}),(0,a.Wm)(m,{flat:"",class:"q-mr-sm",icon:"print",label:"Print"}),(0,a.Wm)(m,{flat:"",class:"q-mr-sm",icon:"filter",label:"Filter",onClick:s.toggleRightDrawer},null,8,["onClick"]),(0,a.Wm)(c),(0,a._)("div",r,[(0,a.Wm)(u,{name:"tag"}),(0,a._)("span",null,(0,l.zw)(s.currentSlideIndex+1)+" of "+(0,l.zw)(s.store.gallery.images.length)+" total",1)]),(0,a.Wm)(c),(0,a._)("div",n,[(0,a.Wm)(u,{name:"image"}),(0,a.Uk)(" "+(0,l.zw)(s.store.gallery.images[s.currentSlideIndex]["caption"]),1)]),(0,a.Wm)(c),(0,a.wy)((0,a.Wm)(m,{dense:"",flat:"",icon:"close"},null,512),[[D]])])),_:1}),d.displayLinearProgressBar&&d.remainingSeconds>0?((0,a.wg)(),(0,a.j4)(p,{key:0,value:d.remainingSecondsNormalized,"animation-speed":"200",color:"grey"},null,8,["value"])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(I,{modelValue:s.rightDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=e=>s.rightDrawerOpen=e),side:"right",elevated:"",overlay:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" FILTER previews here ")])),_:1},8,["modelValue"]),(0,a.Wm)(b,{class:"q-pa-none galleryimagedetail full-height"},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(S,{class:"bg-image",style:{width:"100%",height:"100%"},"control-type":"flat","control-color":"primary",swipeable:"",animated:"",modelValue:s.currentSlideId,"onUpdate:modelValue":t[3]||(t[3]=e=>s.currentSlideId=e),thumbnails:"",autoplay:s.autoplay,draggable:"false",arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onTransition:t[4]||(t[4]=(e,t)=>{s.currentSlideIndex=s.store.gallery.images.findIndex((t=>t.id===e)),g.abortTimer()})},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.slicedImages,(e=>((0,a.wg)(),(0,a.j4)(y,{"img-src":e.preview,key:e.id,name:e.id},null,8,["img-src","name"])))),128))])),_:1},8,["modelValue","autoplay"])),[[x,s.handleSwipeDown,void 0,{mouse:!0,down:!0}]]),(0,a.Wm)(v,{position:"top-right",offset:[30,30]},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a.Wm)(f,{type:"image/png",tag:"svg",margin:2,width:200,"error-correction-level":"low",color:{dark:"#111111",light:"#EEEEEE"},value:g.getImageQrData()},null,8,["value"])])])),_:1})])),_:1})])),_:1},8,["onClick"])}i(8964),i(9665);var d=i(528),g=i(499),m=i(7575),c=i(6694),u=i(3752);const h={props:{indexSelected:{type:Number,required:!0}},computed:{slicedImages(){this.store.gallery.images.length;var e=Math.max(0,this.currentSlideIndex-2),t=Math.max(0,this.currentSlideIndex+3);return this.store.gallery.images.slice(e,t)}},beforeCreate(){console.log(this.indexSelected),this.currentSlideIndex=this.indexSelected,this.currentSlideId=this.store.gallery.images[this.indexSelected].id},data(){return{intervalTimerId:null,remainingSeconds:0,remainingSecondsNormalized:0,displayLinearProgressBar:!0}},setup(){const e=(0,m.h)(),t=(0,c.R)(),i=(0,g.iH)(!1);return{store:e,uiSettingsStore:t,openURL:u.Z,fabRight:(0,g.iH)(!1),currentSlideId:(0,g.iH)(""),currentSlideIndex:(0,g.iH)(0),autoplay:(0,g.iH)(!1),showFilterDialog:(0,g.iH)(!1),rightDrawerOpen:i,toggleRightDrawer(){i.value=!i.value},handleSwipeDown({evt:e}){console.log("TODO: add method to close dialog programmatically")}}},components:{VueQrcode:d.ZP},mounted(){this.startTimer()},beforeUnmount(){clearInterval(this.intervalTimerId)},methods:{deleteImage(e){this.$api.get("/mediacollection/delete",{params:{image_id:e}}).then((e=>{console.log(e),this.store.gallery.images.splice(this.currentSlideIndex,1)})).catch((e=>console.log(e)))},getImageDetail(e,t="thumbnail"){return this.store.gallery.images[e][t]},getImageQrData(){const e=String(this.uiSettingsStore.uiSettings.EXT_DOWNLOAD_URL).replace("{filename}",this.store.gallery.images[this.currentSlideIndex]["filename"]);return e},abortTimer(){clearInterval(this.intervalTimerId),this.remainingSeconds=0,this.remainingSecondsNormalized=0},startTimer(){var e=this.uiSettingsStore.uiSettings["AUTOCLOSE_NEW_ITEM_ARRIVED"];console.log(`starting newitemarrived timer, duration=${e}`),this.remainingSeconds=e,this.intervalTimerId=setInterval((()=>{this.remainingSecondsNormalized=this.remainingSeconds/e,this.remainingSeconds-=.05,this.remainingSeconds<=0&&(clearInterval(this.intervalTimerId),this.$router.push({path:"/"}))}),50)}}};var p=i(1639),w=i(7605),I=i(6602),y=i(1663),S=i(8879),f=i(136),v=i(2857),b=i(8289),q=i(906),D=i(2133),x=i(7052),_=i(1694),Z=i(627),k=i(2146),Q=i(4871),W=i(9984),T=i.n(W);const C=(0,p.Z)(h,[["render",s],["__scopeId","data-v-ce07d0dc"]]),P=C;T()(h,"components",{QLayout:w.Z,QHeader:I.Z,QToolbar:y.Z,QBtn:S.Z,QSpace:f.Z,QIcon:v.Z,QLinearProgress:b.Z,QDrawer:q.Z,QPageContainer:D.Z,QCarousel:x.Z,QCarouselSlide:_.Z,QPageSticky:Z.Z}),T()(h,"directives",{ClosePopup:k.Z,TouchSwipe:Q.Z})},9509:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var a=i(9835),l=i(6970);const r={class:"row justify-center q-gutter-sm"},n={class:"absolute-bottom text-subtitle2"};function o(e,t,i,o,s,d){const g=(0,a.up)("q-img"),m=(0,a.up)("q-card"),c=(0,a.up)("q-intersection"),u=(0,a.up)("gallery-image-detail"),h=(0,a.up)("q-dialog"),p=(0,a.up)("q-page-sticky"),w=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(w,{padding:""},{default:(0,a.w5)((()=>[(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.store.gallery.images,((e,t)=>((0,a.wg)(),(0,a.j4)(c,{key:e.id,once:"",class:"preview-item"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"q-ma-sm",onClick:e=>d.openPic(t)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{src:d.getImageDetail(t),loading:"eager","no-transition":"","no-spinner":"",ratio:1},{default:(0,a.w5)((()=>[(0,a._)("div",n,(0,l.zw)(this.store.gallery.images[t].caption),1)])),_:2},1032,["src"])])),_:2},1032,["onClick"])])),_:2},1024)))),128))]),(0,a.Wm)(h,{"transition-show":"jump-up","transition-hide":"jump-down",modelValue:o.showImageDetail,"onUpdate:modelValue":t[0]||(t[0]=e=>o.showImageDetail=e),maximized:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{indexSelected:o.indexSelected,class:"full-height"},null,8,["indexSelected"])])),_:1},8,["modelValue"]),(0,a.Wm)(p,{position:"top-left",offset:[20,20]})])),_:1})}var s=i(7575),d=i(499),g=i(7343);const m={components:{GalleryImageDetail:g.Z},setup(){const e=(0,s.h)();return{store:e,GalleryImageDetail:g.Z,indexSelected:(0,d.iH)(null),showImageDetail:(0,d.iH)(!1)}},computed:{numberOfImages:{get(){return console.log(Object.keys(this.store.gallery["images"]).length),Object.keys(this.store.gallery["images"]).length}},itemId(){return this.$route.params.id}},mounted(){this.$api.get("/mediacollection/getitems").then((e=>{if(console.log(e),this.store.gallery.images=e.data,this.itemId){console.log(`initial id given, try loading image id: ${this.itemId}`);const e=this.store.gallery.images.findIndex((e=>e.id===this.itemId));-1!=e?(console.log(`found image at index no: ${e}`),this.openPic(e)):console.error(`initial id given not found: ${this.itemId}`)}})).catch((e=>console.log(e)))},methods:{getImageDetail(e,t="thumbnail"){return this.store.gallery.images[e][t]},openPic(e){console.log(e),this.indexSelected=e,this.showImageDetail=!0}}};var c=i(1639),u=i(9885),h=i(1517),p=i(4458),w=i(335),I=i(2074),y=i(627),S=i(9984),f=i.n(S);const v=(0,c.Z)(m,[["render",o],["__scopeId","data-v-7a6d5314"]]),b=v;f()(m,"components",{QPage:u.Z,QIntersection:h.Z,QCard:p.Z,QImg:w.Z,QDialog:I.Z,QPageSticky:y.Z})}}]);