(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d8689d6"],{"28ea":function(t,e,r){"use strict";var n=r("a5ed"),a=r.n(n);a.a},8419:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"wrap"}},[r("div",{ref:"pic",attrs:{id:"pic"}},[r("ul",{ref:"ul"})])])])},a=[],s={data:function(){return{}},created:function(){},methods:{lunbo:function(t){var e=0;setInterval((function(){for(var r=0;r<t.children.length;r++)t.children[r].style.transform="rotateX(".concat(-90*(e+1),"deg)"),t.children[r].style.transition="1s",t.children[r].style.transitionDelay="".concat(.1*r,"s");if(e++,e>4){e=0;for(var n=0;n<t.children.length;n++)t.children[n].style.transform="rotateX(0deg)",t.children[n].style.transition="none"}}),1200)},play:function(t,e){for(var r=this.$refs.pic.offsetWidth/t,n=0;n<t;n++){var a=document.createElement("li");a.style.height="100%",a.style.width=r+"px",a.style.float="left",a.style.boxSizing="border-box",a.style.position="relative",a.style.transformStyle="preserve-3d",a.style.transition="1s",a.style.perspective="90000px";for(var s=0;s<4;s++){var i=document.createElement("div");i.style.width=r+"px",i.style.height="100%",i.style.position="absolute",i.style.textAlign="center",i.style.lineHeight="6rem",i.style.backgroundSize="400%,100%",i.style.backgroundPosition="".concat(-1*n*r,"px 0px"),0==s&&(i.style.top="-6rem",i.style.transformOrigin="bottom",i.style.transform="translateZ(3rem) rotateX(90deg)",i.style.backgroundImage="url(http://i1.fuimg.com/702814/7c9d845a99acd8a6.jpg)"),1==s&&(i.style.top="6rem",i.style.transformOrigin="top",i.style.transform="translateZ(3rem) rotateX(-90deg)",i.style.backgroundImage="url(http://i1.fuimg.com/702814/38c96a66cadd59ce.jpg)"),2==s&&(i.style.transform="translateZ(3rem)",i.style.backgroundImage="url(http://i1.fuimg.com/702814/0de0f87c74529cfd.jpg)"),3==s&&(i.style.transform="translateZ(-3rem) rotateX(180deg)",i.style.backgroundImage="url(http://i1.fuimg.com/702814/878e0d323d7351bd.jpg)"),a.appendChild(i)}e.appendChild(a)}}},mounted:function(){this.play(4,this.$refs.ul),this.lunbo(this.$refs.ul)}},i=s,l=(r("28ea"),r("2877")),o=Object(l["a"])(i,n,a,!1,null,"40d83117",null);e["default"]=o.exports},a5ed:function(t,e,r){}}]);
//# sourceMappingURL=chunk-6d8689d6.00a6e6a7.js.map