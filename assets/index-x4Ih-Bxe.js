(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Md={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function YE(){if(xv)return dl;xv=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:i,type:r,key:u,ref:o!==void 0?o:null,props:c}}return dl.Fragment=t,dl.jsx=n,dl.jsxs=n,dl}var yv;function qE(){return yv||(yv=1,Md.exports=YE()),Md.exports}var ot=qE(),Ed={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function jE(){if(Sv)return pe;Sv=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(C,nt,At){this.props=C,this.context=nt,this.refs=b,this.updater=At||y}S.prototype.isReactComponent={},S.prototype.setState=function(C,nt){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,nt,"setState")},S.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function x(){}x.prototype=S.prototype;function P(C,nt,At){this.props=C,this.context=nt,this.refs=b,this.updater=At||y}var N=P.prototype=new x;N.constructor=P,E(N,S.prototype),N.isPureReactComponent=!0;var D=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function B(C,nt,At,Ct,W,xt){return At=xt.ref,{$$typeof:i,type:C,key:nt,ref:At!==void 0?At:null,props:xt}}function X(C,nt){return B(C.type,nt,void 0,void 0,void 0,C.props)}function U(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function R(C){var nt={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(At){return nt[At]})}var I=/\/+/g;function Y(C,nt){return typeof C=="object"&&C!==null&&C.key!=null?R(""+C.key):nt.toString(36)}function et(){}function gt(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(et,et):(C.status="pending",C.then(function(nt){C.status==="pending"&&(C.status="fulfilled",C.value=nt)},function(nt){C.status==="pending"&&(C.status="rejected",C.reason=nt)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function dt(C,nt,At,Ct,W){var xt=typeof C;(xt==="undefined"||xt==="boolean")&&(C=null);var St=!1;if(C===null)St=!0;else switch(xt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(C.$$typeof){case i:case t:St=!0;break;case g:return St=C._init,dt(St(C._payload),nt,At,Ct,W)}}if(St)return W=W(C),St=Ct===""?"."+Y(C,0):Ct,D(W)?(At="",St!=null&&(At=St.replace(I,"$&/")+"/"),dt(W,nt,At,"",function(pt){return pt})):W!=null&&(U(W)&&(W=X(W,At+(W.key==null||C&&C.key===W.key?"":(""+W.key).replace(I,"$&/")+"/")+St)),nt.push(W)),1;St=0;var ct=Ct===""?".":Ct+":";if(D(C))for(var Ut=0;Ut<C.length;Ut++)Ct=C[Ut],xt=ct+Y(Ct,Ut),St+=dt(Ct,nt,At,xt,W);else if(Ut=_(C),typeof Ut=="function")for(C=Ut.call(C),Ut=0;!(Ct=C.next()).done;)Ct=Ct.value,xt=ct+Y(Ct,Ut++),St+=dt(Ct,nt,At,xt,W);else if(xt==="object"){if(typeof C.then=="function")return dt(gt(C),nt,At,Ct,W);throw nt=String(C),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function F(C,nt,At){if(C==null)return C;var Ct=[],W=0;return dt(C,Ct,"","",function(xt){return nt.call(At,xt,W++)}),Ct}function Z(C){if(C._status===-1){var nt=C._result;nt=nt(),nt.then(function(At){(C._status===0||C._status===-1)&&(C._status=1,C._result=At)},function(At){(C._status===0||C._status===-1)&&(C._status=2,C._result=At)}),C._status===-1&&(C._status=0,C._result=nt)}if(C._status===1)return C._result.default;throw C._result}var q=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function ht(){}return pe.Children={map:F,forEach:function(C,nt,At){F(C,function(){nt.apply(this,arguments)},At)},count:function(C){var nt=0;return F(C,function(){nt++}),nt},toArray:function(C){return F(C,function(nt){return nt})||[]},only:function(C){if(!U(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},pe.Component=S,pe.Fragment=n,pe.Profiler=o,pe.PureComponent=P,pe.StrictMode=r,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,pe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return G.H.useMemoCache(C)}},pe.cache=function(C){return function(){return C.apply(null,arguments)}},pe.cloneElement=function(C,nt,At){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Ct=E({},C.props),W=C.key,xt=void 0;if(nt!=null)for(St in nt.ref!==void 0&&(xt=void 0),nt.key!==void 0&&(W=""+nt.key),nt)!z.call(nt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&nt.ref===void 0||(Ct[St]=nt[St]);var St=arguments.length-2;if(St===1)Ct.children=At;else if(1<St){for(var ct=Array(St),Ut=0;Ut<St;Ut++)ct[Ut]=arguments[Ut+2];Ct.children=ct}return B(C.type,W,void 0,void 0,xt,Ct)},pe.createContext=function(C){return C={$$typeof:u,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},pe.createElement=function(C,nt,At){var Ct,W={},xt=null;if(nt!=null)for(Ct in nt.key!==void 0&&(xt=""+nt.key),nt)z.call(nt,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(W[Ct]=nt[Ct]);var St=arguments.length-2;if(St===1)W.children=At;else if(1<St){for(var ct=Array(St),Ut=0;Ut<St;Ut++)ct[Ut]=arguments[Ut+2];W.children=ct}if(C&&C.defaultProps)for(Ct in St=C.defaultProps,St)W[Ct]===void 0&&(W[Ct]=St[Ct]);return B(C,xt,void 0,void 0,null,W)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(C){return{$$typeof:h,render:C}},pe.isValidElement=U,pe.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:Z}},pe.memo=function(C,nt){return{$$typeof:d,type:C,compare:nt===void 0?null:nt}},pe.startTransition=function(C){var nt=G.T,At={};G.T=At;try{var Ct=C(),W=G.S;W!==null&&W(At,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(ht,q)}catch(xt){q(xt)}finally{G.T=nt}},pe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},pe.use=function(C){return G.H.use(C)},pe.useActionState=function(C,nt,At){return G.H.useActionState(C,nt,At)},pe.useCallback=function(C,nt){return G.H.useCallback(C,nt)},pe.useContext=function(C){return G.H.useContext(C)},pe.useDebugValue=function(){},pe.useDeferredValue=function(C,nt){return G.H.useDeferredValue(C,nt)},pe.useEffect=function(C,nt,At){var Ct=G.H;if(typeof At=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Ct.useEffect(C,nt)},pe.useId=function(){return G.H.useId()},pe.useImperativeHandle=function(C,nt,At){return G.H.useImperativeHandle(C,nt,At)},pe.useInsertionEffect=function(C,nt){return G.H.useInsertionEffect(C,nt)},pe.useLayoutEffect=function(C,nt){return G.H.useLayoutEffect(C,nt)},pe.useMemo=function(C,nt){return G.H.useMemo(C,nt)},pe.useOptimistic=function(C,nt){return G.H.useOptimistic(C,nt)},pe.useReducer=function(C,nt,At){return G.H.useReducer(C,nt,At)},pe.useRef=function(C){return G.H.useRef(C)},pe.useState=function(C){return G.H.useState(C)},pe.useSyncExternalStore=function(C,nt,At){return G.H.useSyncExternalStore(C,nt,At)},pe.useTransition=function(){return G.H.useTransition()},pe.version="19.1.0",pe}var Mv;function vm(){return Mv||(Mv=1,Ed.exports=jE()),Ed.exports}var jt=vm(),bd={exports:{}},pl={},Td={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function ZE(){return Ev||(Ev=1,function(i){function t(F,Z){var q=F.length;F.push(Z);t:for(;0<q;){var ht=q-1>>>1,C=F[ht];if(0<o(C,Z))F[ht]=Z,F[q]=C,q=ht;else break t}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Z=F[0],q=F.pop();if(q!==Z){F[0]=q;t:for(var ht=0,C=F.length,nt=C>>>1;ht<nt;){var At=2*(ht+1)-1,Ct=F[At],W=At+1,xt=F[W];if(0>o(Ct,q))W<C&&0>o(xt,Ct)?(F[ht]=xt,F[W]=q,ht=W):(F[ht]=Ct,F[At]=q,ht=At);else if(W<C&&0>o(xt,q))F[ht]=xt,F[W]=q,ht=W;else break t}}return Z}function o(F,Z){var q=F.sortIndex-Z.sortIndex;return q!==0?q:F.id-Z.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,v=null,_=3,y=!1,E=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var Z=n(d);Z!==null;){if(Z.callback===null)r(d);else if(Z.startTime<=F)r(d),Z.sortIndex=Z.expirationTime,t(p,Z);else break;Z=n(d)}}function G(F){if(b=!1,D(F),!E)if(n(p)!==null)E=!0,z||(z=!0,Y());else{var Z=n(d);Z!==null&&dt(G,Z.startTime-F)}}var z=!1,B=-1,X=5,U=-1;function R(){return S?!0:!(i.unstable_now()-U<X)}function I(){if(S=!1,z){var F=i.unstable_now();U=F;var Z=!0;try{t:{E=!1,b&&(b=!1,P(B),B=-1),y=!0;var q=_;try{e:{for(D(F),v=n(p);v!==null&&!(v.expirationTime>F&&R());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,_=v.priorityLevel;var C=ht(v.expirationTime<=F);if(F=i.unstable_now(),typeof C=="function"){v.callback=C,D(F),Z=!0;break e}v===n(p)&&r(p),D(F)}else r(p);v=n(p)}if(v!==null)Z=!0;else{var nt=n(d);nt!==null&&dt(G,nt.startTime-F),Z=!1}}break t}finally{v=null,_=q,y=!1}Z=void 0}}finally{Z?Y():z=!1}}}var Y;if(typeof N=="function")Y=function(){N(I)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,gt=et.port2;et.port1.onmessage=I,Y=function(){gt.postMessage(null)}}else Y=function(){x(I,0)};function dt(F,Z){B=x(function(){F(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(F){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var q=_;_=Z;try{return F()}finally{_=q}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(F,Z){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=_;_=F;try{return Z()}finally{_=q}},i.unstable_scheduleCallback=function(F,Z,q){var ht=i.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ht+q:ht):q=ht,F){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=q+C,F={id:g++,callback:Z,priorityLevel:F,startTime:q,expirationTime:C,sortIndex:-1},q>ht?(F.sortIndex=q,t(d,F),n(p)===null&&F===n(d)&&(b?(P(B),B=-1):b=!0,dt(G,q-ht))):(F.sortIndex=C,t(p,F),E||y||(E=!0,z||(z=!0,Y()))),F},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(F){var Z=_;return function(){var q=_;_=Z;try{return F.apply(this,arguments)}finally{_=q}}}}(Ad)),Ad}var bv;function KE(){return bv||(bv=1,Td.exports=ZE()),Td.exports}var wd={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function QE(){if(Tv)return Pn;Tv=1;var i=vm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},Pn.flushSync=function(p){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=d,r.p=g,r.d.f()}},Pn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},Pn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Pn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Pn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},Pn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Pn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},Pn.requestFormReset=function(p){r.d.r(p)},Pn.unstable_batchedUpdates=function(p,d){return p(d)},Pn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Pn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Pn.version="19.1.0",Pn}var Av;function $E(){if(Av)return wd.exports;Av=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),wd.exports=QE(),wd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function JE(){if(wv)return pl;wv=1;var i=KE(),t=vm(),n=$E();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,s=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(s=a.return),e=a.return;while(e)}return a.tag===3?s:null}function u(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function p(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(r(188));return a!==e?null:e}for(var s=e,l=a;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),e;if(m===l)return h(f),a;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,A=f.child;A;){if(A===s){M=!0,s=f,l=m;break}if(A===l){M=!0,l=f,s=m;break}A=A.sibling}if(!M){for(A=m.child;A;){if(A===s){M=!0,s=m,l=f;break}if(A===l){M=!0,l=m,s=f;break}A=A.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:a}function d(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=d(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case G:return"Suspense";case z:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case N:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case D:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return a=e.displayName||null,a!==null?a:gt(e.type)||"Memo";case X:a=e._payload,e=e._init;try{return gt(e(a))}catch{}}return null}var dt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ht=[],C=-1;function nt(e){return{current:e}}function At(e){0>C||(e.current=ht[C],ht[C]=null,C--)}function Ct(e,a){C++,ht[C]=e.current,e.current=a}var W=nt(null),xt=nt(null),St=nt(null),ct=nt(null);function Ut(e,a){switch(Ct(St,a),Ct(xt,e),Ct(W,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?q_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=q_(a),e=j_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}At(W),Ct(W,e)}function pt(){At(W),At(xt),At(St)}function Rt(e){e.memoizedState!==null&&Ct(ct,e);var a=W.current,s=j_(a,e.type);a!==s&&(Ct(xt,e),Ct(W,s))}function mt(e){xt.current===e&&(At(W),At(xt)),ct.current===e&&(At(ct),ll._currentValue=q)}var j=Object.prototype.hasOwnProperty,wt=i.unstable_scheduleCallback,L=i.unstable_cancelCallback,de=i.unstable_shouldYield,zt=i.unstable_requestPaint,It=i.unstable_now,kt=i.unstable_getCurrentPriorityLevel,xe=i.unstable_ImmediatePriority,Zt=i.unstable_UserBlockingPriority,O=i.unstable_NormalPriority,T=i.unstable_LowPriority,at=i.unstable_IdlePriority,Mt=i.log,Dt=i.unstable_setDisableYieldValue,_t=null,Ht=null;function yt(e){if(typeof Mt=="function"&&Dt(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(_t,e)}catch{}}var Lt=Math.clz32?Math.clz32:Wt,ue=Math.log,Nt=Math.LN2;function Wt(e){return e>>>=0,e===0?32:31-(ue(e)/Nt|0)|0}var Jt=256,te=4194304;function Vt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ft(e,a,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=Vt(l):(M&=A,M!==0?f=Vt(M):s||(s=A&~e,s!==0&&(f=Vt(s))))):(A=l&~m,A!==0?f=Vt(A):M!==0?f=Vt(M):s||(s=l&~e,s!==0&&(f=Vt(s)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,s=a&-a,m>=s||m===32&&(s&4194048)!==0)?a:f}function Kt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function he(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var e=Jt;return Jt<<=1,(Jt&4194048)===0&&(Jt=256),e}function Pt(){var e=te;return te<<=1,(te&62914560)===0&&(te=4194304),e}function ft(e){for(var a=[],s=0;31>s;s++)a.push(e);return a}function Et(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gt(e,a,s,l,f,m){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,it=e.hiddenUpdates;for(s=M&~s;0<s;){var vt=31-Lt(s),Tt=1<<vt;A[vt]=0,H[vt]=-1;var rt=it[vt];if(rt!==null)for(it[vt]=null,vt=0;vt<rt.length;vt++){var st=rt[vt];st!==null&&(st.lane&=-536870913)}s&=~Tt}l!==0&&Bt(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~a))}function Bt(e,a,s){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Lt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function oe(e,a){var s=e.entangledLanes|=a;for(e=e.entanglements;s;){var l=31-Lt(s),f=1<<l;f&a|e[l]&a&&(e[l]|=a),s&=~f}}function ke(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Je(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function we(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:dv(e.type))}function Dn(e,a){var s=Z.p;try{return Z.p=e,a()}finally{Z.p=s}}var ln=Math.random().toString(36).slice(2),je="__reactFiber$"+ln,an="__reactProps$"+ln,Un="__reactContainer$"+ln,Xi="__reactEvents$"+ln,ts="__reactListeners$"+ln,dr="__reactHandles$"+ln,pr="__reactResources$"+ln,Ra="__reactMarker$"+ln;function Ca(e){delete e[je],delete e[an],delete e[Xi],delete e[ts],delete e[dr]}function Wi(e){var a=e[je];if(a)return a;for(var s=e.parentNode;s;){if(a=s[Un]||s[je]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(e=$_(e);e!==null;){if(s=e[je])return s;e=$_(e)}return a}e=s,s=e.parentNode}return null}function Yi(e){if(e=e[je]||e[Un]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function mr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function Da(e){var a=e[pr];return a||(a=e[pr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function cn(e){e[Ra]=!0}var Yl=new Set,ql={};function qi(e,a){w(e,a),w(e+"Capture",a)}function w(e,a){for(ql[e]=a,e=0;e<a.length;e++)Yl.add(a[e])}var Q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},ut={};function $(e){return j.call(ut,e)?!0:j.call(lt,e)?!1:Q.test(e)?ut[e]=!0:(lt[e]=!0,!1)}function Ot(e,a,s){if($(a))if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+s)}}function Xt(e,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+s)}}function Yt(e,a,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(a,s,""+l)}}var Qt,le;function ie(e){if(Qt===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);Qt=a&&a[1]||"",le=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+le}var ne=!1;function ye(e,a){if(!e||ne)return"";ne=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(st){var rt=st}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(st){rt=st}e.call(Tt.prototype)}}else{try{throw Error()}catch(st){rt=st}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(st){if(st&&rt&&typeof st.stack=="string")return[st.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],A=m[1];if(M&&A){var H=M.split(`
`),it=A.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<it.length&&!it[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===it.length)for(l=H.length-1,f=it.length-1;1<=l&&0<=f&&H[l]!==it[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==it[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==it[f]){var vt=`
`+H[l].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=l&&0<=f);break}}}finally{ne=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ie(s):""}function De(e){switch(e.tag){case 26:case 27:case 5:return ie(e.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return ie("Activity");default:return""}}function Ke(e){try{var a="";do a+=De(e),e=e.return;while(e);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ae(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ae(e){var a=Ae(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),l=""+e[a];if(!e.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(e,a,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function tn(e){e._valueTracker||(e._valueTracker=ae(e))}function Ce(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var s=a.getValue(),l="";return e&&(l=Ae(e)?e.checked?"true":"false":e.value),e=l,e!==s?(a.setValue(e),!0):!1}function Nn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ua=/[\n"\\]/g;function Ye(e){return e.replace(Ua,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ji(e,a,s,l,f,m,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),a!=null?M==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Te(a)):e.value!==""+Te(a)&&(e.value=""+Te(a)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),a!=null?Ln(e,M,Te(a)):s!=null?Ln(e,M,Te(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Te(A):e.removeAttribute("name")}function Xe(e,a,s,l,f,m,M,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;s=s!=null?""+Te(s):"",a=a!=null?""+Te(a):s,A||a===e.value||(e.value=a),e.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Ln(e,a,s){a==="number"&&Nn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function dn(e,a,s,l){if(e=e.options,a){a={};for(var f=0;f<s.length;f++)a["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=a.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Te(s),a=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}a!==null||e[f].disabled||(a=e[f])}a!==null&&(a.selected=!0)}}function yn(e,a,s){if(a!=null&&(a=""+Te(a),a!==e.value&&(e.value=a),s==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=s!=null?""+Te(s):""}function An(e,a,s,l){if(a==null){if(l!=null){if(s!=null)throw Error(r(92));if(dt(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),a=s}s=Te(a),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Li(e,a){if(a){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=a;return}}e.textContent=a}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qm(e,a,s){var l=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,s):typeof s!="number"||s===0||Zi.has(a)?a==="float"?e.cssFloat=s:e[a]=(""+s).trim():e[a]=s+"px"}function jm(e,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&s[f]!==l&&qm(e,f,l)}else for(var m in a)a.hasOwnProperty(m)&&qm(e,m,a[m])}function Sf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var XS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),WS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jl(e){return WS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mf=null;function Ef(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var es=null,ns=null;function Zm(e){var a=Yi(e);if(a&&(e=a.stateNode)){var s=e[an]||null;t:switch(e=a.stateNode,a.type){case"input":if(ji(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ye(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var l=s[a];if(l!==e&&l.form===e.form){var f=l[an]||null;if(!f)throw Error(r(90));ji(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<s.length;a++)l=s[a],l.form===e.form&&Ce(l)}break t;case"textarea":yn(e,s.value,s.defaultValue);break t;case"select":a=s.value,a!=null&&dn(e,!!s.multiple,a,!1)}}}var bf=!1;function Km(e,a,s){if(bf)return e(a,s);bf=!0;try{var l=e(a);return l}finally{if(bf=!1,(es!==null||ns!==null)&&(Lc(),es&&(a=es,e=ns,ns=es=null,Zm(a),e)))for(a=0;a<e.length;a++)Zm(e[a])}}function So(e,a){var s=e.stateNode;if(s===null)return null;var l=s[an]||null;if(l===null)return null;s=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tf=!1;if(Ki)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Tf=!1}var Na=null,Af=null,Zl=null;function Qm(){if(Zl)return Zl;var e,a=Af,s=a.length,l,f="value"in Na?Na.value:Na.textContent,m=f.length;for(e=0;e<s&&a[e]===f[e];e++);var M=s-e;for(l=1;l<=M&&a[s-l]===f[m-l];l++);return Zl=f.slice(e,1<l?1-l:void 0)}function Kl(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Ql(){return!0}function $m(){return!1}function kn(e){function a(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ql:$m,this.isPropagationStopped=$m,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),a}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=kn(gr),Eo=g({},gr,{view:0,detail:0}),YS=kn(Eo),wf,Rf,bo,Jl=g({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(wf=e.screenX-bo.screenX,Rf=e.screenY-bo.screenY):Rf=wf=0,bo=e),wf)},movementY:function(e){return"movementY"in e?e.movementY:Rf}}),Jm=kn(Jl),qS=g({},Jl,{dataTransfer:0}),jS=kn(qS),ZS=g({},Eo,{relatedTarget:0}),Cf=kn(ZS),KS=g({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),QS=kn(KS),$S=g({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),JS=kn($S),tM=g({},gr,{data:0}),tg=kn(tM),eM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aM(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=iM[e])?!!a[e]:!1}function Df(){return aM}var rM=g({},Eo,{key:function(e){if(e.key){var a=eM[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(e){return e.type==="keypress"?Kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sM=kn(rM),oM=g({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=kn(oM),lM=g({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),cM=kn(lM),uM=g({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fM=kn(uM),hM=g({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dM=kn(hM),pM=g({},gr,{newState:0,oldState:0}),mM=kn(pM),gM=[9,13,27,32],Uf=Ki&&"CompositionEvent"in window,To=null;Ki&&"documentMode"in document&&(To=document.documentMode);var _M=Ki&&"TextEvent"in window&&!To,ng=Ki&&(!Uf||To&&8<To&&11>=To),ig=" ",ag=!1;function rg(e,a){switch(e){case"keyup":return gM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var is=!1;function vM(e,a){switch(e){case"compositionend":return sg(a);case"keypress":return a.which!==32?null:(ag=!0,ig);case"textInput":return e=a.data,e===ig&&ag?null:e;default:return null}}function xM(e,a){if(is)return e==="compositionend"||!Uf&&rg(e,a)?(e=Qm(),Zl=Af=Na=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ng&&a.locale!=="ko"?null:a.data;default:return null}}var yM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!yM[e.type]:a==="textarea"}function lg(e,a,s,l){es?ns?ns.push(l):ns=[l]:es=l,a=Ic(a,"onChange"),0<a.length&&(s=new $l("onChange","change",null,s,l),e.push({event:s,listeners:a}))}var Ao=null,wo=null;function SM(e){V_(e,0)}function tc(e){var a=mr(e);if(Ce(a))return e}function cg(e,a){if(e==="change")return a}var ug=!1;if(Ki){var Nf;if(Ki){var Lf="oninput"in document;if(!Lf){var fg=document.createElement("div");fg.setAttribute("oninput","return;"),Lf=typeof fg.oninput=="function"}Nf=Lf}else Nf=!1;ug=Nf&&(!document.documentMode||9<document.documentMode)}function hg(){Ao&&(Ao.detachEvent("onpropertychange",dg),wo=Ao=null)}function dg(e){if(e.propertyName==="value"&&tc(wo)){var a=[];lg(a,wo,e,Ef(e)),Km(SM,a)}}function MM(e,a,s){e==="focusin"?(hg(),Ao=a,wo=s,Ao.attachEvent("onpropertychange",dg)):e==="focusout"&&hg()}function EM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tc(wo)}function bM(e,a){if(e==="click")return tc(a)}function TM(e,a){if(e==="input"||e==="change")return tc(a)}function AM(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Kn=typeof Object.is=="function"?Object.is:AM;function Ro(e,a){if(Kn(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var s=Object.keys(e),l=Object.keys(a);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!j.call(a,f)||!Kn(e[f],a[f]))return!1}return!0}function pg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mg(e,a){var s=pg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=a&&l>=a)return{node:s,offset:a-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=pg(s)}}function gg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?gg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function _g(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Nn(e.document);a instanceof e.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)e=a.contentWindow;else break;a=Nn(e.document)}return a}function Of(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var wM=Ki&&"documentMode"in document&&11>=document.documentMode,as=null,Pf=null,Co=null,zf=!1;function vg(e,a,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;zf||as==null||as!==Nn(l)||(l=as,"selectionStart"in l&&Of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Co&&Ro(Co,l)||(Co=l,l=Ic(Pf,"onSelect"),0<l.length&&(a=new $l("onSelect","select",null,a,s),e.push({event:a,listeners:l}),a.target=as)))}function _r(e,a){var s={};return s[e.toLowerCase()]=a.toLowerCase(),s["Webkit"+e]="webkit"+a,s["Moz"+e]="moz"+a,s}var rs={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Ff={},xg={};Ki&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function vr(e){if(Ff[e])return Ff[e];if(!rs[e])return e;var a=rs[e],s;for(s in a)if(a.hasOwnProperty(s)&&s in xg)return Ff[e]=a[s];return e}var yg=vr("animationend"),Sg=vr("animationiteration"),Mg=vr("animationstart"),RM=vr("transitionrun"),CM=vr("transitionstart"),DM=vr("transitioncancel"),Eg=vr("transitionend"),bg=new Map,Bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bf.push("scrollEnd");function yi(e,a){bg.set(e,a),qi(a,[e])}var Tg=new WeakMap;function li(e,a){if(typeof e=="object"&&e!==null){var s=Tg.get(e);return s!==void 0?s:(a={value:e,source:a,stack:Ke(a)},Tg.set(e,a),a)}return{value:e,source:a,stack:Ke(a)}}var ci=[],ss=0,If=0;function ec(){for(var e=ss,a=If=ss=0;a<e;){var s=ci[a];ci[a++]=null;var l=ci[a];ci[a++]=null;var f=ci[a];ci[a++]=null;var m=ci[a];if(ci[a++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&Ag(s,f,m)}}function nc(e,a,s,l){ci[ss++]=e,ci[ss++]=a,ci[ss++]=s,ci[ss++]=l,If|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hf(e,a,s,l){return nc(e,a,s,l),ic(e)}function os(e,a){return nc(e,null,null,a),ic(e)}function Ag(e,a,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&a!==null&&(f=31-Lt(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[a]:l.push(a),a.lane=s|536870912),m):null}function ic(e){if(50<tl)throw tl=0,Yh=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var ls={};function UM(e,a,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,a,s,l){return new UM(e,a,s,l)}function Gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,a){var s=e.alternate;return s===null?(s=Qn(e.tag,a,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=a,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,a=e.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function wg(e,a){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,a=s.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ac(e,a,s,l,f,m){var M=0;if(l=e,typeof e=="function")Gf(e)&&(M=1);else if(typeof e=="string")M=LE(e,s,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Qn(31,s,a,f),e.elementType=U,e.lanes=m,e;case E:return xr(s.children,f,m,a);case b:M=8,f|=24;break;case S:return e=Qn(12,s,a,f|2),e.elementType=S,e.lanes=m,e;case G:return e=Qn(13,s,a,f),e.elementType=G,e.lanes=m,e;case z:return e=Qn(19,s,a,f),e.elementType=z,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case N:M=10;break t;case P:M=9;break t;case D:M=11;break t;case B:M=14;break t;case X:M=16,l=null;break t}M=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return a=Qn(M,s,a,f),a.elementType=e,a.type=l,a.lanes=m,a}function xr(e,a,s,l){return e=Qn(7,e,l,a),e.lanes=s,e}function Vf(e,a,s){return e=Qn(6,e,null,a),e.lanes=s,e}function kf(e,a,s){return a=Qn(4,e.children!==null?e.children:[],e.key,a),a.lanes=s,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var cs=[],us=0,rc=null,sc=0,ui=[],fi=0,yr=null,$i=1,Ji="";function Sr(e,a){cs[us++]=sc,cs[us++]=rc,rc=e,sc=a}function Rg(e,a,s){ui[fi++]=$i,ui[fi++]=Ji,ui[fi++]=yr,yr=e;var l=$i;e=Ji;var f=32-Lt(l)-1;l&=~(1<<f),s+=1;var m=32-Lt(a)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,$i=1<<32-Lt(a)+f|s<<f|l,Ji=m+e}else $i=1<<m|s<<f|l,Ji=e}function Xf(e){e.return!==null&&(Sr(e,1),Rg(e,1,0))}function Wf(e){for(;e===rc;)rc=cs[--us],cs[us]=null,sc=cs[--us],cs[us]=null;for(;e===yr;)yr=ui[--fi],ui[fi]=null,Ji=ui[--fi],ui[fi]=null,$i=ui[--fi],ui[fi]=null}var Bn=null,en=null,Oe=!1,Mr=null,Oi=!1,Yf=Error(r(519));function Er(e){var a=Error(r(418,""));throw No(li(a,e)),Yf}function Cg(e){var a=e.stateNode,s=e.type,l=e.memoizedProps;switch(a[je]=e,a[an]=l,s){case"dialog":Me("cancel",a),Me("close",a);break;case"iframe":case"object":case"embed":Me("load",a);break;case"video":case"audio":for(s=0;s<nl.length;s++)Me(nl[s],a);break;case"source":Me("error",a);break;case"img":case"image":case"link":Me("error",a),Me("load",a);break;case"details":Me("toggle",a);break;case"input":Me("invalid",a),Xe(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),tn(a);break;case"select":Me("invalid",a);break;case"textarea":Me("invalid",a),An(a,l.value,l.defaultValue,l.children),tn(a)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||l.suppressHydrationWarning===!0||Y_(a.textContent,s)?(l.popover!=null&&(Me("beforetoggle",a),Me("toggle",a)),l.onScroll!=null&&Me("scroll",a),l.onScrollEnd!=null&&Me("scrollend",a),l.onClick!=null&&(a.onclick=Hc),a=!0):a=!1,a||Er(e)}function Dg(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Bn=Bn.return}}function Do(e){if(e!==Bn)return!1;if(!Oe)return Dg(e),Oe=!0,!1;var a=e.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ld(e.type,e.memoizedProps)),s=!s),s&&en&&Er(e),Dg(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(a===0){en=Mi(e.nextSibling);break t}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;e=e.nextSibling}en=null}}else a===27?(a=en,ja(e.type)?(e=hd,hd=null,en=e):en=a):en=Bn?Mi(e.stateNode.nextSibling):null;return!0}function Uo(){en=Bn=null,Oe=!1}function Ug(){var e=Mr;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Mr=null),e}function No(e){Mr===null?Mr=[e]:Mr.push(e)}var qf=nt(null),br=null,ta=null;function La(e,a,s){Ct(qf,a._currentValue),a._currentValue=s}function ea(e){e._currentValue=qf.current,At(qf)}function jf(e,a,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===s)break;e=e.return}}function Zf(e,a,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=f;for(var H=0;H<a.length;H++)if(A.context===a[H]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),jf(m.return,s,e),l||(M=null);break t}m=A.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),jf(M,s,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Lo(e,a,s,l){e=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=f.type;Kn(f.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(f===ct.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}f=f.return}e!==null&&Zf(a,e,s,l),a.flags|=262144}function oc(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Tr(e){br=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Ng(br,e)}function lc(e,a){return br===null&&Tr(e),Ng(e,a)}function Ng(e,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},ta===null){if(e===null)throw Error(r(308));ta=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ta=ta.next=a;return s}var NM=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(s){return s()})}},LM=i.unstable_scheduleCallback,OM=i.unstable_NormalPriority,pn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kf(){return{controller:new NM,data:new Map,refCount:0}}function Oo(e){e.refCount--,e.refCount===0&&LM(OM,function(){e.controller.abort()})}var Po=null,Qf=0,fs=0,hs=null;function PM(e,a){if(Po===null){var s=Po=[];Qf=0,fs=Jh(),hs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Qf++,a.then(Lg,Lg),a}function Lg(){if(--Qf===0&&Po!==null){hs!==null&&(hs.status="fulfilled");var e=Po;Po=null,fs=0,hs=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function zM(e,a){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<s.length;f++)(0,s[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Og=F.S;F.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&PM(e,a),Og!==null&&Og(e,a)};var Ar=nt(null);function $f(){var e=Ar.current;return e!==null?e:qe.pooledCache}function cc(e,a){a===null?Ct(Ar,Ar.current):Ct(Ar,a.pool)}function Pg(){var e=$f();return e===null?null:{parent:pn._currentValue,pool:e}}var zo=Error(r(460)),zg=Error(r(474)),uc=Error(r(542)),Jf={then:function(){}};function Fg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fc(){}function Bg(e,a,s){switch(s=e[s],s===void 0?e.push(a):s!==a&&(a.then(fc,fc),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Hg(e),e;default:if(typeof a.status=="string")a.then(fc,fc);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Hg(e),e}throw Fo=a,zo}}var Fo=null;function Ig(){if(Fo===null)throw Error(r(459));var e=Fo;return Fo=null,e}function Hg(e){if(e===zo||e===uc)throw Error(r(483))}var Oa=!1;function th(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eh(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,a,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=ic(e),Ag(e,null,s),a}return nc(e,l,a,s),ic(e)}function Bo(e,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,s|=l,a.lanes=s,oe(e,s)}}function nh(e,a){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=a:m=m.next=a}else f=m=a;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=a:e.next=a,s.lastBaseUpdate=a}var ih=!1;function Io(){if(ih){var e=hs;if(e!==null)throw e}}function Ho(e,a,s,l){ih=!1;var f=e.updateQueue;Oa=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var H=A,it=H.next;H.next=null,M===null?m=it:M.next=it,M=H;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,A=vt.lastBaseUpdate,A!==M&&(A===null?vt.firstBaseUpdate=it:A.next=it,vt.lastBaseUpdate=H))}if(m!==null){var Tt=f.baseState;M=0,vt=it=H=null,A=m;do{var rt=A.lane&-536870913,st=rt!==A.lane;if(st?(Re&rt)===rt:(l&rt)===rt){rt!==0&&rt===fs&&(ih=!0),vt!==null&&(vt=vt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ce=e,re=A;rt=a;var Ie=s;switch(re.tag){case 1:if(ce=re.payload,typeof ce=="function"){Tt=ce.call(Ie,Tt,rt);break t}Tt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=re.payload,rt=typeof ce=="function"?ce.call(Ie,Tt,rt):ce,rt==null)break t;Tt=g({},Tt,rt);break t;case 2:Oa=!0}}rt=A.callback,rt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=f.callbacks,st===null?f.callbacks=[rt]:st.push(rt))}else st={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},vt===null?(it=vt=st,H=Tt):vt=vt.next=st,M|=rt;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;st=A,A=st.next,st.next=null,f.lastBaseUpdate=st,f.shared.pending=null}}while(!0);vt===null&&(H=Tt),f.baseState=H,f.firstBaseUpdate=it,f.lastBaseUpdate=vt,m===null&&(f.shared.lanes=0),Xa|=M,e.lanes=M,e.memoizedState=Tt}}function Gg(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function Vg(e,a){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Gg(s[e],a)}var ds=nt(null),hc=nt(0);function kg(e,a){e=la,Ct(hc,e),Ct(ds,a),la=e|a.baseLanes}function ah(){Ct(hc,la),Ct(ds,ds.current)}function rh(){la=hc.current,At(ds),At(hc)}var Fa=0,_e=null,Fe=null,un=null,dc=!1,ps=!1,wr=!1,pc=0,Go=0,ms=null,FM=0;function rn(){throw Error(r(321))}function sh(e,a){if(a===null)return!1;for(var s=0;s<a.length&&s<e.length;s++)if(!Kn(e[s],a[s]))return!1;return!0}function oh(e,a,s,l,f,m){return Fa=m,_e=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,F.H=e===null||e.memoizedState===null?A0:w0,wr=!1,m=s(l,f),wr=!1,ps&&(m=Wg(a,s,l,f)),Xg(e),m}function Xg(e){F.H=yc;var a=Fe!==null&&Fe.next!==null;if(Fa=0,un=Fe=_e=null,dc=!1,Go=0,ms=null,a)throw Error(r(300));e===null||Sn||(e=e.dependencies,e!==null&&oc(e)&&(Sn=!0))}function Wg(e,a,s,l){_e=e;var f=0;do{if(ps&&(ms=null),Go=0,ps=!1,25<=f)throw Error(r(301));if(f+=1,un=Fe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=XM,m=a(s,l)}while(ps);return m}function BM(){var e=F.H,a=e.useState()[0];return a=typeof a.then=="function"?Vo(a):a,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(_e.flags|=1024),a}function lh(){var e=pc!==0;return pc=0,e}function ch(e,a,s){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~s}function uh(e){if(dc){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}dc=!1}Fa=0,un=Fe=_e=null,ps=!1,Go=pc=0,ms=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?_e.memoizedState=un=e:un=un.next=e,un}function fn(){if(Fe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var a=un===null?_e.memoizedState:un.next;if(a!==null)un=a,Fe=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},un===null?_e.memoizedState=un=e:un=un.next=e}return un}function fh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(e){var a=Go;return Go+=1,ms===null&&(ms=[]),e=Bg(ms,e,a),a=_e,(un===null?a.memoizedState:un.next)===null&&(a=a.alternate,F.H=a===null||a.memoizedState===null?A0:w0),e}function mc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vo(e);if(e.$$typeof===N)return On(e)}throw Error(r(438,String(e)))}function hh(e){var a=null,s=_e.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var l=_e.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=fh(),_e.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(e),l=0;l<e;l++)s[l]=R;return a.index++,s}function na(e,a){return typeof a=="function"?a(e):a}function gc(e){var a=fn();return dh(a,Fe,e)}function dh(e,a,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}a.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{a=f.next;var A=M=null,H=null,it=a,vt=!1;do{var Tt=it.lane&-536870913;if(Tt!==it.lane?(Re&Tt)===Tt:(Fa&Tt)===Tt){var rt=it.revertLane;if(rt===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Tt===fs&&(vt=!0);else if((Fa&rt)===rt){it=it.next,rt===fs&&(vt=!0);continue}else Tt={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(A=H=Tt,M=m):H=H.next=Tt,_e.lanes|=rt,Xa|=rt;Tt=it.action,wr&&s(m,Tt),m=it.hasEagerState?it.eagerState:s(m,Tt)}else rt={lane:Tt,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(A=H=rt,M=m):H=H.next=rt,_e.lanes|=Tt,Xa|=Tt;it=it.next}while(it!==null&&it!==a);if(H===null?M=m:H.next=A,!Kn(m,e.memoizedState)&&(Sn=!0,vt&&(s=hs,s!==null)))throw s;e.memoizedState=m,e.baseState=M,e.baseQueue=H,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ph(e){var a=fn(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=a.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=e(m,M.action),M=M.next;while(M!==f);Kn(m,a.memoizedState)||(Sn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),s.lastRenderedState=m}return[m,l]}function Yg(e,a,s){var l=_e,f=fn(),m=Oe;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=a();var M=!Kn((Fe||f).memoizedState,s);M&&(f.memoizedState=s,Sn=!0),f=f.queue;var A=Zg.bind(null,l,f,e);if(ko(2048,8,A,[e]),f.getSnapshot!==a||M||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,gs(9,_c(),jg.bind(null,l,f,s,a),null),qe===null)throw Error(r(349));m||(Fa&124)!==0||qg(l,a,s)}return s}function qg(e,a,s){e.flags|=16384,e={getSnapshot:a,value:s},a=_e.updateQueue,a===null?(a=fh(),_e.updateQueue=a,a.stores=[e]):(s=a.stores,s===null?a.stores=[e]:s.push(e))}function jg(e,a,s,l){a.value=s,a.getSnapshot=l,Kg(a)&&Qg(e)}function Zg(e,a,s){return s(function(){Kg(a)&&Qg(e)})}function Kg(e){var a=e.getSnapshot;e=e.value;try{var s=a();return!Kn(e,s)}catch{return!0}}function Qg(e){var a=os(e,2);a!==null&&ni(a,e,2)}function mh(e){var a=Xn();if(typeof e=="function"){var s=e;if(e=s(),wr){yt(!0);try{s()}finally{yt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},a}function $g(e,a,s,l){return e.baseState=s,dh(e,Fe,typeof l=="function"?l:na)}function IM(e,a,s,l,f){if(xc(e))throw Error(r(485));if(e=a.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};F.T!==null?s(!0):m.isTransition=!1,l(m),s=a.pending,s===null?(m.next=a.pending=m,Jg(a,m)):(m.next=s.next,a.pending=s.next=m)}}function Jg(e,a){var s=a.action,l=a.payload,f=e.state;if(a.isTransition){var m=F.T,M={};F.T=M;try{var A=s(f,l),H=F.S;H!==null&&H(M,A),t0(e,a,A)}catch(it){gh(e,a,it)}finally{F.T=m}}else try{m=s(f,l),t0(e,a,m)}catch(it){gh(e,a,it)}}function t0(e,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){e0(e,a,l)},function(l){return gh(e,a,l)}):e0(e,a,s)}function e0(e,a,s){a.status="fulfilled",a.value=s,n0(a),e.state=s,a=e.pending,a!==null&&(s=a.next,s===a?e.pending=null:(s=s.next,a.next=s,Jg(e,s)))}function gh(e,a,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=s,n0(a),a=a.next;while(a!==l)}e.action=null}function n0(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function i0(e,a){return a}function a0(e,a){if(Oe){var s=qe.formState;if(s!==null){t:{var l=_e;if(Oe){if(en){e:{for(var f=en,m=Oi;f.nodeType!==8;){if(!m){f=null;break e}if(f=Mi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){en=Mi(f.nextSibling),l=f.data==="F!";break t}}Er(l)}l=!1}l&&(a=s[0])}}return s=Xn(),s.memoizedState=s.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:a},s.queue=l,s=E0.bind(null,_e,l),l.dispatch=s,l=mh(!1),m=Sh.bind(null,_e,!1,l.queue),l=Xn(),f={state:a,dispatch:null,action:e,pending:null},l.queue=f,s=IM.bind(null,_e,f,m,s),f.dispatch=s,l.memoizedState=e,[a,s,!1]}function r0(e){var a=fn();return s0(a,Fe,e)}function s0(e,a,s){if(a=dh(e,a,i0)[0],e=gc(na)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Vo(a)}catch(M){throw M===zo?uc:M}else l=a;a=fn();var f=a.queue,m=f.dispatch;return s!==a.memoizedState&&(_e.flags|=2048,gs(9,_c(),HM.bind(null,f,s),null)),[l,m,e]}function HM(e,a){e.action=a}function o0(e){var a=fn(),s=Fe;if(s!==null)return s0(a,s,e);fn(),a=a.memoizedState,s=fn();var l=s.queue.dispatch;return s.memoizedState=e,[a,l,!1]}function gs(e,a,s,l){return e={tag:e,create:s,deps:l,inst:a,next:null},a=_e.updateQueue,a===null&&(a=fh(),_e.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,a.lastEffect=e),e}function _c(){return{destroy:void 0,resource:void 0}}function l0(){return fn().memoizedState}function vc(e,a,s,l){var f=Xn();l=l===void 0?null:l,_e.flags|=e,f.memoizedState=gs(1|a,_c(),s,l)}function ko(e,a,s,l){var f=fn();l=l===void 0?null:l;var m=f.memoizedState.inst;Fe!==null&&l!==null&&sh(l,Fe.memoizedState.deps)?f.memoizedState=gs(a,m,s,l):(_e.flags|=e,f.memoizedState=gs(1|a,m,s,l))}function c0(e,a){vc(8390656,8,e,a)}function u0(e,a){ko(2048,8,e,a)}function f0(e,a){return ko(4,2,e,a)}function h0(e,a){return ko(4,4,e,a)}function d0(e,a){if(typeof a=="function"){e=e();var s=a(e);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function p0(e,a,s){s=s!=null?s.concat([e]):null,ko(4,4,d0.bind(null,a,e),s)}function _h(){}function m0(e,a){var s=fn();a=a===void 0?null:a;var l=s.memoizedState;return a!==null&&sh(a,l[1])?l[0]:(s.memoizedState=[e,a],e)}function g0(e,a){var s=fn();a=a===void 0?null:a;var l=s.memoizedState;if(a!==null&&sh(a,l[1]))return l[0];if(l=e(),wr){yt(!0);try{e()}finally{yt(!1)}}return s.memoizedState=[l,a],l}function vh(e,a,s){return s===void 0||(Fa&1073741824)!==0?e.memoizedState=a:(e.memoizedState=s,e=x_(),_e.lanes|=e,Xa|=e,s)}function _0(e,a,s,l){return Kn(s,a)?s:ds.current!==null?(e=vh(e,s,l),Kn(e,a)||(Sn=!0),e):(Fa&42)===0?(Sn=!0,e.memoizedState=s):(e=x_(),_e.lanes|=e,Xa|=e,a)}function v0(e,a,s,l,f){var m=Z.p;Z.p=m!==0&&8>m?m:8;var M=F.T,A={};F.T=A,Sh(e,!1,a,s);try{var H=f(),it=F.S;if(it!==null&&it(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var vt=zM(H,l);Xo(e,a,vt,ei(e))}else Xo(e,a,l,ei(e))}catch(Tt){Xo(e,a,{then:function(){},status:"rejected",reason:Tt},ei())}finally{Z.p=m,F.T=M}}function GM(){}function xh(e,a,s,l){if(e.tag!==5)throw Error(r(476));var f=x0(e).queue;v0(e,f,a,q,s===null?GM:function(){return y0(e),s(l)})}function x0(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:q},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:s},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function y0(e){var a=x0(e).next.queue;Xo(e,a,{},ei())}function yh(){return On(ll)}function S0(){return fn().memoizedState}function M0(){return fn().memoizedState}function VM(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var s=ei();e=Pa(s);var l=za(a,e,s);l!==null&&(ni(l,a,s),Bo(l,a,s)),a={cache:Kf()},e.payload=a;return}a=a.return}}function kM(e,a,s){var l=ei();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},xc(e)?b0(a,s):(s=Hf(e,a,s,l),s!==null&&(ni(s,e,l),T0(s,a,l)))}function E0(e,a,s){var l=ei();Xo(e,a,s,l)}function Xo(e,a,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(xc(e))b0(a,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var M=a.lastRenderedState,A=m(M,s);if(f.hasEagerState=!0,f.eagerState=A,Kn(A,M))return nc(e,a,f,0),qe===null&&ec(),!1}catch{}finally{}if(s=Hf(e,a,f,l),s!==null)return ni(s,e,l),T0(s,a,l),!0}return!1}function Sh(e,a,s,l){if(l={lane:2,revertLane:Jh(),action:l,hasEagerState:!1,eagerState:null,next:null},xc(e)){if(a)throw Error(r(479))}else a=Hf(e,s,l,2),a!==null&&ni(a,e,2)}function xc(e){var a=e.alternate;return e===_e||a!==null&&a===_e}function b0(e,a){ps=dc=!0;var s=e.pending;s===null?a.next=a:(a.next=s.next,s.next=a),e.pending=a}function T0(e,a,s){if((s&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,s|=l,a.lanes=s,oe(e,s)}}var yc={readContext:On,use:mc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},A0={readContext:On,use:mc,useCallback:function(e,a){return Xn().memoizedState=[e,a===void 0?null:a],e},useContext:On,useEffect:c0,useImperativeHandle:function(e,a,s){s=s!=null?s.concat([e]):null,vc(4194308,4,d0.bind(null,a,e),s)},useLayoutEffect:function(e,a){return vc(4194308,4,e,a)},useInsertionEffect:function(e,a){vc(4,2,e,a)},useMemo:function(e,a){var s=Xn();a=a===void 0?null:a;var l=e();if(wr){yt(!0);try{e()}finally{yt(!1)}}return s.memoizedState=[l,a],l},useReducer:function(e,a,s){var l=Xn();if(s!==void 0){var f=s(a);if(wr){yt(!0);try{s(a)}finally{yt(!1)}}}else f=a;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=kM.bind(null,_e,e),[l.memoizedState,e]},useRef:function(e){var a=Xn();return e={current:e},a.memoizedState=e},useState:function(e){e=mh(e);var a=e.queue,s=E0.bind(null,_e,a);return a.dispatch=s,[e.memoizedState,s]},useDebugValue:_h,useDeferredValue:function(e,a){var s=Xn();return vh(s,e,a)},useTransition:function(){var e=mh(!1);return e=v0.bind(null,_e,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,s){var l=_e,f=Xn();if(Oe){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),qe===null)throw Error(r(349));(Re&124)!==0||qg(l,a,s)}f.memoizedState=s;var m={value:s,getSnapshot:a};return f.queue=m,c0(Zg.bind(null,l,m,e),[e]),l.flags|=2048,gs(9,_c(),jg.bind(null,l,m,s,a),null),s},useId:function(){var e=Xn(),a=qe.identifierPrefix;if(Oe){var s=Ji,l=$i;s=(l&~(1<<32-Lt(l)-1)).toString(32)+s,a="«"+a+"R"+s,s=pc++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=FM++,a="«"+a+"r"+s.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:yh,useFormState:a0,useActionState:a0,useOptimistic:function(e){var a=Xn();a.memoizedState=a.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=Sh.bind(null,_e,!0,s),s.dispatch=a,[e,a]},useMemoCache:hh,useCacheRefresh:function(){return Xn().memoizedState=VM.bind(null,_e)}},w0={readContext:On,use:mc,useCallback:m0,useContext:On,useEffect:u0,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:g0,useReducer:gc,useRef:l0,useState:function(){return gc(na)},useDebugValue:_h,useDeferredValue:function(e,a){var s=fn();return _0(s,Fe.memoizedState,e,a)},useTransition:function(){var e=gc(na)[0],a=fn().memoizedState;return[typeof e=="boolean"?e:Vo(e),a]},useSyncExternalStore:Yg,useId:S0,useHostTransitionStatus:yh,useFormState:r0,useActionState:r0,useOptimistic:function(e,a){var s=fn();return $g(s,Fe,e,a)},useMemoCache:hh,useCacheRefresh:M0},XM={readContext:On,use:mc,useCallback:m0,useContext:On,useEffect:u0,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:g0,useReducer:ph,useRef:l0,useState:function(){return ph(na)},useDebugValue:_h,useDeferredValue:function(e,a){var s=fn();return Fe===null?vh(s,e,a):_0(s,Fe.memoizedState,e,a)},useTransition:function(){var e=ph(na)[0],a=fn().memoizedState;return[typeof e=="boolean"?e:Vo(e),a]},useSyncExternalStore:Yg,useId:S0,useHostTransitionStatus:yh,useFormState:o0,useActionState:o0,useOptimistic:function(e,a){var s=fn();return Fe!==null?$g(s,Fe,e,a):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:hh,useCacheRefresh:M0},_s=null,Wo=0;function Sc(e){var a=Wo;return Wo+=1,_s===null&&(_s=[]),Bg(_s,e,a)}function Yo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Mc(e,a){throw a.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function R0(e){var a=e._init;return a(e._payload)}function C0(e){function a(K,k){if(e){var tt=K.deletions;tt===null?(K.deletions=[k],K.flags|=16):tt.push(k)}}function s(K,k){if(!e)return null;for(;k!==null;)a(K,k),k=k.sibling;return null}function l(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function f(K,k){return K=Qi(K,k),K.index=0,K.sibling=null,K}function m(K,k,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<k?(K.flags|=67108866,k):tt):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function M(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,k,tt,bt){return k===null||k.tag!==6?(k=Vf(tt,K.mode,bt),k.return=K,k):(k=f(k,tt),k.return=K,k)}function H(K,k,tt,bt){var $t=tt.type;return $t===E?vt(K,k,tt.props.children,bt,tt.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===X&&R0($t)===k.type)?(k=f(k,tt.props),Yo(k,tt),k.return=K,k):(k=ac(tt.type,tt.key,tt.props,null,K.mode,bt),Yo(k,tt),k.return=K,k)}function it(K,k,tt,bt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=kf(tt,K.mode,bt),k.return=K,k):(k=f(k,tt.children||[]),k.return=K,k)}function vt(K,k,tt,bt,$t){return k===null||k.tag!==7?(k=xr(tt,K.mode,bt,$t),k.return=K,k):(k=f(k,tt),k.return=K,k)}function Tt(K,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Vf(""+k,K.mode,tt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return tt=ac(k.type,k.key,k.props,null,K.mode,tt),Yo(tt,k),tt.return=K,tt;case y:return k=kf(k,K.mode,tt),k.return=K,k;case X:var bt=k._init;return k=bt(k._payload),Tt(K,k,tt)}if(dt(k)||Y(k))return k=xr(k,K.mode,tt,null),k.return=K,k;if(typeof k.then=="function")return Tt(K,Sc(k),tt);if(k.$$typeof===N)return Tt(K,lc(K,k),tt);Mc(K,k)}return null}function rt(K,k,tt,bt){var $t=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:A(K,k,""+tt,bt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case _:return tt.key===$t?H(K,k,tt,bt):null;case y:return tt.key===$t?it(K,k,tt,bt):null;case X:return $t=tt._init,tt=$t(tt._payload),rt(K,k,tt,bt)}if(dt(tt)||Y(tt))return $t!==null?null:vt(K,k,tt,bt,null);if(typeof tt.then=="function")return rt(K,k,Sc(tt),bt);if(tt.$$typeof===N)return rt(K,k,lc(K,tt),bt);Mc(K,tt)}return null}function st(K,k,tt,bt,$t){if(typeof bt=="string"&&bt!==""||typeof bt=="number"||typeof bt=="bigint")return K=K.get(tt)||null,A(k,K,""+bt,$t);if(typeof bt=="object"&&bt!==null){switch(bt.$$typeof){case _:return K=K.get(bt.key===null?tt:bt.key)||null,H(k,K,bt,$t);case y:return K=K.get(bt.key===null?tt:bt.key)||null,it(k,K,bt,$t);case X:var ve=bt._init;return bt=ve(bt._payload),st(K,k,tt,bt,$t)}if(dt(bt)||Y(bt))return K=K.get(tt)||null,vt(k,K,bt,$t,null);if(typeof bt.then=="function")return st(K,k,tt,Sc(bt),$t);if(bt.$$typeof===N)return st(K,k,tt,lc(k,bt),$t);Mc(k,bt)}return null}function ce(K,k,tt,bt){for(var $t=null,ve=null,ee=k,se=k=0,En=null;ee!==null&&se<tt.length;se++){ee.index>se?(En=ee,ee=null):En=ee.sibling;var Ue=rt(K,ee,tt[se],bt);if(Ue===null){ee===null&&(ee=En);break}e&&ee&&Ue.alternate===null&&a(K,ee),k=m(Ue,k,se),ve===null?$t=Ue:ve.sibling=Ue,ve=Ue,ee=En}if(se===tt.length)return s(K,ee),Oe&&Sr(K,se),$t;if(ee===null){for(;se<tt.length;se++)ee=Tt(K,tt[se],bt),ee!==null&&(k=m(ee,k,se),ve===null?$t=ee:ve.sibling=ee,ve=ee);return Oe&&Sr(K,se),$t}for(ee=l(ee);se<tt.length;se++)En=st(ee,K,se,tt[se],bt),En!==null&&(e&&En.alternate!==null&&ee.delete(En.key===null?se:En.key),k=m(En,k,se),ve===null?$t=En:ve.sibling=En,ve=En);return e&&ee.forEach(function(Ja){return a(K,Ja)}),Oe&&Sr(K,se),$t}function re(K,k,tt,bt){if(tt==null)throw Error(r(151));for(var $t=null,ve=null,ee=k,se=k=0,En=null,Ue=tt.next();ee!==null&&!Ue.done;se++,Ue=tt.next()){ee.index>se?(En=ee,ee=null):En=ee.sibling;var Ja=rt(K,ee,Ue.value,bt);if(Ja===null){ee===null&&(ee=En);break}e&&ee&&Ja.alternate===null&&a(K,ee),k=m(Ja,k,se),ve===null?$t=Ja:ve.sibling=Ja,ve=Ja,ee=En}if(Ue.done)return s(K,ee),Oe&&Sr(K,se),$t;if(ee===null){for(;!Ue.done;se++,Ue=tt.next())Ue=Tt(K,Ue.value,bt),Ue!==null&&(k=m(Ue,k,se),ve===null?$t=Ue:ve.sibling=Ue,ve=Ue);return Oe&&Sr(K,se),$t}for(ee=l(ee);!Ue.done;se++,Ue=tt.next())Ue=st(ee,K,se,Ue.value,bt),Ue!==null&&(e&&Ue.alternate!==null&&ee.delete(Ue.key===null?se:Ue.key),k=m(Ue,k,se),ve===null?$t=Ue:ve.sibling=Ue,ve=Ue);return e&&ee.forEach(function(WE){return a(K,WE)}),Oe&&Sr(K,se),$t}function Ie(K,k,tt,bt){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case _:t:{for(var $t=tt.key;k!==null;){if(k.key===$t){if($t=tt.type,$t===E){if(k.tag===7){s(K,k.sibling),bt=f(k,tt.props.children),bt.return=K,K=bt;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===X&&R0($t)===k.type){s(K,k.sibling),bt=f(k,tt.props),Yo(bt,tt),bt.return=K,K=bt;break t}s(K,k);break}else a(K,k);k=k.sibling}tt.type===E?(bt=xr(tt.props.children,K.mode,bt,tt.key),bt.return=K,K=bt):(bt=ac(tt.type,tt.key,tt.props,null,K.mode,bt),Yo(bt,tt),bt.return=K,K=bt)}return M(K);case y:t:{for($t=tt.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){s(K,k.sibling),bt=f(k,tt.children||[]),bt.return=K,K=bt;break t}else{s(K,k);break}else a(K,k);k=k.sibling}bt=kf(tt,K.mode,bt),bt.return=K,K=bt}return M(K);case X:return $t=tt._init,tt=$t(tt._payload),Ie(K,k,tt,bt)}if(dt(tt))return ce(K,k,tt,bt);if(Y(tt)){if($t=Y(tt),typeof $t!="function")throw Error(r(150));return tt=$t.call(tt),re(K,k,tt,bt)}if(typeof tt.then=="function")return Ie(K,k,Sc(tt),bt);if(tt.$$typeof===N)return Ie(K,k,lc(K,tt),bt);Mc(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(s(K,k.sibling),bt=f(k,tt),bt.return=K,K=bt):(s(K,k),bt=Vf(tt,K.mode,bt),bt.return=K,K=bt),M(K)):s(K,k)}return function(K,k,tt,bt){try{Wo=0;var $t=Ie(K,k,tt,bt);return _s=null,$t}catch(ee){if(ee===zo||ee===uc)throw ee;var ve=Qn(29,ee,null,K.mode);return ve.lanes=bt,ve.return=K,ve}finally{}}}var vs=C0(!0),D0=C0(!1),hi=nt(null),Pi=null;function Ba(e){var a=e.alternate;Ct(mn,mn.current&1),Ct(hi,e),Pi===null&&(a===null||ds.current!==null||a.memoizedState!==null)&&(Pi=e)}function U0(e){if(e.tag===22){if(Ct(mn,mn.current),Ct(hi,e),Pi===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(Pi=e)}}else Ia()}function Ia(){Ct(mn,mn.current),Ct(hi,hi.current)}function ia(e){At(hi),Pi===e&&(Pi=null),At(mn)}var mn=nt(0);function Ec(e){for(var a=e;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||fd(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Mh(e,a,s,l){a=e.memoizedState,s=s(l,a),s=s==null?a:g({},a,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Eh={enqueueSetState:function(e,a,s){e=e._reactInternals;var l=ei(),f=Pa(l);f.payload=a,s!=null&&(f.callback=s),a=za(e,f,l),a!==null&&(ni(a,e,l),Bo(a,e,l))},enqueueReplaceState:function(e,a,s){e=e._reactInternals;var l=ei(),f=Pa(l);f.tag=1,f.payload=a,s!=null&&(f.callback=s),a=za(e,f,l),a!==null&&(ni(a,e,l),Bo(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var s=ei(),l=Pa(s);l.tag=2,a!=null&&(l.callback=a),a=za(e,l,s),a!==null&&(ni(a,e,s),Bo(a,e,s))}};function N0(e,a,s,l,f,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):a.prototype&&a.prototype.isPureReactComponent?!Ro(s,l)||!Ro(f,m):!0}function L0(e,a,s,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,l),a.state!==e&&Eh.enqueueReplaceState(a,a.state,null)}function Rr(e,a){var s=a;if("ref"in a){s={};for(var l in a)l!=="ref"&&(s[l]=a[l])}if(e=e.defaultProps){s===a&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var bc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function O0(e){bc(e)}function P0(e){console.error(e)}function z0(e){bc(e)}function Tc(e,a){try{var s=e.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function F0(e,a,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function bh(e,a,s){return s=Pa(s),s.tag=3,s.payload={element:null},s.callback=function(){Tc(e,a)},s}function B0(e){return e=Pa(e),e.tag=3,e}function I0(e,a,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){F0(a,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){F0(a,s,l),typeof f!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function WM(e,a,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=s.alternate,a!==null&&Lo(a,s,f,!0),s=hi.current,s!==null){switch(s.tag){case 13:return Pi===null?jh():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Jf?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([l]):a.add(l),Kh(e,l,f)),!1;case 22:return s.flags|=65536,l===Jf?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([l]):s.add(l)),Kh(e,l,f)),!1}throw Error(r(435,s.tag))}return Kh(e,l,f),jh(),!1}if(Oe)return a=hi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==Yf&&(e=Error(r(422),{cause:l}),No(li(e,s)))):(l!==Yf&&(a=Error(r(423),{cause:l}),No(li(a,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=li(l,s),f=bh(e.stateNode,l,f),nh(e,f),nn!==4&&(nn=2)),!1;var m=Error(r(520),{cause:l});if(m=li(m,s),Jo===null?Jo=[m]:Jo.push(m),nn!==4&&(nn=2),a===null)return!0;l=li(l,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=bh(s.stateNode,l,e),nh(s,e),!1;case 1:if(a=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wa===null||!Wa.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=B0(f),I0(f,e,s,l),nh(s,f),!1}s=s.return}while(s!==null);return!1}var H0=Error(r(461)),Sn=!1;function wn(e,a,s,l){a.child=e===null?D0(a,null,s,l):vs(a,e.child,s,l)}function G0(e,a,s,l,f){s=s.render;var m=a.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return Tr(a),l=oh(e,a,s,M,m,f),A=lh(),e!==null&&!Sn?(ch(e,a,f),aa(e,a,f)):(Oe&&A&&Xf(a),a.flags|=1,wn(e,a,l,f),a.child)}function V0(e,a,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!Gf(m)&&m.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=m,k0(e,a,m,l,f)):(e=ac(s.type,null,l,a,a.mode,f),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!Nh(e,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ro,s(M,l)&&e.ref===a.ref)return aa(e,a,f)}return a.flags|=1,e=Qi(m,l),e.ref=a.ref,e.return=a,a.child=e}function k0(e,a,s,l,f){if(e!==null){var m=e.memoizedProps;if(Ro(m,l)&&e.ref===a.ref)if(Sn=!1,a.pendingProps=l=m,Nh(e,f))(e.flags&131072)!==0&&(Sn=!0);else return a.lanes=e.lanes,aa(e,a,f)}return Th(e,a,s,l,f)}function X0(e,a,s){var l=a.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(f=a.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~l}else a.childLanes=0,a.child=null;return W0(e,a,l,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&cc(a,m!==null?m.cachePool:null),m!==null?kg(a,m):ah(),U0(a);else return a.lanes=a.childLanes=536870912,W0(e,a,m!==null?m.baseLanes|s:s,s)}else m!==null?(cc(a,m.cachePool),kg(a,m),Ia(),a.memoizedState=null):(e!==null&&cc(a,null),ah(),Ia());return wn(e,a,f,s),a.child}function W0(e,a,s,l){var f=$f();return f=f===null?null:{parent:pn._currentValue,pool:f},a.memoizedState={baseLanes:s,cachePool:f},e!==null&&cc(a,null),ah(),U0(a),e!==null&&Lo(e,a,l,!0),null}function Ac(e,a){var s=a.ref;if(s===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(a.flags|=4194816)}}function Th(e,a,s,l,f){return Tr(a),s=oh(e,a,s,l,void 0,f),l=lh(),e!==null&&!Sn?(ch(e,a,f),aa(e,a,f)):(Oe&&l&&Xf(a),a.flags|=1,wn(e,a,s,f),a.child)}function Y0(e,a,s,l,f,m){return Tr(a),a.updateQueue=null,s=Wg(a,l,s,f),Xg(e),l=lh(),e!==null&&!Sn?(ch(e,a,m),aa(e,a,m)):(Oe&&l&&Xf(a),a.flags|=1,wn(e,a,s,m),a.child)}function q0(e,a,s,l,f){if(Tr(a),a.stateNode===null){var m=ls,M=s.contextType;typeof M=="object"&&M!==null&&(m=On(M)),m=new s(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Eh,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},th(a),M=s.contextType,m.context=typeof M=="object"&&M!==null?On(M):ls,m.state=a.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Mh(a,s,M,l),m.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Eh.enqueueReplaceState(m,m.state,null),Ho(a,l,m,f),Io(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var A=a.memoizedProps,H=Rr(s,A);m.props=H;var it=m.context,vt=s.contextType;M=ls,typeof vt=="object"&&vt!==null&&(M=On(vt));var Tt=s.getDerivedStateFromProps;vt=typeof Tt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,vt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||it!==M)&&L0(a,m,l,M),Oa=!1;var rt=a.memoizedState;m.state=rt,Ho(a,l,m,f),Io(),it=a.memoizedState,A||rt!==it||Oa?(typeof Tt=="function"&&(Mh(a,s,Tt,l),it=a.memoizedState),(H=Oa||N0(a,s,H,l,rt,it,M))?(vt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=it),m.props=l,m.state=it,m.context=M,l=H):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,eh(e,a),M=a.memoizedProps,vt=Rr(s,M),m.props=vt,Tt=a.pendingProps,rt=m.context,it=s.contextType,H=ls,typeof it=="object"&&it!==null&&(H=On(it)),A=s.getDerivedStateFromProps,(it=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==Tt||rt!==H)&&L0(a,m,l,H),Oa=!1,rt=a.memoizedState,m.state=rt,Ho(a,l,m,f),Io();var st=a.memoizedState;M!==Tt||rt!==st||Oa||e!==null&&e.dependencies!==null&&oc(e.dependencies)?(typeof A=="function"&&(Mh(a,s,A,l),st=a.memoizedState),(vt=Oa||N0(a,s,vt,l,rt,st,H)||e!==null&&e.dependencies!==null&&oc(e.dependencies))?(it||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,st,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,st,H)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=st),m.props=l,m.state=st,m.context=H,l=vt):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,Ac(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=vs(a,e.child,null,f),a.child=vs(a,null,s,f)):wn(e,a,s,f),a.memoizedState=m.state,e=a.child):e=aa(e,a,f),e}function j0(e,a,s,l){return Uo(),a.flags|=256,wn(e,a,s,l),a.child}var Ah={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wh(e){return{baseLanes:e,cachePool:Pg()}}function Rh(e,a,s){return e=e!==null?e.childLanes&~s:0,a&&(e|=di),e}function Z0(e,a,s){var l=a.pendingProps,f=!1,m=(a.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),M&&(f=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,e===null){if(Oe){if(f?Ba(a):Ia(),Oe){var A=en,H;if(H=A){t:{for(H=A,A=Oi;H.nodeType!==8;){if(!A){A=null;break t}if(H=Mi(H.nextSibling),H===null){A=null;break t}}A=H}A!==null?(a.memoizedState={dehydrated:A,treeContext:yr!==null?{id:$i,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},H=Qn(18,null,null,0),H.stateNode=A,H.return=a,a.child=H,Bn=a,en=null,H=!0):H=!1}H||Er(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return fd(A)?a.lanes=32:a.lanes=536870912,null;ia(a)}return A=l.children,l=l.fallback,f?(Ia(),f=a.mode,A=wc({mode:"hidden",children:A},f),l=xr(l,f,s,null),A.return=a,l.return=a,A.sibling=l,a.child=A,f=a.child,f.memoizedState=wh(s),f.childLanes=Rh(e,M,s),a.memoizedState=Ah,l):(Ba(a),Ch(a,A))}if(H=e.memoizedState,H!==null&&(A=H.dehydrated,A!==null)){if(m)a.flags&256?(Ba(a),a.flags&=-257,a=Dh(e,a,s)):a.memoizedState!==null?(Ia(),a.child=e.child,a.flags|=128,a=null):(Ia(),f=l.fallback,A=a.mode,l=wc({mode:"visible",children:l.children},A),f=xr(f,A,s,null),f.flags|=2,l.return=a,f.return=a,l.sibling=f,a.child=l,vs(a,e.child,null,s),l=a.child,l.memoizedState=wh(s),l.childLanes=Rh(e,M,s),a.memoizedState=Ah,a=f);else if(Ba(a),fd(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var it=M.dgst;M=it,l=Error(r(419)),l.stack="",l.digest=M,No({value:l,source:null,stack:null}),a=Dh(e,a,s)}else if(Sn||Lo(e,a,s,!1),M=(s&e.childLanes)!==0,Sn||M){if(M=qe,M!==null&&(l=s&-s,l=(l&42)!==0?1:ke(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==H.retryLane))throw H.retryLane=l,os(e,l),ni(M,e,l),H0;A.data==="$?"||jh(),a=Dh(e,a,s)}else A.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=H.treeContext,en=Mi(A.nextSibling),Bn=a,Oe=!0,Mr=null,Oi=!1,e!==null&&(ui[fi++]=$i,ui[fi++]=Ji,ui[fi++]=yr,$i=e.id,Ji=e.overflow,yr=a),a=Ch(a,l.children),a.flags|=4096);return a}return f?(Ia(),f=l.fallback,A=a.mode,H=e.child,it=H.sibling,l=Qi(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,it!==null?f=Qi(it,f):(f=xr(f,A,s,null),f.flags|=2),f.return=a,l.return=a,l.sibling=f,a.child=l,l=f,f=a.child,A=e.child.memoizedState,A===null?A=wh(s):(H=A.cachePool,H!==null?(it=pn._currentValue,H=H.parent!==it?{parent:it,pool:it}:H):H=Pg(),A={baseLanes:A.baseLanes|s,cachePool:H}),f.memoizedState=A,f.childLanes=Rh(e,M,s),a.memoizedState=Ah,l):(Ba(a),s=e.child,e=s.sibling,s=Qi(s,{mode:"visible",children:l.children}),s.return=a,s.sibling=null,e!==null&&(M=a.deletions,M===null?(a.deletions=[e],a.flags|=16):M.push(e)),a.child=s,a.memoizedState=null,s)}function Ch(e,a){return a=wc({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function wc(e,a){return e=Qn(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Dh(e,a,s){return vs(a,e.child,null,s),e=Ch(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function K0(e,a,s){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),jf(e.return,a,s)}function Uh(e,a,s,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function Q0(e,a,s){var l=a.pendingProps,f=l.revealOrder,m=l.tail;if(wn(e,a,l.children,s),l=mn.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&K0(e,s,a);else if(e.tag===19)K0(e,s,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Ct(mn,l),f){case"forwards":for(s=a.child,f=null;s!==null;)e=s.alternate,e!==null&&Ec(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=a.child,a.child=null):(f=s.sibling,s.sibling=null),Uh(a,!1,f,s,m);break;case"backwards":for(s=null,f=a.child,a.child=null;f!==null;){if(e=f.alternate,e!==null&&Ec(e)===null){a.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Uh(a,!0,s,null,m);break;case"together":Uh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function aa(e,a,s){if(e!==null&&(a.dependencies=e.dependencies),Xa|=a.lanes,(s&a.childLanes)===0)if(e!==null){if(Lo(e,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,s=Qi(e,e.pendingProps),a.child=s,s.return=a;e.sibling!==null;)e=e.sibling,s=s.sibling=Qi(e,e.pendingProps),s.return=a;s.sibling=null}return a.child}function Nh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&oc(e)))}function YM(e,a,s){switch(a.tag){case 3:Ut(a,a.stateNode.containerInfo),La(a,pn,e.memoizedState.cache),Uo();break;case 27:case 5:Rt(a);break;case 4:Ut(a,a.stateNode.containerInfo);break;case 10:La(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Ba(a),a.flags|=128,null):(s&a.child.childLanes)!==0?Z0(e,a,s):(Ba(a),e=aa(e,a,s),e!==null?e.sibling:null);Ba(a);break;case 19:var f=(e.flags&128)!==0;if(l=(s&a.childLanes)!==0,l||(Lo(e,a,s,!1),l=(s&a.childLanes)!==0),f){if(l)return Q0(e,a,s);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ct(mn,mn.current),l)break;return null;case 22:case 23:return a.lanes=0,X0(e,a,s);case 24:La(a,pn,e.memoizedState.cache)}return aa(e,a,s)}function $0(e,a,s){if(e!==null)if(e.memoizedProps!==a.pendingProps)Sn=!0;else{if(!Nh(e,s)&&(a.flags&128)===0)return Sn=!1,YM(e,a,s);Sn=(e.flags&131072)!==0}else Sn=!1,Oe&&(a.flags&1048576)!==0&&Rg(a,sc,a.index);switch(a.lanes=0,a.tag){case 16:t:{e=a.pendingProps;var l=a.elementType,f=l._init;if(l=f(l._payload),a.type=l,typeof l=="function")Gf(l)?(e=Rr(l,e),a.tag=1,a=q0(null,a,l,e,s)):(a.tag=0,a=Th(null,a,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===D){a.tag=11,a=G0(null,a,l,e,s);break t}else if(f===B){a.tag=14,a=V0(null,a,l,e,s);break t}}throw a=gt(l)||l,Error(r(306,a,""))}}return a;case 0:return Th(e,a,a.type,a.pendingProps,s);case 1:return l=a.type,f=Rr(l,a.pendingProps),q0(e,a,l,f,s);case 3:t:{if(Ut(a,a.stateNode.containerInfo),e===null)throw Error(r(387));l=a.pendingProps;var m=a.memoizedState;f=m.element,eh(e,a),Ho(a,l,null,s);var M=a.memoizedState;if(l=M.cache,La(a,pn,l),l!==m.cache&&Zf(a,[pn],s,!0),Io(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=j0(e,a,l,s);break t}else if(l!==f){f=li(Error(r(424)),a),No(f),a=j0(e,a,l,s);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Mi(e.firstChild),Bn=a,Oe=!0,Mr=null,Oi=!0,s=D0(a,null,l,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Uo(),l===f){a=aa(e,a,s);break t}wn(e,a,l,s)}a=a.child}return a;case 26:return Ac(e,a),e===null?(s=nv(a.type,null,a.pendingProps,null))?a.memoizedState=s:Oe||(s=a.type,e=a.pendingProps,l=Gc(St.current).createElement(s),l[je]=a,l[an]=e,Cn(l,s,e),cn(l),a.stateNode=l):a.memoizedState=nv(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Rt(a),e===null&&Oe&&(l=a.stateNode=J_(a.type,a.pendingProps,St.current),Bn=a,Oi=!0,f=en,ja(a.type)?(hd=f,en=Mi(l.firstChild)):en=f),wn(e,a,a.pendingProps.children,s),Ac(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Oe&&((f=l=en)&&(l=yE(l,a.type,a.pendingProps,Oi),l!==null?(a.stateNode=l,Bn=a,en=Mi(l.firstChild),Oi=!1,f=!0):f=!1),f||Er(a)),Rt(a),f=a.type,m=a.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,ld(f,m)?l=null:M!==null&&ld(f,M)&&(a.flags|=32),a.memoizedState!==null&&(f=oh(e,a,BM,null,null,s),ll._currentValue=f),Ac(e,a),wn(e,a,l,s),a.child;case 6:return e===null&&Oe&&((e=s=en)&&(s=SE(s,a.pendingProps,Oi),s!==null?(a.stateNode=s,Bn=a,en=null,e=!0):e=!1),e||Er(a)),null;case 13:return Z0(e,a,s);case 4:return Ut(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=vs(a,null,l,s):wn(e,a,l,s),a.child;case 11:return G0(e,a,a.type,a.pendingProps,s);case 7:return wn(e,a,a.pendingProps,s),a.child;case 8:return wn(e,a,a.pendingProps.children,s),a.child;case 12:return wn(e,a,a.pendingProps.children,s),a.child;case 10:return l=a.pendingProps,La(a,a.type,l.value),wn(e,a,l.children,s),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,Tr(a),f=On(f),l=l(f),a.flags|=1,wn(e,a,l,s),a.child;case 14:return V0(e,a,a.type,a.pendingProps,s);case 15:return k0(e,a,a.type,a.pendingProps,s);case 19:return Q0(e,a,s);case 31:return l=a.pendingProps,s=a.mode,l={mode:l.mode,children:l.children},e===null?(s=wc(l,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=Qi(e.child,l),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return X0(e,a,s);case 24:return Tr(a),l=On(pn),e===null?(f=$f(),f===null&&(f=qe,m=Kf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),a.memoizedState={parent:l,cache:f},th(a),La(a,pn,f)):((e.lanes&s)!==0&&(eh(e,a),Ho(a,null,null,s),Io()),f=e.memoizedState,m=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),La(a,pn,l)):(l=m.cache,La(a,pn,l),l!==f.cache&&Zf(a,[pn],s,!0))),wn(e,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function ra(e){e.flags|=4}function J0(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ov(a)){if(a=hi.current,a!==null&&((Re&4194048)===Re?Pi!==null:(Re&62914560)!==Re&&(Re&536870912)===0||a!==Pi))throw Fo=Jf,zg;e.flags|=8192}}function Rc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Pt():536870912,e.lanes|=a,Ms|=a)}function qo(e,a){if(!Oe)switch(e.tailMode){case"hidden":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Qe(e){var a=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(a)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,a}function qM(e,a,s){var l=a.pendingProps;switch(Wf(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(a),null;case 1:return Qe(a),null;case 3:return s=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ea(pn),pt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Do(a)?ra(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ug())),Qe(a),null;case 26:return s=a.memoizedState,e===null?(ra(a),s!==null?(Qe(a),J0(a,s)):(Qe(a),a.flags&=-16777217)):s?s!==e.memoizedState?(ra(a),Qe(a),J0(a,s)):(Qe(a),a.flags&=-16777217):(e.memoizedProps!==l&&ra(a),Qe(a),a.flags&=-16777217),null;case 27:mt(a),s=St.current;var f=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ra(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Qe(a),null}e=W.current,Do(a)?Cg(a):(e=J_(f,l,s),a.stateNode=e,ra(a))}return Qe(a),null;case 5:if(mt(a),s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ra(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Qe(a),null}if(e=W.current,Do(a))Cg(a);else{switch(f=Gc(St.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[je]=a,e[an]=l;t:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break t;for(;f.sibling===null;){if(f.return===null||f.return===a)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=e;t:switch(Cn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ra(a)}}return Qe(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&ra(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(r(166));if(e=St.current,Do(a)){if(e=a.stateNode,s=a.memoizedProps,l=null,f=Bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[je]=a,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Y_(e.nodeValue,s)),e||Er(a)}else e=Gc(e).createTextNode(l),e[je]=a,a.stateNode=e}return Qe(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Do(a),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[je]=a}else Uo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Qe(a),f=!1}else f=Ug(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(ia(a),a):(ia(a),null)}if(ia(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==e&&s&&(a.child.flags|=8192),Rc(a,a.updateQueue),Qe(a),null;case 4:return pt(),e===null&&id(a.stateNode.containerInfo),Qe(a),null;case 10:return ea(a.type),Qe(a),null;case 19:if(At(mn),f=a.memoizedState,f===null)return Qe(a),null;if(l=(a.flags&128)!==0,m=f.rendering,m===null)if(l)qo(f,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=Ec(e),m!==null){for(a.flags|=128,qo(f,!1),e=m.updateQueue,a.updateQueue=e,Rc(a,e),a.subtreeFlags=0,e=s,s=a.child;s!==null;)wg(s,e),s=s.sibling;return Ct(mn,mn.current&1|2),a.child}e=e.sibling}f.tail!==null&&It()>Uc&&(a.flags|=128,l=!0,qo(f,!1),a.lanes=4194304)}else{if(!l)if(e=Ec(m),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Rc(a,e),qo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Oe)return Qe(a),null}else 2*It()-f.renderingStartTime>Uc&&s!==536870912&&(a.flags|=128,l=!0,qo(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(e=f.last,e!==null?e.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=It(),a.sibling=null,e=mn.current,Ct(mn,l?e&1|2:e&1),a):(Qe(a),null);case 22:case 23:return ia(a),rh(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(s&536870912)!==0&&(a.flags&128)===0&&(Qe(a),a.subtreeFlags&6&&(a.flags|=8192)):Qe(a),s=a.updateQueue,s!==null&&Rc(a,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==s&&(a.flags|=2048),e!==null&&At(Ar),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),ea(pn),Qe(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function jM(e,a){switch(Wf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return ea(pn),pt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return mt(a),null;case 13:if(ia(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Uo()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return At(mn),null;case 4:return pt(),null;case 10:return ea(a.type),null;case 22:case 23:return ia(a),rh(),e!==null&&At(Ar),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return ea(pn),null;case 25:return null;default:return null}}function t_(e,a){switch(Wf(a),a.tag){case 3:ea(pn),pt();break;case 26:case 27:case 5:mt(a);break;case 4:pt();break;case 13:ia(a);break;case 19:At(mn);break;case 10:ea(a.type);break;case 22:case 23:ia(a),rh(),e!==null&&At(Ar);break;case 24:ea(pn)}}function jo(e,a){try{var s=a.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(A){We(a,a.return,A)}}function Ha(e,a,s){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,f=a;var H=s,it=A;try{it()}catch(vt){We(f,H,vt)}}}l=l.next}while(l!==m)}}catch(vt){We(a,a.return,vt)}}function e_(e){var a=e.updateQueue;if(a!==null){var s=e.stateNode;try{Vg(a,s)}catch(l){We(e,e.return,l)}}}function n_(e,a,s){s.props=Rr(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){We(e,a,l)}}function Zo(e,a){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){We(e,a,f)}}function zi(e,a){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){We(e,a,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){We(e,a,f)}else s.current=null}function i_(e){var a=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){We(e,e.return,f)}}function Lh(e,a,s){try{var l=e.stateNode;mE(l,e.type,s,a),l[an]=a}catch(f){We(e,e.return,f)}}function a_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function Oh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||a_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ph(e,a,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(e),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Hc));else if(l!==4&&(l===27&&ja(e.type)&&(s=e.stateNode,a=null),e=e.child,e!==null))for(Ph(e,a,s),e=e.sibling;e!==null;)Ph(e,a,s),e=e.sibling}function Cc(e,a,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?s.insertBefore(e,a):s.appendChild(e);else if(l!==4&&(l===27&&ja(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Cc(e,a,s),e=e.sibling;e!==null;)Cc(e,a,s),e=e.sibling}function r_(e){var a=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Cn(a,l,s),a[je]=e,a[an]=s}catch(m){We(e,e.return,m)}}var sa=!1,sn=!1,zh=!1,s_=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function ZM(e,a){if(e=e.containerInfo,sd=qc,e=_g(e),Of(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var M=0,A=-1,H=-1,it=0,vt=0,Tt=e,rt=null;e:for(;;){for(var st;Tt!==s||f!==0&&Tt.nodeType!==3||(A=M+f),Tt!==m||l!==0&&Tt.nodeType!==3||(H=M+l),Tt.nodeType===3&&(M+=Tt.nodeValue.length),(st=Tt.firstChild)!==null;)rt=Tt,Tt=st;for(;;){if(Tt===e)break e;if(rt===s&&++it===f&&(A=M),rt===m&&++vt===l&&(H=M),(st=Tt.nextSibling)!==null)break;Tt=rt,rt=Tt.parentNode}Tt=st}s=A===-1||H===-1?null:{start:A,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(od={focusedElem:e,selectionRange:s},qc=!1,Mn=a;Mn!==null;)if(a=Mn,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,Mn=e;else for(;Mn!==null;){switch(a=Mn,m=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=a,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ce=Rr(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(ce,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(re){We(s,s.return,re)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,s=e.nodeType,s===9)ud(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,Mn=e;break}Mn=a.return}}function o_(e,a,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ga(e,s),l&4&&jo(5,s);break;case 1:if(Ga(e,s),l&4)if(e=s.stateNode,a===null)try{e.componentDidMount()}catch(M){We(s,s.return,M)}else{var f=Rr(s.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(f,a,e.__reactInternalSnapshotBeforeUpdate)}catch(M){We(s,s.return,M)}}l&64&&e_(s),l&512&&Zo(s,s.return);break;case 3:if(Ga(e,s),l&64&&(e=s.updateQueue,e!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{Vg(e,a)}catch(M){We(s,s.return,M)}}break;case 27:a===null&&l&4&&r_(s);case 26:case 5:Ga(e,s),a===null&&l&4&&i_(s),l&512&&Zo(s,s.return);break;case 12:Ga(e,s);break;case 13:Ga(e,s),l&4&&u_(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=aE.bind(null,s),ME(e,s))));break;case 22:if(l=s.memoizedState!==null||sa,!l){a=a!==null&&a.memoizedState!==null||sn,f=sa;var m=sn;sa=l,(sn=a)&&!m?Va(e,s,(s.subtreeFlags&8772)!==0):Ga(e,s),sa=f,sn=m}break;case 30:break;default:Ga(e,s)}}function l_(e){var a=e.alternate;a!==null&&(e.alternate=null,l_(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ca(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Wn=!1;function oa(e,a,s){for(s=s.child;s!==null;)c_(e,a,s),s=s.sibling}function c_(e,a,s){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(_t,s)}catch{}switch(s.tag){case 26:sn||zi(s,a),oa(e,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||zi(s,a);var l=Ze,f=Wn;ja(s.type)&&(Ze=s.stateNode,Wn=!1),oa(e,a,s),al(s.stateNode),Ze=l,Wn=f;break;case 5:sn||zi(s,a);case 6:if(l=Ze,f=Wn,Ze=null,oa(e,a,s),Ze=l,Wn=f,Ze!==null)if(Wn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(m){We(s,a,m)}else try{Ze.removeChild(s.stateNode)}catch(m){We(s,a,m)}break;case 18:Ze!==null&&(Wn?(e=Ze,Q_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),hl(e)):Q_(Ze,s.stateNode));break;case 4:l=Ze,f=Wn,Ze=s.stateNode.containerInfo,Wn=!0,oa(e,a,s),Ze=l,Wn=f;break;case 0:case 11:case 14:case 15:sn||Ha(2,s,a),sn||Ha(4,s,a),oa(e,a,s);break;case 1:sn||(zi(s,a),l=s.stateNode,typeof l.componentWillUnmount=="function"&&n_(s,a,l)),oa(e,a,s);break;case 21:oa(e,a,s);break;case 22:sn=(l=sn)||s.memoizedState!==null,oa(e,a,s),sn=l;break;default:oa(e,a,s)}}function u_(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hl(e)}catch(s){We(a,a.return,s)}}function KM(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new s_),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new s_),a;default:throw Error(r(435,e.tag))}}function Fh(e,a){var s=KM(e);a.forEach(function(l){var f=rE.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function $n(e,a){var s=a.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,M=a,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(ja(A.type)){Ze=A.stateNode,Wn=!1;break t}break;case 5:Ze=A.stateNode,Wn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if(Ze===null)throw Error(r(160));c_(m,M,f),Ze=null,Wn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)f_(a,e),a=a.sibling}var Si=null;function f_(e,a){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(a,e),Jn(e),l&4&&(Ha(3,e,e.return),jo(3,e),Ha(5,e,e.return));break;case 1:$n(a,e),Jn(e),l&512&&(sn||s===null||zi(s,s.return)),l&64&&sa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Si;if($n(a,e),Jn(e),l&512&&(sn||s===null||zi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ra]||m[je]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Cn(m,l,s),m[je]=e,cn(m),l=m;break t;case"link":var M=rv("link","href",f).get(l+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(m=M[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break e}}m=f.createElement(l),Cn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=rv("meta","content",f).get(l+(s.content||""))){for(A=0;A<M.length;A++)if(m=M[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break e}}m=f.createElement(l),Cn(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[je]=e,cn(m),l=m}e.stateNode=l}else sv(f,e.type,e.stateNode);else e.stateNode=av(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?sv(f,e.type,e.stateNode):av(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Lh(e,e.memoizedProps,s.memoizedProps)}break;case 27:$n(a,e),Jn(e),l&512&&(sn||s===null||zi(s,s.return)),s!==null&&l&4&&Lh(e,e.memoizedProps,s.memoizedProps);break;case 5:if($n(a,e),Jn(e),l&512&&(sn||s===null||zi(s,s.return)),e.flags&32){f=e.stateNode;try{Li(f,"")}catch(st){We(e,e.return,st)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Lh(e,f,s!==null?s.memoizedProps:f)),l&1024&&(zh=!0);break;case 6:if($n(a,e),Jn(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(st){We(e,e.return,st)}}break;case 3:if(Xc=null,f=Si,Si=Vc(a.containerInfo),$n(a,e),Si=f,Jn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{hl(a.containerInfo)}catch(st){We(e,e.return,st)}zh&&(zh=!1,h_(e));break;case 4:l=Si,Si=Vc(e.stateNode.containerInfo),$n(a,e),Jn(e),Si=l;break;case 12:$n(a,e),Jn(e);break;case 13:$n(a,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kh=It()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Fh(e,l)));break;case 22:f=e.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,it=sa,vt=sn;if(sa=it||f,sn=vt||H,$n(a,e),sn=vt,sa=it,Jn(e),l&8192)t:for(a=e.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(s===null||H||sa||sn||Cr(e)),s=null,a=e;;){if(a.tag===5||a.tag===26){if(s===null){H=s=a;try{if(m=H.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=H.stateNode;var Tt=H.memoizedProps.style,rt=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(st){We(H,H.return,st)}}}else if(a.tag===6){if(s===null){H=a;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(st){We(H,H.return,st)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Fh(e,s))));break;case 19:$n(a,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Fh(e,l)));break;case 30:break;case 21:break;default:$n(a,e),Jn(e)}}function Jn(e){var a=e.flags;if(a&2){try{for(var s,l=e.return;l!==null;){if(a_(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=Oh(e);Cc(e,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Li(M,""),s.flags&=-33);var A=Oh(e);Cc(e,A,M);break;case 3:case 4:var H=s.stateNode.containerInfo,it=Oh(e);Ph(e,it,H);break;default:throw Error(r(161))}}catch(vt){We(e,e.return,vt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function h_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;h_(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ga(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)o_(e,a.alternate,a),a=a.sibling}function Cr(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Ha(4,a,a.return),Cr(a);break;case 1:zi(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&n_(a,a.return,s),Cr(a);break;case 27:al(a.stateNode);case 26:case 5:zi(a,a.return),Cr(a);break;case 22:a.memoizedState===null&&Cr(a);break;case 30:Cr(a);break;default:Cr(a)}e=e.sibling}}function Va(e,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=e,m=a,M=m.flags;switch(m.tag){case 0:case 11:case 15:Va(f,m,s),jo(4,m);break;case 1:if(Va(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(it){We(l,l.return,it)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)Gg(H[f],A)}catch(it){We(l,l.return,it)}}s&&M&64&&e_(m),Zo(m,m.return);break;case 27:r_(m);case 26:case 5:Va(f,m,s),s&&l===null&&M&4&&i_(m),Zo(m,m.return);break;case 12:Va(f,m,s);break;case 13:Va(f,m,s),s&&M&4&&u_(f,m);break;case 22:m.memoizedState===null&&Va(f,m,s),Zo(m,m.return);break;case 30:break;default:Va(f,m,s)}a=a.sibling}}function Bh(e,a){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Oo(s))}function Ih(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Oo(e))}function Fi(e,a,s,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)d_(e,a,s,l),a=a.sibling}function d_(e,a,s,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(e,a,s,l),f&2048&&jo(9,a);break;case 1:Fi(e,a,s,l);break;case 3:Fi(e,a,s,l),f&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Oo(e)));break;case 12:if(f&2048){Fi(e,a,s,l),e=a.stateNode;try{var m=a.memoizedProps,M=m.id,A=m.onPostCommit;typeof A=="function"&&A(M,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){We(a,a.return,H)}}else Fi(e,a,s,l);break;case 13:Fi(e,a,s,l);break;case 23:break;case 22:m=a.stateNode,M=a.alternate,a.memoizedState!==null?m._visibility&2?Fi(e,a,s,l):Ko(e,a):m._visibility&2?Fi(e,a,s,l):(m._visibility|=2,xs(e,a,s,l,(a.subtreeFlags&10256)!==0)),f&2048&&Bh(M,a);break;case 24:Fi(e,a,s,l),f&2048&&Ih(a.alternate,a);break;default:Fi(e,a,s,l)}}function xs(e,a,s,l,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=e,M=a,A=s,H=l,it=M.flags;switch(M.tag){case 0:case 11:case 15:xs(m,M,A,H,f),jo(8,M);break;case 23:break;case 22:var vt=M.stateNode;M.memoizedState!==null?vt._visibility&2?xs(m,M,A,H,f):Ko(m,M):(vt._visibility|=2,xs(m,M,A,H,f)),f&&it&2048&&Bh(M.alternate,M);break;case 24:xs(m,M,A,H,f),f&&it&2048&&Ih(M.alternate,M);break;default:xs(m,M,A,H,f)}a=a.sibling}}function Ko(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=e,l=a,f=l.flags;switch(l.tag){case 22:Ko(s,l),f&2048&&Bh(l.alternate,l);break;case 24:Ko(s,l),f&2048&&Ih(l.alternate,l);break;default:Ko(s,l)}a=a.sibling}}var Qo=8192;function ys(e){if(e.subtreeFlags&Qo)for(e=e.child;e!==null;)p_(e),e=e.sibling}function p_(e){switch(e.tag){case 26:ys(e),e.flags&Qo&&e.memoizedState!==null&&PE(Si,e.memoizedState,e.memoizedProps);break;case 5:ys(e);break;case 3:case 4:var a=Si;Si=Vc(e.stateNode.containerInfo),ys(e),Si=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Qo,Qo=16777216,ys(e),Qo=a):ys(e));break;default:ys(e)}}function m_(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function $o(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];Mn=l,__(l,e)}m_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)g_(e),e=e.sibling}function g_(e){switch(e.tag){case 0:case 11:case 15:$o(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:$o(e);break;case 12:$o(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Dc(e)):$o(e);break;default:$o(e)}}function Dc(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];Mn=l,__(l,e)}m_(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Ha(8,a,a.return),Dc(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,Dc(a));break;default:Dc(a)}e=e.sibling}}function __(e,a){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Ha(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Oo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else t:for(s=e;Mn!==null;){l=Mn;var f=l.sibling,m=l.return;if(l_(l),l===s){Mn=null;break t}if(f!==null){f.return=m,Mn=f;break t}Mn=m}}}var QM={getCacheForType:function(e){var a=On(pn),s=a.data.get(e);return s===void 0&&(s=e(),a.data.set(e,s)),s}},$M=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,Se=null,Re=0,ze=0,ti=null,ka=!1,Ss=!1,Hh=!1,la=0,nn=0,Xa=0,Dr=0,Gh=0,di=0,Ms=0,Jo=null,Yn=null,Vh=!1,kh=0,Uc=1/0,Nc=null,Wa=null,Rn=0,Ya=null,Es=null,bs=0,Xh=0,Wh=null,v_=null,tl=0,Yh=null;function ei(){if((Pe&2)!==0&&Re!==0)return Re&-Re;if(F.T!==null){var e=fs;return e!==0?e:Jh()}return we()}function x_(){di===0&&(di=(Re&536870912)===0||Oe?V():536870912);var e=hi.current;return e!==null&&(e.flags|=32),di}function ni(e,a,s){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Ts(e,0),qa(e,Re,di,!1)),Et(e,s),((Pe&2)===0||e!==qe)&&(e===qe&&((Pe&2)===0&&(Dr|=s),nn===4&&qa(e,Re,di,!1)),Bi(e))}function y_(e,a,s){if((Pe&6)!==0)throw Error(r(327));var l=!s&&(a&124)===0&&(a&e.expiredLanes)===0||Kt(e,a),f=l?eE(e,a):Zh(e,a,!0),m=l;do{if(f===0){Ss&&!l&&qa(e,a,0,!1);break}else{if(s=e.current.alternate,m&&!JM(s)){f=Zh(e,a,!1),m=!1;continue}if(f===2){if(m=a,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;t:{var A=e;f=Jo;var H=A.current.memoizedState.isDehydrated;if(H&&(Ts(A,M).flags|=256),M=Zh(A,M,!1),M!==2){if(Hh&&!H){A.errorRecoveryDisabledLanes|=m,Dr|=m,f=4;break t}m=Yn,Yn=f,m!==null&&(Yn===null?Yn=m:Yn.push.apply(Yn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){Ts(e,0),qa(e,a,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:qa(l,a,di,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(f=kh+300-It(),10<f)){if(qa(l,a,di,!ka),Ft(l,0,!0)!==0)break t;l.timeoutHandle=Z_(S_.bind(null,l,s,Yn,Nc,Vh,a,di,Dr,Ms,ka,m,2,-0,0),f);break t}S_(l,s,Yn,Nc,Vh,a,di,Dr,Ms,ka,m,0,-0,0)}}break}while(!0);Bi(e)}function S_(e,a,s,l,f,m,M,A,H,it,vt,Tt,rt,st){if(e.timeoutHandle=-1,Tt=a.subtreeFlags,(Tt&8192||(Tt&16785408)===16785408)&&(ol={stylesheets:null,count:0,unsuspend:OE},p_(a),Tt=zE(),Tt!==null)){e.cancelPendingCommit=Tt(R_.bind(null,e,a,m,s,l,f,M,A,H,vt,1,rt,st)),qa(e,m,M,!it);return}R_(e,a,m,s,l,f,M,A,H)}function JM(e){for(var a=e;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Kn(m(),f))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function qa(e,a,s,l){a&=~Gh,a&=~Dr,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var f=a;0<f;){var m=31-Lt(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&Bt(e,s,a)}function Lc(){return(Pe&6)===0?(el(0),!1):!0}function qh(){if(Se!==null){if(ze===0)var e=Se.return;else e=Se,ta=br=null,uh(e),_s=null,Wo=0,e=Se;for(;e!==null;)t_(e.alternate,e),e=e.return;Se=null}}function Ts(e,a){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,_E(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),qh(),qe=e,Se=s=Qi(e.current,null),Re=a,ze=0,ti=null,ka=!1,Ss=Kt(e,a),Hh=!1,Ms=di=Gh=Dr=Xa=nn=0,Yn=Jo=null,Vh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var f=31-Lt(l),m=1<<f;a|=e[f],l&=~m}return la=a,ec(),s}function M_(e,a){_e=null,F.H=yc,a===zo||a===uc?(a=Ig(),ze=3):a===zg?(a=Ig(),ze=4):ze=a===H0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ti=a,Se===null&&(nn=1,Tc(e,li(a,e.current)))}function E_(){var e=F.H;return F.H=yc,e===null?yc:e}function b_(){var e=F.A;return F.A=QM,e}function jh(){nn=4,ka||(Re&4194048)!==Re&&hi.current!==null||(Ss=!0),(Xa&134217727)===0&&(Dr&134217727)===0||qe===null||qa(qe,Re,di,!1)}function Zh(e,a,s){var l=Pe;Pe|=2;var f=E_(),m=b_();(qe!==e||Re!==a)&&(Nc=null,Ts(e,a)),a=!1;var M=nn;t:do try{if(ze!==0&&Se!==null){var A=Se,H=ti;switch(ze){case 8:qh(),M=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(a=!0);var it=ze;if(ze=0,ti=null,As(e,A,H,it),s&&Ss){M=0;break t}break;default:it=ze,ze=0,ti=null,As(e,A,H,it)}}tE(),M=nn;break}catch(vt){M_(e,vt)}while(!0);return a&&e.shellSuspendCounter++,ta=br=null,Pe=l,F.H=f,F.A=m,Se===null&&(qe=null,Re=0,ec()),M}function tE(){for(;Se!==null;)T_(Se)}function eE(e,a){var s=Pe;Pe|=2;var l=E_(),f=b_();qe!==e||Re!==a?(Nc=null,Uc=It()+500,Ts(e,a)):Ss=Kt(e,a);t:do try{if(ze!==0&&Se!==null){a=Se;var m=ti;e:switch(ze){case 1:ze=0,ti=null,As(e,a,m,1);break;case 2:case 9:if(Fg(m)){ze=0,ti=null,A_(a);break}a=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Bi(e)},m.then(a,a);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Fg(m)?(ze=0,ti=null,A_(a)):(ze=0,ti=null,As(e,a,m,7));break;case 5:var M=null;switch(Se.tag){case 26:M=Se.memoizedState;case 5:case 27:var A=Se;if(!M||ov(M)){ze=0,ti=null;var H=A.sibling;if(H!==null)Se=H;else{var it=A.return;it!==null?(Se=it,Oc(it)):Se=null}break e}}ze=0,ti=null,As(e,a,m,5);break;case 6:ze=0,ti=null,As(e,a,m,6);break;case 8:qh(),nn=6;break t;default:throw Error(r(462))}}nE();break}catch(vt){M_(e,vt)}while(!0);return ta=br=null,F.H=l,F.A=f,Pe=s,Se!==null?0:(qe=null,Re=0,ec(),nn)}function nE(){for(;Se!==null&&!de();)T_(Se)}function T_(e){var a=$0(e.alternate,e,la);e.memoizedProps=e.pendingProps,a===null?Oc(e):Se=a}function A_(e){var a=e,s=a.alternate;switch(a.tag){case 15:case 0:a=Y0(s,a,a.pendingProps,a.type,void 0,Re);break;case 11:a=Y0(s,a,a.pendingProps,a.type.render,a.ref,Re);break;case 5:uh(a);default:t_(s,a),a=Se=wg(a,la),a=$0(s,a,la)}e.memoizedProps=e.pendingProps,a===null?Oc(e):Se=a}function As(e,a,s,l){ta=br=null,uh(a),_s=null,Wo=0;var f=a.return;try{if(WM(e,f,a,s,Re)){nn=1,Tc(e,li(s,e.current)),Se=null;return}}catch(m){if(f!==null)throw Se=f,m;nn=1,Tc(e,li(s,e.current)),Se=null;return}a.flags&32768?(Oe||l===1?e=!0:Ss||(Re&536870912)!==0?e=!1:(ka=e=!0,(l===2||l===9||l===3||l===6)&&(l=hi.current,l!==null&&l.tag===13&&(l.flags|=16384))),w_(a,e)):Oc(a)}function Oc(e){var a=e;do{if((a.flags&32768)!==0){w_(a,ka);return}e=a.return;var s=qM(a.alternate,a,la);if(s!==null){Se=s;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=e}while(a!==null);nn===0&&(nn=5)}function w_(e,a){do{var s=jM(e.alternate,e);if(s!==null){s.flags&=32767,Se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(e=e.sibling,e!==null)){Se=e;return}Se=e=s}while(e!==null);nn=6,Se=null}function R_(e,a,s,l,f,m,M,A,H){e.cancelPendingCommit=null;do Pc();while(Rn!==0);if((Pe&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(m=a.lanes|a.childLanes,m|=If,Gt(e,s,m,M,A,H),e===qe&&(Se=qe=null,Re=0),Es=a,Ya=e,bs=s,Xh=m,Wh=f,v_=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sE(O,function(){return L_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=Z.p,Z.p=2,M=Pe,Pe|=4;try{ZM(e,a,s)}finally{Pe=M,Z.p=f,F.T=l}}Rn=1,C_(),D_(),U_()}}function C_(){if(Rn===1){Rn=0;var e=Ya,a=Es,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=Z.p;Z.p=2;var f=Pe;Pe|=4;try{f_(a,e);var m=od,M=_g(e.containerInfo),A=m.focusedElem,H=m.selectionRange;if(M!==A&&A&&A.ownerDocument&&gg(A.ownerDocument.documentElement,A)){if(H!==null&&Of(A)){var it=H.start,vt=H.end;if(vt===void 0&&(vt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(vt,A.value.length);else{var Tt=A.ownerDocument||document,rt=Tt&&Tt.defaultView||window;if(rt.getSelection){var st=rt.getSelection(),ce=A.textContent.length,re=Math.min(H.start,ce),Ie=H.end===void 0?re:Math.min(H.end,ce);!st.extend&&re>Ie&&(M=Ie,Ie=re,re=M);var K=mg(A,re),k=mg(A,Ie);if(K&&k&&(st.rangeCount!==1||st.anchorNode!==K.node||st.anchorOffset!==K.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var tt=Tt.createRange();tt.setStart(K.node,K.offset),st.removeAllRanges(),re>Ie?(st.addRange(tt),st.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),st.addRange(tt))}}}}for(Tt=[],st=A;st=st.parentNode;)st.nodeType===1&&Tt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Tt.length;A++){var bt=Tt[A];bt.element.scrollLeft=bt.left,bt.element.scrollTop=bt.top}}qc=!!sd,od=sd=null}finally{Pe=f,Z.p=l,F.T=s}}e.current=a,Rn=2}}function D_(){if(Rn===2){Rn=0;var e=Ya,a=Es,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=Z.p;Z.p=2;var f=Pe;Pe|=4;try{o_(e,a.alternate,a)}finally{Pe=f,Z.p=l,F.T=s}}Rn=3}}function U_(){if(Rn===4||Rn===3){Rn=0,zt();var e=Ya,a=Es,s=bs,l=v_;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Rn=5:(Rn=0,Es=Ya=null,N_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Wa=null),Je(s),a=a.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(_t,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=F.T,f=Z.p,Z.p=2,F.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var A=l[M];m(A.value,{componentStack:A.stack})}}finally{F.T=a,Z.p=f}}(bs&3)!==0&&Pc(),Bi(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===Yh?tl++:(tl=0,Yh=e):tl=0,el(0)}}function N_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Oo(a)))}function Pc(e){return C_(),D_(),U_(),L_()}function L_(){if(Rn!==5)return!1;var e=Ya,a=Xh;Xh=0;var s=Je(bs),l=F.T,f=Z.p;try{Z.p=32>s?32:s,F.T=null,s=Wh,Wh=null;var m=Ya,M=bs;if(Rn=0,Es=Ya=null,bs=0,(Pe&6)!==0)throw Error(r(331));var A=Pe;if(Pe|=4,g_(m.current),d_(m,m.current,M,s),Pe=A,el(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(_t,m)}catch{}return!0}finally{Z.p=f,F.T=l,N_(e,a)}}function O_(e,a,s){a=li(s,a),a=bh(e.stateNode,a,2),e=za(e,a,2),e!==null&&(Et(e,2),Bi(e))}function We(e,a,s){if(e.tag===3)O_(e,e,s);else for(;a!==null;){if(a.tag===3){O_(a,e,s);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Wa===null||!Wa.has(l))){e=li(s,e),s=B0(2),l=za(a,s,2),l!==null&&(I0(s,l,a,e),Et(l,2),Bi(l));break}}a=a.return}}function Kh(e,a,s){var l=e.pingCache;if(l===null){l=e.pingCache=new $M;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(s)||(Hh=!0,f.add(s),e=iE.bind(null,e,a,s),a.then(e,e))}function iE(e,a,s){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,qe===e&&(Re&s)===s&&(nn===4||nn===3&&(Re&62914560)===Re&&300>It()-kh?(Pe&2)===0&&Ts(e,0):Gh|=s,Ms===Re&&(Ms=0)),Bi(e)}function P_(e,a){a===0&&(a=Pt()),e=os(e,a),e!==null&&(Et(e,a),Bi(e))}function aE(e){var a=e.memoizedState,s=0;a!==null&&(s=a.retryLane),P_(e,s)}function rE(e,a){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(a),P_(e,s)}function sE(e,a){return wt(e,a)}var zc=null,ws=null,Qh=!1,Fc=!1,$h=!1,Ur=0;function Bi(e){e!==ws&&e.next===null&&(ws===null?zc=ws=e:ws=ws.next=e),Fc=!0,Qh||(Qh=!0,lE())}function el(e,a){if(!$h&&Fc){$h=!0;do for(var s=!1,l=zc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Lt(42|e)+1)-1,m&=f&~(M&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,I_(l,m))}else m=Re,m=Ft(l,l===qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Kt(l,m)||(s=!0,I_(l,m));l=l.next}while(s);$h=!1}}function oE(){z_()}function z_(){Fc=Qh=!1;var e=0;Ur!==0&&(gE()&&(e=Ur),Ur=0);for(var a=It(),s=null,l=zc;l!==null;){var f=l.next,m=F_(l,a);m===0?(l.next=null,s===null?zc=f:s.next=f,f===null&&(ws=s)):(s=l,(e!==0||(m&3)!==0)&&(Fc=!0)),l=f}el(e)}function F_(e,a){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-Lt(m),A=1<<M,H=f[M];H===-1?((A&s)===0||(A&l)!==0)&&(f[M]=he(A,a)):H<=a&&(e.expiredLanes|=A),m&=~A}if(a=qe,s=Re,s=Ft(e,e===a?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===a&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&L(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Kt(e,s)){if(a=s&-s,a===e.callbackPriority)return a;switch(l!==null&&L(l),Je(s)){case 2:case 8:s=Zt;break;case 32:s=O;break;case 268435456:s=at;break;default:s=O}return l=B_.bind(null,e),s=wt(s,l),e.callbackPriority=a,e.callbackNode=s,a}return l!==null&&l!==null&&L(l),e.callbackPriority=2,e.callbackNode=null,2}function B_(e,a){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Pc()&&e.callbackNode!==s)return null;var l=Re;return l=Ft(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(y_(e,l,a),F_(e,It()),e.callbackNode!=null&&e.callbackNode===s?B_.bind(null,e):null)}function I_(e,a){if(Pc())return null;y_(e,a,!0)}function lE(){vE(function(){(Pe&6)!==0?wt(xe,oE):z_()})}function Jh(){return Ur===0&&(Ur=V()),Ur}function H_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jl(""+e)}function G_(e,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,e.id&&s.setAttribute("form",e.id),a.parentNode.insertBefore(s,a),e=new FormData(e),s.parentNode.removeChild(s),e}function cE(e,a,s,l,f){if(a==="submit"&&s&&s.stateNode===f){var m=H_((f[an]||null).action),M=l.submitter;M&&(a=(a=M[an]||null)?H_(a.formAction):M.getAttribute("formAction"),a!==null&&(m=a,M=null));var A=new $l("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ur!==0){var H=M?G_(f,M):new FormData(f);xh(s,{pending:!0,data:H,method:f.method,action:m},null,H)}}else typeof m=="function"&&(A.preventDefault(),H=M?G_(f,M):new FormData(f),xh(s,{pending:!0,data:H,method:f.method,action:m},m,H))},currentTarget:f}]})}}for(var td=0;td<Bf.length;td++){var ed=Bf[td],uE=ed.toLowerCase(),fE=ed[0].toUpperCase()+ed.slice(1);yi(uE,"on"+fE)}yi(yg,"onAnimationEnd"),yi(Sg,"onAnimationIteration"),yi(Mg,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(RM,"onTransitionRun"),yi(CM,"onTransitionStart"),yi(DM,"onTransitionCancel"),yi(Eg,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function V_(e,a){a=(a&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var M=l.length-1;0<=M;M--){var A=l[M],H=A.instance,it=A.currentTarget;if(A=A.listener,H!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=it;try{m(f)}catch(vt){bc(vt)}f.currentTarget=null,m=H}else for(M=0;M<l.length;M++){if(A=l[M],H=A.instance,it=A.currentTarget,A=A.listener,H!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=it;try{m(f)}catch(vt){bc(vt)}f.currentTarget=null,m=H}}}}function Me(e,a){var s=a[Xi];s===void 0&&(s=a[Xi]=new Set);var l=e+"__bubble";s.has(l)||(k_(a,e,2,!1),s.add(l))}function nd(e,a,s){var l=0;a&&(l|=4),k_(s,e,l,a)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function id(e){if(!e[Bc]){e[Bc]=!0,Yl.forEach(function(s){s!=="selectionchange"&&(hE.has(s)||nd(s,!1,e),nd(s,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Bc]||(a[Bc]=!0,nd("selectionchange",!1,a))}}function k_(e,a,s,l){switch(dv(a)){case 2:var f=IE;break;case 8:f=HE;break;default:f=_d}s=f.bind(null,a,s,e),f=void 0,!Tf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(a,s,{capture:!0,passive:f}):e.addEventListener(a,s,!0):f!==void 0?e.addEventListener(a,s,{passive:f}):e.addEventListener(a,s,!1)}function ad(e,a,s,l,f){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===f)break;if(M===4)for(M=l.return;M!==null;){var H=M.tag;if((H===3||H===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;A!==null;){if(M=Wi(A),M===null)return;if(H=M.tag,H===5||H===6||H===26||H===27){l=m=M;continue t}A=A.parentNode}}l=l.return}Km(function(){var it=m,vt=Ef(s),Tt=[];t:{var rt=bg.get(e);if(rt!==void 0){var st=$l,ce=e;switch(e){case"keypress":if(Kl(s)===0)break t;case"keydown":case"keyup":st=sM;break;case"focusin":ce="focus",st=Cf;break;case"focusout":ce="blur",st=Cf;break;case"beforeblur":case"afterblur":st=Cf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=jS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=cM;break;case yg:case Sg:case Mg:st=QS;break;case Eg:st=fM;break;case"scroll":case"scrollend":st=YS;break;case"wheel":st=dM;break;case"copy":case"cut":case"paste":st=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=eg;break;case"toggle":case"beforetoggle":st=mM}var re=(a&4)!==0,Ie=!re&&(e==="scroll"||e==="scrollend"),K=re?rt!==null?rt+"Capture":null:rt;re=[];for(var k=it,tt;k!==null;){var bt=k;if(tt=bt.stateNode,bt=bt.tag,bt!==5&&bt!==26&&bt!==27||tt===null||K===null||(bt=So(k,K),bt!=null&&re.push(il(k,bt,tt))),Ie)break;k=k.return}0<re.length&&(rt=new st(rt,ce,null,s,vt),Tt.push({event:rt,listeners:re}))}}if((a&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",rt&&s!==Mf&&(ce=s.relatedTarget||s.fromElement)&&(Wi(ce)||ce[Un]))break t;if((st||rt)&&(rt=vt.window===vt?vt:(rt=vt.ownerDocument)?rt.defaultView||rt.parentWindow:window,st?(ce=s.relatedTarget||s.toElement,st=it,ce=ce?Wi(ce):null,ce!==null&&(Ie=c(ce),re=ce.tag,ce!==Ie||re!==5&&re!==27&&re!==6)&&(ce=null)):(st=null,ce=it),st!==ce)){if(re=Jm,bt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(re=eg,bt="onPointerLeave",K="onPointerEnter",k="pointer"),Ie=st==null?rt:mr(st),tt=ce==null?rt:mr(ce),rt=new re(bt,k+"leave",st,s,vt),rt.target=Ie,rt.relatedTarget=tt,bt=null,Wi(vt)===it&&(re=new re(K,k+"enter",ce,s,vt),re.target=tt,re.relatedTarget=Ie,bt=re),Ie=bt,st&&ce)e:{for(re=st,K=ce,k=0,tt=re;tt;tt=Rs(tt))k++;for(tt=0,bt=K;bt;bt=Rs(bt))tt++;for(;0<k-tt;)re=Rs(re),k--;for(;0<tt-k;)K=Rs(K),tt--;for(;k--;){if(re===K||K!==null&&re===K.alternate)break e;re=Rs(re),K=Rs(K)}re=null}else re=null;st!==null&&X_(Tt,rt,st,re,!1),ce!==null&&Ie!==null&&X_(Tt,Ie,ce,re,!0)}}t:{if(rt=it?mr(it):window,st=rt.nodeName&&rt.nodeName.toLowerCase(),st==="select"||st==="input"&&rt.type==="file")var $t=cg;else if(og(rt))if(ug)$t=TM;else{$t=EM;var ve=MM}else st=rt.nodeName,!st||st.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Sf(it.elementType)&&($t=cg):$t=bM;if($t&&($t=$t(e,it))){lg(Tt,$t,s,vt);break t}ve&&ve(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&Ln(rt,"number",rt.value)}switch(ve=it?mr(it):window,e){case"focusin":(og(ve)||ve.contentEditable==="true")&&(as=ve,Pf=it,Co=null);break;case"focusout":Co=Pf=as=null;break;case"mousedown":zf=!0;break;case"contextmenu":case"mouseup":case"dragend":zf=!1,vg(Tt,s,vt);break;case"selectionchange":if(wM)break;case"keydown":case"keyup":vg(Tt,s,vt)}var ee;if(Uf)t:{switch(e){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else is?rg(e,s)&&(se="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(se="onCompositionStart");se&&(ng&&s.locale!=="ko"&&(is||se!=="onCompositionStart"?se==="onCompositionEnd"&&is&&(ee=Qm()):(Na=vt,Af="value"in Na?Na.value:Na.textContent,is=!0)),ve=Ic(it,se),0<ve.length&&(se=new tg(se,e,null,s,vt),Tt.push({event:se,listeners:ve}),ee?se.data=ee:(ee=sg(s),ee!==null&&(se.data=ee)))),(ee=_M?vM(e,s):xM(e,s))&&(se=Ic(it,"onBeforeInput"),0<se.length&&(ve=new tg("onBeforeInput","beforeinput",null,s,vt),Tt.push({event:ve,listeners:se}),ve.data=ee)),cE(Tt,e,it,s,vt)}V_(Tt,a)})}function il(e,a,s){return{instance:e,listener:a,currentTarget:s}}function Ic(e,a){for(var s=a+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=So(e,s),f!=null&&l.unshift(il(e,f,m)),f=So(e,a),f!=null&&l.push(il(e,f,m))),e.tag===3)return l;e=e.return}return[]}function Rs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function X_(e,a,s,l,f){for(var m=a._reactName,M=[];s!==null&&s!==l;){var A=s,H=A.alternate,it=A.stateNode;if(A=A.tag,H!==null&&H===l)break;A!==5&&A!==26&&A!==27||it===null||(H=it,f?(it=So(s,m),it!=null&&M.unshift(il(s,it,H))):f||(it=So(s,m),it!=null&&M.push(il(s,it,H)))),s=s.return}M.length!==0&&e.push({event:a,listeners:M})}var dE=/\r\n?/g,pE=/\u0000|\uFFFD/g;function W_(e){return(typeof e=="string"?e:""+e).replace(dE,`
`).replace(pE,"")}function Y_(e,a){return a=W_(a),W_(e)===a}function Hc(){}function Be(e,a,s,l,f,m){switch(s){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Li(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Li(e,""+l);break;case"className":Xt(e,"class",l);break;case"tabIndex":Xt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,s,l);break;case"style":jm(e,l,m);break;case"data":if(a!=="object"){Xt(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=jl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(a!=="input"&&Be(e,a,"name",f.name,f,null),Be(e,a,"formEncType",f.formEncType,f,null),Be(e,a,"formMethod",f.formMethod,f,null),Be(e,a,"formTarget",f.formTarget,f,null)):(Be(e,a,"encType",f.encType,f,null),Be(e,a,"method",f.method,f,null),Be(e,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=jl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Hc);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=jl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Ot(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ot(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=XS.get(s)||s,Ot(e,s,l))}}function rd(e,a,s,l,f,m){switch(s){case"style":jm(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Li(e,l):(typeof l=="number"||typeof l=="bigint")&&Li(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ql.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),a=s.slice(2,f?s.length-7:void 0),m=e[an]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(a,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(a,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Ot(e,s,l)}}}function Cn(e,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Be(e,a,m,M,s,null)}}f&&Be(e,a,"srcSet",s.srcSet,s,null),l&&Be(e,a,"src",s.src,s,null);return;case"input":Me("invalid",e);var A=m=M=f=null,H=null,it=null;for(l in s)if(s.hasOwnProperty(l)){var vt=s[l];if(vt!=null)switch(l){case"name":f=vt;break;case"type":M=vt;break;case"checked":H=vt;break;case"defaultChecked":it=vt;break;case"value":m=vt;break;case"defaultValue":A=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,a));break;default:Be(e,a,l,vt,s,null)}}Xe(e,m,A,H,it,M,f,!1),tn(e);return;case"select":Me("invalid",e),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Be(e,a,f,A,s,null)}a=m,s=M,e.multiple=!!l,a!=null?dn(e,!!l,a,!1):s!=null&&dn(e,!!l,s,!0);return;case"textarea":Me("invalid",e),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Be(e,a,M,A,s,null)}An(e,l,f,m),tn(e);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Be(e,a,H,l,s,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<nl.length;l++)Me(nl[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in s)if(s.hasOwnProperty(it)&&(l=s[it],l!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Be(e,a,it,l,s,null)}return;default:if(Sf(a)){for(vt in s)s.hasOwnProperty(vt)&&(l=s[vt],l!==void 0&&rd(e,a,vt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Be(e,a,A,l,s,null))}function mE(e,a,s,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,A=null,H=null,it=null,vt=null;for(st in s){var Tt=s[st];if(s.hasOwnProperty(st)&&Tt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":H=Tt;default:l.hasOwnProperty(st)||Be(e,a,st,null,l,Tt)}}for(var rt in l){var st=l[rt];if(Tt=s[rt],l.hasOwnProperty(rt)&&(st!=null||Tt!=null))switch(rt){case"type":m=st;break;case"name":f=st;break;case"checked":it=st;break;case"defaultChecked":vt=st;break;case"value":M=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,a));break;default:st!==Tt&&Be(e,a,rt,st,l,Tt)}}ji(e,M,A,H,it,vt,m,f);return;case"select":st=M=A=rt=null;for(m in s)if(H=s[m],s.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":st=H;default:l.hasOwnProperty(m)||Be(e,a,m,null,l,H)}for(f in l)if(m=l[f],H=s[f],l.hasOwnProperty(f)&&(m!=null||H!=null))switch(f){case"value":rt=m;break;case"defaultValue":A=m;break;case"multiple":M=m;default:m!==H&&Be(e,a,f,m,l,H)}a=A,s=M,l=st,rt!=null?dn(e,!!s,rt,!1):!!l!=!!s&&(a!=null?dn(e,!!s,a,!0):dn(e,!!s,s?[]:"",!1));return;case"textarea":st=rt=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,a,A,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":rt=f;break;case"defaultValue":st=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Be(e,a,M,f,l,m)}yn(e,rt,st);return;case"option":for(var ce in s)if(rt=s[ce],s.hasOwnProperty(ce)&&rt!=null&&!l.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Be(e,a,ce,null,l,rt)}for(H in l)if(rt=l[H],st=s[H],l.hasOwnProperty(H)&&rt!==st&&(rt!=null||st!=null))switch(H){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Be(e,a,H,rt,l,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in s)rt=s[re],s.hasOwnProperty(re)&&rt!=null&&!l.hasOwnProperty(re)&&Be(e,a,re,null,l,rt);for(it in l)if(rt=l[it],st=s[it],l.hasOwnProperty(it)&&rt!==st&&(rt!=null||st!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,a));break;default:Be(e,a,it,rt,l,st)}return;default:if(Sf(a)){for(var Ie in s)rt=s[Ie],s.hasOwnProperty(Ie)&&rt!==void 0&&!l.hasOwnProperty(Ie)&&rd(e,a,Ie,void 0,l,rt);for(vt in l)rt=l[vt],st=s[vt],!l.hasOwnProperty(vt)||rt===st||rt===void 0&&st===void 0||rd(e,a,vt,rt,l,st);return}}for(var K in s)rt=s[K],s.hasOwnProperty(K)&&rt!=null&&!l.hasOwnProperty(K)&&Be(e,a,K,null,l,rt);for(Tt in l)rt=l[Tt],st=s[Tt],!l.hasOwnProperty(Tt)||rt===st||rt==null&&st==null||Be(e,a,Tt,rt,l,st)}var sd=null,od=null;function Gc(e){return e.nodeType===9?e:e.ownerDocument}function q_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ld(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var cd=null;function gE(){var e=window.event;return e&&e.type==="popstate"?e===cd?!1:(cd=e,!0):(cd=null,!1)}var Z_=typeof setTimeout=="function"?setTimeout:void 0,_E=typeof clearTimeout=="function"?clearTimeout:void 0,K_=typeof Promise=="function"?Promise:void 0,vE=typeof queueMicrotask=="function"?queueMicrotask:typeof K_<"u"?function(e){return K_.resolve(null).then(e).catch(xE)}:Z_;function xE(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function Q_(e,a){var s=a,l=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var M=e.ownerDocument;if(s&1&&al(M.documentElement),s&2&&al(M.body),s&4)for(s=M.head,al(s),M=s.firstChild;M;){var A=M.nextSibling,H=M.nodeName;M[Ra]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(f===0){e.removeChild(m),hl(a);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);hl(a)}function ud(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ud(s),Ca(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function yE(e,a,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ra])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function SE(e,a,s){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Mi(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ME(e,a){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")a();else{var l=function(){a(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mi(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var hd=null;function $_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return e;a--}else s==="/$"&&a++}e=e.previousSibling}return null}function J_(e,a,s){switch(a=Gc(s),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function al(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ca(e)}var pi=new Map,tv=new Set;function Vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=Z.d;Z.d={f:EE,r:bE,D:TE,C:AE,L:wE,m:RE,X:DE,S:CE,M:UE};function EE(){var e=ca.f(),a=Lc();return e||a}function bE(e){var a=Yi(e);a!==null&&a.tag===5&&a.type==="form"?y0(a):ca.r(e)}var Cs=typeof document>"u"?null:document;function ev(e,a,s){var l=Cs;if(l&&typeof a=="string"&&a){var f=Ye(a);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),tv.has(f)||(tv.add(f),e={rel:e,crossOrigin:s,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),Cn(a,"link",e),cn(a),l.head.appendChild(a)))}}function TE(e){ca.D(e),ev("dns-prefetch",e,null)}function AE(e,a){ca.C(e,a),ev("preconnect",e,a)}function wE(e,a,s){ca.L(e,a,s);var l=Cs;if(l&&e&&a){var f='link[rel="preload"][as="'+Ye(a)+'"]';a==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ye(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ye(s.imageSizes)+'"]')):f+='[href="'+Ye(e)+'"]';var m=f;switch(a){case"style":m=Ds(e);break;case"script":m=Us(e)}pi.has(m)||(e=g({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:e,as:a},s),pi.set(m,e),l.querySelector(f)!==null||a==="style"&&l.querySelector(rl(m))||a==="script"&&l.querySelector(sl(m))||(a=l.createElement("link"),Cn(a,"link",e),cn(a),l.head.appendChild(a)))}}function RE(e,a){ca.m(e,a);var s=Cs;if(s&&e){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+Ye(l)+'"][href="'+Ye(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Us(e)}if(!pi.has(m)&&(e=g({rel:"modulepreload",href:e},a),pi.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(sl(m)))return}l=s.createElement("link"),Cn(l,"link",e),cn(l),s.head.appendChild(l)}}}function CE(e,a,s){ca.S(e,a,s);var l=Cs;if(l&&e){var f=Da(l).hoistableStyles,m=Ds(e);a=a||"default";var M=f.get(m);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(rl(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},s),(s=pi.get(m))&&dd(e,s);var H=M=l.createElement("link");cn(H),Cn(H,"link",e),H._p=new Promise(function(it,vt){H.onload=it,H.onerror=vt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,kc(M,a,l)}M={type:"stylesheet",instance:M,count:1,state:A},f.set(m,M)}}}function DE(e,a){ca.X(e,a);var s=Cs;if(s&&e){var l=Da(s).hoistableScripts,f=Us(e),m=l.get(f);m||(m=s.querySelector(sl(f)),m||(e=g({src:e,async:!0},a),(a=pi.get(f))&&pd(e,a),m=s.createElement("script"),cn(m),Cn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function UE(e,a){ca.M(e,a);var s=Cs;if(s&&e){var l=Da(s).hoistableScripts,f=Us(e),m=l.get(f);m||(m=s.querySelector(sl(f)),m||(e=g({src:e,async:!0,type:"module"},a),(a=pi.get(f))&&pd(e,a),m=s.createElement("script"),cn(m),Cn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function nv(e,a,s,l){var f=(f=St.current)?Vc(f):null;if(!f)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=Ds(s.href),s=Da(f).hoistableStyles,l=s.get(a),l||(l={type:"style",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ds(s.href);var m=Da(f).hoistableStyles,M=m.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=f.querySelector(rl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),pi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(e,s),m||NE(f,e,s,M.state))),a&&l===null)throw Error(r(528,""));return M}if(a&&l!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Us(s),s=Da(f).hoistableScripts,l=s.get(a),l||(l={type:"script",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ds(e){return'href="'+Ye(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function iv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function NE(e,a,s,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Cn(a,"link",s),cn(a),e.head.appendChild(a))}function Us(e){return'[src="'+Ye(e)+'"]'}function sl(e){return"script[async]"+e}function av(e,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Ye(s.href)+'"]');if(l)return a.instance=l,cn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),cn(l),Cn(l,"style",f),kc(l,s.precedence,e),a.instance=l;case"stylesheet":f=Ds(s.href);var m=e.querySelector(rl(f));if(m)return a.state.loading|=4,a.instance=m,cn(m),m;l=iv(s),(f=pi.get(f))&&dd(l,f),m=(e.ownerDocument||e).createElement("link"),cn(m);var M=m;return M._p=new Promise(function(A,H){M.onload=A,M.onerror=H}),Cn(m,"link",l),a.state.loading|=4,kc(m,s.precedence,e),a.instance=m;case"script":return m=Us(s.src),(f=e.querySelector(sl(m)))?(a.instance=f,cn(f),f):(l=s,(f=pi.get(m))&&(l=g({},s),pd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),cn(f),Cn(f,"link",l),e.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,kc(l,s.precedence,e));return a.instance}function kc(e,a,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===a)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(e,a.firstChild))}function dd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function pd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Xc=null;function rv(e,a,s){if(Xc===null){var l=new Map,f=Xc=new Map;f.set(s,l)}else f=Xc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[Ra]||m[je]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(a)||"";M=e+M;var A=l.get(M);A?A.push(m):l.set(M,[m])}}return l}function sv(e,a,s){e=e.ownerDocument||e,e.head.insertBefore(s,a==="title"?e.querySelector("head > title"):null)}function LE(e,a,s){if(s===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ov(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ol=null;function OE(){}function PE(e,a,s){if(ol===null)throw Error(r(475));var l=ol;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Ds(s.href),m=e.querySelector(rl(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Wc.bind(l),e.then(l,l)),a.state.loading|=4,a.instance=m,cn(m);return}m=e.ownerDocument||e,s=iv(s),(f=pi.get(f))&&dd(s,f),m=m.createElement("link"),cn(m);var M=m;M._p=new Promise(function(A,H){M.onload=A,M.onerror=H}),Cn(m,"link",s),a.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Wc.bind(l),e.addEventListener("load",a),e.addEventListener("error",a))}}function zE(){if(ol===null)throw Error(r(475));var e=ol;return e.stylesheets&&e.count===0&&md(e,e.stylesheets),0<e.count?function(a){var s=setTimeout(function(){if(e.stylesheets&&md(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Wc(){if(this.count--,this.count===0){if(this.stylesheets)md(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yc=null;function md(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yc=new Map,a.forEach(FE,e),Yc=null,Wc.call(e))}function FE(e,a){if(!(a.state.loading&4)){var s=Yc.get(e);if(s)var l=s.get(null);else{s=new Map,Yc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=a.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=Wc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),a.state.loading|=4}}var ll={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function BE(e,a,s,l,f,m,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function lv(e,a,s,l,f,m,M,A,H,it,vt,Tt){return e=new BE(e,a,s,M,A,H,it,Tt),a=1,m===!0&&(a|=24),m=Qn(3,null,null,a),e.current=m,m.stateNode=e,a=Kf(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:a},th(m),e}function cv(e){return e?(e=ls,e):ls}function uv(e,a,s,l,f,m){f=cv(f),l.context===null?l.context=f:l.pendingContext=f,l=Pa(a),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=za(e,l,a),s!==null&&(ni(s,e,a),Bo(s,e,a))}function fv(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<a?s:a}}function gd(e,a){fv(e,a),(e=e.alternate)&&fv(e,a)}function hv(e){if(e.tag===13){var a=os(e,67108864);a!==null&&ni(a,e,67108864),gd(e,67108864)}}var qc=!0;function IE(e,a,s,l){var f=F.T;F.T=null;var m=Z.p;try{Z.p=2,_d(e,a,s,l)}finally{Z.p=m,F.T=f}}function HE(e,a,s,l){var f=F.T;F.T=null;var m=Z.p;try{Z.p=8,_d(e,a,s,l)}finally{Z.p=m,F.T=f}}function _d(e,a,s,l){if(qc){var f=vd(l);if(f===null)ad(e,a,l,jc,s),pv(e,l);else if(VE(f,e,a,s,l))l.stopPropagation();else if(pv(e,l),a&4&&-1<GE.indexOf(e)){for(;f!==null;){var m=Yi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Vt(m.pendingLanes);if(M!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var H=1<<31-Lt(M);A.entanglements[1]|=H,M&=~H}Bi(m),(Pe&6)===0&&(Uc=It()+500,el(0))}}break;case 13:A=os(m,2),A!==null&&ni(A,m,2),Lc(),gd(m,2)}if(m=vd(l),m===null&&ad(e,a,l,jc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else ad(e,a,l,null,s)}}function vd(e){return e=Ef(e),xd(e)}var jc=null;function xd(e){if(jc=null,e=Wi(e),e!==null){var a=c(e);if(a===null)e=null;else{var s=a.tag;if(s===13){if(e=u(a),e!==null)return e;e=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return jc=e,null}function dv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case xe:return 2;case Zt:return 8;case O:case T:return 32;case at:return 268435456;default:return 32}default:return 32}}var yd=!1,Za=null,Ka=null,Qa=null,cl=new Map,ul=new Map,$a=[],GE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pv(e,a){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":cl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(a.pointerId)}}function fl(e,a,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},a!==null&&(a=Yi(a),a!==null&&hv(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),e)}function VE(e,a,s,l,f){switch(a){case"focusin":return Za=fl(Za,e,a,s,l,f),!0;case"dragenter":return Ka=fl(Ka,e,a,s,l,f),!0;case"mouseover":return Qa=fl(Qa,e,a,s,l,f),!0;case"pointerover":var m=f.pointerId;return cl.set(m,fl(cl.get(m)||null,e,a,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,ul.set(m,fl(ul.get(m)||null,e,a,s,l,f)),!0}return!1}function mv(e){var a=Wi(e.target);if(a!==null){var s=c(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){e.blockedOn=a,Dn(e.priority,function(){if(s.tag===13){var l=ei();l=ke(l);var f=os(s,l);f!==null&&ni(f,s,l),gd(s,l)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zc(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var s=vd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Mf=l,s.target.dispatchEvent(l),Mf=null}else return a=Yi(s),a!==null&&hv(a),e.blockedOn=s,!1;a.shift()}return!0}function gv(e,a,s){Zc(e)&&s.delete(a)}function kE(){yd=!1,Za!==null&&Zc(Za)&&(Za=null),Ka!==null&&Zc(Ka)&&(Ka=null),Qa!==null&&Zc(Qa)&&(Qa=null),cl.forEach(gv),ul.forEach(gv)}function Kc(e,a){e.blockedOn===a&&(e.blockedOn=null,yd||(yd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,kE)))}var Qc=null;function _v(e){Qc!==e&&(Qc=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Qc===e&&(Qc=null);for(var a=0;a<e.length;a+=3){var s=e[a],l=e[a+1],f=e[a+2];if(typeof l!="function"){if(xd(l||s)===null)continue;break}var m=Yi(s);m!==null&&(e.splice(a,3),a-=3,xh(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function hl(e){function a(H){return Kc(H,e)}Za!==null&&Kc(Za,e),Ka!==null&&Kc(Ka,e),Qa!==null&&Kc(Qa,e),cl.forEach(a),ul.forEach(a);for(var s=0;s<$a.length;s++){var l=$a[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<$a.length&&(s=$a[0],s.blockedOn===null);)mv(s),s.blockedOn===null&&$a.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[an]||null;if(typeof m=="function")M||_v(s);else if(M){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[an]||null)A=M.formAction;else if(xd(f)!==null)continue}else A=M.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),_v(s)}}}function Sd(e){this._internalRoot=e}$c.prototype.render=Sd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,l=ei();uv(s,l,e,a,null,null)},$c.prototype.unmount=Sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;uv(e.current,2,null,e,null,null),Lc(),a[Un]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var a=we();e={blockedOn:null,target:e,priority:a};for(var s=0;s<$a.length&&a!==0&&a<$a[s].priority;s++);$a.splice(s,0,e),s===0&&mv(e)}};var vv=t.version;if(vv!=="19.1.0")throw Error(r(527,vv,"19.1.0"));Z.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(a),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var XE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{_t=Jc.inject(XE),Ht=Jc}catch{}}return pl.createRoot=function(e,a){if(!o(e))throw Error(r(299));var s=!1,l="",f=O0,m=P0,M=z0,A=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=lv(e,1,!1,null,null,s,l,f,m,M,A,null),e[Un]=a.current,id(e),new Sd(a)},pl.hydrateRoot=function(e,a,s){if(!o(e))throw Error(r(299));var l=!1,f="",m=O0,M=P0,A=z0,H=null,it=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(it=s.formState)),a=lv(e,1,!0,a,s??null,l,f,m,M,A,H,it),a.context=cv(null),s=a.current,l=ei(),l=ke(l),f=Pa(l),f.callback=null,za(s,f,l),s=l,a.current.lanes=s,Et(a,s),Bi(a),e[Un]=a.current,id(e),new $c(a)},pl.version="19.1.0",pl}var Rv;function tb(){if(Rv)return bd.exports;Rv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),bd.exports=JE(),bd.exports}var eb=tb();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="175",no={ROTATE:0,DOLLY:1,PAN:2},Qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nb=0,Cv=1,ib=2,py=1,ab=2,ga=3,fr=0,Zn=1,_a=2,lr=0,io=1,Dv=2,Uv=3,Nv=4,rb=5,Ir=100,sb=101,ob=102,lb=103,cb=104,ub=200,fb=201,hb=202,db=203,vp=204,xp=205,pb=206,mb=207,gb=208,_b=209,vb=210,xb=211,yb=212,Sb=213,Mb=214,yp=0,Sp=1,Mp=2,so=3,Ep=4,bp=5,Tp=6,Ap=7,my=0,Eb=1,bb=2,cr=0,Tb=1,Ab=2,wb=3,Rb=4,Cb=5,Db=6,Ub=7,gy=300,oo=301,lo=302,wp=303,Rp=304,hf=306,Cp=1e3,Gr=1001,Dp=1002,Ci=1003,Nb=1004,tu=1005,Gi=1006,Rd=1007,Vr=1008,Ea=1009,_y=1010,vy=1011,Nl=1012,ym=1013,Wr=1014,va=1015,Il=1016,Sm=1017,Mm=1018,Ll=1020,xy=35902,yy=1021,Sy=1022,Ri=1023,My=1024,Ey=1025,Ol=1026,Pl=1027,by=1028,Em=1029,Ty=1030,bm=1031,Tm=1033,Lu=33776,Ou=33777,Pu=33778,zu=33779,Up=35840,Np=35841,Lp=35842,Op=35843,Pp=36196,zp=37492,Fp=37496,Bp=37808,Ip=37809,Hp=37810,Gp=37811,Vp=37812,kp=37813,Xp=37814,Wp=37815,Yp=37816,qp=37817,jp=37818,Zp=37819,Kp=37820,Qp=37821,Fu=36492,$p=36494,Jp=36495,Ay=36283,tm=36284,em=36285,nm=36286,Lb=3200,Ob=3201,Pb=0,zb=1,or="",gi="srgb",co="srgb-linear",Wu="linear",He="srgb",Ns=7680,Lv=519,Fb=512,Bb=513,Ib=514,wy=515,Hb=516,Gb=517,Vb=518,kb=519,im=35044,Ov="300 es",xa=2e3,Yu=2001;class Qr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=Math.PI/180,am=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function Ee(i,t,n){return Math.max(t,Math.min(n,i))}function Xb(i,t){return(i%t+t)%t}function Cd(i,t,n){return(1-n)*i+n*t}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wb={DEG2RAD:Bu};class fe{constructor(t=0,n=0){fe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*r-u*o+t.x,this.y=c*o+u*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t,n,r,o,c,u,h,p,d){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,o,c,u,h,p,d)}set(t,n,r,o,c,u,h,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,c=this.elements,u=r[0],h=r[3],p=r[6],d=r[1],g=r[4],v=r[7],_=r[2],y=r[5],E=r[8],b=o[0],S=o[3],x=o[6],P=o[1],N=o[4],D=o[7],G=o[2],z=o[5],B=o[8];return c[0]=u*b+h*P+p*G,c[3]=u*S+h*N+p*z,c[6]=u*x+h*D+p*B,c[1]=d*b+g*P+v*G,c[4]=d*S+g*N+v*z,c[7]=d*x+g*D+v*B,c[2]=_*b+y*P+E*G,c[5]=_*S+y*N+E*z,c[8]=_*x+y*D+E*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return n*u*g-n*h*d-r*c*g+r*h*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=g*u-h*d,_=h*p-g*c,y=d*c-u*p,E=n*v+r*_+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(o*d-g*r)*b,t[2]=(h*r-o*u)*b,t[3]=_*b,t[4]=(g*n-o*p)*b,t[5]=(o*c-h*n)*b,t[6]=y*b,t[7]=(r*p-d*n)*b,t[8]=(u*n-r*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,o,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(r*p,r*d,-r*(p*u+d*h)+u+t,-o*d,o*p,-o*(-d*u+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Dd.makeScale(t,n)),this}rotate(t){return this.premultiply(Dd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Dd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new me;function Ry(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yb(){const i=qu("canvas");return i.style.display="block",i}const Pv={};function Iu(i){i in Pv||(Pv[i]=!0,console.warn(i))}function qb(i,t,n){return new Promise(function(r,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function jb(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zb(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zv=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fv=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kb(){const i={enabled:!0,workingColorSpace:co,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===He&&(o.r=Ma(o.r),o.g=Ma(o.g),o.b=Ma(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===He&&(o.r=ao(o.r),o.g=ao(o.g),o.b=ao(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===or?Wu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[co]:{primaries:t,whitePoint:r,transfer:Wu,toXYZ:zv,fromXYZ:Fv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:r,transfer:He,toXYZ:zv,fromXYZ:Fv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),i}const Ne=Kb();function Ma(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ls;class Qb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ls===void 0&&(Ls=qu("canvas")),Ls.width=t.width,Ls.height=t.height;const o=Ls.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=Ls}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=qu("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ma(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ma(n[r]/255)*255):n[r]=Ma(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $b=0;class Am{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Ud(o[u].image)):c.push(Ud(o[u]))}else c=Ud(o);r.url=c}return n||(t.images[this.uuid]=r),r}}function Ud(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qb.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jb=0;class Gn extends Qr{constructor(t=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,r=Gr,o=Gr,c=Gi,u=Vr,h=Ri,p=Ea,d=Gn.DEFAULT_ANISOTROPY,g=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=ur(),this.name="",this.source=new Am(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cp:t.x=t.x-Math.floor(t.x);break;case Gr:t.x=t.x<0?0:1;break;case Dp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cp:t.y=t.y-Math.floor(t.y);break;case Gr:t.y=t.y<0?0:1;break;case Dp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=gy;Gn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,n=0,r=0,o=1){on.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,o){return this.x=t,this.y=n,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,o,c;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],y=p[5],E=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(d+1)/2,D=(y+1)/2,G=(x+1)/2,z=(g+_)/4,B=(v+b)/4,X=(E+S)/4;return N>D&&N>G?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=z/r,c=B/r):D>G?D<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),r=z/o,c=X/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=B/c,o=X/c),this.set(r,o,c,n),this}let P=Math.sqrt((S-E)*(S-E)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(v-b)/P,this.z=(_-g)/P,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tT extends Qr{constructor(t=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n);const o={width:t,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Gn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Am(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends tT{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class Cy extends Gn{constructor(t=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eT extends Gn{constructor(t=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(t=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=o}static slerpFlat(t,n,r,o,c,u,h){let p=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];const _=c[u+0],y=c[u+1],E=c[u+2],b=c[u+3];if(h===0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=y,t[n+2]=E,t[n+3]=b;return}if(v!==b||p!==_||d!==y||g!==E){let S=1-h;const x=p*_+d*y+g*E+v*b,P=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const G=Math.sqrt(N),z=Math.atan2(G,x*P);S=Math.sin(S*z)/G,h=Math.sin(h*z)/G}const D=h*P;if(p=p*S+_*D,d=d*S+y*D,g=g*S+E*D,v=v*S+b*D,S===1-h){const G=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=G,d*=G,g*=G,v*=G}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,r,o,c,u){const h=r[o],p=r[o+1],d=r[o+2],g=r[o+3],v=c[u],_=c[u+1],y=c[u+2],E=c[u+3];return t[n]=h*E+g*v+p*y-d*_,t[n+1]=p*E+g*_+d*v-h*y,t[n+2]=d*E+g*y+h*_-p*v,t[n+3]=g*E-h*v-p*_-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,o){return this._x=t,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,p=Math.sin,d=h(r/2),g=h(o/2),v=h(c/2),_=p(r/2),y=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=_*g*v+d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v-_*y*E;break;case"YXZ":this._x=_*g*v+d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v+_*y*E;break;case"ZXY":this._x=_*g*v-d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v-_*y*E;break;case"ZYX":this._x=_*g*v-d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v+_*y*E;break;case"YZX":this._x=_*g*v+d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v-_*y*E;break;case"XZY":this._x=_*g*v-d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=r+h+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(r>h&&r>v){const y=2*Math.sqrt(1+r-h-v);this._w=(g-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(h>v){const y=2*Math.sqrt(1+h-r-v);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-r-h);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,o=t._y,c=t._z,u=t._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=r*g+u*h+o*d-c*p,this._y=o*g+u*p+c*h-r*d,this._z=c*g+u*d+r*p-o*h,this._w=u*g-r*h-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,o=this._y,c=this._z,u=this._w;let h=u*t._w+r*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-n;return this._w=y*u+n*this._w,this._x=y*r+n*this._x,this._y=y*o+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,_=Math.sin(n*g)/d;return this._w=u*v+this._w*_,this._x=r*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,n=0,r=0){J.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Bv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Bv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,r=this.y,o=this.z,c=t.x,u=t.y,h=t.z,p=t.w,d=2*(u*o-h*r),g=2*(h*n-c*o),v=2*(c*r-u*n);return this.x=n+p*d+u*v-h*g,this.y=r+p*g+h*d-c*v,this.z=o+p*v+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,o=t.y,c=t.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-r*p,this.z=r*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Nd.copy(this).projectOnVector(t),this.sub(Nd)}reflect(t){return this.sub(Nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return n*n+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const o=Math.sin(n)*t;return this.x=o*Math.sin(r),this.y=Math.cos(n)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new J,Bv=new qr;class Hl{constructor(t=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Ei.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Ei.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Ei.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ei):Ei.fromBufferAttribute(c,u),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(t.matrixWorld),this.union(eu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ml),nu.subVectors(this.max,ml),Os.subVectors(t.a,ml),Ps.subVectors(t.b,ml),zs.subVectors(t.c,ml),tr.subVectors(Ps,Os),er.subVectors(zs,Ps),Nr.subVectors(Os,zs);let n=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Nr.z,Nr.y,tr.z,0,-tr.x,er.z,0,-er.x,Nr.z,0,-Nr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Nr.y,Nr.x,0];return!Ld(n,Os,Ps,zs,nu)||(n=[1,0,0,0,1,0,0,0,1],!Ld(n,Os,Ps,zs,nu))?!1:(iu.crossVectors(tr,er),n=[iu.x,iu.y,iu.z],Ld(n,Os,Ps,zs,nu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ua=[new J,new J,new J,new J,new J,new J,new J,new J],Ei=new J,eu=new Hl,Os=new J,Ps=new J,zs=new J,tr=new J,er=new J,Nr=new J,ml=new J,nu=new J,iu=new J,Lr=new J;function Ld(i,t,n,r,o){for(let c=0,u=i.length-3;c<=u;c+=3){Lr.fromArray(i,c);const h=o.x*Math.abs(Lr.x)+o.y*Math.abs(Lr.y)+o.z*Math.abs(Lr.z),p=t.dot(Lr),d=n.dot(Lr),g=r.dot(Lr);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const nT=new Hl,gl=new J,Od=new J;class df{constructor(t=new J,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):nT.setFromPoints(t).getCenter(r);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gl.subVectors(t,this.center);const n=gl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(gl,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Od.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gl.copy(t.center).add(Od)),this.expandByPoint(gl.copy(t.center).sub(Od))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fa=new J,Pd=new J,au=new J,nr=new J,zd=new J,ru=new J,Fd=new J;class pf{constructor(t=new J,n=new J(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=fa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,n),fa.distanceToSquared(t))}distanceSqToSegment(t,n,r,o){Pd.copy(t).add(n).multiplyScalar(.5),au.copy(n).sub(t).normalize(),nr.copy(this.origin).sub(Pd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(au),h=nr.dot(this.direction),p=-nr.dot(au),d=nr.lengthSq(),g=Math.abs(1-u*u);let v,_,y,E;if(g>0)if(v=u*p-h,_=u*h-p,E=c*g,v>=0)if(_>=-E)if(_<=E){const b=1/g;v*=b,_*=b,y=v*(v+u*_+2*h)+_*(u*v+_+2*p)+d}else _=c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*p)+d;else _=-c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*p)+d;else _<=-E?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+d):_<=E?(v=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+d):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+d);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Pd).addScaledVector(au,_),y}intersectSphere(t,n){fa.subVectors(t.center,this.origin);const r=fa.dot(this.direction),o=fa.dot(fa)-r*r,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,p=r+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,o,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(r=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(r=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,n,r,o,c){zd.subVectors(n,t),ru.subVectors(r,t),Fd.crossVectors(zd,ru);let u=this.direction.dot(Fd),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;nr.subVectors(this.origin,t);const p=h*this.direction.dot(ru.crossVectors(nr,ru));if(p<0)return null;const d=h*this.direction.dot(zd.cross(nr));if(d<0||p+d>u)return null;const g=-h*nr.dot(Fd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,n,r,o,c,u,h,p,d,g,v,_,y,E,b,S){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,o,c,u,h,p,d,g,v,_,y,E,b,S)}set(t,n,r,o,c,u,h,p,d,g,v,_,y,E,b,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=p,x[2]=d,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=E,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,o=1/Fs.setFromMatrixColumn(t,0).length(),c=1/Fs.setFromMatrixColumn(t,1).length(),u=1/Fs.setFromMatrixColumn(t,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,o=t.y,c=t.z,u=Math.cos(r),h=Math.sin(r),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,y=u*v,E=h*g,b=h*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=y+E*d,n[5]=_-b*d,n[9]=-h*p,n[2]=b-_*d,n[6]=E+y*d,n[10]=u*p}else if(t.order==="YXZ"){const _=p*g,y=p*v,E=d*g,b=d*v;n[0]=_+b*h,n[4]=E*h-y,n[8]=u*d,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=y*h-E,n[6]=b+_*h,n[10]=u*p}else if(t.order==="ZXY"){const _=p*g,y=p*v,E=d*g,b=d*v;n[0]=_-b*h,n[4]=-u*v,n[8]=E+y*h,n[1]=y+E*h,n[5]=u*g,n[9]=b-_*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(t.order==="ZYX"){const _=u*g,y=u*v,E=h*g,b=h*v;n[0]=p*g,n[4]=E*d-y,n[8]=_*d+b,n[1]=p*v,n[5]=b*d+_,n[9]=y*d-E,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(t.order==="YZX"){const _=u*p,y=u*d,E=h*p,b=h*d;n[0]=p*g,n[4]=b-_*v,n[8]=E*v+y,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=y*v+E,n[10]=_-b*v}else if(t.order==="XZY"){const _=u*p,y=u*d,E=h*p,b=h*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+b,n[5]=u*g,n[9]=y*v-E,n[2]=E*v-y,n[6]=h*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iT,t,aT)}lookAt(t,n,r){const o=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ir.crossVectors(r,ii),ir.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ir.crossVectors(r,ii)),ir.normalize(),su.crossVectors(ii,ir),o[0]=ir.x,o[4]=su.x,o[8]=ii.x,o[1]=ir.y,o[5]=su.y,o[9]=ii.y,o[2]=ir.z,o[6]=su.z,o[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,c=this.elements,u=r[0],h=r[4],p=r[8],d=r[12],g=r[1],v=r[5],_=r[9],y=r[13],E=r[2],b=r[6],S=r[10],x=r[14],P=r[3],N=r[7],D=r[11],G=r[15],z=o[0],B=o[4],X=o[8],U=o[12],R=o[1],I=o[5],Y=o[9],et=o[13],gt=o[2],dt=o[6],F=o[10],Z=o[14],q=o[3],ht=o[7],C=o[11],nt=o[15];return c[0]=u*z+h*R+p*gt+d*q,c[4]=u*B+h*I+p*dt+d*ht,c[8]=u*X+h*Y+p*F+d*C,c[12]=u*U+h*et+p*Z+d*nt,c[1]=g*z+v*R+_*gt+y*q,c[5]=g*B+v*I+_*dt+y*ht,c[9]=g*X+v*Y+_*F+y*C,c[13]=g*U+v*et+_*Z+y*nt,c[2]=E*z+b*R+S*gt+x*q,c[6]=E*B+b*I+S*dt+x*ht,c[10]=E*X+b*Y+S*F+x*C,c[14]=E*U+b*et+S*Z+x*nt,c[3]=P*z+N*R+D*gt+G*q,c[7]=P*B+N*I+D*dt+G*ht,c[11]=P*X+N*Y+D*F+G*C,c[15]=P*U+N*et+D*Z+G*nt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],o=t[8],c=t[12],u=t[1],h=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],y=t[14],E=t[3],b=t[7],S=t[11],x=t[15];return E*(+c*p*v-o*d*v-c*h*_+r*d*_+o*h*y-r*p*y)+b*(+n*p*y-n*d*_+c*u*_-o*u*y+o*d*g-c*p*g)+S*(+n*d*v-n*h*y-c*u*v+r*u*y+c*h*g-r*d*g)+x*(-o*h*g-n*p*v+n*h*_+o*u*v-r*u*_+r*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],y=t[11],E=t[12],b=t[13],S=t[14],x=t[15],P=v*S*d-b*_*d+b*p*y-h*S*y-v*p*x+h*_*x,N=E*_*d-g*S*d-E*p*y+u*S*y+g*p*x-u*_*x,D=g*b*d-E*v*d+E*h*y-u*b*y-g*h*x+u*v*x,G=E*v*p-g*b*p-E*h*_+u*b*_+g*h*S-u*v*S,z=n*P+r*N+o*D+c*G;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return t[0]=P*B,t[1]=(b*_*c-v*S*c-b*o*y+r*S*y+v*o*x-r*_*x)*B,t[2]=(h*S*c-b*p*c+b*o*d-r*S*d-h*o*x+r*p*x)*B,t[3]=(v*p*c-h*_*c-v*o*d+r*_*d+h*o*y-r*p*y)*B,t[4]=N*B,t[5]=(g*S*c-E*_*c+E*o*y-n*S*y-g*o*x+n*_*x)*B,t[6]=(E*p*c-u*S*c-E*o*d+n*S*d+u*o*x-n*p*x)*B,t[7]=(u*_*c-g*p*c+g*o*d-n*_*d-u*o*y+n*p*y)*B,t[8]=D*B,t[9]=(E*v*c-g*b*c-E*r*y+n*b*y+g*r*x-n*v*x)*B,t[10]=(u*b*c-E*h*c+E*r*d-n*b*d-u*r*x+n*h*x)*B,t[11]=(g*h*c-u*v*c-g*r*d+n*v*d+u*r*y-n*h*y)*B,t[12]=G*B,t[13]=(g*b*o-E*v*o+E*r*_-n*b*_-g*r*S+n*v*S)*B,t[14]=(E*h*o-u*b*o-E*r*p+n*b*p+u*r*S-n*h*S)*B,t[15]=(u*v*o-g*h*o+g*r*p-n*v*p-u*r*_+n*h*_)*B,this}scale(t){const n=this.elements,r=t.x,o=t.y,c=t.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=t.x,h=t.y,p=t.z,d=c*u,g=c*h;return this.set(d*u+r,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+r,g*p-o*u,0,d*p-o*h,g*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,o,c,u){return this.set(1,r,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,r){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,v=h+h,_=c*d,y=c*g,E=c*v,b=u*g,S=u*v,x=h*v,P=p*d,N=p*g,D=p*v,G=r.x,z=r.y,B=r.z;return o[0]=(1-(b+x))*G,o[1]=(y+D)*G,o[2]=(E-N)*G,o[3]=0,o[4]=(y-D)*z,o[5]=(1-(_+x))*z,o[6]=(S+P)*z,o[7]=0,o[8]=(E+N)*B,o[9]=(S-P)*B,o[10]=(1-(_+b))*B,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,r){const o=this.elements;let c=Fs.set(o[0],o[1],o[2]).length();const u=Fs.set(o[4],o[5],o[6]).length(),h=Fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],bi.copy(this);const d=1/c,g=1/u,v=1/h;return bi.elements[0]*=d,bi.elements[1]*=d,bi.elements[2]*=d,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,n.setFromRotationMatrix(bi),r.x=c,r.y=u,r.z=h,this}makePerspective(t,n,r,o,c,u,h=xa){const p=this.elements,d=2*c/(n-t),g=2*c/(r-o),v=(n+t)/(n-t),_=(r+o)/(r-o);let y,E;if(h===xa)y=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(h===Yu)y=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=d,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,o,c,u,h=xa){const p=this.elements,d=1/(n-t),g=1/(r-o),v=1/(u-c),_=(n+t)*d,y=(r+o)*g;let E,b;if(h===xa)E=(u+c)*v,b=-2*v;else if(h===Yu)E=c*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Fs=new J,bi=new $e,iT=new J(0,0,0),aT=new J(1,1,1),ir=new J,su=new J,ii=new J,Iv=new $e,Hv=new qr;class ba{constructor(t=0,n=0,r=0,o=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,o=this._order){return this._x=t,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Iv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Iv,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Hv.setFromEuler(this),this.setFromQuaternion(Hv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class wm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rT=0;const Gv=new J,Bs=new qr,ha=new $e,ou=new J,_l=new J,sT=new J,oT=new qr,Vv=new J(1,0,0),kv=new J(0,1,0),Xv=new J(0,0,1),Wv={type:"added"},lT={type:"removed"},Is={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Vn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const t=new J,n=new ba,r=new qr,o=new J(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $e},normalMatrix:{value:new me}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(Vv,t)}rotateY(t){return this.rotateOnAxis(kv,t)}rotateZ(t){return this.rotateOnAxis(Xv,t)}translateOnAxis(t,n){return Gv.copy(t).applyQuaternion(this.quaternion),this.position.add(Gv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Vv,t)}translateY(t){return this.translateOnAxis(kv,t)}translateZ(t){return this.translateOnAxis(Xv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?ou.copy(t):ou.set(t,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(_l,ou,this.up):ha.lookAt(ou,_l,this.up),this.quaternion.setFromRotationMatrix(ha),o&&(ha.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(ha),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wv),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(lT),Bd.child=t,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wv),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,t,sT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,oT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(n){const h=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),y=u(t.animations),E=u(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}Vn.DEFAULT_UP=new J(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new J,da=new J,Id=new J,pa=new J,Hs=new J,Gs=new J,Yv=new J,Hd=new J,Gd=new J,Vd=new J,kd=new on,Xd=new on,Wd=new on;class _i{constructor(t=new J,n=new J,r=new J){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,o){o.subVectors(r,n),Ti.subVectors(t,n),o.cross(Ti);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,r,o,c){Ti.subVectors(o,n),da.subVectors(r,n),Id.subVectors(t,n);const u=Ti.dot(Ti),h=Ti.dot(da),p=Ti.dot(Id),d=da.dot(da),g=da.dot(Id),v=u*d-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(d*p-h*g)*_,E=(u*g-h*p)*_;return c.set(1-y-E,E,y)}static containsPoint(t,n,r,o){return this.getBarycoord(t,n,r,o,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,n,r,o,c,u,h,p){return this.getBarycoord(t,n,r,o,pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,pa.x),p.addScaledVector(u,pa.y),p.addScaledVector(h,pa.z),p)}static getInterpolatedAttribute(t,n,r,o,c,u){return kd.setScalar(0),Xd.setScalar(0),Wd.setScalar(0),kd.fromBufferAttribute(t,n),Xd.fromBufferAttribute(t,r),Wd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(kd,c.x),u.addScaledVector(Xd,c.y),u.addScaledVector(Wd,c.z),u}static isFrontFacing(t,n,r,o){return Ti.subVectors(r,n),da.subVectors(t,n),Ti.cross(da).dot(o)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,o){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,r,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ti.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return _i.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,o,c){return _i.getInterpolation(t,this.a,this.b,this.c,n,r,o,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,o=this.b,c=this.c;let u,h;Hs.subVectors(o,r),Gs.subVectors(c,r),Hd.subVectors(t,r);const p=Hs.dot(Hd),d=Gs.dot(Hd);if(p<=0&&d<=0)return n.copy(r);Gd.subVectors(t,o);const g=Hs.dot(Gd),v=Gs.dot(Gd);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(r).addScaledVector(Hs,u);Vd.subVectors(t,c);const y=Hs.dot(Vd),E=Gs.dot(Vd);if(E>=0&&y<=E)return n.copy(c);const b=y*d-p*E;if(b<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(r).addScaledVector(Gs,h);const S=g*E-y*v;if(S<=0&&v-g>=0&&y-E>=0)return Yv.subVectors(c,o),h=(v-g)/(v-g+(y-E)),n.copy(o).addScaledVector(Yv,h);const x=1/(S+b+_);return u=b*x,h=_*x,n.copy(r).addScaledVector(Hs,u).addScaledVector(Gs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},lu={h:0,s:0,l:0};function Yd(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}let be=class{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,n),this}setRGB(t,n,r,o=Ne.workingColorSpace){return this.r=t,this.g=n,this.b=r,Ne.toWorkingColorSpace(this,o),this}setHSL(t,n,r,o=Ne.workingColorSpace){if(t=Xb(t,1),n=Ee(n,0,1),r=Ee(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Yd(u,c,t+1/3),this.g=Yd(u,c,t),this.b=Yd(u,c,t-1/3)}return Ne.toWorkingColorSpace(this,o),this}setStyle(t,n=gi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gi){const r=Dy[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Ne.fromWorkingColorSpace(Fn.copy(this),t),Math.round(Ee(Fn.r*255,0,255))*65536+Math.round(Ee(Fn.g*255,0,255))*256+Math.round(Ee(Fn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Fn.copy(this),n);const r=Fn.r,o=Fn.g,c=Fn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const v=u-h;switch(d=g<=.5?v/(u+h):v/(2-u-h),u){case r:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-r)/v+2;break;case c:p=(r-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Fn.copy(this),n),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=gi){Ne.fromWorkingColorSpace(Fn.copy(this),t);const n=Fn.r,r=Fn.g,o=Fn.b;return t!==gi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,n,r){return this.getHSL(ar),this.setHSL(ar.h+t,ar.s+n,ar.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(ar),t.getHSL(lu);const r=Cd(ar.h,lu.h,n),o=Cd(ar.s,lu.s,n),c=Cd(ar.l,lu.l,n);return this.setHSL(r,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Fn=new be;be.NAMES=Dy;let cT=0;class xo extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=io,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vp,this.blendDst=xp,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vp&&(r.blendSrc=this.blendSrc),this.blendDst!==xp&&(r.blendDst=this.blendDst),this.blendEquation!==Ir&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uo extends xo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=my,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new J,cu=new fe;let uT=0;class Di{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=im,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cu.fromBufferAttribute(this,n),cu.applyMatrix3(t),this.setXY(n,cu.x,cu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Hi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Ge(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Hi(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Hi(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Hi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Hi(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Ge(n,this.array),r=Ge(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,o){return t*=this.itemSize,this.normalized&&(n=Ge(n,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,n,r,o,c){return t*=this.itemSize,this.normalized&&(n=Ge(n,this.array),r=Ge(r,this.array),o=Ge(o,this.array),c=Ge(c,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==im&&(t.usage=this.usage),t}}class Uy extends Di{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class Ny extends Di{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class Ui extends Di{constructor(t,n,r){super(new Float32Array(t),n,r)}}let fT=0;const mi=new $e,qd=new Vn,Vs=new J,ai=new Hl,vl=new Hl,bn=new J;class xi extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ry(t)?Ny:Uy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new me().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,n,r){return mi.makeTranslation(t,n,r),this.applyMatrix4(mi),this}scale(t,n,r){return mi.makeScale(t,n,r),this.applyMatrix4(mi),this}lookAt(t){return qd.lookAt(t),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ui(r,3))}else{const r=Math.min(t.length,n.count);for(let o=0;o<r;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new df);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];vl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ai.min,vl.min),ai.expandByPoint(bn),bn.addVectors(ai.max,vl.max),ai.expandByPoint(bn)):(ai.expandByPoint(vl.min),ai.expandByPoint(vl.max))}ai.getCenter(r);let o=0;for(let c=0,u=t.count;c<u;c++)bn.fromBufferAttribute(t,c),o=Math.max(o,r.distanceToSquared(bn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)bn.fromBufferAttribute(h,d),p&&(Vs.fromBufferAttribute(t,d),bn.add(Vs)),o=Math.max(o,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<r.count;X++)h[X]=new J,p[X]=new J;const d=new J,g=new J,v=new J,_=new fe,y=new fe,E=new fe,b=new J,S=new J;function x(X,U,R){d.fromBufferAttribute(r,X),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,R),_.fromBufferAttribute(c,X),y.fromBufferAttribute(c,U),E.fromBufferAttribute(c,R),g.sub(d),v.sub(d),y.sub(_),E.sub(_);const I=1/(y.x*E.y-E.x*y.y);isFinite(I)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(I),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(I),h[X].add(b),h[U].add(b),h[R].add(b),p[X].add(S),p[U].add(S),p[R].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let X=0,U=P.length;X<U;++X){const R=P[X],I=R.start,Y=R.count;for(let et=I,gt=I+Y;et<gt;et+=3)x(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const N=new J,D=new J,G=new J,z=new J;function B(X){G.fromBufferAttribute(o,X),z.copy(G);const U=h[X];N.copy(U),N.sub(G.multiplyScalar(G.dot(U))).normalize(),D.crossVectors(z,U);const I=D.dot(p[X])<0?-1:1;u.setXYZW(X,N.x,N.y,N.z,I)}for(let X=0,U=P.length;X<U;++X){const R=P[X],I=R.start,Y=R.count;for(let et=I,gt=I+Y;et<gt;et+=3)B(t.getX(et+0)),B(t.getX(et+1)),B(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const o=new J,c=new J,u=new J,h=new J,p=new J,d=new J,g=new J,v=new J;if(t)for(let _=0,y=t.count;_<y;_+=3){const E=t.getX(_+0),b=t.getX(_+1),S=t.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),h.add(g),p.add(g),d.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(p.length*g);let y=0,E=0;for(let b=0,S=p.length;b<S;b++){h.isInterleavedBufferAttribute?y=p[b]*h.data.stride+h.offset:y=p[b]*g;for(let x=0;x<g;x++)_[E++]=d[y++]}return new Di(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=t(p,r);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],y=t(_,r);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const d=r[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const y=d[v];g.push(y.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],v=c[d];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qv=new $e,Or=new pf,uu=new df,jv=new J,fu=new J,hu=new J,du=new J,jd=new J,pu=new J,Zv=new J,mu=new J;class si extends Vn{constructor(t=new xi,n=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){pu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],v=c[p];g!==0&&(jd.fromBufferAttribute(v,t),u?pu.addScaledVector(jd,g):pu.addScaledVector(jd.sub(n),g))}n.add(pu)}return n}raycast(t,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(c),Or.copy(t.ray).recast(t.near),!(uu.containsPoint(Or.origin)===!1&&(Or.intersectSphere(uu,jv)===null||Or.origin.distanceToSquared(jv)>(t.far-t.near)**2))&&(qv.copy(c).invert(),Or.copy(t.ray).applyMatrix4(qv),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Or)))}_computeIntersections(t,n,r){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const S=_[E],x=u[S.materialIndex],P=Math.max(S.start,y.start),N=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let D=P,G=N;D<G;D+=3){const z=h.getX(D),B=h.getX(D+1),X=h.getX(D+2);o=gu(this,x,t,r,d,g,v,z,B,X),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const P=h.getX(S),N=h.getX(S+1),D=h.getX(S+2);o=gu(this,u,t,r,d,g,v,P,N,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const S=_[E],x=u[S.materialIndex],P=Math.max(S.start,y.start),N=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let D=P,G=N;D<G;D+=3){const z=D,B=D+1,X=D+2;o=gu(this,x,t,r,d,g,v,z,B,X),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const P=S,N=S+1,D=S+2;o=gu(this,u,t,r,d,g,v,P,N,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function hT(i,t,n,r,o,c,u,h){let p;if(t.side===Zn?p=r.intersectTriangle(u,c,o,!0,h):p=r.intersectTriangle(o,c,u,t.side===fr,h),p===null)return null;mu.copy(h),mu.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(mu);return d<n.near||d>n.far?null:{distance:d,point:mu.clone(),object:i}}function gu(i,t,n,r,o,c,u,h,p,d){i.getVertexPosition(h,fu),i.getVertexPosition(p,hu),i.getVertexPosition(d,du);const g=hT(i,t,n,r,fu,hu,du,Zv);if(g){const v=new J;_i.getBarycoord(Zv,fu,hu,du,v),o&&(g.uv=_i.getInterpolatedAttribute(o,h,p,d,v,new fe)),c&&(g.uv1=_i.getInterpolatedAttribute(c,h,p,d,v,new fe)),u&&(g.normal=_i.getInterpolatedAttribute(u,h,p,d,v,new J),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:d,normal:new J,materialIndex:0};_i.getNormal(fu,hu,du,_.normal),g.face=_,g.barycoord=v}return g}class Gl extends xi{constructor(t=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],v=[];let _=0,y=0;E("z","y","x",-1,-1,r,n,t,u,c,0),E("z","y","x",1,-1,r,n,-t,u,c,1),E("x","z","y",1,1,t,r,n,o,u,2),E("x","z","y",1,-1,t,r,-n,o,u,3),E("x","y","z",1,-1,t,n,r,o,c,4),E("x","y","z",-1,-1,t,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Ui(d,3)),this.setAttribute("normal",new Ui(g,3)),this.setAttribute("uv",new Ui(v,2));function E(b,S,x,P,N,D,G,z,B,X,U){const R=D/B,I=G/X,Y=D/2,et=G/2,gt=z/2,dt=B+1,F=X+1;let Z=0,q=0;const ht=new J;for(let C=0;C<F;C++){const nt=C*I-et;for(let At=0;At<dt;At++){const Ct=At*R-Y;ht[b]=Ct*P,ht[S]=nt*N,ht[x]=gt,d.push(ht.x,ht.y,ht.z),ht[b]=0,ht[S]=0,ht[x]=z>0?1:-1,g.push(ht.x,ht.y,ht.z),v.push(At/B),v.push(1-C/X),Z+=1}}for(let C=0;C<X;C++)for(let nt=0;nt<B;nt++){const At=_+nt+dt*C,Ct=_+nt+dt*(C+1),W=_+(nt+1)+dt*(C+1),xt=_+(nt+1)+dt*C;p.push(At,Ct,xt),p.push(Ct,W,xt),q+=6}h.addGroup(y,q,U),y+=q,_+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fo(i){const t={};for(const n in i){t[n]={};for(const r in i[n]){const o=i[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=o.clone():Array.isArray(o)?t[n][r]=o.slice():t[n][r]=o}}return t}function Hn(i){const t={};for(let n=0;n<i.length;n++){const r=fo(i[n]);for(const o in r)t[o]=r[o]}return t}function dT(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function Ly(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const pT={clone:fo,merge:Hn};var mT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends xo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mT,this.fragmentShader=gT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fo(t.uniforms),this.uniformsGroups=dT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Oy extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=xa}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new J,Kv=new fe,Qv=new fe;class ri extends Oy{constructor(t=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=am*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return am*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-t/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(rr.x,rr.y).multiplyScalar(-t/rr.z)}getViewSize(t,n){return this.getViewBounds(t,Kv,Qv),n.subVectors(Qv,Kv)}setViewOffset(t,n,r,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Bu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/d,o*=u.width/p,r*=u.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Xs=1;class _T extends Vn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(ks,Xs,t,n);o.layers=this.layers,this.add(o);const c=new ri(ks,Xs,t,n);c.layers=this.layers,this.add(c);const u=new ri(ks,Xs,t,n);u.layers=this.layers,this.add(u);const h=new ri(ks,Xs,t,n);h.layers=this.layers,this.add(h);const p=new ri(ks,Xs,t,n);p.layers=this.layers,this.add(p);const d=new ri(ks,Xs,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,h,p]=n;for(const d of n)this.remove(d);if(t===xa)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Yu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(n,c),t.setRenderTarget(r,1,o),t.render(n,u),t.setRenderTarget(r,2,o),t.render(n,h),t.setRenderTarget(r,3,o),t.render(n,p),t.setRenderTarget(r,4,o),t.render(n,d),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,o),t.render(n,g),t.setRenderTarget(v,_,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Py extends Gn{constructor(t=[],n=oo,r,o,c,u,h,p,d,g){super(t,n,r,o,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vT extends Yr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new Py(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Gl(5,5,5),c=new hr({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:lr});c.uniforms.tEquirect.value=n;const u=new si(o,c),h=n.minFilter;return n.minFilter===Vr&&(n.minFilter=Gi),new _T(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,r=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,r,o);t.setRenderTarget(c)}}class $s extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xT={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,r),x=this._getHandJoint(d,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,E=.005;d.inputState.pinching&&_>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new $s;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class zy extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=im,this.updateRanges=[],this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,r){t*=this.stride,r*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[r+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new J;class ju{constructor(t,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,r=this.data.count;n<r;n++)In.fromBufferAttribute(this,n),In.applyMatrix4(t),this.setXYZ(n,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)In.fromBufferAttribute(this,n),In.applyNormalMatrix(t),this.setXYZ(n,In.x,In.y,In.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)In.fromBufferAttribute(this,n),In.transformDirection(t),this.setXYZ(n,In.x,In.y,In.z);return this}getComponent(t,n){let r=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(r=Hi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Ge(r,this.array)),this.data.array[t*this.data.stride+this.offset+n]=r,this}setX(t,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Hi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Hi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Hi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Hi(n,this.array)),n}setXY(t,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ge(n,this.array),r=Ge(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this}setXYZ(t,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ge(n,this.array),r=Ge(r,this.array),o=Ge(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this}setXYZW(t,n,r,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ge(n,this.array),r=Ge(r,this.array),o=Ge(o,this.array),c=Ge(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Di(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ju(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rm extends xo{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ws;const xl=new J,Ys=new J,qs=new J,js=new fe,yl=new fe,Fy=new $e,_u=new J,Sl=new J,vu=new J,$v=new fe,Kd=new fe,Jv=new fe;class By extends Vn{constructor(t=new Rm){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new xi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new yT(n,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new ju(r,3,0,!1)),Ws.setAttribute("uv",new ju(r,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new fe(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Fy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-qs.z);const r=this.material.rotation;let o,c;r!==0&&(c=Math.cos(r),o=Math.sin(r));const u=this.center;xu(_u.set(-.5,-.5,0),qs,u,Ys,o,c),xu(Sl.set(.5,-.5,0),qs,u,Ys,o,c),xu(vu.set(.5,.5,0),qs,u,Ys,o,c),$v.set(0,0),Kd.set(1,0),Jv.set(1,1);let h=t.ray.intersectTriangle(_u,Sl,vu,!1,xl);if(h===null&&(xu(Sl.set(-.5,.5,0),qs,u,Ys,o,c),Kd.set(0,1),h=t.ray.intersectTriangle(_u,vu,Sl,!1,xl),h===null))return;const p=t.ray.origin.distanceTo(xl);p<t.near||p>t.far||n.push({distance:p,point:xl.clone(),uv:_i.getInterpolation(xl,_u,Sl,vu,$v,Kd,Jv,new fe),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xu(i,t,n,r,o,c){js.subVectors(i,n).addScalar(.5).multiply(r),o!==void 0?(yl.x=c*js.x-o*js.y,yl.y=o*js.x+c*js.y):yl.copy(js),i.copy(t),i.x+=yl.x,i.y+=yl.y,i.applyMatrix4(Fy)}const Qd=new J,ST=new J,MT=new me;class sr{constructor(t=new J(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,o){return this.normal.set(t,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const o=Qd.subVectors(r,n).cross(ST.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Qd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||MT.getNormalMatrix(t),o=this.coplanarPoint(Qd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new df,yu=new J;class Iy{constructor(t=new sr,n=new sr,r=new sr,o=new sr,c=new sr,u=new sr){this.planes=[t,n,r,o,c,u]}set(t,n,r,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=xa){const r=this.planes,o=t.elements,c=o[0],u=o[1],h=o[2],p=o[3],d=o[4],g=o[5],v=o[6],_=o[7],y=o[8],E=o[9],b=o[10],S=o[11],x=o[12],P=o[13],N=o[14],D=o[15];if(r[0].setComponents(p-c,_-d,S-y,D-x).normalize(),r[1].setComponents(p+c,_+d,S+y,D+x).normalize(),r[2].setComponents(p+u,_+g,S+E,D+P).normalize(),r[3].setComponents(p-u,_-g,S-E,D-P).normalize(),r[4].setComponents(p-h,_-v,S-b,D-N).normalize(),n===xa)r[5].setComponents(p+h,_+v,S+b,D+N).normalize();else if(n===Yu)r[5].setComponents(h,v,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(t){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(t){const n=this.planes,r=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(yu.x=o.normal.x>0?t.max.x:t.min.x,yu.y=o.normal.y>0?t.max.y:t.min.y,yu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(yu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cm extends xo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zu=new J,Ku=new J,tx=new $e,Ml=new pf,Su=new df,$d=new J,ex=new J;class Hy extends Vn{constructor(t=new xi,n=new Cm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Zu.fromBufferAttribute(n,o-1),Ku.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Zu.distanceTo(Ku);t.setAttribute("lineDistance",new Ui(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const r=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Su.copy(r.boundingSphere),Su.applyMatrix4(o),Su.radius+=c,t.ray.intersectsSphere(Su)===!1)return;tx.copy(o).invert(),Ml.copy(t.ray).applyMatrix4(tx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let b=y,S=E-1;b<S;b+=d){const x=g.getX(b),P=g.getX(b+1),N=Mu(this,t,Ml,p,x,P,b);N&&n.push(N)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(y),x=Mu(this,t,Ml,p,b,S,E-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let b=y,S=E-1;b<S;b+=d){const x=Mu(this,t,Ml,p,b,b+1,b);x&&n.push(x)}if(this.isLineLoop){const b=Mu(this,t,Ml,p,E-1,y,E-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Mu(i,t,n,r,o,c,u){const h=i.geometry.attributes.position;if(Zu.fromBufferAttribute(h,o),Ku.fromBufferAttribute(h,c),n.distanceSqToSegment(Zu,Ku,$d,ex)>r)return;$d.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo($d);if(!(d<t.near||d>t.far))return{distance:d,point:ex.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}class Qu extends Gn{constructor(t,n,r,o,c,u,h,p,d){super(t,n,r,o,c,u,h,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gy extends Gn{constructor(t,n,r=Wr,o,c,u,h=Ci,p=Ci,d,g=Ol){if(g!==Ol&&g!==Pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,u,h,p,g,r,d),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Am(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class mf extends xi{constructor(t=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(r),p=Math.floor(o),d=h+1,g=p+1,v=t/h,_=n/p,y=[],E=[],b=[],S=[];for(let x=0;x<g;x++){const P=x*_-u;for(let N=0;N<d;N++){const D=N*v-c;E.push(D,-P,0),b.push(0,0,1),S.push(N/h),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<h;P++){const N=P+d*x,D=P+d*(x+1),G=P+1+d*(x+1),z=P+1+d*x;y.push(N,D,z),y.push(D,G,z)}this.setIndex(y),this.setAttribute("position",new Ui(E,3)),this.setAttribute("normal",new Ui(b,3)),this.setAttribute("uv",new Ui(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mf(t.width,t.height,t.widthSegments,t.heightSegments)}}class ho extends xi{constructor(t=1,n=32,r=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+h,Math.PI);let d=0;const g=[],v=new J,_=new J,y=[],E=[],b=[],S=[];for(let x=0;x<=r;x++){const P=[],N=x/r;let D=0;x===0&&u===0?D=.5/n:x===r&&p===Math.PI&&(D=-.5/n);for(let G=0;G<=n;G++){const z=G/n;v.x=-t*Math.cos(o+z*c)*Math.sin(u+N*h),v.y=t*Math.cos(u+N*h),v.z=t*Math.sin(o+z*c)*Math.sin(u+N*h),E.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),S.push(z+D,1-N),P.push(d++)}g.push(P)}for(let x=0;x<r;x++)for(let P=0;P<n;P++){const N=g[x][P+1],D=g[x][P],G=g[x+1][P],z=g[x+1][P+1];(x!==0||u>0)&&y.push(N,D,z),(x!==r-1||p<Math.PI)&&y.push(D,G,z)}this.setIndex(y),this.setAttribute("position",new Ui(E,3)),this.setAttribute("normal",new Ui(b,3)),this.setAttribute("uv",new Ui(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ET extends xo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bT extends xo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class TT extends Oy{constructor(t=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-t,u=r+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class AT extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const nx=new $e;class Vy{constructor(t,n,r=0,o=1/0){this.ray=new pf(t,n),this.near=r,this.far=o,this.camera=null,this.layers=new wm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return nx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nx),this}intersectObject(t,n=!0,r=[]){return rm(t,this,r,n),r.sort(ix),r}intersectObjects(t,n=!0,r=[]){for(let o=0,c=t.length;o<c;o++)rm(t[o],this,r,n);return r.sort(ix),r}}function ix(i,t){return i.distance-t.distance}function rm(i,t,n,r){let o=!0;if(i.layers.test(t.layers)&&i.raycast(t,n)===!1&&(o=!1),o===!0&&r===!0){const c=i.children;for(let u=0,h=c.length;u<h;u++)rm(c[u],t,n,!0)}}class ax{constructor(t=1,n=0,r=0){this.radius=t,this.phi=n,this.theta=r}set(t,n,r){return this.radius=t,this.phi=n,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,r){return this.radius=Math.sqrt(t*t+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Ee(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wT extends Qr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function rx(i,t,n,r){const o=RT(r);switch(n){case yy:return i*t;case My:return i*t;case Ey:return i*t*2;case by:return i*t/o.components*o.byteLength;case Em:return i*t/o.components*o.byteLength;case Ty:return i*t*2/o.components*o.byteLength;case bm:return i*t*2/o.components*o.byteLength;case Sy:return i*t*3/o.components*o.byteLength;case Ri:return i*t*4/o.components*o.byteLength;case Tm:return i*t*4/o.components*o.byteLength;case Lu:case Ou:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pu:case zu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Np:case Op:return Math.max(i,16)*Math.max(t,8)/4;case Up:case Lp:return Math.max(i,8)*Math.max(t,8)/2;case Pp:case zp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ip:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hp:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gp:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vp:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kp:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wp:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yp:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qp:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jp:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zp:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kp:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qp:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fu:case $p:case Jp:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ay:case tm:return Math.ceil(i/4)*Math.ceil(t/4)*8;case em:case nm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RT(i){switch(i){case Ea:case _y:return{byteLength:1,components:1};case Nl:case vy:case Il:return{byteLength:2,components:1};case Sm:case Mm:return{byteLength:2,components:4};case Wr:case ym:case va:return{byteLength:4,components:1};case xy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ky(){let i=null,t=!1,n=null,r=null;function o(c,u){n(c,u),r=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(r=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function CT(i){const t=new WeakMap;function n(h,p){const d=h.array,g=h.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,d,g),h.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,d){const g=p.array,v=p.updateRanges;if(i.bindBuffer(d,h),v.length===0)i.bufferSubData(d,0,g);else{v.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<v.length;y++){const E=v[_],b=v[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++_,v[_]=b)}v.length=_+1;for(let y=0,E=v.length;y<E;y++){const b=v[y];i.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(i.deleteBuffer(p.buffer),t.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,p),d.version=h.version}}return{get:o,remove:c,update:u}}var DT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UT=`#ifdef USE_ALPHAHASH
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
#endif`,NT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zT=`#ifdef USE_AOMAP
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
#endif`,FT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BT=`#ifdef USE_BATCHING
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
#endif`,IT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kT=`#ifdef USE_IRIDESCENCE
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
#endif`,XT=`#ifdef USE_BUMPMAP
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
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$T=`#if defined( USE_COLOR_ALPHA )
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
#endif`,JT=`#define PI 3.141592653589793
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
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e1=`vec3 transformedNormal = objectNormal;
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
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s1="gl_FragColor = linearToOutputTexel( gl_FragColor );",o1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_1=`#ifdef USE_GRADIENTMAP
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
}`,v1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S1=`uniform bool receiveShadow;
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
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
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
#endif`,R1=`struct PhysicalMaterial {
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
}`,C1=`
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
#endif`,D1=`#if defined( RE_IndirectDiffuse )
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
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I1=`#if defined( USE_POINTS_UV )
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
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`#ifdef USE_MORPHTARGETS
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
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
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
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pA=`float getShadowMask() {
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
}`,mA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gA=`#ifdef USE_SKINNING
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
#endif`,_A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vA=`#ifdef USE_SKINNING
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
#endif`,xA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EA=`#ifdef USE_TRANSMISSION
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
#endif`,bA=`#ifdef USE_TRANSMISSION
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
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DA=`uniform sampler2D t2D;
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
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`#include <common>
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
}`,zA=`#if DEPTH_PACKING == 3200
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
}`,FA=`#define DISTANCE
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
}`,BA=`#define DISTANCE
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
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`uniform float scale;
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
}`,VA=`uniform vec3 diffuse;
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
}`,kA=`#include <common>
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
}`,XA=`uniform vec3 diffuse;
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
}`,WA=`#define LAMBERT
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
}`,YA=`#define LAMBERT
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
}`,qA=`#define MATCAP
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
}`,jA=`#define MATCAP
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
}`,ZA=`#define NORMAL
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
}`,KA=`#define NORMAL
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
}`,QA=`#define PHONG
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
}`,$A=`#define PHONG
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
}`,JA=`#define STANDARD
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
}`,tw=`#define STANDARD
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
}`,ew=`#define TOON
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
}`,nw=`#define TOON
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
}`,iw=`uniform float size;
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
}`,aw=`uniform vec3 diffuse;
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
}`,rw=`#include <common>
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
}`,sw=`uniform vec3 color;
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
}`,ow=`uniform float rotation;
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
}`,lw=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:DT,alphahash_pars_fragment:UT,alphamap_fragment:NT,alphamap_pars_fragment:LT,alphatest_fragment:OT,alphatest_pars_fragment:PT,aomap_fragment:zT,aomap_pars_fragment:FT,batching_pars_vertex:BT,batching_vertex:IT,begin_vertex:HT,beginnormal_vertex:GT,bsdfs:VT,iridescence_fragment:kT,bumpmap_pars_fragment:XT,clipping_planes_fragment:WT,clipping_planes_pars_fragment:YT,clipping_planes_pars_vertex:qT,clipping_planes_vertex:jT,color_fragment:ZT,color_pars_fragment:KT,color_pars_vertex:QT,color_vertex:$T,common:JT,cube_uv_reflection_fragment:t1,defaultnormal_vertex:e1,displacementmap_pars_vertex:n1,displacementmap_vertex:i1,emissivemap_fragment:a1,emissivemap_pars_fragment:r1,colorspace_fragment:s1,colorspace_pars_fragment:o1,envmap_fragment:l1,envmap_common_pars_fragment:c1,envmap_pars_fragment:u1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:M1,envmap_vertex:h1,fog_vertex:d1,fog_pars_vertex:p1,fog_fragment:m1,fog_pars_fragment:g1,gradientmap_pars_fragment:_1,lightmap_pars_fragment:v1,lights_lambert_fragment:x1,lights_lambert_pars_fragment:y1,lights_pars_begin:S1,lights_toon_fragment:E1,lights_toon_pars_fragment:b1,lights_phong_fragment:T1,lights_phong_pars_fragment:A1,lights_physical_fragment:w1,lights_physical_pars_fragment:R1,lights_fragment_begin:C1,lights_fragment_maps:D1,lights_fragment_end:U1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:L1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:P1,map_fragment:z1,map_pars_fragment:F1,map_particle_fragment:B1,map_particle_pars_fragment:I1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:G1,morphinstance_vertex:V1,morphcolor_vertex:k1,morphnormal_vertex:X1,morphtarget_pars_vertex:W1,morphtarget_vertex:Y1,normal_fragment_begin:q1,normal_fragment_maps:j1,normal_pars_fragment:Z1,normal_pars_vertex:K1,normal_vertex:Q1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:tA,clearcoat_pars_fragment:eA,iridescence_pars_fragment:nA,opaque_fragment:iA,packing:aA,premultiplied_alpha_fragment:rA,project_vertex:sA,dithering_fragment:oA,dithering_pars_fragment:lA,roughnessmap_fragment:cA,roughnessmap_pars_fragment:uA,shadowmap_pars_fragment:fA,shadowmap_pars_vertex:hA,shadowmap_vertex:dA,shadowmask_pars_fragment:pA,skinbase_vertex:mA,skinning_pars_vertex:gA,skinning_vertex:_A,skinnormal_vertex:vA,specularmap_fragment:xA,specularmap_pars_fragment:yA,tonemapping_fragment:SA,tonemapping_pars_fragment:MA,transmission_fragment:EA,transmission_pars_fragment:bA,uv_pars_fragment:TA,uv_pars_vertex:AA,uv_vertex:wA,worldpos_vertex:RA,background_vert:CA,background_frag:DA,backgroundCube_vert:UA,backgroundCube_frag:NA,cube_vert:LA,cube_frag:OA,depth_vert:PA,depth_frag:zA,distanceRGBA_vert:FA,distanceRGBA_frag:BA,equirect_vert:IA,equirect_frag:HA,linedashed_vert:GA,linedashed_frag:VA,meshbasic_vert:kA,meshbasic_frag:XA,meshlambert_vert:WA,meshlambert_frag:YA,meshmatcap_vert:qA,meshmatcap_frag:jA,meshnormal_vert:ZA,meshnormal_frag:KA,meshphong_vert:QA,meshphong_frag:$A,meshphysical_vert:JA,meshphysical_frag:tw,meshtoon_vert:ew,meshtoon_frag:nw,points_vert:iw,points_frag:aw,shadow_vert:rw,shadow_frag:sw,sprite_vert:ow,sprite_frag:lw},qt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ii={basic:{uniforms:Hn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Hn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new be(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Hn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Hn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Hn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new be(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Hn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Hn([qt.points,qt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Hn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Hn([qt.common,qt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Hn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Hn([qt.sprite,qt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Hn([qt.common,qt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Hn([qt.lights,qt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ii.physical={uniforms:Hn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Eu={r:0,b:0,g:0},zr=new ba,cw=new $e;function uw(i,t,n,r,o,c,u){const h=new be(0);let p=c===!0?0:1,d,g,v=null,_=0,y=null;function E(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?n:t).get(D)),D}function b(N){let D=!1;const G=E(N);G===null?x(h,p):G&&G.isColor&&(x(G,1),D=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(i.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(N,D){const G=E(D);G&&(G.isCubeTexture||G.mapping===hf)?(g===void 0&&(g=new si(new Gl(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:fo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),zr.copy(D.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(cw.makeRotationFromEuler(zr)),g.material.toneMapped=Ne.getTransfer(G.colorSpace)!==He,(v!==G||_!==G.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,v=G,_=G.version,y=i.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(d===void 0&&(d=new si(new mf(2,2),new hr({name:"BackgroundMaterial",uniforms:fo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=G,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=Ne.getTransfer(G.colorSpace)!==He,G.matrixAutoUpdate===!0&&G.updateMatrix(),d.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||_!==G.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,v=G,_=G.version,y=i.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null))}function x(N,D){N.getRGB(Eu,Ly(i)),r.buffers.color.setClear(Eu.r,Eu.g,Eu.b,D,u)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,D=1){h.set(N),p=D,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,x(h,p)},render:b,addToRenderList:S,dispose:P}}function fw(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function h(R,I,Y,et,gt){let dt=!1;const F=v(et,Y,I);c!==F&&(c=F,d(c.object)),dt=y(R,et,Y,gt),dt&&E(R,et,Y,gt),gt!==null&&t.update(gt,i.ELEMENT_ARRAY_BUFFER),(dt||u)&&(u=!1,D(R,I,Y,et),gt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return i.createVertexArray()}function d(R){return i.bindVertexArray(R)}function g(R){return i.deleteVertexArray(R)}function v(R,I,Y){const et=Y.wireframe===!0;let gt=r[R.id];gt===void 0&&(gt={},r[R.id]=gt);let dt=gt[I.id];dt===void 0&&(dt={},gt[I.id]=dt);let F=dt[et];return F===void 0&&(F=_(p()),dt[et]=F),F}function _(R){const I=[],Y=[],et=[];for(let gt=0;gt<n;gt++)I[gt]=0,Y[gt]=0,et[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:et,object:R,attributes:{},index:null}}function y(R,I,Y,et){const gt=c.attributes,dt=I.attributes;let F=0;const Z=Y.getAttributes();for(const q in Z)if(Z[q].location>=0){const C=gt[q];let nt=dt[q];if(nt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),C===void 0||C.attribute!==nt||nt&&C.data!==nt.data)return!0;F++}return c.attributesNum!==F||c.index!==et}function E(R,I,Y,et){const gt={},dt=I.attributes;let F=0;const Z=Y.getAttributes();for(const q in Z)if(Z[q].location>=0){let C=dt[q];C===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(C=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(C=R.instanceColor));const nt={};nt.attribute=C,C&&C.data&&(nt.data=C.data),gt[q]=nt,F++}c.attributes=gt,c.attributesNum=F,c.index=et}function b(){const R=c.newAttributes;for(let I=0,Y=R.length;I<Y;I++)R[I]=0}function S(R){x(R,0)}function x(R,I){const Y=c.newAttributes,et=c.enabledAttributes,gt=c.attributeDivisors;Y[R]=1,et[R]===0&&(i.enableVertexAttribArray(R),et[R]=1),gt[R]!==I&&(i.vertexAttribDivisor(R,I),gt[R]=I)}function P(){const R=c.newAttributes,I=c.enabledAttributes;for(let Y=0,et=I.length;Y<et;Y++)I[Y]!==R[Y]&&(i.disableVertexAttribArray(Y),I[Y]=0)}function N(R,I,Y,et,gt,dt,F){F===!0?i.vertexAttribIPointer(R,I,Y,gt,dt):i.vertexAttribPointer(R,I,Y,et,gt,dt)}function D(R,I,Y,et){b();const gt=et.attributes,dt=Y.getAttributes(),F=I.defaultAttributeValues;for(const Z in dt){const q=dt[Z];if(q.location>=0){let ht=gt[Z];if(ht===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor)),ht!==void 0){const C=ht.normalized,nt=ht.itemSize,At=t.get(ht);if(At===void 0)continue;const Ct=At.buffer,W=At.type,xt=At.bytesPerElement,St=W===i.INT||W===i.UNSIGNED_INT||ht.gpuType===ym;if(ht.isInterleavedBufferAttribute){const ct=ht.data,Ut=ct.stride,pt=ht.offset;if(ct.isInstancedInterleavedBuffer){for(let Rt=0;Rt<q.locationSize;Rt++)x(q.location+Rt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)S(q.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let Rt=0;Rt<q.locationSize;Rt++)N(q.location+Rt,nt/q.locationSize,W,C,Ut*xt,(pt+nt/q.locationSize*Rt)*xt,St)}else{if(ht.isInstancedBufferAttribute){for(let ct=0;ct<q.locationSize;ct++)x(q.location+ct,ht.meshPerAttribute);R.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ct=0;ct<q.locationSize;ct++)S(q.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let ct=0;ct<q.locationSize;ct++)N(q.location+ct,nt/q.locationSize,W,C,nt*xt,nt/q.locationSize*ct*xt,St)}}else if(F!==void 0){const C=F[Z];if(C!==void 0)switch(C.length){case 2:i.vertexAttrib2fv(q.location,C);break;case 3:i.vertexAttrib3fv(q.location,C);break;case 4:i.vertexAttrib4fv(q.location,C);break;default:i.vertexAttrib1fv(q.location,C)}}}}P()}function G(){X();for(const R in r){const I=r[R];for(const Y in I){const et=I[Y];for(const gt in et)g(et[gt].object),delete et[gt];delete I[Y]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const I=r[R.id];for(const Y in I){const et=I[Y];for(const gt in et)g(et[gt].object),delete et[gt];delete I[Y]}delete r[R.id]}function B(R){for(const I in r){const Y=r[I];if(Y[R.id]===void 0)continue;const et=Y[R.id];for(const gt in et)g(et[gt].object),delete et[gt];delete Y[R.id]}}function X(){U(),u=!0,c!==o&&(c=o,d(c.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:U,dispose:G,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:S,disableUnusedAttributes:P}}function hw(i,t,n){let r;function o(d){r=d}function c(d,g){i.drawArrays(r,d,g),n.update(g,r,1)}function u(d,g,v){v!==0&&(i.drawArraysInstanced(r,d,g,v),n.update(g,r,v))}function h(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];n.update(y,r,1)}function p(d,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(r,d,0,g,0,_,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*_[b];n.update(E,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function dw(i,t,n,r){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Ri&&r.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===Il&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ea&&r.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==va&&!X)}function p(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:G,maxSamples:z}}function pw(i){const t=this;let n=null,r=0,o=!1,c=!1;const u=new sr,h=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||r!==0||o;return o=_,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const E=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,x=i.get(v);if(!o||E===null||E.length===0||c&&!S)c?g(null):d();else{const P=c?0:r,N=P*4;let D=x.clippingState||null;p.value=D,D=g(E,_,N,y);for(let G=0;G!==N;++G)D[G]=n[G];x.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,y,E){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const x=y+b*4,P=_.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<x)&&(S=new Float32Array(x));for(let N=0,D=y;N!==b;++N,D+=4)u.copy(v[N]).applyMatrix4(P,h),u.normal.toArray(S,D),S[D+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function mw(i){let t=new WeakMap;function n(u,h){return h===wp?u.mapping=oo:h===Rp&&(u.mapping=lo),u}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===wp||h===Rp)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new vT(p.height);return d.fromEquirectangularTexture(i,u),t.set(u,d),u.addEventListener("dispose",o),n(d.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Js=4,sx=[.125,.215,.35,.446,.526,.582],Hr=20,Jd=new TT,ox=new be;let tp=null,ep=0,np=0,ip=!1;const Br=(1+Math.sqrt(5))/2,Zs=1/Br,lx=[new J(-Br,Zs,0),new J(Br,Zs,0),new J(-Zs,0,Br),new J(Zs,0,Br),new J(0,Br,-Zs),new J(0,Br,Zs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],gw=new J;class cx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,o=100,c={}){const{size:u=256,position:h=gw}=c;tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tp,ep,np),this._renderer.xr.enabled=ip,t.scissorTest=!1,bu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===oo||t.mapping===lo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:Il,format:Ri,colorSpace:co,depthBuffer:!1},o=ux(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ux(t,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_w(c)),this._blurMaterial=vw(c,t,n)}return o}_compileMaterial(t){const n=new si(this._lodPlanes[0],t);this._renderer.compile(n,Jd)}_sceneToCubeUV(t,n,r,o,c){const p=new ri(90,1,n,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(ox),v.toneMapping=cr,v.autoClear=!1;const E=new uo({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),b=new si(new Gl,E);let S=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,S=!0):(E.color.copy(ox),S=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(p.up.set(0,d[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):N===1?(p.up.set(0,0,d[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,d[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const D=this._cubeSize;bu(o,N*D,P>2?D:0,D,D),v.setRenderTarget(o),S&&v.render(b,p),v.render(t,p)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=y,v.autoClear=_,t.background=x}_textureToCubeUV(t,n){const r=this._renderer,o=t.mapping===oo||t.mapping===lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=hx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new si(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;bu(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Jd)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=lx[(o-c-1)%lx.length];this._blur(t,c-1,c,u,h)}n.autoClear=r}_blur(t,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,r,o,"latitudinal",c),this._halfBlur(u,t,r,r,o,"longitudinal",c)}_halfBlur(t,n,r,o,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new si(this._lodPlanes[o],d),_=d.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Hr-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):Hr;S>Hr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Hr}`);const x=[];let P=0;for(let B=0;B<Hr;++B){const X=B/b,U=Math.exp(-X*X/2);x.push(U),B===0?P+=U:B<S&&(P+=2*U)}for(let B=0;B<x.length;B++)x[B]=x[B]/P;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-r;const D=this._sizeLods[o],G=3*D*(o>N-Js?o-N+Js:0),z=4*(this._cubeSize-D);bu(n,G,z,3*D,2*D),p.setRenderTarget(n),p.render(v,Jd)}}function _w(i){const t=[],n=[],r=[];let o=i;const c=i-Js+1+sx.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);n.push(h);let p=1/h;u>i-Js?p=sx[u-i+Js-1]:u===0&&(p=0),r.push(p);const d=1/(h-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,b=3,S=2,x=1,P=new Float32Array(b*E*y),N=new Float32Array(S*E*y),D=new Float32Array(x*E*y);for(let z=0;z<y;z++){const B=z%3*2/3-1,X=z>2?0:-1,U=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];P.set(U,b*E*z),N.set(_,S*E*z);const R=[z,z,z,z,z,z];D.set(R,x*E*z)}const G=new xi;G.setAttribute("position",new Di(P,b)),G.setAttribute("uv",new Di(N,S)),G.setAttribute("faceIndex",new Di(D,x)),t.push(G),o>Js&&o--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function ux(i,t,n){const r=new Yr(i,t,n);return r.texture.mapping=hf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bu(i,t,n,r,o){i.viewport.set(t,n,r,o),i.scissor.set(t,n,r,o)}function vw(i,t,n){const r=new Float32Array(Hr),o=new J(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Dm(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function fx(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dm(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function hx(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Dm(){return`

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
	`}function xw(i){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const p=h.mapping,d=p===wp||p===Rp,g=p===oo||p===lo;if(d||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new cx(i)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return d&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new cx(i)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function yw(i){const t={};function n(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return t[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Iu("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Sw(i,t,n,r){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const y in _)t.update(_[y],i.ARRAY_BUFFER)}function d(v){const _=[],y=v.index,E=v.attributes.position;let b=0;if(y!==null){const P=y.array;b=y.version;for(let N=0,D=P.length;N<D;N+=3){const G=P[N+0],z=P[N+1],B=P[N+2];_.push(G,z,z,B,B,G)}}else if(E!==void 0){const P=E.array;b=E.version;for(let N=0,D=P.length/3-1;N<D;N+=3){const G=N+0,z=N+1,B=N+2;_.push(G,z,z,B,B,G)}}else return;const S=new(Ry(_)?Ny:Uy)(_,1);S.version=b;const x=c.get(v);x&&t.remove(x),c.set(v,S)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&d(v)}else d(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function Mw(i,t,n){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,y){i.drawElements(r,y,c,_*u),n.update(y,r,1)}function d(_,y,E){E!==0&&(i.drawElementsInstanced(r,y,c,_*u,E),n.update(y,r,E))}function g(_,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,_,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,r,1)}function v(_,y,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)d(_[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,_,0,b,0,E);let x=0;for(let P=0;P<E;P++)x+=y[P]*b[P];n.update(x,r,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Ew(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=h*(c/3);break;case i.LINES:n.lines+=h*(c/2);break;case i.LINE_STRIP:n.lines+=h*(c-1);break;case i.LINE_LOOP:n.lines+=h*c;break;case i.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:r}}function bw(i,t,n){const r=new WeakMap,o=new on;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let R=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var y=R;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let G=h.attributes.position.count*D,z=1;G>t.maxTextureSize&&(z=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const B=new Float32Array(G*z*4*v),X=new Cy(B,G,z,v);X.type=va,X.needsUpdate=!0;const U=D*4;for(let I=0;I<v;I++){const Y=x[I],et=P[I],gt=N[I],dt=G*z*4*I;for(let F=0;F<Y.count;F++){const Z=F*U;E===!0&&(o.fromBufferAttribute(Y,F),B[dt+Z+0]=o.x,B[dt+Z+1]=o.y,B[dt+Z+2]=o.z,B[dt+Z+3]=0),b===!0&&(o.fromBufferAttribute(et,F),B[dt+Z+4]=o.x,B[dt+Z+5]=o.y,B[dt+Z+6]=o.z,B[dt+Z+7]=0),S===!0&&(o.fromBufferAttribute(gt,F),B[dt+Z+8]=o.x,B[dt+Z+9]=o.y,B[dt+Z+10]=o.z,B[dt+Z+11]=gt.itemSize===4?o.w:1)}}_={count:v,texture:X,size:new fe(G,z)},r.set(h,_),h.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function Tw(i,t,n,r){let o=new WeakMap;function c(p){const d=r.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==d&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function u(){o=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const Xy=new Gn,dx=new Gy(1,1),Wy=new Cy,Yy=new eT,qy=new Py,px=[],mx=[],gx=new Float32Array(16),_x=new Float32Array(9),vx=new Float32Array(4);function yo(i,t,n){const r=i[0];if(r<=0||r>0)return i;const o=t*n;let c=px[o];if(c===void 0&&(c=new Float32Array(o),px[o]=c),t!==0){r.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,i[u].toArray(c,h)}return c}function _n(i,t){if(i.length!==t.length)return!1;for(let n=0,r=i.length;n<r;n++)if(i[n]!==t[n])return!1;return!0}function vn(i,t){for(let n=0,r=t.length;n<r;n++)i[n]=t[n]}function gf(i,t){let n=mx[t];n===void 0&&(n=new Int32Array(t),mx[t]=n);for(let r=0;r!==t;++r)n[r]=i.allocateTextureUnit();return n}function Aw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function ww(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2fv(this.addr,t),vn(n,t)}}function Rw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;i.uniform3fv(this.addr,t),vn(n,t)}}function Cw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4fv(this.addr,t),vn(n,t)}}function Dw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(_n(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,r))return;vx.set(r),i.uniformMatrix2fv(this.addr,!1,vx),vn(n,r)}}function Uw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(_n(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,r))return;_x.set(r),i.uniformMatrix3fv(this.addr,!1,_x),vn(n,r)}}function Nw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(_n(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,r))return;gx.set(r),i.uniformMatrix4fv(this.addr,!1,gx),vn(n,r)}}function Lw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function Ow(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2iv(this.addr,t),vn(n,t)}}function Pw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;i.uniform3iv(this.addr,t),vn(n,t)}}function zw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4iv(this.addr,t),vn(n,t)}}function Fw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function Bw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2uiv(this.addr,t),vn(n,t)}}function Iw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;i.uniform3uiv(this.addr,t),vn(n,t)}}function Hw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4uiv(this.addr,t),vn(n,t)}}function Gw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(dx.compareFunction=wy,c=dx):c=Xy,n.setTexture2D(t||c,o)}function Vw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(t||Yy,o)}function kw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(t||qy,o)}function Xw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(t||Wy,o)}function Ww(i){switch(i){case 5126:return Aw;case 35664:return ww;case 35665:return Rw;case 35666:return Cw;case 35674:return Dw;case 35675:return Uw;case 35676:return Nw;case 5124:case 35670:return Lw;case 35667:case 35671:return Ow;case 35668:case 35672:return Pw;case 35669:case 35673:return zw;case 5125:return Fw;case 36294:return Bw;case 36295:return Iw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return Xw}}function Yw(i,t){i.uniform1fv(this.addr,t)}function qw(i,t){const n=yo(t,this.size,2);i.uniform2fv(this.addr,n)}function jw(i,t){const n=yo(t,this.size,3);i.uniform3fv(this.addr,n)}function Zw(i,t){const n=yo(t,this.size,4);i.uniform4fv(this.addr,n)}function Kw(i,t){const n=yo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function Qw(i,t){const n=yo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function $w(i,t){const n=yo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function Jw(i,t){i.uniform1iv(this.addr,t)}function tR(i,t){i.uniform2iv(this.addr,t)}function eR(i,t){i.uniform3iv(this.addr,t)}function nR(i,t){i.uniform4iv(this.addr,t)}function iR(i,t){i.uniform1uiv(this.addr,t)}function aR(i,t){i.uniform2uiv(this.addr,t)}function rR(i,t){i.uniform3uiv(this.addr,t)}function sR(i,t){i.uniform4uiv(this.addr,t)}function oR(i,t,n){const r=this.cache,o=t.length,c=gf(n,o);_n(r,c)||(i.uniform1iv(this.addr,c),vn(r,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||Xy,c[u])}function lR(i,t,n){const r=this.cache,o=t.length,c=gf(n,o);_n(r,c)||(i.uniform1iv(this.addr,c),vn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Yy,c[u])}function cR(i,t,n){const r=this.cache,o=t.length,c=gf(n,o);_n(r,c)||(i.uniform1iv(this.addr,c),vn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||qy,c[u])}function uR(i,t,n){const r=this.cache,o=t.length,c=gf(n,o);_n(r,c)||(i.uniform1iv(this.addr,c),vn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Wy,c[u])}function fR(i){switch(i){case 5126:return Yw;case 35664:return qw;case 35665:return jw;case 35666:return Zw;case 35674:return Kw;case 35675:return Qw;case 35676:return $w;case 5124:case 35670:return Jw;case 35667:case 35671:return tR;case 35668:case 35672:return eR;case 35669:case 35673:return nR;case 5125:return iR;case 36294:return aR;case 36295:return rR;case 36296:return sR;case 35678:case 36198:case 36298:case 36306:case 35682:return oR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return cR;case 36289:case 36303:case 36311:case 36292:return uR}}class hR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Ww(n.type)}}class dR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fR(n.type)}}class pR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],r)}}}const ap=/(\w+)(\])?(\[|\.)?/g;function xx(i,t){i.seq.push(t),i.map[t.id]=t}function mR(i,t,n){const r=i.name,o=r.length;for(ap.lastIndex=0;;){const c=ap.exec(r),u=ap.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===o){xx(n,d===void 0?new hR(h,i,t):new dR(h,i,t));break}else{let v=n.map[h];v===void 0&&(v=new pR(h),xx(n,v)),n=v}}}class Hu{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);mR(c,u,this)}}setValue(t,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(t,r,o)}setOptional(t,n,r){const o=n[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,n,r,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const r=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&r.push(u)}return r}}function yx(i,t,n){const r=i.createShader(t);return i.shaderSource(r,n),i.compileShader(r),r}const gR=37297;let _R=0;function vR(i,t){const n=i.split(`
`),r=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return r.join(`
`)}const Sx=new me;function xR(i){Ne._getMatrix(Sx,Ne.workingColorSpace,i);const t=`mat3( ${Sx.elements.map(n=>n.toFixed(4))} )`;switch(Ne.getTransfer(i)){case Wu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mx(i,t,n){const r=i.getShaderParameter(t,i.COMPILE_STATUS),o=i.getShaderInfoLog(t).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+vR(i.getShaderSource(t),u)}else return o}function yR(i,t){const n=xR(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function SR(i,t){let n;switch(t){case Tb:n="Linear";break;case Ab:n="Reinhard";break;case wb:n="Cineon";break;case Rb:n="ACESFilmic";break;case Db:n="AgX";break;case Ub:n="Neutral";break;case Cb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tu=new J;function MR(){Ne.getLuminanceCoefficients(Tu);const i=Tu.x.toFixed(4),t=Tu.y.toFixed(4),n=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ER(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function bR(i){const t=[];for(const n in i){const r=i[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function TR(i,t){const n={},r=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=i.getActiveAttrib(t,o),u=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:h}}return n}function wl(i){return i!==""}function Ex(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bx(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const AR=/^[ \t]*#include +<([\w\d./]+)>/gm;function sm(i){return i.replace(AR,RR)}const wR=new Map;function RR(i,t){let n=ge[t];if(n===void 0){const r=wR.get(t);if(r!==void 0)n=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return sm(n)}const CR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tx(i){return i.replace(CR,DR)}function DR(i,t,n,r){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ax(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function UR(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===py?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ab?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ga&&(t="SHADOWMAP_TYPE_VSM"),t}function NR(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oo:case lo:t="ENVMAP_TYPE_CUBE";break;case hf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function LR(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lo:t="ENVMAP_MODE_REFRACTION";break}return t}function OR(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case my:t="ENVMAP_BLENDING_MULTIPLY";break;case Eb:t="ENVMAP_BLENDING_MIX";break;case bb:t="ENVMAP_BLENDING_ADD";break}return t}function PR(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function zR(i,t,n,r){const o=i.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=UR(n),d=NR(n),g=LR(n),v=OR(n),_=PR(n),y=ER(n),E=bR(c),b=o.createProgram();let S,x,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),x.length>0&&(x+=`
`)):(S=[Ax(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),x=[Ax(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?ge.tonemapping_pars_fragment:"",n.toneMapping!==cr?SR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,yR("linearToOutputTexel",n.outputColorSpace),MR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wl).join(`
`)),u=sm(u),u=Ex(u,n),u=bx(u,n),h=sm(h),h=Ex(h,n),h=bx(h,n),u=Tx(u),h=Tx(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=P+S+u,D=P+x+h,G=yx(o,o.VERTEX_SHADER,N),z=yx(o,o.FRAGMENT_SHADER,D);o.attachShader(b,G),o.attachShader(b,z),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function B(I){if(i.debug.checkShaderErrors){const Y=o.getProgramInfoLog(b).trim(),et=o.getShaderInfoLog(G).trim(),gt=o.getShaderInfoLog(z).trim();let dt=!0,F=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,b,G,z);else{const Z=Mx(o,G,"vertex"),q=Mx(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+Z+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(et===""||gt==="")&&(F=!1);F&&(I.diagnostics={runnable:dt,programLog:Y,vertexShader:{log:et,prefix:S},fragmentShader:{log:gt,prefix:x}})}o.deleteShader(G),o.deleteShader(z),X=new Hu(o,b),U=TR(o,b)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(b,gR)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_R++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=G,this.fragmentShader=z,this}let FR=0;class BR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new IR(t),n.set(t,r)),r}}class IR{constructor(t){this.id=FR++,this.code=t,this.usedTimes=0}}function HR(i,t,n,r,o,c,u){const h=new wm,p=new BR,d=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return d.add(U),U===0?"uv":`uv${U}`}function S(U,R,I,Y,et){const gt=Y.fog,dt=et.geometry,F=U.isMeshStandardMaterial?Y.environment:null,Z=(U.isMeshStandardMaterial?n:t).get(U.envMap||F),q=Z&&Z.mapping===hf?Z.image.height:null,ht=E[U.type];U.precision!==null&&(y=o.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const C=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,nt=C!==void 0?C.length:0;let At=0;dt.morphAttributes.position!==void 0&&(At=1),dt.morphAttributes.normal!==void 0&&(At=2),dt.morphAttributes.color!==void 0&&(At=3);let Ct,W,xt,St;if(ht){const we=Ii[ht];Ct=we.vertexShader,W=we.fragmentShader}else Ct=U.vertexShader,W=U.fragmentShader,p.update(U),xt=p.getVertexShaderID(U),St=p.getFragmentShaderID(U);const ct=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),pt=et.isInstancedMesh===!0,Rt=et.isBatchedMesh===!0,mt=!!U.map,j=!!U.matcap,wt=!!Z,L=!!U.aoMap,de=!!U.lightMap,zt=!!U.bumpMap,It=!!U.normalMap,kt=!!U.displacementMap,xe=!!U.emissiveMap,Zt=!!U.metalnessMap,O=!!U.roughnessMap,T=U.anisotropy>0,at=U.clearcoat>0,Mt=U.dispersion>0,Dt=U.iridescence>0,_t=U.sheen>0,Ht=U.transmission>0,yt=T&&!!U.anisotropyMap,Lt=at&&!!U.clearcoatMap,ue=at&&!!U.clearcoatNormalMap,Nt=at&&!!U.clearcoatRoughnessMap,Wt=Dt&&!!U.iridescenceMap,Jt=Dt&&!!U.iridescenceThicknessMap,te=_t&&!!U.sheenColorMap,Vt=_t&&!!U.sheenRoughnessMap,Ft=!!U.specularMap,Kt=!!U.specularColorMap,he=!!U.specularIntensityMap,V=Ht&&!!U.transmissionMap,Pt=Ht&&!!U.thicknessMap,ft=!!U.gradientMap,Et=!!U.alphaMap,Gt=U.alphaTest>0,Bt=!!U.alphaHash,oe=!!U.extensions;let ke=cr;U.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ke=i.toneMapping);const Je={shaderID:ht,shaderType:U.type,shaderName:U.name,vertexShader:Ct,fragmentShader:W,defines:U.defines,customVertexShaderID:xt,customFragmentShaderID:St,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:Rt,batchingColor:Rt&&et._colorsTexture!==null,instancing:pt,instancingColor:pt&&et.instanceColor!==null,instancingMorph:pt&&et.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:co,alphaToCoverage:!!U.alphaToCoverage,map:mt,matcap:j,envMap:wt,envMapMode:wt&&Z.mapping,envMapCubeUVHeight:q,aoMap:L,lightMap:de,bumpMap:zt,normalMap:It,displacementMap:_&&kt,emissiveMap:xe,normalMapObjectSpace:It&&U.normalMapType===zb,normalMapTangentSpace:It&&U.normalMapType===Pb,metalnessMap:Zt,roughnessMap:O,anisotropy:T,anisotropyMap:yt,clearcoat:at,clearcoatMap:Lt,clearcoatNormalMap:ue,clearcoatRoughnessMap:Nt,dispersion:Mt,iridescence:Dt,iridescenceMap:Wt,iridescenceThicknessMap:Jt,sheen:_t,sheenColorMap:te,sheenRoughnessMap:Vt,specularMap:Ft,specularColorMap:Kt,specularIntensityMap:he,transmission:Ht,transmissionMap:V,thicknessMap:Pt,gradientMap:ft,opaque:U.transparent===!1&&U.blending===io&&U.alphaToCoverage===!1,alphaMap:Et,alphaTest:Gt,alphaHash:Bt,combine:U.combine,mapUv:mt&&b(U.map.channel),aoMapUv:L&&b(U.aoMap.channel),lightMapUv:de&&b(U.lightMap.channel),bumpMapUv:zt&&b(U.bumpMap.channel),normalMapUv:It&&b(U.normalMap.channel),displacementMapUv:kt&&b(U.displacementMap.channel),emissiveMapUv:xe&&b(U.emissiveMap.channel),metalnessMapUv:Zt&&b(U.metalnessMap.channel),roughnessMapUv:O&&b(U.roughnessMap.channel),anisotropyMapUv:yt&&b(U.anisotropyMap.channel),clearcoatMapUv:Lt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:ue&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:te&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&b(U.sheenRoughnessMap.channel),specularMapUv:Ft&&b(U.specularMap.channel),specularColorMapUv:Kt&&b(U.specularColorMap.channel),specularIntensityMapUv:he&&b(U.specularIntensityMap.channel),transmissionMapUv:V&&b(U.transmissionMap.channel),thicknessMapUv:Pt&&b(U.thicknessMap.channel),alphaMapUv:Et&&b(U.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(It||T),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!dt.attributes.uv&&(mt||Et),fog:!!gt,useFog:U.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ut,skinning:et.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:At,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:mt&&U.map.isVideoTexture===!0&&Ne.getTransfer(U.map.colorSpace)===He,decodeVideoTextureEmissive:xe&&U.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(U.emissiveMap.colorSpace)===He,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===_a,flipSided:U.side===Zn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:oe&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&U.extensions.multiDraw===!0||Rt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Je.vertexUv1s=d.has(1),Je.vertexUv2s=d.has(2),Je.vertexUv3s=d.has(3),d.clear(),Je}function x(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const I in U.defines)R.push(I),R.push(U.defines[I]);return U.isRawShaderMaterial===!1&&(P(R,U),N(R,U),R.push(i.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function P(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function N(U,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),U.push(h.mask)}function D(U){const R=E[U.type];let I;if(R){const Y=Ii[R];I=pT.clone(Y.uniforms)}else I=U.uniforms;return I}function G(U,R){let I;for(let Y=0,et=g.length;Y<et;Y++){const gt=g[Y];if(gt.cacheKey===R){I=gt,++I.usedTimes;break}}return I===void 0&&(I=new zR(i,R,U,c),g.push(I)),I}function z(U){if(--U.usedTimes===0){const R=g.indexOf(U);g[R]=g[g.length-1],g.pop(),U.destroy()}}function B(U){p.remove(U)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:G,releaseProgram:z,releaseShaderCache:B,programs:g,dispose:X}}function GR(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function r(u){i.delete(u)}function o(u,h,p){i.get(u)[h]=p}function c(){i=new WeakMap}return{has:t,get:n,remove:r,update:o,dispose:c}}function VR(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rx(){const i=[];let t=0;const n=[],r=[],o=[];function c(){t=0,n.length=0,r.length=0,o.length=0}function u(v,_,y,E,b,S){let x=i[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:E,renderOrder:v.renderOrder,z:b,group:S},i[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=b,x.group=S),t++,x}function h(v,_,y,E,b,S){const x=u(v,_,y,E,b,S);y.transmission>0?r.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(v,_,y,E,b,S){const x=u(v,_,y,E,b,S);y.transmission>0?r.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function d(v,_){n.length>1&&n.sort(v||VR),r.length>1&&r.sort(_||wx),o.length>1&&o.sort(_||wx)}function g(){for(let v=t,_=i.length;v<_;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:h,unshift:p,finish:g,sort:d}}function kR(){let i=new WeakMap;function t(r,o){const c=i.get(r);let u;return c===void 0?(u=new Rx,i.set(r,[u])):o>=c.length?(u=new Rx,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function XR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new J,color:new be};break;case"SpotLight":n={position:new J,direction:new J,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new be,groundColor:new be};break;case"RectAreaLight":n={color:new be,position:new J,halfWidth:new J,halfHeight:new J};break}return i[t.id]=n,n}}}function WR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let YR=0;function qR(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jR(i){const t=new XR,n=WR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new J);const o=new J,c=new $e,u=new $e;function h(d){let g=0,v=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let y=0,E=0,b=0,S=0,x=0,P=0,N=0,D=0,G=0,z=0,B=0;d.sort(qR);for(let U=0,R=d.length;U<R;U++){const I=d[U],Y=I.color,et=I.intensity,gt=I.distance,dt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=Y.r*et,v+=Y.g*et,_+=Y.b*et;else if(I.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],et);B++}else if(I.isDirectionalLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,q=n.get(I);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=dt,r.directionalShadowMatrix[y]=I.shadow.matrix,P++}r.directional[y]=F,y++}else if(I.isSpotLight){const F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(Y).multiplyScalar(et),F.distance=gt,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,r.spot[b]=F;const Z=I.shadow;if(I.map&&(r.spotLightMap[G]=I.map,G++,Z.updateMatrices(I),I.castShadow&&z++),r.spotLightMatrix[b]=Z.matrix,I.castShadow){const q=n.get(I);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[b]=q,r.spotShadowMap[b]=dt,D++}b++}else if(I.isRectAreaLight){const F=t.get(I);F.color.copy(Y).multiplyScalar(et),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=F,S++}else if(I.isPointLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){const Z=I.shadow,q=n.get(I);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=I.shadow.matrix,N++}r.point[E]=F,E++}else if(I.isHemisphereLight){const F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(et),F.groundColor.copy(I.groundColor).multiplyScalar(et),r.hemi[x]=F,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qt.LTC_FLOAT_1,r.rectAreaLTC2=qt.LTC_FLOAT_2):(r.rectAreaLTC1=qt.LTC_HALF_1,r.rectAreaLTC2=qt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const X=r.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==b||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==P||X.numPointShadows!==N||X.numSpotShadows!==D||X.numSpotMaps!==G||X.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=D+G-z,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=B,X.directionalLength=y,X.pointLength=E,X.spotLength=b,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=P,X.numPointShadows=N,X.numSpotShadows=D,X.numSpotMaps=G,X.numLightProbes=B,r.version=YR++)}function p(d,g){let v=0,_=0,y=0,E=0,b=0;const S=g.matrixWorldInverse;for(let x=0,P=d.length;x<P;x++){const N=d[x];if(N.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),v++}else if(N.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),u.identity(),c.copy(N.matrixWorld),c.premultiply(S),u.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const D=r.point[_];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),_++}else if(N.isHemisphereLight){const D=r.hemi[b];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:r}}function Cx(i){const t=new jR(i),n=[],r=[];function o(g){d.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function u(g){r.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function ZR(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new Cx(i),t.set(o,[h])):c>=u.length?(h=new Cx(i),u.push(h)):h=u[c],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QR=`uniform sampler2D shadow_pass;
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
}`;function $R(i,t,n){let r=new Iy;const o=new fe,c=new fe,u=new on,h=new ET({depthPacking:Ob}),p=new bT,d={},g=n.maxTextureSize,v={[fr]:Zn,[Zn]:fr,[_a]:_a},_=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:KR,fragmentShader:QR}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new xi;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new si(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=py;let x=this.type;this.render=function(z,B,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const U=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(lr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const et=x!==ga&&this.type===ga,gt=x===ga&&this.type!==ga;for(let dt=0,F=z.length;dt<F;dt++){const Z=z[dt],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const ht=q.getFrameExtents();if(o.multiply(ht),c.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ht.x),o.x=c.x*ht.x,q.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ht.y),o.y=c.y*ht.y,q.mapSize.y=c.y)),q.map===null||et===!0||gt===!0){const nt=this.type!==ga?{minFilter:Ci,magFilter:Ci}:{};q.map!==null&&q.map.dispose(),q.map=new Yr(o.x,o.y,nt),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const C=q.getViewportCount();for(let nt=0;nt<C;nt++){const At=q.getViewport(nt);u.set(c.x*At.x,c.y*At.y,c.x*At.z,c.y*At.w),Y.viewport(u),q.updateMatrices(Z,nt),r=q.getFrustum(),D(B,X,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ga&&P(q,X),q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,i.setRenderTarget(U,R,I)};function P(z,B){const X=t.update(b);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Yr(o.x,o.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(B,null,X,_,b,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(B,null,X,y,b,null)}function N(z,B,X,U){let R=null;const I=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(I!==void 0)R=I;else if(R=X.isPointLight===!0?p:h,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const Y=R.uuid,et=B.uuid;let gt=d[Y];gt===void 0&&(gt={},d[Y]=gt);let dt=gt[et];dt===void 0&&(dt=R.clone(),gt[et]=dt,B.addEventListener("dispose",G)),R=dt}if(R.visible=B.visible,R.wireframe=B.wireframe,U===ga?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:v[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=i.properties.get(R);Y.light=X}return R}function D(z,B,X,U,R){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===ga)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const et=t.update(z),gt=z.material;if(Array.isArray(gt)){const dt=et.groups;for(let F=0,Z=dt.length;F<Z;F++){const q=dt[F],ht=gt[q.materialIndex];if(ht&&ht.visible){const C=N(z,ht,U,R);z.onBeforeShadow(i,z,B,X,et,C,q),i.renderBufferDirect(X,null,et,C,z,q),z.onAfterShadow(i,z,B,X,et,C,q)}}}else if(gt.visible){const dt=N(z,gt,U,R);z.onBeforeShadow(i,z,B,X,et,dt,null),i.renderBufferDirect(X,null,et,dt,z,null),z.onAfterShadow(i,z,B,X,et,dt,null)}}const Y=z.children;for(let et=0,gt=Y.length;et<gt;et++)D(Y[et],B,X,U,R)}function G(z){z.target.removeEventListener("dispose",G);for(const X in d){const U=d[X],R=z.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const JR={[yp]:Sp,[Mp]:Tp,[Ep]:Ap,[so]:bp,[Sp]:yp,[Tp]:Mp,[Ap]:Ep,[bp]:so};function t2(i,t){function n(){let V=!1;const Pt=new on;let ft=null;const Et=new on(0,0,0,0);return{setMask:function(Gt){ft!==Gt&&!V&&(i.colorMask(Gt,Gt,Gt,Gt),ft=Gt)},setLocked:function(Gt){V=Gt},setClear:function(Gt,Bt,oe,ke,Je){Je===!0&&(Gt*=ke,Bt*=ke,oe*=ke),Pt.set(Gt,Bt,oe,ke),Et.equals(Pt)===!1&&(i.clearColor(Gt,Bt,oe,ke),Et.copy(Pt))},reset:function(){V=!1,ft=null,Et.set(-1,0,0,0)}}}function r(){let V=!1,Pt=!1,ft=null,Et=null,Gt=null;return{setReversed:function(Bt){if(Pt!==Bt){const oe=t.get("EXT_clip_control");Bt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Pt=Bt;const ke=Gt;Gt=null,this.setClear(ke)}},getReversed:function(){return Pt},setTest:function(Bt){Bt?ct(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Bt){ft!==Bt&&!V&&(i.depthMask(Bt),ft=Bt)},setFunc:function(Bt){if(Pt&&(Bt=JR[Bt]),Et!==Bt){switch(Bt){case yp:i.depthFunc(i.NEVER);break;case Sp:i.depthFunc(i.ALWAYS);break;case Mp:i.depthFunc(i.LESS);break;case so:i.depthFunc(i.LEQUAL);break;case Ep:i.depthFunc(i.EQUAL);break;case bp:i.depthFunc(i.GEQUAL);break;case Tp:i.depthFunc(i.GREATER);break;case Ap:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Bt}},setLocked:function(Bt){V=Bt},setClear:function(Bt){Gt!==Bt&&(Pt&&(Bt=1-Bt),i.clearDepth(Bt),Gt=Bt)},reset:function(){V=!1,ft=null,Et=null,Gt=null,Pt=!1}}}function o(){let V=!1,Pt=null,ft=null,Et=null,Gt=null,Bt=null,oe=null,ke=null,Je=null;return{setTest:function(we){V||(we?ct(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(we){Pt!==we&&!V&&(i.stencilMask(we),Pt=we)},setFunc:function(we,Dn,ln){(ft!==we||Et!==Dn||Gt!==ln)&&(i.stencilFunc(we,Dn,ln),ft=we,Et=Dn,Gt=ln)},setOp:function(we,Dn,ln){(Bt!==we||oe!==Dn||ke!==ln)&&(i.stencilOp(we,Dn,ln),Bt=we,oe=Dn,ke=ln)},setLocked:function(we){V=we},setClear:function(we){Je!==we&&(i.clearStencil(we),Je=we)},reset:function(){V=!1,Pt=null,ft=null,Et=null,Gt=null,Bt=null,oe=null,ke=null,Je=null}}}const c=new n,u=new r,h=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,y=[],E=null,b=!1,S=null,x=null,P=null,N=null,D=null,G=null,z=null,B=new be(0,0,0),X=0,U=!1,R=null,I=null,Y=null,et=null,gt=null;const dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Z=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=Z>=2);let ht=null,C={};const nt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),Ct=new on().fromArray(nt),W=new on().fromArray(At);function xt(V,Pt,ft,Et){const Gt=new Uint8Array(4),Bt=i.createTexture();i.bindTexture(V,Bt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<ft;oe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Gt):i.texImage2D(Pt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Gt);return Bt}const St={};St[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ct(i.DEPTH_TEST),u.setFunc(so),zt(!1),It(Cv),ct(i.CULL_FACE),L(lr);function ct(V){g[V]!==!0&&(i.enable(V),g[V]=!0)}function Ut(V){g[V]!==!1&&(i.disable(V),g[V]=!1)}function pt(V,Pt){return v[V]!==Pt?(i.bindFramebuffer(V,Pt),v[V]=Pt,V===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Pt),V===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Rt(V,Pt){let ft=y,Et=!1;if(V){ft=_.get(Pt),ft===void 0&&(ft=[],_.set(Pt,ft));const Gt=V.textures;if(ft.length!==Gt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Bt=0,oe=Gt.length;Bt<oe;Bt++)ft[Bt]=i.COLOR_ATTACHMENT0+Bt;ft.length=Gt.length,Et=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ft)}function mt(V){return E!==V?(i.useProgram(V),E=V,!0):!1}const j={[Ir]:i.FUNC_ADD,[sb]:i.FUNC_SUBTRACT,[ob]:i.FUNC_REVERSE_SUBTRACT};j[lb]=i.MIN,j[cb]=i.MAX;const wt={[ub]:i.ZERO,[fb]:i.ONE,[hb]:i.SRC_COLOR,[vp]:i.SRC_ALPHA,[vb]:i.SRC_ALPHA_SATURATE,[gb]:i.DST_COLOR,[pb]:i.DST_ALPHA,[db]:i.ONE_MINUS_SRC_COLOR,[xp]:i.ONE_MINUS_SRC_ALPHA,[_b]:i.ONE_MINUS_DST_COLOR,[mb]:i.ONE_MINUS_DST_ALPHA,[xb]:i.CONSTANT_COLOR,[yb]:i.ONE_MINUS_CONSTANT_COLOR,[Sb]:i.CONSTANT_ALPHA,[Mb]:i.ONE_MINUS_CONSTANT_ALPHA};function L(V,Pt,ft,Et,Gt,Bt,oe,ke,Je,we){if(V===lr){b===!0&&(Ut(i.BLEND),b=!1);return}if(b===!1&&(ct(i.BLEND),b=!0),V!==rb){if(V!==S||we!==U){if((x!==Ir||D!==Ir)&&(i.blendEquation(i.FUNC_ADD),x=Ir,D=Ir),we)switch(V){case io:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dv:i.blendFunc(i.ONE,i.ONE);break;case Uv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nv:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dv:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nv:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}P=null,N=null,G=null,z=null,B.set(0,0,0),X=0,S=V,U=we}return}Gt=Gt||Pt,Bt=Bt||ft,oe=oe||Et,(Pt!==x||Gt!==D)&&(i.blendEquationSeparate(j[Pt],j[Gt]),x=Pt,D=Gt),(ft!==P||Et!==N||Bt!==G||oe!==z)&&(i.blendFuncSeparate(wt[ft],wt[Et],wt[Bt],wt[oe]),P=ft,N=Et,G=Bt,z=oe),(ke.equals(B)===!1||Je!==X)&&(i.blendColor(ke.r,ke.g,ke.b,Je),B.copy(ke),X=Je),S=V,U=!1}function de(V,Pt){V.side===_a?Ut(i.CULL_FACE):ct(i.CULL_FACE);let ft=V.side===Zn;Pt&&(ft=!ft),zt(ft),V.blending===io&&V.transparent===!1?L(lr):L(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const Et=V.stencilWrite;h.setTest(Et),Et&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),xe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(V){R!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),R=V)}function It(V){V!==nb?(ct(i.CULL_FACE),V!==I&&(V===Cv?i.cullFace(i.BACK):V===ib?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),I=V}function kt(V){V!==Y&&(F&&i.lineWidth(V),Y=V)}function xe(V,Pt,ft){V?(ct(i.POLYGON_OFFSET_FILL),(et!==Pt||gt!==ft)&&(i.polygonOffset(Pt,ft),et=Pt,gt=ft)):Ut(i.POLYGON_OFFSET_FILL)}function Zt(V){V?ct(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function O(V){V===void 0&&(V=i.TEXTURE0+dt-1),ht!==V&&(i.activeTexture(V),ht=V)}function T(V,Pt,ft){ft===void 0&&(ht===null?ft=i.TEXTURE0+dt-1:ft=ht);let Et=C[ft];Et===void 0&&(Et={type:void 0,texture:void 0},C[ft]=Et),(Et.type!==V||Et.texture!==Pt)&&(ht!==ft&&(i.activeTexture(ft),ht=ft),i.bindTexture(V,Pt||St[V]),Et.type=V,Et.texture=Pt)}function at(){const V=C[ht];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Jt(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(V){Ct.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Ct.copy(V))}function Vt(V){W.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),W.copy(V))}function Ft(V,Pt){let ft=d.get(Pt);ft===void 0&&(ft=new WeakMap,d.set(Pt,ft));let Et=ft.get(V);Et===void 0&&(Et=i.getUniformBlockIndex(Pt,V.name),ft.set(V,Et))}function Kt(V,Pt){const Et=d.get(Pt).get(V);p.get(Pt)!==Et&&(i.uniformBlockBinding(Pt,Et,V.__bindingPointIndex),p.set(Pt,Et))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},ht=null,C={},v={},_=new WeakMap,y=[],E=null,b=!1,S=null,x=null,P=null,N=null,D=null,G=null,z=null,B=new be(0,0,0),X=0,U=!1,R=null,I=null,Y=null,et=null,gt=null,Ct.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ct,disable:Ut,bindFramebuffer:pt,drawBuffers:Rt,useProgram:mt,setBlending:L,setMaterial:de,setFlipSided:zt,setCullFace:It,setLineWidth:kt,setPolygonOffset:xe,setScissorTest:Zt,activeTexture:O,bindTexture:T,unbindTexture:at,compressedTexImage2D:Mt,compressedTexImage3D:Dt,texImage2D:Wt,texImage3D:Jt,updateUBOMapping:Ft,uniformBlockBinding:Kt,texStorage2D:ue,texStorage3D:Nt,texSubImage2D:_t,texSubImage3D:Ht,compressedTexSubImage2D:yt,compressedTexSubImage3D:Lt,scissor:te,viewport:Vt,reset:he}}function e2(i,t,n,r,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new fe,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return y?new OffscreenCanvas(O,T):qu("canvas")}function b(O,T,at){let Mt=1;const Dt=Zt(O);if((Dt.width>at||Dt.height>at)&&(Mt=at/Math.max(Dt.width,Dt.height)),Mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const _t=Math.floor(Mt*Dt.width),Ht=Math.floor(Mt*Dt.height);v===void 0&&(v=E(_t,Ht));const yt=T?E(_t,Ht):v;return yt.width=_t,yt.height=Ht,yt.getContext("2d").drawImage(O,0,0,_t,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Dt.width+"x"+Dt.height+") to ("+_t+"x"+Ht+")."),yt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Dt.width+"x"+Dt.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){i.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(O,T,at,Mt,Dt=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _t=T;if(T===i.RED&&(at===i.FLOAT&&(_t=i.R32F),at===i.HALF_FLOAT&&(_t=i.R16F),at===i.UNSIGNED_BYTE&&(_t=i.R8)),T===i.RED_INTEGER&&(at===i.UNSIGNED_BYTE&&(_t=i.R8UI),at===i.UNSIGNED_SHORT&&(_t=i.R16UI),at===i.UNSIGNED_INT&&(_t=i.R32UI),at===i.BYTE&&(_t=i.R8I),at===i.SHORT&&(_t=i.R16I),at===i.INT&&(_t=i.R32I)),T===i.RG&&(at===i.FLOAT&&(_t=i.RG32F),at===i.HALF_FLOAT&&(_t=i.RG16F),at===i.UNSIGNED_BYTE&&(_t=i.RG8)),T===i.RG_INTEGER&&(at===i.UNSIGNED_BYTE&&(_t=i.RG8UI),at===i.UNSIGNED_SHORT&&(_t=i.RG16UI),at===i.UNSIGNED_INT&&(_t=i.RG32UI),at===i.BYTE&&(_t=i.RG8I),at===i.SHORT&&(_t=i.RG16I),at===i.INT&&(_t=i.RG32I)),T===i.RGB_INTEGER&&(at===i.UNSIGNED_BYTE&&(_t=i.RGB8UI),at===i.UNSIGNED_SHORT&&(_t=i.RGB16UI),at===i.UNSIGNED_INT&&(_t=i.RGB32UI),at===i.BYTE&&(_t=i.RGB8I),at===i.SHORT&&(_t=i.RGB16I),at===i.INT&&(_t=i.RGB32I)),T===i.RGBA_INTEGER&&(at===i.UNSIGNED_BYTE&&(_t=i.RGBA8UI),at===i.UNSIGNED_SHORT&&(_t=i.RGBA16UI),at===i.UNSIGNED_INT&&(_t=i.RGBA32UI),at===i.BYTE&&(_t=i.RGBA8I),at===i.SHORT&&(_t=i.RGBA16I),at===i.INT&&(_t=i.RGBA32I)),T===i.RGB&&at===i.UNSIGNED_INT_5_9_9_9_REV&&(_t=i.RGB9_E5),T===i.RGBA){const Ht=Dt?Wu:Ne.getTransfer(Mt);at===i.FLOAT&&(_t=i.RGBA32F),at===i.HALF_FLOAT&&(_t=i.RGBA16F),at===i.UNSIGNED_BYTE&&(_t=Ht===He?i.SRGB8_ALPHA8:i.RGBA8),at===i.UNSIGNED_SHORT_4_4_4_4&&(_t=i.RGBA4),at===i.UNSIGNED_SHORT_5_5_5_1&&(_t=i.RGB5_A1)}return(_t===i.R16F||_t===i.R32F||_t===i.RG16F||_t===i.RG32F||_t===i.RGBA16F||_t===i.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function D(O,T){let at;return O?T===null||T===Wr||T===Ll?at=i.DEPTH24_STENCIL8:T===va?at=i.DEPTH32F_STENCIL8:T===Nl&&(at=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wr||T===Ll?at=i.DEPTH_COMPONENT24:T===va?at=i.DEPTH_COMPONENT32F:T===Nl&&(at=i.DEPTH_COMPONENT16),at}function G(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ci&&O.minFilter!==Gi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function z(O){const T=O.target;T.removeEventListener("dispose",z),X(T),T.isVideoTexture&&g.delete(T)}function B(O){const T=O.target;T.removeEventListener("dispose",B),R(T)}function X(O){const T=r.get(O);if(T.__webglInit===void 0)return;const at=O.source,Mt=_.get(at);if(Mt){const Dt=Mt[T.__cacheKey];Dt.usedTimes--,Dt.usedTimes===0&&U(O),Object.keys(Mt).length===0&&_.delete(at)}r.remove(O)}function U(O){const T=r.get(O);i.deleteTexture(T.__webglTexture);const at=O.source,Mt=_.get(at);delete Mt[T.__cacheKey],u.memory.textures--}function R(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Mt=0;Mt<6;Mt++){if(Array.isArray(T.__webglFramebuffer[Mt]))for(let Dt=0;Dt<T.__webglFramebuffer[Mt].length;Dt++)i.deleteFramebuffer(T.__webglFramebuffer[Mt][Dt]);else i.deleteFramebuffer(T.__webglFramebuffer[Mt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let Mt=0;Mt<T.__webglFramebuffer.length;Mt++)i.deleteFramebuffer(T.__webglFramebuffer[Mt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Mt=0;Mt<T.__webglColorRenderbuffer.length;Mt++)T.__webglColorRenderbuffer[Mt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Mt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=O.textures;for(let Mt=0,Dt=at.length;Mt<Dt;Mt++){const _t=r.get(at[Mt]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),u.memory.textures--),r.remove(at[Mt])}r.remove(O)}let I=0;function Y(){I=0}function et(){const O=I;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),I+=1,O}function gt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function dt(O,T){const at=r.get(O);if(O.isVideoTexture&&kt(O),O.isRenderTargetTexture===!1&&O.version>0&&at.__version!==O.version){const Mt=O.image;if(Mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(at,O,T);return}}n.bindTexture(i.TEXTURE_2D,at.__webglTexture,i.TEXTURE0+T)}function F(O,T){const at=r.get(O);if(O.version>0&&at.__version!==O.version){W(at,O,T);return}n.bindTexture(i.TEXTURE_2D_ARRAY,at.__webglTexture,i.TEXTURE0+T)}function Z(O,T){const at=r.get(O);if(O.version>0&&at.__version!==O.version){W(at,O,T);return}n.bindTexture(i.TEXTURE_3D,at.__webglTexture,i.TEXTURE0+T)}function q(O,T){const at=r.get(O);if(O.version>0&&at.__version!==O.version){xt(at,O,T);return}n.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture,i.TEXTURE0+T)}const ht={[Cp]:i.REPEAT,[Gr]:i.CLAMP_TO_EDGE,[Dp]:i.MIRRORED_REPEAT},C={[Ci]:i.NEAREST,[Nb]:i.NEAREST_MIPMAP_NEAREST,[tu]:i.NEAREST_MIPMAP_LINEAR,[Gi]:i.LINEAR,[Rd]:i.LINEAR_MIPMAP_NEAREST,[Vr]:i.LINEAR_MIPMAP_LINEAR},nt={[Fb]:i.NEVER,[kb]:i.ALWAYS,[Bb]:i.LESS,[wy]:i.LEQUAL,[Ib]:i.EQUAL,[Vb]:i.GEQUAL,[Hb]:i.GREATER,[Gb]:i.NOTEQUAL};function At(O,T){if(T.type===va&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Gi||T.magFilter===Rd||T.magFilter===tu||T.magFilter===Vr||T.minFilter===Gi||T.minFilter===Rd||T.minFilter===tu||T.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,ht[T.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,ht[T.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,ht[T.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,C[T.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,C[T.minFilter]),T.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==tu&&T.minFilter!==Vr||T.type===va&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ct(O,T){let at=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",z));const Mt=T.source;let Dt=_.get(Mt);Dt===void 0&&(Dt={},_.set(Mt,Dt));const _t=gt(T);if(_t!==O.__cacheKey){Dt[_t]===void 0&&(Dt[_t]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,at=!0),Dt[_t].usedTimes++;const Ht=Dt[O.__cacheKey];Ht!==void 0&&(Dt[O.__cacheKey].usedTimes--,Ht.usedTimes===0&&U(T)),O.__cacheKey=_t,O.__webglTexture=Dt[_t].texture}return at}function W(O,T,at){let Mt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Mt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Mt=i.TEXTURE_3D);const Dt=Ct(O,T),_t=T.source;n.bindTexture(Mt,O.__webglTexture,i.TEXTURE0+at);const Ht=r.get(_t);if(_t.version!==Ht.__version||Dt===!0){n.activeTexture(i.TEXTURE0+at);const yt=Ne.getPrimaries(Ne.workingColorSpace),Lt=T.colorSpace===or?null:Ne.getPrimaries(T.colorSpace),ue=T.colorSpace===or||yt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Nt=b(T.image,!1,o.maxTextureSize);Nt=xe(T,Nt);const Wt=c.convert(T.format,T.colorSpace),Jt=c.convert(T.type);let te=N(T.internalFormat,Wt,Jt,T.colorSpace,T.isVideoTexture);At(Mt,T);let Vt;const Ft=T.mipmaps,Kt=T.isVideoTexture!==!0,he=Ht.__version===void 0||Dt===!0,V=_t.dataReady,Pt=G(T,Nt);if(T.isDepthTexture)te=D(T.format===Pl,T.type),he&&(Kt?n.texStorage2D(i.TEXTURE_2D,1,te,Nt.width,Nt.height):n.texImage2D(i.TEXTURE_2D,0,te,Nt.width,Nt.height,0,Wt,Jt,null));else if(T.isDataTexture)if(Ft.length>0){Kt&&he&&n.texStorage2D(i.TEXTURE_2D,Pt,te,Ft[0].width,Ft[0].height);for(let ft=0,Et=Ft.length;ft<Et;ft++)Vt=Ft[ft],Kt?V&&n.texSubImage2D(i.TEXTURE_2D,ft,0,0,Vt.width,Vt.height,Wt,Jt,Vt.data):n.texImage2D(i.TEXTURE_2D,ft,te,Vt.width,Vt.height,0,Wt,Jt,Vt.data);T.generateMipmaps=!1}else Kt?(he&&n.texStorage2D(i.TEXTURE_2D,Pt,te,Nt.width,Nt.height),V&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt.width,Nt.height,Wt,Jt,Nt.data)):n.texImage2D(i.TEXTURE_2D,0,te,Nt.width,Nt.height,0,Wt,Jt,Nt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Kt&&he&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,te,Ft[0].width,Ft[0].height,Nt.depth);for(let ft=0,Et=Ft.length;ft<Et;ft++)if(Vt=Ft[ft],T.format!==Ri)if(Wt!==null)if(Kt){if(V)if(T.layerUpdates.size>0){const Gt=rx(Vt.width,Vt.height,T.format,T.type);for(const Bt of T.layerUpdates){const oe=Vt.data.subarray(Bt*Gt/Vt.data.BYTES_PER_ELEMENT,(Bt+1)*Gt/Vt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Bt,Vt.width,Vt.height,1,Wt,oe)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Vt.width,Vt.height,Nt.depth,Wt,Vt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,te,Vt.width,Vt.height,Nt.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?V&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Vt.width,Vt.height,Nt.depth,Wt,Jt,Vt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,ft,te,Vt.width,Vt.height,Nt.depth,0,Wt,Jt,Vt.data)}else{Kt&&he&&n.texStorage2D(i.TEXTURE_2D,Pt,te,Ft[0].width,Ft[0].height);for(let ft=0,Et=Ft.length;ft<Et;ft++)Vt=Ft[ft],T.format!==Ri?Wt!==null?Kt?V&&n.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Vt.width,Vt.height,Wt,Vt.data):n.compressedTexImage2D(i.TEXTURE_2D,ft,te,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?V&&n.texSubImage2D(i.TEXTURE_2D,ft,0,0,Vt.width,Vt.height,Wt,Jt,Vt.data):n.texImage2D(i.TEXTURE_2D,ft,te,Vt.width,Vt.height,0,Wt,Jt,Vt.data)}else if(T.isDataArrayTexture)if(Kt){if(he&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,te,Nt.width,Nt.height,Nt.depth),V)if(T.layerUpdates.size>0){const ft=rx(Nt.width,Nt.height,T.format,T.type);for(const Et of T.layerUpdates){const Gt=Nt.data.subarray(Et*ft/Nt.data.BYTES_PER_ELEMENT,(Et+1)*ft/Nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,Nt.width,Nt.height,1,Wt,Jt,Gt)}T.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Nt.width,Nt.height,Nt.depth,Wt,Jt,Nt.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,te,Nt.width,Nt.height,Nt.depth,0,Wt,Jt,Nt.data);else if(T.isData3DTexture)Kt?(he&&n.texStorage3D(i.TEXTURE_3D,Pt,te,Nt.width,Nt.height,Nt.depth),V&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Nt.width,Nt.height,Nt.depth,Wt,Jt,Nt.data)):n.texImage3D(i.TEXTURE_3D,0,te,Nt.width,Nt.height,Nt.depth,0,Wt,Jt,Nt.data);else if(T.isFramebufferTexture){if(he)if(Kt)n.texStorage2D(i.TEXTURE_2D,Pt,te,Nt.width,Nt.height);else{let ft=Nt.width,Et=Nt.height;for(let Gt=0;Gt<Pt;Gt++)n.texImage2D(i.TEXTURE_2D,Gt,te,ft,Et,0,Wt,Jt,null),ft>>=1,Et>>=1}}else if(Ft.length>0){if(Kt&&he){const ft=Zt(Ft[0]);n.texStorage2D(i.TEXTURE_2D,Pt,te,ft.width,ft.height)}for(let ft=0,Et=Ft.length;ft<Et;ft++)Vt=Ft[ft],Kt?V&&n.texSubImage2D(i.TEXTURE_2D,ft,0,0,Wt,Jt,Vt):n.texImage2D(i.TEXTURE_2D,ft,te,Wt,Jt,Vt);T.generateMipmaps=!1}else if(Kt){if(he){const ft=Zt(Nt);n.texStorage2D(i.TEXTURE_2D,Pt,te,ft.width,ft.height)}V&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,Jt,Nt)}else n.texImage2D(i.TEXTURE_2D,0,te,Wt,Jt,Nt);S(T)&&x(Mt),Ht.__version=_t.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function xt(O,T,at){if(T.image.length!==6)return;const Mt=Ct(O,T),Dt=T.source;n.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+at);const _t=r.get(Dt);if(Dt.version!==_t.__version||Mt===!0){n.activeTexture(i.TEXTURE0+at);const Ht=Ne.getPrimaries(Ne.workingColorSpace),yt=T.colorSpace===or?null:Ne.getPrimaries(T.colorSpace),Lt=T.colorSpace===or||Ht===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const ue=T.isCompressedTexture||T.image[0].isCompressedTexture,Nt=T.image[0]&&T.image[0].isDataTexture,Wt=[];for(let Et=0;Et<6;Et++)!ue&&!Nt?Wt[Et]=b(T.image[Et],!0,o.maxCubemapSize):Wt[Et]=Nt?T.image[Et].image:T.image[Et],Wt[Et]=xe(T,Wt[Et]);const Jt=Wt[0],te=c.convert(T.format,T.colorSpace),Vt=c.convert(T.type),Ft=N(T.internalFormat,te,Vt,T.colorSpace),Kt=T.isVideoTexture!==!0,he=_t.__version===void 0||Mt===!0,V=Dt.dataReady;let Pt=G(T,Jt);At(i.TEXTURE_CUBE_MAP,T);let ft;if(ue){Kt&&he&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Ft,Jt.width,Jt.height);for(let Et=0;Et<6;Et++){ft=Wt[Et].mipmaps;for(let Gt=0;Gt<ft.length;Gt++){const Bt=ft[Gt];T.format!==Ri?te!==null?Kt?V&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Gt,0,0,Bt.width,Bt.height,te,Bt.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Gt,Ft,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?V&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Gt,0,0,Bt.width,Bt.height,te,Vt,Bt.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Gt,Ft,Bt.width,Bt.height,0,te,Vt,Bt.data)}}}else{if(ft=T.mipmaps,Kt&&he){ft.length>0&&Pt++;const Et=Zt(Wt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Ft,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Nt){Kt?V&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Wt[Et].width,Wt[Et].height,te,Vt,Wt[Et].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ft,Wt[Et].width,Wt[Et].height,0,te,Vt,Wt[Et].data);for(let Gt=0;Gt<ft.length;Gt++){const oe=ft[Gt].image[Et].image;Kt?V&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Gt+1,0,0,oe.width,oe.height,te,Vt,oe.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Gt+1,Ft,oe.width,oe.height,0,te,Vt,oe.data)}}else{Kt?V&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,te,Vt,Wt[Et]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ft,te,Vt,Wt[Et]);for(let Gt=0;Gt<ft.length;Gt++){const Bt=ft[Gt];Kt?V&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Gt+1,0,0,te,Vt,Bt.image[Et]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Gt+1,Ft,te,Vt,Bt.image[Et])}}}S(T)&&x(i.TEXTURE_CUBE_MAP),_t.__version=Dt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function St(O,T,at,Mt,Dt,_t){const Ht=c.convert(at.format,at.colorSpace),yt=c.convert(at.type),Lt=N(at.internalFormat,Ht,yt,at.colorSpace),ue=r.get(T),Nt=r.get(at);if(Nt.__renderTarget=T,!ue.__hasExternalTextures){const Wt=Math.max(1,T.width>>_t),Jt=Math.max(1,T.height>>_t);Dt===i.TEXTURE_3D||Dt===i.TEXTURE_2D_ARRAY?n.texImage3D(Dt,_t,Lt,Wt,Jt,T.depth,0,Ht,yt,null):n.texImage2D(Dt,_t,Lt,Wt,Jt,0,Ht,yt,null)}n.bindFramebuffer(i.FRAMEBUFFER,O),It(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,Dt,Nt.__webglTexture,0,zt(T)):(Dt===i.TEXTURE_2D||Dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Mt,Dt,Nt.__webglTexture,_t),n.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(O,T,at){if(i.bindRenderbuffer(i.RENDERBUFFER,O),T.depthBuffer){const Mt=T.depthTexture,Dt=Mt&&Mt.isDepthTexture?Mt.type:null,_t=D(T.stencilBuffer,Dt),Ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=zt(T);It(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,_t,T.width,T.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,_t,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,_t,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,O)}else{const Mt=T.textures;for(let Dt=0;Dt<Mt.length;Dt++){const _t=Mt[Dt],Ht=c.convert(_t.format,_t.colorSpace),yt=c.convert(_t.type),Lt=N(_t.internalFormat,Ht,yt,_t.colorSpace),ue=zt(T);at&&It(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Lt,T.width,T.height):It(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Lt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(i.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=r.get(T.depthTexture);Mt.__renderTarget=T,(!Mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const Dt=Mt.__webglTexture,_t=zt(T);if(T.depthTexture.format===Ol)It(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Dt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Dt,0);else if(T.depthTexture.format===Pl)It(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Dt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Dt,0);else throw new Error("Unknown depthTexture format")}function pt(O){const T=r.get(O),at=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const Mt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Mt){const Dt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Mt.removeEventListener("dispose",Dt)};Mt.addEventListener("dispose",Dt),T.__depthDisposeCallback=Dt}T.__boundDepthTexture=Mt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Ut(T.__webglFramebuffer,O)}else if(at){T.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Mt]),T.__webglDepthbuffer[Mt]===void 0)T.__webglDepthbuffer[Mt]=i.createRenderbuffer(),ct(T.__webglDepthbuffer[Mt],O,!1);else{const Dt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer[Mt];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,_t)}}else if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ct(T.__webglDepthbuffer,O,!1);else{const Mt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,Dt)}n.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(O,T,at){const Mt=r.get(O);T!==void 0&&St(Mt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),at!==void 0&&pt(O)}function mt(O){const T=O.texture,at=r.get(O),Mt=r.get(T);O.addEventListener("dispose",B);const Dt=O.textures,_t=O.isWebGLCubeRenderTarget===!0,Ht=Dt.length>1;if(Ht||(Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture()),Mt.__version=T.version,u.memory.textures++),_t){at.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[yt]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)at.__webglFramebuffer[yt][Lt]=i.createFramebuffer()}else at.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let yt=0;yt<T.mipmaps.length;yt++)at.__webglFramebuffer[yt]=i.createFramebuffer()}else at.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let yt=0,Lt=Dt.length;yt<Lt;yt++){const ue=r.get(Dt[yt]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),u.memory.textures++)}if(O.samples>0&&It(O)===!1){at.__webglMultisampledFramebuffer=i.createFramebuffer(),at.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let yt=0;yt<Dt.length;yt++){const Lt=Dt[yt];at.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,at.__webglColorRenderbuffer[yt]);const ue=c.convert(Lt.format,Lt.colorSpace),Nt=c.convert(Lt.type),Wt=N(Lt.internalFormat,ue,Nt,Lt.colorSpace,O.isXRRenderTarget===!0),Jt=zt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,Wt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,at.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(at.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(at.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){n.bindTexture(i.TEXTURE_CUBE_MAP,Mt.__webglTexture),At(i.TEXTURE_CUBE_MAP,T);for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)St(at.__webglFramebuffer[yt][Lt],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt);else St(at.__webglFramebuffer[yt],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);S(T)&&x(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ht){for(let yt=0,Lt=Dt.length;yt<Lt;yt++){const ue=Dt[yt],Nt=r.get(ue);n.bindTexture(i.TEXTURE_2D,Nt.__webglTexture),At(i.TEXTURE_2D,ue),St(at.__webglFramebuffer,O,ue,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),S(ue)&&x(i.TEXTURE_2D)}n.unbindTexture()}else{let yt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(yt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(yt,Mt.__webglTexture),At(yt,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)St(at.__webglFramebuffer[Lt],O,T,i.COLOR_ATTACHMENT0,yt,Lt);else St(at.__webglFramebuffer,O,T,i.COLOR_ATTACHMENT0,yt,0);S(T)&&x(yt),n.unbindTexture()}O.depthBuffer&&pt(O)}function j(O){const T=O.textures;for(let at=0,Mt=T.length;at<Mt;at++){const Dt=T[at];if(S(Dt)){const _t=P(O),Ht=r.get(Dt).__webglTexture;n.bindTexture(_t,Ht),x(_t),n.unbindTexture()}}}const wt=[],L=[];function de(O){if(O.samples>0){if(It(O)===!1){const T=O.textures,at=O.width,Mt=O.height;let Dt=i.COLOR_BUFFER_BIT;const _t=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=r.get(O),yt=T.length>1;if(yt)for(let Lt=0;Lt<T.length;Lt++)n.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Dt|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Dt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Lt]);const ue=r.get(T[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,at,Mt,0,0,at,Mt,Dt,i.NEAREST),p===!0&&(wt.length=0,L.length=0,wt.push(i.COLOR_ATTACHMENT0+Lt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(wt.push(_t),L.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Lt=0;Lt<T.length;Lt++){n.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Lt]);const ue=r.get(T[Lt]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ue,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const T=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function zt(O){return Math.min(o.maxSamples,O.samples)}function It(O){const T=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(O){const T=u.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function xe(O,T){const at=O.colorSpace,Mt=O.format,Dt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||at!==co&&at!==or&&(Ne.getTransfer(at)===He?(Mt!==Ri||Dt!==Ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),T}function Zt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=Y,this.setTexture2D=dt,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Rt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=It}function n2(i,t){function n(r,o=or){let c;const u=Ne.getTransfer(o);if(r===Ea)return i.UNSIGNED_BYTE;if(r===Sm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Mm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===xy)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===_y)return i.BYTE;if(r===vy)return i.SHORT;if(r===Nl)return i.UNSIGNED_SHORT;if(r===ym)return i.INT;if(r===Wr)return i.UNSIGNED_INT;if(r===va)return i.FLOAT;if(r===Il)return i.HALF_FLOAT;if(r===yy)return i.ALPHA;if(r===Sy)return i.RGB;if(r===Ri)return i.RGBA;if(r===My)return i.LUMINANCE;if(r===Ey)return i.LUMINANCE_ALPHA;if(r===Ol)return i.DEPTH_COMPONENT;if(r===Pl)return i.DEPTH_STENCIL;if(r===by)return i.RED;if(r===Em)return i.RED_INTEGER;if(r===Ty)return i.RG;if(r===bm)return i.RG_INTEGER;if(r===Tm)return i.RGBA_INTEGER;if(r===Lu||r===Ou||r===Pu||r===zu)if(u===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Lu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Lu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Up||r===Np||r===Lp||r===Op)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Up)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Np)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Op)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pp||r===zp||r===Fp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Pp||r===zp)return u===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Fp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bp||r===Ip||r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===Yp||r===qp||r===jp||r===Zp||r===Kp||r===Qp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Bp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ip)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fu||r===$p||r===Jp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Fu)return u===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$p)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ay||r===tm||r===em||r===nm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Fu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===tm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===em)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ll?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:n}}const i2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a2=`
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

}`;class r2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const o=new Gn,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new hr({vertexShader:i2,fragmentShader:a2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new mf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s2 extends Qr{constructor(t,n){super();const r=this;let o=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,v=null,_=null,y=null,E=null;const b=new r2,S=n.getContextAttributes();let x=null,P=null;const N=[],D=[],G=new fe;let z=null;const B=new ri;B.viewport=new on;const X=new ri;X.viewport=new on;const U=[B,X],R=new AT;let I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let xt=N[W];return xt===void 0&&(xt=new Zd,N[W]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(W){let xt=N[W];return xt===void 0&&(xt=new Zd,N[W]=xt),xt.getGripSpace()},this.getHand=function(W){let xt=N[W];return xt===void 0&&(xt=new Zd,N[W]=xt),xt.getHandSpace()};function et(W){const xt=D.indexOf(W.inputSource);if(xt===-1)return;const St=N[xt];St!==void 0&&(St.update(W.inputSource,W.frame,d||u),St.dispatchEvent({type:W.type,data:W.inputSource}))}function gt(){o.removeEventListener("select",et),o.removeEventListener("selectstart",et),o.removeEventListener("selectend",et),o.removeEventListener("squeeze",et),o.removeEventListener("squeezestart",et),o.removeEventListener("squeezeend",et),o.removeEventListener("end",gt),o.removeEventListener("inputsourceschange",dt);for(let W=0;W<N.length;W++){const xt=D[W];xt!==null&&(D[W]=null,N[W].disconnect(xt))}I=null,Y=null,b.reset(),t.setRenderTarget(x),y=null,_=null,v=null,o=null,P=null,Ct.stop(),r.isPresenting=!1,t.setPixelRatio(z),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(W){d=W},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",et),o.addEventListener("selectstart",et),o.addEventListener("selectend",et),o.addEventListener("squeeze",et),o.addEventListener("squeezestart",et),o.addEventListener("squeezeend",et),o.addEventListener("end",gt),o.addEventListener("inputsourceschange",dt),S.xrCompatible!==!0&&await n.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,ct=null,Ut=null;S.depth&&(Ut=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=S.stencil?Pl:Ol,ct=S.stencil?Ll:Wr);const pt={colorFormat:n.RGBA8,depthFormat:Ut,scaleFactor:c};v=new XRWebGLBinding(o,n),_=v.createProjectionLayer(pt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),P=new Yr(_.textureWidth,_.textureHeight,{format:Ri,type:Ea,depthTexture:new Gy(_.textureWidth,_.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,St),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Yr(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:Ea,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(h),Ct.setContext(o),Ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function dt(W){for(let xt=0;xt<W.removed.length;xt++){const St=W.removed[xt],ct=D.indexOf(St);ct>=0&&(D[ct]=null,N[ct].disconnect(St))}for(let xt=0;xt<W.added.length;xt++){const St=W.added[xt];let ct=D.indexOf(St);if(ct===-1){for(let pt=0;pt<N.length;pt++)if(pt>=D.length){D.push(St),ct=pt;break}else if(D[pt]===null){D[pt]=St,ct=pt;break}if(ct===-1)break}const Ut=N[ct];Ut&&Ut.connect(St)}}const F=new J,Z=new J;function q(W,xt,St){F.setFromMatrixPosition(xt.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const ct=F.distanceTo(Z),Ut=xt.projectionMatrix.elements,pt=St.projectionMatrix.elements,Rt=Ut[14]/(Ut[10]-1),mt=Ut[14]/(Ut[10]+1),j=(Ut[9]+1)/Ut[5],wt=(Ut[9]-1)/Ut[5],L=(Ut[8]-1)/Ut[0],de=(pt[8]+1)/pt[0],zt=Rt*L,It=Rt*de,kt=ct/(-L+de),xe=kt*-L;if(xt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(xe),W.translateZ(kt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ut[10]===-1)W.projectionMatrix.copy(xt.projectionMatrix),W.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const Zt=Rt+kt,O=mt+kt,T=zt-xe,at=It+(ct-xe),Mt=j*mt/O*Zt,Dt=wt*mt/O*Zt;W.projectionMatrix.makePerspective(T,at,Mt,Dt,Zt,O),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ht(W,xt){xt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(xt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let xt=W.near,St=W.far;b.texture!==null&&(b.depthNear>0&&(xt=b.depthNear),b.depthFar>0&&(St=b.depthFar)),R.near=X.near=B.near=xt,R.far=X.far=B.far=St,(I!==R.near||Y!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,Y=R.far),B.layers.mask=W.layers.mask|2,X.layers.mask=W.layers.mask|4,R.layers.mask=B.layers.mask|X.layers.mask;const ct=W.parent,Ut=R.cameras;ht(R,ct);for(let pt=0;pt<Ut.length;pt++)ht(Ut[pt],ct);Ut.length===2?q(R,B,X):R.projectionMatrix.copy(B.projectionMatrix),C(W,R,ct)};function C(W,xt,St){St===null?W.matrix.copy(xt.matrixWorld):(W.matrix.copy(St.matrixWorld),W.matrix.invert(),W.matrix.multiply(xt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(xt.projectionMatrix),W.projectionMatrixInverse.copy(xt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=am*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(W){p=W,_!==null&&(_.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let nt=null;function At(W,xt){if(g=xt.getViewerPose(d||u),E=xt,g!==null){const St=g.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let ct=!1;St.length!==R.cameras.length&&(R.cameras.length=0,ct=!0);for(let Rt=0;Rt<St.length;Rt++){const mt=St[Rt];let j=null;if(y!==null)j=y.getViewport(mt);else{const L=v.getViewSubImage(_,mt);j=L.viewport,Rt===0&&(t.setRenderTargetTextures(P,L.colorTexture,L.depthStencilTexture),t.setRenderTarget(P))}let wt=U[Rt];wt===void 0&&(wt=new ri,wt.layers.enable(Rt),wt.viewport=new on,U[Rt]=wt),wt.matrix.fromArray(mt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(mt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(j.x,j.y,j.width,j.height),Rt===0&&(R.matrix.copy(wt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ct===!0&&R.cameras.push(wt)}const Ut=o.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Rt=v.getDepthInformation(St[0]);Rt&&Rt.isValid&&Rt.texture&&b.init(t,Rt,o.renderState)}}for(let St=0;St<N.length;St++){const ct=D[St],Ut=N[St];ct!==null&&Ut!==void 0&&Ut.update(ct,xt,d||u)}nt&&nt(W,xt),xt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xt}),E=null}const Ct=new ky;Ct.setAnimationLoop(At),this.setAnimationLoop=function(W){nt=W},this.dispose=function(){}}}const Fr=new ba,o2=new $e;function l2(i,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Ly(i)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,P,N,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),v(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,D)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),b(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?p(S,x,P,N):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Zn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Zn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const P=t.get(x),N=P.envMap,D=P.envMapRotation;N&&(S.envMap.value=N,Fr.copy(D),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),S.envMapRotation.value.setFromMatrix4(o2.makeRotationFromEuler(Fr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,P,N){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*P,S.scale.value=N*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,P){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const P=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function c2(i,t,n,r){let o={},c={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,N){const D=N.program;r.uniformBlockBinding(P,D)}function d(P,N){let D=o[P.id];D===void 0&&(E(P),D=g(P),o[P.id]=D,P.addEventListener("dispose",S));const G=N.program;r.updateUBOMapping(P,G);const z=t.render.frame;c[P.id]!==z&&(_(P),c[P.id]=z)}function g(P){const N=v();P.__bindingPointIndex=N;const D=i.createBuffer(),G=P.__size,z=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,G,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,D),D}function v(){for(let P=0;P<h;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const N=o[P.id],D=P.uniforms,G=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let z=0,B=D.length;z<B;z++){const X=Array.isArray(D[z])?D[z]:[D[z]];for(let U=0,R=X.length;U<R;U++){const I=X[U];if(y(I,z,U,G)===!0){const Y=I.__offset,et=Array.isArray(I.value)?I.value:[I.value];let gt=0;for(let dt=0;dt<et.length;dt++){const F=et[dt],Z=b(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,Y+gt,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):(F.toArray(I.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(P,N,D,G){const z=P.value,B=N+"_"+D;if(G[B]===void 0)return typeof z=="number"||typeof z=="boolean"?G[B]=z:G[B]=z.clone(),!0;{const X=G[B];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return G[B]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function E(P){const N=P.uniforms;let D=0;const G=16;for(let B=0,X=N.length;B<X;B++){const U=Array.isArray(N[B])?N[B]:[N[B]];for(let R=0,I=U.length;R<I;R++){const Y=U[R],et=Array.isArray(Y.value)?Y.value:[Y.value];for(let gt=0,dt=et.length;gt<dt;gt++){const F=et[gt],Z=b(F),q=D%G,ht=q%Z.boundary,C=q+ht;D+=ht,C!==0&&G-C<Z.storage&&(D+=G-C),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=Z.storage}}}const z=D%G;return z>0&&(D+=G-z),P.__size=D,P.__cache={},this}function b(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),N}function S(P){const N=P.target;N.removeEventListener("dispose",S);const D=u.indexOf(N.__bindingPointIndex);u.splice(D,1),i.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function x(){for(const P in o)i.deleteBuffer(o[P]);u=[],o={},c={}}return{bind:p,update:d,dispose:x}}class jy{constructor(t={}){const{canvas:n=Yb(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,x=null;const P=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=gi;let z=0,B=0,X=null,U=-1,R=null;const I=new on,Y=new on;let et=null;const gt=new be(0);let dt=0,F=n.width,Z=n.height,q=1,ht=null,C=null;const nt=new on(0,0,F,Z),At=new on(0,0,F,Z);let Ct=!1;const W=new Iy;let xt=!1,St=!1;const ct=new $e,Ut=new $e,pt=new J,Rt=new on,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function wt(){return X===null?q:1}let L=r;function de(w,Q){return n.getContext(w,Q)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xm}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",Gt,!1),n.addEventListener("webglcontextcreationerror",Bt,!1),L===null){const Q="webgl2";if(L=de(Q,w),L===null)throw de(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let zt,It,kt,xe,Zt,O,T,at,Mt,Dt,_t,Ht,yt,Lt,ue,Nt,Wt,Jt,te,Vt,Ft,Kt,he,V;function Pt(){zt=new yw(L),zt.init(),Kt=new n2(L,zt),It=new dw(L,zt,t,Kt),kt=new t2(L,zt),It.reverseDepthBuffer&&_&&kt.buffers.depth.setReversed(!0),xe=new Ew(L),Zt=new GR,O=new e2(L,zt,kt,Zt,It,Kt,xe),T=new mw(D),at=new xw(D),Mt=new CT(L),he=new fw(L,Mt),Dt=new Sw(L,Mt,xe,he),_t=new Tw(L,Dt,Mt,xe),te=new bw(L,It,O),Nt=new pw(Zt),Ht=new HR(D,T,at,zt,It,he,Nt),yt=new l2(D,Zt),Lt=new kR,ue=new ZR(zt),Jt=new uw(D,T,at,kt,_t,y,p),Wt=new $R(D,_t,It),V=new c2(L,xe,It,kt),Vt=new hw(L,zt,xe),Ft=new Mw(L,zt,xe),xe.programs=Ht.programs,D.capabilities=It,D.extensions=zt,D.properties=Zt,D.renderLists=Lt,D.shadowMap=Wt,D.state=kt,D.info=xe}Pt();const ft=new s2(D,L);this.xr=ft,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(F,Z,!1))},this.getSize=function(w){return w.set(F,Z)},this.setSize=function(w,Q,lt=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,Z=Q,n.width=Math.floor(w*q),n.height=Math.floor(Q*q),lt===!0&&(n.style.width=w+"px",n.style.height=Q+"px"),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(F*q,Z*q).floor()},this.setDrawingBufferSize=function(w,Q,lt){F=w,Z=Q,q=lt,n.width=Math.floor(w*lt),n.height=Math.floor(Q*lt),this.setViewport(0,0,w,Q)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,Q,lt,ut){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,Q,lt,ut),kt.viewport(I.copy(nt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(At)},this.setScissor=function(w,Q,lt,ut){w.isVector4?At.set(w.x,w.y,w.z,w.w):At.set(w,Q,lt,ut),kt.scissor(Y.copy(At).multiplyScalar(q).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(w){kt.setScissorTest(Ct=w)},this.setOpaqueSort=function(w){ht=w},this.setTransparentSort=function(w){C=w},this.getClearColor=function(w){return w.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,lt=!0){let ut=0;if(w){let $=!1;if(X!==null){const Ot=X.texture.format;$=Ot===Tm||Ot===bm||Ot===Em}if($){const Ot=X.texture.type,Xt=Ot===Ea||Ot===Wr||Ot===Nl||Ot===Ll||Ot===Sm||Ot===Mm,Yt=Jt.getClearColor(),Qt=Jt.getClearAlpha(),le=Yt.r,ie=Yt.g,ne=Yt.b;Xt?(E[0]=le,E[1]=ie,E[2]=ne,E[3]=Qt,L.clearBufferuiv(L.COLOR,0,E)):(b[0]=le,b[1]=ie,b[2]=ne,b[3]=Qt,L.clearBufferiv(L.COLOR,0,b))}else ut|=L.COLOR_BUFFER_BIT}Q&&(ut|=L.DEPTH_BUFFER_BIT),lt&&(ut|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Gt,!1),n.removeEventListener("webglcontextcreationerror",Bt,!1),Jt.dispose(),Lt.dispose(),ue.dispose(),Zt.dispose(),T.dispose(),at.dispose(),_t.dispose(),he.dispose(),V.dispose(),Ht.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",je),ft.removeEventListener("sessionend",an),Un.stop()};function Et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const w=xe.autoReset,Q=Wt.enabled,lt=Wt.autoUpdate,ut=Wt.needsUpdate,$=Wt.type;Pt(),xe.autoReset=w,Wt.enabled=Q,Wt.autoUpdate=lt,Wt.needsUpdate=ut,Wt.type=$}function Bt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oe(w){const Q=w.target;Q.removeEventListener("dispose",oe),ke(Q)}function ke(w){Je(w),Zt.remove(w)}function Je(w){const Q=Zt.get(w).programs;Q!==void 0&&(Q.forEach(function(lt){Ht.releaseProgram(lt)}),w.isShaderMaterial&&Ht.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,lt,ut,$,Ot){Q===null&&(Q=mt);const Xt=$.isMesh&&$.matrixWorld.determinant()<0,Yt=mr(w,Q,lt,ut,$);kt.setMaterial(ut,Xt);let Qt=lt.index,le=1;if(ut.wireframe===!0){if(Qt=Dt.getWireframeAttribute(lt),Qt===void 0)return;le=2}const ie=lt.drawRange,ne=lt.attributes.position;let ye=ie.start*le,De=(ie.start+ie.count)*le;Ot!==null&&(ye=Math.max(ye,Ot.start*le),De=Math.min(De,(Ot.start+Ot.count)*le)),Qt!==null?(ye=Math.max(ye,0),De=Math.min(De,Qt.count)):ne!=null&&(ye=Math.max(ye,0),De=Math.min(De,ne.count));const Ke=De-ye;if(Ke<0||Ke===1/0)return;he.setup($,ut,Yt,lt,Qt);let Te,Ae=Vt;if(Qt!==null&&(Te=Mt.get(Qt),Ae=Ft,Ae.setIndex(Te)),$.isMesh)ut.wireframe===!0?(kt.setLineWidth(ut.wireframeLinewidth*wt()),Ae.setMode(L.LINES)):Ae.setMode(L.TRIANGLES);else if($.isLine){let ae=ut.linewidth;ae===void 0&&(ae=1),kt.setLineWidth(ae*wt()),$.isLineSegments?Ae.setMode(L.LINES):$.isLineLoop?Ae.setMode(L.LINE_LOOP):Ae.setMode(L.LINE_STRIP)}else $.isPoints?Ae.setMode(L.POINTS):$.isSprite&&Ae.setMode(L.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Iu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Ae.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ae=$._multiDrawStarts,tn=$._multiDrawCounts,Ce=$._multiDrawCount,Nn=Qt?Mt.get(Qt).bytesPerElement:1,Ua=Zt.get(ut).currentProgram.getUniforms();for(let Ye=0;Ye<Ce;Ye++)Ua.setValue(L,"_gl_DrawID",Ye),Ae.render(ae[Ye]/Nn,tn[Ye])}else if($.isInstancedMesh)Ae.renderInstances(ye,Ke,$.count);else if(lt.isInstancedBufferGeometry){const ae=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,tn=Math.min(lt.instanceCount,ae);Ae.renderInstances(ye,Ke,tn)}else Ae.render(ye,Ke)};function we(w,Q,lt){w.transparent===!0&&w.side===_a&&w.forceSinglePass===!1?(w.side=Zn,w.needsUpdate=!0,Ca(w,Q,lt),w.side=fr,w.needsUpdate=!0,Ca(w,Q,lt),w.side=_a):Ca(w,Q,lt)}this.compile=function(w,Q,lt=null){lt===null&&(lt=w),x=ue.get(lt),x.init(Q),N.push(x),lt.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),w!==lt&&w.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const ut=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ot=$.material;if(Ot)if(Array.isArray(Ot))for(let Xt=0;Xt<Ot.length;Xt++){const Yt=Ot[Xt];we(Yt,lt,$),ut.add(Yt)}else we(Ot,lt,$),ut.add(Ot)}),x=N.pop(),ut},this.compileAsync=function(w,Q,lt=null){const ut=this.compile(w,Q,lt);return new Promise($=>{function Ot(){if(ut.forEach(function(Xt){Zt.get(Xt).currentProgram.isReady()&&ut.delete(Xt)}),ut.size===0){$(w);return}setTimeout(Ot,10)}zt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Dn=null;function ln(w){Dn&&Dn(w)}function je(){Un.stop()}function an(){Un.start()}const Un=new ky;Un.setAnimationLoop(ln),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(w){Dn=w,ft.setAnimationLoop(w),w===null?Un.stop():Un.start()},ft.addEventListener("sessionstart",je),ft.addEventListener("sessionend",an),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Q),Q=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,Q,X),x=ue.get(w,N.length),x.init(Q),N.push(x),Ut.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),W.setFromProjectionMatrix(Ut),St=this.localClippingEnabled,xt=Nt.init(this.clippingPlanes,St),S=Lt.get(w,P.length),S.init(),P.push(S),ft.enabled===!0&&ft.isPresenting===!0){const Ot=D.xr.getDepthSensingMesh();Ot!==null&&Xi(Ot,Q,-1/0,D.sortObjects)}Xi(w,Q,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(ht,C),j=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,j&&Jt.addToRenderList(S,w),this.info.render.frame++,xt===!0&&Nt.beginShadows();const lt=x.state.shadowsArray;Wt.render(lt,w,Q),xt===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=S.opaque,$=S.transmissive;if(x.setupLights(),Q.isArrayCamera){const Ot=Q.cameras;if($.length>0)for(let Xt=0,Yt=Ot.length;Xt<Yt;Xt++){const Qt=Ot[Xt];dr(ut,$,w,Qt)}j&&Jt.render(w);for(let Xt=0,Yt=Ot.length;Xt<Yt;Xt++){const Qt=Ot[Xt];ts(S,w,Qt,Qt.viewport)}}else $.length>0&&dr(ut,$,w,Q),j&&Jt.render(w),ts(S,w,Q);X!==null&&B===0&&(O.updateMultisampleRenderTarget(X),O.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(D,w,Q),he.resetDefaultState(),U=-1,R=null,N.pop(),N.length>0?(x=N[N.length-1],xt===!0&&Nt.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Xi(w,Q,lt,ut){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)lt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){ut&&Rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ut);const Xt=_t.update(w),Yt=w.material;Yt.visible&&S.push(w,Xt,Yt,lt,Rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){const Xt=_t.update(w),Yt=w.material;if(ut&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Rt.copy(w.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Rt.copy(Xt.boundingSphere.center)),Rt.applyMatrix4(w.matrixWorld).applyMatrix4(Ut)),Array.isArray(Yt)){const Qt=Xt.groups;for(let le=0,ie=Qt.length;le<ie;le++){const ne=Qt[le],ye=Yt[ne.materialIndex];ye&&ye.visible&&S.push(w,Xt,ye,lt,Rt.z,ne)}}else Yt.visible&&S.push(w,Xt,Yt,lt,Rt.z,null)}}const Ot=w.children;for(let Xt=0,Yt=Ot.length;Xt<Yt;Xt++)Xi(Ot[Xt],Q,lt,ut)}function ts(w,Q,lt,ut){const $=w.opaque,Ot=w.transmissive,Xt=w.transparent;x.setupLightsView(lt),xt===!0&&Nt.setGlobalState(D.clippingPlanes,lt),ut&&kt.viewport(I.copy(ut)),$.length>0&&pr($,Q,lt),Ot.length>0&&pr(Ot,Q,lt),Xt.length>0&&pr(Xt,Q,lt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function dr(w,Q,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ut.id]===void 0&&(x.state.transmissionRenderTarget[ut.id]=new Yr(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Il:Ea,minFilter:Vr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Ot=x.state.transmissionRenderTarget[ut.id],Xt=ut.viewport||I;Ot.setSize(Xt.z*D.transmissionResolutionScale,Xt.w*D.transmissionResolutionScale);const Yt=D.getRenderTarget();D.setRenderTarget(Ot),D.getClearColor(gt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),j&&Jt.render(lt);const Qt=D.toneMapping;D.toneMapping=cr;const le=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),x.setupLightsView(ut),xt===!0&&Nt.setGlobalState(D.clippingPlanes,ut),pr(w,lt,ut),O.updateMultisampleRenderTarget(Ot),O.updateRenderTargetMipmap(Ot),zt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let ne=0,ye=Q.length;ne<ye;ne++){const De=Q[ne],Ke=De.object,Te=De.geometry,Ae=De.material,ae=De.group;if(Ae.side===_a&&Ke.layers.test(ut.layers)){const tn=Ae.side;Ae.side=Zn,Ae.needsUpdate=!0,Ra(Ke,lt,ut,Te,Ae,ae),Ae.side=tn,Ae.needsUpdate=!0,ie=!0}}ie===!0&&(O.updateMultisampleRenderTarget(Ot),O.updateRenderTargetMipmap(Ot))}D.setRenderTarget(Yt),D.setClearColor(gt,dt),le!==void 0&&(ut.viewport=le),D.toneMapping=Qt}function pr(w,Q,lt){const ut=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Ot=w.length;$<Ot;$++){const Xt=w[$],Yt=Xt.object,Qt=Xt.geometry,le=Xt.group;let ie=Xt.material;ie.allowOverride===!0&&ut!==null&&(ie=ut),Yt.layers.test(lt.layers)&&Ra(Yt,Q,lt,Qt,ie,le)}}function Ra(w,Q,lt,ut,$,Ot){w.onBeforeRender(D,Q,lt,ut,$,Ot),w.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(D,Q,lt,ut,w,Ot),$.transparent===!0&&$.side===_a&&$.forceSinglePass===!1?($.side=Zn,$.needsUpdate=!0,D.renderBufferDirect(lt,Q,ut,$,w,Ot),$.side=fr,$.needsUpdate=!0,D.renderBufferDirect(lt,Q,ut,$,w,Ot),$.side=_a):D.renderBufferDirect(lt,Q,ut,$,w,Ot),w.onAfterRender(D,Q,lt,ut,$,Ot)}function Ca(w,Q,lt){Q.isScene!==!0&&(Q=mt);const ut=Zt.get(w),$=x.state.lights,Ot=x.state.shadowsArray,Xt=$.state.version,Yt=Ht.getParameters(w,$.state,Ot,Q,lt),Qt=Ht.getProgramCacheKey(Yt);let le=ut.programs;ut.environment=w.isMeshStandardMaterial?Q.environment:null,ut.fog=Q.fog,ut.envMap=(w.isMeshStandardMaterial?at:T).get(w.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,le===void 0&&(w.addEventListener("dispose",oe),le=new Map,ut.programs=le);let ie=le.get(Qt);if(ie!==void 0){if(ut.currentProgram===ie&&ut.lightsStateVersion===Xt)return Yi(w,Yt),ie}else Yt.uniforms=Ht.getUniforms(w),w.onBeforeCompile(Yt,D),ie=Ht.acquireProgram(Yt,Qt),le.set(Qt,ie),ut.uniforms=Yt.uniforms;const ne=ut.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ne.clippingPlanes=Nt.uniform),Yi(w,Yt),ut.needsLights=cn(w),ut.lightsStateVersion=Xt,ut.needsLights&&(ne.ambientLightColor.value=$.state.ambient,ne.lightProbe.value=$.state.probe,ne.directionalLights.value=$.state.directional,ne.directionalLightShadows.value=$.state.directionalShadow,ne.spotLights.value=$.state.spot,ne.spotLightShadows.value=$.state.spotShadow,ne.rectAreaLights.value=$.state.rectArea,ne.ltc_1.value=$.state.rectAreaLTC1,ne.ltc_2.value=$.state.rectAreaLTC2,ne.pointLights.value=$.state.point,ne.pointLightShadows.value=$.state.pointShadow,ne.hemisphereLights.value=$.state.hemi,ne.directionalShadowMap.value=$.state.directionalShadowMap,ne.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ne.spotShadowMap.value=$.state.spotShadowMap,ne.spotLightMatrix.value=$.state.spotLightMatrix,ne.spotLightMap.value=$.state.spotLightMap,ne.pointShadowMap.value=$.state.pointShadowMap,ne.pointShadowMatrix.value=$.state.pointShadowMatrix),ut.currentProgram=ie,ut.uniformsList=null,ie}function Wi(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=Hu.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function Yi(w,Q){const lt=Zt.get(w);lt.outputColorSpace=Q.outputColorSpace,lt.batching=Q.batching,lt.batchingColor=Q.batchingColor,lt.instancing=Q.instancing,lt.instancingColor=Q.instancingColor,lt.instancingMorph=Q.instancingMorph,lt.skinning=Q.skinning,lt.morphTargets=Q.morphTargets,lt.morphNormals=Q.morphNormals,lt.morphColors=Q.morphColors,lt.morphTargetsCount=Q.morphTargetsCount,lt.numClippingPlanes=Q.numClippingPlanes,lt.numIntersection=Q.numClipIntersection,lt.vertexAlphas=Q.vertexAlphas,lt.vertexTangents=Q.vertexTangents,lt.toneMapping=Q.toneMapping}function mr(w,Q,lt,ut,$){Q.isScene!==!0&&(Q=mt),O.resetTextureUnits();const Ot=Q.fog,Xt=ut.isMeshStandardMaterial?Q.environment:null,Yt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:co,Qt=(ut.isMeshStandardMaterial?at:T).get(ut.envMap||Xt),le=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ie=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ne=!!lt.morphAttributes.position,ye=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let Ke=cr;ut.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ke=D.toneMapping);const Te=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ae=Te!==void 0?Te.length:0,ae=Zt.get(ut),tn=x.state.lights;if(xt===!0&&(St===!0||w!==R)){const yn=w===R&&ut.id===U;Nt.setState(ut,w,yn)}let Ce=!1;ut.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==tn.state.version||ae.outputColorSpace!==Yt||$.isBatchedMesh&&ae.batching===!1||!$.isBatchedMesh&&ae.batching===!0||$.isBatchedMesh&&ae.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ae.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ae.instancing===!1||!$.isInstancedMesh&&ae.instancing===!0||$.isSkinnedMesh&&ae.skinning===!1||!$.isSkinnedMesh&&ae.skinning===!0||$.isInstancedMesh&&ae.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ae.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ae.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ae.instancingMorph===!1&&$.morphTexture!==null||ae.envMap!==Qt||ut.fog===!0&&ae.fog!==Ot||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Nt.numPlanes||ae.numIntersection!==Nt.numIntersection)||ae.vertexAlphas!==le||ae.vertexTangents!==ie||ae.morphTargets!==ne||ae.morphNormals!==ye||ae.morphColors!==De||ae.toneMapping!==Ke||ae.morphTargetsCount!==Ae)&&(Ce=!0):(Ce=!0,ae.__version=ut.version);let Nn=ae.currentProgram;Ce===!0&&(Nn=Ca(ut,Q,$));let Ua=!1,Ye=!1,ji=!1;const Xe=Nn.getUniforms(),Ln=ae.uniforms;if(kt.useProgram(Nn.program)&&(Ua=!0,Ye=!0,ji=!0),ut.id!==U&&(U=ut.id,Ye=!0),Ua||R!==w){kt.buffers.depth.getReversed()?(ct.copy(w.projectionMatrix),jb(ct),Zb(ct),Xe.setValue(L,"projectionMatrix",ct)):Xe.setValue(L,"projectionMatrix",w.projectionMatrix),Xe.setValue(L,"viewMatrix",w.matrixWorldInverse);const An=Xe.map.cameraPosition;An!==void 0&&An.setValue(L,pt.setFromMatrixPosition(w.matrixWorld)),It.logarithmicDepthBuffer&&Xe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Xe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Ye=!0,ji=!0)}if($.isSkinnedMesh){Xe.setOptional(L,$,"bindMatrix"),Xe.setOptional(L,$,"bindMatrixInverse");const yn=$.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Xe.setValue(L,"boneTexture",yn.boneTexture,O))}$.isBatchedMesh&&(Xe.setOptional(L,$,"batchingTexture"),Xe.setValue(L,"batchingTexture",$._matricesTexture,O),Xe.setOptional(L,$,"batchingIdTexture"),Xe.setValue(L,"batchingIdTexture",$._indirectTexture,O),Xe.setOptional(L,$,"batchingColorTexture"),$._colorsTexture!==null&&Xe.setValue(L,"batchingColorTexture",$._colorsTexture,O));const dn=lt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&te.update($,lt,Nn),(Ye||ae.receiveShadow!==$.receiveShadow)&&(ae.receiveShadow=$.receiveShadow,Xe.setValue(L,"receiveShadow",$.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Ln.envMap.value=Qt,Ln.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&Q.environment!==null&&(Ln.envMapIntensity.value=Q.environmentIntensity),Ye&&(Xe.setValue(L,"toneMappingExposure",D.toneMappingExposure),ae.needsLights&&Da(Ln,ji),Ot&&ut.fog===!0&&yt.refreshFogUniforms(Ln,Ot),yt.refreshMaterialUniforms(Ln,ut,q,Z,x.state.transmissionRenderTarget[w.id]),Hu.upload(L,Wi(ae),Ln,O)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Hu.upload(L,Wi(ae),Ln,O),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Xe.setValue(L,"center",$.center),Xe.setValue(L,"modelViewMatrix",$.modelViewMatrix),Xe.setValue(L,"normalMatrix",$.normalMatrix),Xe.setValue(L,"modelMatrix",$.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const yn=ut.uniformsGroups;for(let An=0,Li=yn.length;An<Li;An++){const Zi=yn[An];V.update(Zi,Nn),V.bind(Zi,Nn)}}return Nn}function Da(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function cn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,Q,lt){const ut=Zt.get(w);ut.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Zt.get(w.texture).__webglTexture=Q,Zt.get(w.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const lt=Zt.get(w);lt.__webglFramebuffer=Q,lt.__useDefaultFramebuffer=Q===void 0};const Yl=L.createFramebuffer();this.setRenderTarget=function(w,Q=0,lt=0){X=w,z=Q,B=lt;let ut=!0,$=null,Ot=!1,Xt=!1;if(w){const Qt=Zt.get(w);if(Qt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(L.FRAMEBUFFER,null),ut=!1;else if(Qt.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(Qt.__hasExternalTextures)O.rebindTextures(w,Zt.get(w.texture).__webglTexture,Zt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ne=w.depthTexture;if(Qt.__boundDepthTexture!==ne){if(ne!==null&&Zt.has(ne)&&(w.width!==ne.image.width||w.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}const le=w.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Xt=!0);const ie=Zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ie[Q])?$=ie[Q][lt]:$=ie[Q],Ot=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?$=Zt.get(w).__webglMultisampledFramebuffer:Array.isArray(ie)?$=ie[lt]:$=ie,I.copy(w.viewport),Y.copy(w.scissor),et=w.scissorTest}else I.copy(nt).multiplyScalar(q).floor(),Y.copy(At).multiplyScalar(q).floor(),et=Ct;if(lt!==0&&($=Yl),kt.bindFramebuffer(L.FRAMEBUFFER,$)&&ut&&kt.drawBuffers(w,$),kt.viewport(I),kt.scissor(Y),kt.setScissorTest(et),Ot){const Qt=Zt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Qt.__webglTexture,lt)}else if(Xt){const Qt=Zt.get(w.texture),le=Q;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qt.__webglTexture,lt,le)}else if(w!==null&&lt!==0){const Qt=Zt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qt.__webglTexture,lt)}U=-1},this.readRenderTargetPixels=function(w,Q,lt,ut,$,Ot,Xt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=Zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt){kt.bindFramebuffer(L.FRAMEBUFFER,Yt);try{const Qt=w.texture,le=Qt.format,ie=Qt.type;if(!It.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-ut&&lt>=0&&lt<=w.height-$&&L.readPixels(Q,lt,ut,$,Kt.convert(le),Kt.convert(ie),Ot)}finally{const Qt=X!==null?Zt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(L.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(w,Q,lt,ut,$,Ot,Xt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=Zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt)if(Q>=0&&Q<=w.width-ut&&lt>=0&&lt<=w.height-$){kt.bindFramebuffer(L.FRAMEBUFFER,Yt);const Qt=w.texture,le=Qt.format,ie=Qt.type;if(!It.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.bufferData(L.PIXEL_PACK_BUFFER,Ot.byteLength,L.STREAM_READ),L.readPixels(Q,lt,ut,$,Kt.convert(le),Kt.convert(ie),0);const ye=X!==null?Zt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(L.FRAMEBUFFER,ye);const De=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await qb(L,De,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ot),L.deleteBuffer(ne),L.deleteSync(De),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,lt=0){const ut=Math.pow(2,-lt),$=Math.floor(w.image.width*ut),Ot=Math.floor(w.image.height*ut),Xt=Q!==null?Q.x:0,Yt=Q!==null?Q.y:0;O.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,lt,0,0,Xt,Yt,$,Ot),kt.unbindTexture()};const ql=L.createFramebuffer(),qi=L.createFramebuffer();this.copyTextureToTexture=function(w,Q,lt=null,ut=null,$=0,Ot=null){Ot===null&&($!==0?(Iu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=$,$=0):Ot=0);let Xt,Yt,Qt,le,ie,ne,ye,De,Ke;const Te=w.isCompressedTexture?w.mipmaps[Ot]:w.image;if(lt!==null)Xt=lt.max.x-lt.min.x,Yt=lt.max.y-lt.min.y,Qt=lt.isBox3?lt.max.z-lt.min.z:1,le=lt.min.x,ie=lt.min.y,ne=lt.isBox3?lt.min.z:0;else{const dn=Math.pow(2,-$);Xt=Math.floor(Te.width*dn),Yt=Math.floor(Te.height*dn),w.isDataArrayTexture?Qt=Te.depth:w.isData3DTexture?Qt=Math.floor(Te.depth*dn):Qt=1,le=0,ie=0,ne=0}ut!==null?(ye=ut.x,De=ut.y,Ke=ut.z):(ye=0,De=0,Ke=0);const Ae=Kt.convert(Q.format),ae=Kt.convert(Q.type);let tn;Q.isData3DTexture?(O.setTexture3D(Q,0),tn=L.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(O.setTexture2DArray(Q,0),tn=L.TEXTURE_2D_ARRAY):(O.setTexture2D(Q,0),tn=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ce=L.getParameter(L.UNPACK_ROW_LENGTH),Nn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ua=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),ji=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Te.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,le),L.pixelStorei(L.UNPACK_SKIP_ROWS,ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ne);const Xe=w.isDataArrayTexture||w.isData3DTexture,Ln=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const dn=Zt.get(w),yn=Zt.get(Q),An=Zt.get(dn.__renderTarget),Li=Zt.get(yn.__renderTarget);kt.bindFramebuffer(L.READ_FRAMEBUFFER,An.__webglFramebuffer),kt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Zi=0;Zi<Qt;Zi++)Xe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.get(w).__webglTexture,$,ne+Zi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.get(Q).__webglTexture,Ot,Ke+Zi)),L.blitFramebuffer(le,ie,Xt,Yt,ye,De,Xt,Yt,L.DEPTH_BUFFER_BIT,L.NEAREST);kt.bindFramebuffer(L.READ_FRAMEBUFFER,null),kt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||Zt.has(w)){const dn=Zt.get(w),yn=Zt.get(Q);kt.bindFramebuffer(L.READ_FRAMEBUFFER,ql),kt.bindFramebuffer(L.DRAW_FRAMEBUFFER,qi);for(let An=0;An<Qt;An++)Xe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,$,ne+An):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,$),Ln?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yn.__webglTexture,Ot,Ke+An):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yn.__webglTexture,Ot),$!==0?L.blitFramebuffer(le,ie,Xt,Yt,ye,De,Xt,Yt,L.COLOR_BUFFER_BIT,L.NEAREST):Ln?L.copyTexSubImage3D(tn,Ot,ye,De,Ke+An,le,ie,Xt,Yt):L.copyTexSubImage2D(tn,Ot,ye,De,le,ie,Xt,Yt);kt.bindFramebuffer(L.READ_FRAMEBUFFER,null),kt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ln?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(tn,Ot,ye,De,Ke,Xt,Yt,Qt,Ae,ae,Te.data):Q.isCompressedArrayTexture?L.compressedTexSubImage3D(tn,Ot,ye,De,Ke,Xt,Yt,Qt,Ae,Te.data):L.texSubImage3D(tn,Ot,ye,De,Ke,Xt,Yt,Qt,Ae,ae,Te):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ot,ye,De,Xt,Yt,Ae,ae,Te.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ot,ye,De,Te.width,Te.height,Ae,Te.data):L.texSubImage2D(L.TEXTURE_2D,Ot,ye,De,Xt,Yt,Ae,ae,Te);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ce),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ua),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ji),Ot===0&&Q.generateMipmaps&&L.generateMipmap(tn),kt.unbindTexture()},this.copyTextureToTexture3D=function(w,Q,lt=null,ut=null,$=0){return Iu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Q,lt,ut,$)},this.initRenderTarget=function(w){Zt.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),kt.unbindTexture()},this.resetState=function(){z=0,B=0,X=null,kt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ne._getUnpackColorSpace()}}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f2=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Dx=i=>{const t=f2(i);return t.charAt(0).toUpperCase()+t.slice(1)},Zy=(...i)=>i.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),h2=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=jt.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...h},p)=>jt.createElement("svg",{ref:p,...d2,width:t,height:t,stroke:i,strokeWidth:r?Number(n)*24/Number(t):n,className:Zy("lucide",o),...!c&&!h2(h)&&{"aria-hidden":"true"},...h},[...u.map(([d,g])=>jt.createElement(d,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=(i,t)=>{const n=jt.forwardRef(({className:r,...o},c)=>jt.createElement(p2,{ref:c,iconNode:t,className:Zy(`lucide-${u2(Dx(i))}`,`lucide-${i}`,r),...o}));return n.displayName=Dx(i),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Ky=Vl("bookmark",m2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Qy=Vl("eye",g2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],$y=Vl("heart",_2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Jy=Vl("message-circle",v2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],tS=Vl("repeat",x2),Ux={type:"change"},Um={type:"start"},eS={type:"end"},Au=new pf,Nx=new sr,y2=Math.cos(70*Wb.DEG2RAD),gn=new J,qn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rp=1e-6;class nS extends wT{constructor(t,n=null){super(t,n),this.state=Ve.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:no.ROTATE,MIDDLE:no.DOLLY,RIGHT:no.PAN},this.touches={ONE:Qs.ROTATE,TWO:Qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new qr,this._lastTargetPosition=new J,this._quat=new qr().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ax,this._sphericalDelta=new ax,this._scale=1,this._panOffset=new J,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new J,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=M2.bind(this),this._onPointerDown=S2.bind(this),this._onPointerUp=E2.bind(this),this._onContextMenu=D2.bind(this),this._onMouseWheel=A2.bind(this),this._onKeyDown=w2.bind(this),this._onTouchStart=R2.bind(this),this._onTouchMove=C2.bind(this),this._onMouseDown=b2.bind(this),this._onMouseMove=T2.bind(this),this._interceptControlDown=U2.bind(this),this._interceptControlUp=N2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ux),this.update(),this.state=Ve.NONE}update(t=null){const n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=qn:r>Math.PI&&(r-=qn),o<-Math.PI?o+=qn:o>Math.PI&&(o-=qn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=gn.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Au.origin.copy(this.object.position),Au.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Au.direction))<y2?this.object.lookAt(this.target):(Nx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Au.intersectPlane(Nx,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>rp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rp||this._lastTargetPosition.distanceToSquared(this.target)>rp?(this.dispatchEvent(Ux),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qn/60*this.autoRotateSpeed*t:qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;gn.copy(o).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=t-r.left,c=n-r.top,u=r.width,h=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/n.clientHeight),this._rotateUp(qn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),o=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/n.clientHeight),this._rotateUp(qn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new fe,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function S2(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function M2(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function E2(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eS),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function b2(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case no.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ve.DOLLY;break;case no.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ve.ROTATE}break;case no.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Um)}function T2(i){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function A2(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(i.preventDefault(),this.dispatchEvent(Um),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(eS))}function w2(i){this.enabled!==!1&&this._handleKeyDown(i)}function R2(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ve.TOUCH_ROTATE;break;case Qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case Qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ve.TOUCH_DOLLY_PAN;break;case Qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Um)}function C2(i){switch(this._trackPointer(i),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ve.NONE}}function D2(i){this.enabled!==!1&&i.preventDefault()}function U2(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function N2(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sp(i){const t=i.toLocaleString("en-US",{month:"long"}),n=i.getDate(),r=i.getFullYear(),o=n%10===1&&n!==11?"st":n%10===2&&n!==12?"nd":n%10===3&&n!==13?"rd":"th";let c=i.getHours();const u=c>=12?"PM":"AM";c=c%12||12;const h=String(i.getMinutes()).padStart(2,"0"),p=String(i.getSeconds()).padStart(2,"0");return`${t} ${n}${o}, ${r}, ${String(c).padStart(2,"0")}:${h}:${p} ${u}`}const L2=["#440154","#472D7B","#3B518B","#2C718E","#21918C","#27AD81","#5CC863","#BADC31"],O2=["#00204C","#143362","#1D5796","#2C75A0","#3D8C8E","#60B56B","#AAD338","#FDE725"],P2=["#0D0887","#4B03A5","#7A04A6","#A61386","#D4316E","#F1605D","#FD8C3E","#FCCE25"],z2=["#000004","#1B0C41","#4A0C6B","#781C6D","#A52C60","#CF4446","#ED6925","#FB9B06"];function wu(i,t){return Array.from({length:t},(n,r)=>{const o=Math.round(r*(i.length-1)/(t-1));return i[o]})}const Lx={default:i=>wu(L2,i),protanopia:i=>wu(O2,i),deuteranopia:i=>wu(P2,i),tritanopia:i=>wu(z2,i),party:()=>[]},F2={FDP:"#FFED00","B90/GRÜNE":"#1FAF12",SPD:"#FF0000",CDU:"#000000",AfD:"#009DE0",BSW:"#fca311",CSU:"#415a77",LINKE:"#DF007D"},B2=({onSwitch:i})=>{const t=jt.useRef(null),[n,r]=jt.useState(!0),[o,c]=jt.useState(null),[u,h]=jt.useState(!1),[p,d]=jt.useState(0),[g,v]=jt.useState(!1),[_,y]=jt.useState(null),[E,b]=jt.useState(2),[S,x]=jt.useState("default"),[P,N]=jt.useState("en"),D=jt.useRef(null),G=jt.useRef(null),z=jt.useRef(null),B=jt.useRef(null),X=jt.useRef({x:0,y:0}),U=jt.useRef({x:0,y:0}),R=jt.useRef(0),I=jt.useRef(2e3),Y=jt.useRef([]),et=jt.useRef({min:null,max:null}),gt=jt.useRef(null),dt=jt.useRef(null),[F,Z]=jt.useState(null),q=Array.from({length:20},(ct,Ut)=>Ut+1),ht={en:{titleLine1:"From Tweet to Trend:",titleLine2:"Visualizing Political Retweet Networks",simulation:"Retweet Simulation",currentTime:"Current Time:",originalBy:"Original tweet by",selectPost:"Select a post to see its retweet activity:",legend:"LEGEND",colorScheme:"Color Scheme",nodeSize:"Node Size",play:"Play",pause:"Pause",switchViz:"Explore Bursts & Network",return:"Return",earliestLatest:"Earliest → Latest",lowFollower:"Low Follower Count",highFollower:"High Follower Count",optPartyColors:"Political party colors",optDefault:"Default",optProtanopia:"Protanopia-friendly",optDeuteranopia:"Deuteranopia-friendly",optTritanopia:"Tritanopia-friendly",titles:{2:"Conservatives serve Europe",3:"Hope for Tomorrow",4:"Election Allegations",5:"Catalyst for Change",6:"Show Your Colors",7:"Advent Interrupted",9:"Suspending Documentation",10:"Tax Relief",11:"Coalition Opportunity",12:"Small Shifts, Big Impact",13:"Voting Paradox",14:"Economic Turnaround Now",15:"",16:"",17:"",18:"",19:"",20:""}},de:{titleLine1:"Vom Tweet zum Trend:",titleLine2:"Politische Retweet-Netzwerke visualisieren",simulation:"Simulation der Retweets",currentTime:"Aktuelle Zeit:",originalBy:"Original-Tweet von",selectPost:"Wählen Sie einen Beitrag, um Retweet-Aktivität zu sehen:",legend:"LEGENDE",colorScheme:"Farb-Schema",nodeSize:"Knotengröße",play:"Abspielen",pause:"Pause",switchViz:"Bursts & Netzwerk erkunden",return:"Return",earliestLatest:"Früheste → Neueste",lowFollower:"Geringe Follower-Zahl",highFollower:"Hohe Follower-Zahl",optPartyColors:"Parteifarben",optDefault:"Standard",optProtanopia:"Protanopie-freundlich",optDeuteranopia:"Deuteranopie-freundlich",optTritanopia:"Tritanopie-freundlich",titles:{1:"Aufmerksamkeit erbeten",2:"Konservative dienen Europa",3:"Hoffnung für morgen",4:"Wahlvorwürfe",5:"Katalysator für Veränderung",6:"Zeigt eure Farben",7:"Unterbrochener Advent",8:"Aus Gründen",9:"Aussetzung der Dokumentation",10:"Steuererleichterungen",11:"Koalitionschance",12:"Kleine Veränderungen, große Wirkung",13:"Wahlparadox",14:"Wirtschaftliche Trendwende jetzt",15:"",16:"",17:"",18:"",19:"",20:""}}};jt.useEffect(()=>{r(!0),fetch(`https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_${E}.json`).then(ct=>ct.json()).then(ct=>{const Ut=[...ct].sort((Rt,mt)=>new Date(Rt.creation_time)-new Date(mt.creation_time));y(Ut);const pt=new Date(Ut[0].creation_time);c(sp(pt)),r(!1)}).catch(ct=>{console.error("Error loading JSON data:",ct),r(!1)})},[E]),jt.useEffect(()=>{fetch("https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_original_tweets.json").then(ct=>ct.json()).then(ct=>{const Ut=ct.reduce((pt,Rt)=>(pt[Rt.platform_post_id]=Rt,pt),{});Z(Ut)}).catch(ct=>{console.error("Error loading original tweet details:",ct)})},[]);const C=_&&F&&_[0]?F[_[0].shared_post_id]:null;jt.useEffect(()=>{if(!_)return;console.log(_);const ct=new zy;ct.background=new be(0),G.current=ct;const Ut=new ri(75,window.innerWidth/window.innerHeight,.1,1e3);Ut.position.z=15,z.current=Ut;const pt=new jy({antialias:!0});pt.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(pt.domElement),B.current=pt;const Rt=new nS(Ut,pt.domElement);Rt.enableDamping=!0,Rt.dampingFactor=.1,Rt.enableZoom=!0,Rt.zoomSpeed=1.2,Rt.enablePan=!0,Rt.rotateSpeed=.8;const mt=yt=>{yt.preventDefault();const Lt=.05;z.current.position.z+=yt.deltaY*Lt,z.current.position.z=Math.max(5,Math.min(50,z.current.position.z))};pt.domElement.addEventListener("wheel",mt,{passive:!1});const j=new $s;ct.add(j);const wt=(yt,Lt,ue=0)=>{const Nt=document.createElement("canvas"),Wt=Nt.getContext("2d");Nt.width=256,Nt.height=128,Wt.font="12px Arial",Wt.fillStyle=`rgba(${ue>>16&255}, ${ue>>8&255}, ${ue&255}, 1.0)`,Wt.fillText(yt,0,64);const Jt=new Qu(Nt),te=new Rm({map:Jt}),Vt=new By(te);return Vt.position.set(Lt.x-2,Lt.y+.2,Lt.z),Vt.scale.set(5,2.5,1),Vt},L=new ho(1,32,32),de=new uo({color:4886754}),zt=new si(L,de);zt.visible=!0,j.add(zt),gt.current=zt;const It=wt("Original Tweet by @roberthabeck",new J(0,0,0),1942002);It.visible=!0,j.add(It),dt.current=It;let kt;S==="party"?kt=_.map(yt=>yt.party_color):kt=Lx[S](_.length);const xe=[],Zt=new Date(_[0].creation_time),O=new Date(_[_.length-1].creation_time);et.current={min:Zt,max:O},_.forEach((yt,Lt)=>{const ue=new Date(yt.creation_time),Nt=Lt/_.length*Math.PI*2,Wt=7,Jt=Math.cos(Nt)*Wt,te=Math.sin(Nt)*Wt,Ft=.3+parseFloat(yt.follower_count)/1e6*.7,Kt=new ho(Ft,32,32),he=kt[Lt],V=new uo({color:new be(he),transparent:!0,opacity:0}),Pt=new si(Kt,V);Pt.position.set(Jt,te,0),Pt.userData={data:yt,time:ue,visible:!1};const ft=wt(yt.dboes_name,new J(Jt,te,0),16777215);ft.visible=!1;const Et=new Cm({color:new be(he),transparent:!0,opacity:0}),Gt=new xi().setFromPoints([new J(0,0,0),new J(Jt,te,0)]),Bt=new Hy(Gt,Et);j.add(Pt),j.add(ft),j.add(Bt),xe.push({node:Pt,label:ft,line:Bt,time:ue})}),Y.current=xe,c(sp(Zt)),r(!1);const T=yt=>{document.addEventListener("mousemove",at),document.addEventListener("mouseup",Mt),X.current.x=yt.clientX,X.current.y=yt.clientY},at=yt=>{const Lt=yt.clientX-X.current.x,ue=yt.clientY-X.current.y;X.current.x=yt.clientX,X.current.y=yt.clientY,U.current.y+=Lt*.01,U.current.x+=ue*.01},Mt=()=>{document.removeEventListener("mousemove",at),document.removeEventListener("mouseup",Mt)};pt.domElement.addEventListener("mousedown",T);const Dt=()=>{z.current&&B.current&&(z.current.aspect=window.innerWidth/window.innerHeight,z.current.updateProjectionMatrix(),B.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Dt),pt.render(ct,Ut);const _t=()=>{const yt=t.current.clientWidth,Lt=t.current.clientHeight;pt.setSize(yt,Lt),Ut.aspect=yt/Lt,Ut.updateProjectionMatrix()};window.addEventListener("resize",_t),_t();const Ht=()=>{j&&(j.rotation.x+=(U.current.x-j.rotation.x)*.05,j.rotation.y+=(U.current.y-j.rotation.y)*.05),B.current&&G.current&&z.current&&B.current.render(G.current,z.current),Rt.update(),pt.render(ct,Ut),D.current=requestAnimationFrame(Ht)};return D.current=requestAnimationFrame(Ht),()=>{window.removeEventListener("resize",_t),window.removeEventListener("resize",Dt),cancelAnimationFrame(D.current),pt.domElement.removeEventListener("mousedown",T),document.removeEventListener("mousemove",at),document.removeEventListener("mouseup",Mt),t.current&&pt.domElement&&t.current.removeChild(pt.domElement),L.dispose(),de.dispose(),xe.forEach(yt=>{yt.node.geometry&&yt.node.geometry.dispose(),yt.node.material&&yt.node.material.dispose(),yt.line.geometry&&yt.line.geometry.dispose(),yt.line.material&&yt.line.material.dispose()})}},[_,S]),jt.useEffect(()=>{let ct;return u&&(R.current=Date.now(),gt.current&&(gt.current.visible=!0),dt.current&&(dt.current.visible=!0),ct=setInterval(()=>{const{min:Ut,max:pt}=et.current;if(!Ut||!pt)return;const mt=(Date.now()-R.current)*I.current,j=new Date(Ut.getTime()+mt),wt=pt.getTime()-Ut.getTime(),L=j.getTime()-Ut.getTime(),de=Math.min(L/wt*2200,100);c(sp(j)),d(de),Y.current.forEach(zt=>{if(j>=zt.time&&!zt.node.userData.visible){zt.node.material.opacity=1,zt.label.visible=!0,zt.line.material.opacity=.7,zt.node.userData.visible=!0;const It=new J(1.5,1.5,1.5);zt.node.scale.copy(It),setTimeout(()=>{zt.node.scale.set(1,1,1)},300)}}),j>=pt&&(h(!1),clearInterval(ct))},100)),()=>{ct&&clearInterval(ct)}},[u]),jt.useEffect(()=>{if(!_)return;const ct=new Vy,Ut=new fe,pt=Rt=>{Ut.x=Rt.clientX/window.innerWidth*2-1,Ut.y=-(Rt.clientY/window.innerHeight)*2+1,ct.setFromCamera(Ut,z.current);const mt=Y.current.map(wt=>wt.node),j=ct.intersectObjects(mt);if(j.length>0){const wt=j[0].object;Y.current.forEach(L=>{L.node===wt?(L.node.material.opacity=1,L.label.material&&(L.label.material.opacity=1)):(L.node.material.opacity=.3,L.label.material&&(L.label.material.opacity=.3))})}else Y.current.forEach(wt=>{wt.node.userData.visible?(wt.node.material.opacity=1,wt.label.material&&(wt.label.material.opacity=1)):(wt.node.material.opacity=0,wt.label.material&&(wt.label.material.opacity=0))})};return window.addEventListener("mousemove",pt),()=>{window.removeEventListener("mousemove",pt)}},[_]);const nt=()=>{u?h(!1):(p>=100&&(Y.current.forEach(ct=>{ct.node.material.opacity=0,ct.label.visible=!1,ct.line.material.opacity=0,ct.node.userData.visible=!1}),c(et.current.min.toLocaleString()),d(0)),h(!0))};jt.useEffect(()=>{gt.current&&dt.current&&(gt.current.visible=!0,dt.current.visible=!0)},[E]),jt.useEffect(()=>{var ct;if(_&&F&&((ct=_[0])!=null&&ct.shared_post_id)&&dt.current){const Ut=_[0].shared_post_id,pt=F[Ut];if(pt){const mt=`Original Tweet by @${pt.platform_post_owner_name}`,j=document.createElement("canvas"),wt=j.getContext("2d");j.width=256,j.height=128,wt.font="12px Arial",wt.fillStyle="rgba(29,161,242,1.0)",wt.fillText(mt,0,64);const L=new Qu(j);dt.current.material.map=L,dt.current.material.needsUpdate=!0}}},[_,F]);const At=q.map(ct=>({id:ct,label:ht[P].titles[ct]||""})),xt=`linear-gradient(to right, ${(S==="party"?[...new Set(_.map(ct=>ct.party_color))]:Lx[S](7)).join(", ")})`,St=_&&_[0]?P==="en"?_[0].text_en:_[0].text:"";return ot.jsx("div",{className:"w-full h-full relative bg-black",children:ot.jsxs("div",{className:"mb-10 md:mb-0",children:[ot.jsx("div",{ref:t,className:"w-full h-[50vh] mt-[50vh] md:h-screen md:mt-0"}),ot.jsxs("h2",{className:"absolute top-20 -mt-5 md:top-5 md:mt-0 left-10",children:[ot.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:ht[P].titleLine1}),ot.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:ht[P].titleLine2})]}),ot.jsxs("div",{className:`
        absolute top-[200px] md:top-[440px] 
        left-0 right-0 mx-auto
        md:right-10 md:left-auto
        text-left md:text-right
        py-2  
        w-full max-w-sm md:max-w-none
        `,children:[ot.jsx("div",{className:"mt-2 text-white text-sm sm:text-md md:text-lg",children:ht[P].selectPost}),ot.jsx("div",{className:"text-cyan-500 grid grid-cols-2 gap-2 md:flex md:flex-col md:items-end",children:At.map(ct=>ot.jsx("span",{onClick:()=>b(ct.id),className:`
          cursor-pointer
          ${E===ct.id?"font-bold text-lg sm:text-xl md:text-2xl":"text-sm sm:text-md md:text-lg"}
        `,children:ct.label},ct.id))})]}),ot.jsx("div",{className:"absolute top-4 right-10 flex space-x-2",children:["en","de"].map(ct=>ot.jsx("button",{onClick:()=>N(ct),className:`px-3 py-1 rounded border ${P===ct?"bg-cyan-500 text-black border-cyan-500":"bg-black text-white border-gray-600 hover:border-cyan-500"} transition`,children:ct.toUpperCase()},ct))}),ot.jsxs("div",{className:"flex flex-col space-y-4 ml-5 mr-5 md:flex-row md:space-x-6 md:space-y-0 md:ml-0 md:mr-0",children:[ot.jsxs("div",{className:"flex-1 bg-black border border-cyan-500 p-6 rounded-lg shadow-lg md:absolute md:top-40 md:left-10 md:ml-6 md:w-[31rem]",children:[ot.jsx("div",{className:"font-bold mb-2 text-white text-xl",children:ht[P].simulation}),ot.jsxs("div",{className:"mb-2 text-white",children:[ht[P].currentTime," ",o]}),ot.jsx("div",{className:"w-64 h-2 bg-gray-800 rounded-full mb-2",children:ot.jsx("div",{className:"h-full bg-cyan-500 rounded-full",style:{width:`${p}%`}})}),C&&ot.jsxs("div",{className:"text-white text-sm",children:[ht[P].originalBy," @",C.platform_post_owner_name," –"," ",_.length,_.length>1?" Accounts":" Account"]})]}),ot.jsxs("div",{className:"relative mt-4 w-full max-w-[32rem] mx-auto md:absolute md:top-80 md:left-10 md:w-[31rem] bg-gray-900 bg-opacity-80 p-4 rounded-lg border border-cyan-500 shadow-xl text-white",children:[ot.jsx("div",{className:"font-mono mb-4 text-sm sm:text-md md:text-md lg:text-md xl:text-md 2xl:text-md",children:St.replace(/^RT @[A-Za-z0-9_]+:\s*/,"").replace(/https:\/\/.*/,"")}),C&&ot.jsxs("div",{className:"flex justify-between text-gray-400 text-xs sm:text-sm",children:[ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx(Qy,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:C.views})]}),ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx(Jy,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:C.comment_count})]}),ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx(tS,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:C.share_count})]}),ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx($y,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:C.like_count})]}),ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx(Ky,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:C.bookmark_count})]})]})]}),ot.jsxs("div",{className:` relative            /* mobile: in-flow */
       mb-4                /* mobile: gap below */
       mt-5
    w-[32rem]
       md:absolute md:right-10 md:top-20 -mt-5 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80`,children:[ot.jsx("div",{className:"font-bold mb-2 text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",children:ht[P].legend}),ot.jsx("hr",{className:"border-t-2 border-white my-2"}),ot.jsx("div",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:ht[P].colorScheme}),ot.jsxs("div",{className:"text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[ot.jsxs("div",{className:"mb-3",children:[ot.jsx("div",{className:"mb-3",children:ot.jsxs("select",{value:S,onChange:ct=>x(ct.target.value),className:"p-2 bg-gray-800 text-white rounded",children:[ot.jsx("option",{value:"party",children:ht[P].optPartyColors}),ot.jsx("option",{value:"default",children:ht[P].optDefault}),ot.jsx("option",{value:"protanopia",children:ht[P].optProtanopia}),ot.jsx("option",{value:"deuteranopia",children:ht[P].optDeuteranopia}),ot.jsx("option",{value:"tritanopia",children:ht[P].optTritanopia})]})}),S==="party"?ot.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(F2).map(([ct,Ut])=>ot.jsxs("div",{className:"flex items-center space-x-2",children:[ot.jsx("div",{className:"w-4 h-4 border border-gray-600 rounded-sm",style:{backgroundColor:Ut}}),ot.jsx("span",{className:"text-white text-sm",children:ct})]},ct))}):ot.jsxs(ot.Fragment,{children:[ot.jsx("div",{className:"w-full h-4 rounded",style:{background:xt}}),ot.jsx("p",{className:"mt-1 text-white",children:ht[P].earliestLatest})]})]}),ot.jsxs("div",{children:[ot.jsx("p",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:ht[P].nodeSize}),ot.jsxs("div",{className:"flex items-center space-x-2 text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[ot.jsx("div",{className:"w-4 h-4 bg-white ml-2 mr-2 rounded-full border border-cyan-500"}),ot.jsx("span",{children:ht[P].lowFollower})]}),ot.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[ot.jsx("div",{className:"w-8 h-8 bg-white rounded-full border border-cyan-500"}),ot.jsx("span",{children:ht[P].highFollower})]})]})]})]})]}),ot.jsxs("div",{className:`
    absolute left-1/2 transform -translate-x-1/2 top-80 mt-60
    flex space-x-4
    md:block md:transform-none md:left-auto md:translate-x-0 md:top-auto md:mt-0
  `,children:[ot.jsx("button",{onClick:nt,className:`
      w-24 md:w-32
      bg-black text-white font-bold
      py-2 md:py-3 px-2 md:px-6
      rounded-lg border border-cyan-500
      shadow-lg hover:bg-gray-900
      transition-colors
      ${u?"":"pulse-once"}
      md:absolute md:bottom-10 md:left-10 md:ml-0
    `,children:u?ht[P].pause:ht[P].play}),ot.jsx("button",{onClick:i,className:`
      w-64 md:w-96
      bg-black text-white font-bold
      py-2 md:py-3 px-4 md:px-6
      rounded-lg border border-cyan-500
      shadow-lg hover:bg-gray-900
      transition-colors
      ${u?"pulse-once":""}
      md:absolute md:bottom-10 md:left-40 md:ml-0
    `,children:ht[P].switchViz})]})]})})};function Gu(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function I2(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function Nm(i){let t,n,r;i.length!==2?(t=Gu,n=(h,p)=>Gu(i(h),p),r=(h,p)=>i(h)-p):(t=i===Gu||i===I2?i:H2,n=i,r=i);function o(h,p,d=0,g=h.length){if(d<g){if(t(p,p)!==0)return g;do{const v=d+g>>>1;n(h[v],p)<0?d=v+1:g=v}while(d<g)}return d}function c(h,p,d=0,g=h.length){if(d<g){if(t(p,p)!==0)return g;do{const v=d+g>>>1;n(h[v],p)<=0?d=v+1:g=v}while(d<g)}return d}function u(h,p,d=0,g=h.length){const v=o(h,p,d,g-1);return v>d&&r(h[v-1],p)>-r(h[v],p)?v-1:v}return{left:o,center:u,right:c}}function H2(){return 0}function G2(i){return i===null?NaN:+i}const V2=Nm(Gu),k2=V2.right;Nm(G2).center;function X2(i,t){let n,r;if(t===void 0)for(const o of i)o!=null&&(n===void 0?o>=o&&(n=r=o):(n>o&&(n=o),r<o&&(r=o)));else{let o=-1;for(let c of i)(c=t(c,++o,i))!=null&&(n===void 0?c>=c&&(n=r=c):(n>c&&(n=c),r<c&&(r=c)))}return[n,r]}const W2=Math.sqrt(50),Y2=Math.sqrt(10),q2=Math.sqrt(2);function $u(i,t,n){const r=(t-i)/Math.max(0,n),o=Math.floor(Math.log10(r)),c=r/Math.pow(10,o),u=c>=W2?10:c>=Y2?5:c>=q2?2:1;let h,p,d;return o<0?(d=Math.pow(10,-o)/u,h=Math.round(i*d),p=Math.round(t*d),h/d<i&&++h,p/d>t&&--p,d=-d):(d=Math.pow(10,o)*u,h=Math.round(i/d),p=Math.round(t/d),h*d<i&&++h,p*d>t&&--p),p<h&&.5<=n&&n<2?$u(i,t,n*2):[h,p,d]}function j2(i,t,n){if(t=+t,i=+i,n=+n,!(n>0))return[];if(i===t)return[i];const r=t<i,[o,c,u]=r?$u(t,i,n):$u(i,t,n);if(!(c>=o))return[];const h=c-o+1,p=new Array(h);if(r)if(u<0)for(let d=0;d<h;++d)p[d]=(c-d)/-u;else for(let d=0;d<h;++d)p[d]=(c-d)*u;else if(u<0)for(let d=0;d<h;++d)p[d]=(o+d)/-u;else for(let d=0;d<h;++d)p[d]=(o+d)*u;return p}function om(i,t,n){return t=+t,i=+i,n=+n,$u(i,t,n)[2]}function lm(i,t,n){t=+t,i=+i,n=+n;const r=t<i,o=r?om(t,i,n):om(i,t,n);return(r?-1:1)*(o<0?1/-o:o)}function Z2(i,t){let n;if(t===void 0)for(const r of i)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let o of i)(o=t(o,++r,i))!=null&&(n<o||n===void 0&&o>=o)&&(n=o)}return n}function K2(i){return i}var op=1,lp=2,cm=3,Rl=4,Ox=1e-6;function Q2(i){return"translate("+i+",0)"}function $2(i){return"translate(0,"+i+")"}function J2(i){return t=>+i(t)}function tC(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),n=>+i(n)+t}function eC(){return!this.__axis}function iS(i,t){var n=[],r=null,o=null,c=6,u=6,h=3,p=typeof window<"u"&&window.devicePixelRatio>1?0:.5,d=i===op||i===Rl?-1:1,g=i===Rl||i===lp?"x":"y",v=i===op||i===cm?Q2:$2;function _(y){var E=r??(t.ticks?t.ticks.apply(t,n):t.domain()),b=o??(t.tickFormat?t.tickFormat.apply(t,n):K2),S=Math.max(c,0)+h,x=t.range(),P=+x[0]+p,N=+x[x.length-1]+p,D=(t.bandwidth?tC:J2)(t.copy(),p),G=y.selection?y.selection():y,z=G.selectAll(".domain").data([null]),B=G.selectAll(".tick").data(E,t).order(),X=B.exit(),U=B.enter().append("g").attr("class","tick"),R=B.select("line"),I=B.select("text");z=z.merge(z.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),B=B.merge(U),R=R.merge(U.append("line").attr("stroke","currentColor").attr(g+"2",d*c)),I=I.merge(U.append("text").attr("fill","currentColor").attr(g,d*S).attr("dy",i===op?"0em":i===cm?"0.71em":"0.32em")),y!==G&&(z=z.transition(y),B=B.transition(y),R=R.transition(y),I=I.transition(y),X=X.transition(y).attr("opacity",Ox).attr("transform",function(Y){return isFinite(Y=D(Y))?v(Y+p):this.getAttribute("transform")}),U.attr("opacity",Ox).attr("transform",function(Y){var et=this.parentNode.__axis;return v((et&&isFinite(et=et(Y))?et:D(Y))+p)})),X.remove(),z.attr("d",i===Rl||i===lp?u?"M"+d*u+","+P+"H"+p+"V"+N+"H"+d*u:"M"+p+","+P+"V"+N:u?"M"+P+","+d*u+"V"+p+"H"+N+"V"+d*u:"M"+P+","+p+"H"+N),B.attr("opacity",1).attr("transform",function(Y){return v(D(Y)+p)}),R.attr(g+"2",d*c),I.attr(g,d*S).text(b),G.filter(eC).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===lp?"start":i===Rl?"end":"middle"),G.each(function(){this.__axis=D})}return _.scale=function(y){return arguments.length?(t=y,_):t},_.ticks=function(){return n=Array.from(arguments),_},_.tickArguments=function(y){return arguments.length?(n=y==null?[]:Array.from(y),_):n.slice()},_.tickValues=function(y){return arguments.length?(r=y==null?null:Array.from(y),_):r&&r.slice()},_.tickFormat=function(y){return arguments.length?(o=y,_):o},_.tickSize=function(y){return arguments.length?(c=u=+y,_):c},_.tickSizeInner=function(y){return arguments.length?(c=+y,_):c},_.tickSizeOuter=function(y){return arguments.length?(u=+y,_):u},_.tickPadding=function(y){return arguments.length?(h=+y,_):h},_.offset=function(y){return arguments.length?(p=+y,_):p},_}function nC(i){return iS(cm,i)}function iC(i){return iS(Rl,i)}var aC={value:()=>{}};function aS(){for(var i=0,t=arguments.length,n={},r;i<t;++i){if(!(r=arguments[i]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Vu(n)}function Vu(i){this._=i}function rC(i,t){return i.trim().split(/^|\s+/).map(function(n){var r="",o=n.indexOf(".");if(o>=0&&(r=n.slice(o+1),n=n.slice(0,o)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Vu.prototype=aS.prototype={constructor:Vu,on:function(i,t){var n=this._,r=rC(i+"",n),o,c=-1,u=r.length;if(arguments.length<2){for(;++c<u;)if((o=(i=r[c]).type)&&(o=sC(n[o],i.name)))return o;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++c<u;)if(o=(i=r[c]).type)n[o]=Px(n[o],i.name,t);else if(t==null)for(o in n)n[o]=Px(n[o],i.name,null);return this},copy:function(){var i={},t=this._;for(var n in t)i[n]=t[n].slice();return new Vu(i)},call:function(i,t){if((o=arguments.length-2)>0)for(var n=new Array(o),r=0,o,c;r<o;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(c=this._[i],r=0,o=c.length;r<o;++r)c[r].value.apply(t,n)},apply:function(i,t,n){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var r=this._[i],o=0,c=r.length;o<c;++o)r[o].value.apply(t,n)}};function sC(i,t){for(var n=0,r=i.length,o;n<r;++n)if((o=i[n]).name===t)return o.value}function Px(i,t,n){for(var r=0,o=i.length;r<o;++r)if(i[r].name===t){i[r]=aC,i=i.slice(0,r).concat(i.slice(r+1));break}return n!=null&&i.push({name:t,value:n}),i}var um="http://www.w3.org/1999/xhtml";const zx={svg:"http://www.w3.org/2000/svg",xhtml:um,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function _f(i){var t=i+="",n=t.indexOf(":");return n>=0&&(t=i.slice(0,n))!=="xmlns"&&(i=i.slice(n+1)),zx.hasOwnProperty(t)?{space:zx[t],local:i}:i}function oC(i){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===um&&t.documentElement.namespaceURI===um?t.createElement(i):t.createElementNS(n,i)}}function lC(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function rS(i){var t=_f(i);return(t.local?lC:oC)(t)}function cC(){}function Lm(i){return i==null?cC:function(){return this.querySelector(i)}}function uC(i){typeof i!="function"&&(i=Lm(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var c=t[o],u=c.length,h=r[o]=new Array(u),p,d,g=0;g<u;++g)(p=c[g])&&(d=i.call(p,p.__data__,g,c))&&("__data__"in p&&(d.__data__=p.__data__),h[g]=d);return new oi(r,this._parents)}function fC(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function hC(){return[]}function sS(i){return i==null?hC:function(){return this.querySelectorAll(i)}}function dC(i){return function(){return fC(i.apply(this,arguments))}}function pC(i){typeof i=="function"?i=dC(i):i=sS(i);for(var t=this._groups,n=t.length,r=[],o=[],c=0;c<n;++c)for(var u=t[c],h=u.length,p,d=0;d<h;++d)(p=u[d])&&(r.push(i.call(p,p.__data__,d,u)),o.push(p));return new oi(r,o)}function oS(i){return function(){return this.matches(i)}}function lS(i){return function(t){return t.matches(i)}}var mC=Array.prototype.find;function gC(i){return function(){return mC.call(this.children,i)}}function _C(){return this.firstElementChild}function vC(i){return this.select(i==null?_C:gC(typeof i=="function"?i:lS(i)))}var xC=Array.prototype.filter;function yC(){return Array.from(this.children)}function SC(i){return function(){return xC.call(this.children,i)}}function MC(i){return this.selectAll(i==null?yC:SC(typeof i=="function"?i:lS(i)))}function EC(i){typeof i!="function"&&(i=oS(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var c=t[o],u=c.length,h=r[o]=[],p,d=0;d<u;++d)(p=c[d])&&i.call(p,p.__data__,d,c)&&h.push(p);return new oi(r,this._parents)}function cS(i){return new Array(i.length)}function bC(){return new oi(this._enter||this._groups.map(cS),this._parents)}function Ju(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}Ju.prototype={constructor:Ju,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function TC(i){return function(){return i}}function AC(i,t,n,r,o,c){for(var u=0,h,p=t.length,d=c.length;u<d;++u)(h=t[u])?(h.__data__=c[u],r[u]=h):n[u]=new Ju(i,c[u]);for(;u<p;++u)(h=t[u])&&(o[u]=h)}function wC(i,t,n,r,o,c,u){var h,p,d=new Map,g=t.length,v=c.length,_=new Array(g),y;for(h=0;h<g;++h)(p=t[h])&&(_[h]=y=u.call(p,p.__data__,h,t)+"",d.has(y)?o[h]=p:d.set(y,p));for(h=0;h<v;++h)y=u.call(i,c[h],h,c)+"",(p=d.get(y))?(r[h]=p,p.__data__=c[h],d.delete(y)):n[h]=new Ju(i,c[h]);for(h=0;h<g;++h)(p=t[h])&&d.get(_[h])===p&&(o[h]=p)}function RC(i){return i.__data__}function CC(i,t){if(!arguments.length)return Array.from(this,RC);var n=t?wC:AC,r=this._parents,o=this._groups;typeof i!="function"&&(i=TC(i));for(var c=o.length,u=new Array(c),h=new Array(c),p=new Array(c),d=0;d<c;++d){var g=r[d],v=o[d],_=v.length,y=DC(i.call(g,g&&g.__data__,d,r)),E=y.length,b=h[d]=new Array(E),S=u[d]=new Array(E),x=p[d]=new Array(_);n(g,v,b,S,x,y,t);for(var P=0,N=0,D,G;P<E;++P)if(D=b[P]){for(P>=N&&(N=P+1);!(G=S[N])&&++N<E;);D._next=G||null}}return u=new oi(u,r),u._enter=h,u._exit=p,u}function DC(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function UC(){return new oi(this._exit||this._groups.map(cS),this._parents)}function NC(i,t,n){var r=this.enter(),o=this,c=this.exit();return typeof i=="function"?(r=i(r),r&&(r=r.selection())):r=r.append(i+""),t!=null&&(o=t(o),o&&(o=o.selection())),n==null?c.remove():n(c),r&&o?r.merge(o).order():o}function LC(i){for(var t=i.selection?i.selection():i,n=this._groups,r=t._groups,o=n.length,c=r.length,u=Math.min(o,c),h=new Array(o),p=0;p<u;++p)for(var d=n[p],g=r[p],v=d.length,_=h[p]=new Array(v),y,E=0;E<v;++E)(y=d[E]||g[E])&&(_[E]=y);for(;p<o;++p)h[p]=n[p];return new oi(h,this._parents)}function OC(){for(var i=this._groups,t=-1,n=i.length;++t<n;)for(var r=i[t],o=r.length-1,c=r[o],u;--o>=0;)(u=r[o])&&(c&&u.compareDocumentPosition(c)^4&&c.parentNode.insertBefore(u,c),c=u);return this}function PC(i){i||(i=zC);function t(v,_){return v&&_?i(v.__data__,_.__data__):!v-!_}for(var n=this._groups,r=n.length,o=new Array(r),c=0;c<r;++c){for(var u=n[c],h=u.length,p=o[c]=new Array(h),d,g=0;g<h;++g)(d=u[g])&&(p[g]=d);p.sort(t)}return new oi(o,this._parents).order()}function zC(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function FC(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function BC(){return Array.from(this)}function IC(){for(var i=this._groups,t=0,n=i.length;t<n;++t)for(var r=i[t],o=0,c=r.length;o<c;++o){var u=r[o];if(u)return u}return null}function HC(){let i=0;for(const t of this)++i;return i}function GC(){return!this.node()}function VC(i){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o=t[n],c=0,u=o.length,h;c<u;++c)(h=o[c])&&i.call(h,h.__data__,c,o);return this}function kC(i){return function(){this.removeAttribute(i)}}function XC(i){return function(){this.removeAttributeNS(i.space,i.local)}}function WC(i,t){return function(){this.setAttribute(i,t)}}function YC(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function qC(i,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(i):this.setAttribute(i,n)}}function jC(i,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,n)}}function ZC(i,t){var n=_f(i);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?XC:kC:typeof t=="function"?n.local?jC:qC:n.local?YC:WC)(n,t))}function uS(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function KC(i){return function(){this.style.removeProperty(i)}}function QC(i,t,n){return function(){this.style.setProperty(i,t,n)}}function $C(i,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(i):this.style.setProperty(i,r,n)}}function JC(i,t,n){return arguments.length>1?this.each((t==null?KC:typeof t=="function"?$C:QC)(i,t,n??"")):po(this.node(),i)}function po(i,t){return i.style.getPropertyValue(t)||uS(i).getComputedStyle(i,null).getPropertyValue(t)}function tD(i){return function(){delete this[i]}}function eD(i,t){return function(){this[i]=t}}function nD(i,t){return function(){var n=t.apply(this,arguments);n==null?delete this[i]:this[i]=n}}function iD(i,t){return arguments.length>1?this.each((t==null?tD:typeof t=="function"?nD:eD)(i,t)):this.node()[i]}function fS(i){return i.trim().split(/^|\s+/)}function Om(i){return i.classList||new hS(i)}function hS(i){this._node=i,this._names=fS(i.getAttribute("class")||"")}hS.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function dS(i,t){for(var n=Om(i),r=-1,o=t.length;++r<o;)n.add(t[r])}function pS(i,t){for(var n=Om(i),r=-1,o=t.length;++r<o;)n.remove(t[r])}function aD(i){return function(){dS(this,i)}}function rD(i){return function(){pS(this,i)}}function sD(i,t){return function(){(t.apply(this,arguments)?dS:pS)(this,i)}}function oD(i,t){var n=fS(i+"");if(arguments.length<2){for(var r=Om(this.node()),o=-1,c=n.length;++o<c;)if(!r.contains(n[o]))return!1;return!0}return this.each((typeof t=="function"?sD:t?aD:rD)(n,t))}function lD(){this.textContent=""}function cD(i){return function(){this.textContent=i}}function uD(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function fD(i){return arguments.length?this.each(i==null?lD:(typeof i=="function"?uD:cD)(i)):this.node().textContent}function hD(){this.innerHTML=""}function dD(i){return function(){this.innerHTML=i}}function pD(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function mD(i){return arguments.length?this.each(i==null?hD:(typeof i=="function"?pD:dD)(i)):this.node().innerHTML}function gD(){this.nextSibling&&this.parentNode.appendChild(this)}function _D(){return this.each(gD)}function vD(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function xD(){return this.each(vD)}function yD(i){var t=typeof i=="function"?i:rS(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function SD(){return null}function MD(i,t){var n=typeof i=="function"?i:rS(i),r=t==null?SD:typeof t=="function"?t:Lm(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function ED(){var i=this.parentNode;i&&i.removeChild(this)}function bD(){return this.each(ED)}function TD(){var i=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function AD(){var i=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function wD(i){return this.select(i?AD:TD)}function RD(i){return arguments.length?this.property("__data__",i):this.node().__data__}function CD(i){return function(t){i.call(this,t,this.__data__)}}function DD(i){return i.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function UD(i){return function(){var t=this.__on;if(t){for(var n=0,r=-1,o=t.length,c;n<o;++n)c=t[n],(!i.type||c.type===i.type)&&c.name===i.name?this.removeEventListener(c.type,c.listener,c.options):t[++r]=c;++r?t.length=r:delete this.__on}}}function ND(i,t,n){return function(){var r=this.__on,o,c=CD(t);if(r){for(var u=0,h=r.length;u<h;++u)if((o=r[u]).type===i.type&&o.name===i.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=c,o.options=n),o.value=t;return}}this.addEventListener(i.type,c,n),o={type:i.type,name:i.name,value:t,listener:c,options:n},r?r.push(o):this.__on=[o]}}function LD(i,t,n){var r=DD(i+""),o,c=r.length,u;if(arguments.length<2){var h=this.node().__on;if(h){for(var p=0,d=h.length,g;p<d;++p)for(o=0,g=h[p];o<c;++o)if((u=r[o]).type===g.type&&u.name===g.name)return g.value}return}for(h=t?ND:UD,o=0;o<c;++o)this.each(h(r[o],t,n));return this}function mS(i,t,n){var r=uS(i),o=r.CustomEvent;typeof o=="function"?o=new o(t,n):(o=r.document.createEvent("Event"),n?(o.initEvent(t,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(t,!1,!1)),i.dispatchEvent(o)}function OD(i,t){return function(){return mS(this,i,t)}}function PD(i,t){return function(){return mS(this,i,t.apply(this,arguments))}}function zD(i,t){return this.each((typeof t=="function"?PD:OD)(i,t))}function*FD(){for(var i=this._groups,t=0,n=i.length;t<n;++t)for(var r=i[t],o=0,c=r.length,u;o<c;++o)(u=r[o])&&(yield u)}var gS=[null];function oi(i,t){this._groups=i,this._parents=t}function kl(){return new oi([[document.documentElement]],gS)}function BD(){return this}oi.prototype=kl.prototype={constructor:oi,select:uC,selectAll:pC,selectChild:vC,selectChildren:MC,filter:EC,data:CC,enter:bC,exit:UC,join:NC,merge:LC,selection:BD,order:OC,sort:PC,call:FC,nodes:BC,node:IC,size:HC,empty:GC,each:VC,attr:ZC,style:JC,property:iD,classed:oD,text:fD,html:mD,raise:_D,lower:xD,append:yD,insert:MD,remove:bD,clone:wD,datum:RD,on:LD,dispatch:zD,[Symbol.iterator]:FD};function Fx(i){return typeof i=="string"?new oi([[document.querySelector(i)]],[document.documentElement]):new oi([[i]],gS)}function Pm(i,t,n){i.prototype=t.prototype=n,n.constructor=i}function _S(i,t){var n=Object.create(i.prototype);for(var r in t)n[r]=t[r];return n}function Xl(){}var zl=.7,tf=1/zl,ro="\\s*([+-]?\\d+)\\s*",Fl="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Vi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ID=/^#([0-9a-f]{3,8})$/,HD=new RegExp(`^rgb\\(${ro},${ro},${ro}\\)$`),GD=new RegExp(`^rgb\\(${Vi},${Vi},${Vi}\\)$`),VD=new RegExp(`^rgba\\(${ro},${ro},${ro},${Fl}\\)$`),kD=new RegExp(`^rgba\\(${Vi},${Vi},${Vi},${Fl}\\)$`),XD=new RegExp(`^hsl\\(${Fl},${Vi},${Vi}\\)$`),WD=new RegExp(`^hsla\\(${Fl},${Vi},${Vi},${Fl}\\)$`),Bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Pm(Xl,jr,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:Ix,formatHex:Ix,formatHex8:YD,formatHsl:qD,formatRgb:Hx,toString:Hx});function Ix(){return this.rgb().formatHex()}function YD(){return this.rgb().formatHex8()}function qD(){return vS(this).formatHsl()}function Hx(){return this.rgb().formatRgb()}function jr(i){var t,n;return i=(i+"").trim().toLowerCase(),(t=ID.exec(i))?(n=t[1].length,t=parseInt(t[1],16),n===6?Gx(t):n===3?new jn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ru(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ru(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=HD.exec(i))?new jn(t[1],t[2],t[3],1):(t=GD.exec(i))?new jn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=VD.exec(i))?Ru(t[1],t[2],t[3],t[4]):(t=kD.exec(i))?Ru(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=XD.exec(i))?Xx(t[1],t[2]/100,t[3]/100,1):(t=WD.exec(i))?Xx(t[1],t[2]/100,t[3]/100,t[4]):Bx.hasOwnProperty(i)?Gx(Bx[i]):i==="transparent"?new jn(NaN,NaN,NaN,0):null}function Gx(i){return new jn(i>>16&255,i>>8&255,i&255,1)}function Ru(i,t,n,r){return r<=0&&(i=t=n=NaN),new jn(i,t,n,r)}function jD(i){return i instanceof Xl||(i=jr(i)),i?(i=i.rgb(),new jn(i.r,i.g,i.b,i.opacity)):new jn}function fm(i,t,n,r){return arguments.length===1?jD(i):new jn(i,t,n,r??1)}function jn(i,t,n,r){this.r=+i,this.g=+t,this.b=+n,this.opacity=+r}Pm(jn,fm,_S(Xl,{brighter(i){return i=i==null?tf:Math.pow(tf,i),new jn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?zl:Math.pow(zl,i),new jn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new jn(Xr(this.r),Xr(this.g),Xr(this.b),ef(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Vx,formatHex:Vx,formatHex8:ZD,formatRgb:kx,toString:kx}));function Vx(){return`#${kr(this.r)}${kr(this.g)}${kr(this.b)}`}function ZD(){return`#${kr(this.r)}${kr(this.g)}${kr(this.b)}${kr((isNaN(this.opacity)?1:this.opacity)*255)}`}function kx(){const i=ef(this.opacity);return`${i===1?"rgb(":"rgba("}${Xr(this.r)}, ${Xr(this.g)}, ${Xr(this.b)}${i===1?")":`, ${i})`}`}function ef(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Xr(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function kr(i){return i=Xr(i),(i<16?"0":"")+i.toString(16)}function Xx(i,t,n,r){return r<=0?i=t=n=NaN:n<=0||n>=1?i=t=NaN:t<=0&&(i=NaN),new wi(i,t,n,r)}function vS(i){if(i instanceof wi)return new wi(i.h,i.s,i.l,i.opacity);if(i instanceof Xl||(i=jr(i)),!i)return new wi;if(i instanceof wi)return i;i=i.rgb();var t=i.r/255,n=i.g/255,r=i.b/255,o=Math.min(t,n,r),c=Math.max(t,n,r),u=NaN,h=c-o,p=(c+o)/2;return h?(t===c?u=(n-r)/h+(n<r)*6:n===c?u=(r-t)/h+2:u=(t-n)/h+4,h/=p<.5?c+o:2-c-o,u*=60):h=p>0&&p<1?0:u,new wi(u,h,p,i.opacity)}function KD(i,t,n,r){return arguments.length===1?vS(i):new wi(i,t,n,r??1)}function wi(i,t,n,r){this.h=+i,this.s=+t,this.l=+n,this.opacity=+r}Pm(wi,KD,_S(Xl,{brighter(i){return i=i==null?tf:Math.pow(tf,i),new wi(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?zl:Math.pow(zl,i),new wi(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,t=isNaN(i)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,o=2*n-r;return new jn(cp(i>=240?i-240:i+120,o,r),cp(i,o,r),cp(i<120?i+240:i-120,o,r),this.opacity)},clamp(){return new wi(Wx(this.h),Cu(this.s),Cu(this.l),ef(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=ef(this.opacity);return`${i===1?"hsl(":"hsla("}${Wx(this.h)}, ${Cu(this.s)*100}%, ${Cu(this.l)*100}%${i===1?")":`, ${i})`}`}}));function Wx(i){return i=(i||0)%360,i<0?i+360:i}function Cu(i){return Math.max(0,Math.min(1,i||0))}function cp(i,t,n){return(i<60?t+(n-t)*i/60:i<180?n:i<240?t+(n-t)*(240-i)/60:t)*255}const zm=i=>()=>i;function QD(i,t){return function(n){return i+n*t}}function $D(i,t,n){return i=Math.pow(i,n),t=Math.pow(t,n)-i,n=1/n,function(r){return Math.pow(i+r*t,n)}}function JD(i){return(i=+i)==1?xS:function(t,n){return n-t?$D(t,n,i):zm(isNaN(t)?n:t)}}function xS(i,t){var n=t-i;return n?QD(i,n):zm(isNaN(i)?t:i)}const nf=function i(t){var n=JD(t);function r(o,c){var u=n((o=fm(o)).r,(c=fm(c)).r),h=n(o.g,c.g),p=n(o.b,c.b),d=xS(o.opacity,c.opacity);return function(g){return o.r=u(g),o.g=h(g),o.b=p(g),o.opacity=d(g),o+""}}return r.gamma=i,r}(1);function t3(i,t){t||(t=[]);var n=i?Math.min(t.length,i.length):0,r=t.slice(),o;return function(c){for(o=0;o<n;++o)r[o]=i[o]*(1-c)+t[o]*c;return r}}function e3(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function n3(i,t){var n=t?t.length:0,r=i?Math.min(n,i.length):0,o=new Array(r),c=new Array(n),u;for(u=0;u<r;++u)o[u]=Fm(i[u],t[u]);for(;u<n;++u)c[u]=t[u];return function(h){for(u=0;u<r;++u)c[u]=o[u](h);return c}}function i3(i,t){var n=new Date;return i=+i,t=+t,function(r){return n.setTime(i*(1-r)+t*r),n}}function Ai(i,t){return i=+i,t=+t,function(n){return i*(1-n)+t*n}}function a3(i,t){var n={},r={},o;(i===null||typeof i!="object")&&(i={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in i?n[o]=Fm(i[o],t[o]):r[o]=t[o];return function(c){for(o in n)r[o]=n[o](c);return r}}var hm=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,up=new RegExp(hm.source,"g");function r3(i){return function(){return i}}function s3(i){return function(t){return i(t)+""}}function yS(i,t){var n=hm.lastIndex=up.lastIndex=0,r,o,c,u=-1,h=[],p=[];for(i=i+"",t=t+"";(r=hm.exec(i))&&(o=up.exec(t));)(c=o.index)>n&&(c=t.slice(n,c),h[u]?h[u]+=c:h[++u]=c),(r=r[0])===(o=o[0])?h[u]?h[u]+=o:h[++u]=o:(h[++u]=null,p.push({i:u,x:Ai(r,o)})),n=up.lastIndex;return n<t.length&&(c=t.slice(n),h[u]?h[u]+=c:h[++u]=c),h.length<2?p[0]?s3(p[0].x):r3(t):(t=p.length,function(d){for(var g=0,v;g<t;++g)h[(v=p[g]).i]=v.x(d);return h.join("")})}function Fm(i,t){var n=typeof t,r;return t==null||n==="boolean"?zm(t):(n==="number"?Ai:n==="string"?(r=jr(t))?(t=r,nf):yS:t instanceof jr?nf:t instanceof Date?i3:e3(t)?t3:Array.isArray(t)?n3:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?a3:Ai)(i,t)}function o3(i,t){return i=+i,t=+t,function(n){return Math.round(i*(1-n)+t*n)}}var Yx=180/Math.PI,dm={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function SS(i,t,n,r,o,c){var u,h,p;return(u=Math.sqrt(i*i+t*t))&&(i/=u,t/=u),(p=i*n+t*r)&&(n-=i*p,r-=t*p),(h=Math.sqrt(n*n+r*r))&&(n/=h,r/=h,p/=h),i*r<t*n&&(i=-i,t=-t,p=-p,u=-u),{translateX:o,translateY:c,rotate:Math.atan2(t,i)*Yx,skewX:Math.atan(p)*Yx,scaleX:u,scaleY:h}}var Du;function l3(i){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return t.isIdentity?dm:SS(t.a,t.b,t.c,t.d,t.e,t.f)}function c3(i){return i==null||(Du||(Du=document.createElementNS("http://www.w3.org/2000/svg","g")),Du.setAttribute("transform",i),!(i=Du.transform.baseVal.consolidate()))?dm:(i=i.matrix,SS(i.a,i.b,i.c,i.d,i.e,i.f))}function MS(i,t,n,r){function o(d){return d.length?d.pop()+" ":""}function c(d,g,v,_,y,E){if(d!==v||g!==_){var b=y.push("translate(",null,t,null,n);E.push({i:b-4,x:Ai(d,v)},{i:b-2,x:Ai(g,_)})}else(v||_)&&y.push("translate("+v+t+_+n)}function u(d,g,v,_){d!==g?(d-g>180?g+=360:g-d>180&&(d+=360),_.push({i:v.push(o(v)+"rotate(",null,r)-2,x:Ai(d,g)})):g&&v.push(o(v)+"rotate("+g+r)}function h(d,g,v,_){d!==g?_.push({i:v.push(o(v)+"skewX(",null,r)-2,x:Ai(d,g)}):g&&v.push(o(v)+"skewX("+g+r)}function p(d,g,v,_,y,E){if(d!==v||g!==_){var b=y.push(o(y)+"scale(",null,",",null,")");E.push({i:b-4,x:Ai(d,v)},{i:b-2,x:Ai(g,_)})}else(v!==1||_!==1)&&y.push(o(y)+"scale("+v+","+_+")")}return function(d,g){var v=[],_=[];return d=i(d),g=i(g),c(d.translateX,d.translateY,g.translateX,g.translateY,v,_),u(d.rotate,g.rotate,v,_),h(d.skewX,g.skewX,v,_),p(d.scaleX,d.scaleY,g.scaleX,g.scaleY,v,_),d=g=null,function(y){for(var E=-1,b=_.length,S;++E<b;)v[(S=_[E]).i]=S.x(y);return v.join("")}}}var u3=MS(l3,"px, ","px)","deg)"),f3=MS(c3,", ",")",")"),mo=0,Cl=0,El=0,ES=1e3,af,Dl,rf=0,Zr=0,vf=0,Bl=typeof performance=="object"&&performance.now?performance:Date,bS=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Bm(){return Zr||(bS(h3),Zr=Bl.now()+vf)}function h3(){Zr=0}function sf(){this._call=this._time=this._next=null}sf.prototype=TS.prototype={constructor:sf,restart:function(i,t,n){if(typeof i!="function")throw new TypeError("callback is not a function");n=(n==null?Bm():+n)+(t==null?0:+t),!this._next&&Dl!==this&&(Dl?Dl._next=this:af=this,Dl=this),this._call=i,this._time=n,pm()},stop:function(){this._call&&(this._call=null,this._time=1/0,pm())}};function TS(i,t,n){var r=new sf;return r.restart(i,t,n),r}function d3(){Bm(),++mo;for(var i=af,t;i;)(t=Zr-i._time)>=0&&i._call.call(void 0,t),i=i._next;--mo}function qx(){Zr=(rf=Bl.now())+vf,mo=Cl=0;try{d3()}finally{mo=0,m3(),Zr=0}}function p3(){var i=Bl.now(),t=i-rf;t>ES&&(vf-=t,rf=i)}function m3(){for(var i,t=af,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),i=t,t=t._next):(n=t._next,t._next=null,t=i?i._next=n:af=n);Dl=i,pm(r)}function pm(i){if(!mo){Cl&&(Cl=clearTimeout(Cl));var t=i-Zr;t>24?(i<1/0&&(Cl=setTimeout(qx,i-Bl.now()-vf)),El&&(El=clearInterval(El))):(El||(rf=Bl.now(),El=setInterval(p3,ES)),mo=1,bS(qx))}}function jx(i,t,n){var r=new sf;return t=t==null?0:+t,r.restart(o=>{r.stop(),i(o+t)},t,n),r}var g3=aS("start","end","cancel","interrupt"),_3=[],AS=0,Zx=1,mm=2,ku=3,Kx=4,gm=5,Xu=6;function xf(i,t,n,r,o,c){var u=i.__transition;if(!u)i.__transition={};else if(n in u)return;v3(i,n,{name:t,index:r,group:o,on:g3,tween:_3,time:c.time,delay:c.delay,duration:c.duration,ease:c.ease,timer:null,state:AS})}function Im(i,t){var n=Ni(i,t);if(n.state>AS)throw new Error("too late; already scheduled");return n}function ki(i,t){var n=Ni(i,t);if(n.state>ku)throw new Error("too late; already running");return n}function Ni(i,t){var n=i.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function v3(i,t,n){var r=i.__transition,o;r[t]=n,n.timer=TS(c,0,n.time);function c(d){n.state=Zx,n.timer.restart(u,n.delay,n.time),n.delay<=d&&u(d-n.delay)}function u(d){var g,v,_,y;if(n.state!==Zx)return p();for(g in r)if(y=r[g],y.name===n.name){if(y.state===ku)return jx(u);y.state===Kx?(y.state=Xu,y.timer.stop(),y.on.call("interrupt",i,i.__data__,y.index,y.group),delete r[g]):+g<t&&(y.state=Xu,y.timer.stop(),y.on.call("cancel",i,i.__data__,y.index,y.group),delete r[g])}if(jx(function(){n.state===ku&&(n.state=Kx,n.timer.restart(h,n.delay,n.time),h(d))}),n.state=mm,n.on.call("start",i,i.__data__,n.index,n.group),n.state===mm){for(n.state=ku,o=new Array(_=n.tween.length),g=0,v=-1;g<_;++g)(y=n.tween[g].value.call(i,i.__data__,n.index,n.group))&&(o[++v]=y);o.length=v+1}}function h(d){for(var g=d<n.duration?n.ease.call(null,d/n.duration):(n.timer.restart(p),n.state=gm,1),v=-1,_=o.length;++v<_;)o[v].call(i,g);n.state===gm&&(n.on.call("end",i,i.__data__,n.index,n.group),p())}function p(){n.state=Xu,n.timer.stop(),delete r[t];for(var d in r)return;delete i.__transition}}function x3(i,t){var n=i.__transition,r,o,c=!0,u;if(n){t=t==null?null:t+"";for(u in n){if((r=n[u]).name!==t){c=!1;continue}o=r.state>mm&&r.state<gm,r.state=Xu,r.timer.stop(),r.on.call(o?"interrupt":"cancel",i,i.__data__,r.index,r.group),delete n[u]}c&&delete i.__transition}}function y3(i){return this.each(function(){x3(this,i)})}function S3(i,t){var n,r;return function(){var o=ki(this,i),c=o.tween;if(c!==n){r=n=c;for(var u=0,h=r.length;u<h;++u)if(r[u].name===t){r=r.slice(),r.splice(u,1);break}}o.tween=r}}function M3(i,t,n){var r,o;if(typeof n!="function")throw new Error;return function(){var c=ki(this,i),u=c.tween;if(u!==r){o=(r=u).slice();for(var h={name:t,value:n},p=0,d=o.length;p<d;++p)if(o[p].name===t){o[p]=h;break}p===d&&o.push(h)}c.tween=o}}function E3(i,t){var n=this._id;if(i+="",arguments.length<2){for(var r=Ni(this.node(),n).tween,o=0,c=r.length,u;o<c;++o)if((u=r[o]).name===i)return u.value;return null}return this.each((t==null?S3:M3)(n,i,t))}function Hm(i,t,n){var r=i._id;return i.each(function(){var o=ki(this,r);(o.value||(o.value={}))[t]=n.apply(this,arguments)}),function(o){return Ni(o,r).value[t]}}function wS(i,t){var n;return(typeof t=="number"?Ai:t instanceof jr?nf:(n=jr(t))?(t=n,nf):yS)(i,t)}function b3(i){return function(){this.removeAttribute(i)}}function T3(i){return function(){this.removeAttributeNS(i.space,i.local)}}function A3(i,t,n){var r,o=n+"",c;return function(){var u=this.getAttribute(i);return u===o?null:u===r?c:c=t(r=u,n)}}function w3(i,t,n){var r,o=n+"",c;return function(){var u=this.getAttributeNS(i.space,i.local);return u===o?null:u===r?c:c=t(r=u,n)}}function R3(i,t,n){var r,o,c;return function(){var u,h=n(this),p;return h==null?void this.removeAttribute(i):(u=this.getAttribute(i),p=h+"",u===p?null:u===r&&p===o?c:(o=p,c=t(r=u,h)))}}function C3(i,t,n){var r,o,c;return function(){var u,h=n(this),p;return h==null?void this.removeAttributeNS(i.space,i.local):(u=this.getAttributeNS(i.space,i.local),p=h+"",u===p?null:u===r&&p===o?c:(o=p,c=t(r=u,h)))}}function D3(i,t){var n=_f(i),r=n==="transform"?f3:wS;return this.attrTween(i,typeof t=="function"?(n.local?C3:R3)(n,r,Hm(this,"attr."+i,t)):t==null?(n.local?T3:b3)(n):(n.local?w3:A3)(n,r,t))}function U3(i,t){return function(n){this.setAttribute(i,t.call(this,n))}}function N3(i,t){return function(n){this.setAttributeNS(i.space,i.local,t.call(this,n))}}function L3(i,t){var n,r;function o(){var c=t.apply(this,arguments);return c!==r&&(n=(r=c)&&N3(i,c)),n}return o._value=t,o}function O3(i,t){var n,r;function o(){var c=t.apply(this,arguments);return c!==r&&(n=(r=c)&&U3(i,c)),n}return o._value=t,o}function P3(i,t){var n="attr."+i;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=_f(i);return this.tween(n,(r.local?L3:O3)(r,t))}function z3(i,t){return function(){Im(this,i).delay=+t.apply(this,arguments)}}function F3(i,t){return t=+t,function(){Im(this,i).delay=t}}function B3(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?z3:F3)(t,i)):Ni(this.node(),t).delay}function I3(i,t){return function(){ki(this,i).duration=+t.apply(this,arguments)}}function H3(i,t){return t=+t,function(){ki(this,i).duration=t}}function G3(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?I3:H3)(t,i)):Ni(this.node(),t).duration}function V3(i,t){if(typeof t!="function")throw new Error;return function(){ki(this,i).ease=t}}function k3(i){var t=this._id;return arguments.length?this.each(V3(t,i)):Ni(this.node(),t).ease}function X3(i,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;ki(this,i).ease=n}}function W3(i){if(typeof i!="function")throw new Error;return this.each(X3(this._id,i))}function Y3(i){typeof i!="function"&&(i=oS(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var c=t[o],u=c.length,h=r[o]=[],p,d=0;d<u;++d)(p=c[d])&&i.call(p,p.__data__,d,c)&&h.push(p);return new Ta(r,this._parents,this._name,this._id)}function q3(i){if(i._id!==this._id)throw new Error;for(var t=this._groups,n=i._groups,r=t.length,o=n.length,c=Math.min(r,o),u=new Array(r),h=0;h<c;++h)for(var p=t[h],d=n[h],g=p.length,v=u[h]=new Array(g),_,y=0;y<g;++y)(_=p[y]||d[y])&&(v[y]=_);for(;h<r;++h)u[h]=t[h];return new Ta(u,this._parents,this._name,this._id)}function j3(i){return(i+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Z3(i,t,n){var r,o,c=j3(t)?Im:ki;return function(){var u=c(this,i),h=u.on;h!==r&&(o=(r=h).copy()).on(t,n),u.on=o}}function K3(i,t){var n=this._id;return arguments.length<2?Ni(this.node(),n).on.on(i):this.each(Z3(n,i,t))}function Q3(i){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==i)return;t&&t.removeChild(this)}}function $3(){return this.on("end.remove",Q3(this._id))}function J3(i){var t=this._name,n=this._id;typeof i!="function"&&(i=Lm(i));for(var r=this._groups,o=r.length,c=new Array(o),u=0;u<o;++u)for(var h=r[u],p=h.length,d=c[u]=new Array(p),g,v,_=0;_<p;++_)(g=h[_])&&(v=i.call(g,g.__data__,_,h))&&("__data__"in g&&(v.__data__=g.__data__),d[_]=v,xf(d[_],t,n,_,d,Ni(g,n)));return new Ta(c,this._parents,t,n)}function tU(i){var t=this._name,n=this._id;typeof i!="function"&&(i=sS(i));for(var r=this._groups,o=r.length,c=[],u=[],h=0;h<o;++h)for(var p=r[h],d=p.length,g,v=0;v<d;++v)if(g=p[v]){for(var _=i.call(g,g.__data__,v,p),y,E=Ni(g,n),b=0,S=_.length;b<S;++b)(y=_[b])&&xf(y,t,n,b,_,E);c.push(_),u.push(g)}return new Ta(c,u,t,n)}var eU=kl.prototype.constructor;function nU(){return new eU(this._groups,this._parents)}function iU(i,t){var n,r,o;return function(){var c=po(this,i),u=(this.style.removeProperty(i),po(this,i));return c===u?null:c===n&&u===r?o:o=t(n=c,r=u)}}function RS(i){return function(){this.style.removeProperty(i)}}function aU(i,t,n){var r,o=n+"",c;return function(){var u=po(this,i);return u===o?null:u===r?c:c=t(r=u,n)}}function rU(i,t,n){var r,o,c;return function(){var u=po(this,i),h=n(this),p=h+"";return h==null&&(p=h=(this.style.removeProperty(i),po(this,i))),u===p?null:u===r&&p===o?c:(o=p,c=t(r=u,h))}}function sU(i,t){var n,r,o,c="style."+t,u="end."+c,h;return function(){var p=ki(this,i),d=p.on,g=p.value[c]==null?h||(h=RS(t)):void 0;(d!==n||o!==g)&&(r=(n=d).copy()).on(u,o=g),p.on=r}}function oU(i,t,n){var r=(i+="")=="transform"?u3:wS;return t==null?this.styleTween(i,iU(i,r)).on("end.style."+i,RS(i)):typeof t=="function"?this.styleTween(i,rU(i,r,Hm(this,"style."+i,t))).each(sU(this._id,i)):this.styleTween(i,aU(i,r,t),n).on("end.style."+i,null)}function lU(i,t,n){return function(r){this.style.setProperty(i,t.call(this,r),n)}}function cU(i,t,n){var r,o;function c(){var u=t.apply(this,arguments);return u!==o&&(r=(o=u)&&lU(i,u,n)),r}return c._value=t,c}function uU(i,t,n){var r="style."+(i+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,cU(i,t,n??""))}function fU(i){return function(){this.textContent=i}}function hU(i){return function(){var t=i(this);this.textContent=t??""}}function dU(i){return this.tween("text",typeof i=="function"?hU(Hm(this,"text",i)):fU(i==null?"":i+""))}function pU(i){return function(t){this.textContent=i.call(this,t)}}function mU(i){var t,n;function r(){var o=i.apply(this,arguments);return o!==n&&(t=(n=o)&&pU(o)),t}return r._value=i,r}function gU(i){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(i==null)return this.tween(t,null);if(typeof i!="function")throw new Error;return this.tween(t,mU(i))}function _U(){for(var i=this._name,t=this._id,n=CS(),r=this._groups,o=r.length,c=0;c<o;++c)for(var u=r[c],h=u.length,p,d=0;d<h;++d)if(p=u[d]){var g=Ni(p,t);xf(p,i,n,d,u,{time:g.time+g.delay+g.duration,delay:0,duration:g.duration,ease:g.ease})}return new Ta(r,this._parents,i,n)}function vU(){var i,t,n=this,r=n._id,o=n.size();return new Promise(function(c,u){var h={value:u},p={value:function(){--o===0&&c()}};n.each(function(){var d=ki(this,r),g=d.on;g!==i&&(t=(i=g).copy(),t._.cancel.push(h),t._.interrupt.push(h),t._.end.push(p)),d.on=t}),o===0&&c()})}var xU=0;function Ta(i,t,n,r){this._groups=i,this._parents=t,this._name=n,this._id=r}function CS(){return++xU}var ma=kl.prototype;Ta.prototype={constructor:Ta,select:J3,selectAll:tU,selectChild:ma.selectChild,selectChildren:ma.selectChildren,filter:Y3,merge:q3,selection:nU,transition:_U,call:ma.call,nodes:ma.nodes,node:ma.node,size:ma.size,empty:ma.empty,each:ma.each,on:K3,attr:D3,attrTween:P3,style:oU,styleTween:uU,text:dU,textTween:gU,remove:$3,tween:E3,delay:B3,duration:G3,ease:k3,easeVarying:W3,end:vU,[Symbol.iterator]:ma[Symbol.iterator]};function yU(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var SU={time:null,delay:0,duration:250,ease:yU};function MU(i,t){for(var n;!(n=i.__transition)||!(n=n[t]);)if(!(i=i.parentNode))throw new Error(`transition ${t} not found`);return n}function EU(i){var t,n;i instanceof Ta?(t=i._id,i=i._name):(t=CS(),(n=SU).time=Bm(),i=i==null?null:i+"");for(var r=this._groups,o=r.length,c=0;c<o;++c)for(var u=r[c],h=u.length,p,d=0;d<h;++d)(p=u[d])&&xf(p,i,t,d,u,n||MU(p,t));return new Ta(r,this._parents,i,t)}kl.prototype.interrupt=y3;kl.prototype.transition=EU;function bU(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function of(i,t){if((n=(i=t?i.toExponential(t-1):i.toExponential()).indexOf("e"))<0)return null;var n,r=i.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+i.slice(n+1)]}function go(i){return i=of(Math.abs(i)),i?i[1]:NaN}function TU(i,t){return function(n,r){for(var o=n.length,c=[],u=0,h=i[0],p=0;o>0&&h>0&&(p+h+1>r&&(h=Math.max(1,r-p)),c.push(n.substring(o-=h,o+h)),!((p+=h+1)>r));)h=i[u=(u+1)%i.length];return c.reverse().join(t)}}function AU(i){return function(t){return t.replace(/[0-9]/g,function(n){return i[+n]})}}var wU=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function lf(i){if(!(t=wU.exec(i)))throw new Error("invalid format: "+i);var t;return new Gm({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}lf.prototype=Gm.prototype;function Gm(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}Gm.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function RU(i){t:for(var t=i.length,n=1,r=-1,o;n<t;++n)switch(i[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+i[n])break t;r>0&&(r=0);break}return r>0?i.slice(0,r)+i.slice(o+1):i}var DS;function CU(i,t){var n=of(i,t);if(!n)return i+"";var r=n[0],o=n[1],c=o-(DS=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,u=r.length;return c===u?r:c>u?r+new Array(c-u+1).join("0"):c>0?r.slice(0,c)+"."+r.slice(c):"0."+new Array(1-c).join("0")+of(i,Math.max(0,t+c-1))[0]}function Qx(i,t){var n=of(i,t);if(!n)return i+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const $x={"%":(i,t)=>(i*100).toFixed(t),b:i=>Math.round(i).toString(2),c:i=>i+"",d:bU,e:(i,t)=>i.toExponential(t),f:(i,t)=>i.toFixed(t),g:(i,t)=>i.toPrecision(t),o:i=>Math.round(i).toString(8),p:(i,t)=>Qx(i*100,t),r:Qx,s:CU,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function Jx(i){return i}var ty=Array.prototype.map,ey=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function DU(i){var t=i.grouping===void 0||i.thousands===void 0?Jx:TU(ty.call(i.grouping,Number),i.thousands+""),n=i.currency===void 0?"":i.currency[0]+"",r=i.currency===void 0?"":i.currency[1]+"",o=i.decimal===void 0?".":i.decimal+"",c=i.numerals===void 0?Jx:AU(ty.call(i.numerals,String)),u=i.percent===void 0?"%":i.percent+"",h=i.minus===void 0?"−":i.minus+"",p=i.nan===void 0?"NaN":i.nan+"";function d(v){v=lf(v);var _=v.fill,y=v.align,E=v.sign,b=v.symbol,S=v.zero,x=v.width,P=v.comma,N=v.precision,D=v.trim,G=v.type;G==="n"?(P=!0,G="g"):$x[G]||(N===void 0&&(N=12),D=!0,G="g"),(S||_==="0"&&y==="=")&&(S=!0,_="0",y="=");var z=b==="$"?n:b==="#"&&/[boxX]/.test(G)?"0"+G.toLowerCase():"",B=b==="$"?r:/[%p]/.test(G)?u:"",X=$x[G],U=/[defgprs%]/.test(G);N=N===void 0?6:/[gprs]/.test(G)?Math.max(1,Math.min(21,N)):Math.max(0,Math.min(20,N));function R(I){var Y=z,et=B,gt,dt,F;if(G==="c")et=X(I)+et,I="";else{I=+I;var Z=I<0||1/I<0;if(I=isNaN(I)?p:X(Math.abs(I),N),D&&(I=RU(I)),Z&&+I==0&&E!=="+"&&(Z=!1),Y=(Z?E==="("?E:h:E==="-"||E==="("?"":E)+Y,et=(G==="s"?ey[8+DS/3]:"")+et+(Z&&E==="("?")":""),U){for(gt=-1,dt=I.length;++gt<dt;)if(F=I.charCodeAt(gt),48>F||F>57){et=(F===46?o+I.slice(gt+1):I.slice(gt))+et,I=I.slice(0,gt);break}}}P&&!S&&(I=t(I,1/0));var q=Y.length+I.length+et.length,ht=q<x?new Array(x-q+1).join(_):"";switch(P&&S&&(I=t(ht+I,ht.length?x-et.length:1/0),ht=""),y){case"<":I=Y+I+et+ht;break;case"=":I=Y+ht+I+et;break;case"^":I=ht.slice(0,q=ht.length>>1)+Y+I+et+ht.slice(q);break;default:I=ht+Y+I+et;break}return c(I)}return R.toString=function(){return v+""},R}function g(v,_){var y=d((v=lf(v),v.type="f",v)),E=Math.max(-8,Math.min(8,Math.floor(go(_)/3)))*3,b=Math.pow(10,-E),S=ey[8+E/3];return function(x){return y(b*x)+S}}return{format:d,formatPrefix:g}}var Uu,US,NS;UU({thousands:",",grouping:[3],currency:["$",""]});function UU(i){return Uu=DU(i),US=Uu.format,NS=Uu.formatPrefix,Uu}function NU(i){return Math.max(0,-go(Math.abs(i)))}function LU(i,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(go(t)/3)))*3-go(Math.abs(i)))}function OU(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,go(t)-go(i))+1}function LS(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}function PU(i){return function(){return i}}function zU(i){return+i}var ny=[0,1];function to(i){return i}function _m(i,t){return(t-=i=+i)?function(n){return(n-i)/t}:PU(isNaN(t)?NaN:.5)}function FU(i,t){var n;return i>t&&(n=i,i=t,t=n),function(r){return Math.max(i,Math.min(t,r))}}function BU(i,t,n){var r=i[0],o=i[1],c=t[0],u=t[1];return o<r?(r=_m(o,r),c=n(u,c)):(r=_m(r,o),c=n(c,u)),function(h){return c(r(h))}}function IU(i,t,n){var r=Math.min(i.length,t.length)-1,o=new Array(r),c=new Array(r),u=-1;for(i[r]<i[0]&&(i=i.slice().reverse(),t=t.slice().reverse());++u<r;)o[u]=_m(i[u],i[u+1]),c[u]=n(t[u],t[u+1]);return function(h){var p=k2(i,h,1,r)-1;return c[p](o[p](h))}}function OS(i,t){return t.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function HU(){var i=ny,t=ny,n=Fm,r,o,c,u=to,h,p,d;function g(){var _=Math.min(i.length,t.length);return u!==to&&(u=FU(i[0],i[_-1])),h=_>2?IU:BU,p=d=null,v}function v(_){return _==null||isNaN(_=+_)?c:(p||(p=h(i.map(r),t,n)))(r(u(_)))}return v.invert=function(_){return u(o((d||(d=h(t,i.map(r),Ai)))(_)))},v.domain=function(_){return arguments.length?(i=Array.from(_,zU),g()):i.slice()},v.range=function(_){return arguments.length?(t=Array.from(_),g()):t.slice()},v.rangeRound=function(_){return t=Array.from(_),n=o3,g()},v.clamp=function(_){return arguments.length?(u=_?!0:to,g()):u!==to},v.interpolate=function(_){return arguments.length?(n=_,g()):n},v.unknown=function(_){return arguments.length?(c=_,v):c},function(_,y){return r=_,o=y,g()}}function PS(){return HU()(to,to)}function GU(i,t,n,r){var o=lm(i,t,n),c;switch(r=lf(r??",f"),r.type){case"s":{var u=Math.max(Math.abs(i),Math.abs(t));return r.precision==null&&!isNaN(c=LU(o,u))&&(r.precision=c),NS(r,u)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(c=OU(o,Math.max(Math.abs(i),Math.abs(t))))&&(r.precision=c-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(c=NU(o))&&(r.precision=c-(r.type==="%")*2);break}}return US(r)}function VU(i){var t=i.domain;return i.ticks=function(n){var r=t();return j2(r[0],r[r.length-1],n??10)},i.tickFormat=function(n,r){var o=t();return GU(o[0],o[o.length-1],n??10,r)},i.nice=function(n){n==null&&(n=10);var r=t(),o=0,c=r.length-1,u=r[o],h=r[c],p,d,g=10;for(h<u&&(d=u,u=h,h=d,d=o,o=c,c=d);g-- >0;){if(d=om(u,h,n),d===p)return r[o]=u,r[c]=h,t(r);if(d>0)u=Math.floor(u/d)*d,h=Math.ceil(h/d)*d;else if(d<0)u=Math.ceil(u*d)/d,h=Math.floor(h*d)/d;else break;p=d}return i},i}function zS(){var i=PS();return i.copy=function(){return OS(i,zS())},LS.apply(i,arguments),VU(i)}function kU(i,t){i=i.slice();var n=0,r=i.length-1,o=i[n],c=i[r],u;return c<o&&(u=n,n=r,r=u,u=o,o=c,c=u),i[n]=t.floor(o),i[r]=t.ceil(c),i}const fp=new Date,hp=new Date;function xn(i,t,n,r){function o(c){return i(c=arguments.length===0?new Date:new Date(+c)),c}return o.floor=c=>(i(c=new Date(+c)),c),o.ceil=c=>(i(c=new Date(c-1)),t(c,1),i(c),c),o.round=c=>{const u=o(c),h=o.ceil(c);return c-u<h-c?u:h},o.offset=(c,u)=>(t(c=new Date(+c),u==null?1:Math.floor(u)),c),o.range=(c,u,h)=>{const p=[];if(c=o.ceil(c),h=h==null?1:Math.floor(h),!(c<u)||!(h>0))return p;let d;do p.push(d=new Date(+c)),t(c,h),i(c);while(d<c&&c<u);return p},o.filter=c=>xn(u=>{if(u>=u)for(;i(u),!c(u);)u.setTime(u-1)},(u,h)=>{if(u>=u)if(h<0)for(;++h<=0;)for(;t(u,-1),!c(u););else for(;--h>=0;)for(;t(u,1),!c(u););}),n&&(o.count=(c,u)=>(fp.setTime(+c),hp.setTime(+u),i(fp),i(hp),Math.floor(n(fp,hp))),o.every=c=>(c=Math.floor(c),!isFinite(c)||!(c>0)?null:c>1?o.filter(r?u=>r(u)%c===0:u=>o.count(0,u)%c===0):o)),o}const cf=xn(()=>{},(i,t)=>{i.setTime(+i+t)},(i,t)=>t-i);cf.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?xn(t=>{t.setTime(Math.floor(t/i)*i)},(t,n)=>{t.setTime(+t+n*i)},(t,n)=>(n-t)/i):cf);cf.range;const ya=1e3,vi=ya*60,Sa=vi*60,Aa=Sa*24,Vm=Aa*7,iy=Aa*30,dp=Aa*365,eo=xn(i=>{i.setTime(i-i.getMilliseconds())},(i,t)=>{i.setTime(+i+t*ya)},(i,t)=>(t-i)/ya,i=>i.getUTCSeconds());eo.range;const km=xn(i=>{i.setTime(i-i.getMilliseconds()-i.getSeconds()*ya)},(i,t)=>{i.setTime(+i+t*vi)},(i,t)=>(t-i)/vi,i=>i.getMinutes());km.range;const XU=xn(i=>{i.setUTCSeconds(0,0)},(i,t)=>{i.setTime(+i+t*vi)},(i,t)=>(t-i)/vi,i=>i.getUTCMinutes());XU.range;const Xm=xn(i=>{i.setTime(i-i.getMilliseconds()-i.getSeconds()*ya-i.getMinutes()*vi)},(i,t)=>{i.setTime(+i+t*Sa)},(i,t)=>(t-i)/Sa,i=>i.getHours());Xm.range;const WU=xn(i=>{i.setUTCMinutes(0,0,0)},(i,t)=>{i.setTime(+i+t*Sa)},(i,t)=>(t-i)/Sa,i=>i.getUTCHours());WU.range;const Wl=xn(i=>i.setHours(0,0,0,0),(i,t)=>i.setDate(i.getDate()+t),(i,t)=>(t-i-(t.getTimezoneOffset()-i.getTimezoneOffset())*vi)/Aa,i=>i.getDate()-1);Wl.range;const Wm=xn(i=>{i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCDate(i.getUTCDate()+t)},(i,t)=>(t-i)/Aa,i=>i.getUTCDate()-1);Wm.range;const YU=xn(i=>{i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCDate(i.getUTCDate()+t)},(i,t)=>(t-i)/Aa,i=>Math.floor(i/Aa));YU.range;function $r(i){return xn(t=>{t.setDate(t.getDate()-(t.getDay()+7-i)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*vi)/Vm)}const yf=$r(0),uf=$r(1),qU=$r(2),jU=$r(3),_o=$r(4),ZU=$r(5),KU=$r(6);yf.range;uf.range;qU.range;jU.range;_o.range;ZU.range;KU.range;function Jr(i){return xn(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-i)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Vm)}const FS=Jr(0),ff=Jr(1),QU=Jr(2),$U=Jr(3),vo=Jr(4),JU=Jr(5),tN=Jr(6);FS.range;ff.range;QU.range;$U.range;vo.range;JU.range;tN.range;const Ym=xn(i=>{i.setDate(1),i.setHours(0,0,0,0)},(i,t)=>{i.setMonth(i.getMonth()+t)},(i,t)=>t.getMonth()-i.getMonth()+(t.getFullYear()-i.getFullYear())*12,i=>i.getMonth());Ym.range;const eN=xn(i=>{i.setUTCDate(1),i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCMonth(i.getUTCMonth()+t)},(i,t)=>t.getUTCMonth()-i.getUTCMonth()+(t.getUTCFullYear()-i.getUTCFullYear())*12,i=>i.getUTCMonth());eN.range;const wa=xn(i=>{i.setMonth(0,1),i.setHours(0,0,0,0)},(i,t)=>{i.setFullYear(i.getFullYear()+t)},(i,t)=>t.getFullYear()-i.getFullYear(),i=>i.getFullYear());wa.every=i=>!isFinite(i=Math.floor(i))||!(i>0)?null:xn(t=>{t.setFullYear(Math.floor(t.getFullYear()/i)*i),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*i)});wa.range;const Kr=xn(i=>{i.setUTCMonth(0,1),i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCFullYear(i.getUTCFullYear()+t)},(i,t)=>t.getUTCFullYear()-i.getUTCFullYear(),i=>i.getUTCFullYear());Kr.every=i=>!isFinite(i=Math.floor(i))||!(i>0)?null:xn(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/i)*i),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*i)});Kr.range;function nN(i,t,n,r,o,c){const u=[[eo,1,ya],[eo,5,5*ya],[eo,15,15*ya],[eo,30,30*ya],[c,1,vi],[c,5,5*vi],[c,15,15*vi],[c,30,30*vi],[o,1,Sa],[o,3,3*Sa],[o,6,6*Sa],[o,12,12*Sa],[r,1,Aa],[r,2,2*Aa],[n,1,Vm],[t,1,iy],[t,3,3*iy],[i,1,dp]];function h(d,g,v){const _=g<d;_&&([d,g]=[g,d]);const y=v&&typeof v.range=="function"?v:p(d,g,v),E=y?y.range(d,+g+1):[];return _?E.reverse():E}function p(d,g,v){const _=Math.abs(g-d)/v,y=Nm(([,,S])=>S).right(u,_);if(y===u.length)return i.every(lm(d/dp,g/dp,v));if(y===0)return cf.every(Math.max(lm(d,g,v),1));const[E,b]=u[_/u[y-1][2]<u[y][2]/_?y-1:y];return E.every(b)}return[h,p]}const[iN,aN]=nN(wa,Ym,yf,Wl,Xm,km);function pp(i){if(0<=i.y&&i.y<100){var t=new Date(-1,i.m,i.d,i.H,i.M,i.S,i.L);return t.setFullYear(i.y),t}return new Date(i.y,i.m,i.d,i.H,i.M,i.S,i.L)}function mp(i){if(0<=i.y&&i.y<100){var t=new Date(Date.UTC(-1,i.m,i.d,i.H,i.M,i.S,i.L));return t.setUTCFullYear(i.y),t}return new Date(Date.UTC(i.y,i.m,i.d,i.H,i.M,i.S,i.L))}function bl(i,t,n){return{y:i,m:t,d:n,H:0,M:0,S:0,L:0}}function rN(i){var t=i.dateTime,n=i.date,r=i.time,o=i.periods,c=i.days,u=i.shortDays,h=i.months,p=i.shortMonths,d=Tl(o),g=Al(o),v=Tl(c),_=Al(c),y=Tl(u),E=Al(u),b=Tl(h),S=Al(h),x=Tl(p),P=Al(p),N={a:Z,A:q,b:ht,B:C,c:null,d:cy,e:cy,f:RN,g:BN,G:HN,H:TN,I:AN,j:wN,L:BS,m:CN,M:DN,p:nt,q:At,Q:hy,s:dy,S:UN,u:NN,U:LN,V:ON,w:PN,W:zN,x:null,X:null,y:FN,Y:IN,Z:GN,"%":fy},D={a:Ct,A:W,b:xt,B:St,c:null,d:uy,e:uy,f:WN,g:eL,G:iL,H:VN,I:kN,j:XN,L:HS,m:YN,M:qN,p:ct,q:Ut,Q:hy,s:dy,S:jN,u:ZN,U:KN,V:QN,w:$N,W:JN,x:null,X:null,y:tL,Y:nL,Z:aL,"%":fy},G={a:R,A:I,b:Y,B:et,c:gt,d:oy,e:oy,f:SN,g:sy,G:ry,H:ly,I:ly,j:_N,L:yN,m:gN,M:vN,p:U,q:mN,Q:EN,s:bN,S:xN,u:uN,U:fN,V:hN,w:cN,W:dN,x:dt,X:F,y:sy,Y:ry,Z:pN,"%":MN};N.x=z(n,N),N.X=z(r,N),N.c=z(t,N),D.x=z(n,D),D.X=z(r,D),D.c=z(t,D);function z(pt,Rt){return function(mt){var j=[],wt=-1,L=0,de=pt.length,zt,It,kt;for(mt instanceof Date||(mt=new Date(+mt));++wt<de;)pt.charCodeAt(wt)===37&&(j.push(pt.slice(L,wt)),(It=ay[zt=pt.charAt(++wt)])!=null?zt=pt.charAt(++wt):It=zt==="e"?" ":"0",(kt=Rt[zt])&&(zt=kt(mt,It)),j.push(zt),L=wt+1);return j.push(pt.slice(L,wt)),j.join("")}}function B(pt,Rt){return function(mt){var j=bl(1900,void 0,1),wt=X(j,pt,mt+="",0),L,de;if(wt!=mt.length)return null;if("Q"in j)return new Date(j.Q);if("s"in j)return new Date(j.s*1e3+("L"in j?j.L:0));if(Rt&&!("Z"in j)&&(j.Z=0),"p"in j&&(j.H=j.H%12+j.p*12),j.m===void 0&&(j.m="q"in j?j.q:0),"V"in j){if(j.V<1||j.V>53)return null;"w"in j||(j.w=1),"Z"in j?(L=mp(bl(j.y,0,1)),de=L.getUTCDay(),L=de>4||de===0?ff.ceil(L):ff(L),L=Wm.offset(L,(j.V-1)*7),j.y=L.getUTCFullYear(),j.m=L.getUTCMonth(),j.d=L.getUTCDate()+(j.w+6)%7):(L=pp(bl(j.y,0,1)),de=L.getDay(),L=de>4||de===0?uf.ceil(L):uf(L),L=Wl.offset(L,(j.V-1)*7),j.y=L.getFullYear(),j.m=L.getMonth(),j.d=L.getDate()+(j.w+6)%7)}else("W"in j||"U"in j)&&("w"in j||(j.w="u"in j?j.u%7:"W"in j?1:0),de="Z"in j?mp(bl(j.y,0,1)).getUTCDay():pp(bl(j.y,0,1)).getDay(),j.m=0,j.d="W"in j?(j.w+6)%7+j.W*7-(de+5)%7:j.w+j.U*7-(de+6)%7);return"Z"in j?(j.H+=j.Z/100|0,j.M+=j.Z%100,mp(j)):pp(j)}}function X(pt,Rt,mt,j){for(var wt=0,L=Rt.length,de=mt.length,zt,It;wt<L;){if(j>=de)return-1;if(zt=Rt.charCodeAt(wt++),zt===37){if(zt=Rt.charAt(wt++),It=G[zt in ay?Rt.charAt(wt++):zt],!It||(j=It(pt,mt,j))<0)return-1}else if(zt!=mt.charCodeAt(j++))return-1}return j}function U(pt,Rt,mt){var j=d.exec(Rt.slice(mt));return j?(pt.p=g.get(j[0].toLowerCase()),mt+j[0].length):-1}function R(pt,Rt,mt){var j=y.exec(Rt.slice(mt));return j?(pt.w=E.get(j[0].toLowerCase()),mt+j[0].length):-1}function I(pt,Rt,mt){var j=v.exec(Rt.slice(mt));return j?(pt.w=_.get(j[0].toLowerCase()),mt+j[0].length):-1}function Y(pt,Rt,mt){var j=x.exec(Rt.slice(mt));return j?(pt.m=P.get(j[0].toLowerCase()),mt+j[0].length):-1}function et(pt,Rt,mt){var j=b.exec(Rt.slice(mt));return j?(pt.m=S.get(j[0].toLowerCase()),mt+j[0].length):-1}function gt(pt,Rt,mt){return X(pt,t,Rt,mt)}function dt(pt,Rt,mt){return X(pt,n,Rt,mt)}function F(pt,Rt,mt){return X(pt,r,Rt,mt)}function Z(pt){return u[pt.getDay()]}function q(pt){return c[pt.getDay()]}function ht(pt){return p[pt.getMonth()]}function C(pt){return h[pt.getMonth()]}function nt(pt){return o[+(pt.getHours()>=12)]}function At(pt){return 1+~~(pt.getMonth()/3)}function Ct(pt){return u[pt.getUTCDay()]}function W(pt){return c[pt.getUTCDay()]}function xt(pt){return p[pt.getUTCMonth()]}function St(pt){return h[pt.getUTCMonth()]}function ct(pt){return o[+(pt.getUTCHours()>=12)]}function Ut(pt){return 1+~~(pt.getUTCMonth()/3)}return{format:function(pt){var Rt=z(pt+="",N);return Rt.toString=function(){return pt},Rt},parse:function(pt){var Rt=B(pt+="",!1);return Rt.toString=function(){return pt},Rt},utcFormat:function(pt){var Rt=z(pt+="",D);return Rt.toString=function(){return pt},Rt},utcParse:function(pt){var Rt=B(pt+="",!0);return Rt.toString=function(){return pt},Rt}}}var ay={"-":"",_:" ",0:"0"},Tn=/^\s*\d+/,sN=/^%/,oN=/[\\^$*+?|[\]().{}]/g;function Le(i,t,n){var r=i<0?"-":"",o=(r?-i:i)+"",c=o.length;return r+(c<n?new Array(n-c+1).join(t)+o:o)}function lN(i){return i.replace(oN,"\\$&")}function Tl(i){return new RegExp("^(?:"+i.map(lN).join("|")+")","i")}function Al(i){return new Map(i.map((t,n)=>[t.toLowerCase(),n]))}function cN(i,t,n){var r=Tn.exec(t.slice(n,n+1));return r?(i.w=+r[0],n+r[0].length):-1}function uN(i,t,n){var r=Tn.exec(t.slice(n,n+1));return r?(i.u=+r[0],n+r[0].length):-1}function fN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.U=+r[0],n+r[0].length):-1}function hN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.V=+r[0],n+r[0].length):-1}function dN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.W=+r[0],n+r[0].length):-1}function ry(i,t,n){var r=Tn.exec(t.slice(n,n+4));return r?(i.y=+r[0],n+r[0].length):-1}function sy(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function pN(i,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(i.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function mN(i,t,n){var r=Tn.exec(t.slice(n,n+1));return r?(i.q=r[0]*3-3,n+r[0].length):-1}function gN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.m=r[0]-1,n+r[0].length):-1}function oy(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.d=+r[0],n+r[0].length):-1}function _N(i,t,n){var r=Tn.exec(t.slice(n,n+3));return r?(i.m=0,i.d=+r[0],n+r[0].length):-1}function ly(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.H=+r[0],n+r[0].length):-1}function vN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.M=+r[0],n+r[0].length):-1}function xN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.S=+r[0],n+r[0].length):-1}function yN(i,t,n){var r=Tn.exec(t.slice(n,n+3));return r?(i.L=+r[0],n+r[0].length):-1}function SN(i,t,n){var r=Tn.exec(t.slice(n,n+6));return r?(i.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function MN(i,t,n){var r=sN.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function EN(i,t,n){var r=Tn.exec(t.slice(n));return r?(i.Q=+r[0],n+r[0].length):-1}function bN(i,t,n){var r=Tn.exec(t.slice(n));return r?(i.s=+r[0],n+r[0].length):-1}function cy(i,t){return Le(i.getDate(),t,2)}function TN(i,t){return Le(i.getHours(),t,2)}function AN(i,t){return Le(i.getHours()%12||12,t,2)}function wN(i,t){return Le(1+Wl.count(wa(i),i),t,3)}function BS(i,t){return Le(i.getMilliseconds(),t,3)}function RN(i,t){return BS(i,t)+"000"}function CN(i,t){return Le(i.getMonth()+1,t,2)}function DN(i,t){return Le(i.getMinutes(),t,2)}function UN(i,t){return Le(i.getSeconds(),t,2)}function NN(i){var t=i.getDay();return t===0?7:t}function LN(i,t){return Le(yf.count(wa(i)-1,i),t,2)}function IS(i){var t=i.getDay();return t>=4||t===0?_o(i):_o.ceil(i)}function ON(i,t){return i=IS(i),Le(_o.count(wa(i),i)+(wa(i).getDay()===4),t,2)}function PN(i){return i.getDay()}function zN(i,t){return Le(uf.count(wa(i)-1,i),t,2)}function FN(i,t){return Le(i.getFullYear()%100,t,2)}function BN(i,t){return i=IS(i),Le(i.getFullYear()%100,t,2)}function IN(i,t){return Le(i.getFullYear()%1e4,t,4)}function HN(i,t){var n=i.getDay();return i=n>=4||n===0?_o(i):_o.ceil(i),Le(i.getFullYear()%1e4,t,4)}function GN(i){var t=i.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Le(t/60|0,"0",2)+Le(t%60,"0",2)}function uy(i,t){return Le(i.getUTCDate(),t,2)}function VN(i,t){return Le(i.getUTCHours(),t,2)}function kN(i,t){return Le(i.getUTCHours()%12||12,t,2)}function XN(i,t){return Le(1+Wm.count(Kr(i),i),t,3)}function HS(i,t){return Le(i.getUTCMilliseconds(),t,3)}function WN(i,t){return HS(i,t)+"000"}function YN(i,t){return Le(i.getUTCMonth()+1,t,2)}function qN(i,t){return Le(i.getUTCMinutes(),t,2)}function jN(i,t){return Le(i.getUTCSeconds(),t,2)}function ZN(i){var t=i.getUTCDay();return t===0?7:t}function KN(i,t){return Le(FS.count(Kr(i)-1,i),t,2)}function GS(i){var t=i.getUTCDay();return t>=4||t===0?vo(i):vo.ceil(i)}function QN(i,t){return i=GS(i),Le(vo.count(Kr(i),i)+(Kr(i).getUTCDay()===4),t,2)}function $N(i){return i.getUTCDay()}function JN(i,t){return Le(ff.count(Kr(i)-1,i),t,2)}function tL(i,t){return Le(i.getUTCFullYear()%100,t,2)}function eL(i,t){return i=GS(i),Le(i.getUTCFullYear()%100,t,2)}function nL(i,t){return Le(i.getUTCFullYear()%1e4,t,4)}function iL(i,t){var n=i.getUTCDay();return i=n>=4||n===0?vo(i):vo.ceil(i),Le(i.getUTCFullYear()%1e4,t,4)}function aL(){return"+0000"}function fy(){return"%"}function hy(i){return+i}function dy(i){return Math.floor(+i/1e3)}var Ks,VS;rL({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function rL(i){return Ks=rN(i),VS=Ks.format,Ks.parse,Ks.utcFormat,Ks.utcParse,Ks}function sL(i){return new Date(i)}function oL(i){return i instanceof Date?+i:+new Date(+i)}function kS(i,t,n,r,o,c,u,h,p,d){var g=PS(),v=g.invert,_=g.domain,y=d(".%L"),E=d(":%S"),b=d("%I:%M"),S=d("%I %p"),x=d("%a %d"),P=d("%b %d"),N=d("%B"),D=d("%Y");function G(z){return(p(z)<z?y:h(z)<z?E:u(z)<z?b:c(z)<z?S:r(z)<z?o(z)<z?x:P:n(z)<z?N:D)(z)}return g.invert=function(z){return new Date(v(z))},g.domain=function(z){return arguments.length?_(Array.from(z,oL)):_().map(sL)},g.ticks=function(z){var B=_();return i(B[0],B[B.length-1],z??10)},g.tickFormat=function(z,B){return B==null?G:d(B)},g.nice=function(z){var B=_();return(!z||typeof z.range!="function")&&(z=t(B[0],B[B.length-1],z??10)),z?_(kU(B,z)):g},g.copy=function(){return OS(g,kS(i,t,n,r,o,c,u,h,p,d))},g}function lL(){return LS.apply(kS(iN,aN,wa,Ym,yf,Wl,Xm,km,eo,VS).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Ul(i,t,n){this.k=i,this.x=t,this.y=n}Ul.prototype={constructor:Ul,scale:function(i){return i===1?this:new Ul(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new Ul(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Ul.prototype;const cL=({data:i,burstGap:t=6e4,currentTime:n,lang:r="en"})=>{const o=jt.useRef(),[c,u]=jt.useState([]),h=r==="de"?"Retweet-Ausbruchsgrößen im Zeitverlauf":"Retweet Burst Sizes Over Time";return jt.useEffect(()=>{if(!i||i.length===0){u([]);return}const p=[...i].sort((_,y)=>new Date(_.creation_time)-new Date(y.creation_time)),d=[];let g=[];p.forEach((_,y)=>{const E=new Date(_.creation_time);if(y===0)g.push(_);else{const b=new Date(p[y-1].creation_time);E-b>t&&(d.push(g),g=[]),g.push(_)}}),g.length&&d.push(g);const v=d.map(_=>({time:new Date(_[0].creation_time),size:_.length}));u(v)},[i,t]),jt.useEffect(()=>{if(!c.length)return;const p={top:10,right:20,bottom:30,left:40},d=600-p.left-p.right,g=150-p.top-p.bottom,v=Fx(o.current).html("").append("svg").attr("viewBox",`0 0 ${d+p.left+p.right} ${g+p.top+p.bottom}`).append("g").attr("transform",`translate(${p.left},${p.top})`),_=lL().domain(X2(c,b=>b.time)).range([0,d]),y=zS().domain([0,Z2(c,b=>b.size)]).nice().range([g,0]);v.append("g").attr("transform",`translate(0,${g})`).call(nC(_).ticks(5).tickSizeOuter(0)),v.append("g").call(iC(y).ticks(4));const E=d/c.length*.8;v.append("g").attr("class","bars").selectAll("rect").data(c).enter().append("rect").attr("class","bar").attr("x",b=>_(b.time)-E/2).attr("y",b=>y(b.size)).attr("width",E).attr("height",b=>g-y(b.size)).attr("fill","#06b6d4").attr("opacity",0)},[c]),jt.useEffect(()=>{if(!c.length||!n)return;Fx(o.current).select("svg g").selectAll("rect.bar").transition().duration(200).attr("opacity",g=>g.time<=n?1:.2)},[n,c]),ot.jsxs("div",{className:"mt-4 bg-black/50 p-4 rounded-lg border border-cyan-500 shadow-lg",children:[ot.jsx("h3",{className:"text-white font-bold mb-2",children:h}),ot.jsx("div",{ref:o})]})};function gp(i){const t=i.toLocaleString("en-US",{month:"long"}),n=i.getDate(),r=i.getFullYear(),o=n%10===1&&n!==11?"st":n%10===2&&n!==12?"nd":n%10===3&&n!==13?"rd":"th";let c=i.getHours();const u=c>=12?"PM":"AM";c=c%12||12;const h=String(i.getMinutes()).padStart(2,"0"),p=String(i.getSeconds()).padStart(2,"0");return`${t} ${n}${o}, ${r}, ${String(c).padStart(2,"0")}:${h}:${p} ${u}`}const uL=["#440154","#472D7B","#3B518B","#2C718E","#21918C","#27AD81","#5CC863","#BADC31"],fL=["#00204C","#143362","#1D5796","#2C75A0","#3D8C8E","#60B56B","#AAD338","#FDE725"],hL=["#0D0887","#4B03A5","#7A04A6","#A61386","#D4316E","#F1605D","#FD8C3E","#FCCE25"],dL=["#000004","#1B0C41","#4A0C6B","#781C6D","#A52C60","#CF4446","#ED6925","#FB9B06"];function Nu(i,t){return Array.from({length:t},(n,r)=>{const o=Math.round(r*(i.length-1)/(t-1));return i[o]})}const _p={default:i=>Nu(uL,i),protanopia:i=>Nu(fL,i),deuteranopia:i=>Nu(hL,i),tritanopia:i=>Nu(dL,i),party:()=>[]},pL={FDP:"#FFED00","B90/GRÜNE":"#1FAF12",SPD:"#FF0000",CDU:"#000000",AfD:"#009DE0",BSW:"#fca311",CSU:"#415a77",LINKE:"#DF007D"},mL=({onSwitch:i})=>{const t=jt.useRef(null),[n,r]=jt.useState(!0),[o,c]=jt.useState(""),[u,h]=jt.useState(null),[p,d]=jt.useState(!1),[g,v]=jt.useState(0),[_,y]=jt.useState(!1),E=jt.useRef(null),b=jt.useRef(null),S=jt.useRef(null),x=jt.useRef(null),P=jt.useRef({x:0,y:0}),N=jt.useRef({x:0,y:0}),D=jt.useRef(0),G=jt.useRef(2e3),z=jt.useRef([]),B=jt.useRef({min:null,max:null}),X=jt.useRef(null),U=jt.useRef(null),[R,I]=jt.useState(null),[Y,et]=jt.useState(null),[gt,dt]=jt.useState(2),[F,Z]=jt.useState("default"),[q,ht]=jt.useState([]),[C,nt]=jt.useState("en"),At=Array.from({length:20},(mt,j)=>j+1),Ct=Y&&Y[0]?C==="en"?Y[0].text_en:Y[0].text:"",W={en:{titleLine1:"From Tweet to Trend:",titleLine2:"Visualizing Political Retweet Networks",simulation:"Retweet Simulation",currentTime:"Current Time:",originalBy:"Original tweet by",selectPost:"Select a post to see its retweet activity:",legend:"LEGEND",colorScheme:"Color Scheme",nodeSize:"Node Size",play:"Play",pause:"Pause",switchViz:"Explore Bursts & Network",return:"Return",earliestLatest:"Earliest → Latest",lowFollower:"Low Follower Count",highFollower:"High Follower Count",optPartyColors:"Political party colors",optDefault:"Default",optProtanopia:"Protanopia-friendly",optDeuteranopia:"Deuteranopia-friendly",optTritanopia:"Tritanopia-friendly",titles:{2:"Conservatives serve Europe",3:"Hope for Tomorrow",4:"Election Allegations",5:"Catalyst for Change",6:"Show Your Colors",7:"Advent Interrupted",9:"Suspending Documentation",10:"Tax Relief",11:"Coalition Opportunity",12:"Small Shifts, Big Impact",13:"Voting Paradox",14:"Economic Turnaround Now",15:"",16:"",17:"",18:"",19:"",20:""}},de:{titleLine1:"Vom Tweet zum Trend:",titleLine2:"Politische Retweet-Netzwerke visualisieren",simulation:"Simulation der Retweets",currentTime:"Aktuelle Zeit:",originalBy:"Original-Tweet von",selectPost:"Wählen Sie einen Beitrag, um Retweet-Aktivität zu sehen:",legend:"LEGENDE",colorScheme:"Farb-Schema",nodeSize:"Knotengröße",play:"Abspielen",pause:"Pause",switchViz:"Bursts & Netzwerk erkunden",return:"Return",earliestLatest:"Früheste → Neueste",lowFollower:"Geringe Follower-Zahl",highFollower:"Hohe Follower-Zahl",optPartyColors:"Parteifarben",optDefault:"Standard",optProtanopia:"Protanopie-freundlich",optDeuteranopia:"Deuteranopie-freundlich",optTritanopia:"Tritanopie-freundlich",titles:{1:"Aufmerksamkeit erbeten",2:"Konservative dienen Europa",3:"Hoffnung für morgen",4:"Wahlvorwürfe",5:"Katalysator für Veränderung",6:"Zeigt eure Farben",7:"Unterbrochener Advent",8:"Aus Gründen",9:"Aussetzung der Dokumentation",10:"Steuererleichterungen",11:"Koalitionschance",12:"Kleine Veränderungen, große Wirkung",13:"Wahlparadox",14:"Wirtschaftliche Trendwende jetzt",15:"",16:"",17:"",18:"",19:"",20:""}}};jt.useEffect(()=>{fetch(`https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_${gt}.json`).then(mt=>mt.json()).then(mt=>{const j=mt.sort((wt,L)=>new Date(wt.creation_time)-new Date(L.creation_time));et(j),j.length&&c(gp(new Date(j[0].creation_time)))}),fetch("https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_original_tweets.json").then(mt=>mt.json()).then(mt=>{const j=mt.reduce((wt,L)=>(wt[L.platform_post_id]=L,wt),{});I(j)})},[gt]),jt.useEffect(()=>{fetch("https://synosys.github.io/cosmo-exhibition-social-media/data/selected_retweets_original_tweets.json").then(mt=>mt.json()).then(mt=>{const j=mt.reduce((wt,L)=>(wt[L.platform_post_id]=L,wt),{});I(j)}).catch(mt=>{console.error("Error loading original tweet details:",mt)})},[]),jt.useEffect(()=>{if(!Y)return;const mt=new zy;mt.background=new be(0),b.current=mt;const j=new ri(75,window.innerWidth/window.innerHeight,.1,1e3);j.position.z=15,S.current=j;const wt=new jy({antialias:!0});wt.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(wt.domElement),x.current=wt;const L=new nS(j,wt.domElement);L.enableDamping=!0,L.dampingFactor=.1,L.enableZoom=!0,L.zoomSpeed=1.2,L.enablePan=!0,L.rotateSpeed=.8;const de=Ft=>{Ft.preventDefault();const Kt=.05;S.current.position.z+=Ft.deltaY*Kt,S.current.position.z=Math.max(5,Math.min(50,S.current.position.z))};wt.domElement.addEventListener("wheel",de,{passive:!1});const zt=new $s;mt.add(zt);const It=(Ft,Kt,he=0)=>{const V=document.createElement("canvas"),Pt=V.getContext("2d");V.width=256,V.height=128,Pt.font="12px Arial",Pt.fillStyle=`rgba(${he>>16&255}, ${he>>8&255}, ${he&255}, 1.0)`,Pt.fillText(Ft,0,64);const ft=new Qu(V),Et=new Rm({map:ft}),Gt=new By(Et);return Gt.position.set(Kt.x-2,Kt.y+.2,Kt.z),Gt.scale.set(5,2.5,1),Gt},kt=new ho(1,32,32),xe=new uo({color:4886754}),Zt=new si(kt,xe);Zt.visible=!0,zt.add(Zt),X.current=Zt;const O=It("Original Tweet by @roberthabeck",new J(0,0,0),1942002);O.visible=!0,zt.add(O),U.current=O;const T=new Date(Y[0].creation_time),at=new Date(Y[Y.length-1].creation_time);B.current={min:T,max:at};let Mt;F==="party"?Mt=Y.map(Ft=>Ft.party_color):Mt=_p[F](Y.length);const Dt=6e4,_t=[];let Ht=[];for(let Ft=0;Ft<Y.length;Ft++){const Kt=Y[Ft],he=new Date(Kt.creation_time);if(Ft===0)Ht.push(Kt);else{const V=new Date(Y[Ft-1].creation_time);he-V>Dt&&(_t.push(Ht),Ht=[]),Ht.push(Kt)}}Ht.length>0&&_t.push(Ht),_t.forEach((Ft,Kt)=>{const he=Ft[0].creation_time,V=Ft[Ft.length-1].creation_time,Pt=Ft.map(ft=>ft.dboes_name).join(", ");console.log(`Burst ${Kt+1} (${Ft.length} tweets, ${he} → ${V}):`,Pt)});const yt=[];let Lt=0;_t.forEach((Ft,Kt)=>{const he=Kt/_t.length*Math.PI*2;Ft.forEach((V,Pt)=>{Lt++;const ft=new Date(V.creation_time),Gt=2+(Ft.length>1?Pt/(Ft.length-1):.5)*10,Bt=Math.cos(he)*Gt,oe=Math.sin(he)*Gt,Je=.3+parseFloat(V.follower_count)/1e6*.7,we=new ho(Je,32,32),Dn=Mt[Lt%Mt.length],ln=new uo({color:new be(Dn),transparent:!0,opacity:0}),je=new si(we,ln);je.position.set(Bt,oe,0),je.userData={data:V,time:ft,visible:!1};const an=It(V.dboes_name,new J(Bt,oe,0),16777215);an.visible=!1;const Un=Pt===0?new J(0,0,0):yt[yt.length-1].node.position,Xi=new Cm({color:new be(Dn),transparent:!0,opacity:0}),ts=new xi().setFromPoints([Un,new J(Bt,oe,0)]),dr=new Hy(ts,Xi);zt.add(je),zt.add(an),zt.add(dr),yt.push({node:je,label:an,line:dr,time:ft})})}),z.current=yt,h(B.current.min),c(gp(B.current.min)),r(!1);const ue=Ft=>{document.addEventListener("mousemove",Nt),document.addEventListener("mouseup",Wt),P.current.x=Ft.clientX,P.current.y=Ft.clientY},Nt=Ft=>{const Kt=Ft.clientX-P.current.x,he=Ft.clientY-P.current.y;P.current.x=Ft.clientX,P.current.y=Ft.clientY,N.current.y+=Kt*.01,N.current.x+=he*.01},Wt=()=>{document.removeEventListener("mousemove",Nt),document.removeEventListener("mouseup",Wt)};wt.domElement.addEventListener("mousedown",ue);const Jt=()=>{S.current&&x.current&&(S.current.aspect=window.innerWidth/window.innerHeight,S.current.updateProjectionMatrix(),x.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Jt),wt.render(mt,j);const te=()=>{const Ft=t.current.clientWidth,Kt=t.current.clientHeight;wt.setSize(Ft,Kt),j.aspect=Ft/Kt,j.updateProjectionMatrix()};window.addEventListener("resize",te),te();const Vt=()=>{zt.rotation.x+=(N.current.x-zt.rotation.x)*.05,zt.rotation.y+=(N.current.y-zt.rotation.y)*.05,x.current&&b.current&&S.current&&x.current.render(b.current,S.current),L.update(),wt.render(mt,j),E.current=requestAnimationFrame(Vt)};return E.current=requestAnimationFrame(Vt),()=>{window.removeEventListener("resize",te),window.removeEventListener("resize",Jt),cancelAnimationFrame(E.current),wt.domElement.removeEventListener("mousedown",ue),wt.domElement.removeEventListener("wheel",de),document.removeEventListener("mousemove",Nt),document.removeEventListener("mouseup",Wt),t.current&&wt.domElement&&t.current.removeChild(wt.domElement),kt.dispose(),xe.dispose(),yt.forEach(Ft=>{Ft.node.geometry&&Ft.node.geometry.dispose(),Ft.node.material&&Ft.node.material.dispose(),Ft.line.geometry&&Ft.line.geometry.dispose(),Ft.line.material&&Ft.line.material.dispose()})}},[Y]),jt.useEffect(()=>{let mt;return p&&(D.current=Date.now(),X.current&&(X.current.visible=!0),U.current&&(U.current.visible=!0),mt=setInterval(()=>{const{min:j,max:wt}=B.current;if(!j||!wt)return;const de=(Date.now()-D.current)*G.current,zt=new Date(j.getTime()+de),It=wt.getTime()-j.getTime(),kt=zt.getTime()-j.getTime(),xe=Math.min(kt/It*100,100);h(zt),c(gp(zt)),v(xe),z.current.forEach(Zt=>{if(zt>=Zt.time&&!Zt.node.userData.visible){Zt.node.material.opacity=1,Zt.label.visible=!0,Zt.line.material.opacity=.7,Zt.node.userData.visible=!0;const O=new J(1.5,1.5,1.5);Zt.node.scale.copy(O),setTimeout(()=>{Zt.node.scale.set(1,1,1)},300)}}),zt>=wt&&(d(!1),clearInterval(mt))},100)),()=>{mt&&clearInterval(mt)}},[p]),jt.useEffect(()=>{if(!Y)return;const mt=new Vy,j=new fe,wt=L=>{j.x=L.clientX/window.innerWidth*2-1,j.y=-(L.clientY/window.innerHeight)*2+1,mt.setFromCamera(j,S.current);const de=z.current.map(It=>It.node),zt=mt.intersectObjects(de);if(zt.length>0){const It=zt[0].object;z.current.forEach(kt=>{kt.node===It?(kt.node.material.opacity=1,kt.label.material&&(kt.label.material.opacity=1)):(kt.node.material.opacity=.3,kt.label.material&&(kt.label.material.opacity=.3))})}else z.current.forEach(It=>{It.node.userData.visible?(It.node.material.opacity=1,It.label.material&&(It.label.material.opacity=1)):(It.node.material.opacity=0,It.label.material&&(It.label.material.opacity=0))})};return window.addEventListener("mousemove",wt),()=>{window.removeEventListener("mousemove",wt)}},[Y]),jt.useEffect(()=>{X.current&&U.current&&(X.current.visible=!0,U.current.visible=!0)},[gt]);const xt=()=>{p?d(!1):(g>=100&&(z.current.forEach(mt=>{mt.node.material.opacity=0,mt.label.visible=!1,mt.line.material.opacity=0,mt.node.userData.visible=!1}),c(B.current.min),v(0)),d(!0))},St=Y&&R&&Y[0]?R[Y[0].shared_post_id]:null;jt.useEffect(()=>{var mt;if(Y&&R&&((mt=Y[0])!=null&&mt.shared_post_id)&&U.current){const j=Y[0].shared_post_id,wt=R[j];if(wt){const de=`Original Tweet by @${wt.platform_post_owner_name}`,zt=document.createElement("canvas"),It=zt.getContext("2d");zt.width=256,zt.height=128,It.font="12px Arial",It.fillStyle="rgba(29,161,242,1.0)",It.fillText(de,0,64);const kt=new Qu(zt);U.current.material.map=kt,U.current.material.needsUpdate=!0}}},[Y,R]),jt.useEffect(()=>{if(!z.current.length||!Y)return;let mt;if(F==="party")mt=Y.map(j=>j.party_color);else{const j=z.current.length;mt=_p[F](j)}z.current.forEach((j,wt)=>{const L=new be(mt[wt%mt.length]);j.node.material.color.set(L),j.line.material.color.set(L)})},[F,Y]);const ct=At.map(mt=>({id:mt,label:W[C].titles[mt]||""})),Rt=`linear-gradient(to right, ${(F==="party"?[...new Set(Y.map(mt=>mt.party_color))]:_p[F](7)).join(", ")})`;return ot.jsxs("div",{className:"w-full h-full relative bg-black",children:[ot.jsx("div",{ref:t,className:"w-full h-[50vh] mt-[50vh] md:h-screen md:mt-0"}),ot.jsxs("h2",{className:"absolute top-20 -mt-5 mr-5 md:top-5 md:mt-0 md:mr-0 left-10",children:[ot.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:W[C].titleLine1}),ot.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:W[C].titleLine2})]}),ot.jsx("div",{className:"absolute top-4 right-10 flex space-x-2",children:["en","de"].map(mt=>ot.jsx("button",{onClick:()=>nt(mt),className:`px-3 py-1 rounded border ${C===mt?"bg-cyan-500 text-black border-cyan-500":"bg-black text-white border-gray-600 hover:border-cyan-500"} transition`,children:mt.toUpperCase()},mt))}),ot.jsx("div",{className:`
      relative 
      mb-4 mt-5 
      w-full max-w-[30rem] mx-auto
      overflow-hidden
      md:overflow-visible md:px-0 
      md:absolute md:top-80 md:left-10 md:mb-0 md:mt-0 md:w-[30rem]
    `,children:ot.jsx(cL,{data:Y,currentTime:u,lang:C})}),ot.jsxs("div",{className:`
        relative            /* mobile: in-flow */
        mb-4                /* mobile: gap below */
        left-10
        w-[30rem]
        md:absolute md:top-40 md:left-10  /* desktop: back to absolute */
        bg-black w-[30rem] p-6 rounded-lg border border-cyan-500 shadow-lg
      `,children:[" ",ot.jsx("div",{className:"font-bold mb-2 text-white text-xl",children:W[C].simulation}),ot.jsxs("div",{className:"mb-2 text-white",children:[W[C].currentTime," ",u&&u.toLocaleString()]}),ot.jsx("div",{className:"w-64 h-2 bg-gray-800 rounded-full mb-2",children:ot.jsx("div",{className:"h-full bg-cyan-500 rounded-full",style:{width:`${g}%`}})}),St&&ot.jsxs("div",{className:"text-white text-sm",children:[W[C].originalBy," @",St.platform_post_owner_name," –"," ",Y.length,Y.length>1?" Accounts":" Account"]})]}),ot.jsxs("div",{className:"relative mt-4 w-full max-w-[30rem] mx-auto md:absolute md:top-80 md:mt-60 md:left-10 md:w-[30rem] bg-gray-900 bg-opacity-80 p-4 rounded-lg border border-cyan-500 shadow-xl text-white",children:[ot.jsx("div",{className:"font-mono mb-4 text-sm sm:text-md md:text-md lg:text-md xl:text-md xl:text-md",children:Ct.replace(/^RT @[A-Za-z0-9_]+:\s*/,"").replace(/https:\/\/.*/,"")}),St&&ot.jsxs("div",{className:"flex justify-between text-gray-400 text-xs sm:text-sm",children:[ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx(Qy,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:St.views})]}),ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx(Jy,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:St.comment_count})]}),ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx(tS,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:St.share_count})]}),ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx($y,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:St.like_count})]}),ot.jsxs("span",{className:"flex items-center space-x-1",children:[ot.jsx(Ky,{className:"w-4 h-4 md:w-5 md:h-5"}),ot.jsx("span",{children:St.bookmark_count})]})]})]}),ot.jsxs("div",{className:`
          absolute top-[200px] md:top-[440px] 
          left-0 right-0 mx-auto
          md:right-10 md:mt-10 md:left-auto
          text-left md:text-right
          py-2  
          w-full max-w-sm md:max-w-none
          `,children:[ot.jsx("div",{className:"mt-2 text-white text-sm sm:text-md md:text-lg",children:W[C].selectPost}),ot.jsx("div",{className:"text-cyan-500 grid grid-cols-2 gap-2 md:flex md:flex-col md:items-end",children:ct.map(mt=>ot.jsx("span",{onClick:()=>dt(mt.id),className:`
            cursor-pointer
            ${gt===mt.id?"font-bold text-lg sm:text-xl md:text-2xl":"text-sm sm:text-md md:text-lg"}
          `,children:mt.label},mt.id))})]}),ot.jsxs("div",{className:` relative            /* mobile: in-flow */
        mb-4                /* mobile: gap below */
        mt-5
      ml-10
      w-[30rem]
        md:absolute md:right-10 md:top-20 -mt-5 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80`,children:[" ",ot.jsx("div",{className:"font-bold mb-2 text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",children:W[C].legend}),ot.jsx("hr",{className:"border-t-2 border-white my-2"}),ot.jsx("div",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:W[C].colorScheme}),ot.jsxs("div",{className:"text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[ot.jsxs("div",{className:"mb-3",children:[ot.jsx("div",{className:"mb-3",children:ot.jsxs("select",{value:F,onChange:mt=>Z(mt.target.value),className:"p-2 bg-gray-800 text-white rounded",children:[ot.jsx("option",{value:"party",children:W[C].optPartyColors}),ot.jsx("option",{value:"default",children:W[C].optDefault}),ot.jsx("option",{value:"protanopia",children:W[C].optProtanopia}),ot.jsx("option",{value:"deuteranopia",children:W[C].optDeuteranopia}),ot.jsx("option",{value:"tritanopia",children:W[C].optTritanopia})]})}),F==="party"?ot.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(pL).map(([mt,j])=>ot.jsxs("div",{className:"flex items-center space-x-2",children:[ot.jsx("div",{className:"w-4 h-4 border border-gray-600 rounded-sm",style:{backgroundColor:j}}),ot.jsx("span",{className:"text-white text-sm",children:mt})]},mt))}):ot.jsxs(ot.Fragment,{children:[ot.jsx("div",{className:"w-full h-4 rounded",style:{background:Rt}}),ot.jsx("p",{className:"mt-1 text-white",children:W[C].earliestLatest})]})]}),ot.jsxs("div",{children:[ot.jsx("p",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:W[C].nodeSize}),ot.jsxs("div",{className:"flex items-center space-x-2 text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[ot.jsx("div",{className:"w-4 h-4 bg-white ml-2 mr-2 rounded-full border border-cyan-500"}),ot.jsx("span",{children:W[C].lowFollower})]}),ot.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[ot.jsx("div",{className:"w-8 h-8 bg-white rounded-full border border-cyan-500"}),ot.jsx("span",{children:W[C].highFollower})]})]})]})]}),ot.jsxs("div",{className:`
      absolute left-1/2 transform -translate-x-1/2 top-80 mt-60
      flex space-x-4
      md:block md:transform-none md:left-auto md:translate-x-0 md:top-auto md:mt-0
    `,children:[ot.jsx("button",{onClick:xt,className:`
        w-24 md:w-32
        bg-black text-white font-bold
        py-2 md:py-3 px-2 md:px-6
        rounded-lg border border-cyan-500
        shadow-lg hover:bg-gray-900
        transition-colors
        ${p?"":"pulse-once"}
        md:absolute md:bottom-10 md:left-10 md:ml-0
      `,children:p?W[C].pause:W[C].play}),ot.jsx("button",{onClick:i,className:`
            w-24 md:w-32
        bg-black text-white font-bold
        py-2 md:py-3 px-4 md:px-6
        rounded-lg border border-cyan-500
        shadow-lg hover:bg-gray-900
        transition-colors
        ${p?"pulse-once":""}
        md:absolute md:bottom-10 md:left-40 md:ml-4
      `,children:W[C].return})]})]})};function gL(){const[i,t]=jt.useState("circular"),n=()=>{t(r=>r==="circular"?"network":"circular")};return ot.jsx("div",{className:"flex flex-col-reverse md:flex-row items-center md:items-start min-h-screen",children:i==="circular"?ot.jsx(B2,{onSwitch:n}):ot.jsx(mL,{onSwitch:n})})}eb.createRoot(document.getElementById("root")).render(ot.jsx(jt.StrictMode,{children:ot.jsx(gL,{})}));
