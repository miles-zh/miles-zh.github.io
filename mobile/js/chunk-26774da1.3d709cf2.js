(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26774da1"],{"245d":function(t,s,e){},b4b8:function(t,s,e){"use strict";var a=e("245d"),i=e.n(a);i.a},ffe6:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{background:"#999",height:"100%",position:"relative"}},[e("div",{staticClass:"container",on:{click:t.turnBook}},[t._m(0)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"book"},[e("div",{staticClass:"page1",attrs:{id:"page1"}},[e("div",{staticClass:"page-back"}),e("div",{staticClass:"page-front"},[t._v("HTML5")])]),e("div",{staticClass:"page2",attrs:{id:"page2"}},[e("div",{staticClass:"page-back"}),e("div",{staticClass:"page-front"},[t._v("CSS3")])]),e("div",{staticClass:"page3",attrs:{id:"page3"}},[e("div",{staticClass:"page-back"}),e("div",{staticClass:"page-front"},[t._v("JavaScript")])]),e("div",{staticClass:"page4",attrs:{id:"page4"}},[e("div",{staticClass:"page-back"}),e("div",{staticClass:"page-front"},[t._v("END")])])])}],n={data:function(){return{bookDom:null,pagesDom:null,currentIndex:0,timer:null}},methods:{turnBook:function(){if(this.timer=null,this.pagesDom[this.currentIndex].style.transform="rotateY(-145deg)",this.pagesDom[this.currentIndex].style.transition="2s",console.log(this.currentIndex),this.currentIndex++,this.currentIndex==this.pagesDom.length){this.currentIndex=0;for(var t=0;t<=this.pagesDom.length;t++)this.pagesDom[t].style.transform="rotateY(0deg)"}},autoTurn:function(){var t=this;this.timer=setInterval((function(){t.turnBook()}),2e3)}},mounted:function(){this.bookDom=document.querySelector(".book"),this.pagesDom=document.querySelectorAll("[id^='page']"),this.autoTurn()}},r=n,o=(e("b4b8"),e("4023")),c=Object(o["a"])(r,a,i,!1,null,"d34ed0e6",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-26774da1.3d709cf2.js.map