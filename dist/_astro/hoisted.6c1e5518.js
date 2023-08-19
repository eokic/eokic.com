function qe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){if(!window.addEventListener||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)")?.matches)return;let e=null,t=0,n=null,r=0;const o=window,i=document,a=i.documentElement,{body:s}=i;function l(){t&&(clearTimeout(t),t=0,e.classList.remove("flying-focus_visible"),n.classList.remove("flying-focus_target"),n=null)}a.addEventListener("keydown",(e=>{const t=e.which;(9===t||t>36&&t<41)&&(r=Date.now())}),!1),a.addEventListener("focus",(u=>{const{target:c}=u;if("flying-focus"===c.id)return;let f=!1;if(e||(f=!0,e=i.createElement("flying-focus"),e.id="flying-focus",s.appendChild(e)),f||!(Date.now()-r<42))return;const d=function(e){const t=e.getBoundingClientRect(),n=a.clientLeft||s.clientLeft,r=a.clientTop||s.clientTop,i=o.pageXOffset||a.scrollLeft||s.scrollLeft,l=o.pageYOffset||a.scrollTop||s.scrollTop,u=t.left+i-n;return{top:t.top+l-r||0,left:u||0}}(c);e.style.left=d.left+"px",e.style.top=d.top+"px",e.style.width=c.offsetWidth+"px",e.style.height=c.offsetHeight+"px";const p=getComputedStyle(c).borderRadius.match(/^([\d.]+)([a-zA-Z]+)?$/);e.style.borderRadius=p?.[1]&&parseInt(p[1],10)>12?p[1]+p[2]:"var(--focus-sr-radius, 6px)",l(),c.classList.add("flying-focus_target"),e.classList.add("flying-focus_visible"),n=c,t=setTimeout(l,500)}),!0),a.addEventListener("blur",(()=>{l()}),!0);const u=i.createElement("style");u.textContent="#flying-focus {\n    position: absolute;\n    margin: 0;\n    visibility: hidden;\n    outline: var(--focus-sr-width, 0.25rem) var(--focus-sr-style, solid) var(--focus-sr-color, red);\n    outline-offset: var(--focus-sr-offset, 0.2em);\n    background: transparent;\n    pointer-events: none;\n    -webkit-transition: all 500ms cubic-bezier(0,1,0,1);\n    transition: all 500ms cubic-bezier(0,1,0,1);\n  }\n\n  #flying-focus.flying-focus_visible {\n    visibility: visible;\n    z-index: 9999;\n  }\n\n  .flying-focus_target {\n    outline: none !important; /* Doesn't work in Firefox :( */\n  }\n\n  /* http://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links/199319 */\n  .flying-focus_target::-moz-focus-inner {\n    border: 0 !important;\n  }",s.appendChild(u)}();var Re=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(9),o=n(10),i=n(11),a=n(13);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(14),o=n(15),i={};for(var a in r)r.hasOwnProperty(a)&&(i[r[a]]=a);var s=e.exports={to:{},get:{}};function l(e,t,n){return Math.min(Math.max(t,e),n)}function u(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}s.get=function(e){var t,n;switch(e.substring(0,3).toLowerCase()){case"hsl":t=s.get.hsl(e),n="hsl";break;case"hwb":t=s.get.hwb(e),n="hwb";break;default:t=s.get.rgb(e),n="rgb"}return t?{model:n,value:t}:null},s.get.rgb=function(e){if(!e)return null;var t,n,o,i=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(o=t[2],t=t[1],n=0;n<3;n++){var a=2*n;i[n]=parseInt(t.slice(a,a+2),16)}o&&(i[3]=Math.round(parseInt(o,16)/255*100)/100)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(o=(t=t[1])[3],n=0;n<3;n++)i[n]=parseInt(t[n]+t[n],16);o&&(i[3]=Math.round(parseInt(o+o,16)/255*100)/100)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(n=0;n<3;n++)i[n]=parseInt(t[n+1],0);t[4]&&(i[3]=parseFloat(t[4]))}else{if(!(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(t=e.match(/(\D+)/))?"transparent"===t[1]?[0,0,0,0]:(i=r[t[1]])?(i[3]=1,i):null:null;for(n=0;n<3;n++)i[n]=Math.round(2.55*parseFloat(t[n+1]));t[4]&&(i[3]=parseFloat(t[4]))}for(n=0;n<3;n++)i[n]=l(i[n],0,255);return i[3]=l(i[3],0,1),i},s.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var n=parseFloat(t[4]);return[(parseFloat(t[1])+360)%360,l(parseFloat(t[2]),0,100),l(parseFloat(t[3]),0,100),l(isNaN(n)?1:n,0,1)]}return null},s.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var n=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,l(parseFloat(t[2]),0,100),l(parseFloat(t[3]),0,100),l(isNaN(n)?1:n,0,1)]}return null},s.to.hex=function(){var e=o(arguments);return"#"+u(e[0])+u(e[1])+u(e[2])+(e[3]<1?u(Math.round(255*e[3])):"")},s.to.rgb=function(){var e=o(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},s.to.rgb.percent=function(){var e=o(arguments),t=Math.round(e[0]/255*100),n=Math.round(e[1]/255*100),r=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+n+"%, "+r+"%)":"rgba("+t+"%, "+n+"%, "+r+"%, "+e[3]+")"},s.to.hsl=function(){var e=o(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},s.to.hwb=function(){var e=o(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},s.to.keyword=function(e){return i[e.slice(0,3)]}},function(e,t,n){(function(t){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=s||l||Function("return this")(),c=Object.prototype.toString,f=Math.max,d=Math.min,p=function(){return u.Date.now()};function h(e,t,n){var r,o,i,a,s,l,u=0,c=!1,h=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||h&&e-u>=i}function w(){var e,n,r=p();if(b(r))return O(r);s=setTimeout(w,(n=t-((e=r)-l),h?d(n,i-(e-u)):n))}function O(e){return s=void 0,g&&r?v(e):(r=o=void 0,a)}function k(){var e=p(),n=b(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(w,t),c?v(e):a}(l);if(h)return s=setTimeout(w,t),v(l)}return void 0===s&&(s=setTimeout(w,t)),a}return t=m(t)||0,y(n)&&(c=!!n.leading,i=(h="maxWait"in n)?f(m(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),k.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=o=s=void 0},k.flush=function(){return void 0===s?a:O(p())},k}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||(s=t)&&"object"==typeof s&&"[object Symbol]"==c.call(t))return NaN;var t,s;if(y(e)){var l="function"==typeof e.valueOf?e.valueOf():e;e=y(l)?l+"":l}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),h(e,t,{leading:r,maxWait:t,trailing:o})}}).call(this,n(17))},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){class n{constructor(e,t){this.$element=e,this.attr=t,this._functionObject=this._getFunctions(this._getValue(e,t))}_getValue(e,t){return e.style[t]}_setValue(e){this.$element.style[this.attr]=e}_getValueFromObject(e){let t="";return Object.keys(e).forEach((n=>{t+=`${n}(${e[n].join(", ")}) `})),t.substring(0,t.length-1)}_getFunctions(e){const t=e.split(/(\w+)\((.*?)\)/);let n={};for(let e=1;e<t.length;e+=3)n[t[e]]=t[e+1].replace(" ","").split(",");return n}get(){return this._getValue(this.$element,this.attr)}add(e,t,n=!0){return this.exists(e)?!!n&&(this.update(e,t),!0):("string"==typeof t&&(t=[t]),this._functionObject[e]=t,this._setValue(this._getValueFromObject(this._functionObject)),!0)}update(e,t,n=!0){return this.exists(e)?("string"==typeof t&&(t=[t]),this._functionObject[e]=t,this._setValue(this._getValueFromObject(this._functionObject)),!0):!!n&&(this.add(e,t),!0)}delete(e){return!!this.exists(e)&&(delete this._functionObject[e],this._setValue(this._getValueFromObject(this._functionObject)),!0)}exists(e){return this._functionObject.hasOwnProperty(e)}}e.exports=(e,t)=>new n(e,t)},function(e,t,n){const r=n(4),o=e=>{const t=r.get.rgb(e);return{r:t[0],g:t[1],b:t[2],a:t[3]}};e.exports=e=>{let t,n;e=o(e),this.toColor=n=>(n=o(n),t={r:n.r-e.r,g:n.g-e.g,b:n.b-e.b},{withPercent:i});const i=r=>{const o=r/100;return n={r:e.r+Math.floor(t.r>0?t.r*o:- -t.r*o),g:e.g+Math.floor(t.g>0?t.g*o:- -t.g*o),b:e.b+Math.floor(t.b>0?t.b*o:- -t.b*o)},{get:a}},a=e=>{if(!e)return n;if(-1!==Object.keys(r.to).indexOf(e))return r.to[e]([n.r,n.g,n.b]);throw new Error(`Unknown type '${e}'`)};return this}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}},function(e,t,n){var r=n(12);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,n){var r=n(16),o=Array.prototype.concat,i=Array.prototype.slice,a=e.exports=function(e){for(var t=[],n=0,a=e.length;n<a;n++){var s=e[n];r(s)?t=o.call(t,i.call(s)):t.push(s)}return t};a.wrap=function(e){return function(){return e(a(arguments))}}},function(e,t){e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch{"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(3),l=n.n(s),u=n(2),c=n.n(u),f=function(e,t,n){return(n-=e)/(t-=e)*100},d=function(e,t,n,r){var o,i,a=e+(t-e)*n/100;return r?(o=a,(i=r)?Math.floor(o*Math.pow(10,i))/Math.pow(10,i):o):a},p=n(4),h=n.n(p),y=function(e){return"The value for the '".concat(e,"' property must be a number, string or object")},m=function(){return"Property value not specified"},g=function(e){return"Keyframe percent '".concat(e,"' is not a valid number")},v=function(){return"No value specified"},b=function(e,t){return"Previous unit '".concat(e,"' does not match current unit '").concat(t,"'")},w=function(e,t){return"'to' unit ('".concat(e,"') does not match 'from' unit ('").concat(t,"')")},O=function(){return"Keyframe property 'to' must be set"},k=function(){return"The provided animation object is not an instance of Motus.Animation"},_=function(){return"No keyframes specified"},j=function(){return"Unexpected error"},P=function(e){return"".concat(e," is not a valid html element")},x=function(){return"No animation found. Have you attached the animation with Motus.addAnimation ?"},A=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error(e.apply(void 0,n))};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V={matrix:{defaultValue:[0,0,0,0,0,0]},matrix3d:{defaultValue:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},translate:{defaultValue:["0px","0px"]},translate3d:{defaultValue:["0px","0px","0px"]},translateX:{defaultValue:"0px"},translateY:{defaultValue:"0px"},translateZ:{defaultValue:"0px"},scale:{defaultValue:[1]},scale3d:{defaultValue:[1,1,1]},scaleX:{defaultValue:1},scaleY:{defaultValue:1},scaleZ:{defaultValue:1},rotate:{defaultValue:["0deg"]},rotate3d:{defaultValue:[0,"0deg","0deg","0deg"]},rotateX:{defaultValue:"0deg"},rotateY:{defaultValue:"0deg"},rotateZ:{defaultValue:"0deg"},skew:{defaultValue:["0deg"]},skewX:{defaultValue:["0deg"]},skewY:{defaultValue:["0deg"]},perspective:{defaultValue:0}},T={blur:{defaultValue:["0px"]},brightness:{defaultValue:["100%"]},contrast:{defaultValue:["100%"]},hueRotate:{defaultValue:["0deg"]},grayscale:{defaultValue:["0%"]},invert:{defaultValue:["0%"]},saturate:{defaultValue:["100%"]},sepia:{defaultValue:["0%"]}};Object.keys(V).forEach((function(e){return V[e]=E({},V[e],{functionName:"transform"})})),Object.keys(T).forEach((function(e){return T[e]=E({},T[e],{functionName:"filter"})}));var $=E({},V,{},T),M=function(e){return e===window?{width:window.innerWidth,height:window.innerHeight}:{width:e.clientWidth,height:e.clientHeight}},L=function e(t){if(q(t))return t.map(e);if(t=String(t),h.a.get(t)){var n=h.a.get.rgb(t);return[h.a.to.rgb(n),"COLOR_UNIT"]}var r=t.match(/([-0-9.]+)(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax|deg)*/);if(r&&3===r.length)return[parseFloat(r[1]),r[2]||"NO_UNIT"];A(v)},N=function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?void 0===t.offsetLeft?e(t.parentElement,n):e(t.offsetParent,n)+(n?t.offsetLeft:t.offsetTop):0},I=n(6),F=n.n(I),D=function(e){return"number"==typeof e},C=function(e){return"string"==typeof e},q=function(e){return Array.isArray(e)},K=function(e){return e instanceof Element},Y=function(e){return 0===e||!!e};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var U=function(){function e(){o()(this,e)}return a()(e,null,[{key:"normalize",value:function(e,t){var n=this;return Array.isArray(e)&&(e=this._arrayToObject(e)),Object.keys(e).length||A(_),Object.keys(e).forEach((function(r){var o;(!D(o=r)&&!C(o)||isNaN(o))&&A(g,r);var i=e[r];Object.keys(i).forEach((function(o){var i=n._normalizeKeyframeRule(o,r,e,t);e[r]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e[r],l()({},o,i))}))})),e}},{key:"_normalizeKeyframeRule",value:function(e,t,n,r){var o,i,a,s,l=n[t][e];if(Y(l)||A(m),D(l)){var u=this._normalizeNumberValue(e,t,n,r),f=c()(u,3);o=f[0],i=f[1],a=f[2]}else if(C(l)){var d=this._normalizeStringValue(e,t,n,r),p=c()(d,3);o=p[0],i=p[1],a=p[2]}else if(q(l))o=this._previousKeyframeProperty(e,t,n,r),i=L(l);else if(s=l,"object"===F()(s)){var h=this._normalizeObjectValue(e,t,n,r),g=c()(h,3);o=g[0],i=g[1],a=g[2]}else A(y,e);return{from:o,to:i,unit:a}}},{key:"_arrayToObject",value:function(e){return 1===e.length?{100:e[0]}:e.reduce((function(t,n,r){return t[Math.floor(r/(e.length-1)*100)]=n,t}),{})}},{key:"_getPreviousKeyframe",value:function(e,t){var n,r,o;return r=t,!(!(o=(n=(n=Object.keys(e)).map((function(e){return parseInt(e)})))[n.indexOf(parseInt(r))-1])&&0!==o)&&o}},{key:"_previousKeyframeProperty",value:function(e,t,n,r){var o=this._getPreviousKeyframe(n,t);if(!1===o)return L(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;return $[t]?$[t].defaultValue:n.getComputedStyle(e,null).getPropertyValue(function(e){return e.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()}))}(t))}(r,e));var i=n[o][e];return i?q(i.to)?i.to:[i.to,i.unit]:this._previousKeyframeProperty(e,o,n,r)}},{key:"_normalizeNumberValue",value:function(e,t,n,r){var o=n[t][e],i=this._previousKeyframeProperty(e,t,n,r),a=c()(i,2);return[a[0],o,a[1]]}},{key:"_normalizeStringValue",value:function(e,t,n,r){var o=n[t][e],i=L(o),a=c()(i,2),s=a[0],l=a[1],u=this._previousKeyframeProperty(e,t,n,r),f=c()(u,2),d=f[0],p=f[1];return p!==l&&A(b,p,l),[d,s,l]}},{key:"_normalizeObjectValue",value:function(e,t,n,r){var o=n[t][e],i=o.from,a=o.to,s=o.unit,l=this._previousKeyframeProperty(e,t,n,r),u=c()(l,2),f=u[0],d=u[1];Y(a)||A(O);var p=Y(i)?L(i):[f,d],h=c()(p,2),y=h[0],m=h[1],g=L(a),v=c()(g,2),b=v[0],k=v[1];return s||m!==k&&A(w,k,m),Y(s)||(s=d),[y,b,s]}}]),e}(),B=function(){function e(){o()(this,e)}return a()(e,null,[{key:"getPxFromPoint",value:function(e,t,n){var r=N(t,n)||0,o=N(e,n)-r;return K(e)?o:e}},{key:"getDistanceFromParent",value:function(e,t,n){var r=t===window?0:N(t,n);return N(e,n)-r}}]),e}(),R=n(7),H=n.n(R),W=function(){function e(t){o()(this,e),this.$el=t}return a()(e,[{key:"apply",value:function(e,t,n){$[e]&&this._applyArray(e,[t+n]),D(t)&&this._applyNumber(e,t,n),C(t)&&this._applyString(e,t),q(t)&&this._applyArray(e,t)}},{key:"_getStyle",value:function(e){return this.$el.style[e]}},{key:"_setStyle",value:function(e,t){this.$el.style[e]=t}},{key:"removeAll",value:function(){this.$el.style=""}},{key:"_applyNumber",value:function(e,t,n){n&&"NO_UNIT"!==n&&(t+=n),this._setStyle(e,t)}},{key:"_applyString",value:function(e,t){this._applyNumber(e,t)}},{key:"_applyArray",value:function(e,t){var n=$[e].functionName;t=t.map((function(e){return q(e)?"NO_UNIT"===e[1]?e[0]:e[0]+e[1]:e})),H()(this.$el,n).add(e,t)}}]),e}(),G=n(8),J=n.n(G);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Z=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};o()(this,e),this.options=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.defaultOptions,{},r),this.keyframes=t,this.elementStyles=new W(n)}return a()(e,[{key:"_getCurrentKeyframesPercent",value:function(e){for(var t=this.keyframes,n=Object.keys(t),r=0;r<n.length;r++){if(e===parseInt(n[r]))return[n[r-1]||"0",n[r]];if(e>n[r]&&e<n[r+1])return[n[r],n[r+1]]}return n[0]>e?["0",n[0]]:n[n.length-1]<e?[]:void 0}},{key:"applyAnimations",value:function(e){var t=this,n=this._getCurrentKeyframesPercent(e);if(n.length){var r=c()(n,2),o=r[0],i=r[1],a=Math.floor(f(o,i,e));Object.keys(this.keyframes).forEach((function(e){parseInt(e)<parseInt(i)&&t._applyKeyframe(t.keyframes[e],100)})),this._applyKeyframe(this.keyframes[i],a)}}},{key:"applyNoAnimations",value:function(){this.elementStyles.removeAll(),this.keyframes[0]&&this._applyKeyframe(this.keyframes[0],100)}},{key:"applyAllAnimations",value:function(){var e=this;Object.keys(this.keyframes).forEach((function(t){return e._applyKeyframe(e.keyframes[t],100)}))}},{key:"_applyKeyframe",value:function(e,t){var n=this;Object.keys(e).forEach((function(r){var o=e[r],i=o.from,a=o.to,s=o.unit;D(i)&&D(a)?n._applyNumberValues(r,i,a,"NO_UNIT"===s?"":s,t):"COLOR_UNIT"===s?n._applyColorValues(r,i,a,t):q(i)&&q(a)?n._applyArrayValues(r,i,a,t):A(j)}))}},{key:"_applyNumberValues",value:function(e,t,n,r,o){var i=this.elementStyles,a=this.options,s=d(t,n,o,a.precision);i.apply(e,s,r)}},{key:"_applyColorValues",value:function(e,t,n,r){var o=this.elementStyles,i=J()(t).toColor(n).withPercent(r).get("rgb");o.apply(e,i)}},{key:"_applyArrayValues",value:function(e,t,n,r){for(var o=this.elementStyles,i=Math.min(t.length,n.length),a=[],s=0;s<i;s++)a[s]=[],a[s][0]=d(t[s][0],n[s][0],r,this.options.precision),a[s][1]=n[s][1];o.apply(e,a)}}]),e}();l()(Z,"defaultOptions",{precision:1});var Q=n(5),ee=n.n(Q);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ne=function(){function e(t){var n=this;o()(this,e),this.uid=Math.random().toString(36).substr(2,9),this.options=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.defaultOptions,{},t),this.$el=this.options.$el,K(this.$el)||A(P,this.$el),this.keyframes=U.normalize(this.options.keyframes,this.options.$el),this.started=this.options.started,this.appliedAllBefore=!1,this.appliedAllAfter=!1,this._animator=new Z(this.keyframes,this.options.$el),this._compute=ee()(this.__compute,this.options.throttle),this._computePositions(this.options.startPoint,this.options.endPoint);var r=ee()(this._computePositions.bind(this),this.options.throttle);window.addEventListener("resize",(function(){return r(n.options.startPoint,n.options.endPoint)}))}return a()(e,[{key:"getUid",value:function(){return this.uid}},{key:"isStarted",value:function(){return this.started}},{key:"start",value:function(){var e=this.options;this.started||(e.$scrollElement.addEventListener("scroll",this._compute.bind(this)),this.options.onStart&&this.options.onStart(),this.started=!0,this._compute())}},{key:"stop",value:function(){var e=this.started,t=this.options;e&&(t.$scrollElement.removeEventListener("scroll",this._compute),this.options.onStop&&this.options.onStop(),this.started=!1)}},{key:"_getScrollPosition",value:function(){var e=this.options,t=e.horizontal;return function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e===window?t?e.scrollX:e.scrollY:t?e.scrollLeft:e.scrollTop}(e.$scrollElement,t)}},{key:"_computePositions",value:function(e,t){var n=this.options,r=n.$scrollElement,o=n.horizontal;Y(e)&&!q(e)?this.startPoint=B.getPxFromPoint(e,r,o):(this.startPoint=B.getDistanceFromParent(this.$el,r,o)-M(r)[o?"width":"height"],q(e)&&(this.startPoint+=e[0])),Y(t)&&!q(t)?this.endPoint=B.getPxFromPoint(t,r,o):(this.endPoint=B.getDistanceFromParent(this.$el,r,o)+M(this.$el)[o?"width":"height"],q(t)&&(this.endPoint+=t[0]))}},{key:"__compute",value:function(){var e=this.options,t=e.onScrollBefore,n=e.onScrollAfter,r=e.onScrollBetween,o=e.onScroll,i=e.onHitTop,a=e.onHitBottom,s=this.startPoint,l=this.endPoint;if(this.started){var u=this._getScrollPosition();if(o&&o(u),u>s&&u<l){this.appliedAllBefore=!1,this.appliedAllAfter=!1;var c=f(s,l,u);this._animator.applyAnimations(c),r&&r(u,c)}else u<s?(t&&t(u),this.appliedAllBefore||(i&&i(),this.appliedAllBefore=!0,this._animator.applyNoAnimations())):u>l&&(n&&n(u),this.appliedAllAfter||(a&&a(),this.appliedAllAfter=!0,this._animator.applyAllAnimations()))}}}]),e}();l()(ne,"defaultOptions",{startPoint:null,endPoint:null,$el:null,keyframes:[],precision:Z.defaultOptions.precision,throttle:10,$scrollElement:window,horizontal:!1,onScroll:null,onScrollBetween:null,onScrollBefore:null,onScrollAfter:null,onHitTop:null,onHitBottom:null,onStart:null,onStop:null,started:!1});var re=ne,oe=new(function(){function e(){o()(this,e),this.Animation=re,this.Point=B,this._animations=[],this.NO_UNIT="NO_UNIT",this.COLOR_UNIT="COLOR_UNIT"}return a()(e,[{key:"addAnimation",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e instanceof this.Animation?(this._animations.push(e),t&&e.start()):A(k)}},{key:"clearAnimation",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e instanceof this.Animation||A(k);var n=this._animations.findIndex((function(t){return e.getUid()===t.getUid()}));-1===n&&A(x),t&&this._animations[n].stop(),this._animations.splice(n,1)}},{key:"clearAnimations",value:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&this._animations.forEach((function(e){return e.stop()})),this._animations=[]}}]),e}());typeof window<"u"&&(window.Motus=oe),t.default=oe}]);const le=qe(Re),{App:ue}=window;document.addEventListener("astro:beforeload",(()=>{document.body.classList.remove("no-js"),document.body.classList.add("js")})),document.addEventListener("astro:load",(()=>{const e=document.getElementById("header"),t=document.getElementById("hero-desc"),n=document.getElementById("hero-photo");if(document.querySelectorAll('a[data-smooth-scroll][href^="#"]').forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href"),r=document.querySelector(n);if(!r)return;const o=r.getBoundingClientRect().top+window.scrollY-50;e.blur(),window.scrollTo({top:o,behavior:ue.prefersReducedMotion?"instant":"smooth"}),window.history.replaceState(null,"",n)}))})),ue.route.isHomePage&&e&&t&&new IntersectionObserver((t=>{t[0]?.intersectionRatio<=0?e.classList.add("show"):e.classList.remove("show")}),{threshold:[0,.25,.5,.75,1]}).observe(t),!ue.prefersReducedMotion&&ue.route.isHomePage&&n&&t){const e=new le.Animation({$el:n,startPoint:0,endPoint:600,keyframes:[{translateY:-100}]});le.addAnimation(e);const r=new le.Animation({$el:t,startPoint:0,endPoint:500,keyframes:[{translateY:8}]});le.addAnimation(r)}}));const ce=e=>history.replaceState(e,"");let G=history.state?.index||0;history.state||ce({index:G,scrollY:0});const je=!!document.startViewTransition,de=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Ee=e=>document.dispatchEvent(new Event(e)),Se=()=>Ee("astro:load"),J="data-astro-transition-persist",ze=(e,t)=>{let n=!1,r=!1;return(...o)=>{n?r=!0:(e(...o),n=!0,setTimeout((()=>{r&&(r=!1,e(...o)),n=!1}),t))}};async function Ue(e){const t=await fetch(e),n=await t.text();return{ok:t.ok,html:n}}function xe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Ae(){for(const e of document.scripts)e.dataset.astroExec=""}function Be(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(""===t.dataset.astroExec)continue;const n=document.createElement("script");n.innerHTML=t.innerHTML;for(const r of t.attributes){if("src"===r.name){const t=new Promise((e=>{n.onload=e}));e=e.then((()=>t))}n.setAttribute(r.name,r.value)}n.dataset.astroExec="",t.replaceWith(n)}return e}const Ye=new DOMParser;async function _e(e,t,n){const r=Ye.parseFromString(e,"text/html"),o=e=>{const t=e.getAttribute(J),n=t&&r.head.querySelector(`[${J}="${t}"]`);if(n)return n;if(e.matches("link[rel=stylesheet]")){const t=e.getAttribute("href");return r.head.querySelector(`link[rel=stylesheet][href="${t}"]`)}if("SCRIPT"===e.tagName){let t=e;for(const e of r.scripts)if(t.textContent&&t.textContent===e.textContent||t.type===e.type&&t.src===e.src)return e}return null},i=()=>{r.querySelectorAll("head noscript").forEach((e=>e.remove()));for(const e of Array.from(document.head.children)){const t=o(e);t?t.remove():e.remove()}document.head.append(...r.head.children);const e=document.body;document.body.replaceWith(r.body);for(const t of e.querySelectorAll(`[${J}]`)){const e=t.getAttribute(J),n=document.querySelector(`[${J}="${e}"]`);n&&n.replaceWith(t)}if(0===t?.scrollY&&location.hash){const e=decodeURIComponent(location.hash.slice(1));t.scrollY=document.getElementById(e)?.offsetTop||0}null!=t?.scrollY&&(scrollTo(0,t.scrollY),ce(t)),Ee("astro:beforeload")},a=[];for(const e of r.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${J}="${e.getAttribute(J)}"], link[rel=stylesheet]`)){const t=document.createElement("link");t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",e.getAttribute("href")),a.push(new Promise((e=>{["load","error"].forEach((n=>t.addEventListener(n,e))),document.head.append(t)})))}if(a.length&&await Promise.all(a),"animate"===n){let e=!1;addEventListener("animationstart",(()=>e=!0),{once:!0}),document.documentElement.dataset.astroTransitionFallback="old";const t=()=>{removeEventListener("animationend",t),clearTimeout(n),i(),document.documentElement.dataset.astroTransitionFallback="new"};addEventListener("animationend",t,{once:!0});let n=setTimeout((()=>!e&&t()))}else i()}async function Pe(e,t,n){let r;const{html:o,ok:i}=await Ue(t);if(i){document.documentElement.dataset.astroTransition=e,r=je?document.startViewTransition((()=>_e(o,n))).finished:_e(o,n,xe());try{await r}finally{await Be(),Ae(),Se()}}else location.href=t}function He(e){if(document.querySelector(`link[rel=prefetch][href="${e}"]`))return;if(navigator.connection){let e=navigator.connection;if(e.saveData||/(2|3)g/.test(e.effectiveType||""))return}let t=document.createElement("link");t.setAttribute("rel","prefetch"),t.setAttribute("href",e),document.head.append(t)}(je||"none"!==xe())&&(Ae(),document.addEventListener("click",(e=>{let t=e.target;if(t instanceof Element&&"A"!==t.tagName&&(t=t.closest("a")),t&&t instanceof HTMLAnchorElement&&t.href&&(!t.target||"_self"===t.target)&&t.origin===location.origin&&(location.pathname!==t.pathname||location.search!==t.search)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.defaultPrevented&&de()){e.preventDefault(),Pe("forward",t.href,{index:++G,scrollY:0});const n={index:G,scrollY:scrollY};ce({index:G-1,scrollY:scrollY}),history.pushState(n,"",t.href)}})),addEventListener("popstate",(e=>{if(!de())return void location.reload();if(null===e.state)return;const t=history.state,n=t?.index??G+1;Pe(n>G?"forward":"back",location.href,t),G=n})),["mouseenter","touchstart","focus"].forEach((e=>{document.addEventListener(e,(e=>{if(e.target instanceof HTMLAnchorElement){let t=e.target;t.origin===location.origin&&t.pathname!==location.pathname&&de()&&He(t.pathname)}}),{passive:!0,capture:!0})})),addEventListener("load",Se),addEventListener("scroll",ze((()=>{history.state&&ce({...history.state,scrollY:scrollY})}),300),{passive:!0}));