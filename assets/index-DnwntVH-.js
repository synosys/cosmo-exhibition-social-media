(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Rd={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function ib(){if(Av)return ml;Av=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:i,type:r,key:c,ref:o!==void 0?o:null,props:u}}return ml.Fragment=t,ml.jsx=n,ml.jsxs=n,ml}var wv;function ab(){return wv||(wv=1,Rd.exports=ib()),Rd.exports}var gt=ab(),Cd={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function rb(){if(Rv)return me;Rv=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(D,it,wt){this.props=D,this.context=it,this.refs=b,this.updater=wt||x}S.prototype.isReactComponent={},S.prototype.setState=function(D,it){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,it,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(D,it,wt){this.props=D,this.context=it,this.refs=b,this.updater=wt||x}var N=L.prototype=new y;N.constructor=L,E(N,S.prototype),N.isPureReactComponent=!0;var w=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function B(D,it,wt,_t,J,St){return wt=St.ref,{$$typeof:i,type:D,key:it,ref:wt!==void 0?wt:null,props:St}}function X(D,it){return B(D.type,it,void 0,void 0,void 0,D.props)}function U(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function C(D){var it={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(wt){return it[wt]})}var H=/\/+/g;function j(D,it){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):it.toString(36)}function et(){}function pt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(et,et):(D.status="pending",D.then(function(it){D.status==="pending"&&(D.status="fulfilled",D.value=it)},function(it){D.status==="pending"&&(D.status="rejected",D.reason=it)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function dt(D,it,wt,_t,J){var St=typeof D;(St==="undefined"||St==="boolean")&&(D=null);var nt=!1;if(D===null)nt=!0;else switch(St){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(D.$$typeof){case i:case t:nt=!0;break;case g:return nt=D._init,dt(nt(D._payload),it,wt,_t,J)}}if(nt)return J=J(D),nt=_t===""?"."+j(D,0):_t,w(J)?(wt="",nt!=null&&(wt=nt.replace(H,"$&/")+"/"),dt(J,it,wt,"",function(vt){return vt})):J!=null&&(U(J)&&(J=X(J,wt+(J.key==null||D&&D.key===J.key?"":(""+J.key).replace(H,"$&/")+"/")+nt)),it.push(J)),1;nt=0;var Et=_t===""?".":_t+":";if(w(D))for(var Ut=0;Ut<D.length;Ut++)_t=D[Ut],St=Et+j(_t,Ut),nt+=dt(_t,it,wt,St,J);else if(Ut=_(D),typeof Ut=="function")for(D=Ut.call(D),Ut=0;!(_t=D.next()).done;)_t=_t.value,St=Et+j(_t,Ut++),nt+=dt(_t,it,wt,St,J);else if(St==="object"){if(typeof D.then=="function")return dt(pt(D),it,wt,_t,J);throw it=String(D),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return nt}function F(D,it,wt){if(D==null)return D;var _t=[],J=0;return dt(D,_t,"","",function(St){return it.call(wt,St,J++)}),_t}function Y(D){if(D._status===-1){var it=D._result;it=it(),it.then(function(wt){(D._status===0||D._status===-1)&&(D._status=1,D._result=wt)},function(wt){(D._status===0||D._status===-1)&&(D._status=2,D._result=wt)}),D._status===-1&&(D._status=0,D._result=it)}if(D._status===1)return D._result.default;throw D._result}var W=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function ht(){}return me.Children={map:F,forEach:function(D,it,wt){F(D,function(){it.apply(this,arguments)},wt)},count:function(D){var it=0;return F(D,function(){it++}),it},toArray:function(D){return F(D,function(it){return it})||[]},only:function(D){if(!U(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},me.Component=S,me.Fragment=n,me.Profiler=o,me.PureComponent=L,me.StrictMode=r,me.Suspense=p,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,me.__COMPILER_RUNTIME={__proto__:null,c:function(D){return I.H.useMemoCache(D)}},me.cache=function(D){return function(){return D.apply(null,arguments)}},me.cloneElement=function(D,it,wt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var _t=E({},D.props),J=D.key,St=void 0;if(it!=null)for(nt in it.ref!==void 0&&(St=void 0),it.key!==void 0&&(J=""+it.key),it)!P.call(it,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&it.ref===void 0||(_t[nt]=it[nt]);var nt=arguments.length-2;if(nt===1)_t.children=wt;else if(1<nt){for(var Et=Array(nt),Ut=0;Ut<nt;Ut++)Et[Ut]=arguments[Ut+2];_t.children=Et}return B(D.type,J,void 0,void 0,St,_t)},me.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},me.createElement=function(D,it,wt){var _t,J={},St=null;if(it!=null)for(_t in it.key!==void 0&&(St=""+it.key),it)P.call(it,_t)&&_t!=="key"&&_t!=="__self"&&_t!=="__source"&&(J[_t]=it[_t]);var nt=arguments.length-2;if(nt===1)J.children=wt;else if(1<nt){for(var Et=Array(nt),Ut=0;Ut<nt;Ut++)Et[Ut]=arguments[Ut+2];J.children=Et}if(D&&D.defaultProps)for(_t in nt=D.defaultProps,nt)J[_t]===void 0&&(J[_t]=nt[_t]);return B(D,St,void 0,void 0,null,J)},me.createRef=function(){return{current:null}},me.forwardRef=function(D){return{$$typeof:h,render:D}},me.isValidElement=U,me.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:Y}},me.memo=function(D,it){return{$$typeof:d,type:D,compare:it===void 0?null:it}},me.startTransition=function(D){var it=I.T,wt={};I.T=wt;try{var _t=D(),J=I.S;J!==null&&J(wt,_t),typeof _t=="object"&&_t!==null&&typeof _t.then=="function"&&_t.then(ht,W)}catch(St){W(St)}finally{I.T=it}},me.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},me.use=function(D){return I.H.use(D)},me.useActionState=function(D,it,wt){return I.H.useActionState(D,it,wt)},me.useCallback=function(D,it){return I.H.useCallback(D,it)},me.useContext=function(D){return I.H.useContext(D)},me.useDebugValue=function(){},me.useDeferredValue=function(D,it){return I.H.useDeferredValue(D,it)},me.useEffect=function(D,it,wt){var _t=I.H;if(typeof wt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _t.useEffect(D,it)},me.useId=function(){return I.H.useId()},me.useImperativeHandle=function(D,it,wt){return I.H.useImperativeHandle(D,it,wt)},me.useInsertionEffect=function(D,it){return I.H.useInsertionEffect(D,it)},me.useLayoutEffect=function(D,it){return I.H.useLayoutEffect(D,it)},me.useMemo=function(D,it){return I.H.useMemo(D,it)},me.useOptimistic=function(D,it){return I.H.useOptimistic(D,it)},me.useReducer=function(D,it,wt){return I.H.useReducer(D,it,wt)},me.useRef=function(D){return I.H.useRef(D)},me.useState=function(D){return I.H.useState(D)},me.useSyncExternalStore=function(D,it,wt){return I.H.useSyncExternalStore(D,it,wt)},me.useTransition=function(){return I.H.useTransition()},me.version="19.1.0",me}var Cv;function Am(){return Cv||(Cv=1,Cd.exports=rb()),Cd.exports}var Wt=Am(),Dd={exports:{}},gl={},Ud={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function sb(){return Dv||(Dv=1,function(i){function t(F,Y){var W=F.length;F.push(Y);t:for(;0<W;){var ht=W-1>>>1,D=F[ht];if(0<o(D,Y))F[ht]=Y,F[W]=D,W=ht;else break t}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],W=F.pop();if(W!==Y){F[0]=W;t:for(var ht=0,D=F.length,it=D>>>1;ht<it;){var wt=2*(ht+1)-1,_t=F[wt],J=wt+1,St=F[J];if(0>o(_t,W))J<D&&0>o(St,_t)?(F[ht]=St,F[J]=W,ht=J):(F[ht]=_t,F[wt]=W,ht=wt);else if(J<D&&0>o(St,W))F[ht]=St,F[J]=W,ht=J;else break t}}return Y}function o(F,Y){var W=F.sortIndex-Y.sortIndex;return W!==0?W:F.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();i.unstable_now=function(){return c.now()-h}}var p=[],d=[],g=1,v=null,_=3,x=!1,E=!1,b=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var Y=n(d);Y!==null;){if(Y.callback===null)r(d);else if(Y.startTime<=F)r(d),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=n(d)}}function I(F){if(b=!1,w(F),!E)if(n(p)!==null)E=!0,P||(P=!0,j());else{var Y=n(d);Y!==null&&dt(I,Y.startTime-F)}}var P=!1,B=-1,X=5,U=-1;function C(){return S?!0:!(i.unstable_now()-U<X)}function H(){if(S=!1,P){var F=i.unstable_now();U=F;var Y=!0;try{t:{E=!1,b&&(b=!1,L(B),B=-1),x=!0;var W=_;try{e:{for(w(F),v=n(p);v!==null&&!(v.expirationTime>F&&C());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,_=v.priorityLevel;var D=ht(v.expirationTime<=F);if(F=i.unstable_now(),typeof D=="function"){v.callback=D,w(F),Y=!0;break e}v===n(p)&&r(p),w(F)}else r(p);v=n(p)}if(v!==null)Y=!0;else{var it=n(d);it!==null&&dt(I,it.startTime-F),Y=!1}}break t}finally{v=null,_=W,x=!1}Y=void 0}}finally{Y?j():P=!1}}}var j;if(typeof N=="function")j=function(){N(H)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,pt=et.port2;et.port1.onmessage=H,j=function(){pt.postMessage(null)}}else j=function(){y(H,0)};function dt(F,Y){B=y(function(){F(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(F){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var W=_;_=Y;try{return F()}finally{_=W}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=_;_=F;try{return Y()}finally{_=W}},i.unstable_scheduleCallback=function(F,Y,W){var ht=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ht+W:ht):W=ht,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=W+D,F={id:g++,callback:Y,priorityLevel:F,startTime:W,expirationTime:D,sortIndex:-1},W>ht?(F.sortIndex=W,t(d,F),n(p)===null&&F===n(d)&&(b?(L(B),B=-1):b=!0,dt(I,W-ht))):(F.sortIndex=D,t(p,F),E||x||(E=!0,P||(P=!0,j()))),F},i.unstable_shouldYield=C,i.unstable_wrapCallback=function(F){var Y=_;return function(){var W=_;_=Y;try{return F.apply(this,arguments)}finally{_=W}}}}(Nd)),Nd}var Uv;function ob(){return Uv||(Uv=1,Ud.exports=sb()),Ud.exports}var Ld={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function lb(){if(Nv)return On;Nv=1;var i=Am();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,g)},On.flushSync=function(p){var d=c.T,g=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=d,r.p=g,r.d.f()}},On.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},On.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},On.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},On.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},On.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},On.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},On.requestFormReset=function(p){r.d.r(p)},On.unstable_batchedUpdates=function(p,d){return p(d)},On.useFormState=function(p,d,g){return c.H.useFormState(p,d,g)},On.useFormStatus=function(){return c.H.useHostTransitionStatus()},On.version="19.1.0",On}var Lv;function ub(){if(Lv)return Ld.exports;Lv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Ld.exports=lb(),Ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function cb(){if(Ov)return gl;Ov=1;var i=ob(),t=Am(),n=ub();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var a=e,s=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(s=a.return),e=a.return;while(e)}return a.tag===3?s:null}function c(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function p(e){var a=e.alternate;if(!a){if(a=u(e),a===null)throw Error(r(188));return a!==e?null:e}for(var s=e,l=a;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),e;if(m===l)return h(f),a;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,A=f.child;A;){if(A===s){M=!0,s=f,l=m;break}if(A===l){M=!0,l=f,s=m;break}A=A.sibling}if(!M){for(A=m.child;A;){if(A===s){M=!0,s=m,l=f;break}if(A===l){M=!0,l=m,s=f;break}A=A.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:a}function d(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=d(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case N:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case w:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return a=e.displayName||null,a!==null?a:pt(e.type)||"Memo";case X:a=e._payload,e=e._init;try{return pt(e(a))}catch{}}return null}var dt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ht=[],D=-1;function it(e){return{current:e}}function wt(e){0>D||(e.current=ht[D],ht[D]=null,D--)}function _t(e,a){D++,ht[D]=e.current,e.current=a}var J=it(null),St=it(null),nt=it(null),Et=it(null);function Ut(e,a){switch(_t(nt,a),_t(St,e),_t(J,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?tv(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=tv(a),e=ev(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}wt(J),_t(J,e)}function vt(){wt(J),wt(St),wt(nt)}function st(e){e.memoizedState!==null&&_t(Et,e);var a=J.current,s=ev(a,e.type);a!==s&&(_t(St,e),_t(J,s))}function bt(e){St.current===e&&(wt(J),wt(St)),Et.current===e&&(wt(Et),cl._currentValue=W)}var Q=Object.prototype.hasOwnProperty,zt=i.unstable_scheduleCallback,z=i.unstable_cancelCallback,Zt=i.unstable_shouldYield,Gt=i.unstable_requestPaint,Yt=i.unstable_now,qt=i.unstable_getCurrentPriorityLevel,de=i.unstable_ImmediatePriority,Kt=i.unstable_UserBlockingPriority,O=i.unstable_NormalPriority,T=i.unstable_LowPriority,rt=i.unstable_IdlePriority,Tt=i.log,Rt=i.unstable_setDisableYieldValue,mt=null,Ct=null;function Lt(e){if(typeof Tt=="function"&&Rt(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(mt,e)}catch{}}var Pt=Math.clz32?Math.clz32:Xt,ce=Math.log,Nt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(ce(e)/Nt|0)|0}var $t=256,te=4194304;function Dt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ee(e,a,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=Dt(l):(M&=A,M!==0?f=Dt(M):s||(s=A&~e,s!==0&&(f=Dt(s))))):(A=l&~m,A!==0?f=Dt(A):M!==0?f=Dt(M):s||(s=l&~e,s!==0&&(f=Dt(s)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,s=a&-a,m>=s||m===32&&(s&4194048)!==0)?a:f}function Jt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function pe(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=$t;return $t<<=1,($t&4194048)===0&&($t=256),e}function Ft(){var e=te;return te<<=1,(te&62914560)===0&&(te=4194304),e}function ft(e){for(var a=[],s=0;31>s;s++)a.push(e);return a}function yt(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,a,s,l,f,m){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(s=M&~s;0<s;){var xt=31-Pt(s),At=1<<xt;A[xt]=0,G[xt]=-1;var ot=at[xt];if(ot!==null)for(at[xt]=null,xt=0;xt<ot.length;xt++){var lt=ot[xt];lt!==null&&(lt.lane&=-536870913)}s&=~At}l!==0&&It(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~a))}function It(e,a,s){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Pt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function he(e,a){var s=e.entangledLanes|=a;for(e=e.entanglements;s;){var l=31-Pt(s),f=1<<l;f&a|e[l]&a&&(e[l]|=a),s&=~f}}function Fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:yv(e.type))}function Fn(e,a){var s=Y.p;try{return Y.p=e,a()}finally{Y.p=s}}var Ze=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Ze,hn="__reactProps$"+Ze,Dn="__reactContainer$"+Ze,Xi="__reactEvents$"+Ze,dr="__reactListeners$"+Ze,jl="__reactHandles$"+Ze,pr="__reactResources$"+Ze,Ra="__reactMarker$"+Ze;function Ca(e){delete e[Ke],delete e[hn],delete e[Xi],delete e[dr],delete e[jl]}function Wi(e){var a=e[Ke];if(a)return a;for(var s=e.parentNode;s;){if(a=s[Dn]||s[Ke]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(e=rv(e);e!==null;){if(s=e[Ke])return s;e=rv(e)}return a}e=s,s=e.parentNode}return null}function Yi(e){if(e=e[Ke]||e[Dn]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function mr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function Da(e){var a=e[pr];return a||(a=e[pr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ln(e){e[Ra]=!0}var Zl=new Set,Kl={};function qi(e,a){R(e,a),R(e+"Capture",a)}function R(e,a){for(Kl[e]=a,e=0;e<a.length;e++)Zl.add(a[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ut={},ct={};function K(e){return Q.call(ct,e)?!0:Q.call(ut,e)?!1:Z.test(e)?ct[e]=!0:(ut[e]=!0,!1)}function Ot(e,a,s){if(K(a))if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+s)}}function Ht(e,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+s)}}function Vt(e,a,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(a,s,""+l)}}var jt,le;function ae(e){if(jt===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);jt=a&&a[1]||"",le=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+le}var ie=!1;function ye(e,a){if(!e||ie)return"";ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var At=function(){throw Error()};if(Object.defineProperty(At.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(At,[])}catch(lt){var ot=lt}Reflect.construct(e,[],At)}else{try{At.call()}catch(lt){ot=lt}e.call(At.prototype)}}else{try{throw Error()}catch(lt){ot=lt}(At=e())&&typeof At.catch=="function"&&At.catch(function(){})}}catch(lt){if(lt&&ot&&typeof lt.stack=="string")return[lt.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],A=m[1];if(M&&A){var G=M.split(`
`),at=A.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<at.length&&!at[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===at.length)for(l=G.length-1,f=at.length-1;1<=l&&0<=f&&G[l]!==at[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==at[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==at[f]){var xt=`
`+G[l].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=l&&0<=f);break}}}finally{ie=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ae(s):""}function De(e){switch(e.tag){case 26:case 27:case 5:return ae(e.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return ae("Activity");default:return""}}function Qe(e){try{var a="";do a+=De(e),e=e.return;while(e);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function re(e){var a=we(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),l=""+e[a];if(!e.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(e,a,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function en(e){e._valueTracker||(e._valueTracker=re(e))}function Ce(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var s=a.getValue(),l="";return e&&(l=we(e)?e.checked?"true":"false":e.value),e=l,e!==s?(a.setValue(e),!0):!1}function Un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ua=/[\n"\\]/g;function Ye(e){return e.replace(Ua,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ji(e,a,s,l,f,m,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),a!=null?M==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ae(a)):e.value!==""+Ae(a)&&(e.value=""+Ae(a)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),a!=null?Nn(e,M,Ae(a)):s!=null?Nn(e,M,Ae(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Ae(A):e.removeAttribute("name")}function Xe(e,a,s,l,f,m,M,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;s=s!=null?""+Ae(s):"",a=a!=null?""+Ae(a):s,A||a===e.value||(e.value=a),e.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Nn(e,a,s){a==="number"&&Un(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function dn(e,a,s,l){if(e=e.options,a){a={};for(var f=0;f<s.length;f++)a["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=a.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Ae(s),a=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}a!==null||e[f].disabled||(a=e[f])}a!==null&&(a.selected=!0)}}function yn(e,a,s){if(a!=null&&(a=""+Ae(a),a!==e.value&&(e.value=a),s==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=s!=null?""+Ae(s):""}function An(e,a,s,l){if(a==null){if(l!=null){if(s!=null)throw Error(r(92));if(dt(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),a=s}s=Ae(a),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Li(e,a){if(a){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=a;return}}e.textContent=a}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tg(e,a,s){var l=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,s):typeof s!="number"||s===0||Zi.has(a)?a==="float"?e.cssFloat=s:e[a]=(""+s).trim():e[a]=s+"px"}function eg(e,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&s[f]!==l&&tg(e,f,l)}else for(var m in a)a.hasOwnProperty(m)&&tg(e,m,a[m])}function wf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(e){return nM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Rf=null;function Cf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var es=null,ns=null;function ng(e){var a=Yi(e);if(a&&(e=a.stateNode)){var s=e[hn]||null;t:switch(e=a.stateNode,a.type){case"input":if(ji(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ye(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var l=s[a];if(l!==e&&l.form===e.form){var f=l[hn]||null;if(!f)throw Error(r(90));ji(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<s.length;a++)l=s[a],l.form===e.form&&Ce(l)}break t;case"textarea":yn(e,s.value,s.defaultValue);break t;case"select":a=s.value,a!=null&&dn(e,!!s.multiple,a,!1)}}}var Df=!1;function ig(e,a,s){if(Df)return e(a,s);Df=!0;try{var l=e(a);return l}finally{if(Df=!1,(es!==null||ns!==null)&&(zu(),es&&(a=es,e=ns,ns=es=null,ng(a),e)))for(a=0;a<e.length;a++)ng(e[a])}}function Eo(e,a){var s=e.stateNode;if(s===null)return null;var l=s[hn]||null;if(l===null)return null;s=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if(Ki)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{Uf=!1}var Na=null,Nf=null,$l=null;function ag(){if($l)return $l;var e,a=Nf,s=a.length,l,f="value"in Na?Na.value:Na.textContent,m=f.length;for(e=0;e<s&&a[e]===f[e];e++);var M=s-e;for(l=1;l<=M&&a[s-l]===f[m-l];l++);return $l=f.slice(e,1<l?1-l:void 0)}function Jl(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function tu(){return!0}function rg(){return!1}function kn(e){function a(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?tu:rg,this.isPropagationStopped=rg,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),a}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=kn(gr),To=g({},gr,{view:0,detail:0}),iM=kn(To),Lf,Of,Ao,nu=g({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(Lf=e.screenX-Ao.screenX,Of=e.screenY-Ao.screenY):Of=Lf=0,Ao=e),Lf)},movementY:function(e){return"movementY"in e?e.movementY:Of}}),sg=kn(nu),aM=g({},nu,{dataTransfer:0}),rM=kn(aM),sM=g({},To,{relatedTarget:0}),Pf=kn(sM),oM=g({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),lM=kn(oM),uM=g({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cM=kn(uM),fM=g({},gr,{data:0}),og=kn(fM),hM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mM(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=pM[e])?!!a[e]:!1}function zf(){return mM}var gM=g({},To,{key:function(e){if(e.key){var a=hM[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(e){return e.type==="keypress"?Jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_M=kn(gM),vM=g({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lg=kn(vM),xM=g({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),yM=kn(xM),SM=g({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),MM=kn(SM),EM=g({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bM=kn(EM),TM=g({},gr,{newState:0,oldState:0}),AM=kn(TM),wM=[9,13,27,32],Ff=Ki&&"CompositionEvent"in window,wo=null;Ki&&"documentMode"in document&&(wo=document.documentMode);var RM=Ki&&"TextEvent"in window&&!wo,ug=Ki&&(!Ff||wo&&8<wo&&11>=wo),cg=" ",fg=!1;function hg(e,a){switch(e){case"keyup":return wM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var is=!1;function CM(e,a){switch(e){case"compositionend":return dg(a);case"keypress":return a.which!==32?null:(fg=!0,cg);case"textInput":return e=a.data,e===cg&&fg?null:e;default:return null}}function DM(e,a){if(is)return e==="compositionend"||!Ff&&hg(e,a)?(e=ag(),$l=Nf=Na=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ug&&a.locale!=="ko"?null:a.data;default:return null}}var UM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pg(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!UM[e.type]:a==="textarea"}function mg(e,a,s,l){es?ns?ns.push(l):ns=[l]:es=l,a=Vu(a,"onChange"),0<a.length&&(s=new eu("onChange","change",null,s,l),e.push({event:s,listeners:a}))}var Ro=null,Co=null;function NM(e){Z_(e,0)}function iu(e){var a=mr(e);if(Ce(a))return e}function gg(e,a){if(e==="change")return a}var _g=!1;if(Ki){var Bf;if(Ki){var If="oninput"in document;if(!If){var vg=document.createElement("div");vg.setAttribute("oninput","return;"),If=typeof vg.oninput=="function"}Bf=If}else Bf=!1;_g=Bf&&(!document.documentMode||9<document.documentMode)}function xg(){Ro&&(Ro.detachEvent("onpropertychange",yg),Co=Ro=null)}function yg(e){if(e.propertyName==="value"&&iu(Co)){var a=[];mg(a,Co,e,Cf(e)),ig(NM,a)}}function LM(e,a,s){e==="focusin"?(xg(),Ro=a,Co=s,Ro.attachEvent("onpropertychange",yg)):e==="focusout"&&xg()}function OM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return iu(Co)}function PM(e,a){if(e==="click")return iu(a)}function zM(e,a){if(e==="input"||e==="change")return iu(a)}function FM(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Kn=typeof Object.is=="function"?Object.is:FM;function Do(e,a){if(Kn(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var s=Object.keys(e),l=Object.keys(a);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Q.call(a,f)||!Kn(e[f],a[f]))return!1}return!0}function Sg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mg(e,a){var s=Sg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=a&&l>=a)return{node:s,offset:a-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Sg(s)}}function Eg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Eg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function bg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Un(e.document);a instanceof e.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)e=a.contentWindow;else break;a=Un(e.document)}return a}function Hf(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var BM=Ki&&"documentMode"in document&&11>=document.documentMode,as=null,Gf=null,Uo=null,Vf=!1;function Tg(e,a,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Vf||as==null||as!==Un(l)||(l=as,"selectionStart"in l&&Hf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Uo&&Do(Uo,l)||(Uo=l,l=Vu(Gf,"onSelect"),0<l.length&&(a=new eu("onSelect","select",null,a,s),e.push({event:a,listeners:l}),a.target=as)))}function _r(e,a){var s={};return s[e.toLowerCase()]=a.toLowerCase(),s["Webkit"+e]="webkit"+a,s["Moz"+e]="moz"+a,s}var rs={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},kf={},Ag={};Ki&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function vr(e){if(kf[e])return kf[e];if(!rs[e])return e;var a=rs[e],s;for(s in a)if(a.hasOwnProperty(s)&&s in Ag)return kf[e]=a[s];return e}var wg=vr("animationend"),Rg=vr("animationiteration"),Cg=vr("animationstart"),IM=vr("transitionrun"),HM=vr("transitionstart"),GM=vr("transitioncancel"),Dg=vr("transitionend"),Ug=new Map,Xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xf.push("scrollEnd");function yi(e,a){Ug.set(e,a),qi(a,[e])}var Ng=new WeakMap;function li(e,a){if(typeof e=="object"&&e!==null){var s=Ng.get(e);return s!==void 0?s:(a={value:e,source:a,stack:Qe(a)},Ng.set(e,a),a)}return{value:e,source:a,stack:Qe(a)}}var ui=[],ss=0,Wf=0;function au(){for(var e=ss,a=Wf=ss=0;a<e;){var s=ui[a];ui[a++]=null;var l=ui[a];ui[a++]=null;var f=ui[a];ui[a++]=null;var m=ui[a];if(ui[a++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&Lg(s,f,m)}}function ru(e,a,s,l){ui[ss++]=e,ui[ss++]=a,ui[ss++]=s,ui[ss++]=l,Wf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Yf(e,a,s,l){return ru(e,a,s,l),su(e)}function os(e,a){return ru(e,null,null,a),su(e)}function Lg(e,a,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&a!==null&&(f=31-Pt(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[a]:l.push(a),a.lane=s|536870912),m):null}function su(e){if(50<nl)throw nl=0,$h=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var ls={};function VM(e,a,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,a,s,l){return new VM(e,a,s,l)}function qf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,a){var s=e.alternate;return s===null?(s=Qn(e.tag,a,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=a,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,a=e.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Og(e,a){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,a=s.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ou(e,a,s,l,f,m){var M=0;if(l=e,typeof e=="function")qf(e)&&(M=1);else if(typeof e=="string")M=XE(e,s,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Qn(31,s,a,f),e.elementType=U,e.lanes=m,e;case E:return xr(s.children,f,m,a);case b:M=8,f|=24;break;case S:return e=Qn(12,s,a,f|2),e.elementType=S,e.lanes=m,e;case I:return e=Qn(13,s,a,f),e.elementType=I,e.lanes=m,e;case P:return e=Qn(19,s,a,f),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case N:M=10;break t;case L:M=9;break t;case w:M=11;break t;case B:M=14;break t;case X:M=16,l=null;break t}M=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return a=Qn(M,s,a,f),a.elementType=e,a.type=l,a.lanes=m,a}function xr(e,a,s,l){return e=Qn(7,e,l,a),e.lanes=s,e}function jf(e,a,s){return e=Qn(6,e,null,a),e.lanes=s,e}function Zf(e,a,s){return a=Qn(4,e.children!==null?e.children:[],e.key,a),a.lanes=s,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var us=[],cs=0,lu=null,uu=0,ci=[],fi=0,yr=null,$i=1,Ji="";function Sr(e,a){us[cs++]=uu,us[cs++]=lu,lu=e,uu=a}function Pg(e,a,s){ci[fi++]=$i,ci[fi++]=Ji,ci[fi++]=yr,yr=e;var l=$i;e=Ji;var f=32-Pt(l)-1;l&=~(1<<f),s+=1;var m=32-Pt(a)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,$i=1<<32-Pt(a)+f|s<<f|l,Ji=m+e}else $i=1<<m|s<<f|l,Ji=e}function Kf(e){e.return!==null&&(Sr(e,1),Pg(e,1,0))}function Qf(e){for(;e===lu;)lu=us[--cs],us[cs]=null,uu=us[--cs],us[cs]=null;for(;e===yr;)yr=ci[--fi],ci[fi]=null,Ji=ci[--fi],ci[fi]=null,$i=ci[--fi],ci[fi]=null}var Bn=null,nn=null,Oe=!1,Mr=null,Oi=!1,$f=Error(r(519));function Er(e){var a=Error(r(418,""));throw Oo(li(a,e)),$f}function zg(e){var a=e.stateNode,s=e.type,l=e.memoizedProps;switch(a[Ke]=e,a[hn]=l,s){case"dialog":Me("cancel",a),Me("close",a);break;case"iframe":case"object":case"embed":Me("load",a);break;case"video":case"audio":for(s=0;s<al.length;s++)Me(al[s],a);break;case"source":Me("error",a);break;case"img":case"image":case"link":Me("error",a),Me("load",a);break;case"details":Me("toggle",a);break;case"input":Me("invalid",a),Xe(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),en(a);break;case"select":Me("invalid",a);break;case"textarea":Me("invalid",a),An(a,l.value,l.defaultValue,l.children),en(a)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||l.suppressHydrationWarning===!0||J_(a.textContent,s)?(l.popover!=null&&(Me("beforetoggle",a),Me("toggle",a)),l.onScroll!=null&&Me("scroll",a),l.onScrollEnd!=null&&Me("scrollend",a),l.onClick!=null&&(a.onclick=ku),a=!0):a=!1,a||Er(e)}function Fg(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Bn=Bn.return}}function No(e){if(e!==Bn)return!1;if(!Oe)return Fg(e),Oe=!0,!1;var a=e.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||pd(e.type,e.memoizedProps)),s=!s),s&&nn&&Er(e),Fg(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(a===0){nn=Mi(e.nextSibling);break t}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;e=e.nextSibling}nn=null}}else a===27?(a=nn,ja(e.type)?(e=vd,vd=null,nn=e):nn=a):nn=Bn?Mi(e.stateNode.nextSibling):null;return!0}function Lo(){nn=Bn=null,Oe=!1}function Bg(){var e=Mr;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Mr=null),e}function Oo(e){Mr===null?Mr=[e]:Mr.push(e)}var Jf=it(null),br=null,ta=null;function La(e,a,s){_t(Jf,a._currentValue),a._currentValue=s}function ea(e){e._currentValue=Jf.current,wt(Jf)}function th(e,a,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===s)break;e=e.return}}function eh(e,a,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=f;for(var G=0;G<a.length;G++)if(A.context===a[G]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),th(m.return,s,e),l||(M=null);break t}m=A.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),th(M,s,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Po(e,a,s,l){e=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=f.type;Kn(f.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(f===Et.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}f=f.return}e!==null&&eh(a,e,s,l),a.flags|=262144}function cu(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Tr(e){br=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return Ig(br,e)}function fu(e,a){return br===null&&Tr(e),Ig(e,a)}function Ig(e,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},ta===null){if(e===null)throw Error(r(308));ta=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ta=ta.next=a;return s}var kM=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(s){return s()})}},XM=i.unstable_scheduleCallback,WM=i.unstable_NormalPriority,pn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nh(){return{controller:new kM,data:new Map,refCount:0}}function zo(e){e.refCount--,e.refCount===0&&XM(WM,function(){e.controller.abort()})}var Fo=null,ih=0,fs=0,hs=null;function YM(e,a){if(Fo===null){var s=Fo=[];ih=0,fs=rd(),hs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ih++,a.then(Hg,Hg),a}function Hg(){if(--ih===0&&Fo!==null){hs!==null&&(hs.status="fulfilled");var e=Fo;Fo=null,fs=0,hs=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function qM(e,a){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<s.length;f++)(0,s[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Gg=F.S;F.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&YM(e,a),Gg!==null&&Gg(e,a)};var Ar=it(null);function ah(){var e=Ar.current;return e!==null?e:qe.pooledCache}function hu(e,a){a===null?_t(Ar,Ar.current):_t(Ar,a.pool)}function Vg(){var e=ah();return e===null?null:{parent:pn._currentValue,pool:e}}var Bo=Error(r(460)),kg=Error(r(474)),du=Error(r(542)),rh={then:function(){}};function Xg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pu(){}function Wg(e,a,s){switch(s=e[s],s===void 0?e.push(a):s!==a&&(a.then(pu,pu),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,qg(e),e;default:if(typeof a.status=="string")a.then(pu,pu);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,qg(e),e}throw Io=a,Bo}}var Io=null;function Yg(){if(Io===null)throw Error(r(459));var e=Io;return Io=null,e}function qg(e){if(e===Bo||e===du)throw Error(r(483))}var Oa=!1;function sh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oh(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,a,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=su(e),Lg(e,null,s),a}return ru(e,l,a,s),su(e)}function Ho(e,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,s|=l,a.lanes=s,he(e,s)}}function lh(e,a){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=a:m=m.next=a}else f=m=a;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=a:e.next=a,s.lastBaseUpdate=a}var uh=!1;function Go(){if(uh){var e=hs;if(e!==null)throw e}}function Vo(e,a,s,l){uh=!1;var f=e.updateQueue;Oa=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var G=A,at=G.next;G.next=null,M===null?m=at:M.next=at,M=G;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,A=xt.lastBaseUpdate,A!==M&&(A===null?xt.firstBaseUpdate=at:A.next=at,xt.lastBaseUpdate=G))}if(m!==null){var At=f.baseState;M=0,xt=at=G=null,A=m;do{var ot=A.lane&-536870913,lt=ot!==A.lane;if(lt?(Re&ot)===ot:(l&ot)===ot){ot!==0&&ot===fs&&(uh=!0),xt!==null&&(xt=xt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ue=e,se=A;ot=a;var He=s;switch(se.tag){case 1:if(ue=se.payload,typeof ue=="function"){At=ue.call(He,At,ot);break t}At=ue;break t;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=se.payload,ot=typeof ue=="function"?ue.call(He,At,ot):ue,ot==null)break t;At=g({},At,ot);break t;case 2:Oa=!0}}ot=A.callback,ot!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[ot]:lt.push(ot))}else lt={lane:ot,tag:A.tag,payload:A.payload,callback:A.callback,next:null},xt===null?(at=xt=lt,G=At):xt=xt.next=lt,M|=ot;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);xt===null&&(G=At),f.baseState=G,f.firstBaseUpdate=at,f.lastBaseUpdate=xt,m===null&&(f.shared.lanes=0),Xa|=M,e.lanes=M,e.memoizedState=At}}function jg(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function Zg(e,a){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)jg(s[e],a)}var ds=it(null),mu=it(0);function Kg(e,a){e=la,_t(mu,e),_t(ds,a),la=e|a.baseLanes}function ch(){_t(mu,la),_t(ds,ds.current)}function fh(){la=mu.current,wt(ds),wt(mu)}var Fa=0,ve=null,Be=null,un=null,gu=!1,ps=!1,wr=!1,_u=0,ko=0,ms=null,jM=0;function rn(){throw Error(r(321))}function hh(e,a){if(a===null)return!1;for(var s=0;s<a.length&&s<e.length;s++)if(!Kn(e[s],a[s]))return!1;return!0}function dh(e,a,s,l,f,m){return Fa=m,ve=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,F.H=e===null||e.memoizedState===null?L0:O0,wr=!1,m=s(l,f),wr=!1,ps&&(m=$g(a,s,l,f)),Qg(e),m}function Qg(e){F.H=Eu;var a=Be!==null&&Be.next!==null;if(Fa=0,un=Be=ve=null,gu=!1,ko=0,ms=null,a)throw Error(r(300));e===null||Sn||(e=e.dependencies,e!==null&&cu(e)&&(Sn=!0))}function $g(e,a,s,l){ve=e;var f=0;do{if(ps&&(ms=null),ko=0,ps=!1,25<=f)throw Error(r(301));if(f+=1,un=Be=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=eE,m=a(s,l)}while(ps);return m}function ZM(){var e=F.H,a=e.useState()[0];return a=typeof a.then=="function"?Xo(a):a,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ve.flags|=1024),a}function ph(){var e=_u!==0;return _u=0,e}function mh(e,a,s){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~s}function gh(e){if(gu){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}gu=!1}Fa=0,un=Be=ve=null,ps=!1,ko=_u=0,ms=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ve.memoizedState=un=e:un=un.next=e,un}function cn(){if(Be===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var a=un===null?ve.memoizedState:un.next;if(a!==null)un=a,Be=e;else{if(e===null)throw ve.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},un===null?ve.memoizedState=un=e:un=un.next=e}return un}function _h(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(e){var a=ko;return ko+=1,ms===null&&(ms=[]),e=Wg(ms,e,a),a=ve,(un===null?a.memoizedState:un.next)===null&&(a=a.alternate,F.H=a===null||a.memoizedState===null?L0:O0),e}function vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xo(e);if(e.$$typeof===N)return Ln(e)}throw Error(r(438,String(e)))}function vh(e){var a=null,s=ve.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var l=ve.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=_h(),ve.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(e),l=0;l<e;l++)s[l]=C;return a.index++,s}function na(e,a){return typeof a=="function"?a(e):a}function xu(e){var a=cn();return xh(a,Be,e)}function xh(e,a,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}a.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{a=f.next;var A=M=null,G=null,at=a,xt=!1;do{var At=at.lane&-536870913;if(At!==at.lane?(Re&At)===At:(Fa&At)===At){var ot=at.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),At===fs&&(xt=!0);else if((Fa&ot)===ot){at=at.next,ot===fs&&(xt=!0);continue}else At={lane:0,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=At,M=m):G=G.next=At,ve.lanes|=ot,Xa|=ot;At=at.action,wr&&s(m,At),m=at.hasEagerState?at.eagerState:s(m,At)}else ot={lane:At,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=ot,M=m):G=G.next=ot,ve.lanes|=At,Xa|=At;at=at.next}while(at!==null&&at!==a);if(G===null?M=m:G.next=A,!Kn(m,e.memoizedState)&&(Sn=!0,xt&&(s=hs,s!==null)))throw s;e.memoizedState=m,e.baseState=M,e.baseQueue=G,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function yh(e){var a=cn(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=a.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=e(m,M.action),M=M.next;while(M!==f);Kn(m,a.memoizedState)||(Sn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),s.lastRenderedState=m}return[m,l]}function Jg(e,a,s){var l=ve,f=cn(),m=Oe;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=a();var M=!Kn((Be||f).memoizedState,s);M&&(f.memoizedState=s,Sn=!0),f=f.queue;var A=n0.bind(null,l,f,e);if(Wo(2048,8,A,[e]),f.getSnapshot!==a||M||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,gs(9,yu(),e0.bind(null,l,f,s,a),null),qe===null)throw Error(r(349));m||(Fa&124)!==0||t0(l,a,s)}return s}function t0(e,a,s){e.flags|=16384,e={getSnapshot:a,value:s},a=ve.updateQueue,a===null?(a=_h(),ve.updateQueue=a,a.stores=[e]):(s=a.stores,s===null?a.stores=[e]:s.push(e))}function e0(e,a,s,l){a.value=s,a.getSnapshot=l,i0(a)&&a0(e)}function n0(e,a,s){return s(function(){i0(a)&&a0(e)})}function i0(e){var a=e.getSnapshot;e=e.value;try{var s=a();return!Kn(e,s)}catch{return!0}}function a0(e){var a=os(e,2);a!==null&&ni(a,e,2)}function Sh(e){var a=Xn();if(typeof e=="function"){var s=e;if(e=s(),wr){Lt(!0);try{s()}finally{Lt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},a}function r0(e,a,s,l){return e.baseState=s,xh(e,Be,typeof l=="function"?l:na)}function KM(e,a,s,l,f){if(Mu(e))throw Error(r(485));if(e=a.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};F.T!==null?s(!0):m.isTransition=!1,l(m),s=a.pending,s===null?(m.next=a.pending=m,s0(a,m)):(m.next=s.next,a.pending=s.next=m)}}function s0(e,a){var s=a.action,l=a.payload,f=e.state;if(a.isTransition){var m=F.T,M={};F.T=M;try{var A=s(f,l),G=F.S;G!==null&&G(M,A),o0(e,a,A)}catch(at){Mh(e,a,at)}finally{F.T=m}}else try{m=s(f,l),o0(e,a,m)}catch(at){Mh(e,a,at)}}function o0(e,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){l0(e,a,l)},function(l){return Mh(e,a,l)}):l0(e,a,s)}function l0(e,a,s){a.status="fulfilled",a.value=s,u0(a),e.state=s,a=e.pending,a!==null&&(s=a.next,s===a?e.pending=null:(s=s.next,a.next=s,s0(e,s)))}function Mh(e,a,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=s,u0(a),a=a.next;while(a!==l)}e.action=null}function u0(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function c0(e,a){return a}function f0(e,a){if(Oe){var s=qe.formState;if(s!==null){t:{var l=ve;if(Oe){if(nn){e:{for(var f=nn,m=Oi;f.nodeType!==8;){if(!m){f=null;break e}if(f=Mi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){nn=Mi(f.nextSibling),l=f.data==="F!";break t}}Er(l)}l=!1}l&&(a=s[0])}}return s=Xn(),s.memoizedState=s.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:c0,lastRenderedState:a},s.queue=l,s=D0.bind(null,ve,l),l.dispatch=s,l=Sh(!1),m=wh.bind(null,ve,!1,l.queue),l=Xn(),f={state:a,dispatch:null,action:e,pending:null},l.queue=f,s=KM.bind(null,ve,f,m,s),f.dispatch=s,l.memoizedState=e,[a,s,!1]}function h0(e){var a=cn();return d0(a,Be,e)}function d0(e,a,s){if(a=xh(e,a,c0)[0],e=xu(na)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Xo(a)}catch(M){throw M===Bo?du:M}else l=a;a=cn();var f=a.queue,m=f.dispatch;return s!==a.memoizedState&&(ve.flags|=2048,gs(9,yu(),QM.bind(null,f,s),null)),[l,m,e]}function QM(e,a){e.action=a}function p0(e){var a=cn(),s=Be;if(s!==null)return d0(a,s,e);cn(),a=a.memoizedState,s=cn();var l=s.queue.dispatch;return s.memoizedState=e,[a,l,!1]}function gs(e,a,s,l){return e={tag:e,create:s,deps:l,inst:a,next:null},a=ve.updateQueue,a===null&&(a=_h(),ve.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,a.lastEffect=e),e}function yu(){return{destroy:void 0,resource:void 0}}function m0(){return cn().memoizedState}function Su(e,a,s,l){var f=Xn();l=l===void 0?null:l,ve.flags|=e,f.memoizedState=gs(1|a,yu(),s,l)}function Wo(e,a,s,l){var f=cn();l=l===void 0?null:l;var m=f.memoizedState.inst;Be!==null&&l!==null&&hh(l,Be.memoizedState.deps)?f.memoizedState=gs(a,m,s,l):(ve.flags|=e,f.memoizedState=gs(1|a,m,s,l))}function g0(e,a){Su(8390656,8,e,a)}function _0(e,a){Wo(2048,8,e,a)}function v0(e,a){return Wo(4,2,e,a)}function x0(e,a){return Wo(4,4,e,a)}function y0(e,a){if(typeof a=="function"){e=e();var s=a(e);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function S0(e,a,s){s=s!=null?s.concat([e]):null,Wo(4,4,y0.bind(null,a,e),s)}function Eh(){}function M0(e,a){var s=cn();a=a===void 0?null:a;var l=s.memoizedState;return a!==null&&hh(a,l[1])?l[0]:(s.memoizedState=[e,a],e)}function E0(e,a){var s=cn();a=a===void 0?null:a;var l=s.memoizedState;if(a!==null&&hh(a,l[1]))return l[0];if(l=e(),wr){Lt(!0);try{e()}finally{Lt(!1)}}return s.memoizedState=[l,a],l}function bh(e,a,s){return s===void 0||(Fa&1073741824)!==0?e.memoizedState=a:(e.memoizedState=s,e=A_(),ve.lanes|=e,Xa|=e,s)}function b0(e,a,s,l){return Kn(s,a)?s:ds.current!==null?(e=bh(e,s,l),Kn(e,a)||(Sn=!0),e):(Fa&42)===0?(Sn=!0,e.memoizedState=s):(e=A_(),ve.lanes|=e,Xa|=e,a)}function T0(e,a,s,l,f){var m=Y.p;Y.p=m!==0&&8>m?m:8;var M=F.T,A={};F.T=A,wh(e,!1,a,s);try{var G=f(),at=F.S;if(at!==null&&at(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var xt=qM(G,l);Yo(e,a,xt,ei(e))}else Yo(e,a,l,ei(e))}catch(At){Yo(e,a,{then:function(){},status:"rejected",reason:At},ei())}finally{Y.p=m,F.T=M}}function $M(){}function Th(e,a,s,l){if(e.tag!==5)throw Error(r(476));var f=A0(e).queue;T0(e,f,a,W,s===null?$M:function(){return w0(e),s(l)})}function A0(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:W},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:s},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function w0(e){var a=A0(e).next.queue;Yo(e,a,{},ei())}function Ah(){return Ln(cl)}function R0(){return cn().memoizedState}function C0(){return cn().memoizedState}function JM(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var s=ei();e=Pa(s);var l=za(a,e,s);l!==null&&(ni(l,a,s),Ho(l,a,s)),a={cache:nh()},e.payload=a;return}a=a.return}}function tE(e,a,s){var l=ei();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Mu(e)?U0(a,s):(s=Yf(e,a,s,l),s!==null&&(ni(s,e,l),N0(s,a,l)))}function D0(e,a,s){var l=ei();Yo(e,a,s,l)}function Yo(e,a,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))U0(a,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var M=a.lastRenderedState,A=m(M,s);if(f.hasEagerState=!0,f.eagerState=A,Kn(A,M))return ru(e,a,f,0),qe===null&&au(),!1}catch{}finally{}if(s=Yf(e,a,f,l),s!==null)return ni(s,e,l),N0(s,a,l),!0}return!1}function wh(e,a,s,l){if(l={lane:2,revertLane:rd(),action:l,hasEagerState:!1,eagerState:null,next:null},Mu(e)){if(a)throw Error(r(479))}else a=Yf(e,s,l,2),a!==null&&ni(a,e,2)}function Mu(e){var a=e.alternate;return e===ve||a!==null&&a===ve}function U0(e,a){ps=gu=!0;var s=e.pending;s===null?a.next=a:(a.next=s.next,s.next=a),e.pending=a}function N0(e,a,s){if((s&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,s|=l,a.lanes=s,he(e,s)}}var Eu={readContext:Ln,use:vu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},L0={readContext:Ln,use:vu,useCallback:function(e,a){return Xn().memoizedState=[e,a===void 0?null:a],e},useContext:Ln,useEffect:g0,useImperativeHandle:function(e,a,s){s=s!=null?s.concat([e]):null,Su(4194308,4,y0.bind(null,a,e),s)},useLayoutEffect:function(e,a){return Su(4194308,4,e,a)},useInsertionEffect:function(e,a){Su(4,2,e,a)},useMemo:function(e,a){var s=Xn();a=a===void 0?null:a;var l=e();if(wr){Lt(!0);try{e()}finally{Lt(!1)}}return s.memoizedState=[l,a],l},useReducer:function(e,a,s){var l=Xn();if(s!==void 0){var f=s(a);if(wr){Lt(!0);try{s(a)}finally{Lt(!1)}}}else f=a;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=tE.bind(null,ve,e),[l.memoizedState,e]},useRef:function(e){var a=Xn();return e={current:e},a.memoizedState=e},useState:function(e){e=Sh(e);var a=e.queue,s=D0.bind(null,ve,a);return a.dispatch=s,[e.memoizedState,s]},useDebugValue:Eh,useDeferredValue:function(e,a){var s=Xn();return bh(s,e,a)},useTransition:function(){var e=Sh(!1);return e=T0.bind(null,ve,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,s){var l=ve,f=Xn();if(Oe){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),qe===null)throw Error(r(349));(Re&124)!==0||t0(l,a,s)}f.memoizedState=s;var m={value:s,getSnapshot:a};return f.queue=m,g0(n0.bind(null,l,m,e),[e]),l.flags|=2048,gs(9,yu(),e0.bind(null,l,m,s,a),null),s},useId:function(){var e=Xn(),a=qe.identifierPrefix;if(Oe){var s=Ji,l=$i;s=(l&~(1<<32-Pt(l)-1)).toString(32)+s,a="«"+a+"R"+s,s=_u++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=jM++,a="«"+a+"r"+s.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:Ah,useFormState:f0,useActionState:f0,useOptimistic:function(e){var a=Xn();a.memoizedState=a.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=wh.bind(null,ve,!0,s),s.dispatch=a,[e,a]},useMemoCache:vh,useCacheRefresh:function(){return Xn().memoizedState=JM.bind(null,ve)}},O0={readContext:Ln,use:vu,useCallback:M0,useContext:Ln,useEffect:_0,useImperativeHandle:S0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:E0,useReducer:xu,useRef:m0,useState:function(){return xu(na)},useDebugValue:Eh,useDeferredValue:function(e,a){var s=cn();return b0(s,Be.memoizedState,e,a)},useTransition:function(){var e=xu(na)[0],a=cn().memoizedState;return[typeof e=="boolean"?e:Xo(e),a]},useSyncExternalStore:Jg,useId:R0,useHostTransitionStatus:Ah,useFormState:h0,useActionState:h0,useOptimistic:function(e,a){var s=cn();return r0(s,Be,e,a)},useMemoCache:vh,useCacheRefresh:C0},eE={readContext:Ln,use:vu,useCallback:M0,useContext:Ln,useEffect:_0,useImperativeHandle:S0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:E0,useReducer:yh,useRef:m0,useState:function(){return yh(na)},useDebugValue:Eh,useDeferredValue:function(e,a){var s=cn();return Be===null?bh(s,e,a):b0(s,Be.memoizedState,e,a)},useTransition:function(){var e=yh(na)[0],a=cn().memoizedState;return[typeof e=="boolean"?e:Xo(e),a]},useSyncExternalStore:Jg,useId:R0,useHostTransitionStatus:Ah,useFormState:p0,useActionState:p0,useOptimistic:function(e,a){var s=cn();return Be!==null?r0(s,Be,e,a):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:vh,useCacheRefresh:C0},_s=null,qo=0;function bu(e){var a=qo;return qo+=1,_s===null&&(_s=[]),Wg(_s,e,a)}function jo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Tu(e,a){throw a.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function P0(e){var a=e._init;return a(e._payload)}function z0(e){function a(q,V){if(e){var tt=q.deletions;tt===null?(q.deletions=[V],q.flags|=16):tt.push(V)}}function s(q,V){if(!e)return null;for(;V!==null;)a(q,V),V=V.sibling;return null}function l(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function f(q,V){return q=Qi(q,V),q.index=0,q.sibling=null,q}function m(q,V,tt){return q.index=tt,e?(tt=q.alternate,tt!==null?(tt=tt.index,tt<V?(q.flags|=67108866,V):tt):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function M(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function A(q,V,tt,Mt){return V===null||V.tag!==6?(V=jf(tt,q.mode,Mt),V.return=q,V):(V=f(V,tt),V.return=q,V)}function G(q,V,tt,Mt){var Qt=tt.type;return Qt===E?xt(q,V,tt.props.children,Mt,tt.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&P0(Qt)===V.type)?(V=f(V,tt.props),jo(V,tt),V.return=q,V):(V=ou(tt.type,tt.key,tt.props,null,q.mode,Mt),jo(V,tt),V.return=q,V)}function at(q,V,tt,Mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=Zf(tt,q.mode,Mt),V.return=q,V):(V=f(V,tt.children||[]),V.return=q,V)}function xt(q,V,tt,Mt,Qt){return V===null||V.tag!==7?(V=xr(tt,q.mode,Mt,Qt),V.return=q,V):(V=f(V,tt),V.return=q,V)}function At(q,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=jf(""+V,q.mode,tt),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _:return tt=ou(V.type,V.key,V.props,null,q.mode,tt),jo(tt,V),tt.return=q,tt;case x:return V=Zf(V,q.mode,tt),V.return=q,V;case X:var Mt=V._init;return V=Mt(V._payload),At(q,V,tt)}if(dt(V)||j(V))return V=xr(V,q.mode,tt,null),V.return=q,V;if(typeof V.then=="function")return At(q,bu(V),tt);if(V.$$typeof===N)return At(q,fu(q,V),tt);Tu(q,V)}return null}function ot(q,V,tt,Mt){var Qt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Qt!==null?null:A(q,V,""+tt,Mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case _:return tt.key===Qt?G(q,V,tt,Mt):null;case x:return tt.key===Qt?at(q,V,tt,Mt):null;case X:return Qt=tt._init,tt=Qt(tt._payload),ot(q,V,tt,Mt)}if(dt(tt)||j(tt))return Qt!==null?null:xt(q,V,tt,Mt,null);if(typeof tt.then=="function")return ot(q,V,bu(tt),Mt);if(tt.$$typeof===N)return ot(q,V,fu(q,tt),Mt);Tu(q,tt)}return null}function lt(q,V,tt,Mt,Qt){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return q=q.get(tt)||null,A(V,q,""+Mt,Qt);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case _:return q=q.get(Mt.key===null?tt:Mt.key)||null,G(V,q,Mt,Qt);case x:return q=q.get(Mt.key===null?tt:Mt.key)||null,at(V,q,Mt,Qt);case X:var xe=Mt._init;return Mt=xe(Mt._payload),lt(q,V,tt,Mt,Qt)}if(dt(Mt)||j(Mt))return q=q.get(tt)||null,xt(V,q,Mt,Qt,null);if(typeof Mt.then=="function")return lt(q,V,tt,bu(Mt),Qt);if(Mt.$$typeof===N)return lt(q,V,tt,fu(V,Mt),Qt);Tu(V,Mt)}return null}function ue(q,V,tt,Mt){for(var Qt=null,xe=null,ne=V,oe=V=0,En=null;ne!==null&&oe<tt.length;oe++){ne.index>oe?(En=ne,ne=null):En=ne.sibling;var Ue=ot(q,ne,tt[oe],Mt);if(Ue===null){ne===null&&(ne=En);break}e&&ne&&Ue.alternate===null&&a(q,ne),V=m(Ue,V,oe),xe===null?Qt=Ue:xe.sibling=Ue,xe=Ue,ne=En}if(oe===tt.length)return s(q,ne),Oe&&Sr(q,oe),Qt;if(ne===null){for(;oe<tt.length;oe++)ne=At(q,tt[oe],Mt),ne!==null&&(V=m(ne,V,oe),xe===null?Qt=ne:xe.sibling=ne,xe=ne);return Oe&&Sr(q,oe),Qt}for(ne=l(ne);oe<tt.length;oe++)En=lt(ne,q,oe,tt[oe],Mt),En!==null&&(e&&En.alternate!==null&&ne.delete(En.key===null?oe:En.key),V=m(En,V,oe),xe===null?Qt=En:xe.sibling=En,xe=En);return e&&ne.forEach(function(Ja){return a(q,Ja)}),Oe&&Sr(q,oe),Qt}function se(q,V,tt,Mt){if(tt==null)throw Error(r(151));for(var Qt=null,xe=null,ne=V,oe=V=0,En=null,Ue=tt.next();ne!==null&&!Ue.done;oe++,Ue=tt.next()){ne.index>oe?(En=ne,ne=null):En=ne.sibling;var Ja=ot(q,ne,Ue.value,Mt);if(Ja===null){ne===null&&(ne=En);break}e&&ne&&Ja.alternate===null&&a(q,ne),V=m(Ja,V,oe),xe===null?Qt=Ja:xe.sibling=Ja,xe=Ja,ne=En}if(Ue.done)return s(q,ne),Oe&&Sr(q,oe),Qt;if(ne===null){for(;!Ue.done;oe++,Ue=tt.next())Ue=At(q,Ue.value,Mt),Ue!==null&&(V=m(Ue,V,oe),xe===null?Qt=Ue:xe.sibling=Ue,xe=Ue);return Oe&&Sr(q,oe),Qt}for(ne=l(ne);!Ue.done;oe++,Ue=tt.next())Ue=lt(ne,q,oe,Ue.value,Mt),Ue!==null&&(e&&Ue.alternate!==null&&ne.delete(Ue.key===null?oe:Ue.key),V=m(Ue,V,oe),xe===null?Qt=Ue:xe.sibling=Ue,xe=Ue);return e&&ne.forEach(function(nb){return a(q,nb)}),Oe&&Sr(q,oe),Qt}function He(q,V,tt,Mt){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case _:t:{for(var Qt=tt.key;V!==null;){if(V.key===Qt){if(Qt=tt.type,Qt===E){if(V.tag===7){s(q,V.sibling),Mt=f(V,tt.props.children),Mt.return=q,q=Mt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&P0(Qt)===V.type){s(q,V.sibling),Mt=f(V,tt.props),jo(Mt,tt),Mt.return=q,q=Mt;break t}s(q,V);break}else a(q,V);V=V.sibling}tt.type===E?(Mt=xr(tt.props.children,q.mode,Mt,tt.key),Mt.return=q,q=Mt):(Mt=ou(tt.type,tt.key,tt.props,null,q.mode,Mt),jo(Mt,tt),Mt.return=q,q=Mt)}return M(q);case x:t:{for(Qt=tt.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){s(q,V.sibling),Mt=f(V,tt.children||[]),Mt.return=q,q=Mt;break t}else{s(q,V);break}else a(q,V);V=V.sibling}Mt=Zf(tt,q.mode,Mt),Mt.return=q,q=Mt}return M(q);case X:return Qt=tt._init,tt=Qt(tt._payload),He(q,V,tt,Mt)}if(dt(tt))return ue(q,V,tt,Mt);if(j(tt)){if(Qt=j(tt),typeof Qt!="function")throw Error(r(150));return tt=Qt.call(tt),se(q,V,tt,Mt)}if(typeof tt.then=="function")return He(q,V,bu(tt),Mt);if(tt.$$typeof===N)return He(q,V,fu(q,tt),Mt);Tu(q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(s(q,V.sibling),Mt=f(V,tt),Mt.return=q,q=Mt):(s(q,V),Mt=jf(tt,q.mode,Mt),Mt.return=q,q=Mt),M(q)):s(q,V)}return function(q,V,tt,Mt){try{qo=0;var Qt=He(q,V,tt,Mt);return _s=null,Qt}catch(ne){if(ne===Bo||ne===du)throw ne;var xe=Qn(29,ne,null,q.mode);return xe.lanes=Mt,xe.return=q,xe}finally{}}}var vs=z0(!0),F0=z0(!1),hi=it(null),Pi=null;function Ba(e){var a=e.alternate;_t(mn,mn.current&1),_t(hi,e),Pi===null&&(a===null||ds.current!==null||a.memoizedState!==null)&&(Pi=e)}function B0(e){if(e.tag===22){if(_t(mn,mn.current),_t(hi,e),Pi===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(Pi=e)}}else Ia()}function Ia(){_t(mn,mn.current),_t(hi,hi.current)}function ia(e){wt(hi),Pi===e&&(Pi=null),wt(mn)}var mn=it(0);function Au(e){for(var a=e;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||_d(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Rh(e,a,s,l){a=e.memoizedState,s=s(l,a),s=s==null?a:g({},a,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ch={enqueueSetState:function(e,a,s){e=e._reactInternals;var l=ei(),f=Pa(l);f.payload=a,s!=null&&(f.callback=s),a=za(e,f,l),a!==null&&(ni(a,e,l),Ho(a,e,l))},enqueueReplaceState:function(e,a,s){e=e._reactInternals;var l=ei(),f=Pa(l);f.tag=1,f.payload=a,s!=null&&(f.callback=s),a=za(e,f,l),a!==null&&(ni(a,e,l),Ho(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var s=ei(),l=Pa(s);l.tag=2,a!=null&&(l.callback=a),a=za(e,l,s),a!==null&&(ni(a,e,s),Ho(a,e,s))}};function I0(e,a,s,l,f,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):a.prototype&&a.prototype.isPureReactComponent?!Do(s,l)||!Do(f,m):!0}function H0(e,a,s,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,l),a.state!==e&&Ch.enqueueReplaceState(a,a.state,null)}function Rr(e,a){var s=a;if("ref"in a){s={};for(var l in a)l!=="ref"&&(s[l]=a[l])}if(e=e.defaultProps){s===a&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var wu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function G0(e){wu(e)}function V0(e){console.error(e)}function k0(e){wu(e)}function Ru(e,a){try{var s=e.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function X0(e,a,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Dh(e,a,s){return s=Pa(s),s.tag=3,s.payload={element:null},s.callback=function(){Ru(e,a)},s}function W0(e){return e=Pa(e),e.tag=3,e}function Y0(e,a,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){X0(a,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){X0(a,s,l),typeof f!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function nE(e,a,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=s.alternate,a!==null&&Po(a,s,f,!0),s=hi.current,s!==null){switch(s.tag){case 13:return Pi===null?td():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===rh?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([l]):a.add(l),nd(e,l,f)),!1;case 22:return s.flags|=65536,l===rh?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([l]):s.add(l)),nd(e,l,f)),!1}throw Error(r(435,s.tag))}return nd(e,l,f),td(),!1}if(Oe)return a=hi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==$f&&(e=Error(r(422),{cause:l}),Oo(li(e,s)))):(l!==$f&&(a=Error(r(423),{cause:l}),Oo(li(a,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=li(l,s),f=Dh(e.stateNode,l,f),lh(e,f),an!==4&&(an=2)),!1;var m=Error(r(520),{cause:l});if(m=li(m,s),el===null?el=[m]:el.push(m),an!==4&&(an=2),a===null)return!0;l=li(l,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Dh(s.stateNode,l,e),lh(s,e),!1;case 1:if(a=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wa===null||!Wa.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=W0(f),Y0(f,e,s,l),lh(s,f),!1}s=s.return}while(s!==null);return!1}var q0=Error(r(461)),Sn=!1;function wn(e,a,s,l){a.child=e===null?F0(a,null,s,l):vs(a,e.child,s,l)}function j0(e,a,s,l,f){s=s.render;var m=a.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return Tr(a),l=dh(e,a,s,M,m,f),A=ph(),e!==null&&!Sn?(mh(e,a,f),aa(e,a,f)):(Oe&&A&&Kf(a),a.flags|=1,wn(e,a,l,f),a.child)}function Z0(e,a,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!qf(m)&&m.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=m,K0(e,a,m,l,f)):(e=ou(s.type,null,l,a,a.mode,f),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!Bh(e,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:Do,s(M,l)&&e.ref===a.ref)return aa(e,a,f)}return a.flags|=1,e=Qi(m,l),e.ref=a.ref,e.return=a,a.child=e}function K0(e,a,s,l,f){if(e!==null){var m=e.memoizedProps;if(Do(m,l)&&e.ref===a.ref)if(Sn=!1,a.pendingProps=l=m,Bh(e,f))(e.flags&131072)!==0&&(Sn=!0);else return a.lanes=e.lanes,aa(e,a,f)}return Uh(e,a,s,l,f)}function Q0(e,a,s){var l=a.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(f=a.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~l}else a.childLanes=0,a.child=null;return $0(e,a,l,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&hu(a,m!==null?m.cachePool:null),m!==null?Kg(a,m):ch(),B0(a);else return a.lanes=a.childLanes=536870912,$0(e,a,m!==null?m.baseLanes|s:s,s)}else m!==null?(hu(a,m.cachePool),Kg(a,m),Ia(),a.memoizedState=null):(e!==null&&hu(a,null),ch(),Ia());return wn(e,a,f,s),a.child}function $0(e,a,s,l){var f=ah();return f=f===null?null:{parent:pn._currentValue,pool:f},a.memoizedState={baseLanes:s,cachePool:f},e!==null&&hu(a,null),ch(),B0(a),e!==null&&Po(e,a,l,!0),null}function Cu(e,a){var s=a.ref;if(s===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(a.flags|=4194816)}}function Uh(e,a,s,l,f){return Tr(a),s=dh(e,a,s,l,void 0,f),l=ph(),e!==null&&!Sn?(mh(e,a,f),aa(e,a,f)):(Oe&&l&&Kf(a),a.flags|=1,wn(e,a,s,f),a.child)}function J0(e,a,s,l,f,m){return Tr(a),a.updateQueue=null,s=$g(a,l,s,f),Qg(e),l=ph(),e!==null&&!Sn?(mh(e,a,m),aa(e,a,m)):(Oe&&l&&Kf(a),a.flags|=1,wn(e,a,s,m),a.child)}function t_(e,a,s,l,f){if(Tr(a),a.stateNode===null){var m=ls,M=s.contextType;typeof M=="object"&&M!==null&&(m=Ln(M)),m=new s(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ch,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},sh(a),M=s.contextType,m.context=typeof M=="object"&&M!==null?Ln(M):ls,m.state=a.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Rh(a,s,M,l),m.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Ch.enqueueReplaceState(m,m.state,null),Vo(a,l,m,f),Go(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var A=a.memoizedProps,G=Rr(s,A);m.props=G;var at=m.context,xt=s.contextType;M=ls,typeof xt=="object"&&xt!==null&&(M=Ln(xt));var At=s.getDerivedStateFromProps;xt=typeof At=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,xt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||at!==M)&&H0(a,m,l,M),Oa=!1;var ot=a.memoizedState;m.state=ot,Vo(a,l,m,f),Go(),at=a.memoizedState,A||ot!==at||Oa?(typeof At=="function"&&(Rh(a,s,At,l),at=a.memoizedState),(G=Oa||I0(a,s,G,l,ot,at,M))?(xt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=at),m.props=l,m.state=at,m.context=M,l=G):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,oh(e,a),M=a.memoizedProps,xt=Rr(s,M),m.props=xt,At=a.pendingProps,ot=m.context,at=s.contextType,G=ls,typeof at=="object"&&at!==null&&(G=Ln(at)),A=s.getDerivedStateFromProps,(at=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==At||ot!==G)&&H0(a,m,l,G),Oa=!1,ot=a.memoizedState,m.state=ot,Vo(a,l,m,f),Go();var lt=a.memoizedState;M!==At||ot!==lt||Oa||e!==null&&e.dependencies!==null&&cu(e.dependencies)?(typeof A=="function"&&(Rh(a,s,A,l),lt=a.memoizedState),(xt=Oa||I0(a,s,xt,l,ot,lt,G)||e!==null&&e.dependencies!==null&&cu(e.dependencies))?(at||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,lt,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,lt,G)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=lt),m.props=l,m.state=lt,m.context=G,l=xt):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,Cu(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=vs(a,e.child,null,f),a.child=vs(a,null,s,f)):wn(e,a,s,f),a.memoizedState=m.state,e=a.child):e=aa(e,a,f),e}function e_(e,a,s,l){return Lo(),a.flags|=256,wn(e,a,s,l),a.child}var Nh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lh(e){return{baseLanes:e,cachePool:Vg()}}function Oh(e,a,s){return e=e!==null?e.childLanes&~s:0,a&&(e|=di),e}function n_(e,a,s){var l=a.pendingProps,f=!1,m=(a.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),M&&(f=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,e===null){if(Oe){if(f?Ba(a):Ia(),Oe){var A=nn,G;if(G=A){t:{for(G=A,A=Oi;G.nodeType!==8;){if(!A){A=null;break t}if(G=Mi(G.nextSibling),G===null){A=null;break t}}A=G}A!==null?(a.memoizedState={dehydrated:A,treeContext:yr!==null?{id:$i,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},G=Qn(18,null,null,0),G.stateNode=A,G.return=a,a.child=G,Bn=a,nn=null,G=!0):G=!1}G||Er(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return _d(A)?a.lanes=32:a.lanes=536870912,null;ia(a)}return A=l.children,l=l.fallback,f?(Ia(),f=a.mode,A=Du({mode:"hidden",children:A},f),l=xr(l,f,s,null),A.return=a,l.return=a,A.sibling=l,a.child=A,f=a.child,f.memoizedState=Lh(s),f.childLanes=Oh(e,M,s),a.memoizedState=Nh,l):(Ba(a),Ph(a,A))}if(G=e.memoizedState,G!==null&&(A=G.dehydrated,A!==null)){if(m)a.flags&256?(Ba(a),a.flags&=-257,a=zh(e,a,s)):a.memoizedState!==null?(Ia(),a.child=e.child,a.flags|=128,a=null):(Ia(),f=l.fallback,A=a.mode,l=Du({mode:"visible",children:l.children},A),f=xr(f,A,s,null),f.flags|=2,l.return=a,f.return=a,l.sibling=f,a.child=l,vs(a,e.child,null,s),l=a.child,l.memoizedState=Lh(s),l.childLanes=Oh(e,M,s),a.memoizedState=Nh,a=f);else if(Ba(a),_d(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var at=M.dgst;M=at,l=Error(r(419)),l.stack="",l.digest=M,Oo({value:l,source:null,stack:null}),a=zh(e,a,s)}else if(Sn||Po(e,a,s,!1),M=(s&e.childLanes)!==0,Sn||M){if(M=qe,M!==null&&(l=s&-s,l=(l&42)!==0?1:Fe(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==G.retryLane))throw G.retryLane=l,os(e,l),ni(M,e,l),q0;A.data==="$?"||td(),a=zh(e,a,s)}else A.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=G.treeContext,nn=Mi(A.nextSibling),Bn=a,Oe=!0,Mr=null,Oi=!1,e!==null&&(ci[fi++]=$i,ci[fi++]=Ji,ci[fi++]=yr,$i=e.id,Ji=e.overflow,yr=a),a=Ph(a,l.children),a.flags|=4096);return a}return f?(Ia(),f=l.fallback,A=a.mode,G=e.child,at=G.sibling,l=Qi(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,at!==null?f=Qi(at,f):(f=xr(f,A,s,null),f.flags|=2),f.return=a,l.return=a,l.sibling=f,a.child=l,l=f,f=a.child,A=e.child.memoizedState,A===null?A=Lh(s):(G=A.cachePool,G!==null?(at=pn._currentValue,G=G.parent!==at?{parent:at,pool:at}:G):G=Vg(),A={baseLanes:A.baseLanes|s,cachePool:G}),f.memoizedState=A,f.childLanes=Oh(e,M,s),a.memoizedState=Nh,l):(Ba(a),s=e.child,e=s.sibling,s=Qi(s,{mode:"visible",children:l.children}),s.return=a,s.sibling=null,e!==null&&(M=a.deletions,M===null?(a.deletions=[e],a.flags|=16):M.push(e)),a.child=s,a.memoizedState=null,s)}function Ph(e,a){return a=Du({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Du(e,a){return e=Qn(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zh(e,a,s){return vs(a,e.child,null,s),e=Ph(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function i_(e,a,s){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),th(e.return,a,s)}function Fh(e,a,s,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function a_(e,a,s){var l=a.pendingProps,f=l.revealOrder,m=l.tail;if(wn(e,a,l.children,s),l=mn.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i_(e,s,a);else if(e.tag===19)i_(e,s,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(_t(mn,l),f){case"forwards":for(s=a.child,f=null;s!==null;)e=s.alternate,e!==null&&Au(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=a.child,a.child=null):(f=s.sibling,s.sibling=null),Fh(a,!1,f,s,m);break;case"backwards":for(s=null,f=a.child,a.child=null;f!==null;){if(e=f.alternate,e!==null&&Au(e)===null){a.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Fh(a,!0,s,null,m);break;case"together":Fh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function aa(e,a,s){if(e!==null&&(a.dependencies=e.dependencies),Xa|=a.lanes,(s&a.childLanes)===0)if(e!==null){if(Po(e,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,s=Qi(e,e.pendingProps),a.child=s,s.return=a;e.sibling!==null;)e=e.sibling,s=s.sibling=Qi(e,e.pendingProps),s.return=a;s.sibling=null}return a.child}function Bh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&cu(e)))}function iE(e,a,s){switch(a.tag){case 3:Ut(a,a.stateNode.containerInfo),La(a,pn,e.memoizedState.cache),Lo();break;case 27:case 5:st(a);break;case 4:Ut(a,a.stateNode.containerInfo);break;case 10:La(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Ba(a),a.flags|=128,null):(s&a.child.childLanes)!==0?n_(e,a,s):(Ba(a),e=aa(e,a,s),e!==null?e.sibling:null);Ba(a);break;case 19:var f=(e.flags&128)!==0;if(l=(s&a.childLanes)!==0,l||(Po(e,a,s,!1),l=(s&a.childLanes)!==0),f){if(l)return a_(e,a,s);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),_t(mn,mn.current),l)break;return null;case 22:case 23:return a.lanes=0,Q0(e,a,s);case 24:La(a,pn,e.memoizedState.cache)}return aa(e,a,s)}function r_(e,a,s){if(e!==null)if(e.memoizedProps!==a.pendingProps)Sn=!0;else{if(!Bh(e,s)&&(a.flags&128)===0)return Sn=!1,iE(e,a,s);Sn=(e.flags&131072)!==0}else Sn=!1,Oe&&(a.flags&1048576)!==0&&Pg(a,uu,a.index);switch(a.lanes=0,a.tag){case 16:t:{e=a.pendingProps;var l=a.elementType,f=l._init;if(l=f(l._payload),a.type=l,typeof l=="function")qf(l)?(e=Rr(l,e),a.tag=1,a=t_(null,a,l,e,s)):(a.tag=0,a=Uh(null,a,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===w){a.tag=11,a=j0(null,a,l,e,s);break t}else if(f===B){a.tag=14,a=Z0(null,a,l,e,s);break t}}throw a=pt(l)||l,Error(r(306,a,""))}}return a;case 0:return Uh(e,a,a.type,a.pendingProps,s);case 1:return l=a.type,f=Rr(l,a.pendingProps),t_(e,a,l,f,s);case 3:t:{if(Ut(a,a.stateNode.containerInfo),e===null)throw Error(r(387));l=a.pendingProps;var m=a.memoizedState;f=m.element,oh(e,a),Vo(a,l,null,s);var M=a.memoizedState;if(l=M.cache,La(a,pn,l),l!==m.cache&&eh(a,[pn],s,!0),Go(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=e_(e,a,l,s);break t}else if(l!==f){f=li(Error(r(424)),a),Oo(f),a=e_(e,a,l,s);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Mi(e.firstChild),Bn=a,Oe=!0,Mr=null,Oi=!0,s=F0(a,null,l,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Lo(),l===f){a=aa(e,a,s);break t}wn(e,a,l,s)}a=a.child}return a;case 26:return Cu(e,a),e===null?(s=uv(a.type,null,a.pendingProps,null))?a.memoizedState=s:Oe||(s=a.type,e=a.pendingProps,l=Xu(nt.current).createElement(s),l[Ke]=a,l[hn]=e,Cn(l,s,e),ln(l),a.stateNode=l):a.memoizedState=uv(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return st(a),e===null&&Oe&&(l=a.stateNode=sv(a.type,a.pendingProps,nt.current),Bn=a,Oi=!0,f=nn,ja(a.type)?(vd=f,nn=Mi(l.firstChild)):nn=f),wn(e,a,a.pendingProps.children,s),Cu(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Oe&&((f=l=nn)&&(l=UE(l,a.type,a.pendingProps,Oi),l!==null?(a.stateNode=l,Bn=a,nn=Mi(l.firstChild),Oi=!1,f=!0):f=!1),f||Er(a)),st(a),f=a.type,m=a.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,pd(f,m)?l=null:M!==null&&pd(f,M)&&(a.flags|=32),a.memoizedState!==null&&(f=dh(e,a,ZM,null,null,s),cl._currentValue=f),Cu(e,a),wn(e,a,l,s),a.child;case 6:return e===null&&Oe&&((e=s=nn)&&(s=NE(s,a.pendingProps,Oi),s!==null?(a.stateNode=s,Bn=a,nn=null,e=!0):e=!1),e||Er(a)),null;case 13:return n_(e,a,s);case 4:return Ut(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=vs(a,null,l,s):wn(e,a,l,s),a.child;case 11:return j0(e,a,a.type,a.pendingProps,s);case 7:return wn(e,a,a.pendingProps,s),a.child;case 8:return wn(e,a,a.pendingProps.children,s),a.child;case 12:return wn(e,a,a.pendingProps.children,s),a.child;case 10:return l=a.pendingProps,La(a,a.type,l.value),wn(e,a,l.children,s),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,Tr(a),f=Ln(f),l=l(f),a.flags|=1,wn(e,a,l,s),a.child;case 14:return Z0(e,a,a.type,a.pendingProps,s);case 15:return K0(e,a,a.type,a.pendingProps,s);case 19:return a_(e,a,s);case 31:return l=a.pendingProps,s=a.mode,l={mode:l.mode,children:l.children},e===null?(s=Du(l,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=Qi(e.child,l),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return Q0(e,a,s);case 24:return Tr(a),l=Ln(pn),e===null?(f=ah(),f===null&&(f=qe,m=nh(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),a.memoizedState={parent:l,cache:f},sh(a),La(a,pn,f)):((e.lanes&s)!==0&&(oh(e,a),Vo(a,null,null,s),Go()),f=e.memoizedState,m=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),La(a,pn,l)):(l=m.cache,La(a,pn,l),l!==f.cache&&eh(a,[pn],s,!0))),wn(e,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function ra(e){e.flags|=4}function s_(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pv(a)){if(a=hi.current,a!==null&&((Re&4194048)===Re?Pi!==null:(Re&62914560)!==Re&&(Re&536870912)===0||a!==Pi))throw Io=rh,kg;e.flags|=8192}}function Uu(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Ft():536870912,e.lanes|=a,Ms|=a)}function Zo(e,a){if(!Oe)switch(e.tailMode){case"hidden":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var a=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(a)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,a}function aE(e,a,s){var l=a.pendingProps;switch(Qf(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(a),null;case 1:return $e(a),null;case 3:return s=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ea(pn),vt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(No(a)?ra(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Bg())),$e(a),null;case 26:return s=a.memoizedState,e===null?(ra(a),s!==null?($e(a),s_(a,s)):($e(a),a.flags&=-16777217)):s?s!==e.memoizedState?(ra(a),$e(a),s_(a,s)):($e(a),a.flags&=-16777217):(e.memoizedProps!==l&&ra(a),$e(a),a.flags&=-16777217),null;case 27:bt(a),s=nt.current;var f=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ra(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return $e(a),null}e=J.current,No(a)?zg(a):(e=sv(f,l,s),a.stateNode=e,ra(a))}return $e(a),null;case 5:if(bt(a),s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ra(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return $e(a),null}if(e=J.current,No(a))zg(a);else{switch(f=Xu(nt.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[Ke]=a,e[hn]=l;t:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break t;for(;f.sibling===null;){if(f.return===null||f.return===a)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=e;t:switch(Cn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ra(a)}}return $e(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&ra(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(r(166));if(e=nt.current,No(a)){if(e=a.stateNode,s=a.memoizedProps,l=null,f=Bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[Ke]=a,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||J_(e.nodeValue,s)),e||Er(a)}else e=Xu(e).createTextNode(l),e[Ke]=a,a.stateNode=e}return $e(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=No(a),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Ke]=a}else Lo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;$e(a),f=!1}else f=Bg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(ia(a),a):(ia(a),null)}if(ia(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==e&&s&&(a.child.flags|=8192),Uu(a,a.updateQueue),$e(a),null;case 4:return vt(),e===null&&ud(a.stateNode.containerInfo),$e(a),null;case 10:return ea(a.type),$e(a),null;case 19:if(wt(mn),f=a.memoizedState,f===null)return $e(a),null;if(l=(a.flags&128)!==0,m=f.rendering,m===null)if(l)Zo(f,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=Au(e),m!==null){for(a.flags|=128,Zo(f,!1),e=m.updateQueue,a.updateQueue=e,Uu(a,e),a.subtreeFlags=0,e=s,s=a.child;s!==null;)Og(s,e),s=s.sibling;return _t(mn,mn.current&1|2),a.child}e=e.sibling}f.tail!==null&&Yt()>Ou&&(a.flags|=128,l=!0,Zo(f,!1),a.lanes=4194304)}else{if(!l)if(e=Au(m),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Uu(a,e),Zo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Oe)return $e(a),null}else 2*Yt()-f.renderingStartTime>Ou&&s!==536870912&&(a.flags|=128,l=!0,Zo(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(e=f.last,e!==null?e.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Yt(),a.sibling=null,e=mn.current,_t(mn,l?e&1|2:e&1),a):($e(a),null);case 22:case 23:return ia(a),fh(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(s&536870912)!==0&&(a.flags&128)===0&&($e(a),a.subtreeFlags&6&&(a.flags|=8192)):$e(a),s=a.updateQueue,s!==null&&Uu(a,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==s&&(a.flags|=2048),e!==null&&wt(Ar),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),ea(pn),$e(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function rE(e,a){switch(Qf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return ea(pn),vt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return bt(a),null;case 13:if(ia(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Lo()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return wt(mn),null;case 4:return vt(),null;case 10:return ea(a.type),null;case 22:case 23:return ia(a),fh(),e!==null&&wt(Ar),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return ea(pn),null;case 25:return null;default:return null}}function o_(e,a){switch(Qf(a),a.tag){case 3:ea(pn),vt();break;case 26:case 27:case 5:bt(a);break;case 4:vt();break;case 13:ia(a);break;case 19:wt(mn);break;case 10:ea(a.type);break;case 22:case 23:ia(a),fh(),e!==null&&wt(Ar);break;case 24:ea(pn)}}function Ko(e,a){try{var s=a.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(A){We(a,a.return,A)}}function Ha(e,a,s){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,f=a;var G=s,at=A;try{at()}catch(xt){We(f,G,xt)}}}l=l.next}while(l!==m)}}catch(xt){We(a,a.return,xt)}}function l_(e){var a=e.updateQueue;if(a!==null){var s=e.stateNode;try{Zg(a,s)}catch(l){We(e,e.return,l)}}}function u_(e,a,s){s.props=Rr(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){We(e,a,l)}}function Qo(e,a){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){We(e,a,f)}}function zi(e,a){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){We(e,a,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){We(e,a,f)}else s.current=null}function c_(e){var a=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){We(e,e.return,f)}}function Ih(e,a,s){try{var l=e.stateNode;AE(l,e.type,s,a),l[hn]=a}catch(f){We(e,e.return,f)}}function f_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function Hh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||f_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gh(e,a,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(e),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=ku));else if(l!==4&&(l===27&&ja(e.type)&&(s=e.stateNode,a=null),e=e.child,e!==null))for(Gh(e,a,s),e=e.sibling;e!==null;)Gh(e,a,s),e=e.sibling}function Nu(e,a,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?s.insertBefore(e,a):s.appendChild(e);else if(l!==4&&(l===27&&ja(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Nu(e,a,s),e=e.sibling;e!==null;)Nu(e,a,s),e=e.sibling}function h_(e){var a=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Cn(a,l,s),a[Ke]=e,a[hn]=s}catch(m){We(e,e.return,m)}}var sa=!1,sn=!1,Vh=!1,d_=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function sE(e,a){if(e=e.containerInfo,hd=Ku,e=bg(e),Hf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var M=0,A=-1,G=-1,at=0,xt=0,At=e,ot=null;e:for(;;){for(var lt;At!==s||f!==0&&At.nodeType!==3||(A=M+f),At!==m||l!==0&&At.nodeType!==3||(G=M+l),At.nodeType===3&&(M+=At.nodeValue.length),(lt=At.firstChild)!==null;)ot=At,At=lt;for(;;){if(At===e)break e;if(ot===s&&++at===f&&(A=M),ot===m&&++xt===l&&(G=M),(lt=At.nextSibling)!==null)break;At=ot,ot=At.parentNode}At=lt}s=A===-1||G===-1?null:{start:A,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(dd={focusedElem:e,selectionRange:s},Ku=!1,Mn=a;Mn!==null;)if(a=Mn,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,Mn=e;else for(;Mn!==null;){switch(a=Mn,m=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=a,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ue=Rr(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(ue,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){We(s,s.return,se)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,s=e.nodeType,s===9)gd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,Mn=e;break}Mn=a.return}}function p_(e,a,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ga(e,s),l&4&&Ko(5,s);break;case 1:if(Ga(e,s),l&4)if(e=s.stateNode,a===null)try{e.componentDidMount()}catch(M){We(s,s.return,M)}else{var f=Rr(s.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(f,a,e.__reactInternalSnapshotBeforeUpdate)}catch(M){We(s,s.return,M)}}l&64&&l_(s),l&512&&Qo(s,s.return);break;case 3:if(Ga(e,s),l&64&&(e=s.updateQueue,e!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{Zg(e,a)}catch(M){We(s,s.return,M)}}break;case 27:a===null&&l&4&&h_(s);case 26:case 5:Ga(e,s),a===null&&l&4&&c_(s),l&512&&Qo(s,s.return);break;case 12:Ga(e,s);break;case 13:Ga(e,s),l&4&&__(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=mE.bind(null,s),LE(e,s))));break;case 22:if(l=s.memoizedState!==null||sa,!l){a=a!==null&&a.memoizedState!==null||sn,f=sa;var m=sn;sa=l,(sn=a)&&!m?Va(e,s,(s.subtreeFlags&8772)!==0):Ga(e,s),sa=f,sn=m}break;case 30:break;default:Ga(e,s)}}function m_(e){var a=e.alternate;a!==null&&(e.alternate=null,m_(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ca(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Wn=!1;function oa(e,a,s){for(s=s.child;s!==null;)g_(e,a,s),s=s.sibling}function g_(e,a,s){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(mt,s)}catch{}switch(s.tag){case 26:sn||zi(s,a),oa(e,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||zi(s,a);var l=je,f=Wn;ja(s.type)&&(je=s.stateNode,Wn=!1),oa(e,a,s),sl(s.stateNode),je=l,Wn=f;break;case 5:sn||zi(s,a);case 6:if(l=je,f=Wn,je=null,oa(e,a,s),je=l,Wn=f,je!==null)if(Wn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(s.stateNode)}catch(m){We(s,a,m)}else try{je.removeChild(s.stateNode)}catch(m){We(s,a,m)}break;case 18:je!==null&&(Wn?(e=je,av(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),pl(e)):av(je,s.stateNode));break;case 4:l=je,f=Wn,je=s.stateNode.containerInfo,Wn=!0,oa(e,a,s),je=l,Wn=f;break;case 0:case 11:case 14:case 15:sn||Ha(2,s,a),sn||Ha(4,s,a),oa(e,a,s);break;case 1:sn||(zi(s,a),l=s.stateNode,typeof l.componentWillUnmount=="function"&&u_(s,a,l)),oa(e,a,s);break;case 21:oa(e,a,s);break;case 22:sn=(l=sn)||s.memoizedState!==null,oa(e,a,s),sn=l;break;default:oa(e,a,s)}}function __(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(s){We(a,a.return,s)}}function oE(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new d_),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new d_),a;default:throw Error(r(435,e.tag))}}function kh(e,a){var s=oE(e);a.forEach(function(l){var f=gE.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function $n(e,a){var s=a.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,M=a,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(ja(A.type)){je=A.stateNode,Wn=!1;break t}break;case 5:je=A.stateNode,Wn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if(je===null)throw Error(r(160));g_(m,M,f),je=null,Wn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)v_(a,e),a=a.sibling}var Si=null;function v_(e,a){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(a,e),Jn(e),l&4&&(Ha(3,e,e.return),Ko(3,e),Ha(5,e,e.return));break;case 1:$n(a,e),Jn(e),l&512&&(sn||s===null||zi(s,s.return)),l&64&&sa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Si;if($n(a,e),Jn(e),l&512&&(sn||s===null||zi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ra]||m[Ke]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Cn(m,l,s),m[Ke]=e,ln(m),l=m;break t;case"link":var M=hv("link","href",f).get(l+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(m=M[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break e}}m=f.createElement(l),Cn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=hv("meta","content",f).get(l+(s.content||""))){for(A=0;A<M.length;A++)if(m=M[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break e}}m=f.createElement(l),Cn(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[Ke]=e,ln(m),l=m}e.stateNode=l}else dv(f,e.type,e.stateNode);else e.stateNode=fv(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?dv(f,e.type,e.stateNode):fv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ih(e,e.memoizedProps,s.memoizedProps)}break;case 27:$n(a,e),Jn(e),l&512&&(sn||s===null||zi(s,s.return)),s!==null&&l&4&&Ih(e,e.memoizedProps,s.memoizedProps);break;case 5:if($n(a,e),Jn(e),l&512&&(sn||s===null||zi(s,s.return)),e.flags&32){f=e.stateNode;try{Li(f,"")}catch(lt){We(e,e.return,lt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Ih(e,f,s!==null?s.memoizedProps:f)),l&1024&&(Vh=!0);break;case 6:if($n(a,e),Jn(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(lt){We(e,e.return,lt)}}break;case 3:if(qu=null,f=Si,Si=Wu(a.containerInfo),$n(a,e),Si=f,Jn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{pl(a.containerInfo)}catch(lt){We(e,e.return,lt)}Vh&&(Vh=!1,x_(e));break;case 4:l=Si,Si=Wu(e.stateNode.containerInfo),$n(a,e),Jn(e),Si=l;break;case 12:$n(a,e),Jn(e);break;case 13:$n(a,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zh=Yt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kh(e,l)));break;case 22:f=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,at=sa,xt=sn;if(sa=at||f,sn=xt||G,$n(a,e),sn=xt,sa=at,Jn(e),l&8192)t:for(a=e.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(s===null||G||sa||sn||Cr(e)),s=null,a=e;;){if(a.tag===5||a.tag===26){if(s===null){G=s=a;try{if(m=G.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=G.stateNode;var At=G.memoizedProps.style,ot=At!=null&&At.hasOwnProperty("display")?At.display:null;A.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(lt){We(G,G.return,lt)}}}else if(a.tag===6){if(s===null){G=a;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(lt){We(G,G.return,lt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,kh(e,s))));break;case 19:$n(a,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kh(e,l)));break;case 30:break;case 21:break;default:$n(a,e),Jn(e)}}function Jn(e){var a=e.flags;if(a&2){try{for(var s,l=e.return;l!==null;){if(f_(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=Hh(e);Nu(e,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Li(M,""),s.flags&=-33);var A=Hh(e);Nu(e,A,M);break;case 3:case 4:var G=s.stateNode.containerInfo,at=Hh(e);Gh(e,at,G);break;default:throw Error(r(161))}}catch(xt){We(e,e.return,xt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function x_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;x_(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ga(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)p_(e,a.alternate,a),a=a.sibling}function Cr(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Ha(4,a,a.return),Cr(a);break;case 1:zi(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&u_(a,a.return,s),Cr(a);break;case 27:sl(a.stateNode);case 26:case 5:zi(a,a.return),Cr(a);break;case 22:a.memoizedState===null&&Cr(a);break;case 30:Cr(a);break;default:Cr(a)}e=e.sibling}}function Va(e,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=e,m=a,M=m.flags;switch(m.tag){case 0:case 11:case 15:Va(f,m,s),Ko(4,m);break;case 1:if(Va(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(at){We(l,l.return,at)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)jg(G[f],A)}catch(at){We(l,l.return,at)}}s&&M&64&&l_(m),Qo(m,m.return);break;case 27:h_(m);case 26:case 5:Va(f,m,s),s&&l===null&&M&4&&c_(m),Qo(m,m.return);break;case 12:Va(f,m,s);break;case 13:Va(f,m,s),s&&M&4&&__(f,m);break;case 22:m.memoizedState===null&&Va(f,m,s),Qo(m,m.return);break;case 30:break;default:Va(f,m,s)}a=a.sibling}}function Xh(e,a){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&zo(s))}function Wh(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&zo(e))}function Fi(e,a,s,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)y_(e,a,s,l),a=a.sibling}function y_(e,a,s,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(e,a,s,l),f&2048&&Ko(9,a);break;case 1:Fi(e,a,s,l);break;case 3:Fi(e,a,s,l),f&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&zo(e)));break;case 12:if(f&2048){Fi(e,a,s,l),e=a.stateNode;try{var m=a.memoizedProps,M=m.id,A=m.onPostCommit;typeof A=="function"&&A(M,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){We(a,a.return,G)}}else Fi(e,a,s,l);break;case 13:Fi(e,a,s,l);break;case 23:break;case 22:m=a.stateNode,M=a.alternate,a.memoizedState!==null?m._visibility&2?Fi(e,a,s,l):$o(e,a):m._visibility&2?Fi(e,a,s,l):(m._visibility|=2,xs(e,a,s,l,(a.subtreeFlags&10256)!==0)),f&2048&&Xh(M,a);break;case 24:Fi(e,a,s,l),f&2048&&Wh(a.alternate,a);break;default:Fi(e,a,s,l)}}function xs(e,a,s,l,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=e,M=a,A=s,G=l,at=M.flags;switch(M.tag){case 0:case 11:case 15:xs(m,M,A,G,f),Ko(8,M);break;case 23:break;case 22:var xt=M.stateNode;M.memoizedState!==null?xt._visibility&2?xs(m,M,A,G,f):$o(m,M):(xt._visibility|=2,xs(m,M,A,G,f)),f&&at&2048&&Xh(M.alternate,M);break;case 24:xs(m,M,A,G,f),f&&at&2048&&Wh(M.alternate,M);break;default:xs(m,M,A,G,f)}a=a.sibling}}function $o(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=e,l=a,f=l.flags;switch(l.tag){case 22:$o(s,l),f&2048&&Xh(l.alternate,l);break;case 24:$o(s,l),f&2048&&Wh(l.alternate,l);break;default:$o(s,l)}a=a.sibling}}var Jo=8192;function ys(e){if(e.subtreeFlags&Jo)for(e=e.child;e!==null;)S_(e),e=e.sibling}function S_(e){switch(e.tag){case 26:ys(e),e.flags&Jo&&e.memoizedState!==null&&YE(Si,e.memoizedState,e.memoizedProps);break;case 5:ys(e);break;case 3:case 4:var a=Si;Si=Wu(e.stateNode.containerInfo),ys(e),Si=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Jo,Jo=16777216,ys(e),Jo=a):ys(e));break;default:ys(e)}}function M_(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function tl(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];Mn=l,b_(l,e)}M_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)E_(e),e=e.sibling}function E_(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Lu(e)):tl(e);break;default:tl(e)}}function Lu(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];Mn=l,b_(l,e)}M_(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Ha(8,a,a.return),Lu(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,Lu(a));break;default:Lu(a)}e=e.sibling}}function b_(e,a){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Ha(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else t:for(s=e;Mn!==null;){l=Mn;var f=l.sibling,m=l.return;if(m_(l),l===s){Mn=null;break t}if(f!==null){f.return=m,Mn=f;break t}Mn=m}}}var lE={getCacheForType:function(e){var a=Ln(pn),s=a.data.get(e);return s===void 0&&(s=e(),a.data.set(e,s)),s}},uE=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,Se=null,Re=0,ze=0,ti=null,ka=!1,Ss=!1,Yh=!1,la=0,an=0,Xa=0,Dr=0,qh=0,di=0,Ms=0,el=null,Yn=null,jh=!1,Zh=0,Ou=1/0,Pu=null,Wa=null,Rn=0,Ya=null,Es=null,bs=0,Kh=0,Qh=null,T_=null,nl=0,$h=null;function ei(){if((Pe&2)!==0&&Re!==0)return Re&-Re;if(F.T!==null){var e=fs;return e!==0?e:rd()}return Te()}function A_(){di===0&&(di=(Re&536870912)===0||Oe?k():536870912);var e=hi.current;return e!==null&&(e.flags|=32),di}function ni(e,a,s){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Ts(e,0),qa(e,Re,di,!1)),yt(e,s),((Pe&2)===0||e!==qe)&&(e===qe&&((Pe&2)===0&&(Dr|=s),an===4&&qa(e,Re,di,!1)),Bi(e))}function w_(e,a,s){if((Pe&6)!==0)throw Error(r(327));var l=!s&&(a&124)===0&&(a&e.expiredLanes)===0||Jt(e,a),f=l?hE(e,a):ed(e,a,!0),m=l;do{if(f===0){Ss&&!l&&qa(e,a,0,!1);break}else{if(s=e.current.alternate,m&&!cE(s)){f=ed(e,a,!1),m=!1;continue}if(f===2){if(m=a,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;t:{var A=e;f=el;var G=A.current.memoizedState.isDehydrated;if(G&&(Ts(A,M).flags|=256),M=ed(A,M,!1),M!==2){if(Yh&&!G){A.errorRecoveryDisabledLanes|=m,Dr|=m,f=4;break t}m=Yn,Yn=f,m!==null&&(Yn===null?Yn=m:Yn.push.apply(Yn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){Ts(e,0),qa(e,a,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:qa(l,a,di,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(f=Zh+300-Yt(),10<f)){if(qa(l,a,di,!ka),ee(l,0,!0)!==0)break t;l.timeoutHandle=nv(R_.bind(null,l,s,Yn,Pu,jh,a,di,Dr,Ms,ka,m,2,-0,0),f);break t}R_(l,s,Yn,Pu,jh,a,di,Dr,Ms,ka,m,0,-0,0)}}break}while(!0);Bi(e)}function R_(e,a,s,l,f,m,M,A,G,at,xt,At,ot,lt){if(e.timeoutHandle=-1,At=a.subtreeFlags,(At&8192||(At&16785408)===16785408)&&(ul={stylesheets:null,count:0,unsuspend:WE},S_(a),At=qE(),At!==null)){e.cancelPendingCommit=At(P_.bind(null,e,a,m,s,l,f,M,A,G,xt,1,ot,lt)),qa(e,m,M,!at);return}P_(e,a,m,s,l,f,M,A,G)}function cE(e){for(var a=e;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Kn(m(),f))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function qa(e,a,s,l){a&=~qh,a&=~Dr,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var f=a;0<f;){var m=31-Pt(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&It(e,s,a)}function zu(){return(Pe&6)===0?(il(0),!1):!0}function Jh(){if(Se!==null){if(ze===0)var e=Se.return;else e=Se,ta=br=null,gh(e),_s=null,qo=0,e=Se;for(;e!==null;)o_(e.alternate,e),e=e.return;Se=null}}function Ts(e,a){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,RE(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Jh(),qe=e,Se=s=Qi(e.current,null),Re=a,ze=0,ti=null,ka=!1,Ss=Jt(e,a),Yh=!1,Ms=di=qh=Dr=Xa=an=0,Yn=el=null,jh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var f=31-Pt(l),m=1<<f;a|=e[f],l&=~m}return la=a,au(),s}function C_(e,a){ve=null,F.H=Eu,a===Bo||a===du?(a=Yg(),ze=3):a===kg?(a=Yg(),ze=4):ze=a===q0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ti=a,Se===null&&(an=1,Ru(e,li(a,e.current)))}function D_(){var e=F.H;return F.H=Eu,e===null?Eu:e}function U_(){var e=F.A;return F.A=lE,e}function td(){an=4,ka||(Re&4194048)!==Re&&hi.current!==null||(Ss=!0),(Xa&134217727)===0&&(Dr&134217727)===0||qe===null||qa(qe,Re,di,!1)}function ed(e,a,s){var l=Pe;Pe|=2;var f=D_(),m=U_();(qe!==e||Re!==a)&&(Pu=null,Ts(e,a)),a=!1;var M=an;t:do try{if(ze!==0&&Se!==null){var A=Se,G=ti;switch(ze){case 8:Jh(),M=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(a=!0);var at=ze;if(ze=0,ti=null,As(e,A,G,at),s&&Ss){M=0;break t}break;default:at=ze,ze=0,ti=null,As(e,A,G,at)}}fE(),M=an;break}catch(xt){C_(e,xt)}while(!0);return a&&e.shellSuspendCounter++,ta=br=null,Pe=l,F.H=f,F.A=m,Se===null&&(qe=null,Re=0,au()),M}function fE(){for(;Se!==null;)N_(Se)}function hE(e,a){var s=Pe;Pe|=2;var l=D_(),f=U_();qe!==e||Re!==a?(Pu=null,Ou=Yt()+500,Ts(e,a)):Ss=Jt(e,a);t:do try{if(ze!==0&&Se!==null){a=Se;var m=ti;e:switch(ze){case 1:ze=0,ti=null,As(e,a,m,1);break;case 2:case 9:if(Xg(m)){ze=0,ti=null,L_(a);break}a=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Bi(e)},m.then(a,a);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Xg(m)?(ze=0,ti=null,L_(a)):(ze=0,ti=null,As(e,a,m,7));break;case 5:var M=null;switch(Se.tag){case 26:M=Se.memoizedState;case 5:case 27:var A=Se;if(!M||pv(M)){ze=0,ti=null;var G=A.sibling;if(G!==null)Se=G;else{var at=A.return;at!==null?(Se=at,Fu(at)):Se=null}break e}}ze=0,ti=null,As(e,a,m,5);break;case 6:ze=0,ti=null,As(e,a,m,6);break;case 8:Jh(),an=6;break t;default:throw Error(r(462))}}dE();break}catch(xt){C_(e,xt)}while(!0);return ta=br=null,F.H=l,F.A=f,Pe=s,Se!==null?0:(qe=null,Re=0,au(),an)}function dE(){for(;Se!==null&&!Zt();)N_(Se)}function N_(e){var a=r_(e.alternate,e,la);e.memoizedProps=e.pendingProps,a===null?Fu(e):Se=a}function L_(e){var a=e,s=a.alternate;switch(a.tag){case 15:case 0:a=J0(s,a,a.pendingProps,a.type,void 0,Re);break;case 11:a=J0(s,a,a.pendingProps,a.type.render,a.ref,Re);break;case 5:gh(a);default:o_(s,a),a=Se=Og(a,la),a=r_(s,a,la)}e.memoizedProps=e.pendingProps,a===null?Fu(e):Se=a}function As(e,a,s,l){ta=br=null,gh(a),_s=null,qo=0;var f=a.return;try{if(nE(e,f,a,s,Re)){an=1,Ru(e,li(s,e.current)),Se=null;return}}catch(m){if(f!==null)throw Se=f,m;an=1,Ru(e,li(s,e.current)),Se=null;return}a.flags&32768?(Oe||l===1?e=!0:Ss||(Re&536870912)!==0?e=!1:(ka=e=!0,(l===2||l===9||l===3||l===6)&&(l=hi.current,l!==null&&l.tag===13&&(l.flags|=16384))),O_(a,e)):Fu(a)}function Fu(e){var a=e;do{if((a.flags&32768)!==0){O_(a,ka);return}e=a.return;var s=aE(a.alternate,a,la);if(s!==null){Se=s;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=e}while(a!==null);an===0&&(an=5)}function O_(e,a){do{var s=rE(e.alternate,e);if(s!==null){s.flags&=32767,Se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(e=e.sibling,e!==null)){Se=e;return}Se=e=s}while(e!==null);an=6,Se=null}function P_(e,a,s,l,f,m,M,A,G){e.cancelPendingCommit=null;do Bu();while(Rn!==0);if((Pe&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(m=a.lanes|a.childLanes,m|=Wf,Bt(e,s,m,M,A,G),e===qe&&(Se=qe=null,Re=0),Es=a,Ya=e,bs=s,Kh=m,Qh=f,T_=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_E(O,function(){return H_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=Y.p,Y.p=2,M=Pe,Pe|=4;try{sE(e,a,s)}finally{Pe=M,Y.p=f,F.T=l}}Rn=1,z_(),F_(),B_()}}function z_(){if(Rn===1){Rn=0;var e=Ya,a=Es,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=Y.p;Y.p=2;var f=Pe;Pe|=4;try{v_(a,e);var m=dd,M=bg(e.containerInfo),A=m.focusedElem,G=m.selectionRange;if(M!==A&&A&&A.ownerDocument&&Eg(A.ownerDocument.documentElement,A)){if(G!==null&&Hf(A)){var at=G.start,xt=G.end;if(xt===void 0&&(xt=at),"selectionStart"in A)A.selectionStart=at,A.selectionEnd=Math.min(xt,A.value.length);else{var At=A.ownerDocument||document,ot=At&&At.defaultView||window;if(ot.getSelection){var lt=ot.getSelection(),ue=A.textContent.length,se=Math.min(G.start,ue),He=G.end===void 0?se:Math.min(G.end,ue);!lt.extend&&se>He&&(M=He,He=se,se=M);var q=Mg(A,se),V=Mg(A,He);if(q&&V&&(lt.rangeCount!==1||lt.anchorNode!==q.node||lt.anchorOffset!==q.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var tt=At.createRange();tt.setStart(q.node,q.offset),lt.removeAllRanges(),se>He?(lt.addRange(tt),lt.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),lt.addRange(tt))}}}}for(At=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&At.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<At.length;A++){var Mt=At[A];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}Ku=!!hd,dd=hd=null}finally{Pe=f,Y.p=l,F.T=s}}e.current=a,Rn=2}}function F_(){if(Rn===2){Rn=0;var e=Ya,a=Es,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=Y.p;Y.p=2;var f=Pe;Pe|=4;try{p_(e,a.alternate,a)}finally{Pe=f,Y.p=l,F.T=s}}Rn=3}}function B_(){if(Rn===4||Rn===3){Rn=0,Gt();var e=Ya,a=Es,s=bs,l=T_;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Rn=5:(Rn=0,Es=Ya=null,I_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Wa=null),tn(s),a=a.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(mt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=F.T,f=Y.p,Y.p=2,F.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var A=l[M];m(A.value,{componentStack:A.stack})}}finally{F.T=a,Y.p=f}}(bs&3)!==0&&Bu(),Bi(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===$h?nl++:(nl=0,$h=e):nl=0,il(0)}}function I_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,zo(a)))}function Bu(e){return z_(),F_(),B_(),H_()}function H_(){if(Rn!==5)return!1;var e=Ya,a=Kh;Kh=0;var s=tn(bs),l=F.T,f=Y.p;try{Y.p=32>s?32:s,F.T=null,s=Qh,Qh=null;var m=Ya,M=bs;if(Rn=0,Es=Ya=null,bs=0,(Pe&6)!==0)throw Error(r(331));var A=Pe;if(Pe|=4,E_(m.current),y_(m,m.current,M,s),Pe=A,il(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(mt,m)}catch{}return!0}finally{Y.p=f,F.T=l,I_(e,a)}}function G_(e,a,s){a=li(s,a),a=Dh(e.stateNode,a,2),e=za(e,a,2),e!==null&&(yt(e,2),Bi(e))}function We(e,a,s){if(e.tag===3)G_(e,e,s);else for(;a!==null;){if(a.tag===3){G_(a,e,s);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Wa===null||!Wa.has(l))){e=li(s,e),s=W0(2),l=za(a,s,2),l!==null&&(Y0(s,l,a,e),yt(l,2),Bi(l));break}}a=a.return}}function nd(e,a,s){var l=e.pingCache;if(l===null){l=e.pingCache=new uE;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(s)||(Yh=!0,f.add(s),e=pE.bind(null,e,a,s),a.then(e,e))}function pE(e,a,s){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,qe===e&&(Re&s)===s&&(an===4||an===3&&(Re&62914560)===Re&&300>Yt()-Zh?(Pe&2)===0&&Ts(e,0):qh|=s,Ms===Re&&(Ms=0)),Bi(e)}function V_(e,a){a===0&&(a=Ft()),e=os(e,a),e!==null&&(yt(e,a),Bi(e))}function mE(e){var a=e.memoizedState,s=0;a!==null&&(s=a.retryLane),V_(e,s)}function gE(e,a){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(a),V_(e,s)}function _E(e,a){return zt(e,a)}var Iu=null,ws=null,id=!1,Hu=!1,ad=!1,Ur=0;function Bi(e){e!==ws&&e.next===null&&(ws===null?Iu=ws=e:ws=ws.next=e),Hu=!0,id||(id=!0,xE())}function il(e,a){if(!ad&&Hu){ad=!0;do for(var s=!1,l=Iu;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Pt(42|e)+1)-1,m&=f&~(M&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Y_(l,m))}else m=Re,m=ee(l,l===qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Jt(l,m)||(s=!0,Y_(l,m));l=l.next}while(s);ad=!1}}function vE(){k_()}function k_(){Hu=id=!1;var e=0;Ur!==0&&(wE()&&(e=Ur),Ur=0);for(var a=Yt(),s=null,l=Iu;l!==null;){var f=l.next,m=X_(l,a);m===0?(l.next=null,s===null?Iu=f:s.next=f,f===null&&(ws=s)):(s=l,(e!==0||(m&3)!==0)&&(Hu=!0)),l=f}il(e)}function X_(e,a){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-Pt(m),A=1<<M,G=f[M];G===-1?((A&s)===0||(A&l)!==0)&&(f[M]=pe(A,a)):G<=a&&(e.expiredLanes|=A),m&=~A}if(a=qe,s=Re,s=ee(e,e===a?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===a&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&z(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Jt(e,s)){if(a=s&-s,a===e.callbackPriority)return a;switch(l!==null&&z(l),tn(s)){case 2:case 8:s=Kt;break;case 32:s=O;break;case 268435456:s=rt;break;default:s=O}return l=W_.bind(null,e),s=zt(s,l),e.callbackPriority=a,e.callbackNode=s,a}return l!==null&&l!==null&&z(l),e.callbackPriority=2,e.callbackNode=null,2}function W_(e,a){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Bu()&&e.callbackNode!==s)return null;var l=Re;return l=ee(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(w_(e,l,a),X_(e,Yt()),e.callbackNode!=null&&e.callbackNode===s?W_.bind(null,e):null)}function Y_(e,a){if(Bu())return null;w_(e,a,!0)}function xE(){CE(function(){(Pe&6)!==0?zt(de,vE):k_()})}function rd(){return Ur===0&&(Ur=k()),Ur}function q_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ql(""+e)}function j_(e,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,e.id&&s.setAttribute("form",e.id),a.parentNode.insertBefore(s,a),e=new FormData(e),s.parentNode.removeChild(s),e}function yE(e,a,s,l,f){if(a==="submit"&&s&&s.stateNode===f){var m=q_((f[hn]||null).action),M=l.submitter;M&&(a=(a=M[hn]||null)?q_(a.formAction):M.getAttribute("formAction"),a!==null&&(m=a,M=null));var A=new eu("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ur!==0){var G=M?j_(f,M):new FormData(f);Th(s,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(A.preventDefault(),G=M?j_(f,M):new FormData(f),Th(s,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var sd=0;sd<Xf.length;sd++){var od=Xf[sd],SE=od.toLowerCase(),ME=od[0].toUpperCase()+od.slice(1);yi(SE,"on"+ME)}yi(wg,"onAnimationEnd"),yi(Rg,"onAnimationIteration"),yi(Cg,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(IM,"onTransitionRun"),yi(HM,"onTransitionStart"),yi(GM,"onTransitionCancel"),yi(Dg,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function Z_(e,a){a=(a&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var M=l.length-1;0<=M;M--){var A=l[M],G=A.instance,at=A.currentTarget;if(A=A.listener,G!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=at;try{m(f)}catch(xt){wu(xt)}f.currentTarget=null,m=G}else for(M=0;M<l.length;M++){if(A=l[M],G=A.instance,at=A.currentTarget,A=A.listener,G!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=at;try{m(f)}catch(xt){wu(xt)}f.currentTarget=null,m=G}}}}function Me(e,a){var s=a[Xi];s===void 0&&(s=a[Xi]=new Set);var l=e+"__bubble";s.has(l)||(K_(a,e,2,!1),s.add(l))}function ld(e,a,s){var l=0;a&&(l|=4),K_(s,e,l,a)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function ud(e){if(!e[Gu]){e[Gu]=!0,Zl.forEach(function(s){s!=="selectionchange"&&(EE.has(s)||ld(s,!1,e),ld(s,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Gu]||(a[Gu]=!0,ld("selectionchange",!1,a))}}function K_(e,a,s,l){switch(yv(a)){case 2:var f=KE;break;case 8:f=QE;break;default:f=Ed}s=f.bind(null,a,s,e),f=void 0,!Uf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(a,s,{capture:!0,passive:f}):e.addEventListener(a,s,!0):f!==void 0?e.addEventListener(a,s,{passive:f}):e.addEventListener(a,s,!1)}function cd(e,a,s,l,f){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===f)break;if(M===4)for(M=l.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;A!==null;){if(M=Wi(A),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){l=m=M;continue t}A=A.parentNode}}l=l.return}ig(function(){var at=m,xt=Cf(s),At=[];t:{var ot=Ug.get(e);if(ot!==void 0){var lt=eu,ue=e;switch(e){case"keypress":if(Jl(s)===0)break t;case"keydown":case"keyup":lt=_M;break;case"focusin":ue="focus",lt=Pf;break;case"focusout":ue="blur",lt=Pf;break;case"beforeblur":case"afterblur":lt=Pf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=rM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=yM;break;case wg:case Rg:case Cg:lt=lM;break;case Dg:lt=MM;break;case"scroll":case"scrollend":lt=iM;break;case"wheel":lt=bM;break;case"copy":case"cut":case"paste":lt=cM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=lg;break;case"toggle":case"beforetoggle":lt=AM}var se=(a&4)!==0,He=!se&&(e==="scroll"||e==="scrollend"),q=se?ot!==null?ot+"Capture":null:ot;se=[];for(var V=at,tt;V!==null;){var Mt=V;if(tt=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||tt===null||q===null||(Mt=Eo(V,q),Mt!=null&&se.push(rl(V,Mt,tt))),He)break;V=V.return}0<se.length&&(ot=new lt(ot,ue,null,s,xt),At.push({event:ot,listeners:se}))}}if((a&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",ot&&s!==Rf&&(ue=s.relatedTarget||s.fromElement)&&(Wi(ue)||ue[Dn]))break t;if((lt||ot)&&(ot=xt.window===xt?xt:(ot=xt.ownerDocument)?ot.defaultView||ot.parentWindow:window,lt?(ue=s.relatedTarget||s.toElement,lt=at,ue=ue?Wi(ue):null,ue!==null&&(He=u(ue),se=ue.tag,ue!==He||se!==5&&se!==27&&se!==6)&&(ue=null)):(lt=null,ue=at),lt!==ue)){if(se=sg,Mt="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(se=lg,Mt="onPointerLeave",q="onPointerEnter",V="pointer"),He=lt==null?ot:mr(lt),tt=ue==null?ot:mr(ue),ot=new se(Mt,V+"leave",lt,s,xt),ot.target=He,ot.relatedTarget=tt,Mt=null,Wi(xt)===at&&(se=new se(q,V+"enter",ue,s,xt),se.target=tt,se.relatedTarget=He,Mt=se),He=Mt,lt&&ue)e:{for(se=lt,q=ue,V=0,tt=se;tt;tt=Rs(tt))V++;for(tt=0,Mt=q;Mt;Mt=Rs(Mt))tt++;for(;0<V-tt;)se=Rs(se),V--;for(;0<tt-V;)q=Rs(q),tt--;for(;V--;){if(se===q||q!==null&&se===q.alternate)break e;se=Rs(se),q=Rs(q)}se=null}else se=null;lt!==null&&Q_(At,ot,lt,se,!1),ue!==null&&He!==null&&Q_(At,He,ue,se,!0)}}t:{if(ot=at?mr(at):window,lt=ot.nodeName&&ot.nodeName.toLowerCase(),lt==="select"||lt==="input"&&ot.type==="file")var Qt=gg;else if(pg(ot))if(_g)Qt=zM;else{Qt=OM;var xe=LM}else lt=ot.nodeName,!lt||lt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?at&&wf(at.elementType)&&(Qt=gg):Qt=PM;if(Qt&&(Qt=Qt(e,at))){mg(At,Qt,s,xt);break t}xe&&xe(e,ot,at),e==="focusout"&&at&&ot.type==="number"&&at.memoizedProps.value!=null&&Nn(ot,"number",ot.value)}switch(xe=at?mr(at):window,e){case"focusin":(pg(xe)||xe.contentEditable==="true")&&(as=xe,Gf=at,Uo=null);break;case"focusout":Uo=Gf=as=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,Tg(At,s,xt);break;case"selectionchange":if(BM)break;case"keydown":case"keyup":Tg(At,s,xt)}var ne;if(Ff)t:{switch(e){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else is?hg(e,s)&&(oe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(oe="onCompositionStart");oe&&(ug&&s.locale!=="ko"&&(is||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&is&&(ne=ag()):(Na=xt,Nf="value"in Na?Na.value:Na.textContent,is=!0)),xe=Vu(at,oe),0<xe.length&&(oe=new og(oe,e,null,s,xt),At.push({event:oe,listeners:xe}),ne?oe.data=ne:(ne=dg(s),ne!==null&&(oe.data=ne)))),(ne=RM?CM(e,s):DM(e,s))&&(oe=Vu(at,"onBeforeInput"),0<oe.length&&(xe=new og("onBeforeInput","beforeinput",null,s,xt),At.push({event:xe,listeners:oe}),xe.data=ne)),yE(At,e,at,s,xt)}Z_(At,a)})}function rl(e,a,s){return{instance:e,listener:a,currentTarget:s}}function Vu(e,a){for(var s=a+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Eo(e,s),f!=null&&l.unshift(rl(e,f,m)),f=Eo(e,a),f!=null&&l.push(rl(e,f,m))),e.tag===3)return l;e=e.return}return[]}function Rs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Q_(e,a,s,l,f){for(var m=a._reactName,M=[];s!==null&&s!==l;){var A=s,G=A.alternate,at=A.stateNode;if(A=A.tag,G!==null&&G===l)break;A!==5&&A!==26&&A!==27||at===null||(G=at,f?(at=Eo(s,m),at!=null&&M.unshift(rl(s,at,G))):f||(at=Eo(s,m),at!=null&&M.push(rl(s,at,G)))),s=s.return}M.length!==0&&e.push({event:a,listeners:M})}var bE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function $_(e){return(typeof e=="string"?e:""+e).replace(bE,`
`).replace(TE,"")}function J_(e,a){return a=$_(a),$_(e)===a}function ku(){}function Ie(e,a,s,l,f,m){switch(s){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Li(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Li(e,""+l);break;case"className":Ht(e,"class",l);break;case"tabIndex":Ht(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ht(e,s,l);break;case"style":eg(e,l,m);break;case"data":if(a!=="object"){Ht(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ql(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(a!=="input"&&Ie(e,a,"name",f.name,f,null),Ie(e,a,"formEncType",f.formEncType,f,null),Ie(e,a,"formMethod",f.formMethod,f,null),Ie(e,a,"formTarget",f.formTarget,f,null)):(Ie(e,a,"encType",f.encType,f,null),Ie(e,a,"method",f.method,f,null),Ie(e,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ql(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=ku);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Ql(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Ot(e,"popover",l);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ot(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=eM.get(s)||s,Ot(e,s,l))}}function fd(e,a,s,l,f,m){switch(s){case"style":eg(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Li(e,l):(typeof l=="number"||typeof l=="bigint")&&Li(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ku);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),a=s.slice(2,f?s.length-7:void 0),m=e[hn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(a,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(a,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Ot(e,s,l)}}}function Cn(e,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ie(e,a,m,M,s,null)}}f&&Ie(e,a,"srcSet",s.srcSet,s,null),l&&Ie(e,a,"src",s.src,s,null);return;case"input":Me("invalid",e);var A=m=M=f=null,G=null,at=null;for(l in s)if(s.hasOwnProperty(l)){var xt=s[l];if(xt!=null)switch(l){case"name":f=xt;break;case"type":M=xt;break;case"checked":G=xt;break;case"defaultChecked":at=xt;break;case"value":m=xt;break;case"defaultValue":A=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,a));break;default:Ie(e,a,l,xt,s,null)}}Xe(e,m,A,G,at,M,f,!1),en(e);return;case"select":Me("invalid",e),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Ie(e,a,f,A,s,null)}a=m,s=M,e.multiple=!!l,a!=null?dn(e,!!l,a,!1):s!=null&&dn(e,!!l,s,!0);return;case"textarea":Me("invalid",e),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ie(e,a,M,A,s,null)}An(e,l,f,m),en(e);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ie(e,a,G,l,s,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<al.length;l++)Me(al[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in s)if(s.hasOwnProperty(at)&&(l=s[at],l!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ie(e,a,at,l,s,null)}return;default:if(wf(a)){for(xt in s)s.hasOwnProperty(xt)&&(l=s[xt],l!==void 0&&fd(e,a,xt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Ie(e,a,A,l,s,null))}function AE(e,a,s,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,A=null,G=null,at=null,xt=null;for(lt in s){var At=s[lt];if(s.hasOwnProperty(lt)&&At!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":G=At;default:l.hasOwnProperty(lt)||Ie(e,a,lt,null,l,At)}}for(var ot in l){var lt=l[ot];if(At=s[ot],l.hasOwnProperty(ot)&&(lt!=null||At!=null))switch(ot){case"type":m=lt;break;case"name":f=lt;break;case"checked":at=lt;break;case"defaultChecked":xt=lt;break;case"value":M=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,a));break;default:lt!==At&&Ie(e,a,ot,lt,l,At)}}ji(e,M,A,G,at,xt,m,f);return;case"select":lt=M=A=ot=null;for(m in s)if(G=s[m],s.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":lt=G;default:l.hasOwnProperty(m)||Ie(e,a,m,null,l,G)}for(f in l)if(m=l[f],G=s[f],l.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":ot=m;break;case"defaultValue":A=m;break;case"multiple":M=m;default:m!==G&&Ie(e,a,f,m,l,G)}a=A,s=M,l=lt,ot!=null?dn(e,!!s,ot,!1):!!l!=!!s&&(a!=null?dn(e,!!s,a,!0):dn(e,!!s,s?[]:"",!1));return;case"textarea":lt=ot=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ie(e,a,A,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":ot=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Ie(e,a,M,f,l,m)}yn(e,ot,lt);return;case"option":for(var ue in s)if(ot=s[ue],s.hasOwnProperty(ue)&&ot!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Ie(e,a,ue,null,l,ot)}for(G in l)if(ot=l[G],lt=s[G],l.hasOwnProperty(G)&&ot!==lt&&(ot!=null||lt!=null))switch(G){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ie(e,a,G,ot,l,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in s)ot=s[se],s.hasOwnProperty(se)&&ot!=null&&!l.hasOwnProperty(se)&&Ie(e,a,se,null,l,ot);for(at in l)if(ot=l[at],lt=s[at],l.hasOwnProperty(at)&&ot!==lt&&(ot!=null||lt!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,a));break;default:Ie(e,a,at,ot,l,lt)}return;default:if(wf(a)){for(var He in s)ot=s[He],s.hasOwnProperty(He)&&ot!==void 0&&!l.hasOwnProperty(He)&&fd(e,a,He,void 0,l,ot);for(xt in l)ot=l[xt],lt=s[xt],!l.hasOwnProperty(xt)||ot===lt||ot===void 0&&lt===void 0||fd(e,a,xt,ot,l,lt);return}}for(var q in s)ot=s[q],s.hasOwnProperty(q)&&ot!=null&&!l.hasOwnProperty(q)&&Ie(e,a,q,null,l,ot);for(At in l)ot=l[At],lt=s[At],!l.hasOwnProperty(At)||ot===lt||ot==null&&lt==null||Ie(e,a,At,ot,l,lt)}var hd=null,dd=null;function Xu(e){return e.nodeType===9?e:e.ownerDocument}function tv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ev(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function pd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var md=null;function wE(){var e=window.event;return e&&e.type==="popstate"?e===md?!1:(md=e,!0):(md=null,!1)}var nv=typeof setTimeout=="function"?setTimeout:void 0,RE=typeof clearTimeout=="function"?clearTimeout:void 0,iv=typeof Promise=="function"?Promise:void 0,CE=typeof queueMicrotask=="function"?queueMicrotask:typeof iv<"u"?function(e){return iv.resolve(null).then(e).catch(DE)}:nv;function DE(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function av(e,a){var s=a,l=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var M=e.ownerDocument;if(s&1&&sl(M.documentElement),s&2&&sl(M.body),s&4)for(s=M.head,sl(s),M=s.firstChild;M;){var A=M.nextSibling,G=M.nodeName;M[Ra]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(f===0){e.removeChild(m),pl(a);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);pl(a)}function gd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":gd(s),Ca(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function UE(e,a,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ra])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function NE(e,a,s){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Mi(e.nextSibling),e===null))return null;return e}function _d(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function LE(e,a){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")a();else{var l=function(){a(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mi(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var vd=null;function rv(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return e;a--}else s==="/$"&&a++}e=e.previousSibling}return null}function sv(e,a,s){switch(a=Xu(s),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function sl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ca(e)}var pi=new Map,ov=new Set;function Wu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=Y.d;Y.d={f:OE,r:PE,D:zE,C:FE,L:BE,m:IE,X:GE,S:HE,M:VE};function OE(){var e=ua.f(),a=zu();return e||a}function PE(e){var a=Yi(e);a!==null&&a.tag===5&&a.type==="form"?w0(a):ua.r(e)}var Cs=typeof document>"u"?null:document;function lv(e,a,s){var l=Cs;if(l&&typeof a=="string"&&a){var f=Ye(a);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),ov.has(f)||(ov.add(f),e={rel:e,crossOrigin:s,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),Cn(a,"link",e),ln(a),l.head.appendChild(a)))}}function zE(e){ua.D(e),lv("dns-prefetch",e,null)}function FE(e,a){ua.C(e,a),lv("preconnect",e,a)}function BE(e,a,s){ua.L(e,a,s);var l=Cs;if(l&&e&&a){var f='link[rel="preload"][as="'+Ye(a)+'"]';a==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ye(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ye(s.imageSizes)+'"]')):f+='[href="'+Ye(e)+'"]';var m=f;switch(a){case"style":m=Ds(e);break;case"script":m=Us(e)}pi.has(m)||(e=g({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:e,as:a},s),pi.set(m,e),l.querySelector(f)!==null||a==="style"&&l.querySelector(ol(m))||a==="script"&&l.querySelector(ll(m))||(a=l.createElement("link"),Cn(a,"link",e),ln(a),l.head.appendChild(a)))}}function IE(e,a){ua.m(e,a);var s=Cs;if(s&&e){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+Ye(l)+'"][href="'+Ye(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Us(e)}if(!pi.has(m)&&(e=g({rel:"modulepreload",href:e},a),pi.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ll(m)))return}l=s.createElement("link"),Cn(l,"link",e),ln(l),s.head.appendChild(l)}}}function HE(e,a,s){ua.S(e,a,s);var l=Cs;if(l&&e){var f=Da(l).hoistableStyles,m=Ds(e);a=a||"default";var M=f.get(m);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(ol(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},s),(s=pi.get(m))&&xd(e,s);var G=M=l.createElement("link");ln(G),Cn(G,"link",e),G._p=new Promise(function(at,xt){G.onload=at,G.onerror=xt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Yu(M,a,l)}M={type:"stylesheet",instance:M,count:1,state:A},f.set(m,M)}}}function GE(e,a){ua.X(e,a);var s=Cs;if(s&&e){var l=Da(s).hoistableScripts,f=Us(e),m=l.get(f);m||(m=s.querySelector(ll(f)),m||(e=g({src:e,async:!0},a),(a=pi.get(f))&&yd(e,a),m=s.createElement("script"),ln(m),Cn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function VE(e,a){ua.M(e,a);var s=Cs;if(s&&e){var l=Da(s).hoistableScripts,f=Us(e),m=l.get(f);m||(m=s.querySelector(ll(f)),m||(e=g({src:e,async:!0,type:"module"},a),(a=pi.get(f))&&yd(e,a),m=s.createElement("script"),ln(m),Cn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function uv(e,a,s,l){var f=(f=nt.current)?Wu(f):null;if(!f)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=Ds(s.href),s=Da(f).hoistableStyles,l=s.get(a),l||(l={type:"style",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ds(s.href);var m=Da(f).hoistableStyles,M=m.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=f.querySelector(ol(e)))&&!m._p&&(M.instance=m,M.state.loading=5),pi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(e,s),m||kE(f,e,s,M.state))),a&&l===null)throw Error(r(528,""));return M}if(a&&l!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Us(s),s=Da(f).hoistableScripts,l=s.get(a),l||(l={type:"script",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ds(e){return'href="'+Ye(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function cv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function kE(e,a,s,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Cn(a,"link",s),ln(a),e.head.appendChild(a))}function Us(e){return'[src="'+Ye(e)+'"]'}function ll(e){return"script[async]"+e}function fv(e,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Ye(s.href)+'"]');if(l)return a.instance=l,ln(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ln(l),Cn(l,"style",f),Yu(l,s.precedence,e),a.instance=l;case"stylesheet":f=Ds(s.href);var m=e.querySelector(ol(f));if(m)return a.state.loading|=4,a.instance=m,ln(m),m;l=cv(s),(f=pi.get(f))&&xd(l,f),m=(e.ownerDocument||e).createElement("link"),ln(m);var M=m;return M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),Cn(m,"link",l),a.state.loading|=4,Yu(m,s.precedence,e),a.instance=m;case"script":return m=Us(s.src),(f=e.querySelector(ll(m)))?(a.instance=f,ln(f),f):(l=s,(f=pi.get(m))&&(l=g({},s),yd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),ln(f),Cn(f,"link",l),e.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Yu(l,s.precedence,e));return a.instance}function Yu(e,a,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===a)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(e,a.firstChild))}function xd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function yd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var qu=null;function hv(e,a,s){if(qu===null){var l=new Map,f=qu=new Map;f.set(s,l)}else f=qu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[Ra]||m[Ke]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(a)||"";M=e+M;var A=l.get(M);A?A.push(m):l.set(M,[m])}}return l}function dv(e,a,s){e=e.ownerDocument||e,e.head.insertBefore(s,a==="title"?e.querySelector("head > title"):null)}function XE(e,a,s){if(s===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function pv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ul=null;function WE(){}function YE(e,a,s){if(ul===null)throw Error(r(475));var l=ul;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Ds(s.href),m=e.querySelector(ol(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ju.bind(l),e.then(l,l)),a.state.loading|=4,a.instance=m,ln(m);return}m=e.ownerDocument||e,s=cv(s),(f=pi.get(f))&&xd(s,f),m=m.createElement("link"),ln(m);var M=m;M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),Cn(m,"link",s),a.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=ju.bind(l),e.addEventListener("load",a),e.addEventListener("error",a))}}function qE(){if(ul===null)throw Error(r(475));var e=ul;return e.stylesheets&&e.count===0&&Sd(e,e.stylesheets),0<e.count?function(a){var s=setTimeout(function(){if(e.stylesheets&&Sd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s)}}:null}function ju(){if(this.count--,this.count===0){if(this.stylesheets)Sd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zu=null;function Sd(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zu=new Map,a.forEach(jE,e),Zu=null,ju.call(e))}function jE(e,a){if(!(a.state.loading&4)){var s=Zu.get(e);if(s)var l=s.get(null);else{s=new Map,Zu.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=a.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=ju.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),a.state.loading|=4}}var cl={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function ZE(e,a,s,l,f,m,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function mv(e,a,s,l,f,m,M,A,G,at,xt,At){return e=new ZE(e,a,s,M,A,G,at,At),a=1,m===!0&&(a|=24),m=Qn(3,null,null,a),e.current=m,m.stateNode=e,a=nh(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:a},sh(m),e}function gv(e){return e?(e=ls,e):ls}function _v(e,a,s,l,f,m){f=gv(f),l.context===null?l.context=f:l.pendingContext=f,l=Pa(a),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=za(e,l,a),s!==null&&(ni(s,e,a),Ho(s,e,a))}function vv(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<a?s:a}}function Md(e,a){vv(e,a),(e=e.alternate)&&vv(e,a)}function xv(e){if(e.tag===13){var a=os(e,67108864);a!==null&&ni(a,e,67108864),Md(e,67108864)}}var Ku=!0;function KE(e,a,s,l){var f=F.T;F.T=null;var m=Y.p;try{Y.p=2,Ed(e,a,s,l)}finally{Y.p=m,F.T=f}}function QE(e,a,s,l){var f=F.T;F.T=null;var m=Y.p;try{Y.p=8,Ed(e,a,s,l)}finally{Y.p=m,F.T=f}}function Ed(e,a,s,l){if(Ku){var f=bd(l);if(f===null)cd(e,a,l,Qu,s),Sv(e,l);else if(JE(f,e,a,s,l))l.stopPropagation();else if(Sv(e,l),a&4&&-1<$E.indexOf(e)){for(;f!==null;){var m=Yi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Dt(m.pendingLanes);if(M!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var G=1<<31-Pt(M);A.entanglements[1]|=G,M&=~G}Bi(m),(Pe&6)===0&&(Ou=Yt()+500,il(0))}}break;case 13:A=os(m,2),A!==null&&ni(A,m,2),zu(),Md(m,2)}if(m=bd(l),m===null&&cd(e,a,l,Qu,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else cd(e,a,l,null,s)}}function bd(e){return e=Cf(e),Td(e)}var Qu=null;function Td(e){if(Qu=null,e=Wi(e),e!==null){var a=u(e);if(a===null)e=null;else{var s=a.tag;if(s===13){if(e=c(a),e!==null)return e;e=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Qu=e,null}function yv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qt()){case de:return 2;case Kt:return 8;case O:case T:return 32;case rt:return 268435456;default:return 32}default:return 32}}var Ad=!1,Za=null,Ka=null,Qa=null,fl=new Map,hl=new Map,$a=[],$E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(e,a){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":fl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(a.pointerId)}}function dl(e,a,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},a!==null&&(a=Yi(a),a!==null&&xv(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),e)}function JE(e,a,s,l,f){switch(a){case"focusin":return Za=dl(Za,e,a,s,l,f),!0;case"dragenter":return Ka=dl(Ka,e,a,s,l,f),!0;case"mouseover":return Qa=dl(Qa,e,a,s,l,f),!0;case"pointerover":var m=f.pointerId;return fl.set(m,dl(fl.get(m)||null,e,a,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,hl.set(m,dl(hl.get(m)||null,e,a,s,l,f)),!0}return!1}function Mv(e){var a=Wi(e.target);if(a!==null){var s=u(a);if(s!==null){if(a=s.tag,a===13){if(a=c(s),a!==null){e.blockedOn=a,Fn(e.priority,function(){if(s.tag===13){var l=ei();l=Fe(l);var f=os(s,l);f!==null&&ni(f,s,l),Md(s,l)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var s=bd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Rf=l,s.target.dispatchEvent(l),Rf=null}else return a=Yi(s),a!==null&&xv(a),e.blockedOn=s,!1;a.shift()}return!0}function Ev(e,a,s){$u(e)&&s.delete(a)}function tb(){Ad=!1,Za!==null&&$u(Za)&&(Za=null),Ka!==null&&$u(Ka)&&(Ka=null),Qa!==null&&$u(Qa)&&(Qa=null),fl.forEach(Ev),hl.forEach(Ev)}function Ju(e,a){e.blockedOn===a&&(e.blockedOn=null,Ad||(Ad=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,tb)))}var tc=null;function bv(e){tc!==e&&(tc=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var a=0;a<e.length;a+=3){var s=e[a],l=e[a+1],f=e[a+2];if(typeof l!="function"){if(Td(l||s)===null)continue;break}var m=Yi(s);m!==null&&(e.splice(a,3),a-=3,Th(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function pl(e){function a(G){return Ju(G,e)}Za!==null&&Ju(Za,e),Ka!==null&&Ju(Ka,e),Qa!==null&&Ju(Qa,e),fl.forEach(a),hl.forEach(a);for(var s=0;s<$a.length;s++){var l=$a[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<$a.length&&(s=$a[0],s.blockedOn===null);)Mv(s),s.blockedOn===null&&$a.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[hn]||null;if(typeof m=="function")M||bv(s);else if(M){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[hn]||null)A=M.formAction;else if(Td(f)!==null)continue}else A=M.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),bv(s)}}}function wd(e){this._internalRoot=e}ec.prototype.render=wd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,l=ei();_v(s,l,e,a,null,null)},ec.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;_v(e.current,2,null,e,null,null),zu(),a[Dn]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var a=Te();e={blockedOn:null,target:e,priority:a};for(var s=0;s<$a.length&&a!==0&&a<$a[s].priority;s++);$a.splice(s,0,e),s===0&&Mv(e)}};var Tv=t.version;if(Tv!=="19.1.0")throw Error(r(527,Tv,"19.1.0"));Y.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(a),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var eb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{mt=nc.inject(eb),Ct=nc}catch{}}return gl.createRoot=function(e,a){if(!o(e))throw Error(r(299));var s=!1,l="",f=G0,m=V0,M=k0,A=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=mv(e,1,!1,null,null,s,l,f,m,M,A,null),e[Dn]=a.current,ud(e),new wd(a)},gl.hydrateRoot=function(e,a,s){if(!o(e))throw Error(r(299));var l=!1,f="",m=G0,M=V0,A=k0,G=null,at=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(G=s.unstable_transitionCallbacks),s.formState!==void 0&&(at=s.formState)),a=mv(e,1,!0,a,s??null,l,f,m,M,A,G,at),a.context=gv(null),s=a.current,l=ei(),l=Fe(l),f=Pa(l),f.callback=null,za(s,f,l),s=l,a.current.lanes=s,yt(a,s),Bi(a),e[Dn]=a.current,ud(e),new ec(a)},gl.version="19.1.0",gl}var Pv;function fb(){if(Pv)return Dd.exports;Pv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Dd.exports=cb(),Dd.exports}var hb=fb();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wm="175",io={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},db=0,zv=1,pb=2,Ay=1,mb=2,ga=3,fr=0,Zn=1,_a=2,lr=0,ao=1,Fv=2,Bv=3,Iv=4,gb=5,Hr=100,_b=101,vb=102,xb=103,yb=104,Sb=200,Mb=201,Eb=202,bb=203,Tp=204,Ap=205,Tb=206,Ab=207,wb=208,Rb=209,Cb=210,Db=211,Ub=212,Nb=213,Lb=214,wp=0,Rp=1,Cp=2,oo=3,Dp=4,Up=5,Np=6,Lp=7,wy=0,Ob=1,Pb=2,ur=0,zb=1,Fb=2,Bb=3,Ib=4,Hb=5,Gb=6,Vb=7,Ry=300,lo=301,uo=302,Op=303,Pp=304,_f=306,zp=1e3,Vr=1001,Fp=1002,Ci=1003,kb=1004,ic=1005,Gi=1006,Od=1007,kr=1008,Ea=1009,Cy=1010,Dy=1011,Ol=1012,Rm=1013,Yr=1014,va=1015,Gl=1016,Cm=1017,Dm=1018,Pl=1020,Uy=35902,Ny=1021,Ly=1022,Ri=1023,Oy=1024,Py=1025,zl=1026,Fl=1027,zy=1028,Um=1029,Fy=1030,Nm=1031,Lm=1033,zc=33776,Fc=33777,Bc=33778,Ic=33779,Bp=35840,Ip=35841,Hp=35842,Gp=35843,Vp=36196,kp=37492,Xp=37496,Wp=37808,Yp=37809,qp=37810,jp=37811,Zp=37812,Kp=37813,Qp=37814,$p=37815,Jp=37816,tm=37817,em=37818,nm=37819,im=37820,am=37821,Hc=36492,rm=36494,sm=36495,By=36283,om=36284,lm=36285,um=36286,Xb=3200,Wb=3201,Yb=0,qb=1,or="",gi="srgb",co="srgb-linear",Zc="linear",Ge="srgb",Ns=7680,Hv=519,jb=512,Zb=513,Kb=514,Iy=515,Qb=516,$b=517,Jb=518,tT=519,cm=35044,Gv="300 es",xa=2e3,Kc=2001;class $r{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=Math.PI/180,fm=180/Math.PI;function cr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Ee(i,t,n){return Math.max(t,Math.min(n,i))}function eT(i,t){return(i%t+t)%t}function Pd(i,t,n){return(1-n)*i+n*t}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nT={DEG2RAD:Gc};class fe{constructor(t=0,n=0){fe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*r-c*o+t.x,this.y=u*o+c*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t,n,r,o,u,c,h,p,d){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,o,u,c,h,p,d)}set(t,n,r,o,u,c,h,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,u=this.elements,c=r[0],h=r[3],p=r[6],d=r[1],g=r[4],v=r[7],_=r[2],x=r[5],E=r[8],b=o[0],S=o[3],y=o[6],L=o[1],N=o[4],w=o[7],I=o[2],P=o[5],B=o[8];return u[0]=c*b+h*L+p*I,u[3]=c*S+h*N+p*P,u[6]=c*y+h*w+p*B,u[1]=d*b+g*L+v*I,u[4]=d*S+g*N+v*P,u[7]=d*y+g*w+v*B,u[2]=_*b+x*L+E*I,u[5]=_*S+x*N+E*P,u[8]=_*y+x*w+E*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return n*c*g-n*h*d-r*u*g+r*h*p+o*u*d-o*c*p}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=g*c-h*d,_=h*p-g*u,x=d*u-c*p,E=n*v+r*_+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(o*d-g*r)*b,t[2]=(h*r-o*c)*b,t[3]=_*b,t[4]=(g*n-o*p)*b,t[5]=(o*u-h*n)*b,t[6]=x*b,t[7]=(r*p-d*n)*b,t[8]=(c*n-r*u)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,o,u,c,h){const p=Math.cos(u),d=Math.sin(u);return this.set(r*p,r*d,-r*(p*c+d*h)+c+t,-o*d,o*p,-o*(-d*c+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(zd.makeScale(t,n)),this}rotate(t){return this.premultiply(zd.makeRotation(-t)),this}translate(t,n){return this.premultiply(zd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zd=new ge;function Hy(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iT(){const i=Qc("canvas");return i.style.display="block",i}const Vv={};function Vc(i){i in Vv||(Vv[i]=!0,console.warn(i))}function aT(i,t,n){return new Promise(function(r,o){function u(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function rT(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sT(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kv=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xv=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oT(){const i={enabled:!0,workingColorSpace:co,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ge&&(o.r=Ma(o.r),o.g=Ma(o.g),o.b=Ma(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ge&&(o.r=ro(o.r),o.g=ro(o.g),o.b=ro(o.b))),o},fromWorkingColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},toWorkingColorSpace:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===or?Zc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[co]:{primaries:t,whitePoint:r,transfer:Zc,toXYZ:kv,fromXYZ:Xv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:kv,fromXYZ:Xv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),i}const Ne=oT();function Ma(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ls;class lT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ls===void 0&&(Ls=Qc("canvas")),Ls.width=t.width,Ls.height=t.height;const o=Ls.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=Ls}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Qc("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Ma(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ma(n[r]/255)*255):n[r]=Ma(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uT=0;class Om{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=cr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(Fd(o[c].image)):u.push(Fd(o[c]))}else u=Fd(o);r.url=u}return n||(t.images[this.uuid]=r),r}}function Fd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lT.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cT=0;class Gn extends $r{constructor(t=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,r=Vr,o=Vr,u=Gi,c=kr,h=Ri,p=Ea,d=Gn.DEFAULT_ANISOTROPY,g=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=cr(),this.name="",this.source=new Om(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ry)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zp:t.x=t.x-Math.floor(t.x);break;case Vr:t.x=t.x<0?0:1;break;case Fp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zp:t.y=t.y-Math.floor(t.y);break;case Vr:t.y=t.y<0?0:1;break;case Fp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Ry;Gn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,n=0,r=0,o=1){on.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,o){return this.x=t,this.y=n,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,o,u;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],x=p[5],E=p[9],b=p[2],S=p[6],y=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(E+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(d+1)/2,w=(x+1)/2,I=(y+1)/2,P=(g+_)/4,B=(v+b)/4,X=(E+S)/4;return N>w&&N>I?N<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(N),o=P/r,u=B/r):w>I?w<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(w),r=P/o,u=X/o):I<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(I),r=B/u,o=X/u),this.set(r,o,u,n),this}let L=Math.sqrt((S-E)*(S-E)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(v-b)/L,this.z=(_-g)/L,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fT extends $r{constructor(t=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n);const o={width:t,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Gn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Om(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends fT{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class Gy extends Gn{constructor(t=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hT extends Gn{constructor(t=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(t=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=o}static slerpFlat(t,n,r,o,u,c,h){let p=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];const _=u[c+0],x=u[c+1],E=u[c+2],b=u[c+3];if(h===0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=E,t[n+3]=b;return}if(v!==b||p!==_||d!==x||g!==E){let S=1-h;const y=p*_+d*x+g*E+v*b,L=y>=0?1:-1,N=1-y*y;if(N>Number.EPSILON){const I=Math.sqrt(N),P=Math.atan2(I,y*L);S=Math.sin(S*P)/I,h=Math.sin(h*P)/I}const w=h*L;if(p=p*S+_*w,d=d*S+x*w,g=g*S+E*w,v=v*S+b*w,S===1-h){const I=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=I,d*=I,g*=I,v*=I}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,r,o,u,c){const h=r[o],p=r[o+1],d=r[o+2],g=r[o+3],v=u[c],_=u[c+1],x=u[c+2],E=u[c+3];return t[n]=h*E+g*v+p*x-d*_,t[n+1]=p*E+g*_+d*v-h*x,t[n+2]=d*E+g*x+h*_-p*v,t[n+3]=g*E-h*v-p*_-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,o){return this._x=t,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,o=t._y,u=t._z,c=t._order,h=Math.cos,p=Math.sin,d=h(r/2),g=h(o/2),v=h(u/2),_=p(r/2),x=p(o/2),E=p(u/2);switch(c){case"XYZ":this._x=_*g*v+d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v-_*x*E;break;case"YXZ":this._x=_*g*v+d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v+_*x*E;break;case"ZXY":this._x=_*g*v-d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v-_*x*E;break;case"ZYX":this._x=_*g*v-d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v+_*x*E;break;case"YZX":this._x=_*g*v+d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v-_*x*E;break;case"XZY":this._x=_*g*v-d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],o=n[4],u=n[8],c=n[1],h=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=r+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-p)*x,this._y=(u-d)*x,this._z=(c-o)*x}else if(r>h&&r>v){const x=2*Math.sqrt(1+r-h-v);this._w=(g-p)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(u+d)/x}else if(h>v){const x=2*Math.sqrt(1+h-r-v);this._w=(u-d)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+v-r-h);this._w=(c-o)/x,this._x=(u+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,o=t._y,u=t._z,c=t._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=r*g+c*h+o*d-u*p,this._y=o*g+c*p+u*h-r*d,this._z=u*g+c*d+r*p-o*h,this._w=c*g-r*h-o*p-u*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,o=this._y,u=this._z,c=this._w;let h=c*t._w+r*t._x+o*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=c,this._x=r,this._y=o,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-n;return this._w=x*c+n*this._w,this._x=x*r+n*this._x,this._y=x*o+n*this._y,this._z=x*u+n*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,_=Math.sin(n*g)/d;return this._w=c*v+this._w*_,this._x=r*v+this._x*_,this._y=o*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,n=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Wv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Wv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,u=t.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(t){const n=this.x,r=this.y,o=this.z,u=t.x,c=t.y,h=t.z,p=t.w,d=2*(c*o-h*r),g=2*(h*n-u*o),v=2*(u*r-c*n);return this.x=n+p*d+c*v-h*g,this.y=r+p*g+h*d-u*v,this.z=o+p*v+u*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,o=t.y,u=t.z,c=n.x,h=n.y,p=n.z;return this.x=o*p-u*h,this.y=u*c-r*p,this.z=r*h-o*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Bd.copy(this).projectOnVector(t),this.sub(Bd)}reflect(t){return this.sub(Bd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return n*n+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const o=Math.sin(n)*t;return this.x=o*Math.sin(r),this.y=Math.cos(n)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bd=new $,Wv=new jr;class Vl{constructor(t=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Ei.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Ei.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Ei.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,Ei):Ei.fromBufferAttribute(u,c),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ac.copy(r.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}const o=t.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_l),rc.subVectors(this.max,_l),Os.subVectors(t.a,_l),Ps.subVectors(t.b,_l),zs.subVectors(t.c,_l),tr.subVectors(Ps,Os),er.subVectors(zs,Ps),Nr.subVectors(Os,zs);let n=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Nr.z,Nr.y,tr.z,0,-tr.x,er.z,0,-er.x,Nr.z,0,-Nr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Nr.y,Nr.x,0];return!Id(n,Os,Ps,zs,rc)||(n=[1,0,0,0,1,0,0,0,1],!Id(n,Os,Ps,zs,rc))?!1:(sc.crossVectors(tr,er),n=[sc.x,sc.y,sc.z],Id(n,Os,Ps,zs,rc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ca=[new $,new $,new $,new $,new $,new $,new $,new $],Ei=new $,ac=new Vl,Os=new $,Ps=new $,zs=new $,tr=new $,er=new $,Nr=new $,_l=new $,rc=new $,sc=new $,Lr=new $;function Id(i,t,n,r,o){for(let u=0,c=i.length-3;u<=c;u+=3){Lr.fromArray(i,u);const h=o.x*Math.abs(Lr.x)+o.y*Math.abs(Lr.y)+o.z*Math.abs(Lr.z),p=t.dot(Lr),d=n.dot(Lr),g=r.dot(Lr);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const dT=new Vl,vl=new $,Hd=new $;class vf{constructor(t=new $,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):dT.setFromPoints(t).getCenter(r);let o=0;for(let u=0,c=t.length;u<c;u++)o=Math.max(o,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vl.subVectors(t,this.center);const n=vl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(vl,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vl.copy(t.center).add(Hd)),this.expandByPoint(vl.copy(t.center).sub(Hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fa=new $,Gd=new $,oc=new $,nr=new $,Vd=new $,lc=new $,kd=new $;class xf{constructor(t=new $,n=new $(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=fa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,n),fa.distanceToSquared(t))}distanceSqToSegment(t,n,r,o){Gd.copy(t).add(n).multiplyScalar(.5),oc.copy(n).sub(t).normalize(),nr.copy(this.origin).sub(Gd);const u=t.distanceTo(n)*.5,c=-this.direction.dot(oc),h=nr.dot(this.direction),p=-nr.dot(oc),d=nr.lengthSq(),g=Math.abs(1-c*c);let v,_,x,E;if(g>0)if(v=c*p-h,_=c*h-p,E=u*g,v>=0)if(_>=-E)if(_<=E){const b=1/g;v*=b,_*=b,x=v*(v+c*_+2*h)+_*(c*v+_+2*p)+d}else _=u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*p)+d;else _=-u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*p)+d;else _<=-E?(v=Math.max(0,-(-c*u+h)),_=v>0?-u:Math.min(Math.max(-u,-p),u),x=-v*v+_*(_+2*p)+d):_<=E?(v=0,_=Math.min(Math.max(-u,-p),u),x=_*(_+2*p)+d):(v=Math.max(0,-(c*u+h)),_=v>0?u:Math.min(Math.max(-u,-p),u),x=-v*v+_*(_+2*p)+d);else _=c>0?-u:u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Gd).addScaledVector(oc,_),x}intersectSphere(t,n){fa.subVectors(t.center,this.origin);const r=fa.dot(this.direction),o=fa.dot(fa)-r*r,u=t.radius*t.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=r-c,p=r+c;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,o,u,c,h,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(r=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(r=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(u=(t.min.y-_.y)*g,c=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,c=(t.min.y-_.y)*g),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,n,r,o,u){Vd.subVectors(n,t),lc.subVectors(r,t),kd.crossVectors(Vd,lc);let c=this.direction.dot(kd),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;nr.subVectors(this.origin,t);const p=h*this.direction.dot(lc.crossVectors(nr,lc));if(p<0)return null;const d=h*this.direction.dot(Vd.cross(nr));if(d<0||p+d>c)return null;const g=-h*nr.dot(kd);return g<0?null:this.at(g/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,n,r,o,u,c,h,p,d,g,v,_,x,E,b,S){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,o,u,c,h,p,d,g,v,_,x,E,b,S)}set(t,n,r,o,u,c,h,p,d,g,v,_,x,E,b,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=r,y[12]=o,y[1]=u,y[5]=c,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=E,y[11]=b,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,o=1/Fs.setFromMatrixColumn(t,0).length(),u=1/Fs.setFromMatrixColumn(t,1).length(),c=1/Fs.setFromMatrixColumn(t,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,o=t.y,u=t.z,c=Math.cos(r),h=Math.sin(r),p=Math.cos(o),d=Math.sin(o),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const _=c*g,x=c*v,E=h*g,b=h*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=x+E*d,n[5]=_-b*d,n[9]=-h*p,n[2]=b-_*d,n[6]=E+x*d,n[10]=c*p}else if(t.order==="YXZ"){const _=p*g,x=p*v,E=d*g,b=d*v;n[0]=_+b*h,n[4]=E*h-x,n[8]=c*d,n[1]=c*v,n[5]=c*g,n[9]=-h,n[2]=x*h-E,n[6]=b+_*h,n[10]=c*p}else if(t.order==="ZXY"){const _=p*g,x=p*v,E=d*g,b=d*v;n[0]=_-b*h,n[4]=-c*v,n[8]=E+x*h,n[1]=x+E*h,n[5]=c*g,n[9]=b-_*h,n[2]=-c*d,n[6]=h,n[10]=c*p}else if(t.order==="ZYX"){const _=c*g,x=c*v,E=h*g,b=h*v;n[0]=p*g,n[4]=E*d-x,n[8]=_*d+b,n[1]=p*v,n[5]=b*d+_,n[9]=x*d-E,n[2]=-d,n[6]=h*p,n[10]=c*p}else if(t.order==="YZX"){const _=c*p,x=c*d,E=h*p,b=h*d;n[0]=p*g,n[4]=b-_*v,n[8]=E*v+x,n[1]=v,n[5]=c*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*v+E,n[10]=_-b*v}else if(t.order==="XZY"){const _=c*p,x=c*d,E=h*p,b=h*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+b,n[5]=c*g,n[9]=x*v-E,n[2]=E*v-x,n[6]=h*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pT,t,mT)}lookAt(t,n,r){const o=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ir.crossVectors(r,ii),ir.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ir.crossVectors(r,ii)),ir.normalize(),uc.crossVectors(ii,ir),o[0]=ir.x,o[4]=uc.x,o[8]=ii.x,o[1]=ir.y,o[5]=uc.y,o[9]=ii.y,o[2]=ir.z,o[6]=uc.z,o[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,u=this.elements,c=r[0],h=r[4],p=r[8],d=r[12],g=r[1],v=r[5],_=r[9],x=r[13],E=r[2],b=r[6],S=r[10],y=r[14],L=r[3],N=r[7],w=r[11],I=r[15],P=o[0],B=o[4],X=o[8],U=o[12],C=o[1],H=o[5],j=o[9],et=o[13],pt=o[2],dt=o[6],F=o[10],Y=o[14],W=o[3],ht=o[7],D=o[11],it=o[15];return u[0]=c*P+h*C+p*pt+d*W,u[4]=c*B+h*H+p*dt+d*ht,u[8]=c*X+h*j+p*F+d*D,u[12]=c*U+h*et+p*Y+d*it,u[1]=g*P+v*C+_*pt+x*W,u[5]=g*B+v*H+_*dt+x*ht,u[9]=g*X+v*j+_*F+x*D,u[13]=g*U+v*et+_*Y+x*it,u[2]=E*P+b*C+S*pt+y*W,u[6]=E*B+b*H+S*dt+y*ht,u[10]=E*X+b*j+S*F+y*D,u[14]=E*U+b*et+S*Y+y*it,u[3]=L*P+N*C+w*pt+I*W,u[7]=L*B+N*H+w*dt+I*ht,u[11]=L*X+N*j+w*F+I*D,u[15]=L*U+N*et+w*Y+I*it,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],o=t[8],u=t[12],c=t[1],h=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],x=t[14],E=t[3],b=t[7],S=t[11],y=t[15];return E*(+u*p*v-o*d*v-u*h*_+r*d*_+o*h*x-r*p*x)+b*(+n*p*x-n*d*_+u*c*_-o*c*x+o*d*g-u*p*g)+S*(+n*d*v-n*h*x-u*c*v+r*c*x+u*h*g-r*d*g)+y*(-o*h*g-n*p*v+n*h*_+o*c*v-r*c*_+r*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],x=t[11],E=t[12],b=t[13],S=t[14],y=t[15],L=v*S*d-b*_*d+b*p*x-h*S*x-v*p*y+h*_*y,N=E*_*d-g*S*d-E*p*x+c*S*x+g*p*y-c*_*y,w=g*b*d-E*v*d+E*h*x-c*b*x-g*h*y+c*v*y,I=E*v*p-g*b*p-E*h*_+c*b*_+g*h*S-c*v*S,P=n*L+r*N+o*w+u*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return t[0]=L*B,t[1]=(b*_*u-v*S*u-b*o*x+r*S*x+v*o*y-r*_*y)*B,t[2]=(h*S*u-b*p*u+b*o*d-r*S*d-h*o*y+r*p*y)*B,t[3]=(v*p*u-h*_*u-v*o*d+r*_*d+h*o*x-r*p*x)*B,t[4]=N*B,t[5]=(g*S*u-E*_*u+E*o*x-n*S*x-g*o*y+n*_*y)*B,t[6]=(E*p*u-c*S*u-E*o*d+n*S*d+c*o*y-n*p*y)*B,t[7]=(c*_*u-g*p*u+g*o*d-n*_*d-c*o*x+n*p*x)*B,t[8]=w*B,t[9]=(E*v*u-g*b*u-E*r*x+n*b*x+g*r*y-n*v*y)*B,t[10]=(c*b*u-E*h*u+E*r*d-n*b*d-c*r*y+n*h*y)*B,t[11]=(g*h*u-c*v*u-g*r*d+n*v*d+c*r*x-n*h*x)*B,t[12]=I*B,t[13]=(g*b*o-E*v*o+E*r*_-n*b*_-g*r*S+n*v*S)*B,t[14]=(E*h*o-c*b*o-E*r*p+n*b*p+c*r*S-n*h*S)*B,t[15]=(c*v*o-g*h*o+g*r*p-n*v*p-c*r*_+n*h*_)*B,this}scale(t){const n=this.elements,r=t.x,o=t.y,u=t.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=t.x,h=t.y,p=t.z,d=u*c,g=u*h;return this.set(d*c+r,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+r,g*p-o*c,0,d*p-o*h,g*p+o*c,u*p*p+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,o,u,c){return this.set(1,r,u,0,t,1,c,0,n,o,1,0,0,0,0,1),this}compose(t,n,r){const o=this.elements,u=n._x,c=n._y,h=n._z,p=n._w,d=u+u,g=c+c,v=h+h,_=u*d,x=u*g,E=u*v,b=c*g,S=c*v,y=h*v,L=p*d,N=p*g,w=p*v,I=r.x,P=r.y,B=r.z;return o[0]=(1-(b+y))*I,o[1]=(x+w)*I,o[2]=(E-N)*I,o[3]=0,o[4]=(x-w)*P,o[5]=(1-(_+y))*P,o[6]=(S+L)*P,o[7]=0,o[8]=(E+N)*B,o[9]=(S-L)*B,o[10]=(1-(_+b))*B,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,r){const o=this.elements;let u=Fs.set(o[0],o[1],o[2]).length();const c=Fs.set(o[4],o[5],o[6]).length(),h=Fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],bi.copy(this);const d=1/u,g=1/c,v=1/h;return bi.elements[0]*=d,bi.elements[1]*=d,bi.elements[2]*=d,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,n.setFromRotationMatrix(bi),r.x=u,r.y=c,r.z=h,this}makePerspective(t,n,r,o,u,c,h=xa){const p=this.elements,d=2*u/(n-t),g=2*u/(r-o),v=(n+t)/(n-t),_=(r+o)/(r-o);let x,E;if(h===xa)x=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(h===Kc)x=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=d,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,o,u,c,h=xa){const p=this.elements,d=1/(n-t),g=1/(r-o),v=1/(c-u),_=(n+t)*d,x=(r+o)*g;let E,b;if(h===xa)E=(c+u)*v,b=-2*v;else if(h===Kc)E=u*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Fs=new $,bi=new Je,pT=new $(0,0,0),mT=new $(1,1,1),ir=new $,uc=new $,ii=new $,Yv=new Je,qv=new jr;class ba{constructor(t=0,n=0,r=0,o=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,o=this._order){return this._x=t,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const o=t.elements,u=o[0],c=o[4],h=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Yv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yv,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return qv.setFromEuler(this),this.setFromQuaternion(qv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class Pm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gT=0;const jv=new $,Bs=new jr,ha=new Je,cc=new $,xl=new $,_T=new $,vT=new jr,Zv=new $(1,0,0),Kv=new $(0,1,0),Qv=new $(0,0,1),$v={type:"added"},xT={type:"removed"},Is={type:"childadded",child:null},Xd={type:"childremoved",child:null};class Vn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const t=new $,n=new ba,r=new jr,o=new $(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Je},normalMatrix:{value:new ge}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(Zv,t)}rotateY(t){return this.rotateOnAxis(Kv,t)}rotateZ(t){return this.rotateOnAxis(Qv,t)}translateOnAxis(t,n){return jv.copy(t).applyQuaternion(this.quaternion),this.position.add(jv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Zv,t)}translateY(t){return this.translateOnAxis(Kv,t)}translateZ(t){return this.translateOnAxis(Qv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?cc.copy(t):cc.set(t,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(xl,cc,this.up):ha.lookAt(cc,xl,this.up),this.quaternion.setFromRotationMatrix(ha),o&&(ha.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(ha),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($v),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(xT),Xd.child=t,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($v),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,t,_T),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,vT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(u(t.materials,this.material[p]));o.material=h}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(u(t.animations,p))}}if(n){const h=c(t.geometries),p=c(t.materials),d=c(t.textures),g=c(t.images),v=c(t.shapes),_=c(t.skeletons),x=c(t.animations),E=c(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}Vn.DEFAULT_UP=new $(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new $,da=new $,Wd=new $,pa=new $,Hs=new $,Gs=new $,Jv=new $,Yd=new $,qd=new $,jd=new $,Zd=new on,Kd=new on,Qd=new on;class _i{constructor(t=new $,n=new $,r=new $){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,o){o.subVectors(r,n),Ti.subVectors(t,n),o.cross(Ti);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,r,o,u){Ti.subVectors(o,n),da.subVectors(r,n),Wd.subVectors(t,n);const c=Ti.dot(Ti),h=Ti.dot(da),p=Ti.dot(Wd),d=da.dot(da),g=da.dot(Wd),v=c*d-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,x=(d*p-h*g)*_,E=(c*g-h*p)*_;return u.set(1-x-E,E,x)}static containsPoint(t,n,r,o){return this.getBarycoord(t,n,r,o,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,n,r,o,u,c,h,p){return this.getBarycoord(t,n,r,o,pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,pa.x),p.addScaledVector(c,pa.y),p.addScaledVector(h,pa.z),p)}static getInterpolatedAttribute(t,n,r,o,u,c){return Zd.setScalar(0),Kd.setScalar(0),Qd.setScalar(0),Zd.fromBufferAttribute(t,n),Kd.fromBufferAttribute(t,r),Qd.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(Zd,u.x),c.addScaledVector(Kd,u.y),c.addScaledVector(Qd,u.z),c}static isFrontFacing(t,n,r,o){return Ti.subVectors(r,n),da.subVectors(t,n),Ti.cross(da).dot(o)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,o){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,r,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ti.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return _i.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,o,u){return _i.getInterpolation(t,this.a,this.b,this.c,n,r,o,u)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,o=this.b,u=this.c;let c,h;Hs.subVectors(o,r),Gs.subVectors(u,r),Yd.subVectors(t,r);const p=Hs.dot(Yd),d=Gs.dot(Yd);if(p<=0&&d<=0)return n.copy(r);qd.subVectors(t,o);const g=Hs.dot(qd),v=Gs.dot(qd);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return c=p/(p-g),n.copy(r).addScaledVector(Hs,c);jd.subVectors(t,u);const x=Hs.dot(jd),E=Gs.dot(jd);if(E>=0&&x<=E)return n.copy(u);const b=x*d-p*E;if(b<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(r).addScaledVector(Gs,h);const S=g*E-x*v;if(S<=0&&v-g>=0&&x-E>=0)return Jv.subVectors(u,o),h=(v-g)/(v-g+(x-E)),n.copy(o).addScaledVector(Jv,h);const y=1/(S+b+_);return c=b*y,h=_*y,n.copy(r).addScaledVector(Hs,c).addScaledVector(Gs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},fc={h:0,s:0,l:0};function $d(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}let be=class{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,n),this}setRGB(t,n,r,o=Ne.workingColorSpace){return this.r=t,this.g=n,this.b=r,Ne.toWorkingColorSpace(this,o),this}setHSL(t,n,r,o=Ne.workingColorSpace){if(t=eT(t,1),n=Ee(n,0,1),r=Ee(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=$d(c,u,t+1/3),this.g=$d(c,u,t),this.b=$d(c,u,t-1/3)}return Ne.toWorkingColorSpace(this,o),this}setStyle(t,n=gi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gi){const r=Vy[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Ne.fromWorkingColorSpace(zn.copy(this),t),Math.round(Ee(zn.r*255,0,255))*65536+Math.round(Ee(zn.g*255,0,255))*256+Math.round(Ee(zn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ne.workingColorSpace){Ne.fromWorkingColorSpace(zn.copy(this),n);const r=zn.r,o=zn.g,u=zn.b,c=Math.max(r,o,u),h=Math.min(r,o,u);let p,d;const g=(h+c)/2;if(h===c)p=0,d=0;else{const v=c-h;switch(d=g<=.5?v/(c+h):v/(2-c-h),c){case r:p=(o-u)/v+(o<u?6:0);break;case o:p=(u-r)/v+2;break;case u:p=(r-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=gi){Ne.fromWorkingColorSpace(zn.copy(this),t);const n=zn.r,r=zn.g,o=zn.b;return t!==gi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,n,r){return this.getHSL(ar),this.setHSL(ar.h+t,ar.s+n,ar.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(ar),t.getHSL(fc);const r=Pd(ar.h,fc.h,n),o=Pd(ar.s,fc.s,n),u=Pd(ar.l,fc.l,n);return this.setHSL(r,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,o=this.b,u=t.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const zn=new be;be.NAMES=Vy;let yT=0;class So extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=ao,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tp,this.blendDst=Ap,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Tp&&(r.blendSrc=this.blendSrc),this.blendDst!==Ap&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(n){const u=o(t.textures),c=o(t.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fo extends So{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=wy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new $,hc=new fe;let ST=0;class Di{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ST++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=cm,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hc.fromBufferAttribute(this,n),hc.applyMatrix3(t),this.setXY(n,hc.x,hc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Hi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Hi(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Hi(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Hi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Hi(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,o){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,n,r,o,u){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array),u=Ve(u,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cm&&(t.usage=this.usage),t}}class ky extends Di{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class Xy extends Di{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class Ui extends Di{constructor(t,n,r){super(new Float32Array(t),n,r)}}let MT=0;const mi=new Je,Jd=new Vn,Vs=new $,ai=new Vl,yl=new Vl,bn=new $;class xi extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hy(t)?Xy:ky)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ge().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,n,r){return mi.makeTranslation(t,n,r),this.applyMatrix4(mi),this}scale(t,n,r){return mi.makeScale(t,n,r),this.applyMatrix4(mi),this}lookAt(t){return Jd.lookAt(t),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=t.length;o<u;o++){const c=t[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ui(r,3))}else{const r=Math.min(t.length,n.count);for(let o=0;o<r;o++){const u=t[o];n.setXYZ(o,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ai.min,yl.min),ai.expandByPoint(bn),bn.addVectors(ai.max,yl.max),ai.expandByPoint(bn)):(ai.expandByPoint(yl.min),ai.expandByPoint(yl.max))}ai.getCenter(r);let o=0;for(let u=0,c=t.count;u<c;u++)bn.fromBufferAttribute(t,u),o=Math.max(o,r.distanceToSquared(bn));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)bn.fromBufferAttribute(h,d),p&&(Vs.fromBufferAttribute(t,d),bn.add(Vs)),o=Math.max(o,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<r.count;X++)h[X]=new $,p[X]=new $;const d=new $,g=new $,v=new $,_=new fe,x=new fe,E=new fe,b=new $,S=new $;function y(X,U,C){d.fromBufferAttribute(r,X),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,C),_.fromBufferAttribute(u,X),x.fromBufferAttribute(u,U),E.fromBufferAttribute(u,C),g.sub(d),v.sub(d),x.sub(_),E.sub(_);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(H),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(H),h[X].add(b),h[U].add(b),h[C].add(b),p[X].add(S),p[U].add(S),p[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let X=0,U=L.length;X<U;++X){const C=L[X],H=C.start,j=C.count;for(let et=H,pt=H+j;et<pt;et+=3)y(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const N=new $,w=new $,I=new $,P=new $;function B(X){I.fromBufferAttribute(o,X),P.copy(I);const U=h[X];N.copy(U),N.sub(I.multiplyScalar(I.dot(U))).normalize(),w.crossVectors(P,U);const H=w.dot(p[X])<0?-1:1;c.setXYZW(X,N.x,N.y,N.z,H)}for(let X=0,U=L.length;X<U;++X){const C=L[X],H=C.start,j=C.count;for(let et=H,pt=H+j;et<pt;et+=3)B(t.getX(et+0)),B(t.getX(et+1)),B(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,x=r.count;_<x;_++)r.setXYZ(_,0,0,0);const o=new $,u=new $,c=new $,h=new $,p=new $,d=new $,g=new $,v=new $;if(t)for(let _=0,x=t.count;_<x;_+=3){const E=t.getX(_+0),b=t.getX(_+1),S=t.getX(_+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,S),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),h.add(g),p.add(g),d.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(p.length*g);let x=0,E=0;for(let b=0,S=p.length;b<S;b++){h.isInterleavedBufferAttribute?x=p[b]*h.data.stride+h.offset:x=p[b]*g;for(let y=0;y<g;y++)_[E++]=d[x++]}return new Di(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=t(p,r);n.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const p=[],d=u[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=t(_,r);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const d=c[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const d=r[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(t.data))}g.length>0&&(o[p]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const u=t.morphAttributes;for(const d in u){const g=[],v=u[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tx=new Je,Or=new xf,dc=new vf,ex=new $,pc=new $,mc=new $,gc=new $,tp=new $,_c=new $,nx=new $,vc=new $;class si extends Vn{constructor(t=new xi,n=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(u&&h){_c.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const g=h[p],v=u[p];g!==0&&(tp.fromBufferAttribute(v,t),c?_c.addScaledVector(tp,g):_c.addScaledVector(tp.sub(n),g))}n.add(_c)}return n}raycast(t,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(u),Or.copy(t.ray).recast(t.near),!(dc.containsPoint(Or.origin)===!1&&(Or.intersectSphere(dc,ex)===null||Or.origin.distanceToSquared(ex)>(t.far-t.near)**2))&&(tx.copy(u).invert(),Or.copy(t.ray).applyMatrix4(tx),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Or)))}_computeIntersections(t,n,r){let o;const u=this.geometry,c=this.material,h=u.index,p=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,x=u.drawRange;if(h!==null)if(Array.isArray(c))for(let E=0,b=_.length;E<b;E++){const S=_[E],y=c[S.materialIndex],L=Math.max(S.start,x.start),N=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,I=N;w<I;w+=3){const P=h.getX(w),B=h.getX(w+1),X=h.getX(w+2);o=xc(this,y,t,r,d,g,v,P,B,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let S=E,y=b;S<y;S+=3){const L=h.getX(S),N=h.getX(S+1),w=h.getX(S+2);o=xc(this,c,t,r,d,g,v,L,N,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,b=_.length;E<b;E++){const S=_[E],y=c[S.materialIndex],L=Math.max(S.start,x.start),N=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,I=N;w<I;w+=3){const P=w,B=w+1,X=w+2;o=xc(this,y,t,r,d,g,v,P,B,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),b=Math.min(p.count,x.start+x.count);for(let S=E,y=b;S<y;S+=3){const L=S,N=S+1,w=S+2;o=xc(this,c,t,r,d,g,v,L,N,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function ET(i,t,n,r,o,u,c,h){let p;if(t.side===Zn?p=r.intersectTriangle(c,u,o,!0,h):p=r.intersectTriangle(o,u,c,t.side===fr,h),p===null)return null;vc.copy(h),vc.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(vc);return d<n.near||d>n.far?null:{distance:d,point:vc.clone(),object:i}}function xc(i,t,n,r,o,u,c,h,p,d){i.getVertexPosition(h,pc),i.getVertexPosition(p,mc),i.getVertexPosition(d,gc);const g=ET(i,t,n,r,pc,mc,gc,nx);if(g){const v=new $;_i.getBarycoord(nx,pc,mc,gc,v),o&&(g.uv=_i.getInterpolatedAttribute(o,h,p,d,v,new fe)),u&&(g.uv1=_i.getInterpolatedAttribute(u,h,p,d,v,new fe)),c&&(g.normal=_i.getInterpolatedAttribute(c,h,p,d,v,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:d,normal:new $,materialIndex:0};_i.getNormal(pc,mc,gc,_.normal),g.face=_,g.barycoord=v}return g}class kl extends xi{constructor(t=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],g=[],v=[];let _=0,x=0;E("z","y","x",-1,-1,r,n,t,c,u,0),E("z","y","x",1,-1,r,n,-t,c,u,1),E("x","z","y",1,1,t,r,n,o,c,2),E("x","z","y",1,-1,t,r,-n,o,c,3),E("x","y","z",1,-1,t,n,r,o,u,4),E("x","y","z",-1,-1,t,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new Ui(d,3)),this.setAttribute("normal",new Ui(g,3)),this.setAttribute("uv",new Ui(v,2));function E(b,S,y,L,N,w,I,P,B,X,U){const C=w/B,H=I/X,j=w/2,et=I/2,pt=P/2,dt=B+1,F=X+1;let Y=0,W=0;const ht=new $;for(let D=0;D<F;D++){const it=D*H-et;for(let wt=0;wt<dt;wt++){const _t=wt*C-j;ht[b]=_t*L,ht[S]=it*N,ht[y]=pt,d.push(ht.x,ht.y,ht.z),ht[b]=0,ht[S]=0,ht[y]=P>0?1:-1,g.push(ht.x,ht.y,ht.z),v.push(wt/B),v.push(1-D/X),Y+=1}}for(let D=0;D<X;D++)for(let it=0;it<B;it++){const wt=_+it+dt*D,_t=_+it+dt*(D+1),J=_+(it+1)+dt*(D+1),St=_+(it+1)+dt*D;p.push(wt,_t,St),p.push(_t,J,St),W+=6}h.addGroup(x,W,U),x+=W,_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ho(i){const t={};for(const n in i){t[n]={};for(const r in i[n]){const o=i[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=o.clone():Array.isArray(o)?t[n][r]=o.slice():t[n][r]=o}}return t}function Hn(i){const t={};for(let n=0;n<i.length;n++){const r=ho(i[n]);for(const o in r)t[o]=r[o]}return t}function bT(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function Wy(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const TT={clone:ho,merge:Hn};var AT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends So{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AT,this.fragmentShader=wT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ho(t.uniforms),this.uniformsGroups=bT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Yy extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=xa}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new $,ix=new fe,ax=new fe;class ri extends Yy{constructor(t=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=fm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fm*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-t/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(rr.x,rr.y).multiplyScalar(-t/rr.z)}getViewSize(t,n){return this.getViewBounds(t,ix,ax),n.subVectors(ax,ix)}setViewOffset(t,n,r,o,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Gc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*r/d,o*=c.width/p,r*=c.height/d}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Xs=1;class RT extends Vn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(ks,Xs,t,n);o.layers=this.layers,this.add(o);const u=new ri(ks,Xs,t,n);u.layers=this.layers,this.add(u);const c=new ri(ks,Xs,t,n);c.layers=this.layers,this.add(c);const h=new ri(ks,Xs,t,n);h.layers=this.layers,this.add(h);const p=new ri(ks,Xs,t,n);p.layers=this.layers,this.add(p);const d=new ri(ks,Xs,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,h,p]=n;for(const d of n)this.remove(d);if(t===xa)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(n,u),t.setRenderTarget(r,1,o),t.render(n,c),t.setRenderTarget(r,2,o),t.render(n,h),t.setRenderTarget(r,3,o),t.render(n,p),t.setRenderTarget(r,4,o),t.render(n,d),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,o),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class qy extends Gn{constructor(t=[],n=lo,r,o,u,c,h,p,d,g){super(t,n,r,o,u,c,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class CT extends qr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new qy(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new kl(5,5,5),u=new hr({name:"CubemapFromEquirect",uniforms:ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:lr});u.uniforms.tEquirect.value=n;const c=new si(o,u),h=n.minFilter;return n.minFilter===kr&&(n.minFilter=Gi),new RT(1,10,this).update(t,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,r=!0,o=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,r,o);t.setRenderTarget(u)}}class Js extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DT={type:"move"};class ep{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let o=null,u=null,c=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,r),y=this._getHandJoint(d,b);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,E=.005;d.inputState.pinching&&_>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(DT)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new Js;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class jy extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class UT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=cm,this.updateRanges=[],this.version=0,this.uuid=cr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,r){t*=this.stride,r*=n.stride;for(let o=0,u=this.stride;o<u;o++)this.array[t+o]=n.array[r+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new $;class $c{constructor(t,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,r=this.data.count;n<r;n++)In.fromBufferAttribute(this,n),In.applyMatrix4(t),this.setXYZ(n,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)In.fromBufferAttribute(this,n),In.applyNormalMatrix(t),this.setXYZ(n,In.x,In.y,In.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)In.fromBufferAttribute(this,n),In.transformDirection(t),this.setXYZ(n,In.x,In.y,In.z);return this}getComponent(t,n){let r=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(r=Hi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+n]=r,this}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Hi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Hi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Hi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Hi(n,this.array)),n}setXY(t,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this}setXYZ(t,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this}setXYZW(t,n,r,o,u){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array),u=Ve(u,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[o+u])}return new Di(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $c(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[o+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zm extends So{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ws;const Sl=new $,Ys=new $,qs=new $,js=new fe,Ml=new fe,Zy=new Je,yc=new $,El=new $,Sc=new $,rx=new fe,np=new fe,sx=new fe;class Ky extends Vn{constructor(t=new zm){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new xi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new UT(n,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new $c(r,3,0,!1)),Ws.setAttribute("uv",new $c(r,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new fe(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Zy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-qs.z);const r=this.material.rotation;let o,u;r!==0&&(u=Math.cos(r),o=Math.sin(r));const c=this.center;Mc(yc.set(-.5,-.5,0),qs,c,Ys,o,u),Mc(El.set(.5,-.5,0),qs,c,Ys,o,u),Mc(Sc.set(.5,.5,0),qs,c,Ys,o,u),rx.set(0,0),np.set(1,0),sx.set(1,1);let h=t.ray.intersectTriangle(yc,El,Sc,!1,Sl);if(h===null&&(Mc(El.set(-.5,.5,0),qs,c,Ys,o,u),np.set(0,1),h=t.ray.intersectTriangle(yc,Sc,El,!1,Sl),h===null))return;const p=t.ray.origin.distanceTo(Sl);p<t.near||p>t.far||n.push({distance:p,point:Sl.clone(),uv:_i.getInterpolation(Sl,yc,El,Sc,rx,np,sx,new fe),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Mc(i,t,n,r,o,u){js.subVectors(i,n).addScalar(.5).multiply(r),o!==void 0?(Ml.x=u*js.x-o*js.y,Ml.y=o*js.x+u*js.y):Ml.copy(js),i.copy(t),i.x+=Ml.x,i.y+=Ml.y,i.applyMatrix4(Zy)}const ip=new $,NT=new $,LT=new ge;class sr{constructor(t=new $(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,o){return this.normal.set(t,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const o=ip.subVectors(r,n).cross(NT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(ip),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||LT.getNormalMatrix(t),o=this.coplanarPoint(ip).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new vf,Ec=new $;class Qy{constructor(t=new sr,n=new sr,r=new sr,o=new sr,u=new sr,c=new sr){this.planes=[t,n,r,o,u,c]}set(t,n,r,o,u,c){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=xa){const r=this.planes,o=t.elements,u=o[0],c=o[1],h=o[2],p=o[3],d=o[4],g=o[5],v=o[6],_=o[7],x=o[8],E=o[9],b=o[10],S=o[11],y=o[12],L=o[13],N=o[14],w=o[15];if(r[0].setComponents(p-u,_-d,S-x,w-y).normalize(),r[1].setComponents(p+u,_+d,S+x,w+y).normalize(),r[2].setComponents(p+c,_+g,S+E,w+L).normalize(),r[3].setComponents(p-c,_-g,S-E,w-L).normalize(),r[4].setComponents(p-h,_-v,S-b,w-N).normalize(),n===xa)r[5].setComponents(p+h,_+v,S+b,w+N).normalize();else if(n===Kc)r[5].setComponents(h,v,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(t){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(t){const n=this.planes,r=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Ec.x=o.normal.x>0?t.max.x:t.min.x,Ec.y=o.normal.y>0?t.max.y:t.min.y,Ec.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fm extends So{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jc=new $,tf=new $,ox=new Je,bl=new xf,bc=new vf,ap=new $,lx=new $;class $y extends Vn{constructor(t=new xi,n=new Fm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,r=[0];for(let o=1,u=n.count;o<u;o++)Jc.fromBufferAttribute(n,o-1),tf.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Jc.distanceTo(tf);t.setAttribute("lineDistance",new Ui(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const r=this.geometry,o=this.matrixWorld,u=t.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(o),bc.radius+=u,t.ray.intersectsSphere(bc)===!1)return;ox.copy(o).invert(),bl.copy(t.ray).applyMatrix4(ox);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const x=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let b=x,S=E-1;b<S;b+=d){const y=g.getX(b),L=g.getX(b+1),N=Tc(this,t,bl,p,y,L,b);N&&n.push(N)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(x),y=Tc(this,t,bl,p,b,S,E-1);y&&n.push(y)}}else{const x=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let b=x,S=E-1;b<S;b+=d){const y=Tc(this,t,bl,p,b,b+1,b);y&&n.push(y)}if(this.isLineLoop){const b=Tc(this,t,bl,p,E-1,x,E-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Tc(i,t,n,r,o,u,c){const h=i.geometry.attributes.position;if(Jc.fromBufferAttribute(h,o),tf.fromBufferAttribute(h,u),n.distanceSqToSegment(Jc,tf,ap,lx)>r)return;ap.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(ap);if(!(d<t.near||d>t.far))return{distance:d,point:lx.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}class ef extends Gn{constructor(t,n,r,o,u,c,h,p,d){super(t,n,r,o,u,c,h,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jy extends Gn{constructor(t,n,r=Yr,o,u,c,h=Ci,p=Ci,d,g=zl){if(g!==zl&&g!==Fl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,u,c,h,p,g,r,d),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Om(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yf extends xi{constructor(t=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:o};const u=t/2,c=n/2,h=Math.floor(r),p=Math.floor(o),d=h+1,g=p+1,v=t/h,_=n/p,x=[],E=[],b=[],S=[];for(let y=0;y<g;y++){const L=y*_-c;for(let N=0;N<d;N++){const w=N*v-u;E.push(w,-L,0),b.push(0,0,1),S.push(N/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let L=0;L<h;L++){const N=L+d*y,w=L+d*(y+1),I=L+1+d*(y+1),P=L+1+d*y;x.push(N,w,P),x.push(w,I,P)}this.setIndex(x),this.setAttribute("position",new Ui(E,3)),this.setAttribute("normal",new Ui(b,3)),this.setAttribute("uv",new Ui(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yf(t.width,t.height,t.widthSegments,t.heightSegments)}}class po extends xi{constructor(t=1,n=32,r=16,o=0,u=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:o,phiLength:u,thetaStart:c,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(c+h,Math.PI);let d=0;const g=[],v=new $,_=new $,x=[],E=[],b=[],S=[];for(let y=0;y<=r;y++){const L=[],N=y/r;let w=0;y===0&&c===0?w=.5/n:y===r&&p===Math.PI&&(w=-.5/n);for(let I=0;I<=n;I++){const P=I/n;v.x=-t*Math.cos(o+P*u)*Math.sin(c+N*h),v.y=t*Math.cos(c+N*h),v.z=t*Math.sin(o+P*u)*Math.sin(c+N*h),E.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),S.push(P+w,1-N),L.push(d++)}g.push(L)}for(let y=0;y<r;y++)for(let L=0;L<n;L++){const N=g[y][L+1],w=g[y][L],I=g[y+1][L],P=g[y+1][L+1];(y!==0||c>0)&&x.push(N,w,P),(y!==r-1||p<Math.PI)&&x.push(w,I,P)}this.setIndex(x),this.setAttribute("position",new Ui(E,3)),this.setAttribute("normal",new Ui(b,3)),this.setAttribute("uv",new Ui(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class OT extends So{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class PT extends So{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zT extends Yy{constructor(t=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-t,c=r+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class FT extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const ux=new Je;class tS{constructor(t,n,r=0,o=1/0){this.ray=new xf(t,n),this.near=r,this.far=o,this.camera=null,this.layers=new Pm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return ux.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ux),this}intersectObject(t,n=!0,r=[]){return hm(t,this,r,n),r.sort(cx),r}intersectObjects(t,n=!0,r=[]){for(let o=0,u=t.length;o<u;o++)hm(t[o],this,r,n);return r.sort(cx),r}}function cx(i,t){return i.distance-t.distance}function hm(i,t,n,r){let o=!0;if(i.layers.test(t.layers)&&i.raycast(t,n)===!1&&(o=!1),o===!0&&r===!0){const u=i.children;for(let c=0,h=u.length;c<h;c++)hm(u[c],t,n,!0)}}class fx{constructor(t=1,n=0,r=0){this.radius=t,this.phi=n,this.theta=r}set(t,n,r){return this.radius=t,this.phi=n,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,r){return this.radius=Math.sqrt(t*t+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Ee(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class BT extends $r{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function hx(i,t,n,r){const o=IT(r);switch(n){case Ny:return i*t;case Oy:return i*t;case Py:return i*t*2;case zy:return i*t/o.components*o.byteLength;case Um:return i*t/o.components*o.byteLength;case Fy:return i*t*2/o.components*o.byteLength;case Nm:return i*t*2/o.components*o.byteLength;case Ly:return i*t*3/o.components*o.byteLength;case Ri:return i*t*4/o.components*o.byteLength;case Lm:return i*t*4/o.components*o.byteLength;case zc:case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bc:case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ip:case Gp:return Math.max(i,16)*Math.max(t,8)/4;case Bp:case Hp:return Math.max(i,8)*Math.max(t,8)/2;case Vp:case kp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qp:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jp:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kp:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $p:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jp:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tm:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case em:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nm:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case im:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case am:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hc:case rm:case sm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case By:case om:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lm:case um:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IT(i){switch(i){case Ea:case Cy:return{byteLength:1,components:1};case Ol:case Dy:case Gl:return{byteLength:2,components:1};case Cm:case Dm:return{byteLength:2,components:4};case Yr:case Rm:case va:return{byteLength:4,components:1};case Uy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eS(){let i=null,t=!1,n=null,r=null;function o(u,c){n(u,c),r=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(r=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){i=u}}}function HT(i){const t=new WeakMap;function n(h,p){const d=h.array,g=h.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,d){const g=p.array,v=p.updateRanges;if(i.bindBuffer(d,h),v.length===0)i.bufferSubData(d,0,g);else{v.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<v.length;x++){const E=v[_],b=v[x];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++_,v[_]=b)}v.length=_+1;for(let x=0,E=v.length;x<E;x++){const b=v[x];i.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(i.deleteBuffer(p.buffer),t.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,p),d.version=h.version}}return{get:o,remove:u,update:c}}var GT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,KT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,c1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_1="gl_FragColor = linearToOutputTexel( gl_FragColor );",v1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,O1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ow=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:GT,alphahash_pars_fragment:VT,alphamap_fragment:kT,alphamap_pars_fragment:XT,alphatest_fragment:WT,alphatest_pars_fragment:YT,aomap_fragment:qT,aomap_pars_fragment:jT,batching_pars_vertex:ZT,batching_vertex:KT,begin_vertex:QT,beginnormal_vertex:$T,bsdfs:JT,iridescence_fragment:t1,bumpmap_pars_fragment:e1,clipping_planes_fragment:n1,clipping_planes_pars_fragment:i1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:r1,color_fragment:s1,color_pars_fragment:o1,color_pars_vertex:l1,color_vertex:u1,common:c1,cube_uv_reflection_fragment:f1,defaultnormal_vertex:h1,displacementmap_pars_vertex:d1,displacementmap_vertex:p1,emissivemap_fragment:m1,emissivemap_pars_fragment:g1,colorspace_fragment:_1,colorspace_pars_fragment:v1,envmap_fragment:x1,envmap_common_pars_fragment:y1,envmap_pars_fragment:S1,envmap_pars_vertex:M1,envmap_physical_pars_fragment:L1,envmap_vertex:E1,fog_vertex:b1,fog_pars_vertex:T1,fog_fragment:A1,fog_pars_fragment:w1,gradientmap_pars_fragment:R1,lightmap_pars_fragment:C1,lights_lambert_fragment:D1,lights_lambert_pars_fragment:U1,lights_pars_begin:N1,lights_toon_fragment:O1,lights_toon_pars_fragment:P1,lights_phong_fragment:z1,lights_phong_pars_fragment:F1,lights_physical_fragment:B1,lights_physical_pars_fragment:I1,lights_fragment_begin:H1,lights_fragment_maps:G1,lights_fragment_end:V1,logdepthbuf_fragment:k1,logdepthbuf_pars_fragment:X1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:Y1,map_fragment:q1,map_pars_fragment:j1,map_particle_fragment:Z1,map_particle_pars_fragment:K1,metalnessmap_fragment:Q1,metalnessmap_pars_fragment:$1,morphinstance_vertex:J1,morphcolor_vertex:tA,morphnormal_vertex:eA,morphtarget_pars_vertex:nA,morphtarget_vertex:iA,normal_fragment_begin:aA,normal_fragment_maps:rA,normal_pars_fragment:sA,normal_pars_vertex:oA,normal_vertex:lA,normalmap_pars_fragment:uA,clearcoat_normal_fragment_begin:cA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:hA,iridescence_pars_fragment:dA,opaque_fragment:pA,packing:mA,premultiplied_alpha_fragment:gA,project_vertex:_A,dithering_fragment:vA,dithering_pars_fragment:xA,roughnessmap_fragment:yA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:MA,shadowmap_pars_vertex:EA,shadowmap_vertex:bA,shadowmask_pars_fragment:TA,skinbase_vertex:AA,skinning_pars_vertex:wA,skinning_vertex:RA,skinnormal_vertex:CA,specularmap_fragment:DA,specularmap_pars_fragment:UA,tonemapping_fragment:NA,tonemapping_pars_fragment:LA,transmission_fragment:OA,transmission_pars_fragment:PA,uv_pars_fragment:zA,uv_pars_vertex:FA,uv_vertex:BA,worldpos_vertex:IA,background_vert:HA,background_frag:GA,backgroundCube_vert:VA,backgroundCube_frag:kA,cube_vert:XA,cube_frag:WA,depth_vert:YA,depth_frag:qA,distanceRGBA_vert:jA,distanceRGBA_frag:ZA,equirect_vert:KA,equirect_frag:QA,linedashed_vert:$A,linedashed_frag:JA,meshbasic_vert:tw,meshbasic_frag:ew,meshlambert_vert:nw,meshlambert_frag:iw,meshmatcap_vert:aw,meshmatcap_frag:rw,meshnormal_vert:sw,meshnormal_frag:ow,meshphong_vert:lw,meshphong_frag:uw,meshphysical_vert:cw,meshphysical_frag:fw,meshtoon_vert:hw,meshtoon_frag:dw,points_vert:pw,points_frag:mw,shadow_vert:gw,shadow_frag:_w,sprite_vert:vw,sprite_frag:xw},kt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Ii={basic:{uniforms:Hn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Hn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new be(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Hn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Hn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Hn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new be(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Hn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Hn([kt.points,kt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Hn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Hn([kt.common,kt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Hn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Hn([kt.sprite,kt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Hn([kt.common,kt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Hn([kt.lights,kt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ii.physical={uniforms:Hn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Ac={r:0,b:0,g:0},zr=new ba,yw=new Je;function Sw(i,t,n,r,o,u,c){const h=new be(0);let p=u===!0?0:1,d,g,v=null,_=0,x=null;function E(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?n:t).get(w)),w}function b(N){let w=!1;const I=E(N);I===null?y(h,p):I&&I.isColor&&(y(I,1),w=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(i.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(N,w){const I=E(w);I&&(I.isCubeTexture||I.mapping===_f)?(g===void 0&&(g=new si(new kl(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:ho(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),zr.copy(w.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(yw.makeRotationFromEuler(zr)),g.material.toneMapped=Ne.getTransfer(I.colorSpace)!==Ge,(v!==I||_!==I.version||x!==i.toneMapping)&&(g.material.needsUpdate=!0,v=I,_=I.version,x=i.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(d===void 0&&(d=new si(new yf(2,2),new hr({name:"BackgroundMaterial",uniforms:ho(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=I,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Ne.getTransfer(I.colorSpace)!==Ge,I.matrixAutoUpdate===!0&&I.updateMatrix(),d.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||_!==I.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,v=I,_=I.version,x=i.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null))}function y(N,w){N.getRGB(Ac,Wy(i)),r.buffers.color.setClear(Ac.r,Ac.g,Ac.b,w,c)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,w=1){h.set(N),p=w,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,y(h,p)},render:b,addToRenderList:S,dispose:L}}function Mw(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=_(null);let u=o,c=!1;function h(C,H,j,et,pt){let dt=!1;const F=v(et,j,H);u!==F&&(u=F,d(u.object)),dt=x(C,et,j,pt),dt&&E(C,et,j,pt),pt!==null&&t.update(pt,i.ELEMENT_ARRAY_BUFFER),(dt||c)&&(c=!1,w(C,H,j,et),pt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function p(){return i.createVertexArray()}function d(C){return i.bindVertexArray(C)}function g(C){return i.deleteVertexArray(C)}function v(C,H,j){const et=j.wireframe===!0;let pt=r[C.id];pt===void 0&&(pt={},r[C.id]=pt);let dt=pt[H.id];dt===void 0&&(dt={},pt[H.id]=dt);let F=dt[et];return F===void 0&&(F=_(p()),dt[et]=F),F}function _(C){const H=[],j=[],et=[];for(let pt=0;pt<n;pt++)H[pt]=0,j[pt]=0,et[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:et,object:C,attributes:{},index:null}}function x(C,H,j,et){const pt=u.attributes,dt=H.attributes;let F=0;const Y=j.getAttributes();for(const W in Y)if(Y[W].location>=0){const D=pt[W];let it=dt[W];if(it===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(it=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(it=C.instanceColor)),D===void 0||D.attribute!==it||it&&D.data!==it.data)return!0;F++}return u.attributesNum!==F||u.index!==et}function E(C,H,j,et){const pt={},dt=H.attributes;let F=0;const Y=j.getAttributes();for(const W in Y)if(Y[W].location>=0){let D=dt[W];D===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(D=C.instanceColor));const it={};it.attribute=D,D&&D.data&&(it.data=D.data),pt[W]=it,F++}u.attributes=pt,u.attributesNum=F,u.index=et}function b(){const C=u.newAttributes;for(let H=0,j=C.length;H<j;H++)C[H]=0}function S(C){y(C,0)}function y(C,H){const j=u.newAttributes,et=u.enabledAttributes,pt=u.attributeDivisors;j[C]=1,et[C]===0&&(i.enableVertexAttribArray(C),et[C]=1),pt[C]!==H&&(i.vertexAttribDivisor(C,H),pt[C]=H)}function L(){const C=u.newAttributes,H=u.enabledAttributes;for(let j=0,et=H.length;j<et;j++)H[j]!==C[j]&&(i.disableVertexAttribArray(j),H[j]=0)}function N(C,H,j,et,pt,dt,F){F===!0?i.vertexAttribIPointer(C,H,j,pt,dt):i.vertexAttribPointer(C,H,j,et,pt,dt)}function w(C,H,j,et){b();const pt=et.attributes,dt=j.getAttributes(),F=H.defaultAttributeValues;for(const Y in dt){const W=dt[Y];if(W.location>=0){let ht=pt[Y];if(ht===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor)),ht!==void 0){const D=ht.normalized,it=ht.itemSize,wt=t.get(ht);if(wt===void 0)continue;const _t=wt.buffer,J=wt.type,St=wt.bytesPerElement,nt=J===i.INT||J===i.UNSIGNED_INT||ht.gpuType===Rm;if(ht.isInterleavedBufferAttribute){const Et=ht.data,Ut=Et.stride,vt=ht.offset;if(Et.isInstancedInterleavedBuffer){for(let st=0;st<W.locationSize;st++)y(W.location+st,Et.meshPerAttribute);C.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let st=0;st<W.locationSize;st++)S(W.location+st);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let st=0;st<W.locationSize;st++)N(W.location+st,it/W.locationSize,J,D,Ut*St,(vt+it/W.locationSize*st)*St,nt)}else{if(ht.isInstancedBufferAttribute){for(let Et=0;Et<W.locationSize;Et++)y(W.location+Et,ht.meshPerAttribute);C.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Et=0;Et<W.locationSize;Et++)S(W.location+Et);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Et=0;Et<W.locationSize;Et++)N(W.location+Et,it/W.locationSize,J,D,it*St,it/W.locationSize*Et*St,nt)}}else if(F!==void 0){const D=F[Y];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(W.location,D);break;case 3:i.vertexAttrib3fv(W.location,D);break;case 4:i.vertexAttrib4fv(W.location,D);break;default:i.vertexAttrib1fv(W.location,D)}}}}L()}function I(){X();for(const C in r){const H=r[C];for(const j in H){const et=H[j];for(const pt in et)g(et[pt].object),delete et[pt];delete H[j]}delete r[C]}}function P(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const j in H){const et=H[j];for(const pt in et)g(et[pt].object),delete et[pt];delete H[j]}delete r[C.id]}function B(C){for(const H in r){const j=r[H];if(j[C.id]===void 0)continue;const et=j[C.id];for(const pt in et)g(et[pt].object),delete et[pt];delete j[C.id]}}function X(){U(),c=!0,u!==o&&(u=o,d(u.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:S,disableUnusedAttributes:L}}function Ew(i,t,n){let r;function o(d){r=d}function u(d,g){i.drawArrays(r,d,g),n.update(g,r,1)}function c(d,g,v){v!==0&&(i.drawArraysInstanced(r,d,g,v),n.update(g,r,v))}function h(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,v);let x=0;for(let E=0;E<v;E++)x+=g[E];n.update(x,r,1)}function p(d,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)c(d[E],g[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(r,d,0,g,0,_,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*_[b];n.update(E,r,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function bw(i,t,n,r){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(B){return!(B!==Ri&&r.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===Gl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ea&&r.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==va&&!X)}function p(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:I,maxSamples:P}}function Tw(i){const t=this;let n=null,r=0,o=!1,u=!1;const c=new sr,h=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||r!==0||o;return o=_,r=v.length,x},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const E=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,y=i.get(v);if(!o||E===null||E.length===0||u&&!S)u?g(null):d();else{const L=u?0:r,N=L*4;let w=y.clippingState||null;p.value=w,w=g(E,_,N,x);for(let I=0;I!==N;++I)w[I]=n[I];y.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,x,E){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const y=x+b*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let N=0,w=x;N!==b;++N,w+=4)c.copy(v[N]).applyMatrix4(L,h),c.normal.toArray(S,w),S[w+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function Aw(i){let t=new WeakMap;function n(c,h){return h===Op?c.mapping=lo:h===Pp&&(c.mapping=uo),c}function r(c){if(c&&c.isTexture){const h=c.mapping;if(h===Op||h===Pp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new CT(p.height);return d.fromEquirectangularTexture(i,c),t.set(c,d),c.addEventListener("dispose",o),n(d.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const to=4,dx=[.125,.215,.35,.446,.526,.582],Gr=20,rp=new zT,px=new be;let sp=null,op=0,lp=0,up=!1;const Br=(1+Math.sqrt(5))/2,Zs=1/Br,mx=[new $(-Br,Zs,0),new $(Br,Zs,0),new $(-Zs,0,Br),new $(Zs,0,Br),new $(0,Br,-Zs),new $(0,Br,Zs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],ww=new $;class gx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,o=100,u={}){const{size:c=256,position:h=ww}=u;sp=this._renderer.getRenderTarget(),op=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sp,op,lp),this._renderer.xr.enabled=up,t.scissorTest=!1,wc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===lo||t.mapping===uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sp=this._renderer.getRenderTarget(),op=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:Gl,format:Ri,colorSpace:co,depthBuffer:!1},o=_x(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_x(t,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rw(u)),this._blurMaterial=Cw(u,t,n)}return o}_compileMaterial(t){const n=new si(this._lodPlanes[0],t);this._renderer.compile(n,rp)}_sceneToCubeUV(t,n,r,o,u){const p=new ri(90,1,n,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(px),v.toneMapping=ur,v.autoClear=!1;const E=new fo({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),b=new si(new kl,E);let S=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,S=!0):(E.color.copy(px),S=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(p.up.set(0,d[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[L],u.y,u.z)):N===1?(p.up.set(0,0,d[L]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[L],u.z)):(p.up.set(0,d[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[L]));const w=this._cubeSize;wc(o,N*w,L>2?w:0,w,w),v.setRenderTarget(o),S&&v.render(b,p),v.render(t,p)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=y}_textureToCubeUV(t,n){const r=this._renderer,o=t.mapping===lo||t.mapping===uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vx());const u=o?this._cubemapMaterial:this._equirectMaterial,c=new si(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;wc(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,rp)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=mx[(o-u-1)%mx.length];this._blur(t,u-1,u,c,h)}n.autoClear=r}_blur(t,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,r,o,"latitudinal",u),this._halfBlur(c,t,r,r,o,"longitudinal",u)}_halfBlur(t,n,r,o,u,c,h){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new si(this._lodPlanes[o],d),_=d.uniforms,x=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*Gr-1),b=u/E,S=isFinite(u)?1+Math.floor(g*b):Gr;S>Gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gr}`);const y=[];let L=0;for(let B=0;B<Gr;++B){const X=B/b,U=Math.exp(-X*X/2);y.push(U),B===0?L+=U:B<S&&(L+=2*U)}for(let B=0;B<y.length;B++)y[B]=y[B]/L;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-r;const w=this._sizeLods[o],I=3*w*(o>N-to?o-N+to:0),P=4*(this._cubeSize-w);wc(n,I,P,3*w,2*w),p.setRenderTarget(n),p.render(v,rp)}}function Rw(i){const t=[],n=[],r=[];let o=i;const u=i-to+1+dx.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);n.push(h);let p=1/h;c>i-to?p=dx[c-i+to-1]:c===0&&(p=0),r.push(p);const d=1/(h-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,E=6,b=3,S=2,y=1,L=new Float32Array(b*E*x),N=new Float32Array(S*E*x),w=new Float32Array(y*E*x);for(let P=0;P<x;P++){const B=P%3*2/3-1,X=P>2?0:-1,U=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];L.set(U,b*E*P),N.set(_,S*E*P);const C=[P,P,P,P,P,P];w.set(C,y*E*P)}const I=new xi;I.setAttribute("position",new Di(L,b)),I.setAttribute("uv",new Di(N,S)),I.setAttribute("faceIndex",new Di(w,y)),t.push(I),o>to&&o--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function _x(i,t,n){const r=new qr(i,t,n);return r.texture.mapping=_f,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wc(i,t,n,r,o){i.viewport.set(t,n,r,o),i.scissor.set(t,n,r,o)}function Cw(i,t,n){const r=new Float32Array(Gr),o=new $(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function vx(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function xx(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Bm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dw(i){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const p=h.mapping,d=p===Op||p===Pp,g=p===lo||p===uo;if(d||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new gx(i)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return d&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new gx(i)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function o(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function u(h){const p=h.target;p.removeEventListener("dispose",u);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function Uw(i){const t={};function n(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return t[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Vc("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Nw(i,t,n,r){const o={},u=new WeakMap;function c(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete o[_.id];const x=u.get(_);x&&(t.remove(x),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const x in _)t.update(_[x],i.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,E=v.attributes.position;let b=0;if(x!==null){const L=x.array;b=x.version;for(let N=0,w=L.length;N<w;N+=3){const I=L[N+0],P=L[N+1],B=L[N+2];_.push(I,P,P,B,B,I)}}else if(E!==void 0){const L=E.array;b=E.version;for(let N=0,w=L.length/3-1;N<w;N+=3){const I=N+0,P=N+1,B=N+2;_.push(I,P,P,B,B,I)}}else return;const S=new(Hy(_)?Xy:ky)(_,1);S.version=b;const y=u.get(v);y&&t.remove(y),u.set(v,S)}function g(v){const _=u.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function Lw(i,t,n){let r;function o(_){r=_}let u,c;function h(_){u=_.type,c=_.bytesPerElement}function p(_,x){i.drawElements(r,x,u,_*c),n.update(x,r,1)}function d(_,x,E){E!==0&&(i.drawElementsInstanced(r,x,u,_*c,E),n.update(x,r,E))}function g(_,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,u,_,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];n.update(S,r,1)}function v(_,x,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/c,x[y],b[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,u,_,0,b,0,E);let y=0;for(let L=0;L<E;L++)y+=x[L]*b[L];n.update(y,r,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Ow(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,h){switch(n.calls++,c){case i.TRIANGLES:n.triangles+=h*(u/3);break;case i.LINES:n.lines+=h*(u/2);break;case i.LINE_STRIP:n.lines+=h*(u-1);break;case i.LINE_LOOP:n.lines+=h*u;break;case i.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Pw(i,t,n){const r=new WeakMap,o=new on;function u(c,h,p){const d=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let C=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var x=C;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),b===!0&&(w=2),S===!0&&(w=3);let I=h.attributes.position.count*w,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const B=new Float32Array(I*P*4*v),X=new Gy(B,I,P,v);X.type=va,X.needsUpdate=!0;const U=w*4;for(let H=0;H<v;H++){const j=y[H],et=L[H],pt=N[H],dt=I*P*4*H;for(let F=0;F<j.count;F++){const Y=F*U;E===!0&&(o.fromBufferAttribute(j,F),B[dt+Y+0]=o.x,B[dt+Y+1]=o.y,B[dt+Y+2]=o.z,B[dt+Y+3]=0),b===!0&&(o.fromBufferAttribute(et,F),B[dt+Y+4]=o.x,B[dt+Y+5]=o.y,B[dt+Y+6]=o.z,B[dt+Y+7]=0),S===!0&&(o.fromBufferAttribute(pt,F),B[dt+Y+8]=o.x,B[dt+Y+9]=o.y,B[dt+Y+10]=o.z,B[dt+Y+11]=pt.itemSize===4?o.w:1)}}_={count:v,texture:X,size:new fe(I,P)},r.set(h,_),h.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:u}}function zw(i,t,n,r){let o=new WeakMap;function u(p){const d=r.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==d&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function c(){o=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:c}}const nS=new Gn,yx=new Jy(1,1),iS=new Gy,aS=new hT,rS=new qy,Sx=[],Mx=[],Ex=new Float32Array(16),bx=new Float32Array(9),Tx=new Float32Array(4);function Mo(i,t,n){const r=i[0];if(r<=0||r>0)return i;const o=t*n;let u=Sx[o];if(u===void 0&&(u=new Float32Array(o),Sx[o]=u),t!==0){r.toArray(u,0);for(let c=1,h=0;c!==t;++c)h+=n,i[c].toArray(u,h)}return u}function _n(i,t){if(i.length!==t.length)return!1;for(let n=0,r=i.length;n<r;n++)if(i[n]!==t[n])return!1;return!0}function vn(i,t){for(let n=0,r=t.length;n<r;n++)i[n]=t[n]}function Sf(i,t){let n=Mx[t];n===void 0&&(n=new Int32Array(t),Mx[t]=n);for(let r=0;r!==t;++r)n[r]=i.allocateTextureUnit();return n}function Fw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function Bw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2fv(this.addr,t),vn(n,t)}}function Iw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;i.uniform3fv(this.addr,t),vn(n,t)}}function Hw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4fv(this.addr,t),vn(n,t)}}function Gw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(_n(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,r))return;Tx.set(r),i.uniformMatrix2fv(this.addr,!1,Tx),vn(n,r)}}function Vw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(_n(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,r))return;bx.set(r),i.uniformMatrix3fv(this.addr,!1,bx),vn(n,r)}}function kw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(_n(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,r))return;Ex.set(r),i.uniformMatrix4fv(this.addr,!1,Ex),vn(n,r)}}function Xw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function Ww(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2iv(this.addr,t),vn(n,t)}}function Yw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;i.uniform3iv(this.addr,t),vn(n,t)}}function qw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4iv(this.addr,t),vn(n,t)}}function jw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function Zw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2uiv(this.addr,t),vn(n,t)}}function Kw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;i.uniform3uiv(this.addr,t),vn(n,t)}}function Qw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4uiv(this.addr,t),vn(n,t)}}function $w(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let u;this.type===i.SAMPLER_2D_SHADOW?(yx.compareFunction=Iy,u=yx):u=nS,n.setTexture2D(t||u,o)}function Jw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(t||aS,o)}function tR(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(t||rS,o)}function eR(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(t||iS,o)}function nR(i){switch(i){case 5126:return Fw;case 35664:return Bw;case 35665:return Iw;case 35666:return Hw;case 35674:return Gw;case 35675:return Vw;case 35676:return kw;case 5124:case 35670:return Xw;case 35667:case 35671:return Ww;case 35668:case 35672:return Yw;case 35669:case 35673:return qw;case 5125:return jw;case 36294:return Zw;case 36295:return Kw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return tR;case 36289:case 36303:case 36311:case 36292:return eR}}function iR(i,t){i.uniform1fv(this.addr,t)}function aR(i,t){const n=Mo(t,this.size,2);i.uniform2fv(this.addr,n)}function rR(i,t){const n=Mo(t,this.size,3);i.uniform3fv(this.addr,n)}function sR(i,t){const n=Mo(t,this.size,4);i.uniform4fv(this.addr,n)}function oR(i,t){const n=Mo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function lR(i,t){const n=Mo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function uR(i,t){const n=Mo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function cR(i,t){i.uniform1iv(this.addr,t)}function fR(i,t){i.uniform2iv(this.addr,t)}function hR(i,t){i.uniform3iv(this.addr,t)}function dR(i,t){i.uniform4iv(this.addr,t)}function pR(i,t){i.uniform1uiv(this.addr,t)}function mR(i,t){i.uniform2uiv(this.addr,t)}function gR(i,t){i.uniform3uiv(this.addr,t)}function _R(i,t){i.uniform4uiv(this.addr,t)}function vR(i,t,n){const r=this.cache,o=t.length,u=Sf(n,o);_n(r,u)||(i.uniform1iv(this.addr,u),vn(r,u));for(let c=0;c!==o;++c)n.setTexture2D(t[c]||nS,u[c])}function xR(i,t,n){const r=this.cache,o=t.length,u=Sf(n,o);_n(r,u)||(i.uniform1iv(this.addr,u),vn(r,u));for(let c=0;c!==o;++c)n.setTexture3D(t[c]||aS,u[c])}function yR(i,t,n){const r=this.cache,o=t.length,u=Sf(n,o);_n(r,u)||(i.uniform1iv(this.addr,u),vn(r,u));for(let c=0;c!==o;++c)n.setTextureCube(t[c]||rS,u[c])}function SR(i,t,n){const r=this.cache,o=t.length,u=Sf(n,o);_n(r,u)||(i.uniform1iv(this.addr,u),vn(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(t[c]||iS,u[c])}function MR(i){switch(i){case 5126:return iR;case 35664:return aR;case 35665:return rR;case 35666:return sR;case 35674:return oR;case 35675:return lR;case 35676:return uR;case 5124:case 35670:return cR;case 35667:case 35671:return fR;case 35668:case 35672:return hR;case 35669:case 35673:return dR;case 5125:return pR;case 36294:return mR;case 36295:return gR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return xR;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return SR}}class ER{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=nR(n.type)}}class bR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MR(n.type)}}class TR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(t,n[h.id],r)}}}const cp=/(\w+)(\])?(\[|\.)?/g;function Ax(i,t){i.seq.push(t),i.map[t.id]=t}function AR(i,t,n){const r=i.name,o=r.length;for(cp.lastIndex=0;;){const u=cp.exec(r),c=cp.lastIndex;let h=u[1];const p=u[2]==="]",d=u[3];if(p&&(h=h|0),d===void 0||d==="["&&c+2===o){Ax(n,d===void 0?new ER(h,i,t):new bR(h,i,t));break}else{let v=n.map[h];v===void 0&&(v=new TR(h),Ax(n,v)),n=v}}}class kc{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const u=t.getActiveUniform(n,o),c=t.getUniformLocation(n,u.name);AR(u,c,this)}}setValue(t,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(t,r,o)}setOptional(t,n,r){const o=n[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,n,r,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const r=[];for(let o=0,u=t.length;o!==u;++o){const c=t[o];c.id in n&&r.push(c)}return r}}function wx(i,t,n){const r=i.createShader(t);return i.shaderSource(r,n),i.compileShader(r),r}const wR=37297;let RR=0;function CR(i,t){const n=i.split(`
`),r=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=o;c<u;c++){const h=c+1;r.push(`${h===t?">":" "} ${h}: ${n[c]}`)}return r.join(`
`)}const Rx=new ge;function DR(i){Ne._getMatrix(Rx,Ne.workingColorSpace,i);const t=`mat3( ${Rx.elements.map(n=>n.toFixed(4))} )`;switch(Ne.getTransfer(i)){case Zc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cx(i,t,n){const r=i.getShaderParameter(t,i.COMPILE_STATUS),o=i.getShaderInfoLog(t).trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+CR(i.getShaderSource(t),c)}else return o}function UR(i,t){const n=DR(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function NR(i,t){let n;switch(t){case zb:n="Linear";break;case Fb:n="Reinhard";break;case Bb:n="Cineon";break;case Ib:n="ACESFilmic";break;case Gb:n="AgX";break;case Vb:n="Neutral";break;case Hb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rc=new $;function LR(){Ne.getLuminanceCoefficients(Rc);const i=Rc.x.toFixed(4),t=Rc.y.toFixed(4),n=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function PR(i){const t=[];for(const n in i){const r=i[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function zR(i,t){const n={},r=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=i.getActiveAttrib(t,o),c=u.name;let h=1;u.type===i.FLOAT_MAT2&&(h=2),u.type===i.FLOAT_MAT3&&(h=3),u.type===i.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:i.getAttribLocation(t,c),locationSize:h}}return n}function Cl(i){return i!==""}function Dx(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ux(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FR=/^[ \t]*#include +<([\w\d./]+)>/gm;function dm(i){return i.replace(FR,IR)}const BR=new Map;function IR(i,t){let n=_e[t];if(n===void 0){const r=BR.get(t);if(r!==void 0)n=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return dm(n)}const HR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nx(i){return i.replace(HR,GR)}function GR(i,t,n,r){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Lx(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function VR(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ay?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mb?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ga&&(t="SHADOWMAP_TYPE_VSM"),t}function kR(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lo:case uo:t="ENVMAP_TYPE_CUBE";break;case _f:t="ENVMAP_TYPE_CUBE_UV";break}return t}function XR(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case uo:t="ENVMAP_MODE_REFRACTION";break}return t}function WR(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wy:t="ENVMAP_BLENDING_MULTIPLY";break;case Ob:t="ENVMAP_BLENDING_MIX";break;case Pb:t="ENVMAP_BLENDING_ADD";break}return t}function YR(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function qR(i,t,n,r){const o=i.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const p=VR(n),d=kR(n),g=XR(n),v=WR(n),_=YR(n),x=OR(n),E=PR(u),b=o.createProgram();let S,y,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Cl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Cl).join(`
`),y.length>0&&(y+=`
`)):(S=[Lx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),y=[Lx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ur?"#define TONE_MAPPING":"",n.toneMapping!==ur?_e.tonemapping_pars_fragment:"",n.toneMapping!==ur?NR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,UR("linearToOutputTexel",n.outputColorSpace),LR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Cl).join(`
`)),c=dm(c),c=Dx(c,n),c=Ux(c,n),h=dm(h),h=Dx(h,n),h=Ux(h,n),c=Nx(c),h=Nx(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===Gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=L+S+c,w=L+y+h,I=wx(o,o.VERTEX_SHADER,N),P=wx(o,o.FRAGMENT_SHADER,w);o.attachShader(b,I),o.attachShader(b,P),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function B(H){if(i.debug.checkShaderErrors){const j=o.getProgramInfoLog(b).trim(),et=o.getShaderInfoLog(I).trim(),pt=o.getShaderInfoLog(P).trim();let dt=!0,F=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,b,I,P);else{const Y=Cx(o,I,"vertex"),W=Cx(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+Y+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(et===""||pt==="")&&(F=!1);F&&(H.diagnostics={runnable:dt,programLog:j,vertexShader:{log:et,prefix:S},fragmentShader:{log:pt,prefix:y}})}o.deleteShader(I),o.deleteShader(P),X=new kc(o,b),U=zR(o,b)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(b,wR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=P,this}let jR=0;class ZR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new KR(t),n.set(t,r)),r}}class KR{constructor(t){this.id=jR++,this.code=t,this.usedTimes=0}}function QR(i,t,n,r,o,u,c){const h=new Pm,p=new ZR,d=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return d.add(U),U===0?"uv":`uv${U}`}function S(U,C,H,j,et){const pt=j.fog,dt=et.geometry,F=U.isMeshStandardMaterial?j.environment:null,Y=(U.isMeshStandardMaterial?n:t).get(U.envMap||F),W=Y&&Y.mapping===_f?Y.image.height:null,ht=E[U.type];U.precision!==null&&(x=o.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const D=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,it=D!==void 0?D.length:0;let wt=0;dt.morphAttributes.position!==void 0&&(wt=1),dt.morphAttributes.normal!==void 0&&(wt=2),dt.morphAttributes.color!==void 0&&(wt=3);let _t,J,St,nt;if(ht){const Te=Ii[ht];_t=Te.vertexShader,J=Te.fragmentShader}else _t=U.vertexShader,J=U.fragmentShader,p.update(U),St=p.getVertexShaderID(U),nt=p.getFragmentShaderID(U);const Et=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),vt=et.isInstancedMesh===!0,st=et.isBatchedMesh===!0,bt=!!U.map,Q=!!U.matcap,zt=!!Y,z=!!U.aoMap,Zt=!!U.lightMap,Gt=!!U.bumpMap,Yt=!!U.normalMap,qt=!!U.displacementMap,de=!!U.emissiveMap,Kt=!!U.metalnessMap,O=!!U.roughnessMap,T=U.anisotropy>0,rt=U.clearcoat>0,Tt=U.dispersion>0,Rt=U.iridescence>0,mt=U.sheen>0,Ct=U.transmission>0,Lt=T&&!!U.anisotropyMap,Pt=rt&&!!U.clearcoatMap,ce=rt&&!!U.clearcoatNormalMap,Nt=rt&&!!U.clearcoatRoughnessMap,Xt=Rt&&!!U.iridescenceMap,$t=Rt&&!!U.iridescenceThicknessMap,te=mt&&!!U.sheenColorMap,Dt=mt&&!!U.sheenRoughnessMap,ee=!!U.specularMap,Jt=!!U.specularColorMap,pe=!!U.specularIntensityMap,k=Ct&&!!U.transmissionMap,Ft=Ct&&!!U.thicknessMap,ft=!!U.gradientMap,yt=!!U.alphaMap,Bt=U.alphaTest>0,It=!!U.alphaHash,he=!!U.extensions;let Fe=ur;U.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const tn={shaderID:ht,shaderType:U.type,shaderName:U.name,vertexShader:_t,fragmentShader:J,defines:U.defines,customVertexShaderID:St,customFragmentShaderID:nt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:st,batchingColor:st&&et._colorsTexture!==null,instancing:vt,instancingColor:vt&&et.instanceColor!==null,instancingMorph:vt&&et.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:co,alphaToCoverage:!!U.alphaToCoverage,map:bt,matcap:Q,envMap:zt,envMapMode:zt&&Y.mapping,envMapCubeUVHeight:W,aoMap:z,lightMap:Zt,bumpMap:Gt,normalMap:Yt,displacementMap:_&&qt,emissiveMap:de,normalMapObjectSpace:Yt&&U.normalMapType===qb,normalMapTangentSpace:Yt&&U.normalMapType===Yb,metalnessMap:Kt,roughnessMap:O,anisotropy:T,anisotropyMap:Lt,clearcoat:rt,clearcoatMap:Pt,clearcoatNormalMap:ce,clearcoatRoughnessMap:Nt,dispersion:Tt,iridescence:Rt,iridescenceMap:Xt,iridescenceThicknessMap:$t,sheen:mt,sheenColorMap:te,sheenRoughnessMap:Dt,specularMap:ee,specularColorMap:Jt,specularIntensityMap:pe,transmission:Ct,transmissionMap:k,thicknessMap:Ft,gradientMap:ft,opaque:U.transparent===!1&&U.blending===ao&&U.alphaToCoverage===!1,alphaMap:yt,alphaTest:Bt,alphaHash:It,combine:U.combine,mapUv:bt&&b(U.map.channel),aoMapUv:z&&b(U.aoMap.channel),lightMapUv:Zt&&b(U.lightMap.channel),bumpMapUv:Gt&&b(U.bumpMap.channel),normalMapUv:Yt&&b(U.normalMap.channel),displacementMapUv:qt&&b(U.displacementMap.channel),emissiveMapUv:de&&b(U.emissiveMap.channel),metalnessMapUv:Kt&&b(U.metalnessMap.channel),roughnessMapUv:O&&b(U.roughnessMap.channel),anisotropyMapUv:Lt&&b(U.anisotropyMap.channel),clearcoatMapUv:Pt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:ce&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:te&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&b(U.sheenRoughnessMap.channel),specularMapUv:ee&&b(U.specularMap.channel),specularColorMapUv:Jt&&b(U.specularColorMap.channel),specularIntensityMapUv:pe&&b(U.specularIntensityMap.channel),transmissionMapUv:k&&b(U.transmissionMap.channel),thicknessMapUv:Ft&&b(U.thicknessMap.channel),alphaMapUv:yt&&b(U.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Yt||T),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!dt.attributes.uv&&(bt||yt),fog:!!pt,useFog:U.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ut,skinning:et.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:wt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:U.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:bt&&U.map.isVideoTexture===!0&&Ne.getTransfer(U.map.colorSpace)===Ge,decodeVideoTextureEmissive:de&&U.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(U.emissiveMap.colorSpace)===Ge,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===_a,flipSided:U.side===Zn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:he&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&U.extensions.multiDraw===!0||st)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return tn.vertexUv1s=d.has(1),tn.vertexUv2s=d.has(2),tn.vertexUv3s=d.has(3),d.clear(),tn}function y(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)C.push(H),C.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(L(C,U),N(C,U),C.push(i.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function L(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function N(U,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),U.push(h.mask)}function w(U){const C=E[U.type];let H;if(C){const j=Ii[C];H=TT.clone(j.uniforms)}else H=U.uniforms;return H}function I(U,C){let H;for(let j=0,et=g.length;j<et;j++){const pt=g[j];if(pt.cacheKey===C){H=pt,++H.usedTimes;break}}return H===void 0&&(H=new qR(i,C,U,u),g.push(H)),H}function P(U){if(--U.usedTimes===0){const C=g.indexOf(U);g[C]=g[g.length-1],g.pop(),U.destroy()}}function B(U){p.remove(U)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:I,releaseProgram:P,releaseShaderCache:B,programs:g,dispose:X}}function $R(){let i=new WeakMap;function t(c){return i.has(c)}function n(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function r(c){i.delete(c)}function o(c,h,p){i.get(c)[h]=p}function u(){i=new WeakMap}return{has:t,get:n,remove:r,update:o,dispose:u}}function JR(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ox(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Px(){const i=[];let t=0;const n=[],r=[],o=[];function u(){t=0,n.length=0,r.length=0,o.length=0}function c(v,_,x,E,b,S){let y=i[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:E,renderOrder:v.renderOrder,z:b,group:S},i[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=b,y.group=S),t++,y}function h(v,_,x,E,b,S){const y=c(v,_,x,E,b,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):n.push(y)}function p(v,_,x,E,b,S){const y=c(v,_,x,E,b,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):n.unshift(y)}function d(v,_){n.length>1&&n.sort(v||JR),r.length>1&&r.sort(_||Ox),o.length>1&&o.sort(_||Ox)}function g(){for(let v=t,_=i.length;v<_;v++){const x=i[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:h,unshift:p,finish:g,sort:d}}function t2(){let i=new WeakMap;function t(r,o){const u=i.get(r);let c;return u===void 0?(c=new Px,i.set(r,[c])):o>=u.length?(c=new Px,u.push(c)):c=u[o],c}function n(){i=new WeakMap}return{get:t,dispose:n}}function e2(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new $,color:new be};break;case"SpotLight":n={position:new $,direction:new $,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new be,groundColor:new be};break;case"RectAreaLight":n={color:new be,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=n,n}}}function n2(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let i2=0;function a2(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r2(i){const t=new e2,n=n2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new $);const o=new $,u=new Je,c=new Je;function h(d){let g=0,v=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,E=0,b=0,S=0,y=0,L=0,N=0,w=0,I=0,P=0,B=0;d.sort(a2);for(let U=0,C=d.length;U<C;U++){const H=d[U],j=H.color,et=H.intensity,pt=H.distance,dt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=j.r*et,v+=j.g*et,_+=j.b*et;else if(H.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(H.sh.coefficients[F],et);B++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[x]=W,r.directionalShadowMap[x]=dt,r.directionalShadowMatrix[x]=H.shadow.matrix,L++}r.directional[x]=F,x++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(j).multiplyScalar(et),F.distance=pt,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,r.spot[b]=F;const Y=H.shadow;if(H.map&&(r.spotLightMap[I]=H.map,I++,Y.updateMatrices(H),H.castShadow&&P++),r.spotLightMatrix[b]=Y.matrix,H.castShadow){const W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[b]=W,r.spotShadowMap[b]=dt,w++}b++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(j).multiplyScalar(et),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=F,S++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=H.shadow.matrix,N++}r.point[E]=F,E++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar(et),F.groundColor.copy(H.groundColor).multiplyScalar(et),r.hemi[y]=F,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=kt.LTC_FLOAT_1,r.rectAreaLTC2=kt.LTC_FLOAT_2):(r.rectAreaLTC1=kt.LTC_HALF_1,r.rectAreaLTC2=kt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const X=r.hash;(X.directionalLength!==x||X.pointLength!==E||X.spotLength!==b||X.rectAreaLength!==S||X.hemiLength!==y||X.numDirectionalShadows!==L||X.numPointShadows!==N||X.numSpotShadows!==w||X.numSpotMaps!==I||X.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=w+I-P,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=B,X.directionalLength=x,X.pointLength=E,X.spotLength=b,X.rectAreaLength=S,X.hemiLength=y,X.numDirectionalShadows=L,X.numPointShadows=N,X.numSpotShadows=w,X.numSpotMaps=I,X.numLightProbes=B,r.version=i2++)}function p(d,g){let v=0,_=0,x=0,E=0,b=0;const S=g.matrixWorldInverse;for(let y=0,L=d.length;y<L;y++){const N=d[y];if(N.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),v++}else if(N.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),x++}else if(N.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(S),c.identity(),u.copy(N.matrixWorld),u.premultiply(S),c.extractRotation(u),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),E++}else if(N.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(S),_++}else if(N.isHemisphereLight){const w=r.hemi[b];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:r}}function zx(i){const t=new r2(i),n=[],r=[];function o(g){d.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function c(g){r.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c}}function s2(i){let t=new WeakMap;function n(o,u=0){const c=t.get(o);let h;return c===void 0?(h=new zx(i),t.set(o,[h])):u>=c.length?(h=new zx(i),c.push(h)):h=c[u],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const o2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u2(i,t,n){let r=new Qy;const o=new fe,u=new fe,c=new on,h=new OT({depthPacking:Wb}),p=new PT,d={},g=n.maxTextureSize,v={[fr]:Zn,[Zn]:fr,[_a]:_a},_=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:o2,fragmentShader:l2}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new xi;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new si(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ay;let y=this.type;this.render=function(P,B,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const U=i.getRenderTarget(),C=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),j=i.state;j.setBlending(lr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const et=y!==ga&&this.type===ga,pt=y===ga&&this.type!==ga;for(let dt=0,F=P.length;dt<F;dt++){const Y=P[dt],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const ht=W.getFrameExtents();if(o.multiply(ht),u.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/ht.x),o.x=u.x*ht.x,W.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/ht.y),o.y=u.y*ht.y,W.mapSize.y=u.y)),W.map===null||et===!0||pt===!0){const it=this.type!==ga?{minFilter:Ci,magFilter:Ci}:{};W.map!==null&&W.map.dispose(),W.map=new qr(o.x,o.y,it),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const D=W.getViewportCount();for(let it=0;it<D;it++){const wt=W.getViewport(it);c.set(u.x*wt.x,u.y*wt.y,u.x*wt.z,u.y*wt.w),j.viewport(c),W.updateMatrices(Y,it),r=W.getFrustum(),w(B,X,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===ga&&L(W,X),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,i.setRenderTarget(U,C,H)};function L(P,B){const X=t.update(b);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qr(o.x,o.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(B,null,X,_,b,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(B,null,X,x,b,null)}function N(P,B,X,U){let C=null;const H=X.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)C=H;else if(C=X.isPointLight===!0?p:h,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const j=C.uuid,et=B.uuid;let pt=d[j];pt===void 0&&(pt={},d[j]=pt);let dt=pt[et];dt===void 0&&(dt=C.clone(),pt[et]=dt,B.addEventListener("dispose",I)),C=dt}if(C.visible=B.visible,C.wireframe=B.wireframe,U===ga?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:v[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const j=i.properties.get(C);j.light=X}return C}function w(P,B,X,U,C){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===ga)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld);const et=t.update(P),pt=P.material;if(Array.isArray(pt)){const dt=et.groups;for(let F=0,Y=dt.length;F<Y;F++){const W=dt[F],ht=pt[W.materialIndex];if(ht&&ht.visible){const D=N(P,ht,U,C);P.onBeforeShadow(i,P,B,X,et,D,W),i.renderBufferDirect(X,null,et,D,P,W),P.onAfterShadow(i,P,B,X,et,D,W)}}}else if(pt.visible){const dt=N(P,pt,U,C);P.onBeforeShadow(i,P,B,X,et,dt,null),i.renderBufferDirect(X,null,et,dt,P,null),P.onAfterShadow(i,P,B,X,et,dt,null)}}const j=P.children;for(let et=0,pt=j.length;et<pt;et++)w(j[et],B,X,U,C)}function I(P){P.target.removeEventListener("dispose",I);for(const X in d){const U=d[X],C=P.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const c2={[wp]:Rp,[Cp]:Np,[Dp]:Lp,[oo]:Up,[Rp]:wp,[Np]:Cp,[Lp]:Dp,[Up]:oo};function f2(i,t){function n(){let k=!1;const Ft=new on;let ft=null;const yt=new on(0,0,0,0);return{setMask:function(Bt){ft!==Bt&&!k&&(i.colorMask(Bt,Bt,Bt,Bt),ft=Bt)},setLocked:function(Bt){k=Bt},setClear:function(Bt,It,he,Fe,tn){tn===!0&&(Bt*=Fe,It*=Fe,he*=Fe),Ft.set(Bt,It,he,Fe),yt.equals(Ft)===!1&&(i.clearColor(Bt,It,he,Fe),yt.copy(Ft))},reset:function(){k=!1,ft=null,yt.set(-1,0,0,0)}}}function r(){let k=!1,Ft=!1,ft=null,yt=null,Bt=null;return{setReversed:function(It){if(Ft!==It){const he=t.get("EXT_clip_control");It?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),Ft=It;const Fe=Bt;Bt=null,this.setClear(Fe)}},getReversed:function(){return Ft},setTest:function(It){It?Et(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(It){ft!==It&&!k&&(i.depthMask(It),ft=It)},setFunc:function(It){if(Ft&&(It=c2[It]),yt!==It){switch(It){case wp:i.depthFunc(i.NEVER);break;case Rp:i.depthFunc(i.ALWAYS);break;case Cp:i.depthFunc(i.LESS);break;case oo:i.depthFunc(i.LEQUAL);break;case Dp:i.depthFunc(i.EQUAL);break;case Up:i.depthFunc(i.GEQUAL);break;case Np:i.depthFunc(i.GREATER);break;case Lp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=It}},setLocked:function(It){k=It},setClear:function(It){Bt!==It&&(Ft&&(It=1-It),i.clearDepth(It),Bt=It)},reset:function(){k=!1,ft=null,yt=null,Bt=null,Ft=!1}}}function o(){let k=!1,Ft=null,ft=null,yt=null,Bt=null,It=null,he=null,Fe=null,tn=null;return{setTest:function(Te){k||(Te?Et(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Te){Ft!==Te&&!k&&(i.stencilMask(Te),Ft=Te)},setFunc:function(Te,Fn,Ze){(ft!==Te||yt!==Fn||Bt!==Ze)&&(i.stencilFunc(Te,Fn,Ze),ft=Te,yt=Fn,Bt=Ze)},setOp:function(Te,Fn,Ze){(It!==Te||he!==Fn||Fe!==Ze)&&(i.stencilOp(Te,Fn,Ze),It=Te,he=Fn,Fe=Ze)},setLocked:function(Te){k=Te},setClear:function(Te){tn!==Te&&(i.clearStencil(Te),tn=Te)},reset:function(){k=!1,Ft=null,ft=null,yt=null,Bt=null,It=null,he=null,Fe=null,tn=null}}}const u=new n,c=new r,h=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],E=null,b=!1,S=null,y=null,L=null,N=null,w=null,I=null,P=null,B=new be(0,0,0),X=0,U=!1,C=null,H=null,j=null,et=null,pt=null;const dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=Y>=2);let ht=null,D={};const it=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),_t=new on().fromArray(it),J=new on().fromArray(wt);function St(k,Ft,ft,yt){const Bt=new Uint8Array(4),It=i.createTexture();i.bindTexture(k,It),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<ft;he++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Ft,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(Ft+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return It}const nt={};nt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Et(i.DEPTH_TEST),c.setFunc(oo),Gt(!1),Yt(zv),Et(i.CULL_FACE),z(lr);function Et(k){g[k]!==!0&&(i.enable(k),g[k]=!0)}function Ut(k){g[k]!==!1&&(i.disable(k),g[k]=!1)}function vt(k,Ft){return v[k]!==Ft?(i.bindFramebuffer(k,Ft),v[k]=Ft,k===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Ft),k===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Ft),!0):!1}function st(k,Ft){let ft=x,yt=!1;if(k){ft=_.get(Ft),ft===void 0&&(ft=[],_.set(Ft,ft));const Bt=k.textures;if(ft.length!==Bt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let It=0,he=Bt.length;It<he;It++)ft[It]=i.COLOR_ATTACHMENT0+It;ft.length=Bt.length,yt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ft)}function bt(k){return E!==k?(i.useProgram(k),E=k,!0):!1}const Q={[Hr]:i.FUNC_ADD,[_b]:i.FUNC_SUBTRACT,[vb]:i.FUNC_REVERSE_SUBTRACT};Q[xb]=i.MIN,Q[yb]=i.MAX;const zt={[Sb]:i.ZERO,[Mb]:i.ONE,[Eb]:i.SRC_COLOR,[Tp]:i.SRC_ALPHA,[Cb]:i.SRC_ALPHA_SATURATE,[wb]:i.DST_COLOR,[Tb]:i.DST_ALPHA,[bb]:i.ONE_MINUS_SRC_COLOR,[Ap]:i.ONE_MINUS_SRC_ALPHA,[Rb]:i.ONE_MINUS_DST_COLOR,[Ab]:i.ONE_MINUS_DST_ALPHA,[Db]:i.CONSTANT_COLOR,[Ub]:i.ONE_MINUS_CONSTANT_COLOR,[Nb]:i.CONSTANT_ALPHA,[Lb]:i.ONE_MINUS_CONSTANT_ALPHA};function z(k,Ft,ft,yt,Bt,It,he,Fe,tn,Te){if(k===lr){b===!0&&(Ut(i.BLEND),b=!1);return}if(b===!1&&(Et(i.BLEND),b=!0),k!==gb){if(k!==S||Te!==U){if((y!==Hr||w!==Hr)&&(i.blendEquation(i.FUNC_ADD),y=Hr,w=Hr),Te)switch(k){case ao:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fv:i.blendFunc(i.ONE,i.ONE);break;case Bv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iv:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fv:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iv:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,N=null,I=null,P=null,B.set(0,0,0),X=0,S=k,U=Te}return}Bt=Bt||Ft,It=It||ft,he=he||yt,(Ft!==y||Bt!==w)&&(i.blendEquationSeparate(Q[Ft],Q[Bt]),y=Ft,w=Bt),(ft!==L||yt!==N||It!==I||he!==P)&&(i.blendFuncSeparate(zt[ft],zt[yt],zt[It],zt[he]),L=ft,N=yt,I=It,P=he),(Fe.equals(B)===!1||tn!==X)&&(i.blendColor(Fe.r,Fe.g,Fe.b,tn),B.copy(Fe),X=tn),S=k,U=!1}function Zt(k,Ft){k.side===_a?Ut(i.CULL_FACE):Et(i.CULL_FACE);let ft=k.side===Zn;Ft&&(ft=!ft),Gt(ft),k.blending===ao&&k.transparent===!1?z(lr):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),u.setMask(k.colorWrite);const yt=k.stencilWrite;h.setTest(yt),yt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),de(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(k){C!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),C=k)}function Yt(k){k!==db?(Et(i.CULL_FACE),k!==H&&(k===zv?i.cullFace(i.BACK):k===pb?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),H=k}function qt(k){k!==j&&(F&&i.lineWidth(k),j=k)}function de(k,Ft,ft){k?(Et(i.POLYGON_OFFSET_FILL),(et!==Ft||pt!==ft)&&(i.polygonOffset(Ft,ft),et=Ft,pt=ft)):Ut(i.POLYGON_OFFSET_FILL)}function Kt(k){k?Et(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function O(k){k===void 0&&(k=i.TEXTURE0+dt-1),ht!==k&&(i.activeTexture(k),ht=k)}function T(k,Ft,ft){ft===void 0&&(ht===null?ft=i.TEXTURE0+dt-1:ft=ht);let yt=D[ft];yt===void 0&&(yt={type:void 0,texture:void 0},D[ft]=yt),(yt.type!==k||yt.texture!==Ft)&&(ht!==ft&&(i.activeTexture(ft),ht=ft),i.bindTexture(k,Ft||nt[k]),yt.type=k,yt.texture=Ft)}function rt(){const k=D[ht];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Tt(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(k){_t.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),_t.copy(k))}function Dt(k){J.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function ee(k,Ft){let ft=d.get(Ft);ft===void 0&&(ft=new WeakMap,d.set(Ft,ft));let yt=ft.get(k);yt===void 0&&(yt=i.getUniformBlockIndex(Ft,k.name),ft.set(k,yt))}function Jt(k,Ft){const yt=d.get(Ft).get(k);p.get(Ft)!==yt&&(i.uniformBlockBinding(Ft,yt,k.__bindingPointIndex),p.set(Ft,yt))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},ht=null,D={},v={},_=new WeakMap,x=[],E=null,b=!1,S=null,y=null,L=null,N=null,w=null,I=null,P=null,B=new be(0,0,0),X=0,U=!1,C=null,H=null,j=null,et=null,pt=null,_t.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:Et,disable:Ut,bindFramebuffer:vt,drawBuffers:st,useProgram:bt,setBlending:z,setMaterial:Zt,setFlipSided:Gt,setCullFace:Yt,setLineWidth:qt,setPolygonOffset:de,setScissorTest:Kt,activeTexture:O,bindTexture:T,unbindTexture:rt,compressedTexImage2D:Tt,compressedTexImage3D:Rt,texImage2D:Xt,texImage3D:$t,updateUBOMapping:ee,uniformBlockBinding:Jt,texStorage2D:ce,texStorage3D:Nt,texSubImage2D:mt,texSubImage3D:Ct,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Pt,scissor:te,viewport:Dt,reset:pe}}function h2(i,t,n,r,o,u,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new fe,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return x?new OffscreenCanvas(O,T):Qc("canvas")}function b(O,T,rt){let Tt=1;const Rt=Kt(O);if((Rt.width>rt||Rt.height>rt)&&(Tt=rt/Math.max(Rt.width,Rt.height)),Tt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const mt=Math.floor(Tt*Rt.width),Ct=Math.floor(Tt*Rt.height);v===void 0&&(v=E(mt,Ct));const Lt=T?E(mt,Ct):v;return Lt.width=mt,Lt.height=Ct,Lt.getContext("2d").drawImage(O,0,0,mt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Rt.width+"x"+Rt.height+") to ("+mt+"x"+Ct+")."),Lt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Rt.width+"x"+Rt.height+")."),O;return O}function S(O){return O.generateMipmaps}function y(O){i.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(O,T,rt,Tt,Rt=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let mt=T;if(T===i.RED&&(rt===i.FLOAT&&(mt=i.R32F),rt===i.HALF_FLOAT&&(mt=i.R16F),rt===i.UNSIGNED_BYTE&&(mt=i.R8)),T===i.RED_INTEGER&&(rt===i.UNSIGNED_BYTE&&(mt=i.R8UI),rt===i.UNSIGNED_SHORT&&(mt=i.R16UI),rt===i.UNSIGNED_INT&&(mt=i.R32UI),rt===i.BYTE&&(mt=i.R8I),rt===i.SHORT&&(mt=i.R16I),rt===i.INT&&(mt=i.R32I)),T===i.RG&&(rt===i.FLOAT&&(mt=i.RG32F),rt===i.HALF_FLOAT&&(mt=i.RG16F),rt===i.UNSIGNED_BYTE&&(mt=i.RG8)),T===i.RG_INTEGER&&(rt===i.UNSIGNED_BYTE&&(mt=i.RG8UI),rt===i.UNSIGNED_SHORT&&(mt=i.RG16UI),rt===i.UNSIGNED_INT&&(mt=i.RG32UI),rt===i.BYTE&&(mt=i.RG8I),rt===i.SHORT&&(mt=i.RG16I),rt===i.INT&&(mt=i.RG32I)),T===i.RGB_INTEGER&&(rt===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),rt===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),rt===i.UNSIGNED_INT&&(mt=i.RGB32UI),rt===i.BYTE&&(mt=i.RGB8I),rt===i.SHORT&&(mt=i.RGB16I),rt===i.INT&&(mt=i.RGB32I)),T===i.RGBA_INTEGER&&(rt===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),rt===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),rt===i.UNSIGNED_INT&&(mt=i.RGBA32UI),rt===i.BYTE&&(mt=i.RGBA8I),rt===i.SHORT&&(mt=i.RGBA16I),rt===i.INT&&(mt=i.RGBA32I)),T===i.RGB&&rt===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),T===i.RGBA){const Ct=Rt?Zc:Ne.getTransfer(Tt);rt===i.FLOAT&&(mt=i.RGBA32F),rt===i.HALF_FLOAT&&(mt=i.RGBA16F),rt===i.UNSIGNED_BYTE&&(mt=Ct===Ge?i.SRGB8_ALPHA8:i.RGBA8),rt===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),rt===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function w(O,T){let rt;return O?T===null||T===Yr||T===Pl?rt=i.DEPTH24_STENCIL8:T===va?rt=i.DEPTH32F_STENCIL8:T===Ol&&(rt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yr||T===Pl?rt=i.DEPTH_COMPONENT24:T===va?rt=i.DEPTH_COMPONENT32F:T===Ol&&(rt=i.DEPTH_COMPONENT16),rt}function I(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ci&&O.minFilter!==Gi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function P(O){const T=O.target;T.removeEventListener("dispose",P),X(T),T.isVideoTexture&&g.delete(T)}function B(O){const T=O.target;T.removeEventListener("dispose",B),C(T)}function X(O){const T=r.get(O);if(T.__webglInit===void 0)return;const rt=O.source,Tt=_.get(rt);if(Tt){const Rt=Tt[T.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&U(O),Object.keys(Tt).length===0&&_.delete(rt)}r.remove(O)}function U(O){const T=r.get(O);i.deleteTexture(T.__webglTexture);const rt=O.source,Tt=_.get(rt);delete Tt[T.__cacheKey],c.memory.textures--}function C(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Tt=0;Tt<6;Tt++){if(Array.isArray(T.__webglFramebuffer[Tt]))for(let Rt=0;Rt<T.__webglFramebuffer[Tt].length;Rt++)i.deleteFramebuffer(T.__webglFramebuffer[Tt][Rt]);else i.deleteFramebuffer(T.__webglFramebuffer[Tt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let Tt=0;Tt<T.__webglFramebuffer.length;Tt++)i.deleteFramebuffer(T.__webglFramebuffer[Tt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Tt=0;Tt<T.__webglColorRenderbuffer.length;Tt++)T.__webglColorRenderbuffer[Tt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Tt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const rt=O.textures;for(let Tt=0,Rt=rt.length;Tt<Rt;Tt++){const mt=r.get(rt[Tt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),c.memory.textures--),r.remove(rt[Tt])}r.remove(O)}let H=0;function j(){H=0}function et(){const O=H;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),H+=1,O}function pt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function dt(O,T){const rt=r.get(O);if(O.isVideoTexture&&qt(O),O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){const Tt=O.image;if(Tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(rt,O,T);return}}n.bindTexture(i.TEXTURE_2D,rt.__webglTexture,i.TEXTURE0+T)}function F(O,T){const rt=r.get(O);if(O.version>0&&rt.__version!==O.version){J(rt,O,T);return}n.bindTexture(i.TEXTURE_2D_ARRAY,rt.__webglTexture,i.TEXTURE0+T)}function Y(O,T){const rt=r.get(O);if(O.version>0&&rt.__version!==O.version){J(rt,O,T);return}n.bindTexture(i.TEXTURE_3D,rt.__webglTexture,i.TEXTURE0+T)}function W(O,T){const rt=r.get(O);if(O.version>0&&rt.__version!==O.version){St(rt,O,T);return}n.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture,i.TEXTURE0+T)}const ht={[zp]:i.REPEAT,[Vr]:i.CLAMP_TO_EDGE,[Fp]:i.MIRRORED_REPEAT},D={[Ci]:i.NEAREST,[kb]:i.NEAREST_MIPMAP_NEAREST,[ic]:i.NEAREST_MIPMAP_LINEAR,[Gi]:i.LINEAR,[Od]:i.LINEAR_MIPMAP_NEAREST,[kr]:i.LINEAR_MIPMAP_LINEAR},it={[jb]:i.NEVER,[tT]:i.ALWAYS,[Zb]:i.LESS,[Iy]:i.LEQUAL,[Kb]:i.EQUAL,[Jb]:i.GEQUAL,[Qb]:i.GREATER,[$b]:i.NOTEQUAL};function wt(O,T){if(T.type===va&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Gi||T.magFilter===Od||T.magFilter===ic||T.magFilter===kr||T.minFilter===Gi||T.minFilter===Od||T.minFilter===ic||T.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,ht[T.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,ht[T.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,ht[T.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,D[T.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,D[T.minFilter]),T.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,it[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==ic&&T.minFilter!==kr||T.type===va&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function _t(O,T){let rt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",P));const Tt=T.source;let Rt=_.get(Tt);Rt===void 0&&(Rt={},_.set(Tt,Rt));const mt=pt(T);if(mt!==O.__cacheKey){Rt[mt]===void 0&&(Rt[mt]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,rt=!0),Rt[mt].usedTimes++;const Ct=Rt[O.__cacheKey];Ct!==void 0&&(Rt[O.__cacheKey].usedTimes--,Ct.usedTimes===0&&U(T)),O.__cacheKey=mt,O.__webglTexture=Rt[mt].texture}return rt}function J(O,T,rt){let Tt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Tt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Tt=i.TEXTURE_3D);const Rt=_t(O,T),mt=T.source;n.bindTexture(Tt,O.__webglTexture,i.TEXTURE0+rt);const Ct=r.get(mt);if(mt.version!==Ct.__version||Rt===!0){n.activeTexture(i.TEXTURE0+rt);const Lt=Ne.getPrimaries(Ne.workingColorSpace),Pt=T.colorSpace===or?null:Ne.getPrimaries(T.colorSpace),ce=T.colorSpace===or||Lt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Nt=b(T.image,!1,o.maxTextureSize);Nt=de(T,Nt);const Xt=u.convert(T.format,T.colorSpace),$t=u.convert(T.type);let te=N(T.internalFormat,Xt,$t,T.colorSpace,T.isVideoTexture);wt(Tt,T);let Dt;const ee=T.mipmaps,Jt=T.isVideoTexture!==!0,pe=Ct.__version===void 0||Rt===!0,k=mt.dataReady,Ft=I(T,Nt);if(T.isDepthTexture)te=w(T.format===Fl,T.type),pe&&(Jt?n.texStorage2D(i.TEXTURE_2D,1,te,Nt.width,Nt.height):n.texImage2D(i.TEXTURE_2D,0,te,Nt.width,Nt.height,0,Xt,$t,null));else if(T.isDataTexture)if(ee.length>0){Jt&&pe&&n.texStorage2D(i.TEXTURE_2D,Ft,te,ee[0].width,ee[0].height);for(let ft=0,yt=ee.length;ft<yt;ft++)Dt=ee[ft],Jt?k&&n.texSubImage2D(i.TEXTURE_2D,ft,0,0,Dt.width,Dt.height,Xt,$t,Dt.data):n.texImage2D(i.TEXTURE_2D,ft,te,Dt.width,Dt.height,0,Xt,$t,Dt.data);T.generateMipmaps=!1}else Jt?(pe&&n.texStorage2D(i.TEXTURE_2D,Ft,te,Nt.width,Nt.height),k&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt.width,Nt.height,Xt,$t,Nt.data)):n.texImage2D(i.TEXTURE_2D,0,te,Nt.width,Nt.height,0,Xt,$t,Nt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Jt&&pe&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,te,ee[0].width,ee[0].height,Nt.depth);for(let ft=0,yt=ee.length;ft<yt;ft++)if(Dt=ee[ft],T.format!==Ri)if(Xt!==null)if(Jt){if(k)if(T.layerUpdates.size>0){const Bt=hx(Dt.width,Dt.height,T.format,T.type);for(const It of T.layerUpdates){const he=Dt.data.subarray(It*Bt/Dt.data.BYTES_PER_ELEMENT,(It+1)*Bt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,It,Dt.width,Dt.height,1,Xt,he)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Dt.width,Dt.height,Nt.depth,Xt,Dt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,te,Dt.width,Dt.height,Nt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?k&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Dt.width,Dt.height,Nt.depth,Xt,$t,Dt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,ft,te,Dt.width,Dt.height,Nt.depth,0,Xt,$t,Dt.data)}else{Jt&&pe&&n.texStorage2D(i.TEXTURE_2D,Ft,te,ee[0].width,ee[0].height);for(let ft=0,yt=ee.length;ft<yt;ft++)Dt=ee[ft],T.format!==Ri?Xt!==null?Jt?k&&n.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Dt.width,Dt.height,Xt,Dt.data):n.compressedTexImage2D(i.TEXTURE_2D,ft,te,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?k&&n.texSubImage2D(i.TEXTURE_2D,ft,0,0,Dt.width,Dt.height,Xt,$t,Dt.data):n.texImage2D(i.TEXTURE_2D,ft,te,Dt.width,Dt.height,0,Xt,$t,Dt.data)}else if(T.isDataArrayTexture)if(Jt){if(pe&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,te,Nt.width,Nt.height,Nt.depth),k)if(T.layerUpdates.size>0){const ft=hx(Nt.width,Nt.height,T.format,T.type);for(const yt of T.layerUpdates){const Bt=Nt.data.subarray(yt*ft/Nt.data.BYTES_PER_ELEMENT,(yt+1)*ft/Nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,Nt.width,Nt.height,1,Xt,$t,Bt)}T.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Nt.width,Nt.height,Nt.depth,Xt,$t,Nt.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,te,Nt.width,Nt.height,Nt.depth,0,Xt,$t,Nt.data);else if(T.isData3DTexture)Jt?(pe&&n.texStorage3D(i.TEXTURE_3D,Ft,te,Nt.width,Nt.height,Nt.depth),k&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Nt.width,Nt.height,Nt.depth,Xt,$t,Nt.data)):n.texImage3D(i.TEXTURE_3D,0,te,Nt.width,Nt.height,Nt.depth,0,Xt,$t,Nt.data);else if(T.isFramebufferTexture){if(pe)if(Jt)n.texStorage2D(i.TEXTURE_2D,Ft,te,Nt.width,Nt.height);else{let ft=Nt.width,yt=Nt.height;for(let Bt=0;Bt<Ft;Bt++)n.texImage2D(i.TEXTURE_2D,Bt,te,ft,yt,0,Xt,$t,null),ft>>=1,yt>>=1}}else if(ee.length>0){if(Jt&&pe){const ft=Kt(ee[0]);n.texStorage2D(i.TEXTURE_2D,Ft,te,ft.width,ft.height)}for(let ft=0,yt=ee.length;ft<yt;ft++)Dt=ee[ft],Jt?k&&n.texSubImage2D(i.TEXTURE_2D,ft,0,0,Xt,$t,Dt):n.texImage2D(i.TEXTURE_2D,ft,te,Xt,$t,Dt);T.generateMipmaps=!1}else if(Jt){if(pe){const ft=Kt(Nt);n.texStorage2D(i.TEXTURE_2D,Ft,te,ft.width,ft.height)}k&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,$t,Nt)}else n.texImage2D(i.TEXTURE_2D,0,te,Xt,$t,Nt);S(T)&&y(Tt),Ct.__version=mt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function St(O,T,rt){if(T.image.length!==6)return;const Tt=_t(O,T),Rt=T.source;n.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+rt);const mt=r.get(Rt);if(Rt.version!==mt.__version||Tt===!0){n.activeTexture(i.TEXTURE0+rt);const Ct=Ne.getPrimaries(Ne.workingColorSpace),Lt=T.colorSpace===or?null:Ne.getPrimaries(T.colorSpace),Pt=T.colorSpace===or||Ct===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const ce=T.isCompressedTexture||T.image[0].isCompressedTexture,Nt=T.image[0]&&T.image[0].isDataTexture,Xt=[];for(let yt=0;yt<6;yt++)!ce&&!Nt?Xt[yt]=b(T.image[yt],!0,o.maxCubemapSize):Xt[yt]=Nt?T.image[yt].image:T.image[yt],Xt[yt]=de(T,Xt[yt]);const $t=Xt[0],te=u.convert(T.format,T.colorSpace),Dt=u.convert(T.type),ee=N(T.internalFormat,te,Dt,T.colorSpace),Jt=T.isVideoTexture!==!0,pe=mt.__version===void 0||Tt===!0,k=Rt.dataReady;let Ft=I(T,$t);wt(i.TEXTURE_CUBE_MAP,T);let ft;if(ce){Jt&&pe&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ee,$t.width,$t.height);for(let yt=0;yt<6;yt++){ft=Xt[yt].mipmaps;for(let Bt=0;Bt<ft.length;Bt++){const It=ft[Bt];T.format!==Ri?te!==null?Jt?k&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,0,0,It.width,It.height,te,It.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,ee,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?k&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,0,0,It.width,It.height,te,Dt,It.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,ee,It.width,It.height,0,te,Dt,It.data)}}}else{if(ft=T.mipmaps,Jt&&pe){ft.length>0&&Ft++;const yt=Kt(Xt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ee,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Nt){Jt?k&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Xt[yt].width,Xt[yt].height,te,Dt,Xt[yt].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ee,Xt[yt].width,Xt[yt].height,0,te,Dt,Xt[yt].data);for(let Bt=0;Bt<ft.length;Bt++){const he=ft[Bt].image[yt].image;Jt?k&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,0,0,he.width,he.height,te,Dt,he.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,ee,he.width,he.height,0,te,Dt,he.data)}}else{Jt?k&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,te,Dt,Xt[yt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ee,te,Dt,Xt[yt]);for(let Bt=0;Bt<ft.length;Bt++){const It=ft[Bt];Jt?k&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,0,0,te,Dt,It.image[yt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,ee,te,Dt,It.image[yt])}}}S(T)&&y(i.TEXTURE_CUBE_MAP),mt.__version=Rt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function nt(O,T,rt,Tt,Rt,mt){const Ct=u.convert(rt.format,rt.colorSpace),Lt=u.convert(rt.type),Pt=N(rt.internalFormat,Ct,Lt,rt.colorSpace),ce=r.get(T),Nt=r.get(rt);if(Nt.__renderTarget=T,!ce.__hasExternalTextures){const Xt=Math.max(1,T.width>>mt),$t=Math.max(1,T.height>>mt);Rt===i.TEXTURE_3D||Rt===i.TEXTURE_2D_ARRAY?n.texImage3D(Rt,mt,Pt,Xt,$t,T.depth,0,Ct,Lt,null):n.texImage2D(Rt,mt,Pt,Xt,$t,0,Ct,Lt,null)}n.bindFramebuffer(i.FRAMEBUFFER,O),Yt(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,Rt,Nt.__webglTexture,0,Gt(T)):(Rt===i.TEXTURE_2D||Rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Tt,Rt,Nt.__webglTexture,mt),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(O,T,rt){if(i.bindRenderbuffer(i.RENDERBUFFER,O),T.depthBuffer){const Tt=T.depthTexture,Rt=Tt&&Tt.isDepthTexture?Tt.type:null,mt=w(T.stencilBuffer,Rt),Ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=Gt(T);Yt(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,mt,T.width,T.height):rt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,mt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,O)}else{const Tt=T.textures;for(let Rt=0;Rt<Tt.length;Rt++){const mt=Tt[Rt],Ct=u.convert(mt.format,mt.colorSpace),Lt=u.convert(mt.type),Pt=N(mt.internalFormat,Ct,Lt,mt.colorSpace),ce=Gt(T);rt&&Yt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Pt,T.width,T.height):Yt(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Pt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(i.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=r.get(T.depthTexture);Tt.__renderTarget=T,(!Tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const Rt=Tt.__webglTexture,mt=Gt(T);if(T.depthTexture.format===zl)Yt(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Rt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Rt,0);else if(T.depthTexture.format===Fl)Yt(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Rt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Rt,0);else throw new Error("Unknown depthTexture format")}function vt(O){const T=r.get(O),rt=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const Tt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Tt){const Rt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Tt.removeEventListener("dispose",Rt)};Tt.addEventListener("dispose",Rt),T.__depthDisposeCallback=Rt}T.__boundDepthTexture=Tt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");Ut(T.__webglFramebuffer,O)}else if(rt){T.__webglDepthbuffer=[];for(let Tt=0;Tt<6;Tt++)if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Tt]),T.__webglDepthbuffer[Tt]===void 0)T.__webglDepthbuffer[Tt]=i.createRenderbuffer(),Et(T.__webglDepthbuffer[Tt],O,!1);else{const Rt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[Tt];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,mt)}}else if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Et(T.__webglDepthbuffer,O,!1);else{const Tt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,Rt)}n.bindFramebuffer(i.FRAMEBUFFER,null)}function st(O,T,rt){const Tt=r.get(O);T!==void 0&&nt(Tt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),rt!==void 0&&vt(O)}function bt(O){const T=O.texture,rt=r.get(O),Tt=r.get(T);O.addEventListener("dispose",B);const Rt=O.textures,mt=O.isWebGLCubeRenderTarget===!0,Ct=Rt.length>1;if(Ct||(Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture()),Tt.__version=T.version,c.memory.textures++),mt){rt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0){rt.__webglFramebuffer[Lt]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)rt.__webglFramebuffer[Lt][Pt]=i.createFramebuffer()}else rt.__webglFramebuffer[Lt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)rt.__webglFramebuffer[Lt]=i.createFramebuffer()}else rt.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let Lt=0,Pt=Rt.length;Lt<Pt;Lt++){const ce=r.get(Rt[Lt]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),c.memory.textures++)}if(O.samples>0&&Yt(O)===!1){rt.__webglMultisampledFramebuffer=i.createFramebuffer(),rt.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Rt.length;Lt++){const Pt=Rt[Lt];rt.__webglColorRenderbuffer[Lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,rt.__webglColorRenderbuffer[Lt]);const ce=u.convert(Pt.format,Pt.colorSpace),Nt=u.convert(Pt.type),Xt=N(Pt.internalFormat,ce,Nt,Pt.colorSpace,O.isXRRenderTarget===!0),$t=Gt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Xt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[Lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(rt.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(rt.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){n.bindTexture(i.TEXTURE_CUBE_MAP,Tt.__webglTexture),wt(i.TEXTURE_CUBE_MAP,T);for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)nt(rt.__webglFramebuffer[Lt][Pt],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Pt);else nt(rt.__webglFramebuffer[Lt],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);S(T)&&y(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ct){for(let Lt=0,Pt=Rt.length;Lt<Pt;Lt++){const ce=Rt[Lt],Nt=r.get(ce);n.bindTexture(i.TEXTURE_2D,Nt.__webglTexture),wt(i.TEXTURE_2D,ce),nt(rt.__webglFramebuffer,O,ce,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,0),S(ce)&&y(i.TEXTURE_2D)}n.unbindTexture()}else{let Lt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Lt,Tt.__webglTexture),wt(Lt,T),T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)nt(rt.__webglFramebuffer[Pt],O,T,i.COLOR_ATTACHMENT0,Lt,Pt);else nt(rt.__webglFramebuffer,O,T,i.COLOR_ATTACHMENT0,Lt,0);S(T)&&y(Lt),n.unbindTexture()}O.depthBuffer&&vt(O)}function Q(O){const T=O.textures;for(let rt=0,Tt=T.length;rt<Tt;rt++){const Rt=T[rt];if(S(Rt)){const mt=L(O),Ct=r.get(Rt).__webglTexture;n.bindTexture(mt,Ct),y(mt),n.unbindTexture()}}}const zt=[],z=[];function Zt(O){if(O.samples>0){if(Yt(O)===!1){const T=O.textures,rt=O.width,Tt=O.height;let Rt=i.COLOR_BUFFER_BIT;const mt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=r.get(O),Lt=T.length>1;if(Lt)for(let Pt=0;Pt<T.length;Pt++)n.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Rt|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Rt|=i.STENCIL_BUFFER_BIT)),Lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);const ce=r.get(T[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,rt,Tt,0,0,rt,Tt,Rt,i.NEAREST),p===!0&&(zt.length=0,z.length=0,zt.push(i.COLOR_ATTACHMENT0+Pt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(zt.push(mt),z.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Lt)for(let Pt=0;Pt<T.length;Pt++){n.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);const ce=r.get(T[Pt]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,ce,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const T=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Gt(O){return Math.min(o.maxSamples,O.samples)}function Yt(O){const T=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qt(O){const T=c.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function de(O,T){const rt=O.colorSpace,Tt=O.format,Rt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||rt!==co&&rt!==or&&(Ne.getTransfer(rt)===Ge?(Tt!==Ri||Rt!==Ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),T}function Kt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=j,this.setTexture2D=dt,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=st,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Yt}function d2(i,t){function n(r,o=or){let u;const c=Ne.getTransfer(o);if(r===Ea)return i.UNSIGNED_BYTE;if(r===Cm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Dm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Uy)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Cy)return i.BYTE;if(r===Dy)return i.SHORT;if(r===Ol)return i.UNSIGNED_SHORT;if(r===Rm)return i.INT;if(r===Yr)return i.UNSIGNED_INT;if(r===va)return i.FLOAT;if(r===Gl)return i.HALF_FLOAT;if(r===Ny)return i.ALPHA;if(r===Ly)return i.RGB;if(r===Ri)return i.RGBA;if(r===Oy)return i.LUMINANCE;if(r===Py)return i.LUMINANCE_ALPHA;if(r===zl)return i.DEPTH_COMPONENT;if(r===Fl)return i.DEPTH_STENCIL;if(r===zy)return i.RED;if(r===Um)return i.RED_INTEGER;if(r===Fy)return i.RG;if(r===Nm)return i.RG_INTEGER;if(r===Lm)return i.RGBA_INTEGER;if(r===zc||r===Fc||r===Bc||r===Ic)if(c===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===zc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===zc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ic)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bp||r===Ip||r===Hp||r===Gp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Bp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ip)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vp||r===kp||r===Xp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Vp||r===kp)return c===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Xp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wp||r===Yp||r===qp||r===jp||r===Zp||r===Kp||r===Qp||r===$p||r===Jp||r===tm||r===em||r===nm||r===im||r===am)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Wp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$p)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tm)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===em)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nm)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===im)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===am)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hc||r===rm||r===sm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Hc)return c===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===By||r===om||r===lm||r===um)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Hc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===om)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===um)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pl?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:n}}const p2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const o=new Gn,u=t.properties.get(o);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new hr({vertexShader:p2,fragmentShader:m2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new yf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _2 extends $r{constructor(t,n){super();const r=this;let o=null,u=1,c=null,h="local-floor",p=1,d=null,g=null,v=null,_=null,x=null,E=null;const b=new g2,S=n.getContextAttributes();let y=null,L=null;const N=[],w=[],I=new fe;let P=null;const B=new ri;B.viewport=new on;const X=new ri;X.viewport=new on;const U=[B,X],C=new FT;let H=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let St=N[J];return St===void 0&&(St=new ep,N[J]=St),St.getTargetRaySpace()},this.getControllerGrip=function(J){let St=N[J];return St===void 0&&(St=new ep,N[J]=St),St.getGripSpace()},this.getHand=function(J){let St=N[J];return St===void 0&&(St=new ep,N[J]=St),St.getHandSpace()};function et(J){const St=w.indexOf(J.inputSource);if(St===-1)return;const nt=N[St];nt!==void 0&&(nt.update(J.inputSource,J.frame,d||c),nt.dispatchEvent({type:J.type,data:J.inputSource}))}function pt(){o.removeEventListener("select",et),o.removeEventListener("selectstart",et),o.removeEventListener("selectend",et),o.removeEventListener("squeeze",et),o.removeEventListener("squeezestart",et),o.removeEventListener("squeezeend",et),o.removeEventListener("end",pt),o.removeEventListener("inputsourceschange",dt);for(let J=0;J<N.length;J++){const St=w[J];St!==null&&(w[J]=null,N[J].disconnect(St))}H=null,j=null,b.reset(),t.setRenderTarget(y),x=null,_=null,v=null,o=null,L=null,_t.stop(),r.isPresenting=!1,t.setPixelRatio(P),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(y=t.getRenderTarget(),o.addEventListener("select",et),o.addEventListener("selectstart",et),o.addEventListener("selectend",et),o.addEventListener("squeeze",et),o.addEventListener("squeezestart",et),o.addEventListener("squeezeend",et),o.addEventListener("end",pt),o.addEventListener("inputsourceschange",dt),S.xrCompatible!==!0&&await n.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Et=null,Ut=null;S.depth&&(Ut=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,nt=S.stencil?Fl:zl,Et=S.stencil?Pl:Yr);const vt={colorFormat:n.RGBA8,depthFormat:Ut,scaleFactor:u};v=new XRWebGLBinding(o,n),_=v.createProjectionLayer(vt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),L=new qr(_.textureWidth,_.textureHeight,{format:Ri,type:Ea,depthTexture:new Jy(_.textureWidth,_.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const nt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(o,n,nt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new qr(x.framebufferWidth,x.framebufferHeight,{format:Ri,type:Ea,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(h),_t.setContext(o),_t.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function dt(J){for(let St=0;St<J.removed.length;St++){const nt=J.removed[St],Et=w.indexOf(nt);Et>=0&&(w[Et]=null,N[Et].disconnect(nt))}for(let St=0;St<J.added.length;St++){const nt=J.added[St];let Et=w.indexOf(nt);if(Et===-1){for(let vt=0;vt<N.length;vt++)if(vt>=w.length){w.push(nt),Et=vt;break}else if(w[vt]===null){w[vt]=nt,Et=vt;break}if(Et===-1)break}const Ut=N[Et];Ut&&Ut.connect(nt)}}const F=new $,Y=new $;function W(J,St,nt){F.setFromMatrixPosition(St.matrixWorld),Y.setFromMatrixPosition(nt.matrixWorld);const Et=F.distanceTo(Y),Ut=St.projectionMatrix.elements,vt=nt.projectionMatrix.elements,st=Ut[14]/(Ut[10]-1),bt=Ut[14]/(Ut[10]+1),Q=(Ut[9]+1)/Ut[5],zt=(Ut[9]-1)/Ut[5],z=(Ut[8]-1)/Ut[0],Zt=(vt[8]+1)/vt[0],Gt=st*z,Yt=st*Zt,qt=Et/(-z+Zt),de=qt*-z;if(St.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(de),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ut[10]===-1)J.projectionMatrix.copy(St.projectionMatrix),J.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const Kt=st+qt,O=bt+qt,T=Gt-de,rt=Yt+(Et-de),Tt=Q*bt/O*Kt,Rt=zt*bt/O*Kt;J.projectionMatrix.makePerspective(T,rt,Tt,Rt,Kt,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ht(J,St){St===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(St.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let St=J.near,nt=J.far;b.texture!==null&&(b.depthNear>0&&(St=b.depthNear),b.depthFar>0&&(nt=b.depthFar)),C.near=X.near=B.near=St,C.far=X.far=B.far=nt,(H!==C.near||j!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,j=C.far),B.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,C.layers.mask=B.layers.mask|X.layers.mask;const Et=J.parent,Ut=C.cameras;ht(C,Et);for(let vt=0;vt<Ut.length;vt++)ht(Ut[vt],Et);Ut.length===2?W(C,B,X):C.projectionMatrix.copy(B.projectionMatrix),D(J,C,Et)};function D(J,St,nt){nt===null?J.matrix.copy(St.matrixWorld):(J.matrix.copy(nt.matrixWorld),J.matrix.invert(),J.matrix.multiply(St.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(St.projectionMatrix),J.projectionMatrixInverse.copy(St.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fm*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(J){p=J,_!==null&&(_.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let it=null;function wt(J,St){if(g=St.getViewerPose(d||c),E=St,g!==null){const nt=g.views;x!==null&&(t.setRenderTargetFramebuffer(L,x.framebuffer),t.setRenderTarget(L));let Et=!1;nt.length!==C.cameras.length&&(C.cameras.length=0,Et=!0);for(let st=0;st<nt.length;st++){const bt=nt[st];let Q=null;if(x!==null)Q=x.getViewport(bt);else{const z=v.getViewSubImage(_,bt);Q=z.viewport,st===0&&(t.setRenderTargetTextures(L,z.colorTexture,z.depthStencilTexture),t.setRenderTarget(L))}let zt=U[st];zt===void 0&&(zt=new ri,zt.layers.enable(st),zt.viewport=new on,U[st]=zt),zt.matrix.fromArray(bt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(bt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Q.x,Q.y,Q.width,Q.height),st===0&&(C.matrix.copy(zt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Et===!0&&C.cameras.push(zt)}const Ut=o.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const st=v.getDepthInformation(nt[0]);st&&st.isValid&&st.texture&&b.init(t,st,o.renderState)}}for(let nt=0;nt<N.length;nt++){const Et=w[nt],Ut=N[nt];Et!==null&&Ut!==void 0&&Ut.update(Et,St,d||c)}it&&it(J,St),St.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:St}),E=null}const _t=new eS;_t.setAnimationLoop(wt),this.setAnimationLoop=function(J){it=J},this.dispose=function(){}}}const Fr=new ba,v2=new Je;function x2(i,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Wy(i)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,L,N,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(S,y):y.isMeshToonMaterial?(u(S,y),v(S,y)):y.isMeshPhongMaterial?(u(S,y),g(S,y)):y.isMeshStandardMaterial?(u(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(u(S,y),E(S,y)):y.isMeshDepthMaterial?u(S,y):y.isMeshDistanceMaterial?(u(S,y),b(S,y)):y.isMeshNormalMaterial?u(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,L,N):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Zn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Zn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=t.get(y),N=L.envMap,w=L.envMapRotation;N&&(S.envMap.value=N,Fr.copy(w),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),S.envMapRotation.value.setFromMatrix4(v2.makeRotationFromEuler(Fr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,L,N){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=N*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Zn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function b(S,y){const L=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function y2(i,t,n,r){let o={},u={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,N){const w=N.program;r.uniformBlockBinding(L,w)}function d(L,N){let w=o[L.id];w===void 0&&(E(L),w=g(L),o[L.id]=w,L.addEventListener("dispose",S));const I=N.program;r.updateUBOMapping(L,I);const P=t.render.frame;u[L.id]!==P&&(_(L),u[L.id]=P)}function g(L){const N=v();L.__bindingPointIndex=N;const w=i.createBuffer(),I=L.__size,P=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,w),w}function v(){for(let L=0;L<h;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const N=o[L.id],w=L.uniforms,I=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let P=0,B=w.length;P<B;P++){const X=Array.isArray(w[P])?w[P]:[w[P]];for(let U=0,C=X.length;U<C;U++){const H=X[U];if(x(H,P,U,I)===!0){const j=H.__offset,et=Array.isArray(H.value)?H.value:[H.value];let pt=0;for(let dt=0;dt<et.length;dt++){const F=et[dt],Y=b(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,j+pt,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,pt),pt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(L,N,w,I){const P=L.value,B=N+"_"+w;if(I[B]===void 0)return typeof P=="number"||typeof P=="boolean"?I[B]=P:I[B]=P.clone(),!0;{const X=I[B];if(typeof P=="number"||typeof P=="boolean"){if(X!==P)return I[B]=P,!0}else if(X.equals(P)===!1)return X.copy(P),!0}return!1}function E(L){const N=L.uniforms;let w=0;const I=16;for(let B=0,X=N.length;B<X;B++){const U=Array.isArray(N[B])?N[B]:[N[B]];for(let C=0,H=U.length;C<H;C++){const j=U[C],et=Array.isArray(j.value)?j.value:[j.value];for(let pt=0,dt=et.length;pt<dt;pt++){const F=et[pt],Y=b(F),W=w%I,ht=W%Y.boundary,D=W+ht;w+=ht,D!==0&&I-D<Y.storage&&(w+=I-D),j.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=Y.storage}}}const P=w%I;return P>0&&(w+=I-P),L.__size=w,L.__cache={},this}function b(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),N}function S(L){const N=L.target;N.removeEventListener("dispose",S);const w=c.indexOf(N.__bindingPointIndex);c.splice(w,1),i.deleteBuffer(o[N.id]),delete o[N.id],delete u[N.id]}function y(){for(const L in o)i.deleteBuffer(o[L]);c=[],o={},u={}}return{bind:p,update:d,dispose:y}}class sS{constructor(t={}){const{canvas:n=iT(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,y=null;const L=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=gi;let P=0,B=0,X=null,U=-1,C=null;const H=new on,j=new on;let et=null;const pt=new be(0);let dt=0,F=n.width,Y=n.height,W=1,ht=null,D=null;const it=new on(0,0,F,Y),wt=new on(0,0,F,Y);let _t=!1;const J=new Qy;let St=!1,nt=!1;const Et=new Je,Ut=new Je,vt=new $,st=new on,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function zt(){return X===null?W:1}let z=r;function Zt(R,Z){return n.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wm}`),n.addEventListener("webglcontextlost",yt,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",It,!1),z===null){const Z="webgl2";if(z=Zt(Z,R),z===null)throw Zt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Gt,Yt,qt,de,Kt,O,T,rt,Tt,Rt,mt,Ct,Lt,Pt,ce,Nt,Xt,$t,te,Dt,ee,Jt,pe,k;function Ft(){Gt=new Uw(z),Gt.init(),Jt=new d2(z,Gt),Yt=new bw(z,Gt,t,Jt),qt=new f2(z,Gt),Yt.reverseDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),de=new Ow(z),Kt=new $R,O=new h2(z,Gt,qt,Kt,Yt,Jt,de),T=new Aw(w),rt=new Dw(w),Tt=new HT(z),pe=new Mw(z,Tt),Rt=new Nw(z,Tt,de,pe),mt=new zw(z,Rt,Tt,de),te=new Pw(z,Yt,O),Nt=new Tw(Kt),Ct=new QR(w,T,rt,Gt,Yt,pe,Nt),Lt=new x2(w,Kt),Pt=new t2,ce=new s2(Gt),$t=new Sw(w,T,rt,qt,mt,x,p),Xt=new u2(w,mt,Yt),k=new y2(z,de,Yt,qt),Dt=new Ew(z,Gt,de),ee=new Lw(z,Gt,de),de.programs=Ct.programs,w.capabilities=Yt,w.extensions=Gt,w.properties=Kt,w.renderLists=Pt,w.shadowMap=Xt,w.state=qt,w.info=de}Ft();const ft=new _2(w,z);this.xr=ft,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(F,Y,!1))},this.getSize=function(R){return R.set(F,Y)},this.setSize=function(R,Z,ut=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,Y=Z,n.width=Math.floor(R*W),n.height=Math.floor(Z*W),ut===!0&&(n.style.width=R+"px",n.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(F*W,Y*W).floor()},this.setDrawingBufferSize=function(R,Z,ut){F=R,Y=Z,W=ut,n.width=Math.floor(R*ut),n.height=Math.floor(Z*ut),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,Z,ut,ct){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,Z,ut,ct),qt.viewport(H.copy(it).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(wt)},this.setScissor=function(R,Z,ut,ct){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,Z,ut,ct),qt.scissor(j.copy(wt).multiplyScalar(W).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(R){qt.setScissorTest(_t=R)},this.setOpaqueSort=function(R){ht=R},this.setTransparentSort=function(R){D=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ut=!0){let ct=0;if(R){let K=!1;if(X!==null){const Ot=X.texture.format;K=Ot===Lm||Ot===Nm||Ot===Um}if(K){const Ot=X.texture.type,Ht=Ot===Ea||Ot===Yr||Ot===Ol||Ot===Pl||Ot===Cm||Ot===Dm,Vt=$t.getClearColor(),jt=$t.getClearAlpha(),le=Vt.r,ae=Vt.g,ie=Vt.b;Ht?(E[0]=le,E[1]=ae,E[2]=ie,E[3]=jt,z.clearBufferuiv(z.COLOR,0,E)):(b[0]=le,b[1]=ae,b[2]=ie,b[3]=jt,z.clearBufferiv(z.COLOR,0,b))}else ct|=z.COLOR_BUFFER_BIT}Z&&(ct|=z.DEPTH_BUFFER_BIT),ut&&(ct|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",yt,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",It,!1),$t.dispose(),Pt.dispose(),ce.dispose(),Kt.dispose(),T.dispose(),rt.dispose(),mt.dispose(),pe.dispose(),k.dispose(),Ct.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ke),ft.removeEventListener("sessionend",hn),Dn.stop()};function yt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=de.autoReset,Z=Xt.enabled,ut=Xt.autoUpdate,ct=Xt.needsUpdate,K=Xt.type;Ft(),de.autoReset=R,Xt.enabled=Z,Xt.autoUpdate=ut,Xt.needsUpdate=ct,Xt.type=K}function It(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function he(R){const Z=R.target;Z.removeEventListener("dispose",he),Fe(Z)}function Fe(R){tn(R),Kt.remove(R)}function tn(R){const Z=Kt.get(R).programs;Z!==void 0&&(Z.forEach(function(ut){Ct.releaseProgram(ut)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ut,ct,K,Ot){Z===null&&(Z=bt);const Ht=K.isMesh&&K.matrixWorld.determinant()<0,Vt=mr(R,Z,ut,ct,K);qt.setMaterial(ct,Ht);let jt=ut.index,le=1;if(ct.wireframe===!0){if(jt=Rt.getWireframeAttribute(ut),jt===void 0)return;le=2}const ae=ut.drawRange,ie=ut.attributes.position;let ye=ae.start*le,De=(ae.start+ae.count)*le;Ot!==null&&(ye=Math.max(ye,Ot.start*le),De=Math.min(De,(Ot.start+Ot.count)*le)),jt!==null?(ye=Math.max(ye,0),De=Math.min(De,jt.count)):ie!=null&&(ye=Math.max(ye,0),De=Math.min(De,ie.count));const Qe=De-ye;if(Qe<0||Qe===1/0)return;pe.setup(K,ct,Vt,ut,jt);let Ae,we=Dt;if(jt!==null&&(Ae=Tt.get(jt),we=ee,we.setIndex(Ae)),K.isMesh)ct.wireframe===!0?(qt.setLineWidth(ct.wireframeLinewidth*zt()),we.setMode(z.LINES)):we.setMode(z.TRIANGLES);else if(K.isLine){let re=ct.linewidth;re===void 0&&(re=1),qt.setLineWidth(re*zt()),K.isLineSegments?we.setMode(z.LINES):K.isLineLoop?we.setMode(z.LINE_LOOP):we.setMode(z.LINE_STRIP)}else K.isPoints?we.setMode(z.POINTS):K.isSprite&&we.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Vc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))we.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const re=K._multiDrawStarts,en=K._multiDrawCounts,Ce=K._multiDrawCount,Un=jt?Tt.get(jt).bytesPerElement:1,Ua=Kt.get(ct).currentProgram.getUniforms();for(let Ye=0;Ye<Ce;Ye++)Ua.setValue(z,"_gl_DrawID",Ye),we.render(re[Ye]/Un,en[Ye])}else if(K.isInstancedMesh)we.renderInstances(ye,Qe,K.count);else if(ut.isInstancedBufferGeometry){const re=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,en=Math.min(ut.instanceCount,re);we.renderInstances(ye,Qe,en)}else we.render(ye,Qe)};function Te(R,Z,ut){R.transparent===!0&&R.side===_a&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Ca(R,Z,ut),R.side=fr,R.needsUpdate=!0,Ca(R,Z,ut),R.side=_a):Ca(R,Z,ut)}this.compile=function(R,Z,ut=null){ut===null&&(ut=R),y=ce.get(ut),y.init(Z),N.push(y),ut.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),R!==ut&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const ct=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ot=K.material;if(Ot)if(Array.isArray(Ot))for(let Ht=0;Ht<Ot.length;Ht++){const Vt=Ot[Ht];Te(Vt,ut,K),ct.add(Vt)}else Te(Ot,ut,K),ct.add(Ot)}),y=N.pop(),ct},this.compileAsync=function(R,Z,ut=null){const ct=this.compile(R,Z,ut);return new Promise(K=>{function Ot(){if(ct.forEach(function(Ht){Kt.get(Ht).currentProgram.isReady()&&ct.delete(Ht)}),ct.size===0){K(R);return}setTimeout(Ot,10)}Gt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Fn=null;function Ze(R){Fn&&Fn(R)}function Ke(){Dn.stop()}function hn(){Dn.start()}const Dn=new eS;Dn.setAnimationLoop(Ze),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(R){Fn=R,ft.setAnimationLoop(R),R===null?Dn.stop():Dn.start()},ft.addEventListener("sessionstart",Ke),ft.addEventListener("sessionend",hn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Z),Z=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Z,X),y=ce.get(R,N.length),y.init(Z),N.push(y),Ut.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),J.setFromProjectionMatrix(Ut),nt=this.localClippingEnabled,St=Nt.init(this.clippingPlanes,nt),S=Pt.get(R,L.length),S.init(),L.push(S),ft.enabled===!0&&ft.isPresenting===!0){const Ot=w.xr.getDepthSensingMesh();Ot!==null&&Xi(Ot,Z,-1/0,w.sortObjects)}Xi(R,Z,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(ht,D),Q=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Q&&$t.addToRenderList(S,R),this.info.render.frame++,St===!0&&Nt.beginShadows();const ut=y.state.shadowsArray;Xt.render(ut,R,Z),St===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=S.opaque,K=S.transmissive;if(y.setupLights(),Z.isArrayCamera){const Ot=Z.cameras;if(K.length>0)for(let Ht=0,Vt=Ot.length;Ht<Vt;Ht++){const jt=Ot[Ht];jl(ct,K,R,jt)}Q&&$t.render(R);for(let Ht=0,Vt=Ot.length;Ht<Vt;Ht++){const jt=Ot[Ht];dr(S,R,jt,jt.viewport)}}else K.length>0&&jl(ct,K,R,Z),Q&&$t.render(R),dr(S,R,Z);X!==null&&B===0&&(O.updateMultisampleRenderTarget(X),O.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(w,R,Z),pe.resetDefaultState(),U=-1,C=null,N.pop(),N.length>0?(y=N[N.length-1],St===!0&&Nt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Xi(R,Z,ut,ct){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ut=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){ct&&st.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const Ht=mt.update(R),Vt=R.material;Vt.visible&&S.push(R,Ht,Vt,ut,st.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ht=mt.update(R),Vt=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),st.copy(R.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),st.copy(Ht.boundingSphere.center)),st.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Vt)){const jt=Ht.groups;for(let le=0,ae=jt.length;le<ae;le++){const ie=jt[le],ye=Vt[ie.materialIndex];ye&&ye.visible&&S.push(R,Ht,ye,ut,st.z,ie)}}else Vt.visible&&S.push(R,Ht,Vt,ut,st.z,null)}}const Ot=R.children;for(let Ht=0,Vt=Ot.length;Ht<Vt;Ht++)Xi(Ot[Ht],Z,ut,ct)}function dr(R,Z,ut,ct){const K=R.opaque,Ot=R.transmissive,Ht=R.transparent;y.setupLightsView(ut),St===!0&&Nt.setGlobalState(w.clippingPlanes,ut),ct&&qt.viewport(H.copy(ct)),K.length>0&&pr(K,Z,ut),Ot.length>0&&pr(Ot,Z,ut),Ht.length>0&&pr(Ht,Z,ut),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function jl(R,Z,ut,ct){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ct.id]===void 0&&(y.state.transmissionRenderTarget[ct.id]=new qr(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Gl:Ea,minFilter:kr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Ot=y.state.transmissionRenderTarget[ct.id],Ht=ct.viewport||H;Ot.setSize(Ht.z*w.transmissionResolutionScale,Ht.w*w.transmissionResolutionScale);const Vt=w.getRenderTarget();w.setRenderTarget(Ot),w.getClearColor(pt),dt=w.getClearAlpha(),dt<1&&w.setClearColor(16777215,.5),w.clear(),Q&&$t.render(ut);const jt=w.toneMapping;w.toneMapping=ur;const le=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),y.setupLightsView(ct),St===!0&&Nt.setGlobalState(w.clippingPlanes,ct),pr(R,ut,ct),O.updateMultisampleRenderTarget(Ot),O.updateRenderTargetMipmap(Ot),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let ie=0,ye=Z.length;ie<ye;ie++){const De=Z[ie],Qe=De.object,Ae=De.geometry,we=De.material,re=De.group;if(we.side===_a&&Qe.layers.test(ct.layers)){const en=we.side;we.side=Zn,we.needsUpdate=!0,Ra(Qe,ut,ct,Ae,we,re),we.side=en,we.needsUpdate=!0,ae=!0}}ae===!0&&(O.updateMultisampleRenderTarget(Ot),O.updateRenderTargetMipmap(Ot))}w.setRenderTarget(Vt),w.setClearColor(pt,dt),le!==void 0&&(ct.viewport=le),w.toneMapping=jt}function pr(R,Z,ut){const ct=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Ot=R.length;K<Ot;K++){const Ht=R[K],Vt=Ht.object,jt=Ht.geometry,le=Ht.group;let ae=Ht.material;ae.allowOverride===!0&&ct!==null&&(ae=ct),Vt.layers.test(ut.layers)&&Ra(Vt,Z,ut,jt,ae,le)}}function Ra(R,Z,ut,ct,K,Ot){R.onBeforeRender(w,Z,ut,ct,K,Ot),R.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,Z,ut,ct,R,Ot),K.transparent===!0&&K.side===_a&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,w.renderBufferDirect(ut,Z,ct,K,R,Ot),K.side=fr,K.needsUpdate=!0,w.renderBufferDirect(ut,Z,ct,K,R,Ot),K.side=_a):w.renderBufferDirect(ut,Z,ct,K,R,Ot),R.onAfterRender(w,Z,ut,ct,K,Ot)}function Ca(R,Z,ut){Z.isScene!==!0&&(Z=bt);const ct=Kt.get(R),K=y.state.lights,Ot=y.state.shadowsArray,Ht=K.state.version,Vt=Ct.getParameters(R,K.state,Ot,Z,ut),jt=Ct.getProgramCacheKey(Vt);let le=ct.programs;ct.environment=R.isMeshStandardMaterial?Z.environment:null,ct.fog=Z.fog,ct.envMap=(R.isMeshStandardMaterial?rt:T).get(R.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,le===void 0&&(R.addEventListener("dispose",he),le=new Map,ct.programs=le);let ae=le.get(jt);if(ae!==void 0){if(ct.currentProgram===ae&&ct.lightsStateVersion===Ht)return Yi(R,Vt),ae}else Vt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Vt,w),ae=Ct.acquireProgram(Vt,jt),le.set(jt,ae),ct.uniforms=Vt.uniforms;const ie=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ie.clippingPlanes=Nt.uniform),Yi(R,Vt),ct.needsLights=ln(R),ct.lightsStateVersion=Ht,ct.needsLights&&(ie.ambientLightColor.value=K.state.ambient,ie.lightProbe.value=K.state.probe,ie.directionalLights.value=K.state.directional,ie.directionalLightShadows.value=K.state.directionalShadow,ie.spotLights.value=K.state.spot,ie.spotLightShadows.value=K.state.spotShadow,ie.rectAreaLights.value=K.state.rectArea,ie.ltc_1.value=K.state.rectAreaLTC1,ie.ltc_2.value=K.state.rectAreaLTC2,ie.pointLights.value=K.state.point,ie.pointLightShadows.value=K.state.pointShadow,ie.hemisphereLights.value=K.state.hemi,ie.directionalShadowMap.value=K.state.directionalShadowMap,ie.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ie.spotShadowMap.value=K.state.spotShadowMap,ie.spotLightMatrix.value=K.state.spotLightMatrix,ie.spotLightMap.value=K.state.spotLightMap,ie.pointShadowMap.value=K.state.pointShadowMap,ie.pointShadowMatrix.value=K.state.pointShadowMatrix),ct.currentProgram=ae,ct.uniformsList=null,ae}function Wi(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=kc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Yi(R,Z){const ut=Kt.get(R);ut.outputColorSpace=Z.outputColorSpace,ut.batching=Z.batching,ut.batchingColor=Z.batchingColor,ut.instancing=Z.instancing,ut.instancingColor=Z.instancingColor,ut.instancingMorph=Z.instancingMorph,ut.skinning=Z.skinning,ut.morphTargets=Z.morphTargets,ut.morphNormals=Z.morphNormals,ut.morphColors=Z.morphColors,ut.morphTargetsCount=Z.morphTargetsCount,ut.numClippingPlanes=Z.numClippingPlanes,ut.numIntersection=Z.numClipIntersection,ut.vertexAlphas=Z.vertexAlphas,ut.vertexTangents=Z.vertexTangents,ut.toneMapping=Z.toneMapping}function mr(R,Z,ut,ct,K){Z.isScene!==!0&&(Z=bt),O.resetTextureUnits();const Ot=Z.fog,Ht=ct.isMeshStandardMaterial?Z.environment:null,Vt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:co,jt=(ct.isMeshStandardMaterial?rt:T).get(ct.envMap||Ht),le=ct.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ae=!!ut.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),ie=!!ut.morphAttributes.position,ye=!!ut.morphAttributes.normal,De=!!ut.morphAttributes.color;let Qe=ur;ct.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Ae=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,we=Ae!==void 0?Ae.length:0,re=Kt.get(ct),en=y.state.lights;if(St===!0&&(nt===!0||R!==C)){const yn=R===C&&ct.id===U;Nt.setState(ct,R,yn)}let Ce=!1;ct.version===re.__version?(re.needsLights&&re.lightsStateVersion!==en.state.version||re.outputColorSpace!==Vt||K.isBatchedMesh&&re.batching===!1||!K.isBatchedMesh&&re.batching===!0||K.isBatchedMesh&&re.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&re.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&re.instancing===!1||!K.isInstancedMesh&&re.instancing===!0||K.isSkinnedMesh&&re.skinning===!1||!K.isSkinnedMesh&&re.skinning===!0||K.isInstancedMesh&&re.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&re.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&re.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&re.instancingMorph===!1&&K.morphTexture!==null||re.envMap!==jt||ct.fog===!0&&re.fog!==Ot||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Nt.numPlanes||re.numIntersection!==Nt.numIntersection)||re.vertexAlphas!==le||re.vertexTangents!==ae||re.morphTargets!==ie||re.morphNormals!==ye||re.morphColors!==De||re.toneMapping!==Qe||re.morphTargetsCount!==we)&&(Ce=!0):(Ce=!0,re.__version=ct.version);let Un=re.currentProgram;Ce===!0&&(Un=Ca(ct,Z,K));let Ua=!1,Ye=!1,ji=!1;const Xe=Un.getUniforms(),Nn=re.uniforms;if(qt.useProgram(Un.program)&&(Ua=!0,Ye=!0,ji=!0),ct.id!==U&&(U=ct.id,Ye=!0),Ua||C!==R){qt.buffers.depth.getReversed()?(Et.copy(R.projectionMatrix),rT(Et),sT(Et),Xe.setValue(z,"projectionMatrix",Et)):Xe.setValue(z,"projectionMatrix",R.projectionMatrix),Xe.setValue(z,"viewMatrix",R.matrixWorldInverse);const An=Xe.map.cameraPosition;An!==void 0&&An.setValue(z,vt.setFromMatrixPosition(R.matrixWorld)),Yt.logarithmicDepthBuffer&&Xe.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Xe.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Ye=!0,ji=!0)}if(K.isSkinnedMesh){Xe.setOptional(z,K,"bindMatrix"),Xe.setOptional(z,K,"bindMatrixInverse");const yn=K.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Xe.setValue(z,"boneTexture",yn.boneTexture,O))}K.isBatchedMesh&&(Xe.setOptional(z,K,"batchingTexture"),Xe.setValue(z,"batchingTexture",K._matricesTexture,O),Xe.setOptional(z,K,"batchingIdTexture"),Xe.setValue(z,"batchingIdTexture",K._indirectTexture,O),Xe.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Xe.setValue(z,"batchingColorTexture",K._colorsTexture,O));const dn=ut.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&te.update(K,ut,Un),(Ye||re.receiveShadow!==K.receiveShadow)&&(re.receiveShadow=K.receiveShadow,Xe.setValue(z,"receiveShadow",K.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Nn.envMap.value=jt,Nn.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Z.environment!==null&&(Nn.envMapIntensity.value=Z.environmentIntensity),Ye&&(Xe.setValue(z,"toneMappingExposure",w.toneMappingExposure),re.needsLights&&Da(Nn,ji),Ot&&ct.fog===!0&&Lt.refreshFogUniforms(Nn,Ot),Lt.refreshMaterialUniforms(Nn,ct,W,Y,y.state.transmissionRenderTarget[R.id]),kc.upload(z,Wi(re),Nn,O)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(kc.upload(z,Wi(re),Nn,O),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Xe.setValue(z,"center",K.center),Xe.setValue(z,"modelViewMatrix",K.modelViewMatrix),Xe.setValue(z,"normalMatrix",K.normalMatrix),Xe.setValue(z,"modelMatrix",K.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const yn=ct.uniformsGroups;for(let An=0,Li=yn.length;An<Li;An++){const Zi=yn[An];k.update(Zi,Un),k.bind(Zi,Un)}}return Un}function Da(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function ln(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Z,ut){const ct=Kt.get(R);ct.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Kt.get(R.texture).__webglTexture=Z,Kt.get(R.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ut,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ut=Kt.get(R);ut.__webglFramebuffer=Z,ut.__useDefaultFramebuffer=Z===void 0};const Zl=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,ut=0){X=R,P=Z,B=ut;let ct=!0,K=null,Ot=!1,Ht=!1;if(R){const jt=Kt.get(R);if(jt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(z.FRAMEBUFFER,null),ct=!1;else if(jt.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(jt.__hasExternalTextures)O.rebindTextures(R,Kt.get(R.texture).__webglTexture,Kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ie=R.depthTexture;if(jt.__boundDepthTexture!==ie){if(ie!==null&&Kt.has(ie)&&(R.width!==ie.image.width||R.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const le=R.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Ht=!0);const ae=Kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[Z])?K=ae[Z][ut]:K=ae[Z],Ot=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?K=Kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?K=ae[ut]:K=ae,H.copy(R.viewport),j.copy(R.scissor),et=R.scissorTest}else H.copy(it).multiplyScalar(W).floor(),j.copy(wt).multiplyScalar(W).floor(),et=_t;if(ut!==0&&(K=Zl),qt.bindFramebuffer(z.FRAMEBUFFER,K)&&ct&&qt.drawBuffers(R,K),qt.viewport(H),qt.scissor(j),qt.setScissorTest(et),Ot){const jt=Kt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,jt.__webglTexture,ut)}else if(Ht){const jt=Kt.get(R.texture),le=Z;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.__webglTexture,ut,le)}else if(R!==null&&ut!==0){const jt=Kt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,jt.__webglTexture,ut)}U=-1},this.readRenderTargetPixels=function(R,Z,ut,ct,K,Ot,Ht){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Vt=Vt[Ht]),Vt){qt.bindFramebuffer(z.FRAMEBUFFER,Vt);try{const jt=R.texture,le=jt.format,ae=jt.type;if(!Yt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ct&&ut>=0&&ut<=R.height-K&&z.readPixels(Z,ut,ct,K,Jt.convert(le),Jt.convert(ae),Ot)}finally{const jt=X!==null?Kt.get(X).__webglFramebuffer:null;qt.bindFramebuffer(z.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ut,ct,K,Ot,Ht){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Vt=Vt[Ht]),Vt)if(Z>=0&&Z<=R.width-ct&&ut>=0&&ut<=R.height-K){qt.bindFramebuffer(z.FRAMEBUFFER,Vt);const jt=R.texture,le=jt.format,ae=jt.type;if(!Yt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ie),z.bufferData(z.PIXEL_PACK_BUFFER,Ot.byteLength,z.STREAM_READ),z.readPixels(Z,ut,ct,K,Jt.convert(le),Jt.convert(ae),0);const ye=X!==null?Kt.get(X).__webglFramebuffer:null;qt.bindFramebuffer(z.FRAMEBUFFER,ye);const De=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await aT(z,De,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ie),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ot),z.deleteBuffer(ie),z.deleteSync(De),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ut=0){const ct=Math.pow(2,-ut),K=Math.floor(R.image.width*ct),Ot=Math.floor(R.image.height*ct),Ht=Z!==null?Z.x:0,Vt=Z!==null?Z.y:0;O.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ut,0,0,Ht,Vt,K,Ot),qt.unbindTexture()};const Kl=z.createFramebuffer(),qi=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,ut=null,ct=null,K=0,Ot=null){Ot===null&&(K!==0?(Vc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=K,K=0):Ot=0);let Ht,Vt,jt,le,ae,ie,ye,De,Qe;const Ae=R.isCompressedTexture?R.mipmaps[Ot]:R.image;if(ut!==null)Ht=ut.max.x-ut.min.x,Vt=ut.max.y-ut.min.y,jt=ut.isBox3?ut.max.z-ut.min.z:1,le=ut.min.x,ae=ut.min.y,ie=ut.isBox3?ut.min.z:0;else{const dn=Math.pow(2,-K);Ht=Math.floor(Ae.width*dn),Vt=Math.floor(Ae.height*dn),R.isDataArrayTexture?jt=Ae.depth:R.isData3DTexture?jt=Math.floor(Ae.depth*dn):jt=1,le=0,ae=0,ie=0}ct!==null?(ye=ct.x,De=ct.y,Qe=ct.z):(ye=0,De=0,Qe=0);const we=Jt.convert(Z.format),re=Jt.convert(Z.type);let en;Z.isData3DTexture?(O.setTexture3D(Z,0),en=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(O.setTexture2DArray(Z,0),en=z.TEXTURE_2D_ARRAY):(O.setTexture2D(Z,0),en=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ce=z.getParameter(z.UNPACK_ROW_LENGTH),Un=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ua=z.getParameter(z.UNPACK_SKIP_PIXELS),Ye=z.getParameter(z.UNPACK_SKIP_ROWS),ji=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,le),z.pixelStorei(z.UNPACK_SKIP_ROWS,ae),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ie);const Xe=R.isDataArrayTexture||R.isData3DTexture,Nn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const dn=Kt.get(R),yn=Kt.get(Z),An=Kt.get(dn.__renderTarget),Li=Kt.get(yn.__renderTarget);qt.bindFramebuffer(z.READ_FRAMEBUFFER,An.__webglFramebuffer),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Zi=0;Zi<jt;Zi++)Xe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kt.get(R).__webglTexture,K,ie+Zi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kt.get(Z).__webglTexture,Ot,Qe+Zi)),z.blitFramebuffer(le,ae,Ht,Vt,ye,De,Ht,Vt,z.DEPTH_BUFFER_BIT,z.NEAREST);qt.bindFramebuffer(z.READ_FRAMEBUFFER,null),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Kt.has(R)){const dn=Kt.get(R),yn=Kt.get(Z);qt.bindFramebuffer(z.READ_FRAMEBUFFER,Kl),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,qi);for(let An=0;An<jt;An++)Xe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dn.__webglTexture,K,ie+An):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dn.__webglTexture,K),Nn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yn.__webglTexture,Ot,Qe+An):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yn.__webglTexture,Ot),K!==0?z.blitFramebuffer(le,ae,Ht,Vt,ye,De,Ht,Vt,z.COLOR_BUFFER_BIT,z.NEAREST):Nn?z.copyTexSubImage3D(en,Ot,ye,De,Qe+An,le,ae,Ht,Vt):z.copyTexSubImage2D(en,Ot,ye,De,le,ae,Ht,Vt);qt.bindFramebuffer(z.READ_FRAMEBUFFER,null),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(en,Ot,ye,De,Qe,Ht,Vt,jt,we,re,Ae.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(en,Ot,ye,De,Qe,Ht,Vt,jt,we,Ae.data):z.texSubImage3D(en,Ot,ye,De,Qe,Ht,Vt,jt,we,re,Ae):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ot,ye,De,Ht,Vt,we,re,Ae.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ot,ye,De,Ae.width,Ae.height,we,Ae.data):z.texSubImage2D(z.TEXTURE_2D,Ot,ye,De,Ht,Vt,we,re,Ae);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ce),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Un),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ua),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ye),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ji),Ot===0&&Z.generateMipmaps&&z.generateMipmap(en),qt.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,ut=null,ct=null,K=0){return Vc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,ut,ct,K)},this.initRenderTarget=function(R){Kt.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){P=0,B=0,X=null,qt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ne._getUnpackColorSpace()}}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),M2=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Fx=i=>{const t=M2(i);return t.charAt(0).toUpperCase()+t.slice(1)},oS=(...i)=>i.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),E2=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=Wt.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:u,iconNode:c,...h},p)=>Wt.createElement("svg",{ref:p,...b2,width:t,height:t,stroke:i,strokeWidth:r?Number(n)*24/Number(t):n,className:oS("lucide",o),...!u&&!E2(h)&&{"aria-hidden":"true"},...h},[...c.map(([d,g])=>Wt.createElement(d,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=(i,t)=>{const n=Wt.forwardRef(({className:r,...o},u)=>Wt.createElement(T2,{ref:u,iconNode:t,className:oS(`lucide-${S2(Fx(i))}`,`lucide-${i}`,r),...o}));return n.displayName=Fx(i),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],w2=Xl("bookmark",A2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],C2=Xl("eye",R2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],U2=Xl("heart",D2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],L2=Xl("message-circle",N2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],P2=Xl("repeat",O2),Bx={type:"change"},Im={type:"start"},lS={type:"end"},Cc=new xf,Ix=new sr,z2=Math.cos(70*nT.DEG2RAD),gn=new $,qn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fp=1e-6;class uS extends BT{constructor(t,n=null){super(t,n),this.state=ke.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:io.ROTATE,MIDDLE:io.DOLLY,RIGHT:io.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new jr,this._lastTargetPosition=new $,this._quat=new jr().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fx,this._sphericalDelta=new fx,this._scale=1,this._panOffset=new $,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new $,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B2.bind(this),this._onPointerDown=F2.bind(this),this._onPointerUp=I2.bind(this),this._onContextMenu=Y2.bind(this),this._onMouseWheel=V2.bind(this),this._onKeyDown=k2.bind(this),this._onTouchStart=X2.bind(this),this._onTouchMove=W2.bind(this),this._onMouseDown=H2.bind(this),this._onMouseMove=G2.bind(this),this._interceptControlDown=q2.bind(this),this._interceptControlUp=j2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bx),this.update(),this.state=ke.NONE}update(t=null){const n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=qn:r>Math.PI&&(r-=qn),o<-Math.PI?o+=qn:o>Math.PI&&(o-=qn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=c!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=gn.length();c=this._clampDistance(h*this._scale);const p=h-c;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const h=new $(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),c=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<z2?this.object.lookAt(this.target):(Ix.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(Ix,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>fp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fp||this._lastTargetPosition.distanceToSquared(this.target)>fp?(this.dispatchEvent(Bx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qn/60*this.autoRotateSpeed*t:qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;gn.copy(o).sub(this.target);let u=gn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/r.clientHeight,this.object.matrix),this._panUp(2*n*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=t-r.left,u=n-r.top,c=r.width,h=r.height;this._mouse.x=o/c*2-1,this._mouse.y=-(u/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/n.clientHeight),this._rotateUp(qn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,o=t.pageY-n.y,u=Math.sqrt(r*r+o*o);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),o=.5*(t.pageX+r.x),u=.5*(t.pageY+r.y);this._rotateEnd.set(o,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/n.clientHeight),this._rotateUp(qn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,o=t.pageY-n.y,u=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new fe,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function F2(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function B2(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function I2(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lS),this.state=ke.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function H2(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case io.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ke.DOLLY;break;case io.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ke.ROTATE}break;case io.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Im)}function G2(i){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function V2(i){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(i.preventDefault(),this.dispatchEvent(Im),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lS))}function k2(i){this.enabled!==!1&&this._handleKeyDown(i)}function X2(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ke.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ke.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Im)}function W2(i){switch(this._trackPointer(i),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ke.NONE}}function Y2(i){this.enabled!==!1&&i.preventDefault()}function q2(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j2(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hp(i){const t=i.toLocaleString("en-US",{month:"long"}),n=i.getDate(),r=i.getFullYear(),o=n%10===1&&n!==11?"st":n%10===2&&n!==12?"nd":n%10===3&&n!==13?"rd":"th";let u=i.getHours();const c=u>=12?"PM":"AM";u=u%12||12;const h=String(i.getMinutes()).padStart(2,"0"),p=String(i.getSeconds()).padStart(2,"0");return`${t} ${n}${o}, ${r}, ${String(u).padStart(2,"0")}:${h}:${p} ${c}`}const Z2=["#440154","#472D7B","#3B518B","#2C718E","#21918C","#27AD81","#5CC863","#BADC31"],K2=["#00204C","#143362","#1D5796","#2C75A0","#3D8C8E","#60B56B","#AAD338","#FDE725"],Q2=["#0D0887","#4B03A5","#7A04A6","#A61386","#D4316E","#F1605D","#FD8C3E","#FCCE25"],$2=["#000004","#1B0C41","#4A0C6B","#781C6D","#A52C60","#CF4446","#ED6925","#FB9B06"];function Dc(i,t){return Array.from({length:t},(n,r)=>{const o=Math.round(r*(i.length-1)/(t-1));return i[o]})}const Hx={default:i=>Dc(Z2,i),protanopia:i=>Dc(K2,i),deuteranopia:i=>Dc(Q2,i),tritanopia:i=>Dc($2,i),party:()=>[]},J2={FDP:"#FFED00","B90/GRÜNE":"#1FAF12",SPD:"#FF0000",CDU:"#000000",AfD:"#009DE0",BSW:"#fca311",CSU:"#415a77",LINKE:"#DF007D"},tC=({onSwitch:i})=>{const t=Wt.useRef(null),[n,r]=Wt.useState(!0),[o,u]=Wt.useState(null),[c,h]=Wt.useState(!1),[p,d]=Wt.useState(0),[g,v]=Wt.useState(!1),[_,x]=Wt.useState(null),[E,b]=Wt.useState(1),[S,y]=Wt.useState("default"),[L,N]=Wt.useState("en"),w=Wt.useRef(null),I=Wt.useRef(null),P=Wt.useRef(null),B=Wt.useRef(null),X=Wt.useRef({x:0,y:0}),U=Wt.useRef({x:0,y:0}),C=Wt.useRef(0),H=Wt.useRef(2e3),j=Wt.useRef([]),et=Wt.useRef({min:null,max:null}),pt=Wt.useRef(null),dt=Wt.useRef(null),[F,Y]=Wt.useState(null),W=Array.from({length:20},(nt,Et)=>Et+1),ht={en:{titleLine1:"From Tweet to Trend:",titleLine2:"Visualizing Political Retweet Networks",simulation:"Retweet Simulation",currentTime:"Current Time:",originalBy:"Original tweet by",selectPost:"Select a post to see its retweet activity:",legend:"LEGEND",colorScheme:"Color Scheme",nodeSize:"Node Size",play:"Play",pause:"Pause",switchViz:"Explore Bursts & Network",return:"Return",earliestLatest:"Earliest → Latest",lowFollower:"Low Follower Count",highFollower:"High Follower Count",optPartyColors:"Political party colors",optDefault:"Default",optProtanopia:"Protanopia-friendly",optDeuteranopia:"Deuteranopia-friendly",optTritanopia:"Tritanopia-friendly",titles:{1:"Attention Please",2:"Conservatives serve Europe",3:"Hope for Tomorrow",4:"Election Allegations",5:"Catalyst for Change",6:"Show Your Colors",7:"Advent Interrupted",8:"For Reasons",9:"Suspending Documentation",10:"Tax Relief",11:"Coalition Opportunity",12:"Small Shifts, Big Impact",13:"Voting Paradox",14:"Economic Turnaround Now",15:"",16:"",17:"",18:"",19:"",20:""}},de:{titleLine1:"Vom Tweet zum Trend:",titleLine2:"Politische Retweet-Netzwerke visualisieren",simulation:"Simulation der Retweets",currentTime:"Aktuelle Zeit:",originalBy:"Original-Tweet von",selectPost:"Wählen Sie einen Beitrag, um Retweet-Aktivität zu sehen:",legend:"LEGENDE",colorScheme:"Farb-Schema",nodeSize:"Knotengröße",play:"Abspielen",pause:"Pause",switchViz:"Bursts & Netzwerk erkunden",return:"Return",earliestLatest:"Früheste → Neueste",lowFollower:"Geringe Follower-Zahl",highFollower:"Hohe Follower-Zahl",optPartyColors:"Parteifarben",optDefault:"Standard",optProtanopia:"Protanopie-freundlich",optDeuteranopia:"Deuteranopie-freundlich",optTritanopia:"Tritanopie-freundlich",titles:{1:"Aufmerksamkeit erbeten",2:"Konservative dienen Europa",3:"Hoffnung für morgen",4:"Wahlvorwürfe",5:"Katalysator für Veränderung",6:"Zeigt eure Farben",7:"Unterbrochener Advent",8:"Aus Gründen",9:"Aussetzung der Dokumentation",10:"Steuererleichterungen",11:"Koalitionschance",12:"Kleine Veränderungen, große Wirkung",13:"Wahlparadox",14:"Wirtschaftliche Trendwende jetzt",15:"",16:"",17:"",18:"",19:"",20:""}}};Wt.useEffect(()=>{r(!0),fetch(`https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_${E}.json`).then(nt=>nt.json()).then(nt=>{const Et=[...nt].sort((vt,st)=>new Date(vt.creation_time)-new Date(st.creation_time));x(Et);const Ut=new Date(Et[0].creation_time);u(hp(Ut)),r(!1)}).catch(nt=>{console.error("Error loading JSON data:",nt),r(!1)})},[E]),Wt.useEffect(()=>{fetch("https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_original_tweets.json").then(nt=>nt.json()).then(nt=>{const Et=nt.reduce((Ut,vt)=>(Ut[vt.platform_post_id]=vt,Ut),{});Y(Et)}).catch(nt=>{console.error("Error loading original tweet details:",nt)})},[]);const D=_&&F&&_[0]?F[_[0].shared_post_id]:null;Wt.useEffect(()=>{if(!_)return;console.log(_);const nt=new jy;nt.background=new be(0),I.current=nt;const Et=new ri(75,window.innerWidth/window.innerHeight,.1,1e3);Et.position.z=15,P.current=Et;const Ut=new sS({antialias:!0});Ut.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(Ut.domElement),B.current=Ut;const vt=new uS(Et,Ut.domElement);vt.enableDamping=!0,vt.dampingFactor=.1,vt.enableZoom=!0,vt.zoomSpeed=1.2,vt.enablePan=!0,vt.rotateSpeed=.8;const st=Ct=>{Ct.preventDefault();const Lt=.05;P.current.position.z+=Ct.deltaY*Lt,P.current.position.z=Math.max(5,Math.min(50,P.current.position.z))};Ut.domElement.addEventListener("wheel",st,{passive:!1});const bt=new Js;nt.add(bt);const Q=(Ct,Lt,Pt=0)=>{const ce=document.createElement("canvas"),Nt=ce.getContext("2d");ce.width=256,ce.height=128,Nt.font="12px Arial",Nt.fillStyle=`rgba(${Pt>>16&255}, ${Pt>>8&255}, ${Pt&255}, 1.0)`,Nt.fillText(Ct,0,64);const Xt=new ef(ce),$t=new zm({map:Xt}),te=new Ky($t);return te.position.set(Lt.x-2,Lt.y+.2,Lt.z),te.scale.set(5,2.5,1),te},zt=new po(1,32,32),z=new fo({color:4886754}),Zt=new si(zt,z);Zt.visible=!0,bt.add(Zt),pt.current=Zt;const Gt=Q("Original Tweet by @roberthabeck",new $(0,0,0),1942002);Gt.visible=!0,bt.add(Gt),dt.current=Gt;let Yt;S==="party"?Yt=_.map(Ct=>Ct.party_color):Yt=Hx[S](_.length);const qt=[],de=new Date(_[0].creation_time),Kt=new Date(_[_.length-1].creation_time);et.current={min:de,max:Kt},_.forEach((Ct,Lt)=>{const Pt=new Date(Ct.creation_time),ce=Lt/_.length*Math.PI*2,Nt=7,Xt=Math.cos(ce)*Nt,$t=Math.sin(ce)*Nt,Dt=.3+parseFloat(Ct.follower_count)/1e6*.7,ee=new po(Dt,32,32),Jt=Yt[Lt],pe=new fo({color:new be(Jt),transparent:!0,opacity:0}),k=new si(ee,pe);k.position.set(Xt,$t,0),k.userData={data:Ct,time:Pt,visible:!1};const Ft=Q(Ct.dboes_name,new $(Xt,$t,0),16777215);Ft.visible=!1;const ft=new Fm({color:new be(Jt),transparent:!0,opacity:0}),yt=new xi().setFromPoints([new $(0,0,0),new $(Xt,$t,0)]),Bt=new $y(yt,ft);bt.add(k),bt.add(Ft),bt.add(Bt),qt.push({node:k,label:Ft,line:Bt,time:Pt})}),j.current=qt,u(hp(de)),r(!1);const O=Ct=>{document.addEventListener("mousemove",T),document.addEventListener("mouseup",rt),X.current.x=Ct.clientX,X.current.y=Ct.clientY},T=Ct=>{const Lt=Ct.clientX-X.current.x,Pt=Ct.clientY-X.current.y;X.current.x=Ct.clientX,X.current.y=Ct.clientY,U.current.y+=Lt*.01,U.current.x+=Pt*.01},rt=()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",rt)};Ut.domElement.addEventListener("mousedown",O);const Tt=()=>{P.current&&B.current&&(P.current.aspect=window.innerWidth/window.innerHeight,P.current.updateProjectionMatrix(),B.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Tt),Ut.render(nt,Et);const Rt=()=>{const Ct=t.current.clientWidth,Lt=t.current.clientHeight;Ut.setSize(Ct,Lt),Et.aspect=Ct/Lt,Et.updateProjectionMatrix()};window.addEventListener("resize",Rt),Rt();const mt=()=>{bt&&(bt.rotation.x+=(U.current.x-bt.rotation.x)*.05,bt.rotation.y+=(U.current.y-bt.rotation.y)*.05),B.current&&I.current&&P.current&&B.current.render(I.current,P.current),vt.update(),Ut.render(nt,Et),w.current=requestAnimationFrame(mt)};return w.current=requestAnimationFrame(mt),()=>{window.removeEventListener("resize",Rt),window.removeEventListener("resize",Tt),cancelAnimationFrame(w.current),Ut.domElement.removeEventListener("mousedown",O),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",rt),t.current&&Ut.domElement&&t.current.removeChild(Ut.domElement),zt.dispose(),z.dispose(),qt.forEach(Ct=>{Ct.node.geometry&&Ct.node.geometry.dispose(),Ct.node.material&&Ct.node.material.dispose(),Ct.line.geometry&&Ct.line.geometry.dispose(),Ct.line.material&&Ct.line.material.dispose()})}},[_,S]),Wt.useEffect(()=>{let nt;return c&&(C.current=Date.now(),pt.current&&(pt.current.visible=!0),dt.current&&(dt.current.visible=!0),nt=setInterval(()=>{const{min:Et,max:Ut}=et.current;if(!Et||!Ut)return;const st=(Date.now()-C.current)*H.current,bt=new Date(Et.getTime()+st),Q=Ut.getTime()-Et.getTime(),zt=bt.getTime()-Et.getTime(),z=Math.min(zt/Q*2200,100);u(hp(bt)),d(z),j.current.forEach(Zt=>{if(bt>=Zt.time&&!Zt.node.userData.visible){Zt.node.material.opacity=1,Zt.label.visible=!0,Zt.line.material.opacity=.7,Zt.node.userData.visible=!0;const Gt=new $(1.5,1.5,1.5);Zt.node.scale.copy(Gt),setTimeout(()=>{Zt.node.scale.set(1,1,1)},300)}}),bt>=Ut&&(h(!1),clearInterval(nt))},100)),()=>{nt&&clearInterval(nt)}},[c]),Wt.useEffect(()=>{if(!_)return;const nt=new tS,Et=new fe,Ut=vt=>{Et.x=vt.clientX/window.innerWidth*2-1,Et.y=-(vt.clientY/window.innerHeight)*2+1,nt.setFromCamera(Et,P.current);const st=j.current.map(Q=>Q.node),bt=nt.intersectObjects(st);if(bt.length>0){const Q=bt[0].object;j.current.forEach(zt=>{zt.node===Q?(zt.node.material.opacity=1,zt.label.material&&(zt.label.material.opacity=1)):(zt.node.material.opacity=.3,zt.label.material&&(zt.label.material.opacity=.3))})}else j.current.forEach(Q=>{Q.node.userData.visible?(Q.node.material.opacity=1,Q.label.material&&(Q.label.material.opacity=1)):(Q.node.material.opacity=0,Q.label.material&&(Q.label.material.opacity=0))})};return window.addEventListener("mousemove",Ut),()=>{window.removeEventListener("mousemove",Ut)}},[_]);const it=()=>{c?h(!1):(p>=100&&(j.current.forEach(nt=>{nt.node.material.opacity=0,nt.label.visible=!1,nt.line.material.opacity=0,nt.node.userData.visible=!1}),u(et.current.min.toLocaleString()),d(0)),h(!0))};Wt.useEffect(()=>{pt.current&&dt.current&&(pt.current.visible=!0,dt.current.visible=!0)},[E]),Wt.useEffect(()=>{var nt;if(_&&F&&((nt=_[0])!=null&&nt.shared_post_id)&&dt.current){const Et=_[0].shared_post_id,Ut=F[Et];if(Ut){const st=`Original Tweet by @${Ut.platform_post_owner_name}`,bt=document.createElement("canvas"),Q=bt.getContext("2d");bt.width=256,bt.height=128,Q.font="12px Arial",Q.fillStyle="rgba(29,161,242,1.0)",Q.fillText(st,0,64);const zt=new ef(bt);dt.current.material.map=zt,dt.current.material.needsUpdate=!0}}},[_,F]);const wt=W.map(nt=>({id:nt,label:ht[L].titles[nt]||""})),St=`linear-gradient(to right, ${(S==="party"?[...new Set(_.map(nt=>nt.party_color))]:Hx[S](7)).join(", ")})`;return gt.jsx("div",{className:"w-full h-full relative bg-black",children:gt.jsxs("div",{className:"mb-10 md:mb-0",children:[gt.jsx("div",{ref:t,className:"w-full h-[50vh] mt-[50vh] md:h-screen md:mt-0"}),gt.jsxs("h2",{className:"absolute top-20 -mt-5 md:top-5 md:mt-0 left-10",children:[gt.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:ht[L].titleLine1}),gt.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:ht[L].titleLine2})]}),gt.jsxs("div",{className:`
        absolute top-[200px] md:top-[440px] 
        left-0 right-0 mx-auto
        md:right-10 md:left-auto
        text-left md:text-right
        py-2  
        w-full max-w-sm md:max-w-none
        `,children:[gt.jsx("div",{className:"mt-2 text-white text-sm sm:text-md md:text-lg",children:ht[L].selectPost}),gt.jsx("div",{className:"text-cyan-500 grid grid-cols-2 gap-2 md:flex md:flex-col md:items-end",children:wt.map(nt=>gt.jsx("span",{onClick:()=>b(nt.id),className:`
          cursor-pointer
          ${E===nt.id?"font-bold text-lg sm:text-xl md:text-2xl":"text-sm sm:text-md md:text-lg"}
        `,children:nt.label},nt.id))})]}),gt.jsx("div",{className:"absolute top-4 right-10 flex space-x-2",children:["en","de"].map(nt=>gt.jsx("button",{onClick:()=>N(nt),className:`px-3 py-1 rounded border ${L===nt?"bg-cyan-500 text-black border-cyan-500":"bg-black text-white border-gray-600 hover:border-cyan-500"} transition`,children:nt.toUpperCase()},nt))}),gt.jsxs("div",{className:"flex flex-col space-y-4 ml-5 mr-5 md:flex-row md:space-x-6 md:space-y-0 md:ml-0 md:mr-0",children:[gt.jsxs("div",{className:"flex-1 bg-black border border-cyan-500 p-6 rounded-lg shadow-lg md:absolute md:top-40 md:left-10 md:ml-6 md:w-[31rem]",children:[gt.jsx("div",{className:"font-bold mb-2 text-white text-xl",children:ht[L].simulation}),gt.jsxs("div",{className:"mb-2 text-white",children:[ht[L].currentTime," ",o]}),gt.jsx("div",{className:"w-64 h-2 bg-gray-800 rounded-full mb-2",children:gt.jsx("div",{className:"h-full bg-cyan-500 rounded-full",style:{width:`${p}%`}})}),D&&gt.jsxs("div",{className:"text-white text-sm",children:[ht[L].originalBy," @",D.platform_post_owner_name," –"," ",_.length,_.length>1?" Accounts":" Account"]})]}),gt.jsxs("div",{className:`
    relative mt-4
   w-full max-w-[32rem] mx-auto
    md:absolute md:top-80 md:left-10 md:w-[31rem]
    bg-gray-900 bg-opacity-80 p-4 rounded-lg border border-cyan-500 shadow-xl text-white
  `,children:[" ",gt.jsx("div",{className:"font-mono mb-4 text-sm sm:text-md md:text-md lg:text-md xl:text-md 2xl:text-md",children:_&&_[0]&&_[0].text.replace(/^RT @[A-Za-z0-9_]+:\s*/,"").replace(/https:\/\/.*/,"")}),D&&gt.jsxs("div",{className:"flex justify-between text-gray-400 text-xs sm:text-sm",children:[gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(C2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.views})]}),gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(L2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.comment_count})]}),gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(P2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.share_count})]}),gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(U2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.like_count})]}),gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(w2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.bookmark_count})]})]})]}),gt.jsxs("div",{className:` relative            /* mobile: in-flow */
       mb-4                /* mobile: gap below */
       mt-5
    w-[32rem]
       md:absolute md:right-10 md:top-20 -mt-5 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80`,children:[gt.jsx("div",{className:"font-bold mb-2 text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",children:ht[L].legend}),gt.jsx("hr",{className:"border-t-2 border-white my-2"}),gt.jsx("div",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:ht[L].colorScheme}),gt.jsxs("div",{className:"text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[gt.jsxs("div",{className:"mb-3",children:[gt.jsx("div",{className:"mb-3",children:gt.jsxs("select",{value:S,onChange:nt=>y(nt.target.value),className:"p-2 bg-gray-800 text-white rounded",children:[gt.jsx("option",{value:"party",children:ht[L].optPartyColors}),gt.jsx("option",{value:"default",children:ht[L].optDefault}),gt.jsx("option",{value:"protanopia",children:ht[L].optProtanopia}),gt.jsx("option",{value:"deuteranopia",children:ht[L].optDeuteranopia}),gt.jsx("option",{value:"tritanopia",children:ht[L].optTritanopia})]})}),S==="party"?gt.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(J2).map(([nt,Et])=>gt.jsxs("div",{className:"flex items-center space-x-2",children:[gt.jsx("div",{className:"w-4 h-4 border border-gray-600 rounded-sm",style:{backgroundColor:Et}}),gt.jsx("span",{className:"text-white text-sm",children:nt})]},nt))}):gt.jsxs(gt.Fragment,{children:[gt.jsx("div",{className:"w-full h-4 rounded",style:{background:St}}),gt.jsx("p",{className:"mt-1 text-white",children:ht[L].earliestLatest})]})]}),gt.jsxs("div",{children:[gt.jsx("p",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:ht[L].nodeSize}),gt.jsxs("div",{className:"flex items-center space-x-2 text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[gt.jsx("div",{className:"w-4 h-4 bg-white ml-2 mr-2 rounded-full border border-cyan-500"}),gt.jsx("span",{children:ht[L].lowFollower})]}),gt.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[gt.jsx("div",{className:"w-8 h-8 bg-white rounded-full border border-cyan-500"}),gt.jsx("span",{children:ht[L].highFollower})]})]})]})]})]}),gt.jsxs("div",{className:`
    absolute left-1/2 transform -translate-x-1/2 top-80 mt-60
    flex space-x-4
    md:block md:transform-none md:left-auto md:translate-x-0 md:top-auto md:mt-0
  `,children:[gt.jsx("button",{onClick:it,className:`
      w-24 md:w-32
      bg-black text-white font-bold
      py-2 md:py-3 px-2 md:px-6
      rounded-lg border border-cyan-500
      shadow-lg hover:bg-gray-900
      transition-colors
      ${c?"":"pulse-once"}
      md:absolute md:bottom-10 md:left-10 md:ml-0
    `,children:c?ht[L].pause:ht[L].play}),gt.jsx("button",{onClick:i,className:`
      w-64 md:w-96
      bg-black text-white font-bold
      py-2 md:py-3 px-4 md:px-6
      rounded-lg border border-cyan-500
      shadow-lg hover:bg-gray-900
      transition-colors
      ${c?"pulse-once":""}
      md:absolute md:bottom-10 md:left-40 md:ml-0
    `,children:ht[L].switchViz})]})]})})};function Xc(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function eC(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function Hm(i){let t,n,r;i.length!==2?(t=Xc,n=(h,p)=>Xc(i(h),p),r=(h,p)=>i(h)-p):(t=i===Xc||i===eC?i:nC,n=i,r=i);function o(h,p,d=0,g=h.length){if(d<g){if(t(p,p)!==0)return g;do{const v=d+g>>>1;n(h[v],p)<0?d=v+1:g=v}while(d<g)}return d}function u(h,p,d=0,g=h.length){if(d<g){if(t(p,p)!==0)return g;do{const v=d+g>>>1;n(h[v],p)<=0?d=v+1:g=v}while(d<g)}return d}function c(h,p,d=0,g=h.length){const v=o(h,p,d,g-1);return v>d&&r(h[v-1],p)>-r(h[v],p)?v-1:v}return{left:o,center:c,right:u}}function nC(){return 0}function iC(i){return i===null?NaN:+i}const aC=Hm(Xc),cS=aC.right;Hm(iC).center;function rC(i,t){let n=0;for(let r of i)r!=null&&(r=+r)>=r&&++n;return n}function Wc(i,t){let n,r;if(t===void 0)for(const o of i)o!=null&&(n===void 0?o>=o&&(n=r=o):(n>o&&(n=o),r<o&&(r=o)));else{let o=-1;for(let u of i)(u=t(u,++o,i))!=null&&(n===void 0?u>=u&&(n=r=u):(n>u&&(n=u),r<u&&(r=u)))}return[n,r]}function sC(i){return i}var oC=Array.prototype,lC=oC.slice;function dp(i){return()=>i}const uC=Math.sqrt(50),cC=Math.sqrt(10),fC=Math.sqrt(2);function nf(i,t,n){const r=(t-i)/Math.max(0,n),o=Math.floor(Math.log10(r)),u=r/Math.pow(10,o),c=u>=uC?10:u>=cC?5:u>=fC?2:1;let h,p,d;return o<0?(d=Math.pow(10,-o)/c,h=Math.round(i*d),p=Math.round(t*d),h/d<i&&++h,p/d>t&&--p,d=-d):(d=Math.pow(10,o)*c,h=Math.round(i/d),p=Math.round(t/d),h*d<i&&++h,p*d>t&&--p),p<h&&.5<=n&&n<2?nf(i,t,n*2):[h,p,d]}function fS(i,t,n){if(t=+t,i=+i,n=+n,!(n>0))return[];if(i===t)return[i];const r=t<i,[o,u,c]=r?nf(t,i,n):nf(i,t,n);if(!(u>=o))return[];const h=u-o+1,p=new Array(h);if(r)if(c<0)for(let d=0;d<h;++d)p[d]=(u-d)/-c;else for(let d=0;d<h;++d)p[d]=(u-d)*c;else if(c<0)for(let d=0;d<h;++d)p[d]=(o+d)/-c;else for(let d=0;d<h;++d)p[d]=(o+d)*c;return p}function mo(i,t,n){return t=+t,i=+i,n=+n,nf(i,t,n)[2]}function pm(i,t,n){t=+t,i=+i,n=+n;const r=t<i,o=r?mo(t,i,n):mo(i,t,n);return(r?-1:1)*(o<0?1/-o:o)}function hC(i,t,n){let r;for(;;){const o=mo(i,t,n);if(o===r||o===0||!isFinite(o))return[i,t];o>0?(i=Math.floor(i/o)*o,t=Math.ceil(t/o)*o):o<0&&(i=Math.ceil(i*o)/o,t=Math.floor(t*o)/o),r=o}}function dC(i){return Math.max(1,Math.ceil(Math.log(rC(i))/Math.LN2)+1)}function pC(){var i=sC,t=Wc,n=dC;function r(o){Array.isArray(o)||(o=Array.from(o));var u,c=o.length,h,p,d=new Array(c);for(u=0;u<c;++u)d[u]=i(o[u],u,o);var g=t(d),v=g[0],_=g[1],x=n(d,v,_);if(!Array.isArray(x)){const N=_,w=+x;if(t===Wc&&([v,_]=hC(v,_,w)),x=fS(v,_,w),x[0]<=v&&(p=mo(v,_,w)),x[x.length-1]>=_)if(N>=_&&t===Wc){const I=mo(v,_,w);isFinite(I)&&(I>0?_=(Math.floor(_/I)+1)*I:I<0&&(_=(Math.ceil(_*-I)+1)/-I))}else x.pop()}for(var E=x.length,b=0,S=E;x[b]<=v;)++b;for(;x[S-1]>_;)--S;(b||S<E)&&(x=x.slice(b,S),E=S-b);var y=new Array(E+1),L;for(u=0;u<=E;++u)L=y[u]=[],L.x0=u>0?x[u-1]:v,L.x1=u<E?x[u]:_;if(isFinite(p)){if(p>0)for(u=0;u<c;++u)(h=d[u])!=null&&v<=h&&h<=_&&y[Math.min(E,Math.floor((h-v)/p))].push(o[u]);else if(p<0){for(u=0;u<c;++u)if((h=d[u])!=null&&v<=h&&h<=_){const N=Math.floor((v-h)*p);y[Math.min(E,N+(x[N]<=h))].push(o[u])}}}else for(u=0;u<c;++u)(h=d[u])!=null&&v<=h&&h<=_&&y[cS(x,h,0,E)].push(o[u]);return y}return r.value=function(o){return arguments.length?(i=typeof o=="function"?o:dp(o),r):i},r.domain=function(o){return arguments.length?(t=typeof o=="function"?o:dp([o[0],o[1]]),r):t},r.thresholds=function(o){return arguments.length?(n=typeof o=="function"?o:dp(Array.isArray(o)?lC.call(o):o),r):n},r}function Gx(i,t){let n;if(t===void 0)for(const r of i)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let o of i)(o=t(o,++r,i))!=null&&(n<o||n===void 0&&o>=o)&&(n=o)}return n}function mC(i,t){let n;for(const r of i)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function gC(i){return i}var pp=1,mp=2,mm=3,Dl=4,Vx=1e-6;function _C(i){return"translate("+i+",0)"}function vC(i){return"translate(0,"+i+")"}function xC(i){return t=>+i(t)}function yC(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),n=>+i(n)+t}function SC(){return!this.__axis}function hS(i,t){var n=[],r=null,o=null,u=6,c=6,h=3,p=typeof window<"u"&&window.devicePixelRatio>1?0:.5,d=i===pp||i===Dl?-1:1,g=i===Dl||i===mp?"x":"y",v=i===pp||i===mm?_C:vC;function _(x){var E=r??(t.ticks?t.ticks.apply(t,n):t.domain()),b=o??(t.tickFormat?t.tickFormat.apply(t,n):gC),S=Math.max(u,0)+h,y=t.range(),L=+y[0]+p,N=+y[y.length-1]+p,w=(t.bandwidth?yC:xC)(t.copy(),p),I=x.selection?x.selection():x,P=I.selectAll(".domain").data([null]),B=I.selectAll(".tick").data(E,t).order(),X=B.exit(),U=B.enter().append("g").attr("class","tick"),C=B.select("line"),H=B.select("text");P=P.merge(P.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),B=B.merge(U),C=C.merge(U.append("line").attr("stroke","currentColor").attr(g+"2",d*u)),H=H.merge(U.append("text").attr("fill","currentColor").attr(g,d*S).attr("dy",i===pp?"0em":i===mm?"0.71em":"0.32em")),x!==I&&(P=P.transition(x),B=B.transition(x),C=C.transition(x),H=H.transition(x),X=X.transition(x).attr("opacity",Vx).attr("transform",function(j){return isFinite(j=w(j))?v(j+p):this.getAttribute("transform")}),U.attr("opacity",Vx).attr("transform",function(j){var et=this.parentNode.__axis;return v((et&&isFinite(et=et(j))?et:w(j))+p)})),X.remove(),P.attr("d",i===Dl||i===mp?c?"M"+d*c+","+L+"H"+p+"V"+N+"H"+d*c:"M"+p+","+L+"V"+N:c?"M"+L+","+d*c+"V"+p+"H"+N+"V"+d*c:"M"+L+","+p+"H"+N),B.attr("opacity",1).attr("transform",function(j){return v(w(j)+p)}),C.attr(g+"2",d*u),H.attr(g,d*S).text(b),I.filter(SC).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===mp?"start":i===Dl?"end":"middle"),I.each(function(){this.__axis=w})}return _.scale=function(x){return arguments.length?(t=x,_):t},_.ticks=function(){return n=Array.from(arguments),_},_.tickArguments=function(x){return arguments.length?(n=x==null?[]:Array.from(x),_):n.slice()},_.tickValues=function(x){return arguments.length?(r=x==null?null:Array.from(x),_):r&&r.slice()},_.tickFormat=function(x){return arguments.length?(o=x,_):o},_.tickSize=function(x){return arguments.length?(u=c=+x,_):u},_.tickSizeInner=function(x){return arguments.length?(u=+x,_):u},_.tickSizeOuter=function(x){return arguments.length?(c=+x,_):c},_.tickPadding=function(x){return arguments.length?(h=+x,_):h},_.offset=function(x){return arguments.length?(p=+x,_):p},_}function MC(i){return hS(mm,i)}function EC(i){return hS(Dl,i)}var bC={value:()=>{}};function dS(){for(var i=0,t=arguments.length,n={},r;i<t;++i){if(!(r=arguments[i]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Yc(n)}function Yc(i){this._=i}function TC(i,t){return i.trim().split(/^|\s+/).map(function(n){var r="",o=n.indexOf(".");if(o>=0&&(r=n.slice(o+1),n=n.slice(0,o)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Yc.prototype=dS.prototype={constructor:Yc,on:function(i,t){var n=this._,r=TC(i+"",n),o,u=-1,c=r.length;if(arguments.length<2){for(;++u<c;)if((o=(i=r[u]).type)&&(o=AC(n[o],i.name)))return o;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++u<c;)if(o=(i=r[u]).type)n[o]=kx(n[o],i.name,t);else if(t==null)for(o in n)n[o]=kx(n[o],i.name,null);return this},copy:function(){var i={},t=this._;for(var n in t)i[n]=t[n].slice();return new Yc(i)},call:function(i,t){if((o=arguments.length-2)>0)for(var n=new Array(o),r=0,o,u;r<o;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(u=this._[i],r=0,o=u.length;r<o;++r)u[r].value.apply(t,n)},apply:function(i,t,n){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var r=this._[i],o=0,u=r.length;o<u;++o)r[o].value.apply(t,n)}};function AC(i,t){for(var n=0,r=i.length,o;n<r;++n)if((o=i[n]).name===t)return o.value}function kx(i,t,n){for(var r=0,o=i.length;r<o;++r)if(i[r].name===t){i[r]=bC,i=i.slice(0,r).concat(i.slice(r+1));break}return n!=null&&i.push({name:t,value:n}),i}var gm="http://www.w3.org/1999/xhtml";const Xx={svg:"http://www.w3.org/2000/svg",xhtml:gm,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Mf(i){var t=i+="",n=t.indexOf(":");return n>=0&&(t=i.slice(0,n))!=="xmlns"&&(i=i.slice(n+1)),Xx.hasOwnProperty(t)?{space:Xx[t],local:i}:i}function wC(i){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===gm&&t.documentElement.namespaceURI===gm?t.createElement(i):t.createElementNS(n,i)}}function RC(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function pS(i){var t=Mf(i);return(t.local?RC:wC)(t)}function CC(){}function Gm(i){return i==null?CC:function(){return this.querySelector(i)}}function DC(i){typeof i!="function"&&(i=Gm(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var u=t[o],c=u.length,h=r[o]=new Array(c),p,d,g=0;g<c;++g)(p=u[g])&&(d=i.call(p,p.__data__,g,u))&&("__data__"in p&&(d.__data__=p.__data__),h[g]=d);return new oi(r,this._parents)}function UC(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function NC(){return[]}function mS(i){return i==null?NC:function(){return this.querySelectorAll(i)}}function LC(i){return function(){return UC(i.apply(this,arguments))}}function OC(i){typeof i=="function"?i=LC(i):i=mS(i);for(var t=this._groups,n=t.length,r=[],o=[],u=0;u<n;++u)for(var c=t[u],h=c.length,p,d=0;d<h;++d)(p=c[d])&&(r.push(i.call(p,p.__data__,d,c)),o.push(p));return new oi(r,o)}function gS(i){return function(){return this.matches(i)}}function _S(i){return function(t){return t.matches(i)}}var PC=Array.prototype.find;function zC(i){return function(){return PC.call(this.children,i)}}function FC(){return this.firstElementChild}function BC(i){return this.select(i==null?FC:zC(typeof i=="function"?i:_S(i)))}var IC=Array.prototype.filter;function HC(){return Array.from(this.children)}function GC(i){return function(){return IC.call(this.children,i)}}function VC(i){return this.selectAll(i==null?HC:GC(typeof i=="function"?i:_S(i)))}function kC(i){typeof i!="function"&&(i=gS(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var u=t[o],c=u.length,h=r[o]=[],p,d=0;d<c;++d)(p=u[d])&&i.call(p,p.__data__,d,u)&&h.push(p);return new oi(r,this._parents)}function vS(i){return new Array(i.length)}function XC(){return new oi(this._enter||this._groups.map(vS),this._parents)}function af(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}af.prototype={constructor:af,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function WC(i){return function(){return i}}function YC(i,t,n,r,o,u){for(var c=0,h,p=t.length,d=u.length;c<d;++c)(h=t[c])?(h.__data__=u[c],r[c]=h):n[c]=new af(i,u[c]);for(;c<p;++c)(h=t[c])&&(o[c]=h)}function qC(i,t,n,r,o,u,c){var h,p,d=new Map,g=t.length,v=u.length,_=new Array(g),x;for(h=0;h<g;++h)(p=t[h])&&(_[h]=x=c.call(p,p.__data__,h,t)+"",d.has(x)?o[h]=p:d.set(x,p));for(h=0;h<v;++h)x=c.call(i,u[h],h,u)+"",(p=d.get(x))?(r[h]=p,p.__data__=u[h],d.delete(x)):n[h]=new af(i,u[h]);for(h=0;h<g;++h)(p=t[h])&&d.get(_[h])===p&&(o[h]=p)}function jC(i){return i.__data__}function ZC(i,t){if(!arguments.length)return Array.from(this,jC);var n=t?qC:YC,r=this._parents,o=this._groups;typeof i!="function"&&(i=WC(i));for(var u=o.length,c=new Array(u),h=new Array(u),p=new Array(u),d=0;d<u;++d){var g=r[d],v=o[d],_=v.length,x=KC(i.call(g,g&&g.__data__,d,r)),E=x.length,b=h[d]=new Array(E),S=c[d]=new Array(E),y=p[d]=new Array(_);n(g,v,b,S,y,x,t);for(var L=0,N=0,w,I;L<E;++L)if(w=b[L]){for(L>=N&&(N=L+1);!(I=S[N])&&++N<E;);w._next=I||null}}return c=new oi(c,r),c._enter=h,c._exit=p,c}function KC(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function QC(){return new oi(this._exit||this._groups.map(vS),this._parents)}function $C(i,t,n){var r=this.enter(),o=this,u=this.exit();return typeof i=="function"?(r=i(r),r&&(r=r.selection())):r=r.append(i+""),t!=null&&(o=t(o),o&&(o=o.selection())),n==null?u.remove():n(u),r&&o?r.merge(o).order():o}function JC(i){for(var t=i.selection?i.selection():i,n=this._groups,r=t._groups,o=n.length,u=r.length,c=Math.min(o,u),h=new Array(o),p=0;p<c;++p)for(var d=n[p],g=r[p],v=d.length,_=h[p]=new Array(v),x,E=0;E<v;++E)(x=d[E]||g[E])&&(_[E]=x);for(;p<o;++p)h[p]=n[p];return new oi(h,this._parents)}function tD(){for(var i=this._groups,t=-1,n=i.length;++t<n;)for(var r=i[t],o=r.length-1,u=r[o],c;--o>=0;)(c=r[o])&&(u&&c.compareDocumentPosition(u)^4&&u.parentNode.insertBefore(c,u),u=c);return this}function eD(i){i||(i=nD);function t(v,_){return v&&_?i(v.__data__,_.__data__):!v-!_}for(var n=this._groups,r=n.length,o=new Array(r),u=0;u<r;++u){for(var c=n[u],h=c.length,p=o[u]=new Array(h),d,g=0;g<h;++g)(d=c[g])&&(p[g]=d);p.sort(t)}return new oi(o,this._parents).order()}function nD(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function iD(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function aD(){return Array.from(this)}function rD(){for(var i=this._groups,t=0,n=i.length;t<n;++t)for(var r=i[t],o=0,u=r.length;o<u;++o){var c=r[o];if(c)return c}return null}function sD(){let i=0;for(const t of this)++i;return i}function oD(){return!this.node()}function lD(i){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o=t[n],u=0,c=o.length,h;u<c;++u)(h=o[u])&&i.call(h,h.__data__,u,o);return this}function uD(i){return function(){this.removeAttribute(i)}}function cD(i){return function(){this.removeAttributeNS(i.space,i.local)}}function fD(i,t){return function(){this.setAttribute(i,t)}}function hD(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function dD(i,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(i):this.setAttribute(i,n)}}function pD(i,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,n)}}function mD(i,t){var n=Mf(i);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?cD:uD:typeof t=="function"?n.local?pD:dD:n.local?hD:fD)(n,t))}function xS(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function gD(i){return function(){this.style.removeProperty(i)}}function _D(i,t,n){return function(){this.style.setProperty(i,t,n)}}function vD(i,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(i):this.style.setProperty(i,r,n)}}function xD(i,t,n){return arguments.length>1?this.each((t==null?gD:typeof t=="function"?vD:_D)(i,t,n??"")):go(this.node(),i)}function go(i,t){return i.style.getPropertyValue(t)||xS(i).getComputedStyle(i,null).getPropertyValue(t)}function yD(i){return function(){delete this[i]}}function SD(i,t){return function(){this[i]=t}}function MD(i,t){return function(){var n=t.apply(this,arguments);n==null?delete this[i]:this[i]=n}}function ED(i,t){return arguments.length>1?this.each((t==null?yD:typeof t=="function"?MD:SD)(i,t)):this.node()[i]}function yS(i){return i.trim().split(/^|\s+/)}function Vm(i){return i.classList||new SS(i)}function SS(i){this._node=i,this._names=yS(i.getAttribute("class")||"")}SS.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function MS(i,t){for(var n=Vm(i),r=-1,o=t.length;++r<o;)n.add(t[r])}function ES(i,t){for(var n=Vm(i),r=-1,o=t.length;++r<o;)n.remove(t[r])}function bD(i){return function(){MS(this,i)}}function TD(i){return function(){ES(this,i)}}function AD(i,t){return function(){(t.apply(this,arguments)?MS:ES)(this,i)}}function wD(i,t){var n=yS(i+"");if(arguments.length<2){for(var r=Vm(this.node()),o=-1,u=n.length;++o<u;)if(!r.contains(n[o]))return!1;return!0}return this.each((typeof t=="function"?AD:t?bD:TD)(n,t))}function RD(){this.textContent=""}function CD(i){return function(){this.textContent=i}}function DD(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function UD(i){return arguments.length?this.each(i==null?RD:(typeof i=="function"?DD:CD)(i)):this.node().textContent}function ND(){this.innerHTML=""}function LD(i){return function(){this.innerHTML=i}}function OD(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function PD(i){return arguments.length?this.each(i==null?ND:(typeof i=="function"?OD:LD)(i)):this.node().innerHTML}function zD(){this.nextSibling&&this.parentNode.appendChild(this)}function FD(){return this.each(zD)}function BD(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ID(){return this.each(BD)}function HD(i){var t=typeof i=="function"?i:pS(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function GD(){return null}function VD(i,t){var n=typeof i=="function"?i:pS(i),r=t==null?GD:typeof t=="function"?t:Gm(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function kD(){var i=this.parentNode;i&&i.removeChild(this)}function XD(){return this.each(kD)}function WD(){var i=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function YD(){var i=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function qD(i){return this.select(i?YD:WD)}function jD(i){return arguments.length?this.property("__data__",i):this.node().__data__}function ZD(i){return function(t){i.call(this,t,this.__data__)}}function KD(i){return i.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function QD(i){return function(){var t=this.__on;if(t){for(var n=0,r=-1,o=t.length,u;n<o;++n)u=t[n],(!i.type||u.type===i.type)&&u.name===i.name?this.removeEventListener(u.type,u.listener,u.options):t[++r]=u;++r?t.length=r:delete this.__on}}}function $D(i,t,n){return function(){var r=this.__on,o,u=ZD(t);if(r){for(var c=0,h=r.length;c<h;++c)if((o=r[c]).type===i.type&&o.name===i.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=u,o.options=n),o.value=t;return}}this.addEventListener(i.type,u,n),o={type:i.type,name:i.name,value:t,listener:u,options:n},r?r.push(o):this.__on=[o]}}function JD(i,t,n){var r=KD(i+""),o,u=r.length,c;if(arguments.length<2){var h=this.node().__on;if(h){for(var p=0,d=h.length,g;p<d;++p)for(o=0,g=h[p];o<u;++o)if((c=r[o]).type===g.type&&c.name===g.name)return g.value}return}for(h=t?$D:QD,o=0;o<u;++o)this.each(h(r[o],t,n));return this}function bS(i,t,n){var r=xS(i),o=r.CustomEvent;typeof o=="function"?o=new o(t,n):(o=r.document.createEvent("Event"),n?(o.initEvent(t,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(t,!1,!1)),i.dispatchEvent(o)}function t3(i,t){return function(){return bS(this,i,t)}}function e3(i,t){return function(){return bS(this,i,t.apply(this,arguments))}}function n3(i,t){return this.each((typeof t=="function"?e3:t3)(i,t))}function*i3(){for(var i=this._groups,t=0,n=i.length;t<n;++t)for(var r=i[t],o=0,u=r.length,c;o<u;++o)(c=r[o])&&(yield c)}var TS=[null];function oi(i,t){this._groups=i,this._parents=t}function Wl(){return new oi([[document.documentElement]],TS)}function a3(){return this}oi.prototype=Wl.prototype={constructor:oi,select:DC,selectAll:OC,selectChild:BC,selectChildren:VC,filter:kC,data:ZC,enter:XC,exit:QC,join:$C,merge:JC,selection:a3,order:tD,sort:eD,call:iD,nodes:aD,node:rD,size:sD,empty:oD,each:lD,attr:mD,style:xD,property:ED,classed:wD,text:UD,html:PD,raise:FD,lower:ID,append:HD,insert:VD,remove:XD,clone:qD,datum:jD,on:JD,dispatch:n3,[Symbol.iterator]:i3};function Wx(i){return typeof i=="string"?new oi([[document.querySelector(i)]],[document.documentElement]):new oi([[i]],TS)}function km(i,t,n){i.prototype=t.prototype=n,n.constructor=i}function AS(i,t){var n=Object.create(i.prototype);for(var r in t)n[r]=t[r];return n}function Yl(){}var Bl=.7,rf=1/Bl,so="\\s*([+-]?\\d+)\\s*",Il="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Vi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",r3=/^#([0-9a-f]{3,8})$/,s3=new RegExp(`^rgb\\(${so},${so},${so}\\)$`),o3=new RegExp(`^rgb\\(${Vi},${Vi},${Vi}\\)$`),l3=new RegExp(`^rgba\\(${so},${so},${so},${Il}\\)$`),u3=new RegExp(`^rgba\\(${Vi},${Vi},${Vi},${Il}\\)$`),c3=new RegExp(`^hsl\\(${Il},${Vi},${Vi}\\)$`),f3=new RegExp(`^hsla\\(${Il},${Vi},${Vi},${Il}\\)$`),Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};km(Yl,Zr,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:qx,formatHex:qx,formatHex8:h3,formatHsl:d3,formatRgb:jx,toString:jx});function qx(){return this.rgb().formatHex()}function h3(){return this.rgb().formatHex8()}function d3(){return wS(this).formatHsl()}function jx(){return this.rgb().formatRgb()}function Zr(i){var t,n;return i=(i+"").trim().toLowerCase(),(t=r3.exec(i))?(n=t[1].length,t=parseInt(t[1],16),n===6?Zx(t):n===3?new jn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Uc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Uc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=s3.exec(i))?new jn(t[1],t[2],t[3],1):(t=o3.exec(i))?new jn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=l3.exec(i))?Uc(t[1],t[2],t[3],t[4]):(t=u3.exec(i))?Uc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=c3.exec(i))?$x(t[1],t[2]/100,t[3]/100,1):(t=f3.exec(i))?$x(t[1],t[2]/100,t[3]/100,t[4]):Yx.hasOwnProperty(i)?Zx(Yx[i]):i==="transparent"?new jn(NaN,NaN,NaN,0):null}function Zx(i){return new jn(i>>16&255,i>>8&255,i&255,1)}function Uc(i,t,n,r){return r<=0&&(i=t=n=NaN),new jn(i,t,n,r)}function p3(i){return i instanceof Yl||(i=Zr(i)),i?(i=i.rgb(),new jn(i.r,i.g,i.b,i.opacity)):new jn}function _m(i,t,n,r){return arguments.length===1?p3(i):new jn(i,t,n,r??1)}function jn(i,t,n,r){this.r=+i,this.g=+t,this.b=+n,this.opacity=+r}km(jn,_m,AS(Yl,{brighter(i){return i=i==null?rf:Math.pow(rf,i),new jn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?Bl:Math.pow(Bl,i),new jn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new jn(Wr(this.r),Wr(this.g),Wr(this.b),sf(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Kx,formatHex:Kx,formatHex8:m3,formatRgb:Qx,toString:Qx}));function Kx(){return`#${Xr(this.r)}${Xr(this.g)}${Xr(this.b)}`}function m3(){return`#${Xr(this.r)}${Xr(this.g)}${Xr(this.b)}${Xr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Qx(){const i=sf(this.opacity);return`${i===1?"rgb(":"rgba("}${Wr(this.r)}, ${Wr(this.g)}, ${Wr(this.b)}${i===1?")":`, ${i})`}`}function sf(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Wr(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function Xr(i){return i=Wr(i),(i<16?"0":"")+i.toString(16)}function $x(i,t,n,r){return r<=0?i=t=n=NaN:n<=0||n>=1?i=t=NaN:t<=0&&(i=NaN),new wi(i,t,n,r)}function wS(i){if(i instanceof wi)return new wi(i.h,i.s,i.l,i.opacity);if(i instanceof Yl||(i=Zr(i)),!i)return new wi;if(i instanceof wi)return i;i=i.rgb();var t=i.r/255,n=i.g/255,r=i.b/255,o=Math.min(t,n,r),u=Math.max(t,n,r),c=NaN,h=u-o,p=(u+o)/2;return h?(t===u?c=(n-r)/h+(n<r)*6:n===u?c=(r-t)/h+2:c=(t-n)/h+4,h/=p<.5?u+o:2-u-o,c*=60):h=p>0&&p<1?0:c,new wi(c,h,p,i.opacity)}function g3(i,t,n,r){return arguments.length===1?wS(i):new wi(i,t,n,r??1)}function wi(i,t,n,r){this.h=+i,this.s=+t,this.l=+n,this.opacity=+r}km(wi,g3,AS(Yl,{brighter(i){return i=i==null?rf:Math.pow(rf,i),new wi(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Bl:Math.pow(Bl,i),new wi(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,t=isNaN(i)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,o=2*n-r;return new jn(gp(i>=240?i-240:i+120,o,r),gp(i,o,r),gp(i<120?i+240:i-120,o,r),this.opacity)},clamp(){return new wi(Jx(this.h),Nc(this.s),Nc(this.l),sf(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=sf(this.opacity);return`${i===1?"hsl(":"hsla("}${Jx(this.h)}, ${Nc(this.s)*100}%, ${Nc(this.l)*100}%${i===1?")":`, ${i})`}`}}));function Jx(i){return i=(i||0)%360,i<0?i+360:i}function Nc(i){return Math.max(0,Math.min(1,i||0))}function gp(i,t,n){return(i<60?t+(n-t)*i/60:i<180?n:i<240?t+(n-t)*(240-i)/60:t)*255}const Xm=i=>()=>i;function _3(i,t){return function(n){return i+n*t}}function v3(i,t,n){return i=Math.pow(i,n),t=Math.pow(t,n)-i,n=1/n,function(r){return Math.pow(i+r*t,n)}}function x3(i){return(i=+i)==1?RS:function(t,n){return n-t?v3(t,n,i):Xm(isNaN(t)?n:t)}}function RS(i,t){var n=t-i;return n?_3(i,n):Xm(isNaN(i)?t:i)}const of=function i(t){var n=x3(t);function r(o,u){var c=n((o=_m(o)).r,(u=_m(u)).r),h=n(o.g,u.g),p=n(o.b,u.b),d=RS(o.opacity,u.opacity);return function(g){return o.r=c(g),o.g=h(g),o.b=p(g),o.opacity=d(g),o+""}}return r.gamma=i,r}(1);function y3(i,t){t||(t=[]);var n=i?Math.min(t.length,i.length):0,r=t.slice(),o;return function(u){for(o=0;o<n;++o)r[o]=i[o]*(1-u)+t[o]*u;return r}}function S3(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function M3(i,t){var n=t?t.length:0,r=i?Math.min(n,i.length):0,o=new Array(r),u=new Array(n),c;for(c=0;c<r;++c)o[c]=Wm(i[c],t[c]);for(;c<n;++c)u[c]=t[c];return function(h){for(c=0;c<r;++c)u[c]=o[c](h);return u}}function E3(i,t){var n=new Date;return i=+i,t=+t,function(r){return n.setTime(i*(1-r)+t*r),n}}function Ai(i,t){return i=+i,t=+t,function(n){return i*(1-n)+t*n}}function b3(i,t){var n={},r={},o;(i===null||typeof i!="object")&&(i={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in i?n[o]=Wm(i[o],t[o]):r[o]=t[o];return function(u){for(o in n)r[o]=n[o](u);return r}}var vm=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,_p=new RegExp(vm.source,"g");function T3(i){return function(){return i}}function A3(i){return function(t){return i(t)+""}}function CS(i,t){var n=vm.lastIndex=_p.lastIndex=0,r,o,u,c=-1,h=[],p=[];for(i=i+"",t=t+"";(r=vm.exec(i))&&(o=_p.exec(t));)(u=o.index)>n&&(u=t.slice(n,u),h[c]?h[c]+=u:h[++c]=u),(r=r[0])===(o=o[0])?h[c]?h[c]+=o:h[++c]=o:(h[++c]=null,p.push({i:c,x:Ai(r,o)})),n=_p.lastIndex;return n<t.length&&(u=t.slice(n),h[c]?h[c]+=u:h[++c]=u),h.length<2?p[0]?A3(p[0].x):T3(t):(t=p.length,function(d){for(var g=0,v;g<t;++g)h[(v=p[g]).i]=v.x(d);return h.join("")})}function Wm(i,t){var n=typeof t,r;return t==null||n==="boolean"?Xm(t):(n==="number"?Ai:n==="string"?(r=Zr(t))?(t=r,of):CS:t instanceof Zr?of:t instanceof Date?E3:S3(t)?y3:Array.isArray(t)?M3:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?b3:Ai)(i,t)}function w3(i,t){return i=+i,t=+t,function(n){return Math.round(i*(1-n)+t*n)}}var ty=180/Math.PI,xm={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function DS(i,t,n,r,o,u){var c,h,p;return(c=Math.sqrt(i*i+t*t))&&(i/=c,t/=c),(p=i*n+t*r)&&(n-=i*p,r-=t*p),(h=Math.sqrt(n*n+r*r))&&(n/=h,r/=h,p/=h),i*r<t*n&&(i=-i,t=-t,p=-p,c=-c),{translateX:o,translateY:u,rotate:Math.atan2(t,i)*ty,skewX:Math.atan(p)*ty,scaleX:c,scaleY:h}}var Lc;function R3(i){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return t.isIdentity?xm:DS(t.a,t.b,t.c,t.d,t.e,t.f)}function C3(i){return i==null||(Lc||(Lc=document.createElementNS("http://www.w3.org/2000/svg","g")),Lc.setAttribute("transform",i),!(i=Lc.transform.baseVal.consolidate()))?xm:(i=i.matrix,DS(i.a,i.b,i.c,i.d,i.e,i.f))}function US(i,t,n,r){function o(d){return d.length?d.pop()+" ":""}function u(d,g,v,_,x,E){if(d!==v||g!==_){var b=x.push("translate(",null,t,null,n);E.push({i:b-4,x:Ai(d,v)},{i:b-2,x:Ai(g,_)})}else(v||_)&&x.push("translate("+v+t+_+n)}function c(d,g,v,_){d!==g?(d-g>180?g+=360:g-d>180&&(d+=360),_.push({i:v.push(o(v)+"rotate(",null,r)-2,x:Ai(d,g)})):g&&v.push(o(v)+"rotate("+g+r)}function h(d,g,v,_){d!==g?_.push({i:v.push(o(v)+"skewX(",null,r)-2,x:Ai(d,g)}):g&&v.push(o(v)+"skewX("+g+r)}function p(d,g,v,_,x,E){if(d!==v||g!==_){var b=x.push(o(x)+"scale(",null,",",null,")");E.push({i:b-4,x:Ai(d,v)},{i:b-2,x:Ai(g,_)})}else(v!==1||_!==1)&&x.push(o(x)+"scale("+v+","+_+")")}return function(d,g){var v=[],_=[];return d=i(d),g=i(g),u(d.translateX,d.translateY,g.translateX,g.translateY,v,_),c(d.rotate,g.rotate,v,_),h(d.skewX,g.skewX,v,_),p(d.scaleX,d.scaleY,g.scaleX,g.scaleY,v,_),d=g=null,function(x){for(var E=-1,b=_.length,S;++E<b;)v[(S=_[E]).i]=S.x(x);return v.join("")}}}var D3=US(R3,"px, ","px)","deg)"),U3=US(C3,", ",")",")"),_o=0,Ul=0,Tl=0,NS=1e3,lf,Nl,uf=0,Kr=0,Ef=0,Hl=typeof performance=="object"&&performance.now?performance:Date,LS=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Ym(){return Kr||(LS(N3),Kr=Hl.now()+Ef)}function N3(){Kr=0}function cf(){this._call=this._time=this._next=null}cf.prototype=OS.prototype={constructor:cf,restart:function(i,t,n){if(typeof i!="function")throw new TypeError("callback is not a function");n=(n==null?Ym():+n)+(t==null?0:+t),!this._next&&Nl!==this&&(Nl?Nl._next=this:lf=this,Nl=this),this._call=i,this._time=n,ym()},stop:function(){this._call&&(this._call=null,this._time=1/0,ym())}};function OS(i,t,n){var r=new cf;return r.restart(i,t,n),r}function L3(){Ym(),++_o;for(var i=lf,t;i;)(t=Kr-i._time)>=0&&i._call.call(void 0,t),i=i._next;--_o}function ey(){Kr=(uf=Hl.now())+Ef,_o=Ul=0;try{L3()}finally{_o=0,P3(),Kr=0}}function O3(){var i=Hl.now(),t=i-uf;t>NS&&(Ef-=t,uf=i)}function P3(){for(var i,t=lf,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),i=t,t=t._next):(n=t._next,t._next=null,t=i?i._next=n:lf=n);Nl=i,ym(r)}function ym(i){if(!_o){Ul&&(Ul=clearTimeout(Ul));var t=i-Kr;t>24?(i<1/0&&(Ul=setTimeout(ey,i-Hl.now()-Ef)),Tl&&(Tl=clearInterval(Tl))):(Tl||(uf=Hl.now(),Tl=setInterval(O3,NS)),_o=1,LS(ey))}}function ny(i,t,n){var r=new cf;return t=t==null?0:+t,r.restart(o=>{r.stop(),i(o+t)},t,n),r}var z3=dS("start","end","cancel","interrupt"),F3=[],PS=0,iy=1,Sm=2,qc=3,ay=4,Mm=5,jc=6;function bf(i,t,n,r,o,u){var c=i.__transition;if(!c)i.__transition={};else if(n in c)return;B3(i,n,{name:t,index:r,group:o,on:z3,tween:F3,time:u.time,delay:u.delay,duration:u.duration,ease:u.ease,timer:null,state:PS})}function qm(i,t){var n=Ni(i,t);if(n.state>PS)throw new Error("too late; already scheduled");return n}function ki(i,t){var n=Ni(i,t);if(n.state>qc)throw new Error("too late; already running");return n}function Ni(i,t){var n=i.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function B3(i,t,n){var r=i.__transition,o;r[t]=n,n.timer=OS(u,0,n.time);function u(d){n.state=iy,n.timer.restart(c,n.delay,n.time),n.delay<=d&&c(d-n.delay)}function c(d){var g,v,_,x;if(n.state!==iy)return p();for(g in r)if(x=r[g],x.name===n.name){if(x.state===qc)return ny(c);x.state===ay?(x.state=jc,x.timer.stop(),x.on.call("interrupt",i,i.__data__,x.index,x.group),delete r[g]):+g<t&&(x.state=jc,x.timer.stop(),x.on.call("cancel",i,i.__data__,x.index,x.group),delete r[g])}if(ny(function(){n.state===qc&&(n.state=ay,n.timer.restart(h,n.delay,n.time),h(d))}),n.state=Sm,n.on.call("start",i,i.__data__,n.index,n.group),n.state===Sm){for(n.state=qc,o=new Array(_=n.tween.length),g=0,v=-1;g<_;++g)(x=n.tween[g].value.call(i,i.__data__,n.index,n.group))&&(o[++v]=x);o.length=v+1}}function h(d){for(var g=d<n.duration?n.ease.call(null,d/n.duration):(n.timer.restart(p),n.state=Mm,1),v=-1,_=o.length;++v<_;)o[v].call(i,g);n.state===Mm&&(n.on.call("end",i,i.__data__,n.index,n.group),p())}function p(){n.state=jc,n.timer.stop(),delete r[t];for(var d in r)return;delete i.__transition}}function I3(i,t){var n=i.__transition,r,o,u=!0,c;if(n){t=t==null?null:t+"";for(c in n){if((r=n[c]).name!==t){u=!1;continue}o=r.state>Sm&&r.state<Mm,r.state=jc,r.timer.stop(),r.on.call(o?"interrupt":"cancel",i,i.__data__,r.index,r.group),delete n[c]}u&&delete i.__transition}}function H3(i){return this.each(function(){I3(this,i)})}function G3(i,t){var n,r;return function(){var o=ki(this,i),u=o.tween;if(u!==n){r=n=u;for(var c=0,h=r.length;c<h;++c)if(r[c].name===t){r=r.slice(),r.splice(c,1);break}}o.tween=r}}function V3(i,t,n){var r,o;if(typeof n!="function")throw new Error;return function(){var u=ki(this,i),c=u.tween;if(c!==r){o=(r=c).slice();for(var h={name:t,value:n},p=0,d=o.length;p<d;++p)if(o[p].name===t){o[p]=h;break}p===d&&o.push(h)}u.tween=o}}function k3(i,t){var n=this._id;if(i+="",arguments.length<2){for(var r=Ni(this.node(),n).tween,o=0,u=r.length,c;o<u;++o)if((c=r[o]).name===i)return c.value;return null}return this.each((t==null?G3:V3)(n,i,t))}function jm(i,t,n){var r=i._id;return i.each(function(){var o=ki(this,r);(o.value||(o.value={}))[t]=n.apply(this,arguments)}),function(o){return Ni(o,r).value[t]}}function zS(i,t){var n;return(typeof t=="number"?Ai:t instanceof Zr?of:(n=Zr(t))?(t=n,of):CS)(i,t)}function X3(i){return function(){this.removeAttribute(i)}}function W3(i){return function(){this.removeAttributeNS(i.space,i.local)}}function Y3(i,t,n){var r,o=n+"",u;return function(){var c=this.getAttribute(i);return c===o?null:c===r?u:u=t(r=c,n)}}function q3(i,t,n){var r,o=n+"",u;return function(){var c=this.getAttributeNS(i.space,i.local);return c===o?null:c===r?u:u=t(r=c,n)}}function j3(i,t,n){var r,o,u;return function(){var c,h=n(this),p;return h==null?void this.removeAttribute(i):(c=this.getAttribute(i),p=h+"",c===p?null:c===r&&p===o?u:(o=p,u=t(r=c,h)))}}function Z3(i,t,n){var r,o,u;return function(){var c,h=n(this),p;return h==null?void this.removeAttributeNS(i.space,i.local):(c=this.getAttributeNS(i.space,i.local),p=h+"",c===p?null:c===r&&p===o?u:(o=p,u=t(r=c,h)))}}function K3(i,t){var n=Mf(i),r=n==="transform"?U3:zS;return this.attrTween(i,typeof t=="function"?(n.local?Z3:j3)(n,r,jm(this,"attr."+i,t)):t==null?(n.local?W3:X3)(n):(n.local?q3:Y3)(n,r,t))}function Q3(i,t){return function(n){this.setAttribute(i,t.call(this,n))}}function $3(i,t){return function(n){this.setAttributeNS(i.space,i.local,t.call(this,n))}}function J3(i,t){var n,r;function o(){var u=t.apply(this,arguments);return u!==r&&(n=(r=u)&&$3(i,u)),n}return o._value=t,o}function tU(i,t){var n,r;function o(){var u=t.apply(this,arguments);return u!==r&&(n=(r=u)&&Q3(i,u)),n}return o._value=t,o}function eU(i,t){var n="attr."+i;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=Mf(i);return this.tween(n,(r.local?J3:tU)(r,t))}function nU(i,t){return function(){qm(this,i).delay=+t.apply(this,arguments)}}function iU(i,t){return t=+t,function(){qm(this,i).delay=t}}function aU(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?nU:iU)(t,i)):Ni(this.node(),t).delay}function rU(i,t){return function(){ki(this,i).duration=+t.apply(this,arguments)}}function sU(i,t){return t=+t,function(){ki(this,i).duration=t}}function oU(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?rU:sU)(t,i)):Ni(this.node(),t).duration}function lU(i,t){if(typeof t!="function")throw new Error;return function(){ki(this,i).ease=t}}function uU(i){var t=this._id;return arguments.length?this.each(lU(t,i)):Ni(this.node(),t).ease}function cU(i,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;ki(this,i).ease=n}}function fU(i){if(typeof i!="function")throw new Error;return this.each(cU(this._id,i))}function hU(i){typeof i!="function"&&(i=gS(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var u=t[o],c=u.length,h=r[o]=[],p,d=0;d<c;++d)(p=u[d])&&i.call(p,p.__data__,d,u)&&h.push(p);return new Ta(r,this._parents,this._name,this._id)}function dU(i){if(i._id!==this._id)throw new Error;for(var t=this._groups,n=i._groups,r=t.length,o=n.length,u=Math.min(r,o),c=new Array(r),h=0;h<u;++h)for(var p=t[h],d=n[h],g=p.length,v=c[h]=new Array(g),_,x=0;x<g;++x)(_=p[x]||d[x])&&(v[x]=_);for(;h<r;++h)c[h]=t[h];return new Ta(c,this._parents,this._name,this._id)}function pU(i){return(i+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function mU(i,t,n){var r,o,u=pU(t)?qm:ki;return function(){var c=u(this,i),h=c.on;h!==r&&(o=(r=h).copy()).on(t,n),c.on=o}}function gU(i,t){var n=this._id;return arguments.length<2?Ni(this.node(),n).on.on(i):this.each(mU(n,i,t))}function _U(i){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==i)return;t&&t.removeChild(this)}}function vU(){return this.on("end.remove",_U(this._id))}function xU(i){var t=this._name,n=this._id;typeof i!="function"&&(i=Gm(i));for(var r=this._groups,o=r.length,u=new Array(o),c=0;c<o;++c)for(var h=r[c],p=h.length,d=u[c]=new Array(p),g,v,_=0;_<p;++_)(g=h[_])&&(v=i.call(g,g.__data__,_,h))&&("__data__"in g&&(v.__data__=g.__data__),d[_]=v,bf(d[_],t,n,_,d,Ni(g,n)));return new Ta(u,this._parents,t,n)}function yU(i){var t=this._name,n=this._id;typeof i!="function"&&(i=mS(i));for(var r=this._groups,o=r.length,u=[],c=[],h=0;h<o;++h)for(var p=r[h],d=p.length,g,v=0;v<d;++v)if(g=p[v]){for(var _=i.call(g,g.__data__,v,p),x,E=Ni(g,n),b=0,S=_.length;b<S;++b)(x=_[b])&&bf(x,t,n,b,_,E);u.push(_),c.push(g)}return new Ta(u,c,t,n)}var SU=Wl.prototype.constructor;function MU(){return new SU(this._groups,this._parents)}function EU(i,t){var n,r,o;return function(){var u=go(this,i),c=(this.style.removeProperty(i),go(this,i));return u===c?null:u===n&&c===r?o:o=t(n=u,r=c)}}function FS(i){return function(){this.style.removeProperty(i)}}function bU(i,t,n){var r,o=n+"",u;return function(){var c=go(this,i);return c===o?null:c===r?u:u=t(r=c,n)}}function TU(i,t,n){var r,o,u;return function(){var c=go(this,i),h=n(this),p=h+"";return h==null&&(p=h=(this.style.removeProperty(i),go(this,i))),c===p?null:c===r&&p===o?u:(o=p,u=t(r=c,h))}}function AU(i,t){var n,r,o,u="style."+t,c="end."+u,h;return function(){var p=ki(this,i),d=p.on,g=p.value[u]==null?h||(h=FS(t)):void 0;(d!==n||o!==g)&&(r=(n=d).copy()).on(c,o=g),p.on=r}}function wU(i,t,n){var r=(i+="")=="transform"?D3:zS;return t==null?this.styleTween(i,EU(i,r)).on("end.style."+i,FS(i)):typeof t=="function"?this.styleTween(i,TU(i,r,jm(this,"style."+i,t))).each(AU(this._id,i)):this.styleTween(i,bU(i,r,t),n).on("end.style."+i,null)}function RU(i,t,n){return function(r){this.style.setProperty(i,t.call(this,r),n)}}function CU(i,t,n){var r,o;function u(){var c=t.apply(this,arguments);return c!==o&&(r=(o=c)&&RU(i,c,n)),r}return u._value=t,u}function DU(i,t,n){var r="style."+(i+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,CU(i,t,n??""))}function UU(i){return function(){this.textContent=i}}function NU(i){return function(){var t=i(this);this.textContent=t??""}}function LU(i){return this.tween("text",typeof i=="function"?NU(jm(this,"text",i)):UU(i==null?"":i+""))}function OU(i){return function(t){this.textContent=i.call(this,t)}}function PU(i){var t,n;function r(){var o=i.apply(this,arguments);return o!==n&&(t=(n=o)&&OU(o)),t}return r._value=i,r}function zU(i){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(i==null)return this.tween(t,null);if(typeof i!="function")throw new Error;return this.tween(t,PU(i))}function FU(){for(var i=this._name,t=this._id,n=BS(),r=this._groups,o=r.length,u=0;u<o;++u)for(var c=r[u],h=c.length,p,d=0;d<h;++d)if(p=c[d]){var g=Ni(p,t);bf(p,i,n,d,c,{time:g.time+g.delay+g.duration,delay:0,duration:g.duration,ease:g.ease})}return new Ta(r,this._parents,i,n)}function BU(){var i,t,n=this,r=n._id,o=n.size();return new Promise(function(u,c){var h={value:c},p={value:function(){--o===0&&u()}};n.each(function(){var d=ki(this,r),g=d.on;g!==i&&(t=(i=g).copy(),t._.cancel.push(h),t._.interrupt.push(h),t._.end.push(p)),d.on=t}),o===0&&u()})}var IU=0;function Ta(i,t,n,r){this._groups=i,this._parents=t,this._name=n,this._id=r}function BS(){return++IU}var ma=Wl.prototype;Ta.prototype={constructor:Ta,select:xU,selectAll:yU,selectChild:ma.selectChild,selectChildren:ma.selectChildren,filter:hU,merge:dU,selection:MU,transition:FU,call:ma.call,nodes:ma.nodes,node:ma.node,size:ma.size,empty:ma.empty,each:ma.each,on:gU,attr:K3,attrTween:eU,style:wU,styleTween:DU,text:LU,textTween:zU,remove:vU,tween:k3,delay:aU,duration:oU,ease:uU,easeVarying:fU,end:BU,[Symbol.iterator]:ma[Symbol.iterator]};function HU(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var GU={time:null,delay:0,duration:250,ease:HU};function VU(i,t){for(var n;!(n=i.__transition)||!(n=n[t]);)if(!(i=i.parentNode))throw new Error(`transition ${t} not found`);return n}function kU(i){var t,n;i instanceof Ta?(t=i._id,i=i._name):(t=BS(),(n=GU).time=Ym(),i=i==null?null:i+"");for(var r=this._groups,o=r.length,u=0;u<o;++u)for(var c=r[u],h=c.length,p,d=0;d<h;++d)(p=c[d])&&bf(p,i,t,d,c,n||VU(p,t));return new Ta(r,this._parents,i,t)}Wl.prototype.interrupt=H3;Wl.prototype.transition=kU;const Em=Math.PI,bm=2*Em,Ir=1e-6,XU=bm-Ir;function IS(i){this._+=i[0];for(let t=1,n=i.length;t<n;++t)this._+=arguments[t]+i[t]}function WU(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return IS;const n=10**t;return function(r){this._+=r[0];for(let o=1,u=r.length;o<u;++o)this._+=Math.round(arguments[o]*n)/n+r[o]}}class YU{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?IS:WU(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,o){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+o}`}bezierCurveTo(t,n,r,o,u,c){this._append`C${+t},${+n},${+r},${+o},${this._x1=+u},${this._y1=+c}`}arcTo(t,n,r,o,u){if(t=+t,n=+n,r=+r,o=+o,u=+u,u<0)throw new Error(`negative radius: ${u}`);let c=this._x1,h=this._y1,p=r-t,d=o-n,g=c-t,v=h-n,_=g*g+v*v;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(_>Ir)if(!(Math.abs(v*p-d*g)>Ir)||!u)this._append`L${this._x1=t},${this._y1=n}`;else{let x=r-c,E=o-h,b=p*p+d*d,S=x*x+E*E,y=Math.sqrt(b),L=Math.sqrt(_),N=u*Math.tan((Em-Math.acos((b+_-S)/(2*y*L)))/2),w=N/L,I=N/y;Math.abs(w-1)>Ir&&this._append`L${t+w*g},${n+w*v}`,this._append`A${u},${u},0,0,${+(v*x>g*E)},${this._x1=t+I*p},${this._y1=n+I*d}`}}arc(t,n,r,o,u,c){if(t=+t,n=+n,r=+r,c=!!c,r<0)throw new Error(`negative radius: ${r}`);let h=r*Math.cos(o),p=r*Math.sin(o),d=t+h,g=n+p,v=1^c,_=c?o-u:u-o;this._x1===null?this._append`M${d},${g}`:(Math.abs(this._x1-d)>Ir||Math.abs(this._y1-g)>Ir)&&this._append`L${d},${g}`,r&&(_<0&&(_=_%bm+bm),_>XU?this._append`A${r},${r},0,1,${v},${t-h},${n-p}A${r},${r},0,1,${v},${this._x1=d},${this._y1=g}`:_>Ir&&this._append`A${r},${r},0,${+(_>=Em)},${v},${this._x1=t+r*Math.cos(u)},${this._y1=n+r*Math.sin(u)}`)}rect(t,n,r,o){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+o}h${-r}Z`}toString(){return this._}}function qU(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function ff(i,t){if((n=(i=t?i.toExponential(t-1):i.toExponential()).indexOf("e"))<0)return null;var n,r=i.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+i.slice(n+1)]}function vo(i){return i=ff(Math.abs(i)),i?i[1]:NaN}function jU(i,t){return function(n,r){for(var o=n.length,u=[],c=0,h=i[0],p=0;o>0&&h>0&&(p+h+1>r&&(h=Math.max(1,r-p)),u.push(n.substring(o-=h,o+h)),!((p+=h+1)>r));)h=i[c=(c+1)%i.length];return u.reverse().join(t)}}function ZU(i){return function(t){return t.replace(/[0-9]/g,function(n){return i[+n]})}}var KU=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function hf(i){if(!(t=KU.exec(i)))throw new Error("invalid format: "+i);var t;return new Zm({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}hf.prototype=Zm.prototype;function Zm(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}Zm.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function QU(i){t:for(var t=i.length,n=1,r=-1,o;n<t;++n)switch(i[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+i[n])break t;r>0&&(r=0);break}return r>0?i.slice(0,r)+i.slice(o+1):i}var HS;function $U(i,t){var n=ff(i,t);if(!n)return i+"";var r=n[0],o=n[1],u=o-(HS=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,c=r.length;return u===c?r:u>c?r+new Array(u-c+1).join("0"):u>0?r.slice(0,u)+"."+r.slice(u):"0."+new Array(1-u).join("0")+ff(i,Math.max(0,t+u-1))[0]}function ry(i,t){var n=ff(i,t);if(!n)return i+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const sy={"%":(i,t)=>(i*100).toFixed(t),b:i=>Math.round(i).toString(2),c:i=>i+"",d:qU,e:(i,t)=>i.toExponential(t),f:(i,t)=>i.toFixed(t),g:(i,t)=>i.toPrecision(t),o:i=>Math.round(i).toString(8),p:(i,t)=>ry(i*100,t),r:ry,s:$U,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function oy(i){return i}var ly=Array.prototype.map,uy=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function JU(i){var t=i.grouping===void 0||i.thousands===void 0?oy:jU(ly.call(i.grouping,Number),i.thousands+""),n=i.currency===void 0?"":i.currency[0]+"",r=i.currency===void 0?"":i.currency[1]+"",o=i.decimal===void 0?".":i.decimal+"",u=i.numerals===void 0?oy:ZU(ly.call(i.numerals,String)),c=i.percent===void 0?"%":i.percent+"",h=i.minus===void 0?"−":i.minus+"",p=i.nan===void 0?"NaN":i.nan+"";function d(v){v=hf(v);var _=v.fill,x=v.align,E=v.sign,b=v.symbol,S=v.zero,y=v.width,L=v.comma,N=v.precision,w=v.trim,I=v.type;I==="n"?(L=!0,I="g"):sy[I]||(N===void 0&&(N=12),w=!0,I="g"),(S||_==="0"&&x==="=")&&(S=!0,_="0",x="=");var P=b==="$"?n:b==="#"&&/[boxX]/.test(I)?"0"+I.toLowerCase():"",B=b==="$"?r:/[%p]/.test(I)?c:"",X=sy[I],U=/[defgprs%]/.test(I);N=N===void 0?6:/[gprs]/.test(I)?Math.max(1,Math.min(21,N)):Math.max(0,Math.min(20,N));function C(H){var j=P,et=B,pt,dt,F;if(I==="c")et=X(H)+et,H="";else{H=+H;var Y=H<0||1/H<0;if(H=isNaN(H)?p:X(Math.abs(H),N),w&&(H=QU(H)),Y&&+H==0&&E!=="+"&&(Y=!1),j=(Y?E==="("?E:h:E==="-"||E==="("?"":E)+j,et=(I==="s"?uy[8+HS/3]:"")+et+(Y&&E==="("?")":""),U){for(pt=-1,dt=H.length;++pt<dt;)if(F=H.charCodeAt(pt),48>F||F>57){et=(F===46?o+H.slice(pt+1):H.slice(pt))+et,H=H.slice(0,pt);break}}}L&&!S&&(H=t(H,1/0));var W=j.length+H.length+et.length,ht=W<y?new Array(y-W+1).join(_):"";switch(L&&S&&(H=t(ht+H,ht.length?y-et.length:1/0),ht=""),x){case"<":H=j+H+et+ht;break;case"=":H=j+ht+H+et;break;case"^":H=ht.slice(0,W=ht.length>>1)+j+H+et+ht.slice(W);break;default:H=ht+j+H+et;break}return u(H)}return C.toString=function(){return v+""},C}function g(v,_){var x=d((v=hf(v),v.type="f",v)),E=Math.max(-8,Math.min(8,Math.floor(vo(_)/3)))*3,b=Math.pow(10,-E),S=uy[8+E/3];return function(y){return x(b*y)+S}}return{format:d,formatPrefix:g}}var Oc,GS,VS;tN({thousands:",",grouping:[3],currency:["$",""]});function tN(i){return Oc=JU(i),GS=Oc.format,VS=Oc.formatPrefix,Oc}function eN(i){return Math.max(0,-vo(Math.abs(i)))}function nN(i,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(vo(t)/3)))*3-vo(Math.abs(i)))}function iN(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,vo(t)-vo(i))+1}function kS(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}function aN(i){return function(){return i}}function rN(i){return+i}var cy=[0,1];function eo(i){return i}function Tm(i,t){return(t-=i=+i)?function(n){return(n-i)/t}:aN(isNaN(t)?NaN:.5)}function sN(i,t){var n;return i>t&&(n=i,i=t,t=n),function(r){return Math.max(i,Math.min(t,r))}}function oN(i,t,n){var r=i[0],o=i[1],u=t[0],c=t[1];return o<r?(r=Tm(o,r),u=n(c,u)):(r=Tm(r,o),u=n(u,c)),function(h){return u(r(h))}}function lN(i,t,n){var r=Math.min(i.length,t.length)-1,o=new Array(r),u=new Array(r),c=-1;for(i[r]<i[0]&&(i=i.slice().reverse(),t=t.slice().reverse());++c<r;)o[c]=Tm(i[c],i[c+1]),u[c]=n(t[c],t[c+1]);return function(h){var p=cS(i,h,1,r)-1;return u[p](o[p](h))}}function XS(i,t){return t.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function uN(){var i=cy,t=cy,n=Wm,r,o,u,c=eo,h,p,d;function g(){var _=Math.min(i.length,t.length);return c!==eo&&(c=sN(i[0],i[_-1])),h=_>2?lN:oN,p=d=null,v}function v(_){return _==null||isNaN(_=+_)?u:(p||(p=h(i.map(r),t,n)))(r(c(_)))}return v.invert=function(_){return c(o((d||(d=h(t,i.map(r),Ai)))(_)))},v.domain=function(_){return arguments.length?(i=Array.from(_,rN),g()):i.slice()},v.range=function(_){return arguments.length?(t=Array.from(_),g()):t.slice()},v.rangeRound=function(_){return t=Array.from(_),n=w3,g()},v.clamp=function(_){return arguments.length?(c=_?!0:eo,g()):c!==eo},v.interpolate=function(_){return arguments.length?(n=_,g()):n},v.unknown=function(_){return arguments.length?(u=_,v):u},function(_,x){return r=_,o=x,g()}}function WS(){return uN()(eo,eo)}function cN(i,t,n,r){var o=pm(i,t,n),u;switch(r=hf(r??",f"),r.type){case"s":{var c=Math.max(Math.abs(i),Math.abs(t));return r.precision==null&&!isNaN(u=nN(o,c))&&(r.precision=u),VS(r,c)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(u=iN(o,Math.max(Math.abs(i),Math.abs(t))))&&(r.precision=u-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(u=eN(o))&&(r.precision=u-(r.type==="%")*2);break}}return GS(r)}function fN(i){var t=i.domain;return i.ticks=function(n){var r=t();return fS(r[0],r[r.length-1],n??10)},i.tickFormat=function(n,r){var o=t();return cN(o[0],o[o.length-1],n??10,r)},i.nice=function(n){n==null&&(n=10);var r=t(),o=0,u=r.length-1,c=r[o],h=r[u],p,d,g=10;for(h<c&&(d=c,c=h,h=d,d=o,o=u,u=d);g-- >0;){if(d=mo(c,h,n),d===p)return r[o]=c,r[u]=h,t(r);if(d>0)c=Math.floor(c/d)*d,h=Math.ceil(h/d)*d;else if(d<0)c=Math.ceil(c*d)/d,h=Math.floor(h*d)/d;else break;p=d}return i},i}function YS(){var i=WS();return i.copy=function(){return XS(i,YS())},kS.apply(i,arguments),fN(i)}function hN(i,t){i=i.slice();var n=0,r=i.length-1,o=i[n],u=i[r],c;return u<o&&(c=n,n=r,r=c,c=o,o=u,u=c),i[n]=t.floor(o),i[r]=t.ceil(u),i}const vp=new Date,xp=new Date;function xn(i,t,n,r){function o(u){return i(u=arguments.length===0?new Date:new Date(+u)),u}return o.floor=u=>(i(u=new Date(+u)),u),o.ceil=u=>(i(u=new Date(u-1)),t(u,1),i(u),u),o.round=u=>{const c=o(u),h=o.ceil(u);return u-c<h-u?c:h},o.offset=(u,c)=>(t(u=new Date(+u),c==null?1:Math.floor(c)),u),o.range=(u,c,h)=>{const p=[];if(u=o.ceil(u),h=h==null?1:Math.floor(h),!(u<c)||!(h>0))return p;let d;do p.push(d=new Date(+u)),t(u,h),i(u);while(d<u&&u<c);return p},o.filter=u=>xn(c=>{if(c>=c)for(;i(c),!u(c);)c.setTime(c-1)},(c,h)=>{if(c>=c)if(h<0)for(;++h<=0;)for(;t(c,-1),!u(c););else for(;--h>=0;)for(;t(c,1),!u(c););}),n&&(o.count=(u,c)=>(vp.setTime(+u),xp.setTime(+c),i(vp),i(xp),Math.floor(n(vp,xp))),o.every=u=>(u=Math.floor(u),!isFinite(u)||!(u>0)?null:u>1?o.filter(r?c=>r(c)%u===0:c=>o.count(0,c)%u===0):o)),o}const df=xn(()=>{},(i,t)=>{i.setTime(+i+t)},(i,t)=>t-i);df.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?xn(t=>{t.setTime(Math.floor(t/i)*i)},(t,n)=>{t.setTime(+t+n*i)},(t,n)=>(n-t)/i):df);df.range;const ya=1e3,vi=ya*60,Sa=vi*60,Aa=Sa*24,Km=Aa*7,fy=Aa*30,yp=Aa*365,no=xn(i=>{i.setTime(i-i.getMilliseconds())},(i,t)=>{i.setTime(+i+t*ya)},(i,t)=>(t-i)/ya,i=>i.getUTCSeconds());no.range;const Qm=xn(i=>{i.setTime(i-i.getMilliseconds()-i.getSeconds()*ya)},(i,t)=>{i.setTime(+i+t*vi)},(i,t)=>(t-i)/vi,i=>i.getMinutes());Qm.range;const dN=xn(i=>{i.setUTCSeconds(0,0)},(i,t)=>{i.setTime(+i+t*vi)},(i,t)=>(t-i)/vi,i=>i.getUTCMinutes());dN.range;const Tf=xn(i=>{i.setTime(i-i.getMilliseconds()-i.getSeconds()*ya-i.getMinutes()*vi)},(i,t)=>{i.setTime(+i+t*Sa)},(i,t)=>(t-i)/Sa,i=>i.getHours());Tf.range;const pN=xn(i=>{i.setUTCMinutes(0,0,0)},(i,t)=>{i.setTime(+i+t*Sa)},(i,t)=>(t-i)/Sa,i=>i.getUTCHours());pN.range;const ql=xn(i=>i.setHours(0,0,0,0),(i,t)=>i.setDate(i.getDate()+t),(i,t)=>(t-i-(t.getTimezoneOffset()-i.getTimezoneOffset())*vi)/Aa,i=>i.getDate()-1);ql.range;const $m=xn(i=>{i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCDate(i.getUTCDate()+t)},(i,t)=>(t-i)/Aa,i=>i.getUTCDate()-1);$m.range;const mN=xn(i=>{i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCDate(i.getUTCDate()+t)},(i,t)=>(t-i)/Aa,i=>Math.floor(i/Aa));mN.range;function Jr(i){return xn(t=>{t.setDate(t.getDate()-(t.getDay()+7-i)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*vi)/Km)}const Af=Jr(0),pf=Jr(1),gN=Jr(2),_N=Jr(3),xo=Jr(4),vN=Jr(5),xN=Jr(6);Af.range;pf.range;gN.range;_N.range;xo.range;vN.range;xN.range;function ts(i){return xn(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-i)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Km)}const qS=ts(0),mf=ts(1),yN=ts(2),SN=ts(3),yo=ts(4),MN=ts(5),EN=ts(6);qS.range;mf.range;yN.range;SN.range;yo.range;MN.range;EN.range;const Jm=xn(i=>{i.setDate(1),i.setHours(0,0,0,0)},(i,t)=>{i.setMonth(i.getMonth()+t)},(i,t)=>t.getMonth()-i.getMonth()+(t.getFullYear()-i.getFullYear())*12,i=>i.getMonth());Jm.range;const bN=xn(i=>{i.setUTCDate(1),i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCMonth(i.getUTCMonth()+t)},(i,t)=>t.getUTCMonth()-i.getUTCMonth()+(t.getUTCFullYear()-i.getUTCFullYear())*12,i=>i.getUTCMonth());bN.range;const wa=xn(i=>{i.setMonth(0,1),i.setHours(0,0,0,0)},(i,t)=>{i.setFullYear(i.getFullYear()+t)},(i,t)=>t.getFullYear()-i.getFullYear(),i=>i.getFullYear());wa.every=i=>!isFinite(i=Math.floor(i))||!(i>0)?null:xn(t=>{t.setFullYear(Math.floor(t.getFullYear()/i)*i),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*i)});wa.range;const Qr=xn(i=>{i.setUTCMonth(0,1),i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCFullYear(i.getUTCFullYear()+t)},(i,t)=>t.getUTCFullYear()-i.getUTCFullYear(),i=>i.getUTCFullYear());Qr.every=i=>!isFinite(i=Math.floor(i))||!(i>0)?null:xn(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/i)*i),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*i)});Qr.range;function TN(i,t,n,r,o,u){const c=[[no,1,ya],[no,5,5*ya],[no,15,15*ya],[no,30,30*ya],[u,1,vi],[u,5,5*vi],[u,15,15*vi],[u,30,30*vi],[o,1,Sa],[o,3,3*Sa],[o,6,6*Sa],[o,12,12*Sa],[r,1,Aa],[r,2,2*Aa],[n,1,Km],[t,1,fy],[t,3,3*fy],[i,1,yp]];function h(d,g,v){const _=g<d;_&&([d,g]=[g,d]);const x=v&&typeof v.range=="function"?v:p(d,g,v),E=x?x.range(d,+g+1):[];return _?E.reverse():E}function p(d,g,v){const _=Math.abs(g-d)/v,x=Hm(([,,S])=>S).right(c,_);if(x===c.length)return i.every(pm(d/yp,g/yp,v));if(x===0)return df.every(Math.max(pm(d,g,v),1));const[E,b]=c[_/c[x-1][2]<c[x][2]/_?x-1:x];return E.every(b)}return[h,p]}const[AN,wN]=TN(wa,Jm,Af,ql,Tf,Qm);function Sp(i){if(0<=i.y&&i.y<100){var t=new Date(-1,i.m,i.d,i.H,i.M,i.S,i.L);return t.setFullYear(i.y),t}return new Date(i.y,i.m,i.d,i.H,i.M,i.S,i.L)}function Mp(i){if(0<=i.y&&i.y<100){var t=new Date(Date.UTC(-1,i.m,i.d,i.H,i.M,i.S,i.L));return t.setUTCFullYear(i.y),t}return new Date(Date.UTC(i.y,i.m,i.d,i.H,i.M,i.S,i.L))}function Al(i,t,n){return{y:i,m:t,d:n,H:0,M:0,S:0,L:0}}function RN(i){var t=i.dateTime,n=i.date,r=i.time,o=i.periods,u=i.days,c=i.shortDays,h=i.months,p=i.shortMonths,d=wl(o),g=Rl(o),v=wl(u),_=Rl(u),x=wl(c),E=Rl(c),b=wl(h),S=Rl(h),y=wl(p),L=Rl(p),N={a:Y,A:W,b:ht,B:D,c:null,d:_y,e:_y,f:QN,g:oL,G:uL,H:jN,I:ZN,j:KN,L:jS,m:$N,M:JN,p:it,q:wt,Q:yy,s:Sy,S:tL,u:eL,U:nL,V:iL,w:aL,W:rL,x:null,X:null,y:sL,Y:lL,Z:cL,"%":xy},w={a:_t,A:J,b:St,B:nt,c:null,d:vy,e:vy,f:pL,g:bL,G:AL,H:fL,I:hL,j:dL,L:KS,m:mL,M:gL,p:Et,q:Ut,Q:yy,s:Sy,S:_L,u:vL,U:xL,V:yL,w:SL,W:ML,x:null,X:null,y:EL,Y:TL,Z:wL,"%":xy},I={a:C,A:H,b:j,B:et,c:pt,d:my,e:my,f:XN,g:py,G:dy,H:gy,I:gy,j:HN,L:kN,m:IN,M:GN,p:U,q:BN,Q:YN,s:qN,S:VN,u:LN,U:ON,V:PN,w:NN,W:zN,x:dt,X:F,y:py,Y:dy,Z:FN,"%":WN};N.x=P(n,N),N.X=P(r,N),N.c=P(t,N),w.x=P(n,w),w.X=P(r,w),w.c=P(t,w);function P(vt,st){return function(bt){var Q=[],zt=-1,z=0,Zt=vt.length,Gt,Yt,qt;for(bt instanceof Date||(bt=new Date(+bt));++zt<Zt;)vt.charCodeAt(zt)===37&&(Q.push(vt.slice(z,zt)),(Yt=hy[Gt=vt.charAt(++zt)])!=null?Gt=vt.charAt(++zt):Yt=Gt==="e"?" ":"0",(qt=st[Gt])&&(Gt=qt(bt,Yt)),Q.push(Gt),z=zt+1);return Q.push(vt.slice(z,zt)),Q.join("")}}function B(vt,st){return function(bt){var Q=Al(1900,void 0,1),zt=X(Q,vt,bt+="",0),z,Zt;if(zt!=bt.length)return null;if("Q"in Q)return new Date(Q.Q);if("s"in Q)return new Date(Q.s*1e3+("L"in Q?Q.L:0));if(st&&!("Z"in Q)&&(Q.Z=0),"p"in Q&&(Q.H=Q.H%12+Q.p*12),Q.m===void 0&&(Q.m="q"in Q?Q.q:0),"V"in Q){if(Q.V<1||Q.V>53)return null;"w"in Q||(Q.w=1),"Z"in Q?(z=Mp(Al(Q.y,0,1)),Zt=z.getUTCDay(),z=Zt>4||Zt===0?mf.ceil(z):mf(z),z=$m.offset(z,(Q.V-1)*7),Q.y=z.getUTCFullYear(),Q.m=z.getUTCMonth(),Q.d=z.getUTCDate()+(Q.w+6)%7):(z=Sp(Al(Q.y,0,1)),Zt=z.getDay(),z=Zt>4||Zt===0?pf.ceil(z):pf(z),z=ql.offset(z,(Q.V-1)*7),Q.y=z.getFullYear(),Q.m=z.getMonth(),Q.d=z.getDate()+(Q.w+6)%7)}else("W"in Q||"U"in Q)&&("w"in Q||(Q.w="u"in Q?Q.u%7:"W"in Q?1:0),Zt="Z"in Q?Mp(Al(Q.y,0,1)).getUTCDay():Sp(Al(Q.y,0,1)).getDay(),Q.m=0,Q.d="W"in Q?(Q.w+6)%7+Q.W*7-(Zt+5)%7:Q.w+Q.U*7-(Zt+6)%7);return"Z"in Q?(Q.H+=Q.Z/100|0,Q.M+=Q.Z%100,Mp(Q)):Sp(Q)}}function X(vt,st,bt,Q){for(var zt=0,z=st.length,Zt=bt.length,Gt,Yt;zt<z;){if(Q>=Zt)return-1;if(Gt=st.charCodeAt(zt++),Gt===37){if(Gt=st.charAt(zt++),Yt=I[Gt in hy?st.charAt(zt++):Gt],!Yt||(Q=Yt(vt,bt,Q))<0)return-1}else if(Gt!=bt.charCodeAt(Q++))return-1}return Q}function U(vt,st,bt){var Q=d.exec(st.slice(bt));return Q?(vt.p=g.get(Q[0].toLowerCase()),bt+Q[0].length):-1}function C(vt,st,bt){var Q=x.exec(st.slice(bt));return Q?(vt.w=E.get(Q[0].toLowerCase()),bt+Q[0].length):-1}function H(vt,st,bt){var Q=v.exec(st.slice(bt));return Q?(vt.w=_.get(Q[0].toLowerCase()),bt+Q[0].length):-1}function j(vt,st,bt){var Q=y.exec(st.slice(bt));return Q?(vt.m=L.get(Q[0].toLowerCase()),bt+Q[0].length):-1}function et(vt,st,bt){var Q=b.exec(st.slice(bt));return Q?(vt.m=S.get(Q[0].toLowerCase()),bt+Q[0].length):-1}function pt(vt,st,bt){return X(vt,t,st,bt)}function dt(vt,st,bt){return X(vt,n,st,bt)}function F(vt,st,bt){return X(vt,r,st,bt)}function Y(vt){return c[vt.getDay()]}function W(vt){return u[vt.getDay()]}function ht(vt){return p[vt.getMonth()]}function D(vt){return h[vt.getMonth()]}function it(vt){return o[+(vt.getHours()>=12)]}function wt(vt){return 1+~~(vt.getMonth()/3)}function _t(vt){return c[vt.getUTCDay()]}function J(vt){return u[vt.getUTCDay()]}function St(vt){return p[vt.getUTCMonth()]}function nt(vt){return h[vt.getUTCMonth()]}function Et(vt){return o[+(vt.getUTCHours()>=12)]}function Ut(vt){return 1+~~(vt.getUTCMonth()/3)}return{format:function(vt){var st=P(vt+="",N);return st.toString=function(){return vt},st},parse:function(vt){var st=B(vt+="",!1);return st.toString=function(){return vt},st},utcFormat:function(vt){var st=P(vt+="",w);return st.toString=function(){return vt},st},utcParse:function(vt){var st=B(vt+="",!0);return st.toString=function(){return vt},st}}}var hy={"-":"",_:" ",0:"0"},Tn=/^\s*\d+/,CN=/^%/,DN=/[\\^$*+?|[\]().{}]/g;function Le(i,t,n){var r=i<0?"-":"",o=(r?-i:i)+"",u=o.length;return r+(u<n?new Array(n-u+1).join(t)+o:o)}function UN(i){return i.replace(DN,"\\$&")}function wl(i){return new RegExp("^(?:"+i.map(UN).join("|")+")","i")}function Rl(i){return new Map(i.map((t,n)=>[t.toLowerCase(),n]))}function NN(i,t,n){var r=Tn.exec(t.slice(n,n+1));return r?(i.w=+r[0],n+r[0].length):-1}function LN(i,t,n){var r=Tn.exec(t.slice(n,n+1));return r?(i.u=+r[0],n+r[0].length):-1}function ON(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.U=+r[0],n+r[0].length):-1}function PN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.V=+r[0],n+r[0].length):-1}function zN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.W=+r[0],n+r[0].length):-1}function dy(i,t,n){var r=Tn.exec(t.slice(n,n+4));return r?(i.y=+r[0],n+r[0].length):-1}function py(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function FN(i,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(i.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function BN(i,t,n){var r=Tn.exec(t.slice(n,n+1));return r?(i.q=r[0]*3-3,n+r[0].length):-1}function IN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.m=r[0]-1,n+r[0].length):-1}function my(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.d=+r[0],n+r[0].length):-1}function HN(i,t,n){var r=Tn.exec(t.slice(n,n+3));return r?(i.m=0,i.d=+r[0],n+r[0].length):-1}function gy(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.H=+r[0],n+r[0].length):-1}function GN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.M=+r[0],n+r[0].length):-1}function VN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.S=+r[0],n+r[0].length):-1}function kN(i,t,n){var r=Tn.exec(t.slice(n,n+3));return r?(i.L=+r[0],n+r[0].length):-1}function XN(i,t,n){var r=Tn.exec(t.slice(n,n+6));return r?(i.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function WN(i,t,n){var r=CN.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function YN(i,t,n){var r=Tn.exec(t.slice(n));return r?(i.Q=+r[0],n+r[0].length):-1}function qN(i,t,n){var r=Tn.exec(t.slice(n));return r?(i.s=+r[0],n+r[0].length):-1}function _y(i,t){return Le(i.getDate(),t,2)}function jN(i,t){return Le(i.getHours(),t,2)}function ZN(i,t){return Le(i.getHours()%12||12,t,2)}function KN(i,t){return Le(1+ql.count(wa(i),i),t,3)}function jS(i,t){return Le(i.getMilliseconds(),t,3)}function QN(i,t){return jS(i,t)+"000"}function $N(i,t){return Le(i.getMonth()+1,t,2)}function JN(i,t){return Le(i.getMinutes(),t,2)}function tL(i,t){return Le(i.getSeconds(),t,2)}function eL(i){var t=i.getDay();return t===0?7:t}function nL(i,t){return Le(Af.count(wa(i)-1,i),t,2)}function ZS(i){var t=i.getDay();return t>=4||t===0?xo(i):xo.ceil(i)}function iL(i,t){return i=ZS(i),Le(xo.count(wa(i),i)+(wa(i).getDay()===4),t,2)}function aL(i){return i.getDay()}function rL(i,t){return Le(pf.count(wa(i)-1,i),t,2)}function sL(i,t){return Le(i.getFullYear()%100,t,2)}function oL(i,t){return i=ZS(i),Le(i.getFullYear()%100,t,2)}function lL(i,t){return Le(i.getFullYear()%1e4,t,4)}function uL(i,t){var n=i.getDay();return i=n>=4||n===0?xo(i):xo.ceil(i),Le(i.getFullYear()%1e4,t,4)}function cL(i){var t=i.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Le(t/60|0,"0",2)+Le(t%60,"0",2)}function vy(i,t){return Le(i.getUTCDate(),t,2)}function fL(i,t){return Le(i.getUTCHours(),t,2)}function hL(i,t){return Le(i.getUTCHours()%12||12,t,2)}function dL(i,t){return Le(1+$m.count(Qr(i),i),t,3)}function KS(i,t){return Le(i.getUTCMilliseconds(),t,3)}function pL(i,t){return KS(i,t)+"000"}function mL(i,t){return Le(i.getUTCMonth()+1,t,2)}function gL(i,t){return Le(i.getUTCMinutes(),t,2)}function _L(i,t){return Le(i.getUTCSeconds(),t,2)}function vL(i){var t=i.getUTCDay();return t===0?7:t}function xL(i,t){return Le(qS.count(Qr(i)-1,i),t,2)}function QS(i){var t=i.getUTCDay();return t>=4||t===0?yo(i):yo.ceil(i)}function yL(i,t){return i=QS(i),Le(yo.count(Qr(i),i)+(Qr(i).getUTCDay()===4),t,2)}function SL(i){return i.getUTCDay()}function ML(i,t){return Le(mf.count(Qr(i)-1,i),t,2)}function EL(i,t){return Le(i.getUTCFullYear()%100,t,2)}function bL(i,t){return i=QS(i),Le(i.getUTCFullYear()%100,t,2)}function TL(i,t){return Le(i.getUTCFullYear()%1e4,t,4)}function AL(i,t){var n=i.getUTCDay();return i=n>=4||n===0?yo(i):yo.ceil(i),Le(i.getUTCFullYear()%1e4,t,4)}function wL(){return"+0000"}function xy(){return"%"}function yy(i){return+i}function Sy(i){return Math.floor(+i/1e3)}var Ks,$S;RL({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function RL(i){return Ks=RN(i),$S=Ks.format,Ks.parse,Ks.utcFormat,Ks.utcParse,Ks}function CL(i){return new Date(i)}function DL(i){return i instanceof Date?+i:+new Date(+i)}function JS(i,t,n,r,o,u,c,h,p,d){var g=WS(),v=g.invert,_=g.domain,x=d(".%L"),E=d(":%S"),b=d("%I:%M"),S=d("%I %p"),y=d("%a %d"),L=d("%b %d"),N=d("%B"),w=d("%Y");function I(P){return(p(P)<P?x:h(P)<P?E:c(P)<P?b:u(P)<P?S:r(P)<P?o(P)<P?y:L:n(P)<P?N:w)(P)}return g.invert=function(P){return new Date(v(P))},g.domain=function(P){return arguments.length?_(Array.from(P,DL)):_().map(CL)},g.ticks=function(P){var B=_();return i(B[0],B[B.length-1],P??10)},g.tickFormat=function(P,B){return B==null?I:d(B)},g.nice=function(P){var B=_();return(!P||typeof P.range!="function")&&(P=t(B[0],B[B.length-1],P??10)),P?_(hN(B,P)):g},g.copy=function(){return XS(g,JS(i,t,n,r,o,u,c,h,p,d))},g}function UL(){return kS.apply(JS(AN,wN,wa,Jm,Af,ql,Tf,Qm,no,$S).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Qs(i){return function(){return i}}function NL(i){let t=3;return i.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return i},()=>new YU(t)}function LL(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function tM(i){this._context=i}tM.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function OL(i){return new tM(i)}function PL(i){return i[0]}function zL(i){return i[1]}function FL(i,t){var n=Qs(!0),r=null,o=OL,u=null,c=NL(h);i=typeof i=="function"?i:i===void 0?PL:Qs(i),t=typeof t=="function"?t:t===void 0?zL:Qs(t);function h(p){var d,g=(p=LL(p)).length,v,_=!1,x;for(r==null&&(u=o(x=c())),d=0;d<=g;++d)!(d<g&&n(v=p[d],d,p))===_&&((_=!_)?u.lineStart():u.lineEnd()),_&&u.point(+i(v,d,p),+t(v,d,p));if(x)return u=null,x+""||null}return h.x=function(p){return arguments.length?(i=typeof p=="function"?p:Qs(+p),h):i},h.y=function(p){return arguments.length?(t=typeof p=="function"?p:Qs(+p),h):t},h.defined=function(p){return arguments.length?(n=typeof p=="function"?p:Qs(!!p),h):n},h.curve=function(p){return arguments.length?(o=p,r!=null&&(u=o(r)),h):o},h.context=function(p){return arguments.length?(p==null?r=u=null:u=o(r=p),h):r},h}function My(i){return i<0?-1:1}function Ey(i,t,n){var r=i._x1-i._x0,o=t-i._x1,u=(i._y1-i._y0)/(r||o<0&&-0),c=(n-i._y1)/(o||r<0&&-0),h=(u*o+c*r)/(r+o);return(My(u)+My(c))*Math.min(Math.abs(u),Math.abs(c),.5*Math.abs(h))||0}function by(i,t){var n=i._x1-i._x0;return n?(3*(i._y1-i._y0)/n-t)/2:t}function Ep(i,t,n){var r=i._x0,o=i._y0,u=i._x1,c=i._y1,h=(u-r)/3;i._context.bezierCurveTo(r+h,o+h*t,u-h,c-h*n,u,c)}function gf(i){this._context=i}gf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Ep(this,this._t0,by(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var n=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,Ep(this,by(this,n=Ey(this,i,t)),n);break;default:Ep(this,this._t0,n=Ey(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=n}}};Object.create(gf.prototype).point=function(i,t){gf.prototype.point.call(this,t,i)};function BL(i){return new gf(i)}function Ll(i,t,n){this.k=i,this.x=t,this.y=n}Ll.prototype={constructor:Ll,scale:function(i){return i===1?this:new Ll(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new Ll(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Ll.prototype;const IL=({data:i,currentTime:t,colorSequence:n})=>{const r=Wt.useRef(),[o,u]=Wt.useState([]);return Wt.useEffect(()=>{if(!i||!t)return;const h=[...i].sort((b,S)=>new Date(b.creation_time)-new Date(S.creation_time)).map(b=>new Date(b.creation_time)),[p,d]=Wc(h),g=Tf.range(p,d,1),E=pC().domain([p,d]).value(b=>b).thresholds(g)(h).map(b=>({date:b.x0,count:b.length})).filter(b=>b.date<=t);u(E)},[i,t]),Wt.useEffect(()=>{if(!i||o.length===0)return;const c={top:20,right:20,bottom:30,left:50},h=600-c.left-c.right,p=200-c.top-c.bottom;let d=Wx(r.current).select("svg");d.empty()&&(d=Wx(r.current).append("svg").attr("viewBox",`0 0 ${h+c.left+c.right} ${p+c.top+c.bottom}`).attr("preserveAspectRatio","xMinYMin meet").classed("w-full h-auto",!0),d.append("defs").append("clipPath").attr("id","clip").append("rect").attr("class","clip-rect").attr("x",0).attr("y",0).attr("width",0).attr("height",p),d.append("g").attr("class","chart-group").attr("transform",`translate(${c.left},${c.top})`));const g=d.select("g.chart-group"),_=[...i].sort((w,I)=>new Date(w.creation_time)-new Date(I.creation_time)).map(w=>new Date(w.creation_time)),x=mC(_),E=Gx(_),b=UL().domain([x,E]).range([0,h]),S=YS().domain([0,Gx(o,w=>w.count)]).nice().range([p,0]);g.selectAll(".x-axis").remove(),g.selectAll(".y-axis").remove(),g.append("g").attr("class","x-axis").attr("transform",`translate(0,${p})`).call(MC(b).ticks(5).tickSizeOuter(0)).selectAll("text").style("fill","#fff"),g.append("g").attr("class","y-axis").call(EC(S).ticks(5)).selectAll("text").style("fill","#fff");const y=FL().x(w=>b(w.date)).y(w=>S(w.count)).curve(BL);let L=g.select("path.line-path");L.empty()&&(L=g.append("path").attr("class","line-path").attr("fill","none").attr("stroke","#06b6d4").attr("stroke-width",2).attr("clip-path","url(#clip)")),L.datum(o).attr("d",y),d.select("defs").select("rect.clip-rect").transition().duration(2e3).attr("width",h);const N=g.selectAll("circle").data(o,w=>w.date);N.enter().append("circle").attr("cx",w=>b(w.date)).attr("cy",w=>S(w.count)).attr("r",0).attr("fill","#06b6d4").transition().delay(w=>b(w.date)/h*2e3).duration(500).attr("r",2),N.exit().remove()},[o,n,i]),gt.jsxs("div",{className:"w-full h-auto bg-black/50 p-4 rounded-lg border border-cyan-500 shadow-lg mt-4",children:[gt.jsx("h3",{className:"text-white font-bold mb-2",children:"Retweet Bursts"}),gt.jsx("div",{ref:r})]})};function bp(i){const t=i.toLocaleString("en-US",{month:"long"}),n=i.getDate(),r=i.getFullYear(),o=n%10===1&&n!==11?"st":n%10===2&&n!==12?"nd":n%10===3&&n!==13?"rd":"th";let u=i.getHours();const c=u>=12?"PM":"AM";u=u%12||12;const h=String(i.getMinutes()).padStart(2,"0"),p=String(i.getSeconds()).padStart(2,"0");return`${t} ${n}${o}, ${r}, ${String(u).padStart(2,"0")}:${h}:${p} ${c}`}const HL=i=>{const t=[];for(let o=0;o<i;o++){const u=Math.floor(360/i*o);t.push(`hsl(${u}, 50%, 50%)`)}return t},GL=["#440154","#472D7B","#3B518B","#2C718E","#21918C","#27AD81","#5CC863","#BADC31"],VL=["#00204C","#143362","#1D5796","#2C75A0","#3D8C8E","#60B56B","#AAD338","#FDE725"],kL=["#0D0887","#4B03A5","#7A04A6","#A61386","#D4316E","#F1605D","#FD8C3E","#FCCE25"],XL=["#000004","#1B0C41","#4A0C6B","#781C6D","#A52C60","#CF4446","#ED6925","#FB9B06"];function Pc(i,t){return Array.from({length:t},(n,r)=>{const o=Math.round(r*(i.length-1)/(t-1));return i[o]})}const Ty={default:i=>Pc(GL,i),protanopia:i=>Pc(VL,i),deuteranopia:i=>Pc(kL,i),tritanopia:i=>Pc(XL,i),party:()=>[]},WL={FDP:"#FFED00","B90/GRÜNE":"#1FAF12",SPD:"#FF0000",CDU:"#000000",AfD:"#009DE0",BSW:"#fca311",CSU:"#415a77",LINKE:"#DF007D"},YL=({onSwitch:i})=>{const t=Wt.useRef(null),[n,r]=Wt.useState(!0),[o,u]=Wt.useState(""),[c,h]=Wt.useState(null),[p,d]=Wt.useState(!1),[g,v]=Wt.useState(0),[_,x]=Wt.useState(!1),E=Wt.useRef(null),b=Wt.useRef(null),S=Wt.useRef(null),y=Wt.useRef(null),L=Wt.useRef({x:0,y:0}),N=Wt.useRef({x:0,y:0}),w=Wt.useRef(0),I=Wt.useRef(2e3),P=Wt.useRef([]),B=Wt.useRef({min:null,max:null}),X=Wt.useRef(null),U=Wt.useRef(null),[C,H]=Wt.useState(null),[j,et]=Wt.useState(null),[pt,dt]=Wt.useState(1),[F,Y]=Wt.useState("default"),[W,ht]=Wt.useState([]),[D,it]=Wt.useState("en"),wt=Array.from({length:20},(st,bt)=>bt+1),_t={en:{titleLine1:"From Tweet to Trend:",titleLine2:"Visualizing Political Retweet Networks",simulation:"Retweet Simulation",currentTime:"Current Time:",originalBy:"Original tweet by",selectPost:"Select a post to see its retweet activity:",legend:"LEGEND",colorScheme:"Color Scheme",nodeSize:"Node Size",play:"Play",pause:"Pause",switchViz:"Explore Bursts & Network",return:"Return",earliestLatest:"Earliest → Latest",lowFollower:"Low Follower Count",highFollower:"High Follower Count",optPartyColors:"Political party colors",optDefault:"Default",optProtanopia:"Protanopia-friendly",optDeuteranopia:"Deuteranopia-friendly",optTritanopia:"Tritanopia-friendly",titles:{1:"Attention Please",2:"Conservatives serve Europe",3:"Hope for Tomorrow",4:"Election Allegations",5:"Catalyst for Change",6:"Show Your Colors",7:"Advent Interrupted",8:"For Reasons",9:"Suspending Documentation",10:"Tax Relief",11:"Coalition Opportunity",12:"Small Shifts, Big Impact",13:"Voting Paradox",14:"Economic Turnaround Now",15:"",16:"",17:"",18:"",19:"",20:""}},de:{titleLine1:"Vom Tweet zum Trend:",titleLine2:"Politische Retweet-Netzwerke visualisieren",simulation:"Simulation der Retweets",currentTime:"Aktuelle Zeit:",originalBy:"Original-Tweet von",selectPost:"Wählen Sie einen Beitrag, um Retweet-Aktivität zu sehen:",legend:"LEGENDE",colorScheme:"Farb-Schema",nodeSize:"Knotengröße",play:"Abspielen",pause:"Pause",switchViz:"Bursts & Netzwerk erkunden",return:"Return",earliestLatest:"Früheste → Neueste",lowFollower:"Geringe Follower-Zahl",highFollower:"Hohe Follower-Zahl",optPartyColors:"Parteifarben",optDefault:"Standard",optProtanopia:"Protanopie-freundlich",optDeuteranopia:"Deuteranopie-freundlich",optTritanopia:"Tritanopie-freundlich",titles:{1:"Aufmerksamkeit erbeten",2:"Konservative dienen Europa",3:"Hoffnung für morgen",4:"Wahlvorwürfe",5:"Katalysator für Veränderung",6:"Zeigt eure Farben",7:"Unterbrochener Advent",8:"Aus Gründen",9:"Aussetzung der Dokumentation",10:"Steuererleichterungen",11:"Koalitionschance",12:"Kleine Veränderungen, große Wirkung",13:"Wahlparadox",14:"Wirtschaftliche Trendwende jetzt",15:"",16:"",17:"",18:"",19:"",20:""}}};Wt.useEffect(()=>{r(!0),fetch(`https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_${pt}.json`).then(st=>st.json()).then(st=>{const bt=[...st].sort((zt,z)=>new Date(zt.creation_time)-new Date(z.creation_time));et(bt);const Q=new Date(bt[0].creation_time);h(Q),u(bp(Q)),r(!1)}).catch(st=>{console.error("Error loading JSON data:",st),r(!1)})},[pt]),Wt.useEffect(()=>{fetch("https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_original_tweets.json").then(st=>st.json()).then(st=>{const bt=st.reduce((Q,zt)=>(Q[zt.platform_post_id]=zt,Q),{});H(bt)}).catch(st=>{console.error("Error loading original tweet details:",st)})},[]),Wt.useEffect(()=>{if(!j)return;const st=new jy;st.background=new be(0),b.current=st;const bt=new ri(75,window.innerWidth/window.innerHeight,.1,1e3);bt.position.z=15,S.current=bt;const Q=new sS({antialias:!0});Q.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(Q.domElement),y.current=Q;const zt=new uS(bt,Q.domElement);zt.enableDamping=!0,zt.dampingFactor=.1,zt.enableZoom=!0,zt.zoomSpeed=1.2,zt.enablePan=!0,zt.rotateSpeed=.8;const z=Dt=>{Dt.preventDefault();const ee=.05;S.current.position.z+=Dt.deltaY*ee,S.current.position.z=Math.max(5,Math.min(50,S.current.position.z))};Q.domElement.addEventListener("wheel",z,{passive:!1});const Zt=new Js;st.add(Zt);const Gt=(Dt,ee,Jt=0)=>{const pe=document.createElement("canvas"),k=pe.getContext("2d");pe.width=256,pe.height=128,k.font="12px Arial",k.fillStyle=`rgba(${Jt>>16&255}, ${Jt>>8&255}, ${Jt&255}, 1.0)`,k.fillText(Dt,0,64);const Ft=new ef(pe),ft=new zm({map:Ft}),yt=new Ky(ft);return yt.position.set(ee.x-2,ee.y+.2,ee.z),yt.scale.set(5,2.5,1),yt},Yt=new po(1,32,32),qt=new fo({color:4886754}),de=new si(Yt,qt);de.visible=!0,Zt.add(de),X.current=de;const Kt=Gt("Original Tweet by @roberthabeck",new $(0,0,0),1942002);Kt.visible=!0,Zt.add(Kt),U.current=Kt;const O=new Date(j[0].creation_time),T=new Date(j[j.length-1].creation_time);B.current={min:O,max:T};const rt=HL(70),Tt=6e4,Rt=[];let mt=[];for(let Dt=0;Dt<j.length;Dt++){const ee=j[Dt],Jt=new Date(ee.creation_time);if(Dt===0)mt.push(ee);else{const pe=new Date(j[Dt-1].creation_time);Jt-pe>Tt&&(Rt.push(mt),mt=[]),mt.push(ee)}}mt.length>0&&Rt.push(mt);const Ct=[];let Lt=0;Rt.forEach((Dt,ee)=>{const Jt=ee/Rt.length*Math.PI*2;Dt.forEach((pe,k)=>{Lt++;const Ft=new Date(pe.creation_time),yt=2+(Dt.length>1?k/(Dt.length-1):.5)*10,Bt=Math.cos(Jt)*yt,It=Math.sin(Jt)*yt,Fe=.3+parseFloat(pe.follower_count)/1e6*.7,tn=new po(Fe,32,32),Te=rt[Lt%rt.length],Fn=new fo({color:new be(Te),transparent:!0,opacity:0}),Ze=new si(tn,Fn);Ze.position.set(Bt,It,0),Ze.userData={data:pe,time:Ft,visible:!1};const Ke=Gt(pe.dboes_name,new $(Bt,It,0),16777215);Ke.visible=!1;const hn=k===0?new $(0,0,0):Ct[Ct.length-1].node.position,Dn=new Fm({color:new be(Te),transparent:!0,opacity:0}),Xi=new xi().setFromPoints([hn,new $(Bt,It,0)]),dr=new $y(Xi,Dn);Zt.add(Ze),Zt.add(Ke),Zt.add(dr),Ct.push({node:Ze,label:Ke,line:dr,time:Ft})})}),P.current=Ct,h(B.current.min),u(bp(B.current.min)),r(!1);const Pt=Dt=>{document.addEventListener("mousemove",ce),document.addEventListener("mouseup",Nt),L.current.x=Dt.clientX,L.current.y=Dt.clientY},ce=Dt=>{const ee=Dt.clientX-L.current.x,Jt=Dt.clientY-L.current.y;L.current.x=Dt.clientX,L.current.y=Dt.clientY,N.current.y+=ee*.01,N.current.x+=Jt*.01},Nt=()=>{document.removeEventListener("mousemove",ce),document.removeEventListener("mouseup",Nt)};Q.domElement.addEventListener("mousedown",Pt);const Xt=()=>{S.current&&y.current&&(S.current.aspect=window.innerWidth/window.innerHeight,S.current.updateProjectionMatrix(),y.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Xt),Q.render(st,bt);const $t=()=>{const Dt=t.current.clientWidth,ee=t.current.clientHeight;Q.setSize(Dt,ee),bt.aspect=Dt/ee,bt.updateProjectionMatrix()};window.addEventListener("resize",$t),$t();const te=()=>{Zt.rotation.x+=(N.current.x-Zt.rotation.x)*.05,Zt.rotation.y+=(N.current.y-Zt.rotation.y)*.05,y.current&&b.current&&S.current&&y.current.render(b.current,S.current),zt.update(),Q.render(st,bt),E.current=requestAnimationFrame(te)};return E.current=requestAnimationFrame(te),()=>{window.removeEventListener("resize",$t),window.removeEventListener("resize",Xt),cancelAnimationFrame(E.current),Q.domElement.removeEventListener("mousedown",Pt),Q.domElement.removeEventListener("wheel",z),document.removeEventListener("mousemove",ce),document.removeEventListener("mouseup",Nt),t.current&&Q.domElement&&t.current.removeChild(Q.domElement),Yt.dispose(),qt.dispose(),Ct.forEach(Dt=>{Dt.node.geometry&&Dt.node.geometry.dispose(),Dt.node.material&&Dt.node.material.dispose(),Dt.line.geometry&&Dt.line.geometry.dispose(),Dt.line.material&&Dt.line.material.dispose()})}},[j]),Wt.useEffect(()=>{let st;return p&&(w.current=Date.now(),X.current&&(X.current.visible=!0),U.current&&(U.current.visible=!0),st=setInterval(()=>{const{min:bt,max:Q}=B.current;if(!bt||!Q)return;const z=(Date.now()-w.current)*I.current,Zt=new Date(bt.getTime()+z),Gt=Q.getTime()-bt.getTime(),Yt=Zt.getTime()-bt.getTime(),qt=Math.min(Yt/Gt*100,100);h(Zt),u(bp(Zt)),v(qt),P.current.forEach(de=>{if(Zt>=de.time&&!de.node.userData.visible){de.node.material.opacity=1,de.label.visible=!0,de.line.material.opacity=.7,de.node.userData.visible=!0;const Kt=new $(1.5,1.5,1.5);de.node.scale.copy(Kt),setTimeout(()=>{de.node.scale.set(1,1,1)},300)}}),Zt>=Q&&(d(!1),clearInterval(st))},100)),()=>{st&&clearInterval(st)}},[p]),Wt.useEffect(()=>{if(!j)return;const st=new tS,bt=new fe,Q=zt=>{bt.x=zt.clientX/window.innerWidth*2-1,bt.y=-(zt.clientY/window.innerHeight)*2+1,st.setFromCamera(bt,S.current);const z=P.current.map(Gt=>Gt.node),Zt=st.intersectObjects(z);if(Zt.length>0){const Gt=Zt[0].object;P.current.forEach(Yt=>{Yt.node===Gt?(Yt.node.material.opacity=1,Yt.label.material&&(Yt.label.material.opacity=1)):(Yt.node.material.opacity=.3,Yt.label.material&&(Yt.label.material.opacity=.3))})}else P.current.forEach(Gt=>{Gt.node.userData.visible?(Gt.node.material.opacity=1,Gt.label.material&&(Gt.label.material.opacity=1)):(Gt.node.material.opacity=0,Gt.label.material&&(Gt.label.material.opacity=0))})};return window.addEventListener("mousemove",Q),()=>{window.removeEventListener("mousemove",Q)}},[j]),Wt.useEffect(()=>{X.current&&U.current&&(X.current.visible=!0,U.current.visible=!0)},[pt]);const J=()=>{p?d(!1):(g>=100&&(P.current.forEach(st=>{st.node.material.opacity=0,st.label.visible=!1,st.line.material.opacity=0,st.node.userData.visible=!1}),u(B.current.min),v(0)),d(!0))},St=j&&C&&j[0]?C[j[0].shared_post_id]:null;Wt.useEffect(()=>{var st;if(j&&C&&((st=j[0])!=null&&st.shared_post_id)&&U.current){const bt=j[0].shared_post_id,Q=C[bt];if(Q){const z=`Original Tweet by @${Q.platform_post_owner_name}`,Zt=document.createElement("canvas"),Gt=Zt.getContext("2d");Zt.width=256,Zt.height=128,Gt.font="12px Arial",Gt.fillStyle="rgba(29,161,242,1.0)",Gt.fillText(z,0,64);const Yt=new ef(Zt);U.current.material.map=Yt,U.current.material.needsUpdate=!0}}},[j,C]),Wt.useEffect(()=>{if(P.current.length){const st=P.current.length,bt=Ty[F](st);P.current.forEach((Q,zt)=>{const z=new be(bt[zt%bt.length]);Q.node.material.color.set(z),Q.line.material.color.set(z)})}},[F]);const nt=wt.map(st=>({id:st,label:_t[D].titles[st]||""})),vt=`linear-gradient(to right, ${(F==="party"?[...new Set(j.map(st=>st.party_color))]:Ty[F](7)).join(", ")})`;return gt.jsxs("div",{className:"w-full h-full relative bg-black",children:[gt.jsx("div",{ref:t,className:"w-full h-[50vh] mt-[50vh] md:h-screen md:mt-0"}),gt.jsxs("h2",{className:"absolute top-20 -mt-5 mr-5 md:top-5 md:mt-0 md:mr-0 left-10",children:[gt.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:_t[D].titleLine1}),gt.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:_t[D].titleLine2})]}),gt.jsx("div",{className:"absolute top-4 right-10 flex space-x-2",children:["en","de"].map(st=>gt.jsx("button",{onClick:()=>it(st),className:`px-3 py-1 rounded border ${D===st?"bg-cyan-500 text-black border-cyan-500":"bg-black text-white border-gray-600 hover:border-cyan-500"} transition`,children:st.toUpperCase()},st))}),gt.jsx("div",{className:`
    relative 
    mb-4 mt-5 
    w-full max-w-[30rem] mx-auto
    overflow-hidden
    md:overflow-visible md:px-0
    md:absolute md:bottom-80 md:left-10 md:mb-0 md:mt-0 md:w-[30rem]
  `,children:gt.jsx(IL,{data:j,currentTime:c,colorSequence:W})}),gt.jsxs("div",{className:`
       relative            /* mobile: in-flow */
       mb-4                /* mobile: gap below */
       left-10
       w-[31rem]
       md:absolute md:top-40 md:left-10  /* desktop: back to absolute */
       bg-black w-[30rem] p-6 rounded-lg border border-cyan-500 shadow-lg
     `,children:[" ",gt.jsx("div",{className:"font-bold mb-2 text-white text-xl",children:_t[D].simulation}),gt.jsxs("div",{className:"mb-2 text-white",children:[_t[D].currentTime," ",c&&c.toLocaleString()]}),gt.jsx("div",{className:"w-64 h-2 bg-gray-800 rounded-full mb-2",children:gt.jsx("div",{className:"h-full bg-cyan-500 rounded-full",style:{width:`${g}%`}})}),St&&gt.jsxs("div",{className:"text-white text-sm",children:[_t[D].originalBy," @",St.platform_post_owner_name," –"," ",j.length,j.length>1?" Accounts":" Account"]})]}),gt.jsxs("div",{className:`
        absolute top-[200px] md:top-[440px] 
        left-0 right-0 mx-auto
        md:right-10 md:left-auto
        text-left md:text-right
        py-2  
        w-full max-w-sm md:max-w-none
        `,children:[gt.jsx("div",{className:"mt-2 text-white text-sm sm:text-md md:text-lg",children:_t[D].selectPost}),gt.jsx("div",{className:"text-cyan-500 grid grid-cols-2 gap-2 md:flex md:flex-col md:items-end",children:nt.map(st=>gt.jsx("span",{onClick:()=>dt(st.id),className:`
          cursor-pointer
          ${pt===st.id?"font-bold text-lg sm:text-xl md:text-2xl":"text-sm sm:text-md md:text-lg"}
        `,children:st.label},st.id))})]}),gt.jsxs("div",{className:` relative            /* mobile: in-flow */
       mb-4                /* mobile: gap below */
       mt-5
    ml-10
    w-[30rem]
       md:absolute md:right-10 md:top-20 -mt-5 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80`,children:[" ",gt.jsx("div",{className:"font-bold mb-2 text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",children:_t[D].legend}),gt.jsx("hr",{className:"border-t-2 border-white my-2"}),gt.jsx("div",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:_t[D].colorScheme}),gt.jsxs("div",{className:"text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[gt.jsxs("div",{className:"mb-3",children:[gt.jsx("div",{className:"mb-3",children:gt.jsxs("select",{value:F,onChange:st=>Y(st.target.value),className:"p-2 bg-gray-800 text-white rounded",children:[gt.jsx("option",{value:"party",children:_t[D].optPartyColors}),gt.jsx("option",{value:"default",children:_t[D].optDefault}),gt.jsx("option",{value:"protanopia",children:_t[D].optProtanopia}),gt.jsx("option",{value:"deuteranopia",children:_t[D].optDeuteranopia}),gt.jsx("option",{value:"tritanopia",children:_t[D].optTritanopia})]})}),F==="party"?gt.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(WL).map(([st,bt])=>gt.jsxs("div",{className:"flex items-center space-x-2",children:[gt.jsx("div",{className:"w-4 h-4 border border-gray-600 rounded-sm",style:{backgroundColor:bt}}),gt.jsx("span",{className:"text-white text-sm",children:st})]},st))}):gt.jsxs(gt.Fragment,{children:[gt.jsx("div",{className:"w-full h-4 rounded",style:{background:vt}}),gt.jsx("p",{className:"mt-1 text-white",children:_t[D].earliestLatest})]})]}),gt.jsxs("div",{children:[gt.jsx("p",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:_t[D].nodeSize}),gt.jsxs("div",{className:"flex items-center space-x-2 text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[gt.jsx("div",{className:"w-4 h-4 bg-white ml-2 mr-2 rounded-full border border-cyan-500"}),gt.jsx("span",{children:_t[D].lowFollower})]}),gt.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[gt.jsx("div",{className:"w-8 h-8 bg-white rounded-full border border-cyan-500"}),gt.jsx("span",{children:_t[D].highFollower})]})]})]})]}),gt.jsxs("div",{className:`
    absolute left-1/2 transform -translate-x-1/2 top-80 mt-60
    flex space-x-4
    md:block md:transform-none md:left-auto md:translate-x-0 md:top-auto md:mt-0
  `,children:[gt.jsx("button",{onClick:J,className:`
      w-24 md:w-32
      bg-black text-white font-bold
      py-2 md:py-3 px-2 md:px-6
      rounded-lg border border-cyan-500
      shadow-lg hover:bg-gray-900
      transition-colors
      ${p?"":"pulse-once"}
      md:absolute md:bottom-10 md:left-10 md:ml-0
    `,children:p?_t[D].pause:_t[D].play}),gt.jsx("button",{onClick:i,className:`
           w-24 md:w-32
      bg-black text-white font-bold
      py-2 md:py-3 px-4 md:px-6
      rounded-lg border border-cyan-500
      shadow-lg hover:bg-gray-900
      transition-colors
      ${p?"pulse-once":""}
      md:absolute md:bottom-10 md:left-40 md:ml-4
    `,children:_t[D].return})]})]})};function qL(){const[i,t]=Wt.useState("circular"),n=()=>{t(r=>r==="circular"?"network":"circular")};return gt.jsx("div",{className:"flex flex-col-reverse md:flex-row items-center md:items-start min-h-screen",children:i==="circular"?gt.jsx(tC,{onSwitch:n}):gt.jsx(YL,{onSwitch:n})})}hb.createRoot(document.getElementById("root")).render(gt.jsx(Wt.StrictMode,{children:gt.jsx(qL,{})}));
