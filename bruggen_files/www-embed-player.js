(function(){var g,aa=aa||{},m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function u(){throw Error("unimplemented abstract method");}
function ba(a){a.getInstance=function(){return a.Y?a.Y:a.Y=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function v(a){return"array"==da(a)}
function ea(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function w(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ga(a){return"function"==da(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return x.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.$e=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(oa,Error);oa.prototype.name="CustomError";var pa;function qa(a){return/^[\s\xa0]*$/.test(a)}
var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function sa(a){return decodeURIComponent(a.replace(/\+/g," "))}
var ta=/&/g,ua=/</g,va=/>/g,wa=/"/g,xa=/'/g,ya=/\x00/g,za=/[\x00&<>"']/;function Aa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Ba,function(a,e){var d=b[a];if(d)return d;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(d=String.fromCharCode(h))}d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function Ca(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var b=Number("0"+c.substr(1));if(!isNaN(b))return String.fromCharCode(b)}return a}})}
var Ba=/&([^;\s<&]+);?/g,Da={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ea={"'":"\\'"};
function Fa(a,b){for(var c=0,d=ra(String(a)).split("."),e=ra(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Ga(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Ga(0==k[2].length,0==l[2].length)||Ga(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Ga(a,b){return a<b?-1:a>b?1:0}
function Ha(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ia=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(w(a))return w(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ja=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=w(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},La=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=w(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Ma=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Na=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Oa(a,b,c){b=Pa(a,b,c);return 0>b?null:w(a)?a.charAt(b):a[b]}
function Pa(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function Qa(a,b){return 0<=Ia(a,b)}
function Ra(a,b){Qa(a,b)||a.push(b)}
function Sa(a,b){var c=Ia(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Ta(a,b){var c=Pa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ua(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Wa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Xa(a,b,c,d){return Array.prototype.splice.apply(a,Ya(arguments,1))}
function Ya(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Za(a,b){return a>b?1:a<b?-1:0}
;function $a(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function ab(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function bb(a){var b=0,c;for(c in a)b++;return b}
function cb(a,b){return db(a,b)}
function eb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function fb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function db(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function gb(a){var b=hb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ib(a){for(var b in a)return!1;return!0}
function jb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function kb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lb(a){var b=da(a);if("object"==b||"array"==b){if(ga(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=lb(a[c]);return b}return a}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;a:{var rb=m.navigator;if(rb){var sb=rb.userAgent;if(sb){qb=sb;break a}}qb=""}function B(a){return-1!=qb.indexOf(a)}
;function tb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function ub(){this.b="";this.f=vb}
ub.prototype.Qb=!0;ub.prototype.Lb=function(){return this.b};
function wb(a){if(a instanceof ub&&a.constructor===ub&&a.f===vb)return a.b;da(a);return"type_error:SafeUrl"}
var xb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function yb(a){if(a instanceof ub)return a;a=a.Qb?a.Lb():String(a);xb.test(a)||(a="about:invalid#zClosurez");return zb(a)}
var vb={};function zb(a){var b=new ub;b.b=a;return b}
zb("about:blank");function Ab(){this.b="";this.f=Bb}
Ab.prototype.Qb=!0;Ab.prototype.Lb=function(){return this.b};
var Bb={};function Cb(){this.b="";this.f=Db}
Cb.prototype.Qb=!0;Cb.prototype.Lb=function(){return this.b};
function Eb(a){if(a instanceof Cb&&a.constructor===Cb&&a.f===Db)return a.b;da(a);return"type_error:SafeHtml"}
var Db={};function Fb(a){var b=new Cb;b.b=a;return b}
Fb("<!DOCTYPE html>");Fb("");Fb("<br>");function Gb(a,b){var c;c=b instanceof ub?b:yb(b);a.href=wb(c)}
function Hb(a,b){a.rel="stylesheet";var c;b instanceof Ab&&b.constructor===Ab&&b.f===Bb?c=b.b:(da(b),c="type_error:TrustedResourceUrl");a.href=c}
;function Ib(a,b,c){a&&(a.dataset?a.dataset[Jb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[Jb(b)]:a.getAttribute("data-"+b):null}
function Kb(a,b){a&&(a.dataset?delete a.dataset[Jb(b)]:a.removeAttribute("data-"+b))}
var Lb={};function Jb(a){return Lb[a]||(Lb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Mb(a){m.setTimeout(function(){throw a;},0)}
var Nb;
function Ob(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.hc;c.hc=null;a()}};
return function(a){d.next={hc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Pb(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Pb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Qb(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function Rb(){this.f=this.b=null}
var Tb=new Pb(function(){return new Sb},function(a){a.reset()},100);
Rb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Sb(){this.next=this.scope=this.b=null}
Sb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Sb.prototype.reset=function(){this.next=this.scope=this.b=null};function Ub(a,b){Vb||Wb();Xb||(Vb(),Xb=!0);var c=Yb,d=Tb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Vb;function Wb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);Vb=function(){a.then(Zb)}}else Vb=function(){var a=Zb;
!ga(m.setImmediate)||m.Window&&m.Window.prototype&&!B("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Nb||(Nb=Ob()),Nb(a)):m.setImmediate(a)}}
var Xb=!1,Yb=new Rb;function Zb(){for(var a;a=Yb.remove();){try{a.b.call(a.scope)}catch(b){Mb(b)}Qb(Tb,a)}Xb=!1}
;function D(){this.Ka=this.Ka;this.T=this.T}
D.prototype.Ka=!1;D.prototype.D=function(){return this.Ka};
D.prototype.dispose=function(){this.Ka||(this.Ka=!0,this.A())};
function $b(a,b){a.Ka?p(void 0)?b.call(void 0):b():(a.T||(a.T=[]),a.T.push(p(void 0)?x(b,void 0):b))}
D.prototype.A=function(){if(this.T)for(;this.T.length;)this.T.shift()()};
function E(a){a&&"function"==typeof a.dispose&&a.dispose()}
function ac(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?ac.apply(null,d):E(d)}}
;function F(a){D.call(this);this.i=1;this.f=[];this.g=0;this.b=[];this.ha={};this.j=!!a}
z(F,D);g=F.prototype;g.subscribe=function(a,b,c){var d=this.ha[a];d||(d=this.ha[a]=[]);var e=this.i;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.i=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.ha[a]){var d=this.b;if(a=Oa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.na(a)}return!1};
g.na=function(a){var b=this.b[a];if(b){var c=this.ha[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&Sa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
g.w=function(a,b){var c=this.ha[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.j)for(e=0;e<c.length;e++){var h=c[e];bc(this.b[h+1],this.b[h+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.b[h+1].apply(this.b[h+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.na(c)}}return 0!=e}return!1};
function bc(a,b,c){Ub(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.ha[a];b&&(A(b,this.na,this),delete this.ha[a])}else this.b.length=0,this.ha={}};
g.W=function(a){if(a){var b=this.ha[a];return b?b.length:0}a=0;for(b in this.ha)a+=this.W(b);return a};
g.A=function(){F.C.A.call(this);this.clear();this.f.length=0};var cc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",cc,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var dc=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",dc,void 0);function ec(a){fc(cc,arguments)}
function H(a,b){return a in cc?cc[a]:b}
function I(a,b){ga(a)&&(a=gc(a));return window.setTimeout(a,b)}
function J(a){window.clearTimeout(a)}
function gc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw ic(b),b;}}:a}
function ic(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=H("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),ec("ERRORS",c))}
function fc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var jc=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},kc="Microsoft Internet Explorer"==navigator.appName;var lc=r("yt.pubsub.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.na;F.prototype.publish=F.prototype.w;F.prototype.clear=F.prototype.clear;q("yt.pubsub.instance_",lc,void 0);var mc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",mc,void 0);var nc=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",nc,void 0);var oc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",oc,void 0);
var pc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",pc,void 0);function qc(a,b,c){var d=rc();if(d){var e=d.subscribe(a,function(){if(!pc||pc!=e){var d=arguments,h;h=function(){mc[e]&&b.apply(c||window,d)};
try{oc[a]?h():I(h,0)}catch(k){ic(k)}}},c);
mc[e]=!0;nc[a]||(nc[a]=[]);nc[a].push(e);return e}return 0}
function sc(a){var b=rc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),A(a,function(a){b.unsubscribeByKey(a);delete mc[a]}))}
function tc(a,b){var c=rc();return c?c.publish.apply(c,arguments):!1}
function uc(a,b){oc[a]=!0;var c=rc();c&&c.publish.apply(c,arguments);oc[a]=!1}
function vc(a){nc[a]&&(a=nc[a],A(a,function(a){mc[a]&&delete mc[a]}),a.length=0)}
function wc(a){var b=rc();if(b)if(b.clear(a),a)vc(a);else for(var c in nc)vc(c)}
function rc(){return r("yt.pubsub.instance_")}
;function xc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(yc,""),c=c.replace(zc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ac(a,b)}
function Ac(a,b){var c=Bc(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e){b&&b();return}if(b){var e=qc(c,b),h=""+ia(b);Cc[h]=e}if(f)return;d=Dc(a,c,function(){C(d,"loaded")||(Ib(d,"loaded","true"),tc(c),I(na(wc,c),0))})}
function Dc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Ec(a,b){if(a&&b){var c=""+ia(b);(c=Cc[c])&&sc(c)}}
function Bc(a){var b=document.createElement("a");Gb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ha(a)}
var yc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,zc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Cc={};var Fc=null;function Gc(){var a=H("BG_I",null),b=H("BG_IU",null),c=H("BG_P",void 0);b?xc(b,function(){Fc=new botguard.bg(c)}):a&&(eval(a),Fc=new botguard.bg(c))}
function Hc(){return null!=Fc}
function Ic(){return Fc?Fc.invoke():null}
;var Jc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Kc(){}
Kc.prototype.next=function(){throw Jc;};
Kc.prototype.pa=function(){return this};
function Lc(a){if(a instanceof Kc)return a;if("function"==typeof a.pa)return a.pa(!1);if(ea(a)){var b=0,c=new Kc;c.next=function(){for(;;){if(b>=a.length)throw Jc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Mc(a,b,c){if(ea(a))try{A(a,b,c)}catch(d){if(d!==Jc)throw d;}else{a=Lc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Jc)throw d;}}}
function Nc(a){if(ea(a))return Va(a);a=Lc(a);var b=[];Mc(a,function(a){b.push(a)});
return b}
;function Oc(a,b){this.f={};this.b=[];this.Aa=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Oc?(c=a.qa(),d=a.X()):(c=fb(a),d=eb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Oc.prototype;g.W=function(){return this.g};
g.X=function(){Pc(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};
g.qa=function(){Pc(this);return this.b.concat()};
g.$a=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b];if(Qc(this.f,c)&&this.f[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.W())return!1;var c=b||Rc;Pc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Rc(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.f={};this.Aa=this.g=this.b.length=0};
g.remove=function(a){return Qc(this.f,a)?(delete this.f[a],this.g--,this.Aa++,this.b.length>2*this.g&&Pc(this),!0):!1};
function Pc(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Qc(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Qc(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
g.get=function(a,b){return Qc(this.f,a)?this.f[a]:b};
g.set=function(a,b){Qc(this.f,a)||(this.g++,this.b.push(a),this.Aa++);this.f[a]=b};
g.forEach=function(a,b){for(var c=this.qa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Oc(this)};
g.pa=function(a){Pc(this);var b=0,c=this.Aa,d=this,e=new Kc;e.next=function(){if(c!=d.Aa)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Jc;var e=d.b[b++];return a?e:d.f[e]};
return e};
function Qc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Sc(a){return a.W&&"function"==typeof a.W?a.W():ea(a)||w(a)?a.length:bb(a)}
function Tc(a){if(a.X&&"function"==typeof a.X)return a.X();if(w(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return eb(a)}
function Uc(a){if(a.qa&&"function"==typeof a.qa)return a.qa();if(!a.X||"function"!=typeof a.X){if(ea(a)||w(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return fb(a)}}
function Vc(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ea(a)||w(a))A(a,b,c);else for(var d=Uc(a),e=Tc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function Wc(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(ea(a)||w(a))return Na(a,b,void 0);for(var c=Uc(a),d=Tc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function Xc(a){this.b=new Oc;a&&Yc(this,a)}
function Zc(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ia(a):b.substr(0,1)+a}
g=Xc.prototype;g.W=function(){return this.b.W()};
function Yc(a,b){for(var c=Tc(b),d=c.length,e=0;e<d;e++){var f=c[e];a.b.set(Zc(f),f)}}
g.remove=function(a){return this.b.remove(Zc(a))};
g.clear=function(){this.b.clear()};
g.isEmpty=function(){return this.b.isEmpty()};
g.contains=function(a){a=Zc(a);return Qc(this.b.f,a)};
g.X=function(){return this.b.X()};
g.clone=function(){return new Xc(this)};
g.equals=function(a){return this.W()==Sc(a)&&$c(this,a)};
function $c(a,b){var c=Sc(b);if(a.W()>c)return!1;!(b instanceof Xc)&&5<c&&(b=new Xc(b));return Wc(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.$a&&"function"==typeof c.$a?c.$a(a):ea(c)||w(c)?Qa(c,a):db(c,a)})}
g.pa=function(){return this.b.pa(!1)};function ad(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function bd(a){bd[" "](a);return a}
bd[" "]=t;function cd(a,b){var c=dd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var ed=B("Opera"),K=B("Trident")||B("MSIE"),fd=B("Edge"),gd=B("Gecko")&&!(-1!=qb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),hd=-1!=qb.toLowerCase().indexOf("webkit")&&!B("Edge"),id=B("Windows");function jd(){var a=m.document;return a?a.documentMode:void 0}
var kd;a:{var ld="",md=function(){var a=qb;if(gd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fd)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hd)return/WebKit\/(\S+)/.exec(a);if(ed)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
md&&(ld=md?md[1]:"");if(K){var nd=jd();if(null!=nd&&nd>parseFloat(ld)){kd=String(nd);break a}}kd=ld}var od=kd,dd={};function pd(a){return cd(a,function(){return 0<=Fa(od,a)})}
function qd(a){return Number(rd)>=a}
var sd=m.document,rd=sd&&K?jd()||("CSS1Compat"==sd.compatMode?parseInt(od,10):5):void 0;function td(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function ud(a){a=String(a);if(td(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function vd(a){return eval("("+a+")")}
function L(a){return wd(new xd(void 0),a)}
function xd(a){this.b=a}
function wd(a,b){var c=[];yd(a,b,c);return c.join("")}
function yd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(v(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],yd(a,a.b?a.b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),zd(d,c),c.push(":"),yd(a,a.b?a.b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":zd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ad={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Bd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function zd(a,b){b.push('"',a.replace(Bd,function(a){var b=Ad[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ad[a]=b);return b}),'"')}
;function Cd(a){return H("EXPERIMENT_FLAGS",{})[a]}
;var Dd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ed(a){return a?decodeURI(a):a}
function Fd(a,b){return b.match(Dd)[a]||null}
function Gd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?sa(h):"")}}
function Hd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Id(a,b,c){if(v(b))for(var d=0;d<b.length;d++)Id(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Jd(a,b,c){for(c=c||0;c<b.length;c+=2)Id(b[c],b[c+1],a);return a}
function Kd(a,b){for(var c in b)Id(c,b[c],a);return a}
function Ld(a){a=Kd([],a);a[0]="";return a.join("")}
function Md(a,b){return Hd(2==arguments.length?Jd([a],arguments[1],0):Jd([a],arguments,1))}
function Nd(a,b){return Hd(Kd([a],b))}
;function Od(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=sa(e[0]||""),e=sa(e[1]||"");f in b?v(b[f])?Wa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Pd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Od(d[1]||""),e;for(e in b)d[e]=b[e];return Nd(a,d)+c}
;var Qd=null;"undefined"!=typeof XMLHttpRequest?Qd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Qd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Rd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Sd(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&gc(b)(l)}
var l=Qd&&Qd();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);f="POST"==c;if(e=Td(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Td(a,b){b=b||{};var c;c||(c=window.location.href);var d=Fd(1,a),e=Ed(Fd(3,a));d&&e?(d=c,c=a.match(Dd),d=d.match(Dd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Ed(Fd(3,c))==e&&(Number(Fd(4,c))||null)==(Number(Fd(4,a))||null):!0;for(var f in Ud){if((e=d=H(Ud[f]))&&!(e=c)){var e=f,h=H("CORS_HEADER_WHITELIST")||{},k=Ed(Fd(3,a));e=k?(h=h[k])?Qa(h,e):!1:!0}e&&(b[f]=d)}return b}
function Vd(a,b){var c=H("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.bf&&(!Ed(Fd(3,a))||b.withCredentials||Ed(Fd(3,a))==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.O&&b.O[c])}
function Wd(a,b){var c=b.format||"JSON";b.cf&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=H("XSRF_FIELD_NAME",void 0),e=H("XSRF_TOKEN",void 0),f=b.Wb;f&&(f[d]&&delete f[d],a=Pd(a,f||{}));var h=b.postBody||"",f=b.O;Vd(a,b)&&(f||(f={}),f[d]=e);f&&w(h)&&(d=Od(h),nb(d,f),h=b.Gc&&"JSON"==b.Gc?JSON.stringify(d):Ld(d));var k=!1,l,n=Sd(a,function(a){if(!k){k=!0;l&&J(l);var d=Rd(a),e=null;if(d||400<=a.status&&500>a.status)e=
Xd(c,a,b.af);if(d)a:if(Cd("ajax_204_success")&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.R&&b.R.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Tb&&b.Tb.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.ka&&0<b.timeout&&(l=I(function(){k||(k=!0,n.abort(),J(l),b.ka.call(b.context||m,n))},b.timeout));
return n}
function Xd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=vd(a));break;case "XML":if(b=(b=b.responseXML)?Yd(b):null)d={},A(b.getElementsByTagName("*"),function(a){d[a.tagName]=Zd(a)})}c&&ae(d);
return d}
function ae(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Fb(a[b]);a[c]=d}else ae(a[b])}}
function Yd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Zd(a){var b="";A(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Ud={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var be={},ce=0;function de(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):I(a,b||0)}
;var ee=[],fe=!1;function ge(){function a(){fe=!0;"google_ad_status"in window?ec("DCLKSTAT",1):ec("DCLKSTAT",2)}
xc("//static.doubleclick.net/instream/ad_status.js",a);ee.push(de(function(){fe||"google_ad_status"in window||(Ec("//static.doubleclick.net/instream/ad_status.js",a),ec("DCLKSTAT",3))},5E3))}
function he(){return parseInt(H("DCLKSTAT",0),10)}
;function ie(a,b){this.width=a;this.height=b}
g=ie.prototype;g.clone=function(){return new ie(this.width,this.height)};
g.jd=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.jd()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function je(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in ke||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
je.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
je.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
je.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var ke={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function le(a){if(a.classList)return a.classList;a=a.className;return w(a)&&a.match(/\S+/g)||[]}
function me(a,b){return a.classList?a.classList.contains(b):Qa(le(a),b)}
function ne(a,b){a.classList?a.classList.add(b):me(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function oe(a,b){a.classList?a.classList.remove(b):me(a,b)&&(a.className=Ja(le(a),function(a){return a!=b}).join(" "))}
function pe(a,b,c){c?ne(a,b):oe(a,b)}
;var qe=y().toString();function re(a,b){this.J=p(a)?a:0;this.L=p(b)?b:0}
re.prototype.clone=function(){return new re(this.J,this.L)};
re.prototype.ceil=function(){this.J=Math.ceil(this.J);this.L=Math.ceil(this.L);return this};
re.prototype.floor=function(){this.J=Math.floor(this.J);this.L=Math.floor(this.L);return this};
re.prototype.round=function(){this.J=Math.round(this.J);this.L=Math.round(this.L);return this};!gd&&!K||K&&qd(9)||gd&&pd("1.9.1");var se=K&&!pd("9");function te(a){ue();var b=new Ab;b.b=a;return b}
var ue=t;function ve(a){return a?new we(xe(a)):pa||(pa=new we)}
function ye(a){var b=document;return w(a)?b.getElementById(a):a}
function ze(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):Ae(a)}
function Ae(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var h=b.className;"function"==typeof h.split&&Qa(h.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function Be(a){var b=a.scrollingElement?a.scrollingElement:!hd&&Ce(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return K&&pd("10")&&a.pageYOffset!=b.scrollTop?new re(b.scrollLeft,b.scrollTop):new re(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Ce(a){return"CSS1Compat"==a.compatMode}
function De(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Ee(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Fe(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function xe(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ge(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else De(a),a.appendChild(xe(a).createTextNode(String(b)))}
var He={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ie={IMG:" ",BR:"\n"};function Je(a){if(se&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ke(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");se||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ke(a,b,c){if(!(a.nodeName in He))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ie)b.push(Ie[a.nodeName]);else for(a=a.firstChild;a;)Ke(a,b,c),a=a.nextSibling}
function Le(a){var b=Me.$c;return b?Ne(a,function(a){return!b||w(a.className)&&Qa(a.className.split(/\s+/),b)},!0,void 0):null}
function Ne(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function we(a){this.b=a||m.document||document}
g=we.prototype;g.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(a)};
g.createElement=function(a){return this.b.createElement(String(a))};
g.appendChild=function(a,b){a.appendChild(b)};
g.isElement=function(a){return ha(a)&&1==a.nodeType};
g.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Oe=r("yt.dom.getNextId_");if(!Oe){Oe=function(){return++Pe};
q("yt.dom.getNextId_",Oe,void 0);var Pe=0}function Qe(){var a=document,b;Ma(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;var hb=r("yt.events.listeners_")||{};q("yt.events.listeners_",hb,void 0);var Re=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Re,void 0);function Se(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return gb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Se(a,b,c,d);if(e)return e;var e=++Re.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new je(d);if(!Ne(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new je(b);
b.currentTarget=a;return c.call(a,b)};
h=gc(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);hb[e]=[a,b,c,h,d];return e}
function Te(a){a&&("string"==typeof a&&(a=[a]),A(a,function(a){if(a in hb){var b=hb[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete hb[a]}}))}
;function Ue(){if(null==r("_lact",window)){var a=parseInt(H("LACT"),10),a=isFinite(a)?y()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Ve();M(document,"keydown",Ve);M(document,"keyup",Ve);M(document,"mousedown",Ve);M(document,"mouseup",Ve);qc("page-mouse",Ve);qc("page-scroll",Ve);qc("page-resize",Ve)}}
function Ve(){null==r("_lact",window)&&(Ue(),r("_lact",window));var a=y();q("_lact",a,window);tc("USER_ACTIVE")}
function We(){var a=r("_lact",window);return null==a?-1:Math.max(y()-a,0)}
;function Xe(){}
Xe.prototype.set=u;Xe.prototype.get=u;Xe.prototype.remove=u;function Ye(){}
z(Ye,Xe);Ye.prototype.W=function(){var a=0;Mc(this.pa(!0),function(){a++});
return a};
Ye.prototype.pa=u;Ye.prototype.clear=function(){var a=Nc(this.pa(!0)),b=this;A(a,function(a){b.remove(a)})};function Ze(a){this.b=a}
z(Ze,Ye);g=Ze.prototype;g.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.b.getItem(a);if(!w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeItem(a)};
g.W=function(){return this.b.length};
g.pa=function(a){var b=0,c=this.b,d=new Kc;d.next=function(){if(b>=c.length)throw Jc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!w(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.b.clear()};
g.key=function(a){return this.b.key(a)};function $e(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z($e,Ze);function af(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(af,Ze);function bf(a){this.b=a}
bf.prototype.set=function(a,b){p(b)?this.b.set(a,L(b)):this.b.remove(a)};
bf.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return ud(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bf.prototype.remove=function(a){this.b.remove(a)};function cf(a){this.b=a}
z(cf,bf);function df(a){this.data=a}
function ef(a){return!p(a)||a instanceof df?a:new df(a)}
cf.prototype.set=function(a,b){cf.C.set.call(this,a,ef(b))};
cf.prototype.f=function(a){a=cf.C.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cf.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ff(a){this.b=a}
z(ff,cf);function gf(a){var b=a.creation;a=a.expiration;return!!a&&a<y()||!!b&&b>y()}
ff.prototype.set=function(a,b,c){if(b=ef(b)){if(c){if(c<y()){ff.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}ff.C.set.call(this,a,b)};
ff.prototype.f=function(a,b){var c=ff.C.f.call(this,a);if(c)if(!b&&gf(c))ff.prototype.remove.call(this,a);else return c};function hf(a){this.b=a}
z(hf,ff);function jf(a,b){var c=[];Mc(b,function(a){var b;try{b=hf.prototype.f.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?gf(b)&&c.push(a):c.push(a)},a);
return c}
function kf(a,b){var c=jf(a,b);A(c,function(a){hf.prototype.remove.call(this,a)},a)}
function lf(){var a=mf;kf(a,a.b.pa(!0))}
;function N(a,b,c){var d=c&&0<c?c:0;c=d?y()+1E3*d:0;if((d=d?mf:nf)&&window.JSON){w(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function of(a){if(!nf&&!mf||!window.JSON)return null;var b;try{b=nf.get(a)}catch(c){}if(!w(b))try{b=mf.get(a)}catch(c){}if(!w(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function pf(a){nf&&nf.remove(a);mf&&mf.remove(a)}
var mf,qf=new $e;mf=qf.isAvailable()?new hf(qf):null;var nf,rf=new af;nf=rf.isAvailable()?new hf(rf):null;var sf=B("Firefox"),tf=ad()||B("iPod"),uf=B("iPad"),vf=B("Android")&&!(tb()||B("Firefox")||B("Opera")||B("Silk")),wf=tb(),xf=B("Safari")&&!(tb()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!(ad()||B("iPad")||B("iPod"));function yf(a){this.b=a;this.f=this.g=void 0}
function zf(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var Af={log_event:"events",log_interaction:"interactions"},Bf={},Cf={},Df=0,Ef=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Ef,void 0);function Ff(a,b){Ef[a.endpoint]=Ef[a.endpoint]||[];var c=Ef[a.endpoint];c.push(a.Ec);Cf[a.endpoint]=b;20<=c.length?Gf():Hf()}
function Gf(){J(Df);if(!ib(Ef)){for(var a in Ef){var b=Bf[a];if(!b){b=Cf[a];if(!b)continue;b=new b;Bf[a]=b}var c=b.f();c.requestTimeMs=Math.round(jc());c[Af[a]]=Ef[a];b.g(a,c,{});delete Ef[a]}ib(Ef)||Hf()}}
function Hf(){J(Df);Df=I(Gf,H("LOGGING_BATCH_TIMEOUT",1E4))}
;function If(a,b){var c=Jf(),d=La(b,function(a){return zf(a)});
Kf(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function Kf(a,b,c){b.eventTimeMs=Math.round(jc());b.lactMs=We();c&&(b.clientData=Lf(c));Ff({endpoint:"log_interaction",Ec:b},a)}
function Lf(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=La(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Mf(){var a=H("client-screen-nonce",void 0);a||(a=H("EVENT_ID",void 0));return a}
;var Nf={};function Of(a){this.b=a||{cookie:""}}
var Pf=/\s*;\s*/;g=Of.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Pf),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.qa=function(){return Qf(this).keys};
g.X=function(){return Qf(this).values};
g.isEmpty=function(){return!this.b.cookie};
g.W=function(){return this.b.cookie?(this.b.cookie||"").split(Pf).length:0};
g.$a=function(a){for(var b=Qf(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Qf(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Qf(a){a=(a.b.cookie||"").split(Pf);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Rf=new Of("undefined"==typeof document?null:document);Rf.f=3950;function Sf(a,b,c){Rf.set(""+a,b,c,"/","youtube.com")}
;function Tf(a,b,c){var d=H("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=H("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Ed(Fd(3,window.location.href));e&&d.push(e);e=Ed(Fd(3,a));if(Qa(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(Dd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))Cd("enable_more_related_ve_logging")&&(b.itct||b.ved)&&(b.csn=b.csn||Mf()),d="ST-"+Ha(d).toString(36),e=b?Ld(b):"",Sf(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),
b&&d&&d(new yf(b)))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Nd(a,{})+"",a=a instanceof ub?a:yb(a),c.href=wb(a));return!0}
;function Uf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||kb(Vf);this.assets=a.assets||{};this.attrs=a.attrs||kb(Wf);this.params=a.params||kb(Xf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Vf={enablejsapi:1},Wf={},Xf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Yf(a){a instanceof Uf||(a=new Uf(a));return a}
Uf.prototype.clone=function(){var a=new Uf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==da(c)?a[b]=kb(c):a[b]=c}return a};function Zf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=Zf.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new Zf(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof Zf?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.J>=this.left&&a.J<=this.right&&a.L>=this.top&&a.L<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function $f(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=$f.prototype;g.clone=function(){return new $f(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof re?a.J>=this.left&&a.J<=this.left+this.width&&a.L>=this.top&&a.L<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ag(a,b){var c=xe(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function bg(a,b){return ag(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function cg(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function dg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function eg(a){var b=fg;if("none"!=bg(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function fg(a){var b=a.offsetWidth,c=a.offsetHeight,d=hd&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new ie(b,c):(a=cg(a),new ie(a.right-a.left,a.bottom-a.top))}
function gg(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function hg(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?gg(a,c):0}
var ig={thin:2,medium:4,thick:6};function jg(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in ig?ig[c]:gg(a,c)}
;function kg(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var h,k,l,n;if(kc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(G){h=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=l.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(G){k=""}l&&n&&l.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.b=h[0];this.f=h[1];this.g=h[2]}}
ba(kg);function lg(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function mg(a){if(window.spf){var b=a.match(ng);spf.style.load(a,b?b[1]:"",void 0)}else og(a)}
function og(a){var b=pg(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=qg(a,b,function(){C(c,"loaded")||(Ib(c,"loaded","true"),tc(b),I(na(wc,b),0))}))}
function qg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=te(a);Hb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function pg(a){var b=document.createElement("a");Gb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ha(a)}
var ng=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var rg;var sg=qb,sg=sg.toLowerCase();if(-1!=sg.indexOf("android")){var tg=sg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(tg)rg=Number(tg[1]);else{var ug={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},vg=sg.match("("+fb(ug).join("|")+")");rg=vg?ug[vg[0]]:0}}else rg=void 0;var wg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],xg=['audio/mp4; codecs="mp4a.40.2"'];function yg(a){D.call(this);this.b=[];this.f=a||this}
z(yg,D);function zg(a,b,c,d){d=gc(x(d,a.f));b.addEventListener(c,d);a.b.push({target:b,name:c,Fb:d})}
yg.prototype.Bb=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b]==a){this.b.splice(b,1);a.target.removeEventListener(a.name,a.Fb);break}};
function Ag(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.Fb)}}
yg.prototype.A=function(){Ag(this);yg.C.A.call(this)};function Bg(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Cg(a,b){this.b=0;this.l=void 0;this.i=this.f=this.g=null;this.j=this.o=!1;if(a!=t)try{var c=this;a.call(b,function(a){Dg(c,2,a)},function(a){Dg(c,3,a)})}catch(d){Dg(this,3,d)}}
function Eg(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Eg.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Fg=new Pb(function(){return new Eg},function(a){a.reset()},100);
function Gg(a,b,c){var d=Fg.get();d.g=a;d.f=b;d.context=c;return d}
function Hg(a){if(a instanceof Cg)return a;var b=new Cg(t);Dg(b,2,a);return b}
function Ig(a){return new Cg(function(b,c){c(a)})}
Cg.prototype.then=function(a,b,c){return Jg(this,ga(a)?a:null,ga(b)?b:null,c)};
Bg(Cg);Cg.prototype.cancel=function(a){0==this.b&&Ub(function(){var b=new Kg(a);Lg(this,b)},this)};
function Lg(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,h=c.f;h&&(h.i||(d++,h.b==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.b&&1==d?Lg(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Mg(c),Ng(c,e,3,b)))}a.g=null}else Dg(a,3,b)}
function Og(a,b){a.f||2!=a.b&&3!=a.b||Pg(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Jg(a,b,c,d){var e=Gg(null,null,null);e.b=new Cg(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Kg?h(b):a(e)}catch(n){h(n)}}:h});
e.b.g=a;Og(a,e);return e.b}
Cg.prototype.T=function(a){this.b=0;Dg(this,2,a)};
Cg.prototype.G=function(a){this.b=0;Dg(this,3,a)};
function Dg(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.T,h=a.G;if(e instanceof Cg)Og(e,Gg(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ha(e))try{var l=e.then;if(ga(l)){Rg(e,l,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.l=c,a.b=b,a.g=null,Pg(a),3!=b||c instanceof Kg||Sg(a,c))}}
function Rg(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(l){f(l)}}
function Pg(a){a.o||(a.o=!0,Ub(a.B,a))}
function Mg(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Cg.prototype.B=function(){for(var a;a=Mg(this);)Ng(this,a,this.b,this.l);this.o=!1};
function Ng(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Tg(b,c,d);else try{b.i?b.g.call(b.context):Tg(b,c,d)}catch(e){Ug.call(null,e)}Qb(Fg,b)}
function Tg(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Sg(a,b){a.j=!0;Ub(function(){a.j&&Ug.call(null,b)})}
var Ug=Mb;function Kg(a){oa.call(this,a)}
z(Kg,oa);Kg.prototype.name="cancel";function Vg(){return{apiaryHost:H("APIARY_HOST",void 0),ec:H("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:H("GAPI_HINT_OVERRIDE"),gapiHintParams:H("GAPI_HINT_PARAMS",void 0),innertubeApiKey:H("INNERTUBE_API_KEY",void 0),innertubeApiVersion:H("INNERTUBE_API_VERSION",void 0),Ad:H("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Cd:H("INNERTUBE_CONTEXT_HL",void 0),Bd:H("INNERTUBE_CONTEXT_GL",void 0),Ce:H("XHR_APIARY_HOST",void 0)}}
function Wg(a){a={client:{hl:a.Cd,gl:a.Bd,clientName:a.Ad,clientVersion:a.innertubeContextClientVersion}};H("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:H("DELEGATED_SESSION_ID")});return a}
;function Xg(){this.b=Vg();Yg||(Yg=Zg(this.b))}
var Yg=null;function Zg(a){return(new Cg(function(b){xc(H("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){ic(c)}})})).then(function(){})}
Xg.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;qa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.ec;qa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",H("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Xg.prototype.f=function(){return{context:Wg(this.b)}};
Xg.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=I(function(){e||(e=!0,c.ka&&c.ka())},c.timeout));
$g(this,a,b,function(a){if(!e)if(e=!0,d&&J(d),a)c.R&&c.R(a);else if(c.onError)c.onError()})};
function $g(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":H("VISITOR_DATA")},method:"POST",body:L(c)},f=x(a.i,a);Yg.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function ah(a,b,c){var d={};d.eventTimeMs=Math.round(c||jc());d[a]=b;Ff({endpoint:"log_event",Ec:d},Xg)}
;function bh(a,b){this.f=this.B=this.i="";this.l=null;this.j=this.b="";this.o=!1;var c;a instanceof bh?(this.o=p(b)?b:a.o,ch(this,a.i),this.B=a.B,dh(this,a.f),eh(this,a.l),this.b=a.b,fh(this,a.g.clone()),this.j=a.j):a&&(c=String(a).match(Dd))?(this.o=!!b,ch(this,c[1]||"",!0),this.B=gh(c[2]||""),dh(this,c[3]||"",!0),eh(this,c[4]),this.b=gh(c[5]||"",!0),fh(this,c[6]||"",!0),this.j=gh(c[7]||"")):(this.o=!!b,this.g=new hh(null,0,this.o))}
bh.prototype.toString=function(){var a=[],b=this.i;b&&a.push(ih(b,jh,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.B)&&a.push(ih(b,jh,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.l,null!=c&&a.push(":",String(c));if(c=this.b)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(ih(c,"/"==c.charAt(0)?kh:lh,!0));(c=this.g.toString())&&a.push("?",c);(c=this.j)&&a.push("#",ih(c,mh));return a.join("")};
bh.prototype.resolve=function(a){var b=this.clone(),c=!!a.i;c?ch(b,a.i):c=!!a.B;c?b.B=a.B:c=!!a.f;c?dh(b,a.f):c=null!=a.l;var d=a.b;if(c)eh(b,a.l);else if(c=!!a.b){if("/"!=d.charAt(0))if(this.f&&!this.b)d="/"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.g.toString();c?fh(b,gh(a.g.toString())):c=!!a.j;c&&(b.j=a.j);return b};
bh.prototype.clone=function(){return new bh(this)};
function ch(a,b,c){a.i=c?gh(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))}
function dh(a,b,c){a.f=c?gh(b,!0):b}
function eh(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.l=b}else a.l=null}
function fh(a,b,c){b instanceof hh?(a.g=b,nh(a.g,a.o)):(c||(b=ih(b,oh)),a.g=new hh(b,0,a.o))}
function O(a,b,c){a.g.set(b,c)}
function ph(a,b,c){v(c)||(c=[String(c)]);qh(a.g,b,c)}
function rh(a){O(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^y()).toString(36));return a}
function sh(a){return a instanceof bh?a.clone():new bh(a,void 0)}
function th(a,b,c,d){var e=new bh(null,void 0);a&&ch(e,a);b&&dh(e,b);c&&eh(e,c);d&&(e.b=d);return e}
function gh(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function ih(a,b,c){return w(a)?(a=encodeURI(a).replace(b,uh),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function uh(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var jh=/[#\/\?@]/g,lh=/[\#\?:]/g,kh=/[\#\?]/g,oh=/[\#\?@]/g,mh=/#/g;function hh(a,b,c){this.f=this.b=null;this.g=a||null;this.i=!!c}
function vh(a){a.b||(a.b=new Oc,a.f=0,a.g&&Gd(a.g,function(b,c){wh(a,sa(b),c)}))}
g=hh.prototype;g.W=function(){vh(this);return this.f};
function wh(a,b,c){vh(a);a.g=null;b=xh(a,b);var d=a.b.get(b);d||a.b.set(b,d=[]);d.push(c);a.f=a.f+1}
g.remove=function(a){vh(this);a=xh(this,a);return Qc(this.b.f,a)?(this.g=null,this.f=this.f-this.b.get(a).length,this.b.remove(a)):!1};
g.clear=function(){this.b=this.g=null;this.f=0};
g.isEmpty=function(){vh(this);return 0==this.f};
function yh(a,b){vh(a);b=xh(a,b);return Qc(a.b.f,b)}
g.$a=function(a){var b=this.X();return Qa(b,a)};
g.qa=function(){vh(this);for(var a=this.b.X(),b=this.b.qa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.X=function(a){vh(this);var b=[];if(w(a))yh(this,a)&&(b=Ua(b,this.b.get(xh(this,a))));else{a=this.b.X();for(var c=0;c<a.length;c++)b=Ua(b,a[c])}return b};
g.set=function(a,b){vh(this);this.g=null;a=xh(this,a);yh(this,a)&&(this.f=this.f-this.b.get(a).length);this.b.set(a,[b]);this.f=this.f+1;return this};
g.get=function(a,b){var c=a?this.X(a):[];return 0<c.length?String(c[0]):b};
function qh(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.b.set(xh(a,b),Va(c)),a.f=a.f+c.length)}
g.toString=function(){if(this.g)return this.g;if(!this.b)return"";for(var a=[],b=this.b.qa(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.X(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.g=a.join("&")};
g.clone=function(){var a=new hh;a.g=this.g;this.b&&(a.b=this.b.clone(),a.f=this.f);return a};
function xh(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c}
function nh(a,b){b&&!a.i&&(vh(a),a.g=null,a.b.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),qh(this,c,a))},a));
a.i=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Vc(arguments[b],function(a,b){wh(this,b,a)},this)};var zh="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Ah="";
function Bh(a){return a&&a==Ah?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+zh.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Ah=a,!0):!1}
;var Ch={},Dh=0;function Eh(a){var b=new Image,c=""+Dh++;Ch[c]=b;b.onload=b.onerror=function(){delete Ch[c]};
b.src=a}
;function P(a,b){this.version=a;this.args=b}
function Fh(a){if(!a.Aa){var b={};a.call(b);a.Aa=b.version}return a.Aa}
function Gh(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Fh(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function Q(a,b){this.topic=a;this.b=b}
Q.prototype.toString=function(){return this.topic};var Hh=r("yt.pubsub2.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.na;F.prototype.publish=F.prototype.w;F.prototype.clear=F.prototype.clear;q("yt.pubsub2.instance_",Hh,void 0);var Ih=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Ih,void 0);var Jh=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Jh,void 0);var Kh=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Kh,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function R(a,b){var c=Lh();c&&c.publish.call(c,a.toString(),a,b)}
function Mh(a,b,c){var d=Lh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Ih[e])try{if(h&&a instanceof Q&&a!=d)try{h=Gh(a.b,h)}catch(l){throw l.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,h)}catch(l){ic(l)}};
Kh[a.toString()]?r("yt.scheduler.instance")?de(f,void 0):I(f,0):f()}});
Ih[e]=!0;Jh[a.toString()]||(Jh[a.toString()]=[]);Jh[a.toString()].push(e);return e}
function Nh(a){var b=Lh();b&&(fa(a)&&(a=[a]),A(a,function(a){b.unsubscribeByKey(a);delete Ih[a]}))}
function Lh(){return r("yt.pubsub2.instance_")}
;var Oh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Ph(a){P.call(this,1,arguments)}
z(Ph,P);var Qh=new Q("timing-sent",Ph);var Rh={vc:!0},Sh=/^mark_/i,Th={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},Uh=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Vh=x(Oh.clearResourceTimings||Oh.webkitClearResourceTimings||Oh.mozClearResourceTimings||Oh.msClearResourceTimings||Oh.oClearResourceTimings||t,Oh);
function Wh(a){if("_"!=a[0]){var b=a;Oh.mark&&(Sh.test(b)||(b="mark_"+b),Oh.mark(b))}var b=Xh(),c=jc();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;Yh()["tick_"+a]=void 0;Cd("csi_on_gel")?(b=Zh(),"_start"==a?ah("latencyActionBaselined",{clientActionNonce:b},void 0):ah("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0),a=!0):a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!Cd("navigation_only_csi_reset"));if(!a&&(b=H("TIMING_ACTION",void 0),a=Xh(),r("yt.timing.ready_")&&b&&a._start&&
$h())){b=!0;c=H("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&ai()}}
function bi(){var a=ci().info.yt_lt="hot_bg";Yh().info_yt_lt=a;if(Cd("csi_on_gel"))if("yt_lt"in Th){var b={},c=Th.yt_lt;Qa(Uh,c)&&(a=!!a);b[c]=a;a=Zh();b.clientActionNonce=a;ah("latencyActionInfo",b)}else ic(Error("Unknown label yt_lt logged with GEL CSI."))}
function $h(){var a=Xh();if(a.aft)return a.aft;for(var b=H("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function ai(){var a=Xh(),b=ci().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&v(a[d])){var e=d.slice(1);if(e in Rh){var f=La(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))di(f,e),ei(),Vh(),fi(!1,void 0)}else{var h=H("CSI_SERVICE_NAME","youtube"),f={v:2,s:h,action:H("TIMING_ACTION",void 0)},k=b.srt;delete b.srt;void 0===a.srt&&(k||0===k||(k=Oh.timing||{},k=Math.max(0,k.responseStart-k.navigationStart),isNaN(k)&&b.pt&&(k=b.pt)),k||0===k)&&(b.srt=Math.round(k));if(b.h5jse){var l=window.location.protocol+r("ytplayer.config.assets.js");(l=Oh.getEntriesByName?Oh.getEntriesByName(l)[0]:
null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):delete b.h5jse}a.aft=$h();gi()&&"youtube"==h&&(bi(),h=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-h));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=jc();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(h=Math.round(a[d]-c),b[d]=h,n.push(d+"."+h));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);Cd("navigation_only_csi_reset")||(ei(),Vh(),fi(!1,void 0));di(f,e,void 0);R(Qh,new Ph(b.aft+(k||0)))}}
function di(a,b,c){if(Cd("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&Eh(a)}catch(f){a&&Eh(a)}else a&&Eh(a);fi(!0,c)}
function Zh(){var a=ci().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=y();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(qe)for(c=1,d=0;d<qe.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^qe.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");ci().nonce=a}return a}
function Xh(){return ci().tick}
function Yh(){var a=ci();"gel"in a||(a.gel={});return a.gel}
function ci(){return r("ytcsi.data_")||ei()}
function ei(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function fi(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function gi(){var a=Xh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==ci().info.yt_pvis}
;var hi={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function ii(a,b){D.call(this);this.o=this.j=a;this.aa=b;this.B=!1;this.f={};this.La=this.$=null;this.da=new F;$b(this,na(E,this.da));this.i={};this.G=this.Ma=this.g=this.Ya=this.b=null;this.oa=!1;this.H=this.l=this.P=this.U=null;this.Na={};this.fd=["onReady"];this.ra=new yg(this);$b(this,na(E,this.ra));this.Eb=null;this.bc=NaN;this.va={};ji(this);this.sa("onDetailedError",x(this.Qd,this));this.sa("onTabOrderChange",x(this.kd,this));this.sa("onTabAnnounce",x(this.cc,this));this.sa("WATCH_LATER_VIDEO_ADDED",
x(this.Rd,this));this.sa("WATCH_LATER_VIDEO_REMOVED",x(this.Sd,this));sf||(this.sa("onMouseWheelCapture",x(this.Nd,this)),this.sa("onMouseWheelRelease",x(this.Od,this)));this.sa("onAdAnnounce",x(this.cc,this));this.K=new yg(this);$b(this,na(E,this.K));this.Xa=!1;this.Wa=null}
z(ii,D);var ki=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=ii.prototype;g.Yb=function(a,b){this.D()||(li(this,a),mi(this,b),this.B&&ni(this))};
function li(a,b){a.Ya=b;a.b=b.clone();a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.aa,a.b.attrs.id=a.aa);a.o.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.aa;a.Ma||(a.Ma=oi(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.o.style.width=dg(Number(c)||c,!0));if(c=a.b.attrs.height)a.o.style.height=dg(Number(c)||c,!0)}
g.sd=function(){return this.Ya};
function ni(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function pi(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=lg(kg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function qi(a,b){if((!b||(5!=(hi[b.errorCode]||5)?0:-1!=ki.indexOf(b.errorCode)))&&pi(a)){var c=ri(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Yf(c));d.args.autoplay=1;d.args.html5_unavailable="1";li(a,d);mi(a,"flash")}}
function mi(a,b){if(!a.D()){if(!b){var c;if(!(c=!a.b.html5&&pi(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==rg)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?wg:xg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=si(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?pi(a)?"flash":"unsupported":"html5"}("flash"==b?a.Ae:a.Be).call(a)}}
function si(a){var b=!0,c=ri(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.Be=function(){if(!this.oa){var a=si(this);a&&"html5"==ti(this)?(this.G="html5",this.B||this.Ra()):(ui(this),this.G="html5",a&&this.P?(this.j.appendChild(this.P),this.Ra()):(this.b.loaded=!0,this.U=x(function(){var a=this.j,c=this.b.clone();r("yt.player.Application.create")(a,c);this.Ra()},this),this.oa=!0,a?this.U():(xc(this.b.assets.js,this.U),mg(this.b.assets.css))))}};
g.Ae=function(){var a=this.b.clone();if(!this.l){var b=ri(this);b&&(this.l=document.createElement("span"),this.l.tabIndex=0,zg(this.ra,this.l,"focus",this.sc),this.H=document.createElement("span"),this.H.tabIndex=0,zg(this.ra,this.H,"focus",this.sc),b.parentNode&&b.parentNode.insertBefore(this.l,b),b.parentNode&&b.parentNode.insertBefore(this.H,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==ti(this))this.G="flash",this.B||this.Ra();else{ui(this);
this.G="flash";this.b.loaded=!0;var b=kg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!lg(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;if(c){var b=w(b)?ye(b):b,d=kb(a.attrs);d.tabindex=0;var e=kb(a.params);e.flashvars=Ld(a.args);if(kc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=
document.createElement("object"),f;for(f in d)a.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),a.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(f in d)a.setAttribute(f,d[f]);for(f in e)a.setAttribute(f,e[f])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.Ra()}};
g.sc=function(){ri(this).focus()};
function ri(a){var b=ye(a.g);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.g));return b}
g.Ra=function(){if(!this.D()){var a=ri(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.oa=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))qi(this);else{ji(this);this.B=!0;a=ri(this);a.addEventListener&&(this.$=vi(this,a,"addEventListener"));a.removeEventListener&&(this.La=vi(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=vi(this,a,d))}for(var e in this.i)this.$(e,
this.i[e]);ni(this);this.Ma&&this.Ma(this.f);this.da.w("onReady",this.f)}else this.bc=I(x(this.Ra,this),50)}};
function vi(a,b,c){var d=b[c];return function(){try{return a.Eb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Eb=e,ic(e,"WARNING"))}}}
function ji(a){a.B=!1;if(a.La)for(var b in a.i)a.La(b,a.i[b]);for(var c in a.va)J(parseInt(c,10));a.va={};a.$=null;a.La=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=x(a.sa,a);a.f.removeEventListener=x(a.ne,a);a.f.destroy=x(a.dispose,a);a.f.getLastError=x(a.td,a);a.f.getPlayerType=x(a.ud,a);a.f.getCurrentVideoConfig=x(a.sd,a);a.f.loadNewVideoConfig=x(a.Yb,a);a.f.isReady=x(a.Ne,a)}
g.Ne=function(){return this.B};
g.sa=function(a,b){if(!this.D()){var c=oi(this,b);if(c){if(!Qa(this.fd,a)&&!this.i[a]){var d=wi(this,a);this.$&&this.$(a,d)}this.da.subscribe(a,c);"onReady"==a&&this.B&&I(na(c,this.f),0)}}};
g.ne=function(a,b){if(!this.D()){var c=oi(this,b);c&&this.da.unsubscribe(a,c)}};
function oi(a,b){var c=b;if("string"==typeof b){if(a.Na[b])return a.Na[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.Na[b]=c}return c?c:null}
function wi(a,b){var c="ytPlayer"+b+a.aa;a.i[b]=c;m[c]=function(c){var d=I(function(){if(!a.D()){a.da.w(b,c);var e=a.va,h=String(d);h in e&&delete e[h]}},0);
jb(a.va,String(d))};
return c}
g.kd=function(a){a=a?Fe:Ee;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.l||b==this.H||(b.focus(),b!=document.activeElement));)b=a(b)};
g.cc=function(a){tc("a11y-announce",a)};
g.Qd=function(a){qi(this,a)};
g.Rd=function(a){tc("WATCH_LATER_VIDEO_ADDED",a)};
g.Sd=function(a){tc("WATCH_LATER_VIDEO_REMOVED",a)};
g.Nd=function(){this.Xa||(wf?(this.Wa=Be(document),zg(this.K,window,"scroll",this.he),zg(this.K,this.j,"touchmove",this.be)):(zg(this.K,this.j,"mousewheel",this.wc),zg(this.K,this.j,"wheel",this.wc)),this.Xa=!0)};
g.Od=function(){Ag(this.K);this.Xa=!1};
g.wc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.he=function(){window.scrollTo(this.Wa.J,this.Wa.L)};
g.be=function(a){a.preventDefault()};
g.ud=function(){return this.G||ti(this)};
g.td=function(){return this.Eb};
function ti(a){return(a=ri(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function ui(a){Wh("dcp");a.cancel();ji(a);a.G=null;a.b&&(a.b.loaded=!1);var b=ri(a);"html5"==ti(a)?a.P=b:b&&b.destroy&&b.destroy();De(a.j);Ag(a.ra);a.l=null;a.H=null}
g.cancel=function(){this.U&&Ec(this.b.assets.js,this.U);J(this.bc);this.oa=!1};
g.A=function(){ui(this);if(this.P&&this.b)try{this.P.destroy()}catch(b){ic(b)}this.Na=null;for(var a in this.i)m[this.i[a]]=null;this.Ya=this.b=this.f=null;delete this.j;delete this.o;ii.C.A.call(this)};var xi={},yi="player_uid_"+(1E9*Math.random()>>>0);function zi(a,b){a=w(a)?ye(a):a;b=Yf(b);var c=yi+"_"+ia(a),d=xi[c];if(d)return d.Yb(b),d.f;d=new ii(a,c);xi[c]=d;tc("player-added",d.f);$b(d,na(Ai,d));I(function(){d.Yb(b)},0);
return d.f}
function Ai(a){xi[a.aa]=null}
function Bi(a){a=ye(a);if(!a)return null;var b=yi+"_"+ia(a),c=xi[b];c||(c=new ii(a,b),xi[b]=c);return c.f}
;var Ci=r("yt.abuse.botguardInitialized")||Hc;q("yt.abuse.botguardInitialized",Ci,void 0);var Di=r("yt.abuse.invokeBotguard")||Ic;q("yt.abuse.invokeBotguard",Di,void 0);var Ei=r("yt.abuse.dclkstatus.checkDclkStatus")||he;q("yt.abuse.dclkstatus.checkDclkStatus",Ei,void 0);var Fi=r("yt.player.exports.navigate")||Tf;q("yt.player.exports.navigate",Fi,void 0);var Gi=r("yt.player.embed")||zi;q("yt.player.embed",Gi,void 0);var Hi=r("yt.player.getPlayerByElement")||Bi;q("yt.player.getPlayerByElement",Hi,void 0);
var Ii=r("yt.util.activity.init")||Ue;q("yt.util.activity.init",Ii,void 0);var Ji=r("yt.util.activity.getTimeSinceActive")||We;q("yt.util.activity.getTimeSinceActive",Ji,void 0);var Ki=r("yt.util.activity.setTimestamp")||Ve;q("yt.util.activity.setTimestamp",Ki,void 0);function Li(a){P.call(this,1,arguments);this.b=a}
z(Li,P);function Mi(a){P.call(this,1,arguments);this.b=a}
z(Mi,P);function Ni(a,b,c,d){P.call(this,2,arguments);this.g=a;this.b=null===b?null:!!b;this.receivePostUpdates=null===c?null:!!c;this.f=null===d?null:!!d}
z(Ni,P);function Oi(a,b,c,d,e){P.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
z(Oi,P);function Pi(a,b,c){P.call(this,1,arguments);this.b=a;this.subscriptionId=b}
z(Pi,P);function Qi(a,b,c,d,e,f,h){P.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=h||null}
z(Qi,P);
var Ri=new Q("subscription-batch-subscribe",Li),Si=new Q("subscription-batch-unsubscribe",Li),Ti=new Q("subscription-pref-email",Ni),Ui=new Q("subscription-subscribe",Oi),Vi=new Q("subscription-subscribe-loading",Mi),Wi=new Q("subscription-subscribe-loaded",Mi),Xi=new Q("subscription-subscribe-success",Pi),Yi=new Q("subscription-subscribe-external",Oi),Zi=new Q("subscription-unsubscribe",Qi),$i=new Q("subscription-unsubscirbe-loading",Mi),aj=new Q("subscription-unsubscribe-loaded",Mi),bj=new Q("subscription-unsubscribe-success",
Mi),cj=new Q("subscription-external-unsubscribe",Qi),dj=new Q("subscription-enable-ypc",Mi),ej=new Q("subscription-disable-ypc",Mi);function fj(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Md(c,"mode",b));c=Md("/signin?context=popup","next",c);c=Md(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=qc("LOGGED_IN",function(b){sc(H("LOGGED_IN_PUBSUB_KEY",void 0));ec("LOGGED_IN",!0);a(b)});
ec("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",tc,void 0);function gj(){var a=H("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!H("SESSION_INDEX")&&!H("LOGGED_IN"))}
;function hj(){var a=Qe();return a?a:null}
;function ij(a,b){(a=ye(a))&&a.style&&(a.style.display=b?"":"none",pe(a,"hid",!b))}
function jj(a){A(arguments,function(a){!ea(a)||a instanceof Element?ij(a,!0):A(a,function(a){jj(a)})})}
function kj(a){A(arguments,function(a){!ea(a)||a instanceof Element?ij(a,!1):A(a,function(a){kj(a)})})}
;var lj={},mj="ontouchstart"in document;function nj(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Ne(c,function(a){return me(a,b)},!0,d)}
function oj(a){var b="mouseover"==a.type&&"mouseenter"in lj||"mouseout"==a.type&&"mouseleave"in lj,c=a.type in lj||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=lj[b],d;for(d in c.ha){var e=nj(b,d,a.target);e&&!Ne(a.relatedTarget,function(a){return a==e},!0)&&c.w(d,e,b,a)}}if(b=lj[a.type])for(d in b.ha)(e=nj(a.type,d,a.target))&&b.w(d,e,a.type,a)}}
M(document,"blur",oj,!0);M(document,"change",oj,!0);M(document,"click",oj);M(document,"focus",oj,!0);M(document,"mouseover",oj);M(document,"mouseout",oj);M(document,"mousedown",oj);M(document,"keydown",oj);M(document,"keyup",oj);M(document,"keypress",oj);M(document,"cut",oj);M(document,"paste",oj);mj&&(M(document,"touchstart",oj),M(document,"touchend",oj),M(document,"touchcancel",oj));function pj(a){this.j=a;this.g={};this.wb=[];this.i=[]}
function S(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
pj.prototype.register=u;pj.prototype.unregister=function(){sc(this.wb);this.wb.length=0;Nh(this.i);this.i.length=0};
pj.prototype.init=t;pj.prototype.dispose=t;function qj(a,b,c){a.i.push(Mh(b,c,a))}
function rj(a,b,c){var d=S(a,void 0),e=x(c,a);b in lj||(lj[b]=new F);lj[b].subscribe(d,e);a.g[c]=e}
function sj(a,b,c){if(b in lj){var d=lj[b];d.unsubscribe(S(a,void 0),a.g[c]);0>=d.W()&&(d.dispose(),delete lj[b])}delete a.g[c]}
function tj(a,b){Ib(a,"tooltip-text",b)}
;function uj(){pj.call(this,"tooltip");this.b=0;this.f={}}
z(uj,pj);ba(uj);g=uj.prototype;g.register=function(){rj(this,"mouseover",this.tb);rj(this,"mouseout",this.Ia);rj(this,"focus",this.lc);rj(this,"blur",this.gc);rj(this,"click",this.Ia);rj(this,"touchstart",this.Oc);rj(this,"touchend",this.Ab);rj(this,"touchcancel",this.Ab)};
g.unregister=function(){sj(this,"mouseover",this.tb);sj(this,"mouseout",this.Ia);sj(this,"focus",this.lc);sj(this,"blur",this.gc);sj(this,"click",this.Ia);sj(this,"touchstart",this.Oc);sj(this,"touchend",this.Ab);sj(this,"touchcancel",this.Ab);this.dispose();uj.C.unregister.call(this)};
g.dispose=function(){for(var a in this.f)this.Ia(this.f[a]);this.f={}};
g.tb=function(a){if(!(this.b&&1E3>y()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(Kb(a,"tooltip-hide-timer"),J(b));var b=x(function(){vj(this,a);Kb(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=I(b,c);
Ib(a,"tooltip-show-timer",b.toString());a.title&&(tj(a,wj(a)),a.title="");b=ia(a).toString();this.f[b]=a}};
g.Ia=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(J(b),Kb(a,"tooltip-show-timer"));b=x(function(){if(a){var b=ye(xj(this,a));b&&(yj(b),b&&b.parentNode&&b.parentNode.removeChild(b),Kb(a,"content-id"));(b=ye(xj(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Kb(a,"tooltip-hide-timer")},this);
b=I(b,50);Ib(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
g.lc=function(a){this.b=0;this.tb(a)};
g.gc=function(a){this.b=0;this.Ia(a)};
g.Oc=function(a,b,c){c.changedTouches&&(this.b=0,a=nj(b,S(this),c.changedTouches[0].target),this.tb(a))};
g.Ab=function(a,b,c){c.changedTouches&&(this.b=y(),a=nj(b,S(this),c.changedTouches[0].target),this.Ia(a))};
function zj(a,b){tj(a,b);var c=C(a,"content-id");(c=ye(c))&&Ge(c,b)}
function wj(a){return C(a,"tooltip-text")||a.title}
function vj(a,b){if(b){var c=wj(b);if(c){var d=ye(xj(a,b));if(!d){d=document.createElement("div");d.id=xj(a,b);d.className=S(a,"tip");var e=document.createElement("div");e.className=S(a,"tip-body");var f=document.createElement("div");f.className=S(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=S(a,"tip-content");var k=Aj(a,b),l=xj(a,b,"content");h.id=l;Ib(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var n=
Je(b),l=xj(a,b,"arialabel"),f=document.createElement("div");ne(f,S(a,"arialabel"));f.id=l;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;Ge(f,n);b.setAttribute("aria-labelledby",l);l=hj()||document.body;l.appendChild(f);l.appendChild(d);zj(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",ne(h,S(a,"normal-wrap")));h=me(b,S(a,"reverse"));Bj(a,b,d,e,k,h)||Bj(a,b,d,e,k,!h);var G=S(a,"tip-visible");
I(function(){ne(d,G)},0)}}}}
function Bj(a,b,c,d,e,f){pe(c,S(a,"tip-reverse"),f);var h=0;f&&(h=1);a=eg(b);f=new re((a.width-10)/2,f?a.height:0);var k=xe(b),l=new re(0,0),n;n=k?xe(k):document;n=!K||qd(9)||Ce(ve(n).b)?n.documentElement:n.body;b!=n&&(n=cg(b),k=Be(ve(k).b),l.J=n.left+k.J,l.L=n.top+k.L);f=new re(l.J+f.J,l.L+f.L);f=f.clone();l=(h&8&&"rtl"==bg(c,"direction")?h^4:h)&-9;h=eg(c);k=h.clone();n=f.clone();k=k.clone();0!=l&&(l&4?n.J-=k.width+0:l&2&&(n.J-=k.width/2),l&1&&(n.L-=k.height+0));f=new $f(0,0,0,0);f.left=n.J;f.top=
n.L;f.width=k.width;f.height=k.height;k=new re(f.left,f.top);k instanceof re?(l=k.J,k=k.L):(l=k,k=void 0);c.style.left=dg(l,!1);c.style.top=dg(k,!1);k=new ie(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,l=Ce(ve(xe(c)).b),!K||pd("10")||l&&pd("8"))f=c.style,gd?f.MozBoxSizing="border-box":hd?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,l){if(K){l=hg(c,"paddingLeft");k=hg(c,
"paddingRight");n=hg(c,"paddingTop");var G=hg(c,"paddingBottom"),l=new Zf(n,k,G,l)}else l=ag(c,"paddingLeft"),k=ag(c,"paddingRight"),n=ag(c,"paddingTop"),G=ag(c,"paddingBottom"),l=new Zf(parseFloat(n),parseFloat(k),parseFloat(G),parseFloat(l));if(K&&!qd(9)){k=jg(c,"borderLeft");n=jg(c,"borderRight");var G=jg(c,"borderTop"),ca=jg(c,"borderBottom"),k=new Zf(G,n,ca,k)}else k=ag(c,"borderLeftWidth"),n=ag(c,"borderRightWidth"),G=ag(c,"borderTopWidth"),ca=ag(c,"borderBottomWidth"),k=new Zf(parseFloat(G),
parseFloat(n),parseFloat(ca),parseFloat(k));f.pixelWidth=h.width-k.left-l.left-l.right-k.right;f.pixelHeight=h.height-k.top-l.top-l.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=Ce(h)?h.documentElement:h.body;f=new ie(h.clientWidth,h.clientHeight);1==c.nodeType?(c=cg(c),k=new re(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new re(c.clientX,c.clientY));c=eg(d);n=Math.floor(c.width/2);h=!!(f.height<k.L+a.height);a=!!(k.L<a.height);l=!!(k.J<n);f=!!(f.width<
k.J+n);k=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||l)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function xj(a,b,c){a=S(a);var d=b.__yt_uid_key;d||(d=Oe(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Aj(a,b){var c=null;id&&me(b,S(a,"masked"))&&((c=ye("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),jj(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=S(a,"tip-mask")));return c}
function yj(a){var b=ye("yt-uix-tooltip-shared-mask"),c=b&&Ne(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),kj(b),document.body.appendChild(b))}
;function Cj(){pj.call(this,"subscription-button")}
z(Cj,pj);ba(Cj);Cj.prototype.register=function(){rj(this,"click",this.Hb);qj(this,Vi,this.uc);qj(this,Wi,this.tc);qj(this,Xi,this.$d);qj(this,$i,this.uc);qj(this,aj,this.tc);qj(this,bj,this.fe);qj(this,dj,this.Md);qj(this,ej,this.Ld)};
Cj.prototype.unregister=function(){sj(this,"click",this.Hb);Cj.C.unregister.call(this)};
var Me={Zb:"hover-enabled",Yc:"yt-uix-button-subscribe",Zc:"yt-uix-button-subscribed",Pe:"ypc-enabled",$c:"yt-uix-button-subscription-container",ad:"yt-subscription-button-disabled-mask-container"},Dj={Qe:"channel-external-id",bd:"subscriber-count-show-when-subscribed",cd:"subscriber-count-tooltip",dd:"subscriber-count-title",Se:"href",$b:"is-subscribed",Ue:"parent-url",We:"clicktracking",ed:"style-type",ac:"subscription-id",Ze:"target",gd:"ypc-enabled"};g=Cj.prototype;
g.Hb=function(a){var b=C(a,"href"),c=gj();if(b)a=C(a,"target")||"_self",window.open(b,a);else if(c){var b=C(a,"channel-external-id"),c=C(a,"clicktracking"),d;if(C(a,"ypc-enabled")){d=C(a,"ypc-item-type");var e=C(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");R(Zi,new Qi(b,f,d,a,c,e))}else R(Ui,new Oi(b,d,c,e))}else Ej(this,a)};
g.uc=function(a){this.Oa(a.b,this.Lc,!0)};
g.tc=function(a){this.Oa(a.b,this.Lc,!1)};
g.$d=function(a){this.Oa(a.b,this.Mc,!0,a.subscriptionId)};
g.fe=function(a){this.Oa(a.b,this.Mc,!1)};
g.Md=function(a){this.Oa(a.b,this.od)};
g.Ld=function(a){this.Oa(a.b,this.nd)};
g.Mc=function(a,b,c){b?(Ib(a,Dj.$b,"true"),c&&Ib(a,Dj.ac,c)):(Kb(a,Dj.$b),Kb(a,Dj.ac));Fj(a)};
g.Lc=function(a,b){var c;c=Le(a);pe(c,Me.ad,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Fj(a){var b=C(a,Dj.ed),c=!!C(a,"is-subscribed"),b="-"+b,d=Me.Zc+b;pe(a,Me.Yc+b,!c);pe(a,d,c);C(a,Dj.cd)&&!C(a,Dj.bd)&&(b=S(uj.getInstance()),pe(a,b,!c),a.title=c?"":C(a,Dj.dd));c?I(function(){ne(a,Me.Zb)},1E3):oe(a,Me.Zb)}
g.od=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(ne(a,"ypc-enabled"),Ib(a,Dj.gd,"true"))};
g.nd=function(a){C(a,"ypc-enabled")&&(oe(a,"ypc-enabled"),Kb(a,"ypc-enabled"))};
function Gj(a,b){return Ja(ze(S(a)),function(a){return b==C(a,"channel-external-id")},a)}
g.hd=function(a,b,c){var d=Ya(arguments,2);A(a,function(a){b.apply(this,Ua(a,d))},this)};
g.Oa=function(a,b,c){var d=Gj(this,a);this.hd.apply(this,Ua([d],Ya(arguments,1)))};
function Ej(a,b){var c=x(function(a){a.discoverable_subscriptions&&ec("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Hb(b)},a);
fj(c,"subscribe")}
;var Hj=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Hj,void 0);var Ij=window,Jj=document,Kj=Ij.location;function Lj(){}
var Mj=/\[native code\]/;function T(a,b,c){return a[b]=a[b]||c}
function Nj(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Oj(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Pj(){var a;if((a=Object.create)&&Mj.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Qj=T(Ij,"gapi",{});var U;U=T(Ij,"___jsl",Pj());T(U,"I",0);T(U,"hel",10);function Rj(){var a=Kj.href,b;if(U.dpo)b=U.h;else{b=U.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Sj(a){var b=T(U,"PQ",[]);U.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Tj(a){return T(T(U,"H",Pj()),a,Pj())}
;var Uj=T(U,"perf",Pj());T(Uj,"g",Pj());var Vj=T(Uj,"i",Pj());T(Uj,"r",[]);Pj();Pj();function Wj(a,b,c){b&&0<b.length&&(b=Xj(b),c&&0<c.length&&(b+="___"+Xj(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=T(Vj,"_p",Pj()),T(b,c,Pj())[a]=(new Date).getTime(),b=Uj.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Xj(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Yj=Pj(),Zj=[];function ak(a){throw Error("Bad hint"+(a?": "+a:""));}
;Zj.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?U[b]=T(U,b,[]).concat(c):T(U,b,c)}if(b=a.u)a=T(U,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var bk=/^(\/[a-zA-Z0-9_\-]+)+$/,ck=/^[a-zA-Z0-9\-_\.,!]+$/,dk=/^gapi\.loaded_[0-9]+$/,ek=/^[a-zA-Z0-9,._-]+$/;function fk(a,b,c,d){var e=a.split(";"),f=e.shift(),h=Yj[f],k=null;h?k=h(e,b,c,d):ak("no hint processor for: "+f);k||ak("failed to generate load url");b=k;c=b.match(gk);(d=b.match(hk))&&1===d.length&&ik.test(b)&&c&&1===c.length||ak("failed sanity: "+a);return k}
function jk(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=kk(a);dk.test(c)||ak("invalid_callback");b=lk(b);d=d&&d.length?lk(d):null;return[encodeURIComponent(a.je).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.dc?"/am="+e(a.dc):"",a.Ic?"/rs="+e(a.Ic):"",a.Xc?"/t="+e(a.Xc):"","/cb=",e(c)].join("")}
function kk(a){"/"!==a.charAt(0)&&ak("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))ak("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),h=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&h&&k&&(a[h]=a[h]||k)}b="/"+c.join("/");bk.test(b)||ak("invalid_prefix");c=mk(a,"k",!0);d=mk(a,"am");e=mk(a,"rs");a=mk(a,"t");return{je:b,version:c,
dc:d,Ic:e,Xc:a}}
function lk(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");ek.test(e)&&b.push(e)}return b.join(",")}
function mk(a,b,c){a=a[b];!a&&c&&ak("missing: "+b);if(a){if(ck.test(a))return a;ak("invalid: "+b)}return null}
var ik=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,hk=/\/cb=/g,gk=/\/\//g;function nk(){var a=Rj();if(!a)throw Error("Bad hint");return a}
Yj.m=function(a,b,c,d){(a=a[0])||ak("missing_hint");return"https://apis.google.com"+jk(a,b,c,d)};var ok=decodeURI("%73cript");function pk(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Nj.call(b,e)&&c.push(e)}return c}
function qk(a){"loading"!=Jj.readyState?rk(a):Jj.write("<"+ok+' src="'+encodeURI(a)+'"></'+ok+">")}
function rk(a){var b=Jj.createElement(ok);b.setAttribute("src",a);b.async="true";(a=Jj.getElementsByTagName(ok)[0])?a.parentNode.insertBefore(b,a):(Jj.head||Jj.body||Jj.documentElement).appendChild(b)}
function sk(a,b){var c=b&&b._c;if(c)for(var d=0;d<Zj.length;d++){var e=Zj[d][0],f=Zj[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function tk(a,b,c){uk(function(){var c;c=b===Rj()?T(Qj,"_",Pj()):Pj();c=T(Tj(b),"_",c);a(c)},c)}
function vk(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);sk(a,c);var d=a?a.split(":"):[],e=c.h||nk(),f=T(U,"ah",Pj());if(f["::"]&&d.length){for(var h=[],k=null;k=d.shift();){var l=k.split("."),l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e,n=h.length&&h[h.length-1]||null,G=n;n&&n.hint==l||(G={hint:l,features:[]},h.push(G));G.features.push(k)}var ca=h.length;if(1<ca){var hc=c.callback;hc&&(c.callback=function(){0==--ca&&hc()})}for(;d=h.shift();)wk(d.features,c,d.hint)}else wk(d||[],c,e)}
function wk(a,b,c){function d(a,b){if(ca)return 0;Ij.clearTimeout(G);hc.push.apply(hc,Ka);var d=((Qj||{}).config||{}).update;d?d(f):f&&T(U,"cu",[]).push(f);if(b){Wj("me0",a,$d);try{tk(b,c,n)}finally{Wj("me1",a,$d)}}return 1}
a=Oj(a)||[];var e=b.callback,f=b.config,h=b.timeout,k=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var G=null,ca=!1;if(h&&!k||!h&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=T(Tj(c),"r",[]).sort(),hc=T(Tj(c),"L",[]).sort(),$d=[].concat(l);0<h&&(G=Ij.setTimeout(function(){ca=!0;k()},h));
var Ka=pk(a,hc);if(Ka.length){var Ka=pk(a,l),ob=T(U,"CP",[]),pb=ob.length;ob[pb]=function(a){function b(){var a=ob[pb+1];a&&a()}
function c(b){ob[pb]=null;d(Ka,a)&&Sj(function(){e&&e();b()})}
if(!a)return 0;Wj("ml1",Ka,$d);0<pb&&ob[pb-1]?ob[pb]=function(){c(b)}:c(b)};
if(Ka.length){var Qg="loaded_"+U.I++;Qj[Qg]=function(a){ob[pb](a);Qj[Qg]=null};
a=fk(c,Ka,"gapi."+Qg,l);l.push.apply(l,Ka);Wj("ml0",Ka,$d);b.sync||Ij.___gapisync?qk(a):rk(a)}else ob[pb](Lj)}else d(Ka)&&e&&e()}
;function uk(a,b){if(U.hee&&0<U.hel)try{return a()}catch(c){b&&b(c),U.hel--,vk("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;Qj.load=function(a,b){return uk(function(){return vk(a,b)})};function xk(a){this.b=a||Vg();yk||(yk=zk(this.b))}
var yk=null;function zk(a){return(new Cg(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ga(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||nb(d,{_c:{jsl:{h:H("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||H("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],h=f.split("?",2);e=Od(1<h.length?h[1]:h[0])}else e={};var k=e.gapi_jsh;k&&nb(d,{_c:{jsl:{h:k}}})}vk("client",d)}catch(l){ic(l)}})).then(function(){})}
xk.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;qa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.ec;qa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",H("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
xk.prototype.f=function(){return{context:Wg(this.b)}};
xk.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=I(function(){e||(e=!0,c.ka&&c.ka())},c.timeout));
Ak(this,a,b,function(a){if(!e)if(e=!0,d&&J(d),a)c.R&&c.R(a);else if(c.onError)c.onError()})};
function Ak(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":H("VISITOR_DATA")},method:"POST",body:L(c)},f=x(a.i,a);yk.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function Bk(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ck(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;G=n=0}
function b(a){for(var b=h,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],k=e[3],l=e[4],n,ca,c=0;80>c;c++)40>c?20>c?(n=k^d&(f^k),ca=1518500249):(n=d^f^k,ca=1859775393):60>c?(n=d&f|k&(d|f),ca=2400959708):(n=d^f^k,ca=3395469782),n=((a<<5|a>>>27)&4294967295)+n+l+ca+b[c]&4294967295,l=k,k=f,f=(d<<30|d>>>2)&4294967295,d=a,a=n;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,h=a.length;e<h;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,G+=64;for(;d<c;)if(f[n++]=a[d++],G++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,G+=64}
function d(){var a=[],d=8*G;56>n?c(k,56-n):c(k,64-(n-56));for(var h=63;56<=h;h--)f[h]=d&255,d>>>=8;b(f);for(h=d=0;5>h;h++)for(var l=24;0<=l;l-=8)a[d++]=e[h]>>l&255;return a}
for(var e=[],f=[],h=[],k=[128],l=1;64>l;++l)k[l]=0;var n,G;a();return{reset:a,update:c,digest:d,md:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Dk(a,b,c){var d=[],e=[];if(1==(v(c)?2:1))return e=[b,a],A(d,function(a){e.push(a)}),Ek(e.join(" "));
var f=[],h=[];A(c,function(a){h.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];A(d,function(a){e.push(a)});
a=Ek(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function Ek(a){var b=Ck();b.update(a);return b.md().toLowerCase()}
;function Fk(){this.b=Vg()}
Fk.prototype.f=function(){return{context:Wg(this.b)}};
Fk.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":H("VISITOR_DATA")},O:b,Gc:"JSON",ka:c.ka,R:c.R,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=Bk(String(m.location.href)),e=m.__OVERRIDE_SID;null==e&&(e=(new Of(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?m.__SAPISID:m.__APISID,null==d&&(d=(new Of(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(m.location.href);
c=f&&d&&e?[e,Dk(Bk(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=H("SESSION_INDEX",0));a="//"+this.b.Ce+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey;b.method="POST";b.O||(b.O={});Wd(a,b)};function Jf(){return Cd("enable_youtubei_innertube")?Fk:xk}
;function Gk(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Hk(a,b,c){w(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Ik(a)}
function Ik(a,b,c){if(ha(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Jk(a,b,c,d){if(ha(a)&&!v(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};w(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function Kk(a){var b=a.video_id||a.videoId;if(w(b)){var c=of("yt-player-two-stage-token")||{},d=of("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];N("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function Lk(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
function Mk(a){return document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var Nk=Mk("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Ok=Mk("loadCastFramework");function Pk(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var Qk=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],Rk=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],Sk=Lk()?Rk.concat(Qk):Qk.concat(Rk);function Tk(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function Uk(a){if(a>=Sk.length)Vk();else{var b=Sk[a],c="chrome-extension://"+b+Nk;0<=Qk.indexOf(b)?Tk(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Wk(c,Vk)):Uk(a+1)}):Wk(c,function(){Uk(a+1)})}}
function Wk(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Vk(){var a=Pk();a&&a(!1,"No cast extension found")}
function Xk(){if(Ok){var a=2,b=Pk(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Wk("//www.gstatic.com/cast/sdk/libs/sender/0.1/cast_framework.js",Vk,c)}}
function Yk(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){Xk();a({command:"cast.sender.init"});return}}window.chrome?(Xk(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=Lk()?"50":"",Wk("//www.gstatic.com/eureka/clank"+a+Nk,Vk)):Uk(0)):Vk()}
;var Zk=y(),$k=null,al=Array(50),bl=-1,cl=!1;function dl(){var a=el;fl();$k.push(a);gl($k)}
function hl(a,b){fl();var c=$k,d=il(a,String(b));0==c.length?jl(d):(gl(c),A(c,function(a){a(d)}))}
function fl(){$k||($k=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",$k,void 0))}
function jl(a){var b=(bl+1)%50;bl=b;al[b]=a;cl||(cl=49==b)}
function gl(a){var b=al;if(b[0]){var c=bl,d=cl?c:-1;do{var d=(d+1)%50,e=b[d];A(a,function(a){a(e)})}while(d!=c);
al=Array(50);bl=-1;cl=!1}}
function il(a,b){var c=(y()-Zk)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function kl(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function ll(a,b){return!!b&&(a.id==b||a.uuid==b)}
function ml(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function nl(a){return new kl(a)}
function ol(a){return v(a)?La(a,nl):[]}
function pl(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function ql(a){return v(a)?"["+La(a,pl).join(",")+"]":"null"}
;var rl={Oe:"atp",Ye:"ska",Ve:"que",Te:"mus",Xe:"sus"};function sl(a){this.i=this.g="";this.b="/api/lounge";this.f=!0;a=a||document.location.href;var b=Number(Fd(4,a))||null||"";b&&(this.i=":"+b);this.g=Ed(Fd(3,a))||"";a=qb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Fa(a,"10.0")&&(this.f=!1))}
function tl(a,b,c,d){var e=a.b;if(p(d)?d:a.f)e="https://"+a.g+a.i+a.b;return Nd(e+b,c||{})}
function ul(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,R:na(a.o,d,!0),onError:na(a.j,e),ka:na(a.l,e)};c&&(a.O=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Wd(b,a)}
sl.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
sl.prototype.j=function(a,b){a(Error("Request error: "+b.status))};
sl.prototype.l=function(a){a(Error("request timed out"))};function vl(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function wl(a){return La(a,function(a){return{key:a.id,name:a.name}})}
function xl(a,b){return Oa(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function yl(a,b){return Oa(a,function(a){return ll(a,b)})}
;function V(){D.call(this);this.o=new F;$b(this,na(E,this.o))}
z(V,D);V.prototype.subscribe=function(a,b,c){return this.D()?0:this.o.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.D()?!1:this.o.unsubscribe(a,b,c)};
V.prototype.na=function(a){return this.D()?!1:this.o.na(a)};
V.prototype.w=function(a,b){return this.D()?!1:this.o.w.apply(this.o,arguments)};function zl(a){V.call(this);this.l=a;this.screens=[]}
z(zl,V);g=zl.prototype;g.ea=function(){return this.screens};
g.contains=function(a){return!!xl(this.screens,a)};
g.get=function(a){return a?yl(this.screens,a):null};
g.start=u;g.lb=u;g.remove=u;g.jb=u;function Al(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function Bl(a,b){var c=a.screens.length!=b.length;a.screens=Ja(a.screens,function(a){return!!xl(b,a)});
for(var d=0,e=b.length;d<e;d++)c=Al(a,b[d])||c;return c}
function Cl(a,b){var c=a.screens.length;a.screens=Ja(a.screens,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.screens.length<c}
g.info=function(a){hl(this.l,a)};function Dl(a,b,c,d){V.call(this);this.B=a;this.l=b;this.i=c;this.j=d;this.g=0;this.b=null;this.f=NaN}
z(Dl,V);var El=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=Dl.prototype;g.start=function(){!this.b&&isNaN(this.f)&&this.Fc()};
g.stop=function(){this.b&&(this.b.abort(),this.b=null);isNaN(this.f)||(J(this.f),this.f=NaN)};
g.A=function(){this.stop();Dl.C.A.call(this)};
g.Fc=function(){this.f=NaN;this.b=Wd(tl(this.B,"/pairing/get_screen"),{method:"POST",O:{pairing_code:this.l},timeout:5E3,R:x(this.Fe,this),onError:x(this.Ee,this),ka:x(this.Ge,this)})};
g.Fe=function(a,b){this.b=null;var c=b.screen||{};c.dialId=this.i;c.name=this.j;this.w("pairingComplete",new kl(c))};
g.Ee=function(a){this.b=null;a.status&&404==a.status?this.g>=El.length?this.w("pairingFailed",Error("DIAL polling timed out")):(a=El[this.g],this.f=I(x(this.Fc,this),a),this.g++):this.w("pairingFailed",Error("Server error "+a.status))};
g.Ge=function(){this.b=null;this.w("pairingFailed",Error("Server not responding"))};function Fl(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new Xc;this.experiments=new Xc;this.theme="u";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();Yc(this.capabilities,Ja(b.split(","),na(cb,rl)));a=a.experiments||"";this.experiments.clear();Yc(this.experiments,
a.split(","))}}
Fl.prototype.equals=function(a){return a?this.id==a.id:!1};var Gl;function Hl(){var a=Il(),b=Jl();if(Kl()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=Za(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Xa(c,-(d+1),0,b)}a=Ll(a);if(0==a.length)try{Rf.remove("remote_sid","/","youtube.com")}catch(l){}else try{Sf("remote_sid",a.join(","),-1)}catch(l){}}
function Il(){var a=of("yt-remote-connected-devices")||[];a.sort(Za);return a}
function Ll(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return La(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function Ml(a){N("yt-remote-connected-devices",a,86400)}
function Jl(){if(Nl)return Nl;var a=of("yt-remote-device-id");a||(a=vl(),N("yt-remote-device-id",a,31536E3));for(var b=Il(),c=1,d=a;Qa(b,d);)c++,d=a+"#"+c;return Nl=d}
function Ol(){return of("yt-remote-session-browser-channel")}
function Kl(){return of("yt-remote-session-screen-id")}
function Pl(a){5<a.length&&(a=a.slice(a.length-5));var b=La(Ql(),function(a){return a.loungeToken}),c=La(a,function(a){return a.loungeToken});
Na(c,function(a){return!Qa(b,a)})&&Rl();
N("yt-remote-local-screens",a,31536E3)}
function Ql(){return of("yt-remote-local-screens")||[]}
function Rl(){N("yt-remote-lounge-token-expiration",!0,86400)}
function Sl(a,b){N("yt-remote-session-browser-channel",a);N("yt-remote-session-screen-id",b);var c=Il(),d=Jl();Qa(c,d)||c.push(d);Ml(c);Hl()}
function Tl(a){a||(pf("yt-remote-session-screen-id"),pf("yt-remote-session-video-id"));Hl();a=Il();Sa(a,Jl());Ml(a)}
function Ul(){if(!Gl){var a;a=new $e;(a=a.isAvailable()?a:null)&&(Gl=new bf(a))}return Gl?!!Gl.get("yt-remote-use-staging-server"):!1}
var Nl="";function Vl(a){zl.call(this,"LocalScreenService");this.f=a;this.b=NaN;Wl(this);this.info("Initializing with "+ql(this.screens))}
z(Vl,zl);g=Vl.prototype;g.start=function(){Wl(this)&&this.w("screenChange");!of("yt-remote-lounge-token-expiration")&&Xl(this);J(this.b);this.b=I(x(this.start,this),1E4)};
g.lb=function(a,b){Wl(this);Al(this,a);Yl(this,!1);this.w("screenChange");b(a);a.token||Xl(this)};
g.remove=function(a,b){var c=Wl(this);Cl(this,a)&&(Yl(this,!1),c=!0);b(a);c&&this.w("screenChange")};
g.jb=function(a,b,c,d){var e=Wl(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Yl(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.w("screenChange")};
g.A=function(){J(this.b);Vl.C.A.call(this)};
function Xl(a){if(a.screens.length){var b=La(a.screens,function(a){return a.id}),c=tl(a.f,"/pairing/get_lounge_token_batch");
ul(a.f,c,{screen_ids:b.join(",")},x(a.xd,a),x(a.wd,a))}}
g.xd=function(a){Wl(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Yl(this,!b);b&&hl(this.l,"Missed "+b+" lounge tokens.")};
g.wd=function(a){hl(this.l,"Requesting lounge tokens failed: "+a)};
function Wl(a){var b=ol(Ql()),b=Ja(b,function(a){return!a.uuid});
return Bl(a,b)}
function Yl(a,b){Pl(La(a.screens,ml));b&&Rl()}
;function Zl(a,b){V.call(this);this.l=b;for(var c=of("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.l(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=Qa(c,k)}this.b=d;this.j=a;this.g=this.i=NaN;this.f=null;$l("Initialized with "+L(this.b))}
z(Zl,V);g=Zl.prototype;g.start=function(){var a=parseInt(of("yt-remote-fast-check-period")||"0",10);(this.i=y()-144E5<a?0:a)?am(this):(this.i=y()+3E5,N("yt-remote-fast-check-period",this.i),this.Ub())};
g.isEmpty=function(){return ib(this.b)};
g.update=function(){$l("Updating availability on schedule.");var a=this.l(),b=ab(this.b,function(b,d){return b&&!!yl(a,d)},this);
bm(this,b)};
function cm(a,b,c){var d=tl(a.j,"/pairing/get_screen_availability");ul(a.j,d,{lounge_token:b.token},x(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),x(function(){c(!1)},a))}
g.A=function(){J(this.g);this.g=NaN;this.f&&(this.f.abort(),this.f=null);Zl.C.A.call(this)};
function bm(a,b){var c;a:if(bb(b)!=bb(a.b))c=!1;else{c=fb(b);for(var d=0,e=c.length;d<e;++d)if(!a.b[c[d]]){c=!1;break a}c=!0}c||($l("Updated online screens: "+L(a.b)),a.b=b,a.w("screenChange"));dm(a)}
function am(a){isNaN(a.g)||J(a.g);a.g=I(x(a.Ub,a),0<a.i&&a.i<y()?2E4:1E4)}
g.Ub=function(){J(this.g);this.g=NaN;this.f&&this.f.abort();var a=em(this);if(bb(a)){var b=tl(this.j,"/pairing/get_screen_availability");this.f=ul(this.j,b,{lounge_token:fb(a).join(",")},x(this.Yd,this,a),x(this.Xd,this))}else bm(this,{}),am(this)};
g.Yd=function(a,b){this.f=null;var c;a:{c=fb(em(this));var d=fb(a);if(ea(c)&&ea(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;bm(this,d);am(this)}else this.N("Changing Screen set during request."),this.Ub()};
g.Xd=function(a){this.N("Screen availability failed: "+a);this.f=null;am(this)};
function $l(a){hl("OnlineScreenService",a)}
g.N=function(a){hl("OnlineScreenService",a)};
function em(a){var b={};A(a.l(),function(a){a.token?b[a.token]=a.id:this.N("Requesting availability of screen w/o lounge token.")});
return b}
function dm(a){a=fb(ab(a.b,function(a){return a}));
a.sort(Za);a.length?N("yt-remote-online-screen-ids",a.join(","),60):pf("yt-remote-online-screen-ids")}
;function W(a){zl.call(this,"ScreenService");this.j=a;this.b=this.f=null;this.g=[];this.i={};fm(this)}
z(W,zl);g=W.prototype;g.start=function(){this.f.start();this.b.start();this.screens.length&&(this.w("screenChange"),this.b.isEmpty()||this.w("onlineScreenChange"))};
g.lb=function(a,b,c){this.f.lb(a,b,c)};
g.remove=function(a,b,c){this.f.remove(a,b,c);this.b.update()};
g.jb=function(a,b,c,d){this.f.contains(a)?this.f.jb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,hl(this.l,a),d(Error(a)))};
g.ea=function(a){return a?this.screens:Ua(this.screens,Ja(this.g,function(a){return!this.contains(a)},this))};
g.Qc=function(){return Ja(this.ea(!0),function(a){return!!this.b.b[a.id]},this)};
function gm(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.i[b]);var h=a.ea();if(h=(c?yl(h,c):null)||yl(h,b)){h.uuid=b;var k=hm(a,h);cm(a.b,k,function(a){e(a?k:null)})}else c?im(a,c,x(function(a){var f=hm(this,new kl({name:d,
screenId:c,loungeToken:a,dialId:b||""}));cm(this.b,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Rc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new Dl(this.j,a,b,c);f.subscribe("pairingComplete",x(function(a){E(f);d(hm(this,a))},this));
f.subscribe("pairingFailed",function(a){E(f);e(a)});
f.start();return x(f.stop,f)};
function jm(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.Ie=function(a,b,c,d){Wd(tl(this.j,"/pairing/get_screen"),{method:"POST",O:{pairing_code:a},timeout:5E3,R:x(function(a,d){var e=new kl(d.screen||{});if(!e.name||jm(this,e.name)){var f;a:{f=e.name;for(var l=2,n=b(f,l);jm(this,n);){l++;if(20<l)break a;n=b(f,l)}f=n}e.name=f}c(hm(this,e))},this),
onError:x(function(a){d(Error("pairing request failed: "+a.status))},this),
ka:x(function(){d(Error("pairing request timed out."))},this)})};
g.A=function(){E(this.f);E(this.b);W.C.A.call(this)};
function im(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={O:{screen_ids:b},method:"POST",context:a,R:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Wd(tl(a.j,"/pairing/get_lounge_token_batch"),e)}
function km(a){a.screens=a.f.ea();var b=a.i,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+ql(a.screens))}
g.yd=function(){km(this);this.w("screenChange");this.b.update()};
function fm(a){lm(a);a.f=new Vl(a.j);a.f.subscribe("screenChange",x(a.yd,a));km(a);a.g=ol(of("yt-remote-automatic-screen-cache")||[]);lm(a);a.info("Initializing automatic screens: "+ql(a.g));a.b=new Zl(a.j,x(a.ea,a,!0));a.b.subscribe("screenChange",x(function(){this.w("onlineScreenChange")},a))}
function hm(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=yl(a.g,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.g.push(b),N("yt-remote-automatic-screen-cache",La(a.g,ml)));lm(a);a.i[b.uuid]=b.id;N("yt-remote-device-id-map",a.i,31536E3);return b}
function lm(a){a.i=of("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function mm(a,b,c){V.call(this);this.U=c;this.H=a;this.b=b;this.g=null}
z(mm,V);g=mm.prototype;g.vb=function(a){this.g=a;this.w("sessionScreen",this.g)};
g.ba=function(a){this.D()||(a&&nm(this,""+a),this.g=null,this.w("sessionScreen",null))};
g.info=function(a){hl(this.U,a)};
function nm(a,b){hl(a.U,b)}
g.Ha=u;g.zb=u;g.Tc=function(){return null};
g.stop=u;g.Vb=function(a){var b=this.b;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,x(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),x(function(){nm(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.A=function(){this.Vb("");mm.C.A.call(this)};function om(a,b){mm.call(this,a,b,"CastSession");this.f=null;this.i=0;this.l=x(this.Je,this);this.j=x(this.ie,this);this.i=I(x(function(){pm(this,null)},this),12E4)}
z(om,mm);g=om.prototype;g.zb=function(a){if(this.f){if(this.f==a)return;nm(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.l);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.f=a;this.f.addUpdateListener(this.l);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);qm(this)};
g.Ha=function(a){this.info("launchWithParams no-op for Cast: "+L(a))};
g.stop=function(){this.f?this.f.stop(x(function(){this.ba()},this),x(function(){this.ba(Error("Failed to stop receiver app."))},this)):this.ba(Error("Stopping cast device witout session."))};
g.Vb=t;g.A=function(){this.info("disposeInternal");J(this.i);this.i=0;this.f&&(this.f.removeUpdateListener(this.l),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.f=null;om.C.A.call(this)};
function qm(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+L(void 0));var b={type:"getMdxSessionStatus"};a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",b,t,x(function(){nm(this,"Failed to send message: getMdxSessionStatus.")},a)):nm(a,"Sending yt message without session: "+L(b))}
g.ie=function(a,b){if(!this.D())if(b){var c=vd(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+L(c));switch(d){case "mdxSessionStatus":pm(this,c.screenId);break;default:nm(this,"Unknown youtube message: "+d)}}else nm(this,"Unable to parse message.")}else nm(this,"No data in message.")};
function pm(a,b){J(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.g||a.g.id!=b){var c=x(a.vb,a),d=x(a.ba,a);a.nc(b,c,d,5)}}else a.ba(Error("Waiting for session status timed out."))}
g.nc=function(a,b,c,d){gm(this.H,this.b.label,a,this.b.friendlyName,x(function(e){e?b(e):0<=d?(nm(this,"Screen "+a+" appears to be offline. "+d+" retries left."),I(x(this.nc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Tc=function(){return this.f};
g.Je=function(a){this.D()||a||(nm(this,"Cast session died."),this.ba())};function rm(a,b){mm.call(this,a,b,"DialSession");this.i=this.G=null;this.K="";this.j=null;this.B=t;this.l=NaN;this.P=x(this.Me,this);this.f=t}
z(rm,mm);g=rm.prototype;g.zb=function(a){this.i=a;this.i.addUpdateListener(this.P)};
g.Ha=function(a){this.j=a;this.B()};
g.stop=function(){this.f();this.f=t;J(this.l);this.i?this.i.stop(x(this.ba,this,null),x(this.ba,this,"Failed to stop DIAL device.")):this.ba()};
g.A=function(){this.f();this.f=t;J(this.l);this.i&&this.i.removeUpdateListener(this.P);this.i=null;rm.C.A.call(this)};
function sm(a){a.f=a.H.Rc(a.K,a.b.label,a.b.friendlyName,x(function(a){this.f=t;this.vb(a)},a),x(function(a){this.f=t;
this.ba(a)},a))}
g.Me=function(a){this.D()||a||(nm(this,"DIAL session died."),this.f(),this.f=t,this.ba())};
function tm(a){var b={};b.pairingCode=a.K;if(a.j){var c=a.j.currentTime||0;b.v=a.j.videoId;b.t=c}Ul()&&(b.env_useStageMdx=1);return Ld(b)}
g.Rb=function(a){this.K=vl();if(this.j){var b=new chrome.cast.DialLaunchResponse(!0,tm(this));a(b);sm(this)}else this.B=x(function(){J(this.l);this.B=t;this.l=NaN;var b=new chrome.cast.DialLaunchResponse(!0,tm(this));a(b);sm(this)},this),this.l=I(x(function(){this.B()},this),100)};
g.zd=function(a,b){gm(this.H,this.G.receiver.label,a,this.b.friendlyName,x(function(a){a&&a.token?(this.vb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Rb(b)},this),x(function(a){nm(this,"Failed to get DIAL screen: "+a);
this.Rb(b)},this))};function um(a,b){mm.call(this,a,b,"ManualSession");this.f=I(x(this.Ha,this,null),150)}
z(um,mm);um.prototype.stop=function(){this.ba()};
um.prototype.zb=t;um.prototype.Ha=function(){J(this.f);this.f=NaN;var a=yl(this.H.ea(),this.b.label);a?this.vb(a):this.ba(Error("No such screen"))};
um.prototype.A=function(){J(this.f);this.f=NaN;um.C.A.call(this)};function X(a){V.call(this);this.f=a;this.b=null;this.j=!1;this.g=[];this.i=x(this.Vd,this)}
z(X,V);g=X.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,x(this.zc,this),x(this.Wd,this),d,e);c.customDialLaunchCallback=x(this.Kd,this);chrome.cast.initialize(c,x(function(){this.D()||(chrome.cast.addReceiverActionListener(this.i),dl(),
this.f.subscribe("onlineScreenChange",x(this.Sc,this)),this.g=vm(this),chrome.cast.setCustomReceivers(this.g,t,x(function(a){this.N("Failed to set initial custom receivers: "+L(a))},this)),this.w("yt-remote-cast2-availability-change",wm(this)),b(!0))},this),x(function(a){this.N("Failed to initialize API: "+L(a));
b(!1)},this))};
g.we=function(a,b){xm("Setting connected screen ID: "+a+" -> "+b);if(this.b){var c=this.b.g;if(!a||c&&c.id!=a)xm("Unsetting old screen status: "+this.b.b.friendlyName),E(this.b),this.b=null}if(a&&b){if(!this.b){c=yl(this.f.ea(),a);if(!c){xm("setConnectedScreenStatus: Unknown screen.");return}var d=ym(this,c);d||(xm("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.g.push(d),chrome.cast.setCustomReceivers(this.g,
t,x(function(a){this.N("Failed to set initial custom receivers: "+L(a))},this)));
xm("setConnectedScreenStatus: new active receiver: "+d.friendlyName);zm(this,new um(this.f,d),!0)}this.b.Vb(b)}else xm("setConnectedScreenStatus: no screen.")};
function ym(a,b){return b?Oa(a.g,function(a){return ll(b,a.label)},a):null}
g.xe=function(a){this.D()?this.N("Setting connection data on disposed cast v2"):this.b?this.b.Ha(a):this.N("Setting connection data without a session")};
g.Le=function(){this.D()?this.N("Stopping session on disposed cast v2"):this.b?(this.b.stop(),E(this.b),this.b=null):xm("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(x(this.zc,this),x(this.Zd,this))};
g.A=function(){this.f.unsubscribe("onlineScreenChange",x(this.Sc,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.i);var a=el,b=r("yt.mdx.remote.debug.handlers_");Sa(b||[],a);E(this.b);X.C.A.call(this)};
function xm(a){hl("Controller",a)}
g.N=function(a){hl("Controller",a)};
function el(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function wm(a){return a.j||!!a.g.length||!!a.b}
function zm(a,b,c){E(a.b);(a.b=b)?(c?a.w("yt-remote-cast2-receiver-resumed",b.b):a.w("yt-remote-cast2-receiver-selected",b.b),b.subscribe("sessionScreen",x(a.Ac,a,b)),b.g?a.w("yt-remote-cast2-session-change",b.g):c&&a.b.Ha(null)):a.w("yt-remote-cast2-session-change",null)}
g.Ac=function(a,b){this.b==a&&(b||zm(this,null),this.w("yt-remote-cast2-session-change",b))};
g.Vd=function(a,b){if(!this.D())if(a)switch(xm("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.b)if(this.b.b.label!=a.label)xm("onReceiverAction_: Stopping active receiver: "+this.b.b.friendlyName),this.b.stop();else{xm("onReceiverAction_: Casting to active receiver.");this.b.g&&this.w("yt-remote-cast2-session-change",this.b.g);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:zm(this,new um(this.f,a));break;case chrome.cast.ReceiverType.DIAL:zm(this,
new rm(this.f,a));break;case chrome.cast.ReceiverType.CAST:zm(this,new om(this.f,a));break;default:this.N("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.b&&this.b.b.label==a.label?this.b.stop():this.N("Stopping receiver w/o session: "+a.friendlyName)}else this.N("onReceiverAction_ called without receiver.")};
g.Kd=function(a){if(this.D())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.N("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.b?this.b.b:null;if(!c||c.label!=b.label)return this.N("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.b.g)return xm("Reselecting dial screen."),
this.w("yt-remote-cast2-session-change",this.b.g),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.N('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);zm(this,new rm(this.f,b))}b=this.b;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise(x(b.zd,b,(b.G.extraData||{}).screenId||null)):new Promise(x(b.Rb,b))};
g.zc=function(a){if(!this.D()){xm("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.b)if(b.receiverType==chrome.cast.ReceiverType.CAST)xm("Got resumed cast session before resumed mdx connection."),zm(this,new om(this.f,b),!0);else{this.N("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.b.b,d=yl(this.f.ea(),c.label);d&&ll(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(xm("onSessionEstablished_: manual to cast session change "+b.friendlyName),E(this.b),this.b=new om(this.f,b),this.b.subscribe("sessionScreen",x(this.Ac,this,this.b)),this.b.Ha(null));this.b.zb(a)}}};
g.Ke=function(){return this.b?this.b.Tc():null};
g.Zd=function(a){this.D()||(this.N("Failed to estabilish a session: "+L(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&zm(this,null))};
g.Wd=function(a){xm("Receiver availability updated: "+a);if(!this.D()){var b=wm(this);this.j=a==chrome.cast.ReceiverAvailability.AVAILABLE;wm(this)!=b&&this.w("yt-remote-cast2-availability-change",wm(this))}};
function vm(a){var b=a.f.Qc(),c=a.b&&a.b.b;a=La(b,function(a){c&&ll(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=ym(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new chrome.cast.Receiver(b,a.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Sc=function(){if(!this.D()){var a=wm(this);this.g=vm(this);xm("Updating custom receivers: "+L(this.g));chrome.cast.setCustomReceivers(this.g,t,x(function(){this.N("Failed to set custom receivers.")},this));
var b=wm(this);b!=a&&this.w("yt-remote-cast2-availability-change",b)}};
X.prototype.setLaunchParams=X.prototype.xe;X.prototype.setConnectedScreenStatus=X.prototype.we;X.prototype.stopSession=X.prototype.Le;X.prototype.getCastSession=X.prototype.Ke;X.prototype.requestSession=X.prototype.requestSession;X.prototype.init=X.prototype.init;X.prototype.dispose=X.prototype.dispose;function Am(a,b,c){Bm()?Dm(a)&&(Em(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Fm(b):(window.__onGCastApiAvailable=function(a,c){a?Fm(b):(Gm("Failed to load cast API: "+c),Hm(!1),Em(!1),pf("yt-remote-cast-available"),pf("yt-remote-cast-receiver"),Im(),b(!1))},c?xc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Yk())):Cm("Cannot initialize because not running Chrome")}
function Im(){Cm("dispose");var a=Jm();a&&a.dispose();Km=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);Lm(!1);sc(Mm);Mm.length=0}
function Nm(){return!!of("yt-remote-cast-installed")}
function Om(){var a=of("yt-remote-cast-receiver");a?(a=a.friendlyName,a=-1!=a.indexOf("&")?"document"in m?Aa(a):Ca(a):a):a=null;return a}
function Pm(){Cm("clearCurrentReciever");pf("yt-remote-cast-receiver")}
function Qm(a,b){Rm()?Jm().setConnectedScreenStatus(a,b):Gm("setConnectedScreenStatus called before ready.")}
var Km=null;function Bm(){var a;a=0<=qb.search(/\ (CrMo|Chrome|CriOS)\//);return wf||a}
function Dm(a){var b=!1;if(!Km){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new X(a),c.subscribe("yt-remote-cast2-availability-change",function(a){N("yt-remote-cast-available",a);tc("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){Cm("onReceiverSelected: "+a.friendlyName);
N("yt-remote-cast-receiver",a);tc("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){Cm("onReceiverResumed: "+a.friendlyName);
N("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){Cm("onSessionChange: "+pl(a));
a||pf("yt-remote-cast-receiver");tc("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
Km=c}Cm("cloudview.createSingleton_: "+b);return b}
function Jm(){Km||(Km=r("yt.mdx.remote.cloudview.instance_"));return Km}
function Fm(a){Hm(!0);Em(!1);Km.init(!0,function(b){b?(Lm(!0),tc("yt-remote-cast2-api-ready")):(Gm("Failed to initialize cast API."),Hm(!1),pf("yt-remote-cast-available"),pf("yt-remote-cast-receiver"),Im());a(b)})}
function Cm(a){hl("cloudview",a)}
function Gm(a){hl("cloudview",a)}
function Hm(a){Cm("setCastInstalled_ "+a);N("yt-remote-cast-installed",a)}
function Rm(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function Lm(a){Cm("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function Em(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var Mm=[];function Sm(a,b){this.action=a;this.params=b||null}
;function Tm(){this.b=y()}
new Tm;Tm.prototype.set=function(a){this.b=a};
Tm.prototype.reset=function(){this.set(y())};
Tm.prototype.get=function(){return this.b};function Um(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=this.f=!1;this.Jc=!0}
Um.prototype.stopPropagation=function(){this.f=!0};
Um.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Jc=!1};var Vm=!K||qd(9),Wm=K&&!pd("9");!hd||pd("528");gd&&pd("1.9b")||K&&pd("8")||ed&&pd("9.5")||hd&&pd("528");gd&&!pd("8")||K&&pd("9");function Xm(a,b){Um.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.charCode=this.keyCode=this.button=this.clientY=this.clientX=0;this.shiftKey=this.altKey=this.ctrlKey=!1;this.g=this.state=null;a&&this.init(a,b)}
z(Xm,Um);
Xm.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;var e=a.relatedTarget;if(e){if(gd){var f;a:{try{bd(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=
void 0!==d.clientY?d.clientY:d.pageY);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Xm.prototype.stopPropagation=function(){Xm.C.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Xm.prototype.preventDefault=function(){Xm.C.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wm)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ym="closure_listenable_"+(1E6*Math.random()|0),Zm=0;function $m(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.nb=!!d;this.rb=e;this.key=++Zm;this.Sa=this.mb=!1}
function an(a){a.Sa=!0;a.listener=null;a.b=null;a.src=null;a.rb=null}
;function bn(a){this.src=a;this.b={};this.f=0}
function cn(a,b,c,d,e){var f=b.toString();b=a.b[f];b||(b=a.b[f]=[],a.f++);var h=dn(b,c,d,e);-1<h?(a=b[h],a.mb=!1):(a=new $m(c,a.src,f,!!d,e),a.mb=!1,b.push(a));return a}
bn.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=dn(e,b,c,d);return-1<b?(an(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.f--),!0):!1};
function en(a,b){var c=b.type;c in a.b&&Sa(a.b[c],b)&&(an(b),0==a.b[c].length&&(delete a.b[c],a.f--))}
function fn(a,b,c,d,e){a=a.b[b.toString()];b=-1;a&&(b=dn(a,c,d,e));return-1<b?a[b]:null}
function dn(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sa&&f.listener==b&&f.nb==!!c&&f.rb==d)return e}return-1}
;var gn="closure_lm_"+(1E6*Math.random()|0),hn={},jn=0;
function kn(a,b,c,d,e){if(v(b)){for(var f=0;f<b.length;f++)kn(a,b[f],c,d,e);return null}c=ln(c);if(a&&a[Ym])a=a.sb(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=mn(a);h||(a[gn]=h=new bn(a));c=cn(h,b,c,d,e);if(!c.b){d=nn();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(on(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");jn++}a=c}return a}
function nn(){var a=pn,b=Vm?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function qn(a,b,c,d,e){if(v(b))for(var f=0;f<b.length;f++)qn(a,b[f],c,d,e);else c=ln(c),a&&a[Ym]?a.Bb(b,c,d,e):a&&(a=mn(a))&&(b=fn(a,b,c,!!d,e))&&rn(b)}
function rn(a){if(!fa(a)&&a&&!a.Sa){var b=a.src;if(b&&b[Ym])en(b.g,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.nb):b.detachEvent&&b.detachEvent(on(c),d);jn--;(c=mn(b))?(en(c,a),0==c.f&&(c.src=null,b[gn]=null)):an(a)}}}
function on(a){return a in hn?hn[a]:hn[a]="on"+a}
function sn(a,b,c,d){var e=!0;if(a=mn(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.nb==c&&!f.Sa&&(f=tn(f,d),e=e&&!1!==f)}return e}
function tn(a,b){var c=a.listener,d=a.rb||a.src;a.mb&&rn(a);return c.call(d,b)}
function pn(a,b){if(a.Sa)return!0;if(!Vm){var c=b||r("window.event"),d=new Xm(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.b;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.f&&0<=h;h--){d.b=c[h];var k=sn(c[h],f,!0,d),e=e&&k}for(h=0;!d.f&&h<c.length;h++)d.b=c[h],k=sn(c[h],f,!1,d),e=e&&k}return e}return tn(a,new Xm(b,this))}
function mn(a){a=a[gn];return a instanceof bn?a:null}
var un="__closure_events_fn_"+(1E9*Math.random()>>>0);function ln(a){if(ga(a))return a;a[un]||(a[un]=function(b){return a.handleEvent(b)});
return a[un]}
;function vn(){D.call(this);this.g=new bn(this);this.va=this;this.aa=null}
z(vn,D);vn.prototype[Ym]=!0;g=vn.prototype;g.addEventListener=function(a,b,c,d){kn(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){qn(this,a,b,c,d)};
function wn(a,b){var c,d=a.aa;if(d){c=[];for(var e=1;d;d=d.aa)c.push(d),++e}var d=a.va,e=b,f=e.type||e;if(w(e))e=new Um(e,d);else if(e instanceof Um)e.target=e.target||d;else{var h=e,e=new Um(f,d);nb(e,h)}var h=!0,k;if(c)for(var l=c.length-1;!e.f&&0<=l;l--)k=e.b=c[l],h=xn(k,f,!0,e)&&h;e.f||(k=e.b=d,h=xn(k,f,!0,e)&&h,e.f||(h=xn(k,f,!1,e)&&h));if(c)for(l=0;!e.f&&l<c.length;l++)k=e.b=c[l],h=xn(k,f,!1,e)&&h}
g.A=function(){vn.C.A.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.b){for(var d=a.b[c],e=0;e<d.length;e++)++b,an(d[e]);delete a.b[c];a.f--}}this.aa=null};
g.sb=function(a,b,c,d){return cn(this.g,String(a),b,c,d)};
g.Bb=function(a,b,c,d){return this.g.remove(String(a),b,c,d)};
function xn(a,b,c,d){b=a.g.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Sa&&h.nb==c){var k=h.listener,l=h.rb||h.src;h.mb&&en(a.g,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Jc}
;function yn(a,b){this.f=new xd(a);this.b=b?vd:ud}
yn.prototype.stringify=function(a){return wd(this.f,a)};
yn.prototype.parse=function(a){return this.b(a)};function zn(a,b){vn.call(this);this.b=a||1;this.f=b||m;this.i=x(this.ze,this);this.j=y()}
z(zn,vn);g=zn.prototype;g.enabled=!1;g.fa=null;function An(a,b){a.b=b;a.fa&&a.enabled?(a.stop(),a.start()):a.fa&&a.stop()}
g.ze=function(){if(this.enabled){var a=y()-this.j;0<a&&a<.8*this.b?this.fa=this.f.setTimeout(this.i,this.b-a):(this.fa&&(this.f.clearTimeout(this.fa),this.fa=null),wn(this,"tick"),this.enabled&&(this.fa=this.f.setTimeout(this.i,this.b),this.j=y()))}};
g.start=function(){this.enabled=!0;this.fa||(this.fa=this.f.setTimeout(this.i,this.b),this.j=y())};
g.stop=function(){this.enabled=!1;this.fa&&(this.f.clearTimeout(this.fa),this.fa=null)};
g.A=function(){zn.C.A.call(this);this.stop();delete this.f};
function Bn(a,b,c){if(ga(a))c&&(a=x(a,c));else if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)}
;function Cn(a,b,c){D.call(this);this.i=null!=c?x(a,c):a;this.g=b;this.f=x(this.ae,this);this.b=[]}
z(Cn,D);g=Cn.prototype;g.Ta=!1;g.gb=0;g.Ea=null;g.qd=function(a){this.b=arguments;this.Ea||this.gb?this.Ta=!0:Dn(this)};
g.stop=function(){this.Ea&&(m.clearTimeout(this.Ea),this.Ea=null,this.Ta=!1,this.b=[])};
g.pause=function(){this.gb++};
g.resume=function(){this.gb--;this.gb||!this.Ta||this.Ea||(this.Ta=!1,Dn(this))};
g.A=function(){Cn.C.A.call(this);this.stop()};
g.ae=function(){this.Ea=null;this.Ta&&!this.gb&&(this.Ta=!1,Dn(this))};
function Dn(a){a.Ea=Bn(a.f,a.g);a.i.apply(null,a.b)}
;function En(a){D.call(this);this.f=a;this.b={}}
z(En,D);var Fn=[];En.prototype.sb=function(a,b,c,d){v(b)||(b&&(Fn[0]=b.toString()),b=Fn);for(var e=0;e<b.length;e++){var f=kn(a,b[e],c||this.handleEvent,d||!1,this.f||this);if(!f)break;this.b[f.key]=f}return this};
En.prototype.Bb=function(a,b,c,d,e){if(v(b))for(var f=0;f<b.length;f++)this.Bb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.f||this,c=ln(c),d=!!d,b=a&&a[Ym]?fn(a.g,String(b),c,d,e):a?(a=mn(a))?fn(a,b,c,d,e):null:null,b&&(rn(b),delete this.b[b.key]);return this};
function Gn(a){$a(a.b,function(a,c){this.b.hasOwnProperty(c)&&rn(a)},a);
a.b={}}
En.prototype.A=function(){En.C.A.call(this);Gn(this)};
En.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Hn(){}
Hn.prototype.f=null;Hn.prototype.b=u;function In(a){return a.f||(a.f=a.i())}
Hn.prototype.i=u;var Jn;function Kn(){}
z(Kn,Hn);Kn.prototype.b=function(){var a=Ln(this);return a?new ActiveXObject(a):new XMLHttpRequest};
Kn.prototype.i=function(){var a={};Ln(this)&&(a[0]=!0,a[1]=!0);return a};
function Ln(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
Jn=new Kn;function Mn(a,b,c,d,e){this.b=a;this.g=c;this.B=d;this.l=e||1;this.j=45E3;this.i=new En(this);this.f=new zn;An(this.f,250)}
g=Mn.prototype;g.Fa=null;g.la=!1;g.Va=null;g.Xb=null;g.hb=null;g.Ua=null;g.wa=null;g.za=null;g.Ja=null;g.S=null;g.kb=0;g.ma=null;g.Db=null;g.Ga=null;g.eb=-1;g.Kc=!0;g.Ba=!1;g.Pb=0;g.xb=null;var Nn={},On={};g=Mn.prototype;g.setTimeout=function(a){this.j=a};
function Pn(a,b,c){a.Ua=1;a.wa=rh(b.clone());a.Ja=c;a.o=!0;Qn(a,null)}
function Rn(a,b,c,d,e){a.Ua=1;a.wa=rh(b.clone());a.Ja=null;a.o=c;e&&(a.Kc=!1);Qn(a,d)}
function Qn(a,b){a.hb=y();Sn(a);a.za=a.wa.clone();ph(a.za,"t",a.l);a.kb=0;a.S=a.b.Ib(a.b.ib()?b:null);0<a.Pb&&(a.xb=new Cn(x(a.Pc,a,a.S),a.Pb));a.i.sb(a.S,"readystatechange",a.le);var c=a.Fa?kb(a.Fa):{};a.Ja?(a.Db="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.S.send(a.za,a.Db,a.Ja,c)):(a.Db="GET",a.Kc&&!hd&&(c.Connection="close"),a.S.send(a.za,a.Db,null,c));a.b.ja(1)}
g.le=function(a){a=a.target;var b=this.xb;b&&3==Tn(a)?b.qd():this.Pc(a)};
g.Pc=function(a){try{if(a==this.S)a:{var b=Tn(this.S),c=this.S.j,d=this.S.getStatus();if(K&&!qd(10)||hd&&!pd("420+")){if(4>b)break a}else if(3>b||3==b&&!ed&&!Un(this.S))break a;this.Ba||4!=b||7==c||(8==c||0>=d?this.b.ja(3):this.b.ja(2));Vn(this);var e=this.S.getStatus();this.eb=e;var f=Un(this.S);(this.la=200==e)?(4==b&&Wn(this),this.o?(Xn(this,b,f),ed&&this.la&&3==b&&(this.i.sb(this.f,"tick",this.ke),this.f.start())):Yn(this,f),this.la&&!this.Ba&&(4==b?this.b.ub(this):(this.la=!1,Sn(this)))):(this.Ga=
400==e&&0<f.indexOf("Unknown SID")?3:0,Y(),Wn(this),Zn(this))}}catch(h){}finally{}};
function Xn(a,b,c){for(var d=!0;!a.Ba&&a.kb<c.length;){var e=$n(a,c);if(e==On){4==b&&(a.Ga=4,Y(),d=!1);break}else if(e==Nn){a.Ga=4;Y();d=!1;break}else Yn(a,e)}4==b&&0==c.length&&(a.Ga=1,Y(),d=!1);a.la=a.la&&d;d||(Wn(a),Zn(a))}
g.ke=function(){var a=Tn(this.S),b=Un(this.S);this.kb<b.length&&(Vn(this),Xn(this,a,b),this.la&&4!=a&&Sn(this))};
function $n(a,b){var c=a.kb,d=b.indexOf("\n",c);if(-1==d)return On;c=Number(b.substring(c,d));if(isNaN(c))return Nn;d+=1;if(d+c>b.length)return On;var e=b.substr(d,c);a.kb=d+c;return e}
function ao(a,b){a.hb=y();Sn(a);var c=b?window.location.hostname:"";a.za=a.wa.clone();O(a.za,"DOMAIN",c);O(a.za,"t",a.l);try{a.ma=new ActiveXObject("htmlfile")}catch(n){Wn(a);a.Ga=7;Y();Zn(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Ea)h=Ea[h];else if(h in Da)h=Ea[h]=Da[h];else{var k,l=h.charCodeAt(0);if(31<l&&127>l)k=h;else{if(256>l){if(k="\\x",16>l||256<l)k+="0"}else k="\\u",4096>l&&(k+="0");
k+=l.toString(16).toUpperCase()}h=Ea[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=Fb(d+"</body></html>");a.ma.open();a.ma.write(Eb(c));a.ma.close();a.ma.parentWindow.m=x(a.ee,a);a.ma.parentWindow.d=x(a.Dc,a,!0);a.ma.parentWindow.rpcClose=x(a.Dc,a,!1);c=a.ma.createElement("DIV");a.ma.parentWindow.document.body.appendChild(c);d=yb(a.za.toString());d=wb(d);za.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(ta,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(ua,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(va,
"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(wa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(xa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ya,"&#0;")));d=Fb('<iframe src="'+d+'"></iframe>');c.innerHTML=Eb(d);a.b.ja(1)}
g.ee=function(a){bo(x(this.de,this,a),0)};
g.de=function(a){this.Ba||(Vn(this),Yn(this,a),Sn(this))};
g.Dc=function(a){bo(x(this.ce,this,a),0)};
g.ce=function(a){this.Ba||(Wn(this),this.la=a,this.b.ub(this),this.b.ja(4))};
g.cancel=function(){this.Ba=!0;Wn(this)};
function Sn(a){a.Xb=y()+a.j;co(a,a.j)}
function co(a,b){if(null!=a.Va)throw Error("WatchDog timer not null");a.Va=bo(x(a.ge,a),b)}
function Vn(a){a.Va&&(m.clearTimeout(a.Va),a.Va=null)}
g.ge=function(){this.Va=null;var a=y();0<=a-this.Xb?(2!=this.Ua&&this.b.ja(3),Wn(this),this.Ga=2,Y(),Zn(this)):co(this,this.Xb-a)};
function Zn(a){a.b.pc()||a.Ba||a.b.ub(a)}
function Wn(a){Vn(a);E(a.xb);a.xb=null;a.f.stop();Gn(a.i);if(a.S){var b=a.S;a.S=null;eo(b);b.dispose()}a.ma&&(a.ma=null)}
function Yn(a,b){try{a.b.yc(a,b),a.b.ja(4)}catch(c){}}
;function fo(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;go(a,b,function(e){e?c(!0):m.setTimeout(function(){fo(a,b,c,d,f)},f)})}}
function go(a,b,c){var d=new Image;d.onload=function(){try{ho(d),c(!0)}catch(e){}};
d.onerror=function(){try{ho(d),c(!1)}catch(e){}};
d.onabort=function(){try{ho(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{ho(d),c(!1)}catch(e){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function ho(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function io(a){this.b=a;this.f=new yn(null,!0)}
g=io.prototype;g.Nb=null;g.ca=null;g.yb=!1;g.Nc=null;g.ob=null;g.Sb=null;g.Ob=null;g.ga=null;g.ua=-1;g.cb=null;g.Za=null;g.connect=function(a){this.Ob=a;a=jo(this.b,null,this.Ob);Y();this.Nc=y();var b=this.b.B;null!=b?(this.cb=b[0],(this.Za=b[1])?(this.ga=1,ko(this)):(this.ga=2,lo(this))):(ph(a,"MODE","init"),this.ca=new Mn(this,0,void 0,void 0,void 0),this.ca.Fa=this.Nb,Rn(this.ca,a,!1,null,!0),this.ga=0)};
function ko(a){var b=jo(a.b,a.Za,"/mail/images/cleardot.gif");rh(b);fo(b.toString(),5E3,x(a.ld,a),3,2E3);a.ja(1)}
g.ld=function(a){if(a)this.ga=2,lo(this);else{Y();var b=this.b;b.ia=b.xa.ua;mo(b,9)}a&&this.ja(2)};
function lo(a){var b=a.b.T;if(null!=b)Y(),b?(Y(),no(a.b,a,!1)):(Y(),no(a.b,a,!0));else if(a.ca=new Mn(a,0,void 0,void 0,void 0),a.ca.Fa=a.Nb,b=a.b,b=jo(b,b.ib()?a.cb:null,a.Ob),Y(),!K||qd(10))ph(b,"TYPE","xmlhttp"),Rn(a.ca,b,!1,a.cb,!1);else{ph(b,"TYPE","html");var c=a.ca;a=!!a.cb;c.Ua=3;c.wa=rh(b.clone());ao(c,a)}}
g.Ib=function(a){return this.b.Ib(a)};
g.pc=function(){return!1};
g.yc=function(a,b){this.ua=a.eb;if(0==this.ga)if(b){try{var c=this.f.parse(b)}catch(d){c=this.b;c.ia=this.ua;mo(c,2);return}this.cb=c[0];this.Za=c[1]}else c=this.b,c.ia=this.ua,mo(c,2);else if(2==this.ga)if(this.yb)Y(),this.Sb=y();else if("11111"==b){if(Y(),this.yb=!0,this.ob=y(),c=this.ob-this.Nc,!K||qd(10)||500>c)this.ua=200,this.ca.cancel(),Y(),no(this.b,this,!0)}else Y(),this.ob=this.Sb=y(),this.yb=!1};
g.ub=function(){this.ua=this.ca.eb;if(this.ca.la)0==this.ga?this.Za?(this.ga=1,ko(this)):(this.ga=2,lo(this)):2==this.ga&&((!K||qd(10)?!this.yb:200>this.Sb-this.ob)?(Y(),no(this.b,this,!1)):(Y(),no(this.b,this,!0)));else{0==this.ga?Y():2==this.ga&&Y();var a=this.b;a.ia=this.ua;mo(a,2)}};
g.ib=function(){return this.b.ib()};
g.isActive=function(){return this.b.isActive()};
g.ja=function(a){this.b.ja(a)};function oo(a){vn.call(this);this.headers=new Oc;this.K=a||null;this.f=!1;this.H=this.b=null;this.$="";this.j=0;this.o="";this.i=this.U=this.l=this.P=!1;this.G=0;this.B=null;this.ra="";this.da=this.oa=!1}
z(oo,vn);var po=/^https?$/i,qo=["POST","PUT"];g=oo.prototype;
g.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.$+"; newUri="+a);b=b?b.toUpperCase():"GET";this.$=a;this.o="";this.j=0;this.P=!1;this.f=!0;this.b=this.K?this.K.b():Jn.b();this.H=this.K?In(this.K):In(Jn);this.b.onreadystatechange=x(this.xc,this);try{this.getStatus(),this.U=!0,this.b.open(b,String(a),!0),this.U=!1}catch(f){this.getStatus();ro(this,f);return}a=c||"";var e=this.headers.clone();d&&Vc(d,function(a,b){e.set(b,a)});
d=Oa(e.qa(),so);c=m.FormData&&a instanceof m.FormData;!Qa(qo,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);
this.ra&&(this.b.responseType=this.ra);"withCredentials"in this.b&&this.b.withCredentials!==this.oa&&(this.b.withCredentials=this.oa);try{to(this),0<this.G&&(this.da=uo(this.b),this.getStatus(),this.da?(this.b.timeout=this.G,this.b.ontimeout=x(this.oc,this)):this.B=Bn(this.oc,this.G,this)),this.getStatus(),this.l=!0,this.b.send(a),this.l=!1}catch(f){this.getStatus(),ro(this,f)}};
function uo(a){return K&&pd(9)&&fa(a.timeout)&&p(a.ontimeout)}
function so(a){return"content-type"==a.toLowerCase()}
g.oc=function(){"undefined"!=typeof aa&&this.b&&(this.o="Timed out after "+this.G+"ms, aborting",this.j=8,this.getStatus(),wn(this,"timeout"),eo(this,8))};
function ro(a,b){a.f=!1;a.b&&(a.i=!0,a.b.abort(),a.i=!1);a.o=b;a.j=5;vo(a);wo(a)}
function vo(a){a.P||(a.P=!0,wn(a,"complete"),wn(a,"error"))}
function eo(a,b){a.b&&a.f&&(a.getStatus(),a.f=!1,a.i=!0,a.b.abort(),a.i=!1,a.j=b||7,wn(a,"complete"),wn(a,"abort"),wo(a))}
g.A=function(){this.b&&(this.f&&(this.f=!1,this.i=!0,this.b.abort(),this.i=!1),wo(this,!0));oo.C.A.call(this)};
g.xc=function(){this.D()||(this.U||this.l||this.i?xo(this):this.Td())};
g.Td=function(){xo(this)};
function xo(a){if(a.f&&"undefined"!=typeof aa)if(a.H[1]&&4==Tn(a)&&2==a.getStatus())a.getStatus();else if(a.l&&4==Tn(a))Bn(a.xc,0,a);else if(wn(a,"readystatechange"),4==Tn(a)){a.getStatus();a.f=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Fd(1,String(a.$));if(!f&&m.self&&m.self.location)var h=m.self.location.protocol,f=h.substr(0,h.length-1);e=!po.test(f?f.toLowerCase():"")}d=
e}if(d)wn(a,"complete"),wn(a,"success");else{a.j=6;var k;try{k=2<Tn(a)?a.b.statusText:""}catch(l){k=""}a.o=k+" ["+a.getStatus()+"]";vo(a)}}finally{wo(a)}}}
function wo(a,b){if(a.b){to(a);var c=a.b,d=a.H[0]?t:null;a.b=null;a.H=null;b||wn(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function to(a){a.b&&a.da&&(a.b.ontimeout=null);fa(a.B)&&(m.clearTimeout(a.B),a.B=null)}
g.isActive=function(){return!!this.b};
function Tn(a){return a.b?a.b.readyState:0}
g.getStatus=function(){try{return 2<Tn(this)?this.b.status:-1}catch(a){return-1}};
function Un(a){try{return a.b?a.b.responseText:""}catch(b){return""}}
;function yo(a,b,c){this.l=a||null;this.b=1;this.f=[];this.i=[];this.j=new yn(null,!0);this.B=b||null;this.T=null!=c?c:null}
function zo(a,b){this.f=a;this.b=b;this.context=null}
g=yo.prototype;g.ab=null;g.Z=null;g.M=null;g.Mb=null;g.pb=null;g.fc=null;g.qb=null;g.fb=0;g.Ed=0;g.V=null;g.ya=null;g.ta=null;g.Da=null;g.xa=null;g.Cb=null;g.Qa=-1;g.qc=-1;g.ia=-1;g.bb=0;g.Pa=0;g.Ca=8;var Ao=new vn;function Bo(a){Um.call(this,"statevent",a)}
z(Bo,Um);function Co(a,b){Um.call(this,"timingevent",a);this.size=b}
z(Co,Um);function Do(a){Um.call(this,"serverreachability",a)}
z(Do,Um);g=yo.prototype;g.connect=function(a,b,c,d,e){Y();this.Mb=b;this.ab=c||{};d&&p(e)&&(this.ab.OSID=d,this.ab.OAID=e);this.xa=new io(this);this.xa.Nb=null;this.xa.f=this.j;this.xa.connect(a)};
function Eo(a){Fo(a);if(3==a.b){var b=a.fb++,c=a.pb.clone();O(c,"SID",a.g);O(c,"RID",b);O(c,"TYPE","terminate");Go(a,c);b=new Mn(a,0,a.g,b,void 0);b.Ua=2;b.wa=rh(c.clone());(new Image).src=b.wa;b.hb=y();Sn(b)}Ho(a)}
function Fo(a){if(a.xa){var b=a.xa;b.ca&&(b.ca.cancel(),b.ca=null);b.ua=-1;a.xa=null}a.M&&(a.M.cancel(),a.M=null);a.ta&&(m.clearTimeout(a.ta),a.ta=null);Io(a);a.Z&&(a.Z.cancel(),a.Z=null);a.ya&&(m.clearTimeout(a.ya),a.ya=null)}
function Jo(a,b){if(0==a.b)throw Error("Invalid operation: sending map when state is closed");a.f.push(new zo(a.Ed++,b));2!=a.b&&3!=a.b||Ko(a)}
g.pc=function(){return 0==this.b};
function Ko(a){a.Z||a.ya||(a.ya=bo(x(a.Cc,a),0),a.bb=0)}
g.Cc=function(a){this.ya=null;Lo(this,a)};
function Lo(a,b){if(1==a.b){if(!b){a.fb=Math.floor(1E5*Math.random());var c=a.fb++,d=new Mn(a,0,"",c,void 0);d.Fa=null;var e=Mo(a),f=a.pb.clone();O(f,"RID",c);a.l&&O(f,"CVER",a.l);Go(a,f);Pn(d,f,e);a.Z=d;a.b=2}}else 3==a.b&&(b?No(a,b):0==a.f.length||a.Z||No(a))}
function No(a,b){var c,d;b?6<a.Ca?(a.f=a.i.concat(a.f),a.i.length=0,c=a.fb-1,d=Mo(a)):(c=b.B,d=b.Ja):(c=a.fb++,d=Mo(a));var e=a.pb.clone();O(e,"SID",a.g);O(e,"RID",c);O(e,"AID",a.Qa);Go(a,e);c=new Mn(a,0,a.g,c,a.bb+1);c.Fa=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Z=c;Pn(c,e,d)}
function Go(a,b){if(a.V){var c=a.V.mc(a);c&&$a(c,function(a,c){O(b,c,a)})}}
function Mo(a){var b=Math.min(a.f.length,1E3),c=["count="+b],d;6<a.Ca&&0<b?(d=a.f[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.f[e].f,h=a.f[e].b,f=6>=a.Ca?e:f-d;try{Vc(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.f.splice(0,b));
return c.join("&")}
function Oo(a){a.M||a.ta||(a.o=1,a.ta=bo(x(a.Bc,a),0),a.Pa=0)}
function Po(a){if(a.M||a.ta||3<=a.Pa)return!1;a.o++;a.ta=bo(x(a.Bc,a),Qo(a,a.Pa));a.Pa++;return!0}
g.Bc=function(){this.ta=null;this.M=new Mn(this,0,this.g,"rpc",this.o);this.M.Fa=null;this.M.Pb=0;var a=this.fc.clone();O(a,"RID","rpc");O(a,"SID",this.g);O(a,"CI",this.Cb?"0":"1");O(a,"AID",this.Qa);Go(this,a);if(!K||qd(10))O(a,"TYPE","xmlhttp"),Rn(this.M,a,!0,this.qb,!1);else{O(a,"TYPE","html");var b=this.M,c=!!this.qb;b.Ua=3;b.wa=rh(a.clone());ao(b,c)}};
function no(a,b,c){a.Cb=c;a.ia=b.ua;a.pd(1,0);a.pb=jo(a,null,a.Mb);Ko(a)}
g.yc=function(a,b){if(0!=this.b&&(this.M==a||this.Z==a))if(this.ia=a.eb,this.Z==a&&3==this.b)if(7<this.Ca){var c;try{c=this.j.parse(b)}catch(f){c=null}if(v(c)&&3==c.length)if(0==c[0])a:{if(!this.ta){if(this.M)if(this.M.hb+3E3<this.Z.hb)Io(this),this.M.cancel(),this.M=null;else break a;Po(this);Y()}}else this.qc=c[1],0<this.qc-this.Qa&&37500>c[2]&&this.Cb&&0==this.Pa&&!this.Da&&(this.Da=bo(x(this.Fd,this),6E3));else mo(this,11)}else b!=Nf.Re.b&&mo(this,11);else if(this.M==a&&Io(this),!qa(b)){c=this.j.parse(b);
v(c);for(var d=0;d<c.length;d++){var e=c[d];this.Qa=e[0];e=e[1];2==this.b?"c"==e[0]?(this.g=e[1],this.qb=e[2],e=e[3],null!=e?this.Ca=e:this.Ca=6,this.b=3,this.V&&this.V.kc(this),this.fc=jo(this,this.ib()?this.qb:null,this.Mb),Oo(this)):"stop"==e[0]&&mo(this,7):3==this.b&&("stop"==e[0]?mo(this,7):"noop"!=e[0]&&this.V&&this.V.jc(this,e),this.Pa=0)}}};
g.Fd=function(){null!=this.Da&&(this.Da=null,this.M.cancel(),this.M=null,Po(this),Y())};
function Io(a){null!=a.Da&&(m.clearTimeout(a.Da),a.Da=null)}
g.ub=function(a){var b;if(this.M==a)Io(this),this.M=null,b=2;else if(this.Z==a)this.Z=null,b=1;else return;this.ia=a.eb;if(0!=this.b)if(a.la)1==b?(y(),wn(Ao,new Co(Ao,a.Ja?a.Ja.length:0)),Ko(this),this.i.length=0):Oo(this);else{var c=a.Ga,d;if(!(d=3==c||7==c||0==c&&0<this.ia)){if(d=1==b)this.Z||this.ya||1==this.b||2<=this.bb?d=!1:(this.ya=bo(x(this.Cc,this,a),Qo(this,this.bb)),this.bb++,d=!0);d=!(d||2==b&&Po(this))}if(d)switch(c){case 1:mo(this,5);break;case 4:mo(this,10);break;case 3:mo(this,6);
break;case 7:mo(this,12);break;default:mo(this,2)}}};
function Qo(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.pd=function(a){if(!Qa(arguments,this.b))throw Error("Unexpected channel state: "+this.b);};
function mo(a,b){if(2==b||9==b){var c=null;a.V&&(c=null);var d=x(a.ye,a);c||(c=new bh("//www.google.com/images/cleardot.gif"),rh(c));go(c.toString(),1E4,d)}else Y();Ro(a,b)}
g.ye=function(a){a?Y():(Y(),Ro(this,8))};
function Ro(a,b){a.b=0;a.V&&a.V.ic(a,b);Ho(a);Fo(a)}
function Ho(a){a.b=0;a.ia=-1;if(a.V)if(0==a.i.length&&0==a.f.length)a.V.Gb(a);else{var b=Va(a.i),c=Va(a.f);a.i.length=0;a.f.length=0;a.V.Gb(a,b,c)}}
function jo(a,b,c){var d=sh(c);if(""!=d.f)b&&dh(d,b+"."+d.f),eh(d,d.l);else var e=window.location,d=th(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.ab&&$a(a.ab,function(a,b){O(d,b,a)});
O(d,"VER",a.Ca);Go(a,d);return d}
g.Ib=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new oo;a.oa=!1;return a};
g.isActive=function(){return!!this.V&&this.V.isActive(this)};
function bo(a,b){if(!ga(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.ja=function(){wn(Ao,new Do(Ao))};
function Y(){wn(Ao,new Bo(Ao))}
g.ib=function(){return!(!K||qd(10))};
function So(){}
g=So.prototype;g.kc=function(){};
g.jc=function(){};
g.ic=function(){};
g.Gb=function(){};
g.mc=function(){return{}};
g.isActive=function(){return!0};function To(a,b){zn.call(this);this.o=0;if(ga(a))b&&(a=x(a,b));else if(a&&ga(a.handleEvent))a=x(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a;kn(this,"tick",x(this.l,this));Uo(this)}
z(To,zn);To.prototype.l=function(){if(500<this.b){var a=this.b;24E4>2*a&&(a*=2);An(this,a)}this.B()};
To.prototype.start=function(){To.C.start.call(this);this.o=y()+this.b};
To.prototype.stop=function(){this.o=0;To.C.stop.call(this)};
function Uo(a){a.stop();An(a,5E3+2E4*Math.random())}
;function Vo(a,b){this.H=a;this.o=b;this.g=new F;this.f=new To(this.De,this);this.b=null;this.G=!1;this.j=null;this.T="";this.B=this.i=0;this.l=[]}
z(Vo,So);g=Vo.prototype;g.subscribe=function(a,b,c){return this.g.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.g.unsubscribe(a,b,c)};
g.na=function(a){return this.g.na(a)};
g.w=function(a,b){return this.g.w.apply(this.g,arguments)};
g.dispose=function(){this.G||(this.G=!0,this.g.clear(),Wo(this),E(this.g))};
g.D=function(){return this.G};
function Xo(a){return{firstTestResults:[""],secondTestResults:!a.b.Cb,sessionId:a.b.g,arrayId:a.b.Qa}}
g.connect=function(a,b,c){if(!this.b||2!=this.b.b){this.T="";this.f.stop();this.j=a||null;this.i=b||0;a=this.H+"/test";b=this.H+"/bind";var d=new yo("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.b;e&&(e.V=null);d.V=this;this.b=d;e?this.b.connect(a,b,this.o,e.g,e.Qa):c?this.b.connect(a,b,this.o,c.sessionId,c.arrayId):this.b.connect(a,b,this.o)}};
function Wo(a,b){a.B=b||0;a.f.stop();a.b&&(3==a.b.b&&Lo(a.b),Eo(a.b));a.B=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&nb(c,b);this.f.enabled||2==(this.b?this.b.b:0)?this.l.push(c):Yo(this)&&Jo(this.b,c)};
g.kc=function(){Uo(this.f);this.j=null;this.i=0;if(this.l.length){var a=this.l;this.l=[];for(var b=0,c=a.length;b<c;++b)Jo(this.b,a[b])}this.w("handlerOpened")};
g.ic=function(a,b){var c=2==b&&401==this.b.ia;if(4!=b&&!c){if(6==b||410==this.b.ia)c=this.f,c.stop(),An(c,500);this.f.start()}this.w("handlerError",b)};
g.Gb=function(a,b,c){if(!this.f.enabled)this.w("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].b;d&&this.l.push(d)}};
g.mc=function(){var a={v:2};this.T&&(a.gsessionid=this.T);0!=this.i&&(a.ui=""+this.i);0!=this.B&&(a.ui=""+this.B);this.j&&nb(a,this.j);return a};
g.jc=function(a,b){"S"==b[0]?this.T=b[1]:"gracefulReconnect"==b[0]?(Uo(this.f),this.f.start(),Eo(this.b)):this.w("handlerMessage",new Sm(b[0],b[1]))};
function Yo(a){return!!a.b&&3==a.b.b}
function Zo(a,b){(a.o.loungeIdToken=b)||a.f.stop()}
g.De=function(){this.f.stop();var a=this.b,b=0;a.M&&b++;a.Z&&b++;0!=b?this.f.start():this.connect(this.j,this.i)};function $o(a){this.index=-1;this.videoId=this.listId="";this.volume=this.b=-1;this.j=!1;this.audioTrackId=null;this.i=this.f=0;this.g=null;this.reset(a)}
function ap(a){a.audioTrackId=null;a.g=null;a.b=-1;a.f=0;a.i=y()}
$o.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";ap(this);this.volume=-1;this.j=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.b=a.playerState,this.volume=a.volume,this.j=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.f=a.playerTime,this.i=a.playerTimeAt)};
function bp(a){switch(a.b){case 1:return(y()-a.i)/1E3+a.f;case -1E3:return 0}return a.f}
function cp(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.b;b.volume=a.volume;b.muted=a.j;b.audioTrackId=a.audioTrackId;b.trackData=lb(a.g);b.playerTime=a.f;b.playerTimeAt=a.i;return b}
$o.prototype.clone=function(){return new $o(cp(this))};function Z(a,b,c){V.call(this);this.i=NaN;this.$=!1;this.K=this.H=this.P=this.U=NaN;this.aa=[];this.B=this.G=this.g=this.F=this.b=null;this.Xa=a;this.aa.push(M(window,"beforeunload",x(this.vd,this)));this.f=[];this.F=new $o;this.oa=b.id;this.b=dp(this,c);this.b.subscribe("handlerOpened",this.Jd,this);this.b.subscribe("handlerClosed",this.Gd,this);this.b.subscribe("handlerError",this.Hd,this);this.b.subscribe("handlerMessage",this.Id,this);Zo(this.b,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.F.videoId;Kl()&&N("yt-remote-session-video-id",a)},this)}
z(Z,V);g=Z.prototype;g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);var h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.F.listId=c);this.F.videoId=d;this.F.index=e||0;this.F.state=3;c=this.F;c.f=f;c.i=y();this.B="UNSUPPORTED";ep("Connecting with setPlaylist and params: "+L(h));this.b.connect({method:"setPlaylist",params:L(h)},a,Ol())}else ep("Connecting without params"),this.b.connect({},a,Ol());fp(this)};
g.dispose=function(){this.D()||(this.w("beforeDispose"),gp(this,3));Z.C.dispose.call(this)};
g.A=function(){hp(this);ip(this);jp(this);J(this.H);this.H=NaN;J(this.K);this.K=NaN;this.g=null;Te(this.aa);this.aa.length=0;this.b.dispose();Z.C.A.call(this);this.B=this.G=this.f=this.F=this.b=null};
function ep(a){hl("conn",a)}
g.vd=function(){this.j(2)};
function dp(a,b){return new Vo(tl(a.Xa,"/bc",void 0,!1),b)}
function gp(a,b){a.w("proxyStateChange",b)}
function fp(a){a.i=I(x(function(){ep("Connecting timeout");this.j(1)},a),2E4)}
function hp(a){J(a.i);a.i=NaN}
function jp(a){J(a.U);a.U=NaN}
function kp(a){ip(a);a.P=I(x(function(){lp(this,"getNowPlaying")},a),2E4)}
function ip(a){J(a.P);a.P=NaN}
g.Jd=function(){ep("Channel opened");this.$&&(this.$=!1,jp(this),this.U=I(x(function(){ep("Timing out waiting for a screen.");this.j(1)},this),15E3));
Sl(Xo(this.b),this.oa)};
g.Gd=function(){ep("Channel closed");isNaN(this.i)?Tl(!0):Tl();this.dispose()};
g.Hd=function(a){Tl();isNaN(this.l())?(ep("Channel error: "+a+" without reconnection"),this.dispose()):(this.$=!0,ep("Channel error: "+a+" with reconnection in "+this.l()+" ms"),gp(this,2))};
function mp(a,b){b&&(hp(a),jp(a));b==(Yo(a.b)&&isNaN(a.i))?b&&(gp(a,1),lp(a,"getSubtitlesTrack")):b?(a.da()&&a.F.reset(),gp(a,1),lp(a,"getNowPlaying"),np(a)):a.j(1)}
function op(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.F.videoId&&(ib(b.params)?a.F.g=null:a.F.g=b.params,a.w("remotePlayerChange"))}
function pp(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.F.listId=b.params.listId||a.F.listId;var e=a.F,f=e.videoId;e.videoId=c;e.index=d;c!=f&&ap(e);a.w("remoteQueueChange")}
function qp(a,b){b.params=b.params||{};pp(a,b);rp(a,b)}
function rp(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.F;d.f=isNaN(c)?0:c;d.i=y();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.F.b&&(c=-1E3);a.F.b=c;1==a.F.b?kp(a):ip(a);a.w("remotePlayerChange")}
function sp(a,b){var c="true"==b.params.muted;a.F.volume=parseInt(b.params.volume,10);a.F.j=c;a.w("remotePlayerChange")}
g.Id=function(a){a.params?ep("Received: action="+a.action+", params="+L(a.params)):ep("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=ud(a.params.devices);this.f=La(a,function(a){return new Fl(a)});
a=!!Oa(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
mp(this,a);break;case "loungeScreenConnected":mp(this,!0);break;case "loungeScreenDisconnected":Ta(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
mp(this,!1);break;case "remoteConnected":var b=new Fl(ud(a.params.device));Oa(this.f,function(a){return a.equals(b)})||Ra(this.f,b);
break;case "remoteDisconnected":b=new Fl(ud(a.params.device));Ta(this.f,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":pp(this,a);break;case "nowPlaying":qp(this,a);break;case "onStateChange":rp(this,a);break;case "onVolumeChanged":sp(this,a);break;case "onSubtitlesTrackChanged":op(this,a);break;case "nowAutoplaying":this.G=a.params.videoId;break;case "autoplayDismissed":break;case "autoplayUpNext":this.G=a.params.videoId;break;case "onAutoplayModeChanged":this.B=a.params.autoplayMode;break;default:ep("Unrecognized action: "+a.action)}};
g.oe=function(){if(this.g){var a=this.g;this.g=null;this.F.videoId!=a&&lp(this,"getNowPlaying")}};
Z.prototype.subscribe=Z.prototype.subscribe;Z.prototype.unsubscribeByKey=Z.prototype.na;Z.prototype.Ma=function(){var a=3;this.D()||(a=0,isNaN(this.l())?Yo(this.b)&&isNaN(this.i)&&(a=1):a=2);return a};
Z.prototype.getProxyState=Z.prototype.Ma;Z.prototype.j=function(a){ep("Disconnecting with "+a);hp(this);this.w("beforeDisconnect",a);1==a&&Tl();Wo(this.b,a);this.dispose()};
Z.prototype.disconnect=Z.prototype.j;Z.prototype.La=function(){var a=this.F;if(this.g){var b=a=this.F.clone(),c=this.g,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&ap(b)}return cp(a)};
Z.prototype.getPlayerContextData=Z.prototype.La;Z.prototype.Wa=function(a){var b=new $o(a);b.videoId&&b.videoId!=this.F.videoId&&(this.g=b.videoId,J(this.H),this.H=I(x(this.oe,this),5E3));var c=[];this.F.listId==b.listId&&this.F.videoId==b.videoId&&this.F.index==b.index||c.push("remoteQueueChange");this.F.b==b.b&&this.F.volume==b.volume&&this.F.j==b.j&&bp(this.F)==bp(b)&&L(this.F.g)==L(b.g)||c.push("remotePlayerChange");this.F.reset(a);A(c,function(a){this.w(a)},this)};
Z.prototype.setPlayerContextData=Z.prototype.Wa;Z.prototype.da=function(){var a=this.b.o.id,b=Oa(this.f,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Z.prototype.getOtherConnectedRemoteId=Z.prototype.da;Z.prototype.l=function(){var a=this.b;return a.f.enabled?a.f.o-y():NaN};
Z.prototype.getReconnectTimeout=Z.prototype.l;Z.prototype.ra=function(){return this.B||"UNSUPPORTED"};
Z.prototype.getAutoplayMode=Z.prototype.ra;Z.prototype.va=function(){return this.G||""};
Z.prototype.getAutoplayVideoId=Z.prototype.va;Z.prototype.Ya=function(){if(!isNaN(this.l())){var a=this.b.f;a.enabled&&(a.stop(),a.start(),a.l())}};
Z.prototype.reconnect=Z.prototype.Ya;function np(a){J(a.K);a.K=I(x(a.j,a,1),864E5)}
function lp(a,b,c){c?ep("Sending: action="+b+", params="+L(c)):ep("Sending: action="+b);a.b.sendMessage(b,c)}
Z.prototype.Na=function(a,b){lp(this,a,b);np(this)};
Z.prototype.sendMessage=Z.prototype.Na;function tp(a){zl.call(this,"ScreenServiceProxy");this.Y=a;this.b=[];this.b.push(this.Y.$_s("screenChange",x(this.He,this)));this.b.push(this.Y.$_s("onlineScreenChange",x(this.Pd,this)))}
z(tp,zl);g=tp.prototype;g.ea=function(a){return this.Y.$_gs(a)};
g.contains=function(a){return!!this.Y.$_c(a)};
g.get=function(a){return this.Y.$_g(a)};
g.start=function(){this.Y.$_st()};
g.lb=function(a,b,c){this.Y.$_a(a,b,c)};
g.remove=function(a,b,c){this.Y.$_r(a,b,c)};
g.jb=function(a,b,c,d){this.Y.$_un(a,b,c,d)};
g.A=function(){for(var a=0,b=this.b.length;a<b;++a)this.Y.$_ubk(this.b[a]);this.b.length=0;this.Y=null;tp.C.A.call(this)};
g.He=function(){this.w("screenChange")};
g.Pd=function(){this.w("onlineScreenChange")};
W.prototype.$_st=W.prototype.start;W.prototype.$_gspc=W.prototype.Ie;W.prototype.$_gsppc=W.prototype.Rc;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.lb;W.prototype.$_un=W.prototype.jb;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.ea;W.prototype.$_gos=W.prototype.Qc;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.na;function up(){var a={device:"Desktop",app:"youtube-desktop"};mf&&lf();Hl();vp||(vp=new sl,Ul()&&(vp.b="/api/loungedev"));wp||(wp=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",wp,void 0));xp();var b=yp();if(!b){var c=new W(vp);q("yt.mdx.remote.screenService_",c,void 0);b=yp();Am(c,function(a){a?zp()&&Qm(zp(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){tc("yt-remote-receiver-availability-change")})},!(!a||!a.loadCastApiSetupScript))}if(a&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",
!0,void 0);
Ap("Initializing: "+L(a));Bp.push(qc("yt-remote-cast2-availability-change",function(){tc("yt-remote-receiver-availability-change")}));
Bp.push(qc("yt-remote-cast2-receiver-selected",function(){Cp();tc("yt-remote-auto-connect","cast-selector-receiver")}));
Bp.push(qc("yt-remote-cast2-session-change",Dp));Bp.push(qc("yt-remote-connection-change",function(a){a?Qm(zp(),"YouTube TV"):Ep()||(Qm(null,null),Pm())}));
var d=Fp();a.isAuto&&(d.id+="#dial");d.name=a.device;d.app=a.app;Ap(" -- with channel params: "+L(d));Gp(d);b.start();zp()||Hp()}}
function Ip(){sc(Bp);Bp.length=0;E(Jp);Jp=null;wp&&(A(wp,function(a){a(null)}),wp.length=0,wp=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
vp=null}
function Kp(){var a=Lp();Nm()&&of("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a}
function Lp(){var a;a=yp().Y.$_gos();var b=Mp();b&&Np()&&(xl(a,b)||a.push(b));return wl(a)}
function Op(){var a=Pp();!a&&Nm()&&Om()&&(a={key:"cast-selector-receiver",name:Om()});return a}
function Pp(){var a=Lp(),b=Mp();b||(b=Ep());return Oa(a,function(a){return b&&ll(b,a.key)?!0:!1})}
function Mp(){var a=zp();if(!a)return null;var b=yp().ea();return yl(b,a)}
function Dp(a){Ap("remote.onCastSessionChange_: "+pl(a));if(a){var b=Mp();b&&b.id==a.id?Qm(b.id,"YouTube TV"):(b&&Qp(),Rp(a,1))}else Qp()}
function Qp(){Rm()?Jm().stopSession():Gm("stopSession called before API ready.");var a=Np();a?a.disconnect(1):(uc("yt-remote-before-disconnect",1),uc("yt-remote-connection-change",!1));Sp(null)}
function Ap(a){hl("remote",a)}
function yp(){if(!Jp){var a=r("yt.mdx.remote.screenService_");Jp=a?new tp(a):null}return Jp}
function zp(){return r("yt.mdx.remote.currentScreenId_")}
function Tp(a){q("yt.mdx.remote.currentScreenId_",a,void 0)}
function Cp(){q("yt.mdx.remote.connectData_",null,void 0)}
function Np(){return r("yt.mdx.remote.connection_")}
function Sp(a){var b=Np();Cp();a?Np():Tp("");q("yt.mdx.remote.connection_",a,void 0);wp&&(A(wp,function(b){b(a)}),wp.length=0);
b&&!a?uc("yt-remote-connection-change",!1):!b&&a&&tc("yt-remote-connection-change",!0)}
function Ep(){var a=Kl();if(!a)return null;var b=yp().ea();return yl(b,a)}
function Rp(a,b){zp();Tp(a.id);var c=new Z(vp,a,Fp());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){uc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){Np()&&(Np(),Sp(null))});
Sp(c)}
function Hp(){var a=Ep();a?(Ap("Resume connection to: "+pl(a)),Rp(a,0)):(Tl(),Pm(),Ap("Skipping connecting because no session screen found."))}
var vp=null,wp=null,Jp=null;function xp(){var a=Fp();if(ib(a)){var a=Jl(),b=of("yt-remote-session-name")||"",c=of("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};q("yt.mdx.remote.channelParams_",a,void 0)}}
function Fp(){return r("yt.mdx.remote.channelParams_")||{}}
function Gp(a){a?(N("yt-remote-session-app",a.app),N("yt-remote-session-name",a.name)):(pf("yt-remote-session-app"),pf("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var Bp=[];var Up=null,Vp=[];function Wp(){Xp();if(Op()){var a=Up;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function Xp(){var a=Up;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(Kp(),Op())}
;var Yp=null,Zp=[];function $p(a){return{externalChannelId:a.externalChannelId,Dd:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function aq(a){bq($p(a))}
function bq(a){gj()?(R(Ui,new Oi(a.externalChannelId,a.Dd?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Ld({event:"subscribe",source:a.source}))&&Eh(a)):cq(a)}
function cq(a){fj(function(b){b.subscription_ajax&&bq(a)},null)}
function dq(a){a=$p(a);R(Zi,new Qi(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Ld({event:"unsubscribe",source:a.source}))&&Eh(a)}
function eq(a){Yp&&Yp.channelSubscribed(a.b,a.subscriptionId)}
function fq(a){Yp&&Yp.channelUnsubscribed(a.b)}
;function gq(a){D.call(this);this.f=a;this.f.subscribe("command",this.Hc,this);this.g={};this.i=!1}
z(gq,D);g=gq.prototype;g.start=function(){this.i||this.D()||(this.i=!0,hq(this.f,"RECEIVING"))};
g.Uc=u;g.addEventListener=u;g.removeEventListener=u;g.Hc=function(a,b){if(this.i&&!this.D()){var c=b||{};switch(a){case "addEventListener":if(w(c.event)&&(c=c.event,!(c in this.g))){var d=x(this.qe,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":w(c.event)&&iq(this,c.event);break;default:this.Uc(a,b)}}};
g.qe=function(a,b){this.i&&!this.D()&&hq(this.f,a,this.Jb(a,b))};
g.Jb=function(a,b){if(null!=b)return{value:b}};
function iq(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
g.A=function(){this.f.unsubscribe("command",this.Hc,this);this.f=null;for(var a in this.g)iq(this,a);gq.C.A.call(this)};function jq(a,b){gq.call(this,b);this.b=a;this.start()}
z(jq,gq);g=jq.prototype;g.addEventListener=function(a,b){this.b.addEventListener(a,b)};
g.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
g.Uc=function(a,b){if(this.b.isReady()&&this.b[a]){var c=kq(a,b||{}),c=this.b[a].apply(this.b,c);(c=lq(a,c))&&this.i&&!this.D()&&hq(this.f,a,c)}};
function kq(a,b){switch(a){case "loadVideoById":return b=Ik(b),Kk(b),[b];case "cueVideoById":return b=Ik(b),Kk(b),[b];case "loadVideoByPlayerVars":return Kk(b),[b];case "cueVideoByPlayerVars":return Kk(b),[b];case "loadPlaylist":return b=Jk(b),Kk(b),[b];case "cuePlaylist":return b=Jk(b),Kk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function lq(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
g.Jb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return jq.C.Jb.call(this,a,b)};
g.A=function(){jq.C.A.call(this);delete this.b};function mq(a,b,c,d){D.call(this);this.b=b||null;this.B="*";this.i=c||null;this.f=null;this.channel=d||null;this.H=!!a;this.G=x(this.K,this);window.addEventListener("message",this.G)}
z(mq,D);mq.prototype.K=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.b&&a.source!=this.b)&&w(a.data)){var b;try{b=ud(a.data)}catch(c){return}null!=b&&(this.H&&(this.f&&this.f!=b.id||this.channel&&this.channel!=b.channel)?window.console&&window.console.warn("Session ID or channel missmatch"):b&&this.l(a,b))}};
mq.prototype.l=u;mq.prototype.sendMessage=function(a){if(this.b){this.f&&(a.id=this.f);this.channel&&(a.channel=this.channel);try{var b=L(a);this.b.postMessage(b,this.B)}catch(c){ic(c,"WARNING")}}};
mq.prototype.A=function(){window.removeEventListener("message",this.G);mq.C.A.call(this)};function nq(a,b,c){mq.call(this,a,b,c||H("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.o=this.g=this.j=null}
z(nq,mq);nq.prototype.l=function(a,b){switch(b.event){case "listening":"null"!=a.origin?this.i=this.B=a.origin:ic(Error("MessageEvent origin is null"),"WARNING");this.b=a.source;this.f=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.j&&(this.o&&!Qa(this.o,b.func)||this.j(b.func,b.args))}};function oq(){var a=this.f=new nq(!!H("WIDGET_ID_ENFORCE")),b=x(this.me,this);a.j=b;a.o=null;this.f.channel="widget";if(a=H("WIDGET_ID"))this.f.P=a;this.i=[];this.o=!1;this.j={}}
g=oq.prototype;g.me=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,pq(this,c)),this.j[c]=!0)}else this.Vc(a,b)};
g.Vc=function(){};
function pq(a,b){return x(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.rd=function(){this.o=!0;this.sendMessage("initialDelivery",this.Kb());this.sendMessage("onReady");A(this.i,this.Wc,this);this.i=[]};
g.Kb=function(){return null};
function qq(a,b){a.sendMessage("infoDelivery",b)}
g.Wc=function(a){this.o?this.f.sendMessage(a):this.i.push(a)};
g.sendMessage=function(a,b){this.Wc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.f=null};function rq(a){oq.call(this);this.b=a;this.g=[];this.addEventListener("onReady",x(this.Ud,this));this.addEventListener("onVideoProgress",x(this.ue,this));this.addEventListener("onVolumeChange",x(this.ve,this));this.addEventListener("onApiChange",x(this.pe,this));this.addEventListener("onPlaybackQualityChange",x(this.re,this));this.addEventListener("onPlaybackRateChange",x(this.se,this));this.addEventListener("onStateChange",x(this.te,this))}
z(rq,oq);g=rq.prototype;g.Vc=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Gk(a)){var c;c=b;if(ha(c[0])&&!v(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Ik.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Hk.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Jk.apply(window,c)}c=d}Kk(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Gk(a)&&qq(this,this.Kb())}};
g.Ud=function(){var a=x(this.rd,this);this.f.g=a};
g.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
g.Kb=function(){if(!this.b)return null;var a=this.b.getApiInterface();Sa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.b[e]();b[f]=k}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
g.te=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate()};
this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());qq(this,a)};
g.re=function(a){qq(this,{playbackQuality:a})};
g.se=function(a){qq(this,{playbackRate:a})};
g.pe=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var l=f[h],n=this.b.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
g.ve=function(){qq(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
g.ue=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());qq(this,a)};
g.dispose=function(){rq.C.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function sq(a,b,c){V.call(this);this.b=a;this.f=b;this.g=c}
z(sq,V);function hq(a,b,c){if(!a.D()){var d=a.b;d.D()||a.f!=d.b||(a={id:a.g,command:b},c&&(a.data=c),d.b.postMessage(L(a),d.g))}}
sq.prototype.A=function(){this.f=this.b=null;sq.C.A.call(this)};function tq(a,b,c){D.call(this);this.b=a;this.g=c;this.i=M(window,"message",x(this.j,this));this.f=new sq(this,a,b);$b(this,na(E,this.f))}
z(tq,D);tq.prototype.j=function(a){var b;if(b=!this.D()&&a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,w(a))){try{a=ud(a)}catch(d){return}a.command&&(b=this.f,b.D()||b.w("command",a.command,a.data))}};
tq.prototype.A=function(){Te(this.i);this.b=null;tq.C.A.call(this)};var uq=!1;function vq(a){if(a=a.match(/[\d]+/g))a.length=3}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(uq=!0,a.description)){vq(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){uq=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],uq=!(!a||!a.enabledPlugin))){vq(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");uq=!0;vq(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");uq=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),uq=!0,vq(b.GetVariable("$version"))}catch(c){}})();function wq(a){return(a=a.exec(qb))?a[1]:""}
(function(){if(sf)return wq(/Firefox\/([0-9.]+)/);if(K||fd||ed)return od;if(wf)return wq(/Chrome\/([0-9.]+)/);if(xf&&!(ad()||B("iPad")||B("iPod")))return wq(/Version\/([0-9.]+)/);if(tf||uf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(qb);if(a)return a[1]+"."+a[2]}else if(vf)return(a=wq(/Android\s+([0-9.]+)/))?a:wq(/Version\/([0-9.]+)/);return""})();function xq(){var a=yq;return new Cg(function(b,c){a.R=function(a){Rd(a)?b(a):c(a)};
a.onError=c;a.ka=c;Wd("//googleads.g.doubleclick.net/pagead/id",a)})}
;function zq(a,b){this.f=a;this.b=b}
zq.prototype.then=function(a,b,c){try{if(p(this.f))return a?Hg(a.call(c,this.f)):Hg(this.f);if(p(this.b)){if(!b)return Ig(this.b);var d=b.call(c,this.b);return!p(d)&&this.b instanceof Kg?Ig(this.b):Hg(d)}throw Error("Invalid Result_ state");}catch(e){return Ig(e)}};
Bg(zq);var yq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Aq=null;function Bq(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Cq(""),Aq=new zq(""),"";a=JSON.parse(a.substr(4)).id;Cq(a);Aq=new zq(a);Dq(18E5,2);return a}
function Eq(a){var b=Error("Unable to load /pagead/id");Cq("");Aq=new zq(void 0,b);0<a&&Dq(12E4,a-1);throw b;}
function Dq(a,b){I(function(){var a=x(Eq,m,b),a=xq().then(Bq,a);Jg(a,null,t,void 0)},a)}
function Cq(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Fq(){}
;function Gq(){var a;if(a=Rf.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Hq[d]=c.toString())}}}
ba(Gq);var Hq=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Hq,void 0);function Iq(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function Jq(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function Kq(a){a=void 0!==Hq[a]?Hq[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Gq.prototype.get=function(a,b){Jq(a);Iq(a);var c=void 0!==Hq[a]?Hq[a].toString():null;return null!=c?c:b?b:""};
Gq.prototype.set=function(a,b){Jq(a);Iq(a);if(null==b)throw"ExpectedNotNull";Hq[a]=b.toString()};
Gq.prototype.remove=function(a){Jq(a);Iq(a);delete Hq[a]};
Gq.prototype.clear=function(){Hq={}};function Lq(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&Eh(c)}}
;function Mq(a){P.call(this,1,arguments);this.Fb=a}
z(Mq,P);function Nq(a,b){P.call(this,2,arguments);this.f=a;this.b=b}
z(Nq,P);function Oq(a,b,c,d){P.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
z(Oq,P);function Pq(a,b){P.call(this,1,arguments);this.f=a;this.b=b||null}
z(Pq,P);function Qq(a){P.call(this,1,arguments)}
z(Qq,P);var Rq=new Q("ypc-core-load",Mq),Sq=new Q("ypc-guide-sync-success",Nq),Tq=new Q("ypc-purchase-success",Oq),Uq=new Q("ypc-subscription-cancel",Qq),Vq=new Q("ypc-subscription-cancel-success",Pq),Wq=new Q("ypc-init-subscription",Qq);var Xq=!1,Yq=[],Zq=[];function $q(a){a.b?Xq?R(Yi,a):R(Rq,new Mq(function(){R(Wq,new Qq(a.b))})):ar(a.f,a.i,a.g,a.source)}
function br(a){a.b?Xq?R(cj,a):R(Rq,new Mq(function(){R(Uq,new Qq(a.b))})):cr(a.f,a.subscriptionId,a.i,a.g,a.source)}
function dr(a){er(Va(a.b))}
function fr(a){gr(Va(a.b))}
function hr(a){ir(a.g,a,null)}
function jr(a,b,c,d){ir(a,b,c,d)}
function kr(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&R(Xi,new Pi(b,c,a.b.channelInfo))}
function lr(a){var b=a.b;$a(a.f,function(a,d){R(Xi,new Pi(d,a,b[d]))})}
function mr(a){R(bj,new Mi(a.f.itemId));a.b&&a.b.length&&(nr(a.b,bj),nr(a.b,dj))}
function ar(a,b,c,d){var e=new Mi(a);R(Vi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=H("PLAYBACK_ID"))&&(c.plid=d);(d=H("EVENT_ID"))&&(c.ei=d);b&&or(b,c);Wd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Wb:f,O:c,R:function(b,c){var d=c.response;R(Xi,new Pi(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&tc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Lq(d.actions)},
Tb:function(){R(Wi,e)}})}
function cr(a,b,c,d,e){var f=new Mi(a);R($i,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=H("PLAYBACK_ID"))&&(d.plid=a);(a=H("EVENT_ID"))&&(d.ei=a);c&&or(c,d);Wd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Wb:h,O:d,R:function(a,b){var c=b.response;R(bj,f);c.actions&&Lq(c.actions)},
Tb:function(){R(aj,f)}})}
function ir(a,b,c,d){if(null!==b&&(null!==b.b||null!==b.receivePostUpdates||null!==b.f)){var e={};a&&(e.channel_id=a);null!==b.b&&(e.receive_all_updates=b.b);null!==b.receivePostUpdates&&(e.receive_post_updates=b.receivePostUpdates);null!==b.f&&(e.receive_no_updates=b.f);Wd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",O:e,onError:function(){c&&c()},
R:function(){d&&d()}})}}
function er(a){if(a.length){var b=Xa(a,0,40);R("subscription-batch-subscribe-loading");nr(b,Vi);var c={};c.a=b.join(",");var d=function(){R("subscription-batch-subscribe-loaded");nr(b,Wi)};
Wd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",O:c,R:function(c,f){d();var e=f.response,k=e.id;if(v(k)&&k.length==b.length){var l=e.channel_info_map;A(k,function(a,c){var d=b[c];R(Xi,new Pi(d,a,l[d]))});
a.length?er(a):R("subscription-batch-subscribe-finished")}},
onError:function(){d();R("subscription-batch-subscribe-failure")}})}}
function gr(a){if(a.length){var b=Xa(a,0,40);R("subscription-batch-unsubscribe-loading");nr(b,$i);var c={};c.c=b.join(",");var d=function(){R("subscription-batch-unsubscribe-loaded");nr(b,aj)};
Wd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",O:c,R:function(){d();nr(b,bj);a.length&&gr(a)},
onError:function(){d()}})}}
function nr(a,b){A(a,function(a){R(b,new Mi(a))})}
function or(a,b){var c=Od(a),d;for(d in c)b[d]=c[d]}
;var pr=null,qr=null,rr=null,sr=!1;function tr(a){var b=Mf();b&&Kf(Jf(),{click:{csn:b,visualElement:zf(new yf(a))}},void 0)}
function ur(a){var b=Mf();if(b){for(var c=[],d=0;d<a.length;d++)c.push(new yf(a[d]));If(b,c)}}
;q("yt.setConfig",ec,void 0);q("yt.setMsg",function(a){fc(dc,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||H("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=ce)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(w(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,l=!1;try{h=a.lineNumber||a.df||"Not available"}catch(ca){h="Not available",l=!0}try{k=a.fileName||a.filename||a.sourceURL||
m.$googDebugFname||f}catch(ca){k="Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(be[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Wb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},O:{url:H("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.O.stack=e);for(var n in c)b.O["client."+n]=c[n];if(n=H("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var G in n)b.O[G]=n[G];Wd("/error_204",b);be[a.message]=!0;ce++}}},void 0);
q("writeEmbed",function(){var a=H("PLAYER_CONFIG",void 0);if("1"!=a.privembed)try{var b;try{var c=r("yt.www.ads.biscotti.getId_"),d;if(c)d=c();else{if(!Aq){var e=x(Eq,m,2);Aq=xq().then(Bq,e)}d=Aq}b=d}catch(f){b=Ig(f)}Jg(b,null,Fq,void 0)}catch(f){ic(f)}"gvn-experiment"==a.args.ps&&(document.body.style.backgroundColor="transparent");d=document.referrer;b=H("POST_MESSAGE_ORIGIN");c=!1;Cd("legacy_cast2")&&w(d)&&w(b)&&-1<d.indexOf(b)&&Bh(b)&&Bh(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=
d);H("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Kk(a.args);pr=d=zi("player",a);d.addEventListener("onLogServerVeClicked",tr);d.addEventListener("onLogServerVesShown",ur);e=H("POST_MESSAGE_ID","player");H("ENABLE_JS_API")?rr=new rq(d):H("ENABLE_POST_API")&&w(e)&&w(b)&&(qr=new tq(window.parent,e,b),rr=new jq(d,qr.f));Cd("legacy_cast2")&&((sr=c&&!H("ENABLE_CAST_API"))?a.args.disableCast="1":(up(),Up=d,Up.addEventListener("onReady",Wp),Vp.push(qc("yt-remote-receiver-availability-change",
Xp))));H("BG_P")&&(H("BG_I")||H("BG_IU"))&&Gc();ge();Yp=d;Yp.addEventListener("SUBSCRIBE",aq);Yp.addEventListener("UNSUBSCRIBE",dq);Zp.push(Mh(Xi,eq),Mh(bj,fq))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&Eh(a);return!0},void 0);
var vr=gc(function(){Wh("ol");Xq=!0;Zq.push(Mh(Ui,$q),Mh(Zi,br));Xq||(Zq.push(Mh(Yi,$q),Mh(cj,br),Mh(Ri,dr),Mh(Si,fr),Mh(Ti,hr)),Yq.push(qc("subscription-prefs",jr)),Zq.push(Mh(Tq,kr),Mh(Vq,mr),Mh(Sq,lr)));Gq.getInstance();var a=1<window.devicePixelRatio;if(!!((Kq("f"+(Math.floor(119/31)+1))||0)&67108864)!=a){var b="f"+(Math.floor(119/31)+1),c=Kq(b)||0,c=a?c|67108864:c&-67108865;0==c?delete Hq[b]:(a=c.toString(16),Hq[b]=a.toString());var b=[],d;for(d in Hq)b.push(d+"="+escape(Hq[d]));Sf("PREF",b.join("&"),
63072E3)}}),wr=gc(function(){var a=pr;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();H("PL_ATT")&&(Fc=null);for(var a=0,b=ee.length;a<b;a++){var c=ee[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):J(c)}}ee.length=0;a=Bc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))wc(a),b.parentNode.removeChild(b);fe=!1;ec("DCLKSTAT",0);sc(Yq);Yq.length=0;Nh(Zq);Zq.length=0;Xq=!1;Yp&&(Yp.removeEventListener("SUBSCRIBE",bq),Yp.removeEventListener("UNSUBSCRIBE",dq));Yp=null;Nh(Zp);Zp.length=0;
Cd("legacy_cast2")&&!sr&&(sc(Vp),Vp.length=0,Up&&(Up.removeEventListener("onReady",Wp),Up=null),Ip());ac(rr,qr);if(a=pr)a.removeEventListener("onLogServerVeClicked",tr),a.removeEventListener("onLogServerVesShown",ur),a.destroy()});
window.addEventListener?(window.addEventListener("load",vr),window.addEventListener("unload",wr)):window.attachEvent&&(window.attachEvent("onload",vr),window.attachEvent("onunload",wr));var xr=Cj.getInstance(),yr=S(xr);yr in Hj||(xr.register(),xr.wb.push(qc("yt-uix-init-"+yr,xr.init,xr)),xr.wb.push(qc("yt-uix-dispose-"+yr,xr.dispose,xr)),Hj[yr]=xr);})();
