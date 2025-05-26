(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var yd={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function XE(){if(vv)return ll;vv=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:i,type:r,key:c,ref:o!==void 0?o:null,props:u}}return ll.Fragment=t,ll.jsx=n,ll.jsxs=n,ll}var xv;function WE(){return xv||(xv=1,yd.exports=XE()),yd.exports}var gt=WE(),Sd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function YE(){if(yv)return de;yv=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(D,nt,At){this.props=D,this.context=nt,this.refs=T,this.updater=At||x}S.prototype.isReactComponent={},S.prototype.setState=function(D,nt){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,nt,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(D,nt,At){this.props=D,this.context=nt,this.refs=T,this.updater=At||x}var N=L.prototype=new y;N.constructor=L,E(N,S.prototype),N.isPureReactComponent=!0;var w=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function F(D,nt,At,_t,$,xt){return At=xt.ref,{$$typeof:i,type:D,key:nt,ref:At!==void 0?At:null,props:xt}}function k(D,nt){return F(D.type,nt,void 0,void 0,void 0,D.props)}function U(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function C(D){var nt={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(At){return nt[At]})}var H=/\/+/g;function j(D,nt){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):nt.toString(36)}function tt(){}function mt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(tt,tt):(D.status="pending",D.then(function(nt){D.status==="pending"&&(D.status="fulfilled",D.value=nt)},function(nt){D.status==="pending"&&(D.status="rejected",D.reason=nt)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function pt(D,nt,At,_t,$){var xt=typeof D;(xt==="undefined"||xt==="boolean")&&(D=null);var it=!1;if(D===null)it=!0;else switch(xt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(D.$$typeof){case i:case t:it=!0;break;case g:return it=D._init,pt(it(D._payload),nt,At,_t,$)}}if(it)return $=$(D),it=_t===""?"."+j(D,0):_t,w($)?(At="",it!=null&&(At=it.replace(H,"$&/")+"/"),pt($,nt,At,"",function(St){return St})):$!=null&&(U($)&&($=k($,At+($.key==null||D&&D.key===$.key?"":(""+$.key).replace(H,"$&/")+"/")+it)),nt.push($)),1;it=0;var Tt=_t===""?".":_t+":";if(w(D))for(var Ct=0;Ct<D.length;Ct++)_t=D[Ct],xt=Tt+j(_t,Ct),it+=pt(_t,nt,At,xt,$);else if(Ct=_(D),typeof Ct=="function")for(D=Ct.call(D),Ct=0;!(_t=D.next()).done;)_t=_t.value,xt=Tt+j(_t,Ct++),it+=pt(_t,nt,At,xt,$);else if(xt==="object"){if(typeof D.then=="function")return pt(mt(D),nt,At,_t,$);throw nt=String(D),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return it}function B(D,nt,At){if(D==null)return D;var _t=[],$=0;return pt(D,_t,"","",function(xt){return nt.call(At,xt,$++)}),_t}function Y(D){if(D._status===-1){var nt=D._result;nt=nt(),nt.then(function(At){(D._status===0||D._status===-1)&&(D._status=1,D._result=At)},function(At){(D._status===0||D._status===-1)&&(D._status=2,D._result=At)}),D._status===-1&&(D._status=0,D._result=nt)}if(D._status===1)return D._result.default;throw D._result}var W=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function dt(){}return de.Children={map:B,forEach:function(D,nt,At){B(D,function(){nt.apply(this,arguments)},At)},count:function(D){var nt=0;return B(D,function(){nt++}),nt},toArray:function(D){return B(D,function(nt){return nt})||[]},only:function(D){if(!U(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},de.Component=S,de.Fragment=n,de.Profiler=o,de.PureComponent=L,de.StrictMode=r,de.Suspense=p,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,de.__COMPILER_RUNTIME={__proto__:null,c:function(D){return I.H.useMemoCache(D)}},de.cache=function(D){return function(){return D.apply(null,arguments)}},de.cloneElement=function(D,nt,At){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var _t=E({},D.props),$=D.key,xt=void 0;if(nt!=null)for(it in nt.ref!==void 0&&(xt=void 0),nt.key!==void 0&&($=""+nt.key),nt)!P.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(_t[it]=nt[it]);var it=arguments.length-2;if(it===1)_t.children=At;else if(1<it){for(var Tt=Array(it),Ct=0;Ct<it;Ct++)Tt[Ct]=arguments[Ct+2];_t.children=Tt}return F(D.type,$,void 0,void 0,xt,_t)},de.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},de.createElement=function(D,nt,At){var _t,$={},xt=null;if(nt!=null)for(_t in nt.key!==void 0&&(xt=""+nt.key),nt)P.call(nt,_t)&&_t!=="key"&&_t!=="__self"&&_t!=="__source"&&($[_t]=nt[_t]);var it=arguments.length-2;if(it===1)$.children=At;else if(1<it){for(var Tt=Array(it),Ct=0;Ct<it;Ct++)Tt[Ct]=arguments[Ct+2];$.children=Tt}if(D&&D.defaultProps)for(_t in it=D.defaultProps,it)$[_t]===void 0&&($[_t]=it[_t]);return F(D,xt,void 0,void 0,null,$)},de.createRef=function(){return{current:null}},de.forwardRef=function(D){return{$$typeof:h,render:D}},de.isValidElement=U,de.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:Y}},de.memo=function(D,nt){return{$$typeof:d,type:D,compare:nt===void 0?null:nt}},de.startTransition=function(D){var nt=I.T,At={};I.T=At;try{var _t=D(),$=I.S;$!==null&&$(At,_t),typeof _t=="object"&&_t!==null&&typeof _t.then=="function"&&_t.then(dt,W)}catch(xt){W(xt)}finally{I.T=nt}},de.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},de.use=function(D){return I.H.use(D)},de.useActionState=function(D,nt,At){return I.H.useActionState(D,nt,At)},de.useCallback=function(D,nt){return I.H.useCallback(D,nt)},de.useContext=function(D){return I.H.useContext(D)},de.useDebugValue=function(){},de.useDeferredValue=function(D,nt){return I.H.useDeferredValue(D,nt)},de.useEffect=function(D,nt,At){var _t=I.H;if(typeof At=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _t.useEffect(D,nt)},de.useId=function(){return I.H.useId()},de.useImperativeHandle=function(D,nt,At){return I.H.useImperativeHandle(D,nt,At)},de.useInsertionEffect=function(D,nt){return I.H.useInsertionEffect(D,nt)},de.useLayoutEffect=function(D,nt){return I.H.useLayoutEffect(D,nt)},de.useMemo=function(D,nt){return I.H.useMemo(D,nt)},de.useOptimistic=function(D,nt){return I.H.useOptimistic(D,nt)},de.useReducer=function(D,nt,At){return I.H.useReducer(D,nt,At)},de.useRef=function(D){return I.H.useRef(D)},de.useState=function(D){return I.H.useState(D)},de.useSyncExternalStore=function(D,nt,At){return I.H.useSyncExternalStore(D,nt,At)},de.useTransition=function(){return I.H.useTransition()},de.version="19.1.0",de}var Sv;function vm(){return Sv||(Sv=1,Sd.exports=YE()),Sd.exports}var Yt=vm(),Md={exports:{}},ul={},Ed={exports:{}},Td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function qE(){return Mv||(Mv=1,function(i){function t(B,Y){var W=B.length;B.push(Y);t:for(;0<W;){var dt=W-1>>>1,D=B[dt];if(0<o(D,Y))B[dt]=Y,B[W]=D,W=dt;else break t}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],W=B.pop();if(W!==Y){B[0]=W;t:for(var dt=0,D=B.length,nt=D>>>1;dt<nt;){var At=2*(dt+1)-1,_t=B[At],$=At+1,xt=B[$];if(0>o(_t,W))$<D&&0>o(xt,_t)?(B[dt]=xt,B[$]=W,dt=$):(B[dt]=_t,B[At]=W,dt=At);else if($<D&&0>o(xt,W))B[dt]=xt,B[$]=W,dt=$;else break t}}return Y}function o(B,Y){var W=B.sortIndex-Y.sortIndex;return W!==0?W:B.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();i.unstable_now=function(){return c.now()-h}}var p=[],d=[],g=1,v=null,_=3,x=!1,E=!1,T=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var Y=n(d);Y!==null;){if(Y.callback===null)r(d);else if(Y.startTime<=B)r(d),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=n(d)}}function I(B){if(T=!1,w(B),!E)if(n(p)!==null)E=!0,P||(P=!0,j());else{var Y=n(d);Y!==null&&pt(I,Y.startTime-B)}}var P=!1,F=-1,k=5,U=-1;function C(){return S?!0:!(i.unstable_now()-U<k)}function H(){if(S=!1,P){var B=i.unstable_now();U=B;var Y=!0;try{t:{E=!1,T&&(T=!1,L(F),F=-1),x=!0;var W=_;try{e:{for(w(B),v=n(p);v!==null&&!(v.expirationTime>B&&C());){var dt=v.callback;if(typeof dt=="function"){v.callback=null,_=v.priorityLevel;var D=dt(v.expirationTime<=B);if(B=i.unstable_now(),typeof D=="function"){v.callback=D,w(B),Y=!0;break e}v===n(p)&&r(p),w(B)}else r(p);v=n(p)}if(v!==null)Y=!0;else{var nt=n(d);nt!==null&&pt(I,nt.startTime-B),Y=!1}}break t}finally{v=null,_=W,x=!1}Y=void 0}}finally{Y?j():P=!1}}}var j;if(typeof N=="function")j=function(){N(H)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,mt=tt.port2;tt.port1.onmessage=H,j=function(){mt.postMessage(null)}}else j=function(){y(H,0)};function pt(B,Y){F=y(function(){B(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var W=_;_=Y;try{return B()}finally{_=W}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=_;_=B;try{return Y()}finally{_=W}},i.unstable_scheduleCallback=function(B,Y,W){var dt=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?dt+W:dt):W=dt,B){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=W+D,B={id:g++,callback:Y,priorityLevel:B,startTime:W,expirationTime:D,sortIndex:-1},W>dt?(B.sortIndex=W,t(d,B),n(p)===null&&B===n(d)&&(T?(L(F),F=-1):T=!0,pt(I,W-dt))):(B.sortIndex=D,t(p,B),E||x||(E=!0,P||(P=!0,j()))),B},i.unstable_shouldYield=C,i.unstable_wrapCallback=function(B){var Y=_;return function(){var W=_;_=Y;try{return B.apply(this,arguments)}finally{_=W}}}}(Td)),Td}var Ev;function jE(){return Ev||(Ev=1,Ed.exports=qE()),Ed.exports}var bd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function ZE(){if(Tv)return Ln;Tv=1;var i=vm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,g)},Ln.flushSync=function(p){var d=c.T,g=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=d,r.p=g,r.d.f()}},Ln.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},Ln.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Ln.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ln.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},Ln.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ln.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},Ln.requestFormReset=function(p){r.d.r(p)},Ln.unstable_batchedUpdates=function(p,d){return p(d)},Ln.useFormState=function(p,d,g){return c.H.useFormState(p,d,g)},Ln.useFormStatus=function(){return c.H.useHostTransitionStatus()},Ln.version="19.1.0",Ln}var bv;function KE(){if(bv)return bd.exports;bv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),bd.exports=ZE(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function QE(){if(Av)return ul;Av=1;var i=jE(),t=vm(),n=KE();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var a=e,s=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(s=a.return),e=a.return;while(e)}return a.tag===3?s:null}function c(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function p(e){var a=e.alternate;if(!a){if(a=u(e),a===null)throw Error(r(188));return a!==e?null:e}for(var s=e,l=a;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),e;if(m===l)return h(f),a;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,A=f.child;A;){if(A===s){M=!0,s=f,l=m;break}if(A===l){M=!0,l=f,s=m;break}A=A.sibling}if(!M){for(A=m.child;A;){if(A===s){M=!0,s=m,l=f;break}if(A===l){M=!0,l=m,s=f;break}A=A.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:a}function d(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=d(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case N:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case w:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return a=e.displayName||null,a!==null?a:mt(e.type)||"Memo";case k:a=e._payload,e=e._init;try{return mt(e(a))}catch{}}return null}var pt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},dt=[],D=-1;function nt(e){return{current:e}}function At(e){0>D||(e.current=dt[D],dt[D]=null,D--)}function _t(e,a){D++,dt[D]=e.current,e.current=a}var $=nt(null),xt=nt(null),it=nt(null),Tt=nt(null);function Ct(e,a){switch(_t(it,a),_t(xt,e),_t($,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Y_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Y_(a),e=q_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}At($),_t($,e)}function St(){At($),At(xt),At(it)}function et(e){e.memoizedState!==null&&_t(Tt,e);var a=$.current,s=q_(a,e.type);a!==s&&(_t(xt,e),_t($,s))}function Rt(e){xt.current===e&&(At($),At(xt)),Tt.current===e&&(At(Tt),il._currentValue=W)}var Q=Object.prototype.hasOwnProperty,Bt=i.unstable_scheduleCallback,z=i.unstable_cancelCallback,te=i.unstable_shouldYield,Ht=i.unstable_requestPaint,qt=i.unstable_now,jt=i.unstable_getCurrentPriorityLevel,he=i.unstable_ImmediatePriority,Kt=i.unstable_UserBlockingPriority,O=i.unstable_NormalPriority,b=i.unstable_LowPriority,st=i.unstable_IdlePriority,Mt=i.log,wt=i.unstable_setDisableYieldValue,ot=null,Pt=null;function Nt(e){if(typeof Mt=="function"&&wt(e),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(ot,e)}catch{}}var Lt=Math.clz32?Math.clz32:Gt,ce=Math.log,Dt=Math.LN2;function Gt(e){return e>>>=0,e===0?32:31-(ce(e)/Dt|0)|0}var $t=256,zt=4194304;function Ot(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ie(e,a,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=Ot(l):(M&=A,M!==0?f=Ot(M):s||(s=A&~e,s!==0&&(f=Ot(s))))):(A=l&~m,A!==0?f=Ot(A):M!==0?f=Ot(M):s||(s=l&~e,s!==0&&(f=Ot(s)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,s=a&-a,m>=s||m===32&&(s&4194048)!==0)?a:f}function Jt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function me(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=$t;return $t<<=1,($t&4194048)===0&&($t=256),e}function Ft(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function ht(e){for(var a=[],s=0;31>s;s++)a.push(e);return a}function yt(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vt(e,a,s,l,f,m){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,rt=e.hiddenUpdates;for(s=M&~s;0<s;){var vt=31-Lt(s),bt=1<<vt;A[vt]=0,G[vt]=-1;var lt=rt[vt];if(lt!==null)for(rt[vt]=null,vt=0;vt<lt.length;vt++){var ut=lt[vt];ut!==null&&(ut.lane&=-536870913)}s&=~bt}l!==0&&kt(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~a))}function kt(e,a,s){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Lt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function fe(e,a){var s=e.entangledLanes|=a;for(e=e.entanglements;s;){var l=31-Lt(s),f=1<<l;f&a|e[l]&a&&(e[l]|=a),s&=~f}}function Be(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function je(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function we(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:hv(e.type))}function vn(e,a){var s=Y.p;try{return Y.p=e,a()}finally{Y.p=s}}var $e=Math.random().toString(36).slice(2),nn="__reactFiber$"+$e,fn="__reactProps$"+$e,Cn="__reactContainer$"+$e,Di="__reactEvents$"+$e,Vl="__reactListeners$"+$e,kl="__reactHandles$"+$e,ur="__reactResources$"+$e,ba="__reactMarker$"+$e;function Aa(e){delete e[nn],delete e[fn],delete e[Di],delete e[Vl],delete e[kl]}function Vi(e){var a=e[nn];if(a)return a;for(var s=e.parentNode;s;){if(a=s[Cn]||s[nn]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(e=Q_(e);e!==null;){if(s=e[nn])return s;e=Q_(e)}return a}e=s,s=e.parentNode}return null}function ki(e){if(e=e[nn]||e[Cn]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function cr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function wa(e){var a=e[ur];return a||(a=e[ur]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function on(e){e[ba]=!0}var Xl=new Set,Wl={};function Xi(e,a){R(e,a),R(e+"Capture",a)}function R(e,a){for(Wl[e]=a,e=0;e<a.length;e++)Xl.add(a[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},ft={};function K(e){return Q.call(ft,e)?!0:Q.call(ct,e)?!1:Z.test(e)?ft[e]=!0:(ct[e]=!0,!1)}function Ut(e,a,s){if(K(a))if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+s)}}function It(e,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+s)}}function Xt(e,a,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(a,s,""+l)}}var Zt,le;function ae(e){if(Zt===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);Zt=a&&a[1]||"",le=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+le}var ne=!1;function xe(e,a){if(!e||ne)return"";ne=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(ut){var lt=ut}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(ut){lt=ut}e.call(bt.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],A=m[1];if(M&&A){var G=M.split(`
`),rt=A.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<rt.length&&!rt[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===rt.length)for(l=G.length-1,f=rt.length-1;1<=l&&0<=f&&G[l]!==rt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==rt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==rt[f]){var vt=`
`+G[l].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=l&&0<=f);break}}}finally{ne=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ae(s):""}function De(e){switch(e.tag){case 26:case 27:case 5:return ae(e.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return ae("Activity");default:return""}}function Ze(e){try{var a="";do a+=De(e),e=e.return;while(e);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function re(e){var a=be(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),l=""+e[a];if(!e.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(e,a,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Je(e){e._valueTracker||(e._valueTracker=re(e))}function Ce(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var s=a.getValue(),l="";return e&&(l=be(e)?e.checked?"true":"false":e.value),e=l,e!==s?(a.setValue(e),!0):!1}function Dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ra=/[\n"\\]/g;function We(e){return e.replace(Ra,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Wi(e,a,s,l,f,m,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),a!=null?M==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Te(a)):e.value!==""+Te(a)&&(e.value=""+Te(a)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),a!=null?Un(e,M,Te(a)):s!=null?Un(e,M,Te(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Te(A):e.removeAttribute("name")}function ke(e,a,s,l,f,m,M,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;s=s!=null?""+Te(s):"",a=a!=null?""+Te(a):s,A||a===e.value||(e.value=a),e.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Un(e,a,s){a==="number"&&Dn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function hn(e,a,s,l){if(e=e.options,a){a={};for(var f=0;f<s.length;f++)a["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=a.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Te(s),a=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}a!==null||e[f].disabled||(a=e[f])}a!==null&&(a.selected=!0)}}function xn(e,a,s){if(a!=null&&(a=""+Te(a),a!==e.value&&(e.value=a),s==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=s!=null?""+Te(s):""}function bn(e,a,s,l){if(a==null){if(l!=null){if(s!=null)throw Error(r(92));if(pt(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),a=s}s=Te(a),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Ui(e,a){if(a){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=a;return}}e.textContent=a}var Yi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ym(e,a,s){var l=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,s):typeof s!="number"||s===0||Yi.has(a)?a==="float"?e.cssFloat=s:e[a]=(""+s).trim():e[a]=s+"px"}function qm(e,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&s[f]!==l&&Ym(e,f,l)}else for(var m in a)a.hasOwnProperty(m)&&Ym(e,m,a[m])}function xf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var VS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(e){return kS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yf=null;function Sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zr=null,Kr=null;function jm(e){var a=ki(e);if(a&&(e=a.stateNode)){var s=e[fn]||null;t:switch(e=a.stateNode,a.type){case"input":if(Wi(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+We(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var l=s[a];if(l!==e&&l.form===e.form){var f=l[fn]||null;if(!f)throw Error(r(90));Wi(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<s.length;a++)l=s[a],l.form===e.form&&Ce(l)}break t;case"textarea":xn(e,s.value,s.defaultValue);break t;case"select":a=s.value,a!=null&&hn(e,!!s.multiple,a,!1)}}}var Mf=!1;function Zm(e,a,s){if(Mf)return e(a,s);Mf=!0;try{var l=e(a);return l}finally{if(Mf=!1,(Zr!==null||Kr!==null)&&(Uu(),Zr&&(a=Zr,e=Kr,Kr=Zr=null,jm(a),e)))for(a=0;a<e.length;a++)jm(e[a])}}function go(e,a){var s=e.stateNode;if(s===null)return null;var l=s[fn]||null;if(l===null)return null;s=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=!1;if(qi)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Ef=!1}var Ca=null,Tf=null,ql=null;function Km(){if(ql)return ql;var e,a=Tf,s=a.length,l,f="value"in Ca?Ca.value:Ca.textContent,m=f.length;for(e=0;e<s&&a[e]===f[e];e++);var M=s-e;for(l=1;l<=M&&a[s-l]===f[m-l];l++);return ql=f.slice(e,1<l?1-l:void 0)}function jl(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function Qm(){return!1}function Gn(e){function a(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zl:Qm,this.isPropagationStopped=Qm,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),a}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Gn(fr),vo=g({},fr,{view:0,detail:0}),XS=Gn(vo),bf,Af,xo,Ql=g({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(bf=e.screenX-xo.screenX,Af=e.screenY-xo.screenY):Af=bf=0,xo=e),bf)},movementY:function(e){return"movementY"in e?e.movementY:Af}}),$m=Gn(Ql),WS=g({},Ql,{dataTransfer:0}),YS=Gn(WS),qS=g({},vo,{relatedTarget:0}),wf=Gn(qS),jS=g({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),ZS=Gn(jS),KS=g({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),QS=Gn(KS),$S=g({},fr,{data:0}),Jm=Gn($S),JS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nM(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=eM[e])?!!a[e]:!1}function Rf(){return nM}var iM=g({},vo,{key:function(e){if(e.key){var a=JS[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(e){return e.type==="keypress"?jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aM=Gn(iM),rM=g({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tg=Gn(rM),sM=g({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),oM=Gn(sM),lM=g({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uM=Gn(lM),cM=g({},Ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fM=Gn(cM),hM=g({},fr,{newState:0,oldState:0}),dM=Gn(hM),pM=[9,13,27,32],Cf=qi&&"CompositionEvent"in window,yo=null;qi&&"documentMode"in document&&(yo=document.documentMode);var mM=qi&&"TextEvent"in window&&!yo,eg=qi&&(!Cf||yo&&8<yo&&11>=yo),ng=" ",ig=!1;function ag(e,a){switch(e){case"keyup":return pM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function gM(e,a){switch(e){case"compositionend":return rg(a);case"keypress":return a.which!==32?null:(ig=!0,ng);case"textInput":return e=a.data,e===ng&&ig?null:e;default:return null}}function _M(e,a){if(Qr)return e==="compositionend"||!Cf&&ag(e,a)?(e=Km(),ql=Tf=Ca=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return eg&&a.locale!=="ko"?null:a.data;default:return null}}var vM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!vM[e.type]:a==="textarea"}function og(e,a,s,l){Zr?Kr?Kr.push(l):Kr=[l]:Zr=l,a=Bu(a,"onChange"),0<a.length&&(s=new Kl("onChange","change",null,s,l),e.push({event:s,listeners:a}))}var So=null,Mo=null;function xM(e){G_(e,0)}function $l(e){var a=cr(e);if(Ce(a))return e}function lg(e,a){if(e==="change")return a}var ug=!1;if(qi){var Df;if(qi){var Uf="oninput"in document;if(!Uf){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),Uf=typeof cg.oninput=="function"}Df=Uf}else Df=!1;ug=Df&&(!document.documentMode||9<document.documentMode)}function fg(){So&&(So.detachEvent("onpropertychange",hg),Mo=So=null)}function hg(e){if(e.propertyName==="value"&&$l(Mo)){var a=[];og(a,Mo,e,Sf(e)),Zm(xM,a)}}function yM(e,a,s){e==="focusin"?(fg(),So=a,Mo=s,So.attachEvent("onpropertychange",hg)):e==="focusout"&&fg()}function SM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(Mo)}function MM(e,a){if(e==="click")return $l(a)}function EM(e,a){if(e==="input"||e==="change")return $l(a)}function TM(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var qn=typeof Object.is=="function"?Object.is:TM;function Eo(e,a){if(qn(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var s=Object.keys(e),l=Object.keys(a);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Q.call(a,f)||!qn(e[f],a[f]))return!1}return!0}function dg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pg(e,a){var s=dg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=a&&l>=a)return{node:s,offset:a-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=dg(s)}}function mg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?mg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function gg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Dn(e.document);a instanceof e.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)e=a.contentWindow;else break;a=Dn(e.document)}return a}function Nf(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var bM=qi&&"documentMode"in document&&11>=document.documentMode,$r=null,Lf=null,To=null,Of=!1;function _g(e,a,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Of||$r==null||$r!==Dn(l)||(l=$r,"selectionStart"in l&&Nf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),To&&Eo(To,l)||(To=l,l=Bu(Lf,"onSelect"),0<l.length&&(a=new Kl("onSelect","select",null,a,s),e.push({event:a,listeners:l}),a.target=$r)))}function hr(e,a){var s={};return s[e.toLowerCase()]=a.toLowerCase(),s["Webkit"+e]="webkit"+a,s["Moz"+e]="moz"+a,s}var Jr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Pf={},vg={};qi&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function dr(e){if(Pf[e])return Pf[e];if(!Jr[e])return e;var a=Jr[e],s;for(s in a)if(a.hasOwnProperty(s)&&s in vg)return Pf[e]=a[s];return e}var xg=dr("animationend"),yg=dr("animationiteration"),Sg=dr("animationstart"),AM=dr("transitionrun"),wM=dr("transitionstart"),RM=dr("transitioncancel"),Mg=dr("transitionend"),Eg=new Map,zf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zf.push("scrollEnd");function _i(e,a){Eg.set(e,a),Xi(a,[e])}var Tg=new WeakMap;function ri(e,a){if(typeof e=="object"&&e!==null){var s=Tg.get(e);return s!==void 0?s:(a={value:e,source:a,stack:Ze(a)},Tg.set(e,a),a)}return{value:e,source:a,stack:Ze(a)}}var si=[],ts=0,Bf=0;function Jl(){for(var e=ts,a=Bf=ts=0;a<e;){var s=si[a];si[a++]=null;var l=si[a];si[a++]=null;var f=si[a];si[a++]=null;var m=si[a];if(si[a++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&bg(s,f,m)}}function tu(e,a,s,l){si[ts++]=e,si[ts++]=a,si[ts++]=s,si[ts++]=l,Bf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ff(e,a,s,l){return tu(e,a,s,l),eu(e)}function es(e,a){return tu(e,null,null,a),eu(e)}function bg(e,a,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&a!==null&&(f=31-Lt(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[a]:l.push(a),a.lane=s|536870912),m):null}function eu(e){if(50<Zo)throw Zo=0,Xh=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var ns={};function CM(e,a,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,a,s,l){return new CM(e,a,s,l)}function If(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,a){var s=e.alternate;return s===null?(s=jn(e.tag,a,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=a,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,a=e.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Ag(e,a){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,a=s.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function nu(e,a,s,l,f,m){var M=0;if(l=e,typeof e=="function")If(e)&&(M=1);else if(typeof e=="string")M=UE(e,s,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=jn(31,s,a,f),e.elementType=U,e.lanes=m,e;case E:return pr(s.children,f,m,a);case T:M=8,f|=24;break;case S:return e=jn(12,s,a,f|2),e.elementType=S,e.lanes=m,e;case I:return e=jn(13,s,a,f),e.elementType=I,e.lanes=m,e;case P:return e=jn(19,s,a,f),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case N:M=10;break t;case L:M=9;break t;case w:M=11;break t;case F:M=14;break t;case k:M=16,l=null;break t}M=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return a=jn(M,s,a,f),a.elementType=e,a.type=l,a.lanes=m,a}function pr(e,a,s,l){return e=jn(7,e,l,a),e.lanes=s,e}function Hf(e,a,s){return e=jn(6,e,null,a),e.lanes=s,e}function Gf(e,a,s){return a=jn(4,e.children!==null?e.children:[],e.key,a),a.lanes=s,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var is=[],as=0,iu=null,au=0,oi=[],li=0,mr=null,Zi=1,Ki="";function gr(e,a){is[as++]=au,is[as++]=iu,iu=e,au=a}function wg(e,a,s){oi[li++]=Zi,oi[li++]=Ki,oi[li++]=mr,mr=e;var l=Zi;e=Ki;var f=32-Lt(l)-1;l&=~(1<<f),s+=1;var m=32-Lt(a)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Zi=1<<32-Lt(a)+f|s<<f|l,Ki=m+e}else Zi=1<<m|s<<f|l,Ki=e}function Vf(e){e.return!==null&&(gr(e,1),wg(e,1,0))}function kf(e){for(;e===iu;)iu=is[--as],is[as]=null,au=is[--as],is[as]=null;for(;e===mr;)mr=oi[--li],oi[li]=null,Ki=oi[--li],oi[li]=null,Zi=oi[--li],oi[li]=null}var zn=null,tn=null,Oe=!1,_r=null,Ni=!1,Xf=Error(r(519));function vr(e){var a=Error(r(418,""));throw wo(ri(a,e)),Xf}function Rg(e){var a=e.stateNode,s=e.type,l=e.memoizedProps;switch(a[nn]=e,a[fn]=l,s){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(s=0;s<Qo.length;s++)Se(Qo[s],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Se("invalid",a),ke(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Je(a);break;case"select":Se("invalid",a);break;case"textarea":Se("invalid",a),bn(a,l.value,l.defaultValue,l.children),Je(a)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||l.suppressHydrationWarning===!0||W_(a.textContent,s)?(l.popover!=null&&(Se("beforetoggle",a),Se("toggle",a)),l.onScroll!=null&&Se("scroll",a),l.onScrollEnd!=null&&Se("scrollend",a),l.onClick!=null&&(a.onclick=Fu),a=!0):a=!1,a||vr(e)}function Cg(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:zn=zn.return}}function bo(e){if(e!==zn)return!1;if(!Oe)return Cg(e),Oe=!0,!1;var a=e.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||sd(e.type,e.memoizedProps)),s=!s),s&&tn&&vr(e),Cg(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(a===0){tn=xi(e.nextSibling);break t}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;e=e.nextSibling}tn=null}}else a===27?(a=tn,Wa(e.type)?(e=cd,cd=null,tn=e):tn=a):tn=zn?xi(e.stateNode.nextSibling):null;return!0}function Ao(){tn=zn=null,Oe=!1}function Dg(){var e=_r;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),_r=null),e}function wo(e){_r===null?_r=[e]:_r.push(e)}var Wf=nt(null),xr=null,Qi=null;function Da(e,a,s){_t(Wf,a._currentValue),a._currentValue=s}function $i(e){e._currentValue=Wf.current,At(Wf)}function Yf(e,a,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===s)break;e=e.return}}function qf(e,a,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=f;for(var G=0;G<a.length;G++)if(A.context===a[G]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Yf(m.return,s,e),l||(M=null);break t}m=A.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),Yf(M,s,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Ro(e,a,s,l){e=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=f.type;qn(f.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(f===Tt.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(il):e=[il])}f=f.return}e!==null&&qf(a,e,s,l),a.flags|=262144}function ru(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yr(e){xr=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return Ug(xr,e)}function su(e,a){return xr===null&&yr(e),Ug(e,a)}function Ug(e,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Qi===null){if(e===null)throw Error(r(308));Qi=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Qi=Qi.next=a;return s}var DM=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(s){return s()})}},UM=i.unstable_scheduleCallback,NM=i.unstable_NormalPriority,dn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jf(){return{controller:new DM,data:new Map,refCount:0}}function Co(e){e.refCount--,e.refCount===0&&UM(NM,function(){e.controller.abort()})}var Do=null,Zf=0,rs=0,ss=null;function LM(e,a){if(Do===null){var s=Do=[];Zf=0,rs=Qh(),ss={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Zf++,a.then(Ng,Ng),a}function Ng(){if(--Zf===0&&Do!==null){ss!==null&&(ss.status="fulfilled");var e=Do;Do=null,rs=0,ss=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function OM(e,a){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<s.length;f++)(0,s[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Lg=B.S;B.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&LM(e,a),Lg!==null&&Lg(e,a)};var Sr=nt(null);function Kf(){var e=Sr.current;return e!==null?e:Ye.pooledCache}function ou(e,a){a===null?_t(Sr,Sr.current):_t(Sr,a.pool)}function Og(){var e=Kf();return e===null?null:{parent:dn._currentValue,pool:e}}var Uo=Error(r(460)),Pg=Error(r(474)),lu=Error(r(542)),Qf={then:function(){}};function zg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function uu(){}function Bg(e,a,s){switch(s=e[s],s===void 0?e.push(a):s!==a&&(a.then(uu,uu),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Ig(e),e;default:if(typeof a.status=="string")a.then(uu,uu);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Ig(e),e}throw No=a,Uo}}var No=null;function Fg(){if(No===null)throw Error(r(459));var e=No;return No=null,e}function Ig(e){if(e===Uo||e===lu)throw Error(r(483))}var Ua=!1;function $f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,a,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=eu(e),bg(e,null,s),a}return tu(e,l,a,s),eu(e)}function Lo(e,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,s|=l,a.lanes=s,fe(e,s)}}function th(e,a){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=a:m=m.next=a}else f=m=a;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=a:e.next=a,s.lastBaseUpdate=a}var eh=!1;function Oo(){if(eh){var e=ss;if(e!==null)throw e}}function Po(e,a,s,l){eh=!1;var f=e.updateQueue;Ua=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var G=A,rt=G.next;G.next=null,M===null?m=rt:M.next=rt,M=G;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,A=vt.lastBaseUpdate,A!==M&&(A===null?vt.firstBaseUpdate=rt:A.next=rt,vt.lastBaseUpdate=G))}if(m!==null){var bt=f.baseState;M=0,vt=rt=G=null,A=m;do{var lt=A.lane&-536870913,ut=lt!==A.lane;if(ut?(Re&lt)===lt:(l&lt)===lt){lt!==0&&lt===rs&&(eh=!0),vt!==null&&(vt=vt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ue=e,se=A;lt=a;var He=s;switch(se.tag){case 1:if(ue=se.payload,typeof ue=="function"){bt=ue.call(He,bt,lt);break t}bt=ue;break t;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=se.payload,lt=typeof ue=="function"?ue.call(He,bt,lt):ue,lt==null)break t;bt=g({},bt,lt);break t;case 2:Ua=!0}}lt=A.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=f.callbacks,ut===null?f.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},vt===null?(rt=vt=ut,G=bt):vt=vt.next=ut,M|=lt;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,f.lastBaseUpdate=ut,f.shared.pending=null}}while(!0);vt===null&&(G=bt),f.baseState=G,f.firstBaseUpdate=rt,f.lastBaseUpdate=vt,m===null&&(f.shared.lanes=0),Ga|=M,e.lanes=M,e.memoizedState=bt}}function Hg(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function Gg(e,a){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Hg(s[e],a)}var os=nt(null),cu=nt(0);function Vg(e,a){e=ra,_t(cu,e),_t(os,a),ra=e|a.baseLanes}function nh(){_t(cu,ra),_t(os,os.current)}function ih(){ra=cu.current,At(os),At(cu)}var Oa=0,_e=null,Fe=null,ln=null,fu=!1,ls=!1,Mr=!1,hu=0,zo=0,us=null,PM=0;function an(){throw Error(r(321))}function ah(e,a){if(a===null)return!1;for(var s=0;s<a.length&&s<e.length;s++)if(!qn(e[s],a[s]))return!1;return!0}function rh(e,a,s,l,f,m){return Oa=m,_e=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=e===null||e.memoizedState===null?b0:A0,Mr=!1,m=s(l,f),Mr=!1,ls&&(m=Xg(a,s,l,f)),kg(e),m}function kg(e){B.H=vu;var a=Fe!==null&&Fe.next!==null;if(Oa=0,ln=Fe=_e=null,fu=!1,zo=0,us=null,a)throw Error(r(300));e===null||yn||(e=e.dependencies,e!==null&&ru(e)&&(yn=!0))}function Xg(e,a,s,l){_e=e;var f=0;do{if(ls&&(us=null),zo=0,ls=!1,25<=f)throw Error(r(301));if(f+=1,ln=Fe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=VM,m=a(s,l)}while(ls);return m}function zM(){var e=B.H,a=e.useState()[0];return a=typeof a.then=="function"?Bo(a):a,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(_e.flags|=1024),a}function sh(){var e=hu!==0;return hu=0,e}function oh(e,a,s){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~s}function lh(e){if(fu){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}fu=!1}Oa=0,ln=Fe=_e=null,ls=!1,zo=hu=0,us=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?_e.memoizedState=ln=e:ln=ln.next=e,ln}function un(){if(Fe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var a=ln===null?_e.memoizedState:ln.next;if(a!==null)ln=a,Fe=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},ln===null?_e.memoizedState=ln=e:ln=ln.next=e}return ln}function uh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var a=zo;return zo+=1,us===null&&(us=[]),e=Bg(us,e,a),a=_e,(ln===null?a.memoizedState:ln.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?b0:A0),e}function du(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bo(e);if(e.$$typeof===N)return Nn(e)}throw Error(r(438,String(e)))}function ch(e){var a=null,s=_e.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var l=_e.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=uh(),_e.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(e),l=0;l<e;l++)s[l]=C;return a.index++,s}function Ji(e,a){return typeof a=="function"?a(e):a}function pu(e){var a=un();return fh(a,Fe,e)}function fh(e,a,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}a.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{a=f.next;var A=M=null,G=null,rt=a,vt=!1;do{var bt=rt.lane&-536870913;if(bt!==rt.lane?(Re&bt)===bt:(Oa&bt)===bt){var lt=rt.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),bt===rs&&(vt=!0);else if((Oa&lt)===lt){rt=rt.next,lt===rs&&(vt=!0);continue}else bt={lane:0,revertLane:rt.revertLane,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(A=G=bt,M=m):G=G.next=bt,_e.lanes|=lt,Ga|=lt;bt=rt.action,Mr&&s(m,bt),m=rt.hasEagerState?rt.eagerState:s(m,bt)}else lt={lane:bt,revertLane:rt.revertLane,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(A=G=lt,M=m):G=G.next=lt,_e.lanes|=bt,Ga|=bt;rt=rt.next}while(rt!==null&&rt!==a);if(G===null?M=m:G.next=A,!qn(m,e.memoizedState)&&(yn=!0,vt&&(s=ss,s!==null)))throw s;e.memoizedState=m,e.baseState=M,e.baseQueue=G,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function hh(e){var a=un(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=a.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=e(m,M.action),M=M.next;while(M!==f);qn(m,a.memoizedState)||(yn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),s.lastRenderedState=m}return[m,l]}function Wg(e,a,s){var l=_e,f=un(),m=Oe;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=a();var M=!qn((Fe||f).memoizedState,s);M&&(f.memoizedState=s,yn=!0),f=f.queue;var A=jg.bind(null,l,f,e);if(Fo(2048,8,A,[e]),f.getSnapshot!==a||M||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,cs(9,mu(),qg.bind(null,l,f,s,a),null),Ye===null)throw Error(r(349));m||(Oa&124)!==0||Yg(l,a,s)}return s}function Yg(e,a,s){e.flags|=16384,e={getSnapshot:a,value:s},a=_e.updateQueue,a===null?(a=uh(),_e.updateQueue=a,a.stores=[e]):(s=a.stores,s===null?a.stores=[e]:s.push(e))}function qg(e,a,s,l){a.value=s,a.getSnapshot=l,Zg(a)&&Kg(e)}function jg(e,a,s){return s(function(){Zg(a)&&Kg(e)})}function Zg(e){var a=e.getSnapshot;e=e.value;try{var s=a();return!qn(e,s)}catch{return!0}}function Kg(e){var a=es(e,2);a!==null&&Jn(a,e,2)}function dh(e){var a=Vn();if(typeof e=="function"){var s=e;if(e=s(),Mr){Nt(!0);try{s()}finally{Nt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},a}function Qg(e,a,s,l){return e.baseState=s,fh(e,Fe,typeof l=="function"?l:Ji)}function BM(e,a,s,l,f){if(_u(e))throw Error(r(485));if(e=a.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};B.T!==null?s(!0):m.isTransition=!1,l(m),s=a.pending,s===null?(m.next=a.pending=m,$g(a,m)):(m.next=s.next,a.pending=s.next=m)}}function $g(e,a){var s=a.action,l=a.payload,f=e.state;if(a.isTransition){var m=B.T,M={};B.T=M;try{var A=s(f,l),G=B.S;G!==null&&G(M,A),Jg(e,a,A)}catch(rt){ph(e,a,rt)}finally{B.T=m}}else try{m=s(f,l),Jg(e,a,m)}catch(rt){ph(e,a,rt)}}function Jg(e,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){t0(e,a,l)},function(l){return ph(e,a,l)}):t0(e,a,s)}function t0(e,a,s){a.status="fulfilled",a.value=s,e0(a),e.state=s,a=e.pending,a!==null&&(s=a.next,s===a?e.pending=null:(s=s.next,a.next=s,$g(e,s)))}function ph(e,a,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=s,e0(a),a=a.next;while(a!==l)}e.action=null}function e0(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function n0(e,a){return a}function i0(e,a){if(Oe){var s=Ye.formState;if(s!==null){t:{var l=_e;if(Oe){if(tn){e:{for(var f=tn,m=Ni;f.nodeType!==8;){if(!m){f=null;break e}if(f=xi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){tn=xi(f.nextSibling),l=f.data==="F!";break t}}vr(l)}l=!1}l&&(a=s[0])}}return s=Vn(),s.memoizedState=s.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n0,lastRenderedState:a},s.queue=l,s=M0.bind(null,_e,l),l.dispatch=s,l=dh(!1),m=xh.bind(null,_e,!1,l.queue),l=Vn(),f={state:a,dispatch:null,action:e,pending:null},l.queue=f,s=BM.bind(null,_e,f,m,s),f.dispatch=s,l.memoizedState=e,[a,s,!1]}function a0(e){var a=un();return r0(a,Fe,e)}function r0(e,a,s){if(a=fh(e,a,n0)[0],e=pu(Ji)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Bo(a)}catch(M){throw M===Uo?lu:M}else l=a;a=un();var f=a.queue,m=f.dispatch;return s!==a.memoizedState&&(_e.flags|=2048,cs(9,mu(),FM.bind(null,f,s),null)),[l,m,e]}function FM(e,a){e.action=a}function s0(e){var a=un(),s=Fe;if(s!==null)return r0(a,s,e);un(),a=a.memoizedState,s=un();var l=s.queue.dispatch;return s.memoizedState=e,[a,l,!1]}function cs(e,a,s,l){return e={tag:e,create:s,deps:l,inst:a,next:null},a=_e.updateQueue,a===null&&(a=uh(),_e.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,a.lastEffect=e),e}function mu(){return{destroy:void 0,resource:void 0}}function o0(){return un().memoizedState}function gu(e,a,s,l){var f=Vn();l=l===void 0?null:l,_e.flags|=e,f.memoizedState=cs(1|a,mu(),s,l)}function Fo(e,a,s,l){var f=un();l=l===void 0?null:l;var m=f.memoizedState.inst;Fe!==null&&l!==null&&ah(l,Fe.memoizedState.deps)?f.memoizedState=cs(a,m,s,l):(_e.flags|=e,f.memoizedState=cs(1|a,m,s,l))}function l0(e,a){gu(8390656,8,e,a)}function u0(e,a){Fo(2048,8,e,a)}function c0(e,a){return Fo(4,2,e,a)}function f0(e,a){return Fo(4,4,e,a)}function h0(e,a){if(typeof a=="function"){e=e();var s=a(e);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function d0(e,a,s){s=s!=null?s.concat([e]):null,Fo(4,4,h0.bind(null,a,e),s)}function mh(){}function p0(e,a){var s=un();a=a===void 0?null:a;var l=s.memoizedState;return a!==null&&ah(a,l[1])?l[0]:(s.memoizedState=[e,a],e)}function m0(e,a){var s=un();a=a===void 0?null:a;var l=s.memoizedState;if(a!==null&&ah(a,l[1]))return l[0];if(l=e(),Mr){Nt(!0);try{e()}finally{Nt(!1)}}return s.memoizedState=[l,a],l}function gh(e,a,s){return s===void 0||(Oa&1073741824)!==0?e.memoizedState=a:(e.memoizedState=s,e=v_(),_e.lanes|=e,Ga|=e,s)}function g0(e,a,s,l){return qn(s,a)?s:os.current!==null?(e=gh(e,s,l),qn(e,a)||(yn=!0),e):(Oa&42)===0?(yn=!0,e.memoizedState=s):(e=v_(),_e.lanes|=e,Ga|=e,a)}function _0(e,a,s,l,f){var m=Y.p;Y.p=m!==0&&8>m?m:8;var M=B.T,A={};B.T=A,xh(e,!1,a,s);try{var G=f(),rt=B.S;if(rt!==null&&rt(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var vt=OM(G,l);Io(e,a,vt,$n(e))}else Io(e,a,l,$n(e))}catch(bt){Io(e,a,{then:function(){},status:"rejected",reason:bt},$n())}finally{Y.p=m,B.T=M}}function IM(){}function _h(e,a,s,l){if(e.tag!==5)throw Error(r(476));var f=v0(e).queue;_0(e,f,a,W,s===null?IM:function(){return x0(e),s(l)})}function v0(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:W},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:s},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function x0(e){var a=v0(e).next.queue;Io(e,a,{},$n())}function vh(){return Nn(il)}function y0(){return un().memoizedState}function S0(){return un().memoizedState}function HM(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var s=$n();e=Na(s);var l=La(a,e,s);l!==null&&(Jn(l,a,s),Lo(l,a,s)),a={cache:jf()},e.payload=a;return}a=a.return}}function GM(e,a,s){var l=$n();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},_u(e)?E0(a,s):(s=Ff(e,a,s,l),s!==null&&(Jn(s,e,l),T0(s,a,l)))}function M0(e,a,s){var l=$n();Io(e,a,s,l)}function Io(e,a,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(_u(e))E0(a,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var M=a.lastRenderedState,A=m(M,s);if(f.hasEagerState=!0,f.eagerState=A,qn(A,M))return tu(e,a,f,0),Ye===null&&Jl(),!1}catch{}finally{}if(s=Ff(e,a,f,l),s!==null)return Jn(s,e,l),T0(s,a,l),!0}return!1}function xh(e,a,s,l){if(l={lane:2,revertLane:Qh(),action:l,hasEagerState:!1,eagerState:null,next:null},_u(e)){if(a)throw Error(r(479))}else a=Ff(e,s,l,2),a!==null&&Jn(a,e,2)}function _u(e){var a=e.alternate;return e===_e||a!==null&&a===_e}function E0(e,a){ls=fu=!0;var s=e.pending;s===null?a.next=a:(a.next=s.next,s.next=a),e.pending=a}function T0(e,a,s){if((s&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,s|=l,a.lanes=s,fe(e,s)}}var vu={readContext:Nn,use:du,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},b0={readContext:Nn,use:du,useCallback:function(e,a){return Vn().memoizedState=[e,a===void 0?null:a],e},useContext:Nn,useEffect:l0,useImperativeHandle:function(e,a,s){s=s!=null?s.concat([e]):null,gu(4194308,4,h0.bind(null,a,e),s)},useLayoutEffect:function(e,a){return gu(4194308,4,e,a)},useInsertionEffect:function(e,a){gu(4,2,e,a)},useMemo:function(e,a){var s=Vn();a=a===void 0?null:a;var l=e();if(Mr){Nt(!0);try{e()}finally{Nt(!1)}}return s.memoizedState=[l,a],l},useReducer:function(e,a,s){var l=Vn();if(s!==void 0){var f=s(a);if(Mr){Nt(!0);try{s(a)}finally{Nt(!1)}}}else f=a;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=GM.bind(null,_e,e),[l.memoizedState,e]},useRef:function(e){var a=Vn();return e={current:e},a.memoizedState=e},useState:function(e){e=dh(e);var a=e.queue,s=M0.bind(null,_e,a);return a.dispatch=s,[e.memoizedState,s]},useDebugValue:mh,useDeferredValue:function(e,a){var s=Vn();return gh(s,e,a)},useTransition:function(){var e=dh(!1);return e=_0.bind(null,_e,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,s){var l=_e,f=Vn();if(Oe){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Ye===null)throw Error(r(349));(Re&124)!==0||Yg(l,a,s)}f.memoizedState=s;var m={value:s,getSnapshot:a};return f.queue=m,l0(jg.bind(null,l,m,e),[e]),l.flags|=2048,cs(9,mu(),qg.bind(null,l,m,s,a),null),s},useId:function(){var e=Vn(),a=Ye.identifierPrefix;if(Oe){var s=Ki,l=Zi;s=(l&~(1<<32-Lt(l)-1)).toString(32)+s,a="«"+a+"R"+s,s=hu++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=PM++,a="«"+a+"r"+s.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:vh,useFormState:i0,useActionState:i0,useOptimistic:function(e){var a=Vn();a.memoizedState=a.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=xh.bind(null,_e,!0,s),s.dispatch=a,[e,a]},useMemoCache:ch,useCacheRefresh:function(){return Vn().memoizedState=HM.bind(null,_e)}},A0={readContext:Nn,use:du,useCallback:p0,useContext:Nn,useEffect:u0,useImperativeHandle:d0,useInsertionEffect:c0,useLayoutEffect:f0,useMemo:m0,useReducer:pu,useRef:o0,useState:function(){return pu(Ji)},useDebugValue:mh,useDeferredValue:function(e,a){var s=un();return g0(s,Fe.memoizedState,e,a)},useTransition:function(){var e=pu(Ji)[0],a=un().memoizedState;return[typeof e=="boolean"?e:Bo(e),a]},useSyncExternalStore:Wg,useId:y0,useHostTransitionStatus:vh,useFormState:a0,useActionState:a0,useOptimistic:function(e,a){var s=un();return Qg(s,Fe,e,a)},useMemoCache:ch,useCacheRefresh:S0},VM={readContext:Nn,use:du,useCallback:p0,useContext:Nn,useEffect:u0,useImperativeHandle:d0,useInsertionEffect:c0,useLayoutEffect:f0,useMemo:m0,useReducer:hh,useRef:o0,useState:function(){return hh(Ji)},useDebugValue:mh,useDeferredValue:function(e,a){var s=un();return Fe===null?gh(s,e,a):g0(s,Fe.memoizedState,e,a)},useTransition:function(){var e=hh(Ji)[0],a=un().memoizedState;return[typeof e=="boolean"?e:Bo(e),a]},useSyncExternalStore:Wg,useId:y0,useHostTransitionStatus:vh,useFormState:s0,useActionState:s0,useOptimistic:function(e,a){var s=un();return Fe!==null?Qg(s,Fe,e,a):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:ch,useCacheRefresh:S0},fs=null,Ho=0;function xu(e){var a=Ho;return Ho+=1,fs===null&&(fs=[]),Bg(fs,e,a)}function Go(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function yu(e,a){throw a.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function w0(e){var a=e._init;return a(e._payload)}function R0(e){function a(q,V){if(e){var J=q.deletions;J===null?(q.deletions=[V],q.flags|=16):J.push(V)}}function s(q,V){if(!e)return null;for(;V!==null;)a(q,V),V=V.sibling;return null}function l(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function f(q,V){return q=ji(q,V),q.index=0,q.sibling=null,q}function m(q,V,J){return q.index=J,e?(J=q.alternate,J!==null?(J=J.index,J<V?(q.flags|=67108866,V):J):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function M(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function A(q,V,J,Et){return V===null||V.tag!==6?(V=Hf(J,q.mode,Et),V.return=q,V):(V=f(V,J),V.return=q,V)}function G(q,V,J,Et){var Qt=J.type;return Qt===E?vt(q,V,J.props.children,Et,J.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===k&&w0(Qt)===V.type)?(V=f(V,J.props),Go(V,J),V.return=q,V):(V=nu(J.type,J.key,J.props,null,q.mode,Et),Go(V,J),V.return=q,V)}function rt(q,V,J,Et){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Gf(J,q.mode,Et),V.return=q,V):(V=f(V,J.children||[]),V.return=q,V)}function vt(q,V,J,Et,Qt){return V===null||V.tag!==7?(V=pr(J,q.mode,Et,Qt),V.return=q,V):(V=f(V,J),V.return=q,V)}function bt(q,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Hf(""+V,q.mode,J),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _:return J=nu(V.type,V.key,V.props,null,q.mode,J),Go(J,V),J.return=q,J;case x:return V=Gf(V,q.mode,J),V.return=q,V;case k:var Et=V._init;return V=Et(V._payload),bt(q,V,J)}if(pt(V)||j(V))return V=pr(V,q.mode,J,null),V.return=q,V;if(typeof V.then=="function")return bt(q,xu(V),J);if(V.$$typeof===N)return bt(q,su(q,V),J);yu(q,V)}return null}function lt(q,V,J,Et){var Qt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Qt!==null?null:A(q,V,""+J,Et);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return J.key===Qt?G(q,V,J,Et):null;case x:return J.key===Qt?rt(q,V,J,Et):null;case k:return Qt=J._init,J=Qt(J._payload),lt(q,V,J,Et)}if(pt(J)||j(J))return Qt!==null?null:vt(q,V,J,Et,null);if(typeof J.then=="function")return lt(q,V,xu(J),Et);if(J.$$typeof===N)return lt(q,V,su(q,J),Et);yu(q,J)}return null}function ut(q,V,J,Et,Qt){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return q=q.get(J)||null,A(V,q,""+Et,Qt);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case _:return q=q.get(Et.key===null?J:Et.key)||null,G(V,q,Et,Qt);case x:return q=q.get(Et.key===null?J:Et.key)||null,rt(V,q,Et,Qt);case k:var ve=Et._init;return Et=ve(Et._payload),ut(q,V,J,Et,Qt)}if(pt(Et)||j(Et))return q=q.get(J)||null,vt(V,q,Et,Qt,null);if(typeof Et.then=="function")return ut(q,V,J,xu(Et),Qt);if(Et.$$typeof===N)return ut(q,V,J,su(V,Et),Qt);yu(V,Et)}return null}function ue(q,V,J,Et){for(var Qt=null,ve=null,ee=V,oe=V=0,Mn=null;ee!==null&&oe<J.length;oe++){ee.index>oe?(Mn=ee,ee=null):Mn=ee.sibling;var Ue=lt(q,ee,J[oe],Et);if(Ue===null){ee===null&&(ee=Mn);break}e&&ee&&Ue.alternate===null&&a(q,ee),V=m(Ue,V,oe),ve===null?Qt=Ue:ve.sibling=Ue,ve=Ue,ee=Mn}if(oe===J.length)return s(q,ee),Oe&&gr(q,oe),Qt;if(ee===null){for(;oe<J.length;oe++)ee=bt(q,J[oe],Et),ee!==null&&(V=m(ee,V,oe),ve===null?Qt=ee:ve.sibling=ee,ve=ee);return Oe&&gr(q,oe),Qt}for(ee=l(ee);oe<J.length;oe++)Mn=ut(ee,q,oe,J[oe],Et),Mn!==null&&(e&&Mn.alternate!==null&&ee.delete(Mn.key===null?oe:Mn.key),V=m(Mn,V,oe),ve===null?Qt=Mn:ve.sibling=Mn,ve=Mn);return e&&ee.forEach(function(Ka){return a(q,Ka)}),Oe&&gr(q,oe),Qt}function se(q,V,J,Et){if(J==null)throw Error(r(151));for(var Qt=null,ve=null,ee=V,oe=V=0,Mn=null,Ue=J.next();ee!==null&&!Ue.done;oe++,Ue=J.next()){ee.index>oe?(Mn=ee,ee=null):Mn=ee.sibling;var Ka=lt(q,ee,Ue.value,Et);if(Ka===null){ee===null&&(ee=Mn);break}e&&ee&&Ka.alternate===null&&a(q,ee),V=m(Ka,V,oe),ve===null?Qt=Ka:ve.sibling=Ka,ve=Ka,ee=Mn}if(Ue.done)return s(q,ee),Oe&&gr(q,oe),Qt;if(ee===null){for(;!Ue.done;oe++,Ue=J.next())Ue=bt(q,Ue.value,Et),Ue!==null&&(V=m(Ue,V,oe),ve===null?Qt=Ue:ve.sibling=Ue,ve=Ue);return Oe&&gr(q,oe),Qt}for(ee=l(ee);!Ue.done;oe++,Ue=J.next())Ue=ut(ee,q,oe,Ue.value,Et),Ue!==null&&(e&&Ue.alternate!==null&&ee.delete(Ue.key===null?oe:Ue.key),V=m(Ue,V,oe),ve===null?Qt=Ue:ve.sibling=Ue,ve=Ue);return e&&ee.forEach(function(kE){return a(q,kE)}),Oe&&gr(q,oe),Qt}function He(q,V,J,Et){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case _:t:{for(var Qt=J.key;V!==null;){if(V.key===Qt){if(Qt=J.type,Qt===E){if(V.tag===7){s(q,V.sibling),Et=f(V,J.props.children),Et.return=q,q=Et;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===k&&w0(Qt)===V.type){s(q,V.sibling),Et=f(V,J.props),Go(Et,J),Et.return=q,q=Et;break t}s(q,V);break}else a(q,V);V=V.sibling}J.type===E?(Et=pr(J.props.children,q.mode,Et,J.key),Et.return=q,q=Et):(Et=nu(J.type,J.key,J.props,null,q.mode,Et),Go(Et,J),Et.return=q,q=Et)}return M(q);case x:t:{for(Qt=J.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){s(q,V.sibling),Et=f(V,J.children||[]),Et.return=q,q=Et;break t}else{s(q,V);break}else a(q,V);V=V.sibling}Et=Gf(J,q.mode,Et),Et.return=q,q=Et}return M(q);case k:return Qt=J._init,J=Qt(J._payload),He(q,V,J,Et)}if(pt(J))return ue(q,V,J,Et);if(j(J)){if(Qt=j(J),typeof Qt!="function")throw Error(r(150));return J=Qt.call(J),se(q,V,J,Et)}if(typeof J.then=="function")return He(q,V,xu(J),Et);if(J.$$typeof===N)return He(q,V,su(q,J),Et);yu(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(s(q,V.sibling),Et=f(V,J),Et.return=q,q=Et):(s(q,V),Et=Hf(J,q.mode,Et),Et.return=q,q=Et),M(q)):s(q,V)}return function(q,V,J,Et){try{Ho=0;var Qt=He(q,V,J,Et);return fs=null,Qt}catch(ee){if(ee===Uo||ee===lu)throw ee;var ve=jn(29,ee,null,q.mode);return ve.lanes=Et,ve.return=q,ve}finally{}}}var hs=R0(!0),C0=R0(!1),ui=nt(null),Li=null;function Pa(e){var a=e.alternate;_t(pn,pn.current&1),_t(ui,e),Li===null&&(a===null||os.current!==null||a.memoizedState!==null)&&(Li=e)}function D0(e){if(e.tag===22){if(_t(pn,pn.current),_t(ui,e),Li===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(Li=e)}}else za()}function za(){_t(pn,pn.current),_t(ui,ui.current)}function ta(e){At(ui),Li===e&&(Li=null),At(pn)}var pn=nt(0);function Su(e){for(var a=e;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||ud(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function yh(e,a,s,l){a=e.memoizedState,s=s(l,a),s=s==null?a:g({},a,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Sh={enqueueSetState:function(e,a,s){e=e._reactInternals;var l=$n(),f=Na(l);f.payload=a,s!=null&&(f.callback=s),a=La(e,f,l),a!==null&&(Jn(a,e,l),Lo(a,e,l))},enqueueReplaceState:function(e,a,s){e=e._reactInternals;var l=$n(),f=Na(l);f.tag=1,f.payload=a,s!=null&&(f.callback=s),a=La(e,f,l),a!==null&&(Jn(a,e,l),Lo(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var s=$n(),l=Na(s);l.tag=2,a!=null&&(l.callback=a),a=La(e,l,s),a!==null&&(Jn(a,e,s),Lo(a,e,s))}};function U0(e,a,s,l,f,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):a.prototype&&a.prototype.isPureReactComponent?!Eo(s,l)||!Eo(f,m):!0}function N0(e,a,s,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,l),a.state!==e&&Sh.enqueueReplaceState(a,a.state,null)}function Er(e,a){var s=a;if("ref"in a){s={};for(var l in a)l!=="ref"&&(s[l]=a[l])}if(e=e.defaultProps){s===a&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var Mu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function L0(e){Mu(e)}function O0(e){console.error(e)}function P0(e){Mu(e)}function Eu(e,a){try{var s=e.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function z0(e,a,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Mh(e,a,s){return s=Na(s),s.tag=3,s.payload={element:null},s.callback=function(){Eu(e,a)},s}function B0(e){return e=Na(e),e.tag=3,e}function F0(e,a,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){z0(a,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){z0(a,s,l),typeof f!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function kM(e,a,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=s.alternate,a!==null&&Ro(a,s,f,!0),s=ui.current,s!==null){switch(s.tag){case 13:return Li===null?Yh():s.alternate===null&&en===0&&(en=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Qf?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([l]):a.add(l),jh(e,l,f)),!1;case 22:return s.flags|=65536,l===Qf?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([l]):s.add(l)),jh(e,l,f)),!1}throw Error(r(435,s.tag))}return jh(e,l,f),Yh(),!1}if(Oe)return a=ui.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==Xf&&(e=Error(r(422),{cause:l}),wo(ri(e,s)))):(l!==Xf&&(a=Error(r(423),{cause:l}),wo(ri(a,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=ri(l,s),f=Mh(e.stateNode,l,f),th(e,f),en!==4&&(en=2)),!1;var m=Error(r(520),{cause:l});if(m=ri(m,s),jo===null?jo=[m]:jo.push(m),en!==4&&(en=2),a===null)return!0;l=ri(l,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Mh(s.stateNode,l,e),th(s,e),!1;case 1:if(a=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Va===null||!Va.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=B0(f),F0(f,e,s,l),th(s,f),!1}s=s.return}while(s!==null);return!1}var I0=Error(r(461)),yn=!1;function An(e,a,s,l){a.child=e===null?C0(a,null,s,l):hs(a,e.child,s,l)}function H0(e,a,s,l,f){s=s.render;var m=a.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return yr(a),l=rh(e,a,s,M,m,f),A=sh(),e!==null&&!yn?(oh(e,a,f),ea(e,a,f)):(Oe&&A&&Vf(a),a.flags|=1,An(e,a,l,f),a.child)}function G0(e,a,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!If(m)&&m.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=m,V0(e,a,m,l,f)):(e=nu(s.type,null,l,a,a.mode,f),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!Dh(e,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:Eo,s(M,l)&&e.ref===a.ref)return ea(e,a,f)}return a.flags|=1,e=ji(m,l),e.ref=a.ref,e.return=a,a.child=e}function V0(e,a,s,l,f){if(e!==null){var m=e.memoizedProps;if(Eo(m,l)&&e.ref===a.ref)if(yn=!1,a.pendingProps=l=m,Dh(e,f))(e.flags&131072)!==0&&(yn=!0);else return a.lanes=e.lanes,ea(e,a,f)}return Eh(e,a,s,l,f)}function k0(e,a,s){var l=a.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(f=a.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~l}else a.childLanes=0,a.child=null;return X0(e,a,l,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&ou(a,m!==null?m.cachePool:null),m!==null?Vg(a,m):nh(),D0(a);else return a.lanes=a.childLanes=536870912,X0(e,a,m!==null?m.baseLanes|s:s,s)}else m!==null?(ou(a,m.cachePool),Vg(a,m),za(),a.memoizedState=null):(e!==null&&ou(a,null),nh(),za());return An(e,a,f,s),a.child}function X0(e,a,s,l){var f=Kf();return f=f===null?null:{parent:dn._currentValue,pool:f},a.memoizedState={baseLanes:s,cachePool:f},e!==null&&ou(a,null),nh(),D0(a),e!==null&&Ro(e,a,l,!0),null}function Tu(e,a){var s=a.ref;if(s===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(a.flags|=4194816)}}function Eh(e,a,s,l,f){return yr(a),s=rh(e,a,s,l,void 0,f),l=sh(),e!==null&&!yn?(oh(e,a,f),ea(e,a,f)):(Oe&&l&&Vf(a),a.flags|=1,An(e,a,s,f),a.child)}function W0(e,a,s,l,f,m){return yr(a),a.updateQueue=null,s=Xg(a,l,s,f),kg(e),l=sh(),e!==null&&!yn?(oh(e,a,m),ea(e,a,m)):(Oe&&l&&Vf(a),a.flags|=1,An(e,a,s,m),a.child)}function Y0(e,a,s,l,f){if(yr(a),a.stateNode===null){var m=ns,M=s.contextType;typeof M=="object"&&M!==null&&(m=Nn(M)),m=new s(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Sh,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},$f(a),M=s.contextType,m.context=typeof M=="object"&&M!==null?Nn(M):ns,m.state=a.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(yh(a,s,M,l),m.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Sh.enqueueReplaceState(m,m.state,null),Po(a,l,m,f),Oo(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var A=a.memoizedProps,G=Er(s,A);m.props=G;var rt=m.context,vt=s.contextType;M=ns,typeof vt=="object"&&vt!==null&&(M=Nn(vt));var bt=s.getDerivedStateFromProps;vt=typeof bt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,vt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||rt!==M)&&N0(a,m,l,M),Ua=!1;var lt=a.memoizedState;m.state=lt,Po(a,l,m,f),Oo(),rt=a.memoizedState,A||lt!==rt||Ua?(typeof bt=="function"&&(yh(a,s,bt,l),rt=a.memoizedState),(G=Ua||U0(a,s,G,l,lt,rt,M))?(vt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=rt),m.props=l,m.state=rt,m.context=M,l=G):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,Jf(e,a),M=a.memoizedProps,vt=Er(s,M),m.props=vt,bt=a.pendingProps,lt=m.context,rt=s.contextType,G=ns,typeof rt=="object"&&rt!==null&&(G=Nn(rt)),A=s.getDerivedStateFromProps,(rt=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==bt||lt!==G)&&N0(a,m,l,G),Ua=!1,lt=a.memoizedState,m.state=lt,Po(a,l,m,f),Oo();var ut=a.memoizedState;M!==bt||lt!==ut||Ua||e!==null&&e.dependencies!==null&&ru(e.dependencies)?(typeof A=="function"&&(yh(a,s,A,l),ut=a.memoizedState),(vt=Ua||U0(a,s,vt,l,lt,ut,G)||e!==null&&e.dependencies!==null&&ru(e.dependencies))?(rt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ut,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ut,G)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=ut),m.props=l,m.state=ut,m.context=G,l=vt):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,Tu(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=hs(a,e.child,null,f),a.child=hs(a,null,s,f)):An(e,a,s,f),a.memoizedState=m.state,e=a.child):e=ea(e,a,f),e}function q0(e,a,s,l){return Ao(),a.flags|=256,An(e,a,s,l),a.child}var Th={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bh(e){return{baseLanes:e,cachePool:Og()}}function Ah(e,a,s){return e=e!==null?e.childLanes&~s:0,a&&(e|=ci),e}function j0(e,a,s){var l=a.pendingProps,f=!1,m=(a.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),M&&(f=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,e===null){if(Oe){if(f?Pa(a):za(),Oe){var A=tn,G;if(G=A){t:{for(G=A,A=Ni;G.nodeType!==8;){if(!A){A=null;break t}if(G=xi(G.nextSibling),G===null){A=null;break t}}A=G}A!==null?(a.memoizedState={dehydrated:A,treeContext:mr!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},G=jn(18,null,null,0),G.stateNode=A,G.return=a,a.child=G,zn=a,tn=null,G=!0):G=!1}G||vr(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return ud(A)?a.lanes=32:a.lanes=536870912,null;ta(a)}return A=l.children,l=l.fallback,f?(za(),f=a.mode,A=bu({mode:"hidden",children:A},f),l=pr(l,f,s,null),A.return=a,l.return=a,A.sibling=l,a.child=A,f=a.child,f.memoizedState=bh(s),f.childLanes=Ah(e,M,s),a.memoizedState=Th,l):(Pa(a),wh(a,A))}if(G=e.memoizedState,G!==null&&(A=G.dehydrated,A!==null)){if(m)a.flags&256?(Pa(a),a.flags&=-257,a=Rh(e,a,s)):a.memoizedState!==null?(za(),a.child=e.child,a.flags|=128,a=null):(za(),f=l.fallback,A=a.mode,l=bu({mode:"visible",children:l.children},A),f=pr(f,A,s,null),f.flags|=2,l.return=a,f.return=a,l.sibling=f,a.child=l,hs(a,e.child,null,s),l=a.child,l.memoizedState=bh(s),l.childLanes=Ah(e,M,s),a.memoizedState=Th,a=f);else if(Pa(a),ud(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var rt=M.dgst;M=rt,l=Error(r(419)),l.stack="",l.digest=M,wo({value:l,source:null,stack:null}),a=Rh(e,a,s)}else if(yn||Ro(e,a,s,!1),M=(s&e.childLanes)!==0,yn||M){if(M=Ye,M!==null&&(l=s&-s,l=(l&42)!==0?1:Be(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==G.retryLane))throw G.retryLane=l,es(e,l),Jn(M,e,l),I0;A.data==="$?"||Yh(),a=Rh(e,a,s)}else A.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=G.treeContext,tn=xi(A.nextSibling),zn=a,Oe=!0,_r=null,Ni=!1,e!==null&&(oi[li++]=Zi,oi[li++]=Ki,oi[li++]=mr,Zi=e.id,Ki=e.overflow,mr=a),a=wh(a,l.children),a.flags|=4096);return a}return f?(za(),f=l.fallback,A=a.mode,G=e.child,rt=G.sibling,l=ji(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,rt!==null?f=ji(rt,f):(f=pr(f,A,s,null),f.flags|=2),f.return=a,l.return=a,l.sibling=f,a.child=l,l=f,f=a.child,A=e.child.memoizedState,A===null?A=bh(s):(G=A.cachePool,G!==null?(rt=dn._currentValue,G=G.parent!==rt?{parent:rt,pool:rt}:G):G=Og(),A={baseLanes:A.baseLanes|s,cachePool:G}),f.memoizedState=A,f.childLanes=Ah(e,M,s),a.memoizedState=Th,l):(Pa(a),s=e.child,e=s.sibling,s=ji(s,{mode:"visible",children:l.children}),s.return=a,s.sibling=null,e!==null&&(M=a.deletions,M===null?(a.deletions=[e],a.flags|=16):M.push(e)),a.child=s,a.memoizedState=null,s)}function wh(e,a){return a=bu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function bu(e,a){return e=jn(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rh(e,a,s){return hs(a,e.child,null,s),e=wh(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Z0(e,a,s){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Yf(e.return,a,s)}function Ch(e,a,s,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function K0(e,a,s){var l=a.pendingProps,f=l.revealOrder,m=l.tail;if(An(e,a,l.children,s),l=pn.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Z0(e,s,a);else if(e.tag===19)Z0(e,s,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(_t(pn,l),f){case"forwards":for(s=a.child,f=null;s!==null;)e=s.alternate,e!==null&&Su(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=a.child,a.child=null):(f=s.sibling,s.sibling=null),Ch(a,!1,f,s,m);break;case"backwards":for(s=null,f=a.child,a.child=null;f!==null;){if(e=f.alternate,e!==null&&Su(e)===null){a.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Ch(a,!0,s,null,m);break;case"together":Ch(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ea(e,a,s){if(e!==null&&(a.dependencies=e.dependencies),Ga|=a.lanes,(s&a.childLanes)===0)if(e!==null){if(Ro(e,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,s=ji(e,e.pendingProps),a.child=s,s.return=a;e.sibling!==null;)e=e.sibling,s=s.sibling=ji(e,e.pendingProps),s.return=a;s.sibling=null}return a.child}function Dh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&ru(e)))}function XM(e,a,s){switch(a.tag){case 3:Ct(a,a.stateNode.containerInfo),Da(a,dn,e.memoizedState.cache),Ao();break;case 27:case 5:et(a);break;case 4:Ct(a,a.stateNode.containerInfo);break;case 10:Da(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Pa(a),a.flags|=128,null):(s&a.child.childLanes)!==0?j0(e,a,s):(Pa(a),e=ea(e,a,s),e!==null?e.sibling:null);Pa(a);break;case 19:var f=(e.flags&128)!==0;if(l=(s&a.childLanes)!==0,l||(Ro(e,a,s,!1),l=(s&a.childLanes)!==0),f){if(l)return K0(e,a,s);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),_t(pn,pn.current),l)break;return null;case 22:case 23:return a.lanes=0,k0(e,a,s);case 24:Da(a,dn,e.memoizedState.cache)}return ea(e,a,s)}function Q0(e,a,s){if(e!==null)if(e.memoizedProps!==a.pendingProps)yn=!0;else{if(!Dh(e,s)&&(a.flags&128)===0)return yn=!1,XM(e,a,s);yn=(e.flags&131072)!==0}else yn=!1,Oe&&(a.flags&1048576)!==0&&wg(a,au,a.index);switch(a.lanes=0,a.tag){case 16:t:{e=a.pendingProps;var l=a.elementType,f=l._init;if(l=f(l._payload),a.type=l,typeof l=="function")If(l)?(e=Er(l,e),a.tag=1,a=Y0(null,a,l,e,s)):(a.tag=0,a=Eh(null,a,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===w){a.tag=11,a=H0(null,a,l,e,s);break t}else if(f===F){a.tag=14,a=G0(null,a,l,e,s);break t}}throw a=mt(l)||l,Error(r(306,a,""))}}return a;case 0:return Eh(e,a,a.type,a.pendingProps,s);case 1:return l=a.type,f=Er(l,a.pendingProps),Y0(e,a,l,f,s);case 3:t:{if(Ct(a,a.stateNode.containerInfo),e===null)throw Error(r(387));l=a.pendingProps;var m=a.memoizedState;f=m.element,Jf(e,a),Po(a,l,null,s);var M=a.memoizedState;if(l=M.cache,Da(a,dn,l),l!==m.cache&&qf(a,[dn],s,!0),Oo(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=q0(e,a,l,s);break t}else if(l!==f){f=ri(Error(r(424)),a),wo(f),a=q0(e,a,l,s);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=xi(e.firstChild),zn=a,Oe=!0,_r=null,Ni=!0,s=C0(a,null,l,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ao(),l===f){a=ea(e,a,s);break t}An(e,a,l,s)}a=a.child}return a;case 26:return Tu(e,a),e===null?(s=ev(a.type,null,a.pendingProps,null))?a.memoizedState=s:Oe||(s=a.type,e=a.pendingProps,l=Iu(it.current).createElement(s),l[nn]=a,l[fn]=e,Rn(l,s,e),on(l),a.stateNode=l):a.memoizedState=ev(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return et(a),e===null&&Oe&&(l=a.stateNode=$_(a.type,a.pendingProps,it.current),zn=a,Ni=!0,f=tn,Wa(a.type)?(cd=f,tn=xi(l.firstChild)):tn=f),An(e,a,a.pendingProps.children,s),Tu(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Oe&&((f=l=tn)&&(l=vE(l,a.type,a.pendingProps,Ni),l!==null?(a.stateNode=l,zn=a,tn=xi(l.firstChild),Ni=!1,f=!0):f=!1),f||vr(a)),et(a),f=a.type,m=a.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,sd(f,m)?l=null:M!==null&&sd(f,M)&&(a.flags|=32),a.memoizedState!==null&&(f=rh(e,a,zM,null,null,s),il._currentValue=f),Tu(e,a),An(e,a,l,s),a.child;case 6:return e===null&&Oe&&((e=s=tn)&&(s=xE(s,a.pendingProps,Ni),s!==null?(a.stateNode=s,zn=a,tn=null,e=!0):e=!1),e||vr(a)),null;case 13:return j0(e,a,s);case 4:return Ct(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=hs(a,null,l,s):An(e,a,l,s),a.child;case 11:return H0(e,a,a.type,a.pendingProps,s);case 7:return An(e,a,a.pendingProps,s),a.child;case 8:return An(e,a,a.pendingProps.children,s),a.child;case 12:return An(e,a,a.pendingProps.children,s),a.child;case 10:return l=a.pendingProps,Da(a,a.type,l.value),An(e,a,l.children,s),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,yr(a),f=Nn(f),l=l(f),a.flags|=1,An(e,a,l,s),a.child;case 14:return G0(e,a,a.type,a.pendingProps,s);case 15:return V0(e,a,a.type,a.pendingProps,s);case 19:return K0(e,a,s);case 31:return l=a.pendingProps,s=a.mode,l={mode:l.mode,children:l.children},e===null?(s=bu(l,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=ji(e.child,l),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return k0(e,a,s);case 24:return yr(a),l=Nn(dn),e===null?(f=Kf(),f===null&&(f=Ye,m=jf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),a.memoizedState={parent:l,cache:f},$f(a),Da(a,dn,f)):((e.lanes&s)!==0&&(Jf(e,a),Po(a,null,null,s),Oo()),f=e.memoizedState,m=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Da(a,dn,l)):(l=m.cache,Da(a,dn,l),l!==f.cache&&qf(a,[dn],s,!0))),An(e,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function na(e){e.flags|=4}function $0(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sv(a)){if(a=ui.current,a!==null&&((Re&4194048)===Re?Li!==null:(Re&62914560)!==Re&&(Re&536870912)===0||a!==Li))throw No=Qf,Pg;e.flags|=8192}}function Au(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Ft():536870912,e.lanes|=a,gs|=a)}function Vo(e,a){if(!Oe)switch(e.tailMode){case"hidden":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var a=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(a)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,a}function WM(e,a,s){var l=a.pendingProps;switch(kf(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(a),null;case 1:return Ke(a),null;case 3:return s=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),$i(dn),St(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(bo(a)?na(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Dg())),Ke(a),null;case 26:return s=a.memoizedState,e===null?(na(a),s!==null?(Ke(a),$0(a,s)):(Ke(a),a.flags&=-16777217)):s?s!==e.memoizedState?(na(a),Ke(a),$0(a,s)):(Ke(a),a.flags&=-16777217):(e.memoizedProps!==l&&na(a),Ke(a),a.flags&=-16777217),null;case 27:Rt(a),s=it.current;var f=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==l&&na(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Ke(a),null}e=$.current,bo(a)?Rg(a):(e=$_(f,l,s),a.stateNode=e,na(a))}return Ke(a),null;case 5:if(Rt(a),s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&na(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Ke(a),null}if(e=$.current,bo(a))Rg(a);else{switch(f=Iu(it.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[nn]=a,e[fn]=l;t:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break t;for(;f.sibling===null;){if(f.return===null||f.return===a)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=e;t:switch(Rn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&na(a)}}return Ke(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&na(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(r(166));if(e=it.current,bo(a)){if(e=a.stateNode,s=a.memoizedProps,l=null,f=zn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[nn]=a,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||W_(e.nodeValue,s)),e||vr(a)}else e=Iu(e).createTextNode(l),e[nn]=a,a.stateNode=e}return Ke(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=bo(a),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[nn]=a}else Ao(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ke(a),f=!1}else f=Dg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(ta(a),a):(ta(a),null)}if(ta(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==e&&s&&(a.child.flags|=8192),Au(a,a.updateQueue),Ke(a),null;case 4:return St(),e===null&&ed(a.stateNode.containerInfo),Ke(a),null;case 10:return $i(a.type),Ke(a),null;case 19:if(At(pn),f=a.memoizedState,f===null)return Ke(a),null;if(l=(a.flags&128)!==0,m=f.rendering,m===null)if(l)Vo(f,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=Su(e),m!==null){for(a.flags|=128,Vo(f,!1),e=m.updateQueue,a.updateQueue=e,Au(a,e),a.subtreeFlags=0,e=s,s=a.child;s!==null;)Ag(s,e),s=s.sibling;return _t(pn,pn.current&1|2),a.child}e=e.sibling}f.tail!==null&&qt()>Cu&&(a.flags|=128,l=!0,Vo(f,!1),a.lanes=4194304)}else{if(!l)if(e=Su(m),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Au(a,e),Vo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Oe)return Ke(a),null}else 2*qt()-f.renderingStartTime>Cu&&s!==536870912&&(a.flags|=128,l=!0,Vo(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(e=f.last,e!==null?e.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=qt(),a.sibling=null,e=pn.current,_t(pn,l?e&1|2:e&1),a):(Ke(a),null);case 22:case 23:return ta(a),ih(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(s&536870912)!==0&&(a.flags&128)===0&&(Ke(a),a.subtreeFlags&6&&(a.flags|=8192)):Ke(a),s=a.updateQueue,s!==null&&Au(a,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==s&&(a.flags|=2048),e!==null&&At(Sr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),$i(dn),Ke(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function YM(e,a){switch(kf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return $i(dn),St(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Rt(a),null;case 13:if(ta(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Ao()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return At(pn),null;case 4:return St(),null;case 10:return $i(a.type),null;case 22:case 23:return ta(a),ih(),e!==null&&At(Sr),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return $i(dn),null;case 25:return null;default:return null}}function J0(e,a){switch(kf(a),a.tag){case 3:$i(dn),St();break;case 26:case 27:case 5:Rt(a);break;case 4:St();break;case 13:ta(a);break;case 19:At(pn);break;case 10:$i(a.type);break;case 22:case 23:ta(a),ih(),e!==null&&At(Sr);break;case 24:$i(dn)}}function ko(e,a){try{var s=a.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(A){Xe(a,a.return,A)}}function Ba(e,a,s){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,f=a;var G=s,rt=A;try{rt()}catch(vt){Xe(f,G,vt)}}}l=l.next}while(l!==m)}}catch(vt){Xe(a,a.return,vt)}}function t_(e){var a=e.updateQueue;if(a!==null){var s=e.stateNode;try{Gg(a,s)}catch(l){Xe(e,e.return,l)}}}function e_(e,a,s){s.props=Er(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Xe(e,a,l)}}function Xo(e,a){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Xe(e,a,f)}}function Oi(e,a){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xe(e,a,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xe(e,a,f)}else s.current=null}function n_(e){var a=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xe(e,e.return,f)}}function Uh(e,a,s){try{var l=e.stateNode;dE(l,e.type,s,a),l[fn]=a}catch(f){Xe(e,e.return,f)}}function i_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||i_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lh(e,a,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(e),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Fu));else if(l!==4&&(l===27&&Wa(e.type)&&(s=e.stateNode,a=null),e=e.child,e!==null))for(Lh(e,a,s),e=e.sibling;e!==null;)Lh(e,a,s),e=e.sibling}function wu(e,a,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?s.insertBefore(e,a):s.appendChild(e);else if(l!==4&&(l===27&&Wa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(wu(e,a,s),e=e.sibling;e!==null;)wu(e,a,s),e=e.sibling}function a_(e){var a=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Rn(a,l,s),a[nn]=e,a[fn]=s}catch(m){Xe(e,e.return,m)}}var ia=!1,rn=!1,Oh=!1,r_=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function qM(e,a){if(e=e.containerInfo,ad=Wu,e=gg(e),Nf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var M=0,A=-1,G=-1,rt=0,vt=0,bt=e,lt=null;e:for(;;){for(var ut;bt!==s||f!==0&&bt.nodeType!==3||(A=M+f),bt!==m||l!==0&&bt.nodeType!==3||(G=M+l),bt.nodeType===3&&(M+=bt.nodeValue.length),(ut=bt.firstChild)!==null;)lt=bt,bt=ut;for(;;){if(bt===e)break e;if(lt===s&&++rt===f&&(A=M),lt===m&&++vt===l&&(G=M),(ut=bt.nextSibling)!==null)break;bt=lt,lt=bt.parentNode}bt=ut}s=A===-1||G===-1?null:{start:A,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(rd={focusedElem:e,selectionRange:s},Wu=!1,Sn=a;Sn!==null;)if(a=Sn,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,Sn=e;else for(;Sn!==null;){switch(a=Sn,m=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=a,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ue=Er(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(ue,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){Xe(s,s.return,se)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,s=e.nodeType,s===9)ld(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,Sn=e;break}Sn=a.return}}function s_(e,a,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Fa(e,s),l&4&&ko(5,s);break;case 1:if(Fa(e,s),l&4)if(e=s.stateNode,a===null)try{e.componentDidMount()}catch(M){Xe(s,s.return,M)}else{var f=Er(s.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(f,a,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Xe(s,s.return,M)}}l&64&&t_(s),l&512&&Xo(s,s.return);break;case 3:if(Fa(e,s),l&64&&(e=s.updateQueue,e!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{Gg(e,a)}catch(M){Xe(s,s.return,M)}}break;case 27:a===null&&l&4&&a_(s);case 26:case 5:Fa(e,s),a===null&&l&4&&n_(s),l&512&&Xo(s,s.return);break;case 12:Fa(e,s);break;case 13:Fa(e,s),l&4&&u_(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=nE.bind(null,s),yE(e,s))));break;case 22:if(l=s.memoizedState!==null||ia,!l){a=a!==null&&a.memoizedState!==null||rn,f=ia;var m=rn;ia=l,(rn=a)&&!m?Ia(e,s,(s.subtreeFlags&8772)!==0):Fa(e,s),ia=f,rn=m}break;case 30:break;default:Fa(e,s)}}function o_(e){var a=e.alternate;a!==null&&(e.alternate=null,o_(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Aa(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,kn=!1;function aa(e,a,s){for(s=s.child;s!==null;)l_(e,a,s),s=s.sibling}function l_(e,a,s){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ot,s)}catch{}switch(s.tag){case 26:rn||Oi(s,a),aa(e,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:rn||Oi(s,a);var l=qe,f=kn;Wa(s.type)&&(qe=s.stateNode,kn=!1),aa(e,a,s),Jo(s.stateNode),qe=l,kn=f;break;case 5:rn||Oi(s,a);case 6:if(l=qe,f=kn,qe=null,aa(e,a,s),qe=l,kn=f,qe!==null)if(kn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(s.stateNode)}catch(m){Xe(s,a,m)}else try{qe.removeChild(s.stateNode)}catch(m){Xe(s,a,m)}break;case 18:qe!==null&&(kn?(e=qe,K_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),ol(e)):K_(qe,s.stateNode));break;case 4:l=qe,f=kn,qe=s.stateNode.containerInfo,kn=!0,aa(e,a,s),qe=l,kn=f;break;case 0:case 11:case 14:case 15:rn||Ba(2,s,a),rn||Ba(4,s,a),aa(e,a,s);break;case 1:rn||(Oi(s,a),l=s.stateNode,typeof l.componentWillUnmount=="function"&&e_(s,a,l)),aa(e,a,s);break;case 21:aa(e,a,s);break;case 22:rn=(l=rn)||s.memoizedState!==null,aa(e,a,s),rn=l;break;default:aa(e,a,s)}}function u_(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ol(e)}catch(s){Xe(a,a.return,s)}}function jM(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new r_),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new r_),a;default:throw Error(r(435,e.tag))}}function Ph(e,a){var s=jM(e);a.forEach(function(l){var f=iE.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function Zn(e,a){var s=a.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,M=a,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){qe=A.stateNode,kn=!1;break t}break;case 5:qe=A.stateNode,kn=!1;break t;case 3:case 4:qe=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(qe===null)throw Error(r(160));l_(m,M,f),qe=null,kn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)c_(a,e),a=a.sibling}var vi=null;function c_(e,a){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(a,e),Kn(e),l&4&&(Ba(3,e,e.return),ko(3,e),Ba(5,e,e.return));break;case 1:Zn(a,e),Kn(e),l&512&&(rn||s===null||Oi(s,s.return)),l&64&&ia&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=vi;if(Zn(a,e),Kn(e),l&512&&(rn||s===null||Oi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ba]||m[nn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Rn(m,l,s),m[nn]=e,on(m),l=m;break t;case"link":var M=av("link","href",f).get(l+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(m=M[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break e}}m=f.createElement(l),Rn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=av("meta","content",f).get(l+(s.content||""))){for(A=0;A<M.length;A++)if(m=M[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break e}}m=f.createElement(l),Rn(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[nn]=e,on(m),l=m}e.stateNode=l}else rv(f,e.type,e.stateNode);else e.stateNode=iv(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?rv(f,e.type,e.stateNode):iv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Uh(e,e.memoizedProps,s.memoizedProps)}break;case 27:Zn(a,e),Kn(e),l&512&&(rn||s===null||Oi(s,s.return)),s!==null&&l&4&&Uh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Zn(a,e),Kn(e),l&512&&(rn||s===null||Oi(s,s.return)),e.flags&32){f=e.stateNode;try{Ui(f,"")}catch(ut){Xe(e,e.return,ut)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Uh(e,f,s!==null?s.memoizedProps:f)),l&1024&&(Oh=!0);break;case 6:if(Zn(a,e),Kn(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(ut){Xe(e,e.return,ut)}}break;case 3:if(Vu=null,f=vi,vi=Hu(a.containerInfo),Zn(a,e),vi=f,Kn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ol(a.containerInfo)}catch(ut){Xe(e,e.return,ut)}Oh&&(Oh=!1,f_(e));break;case 4:l=vi,vi=Hu(e.stateNode.containerInfo),Zn(a,e),Kn(e),vi=l;break;case 12:Zn(a,e),Kn(e);break;case 13:Zn(a,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Gh=qt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ph(e,l)));break;case 22:f=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,rt=ia,vt=rn;if(ia=rt||f,rn=vt||G,Zn(a,e),rn=vt,ia=rt,Kn(e),l&8192)t:for(a=e.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(s===null||G||ia||rn||Tr(e)),s=null,a=e;;){if(a.tag===5||a.tag===26){if(s===null){G=s=a;try{if(m=G.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=G.stateNode;var bt=G.memoizedProps.style,lt=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(ut){Xe(G,G.return,ut)}}}else if(a.tag===6){if(s===null){G=a;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(ut){Xe(G,G.return,ut)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Ph(e,s))));break;case 19:Zn(a,e),Kn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ph(e,l)));break;case 30:break;case 21:break;default:Zn(a,e),Kn(e)}}function Kn(e){var a=e.flags;if(a&2){try{for(var s,l=e.return;l!==null;){if(i_(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=Nh(e);wu(e,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Ui(M,""),s.flags&=-33);var A=Nh(e);wu(e,A,M);break;case 3:case 4:var G=s.stateNode.containerInfo,rt=Nh(e);Lh(e,rt,G);break;default:throw Error(r(161))}}catch(vt){Xe(e,e.return,vt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function f_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;f_(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Fa(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)s_(e,a.alternate,a),a=a.sibling}function Tr(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Ba(4,a,a.return),Tr(a);break;case 1:Oi(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&e_(a,a.return,s),Tr(a);break;case 27:Jo(a.stateNode);case 26:case 5:Oi(a,a.return),Tr(a);break;case 22:a.memoizedState===null&&Tr(a);break;case 30:Tr(a);break;default:Tr(a)}e=e.sibling}}function Ia(e,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=e,m=a,M=m.flags;switch(m.tag){case 0:case 11:case 15:Ia(f,m,s),ko(4,m);break;case 1:if(Ia(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(rt){Xe(l,l.return,rt)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Hg(G[f],A)}catch(rt){Xe(l,l.return,rt)}}s&&M&64&&t_(m),Xo(m,m.return);break;case 27:a_(m);case 26:case 5:Ia(f,m,s),s&&l===null&&M&4&&n_(m),Xo(m,m.return);break;case 12:Ia(f,m,s);break;case 13:Ia(f,m,s),s&&M&4&&u_(f,m);break;case 22:m.memoizedState===null&&Ia(f,m,s),Xo(m,m.return);break;case 30:break;default:Ia(f,m,s)}a=a.sibling}}function zh(e,a){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Co(s))}function Bh(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Co(e))}function Pi(e,a,s,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)h_(e,a,s,l),a=a.sibling}function h_(e,a,s,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Pi(e,a,s,l),f&2048&&ko(9,a);break;case 1:Pi(e,a,s,l);break;case 3:Pi(e,a,s,l),f&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Co(e)));break;case 12:if(f&2048){Pi(e,a,s,l),e=a.stateNode;try{var m=a.memoizedProps,M=m.id,A=m.onPostCommit;typeof A=="function"&&A(M,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Xe(a,a.return,G)}}else Pi(e,a,s,l);break;case 13:Pi(e,a,s,l);break;case 23:break;case 22:m=a.stateNode,M=a.alternate,a.memoizedState!==null?m._visibility&2?Pi(e,a,s,l):Wo(e,a):m._visibility&2?Pi(e,a,s,l):(m._visibility|=2,ds(e,a,s,l,(a.subtreeFlags&10256)!==0)),f&2048&&zh(M,a);break;case 24:Pi(e,a,s,l),f&2048&&Bh(a.alternate,a);break;default:Pi(e,a,s,l)}}function ds(e,a,s,l,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=e,M=a,A=s,G=l,rt=M.flags;switch(M.tag){case 0:case 11:case 15:ds(m,M,A,G,f),ko(8,M);break;case 23:break;case 22:var vt=M.stateNode;M.memoizedState!==null?vt._visibility&2?ds(m,M,A,G,f):Wo(m,M):(vt._visibility|=2,ds(m,M,A,G,f)),f&&rt&2048&&zh(M.alternate,M);break;case 24:ds(m,M,A,G,f),f&&rt&2048&&Bh(M.alternate,M);break;default:ds(m,M,A,G,f)}a=a.sibling}}function Wo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=e,l=a,f=l.flags;switch(l.tag){case 22:Wo(s,l),f&2048&&zh(l.alternate,l);break;case 24:Wo(s,l),f&2048&&Bh(l.alternate,l);break;default:Wo(s,l)}a=a.sibling}}var Yo=8192;function ps(e){if(e.subtreeFlags&Yo)for(e=e.child;e!==null;)d_(e),e=e.sibling}function d_(e){switch(e.tag){case 26:ps(e),e.flags&Yo&&e.memoizedState!==null&&LE(vi,e.memoizedState,e.memoizedProps);break;case 5:ps(e);break;case 3:case 4:var a=vi;vi=Hu(e.stateNode.containerInfo),ps(e),vi=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Yo,Yo=16777216,ps(e),Yo=a):ps(e));break;default:ps(e)}}function p_(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function qo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];Sn=l,g_(l,e)}p_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)m_(e),e=e.sibling}function m_(e){switch(e.tag){case 0:case 11:case 15:qo(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:qo(e);break;case 12:qo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ru(e)):qo(e);break;default:qo(e)}}function Ru(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];Sn=l,g_(l,e)}p_(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Ba(8,a,a.return),Ru(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,Ru(a));break;default:Ru(a)}e=e.sibling}}function g_(e,a){for(;Sn!==null;){var s=Sn;switch(s.tag){case 0:case 11:case 15:Ba(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Co(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Sn=l;else t:for(s=e;Sn!==null;){l=Sn;var f=l.sibling,m=l.return;if(o_(l),l===s){Sn=null;break t}if(f!==null){f.return=m,Sn=f;break t}Sn=m}}}var ZM={getCacheForType:function(e){var a=Nn(dn),s=a.data.get(e);return s===void 0&&(s=e(),a.data.set(e,s)),s}},KM=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,ye=null,Re=0,ze=0,Qn=null,Ha=!1,ms=!1,Fh=!1,ra=0,en=0,Ga=0,br=0,Ih=0,ci=0,gs=0,jo=null,Xn=null,Hh=!1,Gh=0,Cu=1/0,Du=null,Va=null,wn=0,ka=null,_s=null,vs=0,Vh=0,kh=null,__=null,Zo=0,Xh=null;function $n(){if((Pe&2)!==0&&Re!==0)return Re&-Re;if(B.T!==null){var e=rs;return e!==0?e:Qh()}return we()}function v_(){ci===0&&(ci=(Re&536870912)===0||Oe?X():536870912);var e=ui.current;return e!==null&&(e.flags|=32),ci}function Jn(e,a,s){(e===Ye&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(xs(e,0),Xa(e,Re,ci,!1)),yt(e,s),((Pe&2)===0||e!==Ye)&&(e===Ye&&((Pe&2)===0&&(br|=s),en===4&&Xa(e,Re,ci,!1)),zi(e))}function x_(e,a,s){if((Pe&6)!==0)throw Error(r(327));var l=!s&&(a&124)===0&&(a&e.expiredLanes)===0||Jt(e,a),f=l?JM(e,a):qh(e,a,!0),m=l;do{if(f===0){ms&&!l&&Xa(e,a,0,!1);break}else{if(s=e.current.alternate,m&&!QM(s)){f=qh(e,a,!1),m=!1;continue}if(f===2){if(m=a,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;t:{var A=e;f=jo;var G=A.current.memoizedState.isDehydrated;if(G&&(xs(A,M).flags|=256),M=qh(A,M,!1),M!==2){if(Fh&&!G){A.errorRecoveryDisabledLanes|=m,br|=m,f=4;break t}m=Xn,Xn=f,m!==null&&(Xn===null?Xn=m:Xn.push.apply(Xn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){xs(e,0),Xa(e,a,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Xa(l,a,ci,!Ha);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(f=Gh+300-qt(),10<f)){if(Xa(l,a,ci,!Ha),ie(l,0,!0)!==0)break t;l.timeoutHandle=j_(y_.bind(null,l,s,Xn,Du,Hh,a,ci,br,gs,Ha,m,2,-0,0),f);break t}y_(l,s,Xn,Du,Hh,a,ci,br,gs,Ha,m,0,-0,0)}}break}while(!0);zi(e)}function y_(e,a,s,l,f,m,M,A,G,rt,vt,bt,lt,ut){if(e.timeoutHandle=-1,bt=a.subtreeFlags,(bt&8192||(bt&16785408)===16785408)&&(nl={stylesheets:null,count:0,unsuspend:NE},d_(a),bt=OE(),bt!==null)){e.cancelPendingCommit=bt(w_.bind(null,e,a,m,s,l,f,M,A,G,vt,1,lt,ut)),Xa(e,m,M,!rt);return}w_(e,a,m,s,l,f,M,A,G)}function QM(e){for(var a=e;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!qn(m(),f))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Xa(e,a,s,l){a&=~Ih,a&=~br,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var f=a;0<f;){var m=31-Lt(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&kt(e,s,a)}function Uu(){return(Pe&6)===0?(Ko(0),!1):!0}function Wh(){if(ye!==null){if(ze===0)var e=ye.return;else e=ye,Qi=xr=null,lh(e),fs=null,Ho=0,e=ye;for(;e!==null;)J0(e.alternate,e),e=e.return;ye=null}}function xs(e,a){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,mE(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Wh(),Ye=e,ye=s=ji(e.current,null),Re=a,ze=0,Qn=null,Ha=!1,ms=Jt(e,a),Fh=!1,gs=ci=Ih=br=Ga=en=0,Xn=jo=null,Hh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var f=31-Lt(l),m=1<<f;a|=e[f],l&=~m}return ra=a,Jl(),s}function S_(e,a){_e=null,B.H=vu,a===Uo||a===lu?(a=Fg(),ze=3):a===Pg?(a=Fg(),ze=4):ze=a===I0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Qn=a,ye===null&&(en=1,Eu(e,ri(a,e.current)))}function M_(){var e=B.H;return B.H=vu,e===null?vu:e}function E_(){var e=B.A;return B.A=ZM,e}function Yh(){en=4,Ha||(Re&4194048)!==Re&&ui.current!==null||(ms=!0),(Ga&134217727)===0&&(br&134217727)===0||Ye===null||Xa(Ye,Re,ci,!1)}function qh(e,a,s){var l=Pe;Pe|=2;var f=M_(),m=E_();(Ye!==e||Re!==a)&&(Du=null,xs(e,a)),a=!1;var M=en;t:do try{if(ze!==0&&ye!==null){var A=ye,G=Qn;switch(ze){case 8:Wh(),M=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(a=!0);var rt=ze;if(ze=0,Qn=null,ys(e,A,G,rt),s&&ms){M=0;break t}break;default:rt=ze,ze=0,Qn=null,ys(e,A,G,rt)}}$M(),M=en;break}catch(vt){S_(e,vt)}while(!0);return a&&e.shellSuspendCounter++,Qi=xr=null,Pe=l,B.H=f,B.A=m,ye===null&&(Ye=null,Re=0,Jl()),M}function $M(){for(;ye!==null;)T_(ye)}function JM(e,a){var s=Pe;Pe|=2;var l=M_(),f=E_();Ye!==e||Re!==a?(Du=null,Cu=qt()+500,xs(e,a)):ms=Jt(e,a);t:do try{if(ze!==0&&ye!==null){a=ye;var m=Qn;e:switch(ze){case 1:ze=0,Qn=null,ys(e,a,m,1);break;case 2:case 9:if(zg(m)){ze=0,Qn=null,b_(a);break}a=function(){ze!==2&&ze!==9||Ye!==e||(ze=7),zi(e)},m.then(a,a);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:zg(m)?(ze=0,Qn=null,b_(a)):(ze=0,Qn=null,ys(e,a,m,7));break;case 5:var M=null;switch(ye.tag){case 26:M=ye.memoizedState;case 5:case 27:var A=ye;if(!M||sv(M)){ze=0,Qn=null;var G=A.sibling;if(G!==null)ye=G;else{var rt=A.return;rt!==null?(ye=rt,Nu(rt)):ye=null}break e}}ze=0,Qn=null,ys(e,a,m,5);break;case 6:ze=0,Qn=null,ys(e,a,m,6);break;case 8:Wh(),en=6;break t;default:throw Error(r(462))}}tE();break}catch(vt){S_(e,vt)}while(!0);return Qi=xr=null,B.H=l,B.A=f,Pe=s,ye!==null?0:(Ye=null,Re=0,Jl(),en)}function tE(){for(;ye!==null&&!te();)T_(ye)}function T_(e){var a=Q0(e.alternate,e,ra);e.memoizedProps=e.pendingProps,a===null?Nu(e):ye=a}function b_(e){var a=e,s=a.alternate;switch(a.tag){case 15:case 0:a=W0(s,a,a.pendingProps,a.type,void 0,Re);break;case 11:a=W0(s,a,a.pendingProps,a.type.render,a.ref,Re);break;case 5:lh(a);default:J0(s,a),a=ye=Ag(a,ra),a=Q0(s,a,ra)}e.memoizedProps=e.pendingProps,a===null?Nu(e):ye=a}function ys(e,a,s,l){Qi=xr=null,lh(a),fs=null,Ho=0;var f=a.return;try{if(kM(e,f,a,s,Re)){en=1,Eu(e,ri(s,e.current)),ye=null;return}}catch(m){if(f!==null)throw ye=f,m;en=1,Eu(e,ri(s,e.current)),ye=null;return}a.flags&32768?(Oe||l===1?e=!0:ms||(Re&536870912)!==0?e=!1:(Ha=e=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),A_(a,e)):Nu(a)}function Nu(e){var a=e;do{if((a.flags&32768)!==0){A_(a,Ha);return}e=a.return;var s=WM(a.alternate,a,ra);if(s!==null){ye=s;return}if(a=a.sibling,a!==null){ye=a;return}ye=a=e}while(a!==null);en===0&&(en=5)}function A_(e,a){do{var s=YM(e.alternate,e);if(s!==null){s.flags&=32767,ye=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(e=e.sibling,e!==null)){ye=e;return}ye=e=s}while(e!==null);en=6,ye=null}function w_(e,a,s,l,f,m,M,A,G){e.cancelPendingCommit=null;do Lu();while(wn!==0);if((Pe&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(m=a.lanes|a.childLanes,m|=Bf,Vt(e,s,m,M,A,G),e===Ye&&(ye=Ye=null,Re=0),_s=a,ka=e,vs=s,Vh=m,kh=f,__=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aE(O,function(){return N_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=Y.p,Y.p=2,M=Pe,Pe|=4;try{qM(e,a,s)}finally{Pe=M,Y.p=f,B.T=l}}wn=1,R_(),C_(),D_()}}function R_(){if(wn===1){wn=0;var e=ka,a=_s,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=Y.p;Y.p=2;var f=Pe;Pe|=4;try{c_(a,e);var m=rd,M=gg(e.containerInfo),A=m.focusedElem,G=m.selectionRange;if(M!==A&&A&&A.ownerDocument&&mg(A.ownerDocument.documentElement,A)){if(G!==null&&Nf(A)){var rt=G.start,vt=G.end;if(vt===void 0&&(vt=rt),"selectionStart"in A)A.selectionStart=rt,A.selectionEnd=Math.min(vt,A.value.length);else{var bt=A.ownerDocument||document,lt=bt&&bt.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),ue=A.textContent.length,se=Math.min(G.start,ue),He=G.end===void 0?se:Math.min(G.end,ue);!ut.extend&&se>He&&(M=He,He=se,se=M);var q=pg(A,se),V=pg(A,He);if(q&&V&&(ut.rangeCount!==1||ut.anchorNode!==q.node||ut.anchorOffset!==q.offset||ut.focusNode!==V.node||ut.focusOffset!==V.offset)){var J=bt.createRange();J.setStart(q.node,q.offset),ut.removeAllRanges(),se>He?(ut.addRange(J),ut.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),ut.addRange(J))}}}}for(bt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&bt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<bt.length;A++){var Et=bt[A];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Wu=!!ad,rd=ad=null}finally{Pe=f,Y.p=l,B.T=s}}e.current=a,wn=2}}function C_(){if(wn===2){wn=0;var e=ka,a=_s,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=Y.p;Y.p=2;var f=Pe;Pe|=4;try{s_(e,a.alternate,a)}finally{Pe=f,Y.p=l,B.T=s}}wn=3}}function D_(){if(wn===4||wn===3){wn=0,Ht();var e=ka,a=_s,s=vs,l=__;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?wn=5:(wn=0,_s=ka=null,U_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Va=null),je(s),a=a.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ot,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=B.T,f=Y.p,Y.p=2,B.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var A=l[M];m(A.value,{componentStack:A.stack})}}finally{B.T=a,Y.p=f}}(vs&3)!==0&&Lu(),zi(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===Xh?Zo++:(Zo=0,Xh=e):Zo=0,Ko(0)}}function U_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Co(a)))}function Lu(e){return R_(),C_(),D_(),N_()}function N_(){if(wn!==5)return!1;var e=ka,a=Vh;Vh=0;var s=je(vs),l=B.T,f=Y.p;try{Y.p=32>s?32:s,B.T=null,s=kh,kh=null;var m=ka,M=vs;if(wn=0,_s=ka=null,vs=0,(Pe&6)!==0)throw Error(r(331));var A=Pe;if(Pe|=4,m_(m.current),h_(m,m.current,M,s),Pe=A,Ko(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ot,m)}catch{}return!0}finally{Y.p=f,B.T=l,U_(e,a)}}function L_(e,a,s){a=ri(s,a),a=Mh(e.stateNode,a,2),e=La(e,a,2),e!==null&&(yt(e,2),zi(e))}function Xe(e,a,s){if(e.tag===3)L_(e,e,s);else for(;a!==null;){if(a.tag===3){L_(a,e,s);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Va===null||!Va.has(l))){e=ri(s,e),s=B0(2),l=La(a,s,2),l!==null&&(F0(s,l,a,e),yt(l,2),zi(l));break}}a=a.return}}function jh(e,a,s){var l=e.pingCache;if(l===null){l=e.pingCache=new KM;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(s)||(Fh=!0,f.add(s),e=eE.bind(null,e,a,s),a.then(e,e))}function eE(e,a,s){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ye===e&&(Re&s)===s&&(en===4||en===3&&(Re&62914560)===Re&&300>qt()-Gh?(Pe&2)===0&&xs(e,0):Ih|=s,gs===Re&&(gs=0)),zi(e)}function O_(e,a){a===0&&(a=Ft()),e=es(e,a),e!==null&&(yt(e,a),zi(e))}function nE(e){var a=e.memoizedState,s=0;a!==null&&(s=a.retryLane),O_(e,s)}function iE(e,a){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(a),O_(e,s)}function aE(e,a){return Bt(e,a)}var Ou=null,Ss=null,Zh=!1,Pu=!1,Kh=!1,Ar=0;function zi(e){e!==Ss&&e.next===null&&(Ss===null?Ou=Ss=e:Ss=Ss.next=e),Pu=!0,Zh||(Zh=!0,sE())}function Ko(e,a){if(!Kh&&Pu){Kh=!0;do for(var s=!1,l=Ou;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Lt(42|e)+1)-1,m&=f&~(M&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,F_(l,m))}else m=Re,m=ie(l,l===Ye?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Jt(l,m)||(s=!0,F_(l,m));l=l.next}while(s);Kh=!1}}function rE(){P_()}function P_(){Pu=Zh=!1;var e=0;Ar!==0&&(pE()&&(e=Ar),Ar=0);for(var a=qt(),s=null,l=Ou;l!==null;){var f=l.next,m=z_(l,a);m===0?(l.next=null,s===null?Ou=f:s.next=f,f===null&&(Ss=s)):(s=l,(e!==0||(m&3)!==0)&&(Pu=!0)),l=f}Ko(e)}function z_(e,a){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-Lt(m),A=1<<M,G=f[M];G===-1?((A&s)===0||(A&l)!==0)&&(f[M]=me(A,a)):G<=a&&(e.expiredLanes|=A),m&=~A}if(a=Ye,s=Re,s=ie(e,e===a?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===a&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&z(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Jt(e,s)){if(a=s&-s,a===e.callbackPriority)return a;switch(l!==null&&z(l),je(s)){case 2:case 8:s=Kt;break;case 32:s=O;break;case 268435456:s=st;break;default:s=O}return l=B_.bind(null,e),s=Bt(s,l),e.callbackPriority=a,e.callbackNode=s,a}return l!==null&&l!==null&&z(l),e.callbackPriority=2,e.callbackNode=null,2}function B_(e,a){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Lu()&&e.callbackNode!==s)return null;var l=Re;return l=ie(e,e===Ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(x_(e,l,a),z_(e,qt()),e.callbackNode!=null&&e.callbackNode===s?B_.bind(null,e):null)}function F_(e,a){if(Lu())return null;x_(e,a,!0)}function sE(){gE(function(){(Pe&6)!==0?Bt(he,rE):P_()})}function Qh(){return Ar===0&&(Ar=X()),Ar}function I_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yl(""+e)}function H_(e,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,e.id&&s.setAttribute("form",e.id),a.parentNode.insertBefore(s,a),e=new FormData(e),s.parentNode.removeChild(s),e}function oE(e,a,s,l,f){if(a==="submit"&&s&&s.stateNode===f){var m=I_((f[fn]||null).action),M=l.submitter;M&&(a=(a=M[fn]||null)?I_(a.formAction):M.getAttribute("formAction"),a!==null&&(m=a,M=null));var A=new Kl("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ar!==0){var G=M?H_(f,M):new FormData(f);_h(s,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(A.preventDefault(),G=M?H_(f,M):new FormData(f),_h(s,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var $h=0;$h<zf.length;$h++){var Jh=zf[$h],lE=Jh.toLowerCase(),uE=Jh[0].toUpperCase()+Jh.slice(1);_i(lE,"on"+uE)}_i(xg,"onAnimationEnd"),_i(yg,"onAnimationIteration"),_i(Sg,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(AM,"onTransitionRun"),_i(wM,"onTransitionStart"),_i(RM,"onTransitionCancel"),_i(Mg,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function G_(e,a){a=(a&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var M=l.length-1;0<=M;M--){var A=l[M],G=A.instance,rt=A.currentTarget;if(A=A.listener,G!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=rt;try{m(f)}catch(vt){Mu(vt)}f.currentTarget=null,m=G}else for(M=0;M<l.length;M++){if(A=l[M],G=A.instance,rt=A.currentTarget,A=A.listener,G!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=rt;try{m(f)}catch(vt){Mu(vt)}f.currentTarget=null,m=G}}}}function Se(e,a){var s=a[Di];s===void 0&&(s=a[Di]=new Set);var l=e+"__bubble";s.has(l)||(V_(a,e,2,!1),s.add(l))}function td(e,a,s){var l=0;a&&(l|=4),V_(s,e,l,a)}var zu="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[zu]){e[zu]=!0,Xl.forEach(function(s){s!=="selectionchange"&&(cE.has(s)||td(s,!1,e),td(s,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[zu]||(a[zu]=!0,td("selectionchange",!1,a))}}function V_(e,a,s,l){switch(hv(a)){case 2:var f=BE;break;case 8:f=FE;break;default:f=md}s=f.bind(null,a,s,e),f=void 0,!Ef||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(a,s,{capture:!0,passive:f}):e.addEventListener(a,s,!0):f!==void 0?e.addEventListener(a,s,{passive:f}):e.addEventListener(a,s,!1)}function nd(e,a,s,l,f){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===f)break;if(M===4)for(M=l.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;A!==null;){if(M=Vi(A),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){l=m=M;continue t}A=A.parentNode}}l=l.return}Zm(function(){var rt=m,vt=Sf(s),bt=[];t:{var lt=Eg.get(e);if(lt!==void 0){var ut=Kl,ue=e;switch(e){case"keypress":if(jl(s)===0)break t;case"keydown":case"keyup":ut=aM;break;case"focusin":ue="focus",ut=wf;break;case"focusout":ue="blur",ut=wf;break;case"beforeblur":case"afterblur":ut=wf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=oM;break;case xg:case yg:case Sg:ut=ZS;break;case Mg:ut=uM;break;case"scroll":case"scrollend":ut=XS;break;case"wheel":ut=fM;break;case"copy":case"cut":case"paste":ut=QS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=tg;break;case"toggle":case"beforetoggle":ut=dM}var se=(a&4)!==0,He=!se&&(e==="scroll"||e==="scrollend"),q=se?lt!==null?lt+"Capture":null:lt;se=[];for(var V=rt,J;V!==null;){var Et=V;if(J=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||J===null||q===null||(Et=go(V,q),Et!=null&&se.push($o(V,Et,J))),He)break;V=V.return}0<se.length&&(lt=new ut(lt,ue,null,s,vt),bt.push({event:lt,listeners:se}))}}if((a&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&s!==yf&&(ue=s.relatedTarget||s.fromElement)&&(Vi(ue)||ue[Cn]))break t;if((ut||lt)&&(lt=vt.window===vt?vt:(lt=vt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(ue=s.relatedTarget||s.toElement,ut=rt,ue=ue?Vi(ue):null,ue!==null&&(He=u(ue),se=ue.tag,ue!==He||se!==5&&se!==27&&se!==6)&&(ue=null)):(ut=null,ue=rt),ut!==ue)){if(se=$m,Et="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(se=tg,Et="onPointerLeave",q="onPointerEnter",V="pointer"),He=ut==null?lt:cr(ut),J=ue==null?lt:cr(ue),lt=new se(Et,V+"leave",ut,s,vt),lt.target=He,lt.relatedTarget=J,Et=null,Vi(vt)===rt&&(se=new se(q,V+"enter",ue,s,vt),se.target=J,se.relatedTarget=He,Et=se),He=Et,ut&&ue)e:{for(se=ut,q=ue,V=0,J=se;J;J=Ms(J))V++;for(J=0,Et=q;Et;Et=Ms(Et))J++;for(;0<V-J;)se=Ms(se),V--;for(;0<J-V;)q=Ms(q),J--;for(;V--;){if(se===q||q!==null&&se===q.alternate)break e;se=Ms(se),q=Ms(q)}se=null}else se=null;ut!==null&&k_(bt,lt,ut,se,!1),ue!==null&&He!==null&&k_(bt,He,ue,se,!0)}}t:{if(lt=rt?cr(rt):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var Qt=lg;else if(sg(lt))if(ug)Qt=EM;else{Qt=SM;var ve=yM}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?rt&&xf(rt.elementType)&&(Qt=lg):Qt=MM;if(Qt&&(Qt=Qt(e,rt))){og(bt,Qt,s,vt);break t}ve&&ve(e,lt,rt),e==="focusout"&&rt&&lt.type==="number"&&rt.memoizedProps.value!=null&&Un(lt,"number",lt.value)}switch(ve=rt?cr(rt):window,e){case"focusin":(sg(ve)||ve.contentEditable==="true")&&($r=ve,Lf=rt,To=null);break;case"focusout":To=Lf=$r=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,_g(bt,s,vt);break;case"selectionchange":if(bM)break;case"keydown":case"keyup":_g(bt,s,vt)}var ee;if(Cf)t:{switch(e){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else Qr?ag(e,s)&&(oe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(oe="onCompositionStart");oe&&(eg&&s.locale!=="ko"&&(Qr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Qr&&(ee=Km()):(Ca=vt,Tf="value"in Ca?Ca.value:Ca.textContent,Qr=!0)),ve=Bu(rt,oe),0<ve.length&&(oe=new Jm(oe,e,null,s,vt),bt.push({event:oe,listeners:ve}),ee?oe.data=ee:(ee=rg(s),ee!==null&&(oe.data=ee)))),(ee=mM?gM(e,s):_M(e,s))&&(oe=Bu(rt,"onBeforeInput"),0<oe.length&&(ve=new Jm("onBeforeInput","beforeinput",null,s,vt),bt.push({event:ve,listeners:oe}),ve.data=ee)),oE(bt,e,rt,s,vt)}G_(bt,a)})}function $o(e,a,s){return{instance:e,listener:a,currentTarget:s}}function Bu(e,a){for(var s=a+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=go(e,s),f!=null&&l.unshift($o(e,f,m)),f=go(e,a),f!=null&&l.push($o(e,f,m))),e.tag===3)return l;e=e.return}return[]}function Ms(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function k_(e,a,s,l,f){for(var m=a._reactName,M=[];s!==null&&s!==l;){var A=s,G=A.alternate,rt=A.stateNode;if(A=A.tag,G!==null&&G===l)break;A!==5&&A!==26&&A!==27||rt===null||(G=rt,f?(rt=go(s,m),rt!=null&&M.unshift($o(s,rt,G))):f||(rt=go(s,m),rt!=null&&M.push($o(s,rt,G)))),s=s.return}M.length!==0&&e.push({event:a,listeners:M})}var fE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function X_(e){return(typeof e=="string"?e:""+e).replace(fE,`
`).replace(hE,"")}function W_(e,a){return a=X_(a),X_(e)===a}function Fu(){}function Ie(e,a,s,l,f,m){switch(s){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Ui(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Ui(e,""+l);break;case"className":It(e,"class",l);break;case"tabIndex":It(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,s,l);break;case"style":qm(e,l,m);break;case"data":if(a!=="object"){It(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Yl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(a!=="input"&&Ie(e,a,"name",f.name,f,null),Ie(e,a,"formEncType",f.formEncType,f,null),Ie(e,a,"formMethod",f.formMethod,f,null),Ie(e,a,"formTarget",f.formTarget,f,null)):(Ie(e,a,"encType",f.encType,f,null),Ie(e,a,"method",f.method,f,null),Ie(e,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Yl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Fu);break;case"onScroll":l!=null&&Se("scroll",e);break;case"onScrollEnd":l!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Yl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Ut(e,"popover",l);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ut(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=VS.get(s)||s,Ut(e,s,l))}}function id(e,a,s,l,f,m){switch(s){case"style":qm(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Ui(e,l):(typeof l=="number"||typeof l=="bigint")&&Ui(e,""+l);break;case"onScroll":l!=null&&Se("scroll",e);break;case"onScrollEnd":l!=null&&Se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Fu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),a=s.slice(2,f?s.length-7:void 0),m=e[fn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(a,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(a,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Ut(e,s,l)}}}function Rn(e,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ie(e,a,m,M,s,null)}}f&&Ie(e,a,"srcSet",s.srcSet,s,null),l&&Ie(e,a,"src",s.src,s,null);return;case"input":Se("invalid",e);var A=m=M=f=null,G=null,rt=null;for(l in s)if(s.hasOwnProperty(l)){var vt=s[l];if(vt!=null)switch(l){case"name":f=vt;break;case"type":M=vt;break;case"checked":G=vt;break;case"defaultChecked":rt=vt;break;case"value":m=vt;break;case"defaultValue":A=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,a));break;default:Ie(e,a,l,vt,s,null)}}ke(e,m,A,G,rt,M,f,!1),Je(e);return;case"select":Se("invalid",e),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Ie(e,a,f,A,s,null)}a=m,s=M,e.multiple=!!l,a!=null?hn(e,!!l,a,!1):s!=null&&hn(e,!!l,s,!0);return;case"textarea":Se("invalid",e),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ie(e,a,M,A,s,null)}bn(e,l,f,m),Je(e);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ie(e,a,G,l,s,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(l=0;l<Qo.length;l++)Se(Qo[l],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in s)if(s.hasOwnProperty(rt)&&(l=s[rt],l!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ie(e,a,rt,l,s,null)}return;default:if(xf(a)){for(vt in s)s.hasOwnProperty(vt)&&(l=s[vt],l!==void 0&&id(e,a,vt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Ie(e,a,A,l,s,null))}function dE(e,a,s,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,A=null,G=null,rt=null,vt=null;for(ut in s){var bt=s[ut];if(s.hasOwnProperty(ut)&&bt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=bt;default:l.hasOwnProperty(ut)||Ie(e,a,ut,null,l,bt)}}for(var lt in l){var ut=l[lt];if(bt=s[lt],l.hasOwnProperty(lt)&&(ut!=null||bt!=null))switch(lt){case"type":m=ut;break;case"name":f=ut;break;case"checked":rt=ut;break;case"defaultChecked":vt=ut;break;case"value":M=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,a));break;default:ut!==bt&&Ie(e,a,lt,ut,l,bt)}}Wi(e,M,A,G,rt,vt,m,f);return;case"select":ut=M=A=lt=null;for(m in s)if(G=s[m],s.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ut=G;default:l.hasOwnProperty(m)||Ie(e,a,m,null,l,G)}for(f in l)if(m=l[f],G=s[f],l.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":lt=m;break;case"defaultValue":A=m;break;case"multiple":M=m;default:m!==G&&Ie(e,a,f,m,l,G)}a=A,s=M,l=ut,lt!=null?hn(e,!!s,lt,!1):!!l!=!!s&&(a!=null?hn(e,!!s,a,!0):hn(e,!!s,s?[]:"",!1));return;case"textarea":ut=lt=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ie(e,a,A,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":lt=f;break;case"defaultValue":ut=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Ie(e,a,M,f,l,m)}xn(e,lt,ut);return;case"option":for(var ue in s)if(lt=s[ue],s.hasOwnProperty(ue)&&lt!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Ie(e,a,ue,null,l,lt)}for(G in l)if(lt=l[G],ut=s[G],l.hasOwnProperty(G)&&lt!==ut&&(lt!=null||ut!=null))switch(G){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Ie(e,a,G,lt,l,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in s)lt=s[se],s.hasOwnProperty(se)&&lt!=null&&!l.hasOwnProperty(se)&&Ie(e,a,se,null,l,lt);for(rt in l)if(lt=l[rt],ut=s[rt],l.hasOwnProperty(rt)&&lt!==ut&&(lt!=null||ut!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,a));break;default:Ie(e,a,rt,lt,l,ut)}return;default:if(xf(a)){for(var He in s)lt=s[He],s.hasOwnProperty(He)&&lt!==void 0&&!l.hasOwnProperty(He)&&id(e,a,He,void 0,l,lt);for(vt in l)lt=l[vt],ut=s[vt],!l.hasOwnProperty(vt)||lt===ut||lt===void 0&&ut===void 0||id(e,a,vt,lt,l,ut);return}}for(var q in s)lt=s[q],s.hasOwnProperty(q)&&lt!=null&&!l.hasOwnProperty(q)&&Ie(e,a,q,null,l,lt);for(bt in l)lt=l[bt],ut=s[bt],!l.hasOwnProperty(bt)||lt===ut||lt==null&&ut==null||Ie(e,a,bt,lt,l,ut)}var ad=null,rd=null;function Iu(e){return e.nodeType===9?e:e.ownerDocument}function Y_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function sd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var od=null;function pE(){var e=window.event;return e&&e.type==="popstate"?e===od?!1:(od=e,!0):(od=null,!1)}var j_=typeof setTimeout=="function"?setTimeout:void 0,mE=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,gE=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(e){return Z_.resolve(null).then(e).catch(_E)}:j_;function _E(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function K_(e,a){var s=a,l=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var M=e.ownerDocument;if(s&1&&Jo(M.documentElement),s&2&&Jo(M.body),s&4)for(s=M.head,Jo(s),M=s.firstChild;M;){var A=M.nextSibling,G=M.nodeName;M[ba]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(f===0){e.removeChild(m),ol(a);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);ol(a)}function ld(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ld(s),Aa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function vE(e,a,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ba])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function xE(e,a,s){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=xi(e.nextSibling),e===null))return null;return e}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yE(e,a){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")a();else{var l=function(){a(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function xi(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var cd=null;function Q_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return e;a--}else s==="/$"&&a++}e=e.previousSibling}return null}function $_(e,a,s){switch(a=Iu(s),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Jo(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Aa(e)}var fi=new Map,J_=new Set;function Hu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=Y.d;Y.d={f:SE,r:ME,D:EE,C:TE,L:bE,m:AE,X:RE,S:wE,M:CE};function SE(){var e=sa.f(),a=Uu();return e||a}function ME(e){var a=ki(e);a!==null&&a.tag===5&&a.type==="form"?x0(a):sa.r(e)}var Es=typeof document>"u"?null:document;function tv(e,a,s){var l=Es;if(l&&typeof a=="string"&&a){var f=We(a);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),J_.has(f)||(J_.add(f),e={rel:e,crossOrigin:s,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),Rn(a,"link",e),on(a),l.head.appendChild(a)))}}function EE(e){sa.D(e),tv("dns-prefetch",e,null)}function TE(e,a){sa.C(e,a),tv("preconnect",e,a)}function bE(e,a,s){sa.L(e,a,s);var l=Es;if(l&&e&&a){var f='link[rel="preload"][as="'+We(a)+'"]';a==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+We(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+We(s.imageSizes)+'"]')):f+='[href="'+We(e)+'"]';var m=f;switch(a){case"style":m=Ts(e);break;case"script":m=bs(e)}fi.has(m)||(e=g({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:e,as:a},s),fi.set(m,e),l.querySelector(f)!==null||a==="style"&&l.querySelector(tl(m))||a==="script"&&l.querySelector(el(m))||(a=l.createElement("link"),Rn(a,"link",e),on(a),l.head.appendChild(a)))}}function AE(e,a){sa.m(e,a);var s=Es;if(s&&e){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+We(l)+'"][href="'+We(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=bs(e)}if(!fi.has(m)&&(e=g({rel:"modulepreload",href:e},a),fi.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(el(m)))return}l=s.createElement("link"),Rn(l,"link",e),on(l),s.head.appendChild(l)}}}function wE(e,a,s){sa.S(e,a,s);var l=Es;if(l&&e){var f=wa(l).hoistableStyles,m=Ts(e);a=a||"default";var M=f.get(m);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(tl(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},s),(s=fi.get(m))&&fd(e,s);var G=M=l.createElement("link");on(G),Rn(G,"link",e),G._p=new Promise(function(rt,vt){G.onload=rt,G.onerror=vt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Gu(M,a,l)}M={type:"stylesheet",instance:M,count:1,state:A},f.set(m,M)}}}function RE(e,a){sa.X(e,a);var s=Es;if(s&&e){var l=wa(s).hoistableScripts,f=bs(e),m=l.get(f);m||(m=s.querySelector(el(f)),m||(e=g({src:e,async:!0},a),(a=fi.get(f))&&hd(e,a),m=s.createElement("script"),on(m),Rn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function CE(e,a){sa.M(e,a);var s=Es;if(s&&e){var l=wa(s).hoistableScripts,f=bs(e),m=l.get(f);m||(m=s.querySelector(el(f)),m||(e=g({src:e,async:!0,type:"module"},a),(a=fi.get(f))&&hd(e,a),m=s.createElement("script"),on(m),Rn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function ev(e,a,s,l){var f=(f=it.current)?Hu(f):null;if(!f)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=Ts(s.href),s=wa(f).hoistableStyles,l=s.get(a),l||(l={type:"style",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ts(s.href);var m=wa(f).hoistableStyles,M=m.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=f.querySelector(tl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),fi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},fi.set(e,s),m||DE(f,e,s,M.state))),a&&l===null)throw Error(r(528,""));return M}if(a&&l!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=bs(s),s=wa(f).hoistableScripts,l=s.get(a),l||(l={type:"script",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ts(e){return'href="'+We(e)+'"'}function tl(e){return'link[rel="stylesheet"]['+e+"]"}function nv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function DE(e,a,s,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Rn(a,"link",s),on(a),e.head.appendChild(a))}function bs(e){return'[src="'+We(e)+'"]'}function el(e){return"script[async]"+e}function iv(e,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+We(s.href)+'"]');if(l)return a.instance=l,on(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),on(l),Rn(l,"style",f),Gu(l,s.precedence,e),a.instance=l;case"stylesheet":f=Ts(s.href);var m=e.querySelector(tl(f));if(m)return a.state.loading|=4,a.instance=m,on(m),m;l=nv(s),(f=fi.get(f))&&fd(l,f),m=(e.ownerDocument||e).createElement("link"),on(m);var M=m;return M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),Rn(m,"link",l),a.state.loading|=4,Gu(m,s.precedence,e),a.instance=m;case"script":return m=bs(s.src),(f=e.querySelector(el(m)))?(a.instance=f,on(f),f):(l=s,(f=fi.get(m))&&(l=g({},s),hd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),on(f),Rn(f,"link",l),e.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Gu(l,s.precedence,e));return a.instance}function Gu(e,a,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===a)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(e,a.firstChild))}function fd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function hd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Vu=null;function av(e,a,s){if(Vu===null){var l=new Map,f=Vu=new Map;f.set(s,l)}else f=Vu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[ba]||m[nn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(a)||"";M=e+M;var A=l.get(M);A?A.push(m):l.set(M,[m])}}return l}function rv(e,a,s){e=e.ownerDocument||e,e.head.insertBefore(s,a==="title"?e.querySelector("head > title"):null)}function UE(e,a,s){if(s===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function sv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var nl=null;function NE(){}function LE(e,a,s){if(nl===null)throw Error(r(475));var l=nl;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Ts(s.href),m=e.querySelector(tl(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ku.bind(l),e.then(l,l)),a.state.loading|=4,a.instance=m,on(m);return}m=e.ownerDocument||e,s=nv(s),(f=fi.get(f))&&fd(s,f),m=m.createElement("link"),on(m);var M=m;M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),Rn(m,"link",s),a.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=ku.bind(l),e.addEventListener("load",a),e.addEventListener("error",a))}}function OE(){if(nl===null)throw Error(r(475));var e=nl;return e.stylesheets&&e.count===0&&dd(e,e.stylesheets),0<e.count?function(a){var s=setTimeout(function(){if(e.stylesheets&&dd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s)}}:null}function ku(){if(this.count--,this.count===0){if(this.stylesheets)dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xu=null;function dd(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xu=new Map,a.forEach(PE,e),Xu=null,ku.call(e))}function PE(e,a){if(!(a.state.loading&4)){var s=Xu.get(e);if(s)var l=s.get(null);else{s=new Map,Xu.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=a.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=ku.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),a.state.loading|=4}}var il={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function zE(e,a,s,l,f,m,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.hiddenUpdates=ht(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function ov(e,a,s,l,f,m,M,A,G,rt,vt,bt){return e=new zE(e,a,s,M,A,G,rt,bt),a=1,m===!0&&(a|=24),m=jn(3,null,null,a),e.current=m,m.stateNode=e,a=jf(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:a},$f(m),e}function lv(e){return e?(e=ns,e):ns}function uv(e,a,s,l,f,m){f=lv(f),l.context===null?l.context=f:l.pendingContext=f,l=Na(a),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=La(e,l,a),s!==null&&(Jn(s,e,a),Lo(s,e,a))}function cv(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<a?s:a}}function pd(e,a){cv(e,a),(e=e.alternate)&&cv(e,a)}function fv(e){if(e.tag===13){var a=es(e,67108864);a!==null&&Jn(a,e,67108864),pd(e,67108864)}}var Wu=!0;function BE(e,a,s,l){var f=B.T;B.T=null;var m=Y.p;try{Y.p=2,md(e,a,s,l)}finally{Y.p=m,B.T=f}}function FE(e,a,s,l){var f=B.T;B.T=null;var m=Y.p;try{Y.p=8,md(e,a,s,l)}finally{Y.p=m,B.T=f}}function md(e,a,s,l){if(Wu){var f=gd(l);if(f===null)nd(e,a,l,Yu,s),dv(e,l);else if(HE(f,e,a,s,l))l.stopPropagation();else if(dv(e,l),a&4&&-1<IE.indexOf(e)){for(;f!==null;){var m=ki(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Ot(m.pendingLanes);if(M!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var G=1<<31-Lt(M);A.entanglements[1]|=G,M&=~G}zi(m),(Pe&6)===0&&(Cu=qt()+500,Ko(0))}}break;case 13:A=es(m,2),A!==null&&Jn(A,m,2),Uu(),pd(m,2)}if(m=gd(l),m===null&&nd(e,a,l,Yu,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else nd(e,a,l,null,s)}}function gd(e){return e=Sf(e),_d(e)}var Yu=null;function _d(e){if(Yu=null,e=Vi(e),e!==null){var a=u(e);if(a===null)e=null;else{var s=a.tag;if(s===13){if(e=c(a),e!==null)return e;e=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Yu=e,null}function hv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jt()){case he:return 2;case Kt:return 8;case O:case b:return 32;case st:return 268435456;default:return 32}default:return 32}}var vd=!1,Ya=null,qa=null,ja=null,al=new Map,rl=new Map,Za=[],IE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dv(e,a){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":al.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(a.pointerId)}}function sl(e,a,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},a!==null&&(a=ki(a),a!==null&&fv(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),e)}function HE(e,a,s,l,f){switch(a){case"focusin":return Ya=sl(Ya,e,a,s,l,f),!0;case"dragenter":return qa=sl(qa,e,a,s,l,f),!0;case"mouseover":return ja=sl(ja,e,a,s,l,f),!0;case"pointerover":var m=f.pointerId;return al.set(m,sl(al.get(m)||null,e,a,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,rl.set(m,sl(rl.get(m)||null,e,a,s,l,f)),!0}return!1}function pv(e){var a=Vi(e.target);if(a!==null){var s=u(a);if(s!==null){if(a=s.tag,a===13){if(a=c(s),a!==null){e.blockedOn=a,vn(e.priority,function(){if(s.tag===13){var l=$n();l=Be(l);var f=es(s,l);f!==null&&Jn(f,s,l),pd(s,l)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var s=gd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);yf=l,s.target.dispatchEvent(l),yf=null}else return a=ki(s),a!==null&&fv(a),e.blockedOn=s,!1;a.shift()}return!0}function mv(e,a,s){qu(e)&&s.delete(a)}function GE(){vd=!1,Ya!==null&&qu(Ya)&&(Ya=null),qa!==null&&qu(qa)&&(qa=null),ja!==null&&qu(ja)&&(ja=null),al.forEach(mv),rl.forEach(mv)}function ju(e,a){e.blockedOn===a&&(e.blockedOn=null,vd||(vd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,GE)))}var Zu=null;function gv(e){Zu!==e&&(Zu=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Zu===e&&(Zu=null);for(var a=0;a<e.length;a+=3){var s=e[a],l=e[a+1],f=e[a+2];if(typeof l!="function"){if(_d(l||s)===null)continue;break}var m=ki(s);m!==null&&(e.splice(a,3),a-=3,_h(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function ol(e){function a(G){return ju(G,e)}Ya!==null&&ju(Ya,e),qa!==null&&ju(qa,e),ja!==null&&ju(ja,e),al.forEach(a),rl.forEach(a);for(var s=0;s<Za.length;s++){var l=Za[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Za.length&&(s=Za[0],s.blockedOn===null);)pv(s),s.blockedOn===null&&Za.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[fn]||null;if(typeof m=="function")M||gv(s);else if(M){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[fn]||null)A=M.formAction;else if(_d(f)!==null)continue}else A=M.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),gv(s)}}}function xd(e){this._internalRoot=e}Ku.prototype.render=xd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,l=$n();uv(s,l,e,a,null,null)},Ku.prototype.unmount=xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;uv(e.current,2,null,e,null,null),Uu(),a[Cn]=null}};function Ku(e){this._internalRoot=e}Ku.prototype.unstable_scheduleHydration=function(e){if(e){var a=we();e={blockedOn:null,target:e,priority:a};for(var s=0;s<Za.length&&a!==0&&a<Za[s].priority;s++);Za.splice(s,0,e),s===0&&pv(e)}};var _v=t.version;if(_v!=="19.1.0")throw Error(r(527,_v,"19.1.0"));Y.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(a),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var VE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{ot=Qu.inject(VE),Pt=Qu}catch{}}return ul.createRoot=function(e,a){if(!o(e))throw Error(r(299));var s=!1,l="",f=L0,m=O0,M=P0,A=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=ov(e,1,!1,null,null,s,l,f,m,M,A,null),e[Cn]=a.current,ed(e),new xd(a)},ul.hydrateRoot=function(e,a,s){if(!o(e))throw Error(r(299));var l=!1,f="",m=L0,M=O0,A=P0,G=null,rt=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(G=s.unstable_transitionCallbacks),s.formState!==void 0&&(rt=s.formState)),a=ov(e,1,!0,a,s??null,l,f,m,M,A,G,rt),a.context=lv(null),s=a.current,l=$n(),l=Be(l),f=Na(l),f.callback=null,La(s,f,l),s=l,a.current.lanes=s,yt(a,s),zi(a),e[Cn]=a.current,ed(e),new Ku(a)},ul.version="19.1.0",ul}var wv;function $E(){if(wv)return Md.exports;wv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Md.exports=QE(),Md.exports}var JE=$E();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="175",t1=0,Rv=1,e1=2,my=1,n1=2,da=3,or=0,Yn=1,pa=2,ar=0,Ks=1,Cv=2,Dv=3,Uv=4,i1=5,zr=100,a1=101,r1=102,s1=103,o1=104,l1=200,u1=201,c1=202,f1=203,_p=204,vp=205,h1=206,d1=207,p1=208,m1=209,g1=210,_1=211,v1=212,x1=213,y1=214,xp=0,yp=1,Sp=2,Js=3,Mp=4,Ep=5,Tp=6,bp=7,gy=0,S1=1,M1=2,rr=0,E1=1,T1=2,b1=3,A1=4,w1=5,R1=6,C1=7,_y=300,to=301,eo=302,Ap=303,wp=304,cf=306,Rp=1e3,Fr=1001,Cp=1002,Ai=1003,D1=1004,$u=1005,Ii=1006,Ad=1007,Ir=1008,ya=1009,vy=1010,xy=1011,wl=1012,ym=1013,Vr=1014,ma=1015,Ol=1016,Sm=1017,Mm=1018,Rl=1020,yy=35902,Sy=1021,My=1022,bi=1023,Ey=1024,Ty=1025,Cl=1026,Dl=1027,by=1028,Em=1029,Ay=1030,Tm=1031,bm=1033,Dc=33776,Uc=33777,Nc=33778,Lc=33779,Dp=35840,Up=35841,Np=35842,Lp=35843,Op=36196,Pp=37492,zp=37496,Bp=37808,Fp=37809,Ip=37810,Hp=37811,Gp=37812,Vp=37813,kp=37814,Xp=37815,Wp=37816,Yp=37817,qp=37818,jp=37819,Zp=37820,Kp=37821,Oc=36492,Qp=36494,$p=36495,wy=36283,Jp=36284,tm=36285,em=36286,U1=3200,N1=3201,L1=0,O1=1,ir="",di="srgb",no="srgb-linear",Vc="linear",Ge="srgb",As=7680,Nv=519,P1=512,z1=513,B1=514,Ry=515,F1=516,I1=517,H1=518,G1=519,nm=35044,Lv="300 es",ga=2e3,kc=2001;class ho{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=Math.PI/180,im=180/Math.PI;function sr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Ae(i,t,n){return Math.max(t,Math.min(n,i))}function V1(i,t){return(i%t+t)%t}function Rd(i,t,n){return(1-n)*i+n*t}function Fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,n=0){Ee.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*r-c*o+t.x,this.y=u*o+c*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(t,n,r,o,u,c,h,p,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,o,u,c,h,p,d)}set(t,n,r,o,u,c,h,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,u=this.elements,c=r[0],h=r[3],p=r[6],d=r[1],g=r[4],v=r[7],_=r[2],x=r[5],E=r[8],T=o[0],S=o[3],y=o[6],L=o[1],N=o[4],w=o[7],I=o[2],P=o[5],F=o[8];return u[0]=c*T+h*L+p*I,u[3]=c*S+h*N+p*P,u[6]=c*y+h*w+p*F,u[1]=d*T+g*L+v*I,u[4]=d*S+g*N+v*P,u[7]=d*y+g*w+v*F,u[2]=_*T+x*L+E*I,u[5]=_*S+x*N+E*P,u[8]=_*y+x*w+E*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return n*c*g-n*h*d-r*u*g+r*h*p+o*u*d-o*c*p}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=g*c-h*d,_=h*p-g*u,x=d*u-c*p,E=n*v+r*_+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(o*d-g*r)*T,t[2]=(h*r-o*c)*T,t[3]=_*T,t[4]=(g*n-o*p)*T,t[5]=(o*u-h*n)*T,t[6]=x*T,t[7]=(r*p-d*n)*T,t[8]=(c*n-r*u)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,o,u,c,h){const p=Math.cos(u),d=Math.sin(u);return this.set(r*p,r*d,-r*(p*c+d*h)+c+t,-o*d,o*p,-o*(-d*c+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Cd.makeScale(t,n)),this}rotate(t){return this.premultiply(Cd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Cd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new pe;function Cy(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function k1(){const i=Xc("canvas");return i.style.display="block",i}const Ov={};function Pc(i){i in Ov||(Ov[i]=!0,console.warn(i))}function X1(i,t,n){return new Promise(function(r,o){function u(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function W1(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Y1(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q1(){const i={enabled:!0,workingColorSpace:no,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ge&&(o.r=xa(o.r),o.g=xa(o.g),o.b=xa(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ge&&(o.r=Qs(o.r),o.g=Qs(o.g),o.b=Qs(o.b))),o},fromWorkingColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},toWorkingColorSpace:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ir?Vc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[no]:{primaries:t,whitePoint:r,transfer:Vc,toXYZ:Pv,fromXYZ:zv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Pv,fromXYZ:zv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),i}const Ne=q1();function xa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ws;class j1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ws===void 0&&(ws=Xc("canvas")),ws.width=t.width,ws.height=t.height;const o=ws.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=ws}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Xc("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=xa(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(xa(n[r]/255)*255):n[r]=xa(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Z1=0;class Am{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(Dd(o[c].image)):u.push(Dd(o[c]))}else u=Dd(o);r.url=u}return n||(t.images[this.uuid]=r),r}}function Dd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?j1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K1=0;class In extends ho{constructor(t=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,r=Fr,o=Fr,u=Ii,c=Ir,h=bi,p=ya,d=In.DEFAULT_ANISOTROPY,g=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=sr(),this.name="",this.source=new Am(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_y)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rp:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case Cp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rp:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case Cp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=_y;In.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,n=0,r=0,o=1){sn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,o){return this.x=t,this.y=n,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,o,u;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],x=p[5],E=p[9],T=p[2],S=p[6],y=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(d+1)/2,w=(x+1)/2,I=(y+1)/2,P=(g+_)/4,F=(v+T)/4,k=(E+S)/4;return N>w&&N>I?N<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(N),o=P/r,u=F/r):w>I?w<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(w),r=P/o,u=k/o):I<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(I),r=F/u,o=k/u),this.set(r,o,u,n),this}let L=Math.sqrt((S-E)*(S-E)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(v-T)/L,this.z=(_-g)/L,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this.w=Ae(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this.w=Ae(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Q1 extends ho{constructor(t=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new sn(0,0,t,n),this.scissorTest=!1,this.viewport=new sn(0,0,t,n);const o={width:t,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new In(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Am(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends Q1{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class Dy extends In{constructor(t=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $1 extends In{constructor(t=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pl{constructor(t=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=o}static slerpFlat(t,n,r,o,u,c,h){let p=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];const _=u[c+0],x=u[c+1],E=u[c+2],T=u[c+3];if(h===0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=E,t[n+3]=T;return}if(v!==T||p!==_||d!==x||g!==E){let S=1-h;const y=p*_+d*x+g*E+v*T,L=y>=0?1:-1,N=1-y*y;if(N>Number.EPSILON){const I=Math.sqrt(N),P=Math.atan2(I,y*L);S=Math.sin(S*P)/I,h=Math.sin(h*P)/I}const w=h*L;if(p=p*S+_*w,d=d*S+x*w,g=g*S+E*w,v=v*S+T*w,S===1-h){const I=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=I,d*=I,g*=I,v*=I}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,r,o,u,c){const h=r[o],p=r[o+1],d=r[o+2],g=r[o+3],v=u[c],_=u[c+1],x=u[c+2],E=u[c+3];return t[n]=h*E+g*v+p*x-d*_,t[n+1]=p*E+g*_+d*v-h*x,t[n+2]=d*E+g*x+h*_-p*v,t[n+3]=g*E-h*v-p*_-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,o){return this._x=t,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,o=t._y,u=t._z,c=t._order,h=Math.cos,p=Math.sin,d=h(r/2),g=h(o/2),v=h(u/2),_=p(r/2),x=p(o/2),E=p(u/2);switch(c){case"XYZ":this._x=_*g*v+d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v-_*x*E;break;case"YXZ":this._x=_*g*v+d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v+_*x*E;break;case"ZXY":this._x=_*g*v-d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v-_*x*E;break;case"ZYX":this._x=_*g*v-d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v+_*x*E;break;case"YZX":this._x=_*g*v+d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v-_*x*E;break;case"XZY":this._x=_*g*v-d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],o=n[4],u=n[8],c=n[1],h=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=r+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-p)*x,this._y=(u-d)*x,this._z=(c-o)*x}else if(r>h&&r>v){const x=2*Math.sqrt(1+r-h-v);this._w=(g-p)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(u+d)/x}else if(h>v){const x=2*Math.sqrt(1+h-r-v);this._w=(u-d)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+v-r-h);this._w=(c-o)/x,this._x=(u+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,o=t._y,u=t._z,c=t._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=r*g+c*h+o*d-u*p,this._y=o*g+c*p+u*h-r*d,this._z=u*g+c*d+r*p-o*h,this._w=c*g-r*h-o*p-u*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,o=this._y,u=this._z,c=this._w;let h=c*t._w+r*t._x+o*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=c,this._x=r,this._y=o,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-n;return this._w=x*c+n*this._w,this._x=x*r+n*this._x,this._y=x*o+n*this._y,this._z=x*u+n*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,_=Math.sin(n*g)/d;return this._w=c*v+this._w*_,this._x=r*v+this._x*_,this._y=o*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,n=0,r=0){at.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Bv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Bv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,u=t.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(t){const n=this.x,r=this.y,o=this.z,u=t.x,c=t.y,h=t.z,p=t.w,d=2*(c*o-h*r),g=2*(h*n-u*o),v=2*(u*r-c*n);return this.x=n+p*d+c*v-h*g,this.y=r+p*g+h*d-u*v,this.z=o+p*v+u*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,o=t.y,u=t.z,c=n.x,h=n.y,p=n.z;return this.x=o*p-u*h,this.y=u*c-r*p,this.z=r*h-o*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ud.copy(this).projectOnVector(t),this.sub(Ud)}reflect(t){return this.sub(Ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return n*n+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const o=Math.sin(n)*t;return this.x=o*Math.sin(r),this.y=Math.cos(n)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ud=new at,Bv=new Pl;class zl{constructor(t=new at(1/0,1/0,1/0),n=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(yi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(yi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=yi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,yi):yi.fromBufferAttribute(u,c),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ju.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ju.copy(r.boundingBox)),Ju.applyMatrix4(t.matrixWorld),this.union(Ju)}const o=t.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cl),tc.subVectors(this.max,cl),Rs.subVectors(t.a,cl),Cs.subVectors(t.b,cl),Ds.subVectors(t.c,cl),Qa.subVectors(Cs,Rs),$a.subVectors(Ds,Cs),wr.subVectors(Rs,Ds);let n=[0,-Qa.z,Qa.y,0,-$a.z,$a.y,0,-wr.z,wr.y,Qa.z,0,-Qa.x,$a.z,0,-$a.x,wr.z,0,-wr.x,-Qa.y,Qa.x,0,-$a.y,$a.x,0,-wr.y,wr.x,0];return!Nd(n,Rs,Cs,Ds,tc)||(n=[1,0,0,0,1,0,0,0,1],!Nd(n,Rs,Cs,Ds,tc))?!1:(ec.crossVectors(Qa,$a),n=[ec.x,ec.y,ec.z],Nd(n,Rs,Cs,Ds,tc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oa=[new at,new at,new at,new at,new at,new at,new at,new at],yi=new at,Ju=new zl,Rs=new at,Cs=new at,Ds=new at,Qa=new at,$a=new at,wr=new at,cl=new at,tc=new at,ec=new at,Rr=new at;function Nd(i,t,n,r,o){for(let u=0,c=i.length-3;u<=c;u+=3){Rr.fromArray(i,u);const h=o.x*Math.abs(Rr.x)+o.y*Math.abs(Rr.y)+o.z*Math.abs(Rr.z),p=t.dot(Rr),d=n.dot(Rr),g=r.dot(Rr);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const J1=new zl,fl=new at,Ld=new at;class ff{constructor(t=new at,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):J1.setFromPoints(t).getCenter(r);let o=0;for(let u=0,c=t.length;u<c;u++)o=Math.max(o,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fl.subVectors(t,this.center);const n=fl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(fl,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fl.copy(t.center).add(Ld)),this.expandByPoint(fl.copy(t.center).sub(Ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const la=new at,Od=new at,nc=new at,Ja=new at,Pd=new at,ic=new at,zd=new at;class wm{constructor(t=new at,n=new at(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=la.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(t))}distanceSqToSegment(t,n,r,o){Od.copy(t).add(n).multiplyScalar(.5),nc.copy(n).sub(t).normalize(),Ja.copy(this.origin).sub(Od);const u=t.distanceTo(n)*.5,c=-this.direction.dot(nc),h=Ja.dot(this.direction),p=-Ja.dot(nc),d=Ja.lengthSq(),g=Math.abs(1-c*c);let v,_,x,E;if(g>0)if(v=c*p-h,_=c*h-p,E=u*g,v>=0)if(_>=-E)if(_<=E){const T=1/g;v*=T,_*=T,x=v*(v+c*_+2*h)+_*(c*v+_+2*p)+d}else _=u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*p)+d;else _=-u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*p)+d;else _<=-E?(v=Math.max(0,-(-c*u+h)),_=v>0?-u:Math.min(Math.max(-u,-p),u),x=-v*v+_*(_+2*p)+d):_<=E?(v=0,_=Math.min(Math.max(-u,-p),u),x=_*(_+2*p)+d):(v=Math.max(0,-(c*u+h)),_=v>0?u:Math.min(Math.max(-u,-p),u),x=-v*v+_*(_+2*p)+d);else _=c>0?-u:u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Od).addScaledVector(nc,_),x}intersectSphere(t,n){la.subVectors(t.center,this.origin);const r=la.dot(this.direction),o=la.dot(la)-r*r,u=t.radius*t.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=r-c,p=r+c;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,o,u,c,h,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(r=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(r=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(u=(t.min.y-_.y)*g,c=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,c=(t.min.y-_.y)*g),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,n,r,o,u){Pd.subVectors(n,t),ic.subVectors(r,t),zd.crossVectors(Pd,ic);let c=this.direction.dot(zd),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Ja.subVectors(this.origin,t);const p=h*this.direction.dot(ic.crossVectors(Ja,ic));if(p<0)return null;const d=h*this.direction.dot(Pd.cross(Ja));if(d<0||p+d>c)return null;const g=-h*Ja.dot(zd);return g<0?null:this.at(g/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,n,r,o,u,c,h,p,d,g,v,_,x,E,T,S){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,o,u,c,h,p,d,g,v,_,x,E,T,S)}set(t,n,r,o,u,c,h,p,d,g,v,_,x,E,T,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=r,y[12]=o,y[1]=u,y[5]=c,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=E,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,o=1/Us.setFromMatrixColumn(t,0).length(),u=1/Us.setFromMatrixColumn(t,1).length(),c=1/Us.setFromMatrixColumn(t,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,o=t.y,u=t.z,c=Math.cos(r),h=Math.sin(r),p=Math.cos(o),d=Math.sin(o),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const _=c*g,x=c*v,E=h*g,T=h*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=x+E*d,n[5]=_-T*d,n[9]=-h*p,n[2]=T-_*d,n[6]=E+x*d,n[10]=c*p}else if(t.order==="YXZ"){const _=p*g,x=p*v,E=d*g,T=d*v;n[0]=_+T*h,n[4]=E*h-x,n[8]=c*d,n[1]=c*v,n[5]=c*g,n[9]=-h,n[2]=x*h-E,n[6]=T+_*h,n[10]=c*p}else if(t.order==="ZXY"){const _=p*g,x=p*v,E=d*g,T=d*v;n[0]=_-T*h,n[4]=-c*v,n[8]=E+x*h,n[1]=x+E*h,n[5]=c*g,n[9]=T-_*h,n[2]=-c*d,n[6]=h,n[10]=c*p}else if(t.order==="ZYX"){const _=c*g,x=c*v,E=h*g,T=h*v;n[0]=p*g,n[4]=E*d-x,n[8]=_*d+T,n[1]=p*v,n[5]=T*d+_,n[9]=x*d-E,n[2]=-d,n[6]=h*p,n[10]=c*p}else if(t.order==="YZX"){const _=c*p,x=c*d,E=h*p,T=h*d;n[0]=p*g,n[4]=T-_*v,n[8]=E*v+x,n[1]=v,n[5]=c*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*v+E,n[10]=_-T*v}else if(t.order==="XZY"){const _=c*p,x=c*d,E=h*p,T=h*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+T,n[5]=c*g,n[9]=x*v-E,n[2]=E*v-x,n[6]=h*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tT,t,eT)}lookAt(t,n,r){const o=this.elements;return ti.subVectors(t,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),tr.crossVectors(r,ti),tr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),tr.crossVectors(r,ti)),tr.normalize(),ac.crossVectors(ti,tr),o[0]=tr.x,o[4]=ac.x,o[8]=ti.x,o[1]=tr.y,o[5]=ac.y,o[9]=ti.y,o[2]=tr.z,o[6]=ac.z,o[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,u=this.elements,c=r[0],h=r[4],p=r[8],d=r[12],g=r[1],v=r[5],_=r[9],x=r[13],E=r[2],T=r[6],S=r[10],y=r[14],L=r[3],N=r[7],w=r[11],I=r[15],P=o[0],F=o[4],k=o[8],U=o[12],C=o[1],H=o[5],j=o[9],tt=o[13],mt=o[2],pt=o[6],B=o[10],Y=o[14],W=o[3],dt=o[7],D=o[11],nt=o[15];return u[0]=c*P+h*C+p*mt+d*W,u[4]=c*F+h*H+p*pt+d*dt,u[8]=c*k+h*j+p*B+d*D,u[12]=c*U+h*tt+p*Y+d*nt,u[1]=g*P+v*C+_*mt+x*W,u[5]=g*F+v*H+_*pt+x*dt,u[9]=g*k+v*j+_*B+x*D,u[13]=g*U+v*tt+_*Y+x*nt,u[2]=E*P+T*C+S*mt+y*W,u[6]=E*F+T*H+S*pt+y*dt,u[10]=E*k+T*j+S*B+y*D,u[14]=E*U+T*tt+S*Y+y*nt,u[3]=L*P+N*C+w*mt+I*W,u[7]=L*F+N*H+w*pt+I*dt,u[11]=L*k+N*j+w*B+I*D,u[15]=L*U+N*tt+w*Y+I*nt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],o=t[8],u=t[12],c=t[1],h=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],x=t[14],E=t[3],T=t[7],S=t[11],y=t[15];return E*(+u*p*v-o*d*v-u*h*_+r*d*_+o*h*x-r*p*x)+T*(+n*p*x-n*d*_+u*c*_-o*c*x+o*d*g-u*p*g)+S*(+n*d*v-n*h*x-u*c*v+r*c*x+u*h*g-r*d*g)+y*(-o*h*g-n*p*v+n*h*_+o*c*v-r*c*_+r*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],x=t[11],E=t[12],T=t[13],S=t[14],y=t[15],L=v*S*d-T*_*d+T*p*x-h*S*x-v*p*y+h*_*y,N=E*_*d-g*S*d-E*p*x+c*S*x+g*p*y-c*_*y,w=g*T*d-E*v*d+E*h*x-c*T*x-g*h*y+c*v*y,I=E*v*p-g*T*p-E*h*_+c*T*_+g*h*S-c*v*S,P=n*L+r*N+o*w+u*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return t[0]=L*F,t[1]=(T*_*u-v*S*u-T*o*x+r*S*x+v*o*y-r*_*y)*F,t[2]=(h*S*u-T*p*u+T*o*d-r*S*d-h*o*y+r*p*y)*F,t[3]=(v*p*u-h*_*u-v*o*d+r*_*d+h*o*x-r*p*x)*F,t[4]=N*F,t[5]=(g*S*u-E*_*u+E*o*x-n*S*x-g*o*y+n*_*y)*F,t[6]=(E*p*u-c*S*u-E*o*d+n*S*d+c*o*y-n*p*y)*F,t[7]=(c*_*u-g*p*u+g*o*d-n*_*d-c*o*x+n*p*x)*F,t[8]=w*F,t[9]=(E*v*u-g*T*u-E*r*x+n*T*x+g*r*y-n*v*y)*F,t[10]=(c*T*u-E*h*u+E*r*d-n*T*d-c*r*y+n*h*y)*F,t[11]=(g*h*u-c*v*u-g*r*d+n*v*d+c*r*x-n*h*x)*F,t[12]=I*F,t[13]=(g*T*o-E*v*o+E*r*_-n*T*_-g*r*S+n*v*S)*F,t[14]=(E*h*o-c*T*o-E*r*p+n*T*p+c*r*S-n*h*S)*F,t[15]=(c*v*o-g*h*o+g*r*p-n*v*p-c*r*_+n*h*_)*F,this}scale(t){const n=this.elements,r=t.x,o=t.y,u=t.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=t.x,h=t.y,p=t.z,d=u*c,g=u*h;return this.set(d*c+r,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+r,g*p-o*c,0,d*p-o*h,g*p+o*c,u*p*p+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,o,u,c){return this.set(1,r,u,0,t,1,c,0,n,o,1,0,0,0,0,1),this}compose(t,n,r){const o=this.elements,u=n._x,c=n._y,h=n._z,p=n._w,d=u+u,g=c+c,v=h+h,_=u*d,x=u*g,E=u*v,T=c*g,S=c*v,y=h*v,L=p*d,N=p*g,w=p*v,I=r.x,P=r.y,F=r.z;return o[0]=(1-(T+y))*I,o[1]=(x+w)*I,o[2]=(E-N)*I,o[3]=0,o[4]=(x-w)*P,o[5]=(1-(_+y))*P,o[6]=(S+L)*P,o[7]=0,o[8]=(E+N)*F,o[9]=(S-L)*F,o[10]=(1-(_+T))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,r){const o=this.elements;let u=Us.set(o[0],o[1],o[2]).length();const c=Us.set(o[4],o[5],o[6]).length(),h=Us.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],Si.copy(this);const d=1/u,g=1/c,v=1/h;return Si.elements[0]*=d,Si.elements[1]*=d,Si.elements[2]*=d,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,n.setFromRotationMatrix(Si),r.x=u,r.y=c,r.z=h,this}makePerspective(t,n,r,o,u,c,h=ga){const p=this.elements,d=2*u/(n-t),g=2*u/(r-o),v=(n+t)/(n-t),_=(r+o)/(r-o);let x,E;if(h===ga)x=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(h===kc)x=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=d,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,o,u,c,h=ga){const p=this.elements,d=1/(n-t),g=1/(r-o),v=1/(c-u),_=(n+t)*d,x=(r+o)*g;let E,T;if(h===ga)E=(c+u)*v,T=-2*v;else if(h===kc)E=u*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Us=new at,Si=new Qe,tT=new at(0,0,0),eT=new at(1,1,1),tr=new at,ac=new at,ti=new at,Fv=new Qe,Iv=new Pl;class Sa{constructor(t=0,n=0,r=0,o=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,o=this._order){return this._x=t,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const o=t.elements,u=o[0],c=o[4],h=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Fv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fv,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Iv.setFromEuler(this),this.setFromQuaternion(Iv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class Rm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nT=0;const Hv=new at,Ns=new Pl,ua=new Qe,rc=new at,hl=new at,iT=new at,aT=new Pl,Gv=new at(1,0,0),Vv=new at(0,1,0),kv=new at(0,0,1),Xv={type:"added"},rT={type:"removed"},Ls={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Hn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new at,n=new Sa,r=new Pl,o=new at(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qe},normalMatrix:{value:new pe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Gv,t)}rotateY(t){return this.rotateOnAxis(Vv,t)}rotateZ(t){return this.rotateOnAxis(kv,t)}translateOnAxis(t,n){return Hv.copy(t).applyQuaternion(this.quaternion),this.position.add(Hv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Gv,t)}translateY(t){return this.translateOnAxis(Vv,t)}translateZ(t){return this.translateOnAxis(kv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?rc.copy(t):rc.set(t,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(hl,rc,this.up):ua.lookAt(rc,hl,this.up),this.quaternion.setFromRotationMatrix(ua),o&&(ua.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(ua),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xv),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(rT),Bd.child=t,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xv),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,t,iT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,aT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(u(t.materials,this.material[p]));o.material=h}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(u(t.animations,p))}}if(n){const h=c(t.geometries),p=c(t.materials),d=c(t.textures),g=c(t.images),v=c(t.shapes),_=c(t.skeletons),x=c(t.animations),E=c(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}Hn.DEFAULT_UP=new at(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new at,ca=new at,Fd=new at,fa=new at,Os=new at,Ps=new at,Wv=new at,Id=new at,Hd=new at,Gd=new at,Vd=new sn,kd=new sn,Xd=new sn;class pi{constructor(t=new at,n=new at,r=new at){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,o){o.subVectors(r,n),Mi.subVectors(t,n),o.cross(Mi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,r,o,u){Mi.subVectors(o,n),ca.subVectors(r,n),Fd.subVectors(t,n);const c=Mi.dot(Mi),h=Mi.dot(ca),p=Mi.dot(Fd),d=ca.dot(ca),g=ca.dot(Fd),v=c*d-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,x=(d*p-h*g)*_,E=(c*g-h*p)*_;return u.set(1-x-E,E,x)}static containsPoint(t,n,r,o){return this.getBarycoord(t,n,r,o,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,n,r,o,u,c,h,p){return this.getBarycoord(t,n,r,o,fa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,fa.x),p.addScaledVector(c,fa.y),p.addScaledVector(h,fa.z),p)}static getInterpolatedAttribute(t,n,r,o,u,c){return Vd.setScalar(0),kd.setScalar(0),Xd.setScalar(0),Vd.fromBufferAttribute(t,n),kd.fromBufferAttribute(t,r),Xd.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(Vd,u.x),c.addScaledVector(kd,u.y),c.addScaledVector(Xd,u.z),c}static isFrontFacing(t,n,r,o){return Mi.subVectors(r,n),ca.subVectors(t,n),Mi.cross(ca).dot(o)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,o){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,r,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Mi.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return pi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,o,u){return pi.getInterpolation(t,this.a,this.b,this.c,n,r,o,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,o=this.b,u=this.c;let c,h;Os.subVectors(o,r),Ps.subVectors(u,r),Id.subVectors(t,r);const p=Os.dot(Id),d=Ps.dot(Id);if(p<=0&&d<=0)return n.copy(r);Hd.subVectors(t,o);const g=Os.dot(Hd),v=Ps.dot(Hd);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return c=p/(p-g),n.copy(r).addScaledVector(Os,c);Gd.subVectors(t,u);const x=Os.dot(Gd),E=Ps.dot(Gd);if(E>=0&&x<=E)return n.copy(u);const T=x*d-p*E;if(T<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(r).addScaledVector(Ps,h);const S=g*E-x*v;if(S<=0&&v-g>=0&&x-E>=0)return Wv.subVectors(u,o),h=(v-g)/(v-g+(x-E)),n.copy(o).addScaledVector(Wv,h);const y=1/(S+T+_);return c=T*y,h=_*y,n.copy(r).addScaledVector(Os,c).addScaledVector(Ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},sc={h:0,s:0,l:0};function Wd(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}let Me=class{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,n),this}setRGB(t,n,r,o=Ne.workingColorSpace){return this.r=t,this.g=n,this.b=r,Ne.toWorkingColorSpace(this,o),this}setHSL(t,n,r,o=Ne.workingColorSpace){if(t=V1(t,1),n=Ae(n,0,1),r=Ae(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Wd(c,u,t+1/3),this.g=Wd(c,u,t),this.b=Wd(c,u,t-1/3)}return Ne.toWorkingColorSpace(this,o),this}setStyle(t,n=di){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=di){const r=Uy[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Ne.fromWorkingColorSpace(Pn.copy(this),t),Math.round(Ae(Pn.r*255,0,255))*65536+Math.round(Ae(Pn.g*255,0,255))*256+Math.round(Ae(Pn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Pn.copy(this),n);const r=Pn.r,o=Pn.g,u=Pn.b,c=Math.max(r,o,u),h=Math.min(r,o,u);let p,d;const g=(h+c)/2;if(h===c)p=0,d=0;else{const v=c-h;switch(d=g<=.5?v/(c+h):v/(2-c-h),c){case r:p=(o-u)/v+(o<u?6:0);break;case o:p=(u-r)/v+2;break;case u:p=(r-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Pn.copy(this),n),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=di){Ne.fromWorkingColorSpace(Pn.copy(this),t);const n=Pn.r,r=Pn.g,o=Pn.b;return t!==di?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,n,r){return this.getHSL(er),this.setHSL(er.h+t,er.s+n,er.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(er),t.getHSL(sc);const r=Rd(er.h,sc.h,n),o=Rd(er.s,sc.s,n),u=Rd(er.l,sc.l,n);return this.setHSL(r,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,o=this.b,u=t.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Pn=new Me;Me.NAMES=Uy;let sT=0;class po extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Ks,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_p,this.blendDst=vp,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_p&&(r.blendSrc=this.blendSrc),this.blendDst!==vp&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(n){const u=o(t.textures),c=o(t.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class io extends po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=gy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new at,oc=new Ee;let oT=0;class wi{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=nm,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)oc.fromBufferAttribute(this,n),oc.applyMatrix3(t),this.setXY(n,oc.x,oc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Fi(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Fi(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Fi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Fi(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,o){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,n,r,o,u){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array),u=Ve(u,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nm&&(t.usage=this.usage),t}}class Ny extends wi{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class Ly extends wi{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class Ri extends wi{constructor(t,n,r){super(new Float32Array(t),n,r)}}let lT=0;const hi=new Qe,Yd=new Hn,zs=new at,ei=new zl,dl=new zl,En=new at;class gi extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cy(t)?Ly:Ny)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,n,r){return hi.makeTranslation(t,n,r),this.applyMatrix4(hi),this}scale(t,n,r){return hi.makeScale(t,n,r),this.applyMatrix4(hi),this}lookAt(t){return Yd.lookAt(t),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=t.length;o<u;o++){const c=t[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ri(r,3))}else{const r=Math.min(t.length,n.count);for(let o=0;o<r;o++){const u=t[o];n.setXYZ(o,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ff);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];dl.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ei.min,dl.min),ei.expandByPoint(En),En.addVectors(ei.max,dl.max),ei.expandByPoint(En)):(ei.expandByPoint(dl.min),ei.expandByPoint(dl.max))}ei.getCenter(r);let o=0;for(let u=0,c=t.count;u<c;u++)En.fromBufferAttribute(t,u),o=Math.max(o,r.distanceToSquared(En));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)En.fromBufferAttribute(h,d),p&&(zs.fromBufferAttribute(t,d),En.add(zs)),o=Math.max(o,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let k=0;k<r.count;k++)h[k]=new at,p[k]=new at;const d=new at,g=new at,v=new at,_=new Ee,x=new Ee,E=new Ee,T=new at,S=new at;function y(k,U,C){d.fromBufferAttribute(r,k),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,C),_.fromBufferAttribute(u,k),x.fromBufferAttribute(u,U),E.fromBufferAttribute(u,C),g.sub(d),v.sub(d),x.sub(_),E.sub(_);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(H),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(H),h[k].add(T),h[U].add(T),h[C].add(T),p[k].add(S),p[U].add(S),p[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let k=0,U=L.length;k<U;++k){const C=L[k],H=C.start,j=C.count;for(let tt=H,mt=H+j;tt<mt;tt+=3)y(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const N=new at,w=new at,I=new at,P=new at;function F(k){I.fromBufferAttribute(o,k),P.copy(I);const U=h[k];N.copy(U),N.sub(I.multiplyScalar(I.dot(U))).normalize(),w.crossVectors(P,U);const H=w.dot(p[k])<0?-1:1;c.setXYZW(k,N.x,N.y,N.z,H)}for(let k=0,U=L.length;k<U;++k){const C=L[k],H=C.start,j=C.count;for(let tt=H,mt=H+j;tt<mt;tt+=3)F(t.getX(tt+0)),F(t.getX(tt+1)),F(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,x=r.count;_<x;_++)r.setXYZ(_,0,0,0);const o=new at,u=new at,c=new at,h=new at,p=new at,d=new at,g=new at,v=new at;if(t)for(let _=0,x=t.count;_<x;_+=3){const E=t.getX(_+0),T=t.getX(_+1),S=t.getX(_+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),c.fromBufferAttribute(n,S),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),d.fromBufferAttribute(r,S),h.add(g),p.add(g),d.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)En.fromBufferAttribute(t,n),En.normalize(),t.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(p.length*g);let x=0,E=0;for(let T=0,S=p.length;T<S;T++){h.isInterleavedBufferAttribute?x=p[T]*h.data.stride+h.offset:x=p[T]*g;for(let y=0;y<g;y++)_[E++]=d[x++]}return new wi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gi,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=t(p,r);n.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const p=[],d=u[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=t(_,r);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const d=c[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const d=r[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(t.data))}g.length>0&&(o[p]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const u=t.morphAttributes;for(const d in u){const g=[],v=u[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yv=new Qe,Cr=new wm,lc=new ff,qv=new at,uc=new at,cc=new at,fc=new at,qd=new at,hc=new at,jv=new at,dc=new at;class ii extends Hn{constructor(t=new gi,n=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(u&&h){hc.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const g=h[p],v=u[p];g!==0&&(qd.fromBufferAttribute(v,t),c?hc.addScaledVector(qd,g):hc.addScaledVector(qd.sub(n),g))}n.add(hc)}return n}raycast(t,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),Cr.copy(t.ray).recast(t.near),!(lc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(lc,qv)===null||Cr.origin.distanceToSquared(qv)>(t.far-t.near)**2))&&(Yv.copy(u).invert(),Cr.copy(t.ray).applyMatrix4(Yv),!(r.boundingBox!==null&&Cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Cr)))}_computeIntersections(t,n,r){let o;const u=this.geometry,c=this.material,h=u.index,p=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,x=u.drawRange;if(h!==null)if(Array.isArray(c))for(let E=0,T=_.length;E<T;E++){const S=_[E],y=c[S.materialIndex],L=Math.max(S.start,x.start),N=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,I=N;w<I;w+=3){const P=h.getX(w),F=h.getX(w+1),k=h.getX(w+2);o=pc(this,y,t,r,d,g,v,P,F,k),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const L=h.getX(S),N=h.getX(S+1),w=h.getX(S+2);o=pc(this,c,t,r,d,g,v,L,N,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,T=_.length;E<T;E++){const S=_[E],y=c[S.materialIndex],L=Math.max(S.start,x.start),N=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,I=N;w<I;w+=3){const P=w,F=w+1,k=w+2;o=pc(this,y,t,r,d,g,v,P,F,k),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const L=S,N=S+1,w=S+2;o=pc(this,c,t,r,d,g,v,L,N,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function uT(i,t,n,r,o,u,c,h){let p;if(t.side===Yn?p=r.intersectTriangle(c,u,o,!0,h):p=r.intersectTriangle(o,u,c,t.side===or,h),p===null)return null;dc.copy(h),dc.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(dc);return d<n.near||d>n.far?null:{distance:d,point:dc.clone(),object:i}}function pc(i,t,n,r,o,u,c,h,p,d){i.getVertexPosition(h,uc),i.getVertexPosition(p,cc),i.getVertexPosition(d,fc);const g=uT(i,t,n,r,uc,cc,fc,jv);if(g){const v=new at;pi.getBarycoord(jv,uc,cc,fc,v),o&&(g.uv=pi.getInterpolatedAttribute(o,h,p,d,v,new Ee)),u&&(g.uv1=pi.getInterpolatedAttribute(u,h,p,d,v,new Ee)),c&&(g.normal=pi.getInterpolatedAttribute(c,h,p,d,v,new at),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:d,normal:new at,materialIndex:0};pi.getNormal(uc,cc,fc,_.normal),g.face=_,g.barycoord=v}return g}class Bl extends gi{constructor(t=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],g=[],v=[];let _=0,x=0;E("z","y","x",-1,-1,r,n,t,c,u,0),E("z","y","x",1,-1,r,n,-t,c,u,1),E("x","z","y",1,1,t,r,n,o,c,2),E("x","z","y",1,-1,t,r,-n,o,c,3),E("x","y","z",1,-1,t,n,r,o,u,4),E("x","y","z",-1,-1,t,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new Ri(d,3)),this.setAttribute("normal",new Ri(g,3)),this.setAttribute("uv",new Ri(v,2));function E(T,S,y,L,N,w,I,P,F,k,U){const C=w/F,H=I/k,j=w/2,tt=I/2,mt=P/2,pt=F+1,B=k+1;let Y=0,W=0;const dt=new at;for(let D=0;D<B;D++){const nt=D*H-tt;for(let At=0;At<pt;At++){const _t=At*C-j;dt[T]=_t*L,dt[S]=nt*N,dt[y]=mt,d.push(dt.x,dt.y,dt.z),dt[T]=0,dt[S]=0,dt[y]=P>0?1:-1,g.push(dt.x,dt.y,dt.z),v.push(At/F),v.push(1-D/k),Y+=1}}for(let D=0;D<k;D++)for(let nt=0;nt<F;nt++){const At=_+nt+pt*D,_t=_+nt+pt*(D+1),$=_+(nt+1)+pt*(D+1),xt=_+(nt+1)+pt*D;p.push(At,_t,xt),p.push(_t,$,xt),W+=6}h.addGroup(x,W,U),x+=W,_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(i){const t={};for(const n in i){t[n]={};for(const r in i[n]){const o=i[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=o.clone():Array.isArray(o)?t[n][r]=o.slice():t[n][r]=o}}return t}function Fn(i){const t={};for(let n=0;n<i.length;n++){const r=ao(i[n]);for(const o in r)t[o]=r[o]}return t}function cT(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function Oy(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const fT={clone:ao,merge:Fn};var hT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=cT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Py extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=ga}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new at,Zv=new Ee,Kv=new Ee;class ni extends Py{constructor(t=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=im*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return im*2*Math.atan(Math.tan(wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,n){return this.getViewBounds(t,Zv,Kv),n.subVectors(Kv,Zv)}setViewOffset(t,n,r,o,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(wd*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*r/d,o*=c.width/p,r*=c.height/d}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,Fs=1;class pT extends Hn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(Bs,Fs,t,n);o.layers=this.layers,this.add(o);const u=new ni(Bs,Fs,t,n);u.layers=this.layers,this.add(u);const c=new ni(Bs,Fs,t,n);c.layers=this.layers,this.add(c);const h=new ni(Bs,Fs,t,n);h.layers=this.layers,this.add(h);const p=new ni(Bs,Fs,t,n);p.layers=this.layers,this.add(p);const d=new ni(Bs,Fs,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,h,p]=n;for(const d of n)this.remove(d);if(t===ga)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(n,u),t.setRenderTarget(r,1,o),t.render(n,c),t.setRenderTarget(r,2,o),t.render(n,h),t.setRenderTarget(r,3,o),t.render(n,p),t.setRenderTarget(r,4,o),t.render(n,d),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,o),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class zy extends In{constructor(t=[],n=to,r,o,u,c,h,p,d,g){super(t,n,r,o,u,c,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mT extends kr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new zy(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ii}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Bl(5,5,5),u=new lr({name:"CubemapFromEquirect",uniforms:ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:ar});u.uniforms.tEquirect.value=n;const c=new ii(o,u),h=n.minFilter;return n.minFilter===Ir&&(n.minFilter=Ii),new pT(1,10,this).update(t,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,r=!0,o=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,r,o);t.setRenderTarget(u)}}class Ys extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gT={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let o=null,u=null,c=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const T of t.hand.values()){const S=n.getJointPose(T,r),y=this._getHandJoint(d,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,E=.005;d.inputState.pinching&&_>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(gT)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new Ys;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class By extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _T{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=nm,this.updateRanges=[],this.version=0,this.uuid=sr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,r){t*=this.stride,r*=n.stride;for(let o=0,u=this.stride;o<u;o++)this.array[t+o]=n.array[r+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new at;class Wc{constructor(t,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,r=this.data.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix4(t),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.applyNormalMatrix(t),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.transformDirection(t),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}getComponent(t,n){let r=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+n]=r,this}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Fi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Fi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Fi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Fi(n,this.array)),n}setXY(t,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this}setXYZ(t,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this}setXYZW(t,n,r,o,u){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),r=Ve(r,this.array),o=Ve(o,this.array),u=Ve(u,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[o+u])}return new wi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[o+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cm extends po{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Is;const pl=new at,Hs=new at,Gs=new at,Vs=new Ee,ml=new Ee,Fy=new Qe,mc=new at,gl=new at,gc=new at,Qv=new Ee,Zd=new Ee,$v=new Ee;class Iy extends Hn{constructor(t=new Cm){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new gi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new _T(n,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new Wc(r,3,0,!1)),Is.setAttribute("uv",new Wc(r,2,3,!1))}this.geometry=Is,this.material=t,this.center=new Ee(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Fy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Gs.z);const r=this.material.rotation;let o,u;r!==0&&(u=Math.cos(r),o=Math.sin(r));const c=this.center;_c(mc.set(-.5,-.5,0),Gs,c,Hs,o,u),_c(gl.set(.5,-.5,0),Gs,c,Hs,o,u),_c(gc.set(.5,.5,0),Gs,c,Hs,o,u),Qv.set(0,0),Zd.set(1,0),$v.set(1,1);let h=t.ray.intersectTriangle(mc,gl,gc,!1,pl);if(h===null&&(_c(gl.set(-.5,.5,0),Gs,c,Hs,o,u),Zd.set(0,1),h=t.ray.intersectTriangle(mc,gc,gl,!1,pl),h===null))return;const p=t.ray.origin.distanceTo(pl);p<t.near||p>t.far||n.push({distance:p,point:pl.clone(),uv:pi.getInterpolation(pl,mc,gl,gc,Qv,Zd,$v,new Ee),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _c(i,t,n,r,o,u){Vs.subVectors(i,n).addScalar(.5).multiply(r),o!==void 0?(ml.x=u*Vs.x-o*Vs.y,ml.y=o*Vs.x+u*Vs.y):ml.copy(Vs),i.copy(t),i.x+=ml.x,i.y+=ml.y,i.applyMatrix4(Fy)}const Kd=new at,vT=new at,xT=new pe;class Lr{constructor(t=new at(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,o){return this.normal.set(t,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const o=Kd.subVectors(r,n).cross(vT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Kd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||xT.getNormalMatrix(t),o=this.coplanarPoint(Kd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new ff,vc=new at;class Hy{constructor(t=new Lr,n=new Lr,r=new Lr,o=new Lr,u=new Lr,c=new Lr){this.planes=[t,n,r,o,u,c]}set(t,n,r,o,u,c){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=ga){const r=this.planes,o=t.elements,u=o[0],c=o[1],h=o[2],p=o[3],d=o[4],g=o[5],v=o[6],_=o[7],x=o[8],E=o[9],T=o[10],S=o[11],y=o[12],L=o[13],N=o[14],w=o[15];if(r[0].setComponents(p-u,_-d,S-x,w-y).normalize(),r[1].setComponents(p+u,_+d,S+x,w+y).normalize(),r[2].setComponents(p+c,_+g,S+E,w+L).normalize(),r[3].setComponents(p-c,_-g,S-E,w-L).normalize(),r[4].setComponents(p-h,_-v,S-T,w-N).normalize(),n===ga)r[5].setComponents(p+h,_+v,S+T,w+N).normalize();else if(n===kc)r[5].setComponents(h,v,T,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const n=this.planes,r=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(vc.x=o.normal.x>0?t.max.x:t.min.x,vc.y=o.normal.y>0?t.max.y:t.min.y,vc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(vc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dm extends po{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yc=new at,qc=new at,Jv=new Qe,_l=new wm,xc=new ff,Qd=new at,tx=new at;class Gy extends Hn{constructor(t=new gi,n=new Dm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,r=[0];for(let o=1,u=n.count;o<u;o++)Yc.fromBufferAttribute(n,o-1),qc.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Yc.distanceTo(qc);t.setAttribute("lineDistance",new Ri(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const r=this.geometry,o=this.matrixWorld,u=t.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(o),xc.radius+=u,t.ray.intersectsSphere(xc)===!1)return;Jv.copy(o).invert(),_l.copy(t.ray).applyMatrix4(Jv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const x=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let T=x,S=E-1;T<S;T+=d){const y=g.getX(T),L=g.getX(T+1),N=yc(this,t,_l,p,y,L,T);N&&n.push(N)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(x),y=yc(this,t,_l,p,T,S,E-1);y&&n.push(y)}}else{const x=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let T=x,S=E-1;T<S;T+=d){const y=yc(this,t,_l,p,T,T+1,T);y&&n.push(y)}if(this.isLineLoop){const T=yc(this,t,_l,p,E-1,x,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function yc(i,t,n,r,o,u,c){const h=i.geometry.attributes.position;if(Yc.fromBufferAttribute(h,o),qc.fromBufferAttribute(h,u),n.distanceSqToSegment(Yc,qc,Qd,tx)>r)return;Qd.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Qd);if(!(d<t.near||d>t.far))return{distance:d,point:tx.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}class jc extends In{constructor(t,n,r,o,u,c,h,p,d){super(t,n,r,o,u,c,h,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vy extends In{constructor(t,n,r=Vr,o,u,c,h=Ai,p=Ai,d,g=Cl){if(g!==Cl&&g!==Dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,u,c,h,p,g,r,d),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Am(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class hf extends gi{constructor(t=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:o};const u=t/2,c=n/2,h=Math.floor(r),p=Math.floor(o),d=h+1,g=p+1,v=t/h,_=n/p,x=[],E=[],T=[],S=[];for(let y=0;y<g;y++){const L=y*_-c;for(let N=0;N<d;N++){const w=N*v-u;E.push(w,-L,0),T.push(0,0,1),S.push(N/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let L=0;L<h;L++){const N=L+d*y,w=L+d*(y+1),I=L+1+d*(y+1),P=L+1+d*y;x.push(N,w,P),x.push(w,I,P)}this.setIndex(x),this.setAttribute("position",new Ri(E,3)),this.setAttribute("normal",new Ri(T,3)),this.setAttribute("uv",new Ri(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hf(t.width,t.height,t.widthSegments,t.heightSegments)}}class ro extends gi{constructor(t=1,n=32,r=16,o=0,u=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:o,phiLength:u,thetaStart:c,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(c+h,Math.PI);let d=0;const g=[],v=new at,_=new at,x=[],E=[],T=[],S=[];for(let y=0;y<=r;y++){const L=[],N=y/r;let w=0;y===0&&c===0?w=.5/n:y===r&&p===Math.PI&&(w=-.5/n);for(let I=0;I<=n;I++){const P=I/n;v.x=-t*Math.cos(o+P*u)*Math.sin(c+N*h),v.y=t*Math.cos(c+N*h),v.z=t*Math.sin(o+P*u)*Math.sin(c+N*h),E.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),S.push(P+w,1-N),L.push(d++)}g.push(L)}for(let y=0;y<r;y++)for(let L=0;L<n;L++){const N=g[y][L+1],w=g[y][L],I=g[y+1][L],P=g[y+1][L+1];(y!==0||c>0)&&x.push(N,w,P),(y!==r-1||p<Math.PI)&&x.push(w,I,P)}this.setIndex(x),this.setAttribute("position",new Ri(E,3)),this.setAttribute("normal",new Ri(T,3)),this.setAttribute("uv",new Ri(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yT extends po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ST extends po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class MT extends Py{constructor(t=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-t,c=r+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ET extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const ex=new Qe;class ky{constructor(t,n,r=0,o=1/0){this.ray=new wm(t,n),this.near=r,this.far=o,this.camera=null,this.layers=new Rm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return ex.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ex),this}intersectObject(t,n=!0,r=[]){return am(t,this,r,n),r.sort(nx),r}intersectObjects(t,n=!0,r=[]){for(let o=0,u=t.length;o<u;o++)am(t[o],this,r,n);return r.sort(nx),r}}function nx(i,t){return i.distance-t.distance}function am(i,t,n,r){let o=!0;if(i.layers.test(t.layers)&&i.raycast(t,n)===!1&&(o=!1),o===!0&&r===!0){const u=i.children;for(let c=0,h=u.length;c<h;c++)am(u[c],t,n,!0)}}function ix(i,t,n,r){const o=TT(r);switch(n){case Sy:return i*t;case Ey:return i*t;case Ty:return i*t*2;case by:return i*t/o.components*o.byteLength;case Em:return i*t/o.components*o.byteLength;case Ay:return i*t*2/o.components*o.byteLength;case Tm:return i*t*2/o.components*o.byteLength;case My:return i*t*3/o.components*o.byteLength;case bi:return i*t*4/o.components*o.byteLength;case bm:return i*t*4/o.components*o.byteLength;case Dc:case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nc:case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Up:case Lp:return Math.max(i,16)*Math.max(t,8)/4;case Dp:case Np:return Math.max(i,8)*Math.max(t,8)/2;case Op:case Pp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fp:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ip:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hp:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gp:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vp:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kp:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xp:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wp:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yp:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qp:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jp:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zp:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Kp:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oc:case Qp:case $p:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wy:case Jp:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tm:case em:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TT(i){switch(i){case ya:case vy:return{byteLength:1,components:1};case wl:case xy:case Ol:return{byteLength:2,components:1};case Sm:case Mm:return{byteLength:2,components:4};case Vr:case ym:case ma:return{byteLength:4,components:1};case yy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xy(){let i=null,t=!1,n=null,r=null;function o(u,c){n(u,c),r=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(r=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){i=u}}}function bT(i){const t=new WeakMap;function n(h,p){const d=h.array,g=h.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,d){const g=p.array,v=p.updateRanges;if(i.bindBuffer(d,h),v.length===0)i.bufferSubData(d,0,g);else{v.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<v.length;x++){const E=v[_],T=v[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,E=v.length;x<E;x++){const T=v[x];i.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(i.deleteBuffer(p.buffer),t.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,p),d.version=h.version}}return{get:o,remove:u,update:c}}var AT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wT=`#ifdef USE_ALPHAHASH
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
#endif`,RT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NT=`#ifdef USE_AOMAP
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
#endif`,LT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OT=`#ifdef USE_BATCHING
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
#endif`,PT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IT=`#ifdef USE_IRIDESCENCE
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
#endif`,HT=`#ifdef USE_BUMPMAP
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ZT=`#define PI 3.141592653589793
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
} // validated`,KT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QT=`vec3 transformedNormal = objectNormal;
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
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ab=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,db=`#ifdef USE_GRADIENTMAP
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
}`,pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
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
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eb=`PhysicalMaterial material;
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
#endif`,Tb=`struct PhysicalMaterial {
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
}`,bb=`
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
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
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
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pb=`#if defined( USE_POINTS_UV )
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
#endif`,zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`#ifdef USE_MORPHTARGETS
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
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
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
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cA=`float getShadowMask() {
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
}`,fA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hA=`#ifdef USE_SKINNING
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
#endif`,dA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pA=`#ifdef USE_SKINNING
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
#endif`,mA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_A=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xA=`#ifdef USE_TRANSMISSION
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
#endif`,yA=`#ifdef USE_TRANSMISSION
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AA=`uniform sampler2D t2D;
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
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
}`,NA=`#if DEPTH_PACKING == 3200
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
}`,LA=`#define DISTANCE
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
}`,OA=`#define DISTANCE
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`uniform float scale;
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
}`,FA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,HA=`uniform vec3 diffuse;
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
}`,GA=`#define LAMBERT
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
}`,VA=`#define LAMBERT
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
}`,kA=`#define MATCAP
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
}`,XA=`#define MATCAP
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
}`,WA=`#define NORMAL
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
}`,YA=`#define NORMAL
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
}`,qA=`#define PHONG
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
}`,jA=`#define PHONG
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
}`,ZA=`#define STANDARD
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
}`,KA=`#define STANDARD
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
}`,QA=`#define TOON
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
}`,$A=`#define TOON
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
}`,JA=`uniform float size;
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
}`,tw=`uniform vec3 diffuse;
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
}`,ew=`#include <common>
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
}`,nw=`uniform vec3 color;
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
}`,iw=`uniform float rotation;
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
}`,aw=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:AT,alphahash_pars_fragment:wT,alphamap_fragment:RT,alphamap_pars_fragment:CT,alphatest_fragment:DT,alphatest_pars_fragment:UT,aomap_fragment:NT,aomap_pars_fragment:LT,batching_pars_vertex:OT,batching_vertex:PT,begin_vertex:zT,beginnormal_vertex:BT,bsdfs:FT,iridescence_fragment:IT,bumpmap_pars_fragment:HT,clipping_planes_fragment:GT,clipping_planes_pars_fragment:VT,clipping_planes_pars_vertex:kT,clipping_planes_vertex:XT,color_fragment:WT,color_pars_fragment:YT,color_pars_vertex:qT,color_vertex:jT,common:ZT,cube_uv_reflection_fragment:KT,defaultnormal_vertex:QT,displacementmap_pars_vertex:$T,displacementmap_vertex:JT,emissivemap_fragment:tb,emissivemap_pars_fragment:eb,colorspace_fragment:nb,colorspace_pars_fragment:ib,envmap_fragment:ab,envmap_common_pars_fragment:rb,envmap_pars_fragment:sb,envmap_pars_vertex:ob,envmap_physical_pars_fragment:vb,envmap_vertex:lb,fog_vertex:ub,fog_pars_vertex:cb,fog_fragment:fb,fog_pars_fragment:hb,gradientmap_pars_fragment:db,lightmap_pars_fragment:pb,lights_lambert_fragment:mb,lights_lambert_pars_fragment:gb,lights_pars_begin:_b,lights_toon_fragment:xb,lights_toon_pars_fragment:yb,lights_phong_fragment:Sb,lights_phong_pars_fragment:Mb,lights_physical_fragment:Eb,lights_physical_pars_fragment:Tb,lights_fragment_begin:bb,lights_fragment_maps:Ab,lights_fragment_end:wb,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:Db,logdepthbuf_vertex:Ub,map_fragment:Nb,map_pars_fragment:Lb,map_particle_fragment:Ob,map_particle_pars_fragment:Pb,metalnessmap_fragment:zb,metalnessmap_pars_fragment:Bb,morphinstance_vertex:Fb,morphcolor_vertex:Ib,morphnormal_vertex:Hb,morphtarget_pars_vertex:Gb,morphtarget_vertex:Vb,normal_fragment_begin:kb,normal_fragment_maps:Xb,normal_pars_fragment:Wb,normal_pars_vertex:Yb,normal_vertex:qb,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Kb,clearcoat_pars_fragment:Qb,iridescence_pars_fragment:$b,opaque_fragment:Jb,packing:tA,premultiplied_alpha_fragment:eA,project_vertex:nA,dithering_fragment:iA,dithering_pars_fragment:aA,roughnessmap_fragment:rA,roughnessmap_pars_fragment:sA,shadowmap_pars_fragment:oA,shadowmap_pars_vertex:lA,shadowmap_vertex:uA,shadowmask_pars_fragment:cA,skinbase_vertex:fA,skinning_pars_vertex:hA,skinning_vertex:dA,skinnormal_vertex:pA,specularmap_fragment:mA,specularmap_pars_fragment:gA,tonemapping_fragment:_A,tonemapping_pars_fragment:vA,transmission_fragment:xA,transmission_pars_fragment:yA,uv_pars_fragment:SA,uv_pars_vertex:MA,uv_vertex:EA,worldpos_vertex:TA,background_vert:bA,background_frag:AA,backgroundCube_vert:wA,backgroundCube_frag:RA,cube_vert:CA,cube_frag:DA,depth_vert:UA,depth_frag:NA,distanceRGBA_vert:LA,distanceRGBA_frag:OA,equirect_vert:PA,equirect_frag:zA,linedashed_vert:BA,linedashed_frag:FA,meshbasic_vert:IA,meshbasic_frag:HA,meshlambert_vert:GA,meshlambert_frag:VA,meshmatcap_vert:kA,meshmatcap_frag:XA,meshnormal_vert:WA,meshnormal_frag:YA,meshphong_vert:qA,meshphong_frag:jA,meshphysical_vert:ZA,meshphysical_frag:KA,meshtoon_vert:QA,meshtoon_frag:$A,points_vert:JA,points_frag:tw,shadow_vert:ew,shadow_frag:nw,sprite_vert:iw,sprite_frag:aw},Wt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Fn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Fn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Fn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Fn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Fn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Fn([Wt.points,Wt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Fn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Fn([Wt.common,Wt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Fn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Fn([Wt.sprite,Wt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Fn([Wt.common,Wt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Fn([Wt.lights,Wt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Sc={r:0,b:0,g:0},Ur=new Sa,rw=new Qe;function sw(i,t,n,r,o,u,c){const h=new Me(0);let p=u===!0?0:1,d,g,v=null,_=0,x=null;function E(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?n:t).get(w)),w}function T(N){let w=!1;const I=E(N);I===null?y(h,p):I&&I.isColor&&(y(I,1),w=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(i.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(N,w){const I=E(w);I&&(I.isCubeTexture||I.mapping===cf)?(g===void 0&&(g=new ii(new Bl(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:ao(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ur.copy(w.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rw.makeRotationFromEuler(Ur)),g.material.toneMapped=Ne.getTransfer(I.colorSpace)!==Ge,(v!==I||_!==I.version||x!==i.toneMapping)&&(g.material.needsUpdate=!0,v=I,_=I.version,x=i.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(d===void 0&&(d=new ii(new hf(2,2),new lr({name:"BackgroundMaterial",uniforms:ao(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=I,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Ne.getTransfer(I.colorSpace)!==Ge,I.matrixAutoUpdate===!0&&I.updateMatrix(),d.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||_!==I.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,v=I,_=I.version,x=i.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null))}function y(N,w){N.getRGB(Sc,Oy(i)),r.buffers.color.setClear(Sc.r,Sc.g,Sc.b,w,c)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,w=1){h.set(N),p=w,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,y(h,p)},render:T,addToRenderList:S,dispose:L}}function ow(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=_(null);let u=o,c=!1;function h(C,H,j,tt,mt){let pt=!1;const B=v(tt,j,H);u!==B&&(u=B,d(u.object)),pt=x(C,tt,j,mt),pt&&E(C,tt,j,mt),mt!==null&&t.update(mt,i.ELEMENT_ARRAY_BUFFER),(pt||c)&&(c=!1,w(C,H,j,tt),mt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function p(){return i.createVertexArray()}function d(C){return i.bindVertexArray(C)}function g(C){return i.deleteVertexArray(C)}function v(C,H,j){const tt=j.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let pt=mt[H.id];pt===void 0&&(pt={},mt[H.id]=pt);let B=pt[tt];return B===void 0&&(B=_(p()),pt[tt]=B),B}function _(C){const H=[],j=[],tt=[];for(let mt=0;mt<n;mt++)H[mt]=0,j[mt]=0,tt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:tt,object:C,attributes:{},index:null}}function x(C,H,j,tt){const mt=u.attributes,pt=H.attributes;let B=0;const Y=j.getAttributes();for(const W in Y)if(Y[W].location>=0){const D=mt[W];let nt=pt[W];if(nt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor)),D===void 0||D.attribute!==nt||nt&&D.data!==nt.data)return!0;B++}return u.attributesNum!==B||u.index!==tt}function E(C,H,j,tt){const mt={},pt=H.attributes;let B=0;const Y=j.getAttributes();for(const W in Y)if(Y[W].location>=0){let D=pt[W];D===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(D=C.instanceColor));const nt={};nt.attribute=D,D&&D.data&&(nt.data=D.data),mt[W]=nt,B++}u.attributes=mt,u.attributesNum=B,u.index=tt}function T(){const C=u.newAttributes;for(let H=0,j=C.length;H<j;H++)C[H]=0}function S(C){y(C,0)}function y(C,H){const j=u.newAttributes,tt=u.enabledAttributes,mt=u.attributeDivisors;j[C]=1,tt[C]===0&&(i.enableVertexAttribArray(C),tt[C]=1),mt[C]!==H&&(i.vertexAttribDivisor(C,H),mt[C]=H)}function L(){const C=u.newAttributes,H=u.enabledAttributes;for(let j=0,tt=H.length;j<tt;j++)H[j]!==C[j]&&(i.disableVertexAttribArray(j),H[j]=0)}function N(C,H,j,tt,mt,pt,B){B===!0?i.vertexAttribIPointer(C,H,j,mt,pt):i.vertexAttribPointer(C,H,j,tt,mt,pt)}function w(C,H,j,tt){T();const mt=tt.attributes,pt=j.getAttributes(),B=H.defaultAttributeValues;for(const Y in pt){const W=pt[Y];if(W.location>=0){let dt=mt[Y];if(dt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(dt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(dt=C.instanceColor)),dt!==void 0){const D=dt.normalized,nt=dt.itemSize,At=t.get(dt);if(At===void 0)continue;const _t=At.buffer,$=At.type,xt=At.bytesPerElement,it=$===i.INT||$===i.UNSIGNED_INT||dt.gpuType===ym;if(dt.isInterleavedBufferAttribute){const Tt=dt.data,Ct=Tt.stride,St=dt.offset;if(Tt.isInstancedInterleavedBuffer){for(let et=0;et<W.locationSize;et++)y(W.location+et,Tt.meshPerAttribute);C.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let et=0;et<W.locationSize;et++)S(W.location+et);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let et=0;et<W.locationSize;et++)N(W.location+et,nt/W.locationSize,$,D,Ct*xt,(St+nt/W.locationSize*et)*xt,it)}else{if(dt.isInstancedBufferAttribute){for(let Tt=0;Tt<W.locationSize;Tt++)y(W.location+Tt,dt.meshPerAttribute);C.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)S(W.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Tt=0;Tt<W.locationSize;Tt++)N(W.location+Tt,nt/W.locationSize,$,D,nt*xt,nt/W.locationSize*Tt*xt,it)}}else if(B!==void 0){const D=B[Y];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(W.location,D);break;case 3:i.vertexAttrib3fv(W.location,D);break;case 4:i.vertexAttrib4fv(W.location,D);break;default:i.vertexAttrib1fv(W.location,D)}}}}L()}function I(){k();for(const C in r){const H=r[C];for(const j in H){const tt=H[j];for(const mt in tt)g(tt[mt].object),delete tt[mt];delete H[j]}delete r[C]}}function P(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const j in H){const tt=H[j];for(const mt in tt)g(tt[mt].object),delete tt[mt];delete H[j]}delete r[C.id]}function F(C){for(const H in r){const j=r[H];if(j[C.id]===void 0)continue;const tt=j[C.id];for(const mt in tt)g(tt[mt].object),delete tt[mt];delete j[C.id]}}function k(){U(),c=!0,u!==o&&(u=o,d(u.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:k,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function lw(i,t,n){let r;function o(d){r=d}function u(d,g){i.drawArrays(r,d,g),n.update(g,r,1)}function c(d,g,v){v!==0&&(i.drawArraysInstanced(r,d,g,v),n.update(g,r,v))}function h(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,v);let x=0;for(let E=0;E<v;E++)x+=g[E];n.update(x,r,1)}function p(d,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)c(d[E],g[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(r,d,0,g,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*_[T];n.update(E,r,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function uw(i,t,n,r){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==bi&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const k=F===Ol&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ya&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ma&&!k)}function p(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:I,maxSamples:P}}function cw(i){const t=this;let n=null,r=0,o=!1,u=!1;const c=new Lr,h=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||r!==0||o;return o=_,r=v.length,x},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const E=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,y=i.get(v);if(!o||E===null||E.length===0||u&&!S)u?g(null):d();else{const L=u?0:r,N=L*4;let w=y.clippingState||null;p.value=w,w=g(E,_,N,x);for(let I=0;I!==N;++I)w[I]=n[I];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,x,E){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=p.value,E!==!0||S===null){const y=x+T*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let N=0,w=x;N!==T;++N,w+=4)c.copy(v[N]).applyMatrix4(L,h),c.normal.toArray(S,w),S[w+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function fw(i){let t=new WeakMap;function n(c,h){return h===Ap?c.mapping=to:h===wp&&(c.mapping=eo),c}function r(c){if(c&&c.isTexture){const h=c.mapping;if(h===Ap||h===wp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new mT(p.height);return d.fromEquirectangularTexture(i,c),t.set(c,d),c.addEventListener("dispose",o),n(d.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const qs=4,ax=[.125,.215,.35,.446,.526,.582],Br=20,$d=new MT,rx=new Me;let Jd=null,tp=0,ep=0,np=!1;const Or=(1+Math.sqrt(5))/2,ks=1/Or,sx=[new at(-Or,ks,0),new at(Or,ks,0),new at(-ks,0,Or),new at(ks,0,Or),new at(0,Or,-ks),new at(0,Or,ks),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)],hw=new at;class ox{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,o=100,u={}){const{size:c=256,position:h=hw}=u;Jd=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ux(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jd,tp,ep),this._renderer.xr.enabled=np,t.scissorTest=!1,Mc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===to||t.mapping===eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jd=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Ol,format:bi,colorSpace:no,depthBuffer:!1},o=lx(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lx(t,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dw(u)),this._blurMaterial=pw(u,t,n)}return o}_compileMaterial(t){const n=new ii(this._lodPlanes[0],t);this._renderer.compile(n,$d)}_sceneToCubeUV(t,n,r,o,u){const p=new ni(90,1,n,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(rx),v.toneMapping=rr,v.autoClear=!1;const E=new io({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),T=new ii(new Bl,E);let S=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,S=!0):(E.color.copy(rx),S=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(p.up.set(0,d[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[L],u.y,u.z)):N===1?(p.up.set(0,0,d[L]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[L],u.z)):(p.up.set(0,d[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[L]));const w=this._cubeSize;Mc(o,N*w,L>2?w:0,w,w),v.setRenderTarget(o),S&&v.render(T,p),v.render(t,p)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=y}_textureToCubeUV(t,n){const r=this._renderer,o=t.mapping===to||t.mapping===eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ux());const u=o?this._cubemapMaterial:this._equirectMaterial,c=new ii(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;Mc(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,$d)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=sx[(o-u-1)%sx.length];this._blur(t,u-1,u,c,h)}n.autoClear=r}_blur(t,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,r,o,"latitudinal",u),this._halfBlur(c,t,r,r,o,"longitudinal",u)}_halfBlur(t,n,r,o,u,c,h){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ii(this._lodPlanes[o],d),_=d.uniforms,x=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*Br-1),T=u/E,S=isFinite(u)?1+Math.floor(g*T):Br;S>Br&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Br}`);const y=[];let L=0;for(let F=0;F<Br;++F){const k=F/T,U=Math.exp(-k*k/2);y.push(U),F===0?L+=U:F<S&&(L+=2*U)}for(let F=0;F<y.length;F++)y[F]=y[F]/L;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-r;const w=this._sizeLods[o],I=3*w*(o>N-qs?o-N+qs:0),P=4*(this._cubeSize-w);Mc(n,I,P,3*w,2*w),p.setRenderTarget(n),p.render(v,$d)}}function dw(i){const t=[],n=[],r=[];let o=i;const u=i-qs+1+ax.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);n.push(h);let p=1/h;c>i-qs?p=ax[c-i+qs-1]:c===0&&(p=0),r.push(p);const d=1/(h-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,E=6,T=3,S=2,y=1,L=new Float32Array(T*E*x),N=new Float32Array(S*E*x),w=new Float32Array(y*E*x);for(let P=0;P<x;P++){const F=P%3*2/3-1,k=P>2?0:-1,U=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];L.set(U,T*E*P),N.set(_,S*E*P);const C=[P,P,P,P,P,P];w.set(C,y*E*P)}const I=new gi;I.setAttribute("position",new wi(L,T)),I.setAttribute("uv",new wi(N,S)),I.setAttribute("faceIndex",new wi(w,y)),t.push(I),o>qs&&o--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function lx(i,t,n){const r=new kr(i,t,n);return r.texture.mapping=cf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Mc(i,t,n,r,o){i.viewport.set(t,n,r,o),i.scissor.set(t,n,r,o)}function pw(i,t,n){const r=new Float32Array(Br),o=new at(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Um(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ux(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Um(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function cx(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Um(){return`

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
	`}function mw(i){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const p=h.mapping,d=p===Ap||p===wp,g=p===to||p===eo;if(d||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new ox(i)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return d&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new ox(i)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function o(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function u(h){const p=h.target;p.removeEventListener("dispose",u);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function gw(i){const t={};function n(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return t[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Pc("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function _w(i,t,n,r){const o={},u=new WeakMap;function c(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete o[_.id];const x=u.get(_);x&&(t.remove(x),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const x in _)t.update(_[x],i.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,E=v.attributes.position;let T=0;if(x!==null){const L=x.array;T=x.version;for(let N=0,w=L.length;N<w;N+=3){const I=L[N+0],P=L[N+1],F=L[N+2];_.push(I,P,P,F,F,I)}}else if(E!==void 0){const L=E.array;T=E.version;for(let N=0,w=L.length/3-1;N<w;N+=3){const I=N+0,P=N+1,F=N+2;_.push(I,P,P,F,F,I)}}else return;const S=new(Cy(_)?Ly:Ny)(_,1);S.version=T;const y=u.get(v);y&&t.remove(y),u.set(v,S)}function g(v){const _=u.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function vw(i,t,n){let r;function o(_){r=_}let u,c;function h(_){u=_.type,c=_.bytesPerElement}function p(_,x){i.drawElements(r,x,u,_*c),n.update(x,r,1)}function d(_,x,E){E!==0&&(i.drawElementsInstanced(r,x,u,_*c,E),n.update(x,r,E))}function g(_,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,u,_,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];n.update(S,r,1)}function v(_,x,E,T){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/c,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,u,_,0,T,0,E);let y=0;for(let L=0;L<E;L++)y+=x[L]*T[L];n.update(y,r,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function xw(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,h){switch(n.calls++,c){case i.TRIANGLES:n.triangles+=h*(u/3);break;case i.LINES:n.lines+=h*(u/2);break;case i.LINE_STRIP:n.lines+=h*(u-1);break;case i.LINE_LOOP:n.lines+=h*u;break;case i.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:r}}function yw(i,t,n){const r=new WeakMap,o=new sn;function u(c,h,p){const d=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let C=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var x=C;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),T===!0&&(w=2),S===!0&&(w=3);let I=h.attributes.position.count*w,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*P*4*v),k=new Dy(F,I,P,v);k.type=ma,k.needsUpdate=!0;const U=w*4;for(let H=0;H<v;H++){const j=y[H],tt=L[H],mt=N[H],pt=I*P*4*H;for(let B=0;B<j.count;B++){const Y=B*U;E===!0&&(o.fromBufferAttribute(j,B),F[pt+Y+0]=o.x,F[pt+Y+1]=o.y,F[pt+Y+2]=o.z,F[pt+Y+3]=0),T===!0&&(o.fromBufferAttribute(tt,B),F[pt+Y+4]=o.x,F[pt+Y+5]=o.y,F[pt+Y+6]=o.z,F[pt+Y+7]=0),S===!0&&(o.fromBufferAttribute(mt,B),F[pt+Y+8]=o.x,F[pt+Y+9]=o.y,F[pt+Y+10]=o.z,F[pt+Y+11]=mt.itemSize===4?o.w:1)}}_={count:v,texture:k,size:new Ee(I,P)},r.set(h,_),h.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(i,"morphTargetBaseInfluence",T),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:u}}function Sw(i,t,n,r){let o=new WeakMap;function u(p){const d=r.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==d&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function c(){o=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:c}}const Wy=new In,fx=new Vy(1,1),Yy=new Dy,qy=new $1,jy=new zy,hx=[],dx=[],px=new Float32Array(16),mx=new Float32Array(9),gx=new Float32Array(4);function mo(i,t,n){const r=i[0];if(r<=0||r>0)return i;const o=t*n;let u=hx[o];if(u===void 0&&(u=new Float32Array(o),hx[o]=u),t!==0){r.toArray(u,0);for(let c=1,h=0;c!==t;++c)h+=n,i[c].toArray(u,h)}return u}function mn(i,t){if(i.length!==t.length)return!1;for(let n=0,r=i.length;n<r;n++)if(i[n]!==t[n])return!1;return!0}function gn(i,t){for(let n=0,r=t.length;n<r;n++)i[n]=t[n]}function df(i,t){let n=dx[t];n===void 0&&(n=new Int32Array(t),dx[t]=n);for(let r=0;r!==t;++r)n[r]=i.allocateTextureUnit();return n}function Mw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function Ew(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;i.uniform2fv(this.addr,t),gn(n,t)}}function Tw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;i.uniform3fv(this.addr,t),gn(n,t)}}function bw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;i.uniform4fv(this.addr,t),gn(n,t)}}function Aw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(mn(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,r))return;gx.set(r),i.uniformMatrix2fv(this.addr,!1,gx),gn(n,r)}}function ww(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(mn(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,r))return;mx.set(r),i.uniformMatrix3fv(this.addr,!1,mx),gn(n,r)}}function Rw(i,t){const n=this.cache,r=t.elements;if(r===void 0){if(mn(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,r))return;px.set(r),i.uniformMatrix4fv(this.addr,!1,px),gn(n,r)}}function Cw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function Dw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;i.uniform2iv(this.addr,t),gn(n,t)}}function Uw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;i.uniform3iv(this.addr,t),gn(n,t)}}function Nw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;i.uniform4iv(this.addr,t),gn(n,t)}}function Lw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function Ow(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;i.uniform2uiv(this.addr,t),gn(n,t)}}function Pw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;i.uniform3uiv(this.addr,t),gn(n,t)}}function zw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;i.uniform4uiv(this.addr,t),gn(n,t)}}function Bw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let u;this.type===i.SAMPLER_2D_SHADOW?(fx.compareFunction=Ry,u=fx):u=Wy,n.setTexture2D(t||u,o)}function Fw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(t||qy,o)}function Iw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(t||jy,o)}function Hw(i,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(t||Yy,o)}function Gw(i){switch(i){case 5126:return Mw;case 35664:return Ew;case 35665:return Tw;case 35666:return bw;case 35674:return Aw;case 35675:return ww;case 35676:return Rw;case 5124:case 35670:return Cw;case 35667:case 35671:return Dw;case 35668:case 35672:return Uw;case 35669:case 35673:return Nw;case 5125:return Lw;case 36294:return Ow;case 36295:return Pw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Hw}}function Vw(i,t){i.uniform1fv(this.addr,t)}function kw(i,t){const n=mo(t,this.size,2);i.uniform2fv(this.addr,n)}function Xw(i,t){const n=mo(t,this.size,3);i.uniform3fv(this.addr,n)}function Ww(i,t){const n=mo(t,this.size,4);i.uniform4fv(this.addr,n)}function Yw(i,t){const n=mo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function qw(i,t){const n=mo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function jw(i,t){const n=mo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function Zw(i,t){i.uniform1iv(this.addr,t)}function Kw(i,t){i.uniform2iv(this.addr,t)}function Qw(i,t){i.uniform3iv(this.addr,t)}function $w(i,t){i.uniform4iv(this.addr,t)}function Jw(i,t){i.uniform1uiv(this.addr,t)}function tR(i,t){i.uniform2uiv(this.addr,t)}function eR(i,t){i.uniform3uiv(this.addr,t)}function nR(i,t){i.uniform4uiv(this.addr,t)}function iR(i,t,n){const r=this.cache,o=t.length,u=df(n,o);mn(r,u)||(i.uniform1iv(this.addr,u),gn(r,u));for(let c=0;c!==o;++c)n.setTexture2D(t[c]||Wy,u[c])}function aR(i,t,n){const r=this.cache,o=t.length,u=df(n,o);mn(r,u)||(i.uniform1iv(this.addr,u),gn(r,u));for(let c=0;c!==o;++c)n.setTexture3D(t[c]||qy,u[c])}function rR(i,t,n){const r=this.cache,o=t.length,u=df(n,o);mn(r,u)||(i.uniform1iv(this.addr,u),gn(r,u));for(let c=0;c!==o;++c)n.setTextureCube(t[c]||jy,u[c])}function sR(i,t,n){const r=this.cache,o=t.length,u=df(n,o);mn(r,u)||(i.uniform1iv(this.addr,u),gn(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(t[c]||Yy,u[c])}function oR(i){switch(i){case 5126:return Vw;case 35664:return kw;case 35665:return Xw;case 35666:return Ww;case 35674:return Yw;case 35675:return qw;case 35676:return jw;case 5124:case 35670:return Zw;case 35667:case 35671:return Kw;case 35668:case 35672:return Qw;case 35669:case 35673:return $w;case 5125:return Jw;case 36294:return tR;case 36295:return eR;case 36296:return nR;case 35678:case 36198:case 36298:case 36306:case 35682:return iR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return sR}}class lR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Gw(n.type)}}class uR{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oR(n.type)}}class cR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(t,n[h.id],r)}}}const ip=/(\w+)(\])?(\[|\.)?/g;function _x(i,t){i.seq.push(t),i.map[t.id]=t}function fR(i,t,n){const r=i.name,o=r.length;for(ip.lastIndex=0;;){const u=ip.exec(r),c=ip.lastIndex;let h=u[1];const p=u[2]==="]",d=u[3];if(p&&(h=h|0),d===void 0||d==="["&&c+2===o){_x(n,d===void 0?new lR(h,i,t):new uR(h,i,t));break}else{let v=n.map[h];v===void 0&&(v=new cR(h),_x(n,v)),n=v}}}class zc{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const u=t.getActiveUniform(n,o),c=t.getUniformLocation(n,u.name);fR(u,c,this)}}setValue(t,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(t,r,o)}setOptional(t,n,r){const o=n[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,n,r,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const r=[];for(let o=0,u=t.length;o!==u;++o){const c=t[o];c.id in n&&r.push(c)}return r}}function vx(i,t,n){const r=i.createShader(t);return i.shaderSource(r,n),i.compileShader(r),r}const hR=37297;let dR=0;function pR(i,t){const n=i.split(`
`),r=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=o;c<u;c++){const h=c+1;r.push(`${h===t?">":" "} ${h}: ${n[c]}`)}return r.join(`
`)}const xx=new pe;function mR(i){Ne._getMatrix(xx,Ne.workingColorSpace,i);const t=`mat3( ${xx.elements.map(n=>n.toFixed(4))} )`;switch(Ne.getTransfer(i)){case Vc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yx(i,t,n){const r=i.getShaderParameter(t,i.COMPILE_STATUS),o=i.getShaderInfoLog(t).trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+pR(i.getShaderSource(t),c)}else return o}function gR(i,t){const n=mR(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function _R(i,t){let n;switch(t){case E1:n="Linear";break;case T1:n="Reinhard";break;case b1:n="Cineon";break;case A1:n="ACESFilmic";break;case R1:n="AgX";break;case C1:n="Neutral";break;case w1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ec=new at;function vR(){Ne.getLuminanceCoefficients(Ec);const i=Ec.x.toFixed(4),t=Ec.y.toFixed(4),n=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function yR(i){const t=[];for(const n in i){const r=i[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function SR(i,t){const n={},r=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=i.getActiveAttrib(t,o),c=u.name;let h=1;u.type===i.FLOAT_MAT2&&(h=2),u.type===i.FLOAT_MAT3&&(h=3),u.type===i.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:i.getAttribLocation(t,c),locationSize:h}}return n}function Ml(i){return i!==""}function Sx(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mx(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function rm(i){return i.replace(MR,TR)}const ER=new Map;function TR(i,t){let n=ge[t];if(n===void 0){const r=ER.get(t);if(r!==void 0)n=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return rm(n)}const bR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ex(i){return i.replace(bR,AR)}function AR(i,t,n,r){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Tx(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function wR(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===my?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===n1?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===da&&(t="SHADOWMAP_TYPE_VSM"),t}function RR(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case to:case eo:t="ENVMAP_TYPE_CUBE";break;case cf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function CR(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case eo:t="ENVMAP_MODE_REFRACTION";break}return t}function DR(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gy:t="ENVMAP_BLENDING_MULTIPLY";break;case S1:t="ENVMAP_BLENDING_MIX";break;case M1:t="ENVMAP_BLENDING_ADD";break}return t}function UR(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function NR(i,t,n,r){const o=i.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const p=wR(n),d=RR(n),g=CR(n),v=DR(n),_=UR(n),x=xR(n),E=yR(u),T=o.createProgram();let S,y,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ml).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ml).join(`
`),y.length>0&&(y+=`
`)):(S=[Tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),y=[Tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?ge.tonemapping_pars_fragment:"",n.toneMapping!==rr?_R("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,gR("linearToOutputTexel",n.outputColorSpace),vR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ml).join(`
`)),c=rm(c),c=Sx(c,n),c=Mx(c,n),h=rm(h),h=Sx(h,n),h=Mx(h,n),c=Ex(c),h=Ex(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=L+S+c,w=L+y+h,I=vx(o,o.VERTEX_SHADER,N),P=vx(o,o.FRAGMENT_SHADER,w);o.attachShader(T,I),o.attachShader(T,P),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(H){if(i.debug.checkShaderErrors){const j=o.getProgramInfoLog(T).trim(),tt=o.getShaderInfoLog(I).trim(),mt=o.getShaderInfoLog(P).trim();let pt=!0,B=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,T,I,P);else{const Y=yx(o,I,"vertex"),W=yx(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+Y+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(tt===""||mt==="")&&(B=!1);B&&(H.diagnostics={runnable:pt,programLog:j,vertexShader:{log:tt,prefix:S},fragmentShader:{log:mt,prefix:y}})}o.deleteShader(I),o.deleteShader(P),k=new zc(o,T),U=SR(o,T)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,hR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dR++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=P,this}let LR=0;class OR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new PR(t),n.set(t,r)),r}}class PR{constructor(t){this.id=LR++,this.code=t,this.usedTimes=0}}function zR(i,t,n,r,o,u,c){const h=new Rm,p=new OR,d=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return d.add(U),U===0?"uv":`uv${U}`}function S(U,C,H,j,tt){const mt=j.fog,pt=tt.geometry,B=U.isMeshStandardMaterial?j.environment:null,Y=(U.isMeshStandardMaterial?n:t).get(U.envMap||B),W=Y&&Y.mapping===cf?Y.image.height:null,dt=E[U.type];U.precision!==null&&(x=o.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const D=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,nt=D!==void 0?D.length:0;let At=0;pt.morphAttributes.position!==void 0&&(At=1),pt.morphAttributes.normal!==void 0&&(At=2),pt.morphAttributes.color!==void 0&&(At=3);let _t,$,xt,it;if(dt){const we=Bi[dt];_t=we.vertexShader,$=we.fragmentShader}else _t=U.vertexShader,$=U.fragmentShader,p.update(U),xt=p.getVertexShaderID(U),it=p.getFragmentShaderID(U);const Tt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),St=tt.isInstancedMesh===!0,et=tt.isBatchedMesh===!0,Rt=!!U.map,Q=!!U.matcap,Bt=!!Y,z=!!U.aoMap,te=!!U.lightMap,Ht=!!U.bumpMap,qt=!!U.normalMap,jt=!!U.displacementMap,he=!!U.emissiveMap,Kt=!!U.metalnessMap,O=!!U.roughnessMap,b=U.anisotropy>0,st=U.clearcoat>0,Mt=U.dispersion>0,wt=U.iridescence>0,ot=U.sheen>0,Pt=U.transmission>0,Nt=b&&!!U.anisotropyMap,Lt=st&&!!U.clearcoatMap,ce=st&&!!U.clearcoatNormalMap,Dt=st&&!!U.clearcoatRoughnessMap,Gt=wt&&!!U.iridescenceMap,$t=wt&&!!U.iridescenceThicknessMap,zt=ot&&!!U.sheenColorMap,Ot=ot&&!!U.sheenRoughnessMap,ie=!!U.specularMap,Jt=!!U.specularColorMap,me=!!U.specularIntensityMap,X=Pt&&!!U.transmissionMap,Ft=Pt&&!!U.thicknessMap,ht=!!U.gradientMap,yt=!!U.alphaMap,Vt=U.alphaTest>0,kt=!!U.alphaHash,fe=!!U.extensions;let Be=rr;U.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Be=i.toneMapping);const je={shaderID:dt,shaderType:U.type,shaderName:U.name,vertexShader:_t,fragmentShader:$,defines:U.defines,customVertexShaderID:xt,customFragmentShaderID:it,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:et,batchingColor:et&&tt._colorsTexture!==null,instancing:St,instancingColor:St&&tt.instanceColor!==null,instancingMorph:St&&tt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:no,alphaToCoverage:!!U.alphaToCoverage,map:Rt,matcap:Q,envMap:Bt,envMapMode:Bt&&Y.mapping,envMapCubeUVHeight:W,aoMap:z,lightMap:te,bumpMap:Ht,normalMap:qt,displacementMap:_&&jt,emissiveMap:he,normalMapObjectSpace:qt&&U.normalMapType===O1,normalMapTangentSpace:qt&&U.normalMapType===L1,metalnessMap:Kt,roughnessMap:O,anisotropy:b,anisotropyMap:Nt,clearcoat:st,clearcoatMap:Lt,clearcoatNormalMap:ce,clearcoatRoughnessMap:Dt,dispersion:Mt,iridescence:wt,iridescenceMap:Gt,iridescenceThicknessMap:$t,sheen:ot,sheenColorMap:zt,sheenRoughnessMap:Ot,specularMap:ie,specularColorMap:Jt,specularIntensityMap:me,transmission:Pt,transmissionMap:X,thicknessMap:Ft,gradientMap:ht,opaque:U.transparent===!1&&U.blending===Ks&&U.alphaToCoverage===!1,alphaMap:yt,alphaTest:Vt,alphaHash:kt,combine:U.combine,mapUv:Rt&&T(U.map.channel),aoMapUv:z&&T(U.aoMap.channel),lightMapUv:te&&T(U.lightMap.channel),bumpMapUv:Ht&&T(U.bumpMap.channel),normalMapUv:qt&&T(U.normalMap.channel),displacementMapUv:jt&&T(U.displacementMap.channel),emissiveMapUv:he&&T(U.emissiveMap.channel),metalnessMapUv:Kt&&T(U.metalnessMap.channel),roughnessMapUv:O&&T(U.roughnessMap.channel),anisotropyMapUv:Nt&&T(U.anisotropyMap.channel),clearcoatMapUv:Lt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:ce&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(U.sheenRoughnessMap.channel),specularMapUv:ie&&T(U.specularMap.channel),specularColorMapUv:Jt&&T(U.specularColorMap.channel),specularIntensityMapUv:me&&T(U.specularIntensityMap.channel),transmissionMapUv:X&&T(U.transmissionMap.channel),thicknessMapUv:Ft&&T(U.thicknessMap.channel),alphaMapUv:yt&&T(U.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(qt||b),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!pt.attributes.uv&&(Rt||yt),fog:!!mt,useFog:U.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:tt.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:At,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:U.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Rt&&U.map.isVideoTexture===!0&&Ne.getTransfer(U.map.colorSpace)===Ge,decodeVideoTextureEmissive:he&&U.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(U.emissiveMap.colorSpace)===Ge,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===pa,flipSided:U.side===Yn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:fe&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&U.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return je.vertexUv1s=d.has(1),je.vertexUv2s=d.has(2),je.vertexUv3s=d.has(3),d.clear(),je}function y(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)C.push(H),C.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(L(C,U),N(C,U),C.push(i.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function L(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function N(U,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),U.push(h.mask)}function w(U){const C=E[U.type];let H;if(C){const j=Bi[C];H=fT.clone(j.uniforms)}else H=U.uniforms;return H}function I(U,C){let H;for(let j=0,tt=g.length;j<tt;j++){const mt=g[j];if(mt.cacheKey===C){H=mt,++H.usedTimes;break}}return H===void 0&&(H=new NR(i,C,U,u),g.push(H)),H}function P(U){if(--U.usedTimes===0){const C=g.indexOf(U);g[C]=g[g.length-1],g.pop(),U.destroy()}}function F(U){p.remove(U)}function k(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:I,releaseProgram:P,releaseShaderCache:F,programs:g,dispose:k}}function BR(){let i=new WeakMap;function t(c){return i.has(c)}function n(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function r(c){i.delete(c)}function o(c,h,p){i.get(c)[h]=p}function u(){i=new WeakMap}return{has:t,get:n,remove:r,update:o,dispose:u}}function FR(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ax(){const i=[];let t=0;const n=[],r=[],o=[];function u(){t=0,n.length=0,r.length=0,o.length=0}function c(v,_,x,E,T,S){let y=i[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:E,renderOrder:v.renderOrder,z:T,group:S},i[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=T,y.group=S),t++,y}function h(v,_,x,E,T,S){const y=c(v,_,x,E,T,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):n.push(y)}function p(v,_,x,E,T,S){const y=c(v,_,x,E,T,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):n.unshift(y)}function d(v,_){n.length>1&&n.sort(v||FR),r.length>1&&r.sort(_||bx),o.length>1&&o.sort(_||bx)}function g(){for(let v=t,_=i.length;v<_;v++){const x=i[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:h,unshift:p,finish:g,sort:d}}function IR(){let i=new WeakMap;function t(r,o){const u=i.get(r);let c;return u===void 0?(c=new Ax,i.set(r,[c])):o>=u.length?(c=new Ax,u.push(c)):c=u[o],c}function n(){i=new WeakMap}return{get:t,dispose:n}}function HR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new at,color:new Me};break;case"SpotLight":n={position:new at,direction:new at,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new at,color:new Me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new at,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":n={color:new Me,position:new at,halfWidth:new at,halfHeight:new at};break}return i[t.id]=n,n}}}function GR(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let VR=0;function kR(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function XR(i){const t=new HR,n=GR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new at);const o=new at,u=new Qe,c=new Qe;function h(d){let g=0,v=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,E=0,T=0,S=0,y=0,L=0,N=0,w=0,I=0,P=0,F=0;d.sort(kR);for(let U=0,C=d.length;U<C;U++){const H=d[U],j=H.color,tt=H.intensity,mt=H.distance,pt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=j.r*tt,v+=j.g*tt,_+=j.b*tt;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],tt);F++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[x]=W,r.directionalShadowMap[x]=pt,r.directionalShadowMatrix[x]=H.shadow.matrix,L++}r.directional[x]=B,x++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(j).multiplyScalar(tt),B.distance=mt,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[T]=B;const Y=H.shadow;if(H.map&&(r.spotLightMap[I]=H.map,I++,Y.updateMatrices(H),H.castShadow&&P++),r.spotLightMatrix[T]=Y.matrix,H.castShadow){const W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=pt,w++}T++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(j).multiplyScalar(tt),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=B,S++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=pt,r.pointShadowMatrix[E]=H.shadow.matrix,N++}r.point[E]=B,E++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(tt),B.groundColor.copy(H.groundColor).multiplyScalar(tt),r.hemi[y]=B,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Wt.LTC_FLOAT_1,r.rectAreaLTC2=Wt.LTC_FLOAT_2):(r.rectAreaLTC1=Wt.LTC_HALF_1,r.rectAreaLTC2=Wt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==x||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==S||k.hemiLength!==y||k.numDirectionalShadows!==L||k.numPointShadows!==N||k.numSpotShadows!==w||k.numSpotMaps!==I||k.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=w+I-P,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,k.directionalLength=x,k.pointLength=E,k.spotLength=T,k.rectAreaLength=S,k.hemiLength=y,k.numDirectionalShadows=L,k.numPointShadows=N,k.numSpotShadows=w,k.numSpotMaps=I,k.numLightProbes=F,r.version=VR++)}function p(d,g){let v=0,_=0,x=0,E=0,T=0;const S=g.matrixWorldInverse;for(let y=0,L=d.length;y<L;y++){const N=d[y];if(N.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),v++}else if(N.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),x++}else if(N.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(S),c.identity(),u.copy(N.matrixWorld),u.premultiply(S),c.extractRotation(u),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),E++}else if(N.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(S),_++}else if(N.isHemisphereLight){const w=r.hemi[T];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(S),T++}}}return{setup:h,setupView:p,state:r}}function wx(i){const t=new XR(i),n=[],r=[];function o(g){d.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function c(g){r.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c}}function WR(i){let t=new WeakMap;function n(o,u=0){const c=t.get(o);let h;return c===void 0?(h=new wx(i),t.set(o,[h])):u>=c.length?(h=new wx(i),c.push(h)):h=c[u],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const YR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qR=`uniform sampler2D shadow_pass;
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
}`;function jR(i,t,n){let r=new Hy;const o=new Ee,u=new Ee,c=new sn,h=new yT({depthPacking:N1}),p=new ST,d={},g=n.maxTextureSize,v={[or]:Yn,[Yn]:or,[pa]:pa},_=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:YR,fragmentShader:qR}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new gi;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ii(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=my;let y=this.type;this.render=function(P,F,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const U=i.getRenderTarget(),C=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),j=i.state;j.setBlending(ar),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const tt=y!==da&&this.type===da,mt=y===da&&this.type!==da;for(let pt=0,B=P.length;pt<B;pt++){const Y=P[pt],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const dt=W.getFrameExtents();if(o.multiply(dt),u.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/dt.x),o.x=u.x*dt.x,W.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/dt.y),o.y=u.y*dt.y,W.mapSize.y=u.y)),W.map===null||tt===!0||mt===!0){const nt=this.type!==da?{minFilter:Ai,magFilter:Ai}:{};W.map!==null&&W.map.dispose(),W.map=new kr(o.x,o.y,nt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const D=W.getViewportCount();for(let nt=0;nt<D;nt++){const At=W.getViewport(nt);c.set(u.x*At.x,u.y*At.y,u.x*At.z,u.y*At.w),j.viewport(c),W.updateMatrices(Y,nt),r=W.getFrustum(),w(F,k,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===da&&L(W,k),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,i.setRenderTarget(U,C,H)};function L(P,F){const k=t.update(T);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new kr(o.x,o.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(F,null,k,_,T,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(F,null,k,x,T,null)}function N(P,F,k,U){let C=null;const H=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)C=H;else if(C=k.isPointLight===!0?p:h,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const j=C.uuid,tt=F.uuid;let mt=d[j];mt===void 0&&(mt={},d[j]=mt);let pt=mt[tt];pt===void 0&&(pt=C.clone(),mt[tt]=pt,F.addEventListener("dispose",I)),C=pt}if(C.visible=F.visible,C.wireframe=F.wireframe,U===da?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const j=i.properties.get(C);j.light=k}return C}function w(P,F,k,U,C){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===da)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const tt=t.update(P),mt=P.material;if(Array.isArray(mt)){const pt=tt.groups;for(let B=0,Y=pt.length;B<Y;B++){const W=pt[B],dt=mt[W.materialIndex];if(dt&&dt.visible){const D=N(P,dt,U,C);P.onBeforeShadow(i,P,F,k,tt,D,W),i.renderBufferDirect(k,null,tt,D,P,W),P.onAfterShadow(i,P,F,k,tt,D,W)}}}else if(mt.visible){const pt=N(P,mt,U,C);P.onBeforeShadow(i,P,F,k,tt,pt,null),i.renderBufferDirect(k,null,tt,pt,P,null),P.onAfterShadow(i,P,F,k,tt,pt,null)}}const j=P.children;for(let tt=0,mt=j.length;tt<mt;tt++)w(j[tt],F,k,U,C)}function I(P){P.target.removeEventListener("dispose",I);for(const k in d){const U=d[k],C=P.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const ZR={[xp]:yp,[Sp]:Tp,[Mp]:bp,[Js]:Ep,[yp]:xp,[Tp]:Sp,[bp]:Mp,[Ep]:Js};function KR(i,t){function n(){let X=!1;const Ft=new sn;let ht=null;const yt=new sn(0,0,0,0);return{setMask:function(Vt){ht!==Vt&&!X&&(i.colorMask(Vt,Vt,Vt,Vt),ht=Vt)},setLocked:function(Vt){X=Vt},setClear:function(Vt,kt,fe,Be,je){je===!0&&(Vt*=Be,kt*=Be,fe*=Be),Ft.set(Vt,kt,fe,Be),yt.equals(Ft)===!1&&(i.clearColor(Vt,kt,fe,Be),yt.copy(Ft))},reset:function(){X=!1,ht=null,yt.set(-1,0,0,0)}}}function r(){let X=!1,Ft=!1,ht=null,yt=null,Vt=null;return{setReversed:function(kt){if(Ft!==kt){const fe=t.get("EXT_clip_control");kt?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),Ft=kt;const Be=Vt;Vt=null,this.setClear(Be)}},getReversed:function(){return Ft},setTest:function(kt){kt?Tt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(kt){ht!==kt&&!X&&(i.depthMask(kt),ht=kt)},setFunc:function(kt){if(Ft&&(kt=ZR[kt]),yt!==kt){switch(kt){case xp:i.depthFunc(i.NEVER);break;case yp:i.depthFunc(i.ALWAYS);break;case Sp:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case Mp:i.depthFunc(i.EQUAL);break;case Ep:i.depthFunc(i.GEQUAL);break;case Tp:i.depthFunc(i.GREATER);break;case bp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=kt}},setLocked:function(kt){X=kt},setClear:function(kt){Vt!==kt&&(Ft&&(kt=1-kt),i.clearDepth(kt),Vt=kt)},reset:function(){X=!1,ht=null,yt=null,Vt=null,Ft=!1}}}function o(){let X=!1,Ft=null,ht=null,yt=null,Vt=null,kt=null,fe=null,Be=null,je=null;return{setTest:function(we){X||(we?Tt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(we){Ft!==we&&!X&&(i.stencilMask(we),Ft=we)},setFunc:function(we,vn,$e){(ht!==we||yt!==vn||Vt!==$e)&&(i.stencilFunc(we,vn,$e),ht=we,yt=vn,Vt=$e)},setOp:function(we,vn,$e){(kt!==we||fe!==vn||Be!==$e)&&(i.stencilOp(we,vn,$e),kt=we,fe=vn,Be=$e)},setLocked:function(we){X=we},setClear:function(we){je!==we&&(i.clearStencil(we),je=we)},reset:function(){X=!1,Ft=null,ht=null,yt=null,Vt=null,kt=null,fe=null,Be=null,je=null}}}const u=new n,c=new r,h=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],E=null,T=!1,S=null,y=null,L=null,N=null,w=null,I=null,P=null,F=new Me(0,0,0),k=0,U=!1,C=null,H=null,j=null,tt=null,mt=null;const pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let dt=null,D={};const nt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),_t=new sn().fromArray(nt),$=new sn().fromArray(At);function xt(X,Ft,ht,yt){const Vt=new Uint8Array(4),kt=i.createTexture();i.bindTexture(X,kt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<ht;fe++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Ft,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Ft+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return kt}const it={};it[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Tt(i.DEPTH_TEST),c.setFunc(Js),Ht(!1),qt(Rv),Tt(i.CULL_FACE),z(ar);function Tt(X){g[X]!==!0&&(i.enable(X),g[X]=!0)}function Ct(X){g[X]!==!1&&(i.disable(X),g[X]=!1)}function St(X,Ft){return v[X]!==Ft?(i.bindFramebuffer(X,Ft),v[X]=Ft,X===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Ft),X===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Ft),!0):!1}function et(X,Ft){let ht=x,yt=!1;if(X){ht=_.get(Ft),ht===void 0&&(ht=[],_.set(Ft,ht));const Vt=X.textures;if(ht.length!==Vt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let kt=0,fe=Vt.length;kt<fe;kt++)ht[kt]=i.COLOR_ATTACHMENT0+kt;ht.length=Vt.length,yt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ht)}function Rt(X){return E!==X?(i.useProgram(X),E=X,!0):!1}const Q={[zr]:i.FUNC_ADD,[a1]:i.FUNC_SUBTRACT,[r1]:i.FUNC_REVERSE_SUBTRACT};Q[s1]=i.MIN,Q[o1]=i.MAX;const Bt={[l1]:i.ZERO,[u1]:i.ONE,[c1]:i.SRC_COLOR,[_p]:i.SRC_ALPHA,[g1]:i.SRC_ALPHA_SATURATE,[p1]:i.DST_COLOR,[h1]:i.DST_ALPHA,[f1]:i.ONE_MINUS_SRC_COLOR,[vp]:i.ONE_MINUS_SRC_ALPHA,[m1]:i.ONE_MINUS_DST_COLOR,[d1]:i.ONE_MINUS_DST_ALPHA,[_1]:i.CONSTANT_COLOR,[v1]:i.ONE_MINUS_CONSTANT_COLOR,[x1]:i.CONSTANT_ALPHA,[y1]:i.ONE_MINUS_CONSTANT_ALPHA};function z(X,Ft,ht,yt,Vt,kt,fe,Be,je,we){if(X===ar){T===!0&&(Ct(i.BLEND),T=!1);return}if(T===!1&&(Tt(i.BLEND),T=!0),X!==i1){if(X!==S||we!==U){if((y!==zr||w!==zr)&&(i.blendEquation(i.FUNC_ADD),y=zr,w=zr),we)switch(X){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cv:i.blendFunc(i.ONE,i.ONE);break;case Dv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uv:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cv:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uv:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,N=null,I=null,P=null,F.set(0,0,0),k=0,S=X,U=we}return}Vt=Vt||Ft,kt=kt||ht,fe=fe||yt,(Ft!==y||Vt!==w)&&(i.blendEquationSeparate(Q[Ft],Q[Vt]),y=Ft,w=Vt),(ht!==L||yt!==N||kt!==I||fe!==P)&&(i.blendFuncSeparate(Bt[ht],Bt[yt],Bt[kt],Bt[fe]),L=ht,N=yt,I=kt,P=fe),(Be.equals(F)===!1||je!==k)&&(i.blendColor(Be.r,Be.g,Be.b,je),F.copy(Be),k=je),S=X,U=!1}function te(X,Ft){X.side===pa?Ct(i.CULL_FACE):Tt(i.CULL_FACE);let ht=X.side===Yn;Ft&&(ht=!ht),Ht(ht),X.blending===Ks&&X.transparent===!1?z(ar):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),u.setMask(X.colorWrite);const yt=X.stencilWrite;h.setTest(yt),yt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),he(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(X){C!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),C=X)}function qt(X){X!==t1?(Tt(i.CULL_FACE),X!==H&&(X===Rv?i.cullFace(i.BACK):X===e1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),H=X}function jt(X){X!==j&&(B&&i.lineWidth(X),j=X)}function he(X,Ft,ht){X?(Tt(i.POLYGON_OFFSET_FILL),(tt!==Ft||mt!==ht)&&(i.polygonOffset(Ft,ht),tt=Ft,mt=ht)):Ct(i.POLYGON_OFFSET_FILL)}function Kt(X){X?Tt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function O(X){X===void 0&&(X=i.TEXTURE0+pt-1),dt!==X&&(i.activeTexture(X),dt=X)}function b(X,Ft,ht){ht===void 0&&(dt===null?ht=i.TEXTURE0+pt-1:ht=dt);let yt=D[ht];yt===void 0&&(yt={type:void 0,texture:void 0},D[ht]=yt),(yt.type!==X||yt.texture!==Ft)&&(dt!==ht&&(i.activeTexture(ht),dt=ht),i.bindTexture(X,Ft||it[X]),yt.type=X,yt.texture=Ft)}function st(){const X=D[dt];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{i.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{i.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{i.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{i.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{i.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{i.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $t(){try{i.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(X){_t.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),_t.copy(X))}function Ot(X){$.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),$.copy(X))}function ie(X,Ft){let ht=d.get(Ft);ht===void 0&&(ht=new WeakMap,d.set(Ft,ht));let yt=ht.get(X);yt===void 0&&(yt=i.getUniformBlockIndex(Ft,X.name),ht.set(X,yt))}function Jt(X,Ft){const yt=d.get(Ft).get(X);p.get(Ft)!==yt&&(i.uniformBlockBinding(Ft,yt,X.__bindingPointIndex),p.set(Ft,yt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},dt=null,D={},v={},_=new WeakMap,x=[],E=null,T=!1,S=null,y=null,L=null,N=null,w=null,I=null,P=null,F=new Me(0,0,0),k=0,U=!1,C=null,H=null,j=null,tt=null,mt=null,_t.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:Tt,disable:Ct,bindFramebuffer:St,drawBuffers:et,useProgram:Rt,setBlending:z,setMaterial:te,setFlipSided:Ht,setCullFace:qt,setLineWidth:jt,setPolygonOffset:he,setScissorTest:Kt,activeTexture:O,bindTexture:b,unbindTexture:st,compressedTexImage2D:Mt,compressedTexImage3D:wt,texImage2D:Gt,texImage3D:$t,updateUBOMapping:ie,uniformBlockBinding:Jt,texStorage2D:ce,texStorage3D:Dt,texSubImage2D:ot,texSubImage3D:Pt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Lt,scissor:zt,viewport:Ot,reset:me}}function QR(i,t,n,r,o,u,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ee,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return x?new OffscreenCanvas(O,b):Xc("canvas")}function T(O,b,st){let Mt=1;const wt=Kt(O);if((wt.width>st||wt.height>st)&&(Mt=st/Math.max(wt.width,wt.height)),Mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ot=Math.floor(Mt*wt.width),Pt=Math.floor(Mt*wt.height);v===void 0&&(v=E(ot,Pt));const Nt=b?E(ot,Pt):v;return Nt.width=ot,Nt.height=Pt,Nt.getContext("2d").drawImage(O,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+ot+"x"+Pt+")."),Nt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),O;return O}function S(O){return O.generateMipmaps}function y(O){i.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(O,b,st,Mt,wt=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ot=b;if(b===i.RED&&(st===i.FLOAT&&(ot=i.R32F),st===i.HALF_FLOAT&&(ot=i.R16F),st===i.UNSIGNED_BYTE&&(ot=i.R8)),b===i.RED_INTEGER&&(st===i.UNSIGNED_BYTE&&(ot=i.R8UI),st===i.UNSIGNED_SHORT&&(ot=i.R16UI),st===i.UNSIGNED_INT&&(ot=i.R32UI),st===i.BYTE&&(ot=i.R8I),st===i.SHORT&&(ot=i.R16I),st===i.INT&&(ot=i.R32I)),b===i.RG&&(st===i.FLOAT&&(ot=i.RG32F),st===i.HALF_FLOAT&&(ot=i.RG16F),st===i.UNSIGNED_BYTE&&(ot=i.RG8)),b===i.RG_INTEGER&&(st===i.UNSIGNED_BYTE&&(ot=i.RG8UI),st===i.UNSIGNED_SHORT&&(ot=i.RG16UI),st===i.UNSIGNED_INT&&(ot=i.RG32UI),st===i.BYTE&&(ot=i.RG8I),st===i.SHORT&&(ot=i.RG16I),st===i.INT&&(ot=i.RG32I)),b===i.RGB_INTEGER&&(st===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),st===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),st===i.UNSIGNED_INT&&(ot=i.RGB32UI),st===i.BYTE&&(ot=i.RGB8I),st===i.SHORT&&(ot=i.RGB16I),st===i.INT&&(ot=i.RGB32I)),b===i.RGBA_INTEGER&&(st===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),st===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),st===i.UNSIGNED_INT&&(ot=i.RGBA32UI),st===i.BYTE&&(ot=i.RGBA8I),st===i.SHORT&&(ot=i.RGBA16I),st===i.INT&&(ot=i.RGBA32I)),b===i.RGB&&st===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),b===i.RGBA){const Pt=wt?Vc:Ne.getTransfer(Mt);st===i.FLOAT&&(ot=i.RGBA32F),st===i.HALF_FLOAT&&(ot=i.RGBA16F),st===i.UNSIGNED_BYTE&&(ot=Pt===Ge?i.SRGB8_ALPHA8:i.RGBA8),st===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),st===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function w(O,b){let st;return O?b===null||b===Vr||b===Rl?st=i.DEPTH24_STENCIL8:b===ma?st=i.DEPTH32F_STENCIL8:b===wl&&(st=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vr||b===Rl?st=i.DEPTH_COMPONENT24:b===ma?st=i.DEPTH_COMPONENT32F:b===wl&&(st=i.DEPTH_COMPONENT16),st}function I(O,b){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ai&&O.minFilter!==Ii?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function P(O){const b=O.target;b.removeEventListener("dispose",P),k(b),b.isVideoTexture&&g.delete(b)}function F(O){const b=O.target;b.removeEventListener("dispose",F),C(b)}function k(O){const b=r.get(O);if(b.__webglInit===void 0)return;const st=O.source,Mt=_.get(st);if(Mt){const wt=Mt[b.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&U(O),Object.keys(Mt).length===0&&_.delete(st)}r.remove(O)}function U(O){const b=r.get(O);i.deleteTexture(b.__webglTexture);const st=O.source,Mt=_.get(st);delete Mt[b.__cacheKey],c.memory.textures--}function C(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Mt=0;Mt<6;Mt++){if(Array.isArray(b.__webglFramebuffer[Mt]))for(let wt=0;wt<b.__webglFramebuffer[Mt].length;wt++)i.deleteFramebuffer(b.__webglFramebuffer[Mt][wt]);else i.deleteFramebuffer(b.__webglFramebuffer[Mt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let Mt=0;Mt<b.__webglFramebuffer.length;Mt++)i.deleteFramebuffer(b.__webglFramebuffer[Mt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Mt=0;Mt<b.__webglColorRenderbuffer.length;Mt++)b.__webglColorRenderbuffer[Mt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Mt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const st=O.textures;for(let Mt=0,wt=st.length;Mt<wt;Mt++){const ot=r.get(st[Mt]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),c.memory.textures--),r.remove(st[Mt])}r.remove(O)}let H=0;function j(){H=0}function tt(){const O=H;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),H+=1,O}function mt(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function pt(O,b){const st=r.get(O);if(O.isVideoTexture&&jt(O),O.isRenderTargetTexture===!1&&O.version>0&&st.__version!==O.version){const Mt=O.image;if(Mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(st,O,b);return}}n.bindTexture(i.TEXTURE_2D,st.__webglTexture,i.TEXTURE0+b)}function B(O,b){const st=r.get(O);if(O.version>0&&st.__version!==O.version){$(st,O,b);return}n.bindTexture(i.TEXTURE_2D_ARRAY,st.__webglTexture,i.TEXTURE0+b)}function Y(O,b){const st=r.get(O);if(O.version>0&&st.__version!==O.version){$(st,O,b);return}n.bindTexture(i.TEXTURE_3D,st.__webglTexture,i.TEXTURE0+b)}function W(O,b){const st=r.get(O);if(O.version>0&&st.__version!==O.version){xt(st,O,b);return}n.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture,i.TEXTURE0+b)}const dt={[Rp]:i.REPEAT,[Fr]:i.CLAMP_TO_EDGE,[Cp]:i.MIRRORED_REPEAT},D={[Ai]:i.NEAREST,[D1]:i.NEAREST_MIPMAP_NEAREST,[$u]:i.NEAREST_MIPMAP_LINEAR,[Ii]:i.LINEAR,[Ad]:i.LINEAR_MIPMAP_NEAREST,[Ir]:i.LINEAR_MIPMAP_LINEAR},nt={[P1]:i.NEVER,[G1]:i.ALWAYS,[z1]:i.LESS,[Ry]:i.LEQUAL,[B1]:i.EQUAL,[H1]:i.GEQUAL,[F1]:i.GREATER,[I1]:i.NOTEQUAL};function At(O,b){if(b.type===ma&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ii||b.magFilter===Ad||b.magFilter===$u||b.magFilter===Ir||b.minFilter===Ii||b.minFilter===Ad||b.minFilter===$u||b.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,dt[b.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,dt[b.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,dt[b.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,D[b.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ai||b.minFilter!==$u&&b.minFilter!==Ir||b.type===ma&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const st=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function _t(O,b){let st=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",P));const Mt=b.source;let wt=_.get(Mt);wt===void 0&&(wt={},_.set(Mt,wt));const ot=mt(b);if(ot!==O.__cacheKey){wt[ot]===void 0&&(wt[ot]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,st=!0),wt[ot].usedTimes++;const Pt=wt[O.__cacheKey];Pt!==void 0&&(wt[O.__cacheKey].usedTimes--,Pt.usedTimes===0&&U(b)),O.__cacheKey=ot,O.__webglTexture=wt[ot].texture}return st}function $(O,b,st){let Mt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Mt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Mt=i.TEXTURE_3D);const wt=_t(O,b),ot=b.source;n.bindTexture(Mt,O.__webglTexture,i.TEXTURE0+st);const Pt=r.get(ot);if(ot.version!==Pt.__version||wt===!0){n.activeTexture(i.TEXTURE0+st);const Nt=Ne.getPrimaries(Ne.workingColorSpace),Lt=b.colorSpace===ir?null:Ne.getPrimaries(b.colorSpace),ce=b.colorSpace===ir||Nt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Dt=T(b.image,!1,o.maxTextureSize);Dt=he(b,Dt);const Gt=u.convert(b.format,b.colorSpace),$t=u.convert(b.type);let zt=N(b.internalFormat,Gt,$t,b.colorSpace,b.isVideoTexture);At(Mt,b);let Ot;const ie=b.mipmaps,Jt=b.isVideoTexture!==!0,me=Pt.__version===void 0||wt===!0,X=ot.dataReady,Ft=I(b,Dt);if(b.isDepthTexture)zt=w(b.format===Dl,b.type),me&&(Jt?n.texStorage2D(i.TEXTURE_2D,1,zt,Dt.width,Dt.height):n.texImage2D(i.TEXTURE_2D,0,zt,Dt.width,Dt.height,0,Gt,$t,null));else if(b.isDataTexture)if(ie.length>0){Jt&&me&&n.texStorage2D(i.TEXTURE_2D,Ft,zt,ie[0].width,ie[0].height);for(let ht=0,yt=ie.length;ht<yt;ht++)Ot=ie[ht],Jt?X&&n.texSubImage2D(i.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Gt,$t,Ot.data):n.texImage2D(i.TEXTURE_2D,ht,zt,Ot.width,Ot.height,0,Gt,$t,Ot.data);b.generateMipmaps=!1}else Jt?(me&&n.texStorage2D(i.TEXTURE_2D,Ft,zt,Dt.width,Dt.height),X&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt.width,Dt.height,Gt,$t,Dt.data)):n.texImage2D(i.TEXTURE_2D,0,zt,Dt.width,Dt.height,0,Gt,$t,Dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&me&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,zt,ie[0].width,ie[0].height,Dt.depth);for(let ht=0,yt=ie.length;ht<yt;ht++)if(Ot=ie[ht],b.format!==bi)if(Gt!==null)if(Jt){if(X)if(b.layerUpdates.size>0){const Vt=ix(Ot.width,Ot.height,b.format,b.type);for(const kt of b.layerUpdates){const fe=Ot.data.subarray(kt*Vt/Ot.data.BYTES_PER_ELEMENT,(kt+1)*Vt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,kt,Ot.width,Ot.height,1,Gt,fe)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,Dt.depth,Gt,Ot.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,zt,Ot.width,Ot.height,Dt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?X&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,Dt.depth,Gt,$t,Ot.data):n.texImage3D(i.TEXTURE_2D_ARRAY,ht,zt,Ot.width,Ot.height,Dt.depth,0,Gt,$t,Ot.data)}else{Jt&&me&&n.texStorage2D(i.TEXTURE_2D,Ft,zt,ie[0].width,ie[0].height);for(let ht=0,yt=ie.length;ht<yt;ht++)Ot=ie[ht],b.format!==bi?Gt!==null?Jt?X&&n.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Gt,Ot.data):n.compressedTexImage2D(i.TEXTURE_2D,ht,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?X&&n.texSubImage2D(i.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Gt,$t,Ot.data):n.texImage2D(i.TEXTURE_2D,ht,zt,Ot.width,Ot.height,0,Gt,$t,Ot.data)}else if(b.isDataArrayTexture)if(Jt){if(me&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,zt,Dt.width,Dt.height,Dt.depth),X)if(b.layerUpdates.size>0){const ht=ix(Dt.width,Dt.height,b.format,b.type);for(const yt of b.layerUpdates){const Vt=Dt.data.subarray(yt*ht/Dt.data.BYTES_PER_ELEMENT,(yt+1)*ht/Dt.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,Dt.width,Dt.height,1,Gt,$t,Vt)}b.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Gt,$t,Dt.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,Dt.width,Dt.height,Dt.depth,0,Gt,$t,Dt.data);else if(b.isData3DTexture)Jt?(me&&n.texStorage3D(i.TEXTURE_3D,Ft,zt,Dt.width,Dt.height,Dt.depth),X&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Gt,$t,Dt.data)):n.texImage3D(i.TEXTURE_3D,0,zt,Dt.width,Dt.height,Dt.depth,0,Gt,$t,Dt.data);else if(b.isFramebufferTexture){if(me)if(Jt)n.texStorage2D(i.TEXTURE_2D,Ft,zt,Dt.width,Dt.height);else{let ht=Dt.width,yt=Dt.height;for(let Vt=0;Vt<Ft;Vt++)n.texImage2D(i.TEXTURE_2D,Vt,zt,ht,yt,0,Gt,$t,null),ht>>=1,yt>>=1}}else if(ie.length>0){if(Jt&&me){const ht=Kt(ie[0]);n.texStorage2D(i.TEXTURE_2D,Ft,zt,ht.width,ht.height)}for(let ht=0,yt=ie.length;ht<yt;ht++)Ot=ie[ht],Jt?X&&n.texSubImage2D(i.TEXTURE_2D,ht,0,0,Gt,$t,Ot):n.texImage2D(i.TEXTURE_2D,ht,zt,Gt,$t,Ot);b.generateMipmaps=!1}else if(Jt){if(me){const ht=Kt(Dt);n.texStorage2D(i.TEXTURE_2D,Ft,zt,ht.width,ht.height)}X&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,$t,Dt)}else n.texImage2D(i.TEXTURE_2D,0,zt,Gt,$t,Dt);S(b)&&y(Mt),Pt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function xt(O,b,st){if(b.image.length!==6)return;const Mt=_t(O,b),wt=b.source;n.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+st);const ot=r.get(wt);if(wt.version!==ot.__version||Mt===!0){n.activeTexture(i.TEXTURE0+st);const Pt=Ne.getPrimaries(Ne.workingColorSpace),Nt=b.colorSpace===ir?null:Ne.getPrimaries(b.colorSpace),Lt=b.colorSpace===ir||Pt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Dt=b.image[0]&&b.image[0].isDataTexture,Gt=[];for(let yt=0;yt<6;yt++)!ce&&!Dt?Gt[yt]=T(b.image[yt],!0,o.maxCubemapSize):Gt[yt]=Dt?b.image[yt].image:b.image[yt],Gt[yt]=he(b,Gt[yt]);const $t=Gt[0],zt=u.convert(b.format,b.colorSpace),Ot=u.convert(b.type),ie=N(b.internalFormat,zt,Ot,b.colorSpace),Jt=b.isVideoTexture!==!0,me=ot.__version===void 0||Mt===!0,X=wt.dataReady;let Ft=I(b,$t);At(i.TEXTURE_CUBE_MAP,b);let ht;if(ce){Jt&&me&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ie,$t.width,$t.height);for(let yt=0;yt<6;yt++){ht=Gt[yt].mipmaps;for(let Vt=0;Vt<ht.length;Vt++){const kt=ht[Vt];b.format!==bi?zt!==null?Jt?X&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Vt,0,0,kt.width,kt.height,zt,kt.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Vt,ie,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?X&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Vt,0,0,kt.width,kt.height,zt,Ot,kt.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Vt,ie,kt.width,kt.height,0,zt,Ot,kt.data)}}}else{if(ht=b.mipmaps,Jt&&me){ht.length>0&&Ft++;const yt=Kt(Gt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ie,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Dt){Jt?X&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Gt[yt].width,Gt[yt].height,zt,Ot,Gt[yt].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ie,Gt[yt].width,Gt[yt].height,0,zt,Ot,Gt[yt].data);for(let Vt=0;Vt<ht.length;Vt++){const fe=ht[Vt].image[yt].image;Jt?X&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Vt+1,0,0,fe.width,fe.height,zt,Ot,fe.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Vt+1,ie,fe.width,fe.height,0,zt,Ot,fe.data)}}else{Jt?X&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,zt,Ot,Gt[yt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ie,zt,Ot,Gt[yt]);for(let Vt=0;Vt<ht.length;Vt++){const kt=ht[Vt];Jt?X&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Vt+1,0,0,zt,Ot,kt.image[yt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Vt+1,ie,zt,Ot,kt.image[yt])}}}S(b)&&y(i.TEXTURE_CUBE_MAP),ot.__version=wt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function it(O,b,st,Mt,wt,ot){const Pt=u.convert(st.format,st.colorSpace),Nt=u.convert(st.type),Lt=N(st.internalFormat,Pt,Nt,st.colorSpace),ce=r.get(b),Dt=r.get(st);if(Dt.__renderTarget=b,!ce.__hasExternalTextures){const Gt=Math.max(1,b.width>>ot),$t=Math.max(1,b.height>>ot);wt===i.TEXTURE_3D||wt===i.TEXTURE_2D_ARRAY?n.texImage3D(wt,ot,Lt,Gt,$t,b.depth,0,Pt,Nt,null):n.texImage2D(wt,ot,Lt,Gt,$t,0,Pt,Nt,null)}n.bindFramebuffer(i.FRAMEBUFFER,O),qt(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,wt,Dt.__webglTexture,0,Ht(b)):(wt===i.TEXTURE_2D||wt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Mt,wt,Dt.__webglTexture,ot),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(O,b,st){if(i.bindRenderbuffer(i.RENDERBUFFER,O),b.depthBuffer){const Mt=b.depthTexture,wt=Mt&&Mt.isDepthTexture?Mt.type:null,ot=w(b.stencilBuffer,wt),Pt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=Ht(b);qt(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,ot,b.width,b.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,ot,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ot,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,O)}else{const Mt=b.textures;for(let wt=0;wt<Mt.length;wt++){const ot=Mt[wt],Pt=u.convert(ot.format,ot.colorSpace),Nt=u.convert(ot.type),Lt=N(ot.internalFormat,Pt,Nt,ot.colorSpace),ce=Ht(b);st&&qt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Lt,b.width,b.height):qt(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Lt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(i.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=r.get(b.depthTexture);Mt.__renderTarget=b,(!Mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pt(b.depthTexture,0);const wt=Mt.__webglTexture,ot=Ht(b);if(b.depthTexture.format===Cl)qt(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,wt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,wt,0);else if(b.depthTexture.format===Dl)qt(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,wt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,wt,0);else throw new Error("Unknown depthTexture format")}function St(O){const b=r.get(O),st=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const Mt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Mt){const wt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Mt.removeEventListener("dispose",wt)};Mt.addEventListener("dispose",wt),b.__depthDisposeCallback=wt}b.__boundDepthTexture=Mt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,O)}else if(st){b.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)if(n.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Mt]),b.__webglDepthbuffer[Mt]===void 0)b.__webglDepthbuffer[Mt]=i.createRenderbuffer(),Tt(b.__webglDepthbuffer[Mt],O,!1);else{const wt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[Mt];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,ot)}}else if(n.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Tt(b.__webglDepthbuffer,O,!1);else{const Mt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,wt)}n.bindFramebuffer(i.FRAMEBUFFER,null)}function et(O,b,st){const Mt=r.get(O);b!==void 0&&it(Mt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),st!==void 0&&St(O)}function Rt(O){const b=O.texture,st=r.get(O),Mt=r.get(b);O.addEventListener("dispose",F);const wt=O.textures,ot=O.isWebGLCubeRenderTarget===!0,Pt=wt.length>1;if(Pt||(Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture()),Mt.__version=b.version,c.memory.textures++),ot){st.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0){st.__webglFramebuffer[Nt]=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)st.__webglFramebuffer[Nt][Lt]=i.createFramebuffer()}else st.__webglFramebuffer[Nt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){st.__webglFramebuffer=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)st.__webglFramebuffer[Nt]=i.createFramebuffer()}else st.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let Nt=0,Lt=wt.length;Nt<Lt;Nt++){const ce=r.get(wt[Nt]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),c.memory.textures++)}if(O.samples>0&&qt(O)===!1){st.__webglMultisampledFramebuffer=i.createFramebuffer(),st.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Nt=0;Nt<wt.length;Nt++){const Lt=wt[Nt];st.__webglColorRenderbuffer[Nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,st.__webglColorRenderbuffer[Nt]);const ce=u.convert(Lt.format,Lt.colorSpace),Dt=u.convert(Lt.type),Gt=N(Lt.internalFormat,ce,Dt,Lt.colorSpace,O.isXRRenderTarget===!0),$t=Ht(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Gt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,st.__webglColorRenderbuffer[Nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(st.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(st.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){n.bindTexture(i.TEXTURE_CUBE_MAP,Mt.__webglTexture),At(i.TEXTURE_CUBE_MAP,b);for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Lt=0;Lt<b.mipmaps.length;Lt++)it(st.__webglFramebuffer[Nt][Lt],O,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Lt);else it(st.__webglFramebuffer[Nt],O,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);S(b)&&y(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let Nt=0,Lt=wt.length;Nt<Lt;Nt++){const ce=wt[Nt],Dt=r.get(ce);n.bindTexture(i.TEXTURE_2D,Dt.__webglTexture),At(i.TEXTURE_2D,ce),it(st.__webglFramebuffer,O,ce,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,0),S(ce)&&y(i.TEXTURE_2D)}n.unbindTexture()}else{let Nt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Nt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Nt,Mt.__webglTexture),At(Nt,b),b.mipmaps&&b.mipmaps.length>0)for(let Lt=0;Lt<b.mipmaps.length;Lt++)it(st.__webglFramebuffer[Lt],O,b,i.COLOR_ATTACHMENT0,Nt,Lt);else it(st.__webglFramebuffer,O,b,i.COLOR_ATTACHMENT0,Nt,0);S(b)&&y(Nt),n.unbindTexture()}O.depthBuffer&&St(O)}function Q(O){const b=O.textures;for(let st=0,Mt=b.length;st<Mt;st++){const wt=b[st];if(S(wt)){const ot=L(O),Pt=r.get(wt).__webglTexture;n.bindTexture(ot,Pt),y(ot),n.unbindTexture()}}}const Bt=[],z=[];function te(O){if(O.samples>0){if(qt(O)===!1){const b=O.textures,st=O.width,Mt=O.height;let wt=i.COLOR_BUFFER_BIT;const ot=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=r.get(O),Nt=b.length>1;if(Nt)for(let Lt=0;Lt<b.length;Lt++)n.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(wt|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(wt|=i.STENCIL_BUFFER_BIT)),Nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Lt]);const ce=r.get(b[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,st,Mt,0,0,st,Mt,wt,i.NEAREST),p===!0&&(Bt.length=0,z.length=0,Bt.push(i.COLOR_ATTACHMENT0+Lt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Bt.push(ot),z.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Nt)for(let Lt=0;Lt<b.length;Lt++){n.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Lt]);const ce=r.get(b[Lt]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ce,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const b=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ht(O){return Math.min(o.maxSamples,O.samples)}function qt(O){const b=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function jt(O){const b=c.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function he(O,b){const st=O.colorSpace,Mt=O.format,wt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||st!==no&&st!==ir&&(Ne.getTransfer(st)===Ge?(Mt!==bi||wt!==ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),b}function Kt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=tt,this.resetTextureUnits=j,this.setTexture2D=pt,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=et,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=it,this.useMultisampledRTT=qt}function $R(i,t){function n(r,o=ir){let u;const c=Ne.getTransfer(o);if(r===ya)return i.UNSIGNED_BYTE;if(r===Sm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Mm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===yy)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===vy)return i.BYTE;if(r===xy)return i.SHORT;if(r===wl)return i.UNSIGNED_SHORT;if(r===ym)return i.INT;if(r===Vr)return i.UNSIGNED_INT;if(r===ma)return i.FLOAT;if(r===Ol)return i.HALF_FLOAT;if(r===Sy)return i.ALPHA;if(r===My)return i.RGB;if(r===bi)return i.RGBA;if(r===Ey)return i.LUMINANCE;if(r===Ty)return i.LUMINANCE_ALPHA;if(r===Cl)return i.DEPTH_COMPONENT;if(r===Dl)return i.DEPTH_STENCIL;if(r===by)return i.RED;if(r===Em)return i.RED_INTEGER;if(r===Ay)return i.RG;if(r===Tm)return i.RG_INTEGER;if(r===bm)return i.RGBA_INTEGER;if(r===Dc||r===Uc||r===Nc||r===Lc)if(c===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dp||r===Up||r===Np||r===Lp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Dp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Up)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Np)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Op||r===Pp||r===zp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Op||r===Pp)return c===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===zp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bp||r===Fp||r===Ip||r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===Yp||r===qp||r===jp||r===Zp||r===Kp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Bp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ip)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oc||r===Qp||r===$p)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Oc)return c===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$p)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wy||r===Jp||r===tm||r===em)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Oc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Jp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===em)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rl?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:n}}const JR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t2=`
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

}`;class e2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const o=new In,u=t.properties.get(o);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new lr({vertexShader:JR,fragmentShader:t2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ii(new hf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n2 extends ho{constructor(t,n){super();const r=this;let o=null,u=1,c=null,h="local-floor",p=1,d=null,g=null,v=null,_=null,x=null,E=null;const T=new e2,S=n.getContextAttributes();let y=null,L=null;const N=[],w=[],I=new Ee;let P=null;const F=new ni;F.viewport=new sn;const k=new ni;k.viewport=new sn;const U=[F,k],C=new ET;let H=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let xt=N[$];return xt===void 0&&(xt=new jd,N[$]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function($){let xt=N[$];return xt===void 0&&(xt=new jd,N[$]=xt),xt.getGripSpace()},this.getHand=function($){let xt=N[$];return xt===void 0&&(xt=new jd,N[$]=xt),xt.getHandSpace()};function tt($){const xt=w.indexOf($.inputSource);if(xt===-1)return;const it=N[xt];it!==void 0&&(it.update($.inputSource,$.frame,d||c),it.dispatchEvent({type:$.type,data:$.inputSource}))}function mt(){o.removeEventListener("select",tt),o.removeEventListener("selectstart",tt),o.removeEventListener("selectend",tt),o.removeEventListener("squeeze",tt),o.removeEventListener("squeezestart",tt),o.removeEventListener("squeezeend",tt),o.removeEventListener("end",mt),o.removeEventListener("inputsourceschange",pt);for(let $=0;$<N.length;$++){const xt=w[$];xt!==null&&(w[$]=null,N[$].disconnect(xt))}H=null,j=null,T.reset(),t.setRenderTarget(y),x=null,_=null,v=null,o=null,L=null,_t.stop(),r.isPresenting=!1,t.setPixelRatio(P),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(y=t.getRenderTarget(),o.addEventListener("select",tt),o.addEventListener("selectstart",tt),o.addEventListener("selectend",tt),o.addEventListener("squeeze",tt),o.addEventListener("squeezestart",tt),o.addEventListener("squeezeend",tt),o.addEventListener("end",mt),o.addEventListener("inputsourceschange",pt),S.xrCompatible!==!0&&await n.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Tt=null,Ct=null;S.depth&&(Ct=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,it=S.stencil?Dl:Cl,Tt=S.stencil?Rl:Vr);const St={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(o,n),_=v.createProjectionLayer(St),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),L=new kr(_.textureWidth,_.textureHeight,{format:bi,type:ya,depthTexture:new Vy(_.textureWidth,_.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const it={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(o,n,it),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new kr(x.framebufferWidth,x.framebufferHeight,{format:bi,type:ya,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(h),_t.setContext(o),_t.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pt($){for(let xt=0;xt<$.removed.length;xt++){const it=$.removed[xt],Tt=w.indexOf(it);Tt>=0&&(w[Tt]=null,N[Tt].disconnect(it))}for(let xt=0;xt<$.added.length;xt++){const it=$.added[xt];let Tt=w.indexOf(it);if(Tt===-1){for(let St=0;St<N.length;St++)if(St>=w.length){w.push(it),Tt=St;break}else if(w[St]===null){w[St]=it,Tt=St;break}if(Tt===-1)break}const Ct=N[Tt];Ct&&Ct.connect(it)}}const B=new at,Y=new at;function W($,xt,it){B.setFromMatrixPosition(xt.matrixWorld),Y.setFromMatrixPosition(it.matrixWorld);const Tt=B.distanceTo(Y),Ct=xt.projectionMatrix.elements,St=it.projectionMatrix.elements,et=Ct[14]/(Ct[10]-1),Rt=Ct[14]/(Ct[10]+1),Q=(Ct[9]+1)/Ct[5],Bt=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],te=(St[8]+1)/St[0],Ht=et*z,qt=et*te,jt=Tt/(-z+te),he=jt*-z;if(xt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(he),$.translateZ(jt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(xt.projectionMatrix),$.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const Kt=et+jt,O=Rt+jt,b=Ht-he,st=qt+(Tt-he),Mt=Q*Rt/O*Kt,wt=Bt*Rt/O*Kt;$.projectionMatrix.makePerspective(b,st,Mt,wt,Kt,O),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function dt($,xt){xt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(xt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let xt=$.near,it=$.far;T.texture!==null&&(T.depthNear>0&&(xt=T.depthNear),T.depthFar>0&&(it=T.depthFar)),C.near=k.near=F.near=xt,C.far=k.far=F.far=it,(H!==C.near||j!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,j=C.far),F.layers.mask=$.layers.mask|2,k.layers.mask=$.layers.mask|4,C.layers.mask=F.layers.mask|k.layers.mask;const Tt=$.parent,Ct=C.cameras;dt(C,Tt);for(let St=0;St<Ct.length;St++)dt(Ct[St],Tt);Ct.length===2?W(C,F,k):C.projectionMatrix.copy(F.projectionMatrix),D($,C,Tt)};function D($,xt,it){it===null?$.matrix.copy(xt.matrixWorld):($.matrix.copy(it.matrixWorld),$.matrix.invert(),$.matrix.multiply(xt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(xt.projectionMatrix),$.projectionMatrixInverse.copy(xt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=im*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function($){p=$,_!==null&&(_.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let nt=null;function At($,xt){if(g=xt.getViewerPose(d||c),E=xt,g!==null){const it=g.views;x!==null&&(t.setRenderTargetFramebuffer(L,x.framebuffer),t.setRenderTarget(L));let Tt=!1;it.length!==C.cameras.length&&(C.cameras.length=0,Tt=!0);for(let et=0;et<it.length;et++){const Rt=it[et];let Q=null;if(x!==null)Q=x.getViewport(Rt);else{const z=v.getViewSubImage(_,Rt);Q=z.viewport,et===0&&(t.setRenderTargetTextures(L,z.colorTexture,z.depthStencilTexture),t.setRenderTarget(L))}let Bt=U[et];Bt===void 0&&(Bt=new ni,Bt.layers.enable(et),Bt.viewport=new sn,U[et]=Bt),Bt.matrix.fromArray(Rt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Rt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Q.x,Q.y,Q.width,Q.height),et===0&&(C.matrix.copy(Bt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Tt===!0&&C.cameras.push(Bt)}const Ct=o.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const et=v.getDepthInformation(it[0]);et&&et.isValid&&et.texture&&T.init(t,et,o.renderState)}}for(let it=0;it<N.length;it++){const Tt=w[it],Ct=N[it];Tt!==null&&Ct!==void 0&&Ct.update(Tt,xt,d||c)}nt&&nt($,xt),xt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xt}),E=null}const _t=new Xy;_t.setAnimationLoop(At),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}const Nr=new Sa,i2=new Qe;function a2(i,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Oy(i)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,L,N,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(S,y):y.isMeshToonMaterial?(u(S,y),v(S,y)):y.isMeshPhongMaterial?(u(S,y),g(S,y)):y.isMeshStandardMaterial?(u(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(u(S,y),E(S,y)):y.isMeshDepthMaterial?u(S,y):y.isMeshDistanceMaterial?(u(S,y),T(S,y)):y.isMeshNormalMaterial?u(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,L,N):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Yn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Yn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=t.get(y),N=L.envMap,w=L.envMapRotation;N&&(S.envMap.value=N,Nr.copy(w),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),S.envMapRotation.value.setFromMatrix4(i2.makeRotationFromEuler(Nr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,L,N){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=N*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const L=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function r2(i,t,n,r){let o={},u={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,N){const w=N.program;r.uniformBlockBinding(L,w)}function d(L,N){let w=o[L.id];w===void 0&&(E(L),w=g(L),o[L.id]=w,L.addEventListener("dispose",S));const I=N.program;r.updateUBOMapping(L,I);const P=t.render.frame;u[L.id]!==P&&(_(L),u[L.id]=P)}function g(L){const N=v();L.__bindingPointIndex=N;const w=i.createBuffer(),I=L.__size,P=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,w),w}function v(){for(let L=0;L<h;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const N=o[L.id],w=L.uniforms,I=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let P=0,F=w.length;P<F;P++){const k=Array.isArray(w[P])?w[P]:[w[P]];for(let U=0,C=k.length;U<C;U++){const H=k[U];if(x(H,P,U,I)===!0){const j=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let mt=0;for(let pt=0;pt<tt.length;pt++){const B=tt[pt],Y=T(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,j+mt,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,mt),mt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(L,N,w,I){const P=L.value,F=N+"_"+w;if(I[F]===void 0)return typeof P=="number"||typeof P=="boolean"?I[F]=P:I[F]=P.clone(),!0;{const k=I[F];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return I[F]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function E(L){const N=L.uniforms;let w=0;const I=16;for(let F=0,k=N.length;F<k;F++){const U=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,H=U.length;C<H;C++){const j=U[C],tt=Array.isArray(j.value)?j.value:[j.value];for(let mt=0,pt=tt.length;mt<pt;mt++){const B=tt[mt],Y=T(B),W=w%I,dt=W%Y.boundary,D=W+dt;w+=dt,D!==0&&I-D<Y.storage&&(w+=I-D),j.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=Y.storage}}}const P=w%I;return P>0&&(w+=I-P),L.__size=w,L.__cache={},this}function T(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),N}function S(L){const N=L.target;N.removeEventListener("dispose",S);const w=c.indexOf(N.__bindingPointIndex);c.splice(w,1),i.deleteBuffer(o[N.id]),delete o[N.id],delete u[N.id]}function y(){for(const L in o)i.deleteBuffer(o[L]);c=[],o={},u={}}return{bind:p,update:d,dispose:y}}class Zy{constructor(t={}){const{canvas:n=k1(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const L=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=di;let P=0,F=0,k=null,U=-1,C=null;const H=new sn,j=new sn;let tt=null;const mt=new Me(0);let pt=0,B=n.width,Y=n.height,W=1,dt=null,D=null;const nt=new sn(0,0,B,Y),At=new sn(0,0,B,Y);let _t=!1;const $=new Hy;let xt=!1,it=!1;const Tt=new Qe,Ct=new Qe,St=new at,et=new sn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function Bt(){return k===null?W:1}let z=r;function te(R,Z){return n.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xm}`),n.addEventListener("webglcontextlost",yt,!1),n.addEventListener("webglcontextrestored",Vt,!1),n.addEventListener("webglcontextcreationerror",kt,!1),z===null){const Z="webgl2";if(z=te(Z,R),z===null)throw te(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ht,qt,jt,he,Kt,O,b,st,Mt,wt,ot,Pt,Nt,Lt,ce,Dt,Gt,$t,zt,Ot,ie,Jt,me,X;function Ft(){Ht=new gw(z),Ht.init(),Jt=new $R(z,Ht),qt=new uw(z,Ht,t,Jt),jt=new KR(z,Ht),qt.reverseDepthBuffer&&_&&jt.buffers.depth.setReversed(!0),he=new xw(z),Kt=new BR,O=new QR(z,Ht,jt,Kt,qt,Jt,he),b=new fw(w),st=new mw(w),Mt=new bT(z),me=new ow(z,Mt),wt=new _w(z,Mt,he,me),ot=new Sw(z,wt,Mt,he),zt=new yw(z,qt,O),Dt=new cw(Kt),Pt=new zR(w,b,st,Ht,qt,me,Dt),Nt=new a2(w,Kt),Lt=new IR,ce=new WR(Ht),$t=new sw(w,b,st,jt,ot,x,p),Gt=new jR(w,ot,qt),X=new r2(z,he,qt,jt),Ot=new lw(z,Ht,he),ie=new vw(z,Ht,he),he.programs=Pt.programs,w.capabilities=qt,w.extensions=Ht,w.properties=Kt,w.renderLists=Lt,w.shadowMap=Gt,w.state=jt,w.info=he}Ft();const ht=new n2(w,z);this.xr=ht,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(B,Y,!1))},this.getSize=function(R){return R.set(B,Y)},this.setSize=function(R,Z,ct=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Y=Z,n.width=Math.floor(R*W),n.height=Math.floor(Z*W),ct===!0&&(n.style.width=R+"px",n.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(B*W,Y*W).floor()},this.setDrawingBufferSize=function(R,Z,ct){B=R,Y=Z,W=ct,n.width=Math.floor(R*ct),n.height=Math.floor(Z*ct),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,Z,ct,ft){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,Z,ct,ft),jt.viewport(H.copy(nt).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(At)},this.setScissor=function(R,Z,ct,ft){R.isVector4?At.set(R.x,R.y,R.z,R.w):At.set(R,Z,ct,ft),jt.scissor(j.copy(At).multiplyScalar(W).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(R){jt.setScissorTest(_t=R)},this.setOpaqueSort=function(R){dt=R},this.setTransparentSort=function(R){D=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ct=!0){let ft=0;if(R){let K=!1;if(k!==null){const Ut=k.texture.format;K=Ut===bm||Ut===Tm||Ut===Em}if(K){const Ut=k.texture.type,It=Ut===ya||Ut===Vr||Ut===wl||Ut===Rl||Ut===Sm||Ut===Mm,Xt=$t.getClearColor(),Zt=$t.getClearAlpha(),le=Xt.r,ae=Xt.g,ne=Xt.b;It?(E[0]=le,E[1]=ae,E[2]=ne,E[3]=Zt,z.clearBufferuiv(z.COLOR,0,E)):(T[0]=le,T[1]=ae,T[2]=ne,T[3]=Zt,z.clearBufferiv(z.COLOR,0,T))}else ft|=z.COLOR_BUFFER_BIT}Z&&(ft|=z.DEPTH_BUFFER_BIT),ct&&(ft|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",yt,!1),n.removeEventListener("webglcontextrestored",Vt,!1),n.removeEventListener("webglcontextcreationerror",kt,!1),$t.dispose(),Lt.dispose(),ce.dispose(),Kt.dispose(),b.dispose(),st.dispose(),ot.dispose(),me.dispose(),X.dispose(),Pt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",nn),ht.removeEventListener("sessionend",fn),Cn.stop()};function yt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=he.autoReset,Z=Gt.enabled,ct=Gt.autoUpdate,ft=Gt.needsUpdate,K=Gt.type;Ft(),he.autoReset=R,Gt.enabled=Z,Gt.autoUpdate=ct,Gt.needsUpdate=ft,Gt.type=K}function kt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function fe(R){const Z=R.target;Z.removeEventListener("dispose",fe),Be(Z)}function Be(R){je(R),Kt.remove(R)}function je(R){const Z=Kt.get(R).programs;Z!==void 0&&(Z.forEach(function(ct){Pt.releaseProgram(ct)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ct,ft,K,Ut){Z===null&&(Z=Rt);const It=K.isMesh&&K.matrixWorld.determinant()<0,Xt=cr(R,Z,ct,ft,K);jt.setMaterial(ft,It);let Zt=ct.index,le=1;if(ft.wireframe===!0){if(Zt=wt.getWireframeAttribute(ct),Zt===void 0)return;le=2}const ae=ct.drawRange,ne=ct.attributes.position;let xe=ae.start*le,De=(ae.start+ae.count)*le;Ut!==null&&(xe=Math.max(xe,Ut.start*le),De=Math.min(De,(Ut.start+Ut.count)*le)),Zt!==null?(xe=Math.max(xe,0),De=Math.min(De,Zt.count)):ne!=null&&(xe=Math.max(xe,0),De=Math.min(De,ne.count));const Ze=De-xe;if(Ze<0||Ze===1/0)return;me.setup(K,ft,Xt,ct,Zt);let Te,be=Ot;if(Zt!==null&&(Te=Mt.get(Zt),be=ie,be.setIndex(Te)),K.isMesh)ft.wireframe===!0?(jt.setLineWidth(ft.wireframeLinewidth*Bt()),be.setMode(z.LINES)):be.setMode(z.TRIANGLES);else if(K.isLine){let re=ft.linewidth;re===void 0&&(re=1),jt.setLineWidth(re*Bt()),K.isLineSegments?be.setMode(z.LINES):K.isLineLoop?be.setMode(z.LINE_LOOP):be.setMode(z.LINE_STRIP)}else K.isPoints?be.setMode(z.POINTS):K.isSprite&&be.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Pc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))be.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const re=K._multiDrawStarts,Je=K._multiDrawCounts,Ce=K._multiDrawCount,Dn=Zt?Mt.get(Zt).bytesPerElement:1,Ra=Kt.get(ft).currentProgram.getUniforms();for(let We=0;We<Ce;We++)Ra.setValue(z,"_gl_DrawID",We),be.render(re[We]/Dn,Je[We])}else if(K.isInstancedMesh)be.renderInstances(xe,Ze,K.count);else if(ct.isInstancedBufferGeometry){const re=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Je=Math.min(ct.instanceCount,re);be.renderInstances(xe,Ze,Je)}else be.render(xe,Ze)};function we(R,Z,ct){R.transparent===!0&&R.side===pa&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Aa(R,Z,ct),R.side=or,R.needsUpdate=!0,Aa(R,Z,ct),R.side=pa):Aa(R,Z,ct)}this.compile=function(R,Z,ct=null){ct===null&&(ct=R),y=ce.get(ct),y.init(Z),N.push(y),ct.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),R!==ct&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const ft=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ut=K.material;if(Ut)if(Array.isArray(Ut))for(let It=0;It<Ut.length;It++){const Xt=Ut[It];we(Xt,ct,K),ft.add(Xt)}else we(Ut,ct,K),ft.add(Ut)}),y=N.pop(),ft},this.compileAsync=function(R,Z,ct=null){const ft=this.compile(R,Z,ct);return new Promise(K=>{function Ut(){if(ft.forEach(function(It){Kt.get(It).currentProgram.isReady()&&ft.delete(It)}),ft.size===0){K(R);return}setTimeout(Ut,10)}Ht.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let vn=null;function $e(R){vn&&vn(R)}function nn(){Cn.stop()}function fn(){Cn.start()}const Cn=new Xy;Cn.setAnimationLoop($e),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(R){vn=R,ht.setAnimationLoop(R),R===null?Cn.stop():Cn.start()},ht.addEventListener("sessionstart",nn),ht.addEventListener("sessionend",fn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(Z),Z=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Z,k),y=ce.get(R,N.length),y.init(Z),N.push(y),Ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$.setFromProjectionMatrix(Ct),it=this.localClippingEnabled,xt=Dt.init(this.clippingPlanes,it),S=Lt.get(R,L.length),S.init(),L.push(S),ht.enabled===!0&&ht.isPresenting===!0){const Ut=w.xr.getDepthSensingMesh();Ut!==null&&Di(Ut,Z,-1/0,w.sortObjects)}Di(R,Z,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(dt,D),Q=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Q&&$t.addToRenderList(S,R),this.info.render.frame++,xt===!0&&Dt.beginShadows();const ct=y.state.shadowsArray;Gt.render(ct,R,Z),xt===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=S.opaque,K=S.transmissive;if(y.setupLights(),Z.isArrayCamera){const Ut=Z.cameras;if(K.length>0)for(let It=0,Xt=Ut.length;It<Xt;It++){const Zt=Ut[It];kl(ft,K,R,Zt)}Q&&$t.render(R);for(let It=0,Xt=Ut.length;It<Xt;It++){const Zt=Ut[It];Vl(S,R,Zt,Zt.viewport)}}else K.length>0&&kl(ft,K,R,Z),Q&&$t.render(R),Vl(S,R,Z);k!==null&&F===0&&(O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(w,R,Z),me.resetDefaultState(),U=-1,C=null,N.pop(),N.length>0?(y=N[N.length-1],xt===!0&&Dt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Di(R,Z,ct,ft){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){ft&&et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const It=ot.update(R),Xt=R.material;Xt.visible&&S.push(R,It,Xt,ct,et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const It=ot.update(R),Xt=R.material;if(ft&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),et.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),et.copy(It.boundingSphere.center)),et.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(Xt)){const Zt=It.groups;for(let le=0,ae=Zt.length;le<ae;le++){const ne=Zt[le],xe=Xt[ne.materialIndex];xe&&xe.visible&&S.push(R,It,xe,ct,et.z,ne)}}else Xt.visible&&S.push(R,It,Xt,ct,et.z,null)}}const Ut=R.children;for(let It=0,Xt=Ut.length;It<Xt;It++)Di(Ut[It],Z,ct,ft)}function Vl(R,Z,ct,ft){const K=R.opaque,Ut=R.transmissive,It=R.transparent;y.setupLightsView(ct),xt===!0&&Dt.setGlobalState(w.clippingPlanes,ct),ft&&jt.viewport(H.copy(ft)),K.length>0&&ur(K,Z,ct),Ut.length>0&&ur(Ut,Z,ct),It.length>0&&ur(It,Z,ct),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function kl(R,Z,ct,ft){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ft.id]===void 0&&(y.state.transmissionRenderTarget[ft.id]=new kr(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Ol:ya,minFilter:Ir,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Ut=y.state.transmissionRenderTarget[ft.id],It=ft.viewport||H;Ut.setSize(It.z*w.transmissionResolutionScale,It.w*w.transmissionResolutionScale);const Xt=w.getRenderTarget();w.setRenderTarget(Ut),w.getClearColor(mt),pt=w.getClearAlpha(),pt<1&&w.setClearColor(16777215,.5),w.clear(),Q&&$t.render(ct);const Zt=w.toneMapping;w.toneMapping=rr;const le=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),y.setupLightsView(ft),xt===!0&&Dt.setGlobalState(w.clippingPlanes,ft),ur(R,ct,ft),O.updateMultisampleRenderTarget(Ut),O.updateRenderTargetMipmap(Ut),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let ne=0,xe=Z.length;ne<xe;ne++){const De=Z[ne],Ze=De.object,Te=De.geometry,be=De.material,re=De.group;if(be.side===pa&&Ze.layers.test(ft.layers)){const Je=be.side;be.side=Yn,be.needsUpdate=!0,ba(Ze,ct,ft,Te,be,re),be.side=Je,be.needsUpdate=!0,ae=!0}}ae===!0&&(O.updateMultisampleRenderTarget(Ut),O.updateRenderTargetMipmap(Ut))}w.setRenderTarget(Xt),w.setClearColor(mt,pt),le!==void 0&&(ft.viewport=le),w.toneMapping=Zt}function ur(R,Z,ct){const ft=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Ut=R.length;K<Ut;K++){const It=R[K],Xt=It.object,Zt=It.geometry,le=It.group;let ae=It.material;ae.allowOverride===!0&&ft!==null&&(ae=ft),Xt.layers.test(ct.layers)&&ba(Xt,Z,ct,Zt,ae,le)}}function ba(R,Z,ct,ft,K,Ut){R.onBeforeRender(w,Z,ct,ft,K,Ut),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,Z,ct,ft,R,Ut),K.transparent===!0&&K.side===pa&&K.forceSinglePass===!1?(K.side=Yn,K.needsUpdate=!0,w.renderBufferDirect(ct,Z,ft,K,R,Ut),K.side=or,K.needsUpdate=!0,w.renderBufferDirect(ct,Z,ft,K,R,Ut),K.side=pa):w.renderBufferDirect(ct,Z,ft,K,R,Ut),R.onAfterRender(w,Z,ct,ft,K,Ut)}function Aa(R,Z,ct){Z.isScene!==!0&&(Z=Rt);const ft=Kt.get(R),K=y.state.lights,Ut=y.state.shadowsArray,It=K.state.version,Xt=Pt.getParameters(R,K.state,Ut,Z,ct),Zt=Pt.getProgramCacheKey(Xt);let le=ft.programs;ft.environment=R.isMeshStandardMaterial?Z.environment:null,ft.fog=Z.fog,ft.envMap=(R.isMeshStandardMaterial?st:b).get(R.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,le===void 0&&(R.addEventListener("dispose",fe),le=new Map,ft.programs=le);let ae=le.get(Zt);if(ae!==void 0){if(ft.currentProgram===ae&&ft.lightsStateVersion===It)return ki(R,Xt),ae}else Xt.uniforms=Pt.getUniforms(R),R.onBeforeCompile(Xt,w),ae=Pt.acquireProgram(Xt,Zt),le.set(Zt,ae),ft.uniforms=Xt.uniforms;const ne=ft.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ne.clippingPlanes=Dt.uniform),ki(R,Xt),ft.needsLights=on(R),ft.lightsStateVersion=It,ft.needsLights&&(ne.ambientLightColor.value=K.state.ambient,ne.lightProbe.value=K.state.probe,ne.directionalLights.value=K.state.directional,ne.directionalLightShadows.value=K.state.directionalShadow,ne.spotLights.value=K.state.spot,ne.spotLightShadows.value=K.state.spotShadow,ne.rectAreaLights.value=K.state.rectArea,ne.ltc_1.value=K.state.rectAreaLTC1,ne.ltc_2.value=K.state.rectAreaLTC2,ne.pointLights.value=K.state.point,ne.pointLightShadows.value=K.state.pointShadow,ne.hemisphereLights.value=K.state.hemi,ne.directionalShadowMap.value=K.state.directionalShadowMap,ne.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ne.spotShadowMap.value=K.state.spotShadowMap,ne.spotLightMatrix.value=K.state.spotLightMatrix,ne.spotLightMap.value=K.state.spotLightMap,ne.pointShadowMap.value=K.state.pointShadowMap,ne.pointShadowMatrix.value=K.state.pointShadowMatrix),ft.currentProgram=ae,ft.uniformsList=null,ae}function Vi(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=zc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function ki(R,Z){const ct=Kt.get(R);ct.outputColorSpace=Z.outputColorSpace,ct.batching=Z.batching,ct.batchingColor=Z.batchingColor,ct.instancing=Z.instancing,ct.instancingColor=Z.instancingColor,ct.instancingMorph=Z.instancingMorph,ct.skinning=Z.skinning,ct.morphTargets=Z.morphTargets,ct.morphNormals=Z.morphNormals,ct.morphColors=Z.morphColors,ct.morphTargetsCount=Z.morphTargetsCount,ct.numClippingPlanes=Z.numClippingPlanes,ct.numIntersection=Z.numClipIntersection,ct.vertexAlphas=Z.vertexAlphas,ct.vertexTangents=Z.vertexTangents,ct.toneMapping=Z.toneMapping}function cr(R,Z,ct,ft,K){Z.isScene!==!0&&(Z=Rt),O.resetTextureUnits();const Ut=Z.fog,It=ft.isMeshStandardMaterial?Z.environment:null,Xt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:no,Zt=(ft.isMeshStandardMaterial?st:b).get(ft.envMap||It),le=ft.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ae=!!ct.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),ne=!!ct.morphAttributes.position,xe=!!ct.morphAttributes.normal,De=!!ct.morphAttributes.color;let Ze=rr;ft.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ze=w.toneMapping);const Te=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,be=Te!==void 0?Te.length:0,re=Kt.get(ft),Je=y.state.lights;if(xt===!0&&(it===!0||R!==C)){const xn=R===C&&ft.id===U;Dt.setState(ft,R,xn)}let Ce=!1;ft.version===re.__version?(re.needsLights&&re.lightsStateVersion!==Je.state.version||re.outputColorSpace!==Xt||K.isBatchedMesh&&re.batching===!1||!K.isBatchedMesh&&re.batching===!0||K.isBatchedMesh&&re.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&re.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&re.instancing===!1||!K.isInstancedMesh&&re.instancing===!0||K.isSkinnedMesh&&re.skinning===!1||!K.isSkinnedMesh&&re.skinning===!0||K.isInstancedMesh&&re.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&re.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&re.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&re.instancingMorph===!1&&K.morphTexture!==null||re.envMap!==Zt||ft.fog===!0&&re.fog!==Ut||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Dt.numPlanes||re.numIntersection!==Dt.numIntersection)||re.vertexAlphas!==le||re.vertexTangents!==ae||re.morphTargets!==ne||re.morphNormals!==xe||re.morphColors!==De||re.toneMapping!==Ze||re.morphTargetsCount!==be)&&(Ce=!0):(Ce=!0,re.__version=ft.version);let Dn=re.currentProgram;Ce===!0&&(Dn=Aa(ft,Z,K));let Ra=!1,We=!1,Wi=!1;const ke=Dn.getUniforms(),Un=re.uniforms;if(jt.useProgram(Dn.program)&&(Ra=!0,We=!0,Wi=!0),ft.id!==U&&(U=ft.id,We=!0),Ra||C!==R){jt.buffers.depth.getReversed()?(Tt.copy(R.projectionMatrix),W1(Tt),Y1(Tt),ke.setValue(z,"projectionMatrix",Tt)):ke.setValue(z,"projectionMatrix",R.projectionMatrix),ke.setValue(z,"viewMatrix",R.matrixWorldInverse);const bn=ke.map.cameraPosition;bn!==void 0&&bn.setValue(z,St.setFromMatrixPosition(R.matrixWorld)),qt.logarithmicDepthBuffer&&ke.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&ke.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,We=!0,Wi=!0)}if(K.isSkinnedMesh){ke.setOptional(z,K,"bindMatrix"),ke.setOptional(z,K,"bindMatrixInverse");const xn=K.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),ke.setValue(z,"boneTexture",xn.boneTexture,O))}K.isBatchedMesh&&(ke.setOptional(z,K,"batchingTexture"),ke.setValue(z,"batchingTexture",K._matricesTexture,O),ke.setOptional(z,K,"batchingIdTexture"),ke.setValue(z,"batchingIdTexture",K._indirectTexture,O),ke.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&ke.setValue(z,"batchingColorTexture",K._colorsTexture,O));const hn=ct.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&zt.update(K,ct,Dn),(We||re.receiveShadow!==K.receiveShadow)&&(re.receiveShadow=K.receiveShadow,ke.setValue(z,"receiveShadow",K.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Un.envMap.value=Zt,Un.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&Z.environment!==null&&(Un.envMapIntensity.value=Z.environmentIntensity),We&&(ke.setValue(z,"toneMappingExposure",w.toneMappingExposure),re.needsLights&&wa(Un,Wi),Ut&&ft.fog===!0&&Nt.refreshFogUniforms(Un,Ut),Nt.refreshMaterialUniforms(Un,ft,W,Y,y.state.transmissionRenderTarget[R.id]),zc.upload(z,Vi(re),Un,O)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(zc.upload(z,Vi(re),Un,O),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&ke.setValue(z,"center",K.center),ke.setValue(z,"modelViewMatrix",K.modelViewMatrix),ke.setValue(z,"normalMatrix",K.normalMatrix),ke.setValue(z,"modelMatrix",K.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const xn=ft.uniformsGroups;for(let bn=0,Ui=xn.length;bn<Ui;bn++){const Yi=xn[bn];X.update(Yi,Dn),X.bind(Yi,Dn)}}return Dn}function wa(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function on(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,Z,ct){const ft=Kt.get(R);ft.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Kt.get(R.texture).__webglTexture=Z,Kt.get(R.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ct,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ct=Kt.get(R);ct.__webglFramebuffer=Z,ct.__useDefaultFramebuffer=Z===void 0};const Xl=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,ct=0){k=R,P=Z,F=ct;let ft=!0,K=null,Ut=!1,It=!1;if(R){const Zt=Kt.get(R);if(Zt.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(z.FRAMEBUFFER,null),ft=!1;else if(Zt.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(Zt.__hasExternalTextures)O.rebindTextures(R,Kt.get(R.texture).__webglTexture,Kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ne=R.depthTexture;if(Zt.__boundDepthTexture!==ne){if(ne!==null&&Kt.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const le=R.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(It=!0);const ae=Kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[Z])?K=ae[Z][ct]:K=ae[Z],Ut=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?K=Kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?K=ae[ct]:K=ae,H.copy(R.viewport),j.copy(R.scissor),tt=R.scissorTest}else H.copy(nt).multiplyScalar(W).floor(),j.copy(At).multiplyScalar(W).floor(),tt=_t;if(ct!==0&&(K=Xl),jt.bindFramebuffer(z.FRAMEBUFFER,K)&&ft&&jt.drawBuffers(R,K),jt.viewport(H),jt.scissor(j),jt.setScissorTest(tt),Ut){const Zt=Kt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Zt.__webglTexture,ct)}else if(It){const Zt=Kt.get(R.texture),le=Z;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Zt.__webglTexture,ct,le)}else if(R!==null&&ct!==0){const Zt=Kt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Zt.__webglTexture,ct)}U=-1},this.readRenderTargetPixels=function(R,Z,ct,ft,K,Ut,It){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Xt=Xt[It]),Xt){jt.bindFramebuffer(z.FRAMEBUFFER,Xt);try{const Zt=R.texture,le=Zt.format,ae=Zt.type;if(!qt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ft&&ct>=0&&ct<=R.height-K&&z.readPixels(Z,ct,ft,K,Jt.convert(le),Jt.convert(ae),Ut)}finally{const Zt=k!==null?Kt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(z.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ct,ft,K,Ut,It){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Xt=Xt[It]),Xt)if(Z>=0&&Z<=R.width-ft&&ct>=0&&ct<=R.height-K){jt.bindFramebuffer(z.FRAMEBUFFER,Xt);const Zt=R.texture,le=Zt.format,ae=Zt.type;if(!qt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ne),z.bufferData(z.PIXEL_PACK_BUFFER,Ut.byteLength,z.STREAM_READ),z.readPixels(Z,ct,ft,K,Jt.convert(le),Jt.convert(ae),0);const xe=k!==null?Kt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(z.FRAMEBUFFER,xe);const De=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await X1(z,De,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ne),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ut),z.deleteBuffer(ne),z.deleteSync(De),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ct=0){const ft=Math.pow(2,-ct),K=Math.floor(R.image.width*ft),Ut=Math.floor(R.image.height*ft),It=Z!==null?Z.x:0,Xt=Z!==null?Z.y:0;O.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ct,0,0,It,Xt,K,Ut),jt.unbindTexture()};const Wl=z.createFramebuffer(),Xi=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,ct=null,ft=null,K=0,Ut=null){Ut===null&&(K!==0?(Pc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=K,K=0):Ut=0);let It,Xt,Zt,le,ae,ne,xe,De,Ze;const Te=R.isCompressedTexture?R.mipmaps[Ut]:R.image;if(ct!==null)It=ct.max.x-ct.min.x,Xt=ct.max.y-ct.min.y,Zt=ct.isBox3?ct.max.z-ct.min.z:1,le=ct.min.x,ae=ct.min.y,ne=ct.isBox3?ct.min.z:0;else{const hn=Math.pow(2,-K);It=Math.floor(Te.width*hn),Xt=Math.floor(Te.height*hn),R.isDataArrayTexture?Zt=Te.depth:R.isData3DTexture?Zt=Math.floor(Te.depth*hn):Zt=1,le=0,ae=0,ne=0}ft!==null?(xe=ft.x,De=ft.y,Ze=ft.z):(xe=0,De=0,Ze=0);const be=Jt.convert(Z.format),re=Jt.convert(Z.type);let Je;Z.isData3DTexture?(O.setTexture3D(Z,0),Je=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(O.setTexture2DArray(Z,0),Je=z.TEXTURE_2D_ARRAY):(O.setTexture2D(Z,0),Je=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ce=z.getParameter(z.UNPACK_ROW_LENGTH),Dn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ra=z.getParameter(z.UNPACK_SKIP_PIXELS),We=z.getParameter(z.UNPACK_SKIP_ROWS),Wi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Te.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Te.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,le),z.pixelStorei(z.UNPACK_SKIP_ROWS,ae),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ne);const ke=R.isDataArrayTexture||R.isData3DTexture,Un=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const hn=Kt.get(R),xn=Kt.get(Z),bn=Kt.get(hn.__renderTarget),Ui=Kt.get(xn.__renderTarget);jt.bindFramebuffer(z.READ_FRAMEBUFFER,bn.__webglFramebuffer),jt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Yi=0;Yi<Zt;Yi++)ke&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kt.get(R).__webglTexture,K,ne+Yi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kt.get(Z).__webglTexture,Ut,Ze+Yi)),z.blitFramebuffer(le,ae,It,Xt,xe,De,It,Xt,z.DEPTH_BUFFER_BIT,z.NEAREST);jt.bindFramebuffer(z.READ_FRAMEBUFFER,null),jt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Kt.has(R)){const hn=Kt.get(R),xn=Kt.get(Z);jt.bindFramebuffer(z.READ_FRAMEBUFFER,Wl),jt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Xi);for(let bn=0;bn<Zt;bn++)ke?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hn.__webglTexture,K,ne+bn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hn.__webglTexture,K),Un?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xn.__webglTexture,Ut,Ze+bn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xn.__webglTexture,Ut),K!==0?z.blitFramebuffer(le,ae,It,Xt,xe,De,It,Xt,z.COLOR_BUFFER_BIT,z.NEAREST):Un?z.copyTexSubImage3D(Je,Ut,xe,De,Ze+bn,le,ae,It,Xt):z.copyTexSubImage2D(Je,Ut,xe,De,le,ae,It,Xt);jt.bindFramebuffer(z.READ_FRAMEBUFFER,null),jt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Je,Ut,xe,De,Ze,It,Xt,Zt,be,re,Te.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Je,Ut,xe,De,Ze,It,Xt,Zt,be,Te.data):z.texSubImage3D(Je,Ut,xe,De,Ze,It,Xt,Zt,be,re,Te):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ut,xe,De,It,Xt,be,re,Te.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ut,xe,De,Te.width,Te.height,be,Te.data):z.texSubImage2D(z.TEXTURE_2D,Ut,xe,De,It,Xt,be,re,Te);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ce),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ra),z.pixelStorei(z.UNPACK_SKIP_ROWS,We),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Wi),Ut===0&&Z.generateMipmaps&&z.generateMipmap(Je),jt.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,ct=null,ft=null,K=0){return Pc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,ct,ft,K)},this.initRenderTarget=function(R){Kt.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){P=0,F=0,k=null,jt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ga}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ne._getUnpackColorSpace()}}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o2=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Rx=i=>{const t=o2(i);return t.charAt(0).toUpperCase()+t.slice(1)},Ky=(...i)=>i.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),l2=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=Yt.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:u,iconNode:c,...h},p)=>Yt.createElement("svg",{ref:p,...u2,width:t,height:t,stroke:i,strokeWidth:r?Number(n)*24/Number(t):n,className:Ky("lucide",o),...!u&&!l2(h)&&{"aria-hidden":"true"},...h},[...c.map(([d,g])=>Yt.createElement(d,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=(i,t)=>{const n=Yt.forwardRef(({className:r,...o},u)=>Yt.createElement(c2,{ref:u,iconNode:t,className:Ky(`lucide-${s2(Rx(i))}`,`lucide-${i}`,r),...o}));return n.displayName=Rx(i),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],h2=Fl("bookmark",f2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],p2=Fl("eye",d2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],g2=Fl("heart",m2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],v2=Fl("message-circle",_2);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],y2=Fl("repeat",x2);function ap(i){const t=i.toLocaleString("en-US",{month:"long"}),n=i.getDate(),r=i.getFullYear(),o=n%10===1&&n!==11?"st":n%10===2&&n!==12?"nd":n%10===3&&n!==13?"rd":"th";let u=i.getHours();const c=u>=12?"PM":"AM";u=u%12||12;const h=String(i.getMinutes()).padStart(2,"0"),p=String(i.getSeconds()).padStart(2,"0");return`${t} ${n}${o}, ${r}, ${String(u).padStart(2,"0")}:${h}:${p} ${c}`}const S2=["#440154","#472D7B","#3B518B","#2C718E","#21918C","#27AD81","#5CC863","#BADC31"],M2=["#00204C","#143362","#1D5796","#2C75A0","#3D8C8E","#60B56B","#AAD338","#FDE725"],E2=["#0D0887","#4B03A5","#7A04A6","#A61386","#D4316E","#F1605D","#FD8C3E","#FCCE25"],T2=["#000004","#1B0C41","#4A0C6B","#781C6D","#A52C60","#CF4446","#ED6925","#FB9B06"];function Tc(i,t){return Array.from({length:t},(n,r)=>{const o=Math.round(r*(i.length-1)/(t-1));return i[o]})}const Cx={default:i=>Tc(S2,i),protanopia:i=>Tc(M2,i),deuteranopia:i=>Tc(E2,i),tritanopia:i=>Tc(T2,i),party:()=>[]},b2={FDP:"#FFED00","B90/GRÜNE":"#1FAF12",SPD:"#FF0000",CDU:"#000000",AfD:"#009DE0",BSW:"#fca311",CSU:"#415a77",LINKE:"#DF007D"},A2=({onSwitch:i})=>{const t=Yt.useRef(null),[n,r]=Yt.useState(!0),[o,u]=Yt.useState(null),[c,h]=Yt.useState(!1),[p,d]=Yt.useState(0),[g,v]=Yt.useState(!1),[_,x]=Yt.useState(null),[E,T]=Yt.useState(1),[S,y]=Yt.useState("default"),[L,N]=Yt.useState("en"),w=Yt.useRef(null),I=Yt.useRef(null),P=Yt.useRef(null),F=Yt.useRef(null),k=Yt.useRef({x:0,y:0}),U=Yt.useRef({x:0,y:0}),C=Yt.useRef(0),H=Yt.useRef(2e3),j=Yt.useRef([]),tt=Yt.useRef({min:null,max:null}),mt=Yt.useRef(null),pt=Yt.useRef(null),[B,Y]=Yt.useState(null),W=Array.from({length:20},(it,Tt)=>Tt+1),dt={en:{titleLine1:"From Tweet to Trend:",titleLine2:"Visualizing Political Retweet Networks",simulation:"Retweet Simulation",currentTime:"Current Time:",originalBy:"Original tweet by",selectPost:"Select a post to see its retweet activity:",legend:"LEGEND",colorScheme:"Color Scheme",nodeSize:"Node Size",play:"Play",pause:"Pause",switchViz:"Explore Bursts & Network",return:"Return",earliestLatest:"Earliest → Latest",lowFollower:"Low Follower Count",highFollower:"High Follower Count",optPartyColors:"Political party colors",optDefault:"Default",optProtanopia:"Protanopia-friendly",optDeuteranopia:"Deuteranopia-friendly",optTritanopia:"Tritanopia-friendly",titles:{1:"Attention Please",2:"Conservatives serve Europe",3:"Hope for Tomorrow",4:"Election Allegations",5:"Catalyst for Change",6:"Show Your Colors",7:"Advent Interrupted",8:"For Reasons",9:"Suspending Documentation",10:"Tax Relief",11:"Coalition Opportunity",12:"Small Shifts, Big Impact",13:"Voting Paradox",14:"Economic Turnaround Now",15:"",16:"",17:"",18:"",19:"",20:""}},de:{titleLine1:"Vom Tweet zum Trend:",titleLine2:"Politische Retweet-Netzwerke visualisieren",simulation:"Simulation der Retweets",currentTime:"Aktuelle Zeit:",originalBy:"Original-Tweet von",selectPost:"Wählen Sie einen Beitrag, um Retweet-Aktivität zu sehen:",legend:"LEGENDE",colorScheme:"Farb-Schema",nodeSize:"Knotengröße",play:"Abspielen",pause:"Pause",switchViz:"Bursts & Netzwerk erkunden",return:"Return",earliestLatest:"Früheste → Neueste",lowFollower:"Geringe Follower-Zahl",highFollower:"Hohe Follower-Zahl",optPartyColors:"Parteifarben",optDefault:"Standard",optProtanopia:"Protanopie-freundlich",optDeuteranopia:"Deuteranopie-freundlich",optTritanopia:"Tritanopie-freundlich",titles:{1:"Aufmerksamkeit erbeten",2:"Konservative dienen Europa",3:"Hoffnung für morgen",4:"Wahlvorwürfe",5:"Katalysator für Veränderung",6:"Zeigt eure Farben",7:"Unterbrochener Advent",8:"Aus Gründen",9:"Aussetzung der Dokumentation",10:"Steuererleichterungen",11:"Koalitionschance",12:"Kleine Veränderungen, große Wirkung",13:"Wahlparadox",14:"Wirtschaftliche Trendwende jetzt",15:"",16:"",17:"",18:"",19:"",20:""}}};Yt.useEffect(()=>{r(!0),fetch(`/data/selected_retweets_${E}.json`).then(it=>it.json()).then(it=>{const Tt=[...it].sort((St,et)=>new Date(St.creation_time)-new Date(et.creation_time));x(Tt);const Ct=new Date(Tt[0].creation_time);u(ap(Ct)),r(!1)}).catch(it=>{console.error("Error loading JSON data:",it),r(!1)})},[E]),Yt.useEffect(()=>{fetch("/data/selected_retweets_original_tweets.json").then(it=>it.json()).then(it=>{const Tt=it.reduce((Ct,St)=>(Ct[St.platform_post_id]=St,Ct),{});Y(Tt)}).catch(it=>{console.error("Error loading original tweet details:",it)})},[]);const D=_&&B&&_[0]?B[_[0].shared_post_id]:null;Yt.useEffect(()=>{if(!_)return;console.log(_);const it=new By;it.background=new Me(0),I.current=it;const Tt=new ni(75,window.innerWidth/window.innerHeight,.1,1e3);Tt.position.z=15,P.current=Tt;const Ct=new Zy({antialias:!0});Ct.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(Ct.domElement),F.current=Ct;const St=ot=>{ot.preventDefault();const Pt=.05;P.current.position.z+=ot.deltaY*Pt,P.current.position.z=Math.max(5,Math.min(50,P.current.position.z))};Ct.domElement.addEventListener("wheel",St,{passive:!1});const et=new Ys;it.add(et);const Rt=(ot,Pt,Nt=0)=>{const Lt=document.createElement("canvas"),ce=Lt.getContext("2d");Lt.width=256,Lt.height=128,ce.font="12px Arial",ce.fillStyle=`rgba(${Nt>>16&255}, ${Nt>>8&255}, ${Nt&255}, 1.0)`,ce.fillText(ot,0,64);const Dt=new jc(Lt),Gt=new Cm({map:Dt}),$t=new Iy(Gt);return $t.position.set(Pt.x-2,Pt.y+.2,Pt.z),$t.scale.set(5,2.5,1),$t},Q=new ro(1,32,32),Bt=new io({color:4886754}),z=new ii(Q,Bt);z.visible=!0,et.add(z),mt.current=z;const te=Rt("Original Tweet by @roberthabeck",new at(0,0,0),1942002);te.visible=!0,et.add(te),pt.current=te;let Ht;S==="party"?Ht=_.map(ot=>ot.party_color):Ht=Cx[S](_.length);const qt=[],jt=new Date(_[0].creation_time),he=new Date(_[_.length-1].creation_time);tt.current={min:jt,max:he},_.forEach((ot,Pt)=>{const Nt=new Date(ot.creation_time),Lt=Pt/_.length*Math.PI*2,ce=7,Dt=Math.cos(Lt)*ce,Gt=Math.sin(Lt)*ce,zt=.3+parseFloat(ot.follower_count)/1e6*.7,Ot=new ro(zt,32,32),ie=Ht[Pt],Jt=new io({color:new Me(ie),transparent:!0,opacity:0}),me=new ii(Ot,Jt);me.position.set(Dt,Gt,0),me.userData={data:ot,time:Nt,visible:!1};const X=Rt(ot.dboes_name,new at(Dt,Gt,0),16777215);X.visible=!1;const Ft=new Dm({color:new Me(ie),transparent:!0,opacity:0}),ht=new gi().setFromPoints([new at(0,0,0),new at(Dt,Gt,0)]),yt=new Gy(ht,Ft);et.add(me),et.add(X),et.add(yt),qt.push({node:me,label:X,line:yt,time:Nt})}),j.current=qt,u(ap(jt)),r(!1);const Kt=ot=>{document.addEventListener("mousemove",O),document.addEventListener("mouseup",b),k.current.x=ot.clientX,k.current.y=ot.clientY},O=ot=>{const Pt=ot.clientX-k.current.x,Nt=ot.clientY-k.current.y;k.current.x=ot.clientX,k.current.y=ot.clientY,U.current.y+=Pt*.01,U.current.x+=Nt*.01},b=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",b)};Ct.domElement.addEventListener("mousedown",Kt);const st=()=>{P.current&&F.current&&(P.current.aspect=window.innerWidth/window.innerHeight,P.current.updateProjectionMatrix(),F.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",st),Ct.render(it,Tt);const Mt=()=>{const ot=t.current.clientWidth,Pt=t.current.clientHeight;Ct.setSize(ot,Pt),Tt.aspect=ot/Pt,Tt.updateProjectionMatrix()};window.addEventListener("resize",Mt),Mt();const wt=()=>{et&&(et.rotation.x+=(U.current.x-et.rotation.x)*.05,et.rotation.y+=(U.current.y-et.rotation.y)*.05),F.current&&I.current&&P.current&&F.current.render(I.current,P.current),w.current=requestAnimationFrame(wt)};return w.current=requestAnimationFrame(wt),()=>{window.removeEventListener("resize",Mt),window.removeEventListener("resize",st),cancelAnimationFrame(w.current),Ct.domElement.removeEventListener("mousedown",Kt),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",b),t.current&&Ct.domElement&&t.current.removeChild(Ct.domElement),Q.dispose(),Bt.dispose(),qt.forEach(ot=>{ot.node.geometry&&ot.node.geometry.dispose(),ot.node.material&&ot.node.material.dispose(),ot.line.geometry&&ot.line.geometry.dispose(),ot.line.material&&ot.line.material.dispose()})}},[_,S]),Yt.useEffect(()=>{let it;return c&&(C.current=Date.now(),mt.current&&(mt.current.visible=!0),pt.current&&(pt.current.visible=!0),it=setInterval(()=>{const{min:Tt,max:Ct}=tt.current;if(!Tt||!Ct)return;const et=(Date.now()-C.current)*H.current,Rt=new Date(Tt.getTime()+et),Q=Ct.getTime()-Tt.getTime(),Bt=Rt.getTime()-Tt.getTime(),z=Math.min(Bt/Q*2200,100);u(ap(Rt)),d(z),j.current.forEach(te=>{if(Rt>=te.time&&!te.node.userData.visible){te.node.material.opacity=1,te.label.visible=!0,te.line.material.opacity=.7,te.node.userData.visible=!0;const Ht=new at(1.5,1.5,1.5);te.node.scale.copy(Ht),setTimeout(()=>{te.node.scale.set(1,1,1)},300)}}),Rt>=Ct&&(h(!1),clearInterval(it))},100)),()=>{it&&clearInterval(it)}},[c]),Yt.useEffect(()=>{if(!_)return;const it=new ky,Tt=new Ee,Ct=St=>{Tt.x=St.clientX/window.innerWidth*2-1,Tt.y=-(St.clientY/window.innerHeight)*2+1,it.setFromCamera(Tt,P.current);const et=j.current.map(Q=>Q.node),Rt=it.intersectObjects(et);if(Rt.length>0){const Q=Rt[0].object;j.current.forEach(Bt=>{Bt.node===Q?(Bt.node.material.opacity=1,Bt.label.material&&(Bt.label.material.opacity=1)):(Bt.node.material.opacity=.3,Bt.label.material&&(Bt.label.material.opacity=.3))})}else j.current.forEach(Q=>{Q.node.userData.visible?(Q.node.material.opacity=1,Q.label.material&&(Q.label.material.opacity=1)):(Q.node.material.opacity=0,Q.label.material&&(Q.label.material.opacity=0))})};return window.addEventListener("mousemove",Ct),()=>{window.removeEventListener("mousemove",Ct)}},[_]);const nt=()=>{c?h(!1):(p>=100&&(j.current.forEach(it=>{it.node.material.opacity=0,it.label.visible=!1,it.line.material.opacity=0,it.node.userData.visible=!1}),u(tt.current.min.toLocaleString()),d(0)),h(!0))};Yt.useEffect(()=>{mt.current&&pt.current&&(mt.current.visible=!0,pt.current.visible=!0)},[E]),Yt.useEffect(()=>{var it;if(_&&B&&((it=_[0])!=null&&it.shared_post_id)&&pt.current){const Tt=_[0].shared_post_id,Ct=B[Tt];if(Ct){const et=`Original Tweet by @${Ct.platform_post_owner_name}`,Rt=document.createElement("canvas"),Q=Rt.getContext("2d");Rt.width=256,Rt.height=128,Q.font="12px Arial",Q.fillStyle="rgba(29,161,242,1.0)",Q.fillText(et,0,64);const Bt=new jc(Rt);pt.current.material.map=Bt,pt.current.material.needsUpdate=!0}}},[_,B]);const At=W.map(it=>({id:it,label:dt[L].titles[it]||""})),xt=`linear-gradient(to right, ${(S==="party"?[...new Set(_.map(it=>it.party_color))]:Cx[S](7)).join(", ")})`;return gt.jsx("div",{className:"w-full h-full relative bg-black",children:gt.jsxs("div",{className:"mb-10 md:mb-0",children:[gt.jsx("div",{ref:t,className:"w-full h-[50vh] mt-[50vh] md:h-screen md:mt-0"}),gt.jsxs("h2",{className:"absolute top-20 -mt-5 md:top-5 md:mt-0 left-10",children:[gt.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:dt[L].titleLine1}),gt.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:dt[L].titleLine2})]}),gt.jsx("div",{className:"absolute top-4 right-10 flex space-x-2",children:["en","de"].map(it=>gt.jsx("button",{onClick:()=>N(it),className:`px-3 py-1 rounded border ${L===it?"bg-cyan-500 text-black border-cyan-500":"bg-black text-white border-gray-600 hover:border-cyan-500"} transition`,children:it.toUpperCase()},it))}),gt.jsxs("div",{className:`
       relative            /* mobile: in-flow */
       mb-4                /* mobile: gap below */
       left-10
       w-[31rem]
       md:absolute md:top-40 md:left-10  /* desktop: back to absolute */
       bg-black w-[30rem] p-6 rounded-lg border border-cyan-500 shadow-lg
     `,children:[gt.jsx("div",{className:"font-bold mb-2 text-white text-xl",children:dt[L].simulation}),gt.jsxs("div",{className:"mb-2 text-white",children:[dt[L].currentTime," ",o]}),gt.jsx("div",{className:"w-64 h-2 bg-gray-800 rounded-full mb-2",children:gt.jsx("div",{className:"h-full bg-cyan-500 rounded-full",style:{width:`${p}%`}})}),D&&gt.jsxs("div",{className:"text-white text-sm",children:[dt[L].originalBy," @",D.platform_post_owner_name," –"," ",_.length,_.length>1?" Accounts":" Account"]})]}),gt.jsxs("div",{className:`
        absolute top-[200px] md:top-[440px] 
        left-0 right-0 mx-auto
        md:right-10 md:left-auto
        text-left md:text-right
        py-2  
        w-full max-w-sm md:max-w-none
        `,children:[gt.jsx("div",{className:"mt-2 text-white text-sm sm:text-md md:text-lg",children:dt[L].selectPost}),gt.jsx("div",{className:"text-cyan-500 grid grid-cols-2 gap-2 md:flex md:flex-col md:items-end",children:At.map(it=>gt.jsx("span",{onClick:()=>T(it.id),className:`
          cursor-pointer
          ${E===it.id?"font-bold text-lg sm:text-xl md:text-2xl":"text-sm sm:text-md md:text-lg"}
        `,children:it.label},it.id))})]}),gt.jsxs("div",{className:`
    absolute left-1/2 transform -translate-x-1/2 top-80 mt-60
    flex space-x-4
    md:block md:transform-none md:left-auto md:translate-x-0 md:top-auto md:mt-0
  `,children:[gt.jsx("button",{onClick:nt,className:`
      w-24 md:w-32
      bg-black text-white font-bold
      py-2 md:py-3 px-2 md:px-6
      rounded-lg border border-cyan-500
      shadow-lg hover:bg-gray-900
      transition-colors
      ${c?"":"pulse-once"}
      md:absolute md:bottom-10 md:left-10 md:ml-0
    `,children:c?dt[L].pause:dt[L].play}),gt.jsx("button",{onClick:i,className:`
      w-64 md:w-96
      bg-black text-white font-bold
      py-2 md:py-3 px-4 md:px-6
      rounded-lg border border-cyan-500
      shadow-lg hover:bg-gray-900
      transition-colors
      ${c?"pulse-once":""}
      md:absolute md:bottom-10 md:left-40 md:ml-0
    `,children:dt[L].switchViz})]}),gt.jsxs("div",{className:`
    relative mt-4
   w-full max-w-[30rem] mx-auto
    md:absolute md:top-80 md:left-10 md:w-[31rem]
    bg-gray-900 bg-opacity-80 p-4 rounded-lg border border-cyan-500 shadow-xl text-white
  `,children:[" ",gt.jsx("div",{className:"font-mono mb-4 text-sm sm:text-md md:text-md lg:text-md xl:text-md 2xl:text-md",children:_&&_[0]&&_[0].text.replace(/^RT @[A-Za-z0-9_]+:\s*/,"").replace(/https:\/\/.*/,"")}),D&&gt.jsxs("div",{className:"flex justify-between text-gray-400 text-xs sm:text-sm",children:[gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(p2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.views})]}),gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(v2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.comment_count})]}),gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(y2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.share_count})]}),gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(g2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.like_count})]}),gt.jsxs("span",{className:"flex items-center space-x-1",children:[gt.jsx(h2,{className:"w-4 h-4 md:w-5 md:h-5"}),gt.jsx("span",{children:D.bookmark_count})]})]})]}),gt.jsxs("div",{className:` relative            /* mobile: in-flow */
       mb-4                /* mobile: gap below */
       mt-5
    ml-10
    w-[30rem]
       md:absolute md:right-10 md:top-20 -mt-5 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80`,children:[gt.jsx("div",{className:"font-bold mb-2 text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",children:dt[L].legend}),gt.jsx("hr",{className:"border-t-2 border-white my-2"}),gt.jsx("div",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:dt[L].colorScheme}),gt.jsxs("div",{className:"text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[gt.jsxs("div",{className:"mb-3",children:[gt.jsx("div",{className:"mb-3",children:gt.jsxs("select",{value:S,onChange:it=>y(it.target.value),className:"p-2 bg-gray-800 text-white rounded",children:[gt.jsx("option",{value:"party",children:dt[L].optPartyColors}),gt.jsx("option",{value:"default",children:dt[L].optDefault}),gt.jsx("option",{value:"protanopia",children:dt[L].optProtanopia}),gt.jsx("option",{value:"deuteranopia",children:dt[L].optDeuteranopia}),gt.jsx("option",{value:"tritanopia",children:dt[L].optTritanopia})]})}),S==="party"?gt.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(b2).map(([it,Tt])=>gt.jsxs("div",{className:"flex items-center space-x-2",children:[gt.jsx("div",{className:"w-4 h-4 border border-gray-600 rounded-sm",style:{backgroundColor:Tt}}),gt.jsx("span",{className:"text-white text-sm",children:it})]},it))}):gt.jsxs(gt.Fragment,{children:[gt.jsx("div",{className:"w-full h-4 rounded",style:{background:xt}}),gt.jsx("p",{className:"mt-1 text-white",children:dt[L].earliestLatest})]})]}),gt.jsxs("div",{children:[gt.jsx("p",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:dt[L].nodeSize}),gt.jsxs("div",{className:"flex items-center space-x-2 text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[gt.jsx("div",{className:"w-4 h-4 bg-white ml-2 mr-2 rounded-full border border-cyan-500"}),gt.jsx("span",{children:dt[L].lowFollower})]}),gt.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[gt.jsx("div",{className:"w-8 h-8 bg-white rounded-full border border-cyan-500"}),gt.jsx("span",{children:dt[L].highFollower})]})]})]})]})]})})};function Bc(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function w2(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function Nm(i){let t,n,r;i.length!==2?(t=Bc,n=(h,p)=>Bc(i(h),p),r=(h,p)=>i(h)-p):(t=i===Bc||i===w2?i:R2,n=i,r=i);function o(h,p,d=0,g=h.length){if(d<g){if(t(p,p)!==0)return g;do{const v=d+g>>>1;n(h[v],p)<0?d=v+1:g=v}while(d<g)}return d}function u(h,p,d=0,g=h.length){if(d<g){if(t(p,p)!==0)return g;do{const v=d+g>>>1;n(h[v],p)<=0?d=v+1:g=v}while(d<g)}return d}function c(h,p,d=0,g=h.length){const v=o(h,p,d,g-1);return v>d&&r(h[v-1],p)>-r(h[v],p)?v-1:v}return{left:o,center:c,right:u}}function R2(){return 0}function C2(i){return i===null?NaN:+i}const D2=Nm(Bc),Qy=D2.right;Nm(C2).center;function U2(i,t){let n=0;for(let r of i)r!=null&&(r=+r)>=r&&++n;return n}function Fc(i,t){let n,r;if(t===void 0)for(const o of i)o!=null&&(n===void 0?o>=o&&(n=r=o):(n>o&&(n=o),r<o&&(r=o)));else{let o=-1;for(let u of i)(u=t(u,++o,i))!=null&&(n===void 0?u>=u&&(n=r=u):(n>u&&(n=u),r<u&&(r=u)))}return[n,r]}function N2(i){return i}var L2=Array.prototype,O2=L2.slice;function rp(i){return()=>i}const P2=Math.sqrt(50),z2=Math.sqrt(10),B2=Math.sqrt(2);function Zc(i,t,n){const r=(t-i)/Math.max(0,n),o=Math.floor(Math.log10(r)),u=r/Math.pow(10,o),c=u>=P2?10:u>=z2?5:u>=B2?2:1;let h,p,d;return o<0?(d=Math.pow(10,-o)/c,h=Math.round(i*d),p=Math.round(t*d),h/d<i&&++h,p/d>t&&--p,d=-d):(d=Math.pow(10,o)*c,h=Math.round(i/d),p=Math.round(t/d),h*d<i&&++h,p*d>t&&--p),p<h&&.5<=n&&n<2?Zc(i,t,n*2):[h,p,d]}function $y(i,t,n){if(t=+t,i=+i,n=+n,!(n>0))return[];if(i===t)return[i];const r=t<i,[o,u,c]=r?Zc(t,i,n):Zc(i,t,n);if(!(u>=o))return[];const h=u-o+1,p=new Array(h);if(r)if(c<0)for(let d=0;d<h;++d)p[d]=(u-d)/-c;else for(let d=0;d<h;++d)p[d]=(u-d)*c;else if(c<0)for(let d=0;d<h;++d)p[d]=(o+d)/-c;else for(let d=0;d<h;++d)p[d]=(o+d)*c;return p}function so(i,t,n){return t=+t,i=+i,n=+n,Zc(i,t,n)[2]}function sm(i,t,n){t=+t,i=+i,n=+n;const r=t<i,o=r?so(t,i,n):so(i,t,n);return(r?-1:1)*(o<0?1/-o:o)}function F2(i,t,n){let r;for(;;){const o=so(i,t,n);if(o===r||o===0||!isFinite(o))return[i,t];o>0?(i=Math.floor(i/o)*o,t=Math.ceil(t/o)*o):o<0&&(i=Math.ceil(i*o)/o,t=Math.floor(t*o)/o),r=o}}function I2(i){return Math.max(1,Math.ceil(Math.log(U2(i))/Math.LN2)+1)}function H2(){var i=N2,t=Fc,n=I2;function r(o){Array.isArray(o)||(o=Array.from(o));var u,c=o.length,h,p,d=new Array(c);for(u=0;u<c;++u)d[u]=i(o[u],u,o);var g=t(d),v=g[0],_=g[1],x=n(d,v,_);if(!Array.isArray(x)){const N=_,w=+x;if(t===Fc&&([v,_]=F2(v,_,w)),x=$y(v,_,w),x[0]<=v&&(p=so(v,_,w)),x[x.length-1]>=_)if(N>=_&&t===Fc){const I=so(v,_,w);isFinite(I)&&(I>0?_=(Math.floor(_/I)+1)*I:I<0&&(_=(Math.ceil(_*-I)+1)/-I))}else x.pop()}for(var E=x.length,T=0,S=E;x[T]<=v;)++T;for(;x[S-1]>_;)--S;(T||S<E)&&(x=x.slice(T,S),E=S-T);var y=new Array(E+1),L;for(u=0;u<=E;++u)L=y[u]=[],L.x0=u>0?x[u-1]:v,L.x1=u<E?x[u]:_;if(isFinite(p)){if(p>0)for(u=0;u<c;++u)(h=d[u])!=null&&v<=h&&h<=_&&y[Math.min(E,Math.floor((h-v)/p))].push(o[u]);else if(p<0){for(u=0;u<c;++u)if((h=d[u])!=null&&v<=h&&h<=_){const N=Math.floor((v-h)*p);y[Math.min(E,N+(x[N]<=h))].push(o[u])}}}else for(u=0;u<c;++u)(h=d[u])!=null&&v<=h&&h<=_&&y[Qy(x,h,0,E)].push(o[u]);return y}return r.value=function(o){return arguments.length?(i=typeof o=="function"?o:rp(o),r):i},r.domain=function(o){return arguments.length?(t=typeof o=="function"?o:rp([o[0],o[1]]),r):t},r.thresholds=function(o){return arguments.length?(n=typeof o=="function"?o:rp(Array.isArray(o)?O2.call(o):o),r):n},r}function Dx(i,t){let n;if(t===void 0)for(const r of i)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let o of i)(o=t(o,++r,i))!=null&&(n<o||n===void 0&&o>=o)&&(n=o)}return n}function G2(i,t){let n;for(const r of i)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function V2(i){return i}var sp=1,op=2,om=3,El=4,Ux=1e-6;function k2(i){return"translate("+i+",0)"}function X2(i){return"translate(0,"+i+")"}function W2(i){return t=>+i(t)}function Y2(i,t){return t=Math.max(0,i.bandwidth()-t*2)/2,i.round()&&(t=Math.round(t)),n=>+i(n)+t}function q2(){return!this.__axis}function Jy(i,t){var n=[],r=null,o=null,u=6,c=6,h=3,p=typeof window<"u"&&window.devicePixelRatio>1?0:.5,d=i===sp||i===El?-1:1,g=i===El||i===op?"x":"y",v=i===sp||i===om?k2:X2;function _(x){var E=r??(t.ticks?t.ticks.apply(t,n):t.domain()),T=o??(t.tickFormat?t.tickFormat.apply(t,n):V2),S=Math.max(u,0)+h,y=t.range(),L=+y[0]+p,N=+y[y.length-1]+p,w=(t.bandwidth?Y2:W2)(t.copy(),p),I=x.selection?x.selection():x,P=I.selectAll(".domain").data([null]),F=I.selectAll(".tick").data(E,t).order(),k=F.exit(),U=F.enter().append("g").attr("class","tick"),C=F.select("line"),H=F.select("text");P=P.merge(P.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),F=F.merge(U),C=C.merge(U.append("line").attr("stroke","currentColor").attr(g+"2",d*u)),H=H.merge(U.append("text").attr("fill","currentColor").attr(g,d*S).attr("dy",i===sp?"0em":i===om?"0.71em":"0.32em")),x!==I&&(P=P.transition(x),F=F.transition(x),C=C.transition(x),H=H.transition(x),k=k.transition(x).attr("opacity",Ux).attr("transform",function(j){return isFinite(j=w(j))?v(j+p):this.getAttribute("transform")}),U.attr("opacity",Ux).attr("transform",function(j){var tt=this.parentNode.__axis;return v((tt&&isFinite(tt=tt(j))?tt:w(j))+p)})),k.remove(),P.attr("d",i===El||i===op?c?"M"+d*c+","+L+"H"+p+"V"+N+"H"+d*c:"M"+p+","+L+"V"+N:c?"M"+L+","+d*c+"V"+p+"H"+N+"V"+d*c:"M"+L+","+p+"H"+N),F.attr("opacity",1).attr("transform",function(j){return v(w(j)+p)}),C.attr(g+"2",d*u),H.attr(g,d*S).text(T),I.filter(q2).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===op?"start":i===El?"end":"middle"),I.each(function(){this.__axis=w})}return _.scale=function(x){return arguments.length?(t=x,_):t},_.ticks=function(){return n=Array.from(arguments),_},_.tickArguments=function(x){return arguments.length?(n=x==null?[]:Array.from(x),_):n.slice()},_.tickValues=function(x){return arguments.length?(r=x==null?null:Array.from(x),_):r&&r.slice()},_.tickFormat=function(x){return arguments.length?(o=x,_):o},_.tickSize=function(x){return arguments.length?(u=c=+x,_):u},_.tickSizeInner=function(x){return arguments.length?(u=+x,_):u},_.tickSizeOuter=function(x){return arguments.length?(c=+x,_):c},_.tickPadding=function(x){return arguments.length?(h=+x,_):h},_.offset=function(x){return arguments.length?(p=+x,_):p},_}function j2(i){return Jy(om,i)}function Z2(i){return Jy(El,i)}var K2={value:()=>{}};function tS(){for(var i=0,t=arguments.length,n={},r;i<t;++i){if(!(r=arguments[i]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Ic(n)}function Ic(i){this._=i}function Q2(i,t){return i.trim().split(/^|\s+/).map(function(n){var r="",o=n.indexOf(".");if(o>=0&&(r=n.slice(o+1),n=n.slice(0,o)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Ic.prototype=tS.prototype={constructor:Ic,on:function(i,t){var n=this._,r=Q2(i+"",n),o,u=-1,c=r.length;if(arguments.length<2){for(;++u<c;)if((o=(i=r[u]).type)&&(o=$2(n[o],i.name)))return o;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++u<c;)if(o=(i=r[u]).type)n[o]=Nx(n[o],i.name,t);else if(t==null)for(o in n)n[o]=Nx(n[o],i.name,null);return this},copy:function(){var i={},t=this._;for(var n in t)i[n]=t[n].slice();return new Ic(i)},call:function(i,t){if((o=arguments.length-2)>0)for(var n=new Array(o),r=0,o,u;r<o;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(u=this._[i],r=0,o=u.length;r<o;++r)u[r].value.apply(t,n)},apply:function(i,t,n){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var r=this._[i],o=0,u=r.length;o<u;++o)r[o].value.apply(t,n)}};function $2(i,t){for(var n=0,r=i.length,o;n<r;++n)if((o=i[n]).name===t)return o.value}function Nx(i,t,n){for(var r=0,o=i.length;r<o;++r)if(i[r].name===t){i[r]=K2,i=i.slice(0,r).concat(i.slice(r+1));break}return n!=null&&i.push({name:t,value:n}),i}var lm="http://www.w3.org/1999/xhtml";const Lx={svg:"http://www.w3.org/2000/svg",xhtml:lm,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function pf(i){var t=i+="",n=t.indexOf(":");return n>=0&&(t=i.slice(0,n))!=="xmlns"&&(i=i.slice(n+1)),Lx.hasOwnProperty(t)?{space:Lx[t],local:i}:i}function J2(i){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===lm&&t.documentElement.namespaceURI===lm?t.createElement(i):t.createElementNS(n,i)}}function tC(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function eS(i){var t=pf(i);return(t.local?tC:J2)(t)}function eC(){}function Lm(i){return i==null?eC:function(){return this.querySelector(i)}}function nC(i){typeof i!="function"&&(i=Lm(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var u=t[o],c=u.length,h=r[o]=new Array(c),p,d,g=0;g<c;++g)(p=u[g])&&(d=i.call(p,p.__data__,g,u))&&("__data__"in p&&(d.__data__=p.__data__),h[g]=d);return new ai(r,this._parents)}function iC(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function aC(){return[]}function nS(i){return i==null?aC:function(){return this.querySelectorAll(i)}}function rC(i){return function(){return iC(i.apply(this,arguments))}}function sC(i){typeof i=="function"?i=rC(i):i=nS(i);for(var t=this._groups,n=t.length,r=[],o=[],u=0;u<n;++u)for(var c=t[u],h=c.length,p,d=0;d<h;++d)(p=c[d])&&(r.push(i.call(p,p.__data__,d,c)),o.push(p));return new ai(r,o)}function iS(i){return function(){return this.matches(i)}}function aS(i){return function(t){return t.matches(i)}}var oC=Array.prototype.find;function lC(i){return function(){return oC.call(this.children,i)}}function uC(){return this.firstElementChild}function cC(i){return this.select(i==null?uC:lC(typeof i=="function"?i:aS(i)))}var fC=Array.prototype.filter;function hC(){return Array.from(this.children)}function dC(i){return function(){return fC.call(this.children,i)}}function pC(i){return this.selectAll(i==null?hC:dC(typeof i=="function"?i:aS(i)))}function mC(i){typeof i!="function"&&(i=iS(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var u=t[o],c=u.length,h=r[o]=[],p,d=0;d<c;++d)(p=u[d])&&i.call(p,p.__data__,d,u)&&h.push(p);return new ai(r,this._parents)}function rS(i){return new Array(i.length)}function gC(){return new ai(this._enter||this._groups.map(rS),this._parents)}function Kc(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}Kc.prototype={constructor:Kc,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function _C(i){return function(){return i}}function vC(i,t,n,r,o,u){for(var c=0,h,p=t.length,d=u.length;c<d;++c)(h=t[c])?(h.__data__=u[c],r[c]=h):n[c]=new Kc(i,u[c]);for(;c<p;++c)(h=t[c])&&(o[c]=h)}function xC(i,t,n,r,o,u,c){var h,p,d=new Map,g=t.length,v=u.length,_=new Array(g),x;for(h=0;h<g;++h)(p=t[h])&&(_[h]=x=c.call(p,p.__data__,h,t)+"",d.has(x)?o[h]=p:d.set(x,p));for(h=0;h<v;++h)x=c.call(i,u[h],h,u)+"",(p=d.get(x))?(r[h]=p,p.__data__=u[h],d.delete(x)):n[h]=new Kc(i,u[h]);for(h=0;h<g;++h)(p=t[h])&&d.get(_[h])===p&&(o[h]=p)}function yC(i){return i.__data__}function SC(i,t){if(!arguments.length)return Array.from(this,yC);var n=t?xC:vC,r=this._parents,o=this._groups;typeof i!="function"&&(i=_C(i));for(var u=o.length,c=new Array(u),h=new Array(u),p=new Array(u),d=0;d<u;++d){var g=r[d],v=o[d],_=v.length,x=MC(i.call(g,g&&g.__data__,d,r)),E=x.length,T=h[d]=new Array(E),S=c[d]=new Array(E),y=p[d]=new Array(_);n(g,v,T,S,y,x,t);for(var L=0,N=0,w,I;L<E;++L)if(w=T[L]){for(L>=N&&(N=L+1);!(I=S[N])&&++N<E;);w._next=I||null}}return c=new ai(c,r),c._enter=h,c._exit=p,c}function MC(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function EC(){return new ai(this._exit||this._groups.map(rS),this._parents)}function TC(i,t,n){var r=this.enter(),o=this,u=this.exit();return typeof i=="function"?(r=i(r),r&&(r=r.selection())):r=r.append(i+""),t!=null&&(o=t(o),o&&(o=o.selection())),n==null?u.remove():n(u),r&&o?r.merge(o).order():o}function bC(i){for(var t=i.selection?i.selection():i,n=this._groups,r=t._groups,o=n.length,u=r.length,c=Math.min(o,u),h=new Array(o),p=0;p<c;++p)for(var d=n[p],g=r[p],v=d.length,_=h[p]=new Array(v),x,E=0;E<v;++E)(x=d[E]||g[E])&&(_[E]=x);for(;p<o;++p)h[p]=n[p];return new ai(h,this._parents)}function AC(){for(var i=this._groups,t=-1,n=i.length;++t<n;)for(var r=i[t],o=r.length-1,u=r[o],c;--o>=0;)(c=r[o])&&(u&&c.compareDocumentPosition(u)^4&&u.parentNode.insertBefore(c,u),u=c);return this}function wC(i){i||(i=RC);function t(v,_){return v&&_?i(v.__data__,_.__data__):!v-!_}for(var n=this._groups,r=n.length,o=new Array(r),u=0;u<r;++u){for(var c=n[u],h=c.length,p=o[u]=new Array(h),d,g=0;g<h;++g)(d=c[g])&&(p[g]=d);p.sort(t)}return new ai(o,this._parents).order()}function RC(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function CC(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function DC(){return Array.from(this)}function UC(){for(var i=this._groups,t=0,n=i.length;t<n;++t)for(var r=i[t],o=0,u=r.length;o<u;++o){var c=r[o];if(c)return c}return null}function NC(){let i=0;for(const t of this)++i;return i}function LC(){return!this.node()}function OC(i){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o=t[n],u=0,c=o.length,h;u<c;++u)(h=o[u])&&i.call(h,h.__data__,u,o);return this}function PC(i){return function(){this.removeAttribute(i)}}function zC(i){return function(){this.removeAttributeNS(i.space,i.local)}}function BC(i,t){return function(){this.setAttribute(i,t)}}function FC(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function IC(i,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(i):this.setAttribute(i,n)}}function HC(i,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,n)}}function GC(i,t){var n=pf(i);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?zC:PC:typeof t=="function"?n.local?HC:IC:n.local?FC:BC)(n,t))}function sS(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function VC(i){return function(){this.style.removeProperty(i)}}function kC(i,t,n){return function(){this.style.setProperty(i,t,n)}}function XC(i,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(i):this.style.setProperty(i,r,n)}}function WC(i,t,n){return arguments.length>1?this.each((t==null?VC:typeof t=="function"?XC:kC)(i,t,n??"")):oo(this.node(),i)}function oo(i,t){return i.style.getPropertyValue(t)||sS(i).getComputedStyle(i,null).getPropertyValue(t)}function YC(i){return function(){delete this[i]}}function qC(i,t){return function(){this[i]=t}}function jC(i,t){return function(){var n=t.apply(this,arguments);n==null?delete this[i]:this[i]=n}}function ZC(i,t){return arguments.length>1?this.each((t==null?YC:typeof t=="function"?jC:qC)(i,t)):this.node()[i]}function oS(i){return i.trim().split(/^|\s+/)}function Om(i){return i.classList||new lS(i)}function lS(i){this._node=i,this._names=oS(i.getAttribute("class")||"")}lS.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function uS(i,t){for(var n=Om(i),r=-1,o=t.length;++r<o;)n.add(t[r])}function cS(i,t){for(var n=Om(i),r=-1,o=t.length;++r<o;)n.remove(t[r])}function KC(i){return function(){uS(this,i)}}function QC(i){return function(){cS(this,i)}}function $C(i,t){return function(){(t.apply(this,arguments)?uS:cS)(this,i)}}function JC(i,t){var n=oS(i+"");if(arguments.length<2){for(var r=Om(this.node()),o=-1,u=n.length;++o<u;)if(!r.contains(n[o]))return!1;return!0}return this.each((typeof t=="function"?$C:t?KC:QC)(n,t))}function tD(){this.textContent=""}function eD(i){return function(){this.textContent=i}}function nD(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function iD(i){return arguments.length?this.each(i==null?tD:(typeof i=="function"?nD:eD)(i)):this.node().textContent}function aD(){this.innerHTML=""}function rD(i){return function(){this.innerHTML=i}}function sD(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function oD(i){return arguments.length?this.each(i==null?aD:(typeof i=="function"?sD:rD)(i)):this.node().innerHTML}function lD(){this.nextSibling&&this.parentNode.appendChild(this)}function uD(){return this.each(lD)}function cD(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function fD(){return this.each(cD)}function hD(i){var t=typeof i=="function"?i:eS(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function dD(){return null}function pD(i,t){var n=typeof i=="function"?i:eS(i),r=t==null?dD:typeof t=="function"?t:Lm(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function mD(){var i=this.parentNode;i&&i.removeChild(this)}function gD(){return this.each(mD)}function _D(){var i=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function vD(){var i=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function xD(i){return this.select(i?vD:_D)}function yD(i){return arguments.length?this.property("__data__",i):this.node().__data__}function SD(i){return function(t){i.call(this,t,this.__data__)}}function MD(i){return i.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function ED(i){return function(){var t=this.__on;if(t){for(var n=0,r=-1,o=t.length,u;n<o;++n)u=t[n],(!i.type||u.type===i.type)&&u.name===i.name?this.removeEventListener(u.type,u.listener,u.options):t[++r]=u;++r?t.length=r:delete this.__on}}}function TD(i,t,n){return function(){var r=this.__on,o,u=SD(t);if(r){for(var c=0,h=r.length;c<h;++c)if((o=r[c]).type===i.type&&o.name===i.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=u,o.options=n),o.value=t;return}}this.addEventListener(i.type,u,n),o={type:i.type,name:i.name,value:t,listener:u,options:n},r?r.push(o):this.__on=[o]}}function bD(i,t,n){var r=MD(i+""),o,u=r.length,c;if(arguments.length<2){var h=this.node().__on;if(h){for(var p=0,d=h.length,g;p<d;++p)for(o=0,g=h[p];o<u;++o)if((c=r[o]).type===g.type&&c.name===g.name)return g.value}return}for(h=t?TD:ED,o=0;o<u;++o)this.each(h(r[o],t,n));return this}function fS(i,t,n){var r=sS(i),o=r.CustomEvent;typeof o=="function"?o=new o(t,n):(o=r.document.createEvent("Event"),n?(o.initEvent(t,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(t,!1,!1)),i.dispatchEvent(o)}function AD(i,t){return function(){return fS(this,i,t)}}function wD(i,t){return function(){return fS(this,i,t.apply(this,arguments))}}function RD(i,t){return this.each((typeof t=="function"?wD:AD)(i,t))}function*CD(){for(var i=this._groups,t=0,n=i.length;t<n;++t)for(var r=i[t],o=0,u=r.length,c;o<u;++o)(c=r[o])&&(yield c)}var hS=[null];function ai(i,t){this._groups=i,this._parents=t}function Il(){return new ai([[document.documentElement]],hS)}function DD(){return this}ai.prototype=Il.prototype={constructor:ai,select:nC,selectAll:sC,selectChild:cC,selectChildren:pC,filter:mC,data:SC,enter:gC,exit:EC,join:TC,merge:bC,selection:DD,order:AC,sort:wC,call:CC,nodes:DC,node:UC,size:NC,empty:LC,each:OC,attr:GC,style:WC,property:ZC,classed:JC,text:iD,html:oD,raise:uD,lower:fD,append:hD,insert:pD,remove:gD,clone:xD,datum:yD,on:bD,dispatch:RD,[Symbol.iterator]:CD};function Ox(i){return typeof i=="string"?new ai([[document.querySelector(i)]],[document.documentElement]):new ai([[i]],hS)}function Pm(i,t,n){i.prototype=t.prototype=n,n.constructor=i}function dS(i,t){var n=Object.create(i.prototype);for(var r in t)n[r]=t[r];return n}function Hl(){}var Ul=.7,Qc=1/Ul,$s="\\s*([+-]?\\d+)\\s*",Nl="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Hi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",UD=/^#([0-9a-f]{3,8})$/,ND=new RegExp(`^rgb\\(${$s},${$s},${$s}\\)$`),LD=new RegExp(`^rgb\\(${Hi},${Hi},${Hi}\\)$`),OD=new RegExp(`^rgba\\(${$s},${$s},${$s},${Nl}\\)$`),PD=new RegExp(`^rgba\\(${Hi},${Hi},${Hi},${Nl}\\)$`),zD=new RegExp(`^hsl\\(${Nl},${Hi},${Hi}\\)$`),BD=new RegExp(`^hsla\\(${Nl},${Hi},${Hi},${Nl}\\)$`),Px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Pm(Hl,Xr,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:zx,formatHex:zx,formatHex8:FD,formatHsl:ID,formatRgb:Bx,toString:Bx});function zx(){return this.rgb().formatHex()}function FD(){return this.rgb().formatHex8()}function ID(){return pS(this).formatHsl()}function Bx(){return this.rgb().formatRgb()}function Xr(i){var t,n;return i=(i+"").trim().toLowerCase(),(t=UD.exec(i))?(n=t[1].length,t=parseInt(t[1],16),n===6?Fx(t):n===3?new Wn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?bc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?bc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=ND.exec(i))?new Wn(t[1],t[2],t[3],1):(t=LD.exec(i))?new Wn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=OD.exec(i))?bc(t[1],t[2],t[3],t[4]):(t=PD.exec(i))?bc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=zD.exec(i))?Gx(t[1],t[2]/100,t[3]/100,1):(t=BD.exec(i))?Gx(t[1],t[2]/100,t[3]/100,t[4]):Px.hasOwnProperty(i)?Fx(Px[i]):i==="transparent"?new Wn(NaN,NaN,NaN,0):null}function Fx(i){return new Wn(i>>16&255,i>>8&255,i&255,1)}function bc(i,t,n,r){return r<=0&&(i=t=n=NaN),new Wn(i,t,n,r)}function HD(i){return i instanceof Hl||(i=Xr(i)),i?(i=i.rgb(),new Wn(i.r,i.g,i.b,i.opacity)):new Wn}function um(i,t,n,r){return arguments.length===1?HD(i):new Wn(i,t,n,r??1)}function Wn(i,t,n,r){this.r=+i,this.g=+t,this.b=+n,this.opacity=+r}Pm(Wn,um,dS(Hl,{brighter(i){return i=i==null?Qc:Math.pow(Qc,i),new Wn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?Ul:Math.pow(Ul,i),new Wn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Wn(Gr(this.r),Gr(this.g),Gr(this.b),$c(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ix,formatHex:Ix,formatHex8:GD,formatRgb:Hx,toString:Hx}));function Ix(){return`#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}`}function GD(){return`#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}${Hr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Hx(){const i=$c(this.opacity);return`${i===1?"rgb(":"rgba("}${Gr(this.r)}, ${Gr(this.g)}, ${Gr(this.b)}${i===1?")":`, ${i})`}`}function $c(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Gr(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function Hr(i){return i=Gr(i),(i<16?"0":"")+i.toString(16)}function Gx(i,t,n,r){return r<=0?i=t=n=NaN:n<=0||n>=1?i=t=NaN:t<=0&&(i=NaN),new Ti(i,t,n,r)}function pS(i){if(i instanceof Ti)return new Ti(i.h,i.s,i.l,i.opacity);if(i instanceof Hl||(i=Xr(i)),!i)return new Ti;if(i instanceof Ti)return i;i=i.rgb();var t=i.r/255,n=i.g/255,r=i.b/255,o=Math.min(t,n,r),u=Math.max(t,n,r),c=NaN,h=u-o,p=(u+o)/2;return h?(t===u?c=(n-r)/h+(n<r)*6:n===u?c=(r-t)/h+2:c=(t-n)/h+4,h/=p<.5?u+o:2-u-o,c*=60):h=p>0&&p<1?0:c,new Ti(c,h,p,i.opacity)}function VD(i,t,n,r){return arguments.length===1?pS(i):new Ti(i,t,n,r??1)}function Ti(i,t,n,r){this.h=+i,this.s=+t,this.l=+n,this.opacity=+r}Pm(Ti,VD,dS(Hl,{brighter(i){return i=i==null?Qc:Math.pow(Qc,i),new Ti(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Ul:Math.pow(Ul,i),new Ti(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,t=isNaN(i)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,o=2*n-r;return new Wn(lp(i>=240?i-240:i+120,o,r),lp(i,o,r),lp(i<120?i+240:i-120,o,r),this.opacity)},clamp(){return new Ti(Vx(this.h),Ac(this.s),Ac(this.l),$c(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=$c(this.opacity);return`${i===1?"hsl(":"hsla("}${Vx(this.h)}, ${Ac(this.s)*100}%, ${Ac(this.l)*100}%${i===1?")":`, ${i})`}`}}));function Vx(i){return i=(i||0)%360,i<0?i+360:i}function Ac(i){return Math.max(0,Math.min(1,i||0))}function lp(i,t,n){return(i<60?t+(n-t)*i/60:i<180?n:i<240?t+(n-t)*(240-i)/60:t)*255}const zm=i=>()=>i;function kD(i,t){return function(n){return i+n*t}}function XD(i,t,n){return i=Math.pow(i,n),t=Math.pow(t,n)-i,n=1/n,function(r){return Math.pow(i+r*t,n)}}function WD(i){return(i=+i)==1?mS:function(t,n){return n-t?XD(t,n,i):zm(isNaN(t)?n:t)}}function mS(i,t){var n=t-i;return n?kD(i,n):zm(isNaN(i)?t:i)}const Jc=function i(t){var n=WD(t);function r(o,u){var c=n((o=um(o)).r,(u=um(u)).r),h=n(o.g,u.g),p=n(o.b,u.b),d=mS(o.opacity,u.opacity);return function(g){return o.r=c(g),o.g=h(g),o.b=p(g),o.opacity=d(g),o+""}}return r.gamma=i,r}(1);function YD(i,t){t||(t=[]);var n=i?Math.min(t.length,i.length):0,r=t.slice(),o;return function(u){for(o=0;o<n;++o)r[o]=i[o]*(1-u)+t[o]*u;return r}}function qD(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jD(i,t){var n=t?t.length:0,r=i?Math.min(n,i.length):0,o=new Array(r),u=new Array(n),c;for(c=0;c<r;++c)o[c]=Bm(i[c],t[c]);for(;c<n;++c)u[c]=t[c];return function(h){for(c=0;c<r;++c)u[c]=o[c](h);return u}}function ZD(i,t){var n=new Date;return i=+i,t=+t,function(r){return n.setTime(i*(1-r)+t*r),n}}function Ei(i,t){return i=+i,t=+t,function(n){return i*(1-n)+t*n}}function KD(i,t){var n={},r={},o;(i===null||typeof i!="object")&&(i={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in i?n[o]=Bm(i[o],t[o]):r[o]=t[o];return function(u){for(o in n)r[o]=n[o](u);return r}}var cm=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,up=new RegExp(cm.source,"g");function QD(i){return function(){return i}}function $D(i){return function(t){return i(t)+""}}function gS(i,t){var n=cm.lastIndex=up.lastIndex=0,r,o,u,c=-1,h=[],p=[];for(i=i+"",t=t+"";(r=cm.exec(i))&&(o=up.exec(t));)(u=o.index)>n&&(u=t.slice(n,u),h[c]?h[c]+=u:h[++c]=u),(r=r[0])===(o=o[0])?h[c]?h[c]+=o:h[++c]=o:(h[++c]=null,p.push({i:c,x:Ei(r,o)})),n=up.lastIndex;return n<t.length&&(u=t.slice(n),h[c]?h[c]+=u:h[++c]=u),h.length<2?p[0]?$D(p[0].x):QD(t):(t=p.length,function(d){for(var g=0,v;g<t;++g)h[(v=p[g]).i]=v.x(d);return h.join("")})}function Bm(i,t){var n=typeof t,r;return t==null||n==="boolean"?zm(t):(n==="number"?Ei:n==="string"?(r=Xr(t))?(t=r,Jc):gS:t instanceof Xr?Jc:t instanceof Date?ZD:qD(t)?YD:Array.isArray(t)?jD:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?KD:Ei)(i,t)}function JD(i,t){return i=+i,t=+t,function(n){return Math.round(i*(1-n)+t*n)}}var kx=180/Math.PI,fm={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function _S(i,t,n,r,o,u){var c,h,p;return(c=Math.sqrt(i*i+t*t))&&(i/=c,t/=c),(p=i*n+t*r)&&(n-=i*p,r-=t*p),(h=Math.sqrt(n*n+r*r))&&(n/=h,r/=h,p/=h),i*r<t*n&&(i=-i,t=-t,p=-p,c=-c),{translateX:o,translateY:u,rotate:Math.atan2(t,i)*kx,skewX:Math.atan(p)*kx,scaleX:c,scaleY:h}}var wc;function t3(i){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return t.isIdentity?fm:_S(t.a,t.b,t.c,t.d,t.e,t.f)}function e3(i){return i==null||(wc||(wc=document.createElementNS("http://www.w3.org/2000/svg","g")),wc.setAttribute("transform",i),!(i=wc.transform.baseVal.consolidate()))?fm:(i=i.matrix,_S(i.a,i.b,i.c,i.d,i.e,i.f))}function vS(i,t,n,r){function o(d){return d.length?d.pop()+" ":""}function u(d,g,v,_,x,E){if(d!==v||g!==_){var T=x.push("translate(",null,t,null,n);E.push({i:T-4,x:Ei(d,v)},{i:T-2,x:Ei(g,_)})}else(v||_)&&x.push("translate("+v+t+_+n)}function c(d,g,v,_){d!==g?(d-g>180?g+=360:g-d>180&&(d+=360),_.push({i:v.push(o(v)+"rotate(",null,r)-2,x:Ei(d,g)})):g&&v.push(o(v)+"rotate("+g+r)}function h(d,g,v,_){d!==g?_.push({i:v.push(o(v)+"skewX(",null,r)-2,x:Ei(d,g)}):g&&v.push(o(v)+"skewX("+g+r)}function p(d,g,v,_,x,E){if(d!==v||g!==_){var T=x.push(o(x)+"scale(",null,",",null,")");E.push({i:T-4,x:Ei(d,v)},{i:T-2,x:Ei(g,_)})}else(v!==1||_!==1)&&x.push(o(x)+"scale("+v+","+_+")")}return function(d,g){var v=[],_=[];return d=i(d),g=i(g),u(d.translateX,d.translateY,g.translateX,g.translateY,v,_),c(d.rotate,g.rotate,v,_),h(d.skewX,g.skewX,v,_),p(d.scaleX,d.scaleY,g.scaleX,g.scaleY,v,_),d=g=null,function(x){for(var E=-1,T=_.length,S;++E<T;)v[(S=_[E]).i]=S.x(x);return v.join("")}}}var n3=vS(t3,"px, ","px)","deg)"),i3=vS(e3,", ",")",")"),lo=0,Tl=0,vl=0,xS=1e3,tf,bl,ef=0,Wr=0,mf=0,Ll=typeof performance=="object"&&performance.now?performance:Date,yS=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Fm(){return Wr||(yS(a3),Wr=Ll.now()+mf)}function a3(){Wr=0}function nf(){this._call=this._time=this._next=null}nf.prototype=SS.prototype={constructor:nf,restart:function(i,t,n){if(typeof i!="function")throw new TypeError("callback is not a function");n=(n==null?Fm():+n)+(t==null?0:+t),!this._next&&bl!==this&&(bl?bl._next=this:tf=this,bl=this),this._call=i,this._time=n,hm()},stop:function(){this._call&&(this._call=null,this._time=1/0,hm())}};function SS(i,t,n){var r=new nf;return r.restart(i,t,n),r}function r3(){Fm(),++lo;for(var i=tf,t;i;)(t=Wr-i._time)>=0&&i._call.call(void 0,t),i=i._next;--lo}function Xx(){Wr=(ef=Ll.now())+mf,lo=Tl=0;try{r3()}finally{lo=0,o3(),Wr=0}}function s3(){var i=Ll.now(),t=i-ef;t>xS&&(mf-=t,ef=i)}function o3(){for(var i,t=tf,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),i=t,t=t._next):(n=t._next,t._next=null,t=i?i._next=n:tf=n);bl=i,hm(r)}function hm(i){if(!lo){Tl&&(Tl=clearTimeout(Tl));var t=i-Wr;t>24?(i<1/0&&(Tl=setTimeout(Xx,i-Ll.now()-mf)),vl&&(vl=clearInterval(vl))):(vl||(ef=Ll.now(),vl=setInterval(s3,xS)),lo=1,yS(Xx))}}function Wx(i,t,n){var r=new nf;return t=t==null?0:+t,r.restart(o=>{r.stop(),i(o+t)},t,n),r}var l3=tS("start","end","cancel","interrupt"),u3=[],MS=0,Yx=1,dm=2,Hc=3,qx=4,pm=5,Gc=6;function gf(i,t,n,r,o,u){var c=i.__transition;if(!c)i.__transition={};else if(n in c)return;c3(i,n,{name:t,index:r,group:o,on:l3,tween:u3,time:u.time,delay:u.delay,duration:u.duration,ease:u.ease,timer:null,state:MS})}function Im(i,t){var n=Ci(i,t);if(n.state>MS)throw new Error("too late; already scheduled");return n}function Gi(i,t){var n=Ci(i,t);if(n.state>Hc)throw new Error("too late; already running");return n}function Ci(i,t){var n=i.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function c3(i,t,n){var r=i.__transition,o;r[t]=n,n.timer=SS(u,0,n.time);function u(d){n.state=Yx,n.timer.restart(c,n.delay,n.time),n.delay<=d&&c(d-n.delay)}function c(d){var g,v,_,x;if(n.state!==Yx)return p();for(g in r)if(x=r[g],x.name===n.name){if(x.state===Hc)return Wx(c);x.state===qx?(x.state=Gc,x.timer.stop(),x.on.call("interrupt",i,i.__data__,x.index,x.group),delete r[g]):+g<t&&(x.state=Gc,x.timer.stop(),x.on.call("cancel",i,i.__data__,x.index,x.group),delete r[g])}if(Wx(function(){n.state===Hc&&(n.state=qx,n.timer.restart(h,n.delay,n.time),h(d))}),n.state=dm,n.on.call("start",i,i.__data__,n.index,n.group),n.state===dm){for(n.state=Hc,o=new Array(_=n.tween.length),g=0,v=-1;g<_;++g)(x=n.tween[g].value.call(i,i.__data__,n.index,n.group))&&(o[++v]=x);o.length=v+1}}function h(d){for(var g=d<n.duration?n.ease.call(null,d/n.duration):(n.timer.restart(p),n.state=pm,1),v=-1,_=o.length;++v<_;)o[v].call(i,g);n.state===pm&&(n.on.call("end",i,i.__data__,n.index,n.group),p())}function p(){n.state=Gc,n.timer.stop(),delete r[t];for(var d in r)return;delete i.__transition}}function f3(i,t){var n=i.__transition,r,o,u=!0,c;if(n){t=t==null?null:t+"";for(c in n){if((r=n[c]).name!==t){u=!1;continue}o=r.state>dm&&r.state<pm,r.state=Gc,r.timer.stop(),r.on.call(o?"interrupt":"cancel",i,i.__data__,r.index,r.group),delete n[c]}u&&delete i.__transition}}function h3(i){return this.each(function(){f3(this,i)})}function d3(i,t){var n,r;return function(){var o=Gi(this,i),u=o.tween;if(u!==n){r=n=u;for(var c=0,h=r.length;c<h;++c)if(r[c].name===t){r=r.slice(),r.splice(c,1);break}}o.tween=r}}function p3(i,t,n){var r,o;if(typeof n!="function")throw new Error;return function(){var u=Gi(this,i),c=u.tween;if(c!==r){o=(r=c).slice();for(var h={name:t,value:n},p=0,d=o.length;p<d;++p)if(o[p].name===t){o[p]=h;break}p===d&&o.push(h)}u.tween=o}}function m3(i,t){var n=this._id;if(i+="",arguments.length<2){for(var r=Ci(this.node(),n).tween,o=0,u=r.length,c;o<u;++o)if((c=r[o]).name===i)return c.value;return null}return this.each((t==null?d3:p3)(n,i,t))}function Hm(i,t,n){var r=i._id;return i.each(function(){var o=Gi(this,r);(o.value||(o.value={}))[t]=n.apply(this,arguments)}),function(o){return Ci(o,r).value[t]}}function ES(i,t){var n;return(typeof t=="number"?Ei:t instanceof Xr?Jc:(n=Xr(t))?(t=n,Jc):gS)(i,t)}function g3(i){return function(){this.removeAttribute(i)}}function _3(i){return function(){this.removeAttributeNS(i.space,i.local)}}function v3(i,t,n){var r,o=n+"",u;return function(){var c=this.getAttribute(i);return c===o?null:c===r?u:u=t(r=c,n)}}function x3(i,t,n){var r,o=n+"",u;return function(){var c=this.getAttributeNS(i.space,i.local);return c===o?null:c===r?u:u=t(r=c,n)}}function y3(i,t,n){var r,o,u;return function(){var c,h=n(this),p;return h==null?void this.removeAttribute(i):(c=this.getAttribute(i),p=h+"",c===p?null:c===r&&p===o?u:(o=p,u=t(r=c,h)))}}function S3(i,t,n){var r,o,u;return function(){var c,h=n(this),p;return h==null?void this.removeAttributeNS(i.space,i.local):(c=this.getAttributeNS(i.space,i.local),p=h+"",c===p?null:c===r&&p===o?u:(o=p,u=t(r=c,h)))}}function M3(i,t){var n=pf(i),r=n==="transform"?i3:ES;return this.attrTween(i,typeof t=="function"?(n.local?S3:y3)(n,r,Hm(this,"attr."+i,t)):t==null?(n.local?_3:g3)(n):(n.local?x3:v3)(n,r,t))}function E3(i,t){return function(n){this.setAttribute(i,t.call(this,n))}}function T3(i,t){return function(n){this.setAttributeNS(i.space,i.local,t.call(this,n))}}function b3(i,t){var n,r;function o(){var u=t.apply(this,arguments);return u!==r&&(n=(r=u)&&T3(i,u)),n}return o._value=t,o}function A3(i,t){var n,r;function o(){var u=t.apply(this,arguments);return u!==r&&(n=(r=u)&&E3(i,u)),n}return o._value=t,o}function w3(i,t){var n="attr."+i;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=pf(i);return this.tween(n,(r.local?b3:A3)(r,t))}function R3(i,t){return function(){Im(this,i).delay=+t.apply(this,arguments)}}function C3(i,t){return t=+t,function(){Im(this,i).delay=t}}function D3(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?R3:C3)(t,i)):Ci(this.node(),t).delay}function U3(i,t){return function(){Gi(this,i).duration=+t.apply(this,arguments)}}function N3(i,t){return t=+t,function(){Gi(this,i).duration=t}}function L3(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?U3:N3)(t,i)):Ci(this.node(),t).duration}function O3(i,t){if(typeof t!="function")throw new Error;return function(){Gi(this,i).ease=t}}function P3(i){var t=this._id;return arguments.length?this.each(O3(t,i)):Ci(this.node(),t).ease}function z3(i,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Gi(this,i).ease=n}}function B3(i){if(typeof i!="function")throw new Error;return this.each(z3(this._id,i))}function F3(i){typeof i!="function"&&(i=iS(i));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var u=t[o],c=u.length,h=r[o]=[],p,d=0;d<c;++d)(p=u[d])&&i.call(p,p.__data__,d,u)&&h.push(p);return new Ma(r,this._parents,this._name,this._id)}function I3(i){if(i._id!==this._id)throw new Error;for(var t=this._groups,n=i._groups,r=t.length,o=n.length,u=Math.min(r,o),c=new Array(r),h=0;h<u;++h)for(var p=t[h],d=n[h],g=p.length,v=c[h]=new Array(g),_,x=0;x<g;++x)(_=p[x]||d[x])&&(v[x]=_);for(;h<r;++h)c[h]=t[h];return new Ma(c,this._parents,this._name,this._id)}function H3(i){return(i+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function G3(i,t,n){var r,o,u=H3(t)?Im:Gi;return function(){var c=u(this,i),h=c.on;h!==r&&(o=(r=h).copy()).on(t,n),c.on=o}}function V3(i,t){var n=this._id;return arguments.length<2?Ci(this.node(),n).on.on(i):this.each(G3(n,i,t))}function k3(i){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==i)return;t&&t.removeChild(this)}}function X3(){return this.on("end.remove",k3(this._id))}function W3(i){var t=this._name,n=this._id;typeof i!="function"&&(i=Lm(i));for(var r=this._groups,o=r.length,u=new Array(o),c=0;c<o;++c)for(var h=r[c],p=h.length,d=u[c]=new Array(p),g,v,_=0;_<p;++_)(g=h[_])&&(v=i.call(g,g.__data__,_,h))&&("__data__"in g&&(v.__data__=g.__data__),d[_]=v,gf(d[_],t,n,_,d,Ci(g,n)));return new Ma(u,this._parents,t,n)}function Y3(i){var t=this._name,n=this._id;typeof i!="function"&&(i=nS(i));for(var r=this._groups,o=r.length,u=[],c=[],h=0;h<o;++h)for(var p=r[h],d=p.length,g,v=0;v<d;++v)if(g=p[v]){for(var _=i.call(g,g.__data__,v,p),x,E=Ci(g,n),T=0,S=_.length;T<S;++T)(x=_[T])&&gf(x,t,n,T,_,E);u.push(_),c.push(g)}return new Ma(u,c,t,n)}var q3=Il.prototype.constructor;function j3(){return new q3(this._groups,this._parents)}function Z3(i,t){var n,r,o;return function(){var u=oo(this,i),c=(this.style.removeProperty(i),oo(this,i));return u===c?null:u===n&&c===r?o:o=t(n=u,r=c)}}function TS(i){return function(){this.style.removeProperty(i)}}function K3(i,t,n){var r,o=n+"",u;return function(){var c=oo(this,i);return c===o?null:c===r?u:u=t(r=c,n)}}function Q3(i,t,n){var r,o,u;return function(){var c=oo(this,i),h=n(this),p=h+"";return h==null&&(p=h=(this.style.removeProperty(i),oo(this,i))),c===p?null:c===r&&p===o?u:(o=p,u=t(r=c,h))}}function $3(i,t){var n,r,o,u="style."+t,c="end."+u,h;return function(){var p=Gi(this,i),d=p.on,g=p.value[u]==null?h||(h=TS(t)):void 0;(d!==n||o!==g)&&(r=(n=d).copy()).on(c,o=g),p.on=r}}function J3(i,t,n){var r=(i+="")=="transform"?n3:ES;return t==null?this.styleTween(i,Z3(i,r)).on("end.style."+i,TS(i)):typeof t=="function"?this.styleTween(i,Q3(i,r,Hm(this,"style."+i,t))).each($3(this._id,i)):this.styleTween(i,K3(i,r,t),n).on("end.style."+i,null)}function tU(i,t,n){return function(r){this.style.setProperty(i,t.call(this,r),n)}}function eU(i,t,n){var r,o;function u(){var c=t.apply(this,arguments);return c!==o&&(r=(o=c)&&tU(i,c,n)),r}return u._value=t,u}function nU(i,t,n){var r="style."+(i+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,eU(i,t,n??""))}function iU(i){return function(){this.textContent=i}}function aU(i){return function(){var t=i(this);this.textContent=t??""}}function rU(i){return this.tween("text",typeof i=="function"?aU(Hm(this,"text",i)):iU(i==null?"":i+""))}function sU(i){return function(t){this.textContent=i.call(this,t)}}function oU(i){var t,n;function r(){var o=i.apply(this,arguments);return o!==n&&(t=(n=o)&&sU(o)),t}return r._value=i,r}function lU(i){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(i==null)return this.tween(t,null);if(typeof i!="function")throw new Error;return this.tween(t,oU(i))}function uU(){for(var i=this._name,t=this._id,n=bS(),r=this._groups,o=r.length,u=0;u<o;++u)for(var c=r[u],h=c.length,p,d=0;d<h;++d)if(p=c[d]){var g=Ci(p,t);gf(p,i,n,d,c,{time:g.time+g.delay+g.duration,delay:0,duration:g.duration,ease:g.ease})}return new Ma(r,this._parents,i,n)}function cU(){var i,t,n=this,r=n._id,o=n.size();return new Promise(function(u,c){var h={value:c},p={value:function(){--o===0&&u()}};n.each(function(){var d=Gi(this,r),g=d.on;g!==i&&(t=(i=g).copy(),t._.cancel.push(h),t._.interrupt.push(h),t._.end.push(p)),d.on=t}),o===0&&u()})}var fU=0;function Ma(i,t,n,r){this._groups=i,this._parents=t,this._name=n,this._id=r}function bS(){return++fU}var ha=Il.prototype;Ma.prototype={constructor:Ma,select:W3,selectAll:Y3,selectChild:ha.selectChild,selectChildren:ha.selectChildren,filter:F3,merge:I3,selection:j3,transition:uU,call:ha.call,nodes:ha.nodes,node:ha.node,size:ha.size,empty:ha.empty,each:ha.each,on:V3,attr:M3,attrTween:w3,style:J3,styleTween:nU,text:rU,textTween:lU,remove:X3,tween:m3,delay:D3,duration:L3,ease:P3,easeVarying:B3,end:cU,[Symbol.iterator]:ha[Symbol.iterator]};function hU(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var dU={time:null,delay:0,duration:250,ease:hU};function pU(i,t){for(var n;!(n=i.__transition)||!(n=n[t]);)if(!(i=i.parentNode))throw new Error(`transition ${t} not found`);return n}function mU(i){var t,n;i instanceof Ma?(t=i._id,i=i._name):(t=bS(),(n=dU).time=Fm(),i=i==null?null:i+"");for(var r=this._groups,o=r.length,u=0;u<o;++u)for(var c=r[u],h=c.length,p,d=0;d<h;++d)(p=c[d])&&gf(p,i,t,d,c,n||pU(p,t));return new Ma(r,this._parents,i,t)}Il.prototype.interrupt=h3;Il.prototype.transition=mU;const mm=Math.PI,gm=2*mm,Pr=1e-6,gU=gm-Pr;function AS(i){this._+=i[0];for(let t=1,n=i.length;t<n;++t)this._+=arguments[t]+i[t]}function _U(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return AS;const n=10**t;return function(r){this._+=r[0];for(let o=1,u=r.length;o<u;++o)this._+=Math.round(arguments[o]*n)/n+r[o]}}class vU{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?AS:_U(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,o){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+o}`}bezierCurveTo(t,n,r,o,u,c){this._append`C${+t},${+n},${+r},${+o},${this._x1=+u},${this._y1=+c}`}arcTo(t,n,r,o,u){if(t=+t,n=+n,r=+r,o=+o,u=+u,u<0)throw new Error(`negative radius: ${u}`);let c=this._x1,h=this._y1,p=r-t,d=o-n,g=c-t,v=h-n,_=g*g+v*v;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(_>Pr)if(!(Math.abs(v*p-d*g)>Pr)||!u)this._append`L${this._x1=t},${this._y1=n}`;else{let x=r-c,E=o-h,T=p*p+d*d,S=x*x+E*E,y=Math.sqrt(T),L=Math.sqrt(_),N=u*Math.tan((mm-Math.acos((T+_-S)/(2*y*L)))/2),w=N/L,I=N/y;Math.abs(w-1)>Pr&&this._append`L${t+w*g},${n+w*v}`,this._append`A${u},${u},0,0,${+(v*x>g*E)},${this._x1=t+I*p},${this._y1=n+I*d}`}}arc(t,n,r,o,u,c){if(t=+t,n=+n,r=+r,c=!!c,r<0)throw new Error(`negative radius: ${r}`);let h=r*Math.cos(o),p=r*Math.sin(o),d=t+h,g=n+p,v=1^c,_=c?o-u:u-o;this._x1===null?this._append`M${d},${g}`:(Math.abs(this._x1-d)>Pr||Math.abs(this._y1-g)>Pr)&&this._append`L${d},${g}`,r&&(_<0&&(_=_%gm+gm),_>gU?this._append`A${r},${r},0,1,${v},${t-h},${n-p}A${r},${r},0,1,${v},${this._x1=d},${this._y1=g}`:_>Pr&&this._append`A${r},${r},0,${+(_>=mm)},${v},${this._x1=t+r*Math.cos(u)},${this._y1=n+r*Math.sin(u)}`)}rect(t,n,r,o){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+o}h${-r}Z`}toString(){return this._}}function xU(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function af(i,t){if((n=(i=t?i.toExponential(t-1):i.toExponential()).indexOf("e"))<0)return null;var n,r=i.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+i.slice(n+1)]}function uo(i){return i=af(Math.abs(i)),i?i[1]:NaN}function yU(i,t){return function(n,r){for(var o=n.length,u=[],c=0,h=i[0],p=0;o>0&&h>0&&(p+h+1>r&&(h=Math.max(1,r-p)),u.push(n.substring(o-=h,o+h)),!((p+=h+1)>r));)h=i[c=(c+1)%i.length];return u.reverse().join(t)}}function SU(i){return function(t){return t.replace(/[0-9]/g,function(n){return i[+n]})}}var MU=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function rf(i){if(!(t=MU.exec(i)))throw new Error("invalid format: "+i);var t;return new Gm({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}rf.prototype=Gm.prototype;function Gm(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}Gm.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function EU(i){t:for(var t=i.length,n=1,r=-1,o;n<t;++n)switch(i[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+i[n])break t;r>0&&(r=0);break}return r>0?i.slice(0,r)+i.slice(o+1):i}var wS;function TU(i,t){var n=af(i,t);if(!n)return i+"";var r=n[0],o=n[1],u=o-(wS=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,c=r.length;return u===c?r:u>c?r+new Array(u-c+1).join("0"):u>0?r.slice(0,u)+"."+r.slice(u):"0."+new Array(1-u).join("0")+af(i,Math.max(0,t+u-1))[0]}function jx(i,t){var n=af(i,t);if(!n)return i+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const Zx={"%":(i,t)=>(i*100).toFixed(t),b:i=>Math.round(i).toString(2),c:i=>i+"",d:xU,e:(i,t)=>i.toExponential(t),f:(i,t)=>i.toFixed(t),g:(i,t)=>i.toPrecision(t),o:i=>Math.round(i).toString(8),p:(i,t)=>jx(i*100,t),r:jx,s:TU,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function Kx(i){return i}var Qx=Array.prototype.map,$x=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function bU(i){var t=i.grouping===void 0||i.thousands===void 0?Kx:yU(Qx.call(i.grouping,Number),i.thousands+""),n=i.currency===void 0?"":i.currency[0]+"",r=i.currency===void 0?"":i.currency[1]+"",o=i.decimal===void 0?".":i.decimal+"",u=i.numerals===void 0?Kx:SU(Qx.call(i.numerals,String)),c=i.percent===void 0?"%":i.percent+"",h=i.minus===void 0?"−":i.minus+"",p=i.nan===void 0?"NaN":i.nan+"";function d(v){v=rf(v);var _=v.fill,x=v.align,E=v.sign,T=v.symbol,S=v.zero,y=v.width,L=v.comma,N=v.precision,w=v.trim,I=v.type;I==="n"?(L=!0,I="g"):Zx[I]||(N===void 0&&(N=12),w=!0,I="g"),(S||_==="0"&&x==="=")&&(S=!0,_="0",x="=");var P=T==="$"?n:T==="#"&&/[boxX]/.test(I)?"0"+I.toLowerCase():"",F=T==="$"?r:/[%p]/.test(I)?c:"",k=Zx[I],U=/[defgprs%]/.test(I);N=N===void 0?6:/[gprs]/.test(I)?Math.max(1,Math.min(21,N)):Math.max(0,Math.min(20,N));function C(H){var j=P,tt=F,mt,pt,B;if(I==="c")tt=k(H)+tt,H="";else{H=+H;var Y=H<0||1/H<0;if(H=isNaN(H)?p:k(Math.abs(H),N),w&&(H=EU(H)),Y&&+H==0&&E!=="+"&&(Y=!1),j=(Y?E==="("?E:h:E==="-"||E==="("?"":E)+j,tt=(I==="s"?$x[8+wS/3]:"")+tt+(Y&&E==="("?")":""),U){for(mt=-1,pt=H.length;++mt<pt;)if(B=H.charCodeAt(mt),48>B||B>57){tt=(B===46?o+H.slice(mt+1):H.slice(mt))+tt,H=H.slice(0,mt);break}}}L&&!S&&(H=t(H,1/0));var W=j.length+H.length+tt.length,dt=W<y?new Array(y-W+1).join(_):"";switch(L&&S&&(H=t(dt+H,dt.length?y-tt.length:1/0),dt=""),x){case"<":H=j+H+tt+dt;break;case"=":H=j+dt+H+tt;break;case"^":H=dt.slice(0,W=dt.length>>1)+j+H+tt+dt.slice(W);break;default:H=dt+j+H+tt;break}return u(H)}return C.toString=function(){return v+""},C}function g(v,_){var x=d((v=rf(v),v.type="f",v)),E=Math.max(-8,Math.min(8,Math.floor(uo(_)/3)))*3,T=Math.pow(10,-E),S=$x[8+E/3];return function(y){return x(T*y)+S}}return{format:d,formatPrefix:g}}var Rc,RS,CS;AU({thousands:",",grouping:[3],currency:["$",""]});function AU(i){return Rc=bU(i),RS=Rc.format,CS=Rc.formatPrefix,Rc}function wU(i){return Math.max(0,-uo(Math.abs(i)))}function RU(i,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(uo(t)/3)))*3-uo(Math.abs(i)))}function CU(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,uo(t)-uo(i))+1}function DS(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}function DU(i){return function(){return i}}function UU(i){return+i}var Jx=[0,1];function js(i){return i}function _m(i,t){return(t-=i=+i)?function(n){return(n-i)/t}:DU(isNaN(t)?NaN:.5)}function NU(i,t){var n;return i>t&&(n=i,i=t,t=n),function(r){return Math.max(i,Math.min(t,r))}}function LU(i,t,n){var r=i[0],o=i[1],u=t[0],c=t[1];return o<r?(r=_m(o,r),u=n(c,u)):(r=_m(r,o),u=n(u,c)),function(h){return u(r(h))}}function OU(i,t,n){var r=Math.min(i.length,t.length)-1,o=new Array(r),u=new Array(r),c=-1;for(i[r]<i[0]&&(i=i.slice().reverse(),t=t.slice().reverse());++c<r;)o[c]=_m(i[c],i[c+1]),u[c]=n(t[c],t[c+1]);return function(h){var p=Qy(i,h,1,r)-1;return u[p](o[p](h))}}function US(i,t){return t.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function PU(){var i=Jx,t=Jx,n=Bm,r,o,u,c=js,h,p,d;function g(){var _=Math.min(i.length,t.length);return c!==js&&(c=NU(i[0],i[_-1])),h=_>2?OU:LU,p=d=null,v}function v(_){return _==null||isNaN(_=+_)?u:(p||(p=h(i.map(r),t,n)))(r(c(_)))}return v.invert=function(_){return c(o((d||(d=h(t,i.map(r),Ei)))(_)))},v.domain=function(_){return arguments.length?(i=Array.from(_,UU),g()):i.slice()},v.range=function(_){return arguments.length?(t=Array.from(_),g()):t.slice()},v.rangeRound=function(_){return t=Array.from(_),n=JD,g()},v.clamp=function(_){return arguments.length?(c=_?!0:js,g()):c!==js},v.interpolate=function(_){return arguments.length?(n=_,g()):n},v.unknown=function(_){return arguments.length?(u=_,v):u},function(_,x){return r=_,o=x,g()}}function NS(){return PU()(js,js)}function zU(i,t,n,r){var o=sm(i,t,n),u;switch(r=rf(r??",f"),r.type){case"s":{var c=Math.max(Math.abs(i),Math.abs(t));return r.precision==null&&!isNaN(u=RU(o,c))&&(r.precision=u),CS(r,c)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(u=CU(o,Math.max(Math.abs(i),Math.abs(t))))&&(r.precision=u-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(u=wU(o))&&(r.precision=u-(r.type==="%")*2);break}}return RS(r)}function BU(i){var t=i.domain;return i.ticks=function(n){var r=t();return $y(r[0],r[r.length-1],n??10)},i.tickFormat=function(n,r){var o=t();return zU(o[0],o[o.length-1],n??10,r)},i.nice=function(n){n==null&&(n=10);var r=t(),o=0,u=r.length-1,c=r[o],h=r[u],p,d,g=10;for(h<c&&(d=c,c=h,h=d,d=o,o=u,u=d);g-- >0;){if(d=so(c,h,n),d===p)return r[o]=c,r[u]=h,t(r);if(d>0)c=Math.floor(c/d)*d,h=Math.ceil(h/d)*d;else if(d<0)c=Math.ceil(c*d)/d,h=Math.floor(h*d)/d;else break;p=d}return i},i}function LS(){var i=NS();return i.copy=function(){return US(i,LS())},DS.apply(i,arguments),BU(i)}function FU(i,t){i=i.slice();var n=0,r=i.length-1,o=i[n],u=i[r],c;return u<o&&(c=n,n=r,r=c,c=o,o=u,u=c),i[n]=t.floor(o),i[r]=t.ceil(u),i}const cp=new Date,fp=new Date;function _n(i,t,n,r){function o(u){return i(u=arguments.length===0?new Date:new Date(+u)),u}return o.floor=u=>(i(u=new Date(+u)),u),o.ceil=u=>(i(u=new Date(u-1)),t(u,1),i(u),u),o.round=u=>{const c=o(u),h=o.ceil(u);return u-c<h-u?c:h},o.offset=(u,c)=>(t(u=new Date(+u),c==null?1:Math.floor(c)),u),o.range=(u,c,h)=>{const p=[];if(u=o.ceil(u),h=h==null?1:Math.floor(h),!(u<c)||!(h>0))return p;let d;do p.push(d=new Date(+u)),t(u,h),i(u);while(d<u&&u<c);return p},o.filter=u=>_n(c=>{if(c>=c)for(;i(c),!u(c);)c.setTime(c-1)},(c,h)=>{if(c>=c)if(h<0)for(;++h<=0;)for(;t(c,-1),!u(c););else for(;--h>=0;)for(;t(c,1),!u(c););}),n&&(o.count=(u,c)=>(cp.setTime(+u),fp.setTime(+c),i(cp),i(fp),Math.floor(n(cp,fp))),o.every=u=>(u=Math.floor(u),!isFinite(u)||!(u>0)?null:u>1?o.filter(r?c=>r(c)%u===0:c=>o.count(0,c)%u===0):o)),o}const sf=_n(()=>{},(i,t)=>{i.setTime(+i+t)},(i,t)=>t-i);sf.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?_n(t=>{t.setTime(Math.floor(t/i)*i)},(t,n)=>{t.setTime(+t+n*i)},(t,n)=>(n-t)/i):sf);sf.range;const _a=1e3,mi=_a*60,va=mi*60,Ea=va*24,Vm=Ea*7,ty=Ea*30,hp=Ea*365,Zs=_n(i=>{i.setTime(i-i.getMilliseconds())},(i,t)=>{i.setTime(+i+t*_a)},(i,t)=>(t-i)/_a,i=>i.getUTCSeconds());Zs.range;const km=_n(i=>{i.setTime(i-i.getMilliseconds()-i.getSeconds()*_a)},(i,t)=>{i.setTime(+i+t*mi)},(i,t)=>(t-i)/mi,i=>i.getMinutes());km.range;const IU=_n(i=>{i.setUTCSeconds(0,0)},(i,t)=>{i.setTime(+i+t*mi)},(i,t)=>(t-i)/mi,i=>i.getUTCMinutes());IU.range;const _f=_n(i=>{i.setTime(i-i.getMilliseconds()-i.getSeconds()*_a-i.getMinutes()*mi)},(i,t)=>{i.setTime(+i+t*va)},(i,t)=>(t-i)/va,i=>i.getHours());_f.range;const HU=_n(i=>{i.setUTCMinutes(0,0,0)},(i,t)=>{i.setTime(+i+t*va)},(i,t)=>(t-i)/va,i=>i.getUTCHours());HU.range;const Gl=_n(i=>i.setHours(0,0,0,0),(i,t)=>i.setDate(i.getDate()+t),(i,t)=>(t-i-(t.getTimezoneOffset()-i.getTimezoneOffset())*mi)/Ea,i=>i.getDate()-1);Gl.range;const Xm=_n(i=>{i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCDate(i.getUTCDate()+t)},(i,t)=>(t-i)/Ea,i=>i.getUTCDate()-1);Xm.range;const GU=_n(i=>{i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCDate(i.getUTCDate()+t)},(i,t)=>(t-i)/Ea,i=>Math.floor(i/Ea));GU.range;function qr(i){return _n(t=>{t.setDate(t.getDate()-(t.getDay()+7-i)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*mi)/Vm)}const vf=qr(0),of=qr(1),VU=qr(2),kU=qr(3),co=qr(4),XU=qr(5),WU=qr(6);vf.range;of.range;VU.range;kU.range;co.range;XU.range;WU.range;function jr(i){return _n(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-i)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Vm)}const OS=jr(0),lf=jr(1),YU=jr(2),qU=jr(3),fo=jr(4),jU=jr(5),ZU=jr(6);OS.range;lf.range;YU.range;qU.range;fo.range;jU.range;ZU.range;const Wm=_n(i=>{i.setDate(1),i.setHours(0,0,0,0)},(i,t)=>{i.setMonth(i.getMonth()+t)},(i,t)=>t.getMonth()-i.getMonth()+(t.getFullYear()-i.getFullYear())*12,i=>i.getMonth());Wm.range;const KU=_n(i=>{i.setUTCDate(1),i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCMonth(i.getUTCMonth()+t)},(i,t)=>t.getUTCMonth()-i.getUTCMonth()+(t.getUTCFullYear()-i.getUTCFullYear())*12,i=>i.getUTCMonth());KU.range;const Ta=_n(i=>{i.setMonth(0,1),i.setHours(0,0,0,0)},(i,t)=>{i.setFullYear(i.getFullYear()+t)},(i,t)=>t.getFullYear()-i.getFullYear(),i=>i.getFullYear());Ta.every=i=>!isFinite(i=Math.floor(i))||!(i>0)?null:_n(t=>{t.setFullYear(Math.floor(t.getFullYear()/i)*i),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*i)});Ta.range;const Yr=_n(i=>{i.setUTCMonth(0,1),i.setUTCHours(0,0,0,0)},(i,t)=>{i.setUTCFullYear(i.getUTCFullYear()+t)},(i,t)=>t.getUTCFullYear()-i.getUTCFullYear(),i=>i.getUTCFullYear());Yr.every=i=>!isFinite(i=Math.floor(i))||!(i>0)?null:_n(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/i)*i),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*i)});Yr.range;function QU(i,t,n,r,o,u){const c=[[Zs,1,_a],[Zs,5,5*_a],[Zs,15,15*_a],[Zs,30,30*_a],[u,1,mi],[u,5,5*mi],[u,15,15*mi],[u,30,30*mi],[o,1,va],[o,3,3*va],[o,6,6*va],[o,12,12*va],[r,1,Ea],[r,2,2*Ea],[n,1,Vm],[t,1,ty],[t,3,3*ty],[i,1,hp]];function h(d,g,v){const _=g<d;_&&([d,g]=[g,d]);const x=v&&typeof v.range=="function"?v:p(d,g,v),E=x?x.range(d,+g+1):[];return _?E.reverse():E}function p(d,g,v){const _=Math.abs(g-d)/v,x=Nm(([,,S])=>S).right(c,_);if(x===c.length)return i.every(sm(d/hp,g/hp,v));if(x===0)return sf.every(Math.max(sm(d,g,v),1));const[E,T]=c[_/c[x-1][2]<c[x][2]/_?x-1:x];return E.every(T)}return[h,p]}const[$U,JU]=QU(Ta,Wm,vf,Gl,_f,km);function dp(i){if(0<=i.y&&i.y<100){var t=new Date(-1,i.m,i.d,i.H,i.M,i.S,i.L);return t.setFullYear(i.y),t}return new Date(i.y,i.m,i.d,i.H,i.M,i.S,i.L)}function pp(i){if(0<=i.y&&i.y<100){var t=new Date(Date.UTC(-1,i.m,i.d,i.H,i.M,i.S,i.L));return t.setUTCFullYear(i.y),t}return new Date(Date.UTC(i.y,i.m,i.d,i.H,i.M,i.S,i.L))}function xl(i,t,n){return{y:i,m:t,d:n,H:0,M:0,S:0,L:0}}function tN(i){var t=i.dateTime,n=i.date,r=i.time,o=i.periods,u=i.days,c=i.shortDays,h=i.months,p=i.shortMonths,d=yl(o),g=Sl(o),v=yl(u),_=Sl(u),x=yl(c),E=Sl(c),T=yl(h),S=Sl(h),y=yl(p),L=Sl(p),N={a:Y,A:W,b:dt,B:D,c:null,d:sy,e:sy,f:EN,g:LN,G:PN,H:yN,I:SN,j:MN,L:PS,m:TN,M:bN,p:nt,q:At,Q:uy,s:cy,S:AN,u:wN,U:RN,V:CN,w:DN,W:UN,x:null,X:null,y:NN,Y:ON,Z:zN,"%":ly},w={a:_t,A:$,b:xt,B:it,c:null,d:oy,e:oy,f:HN,g:KN,G:$N,H:BN,I:FN,j:IN,L:BS,m:GN,M:VN,p:Tt,q:Ct,Q:uy,s:cy,S:kN,u:XN,U:WN,V:YN,w:qN,W:jN,x:null,X:null,y:ZN,Y:QN,Z:JN,"%":ly},I={a:C,A:H,b:j,B:tt,c:mt,d:ay,e:ay,f:gN,g:iy,G:ny,H:ry,I:ry,j:hN,L:mN,m:fN,M:dN,p:U,q:cN,Q:vN,s:xN,S:pN,u:rN,U:sN,V:oN,w:aN,W:lN,x:pt,X:B,y:iy,Y:ny,Z:uN,"%":_N};N.x=P(n,N),N.X=P(r,N),N.c=P(t,N),w.x=P(n,w),w.X=P(r,w),w.c=P(t,w);function P(St,et){return function(Rt){var Q=[],Bt=-1,z=0,te=St.length,Ht,qt,jt;for(Rt instanceof Date||(Rt=new Date(+Rt));++Bt<te;)St.charCodeAt(Bt)===37&&(Q.push(St.slice(z,Bt)),(qt=ey[Ht=St.charAt(++Bt)])!=null?Ht=St.charAt(++Bt):qt=Ht==="e"?" ":"0",(jt=et[Ht])&&(Ht=jt(Rt,qt)),Q.push(Ht),z=Bt+1);return Q.push(St.slice(z,Bt)),Q.join("")}}function F(St,et){return function(Rt){var Q=xl(1900,void 0,1),Bt=k(Q,St,Rt+="",0),z,te;if(Bt!=Rt.length)return null;if("Q"in Q)return new Date(Q.Q);if("s"in Q)return new Date(Q.s*1e3+("L"in Q?Q.L:0));if(et&&!("Z"in Q)&&(Q.Z=0),"p"in Q&&(Q.H=Q.H%12+Q.p*12),Q.m===void 0&&(Q.m="q"in Q?Q.q:0),"V"in Q){if(Q.V<1||Q.V>53)return null;"w"in Q||(Q.w=1),"Z"in Q?(z=pp(xl(Q.y,0,1)),te=z.getUTCDay(),z=te>4||te===0?lf.ceil(z):lf(z),z=Xm.offset(z,(Q.V-1)*7),Q.y=z.getUTCFullYear(),Q.m=z.getUTCMonth(),Q.d=z.getUTCDate()+(Q.w+6)%7):(z=dp(xl(Q.y,0,1)),te=z.getDay(),z=te>4||te===0?of.ceil(z):of(z),z=Gl.offset(z,(Q.V-1)*7),Q.y=z.getFullYear(),Q.m=z.getMonth(),Q.d=z.getDate()+(Q.w+6)%7)}else("W"in Q||"U"in Q)&&("w"in Q||(Q.w="u"in Q?Q.u%7:"W"in Q?1:0),te="Z"in Q?pp(xl(Q.y,0,1)).getUTCDay():dp(xl(Q.y,0,1)).getDay(),Q.m=0,Q.d="W"in Q?(Q.w+6)%7+Q.W*7-(te+5)%7:Q.w+Q.U*7-(te+6)%7);return"Z"in Q?(Q.H+=Q.Z/100|0,Q.M+=Q.Z%100,pp(Q)):dp(Q)}}function k(St,et,Rt,Q){for(var Bt=0,z=et.length,te=Rt.length,Ht,qt;Bt<z;){if(Q>=te)return-1;if(Ht=et.charCodeAt(Bt++),Ht===37){if(Ht=et.charAt(Bt++),qt=I[Ht in ey?et.charAt(Bt++):Ht],!qt||(Q=qt(St,Rt,Q))<0)return-1}else if(Ht!=Rt.charCodeAt(Q++))return-1}return Q}function U(St,et,Rt){var Q=d.exec(et.slice(Rt));return Q?(St.p=g.get(Q[0].toLowerCase()),Rt+Q[0].length):-1}function C(St,et,Rt){var Q=x.exec(et.slice(Rt));return Q?(St.w=E.get(Q[0].toLowerCase()),Rt+Q[0].length):-1}function H(St,et,Rt){var Q=v.exec(et.slice(Rt));return Q?(St.w=_.get(Q[0].toLowerCase()),Rt+Q[0].length):-1}function j(St,et,Rt){var Q=y.exec(et.slice(Rt));return Q?(St.m=L.get(Q[0].toLowerCase()),Rt+Q[0].length):-1}function tt(St,et,Rt){var Q=T.exec(et.slice(Rt));return Q?(St.m=S.get(Q[0].toLowerCase()),Rt+Q[0].length):-1}function mt(St,et,Rt){return k(St,t,et,Rt)}function pt(St,et,Rt){return k(St,n,et,Rt)}function B(St,et,Rt){return k(St,r,et,Rt)}function Y(St){return c[St.getDay()]}function W(St){return u[St.getDay()]}function dt(St){return p[St.getMonth()]}function D(St){return h[St.getMonth()]}function nt(St){return o[+(St.getHours()>=12)]}function At(St){return 1+~~(St.getMonth()/3)}function _t(St){return c[St.getUTCDay()]}function $(St){return u[St.getUTCDay()]}function xt(St){return p[St.getUTCMonth()]}function it(St){return h[St.getUTCMonth()]}function Tt(St){return o[+(St.getUTCHours()>=12)]}function Ct(St){return 1+~~(St.getUTCMonth()/3)}return{format:function(St){var et=P(St+="",N);return et.toString=function(){return St},et},parse:function(St){var et=F(St+="",!1);return et.toString=function(){return St},et},utcFormat:function(St){var et=P(St+="",w);return et.toString=function(){return St},et},utcParse:function(St){var et=F(St+="",!0);return et.toString=function(){return St},et}}}var ey={"-":"",_:" ",0:"0"},Tn=/^\s*\d+/,eN=/^%/,nN=/[\\^$*+?|[\]().{}]/g;function Le(i,t,n){var r=i<0?"-":"",o=(r?-i:i)+"",u=o.length;return r+(u<n?new Array(n-u+1).join(t)+o:o)}function iN(i){return i.replace(nN,"\\$&")}function yl(i){return new RegExp("^(?:"+i.map(iN).join("|")+")","i")}function Sl(i){return new Map(i.map((t,n)=>[t.toLowerCase(),n]))}function aN(i,t,n){var r=Tn.exec(t.slice(n,n+1));return r?(i.w=+r[0],n+r[0].length):-1}function rN(i,t,n){var r=Tn.exec(t.slice(n,n+1));return r?(i.u=+r[0],n+r[0].length):-1}function sN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.U=+r[0],n+r[0].length):-1}function oN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.V=+r[0],n+r[0].length):-1}function lN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.W=+r[0],n+r[0].length):-1}function ny(i,t,n){var r=Tn.exec(t.slice(n,n+4));return r?(i.y=+r[0],n+r[0].length):-1}function iy(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function uN(i,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(i.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function cN(i,t,n){var r=Tn.exec(t.slice(n,n+1));return r?(i.q=r[0]*3-3,n+r[0].length):-1}function fN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.m=r[0]-1,n+r[0].length):-1}function ay(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.d=+r[0],n+r[0].length):-1}function hN(i,t,n){var r=Tn.exec(t.slice(n,n+3));return r?(i.m=0,i.d=+r[0],n+r[0].length):-1}function ry(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.H=+r[0],n+r[0].length):-1}function dN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.M=+r[0],n+r[0].length):-1}function pN(i,t,n){var r=Tn.exec(t.slice(n,n+2));return r?(i.S=+r[0],n+r[0].length):-1}function mN(i,t,n){var r=Tn.exec(t.slice(n,n+3));return r?(i.L=+r[0],n+r[0].length):-1}function gN(i,t,n){var r=Tn.exec(t.slice(n,n+6));return r?(i.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function _N(i,t,n){var r=eN.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function vN(i,t,n){var r=Tn.exec(t.slice(n));return r?(i.Q=+r[0],n+r[0].length):-1}function xN(i,t,n){var r=Tn.exec(t.slice(n));return r?(i.s=+r[0],n+r[0].length):-1}function sy(i,t){return Le(i.getDate(),t,2)}function yN(i,t){return Le(i.getHours(),t,2)}function SN(i,t){return Le(i.getHours()%12||12,t,2)}function MN(i,t){return Le(1+Gl.count(Ta(i),i),t,3)}function PS(i,t){return Le(i.getMilliseconds(),t,3)}function EN(i,t){return PS(i,t)+"000"}function TN(i,t){return Le(i.getMonth()+1,t,2)}function bN(i,t){return Le(i.getMinutes(),t,2)}function AN(i,t){return Le(i.getSeconds(),t,2)}function wN(i){var t=i.getDay();return t===0?7:t}function RN(i,t){return Le(vf.count(Ta(i)-1,i),t,2)}function zS(i){var t=i.getDay();return t>=4||t===0?co(i):co.ceil(i)}function CN(i,t){return i=zS(i),Le(co.count(Ta(i),i)+(Ta(i).getDay()===4),t,2)}function DN(i){return i.getDay()}function UN(i,t){return Le(of.count(Ta(i)-1,i),t,2)}function NN(i,t){return Le(i.getFullYear()%100,t,2)}function LN(i,t){return i=zS(i),Le(i.getFullYear()%100,t,2)}function ON(i,t){return Le(i.getFullYear()%1e4,t,4)}function PN(i,t){var n=i.getDay();return i=n>=4||n===0?co(i):co.ceil(i),Le(i.getFullYear()%1e4,t,4)}function zN(i){var t=i.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Le(t/60|0,"0",2)+Le(t%60,"0",2)}function oy(i,t){return Le(i.getUTCDate(),t,2)}function BN(i,t){return Le(i.getUTCHours(),t,2)}function FN(i,t){return Le(i.getUTCHours()%12||12,t,2)}function IN(i,t){return Le(1+Xm.count(Yr(i),i),t,3)}function BS(i,t){return Le(i.getUTCMilliseconds(),t,3)}function HN(i,t){return BS(i,t)+"000"}function GN(i,t){return Le(i.getUTCMonth()+1,t,2)}function VN(i,t){return Le(i.getUTCMinutes(),t,2)}function kN(i,t){return Le(i.getUTCSeconds(),t,2)}function XN(i){var t=i.getUTCDay();return t===0?7:t}function WN(i,t){return Le(OS.count(Yr(i)-1,i),t,2)}function FS(i){var t=i.getUTCDay();return t>=4||t===0?fo(i):fo.ceil(i)}function YN(i,t){return i=FS(i),Le(fo.count(Yr(i),i)+(Yr(i).getUTCDay()===4),t,2)}function qN(i){return i.getUTCDay()}function jN(i,t){return Le(lf.count(Yr(i)-1,i),t,2)}function ZN(i,t){return Le(i.getUTCFullYear()%100,t,2)}function KN(i,t){return i=FS(i),Le(i.getUTCFullYear()%100,t,2)}function QN(i,t){return Le(i.getUTCFullYear()%1e4,t,4)}function $N(i,t){var n=i.getUTCDay();return i=n>=4||n===0?fo(i):fo.ceil(i),Le(i.getUTCFullYear()%1e4,t,4)}function JN(){return"+0000"}function ly(){return"%"}function uy(i){return+i}function cy(i){return Math.floor(+i/1e3)}var Xs,IS;tL({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function tL(i){return Xs=tN(i),IS=Xs.format,Xs.parse,Xs.utcFormat,Xs.utcParse,Xs}function eL(i){return new Date(i)}function nL(i){return i instanceof Date?+i:+new Date(+i)}function HS(i,t,n,r,o,u,c,h,p,d){var g=NS(),v=g.invert,_=g.domain,x=d(".%L"),E=d(":%S"),T=d("%I:%M"),S=d("%I %p"),y=d("%a %d"),L=d("%b %d"),N=d("%B"),w=d("%Y");function I(P){return(p(P)<P?x:h(P)<P?E:c(P)<P?T:u(P)<P?S:r(P)<P?o(P)<P?y:L:n(P)<P?N:w)(P)}return g.invert=function(P){return new Date(v(P))},g.domain=function(P){return arguments.length?_(Array.from(P,nL)):_().map(eL)},g.ticks=function(P){var F=_();return i(F[0],F[F.length-1],P??10)},g.tickFormat=function(P,F){return F==null?I:d(F)},g.nice=function(P){var F=_();return(!P||typeof P.range!="function")&&(P=t(F[0],F[F.length-1],P??10)),P?_(FU(F,P)):g},g.copy=function(){return US(g,HS(i,t,n,r,o,u,c,h,p,d))},g}function iL(){return DS.apply(HS($U,JU,Ta,Wm,vf,Gl,_f,km,Zs,IS).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Ws(i){return function(){return i}}function aL(i){let t=3;return i.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return i},()=>new vU(t)}function rL(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function GS(i){this._context=i}GS.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function sL(i){return new GS(i)}function oL(i){return i[0]}function lL(i){return i[1]}function uL(i,t){var n=Ws(!0),r=null,o=sL,u=null,c=aL(h);i=typeof i=="function"?i:i===void 0?oL:Ws(i),t=typeof t=="function"?t:t===void 0?lL:Ws(t);function h(p){var d,g=(p=rL(p)).length,v,_=!1,x;for(r==null&&(u=o(x=c())),d=0;d<=g;++d)!(d<g&&n(v=p[d],d,p))===_&&((_=!_)?u.lineStart():u.lineEnd()),_&&u.point(+i(v,d,p),+t(v,d,p));if(x)return u=null,x+""||null}return h.x=function(p){return arguments.length?(i=typeof p=="function"?p:Ws(+p),h):i},h.y=function(p){return arguments.length?(t=typeof p=="function"?p:Ws(+p),h):t},h.defined=function(p){return arguments.length?(n=typeof p=="function"?p:Ws(!!p),h):n},h.curve=function(p){return arguments.length?(o=p,r!=null&&(u=o(r)),h):o},h.context=function(p){return arguments.length?(p==null?r=u=null:u=o(r=p),h):r},h}function fy(i){return i<0?-1:1}function hy(i,t,n){var r=i._x1-i._x0,o=t-i._x1,u=(i._y1-i._y0)/(r||o<0&&-0),c=(n-i._y1)/(o||r<0&&-0),h=(u*o+c*r)/(r+o);return(fy(u)+fy(c))*Math.min(Math.abs(u),Math.abs(c),.5*Math.abs(h))||0}function dy(i,t){var n=i._x1-i._x0;return n?(3*(i._y1-i._y0)/n-t)/2:t}function mp(i,t,n){var r=i._x0,o=i._y0,u=i._x1,c=i._y1,h=(u-r)/3;i._context.bezierCurveTo(r+h,o+h*t,u-h,c-h*n,u,c)}function uf(i){this._context=i}uf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:mp(this,this._t0,dy(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){var n=NaN;if(i=+i,t=+t,!(i===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;break;case 2:this._point=3,mp(this,dy(this,n=hy(this,i,t)),n);break;default:mp(this,this._t0,n=hy(this,i,t));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=t,this._t0=n}}};Object.create(uf.prototype).point=function(i,t){uf.prototype.point.call(this,t,i)};function cL(i){return new uf(i)}function Al(i,t,n){this.k=i,this.x=t,this.y=n}Al.prototype={constructor:Al,scale:function(i){return i===1?this:new Al(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new Al(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Al.prototype;const fL=({data:i,currentTime:t,colorSequence:n})=>{const r=Yt.useRef(),[o,u]=Yt.useState([]);return Yt.useEffect(()=>{if(!i||!t)return;const h=[...i].sort((T,S)=>new Date(T.creation_time)-new Date(S.creation_time)).map(T=>new Date(T.creation_time)),[p,d]=Fc(h),g=_f.range(p,d,1),E=H2().domain([p,d]).value(T=>T).thresholds(g)(h).map(T=>({date:T.x0,count:T.length})).filter(T=>T.date<=t);u(E)},[i,t]),Yt.useEffect(()=>{if(!i||o.length===0)return;const c={top:20,right:20,bottom:30,left:50},h=600-c.left-c.right,p=200-c.top-c.bottom;let d=Ox(r.current).select("svg");d.empty()&&(d=Ox(r.current).append("svg").attr("viewBox",`0 0 ${h+c.left+c.right} ${p+c.top+c.bottom}`).attr("preserveAspectRatio","xMinYMin meet").classed("w-full h-auto",!0),d.append("defs").append("clipPath").attr("id","clip").append("rect").attr("class","clip-rect").attr("x",0).attr("y",0).attr("width",0).attr("height",p),d.append("g").attr("class","chart-group").attr("transform",`translate(${c.left},${c.top})`));const g=d.select("g.chart-group"),_=[...i].sort((w,I)=>new Date(w.creation_time)-new Date(I.creation_time)).map(w=>new Date(w.creation_time)),x=G2(_),E=Dx(_),T=iL().domain([x,E]).range([0,h]),S=LS().domain([0,Dx(o,w=>w.count)]).nice().range([p,0]);g.selectAll(".x-axis").remove(),g.selectAll(".y-axis").remove(),g.append("g").attr("class","x-axis").attr("transform",`translate(0,${p})`).call(j2(T).ticks(5).tickSizeOuter(0)).selectAll("text").style("fill","#fff"),g.append("g").attr("class","y-axis").call(Z2(S).ticks(5)).selectAll("text").style("fill","#fff");const y=uL().x(w=>T(w.date)).y(w=>S(w.count)).curve(cL);let L=g.select("path.line-path");L.empty()&&(L=g.append("path").attr("class","line-path").attr("fill","none").attr("stroke","#06b6d4").attr("stroke-width",2).attr("clip-path","url(#clip)")),L.datum(o).attr("d",y),d.select("defs").select("rect.clip-rect").transition().duration(2e3).attr("width",h);const N=g.selectAll("circle").data(o,w=>w.date);N.enter().append("circle").attr("cx",w=>T(w.date)).attr("cy",w=>S(w.count)).attr("r",0).attr("fill","#06b6d4").transition().delay(w=>T(w.date)/h*2e3).duration(500).attr("r",2),N.exit().remove()},[o,n,i]),gt.jsxs("div",{className:"w-full h-auto bg-black/50 p-4 rounded-lg border border-cyan-500 shadow-lg mt-4",children:[gt.jsx("h3",{className:"text-white font-bold mb-2",children:"Retweet Bursts"}),gt.jsx("div",{ref:r})]})};function gp(i){const t=i.toLocaleString("en-US",{month:"long"}),n=i.getDate(),r=i.getFullYear(),o=n%10===1&&n!==11?"st":n%10===2&&n!==12?"nd":n%10===3&&n!==13?"rd":"th";let u=i.getHours();const c=u>=12?"PM":"AM";u=u%12||12;const h=String(i.getMinutes()).padStart(2,"0"),p=String(i.getSeconds()).padStart(2,"0");return`${t} ${n}${o}, ${r}, ${String(u).padStart(2,"0")}:${h}:${p} ${c}`}const hL=i=>{const t=[];for(let o=0;o<i;o++){const u=Math.floor(360/i*o);t.push(`hsl(${u}, 50%, 50%)`)}return t},dL=["#440154","#472D7B","#3B518B","#2C718E","#21918C","#27AD81","#5CC863","#BADC31"],pL=["#00204C","#143362","#1D5796","#2C75A0","#3D8C8E","#60B56B","#AAD338","#FDE725"],mL=["#0D0887","#4B03A5","#7A04A6","#A61386","#D4316E","#F1605D","#FD8C3E","#FCCE25"],gL=["#000004","#1B0C41","#4A0C6B","#781C6D","#A52C60","#CF4446","#ED6925","#FB9B06"];function Cc(i,t){return Array.from({length:t},(n,r)=>{const o=Math.round(r*(i.length-1)/(t-1));return i[o]})}const py={default:i=>Cc(dL,i),protanopia:i=>Cc(pL,i),deuteranopia:i=>Cc(mL,i),tritanopia:i=>Cc(gL,i),party:()=>[]},_L={FDP:"#FFED00","B90/GRÜNE":"#1FAF12",SPD:"#FF0000",CDU:"#000000",AfD:"#009DE0",BSW:"#fca311",CSU:"#415a77",LINKE:"#DF007D"},vL=({onSwitch:i})=>{const t=Yt.useRef(null),[n,r]=Yt.useState(!0),[o,u]=Yt.useState(""),[c,h]=Yt.useState(null),[p,d]=Yt.useState(!1),[g,v]=Yt.useState(0),[_,x]=Yt.useState(!1),E=Yt.useRef(null),T=Yt.useRef(null),S=Yt.useRef(null),y=Yt.useRef(null),L=Yt.useRef({x:0,y:0}),N=Yt.useRef({x:0,y:0}),w=Yt.useRef(0),I=Yt.useRef(2e3),P=Yt.useRef([]),F=Yt.useRef({min:null,max:null}),k=Yt.useRef(null),U=Yt.useRef(null),[C,H]=Yt.useState(null),[j,tt]=Yt.useState(null),[mt,pt]=Yt.useState(1),[B,Y]=Yt.useState("default"),[W,dt]=Yt.useState([]),[D,nt]=Yt.useState("en"),At=Array.from({length:20},(et,Rt)=>Rt+1),_t={en:{titleLine1:"From Tweet to Trend:",titleLine2:"Visualizing Political Retweet Networks",simulation:"Retweet Simulation",currentTime:"Current Time:",originalBy:"Original tweet by",selectPost:"Select a post to see its retweet activity:",legend:"LEGEND",colorScheme:"Color Scheme",nodeSize:"Node Size",play:"Play",pause:"Pause",switchViz:"Explore Bursts & Network",return:"Return",earliestLatest:"Earliest → Latest",lowFollower:"Low Follower Count",highFollower:"High Follower Count",optPartyColors:"Political party colors",optDefault:"Default",optProtanopia:"Protanopia-friendly",optDeuteranopia:"Deuteranopia-friendly",optTritanopia:"Tritanopia-friendly",titles:{1:"Attention Please",2:"Conservatives serve Europe",3:"Hope for Tomorrow",4:"Election Allegations",5:"Catalyst for Change",6:"Show Your Colors",7:"Advent Interrupted",8:"For Reasons",9:"Suspending Documentation",10:"Tax Relief",11:"Coalition Opportunity",12:"Small Shifts, Big Impact",13:"Voting Paradox",14:"Economic Turnaround Now",15:"",16:"",17:"",18:"",19:"",20:""}},de:{titleLine1:"Vom Tweet zum Trend:",titleLine2:"Politische Retweet-Netzwerke visualisieren",simulation:"Simulation der Retweets",currentTime:"Aktuelle Zeit:",originalBy:"Original-Tweet von",selectPost:"Wählen Sie einen Beitrag, um Retweet-Aktivität zu sehen:",legend:"LEGENDE",colorScheme:"Farb-Schema",nodeSize:"Knotengröße",play:"Abspielen",pause:"Pause",switchViz:"Bursts & Netzwerk erkunden",return:"Return",earliestLatest:"Früheste → Neueste",lowFollower:"Geringe Follower-Zahl",highFollower:"Hohe Follower-Zahl",optPartyColors:"Parteifarben",optDefault:"Standard",optProtanopia:"Protanopie-freundlich",optDeuteranopia:"Deuteranopie-freundlich",optTritanopia:"Tritanopie-freundlich",titles:{1:"Aufmerksamkeit erbeten",2:"Konservative dienen Europa",3:"Hoffnung für morgen",4:"Wahlvorwürfe",5:"Katalysator für Veränderung",6:"Zeigt eure Farben",7:"Unterbrochener Advent",8:"Aus Gründen",9:"Aussetzung der Dokumentation",10:"Steuererleichterungen",11:"Koalitionschance",12:"Kleine Veränderungen, große Wirkung",13:"Wahlparadox",14:"Wirtschaftliche Trendwende jetzt",15:"",16:"",17:"",18:"",19:"",20:""}}};Yt.useEffect(()=>{r(!0),fetch(`/data/selected_retweets_${mt}.json`).then(et=>et.json()).then(et=>{const Rt=[...et].sort((Bt,z)=>new Date(Bt.creation_time)-new Date(z.creation_time));tt(Rt);const Q=new Date(Rt[0].creation_time);h(Q),u(gp(Q)),r(!1)}).catch(et=>{console.error("Error loading JSON data:",et),r(!1)})},[mt]),Yt.useEffect(()=>{fetch("/data/selected_retweets_original_tweets.json").then(et=>et.json()).then(et=>{const Rt=et.reduce((Q,Bt)=>(Q[Bt.platform_post_id]=Bt,Q),{});H(Rt)}).catch(et=>{console.error("Error loading original tweet details:",et)})},[]),Yt.useEffect(()=>{if(!j)return;const et=new By;et.background=new Me(0),T.current=et;const Rt=new ni(75,window.innerWidth/window.innerHeight,.1,1e3);Rt.position.z=15,S.current=Rt;const Q=new Zy({antialias:!0});Q.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(Q.domElement),y.current=Q;const Bt=zt=>{zt.preventDefault();const Ot=.05;S.current.position.z+=zt.deltaY*Ot,S.current.position.z=Math.max(5,Math.min(50,S.current.position.z))};Q.domElement.addEventListener("wheel",Bt,{passive:!1});const z=new Ys;et.add(z);const te=(zt,Ot,ie=0)=>{const Jt=document.createElement("canvas"),me=Jt.getContext("2d");Jt.width=256,Jt.height=128,me.font="12px Arial",me.fillStyle=`rgba(${ie>>16&255}, ${ie>>8&255}, ${ie&255}, 1.0)`,me.fillText(zt,0,64);const X=new jc(Jt),Ft=new Cm({map:X}),ht=new Iy(Ft);return ht.position.set(Ot.x-2,Ot.y+.2,Ot.z),ht.scale.set(5,2.5,1),ht},Ht=new ro(1,32,32),qt=new io({color:4886754}),jt=new ii(Ht,qt);jt.visible=!0,z.add(jt),k.current=jt;const he=te("Original Tweet by @roberthabeck",new at(0,0,0),1942002);he.visible=!0,z.add(he),U.current=he;const Kt=new Date(j[0].creation_time),O=new Date(j[j.length-1].creation_time);F.current={min:Kt,max:O};const b=hL(70),st=6e4,Mt=[];let wt=[];for(let zt=0;zt<j.length;zt++){const Ot=j[zt],ie=new Date(Ot.creation_time);if(zt===0)wt.push(Ot);else{const Jt=new Date(j[zt-1].creation_time);ie-Jt>st&&(Mt.push(wt),wt=[]),wt.push(Ot)}}wt.length>0&&Mt.push(wt);const ot=[];let Pt=0;Mt.forEach((zt,Ot)=>{const ie=Ot/Mt.length*Math.PI*2;zt.forEach((Jt,me)=>{Pt++;const X=new Date(Jt.creation_time),ht=2+(zt.length>1?me/(zt.length-1):.5)*10,yt=Math.cos(ie)*ht,Vt=Math.sin(ie)*ht,fe=.3+parseFloat(Jt.follower_count)/1e6*.7,Be=new ro(fe,32,32),je=b[Pt%b.length],we=new io({color:new Me(je),transparent:!0,opacity:0}),vn=new ii(Be,we);vn.position.set(yt,Vt,0),vn.userData={data:Jt,time:X,visible:!1};const $e=te(Jt.dboes_name,new at(yt,Vt,0),16777215);$e.visible=!1;const nn=me===0?new at(0,0,0):ot[ot.length-1].node.position,fn=new Dm({color:new Me(je),transparent:!0,opacity:0}),Cn=new gi().setFromPoints([nn,new at(yt,Vt,0)]),Di=new Gy(Cn,fn);z.add(vn),z.add($e),z.add(Di),ot.push({node:vn,label:$e,line:Di,time:X})})}),P.current=ot,h(F.current.min),u(gp(F.current.min)),r(!1);const Nt=zt=>{document.addEventListener("mousemove",Lt),document.addEventListener("mouseup",ce),L.current.x=zt.clientX,L.current.y=zt.clientY},Lt=zt=>{const Ot=zt.clientX-L.current.x,ie=zt.clientY-L.current.y;L.current.x=zt.clientX,L.current.y=zt.clientY,N.current.y+=Ot*.01,N.current.x+=ie*.01},ce=()=>{document.removeEventListener("mousemove",Lt),document.removeEventListener("mouseup",ce)};Q.domElement.addEventListener("mousedown",Nt);const Dt=()=>{S.current&&y.current&&(S.current.aspect=window.innerWidth/window.innerHeight,S.current.updateProjectionMatrix(),y.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Dt),Q.render(et,Rt);const Gt=()=>{const zt=t.current.clientWidth,Ot=t.current.clientHeight;Q.setSize(zt,Ot),Rt.aspect=zt/Ot,Rt.updateProjectionMatrix()};window.addEventListener("resize",Gt),Gt();const $t=()=>{z.rotation.x+=(N.current.x-z.rotation.x)*.05,z.rotation.y+=(N.current.y-z.rotation.y)*.05,y.current&&T.current&&S.current&&y.current.render(T.current,S.current),E.current=requestAnimationFrame($t)};return E.current=requestAnimationFrame($t),()=>{window.removeEventListener("resize",Gt),window.removeEventListener("resize",Dt),cancelAnimationFrame(E.current),Q.domElement.removeEventListener("mousedown",Nt),Q.domElement.removeEventListener("wheel",Bt),document.removeEventListener("mousemove",Lt),document.removeEventListener("mouseup",ce),t.current&&Q.domElement&&t.current.removeChild(Q.domElement),Ht.dispose(),qt.dispose(),ot.forEach(zt=>{zt.node.geometry&&zt.node.geometry.dispose(),zt.node.material&&zt.node.material.dispose(),zt.line.geometry&&zt.line.geometry.dispose(),zt.line.material&&zt.line.material.dispose()})}},[j]),Yt.useEffect(()=>{let et;return p&&(w.current=Date.now(),k.current&&(k.current.visible=!0),U.current&&(U.current.visible=!0),et=setInterval(()=>{const{min:Rt,max:Q}=F.current;if(!Rt||!Q)return;const z=(Date.now()-w.current)*I.current,te=new Date(Rt.getTime()+z),Ht=Q.getTime()-Rt.getTime(),qt=te.getTime()-Rt.getTime(),jt=Math.min(qt/Ht*100,100);h(te),u(gp(te)),v(jt),P.current.forEach(he=>{if(te>=he.time&&!he.node.userData.visible){he.node.material.opacity=1,he.label.visible=!0,he.line.material.opacity=.7,he.node.userData.visible=!0;const Kt=new at(1.5,1.5,1.5);he.node.scale.copy(Kt),setTimeout(()=>{he.node.scale.set(1,1,1)},300)}}),te>=Q&&(d(!1),clearInterval(et))},100)),()=>{et&&clearInterval(et)}},[p]),Yt.useEffect(()=>{if(!j)return;const et=new ky,Rt=new Ee,Q=Bt=>{Rt.x=Bt.clientX/window.innerWidth*2-1,Rt.y=-(Bt.clientY/window.innerHeight)*2+1,et.setFromCamera(Rt,S.current);const z=P.current.map(Ht=>Ht.node),te=et.intersectObjects(z);if(te.length>0){const Ht=te[0].object;P.current.forEach(qt=>{qt.node===Ht?(qt.node.material.opacity=1,qt.label.material&&(qt.label.material.opacity=1)):(qt.node.material.opacity=.3,qt.label.material&&(qt.label.material.opacity=.3))})}else P.current.forEach(Ht=>{Ht.node.userData.visible?(Ht.node.material.opacity=1,Ht.label.material&&(Ht.label.material.opacity=1)):(Ht.node.material.opacity=0,Ht.label.material&&(Ht.label.material.opacity=0))})};return window.addEventListener("mousemove",Q),()=>{window.removeEventListener("mousemove",Q)}},[j]),Yt.useEffect(()=>{k.current&&U.current&&(k.current.visible=!0,U.current.visible=!0)},[mt]);const $=()=>{p?d(!1):(g>=100&&(P.current.forEach(et=>{et.node.material.opacity=0,et.label.visible=!1,et.line.material.opacity=0,et.node.userData.visible=!1}),u(F.current.min),v(0)),d(!0))},xt=j&&C&&j[0]?C[j[0].shared_post_id]:null;Yt.useEffect(()=>{var et;if(j&&C&&((et=j[0])!=null&&et.shared_post_id)&&U.current){const Rt=j[0].shared_post_id,Q=C[Rt];if(Q){const z=`Original Tweet by @${Q.platform_post_owner_name}`,te=document.createElement("canvas"),Ht=te.getContext("2d");te.width=256,te.height=128,Ht.font="12px Arial",Ht.fillStyle="rgba(29,161,242,1.0)",Ht.fillText(z,0,64);const qt=new jc(te);U.current.material.map=qt,U.current.material.needsUpdate=!0}}},[j,C]),Yt.useEffect(()=>{if(P.current.length){const et=P.current.length,Rt=py[B](et);P.current.forEach((Q,Bt)=>{const z=new Me(Rt[Bt%Rt.length]);Q.node.material.color.set(z),Q.line.material.color.set(z)})}},[B]);const it=At.map(et=>({id:et,label:_t[D].titles[et]||""})),St=`linear-gradient(to right, ${(B==="party"?[...new Set(j.map(et=>et.party_color))]:py[B](7)).join(", ")})`;return gt.jsxs("div",{className:"w-full h-full relative bg-black",children:[gt.jsx("div",{ref:t,className:"w-full h-[50vh] mt-[50vh] md:h-screen md:mt-0"}),gt.jsxs("h2",{className:"absolute top-20 -mt-5 mr-5 md:top-5 md:mt-0 md:mr-0 left-10",children:[gt.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:_t[D].titleLine1}),gt.jsx("span",{className:"block text-4xl font-extrabold text-white border-l-4 border-cyan-500 pl-4 drop-shadow-md",children:_t[D].titleLine2})]}),gt.jsx("div",{className:"absolute top-4 right-10 flex space-x-2",children:["en","de"].map(et=>gt.jsx("button",{onClick:()=>nt(et),className:`px-3 py-1 rounded border ${D===et?"bg-cyan-500 text-black border-cyan-500":"bg-black text-white border-gray-600 hover:border-cyan-500"} transition`,children:et.toUpperCase()},et))}),gt.jsx("div",{className:`
    relative 
    mb-4 mt-5 
    w-full max-w-[30rem] mx-auto
    overflow-hidden
    md:overflow-visible md:px-0
    md:absolute md:bottom-80 md:left-10 md:mb-0 md:mt-0 md:w-[30rem]
  `,children:gt.jsx(fL,{data:j,currentTime:c,colorSequence:W})}),gt.jsxs("div",{className:`
       relative            /* mobile: in-flow */
       mb-4                /* mobile: gap below */
       left-10
       w-[31rem]
       md:absolute md:top-40 md:left-10  /* desktop: back to absolute */
       bg-black w-[30rem] p-6 rounded-lg border border-cyan-500 shadow-lg
     `,children:[" ",gt.jsx("div",{className:"font-bold mb-2 text-white text-xl",children:_t[D].simulation}),gt.jsxs("div",{className:"mb-2 text-white",children:[_t[D].currentTime," ",c&&c.toLocaleString()]}),gt.jsx("div",{className:"w-64 h-2 bg-gray-800 rounded-full mb-2",children:gt.jsx("div",{className:"h-full bg-cyan-500 rounded-full",style:{width:`${g}%`}})}),xt&&gt.jsxs("div",{className:"text-white text-sm",children:[_t[D].originalBy," @",xt.platform_post_owner_name," –"," ",j.length,j.length>1?" Accounts":" Account"]})]}),gt.jsxs("div",{className:`
        absolute top-[200px] md:top-[440px] 
        left-0 right-0 mx-auto
        md:right-10 md:left-auto
        text-left md:text-right
        py-2  
        w-full max-w-sm md:max-w-none
        `,children:[gt.jsx("div",{className:"mt-2 text-white text-sm sm:text-md md:text-lg",children:_t[D].selectPost}),gt.jsx("div",{className:"text-cyan-500 grid grid-cols-2 gap-2 md:flex md:flex-col md:items-end",children:it.map(et=>gt.jsx("span",{onClick:()=>pt(et.id),className:`
          cursor-pointer
          ${mt===et.id?"font-bold text-lg sm:text-xl md:text-2xl":"text-sm sm:text-md md:text-lg"}
        `,children:et.label},et.id))})]}),gt.jsxs("div",{className:` relative            /* mobile: in-flow */
       mb-4                /* mobile: gap below */
       mt-5
    ml-10
    w-[30rem]
       md:absolute md:right-10 md:top-20 -mt-5 bg-black p-4 rounded-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition duration-300 ease-in-out w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80`,children:[" ",gt.jsx("div",{className:"font-bold mb-2 text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",children:_t[D].legend}),gt.jsx("hr",{className:"border-t-2 border-white my-2"}),gt.jsx("div",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:_t[D].colorScheme}),gt.jsxs("div",{className:"text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[gt.jsxs("div",{className:"mb-3",children:[gt.jsx("div",{className:"mb-3",children:gt.jsxs("select",{value:B,onChange:et=>Y(et.target.value),className:"p-2 bg-gray-800 text-white rounded",children:[gt.jsx("option",{value:"party",children:_t[D].optPartyColors}),gt.jsx("option",{value:"default",children:_t[D].optDefault}),gt.jsx("option",{value:"protanopia",children:_t[D].optProtanopia}),gt.jsx("option",{value:"deuteranopia",children:_t[D].optDeuteranopia}),gt.jsx("option",{value:"tritanopia",children:_t[D].optTritanopia})]})}),B==="party"?gt.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(_L).map(([et,Rt])=>gt.jsxs("div",{className:"flex items-center space-x-2",children:[gt.jsx("div",{className:"w-4 h-4 border border-gray-600 rounded-sm",style:{backgroundColor:Rt}}),gt.jsx("span",{className:"text-white text-sm",children:et})]},et))}):gt.jsxs(gt.Fragment,{children:[gt.jsx("div",{className:"w-full h-4 rounded",style:{background:St}}),gt.jsx("p",{className:"mt-1 text-white",children:_t[D].earliestLatest})]})]}),gt.jsxs("div",{children:[gt.jsx("p",{className:"font-bold mb-2 text-white text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",children:_t[D].nodeSize}),gt.jsxs("div",{className:"flex items-center space-x-2 text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md",children:[gt.jsx("div",{className:"w-4 h-4 bg-white ml-2 mr-2 rounded-full border border-cyan-500"}),gt.jsx("span",{children:_t[D].lowFollower})]}),gt.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[gt.jsx("div",{className:"w-8 h-8 bg-white rounded-full border border-cyan-500"}),gt.jsx("span",{children:_t[D].highFollower})]})]})]})]}),gt.jsxs("div",{className:`
    absolute left-1/2 transform -translate-x-1/2 top-80 mt-60
    flex space-x-4
    md:block md:transform-none md:left-auto md:translate-x-0 md:top-auto md:mt-0
  `,children:[gt.jsx("button",{onClick:$,className:`
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
    `,children:_t[D].return})]})]})};function xL(){const[i,t]=Yt.useState("circular"),n=()=>{t(r=>r==="circular"?"network":"circular")};return gt.jsx("div",{className:"flex flex-col-reverse md:flex-row items-center md:items-start min-h-screen",children:i==="circular"?gt.jsx(A2,{onSwitch:n}):gt.jsx(vL,{onSwitch:n})})}JE.createRoot(document.getElementById("root")).render(gt.jsx(Yt.StrictMode,{children:gt.jsx(xL,{})}));
