(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"305l":function(t,e,n){"use strict";n.r(e),n.d(e,"AuthModule",(function(){return w}));var i=n("ofXK"),o=n("tyNb"),r=n("H2FS");class c{}var a=n("3Pt+"),p=n("fXoL"),s=n("kt0X");let u=(()=>{class t{constructor(){this.placeholder="Input...",this.type="text"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Hb({type:t,selectors:[["app-ui-v1-input"]],inputs:{placeholder:"placeholder",type:"type"},decls:1,vars:2,consts:[[3,"type","placeholder"]],template:function(t,e){1&t&&p.Ob(0,"input",0),2&t&&p.ic("type",e.type)("placeholder",e.placeholder)},styles:["input[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background-color:#fff;padding:10px;height:12px;box-shadow:none;border:1px solid #1a1a1a;border-radius:4px}"]}),t})();var l=n("ucXZ");const b=[{path:"",component:(()=>{class t{constructor(t,e,n){this.store=t,this.fb=e,this.router=n,this.form=this.fb.group({username:["",a.h.required],password:["",a.h.required]})}ngOnInit(){}onSubmit(){const t=new c;this.store.dispatch(new r.b.Login({request:t})),this.router.navigate(["/"])}}return t.\u0275fac=function(e){return new(e||t)(p.Nb(s.h),p.Nb(a.a),p.Nb(o.e))},t.\u0275cmp=p.Hb({type:t,selectors:[["app-auth"]],decls:6,vars:0,consts:[[1,"container"],[1,"pizza"],[1,"form"],["type","text","placeholder","Username"],["type","password","placeholder","Password"],["title","Sign In",3,"click"]],template:function(t,e){1&t&&(p.Sb(0,"div",0),p.Ob(1,"div",1),p.Sb(2,"div",2),p.Ob(3,"app-ui-v1-input",3),p.Ob(4,"app-ui-v1-input",4),p.Sb(5,"app-ui-v1-button",5),p.ac("click",(function(){return e.onSubmit()})),p.Rb(),p.Rb(),p.Rb())},directives:[u,l.a],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;max-width:1280px;width:100%;margin:0 auto;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;min-height:50vh}.pizza[_ngcontent-%COMP%]{width:128px;height:128px;background-color:#f0f8ff;border-radius:128px;margin:0 auto 40px}.form[_ngcontent-%COMP%]{margin:0 auto;max-width:300px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between;height:120px}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=p.Lb({type:t}),t.\u0275inj=p.Kb({factory:function(e){return new(e||t)},imports:[[o.h.forChild(b)],o.h]}),t})();var h=n("5XOy");let f=(()=>{class t{}return t.\u0275mod=p.Lb({type:t}),t.\u0275inj=p.Kb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})(),w=(()=>{class t{}return t.\u0275mod=p.Lb({type:t}),t.\u0275inj=p.Kb({factory:function(e){return new(e||t)},imports:[[i.c,d,h.a,f,a.g]]}),t})()}}]);