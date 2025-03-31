(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var _d={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function GE(){if(mv)return ll;mv=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:i,type:r,key:c,ref:o!==void 0?o:null,props:u}}return ll.Fragment=t,ll.jsx=n,ll.jsxs=n,ll}var gv;function VE(){return gv||(gv=1,_d.exports=GE()),_d.exports}var ht=VE(),vd={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function kE(){if(_v)return fe;_v=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(L,V,mt){this.props=L,this.context=V,this.refs=b,this.updater=mt||x}S.prototype.isReactComponent={},S.prototype.setState=function(L,V){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,V,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=S.prototype;function P(L,V,mt){this.props=L,this.context=V,this.refs=b,this.updater=mt||x}var D=P.prototype=new y;D.constructor=P,E(D,S.prototype),D.isPureReactComponent=!0;var w=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function B(L,V,mt,$,k,nt){return mt=nt.ref,{$$typeof:i,type:L,key:V,ref:mt!==void 0?mt:null,props:nt}}function W(L,V){return B(L.type,V,void 0,void 0,void 0,L.props)}function U(L){return typeof L=="object"&&L!==null&&L.$$typeof===i}function R(L){var V={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(mt){return V[mt]})}var I=/\/+/g;function rt(L,V){return typeof L=="object"&&L!==null&&L.key!=null?R(""+L.key):V.toString(36)}function J(){}function vt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(J,J):(L.status="pending",L.then(function(V){L.status==="pending"&&(L.status="fulfilled",L.value=V)},function(V){L.status==="pending"&&(L.status="rejected",L.reason=V)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function xt(L,V,mt,$,k){var nt=typeof L;(nt==="undefined"||nt==="boolean")&&(L=null);var ft=!1;if(L===null)ft=!0;else switch(nt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(L.$$typeof){case i:case t:ft=!0;break;case g:return ft=L._init,xt(ft(L._payload),V,mt,$,k)}}if(ft)return k=k(L),ft=$===""?"."+rt(L,0):$,w(k)?(mt="",ft!=null&&(mt=ft.replace(I,"$&/")+"/"),xt(k,V,mt,"",function(_t){return _t})):k!=null&&(U(k)&&(k=W(k,mt+(k.key==null||L&&L.key===k.key?"":(""+k.key).replace(I,"$&/")+"/")+ft)),V.push(k)),1;ft=0;var gt=$===""?".":$+":";if(w(L))for(var Rt=0;Rt<L.length;Rt++)$=L[Rt],nt=gt+rt($,Rt),ft+=xt($,V,mt,nt,k);else if(Rt=_(L),typeof Rt=="function")for(L=Rt.call(L),Rt=0;!($=L.next()).done;)$=$.value,nt=gt+rt($,Rt++),ft+=xt($,V,mt,nt,k);else if(nt==="object"){if(typeof L.then=="function")return xt(vt(L),V,mt,$,k);throw V=String(L),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ft}function F(L,V,mt){if(L==null)return L;var $=[],k=0;return xt(L,$,"","",function(nt){return V.call(mt,nt,k++)}),$}function j(L){if(L._status===-1){var V=L._result;V=V(),V.then(function(mt){(L._status===0||L._status===-1)&&(L._status=1,L._result=mt)},function(mt){(L._status===0||L._status===-1)&&(L._status=2,L._result=mt)}),L._status===-1&&(L._status=0,L._result=V)}if(L._status===1)return L._result.default;throw L._result}var q=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Tt(){}return fe.Children={map:F,forEach:function(L,V,mt){F(L,function(){V.apply(this,arguments)},mt)},count:function(L){var V=0;return F(L,function(){V++}),V},toArray:function(L){return F(L,function(V){return V})||[]},only:function(L){if(!U(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},fe.Component=S,fe.Fragment=n,fe.Profiler=o,fe.PureComponent=P,fe.StrictMode=r,fe.Suspense=p,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,fe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},fe.cache=function(L){return function(){return L.apply(null,arguments)}},fe.cloneElement=function(L,V,mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var $=E({},L.props),k=L.key,nt=void 0;if(V!=null)for(ft in V.ref!==void 0&&(nt=void 0),V.key!==void 0&&(k=""+V.key),V)!O.call(V,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&V.ref===void 0||($[ft]=V[ft]);var ft=arguments.length-2;if(ft===1)$.children=mt;else if(1<ft){for(var gt=Array(ft),Rt=0;Rt<ft;Rt++)gt[Rt]=arguments[Rt+2];$.children=gt}return B(L.type,k,void 0,void 0,nt,$)},fe.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},fe.createElement=function(L,V,mt){var $,k={},nt=null;if(V!=null)for($ in V.key!==void 0&&(nt=""+V.key),V)O.call(V,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(k[$]=V[$]);var ft=arguments.length-2;if(ft===1)k.children=mt;else if(1<ft){for(var gt=Array(ft),Rt=0;Rt<ft;Rt++)gt[Rt]=arguments[Rt+2];k.children=gt}if(L&&L.defaultProps)for($ in ft=L.defaultProps,ft)k[$]===void 0&&(k[$]=ft[$]);return B(L,nt,void 0,void 0,null,k)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(L){return{$$typeof:h,render:L}},fe.isValidElement=U,fe.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:j}},fe.memo=function(L,V){return{$$typeof:d,type:L,compare:V===void 0?null:V}},fe.startTransition=function(L){var V=z.T,mt={};z.T=mt;try{var $=L(),k=z.S;k!==null&&k(mt,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Tt,q)}catch(nt){q(nt)}finally{z.T=V}},fe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},fe.use=function(L){return z.H.use(L)},fe.useActionState=function(L,V,mt){return z.H.useActionState(L,V,mt)},fe.useCallback=function(L,V){return z.H.useCallback(L,V)},fe.useContext=function(L){return z.H.useContext(L)},fe.useDebugValue=function(){},fe.useDeferredValue=function(L,V){return z.H.useDeferredValue(L,V)},fe.useEffect=function(L,V,mt){var $=z.H;if(typeof mt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(L,V)},fe.useId=function(){return z.H.useId()},fe.useImperativeHandle=function(L,V,mt){return z.H.useImperativeHandle(L,V,mt)},fe.useInsertionEffect=function(L,V){return z.H.useInsertionEffect(L,V)},fe.useLayoutEffect=function(L,V){return z.H.useLayoutEffect(L,V)},fe.useMemo=function(L,V){return z.H.useMemo(L,V)},fe.useOptimistic=function(L,V){return z.H.useOptimistic(L,V)},fe.useReducer=function(L,V,mt){return z.H.useReducer(L,V,mt)},fe.useRef=function(L){return z.H.useRef(L)},fe.useState=function(L){return z.H.useState(L)},fe.useSyncExternalStore=function(L,V,mt){return z.H.useSyncExternalStore(L,V,mt)},fe.useTransition=function(){return z.H.useTransition()},fe.version="19.1.0",fe}var vv;function mm(){return vv||(vv=1,vd.exports=kE()),vd.exports}var Yt=mm(),xd={exports:{}},ul={},yd={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function XE(){return xv||(xv=1,function(i){function t(F,j){var q=F.length;F.push(j);t:for(;0<q;){var Tt=q-1>>>1,L=F[Tt];if(0<o(L,j))F[Tt]=j,F[q]=L,q=Tt;else break t}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var j=F[0],q=F.pop();if(q!==j){F[0]=q;t:for(var Tt=0,L=F.length,V=L>>>1;Tt<V;){var mt=2*(Tt+1)-1,$=F[mt],k=mt+1,nt=F[k];if(0>o($,q))k<L&&0>o(nt,$)?(F[Tt]=nt,F[k]=q,Tt=k):(F[Tt]=$,F[mt]=q,Tt=mt);else if(k<L&&0>o(nt,q))F[Tt]=nt,F[k]=q,Tt=k;else break t}}return j}function o(F,j){var q=F.sortIndex-j.sortIndex;return q!==0?q:F.id-j.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();i.unstable_now=function(){return c.now()-h}}var p=[],d=[],g=1,v=null,_=3,x=!1,E=!1,b=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var j=n(d);j!==null;){if(j.callback===null)r(d);else if(j.startTime<=F)r(d),j.sortIndex=j.expirationTime,t(p,j);else break;j=n(d)}}function z(F){if(b=!1,w(F),!E)if(n(p)!==null)E=!0,O||(O=!0,rt());else{var j=n(d);j!==null&&xt(z,j.startTime-F)}}var O=!1,B=-1,W=5,U=-1;function R(){return S?!0:!(i.unstable_now()-U<W)}function I(){if(S=!1,O){var F=i.unstable_now();U=F;var j=!0;try{t:{E=!1,b&&(b=!1,P(B),B=-1),x=!0;var q=_;try{e:{for(w(F),v=n(p);v!==null&&!(v.expirationTime>F&&R());){var Tt=v.callback;if(typeof Tt=="function"){v.callback=null,_=v.priorityLevel;var L=Tt(v.expirationTime<=F);if(F=i.unstable_now(),typeof L=="function"){v.callback=L,w(F),j=!0;break e}v===n(p)&&r(p),w(F)}else r(p);v=n(p)}if(v!==null)j=!0;else{var V=n(d);V!==null&&xt(z,V.startTime-F),j=!1}}break t}finally{v=null,_=q,x=!1}j=void 0}}finally{j?rt():O=!1}}}var rt;if(typeof D=="function")rt=function(){D(I)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,vt=J.port2;J.port1.onmessage=I,rt=function(){vt.postMessage(null)}}else rt=function(){y(I,0)};function xt(F,j){B=y(function(){F(i.unstable_now())},j)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(F){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var q=_;_=j;try{return F()}finally{_=q}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=_;_=F;try{return j()}finally{_=q}},i.unstable_scheduleCallback=function(F,j,q){var Tt=i.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Tt+q:Tt):q=Tt,F){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=q+L,F={id:g++,callback:j,priorityLevel:F,startTime:q,expirationTime:L,sortIndex:-1},q>Tt?(F.sortIndex=q,t(d,F),n(p)===null&&F===n(d)&&(b?(P(B),B=-1):b=!0,xt(z,q-Tt))):(F.sortIndex=L,t(p,F),E||x||(E=!0,O||(O=!0,rt()))),F},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(F){var j=_;return function(){var q=_;_=j;try{return F.apply(this,arguments)}finally{_=q}}}}(Sd)),Sd}var yv;function WE(){return yv||(yv=1,yd.exports=XE()),yd.exports}var Md={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function YE(){if(Sv)return Un;Sv=1;var i=mm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,g)},Un.flushSync=function(p){var d=c.T,g=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=d,r.p=g,r.d.f()}},Un.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},Un.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Un.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Un.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},Un.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Un.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},Un.requestFormReset=function(p){r.d.r(p)},Un.unstable_batchedUpdates=function(p,d){return p(d)},Un.useFormState=function(p,d,g){return c.H.useFormState(p,d,g)},Un.useFormStatus=function(){return c.H.useHostTransitionStatus()},Un.version="19.1.0",Un}var Mv;function qE(){if(Mv)return Md.exports;Mv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Md.exports=YE(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function jE(){if(Ev)return ul;Ev=1;var i=WE(),t=mm(),n=qE();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var a=e,s=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(s=a.return),e=a.return;while(e)}return a.tag===3?s:null}function c(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function p(e){var a=e.alternate;if(!a){if(a=u(e),a===null)throw Error(r(188));return a!==e?null:e}for(var s=e,l=a;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),e;if(m===l)return h(f),a;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,A=f.child;A;){if(A===s){M=!0,s=f,l=m;break}if(A===l){M=!0,l=f,s=m;break}A=A.sibling}if(!M){for(A=m.child;A;){if(A===s){M=!0,s=m,l=f;break}if(A===l){M=!0,l=m,s=f;break}A=A.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:a}function d(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=d(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),D=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case z:return"Suspense";case O:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case D:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case w:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return a=e.displayName||null,a!==null?a:vt(e.type)||"Memo";case W:a=e._payload,e=e._init;try{return vt(e(a))}catch{}}return null}var xt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Tt=[],L=-1;function V(e){return{current:e}}function mt(e){0>L||(e.current=Tt[L],Tt[L]=null,L--)}function $(e,a){L++,Tt[L]=e.current,e.current=a}var k=V(null),nt=V(null),ft=V(null),gt=V(null);function Rt(e,a){switch($(ft,a),$(nt,e),$(k,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?k_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=k_(a),e=X_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}mt(k),$(k,e)}function _t(){mt(k),mt(nt),mt(ft)}function bt(e){e.memoizedState!==null&&$(gt,e);var a=k.current,s=X_(a,e.type);a!==s&&($(nt,e),$(k,s))}function kt(e){nt.current===e&&(mt(k),mt(nt)),gt.current===e&&(mt(gt),il._currentValue=q)}var dt=Object.prototype.hasOwnProperty,Kt=i.unstable_scheduleCallback,H=i.unstable_cancelCallback,Te=i.unstable_shouldYield,te=i.unstable_requestPaint,Zt=i.unstable_now,Xt=i.unstable_getCurrentPriorityLevel,ge=i.unstable_ImmediatePriority,Ot=i.unstable_UserBlockingPriority,N=i.unstable_NormalPriority,T=i.unstable_LowPriority,tt=i.unstable_IdlePriority,St=i.log,wt=i.unstable_setDisableYieldValue,st=null,Lt=null;function Ut(e){if(typeof St=="function"&&wt(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(st,e)}catch{}}var Nt=Math.clz32?Math.clz32:Gt,ue=Math.log,Ct=Math.LN2;function Gt(e){return e>>>=0,e===0?32:31-(ue(e)/Ct|0)|0}var jt=256,$t=4194304;function Pt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ce(e,a,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=Pt(l):(M&=A,M!==0?f=Pt(M):s||(s=A&~e,s!==0&&(f=Pt(s))))):(A=l&~m,A!==0?f=Pt(A):M!==0?f=Pt(M):s||(s=l&~e,s!==0&&(f=Pt(s)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,s=a&-a,m>=s||m===32&&(s&4194048)!==0)?a:f}function re(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Oe(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var e=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),e}function Bt(){var e=$t;return $t<<=1,($t&62914560)===0&&($t=4194304),e}function pt(e){for(var a=[],s=0;31>s;s++)a.push(e);return a}function Et(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vt(e,a,s,l,f,m){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(s=M&~s;0<s;){var yt=31-Nt(s),At=1<<yt;A[yt]=0,G[yt]=-1;var ot=at[yt];if(ot!==null)for(at[yt]=null,yt=0;yt<ot.length;yt++){var lt=ot[yt];lt!==null&&(lt.lane&=-536870913)}s&=~At}l!==0&&It(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~a))}function It(e,a,s){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Nt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function le(e,a){var s=e.entangledLanes|=a;for(e=e.entanglements;s;){var l=31-Nt(s),f=1<<l;f&a|e[l]&a&&(e[l]|=a),s&=~f}}function Pe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function an(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Re(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:uv(e.type))}function Yn(e,a){var s=j.p;try{return j.p=e,a()}finally{j.p=s}}var gn=Math.random().toString(36).slice(2),un="__reactFiber$"+gn,En="__reactProps$"+gn,Fn="__reactContainer$"+gn,lr="__reactEvents$"+gn,Gl="__reactListeners$"+gn,Vl="__reactHandles$"+gn,ur="__reactResources$"+gn,ba="__reactMarker$"+gn;function Ta(e){delete e[un],delete e[En],delete e[lr],delete e[Gl],delete e[Vl]}function Gi(e){var a=e[un];if(a)return a;for(var s=e.parentNode;s;){if(a=s[Fn]||s[un]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(e=j_(e);e!==null;){if(s=e[un])return s;e=j_(e)}return a}e=s,s=e.parentNode}return null}function Vi(e){if(e=e[un]||e[Fn]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function cr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function Aa(e){var a=e[ur];return a||(a=e[ur]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function rn(e){e[ba]=!0}var kl=new Set,Xl={};function ki(e,a){C(e,a),C(e+"Capture",a)}function C(e,a){for(Xl[e]=a,e=0;e<a.length;e++)kl.add(a[e])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ut={},ct={};function Q(e){return dt.call(ct,e)?!0:dt.call(ut,e)?!1:K.test(e)?ct[e]=!0:(ut[e]=!0,!1)}function Dt(e,a,s){if(Q(a))if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+s)}}function zt(e,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+s)}}function Ft(e,a,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(a,s,""+l)}}var Wt,se;function ee(e){if(Wt===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);Wt=a&&a[1]||"",se=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+e+se}var Jt=!1;function _e(e,a){if(!e||Jt)return"";Jt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var At=function(){throw Error()};if(Object.defineProperty(At.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(At,[])}catch(lt){var ot=lt}Reflect.construct(e,[],At)}else{try{At.call()}catch(lt){ot=lt}e.call(At.prototype)}}else{try{throw Error()}catch(lt){ot=lt}(At=e())&&typeof At.catch=="function"&&At.catch(function(){})}}catch(lt){if(lt&&ot&&typeof lt.stack=="string")return[lt.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],A=m[1];if(M&&A){var G=M.split(`
`),at=A.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<at.length&&!at[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===at.length)for(l=G.length-1,f=at.length-1;1<=l&&0<=f&&G[l]!==at[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==at[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==at[f]){var yt=`
`+G[l].replace(" at new "," at ");return e.displayName&&yt.includes("<anonymous>")&&(yt=yt.replace("<anonymous>",e.displayName)),yt}while(1<=l&&0<=f);break}}}finally{Jt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ee(s):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return ee("Activity");default:return""}}function je(e){try{var a="";do a+=Ce(e),e=e.return;while(e);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ne(e){var a=Ee(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),l=""+e[a];if(!e.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(e,a,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Qe(e){e._valueTracker||(e._valueTracker=ne(e))}function we(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var s=a.getValue(),l="";return e&&(l=Ee(e)?e.checked?"true":"false":e.value),e=l,e!==s?(a.setValue(e),!0):!1}function Rn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wa=/[\n"\\]/g;function We(e){return e.replace(wa,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Xi(e,a,s,l,f,m,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),a!=null?M==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Me(a)):e.value!==""+Me(a)&&(e.value=""+Me(a)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),a!=null?Cn(e,M,Me(a)):s!=null?Cn(e,M,Me(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Me(A):e.removeAttribute("name")}function ke(e,a,s,l,f,m,M,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;s=s!=null?""+Me(s):"",a=a!=null?""+Me(a):s,A||a===e.value||(e.value=a),e.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Cn(e,a,s){a==="number"&&Rn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function cn(e,a,s,l){if(e=e.options,a){a={};for(var f=0;f<s.length;f++)a["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=a.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Me(s),a=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}a!==null||e[f].disabled||(a=e[f])}a!==null&&(a.selected=!0)}}function _n(e,a,s){if(a!=null&&(a=""+Me(a),a!==e.value&&(e.value=a),s==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=s!=null?""+Me(s):""}function bn(e,a,s,l){if(a==null){if(l!=null){if(s!=null)throw Error(r(92));if(xt(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),a=s}s=Me(a),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Di(e,a){if(a){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=a;return}}e.textContent=a}var Wi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function km(e,a,s){var l=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,s):typeof s!="number"||s===0||Wi.has(a)?a==="float"?e.cssFloat=s:e[a]=(""+s).trim():e[a]=s+"px"}function Xm(e,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&s[f]!==l&&km(e,f,l)}else for(var m in a)a.hasOwnProperty(m)&&km(e,m,a[m])}function gf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var FS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),HS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wl(e){return HS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _f=null;function vf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zr=null,Kr=null;function Wm(e){var a=Vi(e);if(a&&(e=a.stateNode)){var s=e[En]||null;t:switch(e=a.stateNode,a.type){case"input":if(Xi(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+We(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var l=s[a];if(l!==e&&l.form===e.form){var f=l[En]||null;if(!f)throw Error(r(90));Xi(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<s.length;a++)l=s[a],l.form===e.form&&we(l)}break t;case"textarea":_n(e,s.value,s.defaultValue);break t;case"select":a=s.value,a!=null&&cn(e,!!s.multiple,a,!1)}}}var xf=!1;function Ym(e,a,s){if(xf)return e(a,s);xf=!0;try{var l=e(a);return l}finally{if(xf=!1,(Zr!==null||Kr!==null)&&(Du(),Zr&&(a=Zr,e=Kr,Kr=Zr=null,Wm(a),e)))for(a=0;a<e.length;a++)Wm(e[a])}}function go(e,a){var s=e.stateNode;if(s===null)return null;var l=s[En]||null;if(l===null)return null;s=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=!1;if(Yi)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){yf=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{yf=!1}var Ra=null,Sf=null,Yl=null;function qm(){if(Yl)return Yl;var e,a=Sf,s=a.length,l,f="value"in Ra?Ra.value:Ra.textContent,m=f.length;for(e=0;e<s&&a[e]===f[e];e++);var M=s-e;for(l=1;l<=M&&a[s-l]===f[m-l];l++);return Yl=f.slice(e,1<l?1-l:void 0)}function ql(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function jl(){return!0}function jm(){return!1}function Hn(e){function a(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?jl:jm,this.isPropagationStopped=jm,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),a}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Hn(fr),vo=g({},fr,{view:0,detail:0}),GS=Hn(vo),Mf,Ef,xo,Kl=g({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Mf=e.screenX-xo.screenX,Ef=e.screenY-xo.screenY):Ef=Mf=0,xo=e),Mf)},movementY:function(e){return"movementY"in e?e.movementY:Ef}}),Zm=Hn(Kl),VS=g({},Kl,{dataTransfer:0}),kS=Hn(VS),XS=g({},vo,{relatedTarget:0}),bf=Hn(XS),WS=g({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),YS=Hn(WS),qS=g({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jS=Hn(qS),ZS=g({},fr,{data:0}),Km=Hn(ZS),KS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=$S[e])?!!a[e]:!1}function Tf(){return JS}var tM=g({},vo,{key:function(e){if(e.key){var a=KS[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?QS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(e){return e.type==="keypress"?ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eM=Hn(tM),nM=g({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=Hn(nM),iM=g({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),aM=Hn(iM),rM=g({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sM=Hn(rM),oM=g({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lM=Hn(oM),uM=g({},fr,{newState:0,oldState:0}),cM=Hn(uM),fM=[9,13,27,32],Af=Yi&&"CompositionEvent"in window,yo=null;Yi&&"documentMode"in document&&(yo=document.documentMode);var hM=Yi&&"TextEvent"in window&&!yo,$m=Yi&&(!Af||yo&&8<yo&&11>=yo),Jm=" ",tg=!1;function eg(e,a){switch(e){case"keyup":return fM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ng(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function dM(e,a){switch(e){case"compositionend":return ng(a);case"keypress":return a.which!==32?null:(tg=!0,Jm);case"textInput":return e=a.data,e===Jm&&tg?null:e;default:return null}}function pM(e,a){if(Qr)return e==="compositionend"||!Af&&eg(e,a)?(e=qm(),Yl=Sf=Ra=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return $m&&a.locale!=="ko"?null:a.data;default:return null}}var mM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ig(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!mM[e.type]:a==="textarea"}function ag(e,a,s,l){Zr?Kr?Kr.push(l):Kr=[l]:Zr=l,a=zu(a,"onChange"),0<a.length&&(s=new Zl("onChange","change",null,s,l),e.push({event:s,listeners:a}))}var So=null,Mo=null;function gM(e){I_(e,0)}function Ql(e){var a=cr(e);if(we(a))return e}function rg(e,a){if(e==="change")return a}var sg=!1;if(Yi){var wf;if(Yi){var Rf="oninput"in document;if(!Rf){var og=document.createElement("div");og.setAttribute("oninput","return;"),Rf=typeof og.oninput=="function"}wf=Rf}else wf=!1;sg=wf&&(!document.documentMode||9<document.documentMode)}function lg(){So&&(So.detachEvent("onpropertychange",ug),Mo=So=null)}function ug(e){if(e.propertyName==="value"&&Ql(Mo)){var a=[];ag(a,Mo,e,vf(e)),Ym(gM,a)}}function _M(e,a,s){e==="focusin"?(lg(),So=a,Mo=s,So.attachEvent("onpropertychange",ug)):e==="focusout"&&lg()}function vM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(Mo)}function xM(e,a){if(e==="click")return Ql(a)}function yM(e,a){if(e==="input"||e==="change")return Ql(a)}function SM(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var qn=typeof Object.is=="function"?Object.is:SM;function Eo(e,a){if(qn(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var s=Object.keys(e),l=Object.keys(a);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!dt.call(a,f)||!qn(e[f],a[f]))return!1}return!0}function cg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fg(e,a){var s=cg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=a&&l>=a)return{node:s,offset:a-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=cg(s)}}function hg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?hg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function dg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Rn(e.document);a instanceof e.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)e=a.contentWindow;else break;a=Rn(e.document)}return a}function Cf(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var MM=Yi&&"documentMode"in document&&11>=document.documentMode,$r=null,Df=null,bo=null,Uf=!1;function pg(e,a,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Uf||$r==null||$r!==Rn(l)||(l=$r,"selectionStart"in l&&Cf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bo&&Eo(bo,l)||(bo=l,l=zu(Df,"onSelect"),0<l.length&&(a=new Zl("onSelect","select",null,a,s),e.push({event:a,listeners:l}),a.target=$r)))}function hr(e,a){var s={};return s[e.toLowerCase()]=a.toLowerCase(),s["Webkit"+e]="webkit"+a,s["Moz"+e]="moz"+a,s}var Jr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Nf={},mg={};Yi&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function dr(e){if(Nf[e])return Nf[e];if(!Jr[e])return e;var a=Jr[e],s;for(s in a)if(a.hasOwnProperty(s)&&s in mg)return Nf[e]=a[s];return e}var gg=dr("animationend"),_g=dr("animationiteration"),vg=dr("animationstart"),EM=dr("transitionrun"),bM=dr("transitionstart"),TM=dr("transitioncancel"),xg=dr("transitionend"),yg=new Map,Lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lf.push("scrollEnd");function _i(e,a){yg.set(e,a),ki(a,[e])}var Sg=new WeakMap;function ri(e,a){if(typeof e=="object"&&e!==null){var s=Sg.get(e);return s!==void 0?s:(a={value:e,source:a,stack:je(a)},Sg.set(e,a),a)}return{value:e,source:a,stack:je(a)}}var si=[],ts=0,Of=0;function $l(){for(var e=ts,a=Of=ts=0;a<e;){var s=si[a];si[a++]=null;var l=si[a];si[a++]=null;var f=si[a];si[a++]=null;var m=si[a];if(si[a++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&Mg(s,f,m)}}function Jl(e,a,s,l){si[ts++]=e,si[ts++]=a,si[ts++]=s,si[ts++]=l,Of|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Pf(e,a,s,l){return Jl(e,a,s,l),tu(e)}function es(e,a){return Jl(e,null,null,a),tu(e)}function Mg(e,a,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&a!==null&&(f=31-Nt(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[a]:l.push(a),a.lane=s|536870912),m):null}function tu(e){if(50<Zo)throw Zo=0,Gh=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var ns={};function AM(e,a,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,a,s,l){return new AM(e,a,s,l)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,a){var s=e.alternate;return s===null?(s=jn(e.tag,a,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=a,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,a=e.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Eg(e,a){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,a=s.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function eu(e,a,s,l,f,m){var M=0;if(l=e,typeof e=="function")zf(e)&&(M=1);else if(typeof e=="string")M=RE(e,s,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=jn(31,s,a,f),e.elementType=U,e.lanes=m,e;case E:return pr(s.children,f,m,a);case b:M=8,f|=24;break;case S:return e=jn(12,s,a,f|2),e.elementType=S,e.lanes=m,e;case z:return e=jn(13,s,a,f),e.elementType=z,e.lanes=m,e;case O:return e=jn(19,s,a,f),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case D:M=10;break t;case P:M=9;break t;case w:M=11;break t;case B:M=14;break t;case W:M=16,l=null;break t}M=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return a=jn(M,s,a,f),a.elementType=e,a.type=l,a.lanes=m,a}function pr(e,a,s,l){return e=jn(7,e,l,a),e.lanes=s,e}function Bf(e,a,s){return e=jn(6,e,null,a),e.lanes=s,e}function If(e,a,s){return a=jn(4,e.children!==null?e.children:[],e.key,a),a.lanes=s,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var is=[],as=0,nu=null,iu=0,oi=[],li=0,mr=null,ji=1,Zi="";function gr(e,a){is[as++]=iu,is[as++]=nu,nu=e,iu=a}function bg(e,a,s){oi[li++]=ji,oi[li++]=Zi,oi[li++]=mr,mr=e;var l=ji;e=Zi;var f=32-Nt(l)-1;l&=~(1<<f),s+=1;var m=32-Nt(a)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ji=1<<32-Nt(a)+f|s<<f|l,Zi=m+e}else ji=1<<m|s<<f|l,Zi=e}function Ff(e){e.return!==null&&(gr(e,1),bg(e,1,0))}function Hf(e){for(;e===nu;)nu=is[--as],is[as]=null,iu=is[--as],is[as]=null;for(;e===mr;)mr=oi[--li],oi[li]=null,Zi=oi[--li],oi[li]=null,ji=oi[--li],oi[li]=null}var On=null,$e=null,Le=!1,_r=null,Ui=!1,Gf=Error(r(519));function vr(e){var a=Error(r(418,""));throw wo(ri(a,e)),Gf}function Tg(e){var a=e.stateNode,s=e.type,l=e.memoizedProps;switch(a[un]=e,a[En]=l,s){case"dialog":xe("cancel",a),xe("close",a);break;case"iframe":case"object":case"embed":xe("load",a);break;case"video":case"audio":for(s=0;s<Qo.length;s++)xe(Qo[s],a);break;case"source":xe("error",a);break;case"img":case"image":case"link":xe("error",a),xe("load",a);break;case"details":xe("toggle",a);break;case"input":xe("invalid",a),ke(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Qe(a);break;case"select":xe("invalid",a);break;case"textarea":xe("invalid",a),bn(a,l.value,l.defaultValue,l.children),Qe(a)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||l.suppressHydrationWarning===!0||V_(a.textContent,s)?(l.popover!=null&&(xe("beforetoggle",a),xe("toggle",a)),l.onScroll!=null&&xe("scroll",a),l.onScrollEnd!=null&&xe("scrollend",a),l.onClick!=null&&(a.onclick=Bu),a=!0):a=!1,a||vr(e)}function Ag(e){for(On=e.return;On;)switch(On.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:On=On.return}}function To(e){if(e!==On)return!1;if(!Le)return Ag(e),Le=!0,!1;var a=e.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||id(e.type,e.memoizedProps)),s=!s),s&&$e&&vr(e),Ag(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(a===0){$e=xi(e.nextSibling);break t}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;e=e.nextSibling}$e=null}}else a===27?(a=$e,Xa(e.type)?(e=od,od=null,$e=e):$e=a):$e=On?xi(e.stateNode.nextSibling):null;return!0}function Ao(){$e=On=null,Le=!1}function wg(){var e=_r;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),_r=null),e}function wo(e){_r===null?_r=[e]:_r.push(e)}var Vf=V(null),xr=null,Ki=null;function Ca(e,a,s){$(Vf,a._currentValue),a._currentValue=s}function Qi(e){e._currentValue=Vf.current,mt(Vf)}function kf(e,a,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===s)break;e=e.return}}function Xf(e,a,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=f;for(var G=0;G<a.length;G++)if(A.context===a[G]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),kf(m.return,s,e),l||(M=null);break t}m=A.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),kf(M,s,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Ro(e,a,s,l){e=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=f.type;qn(f.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(f===gt.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(il):e=[il])}f=f.return}e!==null&&Xf(a,e,s,l),a.flags|=262144}function au(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yr(e){xr=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return Rg(xr,e)}function ru(e,a){return xr===null&&yr(e),Rg(e,a)}function Rg(e,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Ki===null){if(e===null)throw Error(r(308));Ki=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ki=Ki.next=a;return s}var wM=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(s){return s()})}},RM=i.unstable_scheduleCallback,CM=i.unstable_NormalPriority,fn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wf(){return{controller:new wM,data:new Map,refCount:0}}function Co(e){e.refCount--,e.refCount===0&&RM(CM,function(){e.controller.abort()})}var Do=null,Yf=0,rs=0,ss=null;function DM(e,a){if(Do===null){var s=Do=[];Yf=0,rs=jh(),ss={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Yf++,a.then(Cg,Cg),a}function Cg(){if(--Yf===0&&Do!==null){ss!==null&&(ss.status="fulfilled");var e=Do;Do=null,rs=0,ss=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function UM(e,a){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<s.length;f++)(0,s[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Dg=F.S;F.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&DM(e,a),Dg!==null&&Dg(e,a)};var Sr=V(null);function qf(){var e=Sr.current;return e!==null?e:Ye.pooledCache}function su(e,a){a===null?$(Sr,Sr.current):$(Sr,a.pool)}function Ug(){var e=qf();return e===null?null:{parent:fn._currentValue,pool:e}}var Uo=Error(r(460)),Ng=Error(r(474)),ou=Error(r(542)),jf={then:function(){}};function Lg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lu(){}function Og(e,a,s){switch(s=e[s],s===void 0?e.push(a):s!==a&&(a.then(lu,lu),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,zg(e),e;default:if(typeof a.status=="string")a.then(lu,lu);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,zg(e),e}throw No=a,Uo}}var No=null;function Pg(){if(No===null)throw Error(r(459));var e=No;return No=null,e}function zg(e){if(e===Uo||e===ou)throw Error(r(483))}var Da=!1;function Zf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kf(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,a,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ze&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=tu(e),Mg(e,null,s),a}return Jl(e,l,a,s),tu(e)}function Lo(e,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,s|=l,a.lanes=s,le(e,s)}}function Qf(e,a){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=a:m=m.next=a}else f=m=a;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=a:e.next=a,s.lastBaseUpdate=a}var $f=!1;function Oo(){if($f){var e=ss;if(e!==null)throw e}}function Po(e,a,s,l){$f=!1;var f=e.updateQueue;Da=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var G=A,at=G.next;G.next=null,M===null?m=at:M.next=at,M=G;var yt=e.alternate;yt!==null&&(yt=yt.updateQueue,A=yt.lastBaseUpdate,A!==M&&(A===null?yt.firstBaseUpdate=at:A.next=at,yt.lastBaseUpdate=G))}if(m!==null){var At=f.baseState;M=0,yt=at=G=null,A=m;do{var ot=A.lane&-536870913,lt=ot!==A.lane;if(lt?(Ae&ot)===ot:(l&ot)===ot){ot!==0&&ot===rs&&($f=!0),yt!==null&&(yt=yt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var oe=e,ie=A;ot=a;var He=s;switch(ie.tag){case 1:if(oe=ie.payload,typeof oe=="function"){At=oe.call(He,At,ot);break t}At=oe;break t;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ie.payload,ot=typeof oe=="function"?oe.call(He,At,ot):oe,ot==null)break t;At=g({},At,ot);break t;case 2:Da=!0}}ot=A.callback,ot!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[ot]:lt.push(ot))}else lt={lane:ot,tag:A.tag,payload:A.payload,callback:A.callback,next:null},yt===null?(at=yt=lt,G=At):yt=yt.next=lt,M|=ot;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);yt===null&&(G=At),f.baseState=G,f.firstBaseUpdate=at,f.lastBaseUpdate=yt,m===null&&(f.shared.lanes=0),Ha|=M,e.lanes=M,e.memoizedState=At}}function Bg(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function Ig(e,a){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Bg(s[e],a)}var os=V(null),uu=V(0);function Fg(e,a){e=aa,$(uu,e),$(os,a),aa=e|a.baseLanes}function Jf(){$(uu,aa),$(os,os.current)}function th(){aa=uu.current,mt(os),mt(uu)}var La=0,pe=null,Ie=null,sn=null,cu=!1,ls=!1,Mr=!1,fu=0,zo=0,us=null,NM=0;function tn(){throw Error(r(321))}function eh(e,a){if(a===null)return!1;for(var s=0;s<a.length&&s<e.length;s++)if(!qn(e[s],a[s]))return!1;return!0}function nh(e,a,s,l,f,m){return La=m,pe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,F.H=e===null||e.memoizedState===null?M0:E0,Mr=!1,m=s(l,f),Mr=!1,ls&&(m=Gg(a,s,l,f)),Hg(e),m}function Hg(e){F.H=_u;var a=Ie!==null&&Ie.next!==null;if(La=0,sn=Ie=pe=null,cu=!1,zo=0,us=null,a)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&au(e)&&(vn=!0))}function Gg(e,a,s,l){pe=e;var f=0;do{if(ls&&(us=null),zo=0,ls=!1,25<=f)throw Error(r(301));if(f+=1,sn=Ie=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=FM,m=a(s,l)}while(ls);return m}function LM(){var e=F.H,a=e.useState()[0];return a=typeof a.then=="function"?Bo(a):a,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(pe.flags|=1024),a}function ih(){var e=fu!==0;return fu=0,e}function ah(e,a,s){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~s}function rh(e){if(cu){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}cu=!1}La=0,sn=Ie=pe=null,ls=!1,zo=fu=0,us=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?pe.memoizedState=sn=e:sn=sn.next=e,sn}function on(){if(Ie===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var a=sn===null?pe.memoizedState:sn.next;if(a!==null)sn=a,Ie=e;else{if(e===null)throw pe.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},sn===null?pe.memoizedState=sn=e:sn=sn.next=e}return sn}function sh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var a=zo;return zo+=1,us===null&&(us=[]),e=Og(us,e,a),a=pe,(sn===null?a.memoizedState:sn.next)===null&&(a=a.alternate,F.H=a===null||a.memoizedState===null?M0:E0),e}function hu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bo(e);if(e.$$typeof===D)return Dn(e)}throw Error(r(438,String(e)))}function oh(e){var a=null,s=pe.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var l=pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=sh(),pe.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(e),l=0;l<e;l++)s[l]=R;return a.index++,s}function $i(e,a){return typeof a=="function"?a(e):a}function du(e){var a=on();return lh(a,Ie,e)}function lh(e,a,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}a.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{a=f.next;var A=M=null,G=null,at=a,yt=!1;do{var At=at.lane&-536870913;if(At!==at.lane?(Ae&At)===At:(La&At)===At){var ot=at.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),At===rs&&(yt=!0);else if((La&ot)===ot){at=at.next,ot===rs&&(yt=!0);continue}else At={lane:0,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=At,M=m):G=G.next=At,pe.lanes|=ot,Ha|=ot;At=at.action,Mr&&s(m,At),m=at.hasEagerState?at.eagerState:s(m,At)}else ot={lane:At,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=ot,M=m):G=G.next=ot,pe.lanes|=At,Ha|=At;at=at.next}while(at!==null&&at!==a);if(G===null?M=m:G.next=A,!qn(m,e.memoizedState)&&(vn=!0,yt&&(s=ss,s!==null)))throw s;e.memoizedState=m,e.baseState=M,e.baseQueue=G,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function uh(e){var a=on(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=a.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=e(m,M.action),M=M.next;while(M!==f);qn(m,a.memoizedState)||(vn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),s.lastRenderedState=m}return[m,l]}function Vg(e,a,s){var l=pe,f=on(),m=Le;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=a();var M=!qn((Ie||f).memoizedState,s);M&&(f.memoizedState=s,vn=!0),f=f.queue;var A=Wg.bind(null,l,f,e);if(Io(2048,8,A,[e]),f.getSnapshot!==a||M||sn!==null&&sn.memoizedState.tag&1){if(l.flags|=2048,cs(9,pu(),Xg.bind(null,l,f,s,a),null),Ye===null)throw Error(r(349));m||(La&124)!==0||kg(l,a,s)}return s}function kg(e,a,s){e.flags|=16384,e={getSnapshot:a,value:s},a=pe.updateQueue,a===null?(a=sh(),pe.updateQueue=a,a.stores=[e]):(s=a.stores,s===null?a.stores=[e]:s.push(e))}function Xg(e,a,s,l){a.value=s,a.getSnapshot=l,Yg(a)&&qg(e)}function Wg(e,a,s){return s(function(){Yg(a)&&qg(e)})}function Yg(e){var a=e.getSnapshot;e=e.value;try{var s=a();return!qn(e,s)}catch{return!0}}function qg(e){var a=es(e,2);a!==null&&Jn(a,e,2)}function ch(e){var a=Gn();if(typeof e=="function"){var s=e;if(e=s(),Mr){Ut(!0);try{s()}finally{Ut(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},a}function jg(e,a,s,l){return e.baseState=s,lh(e,Ie,typeof l=="function"?l:$i)}function OM(e,a,s,l,f){if(gu(e))throw Error(r(485));if(e=a.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};F.T!==null?s(!0):m.isTransition=!1,l(m),s=a.pending,s===null?(m.next=a.pending=m,Zg(a,m)):(m.next=s.next,a.pending=s.next=m)}}function Zg(e,a){var s=a.action,l=a.payload,f=e.state;if(a.isTransition){var m=F.T,M={};F.T=M;try{var A=s(f,l),G=F.S;G!==null&&G(M,A),Kg(e,a,A)}catch(at){fh(e,a,at)}finally{F.T=m}}else try{m=s(f,l),Kg(e,a,m)}catch(at){fh(e,a,at)}}function Kg(e,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Qg(e,a,l)},function(l){return fh(e,a,l)}):Qg(e,a,s)}function Qg(e,a,s){a.status="fulfilled",a.value=s,$g(a),e.state=s,a=e.pending,a!==null&&(s=a.next,s===a?e.pending=null:(s=s.next,a.next=s,Zg(e,s)))}function fh(e,a,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=s,$g(a),a=a.next;while(a!==l)}e.action=null}function $g(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Jg(e,a){return a}function t0(e,a){if(Le){var s=Ye.formState;if(s!==null){t:{var l=pe;if(Le){if($e){e:{for(var f=$e,m=Ui;f.nodeType!==8;){if(!m){f=null;break e}if(f=xi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){$e=xi(f.nextSibling),l=f.data==="F!";break t}}vr(l)}l=!1}l&&(a=s[0])}}return s=Gn(),s.memoizedState=s.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jg,lastRenderedState:a},s.queue=l,s=x0.bind(null,pe,l),l.dispatch=s,l=ch(!1),m=gh.bind(null,pe,!1,l.queue),l=Gn(),f={state:a,dispatch:null,action:e,pending:null},l.queue=f,s=OM.bind(null,pe,f,m,s),f.dispatch=s,l.memoizedState=e,[a,s,!1]}function e0(e){var a=on();return n0(a,Ie,e)}function n0(e,a,s){if(a=lh(e,a,Jg)[0],e=du($i)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Bo(a)}catch(M){throw M===Uo?ou:M}else l=a;a=on();var f=a.queue,m=f.dispatch;return s!==a.memoizedState&&(pe.flags|=2048,cs(9,pu(),PM.bind(null,f,s),null)),[l,m,e]}function PM(e,a){e.action=a}function i0(e){var a=on(),s=Ie;if(s!==null)return n0(a,s,e);on(),a=a.memoizedState,s=on();var l=s.queue.dispatch;return s.memoizedState=e,[a,l,!1]}function cs(e,a,s,l){return e={tag:e,create:s,deps:l,inst:a,next:null},a=pe.updateQueue,a===null&&(a=sh(),pe.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,a.lastEffect=e),e}function pu(){return{destroy:void 0,resource:void 0}}function a0(){return on().memoizedState}function mu(e,a,s,l){var f=Gn();l=l===void 0?null:l,pe.flags|=e,f.memoizedState=cs(1|a,pu(),s,l)}function Io(e,a,s,l){var f=on();l=l===void 0?null:l;var m=f.memoizedState.inst;Ie!==null&&l!==null&&eh(l,Ie.memoizedState.deps)?f.memoizedState=cs(a,m,s,l):(pe.flags|=e,f.memoizedState=cs(1|a,m,s,l))}function r0(e,a){mu(8390656,8,e,a)}function s0(e,a){Io(2048,8,e,a)}function o0(e,a){return Io(4,2,e,a)}function l0(e,a){return Io(4,4,e,a)}function u0(e,a){if(typeof a=="function"){e=e();var s=a(e);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function c0(e,a,s){s=s!=null?s.concat([e]):null,Io(4,4,u0.bind(null,a,e),s)}function hh(){}function f0(e,a){var s=on();a=a===void 0?null:a;var l=s.memoizedState;return a!==null&&eh(a,l[1])?l[0]:(s.memoizedState=[e,a],e)}function h0(e,a){var s=on();a=a===void 0?null:a;var l=s.memoizedState;if(a!==null&&eh(a,l[1]))return l[0];if(l=e(),Mr){Ut(!0);try{e()}finally{Ut(!1)}}return s.memoizedState=[l,a],l}function dh(e,a,s){return s===void 0||(La&1073741824)!==0?e.memoizedState=a:(e.memoizedState=s,e=m_(),pe.lanes|=e,Ha|=e,s)}function d0(e,a,s,l){return qn(s,a)?s:os.current!==null?(e=dh(e,s,l),qn(e,a)||(vn=!0),e):(La&42)===0?(vn=!0,e.memoizedState=s):(e=m_(),pe.lanes|=e,Ha|=e,a)}function p0(e,a,s,l,f){var m=j.p;j.p=m!==0&&8>m?m:8;var M=F.T,A={};F.T=A,gh(e,!1,a,s);try{var G=f(),at=F.S;if(at!==null&&at(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var yt=UM(G,l);Fo(e,a,yt,$n(e))}else Fo(e,a,l,$n(e))}catch(At){Fo(e,a,{then:function(){},status:"rejected",reason:At},$n())}finally{j.p=m,F.T=M}}function zM(){}function ph(e,a,s,l){if(e.tag!==5)throw Error(r(476));var f=m0(e).queue;p0(e,f,a,q,s===null?zM:function(){return g0(e),s(l)})}function m0(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:q},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:s},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function g0(e){var a=m0(e).next.queue;Fo(e,a,{},$n())}function mh(){return Dn(il)}function _0(){return on().memoizedState}function v0(){return on().memoizedState}function BM(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var s=$n();e=Ua(s);var l=Na(a,e,s);l!==null&&(Jn(l,a,s),Lo(l,a,s)),a={cache:Wf()},e.payload=a;return}a=a.return}}function IM(e,a,s){var l=$n();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},gu(e)?y0(a,s):(s=Pf(e,a,s,l),s!==null&&(Jn(s,e,l),S0(s,a,l)))}function x0(e,a,s){var l=$n();Fo(e,a,s,l)}function Fo(e,a,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(gu(e))y0(a,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var M=a.lastRenderedState,A=m(M,s);if(f.hasEagerState=!0,f.eagerState=A,qn(A,M))return Jl(e,a,f,0),Ye===null&&$l(),!1}catch{}finally{}if(s=Pf(e,a,f,l),s!==null)return Jn(s,e,l),S0(s,a,l),!0}return!1}function gh(e,a,s,l){if(l={lane:2,revertLane:jh(),action:l,hasEagerState:!1,eagerState:null,next:null},gu(e)){if(a)throw Error(r(479))}else a=Pf(e,s,l,2),a!==null&&Jn(a,e,2)}function gu(e){var a=e.alternate;return e===pe||a!==null&&a===pe}function y0(e,a){ls=cu=!0;var s=e.pending;s===null?a.next=a:(a.next=s.next,s.next=a),e.pending=a}function S0(e,a,s){if((s&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,s|=l,a.lanes=s,le(e,s)}}var _u={readContext:Dn,use:hu,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},M0={readContext:Dn,use:hu,useCallback:function(e,a){return Gn().memoizedState=[e,a===void 0?null:a],e},useContext:Dn,useEffect:r0,useImperativeHandle:function(e,a,s){s=s!=null?s.concat([e]):null,mu(4194308,4,u0.bind(null,a,e),s)},useLayoutEffect:function(e,a){return mu(4194308,4,e,a)},useInsertionEffect:function(e,a){mu(4,2,e,a)},useMemo:function(e,a){var s=Gn();a=a===void 0?null:a;var l=e();if(Mr){Ut(!0);try{e()}finally{Ut(!1)}}return s.memoizedState=[l,a],l},useReducer:function(e,a,s){var l=Gn();if(s!==void 0){var f=s(a);if(Mr){Ut(!0);try{s(a)}finally{Ut(!1)}}}else f=a;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=IM.bind(null,pe,e),[l.memoizedState,e]},useRef:function(e){var a=Gn();return e={current:e},a.memoizedState=e},useState:function(e){e=ch(e);var a=e.queue,s=x0.bind(null,pe,a);return a.dispatch=s,[e.memoizedState,s]},useDebugValue:hh,useDeferredValue:function(e,a){var s=Gn();return dh(s,e,a)},useTransition:function(){var e=ch(!1);return e=p0.bind(null,pe,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,s){var l=pe,f=Gn();if(Le){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Ye===null)throw Error(r(349));(Ae&124)!==0||kg(l,a,s)}f.memoizedState=s;var m={value:s,getSnapshot:a};return f.queue=m,r0(Wg.bind(null,l,m,e),[e]),l.flags|=2048,cs(9,pu(),Xg.bind(null,l,m,s,a),null),s},useId:function(){var e=Gn(),a=Ye.identifierPrefix;if(Le){var s=Zi,l=ji;s=(l&~(1<<32-Nt(l)-1)).toString(32)+s,a="«"+a+"R"+s,s=fu++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=NM++,a="«"+a+"r"+s.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:mh,useFormState:t0,useActionState:t0,useOptimistic:function(e){var a=Gn();a.memoizedState=a.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=gh.bind(null,pe,!0,s),s.dispatch=a,[e,a]},useMemoCache:oh,useCacheRefresh:function(){return Gn().memoizedState=BM.bind(null,pe)}},E0={readContext:Dn,use:hu,useCallback:f0,useContext:Dn,useEffect:s0,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:h0,useReducer:du,useRef:a0,useState:function(){return du($i)},useDebugValue:hh,useDeferredValue:function(e,a){var s=on();return d0(s,Ie.memoizedState,e,a)},useTransition:function(){var e=du($i)[0],a=on().memoizedState;return[typeof e=="boolean"?e:Bo(e),a]},useSyncExternalStore:Vg,useId:_0,useHostTransitionStatus:mh,useFormState:e0,useActionState:e0,useOptimistic:function(e,a){var s=on();return jg(s,Ie,e,a)},useMemoCache:oh,useCacheRefresh:v0},FM={readContext:Dn,use:hu,useCallback:f0,useContext:Dn,useEffect:s0,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:h0,useReducer:uh,useRef:a0,useState:function(){return uh($i)},useDebugValue:hh,useDeferredValue:function(e,a){var s=on();return Ie===null?dh(s,e,a):d0(s,Ie.memoizedState,e,a)},useTransition:function(){var e=uh($i)[0],a=on().memoizedState;return[typeof e=="boolean"?e:Bo(e),a]},useSyncExternalStore:Vg,useId:_0,useHostTransitionStatus:mh,useFormState:i0,useActionState:i0,useOptimistic:function(e,a){var s=on();return Ie!==null?jg(s,Ie,e,a):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:oh,useCacheRefresh:v0},fs=null,Ho=0;function vu(e){var a=Ho;return Ho+=1,fs===null&&(fs=[]),Og(fs,e,a)}function Go(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function xu(e,a){throw a.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function b0(e){var a=e._init;return a(e._payload)}function T0(e){function a(Z,X){if(e){var et=Z.deletions;et===null?(Z.deletions=[X],Z.flags|=16):et.push(X)}}function s(Z,X){if(!e)return null;for(;X!==null;)a(Z,X),X=X.sibling;return null}function l(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function f(Z,X){return Z=qi(Z,X),Z.index=0,Z.sibling=null,Z}function m(Z,X,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<X?(Z.flags|=67108866,X):et):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function M(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,et,Mt){return X===null||X.tag!==6?(X=Bf(et,Z.mode,Mt),X.return=Z,X):(X=f(X,et),X.return=Z,X)}function G(Z,X,et,Mt){var qt=et.type;return qt===E?yt(Z,X,et.props.children,Mt,et.key):X!==null&&(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===W&&b0(qt)===X.type)?(X=f(X,et.props),Go(X,et),X.return=Z,X):(X=eu(et.type,et.key,et.props,null,Z.mode,Mt),Go(X,et),X.return=Z,X)}function at(Z,X,et,Mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=If(et,Z.mode,Mt),X.return=Z,X):(X=f(X,et.children||[]),X.return=Z,X)}function yt(Z,X,et,Mt,qt){return X===null||X.tag!==7?(X=pr(et,Z.mode,Mt,qt),X.return=Z,X):(X=f(X,et),X.return=Z,X)}function At(Z,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Bf(""+X,Z.mode,et),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return et=eu(X.type,X.key,X.props,null,Z.mode,et),Go(et,X),et.return=Z,et;case x:return X=If(X,Z.mode,et),X.return=Z,X;case W:var Mt=X._init;return X=Mt(X._payload),At(Z,X,et)}if(xt(X)||rt(X))return X=pr(X,Z.mode,et,null),X.return=Z,X;if(typeof X.then=="function")return At(Z,vu(X),et);if(X.$$typeof===D)return At(Z,ru(Z,X),et);xu(Z,X)}return null}function ot(Z,X,et,Mt){var qt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return qt!==null?null:A(Z,X,""+et,Mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case _:return et.key===qt?G(Z,X,et,Mt):null;case x:return et.key===qt?at(Z,X,et,Mt):null;case W:return qt=et._init,et=qt(et._payload),ot(Z,X,et,Mt)}if(xt(et)||rt(et))return qt!==null?null:yt(Z,X,et,Mt,null);if(typeof et.then=="function")return ot(Z,X,vu(et),Mt);if(et.$$typeof===D)return ot(Z,X,ru(Z,et),Mt);xu(Z,et)}return null}function lt(Z,X,et,Mt,qt){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return Z=Z.get(et)||null,A(X,Z,""+Mt,qt);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case _:return Z=Z.get(Mt.key===null?et:Mt.key)||null,G(X,Z,Mt,qt);case x:return Z=Z.get(Mt.key===null?et:Mt.key)||null,at(X,Z,Mt,qt);case W:var me=Mt._init;return Mt=me(Mt._payload),lt(Z,X,et,Mt,qt)}if(xt(Mt)||rt(Mt))return Z=Z.get(et)||null,yt(X,Z,Mt,qt,null);if(typeof Mt.then=="function")return lt(Z,X,et,vu(Mt),qt);if(Mt.$$typeof===D)return lt(Z,X,et,ru(X,Mt),qt);xu(X,Mt)}return null}function oe(Z,X,et,Mt){for(var qt=null,me=null,Qt=X,ae=X=0,yn=null;Qt!==null&&ae<et.length;ae++){Qt.index>ae?(yn=Qt,Qt=null):yn=Qt.sibling;var De=ot(Z,Qt,et[ae],Mt);if(De===null){Qt===null&&(Qt=yn);break}e&&Qt&&De.alternate===null&&a(Z,Qt),X=m(De,X,ae),me===null?qt=De:me.sibling=De,me=De,Qt=yn}if(ae===et.length)return s(Z,Qt),Le&&gr(Z,ae),qt;if(Qt===null){for(;ae<et.length;ae++)Qt=At(Z,et[ae],Mt),Qt!==null&&(X=m(Qt,X,ae),me===null?qt=Qt:me.sibling=Qt,me=Qt);return Le&&gr(Z,ae),qt}for(Qt=l(Qt);ae<et.length;ae++)yn=lt(Qt,Z,ae,et[ae],Mt),yn!==null&&(e&&yn.alternate!==null&&Qt.delete(yn.key===null?ae:yn.key),X=m(yn,X,ae),me===null?qt=yn:me.sibling=yn,me=yn);return e&&Qt.forEach(function(Za){return a(Z,Za)}),Le&&gr(Z,ae),qt}function ie(Z,X,et,Mt){if(et==null)throw Error(r(151));for(var qt=null,me=null,Qt=X,ae=X=0,yn=null,De=et.next();Qt!==null&&!De.done;ae++,De=et.next()){Qt.index>ae?(yn=Qt,Qt=null):yn=Qt.sibling;var Za=ot(Z,Qt,De.value,Mt);if(Za===null){Qt===null&&(Qt=yn);break}e&&Qt&&Za.alternate===null&&a(Z,Qt),X=m(Za,X,ae),me===null?qt=Za:me.sibling=Za,me=Za,Qt=yn}if(De.done)return s(Z,Qt),Le&&gr(Z,ae),qt;if(Qt===null){for(;!De.done;ae++,De=et.next())De=At(Z,De.value,Mt),De!==null&&(X=m(De,X,ae),me===null?qt=De:me.sibling=De,me=De);return Le&&gr(Z,ae),qt}for(Qt=l(Qt);!De.done;ae++,De=et.next())De=lt(Qt,Z,ae,De.value,Mt),De!==null&&(e&&De.alternate!==null&&Qt.delete(De.key===null?ae:De.key),X=m(De,X,ae),me===null?qt=De:me.sibling=De,me=De);return e&&Qt.forEach(function(HE){return a(Z,HE)}),Le&&gr(Z,ae),qt}function He(Z,X,et,Mt){if(typeof et=="object"&&et!==null&&et.type===E&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case _:t:{for(var qt=et.key;X!==null;){if(X.key===qt){if(qt=et.type,qt===E){if(X.tag===7){s(Z,X.sibling),Mt=f(X,et.props.children),Mt.return=Z,Z=Mt;break t}}else if(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===W&&b0(qt)===X.type){s(Z,X.sibling),Mt=f(X,et.props),Go(Mt,et),Mt.return=Z,Z=Mt;break t}s(Z,X);break}else a(Z,X);X=X.sibling}et.type===E?(Mt=pr(et.props.children,Z.mode,Mt,et.key),Mt.return=Z,Z=Mt):(Mt=eu(et.type,et.key,et.props,null,Z.mode,Mt),Go(Mt,et),Mt.return=Z,Z=Mt)}return M(Z);case x:t:{for(qt=et.key;X!==null;){if(X.key===qt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){s(Z,X.sibling),Mt=f(X,et.children||[]),Mt.return=Z,Z=Mt;break t}else{s(Z,X);break}else a(Z,X);X=X.sibling}Mt=If(et,Z.mode,Mt),Mt.return=Z,Z=Mt}return M(Z);case W:return qt=et._init,et=qt(et._payload),He(Z,X,et,Mt)}if(xt(et))return oe(Z,X,et,Mt);if(rt(et)){if(qt=rt(et),typeof qt!="function")throw Error(r(150));return et=qt.call(et),ie(Z,X,et,Mt)}if(typeof et.then=="function")return He(Z,X,vu(et),Mt);if(et.$$typeof===D)return He(Z,X,ru(Z,et),Mt);xu(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(s(Z,X.sibling),Mt=f(X,et),Mt.return=Z,Z=Mt):(s(Z,X),Mt=Bf(et,Z.mode,Mt),Mt.return=Z,Z=Mt),M(Z)):s(Z,X)}return function(Z,X,et,Mt){try{Ho=0;var qt=He(Z,X,et,Mt);return fs=null,qt}catch(Qt){if(Qt===Uo||Qt===ou)throw Qt;var me=jn(29,Qt,null,Z.mode);return me.lanes=Mt,me.return=Z,me}finally{}}}var hs=T0(!0),A0=T0(!1),ui=V(null),Ni=null;function Oa(e){var a=e.alternate;$(hn,hn.current&1),$(ui,e),Ni===null&&(a===null||os.current!==null||a.memoizedState!==null)&&(Ni=e)}function w0(e){if(e.tag===22){if($(hn,hn.current),$(ui,e),Ni===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(Ni=e)}}else Pa()}function Pa(){$(hn,hn.current),$(ui,ui.current)}function Ji(e){mt(ui),Ni===e&&(Ni=null),mt(hn)}var hn=V(0);function yu(e){for(var a=e;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||sd(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function _h(e,a,s,l){a=e.memoizedState,s=s(l,a),s=s==null?a:g({},a,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var vh={enqueueSetState:function(e,a,s){e=e._reactInternals;var l=$n(),f=Ua(l);f.payload=a,s!=null&&(f.callback=s),a=Na(e,f,l),a!==null&&(Jn(a,e,l),Lo(a,e,l))},enqueueReplaceState:function(e,a,s){e=e._reactInternals;var l=$n(),f=Ua(l);f.tag=1,f.payload=a,s!=null&&(f.callback=s),a=Na(e,f,l),a!==null&&(Jn(a,e,l),Lo(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var s=$n(),l=Ua(s);l.tag=2,a!=null&&(l.callback=a),a=Na(e,l,s),a!==null&&(Jn(a,e,s),Lo(a,e,s))}};function R0(e,a,s,l,f,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):a.prototype&&a.prototype.isPureReactComponent?!Eo(s,l)||!Eo(f,m):!0}function C0(e,a,s,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,l),a.state!==e&&vh.enqueueReplaceState(a,a.state,null)}function Er(e,a){var s=a;if("ref"in a){s={};for(var l in a)l!=="ref"&&(s[l]=a[l])}if(e=e.defaultProps){s===a&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var Su=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function D0(e){Su(e)}function U0(e){console.error(e)}function N0(e){Su(e)}function Mu(e,a){try{var s=e.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function L0(e,a,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function xh(e,a,s){return s=Ua(s),s.tag=3,s.payload={element:null},s.callback=function(){Mu(e,a)},s}function O0(e){return e=Ua(e),e.tag=3,e}function P0(e,a,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){L0(a,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){L0(a,s,l),typeof f!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function HM(e,a,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=s.alternate,a!==null&&Ro(a,s,f,!0),s=ui.current,s!==null){switch(s.tag){case 13:return Ni===null?kh():s.alternate===null&&Je===0&&(Je=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===jf?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([l]):a.add(l),Wh(e,l,f)),!1;case 22:return s.flags|=65536,l===jf?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([l]):s.add(l)),Wh(e,l,f)),!1}throw Error(r(435,s.tag))}return Wh(e,l,f),kh(),!1}if(Le)return a=ui.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==Gf&&(e=Error(r(422),{cause:l}),wo(ri(e,s)))):(l!==Gf&&(a=Error(r(423),{cause:l}),wo(ri(a,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=ri(l,s),f=xh(e.stateNode,l,f),Qf(e,f),Je!==4&&(Je=2)),!1;var m=Error(r(520),{cause:l});if(m=ri(m,s),jo===null?jo=[m]:jo.push(m),Je!==4&&(Je=2),a===null)return!0;l=ri(l,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=xh(s.stateNode,l,e),Qf(s,e),!1;case 1:if(a=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ga===null||!Ga.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=O0(f),P0(f,e,s,l),Qf(s,f),!1}s=s.return}while(s!==null);return!1}var z0=Error(r(461)),vn=!1;function Tn(e,a,s,l){a.child=e===null?A0(a,null,s,l):hs(a,e.child,s,l)}function B0(e,a,s,l,f){s=s.render;var m=a.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return yr(a),l=nh(e,a,s,M,m,f),A=ih(),e!==null&&!vn?(ah(e,a,f),ta(e,a,f)):(Le&&A&&Ff(a),a.flags|=1,Tn(e,a,l,f),a.child)}function I0(e,a,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!zf(m)&&m.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=m,F0(e,a,m,l,f)):(e=eu(s.type,null,l,a,a.mode,f),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!wh(e,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:Eo,s(M,l)&&e.ref===a.ref)return ta(e,a,f)}return a.flags|=1,e=qi(m,l),e.ref=a.ref,e.return=a,a.child=e}function F0(e,a,s,l,f){if(e!==null){var m=e.memoizedProps;if(Eo(m,l)&&e.ref===a.ref)if(vn=!1,a.pendingProps=l=m,wh(e,f))(e.flags&131072)!==0&&(vn=!0);else return a.lanes=e.lanes,ta(e,a,f)}return yh(e,a,s,l,f)}function H0(e,a,s){var l=a.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(f=a.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~l}else a.childLanes=0,a.child=null;return G0(e,a,l,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&su(a,m!==null?m.cachePool:null),m!==null?Fg(a,m):Jf(),w0(a);else return a.lanes=a.childLanes=536870912,G0(e,a,m!==null?m.baseLanes|s:s,s)}else m!==null?(su(a,m.cachePool),Fg(a,m),Pa(),a.memoizedState=null):(e!==null&&su(a,null),Jf(),Pa());return Tn(e,a,f,s),a.child}function G0(e,a,s,l){var f=qf();return f=f===null?null:{parent:fn._currentValue,pool:f},a.memoizedState={baseLanes:s,cachePool:f},e!==null&&su(a,null),Jf(),w0(a),e!==null&&Ro(e,a,l,!0),null}function Eu(e,a){var s=a.ref;if(s===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(a.flags|=4194816)}}function yh(e,a,s,l,f){return yr(a),s=nh(e,a,s,l,void 0,f),l=ih(),e!==null&&!vn?(ah(e,a,f),ta(e,a,f)):(Le&&l&&Ff(a),a.flags|=1,Tn(e,a,s,f),a.child)}function V0(e,a,s,l,f,m){return yr(a),a.updateQueue=null,s=Gg(a,l,s,f),Hg(e),l=ih(),e!==null&&!vn?(ah(e,a,m),ta(e,a,m)):(Le&&l&&Ff(a),a.flags|=1,Tn(e,a,s,m),a.child)}function k0(e,a,s,l,f){if(yr(a),a.stateNode===null){var m=ns,M=s.contextType;typeof M=="object"&&M!==null&&(m=Dn(M)),m=new s(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=vh,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},Zf(a),M=s.contextType,m.context=typeof M=="object"&&M!==null?Dn(M):ns,m.state=a.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(_h(a,s,M,l),m.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&vh.enqueueReplaceState(m,m.state,null),Po(a,l,m,f),Oo(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var A=a.memoizedProps,G=Er(s,A);m.props=G;var at=m.context,yt=s.contextType;M=ns,typeof yt=="object"&&yt!==null&&(M=Dn(yt));var At=s.getDerivedStateFromProps;yt=typeof At=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,yt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||at!==M)&&C0(a,m,l,M),Da=!1;var ot=a.memoizedState;m.state=ot,Po(a,l,m,f),Oo(),at=a.memoizedState,A||ot!==at||Da?(typeof At=="function"&&(_h(a,s,At,l),at=a.memoizedState),(G=Da||R0(a,s,G,l,ot,at,M))?(yt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=at),m.props=l,m.state=at,m.context=M,l=G):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,Kf(e,a),M=a.memoizedProps,yt=Er(s,M),m.props=yt,At=a.pendingProps,ot=m.context,at=s.contextType,G=ns,typeof at=="object"&&at!==null&&(G=Dn(at)),A=s.getDerivedStateFromProps,(at=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==At||ot!==G)&&C0(a,m,l,G),Da=!1,ot=a.memoizedState,m.state=ot,Po(a,l,m,f),Oo();var lt=a.memoizedState;M!==At||ot!==lt||Da||e!==null&&e.dependencies!==null&&au(e.dependencies)?(typeof A=="function"&&(_h(a,s,A,l),lt=a.memoizedState),(yt=Da||R0(a,s,yt,l,ot,lt,G)||e!==null&&e.dependencies!==null&&au(e.dependencies))?(at||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,lt,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,lt,G)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=lt),m.props=l,m.state=lt,m.context=G,l=yt):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,Eu(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=hs(a,e.child,null,f),a.child=hs(a,null,s,f)):Tn(e,a,s,f),a.memoizedState=m.state,e=a.child):e=ta(e,a,f),e}function X0(e,a,s,l){return Ao(),a.flags|=256,Tn(e,a,s,l),a.child}var Sh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mh(e){return{baseLanes:e,cachePool:Ug()}}function Eh(e,a,s){return e=e!==null?e.childLanes&~s:0,a&&(e|=ci),e}function W0(e,a,s){var l=a.pendingProps,f=!1,m=(a.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),M&&(f=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,e===null){if(Le){if(f?Oa(a):Pa(),Le){var A=$e,G;if(G=A){t:{for(G=A,A=Ui;G.nodeType!==8;){if(!A){A=null;break t}if(G=xi(G.nextSibling),G===null){A=null;break t}}A=G}A!==null?(a.memoizedState={dehydrated:A,treeContext:mr!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},G=jn(18,null,null,0),G.stateNode=A,G.return=a,a.child=G,On=a,$e=null,G=!0):G=!1}G||vr(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return sd(A)?a.lanes=32:a.lanes=536870912,null;Ji(a)}return A=l.children,l=l.fallback,f?(Pa(),f=a.mode,A=bu({mode:"hidden",children:A},f),l=pr(l,f,s,null),A.return=a,l.return=a,A.sibling=l,a.child=A,f=a.child,f.memoizedState=Mh(s),f.childLanes=Eh(e,M,s),a.memoizedState=Sh,l):(Oa(a),bh(a,A))}if(G=e.memoizedState,G!==null&&(A=G.dehydrated,A!==null)){if(m)a.flags&256?(Oa(a),a.flags&=-257,a=Th(e,a,s)):a.memoizedState!==null?(Pa(),a.child=e.child,a.flags|=128,a=null):(Pa(),f=l.fallback,A=a.mode,l=bu({mode:"visible",children:l.children},A),f=pr(f,A,s,null),f.flags|=2,l.return=a,f.return=a,l.sibling=f,a.child=l,hs(a,e.child,null,s),l=a.child,l.memoizedState=Mh(s),l.childLanes=Eh(e,M,s),a.memoizedState=Sh,a=f);else if(Oa(a),sd(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var at=M.dgst;M=at,l=Error(r(419)),l.stack="",l.digest=M,wo({value:l,source:null,stack:null}),a=Th(e,a,s)}else if(vn||Ro(e,a,s,!1),M=(s&e.childLanes)!==0,vn||M){if(M=Ye,M!==null&&(l=s&-s,l=(l&42)!==0?1:Pe(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==G.retryLane))throw G.retryLane=l,es(e,l),Jn(M,e,l),z0;A.data==="$?"||kh(),a=Th(e,a,s)}else A.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=G.treeContext,$e=xi(A.nextSibling),On=a,Le=!0,_r=null,Ui=!1,e!==null&&(oi[li++]=ji,oi[li++]=Zi,oi[li++]=mr,ji=e.id,Zi=e.overflow,mr=a),a=bh(a,l.children),a.flags|=4096);return a}return f?(Pa(),f=l.fallback,A=a.mode,G=e.child,at=G.sibling,l=qi(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,at!==null?f=qi(at,f):(f=pr(f,A,s,null),f.flags|=2),f.return=a,l.return=a,l.sibling=f,a.child=l,l=f,f=a.child,A=e.child.memoizedState,A===null?A=Mh(s):(G=A.cachePool,G!==null?(at=fn._currentValue,G=G.parent!==at?{parent:at,pool:at}:G):G=Ug(),A={baseLanes:A.baseLanes|s,cachePool:G}),f.memoizedState=A,f.childLanes=Eh(e,M,s),a.memoizedState=Sh,l):(Oa(a),s=e.child,e=s.sibling,s=qi(s,{mode:"visible",children:l.children}),s.return=a,s.sibling=null,e!==null&&(M=a.deletions,M===null?(a.deletions=[e],a.flags|=16):M.push(e)),a.child=s,a.memoizedState=null,s)}function bh(e,a){return a=bu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function bu(e,a){return e=jn(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Th(e,a,s){return hs(a,e.child,null,s),e=bh(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Y0(e,a,s){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),kf(e.return,a,s)}function Ah(e,a,s,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function q0(e,a,s){var l=a.pendingProps,f=l.revealOrder,m=l.tail;if(Tn(e,a,l.children,s),l=hn.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Y0(e,s,a);else if(e.tag===19)Y0(e,s,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch($(hn,l),f){case"forwards":for(s=a.child,f=null;s!==null;)e=s.alternate,e!==null&&yu(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=a.child,a.child=null):(f=s.sibling,s.sibling=null),Ah(a,!1,f,s,m);break;case"backwards":for(s=null,f=a.child,a.child=null;f!==null;){if(e=f.alternate,e!==null&&yu(e)===null){a.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Ah(a,!0,s,null,m);break;case"together":Ah(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ta(e,a,s){if(e!==null&&(a.dependencies=e.dependencies),Ha|=a.lanes,(s&a.childLanes)===0)if(e!==null){if(Ro(e,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,s=qi(e,e.pendingProps),a.child=s,s.return=a;e.sibling!==null;)e=e.sibling,s=s.sibling=qi(e,e.pendingProps),s.return=a;s.sibling=null}return a.child}function wh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&au(e)))}function GM(e,a,s){switch(a.tag){case 3:Rt(a,a.stateNode.containerInfo),Ca(a,fn,e.memoizedState.cache),Ao();break;case 27:case 5:bt(a);break;case 4:Rt(a,a.stateNode.containerInfo);break;case 10:Ca(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Oa(a),a.flags|=128,null):(s&a.child.childLanes)!==0?W0(e,a,s):(Oa(a),e=ta(e,a,s),e!==null?e.sibling:null);Oa(a);break;case 19:var f=(e.flags&128)!==0;if(l=(s&a.childLanes)!==0,l||(Ro(e,a,s,!1),l=(s&a.childLanes)!==0),f){if(l)return q0(e,a,s);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$(hn,hn.current),l)break;return null;case 22:case 23:return a.lanes=0,H0(e,a,s);case 24:Ca(a,fn,e.memoizedState.cache)}return ta(e,a,s)}function j0(e,a,s){if(e!==null)if(e.memoizedProps!==a.pendingProps)vn=!0;else{if(!wh(e,s)&&(a.flags&128)===0)return vn=!1,GM(e,a,s);vn=(e.flags&131072)!==0}else vn=!1,Le&&(a.flags&1048576)!==0&&bg(a,iu,a.index);switch(a.lanes=0,a.tag){case 16:t:{e=a.pendingProps;var l=a.elementType,f=l._init;if(l=f(l._payload),a.type=l,typeof l=="function")zf(l)?(e=Er(l,e),a.tag=1,a=k0(null,a,l,e,s)):(a.tag=0,a=yh(null,a,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===w){a.tag=11,a=B0(null,a,l,e,s);break t}else if(f===B){a.tag=14,a=I0(null,a,l,e,s);break t}}throw a=vt(l)||l,Error(r(306,a,""))}}return a;case 0:return yh(e,a,a.type,a.pendingProps,s);case 1:return l=a.type,f=Er(l,a.pendingProps),k0(e,a,l,f,s);case 3:t:{if(Rt(a,a.stateNode.containerInfo),e===null)throw Error(r(387));l=a.pendingProps;var m=a.memoizedState;f=m.element,Kf(e,a),Po(a,l,null,s);var M=a.memoizedState;if(l=M.cache,Ca(a,fn,l),l!==m.cache&&Xf(a,[fn],s,!0),Oo(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=X0(e,a,l,s);break t}else if(l!==f){f=ri(Error(r(424)),a),wo(f),a=X0(e,a,l,s);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=xi(e.firstChild),On=a,Le=!0,_r=null,Ui=!0,s=A0(a,null,l,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ao(),l===f){a=ta(e,a,s);break t}Tn(e,a,l,s)}a=a.child}return a;case 26:return Eu(e,a),e===null?(s=$_(a.type,null,a.pendingProps,null))?a.memoizedState=s:Le||(s=a.type,e=a.pendingProps,l=Iu(ft.current).createElement(s),l[un]=a,l[En]=e,wn(l,s,e),rn(l),a.stateNode=l):a.memoizedState=$_(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return bt(a),e===null&&Le&&(l=a.stateNode=Z_(a.type,a.pendingProps,ft.current),On=a,Ui=!0,f=$e,Xa(a.type)?(od=f,$e=xi(l.firstChild)):$e=f),Tn(e,a,a.pendingProps.children,s),Eu(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Le&&((f=l=$e)&&(l=mE(l,a.type,a.pendingProps,Ui),l!==null?(a.stateNode=l,On=a,$e=xi(l.firstChild),Ui=!1,f=!0):f=!1),f||vr(a)),bt(a),f=a.type,m=a.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,id(f,m)?l=null:M!==null&&id(f,M)&&(a.flags|=32),a.memoizedState!==null&&(f=nh(e,a,LM,null,null,s),il._currentValue=f),Eu(e,a),Tn(e,a,l,s),a.child;case 6:return e===null&&Le&&((e=s=$e)&&(s=gE(s,a.pendingProps,Ui),s!==null?(a.stateNode=s,On=a,$e=null,e=!0):e=!1),e||vr(a)),null;case 13:return W0(e,a,s);case 4:return Rt(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=hs(a,null,l,s):Tn(e,a,l,s),a.child;case 11:return B0(e,a,a.type,a.pendingProps,s);case 7:return Tn(e,a,a.pendingProps,s),a.child;case 8:return Tn(e,a,a.pendingProps.children,s),a.child;case 12:return Tn(e,a,a.pendingProps.children,s),a.child;case 10:return l=a.pendingProps,Ca(a,a.type,l.value),Tn(e,a,l.children,s),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,yr(a),f=Dn(f),l=l(f),a.flags|=1,Tn(e,a,l,s),a.child;case 14:return I0(e,a,a.type,a.pendingProps,s);case 15:return F0(e,a,a.type,a.pendingProps,s);case 19:return q0(e,a,s);case 31:return l=a.pendingProps,s=a.mode,l={mode:l.mode,children:l.children},e===null?(s=bu(l,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=qi(e.child,l),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return H0(e,a,s);case 24:return yr(a),l=Dn(fn),e===null?(f=qf(),f===null&&(f=Ye,m=Wf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),a.memoizedState={parent:l,cache:f},Zf(a),Ca(a,fn,f)):((e.lanes&s)!==0&&(Kf(e,a),Po(a,null,null,s),Oo()),f=e.memoizedState,m=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Ca(a,fn,l)):(l=m.cache,Ca(a,fn,l),l!==f.cache&&Xf(a,[fn],s,!0))),Tn(e,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function ea(e){e.flags|=4}function Z0(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!iv(a)){if(a=ui.current,a!==null&&((Ae&4194048)===Ae?Ni!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||a!==Ni))throw No=jf,Ng;e.flags|=8192}}function Tu(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Bt():536870912,e.lanes|=a,gs|=a)}function Vo(e,a){if(!Le)switch(e.tailMode){case"hidden":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var a=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(a)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,a}function VM(e,a,s){var l=a.pendingProps;switch(Hf(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(a),null;case 1:return Ze(a),null;case 3:return s=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Qi(fn),_t(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(To(a)?ea(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,wg())),Ze(a),null;case 26:return s=a.memoizedState,e===null?(ea(a),s!==null?(Ze(a),Z0(a,s)):(Ze(a),a.flags&=-16777217)):s?s!==e.memoizedState?(ea(a),Ze(a),Z0(a,s)):(Ze(a),a.flags&=-16777217):(e.memoizedProps!==l&&ea(a),Ze(a),a.flags&=-16777217),null;case 27:kt(a),s=ft.current;var f=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ea(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Ze(a),null}e=k.current,To(a)?Tg(a):(e=Z_(f,l,s),a.stateNode=e,ea(a))}return Ze(a),null;case 5:if(kt(a),s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ea(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Ze(a),null}if(e=k.current,To(a))Tg(a);else{switch(f=Iu(ft.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[un]=a,e[En]=l;t:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break t;for(;f.sibling===null;){if(f.return===null||f.return===a)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=e;t:switch(wn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ea(a)}}return Ze(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&ea(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(r(166));if(e=ft.current,To(a)){if(e=a.stateNode,s=a.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[un]=a,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||V_(e.nodeValue,s)),e||vr(a)}else e=Iu(e).createTextNode(l),e[un]=a,a.stateNode=e}return Ze(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=To(a),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[un]=a}else Ao(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ze(a),f=!1}else f=wg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(Ji(a),a):(Ji(a),null)}if(Ji(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==e&&s&&(a.child.flags|=8192),Tu(a,a.updateQueue),Ze(a),null;case 4:return _t(),e===null&&$h(a.stateNode.containerInfo),Ze(a),null;case 10:return Qi(a.type),Ze(a),null;case 19:if(mt(hn),f=a.memoizedState,f===null)return Ze(a),null;if(l=(a.flags&128)!==0,m=f.rendering,m===null)if(l)Vo(f,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=yu(e),m!==null){for(a.flags|=128,Vo(f,!1),e=m.updateQueue,a.updateQueue=e,Tu(a,e),a.subtreeFlags=0,e=s,s=a.child;s!==null;)Eg(s,e),s=s.sibling;return $(hn,hn.current&1|2),a.child}e=e.sibling}f.tail!==null&&Zt()>Ru&&(a.flags|=128,l=!0,Vo(f,!1),a.lanes=4194304)}else{if(!l)if(e=yu(m),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Tu(a,e),Vo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Le)return Ze(a),null}else 2*Zt()-f.renderingStartTime>Ru&&s!==536870912&&(a.flags|=128,l=!0,Vo(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(e=f.last,e!==null?e.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Zt(),a.sibling=null,e=hn.current,$(hn,l?e&1|2:e&1),a):(Ze(a),null);case 22:case 23:return Ji(a),th(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(s&536870912)!==0&&(a.flags&128)===0&&(Ze(a),a.subtreeFlags&6&&(a.flags|=8192)):Ze(a),s=a.updateQueue,s!==null&&Tu(a,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==s&&(a.flags|=2048),e!==null&&mt(Sr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Qi(fn),Ze(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function kM(e,a){switch(Hf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Qi(fn),_t(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return kt(a),null;case 13:if(Ji(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Ao()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return mt(hn),null;case 4:return _t(),null;case 10:return Qi(a.type),null;case 22:case 23:return Ji(a),th(),e!==null&&mt(Sr),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Qi(fn),null;case 25:return null;default:return null}}function K0(e,a){switch(Hf(a),a.tag){case 3:Qi(fn),_t();break;case 26:case 27:case 5:kt(a);break;case 4:_t();break;case 13:Ji(a);break;case 19:mt(hn);break;case 10:Qi(a.type);break;case 22:case 23:Ji(a),th(),e!==null&&mt(Sr);break;case 24:Qi(fn)}}function ko(e,a){try{var s=a.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(A){Xe(a,a.return,A)}}function za(e,a,s){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,f=a;var G=s,at=A;try{at()}catch(yt){Xe(f,G,yt)}}}l=l.next}while(l!==m)}}catch(yt){Xe(a,a.return,yt)}}function Q0(e){var a=e.updateQueue;if(a!==null){var s=e.stateNode;try{Ig(a,s)}catch(l){Xe(e,e.return,l)}}}function $0(e,a,s){s.props=Er(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Xe(e,a,l)}}function Xo(e,a){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Xe(e,a,f)}}function Li(e,a){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xe(e,a,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xe(e,a,f)}else s.current=null}function J0(e){var a=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xe(e,e.return,f)}}function Rh(e,a,s){try{var l=e.stateNode;cE(l,e.type,s,a),l[En]=a}catch(f){Xe(e,e.return,f)}}function t_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function Ch(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||t_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dh(e,a,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(e),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Bu));else if(l!==4&&(l===27&&Xa(e.type)&&(s=e.stateNode,a=null),e=e.child,e!==null))for(Dh(e,a,s),e=e.sibling;e!==null;)Dh(e,a,s),e=e.sibling}function Au(e,a,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?s.insertBefore(e,a):s.appendChild(e);else if(l!==4&&(l===27&&Xa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Au(e,a,s),e=e.sibling;e!==null;)Au(e,a,s),e=e.sibling}function e_(e){var a=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);wn(a,l,s),a[un]=e,a[En]=s}catch(m){Xe(e,e.return,m)}}var na=!1,en=!1,Uh=!1,n_=typeof WeakSet=="function"?WeakSet:Set,xn=null;function XM(e,a){if(e=e.containerInfo,ed=Xu,e=dg(e),Cf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var M=0,A=-1,G=-1,at=0,yt=0,At=e,ot=null;e:for(;;){for(var lt;At!==s||f!==0&&At.nodeType!==3||(A=M+f),At!==m||l!==0&&At.nodeType!==3||(G=M+l),At.nodeType===3&&(M+=At.nodeValue.length),(lt=At.firstChild)!==null;)ot=At,At=lt;for(;;){if(At===e)break e;if(ot===s&&++at===f&&(A=M),ot===m&&++yt===l&&(G=M),(lt=At.nextSibling)!==null)break;At=ot,ot=At.parentNode}At=lt}s=A===-1||G===-1?null:{start:A,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(nd={focusedElem:e,selectionRange:s},Xu=!1,xn=a;xn!==null;)if(a=xn,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,xn=e;else for(;xn!==null;){switch(a=xn,m=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=a,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var oe=Er(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(oe,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Xe(s,s.return,ie)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,s=e.nodeType,s===9)rd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,xn=e;break}xn=a.return}}function i_(e,a,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ba(e,s),l&4&&ko(5,s);break;case 1:if(Ba(e,s),l&4)if(e=s.stateNode,a===null)try{e.componentDidMount()}catch(M){Xe(s,s.return,M)}else{var f=Er(s.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(f,a,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Xe(s,s.return,M)}}l&64&&Q0(s),l&512&&Xo(s,s.return);break;case 3:if(Ba(e,s),l&64&&(e=s.updateQueue,e!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{Ig(e,a)}catch(M){Xe(s,s.return,M)}}break;case 27:a===null&&l&4&&e_(s);case 26:case 5:Ba(e,s),a===null&&l&4&&J0(s),l&512&&Xo(s,s.return);break;case 12:Ba(e,s);break;case 13:Ba(e,s),l&4&&s_(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=JM.bind(null,s),_E(e,s))));break;case 22:if(l=s.memoizedState!==null||na,!l){a=a!==null&&a.memoizedState!==null||en,f=na;var m=en;na=l,(en=a)&&!m?Ia(e,s,(s.subtreeFlags&8772)!==0):Ba(e,s),na=f,en=m}break;case 30:break;default:Ba(e,s)}}function a_(e){var a=e.alternate;a!==null&&(e.alternate=null,a_(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ta(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Vn=!1;function ia(e,a,s){for(s=s.child;s!==null;)r_(e,a,s),s=s.sibling}function r_(e,a,s){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(st,s)}catch{}switch(s.tag){case 26:en||Li(s,a),ia(e,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:en||Li(s,a);var l=qe,f=Vn;Xa(s.type)&&(qe=s.stateNode,Vn=!1),ia(e,a,s),Jo(s.stateNode),qe=l,Vn=f;break;case 5:en||Li(s,a);case 6:if(l=qe,f=Vn,qe=null,ia(e,a,s),qe=l,Vn=f,qe!==null)if(Vn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(s.stateNode)}catch(m){Xe(s,a,m)}else try{qe.removeChild(s.stateNode)}catch(m){Xe(s,a,m)}break;case 18:qe!==null&&(Vn?(e=qe,q_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),ol(e)):q_(qe,s.stateNode));break;case 4:l=qe,f=Vn,qe=s.stateNode.containerInfo,Vn=!0,ia(e,a,s),qe=l,Vn=f;break;case 0:case 11:case 14:case 15:en||za(2,s,a),en||za(4,s,a),ia(e,a,s);break;case 1:en||(Li(s,a),l=s.stateNode,typeof l.componentWillUnmount=="function"&&$0(s,a,l)),ia(e,a,s);break;case 21:ia(e,a,s);break;case 22:en=(l=en)||s.memoizedState!==null,ia(e,a,s),en=l;break;default:ia(e,a,s)}}function s_(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ol(e)}catch(s){Xe(a,a.return,s)}}function WM(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new n_),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new n_),a;default:throw Error(r(435,e.tag))}}function Nh(e,a){var s=WM(e);a.forEach(function(l){var f=tE.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function Zn(e,a){var s=a.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,M=a,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(Xa(A.type)){qe=A.stateNode,Vn=!1;break t}break;case 5:qe=A.stateNode,Vn=!1;break t;case 3:case 4:qe=A.stateNode.containerInfo,Vn=!0;break t}A=A.return}if(qe===null)throw Error(r(160));r_(m,M,f),qe=null,Vn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)o_(a,e),a=a.sibling}var vi=null;function o_(e,a){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(a,e),Kn(e),l&4&&(za(3,e,e.return),ko(3,e),za(5,e,e.return));break;case 1:Zn(a,e),Kn(e),l&512&&(en||s===null||Li(s,s.return)),l&64&&na&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=vi;if(Zn(a,e),Kn(e),l&512&&(en||s===null||Li(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ba]||m[un]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),wn(m,l,s),m[un]=e,rn(m),l=m;break t;case"link":var M=ev("link","href",f).get(l+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(m=M[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break e}}m=f.createElement(l),wn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=ev("meta","content",f).get(l+(s.content||""))){for(A=0;A<M.length;A++)if(m=M[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break e}}m=f.createElement(l),wn(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[un]=e,rn(m),l=m}e.stateNode=l}else nv(f,e.type,e.stateNode);else e.stateNode=tv(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?nv(f,e.type,e.stateNode):tv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Rh(e,e.memoizedProps,s.memoizedProps)}break;case 27:Zn(a,e),Kn(e),l&512&&(en||s===null||Li(s,s.return)),s!==null&&l&4&&Rh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Zn(a,e),Kn(e),l&512&&(en||s===null||Li(s,s.return)),e.flags&32){f=e.stateNode;try{Di(f,"")}catch(lt){Xe(e,e.return,lt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Rh(e,f,s!==null?s.memoizedProps:f)),l&1024&&(Uh=!0);break;case 6:if(Zn(a,e),Kn(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(lt){Xe(e,e.return,lt)}}break;case 3:if(Gu=null,f=vi,vi=Fu(a.containerInfo),Zn(a,e),vi=f,Kn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ol(a.containerInfo)}catch(lt){Xe(e,e.return,lt)}Uh&&(Uh=!1,l_(e));break;case 4:l=vi,vi=Fu(e.stateNode.containerInfo),Zn(a,e),Kn(e),vi=l;break;case 12:Zn(a,e),Kn(e);break;case 13:Zn(a,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ih=Zt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nh(e,l)));break;case 22:f=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,at=na,yt=en;if(na=at||f,en=yt||G,Zn(a,e),en=yt,na=at,Kn(e),l&8192)t:for(a=e.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(s===null||G||na||en||br(e)),s=null,a=e;;){if(a.tag===5||a.tag===26){if(s===null){G=s=a;try{if(m=G.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=G.stateNode;var At=G.memoizedProps.style,ot=At!=null&&At.hasOwnProperty("display")?At.display:null;A.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(lt){Xe(G,G.return,lt)}}}else if(a.tag===6){if(s===null){G=a;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(lt){Xe(G,G.return,lt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Nh(e,s))));break;case 19:Zn(a,e),Kn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nh(e,l)));break;case 30:break;case 21:break;default:Zn(a,e),Kn(e)}}function Kn(e){var a=e.flags;if(a&2){try{for(var s,l=e.return;l!==null;){if(t_(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=Ch(e);Au(e,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Di(M,""),s.flags&=-33);var A=Ch(e);Au(e,A,M);break;case 3:case 4:var G=s.stateNode.containerInfo,at=Ch(e);Dh(e,at,G);break;default:throw Error(r(161))}}catch(yt){Xe(e,e.return,yt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function l_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;l_(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ba(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)i_(e,a.alternate,a),a=a.sibling}function br(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:za(4,a,a.return),br(a);break;case 1:Li(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&$0(a,a.return,s),br(a);break;case 27:Jo(a.stateNode);case 26:case 5:Li(a,a.return),br(a);break;case 22:a.memoizedState===null&&br(a);break;case 30:br(a);break;default:br(a)}e=e.sibling}}function Ia(e,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=e,m=a,M=m.flags;switch(m.tag){case 0:case 11:case 15:Ia(f,m,s),ko(4,m);break;case 1:if(Ia(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(at){Xe(l,l.return,at)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Bg(G[f],A)}catch(at){Xe(l,l.return,at)}}s&&M&64&&Q0(m),Xo(m,m.return);break;case 27:e_(m);case 26:case 5:Ia(f,m,s),s&&l===null&&M&4&&J0(m),Xo(m,m.return);break;case 12:Ia(f,m,s);break;case 13:Ia(f,m,s),s&&M&4&&s_(f,m);break;case 22:m.memoizedState===null&&Ia(f,m,s),Xo(m,m.return);break;case 30:break;default:Ia(f,m,s)}a=a.sibling}}function Lh(e,a){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Co(s))}function Oh(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Co(e))}function Oi(e,a,s,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)u_(e,a,s,l),a=a.sibling}function u_(e,a,s,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Oi(e,a,s,l),f&2048&&ko(9,a);break;case 1:Oi(e,a,s,l);break;case 3:Oi(e,a,s,l),f&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Co(e)));break;case 12:if(f&2048){Oi(e,a,s,l),e=a.stateNode;try{var m=a.memoizedProps,M=m.id,A=m.onPostCommit;typeof A=="function"&&A(M,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Xe(a,a.return,G)}}else Oi(e,a,s,l);break;case 13:Oi(e,a,s,l);break;case 23:break;case 22:m=a.stateNode,M=a.alternate,a.memoizedState!==null?m._visibility&2?Oi(e,a,s,l):Wo(e,a):m._visibility&2?Oi(e,a,s,l):(m._visibility|=2,ds(e,a,s,l,(a.subtreeFlags&10256)!==0)),f&2048&&Lh(M,a);break;case 24:Oi(e,a,s,l),f&2048&&Oh(a.alternate,a);break;default:Oi(e,a,s,l)}}function ds(e,a,s,l,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=e,M=a,A=s,G=l,at=M.flags;switch(M.tag){case 0:case 11:case 15:ds(m,M,A,G,f),ko(8,M);break;case 23:break;case 22:var yt=M.stateNode;M.memoizedState!==null?yt._visibility&2?ds(m,M,A,G,f):Wo(m,M):(yt._visibility|=2,ds(m,M,A,G,f)),f&&at&2048&&Lh(M.alternate,M);break;case 24:ds(m,M,A,G,f),f&&at&2048&&Oh(M.alternate,M);break;default:ds(m,M,A,G,f)}a=a.sibling}}function Wo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=e,l=a,f=l.flags;switch(l.tag){case 22:Wo(s,l),f&2048&&Lh(l.alternate,l);break;case 24:Wo(s,l),f&2048&&Oh(l.alternate,l);break;default:Wo(s,l)}a=a.sibling}}var Yo=8192;function ps(e){if(e.subtreeFlags&Yo)for(e=e.child;e!==null;)c_(e),e=e.sibling}function c_(e){switch(e.tag){case 26:ps(e),e.flags&Yo&&e.memoizedState!==null&&DE(vi,e.memoizedState,e.memoizedProps);break;case 5:ps(e);break;case 3:case 4:var a=vi;vi=Fu(e.stateNode.containerInfo),ps(e),vi=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Yo,Yo=16777216,ps(e),Yo=a):ps(e));break;default:ps(e)}}function f_(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function qo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];xn=l,d_(l,e)}f_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)h_(e),e=e.sibling}function h_(e){switch(e.tag){case 0:case 11:case 15:qo(e),e.flags&2048&&za(9,e,e.return);break;case 3:qo(e);break;case 12:qo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,wu(e)):qo(e);break;default:qo(e)}}function wu(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];xn=l,d_(l,e)}f_(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:za(8,a,a.return),wu(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,wu(a));break;default:wu(a)}e=e.sibling}}function d_(e,a){for(;xn!==null;){var s=xn;switch(s.tag){case 0:case 11:case 15:za(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Co(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,xn=l;else t:for(s=e;xn!==null;){l=xn;var f=l.sibling,m=l.return;if(a_(l),l===s){xn=null;break t}if(f!==null){f.return=m,xn=f;break t}xn=m}}}var YM={getCacheForType:function(e){var a=Dn(fn),s=a.data.get(e);return s===void 0&&(s=e(),a.data.set(e,s)),s}},qM=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,ve=null,Ae=0,Be=0,Qn=null,Fa=!1,ms=!1,Ph=!1,aa=0,Je=0,Ha=0,Tr=0,zh=0,ci=0,gs=0,jo=null,kn=null,Bh=!1,Ih=0,Ru=1/0,Cu=null,Ga=null,An=0,Va=null,_s=null,vs=0,Fh=0,Hh=null,p_=null,Zo=0,Gh=null;function $n(){if((ze&2)!==0&&Ae!==0)return Ae&-Ae;if(F.T!==null){var e=rs;return e!==0?e:jh()}return Re()}function m_(){ci===0&&(ci=(Ae&536870912)===0||Le?Y():536870912);var e=ui.current;return e!==null&&(e.flags|=32),ci}function Jn(e,a,s){(e===Ye&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(xs(e,0),ka(e,Ae,ci,!1)),Et(e,s),((ze&2)===0||e!==Ye)&&(e===Ye&&((ze&2)===0&&(Tr|=s),Je===4&&ka(e,Ae,ci,!1)),Pi(e))}function g_(e,a,s){if((ze&6)!==0)throw Error(r(327));var l=!s&&(a&124)===0&&(a&e.expiredLanes)===0||re(e,a),f=l?KM(e,a):Xh(e,a,!0),m=l;do{if(f===0){ms&&!l&&ka(e,a,0,!1);break}else{if(s=e.current.alternate,m&&!jM(s)){f=Xh(e,a,!1),m=!1;continue}if(f===2){if(m=a,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;t:{var A=e;f=jo;var G=A.current.memoizedState.isDehydrated;if(G&&(xs(A,M).flags|=256),M=Xh(A,M,!1),M!==2){if(Ph&&!G){A.errorRecoveryDisabledLanes|=m,Tr|=m,f=4;break t}m=kn,kn=f,m!==null&&(kn===null?kn=m:kn.push.apply(kn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){xs(e,0),ka(e,a,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:ka(l,a,ci,!Fa);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(f=Ih+300-Zt(),10<f)){if(ka(l,a,ci,!Fa),ce(l,0,!0)!==0)break t;l.timeoutHandle=W_(__.bind(null,l,s,kn,Cu,Bh,a,ci,Tr,gs,Fa,m,2,-0,0),f);break t}__(l,s,kn,Cu,Bh,a,ci,Tr,gs,Fa,m,0,-0,0)}}break}while(!0);Pi(e)}function __(e,a,s,l,f,m,M,A,G,at,yt,At,ot,lt){if(e.timeoutHandle=-1,At=a.subtreeFlags,(At&8192||(At&16785408)===16785408)&&(nl={stylesheets:null,count:0,unsuspend:CE},c_(a),At=UE(),At!==null)){e.cancelPendingCommit=At(b_.bind(null,e,a,m,s,l,f,M,A,G,yt,1,ot,lt)),ka(e,m,M,!at);return}b_(e,a,m,s,l,f,M,A,G)}function jM(e){for(var a=e;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!qn(m(),f))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ka(e,a,s,l){a&=~zh,a&=~Tr,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var f=a;0<f;){var m=31-Nt(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&It(e,s,a)}function Du(){return(ze&6)===0?(Ko(0),!1):!0}function Vh(){if(ve!==null){if(Be===0)var e=ve.return;else e=ve,Ki=xr=null,rh(e),fs=null,Ho=0,e=ve;for(;e!==null;)K0(e.alternate,e),e=e.return;ve=null}}function xs(e,a){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,hE(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Vh(),Ye=e,ve=s=qi(e.current,null),Ae=a,Be=0,Qn=null,Fa=!1,ms=re(e,a),Ph=!1,gs=ci=zh=Tr=Ha=Je=0,kn=jo=null,Bh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var f=31-Nt(l),m=1<<f;a|=e[f],l&=~m}return aa=a,$l(),s}function v_(e,a){pe=null,F.H=_u,a===Uo||a===ou?(a=Pg(),Be=3):a===Ng?(a=Pg(),Be=4):Be=a===z0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Qn=a,ve===null&&(Je=1,Mu(e,ri(a,e.current)))}function x_(){var e=F.H;return F.H=_u,e===null?_u:e}function y_(){var e=F.A;return F.A=YM,e}function kh(){Je=4,Fa||(Ae&4194048)!==Ae&&ui.current!==null||(ms=!0),(Ha&134217727)===0&&(Tr&134217727)===0||Ye===null||ka(Ye,Ae,ci,!1)}function Xh(e,a,s){var l=ze;ze|=2;var f=x_(),m=y_();(Ye!==e||Ae!==a)&&(Cu=null,xs(e,a)),a=!1;var M=Je;t:do try{if(Be!==0&&ve!==null){var A=ve,G=Qn;switch(Be){case 8:Vh(),M=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(a=!0);var at=Be;if(Be=0,Qn=null,ys(e,A,G,at),s&&ms){M=0;break t}break;default:at=Be,Be=0,Qn=null,ys(e,A,G,at)}}ZM(),M=Je;break}catch(yt){v_(e,yt)}while(!0);return a&&e.shellSuspendCounter++,Ki=xr=null,ze=l,F.H=f,F.A=m,ve===null&&(Ye=null,Ae=0,$l()),M}function ZM(){for(;ve!==null;)S_(ve)}function KM(e,a){var s=ze;ze|=2;var l=x_(),f=y_();Ye!==e||Ae!==a?(Cu=null,Ru=Zt()+500,xs(e,a)):ms=re(e,a);t:do try{if(Be!==0&&ve!==null){a=ve;var m=Qn;e:switch(Be){case 1:Be=0,Qn=null,ys(e,a,m,1);break;case 2:case 9:if(Lg(m)){Be=0,Qn=null,M_(a);break}a=function(){Be!==2&&Be!==9||Ye!==e||(Be=7),Pi(e)},m.then(a,a);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Lg(m)?(Be=0,Qn=null,M_(a)):(Be=0,Qn=null,ys(e,a,m,7));break;case 5:var M=null;switch(ve.tag){case 26:M=ve.memoizedState;case 5:case 27:var A=ve;if(!M||iv(M)){Be=0,Qn=null;var G=A.sibling;if(G!==null)ve=G;else{var at=A.return;at!==null?(ve=at,Uu(at)):ve=null}break e}}Be=0,Qn=null,ys(e,a,m,5);break;case 6:Be=0,Qn=null,ys(e,a,m,6);break;case 8:Vh(),Je=6;break t;default:throw Error(r(462))}}QM();break}catch(yt){v_(e,yt)}while(!0);return Ki=xr=null,F.H=l,F.A=f,ze=s,ve!==null?0:(Ye=null,Ae=0,$l(),Je)}function QM(){for(;ve!==null&&!Te();)S_(ve)}function S_(e){var a=j0(e.alternate,e,aa);e.memoizedProps=e.pendingProps,a===null?Uu(e):ve=a}function M_(e){var a=e,s=a.alternate;switch(a.tag){case 15:case 0:a=V0(s,a,a.pendingProps,a.type,void 0,Ae);break;case 11:a=V0(s,a,a.pendingProps,a.type.render,a.ref,Ae);break;case 5:rh(a);default:K0(s,a),a=ve=Eg(a,aa),a=j0(s,a,aa)}e.memoizedProps=e.pendingProps,a===null?Uu(e):ve=a}function ys(e,a,s,l){Ki=xr=null,rh(a),fs=null,Ho=0;var f=a.return;try{if(HM(e,f,a,s,Ae)){Je=1,Mu(e,ri(s,e.current)),ve=null;return}}catch(m){if(f!==null)throw ve=f,m;Je=1,Mu(e,ri(s,e.current)),ve=null;return}a.flags&32768?(Le||l===1?e=!0:ms||(Ae&536870912)!==0?e=!1:(Fa=e=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),E_(a,e)):Uu(a)}function Uu(e){var a=e;do{if((a.flags&32768)!==0){E_(a,Fa);return}e=a.return;var s=VM(a.alternate,a,aa);if(s!==null){ve=s;return}if(a=a.sibling,a!==null){ve=a;return}ve=a=e}while(a!==null);Je===0&&(Je=5)}function E_(e,a){do{var s=kM(e.alternate,e);if(s!==null){s.flags&=32767,ve=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(e=e.sibling,e!==null)){ve=e;return}ve=e=s}while(e!==null);Je=6,ve=null}function b_(e,a,s,l,f,m,M,A,G){e.cancelPendingCommit=null;do Nu();while(An!==0);if((ze&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(m=a.lanes|a.childLanes,m|=Of,Vt(e,s,m,M,A,G),e===Ye&&(ve=Ye=null,Ae=0),_s=a,Va=e,vs=s,Fh=m,Hh=f,p_=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,eE(N,function(){return C_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=j.p,j.p=2,M=ze,ze|=4;try{XM(e,a,s)}finally{ze=M,j.p=f,F.T=l}}An=1,T_(),A_(),w_()}}function T_(){if(An===1){An=0;var e=Va,a=_s,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=j.p;j.p=2;var f=ze;ze|=4;try{o_(a,e);var m=nd,M=dg(e.containerInfo),A=m.focusedElem,G=m.selectionRange;if(M!==A&&A&&A.ownerDocument&&hg(A.ownerDocument.documentElement,A)){if(G!==null&&Cf(A)){var at=G.start,yt=G.end;if(yt===void 0&&(yt=at),"selectionStart"in A)A.selectionStart=at,A.selectionEnd=Math.min(yt,A.value.length);else{var At=A.ownerDocument||document,ot=At&&At.defaultView||window;if(ot.getSelection){var lt=ot.getSelection(),oe=A.textContent.length,ie=Math.min(G.start,oe),He=G.end===void 0?ie:Math.min(G.end,oe);!lt.extend&&ie>He&&(M=He,He=ie,ie=M);var Z=fg(A,ie),X=fg(A,He);if(Z&&X&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var et=At.createRange();et.setStart(Z.node,Z.offset),lt.removeAllRanges(),ie>He?(lt.addRange(et),lt.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),lt.addRange(et))}}}}for(At=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&At.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<At.length;A++){var Mt=At[A];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}Xu=!!ed,nd=ed=null}finally{ze=f,j.p=l,F.T=s}}e.current=a,An=2}}function A_(){if(An===2){An=0;var e=Va,a=_s,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=j.p;j.p=2;var f=ze;ze|=4;try{i_(e,a.alternate,a)}finally{ze=f,j.p=l,F.T=s}}An=3}}function w_(){if(An===4||An===3){An=0,te();var e=Va,a=_s,s=vs,l=p_;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?An=5:(An=0,_s=Va=null,R_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ga=null),an(s),a=a.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(st,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=F.T,f=j.p,j.p=2,F.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var A=l[M];m(A.value,{componentStack:A.stack})}}finally{F.T=a,j.p=f}}(vs&3)!==0&&Nu(),Pi(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===Gh?Zo++:(Zo=0,Gh=e):Zo=0,Ko(0)}}function R_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Co(a)))}function Nu(e){return T_(),A_(),w_(),C_()}function C_(){if(An!==5)return!1;var e=Va,a=Fh;Fh=0;var s=an(vs),l=F.T,f=j.p;try{j.p=32>s?32:s,F.T=null,s=Hh,Hh=null;var m=Va,M=vs;if(An=0,_s=Va=null,vs=0,(ze&6)!==0)throw Error(r(331));var A=ze;if(ze|=4,h_(m.current),u_(m,m.current,M,s),ze=A,Ko(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(st,m)}catch{}return!0}finally{j.p=f,F.T=l,R_(e,a)}}function D_(e,a,s){a=ri(s,a),a=xh(e.stateNode,a,2),e=Na(e,a,2),e!==null&&(Et(e,2),Pi(e))}function Xe(e,a,s){if(e.tag===3)D_(e,e,s);else for(;a!==null;){if(a.tag===3){D_(a,e,s);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ga===null||!Ga.has(l))){e=ri(s,e),s=O0(2),l=Na(a,s,2),l!==null&&(P0(s,l,a,e),Et(l,2),Pi(l));break}}a=a.return}}function Wh(e,a,s){var l=e.pingCache;if(l===null){l=e.pingCache=new qM;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(s)||(Ph=!0,f.add(s),e=$M.bind(null,e,a,s),a.then(e,e))}function $M(e,a,s){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ye===e&&(Ae&s)===s&&(Je===4||Je===3&&(Ae&62914560)===Ae&&300>Zt()-Ih?(ze&2)===0&&xs(e,0):zh|=s,gs===Ae&&(gs=0)),Pi(e)}function U_(e,a){a===0&&(a=Bt()),e=es(e,a),e!==null&&(Et(e,a),Pi(e))}function JM(e){var a=e.memoizedState,s=0;a!==null&&(s=a.retryLane),U_(e,s)}function tE(e,a){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(a),U_(e,s)}function eE(e,a){return Kt(e,a)}var Lu=null,Ss=null,Yh=!1,Ou=!1,qh=!1,Ar=0;function Pi(e){e!==Ss&&e.next===null&&(Ss===null?Lu=Ss=e:Ss=Ss.next=e),Ou=!0,Yh||(Yh=!0,iE())}function Ko(e,a){if(!qh&&Ou){qh=!0;do for(var s=!1,l=Lu;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Nt(42|e)+1)-1,m&=f&~(M&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,P_(l,m))}else m=Ae,m=ce(l,l===Ye?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||re(l,m)||(s=!0,P_(l,m));l=l.next}while(s);qh=!1}}function nE(){N_()}function N_(){Ou=Yh=!1;var e=0;Ar!==0&&(fE()&&(e=Ar),Ar=0);for(var a=Zt(),s=null,l=Lu;l!==null;){var f=l.next,m=L_(l,a);m===0?(l.next=null,s===null?Lu=f:s.next=f,f===null&&(Ss=s)):(s=l,(e!==0||(m&3)!==0)&&(Ou=!0)),l=f}Ko(e)}function L_(e,a){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-Nt(m),A=1<<M,G=f[M];G===-1?((A&s)===0||(A&l)!==0)&&(f[M]=Oe(A,a)):G<=a&&(e.expiredLanes|=A),m&=~A}if(a=Ye,s=Ae,s=ce(e,e===a?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===a&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&H(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||re(e,s)){if(a=s&-s,a===e.callbackPriority)return a;switch(l!==null&&H(l),an(s)){case 2:case 8:s=Ot;break;case 32:s=N;break;case 268435456:s=tt;break;default:s=N}return l=O_.bind(null,e),s=Kt(s,l),e.callbackPriority=a,e.callbackNode=s,a}return l!==null&&l!==null&&H(l),e.callbackPriority=2,e.callbackNode=null,2}function O_(e,a){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Nu()&&e.callbackNode!==s)return null;var l=Ae;return l=ce(e,e===Ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(g_(e,l,a),L_(e,Zt()),e.callbackNode!=null&&e.callbackNode===s?O_.bind(null,e):null)}function P_(e,a){if(Nu())return null;g_(e,a,!0)}function iE(){dE(function(){(ze&6)!==0?Kt(ge,nE):N_()})}function jh(){return Ar===0&&(Ar=Y()),Ar}function z_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wl(""+e)}function B_(e,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,e.id&&s.setAttribute("form",e.id),a.parentNode.insertBefore(s,a),e=new FormData(e),s.parentNode.removeChild(s),e}function aE(e,a,s,l,f){if(a==="submit"&&s&&s.stateNode===f){var m=z_((f[En]||null).action),M=l.submitter;M&&(a=(a=M[En]||null)?z_(a.formAction):M.getAttribute("formAction"),a!==null&&(m=a,M=null));var A=new Zl("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ar!==0){var G=M?B_(f,M):new FormData(f);ph(s,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(A.preventDefault(),G=M?B_(f,M):new FormData(f),ph(s,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var Zh=0;Zh<Lf.length;Zh++){var Kh=Lf[Zh],rE=Kh.toLowerCase(),sE=Kh[0].toUpperCase()+Kh.slice(1);_i(rE,"on"+sE)}_i(gg,"onAnimationEnd"),_i(_g,"onAnimationIteration"),_i(vg,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(EM,"onTransitionRun"),_i(bM,"onTransitionStart"),_i(TM,"onTransitionCancel"),_i(xg,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function I_(e,a){a=(a&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var M=l.length-1;0<=M;M--){var A=l[M],G=A.instance,at=A.currentTarget;if(A=A.listener,G!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=at;try{m(f)}catch(yt){Su(yt)}f.currentTarget=null,m=G}else for(M=0;M<l.length;M++){if(A=l[M],G=A.instance,at=A.currentTarget,A=A.listener,G!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=at;try{m(f)}catch(yt){Su(yt)}f.currentTarget=null,m=G}}}}function xe(e,a){var s=a[lr];s===void 0&&(s=a[lr]=new Set);var l=e+"__bubble";s.has(l)||(F_(a,e,2,!1),s.add(l))}function Qh(e,a,s){var l=0;a&&(l|=4),F_(s,e,l,a)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function $h(e){if(!e[Pu]){e[Pu]=!0,kl.forEach(function(s){s!=="selectionchange"&&(oE.has(s)||Qh(s,!1,e),Qh(s,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Pu]||(a[Pu]=!0,Qh("selectionchange",!1,a))}}function F_(e,a,s,l){switch(uv(a)){case 2:var f=OE;break;case 8:f=PE;break;default:f=hd}s=f.bind(null,a,s,e),f=void 0,!yf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(a,s,{capture:!0,passive:f}):e.addEventListener(a,s,!0):f!==void 0?e.addEventListener(a,s,{passive:f}):e.addEventListener(a,s,!1)}function Jh(e,a,s,l,f){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===f)break;if(M===4)for(M=l.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;A!==null;){if(M=Gi(A),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){l=m=M;continue t}A=A.parentNode}}l=l.return}Ym(function(){var at=m,yt=vf(s),At=[];t:{var ot=yg.get(e);if(ot!==void 0){var lt=Zl,oe=e;switch(e){case"keypress":if(ql(s)===0)break t;case"keydown":case"keyup":lt=eM;break;case"focusin":oe="focus",lt=bf;break;case"focusout":oe="blur",lt=bf;break;case"beforeblur":case"afterblur":lt=bf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=kS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=aM;break;case gg:case _g:case vg:lt=YS;break;case xg:lt=sM;break;case"scroll":case"scrollend":lt=GS;break;case"wheel":lt=lM;break;case"copy":case"cut":case"paste":lt=jS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Qm;break;case"toggle":case"beforetoggle":lt=cM}var ie=(a&4)!==0,He=!ie&&(e==="scroll"||e==="scrollend"),Z=ie?ot!==null?ot+"Capture":null:ot;ie=[];for(var X=at,et;X!==null;){var Mt=X;if(et=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||et===null||Z===null||(Mt=go(X,Z),Mt!=null&&ie.push($o(X,Mt,et))),He)break;X=X.return}0<ie.length&&(ot=new lt(ot,oe,null,s,yt),At.push({event:ot,listeners:ie}))}}if((a&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",ot&&s!==_f&&(oe=s.relatedTarget||s.fromElement)&&(Gi(oe)||oe[Fn]))break t;if((lt||ot)&&(ot=yt.window===yt?yt:(ot=yt.ownerDocument)?ot.defaultView||ot.parentWindow:window,lt?(oe=s.relatedTarget||s.toElement,lt=at,oe=oe?Gi(oe):null,oe!==null&&(He=u(oe),ie=oe.tag,oe!==He||ie!==5&&ie!==27&&ie!==6)&&(oe=null)):(lt=null,oe=at),lt!==oe)){if(ie=Zm,Mt="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Qm,Mt="onPointerLeave",Z="onPointerEnter",X="pointer"),He=lt==null?ot:cr(lt),et=oe==null?ot:cr(oe),ot=new ie(Mt,X+"leave",lt,s,yt),ot.target=He,ot.relatedTarget=et,Mt=null,Gi(yt)===at&&(ie=new ie(Z,X+"enter",oe,s,yt),ie.target=et,ie.relatedTarget=He,Mt=ie),He=Mt,lt&&oe)e:{for(ie=lt,Z=oe,X=0,et=ie;et;et=Ms(et))X++;for(et=0,Mt=Z;Mt;Mt=Ms(Mt))et++;for(;0<X-et;)ie=Ms(ie),X--;for(;0<et-X;)Z=Ms(Z),et--;for(;X--;){if(ie===Z||Z!==null&&ie===Z.alternate)break e;ie=Ms(ie),Z=Ms(Z)}ie=null}else ie=null;lt!==null&&H_(At,ot,lt,ie,!1),oe!==null&&He!==null&&H_(At,He,oe,ie,!0)}}t:{if(ot=at?cr(at):window,lt=ot.nodeName&&ot.nodeName.toLowerCase(),lt==="select"||lt==="input"&&ot.type==="file")var qt=rg;else if(ig(ot))if(sg)qt=yM;else{qt=vM;var me=_M}else lt=ot.nodeName,!lt||lt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?at&&gf(at.elementType)&&(qt=rg):qt=xM;if(qt&&(qt=qt(e,at))){ag(At,qt,s,yt);break t}me&&me(e,ot,at),e==="focusout"&&at&&ot.type==="number"&&at.memoizedProps.value!=null&&Cn(ot,"number",ot.value)}switch(me=at?cr(at):window,e){case"focusin":(ig(me)||me.contentEditable==="true")&&($r=me,Df=at,bo=null);break;case"focusout":bo=Df=$r=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,pg(At,s,yt);break;case"selectionchange":if(MM)break;case"keydown":case"keyup":pg(At,s,yt)}var Qt;if(Af)t:{switch(e){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else Qr?eg(e,s)&&(ae="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ae="onCompositionStart");ae&&($m&&s.locale!=="ko"&&(Qr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Qr&&(Qt=qm()):(Ra=yt,Sf="value"in Ra?Ra.value:Ra.textContent,Qr=!0)),me=zu(at,ae),0<me.length&&(ae=new Km(ae,e,null,s,yt),At.push({event:ae,listeners:me}),Qt?ae.data=Qt:(Qt=ng(s),Qt!==null&&(ae.data=Qt)))),(Qt=hM?dM(e,s):pM(e,s))&&(ae=zu(at,"onBeforeInput"),0<ae.length&&(me=new Km("onBeforeInput","beforeinput",null,s,yt),At.push({event:me,listeners:ae}),me.data=Qt)),aE(At,e,at,s,yt)}I_(At,a)})}function $o(e,a,s){return{instance:e,listener:a,currentTarget:s}}function zu(e,a){for(var s=a+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=go(e,s),f!=null&&l.unshift($o(e,f,m)),f=go(e,a),f!=null&&l.push($o(e,f,m))),e.tag===3)return l;e=e.return}return[]}function Ms(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function H_(e,a,s,l,f){for(var m=a._reactName,M=[];s!==null&&s!==l;){var A=s,G=A.alternate,at=A.stateNode;if(A=A.tag,G!==null&&G===l)break;A!==5&&A!==26&&A!==27||at===null||(G=at,f?(at=go(s,m),at!=null&&M.unshift($o(s,at,G))):f||(at=go(s,m),at!=null&&M.push($o(s,at,G)))),s=s.return}M.length!==0&&e.push({event:a,listeners:M})}var lE=/\r\n?/g,uE=/\u0000|\uFFFD/g;function G_(e){return(typeof e=="string"?e:""+e).replace(lE,`
`).replace(uE,"")}function V_(e,a){return a=G_(a),G_(e)===a}function Bu(){}function Fe(e,a,s,l,f,m){switch(s){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Di(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Di(e,""+l);break;case"className":zt(e,"class",l);break;case"tabIndex":zt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,s,l);break;case"style":Xm(e,l,m);break;case"data":if(a!=="object"){zt(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Wl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(a!=="input"&&Fe(e,a,"name",f.name,f,null),Fe(e,a,"formEncType",f.formEncType,f,null),Fe(e,a,"formMethod",f.formMethod,f,null),Fe(e,a,"formTarget",f.formTarget,f,null)):(Fe(e,a,"encType",f.encType,f,null),Fe(e,a,"method",f.method,f,null),Fe(e,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Wl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Bu);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Wl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Dt(e,"popover",l);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Dt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=FS.get(s)||s,Dt(e,s,l))}}function td(e,a,s,l,f,m){switch(s){case"style":Xm(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Di(e,l):(typeof l=="number"||typeof l=="bigint")&&Di(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Bu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),a=s.slice(2,f?s.length-7:void 0),m=e[En]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(a,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(a,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Dt(e,s,l)}}}function wn(e,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Fe(e,a,m,M,s,null)}}f&&Fe(e,a,"srcSet",s.srcSet,s,null),l&&Fe(e,a,"src",s.src,s,null);return;case"input":xe("invalid",e);var A=m=M=f=null,G=null,at=null;for(l in s)if(s.hasOwnProperty(l)){var yt=s[l];if(yt!=null)switch(l){case"name":f=yt;break;case"type":M=yt;break;case"checked":G=yt;break;case"defaultChecked":at=yt;break;case"value":m=yt;break;case"defaultValue":A=yt;break;case"children":case"dangerouslySetInnerHTML":if(yt!=null)throw Error(r(137,a));break;default:Fe(e,a,l,yt,s,null)}}ke(e,m,A,G,at,M,f,!1),Qe(e);return;case"select":xe("invalid",e),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Fe(e,a,f,A,s,null)}a=m,s=M,e.multiple=!!l,a!=null?cn(e,!!l,a,!1):s!=null&&cn(e,!!l,s,!0);return;case"textarea":xe("invalid",e),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Fe(e,a,M,A,s,null)}bn(e,l,f,m),Qe(e);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Fe(e,a,G,l,s,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<Qo.length;l++)xe(Qo[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in s)if(s.hasOwnProperty(at)&&(l=s[at],l!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Fe(e,a,at,l,s,null)}return;default:if(gf(a)){for(yt in s)s.hasOwnProperty(yt)&&(l=s[yt],l!==void 0&&td(e,a,yt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Fe(e,a,A,l,s,null))}function cE(e,a,s,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,A=null,G=null,at=null,yt=null;for(lt in s){var At=s[lt];if(s.hasOwnProperty(lt)&&At!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":G=At;default:l.hasOwnProperty(lt)||Fe(e,a,lt,null,l,At)}}for(var ot in l){var lt=l[ot];if(At=s[ot],l.hasOwnProperty(ot)&&(lt!=null||At!=null))switch(ot){case"type":m=lt;break;case"name":f=lt;break;case"checked":at=lt;break;case"defaultChecked":yt=lt;break;case"value":M=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,a));break;default:lt!==At&&Fe(e,a,ot,lt,l,At)}}Xi(e,M,A,G,at,yt,m,f);return;case"select":lt=M=A=ot=null;for(m in s)if(G=s[m],s.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":lt=G;default:l.hasOwnProperty(m)||Fe(e,a,m,null,l,G)}for(f in l)if(m=l[f],G=s[f],l.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":ot=m;break;case"defaultValue":A=m;break;case"multiple":M=m;default:m!==G&&Fe(e,a,f,m,l,G)}a=A,s=M,l=lt,ot!=null?cn(e,!!s,ot,!1):!!l!=!!s&&(a!=null?cn(e,!!s,a,!0):cn(e,!!s,s?[]:"",!1));return;case"textarea":lt=ot=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,a,A,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":ot=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Fe(e,a,M,f,l,m)}_n(e,ot,lt);return;case"option":for(var oe in s)if(ot=s[oe],s.hasOwnProperty(oe)&&ot!=null&&!l.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Fe(e,a,oe,null,l,ot)}for(G in l)if(ot=l[G],lt=s[G],l.hasOwnProperty(G)&&ot!==lt&&(ot!=null||lt!=null))switch(G){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Fe(e,a,G,ot,l,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in s)ot=s[ie],s.hasOwnProperty(ie)&&ot!=null&&!l.hasOwnProperty(ie)&&Fe(e,a,ie,null,l,ot);for(at in l)if(ot=l[at],lt=s[at],l.hasOwnProperty(at)&&ot!==lt&&(ot!=null||lt!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,a));break;default:Fe(e,a,at,ot,l,lt)}return;default:if(gf(a)){for(var He in s)ot=s[He],s.hasOwnProperty(He)&&ot!==void 0&&!l.hasOwnProperty(He)&&td(e,a,He,void 0,l,ot);for(yt in l)ot=l[yt],lt=s[yt],!l.hasOwnProperty(yt)||ot===lt||ot===void 0&&lt===void 0||td(e,a,yt,ot,l,lt);return}}for(var Z in s)ot=s[Z],s.hasOwnProperty(Z)&&ot!=null&&!l.hasOwnProperty(Z)&&Fe(e,a,Z,null,l,ot);for(At in l)ot=l[At],lt=s[At],!l.hasOwnProperty(At)||ot===lt||ot==null&&lt==null||Fe(e,a,At,ot,l,lt)}var ed=null,nd=null;function Iu(e){return e.nodeType===9?e:e.ownerDocument}function k_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function id(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ad=null;function fE(){var e=window.event;return e&&e.type==="popstate"?e===ad?!1:(ad=e,!0):(ad=null,!1)}var W_=typeof setTimeout=="function"?setTimeout:void 0,hE=typeof clearTimeout=="function"?clearTimeout:void 0,Y_=typeof Promise=="function"?Promise:void 0,dE=typeof queueMicrotask=="function"?queueMicrotask:typeof Y_<"u"?function(e){return Y_.resolve(null).then(e).catch(pE)}:W_;function pE(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function q_(e,a){var s=a,l=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var M=e.ownerDocument;if(s&1&&Jo(M.documentElement),s&2&&Jo(M.body),s&4)for(s=M.head,Jo(s),M=s.firstChild;M;){var A=M.nextSibling,G=M.nodeName;M[ba]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(f===0){e.removeChild(m),ol(a);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);ol(a)}function rd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":rd(s),Ta(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function mE(e,a,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ba])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function gE(e,a,s){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=xi(e.nextSibling),e===null))return null;return e}function sd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function _E(e,a){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")a();else{var l=function(){a(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function xi(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var od=null;function j_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return e;a--}else s==="/$"&&a++}e=e.previousSibling}return null}function Z_(e,a,s){switch(a=Iu(s),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Jo(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ta(e)}var fi=new Map,K_=new Set;function Fu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=j.d;j.d={f:vE,r:xE,D:yE,C:SE,L:ME,m:EE,X:TE,S:bE,M:AE};function vE(){var e=ra.f(),a=Du();return e||a}function xE(e){var a=Vi(e);a!==null&&a.tag===5&&a.type==="form"?g0(a):ra.r(e)}var Es=typeof document>"u"?null:document;function Q_(e,a,s){var l=Es;if(l&&typeof a=="string"&&a){var f=We(a);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),K_.has(f)||(K_.add(f),e={rel:e,crossOrigin:s,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),wn(a,"link",e),rn(a),l.head.appendChild(a)))}}function yE(e){ra.D(e),Q_("dns-prefetch",e,null)}function SE(e,a){ra.C(e,a),Q_("preconnect",e,a)}function ME(e,a,s){ra.L(e,a,s);var l=Es;if(l&&e&&a){var f='link[rel="preload"][as="'+We(a)+'"]';a==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+We(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+We(s.imageSizes)+'"]')):f+='[href="'+We(e)+'"]';var m=f;switch(a){case"style":m=bs(e);break;case"script":m=Ts(e)}fi.has(m)||(e=g({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:e,as:a},s),fi.set(m,e),l.querySelector(f)!==null||a==="style"&&l.querySelector(tl(m))||a==="script"&&l.querySelector(el(m))||(a=l.createElement("link"),wn(a,"link",e),rn(a),l.head.appendChild(a)))}}function EE(e,a){ra.m(e,a);var s=Es;if(s&&e){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+We(l)+'"][href="'+We(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ts(e)}if(!fi.has(m)&&(e=g({rel:"modulepreload",href:e},a),fi.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(el(m)))return}l=s.createElement("link"),wn(l,"link",e),rn(l),s.head.appendChild(l)}}}function bE(e,a,s){ra.S(e,a,s);var l=Es;if(l&&e){var f=Aa(l).hoistableStyles,m=bs(e);a=a||"default";var M=f.get(m);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(tl(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},s),(s=fi.get(m))&&ld(e,s);var G=M=l.createElement("link");rn(G),wn(G,"link",e),G._p=new Promise(function(at,yt){G.onload=at,G.onerror=yt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Hu(M,a,l)}M={type:"stylesheet",instance:M,count:1,state:A},f.set(m,M)}}}function TE(e,a){ra.X(e,a);var s=Es;if(s&&e){var l=Aa(s).hoistableScripts,f=Ts(e),m=l.get(f);m||(m=s.querySelector(el(f)),m||(e=g({src:e,async:!0},a),(a=fi.get(f))&&ud(e,a),m=s.createElement("script"),rn(m),wn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function AE(e,a){ra.M(e,a);var s=Es;if(s&&e){var l=Aa(s).hoistableScripts,f=Ts(e),m=l.get(f);m||(m=s.querySelector(el(f)),m||(e=g({src:e,async:!0,type:"module"},a),(a=fi.get(f))&&ud(e,a),m=s.createElement("script"),rn(m),wn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function $_(e,a,s,l){var f=(f=ft.current)?Fu(f):null;if(!f)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=bs(s.href),s=Aa(f).hoistableStyles,l=s.get(a),l||(l={type:"style",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=bs(s.href);var m=Aa(f).hoistableStyles,M=m.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=f.querySelector(tl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),fi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},fi.set(e,s),m||wE(f,e,s,M.state))),a&&l===null)throw Error(r(528,""));return M}if(a&&l!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ts(s),s=Aa(f).hoistableScripts,l=s.get(a),l||(l={type:"script",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function bs(e){return'href="'+We(e)+'"'}function tl(e){return'link[rel="stylesheet"]['+e+"]"}function J_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function wE(e,a,s,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),wn(a,"link",s),rn(a),e.head.appendChild(a))}function Ts(e){return'[src="'+We(e)+'"]'}function el(e){return"script[async]"+e}function tv(e,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+We(s.href)+'"]');if(l)return a.instance=l,rn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),rn(l),wn(l,"style",f),Hu(l,s.precedence,e),a.instance=l;case"stylesheet":f=bs(s.href);var m=e.querySelector(tl(f));if(m)return a.state.loading|=4,a.instance=m,rn(m),m;l=J_(s),(f=fi.get(f))&&ld(l,f),m=(e.ownerDocument||e).createElement("link"),rn(m);var M=m;return M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),wn(m,"link",l),a.state.loading|=4,Hu(m,s.precedence,e),a.instance=m;case"script":return m=Ts(s.src),(f=e.querySelector(el(m)))?(a.instance=f,rn(f),f):(l=s,(f=fi.get(m))&&(l=g({},s),ud(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),rn(f),wn(f,"link",l),e.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Hu(l,s.precedence,e));return a.instance}function Hu(e,a,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===a)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(e,a.firstChild))}function ld(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function ud(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Gu=null;function ev(e,a,s){if(Gu===null){var l=new Map,f=Gu=new Map;f.set(s,l)}else f=Gu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[ba]||m[un]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(a)||"";M=e+M;var A=l.get(M);A?A.push(m):l.set(M,[m])}}return l}function nv(e,a,s){e=e.ownerDocument||e,e.head.insertBefore(s,a==="title"?e.querySelector("head > title"):null)}function RE(e,a,s){if(s===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function iv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var nl=null;function CE(){}function DE(e,a,s){if(nl===null)throw Error(r(475));var l=nl;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=bs(s.href),m=e.querySelector(tl(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Vu.bind(l),e.then(l,l)),a.state.loading|=4,a.instance=m,rn(m);return}m=e.ownerDocument||e,s=J_(s),(f=fi.get(f))&&ld(s,f),m=m.createElement("link"),rn(m);var M=m;M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),wn(m,"link",s),a.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Vu.bind(l),e.addEventListener("load",a),e.addEventListener("error",a))}}function UE(){if(nl===null)throw Error(r(475));var e=nl;return e.stylesheets&&e.count===0&&cd(e,e.stylesheets),0<e.count?function(a){var s=setTimeout(function(){if(e.stylesheets&&cd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Vu(){if(this.count--,this.count===0){if(this.stylesheets)cd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ku=null;function cd(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ku=new Map,a.forEach(NE,e),ku=null,Vu.call(e))}function NE(e,a){if(!(a.state.loading&4)){var s=ku.get(e);if(s)var l=s.get(null);else{s=new Map,ku.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=a.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=Vu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),a.state.loading|=4}}var il={$$typeof:D,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function LE(e,a,s,l,f,m,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function av(e,a,s,l,f,m,M,A,G,at,yt,At){return e=new LE(e,a,s,M,A,G,at,At),a=1,m===!0&&(a|=24),m=jn(3,null,null,a),e.current=m,m.stateNode=e,a=Wf(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:a},Zf(m),e}function rv(e){return e?(e=ns,e):ns}function sv(e,a,s,l,f,m){f=rv(f),l.context===null?l.context=f:l.pendingContext=f,l=Ua(a),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Na(e,l,a),s!==null&&(Jn(s,e,a),Lo(s,e,a))}function ov(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<a?s:a}}function fd(e,a){ov(e,a),(e=e.alternate)&&ov(e,a)}function lv(e){if(e.tag===13){var a=es(e,67108864);a!==null&&Jn(a,e,67108864),fd(e,67108864)}}var Xu=!0;function OE(e,a,s,l){var f=F.T;F.T=null;var m=j.p;try{j.p=2,hd(e,a,s,l)}finally{j.p=m,F.T=f}}function PE(e,a,s,l){var f=F.T;F.T=null;var m=j.p;try{j.p=8,hd(e,a,s,l)}finally{j.p=m,F.T=f}}function hd(e,a,s,l){if(Xu){var f=dd(l);if(f===null)Jh(e,a,l,Wu,s),cv(e,l);else if(BE(f,e,a,s,l))l.stopPropagation();else if(cv(e,l),a&4&&-1<zE.indexOf(e)){for(;f!==null;){var m=Vi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Pt(m.pendingLanes);if(M!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var G=1<<31-Nt(M);A.entanglements[1]|=G,M&=~G}Pi(m),(ze&6)===0&&(Ru=Zt()+500,Ko(0))}}break;case 13:A=es(m,2),A!==null&&Jn(A,m,2),Du(),fd(m,2)}if(m=dd(l),m===null&&Jh(e,a,l,Wu,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Jh(e,a,l,null,s)}}function dd(e){return e=vf(e),pd(e)}var Wu=null;function pd(e){if(Wu=null,e=Gi(e),e!==null){var a=u(e);if(a===null)e=null;else{var s=a.tag;if(s===13){if(e=c(a),e!==null)return e;e=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Wu=e,null}function uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case ge:return 2;case Ot:return 8;case N:case T:return 32;case tt:return 268435456;default:return 32}default:return 32}}var md=!1,Wa=null,Ya=null,qa=null,al=new Map,rl=new Map,ja=[],zE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(e,a){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":al.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(a.pointerId)}}function sl(e,a,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},a!==null&&(a=Vi(a),a!==null&&lv(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),e)}function BE(e,a,s,l,f){switch(a){case"focusin":return Wa=sl(Wa,e,a,s,l,f),!0;case"dragenter":return Ya=sl(Ya,e,a,s,l,f),!0;case"mouseover":return qa=sl(qa,e,a,s,l,f),!0;case"pointerover":var m=f.pointerId;return al.set(m,sl(al.get(m)||null,e,a,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,rl.set(m,sl(rl.get(m)||null,e,a,s,l,f)),!0}return!1}function fv(e){var a=Gi(e.target);if(a!==null){var s=u(a);if(s!==null){if(a=s.tag,a===13){if(a=c(s),a!==null){e.blockedOn=a,Yn(e.priority,function(){if(s.tag===13){var l=$n();l=Pe(l);var f=es(s,l);f!==null&&Jn(f,s,l),fd(s,l)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var s=dd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);_f=l,s.target.dispatchEvent(l),_f=null}else return a=Vi(s),a!==null&&lv(a),e.blockedOn=s,!1;a.shift()}return!0}function hv(e,a,s){Yu(e)&&s.delete(a)}function IE(){md=!1,Wa!==null&&Yu(Wa)&&(Wa=null),Ya!==null&&Yu(Ya)&&(Ya=null),qa!==null&&Yu(qa)&&(qa=null),al.forEach(hv),rl.forEach(hv)}function qu(e,a){e.blockedOn===a&&(e.blockedOn=null,md||(md=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,IE)))}var ju=null;function dv(e){ju!==e&&(ju=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ju===e&&(ju=null);for(var a=0;a<e.length;a+=3){var s=e[a],l=e[a+1],f=e[a+2];if(typeof l!="function"){if(pd(l||s)===null)continue;break}var m=Vi(s);m!==null&&(e.splice(a,3),a-=3,ph(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function ol(e){function a(G){return qu(G,e)}Wa!==null&&qu(Wa,e),Ya!==null&&qu(Ya,e),qa!==null&&qu(qa,e),al.forEach(a),rl.forEach(a);for(var s=0;s<ja.length;s++){var l=ja[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ja.length&&(s=ja[0],s.blockedOn===null);)fv(s),s.blockedOn===null&&ja.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[En]||null;if(typeof m=="function")M||dv(s);else if(M){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[En]||null)A=M.formAction;else if(pd(f)!==null)continue}else A=M.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),dv(s)}}}function gd(e){this._internalRoot=e}Zu.prototype.render=gd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,l=$n();sv(s,l,e,a,null,null)},Zu.prototype.unmount=gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;sv(e.current,2,null,e,null,null),Du(),a[Fn]=null}};function Zu(e){this._internalRoot=e}Zu.prototype.unstable_scheduleHydration=function(e){if(e){var a=Re();e={blockedOn:null,target:e,priority:a};for(var s=0;s<ja.length&&a!==0&&a<ja[s].priority;s++);ja.splice(s,0,e),s===0&&fv(e)}};var pv=t.version;if(pv!=="19.1.0")throw Error(r(527,pv,"19.1.0"));j.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(a),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var FE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{st=Ku.inject(FE),Lt=Ku}catch{}}return ul.createRoot=function(e,a){if(!o(e))throw Error(r(299));var s=!1,l="",f=D0,m=U0,M=N0,A=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=av(e,1,!1,null,null,s,l,f,m,M,A,null),e[Fn]=a.current,$h(e),new gd(a)},ul.hydrateRoot=function(e,a,s){if(!o(e))throw Error(r(299));var l=!1,f="",m=D0,M=U0,A=N0,G=null,at=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(G=s.unstable_transitionCallbacks),s.formState!==void 0&&(at=s.formState)),a=av(e,1,!0,a,s??null,l,f,m,M,A,G,at),a.context=rv(null),s=a.current,l=$n(),l=Pe(l),f=Ua(l),f.callback=null,Na(s,f,l),s=l,a.current.lanes=s,Et(a,s),Pi(a),e[Fn]=a.current,$h(e),new Zu(a)},ul.version="19.1.0",ul}var bv;function ZE(){if(bv)return xd.exports;bv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),xd.exports=jE(),xd.exports}var KE=ZE();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gm="175",QE=0,Tv=1,$E=2,dy=1,JE=2,ha=3,sr=0,Wn=1,da=2,ir=0,Ks=1,Av=2,wv=3,Rv=4,tb=5,zr=100,eb=101,nb=102,ib=103,ab=104,rb=200,sb=201,ob=202,lb=203,pp=204,mp=205,ub=206,cb=207,fb=208,hb=209,db=210,pb=211,mb=212,gb=213,_b=214,gp=0,_p=1,vp=2,Js=3,xp=4,yp=5,Sp=6,Mp=7,py=0,vb=1,xb=2,ar=0,yb=1,Sb=2,Mb=3,Eb=4,bb=5,Tb=6,Ab=7,my=300,to=301,eo=302,Ep=303,bp=304,of=306,Tp=1e3,Ir=1001,Ap=1002,Ai=1003,wb=1004,Qu=1005,Ii=1006,Ed=1007,Fr=1008,xa=1009,gy=1010,_y=1011,wl=1012,_m=1013,Vr=1014,pa=1015,Ol=1016,vm=1017,xm=1018,Rl=1020,vy=35902,xy=1021,yy=1022,Ti=1023,Sy=1024,My=1025,Cl=1026,Dl=1027,Ey=1028,ym=1029,by=1030,Sm=1031,Mm=1033,wc=33776,Rc=33777,Cc=33778,Dc=33779,wp=35840,Rp=35841,Cp=35842,Dp=35843,Up=36196,Np=37492,Lp=37496,Op=37808,Pp=37809,zp=37810,Bp=37811,Ip=37812,Fp=37813,Hp=37814,Gp=37815,Vp=37816,kp=37817,Xp=37818,Wp=37819,Yp=37820,qp=37821,Uc=36492,jp=36494,Zp=36495,Ty=36283,Kp=36284,Qp=36285,$p=36286,Rb=3200,Cb=3201,Db=0,Ub=1,nr="",di="srgb",no="srgb-linear",Fc="linear",Ge="srgb",As=7680,Cv=519,Nb=512,Lb=513,Ob=514,Ay=515,Pb=516,zb=517,Bb=518,Ib=519,Jp=35044,Dv="300 es",ma=2e3,Hc=2001;class ho{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=Math.PI/180,tm=180/Math.PI;function rr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function be(i,t,n){return Math.max(t,Math.min(n,i))}function Fb(i,t){return(i%t+t)%t}function Td(i,t,n){return(1-n)*i+n*t}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Se{constructor(t=0,n=0){Se.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*r-c*o+t.x,this.y=u*o+c*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,n,r,o,u,c,h,p,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,o,u,c,h,p,d)}set(t,n,r,o,u,c,h,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,u=this.elements,c=r[0],h=r[3],p=r[6],d=r[1],g=r[4],v=r[7],_=r[2],x=r[5],E=r[8],b=o[0],S=o[3],y=o[6],P=o[1],D=o[4],w=o[7],z=o[2],O=o[5],B=o[8];return u[0]=c*b+h*P+p*z,u[3]=c*S+h*D+p*O,u[6]=c*y+h*w+p*B,u[1]=d*b+g*P+v*z,u[4]=d*S+g*D+v*O,u[7]=d*y+g*w+v*B,u[2]=_*b+x*P+E*z,u[5]=_*S+x*D+E*O,u[8]=_*y+x*w+E*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return n*c*g-n*h*d-r*u*g+r*h*p+o*u*d-o*c*p}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=g*c-h*d,_=h*p-g*u,x=d*u-c*p,E=n*v+r*_+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(o*d-g*r)*b,t[2]=(h*r-o*c)*b,t[3]=_*b,t[4]=(g*n-o*p)*b,t[5]=(o*u-h*n)*b,t[6]=x*b,t[7]=(r*p-d*n)*b,t[8]=(c*n-r*u)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,o,u,c,h){const p=Math.cos(u),d=Math.sin(u);return this.set(r*p,r*d,-r*(p*c+d*h)+c+t,-o*d,o*p,-o*(-d*c+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ad.makeScale(t,n)),this}rotate(t){return this.premultiply(Ad.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ad.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new he;function wy(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hb(){const i=Gc("canvas");return i.style.display="block",i}const Uv={};function Nc(i){i in Uv||(Uv[i]=!0,console.warn(i))}function Gb(i,t,n){return new Promise(function(r,o){function u(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Vb(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kb(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Nv=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lv=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xb(){const i={enabled:!0,workingColorSpace:no,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ge&&(o.r=va(o.r),o.g=va(o.g),o.b=va(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ge&&(o.r=Qs(o.r),o.g=Qs(o.g),o.b=Qs(o.b))),o},fromWorkingColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},toWorkingColorSpace:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===nr?Fc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[no]:{primaries:t,whitePoint:r,transfer:Fc,toXYZ:Nv,fromXYZ:Lv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Nv,fromXYZ:Lv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),i}const Ue=Xb();function va(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ws;class Wb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ws===void 0&&(ws=Gc("canvas")),ws.width=t.width,ws.height=t.height;const o=ws.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=ws}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Gc("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=va(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(va(n[r]/255)*255):n[r]=va(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yb=0;class Em{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(wd(o[c].image)):u.push(wd(o[c]))}else u=wd(o);r.url=u}return n||(t.images[this.uuid]=r),r}}function wd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wb.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qb=0;class Bn extends ho{constructor(t=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,r=Ir,o=Ir,u=Ii,c=Fr,h=Ti,p=xa,d=Bn.DEFAULT_ANISOTROPY,g=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=rr(),this.name="",this.source=new Em(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==my)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tp:t.x=t.x-Math.floor(t.x);break;case Ir:t.x=t.x<0?0:1;break;case Ap:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tp:t.y=t.y-Math.floor(t.y);break;case Ir:t.y=t.y<0?0:1;break;case Ap:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=my;Bn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,n=0,r=0,o=1){nn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,o){return this.x=t,this.y=n,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,o,u;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],x=p[5],E=p[9],b=p[2],S=p[6],y=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(E+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,w=(x+1)/2,z=(y+1)/2,O=(g+_)/4,B=(v+b)/4,W=(E+S)/4;return D>w&&D>z?D<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(D),o=O/r,u=B/r):w>z?w<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(w),r=O/o,u=W/o):z<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(z),r=B/u,o=W/u),this.set(r,o,u,n),this}let P=Math.sqrt((S-E)*(S-E)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(v-b)/P,this.z=(_-g)/P,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this.w=be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this.w=be(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jb extends ho{constructor(t=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new nn(0,0,t,n),this.scissorTest=!1,this.viewport=new nn(0,0,t,n);const o={width:t,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Bn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Em(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends jb{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class Ry extends Bn{constructor(t=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zb extends Bn{constructor(t=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pl{constructor(t=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=o}static slerpFlat(t,n,r,o,u,c,h){let p=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];const _=u[c+0],x=u[c+1],E=u[c+2],b=u[c+3];if(h===0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=E,t[n+3]=b;return}if(v!==b||p!==_||d!==x||g!==E){let S=1-h;const y=p*_+d*x+g*E+v*b,P=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const z=Math.sqrt(D),O=Math.atan2(z,y*P);S=Math.sin(S*O)/z,h=Math.sin(h*O)/z}const w=h*P;if(p=p*S+_*w,d=d*S+x*w,g=g*S+E*w,v=v*S+b*w,S===1-h){const z=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=z,d*=z,g*=z,v*=z}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,r,o,u,c){const h=r[o],p=r[o+1],d=r[o+2],g=r[o+3],v=u[c],_=u[c+1],x=u[c+2],E=u[c+3];return t[n]=h*E+g*v+p*x-d*_,t[n+1]=p*E+g*_+d*v-h*x,t[n+2]=d*E+g*x+h*_-p*v,t[n+3]=g*E-h*v-p*_-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,o){return this._x=t,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,o=t._y,u=t._z,c=t._order,h=Math.cos,p=Math.sin,d=h(r/2),g=h(o/2),v=h(u/2),_=p(r/2),x=p(o/2),E=p(u/2);switch(c){case"XYZ":this._x=_*g*v+d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v-_*x*E;break;case"YXZ":this._x=_*g*v+d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v+_*x*E;break;case"ZXY":this._x=_*g*v-d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v-_*x*E;break;case"ZYX":this._x=_*g*v-d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v+_*x*E;break;case"YZX":this._x=_*g*v+d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v-_*x*E;break;case"XZY":this._x=_*g*v-d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],o=n[4],u=n[8],c=n[1],h=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=r+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-p)*x,this._y=(u-d)*x,this._z=(c-o)*x}else if(r>h&&r>v){const x=2*Math.sqrt(1+r-h-v);this._w=(g-p)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(u+d)/x}else if(h>v){const x=2*Math.sqrt(1+h-r-v);this._w=(u-d)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+v-r-h);this._w=(c-o)/x,this._x=(u+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,o=t._y,u=t._z,c=t._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=r*g+c*h+o*d-u*p,this._y=o*g+c*p+u*h-r*d,this._z=u*g+c*d+r*p-o*h,this._w=c*g-r*h-o*p-u*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,o=this._y,u=this._z,c=this._w;let h=c*t._w+r*t._x+o*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=c,this._x=r,this._y=o,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-n;return this._w=x*c+n*this._w,this._x=x*r+n*this._x,this._y=x*o+n*this._y,this._z=x*u+n*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,_=Math.sin(n*g)/d;return this._w=c*v+this._w*_,this._x=r*v+this._x*_,this._y=o*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,n=0,r=0){it.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ov.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ov.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,u=t.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(t){const n=this.x,r=this.y,o=this.z,u=t.x,c=t.y,h=t.z,p=t.w,d=2*(c*o-h*r),g=2*(h*n-u*o),v=2*(u*r-c*n);return this.x=n+p*d+c*v-h*g,this.y=r+p*g+h*d-u*v,this.z=o+p*v+u*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,o=t.y,u=t.z,c=n.x,h=n.y,p=n.z;return this.x=o*p-u*h,this.y=u*c-r*p,this.z=r*h-o*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Rd.copy(this).projectOnVector(t),this.sub(Rd)}reflect(t){return this.sub(Rd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return n*n+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const o=Math.sin(n)*t;return this.x=o*Math.sin(r),this.y=Math.cos(n)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new it,Ov=new Pl;class zl{constructor(t=new it(1/0,1/0,1/0),n=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(yi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(yi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=yi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,yi):yi.fromBufferAttribute(u,c),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$u.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$u.copy(r.boundingBox)),$u.applyMatrix4(t.matrixWorld),this.union($u)}const o=t.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cl),Ju.subVectors(this.max,cl),Rs.subVectors(t.a,cl),Cs.subVectors(t.b,cl),Ds.subVectors(t.c,cl),Ka.subVectors(Cs,Rs),Qa.subVectors(Ds,Cs),wr.subVectors(Rs,Ds);let n=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-wr.z,wr.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,wr.z,0,-wr.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-wr.y,wr.x,0];return!Cd(n,Rs,Cs,Ds,Ju)||(n=[1,0,0,0,1,0,0,0,1],!Cd(n,Rs,Cs,Ds,Ju))?!1:(tc.crossVectors(Ka,Qa),n=[tc.x,tc.y,tc.z],Cd(n,Rs,Cs,Ds,Ju))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const sa=[new it,new it,new it,new it,new it,new it,new it,new it],yi=new it,$u=new zl,Rs=new it,Cs=new it,Ds=new it,Ka=new it,Qa=new it,wr=new it,cl=new it,Ju=new it,tc=new it,Rr=new it;function Cd(i,t,n,r,o){for(let u=0,c=i.length-3;u<=c;u+=3){Rr.fromArray(i,u);const h=o.x*Math.abs(Rr.x)+o.y*Math.abs(Rr.y)+o.z*Math.abs(Rr.z),p=t.dot(Rr),d=n.dot(Rr),g=r.dot(Rr);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const Kb=new zl,fl=new it,Dd=new it;class lf{constructor(t=new it,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):Kb.setFromPoints(t).getCenter(r);let o=0;for(let u=0,c=t.length;u<c;u++)o=Math.max(o,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fl.subVectors(t,this.center);const n=fl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(fl,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fl.copy(t.center).add(Dd)),this.expandByPoint(fl.copy(t.center).sub(Dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oa=new it,Ud=new it,ec=new it,$a=new it,Nd=new it,nc=new it,Ld=new it;class bm{constructor(t=new it,n=new it(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=oa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,n),oa.distanceToSquared(t))}distanceSqToSegment(t,n,r,o){Ud.copy(t).add(n).multiplyScalar(.5),ec.copy(n).sub(t).normalize(),$a.copy(this.origin).sub(Ud);const u=t.distanceTo(n)*.5,c=-this.direction.dot(ec),h=$a.dot(this.direction),p=-$a.dot(ec),d=$a.lengthSq(),g=Math.abs(1-c*c);let v,_,x,E;if(g>0)if(v=c*p-h,_=c*h-p,E=u*g,v>=0)if(_>=-E)if(_<=E){const b=1/g;v*=b,_*=b,x=v*(v+c*_+2*h)+_*(c*v+_+2*p)+d}else _=u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*p)+d;else _=-u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*p)+d;else _<=-E?(v=Math.max(0,-(-c*u+h)),_=v>0?-u:Math.min(Math.max(-u,-p),u),x=-v*v+_*(_+2*p)+d):_<=E?(v=0,_=Math.min(Math.max(-u,-p),u),x=_*(_+2*p)+d):(v=Math.max(0,-(c*u+h)),_=v>0?u:Math.min(Math.max(-u,-p),u),x=-v*v+_*(_+2*p)+d);else _=c>0?-u:u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ud).addScaledVector(ec,_),x}intersectSphere(t,n){oa.subVectors(t.center,this.origin);const r=oa.dot(this.direction),o=oa.dot(oa)-r*r,u=t.radius*t.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=r-c,p=r+c;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,o,u,c,h,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(r=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(r=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(u=(t.min.y-_.y)*g,c=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,c=(t.min.y-_.y)*g),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,n,r,o,u){Nd.subVectors(n,t),nc.subVectors(r,t),Ld.crossVectors(Nd,nc);let c=this.direction.dot(Ld),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;$a.subVectors(this.origin,t);const p=h*this.direction.dot(nc.crossVectors($a,nc));if(p<0)return null;const d=h*this.direction.dot(Nd.cross($a));if(d<0||p+d>c)return null;const g=-h*$a.dot(Ld);return g<0?null:this.at(g/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,n,r,o,u,c,h,p,d,g,v,_,x,E,b,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,o,u,c,h,p,d,g,v,_,x,E,b,S)}set(t,n,r,o,u,c,h,p,d,g,v,_,x,E,b,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=r,y[12]=o,y[1]=u,y[5]=c,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=E,y[11]=b,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,o=1/Us.setFromMatrixColumn(t,0).length(),u=1/Us.setFromMatrixColumn(t,1).length(),c=1/Us.setFromMatrixColumn(t,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,o=t.y,u=t.z,c=Math.cos(r),h=Math.sin(r),p=Math.cos(o),d=Math.sin(o),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const _=c*g,x=c*v,E=h*g,b=h*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=x+E*d,n[5]=_-b*d,n[9]=-h*p,n[2]=b-_*d,n[6]=E+x*d,n[10]=c*p}else if(t.order==="YXZ"){const _=p*g,x=p*v,E=d*g,b=d*v;n[0]=_+b*h,n[4]=E*h-x,n[8]=c*d,n[1]=c*v,n[5]=c*g,n[9]=-h,n[2]=x*h-E,n[6]=b+_*h,n[10]=c*p}else if(t.order==="ZXY"){const _=p*g,x=p*v,E=d*g,b=d*v;n[0]=_-b*h,n[4]=-c*v,n[8]=E+x*h,n[1]=x+E*h,n[5]=c*g,n[9]=b-_*h,n[2]=-c*d,n[6]=h,n[10]=c*p}else if(t.order==="ZYX"){const _=c*g,x=c*v,E=h*g,b=h*v;n[0]=p*g,n[4]=E*d-x,n[8]=_*d+b,n[1]=p*v,n[5]=b*d+_,n[9]=x*d-E,n[2]=-d,n[6]=h*p,n[10]=c*p}else if(t.order==="YZX"){const _=c*p,x=c*d,E=h*p,b=h*d;n[0]=p*g,n[4]=b-_*v,n[8]=E*v+x,n[1]=v,n[5]=c*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*v+E,n[10]=_-b*v}else if(t.order==="XZY"){const _=c*p,x=c*d,E=h*p,b=h*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+b,n[5]=c*g,n[9]=x*v-E,n[2]=E*v-x,n[6]=h*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qb,t,$b)}lookAt(t,n,r){const o=this.elements;return ti.subVectors(t,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ja.crossVectors(r,ti),Ja.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ja.crossVectors(r,ti)),Ja.normalize(),ic.crossVectors(ti,Ja),o[0]=Ja.x,o[4]=ic.x,o[8]=ti.x,o[1]=Ja.y,o[5]=ic.y,o[9]=ti.y,o[2]=Ja.z,o[6]=ic.z,o[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,u=this.elements,c=r[0],h=r[4],p=r[8],d=r[12],g=r[1],v=r[5],_=r[9],x=r[13],E=r[2],b=r[6],S=r[10],y=r[14],P=r[3],D=r[7],w=r[11],z=r[15],O=o[0],B=o[4],W=o[8],U=o[12],R=o[1],I=o[5],rt=o[9],J=o[13],vt=o[2],xt=o[6],F=o[10],j=o[14],q=o[3],Tt=o[7],L=o[11],V=o[15];return u[0]=c*O+h*R+p*vt+d*q,u[4]=c*B+h*I+p*xt+d*Tt,u[8]=c*W+h*rt+p*F+d*L,u[12]=c*U+h*J+p*j+d*V,u[1]=g*O+v*R+_*vt+x*q,u[5]=g*B+v*I+_*xt+x*Tt,u[9]=g*W+v*rt+_*F+x*L,u[13]=g*U+v*J+_*j+x*V,u[2]=E*O+b*R+S*vt+y*q,u[6]=E*B+b*I+S*xt+y*Tt,u[10]=E*W+b*rt+S*F+y*L,u[14]=E*U+b*J+S*j+y*V,u[3]=P*O+D*R+w*vt+z*q,u[7]=P*B+D*I+w*xt+z*Tt,u[11]=P*W+D*rt+w*F+z*L,u[15]=P*U+D*J+w*j+z*V,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],o=t[8],u=t[12],c=t[1],h=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],x=t[14],E=t[3],b=t[7],S=t[11],y=t[15];return E*(+u*p*v-o*d*v-u*h*_+r*d*_+o*h*x-r*p*x)+b*(+n*p*x-n*d*_+u*c*_-o*c*x+o*d*g-u*p*g)+S*(+n*d*v-n*h*x-u*c*v+r*c*x+u*h*g-r*d*g)+y*(-o*h*g-n*p*v+n*h*_+o*c*v-r*c*_+r*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],x=t[11],E=t[12],b=t[13],S=t[14],y=t[15],P=v*S*d-b*_*d+b*p*x-h*S*x-v*p*y+h*_*y,D=E*_*d-g*S*d-E*p*x+c*S*x+g*p*y-c*_*y,w=g*b*d-E*v*d+E*h*x-c*b*x-g*h*y+c*v*y,z=E*v*p-g*b*p-E*h*_+c*b*_+g*h*S-c*v*S,O=n*P+r*D+o*w+u*z;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return t[0]=P*B,t[1]=(b*_*u-v*S*u-b*o*x+r*S*x+v*o*y-r*_*y)*B,t[2]=(h*S*u-b*p*u+b*o*d-r*S*d-h*o*y+r*p*y)*B,t[3]=(v*p*u-h*_*u-v*o*d+r*_*d+h*o*x-r*p*x)*B,t[4]=D*B,t[5]=(g*S*u-E*_*u+E*o*x-n*S*x-g*o*y+n*_*y)*B,t[6]=(E*p*u-c*S*u-E*o*d+n*S*d+c*o*y-n*p*y)*B,t[7]=(c*_*u-g*p*u+g*o*d-n*_*d-c*o*x+n*p*x)*B,t[8]=w*B,t[9]=(E*v*u-g*b*u-E*r*x+n*b*x+g*r*y-n*v*y)*B,t[10]=(c*b*u-E*h*u+E*r*d-n*b*d-c*r*y+n*h*y)*B,t[11]=(g*h*u-c*v*u-g*r*d+n*v*d+c*r*x-n*h*x)*B,t[12]=z*B,t[13]=(g*b*o-E*v*o+E*r*_-n*b*_-g*r*S+n*v*S)*B,t[14]=(E*h*o-c*b*o-E*r*p+n*b*p+c*r*S-n*h*S)*B,t[15]=(c*v*o-g*h*o+g*r*p-n*v*p-c*r*_+n*h*_)*B,this}scale(t){const n=this.elements,r=t.x,o=t.y,u=t.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=t.x,h=t.y,p=t.z,d=u*c,g=u*h;return this.set(d*c+r,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+r,g*p-o*c,0,d*p-o*h,g*p+o*c,u*p*p+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,o,u,c){return this.set(1,r,u,0,t,1,c,0,n,o,1,0,0,0,0,1),this}compose(t,n,r){const o=this.elements,u=n._x,c=n._y,h=n._z,p=n._w,d=u+u,g=c+c,v=h+h,_=u*d,x=u*g,E=u*v,b=c*g,S=c*v,y=h*v,P=p*d,D=p*g,w=p*v,z=r.x,O=r.y,B=r.z;return o[0]=(1-(b+y))*z,o[1]=(x+w)*z,o[2]=(E-D)*z,o[3]=0,o[4]=(x-w)*O,o[5]=(1-(_+y))*O,o[6]=(S+P)*O,o[7]=0,o[8]=(E+D)*B,o[9]=(S-P)*B,o[10]=(1-(_+b))*B,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,r){const o=this.elements;let u=Us.set(o[0],o[1],o[2]).length();const c=Us.set(o[4],o[5],o[6]).length(),h=Us.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],Si.copy(this);const d=1/u,g=1/c,v=1/h;return Si.elements[0]*=d,Si.elements[1]*=d,Si.elements[2]*=d,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,n.setFromRotationMatrix(Si),r.x=u,r.y=c,r.z=h,this}makePerspective(t,n,r,o,u,c,h=ma){const p=this.elements,d=2*u/(n-t),g=2*u/(r-o),v=(n+t)/(n-t),_=(r+o)/(r-o);let x,E;if(h===ma)x=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(h===Hc)x=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=d,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,o,u,c,h=ma){const p=this.elements,d=1/(n-t),g=1/(r-o),v=1/(c-u),_=(n+t)*d,x=(r+o)*g;let E,b;if(h===ma)E=(c+u)*v,b=-2*v;else if(h===Hc)E=u*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Us=new it,Si=new Ke,Qb=new it(0,0,0),$b=new it(1,1,1),Ja=new it,ic=new it,ti=new it,Pv=new Ke,zv=new Pl;class ya{constructor(t=0,n=0,r=0,o=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,o=this._order){return this._x=t,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const o=t.elements,u=o[0],c=o[4],h=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Pv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pv,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return zv.setFromEuler(this),this.setFromQuaternion(zv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class Tm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jb=0;const Bv=new it,Ns=new Pl,la=new Ke,ac=new it,hl=new it,tT=new it,eT=new Pl,Iv=new it(1,0,0),Fv=new it(0,1,0),Hv=new it(0,0,1),Gv={type:"added"},nT={type:"removed"},Ls={type:"childadded",child:null},Od={type:"childremoved",child:null};class In extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new it,n=new ya,r=new Pl,o=new it(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ke},normalMatrix:{value:new he}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Iv,t)}rotateY(t){return this.rotateOnAxis(Fv,t)}rotateZ(t){return this.rotateOnAxis(Hv,t)}translateOnAxis(t,n){return Bv.copy(t).applyQuaternion(this.quaternion),this.position.add(Bv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Iv,t)}translateY(t){return this.translateOnAxis(Fv,t)}translateZ(t){return this.translateOnAxis(Hv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?ac.copy(t):ac.set(t,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(hl,ac,this.up):la.lookAt(ac,hl,this.up),this.quaternion.setFromRotationMatrix(la),o&&(la.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(la),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gv),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(nT),Od.child=t,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gv),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,t,tT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,eT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(u(t.materials,this.material[p]));o.material=h}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(u(t.animations,p))}}if(n){const h=c(t.geometries),p=c(t.materials),d=c(t.textures),g=c(t.images),v=c(t.shapes),_=c(t.skeletons),x=c(t.animations),E=c(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}In.DEFAULT_UP=new it(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new it,ua=new it,Pd=new it,ca=new it,Os=new it,Ps=new it,Vv=new it,zd=new it,Bd=new it,Id=new it,Fd=new nn,Hd=new nn,Gd=new nn;class pi{constructor(t=new it,n=new it,r=new it){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,o){o.subVectors(r,n),Mi.subVectors(t,n),o.cross(Mi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,r,o,u){Mi.subVectors(o,n),ua.subVectors(r,n),Pd.subVectors(t,n);const c=Mi.dot(Mi),h=Mi.dot(ua),p=Mi.dot(Pd),d=ua.dot(ua),g=ua.dot(Pd),v=c*d-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,x=(d*p-h*g)*_,E=(c*g-h*p)*_;return u.set(1-x-E,E,x)}static containsPoint(t,n,r,o){return this.getBarycoord(t,n,r,o,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,n,r,o,u,c,h,p){return this.getBarycoord(t,n,r,o,ca)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ca.x),p.addScaledVector(c,ca.y),p.addScaledVector(h,ca.z),p)}static getInterpolatedAttribute(t,n,r,o,u,c){return Fd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),Fd.fromBufferAttribute(t,n),Hd.fromBufferAttribute(t,r),Gd.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(Fd,u.x),c.addScaledVector(Hd,u.y),c.addScaledVector(Gd,u.z),c}static isFrontFacing(t,n,r,o){return Mi.subVectors(r,n),ua.subVectors(t,n),Mi.cross(ua).dot(o)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,o){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,r,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Mi.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return pi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,o,u){return pi.getInterpolation(t,this.a,this.b,this.c,n,r,o,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,o=this.b,u=this.c;let c,h;Os.subVectors(o,r),Ps.subVectors(u,r),zd.subVectors(t,r);const p=Os.dot(zd),d=Ps.dot(zd);if(p<=0&&d<=0)return n.copy(r);Bd.subVectors(t,o);const g=Os.dot(Bd),v=Ps.dot(Bd);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return c=p/(p-g),n.copy(r).addScaledVector(Os,c);Id.subVectors(t,u);const x=Os.dot(Id),E=Ps.dot(Id);if(E>=0&&x<=E)return n.copy(u);const b=x*d-p*E;if(b<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(r).addScaledVector(Ps,h);const S=g*E-x*v;if(S<=0&&v-g>=0&&x-E>=0)return Vv.subVectors(u,o),h=(v-g)/(v-g+(x-E)),n.copy(o).addScaledVector(Vv,h);const y=1/(S+b+_);return c=b*y,h=_*y,n.copy(r).addScaledVector(Os,c).addScaledVector(Ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},rc={h:0,s:0,l:0};function Vd(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}let ye=class{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,n),this}setRGB(t,n,r,o=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=r,Ue.toWorkingColorSpace(this,o),this}setHSL(t,n,r,o=Ue.workingColorSpace){if(t=Fb(t,1),n=be(n,0,1),r=be(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Vd(c,u,t+1/3),this.g=Vd(c,u,t),this.b=Vd(c,u,t-1/3)}return Ue.toWorkingColorSpace(this,o),this}setStyle(t,n=di){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=di){const r=Cy[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Ue.fromWorkingColorSpace(Ln.copy(this),t),Math.round(be(Ln.r*255,0,255))*65536+Math.round(be(Ln.g*255,0,255))*256+Math.round(be(Ln.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Ln.copy(this),n);const r=Ln.r,o=Ln.g,u=Ln.b,c=Math.max(r,o,u),h=Math.min(r,o,u);let p,d;const g=(h+c)/2;if(h===c)p=0,d=0;else{const v=c-h;switch(d=g<=.5?v/(c+h):v/(2-c-h),c){case r:p=(o-u)/v+(o<u?6:0);break;case o:p=(u-r)/v+2;break;case u:p=(r-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Ln.copy(this),n),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=di){Ue.fromWorkingColorSpace(Ln.copy(this),t);const n=Ln.r,r=Ln.g,o=Ln.b;return t!==di?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,n,r){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+n,tr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(tr),t.getHSL(rc);const r=Td(tr.h,rc.h,n),o=Td(tr.s,rc.s,n),u=Td(tr.l,rc.l,n);return this.setHSL(r,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,o=this.b,u=t.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ln=new ye;ye.NAMES=Cy;let iT=0;class po extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Ks,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pp,this.blendDst=mp,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(r.blending=this.blending),this.side!==sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==pp&&(r.blendSrc=this.blendSrc),this.blendDst!==mp&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(n){const u=o(t.textures),c=o(t.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class io extends po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=py,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new it,sc=new Se;let aT=0;class wi{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=Jp,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)sc.fromBufferAttribute(this,n),sc.applyMatrix3(t),this.setXY(n,sc.x,sc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix3(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Bi(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Bi(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Bi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Bi(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,o){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,n,r,o,u){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array),u=Ve(u,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jp&&(t.usage=this.usage),t}}class Dy extends wi{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class Uy extends wi{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class Ri extends wi{constructor(t,n,r){super(new Float32Array(t),n,r)}}let rT=0;const hi=new Ke,kd=new In,zs=new it,ei=new zl,dl=new zl,Sn=new it;class gi extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wy(t)?Uy:Dy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new he().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,n,r){return hi.makeTranslation(t,n,r),this.applyMatrix4(hi),this}scale(t,n,r){return hi.makeScale(t,n,r),this.applyMatrix4(hi),this}lookAt(t){return kd.lookAt(t),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=t.length;o<u;o++){const c=t[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ri(r,3))}else{const r=Math.min(t.length,n.count);for(let o=0;o<r;o++){const u=t[o];n.setXYZ(o,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];dl.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ei.min,dl.min),ei.expandByPoint(Sn),Sn.addVectors(ei.max,dl.max),ei.expandByPoint(Sn)):(ei.expandByPoint(dl.min),ei.expandByPoint(dl.max))}ei.getCenter(r);let o=0;for(let u=0,c=t.count;u<c;u++)Sn.fromBufferAttribute(t,u),o=Math.max(o,r.distanceToSquared(Sn));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Sn.fromBufferAttribute(h,d),p&&(zs.fromBufferAttribute(t,d),Sn.add(zs)),o=Math.max(o,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let W=0;W<r.count;W++)h[W]=new it,p[W]=new it;const d=new it,g=new it,v=new it,_=new Se,x=new Se,E=new Se,b=new it,S=new it;function y(W,U,R){d.fromBufferAttribute(r,W),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,R),_.fromBufferAttribute(u,W),x.fromBufferAttribute(u,U),E.fromBufferAttribute(u,R),g.sub(d),v.sub(d),x.sub(_),E.sub(_);const I=1/(x.x*E.y-E.x*x.y);isFinite(I)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(I),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(I),h[W].add(b),h[U].add(b),h[R].add(b),p[W].add(S),p[U].add(S),p[R].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let W=0,U=P.length;W<U;++W){const R=P[W],I=R.start,rt=R.count;for(let J=I,vt=I+rt;J<vt;J+=3)y(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const D=new it,w=new it,z=new it,O=new it;function B(W){z.fromBufferAttribute(o,W),O.copy(z);const U=h[W];D.copy(U),D.sub(z.multiplyScalar(z.dot(U))).normalize(),w.crossVectors(O,U);const I=w.dot(p[W])<0?-1:1;c.setXYZW(W,D.x,D.y,D.z,I)}for(let W=0,U=P.length;W<U;++W){const R=P[W],I=R.start,rt=R.count;for(let J=I,vt=I+rt;J<vt;J+=3)B(t.getX(J+0)),B(t.getX(J+1)),B(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,x=r.count;_<x;_++)r.setXYZ(_,0,0,0);const o=new it,u=new it,c=new it,h=new it,p=new it,d=new it,g=new it,v=new it;if(t)for(let _=0,x=t.count;_<x;_+=3){const E=t.getX(_+0),b=t.getX(_+1),S=t.getX(_+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,S),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),h.add(g),p.add(g),d.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Sn.fromBufferAttribute(t,n),Sn.normalize(),t.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(p.length*g);let x=0,E=0;for(let b=0,S=p.length;b<S;b++){h.isInterleavedBufferAttribute?x=p[b]*h.data.stride+h.offset:x=p[b]*g;for(let y=0;y<g;y++)_[E++]=d[x++]}return new wi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gi,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=t(p,r);n.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const p=[],d=u[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=t(_,r);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const d=c[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const d=r[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(t.data))}g.length>0&&(o[p]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const u=t.morphAttributes;for(const d in u){const g=[],v=u[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kv=new Ke,Cr=new bm,oc=new lf,Xv=new it,lc=new it,uc=new it,cc=new it,Xd=new it,fc=new it,Wv=new it,hc=new it;class ii extends In{constructor(t=new gi,n=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(u&&h){fc.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const g=h[p],v=u[p];g!==0&&(Xd.fromBufferAttribute(v,t),c?fc.addScaledVector(Xd,g):fc.addScaledVector(Xd.sub(n),g))}n.add(fc)}return n}raycast(t,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),oc.copy(r.boundingSphere),oc.applyMatrix4(u),Cr.copy(t.ray).recast(t.near),!(oc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(oc,Xv)===null||Cr.origin.distanceToSquared(Xv)>(t.far-t.near)**2))&&(kv.copy(u).invert(),Cr.copy(t.ray).applyMatrix4(kv),!(r.boundingBox!==null&&Cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Cr)))}_computeIntersections(t,n,r){let o;const u=this.geometry,c=this.material,h=u.index,p=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,x=u.drawRange;if(h!==null)if(Array.isArray(c))for(let E=0,b=_.length;E<b;E++){const S=_[E],y=c[S.materialIndex],P=Math.max(S.start,x.start),D=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=P,z=D;w<z;w+=3){const O=h.getX(w),B=h.getX(w+1),W=h.getX(w+2);o=dc(this,y,t,r,d,g,v,O,B,W),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let S=E,y=b;S<y;S+=3){const P=h.getX(S),D=h.getX(S+1),w=h.getX(S+2);o=dc(this,c,t,r,d,g,v,P,D,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,b=_.length;E<b;E++){const S=_[E],y=c[S.materialIndex],P=Math.max(S.start,x.start),D=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let w=P,z=D;w<z;w+=3){const O=w,B=w+1,W=w+2;o=dc(this,y,t,r,d,g,v,O,B,W),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),b=Math.min(p.count,x.start+x.count);for(let S=E,y=b;S<y;S+=3){const P=S,D=S+1,w=S+2;o=dc(this,c,t,r,d,g,v,P,D,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function sT(i,t,n,r,o,u,c,h){let p;if(t.side===Wn?p=r.intersectTriangle(c,u,o,!0,h):p=r.intersectTriangle(o,u,c,t.side===sr,h),p===null)return null;hc.copy(h),hc.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(hc);return d<n.near||d>n.far?null:{distance:d,point:hc.clone(),object:i}}function dc(i,t,n,r,o,u,c,h,p,d){i.getVertexPosition(h,lc),i.getVertexPosition(p,uc),i.getVertexPosition(d,cc);const g=sT(i,t,n,r,lc,uc,cc,Wv);if(g){const v=new it;pi.getBarycoord(Wv,lc,uc,cc,v),o&&(g.uv=pi.getInterpolatedAttribute(o,h,p,d,v,new Se)),u&&(g.uv1=pi.getInterpolatedAttribute(u,h,p,d,v,new Se)),c&&(g.normal=pi.getInterpolatedAttribute(c,h,p,d,v,new it),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:d,normal:new it,materialIndex:0};pi.getNormal(lc,uc,cc,_.normal),g.face=_,g.barycoord=v}return g}class Bl extends gi{constructor(t=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],g=[],v=[];let _=0,x=0;E("z","y","x",-1,-1,r,n,t,c,u,0),E("z","y","x",1,-1,r,n,-t,c,u,1),E("x","z","y",1,1,t,r,n,o,c,2),E("x","z","y",1,-1,t,r,-n,o,c,3),E("x","y","z",1,-1,t,n,r,o,u,4),E("x","y","z",-1,-1,t,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new Ri(d,3)),this.setAttribute("normal",new Ri(g,3)),this.setAttribute("uv",new Ri(v,2));function E(b,S,y,P,D,w,z,O,B,W,U){const R=w/B,I=z/W,rt=w/2,J=z/2,vt=O/2,xt=B+1,F=W+1;let j=0,q=0;const Tt=new it;for(let L=0;L<F;L++){const V=L*I-J;for(let mt=0;mt<xt;mt++){const $=mt*R-rt;Tt[b]=$*P,Tt[S]=V*D,Tt[y]=vt,d.push(Tt.x,Tt.y,Tt.z),Tt[b]=0,Tt[S]=0,Tt[y]=O>0?1:-1,g.push(Tt.x,Tt.y,Tt.z),v.push(mt/B),v.push(1-L/W),j+=1}}for(let L=0;L<W;L++)for(let V=0;V<B;V++){const mt=_+V+xt*L,$=_+V+xt*(L+1),k=_+(V+1)+xt*(L+1),nt=_+(V+1)+xt*L;p.push(mt,$,nt),p.push($,k,nt),q+=6}h.addGroup(x,q,U),x+=q,_+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(i){const t={};for(const n in i){t[n]={};for(const r in i[n]){const o=i[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=o.clone():Array.isArray(o)?t[n][r]=o.slice():t[n][r]=o}}return t}function zn(i){const t={};for(let n=0;n<i.length;n++){const r=ao(i[n]);for(const o in r)t[o]=r[o]}return t}function oT(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function Ny(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const lT={clone:ao,merge:zn};var uT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uT,this.fragmentShader=cT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=oT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ly extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ma}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new it,Yv=new Se,qv=new Se;class ni extends Ly{constructor(t=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=tm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tm*2*Math.atan(Math.tan(bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,n){return this.getViewBounds(t,Yv,qv),n.subVectors(qv,Yv)}setViewOffset(t,n,r,o,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(bd*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*r/d,o*=c.width/p,r*=c.height/d}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,Is=1;class fT extends In{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(Bs,Is,t,n);o.layers=this.layers,this.add(o);const u=new ni(Bs,Is,t,n);u.layers=this.layers,this.add(u);const c=new ni(Bs,Is,t,n);c.layers=this.layers,this.add(c);const h=new ni(Bs,Is,t,n);h.layers=this.layers,this.add(h);const p=new ni(Bs,Is,t,n);p.layers=this.layers,this.add(p);const d=new ni(Bs,Is,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,h,p]=n;for(const d of n)this.remove(d);if(t===ma)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(n,u),t.setRenderTarget(r,1,o),t.render(n,c),t.setRenderTarget(r,2,o),t.render(n,h),t.setRenderTarget(r,3,o),t.render(n,p),t.setRenderTarget(r,4,o),t.render(n,d),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,o),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Oy extends Bn{constructor(t=[],n=to,r,o,u,c,h,p,d,g){super(t,n,r,o,u,c,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hT extends kr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new Oy(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ii}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Bl(5,5,5),u=new or({name:"CubemapFromEquirect",uniforms:ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ir});u.uniforms.tEquirect.value=n;const c=new ii(o,u),h=n.minFilter;return n.minFilter===Fr&&(n.minFilter=Ii),new fT(1,10,this).update(t,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,r=!0,o=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,r,o);t.setRenderTarget(u)}}class Ys extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dT={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let o=null,u=null,c=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,r),y=this._getHandJoint(d,b);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,E=.005;d.inputState.pinching&&_>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(dT)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new Ys;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class Py extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Jp,this.updateRanges=[],this.version=0,this.uuid=rr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,r){t*=this.stride,r*=n.stride;for(let o=0,u=this.stride;o<u;o++)this.array[t+o]=n.array[r+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new it;class Vc{constructor(t,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,r=this.data.count;n<r;n++)Pn.fromBufferAttribute(this,n),Pn.applyMatrix4(t),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)Pn.fromBufferAttribute(this,n),Pn.applyNormalMatrix(t),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)Pn.fromBufferAttribute(this,n),Pn.transformDirection(t),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}getComponent(t,n){let r=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+n]=r,this}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Bi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Bi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Bi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Bi(n,this.array)),n}setXY(t,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this}setXYZ(t,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this}setXYZW(t,n,r,o,u){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array),u=Ve(u,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[o+u])}return new wi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[o+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Am extends po{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fs;const pl=new it,Hs=new it,Gs=new it,Vs=new Se,ml=new Se,zy=new Ke,pc=new it,gl=new it,mc=new it,jv=new Se,Yd=new Se,Zv=new Se;class By extends In{constructor(t=new Am){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new gi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new pT(n,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new Vc(r,3,0,!1)),Fs.setAttribute("uv",new Vc(r,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new Se(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),zy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Gs.z);const r=this.material.rotation;let o,u;r!==0&&(u=Math.cos(r),o=Math.sin(r));const c=this.center;gc(pc.set(-.5,-.5,0),Gs,c,Hs,o,u),gc(gl.set(.5,-.5,0),Gs,c,Hs,o,u),gc(mc.set(.5,.5,0),Gs,c,Hs,o,u),jv.set(0,0),Yd.set(1,0),Zv.set(1,1);let h=t.ray.intersectTriangle(pc,gl,mc,!1,pl);if(h===null&&(gc(gl.set(-.5,.5,0),Gs,c,Hs,o,u),Yd.set(0,1),h=t.ray.intersectTriangle(pc,mc,gl,!1,pl),h===null))return;const p=t.ray.origin.distanceTo(pl);p<t.near||p>t.far||n.push({distance:p,point:pl.clone(),uv:pi.getInterpolation(pl,pc,gl,mc,jv,Yd,Zv,new Se),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function gc(i,t,n,r,o,u){Vs.subVectors(i,n).addScalar(.5).multiply(r),o!==void 0?(ml.x=u*Vs.x-o*Vs.y,ml.y=o*Vs.x+u*Vs.y):ml.copy(Vs),i.copy(t),i.x+=ml.x,i.y+=ml.y,i.applyMatrix4(zy)}const qd=new it,mT=new it,gT=new he;class Lr{constructor(t=new it(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,o){return this.normal.set(t,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const o=qd.subVectors(r,n).cross(mT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(qd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||gT.getNormalMatrix(t),o=this.coplanarPoint(qd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new lf,_c=new it;class Iy{constructor(t=new Lr,n=new Lr,r=new Lr,o=new Lr,u=new Lr,c=new Lr){this.planes=[t,n,r,o,u,c]}set(t,n,r,o,u,c){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=ma){const r=this.planes,o=t.elements,u=o[0],c=o[1],h=o[2],p=o[3],d=o[4],g=o[5],v=o[6],_=o[7],x=o[8],E=o[9],b=o[10],S=o[11],y=o[12],P=o[13],D=o[14],w=o[15];if(r[0].setComponents(p-u,_-d,S-x,w-y).normalize(),r[1].setComponents(p+u,_+d,S+x,w+y).normalize(),r[2].setComponents(p+c,_+g,S+E,w+P).normalize(),r[3].setComponents(p-c,_-g,S-E,w-P).normalize(),r[4].setComponents(p-h,_-v,S-b,w-D).normalize(),n===ma)r[5].setComponents(p+h,_+v,S+b,w+D).normalize();else if(n===Hc)r[5].setComponents(h,v,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const n=this.planes,r=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(_c.x=o.normal.x>0?t.max.x:t.min.x,_c.y=o.normal.y>0?t.max.y:t.min.y,_c.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(_c)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wm extends po{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kc=new it,Xc=new it,Kv=new Ke,_l=new bm,vc=new lf,jd=new it,Qv=new it;class Fy extends In{constructor(t=new gi,n=new wm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,r=[0];for(let o=1,u=n.count;o<u;o++)kc.fromBufferAttribute(n,o-1),Xc.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=kc.distanceTo(Xc);t.setAttribute("lineDistance",new Ri(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const r=this.geometry,o=this.matrixWorld,u=t.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(o),vc.radius+=u,t.ray.intersectsSphere(vc)===!1)return;Kv.copy(o).invert(),_l.copy(t.ray).applyMatrix4(Kv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const x=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let b=x,S=E-1;b<S;b+=d){const y=g.getX(b),P=g.getX(b+1),D=xc(this,t,_l,p,y,P,b);D&&n.push(D)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(x),y=xc(this,t,_l,p,b,S,E-1);y&&n.push(y)}}else{const x=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let b=x,S=E-1;b<S;b+=d){const y=xc(this,t,_l,p,b,b+1,b);y&&n.push(y)}if(this.isLineLoop){const b=xc(this,t,_l,p,E-1,x,E-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function xc(i,t,n,r,o,u,c){const h=i.geometry.attributes.position;if(kc.fromBufferAttribute(h,o),Xc.fromBufferAttribute(h,u),n.distanceSqToSegment(kc,Xc,jd,Qv)>r)return;jd.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(jd);if(!(d<t.near||d>t.far))return{distance:d,point:Qv.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}class Wc extends Bn{constructor(t,n,r,o,u,c,h,p,d){super(t,n,r,o,u,c,h,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hy extends Bn{constructor(t,n,r=Vr,o,u,c,h=Ai,p=Ai,d,g=Cl){if(g!==Cl&&g!==Dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,u,c,h,p,g,r,d),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Em(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class uf extends gi{constructor(t=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:o};const u=t/2,c=n/2,h=Math.floor(r),p=Math.floor(o),d=h+1,g=p+1,v=t/h,_=n/p,x=[],E=[],b=[],S=[];for(let y=0;y<g;y++){const P=y*_-c;for(let D=0;D<d;D++){const w=D*v-u;E.push(w,-P,0),b.push(0,0,1),S.push(D/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<h;P++){const D=P+d*y,w=P+d*(y+1),z=P+1+d*(y+1),O=P+1+d*y;x.push(D,w,O),x.push(w,z,O)}this.setIndex(x),this.setAttribute("position",new Ri(E,3)),this.setAttribute("normal",new Ri(b,3)),this.setAttribute("uv",new Ri(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uf(t.width,t.height,t.widthSegments,t.heightSegments)}}class ro extends gi{constructor(t=1,n=32,r=16,o=0,u=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:o,phiLength:u,thetaStart:c,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(c+h,Math.PI);let d=0;const g=[],v=new it,_=new it,x=[],E=[],b=[],S=[];for(let y=0;y<=r;y++){const P=[],D=y/r;let w=0;y===0&&c===0?w=.5/n:y===r&&p===Math.PI&&(w=-.5/n);for(let z=0;z<=n;z++){const O=z/n;v.x=-t*Math.cos(o+O*u)*Math.sin(c+D*h),v.y=t*Math.cos(c+D*h),v.z=t*Math.sin(o+O*u)*Math.sin(c+D*h),E.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),S.push(O+w,1-D),P.push(d++)}g.push(P)}for(let y=0;y<r;y++)for(let P=0;P<n;P++){const D=g[y][P+1],w=g[y][P],z=g[y+1][P],O=g[y+1][P+1];(y!==0||c>0)&&x.push(D,w,O),(y!==r-1||p<Math.PI)&&x.push(w,z,O)}this.setIndex(x),this.setAttribute("position",new Ri(E,3)),this.setAttribute("normal",new Ri(b,3)),this.setAttribute("uv",new Ri(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _T extends po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vT extends po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xT extends Ly{constructor(t=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-t,c=r+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class yT extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const $v=new Ke;class Gy{constructor(t,n,r=0,o=1/0){this.ray=new bm(t,n),this.near=r,this.far=o,this.camera=null,this.layers=new Tm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return $v.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($v),this}intersectObject(t,n=!0,r=[]){return em(t,this,r,n),r.sort(Jv),r}intersectObjects(t,n=!0,r=[]){for(let o=0,u=t.length;o<u;o++)em(t[o],this,r,n);return r.sort(Jv),r}}function Jv(i,t){return i.distance-t.distance}function em(i,t,n,r){let o=!0;if(i.layers.test(t.layers)&&i.raycast(t,n)===!1&&(o=!1),o===!0&&r===!0){const u=i.children;for(let c=0,h=u.length;c<h;c++)em(u[c],t,n,!0)}}function tx(i,t,n,r){const o=ST(r);switch(n){case xy:return i*t;case Sy:return i*t;case My:return i*t*2;case Ey:return i*t/o.components*o.byteLength;case ym:return i*t/o.components*o.byteLength;case by:return i*t*2/o.components*o.byteLength;case Sm:return i*t*2/o.components*o.byteLength;case yy:return i*t*3/o.components*o.byteLength;case Ti:return i*t*4/o.components*o.byteLength;case Mm:return i*t*4/o.components*o.byteLength;case wc:case Rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cc:case Dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rp:case Dp:return Math.max(i,16)*Math.max(t,8)/4;case wp:case Cp:return Math.max(i,8)*Math.max(t,8)/2;case Up:case Np:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Op:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pp:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zp:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bp:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ip:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fp:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hp:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gp:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vp:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kp:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xp:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wp:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yp:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qp:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Uc:case jp:case Zp:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ty:case Kp:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qp:case $p:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ST(i){switch(i){case xa:case gy:return{byteLength:1,components:1};case wl:case _y:case Ol:return{byteLength:2,components:1};case vm:case xm:return{byteLength:2,components:4};case Vr:case _m:case pa:return{byteLength:4,components:1};case vy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vy(){let i=null,t=!1,n=null,r=null;function o(u,c){n(u,c),r=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(r=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){i=u}}}function MT(i){const t=new WeakMap;function n(h,p){const d=h.array,g=h.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,d){const g=p.array,v=p.updateRanges;if(i.bindBuffer(d,h),v.length===0)i.bufferSubData(d,0,g);else{v.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<v.length;x++){const E=v[_],b=v[x];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++_,v[_]=b)}v.length=_+1;for(let x=0,E=v.length;x<E;x++){const b=v[x];i.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(i.deleteBuffer(p.buffer),t.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,p),d.version=h.version}}return{get:o,remove:u,update:c}}var ET=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
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
#endif`,TT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CT=`#ifdef USE_AOMAP
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
#endif`,DT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UT=`#ifdef USE_BATCHING
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
#endif`,NT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zT=`#ifdef USE_IRIDESCENCE
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
#endif`,BT=`#ifdef USE_BUMPMAP
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
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,YT=`#define PI 3.141592653589793
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
} // validated`,qT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jT=`vec3 transformedNormal = objectNormal;
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
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JT="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c1=`#ifdef USE_GRADIENTMAP
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
}`,f1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p1=`uniform bool receiveShadow;
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
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
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
#endif`,S1=`struct PhysicalMaterial {
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
}`,M1=`
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
#endif`,E1=`#if defined( RE_IndirectDiffuse )
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
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N1=`#if defined( USE_POINTS_UV )
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
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
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
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W1=`#ifdef USE_NORMALMAP
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
#endif`,Y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oA=`float getShadowMask() {
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
}`,lA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,cA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fA=`#ifdef USE_SKINNING
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
#endif`,hA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gA=`#ifdef USE_TRANSMISSION
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
#endif`,_A=`#ifdef USE_TRANSMISSION
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
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EA=`uniform sampler2D t2D;
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
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`#include <common>
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
}`,CA=`#if DEPTH_PACKING == 3200
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
}`,DA=`#define DISTANCE
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
}`,UA=`#define DISTANCE
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
}`,NA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`uniform float scale;
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
}`,PA=`uniform vec3 diffuse;
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
}`,zA=`#include <common>
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
}`,BA=`uniform vec3 diffuse;
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
}`,IA=`#define LAMBERT
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
}`,FA=`#define LAMBERT
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
}`,HA=`#define MATCAP
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
}`,GA=`#define MATCAP
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
}`,VA=`#define NORMAL
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
}`,kA=`#define NORMAL
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
}`,XA=`#define PHONG
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
}`,WA=`#define PHONG
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
}`,YA=`#define STANDARD
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
}`,qA=`#define STANDARD
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
}`,jA=`#define TOON
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
}`,ZA=`#define TOON
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
}`,KA=`uniform float size;
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
}`,QA=`uniform vec3 diffuse;
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
}`,$A=`#include <common>
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
}`,JA=`uniform vec3 color;
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
}`,tw=`uniform float rotation;
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
}`,ew=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:ET,alphahash_pars_fragment:bT,alphamap_fragment:TT,alphamap_pars_fragment:AT,alphatest_fragment:wT,alphatest_pars_fragment:RT,aomap_fragment:CT,aomap_pars_fragment:DT,batching_pars_vertex:UT,batching_vertex:NT,begin_vertex:LT,beginnormal_vertex:OT,bsdfs:PT,iridescence_fragment:zT,bumpmap_pars_fragment:BT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:FT,clipping_planes_pars_vertex:HT,clipping_planes_vertex:GT,color_fragment:VT,color_pars_fragment:kT,color_pars_vertex:XT,color_vertex:WT,common:YT,cube_uv_reflection_fragment:qT,defaultnormal_vertex:jT,displacementmap_pars_vertex:ZT,displacementmap_vertex:KT,emissivemap_fragment:QT,emissivemap_pars_fragment:$T,colorspace_fragment:JT,colorspace_pars_fragment:t1,envmap_fragment:e1,envmap_common_pars_fragment:n1,envmap_pars_fragment:i1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:m1,envmap_vertex:r1,fog_vertex:s1,fog_pars_vertex:o1,fog_fragment:l1,fog_pars_fragment:u1,gradientmap_pars_fragment:c1,lightmap_pars_fragment:f1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:d1,lights_pars_begin:p1,lights_toon_fragment:g1,lights_toon_pars_fragment:_1,lights_phong_fragment:v1,lights_phong_pars_fragment:x1,lights_physical_fragment:y1,lights_physical_pars_fragment:S1,lights_fragment_begin:M1,lights_fragment_maps:E1,lights_fragment_end:b1,logdepthbuf_fragment:T1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:w1,logdepthbuf_vertex:R1,map_fragment:C1,map_pars_fragment:D1,map_particle_fragment:U1,map_particle_pars_fragment:N1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:O1,morphinstance_vertex:P1,morphcolor_vertex:z1,morphnormal_vertex:B1,morphtarget_pars_vertex:I1,morphtarget_vertex:F1,normal_fragment_begin:H1,normal_fragment_maps:G1,normal_pars_fragment:V1,normal_pars_vertex:k1,normal_vertex:X1,normalmap_pars_fragment:W1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:q1,clearcoat_pars_fragment:j1,iridescence_pars_fragment:Z1,opaque_fragment:K1,packing:Q1,premultiplied_alpha_fragment:$1,project_vertex:J1,dithering_fragment:tA,dithering_pars_fragment:eA,roughnessmap_fragment:nA,roughnessmap_pars_fragment:iA,shadowmap_pars_fragment:aA,shadowmap_pars_vertex:rA,shadowmap_vertex:sA,shadowmask_pars_fragment:oA,skinbase_vertex:lA,skinning_pars_vertex:uA,skinning_vertex:cA,skinnormal_vertex:fA,specularmap_fragment:hA,specularmap_pars_fragment:dA,tonemapping_fragment:pA,tonemapping_pars_fragment:mA,transmission_fragment:gA,transmission_pars_fragment:_A,uv_pars_fragment:vA,uv_pars_vertex:xA,uv_vertex:yA,worldpos_vertex:SA,background_vert:MA,background_frag:EA,backgroundCube_vert:bA,backgroundCube_frag:TA,cube_vert:AA,cube_frag:wA,depth_vert:RA,depth_frag:CA,distanceRGBA_vert:DA,distanceRGBA_frag:UA,equirect_vert:NA,equirect_frag:LA,linedashed_vert:OA,linedashed_frag:PA,meshbasic_vert:zA,meshbasic_frag:BA,meshlambert_vert:IA,meshlambert_frag:FA,meshmatcap_vert:HA,meshmatcap_frag:GA,meshnormal_vert:VA,meshnormal_frag:kA,meshphong_vert:XA,meshphong_frag:WA,meshphysical_vert:YA,meshphysical_frag:qA,meshtoon_vert:jA,meshtoon_frag:ZA,points_vert:KA,points_frag:QA,shadow_vert:$A,shadow_frag:JA,sprite_vert:tw,sprite_frag:ew},Ht={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},zi={basic:{uniforms:zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:zn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:zn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:zn([Ht.points,Ht.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:zn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:zn([Ht.common,Ht.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:zn([Ht.sprite,Ht.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:zn([Ht.common,Ht.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:zn([Ht.lights,Ht.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};zi.physical={uniforms:zn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const yc={r:0,b:0,g:0},Ur=new ya,nw=new Ke;function iw(i,t,n,r,o,u,c){const h=new ye(0);let p=u===!0?0:1,d,g,v=null,_=0,x=null;function E(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?n:t).get(w)),w}function b(D){let w=!1;const z=E(D);z===null?y(h,p):z&&z.isColor&&(y(z,1),w=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(i.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(D,w){const z=E(w);z&&(z.isCubeTexture||z.mapping===of)?(g===void 0&&(g=new ii(new Bl(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:ao(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ur.copy(w.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(nw.makeRotationFromEuler(Ur)),g.material.toneMapped=Ue.getTransfer(z.colorSpace)!==Ge,(v!==z||_!==z.version||x!==i.toneMapping)&&(g.material.needsUpdate=!0,v=z,_=z.version,x=i.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(d===void 0&&(d=new ii(new uf(2,2),new or({name:"BackgroundMaterial",uniforms:ao(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=z,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Ue.getTransfer(z.colorSpace)!==Ge,z.matrixAutoUpdate===!0&&z.updateMatrix(),d.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||_!==z.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,v=z,_=z.version,x=i.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function y(D,w){D.getRGB(yc,Ny(i)),r.buffers.color.setClear(yc.r,yc.g,yc.b,w,c)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,w=1){h.set(D),p=w,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(h,p)},render:b,addToRenderList:S,dispose:P}}function aw(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=_(null);let u=o,c=!1;function h(R,I,rt,J,vt){let xt=!1;const F=v(J,rt,I);u!==F&&(u=F,d(u.object)),xt=x(R,J,rt,vt),xt&&E(R,J,rt,vt),vt!==null&&t.update(vt,i.ELEMENT_ARRAY_BUFFER),(xt||c)&&(c=!1,w(R,I,rt,J),vt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function p(){return i.createVertexArray()}function d(R){return i.bindVertexArray(R)}function g(R){return i.deleteVertexArray(R)}function v(R,I,rt){const J=rt.wireframe===!0;let vt=r[R.id];vt===void 0&&(vt={},r[R.id]=vt);let xt=vt[I.id];xt===void 0&&(xt={},vt[I.id]=xt);let F=xt[J];return F===void 0&&(F=_(p()),xt[J]=F),F}function _(R){const I=[],rt=[],J=[];for(let vt=0;vt<n;vt++)I[vt]=0,rt[vt]=0,J[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:rt,attributeDivisors:J,object:R,attributes:{},index:null}}function x(R,I,rt,J){const vt=u.attributes,xt=I.attributes;let F=0;const j=rt.getAttributes();for(const q in j)if(j[q].location>=0){const L=vt[q];let V=xt[q];if(V===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(V=R.instanceColor)),L===void 0||L.attribute!==V||V&&L.data!==V.data)return!0;F++}return u.attributesNum!==F||u.index!==J}function E(R,I,rt,J){const vt={},xt=I.attributes;let F=0;const j=rt.getAttributes();for(const q in j)if(j[q].location>=0){let L=xt[q];L===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(L=R.instanceColor));const V={};V.attribute=L,L&&L.data&&(V.data=L.data),vt[q]=V,F++}u.attributes=vt,u.attributesNum=F,u.index=J}function b(){const R=u.newAttributes;for(let I=0,rt=R.length;I<rt;I++)R[I]=0}function S(R){y(R,0)}function y(R,I){const rt=u.newAttributes,J=u.enabledAttributes,vt=u.attributeDivisors;rt[R]=1,J[R]===0&&(i.enableVertexAttribArray(R),J[R]=1),vt[R]!==I&&(i.vertexAttribDivisor(R,I),vt[R]=I)}function P(){const R=u.newAttributes,I=u.enabledAttributes;for(let rt=0,J=I.length;rt<J;rt++)I[rt]!==R[rt]&&(i.disableVertexAttribArray(rt),I[rt]=0)}function D(R,I,rt,J,vt,xt,F){F===!0?i.vertexAttribIPointer(R,I,rt,vt,xt):i.vertexAttribPointer(R,I,rt,J,vt,xt)}function w(R,I,rt,J){b();const vt=J.attributes,xt=rt.getAttributes(),F=I.defaultAttributeValues;for(const j in xt){const q=xt[j];if(q.location>=0){let Tt=vt[j];if(Tt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor)),Tt!==void 0){const L=Tt.normalized,V=Tt.itemSize,mt=t.get(Tt);if(mt===void 0)continue;const $=mt.buffer,k=mt.type,nt=mt.bytesPerElement,ft=k===i.INT||k===i.UNSIGNED_INT||Tt.gpuType===_m;if(Tt.isInterleavedBufferAttribute){const gt=Tt.data,Rt=gt.stride,_t=Tt.offset;if(gt.isInstancedInterleavedBuffer){for(let bt=0;bt<q.locationSize;bt++)y(q.location+bt,gt.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let bt=0;bt<q.locationSize;bt++)S(q.location+bt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let bt=0;bt<q.locationSize;bt++)D(q.location+bt,V/q.locationSize,k,L,Rt*nt,(_t+V/q.locationSize*bt)*nt,ft)}else{if(Tt.isInstancedBufferAttribute){for(let gt=0;gt<q.locationSize;gt++)y(q.location+gt,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let gt=0;gt<q.locationSize;gt++)S(q.location+gt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let gt=0;gt<q.locationSize;gt++)D(q.location+gt,V/q.locationSize,k,L,V*nt,V/q.locationSize*gt*nt,ft)}}else if(F!==void 0){const L=F[j];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(q.location,L);break;case 3:i.vertexAttrib3fv(q.location,L);break;case 4:i.vertexAttrib4fv(q.location,L);break;default:i.vertexAttrib1fv(q.location,L)}}}}P()}function z(){W();for(const R in r){const I=r[R];for(const rt in I){const J=I[rt];for(const vt in J)g(J[vt].object),delete J[vt];delete I[rt]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const I=r[R.id];for(const rt in I){const J=I[rt];for(const vt in J)g(J[vt].object),delete J[vt];delete I[rt]}delete r[R.id]}function B(R){for(const I in r){const rt=r[I];if(rt[R.id]===void 0)continue;const J=rt[R.id];for(const vt in J)g(J[vt].object),delete J[vt];delete rt[R.id]}}function W(){U(),c=!0,u!==o&&(u=o,d(u.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:W,resetDefaultState:U,dispose:z,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:S,disableUnusedAttributes:P}}function rw(i,t,n){let r;function o(d){r=d}function u(d,g){i.drawArrays(r,d,g),n.update(g,r,1)}function c(d,g,v){v!==0&&(i.drawArraysInstanced(r,d,g,v),n.update(g,r,v))}function h(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,v);let x=0;for(let E=0;E<v;E++)x+=g[E];n.update(x,r,1)}function p(d,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)c(d[E],g[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(r,d,0,g,0,_,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*_[b];n.update(E,r,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function sw(i,t,n,r){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(B){return!(B!==Ti&&r.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const W=B===Ol&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==xa&&r.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==pa&&!W)}function p(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:z,maxSamples:O}}function ow(i){const t=this;let n=null,r=0,o=!1,u=!1;const c=new Lr,h=new he,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||r!==0||o;return o=_,r=v.length,x},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const E=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,y=i.get(v);if(!o||E===null||E.length===0||u&&!S)u?g(null):d();else{const P=u?0:r,D=P*4;let w=y.clippingState||null;p.value=w,w=g(E,_,D,x);for(let z=0;z!==D;++z)w[z]=n[z];y.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,x,E){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const y=x+b*4,P=_.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,w=x;D!==b;++D,w+=4)c.copy(v[D]).applyMatrix4(P,h),c.normal.toArray(S,w),S[w+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function lw(i){let t=new WeakMap;function n(c,h){return h===Ep?c.mapping=to:h===bp&&(c.mapping=eo),c}function r(c){if(c&&c.isTexture){const h=c.mapping;if(h===Ep||h===bp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new hT(p.height);return d.fromEquirectangularTexture(i,c),t.set(c,d),c.addEventListener("dispose",o),n(d.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const qs=4,ex=[.125,.215,.35,.446,.526,.582],Br=20,Zd=new xT,nx=new ye;let Kd=null,Qd=0,$d=0,Jd=!1;const Or=(1+Math.sqrt(5))/2,ks=1/Or,ix=[new it(-Or,ks,0),new it(Or,ks,0),new it(-ks,0,Or),new it(ks,0,Or),new it(0,Or,-ks),new it(0,Or,ks),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],uw=new it;class ax{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,o=100,u={}){const{size:c=256,position:h=uw}=u;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kd,Qd,$d),this._renderer.xr.enabled=Jd,t.scissorTest=!1,Sc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===to||t.mapping===eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Ol,format:Ti,colorSpace:no,depthBuffer:!1},o=rx(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rx(t,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cw(u)),this._blurMaterial=fw(u,t,n)}return o}_compileMaterial(t){const n=new ii(this._lodPlanes[0],t);this._renderer.compile(n,Zd)}_sceneToCubeUV(t,n,r,o,u){const p=new ni(90,1,n,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(nx),v.toneMapping=ar,v.autoClear=!1;const E=new io({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),b=new ii(new Bl,E);let S=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,S=!0):(E.color.copy(nx),S=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(p.up.set(0,d[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[P],u.y,u.z)):D===1?(p.up.set(0,0,d[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[P],u.z)):(p.up.set(0,d[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[P]));const w=this._cubeSize;Sc(o,D*w,P>2?w:0,w,w),v.setRenderTarget(o),S&&v.render(b,p),v.render(t,p)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=y}_textureToCubeUV(t,n){const r=this._renderer,o=t.mapping===to||t.mapping===eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sx());const u=o?this._cubemapMaterial:this._equirectMaterial,c=new ii(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;Sc(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Zd)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=ix[(o-u-1)%ix.length];this._blur(t,u-1,u,c,h)}n.autoClear=r}_blur(t,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,r,o,"latitudinal",u),this._halfBlur(c,t,r,r,o,"longitudinal",u)}_halfBlur(t,n,r,o,u,c,h){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ii(this._lodPlanes[o],d),_=d.uniforms,x=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*Br-1),b=u/E,S=isFinite(u)?1+Math.floor(g*b):Br;S>Br&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Br}`);const y=[];let P=0;for(let B=0;B<Br;++B){const W=B/b,U=Math.exp(-W*W/2);y.push(U),B===0?P+=U:B<S&&(P+=2*U)}for(let B=0;B<y.length;B++)y[B]=y[B]/P;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-r;const w=this._sizeLods[o],z=3*w*(o>D-qs?o-D+qs:0),O=4*(this._cubeSize-w);Sc(n,z,O,3*w,2*w),p.setRenderTarget(n),p.render(v,Zd)}}function cw(i){const t=[],n=[],r=[];let o=i;const u=i-qs+1+ex.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);n.push(h);let p=1/h;c>i-qs?p=ex[c-i+qs-1]:c===0&&(p=0),r.push(p);const d=1/(h-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,E=6,b=3,S=2,y=1,P=new Float32Array(b*E*x),D=new Float32Array(S*E*x),w=new Float32Array(y*E*x);for(let O=0;O<x;O++){const B=O%3*2/3-1,W=O>2?0:-1,U=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];P.set(U,b*E*O),D.set(_,S*E*O);const R=[O,O,O,O,O,O];w.set(R,y*E*O)}const z=new gi;z.setAttribute("position",new wi(P,b)),z.setAttribute("uv",new wi(D,S)),z.setAttribute("faceIndex",new wi(w,y)),t.push(z),o>qs&&o--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function rx(i,t,n){const r=new kr(i,t,n);return r.texture.mapping=of,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sc(i,t,n,r,o){i.viewport.set(t,n,r,o),i.scissor.set(t,n,r,o)}function fw(i,t,n){const r=new Float32Array(Br),o=new it(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Rm(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function sx(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rm(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function ox(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Rm(){return`

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
	`}function hw(i){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const p=h.mapping,d=p===Ep||p===bp,g=p===to||p===eo;if(d||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new ax(i)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return d&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new ax(i)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function o(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function u(h){const p=h.target;p.removeEventListener("dispose",u);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function dw(i){const t={};function n(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return t[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Nc("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function pw(i,t,n,r){const o={},u=new WeakMap;function c(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete o[_.id];const x=u.get(_);x&&(t.remove(x),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const x in _)t.update(_[x],i.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,E=v.attributes.position;let b=0;if(x!==null){const P=x.array;b=x.version;for(let D=0,w=P.length;D<w;D+=3){const z=P[D+0],O=P[D+1],B=P[D+2];_.push(z,O,O,B,B,z)}}else if(E!==void 0){const P=E.array;b=E.version;for(let D=0,w=P.length/3-1;D<w;D+=3){const z=D+0,O=D+1,B=D+2;_.push(z,O,O,B,B,z)}}else return;const S=new(wy(_)?Uy:Dy)(_,1);S.version=b;const y=u.get(v);y&&t.remove(y),u.set(v,S)}function g(v){const _=u.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function mw(i,t,n){let r;function o(_){r=_}let u,c;function h(_){u=_.type,c=_.bytesPerElement}function p(_,x){i.drawElements(r,x,u,_*c),n.update(x,r,1)}function d(_,x,E){E!==0&&(i.drawElementsInstanced(r,x,u,_*c,E),n.update(x,r,E))}function g(_,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,u,_,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];n.update(S,r,1)}function v(_,x,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/c,x[y],b[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,u,_,0,b,0,E);let y=0;for(let P=0;P<E;P++)y+=x[P]*b[P];n.update(y,r,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function gw(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,h){switch(n.calls++,c){case i.TRIANGLES:n.triangles+=h*(u/3);break;case i.LINES:n.lines+=h*(u/2);break;case i.LINE_STRIP:n.lines+=h*(u-1);break;case i.LINE_LOOP:n.lines+=h*u;break;case i.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:r}}function _w(i,t,n){const r=new WeakMap,o=new nn;function u(c,h,p){const d=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let R=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var x=R;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),b===!0&&(w=2),S===!0&&(w=3);let z=h.attributes.position.count*w,O=1;z>t.maxTextureSize&&(O=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const B=new Float32Array(z*O*4*v),W=new Ry(B,z,O,v);W.type=pa,W.needsUpdate=!0;const U=w*4;for(let I=0;I<v;I++){const rt=y[I],J=P[I],vt=D[I],xt=z*O*4*I;for(let F=0;F<rt.count;F++){const j=F*U;E===!0&&(o.fromBufferAttribute(rt,F),B[xt+j+0]=o.x,B[xt+j+1]=o.y,B[xt+j+2]=o.z,B[xt+j+3]=0),b===!0&&(o.fromBufferAttribute(J,F),B[xt+j+4]=o.x,B[xt+j+5]=o.y,B[xt+j+6]=o.z,B[xt+j+7]=0),S===!0&&(o.fromBufferAttribute(vt,F),B[xt+j+8]=o.x,B[xt+j+9]=o.y,B[xt+j+10]=o.z,B[xt+j+11]=vt.itemSize===4?o.w:1)}}_={count:v,texture:W,size:new Se(z,O)},r.set(h,_),h.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:u}}function vw(i,t,n,r){let o=new WeakMap;function u(p){const d=r.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==d&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function c(){o=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:c}}const ky=new Bn,lx=new Hy(1,1),Xy=new Ry,Wy=new Zb,Yy=new Oy,ux=[],cx=[],fx=new Float32Array(16),hx=new Float32Array(9),dx=new Float32Array(4);function mo(i,t,n){const r=i[0];if(r<=0||r>0)return i;const o=t*n;let u=ux[o];if(u===void 0&&(u=new Float32Array(o),ux[o]=u),t!==0){r.toArray(u,0);for(let c=1,h=0;c!==t;++c)h+=n,i[c].toArray(u,h)}return u}function dn(i,t){if(i.length!==t.length)return!1;for(let n=0,r=i.length;n<r;n++)if(i[n]!==t[n])return!1;return!0}function pn(i,t){for(let n=0,r=t.length;n<r;n++)i[n]=t[n]}function cf(i,t){let n=cx[t];n===void 0&&(n=new Int32Array(t),cx[t]=n);for(let r=0;r!==t;++r)n[r]=i.allocateTextureUnit();return n}function xw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function yw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;i.uniform2fv(this.addr,t),pn(n,t)}}function Sw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(dn(n,t))return;i.uniform3fv(this.addr,t),pn(n,t)}}function Mw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;i.uniform4fv(this.addr,t),pn(n,t)}}function Ew(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(dn(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,r))return;dx.set(r),i.uniformMatrix2fv(this.addr,!1,dx),pn(n,r)}}function bw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(dn(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,r))return;hx.set(r),i.uniformMatrix3fv(this.addr,!1,hx),pn(n,r)}}function Tw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(dn(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,r))return;fx.set(r),i.uniformMatrix4fv(this.addr,!1,fx),pn(n,r)}}function Aw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function ww(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;i.uniform2iv(this.addr,t),pn(n,t)}}function Rw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;i.uniform3iv(this.addr,t),pn(n,t)}}function Cw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;i.uniform4iv(this.addr,t),pn(n,t)}}function Dw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function Uw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;i.uniform2uiv(this.addr,t),pn(n,t)}}function Nw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;i.uniform3uiv(this.addr,t),pn(n,t)}}function Lw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;i.uniform4uiv(this.addr,t),pn(n,t)}}function Ow(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let u;this.type===i.SAMPLER_2D_SHADOW?(lx.compareFunction=Ay,u=lx):u=ky,n.setTexture2D(t||u,o)}function Pw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(t||Wy,o)}function zw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(t||Yy,o)}function Bw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(t||Xy,o)}function Iw(i){switch(i){case 5126:return xw;case 35664:return yw;case 35665:return Sw;case 35666:return Mw;case 35674:return Ew;case 35675:return bw;case 35676:return Tw;case 5124:case 35670:return Aw;case 35667:case 35671:return ww;case 35668:case 35672:return Rw;case 35669:case 35673:return Cw;case 5125:return Dw;case 36294:return Uw;case 36295:return Nw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ow;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return zw;case 36289:case 36303:case 36311:case 36292:return Bw}}function Fw(i,t){i.uniform1fv(this.addr,t)}function Hw(i,t){const n=mo(t,this.size,2);i.uniform2fv(this.addr,n)}function Gw(i,t){const n=mo(t,this.size,3);i.uniform3fv(this.addr,n)}function Vw(i,t){const n=mo(t,this.size,4);i.uniform4fv(this.addr,n)}function kw(i,t){const n=mo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function Xw(i,t){const n=mo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function Ww(i,t){const n=mo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function Yw(i,t){i.uniform1iv(this.addr,t)}function qw(i,t){i.uniform2iv(this.addr,t)}function jw(i,t){i.uniform3iv(this.addr,t)}function Zw(i,t){i.uniform4iv(this.addr,t)}function Kw(i,t){i.uniform1uiv(this.addr,t)}function Qw(i,t){i.uniform2uiv(this.addr,t)}function $w(i,t){i.uniform3uiv(this.addr,t)}function Jw(i,t){i.uniform4uiv(this.addr,t)}function tR(i,t,n){const r=this.cache,o=t.length,u=cf(n,o);dn(r,u)||(i.uniform1iv(this.addr,u),pn(r,u));for(let c=0;c!==o;++c)n.setTexture2D(t[c]||ky,u[c])}function eR(i,t,n){const r=this.cache,o=t.length,u=cf(n,o);dn(r,u)||(i.uniform1iv(this.addr,u),pn(r,u));for(let c=0;c!==o;++c)n.setTexture3D(t[c]||Wy,u[c])}function nR(i,t,n){const r=this.cache,o=t.length,u=cf(n,o);dn(r,u)||(i.uniform1iv(this.addr,u),pn(r,u));for(let c=0;c!==o;++c)n.setTextureCube(t[c]||Yy,u[c])}function iR(i,t,n){const r=this.cache,o=t.length,u=cf(n,o);dn(r,u)||(i.uniform1iv(this.addr,u),pn(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(t[c]||Xy,u[c])}function aR(i){switch(i){case 5126:return Fw;case 35664:return Hw;case 35665:return Gw;case 35666:return Vw;case 35674:return kw;case 35675:return Xw;case 35676:return Ww;case 5124:case 35670:return Yw;case 35667:case 35671:return qw;case 35668:case 35672:return jw;case 35669:case 35673:return Zw;case 5125:return Kw;case 36294:return Qw;case 36295:return $w;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}class rR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Iw(n.type)}}class sR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aR(n.type)}}class oR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(t,n[h.id],r)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function px(i,t){i.seq.push(t),i.map[t.id]=t}function lR(i,t,n){const r=i.name,o=r.length;for(tp.lastIndex=0;;){const u=tp.exec(r),c=tp.lastIndex;let h=u[1];const p=u[2]==="]",d=u[3];if(p&&(h=h|0),d===void 0||d==="["&&c+2===o){px(n,d===void 0?new rR(h,i,t):new sR(h,i,t));break}else{let v=n.map[h];v===void 0&&(v=new oR(h),px(n,v)),n=v}}}class Lc{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const u=t.getActiveUniform(n,o),c=t.getUniformLocation(n,u.name);lR(u,c,this)}}setValue(t,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(t,r,o)}setOptional(t,n,r){const o=n[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,n,r,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const r=[];for(let o=0,u=t.length;o!==u;++o){const c=t[o];c.id in n&&r.push(c)}return r}}function mx(i,t,n){const r=i.createShader(t);return i.shaderSource(r,n),i.compileShader(r),r}const uR=37297;let cR=0;function fR(i,t){const n=i.split(`
`),r=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=o;c<u;c++){const h=c+1;r.push(`${h===t?">":" "} ${h}: ${n[c]}`)}return r.join(`
`)}const gx=new he;function hR(i){Ue._getMatrix(gx,Ue.workingColorSpace,i);const t=`mat3( ${gx.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(i)){case Fc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _x(i,t,n){const r=i.getShaderParameter(t,i.COMPILE_STATUS),o=i.getShaderInfoLog(t).trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+fR(i.getShaderSource(t),c)}else return o}function dR(i,t){const n=hR(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function pR(i,t){let n;switch(t){case yb:n="Linear";break;case Sb:n="Reinhard";break;case Mb:n="Cineon";break;case Eb:n="ACESFilmic";break;case Tb:n="AgX";break;case Ab:n="Neutral";break;case bb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mc=new it;function mR(){Ue.getLuminanceCoefficients(Mc);const i=Mc.x.toFixed(4),t=Mc.y.toFixed(4),n=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function _R(i){const t=[];for(const n in i){const r=i[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function vR(i,t){const n={},r=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=i.getActiveAttrib(t,o),c=u.name;let h=1;u.type===i.FLOAT_MAT2&&(h=2),u.type===i.FLOAT_MAT3&&(h=3),u.type===i.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:i.getAttribLocation(t,c),locationSize:h}}return n}function Ml(i){return i!==""}function vx(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xx(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xR=/^[ \t]*#include +<([\w\d./]+)>/gm;function nm(i){return i.replace(xR,SR)}const yR=new Map;function SR(i,t){let n=de[t];if(n===void 0){const r=yR.get(t);if(r!==void 0)n=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return nm(n)}const MR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yx(i){return i.replace(MR,ER)}function ER(i,t,n,r){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Sx(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function bR(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dy?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===JE?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ha&&(t="SHADOWMAP_TYPE_VSM"),t}function TR(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case to:case eo:t="ENVMAP_TYPE_CUBE";break;case of:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AR(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case eo:t="ENVMAP_MODE_REFRACTION";break}return t}function wR(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case py:t="ENVMAP_BLENDING_MULTIPLY";break;case vb:t="ENVMAP_BLENDING_MIX";break;case xb:t="ENVMAP_BLENDING_ADD";break}return t}function RR(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function CR(i,t,n,r){const o=i.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const p=bR(n),d=TR(n),g=AR(n),v=wR(n),_=RR(n),x=gR(n),E=_R(u),b=o.createProgram();let S,y,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ml).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ml).join(`
`),y.length>0&&(y+=`
`)):(S=[Sx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),y=[Sx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?de.tonemapping_pars_fragment:"",n.toneMapping!==ar?pR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,dR("linearToOutputTexel",n.outputColorSpace),mR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ml).join(`
`)),c=nm(c),c=vx(c,n),c=xx(c,n),h=nm(h),h=vx(h,n),h=xx(h,n),c=yx(c),h=yx(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===Dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=P+S+c,w=P+y+h,z=mx(o,o.VERTEX_SHADER,D),O=mx(o,o.FRAGMENT_SHADER,w);o.attachShader(b,z),o.attachShader(b,O),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function B(I){if(i.debug.checkShaderErrors){const rt=o.getProgramInfoLog(b).trim(),J=o.getShaderInfoLog(z).trim(),vt=o.getShaderInfoLog(O).trim();let xt=!0,F=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(xt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,b,z,O);else{const j=_x(o,z,"vertex"),q=_x(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+rt+`
`+j+`
`+q)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(J===""||vt==="")&&(F=!1);F&&(I.diagnostics={runnable:xt,programLog:rt,vertexShader:{log:J,prefix:S},fragmentShader:{log:vt,prefix:y}})}o.deleteShader(z),o.deleteShader(O),W=new Lc(o,b),U=vR(o,b)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(b,uR)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=O,this}let DR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new NR(t),n.set(t,r)),r}}class NR{constructor(t){this.id=DR++,this.code=t,this.usedTimes=0}}function LR(i,t,n,r,o,u,c){const h=new Tm,p=new UR,d=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return d.add(U),U===0?"uv":`uv${U}`}function S(U,R,I,rt,J){const vt=rt.fog,xt=J.geometry,F=U.isMeshStandardMaterial?rt.environment:null,j=(U.isMeshStandardMaterial?n:t).get(U.envMap||F),q=j&&j.mapping===of?j.image.height:null,Tt=E[U.type];U.precision!==null&&(x=o.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const L=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,V=L!==void 0?L.length:0;let mt=0;xt.morphAttributes.position!==void 0&&(mt=1),xt.morphAttributes.normal!==void 0&&(mt=2),xt.morphAttributes.color!==void 0&&(mt=3);let $,k,nt,ft;if(Tt){const Re=zi[Tt];$=Re.vertexShader,k=Re.fragmentShader}else $=U.vertexShader,k=U.fragmentShader,p.update(U),nt=p.getVertexShaderID(U),ft=p.getFragmentShaderID(U);const gt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),_t=J.isInstancedMesh===!0,bt=J.isBatchedMesh===!0,kt=!!U.map,dt=!!U.matcap,Kt=!!j,H=!!U.aoMap,Te=!!U.lightMap,te=!!U.bumpMap,Zt=!!U.normalMap,Xt=!!U.displacementMap,ge=!!U.emissiveMap,Ot=!!U.metalnessMap,N=!!U.roughnessMap,T=U.anisotropy>0,tt=U.clearcoat>0,St=U.dispersion>0,wt=U.iridescence>0,st=U.sheen>0,Lt=U.transmission>0,Ut=T&&!!U.anisotropyMap,Nt=tt&&!!U.clearcoatMap,ue=tt&&!!U.clearcoatNormalMap,Ct=tt&&!!U.clearcoatRoughnessMap,Gt=wt&&!!U.iridescenceMap,jt=wt&&!!U.iridescenceThicknessMap,$t=st&&!!U.sheenColorMap,Pt=st&&!!U.sheenRoughnessMap,ce=!!U.specularMap,re=!!U.specularColorMap,Oe=!!U.specularIntensityMap,Y=Lt&&!!U.transmissionMap,Bt=Lt&&!!U.thicknessMap,pt=!!U.gradientMap,Et=!!U.alphaMap,Vt=U.alphaTest>0,It=!!U.alphaHash,le=!!U.extensions;let Pe=ar;U.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const an={shaderID:Tt,shaderType:U.type,shaderName:U.name,vertexShader:$,fragmentShader:k,defines:U.defines,customVertexShaderID:nt,customFragmentShaderID:ft,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:bt,batchingColor:bt&&J._colorsTexture!==null,instancing:_t,instancingColor:_t&&J.instanceColor!==null,instancingMorph:_t&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:no,alphaToCoverage:!!U.alphaToCoverage,map:kt,matcap:dt,envMap:Kt,envMapMode:Kt&&j.mapping,envMapCubeUVHeight:q,aoMap:H,lightMap:Te,bumpMap:te,normalMap:Zt,displacementMap:_&&Xt,emissiveMap:ge,normalMapObjectSpace:Zt&&U.normalMapType===Ub,normalMapTangentSpace:Zt&&U.normalMapType===Db,metalnessMap:Ot,roughnessMap:N,anisotropy:T,anisotropyMap:Ut,clearcoat:tt,clearcoatMap:Nt,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ct,dispersion:St,iridescence:wt,iridescenceMap:Gt,iridescenceThicknessMap:jt,sheen:st,sheenColorMap:$t,sheenRoughnessMap:Pt,specularMap:ce,specularColorMap:re,specularIntensityMap:Oe,transmission:Lt,transmissionMap:Y,thicknessMap:Bt,gradientMap:pt,opaque:U.transparent===!1&&U.blending===Ks&&U.alphaToCoverage===!1,alphaMap:Et,alphaTest:Vt,alphaHash:It,combine:U.combine,mapUv:kt&&b(U.map.channel),aoMapUv:H&&b(U.aoMap.channel),lightMapUv:Te&&b(U.lightMap.channel),bumpMapUv:te&&b(U.bumpMap.channel),normalMapUv:Zt&&b(U.normalMap.channel),displacementMapUv:Xt&&b(U.displacementMap.channel),emissiveMapUv:ge&&b(U.emissiveMap.channel),metalnessMapUv:Ot&&b(U.metalnessMap.channel),roughnessMapUv:N&&b(U.roughnessMap.channel),anisotropyMapUv:Ut&&b(U.anisotropyMap.channel),clearcoatMapUv:Nt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:ue&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(U.sheenRoughnessMap.channel),specularMapUv:ce&&b(U.specularMap.channel),specularColorMapUv:re&&b(U.specularColorMap.channel),specularIntensityMapUv:Oe&&b(U.specularIntensityMap.channel),transmissionMapUv:Y&&b(U.transmissionMap.channel),thicknessMapUv:Bt&&b(U.thicknessMap.channel),alphaMapUv:Et&&b(U.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(Zt||T),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!xt.attributes.uv&&(kt||Et),fog:!!vt,useFog:U.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Rt,skinning:J.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:mt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:U.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:kt&&U.map.isVideoTexture===!0&&Ue.getTransfer(U.map.colorSpace)===Ge,decodeVideoTextureEmissive:ge&&U.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(U.emissiveMap.colorSpace)===Ge,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===da,flipSided:U.side===Wn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:le&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&U.extensions.multiDraw===!0||bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return an.vertexUv1s=d.has(1),an.vertexUv2s=d.has(2),an.vertexUv3s=d.has(3),d.clear(),an}function y(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const I in U.defines)R.push(I),R.push(U.defines[I]);return U.isRawShaderMaterial===!1&&(P(R,U),D(R,U),R.push(i.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function P(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function D(U,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),U.push(h.mask)}function w(U){const R=E[U.type];let I;if(R){const rt=zi[R];I=lT.clone(rt.uniforms)}else I=U.uniforms;return I}function z(U,R){let I;for(let rt=0,J=g.length;rt<J;rt++){const vt=g[rt];if(vt.cacheKey===R){I=vt,++I.usedTimes;break}}return I===void 0&&(I=new CR(i,R,U,u),g.push(I)),I}function O(U){if(--U.usedTimes===0){const R=g.indexOf(U);g[R]=g[g.length-1],g.pop(),U.destroy()}}function B(U){p.remove(U)}function W(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:z,releaseProgram:O,releaseShaderCache:B,programs:g,dispose:W}}function OR(){let i=new WeakMap;function t(c){return i.has(c)}function n(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function r(c){i.delete(c)}function o(c,h,p){i.get(c)[h]=p}function u(){i=new WeakMap}return{has:t,get:n,remove:r,update:o,dispose:u}}function PR(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ex(){const i=[];let t=0;const n=[],r=[],o=[];function u(){t=0,n.length=0,r.length=0,o.length=0}function c(v,_,x,E,b,S){let y=i[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:E,renderOrder:v.renderOrder,z:b,group:S},i[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=b,y.group=S),t++,y}function h(v,_,x,E,b,S){const y=c(v,_,x,E,b,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):n.push(y)}function p(v,_,x,E,b,S){const y=c(v,_,x,E,b,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):n.unshift(y)}function d(v,_){n.length>1&&n.sort(v||PR),r.length>1&&r.sort(_||Mx),o.length>1&&o.sort(_||Mx)}function g(){for(let v=t,_=i.length;v<_;v++){const x=i[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:h,unshift:p,finish:g,sort:d}}function zR(){let i=new WeakMap;function t(r,o){const u=i.get(r);let c;return u===void 0?(c=new Ex,i.set(r,[c])):o>=u.length?(c=new Ex,u.push(c)):c=u[o],c}function n(){i=new WeakMap}return{get:t,dispose:n}}function BR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new it,color:new ye};break;case"SpotLight":n={position:new it,direction:new it,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new it,color:new ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new it,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":n={color:new ye,position:new it,halfWidth:new it,halfHeight:new it};break}return i[t.id]=n,n}}}function IR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let FR=0;function HR(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function GR(i){const t=new BR,n=IR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new it);const o=new it,u=new Ke,c=new Ke;function h(d){let g=0,v=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,E=0,b=0,S=0,y=0,P=0,D=0,w=0,z=0,O=0,B=0;d.sort(HR);for(let U=0,R=d.length;U<R;U++){const I=d[U],rt=I.color,J=I.intensity,vt=I.distance,xt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=rt.r*J,v+=rt.g*J,_+=rt.b*J;else if(I.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],J);B++}else if(I.isDirectionalLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,q=n.get(I);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[x]=q,r.directionalShadowMap[x]=xt,r.directionalShadowMatrix[x]=I.shadow.matrix,P++}r.directional[x]=F,x++}else if(I.isSpotLight){const F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(rt).multiplyScalar(J),F.distance=vt,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,r.spot[b]=F;const j=I.shadow;if(I.map&&(r.spotLightMap[z]=I.map,z++,j.updateMatrices(I),I.castShadow&&O++),r.spotLightMatrix[b]=j.matrix,I.castShadow){const q=n.get(I);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[b]=q,r.spotShadowMap[b]=xt,w++}b++}else if(I.isRectAreaLight){const F=t.get(I);F.color.copy(rt).multiplyScalar(J),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=F,S++}else if(I.isPointLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){const j=I.shadow,q=n.get(I);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=xt,r.pointShadowMatrix[E]=I.shadow.matrix,D++}r.point[E]=F,E++}else if(I.isHemisphereLight){const F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(J),F.groundColor.copy(I.groundColor).multiplyScalar(J),r.hemi[y]=F,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==x||W.pointLength!==E||W.spotLength!==b||W.rectAreaLength!==S||W.hemiLength!==y||W.numDirectionalShadows!==P||W.numPointShadows!==D||W.numSpotShadows!==w||W.numSpotMaps!==z||W.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=w+z-O,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=B,W.directionalLength=x,W.pointLength=E,W.spotLength=b,W.rectAreaLength=S,W.hemiLength=y,W.numDirectionalShadows=P,W.numPointShadows=D,W.numSpotShadows=w,W.numSpotMaps=z,W.numLightProbes=B,r.version=FR++)}function p(d,g){let v=0,_=0,x=0,E=0,b=0;const S=g.matrixWorldInverse;for(let y=0,P=d.length;y<P;y++){const D=d[y];if(D.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),v++}else if(D.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),c.identity(),u.copy(D.matrixWorld),u.premultiply(S),c.extractRotation(u),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),_++}else if(D.isHemisphereLight){const w=r.hemi[b];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:r}}function bx(i){const t=new GR(i),n=[],r=[];function o(g){d.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function c(g){r.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c}}function VR(i){let t=new WeakMap;function n(o,u=0){const c=t.get(o);let h;return c===void 0?(h=new bx(i),t.set(o,[h])):u>=c.length?(h=new bx(i),c.push(h)):h=c[u],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const kR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XR=`uniform sampler2D shadow_pass;
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
}`;function WR(i,t,n){let r=new Iy;const o=new Se,u=new Se,c=new nn,h=new _T({depthPacking:Cb}),p=new vT,d={},g=n.maxTextureSize,v={[sr]:Wn,[Wn]:sr,[da]:da},_=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:kR,fragmentShader:XR}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new gi;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ii(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dy;let y=this.type;this.render=function(O,B,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const U=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(ir),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const J=y!==ha&&this.type===ha,vt=y===ha&&this.type!==ha;for(let xt=0,F=O.length;xt<F;xt++){const j=O[xt],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const Tt=q.getFrameExtents();if(o.multiply(Tt),u.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/Tt.x),o.x=u.x*Tt.x,q.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/Tt.y),o.y=u.y*Tt.y,q.mapSize.y=u.y)),q.map===null||J===!0||vt===!0){const V=this.type!==ha?{minFilter:Ai,magFilter:Ai}:{};q.map!==null&&q.map.dispose(),q.map=new kr(o.x,o.y,V),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const L=q.getViewportCount();for(let V=0;V<L;V++){const mt=q.getViewport(V);c.set(u.x*mt.x,u.y*mt.y,u.x*mt.z,u.y*mt.w),rt.viewport(c),q.updateMatrices(j,V),r=q.getFrustum(),w(B,W,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===ha&&P(q,W),q.needsUpdate=!1}y=this.type,S.needsUpdate=!1,i.setRenderTarget(U,R,I)};function P(O,B){const W=t.update(b);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new kr(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(B,null,W,_,b,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(B,null,W,x,b,null)}function D(O,B,W,U){let R=null;const I=W.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(I!==void 0)R=I;else if(R=W.isPointLight===!0?p:h,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const rt=R.uuid,J=B.uuid;let vt=d[rt];vt===void 0&&(vt={},d[rt]=vt);let xt=vt[J];xt===void 0&&(xt=R.clone(),vt[J]=xt,B.addEventListener("dispose",z)),R=xt}if(R.visible=B.visible,R.wireframe=B.wireframe,U===ha?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:v[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const rt=i.properties.get(R);rt.light=W}return R}function w(O,B,W,U,R){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===ha)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,O.matrixWorld);const J=t.update(O),vt=O.material;if(Array.isArray(vt)){const xt=J.groups;for(let F=0,j=xt.length;F<j;F++){const q=xt[F],Tt=vt[q.materialIndex];if(Tt&&Tt.visible){const L=D(O,Tt,U,R);O.onBeforeShadow(i,O,B,W,J,L,q),i.renderBufferDirect(W,null,J,L,O,q),O.onAfterShadow(i,O,B,W,J,L,q)}}}else if(vt.visible){const xt=D(O,vt,U,R);O.onBeforeShadow(i,O,B,W,J,xt,null),i.renderBufferDirect(W,null,J,xt,O,null),O.onAfterShadow(i,O,B,W,J,xt,null)}}const rt=O.children;for(let J=0,vt=rt.length;J<vt;J++)w(rt[J],B,W,U,R)}function z(O){O.target.removeEventListener("dispose",z);for(const W in d){const U=d[W],R=O.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const YR={[gp]:_p,[vp]:Sp,[xp]:Mp,[Js]:yp,[_p]:gp,[Sp]:vp,[Mp]:xp,[yp]:Js};function qR(i,t){function n(){let Y=!1;const Bt=new nn;let pt=null;const Et=new nn(0,0,0,0);return{setMask:function(Vt){pt!==Vt&&!Y&&(i.colorMask(Vt,Vt,Vt,Vt),pt=Vt)},setLocked:function(Vt){Y=Vt},setClear:function(Vt,It,le,Pe,an){an===!0&&(Vt*=Pe,It*=Pe,le*=Pe),Bt.set(Vt,It,le,Pe),Et.equals(Bt)===!1&&(i.clearColor(Vt,It,le,Pe),Et.copy(Bt))},reset:function(){Y=!1,pt=null,Et.set(-1,0,0,0)}}}function r(){let Y=!1,Bt=!1,pt=null,Et=null,Vt=null;return{setReversed:function(It){if(Bt!==It){const le=t.get("EXT_clip_control");It?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Bt=It;const Pe=Vt;Vt=null,this.setClear(Pe)}},getReversed:function(){return Bt},setTest:function(It){It?gt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(It){pt!==It&&!Y&&(i.depthMask(It),pt=It)},setFunc:function(It){if(Bt&&(It=YR[It]),Et!==It){switch(It){case gp:i.depthFunc(i.NEVER);break;case _p:i.depthFunc(i.ALWAYS);break;case vp:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case xp:i.depthFunc(i.EQUAL);break;case yp:i.depthFunc(i.GEQUAL);break;case Sp:i.depthFunc(i.GREATER);break;case Mp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=It}},setLocked:function(It){Y=It},setClear:function(It){Vt!==It&&(Bt&&(It=1-It),i.clearDepth(It),Vt=It)},reset:function(){Y=!1,pt=null,Et=null,Vt=null,Bt=!1}}}function o(){let Y=!1,Bt=null,pt=null,Et=null,Vt=null,It=null,le=null,Pe=null,an=null;return{setTest:function(Re){Y||(Re?gt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Re){Bt!==Re&&!Y&&(i.stencilMask(Re),Bt=Re)},setFunc:function(Re,Yn,gn){(pt!==Re||Et!==Yn||Vt!==gn)&&(i.stencilFunc(Re,Yn,gn),pt=Re,Et=Yn,Vt=gn)},setOp:function(Re,Yn,gn){(It!==Re||le!==Yn||Pe!==gn)&&(i.stencilOp(Re,Yn,gn),It=Re,le=Yn,Pe=gn)},setLocked:function(Re){Y=Re},setClear:function(Re){an!==Re&&(i.clearStencil(Re),an=Re)},reset:function(){Y=!1,Bt=null,pt=null,Et=null,Vt=null,It=null,le=null,Pe=null,an=null}}}const u=new n,c=new r,h=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],E=null,b=!1,S=null,y=null,P=null,D=null,w=null,z=null,O=null,B=new ye(0,0,0),W=0,U=!1,R=null,I=null,rt=null,J=null,vt=null;const xt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=j>=2);let Tt=null,L={};const V=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),$=new nn().fromArray(V),k=new nn().fromArray(mt);function nt(Y,Bt,pt,Et){const Vt=new Uint8Array(4),It=i.createTexture();i.bindTexture(Y,It),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<pt;le++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Bt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Bt+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return It}const ft={};ft[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),gt(i.DEPTH_TEST),c.setFunc(Js),te(!1),Zt(Tv),gt(i.CULL_FACE),H(ir);function gt(Y){g[Y]!==!0&&(i.enable(Y),g[Y]=!0)}function Rt(Y){g[Y]!==!1&&(i.disable(Y),g[Y]=!1)}function _t(Y,Bt){return v[Y]!==Bt?(i.bindFramebuffer(Y,Bt),v[Y]=Bt,Y===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Bt),Y===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Bt),!0):!1}function bt(Y,Bt){let pt=x,Et=!1;if(Y){pt=_.get(Bt),pt===void 0&&(pt=[],_.set(Bt,pt));const Vt=Y.textures;if(pt.length!==Vt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let It=0,le=Vt.length;It<le;It++)pt[It]=i.COLOR_ATTACHMENT0+It;pt.length=Vt.length,Et=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(pt)}function kt(Y){return E!==Y?(i.useProgram(Y),E=Y,!0):!1}const dt={[zr]:i.FUNC_ADD,[eb]:i.FUNC_SUBTRACT,[nb]:i.FUNC_REVERSE_SUBTRACT};dt[ib]=i.MIN,dt[ab]=i.MAX;const Kt={[rb]:i.ZERO,[sb]:i.ONE,[ob]:i.SRC_COLOR,[pp]:i.SRC_ALPHA,[db]:i.SRC_ALPHA_SATURATE,[fb]:i.DST_COLOR,[ub]:i.DST_ALPHA,[lb]:i.ONE_MINUS_SRC_COLOR,[mp]:i.ONE_MINUS_SRC_ALPHA,[hb]:i.ONE_MINUS_DST_COLOR,[cb]:i.ONE_MINUS_DST_ALPHA,[pb]:i.CONSTANT_COLOR,[mb]:i.ONE_MINUS_CONSTANT_COLOR,[gb]:i.CONSTANT_ALPHA,[_b]:i.ONE_MINUS_CONSTANT_ALPHA};function H(Y,Bt,pt,Et,Vt,It,le,Pe,an,Re){if(Y===ir){b===!0&&(Rt(i.BLEND),b=!1);return}if(b===!1&&(gt(i.BLEND),b=!0),Y!==tb){if(Y!==S||Re!==U){if((y!==zr||w!==zr)&&(i.blendEquation(i.FUNC_ADD),y=zr,w=zr),Re)switch(Y){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Av:i.blendFunc(i.ONE,i.ONE);break;case wv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rv:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Av:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rv:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}P=null,D=null,z=null,O=null,B.set(0,0,0),W=0,S=Y,U=Re}return}Vt=Vt||Bt,It=It||pt,le=le||Et,(Bt!==y||Vt!==w)&&(i.blendEquationSeparate(dt[Bt],dt[Vt]),y=Bt,w=Vt),(pt!==P||Et!==D||It!==z||le!==O)&&(i.blendFuncSeparate(Kt[pt],Kt[Et],Kt[It],Kt[le]),P=pt,D=Et,z=It,O=le),(Pe.equals(B)===!1||an!==W)&&(i.blendColor(Pe.r,Pe.g,Pe.b,an),B.copy(Pe),W=an),S=Y,U=!1}function Te(Y,Bt){Y.side===da?Rt(i.CULL_FACE):gt(i.CULL_FACE);let pt=Y.side===Wn;Bt&&(pt=!pt),te(pt),Y.blending===Ks&&Y.transparent===!1?H(ir):H(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const Et=Y.stencilWrite;h.setTest(Et),Et&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ge(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(Y){R!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),R=Y)}function Zt(Y){Y!==QE?(gt(i.CULL_FACE),Y!==I&&(Y===Tv?i.cullFace(i.BACK):Y===$E?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),I=Y}function Xt(Y){Y!==rt&&(F&&i.lineWidth(Y),rt=Y)}function ge(Y,Bt,pt){Y?(gt(i.POLYGON_OFFSET_FILL),(J!==Bt||vt!==pt)&&(i.polygonOffset(Bt,pt),J=Bt,vt=pt)):Rt(i.POLYGON_OFFSET_FILL)}function Ot(Y){Y?gt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function N(Y){Y===void 0&&(Y=i.TEXTURE0+xt-1),Tt!==Y&&(i.activeTexture(Y),Tt=Y)}function T(Y,Bt,pt){pt===void 0&&(Tt===null?pt=i.TEXTURE0+xt-1:pt=Tt);let Et=L[pt];Et===void 0&&(Et={type:void 0,texture:void 0},L[pt]=Et),(Et.type!==Y||Et.texture!==Bt)&&(Tt!==pt&&(i.activeTexture(pt),Tt=pt),i.bindTexture(Y,Bt||ft[Y]),Et.type=Y,Et.texture=Bt)}function tt(){const Y=L[Tt];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function St(){try{i.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function wt(){try{i.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function st(){try{i.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Lt(){try{i.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ut(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ue(){try{i.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{i.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Gt(){try{i.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(){try{i.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $t(Y){$.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),$.copy(Y))}function Pt(Y){k.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),k.copy(Y))}function ce(Y,Bt){let pt=d.get(Bt);pt===void 0&&(pt=new WeakMap,d.set(Bt,pt));let Et=pt.get(Y);Et===void 0&&(Et=i.getUniformBlockIndex(Bt,Y.name),pt.set(Y,Et))}function re(Y,Bt){const Et=d.get(Bt).get(Y);p.get(Bt)!==Et&&(i.uniformBlockBinding(Bt,Et,Y.__bindingPointIndex),p.set(Bt,Et))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},Tt=null,L={},v={},_=new WeakMap,x=[],E=null,b=!1,S=null,y=null,P=null,D=null,w=null,z=null,O=null,B=new ye(0,0,0),W=0,U=!1,R=null,I=null,rt=null,J=null,vt=null,$.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:gt,disable:Rt,bindFramebuffer:_t,drawBuffers:bt,useProgram:kt,setBlending:H,setMaterial:Te,setFlipSided:te,setCullFace:Zt,setLineWidth:Xt,setPolygonOffset:ge,setScissorTest:Ot,activeTexture:N,bindTexture:T,unbindTexture:tt,compressedTexImage2D:St,compressedTexImage3D:wt,texImage2D:Gt,texImage3D:jt,updateUBOMapping:ce,uniformBlockBinding:re,texStorage2D:ue,texStorage3D:Ct,texSubImage2D:st,texSubImage3D:Lt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Nt,scissor:$t,viewport:Pt,reset:Oe}}function jR(i,t,n,r,o,u,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Se,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return x?new OffscreenCanvas(N,T):Gc("canvas")}function b(N,T,tt){let St=1;const wt=Ot(N);if((wt.width>tt||wt.height>tt)&&(St=tt/Math.max(wt.width,wt.height)),St<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const st=Math.floor(St*wt.width),Lt=Math.floor(St*wt.height);v===void 0&&(v=E(st,Lt));const Ut=T?E(st,Lt):v;return Ut.width=st,Ut.height=Lt,Ut.getContext("2d").drawImage(N,0,0,st,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+st+"x"+Lt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),N;return N}function S(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(N,T,tt,St,wt=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let st=T;if(T===i.RED&&(tt===i.FLOAT&&(st=i.R32F),tt===i.HALF_FLOAT&&(st=i.R16F),tt===i.UNSIGNED_BYTE&&(st=i.R8)),T===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(st=i.R8UI),tt===i.UNSIGNED_SHORT&&(st=i.R16UI),tt===i.UNSIGNED_INT&&(st=i.R32UI),tt===i.BYTE&&(st=i.R8I),tt===i.SHORT&&(st=i.R16I),tt===i.INT&&(st=i.R32I)),T===i.RG&&(tt===i.FLOAT&&(st=i.RG32F),tt===i.HALF_FLOAT&&(st=i.RG16F),tt===i.UNSIGNED_BYTE&&(st=i.RG8)),T===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(st=i.RG8UI),tt===i.UNSIGNED_SHORT&&(st=i.RG16UI),tt===i.UNSIGNED_INT&&(st=i.RG32UI),tt===i.BYTE&&(st=i.RG8I),tt===i.SHORT&&(st=i.RG16I),tt===i.INT&&(st=i.RG32I)),T===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(st=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(st=i.RGB16UI),tt===i.UNSIGNED_INT&&(st=i.RGB32UI),tt===i.BYTE&&(st=i.RGB8I),tt===i.SHORT&&(st=i.RGB16I),tt===i.INT&&(st=i.RGB32I)),T===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),tt===i.UNSIGNED_INT&&(st=i.RGBA32UI),tt===i.BYTE&&(st=i.RGBA8I),tt===i.SHORT&&(st=i.RGBA16I),tt===i.INT&&(st=i.RGBA32I)),T===i.RGB&&tt===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),T===i.RGBA){const Lt=wt?Fc:Ue.getTransfer(St);tt===i.FLOAT&&(st=i.RGBA32F),tt===i.HALF_FLOAT&&(st=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(st=Lt===Ge?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function w(N,T){let tt;return N?T===null||T===Vr||T===Rl?tt=i.DEPTH24_STENCIL8:T===pa?tt=i.DEPTH32F_STENCIL8:T===wl&&(tt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Vr||T===Rl?tt=i.DEPTH_COMPONENT24:T===pa?tt=i.DEPTH_COMPONENT32F:T===wl&&(tt=i.DEPTH_COMPONENT16),tt}function z(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ai&&N.minFilter!==Ii?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function O(N){const T=N.target;T.removeEventListener("dispose",O),W(T),T.isVideoTexture&&g.delete(T)}function B(N){const T=N.target;T.removeEventListener("dispose",B),R(T)}function W(N){const T=r.get(N);if(T.__webglInit===void 0)return;const tt=N.source,St=_.get(tt);if(St){const wt=St[T.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&U(N),Object.keys(St).length===0&&_.delete(tt)}r.remove(N)}function U(N){const T=r.get(N);i.deleteTexture(T.__webglTexture);const tt=N.source,St=_.get(tt);delete St[T.__cacheKey],c.memory.textures--}function R(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(T.__webglFramebuffer[St]))for(let wt=0;wt<T.__webglFramebuffer[St].length;wt++)i.deleteFramebuffer(T.__webglFramebuffer[St][wt]);else i.deleteFramebuffer(T.__webglFramebuffer[St]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[St])}else{if(Array.isArray(T.__webglFramebuffer))for(let St=0;St<T.__webglFramebuffer.length;St++)i.deleteFramebuffer(T.__webglFramebuffer[St]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let St=0;St<T.__webglColorRenderbuffer.length;St++)T.__webglColorRenderbuffer[St]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[St]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=N.textures;for(let St=0,wt=tt.length;St<wt;St++){const st=r.get(tt[St]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),c.memory.textures--),r.remove(tt[St])}r.remove(N)}let I=0;function rt(){I=0}function J(){const N=I;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),I+=1,N}function vt(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function xt(N,T){const tt=r.get(N);if(N.isVideoTexture&&Xt(N),N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){const St=N.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(tt,N,T);return}}n.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+T)}function F(N,T){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){k(tt,N,T);return}n.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+T)}function j(N,T){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){k(tt,N,T);return}n.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+T)}function q(N,T){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){nt(tt,N,T);return}n.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+T)}const Tt={[Tp]:i.REPEAT,[Ir]:i.CLAMP_TO_EDGE,[Ap]:i.MIRRORED_REPEAT},L={[Ai]:i.NEAREST,[wb]:i.NEAREST_MIPMAP_NEAREST,[Qu]:i.NEAREST_MIPMAP_LINEAR,[Ii]:i.LINEAR,[Ed]:i.LINEAR_MIPMAP_NEAREST,[Fr]:i.LINEAR_MIPMAP_LINEAR},V={[Nb]:i.NEVER,[Ib]:i.ALWAYS,[Lb]:i.LESS,[Ay]:i.LEQUAL,[Ob]:i.EQUAL,[Bb]:i.GEQUAL,[Pb]:i.GREATER,[zb]:i.NOTEQUAL};function mt(N,T){if(T.type===pa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ii||T.magFilter===Ed||T.magFilter===Qu||T.magFilter===Fr||T.minFilter===Ii||T.minFilter===Ed||T.minFilter===Qu||T.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Tt[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Tt[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Tt[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,L[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,V[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ai||T.minFilter!==Qu&&T.minFilter!==Fr||T.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function $(N,T){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",O));const St=T.source;let wt=_.get(St);wt===void 0&&(wt={},_.set(St,wt));const st=vt(T);if(st!==N.__cacheKey){wt[st]===void 0&&(wt[st]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,tt=!0),wt[st].usedTimes++;const Lt=wt[N.__cacheKey];Lt!==void 0&&(wt[N.__cacheKey].usedTimes--,Lt.usedTimes===0&&U(T)),N.__cacheKey=st,N.__webglTexture=wt[st].texture}return tt}function k(N,T,tt){let St=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(St=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(St=i.TEXTURE_3D);const wt=$(N,T),st=T.source;n.bindTexture(St,N.__webglTexture,i.TEXTURE0+tt);const Lt=r.get(st);if(st.version!==Lt.__version||wt===!0){n.activeTexture(i.TEXTURE0+tt);const Ut=Ue.getPrimaries(Ue.workingColorSpace),Nt=T.colorSpace===nr?null:Ue.getPrimaries(T.colorSpace),ue=T.colorSpace===nr||Ut===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ct=b(T.image,!1,o.maxTextureSize);Ct=ge(T,Ct);const Gt=u.convert(T.format,T.colorSpace),jt=u.convert(T.type);let $t=D(T.internalFormat,Gt,jt,T.colorSpace,T.isVideoTexture);mt(St,T);let Pt;const ce=T.mipmaps,re=T.isVideoTexture!==!0,Oe=Lt.__version===void 0||wt===!0,Y=st.dataReady,Bt=z(T,Ct);if(T.isDepthTexture)$t=w(T.format===Dl,T.type),Oe&&(re?n.texStorage2D(i.TEXTURE_2D,1,$t,Ct.width,Ct.height):n.texImage2D(i.TEXTURE_2D,0,$t,Ct.width,Ct.height,0,Gt,jt,null));else if(T.isDataTexture)if(ce.length>0){re&&Oe&&n.texStorage2D(i.TEXTURE_2D,Bt,$t,ce[0].width,ce[0].height);for(let pt=0,Et=ce.length;pt<Et;pt++)Pt=ce[pt],re?Y&&n.texSubImage2D(i.TEXTURE_2D,pt,0,0,Pt.width,Pt.height,Gt,jt,Pt.data):n.texImage2D(i.TEXTURE_2D,pt,$t,Pt.width,Pt.height,0,Gt,jt,Pt.data);T.generateMipmaps=!1}else re?(Oe&&n.texStorage2D(i.TEXTURE_2D,Bt,$t,Ct.width,Ct.height),Y&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct.width,Ct.height,Gt,jt,Ct.data)):n.texImage2D(i.TEXTURE_2D,0,$t,Ct.width,Ct.height,0,Gt,jt,Ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){re&&Oe&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,$t,ce[0].width,ce[0].height,Ct.depth);for(let pt=0,Et=ce.length;pt<Et;pt++)if(Pt=ce[pt],T.format!==Ti)if(Gt!==null)if(re){if(Y)if(T.layerUpdates.size>0){const Vt=tx(Pt.width,Pt.height,T.format,T.type);for(const It of T.layerUpdates){const le=Pt.data.subarray(It*Vt/Pt.data.BYTES_PER_ELEMENT,(It+1)*Vt/Pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,It,Pt.width,Pt.height,1,Gt,le)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Pt.width,Pt.height,Ct.depth,Gt,Pt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,$t,Pt.width,Pt.height,Ct.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Y&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Pt.width,Pt.height,Ct.depth,Gt,jt,Pt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,pt,$t,Pt.width,Pt.height,Ct.depth,0,Gt,jt,Pt.data)}else{re&&Oe&&n.texStorage2D(i.TEXTURE_2D,Bt,$t,ce[0].width,ce[0].height);for(let pt=0,Et=ce.length;pt<Et;pt++)Pt=ce[pt],T.format!==Ti?Gt!==null?re?Y&&n.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Pt.width,Pt.height,Gt,Pt.data):n.compressedTexImage2D(i.TEXTURE_2D,pt,$t,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Y&&n.texSubImage2D(i.TEXTURE_2D,pt,0,0,Pt.width,Pt.height,Gt,jt,Pt.data):n.texImage2D(i.TEXTURE_2D,pt,$t,Pt.width,Pt.height,0,Gt,jt,Pt.data)}else if(T.isDataArrayTexture)if(re){if(Oe&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,$t,Ct.width,Ct.height,Ct.depth),Y)if(T.layerUpdates.size>0){const pt=tx(Ct.width,Ct.height,T.format,T.type);for(const Et of T.layerUpdates){const Vt=Ct.data.subarray(Et*pt/Ct.data.BYTES_PER_ELEMENT,(Et+1)*pt/Ct.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,Ct.width,Ct.height,1,Gt,jt,Vt)}T.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,jt,Ct.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,Ct.width,Ct.height,Ct.depth,0,Gt,jt,Ct.data);else if(T.isData3DTexture)re?(Oe&&n.texStorage3D(i.TEXTURE_3D,Bt,$t,Ct.width,Ct.height,Ct.depth),Y&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,jt,Ct.data)):n.texImage3D(i.TEXTURE_3D,0,$t,Ct.width,Ct.height,Ct.depth,0,Gt,jt,Ct.data);else if(T.isFramebufferTexture){if(Oe)if(re)n.texStorage2D(i.TEXTURE_2D,Bt,$t,Ct.width,Ct.height);else{let pt=Ct.width,Et=Ct.height;for(let Vt=0;Vt<Bt;Vt++)n.texImage2D(i.TEXTURE_2D,Vt,$t,pt,Et,0,Gt,jt,null),pt>>=1,Et>>=1}}else if(ce.length>0){if(re&&Oe){const pt=Ot(ce[0]);n.texStorage2D(i.TEXTURE_2D,Bt,$t,pt.width,pt.height)}for(let pt=0,Et=ce.length;pt<Et;pt++)Pt=ce[pt],re?Y&&n.texSubImage2D(i.TEXTURE_2D,pt,0,0,Gt,jt,Pt):n.texImage2D(i.TEXTURE_2D,pt,$t,Gt,jt,Pt);T.generateMipmaps=!1}else if(re){if(Oe){const pt=Ot(Ct);n.texStorage2D(i.TEXTURE_2D,Bt,$t,pt.width,pt.height)}Y&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,jt,Ct)}else n.texImage2D(i.TEXTURE_2D,0,$t,Gt,jt,Ct);S(T)&&y(St),Lt.__version=st.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function nt(N,T,tt){if(T.image.length!==6)return;const St=$(N,T),wt=T.source;n.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+tt);const st=r.get(wt);if(wt.version!==st.__version||St===!0){n.activeTexture(i.TEXTURE0+tt);const Lt=Ue.getPrimaries(Ue.workingColorSpace),Ut=T.colorSpace===nr?null:Ue.getPrimaries(T.colorSpace),Nt=T.colorSpace===nr||Lt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const ue=T.isCompressedTexture||T.image[0].isCompressedTexture,Ct=T.image[0]&&T.image[0].isDataTexture,Gt=[];for(let Et=0;Et<6;Et++)!ue&&!Ct?Gt[Et]=b(T.image[Et],!0,o.maxCubemapSize):Gt[Et]=Ct?T.image[Et].image:T.image[Et],Gt[Et]=ge(T,Gt[Et]);const jt=Gt[0],$t=u.convert(T.format,T.colorSpace),Pt=u.convert(T.type),ce=D(T.internalFormat,$t,Pt,T.colorSpace),re=T.isVideoTexture!==!0,Oe=st.__version===void 0||St===!0,Y=wt.dataReady;let Bt=z(T,jt);mt(i.TEXTURE_CUBE_MAP,T);let pt;if(ue){re&&Oe&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,ce,jt.width,jt.height);for(let Et=0;Et<6;Et++){pt=Gt[Et].mipmaps;for(let Vt=0;Vt<pt.length;Vt++){const It=pt[Vt];T.format!==Ti?$t!==null?re?Y&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Vt,0,0,It.width,It.height,$t,It.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Vt,ce,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?Y&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Vt,0,0,It.width,It.height,$t,Pt,It.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Vt,ce,It.width,It.height,0,$t,Pt,It.data)}}}else{if(pt=T.mipmaps,re&&Oe){pt.length>0&&Bt++;const Et=Ot(Gt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,ce,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Ct){re?Y&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Gt[Et].width,Gt[Et].height,$t,Pt,Gt[Et].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ce,Gt[Et].width,Gt[Et].height,0,$t,Pt,Gt[Et].data);for(let Vt=0;Vt<pt.length;Vt++){const le=pt[Vt].image[Et].image;re?Y&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Vt+1,0,0,le.width,le.height,$t,Pt,le.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Vt+1,ce,le.width,le.height,0,$t,Pt,le.data)}}else{re?Y&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,$t,Pt,Gt[Et]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ce,$t,Pt,Gt[Et]);for(let Vt=0;Vt<pt.length;Vt++){const It=pt[Vt];re?Y&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Vt+1,0,0,$t,Pt,It.image[Et]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Vt+1,ce,$t,Pt,It.image[Et])}}}S(T)&&y(i.TEXTURE_CUBE_MAP),st.__version=wt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ft(N,T,tt,St,wt,st){const Lt=u.convert(tt.format,tt.colorSpace),Ut=u.convert(tt.type),Nt=D(tt.internalFormat,Lt,Ut,tt.colorSpace),ue=r.get(T),Ct=r.get(tt);if(Ct.__renderTarget=T,!ue.__hasExternalTextures){const Gt=Math.max(1,T.width>>st),jt=Math.max(1,T.height>>st);wt===i.TEXTURE_3D||wt===i.TEXTURE_2D_ARRAY?n.texImage3D(wt,st,Nt,Gt,jt,T.depth,0,Lt,Ut,null):n.texImage2D(wt,st,Nt,Gt,jt,0,Lt,Ut,null)}n.bindFramebuffer(i.FRAMEBUFFER,N),Zt(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,wt,Ct.__webglTexture,0,te(T)):(wt===i.TEXTURE_2D||wt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,St,wt,Ct.__webglTexture,st),n.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(N,T,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){const St=T.depthTexture,wt=St&&St.isDepthTexture?St.type:null,st=w(T.stencilBuffer,wt),Lt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=te(T);Zt(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,st,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,st,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,st,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,N)}else{const St=T.textures;for(let wt=0;wt<St.length;wt++){const st=St[wt],Lt=u.convert(st.format,st.colorSpace),Ut=u.convert(st.type),Nt=D(st.internalFormat,Lt,Ut,st.colorSpace),ue=te(T);tt&&Zt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Nt,T.width,T.height):Zt(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Nt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=r.get(T.depthTexture);St.__renderTarget=T,(!St.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),xt(T.depthTexture,0);const wt=St.__webglTexture,st=te(T);if(T.depthTexture.format===Cl)Zt(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,wt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,wt,0);else if(T.depthTexture.format===Dl)Zt(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,wt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,wt,0);else throw new Error("Unknown depthTexture format")}function _t(N){const T=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const St=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),St){const wt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,St.removeEventListener("dispose",wt)};St.addEventListener("dispose",wt),T.__depthDisposeCallback=wt}T.__boundDepthTexture=St}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Rt(T.__webglFramebuffer,N)}else if(tt){T.__webglDepthbuffer=[];for(let St=0;St<6;St++)if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[St]),T.__webglDepthbuffer[St]===void 0)T.__webglDepthbuffer[St]=i.createRenderbuffer(),gt(T.__webglDepthbuffer[St],N,!1);else{const wt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=T.__webglDepthbuffer[St];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,st)}}else if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),gt(T.__webglDepthbuffer,N,!1);else{const St=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,wt)}n.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(N,T,tt){const St=r.get(N);T!==void 0&&ft(St.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&_t(N)}function kt(N){const T=N.texture,tt=r.get(N),St=r.get(T);N.addEventListener("dispose",B);const wt=N.textures,st=N.isWebGLCubeRenderTarget===!0,Lt=wt.length>1;if(Lt||(St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture()),St.__version=T.version,c.memory.textures++),st){tt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ut]=[];for(let Nt=0;Nt<T.mipmaps.length;Nt++)tt.__webglFramebuffer[Ut][Nt]=i.createFramebuffer()}else tt.__webglFramebuffer[Ut]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)tt.__webglFramebuffer[Ut]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let Ut=0,Nt=wt.length;Ut<Nt;Ut++){const ue=r.get(wt[Ut]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),c.memory.textures++)}if(N.samples>0&&Zt(N)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<wt.length;Ut++){const Nt=wt[Ut];tt.__webglColorRenderbuffer[Ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut]);const ue=u.convert(Nt.format,Nt.colorSpace),Ct=u.convert(Nt.type),Gt=D(Nt.internalFormat,ue,Ct,Nt.colorSpace,N.isXRRenderTarget===!0),jt=te(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Gt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(tt.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){n.bindTexture(i.TEXTURE_CUBE_MAP,St.__webglTexture),mt(i.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let Nt=0;Nt<T.mipmaps.length;Nt++)ft(tt.__webglFramebuffer[Ut][Nt],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Nt);else ft(tt.__webglFramebuffer[Ut],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(T)&&y(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Lt){for(let Ut=0,Nt=wt.length;Ut<Nt;Ut++){const ue=wt[Ut],Ct=r.get(ue);n.bindTexture(i.TEXTURE_2D,Ct.__webglTexture),mt(i.TEXTURE_2D,ue),ft(tt.__webglFramebuffer,N,ue,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,0),S(ue)&&y(i.TEXTURE_2D)}n.unbindTexture()}else{let Ut=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Ut,St.__webglTexture),mt(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let Nt=0;Nt<T.mipmaps.length;Nt++)ft(tt.__webglFramebuffer[Nt],N,T,i.COLOR_ATTACHMENT0,Ut,Nt);else ft(tt.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,Ut,0);S(T)&&y(Ut),n.unbindTexture()}N.depthBuffer&&_t(N)}function dt(N){const T=N.textures;for(let tt=0,St=T.length;tt<St;tt++){const wt=T[tt];if(S(wt)){const st=P(N),Lt=r.get(wt).__webglTexture;n.bindTexture(st,Lt),y(st),n.unbindTexture()}}}const Kt=[],H=[];function Te(N){if(N.samples>0){if(Zt(N)===!1){const T=N.textures,tt=N.width,St=N.height;let wt=i.COLOR_BUFFER_BIT;const st=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=r.get(N),Ut=T.length>1;if(Ut)for(let Nt=0;Nt<T.length;Nt++)n.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Nt=0;Nt<T.length;Nt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(wt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(wt|=i.STENCIL_BUFFER_BIT)),Ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Nt]);const ue=r.get(T[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,tt,St,0,0,tt,St,wt,i.NEAREST),p===!0&&(Kt.length=0,H.length=0,Kt.push(i.COLOR_ATTACHMENT0+Nt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Kt.push(st),H.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Kt))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ut)for(let Nt=0;Nt<T.length;Nt++){n.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Nt]);const ue=r.get(T[Nt]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,ue,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function te(N){return Math.min(o.maxSamples,N.samples)}function Zt(N){const T=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(N){const T=c.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function ge(N,T){const tt=N.colorSpace,St=N.format,wt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==no&&tt!==nr&&(Ue.getTransfer(tt)===Ge?(St!==Ti||wt!==xa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Ot(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=rt,this.setTexture2D=xt,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=bt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Zt}function ZR(i,t){function n(r,o=nr){let u;const c=Ue.getTransfer(o);if(r===xa)return i.UNSIGNED_BYTE;if(r===vm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===xm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===vy)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===gy)return i.BYTE;if(r===_y)return i.SHORT;if(r===wl)return i.UNSIGNED_SHORT;if(r===_m)return i.INT;if(r===Vr)return i.UNSIGNED_INT;if(r===pa)return i.FLOAT;if(r===Ol)return i.HALF_FLOAT;if(r===xy)return i.ALPHA;if(r===yy)return i.RGB;if(r===Ti)return i.RGBA;if(r===Sy)return i.LUMINANCE;if(r===My)return i.LUMINANCE_ALPHA;if(r===Cl)return i.DEPTH_COMPONENT;if(r===Dl)return i.DEPTH_STENCIL;if(r===Ey)return i.RED;if(r===ym)return i.RED_INTEGER;if(r===by)return i.RG;if(r===Sm)return i.RG_INTEGER;if(r===Mm)return i.RGBA_INTEGER;if(r===wc||r===Rc||r===Cc||r===Dc)if(c===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wp||r===Rp||r===Cp||r===Dp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===wp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Up||r===Np||r===Lp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Up||r===Np)return c===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Lp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Op||r===Pp||r===zp||r===Bp||r===Ip||r===Fp||r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===Yp||r===qp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Op)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ip)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uc||r===jp||r===Zp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Uc)return c===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ty||r===Kp||r===Qp||r===$p)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Kp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$p)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rl?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:n}}const KR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QR=`
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

}`;class $R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const o=new Bn,u=t.properties.get(o);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new or({vertexShader:KR,fragmentShader:QR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ii(new uf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JR extends ho{constructor(t,n){super();const r=this;let o=null,u=1,c=null,h="local-floor",p=1,d=null,g=null,v=null,_=null,x=null,E=null;const b=new $R,S=n.getContextAttributes();let y=null,P=null;const D=[],w=[],z=new Se;let O=null;const B=new ni;B.viewport=new nn;const W=new ni;W.viewport=new nn;const U=[B,W],R=new yT;let I=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let nt=D[k];return nt===void 0&&(nt=new Wd,D[k]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(k){let nt=D[k];return nt===void 0&&(nt=new Wd,D[k]=nt),nt.getGripSpace()},this.getHand=function(k){let nt=D[k];return nt===void 0&&(nt=new Wd,D[k]=nt),nt.getHandSpace()};function J(k){const nt=w.indexOf(k.inputSource);if(nt===-1)return;const ft=D[nt];ft!==void 0&&(ft.update(k.inputSource,k.frame,d||c),ft.dispatchEvent({type:k.type,data:k.inputSource}))}function vt(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",vt),o.removeEventListener("inputsourceschange",xt);for(let k=0;k<D.length;k++){const nt=w[k];nt!==null&&(w[k]=null,D[k].disconnect(nt))}I=null,rt=null,b.reset(),t.setRenderTarget(y),x=null,_=null,v=null,o=null,P=null,$.stop(),r.isPresenting=!1,t.setPixelRatio(O),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){u=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){h=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(k){d=k},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(k){if(o=k,o!==null){if(y=t.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",vt),o.addEventListener("inputsourceschange",xt),S.xrCompatible!==!0&&await n.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,gt=null,Rt=null;S.depth&&(Rt=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ft=S.stencil?Dl:Cl,gt=S.stencil?Rl:Vr);const _t={colorFormat:n.RGBA8,depthFormat:Rt,scaleFactor:u};v=new XRWebGLBinding(o,n),_=v.createProjectionLayer(_t),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),P=new kr(_.textureWidth,_.textureHeight,{format:Ti,type:xa,depthTexture:new Hy(_.textureWidth,_.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(o,n,ft),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new kr(x.framebufferWidth,x.framebufferHeight,{format:Ti,type:xa,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(h),$.setContext(o),$.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function xt(k){for(let nt=0;nt<k.removed.length;nt++){const ft=k.removed[nt],gt=w.indexOf(ft);gt>=0&&(w[gt]=null,D[gt].disconnect(ft))}for(let nt=0;nt<k.added.length;nt++){const ft=k.added[nt];let gt=w.indexOf(ft);if(gt===-1){for(let _t=0;_t<D.length;_t++)if(_t>=w.length){w.push(ft),gt=_t;break}else if(w[_t]===null){w[_t]=ft,gt=_t;break}if(gt===-1)break}const Rt=D[gt];Rt&&Rt.connect(ft)}}const F=new it,j=new it;function q(k,nt,ft){F.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(ft.matrixWorld);const gt=F.distanceTo(j),Rt=nt.projectionMatrix.elements,_t=ft.projectionMatrix.elements,bt=Rt[14]/(Rt[10]-1),kt=Rt[14]/(Rt[10]+1),dt=(Rt[9]+1)/Rt[5],Kt=(Rt[9]-1)/Rt[5],H=(Rt[8]-1)/Rt[0],Te=(_t[8]+1)/_t[0],te=bt*H,Zt=bt*Te,Xt=gt/(-H+Te),ge=Xt*-H;if(nt.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ge),k.translateZ(Xt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Rt[10]===-1)k.projectionMatrix.copy(nt.projectionMatrix),k.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Ot=bt+Xt,N=kt+Xt,T=te-ge,tt=Zt+(gt-ge),St=dt*kt/N*Ot,wt=Kt*kt/N*Ot;k.projectionMatrix.makePerspective(T,tt,St,wt,Ot,N),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Tt(k,nt){nt===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(nt.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(o===null)return;let nt=k.near,ft=k.far;b.texture!==null&&(b.depthNear>0&&(nt=b.depthNear),b.depthFar>0&&(ft=b.depthFar)),R.near=W.near=B.near=nt,R.far=W.far=B.far=ft,(I!==R.near||rt!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,rt=R.far),B.layers.mask=k.layers.mask|2,W.layers.mask=k.layers.mask|4,R.layers.mask=B.layers.mask|W.layers.mask;const gt=k.parent,Rt=R.cameras;Tt(R,gt);for(let _t=0;_t<Rt.length;_t++)Tt(Rt[_t],gt);Rt.length===2?q(R,B,W):R.projectionMatrix.copy(B.projectionMatrix),L(k,R,gt)};function L(k,nt,ft){ft===null?k.matrix.copy(nt.matrixWorld):(k.matrix.copy(ft.matrixWorld),k.matrix.invert(),k.matrix.multiply(nt.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(nt.projectionMatrix),k.projectionMatrixInverse.copy(nt.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=tm*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(k){p=k,_!==null&&(_.fixedFoveation=k),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=k)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let V=null;function mt(k,nt){if(g=nt.getViewerPose(d||c),E=nt,g!==null){const ft=g.views;x!==null&&(t.setRenderTargetFramebuffer(P,x.framebuffer),t.setRenderTarget(P));let gt=!1;ft.length!==R.cameras.length&&(R.cameras.length=0,gt=!0);for(let bt=0;bt<ft.length;bt++){const kt=ft[bt];let dt=null;if(x!==null)dt=x.getViewport(kt);else{const H=v.getViewSubImage(_,kt);dt=H.viewport,bt===0&&(t.setRenderTargetTextures(P,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(P))}let Kt=U[bt];Kt===void 0&&(Kt=new ni,Kt.layers.enable(bt),Kt.viewport=new nn,U[bt]=Kt),Kt.matrix.fromArray(kt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(kt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(dt.x,dt.y,dt.width,dt.height),bt===0&&(R.matrix.copy(Kt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),gt===!0&&R.cameras.push(Kt)}const Rt=o.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const bt=v.getDepthInformation(ft[0]);bt&&bt.isValid&&bt.texture&&b.init(t,bt,o.renderState)}}for(let ft=0;ft<D.length;ft++){const gt=w[ft],Rt=D[ft];gt!==null&&Rt!==void 0&&Rt.update(gt,nt,d||c)}V&&V(k,nt),nt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:nt}),E=null}const $=new Vy;$.setAnimationLoop(mt),this.setAnimationLoop=function(k){V=k},this.dispose=function(){}}}const Nr=new ya,t2=new Ke;function e2(i,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Ny(i)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,P,D,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(S,y):y.isMeshToonMaterial?(u(S,y),v(S,y)):y.isMeshPhongMaterial?(u(S,y),g(S,y)):y.isMeshStandardMaterial?(u(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(u(S,y),E(S,y)):y.isMeshDepthMaterial?u(S,y):y.isMeshDistanceMaterial?(u(S,y),b(S,y)):y.isMeshNormalMaterial?u(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,P,D):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Wn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Wn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const P=t.get(y),D=P.envMap,w=P.envMapRotation;D&&(S.envMap.value=D,Nr.copy(w),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),S.envMapRotation.value.setFromMatrix4(t2.makeRotationFromEuler(Nr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,P,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*P,S.scale.value=D*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,P){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Wn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function b(S,y){const P=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function n2(i,t,n,r){let o={},u={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,D){const w=D.program;r.uniformBlockBinding(P,w)}function d(P,D){let w=o[P.id];w===void 0&&(E(P),w=g(P),o[P.id]=w,P.addEventListener("dispose",S));const z=D.program;r.updateUBOMapping(P,z);const O=t.render.frame;u[P.id]!==O&&(_(P),u[P.id]=O)}function g(P){const D=v();P.__bindingPointIndex=D;const w=i.createBuffer(),z=P.__size,O=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,z,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,w),w}function v(){for(let P=0;P<h;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const D=o[P.id],w=P.uniforms,z=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let O=0,B=w.length;O<B;O++){const W=Array.isArray(w[O])?w[O]:[w[O]];for(let U=0,R=W.length;U<R;U++){const I=W[U];if(x(I,O,U,z)===!0){const rt=I.__offset,J=Array.isArray(I.value)?I.value:[I.value];let vt=0;for(let xt=0;xt<J.length;xt++){const F=J[xt],j=b(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,rt+vt,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):(F.toArray(I.__data,vt),vt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(P,D,w,z){const O=P.value,B=D+"_"+w;if(z[B]===void 0)return typeof O=="number"||typeof O=="boolean"?z[B]=O:z[B]=O.clone(),!0;{const W=z[B];if(typeof O=="number"||typeof O=="boolean"){if(W!==O)return z[B]=O,!0}else if(W.equals(O)===!1)return W.copy(O),!0}return!1}function E(P){const D=P.uniforms;let w=0;const z=16;for(let B=0,W=D.length;B<W;B++){const U=Array.isArray(D[B])?D[B]:[D[B]];for(let R=0,I=U.length;R<I;R++){const rt=U[R],J=Array.isArray(rt.value)?rt.value:[rt.value];for(let vt=0,xt=J.length;vt<xt;vt++){const F=J[vt],j=b(F),q=w%z,Tt=q%j.boundary,L=q+Tt;w+=Tt,L!==0&&z-L<j.storage&&(w+=z-L),rt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=w,w+=j.storage}}}const O=w%z;return O>0&&(w+=z-O),P.__size=w,P.__cache={},this}function b(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function S(P){const D=P.target;D.removeEventListener("dispose",S);const w=c.indexOf(D.__bindingPointIndex);c.splice(w,1),i.deleteBuffer(o[D.id]),delete o[D.id],delete u[D.id]}function y(){for(const P in o)i.deleteBuffer(o[P]);c=[],o={},u={}}return{bind:p,update:d,dispose:y}}class qy{constructor(t={}){const{canvas:n=Hb(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,y=null;const P=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let z=!1;this._outputColorSpace=di;let O=0,B=0,W=null,U=-1,R=null;const I=new nn,rt=new nn;let J=null;const vt=new ye(0);let xt=0,F=n.width,j=n.height,q=1,Tt=null,L=null;const V=new nn(0,0,F,j),mt=new nn(0,0,F,j);let $=!1;const k=new Iy;let nt=!1,ft=!1;const gt=new Ke,Rt=new Ke,_t=new it,bt=new nn,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Kt(){return W===null?q:1}let H=r;function Te(C,K){return n.getContext(C,K)}try{const C={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gm}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",Vt,!1),n.addEventListener("webglcontextcreationerror",It,!1),H===null){const K="webgl2";if(H=Te(K,C),H===null)throw Te(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let te,Zt,Xt,ge,Ot,N,T,tt,St,wt,st,Lt,Ut,Nt,ue,Ct,Gt,jt,$t,Pt,ce,re,Oe,Y;function Bt(){te=new dw(H),te.init(),re=new ZR(H,te),Zt=new sw(H,te,t,re),Xt=new qR(H,te),Zt.reverseDepthBuffer&&_&&Xt.buffers.depth.setReversed(!0),ge=new gw(H),Ot=new OR,N=new jR(H,te,Xt,Ot,Zt,re,ge),T=new lw(w),tt=new hw(w),St=new MT(H),Oe=new aw(H,St),wt=new pw(H,St,ge,Oe),st=new vw(H,wt,St,ge),$t=new _w(H,Zt,N),Ct=new ow(Ot),Lt=new LR(w,T,tt,te,Zt,Oe,Ct),Ut=new e2(w,Ot),Nt=new zR,ue=new VR(te),jt=new iw(w,T,tt,Xt,st,x,p),Gt=new WR(w,st,Zt),Y=new n2(H,ge,Zt,Xt),Pt=new rw(H,te,ge),ce=new mw(H,te,ge),ge.programs=Lt.programs,w.capabilities=Zt,w.extensions=te,w.properties=Ot,w.renderLists=Nt,w.shadowMap=Gt,w.state=Xt,w.info=ge}Bt();const pt=new JR(w,H);this.xr=pt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(F,j,!1))},this.getSize=function(C){return C.set(F,j)},this.setSize=function(C,K,ut=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,j=K,n.width=Math.floor(C*q),n.height=Math.floor(K*q),ut===!0&&(n.style.width=C+"px",n.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(F*q,j*q).floor()},this.setDrawingBufferSize=function(C,K,ut){F=C,j=K,q=ut,n.width=Math.floor(C*ut),n.height=Math.floor(K*ut),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,K,ut,ct){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,K,ut,ct),Xt.viewport(I.copy(V).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(mt)},this.setScissor=function(C,K,ut,ct){C.isVector4?mt.set(C.x,C.y,C.z,C.w):mt.set(C,K,ut,ct),Xt.scissor(rt.copy(mt).multiplyScalar(q).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){Xt.setScissorTest($=C)},this.setOpaqueSort=function(C){Tt=C},this.setTransparentSort=function(C){L=C},this.getClearColor=function(C){return C.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ut=!0){let ct=0;if(C){let Q=!1;if(W!==null){const Dt=W.texture.format;Q=Dt===Mm||Dt===Sm||Dt===ym}if(Q){const Dt=W.texture.type,zt=Dt===xa||Dt===Vr||Dt===wl||Dt===Rl||Dt===vm||Dt===xm,Ft=jt.getClearColor(),Wt=jt.getClearAlpha(),se=Ft.r,ee=Ft.g,Jt=Ft.b;zt?(E[0]=se,E[1]=ee,E[2]=Jt,E[3]=Wt,H.clearBufferuiv(H.COLOR,0,E)):(b[0]=se,b[1]=ee,b[2]=Jt,b[3]=Wt,H.clearBufferiv(H.COLOR,0,b))}else ct|=H.COLOR_BUFFER_BIT}K&&(ct|=H.DEPTH_BUFFER_BIT),ut&&(ct|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Vt,!1),n.removeEventListener("webglcontextcreationerror",It,!1),jt.dispose(),Nt.dispose(),ue.dispose(),Ot.dispose(),T.dispose(),tt.dispose(),st.dispose(),Oe.dispose(),Y.dispose(),Lt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",un),pt.removeEventListener("sessionend",En),Fn.stop()};function Et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const C=ge.autoReset,K=Gt.enabled,ut=Gt.autoUpdate,ct=Gt.needsUpdate,Q=Gt.type;Bt(),ge.autoReset=C,Gt.enabled=K,Gt.autoUpdate=ut,Gt.needsUpdate=ct,Gt.type=Q}function It(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const K=C.target;K.removeEventListener("dispose",le),Pe(K)}function Pe(C){an(C),Ot.remove(C)}function an(C){const K=Ot.get(C).programs;K!==void 0&&(K.forEach(function(ut){Lt.releaseProgram(ut)}),C.isShaderMaterial&&Lt.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ut,ct,Q,Dt){K===null&&(K=kt);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,Ft=cr(C,K,ut,ct,Q);Xt.setMaterial(ct,zt);let Wt=ut.index,se=1;if(ct.wireframe===!0){if(Wt=wt.getWireframeAttribute(ut),Wt===void 0)return;se=2}const ee=ut.drawRange,Jt=ut.attributes.position;let _e=ee.start*se,Ce=(ee.start+ee.count)*se;Dt!==null&&(_e=Math.max(_e,Dt.start*se),Ce=Math.min(Ce,(Dt.start+Dt.count)*se)),Wt!==null?(_e=Math.max(_e,0),Ce=Math.min(Ce,Wt.count)):Jt!=null&&(_e=Math.max(_e,0),Ce=Math.min(Ce,Jt.count));const je=Ce-_e;if(je<0||je===1/0)return;Oe.setup(Q,ct,Ft,ut,Wt);let Me,Ee=Pt;if(Wt!==null&&(Me=St.get(Wt),Ee=ce,Ee.setIndex(Me)),Q.isMesh)ct.wireframe===!0?(Xt.setLineWidth(ct.wireframeLinewidth*Kt()),Ee.setMode(H.LINES)):Ee.setMode(H.TRIANGLES);else if(Q.isLine){let ne=ct.linewidth;ne===void 0&&(ne=1),Xt.setLineWidth(ne*Kt()),Q.isLineSegments?Ee.setMode(H.LINES):Q.isLineLoop?Ee.setMode(H.LINE_LOOP):Ee.setMode(H.LINE_STRIP)}else Q.isPoints?Ee.setMode(H.POINTS):Q.isSprite&&Ee.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Nc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ee.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Ee.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ne=Q._multiDrawStarts,Qe=Q._multiDrawCounts,we=Q._multiDrawCount,Rn=Wt?St.get(Wt).bytesPerElement:1,wa=Ot.get(ct).currentProgram.getUniforms();for(let We=0;We<we;We++)wa.setValue(H,"_gl_DrawID",We),Ee.render(ne[We]/Rn,Qe[We])}else if(Q.isInstancedMesh)Ee.renderInstances(_e,je,Q.count);else if(ut.isInstancedBufferGeometry){const ne=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Qe=Math.min(ut.instanceCount,ne);Ee.renderInstances(_e,je,Qe)}else Ee.render(_e,je)};function Re(C,K,ut){C.transparent===!0&&C.side===da&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Ta(C,K,ut),C.side=sr,C.needsUpdate=!0,Ta(C,K,ut),C.side=da):Ta(C,K,ut)}this.compile=function(C,K,ut=null){ut===null&&(ut=C),y=ue.get(ut),y.init(K),D.push(y),ut.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),C!==ut&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const ct=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Dt=Q.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const Ft=Dt[zt];Re(Ft,ut,Q),ct.add(Ft)}else Re(Dt,ut,Q),ct.add(Dt)}),y=D.pop(),ct},this.compileAsync=function(C,K,ut=null){const ct=this.compile(C,K,ut);return new Promise(Q=>{function Dt(){if(ct.forEach(function(zt){Ot.get(zt).currentProgram.isReady()&&ct.delete(zt)}),ct.size===0){Q(C);return}setTimeout(Dt,10)}te.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Yn=null;function gn(C){Yn&&Yn(C)}function un(){Fn.stop()}function En(){Fn.start()}const Fn=new Vy;Fn.setAnimationLoop(gn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(C){Yn=C,pt.setAnimationLoop(C),C===null?Fn.stop():Fn.start()},pt.addEventListener("sessionstart",un),pt.addEventListener("sessionend",En),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(K),K=pt.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,K,W),y=ue.get(C,D.length),y.init(K),D.push(y),Rt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k.setFromProjectionMatrix(Rt),ft=this.localClippingEnabled,nt=Ct.init(this.clippingPlanes,ft),S=Nt.get(C,P.length),S.init(),P.push(S),pt.enabled===!0&&pt.isPresenting===!0){const Dt=w.xr.getDepthSensingMesh();Dt!==null&&lr(Dt,K,-1/0,w.sortObjects)}lr(C,K,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Tt,L),dt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,dt&&jt.addToRenderList(S,C),this.info.render.frame++,nt===!0&&Ct.beginShadows();const ut=y.state.shadowsArray;Gt.render(ut,C,K),nt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=S.opaque,Q=S.transmissive;if(y.setupLights(),K.isArrayCamera){const Dt=K.cameras;if(Q.length>0)for(let zt=0,Ft=Dt.length;zt<Ft;zt++){const Wt=Dt[zt];Vl(ct,Q,C,Wt)}dt&&jt.render(C);for(let zt=0,Ft=Dt.length;zt<Ft;zt++){const Wt=Dt[zt];Gl(S,C,Wt,Wt.viewport)}}else Q.length>0&&Vl(ct,Q,C,K),dt&&jt.render(C),Gl(S,C,K);W!==null&&B===0&&(N.updateMultisampleRenderTarget(W),N.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(w,C,K),Oe.resetDefaultState(),U=-1,R=null,D.pop(),D.length>0?(y=D[D.length-1],nt===!0&&Ct.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function lr(C,K,ut,ct){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ut=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||k.intersectsSprite(C)){ct&&bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Rt);const zt=st.update(C),Ft=C.material;Ft.visible&&S.push(C,zt,Ft,ut,bt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||k.intersectsObject(C))){const zt=st.update(C),Ft=C.material;if(ct&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),bt.copy(C.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),bt.copy(zt.boundingSphere.center)),bt.applyMatrix4(C.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ft)){const Wt=zt.groups;for(let se=0,ee=Wt.length;se<ee;se++){const Jt=Wt[se],_e=Ft[Jt.materialIndex];_e&&_e.visible&&S.push(C,zt,_e,ut,bt.z,Jt)}}else Ft.visible&&S.push(C,zt,Ft,ut,bt.z,null)}}const Dt=C.children;for(let zt=0,Ft=Dt.length;zt<Ft;zt++)lr(Dt[zt],K,ut,ct)}function Gl(C,K,ut,ct){const Q=C.opaque,Dt=C.transmissive,zt=C.transparent;y.setupLightsView(ut),nt===!0&&Ct.setGlobalState(w.clippingPlanes,ut),ct&&Xt.viewport(I.copy(ct)),Q.length>0&&ur(Q,K,ut),Dt.length>0&&ur(Dt,K,ut),zt.length>0&&ur(zt,K,ut),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Vl(C,K,ut,ct){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ct.id]===void 0&&(y.state.transmissionRenderTarget[ct.id]=new kr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ol:xa,minFilter:Fr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Dt=y.state.transmissionRenderTarget[ct.id],zt=ct.viewport||I;Dt.setSize(zt.z*w.transmissionResolutionScale,zt.w*w.transmissionResolutionScale);const Ft=w.getRenderTarget();w.setRenderTarget(Dt),w.getClearColor(vt),xt=w.getClearAlpha(),xt<1&&w.setClearColor(16777215,.5),w.clear(),dt&&jt.render(ut);const Wt=w.toneMapping;w.toneMapping=ar;const se=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),y.setupLightsView(ct),nt===!0&&Ct.setGlobalState(w.clippingPlanes,ct),ur(C,ut,ct),N.updateMultisampleRenderTarget(Dt),N.updateRenderTargetMipmap(Dt),te.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Jt=0,_e=K.length;Jt<_e;Jt++){const Ce=K[Jt],je=Ce.object,Me=Ce.geometry,Ee=Ce.material,ne=Ce.group;if(Ee.side===da&&je.layers.test(ct.layers)){const Qe=Ee.side;Ee.side=Wn,Ee.needsUpdate=!0,ba(je,ut,ct,Me,Ee,ne),Ee.side=Qe,Ee.needsUpdate=!0,ee=!0}}ee===!0&&(N.updateMultisampleRenderTarget(Dt),N.updateRenderTargetMipmap(Dt))}w.setRenderTarget(Ft),w.setClearColor(vt,xt),se!==void 0&&(ct.viewport=se),w.toneMapping=Wt}function ur(C,K,ut){const ct=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Dt=C.length;Q<Dt;Q++){const zt=C[Q],Ft=zt.object,Wt=zt.geometry,se=zt.group;let ee=zt.material;ee.allowOverride===!0&&ct!==null&&(ee=ct),Ft.layers.test(ut.layers)&&ba(Ft,K,ut,Wt,ee,se)}}function ba(C,K,ut,ct,Q,Dt){C.onBeforeRender(w,K,ut,ct,Q,Dt),C.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(w,K,ut,ct,C,Dt),Q.transparent===!0&&Q.side===da&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,w.renderBufferDirect(ut,K,ct,Q,C,Dt),Q.side=sr,Q.needsUpdate=!0,w.renderBufferDirect(ut,K,ct,Q,C,Dt),Q.side=da):w.renderBufferDirect(ut,K,ct,Q,C,Dt),C.onAfterRender(w,K,ut,ct,Q,Dt)}function Ta(C,K,ut){K.isScene!==!0&&(K=kt);const ct=Ot.get(C),Q=y.state.lights,Dt=y.state.shadowsArray,zt=Q.state.version,Ft=Lt.getParameters(C,Q.state,Dt,K,ut),Wt=Lt.getProgramCacheKey(Ft);let se=ct.programs;ct.environment=C.isMeshStandardMaterial?K.environment:null,ct.fog=K.fog,ct.envMap=(C.isMeshStandardMaterial?tt:T).get(C.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,se===void 0&&(C.addEventListener("dispose",le),se=new Map,ct.programs=se);let ee=se.get(Wt);if(ee!==void 0){if(ct.currentProgram===ee&&ct.lightsStateVersion===zt)return Vi(C,Ft),ee}else Ft.uniforms=Lt.getUniforms(C),C.onBeforeCompile(Ft,w),ee=Lt.acquireProgram(Ft,Wt),se.set(Wt,ee),ct.uniforms=Ft.uniforms;const Jt=ct.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=Ct.uniform),Vi(C,Ft),ct.needsLights=rn(C),ct.lightsStateVersion=zt,ct.needsLights&&(Jt.ambientLightColor.value=Q.state.ambient,Jt.lightProbe.value=Q.state.probe,Jt.directionalLights.value=Q.state.directional,Jt.directionalLightShadows.value=Q.state.directionalShadow,Jt.spotLights.value=Q.state.spot,Jt.spotLightShadows.value=Q.state.spotShadow,Jt.rectAreaLights.value=Q.state.rectArea,Jt.ltc_1.value=Q.state.rectAreaLTC1,Jt.ltc_2.value=Q.state.rectAreaLTC2,Jt.pointLights.value=Q.state.point,Jt.pointLightShadows.value=Q.state.pointShadow,Jt.hemisphereLights.value=Q.state.hemi,Jt.directionalShadowMap.value=Q.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Jt.spotShadowMap.value=Q.state.spotShadowMap,Jt.spotLightMatrix.value=Q.state.spotLightMatrix,Jt.spotLightMap.value=Q.state.spotLightMap,Jt.pointShadowMap.value=Q.state.pointShadowMap,Jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ct.currentProgram=ee,ct.uniformsList=null,ee}function Gi(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Lc.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Vi(C,K){const ut=Ot.get(C);ut.outputColorSpace=K.outputColorSpace,ut.batching=K.batching,ut.batchingColor=K.batchingColor,ut.instancing=K.instancing,ut.instancingColor=K.instancingColor,ut.instancingMorph=K.instancingMorph,ut.skinning=K.skinning,ut.morphTargets=K.morphTargets,ut.morphNormals=K.morphNormals,ut.morphColors=K.morphColors,ut.morphTargetsCount=K.morphTargetsCount,ut.numClippingPlanes=K.numClippingPlanes,ut.numIntersection=K.numClipIntersection,ut.vertexAlphas=K.vertexAlphas,ut.vertexTangents=K.vertexTangents,ut.toneMapping=K.toneMapping}function cr(C,K,ut,ct,Q){K.isScene!==!0&&(K=kt),N.resetTextureUnits();const Dt=K.fog,zt=ct.isMeshStandardMaterial?K.environment:null,Ft=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:no,Wt=(ct.isMeshStandardMaterial?tt:T).get(ct.envMap||zt),se=ct.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ee=!!ut.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Jt=!!ut.morphAttributes.position,_e=!!ut.morphAttributes.normal,Ce=!!ut.morphAttributes.color;let je=ar;ct.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(je=w.toneMapping);const Me=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ee=Me!==void 0?Me.length:0,ne=Ot.get(ct),Qe=y.state.lights;if(nt===!0&&(ft===!0||C!==R)){const _n=C===R&&ct.id===U;Ct.setState(ct,C,_n)}let we=!1;ct.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Qe.state.version||ne.outputColorSpace!==Ft||Q.isBatchedMesh&&ne.batching===!1||!Q.isBatchedMesh&&ne.batching===!0||Q.isBatchedMesh&&ne.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ne.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ne.instancing===!1||!Q.isInstancedMesh&&ne.instancing===!0||Q.isSkinnedMesh&&ne.skinning===!1||!Q.isSkinnedMesh&&ne.skinning===!0||Q.isInstancedMesh&&ne.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ne.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ne.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ne.instancingMorph===!1&&Q.morphTexture!==null||ne.envMap!==Wt||ct.fog===!0&&ne.fog!==Dt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Ct.numPlanes||ne.numIntersection!==Ct.numIntersection)||ne.vertexAlphas!==se||ne.vertexTangents!==ee||ne.morphTargets!==Jt||ne.morphNormals!==_e||ne.morphColors!==Ce||ne.toneMapping!==je||ne.morphTargetsCount!==Ee)&&(we=!0):(we=!0,ne.__version=ct.version);let Rn=ne.currentProgram;we===!0&&(Rn=Ta(ct,K,Q));let wa=!1,We=!1,Xi=!1;const ke=Rn.getUniforms(),Cn=ne.uniforms;if(Xt.useProgram(Rn.program)&&(wa=!0,We=!0,Xi=!0),ct.id!==U&&(U=ct.id,We=!0),wa||R!==C){Xt.buffers.depth.getReversed()?(gt.copy(C.projectionMatrix),Vb(gt),kb(gt),ke.setValue(H,"projectionMatrix",gt)):ke.setValue(H,"projectionMatrix",C.projectionMatrix),ke.setValue(H,"viewMatrix",C.matrixWorldInverse);const bn=ke.map.cameraPosition;bn!==void 0&&bn.setValue(H,_t.setFromMatrixPosition(C.matrixWorld)),Zt.logarithmicDepthBuffer&&ke.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&ke.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,We=!0,Xi=!0)}if(Q.isSkinnedMesh){ke.setOptional(H,Q,"bindMatrix"),ke.setOptional(H,Q,"bindMatrixInverse");const _n=Q.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),ke.setValue(H,"boneTexture",_n.boneTexture,N))}Q.isBatchedMesh&&(ke.setOptional(H,Q,"batchingTexture"),ke.setValue(H,"batchingTexture",Q._matricesTexture,N),ke.setOptional(H,Q,"batchingIdTexture"),ke.setValue(H,"batchingIdTexture",Q._indirectTexture,N),ke.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ke.setValue(H,"batchingColorTexture",Q._colorsTexture,N));const cn=ut.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&$t.update(Q,ut,Rn),(We||ne.receiveShadow!==Q.receiveShadow)&&(ne.receiveShadow=Q.receiveShadow,ke.setValue(H,"receiveShadow",Q.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Cn.envMap.value=Wt,Cn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&K.environment!==null&&(Cn.envMapIntensity.value=K.environmentIntensity),We&&(ke.setValue(H,"toneMappingExposure",w.toneMappingExposure),ne.needsLights&&Aa(Cn,Xi),Dt&&ct.fog===!0&&Ut.refreshFogUniforms(Cn,Dt),Ut.refreshMaterialUniforms(Cn,ct,q,j,y.state.transmissionRenderTarget[C.id]),Lc.upload(H,Gi(ne),Cn,N)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Lc.upload(H,Gi(ne),Cn,N),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&ke.setValue(H,"center",Q.center),ke.setValue(H,"modelViewMatrix",Q.modelViewMatrix),ke.setValue(H,"normalMatrix",Q.normalMatrix),ke.setValue(H,"modelMatrix",Q.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const _n=ct.uniformsGroups;for(let bn=0,Di=_n.length;bn<Di;bn++){const Wi=_n[bn];Y.update(Wi,Rn),Y.bind(Wi,Rn)}}return Rn}function Aa(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function rn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,K,ut){const ct=Ot.get(C);ct.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Ot.get(C.texture).__webglTexture=K,Ot.get(C.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ut,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ut=Ot.get(C);ut.__webglFramebuffer=K,ut.__useDefaultFramebuffer=K===void 0};const kl=H.createFramebuffer();this.setRenderTarget=function(C,K=0,ut=0){W=C,O=K,B=ut;let ct=!0,Q=null,Dt=!1,zt=!1;if(C){const Wt=Ot.get(C);if(Wt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(H.FRAMEBUFFER,null),ct=!1;else if(Wt.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(Wt.__hasExternalTextures)N.rebindTextures(C,Ot.get(C.texture).__webglTexture,Ot.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(Wt.__boundDepthTexture!==Jt){if(Jt!==null&&Ot.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const se=C.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(zt=!0);const ee=Ot.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[K])?Q=ee[K][ut]:Q=ee[K],Dt=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?Q=Ot.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[ut]:Q=ee,I.copy(C.viewport),rt.copy(C.scissor),J=C.scissorTest}else I.copy(V).multiplyScalar(q).floor(),rt.copy(mt).multiplyScalar(q).floor(),J=$;if(ut!==0&&(Q=kl),Xt.bindFramebuffer(H.FRAMEBUFFER,Q)&&ct&&Xt.drawBuffers(C,Q),Xt.viewport(I),Xt.scissor(rt),Xt.setScissorTest(J),Dt){const Wt=Ot.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K,Wt.__webglTexture,ut)}else if(zt){const Wt=Ot.get(C.texture),se=K;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.__webglTexture,ut,se)}else if(C!==null&&ut!==0){const Wt=Ot.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Wt.__webglTexture,ut)}U=-1},this.readRenderTargetPixels=function(C,K,ut,ct,Q,Dt,zt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(Ft=Ft[zt]),Ft){Xt.bindFramebuffer(H.FRAMEBUFFER,Ft);try{const Wt=C.texture,se=Wt.format,ee=Wt.type;if(!Zt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ct&&ut>=0&&ut<=C.height-Q&&H.readPixels(K,ut,ct,Q,re.convert(se),re.convert(ee),Dt)}finally{const Wt=W!==null?Ot.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,K,ut,ct,Q,Dt,zt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(Ft=Ft[zt]),Ft)if(K>=0&&K<=C.width-ct&&ut>=0&&ut<=C.height-Q){Xt.bindFramebuffer(H.FRAMEBUFFER,Ft);const Wt=C.texture,se=Wt.format,ee=Wt.type;if(!Zt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Jt),H.bufferData(H.PIXEL_PACK_BUFFER,Dt.byteLength,H.STREAM_READ),H.readPixels(K,ut,ct,Q,re.convert(se),re.convert(ee),0);const _e=W!==null?Ot.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,_e);const Ce=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Gb(H,Ce,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Jt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Dt),H.deleteBuffer(Jt),H.deleteSync(Ce),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ut=0){const ct=Math.pow(2,-ut),Q=Math.floor(C.image.width*ct),Dt=Math.floor(C.image.height*ct),zt=K!==null?K.x:0,Ft=K!==null?K.y:0;N.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,ut,0,0,zt,Ft,Q,Dt),Xt.unbindTexture()};const Xl=H.createFramebuffer(),ki=H.createFramebuffer();this.copyTextureToTexture=function(C,K,ut=null,ct=null,Q=0,Dt=null){Dt===null&&(Q!==0?(Nc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Q,Q=0):Dt=0);let zt,Ft,Wt,se,ee,Jt,_e,Ce,je;const Me=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(ut!==null)zt=ut.max.x-ut.min.x,Ft=ut.max.y-ut.min.y,Wt=ut.isBox3?ut.max.z-ut.min.z:1,se=ut.min.x,ee=ut.min.y,Jt=ut.isBox3?ut.min.z:0;else{const cn=Math.pow(2,-Q);zt=Math.floor(Me.width*cn),Ft=Math.floor(Me.height*cn),C.isDataArrayTexture?Wt=Me.depth:C.isData3DTexture?Wt=Math.floor(Me.depth*cn):Wt=1,se=0,ee=0,Jt=0}ct!==null?(_e=ct.x,Ce=ct.y,je=ct.z):(_e=0,Ce=0,je=0);const Ee=re.convert(K.format),ne=re.convert(K.type);let Qe;K.isData3DTexture?(N.setTexture3D(K,0),Qe=H.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(N.setTexture2DArray(K,0),Qe=H.TEXTURE_2D_ARRAY):(N.setTexture2D(K,0),Qe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const we=H.getParameter(H.UNPACK_ROW_LENGTH),Rn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),wa=H.getParameter(H.UNPACK_SKIP_PIXELS),We=H.getParameter(H.UNPACK_SKIP_ROWS),Xi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Me.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Me.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,se),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Jt);const ke=C.isDataArrayTexture||C.isData3DTexture,Cn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const cn=Ot.get(C),_n=Ot.get(K),bn=Ot.get(cn.__renderTarget),Di=Ot.get(_n.__renderTarget);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,bn.__webglFramebuffer),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Wi=0;Wi<Wt;Wi++)ke&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.get(C).__webglTexture,Q,Jt+Wi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.get(K).__webglTexture,Dt,je+Wi)),H.blitFramebuffer(se,ee,zt,Ft,_e,Ce,zt,Ft,H.DEPTH_BUFFER_BIT,H.NEAREST);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Ot.has(C)){const cn=Ot.get(C),_n=Ot.get(K);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,Xl),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ki);for(let bn=0;bn<Wt;bn++)ke?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,cn.__webglTexture,Q,Jt+bn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,cn.__webglTexture,Q),Cn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_n.__webglTexture,Dt,je+bn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_n.__webglTexture,Dt),Q!==0?H.blitFramebuffer(se,ee,zt,Ft,_e,Ce,zt,Ft,H.COLOR_BUFFER_BIT,H.NEAREST):Cn?H.copyTexSubImage3D(Qe,Dt,_e,Ce,je+bn,se,ee,zt,Ft):H.copyTexSubImage2D(Qe,Dt,_e,Ce,se,ee,zt,Ft);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Cn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Qe,Dt,_e,Ce,je,zt,Ft,Wt,Ee,ne,Me.data):K.isCompressedArrayTexture?H.compressedTexSubImage3D(Qe,Dt,_e,Ce,je,zt,Ft,Wt,Ee,Me.data):H.texSubImage3D(Qe,Dt,_e,Ce,je,zt,Ft,Wt,Ee,ne,Me):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Dt,_e,Ce,zt,Ft,Ee,ne,Me.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Dt,_e,Ce,Me.width,Me.height,Ee,Me.data):H.texSubImage2D(H.TEXTURE_2D,Dt,_e,Ce,zt,Ft,Ee,ne,Me);H.pixelStorei(H.UNPACK_ROW_LENGTH,we),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Rn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,wa),H.pixelStorei(H.UNPACK_SKIP_ROWS,We),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xi),Dt===0&&K.generateMipmaps&&H.generateMipmap(Qe),Xt.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ut=null,ct=null,Q=0){return Nc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,ut,ct,Q)},this.initRenderTarget=function(C){Ot.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Xt.unbindTexture()},this.resetState=function(){O=0,B=0,W=null,Xt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}function Tx(i){const t=i.match(/hsl\(\s*(\d+),\s*(\d+)%\s*,\s*(\d+)%\s*\)/);return{h:parseInt(t[1],10),s:parseInt(t[2],10),l:parseInt(t[3],10)}}function i2(i,t,n){const r=i.h+(t.h-i.h)*n,o=i.s+(t.s-i.s)*n,u=i.l+(t.l-i.l)*n;return`hsl(${Math.round(r)}, ${Math.round(o)}%, ${Math.round(u)}%)`}function ep(i,t,n){const r=Tx(t),o=Tx(n),u=[];for(let c=0;c<i;c++){let h=i===1?0:c/(i-1);u.push(i2(r,o,h))}return u}const Ax={default:i=>{const t=[];for(let o=0;o<i;o++){const u=Math.floor(360/i*o);t.push(`hsl(${u}, 50%, 50%)`)}return t},protanopia:i=>ep(i,"hsl(210, 70%, 40%)","hsl(50, 80%, 50%)"),deuteranopia:i=>ep(i,"hsl(260, 70%, 45%)","hsl(20, 80%, 55%)"),tritanopia:i=>ep(i,"hsl(0, 80%, 50%)","hsl(120, 80%, 40%)")},a2=({onSwitch:i})=>{const t=Yt.useRef(null),[n,r]=Yt.useState(!0),[o,u]=Yt.useState(null),[c,h]=Yt.useState(!1),[p,d]=Yt.useState(0),[g,v]=Yt.useState(!1),[_,x]=Yt.useState(null),[E,b]=Yt.useState(1),[S,y]=Yt.useState("default"),P=Yt.useRef(null),D=Yt.useRef(null),w=Yt.useRef(null),z=Yt.useRef(null),O=Yt.useRef({x:0,y:0}),B=Yt.useRef({x:0,y:0}),W=Yt.useRef(0),U=Yt.useRef(2e3),R=Yt.useRef([]),I=Yt.useRef({min:null,max:null}),rt=Yt.useRef(null),J=Yt.useRef(null),[vt,xt]=Yt.useState(null);Array.from({length:20},(V,mt)=>mt+1),Yt.useEffect(()=>{r(!0),fetch(`https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_${E}.json`).then(V=>V.json()).then(V=>{const mt=[...V].sort((k,nt)=>new Date(k.creation_time)-new Date(nt.creation_time));x(mt);const $=new Date(mt[0].creation_time);u($.toLocaleString()),r(!1)}).catch(V=>{console.error("Error loading JSON data:",V),r(!1)})},[E]),Yt.useEffect(()=>{fetch("https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_original_tweets.json").then(V=>V.json()).then(V=>{const mt=V.reduce(($,k)=>($[k.platform_post_id]=k,$),{});xt(mt)}).catch(V=>{console.error("Error loading original tweet details:",V)})},[]),Yt.useEffect(()=>{if(!_)return;const V=new Py;V.background=new ye(0),D.current=V;const mt=new ni(75,window.innerWidth/window.innerHeight,.1,1e3);mt.position.z=15,w.current=mt;const $=new qy({antialias:!0});$.setSize(window.innerWidth,window.innerHeight),t.current.appendChild($.domElement),z.current=$;const k=Ot=>{Ot.preventDefault();const N=.05;w.current.position.z+=Ot.deltaY*N,w.current.position.z=Math.max(5,Math.min(50,w.current.position.z))};$.domElement.addEventListener("wheel",k,{passive:!1});const nt=new Ys;V.add(nt);const ft=(Ot,N,T=0)=>{const tt=document.createElement("canvas"),St=tt.getContext("2d");tt.width=256,tt.height=128,St.font="12px Arial",St.fillStyle=`rgba(${T>>16&255}, ${T>>8&255}, ${T&255}, 1.0)`,St.fillText(Ot,0,64);const wt=new Wc(tt),st=new Am({map:wt}),Lt=new By(st);return Lt.position.set(N.x-2,N.y+.2,N.z),Lt.scale.set(5,2.5,1),Lt},gt=new ro(1,32,32),Rt=new io({color:4886754}),_t=new ii(gt,Rt);_t.visible=!0,nt.add(_t),rt.current=_t;const bt=ft("Original Tweet by @roberthabeck",new it(0,0,0),1942002);bt.visible=!0,nt.add(bt),J.current=bt;const kt=Ax[S](70),dt=[],Kt=new Date(_[0].creation_time),H=new Date(_[_.length-1].creation_time);I.current={min:Kt,max:H},_.forEach((Ot,N)=>{const T=new Date(Ot.creation_time),tt=N/_.length*Math.PI*2,St=7,wt=Math.cos(tt)*St,st=Math.sin(tt)*St,Ut=.3+parseFloat(Ot.follower_count)/1e6*.7,Nt=new ro(Ut,32,32),ue=kt[N%kt.length],Ct=new io({color:new ye(ue),transparent:!0,opacity:0}),Gt=new ii(Nt,Ct);Gt.position.set(wt,st,0),Gt.userData={data:Ot,time:T,visible:!1};const jt=ft(Ot.dboes_name,new it(wt,st,0),16777215);jt.visible=!1;const $t=new wm({color:new ye(ue),transparent:!0,opacity:0}),Pt=new gi().setFromPoints([new it(0,0,0),new it(wt,st,0)]),ce=new Fy(Pt,$t);nt.add(Gt),nt.add(jt),nt.add(ce),dt.push({node:Gt,label:jt,line:ce,time:T})}),R.current=dt,u(Kt.toLocaleString()),r(!1);const Te=Ot=>{document.addEventListener("mousemove",te),document.addEventListener("mouseup",Zt),O.current.x=Ot.clientX,O.current.y=Ot.clientY},te=Ot=>{const N=Ot.clientX-O.current.x,T=Ot.clientY-O.current.y;O.current.x=Ot.clientX,O.current.y=Ot.clientY,B.current.y+=N*.01,B.current.x+=T*.01},Zt=()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",Zt)};$.domElement.addEventListener("mousedown",Te);const Xt=()=>{w.current&&z.current&&(w.current.aspect=window.innerWidth/window.innerHeight,w.current.updateProjectionMatrix(),z.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Xt),$.render(V,mt);const ge=()=>{nt&&(nt.rotation.x+=(B.current.x-nt.rotation.x)*.05,nt.rotation.y+=(B.current.y-nt.rotation.y)*.05),z.current&&D.current&&w.current&&z.current.render(D.current,w.current),P.current=requestAnimationFrame(ge)};return P.current=requestAnimationFrame(ge),()=>{window.removeEventListener("resize",Xt),cancelAnimationFrame(P.current),$.domElement.removeEventListener("mousedown",Te),document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",Zt),t.current&&$.domElement&&t.current.removeChild($.domElement),gt.dispose(),Rt.dispose(),dt.forEach(Ot=>{Ot.node.geometry&&Ot.node.geometry.dispose(),Ot.node.material&&Ot.node.material.dispose(),Ot.line.geometry&&Ot.line.geometry.dispose(),Ot.line.material&&Ot.line.material.dispose()})}},[_,S]),Yt.useEffect(()=>{let V;return c&&(W.current=Date.now(),rt.current&&(rt.current.visible=!0),J.current&&(J.current.visible=!0),V=setInterval(()=>{const{min:mt,max:$}=I.current;if(!mt||!$)return;const nt=(Date.now()-W.current)*U.current,ft=new Date(mt.getTime()+nt),gt=$.getTime()-mt.getTime(),Rt=ft.getTime()-mt.getTime(),_t=Math.min(Rt/gt*100,100);u(ft.toLocaleString()),d(_t),R.current.forEach(bt=>{if(ft>=bt.time&&!bt.node.userData.visible){bt.node.material.opacity=1,bt.label.visible=!0,bt.line.material.opacity=.7,bt.node.userData.visible=!0;const kt=new it(1.5,1.5,1.5);bt.node.scale.copy(kt),setTimeout(()=>{bt.node.scale.set(1,1,1)},300)}}),ft>=$&&(h(!1),clearInterval(V))},100)),()=>{V&&clearInterval(V)}},[c]),Yt.useEffect(()=>{if(!_)return;const V=new Gy,mt=new Se,$=k=>{mt.x=k.clientX/window.innerWidth*2-1,mt.y=-(k.clientY/window.innerHeight)*2+1,V.setFromCamera(mt,w.current);const nt=R.current.map(gt=>gt.node),ft=V.intersectObjects(nt);if(ft.length>0){const gt=ft[0].object;R.current.forEach(Rt=>{Rt.node===gt?(Rt.node.material.opacity=1,Rt.label.material&&(Rt.label.material.opacity=1)):(Rt.node.material.opacity=.3,Rt.label.material&&(Rt.label.material.opacity=.3))})}else R.current.forEach(gt=>{gt.node.userData.visible?(gt.node.material.opacity=1,gt.label.material&&(gt.label.material.opacity=1)):(gt.node.material.opacity=0,gt.label.material&&(gt.label.material.opacity=0))})};return window.addEventListener("mousemove",$),()=>{window.removeEventListener("mousemove",$)}},[_]);const F=()=>{c?h(!1):(p>=100&&(R.current.forEach(V=>{V.node.material.opacity=0,V.label.visible=!1,V.line.material.opacity=0,V.node.userData.visible=!1}),u(I.current.min.toLocaleString()),d(0)),h(!0))};Yt.useEffect(()=>{rt.current&&J.current&&(rt.current.visible=!0,J.current.visible=!0)},[E]),Yt.useEffect(()=>{var V;if(_&&vt&&((V=_[0])!=null&&V.shared_post_id)&&J.current){const mt=_[0].shared_post_id,$=vt[mt];if($){const nt=`Original Tweet by @${$.platform_post_owner_name}`,ft=document.createElement("canvas"),gt=ft.getContext("2d");ft.width=256,ft.height=128,gt.font="12px Arial",gt.fillStyle="rgba(29,161,242,1.0)",gt.fillText(nt,0,64);const Rt=new Wc(ft);J.current.material.map=Rt,J.current.material.needsUpdate=!0}}},[_,vt]);const j=[{id:1,label:"Attention Please"},{id:2,label:"Conservatives serve Europe"},{id:3,label:"Hope for Tomorrow"},{id:4,label:"Election Allegations"},{id:5,label:"Catalyst for Change"},{id:6,label:"Show Your Colors"},{id:7,label:"Advent Interrupted"},{id:8,label:"For Reasons"},{id:9,label:"Suspending Documentation"},{id:10,label:"Tax Relief"},{id:11,label:"Coalition Opportunity"},{id:12,label:"Small Shifts, Big Impact"},{id:13,label:"Voting Paradox"},{id:14,label:"Economic Turnaround Now"},{id:15,label:""},{id:16,label:""},{id:17,label:""},{id:18,label:""},{id:19,label:""},{id:20,label:""}],L=`linear-gradient(to right, ${Ax[S](7).join(", ")})`;return ht.jsxs("div",{className:"w-full h-screen relative",children:[ht.jsx("div",{ref:t,className:"w-full h-full"}),ht.jsxs("div",{className:"absolute top-10 left-10 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out",children:[ht.jsx("div",{className:"text-lg font-bold mb-2 text-white",children:"Retweet Simulation"}),ht.jsxs("div",{className:"mb-2 text-white",children:["Current Time: ",o]}),ht.jsx("div",{className:"w-64 h-2 bg-gray-800 rounded-full",children:ht.jsx("div",{className:"h-full bg-cyan-500 rounded-full",style:{width:`${p}%`}})}),ht.jsx("div",{className:"mt-2 text-sm text-white",children:"Original tweet by @roberthabeck being retweeted by multiple accounts"})]}),ht.jsxs("div",{className:"absolute right-20 top-[300px] p-4 text-right",children:[ht.jsx("div",{className:"mt-2 text-xl text-white",children:"Select a tweet:"}),ht.jsx("div",{className:"text-cyan-500 flex flex-col",children:j.map(V=>ht.jsx("span",{onClick:()=>b(V.id),className:`cursor-pointer mb-2 ${E===V.id?"text-3xl":"text-base"}`,children:V.label},V.id))})]}),ht.jsxs("div",{className:"absolute right-20 top-10 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out",children:[ht.jsx("div",{className:"text-lg font-bold mb-2 text-white",children:"Color Scheme"}),ht.jsxs("div",{className:"text-sm text-white",children:[ht.jsxs("div",{className:"mb-3",children:[ht.jsx("div",{className:"mb-3",children:ht.jsxs("select",{value:S,onChange:V=>y(V.target.value),className:"p-2 bg-gray-800 text-white rounded",children:[ht.jsx("option",{value:"default",children:"Default"}),ht.jsx("option",{value:"protanopia",children:"Protanopia-friendly"}),ht.jsx("option",{value:"deuteranopia",children:"Deuteranopia-friendly"}),ht.jsx("option",{value:"tritanopia",children:"Tritanopia-friendly"})]})}),ht.jsx("div",{className:"w-full h-4 rounded",style:{background:L}}),ht.jsx("p",{className:"mt-1",children:"Earliest → Latest"})]}),ht.jsxs("div",{children:[ht.jsx("p",{className:"text-lg font-bold mb-2 text-white",children:"Node Size"}),ht.jsxs("div",{className:"flex items-center space-x-2",children:[ht.jsx("div",{className:"w-4 h-4 bg-white rounded-full border border-cyan-500"}),ht.jsx("span",{children:"Low Follower Count"})]}),ht.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[ht.jsx("div",{className:"w-8 h-8 bg-white rounded-full border border-cyan-500"}),ht.jsx("span",{children:"High Follower Count"})]})]})]})]}),ht.jsx("div",{className:"absolute bottom-20 left-60",children:ht.jsx("button",{onClick:i,className:"w-124 bg-black text-white font-bold py-3 px-6 rounded-lg border border-cyan-500 shadow-lg hover:bg-gray-900 hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out",children:"Check out Network Viz!"})}),ht.jsx("div",{className:"absolute bottom-20 left-10",children:ht.jsx("button",{onClick:F,className:"w-32 bg-black text-white font-bold py-3 px-6 rounded-lg border border-cyan-500 shadow-lg hover:bg-gray-900 hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out",children:c?"Pause":"Play"})}),ht.jsx("div",{className:"absolute w-80 top-60 -mt-10 left-40 ml-10 transform -translate-x-1/2 p-6 bg-gray-900 bg-opacity-80 border border-cyan-500 rounded-lg shadow-xl text-white font-mono text-xl text-center",children:_&&_[0]&&_[0].text?_[0].text.replace(/https:\/\/.*/,""):"Loading original tweet..."}),ht.jsx("div",{className:"absolute bottom-60 right-20",children:ht.jsx("button",{onClick:()=>v(!g),className:"bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center",children:"i"})}),g&&ht.jsx("div",{className:"absolute bottom-80 right-28 -mb-5 -mr-7",children:ht.jsxs("div",{className:"relative",children:[ht.jsx("div",{className:"absolute -bottom-3 left-80 -ml-5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-cyan-500"}),ht.jsx("div",{className:"w-80 p-4 bg-black border border-cyan-500 rounded-lg text-sm text-white",children:ht.jsx("p",{children:"This circular visualization shows how a tweet spreads over time. Each sphere around the circle represents a retweet. The sphere’s size reflects the retweeter’s follower count, and the color scheme shows when the retweet was made. You can play the simulation to see the tweet’s impact grow, and interact by rotating, zooming, and hovering to explore the details."})})]})}),ht.jsxs("div",{className:"absolute bottom-10 right-20 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg transition duration-300 ease-in-out",children:[ht.jsx("div",{className:"text-lg font-bold text-white mb-2",children:"Instructions"}),ht.jsxs("div",{className:"text-sm text-white space-y-2",children:[ht.jsxs("div",{className:"flex items-center",children:[ht.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-cyan-500 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 4a7 7 0 017 7c0 1.93-.77 3.68-2.01 4.95l4.24 4.24a1 1 0 01-1.42 1.42l-4.24-4.24A7 7 0 1111 4z"})}),ht.jsx("span",{children:"Zoom in/out using mouse wheel"})]}),ht.jsxs("div",{className:"flex items-center",children:[ht.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-cyan-500 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.75 3.75l9 4.5-4.5 9-9-4.5 4.5-9z"})}),ht.jsx("span",{children:"Select tweet titles from right panel"})]}),ht.jsxs("div",{className:"flex items-center",children:[ht.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-cyan-500 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 10a3 3 0 11-6 0 3 3 0 016 0z"}),ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 10c0 3.866-3.134 7-7 7H7l-4 4V3c0-1.657 1.343-3 3-3h8c3.866 0 7 3.134 7 7z"})]}),ht.jsx("span",{children:"Choose color scheme (normal & color blind)"})]}),ht.jsxs("div",{className:"flex items-center",children:[ht.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-cyan-500 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14.752 11.168l-5.197-3.033A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.033a1 1 0 000-1.664z"})}),ht.jsx("span",{children:"Click Play to start simulation"})]})]})]})]})};function Oc(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function r2(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function Cm(i){let t,n,r;i.length!==2?(t=Oc,n=(h,p)=>Oc(i(h),p),r=(h,p)=>i(h)-p):(t=i===Oc||i===r2?i:s2,n=i,r=i);function o(h,p,d=0,g=h.length){if(d<g){if(t(p,p)!==0)return g;do{const v=d+g>>>1;n(h[v],p)<0?d=v+1:g=v}while(d<g)}return d}function u(h,p,d=0,g=h.length){if(d<g){if(t(p,p)!==0)return g;do{const v=d+g>>>1;n(h[v],p)<=0?d=v+1:g=v}while(d<g)}return d}function c(h,p,d=0,g=h.length){const v=o(h,p,d,g-1);return v>d&&r(h[v-1],p)>-r(h[v],p)?v-1:v}return{left:o,center:c,right:u}}function s2(){return 0}function o2(i){return i===null?NaN:+i}const l2=Cm(Oc),jy=l2.right;Cm(o2).center;function u2(i,t){let n=0;for(let r of i)r!=null&&(r=+r)>=r&&++n;return n}function Pc(i,t){let n,r;if(t===void 0)for(const o of i)o!=null&&(n===void 0?o>=o&&(n=r=o):(n>o&&(n=o),r<o&&(r=o)));else{let o=-1;for(let u of i)(u=t(u,++o,i))!=null&&(n===void 0?u>=u&&(n=r=u):(n>u&&(n=u),r<u&&(r=u)))}return[n,r]}function c2(i){return i}var f2=Array.prototype,h2=f2.slice;function np(i){return()=>i}const d2=Math.sqrt(50),p2=Math.sqrt(10),m2=Math.sqrt(2);function Yc(i,t,n){const r=(t-i)/Math.max(0,n),o=Math.floor(Math.log10(r)),u=r/Math.pow(10,o),c=u>=d2?10:u>=p2?5:u>=m2?2:1;let h,p,d;return o<0?(d=Math.pow(10,-o)/c,h=Math.round(i*d),p=Math.round(t*d),h/d<i&&++h,p/d>t&&--p,d=-d):(d=Math.pow(10,o)*c,h=Math.round(i/d),p=Math.round(t/d),h*d<i&&++h,p*d>t&&--p),p<h&&.5<=n&&n<2?Yc(i,t,n*2):[h,p,d]}function Zy(i,t,n){if(t=+t,i=+i,n=+n,!(n>0))return[];if(i===t)return[i];const r=t<i,[o,u,c]=r?Yc(t,i,n):Yc(i,t,n);if(!(u>=o))return[];const h=u-o+1,p=new Array(h);if(r)if(c<0)for(let d=0;d<h;++d)p[d]=(u-d)/-c;else for(let d=0;d<h;++d)p[d]=(u-d)*c;else if(c<0)for(let d=0;d<h;++d)p[d]=(o+d)/-c;else for(let d=0;d<h;++d)p[d]=(o+d)*c;return p}function so(i,t,n){return t=+t,i=+i,n=+n,Yc(i,t,n)[2]}function im(i,t,n){t=+t,i=+i,n=+n;const r=t<i,o=r?so(t,i,n):so(i,t,n);return(r?-1:1)*(o<0?1/-o:o)}function g2(i,t,n){let r;for(;;){const o=so(i,t,n);if(o===r||o===0||!isFinite(o))return[i,t];o>0?(i=Math.floor(i/o)*o,t=Math.ceil(t/o)*o):o<0&&(i=Math.ceil(i*o)/o,t=Math.floor(t*o)/o),r=o}}function _2(i){return Math.max(1,Math.ceil(Math.log(u2(i))/Math.LN2)+1)}function v2(){var i=c2,t=Pc,n=_2;function r(o){Array.isArray(o)||(o=Array.from(o));var u,c=o.length,h,p,d=new Array(c);for(u=0;u<c;++u)d[u]=i(o[u],u,o);var g=t(d),v=g[0],_=g[1],x=n(d,v,_);if(!Array.isArray(x)){const D=_,w=+x;if(t===Pc&&([v,_]=g2(v,_,w)),x=Zy(v,_,w),x[0]<=v&&(p=so(v,_,w)),x[x.length-1]>=_)if(D>=_&&t===Pc){const z=so(v,_,w);isFinite(z)&&(z>0?_=(Math.floor(_/z)+1)*z:z<0&&(_=(Math.ceil(_*-z)+1)/-z))}else x.pop()}for(var E=x.length,b=0,S=E;x[b]<=v;)++b;for(;x[S-1]>_;)--S;(b||S<E)&&(x=x.slice(b,S),E=S-b);var y=new Array(E+1),P;for(u=0;u<=E;++u)P=y[u]=[],P.x0=u>0?x[u-1]:v,P.x1=u<E?x[u]:_;if(isFinite(p)){if(p>0)for(u=0;u<c;++u)(h=d[u])!=null&&v<=h&&h<=_&&y[Math.min(E,Math.floor((h-v)/p))].push(o[u]);else if(p<0){for(u=0;u<c;++u)if((h=d[u])!=null&&v<=h&&h<=_){const D=Math.floor((v-h)*p);y[Math.min(E,D+(x[D]<=h))].push(o[u])}}}else for(u=0;u<c;++u)(h=d[u])!=null&&v<=h&&h<=_&&y[jy(x,h,0,E)].push(o[u]);return y}return r.value=function(o){return arguments.length?(i=typeof o=="function"?o:np(o),r):i},r.domain=function(o){return arguments.length?(t=typeof o=="function"?o:np([o[0],o[1]]),r):t},r.thresholds=function(o){return arguments.length?(n=typeof o=="function"?o:np(Array.isArray(o)?h2.call(o):o),r):n},r}function wx(i,t){let n;if(t===void 0)for(const r of i)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let o of i)(o=t(o,++r,i))!=null&&(n<o||n===void 0&&o>=o)&&(n=o)}return n}function x2(i,t){let n;for(const r of i)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function y2(i){return i}var ip=1,ap=2,am=3,El=4,Rx=1e-6;function S2(i){return"translate("+i+",0)"}function M2(i){return"translate(0,"+i+")"}function E2(i){return t=>+i(t)}function b2(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),n=>+i(n)+t}function T2(){return!this.__axis}function Ky(i,t){var n=[],r=null,o=null,u=6,c=6,h=3,p=typeof window<"u"&&window.devicePixelRatio>1?0:.5,d=i===ip||i===El?-1:1,g=i===El||i===ap?"x":"y",v=i===ip||i===am?S2:M2;function _(x){var E=r??(t.ticks?t.ticks.apply(t,n):t.domain()),b=o??(t.tickFormat?t.tickFormat.apply(t,n):y2),S=Math.max(u,0)+h,y=t.range(),P=+y[0]+p,D=+y[y.length-1]+p,w=(t.bandwidth?b2:E2)(t.copy(),p),z=x.selection?x.selection():x,O=z.selectAll(".domain").data([null]),B=z.selectAll(".tick").data(E,t).order(),W=B.exit(),U=B.enter().append("g").attr("class","tick"),R=B.select("line"),I=B.select("text");O=O.merge(O.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),B=B.merge(U),R=R.merge(U.append("line").attr("stroke","currentColor").attr(g+"2",d*u)),I=I.merge(U.append("text").attr("fill","currentColor").attr(g,d*S).attr("dy",i===ip?"0em":i===am?"0.71em":"0.32em")),x!==z&&(O=O.transition(x),B=B.transition(x),R=R.transition(x),I=I.transition(x),W=W.transition(x).attr("opacity",Rx).attr("transform",function(rt){return isFinite(rt=w(rt))?v(rt+p):this.getAttribute("transform")}),U.attr("opacity",Rx).attr("transform",function(rt){var J=this.parentNode.__axis;return v((J&&isFinite(J=J(rt))?J:w(rt))+p)})),W.remove(),O.attr("d",i===El||i===ap?c?"M"+d*c+","+P+"H"+p+"V"+D+"H"+d*c:"M"+p+","+P+"V"+D:c?"M"+P+","+d*c+"V"+p+"H"+D+"V"+d*c:"M"+P+","+p+"H"+D),B.attr("opacity",1).attr("transform",function(rt){return v(w(rt)+p)}),R.attr(g+"2",d*u),I.attr(g,d*S).text(b),z.filter(T2).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===ap?"start":i===El?"end":"middle"),z.each(function(){this.__axis=w})}return _.scale=function(x){return arguments.length?(t=x,_):t},_.ticks=function(){return n=Array.from(arguments),_},_.tickArguments=function(x){return arguments.length?(n=x==null?[]:Array.from(x),_):n.slice()},_.tickValues=function(x){return arguments.length?(r=x==null?null:Array.from(x),_):r&&r.slice()},_.tickFormat=function(x){return arguments.length?(o=x,_):o},_.tickSize=function(x){return arguments.length?(u=c=+x,_):u},_.tickSizeInner=function(x){return arguments.length?(u=+x,_):u},_.tickSizeOuter=function(x){return arguments.length?(c=+x,_):c},_.tickPadding=function(x){return arguments.length?(h=+x,_):h},_.offset=function(x){return arguments.length?(p=+x,_):p},_}function A2(i){return Ky(am,i)}function w2(i){return Ky(El,i)}var R2={value:()=>{}};function Qy(){for(var i=0,t=arguments.length,n={},r;i<t;++i){if(!(r=arguments[i]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new zc(n)}function zc(i){this._=i}function C2(i,t){return i.trim().split(/^|\s+/).map(function(n){var r="",o=n.indexOf(".");if(o>=0&&(r=n.slice(o+1),n=n.slice(0,o)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}zc.prototype=Qy.prototype={constructor:zc,on:function(i,t){var n=this._,r=C2(i+"",n),o,u=-1,c=r.length;if(arguments.length<2){for(;++u<c;)if((o=(i=r[u]).type)&&(o=D2(n[o],i.name)))return o;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++u<c;)if(o=(i=r[u]).type)n[o]=Cx(n[o],i.name,t);else if(t==null)for(o in n)n[o]=Cx(n[o],i.name,null);return this},copy:function(){var i={},t=this._;for(var n in t)i[n]=t[n].slice();return new zc(i)},call:function(i,t){if((o=arguments.length-2)>0)for(var n=new Array(o),r=0,o,u;r<o;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(u=this._[i],r=0,o=u.length;r<o;++r)u[r].value.apply(t,n)},apply:function(i,t,n){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var r=this._[i],o=0,u=r.length;o<u;++o)r[o].value.apply(t,n)}};function D2(i,t){for(var n=0,r=i.length,o;n<r;++n)if((o=i[n]).name===t)return o.value}function Cx(i,t,n){for(var r=0,o=i.length;r<o;++r)if(i[r].name===t){i[r]=R2,i=i.slice(0,r).concat(i.slice(r+1));break}return n!=null&&i.push({name:t,value:n}),i}var rm="http://www.w3.org/1999/xhtml";const Dx={svg:"http://www.w3.org/2000/svg",xhtml:rm,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ff(i){var t=i+="",n=t.indexOf(":");return n>=0&&(t=i.slice(0,n))!=="xmlns"&&(i=i.slice(n+1)),Dx.hasOwnProperty(t)?{space:Dx[t],local:i}:i}function U2(i){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===rm&&t.documentElement.namespaceURI===rm?t.createElement(i):t.createElementNS(n,i)}}function N2(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function $y(i){var t=ff(i);return(t.local?N2:U2)(t)}function L2(){}function Dm(i){return i==null?L2:function(){return this.querySelector(i)}}function O2(i){typeof i!="function"&&(i=Dm(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var u=t[o],c=u.length,h=r[o]=new Array(c),p,d,g=0;g<c;++g)(p=u[g])&&(d=i.call(p,p.__data__,g,u))&&("__data__"in p&&(d.__data__=p.__data__),h[g]=d);return new ai(r,this._parents)}function P2(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function z2(){return[]}function Jy(i){return i==null?z2:function(){return this.querySelectorAll(i)}}function B2(i){return function(){return P2(i.apply(this,arguments))}}function I2(i){typeof i=="function"?i=B2(i):i=Jy(i);for(var t=this._groups,n=t.length,r=[],o=[],u=0;u<n;++u)for(var c=t[u],h=c.length,p,d=0;d<h;++d)(p=c[d])&&(r.push(i.call(p,p.__data__,d,c)),o.push(p));return new ai(r,o)}function tS(i){return function(){return this.matches(i)}}function eS(i){return function(t){return t.matches(i)}}var F2=Array.prototype.find;function H2(i){return function(){return F2.call(this.children,i)}}function G2(){return this.firstElementChild}function V2(i){return this.select(i==null?G2:H2(typeof i=="function"?i:eS(i)))}var k2=Array.prototype.filter;function X2(){return Array.from(this.children)}function W2(i){return function(){return k2.call(this.children,i)}}function Y2(i){return this.selectAll(i==null?X2:W2(typeof i=="function"?i:eS(i)))}function q2(i){typeof i!="function"&&(i=tS(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var u=t[o],c=u.length,h=r[o]=[],p,d=0;d<c;++d)(p=u[d])&&i.call(p,p.__data__,d,u)&&h.push(p);return new ai(r,this._parents)}function nS(i){return new Array(i.length)}function j2(){return new ai(this._enter||this._groups.map(nS),this._parents)}function qc(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}qc.prototype={constructor:qc,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function Z2(i){return function(){return i}}function K2(i,t,n,r,o,u){for(var c=0,h,p=t.length,d=u.length;c<d;++c)(h=t[c])?(h.__data__=u[c],r[c]=h):n[c]=new qc(i,u[c]);for(;c<p;++c)(h=t[c])&&(o[c]=h)}function Q2(i,t,n,r,o,u,c){var h,p,d=new Map,g=t.length,v=u.length,_=new Array(g),x;for(h=0;h<g;++h)(p=t[h])&&(_[h]=x=c.call(p,p.__data__,h,t)+"",d.has(x)?o[h]=p:d.set(x,p));for(h=0;h<v;++h)x=c.call(i,u[h],h,u)+"",(p=d.get(x))?(r[h]=p,p.__data__=u[h],d.delete(x)):n[h]=new qc(i,u[h]);for(h=0;h<g;++h)(p=t[h])&&d.get(_[h])===p&&(o[h]=p)}function $2(i){return i.__data__}function J2(i,t){if(!arguments.length)return Array.from(this,$2);var n=t?Q2:K2,r=this._parents,o=this._groups;typeof i!="function"&&(i=Z2(i));for(var u=o.length,c=new Array(u),h=new Array(u),p=new Array(u),d=0;d<u;++d){var g=r[d],v=o[d],_=v.length,x=tC(i.call(g,g&&g.__data__,d,r)),E=x.length,b=h[d]=new Array(E),S=c[d]=new Array(E),y=p[d]=new Array(_);n(g,v,b,S,y,x,t);for(var P=0,D=0,w,z;P<E;++P)if(w=b[P]){for(P>=D&&(D=P+1);!(z=S[D])&&++D<E;);w._next=z||null}}return c=new ai(c,r),c._enter=h,c._exit=p,c}function tC(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function eC(){return new ai(this._exit||this._groups.map(nS),this._parents)}function nC(i,t,n){var r=this.enter(),o=this,u=this.exit();return typeof i=="function"?(r=i(r),r&&(r=r.selection())):r=r.append(i+""),t!=null&&(o=t(o),o&&(o=o.selection())),n==null?u.remove():n(u),r&&o?r.merge(o).order():o}function iC(i){for(var t=i.selection?i.selection():i,n=this._groups,r=t._groups,o=n.length,u=r.length,c=Math.min(o,u),h=new Array(o),p=0;p<c;++p)for(var d=n[p],g=r[p],v=d.length,_=h[p]=new Array(v),x,E=0;E<v;++E)(x=d[E]||g[E])&&(_[E]=x);for(;p<o;++p)h[p]=n[p];return new ai(h,this._parents)}function aC(){for(var i=this._groups,t=-1,n=i.length;++t<n;)for(var r=i[t],o=r.length-1,u=r[o],c;--o>=0;)(c=r[o])&&(u&&c.compareDocumentPosition(u)^4&&u.parentNode.insertBefore(c,u),u=c);return this}function rC(i){i||(i=sC);function t(v,_){return v&&_?i(v.__data__,_.__data__):!v-!_}for(var n=this._groups,r=n.length,o=new Array(r),u=0;u<r;++u){for(var c=n[u],h=c.length,p=o[u]=new Array(h),d,g=0;g<h;++g)(d=c[g])&&(p[g]=d);p.sort(t)}return new ai(o,this._parents).order()}function sC(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function oC(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function lC(){return Array.from(this)}function uC(){for(var i=this._groups,t=0,n=i.length;t<n;++t)for(var r=i[t],o=0,u=r.length;o<u;++o){var c=r[o];if(c)return c}return null}function cC(){let i=0;for(const t of this)++i;return i}function fC(){return!this.node()}function hC(i){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o=t[n],u=0,c=o.length,h;u<c;++u)(h=o[u])&&i.call(h,h.__data__,u,o);return this}function dC(i){return function(){this.removeAttribute(i)}}function pC(i){return function(){this.removeAttributeNS(i.space,i.local)}}function mC(i,t){return function(){this.setAttribute(i,t)}}function gC(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function _C(i,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(i):this.setAttribute(i,n)}}function vC(i,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,n)}}function xC(i,t){var n=ff(i);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?pC:dC:typeof t=="function"?n.local?vC:_C:n.local?gC:mC)(n,t))}function iS(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function yC(i){return function(){this.style.removeProperty(i)}}function SC(i,t,n){return function(){this.style.setProperty(i,t,n)}}function MC(i,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(i):this.style.setProperty(i,r,n)}}function EC(i,t,n){return arguments.length>1?this.each((t==null?yC:typeof t=="function"?MC:SC)(i,t,n??"")):oo(this.node(),i)}function oo(i,t){return i.style.getPropertyValue(t)||iS(i).getComputedStyle(i,null).getPropertyValue(t)}function bC(i){return function(){delete this[i]}}function TC(i,t){return function(){this[i]=t}}function AC(i,t){return function(){var n=t.apply(this,arguments);n==null?delete this[i]:this[i]=n}}function wC(i,t){return arguments.length>1?this.each((t==null?bC:typeof t=="function"?AC:TC)(i,t)):this.node()[i]}function aS(i){return i.trim().split(/^|\s+/)}function Um(i){return i.classList||new rS(i)}function rS(i){this._node=i,this._names=aS(i.getAttribute("class")||"")}rS.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function sS(i,t){for(var n=Um(i),r=-1,o=t.length;++r<o;)n.add(t[r])}function oS(i,t){for(var n=Um(i),r=-1,o=t.length;++r<o;)n.remove(t[r])}function RC(i){return function(){sS(this,i)}}function CC(i){return function(){oS(this,i)}}function DC(i,t){return function(){(t.apply(this,arguments)?sS:oS)(this,i)}}function UC(i,t){var n=aS(i+"");if(arguments.length<2){for(var r=Um(this.node()),o=-1,u=n.length;++o<u;)if(!r.contains(n[o]))return!1;return!0}return this.each((typeof t=="function"?DC:t?RC:CC)(n,t))}function NC(){this.textContent=""}function LC(i){return function(){this.textContent=i}}function OC(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function PC(i){return arguments.length?this.each(i==null?NC:(typeof i=="function"?OC:LC)(i)):this.node().textContent}function zC(){this.innerHTML=""}function BC(i){return function(){this.innerHTML=i}}function IC(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function FC(i){return arguments.length?this.each(i==null?zC:(typeof i=="function"?IC:BC)(i)):this.node().innerHTML}function HC(){this.nextSibling&&this.parentNode.appendChild(this)}function GC(){return this.each(HC)}function VC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function kC(){return this.each(VC)}function XC(i){var t=typeof i=="function"?i:$y(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function WC(){return null}function YC(i,t){var n=typeof i=="function"?i:$y(i),r=t==null?WC:typeof t=="function"?t:Dm(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function qC(){var i=this.parentNode;i&&i.removeChild(this)}function jC(){return this.each(qC)}function ZC(){var i=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function KC(){var i=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function QC(i){return this.select(i?KC:ZC)}function $C(i){return arguments.length?this.property("__data__",i):this.node().__data__}function JC(i){return function(t){i.call(this,t,this.__data__)}}function tD(i){return i.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function eD(i){return function(){var t=this.__on;if(t){for(var n=0,r=-1,o=t.length,u;n<o;++n)u=t[n],(!i.type||u.type===i.type)&&u.name===i.name?this.removeEventListener(u.type,u.listener,u.options):t[++r]=u;++r?t.length=r:delete this.__on}}}function nD(i,t,n){return function(){var r=this.__on,o,u=JC(t);if(r){for(var c=0,h=r.length;c<h;++c)if((o=r[c]).type===i.type&&o.name===i.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=u,o.options=n),o.value=t;return}}this.addEventListener(i.type,u,n),o={type:i.type,name:i.name,value:t,listener:u,options:n},r?r.push(o):this.__on=[o]}}function iD(i,t,n){var r=tD(i+""),o,u=r.length,c;if(arguments.length<2){var h=this.node().__on;if(h){for(var p=0,d=h.length,g;p<d;++p)for(o=0,g=h[p];o<u;++o)if((c=r[o]).type===g.type&&c.name===g.name)return g.value}return}for(h=t?nD:eD,o=0;o<u;++o)this.each(h(r[o],t,n));return this}function lS(i,t,n){var r=iS(i),o=r.CustomEvent;typeof o=="function"?o=new o(t,n):(o=r.document.createEvent("Event"),n?(o.initEvent(t,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(t,!1,!1)),i.dispatchEvent(o)}function aD(i,t){return function(){return lS(this,i,t)}}function rD(i,t){return function(){return lS(this,i,t.apply(this,arguments))}}function sD(i,t){return this.each((typeof t=="function"?rD:aD)(i,t))}function*oD(){for(var i=this._groups,t=0,n=i.length;t<n;++t)for(var r=i[t],o=0,u=r.length,c;o<u;++o)(c=r[o])&&(yield c)}var uS=[null];function ai(i,t){this._groups=i,this._parents=t}function Il(){return new ai([[document.documentElement]],uS)}function lD(){return this}ai.prototype=Il.prototype={constructor:ai,select:O2,selectAll:I2,selectChild:V2,selectChildren:Y2,filter:q2,data:J2,enter:j2,exit:eC,join:nC,merge:iC,selection:lD,order:aC,sort:rC,call:oC,nodes:lC,node:uC,size:cC,empty:fC,each:hC,attr:xC,style:EC,property:wC,classed:UC,text:PC,html:FC,raise:GC,lower:kC,append:XC,insert:YC,remove:jC,clone:QC,datum:$C,on:iD,dispatch:sD,[Symbol.iterator]:oD};function Ux(i){return typeof i=="string"?new ai([[document.querySelector(i)]],[document.documentElement]):new ai([[i]],uS)}function Nm(i,t,n){i.prototype=t.prototype=n,n.constructor=i}function cS(i,t){var n=Object.create(i.prototype);for(var r in t)n[r]=t[r];return n}function Fl(){}var Ul=.7,jc=1/Ul,$s="\\s*([+-]?\\d+)\\s*",Nl="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Fi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",uD=/^#([0-9a-f]{3,8})$/,cD=new RegExp(`^rgb\\(${$s},${$s},${$s}\\)$`),fD=new RegExp(`^rgb\\(${Fi},${Fi},${Fi}\\)$`),hD=new RegExp(`^rgba\\(${$s},${$s},${$s},${Nl}\\)$`),dD=new RegExp(`^rgba\\(${Fi},${Fi},${Fi},${Nl}\\)$`),pD=new RegExp(`^hsl\\(${Nl},${Fi},${Fi}\\)$`),mD=new RegExp(`^hsla\\(${Nl},${Fi},${Fi},${Nl}\\)$`),Nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Nm(Fl,Xr,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:Lx,formatHex:Lx,formatHex8:gD,formatHsl:_D,formatRgb:Ox,toString:Ox});function Lx(){return this.rgb().formatHex()}function gD(){return this.rgb().formatHex8()}function _D(){return fS(this).formatHsl()}function Ox(){return this.rgb().formatRgb()}function Xr(i){var t,n;return i=(i+"").trim().toLowerCase(),(t=uD.exec(i))?(n=t[1].length,t=parseInt(t[1],16),n===6?Px(t):n===3?new Xn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ec(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ec(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=cD.exec(i))?new Xn(t[1],t[2],t[3],1):(t=fD.exec(i))?new Xn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=hD.exec(i))?Ec(t[1],t[2],t[3],t[4]):(t=dD.exec(i))?Ec(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=pD.exec(i))?Ix(t[1],t[2]/100,t[3]/100,1):(t=mD.exec(i))?Ix(t[1],t[2]/100,t[3]/100,t[4]):Nx.hasOwnProperty(i)?Px(Nx[i]):i==="transparent"?new Xn(NaN,NaN,NaN,0):null}function Px(i){return new Xn(i>>16&255,i>>8&255,i&255,1)}function Ec(i,t,n,r){return r<=0&&(i=t=n=NaN),new Xn(i,t,n,r)}function vD(i){return i instanceof Fl||(i=Xr(i)),i?(i=i.rgb(),new Xn(i.r,i.g,i.b,i.opacity)):new Xn}function sm(i,t,n,r){return arguments.length===1?vD(i):new Xn(i,t,n,r??1)}function Xn(i,t,n,r){this.r=+i,this.g=+t,this.b=+n,this.opacity=+r}Nm(Xn,sm,cS(Fl,{brighter(i){return i=i==null?jc:Math.pow(jc,i),new Xn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?Ul:Math.pow(Ul,i),new Xn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Xn(Gr(this.r),Gr(this.g),Gr(this.b),Zc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:zx,formatHex:zx,formatHex8:xD,formatRgb:Bx,toString:Bx}));function zx(){return`#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}`}function xD(){return`#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}${Hr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Bx(){const i=Zc(this.opacity);return`${i===1?"rgb(":"rgba("}${Gr(this.r)}, ${Gr(this.g)}, ${Gr(this.b)}${i===1?")":`, ${i})`}`}function Zc(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Gr(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function Hr(i){return i=Gr(i),(i<16?"0":"")+i.toString(16)}function Ix(i,t,n,r){return r<=0?i=t=n=NaN:n<=0||n>=1?i=t=NaN:t<=0&&(i=NaN),new bi(i,t,n,r)}function fS(i){if(i instanceof bi)return new bi(i.h,i.s,i.l,i.opacity);if(i instanceof Fl||(i=Xr(i)),!i)return new bi;if(i instanceof bi)return i;i=i.rgb();var t=i.r/255,n=i.g/255,r=i.b/255,o=Math.min(t,n,r),u=Math.max(t,n,r),c=NaN,h=u-o,p=(u+o)/2;return h?(t===u?c=(n-r)/h+(n<r)*6:n===u?c=(r-t)/h+2:c=(t-n)/h+4,h/=p<.5?u+o:2-u-o,c*=60):h=p>0&&p<1?0:c,new bi(c,h,p,i.opacity)}function yD(i,t,n,r){return arguments.length===1?fS(i):new bi(i,t,n,r??1)}function bi(i,t,n,r){this.h=+i,this.s=+t,this.l=+n,this.opacity=+r}Nm(bi,yD,cS(Fl,{brighter(i){return i=i==null?jc:Math.pow(jc,i),new bi(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Ul:Math.pow(Ul,i),new bi(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,t=isNaN(i)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,o=2*n-r;return new Xn(rp(i>=240?i-240:i+120,o,r),rp(i,o,r),rp(i<120?i+240:i-120,o,r),this.opacity)},clamp(){return new bi(Fx(this.h),bc(this.s),bc(this.l),Zc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=Zc(this.opacity);return`${i===1?"hsl(":"hsla("}${Fx(this.h)}, ${bc(this.s)*100}%, ${bc(this.l)*100}%${i===1?")":`, ${i})`}`}}));function Fx(i){return i=(i||0)%360,i<0?i+360:i}function bc(i){return Math.max(0,Math.min(1,i||0))}function rp(i,t,n){return(i<60?t+(n-t)*i/60:i<180?n:i<240?t+(n-t)*(240-i)/60:t)*255}const Lm=i=>()=>i;function SD(i,t){return function(n){return i+n*t}}function MD(i,t,n){return i=Math.pow(i,n),t=Math.pow(t,n)-i,n=1/n,function(r){return Math.pow(i+r*t,n)}}function ED(i){return(i=+i)==1?hS:function(t,n){return n-t?MD(t,n,i):Lm(isNaN(t)?n:t)}}function hS(i,t){var n=t-i;return n?SD(i,n):Lm(isNaN(i)?t:i)}const Kc=function i(t){var n=ED(t);function r(o,u){var c=n((o=sm(o)).r,(u=sm(u)).r),h=n(o.g,u.g),p=n(o.b,u.b),d=hS(o.opacity,u.opacity);return function(g){return o.r=c(g),o.g=h(g),o.b=p(g),o.opacity=d(g),o+""}}return r.gamma=i,r}(1);function bD(i,t){t||(t=[]);var n=i?Math.min(t.length,i.length):0,r=t.slice(),o;return function(u){for(o=0;o<n;++o)r[o]=i[o]*(1-u)+t[o]*u;return r}}function TD(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function AD(i,t){var n=t?t.length:0,r=i?Math.min(n,i.length):0,o=new Array(r),u=new Array(n),c;for(c=0;c<r;++c)o[c]=Om(i[c],t[c]);for(;c<n;++c)u[c]=t[c];return function(h){for(c=0;c<r;++c)u[c]=o[c](h);return u}}function wD(i,t){var n=new Date;return i=+i,t=+t,function(r){return n.setTime(i*(1-r)+t*r),n}}function Ei(i,t){return i=+i,t=+t,function(n){return i*(1-n)+t*n}}function RD(i,t){var n={},r={},o;(i===null||typeof i!="object")&&(i={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in i?n[o]=Om(i[o],t[o]):r[o]=t[o];return function(u){for(o in n)r[o]=n[o](u);return r}}var om=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sp=new RegExp(om.source,"g");function CD(i){return function(){return i}}function DD(i){return function(t){return i(t)+""}}function dS(i,t){var n=om.lastIndex=sp.lastIndex=0,r,o,u,c=-1,h=[],p=[];for(i=i+"",t=t+"";(r=om.exec(i))&&(o=sp.exec(t));)(u=o.index)>n&&(u=t.slice(n,u),h[c]?h[c]+=u:h[++c]=u),(r=r[0])===(o=o[0])?h[c]?h[c]+=o:h[++c]=o:(h[++c]=null,p.push({i:c,x:Ei(r,o)})),n=sp.lastIndex;return n<t.length&&(u=t.slice(n),h[c]?h[c]+=u:h[++c]=u),h.length<2?p[0]?DD(p[0].x):CD(t):(t=p.length,function(d){for(var g=0,v;g<t;++g)h[(v=p[g]).i]=v.x(d);return h.join("")})}function Om(i,t){var n=typeof t,r;return t==null||n==="boolean"?Lm(t):(n==="number"?Ei:n==="string"?(r=Xr(t))?(t=r,Kc):dS:t instanceof Xr?Kc:t instanceof Date?wD:TD(t)?bD:Array.isArray(t)?AD:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?RD:Ei)(i,t)}function UD(i,t){return i=+i,t=+t,function(n){return Math.round(i*(1-n)+t*n)}}var Hx=180/Math.PI,lm={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function pS(i,t,n,r,o,u){var c,h,p;return(c=Math.sqrt(i*i+t*t))&&(i/=c,t/=c),(p=i*n+t*r)&&(n-=i*p,r-=t*p),(h=Math.sqrt(n*n+r*r))&&(n/=h,r/=h,p/=h),i*r<t*n&&(i=-i,t=-t,p=-p,c=-c),{translateX:o,translateY:u,rotate:Math.atan2(t,i)*Hx,skewX:Math.atan(p)*Hx,scaleX:c,scaleY:h}}var Tc;function ND(i){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return t.isIdentity?lm:pS(t.a,t.b,t.c,t.d,t.e,t.f)}function LD(i){return i==null||(Tc||(Tc=document.createElementNS("http://www.w3.org/2000/svg","g")),Tc.setAttribute("transform",i),!(i=Tc.transform.baseVal.consolidate()))?lm:(i=i.matrix,pS(i.a,i.b,i.c,i.d,i.e,i.f))}function mS(i,t,n,r){function o(d){return d.length?d.pop()+" ":""}function u(d,g,v,_,x,E){if(d!==v||g!==_){var b=x.push("translate(",null,t,null,n);E.push({i:b-4,x:Ei(d,v)},{i:b-2,x:Ei(g,_)})}else(v||_)&&x.push("translate("+v+t+_+n)}function c(d,g,v,_){d!==g?(d-g>180?g+=360:g-d>180&&(d+=360),_.push({i:v.push(o(v)+"rotate(",null,r)-2,x:Ei(d,g)})):g&&v.push(o(v)+"rotate("+g+r)}function h(d,g,v,_){d!==g?_.push({i:v.push(o(v)+"skewX(",null,r)-2,x:Ei(d,g)}):g&&v.push(o(v)+"skewX("+g+r)}function p(d,g,v,_,x,E){if(d!==v||g!==_){var b=x.push(o(x)+"scale(",null,",",null,")");E.push({i:b-4,x:Ei(d,v)},{i:b-2,x:Ei(g,_)})}else(v!==1||_!==1)&&x.push(o(x)+"scale("+v+","+_+")")}return function(d,g){var v=[],_=[];return d=i(d),g=i(g),u(d.translateX,d.translateY,g.translateX,g.translateY,v,_),c(d.rotate,g.rotate,v,_),h(d.skewX,g.skewX,v,_),p(d.scaleX,d.scaleY,g.scaleX,g.scaleY,v,_),d=g=null,function(x){for(var E=-1,b=_.length,S;++E<b;)v[(S=_[E]).i]=S.x(x);return v.join("")}}}var OD=mS(ND,"px, ","px)","deg)"),PD=mS(LD,", ",")",")"),lo=0,bl=0,vl=0,gS=1e3,Qc,Tl,$c=0,Wr=0,hf=0,Ll=typeof performance=="object"&&performance.now?performance:Date,_S=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Pm(){return Wr||(_S(zD),Wr=Ll.now()+hf)}function zD(){Wr=0}function Jc(){this._call=this._time=this._next=null}Jc.prototype=vS.prototype={constructor:Jc,restart:function(i,t,n){if(typeof i!="function")throw new TypeError("callback is not a function");n=(n==null?Pm():+n)+(t==null?0:+t),!this._next&&Tl!==this&&(Tl?Tl._next=this:Qc=this,Tl=this),this._call=i,this._time=n,um()},stop:function(){this._call&&(this._call=null,this._time=1/0,um())}};function vS(i,t,n){var r=new Jc;return r.restart(i,t,n),r}function BD(){Pm(),++lo;for(var i=Qc,t;i;)(t=Wr-i._time)>=0&&i._call.call(void 0,t),i=i._next;--lo}function Gx(){Wr=($c=Ll.now())+hf,lo=bl=0;try{BD()}finally{lo=0,FD(),Wr=0}}function ID(){var i=Ll.now(),t=i-$c;t>gS&&(hf-=t,$c=i)}function FD(){for(var i,t=Qc,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),i=t,t=t._next):(n=t._next,t._next=null,t=i?i._next=n:Qc=n);Tl=i,um(r)}function um(i){if(!lo){bl&&(bl=clearTimeout(bl));var t=i-Wr;t>24?(i<1/0&&(bl=setTimeout(Gx,i-Ll.now()-hf)),vl&&(vl=clearInterval(vl))):(vl||($c=Ll.now(),vl=setInterval(ID,gS)),lo=1,_S(Gx))}}function Vx(i,t,n){var r=new Jc;return t=t==null?0:+t,r.restart(o=>{r.stop(),i(o+t)},t,n),r}var HD=Qy("start","end","cancel","interrupt"),GD=[],xS=0,kx=1,cm=2,Bc=3,Xx=4,fm=5,Ic=6;function df(i,t,n,r,o,u){var c=i.__transition;if(!c)i.__transition={};else if(n in c)return;VD(i,n,{name:t,index:r,group:o,on:HD,tween:GD,time:u.time,delay:u.delay,duration:u.duration,ease:u.ease,timer:null,state:xS})}function zm(i,t){var n=Ci(i,t);if(n.state>xS)throw new Error("too late; already scheduled");return n}function Hi(i,t){var n=Ci(i,t);if(n.state>Bc)throw new Error("too late; already running");return n}function Ci(i,t){var n=i.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function VD(i,t,n){var r=i.__transition,o;r[t]=n,n.timer=vS(u,0,n.time);function u(d){n.state=kx,n.timer.restart(c,n.delay,n.time),n.delay<=d&&c(d-n.delay)}function c(d){var g,v,_,x;if(n.state!==kx)return p();for(g in r)if(x=r[g],x.name===n.name){if(x.state===Bc)return Vx(c);x.state===Xx?(x.state=Ic,x.timer.stop(),x.on.call("interrupt",i,i.__data__,x.index,x.group),delete r[g]):+g<t&&(x.state=Ic,x.timer.stop(),x.on.call("cancel",i,i.__data__,x.index,x.group),delete r[g])}if(Vx(function(){n.state===Bc&&(n.state=Xx,n.timer.restart(h,n.delay,n.time),h(d))}),n.state=cm,n.on.call("start",i,i.__data__,n.index,n.group),n.state===cm){for(n.state=Bc,o=new Array(_=n.tween.length),g=0,v=-1;g<_;++g)(x=n.tween[g].value.call(i,i.__data__,n.index,n.group))&&(o[++v]=x);o.length=v+1}}function h(d){for(var g=d<n.duration?n.ease.call(null,d/n.duration):(n.timer.restart(p),n.state=fm,1),v=-1,_=o.length;++v<_;)o[v].call(i,g);n.state===fm&&(n.on.call("end",i,i.__data__,n.index,n.group),p())}function p(){n.state=Ic,n.timer.stop(),delete r[t];for(var d in r)return;delete i.__transition}}function kD(i,t){var n=i.__transition,r,o,u=!0,c;if(n){t=t==null?null:t+"";for(c in n){if((r=n[c]).name!==t){u=!1;continue}o=r.state>cm&&r.state<fm,r.state=Ic,r.timer.stop(),r.on.call(o?"interrupt":"cancel",i,i.__data__,r.index,r.group),delete n[c]}u&&delete i.__transition}}function XD(i){return this.each(function(){kD(this,i)})}function WD(i,t){var n,r;return function(){var o=Hi(this,i),u=o.tween;if(u!==n){r=n=u;for(var c=0,h=r.length;c<h;++c)if(r[c].name===t){r=r.slice(),r.splice(c,1);break}}o.tween=r}}function YD(i,t,n){var r,o;if(typeof n!="function")throw new Error;return function(){var u=Hi(this,i),c=u.tween;if(c!==r){o=(r=c).slice();for(var h={name:t,value:n},p=0,d=o.length;p<d;++p)if(o[p].name===t){o[p]=h;break}p===d&&o.push(h)}u.tween=o}}function qD(i,t){var n=this._id;if(i+="",arguments.length<2){for(var r=Ci(this.node(),n).tween,o=0,u=r.length,c;o<u;++o)if((c=r[o]).name===i)return c.value;return null}return this.each((t==null?WD:YD)(n,i,t))}function Bm(i,t,n){var r=i._id;return i.each(function(){var o=Hi(this,r);(o.value||(o.value={}))[t]=n.apply(this,arguments)}),function(o){return Ci(o,r).value[t]}}function yS(i,t){var n;return(typeof t=="number"?Ei:t instanceof Xr?Kc:(n=Xr(t))?(t=n,Kc):dS)(i,t)}function jD(i){return function(){this.removeAttribute(i)}}function ZD(i){return function(){this.removeAttributeNS(i.space,i.local)}}function KD(i,t,n){var r,o=n+"",u;return function(){var c=this.getAttribute(i);return c===o?null:c===r?u:u=t(r=c,n)}}function QD(i,t,n){var r,o=n+"",u;return function(){var c=this.getAttributeNS(i.space,i.local);return c===o?null:c===r?u:u=t(r=c,n)}}function $D(i,t,n){var r,o,u;return function(){var c,h=n(this),p;return h==null?void this.removeAttribute(i):(c=this.getAttribute(i),p=h+"",c===p?null:c===r&&p===o?u:(o=p,u=t(r=c,h)))}}function JD(i,t,n){var r,o,u;return function(){var c,h=n(this),p;return h==null?void this.removeAttributeNS(i.space,i.local):(c=this.getAttributeNS(i.space,i.local),p=h+"",c===p?null:c===r&&p===o?u:(o=p,u=t(r=c,h)))}}function t3(i,t){var n=ff(i),r=n==="transform"?PD:yS;return this.attrTween(i,typeof t=="function"?(n.local?JD:$D)(n,r,Bm(this,"attr."+i,t)):t==null?(n.local?ZD:jD)(n):(n.local?QD:KD)(n,r,t))}function e3(i,t){return function(n){this.setAttribute(i,t.call(this,n))}}function n3(i,t){return function(n){this.setAttributeNS(i.space,i.local,t.call(this,n))}}function i3(i,t){var n,r;function o(){var u=t.apply(this,arguments);return u!==r&&(n=(r=u)&&n3(i,u)),n}return o._value=t,o}function a3(i,t){var n,r;function o(){var u=t.apply(this,arguments);return u!==r&&(n=(r=u)&&e3(i,u)),n}return o._value=t,o}function r3(i,t){var n="attr."+i;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=ff(i);return this.tween(n,(r.local?i3:a3)(r,t))}function s3(i,t){return function(){zm(this,i).delay=+t.apply(this,arguments)}}function o3(i,t){return t=+t,function(){zm(this,i).delay=t}}function l3(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?s3:o3)(t,i)):Ci(this.node(),t).delay}function u3(i,t){return function(){Hi(this,i).duration=+t.apply(this,arguments)}}function c3(i,t){return t=+t,function(){Hi(this,i).duration=t}}function f3(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?u3:c3)(t,i)):Ci(this.node(),t).duration}function h3(i,t){if(typeof t!="function")throw new Error;return function(){Hi(this,i).ease=t}}function d3(i){var t=this._id;return arguments.length?this.each(h3(t,i)):Ci(this.node(),t).ease}function p3(i,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Hi(this,i).ease=n}}function m3(i){if(typeof i!="function")throw new Error;return this.each(p3(this._id,i))}function g3(i){typeof i!="function"&&(i=tS(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var u=t[o],c=u.length,h=r[o]=[],p,d=0;d<c;++d)(p=u[d])&&i.call(p,p.__data__,d,u)&&h.push(p);return new Sa(r,this._parents,this._name,this._id)}function _3(i){if(i._id!==this._id)throw new Error;for(var t=this._groups,n=i._groups,r=t.length,o=n.length,u=Math.min(r,o),c=new Array(r),h=0;h<u;++h)for(var p=t[h],d=n[h],g=p.length,v=c[h]=new Array(g),_,x=0;x<g;++x)(_=p[x]||d[x])&&(v[x]=_);for(;h<r;++h)c[h]=t[h];return new Sa(c,this._parents,this._name,this._id)}function v3(i){return(i+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function x3(i,t,n){var r,o,u=v3(t)?zm:Hi;return function(){var c=u(this,i),h=c.on;h!==r&&(o=(r=h).copy()).on(t,n),c.on=o}}function y3(i,t){var n=this._id;return arguments.length<2?Ci(this.node(),n).on.on(i):this.each(x3(n,i,t))}function S3(i){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==i)return;t&&t.removeChild(this)}}function M3(){return this.on("end.remove",S3(this._id))}function E3(i){var t=this._name,n=this._id;typeof i!="function"&&(i=Dm(i));for(var r=this._groups,o=r.length,u=new Array(o),c=0;c<o;++c)for(var h=r[c],p=h.length,d=u[c]=new Array(p),g,v,_=0;_<p;++_)(g=h[_])&&(v=i.call(g,g.__data__,_,h))&&("__data__"in g&&(v.__data__=g.__data__),d[_]=v,df(d[_],t,n,_,d,Ci(g,n)));return new Sa(u,this._parents,t,n)}function b3(i){var t=this._name,n=this._id;typeof i!="function"&&(i=Jy(i));for(var r=this._groups,o=r.length,u=[],c=[],h=0;h<o;++h)for(var p=r[h],d=p.length,g,v=0;v<d;++v)if(g=p[v]){for(var _=i.call(g,g.__data__,v,p),x,E=Ci(g,n),b=0,S=_.length;b<S;++b)(x=_[b])&&df(x,t,n,b,_,E);u.push(_),c.push(g)}return new Sa(u,c,t,n)}var T3=Il.prototype.constructor;function A3(){return new T3(this._groups,this._parents)}function w3(i,t){var n,r,o;return function(){var u=oo(this,i),c=(this.style.removeProperty(i),oo(this,i));return u===c?null:u===n&&c===r?o:o=t(n=u,r=c)}}function SS(i){return function(){this.style.removeProperty(i)}}function R3(i,t,n){var r,o=n+"",u;return function(){var c=oo(this,i);return c===o?null:c===r?u:u=t(r=c,n)}}function C3(i,t,n){var r,o,u;return function(){var c=oo(this,i),h=n(this),p=h+"";return h==null&&(p=h=(this.style.removeProperty(i),oo(this,i))),c===p?null:c===r&&p===o?u:(o=p,u=t(r=c,h))}}function D3(i,t){var n,r,o,u="style."+t,c="end."+u,h;return function(){var p=Hi(this,i),d=p.on,g=p.value[u]==null?h||(h=SS(t)):void 0;(d!==n||o!==g)&&(r=(n=d).copy()).on(c,o=g),p.on=r}}function U3(i,t,n){var r=(i+="")=="transform"?OD:yS;return t==null?this.styleTween(i,w3(i,r)).on("end.style."+i,SS(i)):typeof t=="function"?this.styleTween(i,C3(i,r,Bm(this,"style."+i,t))).each(D3(this._id,i)):this.styleTween(i,R3(i,r,t),n).on("end.style."+i,null)}function N3(i,t,n){return function(r){this.style.setProperty(i,t.call(this,r),n)}}function L3(i,t,n){var r,o;function u(){var c=t.apply(this,arguments);return c!==o&&(r=(o=c)&&N3(i,c,n)),r}return u._value=t,u}function O3(i,t,n){var r="style."+(i+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,L3(i,t,n??""))}function P3(i){return function(){this.textContent=i}}function z3(i){return function(){var t=i(this);this.textContent=t??""}}function B3(i){return this.tween("text",typeof i=="function"?z3(Bm(this,"text",i)):P3(i==null?"":i+""))}function I3(i){return function(t){this.textContent=i.call(this,t)}}function F3(i){var t,n;function r(){var o=i.apply(this,arguments);return o!==n&&(t=(n=o)&&I3(o)),t}return r._value=i,r}function H3(i){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(i==null)return this.tween(t,null);if(typeof i!="function")throw new Error;return this.tween(t,F3(i))}function G3(){for(var i=this._name,t=this._id,n=MS(),r=this._groups,o=r.length,u=0;u<o;++u)for(var c=r[u],h=c.length,p,d=0;d<h;++d)if(p=c[d]){var g=Ci(p,t);df(p,i,n,d,c,{time:g.time+g.delay+g.duration,delay:0,duration:g.duration,ease:g.ease})}return new Sa(r,this._parents,i,n)}function V3(){var i,t,n=this,r=n._id,o=n.size();return new Promise(function(u,c){var h={value:c},p={value:function(){--o===0&&u()}};n.each(function(){var d=Hi(this,r),g=d.on;g!==i&&(t=(i=g).copy(),t._.cancel.push(h),t._.interrupt.push(h),t._.end.push(p)),d.on=t}),o===0&&u()})}var k3=0;function Sa(i,t,n,r){this._groups=i,this._parents=t,this._name=n,this._id=r}function MS(){return++k3}var fa=Il.prototype;Sa.prototype={constructor:Sa,select:E3,selectAll:b3,selectChild:fa.selectChild,selectChildren:fa.selectChildren,filter:g3,merge:_3,selection:A3,transition:G3,call:fa.call,nodes:fa.nodes,node:fa.node,size:fa.size,empty:fa.empty,each:fa.each,on:y3,attr:t3,attrTween:r3,style:U3,styleTween:O3,text:B3,textTween:H3,remove:M3,tween:qD,delay:l3,duration:f3,ease:d3,easeVarying:m3,end:V3,[Symbol.iterator]:fa[Symbol.iterator]};function X3(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var W3={time:null,delay:0,duration:250,ease:X3};function Y3(i,t){for(var n;!(n=i.__transition)||!(n=n[t]);)if(!(i=i.parentNode))throw new Error(`transition ${t} not found`);return n}function q3(i){var t,n;i instanceof Sa?(t=i._id,i=i._name):(t=MS(),(n=W3).time=Pm(),i=i==null?null:i+"");for(var r=this._groups,o=r.length,u=0;u<o;++u)for(var c=r[u],h=c.length,p,d=0;d<h;++d)(p=c[d])&&df(p,i,t,d,c,n||Y3(p,t));return new Sa(r,this._parents,i,t)}Il.prototype.interrupt=XD;Il.prototype.transition=q3;const hm=Math.PI,dm=2*hm,Pr=1e-6,j3=dm-Pr;function ES(i){this._+=i[0];for(let t=1,n=i.length;t<n;++t)this._+=arguments[t]+i[t]}function Z3(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return ES;const n=10**t;return function(r){this._+=r[0];for(let o=1,u=r.length;o<u;++o)this._+=Math.round(arguments[o]*n)/n+r[o]}}class K3{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?ES:Z3(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,o){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+o}`}bezierCurveTo(t,n,r,o,u,c){this._append`C${+t},${+n},${+r},${+o},${this._x1=+u},${this._y1=+c}`}arcTo(t,n,r,o,u){if(t=+t,n=+n,r=+r,o=+o,u=+u,u<0)throw new Error(`negative radius: ${u}`);let c=this._x1,h=this._y1,p=r-t,d=o-n,g=c-t,v=h-n,_=g*g+v*v;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(_>Pr)if(!(Math.abs(v*p-d*g)>Pr)||!u)this._append`L${this._x1=t},${this._y1=n}`;else{let x=r-c,E=o-h,b=p*p+d*d,S=x*x+E*E,y=Math.sqrt(b),P=Math.sqrt(_),D=u*Math.tan((hm-Math.acos((b+_-S)/(2*y*P)))/2),w=D/P,z=D/y;Math.abs(w-1)>Pr&&this._append`L${t+w*g},${n+w*v}`,this._append`A${u},${u},0,0,${+(v*x>g*E)},${this._x1=t+z*p},${this._y1=n+z*d}`}}arc(t,n,r,o,u,c){if(t=+t,n=+n,r=+r,c=!!c,r<0)throw new Error(`negative radius: ${r}`);let h=r*Math.cos(o),p=r*Math.sin(o),d=t+h,g=n+p,v=1^c,_=c?o-u:u-o;this._x1===null?this._append`M${d},${g}`:(Math.abs(this._x1-d)>Pr||Math.abs(this._y1-g)>Pr)&&this._append`L${d},${g}`,r&&(_<0&&(_=_%dm+dm),_>j3?this._append`A${r},${r},0,1,${v},${t-h},${n-p}A${r},${r},0,1,${v},${this._x1=d},${this._y1=g}`:_>Pr&&this._append`A${r},${r},0,${+(_>=hm)},${v},${this._x1=t+r*Math.cos(u)},${this._y1=n+r*Math.sin(u)}`)}rect(t,n,r,o){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+o}h${-r}Z`}toString(){return this._}}function Q3(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function tf(i,t){if((n=(i=t?i.toExponential(t-1):i.toExponential()).indexOf("e"))<0)return null;var n,r=i.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+i.slice(n+1)]}function uo(i){return i=tf(Math.abs(i)),i?i[1]:NaN}function $3(i,t){return function(n,r){for(var o=n.length,u=[],c=0,h=i[0],p=0;o>0&&h>0&&(p+h+1>r&&(h=Math.max(1,r-p)),u.push(n.substring(o-=h,o+h)),!((p+=h+1)>r));)h=i[c=(c+1)%i.length];return u.reverse().join(t)}}function J3(i){return function(t){return t.replace(/[0-9]/g,function(n){return i[+n]})}}var tU=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ef(i){if(!(t=tU.exec(i)))throw new Error("invalid format: "+i);var t;return new Im({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}ef.prototype=Im.prototype;function Im(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}Im.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function eU(i){t:for(var t=i.length,n=1,r=-1,o;n<t;++n)switch(i[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+i[n])break t;r>0&&(r=0);break}return r>0?i.slice(0,r)+i.slice(o+1):i}var bS;function nU(i,t){var n=tf(i,t);if(!n)return i+"";var r=n[0],o=n[1],u=o-(bS=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,c=r.length;return u===c?r:u>c?r+new Array(u-c+1).join("0"):u>0?r.slice(0,u)+"."+r.slice(u):"0."+new Array(1-u).join("0")+tf(i,Math.max(0,t+u-1))[0]}function Wx(i,t){var n=tf(i,t);if(!n)return i+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const Yx={"%":(i,t)=>(i*100).toFixed(t),b:i=>Math.round(i).toString(2),c:i=>i+"",d:Q3,e:(i,t)=>i.toExponential(t),f:(i,t)=>i.toFixed(t),g:(i,t)=>i.toPrecision(t),o:i=>Math.round(i).toString(8),p:(i,t)=>Wx(i*100,t),r:Wx,s:nU,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function qx(i){return i}var jx=Array.prototype.map,Zx=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function iU(i){var t=i.grouping===void 0||i.thousands===void 0?qx:$3(jx.call(i.grouping,Number),i.thousands+""),n=i.currency===void 0?"":i.currency[0]+"",r=i.currency===void 0?"":i.currency[1]+"",o=i.decimal===void 0?".":i.decimal+"",u=i.numerals===void 0?qx:J3(jx.call(i.numerals,String)),c=i.percent===void 0?"%":i.percent+"",h=i.minus===void 0?"−":i.minus+"",p=i.nan===void 0?"NaN":i.nan+"";function d(v){v=ef(v);var _=v.fill,x=v.align,E=v.sign,b=v.symbol,S=v.zero,y=v.width,P=v.comma,D=v.precision,w=v.trim,z=v.type;z==="n"?(P=!0,z="g"):Yx[z]||(D===void 0&&(D=12),w=!0,z="g"),(S||_==="0"&&x==="=")&&(S=!0,_="0",x="=");var O=b==="$"?n:b==="#"&&/[boxX]/.test(z)?"0"+z.toLowerCase():"",B=b==="$"?r:/[%p]/.test(z)?c:"",W=Yx[z],U=/[defgprs%]/.test(z);D=D===void 0?6:/[gprs]/.test(z)?Math.max(1,Math.min(21,D)):Math.max(0,Math.min(20,D));function R(I){var rt=O,J=B,vt,xt,F;if(z==="c")J=W(I)+J,I="";else{I=+I;var j=I<0||1/I<0;if(I=isNaN(I)?p:W(Math.abs(I),D),w&&(I=eU(I)),j&&+I==0&&E!=="+"&&(j=!1),rt=(j?E==="("?E:h:E==="-"||E==="("?"":E)+rt,J=(z==="s"?Zx[8+bS/3]:"")+J+(j&&E==="("?")":""),U){for(vt=-1,xt=I.length;++vt<xt;)if(F=I.charCodeAt(vt),48>F||F>57){J=(F===46?o+I.slice(vt+1):I.slice(vt))+J,I=I.slice(0,vt);break}}}P&&!S&&(I=t(I,1/0));var q=rt.length+I.length+J.length,Tt=q<y?new Array(y-q+1).join(_):"";switch(P&&S&&(I=t(Tt+I,Tt.length?y-J.length:1/0),Tt=""),x){case"<":I=rt+I+J+Tt;break;case"=":I=rt+Tt+I+J;break;case"^":I=Tt.slice(0,q=Tt.length>>1)+rt+I+J+Tt.slice(q);break;default:I=Tt+rt+I+J;break}return u(I)}return R.toString=function(){return v+""},R}function g(v,_){var x=d((v=ef(v),v.type="f",v)),E=Math.max(-8,Math.min(8,Math.floor(uo(_)/3)))*3,b=Math.pow(10,-E),S=Zx[8+E/3];return function(y){return x(b*y)+S}}return{format:d,formatPrefix:g}}var Ac,TS,AS;aU({thousands:",",grouping:[3],currency:["$",""]});function aU(i){return Ac=iU(i),TS=Ac.format,AS=Ac.formatPrefix,Ac}function rU(i){return Math.max(0,-uo(Math.abs(i)))}function sU(i,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(uo(t)/3)))*3-uo(Math.abs(i)))}function oU(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,uo(t)-uo(i))+1}function wS(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}function lU(i){return function(){return i}}function uU(i){return+i}var Kx=[0,1];function js(i){return i}function pm(i,t){return(t-=i=+i)?function(n){return(n-i)/t}:lU(isNaN(t)?NaN:.5)}function cU(i,t){var n;return i>t&&(n=i,i=t,t=n),function(r){return Math.max(i,Math.min(t,r))}}function fU(i,t,n){var r=i[0],o=i[1],u=t[0],c=t[1];return o<r?(r=pm(o,r),u=n(c,u)):(r=pm(r,o),u=n(u,c)),function(h){return u(r(h))}}function hU(i,t,n){var r=Math.min(i.length,t.length)-1,o=new Array(r),u=new Array(r),c=-1;for(i[r]<i[0]&&(i=i.slice().reverse(),t=t.slice().reverse());++c<r;)o[c]=pm(i[c],i[c+1]),u[c]=n(t[c],t[c+1]);return function(h){var p=jy(i,h,1,r)-1;return u[p](o[p](h))}}function RS(i,t){return t.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function dU(){var i=Kx,t=Kx,n=Om,r,o,u,c=js,h,p,d;function g(){var _=Math.min(i.length,t.length);return c!==js&&(c=cU(i[0],i[_-1])),h=_>2?hU:fU,p=d=null,v}function v(_){return _==null||isNaN(_=+_)?u:(p||(p=h(i.map(r),t,n)))(r(c(_)))}return v.invert=function(_){return c(o((d||(d=h(t,i.map(r),Ei)))(_)))},v.domain=function(_){return arguments.length?(i=Array.from(_,uU),g()):i.slice()},v.range=function(_){return arguments.length?(t=Array.from(_),g()):t.slice()},v.rangeRound=function(_){return t=Array.from(_),n=UD,g()},v.clamp=function(_){return arguments.length?(c=_?!0:js,g()):c!==js},v.interpolate=function(_){return arguments.length?(n=_,g()):n},v.unknown=function(_){return arguments.length?(u=_,v):u},function(_,x){return r=_,o=x,g()}}function CS(){return dU()(js,js)}function pU(i,t,n,r){var o=im(i,t,n),u;switch(r=ef(r??",f"),r.type){case"s":{var c=Math.max(Math.abs(i),Math.abs(t));return r.precision==null&&!isNaN(u=sU(o,c))&&(r.precision=u),AS(r,c)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(u=oU(o,Math.max(Math.abs(i),Math.abs(t))))&&(r.precision=u-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(u=rU(o))&&(r.precision=u-(r.type==="%")*2);break}}return TS(r)}function mU(i){var t=i.domain;return i.ticks=function(n){var r=t();return Zy(r[0],r[r.length-1],n??10)},i.tickFormat=function(n,r){var o=t();return pU(o[0],o[o.length-1],n??10,r)},i.nice=function(n){n==null&&(n=10);var r=t(),o=0,u=r.length-1,c=r[o],h=r[u],p,d,g=10;for(h<c&&(d=c,c=h,h=d,d=o,o=u,u=d);g-- >0;){if(d=so(c,h,n),d===p)return r[o]=c,r[u]=h,t(r);if(d>0)c=Math.floor(c/d)*d,h=Math.ceil(h/d)*d;else if(d<0)c=Math.ceil(c*d)/d,h=Math.floor(h*d)/d;else break;p=d}return i},i}function DS(){var i=CS();return i.copy=function(){return RS(i,DS())},wS.apply(i,arguments),mU(i)}function gU(i,t){i=i.slice();var n=0,r=i.length-1,o=i[n],u=i[r],c;return u<o&&(c=n,n=r,r=c,c=o,o=u,u=c),i[n]=t.floor(o),i[r]=t.ceil(u),i}const op=new Date,lp=new Date;function mn(i,t,n,r){function o(u){return i(u=arguments.length===0?new Date:new Date(+u)),u}return o.floor=u=>(i(u=new Date(+u)),u),o.ceil=u=>(i(u=new Date(u-1)),t(u,1),i(u),u),o.round=u=>{const c=o(u),h=o.ceil(u);return u-c<h-u?c:h},o.offset=(u,c)=>(t(u=new Date(+u),c==null?1:Math.floor(c)),u),o.range=(u,c,h)=>{const p=[];if(u=o.ceil(u),h=h==null?1:Math.floor(h),!(u<c)||!(h>0))return p;let d;do p.push(d=new Date(+u)),t(u,h),i(u);while(d<u&&u<c);return p},o.filter=u=>mn(c=>{if(c>=c)for(;i(c),!u(c);)c.setTime(c-1)},(c,h)=>{if(c>=c)if(h<0)for(;++h<=0;)for(;t(c,-1),!u(c););else for(;--h>=0;)for(;t(c,1),!u(c););}),n&&(o.count=(u,c)=>(op.setTime(+u),lp.setTime(+c),i(op),i(lp),Math.floor(n(op,lp))),o.every=u=>(u=Math.floor(u),!isFinite(u)||!(u>0)?null:u>1?o.filter(r?c=>r(c)%u===0:c=>o.count(0,c)%u===0):o)),o}const nf=mn(()=>{},(i,t)=>{i.setTime(+i+t)},(i,t)=>t-i);nf.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?mn(t=>{t.setTime(Math.floor(t/i)*i)},(t,n)=>{t.setTime(+t+n*i)},(t,n)=>(n-t)/i):nf);nf.range;const ga=1e3,mi=ga*60,_a=mi*60,Ma=_a*24,Fm=Ma*7,Qx=Ma*30,up=Ma*365,Zs=mn(i=>{i.setTime(i-i.getMilliseconds())},(i,t)=>{i.setTime(+i+t*ga)},(i,t)=>(t-i)/ga,i=>i.getUTCSeconds());Zs.range;const Hm=mn(i=>{i.setTime(i-i.getMilliseconds()-i.getSeconds()*ga)},(i,t)=>{i.setTime(+i+t*mi)},(i,t)=>(t-i)/mi,i=>i.getMinutes());Hm.range;const _U=mn(i=>{i.setUTCSeconds(0,0)},(i,t)=>{i.setTime(+i+t*mi)},(i,t)=>(t-i)/mi,i=>i.getUTCMinutes());_U.range;const pf=mn(i=>{i.setTime(i-i.getMilliseconds()-i.getSeconds()*ga-i.getMinutes()*mi)},(i,t)=>{i.setTime(+i+t*_a)},(i,t)=>(t-i)/_a,i=>i.getHours());pf.range;const vU=mn(i=>{i.setUTCMinutes(0,0,0)},(i,t)=>{i.setTime(+i+t*_a)},(i,t)=>(t-i)/_a,i=>i.getUTCHours());vU.range;const Hl=mn(i=>i.setHours(0,0,0,0),(i,t)=>i.setDate(i.getDate()+t),(i,t)=>(t-i-(t.getTimezoneOffset()-i.getTimezoneOffset())*mi)/Ma,i=>i.getDate()-1);Hl.range;const Gm=mn(i=>{i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCDate(i.getUTCDate()+t)},(i,t)=>(t-i)/Ma,i=>i.getUTCDate()-1);Gm.range;const xU=mn(i=>{i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCDate(i.getUTCDate()+t)},(i,t)=>(t-i)/Ma,i=>Math.floor(i/Ma));xU.range;function qr(i){return mn(t=>{t.setDate(t.getDate()-(t.getDay()+7-i)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*mi)/Fm)}const mf=qr(0),af=qr(1),yU=qr(2),SU=qr(3),co=qr(4),MU=qr(5),EU=qr(6);mf.range;af.range;yU.range;SU.range;co.range;MU.range;EU.range;function jr(i){return mn(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-i)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Fm)}const US=jr(0),rf=jr(1),bU=jr(2),TU=jr(3),fo=jr(4),AU=jr(5),wU=jr(6);US.range;rf.range;bU.range;TU.range;fo.range;AU.range;wU.range;const Vm=mn(i=>{i.setDate(1),i.setHours(0,0,0,0)},(i,t)=>{i.setMonth(i.getMonth()+t)},(i,t)=>t.getMonth()-i.getMonth()+(t.getFullYear()-i.getFullYear())*12,i=>i.getMonth());Vm.range;const RU=mn(i=>{i.setUTCDate(1),i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCMonth(i.getUTCMonth()+t)},(i,t)=>t.getUTCMonth()-i.getUTCMonth()+(t.getUTCFullYear()-i.getUTCFullYear())*12,i=>i.getUTCMonth());RU.range;const Ea=mn(i=>{i.setMonth(0,1),i.setHours(0,0,0,0)},(i,t)=>{i.setFullYear(i.getFullYear()+t)},(i,t)=>t.getFullYear()-i.getFullYear(),i=>i.getFullYear());Ea.every=i=>!isFinite(i=Math.floor(i))||!(i>0)?null:mn(t=>{t.setFullYear(Math.floor(t.getFullYear()/i)*i),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*i)});Ea.range;const Yr=mn(i=>{i.setUTCMonth(0,1),i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCFullYear(i.getUTCFullYear()+t)},(i,t)=>t.getUTCFullYear()-i.getUTCFullYear(),i=>i.getUTCFullYear());Yr.every=i=>!isFinite(i=Math.floor(i))||!(i>0)?null:mn(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/i)*i),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*i)});Yr.range;function CU(i,t,n,r,o,u){const c=[[Zs,1,ga],[Zs,5,5*ga],[Zs,15,15*ga],[Zs,30,30*ga],[u,1,mi],[u,5,5*mi],[u,15,15*mi],[u,30,30*mi],[o,1,_a],[o,3,3*_a],[o,6,6*_a],[o,12,12*_a],[r,1,Ma],[r,2,2*Ma],[n,1,Fm],[t,1,Qx],[t,3,3*Qx],[i,1,up]];function h(d,g,v){const _=g<d;_&&([d,g]=[g,d]);const x=v&&typeof v.range=="function"?v:p(d,g,v),E=x?x.range(d,+g+1):[];return _?E.reverse():E}function p(d,g,v){const _=Math.abs(g-d)/v,x=Cm(([,,S])=>S).right(c,_);if(x===c.length)return i.every(im(d/up,g/up,v));if(x===0)return nf.every(Math.max(im(d,g,v),1));const[E,b]=c[_/c[x-1][2]<c[x][2]/_?x-1:x];return E.every(b)}return[h,p]}const[DU,UU]=CU(Ea,Vm,mf,Hl,pf,Hm);function cp(i){if(0<=i.y&&i.y<100){var t=new Date(-1,i.m,i.d,i.H,i.M,i.S,i.L);return t.setFullYear(i.y),t}return new Date(i.y,i.m,i.d,i.H,i.M,i.S,i.L)}function fp(i){if(0<=i.y&&i.y<100){var t=new Date(Date.UTC(-1,i.m,i.d,i.H,i.M,i.S,i.L));return t.setUTCFullYear(i.y),t}return new Date(Date.UTC(i.y,i.m,i.d,i.H,i.M,i.S,i.L))}function xl(i,t,n){return{y:i,m:t,d:n,H:0,M:0,S:0,L:0}}function NU(i){var t=i.dateTime,n=i.date,r=i.time,o=i.periods,u=i.days,c=i.shortDays,h=i.months,p=i.shortMonths,d=yl(o),g=Sl(o),v=yl(u),_=Sl(u),x=yl(c),E=Sl(c),b=yl(h),S=Sl(h),y=yl(p),P=Sl(p),D={a:j,A:q,b:Tt,B:L,c:null,d:iy,e:iy,f:eN,g:fN,G:dN,H:$U,I:JU,j:tN,L:NS,m:nN,M:iN,p:V,q:mt,Q:sy,s:oy,S:aN,u:rN,U:sN,V:oN,w:lN,W:uN,x:null,X:null,y:cN,Y:hN,Z:pN,"%":ry},w={a:$,A:k,b:nt,B:ft,c:null,d:ay,e:ay,f:vN,g:RN,G:DN,H:mN,I:gN,j:_N,L:OS,m:xN,M:yN,p:gt,q:Rt,Q:sy,s:oy,S:SN,u:MN,U:EN,V:bN,w:TN,W:AN,x:null,X:null,y:wN,Y:CN,Z:UN,"%":ry},z={a:R,A:I,b:rt,B:J,c:vt,d:ey,e:ey,f:jU,g:ty,G:Jx,H:ny,I:ny,j:XU,L:qU,m:kU,M:WU,p:U,q:VU,Q:KU,s:QU,S:YU,u:BU,U:IU,V:FU,w:zU,W:HU,x:xt,X:F,y:ty,Y:Jx,Z:GU,"%":ZU};D.x=O(n,D),D.X=O(r,D),D.c=O(t,D),w.x=O(n,w),w.X=O(r,w),w.c=O(t,w);function O(_t,bt){return function(kt){var dt=[],Kt=-1,H=0,Te=_t.length,te,Zt,Xt;for(kt instanceof Date||(kt=new Date(+kt));++Kt<Te;)_t.charCodeAt(Kt)===37&&(dt.push(_t.slice(H,Kt)),(Zt=$x[te=_t.charAt(++Kt)])!=null?te=_t.charAt(++Kt):Zt=te==="e"?" ":"0",(Xt=bt[te])&&(te=Xt(kt,Zt)),dt.push(te),H=Kt+1);return dt.push(_t.slice(H,Kt)),dt.join("")}}function B(_t,bt){return function(kt){var dt=xl(1900,void 0,1),Kt=W(dt,_t,kt+="",0),H,Te;if(Kt!=kt.length)return null;if("Q"in dt)return new Date(dt.Q);if("s"in dt)return new Date(dt.s*1e3+("L"in dt?dt.L:0));if(bt&&!("Z"in dt)&&(dt.Z=0),"p"in dt&&(dt.H=dt.H%12+dt.p*12),dt.m===void 0&&(dt.m="q"in dt?dt.q:0),"V"in dt){if(dt.V<1||dt.V>53)return null;"w"in dt||(dt.w=1),"Z"in dt?(H=fp(xl(dt.y,0,1)),Te=H.getUTCDay(),H=Te>4||Te===0?rf.ceil(H):rf(H),H=Gm.offset(H,(dt.V-1)*7),dt.y=H.getUTCFullYear(),dt.m=H.getUTCMonth(),dt.d=H.getUTCDate()+(dt.w+6)%7):(H=cp(xl(dt.y,0,1)),Te=H.getDay(),H=Te>4||Te===0?af.ceil(H):af(H),H=Hl.offset(H,(dt.V-1)*7),dt.y=H.getFullYear(),dt.m=H.getMonth(),dt.d=H.getDate()+(dt.w+6)%7)}else("W"in dt||"U"in dt)&&("w"in dt||(dt.w="u"in dt?dt.u%7:"W"in dt?1:0),Te="Z"in dt?fp(xl(dt.y,0,1)).getUTCDay():cp(xl(dt.y,0,1)).getDay(),dt.m=0,dt.d="W"in dt?(dt.w+6)%7+dt.W*7-(Te+5)%7:dt.w+dt.U*7-(Te+6)%7);return"Z"in dt?(dt.H+=dt.Z/100|0,dt.M+=dt.Z%100,fp(dt)):cp(dt)}}function W(_t,bt,kt,dt){for(var Kt=0,H=bt.length,Te=kt.length,te,Zt;Kt<H;){if(dt>=Te)return-1;if(te=bt.charCodeAt(Kt++),te===37){if(te=bt.charAt(Kt++),Zt=z[te in $x?bt.charAt(Kt++):te],!Zt||(dt=Zt(_t,kt,dt))<0)return-1}else if(te!=kt.charCodeAt(dt++))return-1}return dt}function U(_t,bt,kt){var dt=d.exec(bt.slice(kt));return dt?(_t.p=g.get(dt[0].toLowerCase()),kt+dt[0].length):-1}function R(_t,bt,kt){var dt=x.exec(bt.slice(kt));return dt?(_t.w=E.get(dt[0].toLowerCase()),kt+dt[0].length):-1}function I(_t,bt,kt){var dt=v.exec(bt.slice(kt));return dt?(_t.w=_.get(dt[0].toLowerCase()),kt+dt[0].length):-1}function rt(_t,bt,kt){var dt=y.exec(bt.slice(kt));return dt?(_t.m=P.get(dt[0].toLowerCase()),kt+dt[0].length):-1}function J(_t,bt,kt){var dt=b.exec(bt.slice(kt));return dt?(_t.m=S.get(dt[0].toLowerCase()),kt+dt[0].length):-1}function vt(_t,bt,kt){return W(_t,t,bt,kt)}function xt(_t,bt,kt){return W(_t,n,bt,kt)}function F(_t,bt,kt){return W(_t,r,bt,kt)}function j(_t){return c[_t.getDay()]}function q(_t){return u[_t.getDay()]}function Tt(_t){return p[_t.getMonth()]}function L(_t){return h[_t.getMonth()]}function V(_t){return o[+(_t.getHours()>=12)]}function mt(_t){return 1+~~(_t.getMonth()/3)}function $(_t){return c[_t.getUTCDay()]}function k(_t){return u[_t.getUTCDay()]}function nt(_t){return p[_t.getUTCMonth()]}function ft(_t){return h[_t.getUTCMonth()]}function gt(_t){return o[+(_t.getUTCHours()>=12)]}function Rt(_t){return 1+~~(_t.getUTCMonth()/3)}return{format:function(_t){var bt=O(_t+="",D);return bt.toString=function(){return _t},bt},parse:function(_t){var bt=B(_t+="",!1);return bt.toString=function(){return _t},bt},utcFormat:function(_t){var bt=O(_t+="",w);return bt.toString=function(){return _t},bt},utcParse:function(_t){var bt=B(_t+="",!0);return bt.toString=function(){return _t},bt}}}var $x={"-":"",_:" ",0:"0"},Mn=/^\s*\d+/,LU=/^%/,OU=/[\\^$*+?|[\]().{}]/g;function Ne(i,t,n){var r=i<0?"-":"",o=(r?-i:i)+"",u=o.length;return r+(u<n?new Array(n-u+1).join(t)+o:o)}function PU(i){return i.replace(OU,"\\$&")}function yl(i){return new RegExp("^(?:"+i.map(PU).join("|")+")","i")}function Sl(i){return new Map(i.map((t,n)=>[t.toLowerCase(),n]))}function zU(i,t,n){var r=Mn.exec(t.slice(n,n+1));return r?(i.w=+r[0],n+r[0].length):-1}function BU(i,t,n){var r=Mn.exec(t.slice(n,n+1));return r?(i.u=+r[0],n+r[0].length):-1}function IU(i,t,n){var r=Mn.exec(t.slice(n,n+2));return r?(i.U=+r[0],n+r[0].length):-1}function FU(i,t,n){var r=Mn.exec(t.slice(n,n+2));return r?(i.V=+r[0],n+r[0].length):-1}function HU(i,t,n){var r=Mn.exec(t.slice(n,n+2));return r?(i.W=+r[0],n+r[0].length):-1}function Jx(i,t,n){var r=Mn.exec(t.slice(n,n+4));return r?(i.y=+r[0],n+r[0].length):-1}function ty(i,t,n){var r=Mn.exec(t.slice(n,n+2));return r?(i.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function GU(i,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(i.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function VU(i,t,n){var r=Mn.exec(t.slice(n,n+1));return r?(i.q=r[0]*3-3,n+r[0].length):-1}function kU(i,t,n){var r=Mn.exec(t.slice(n,n+2));return r?(i.m=r[0]-1,n+r[0].length):-1}function ey(i,t,n){var r=Mn.exec(t.slice(n,n+2));return r?(i.d=+r[0],n+r[0].length):-1}function XU(i,t,n){var r=Mn.exec(t.slice(n,n+3));return r?(i.m=0,i.d=+r[0],n+r[0].length):-1}function ny(i,t,n){var r=Mn.exec(t.slice(n,n+2));return r?(i.H=+r[0],n+r[0].length):-1}function WU(i,t,n){var r=Mn.exec(t.slice(n,n+2));return r?(i.M=+r[0],n+r[0].length):-1}function YU(i,t,n){var r=Mn.exec(t.slice(n,n+2));return r?(i.S=+r[0],n+r[0].length):-1}function qU(i,t,n){var r=Mn.exec(t.slice(n,n+3));return r?(i.L=+r[0],n+r[0].length):-1}function jU(i,t,n){var r=Mn.exec(t.slice(n,n+6));return r?(i.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function ZU(i,t,n){var r=LU.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function KU(i,t,n){var r=Mn.exec(t.slice(n));return r?(i.Q=+r[0],n+r[0].length):-1}function QU(i,t,n){var r=Mn.exec(t.slice(n));return r?(i.s=+r[0],n+r[0].length):-1}function iy(i,t){return Ne(i.getDate(),t,2)}function $U(i,t){return Ne(i.getHours(),t,2)}function JU(i,t){return Ne(i.getHours()%12||12,t,2)}function tN(i,t){return Ne(1+Hl.count(Ea(i),i),t,3)}function NS(i,t){return Ne(i.getMilliseconds(),t,3)}function eN(i,t){return NS(i,t)+"000"}function nN(i,t){return Ne(i.getMonth()+1,t,2)}function iN(i,t){return Ne(i.getMinutes(),t,2)}function aN(i,t){return Ne(i.getSeconds(),t,2)}function rN(i){var t=i.getDay();return t===0?7:t}function sN(i,t){return Ne(mf.count(Ea(i)-1,i),t,2)}function LS(i){var t=i.getDay();return t>=4||t===0?co(i):co.ceil(i)}function oN(i,t){return i=LS(i),Ne(co.count(Ea(i),i)+(Ea(i).getDay()===4),t,2)}function lN(i){return i.getDay()}function uN(i,t){return Ne(af.count(Ea(i)-1,i),t,2)}function cN(i,t){return Ne(i.getFullYear()%100,t,2)}function fN(i,t){return i=LS(i),Ne(i.getFullYear()%100,t,2)}function hN(i,t){return Ne(i.getFullYear()%1e4,t,4)}function dN(i,t){var n=i.getDay();return i=n>=4||n===0?co(i):co.ceil(i),Ne(i.getFullYear()%1e4,t,4)}function pN(i){var t=i.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ne(t/60|0,"0",2)+Ne(t%60,"0",2)}function ay(i,t){return Ne(i.getUTCDate(),t,2)}function mN(i,t){return Ne(i.getUTCHours(),t,2)}function gN(i,t){return Ne(i.getUTCHours()%12||12,t,2)}function _N(i,t){return Ne(1+Gm.count(Yr(i),i),t,3)}function OS(i,t){return Ne(i.getUTCMilliseconds(),t,3)}function vN(i,t){return OS(i,t)+"000"}function xN(i,t){return Ne(i.getUTCMonth()+1,t,2)}function yN(i,t){return Ne(i.getUTCMinutes(),t,2)}function SN(i,t){return Ne(i.getUTCSeconds(),t,2)}function MN(i){var t=i.getUTCDay();return t===0?7:t}function EN(i,t){return Ne(US.count(Yr(i)-1,i),t,2)}function PS(i){var t=i.getUTCDay();return t>=4||t===0?fo(i):fo.ceil(i)}function bN(i,t){return i=PS(i),Ne(fo.count(Yr(i),i)+(Yr(i).getUTCDay()===4),t,2)}function TN(i){return i.getUTCDay()}function AN(i,t){return Ne(rf.count(Yr(i)-1,i),t,2)}function wN(i,t){return Ne(i.getUTCFullYear()%100,t,2)}function RN(i,t){return i=PS(i),Ne(i.getUTCFullYear()%100,t,2)}function CN(i,t){return Ne(i.getUTCFullYear()%1e4,t,4)}function DN(i,t){var n=i.getUTCDay();return i=n>=4||n===0?fo(i):fo.ceil(i),Ne(i.getUTCFullYear()%1e4,t,4)}function UN(){return"+0000"}function ry(){return"%"}function sy(i){return+i}function oy(i){return Math.floor(+i/1e3)}var Xs,zS;NN({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function NN(i){return Xs=NU(i),zS=Xs.format,Xs.parse,Xs.utcFormat,Xs.utcParse,Xs}function LN(i){return new Date(i)}function ON(i){return i instanceof Date?+i:+new Date(+i)}function BS(i,t,n,r,o,u,c,h,p,d){var g=CS(),v=g.invert,_=g.domain,x=d(".%L"),E=d(":%S"),b=d("%I:%M"),S=d("%I %p"),y=d("%a %d"),P=d("%b %d"),D=d("%B"),w=d("%Y");function z(O){return(p(O)<O?x:h(O)<O?E:c(O)<O?b:u(O)<O?S:r(O)<O?o(O)<O?y:P:n(O)<O?D:w)(O)}return g.invert=function(O){return new Date(v(O))},g.domain=function(O){return arguments.length?_(Array.from(O,ON)):_().map(LN)},g.ticks=function(O){var B=_();return i(B[0],B[B.length-1],O??10)},g.tickFormat=function(O,B){return B==null?z:d(B)},g.nice=function(O){var B=_();return(!O||typeof O.range!="function")&&(O=t(B[0],B[B.length-1],O??10)),O?_(gU(B,O)):g},g.copy=function(){return RS(g,BS(i,t,n,r,o,u,c,h,p,d))},g}function PN(){return wS.apply(BS(DU,UU,Ea,Vm,mf,Hl,pf,Hm,Zs,zS).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Ws(i){return function(){return i}}function zN(i){let t=3;return i.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return i},()=>new K3(t)}function BN(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function IS(i){this._context=i}IS.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function IN(i){return new IS(i)}function FN(i){return i[0]}function HN(i){return i[1]}function GN(i,t){var n=Ws(!0),r=null,o=IN,u=null,c=zN(h);i=typeof i=="function"?i:i===void 0?FN:Ws(i),t=typeof t=="function"?t:t===void 0?HN:Ws(t);function h(p){var d,g=(p=BN(p)).length,v,_=!1,x;for(r==null&&(u=o(x=c())),d=0;d<=g;++d)!(d<g&&n(v=p[d],d,p))===_&&((_=!_)?u.lineStart():u.lineEnd()),_&&u.point(+i(v,d,p),+t(v,d,p));if(x)return u=null,x+""||null}return h.x=function(p){return arguments.length?(i=typeof p=="function"?p:Ws(+p),h):i},h.y=function(p){return arguments.length?(t=typeof p=="function"?p:Ws(+p),h):t},h.defined=function(p){return arguments.length?(n=typeof p=="function"?p:Ws(!!p),h):n},h.curve=function(p){return arguments.length?(o=p,r!=null&&(u=o(r)),h):o},h.context=function(p){return arguments.length?(p==null?r=u=null:u=o(r=p),h):r},h}function ly(i){return i<0?-1:1}function uy(i,t,n){var r=i._x1-i._x0,o=t-i._x1,u=(i._y1-i._y0)/(r||o<0&&-0),c=(n-i._y1)/(o||r<0&&-0),h=(u*o+c*r)/(r+o);return(ly(u)+ly(c))*Math.min(Math.abs(u),Math.abs(c),.5*Math.abs(h))||0}function cy(i,t){var n=i._x1-i._x0;return n?(3*(i._y1-i._y0)/n-t)/2:t}function hp(i,t,n){var r=i._x0,o=i._y0,u=i._x1,c=i._y1,h=(u-r)/3;i._context.bezierCurveTo(r+h,o+h*t,u-h,c-h*n,u,c)}function sf(i){this._context=i}sf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:hp(this,this._t0,cy(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var n=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,hp(this,cy(this,n=uy(this,i,t)),n);break;default:hp(this,this._t0,n=uy(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=n}}};Object.create(sf.prototype).point=function(i,t){sf.prototype.point.call(this,t,i)};function VN(i){return new sf(i)}function Al(i,t,n){this.k=i,this.x=t,this.y=n}Al.prototype={constructor:Al,scale:function(i){return i===1?this:new Al(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new Al(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Al.prototype;const kN=({data:i,currentTime:t,colorSequence:n})=>{const r=Yt.useRef(),[o,u]=Yt.useState([]);return Yt.useEffect(()=>{if(!i||!t)return;const h=[...i].sort((b,S)=>new Date(b.creation_time)-new Date(S.creation_time)).map(b=>new Date(b.creation_time)),[p,d]=Pc(h),g=pf.range(p,d,1),E=v2().domain([p,d]).value(b=>b).thresholds(g)(h).map(b=>({date:b.x0,count:b.length})).filter(b=>b.date<=t);u(E)},[i,t]),Yt.useEffect(()=>{if(!i||o.length===0)return;const c={top:20,right:20,bottom:30,left:50},h=600-c.left-c.right,p=200-c.top-c.bottom;let d=Ux(r.current).select("svg");d.empty()&&(d=Ux(r.current).append("svg").attr("width",h+c.left+c.right).attr("height",p+c.top+c.bottom),d.append("defs").append("clipPath").attr("id","clip").append("rect").attr("class","clip-rect").attr("x",0).attr("y",0).attr("width",0).attr("height",p),d.append("g").attr("class","chart-group").attr("transform",`translate(${c.left},${c.top})`));const g=d.select("g.chart-group"),_=[...i].sort((w,z)=>new Date(w.creation_time)-new Date(z.creation_time)).map(w=>new Date(w.creation_time)),x=x2(_),E=wx(_),b=PN().domain([x,E]).range([0,h]),S=DS().domain([0,wx(o,w=>w.count)]).nice().range([p,0]);g.selectAll(".x-axis").remove(),g.selectAll(".y-axis").remove(),g.append("g").attr("class","x-axis").attr("transform",`translate(0,${p})`).call(A2(b).ticks(5).tickSizeOuter(0)).selectAll("text").style("fill","#fff"),g.append("g").attr("class","y-axis").call(w2(S).ticks(5)).selectAll("text").style("fill","#fff");const y=GN().x(w=>b(w.date)).y(w=>S(w.count)).curve(VN);let P=g.select("path.line-path");P.empty()&&(P=g.append("path").attr("class","line-path").attr("fill","none").attr("stroke","#06b6d4").attr("stroke-width",2).attr("clip-path","url(#clip)")),P.datum(o).attr("d",y),d.select("defs").select("rect.clip-rect").transition().duration(2e3).attr("width",h);const D=g.selectAll("circle").data(o,w=>w.date);D.enter().append("circle").attr("cx",w=>b(w.date)).attr("cy",w=>S(w.count)).attr("r",0).attr("fill","#06b6d4").transition().delay(w=>b(w.date)/h*2e3).duration(500).attr("r",2),D.exit().remove()},[o,n,i]),ht.jsxs("div",{className:"w-full h-auto bg-black/50 p-4 rounded-lg border border-cyan-500 shadow-lg mt-4",children:[ht.jsx("h3",{className:"text-white font-bold mb-2",children:"Retweet Bursts"}),ht.jsx("div",{ref:r})]})},XN=i=>{const t=[];for(let o=0;o<i;o++){const u=Math.floor(360/i*o);t.push(`hsl(${u}, 50%, 50%)`)}return t};function fy(i){const t=i.match(/hsl\(\s*(\d+),\s*(\d+)%\s*,\s*(\d+)%\s*\)/);return{h:parseInt(t[1],10),s:parseInt(t[2],10),l:parseInt(t[3],10)}}function WN(i,t,n){const r=i.h+(t.h-i.h)*n,o=i.s+(t.s-i.s)*n,u=i.l+(t.l-i.l)*n;return`hsl(${Math.round(r)}, ${Math.round(o)}%, ${Math.round(u)}%)`}function dp(i,t,n){const r=fy(t),o=fy(n),u=[];for(let c=0;c<i;c++){let h=i===1?0:c/(i-1);u.push(WN(r,o,h))}return u}const hy={default:i=>{const t=[];for(let o=0;o<i;o++){const u=Math.floor(360/i*o);t.push(`hsl(${u}, 50%, 50%)`)}return t},protanopia:i=>dp(i,"hsl(210, 70%, 40%)","hsl(50, 80%, 50%)"),deuteranopia:i=>dp(i,"hsl(260, 70%, 45%)","hsl(20, 80%, 55%)"),tritanopia:i=>dp(i,"hsl(0, 80%, 50%)","hsl(120, 80%, 40%)")},YN=({onSwitch:i})=>{const t=Yt.useRef(null),[n,r]=Yt.useState(!0),[o,u]=Yt.useState(null),[c,h]=Yt.useState(!1),[p,d]=Yt.useState(0),[g,v]=Yt.useState(!1),_=Yt.useRef(null),x=Yt.useRef(null),E=Yt.useRef(null),b=Yt.useRef(null),S=Yt.useRef({x:0,y:0}),y=Yt.useRef({x:0,y:0}),P=Yt.useRef(0),D=Yt.useRef(2e3),w=Yt.useRef([]),z=Yt.useRef({min:null,max:null}),O=Yt.useRef(null),B=Yt.useRef(null),[W,U]=Yt.useState(null),[R,I]=Yt.useState(null),[rt,J]=Yt.useState(1),[vt,xt]=Yt.useState("default"),[F,j]=Yt.useState([]);Yt.useEffect(()=>{r(!0),fetch(`https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_${rt}.json`).then($=>$.json()).then($=>{const k=[...$].sort((ft,gt)=>new Date(ft.creation_time)-new Date(gt.creation_time));I(k);const nt=new Date(k[0].creation_time);u(nt.toLocaleString()),r(!1)}).catch($=>{console.error("Error loading JSON data:",$),r(!1)})},[rt]),Yt.useEffect(()=>{fetch("https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_original_tweets.json").then($=>$.json()).then($=>{const k=$.reduce((nt,ft)=>(nt[ft.platform_post_id]=ft,nt),{});U(k)}).catch($=>{console.error("Error loading original tweet details:",$)})},[]),Yt.useEffect(()=>{if(!R)return;const $=new Py;$.background=new ye(0),x.current=$;const k=new ni(75,window.innerWidth/window.innerHeight,.1,1e3);k.position.z=15,E.current=k;const nt=new qy({antialias:!0});nt.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(nt.domElement),b.current=nt;const ft=st=>{st.preventDefault();const Lt=.05;E.current.position.z+=st.deltaY*Lt,E.current.position.z=Math.max(5,Math.min(50,E.current.position.z))};nt.domElement.addEventListener("wheel",ft,{passive:!1});const gt=new Ys;$.add(gt);const Rt=(st,Lt,Ut=0)=>{const Nt=document.createElement("canvas"),ue=Nt.getContext("2d");Nt.width=256,Nt.height=128,ue.font="12px Arial",ue.fillStyle=`rgba(${Ut>>16&255}, ${Ut>>8&255}, ${Ut&255}, 1.0)`,ue.fillText(st,0,64);const Ct=new Wc(Nt),Gt=new Am({map:Ct}),jt=new By(Gt);return jt.position.set(Lt.x-2,Lt.y+.2,Lt.z),jt.scale.set(5,2.5,1),jt},_t=new ro(1,32,32),bt=new io({color:4886754}),kt=new ii(_t,bt);kt.visible=!0,gt.add(kt),O.current=kt;const dt=Rt("Original Tweet by @roberthabeck",new it(0,0,0),1942002);dt.visible=!0,gt.add(dt),B.current=dt;const Kt=new Date(R[0].creation_time),H=new Date(R[R.length-1].creation_time);z.current={min:Kt,max:H};const Te=XN(70),te=6e4,Zt=[];let Xt=[];for(let st=0;st<R.length;st++){const Lt=R[st],Ut=new Date(Lt.creation_time);if(st===0)Xt.push(Lt);else{const Nt=new Date(R[st-1].creation_time);Ut-Nt>te&&(Zt.push(Xt),Xt=[]),Xt.push(Lt)}}Xt.length>0&&Zt.push(Xt);const ge=[];let Ot=0;Zt.forEach((st,Lt)=>{const Ut=Lt/Zt.length*Math.PI*2;st.forEach((Nt,ue)=>{Ot++;const Ct=new Date(Nt.creation_time),jt=2+(st.length>1?ue/(st.length-1):.5)*10,$t=Math.cos(Ut)*jt,Pt=Math.sin(Ut)*jt,re=.3+parseFloat(Nt.follower_count)/1e6*.7,Oe=new ro(re,32,32),Y=Te[Ot%Te.length],Bt=new io({color:new ye(Y),transparent:!0,opacity:0}),pt=new ii(Oe,Bt);pt.position.set($t,Pt,0),pt.userData={data:Nt,time:Ct,visible:!1};const Et=Rt(Nt.dboes_name,new it($t,Pt,0),16777215);Et.visible=!1;const Vt=ue===0?new it(0,0,0):ge[ge.length-1].node.position,It=new wm({color:new ye(Y),transparent:!0,opacity:0}),le=new gi().setFromPoints([Vt,new it($t,Pt,0)]),Pe=new Fy(le,It);gt.add(pt),gt.add(Et),gt.add(Pe),ge.push({node:pt,label:Et,line:Pe,time:Ct})})}),w.current=ge,u(z.current.min),r(!1);const N=st=>{document.addEventListener("mousemove",T),document.addEventListener("mouseup",tt),S.current.x=st.clientX,S.current.y=st.clientY},T=st=>{const Lt=st.clientX-S.current.x,Ut=st.clientY-S.current.y;S.current.x=st.clientX,S.current.y=st.clientY,y.current.y+=Lt*.01,y.current.x+=Ut*.01},tt=()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",tt)};nt.domElement.addEventListener("mousedown",N);const St=()=>{E.current&&b.current&&(E.current.aspect=window.innerWidth/window.innerHeight,E.current.updateProjectionMatrix(),b.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",St),nt.render($,k);const wt=()=>{gt.rotation.x+=(y.current.x-gt.rotation.x)*.05,gt.rotation.y+=(y.current.y-gt.rotation.y)*.05,b.current&&x.current&&E.current&&b.current.render(x.current,E.current),_.current=requestAnimationFrame(wt)};return _.current=requestAnimationFrame(wt),()=>{window.removeEventListener("resize",St),cancelAnimationFrame(_.current),nt.domElement.removeEventListener("mousedown",N),nt.domElement.removeEventListener("wheel",ft),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",tt),t.current&&nt.domElement&&t.current.removeChild(nt.domElement),_t.dispose(),bt.dispose(),ge.forEach(st=>{st.node.geometry&&st.node.geometry.dispose(),st.node.material&&st.node.material.dispose(),st.line.geometry&&st.line.geometry.dispose(),st.line.material&&st.line.material.dispose()})}},[R]),Yt.useEffect(()=>{let $;return c&&(P.current=Date.now(),O.current&&(O.current.visible=!0),B.current&&(B.current.visible=!0),$=setInterval(()=>{const{min:k,max:nt}=z.current;if(!k||!nt)return;const gt=(Date.now()-P.current)*D.current,Rt=new Date(k.getTime()+gt),_t=nt.getTime()-k.getTime(),bt=Rt.getTime()-k.getTime(),kt=Math.min(bt/_t*100,100);u(Rt),d(kt),w.current.forEach(dt=>{if(Rt>=dt.time&&!dt.node.userData.visible){dt.node.material.opacity=1,dt.label.visible=!0,dt.line.material.opacity=.7,dt.node.userData.visible=!0;const Kt=new it(1.5,1.5,1.5);dt.node.scale.copy(Kt),setTimeout(()=>{dt.node.scale.set(1,1,1)},300)}}),Rt>=nt&&(h(!1),clearInterval($))},100)),()=>{$&&clearInterval($)}},[c]),Yt.useEffect(()=>{if(!R)return;const $=new Gy,k=new Se,nt=ft=>{k.x=ft.clientX/window.innerWidth*2-1,k.y=-(ft.clientY/window.innerHeight)*2+1,$.setFromCamera(k,E.current);const gt=w.current.map(_t=>_t.node),Rt=$.intersectObjects(gt);if(Rt.length>0){const _t=Rt[0].object;w.current.forEach(bt=>{bt.node===_t?(bt.node.material.opacity=1,bt.label.material&&(bt.label.material.opacity=1)):(bt.node.material.opacity=.3,bt.label.material&&(bt.label.material.opacity=.3))})}else w.current.forEach(_t=>{_t.node.userData.visible?(_t.node.material.opacity=1,_t.label.material&&(_t.label.material.opacity=1)):(_t.node.material.opacity=0,_t.label.material&&(_t.label.material.opacity=0))})};return window.addEventListener("mousemove",nt),()=>{window.removeEventListener("mousemove",nt)}},[R]),Yt.useEffect(()=>{O.current&&B.current&&(O.current.visible=!0,B.current.visible=!0)},[rt]);const q=()=>{c?h(!1):(p>=100&&(w.current.forEach($=>{$.node.material.opacity=0,$.label.visible=!1,$.line.material.opacity=0,$.node.userData.visible=!1}),u(z.current.min),d(0)),h(!0))};Yt.useEffect(()=>{var $;if(R&&W&&(($=R[0])!=null&&$.shared_post_id)&&B.current){const k=R[0].shared_post_id,nt=W[k];if(nt){const gt=`Original Tweet by @${nt.platform_post_owner_name}`,Rt=document.createElement("canvas"),_t=Rt.getContext("2d");Rt.width=256,Rt.height=128,_t.font="12px Arial",_t.fillStyle="rgba(29,161,242,1.0)",_t.fillText(gt,0,64);const bt=new Wc(Rt);B.current.material.map=bt,B.current.material.needsUpdate=!0}}},[R,W]),Yt.useEffect(()=>{if(w.current.length){const $=w.current.length,k=hy[vt]($);w.current.forEach((nt,ft)=>{const gt=new ye(k[ft%k.length]);nt.node.material.color.set(gt),nt.line.material.color.set(gt)})}},[vt]);const Tt=[{id:1,label:"Attention Please"},{id:2,label:"Conservatives serve Europe"},{id:3,label:"Hope for Tomorrow"},{id:4,label:"Election Allegations"},{id:5,label:"Catalyst for Change"},{id:6,label:"Show Your Colors"},{id:7,label:"Advent Interrupted"},{id:8,label:"For Reasons"},{id:9,label:"Suspending Documentation"},{id:10,label:"Tax Relief"},{id:11,label:"Coalition Opportunity"},{id:12,label:"Small Shifts, Big Impact"},{id:13,label:"Voting Paradox"},{id:14,label:"Economic Turnaround Now"},{id:15,label:""},{id:16,label:""},{id:17,label:""},{id:18,label:""},{id:19,label:""},{id:20,label:""}],mt=`linear-gradient(to right, ${hy[vt](7).join(", ")})`;return ht.jsxs("div",{className:"w-full h-screen relative",children:[ht.jsx("div",{ref:t,className:"w-full h-full"}),ht.jsxs("div",{className:"absolute top-10 left-10 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg transition duration-300 ease-in-out",children:[ht.jsx("div",{className:"text-lg font-bold mb-2 text-white",children:"Retweet Simulation"}),ht.jsxs("div",{className:"mb-2 text-white",children:["Current Time: ",o?o.toLocaleString():""]}),ht.jsx("div",{className:"w-64 h-2 bg-gray-800 rounded-full",children:ht.jsx("div",{className:"h-full bg-cyan-500 rounded-full",style:{width:`${p}%`}})}),ht.jsx("div",{className:"mt-2 text-sm text-white",children:"Original tweet by @roberthabeck being retweeted by multiple accounts"})]}),ht.jsxs("div",{className:"absolute right-20 top-[300px] p-4 text-right",children:[ht.jsx("div",{className:"mt-2 text-xl text-white",children:"Select a tweet:"}),ht.jsx("div",{className:"text-cyan-500 flex flex-col",children:Tt.map($=>ht.jsx("span",{onClick:()=>J($.id),className:`cursor-pointer mb-2 ${rt===$.id?"text-3xl":"text-base"}`,children:$.label},$.id))})]}),ht.jsxs("div",{className:"absolute right-20 top-10 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg transition duration-300 ease-in-out",children:[ht.jsx("div",{className:"text-lg font-bold mb-2 text-white",children:"Color Scheme"}),ht.jsxs("div",{className:"text-sm text-white",children:[ht.jsxs("div",{className:"mb-3",children:[ht.jsx("div",{className:"mb-3",children:ht.jsxs("select",{value:vt,onChange:$=>xt($.target.value),className:"p-2 bg-gray-800 text-white rounded",children:[ht.jsx("option",{value:"default",children:"Default"}),ht.jsx("option",{value:"protanopia",children:"Protanopia-friendly"}),ht.jsx("option",{value:"deuteranopia",children:"Deuteranopia-friendly"}),ht.jsx("option",{value:"tritanopia",children:"Tritanopia-friendly"})]})}),ht.jsx("div",{className:"w-full h-4 rounded",style:{background:mt}}),ht.jsx("p",{className:"mt-1",children:"Earliest → Latest"})]}),ht.jsxs("div",{children:[ht.jsx("p",{className:"text-lg font-bold mb-2 text-white",children:"Node Size"}),ht.jsxs("div",{className:"flex items-center space-x-2",children:[ht.jsx("div",{className:"w-4 h-4 bg-white rounded-full border border-cyan-500"}),ht.jsx("span",{children:"Low Follower Count"})]}),ht.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[ht.jsx("div",{className:"w-8 h-8 bg-white rounded-full border border-cyan-500"}),ht.jsx("span",{children:"High Follower Count"})]})]})]})]}),ht.jsx("div",{className:"absolute bottom-20 left-60",children:ht.jsx("button",{onClick:i,className:`w-124 bg-black text-white font-bold py-3 px-6 rounded-lg border border-cyan-500 shadow-lg transition duration-300 ease-in-out ${c?"hover:bg-gray-900":""}`,children:c?"Go back to Circular Viz!":"Switch Simulation: Circular"})}),ht.jsx("div",{className:"absolute bottom-80 left-10",children:ht.jsx(kN,{data:R,currentTime:o,colorSequence:F})}),ht.jsx("div",{className:"absolute bottom-20 left-10",children:ht.jsx("button",{onClick:q,className:`w-32 bg-black text-white font-bold py-3 px-6 rounded-lg border border-cyan-500 shadow-lg transition duration-300 ease-in-out ${c?"":"hover:bg-gray-900"}`,children:c?"Pause":"Play"})}),ht.jsx("div",{className:"absolute bottom-60 right-20",children:ht.jsx("button",{onClick:()=>v(!g),className:"bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center",children:"i"})}),g&&ht.jsx("div",{className:"absolute bottom-80 right-28 -mb-5 -mr-7",children:ht.jsxs("div",{className:"relative",children:[ht.jsx("div",{className:"absolute -bottom-3 left-80 -ml-5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-cyan-500"}),ht.jsx("div",{className:"w-80 p-4 bg-black border border-cyan-500 rounded-lg text-sm text-white",children:ht.jsx("p",{children:"This visualization shows how a tweet spreads through retweets. Reteet Bursts visual uses a simple line chart that shows retweet counts by the hour, revealing “bursts” of activity over time. Network visual displays interactive 3D views where each sphere represents a retweet—its size shows the tweet’s reach and the color scheme indicates when it was shared. You can play, pause, zoom, and rotate the scene to explore how the original tweet sparks conversation across the network."})})]})}),ht.jsxs("div",{className:"absolute bottom-10 right-20 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg transition duration-300 ease-in-out",children:[ht.jsx("div",{className:"text-lg font-bold text-white mb-2",children:"Instructions"}),ht.jsxs("div",{className:"text-sm text-white space-y-2",children:[ht.jsxs("div",{className:"flex items-center",children:[ht.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-cyan-500 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 4a7 7 0 017 7c0 1.93-.77 3.68-2.01 4.95l4.24 4.24a1 1 0 01-1.42 1.42l-4.24-4.24A7 7 0 1111 4z"})}),ht.jsx("span",{children:"Zoom in/out using mouse wheel"})]}),ht.jsxs("div",{className:"flex items-center",children:[ht.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-cyan-500 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.75 3.75l9 4.5-4.5 9-9-4.5 4.5-9z"})}),ht.jsx("span",{children:"Select tweet titles from right panel"})]}),ht.jsxs("div",{className:"flex items-center",children:[ht.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-cyan-500 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 10a3 3 0 11-6 0 3 3 0 016 0z"}),ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 10c0 3.866-3.134 7-7 7H7l-4 4V3c0-1.657 1.343-3 3-3h8c3.866 0 7 3.134 7 7z"})]}),ht.jsx("span",{children:"Choose color scheme (normal & color blind)"})]}),ht.jsxs("div",{className:"flex items-center",children:[ht.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-cyan-500 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ht.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14.752 11.168l-5.197-3.033A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.033a1 1 0 000-1.664z"})}),ht.jsx("span",{children:"Click Play to start simulation"})]})]})]})]})};function qN(){const[i,t]=Yt.useState("circular"),n=()=>{t(r=>r==="circular"?"network":"circular")};return ht.jsx("div",{className:"flex flex-col-reverse md:flex-row items-center md:items-start min-h-screen",children:i==="circular"?ht.jsx(a2,{onSwitch:n}):ht.jsx(YN,{onSwitch:n})})}KE.createRoot(document.getElementById("root")).render(ht.jsx(Yt.StrictMode,{children:ht.jsx(qN,{})}));
