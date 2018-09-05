(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{px7n:function(l,n,t){"use strict";t.r(n),t.d(n,"CataloguePageModuleNgFactory",(function(){return q}));var e=t("8Y7J");class u{}var i=t("pMnS"),o=t("SVse"),c=t("MKJQ"),a=t("sZkV"),r=t("Uynf"),s=t("s7LF"),b=t("ngBU"),p=t("IheW"),h=t("xgBC"),d=t("pjJ7"),m=t("BimW"),g=t("mrSG");class f{constructor(l,n,t,e,u,i,o,c){this.navCtrl=l,this.service=n,this.platform=t,this.authentication=e,this.loading=u,this.toastCtrl=i,this.ms=o,this.actionSheetCtrl=c,this.queryval="",this.DescriptionSearch=""}ionViewWillEnter(){return Object(g.a)(this,void 0,void 0,(function*(){null!=this.authentication.getAccessToken()?(this.loader=yield this.loading.create({message:"Getting books..."}),this.searchBookDB(null),this.service.getRelationShips().then(l=>Object(g.a)(this,void 0,void 0,(function*(){this.userlist=l})))):this.navCtrl.navigateForward("tabs/login")}))}searchBookDB(l){l&&void 0!==l.target.value&&(this.queryval=l.target.value),(this.queryval.length>1||""===this.queryval)&&this.loader.present().then(()=>{this.service.searchTrans("book",this.queryval).then(l=>{console.log(l),this.books=l,this.RentedOut=this.books.reduce((l,n)=>l+parseInt(n.RentedCopies,10),0),this.AvailableCount=this.books.reduce((l,n)=>l+parseInt(n.TotalCopies,10),0),this.loader.dismiss()}).catch(l=>{console.log(l)})})}getIdCheval(){this.AvailableCount=this.books.reduce((l,n)=>l+parseInt(n.Course.allocation,10),0)}FilterBookDB(l){this.DescriptionSearch=l.target.value}bookInfo(l){this.ms.setDestn(l),this.navCtrl.navigateForward("tabs/bookInfo")}AddToWishList(l,n,t){this.service.AddToWishList(l.ISBN).then(e=>Object(g.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:t,duration:1e3})).present(),l.WishList=n})))}AddToHold(l){return Object(g.a)(this,void 0,void 0,(function*(){let n;const t=[];this.userlist.forEach(e=>Object(g.a)(this,void 0,void 0,(function*(){t.push({text:e.FirstName+" "+e.LastName,handler:()=>(this.service.AddToHold(l.ISBN,l.ProposedCode,e.UserId,l.CreatedBy).then(n=>Object(g.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:"Placed hold request",duration:1e3})).present(),n&&(l.Hold="Y")}))),n.dismiss(),!1)})}))),t.push({text:"Cancel",icon:"close",role:"destructive",handler:()=>(n.dismiss(),!1)}),n=yield this.actionSheetCtrl.create({header:"Pick a Name ",buttons:t}),n.present()}))}returnBook(l){l.TotalCopies>1?(this.ms.setDestn(l),this.navCtrl.navigateForward("tabs/multipleReturnPage")):this.service.markReturn(l.RentedTransId).then(l=>Object(g.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:"Returned successfully !",duration:2e3})).present(),this.searchBookDB(null)})))}checkout(l){this.ms.setDestn(l),this.ms.setAction("Out"),l.TotalCopies>1?this.navCtrl.navigateForward("tabs/multiCopiesPage"):(this.ms.setHome("C"),this.navCtrl.navigateForward("tabs/checkoutPage"))}openMenu(l,n){this.service.getBookProfile(n.ISBN).then(l=>Object(g.a)(this,void 0,void 0,(function*(){this.Available=l,this.RentedOut=this.Available.filter(l=>"3"===l.Status).length,this.AvailableCount=this.Available.filter(l=>"3"!==l.Status).length,(yield this.actionSheetCtrl.create({header:"Click the link below.",cssClass:"action-sheets-basic-page",buttons:[{text:"Book Info [Count: "+this.Available.length+"]",role:"destructive",icon:this.platform.is("ios")?null:"list",handler:()=>{this.navCtrl.navigateForward("CheckOutPage",{queryParams:{book:n}})}},{text:"Cancel",role:"cancel",icon:this.platform.is("ios")?null:"close",handler:()=>{}}]})).present()})))}itemTapped(l,n){this.navCtrl.navigateForward("BookInfo",{queryParams:{book:n}})}}var x=t("occH"),v=t("dqLM"),C=e.wb({encapsulation:0,styles:[[".icon-circle[_ngcontent-%COMP%], .icon-circle-large[_ngcontent-%COMP%], .icon-circle-small[_ngcontent-%COMP%]{position:relative;display:inline-block;margin:-1px;width:45px;height:45px;font-size:40px;border-radius:10%;text-align:center}.icon-circle-large[_ngcontent-%COMP%]{width:100px;height:100px;font-size:64px;padding:16px}.icon-circle-small[_ngcontent-%COMP%]{width:24px;height:24px;font-size:20px}.icon-circle-outline[_ngcontent-%COMP%]{border:1px solid #00a1e1;background:transparent;color:#00a1e1}.item-icon-circle[_ngcontent-%COMP%]{border-radius:50%;width:100px;height:100px;text-align:center;color:#fff}.item-icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:60px}.bg-circle-alt[_ngcontent-%COMP%]{border-radius:50%;width:100px;height:100px}"]],data:{}});function y(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,1,"span",[["style","color: green; font-size: .8em;align-content: right"]],null,null,null,null,null)),(l()(),e.Ub(1,null,[" Total Books:","(","); Rented Out:",""]))],null,(function(l,n){var t=n.component;l(n,1,0,t.AvailableCount,t.books.length,t.RentedOut)}))}function k(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ub(1,null,["[Checked Out : ","]"]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.RentedCopies)}))}function B(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ub(1,null,["[On Hold : ","]"]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.HoldedCopies)}))}function I(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,5,"p",[["class","item-description"]],null,null,null,null,null)),(l()(),e.Ub(1,null,[" Available : "," "])),(l()(),e.hb(16777216,null,null,1,null,k)),e.xb(3,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,null,1,null,B)),e.xb(5,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.parent.context.$implicit.RentedCopies>0),l(n,5,0,n.parent.context.$implicit.HoldedCopies>0)}),(function(l,n){l(n,1,0,n.parent.context.$implicit.TotalCopies-n.parent.context.$implicit.RentedCopies-n.parent.context.$implicit.HoldedCopies)}))}function O(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,1,"p",[["style","color:green;"]],null,null,null,null,null)),(l()(),e.Ub(1,null,[""," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.Code)}))}function R(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,5,"span",[["class","ion-text-wrap"],["style","text-align:center;"]],null,null,null,null,null)),(l()(),e.yb(1,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.yb(2,0,null,null,1,"ion-icon",[["class","icon-circle"],["name","archive-outline"],["style","color:blue;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.AddToHold(l.parent.parent.context.$implicit)&&e),e}),c.V,c.n)),e.xb(3,49152,null,0,a.B,[e.h,e.l,e.B],{name:[0,"name"]},null),(l()(),e.yb(4,0,null,null,1,"p",[["style","margin-top: 0px;color:blue;"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Request Hold"]))],(function(l,n){l(n,3,0,"archive-outline")}),null)}function w(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,5,"span",[["class","ion-text-wrap"]],null,null,null,null,null)),(l()(),e.yb(1,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.yb(2,0,null,null,1,"ion-icon",[["class","icon-circle"],["name","refresh-circle-outline"],["style","color:green;"]],null,null,null,c.V,c.n)),e.xb(3,49152,null,0,a.B,[e.h,e.l,e.B],{name:[0,"name"]},null),(l()(),e.yb(4,0,null,null,1,"p",[["style","color:green;margin-top: 0px;"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["On Hold"]))],(function(l,n){l(n,3,0,"refresh-circle-outline")}),null)}function $(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,5,"span",[["class","ion-text-wrap"]],null,null,null,null,null)),(l()(),e.yb(1,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.yb(2,0,null,null,1,"ion-icon",[["class","icon-circle"],["name","thumbs-up-outline"],["style","color:green;"]],null,null,null,c.V,c.n)),e.xb(3,49152,null,0,a.B,[e.h,e.l,e.B],{name:[0,"name"]},null),(l()(),e.yb(4,0,null,null,1,"p",[["style","color:green;margin-top: 0px;"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Ready for pickup"]))],(function(l,n){l(n,3,0,"thumbs-up-outline")}),null)}function P(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,5,"span",[["class","ion-text-wrap"]],null,null,null,null,null)),(l()(),e.yb(1,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.yb(2,0,null,null,1,"ion-icon",[["class","icon-circle"],["name","thumbs-down-outline"],["style","color:red;"]],null,null,null,c.V,c.n)),e.xb(3,49152,null,0,a.B,[e.h,e.l,e.B],{name:[0,"name"]},null),(l()(),e.yb(4,0,null,null,1,"p",[["style","color:red;margin-top: 0px;"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Denied"]))],(function(l,n){l(n,3,0,"thumbs-down-outline")}),null)}function A(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,8,"span",[],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,R)),e.xb(2,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,null,1,null,w)),e.xb(4,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,null,1,null,$)),e.xb(6,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,null,1,null,P)),e.xb(8,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.parent.context.$implicit.TotalCopies-n.parent.context.$implicit.RentedCopies-n.parent.context.$implicit.HoldedCopies>0&&"Y"!=n.parent.context.$implicit.Hold&&"Y"!=n.parent.context.$implicit.HoldReady&&"Y"!=n.parent.context.$implicit.HoldRejected),l(n,4,0,"Y"===n.parent.context.$implicit.Hold),l(n,6,0,"Y"===n.parent.context.$implicit.HoldReady),l(n,8,0,"Y"===n.parent.context.$implicit.HoldRejected)}),null)}function H(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,3,"button",[["color","danger"],["ion-button",""],["style","background-color: red;color:white"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.returnBook(l.parent.parent.context.$implicit)&&e),e}),null,null)),(l()(),e.yb(1,0,null,null,1,"ion-icon",[["name","refresh"]],null,null,null,c.V,c.n)),e.xb(2,49152,null,0,a.B,[e.h,e.l,e.B],{name:[0,"name"]},null),(l()(),e.Ub(3,null,[" Return (",") "]))],(function(l,n){l(n,2,0,"refresh")}),(function(l,n){l(n,3,0,n.parent.parent.context.$implicit.RentedCopies)}))}function T(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,3,"button",[["color","primary"],["ion-button",""],["style","background-color: green; color:white"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.checkout(l.parent.parent.context.$implicit)&&e),e}),null,null)),(l()(),e.yb(1,0,null,null,1,"ion-icon",[["name","cart"]],null,null,null,c.V,c.n)),e.xb(2,49152,null,0,a.B,[e.h,e.l,e.B],{name:[0,"name"]},null),(l()(),e.Ub(3,null,[" Check out (",") "]))],(function(l,n){l(n,2,0,"cart")}),(function(l,n){l(n,3,0,n.parent.parent.context.$implicit.TotalCopies-n.parent.parent.context.$implicit.RentedCopies)}))}function K(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,5,"ion-item-options",[["side","end"]],null,null,null,c.X,c.q)),e.xb(1,49152,null,0,a.K,[e.h,e.l,e.B],{side:[0,"side"]},null),(l()(),e.hb(16777216,null,0,1,null,H)),e.xb(3,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,T)),e.xb(5,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"end"),l(n,3,0,n.parent.context.$implicit.RentedCopies>0),l(n,5,0,n.parent.context.$implicit.TotalCopies-n.parent.context.$implicit.RentedCopies>0)}),null)}function M(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,18,"ion-item-sliding",[],null,null,null,c.Y,c.r)),e.xb(1,49152,null,0,a.L,[e.h,e.l,e.B],null,null),(l()(),e.yb(2,0,null,0,14,"ion-item",[],null,null,null,c.Z,c.p)),e.xb(3,49152,null,0,a.G,[e.h,e.l,e.B],null,null),(l()(),e.yb(4,0,null,0,2,"ion-avatar",[["slot","start"],["thumbnail",""]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.bookInfo(l.context.$implicit)&&e),e}),c.J,c.b)),e.xb(5,49152,null,0,a.f,[e.h,e.l,e.B],null,null),(l()(),e.yb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.yb(7,0,null,0,7,"ion-label",[["class","ion-text-wrap"]],null,null,null,c.ab,c.s)),e.xb(8,49152,null,0,a.M,[e.h,e.l,e.B],null,null),(l()(),e.yb(9,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Ub(10,null,["",""])),(l()(),e.hb(16777216,null,0,1,null,I)),e.xb(12,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,O)),e.xb(14,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,A)),e.xb(16,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,K)),e.xb(18,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,12,0,n.context.$implicit.TotalCopies>0),l(n,14,0,1==n.context.$implicit.TotalCopies),l(n,16,0,"Y"!=t.authentication.getIsAdmin()),l(n,18,0,"Y"===t.authentication.getIsAdmin())}),(function(l,n){l(n,6,0,e.Fb(1,"",n.context.$implicit.PictureLink,"")),l(n,10,0,n.context.$implicit.Description)}))}function X(l){return e.Xb(0,[e.Nb(0,r.a,[]),(l()(),e.yb(1,0,null,null,0,"app-header",[],[[8,"title",0]],null,null,null,null)),(l()(),e.yb(2,0,null,null,14,"ion-content",[["class","home"],["padding",""]],null,null,null,c.R,c.j)),e.xb(3,49152,null,0,a.t,[e.h,e.l,e.B],null,null),(l()(),e.hb(16777216,null,0,1,null,y)),e.xb(5,16384,null,0,o.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.yb(6,0,null,0,5,"ion-item",[],null,null,null,c.Z,c.p)),e.xb(7,49152,null,0,a.G,[e.h,e.l,e.B],null,null),(l()(),e.yb(8,0,null,0,3,"ion-searchbar",[],null,[[null,"ionInput"],[null,"ionCancel"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Mb(l,11)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Mb(l,11)._handleInputEvent(t.target)&&u),"ionInput"===n&&(u=!1!==i.FilterBookDB(t)&&u),"ionCancel"===n&&(u=!1!==i.searchBookDB(t)&&u),u}),c.ib,c.A)),e.Pb(5120,null,s.i,(function(l){return[l]}),[a.Kb]),e.xb(10,49152,null,0,a.gb,[e.h,e.l,e.B],{showCancelButton:[0,"showCancelButton"]},null),e.xb(11,4341760,null,0,a.Kb,[e.t,e.l],null,null),(l()(),e.yb(12,0,null,0,4,"ion-list",[],null,null,null,c.cb,c.t)),e.xb(13,49152,null,0,a.N,[e.h,e.l,e.B],null,null),(l()(),e.hb(16777216,null,0,2,null,M)),e.xb(15,278528,null,0,o.l,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null),e.Ob(16,3)],(function(l,n){var t=n.component;l(n,5,0,t.AvailableCount),l(n,10,0,!0);var u=e.Vb(n,15,0,l(n,16,0,e.Mb(n,0),t.books,t.DescriptionSearch,null));l(n,15,0,u)}),(function(l,n){l(n,1,0,"Catalogue")}))}function j(l){return e.Xb(0,[(l()(),e.yb(0,0,null,null,2,"app-catalogue",[],null,null,null,X,C)),e.Pb(512,null,b.a,b.a,[p.c,h.b,d.a,m.a]),e.xb(2,49152,null,0,f,[a.Eb,b.a,a.Gb,x.a,a.Cb,a.Lb,v.a,a.a],null,null)],null,null)}var D=e.ub("app-catalogue",f,j,{},{},[]),F=t("iInd"),S=t("lZ6u"),U=t("Tx//"),q=e.vb(u,[],(function(l){return e.Jb([e.Kb(512,e.j,e.ab,[[8,[i.a,D]],[3,e.j],e.z]),e.Kb(4608,o.o,o.n,[e.w]),e.Kb(4608,a.c,a.c,[e.B,e.g]),e.Kb(4608,a.Db,a.Db,[a.c,e.j,e.t]),e.Kb(4608,a.Hb,a.Hb,[a.c,e.j,e.t]),e.Kb(4608,s.r,s.r,[]),e.Kb(1073742336,o.c,o.c,[]),e.Kb(1073742336,a.Ab,a.Ab,[]),e.Kb(1073742336,s.q,s.q,[]),e.Kb(1073742336,s.g,s.g,[]),e.Kb(1073742336,F.n,F.n,[[2,F.s],[2,F.m]]),e.Kb(1073742336,S.a,S.a,[]),e.Kb(1073742336,U.a,U.a,[]),e.Kb(1073742336,u,u,[]),e.Kb(1024,F.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);