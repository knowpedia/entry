!function(e){function n(n){for(var t,o,i=n[0],a=n[1],s=0,l=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(c&&c(n);l.length;)l.shift()()}var t={},r={0:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+"dist/main@v0.3.3-bundle"+({}[e]||e)+".js"}(e);var c=new Error;a=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,t[1](c)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var c=a;o(o.s=6)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){"use strict";function r(e,n,t){var r=document.createElement("style"),o=document.head||document.getElementsByTagName("head")[0],i="";for(u=0;u<n.length;u++)i+="\n/* "+n[u][0]+" */\n",i+=n[u][1]+"\n\n";if(t){i=(i=i.replace(/( {0,}){/g,"{")).replace(/( {0,}),/g,",");for(var a="",s=!1,c=!1,l=!1,u=0;u<i.length;u++)":"!=i[u]||s||l||c?"{"!=i[u]||s?"}"!=i[u]||s?"/"==i[u]&&"*"==i[u+1]?s=!0:"*"==i[u]&&"/"==i[u+1]?s=!1:","!=i[u]||s||c||(l||(a+="["+e+"]"),l=!1):(c=!1,l=!1):(c=!0,l||(a+="["+e+"]")):(l=!0,a+="["+e+"]"),a+=i[u];i=a}r.innerHTML=i,r.setAttribute("type","text/css"),o.appendChild(r)}t.r(n),t.d(n,"default",(function(){return r}))},function(e,n,t){"use strict";(function(e){var t=function(){if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("The current environment is not known!")}();n.a=t}).call(this,t(8))},function(e,n,t){"use strict";n.a=function(e){var n,t,r=e.split("?"),o=(r[0]+"#").split("#")[1].replace(/^\//,"").replace(/\/$/,"").split("/"),i=r[1]||"";return""==i?n={}:(t=i.split("&"),n={},t.forEach((function(e){var t=e.split("=");n[t[0]]=t[1]}))),{router:""==o[0]?[]:o,params:n}}},function(e,n,t){"use strict";(function(e){function n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function t(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
* quick-paper.core v0.6.0
* (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/!function(){var n=Object.prototype.toString;function r(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":n.call(e)}var i=function(e,n){return null!==n&&"object"===o(n)&&e.indexOf(n.nodeType)>-1&&!function(e){if(null===e||"object"!==o(e)||"[object Object]"!=r(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var n=e;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}(n)},a=function(e){var n=o(e);return"string"===n||"object"===n&&null!=e&&!Array.isArray(e)&&"[object String]"===r(e)},s=function(e){if(!function(e){var n=o(e);return null!=e&&("object"===n||"function"===n)}(e))return!1;var n=r(e);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n},c=function(e){return Array.isArray(e)};function l(e){/^[_$]/.test(e)&&console.error("The beginning of _ or $ is not allowed："+e)}var u=1;function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r={},o=[];if(!a(e))return{type:"component",options:e,attrs:{},children:[]};for(var i in n)/^@/.test(i)?r[i.replace(/^@/,"q-on:")]=n[i]:/^:/.test(i)?r["q-bind"+i]=n[i]:r[i]=n[i];for(var s,c=0;c<t.length;c++)s=t[c],a(s)?/\{\{[^}]+\}\}/.test(s)?o.push({type:"bindText",content:('" '+s+' "').replace(/\{\{([^}]+)\}\}/g,'"+$1+"')}):o.push({type:"text",content:s}):o.push(s);return{type:"none",tagName:e,attrs:r,children:o}}function f(e){for(var n=(e+"").toLowerCase(),t=(e+"").toUpperCase(),r="",o=!1,i=0;i<e.length;i++)"-"!=e[i]?o?(r+=t[i],o=!1):r+=n[i]:o=!0;return r}var d={blankReg:new RegExp("[\\x20\\t\\r\\n\\f]"),blanksReg:/^[\x20\t\r\n\f]{0,}$/,identifier:/^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/},h=["+","-","*","/","%","&","|","!","?",":","[","]","(",")",">","<","="],g=["+","-","*","/","%","&","|","!","?",":",">","<","=","<=",">=","==","===","!=","!=="];function v(e,n,t){n=n.trim();var r=-1,o=null,i=function(){return o=r++<n.length-1?n[r]:null},s=function(e){return n.substring(r,e+r>n.length?n.length:e+r)};i();for(var c=[];!(r>=n.length);)if(h.indexOf(o)>-1)if(["&","|","="].indexOf(o)>-1)if(["==="].indexOf(s(3))>-1)c.push(s(3)),r+=2,i();else{if(!(["&&","||","=="].indexOf(s(2))>-1))throw new Error("Illegal expression : "+n+"\nstep='analyseExpress',index="+r);c.push(s(2)),r+=1,i()}else["!=="].indexOf(s(3))>-1?(c.push(s(3)),r+=2,i()):[">=","<=","!="].indexOf(s(2))>-1?(c.push(s(2)),r+=1,i()):(c.push(o),i());else if(['"',"'"].indexOf(o)>-1){var l="",u=o;for(i();o!=u;){if(r>=n.length)throw new Error("String unclosed error : "+n+"\nstep='analyseExpress',index="+r);l+=o,i()}c.push(l+"@string"),i()}else if(/\d/.test(o)){var p="no";for(l=o,i();r<n.length;){if(/\d/.test(o))l+=o,"error"==p&&(p="yes");else{if("."!=o||"no"!=p)break;l+=o,p="error"}i()}"error"==p&&(l+="0"),c.push(+l)}else if(["null","true"].indexOf(s(4))>-1)c.push({null:null,true:!0}[s(4)]),r+=3,i();else if(["false"].indexOf(s(5))>-1)c.push({false:!1}[s(5)]),r+=4,i();else if(["undefined"].indexOf(s(9))>-1)c.push({undefined:void 0}[s(9)]),r+=8,i();else if(d.blankReg.test(o))do{i()}while(d.blankReg.test(o)&&r<n.length);else{var f=!1;if("."==o&&(f=!0,i()),!d.identifier.test(o))throw new Error("Illegal express : "+n+"\nstep='analyseExpress',index="+r);for(var v=1;r+v<=n.length&&d.identifier.test(s(v));)v+=1;if(f)c.push("["),c.push(s(v-1)+"@string"),c.push("]");else{var b=s(v-1),y=b in t?t[b]:e[b];c.push(a(y)?y+"@string":y)}r+=v-2,i()}for(var _=0,m=0;m<c.length;m++)["+","-"].indexOf(c[m])>-1&&(0==m||g.indexOf(c[_-1])>-1)?(c[_++]=+(c[m]+c[m+1]),m+=1):c[_++]=c[m];return c.length=_,c}var b=function(e){return"string"==typeof e?e.replace(/@string$/,""):e};function y(e){for(var n,t=0,r=0;r<e.length;r++)"!"==e[r]?e[t]=!e[++r]:e[t]=e[r],t+=1;if(1==t)return b(e[0]);for(e.length=t,t=0,r=0;r<e.length;r++)"*"==e[r]?e[t-1]=b(e[t-1])*b(e[++r]):"/"==e[r]?e[t-1]=b(e[t-1])/b(e[++r]):"%"==e[r]?e[t-1]=b(e[t-1])%b(e[++r]):e[t++]=e[r];if(1==t)return b(e[0]);for(e.length=t,t=0,r=0;r<e.length;r++)"+"==e[r]?e[t-1]="string"==typeof(n=b(e[t-1])+b(e[++r]))?n+"@string":n:"-"==e[r]?e[t-1]=b(e[t-1])-b(e[++r]):e[t++]=e[r];if(1==t)return b(e[0]);for(e.length=t,t=0,r=0;r<e.length;r++)">"==e[r]?e[t-1]=b(e[t-1])>b(e[++r]):"<"==e[r]?e[t-1]=b(e[t-1])<b(e[++r]):"<="==e[r]?e[t-1]=b(e[t-1])<=b(e[++r]):">="==e[r]?e[t-1]=b(e[t-1])>=b(e[++r]):e[t++]=e[r];if(1==t)return b(e[0]);for(e.length=t,t=0,r=0;r<e.length;r++)"=="==e[r]?e[t-1]=b(e[t-1])==b(e[++r]):"==="==e[r]?e[t-1]=b(e[t-1])===b(e[++r]):"!="==e[r]?e[t-1]=b(e[t-1])!=b(e[++r]):"!=="==e[r]?e[t-1]=b(e[t-1])!==b(e[++r]):e[t++]=e[r];if(1==t)return b(e[0]);for(e.length=t,t=0,r=0;r<e.length;r++)"&&"==e[r]?(e[t-1]=b(e[t-1])&&b(e[1+r]),r+=1):"||"==e[r]?(e[t-1]=b(e[t-1])||b(e[1+r]),r+=1):e[t++]=e[r];if(1==t)return b(e[0]);for(e.length=t,t=0,r=0;r<e.length;r++)"?"==e[r]?(e[t-1]=b(e[t-1])?b(e[r+1]):b(e[r+3]),r+=3):e[t++]=e[r];if(1==t)return b(e[0]);throw e.length=t,new Error("Unrecognized expression : ["+e.toString()+"]")}var _=function(e){for(var n=[],t=[],r=0;r<e.length;r++)"["==e[r]?t=[]:"]"==e[r]?n.push(y(t)):t.push(e[r]);return n};function m(e,n,t){var r,o=function e(n,t,r){if(t.indexOf("(")>-1){for(var o=[],i=[],s=0,c=0;c<t.length;c++)if("("==t[c])s>0&&i.push("("),s+=1;else if(")"==t[c]){if(s>1&&i.push(")"),0==(s-=1)){var l=y(e(n,i));o.push(a(l)?l+"@string":l),i=[]}}else s>0?i.push(t[c]):o.push(t[c]);t=o}return function(e){for(var n=!0;n;){n=!1;for(var t=[],r=[],o=!1,i=0;i<e.length;i++)if("["==e[i]&&0!=i&&"]"!=e[i-1]){if(o){t.push("[");for(var s=0;s<r.length;s++)t.push(r[s])}else o=!0;r=[]}else if("]"==e[i]&&o){n=!0;var c=y(r),l=t[t.length-1][c];t[t.length-1]=a(l)?l+"@string":l,o=!1}else o?r.push(e[i]):t.push(e[i]);e=t}return e}(t)}(e,n);if("["!=o[0])r=[y(o)];else if("]"==o[o.length-1])r=_(o);else{var i=o.lastIndexOf("]"),s=_(o.slice(0,i+1)),c=o.slice(i+1);c.unshift(function(e,n,t){for(var r=(n[0]in t?t[n[0]]:e[n[0]]),o=1;o<n.length;o++)try{r=r[n[o]]}catch(r){throw console.error({target:e,scope:t,expressArray:n,index:o}),r}return r}(e,s,t)),r=[y(c)]}return r}
/*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */var x=function(e,n,t){arguments.length<3&&(t={});var r=v(e,n,t),o=m(e,r,t);if(o.length>1)throw new Error("Illegal expression : "+n+"\nstep='evalExpress',path="+o+",expressArray="+r);return o[0]};function w(e,n,t){window.attachEvent?e.attachEvent("on"+n,t):e.addEventListener(n,t,!1)}function k(e){if(!(this instanceof k))throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");var n;this._name=e.name||"noname",this.$$lifecycle(e.beforeCreate),this.$$init(e),this.$$lifecycle("created"),n=this._el,i([1,9,11],n)&&this.$$mount()}!function(e){e.prototype.$$init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in this._options=e,this._uid=u++,this._data=s(e.data)?e.data():e.data,this._el=e.el,this.__isMounted=!1,this.__isDestroyed=!1,e.methods)l(n),this[n]=e.methods[n];for(var t in this._data)this[t]=this._data[t];for(var r in this.__componentLib_scope={},e.component)this.__componentLib_scope[r]=e.component[r];for(var o in this.__directiveLib_scope={},e.directive)this.__directiveLib_scope[o]=e.directive[o]}}(k),function(e){e.prototype.$$lifecycle=function(e){s(e)?e():["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(e)>-1&&s(this._options[e])&&this._options[e].call(this)}}(k),function(e){e.prototype.$$mountComponent=function(){this.$$lifecycle("beforeMount"),this._vnode=this.$$render(p),this.__directiveTask=[],this.__componentTask=[],this.__bindTextTask=[],function e(n,r,o,i){var a,s=x(n,r);if(s){if("none"==s.type){var c=f(s.tagName);n.__componentLib[c]||n.__componentLib_scope[c]?(s.options=n.__componentLib[c]||n.__componentLib_scope[c],s.type="component"):s.type="tag"}if("component"==s.type){a=document.createElement("quick-paper-component"),o.appendChild(a),s.options.el=a,"render"in s.options||(s.options.render=function(e){return e("quick-paper-component",{},[])}),s.instance=new i(s.options),s.instance.__parent=n;var l={};for(var u in s.attrs)/^data-quickpaper-/.test(u)||(/^:/.test(u)?l[u.replace("q-bind"+u)]=s.attrs[u]:/^@/.test(u)?l[u.replace(u.replace(/^@/,"q-on:"))]=s.attrs[u]:l[u]=s.attrs[u]);var p={attrs:l,instance:s.instance};if("component"==p.instance._name){var d=p.attrs["q-bind:is"];p.instance.lister(i,n[d])}n.__componentTask.push(p)}else if("tag"==s.type){for(var h in a=document.createElement(s.tagName),"Quick-Paper-COMPONENT"==o.nodeName||"Quick-Paper-COMPONENT"==o._nodeName?(m=a,(_=o).parentNode.replaceChild(m,_),n._el=a):o.appendChild(a),s.attrs){var g=s.attrs[h],v=(h+":").split(":"),b=n.__directiveLib[f(v[0])]||n.__directiveLib_scope[f(v[0])];b?n.__directiveTask.push(t(t({el:a},b),{},{value:g,type:v[1]})):a.setAttribute(h,g)}for(var y=0;y<s.children.length;y++)e(n,r+".children["+y+"]",a,i)}else"text"==s.type?((a=document.createTextNode("")).textContent=s.content.replace(/↵/g,"\n"),o.appendChild(a)):"bindText"==s.type?((a=document.createTextNode("")).textContent=x(n,s.content).replace(/↵/g,"\n"),o.appendChild(a),n.__bindTextTask.push({el:a,content:s.content})):console.error("Type not expected："+s.type);var _,m}else console.error("vnode is undefined!")}(this,"_vnode",this._el,e);for(var n=0;n<this.__directiveTask.length;n++){var r=this.__directiveTask[n];if(s(r.inserted)){var o=void 0;try{o=x(this,r.value)}catch(e){}r.inserted(r.el,{target:this,exp:r.value,value:o,type:r.type})}}!function(e){var n=function(n){l(n),s(e[n])&&console.error('Data property "'+n+'" has already been defined as a Method.');var t=e._data[n];e[n]=t,Object.defineProperty(e,n,{get:function(){return t},set:function(n){t=n,e.$$updateComponent()}})};for(var t in e._data)n(t)}(this),this.__isMounted=!0,this.$$lifecycle("mounted")},e.prototype.$$updateComponent=function(){this.$$lifecycle("beforeUpdate");for(var n=0;n<this.__directiveTask.length;n++){var t=this.__directiveTask[n];if(s(t.update)){var r=void 0;try{r=x(this,t.value)}catch(e){}t.update(t.el,{target:this,exp:t.value,value:r,type:t.type})}}for(var o=0;o<this.__bindTextTask.length;o++){var i=this.__bindTextTask[o],a=x(this,i.content).replace(/↵/g,"\n");i.el.textContent!=a&&(i.el.textContent=a)}for(var c=0;c<this.__componentTask.length;c++){var l=this.__componentTask[c];if("component"==l.instance._name){var u=l.attrs["q-bind:is"];l.instance.lister(e,this[u])}}this.$$lifecycle("updated")},e.prototype.$$destroyComponent=function(){this.$$lifecycle("beforeDestroy");for(var e=0;e<this.__directiveTask.length;e++){var n=this.__directiveTask[e];s(n.delete)&&n.delete(n.el,{target:this,exp:n.value,value:x(this,n.value),type:n.type})}this.$$lifecycle("destroyed")}}(k);var $=function(e,n){a(n.type)&&n.type.length>0?e.getAttribute(n.type)!=n.value&&e.setAttribute(n.type,n.value):e.value==n.value&&e.textContent==n.value||(e.value=e.textContent=n.value)},j={inserted:$,update:$},O={inserted:function(e,n){for(var t=n.type.split("."),r={prevent:!1,stop:!1,once:!1},o=1;o<t.length;o++)r[t[o]]=!0;w(e,t[0],(function o(i){r.stop&&function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}(i),r.prevent&&function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1}(i);var a,s,c,l=/^([^(]+)(\([^)]{0,}\)){0,1}/.exec(n.exp),u=[],p=[];if(l[2]){var f=l[2].replace(/^\(/,"").replace(/\)$/,"").trim();f.length>0&&(p=f.split(","))}for(var d=0;d<p.length;d++){var h=p[d];h=x(n.target,h),u.push(h)}u.push(i),n.target[l[1]].apply(n.target,u),r.once&&(a=e,s=t[0],c=o,window.detachEvent?a.detachEvent("on"+s,c):a.removeEventListener(s,c,!1))}))}},E={inserted:function(e,n){e.value=n.value,w(e,"input",(function(){!function(e,n,t,r){arguments.length<3&&(r={});for(var o=v(e,n,r),i=m(e,o,r),a=e,s=0;s<i.length-1;s++)i[s]in a||(a[i[s]]=c(a)?[]:{}),a=a[i[s]];a[i[i.length-1]]=t}(n.target,"."+n.exp,e.value)}))},update:function(e,n){e.value=n.value}};!function(e){e.prototype.__directiveLib={},e.prototype.__componentLib={},function(e){e.directive=function(n,t){e.prototype.__directiveLib[n]=t},e.component=function(n,t){e.prototype.__componentLib[n]=t}}(e),function(e){e.use=function(n){n.install.call(n,e)}}(e)}(k),k.directive("qBind",j),k.directive("qOn",O),k.directive("qModel",E),k.component("component",{name:"component",data:function(){return{is:null}},methods:{lister:function(e,n){if(n!=this.is&&null!=n){var t=this._oldComponent;t&&t.$$lifecycle("beforeDestroy"),this.is=n;var r=n;r.el=this._el,r.el._nodeName="Quick-Paper-COMPONENT",this._oldComponent=new e(r),this._el=this._oldComponent._el,t&&(t.$$lifecycle("destroyed"),t=null)}}}}),k.prototype.$$mount=function(){if(!s(this._options.render))throw new Error("options.render needs to be a function");this.$$render=this._options.render,this.$$mountComponent()},"object"===o(e)&&"object"===o(e.exports)?e.exports=k:window.QuickPaper=k}()}).call(this,t(7)(e))},function(e,n,t){"use strict";e.exports=function(e,n){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||n?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,n,t){e.exports=t(19)},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){var r=t(10);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t(1).default)("data-quickpaper-b5e92ae8",r,!1)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"/*!\n * 👁️ - 统一不同浏览器的基础样式\n * https://github.com/hai2007/style.css/blob/master/normalize.css\n *\n * author hai2007 < https://hai2007.gitee.io/sweethome >\n *\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\n * Released under the MIT license\n */\n\nhtml {\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    /* 统一行高 */\n    line-height: 1.15;\n}\n\nbutton,\ninput {\n    /* 兼容部分手机下border不显示问题 */\n    border: 1px solid #b2b2bd;\n}\n\narticle,\nfooter,\nheader,\nnav,\nsection {\n    /* 修正旧浏览器未定义的块级元素 */\n    display: block;\n}\n\ncanvas,\nsvg {\n    /* 修正旧浏览器未定义的行内块元素 */\n    display: inline-block;\n}\n\n* {\n    /* 统一不同浏览器盒子尺寸计算方法 */\n    box-sizing: border-box;\n}\n\n::-ms-clear,\n::-ms-reveal {\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\n    display: none;\n}\n\nimg {\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\n    display: inline-block;\n}\n\nhtml {\n    /* 设置默认字体为统一的安全字体 */\n    font-family: sans-serif;\n}\n\na {\n    /* 默认去掉下划线 */\n    text-decoration: none;\n}\n\nli {\n    /* 去掉前置索引 */\n    list-style-type: none;\n}\n\nul,\nol,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    /* 去掉不喜欢的间距 */\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0;\n    -webkit-padding-start: 0;\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\n    margin-block-end: 0;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n    /* 修改IE和其它浏览器不一致问题 */\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    /* 去掉默认的8px */\n    margin: 0;\n}\n\ntable {\n    /* 设置默认表格边框合并为一个单一的边框 */\n    border-collapse: collapse;\n}\n",""])},function(e,n,t){var r=t(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t(1).default)("data-quickpaper-500be7d9",r,!1)},function(e,n,t){n=e.exports=t(0)(!1);var r=t(5),o=r(t(13)),i=r(t(14)),a=r(t(15)),s=r(t(16));n.push([e.i,"/* 书籍列表样式 */\n .book-list{\n\npadding: 10px 0;\n\n}\n\n .book-list>ul>li{\n\ncursor: pointer;\n\ndisplay: inline-block;\n\nwidth: 170px;\n\nheight: 250px;\n\nmargin: 10px;\n\npadding: 15px;\n\nfont-size: 0;\n\nbackground-size: auto 90%;\n\nbackground-position: center;\n\nbackground-repeat: no-repeat;\n\ntransition-property: background-size;\n\ntransition-duration: 200ms;\n\n}\n\n .book-list>ul>li:hover{\n\nbackground-size: auto 100%;\n\n}\n\n/* // 高等代数 */\n\n .book-list>ul>li.Higher-Algebra{\n\nbackground-image: url("+o+");\n\n}\n\n/* // 数学分析 */\n\n .book-list>ul>li.Mathematical-Analysis{\n\nbackground-image: url("+i+");\n\n}\n\n/* // 概率论与数理统计 */\n\n .book-list>ul>li.Probability-Theory-And-Mathematical-Statistics{\n\nbackground-image: url("+a+");\n\n}\n\n/* // 英语语法 */\n\n .book-list>ul>li.English-Grammar{\n\nbackground-image: url("+s+");\n\n}\n/* 页脚 */\n footer{\n\ntext-align: center;\n\npadding: 10px 0 20px 0;\n\nmin-width: 1100px;\n\nbox-shadow: rgba(0, 0, 0, 0.1) 1px -5px 2px;\n\n}\n\n footer>p{\n\nline-height: 40px;\n\nheight: 40px;\n\ncolor: gray;\n\nfont-size: 14px;\n\n}\n\n footer>a{\n\ndisplay: inline-block;\n\npadding: 0 15px;\n\nline-height: 30px;\n\nheight: 30px;\n\ncolor: #999999;\n\nfont-size: 12px;\n\nborder: 1px solid #E3E3E5;\n\nborder-radius: 45px;\n\n}\n\n footer>a:hover{\n\nborder: 1px solid #0a93e2;\n\ncolor: #0a93e2;\n\n}\n",""])},function(e,n,t){e.exports=t.p+"dist/Higher-Algebra.png"},function(e,n,t){e.exports=t.p+"dist/Mathematical-Analysis.png"},function(e,n,t){e.exports=t.p+"dist/Probability-Theory-And-Mathematical-Statistics.png"},function(e,n,t){e.exports=t.p+"dist/English-Grammar.png"},function(e,n,t){var r=t(18);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t(1).default)("data-quickpaper-fded838c",r,!0)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"",""])},function(e,n,t){"use strict";t.r(n);var r=t(4),o=t.n(r).a,i=t(2),a=function(e){var n=typeof e;return null!=e&&("object"===n||"function"===n)},s=Object.prototype.toString,c=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s.call(e)},l=a,u=function(e){if(!a(e))return!1;var n=c(e);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n},p=function(e){return Array.isArray(e)};
/*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */
function f(e){if(!(this instanceof f))throw new TypeError("undefined is not a promise");if(!u(e))throw new TypeError("Promise resolver "+e+" is not a function");this.__value=void 0,this.__hocks=[],this.__state="pending",function(e,n){var t=!1;try{e((function(e){t||(t=!0,n.$$changeState(e,"fulfilled"))}),(function(e){t||(t=!0,n.$$changeState(e,"rejected"))}))}catch(e){if(t)return;t=!0,n.$$changeState(e,"rejected")}}(e,this)}f.prototype.$$changeState=function(e,n){this.__state=n,this.__value=e,this.$$triggerEvent()},f.prototype.$$triggerEvent=function(){for(var e=null,n="fulfilled"==this.__state?0:1;this.__hocks.length>0;){if(u(this.__hocks[0][n])){e=this.__hocks.shift();break}u(this.__hocks[0][2])&&this.__hocks[0][2](),this.__hocks.shift()}if(null!==e){var t=e[n](this.__value);if(l(t)&&t.constructor===this.constructor){for(var r=0;r<this.__hocks.length;r++)t.__hocks.push(this.__hocks[r]),"pending"!=t.__state&&t.$$triggerEvent();this.then=function(e,n){t.then(e,n)},this.catch=function(e){t.catch(e)},this.finally=function(e){t.finally(e)}}else this.__value=t,this.__state="fulfilled",this.$$triggerEvent()}},f.prototype.then=function(e,n){return this.__hocks.push([e,n,void 0]),"pending"!=this.__state&&this.$$triggerEvent(),this},f.prototype.catch=function(e){return this.__hocks.push([void 0,e,void 0]),"pending"!=this.__state&&this.$$triggerEvent(),this},f.prototype.finally=function(e){return this.__hocks.push([void 0,void 0,e]),"pending"!=this.__state&&this.$$triggerEvent(),this},f.resolve=function(e){return l(e)&&e.constructor===f?e:new f((function(n){n(e)}))},f.reject=function(e){return new f((function(n,t){t(e)}))},f.all=function(e){return new f((function(n,t){if(!p(e))return t(new TypeError("undefined is not iterable (cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e),o=0;0==r.length&&n([]);for(var i=function(e,a){"pending"!==a.__state?(o+=1,"rejected"==a.__state?t(a.__value):(r[e]=a.__value,o==r.length&&n(r))):setTimeout((function(){i(e,a)}))},a=0;a<r.length;a++)i(a,r[a])}))},f.allSettled=function(e){return new f((function(n,t){if(!p(e))return t(new TypeError("undefined is not iterable (cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e),o=0;0==r.length&&n([]);for(var i=function(e,t){"pending"!==t.__state?(o+=1,r[e]={status:t.__state},"fulfilled"==t.__state?r[e].value=t.__value:r[e].reason=t.__value,o==r.length&&n(r)):setTimeout((function(){i(e,t)}))},a=0;a<r.length;a++)i(a,r[a])}))},f.any=function(e){return new f((function(n,t){if(!p(e))return t(new TypeError("undefined is not iterable (cannot read property Symbol(Symbol.iterator))"));var r=0;0==e.length&&n(void 0);for(var o=function(i,a){if("pending"!==a.__state)if(r+=1,"rejected"==a.__state){if(r==e.length)return t(new Error("All promises were rejected"))}else n(a.__value);else setTimeout((function(){o(i,a)}))},i=0;i<e.length;i++)o(i,e[i])}))},f.race=function(e){return new f((function(n,t){if(!p(e))return t(new TypeError("undefined is not iterable (cannot read property Symbol(Symbol.iterator))"));0==e.length&&n(void 0);for(var r=function(e,o){"pending"!==o.__state?"rejected"==o.__state?t(o.__value):n(o.__value):setTimeout((function(){r(e,o)}))},o=0;o<e.length;o++)r(o,e[o])}))},"Promise"in i.a||(i.a.Promise=f);t(9),t(11);var d=t(3),h={};t(17);h.render=function(e){return e("div",{quickpaper:"","data-quickpaper-fded838c":""},[])};var g=h,v={app:function(){return t.e(1).then(t.bind(null,33))}};o.prototype.loadPage=function(e){var n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("target","_blank"),n.click()};var b=Object(d.a)(window.location.href).router[0];(b in v?v[b]:v.app)().then((function(e){window.knowpedia=new o({el:document.getElementById("root"),render:function(n){return n(e.default)}})})),new o({el:document.getElementById("sub-root"),render:function(e){return e(g)}})}]);