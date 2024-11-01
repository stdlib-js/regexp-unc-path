// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function u(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,t=r-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+u(t):u(t)+e,a&&(e="-"+e)),e}var t=String.prototype.toLowerCase,n=String.prototype.toUpperCase;function o(e){var r,u,o;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(u=e.arg,o=parseInt(u,10),!isFinite(o)){if(!i(u))throw new Error("invalid integer. Value: "+u);o=0}return o<0&&("u"===e.specifier||10!==r)&&(o=4294967295+o+1),o<0?(u=(-o).toString(r),e.precision&&(u=a(u,e.precision,e.padRight)),u="-"+u):(u=o.toString(r),o||e.precision?e.precision&&(u=a(u,e.precision,e.padRight)):u="",e.sign&&(u=e.sign+u)),16===r&&(e.alternate&&(u="0x"+u),u=e.specifier===n.call(e.specifier)?n.call(u):t.call(u)),8===r&&e.alternate&&"0"!==u.charAt(0)&&(u="0"+u),u}var s=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,g=/e\+(\d)$/,f=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,E=/(\..*[^0])0*e/;function v(e){var r,u,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+u);a=e.arg}switch(e.specifier){case"e":case"E":u=a.toExponential(e.precision);break;case"f":case"F":u=a.toFixed(e.precision);break;case"g":case"G":s(a)<1e-4?((r=e.precision)>0&&(r-=1),u=a.toExponential(r)):u=a.toPrecision(e.precision),e.alternate||(u=l.call(u,E,"$1e"),u=l.call(u,b,"e"),u=l.call(u,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return u=l.call(u,g,"e+0$1"),u=l.call(u,f,"e-0$1"),e.alternate&&(u=l.call(u,d,"$1."),u=l.call(u,h,"$1.e")),a>=0&&e.sign&&(u=e.sign+u),u=e.specifier===p.call(e.specifier)?p.call(u):c.call(u)}function y(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var F=String.fromCharCode,m=Array.isArray;function _(e){return e!=e}function B(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,i,u,t,n,s,c,p,l,g,f,d,h;if(!m(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",c=1,p=0;p<e.length;p++)if(u=e[p],"string"==typeof u)s+=u;else{if(r=void 0!==u.precision,!(u=B(u)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+u+"`.");for(u.mapping&&(c=u.mapping),i=u.flags,l=0;l<i.length;l++)switch(t=i.charAt(l)){case" ":u.sign=" ";break;case"+":u.sign="+";break;case"-":u.padRight=!0,u.padZeros=!1;break;case"0":u.padZeros=i.indexOf("-")<0;break;case"#":u.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===u.width){if(u.width=parseInt(arguments[c],10),c+=1,_(u.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+u.width+"`.");u.width<0&&(u.padRight=!0,u.width=-u.width)}if(r&&"*"===u.precision){if(u.precision=parseInt(arguments[c],10),c+=1,_(u.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+u.precision+"`.");u.precision<0&&(u.precision=1,r=!1)}switch(u.arg=arguments[c],u.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(u.padZeros=!1),u.arg=o(u);break;case"s":u.maxWidth=r?u.precision:-1,u.arg=String(u.arg);break;case"c":if(!_(u.arg)){if((n=parseInt(u.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+u.arg);u.arg=_(n)?String(u.arg):F(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(u.precision=6),u.arg=v(u);break;default:throw new Error("invalid specifier: "+u.specifier)}u.maxWidth>=0&&u.arg.length>u.maxWidth&&(u.arg=u.arg.substring(0,u.maxWidth)),u.padZeros?u.arg=a(u.arg,u.width||u.precision,u.padRight):u.width&&(u.arg=(g=u.arg,f=u.width,d=u.padRight,h=void 0,(h=f-g.length)<0?g:g=d?g+y(h):y(h)+g)),s+=u.arg||"",c+=1}return s}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,i,u,a;for(i=[],a=0,u=x.exec(e);u;)(r=e.slice(a,x.lastIndex-u[0].length)).length&&i.push(r),i.push(D(u)),a=x.lastIndex,u=x.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function $(e){var r,i;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[S(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return k.apply(null,r)}var A,V=Object.prototype,j=V.toString,I=V.__defineGetter__,R=V.__defineSetter__,T=V.__lookupGetter__,C=V.__lookupSetter__;function P(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/}A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var u,a,t,n;if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===j.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(T.call(e,r)||C.call(e,r)?(u=e.__proto__,e.__proto__=V,delete e[r],e[r]=i.value,e.__proto__=u):e[r]=i.value),t="get"in i,n="set"in i,a&&(t||n))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return t&&I&&I.call(e,r,i.get),n&&R&&R.call(e,r,i.set),e};var G=/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/;A(P,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:G});export{G as REGEXP,P as default};
//# sourceMappingURL=mod.js.map
