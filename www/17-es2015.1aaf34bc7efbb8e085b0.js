(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3F3D":function(l,n,t){"use strict";t.r(n),t.d(n,"SettingsPageModuleNgFactory",(function(){return w}));var u=t("8Y7J");class i{}var o=t("pMnS"),e=t("MKJQ"),s=t("sZkV"),r=t("2GTJ"),b=t("3X0i"),a=t("occH"),c=t("SVse"),g=t("s7LF");class h{constructor(l,n,t,u,i,o,e,s,r){this.navCtrl=l,this.service=n,this.platform=t,this.actionsheetCtrl=u,this.authentication=i,this.loading=o,this.toastCtrl=e,this.ms=s,this.formBuilder=r,this.groups=[],this.studentCount=1,this.editedItem=[],this.createSuccess=!1,this.myForm=r.group({student1:["",g.p.required]}),this.compareWith=this.compareWithFn}compareWithFn(l,n){return l===n}removeControl(l){this.myForm.removeControl(l.key)}addControl(){this.studentCount++,this.myForm.addControl("student"+this.studentCount,new g.d("",g.p.required))}ngOnInit(){this.service.getGroups().then(l=>{console.log(l),this.groups=l}).catch(l=>{console.log(l)}),this.service.getRelationShips().then(l=>{console.log(l),this.relationship=l}).catch(l=>{console.log(l)})}loginModal(){this.navCtrl.navigateForward("tabs/login")}}var p=t("ngBU"),m=t("dqLM"),d=u.wb({encapsulation:0,styles:[[".error-message[_ngcontent-%COMP%]{color:red;font-size:10px;margin-left:10px;margin-top:10px}.submit-btn[_ngcontent-%COMP%]{margin-top:40px}ion-select[_ngcontent-%COMP%]{max-width:90%!important}"]],data:{}});function f(l){return u.Xb(0,[(l()(),u.yb(0,0,null,null,4,"ion-item",[],null,null,null,e.Z,e.p)),u.xb(1,49152,null,0,s.G,[u.h,u.l,u.B],null,null),(l()(),u.yb(2,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),u.Ub(-1,null,["School/Group: "])),(l()(),u.Ub(4,0,[" "," "]))],null,(function(l,n){l(n,4,0,n.context.$implicit.value.GroupName)}))}function v(l){return u.Xb(0,[(l()(),u.yb(0,0,null,null,4,"ion-item",[],null,null,null,e.Z,e.p)),u.xb(1,49152,null,0,s.G,[u.h,u.l,u.B],null,null),(l()(),u.yb(2,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),u.Ub(-1,null,["Student Name: "])),(l()(),u.Ub(4,0,[" "," "," "]))],null,(function(l,n){l(n,4,0,n.context.$implicit.value.FirstName,n.context.$implicit.value.LastName)}))}function C(l){return u.Xb(0,[(l()(),u.yb(0,0,null,null,1,"app-header",[],null,null,null,r.b,r.a)),u.xb(1,49152,null,0,b.a,[s.Eb,a.a,c.i],{title:[0,"title"]},null),(l()(),u.yb(2,0,null,null,16,"ion-content",[],null,null,null,e.R,e.j)),u.xb(3,49152,null,0,s.t,[u.h,u.l,u.B],null,null),(l()(),u.yb(4,0,null,0,9,"ion-list",[["lines","none"]],null,null,null,e.cb,e.t)),u.xb(5,49152,null,0,s.N,[u.h,u.l,u.B],{lines:[0,"lines"]},null),(l()(),u.yb(6,0,null,0,7,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,t){var i=!0;return"submit"===n&&(i=!1!==u.Mb(l,8).onSubmit(t)&&i),"reset"===n&&(i=!1!==u.Mb(l,8).onReset()&&i),i}),null,null)),u.xb(7,16384,null,0,g.t,[],null,null),u.xb(8,540672,null,0,g.f,[[8,null],[8,null]],{form:[0,"form"]},null),u.Pb(2048,null,g.b,null,[g.f]),u.xb(10,16384,null,0,g.l,[[4,g.b]],null,null),(l()(),u.hb(16777216,null,null,2,null,f)),u.xb(12,278528,null,0,c.l,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null),u.Nb(0,c.g,[u.v]),(l()(),u.yb(14,0,null,0,4,"ion-list",[],null,null,null,e.cb,e.t)),u.xb(15,49152,null,0,s.N,[u.h,u.l,u.B],null,null),(l()(),u.hb(16777216,null,0,2,null,v)),u.xb(17,278528,null,0,c.l,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null),u.Nb(0,c.g,[u.v])],(function(l,n){var t=n.component;l(n,1,0,"Settings"),l(n,5,0,"none"),l(n,8,0,t.myForm),l(n,12,0,u.Vb(n,12,0,u.Mb(n,13).transform(t.groups))),l(n,17,0,u.Vb(n,17,0,u.Mb(n,18).transform(t.relationship)))}),(function(l,n){l(n,6,0,u.Mb(n,10).ngClassUntouched,u.Mb(n,10).ngClassTouched,u.Mb(n,10).ngClassPristine,u.Mb(n,10).ngClassDirty,u.Mb(n,10).ngClassValid,u.Mb(n,10).ngClassInvalid,u.Mb(n,10).ngClassPending)}))}function x(l){return u.Xb(0,[(l()(),u.yb(0,0,null,null,1,"app-settings",[],null,null,null,C,d)),u.xb(1,114688,null,0,h,[s.Eb,p.a,s.Gb,s.a,a.a,s.Cb,s.Lb,m.a,g.c],null,null)],(function(l,n){l(n,1,0)}),null)}var y=u.ub("app-settings",h,x,{},{},[]),M=t("iInd"),K=t("lZ6u"),F=t("Tx//"),w=u.vb(i,[],(function(l){return u.Jb([u.Kb(512,u.j,u.ab,[[8,[o.a,y]],[3,u.j],u.z]),u.Kb(4608,c.o,c.n,[u.w]),u.Kb(4608,s.c,s.c,[u.B,u.g]),u.Kb(4608,s.Db,s.Db,[s.c,u.j,u.t]),u.Kb(4608,s.Hb,s.Hb,[s.c,u.j,u.t]),u.Kb(4608,g.r,g.r,[]),u.Kb(4608,g.c,g.c,[]),u.Kb(1073742336,c.c,c.c,[]),u.Kb(1073742336,s.Ab,s.Ab,[]),u.Kb(1073742336,g.q,g.q,[]),u.Kb(1073742336,g.g,g.g,[]),u.Kb(1073742336,M.n,M.n,[[2,M.s],[2,M.m]]),u.Kb(1073742336,K.a,K.a,[]),u.Kb(1073742336,F.a,F.a,[]),u.Kb(1073742336,g.o,g.o,[]),u.Kb(1073742336,i,i,[]),u.Kb(1024,M.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);