(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{fh9e:function(l,n,t){"use strict";t.r(n),t.d(n,"RentalPageModuleNgFactory",(function(){return O}));var u=t("8Y7J");class e{}var i=t("pMnS"),o=t("MKJQ"),r=t("sZkV"),a=t("SVse"),c=t("Uynf"),s=t("2GTJ"),b=t("3X0i"),h=t("occH"),p=t("s7LF"),m=t("mrSG");class d{constructor(l,n,t,u,e,i,o,r,a){this.navCtrl=l,this.icbservice=n,this.platform=t,this.toastCtrl=u,this.authentication=e,this.loading=i,this.ms=o,this.route=r,this.router=a,this.CodeSearch=""}searchTransDB(){this.loader.present().then(()=>{this.icbservice.searchTrans("book","GetBookCodes").then(l=>{this.books=l,this.loader.dismiss()}).catch(l=>{console.log(l),this.loader.dismiss()})})}FilterBookDB(l){this.CodeSearch=l.target.value}OnDestroy(){this.sub.unsubscribe()}ionViewWillEnter(){return Object(m.a)(this,void 0,void 0,(function*(){null!=this.authentication.getAccessToken()?(this.loader=yield this.loading.create({message:"Getting Rentals..."}),this.searchTransDB()):this.navCtrl.navigateForward("tabs/login")}))}markReturn(l){this.icbservice.markReturn(l).then(l=>Object(m.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:"Returned successfully !",duration:2e3})).present(),this.searchTransDB()})))}checkout(l){this.ms.setDestn(l),this.ms.setAction("Out"),this.ms.setHome("N"),this.navCtrl.navigateForward("tabs/checkoutPage")}}var f=t("ngBU"),g=t("dqLM"),B=t("iInd"),x=u.wb({encapsulation:0,styles:[[""]],data:{}});function v(l){return u.Xb(0,[(l()(),u.yb(0,0,null,null,1,"p",[["style","color:green;"]],null,null,null,null,null)),(l()(),u.Ub(1,null,[""," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.RenterName)}))}function y(l){return u.Xb(0,[(l()(),u.yb(0,0,null,null,4,"ion-button",[["color","danger"],["slot","end"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.markReturn(l.parent.context.$implicit.TransactionId)&&u),u}),o.L,o.d)),u.xb(1,49152,null,0,r.j,[u.h,u.l,u.B],{color:[0,"color"]},null),(l()(),u.yb(2,0,null,0,1,"ion-icon",[["name","refresh"]],null,null,null,o.V,o.n)),u.xb(3,49152,null,0,r.B,[u.h,u.l,u.B],{name:[0,"name"]},null),(l()(),u.Ub(-1,0,[" Return Book "]))],(function(l,n){l(n,1,0,"danger"),l(n,3,0,"refresh")}),null)}function k(l){return u.Xb(0,[(l()(),u.yb(0,0,null,null,4,"ion-button",[["color","primary"],["slot","end"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.checkout(l.parent.context.$implicit)&&u),u}),o.L,o.d)),u.xb(1,49152,null,0,r.j,[u.h,u.l,u.B],{color:[0,"color"]},null),(l()(),u.yb(2,0,null,0,1,"ion-icon",[["name","cart"]],null,null,null,o.V,o.n)),u.xb(3,49152,null,0,r.B,[u.h,u.l,u.B],{name:[0,"name"]},null),(l()(),u.Ub(-1,0,[" Check out "]))],(function(l,n){l(n,1,0,"primary"),l(n,3,0,"cart")}),null)}function C(l){return u.Xb(0,[(l()(),u.yb(0,0,null,null,13,"ion-item",[],null,null,null,o.Z,o.p)),u.xb(1,49152,null,0,r.G,[u.h,u.l,u.B],null,null),(l()(),u.yb(2,0,null,0,7,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.ab,o.s)),u.xb(3,49152,null,0,r.M,[u.h,u.l,u.B],null,null),(l()(),u.yb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Ub(5,null,["",""])),(l()(),u.yb(6,0,null,0,1,"p",[["class","item-description"]],null,null,null,null,null)),(l()(),u.Ub(7,null,["",""])),(l()(),u.hb(16777216,null,0,1,null,v)),u.xb(9,16384,null,0,a.m,[u.R,u.O],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,0,1,null,y)),u.xb(11,16384,null,0,a.m,[u.R,u.O],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,0,1,null,k)),u.xb(13,16384,null,0,a.m,[u.R,u.O],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,9,0,2!=n.context.$implicit.Status),l(n,11,0,2!=n.context.$implicit.Status),l(n,13,0,2==n.context.$implicit.Status)}),(function(l,n){l(n,5,0,n.context.$implicit.Code),l(n,7,0,n.context.$implicit.Description)}))}function K(l){return u.Xb(0,[u.Nb(0,c.a,[]),(l()(),u.yb(1,0,null,null,1,"app-header",[],null,null,null,s.b,s.a)),u.xb(2,49152,null,0,b.a,[r.Eb,h.a,a.i],{title:[0,"title"]},null),(l()(),u.yb(3,0,null,null,12,"ion-content",[["class","home"],["padding",""]],null,null,null,o.R,o.j)),u.xb(4,49152,null,0,r.t,[u.h,u.l,u.B],null,null),(l()(),u.yb(5,0,null,0,5,"ion-item",[],null,null,null,o.Z,o.p)),u.xb(6,49152,null,0,r.G,[u.h,u.l,u.B],null,null),(l()(),u.yb(7,0,null,0,3,"ion-searchbar",[],null,[[null,"ionInput"],[null,"ionCancel"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Mb(l,10)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Mb(l,10)._handleInputEvent(t.target)&&e),"ionInput"===n&&(e=!1!==i.FilterBookDB(t)&&e),"ionCancel"===n&&(e=!1!==i.searchTransDB()&&e),e}),o.ib,o.A)),u.Pb(5120,null,p.i,(function(l){return[l]}),[r.Kb]),u.xb(9,49152,null,0,r.gb,[u.h,u.l,u.B],{showCancelButton:[0,"showCancelButton"]},null),u.xb(10,4341760,null,0,r.Kb,[u.t,u.l],null,null),(l()(),u.yb(11,0,null,0,4,"ion-list",[],null,null,null,o.cb,o.t)),u.xb(12,49152,null,0,r.N,[u.h,u.l,u.B],null,null),(l()(),u.hb(16777216,null,0,2,null,C)),u.xb(14,278528,null,0,a.l,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null),u.Ob(15,3)],(function(l,n){var t=n.component;l(n,2,0,"Rental"),l(n,9,0,!0);var e=u.Vb(n,14,0,l(n,15,0,u.Mb(n,0),t.books,null,t.CodeSearch));l(n,14,0,e)}),null)}function w(l){return u.Xb(0,[(l()(),u.yb(0,0,null,null,1,"app-rental",[],null,null,null,K,x)),u.xb(1,49152,null,0,d,[r.Eb,f.a,r.Gb,r.Lb,h.a,r.Cb,g.a,B.a,B.m],null,null)],null,null)}var R=u.ub("app-rental",d,w,{},{},[]),D=t("lZ6u"),I=t("Tx//"),O=u.vb(e,[],(function(l){return u.Jb([u.Kb(512,u.j,u.ab,[[8,[i.a,R]],[3,u.j],u.z]),u.Kb(4608,a.o,a.n,[u.w]),u.Kb(4608,r.c,r.c,[u.B,u.g]),u.Kb(4608,r.Db,r.Db,[r.c,u.j,u.t]),u.Kb(4608,r.Hb,r.Hb,[r.c,u.j,u.t]),u.Kb(4608,p.r,p.r,[]),u.Kb(1073742336,a.c,a.c,[]),u.Kb(1073742336,r.Ab,r.Ab,[]),u.Kb(1073742336,p.q,p.q,[]),u.Kb(1073742336,p.g,p.g,[]),u.Kb(1073742336,B.n,B.n,[[2,B.s],[2,B.m]]),u.Kb(1073742336,D.a,D.a,[]),u.Kb(1073742336,I.a,I.a,[]),u.Kb(1073742336,e,e,[]),u.Kb(1024,B.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);