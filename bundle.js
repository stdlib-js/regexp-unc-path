// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(u,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(u="undefined"!=typeof globalThis?globalThis:u||self).reUncPath=e()}(this,(function(){"use strict";var u="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return u({},"x",{}),!0}catch(u){return!1}},t=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,a=r.__lookupGetter__,l=r.__lookupSetter__;var c=t,f=function(u,e,t){var c,f,_,p;if("object"!=typeof u||null===u||"[object Array]"===o.call(u))throw new TypeError("invalid argument. First argument must be an object. Value: `"+u+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(a.call(u,e)||l.call(u,e)?(c=u.__proto__,u.__proto__=r,delete u[e],u[e]=t.value,u.__proto__=c):u[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&n&&n.call(u,e,t.get),p&&i&&i.call(u,e,t.set),u},_=e()?c:f;var p=function(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/},d=p;return function(u,e,t){_(u,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}(d,"REGEXP",p()),d}));
//# sourceMappingURL=bundle.js.map
