(function(t){function e(e){for(var n,l,s=e[0],o=e[1],c=e[2],f=0,d=[];f<s.length;f++)l=s[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},i=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"441f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("Header"),a("About"),a("Contact")],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w3-top"},[a("div",{staticClass:"w3-bar w3-white w3-card",attrs:{id:"myNavbar"}},[a("NavElement",{attrs:{name:"HOME",link:"#home"}}),a("div",{staticClass:"w3-right w3-hide-small"},t._l(this.links,(function(t){return a("NavElement",{key:t.link,attrs:{name:t.name,link:t.link}})})),1),a("div",{staticClass:"w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium",on:{click:this.w3_open}},[a("i",{staticClass:"fa fa-bars"})]),a("nav",{staticClass:"w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large",staticStyle:{display:"none"},attrs:{id:"mySidebar"},on:{click:t.close}},[a("div",{staticClass:"w3-bar-item w3-button w3-large w3-padding-16",attrs:{href:"javascript:void(0)"},on:{click:this.close}},[t._v("Close × ")]),t._l(this.links,(function(t){return a("div",{key:t.link},[a("NavElement",{attrs:{name:t.name,link:t.link}})],1)}))],2)],1)])},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"w3-bar-item w3-button w3-wide",attrs:{href:t.link},on:{click:function(e){return t.$emit("close")}}},[a("i",{class:void 0!==t.i?t.i:""}),t._v(" "+t._s(t.name))])},c=[],u={name:"NavElement",props:["name","link","i"]},f=u,d=a("2877"),p=Object(d["a"])(f,o,c,!1,null,"76887e09",null),w=p.exports,m={name:"NavBar",data:function(){return{links:[{name:"OVER ONS",link:"#about",i:""},{name:"CONTACT",link:"#contact",i:"fa fa-envelope"}]}},components:{NavElement:w},methods:{close:function(){var t=document.getElementById("mySidebar");t.style.display="none"},w3_open:function(){var t=document.getElementById("mySidebar");"block"===t.style.display?t.style.display="none":t.style.display="block"}}},g=m,v=Object(d["a"])(g,l,s,!1,null,"304504e7",null),y=v.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w3-container",staticStyle:{padding:"128px 16px"},attrs:{id:"about"}},[a("h3",{staticClass:"w3-center",staticStyle:{color:"orange"}},[t._v("OVER KATALYSATOR RECYCLING TWENTE")]),a("p",{staticClass:"w3-center w3-large",staticStyle:{color:"orange"}},[t._v("Waar wij bekend om staan ")]),a("div",{staticClass:"w3-row-padding w3-center",staticStyle:{"margin-top":"64px"}},[a("div",{staticClass:"w3-quarter"},[a("i",{staticClass:"fa fa-eur w3-margin-bottom w3-jumbo",staticStyle:{color:"orange"}}),a("p",{staticClass:"w3-large",staticStyle:{color:"orange"}},[t._v("Goede Dagprijs")]),a("p",{staticStyle:{color:"orange"}},[t._v("Bij Katalysator recycling Twente krijgt u een eerlijke prijs gebaseerd op de huidige dagprijs")])]),a("div",{staticClass:"w3-quarter"},[a("i",{staticClass:"fa fa-truck w3-margin-bottom w3-jumbo",staticStyle:{color:"orange"}}),a("p",{staticClass:"w3-large",staticStyle:{color:"orange"}},[t._v("Haal & breng service")]),a("p",{staticStyle:{color:"orange"}},[t._v("U kunt uw oude katalysatoren brengen of op laten halen")])]),a("div",{staticClass:"w3-quarter"},[a("i",{staticClass:"fa fa-automobile w3-margin-bottom w3-jumbo w3-center",staticStyle:{color:"orange"}}),a("p",{staticClass:"w3-large",staticStyle:{color:"orange"}},[t._v("flexible")]),a("p",{staticStyle:{color:"orange"}},[t._v("Wij accepteren alle katalysatoren")])]),a("div",{staticClass:"w3-quarter"},[a("i",{staticClass:"fa fa-euro w3-margin-bottom w3-jumbo",staticStyle:{color:"orange"}}),a("p",{staticClass:"w3-large",staticStyle:{color:"orange"}},[t._v("Passie")]),a("p",{staticStyle:{color:"orange"}},[t._v("Bij Katalysator recycling Twente is contant of bank mogelijk ")])])])])}],_={name:"About"},C=_,k=Object(d["a"])(C,b,h,!1,null,"1442824c",null),j=k.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"bgimg-1 w3-display-container",attrs:{id:"home"}},[a("div",{staticClass:"w3-display-left w3-text-black w3-row bgLabel w3-center w3-orange",staticStyle:{padding:"48px"}},[a("span",{staticClass:"w3-jumbo w3-hide-small"},[a("i",{staticClass:"fa fa-recycle"}),t._v(" Katalysator recycling Twente "),a("i",{staticClass:"fa fa-recycle"})]),a("br"),a("span",{staticClass:"w3-xxlarge w3-hide-large w3-hide-medium"},[a("i",{staticClass:"fa fa-recycle"}),t._v(" Katalysator recycling Twente "),a("i",{staticClass:"fa fa-recycle"})]),a("br"),a("span",{staticClass:"w3-large"},[t._v("Inkoop van elke katalysator voor een eerlijke prijs")]),a("p",[a("a",{staticClass:" btnWidth w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off",attrs:{href:"#about"}},[t._v("Over ons")]),a("a",{staticClass:" btnWidth w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off",attrs:{href:"#contact"}},[t._v("Contact")])])])])}],E={name:"Header"},O=E,T=(a("aa81"),Object(d["a"])(O,S,x,!1,null,"9933e18e",null)),N=T.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w3-container w3-light-grey",staticStyle:{padding:"128px 16px"},attrs:{id:"contact"}},[a("h3",{staticClass:"w3-center"},[t._v("CONTACT")]),a("p",{staticClass:"w3-center w3-large"},[t._v("Voor het maken van een afspraak kunt u ons altijd bellen")]),a("div",{staticStyle:{"margin-top":"48px","margin-left":"30%"}},[a("p",{staticStyle:{"text-align":"left"}},[a("i",{staticClass:"fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"}),t._v(" Adres: Ganzevoet 13, 7609 ZM Almelo")]),a("p",{staticStyle:{"text-align":"left"}},[a("i",{staticClass:"fa fa-phone fa-fw w3-xxlarge w3-margin-right"}),t._v(" Telefoonnummer: +31(0)641079463")]),a("p",{staticStyle:{"text-align":"left"}},[a("i",{staticClass:"fa fa-envelope fa-fw w3-xxlarge w3-margin-right"}),t._v(" Email: krtwente@gmail.com")])])])}],B={name:"Contact"},P=B,I=Object(d["a"])(P,A,$,!1,null,"abdc8b1c",null),M=I.exports,H={name:"App",data:function(){return{}},components:{Contact:M,Header:N,About:j,NavBar:y},methods:{onClick:function(t){document.getElementById("img01").src=t.src,document.getElementById("modal01").style.display="block";var e=document.getElementById("caption");e.innerHTML=t.alt}}},K=H,W=(a("034f"),Object(d["a"])(K,r,i,!1,null,null,null)),q=W.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(q)}}).$mount("#app")},"85ec":function(t,e,a){},aa81:function(t,e,a){"use strict";var n=a("441f"),r=a.n(n);r.a}});
//# sourceMappingURL=app.2360d73d.js.map