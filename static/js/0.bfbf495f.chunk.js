(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(t,e,r){t.exports=r(36)},3:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",function(){return n})},36:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),s=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var u=x(s,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var a=c(t,e,r);if("normal"===a.type){if(n=r.done?p:l,a.arg===v)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(n=p,r.method="throw",r.arg=a.arg)}}}(t,r,s),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=a;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",v={};function y(){}function d(){}function m(){}var w={};w[i]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(k([])));_&&_!==r&&n.call(_,i)&&(w=_);var b=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,s){var u=c(t[r],t,o);if("throw"!==u.type){var a=u.arg,f=a.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,s)},function(t){e("throw",t,i,s)}):Promise.resolve(f).then(function(t){a.value=t,i(a)},function(t){return e("throw",t,i,s)})}s(u.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=c(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:A}}function A(){return{value:e,done:!0}}return d.prototype=b.constructor=m,m.constructor=d,m[u]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[s]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o){var i=new E(a(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(b),b[u]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],u=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var a=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(a&&c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},37:function(t,e,r){"use strict";var n,o="object"===typeof Reflect?Reflect:null,i=o&&"function"===typeof o.apply?o.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};n=o&&"function"===typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!==t};function u(){u.init.call(this)}t.exports=u,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var a=10;function c(t){return void 0===t._maxListeners?u.defaultMaxListeners:t._maxListeners}function f(t,e,r,n){var o,i,s,u;if("function"!==typeof r)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r);if(void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),i=t._events),s=i[e]),void 0===s)s=i[e]=r,++t._eventsCount;else if("function"===typeof s?s=i[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(o=c(t))>0&&s.length>o&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=s.length,u=a,console&&console.warn&&console.warn(u)}return t}function l(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,t))}.bind(n);return o.listener=r,n.wrapFn=o,o}function h(t,e,r){var n=t._events;if(void 0===n)return[];var o=n[e];return void 0===o?[]:"function"===typeof o?r?[o.listener||o]:[o]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(o):v(o,o.length)}function p(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"===typeof r)return 1;if(void 0!==r)return r.length}return 0}function v(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(t){if("number"!==typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");a=t}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(t){if("number"!==typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},u.prototype.getMaxListeners=function(){return c(this)},u.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var n="error"===t,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var a=o[t];if(void 0===a)return!1;if("function"===typeof a)i(a,this,e);else{var c=a.length,f=v(a,c);for(r=0;r<c;++r)i(f[r],this,e)}return!0},u.prototype.addListener=function(t,e){return f(this,t,e,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(t,e){return f(this,t,e,!0)},u.prototype.once=function(t,e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,l(this,t,e)),this},u.prototype.prependOnceListener=function(t,e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,l(this,t,e)),this},u.prototype.removeListener=function(t,e){var r,n,o,i,s;if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(void 0===(n=this._events))return this;if(void 0===(r=n[t]))return this;if(r===e||r.listener===e)0===--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!==typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===e||r[i].listener===e){s=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,o),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,s||e)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0===--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},u.prototype.listeners=function(t){return h(this,t,!0)},u.prototype.rawListeners=function(t){return h(this,t,!1)},u.listenerCount=function(t,e){return"function"===typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},u.prototype.listenerCount=p,u.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},38:function(t,e){"function"===typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},39:function(t,e){t.exports=function(t){var e,r,n;if(null!=t&&"function"!==typeof t)throw new Error("cb must be a function");null==t&&"undefined"!==typeof Promise&&(e=new Promise(function(t,e){r=t,n=e}));function o(o,i){if(e)o?n(o):r(i);else if(t)t(o,i);else if(o)throw o}return o.promise=e,o}},5:function(t,e,r){"use strict";function n(t,e,r,n,o,i,s){try{var u=t[i](s),a=u.value}catch(c){return void r(c)}u.done?e(a):Promise.resolve(a).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var s=t.apply(e,r);function u(t){n(s,o,i,u,a,"next",t)}function a(t){n(s,o,i,u,a,"throw",t)}u(void 0)})}}r.d(e,"a",function(){return o})},7:function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(a){o=!0,i=a}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(e,"a",function(){return n})},9:function(t,e,r){t.exports=a;var n=r(37).EventEmitter,o=r(38),i=r(39),s="undefined"===typeof window?self:window,u=s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB;function a(t,e,r){var o=this;if("string"!==typeof t)throw new Error("A name must be supplied of type string");if(!u)throw new Error("IndexedDB not supported");if("function"===typeof e)return new a(t,null,e);if(!(o instanceof a))return new a(t,e,r);e||(e={}),n.call(o),o._db=null,o._closed=!1,o._channel=null,o._waiters=[];var i=e.channel||s.BroadcastChannel;i&&(o._channel=new i(t),o._channel.onmessage=function(t){"add"===t.data.method?o.emit("add",t.data):"set"===t.data.method?o.emit("set",t.data):"remove"===t.data.method&&o.emit("remove",t.data)});var c=u.open(t);function l(t){f(t),o._close(t.target.error)}function h(){o._close()}c.onerror=function(t){f(t),o._close(t.target.error),r&&r(t.target.error)},c.onsuccess=function(t){if(o._closed)t.target.result.close();else{for(var e in o._db=t.target.result,o._db.onclose=h,o._db.onerror=l,o._waiters)o._waiters[e]._init(null);o._waiters=null,r&&r(null),o.emit("open")}},c.onupgradeneeded=function(t){t.target.result.createObjectStore("kv",{autoIncrement:!0})},o.on("newListener",function(t){if("add"!==t&&"set"!==t&&"remove"!==t)return;if(!o._channel)return o.emit("error",new Error("No BroadcastChannel support"))})}function c(t,e,r){if("function"===typeof e)return new c(t,null,e);if(this._kvStore=t,this._mode=e||"readwrite",this._objectStore=null,this._waiters=null,this.finished=!1,this.onfinish=i(r),this.done=this.onfinish.promise,"readonly"!==this._mode&&"readwrite"!==this._mode)throw new Error('mode must be either "readonly" or "readwrite"')}function f(t,e){if(null==e)return f(null,t);e.preventDefault(),e.stopPropagation(),t&&t(e.target.error)}a.INDEXEDDB_SUPPORT=null!=u,a.BROADCAST_SUPPORT=null!=s.BroadcastChannel,o(a,n),a.prototype.get=function(t,e){return this.transaction("readonly").get(t,e)},a.prototype.getMultiple=function(t,e){return this.transaction("readonly").getMultiple(t,e)},a.prototype.set=function(t,e,r){r=i(r);var n=null;return this.transaction("readwrite",function(t){r(n=n||t)}).set(t,e,function(t){n=t}),r.promise},a.prototype.json=function(t,e){return this.transaction("readonly").json(t,e)},a.prototype.keys=function(t,e){return this.transaction("readonly").keys(t,e)},a.prototype.values=function(t,e){return this.transaction("readonly").values(t,e)},a.prototype.remove=function(t,e){e=i(e);var r=null;return this.transaction("readwrite",function(t){e(r=r||t)}).remove(t,function(t){r=t}),e.promise},a.prototype.clear=function(t){t=i(t);var e=null;return this.transaction("readwrite",function(r){t(e=e||r)}).clear(function(t){e=t}),t.promise},a.prototype.count=function(t,e){return this.transaction("readonly").count(t,e)},a.prototype.add=function(t,e,r){r=i(r);var n=null;return this.transaction("readwrite",function(t){r(n=n||t)}).add(t,e,function(t){n=t}),r.promise},a.prototype.iterator=function(t,e){return this.transaction("readonly").iterator(t,e)},a.prototype.transaction=function(t,e){if(this._closed)throw new Error("Database is closed");var r=new c(this,t,e);return this._db?r._init(null):this._waiters.push(r),r},a.prototype.close=function(){this._close()},a.prototype._close=function(t){if(!this._closed){for(var e in this._closed=!0,this._db&&this._db.close(),this._channel&&this._channel.close(),this._db=null,this._channel=null,t&&this.emit("error",t),this.emit("close"),this._waiters)this._waiters[e]._init(t||new Error("Database is closed"));this._waiters=null,this.removeAllListeners()}},c.prototype._init=function(t){var e=this;if(!e.finished){if(t)return e._close(t);var r=e._kvStore._db.transaction("kv",e._mode);for(var n in r.oncomplete=function(){e._close(null)},r.onerror=o,r.onabort=o,e._objectStore=r.objectStore("kv"),e._waiters)e._waiters[n](null,e._objectStore);e._waiters=null}function o(t){f(t),e._close(t.target.error)}},c.prototype._getObjectStore=function(t){if(this.finished)throw new Error("Transaction is finished");if(this._objectStore)return t(null,this._objectStore);this._waiters=this._waiters||[],this._waiters.push(t)},c.prototype.set=function(t,e,r){var n=this;if(null==t||null==e)throw new Error("A key and value must be given");return r=i(r),n._getObjectStore(function(o,i){if(o)return r(o);try{var s=i.put(e,t)}catch(u){return r(u)}s.onerror=f.bind(this,r),s.onsuccess=function(){n._kvStore._channel&&n._kvStore._channel.postMessage({method:"set",key:t,value:e}),r(null)}}),r.promise},c.prototype.add=function(t,e,r){var n=this;if(null==e&&null!=t)return n.add(void 0,t,r);if("function"===typeof e||null==e&&null==r)return n.add(void 0,t,e);if(null==e)throw new Error("A value must be provided as an argument");return r=i(r),n._getObjectStore(function(o,i){if(o)return r(o);try{var s=null==t?i.add(e):i.add(e,t)}catch(u){return r(u)}s.onerror=f.bind(this,r),s.onsuccess=function(){n._kvStore._channel&&n._kvStore._channel.postMessage({method:"add",key:t,value:e}),r(null)}}),r.promise},c.prototype.get=function(t,e){if(null==t)throw new Error("A key must be given as an argument");return e=i(e),this._getObjectStore(function(r,n){if(r)return e(r);try{var o=n.get(t)}catch(i){return e(i)}o.onerror=f.bind(this,e),o.onsuccess=function(t){e(null,t.target.result)}}),e.promise},c.prototype.getMultiple=function(t,e){if(null==t)throw new Error("An array of keys must be given as an argument");return e=i(e),0===t.length?(e(null,[]),e.promise):(this._getObjectStore(function(r,n){if(r)return e(r);var o=t.slice().sort(),i=0,s={},u=function(){return t.map(function(t){return s[t]})},a=n.openCursor();a.onerror=f.bind(this,e),a.onsuccess=function(t){var r=t.target.result;if(r){for(var n=r.key;n>o[i];)if(++i===o.length)return void e(null,u());n===o[i]?(s[n]=r.value,r.continue()):r.continue(o[i])}else e(null,u())}}),e.promise)},c.prototype.json=function(t,e){if("function"===typeof t)return this.json(null,t);e=i(e);var r={};return this.iterator(t,function(t,n){if(t)return e(t);n?(r[n.key]=n.value,n.continue()):e(null,r)}),e.promise},c.prototype.keys=function(t,e){if("function"===typeof t)return this.keys(null,t);e=i(e);var r=[];return this.iterator(t,function(t,n){if(t)return e(t);n?(r.push(n.key),n.continue()):e(null,r)}),e.promise},c.prototype.values=function(t,e){if("function"===typeof t)return this.values(null,t);e=i(e);var r=[];return this.iterator(t,function(t,n){if(t)return e(t);n?(r.push(n.value),n.continue()):e(null,r)}),e.promise},c.prototype.remove=function(t,e){var r=this;if(null==t)throw new Error("A key must be given as an argument");return e=i(e),r._getObjectStore(function(n,o){if(n)return e(n);try{var i=o.delete(t)}catch(s){return e(s)}i.onerror=f.bind(this,e),i.onsuccess=function(){r._kvStore._channel&&r._kvStore._channel.postMessage({method:"remove",key:t}),e(null)}}),e.promise},c.prototype.clear=function(t){return t=i(t),this._getObjectStore(function(e,r){if(e)return t(e);try{var n=r.clear()}catch(o){return t(o)}n.onerror=f.bind(this,t),n.onsuccess=function(){t(null)}}),t.promise},c.prototype.count=function(t,e){return"function"===typeof t?this.count(null,t):(e=i(e),this._getObjectStore(function(r,n){if(r)return e(r);try{var o=null==t?n.count():n.count(t)}catch(i){return e(i)}o.onerror=f.bind(this,e),o.onsuccess=function(t){e(null,t.target.result)}}),e.promise)},c.prototype.iterator=function(t,e){if("function"===typeof t)return this.iterator(null,t);if("function"!==typeof e)throw new Error("A function must be given");this._getObjectStore(function(r,n){if(r)return e(r);try{var o=null==t?n.openCursor():n.openCursor(t)}catch(i){return e(i)}o.onerror=f.bind(this,e),o.onsuccess=function(t){var r=t.target.result;e(null,r)}})},c.prototype.abort=function(){if(this.finished)throw new Error("Transaction is finished");this._objectStore&&this._objectStore.transaction.abort(),this._close(new Error("Transaction aborted"))},c.prototype._close=function(t){if(!this.finished){for(var e in this.finished=!0,this._kvStore=null,this._objectStore=null,this._waiters)this._waiters[e](t||new Error("Transaction is finished"));this._waiters=null,this.onfinish&&this.onfinish(t),this.onfinish=null}}}}]);
//# sourceMappingURL=0.bfbf495f.chunk.js.map