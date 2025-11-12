(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function u(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=u(f);fetch(f.href,p)}})();function zg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ko={exports:{}},Yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Mg(){if(ym)return Yl;ym=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,f,p){var g=null;if(p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),"key"in f){p={};for(var S in f)S!=="key"&&(p[S]=f[S])}else p=f;return f=p.ref,{$$typeof:i,type:c,key:g,ref:f!==void 0?f:null,props:p}}return Yl.Fragment=o,Yl.jsx=u,Yl.jsxs=u,Yl}var vm;function Ug(){return vm||(vm=1,Ko.exports=Mg()),Ko.exports}var r=Ug(),Jo={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function Bg(){if(bm)return le;bm=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),D=Symbol.iterator;function q(C){return C===null||typeof C!="object"?null:(C=D&&C[D]||C["@@iterator"],typeof C=="function"?C:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function _(C,F,Z){this.props=C,this.context=F,this.refs=T,this.updater=Z||b}_.prototype.isReactComponent={},_.prototype.setState=function(C,F){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,F,"setState")},_.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function O(){}O.prototype=_.prototype;function L(C,F,Z){this.props=C,this.context=F,this.refs=T,this.updater=Z||b}var Q=L.prototype=new O;Q.constructor=L,A(Q,_.prototype),Q.isPureReactComponent=!0;var te=Array.isArray;function fe(){}var I={H:null,A:null,T:null,S:null},ge=Object.prototype.hasOwnProperty;function ue(C,F,Z){var K=Z.ref;return{$$typeof:i,type:C,key:F,ref:K!==void 0?K:null,props:Z}}function Ue(C,F){return ue(C.type,F,C.props)}function Me(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function Oe(C){var F={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(Z){return F[Z]})}var Ht=/\/+/g;function De(C,F){return typeof C=="object"&&C!==null&&C.key!=null?Oe(""+C.key):F.toString(36)}function Be(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(fe,fe):(C.status="pending",C.then(function(F){C.status==="pending"&&(C.status="fulfilled",C.value=F)},function(F){C.status==="pending"&&(C.status="rejected",C.reason=F)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function U(C,F,Z,K,ne){var se=typeof C;(se==="undefined"||se==="boolean")&&(C=null);var ye=!1;if(C===null)ye=!0;else switch(se){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(C.$$typeof){case i:case o:ye=!0;break;case v:return ye=C._init,U(ye(C._payload),F,Z,K,ne)}}if(ye)return ne=ne(C),ye=K===""?"."+De(C,0):K,te(ne)?(Z="",ye!=null&&(Z=ye.replace(Ht,"$&/")+"/"),U(ne,F,Z,"",function(Jn){return Jn})):ne!=null&&(Me(ne)&&(ne=Ue(ne,Z+(ne.key==null||C&&C.key===ne.key?"":(""+ne.key).replace(Ht,"$&/")+"/")+ye)),F.push(ne)),1;ye=0;var Ie=K===""?".":K+":";if(te(C))for(var Re=0;Re<C.length;Re++)K=C[Re],se=Ie+De(K,Re),ye+=U(K,F,Z,se,ne);else if(Re=q(C),typeof Re=="function")for(C=Re.call(C),Re=0;!(K=C.next()).done;)K=K.value,se=Ie+De(K,Re++),ye+=U(K,F,Z,se,ne);else if(se==="object"){if(typeof C.then=="function")return U(Be(C),F,Z,K,ne);throw F=String(C),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return ye}function X(C,F,Z){if(C==null)return C;var K=[],ne=0;return U(C,K,"","",function(se){return F.call(Z,se,ne++)}),K}function P(C){if(C._status===-1){var F=C._result;F=F(),F.then(function(Z){(C._status===0||C._status===-1)&&(C._status=1,C._result=Z)},function(Z){(C._status===0||C._status===-1)&&(C._status=2,C._result=Z)}),C._status===-1&&(C._status=0,C._result=F)}if(C._status===1)return C._result.default;throw C._result}var Ne=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},me={map:X,forEach:function(C,F,Z){X(C,function(){F.apply(this,arguments)},Z)},count:function(C){var F=0;return X(C,function(){F++}),F},toArray:function(C){return X(C,function(F){return F})||[]},only:function(C){if(!Me(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return le.Activity=N,le.Children=me,le.Component=_,le.Fragment=u,le.Profiler=f,le.PureComponent=L,le.StrictMode=c,le.Suspense=y,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,le.__COMPILER_RUNTIME={__proto__:null,c:function(C){return I.H.useMemoCache(C)}},le.cache=function(C){return function(){return C.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(C,F,Z){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var K=A({},C.props),ne=C.key;if(F!=null)for(se in F.key!==void 0&&(ne=""+F.key),F)!ge.call(F,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&F.ref===void 0||(K[se]=F[se]);var se=arguments.length-2;if(se===1)K.children=Z;else if(1<se){for(var ye=Array(se),Ie=0;Ie<se;Ie++)ye[Ie]=arguments[Ie+2];K.children=ye}return ue(C.type,ne,K)},le.createContext=function(C){return C={$$typeof:g,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:p,_context:C},C},le.createElement=function(C,F,Z){var K,ne={},se=null;if(F!=null)for(K in F.key!==void 0&&(se=""+F.key),F)ge.call(F,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ne[K]=F[K]);var ye=arguments.length-2;if(ye===1)ne.children=Z;else if(1<ye){for(var Ie=Array(ye),Re=0;Re<ye;Re++)Ie[Re]=arguments[Re+2];ne.children=Ie}if(C&&C.defaultProps)for(K in ye=C.defaultProps,ye)ne[K]===void 0&&(ne[K]=ye[K]);return ue(C,se,ne)},le.createRef=function(){return{current:null}},le.forwardRef=function(C){return{$$typeof:S,render:C}},le.isValidElement=Me,le.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:P}},le.memo=function(C,F){return{$$typeof:h,type:C,compare:F===void 0?null:F}},le.startTransition=function(C){var F=I.T,Z={};I.T=Z;try{var K=C(),ne=I.S;ne!==null&&ne(Z,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(fe,Ne)}catch(se){Ne(se)}finally{F!==null&&Z.types!==null&&(F.types=Z.types),I.T=F}},le.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},le.use=function(C){return I.H.use(C)},le.useActionState=function(C,F,Z){return I.H.useActionState(C,F,Z)},le.useCallback=function(C,F){return I.H.useCallback(C,F)},le.useContext=function(C){return I.H.useContext(C)},le.useDebugValue=function(){},le.useDeferredValue=function(C,F){return I.H.useDeferredValue(C,F)},le.useEffect=function(C,F){return I.H.useEffect(C,F)},le.useEffectEvent=function(C){return I.H.useEffectEvent(C)},le.useId=function(){return I.H.useId()},le.useImperativeHandle=function(C,F,Z){return I.H.useImperativeHandle(C,F,Z)},le.useInsertionEffect=function(C,F){return I.H.useInsertionEffect(C,F)},le.useLayoutEffect=function(C,F){return I.H.useLayoutEffect(C,F)},le.useMemo=function(C,F){return I.H.useMemo(C,F)},le.useOptimistic=function(C,F){return I.H.useOptimistic(C,F)},le.useReducer=function(C,F,Z){return I.H.useReducer(C,F,Z)},le.useRef=function(C){return I.H.useRef(C)},le.useState=function(C){return I.H.useState(C)},le.useSyncExternalStore=function(C,F,Z){return I.H.useSyncExternalStore(C,F,Z)},le.useTransition=function(){return I.H.useTransition()},le.version="19.2.0",le}var xm;function ru(){return xm||(xm=1,Jo.exports=Bg()),Jo.exports}var E=ru();const Lg=zg(E);var Io={exports:{}},Vl={},Wo={exports:{}},Po={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Hg(){return Sm||(Sm=1,(function(i){function o(U,X){var P=U.length;U.push(X);e:for(;0<P;){var Ne=P-1>>>1,me=U[Ne];if(0<f(me,X))U[Ne]=X,U[P]=me,P=Ne;else break e}}function u(U){return U.length===0?null:U[0]}function c(U){if(U.length===0)return null;var X=U[0],P=U.pop();if(P!==X){U[0]=P;e:for(var Ne=0,me=U.length,C=me>>>1;Ne<C;){var F=2*(Ne+1)-1,Z=U[F],K=F+1,ne=U[K];if(0>f(Z,P))K<me&&0>f(ne,Z)?(U[Ne]=ne,U[K]=P,Ne=K):(U[Ne]=Z,U[F]=P,Ne=F);else if(K<me&&0>f(ne,P))U[Ne]=ne,U[K]=P,Ne=K;else break e}}return X}function f(U,X){var P=U.sortIndex-X.sortIndex;return P!==0?P:U.id-X.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var g=Date,S=g.now();i.unstable_now=function(){return g.now()-S}}var y=[],h=[],v=1,N=null,D=3,q=!1,b=!1,A=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function Q(U){for(var X=u(h);X!==null;){if(X.callback===null)c(h);else if(X.startTime<=U)c(h),X.sortIndex=X.expirationTime,o(y,X);else break;X=u(h)}}function te(U){if(A=!1,Q(U),!b)if(u(y)!==null)b=!0,fe||(fe=!0,Oe());else{var X=u(h);X!==null&&Be(te,X.startTime-U)}}var fe=!1,I=-1,ge=5,ue=-1;function Ue(){return T?!0:!(i.unstable_now()-ue<ge)}function Me(){if(T=!1,fe){var U=i.unstable_now();ue=U;var X=!0;try{e:{b=!1,A&&(A=!1,O(I),I=-1),q=!0;var P=D;try{t:{for(Q(U),N=u(y);N!==null&&!(N.expirationTime>U&&Ue());){var Ne=N.callback;if(typeof Ne=="function"){N.callback=null,D=N.priorityLevel;var me=Ne(N.expirationTime<=U);if(U=i.unstable_now(),typeof me=="function"){N.callback=me,Q(U),X=!0;break t}N===u(y)&&c(y),Q(U)}else c(y);N=u(y)}if(N!==null)X=!0;else{var C=u(h);C!==null&&Be(te,C.startTime-U),X=!1}}break e}finally{N=null,D=P,q=!1}X=void 0}}finally{X?Oe():fe=!1}}}var Oe;if(typeof L=="function")Oe=function(){L(Me)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,De=Ht.port2;Ht.port1.onmessage=Me,Oe=function(){De.postMessage(null)}}else Oe=function(){_(Me,0)};function Be(U,X){I=_(function(){U(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(U){U.callback=null},i.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<U?Math.floor(1e3/U):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_next=function(U){switch(D){case 1:case 2:case 3:var X=3;break;default:X=D}var P=D;D=X;try{return U()}finally{D=P}},i.unstable_requestPaint=function(){T=!0},i.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var P=D;D=U;try{return X()}finally{D=P}},i.unstable_scheduleCallback=function(U,X,P){var Ne=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Ne+P:Ne):P=Ne,U){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=P+me,U={id:v++,callback:X,priorityLevel:U,startTime:P,expirationTime:me,sortIndex:-1},P>Ne?(U.sortIndex=P,o(h,U),u(y)===null&&U===u(h)&&(A?(O(I),I=-1):A=!0,Be(te,P-Ne))):(U.sortIndex=me,o(y,U),b||q||(b=!0,fe||(fe=!0,Oe()))),U},i.unstable_shouldYield=Ue,i.unstable_wrapCallback=function(U){var X=D;return function(){var P=D;D=X;try{return U.apply(this,arguments)}finally{D=P}}}})(Po)),Po}var Nm;function Fg(){return Nm||(Nm=1,Wo.exports=Hg()),Wo.exports}var eu={exports:{}},nt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function qg(){if(jm)return nt;jm=1;var i=ru();function o(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(y,h,v){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:N==null?null:""+N,children:y,containerInfo:h,implementation:v}}var g=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,nt.createPortal=function(y,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return p(y,h,null,v)},nt.flushSync=function(y){var h=g.T,v=c.p;try{if(g.T=null,c.p=2,y)return y()}finally{g.T=h,c.p=v,c.d.f()}},nt.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(y,h))},nt.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},nt.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var v=h.as,N=S(v,h.crossOrigin),D=typeof h.integrity=="string"?h.integrity:void 0,q=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?c.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:N,integrity:D,fetchPriority:q}):v==="script"&&c.d.X(y,{crossOrigin:N,integrity:D,fetchPriority:q,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},nt.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=S(h.as,h.crossOrigin);c.d.M(y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(y)},nt.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,N=S(v,h.crossOrigin);c.d.L(y,v,{crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},nt.preloadModule=function(y,h){if(typeof y=="string")if(h){var v=S(h.as,h.crossOrigin);c.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(y)},nt.requestFormReset=function(y){c.d.r(y)},nt.unstable_batchedUpdates=function(y,h){return y(h)},nt.useFormState=function(y,h,v){return g.H.useFormState(y,h,v)},nt.useFormStatus=function(){return g.H.useHostTransitionStatus()},nt.version="19.2.0",nt}var Cm;function Fm(){if(Cm)return eu.exports;Cm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),eu.exports=qg(),eu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function Gg(){if(Em)return Vl;Em=1;var i=Fg(),o=ru(),u=Fm();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var s=l.alternate;if(s===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===a)return y(l),e;if(s===n)return y(l),t;s=s.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=s;else{for(var d=!1,m=l.child;m;){if(m===a){d=!0,a=l,n=s;break}if(m===n){d=!0,n=l,a=s;break}m=m.sibling}if(!d){for(m=s.child;m;){if(m===a){d=!0,a=s,n=l;break}if(m===n){d=!0,n=s,a=l;break}m=m.sibling}if(!d)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,D=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Me=Symbol.iterator;function Oe(e){return e===null||typeof e!="object"?null:(e=Me&&e[Me]||e["@@iterator"],typeof e=="function"?e:null)}var Ht=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case _:return"Profiler";case T:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:De(e.type)||"Memo";case ge:t=e._payload,e=e._init;try{return De(e(t))}catch{}}return null}var Be=Array.isArray,U=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},Ne=[],me=-1;function C(e){return{current:e}}function F(e){0>me||(e.current=Ne[me],Ne[me]=null,me--)}function Z(e,t){me++,Ne[me]=e.current,e.current=t}var K=C(null),ne=C(null),se=C(null),ye=C(null);function Ie(e,t){switch(Z(se,t),Z(ne,e),Z(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ff(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ff(t),e=qf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(K),Z(K,e)}function Re(){F(K),F(ne),F(se)}function Jn(e){e.memoizedState!==null&&Z(ye,e);var t=K.current,a=qf(t,e.type);t!==a&&(Z(ne,e),Z(K,a))}function ei(e){ne.current===e&&(F(K),F(ne)),ye.current===e&&(F(ye),Hl._currentValue=P)}var Os,hu;function Fa(e){if(Os===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Os=t&&t[1]||"",hu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Os+e+hu}var Rs=!1;function ks(e,t){if(!e||Rs)return"";Rs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(M){var z=M}Reflect.construct(e,[],G)}else{try{G.call()}catch(M){z=M}e.call(G.prototype)}}else{try{throw Error()}catch(M){z=M}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(M){if(M&&z&&typeof M.stack=="string")return[M.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),d=s[0],m=s[1];if(d&&m){var x=d.split(`
`),k=m.split(`
`);for(l=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;if(n===x.length||l===k.length)for(n=x.length-1,l=k.length-1;1<=n&&0<=l&&x[n]!==k[l];)l--;for(;1<=n&&0<=l;n--,l--)if(x[n]!==k[l]){if(n!==1||l!==1)do if(n--,l--,0>l||x[n]!==k[l]){var B=`
`+x[n].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=n&&0<=l);break}}}finally{Rs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Fa(a):""}function dp(e,t){switch(e.tag){case 26:case 27:case 5:return Fa(e.type);case 16:return Fa("Lazy");case 13:return e.child!==t&&t!==null?Fa("Suspense Fallback"):Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 15:return ks(e.type,!1);case 11:return ks(e.type.render,!1);case 1:return ks(e.type,!0);case 31:return Fa("Activity");default:return""}}function gu(e){try{var t="",a=null;do t+=dp(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var _s=Object.prototype.hasOwnProperty,zs=i.unstable_scheduleCallback,Ms=i.unstable_cancelCallback,fp=i.unstable_shouldYield,mp=i.unstable_requestPaint,pt=i.unstable_now,pp=i.unstable_getCurrentPriorityLevel,yu=i.unstable_ImmediatePriority,vu=i.unstable_UserBlockingPriority,ti=i.unstable_NormalPriority,hp=i.unstable_LowPriority,bu=i.unstable_IdlePriority,gp=i.log,yp=i.unstable_setDisableYieldValue,In=null,ht=null;function ha(e){if(typeof gp=="function"&&yp(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(In,e)}catch{}}var gt=Math.clz32?Math.clz32:xp,vp=Math.log,bp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(vp(e)/bp|0)|0}var ai=256,ni=262144,li=4194304;function qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ii(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~s,n!==0?l=qa(n):(d&=m,d!==0?l=qa(d):a||(a=m&~e,a!==0&&(l=qa(a))))):(m=n&~s,m!==0?l=qa(m):d!==0?l=qa(d):a||(a=n&~e,a!==0&&(l=qa(a)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:l}function Wn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xu(){var e=li;return li<<=1,(li&62914560)===0&&(li=4194304),e}function Us(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Pn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Np(e,t,a,n,l,s){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,x=e.expirationTimes,k=e.hiddenUpdates;for(a=d&~a;0<a;){var B=31-gt(a),G=1<<B;m[B]=0,x[B]=-1;var z=k[B];if(z!==null)for(k[B]=null,B=0;B<z.length;B++){var M=z[B];M!==null&&(M.lane&=-536870913)}a&=~G}n!==0&&Su(e,n,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function Su(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-gt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Nu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-gt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function ju(e,t){var a=t&-t;return a=(a&42)!==0?1:Bs(a),(a&(e.suspendedLanes|t))!==0?0:a}function Bs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cu(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:cm(e.type))}function Eu(e,t){var a=X.p;try{return X.p=e,t()}finally{X.p=a}}var ga=Math.random().toString(36).slice(2),We="__reactFiber$"+ga,rt="__reactProps$"+ga,cn="__reactContainer$"+ga,Hs="__reactEvents$"+ga,jp="__reactListeners$"+ga,Cp="__reactHandles$"+ga,Au="__reactResources$"+ga,el="__reactMarker$"+ga;function Fs(e){delete e[We],delete e[rt],delete e[Hs],delete e[jp],delete e[Cp]}function dn(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[cn]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Qf(e);e!==null;){if(a=e[We])return a;e=Qf(e)}return t}e=a,a=e.parentNode}return null}function fn(e){if(e=e[We]||e[cn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function tl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function mn(e){var t=e[Au];return t||(t=e[Au]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[el]=!0}var Tu=new Set,wu={};function Ga(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(wu[e]=t,e=0;e<t.length;e++)Tu.add(t[e])}var Ep=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Du={},Ou={};function Ap(e){return _s.call(Ou,e)?!0:_s.call(Du,e)?!1:Ep.test(e)?Ou[e]=!0:(Du[e]=!0,!1)}function si(e,t,a){if(Ap(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function $t(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ru(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tp(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){a=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qs(e){if(!e._valueTracker){var t=Ru(e)?"checked":"value";e._valueTracker=Tp(e,t,""+e[t])}}function ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ru(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wp=/[\n"\\]/g;function At(e){return e.replace(wp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gs(e,t,a,n,l,s,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ys(e,d,Et(t)):a!=null?Ys(e,d,Et(a)):n!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Et(m):e.removeAttribute("name")}function _u(e,t,a,n,l,s,d,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){qs(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),qs(e)}function Ys(e,t,a){t==="number"&&oi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function zu(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function Mu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Be(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),qs(e)}function gn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Dp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Dp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Bu(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Uu(e,l,n)}else for(var s in t)t.hasOwnProperty(s)&&Uu(e,s,t[s])}function Vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ui(e){return Rp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qt(){}var Xs=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yn=null,vn=null;function Lu(e){var t=fn(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[rt]||null;if(!l)throw Error(c(90));Gs(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&ku(n)}break e;case"textarea":zu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&hn(e,!!a.multiple,t,!1)}}}var $s=!1;function Hu(e,t,a){if($s)return e(t,a);$s=!0;try{var n=e(t);return n}finally{if($s=!1,(yn!==null||vn!==null)&&(Ji(),yn&&(t=yn,e=vn,vn=yn=null,Lu(t),e)))for(t=0;t<e.length;t++)Lu(e[t])}}function al(e,t){var a=e.stateNode;if(a===null)return null;var n=a[rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qs=!1;if(Kt)try{var nl={};Object.defineProperty(nl,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch{Qs=!1}var ya=null,Ks=null,ci=null;function Fu(){if(ci)return ci;var e,t=Ks,a=t.length,n,l="value"in ya?ya.value:ya.textContent,s=l.length;for(e=0;e<a&&t[e]===l[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===l[s-n];n++);return ci=l.slice(e,1<n?1-n:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function qu(){return!1}function ot(e){function t(a,n,l,s,d){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fi:qu,this.isPropagationStopped=qu,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=ot(Ya),ll=N({},Ya,{view:0,detail:0}),kp=ot(ll),Js,Is,il,pi=N({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(Js=e.screenX-il.screenX,Is=e.screenY-il.screenY):Is=Js=0,il=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:Is}}),Gu=ot(pi),_p=N({},pi,{dataTransfer:0}),zp=ot(_p),Mp=N({},ll,{relatedTarget:0}),Ws=ot(Mp),Up=N({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=ot(Up),Lp=N({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=ot(Lp),Fp=N({},Ya,{data:0}),Yu=ot(Fp),qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yp[e])?!!t[e]:!1}function Ps(){return Vp}var Xp=N({},ll,{key:function(e){if(e.key){var t=qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zp=ot(Xp),$p=N({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vu=ot($p),Qp=N({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),Kp=ot(Qp),Jp=N({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=ot(Jp),Wp=N({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pp=ot(Wp),eh=N({},Ya,{newState:0,oldState:0}),th=ot(eh),ah=[9,13,27,32],er=Kt&&"CompositionEvent"in window,sl=null;Kt&&"documentMode"in document&&(sl=document.documentMode);var nh=Kt&&"TextEvent"in window&&!sl,Xu=Kt&&(!er||sl&&8<sl&&11>=sl),Zu=" ",$u=!1;function Qu(e,t){switch(e){case"keyup":return ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function lh(e,t){switch(e){case"compositionend":return Ku(t);case"keypress":return t.which!==32?null:($u=!0,Zu);case"textInput":return e=t.data,e===Zu&&$u?null:e;default:return null}}function ih(e,t){if(bn)return e==="compositionend"||!er&&Qu(e,t)?(e=Fu(),ci=Ks=ya=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xu&&t.locale!=="ko"?null:t.data;default:return null}}var sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sh[e.type]:t==="textarea"}function Iu(e,t,a,n){yn?vn?vn.push(n):vn=[n]:yn=n,t=ns(t,"onChange"),0<t.length&&(a=new mi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var rl=null,ol=null;function rh(e){zf(e,0)}function hi(e){var t=tl(e);if(ku(t))return e}function Wu(e,t){if(e==="change")return t}var Pu=!1;if(Kt){var tr;if(Kt){var ar="oninput"in document;if(!ar){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),ar=typeof ec.oninput=="function"}tr=ar}else tr=!1;Pu=tr&&(!document.documentMode||9<document.documentMode)}function tc(){rl&&(rl.detachEvent("onpropertychange",ac),ol=rl=null)}function ac(e){if(e.propertyName==="value"&&hi(ol)){var t=[];Iu(t,ol,e,Zs(e)),Hu(rh,t)}}function oh(e,t,a){e==="focusin"?(tc(),rl=t,ol=a,rl.attachEvent("onpropertychange",ac)):e==="focusout"&&tc()}function uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(ol)}function ch(e,t){if(e==="click")return hi(t)}function dh(e,t){if(e==="input"||e==="change")return hi(t)}function fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:fh;function ul(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!_s.call(t,l)||!yt(e[l],t[l]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var a=nc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=nc(a)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=oi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=oi(e.document)}return t}function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mh=Kt&&"documentMode"in document&&11>=document.documentMode,xn=null,lr=null,cl=null,ir=!1;function rc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ir||xn==null||xn!==oi(n)||(n=xn,"selectionStart"in n&&nr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),cl&&ul(cl,n)||(cl=n,n=ns(lr,"onSelect"),0<n.length&&(t=new mi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=xn)))}function Va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Sn={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},sr={},oc={};Kt&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Xa(e){if(sr[e])return sr[e];if(!Sn[e])return e;var t=Sn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in oc)return sr[e]=t[a];return e}var uc=Xa("animationend"),cc=Xa("animationiteration"),dc=Xa("animationstart"),ph=Xa("transitionrun"),hh=Xa("transitionstart"),gh=Xa("transitioncancel"),fc=Xa("transitionend"),mc=new Map,rr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rr.push("scrollEnd");function Mt(e,t){mc.set(e,t),Ga(t,[e])}var gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],Nn=0,or=0;function yi(){for(var e=Nn,t=or=Nn=0;t<e;){var a=Tt[t];Tt[t++]=null;var n=Tt[t];Tt[t++]=null;var l=Tt[t];Tt[t++]=null;var s=Tt[t];if(Tt[t++]=null,n!==null&&l!==null){var d=n.pending;d===null?l.next=l:(l.next=d.next,d.next=l),n.pending=l}s!==0&&pc(a,l,s)}}function vi(e,t,a,n){Tt[Nn++]=e,Tt[Nn++]=t,Tt[Nn++]=a,Tt[Nn++]=n,or|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function ur(e,t,a,n){return vi(e,t,a,n),bi(e)}function Za(e,t){return vi(e,null,null,t),bi(e)}function pc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-gt(a),e=s.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),s):null}function bi(e){if(50<kl)throw kl=0,bo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var jn={};function yh(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,a,n){return new yh(e,t,a,n)}function cr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var a=e.alternate;return a===null?(a=vt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function hc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,a,n,l,s){var d=0;if(n=e,typeof e=="function")cr(e)&&(d=1);else if(typeof e=="string")d=Ng(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=vt(31,a,t,l),e.elementType=ue,e.lanes=s,e;case A:return $a(a.children,l,s,t);case T:d=8,l|=24;break;case _:return e=vt(12,a,t,l|2),e.elementType=_,e.lanes=s,e;case te:return e=vt(13,a,t,l),e.elementType=te,e.lanes=s,e;case fe:return e=vt(19,a,t,l),e.elementType=fe,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:d=10;break e;case O:d=9;break e;case Q:d=11;break e;case I:d=14;break e;case ge:d=16,n=null;break e}d=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=vt(d,a,t,l),t.elementType=e,t.type=n,t.lanes=s,t}function $a(e,t,a,n){return e=vt(7,e,n,t),e.lanes=a,e}function dr(e,t,a){return e=vt(6,e,null,t),e.lanes=a,e}function gc(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function fr(e,t,a){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yc=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var a=yc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:gu(t)},yc.set(e,t),t)}return{value:e,source:t,stack:gu(t)}}var Cn=[],En=0,Si=null,dl=0,Dt=[],Ot=0,va=null,Ft=1,qt="";function It(e,t){Cn[En++]=dl,Cn[En++]=Si,Si=e,dl=t}function vc(e,t,a){Dt[Ot++]=Ft,Dt[Ot++]=qt,Dt[Ot++]=va,va=e;var n=Ft;e=qt;var l=32-gt(n)-1;n&=~(1<<l),a+=1;var s=32-gt(t)+l;if(30<s){var d=l-l%5;s=(n&(1<<d)-1).toString(32),n>>=d,l-=d,Ft=1<<32-gt(t)+l|a<<l|n,qt=s+e}else Ft=1<<s|a<<l|n,qt=e}function mr(e){e.return!==null&&(It(e,1),vc(e,1,0))}function pr(e){for(;e===Si;)Si=Cn[--En],Cn[En]=null,dl=Cn[--En],Cn[En]=null;for(;e===va;)va=Dt[--Ot],Dt[Ot]=null,qt=Dt[--Ot],Dt[Ot]=null,Ft=Dt[--Ot],Dt[Ot]=null}function bc(e,t){Dt[Ot++]=Ft,Dt[Ot++]=qt,Dt[Ot++]=va,Ft=t.id,qt=t.overflow,va=e}var Pe=null,ke=null,ve=!1,ba=null,Rt=!1,hr=Error(c(519));function xa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fl(wt(t,e)),hr}function xc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[We]=e,t[rt]=n,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<zl.length;a++)de(zl[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),_u(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Mu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Lf(t.textContent,a)?(n.popover!=null&&(de("beforetoggle",t),de("toggle",t)),n.onScroll!=null&&de("scroll",t),n.onScrollEnd!=null&&de("scrollend",t),n.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||xa(e,!0)}function Sc(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Pe=Pe.return}}function An(e){if(e!==Pe)return!1;if(!ve)return Sc(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zo(e.type,e.memoizedProps)),a=!a),a&&ke&&xa(e),Sc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ke=$f(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ke=$f(e)}else t===27?(t=ke,za(e.type)?(e=Ho,Ho=null,ke=e):ke=t):ke=Pe?_t(e.stateNode.nextSibling):null;return!0}function Qa(){ke=Pe=null,ve=!1}function gr(){var e=ba;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),ba=null),e}function fl(e){ba===null?ba=[e]:ba.push(e)}var yr=C(null),Ka=null,Wt=null;function Sa(e,t,a){Z(yr,t._currentValue),t._currentValue=a}function Pt(e){e._currentValue=yr.current,F(yr)}function vr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function br(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var d=l.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=l;for(var x=0;x<t.length;x++)if(m.context===t[x]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),vr(s.return,a,e),n||(d=null);break e}s=m.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(c(341));d.lanes|=a,s=d.alternate,s!==null&&(s.lanes|=a),vr(d,a,e),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===e){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function Tn(e,t,a,n){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var m=l.type;yt(l.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(l===ye.current){if(d=l.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}l=l.return}e!==null&&br(t,e,a,n),t.flags|=262144}function Ni(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Ka=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Nc(Ka,e)}function ji(e,t){return Ka===null&&Ja(e),Nc(e,t)}function Nc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(c(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var vh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bh=i.unstable_scheduleCallback,xh=i.unstable_NormalPriority,Ge={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xr(){return{controller:new vh,data:new Map,refCount:0}}function ml(e){e.refCount--,e.refCount===0&&bh(xh,function(){e.controller.abort()})}var pl=null,Sr=0,wn=0,Dn=null;function Sh(e,t){if(pl===null){var a=pl=[];Sr=0,wn=Eo(),Dn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Sr++,t.then(jc,jc),t}function jc(){if(--Sr===0&&pl!==null){Dn!==null&&(Dn.status="fulfilled");var e=pl;pl=null,wn=0,Dn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Cc=U.S;U.S=function(e,t){of=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sh(e,t),Cc!==null&&Cc(e,t)};var Ia=C(null);function Nr(){var e=Ia.current;return e!==null?e:we.pooledCache}function Ci(e,t){t===null?Z(Ia,Ia.current):Z(Ia,t.pool)}function Ec(){var e=Nr();return e===null?null:{parent:Ge._currentValue,pool:e}}var On=Error(c(460)),jr=Error(c(474)),Ei=Error(c(542)),Ai={then:function(){}};function Ac(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Qt,Qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e;default:if(typeof t.status=="string")t.then(Qt,Qt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e}throw Pa=t,On}}function Wa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Pa=a,On):a}}var Pa=null;function wc(){if(Pa===null)throw Error(c(459));var e=Pa;return Pa=null,e}function Dc(e){if(e===On||e===Ei)throw Error(c(483))}var Rn=null,hl=0;function Ti(e){var t=hl;return hl+=1,Rn===null&&(Rn=[]),Tc(Rn,e,t)}function gl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wi(e,t){throw t.$$typeof===D?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Oc(e){function t(w,j){if(e){var R=w.deletions;R===null?(w.deletions=[j],w.flags|=16):R.push(j)}}function a(w,j){if(!e)return null;for(;j!==null;)t(w,j),j=j.sibling;return null}function n(w){for(var j=new Map;w!==null;)w.key!==null?j.set(w.key,w):j.set(w.index,w),w=w.sibling;return j}function l(w,j){return w=Jt(w,j),w.index=0,w.sibling=null,w}function s(w,j,R){return w.index=R,e?(R=w.alternate,R!==null?(R=R.index,R<j?(w.flags|=67108866,j):R):(w.flags|=67108866,j)):(w.flags|=1048576,j)}function d(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function m(w,j,R,H){return j===null||j.tag!==6?(j=dr(R,w.mode,H),j.return=w,j):(j=l(j,R),j.return=w,j)}function x(w,j,R,H){var ee=R.type;return ee===A?B(w,j,R.props.children,H,R.key):j!==null&&(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ge&&Wa(ee)===j.type)?(j=l(j,R.props),gl(j,R),j.return=w,j):(j=xi(R.type,R.key,R.props,null,w.mode,H),gl(j,R),j.return=w,j)}function k(w,j,R,H){return j===null||j.tag!==4||j.stateNode.containerInfo!==R.containerInfo||j.stateNode.implementation!==R.implementation?(j=fr(R,w.mode,H),j.return=w,j):(j=l(j,R.children||[]),j.return=w,j)}function B(w,j,R,H,ee){return j===null||j.tag!==7?(j=$a(R,w.mode,H,ee),j.return=w,j):(j=l(j,R),j.return=w,j)}function G(w,j,R){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=dr(""+j,w.mode,R),j.return=w,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case q:return R=xi(j.type,j.key,j.props,null,w.mode,R),gl(R,j),R.return=w,R;case b:return j=fr(j,w.mode,R),j.return=w,j;case ge:return j=Wa(j),G(w,j,R)}if(Be(j)||Oe(j))return j=$a(j,w.mode,R,null),j.return=w,j;if(typeof j.then=="function")return G(w,Ti(j),R);if(j.$$typeof===L)return G(w,ji(w,j),R);wi(w,j)}return null}function z(w,j,R,H){var ee=j!==null?j.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ee!==null?null:m(w,j,""+R,H);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case q:return R.key===ee?x(w,j,R,H):null;case b:return R.key===ee?k(w,j,R,H):null;case ge:return R=Wa(R),z(w,j,R,H)}if(Be(R)||Oe(R))return ee!==null?null:B(w,j,R,H,null);if(typeof R.then=="function")return z(w,j,Ti(R),H);if(R.$$typeof===L)return z(w,j,ji(w,R),H);wi(w,R)}return null}function M(w,j,R,H,ee){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return w=w.get(R)||null,m(j,w,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case q:return w=w.get(H.key===null?R:H.key)||null,x(j,w,H,ee);case b:return w=w.get(H.key===null?R:H.key)||null,k(j,w,H,ee);case ge:return H=Wa(H),M(w,j,R,H,ee)}if(Be(H)||Oe(H))return w=w.get(R)||null,B(j,w,H,ee,null);if(typeof H.then=="function")return M(w,j,R,Ti(H),ee);if(H.$$typeof===L)return M(w,j,R,ji(j,H),ee);wi(j,H)}return null}function J(w,j,R,H){for(var ee=null,be=null,W=j,re=j=0,he=null;W!==null&&re<R.length;re++){W.index>re?(he=W,W=null):he=W.sibling;var xe=z(w,W,R[re],H);if(xe===null){W===null&&(W=he);break}e&&W&&xe.alternate===null&&t(w,W),j=s(xe,j,re),be===null?ee=xe:be.sibling=xe,be=xe,W=he}if(re===R.length)return a(w,W),ve&&It(w,re),ee;if(W===null){for(;re<R.length;re++)W=G(w,R[re],H),W!==null&&(j=s(W,j,re),be===null?ee=W:be.sibling=W,be=W);return ve&&It(w,re),ee}for(W=n(W);re<R.length;re++)he=M(W,w,re,R[re],H),he!==null&&(e&&he.alternate!==null&&W.delete(he.key===null?re:he.key),j=s(he,j,re),be===null?ee=he:be.sibling=he,be=he);return e&&W.forEach(function(Ha){return t(w,Ha)}),ve&&It(w,re),ee}function ae(w,j,R,H){if(R==null)throw Error(c(151));for(var ee=null,be=null,W=j,re=j=0,he=null,xe=R.next();W!==null&&!xe.done;re++,xe=R.next()){W.index>re?(he=W,W=null):he=W.sibling;var Ha=z(w,W,xe.value,H);if(Ha===null){W===null&&(W=he);break}e&&W&&Ha.alternate===null&&t(w,W),j=s(Ha,j,re),be===null?ee=Ha:be.sibling=Ha,be=Ha,W=he}if(xe.done)return a(w,W),ve&&It(w,re),ee;if(W===null){for(;!xe.done;re++,xe=R.next())xe=G(w,xe.value,H),xe!==null&&(j=s(xe,j,re),be===null?ee=xe:be.sibling=xe,be=xe);return ve&&It(w,re),ee}for(W=n(W);!xe.done;re++,xe=R.next())xe=M(W,w,re,xe.value,H),xe!==null&&(e&&xe.alternate!==null&&W.delete(xe.key===null?re:xe.key),j=s(xe,j,re),be===null?ee=xe:be.sibling=xe,be=xe);return e&&W.forEach(function(_g){return t(w,_g)}),ve&&It(w,re),ee}function Te(w,j,R,H){if(typeof R=="object"&&R!==null&&R.type===A&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case q:e:{for(var ee=R.key;j!==null;){if(j.key===ee){if(ee=R.type,ee===A){if(j.tag===7){a(w,j.sibling),H=l(j,R.props.children),H.return=w,w=H;break e}}else if(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ge&&Wa(ee)===j.type){a(w,j.sibling),H=l(j,R.props),gl(H,R),H.return=w,w=H;break e}a(w,j);break}else t(w,j);j=j.sibling}R.type===A?(H=$a(R.props.children,w.mode,H,R.key),H.return=w,w=H):(H=xi(R.type,R.key,R.props,null,w.mode,H),gl(H,R),H.return=w,w=H)}return d(w);case b:e:{for(ee=R.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===R.containerInfo&&j.stateNode.implementation===R.implementation){a(w,j.sibling),H=l(j,R.children||[]),H.return=w,w=H;break e}else{a(w,j);break}else t(w,j);j=j.sibling}H=fr(R,w.mode,H),H.return=w,w=H}return d(w);case ge:return R=Wa(R),Te(w,j,R,H)}if(Be(R))return J(w,j,R,H);if(Oe(R)){if(ee=Oe(R),typeof ee!="function")throw Error(c(150));return R=ee.call(R),ae(w,j,R,H)}if(typeof R.then=="function")return Te(w,j,Ti(R),H);if(R.$$typeof===L)return Te(w,j,ji(w,R),H);wi(w,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,j!==null&&j.tag===6?(a(w,j.sibling),H=l(j,R),H.return=w,w=H):(a(w,j),H=dr(R,w.mode,H),H.return=w,w=H),d(w)):a(w,j)}return function(w,j,R,H){try{hl=0;var ee=Te(w,j,R,H);return Rn=null,ee}catch(W){if(W===On||W===Ei)throw W;var be=vt(29,W,null,w.mode);return be.lanes=H,be.return=w,be}finally{}}}var en=Oc(!0),Rc=Oc(!1),Na=!1;function Cr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Er(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Se&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=bi(e),pc(e,null,a),t}return vi(e,n,t,a),bi(e)}function yl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Nu(e,a)}}function Ar(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?l=s=d:s=s.next=d,a=a.next}while(a!==null);s===null?l=s=t:s=s.next=t}else l=s=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Tr=!1;function vl(){if(Tr){var e=Dn;if(e!==null)throw e}}function bl(e,t,a,n){Tr=!1;var l=e.updateQueue;Na=!1;var s=l.firstBaseUpdate,d=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var x=m,k=x.next;x.next=null,d===null?s=k:d.next=k,d=x;var B=e.alternate;B!==null&&(B=B.updateQueue,m=B.lastBaseUpdate,m!==d&&(m===null?B.firstBaseUpdate=k:m.next=k,B.lastBaseUpdate=x))}if(s!==null){var G=l.baseState;d=0,B=k=x=null,m=s;do{var z=m.lane&-536870913,M=z!==m.lane;if(M?(pe&z)===z:(n&z)===z){z!==0&&z===wn&&(Tr=!0),B!==null&&(B=B.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var J=e,ae=m;z=t;var Te=a;switch(ae.tag){case 1:if(J=ae.payload,typeof J=="function"){G=J.call(Te,G,z);break e}G=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ae.payload,z=typeof J=="function"?J.call(Te,G,z):J,z==null)break e;G=N({},G,z);break e;case 2:Na=!0}}z=m.callback,z!==null&&(e.flags|=64,M&&(e.flags|=8192),M=l.callbacks,M===null?l.callbacks=[z]:M.push(z))}else M={lane:z,tag:m.tag,payload:m.payload,callback:m.callback,next:null},B===null?(k=B=M,x=G):B=B.next=M,d|=z;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;M=m,m=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);B===null&&(x=G),l.baseState=x,l.firstBaseUpdate=k,l.lastBaseUpdate=B,s===null&&(l.shared.lanes=0),Da|=d,e.lanes=d,e.memoizedState=G}}function kc(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function _c(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)kc(a[e],t)}var kn=C(null),Di=C(0);function zc(e,t){e=oa,Z(Di,e),Z(kn,t),oa=e|t.baseLanes}function wr(){Z(Di,oa),Z(kn,kn.current)}function Dr(){oa=Di.current,F(kn),F(Di)}var bt=C(null),kt=null;function Ea(e){var t=e.alternate;Z(Fe,Fe.current&1),Z(bt,e),kt===null&&(t===null||kn.current!==null||t.memoizedState!==null)&&(kt=e)}function Or(e){Z(Fe,Fe.current),Z(bt,e),kt===null&&(kt=e)}function Mc(e){e.tag===22?(Z(Fe,Fe.current),Z(bt,e),kt===null&&(kt=e)):Aa()}function Aa(){Z(Fe,Fe.current),Z(bt,bt.current)}function xt(e){F(bt),kt===e&&(kt=null),F(Fe)}var Fe=C(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bo(a)||Lo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=0,ie=null,Ee=null,Ye=null,Ri=!1,_n=!1,tn=!1,ki=0,xl=0,zn=null,jh=0;function Le(){throw Error(c(321))}function Rr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function kr(e,t,a,n,l,s){return ea=s,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?vd:$r,tn=!1,s=a(n,l),tn=!1,_n&&(s=Bc(t,a,n,l)),Uc(e),s}function Uc(e){U.H=jl;var t=Ee!==null&&Ee.next!==null;if(ea=0,Ye=Ee=ie=null,Ri=!1,xl=0,zn=null,t)throw Error(c(300));e===null||Ve||(e=e.dependencies,e!==null&&Ni(e)&&(Ve=!0))}function Bc(e,t,a,n){ie=e;var l=0;do{if(_n&&(zn=null),xl=0,_n=!1,25<=l)throw Error(c(301));if(l+=1,Ye=Ee=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}U.H=bd,s=t(a,n)}while(_n);return s}function Ch(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Sl(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(ie.flags|=1024),t}function _r(){var e=ki!==0;return ki=0,e}function zr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Mr(e){if(Ri){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ri=!1}ea=0,Ye=Ee=ie=null,_n=!1,xl=ki=0,zn=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ie.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function qe(){if(Ee===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ye===null?ie.memoizedState:Ye.next;if(t!==null)Ye=t,Ee=e;else{if(e===null)throw ie.alternate===null?Error(c(467)):Error(c(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ye===null?ie.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function _i(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var t=xl;return xl+=1,zn===null&&(zn=[]),e=Tc(zn,e,t),t=ie,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?vd:$r),e}function zi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===L)return et(e)}throw Error(c(438,String(e)))}function Ur(e){var t=null,a=ie.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ie.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=_i(),ie.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ue;return t.index++,a}function ta(e,t){return typeof t=="function"?t(e):t}function Mi(e){var t=qe();return Br(t,Ee,e)}function Br(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,s=n.pending;if(s!==null){if(l!==null){var d=l.next;l.next=s.next,s.next=d}t.baseQueue=l=s,n.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var m=d=null,x=null,k=t,B=!1;do{var G=k.lane&-536870913;if(G!==k.lane?(pe&G)===G:(ea&G)===G){var z=k.revertLane;if(z===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),G===wn&&(B=!0);else if((ea&z)===z){k=k.next,z===wn&&(B=!0);continue}else G={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},x===null?(m=x=G,d=s):x=x.next=G,ie.lanes|=z,Da|=z;G=k.action,tn&&a(s,G),s=k.hasEagerState?k.eagerState:a(s,G)}else z={lane:G,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},x===null?(m=x=z,d=s):x=x.next=z,ie.lanes|=G,Da|=G;k=k.next}while(k!==null&&k!==t);if(x===null?d=s:x.next=m,!yt(s,e.memoizedState)&&(Ve=!0,B&&(a=Dn,a!==null)))throw a;e.memoizedState=s,e.baseState=d,e.baseQueue=x,n.lastRenderedState=s}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Lr(e){var t=qe(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,s=t.memoizedState;if(l!==null){a.pending=null;var d=l=l.next;do s=e(s,d.action),d=d.next;while(d!==l);yt(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function Lc(e,t,a){var n=ie,l=qe(),s=ve;if(s){if(a===void 0)throw Error(c(407));a=a()}else a=t();var d=!yt((Ee||l).memoizedState,a);if(d&&(l.memoizedState=a,Ve=!0),l=l.queue,qr(qc.bind(null,n,l,e),[e]),l.getSnapshot!==t||d||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Mn(9,{destroy:void 0},Fc.bind(null,n,l,a,t),null),we===null)throw Error(c(349));s||(ea&127)!==0||Hc(n,t,a)}return a}function Hc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ie.updateQueue,t===null?(t=_i(),ie.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Fc(e,t,a,n){t.value=a,t.getSnapshot=n,Gc(t)&&Yc(e)}function qc(e,t,a){return a(function(){Gc(t)&&Yc(e)})}function Gc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function Yc(e){var t=Za(e,2);t!==null&&mt(t,e,2)}function Hr(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),tn){ha(!0);try{a()}finally{ha(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t}function Vc(e,t,a,n){return e.baseState=a,Br(e,Ee,typeof n=="function"?n:ta)}function Eh(e,t,a,n,l){if(Li(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};U.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,Xc(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Xc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var s=U.T,d={};U.T=d;try{var m=a(l,n),x=U.S;x!==null&&x(d,m),Zc(e,t,m)}catch(k){Fr(e,t,k)}finally{s!==null&&d.types!==null&&(s.types=d.types),U.T=s}}else try{s=a(l,n),Zc(e,t,s)}catch(k){Fr(e,t,k)}}function Zc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){$c(e,t,n)},function(n){return Fr(e,t,n)}):$c(e,t,a)}function $c(e,t,a){t.status="fulfilled",t.value=a,Qc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Xc(e,a)))}function Fr(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Qc(t),t=t.next;while(t!==n)}e.action=null}function Qc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kc(e,t){return t}function Jc(e,t){if(ve){var a=we.formState;if(a!==null){e:{var n=ie;if(ve){if(ke){t:{for(var l=ke,s=Rt;l.nodeType!==8;){if(!s){l=null;break t}if(l=_t(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){ke=_t(l.nextSibling),n=l.data==="F!";break e}}xa(n)}n=!1}n&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kc,lastRenderedState:t},a.queue=n,a=hd.bind(null,ie,n),n.dispatch=a,n=Hr(!1),s=Zr.bind(null,ie,!1,n.queue),n=lt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Eh.bind(null,ie,l,s,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Ic(e){var t=qe();return Wc(t,Ee,e)}function Wc(e,t,a){if(t=Br(e,t,Kc)[0],e=Mi(ta)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Sl(t)}catch(d){throw d===On?Ei:d}else n=t;t=qe();var l=t.queue,s=l.dispatch;return a!==t.memoizedState&&(ie.flags|=2048,Mn(9,{destroy:void 0},Ah.bind(null,l,a),null)),[n,s,e]}function Ah(e,t){e.action=t}function Pc(e){var t=qe(),a=Ee;if(a!==null)return Wc(t,a,e);qe(),t=t.memoizedState,a=qe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ie.updateQueue,t===null&&(t=_i(),ie.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function ed(){return qe().memoizedState}function Ui(e,t,a,n){var l=lt();ie.flags|=e,l.memoizedState=Mn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Bi(e,t,a,n){var l=qe();n=n===void 0?null:n;var s=l.memoizedState.inst;Ee!==null&&n!==null&&Rr(n,Ee.memoizedState.deps)?l.memoizedState=Mn(t,s,a,n):(ie.flags|=e,l.memoizedState=Mn(1|t,s,a,n))}function td(e,t){Ui(8390656,8,e,t)}function qr(e,t){Bi(2048,8,e,t)}function Th(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=_i(),ie.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ad(e){var t=qe().memoizedState;return Th({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function nd(e,t){return Bi(4,2,e,t)}function ld(e,t){return Bi(4,4,e,t)}function id(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sd(e,t,a){a=a!=null?a.concat([e]):null,Bi(4,4,id.bind(null,t,e),a)}function Gr(){}function rd(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Rr(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function od(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Rr(t,n[1]))return n[0];if(n=e(),tn){ha(!0);try{e()}finally{ha(!1)}}return a.memoizedState=[n,t],n}function Yr(e,t,a){return a===void 0||(ea&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=cf(),ie.lanes|=e,Da|=e,a)}function ud(e,t,a,n){return yt(a,t)?a:kn.current!==null?(e=Yr(e,a,n),yt(e,t)||(Ve=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(pe&261930)===0?(Ve=!0,e.memoizedState=a):(e=cf(),ie.lanes|=e,Da|=e,t)}function cd(e,t,a,n,l){var s=X.p;X.p=s!==0&&8>s?s:8;var d=U.T,m={};U.T=m,Zr(e,!1,t,a);try{var x=l(),k=U.S;if(k!==null&&k(m,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var B=Nh(x,n);Nl(e,t,B,jt(e))}else Nl(e,t,n,jt(e))}catch(G){Nl(e,t,{then:function(){},status:"rejected",reason:G},jt())}finally{X.p=s,d!==null&&m.types!==null&&(d.types=m.types),U.T=d}}function wh(){}function Vr(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=dd(e).queue;cd(e,l,t,P,a===null?wh:function(){return fd(e),a(n)})}function dd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fd(e){var t=dd(e);t.next===null&&(t=e.alternate.memoizedState),Nl(e,t.next.queue,{},jt())}function Xr(){return et(Hl)}function md(){return qe().memoizedState}function pd(){return qe().memoizedState}function Dh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=jt();e=ja(a);var n=Ca(t,e,a);n!==null&&(mt(n,t,a),yl(n,t,a)),t={cache:xr()},e.payload=t;return}t=t.return}}function Oh(e,t,a){var n=jt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Li(e)?gd(t,a):(a=ur(e,t,a,n),a!==null&&(mt(a,e,n),yd(a,t,n)))}function hd(e,t,a){var n=jt();Nl(e,t,a,n)}function Nl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Li(e))gd(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,m=s(d,a);if(l.hasEagerState=!0,l.eagerState=m,yt(m,d))return vi(e,t,l,0),we===null&&yi(),!1}catch{}finally{}if(a=ur(e,t,l,n),a!==null)return mt(a,e,n),yd(a,t,n),!0}return!1}function Zr(e,t,a,n){if(n={lane:2,revertLane:Eo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Li(e)){if(t)throw Error(c(479))}else t=ur(e,a,n,2),t!==null&&mt(t,e,2)}function Li(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function gd(e,t){_n=Ri=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function yd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Nu(e,a)}}var jl={readContext:et,use:zi,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};jl.useEffectEvent=Le;var vd={readContext:et,use:zi,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:td,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ui(4194308,4,id.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var n=e();if(tn){ha(!0);try{e()}finally{ha(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=lt();if(a!==void 0){var l=a(t);if(tn){ha(!0);try{a(t)}finally{ha(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Oh.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Hr(e);var t=e.queue,a=hd.bind(null,ie,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Gr,useDeferredValue:function(e,t){var a=lt();return Yr(a,e,t)},useTransition:function(){var e=Hr(!1);return e=cd.bind(null,ie,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ie,l=lt();if(ve){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),we===null)throw Error(c(349));(pe&127)!==0||Hc(n,t,a)}l.memoizedState=a;var s={value:a,getSnapshot:t};return l.queue=s,td(qc.bind(null,n,s,e),[e]),n.flags|=2048,Mn(9,{destroy:void 0},Fc.bind(null,n,s,a,t),null),a},useId:function(){var e=lt(),t=we.identifierPrefix;if(ve){var a=qt,n=Ft;a=(n&~(1<<32-gt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ki++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=jh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Xr,useFormState:Jc,useActionState:Jc,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Zr.bind(null,ie,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ur,useCacheRefresh:function(){return lt().memoizedState=Dh.bind(null,ie)},useEffectEvent:function(e){var t=lt(),a={impl:e};return t.memoizedState=a,function(){if((Se&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},$r={readContext:et,use:zi,useCallback:rd,useContext:et,useEffect:qr,useImperativeHandle:sd,useInsertionEffect:nd,useLayoutEffect:ld,useMemo:od,useReducer:Mi,useRef:ed,useState:function(){return Mi(ta)},useDebugValue:Gr,useDeferredValue:function(e,t){var a=qe();return ud(a,Ee.memoizedState,e,t)},useTransition:function(){var e=Mi(ta)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:Lc,useId:md,useHostTransitionStatus:Xr,useFormState:Ic,useActionState:Ic,useOptimistic:function(e,t){var a=qe();return Vc(a,Ee,e,t)},useMemoCache:Ur,useCacheRefresh:pd};$r.useEffectEvent=ad;var bd={readContext:et,use:zi,useCallback:rd,useContext:et,useEffect:qr,useImperativeHandle:sd,useInsertionEffect:nd,useLayoutEffect:ld,useMemo:od,useReducer:Lr,useRef:ed,useState:function(){return Lr(ta)},useDebugValue:Gr,useDeferredValue:function(e,t){var a=qe();return Ee===null?Yr(a,e,t):ud(a,Ee.memoizedState,e,t)},useTransition:function(){var e=Lr(ta)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:Lc,useId:md,useHostTransitionStatus:Xr,useFormState:Pc,useActionState:Pc,useOptimistic:function(e,t){var a=qe();return Ee!==null?Vc(a,Ee,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ur,useCacheRefresh:pd};bd.useEffectEvent=ad;function Qr(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Kr={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=jt(),l=ja(n);l.payload=t,a!=null&&(l.callback=a),t=Ca(e,l,n),t!==null&&(mt(t,e,n),yl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=jt(),l=ja(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ca(e,l,n),t!==null&&(mt(t,e,n),yl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=jt(),n=ja(a);n.tag=2,t!=null&&(n.callback=t),t=Ca(e,n,a),t!==null&&(mt(t,e,a),yl(t,e,a))}};function xd(e,t,a,n,l,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,d):t.prototype&&t.prototype.isPureReactComponent?!ul(a,n)||!ul(l,s):!0}function Sd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Kr.enqueueReplaceState(t,t.state,null)}function an(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Nd(e){gi(e)}function jd(e){console.error(e)}function Cd(e){gi(e)}function Hi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ed(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Jr(e,t,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Hi(e,t)},a}function Ad(e){return e=ja(e),e.tag=3,e}function Td(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var s=n.value;e.payload=function(){return l(s)},e.callback=function(){Ed(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Ed(t,a,n),typeof l!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function Rh(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Tn(t,a,l,!0),a=bt.current,a!==null){switch(a.tag){case 31:case 13:return kt===null?Ii():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Ai?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),No(e,n,l)),!1;case 22:return a.flags|=65536,n===Ai?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),No(e,n,l)),!1}throw Error(c(435,a.tag))}return No(e,n,l),Ii(),!1}if(ve)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==hr&&(e=Error(c(422),{cause:n}),fl(wt(e,a)))):(n!==hr&&(t=Error(c(423),{cause:n}),fl(wt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=wt(n,a),l=Jr(e.stateNode,n,l),Ar(e,l),He!==4&&(He=2)),!1;var s=Error(c(520),{cause:n});if(s=wt(s,a),Rl===null?Rl=[s]:Rl.push(s),He!==4&&(He=2),t===null)return!0;n=wt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Jr(a.stateNode,n,e),Ar(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Ad(l),Td(l,e,a,n),Ar(a,l),!1}a=a.return}while(a!==null);return!1}var Ir=Error(c(461)),Ve=!1;function tt(e,t,a,n){t.child=e===null?Rc(t,null,a,n):en(t,e.child,a,n)}function wd(e,t,a,n,l){a=a.render;var s=t.ref;if("ref"in n){var d={};for(var m in n)m!=="ref"&&(d[m]=n[m])}else d=n;return Ja(t),n=kr(e,t,a,d,s,l),m=_r(),e!==null&&!Ve?(zr(e,t,l),aa(e,t,l)):(ve&&m&&mr(t),t.flags|=1,tt(e,t,n,l),t.child)}function Dd(e,t,a,n,l){if(e===null){var s=a.type;return typeof s=="function"&&!cr(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Od(e,t,s,n,l)):(e=xi(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!io(e,l)){var d=s.memoizedProps;if(a=a.compare,a=a!==null?a:ul,a(d,n)&&e.ref===t.ref)return aa(e,t,l)}return t.flags|=1,e=Jt(s,n),e.ref=t.ref,e.return=t,t.child=e}function Od(e,t,a,n,l){if(e!==null){var s=e.memoizedProps;if(ul(s,n)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=n=s,io(e,l))(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,aa(e,t,l)}return Wr(e,t,a,n,l)}function Rd(e,t,a,n){var l=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~s}else n=0,t.child=null;return kd(e,t,s,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ci(t,s!==null?s.cachePool:null),s!==null?zc(t,s):wr(),Mc(t);else return n=t.lanes=536870912,kd(e,t,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(Ci(t,s.cachePool),zc(t,s),Aa(),t.memoizedState=null):(e!==null&&Ci(t,null),wr(),Aa());return tt(e,t,l,a),t.child}function Cl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function kd(e,t,a,n,l){var s=Nr();return s=s===null?null:{parent:Ge._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&Ci(t,null),wr(),Mc(t),e!==null&&Tn(e,t,n,!0),t.childLanes=l,null}function Fi(e,t){return t=Gi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _d(e,t,a){return en(t,e.child,null,a),e=Fi(t,t.pendingProps),e.flags|=2,xt(t),t.memoizedState=null,e}function kh(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(n.mode==="hidden")return e=Fi(t,n),t.lanes=536870912,Cl(null,e);if(Or(t),(e=ke)?(e=Zf(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ft,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=gc(e),a.return=t,t.child=a,Pe=t,ke=null)):e=null,e===null)throw xa(t);return t.lanes=536870912,null}return Fi(t,n)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(Or(t),l)if(t.flags&256)t.flags&=-257,t=_d(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ve||Tn(e,t,a,!1),l=(a&e.childLanes)!==0,Ve||l){if(n=we,n!==null&&(d=ju(n,a),d!==0&&d!==s.retryLane))throw s.retryLane=d,Za(e,d),mt(n,e,d),Ir;Ii(),t=_d(e,t,a)}else e=s.treeContext,ke=_t(d.nextSibling),Pe=t,ve=!0,ba=null,Rt=!1,e!==null&&bc(t,e),t=Fi(t,n),t.flags|=4096;return t}return e=Jt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Wr(e,t,a,n,l){return Ja(t),a=kr(e,t,a,n,void 0,l),n=_r(),e!==null&&!Ve?(zr(e,t,l),aa(e,t,l)):(ve&&n&&mr(t),t.flags|=1,tt(e,t,a,l),t.child)}function zd(e,t,a,n,l,s){return Ja(t),t.updateQueue=null,a=Bc(t,n,a,l),Uc(e),n=_r(),e!==null&&!Ve?(zr(e,t,s),aa(e,t,s)):(ve&&n&&mr(t),t.flags|=1,tt(e,t,a,s),t.child)}function Md(e,t,a,n,l){if(Ja(t),t.stateNode===null){var s=jn,d=a.contextType;typeof d=="object"&&d!==null&&(s=et(d)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Kr,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},Cr(t),d=a.contextType,s.context=typeof d=="object"&&d!==null?et(d):jn,s.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Qr(t,a,d,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Kr.enqueueReplaceState(s,s.state,null),bl(t,n,s,l),vl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,x=an(a,m);s.props=x;var k=s.context,B=a.contextType;d=jn,typeof B=="object"&&B!==null&&(d=et(B));var G=a.getDerivedStateFromProps;B=typeof G=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,B||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||k!==d)&&Sd(t,s,n,d),Na=!1;var z=t.memoizedState;s.state=z,bl(t,n,s,l),vl(),k=t.memoizedState,m||z!==k||Na?(typeof G=="function"&&(Qr(t,a,G,n),k=t.memoizedState),(x=Na||xd(t,a,x,n,z,k,d))?(B||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=k),s.props=n,s.state=k,s.context=d,n=x):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Er(e,t),d=t.memoizedProps,B=an(a,d),s.props=B,G=t.pendingProps,z=s.context,k=a.contextType,x=jn,typeof k=="object"&&k!==null&&(x=et(k)),m=a.getDerivedStateFromProps,(k=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==G||z!==x)&&Sd(t,s,n,x),Na=!1,z=t.memoizedState,s.state=z,bl(t,n,s,l),vl();var M=t.memoizedState;d!==G||z!==M||Na||e!==null&&e.dependencies!==null&&Ni(e.dependencies)?(typeof m=="function"&&(Qr(t,a,m,n),M=t.memoizedState),(B=Na||xd(t,a,B,n,z,M,x)||e!==null&&e.dependencies!==null&&Ni(e.dependencies))?(k||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,M,x),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,M,x)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),s.props=n,s.state=M,s.context=x,n=B):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,qi(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=en(t,e.child,null,l),t.child=en(t,null,a,l)):tt(e,t,a,l),t.memoizedState=s.state,e=t.child):e=aa(e,t,l),e}function Ud(e,t,a,n){return Qa(),t.flags|=256,tt(e,t,a,n),t.child}var Pr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eo(e){return{baseLanes:e,cachePool:Ec()}}function to(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function Bd(e,t,a){var n=t.pendingProps,l=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),d&&(l=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(l?Ea(t):Aa(),(e=ke)?(e=Zf(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ft,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=gc(e),a.return=t,t.child=a,Pe=t,ke=null)):e=null,e===null)throw xa(t);return Lo(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,l?(Aa(),l=t.mode,m=Gi({mode:"hidden",children:m},l),n=$a(n,l,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=eo(a),n.childLanes=to(e,d,a),t.memoizedState=Pr,Cl(null,n)):(Ea(t),ao(t,m))}var x=e.memoizedState;if(x!==null&&(m=x.dehydrated,m!==null)){if(s)t.flags&256?(Ea(t),t.flags&=-257,t=no(e,t,a)):t.memoizedState!==null?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),m=n.fallback,l=t.mode,n=Gi({mode:"visible",children:n.children},l),m=$a(m,l,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,en(t,e.child,null,a),n=t.child,n.memoizedState=eo(a),n.childLanes=to(e,d,a),t.memoizedState=Pr,t=Cl(null,n));else if(Ea(t),Lo(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var k=d.dgst;d=k,n=Error(c(419)),n.stack="",n.digest=d,fl({value:n,source:null,stack:null}),t=no(e,t,a)}else if(Ve||Tn(e,t,a,!1),d=(a&e.childLanes)!==0,Ve||d){if(d=we,d!==null&&(n=ju(d,a),n!==0&&n!==x.retryLane))throw x.retryLane=n,Za(e,n),mt(d,e,n),Ir;Bo(m)||Ii(),t=no(e,t,a)}else Bo(m)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,ke=_t(m.nextSibling),Pe=t,ve=!0,ba=null,Rt=!1,e!==null&&bc(t,e),t=ao(t,n.children),t.flags|=4096);return t}return l?(Aa(),m=n.fallback,l=t.mode,x=e.child,k=x.sibling,n=Jt(x,{mode:"hidden",children:n.children}),n.subtreeFlags=x.subtreeFlags&65011712,k!==null?m=Jt(k,m):(m=$a(m,l,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,Cl(null,n),n=t.child,m=e.child.memoizedState,m===null?m=eo(a):(l=m.cachePool,l!==null?(x=Ge._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=Ec(),m={baseLanes:m.baseLanes|a,cachePool:l}),n.memoizedState=m,n.childLanes=to(e,d,a),t.memoizedState=Pr,Cl(e.child,n)):(Ea(t),a=e.child,e=a.sibling,a=Jt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function ao(e,t){return t=Gi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gi(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function no(e,t,a){return en(t,e.child,null,a),e=ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ld(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),vr(e.return,t,a)}function lo(e,t,a,n,l,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=n,d.tail=a,d.tailMode=l,d.treeForkCount=s)}function Hd(e,t,a){var n=t.pendingProps,l=n.revealOrder,s=n.tail;n=n.children;var d=Fe.current,m=(d&2)!==0;if(m?(d=d&1|2,t.flags|=128):d&=1,Z(Fe,d),tt(e,t,n,a),n=ve?dl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ld(e,a,t);else if(e.tag===19)Ld(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Oi(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),lo(t,!1,l,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Oi(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}lo(t,!0,a,null,s,n);break;case"together":lo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Tn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Jt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Jt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function io(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ni(e)))}function _h(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),Sa(t,Ge,e.memoizedState.cache),Qa();break;case 27:case 5:Jn(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Or(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ea(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Bd(e,t,a):(Ea(t),e=aa(e,t,a),e!==null?e.sibling:null);Ea(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Tn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Hd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(Fe,Fe.current),n)break;return null;case 22:return t.lanes=0,Rd(e,t,a,t.pendingProps);case 24:Sa(t,Ge,e.memoizedState.cache)}return aa(e,t,a)}function Fd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!io(e,a)&&(t.flags&128)===0)return Ve=!1,_h(e,t,a);Ve=(e.flags&131072)!==0}else Ve=!1,ve&&(t.flags&1048576)!==0&&vc(t,dl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Wa(t.elementType),t.type=e,typeof e=="function")cr(e)?(n=an(e,n),t.tag=1,t=Md(null,t,e,n,a)):(t.tag=0,t=Wr(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===Q){t.tag=11,t=wd(null,t,e,n,a);break e}else if(l===I){t.tag=14,t=Dd(null,t,e,n,a);break e}}throw t=De(e)||e,Error(c(306,t,""))}}return t;case 0:return Wr(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=an(n,t.pendingProps),Md(e,t,n,l,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var s=t.memoizedState;l=s.element,Er(e,t),bl(t,n,null,a);var d=t.memoizedState;if(n=d.cache,Sa(t,Ge,n),n!==s.cache&&br(t,[Ge],a,!0),vl(),n=d.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Ud(e,t,n,a);break e}else if(n!==l){l=wt(Error(c(424)),t),fl(l),t=Ud(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=_t(e.firstChild),Pe=t,ve=!0,ba=null,Rt=!0,a=Rc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qa(),n===l){t=aa(e,t,a);break e}tt(e,t,n,a)}t=t.child}return t;case 26:return qi(e,t),e===null?(a=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,n=ls(se.current).createElement(a),n[We]=t,n[rt]=e,at(n,a,e),Qe(n),t.stateNode=n):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Jn(t),e===null&&ve&&(n=t.stateNode=Kf(t.type,t.pendingProps,se.current),Pe=t,Rt=!0,l=ke,za(t.type)?(Ho=l,ke=_t(n.firstChild)):ke=l),tt(e,t,t.pendingProps.children,a),qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((l=n=ke)&&(n=ug(n,t.type,t.pendingProps,Rt),n!==null?(t.stateNode=n,Pe=t,ke=_t(n.firstChild),Rt=!1,l=!0):l=!1),l||xa(t)),Jn(t),l=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,n=s.children,zo(l,s)?n=null:d!==null&&zo(l,d)&&(t.flags|=32),t.memoizedState!==null&&(l=kr(e,t,Ch,null,null,a),Hl._currentValue=l),qi(e,t),tt(e,t,n,a),t.child;case 6:return e===null&&ve&&((e=a=ke)&&(a=cg(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Pe=t,ke=null,e=!0):e=!1),e||xa(t)),null;case 13:return Bd(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=en(t,null,n,a):tt(e,t,n,a),t.child;case 11:return wd(e,t,t.type,t.pendingProps,a);case 7:return tt(e,t,t.pendingProps,a),t.child;case 8:return tt(e,t,t.pendingProps.children,a),t.child;case 12:return tt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Sa(t,t.type,n.value),tt(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ja(t),l=et(l),n=n(l),t.flags|=1,tt(e,t,n,a),t.child;case 14:return Dd(e,t,t.type,t.pendingProps,a);case 15:return Od(e,t,t.type,t.pendingProps,a);case 19:return Hd(e,t,a);case 31:return kh(e,t,a);case 22:return Rd(e,t,a,t.pendingProps);case 24:return Ja(t),n=et(Ge),e===null?(l=Nr(),l===null&&(l=we,s=xr(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=a),l=s),t.memoizedState={parent:n,cache:l},Cr(t),Sa(t,Ge,l)):((e.lanes&a)!==0&&(Er(e,t),bl(t,null,null,a),vl()),l=e.memoizedState,s=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Sa(t,Ge,n)):(n=s.cache,Sa(t,Ge,n),n!==l.cache&&br(t,[Ge],a,!0))),tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function na(e){e.flags|=4}function so(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(pf())e.flags|=8192;else throw Pa=Ai,jr}else e.flags&=-16777217}function qd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nm(t))if(pf())e.flags|=8192;else throw Pa=Ai,jr}function Yi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xu():536870912,e.lanes|=t,Hn|=t)}function El(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function zh(e,t,a){var n=t.pendingProps;switch(pr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pt(Ge),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(An(t)?na(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gr())),_e(t),null;case 26:var l=t.type,s=t.memoizedState;return e===null?(na(t),s!==null?(_e(t),qd(t,s)):(_e(t),so(t,l,null,n,a))):s?s!==e.memoizedState?(na(t),_e(t),qd(t,s)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&na(t),_e(t),so(t,l,e,n,a)),null;case 27:if(ei(t),a=se.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return _e(t),null}e=K.current,An(t)?xc(t):(e=Kf(l,n,a),t.stateNode=e,na(t))}return _e(t),null;case 5:if(ei(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return _e(t),null}if(s=K.current,An(t))xc(t);else{var d=ls(se.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?d.createElement("select",{is:n.is}):d.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?d.createElement(l,{is:n.is}):d.createElement(l)}}s[We]=t,s[rt]=n;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(at(s,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&na(t)}}return _e(t),so(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&na(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=se.current,An(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Pe,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Lf(e.nodeValue,a)),e||xa(t,!0)}else e=ls(e).createTextNode(n),e[We]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=An(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=gr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(xt(t),t):(xt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return _e(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=An(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),l=!1}else l=gr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(xt(t),t):(xt(t),null)}return xt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Yi(t,t.updateQueue),_e(t),null);case 4:return Re(),e===null&&Do(t.stateNode.containerInfo),_e(t),null;case 10:return Pt(t.type),_e(t),null;case 19:if(F(Fe),n=t.memoizedState,n===null)return _e(t),null;if(l=(t.flags&128)!==0,s=n.rendering,s===null)if(l)El(n,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Oi(e),s!==null){for(t.flags|=128,El(n,!1),e=s.updateQueue,t.updateQueue=e,Yi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)hc(a,e),a=a.sibling;return Z(Fe,Fe.current&1|2),ve&&It(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&pt()>Qi&&(t.flags|=128,l=!0,El(n,!1),t.lanes=4194304)}else{if(!l)if(e=Oi(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Yi(t,e),El(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ve)return _e(t),null}else 2*pt()-n.renderingStartTime>Qi&&a!==536870912&&(t.flags|=128,l=!0,El(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=pt(),e.sibling=null,a=Fe.current,Z(Fe,l?a&1|2:a&1),ve&&It(t,n.treeForkCount),e):(_e(t),null);case 22:case 23:return xt(t),Dr(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&Yi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&F(Ia),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pt(Ge),_e(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Mh(e,t){switch(pr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pt(Ge),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ei(t),null;case 31:if(t.memoizedState!==null){if(xt(t),t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(Fe),null;case 4:return Re(),null;case 10:return Pt(t.type),null;case 22:case 23:return xt(t),Dr(),e!==null&&F(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pt(Ge),null;case 25:return null;default:return null}}function Gd(e,t){switch(pr(t),t.tag){case 3:Pt(Ge),Re();break;case 26:case 27:case 5:ei(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&xt(t);break;case 13:xt(t);break;case 19:F(Fe);break;case 10:Pt(t.type);break;case 22:case 23:xt(t),Dr(),e!==null&&F(Ia);break;case 24:Pt(Ge)}}function Al(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var s=a.create,d=a.inst;n=s(),d.destroy=n}a=a.next}while(a!==l)}}catch(m){Ce(t,t.return,m)}}function Ta(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var s=l.next;n=s;do{if((n.tag&e)===e){var d=n.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,l=t;var x=a,k=m;try{k()}catch(B){Ce(l,x,B)}}}n=n.next}while(n!==s)}}catch(B){Ce(t,t.return,B)}}function Yd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{_c(t,a)}catch(n){Ce(e,e.return,n)}}}function Vd(e,t,a){a.props=an(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ce(e,t,n)}}function Tl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){Ce(e,t,l)}}function Gt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Ce(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ce(e,t,l)}else a.current=null}function Xd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Ce(e,e.return,l)}}function ro(e,t,a){try{var n=e.stateNode;ng(n,e.type,a,t),n[rt]=t}catch(l){Ce(e,e.return,l)}}function Zd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Qt));else if(n!==4&&(n===27&&za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(uo(e,t,a),e=e.sibling;e!==null;)uo(e,t,a),e=e.sibling}function Vi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vi(e,t,a),e=e.sibling;e!==null;)Vi(e,t,a),e=e.sibling}function $d(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);at(t,n,a),t[We]=e,t[rt]=a}catch(s){Ce(e,e.return,s)}}var la=!1,Xe=!1,co=!1,Qd=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Uh(e,t){if(e=e.containerInfo,ko=ds,e=sc(e),nr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var d=0,m=-1,x=-1,k=0,B=0,G=e,z=null;t:for(;;){for(var M;G!==a||l!==0&&G.nodeType!==3||(m=d+l),G!==s||n!==0&&G.nodeType!==3||(x=d+n),G.nodeType===3&&(d+=G.nodeValue.length),(M=G.firstChild)!==null;)z=G,G=M;for(;;){if(G===e)break t;if(z===a&&++k===l&&(m=d),z===s&&++B===n&&(x=d),(M=G.nextSibling)!==null)break;G=z,z=G.parentNode}G=M}a=m===-1||x===-1?null:{start:m,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(_o={focusedElem:e,selectionRange:a},ds=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,l=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var J=an(a.type,l);e=n.getSnapshotBeforeUpdate(J,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ce(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Uo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function Kd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),n&4&&Al(5,a);break;case 1:if(sa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Ce(a,a.return,d)}else{var l=an(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ce(a,a.return,d)}}n&64&&Yd(a),n&512&&Tl(a,a.return);break;case 3:if(sa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{_c(e,t)}catch(d){Ce(a,a.return,d)}}break;case 27:t===null&&n&4&&$d(a);case 26:case 5:sa(e,a),t===null&&n&4&&Xd(a),n&512&&Tl(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),n&4&&Wd(e,a);break;case 13:sa(e,a),n&4&&Pd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Xh.bind(null,a),dg(e,a))));break;case 22:if(n=a.memoizedState!==null||la,!n){t=t!==null&&t.memoizedState!==null||Xe,l=la;var s=Xe;la=n,(Xe=t)&&!s?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),la=l,Xe=s}break;case 30:break;default:sa(e,a)}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,ut=!1;function ia(e,t,a){for(a=a.child;a!==null;)Id(e,t,a),a=a.sibling}function Id(e,t,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(In,a)}catch{}switch(a.tag){case 26:Xe||Gt(a,t),ia(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Gt(a,t);var n=ze,l=ut;za(a.type)&&(ze=a.stateNode,ut=!1),ia(e,t,a),Ul(a.stateNode),ze=n,ut=l;break;case 5:Xe||Gt(a,t);case 6:if(n=ze,l=ut,ze=null,ia(e,t,a),ze=n,ut=l,ze!==null)if(ut)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(s){Ce(a,t,s)}else try{ze.removeChild(a.stateNode)}catch(s){Ce(a,t,s)}break;case 18:ze!==null&&(ut?(e=ze,Vf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$n(e)):Vf(ze,a.stateNode));break;case 4:n=ze,l=ut,ze=a.stateNode.containerInfo,ut=!0,ia(e,t,a),ze=n,ut=l;break;case 0:case 11:case 14:case 15:Ta(2,a,t),Xe||Ta(4,a,t),ia(e,t,a);break;case 1:Xe||(Gt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Vd(a,t,n)),ia(e,t,a);break;case 21:ia(e,t,a);break;case 22:Xe=(n=Xe)||a.memoizedState!==null,ia(e,t,a),Xe=n;break;default:ia(e,t,a)}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$n(e)}catch(a){Ce(t,t.return,a)}}}function Pd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$n(e)}catch(a){Ce(t,t.return,a)}}function Bh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qd),t;default:throw Error(c(435,e.tag))}}function Xi(e,t){var a=Bh(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Zh.bind(null,e,n);n.then(l,l)}})}function ct(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],s=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(za(m.type)){ze=m.stateNode,ut=!1;break e}break;case 5:ze=m.stateNode,ut=!1;break e;case 3:case 4:ze=m.stateNode.containerInfo,ut=!0;break e}m=m.return}if(ze===null)throw Error(c(160));Id(s,d,l),ze=null,ut=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ef(t,e),t=t.sibling}var Ut=null;function ef(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),dt(e),n&4&&(Ta(3,e,e.return),Al(3,e),Ta(5,e,e.return));break;case 1:ct(t,e),dt(e),n&512&&(Xe||a===null||Gt(a,a.return)),n&64&&la&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Ut;if(ct(t,e),dt(e),n&512&&(Xe||a===null||Gt(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[el]||s[We]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),at(s,n,a),s[We]=e,Qe(s),n=s;break e;case"link":var d=tm("link","href",l).get(n+(a.href||""));if(d){for(var m=0;m<d.length;m++)if(s=d[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(m,1);break t}}s=l.createElement(n),at(s,n,a),l.head.appendChild(s);break;case"meta":if(d=tm("meta","content",l).get(n+(a.content||""))){for(m=0;m<d.length;m++)if(s=d[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(m,1);break t}}s=l.createElement(n),at(s,n,a),l.head.appendChild(s);break;default:throw Error(c(468,n))}s[We]=e,Qe(s),n=s}e.stateNode=n}else am(l,e.type,e.stateNode);else e.stateNode=em(l,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?am(l,e.type,e.stateNode):em(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&ro(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),dt(e),n&512&&(Xe||a===null||Gt(a,a.return)),a!==null&&n&4&&ro(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),dt(e),n&512&&(Xe||a===null||Gt(a,a.return)),e.flags&32){l=e.stateNode;try{gn(l,"")}catch(J){Ce(e,e.return,J)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,ro(e,l,a!==null?a.memoizedProps:l)),n&1024&&(co=!0);break;case 6:if(ct(t,e),dt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(J){Ce(e,e.return,J)}}break;case 3:if(rs=null,l=Ut,Ut=is(t.containerInfo),ct(t,e),Ut=l,dt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(J){Ce(e,e.return,J)}co&&(co=!1,tf(e));break;case 4:n=Ut,Ut=is(e.stateNode.containerInfo),ct(t,e),dt(e),Ut=n;break;case 12:ct(t,e),dt(e);break;case 31:ct(t,e),dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xi(e,n)));break;case 13:ct(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($i=pt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xi(e,n)));break;case 22:l=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,k=la,B=Xe;if(la=k||l,Xe=B||x,ct(t,e),Xe=B,la=k,dt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||x||la||Xe||nn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(s=x.stateNode,l)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=x.stateNode;var G=x.memoizedProps.style,z=G!=null&&G.hasOwnProperty("display")?G.display:null;m.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(J){Ce(x,x.return,J)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(J){Ce(x,x.return,J)}}}else if(t.tag===18){if(a===null){x=t;try{var M=x.stateNode;l?Xf(M,!0):Xf(x.stateNode,!1)}catch(J){Ce(x,x.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Xi(e,a))));break;case 19:ct(t,e),dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xi(e,n)));break;case 30:break;case 21:break;default:ct(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Zd(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,s=oo(e);Vi(e,s,l);break;case 5:var d=a.stateNode;a.flags&32&&(gn(d,""),a.flags&=-33);var m=oo(e);Vi(e,m,d);break;case 3:case 4:var x=a.stateNode.containerInfo,k=oo(e);uo(e,k,x);break;default:throw Error(c(161))}}catch(B){Ce(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;tf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kd(e,t.alternate,t),t=t.sibling}function nn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ta(4,t,t.return),nn(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Vd(t,t.return,a),nn(t);break;case 27:Ul(t.stateNode);case 26:case 5:Gt(t,t.return),nn(t);break;case 22:t.memoizedState===null&&nn(t);break;case 30:nn(t);break;default:nn(t)}e=e.sibling}}function ra(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:ra(l,s,a),Al(4,s);break;case 1:if(ra(l,s,a),n=s,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(k){Ce(n,n.return,k)}if(n=s,l=n.updateQueue,l!==null){var m=n.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)kc(x[l],m)}catch(k){Ce(n,n.return,k)}}a&&d&64&&Yd(s),Tl(s,s.return);break;case 27:$d(s);case 26:case 5:ra(l,s,a),a&&n===null&&d&4&&Xd(s),Tl(s,s.return);break;case 12:ra(l,s,a);break;case 31:ra(l,s,a),a&&d&4&&Wd(l,s);break;case 13:ra(l,s,a),a&&d&4&&Pd(l,s);break;case 22:s.memoizedState===null&&ra(l,s,a),Tl(s,s.return);break;case 30:break;default:ra(l,s,a)}t=t.sibling}}function fo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ml(a))}function mo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ml(e))}function Bt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)af(e,t,a,n),t=t.sibling}function af(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(e,t,a,n),l&2048&&Al(9,t);break;case 1:Bt(e,t,a,n);break;case 3:Bt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ml(e)));break;case 12:if(l&2048){Bt(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,m=s.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Ce(t,t.return,x)}}else Bt(e,t,a,n);break;case 31:Bt(e,t,a,n);break;case 13:Bt(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Bt(e,t,a,n):wl(e,t):s._visibility&2?Bt(e,t,a,n):(s._visibility|=2,Un(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&fo(d,t);break;case 24:Bt(e,t,a,n),l&2048&&mo(t.alternate,t);break;default:Bt(e,t,a,n)}}function Un(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,m=a,x=n,k=d.flags;switch(d.tag){case 0:case 11:case 15:Un(s,d,m,x,l),Al(8,d);break;case 23:break;case 22:var B=d.stateNode;d.memoizedState!==null?B._visibility&2?Un(s,d,m,x,l):wl(s,d):(B._visibility|=2,Un(s,d,m,x,l)),l&&k&2048&&fo(d.alternate,d);break;case 24:Un(s,d,m,x,l),l&&k&2048&&mo(d.alternate,d);break;default:Un(s,d,m,x,l)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:wl(a,n),l&2048&&fo(n.alternate,n);break;case 24:wl(a,n),l&2048&&mo(n.alternate,n);break;default:wl(a,n)}t=t.sibling}}var Dl=8192;function Bn(e,t,a){if(e.subtreeFlags&Dl)for(e=e.child;e!==null;)nf(e,t,a),e=e.sibling}function nf(e,t,a){switch(e.tag){case 26:Bn(e,t,a),e.flags&Dl&&e.memoizedState!==null&&jg(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:Bn(e,t,a);break;case 3:case 4:var n=Ut;Ut=is(e.stateNode.containerInfo),Bn(e,t,a),Ut=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Dl,Dl=16777216,Bn(e,t,a),Dl=n):Bn(e,t,a));break;default:Bn(e,t,a)}}function lf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,rf(n,e)}lf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sf(e),e=e.sibling}function sf(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zi(e)):Ol(e);break;default:Ol(e)}}function Zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,rf(n,e)}lf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ta(8,t,t.return),Zi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Zi(t));break;default:Zi(t)}e=e.sibling}}function rf(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:Ta(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ml(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ke=n;else e:for(a=e;Ke!==null;){n=Ke;var l=n.sibling,s=n.return;if(Jd(n),n===a){Ke=null;break e}if(l!==null){l.return=s,Ke=l;break e}Ke=s}}}var Lh={getCacheForType:function(e){var t=et(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return et(Ge).controller.signal}},Hh=typeof WeakMap=="function"?WeakMap:Map,Se=0,we=null,ce=null,pe=0,je=0,St=null,wa=!1,Ln=!1,po=!1,oa=0,He=0,Da=0,ln=0,ho=0,Nt=0,Hn=0,Rl=null,ft=null,go=!1,$i=0,of=0,Qi=1/0,Ki=null,Oa=null,Ze=0,Ra=null,Fn=null,ua=0,yo=0,vo=null,uf=null,kl=0,bo=null;function jt(){return(Se&2)!==0&&pe!==0?pe&-pe:U.T!==null?Eo():Cu()}function cf(){if(Nt===0)if((pe&536870912)===0||ve){var e=ni;ni<<=1,(ni&3932160)===0&&(ni=262144),Nt=e}else Nt=536870912;return e=bt.current,e!==null&&(e.flags|=32),Nt}function mt(e,t,a){(e===we&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(qn(e,0),ka(e,pe,Nt,!1)),Pn(e,a),((Se&2)===0||e!==we)&&(e===we&&((Se&2)===0&&(ln|=a),He===4&&ka(e,pe,Nt,!1)),Yt(e))}function df(e,t,a){if((Se&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Wn(e,t),l=n?Gh(e,t):So(e,t,!0),s=n;do{if(l===0){Ln&&!n&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!Fh(a)){l=So(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;l=Rl;var x=m.current.memoizedState.isDehydrated;if(x&&(qn(m,d).flags|=256),d=So(m,d,!1),d!==2){if(po&&!x){m.errorRecoveryDisabledLanes|=s,ln|=s,l=4;break e}s=ft,ft=l,s!==null&&(ft===null?ft=s:ft.push.apply(ft,s))}l=d}if(s=!1,l!==2)continue}}if(l===1){qn(e,0),ka(e,t,0,!0);break}e:{switch(n=e,s=l,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ka(n,t,Nt,!wa);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=$i+300-pt(),10<l)){if(ka(n,t,Nt,!wa),ii(n,0,!0)!==0)break e;ua=t,n.timeoutHandle=Gf(ff.bind(null,n,a,ft,Ki,go,t,Nt,ln,Hn,wa,s,"Throttled",-0,0),l);break e}ff(n,a,ft,Ki,go,t,Nt,ln,Hn,wa,s,null,-0,0)}}break}while(!0);Yt(e)}function ff(e,t,a,n,l,s,d,m,x,k,B,G,z,M){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},nf(t,s,G);var J=(s&62914560)===s?$i-pt():(s&4194048)===s?of-pt():0;if(J=Cg(G,J),J!==null){ua=s,e.cancelPendingCommit=J(xf.bind(null,e,t,s,a,n,l,d,m,x,B,G,null,z,M)),ka(e,s,d,!k);return}}xf(e,t,s,a,n,l,d,m,x)}function Fh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],s=l.getSnapshot;l=l.value;try{if(!yt(s(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,n){t&=~ho,t&=~ln,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var s=31-gt(l),d=1<<s;n[s]=-1,l&=~d}a!==0&&Su(e,a,t)}function Ji(){return(Se&6)===0?(_l(0),!1):!0}function xo(){if(ce!==null){if(je===0)var e=ce.return;else e=ce,Wt=Ka=null,Mr(e),Rn=null,hl=0,e=ce;for(;e!==null;)Gd(e.alternate,e),e=e.return;ce=null}}function qn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,xo(),we=e,ce=a=Jt(e.current,null),pe=t,je=0,St=null,wa=!1,Ln=Wn(e,t),po=!1,Hn=Nt=ho=ln=Da=He=0,ft=Rl=null,go=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-gt(n),s=1<<l;t|=e[l],n&=~s}return oa=t,yi(),a}function mf(e,t){ie=null,U.H=jl,t===On||t===Ei?(t=wc(),je=3):t===jr?(t=wc(),je=4):je=t===Ir?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,ce===null&&(He=1,Hi(e,wt(t,e.current)))}function pf(){var e=bt.current;return e===null?!0:(pe&4194048)===pe?kt===null:(pe&62914560)===pe||(pe&536870912)!==0?e===kt:!1}function hf(){var e=U.H;return U.H=jl,e===null?jl:e}function gf(){var e=U.A;return U.A=Lh,e}function Ii(){He=4,wa||(pe&4194048)!==pe&&bt.current!==null||(Ln=!0),(Da&134217727)===0&&(ln&134217727)===0||we===null||ka(we,pe,Nt,!1)}function So(e,t,a){var n=Se;Se|=2;var l=hf(),s=gf();(we!==e||pe!==t)&&(Ki=null,qn(e,t)),t=!1;var d=He;e:do try{if(je!==0&&ce!==null){var m=ce,x=St;switch(je){case 8:xo(),d=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var k=je;if(je=0,St=null,Gn(e,m,x,k),a&&Ln){d=0;break e}break;default:k=je,je=0,St=null,Gn(e,m,x,k)}}qh(),d=He;break}catch(B){mf(e,B)}while(!0);return t&&e.shellSuspendCounter++,Wt=Ka=null,Se=n,U.H=l,U.A=s,ce===null&&(we=null,pe=0,yi()),d}function qh(){for(;ce!==null;)yf(ce)}function Gh(e,t){var a=Se;Se|=2;var n=hf(),l=gf();we!==e||pe!==t?(Ki=null,Qi=pt()+500,qn(e,t)):Ln=Wn(e,t);e:do try{if(je!==0&&ce!==null){t=ce;var s=St;t:switch(je){case 1:je=0,St=null,Gn(e,t,s,1);break;case 2:case 9:if(Ac(s)){je=0,St=null,vf(t);break}t=function(){je!==2&&je!==9||we!==e||(je=7),Yt(e)},s.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:Ac(s)?(je=0,St=null,vf(t)):(je=0,St=null,Gn(e,t,s,7));break;case 5:var d=null;switch(ce.tag){case 26:d=ce.memoizedState;case 5:case 27:var m=ce;if(d?nm(d):m.stateNode.complete){je=0,St=null;var x=m.sibling;if(x!==null)ce=x;else{var k=m.return;k!==null?(ce=k,Wi(k)):ce=null}break t}}je=0,St=null,Gn(e,t,s,5);break;case 6:je=0,St=null,Gn(e,t,s,6);break;case 8:xo(),He=6;break e;default:throw Error(c(462))}}Yh();break}catch(B){mf(e,B)}while(!0);return Wt=Ka=null,U.H=n,U.A=l,Se=a,ce!==null?0:(we=null,pe=0,yi(),He)}function Yh(){for(;ce!==null&&!fp();)yf(ce)}function yf(e){var t=Fd(e.alternate,e,oa);e.memoizedProps=e.pendingProps,t===null?Wi(e):ce=t}function vf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=zd(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=zd(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:Mr(t);default:Gd(a,t),t=ce=hc(t,oa),t=Fd(a,t,oa)}e.memoizedProps=e.pendingProps,t===null?Wi(e):ce=t}function Gn(e,t,a,n){Wt=Ka=null,Mr(t),Rn=null,hl=0;var l=t.return;try{if(Rh(e,l,t,a,pe)){He=1,Hi(e,wt(a,e.current)),ce=null;return}}catch(s){if(l!==null)throw ce=l,s;He=1,Hi(e,wt(a,e.current)),ce=null;return}t.flags&32768?(ve||n===1?e=!0:Ln||(pe&536870912)!==0?e=!1:(wa=e=!0,(n===2||n===9||n===3||n===6)&&(n=bt.current,n!==null&&n.tag===13&&(n.flags|=16384))),bf(t,e)):Wi(t)}function Wi(e){var t=e;do{if((t.flags&32768)!==0){bf(t,wa);return}e=t.return;var a=zh(t.alternate,t,oa);if(a!==null){ce=a;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);He===0&&(He=5)}function bf(e,t){do{var a=Mh(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);He=6,ce=null}function xf(e,t,a,n,l,s,d,m,x){e.cancelPendingCommit=null;do Pi();while(Ze!==0);if((Se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=or,Np(e,a,s,d,m,x),e===we&&(ce=we=null,pe=0),Fn=t,Ra=e,ua=a,yo=s,vo=l,uf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$h(ti,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null,l=X.p,X.p=2,d=Se,Se|=4;try{Uh(e,t,a)}finally{Se=d,X.p=l,U.T=n}}Ze=1,Sf(),Nf(),jf()}}function Sf(){if(Ze===1){Ze=0;var e=Ra,t=Fn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var n=X.p;X.p=2;var l=Se;Se|=4;try{ef(t,e);var s=_o,d=sc(e.containerInfo),m=s.focusedElem,x=s.selectionRange;if(d!==m&&m&&m.ownerDocument&&ic(m.ownerDocument.documentElement,m)){if(x!==null&&nr(m)){var k=x.start,B=x.end;if(B===void 0&&(B=k),"selectionStart"in m)m.selectionStart=k,m.selectionEnd=Math.min(B,m.value.length);else{var G=m.ownerDocument||document,z=G&&G.defaultView||window;if(z.getSelection){var M=z.getSelection(),J=m.textContent.length,ae=Math.min(x.start,J),Te=x.end===void 0?ae:Math.min(x.end,J);!M.extend&&ae>Te&&(d=Te,Te=ae,ae=d);var w=lc(m,ae),j=lc(m,Te);if(w&&j&&(M.rangeCount!==1||M.anchorNode!==w.node||M.anchorOffset!==w.offset||M.focusNode!==j.node||M.focusOffset!==j.offset)){var R=G.createRange();R.setStart(w.node,w.offset),M.removeAllRanges(),ae>Te?(M.addRange(R),M.extend(j.node,j.offset)):(R.setEnd(j.node,j.offset),M.addRange(R))}}}}for(G=[],M=m;M=M.parentNode;)M.nodeType===1&&G.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<G.length;m++){var H=G[m];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}ds=!!ko,_o=ko=null}finally{Se=l,X.p=n,U.T=a}}e.current=t,Ze=2}}function Nf(){if(Ze===2){Ze=0;var e=Ra,t=Fn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var n=X.p;X.p=2;var l=Se;Se|=4;try{Kd(e,t.alternate,t)}finally{Se=l,X.p=n,U.T=a}}Ze=3}}function jf(){if(Ze===4||Ze===3){Ze=0,mp();var e=Ra,t=Fn,a=ua,n=uf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Fn=Ra=null,Cf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Oa=null),Ls(a),t=t.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(In,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=U.T,l=X.p,X.p=2,U.T=null;try{for(var s=e.onRecoverableError,d=0;d<n.length;d++){var m=n[d];s(m.value,{componentStack:m.stack})}}finally{U.T=t,X.p=l}}(ua&3)!==0&&Pi(),Yt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===bo?kl++:(kl=0,bo=e):kl=0,_l(0)}}function Cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ml(t)))}function Pi(){return Sf(),Nf(),jf(),Ef()}function Ef(){if(Ze!==5)return!1;var e=Ra,t=yo;yo=0;var a=Ls(ua),n=U.T,l=X.p;try{X.p=32>a?32:a,U.T=null,a=vo,vo=null;var s=Ra,d=ua;if(Ze=0,Fn=Ra=null,ua=0,(Se&6)!==0)throw Error(c(331));var m=Se;if(Se|=4,sf(s.current),af(s,s.current,d,a),Se=m,_l(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(In,s)}catch{}return!0}finally{X.p=l,U.T=n,Cf(e,t)}}function Af(e,t,a){t=wt(a,t),t=Jr(e.stateNode,t,2),e=Ca(e,t,2),e!==null&&(Pn(e,2),Yt(e))}function Ce(e,t,a){if(e.tag===3)Af(e,e,a);else for(;t!==null;){if(t.tag===3){Af(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Oa===null||!Oa.has(n))){e=wt(a,e),a=Ad(2),n=Ca(t,a,2),n!==null&&(Td(a,n,t,e),Pn(n,2),Yt(n));break}}t=t.return}}function No(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Hh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(po=!0,l.add(a),e=Vh.bind(null,e,t,a),t.then(e,e))}function Vh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(pe&a)===a&&(He===4||He===3&&(pe&62914560)===pe&&300>pt()-$i?(Se&2)===0&&qn(e,0):ho|=a,Hn===pe&&(Hn=0)),Yt(e)}function Tf(e,t){t===0&&(t=xu()),e=Za(e,t),e!==null&&(Pn(e,t),Yt(e))}function Xh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Tf(e,a)}function Zh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Tf(e,a)}function $h(e,t){return zs(e,t)}var es=null,Yn=null,jo=!1,ts=!1,Co=!1,_a=0;function Yt(e){e!==Yn&&e.next===null&&(Yn===null?es=Yn=e:Yn=Yn.next=e),ts=!0,jo||(jo=!0,Kh())}function _l(e,t){if(!Co&&ts){Co=!0;do for(var a=!1,n=es;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var s=0;else{var d=n.suspendedLanes,m=n.pingedLanes;s=(1<<31-gt(42|e)+1)-1,s&=l&~(d&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Rf(n,s))}else s=pe,s=ii(n,n===we?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Wn(n,s)||(a=!0,Rf(n,s));n=n.next}while(a);Co=!1}}function Qh(){wf()}function wf(){ts=jo=!1;var e=0;_a!==0&&ig()&&(e=_a);for(var t=pt(),a=null,n=es;n!==null;){var l=n.next,s=Df(n,t);s===0?(n.next=null,a===null?es=l:a.next=l,l===null&&(Yn=a)):(a=n,(e!==0||(s&3)!==0)&&(ts=!0)),n=l}Ze!==0&&Ze!==5||_l(e),_a!==0&&(_a=0)}function Df(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-gt(s),m=1<<d,x=l[d];x===-1?((m&a)===0||(m&n)!==0)&&(l[d]=Sp(m,t)):x<=t&&(e.expiredLanes|=m),s&=~m}if(t=we,a=pe,a=ii(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ms(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ms(n),Ls(a)){case 2:case 8:a=vu;break;case 32:a=ti;break;case 268435456:a=bu;break;default:a=ti}return n=Of.bind(null,e),a=zs(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ms(n),e.callbackPriority=2,e.callbackNode=null,2}function Of(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pi()&&e.callbackNode!==a)return null;var n=pe;return n=ii(e,e===we?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(df(e,n,t),Df(e,pt()),e.callbackNode!=null&&e.callbackNode===a?Of.bind(null,e):null)}function Rf(e,t){if(Pi())return null;df(e,t,!0)}function Kh(){rg(function(){(Se&6)!==0?zs(yu,Qh):wf()})}function Eo(){if(_a===0){var e=wn;e===0&&(e=ai,ai<<=1,(ai&261888)===0&&(ai=256)),_a=e}return _a}function kf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ui(""+e)}function _f(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Jh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var s=kf((l[rt]||null).action),d=n.submitter;d&&(t=(t=d[rt]||null)?kf(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var m=new mi("action","action",null,n,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(_a!==0){var x=d?_f(l,d):new FormData(l);Vr(a,{pending:!0,data:x,method:l.method,action:s},null,x)}}else typeof s=="function"&&(m.preventDefault(),x=d?_f(l,d):new FormData(l),Vr(a,{pending:!0,data:x,method:l.method,action:s},s,x))},currentTarget:l}]})}}for(var Ao=0;Ao<rr.length;Ao++){var To=rr[Ao],Ih=To.toLowerCase(),Wh=To[0].toUpperCase()+To.slice(1);Mt(Ih,"on"+Wh)}Mt(uc,"onAnimationEnd"),Mt(cc,"onAnimationIteration"),Mt(dc,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(ph,"onTransitionRun"),Mt(hh,"onTransitionStart"),Mt(gh,"onTransitionCancel"),Mt(fc,"onTransitionEnd"),pn("onMouseEnter",["mouseout","mouseover"]),pn("onMouseLeave",["mouseout","mouseover"]),pn("onPointerEnter",["pointerout","pointerover"]),pn("onPointerLeave",["pointerout","pointerover"]),Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ph=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zl));function zf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var d=n.length-1;0<=d;d--){var m=n[d],x=m.instance,k=m.currentTarget;if(m=m.listener,x!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=k;try{s(l)}catch(B){gi(B)}l.currentTarget=null,s=x}else for(d=0;d<n.length;d++){if(m=n[d],x=m.instance,k=m.currentTarget,m=m.listener,x!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=k;try{s(l)}catch(B){gi(B)}l.currentTarget=null,s=x}}}}function de(e,t){var a=t[Hs];a===void 0&&(a=t[Hs]=new Set);var n=e+"__bubble";a.has(n)||(Mf(t,e,2,!1),a.add(n))}function wo(e,t,a){var n=0;t&&(n|=4),Mf(a,e,n,t)}var as="_reactListening"+Math.random().toString(36).slice(2);function Do(e){if(!e[as]){e[as]=!0,Tu.forEach(function(a){a!=="selectionchange"&&(Ph.has(a)||wo(a,!1,e),wo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[as]||(t[as]=!0,wo("selectionchange",!1,t))}}function Mf(e,t,a,n){switch(cm(t)){case 2:var l=Tg;break;case 8:l=wg;break;default:l=Vo}a=l.bind(null,t,a,e),l=void 0,!Qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Oo(e,t,a,n,l){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var m=n.stateNode.containerInfo;if(m===l)break;if(d===4)for(d=n.return;d!==null;){var x=d.tag;if((x===3||x===4)&&d.stateNode.containerInfo===l)return;d=d.return}for(;m!==null;){if(d=dn(m),d===null)return;if(x=d.tag,x===5||x===6||x===26||x===27){n=s=d;continue e}m=m.parentNode}}n=n.return}Hu(function(){var k=s,B=Zs(a),G=[];e:{var z=mc.get(e);if(z!==void 0){var M=mi,J=e;switch(e){case"keypress":if(di(a)===0)break e;case"keydown":case"keyup":M=Zp;break;case"focusin":J="focus",M=Ws;break;case"focusout":J="blur",M=Ws;break;case"beforeblur":case"afterblur":M=Ws;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Kp;break;case uc:case cc:case dc:M=Bp;break;case fc:M=Ip;break;case"scroll":case"scrollend":M=kp;break;case"wheel":M=Pp;break;case"copy":case"cut":case"paste":M=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Vu;break;case"toggle":case"beforetoggle":M=th}var ae=(t&4)!==0,Te=!ae&&(e==="scroll"||e==="scrollend"),w=ae?z!==null?z+"Capture":null:z;ae=[];for(var j=k,R;j!==null;){var H=j;if(R=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||R===null||w===null||(H=al(j,w),H!=null&&ae.push(Ml(j,H,R))),Te)break;j=j.return}0<ae.length&&(z=new M(z,J,null,a,B),G.push({event:z,listeners:ae}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",z&&a!==Xs&&(J=a.relatedTarget||a.fromElement)&&(dn(J)||J[cn]))break e;if((M||z)&&(z=B.window===B?B:(z=B.ownerDocument)?z.defaultView||z.parentWindow:window,M?(J=a.relatedTarget||a.toElement,M=k,J=J?dn(J):null,J!==null&&(Te=p(J),ae=J.tag,J!==Te||ae!==5&&ae!==27&&ae!==6)&&(J=null)):(M=null,J=k),M!==J)){if(ae=Gu,H="onMouseLeave",w="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Vu,H="onPointerLeave",w="onPointerEnter",j="pointer"),Te=M==null?z:tl(M),R=J==null?z:tl(J),z=new ae(H,j+"leave",M,a,B),z.target=Te,z.relatedTarget=R,H=null,dn(B)===k&&(ae=new ae(w,j+"enter",J,a,B),ae.target=R,ae.relatedTarget=Te,H=ae),Te=H,M&&J)t:{for(ae=eg,w=M,j=J,R=0,H=w;H;H=ae(H))R++;H=0;for(var ee=j;ee;ee=ae(ee))H++;for(;0<R-H;)w=ae(w),R--;for(;0<H-R;)j=ae(j),H--;for(;R--;){if(w===j||j!==null&&w===j.alternate){ae=w;break t}w=ae(w),j=ae(j)}ae=null}else ae=null;M!==null&&Uf(G,z,M,ae,!1),J!==null&&Te!==null&&Uf(G,Te,J,ae,!0)}}e:{if(z=k?tl(k):window,M=z.nodeName&&z.nodeName.toLowerCase(),M==="select"||M==="input"&&z.type==="file")var be=Wu;else if(Ju(z))if(Pu)be=dh;else{be=uh;var W=oh}else M=z.nodeName,!M||M.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?k&&Vs(k.elementType)&&(be=Wu):be=ch;if(be&&(be=be(e,k))){Iu(G,be,a,B);break e}W&&W(e,z,k),e==="focusout"&&k&&z.type==="number"&&k.memoizedProps.value!=null&&Ys(z,"number",z.value)}switch(W=k?tl(k):window,e){case"focusin":(Ju(W)||W.contentEditable==="true")&&(xn=W,lr=k,cl=null);break;case"focusout":cl=lr=xn=null;break;case"mousedown":ir=!0;break;case"contextmenu":case"mouseup":case"dragend":ir=!1,rc(G,a,B);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":rc(G,a,B)}var re;if(er)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else bn?Qu(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(Xu&&a.locale!=="ko"&&(bn||he!=="onCompositionStart"?he==="onCompositionEnd"&&bn&&(re=Fu()):(ya=B,Ks="value"in ya?ya.value:ya.textContent,bn=!0)),W=ns(k,he),0<W.length&&(he=new Yu(he,e,null,a,B),G.push({event:he,listeners:W}),re?he.data=re:(re=Ku(a),re!==null&&(he.data=re)))),(re=nh?lh(e,a):ih(e,a))&&(he=ns(k,"onBeforeInput"),0<he.length&&(W=new Yu("onBeforeInput","beforeinput",null,a,B),G.push({event:W,listeners:he}),W.data=re)),Jh(G,e,k,a,B)}zf(G,t)})}function Ml(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ns(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=al(e,a),l!=null&&n.unshift(Ml(e,l,s)),l=al(e,t),l!=null&&n.push(Ml(e,l,s))),e.tag===3)return n;e=e.return}return[]}function eg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Uf(e,t,a,n,l){for(var s=t._reactName,d=[];a!==null&&a!==n;){var m=a,x=m.alternate,k=m.stateNode;if(m=m.tag,x!==null&&x===n)break;m!==5&&m!==26&&m!==27||k===null||(x=k,l?(k=al(a,s),k!=null&&d.unshift(Ml(a,k,x))):l||(k=al(a,s),k!=null&&d.push(Ml(a,k,x)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var tg=/\r\n?/g,ag=/\u0000|\uFFFD/g;function Bf(e){return(typeof e=="string"?e:""+e).replace(tg,`
`).replace(ag,"")}function Lf(e,t){return t=Bf(t),Bf(e)===t}function Ae(e,t,a,n,l,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||gn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&gn(e,""+n);break;case"className":ri(e,"class",n);break;case"tabIndex":ri(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(e,a,n);break;case"style":Bu(e,n,s);break;case"data":if(t!=="object"){ri(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ui(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",l.name,l,null),Ae(e,t,"formEncType",l.formEncType,l,null),Ae(e,t,"formMethod",l.formMethod,l,null),Ae(e,t,"formTarget",l.formTarget,l,null)):(Ae(e,t,"encType",l.encType,l,null),Ae(e,t,"method",l.method,l,null),Ae(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ui(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Qt);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=ui(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":de("beforetoggle",e),de("toggle",e),si(e,"popover",n);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":si(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Op.get(a)||a,si(e,a,n))}}function Ro(e,t,a,n,l,s){switch(a){case"style":Bu(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?gn(e,n):(typeof n=="number"||typeof n=="bigint")&&gn(e,""+n);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),s=e[rt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):si(e,a,n)}}}function at(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var n=!1,l=!1,s;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];if(d!=null)switch(s){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,s,d,a,null)}}l&&Ae(e,t,"srcSet",a.srcSet,a,null),n&&Ae(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var m=s=d=l=null,x=null,k=null;for(n in a)if(a.hasOwnProperty(n)){var B=a[n];if(B!=null)switch(n){case"name":l=B;break;case"type":d=B;break;case"checked":x=B;break;case"defaultChecked":k=B;break;case"value":s=B;break;case"defaultValue":m=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:Ae(e,t,n,B,a,null)}}_u(e,s,m,x,k,d,l,!1);return;case"select":de("invalid",e),n=d=s=null;for(l in a)if(a.hasOwnProperty(l)&&(m=a[l],m!=null))switch(l){case"value":s=m;break;case"defaultValue":d=m;break;case"multiple":n=m;default:Ae(e,t,l,m,a,null)}t=s,a=d,e.multiple=!!n,t!=null?hn(e,!!n,t,!1):a!=null&&hn(e,!!n,a,!0);return;case"textarea":de("invalid",e),s=l=n=null;for(d in a)if(a.hasOwnProperty(d)&&(m=a[d],m!=null))switch(d){case"value":n=m;break;case"defaultValue":l=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:Ae(e,t,d,m,a,null)}Mu(e,n,l,s);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(n=a[x],n!=null))switch(x){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ae(e,t,x,n,a,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(n=0;n<zl.length;n++)de(zl[n],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(n=a[k],n!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,k,n,a,null)}return;default:if(Vs(t)){for(B in a)a.hasOwnProperty(B)&&(n=a[B],n!==void 0&&Ro(e,t,B,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&Ae(e,t,m,n,a,null))}function ng(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,d=null,m=null,x=null,k=null,B=null;for(M in a){var G=a[M];if(a.hasOwnProperty(M)&&G!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":x=G;default:n.hasOwnProperty(M)||Ae(e,t,M,null,n,G)}}for(var z in n){var M=n[z];if(G=a[z],n.hasOwnProperty(z)&&(M!=null||G!=null))switch(z){case"type":s=M;break;case"name":l=M;break;case"checked":k=M;break;case"defaultChecked":B=M;break;case"value":d=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==G&&Ae(e,t,z,M,n,G)}}Gs(e,d,m,x,k,B,s,l);return;case"select":M=d=m=z=null;for(s in a)if(x=a[s],a.hasOwnProperty(s)&&x!=null)switch(s){case"value":break;case"multiple":M=x;default:n.hasOwnProperty(s)||Ae(e,t,s,null,n,x)}for(l in n)if(s=n[l],x=a[l],n.hasOwnProperty(l)&&(s!=null||x!=null))switch(l){case"value":z=s;break;case"defaultValue":m=s;break;case"multiple":d=s;default:s!==x&&Ae(e,t,l,s,n,x)}t=m,a=d,n=M,z!=null?hn(e,!!a,z,!1):!!n!=!!a&&(t!=null?hn(e,!!a,t,!0):hn(e,!!a,a?[]:"",!1));return;case"textarea":M=z=null;for(m in a)if(l=a[m],a.hasOwnProperty(m)&&l!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ae(e,t,m,null,n,l)}for(d in n)if(l=n[d],s=a[d],n.hasOwnProperty(d)&&(l!=null||s!=null))switch(d){case"value":z=l;break;case"defaultValue":M=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==s&&Ae(e,t,d,l,n,s)}zu(e,z,M);return;case"option":for(var J in a)if(z=a[J],a.hasOwnProperty(J)&&z!=null&&!n.hasOwnProperty(J))switch(J){case"selected":e.selected=!1;break;default:Ae(e,t,J,null,n,z)}for(x in n)if(z=n[x],M=a[x],n.hasOwnProperty(x)&&z!==M&&(z!=null||M!=null))switch(x){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ae(e,t,x,z,n,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)z=a[ae],a.hasOwnProperty(ae)&&z!=null&&!n.hasOwnProperty(ae)&&Ae(e,t,ae,null,n,z);for(k in n)if(z=n[k],M=a[k],n.hasOwnProperty(k)&&z!==M&&(z!=null||M!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:Ae(e,t,k,z,n,M)}return;default:if(Vs(t)){for(var Te in a)z=a[Te],a.hasOwnProperty(Te)&&z!==void 0&&!n.hasOwnProperty(Te)&&Ro(e,t,Te,void 0,n,z);for(B in n)z=n[B],M=a[B],!n.hasOwnProperty(B)||z===M||z===void 0&&M===void 0||Ro(e,t,B,z,n,M);return}}for(var w in a)z=a[w],a.hasOwnProperty(w)&&z!=null&&!n.hasOwnProperty(w)&&Ae(e,t,w,null,n,z);for(G in n)z=n[G],M=a[G],!n.hasOwnProperty(G)||z===M||z==null&&M==null||Ae(e,t,G,z,n,M)}function Hf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],s=l.transferSize,d=l.initiatorType,m=l.duration;if(s&&m&&Hf(d)){for(d=0,m=l.responseEnd,n+=1;n<a.length;n++){var x=a[n],k=x.startTime;if(k>m)break;var B=x.transferSize,G=x.initiatorType;B&&Hf(G)&&(x=x.responseEnd,d+=B*(x<m?1:(m-k)/(x-k)))}if(--n,t+=8*(s+d)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ko=null,_o=null;function ls(e){return e.nodeType===9?e:e.ownerDocument}function Ff(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mo=null;function ig(){var e=window.event;return e&&e.type==="popstate"?e===Mo?!1:(Mo=e,!0):(Mo=null,!1)}var Gf=typeof setTimeout=="function"?setTimeout:void 0,sg=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,rg=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(e){return Yf.resolve(null).then(e).catch(og)}:Gf;function og(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Vf(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),$n(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Ul(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ul(a);for(var s=a.firstChild;s;){var d=s.nextSibling,m=s.nodeName;s[el]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}else a==="body"&&Ul(e.ownerDocument.body);a=l}while(a);$n(t)}function Xf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Uo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uo(a),Fs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ug(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[el])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function cg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function Zf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function Bo(e){return e.data==="$?"||e.data==="$~"}function Lo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ho=null;function $f(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Kf(e,t,a){switch(t=ls(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ul(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fs(e)}var zt=new Map,Jf=new Set;function is(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=X.d;X.d={f:fg,r:mg,D:pg,C:hg,L:gg,m:yg,X:bg,S:vg,M:xg};function fg(){var e=ca.f(),t=Ji();return e||t}function mg(e){var t=fn(e);t!==null&&t.tag===5&&t.type==="form"?fd(t):ca.r(e)}var Vn=typeof document>"u"?null:document;function If(e,t,a){var n=Vn;if(n&&typeof t=="string"&&t){var l=At(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Jf.has(l)||(Jf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),at(t,"link",e),Qe(t),n.head.appendChild(t)))}}function pg(e){ca.D(e),If("dns-prefetch",e,null)}function hg(e,t){ca.C(e,t),If("preconnect",e,t)}function gg(e,t,a){ca.L(e,t,a);var n=Vn;if(n&&e&&t){var l='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+At(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+At(a.imageSizes)+'"]')):l+='[href="'+At(e)+'"]';var s=l;switch(t){case"style":s=Xn(e);break;case"script":s=Zn(e)}zt.has(s)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),zt.set(s,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Bl(s))||t==="script"&&n.querySelector(Ll(s))||(t=n.createElement("link"),at(t,"link",e),Qe(t),n.head.appendChild(t)))}}function yg(e,t){ca.m(e,t);var a=Vn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+At(n)+'"][href="'+At(e)+'"]',s=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Zn(e)}if(!zt.has(s)&&(e=N({rel:"modulepreload",href:e},t),zt.set(s,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ll(s)))return}n=a.createElement("link"),at(n,"link",e),Qe(n),a.head.appendChild(n)}}}function vg(e,t,a){ca.S(e,t,a);var n=Vn;if(n&&e){var l=mn(n).hoistableStyles,s=Xn(e);t=t||"default";var d=l.get(s);if(!d){var m={loading:0,preload:null};if(d=n.querySelector(Bl(s)))m.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=zt.get(s))&&Fo(e,a);var x=d=n.createElement("link");Qe(x),at(x,"link",e),x._p=new Promise(function(k,B){x.onload=k,x.onerror=B}),x.addEventListener("load",function(){m.loading|=1}),x.addEventListener("error",function(){m.loading|=2}),m.loading|=4,ss(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:m},l.set(s,d)}}}function bg(e,t){ca.X(e,t);var a=Vn;if(a&&e){var n=mn(a).hoistableScripts,l=Zn(e),s=n.get(l);s||(s=a.querySelector(Ll(l)),s||(e=N({src:e,async:!0},t),(t=zt.get(l))&&qo(e,t),s=a.createElement("script"),Qe(s),at(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function xg(e,t){ca.M(e,t);var a=Vn;if(a&&e){var n=mn(a).hoistableScripts,l=Zn(e),s=n.get(l);s||(s=a.querySelector(Ll(l)),s||(e=N({src:e,async:!0,type:"module"},t),(t=zt.get(l))&&qo(e,t),s=a.createElement("script"),Qe(s),at(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function Wf(e,t,a,n){var l=(l=se.current)?is(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Xn(a.href),a=mn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Xn(a.href);var s=mn(l).hoistableStyles,d=s.get(e);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=l.querySelector(Bl(e)))&&!s._p&&(d.instance=s,d.state.loading=5),zt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zt.set(e,a),s||Sg(l,e,a,d.state))),t&&n===null)throw Error(c(528,""));return d}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Zn(a),a=mn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Xn(e){return'href="'+At(e)+'"'}function Bl(e){return'link[rel="stylesheet"]['+e+"]"}function Pf(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Sg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),at(t,"link",a),Qe(t),e.head.appendChild(t))}function Zn(e){return'[src="'+At(e)+'"]'}function Ll(e){return"script[async]"+e}function em(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+At(a.href)+'"]');if(n)return t.instance=n,Qe(n),n;var l=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Qe(n),at(n,"style",l),ss(n,a.precedence,e),t.instance=n;case"stylesheet":l=Xn(a.href);var s=e.querySelector(Bl(l));if(s)return t.state.loading|=4,t.instance=s,Qe(s),s;n=Pf(a),(l=zt.get(l))&&Fo(n,l),s=(e.ownerDocument||e).createElement("link"),Qe(s);var d=s;return d._p=new Promise(function(m,x){d.onload=m,d.onerror=x}),at(s,"link",n),t.state.loading|=4,ss(s,a.precedence,e),t.instance=s;case"script":return s=Zn(a.src),(l=e.querySelector(Ll(s)))?(t.instance=l,Qe(l),l):(n=a,(l=zt.get(s))&&(n=N({},a),qo(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Qe(l),at(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,ss(n,a.precedence,e));return t.instance}function ss(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,s=l,d=0;d<n.length;d++){var m=n[d];if(m.dataset.precedence===t)s=m;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rs=null;function tm(e,t,a){if(rs===null){var n=new Map,l=rs=new Map;l.set(a,n)}else l=rs,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var s=a[l];if(!(s[el]||s[We]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var m=n.get(d);m?m.push(s):n.set(d,[s])}}return n}function am(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ng(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jg(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Xn(n.href),s=t.querySelector(Bl(l));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=os.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Qe(s);return}s=t.ownerDocument||t,n=Pf(n),(l=zt.get(l))&&Fo(n,l),s=s.createElement("link"),Qe(s);var d=s;d._p=new Promise(function(m,x){d.onload=m,d.onerror=x}),at(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=os.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Go=0;function Cg(e,t){return e.stylesheets&&e.count===0&&cs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&cs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Go===0&&(Go=62500*lg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Go?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function os(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var us=null;function cs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,us=new Map,t.forEach(Eg,e),us=null,os.call(e))}function Eg(e,t){if(!(t.state.loading&4)){var a=us.get(e);if(a)var n=a.get(null);else{a=new Map,us.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var d=l[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}l=t.instance,d=l.getAttribute("data-precedence"),s=a.get(d)||n,s===n&&a.set(null,l),a.set(d,l),this.count++,n=os.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Hl={$$typeof:L,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Ag(e,t,a,n,l,s,d,m,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Us(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.hiddenUpdates=Us(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function lm(e,t,a,n,l,s,d,m,x,k,B,G){return e=new Ag(e,t,a,d,x,k,B,G,m),t=1,s===!0&&(t|=24),s=vt(3,null,null,t),e.current=s,s.stateNode=e,t=xr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},Cr(s),e}function im(e){return e?(e=jn,e):jn}function sm(e,t,a,n,l,s){l=im(l),n.context===null?n.context=l:n.pendingContext=l,n=ja(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Ca(e,n,t),a!==null&&(mt(a,e,t),yl(a,e,t))}function rm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Yo(e,t){rm(e,t),(e=e.alternate)&&rm(e,t)}function om(e){if(e.tag===13||e.tag===31){var t=Za(e,67108864);t!==null&&mt(t,e,67108864),Yo(e,67108864)}}function um(e){if(e.tag===13||e.tag===31){var t=jt();t=Bs(t);var a=Za(e,t);a!==null&&mt(a,e,t),Yo(e,t)}}var ds=!0;function Tg(e,t,a,n){var l=U.T;U.T=null;var s=X.p;try{X.p=2,Vo(e,t,a,n)}finally{X.p=s,U.T=l}}function wg(e,t,a,n){var l=U.T;U.T=null;var s=X.p;try{X.p=8,Vo(e,t,a,n)}finally{X.p=s,U.T=l}}function Vo(e,t,a,n){if(ds){var l=Xo(n);if(l===null)Oo(e,t,n,fs,a),dm(e,n);else if(Og(l,e,t,a,n))n.stopPropagation();else if(dm(e,n),t&4&&-1<Dg.indexOf(e)){for(;l!==null;){var s=fn(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=qa(s.pendingLanes);if(d!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var x=1<<31-gt(d);m.entanglements[1]|=x,d&=~x}Yt(s),(Se&6)===0&&(Qi=pt()+500,_l(0))}}break;case 31:case 13:m=Za(s,2),m!==null&&mt(m,s,2),Ji(),Yo(s,2)}if(s=Xo(n),s===null&&Oo(e,t,n,fs,a),s===l)break;l=s}l!==null&&n.stopPropagation()}else Oo(e,t,n,null,a)}}function Xo(e){return e=Zs(e),Zo(e)}var fs=null;function Zo(e){if(fs=null,e=dn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=S(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fs=e,null}function cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pp()){case yu:return 2;case vu:return 8;case ti:case hp:return 32;case bu:return 268435456;default:return 32}default:return 32}}var $o=!1,Ma=null,Ua=null,Ba=null,Fl=new Map,ql=new Map,La=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dm(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Fl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(t.pointerId)}}function Gl(e,t,a,n,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[l]},t!==null&&(t=fn(t),t!==null&&om(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Og(e,t,a,n,l){switch(t){case"focusin":return Ma=Gl(Ma,e,t,a,n,l),!0;case"dragenter":return Ua=Gl(Ua,e,t,a,n,l),!0;case"mouseover":return Ba=Gl(Ba,e,t,a,n,l),!0;case"pointerover":var s=l.pointerId;return Fl.set(s,Gl(Fl.get(s)||null,e,t,a,n,l)),!0;case"gotpointercapture":return s=l.pointerId,ql.set(s,Gl(ql.get(s)||null,e,t,a,n,l)),!0}return!1}function fm(e){var t=dn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,Eu(e.priority,function(){um(a)});return}}else if(t===31){if(t=S(a),t!==null){e.blockedOn=t,Eu(e.priority,function(){um(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xo(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Xs=n,a.target.dispatchEvent(n),Xs=null}else return t=fn(a),t!==null&&om(t),e.blockedOn=a,!1;t.shift()}return!0}function mm(e,t,a){ms(e)&&a.delete(t)}function Rg(){$o=!1,Ma!==null&&ms(Ma)&&(Ma=null),Ua!==null&&ms(Ua)&&(Ua=null),Ba!==null&&ms(Ba)&&(Ba=null),Fl.forEach(mm),ql.forEach(mm)}function ps(e,t){e.blockedOn===t&&(e.blockedOn=null,$o||($o=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Rg)))}var hs=null;function pm(e){hs!==e&&(hs=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){hs===e&&(hs=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Zo(n||a)===null)continue;break}var s=fn(a);s!==null&&(e.splice(t,3),t-=3,Vr(s,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function $n(e){function t(x){return ps(x,e)}Ma!==null&&ps(Ma,e),Ua!==null&&ps(Ua,e),Ba!==null&&ps(Ba,e),Fl.forEach(t),ql.forEach(t);for(var a=0;a<La.length;a++){var n=La[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)fm(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],s=a[n+1],d=l[rt]||null;if(typeof s=="function")d||pm(a);else if(d){var m=null;if(s&&s.hasAttribute("formAction")){if(l=s,d=s[rt]||null)m=d.formAction;else if(Zo(l)!==null)continue}else m=d.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),pm(a)}}}function hm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return l=d})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Qo(e){this._internalRoot=e}gs.prototype.render=Qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=jt();sm(a,n,e,t,null,null)},gs.prototype.unmount=Qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sm(e.current,2,null,e,null,null),Ji(),t[cn]=null}};function gs(e){this._internalRoot=e}gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&fm(e)}};var gm=o.version;if(gm!=="19.2.0")throw Error(c(527,gm,"19.2.0"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var kg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{In=ys.inject(kg),ht=ys}catch{}}return Vl.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",l=Nd,s=jd,d=Cd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=lm(e,1,!1,null,null,a,n,null,l,s,d,hm),e[cn]=t.current,Do(e),new Qo(t)},Vl.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,l="",s=Nd,d=jd,m=Cd,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=lm(e,1,!0,t,a??null,n,l,x,s,d,m,hm),t.context=im(null),a=t.current,n=jt(),n=Bs(n),l=ja(n),l.callback=null,Ca(a,l,n),a=n,t.current.lanes=a,Pn(t,a),Yt(t),e[cn]=t.current,Do(e),new gs(t)},Vl.version="19.2.0",Vl}var Am;function Yg(){if(Am)return Io.exports;Am=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Io.exports=Gg(),Io.exports}var Vg=Yg();/**
 * react-router v7.9.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Tm="popstate";function Xg(i={}){function o(c,f){let{pathname:p,search:g,hash:S}=c.location;return su("",{pathname:p,search:g,hash:S},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(c,f){return typeof f=="string"?f:Ql(f)}return $g(o,u,null,i)}function $e(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Xt(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Zg(){return Math.random().toString(36).substring(2,10)}function wm(i,o){return{usr:i.state,key:i.key,idx:o}}function su(i,o,u=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?Jl(o):o,state:u,key:o&&o.key||c||Zg()}}function Ql({pathname:i="/",search:o="",hash:u=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function Jl(i){let o={};if(i){let u=i.indexOf("#");u>=0&&(o.hash=i.substring(u),i=i.substring(0,u));let c=i.indexOf("?");c>=0&&(o.search=i.substring(c),i=i.substring(0,c)),i&&(o.pathname=i)}return o}function $g(i,o,u,c={}){let{window:f=document.defaultView,v5Compat:p=!1}=c,g=f.history,S="POP",y=null,h=v();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function v(){return(g.state||{idx:null}).idx}function N(){S="POP";let T=v(),_=T==null?null:T-h;h=T,y&&y({action:S,location:A.location,delta:_})}function D(T,_){S="PUSH";let O=su(A.location,T,_);h=v()+1;let L=wm(O,h),Q=A.createHref(O);try{g.pushState(L,"",Q)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;f.location.assign(Q)}p&&y&&y({action:S,location:A.location,delta:1})}function q(T,_){S="REPLACE";let O=su(A.location,T,_);h=v();let L=wm(O,h),Q=A.createHref(O);g.replaceState(L,"",Q),p&&y&&y({action:S,location:A.location,delta:0})}function b(T){return Qg(T)}let A={get action(){return S},get location(){return i(f,g)},listen(T){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Tm,N),y=T,()=>{f.removeEventListener(Tm,N),y=null}},createHref(T){return o(f,T)},createURL:b,encodeLocation(T){let _=b(T);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:D,replace:q,go(T){return g.go(T)}};return A}function Qg(i,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),$e(u,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:Ql(i);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function qm(i,o,u="/"){return Kg(i,o,u,!1)}function Kg(i,o,u,c){let f=typeof o=="string"?Jl(o):o,p=ma(f.pathname||"/",u);if(p==null)return null;let g=Gm(i);Jg(g);let S=null;for(let y=0;S==null&&y<g.length;++y){let h=ry(p);S=iy(g[y],h,c)}return S}function Gm(i,o=[],u=[],c="",f=!1){let p=(g,S,y=f,h)=>{let v={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:S,route:g};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(c)&&y)return;$e(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length)}let N=fa([c,v.relativePath]),D=u.concat(v);g.children&&g.children.length>0&&($e(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Gm(g.children,o,D,N,y)),!(g.path==null&&!g.index)&&o.push({path:N,score:ny(N,g.index),routesMeta:D})};return i.forEach((g,S)=>{if(g.path===""||!g.path?.includes("?"))p(g,S);else for(let y of Ym(g.path))p(g,S,!0,y)}),o}function Ym(i){let o=i.split("/");if(o.length===0)return[];let[u,...c]=o,f=u.endsWith("?"),p=u.replace(/\?$/,"");if(c.length===0)return f?[p,""]:[p];let g=Ym(c.join("/")),S=[];return S.push(...g.map(y=>y===""?p:[p,y].join("/"))),f&&S.push(...g),S.map(y=>i.startsWith("/")&&y===""?"/":y)}function Jg(i){i.sort((o,u)=>o.score!==u.score?u.score-o.score:ly(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Ig=/^:[\w-]+$/,Wg=3,Pg=2,ey=1,ty=10,ay=-2,Dm=i=>i==="*";function ny(i,o){let u=i.split("/"),c=u.length;return u.some(Dm)&&(c+=ay),o&&(c+=Pg),u.filter(f=>!Dm(f)).reduce((f,p)=>f+(Ig.test(p)?Wg:p===""?ey:ty),c)}function ly(i,o){return i.length===o.length&&i.slice(0,-1).every((c,f)=>c===o[f])?i[i.length-1]-o[o.length-1]:0}function iy(i,o,u=!1){let{routesMeta:c}=i,f={},p="/",g=[];for(let S=0;S<c.length;++S){let y=c[S],h=S===c.length-1,v=p==="/"?o:o.slice(p.length)||"/",N=js({path:y.relativePath,caseSensitive:y.caseSensitive,end:h},v),D=y.route;if(!N&&h&&u&&!c[c.length-1].route.index&&(N=js({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},v)),!N)return null;Object.assign(f,N.params),g.push({params:f,pathname:fa([p,N.pathname]),pathnameBase:dy(fa([p,N.pathnameBase])),route:D}),N.pathnameBase!=="/"&&(p=fa([p,N.pathnameBase]))}return g}function js(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,c]=sy(i.path,i.caseSensitive,i.end),f=o.match(u);if(!f)return null;let p=f[0],g=p.replace(/(.)\/+$/,"$1"),S=f.slice(1);return{params:c.reduce((h,{paramName:v,isOptional:N},D)=>{if(v==="*"){let b=S[D]||"";g=p.slice(0,p.length-b.length).replace(/(.)\/+$/,"$1")}const q=S[D];return N&&!q?h[v]=void 0:h[v]=(q||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:g,pattern:i}}function sy(i,o=!1,u=!0){Xt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,S,y)=>(c.push({paramName:S,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(c.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),c]}function ry(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Xt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function ma(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=i.charAt(u);return c&&c!=="/"?null:i.slice(u)||"/"}function oy(i,o="/"){let{pathname:u,search:c="",hash:f=""}=typeof i=="string"?Jl(i):i;return{pathname:u?u.startsWith("/")?u:uy(u,o):o,search:fy(c),hash:my(f)}}function uy(i,o){let u=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function tu(i,o,u,c){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cy(i){return i.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Vm(i){let o=cy(i);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function Xm(i,o,u,c=!1){let f;typeof i=="string"?f=Jl(i):(f={...i},$e(!f.pathname||!f.pathname.includes("?"),tu("?","pathname","search",f)),$e(!f.pathname||!f.pathname.includes("#"),tu("#","pathname","hash",f)),$e(!f.search||!f.search.includes("#"),tu("#","search","hash",f)));let p=i===""||f.pathname==="",g=p?"/":f.pathname,S;if(g==null)S=u;else{let N=o.length-1;if(!c&&g.startsWith("..")){let D=g.split("/");for(;D[0]==="..";)D.shift(),N-=1;f.pathname=D.join("/")}S=N>=0?o[N]:"/"}let y=oy(f,S),h=g&&g!=="/"&&g.endsWith("/"),v=(p||g===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(h||v)&&(y.pathname+="/"),y}var fa=i=>i.join("/").replace(/\/\/+/g,"/"),dy=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),fy=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,my=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function py(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zm=["POST","PUT","PATCH","DELETE"];new Set(Zm);var hy=["GET",...Zm];new Set(hy);var Qn=E.createContext(null);Qn.displayName="DataRouter";var Es=E.createContext(null);Es.displayName="DataRouterState";E.createContext(!1);var $m=E.createContext({isTransitioning:!1});$m.displayName="ViewTransition";var gy=E.createContext(new Map);gy.displayName="Fetchers";var yy=E.createContext(null);yy.displayName="Await";var Zt=E.createContext(null);Zt.displayName="Navigation";var As=E.createContext(null);As.displayName="Location";var pa=E.createContext({outlet:null,matches:[],isDataRoute:!1});pa.displayName="Route";var ou=E.createContext(null);ou.displayName="RouteError";function vy(i,{relative:o}={}){$e(Il(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=E.useContext(Zt),{hash:f,pathname:p,search:g}=Wl(i,{relative:o}),S=p;return u!=="/"&&(S=p==="/"?u:fa([u,p])),c.createHref({pathname:S,search:g,hash:f})}function Il(){return E.useContext(As)!=null}function rn(){return $e(Il(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(As).location}var Qm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Km(i){E.useContext(Zt).static||E.useLayoutEffect(i)}function by(){let{isDataRoute:i}=E.useContext(pa);return i?ky():xy()}function xy(){$e(Il(),"useNavigate() may be used only in the context of a <Router> component.");let i=E.useContext(Qn),{basename:o,navigator:u}=E.useContext(Zt),{matches:c}=E.useContext(pa),{pathname:f}=rn(),p=JSON.stringify(Vm(c)),g=E.useRef(!1);return Km(()=>{g.current=!0}),E.useCallback((y,h={})=>{if(Xt(g.current,Qm),!g.current)return;if(typeof y=="number"){u.go(y);return}let v=Xm(y,JSON.parse(p),f,h.relative==="path");i==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:fa([o,v.pathname])),(h.replace?u.replace:u.push)(v,h.state,h)},[o,u,p,f,i])}E.createContext(null);function Wl(i,{relative:o}={}){let{matches:u}=E.useContext(pa),{pathname:c}=rn(),f=JSON.stringify(Vm(u));return E.useMemo(()=>Xm(i,JSON.parse(f),c,o==="path"),[i,f,c,o])}function Sy(i,o,u,c,f){$e(Il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=E.useContext(Zt),{matches:g}=E.useContext(pa),S=g[g.length-1],y=S?S.params:{},h=S?S.pathname:"/",v=S?S.pathnameBase:"/",N=S&&S.route;{let O=N&&N.path||"";Jm(h,!N||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let D=rn(),q;q=D;let b=q.pathname||"/",A=b;if(v!=="/"){let O=v.replace(/^\//,"").split("/");A="/"+b.replace(/^\//,"").split("/").slice(O.length).join("/")}let T=qm(i,{pathname:A});return Xt(N||T!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),Xt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Ay(T&&T.map(O=>Object.assign({},O,{params:Object.assign({},y,O.params),pathname:fa([v,p.encodeLocation?p.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?v:fa([v,p.encodeLocation?p.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),g,u,c,f)}function Ny(){let i=Ry(),o=py(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",i),g=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:p},"ErrorBoundary")," or"," ",E.createElement("code",{style:p},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},o),u?E.createElement("pre",{style:f},u):null,g)}var jy=E.createElement(Ny,null),Cy=class extends E.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){this.props.unstable_onError?this.props.unstable_onError(i,o):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?E.createElement(pa.Provider,{value:this.props.routeContext},E.createElement(ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ey({routeContext:i,match:o,children:u}){let c=E.useContext(Qn);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),E.createElement(pa.Provider,{value:i},u)}function Ay(i,o=[],u=null,c=null,f=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let p=i,g=u?.errors;if(g!=null){let h=p.findIndex(v=>v.route.id&&g?.[v.route.id]!==void 0);$e(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),p=p.slice(0,Math.min(p.length,h+1))}let S=!1,y=-1;if(u)for(let h=0;h<p.length;h++){let v=p[h];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=h),v.route.id){let{loaderData:N,errors:D}=u,q=v.route.loader&&!N.hasOwnProperty(v.route.id)&&(!D||D[v.route.id]===void 0);if(v.route.lazy||q){S=!0,y>=0?p=p.slice(0,y+1):p=[p[0]];break}}}return p.reduceRight((h,v,N)=>{let D,q=!1,b=null,A=null;u&&(D=g&&v.route.id?g[v.route.id]:void 0,b=v.route.errorElement||jy,S&&(y<0&&N===0?(Jm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,A=null):y===N&&(q=!0,A=v.route.hydrateFallbackElement||null)));let T=o.concat(p.slice(0,N+1)),_=()=>{let O;return D?O=b:q?O=A:v.route.Component?O=E.createElement(v.route.Component,null):v.route.element?O=v.route.element:O=h,E.createElement(Ey,{match:v,routeContext:{outlet:h,matches:T,isDataRoute:u!=null},children:O})};return u&&(v.route.ErrorBoundary||v.route.errorElement||N===0)?E.createElement(Cy,{location:u.location,revalidation:u.revalidation,component:b,error:D,children:_(),routeContext:{outlet:null,matches:T,isDataRoute:!0},unstable_onError:c}):_()},null)}function uu(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ty(i){let o=E.useContext(Qn);return $e(o,uu(i)),o}function wy(i){let o=E.useContext(Es);return $e(o,uu(i)),o}function Dy(i){let o=E.useContext(pa);return $e(o,uu(i)),o}function cu(i){let o=Dy(i),u=o.matches[o.matches.length-1];return $e(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function Oy(){return cu("useRouteId")}function Ry(){let i=E.useContext(ou),o=wy("useRouteError"),u=cu("useRouteError");return i!==void 0?i:o.errors?.[u]}function ky(){let{router:i}=Ty("useNavigate"),o=cu("useNavigate"),u=E.useRef(!1);return Km(()=>{u.current=!0}),E.useCallback(async(f,p={})=>{Xt(u.current,Qm),u.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:o,...p}))},[i,o])}var Om={};function Jm(i,o,u){!o&&!Om[i]&&(Om[i]=!0,Xt(!1,u))}E.memo(_y);function _y({routes:i,future:o,state:u,unstable_onError:c}){return Sy(i,void 0,u,c,o)}function zy({basename:i="/",children:o=null,location:u,navigationType:c="POP",navigator:f,static:p=!1}){$e(!Il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=i.replace(/^\/*/,"/"),S=E.useMemo(()=>({basename:g,navigator:f,static:p,future:{}}),[g,f,p]);typeof u=="string"&&(u=Jl(u));let{pathname:y="/",search:h="",hash:v="",state:N=null,key:D="default"}=u,q=E.useMemo(()=>{let b=ma(y,g);return b==null?null:{location:{pathname:b,search:h,hash:v,state:N,key:D},navigationType:c}},[g,y,h,v,N,D,c]);return Xt(q!=null,`<Router basename="${g}"> is not able to match the URL "${y}${h}${v}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:E.createElement(Zt.Provider,{value:S},E.createElement(As.Provider,{children:o,value:q}))}var Ss="get",Ns="application/x-www-form-urlencoded";function Ts(i){return i!=null&&typeof i.tagName=="string"}function My(i){return Ts(i)&&i.tagName.toLowerCase()==="button"}function Uy(i){return Ts(i)&&i.tagName.toLowerCase()==="form"}function By(i){return Ts(i)&&i.tagName.toLowerCase()==="input"}function Ly(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Hy(i,o){return i.button===0&&(!o||o==="_self")&&!Ly(i)}var vs=null;function Fy(){if(vs===null)try{new FormData(document.createElement("form"),0),vs=!1}catch{vs=!0}return vs}var qy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function au(i){return i!=null&&!qy.has(i)?(Xt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ns}"`),null):i}function Gy(i,o){let u,c,f,p,g;if(Uy(i)){let S=i.getAttribute("action");c=S?ma(S,o):null,u=i.getAttribute("method")||Ss,f=au(i.getAttribute("enctype"))||Ns,p=new FormData(i)}else if(My(i)||By(i)&&(i.type==="submit"||i.type==="image")){let S=i.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||S.getAttribute("action");if(c=y?ma(y,o):null,u=i.getAttribute("formmethod")||S.getAttribute("method")||Ss,f=au(i.getAttribute("formenctype"))||au(S.getAttribute("enctype"))||Ns,p=new FormData(S,i),!Fy()){let{name:h,type:v,value:N}=i;if(v==="image"){let D=h?`${h}.`:"";p.append(`${D}x`,"0"),p.append(`${D}y`,"0")}else h&&p.append(h,N)}}else{if(Ts(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ss,c=null,f=Ns,g=i}return p&&f==="text/plain"&&(g=p,p=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function du(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Yy(i,o,u){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${u}`:o&&ma(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function Vy(i,o){if(i.id in o)return o[i.id];try{let u=await import(i.module);return o[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xy(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Zy(i,o,u){let c=await Promise.all(i.map(async f=>{let p=o.routes[f.route.id];if(p){let g=await Vy(p,u);return g.links?g.links():[]}return[]}));return Jy(c.flat(1).filter(Xy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Rm(i,o,u,c,f,p){let g=(y,h)=>u[h]?y.route.id!==u[h].route.id:!0,S=(y,h)=>u[h].pathname!==y.pathname||u[h].route.path?.endsWith("*")&&u[h].params["*"]!==y.params["*"];return p==="assets"?o.filter((y,h)=>g(y,h)||S(y,h)):p==="data"?o.filter((y,h)=>{let v=c.routes[y.route.id];if(!v||!v.hasLoader)return!1;if(g(y,h)||S(y,h))return!0;if(y.route.shouldRevalidate){let N=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function $y(i,o,{includeHydrateFallback:u}={}){return Qy(i.map(c=>{let f=o.routes[c.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function Qy(i){return[...new Set(i)]}function Ky(i){let o={},u=Object.keys(i).sort();for(let c of u)o[c]=i[c];return o}function Jy(i,o){let u=new Set;return new Set(o),i.reduce((c,f)=>{let p=JSON.stringify(Ky(f));return u.has(p)||(u.add(p),c.push({key:p,link:f})),c},[])}function Im(){let i=E.useContext(Qn);return du(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Iy(){let i=E.useContext(Es);return du(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var fu=E.createContext(void 0);fu.displayName="FrameworkContext";function Wm(){let i=E.useContext(fu);return du(i,"You must render this element inside a <HydratedRouter> element"),i}function Wy(i,o){let u=E.useContext(fu),[c,f]=E.useState(!1),[p,g]=E.useState(!1),{onFocus:S,onBlur:y,onMouseEnter:h,onMouseLeave:v,onTouchStart:N}=o,D=E.useRef(null);E.useEffect(()=>{if(i==="render"&&g(!0),i==="viewport"){let A=_=>{_.forEach(O=>{g(O.isIntersecting)})},T=new IntersectionObserver(A,{threshold:.5});return D.current&&T.observe(D.current),()=>{T.disconnect()}}},[i]),E.useEffect(()=>{if(c){let A=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(A)}}},[c]);let q=()=>{f(!0)},b=()=>{f(!1),g(!1)};return u?i!=="intent"?[p,D,{}]:[p,D,{onFocus:Xl(S,q),onBlur:Xl(y,b),onMouseEnter:Xl(h,q),onMouseLeave:Xl(v,b),onTouchStart:Xl(N,q)}]:[!1,D,{}]}function Xl(i,o){return u=>{i&&i(u),u.defaultPrevented||o(u)}}function Py({page:i,...o}){let{router:u}=Im(),c=E.useMemo(()=>qm(u.routes,i,u.basename),[u.routes,i,u.basename]);return c?E.createElement(tv,{page:i,matches:c,...o}):null}function ev(i){let{manifest:o,routeModules:u}=Wm(),[c,f]=E.useState([]);return E.useEffect(()=>{let p=!1;return Zy(i,o,u).then(g=>{p||f(g)}),()=>{p=!0}},[i,o,u]),c}function tv({page:i,matches:o,...u}){let c=rn(),{manifest:f,routeModules:p}=Wm(),{basename:g}=Im(),{loaderData:S,matches:y}=Iy(),h=E.useMemo(()=>Rm(i,o,y,f,c,"data"),[i,o,y,f,c]),v=E.useMemo(()=>Rm(i,o,y,f,c,"assets"),[i,o,y,f,c]),N=E.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let b=new Set,A=!1;if(o.forEach(_=>{let O=f.routes[_.route.id];!O||!O.hasLoader||(!h.some(L=>L.route.id===_.route.id)&&_.route.id in S&&p[_.route.id]?.shouldRevalidate||O.hasClientLoader?A=!0:b.add(_.route.id))}),b.size===0)return[];let T=Yy(i,g,"data");return A&&b.size>0&&T.searchParams.set("_routes",o.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[T.pathname+T.search]},[g,S,c,f,h,o,i,p]),D=E.useMemo(()=>$y(v,f),[v,f]),q=ev(v);return E.createElement(E.Fragment,null,N.map(b=>E.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...u})),D.map(b=>E.createElement("link",{key:b,rel:"modulepreload",href:b,...u})),q.map(({key:b,link:A})=>E.createElement("link",{key:b,nonce:u.nonce,...A})))}function av(...i){return o=>{i.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var Pm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pm&&(window.__reactRouterVersion="7.9.5")}catch{}function nv({basename:i,children:o,window:u}){let c=E.useRef();c.current==null&&(c.current=Xg({window:u,v5Compat:!0}));let f=c.current,[p,g]=E.useState({action:f.action,location:f.location}),S=E.useCallback(y=>{E.startTransition(()=>g(y))},[g]);return E.useLayoutEffect(()=>f.listen(S),[f,S]),E.createElement(zy,{basename:i,children:o,location:p.location,navigationType:p.action,navigator:f})}var ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tp=E.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:f,reloadDocument:p,replace:g,state:S,target:y,to:h,preventScrollReset:v,viewTransition:N,...D},q){let{basename:b}=E.useContext(Zt),A=typeof h=="string"&&ep.test(h),T,_=!1;if(typeof h=="string"&&A&&(T=h,Pm))try{let ue=new URL(window.location.href),Ue=h.startsWith("//")?new URL(ue.protocol+h):new URL(h),Me=ma(Ue.pathname,b);Ue.origin===ue.origin&&Me!=null?h=Me+Ue.search+Ue.hash:_=!0}catch{Xt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=vy(h,{relative:f}),[L,Q,te]=Wy(c,D),fe=rv(h,{replace:g,state:S,target:y,preventScrollReset:v,relative:f,viewTransition:N});function I(ue){o&&o(ue),ue.defaultPrevented||fe(ue)}let ge=E.createElement("a",{...D,...te,href:T||O,onClick:_||p?o:I,ref:av(q,Q),target:y,"data-discover":!A&&u==="render"?"true":void 0});return L&&!A?E.createElement(E.Fragment,null,ge,E.createElement(Py,{page:O})):ge});tp.displayName="Link";var lv=E.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:f=!1,style:p,to:g,viewTransition:S,children:y,...h},v){let N=Wl(g,{relative:h.relative}),D=rn(),q=E.useContext(Es),{navigator:b,basename:A}=E.useContext(Zt),T=q!=null&&fv(N)&&S===!0,_=b.encodeLocation?b.encodeLocation(N).pathname:N.pathname,O=D.pathname,L=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;u||(O=O.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&A&&(L=ma(L,A)||L);const Q=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let te=O===_||!f&&O.startsWith(_)&&O.charAt(Q)==="/",fe=L!=null&&(L===_||!f&&L.startsWith(_)&&L.charAt(_.length)==="/"),I={isActive:te,isPending:fe,isTransitioning:T},ge=te?o:void 0,ue;typeof c=="function"?ue=c(I):ue=[c,te?"active":null,fe?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof p=="function"?p(I):p;return E.createElement(tp,{...h,"aria-current":ge,className:ue,ref:v,style:Ue,to:g,viewTransition:S},typeof y=="function"?y(I):y)});lv.displayName="NavLink";var iv=E.forwardRef(({discover:i="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:f,state:p,method:g=Ss,action:S,onSubmit:y,relative:h,preventScrollReset:v,viewTransition:N,...D},q)=>{let b=cv(),A=dv(S,{relative:h}),T=g.toLowerCase()==="get"?"get":"post",_=typeof S=="string"&&ep.test(S),O=L=>{if(y&&y(L),L.defaultPrevented)return;L.preventDefault();let Q=L.nativeEvent.submitter,te=Q?.getAttribute("formmethod")||g;b(Q||L.currentTarget,{fetcherKey:o,method:te,navigate:u,replace:f,state:p,relative:h,preventScrollReset:v,viewTransition:N})};return E.createElement("form",{ref:q,method:T,action:A,onSubmit:c?y:O,...D,"data-discover":!_&&i==="render"?"true":void 0})});iv.displayName="Form";function sv(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ap(i){let o=E.useContext(Qn);return $e(o,sv(i)),o}function rv(i,{target:o,replace:u,state:c,preventScrollReset:f,relative:p,viewTransition:g}={}){let S=by(),y=rn(),h=Wl(i,{relative:p});return E.useCallback(v=>{if(Hy(v,o)){v.preventDefault();let N=u!==void 0?u:Ql(y)===Ql(h);S(i,{replace:N,state:c,preventScrollReset:f,relative:p,viewTransition:g})}},[y,S,h,u,c,o,i,f,p,g])}var ov=0,uv=()=>`__${String(++ov)}__`;function cv(){let{router:i}=ap("useSubmit"),{basename:o}=E.useContext(Zt),u=Oy();return E.useCallback(async(c,f={})=>{let{action:p,method:g,encType:S,formData:y,body:h}=Gy(c,o);if(f.navigate===!1){let v=f.fetcherKey||uv();await i.fetch(v,u,f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:h,formMethod:f.method||g,formEncType:f.encType||S,flushSync:f.flushSync})}else await i.navigate(f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:h,formMethod:f.method||g,formEncType:f.encType||S,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,o,u])}function dv(i,{relative:o}={}){let{basename:u}=E.useContext(Zt),c=E.useContext(pa);$e(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),p={...Wl(i||".",{relative:o})},g=rn();if(i==null){p.search=g.search;let S=new URLSearchParams(p.search),y=S.getAll("index");if(y.some(v=>v==="")){S.delete("index"),y.filter(N=>N).forEach(N=>S.append("index",N));let v=S.toString();p.search=v?`?${v}`:""}}return(!i||i===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(p.pathname=p.pathname==="/"?u:fa([u,p.pathname])),Ql(p)}function fv(i,{relative:o}={}){let u=E.useContext($m);$e(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=ap("useViewTransitionState"),f=Wl(i,{relative:o});if(!u.isTransitioning)return!1;let p=ma(u.currentLocation.pathname,c)||u.currentLocation.pathname,g=ma(u.nextLocation.pathname,c)||u.nextLocation.pathname;return js(f.pathname,g)!=null||js(f.pathname,p)!=null}var mv=Fm();/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hv=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,u,c)=>c?c.toUpperCase():u.toLowerCase()),km=i=>{const o=hv(i);return o.charAt(0).toUpperCase()+o.slice(1)},np=(...i)=>i.filter((o,u,c)=>!!o&&o.trim()!==""&&c.indexOf(o)===u).join(" ").trim(),gv=i=>{for(const o in i)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=E.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:f="",children:p,iconNode:g,...S},y)=>E.createElement("svg",{ref:y,...yv,width:o,height:o,stroke:i,strokeWidth:c?Number(u)*24/Number(o):u,className:np("lucide",f),...!p&&!gv(S)&&{"aria-hidden":"true"},...S},[...g.map(([h,v])=>E.createElement(h,v)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=(i,o)=>{const u=E.forwardRef(({className:c,...f},p)=>E.createElement(vv,{ref:p,iconNode:o,className:np(`lucide-${pv(km(i))}`,`lucide-${i}`,c),...f}));return u.displayName=km(i),u};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],xv=on("chevron-down",bv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Nv=on("chevron-right",Sv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Pl=on("code-xml",jv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Ev=on("code",Cv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Tv=on("eye",Av);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Dv=on("menu",wv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_m=on("x",Ov),da=E.forwardRef(({label:i,error:o,helperText:u,icon:c,className:f="",...p},g)=>r.jsxs("div",{className:"ui-input-wrapper",children:[i&&r.jsx("label",{className:"ui-input-label",children:i}),r.jsxs("div",{className:"ui-input-container",children:[c&&r.jsx("span",{className:"ui-input-icon",children:c}),r.jsx("input",{ref:g,className:`ui-input ${c?"has-icon":""} ${o?"error":""} ${f}`,...p})]}),o&&r.jsx("span",{className:"ui-input-error",children:o}),u&&!o&&r.jsx("span",{className:"ui-input-helper",children:u})]}));da.displayName="Input";const oe=({children:i,variant:o="primary",size:u="md",loading:c=!1,icon:f,className:p="",...g})=>{const S=`ui-button ui-button-${o} ui-button-${u} ${c?"ui-button-loading":""} ${p}`;return r.jsxs("button",{className:S,disabled:c||g.disabled,...g,children:[f&&!c&&f,i]})},Kl=E.forwardRef(({label:i,options:o=[],className:u="",...c},f)=>r.jsxs("div",{className:"ui-select-wrapper",children:[i&&r.jsx("label",{className:"ui-select-label",children:i}),r.jsx("select",{ref:f,className:`ui-select ${u}`,...c,children:o.map((p,g)=>r.jsx("option",{value:p.value,children:p.label},g))})]}));Kl.displayName="Select";const sn=E.forwardRef(({label:i,className:o="",...u},c)=>r.jsxs("label",{className:"ui-checkbox-wrapper",children:[r.jsx("input",{ref:c,type:"checkbox",className:`ui-checkbox-input ${o}`,...u}),i&&r.jsx("span",{className:"ui-checkbox-label",children:i})]}));sn.displayName="Checkbox";const $l=E.forwardRef(({label:i,className:o="",...u},c)=>r.jsxs("label",{className:"ui-switch-wrapper",children:[r.jsx("input",{ref:c,type:"checkbox",className:`ui-switch-input ${o}`,...u}),i&&r.jsx("span",{className:"ui-switch-label",children:i})]}));$l.displayName="Switch";const $=({children:i,className:o="",...u})=>r.jsx("div",{className:`ui-card ${o}`,...u,children:i});$.Header=({children:i,className:o=""})=>r.jsx("div",{className:`ui-card-header ${o}`,children:i});$.Title=({children:i,className:o=""})=>r.jsx("h3",{className:`ui-card-title ${o}`,children:i});$.Subtitle=({children:i,className:o=""})=>r.jsx("p",{className:`ui-card-subtitle ${o}`,children:i});$.Content=({children:i,className:o=""})=>r.jsx("div",{className:`ui-card-content ${o}`,children:i});$.Footer=({children:i,className:o=""})=>r.jsx("div",{className:`ui-card-footer ${o}`,children:i});const Lt=({isOpen:i,onClose:o,children:u})=>(E.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[i]),i?mv.createPortal(r.jsx("div",{className:"ui-modal-overlay",onClick:o,children:r.jsx("div",{className:"ui-modal-content",onClick:c=>c.stopPropagation(),children:u})}),document.body):null);Lt.Header=({children:i,onClose:o})=>r.jsxs("div",{className:"ui-modal-header",children:[r.jsx("h2",{className:"ui-modal-title",children:i}),o&&r.jsx("button",{className:"ui-modal-close",onClick:o,children:"✕"})]});Lt.Body=({children:i})=>r.jsx("div",{className:"ui-modal-body",children:i});Lt.Footer=({children:i})=>r.jsx("div",{className:"ui-modal-footer",children:i});const nu=({children:i,content:o})=>r.jsxs("div",{className:"ui-tooltip-wrapper",children:[i,r.jsx("div",{className:"ui-tooltip-content",children:o})]});function Rv(){return r.jsx("div",{className:"coming-soon-page",children:r.jsx($,{className:"coming-soon-card",children:r.jsxs("div",{className:"coming-soon-content",children:[r.jsx("h1",{className:"coming-title",children:"🚧 Coming Soon 🚧"}),r.jsx("p",{className:"coming-subtitle",children:"Bài học này đang được xây dựng. Hãy quay lại sau nhé! 💻"}),r.jsx("div",{className:"coming-illustration",children:"⏳"}),r.jsx(oe,{variant:"primary",size:"lg",className:"coming-home-button",onClick:()=>window.location.href="/",children:"← Quay về trang chính"})]})})})}function lp(i){var o,u,c="";if(typeof i=="string"||typeof i=="number")c+=i;else if(typeof i=="object")if(Array.isArray(i)){var f=i.length;for(o=0;o<f;o++)i[o]&&(u=lp(i[o]))&&(c&&(c+=" "),c+=u)}else for(u in i)i[u]&&(c&&(c+=" "),c+=u);return c}function ip(){for(var i,o,u=0,c="",f=arguments.length;u<f;u++)(i=arguments[u])&&(o=lp(i))&&(c&&(c+=" "),c+=o);return c}var kv=Object.create,ws=Object.defineProperty,_v=Object.defineProperties,zv=Object.getOwnPropertyDescriptor,Mv=Object.getOwnPropertyDescriptors,sp=Object.getOwnPropertyNames,Cs=Object.getOwnPropertySymbols,Uv=Object.getPrototypeOf,mu=Object.prototype.hasOwnProperty,rp=Object.prototype.propertyIsEnumerable,zm=(i,o,u)=>o in i?ws(i,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[o]=u,Vt=(i,o)=>{for(var u in o||(o={}))mu.call(o,u)&&zm(i,u,o[u]);if(Cs)for(var u of Cs(o))rp.call(o,u)&&zm(i,u,o[u]);return i},Ds=(i,o)=>_v(i,Mv(o)),op=(i,o)=>{var u={};for(var c in i)mu.call(i,c)&&o.indexOf(c)<0&&(u[c]=i[c]);if(i!=null&&Cs)for(var c of Cs(i))o.indexOf(c)<0&&rp.call(i,c)&&(u[c]=i[c]);return u},Bv=(i,o)=>function(){return o||(0,i[sp(i)[0]])((o={exports:{}}).exports,o),o.exports},Lv=(i,o)=>{for(var u in o)ws(i,u,{get:o[u],enumerable:!0})},Hv=(i,o,u,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let f of sp(o))!mu.call(i,f)&&f!==u&&ws(i,f,{get:()=>o[f],enumerable:!(c=zv(o,f))||c.enumerable});return i},Fv=(i,o,u)=>(u=i!=null?kv(Uv(i)):{},Hv(!i||!i.__esModule?ws(u,"default",{value:i,enumerable:!0}):u,i)),qv=Bv({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(i,o){var u=(function(){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,f=0,p={},g={util:{encode:function b(A){return A instanceof S?new S(A.type,b(A.content),A.alias):Array.isArray(A)?A.map(b):A.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++f}),b.__id},clone:function b(A,T){T=T||{};var _,O;switch(g.util.type(A)){case"Object":if(O=g.util.objId(A),T[O])return T[O];_={},T[O]=_;for(var L in A)A.hasOwnProperty(L)&&(_[L]=b(A[L],T));return _;case"Array":return O=g.util.objId(A),T[O]?T[O]:(_=[],T[O]=_,A.forEach(function(Q,te){_[te]=b(Q,T)}),_);default:return A}},getLanguage:function(b){for(;b;){var A=c.exec(b.className);if(A)return A[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,A){b.className=b.className.replace(RegExp(c,"gi"),""),b.classList.add("language-"+A)},isActive:function(b,A,T){for(var _="no-"+A;b;){var O=b.classList;if(O.contains(A))return!0;if(O.contains(_))return!1;b=b.parentElement}return!!T}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(b,A){var T=g.util.clone(g.languages[b]);for(var _ in A)T[_]=A[_];return T},insertBefore:function(b,A,T,_){_=_||g.languages;var O=_[b],L={};for(var Q in O)if(O.hasOwnProperty(Q)){if(Q==A)for(var te in T)T.hasOwnProperty(te)&&(L[te]=T[te]);T.hasOwnProperty(Q)||(L[Q]=O[Q])}var fe=_[b];return _[b]=L,g.languages.DFS(g.languages,function(I,ge){ge===fe&&I!=b&&(this[I]=L)}),L},DFS:function b(A,T,_,O){O=O||{};var L=g.util.objId;for(var Q in A)if(A.hasOwnProperty(Q)){T.call(A,Q,A[Q],_||Q);var te=A[Q],fe=g.util.type(te);fe==="Object"&&!O[L(te)]?(O[L(te)]=!0,b(te,T,null,O)):fe==="Array"&&!O[L(te)]&&(O[L(te)]=!0,b(te,T,Q,O))}}},plugins:{},highlight:function(b,A,T){var _={code:b,grammar:A,language:T};if(g.hooks.run("before-tokenize",_),!_.grammar)throw new Error('The language "'+_.language+'" has no grammar.');return _.tokens=g.tokenize(_.code,_.grammar),g.hooks.run("after-tokenize",_),S.stringify(g.util.encode(_.tokens),_.language)},tokenize:function(b,A){var T=A.rest;if(T){for(var _ in T)A[_]=T[_];delete A.rest}var O=new v;return N(O,O.head,b),h(b,O,A,O.head,0),q(O)},hooks:{all:{},add:function(b,A){var T=g.hooks.all;T[b]=T[b]||[],T[b].push(A)},run:function(b,A){var T=g.hooks.all[b];if(!(!T||!T.length))for(var _=0,O;O=T[_++];)O(A)}},Token:S};function S(b,A,T,_){this.type=b,this.content=A,this.alias=T,this.length=(_||"").length|0}S.stringify=function b(A,T){if(typeof A=="string")return A;if(Array.isArray(A)){var _="";return A.forEach(function(fe){_+=b(fe,T)}),_}var O={type:A.type,content:b(A.content,T),tag:"span",classes:["token",A.type],attributes:{},language:T},L=A.alias;L&&(Array.isArray(L)?Array.prototype.push.apply(O.classes,L):O.classes.push(L)),g.hooks.run("wrap",O);var Q="";for(var te in O.attributes)Q+=" "+te+'="'+(O.attributes[te]||"").replace(/"/g,"&quot;")+'"';return"<"+O.tag+' class="'+O.classes.join(" ")+'"'+Q+">"+O.content+"</"+O.tag+">"};function y(b,A,T,_){b.lastIndex=A;var O=b.exec(T);if(O&&_&&O[1]){var L=O[1].length;O.index+=L,O[0]=O[0].slice(L)}return O}function h(b,A,T,_,O,L){for(var Q in T)if(!(!T.hasOwnProperty(Q)||!T[Q])){var te=T[Q];te=Array.isArray(te)?te:[te];for(var fe=0;fe<te.length;++fe){if(L&&L.cause==Q+","+fe)return;var I=te[fe],ge=I.inside,ue=!!I.lookbehind,Ue=!!I.greedy,Me=I.alias;if(Ue&&!I.pattern.global){var Oe=I.pattern.toString().match(/[imsuy]*$/)[0];I.pattern=RegExp(I.pattern.source,Oe+"g")}for(var Ht=I.pattern||I,De=_.next,Be=O;De!==A.tail&&!(L&&Be>=L.reach);Be+=De.value.length,De=De.next){var U=De.value;if(A.length>b.length)return;if(!(U instanceof S)){var X=1,P;if(Ue){if(P=y(Ht,Be,b,ue),!P||P.index>=b.length)break;var F=P.index,Ne=P.index+P[0].length,me=Be;for(me+=De.value.length;F>=me;)De=De.next,me+=De.value.length;if(me-=De.value.length,Be=me,De.value instanceof S)continue;for(var C=De;C!==A.tail&&(me<Ne||typeof C.value=="string");C=C.next)X++,me+=C.value.length;X--,U=b.slice(Be,me),P.index-=Be}else if(P=y(Ht,0,U,ue),!P)continue;var F=P.index,Z=P[0],K=U.slice(0,F),ne=U.slice(F+Z.length),se=Be+U.length;L&&se>L.reach&&(L.reach=se);var ye=De.prev;K&&(ye=N(A,ye,K),Be+=K.length),D(A,ye,X);var Ie=new S(Q,ge?g.tokenize(Z,ge):Z,Me,Z);if(De=N(A,ye,Ie),ne&&N(A,De,ne),X>1){var Re={cause:Q+","+fe,reach:se};h(b,A,T,De.prev,Be,Re),L&&Re.reach>L.reach&&(L.reach=Re.reach)}}}}}}function v(){var b={value:null,prev:null,next:null},A={value:null,prev:b,next:null};b.next=A,this.head=b,this.tail=A,this.length=0}function N(b,A,T){var _=A.next,O={value:T,prev:A,next:_};return A.next=O,_.prev=O,b.length++,O}function D(b,A,T){for(var _=A.next,O=0;O<T&&_!==b.tail;O++)_=_.next;A.next=_,_.prev=A,b.length-=O}function q(b){for(var A=[],T=b.head.next;T!==b.tail;)A.push(T.value),T=T.next;return A}return g})();o.exports=u,u.default=u}}),Y=Fv(qv());Y.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Y.languages.markup.tag.inside["attr-value"].inside.entity=Y.languages.markup.entity,Y.languages.markup.doctype.inside["internal-subset"].inside=Y.languages.markup,Y.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(Y.languages.markup.tag,"addInlined",{value:function(i,c){var u={},u=(u["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Y.languages[c]},u.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:u}}),c=(u["language-"+c]={pattern:/[\s\S]+/,inside:Y.languages[c]},{});c[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:u},Y.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(Y.languages.markup.tag,"addAttribute",{value:function(i,o){Y.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:Y.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Y.languages.html=Y.languages.markup,Y.languages.mathml=Y.languages.markup,Y.languages.svg=Y.languages.markup,Y.languages.xml=Y.languages.extend("markup",{}),Y.languages.ssml=Y.languages.xml,Y.languages.atom=Y.languages.xml,Y.languages.rss=Y.languages.xml,(function(i){var o={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},u=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,c="(?:[^\\\\-]|"+u.source+")",c=RegExp(c+"-"+c),f={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};i.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:c,inside:{escape:u,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":o,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:u}},"special-escape":o,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":f}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:u,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":f}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(Y),Y.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Y.languages.javascript=Y.languages.extend("clike",{"class-name":[Y.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Y.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Y.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Y.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Y.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Y.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Y.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Y.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Y.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Y.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Y.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Y.languages.markup&&(Y.languages.markup.tag.addInlined("script","javascript"),Y.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Y.languages.js=Y.languages.javascript,Y.languages.actionscript=Y.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),Y.languages.actionscript["class-name"].alias="function",delete Y.languages.actionscript.parameter,delete Y.languages.actionscript["literal-property"],Y.languages.markup&&Y.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:Y.languages.markup}}),(function(i){var o=/#(?!\{).+/,u={pattern:/#\{[^}]+\}/,alias:"variable"};i.languages.coffeescript=i.languages.extend("javascript",{comment:o,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:u}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),i.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:o,interpolation:u}}}),i.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:i.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:u}}]}),i.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete i.languages.coffeescript["template-string"],i.languages.coffee=i.languages.coffeescript})(Y),(function(i){var o=i.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(o,"addSupport",{value:function(u,c){(u=typeof u=="string"?[u]:u).forEach(function(f){var p=function(N){N.inside||(N.inside={}),N.inside.rest=c},g="doc-comment";if(S=i.languages[f]){var S,y=S[g];if((y=y||(S=i.languages.insertBefore(f,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[g])instanceof RegExp&&(y=S[g]={pattern:y}),Array.isArray(y))for(var h=0,v=y.length;h<v;h++)y[h]instanceof RegExp&&(y[h]={pattern:y[h]}),p(y[h]);else p(y)}})}}),o.addSupport(["java","javascript","php"],o)})(Y),(function(i){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,o=(i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css,i.languages.markup);o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(Y),(function(i){var o=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,o=(i.languages.css.selector={pattern:i.languages.css.selector.pattern,lookbehind:!0,inside:o={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+o.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[o,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},i.languages.css.atrule.inside["selector-function-argument"].inside=o,i.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),u={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};i.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:o,number:u,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:o,number:u})})(Y),(function(i){var o=/[*&][^\s[\]{},]+/,u=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,c="(?:"+u.source+"(?:[ 	]+"+o.source+")?|"+o.source+"(?:[ 	]+"+u.source+")?)",f=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),p=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function g(S,y){y=(y||"").replace(/m/g,"")+"m";var h=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return c}).replace(/<<value>>/g,function(){return S});return RegExp(h,y)}i.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return c})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return c}).replace(/<<key>>/g,function(){return"(?:"+f+"|"+p+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:g(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:g(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:g(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:g(p),lookbehind:!0,greedy:!0},number:{pattern:g(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:u,important:o,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},i.languages.yml=i.languages.yaml})(Y),(function(i){var o=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function u(h){return h=h.replace(/<inner>/g,function(){return o}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+h+")")}var c=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,f=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return c}),p=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,g=(i.languages.markdown=i.languages.extend("markup",{}),i.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:i.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+f+p+"(?:"+f+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+f+p+")(?:"+f+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(c),inside:i.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+f+")"+p+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+f+"$"),inside:{"table-header":{pattern:RegExp(c),alias:"important",inside:i.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:u(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:u(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:u(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:u(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(h){["url","bold","italic","strike","code-snippet"].forEach(function(v){h!==v&&(i.languages.markdown[h].inside.content.inside[v]=i.languages.markdown[v])})}),i.hooks.add("after-tokenize",function(h){h.language!=="markdown"&&h.language!=="md"||(function v(N){if(N&&typeof N!="string")for(var D=0,q=N.length;D<q;D++){var b,A=N[D];A.type!=="code"?v(A.content):(b=A.content[1],A=A.content[3],b&&A&&b.type==="code-language"&&A.type==="code-block"&&typeof b.content=="string"&&(b=b.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),b="language-"+(b=(/[a-z][\w-]*/i.exec(b)||[""])[0].toLowerCase()),A.alias?typeof A.alias=="string"?A.alias=[A.alias,b]:A.alias.push(b):A.alias=[b]))}})(h.tokens)}),i.hooks.add("wrap",function(h){if(h.type==="code-block"){for(var v="",N=0,D=h.classes.length;N<D;N++){var q=h.classes[N],q=/language-(.+)/.exec(q);if(q){v=q[1];break}}var b,A=i.languages[v];A?h.content=i.highlight((function(T){return T=T.replace(g,""),T=T.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(_,O){var L;return(O=O.toLowerCase())[0]==="#"?(L=O[1]==="x"?parseInt(O.slice(2),16):Number(O.slice(1)),y(L)):S[O]||_})})(h.content),A,v):v&&v!=="none"&&i.plugins.autoloader&&(b="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),h.attributes.id=b,i.plugins.autoloader.loadLanguages(v,function(){var T=document.getElementById(b);T&&(T.innerHTML=i.highlight(T.textContent,i.languages[v],v))}))}}),RegExp(i.languages.markup.tag.pattern.source,"gi")),S={amp:"&",lt:"<",gt:">",quot:'"'},y=String.fromCodePoint||String.fromCharCode;i.languages.md=i.languages.markdown})(Y),Y.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Y.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},Y.hooks.add("after-tokenize",function(i){if(i.language==="graphql")for(var o=i.tokens.filter(function(b){return typeof b!="string"&&b.type!=="comment"&&b.type!=="scalar"}),u=0;u<o.length;){var c=o[u++];if(c.type==="keyword"&&c.content==="mutation"){var f=[];if(N(["definition-mutation","punctuation"])&&v(1).content==="("){u+=2;var p=D(/^\($/,/^\)$/);if(p===-1)continue;for(;u<p;u++){var g=v(0);g.type==="variable"&&(q(g,"variable-input"),f.push(g.content))}u=p+1}if(N(["punctuation","property-query"])&&v(0).content==="{"&&(u++,q(v(0),"property-mutation"),0<f.length)){var S=D(/^\{$/,/^\}$/);if(S!==-1)for(var y=u;y<S;y++){var h=o[y];h.type==="variable"&&0<=f.indexOf(h.content)&&q(h,"variable-input")}}}}function v(b){return o[u+b]}function N(b,A){A=A||0;for(var T=0;T<b.length;T++){var _=v(T+A);if(!_||_.type!==b[T])return}return 1}function D(b,A){for(var T=1,_=u;_<o.length;_++){var O=o[_],L=O.content;if(O.type==="punctuation"&&typeof L=="string"){if(b.test(L))T++;else if(A.test(L)&&--T===0)return _}}return-1}function q(b,A){var T=b.alias;T?Array.isArray(T)||(b.alias=T=[T]):b.alias=T=[],T.push(A)}}),Y.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},(function(i){var o=i.languages.javascript["template-string"],u=o.pattern.source,c=o.inside.interpolation,f=c.inside["interpolation-punctuation"],p=c.pattern.source;function g(N,D){if(i.languages[N])return{pattern:RegExp("((?:"+D+")\\s*)"+u),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:N}}}}function S(N,D,q){return N={code:N,grammar:D,language:q},i.hooks.run("before-tokenize",N),N.tokens=i.tokenize(N.code,N.grammar),i.hooks.run("after-tokenize",N),N.tokens}function y(N,D,q){var T=i.tokenize(N,{interpolation:{pattern:RegExp(p),lookbehind:!0}}),b=0,A={},T=S(T.map(function(O){if(typeof O=="string")return O;for(var L,Q,O=O.content;N.indexOf((Q=b++,L="___"+q.toUpperCase()+"_"+Q+"___"))!==-1;);return A[L]=O,L}).join(""),D,q),_=Object.keys(A);return b=0,(function O(L){for(var Q=0;Q<L.length;Q++){if(b>=_.length)return;var te,fe,I,ge,ue,Ue,Me,Oe=L[Q];typeof Oe=="string"||typeof Oe.content=="string"?(te=_[b],(Me=(Ue=typeof Oe=="string"?Oe:Oe.content).indexOf(te))!==-1&&(++b,fe=Ue.substring(0,Me),ue=A[te],I=void 0,(ge={})["interpolation-punctuation"]=f,(ge=i.tokenize(ue,ge)).length===3&&((I=[1,1]).push.apply(I,S(ge[1],i.languages.javascript,"javascript")),ge.splice.apply(ge,I)),I=new i.Token("interpolation",ge,c.alias,ue),ge=Ue.substring(Me+te.length),ue=[],fe&&ue.push(fe),ue.push(I),ge&&(O(Ue=[ge]),ue.push.apply(ue,Ue)),typeof Oe=="string"?(L.splice.apply(L,[Q,1].concat(ue)),Q+=ue.length-1):Oe.content=ue)):(Me=Oe.content,Array.isArray(Me)?O(Me):O([Me]))}})(T),new i.Token(q,T,"language-"+q,N)}i.languages.javascript["template-string"]=[g("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),g("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),g("svg",/\bsvg/.source),g("markdown",/\b(?:markdown|md)/.source),g("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),g("sql",/\bsql/.source),o].filter(Boolean);var h={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function v(N){return typeof N=="string"?N:Array.isArray(N)?N.map(v).join(""):v(N.content)}i.hooks.add("after-tokenize",function(N){N.language in h&&(function D(q){for(var b=0,A=q.length;b<A;b++){var T,_,O,L=q[b];typeof L!="string"&&(T=L.content,Array.isArray(T)?L.type==="template-string"?(L=T[1],T.length===3&&typeof L!="string"&&L.type==="embedded-code"&&(_=v(L),L=L.alias,L=Array.isArray(L)?L[0]:L,O=i.languages[L])&&(T[1]=y(_,O,L))):D(T):typeof T!="string"&&D([T]))}})(N.tokens)})})(Y),(function(i){i.languages.typescript=i.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),i.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete i.languages.typescript.parameter,delete i.languages.typescript["literal-property"];var o=i.languages.extend("typescript",{});delete o["class-name"],i.languages.typescript["class-name"].inside=o,i.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o}}}}),i.languages.ts=i.languages.typescript})(Y),(function(i){var o=i.languages.javascript,u=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,c="(@(?:arg|argument|param|property)\\s+(?:"+u+"\\s+)?)";i.languages.jsdoc=i.languages.extend("javadoclike",{parameter:{pattern:RegExp(c+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),i.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(c+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:o,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return u})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+u),lookbehind:!0,inside:{string:o.string,number:o.number,boolean:o.boolean,keyword:i.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:o,alias:"language-javascript"}}}}),i.languages.javadoclike.addSupport("javascript",i.languages.jsdoc)})(Y),(function(i){i.languages.flow=i.languages.extend("javascript",{}),i.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),i.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete i.languages.flow.parameter,i.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(i.languages.flow.keyword)||(i.languages.flow.keyword=[i.languages.flow.keyword]),i.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})})(Y),Y.languages.n4js=Y.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),Y.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),Y.languages.n4jsd=Y.languages.n4js,(function(i){function o(g,S){return RegExp(g.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),S)}i.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+i.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),i.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+i.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),i.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),i.languages.insertBefore("javascript","keyword",{imports:{pattern:o(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:i.languages.javascript},exports:{pattern:o(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:i.languages.javascript}}),i.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),i.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),i.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:o(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var u=["function","function-variable","method","method-variable","property-access"],c=0;c<u.length;c++){var p=u[c],f=i.languages.javascript[p],p=(f=i.util.type(f)==="RegExp"?i.languages.javascript[p]={pattern:f}:f).inside||{};(f.inside=p)["maybe-class-name"]=/^[A-Z][\s\S]*/}})(Y),(function(i){var o=i.util.clone(i.languages.javascript),u=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,c=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,f=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function p(y,h){return y=y.replace(/<S>/g,function(){return u}).replace(/<BRACES>/g,function(){return c}).replace(/<SPREAD>/g,function(){return f}),RegExp(y,h)}f=p(f).source,i.languages.jsx=i.languages.extend("markup",o),i.languages.jsx.tag.pattern=p(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),i.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,i.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,i.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,i.languages.jsx.tag.inside.comment=o.comment,i.languages.insertBefore("inside","attr-name",{spread:{pattern:p(/<SPREAD>/.source),inside:i.languages.jsx}},i.languages.jsx.tag),i.languages.insertBefore("inside","special-attr",{script:{pattern:p(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:i.languages.jsx}}},i.languages.jsx.tag);function g(y){for(var h=[],v=0;v<y.length;v++){var N=y[v],D=!1;typeof N!="string"&&(N.type==="tag"&&N.content[0]&&N.content[0].type==="tag"?N.content[0].content[0].content==="</"?0<h.length&&h[h.length-1].tagName===S(N.content[0].content[1])&&h.pop():N.content[N.content.length-1].content!=="/>"&&h.push({tagName:S(N.content[0].content[1]),openedBraces:0}):0<h.length&&N.type==="punctuation"&&N.content==="{"?h[h.length-1].openedBraces++:0<h.length&&0<h[h.length-1].openedBraces&&N.type==="punctuation"&&N.content==="}"?h[h.length-1].openedBraces--:D=!0),(D||typeof N=="string")&&0<h.length&&h[h.length-1].openedBraces===0&&(D=S(N),v<y.length-1&&(typeof y[v+1]=="string"||y[v+1].type==="plain-text")&&(D+=S(y[v+1]),y.splice(v+1,1)),0<v&&(typeof y[v-1]=="string"||y[v-1].type==="plain-text")&&(D=S(y[v-1])+D,y.splice(v-1,1),v--),y[v]=new i.Token("plain-text",D,null,D)),N.content&&typeof N.content!="string"&&g(N.content)}}var S=function(y){return y?typeof y=="string"?y:typeof y.content=="string"?y.content:y.content.map(S).join(""):""};i.hooks.add("after-tokenize",function(y){y.language!=="jsx"&&y.language!=="tsx"||g(y.tokens)})})(Y),(function(i){var o=i.util.clone(i.languages.typescript),o=(i.languages.tsx=i.languages.extend("jsx",o),delete i.languages.tsx.parameter,delete i.languages.tsx["literal-property"],i.languages.tsx.tag);o.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+o.pattern.source+")",o.pattern.flags),o.lookbehind=!0})(Y),Y.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},Y.languages.swift["string-literal"].forEach(function(i){i.inside.interpolation.inside=Y.languages.swift}),(function(i){i.languages.kotlin=i.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete i.languages.kotlin["class-name"];var o={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:i.languages.kotlin}};i.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:o},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:o},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete i.languages.kotlin.string,i.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),i.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),i.languages.kt=i.languages.kotlin,i.languages.kts=i.languages.kotlin})(Y),Y.languages.c=Y.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Y.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Y.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Y.languages.c.string],char:Y.languages.c.char,comment:Y.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Y.languages.c}}}}),Y.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Y.languages.c.boolean,Y.languages.objectivec=Y.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete Y.languages.objectivec["class-name"],Y.languages.objc=Y.languages.objectivec,Y.languages.reason=Y.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),Y.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete Y.languages.reason.function,(function(i){for(var o=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,u=0;u<2;u++)o=o.replace(/<self>/g,function(){return o});o=o.replace(/<self>/g,function(){return/[^\s\S]/.source}),i.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+o),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},i.languages.rust["closure-params"].inside.rest=i.languages.rust,i.languages.rust.attribute.inside.string=i.languages.rust.string})(Y),Y.languages.go=Y.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Y.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Y.languages.go["class-name"],(function(i){var o=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,u=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return o.source});i.languages.cpp=i.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return o.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:o,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),i.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return u})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),i.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i.languages.cpp}}}}),i.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),i.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:i.languages.extend("cpp",{})}}),i.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},i.languages.cpp["base-clause"])})(Y),Y.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Y.languages.python["string-interpolation"].inside.interpolation.inside.rest=Y.languages.python,Y.languages.py=Y.languages.python,Y.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Y.languages.webmanifest=Y.languages.json;var up={};Lv(up,{dracula:()=>Yv,duotoneDark:()=>Xv,duotoneLight:()=>$v,github:()=>Kv,gruvboxMaterialDark:()=>Cb,gruvboxMaterialLight:()=>Ab,jettwaveDark:()=>gb,jettwaveLight:()=>vb,nightOwl:()=>Iv,nightOwlLight:()=>Pv,oceanicNext:()=>tb,okaidia:()=>nb,oneDark:()=>xb,oneLight:()=>Nb,palenight:()=>ib,shadesOfPurple:()=>rb,synthwave84:()=>ub,ultramin:()=>db,vsDark:()=>cp,vsLight:()=>pb});var Gv={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},Yv=Gv,Vv={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Xv=Vv,Zv={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},$v=Zv,Qv={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},Kv=Qv,Jv={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},Iv=Jv,Wv={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},Pv=Wv,Ct={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},eb={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:Ct.keyword}},{types:["attr-value"],style:{color:Ct.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:Ct.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:Ct.primitive}},{types:["boolean"],style:{color:Ct.boolean}},{types:["tag"],style:{color:Ct.tag}},{types:["string"],style:{color:Ct.string}},{types:["punctuation"],style:{color:Ct.string}},{types:["selector","char","builtin","inserted"],style:{color:Ct.char}},{types:["function"],style:{color:Ct.function}},{types:["operator","entity","url","variable"],style:{color:Ct.variable}},{types:["keyword"],style:{color:Ct.keyword}},{types:["atrule","class-name"],style:{color:Ct.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},tb=eb,ab={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},nb=ab,lb={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ib=lb,sb={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},rb=sb,ob={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},ub=ob,cb={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},db=cb,fb={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},cp=fb,mb={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},pb=mb,hb={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},gb=hb,yb={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},vb=yb,bb={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},xb=bb,Sb={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},Nb=Sb,jb={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},Cb=jb,Eb={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},Ab=Eb,Tb=i=>E.useCallback(o=>{var u=o,{className:c,style:f,line:p}=u,g=op(u,["className","style","line"]);const S=Ds(Vt({},g),{className:ip("token-line",c)});return typeof i=="object"&&"plain"in i&&(S.style=i.plain),typeof f=="object"&&(S.style=Vt(Vt({},S.style||{}),f)),S},[i]),wb=i=>{const o=E.useCallback(({types:u,empty:c})=>{if(i!=null){{if(u.length===1&&u[0]==="plain")return c!=null?{display:"inline-block"}:void 0;if(u.length===1&&c!=null)return i[u[0]]}return Object.assign(c!=null?{display:"inline-block"}:{},...u.map(f=>i[f]))}},[i]);return E.useCallback(u=>{var c=u,{token:f,className:p,style:g}=c,S=op(c,["token","className","style"]);const y=Ds(Vt({},S),{className:ip("token",...f.types,p),children:f.content,style:o(f)});return g!=null&&(y.style=Vt(Vt({},y.style||{}),g)),y},[o])},Db=/\r\n|\r|\n/,Mm=i=>{i.length===0?i.push({types:["plain"],content:`
`,empty:!0}):i.length===1&&i[0].content===""&&(i[0].content=`
`,i[0].empty=!0)},Um=(i,o)=>{const u=i.length;return u>0&&i[u-1]===o?i:i.concat(o)},Ob=i=>{const o=[[]],u=[i],c=[0],f=[i.length];let p=0,g=0,S=[];const y=[S];for(;g>-1;){for(;(p=c[g]++)<f[g];){let h,v=o[g];const D=u[g][p];if(typeof D=="string"?(v=g>0?v:["plain"],h=D):(v=Um(v,D.type),D.alias&&(v=Um(v,D.alias)),h=D.content),typeof h!="string"){g++,o.push(v),u.push(h),c.push(0),f.push(h.length);continue}const q=h.split(Db),b=q.length;S.push({types:v,content:q[0]});for(let A=1;A<b;A++)Mm(S),y.push(S=[]),S.push({types:v,content:q[A]})}g--,o.pop(),u.pop(),c.pop(),f.pop()}return Mm(S),y},Bm=Ob,Rb=({prism:i,code:o,grammar:u,language:c})=>E.useMemo(()=>{if(u==null)return Bm([o]);const f={code:o,grammar:u,language:c,tokens:[]};return i.hooks.run("before-tokenize",f),f.tokens=i.tokenize(o,u),i.hooks.run("after-tokenize",f),Bm(f.tokens)},[o,u,c,i]),kb=(i,o)=>{const{plain:u}=i,c=i.styles.reduce((f,p)=>{const{languages:g,style:S}=p;return g&&!g.includes(o)||p.types.forEach(y=>{const h=Vt(Vt({},f[y]),S);f[y]=h}),f},{});return c.root=u,c.plain=Ds(Vt({},u),{backgroundColor:void 0}),c},_b=kb,zb=({children:i,language:o,code:u,theme:c,prism:f})=>{const p=o.toLowerCase(),g=_b(c,p),S=Tb(g),y=wb(g),h=f.languages[p],v=Rb({prism:f,language:p,code:u,grammar:h});return i({tokens:v,className:`prism-code language-${p}`,style:g!=null?g.root:{},getLineProps:S,getTokenProps:y})},Mb=i=>E.createElement(zb,Ds(Vt({},i),{prism:i.prism||Y,theme:i.theme||cp,code:i.code,language:i.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const V=({children:i})=>{const[o,u]=E.useState(!1),[c,f]=E.useState("demo"),p=i.find(h=>h.type===V.Header),g=i.find(h=>h.type===V.Description),S=i.find(h=>h.type===V.Demo),y=i.find(h=>h.type===V.Code);return r.jsxs("div",{className:"exercise-card",children:[r.jsxs("div",{className:"exercise-header",onClick:()=>u(!o),children:[r.jsx("div",{className:"exercise-header-left",children:p}),r.jsx("div",{className:"expand-icon",children:o?r.jsx(xv,{size:20}):r.jsx(Nv,{size:20})})]}),o&&r.jsxs("div",{className:"solution-container",children:[r.jsx("div",{className:"exercise-description",children:g}),r.jsxs("div",{className:"tabs-container",children:[r.jsxs("button",{className:`tab ${c==="demo"?"tab-active":""}`,onClick:()=>f("demo"),children:[r.jsx(Tv,{size:16}),r.jsx("span",{children:"Demo"})]}),r.jsxs("button",{className:`tab ${c==="code"?"tab-active":""}`,onClick:()=>f("code"),children:[r.jsx(Ev,{size:16}),r.jsx("span",{children:"Code"})]})]}),r.jsx("div",{className:"tab-content",children:c==="demo"?r.jsx("div",{className:"demo-slot",children:S}):r.jsxs("div",{className:"code-container",children:[r.jsx("div",{className:"code-header",children:r.jsx("span",{className:"code-lang",children:"jsx"})}),r.jsx(Mb,{theme:up.nightOwl,code:y?.props?.children||"",language:"jsx",children:({className:h,style:v,tokens:N,getLineProps:D,getTokenProps:q})=>r.jsx("pre",{className:h,style:{...v,overflowX:"auto",borderRadius:8},children:N.map((b,A)=>r.jsx("div",{...D({line:b,key:A}),children:b.map((T,_)=>r.jsx("span",{...q({token:T,key:_})},_))},A))})})]})})]})]})};V.Header=({order:i,title:o})=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"exercise-number",children:i??"#"}),r.jsx("h3",{className:"exercise-title",children:o})]});V.Description=({children:i})=>r.jsx("pre",{className:"exercise-description-block",children:r.jsx("code",{children:i})});V.Demo=({children:i})=>r.jsx(r.Fragment,{children:i});V.Code=({children:i})=>r.jsx(r.Fragment,{children:i});const Ub={name:"Wireless Headphones",price:99.99,currency:"USD",inStock:!0,rating:4.5,reviews:128,discount:20,image:"https://placehold.co/600x400?text=Headphones"};function Bb({product:i=Ub}){const o={true:"in",false:"out"},u=i.price*(1-i.discount/100),c=Math.round(i.rating);return r.jsxs($,{className:"product-card-modern",children:[r.jsxs("div",{className:"product-image-wrapper",children:[r.jsx("img",{src:i.image,alt:i.name,className:"product-image"}),r.jsx("div",{className:"product-image-overlay"}),i.discount>0&&r.jsxs("div",{className:"discount-badge-premium",children:["−",i.discount,"%"]}),r.jsx("div",{className:`stock-dot ${i.inStock?"":"out"}`})]}),r.jsxs($.Content,{style:{padding:"24px"},children:[r.jsx("h3",{className:"product-name-gradient",children:i.name}),r.jsxs("div",{className:"product-price-wrapper",children:[r.jsxs("span",{className:"price-discounted",children:[i.currency," ",u.toFixed(2)]}),i.discount>0&&r.jsxs("span",{className:"price-original",children:[i.currency," ",i.price.toFixed(2)]})]}),r.jsxs("div",{className:"product-rating-modern",children:[r.jsx("div",{className:"rating-stars",children:[...Array(5)].map((f,p)=>r.jsx("span",{className:p<c?"filled":"empty",children:"★"},p))}),r.jsx("span",{className:"rating-value",children:i.rating}),r.jsxs("span",{className:"reviews-count",children:["• ",i.reviews," đánh giá"]})]}),r.jsxs("div",{className:`stock-pill ${o[i.inStock]}`,children:[r.jsx("span",{className:"stock-pill-dot"}),i.inStock?"In Stock":"Out of Stock"]}),r.jsx(oe,{variant:"primary",size:"lg",className:"product-cta-button",disabled:!i.inStock,children:i.inStock?"Thêm vào giỏ hàng":"Hết hàng"})]})]})}const Lb=[{name:"Wireless Headphones",price:99.99,currency:"USD",inStock:!0,rating:4.5,reviews:128,discount:20,image:"https://placehold.co/600x400?text=Headphones"},{name:"Bluetooth Speaker",price:59.99,currency:"USD",inStock:!0,rating:4,reviews:50,discount:0,image:"https://placehold.co/600x400?text=Speaker"},{name:"Noise Cancelling Earbuds",price:129.99,currency:"USD",inStock:!1,rating:5,reviews:200,discount:15,image:"https://placehold.co/600x400?text=Earbuds"},{name:"Smart Watch",price:199.99,currency:"USD",inStock:!1,rating:3.5,reviews:80,discount:0,image:"https://placehold.co/600x400?text=SmartWatch"},{name:"Budget Headphones",price:29.99,currency:"USD",inStock:!0,rating:2,reviews:5,discount:10,image:"https://placehold.co/600x400?text=Budget+Headphones"},{name:"New Release Earphones",price:49.99,currency:"USD",inStock:!0,rating:0,reviews:0,discount:0,image:"https://placehold.co/600x400?text=Earphones"}];function Hb(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:1,title:"Product Card Component"}),r.jsx(V.Description,{children:`
Tạo component hiển thị thông tin sản phẩm:
---
function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20, // percent
    image: "https://via.placeholder.com/200"
  };

  // TODO: 
  // 1. Hiển thị ảnh sản phẩm
  // 2. Hiển thị tên và giá (tính giá sau discount)
  // 3. Hiển thị rating và số reviews
  // 4. Hiển thị badge "In Stock" hoặc "Out of Stock"
  // 5. Hiển thị % discount nếu có
  
  return (
    <div className="product-card">
      {/* Your code here */}
    </div>
  );
}
---
Gợi ý:
- Giá sau giảm = price * (1 - discount/100)
- Format giá: toFixed(2)
- Dùng emoji cho rating: ⭐
`}),r.jsx(V.Demo,{children:r.jsx("div",{className:"grid grid-cols-3",children:Lb.map(i=>r.jsx("div",{className:"grid-item",children:r.jsx(Bb,{product:i})},i.id))})}),r.jsx(V.Code,{children:`
import { Button, Card } from "@ui";
function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20,
    image: "https://placehold.co/600x400?text=Headphones",
  };

  const stockStatus = {
    true: "in",
    false: "out",
  };

  const discountedPrice = product.price * (1 - product.discount / 100);
  const roundedRating = Math.round(product.rating);

  return (
    <Card className="product-card-modern">
      {/* Image + Badges */}
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-image-overlay" />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="discount-badge-premium">−{product.discount}%</div>
        )}

        {/* Stock Dot */}
        <div className={\`stock-dot \${product.inStock ? "" : "out"}\`} />
      </div>

      <Card.Content style={{ padding: "24px" }}>
        {/* Name */}
        <h3 className="product-name-gradient">{product.name}</h3>

        {/* Price */}
        <div className="product-price-wrapper">
          <span className="price-discounted">
            {product.currency} {discountedPrice.toFixed(2)}
          </span>
          {product.discount > 0 && (
            <span className="price-original">
              {product.currency} {product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="product-rating-modern">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < roundedRating ? "filled" : "empty"}>
                ★
              </span>
            ))}
          </div>
          <span className="rating-value">{product.rating}</span>
          <span className="reviews-count">• {product.reviews} đánh giá</span>
        </div>

        {/* Stock Status */}
        <div className={\`stock-pill \${stockStatus[product.inStock]}\`}>
          <span className="stock-pill-dot" />
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>

        {/* CTA Button */}
        <Button
          variant="primary"
          size="lg"
          className="product-cta-button"
          disabled={!product.inStock}
        >
          {product.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
        </Button>
      </Card.Content>
    </Card>
  );
}
`})]})}const Fb={city:"Hanoi",temperature:28,condition:"Sunny",humidity:65,wind:12};function qb({weather:i=Fb}){const u={Sunny:{icon:"☀️",bgClass:"bg-sunny"},Rainy:{icon:"🌧️",bgClass:"bg-rainy"},Cloudy:{icon:"☁️",bgClass:"bg-cloudy"}}[i.condition];return r.jsxs($,{className:`weather-widget-modern ${u.bgClass}`,children:[r.jsx("h2",{className:"weather-city",children:i.city}),r.jsx("div",{className:"weather-icon-big",children:u.icon}),r.jsxs("div",{className:"weather-temperature",children:[i.temperature,"°C"]}),r.jsxs("div",{className:"weather-details",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Humidity"}),r.jsxs("span",{className:"detail-value",children:[i.humidity,"%"]})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Wind"}),r.jsxs("span",{className:"detail-value",children:[i.wind," km/h"]})]})]})]})}const Gb=[{city:"Hanoi",temperature:28,condition:"Sunny",humidity:65,wind:12},{city:"Ho Chi Minh City",temperature:32,condition:"Cloudy",humidity:70,wind:8},{city:"Da Nang",temperature:30,condition:"Rainy",humidity:80,wind:15}];function Yb(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:2,title:"Weather Widget"}),r.jsx(V.Description,{children:`
function WeatherWidget() {
  const weather = {
    city: "Hanoi",
    temperature: 28,
    condition: "Sunny", // "Sunny", "Rainy", "Cloudy"
    humidity: 65,
    wind: 12 // km/h
  };

  // TODO:
  // 1. Hiển thị icon dựa vào condition (☀️ Sunny, 🌧️ Rainy, ☁️ Cloudy)
  // 2. Hiển thị nhiệt độ với unit °C
  // 3. Hiển thị thành phố
  // 4. Hiển thị humidity và wind speed
  // 5. Background color khác nhau cho mỗi condition
  
  return (
    <div className="weather-widget">
      {/* Your code here */}
    </div>
  );
}

`}),r.jsx(V.Demo,{children:r.jsx("div",{className:"grid grid-cols-3",children:Gb.map(i=>r.jsx("div",{className:"grid-item",children:r.jsx(qb,{weather:i})},i.city))})}),r.jsx(V.Code,{children:`
import { Card } from "@ui";
export default function WeatherWidget() {
  const weather = {
    city: "Hanoi",
    temperature: 28,
    condition: "Sunny", // "Sunny", "Rainy", "Cloudy"
    humidity: 65,
    wind: 12, // km/h
  };

  const conditionMap = {
    Sunny: {
      icon: "☀️",
      bgClass: "bg-sunny",
    },
    Rainy: {
      icon: "🌧️",
      bgClass: "bg-rainy",
    },
    Cloudy: {
      icon: "☁️",
      bgClass: "bg-cloudy",
    },
  };

  const current = conditionMap[weather.condition];

  return (
    <Card className={\`weather-widget-modern \${current.bgClass}\`}>
      {/* Thành phố */}
      <h2 className="weather-city">{weather.city}</h2>

      {/* Icon thời tiết + hiệu ứng */}
      <div className="weather-icon-big">{current.icon}</div>

      {/* Nhiệt độ */}
      <div className="weather-temperature">{weather.temperature}°C</div>

      {/* Chi tiết */}
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{weather.wind} km/h</span>
        </div>
      </div>
    </Card>
  );
}

`})]})}function Vb(){const i={posts:145,followers:2340,following:890,likes:5678},o=["Posted a new photo","Liked John's post","Followed Jane Smith","Commented on Sarah's story","Shared a reel"],u={posts:{label:"Posts",icon:"📰"},followers:{label:"Followers",icon:"🧑‍🤝‍🧑"},following:{label:"Following",icon:"🔔"},likes:{label:"Likes",icon:"💖"}},c=f=>f.toLocaleString("en-US");return r.jsxs("div",{className:"user-dashboard-modern",children:[r.jsx("div",{className:"stats-grid-modern",children:Object.entries(i).map(([f,p])=>{const{label:g,icon:S}=u[f];return r.jsxs($,{className:"stat-item-modern","data-type":f,children:[r.jsx("div",{className:"stat-icon-modern",children:S}),r.jsx("div",{className:"stat-value-modern",children:c(p)}),r.jsx("div",{className:"stat-label-modern",children:g})]},f)})}),r.jsxs("div",{className:"activities-section",children:[r.jsx("h3",{className:"activities-title",children:"Recent Activities"}),r.jsx("ul",{className:"activity-list",children:o.map((f,p)=>r.jsx("li",{className:"activity-item",children:f},p))})]})]})}function Xb(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:3,title:"User Stats Dashboard"}),r.jsx(V.Description,{children:`
function UserDashboard() {
  const stats = {
    posts: 145,
    followers: 2340,
    following: 890,
    likes: 5678
  };

  const recentActivities = [
    "Posted a new photo",
    "Liked John's post",
    "Followed Jane Smith"
  ];

  // TODO:
  // 1. Hiển thị 4 stats trong grid layout
  // 2. Format numbers với commas (2,340)
  // 3. Hiển thị danh sách activities
  // 4. Thêm icons cho mỗi stat
  // 5. Dùng Fragment hợp lý
  
  return (
    // Your code here
  );
}


`}),r.jsx(V.Demo,{children:r.jsx(Vb,{})}),r.jsx(V.Code,{children:`
import { Card } from "@ui";
export default function UserDashboard() {
  const stats = {
    posts: 145,
    followers: 2340,
    following: 890,
    likes: 5678,
  };

  const recentActivities = [
    "Posted a new photo",
    "Liked John's post",
    "Followed Jane Smith",
    "Commented on Sarah's story",
    "Shared a reel",
  ];

  const statConfig = {
    posts: { label: "Posts", icon: "📰" },
    followers: { label: "Followers", icon: "🧑‍🤝‍🧑" },
    following: { label: "Following", icon: "🔔" },
    likes: { label: "Likes", icon: "💖" },
  };


  const formatNumber = (num) => num.toLocaleString("en-US");

  return (
    <div className="user-dashboard-modern">
      {/* Stats Grid */}
      <div className="stats-grid-modern">
        {Object.entries(stats).map(([key, value]) => {
          const { label, icon } = statConfig[key];
          return (
            <Card key={key} className="stat-item-modern" data-type={key}>
              <div className="stat-icon-modern">{icon}</div>
              <div className="stat-value-modern">{formatNumber(value)}</div>
              <div className="stat-label-modern">{label}</div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="activities-section">
        <h3 className="activities-title">Recent Activities</h3>
        <ul className="activity-list">
          {recentActivities.map((activity, index) => (
            <li key={index} className="activity-item">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


`})]})}const Zb=new Date().getHours();function Zl({currentHour:i=Zb}){const o="Alex",c=Object.values({morning:{hours:p=>p>=5&&p<=11,text:"Chào buổi sáng",icon:"🌅",bgClass:"bg-morning",quote:"Mỗi buổi sáng là một khởi đầu mới. Hãy làm nó đáng nhớ!"},afternoon:{hours:p=>p>=12&&p<=17,text:"Chào buổi chiều",icon:"☀️",bgClass:"bg-afternoon",quote:"Cố lên! Bạn đã đi được nửa chặng đường rồi!"},evening:{hours:p=>p>=18&&p<=21,text:"Chào buổi tối",icon:"🌆",bgClass:"bg-evening",quote:"Buổi tối là lúc để nhìn lại và nạp lại năng lượng."},night:{hours:p=>p>=22||p<=4,text:"Chúc ngủ ngon",icon:"🌙",bgClass:"bg-night",quote:"Ngủ ngon nhé. Ngày mai lại là một cuộc phiêu lưu mới!"}}).find(p=>p.hours(i)),f=new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit",hour12:!1});return r.jsxs($,{className:`dynamic-greeting-modern ${c.bgClass}`,children:[r.jsxs("div",{className:"greeting-header",children:[r.jsx("span",{className:"greeting-icon-big",children:c.icon}),r.jsxs("h1",{className:"greeting-text-big",children:[c.text,","," ",r.jsx("span",{className:"user-name-highlight",children:o}),"!"]})]}),r.jsxs("div",{className:"current-time-display",children:[f," • Hà Nội, Việt Nam",r.jsx("div",{className:"flag-vn",children:"🇻🇳"})]}),r.jsx("blockquote",{className:"motivational-quote-premium",children:c.quote})]})}function $b(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:4,title:"Dynamic Greeting (Challenge)"}),r.jsx(V.Description,{children:`
function DynamicGreeting() {
  const currentHour = new Date().getHours();
  const userName = "Alex";
  
  // TODO:
  // 1. Hiển thị greeting dựa vào thời gian:
  //    - 5-11: Good Morning 🌅
  //    - 12-17: Good Afternoon ☀️
  //    - 18-21: Good Evening 🌆
  //    - 22-4: Good Night 🌙
  // 2. Hiển thị tên user
  // 3. Hiển thị giờ hiện tại
  // 4. Background color khác nhau cho mỗi thời điểm
  // 5. Bonus: Thêm motivational quote
  
  return (
    <div className="greeting">
      {/* Your code here */}
    </div>
  );
}


`}),r.jsxs(V.Demo,{children:[r.jsxs("div",{className:"now-time",children:[r.jsxs("p",{className:"time text-center",children:["Giờ hiện tại : ",new Date().toLocaleString()]}),r.jsx(Zl,{})]}),r.jsxs("div",{className:"grid grid-cols-2",children:[r.jsxs("div",{className:"grid-item",children:[r.jsx("p",{className:"time text-center",children:"Giờ giả lập: 8:00 AM"}),r.jsx(Zl,{currentHour:8})]}),r.jsxs("div",{className:"grid-item",children:[r.jsx("p",{className:"time text-center",children:"Giờ giả lập: 2:00 PM"}),r.jsx(Zl,{currentHour:14})]}),r.jsxs("div",{className:"grid-item",children:[r.jsx("p",{className:"time text-center",children:"Giờ giả lập: 7:00 PM"}),r.jsx(Zl,{currentHour:19})]}),r.jsxs("div",{className:"grid-item",children:[r.jsx("p",{className:"time text-center",children:"Giờ giả lập: 11:00 PM"}),r.jsx(Zl,{currentHour:23})]})]})]}),r.jsx(V.Code,{children:`
import { Card } from "@ui";

function DynamicGreeting() {
  const currentHour = new Date().getHours();
  const userName = "Alex";

  const greetingMap = {
    morning: {
      hours: (h) => h >= 5 && h <= 11,
      text: "Chào buổi sáng",
      icon: "🌅",
      bgClass: "bg-morning",
      quote: "Mỗi buổi sáng là một khởi đầu mới. Hãy làm nó đáng nhớ!",
    },
    afternoon: {
      hours: (h) => h >= 12 && h <= 17,
      text: "Chào buổi chiều",
      icon: "☀️",
      bgClass: "bg-afternoon",
      quote: "Cố lên! Bạn đã đi được nửa chặng đường rồi!",
    },
    evening: {
      hours: (h) => h >= 18 && h <= 21,
      text: "Chào buổi tối",
      icon: "🌆",
      bgClass: "bg-evening",
      quote: "Buổi tối là lúc để nhìn lại và nạp lại năng lượng.",
    },
    night: {
      hours: (h) => h >= 22 || h <= 4,
      text: "Chúc ngủ ngon",
      icon: "🌙",
      bgClass: "bg-night",
      quote: "Ngủ ngon nhé. Ngày mai lại là một cuộc phiêu lưu mới!",
    },
  };

  const currentGreeting = Object.values(greetingMap).find((g) =>
    g.hours(currentHour)
  );

  // Giờ Việt Nam thực tế
  const currentTime = new Date().toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Card className={\`dynamic-greeting-modern \${currentGreeting.bgClass}\`}>
      <div className="greeting-header">
        <span className="greeting-icon-big">{currentGreeting.icon}</span>
        <h1 className="greeting-text-big">
          {currentGreeting.text},{" "}
          <span className="user-name-highlight">{userName}</span>!
        </h1>
      </div>

      <div className="time-display">
        {currentTime} • Hà Nội, Việt Nam
        <div className="flag-vn">🇻🇳</div>
      </div>

      <blockquote className="motivational-quote-premium">
        {currentGreeting.quote}
      </blockquote>
    </Card>
  );
}

export default DynamicGreeting;


`})]})}const Qb={1:Hb,2:Yb,3:Xb,4:$b},Kb=()=>r.jsxs("div",{className:"day-content",children:[r.jsxs("div",{className:"day-header",children:[r.jsxs("div",{className:"day-header-content",children:[r.jsx(Pl,{size:32,color:"#00D9FF"}),r.jsxs("div",{children:[r.jsx("h1",{className:"day-title",children:"Ngày 1"}),r.jsx("p",{className:"day-subtitle",children:"JSX & Rendering Basics"})]})]}),r.jsxs("section",{className:"lesson-goal",children:[r.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Hiểu JSX là gì và cách hoạt động"}),r.jsx("li",{children:"Sử dụng JavaScript expressions trong JSX"}),r.jsx("li",{children:"Làm việc với Fragments"}),r.jsx("li",{children:"Tạo được UI components đơn giản"})]})]})]}),r.jsx("div",{className:"exercises-list",children:Array.from({length:4},(i,o)=>{const u=Qb[o+1];return u?r.jsx(u,{},o):null})})]});function Jb(){const i=[{id:1,name:"John Doe",role:"admin",status:"online",lastActive:"2 phút trước",points:1250},{id:2,name:"Jane Smith",role:"user",status:"offline",lastActive:"1 giờ trước",points:890},{id:3,name:"Bob Johnson",role:"moderator",status:"away",lastActive:"15 phút trước",points:2100}],o=[...i].sort((g,S)=>S.points-g.points),u=i.reduce((g,S)=>(g[S.role]=(g[S.role]||0)+1,g),{}),c={online:"🟢",offline:"⚫",away:"🟡"},f={admin:"role-admin",moderator:"role-moderator",user:"role-user"},p={admin:"Admin",moderator:"Moderator",user:"User"};return r.jsxs("div",{className:"user-dashboard-vn",children:[r.jsxs($,{className:"role-summary-card",children:[r.jsx("h3",{className:"role-summary-title",children:"Tổng quan vai trò"}),r.jsx("ul",{className:"role-summary-list",children:Object.entries(u).map(([g,S])=>r.jsxs("li",{className:"role-summary-item",children:[r.jsx("span",{children:p[g]||g}),r.jsxs("span",{children:[S," người"]})]},g))})]}),o.length===0?r.jsx("div",{className:"empty-state-vn",children:"Không tìm thấy người dùng nào"}):r.jsx("div",{className:"user-list-vn",children:o.map(g=>r.jsxs($,{className:"user-item-card",children:[r.jsxs("div",{className:"user-info",children:[r.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[r.jsx("span",{className:"user-name-vn",children:g.name}),r.jsx("span",{className:`role-badge-vn ${f[g.role]}`,children:p[g.role]})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsxs("span",{className:"user-status-vn",children:[r.jsx("span",{className:"status-dot",children:c[g.status]}),g.status==="online"?"Đang hoạt động":g.status==="away"?"Vắng mặt":"Ngoại tuyến"]}),g.status!=="online"&&r.jsx("span",{className:"last-active-vn",children:g.lastActive}),r.jsxs("span",{className:"user-points-vn",children:[g.points," điểm"]})]})]}),g.points>1e3&&r.jsx("span",{className:"top-user-badge-vn",children:"Top User"})]},g.id))})]})}function Ib(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:1,title:"User Dashboard"}),r.jsx(V.Description,{children:`
function UserDashboard() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "admin",
      status: "online",
      lastActive: "2 mins ago",
      points: 1250,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "user",
      status: "offline",
      lastActive: "1 hour ago",
      points: 890,
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "moderator",
      status: "away",
      lastActive: "15 mins ago",
      points: 2100,
    },
  ];

  // TODO:
  // 1. Render danh sách users với key đúng
  // 2. Hiển thị badge role khác màu (admin=red, moderator=blue, user=green)
  // 3. Hiển thị status với icon (online=🟢, offline=⚫, away=🟡)
  // 4. Chỉ hiển thị lastActive nếu status !== 'online'
  // 5. Hiển thị "Top User" badge nếu points > 1000
  // 6. Sort users theo points (highest first)
  // 7. Thêm empty state nếu users.length === 0
  // 8. Hiển thị tổng số users mỗi role

  return <div className="user-dashboard">{/* Your code here */}</div>;
}

`}),r.jsx(V.Demo,{children:r.jsx(Jb,{})}),r.jsx(V.Code,{children:`
import { Card } from "@ui";
export default function UserDashboard() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "admin",
      status: "online",
      lastActive: "2 phút trước",
      points: 1250,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "user",
      status: "offline",
      lastActive: "1 giờ trước",
      points: 890,
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "moderator",
      status: "away",
      lastActive: "15 phút trước",
      points: 2100,
    },
  ];

  // 6. Sort theo points (cao → thấp)
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  // 8. Tổng số users mỗi role
  const roleCounts = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const statusIcons = {
    online: "🟢",
    offline: "⚫",
    away: "🟡",
  };

  const roleClasses = {
    admin: "role-admin",
    moderator: "role-moderator",
    user: "role-user",
  };

  const roleLabels = {
    admin: "Admin",
    moderator: "Moderator",
    user: "User",
  };

  return (
    <div className="user-dashboard-vn">
      {/* Role Summary */}
      <Card className="role-summary-card">
        <h3 className="role-summary-title">Tổng quan vai trò</h3>
        <ul className="role-summary-list">
          {Object.entries(roleCounts).map(([role, count]) => (
            <li key={role} className="role-summary-item">
              <span>{roleLabels[role] || role}</span>
              <span>{count} người</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* User List */}
      {sortedUsers.length === 0 ? (
        <div className="empty-state-vn">Không tìm thấy người dùng nào</div>
      ) : (
        <div className="user-list-vn">
          {sortedUsers.map((user) => (
            <Card key={user.id} className="user-item-card">
              <div className="user-info">
                <div className="flex items-center gap-1 mb-1">
                  <span className="user-name-vn">{user.name}</span>
                  <span className={\`role-badge-vn \${roleClasses[user.role]}\`}>
                    {roleLabels[user.role]}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="user-status-vn">
                    <span className="status-dot">
                      {statusIcons[user.status]}
                    </span>
                    {user.status === "online"
                      ? "Đang hoạt động"
                      : user.status === "away"
                      ? "Vắng mặt"
                      : "Ngoại tuyến"}
                  </span>
                  {user.status !== "online" && (
                    <span className="last-active-vn">{user.lastActive}</span>
                  )}
                  <span className="user-points-vn">{user.points} điểm</span>
                </div>
              </div>

              {user.points > 1000 && (
                <span className="top-user-badge-vn">Top User</span>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}


`})]})}function Wb(){const i=[{id:1,name:"Laptop Pro",category:"electronics",price:1299,inStock:!0,rating:4.5,icon:"💻"},{id:2,name:"Ghế văn phòng",category:"furniture",price:299,inStock:!1,rating:4,icon:"🪑"},{id:3,name:"Đèn bàn học",category:"furniture",price:49,inStock:!0,rating:4.8,icon:"💡"},{id:4,name:"Chuột không dây",category:"electronics",price:29,inStock:!0,rating:4.2,icon:"🖱️"},{id:5,name:"Sổ tay",category:"stationery",price:5,inStock:!0,rating:3.9,icon:"📒"}],[o,u]=E.useState("all"),[c,f]=E.useState("all"),[p,g]=E.useState("all"),[S,y]=E.useState("none"),h=i.filter(v=>!(o!=="all"&&v.category!==o||c==="in"&&!v.inStock||c==="out"&&v.inStock||p==="low"&&v.price>=50||p==="mid"&&(v.price<50||v.price>500)||p==="high"&&v.price<=500)).sort((v,N)=>S==="price-low"?v.price-N.price:S==="price-high"?N.price-v.price:S==="rating"?N.rating-v.rating:0);return r.jsxs("div",{className:"product-filter",children:[r.jsxs($,{className:"filter-bar",children:[r.jsxs("select",{className:"custom-select",value:o,onChange:v=>u(v.target.value),children:[r.jsx("option",{value:"all",children:"Tất cả danh mục"}),r.jsx("option",{value:"electronics",children:"Điện tử"}),r.jsx("option",{value:"furniture",children:"Nội thất"}),r.jsx("option",{value:"stationery",children:"Văn phòng phẩm"})]}),r.jsxs("select",{className:"custom-select",value:c,onChange:v=>f(v.target.value),children:[r.jsx("option",{value:"all",children:"Tất cả kho"}),r.jsx("option",{value:"in",children:"Còn hàng"}),r.jsx("option",{value:"out",children:"Hết hàng"})]}),r.jsxs("select",{className:"custom-select",value:p,onChange:v=>g(v.target.value),children:[r.jsx("option",{value:"all",children:"Tất cả giá"}),r.jsx("option",{value:"low",children:"Dưới 50$"}),r.jsx("option",{value:"mid",children:"50$ - 500$"}),r.jsx("option",{value:"high",children:"Trên 500$"})]}),r.jsxs("select",{className:"custom-select",value:S,onChange:v=>y(v.target.value),children:[r.jsx("option",{value:"none",children:"Không sắp xếp"}),r.jsx("option",{value:"price-low",children:"Giá tăng dần"}),r.jsx("option",{value:"price-high",children:"Giá giảm dần"}),r.jsx("option",{value:"rating",children:"Đánh giá cao nhất"})]})]}),r.jsxs("div",{className:"product-count-display",children:["Hiển thị ",h.length," / ",i.length," sản phẩm"]}),h.length===0?r.jsx("div",{className:"no-products",children:"Không tìm thấy sản phẩm nào"}):r.jsx("div",{className:"product-list",children:h.map(v=>r.jsxs($,{className:"product-item-card",children:[r.jsx("h3",{className:"product-name",children:v.name}),r.jsx("p",{className:"product-img",children:v.icon}),r.jsxs("div",{className:"product-price",children:["$",v.price]}),r.jsxs("div",{className:"product-rating-stars",children:["★".repeat(Math.floor(v.rating)),v.rating%1>=.5&&"⯪"]}),!v.inStock&&r.jsx("span",{className:"out-of-stock-badge",children:"Hết hàng"})]},v.id))})]})}function Pb(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:2,title:"Product Filter"}),r.jsx(V.Description,{children:`
function ProductFilter() {
  const products = [
    {
      id: 1,
      name: "Laptop Pro",
      category: "electronics",
      price: 1299,
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Office Chair",
      category: "furniture",
      price: 299,
      inStock: false,
      rating: 4.0,
    },
    {
      id: 3,
      name: "Desk Lamp",
      category: "furniture",
      price: 49,
      inStock: true,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Wireless Mouse",
      category: "electronics",
      price: 29,
      inStock: true,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Notebook",
      category: "stationery",
      price: 5,
      inStock: true,
      rating: 3.9,
    },
  ];

  // TODO:
  // 1. Thêm filter by category (All, Electronics, Furniture, Stationery)
  // 2. Thêm filter by stock (All, In Stock, Out of Stock)
  // 3. Thêm filter by price range (<$50, $50-$500, >$500)
  // 4. Hiển thị "Out of Stock" badge cho sản phẩm hết hàng
  // 5. Hiển thị rating với stars (⭐)
  // 6. Nếu không có sản phẩm nào match filters, hiển thị "No products found"
  // 7. Hiển thị số lượng products hiện tại / tổng số
  // 8. Sort options: Price (Low to High), Price (High to Low), Rating

  return <div className="product-filter">{/* Your code here */}</div>;
}


`}),r.jsx(V.Demo,{children:r.jsx(Wb,{})}),r.jsx(V.Code,{children:`
import { Card } from "@ui";
import { useState } from "react";

function ProductFilter() {
  const products = [
    {
      id: 1,
      name: "Laptop Pro",
      category: "electronics",
      price: 1299,
      inStock: true,
      rating: 4.5,
      icon: "💻",
    },
    {
      id: 2,
      name: "Ghế văn phòng",
      category: "furniture",
      price: 299,
      inStock: false,
      rating: 4.0,
      icon: "🪑",
    },
    {
      id: 3,
      name: "Đèn bàn học",
      category: "furniture",
      price: 49,
      inStock: true,
      rating: 4.8,
      icon: "💡",
    },
    {
      id: 4,
      name: "Chuột không dây",
      category: "electronics",
      price: 29,
      inStock: true,
      rating: 4.2,
      icon: "🖱️",
    },
    {
      id: 5,
      name: "Sổ tay",
      category: "stationery",
      price: 5,
      inStock: true,
      rating: 3.9,
      icon: "📒",
    },
  ];

  const [category, setCategory] = useState("all");
  const [stock, setStock] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("none");

  const filteredProducts = products
    .filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (stock === "in" && !p.inStock) return false;
      if (stock === "out" && p.inStock) return false;
      if (priceRange === "low" && p.price >= 50) return false;
      if (priceRange === "mid" && (p.price < 50 || p.price > 500)) return false;
      if (priceRange === "high" && p.price <= 500) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="product-filter">
      {/* Filter Bar */}
      <Card className="filter-bar">
        <select
          className="custom-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Tất cả danh mục</option>
          <option value="electronics">Điện tử</option>
          <option value="furniture">Nội thất</option>
          <option value="stationery">Văn phòng phẩm</option>
        </select>

        <select
          className="custom-select"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        >
          <option value="all">Tất cả kho</option>
          <option value="in">Còn hàng</option>
          <option value="out">Hết hàng</option>
        </select>

        <select
          className="custom-select"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="all">Tất cả giá</option>
          <option value="low">Dưới 50$</option>
          <option value="mid">50$ - 500$</option>
          <option value="high">Trên 500$</option>
        </select>

        <select
          className="custom-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Không sắp xếp</option>
          <option value="price-low">Giá tăng dần</option>
          <option value="price-high">Giá giảm dần</option>
          <option value="rating">Đánh giá cao nhất</option>
        </select>
      </Card>

      {/* Product Count */}
      <div className="product-count-display">
        Hiển thị {filteredProducts.length} / {products.length} sản phẩm
      </div>

      {/* Product List */}
      {filteredProducts.length === 0 ? (
        <div className="no-products">Không tìm thấy sản phẩm nào</div>
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="product-item-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-img">{product.icon}</p>
              <div className="product-price">\${product.price}</div>
              <div className="product-rating-stars">
                {"★".repeat(Math.floor(product.rating))}
                {product.rating % 1 >= 0.5 && "⯪"}
              </div>

              {!product.inStock && (
                <span className="out-of-stock-badge">Hết hàng</span>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductFilter;


`})]})}function e0(){const[i,o]=E.useState([{id:1,type:"info",message:"Cập nhật hệ thống đã sẵn sàng",read:!1,timestamp:"5 phút trước"},{id:2,type:"success",message:"Thanh toán thành công",read:!0,timestamp:"1 giờ trước"},{id:3,type:"warning",message:"Gói đăng ký của bạn hết hạn sau 3 ngày",read:!1,timestamp:"2 giờ trước"},{id:4,type:"error",message:"Đồng bộ dữ liệu thất bại",read:!1,timestamp:"3 giờ trước"}]),[u,c]=E.useState("all"),[f,p]=E.useState(!1),g={info:{icon:"ℹ️",color:"notification-icon-info"},success:{icon:"✅",color:"notification-icon-success"},warning:{icon:"⚠️",color:"notification-icon-warning"},error:{icon:"❌",color:"notification-icon-error"}},S=i.filter(D=>!D.read).length,y=i.filter(D=>u==="unread"?!D.read:u==="read"?D.read:!0),h=y.reduce((D,q)=>(D[q.type]||(D[q.type]=[]),D[q.type].push(q),D),{}),v=()=>{o(i.map(D=>({...D,read:!0})))},N=()=>{window.confirm("Bạn có chắc chắn muốn xóa tất cả thông báo?")&&o([])};return r.jsxs($,{className:"notification-center",children:[r.jsxs("div",{className:"notification-header",children:[r.jsxs("h2",{className:"notification-title",children:["Trung tâm thông báo",S>0&&r.jsx("span",{className:"unread-badge",children:S})]}),r.jsxs("div",{className:"notification-controls",children:[r.jsx(Kl,{value:u,onChange:D=>c(D.target.value),options:[{value:"all",label:"Tất cả"},{value:"unread",label:"Chưa đọc"},{value:"read",label:"Đã đọc"}]}),r.jsx(sn,{label:"Nhóm theo loại",checked:f,onChange:D=>p(D.target.checked)}),S>0&&r.jsx(oe,{variant:"primary",size:"sm",onClick:v,children:"Đánh dấu tất cả đã đọc"}),r.jsx(oe,{variant:"danger",size:"sm",onClick:N,children:"Xóa tất cả"})]})]}),y.length===0?r.jsx("div",{className:"no-notifications",children:"Không có thông báo nào"}):f?Object.entries(h).map(([D,q])=>r.jsxs("div",{className:"group-section",children:[r.jsx("h3",{className:"group-title",children:D==="info"?"Thông tin":D==="success"?"Thành công":D==="warning"?"Cảnh báo":"Lỗi"}),r.jsx("ul",{className:"notification-list",children:q.map(b=>r.jsxs("li",{className:`notification-item ${b.read?"":"unread"}`,children:[r.jsx("span",{className:`notification-icon ${g[b.type].color}`,children:g[b.type].icon}),r.jsx("span",{className:"notification-message",children:b.message}),r.jsx("span",{className:"notification-timestamp",children:b.timestamp})]},b.id))})]},D)):r.jsx("ul",{className:"notification-list",children:y.map(D=>r.jsxs("li",{className:`notification-item ${D.read?"":"unread"}`,children:[r.jsx("span",{className:`notification-icon ${g[D.type].color}`,children:g[D.type].icon}),r.jsx("span",{className:"notification-message",children:D.message}),r.jsx("span",{className:"notification-timestamp",children:D.timestamp})]},D.id))})]})}function t0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:3,title:"Notification Center"}),r.jsx(V.Description,{children:`
function NotificationCenter() {
  const notifications = [
    {
      id: 1,
      type: "info",
      message: "System update available",
      read: false,
      timestamp: "5 mins ago",
    },
    {
      id: 2,
      type: "success",
      message: "Payment processed successfully",
      read: true,
      timestamp: "1 hour ago",
    },
    {
      id: 3,
      type: "warning",
      message: "Your subscription expires in 3 days",
      read: false,
      timestamp: "2 hours ago",
    },
    {
      id: 4,
      type: "error",
      message: "Failed to sync data",
      read: false,
      timestamp: "3 hours ago",
    },
  ];

  // TODO:
  // 1. Render notifications với icon dựa vào type:
  //    - info: ℹ️ (blue)
  //    - success: ✅ (green)
  //    - warning: ⚠️ (yellow)
  //    - error: ❌ (red)
  // 2. Unread notifications có background khác
  // 3. Filter: All, Unread, Read
  // 4. Hiển thị unread count badge
  // 5. Button "Mark all as read" (chỉ hiển thị nếu có unread)
  // 6. Button "Clear all" với confirmation
  // 7. Nếu không có notifications: "No notifications"
  // 8. Group by type option

  return <div className="notification-center">{/* Your code here */}</div>;
}

`}),r.jsx(V.Demo,{children:r.jsx(e0,{})}),r.jsx(V.Code,{children:`
import { Button, Card, Checkbox, Select } from "@ui";
import { useState } from "react";

function NotificationCenter() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      message: "Cập nhật hệ thống đã sẵn sàng",
      read: false,
      timestamp: "5 phút trước",
    },
    {
      id: 2,
      type: "success",
      message: "Thanh toán thành công",
      read: true,
      timestamp: "1 giờ trước",
    },
    {
      id: 3,
      type: "warning",
      message: "Gói đăng ký của bạn hết hạn sau 3 ngày",
      read: false,
      timestamp: "2 giờ trước",
    },
    {
      id: 4,
      type: "error",
      message: "Đồng bộ dữ liệu thất bại",
      read: false,
      timestamp: "3 giờ trước",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [groupByType, setGroupByType] = useState(false);

  const typeConfig = {
    info: { icon: "ℹ️", color: "notification-icon-info" },
    success: { icon: "✅", color: "notification-icon-success" },
    warning: { icon: "⚠️", color: "notification-icon-warning" },
    error: { icon: "❌", color: "notification-icon-error" },
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return true;
  });

  const groups = filteredNotifications.reduce((acc, n) => {
    if (!acc[n.type]) acc[n.type] = [];
    acc[n.type].push(n);
    return acc;
  }, {});

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const clearAll = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tất cả thông báo?")) {
      setNotifications([]);
    }
  };

  return (
    <Card className="notification-center">
      {/* Header */}
      <div className="notification-header">
        <h2 className="notification-title">
          Trung tâm thông báo
          {unreadCount > 0 && (
            <span className="unread-badge">{unreadCount}</span>
          )}
        </h2>

        <div className="notification-controls">
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "unread", label: "Chưa đọc" },
              { value: "read", label: "Đã đọc" },
            ]}
          />

          <Checkbox
            label="Nhóm theo loại"
            checked={groupByType}
            onChange={(e) => setGroupByType(e.target.checked)}
          />

          {unreadCount > 0 && (
            <Button variant="primary" size="sm" onClick={markAllAsRead}>
              Đánh dấu tất cả đã đọc
            </Button>
          )}

          <Button variant="danger" size="sm" onClick={clearAll}>
            Xóa tất cả
          </Button>
        </div>
      </div>

      {/* Content */}
      {filteredNotifications.length === 0 ? (
        <div className="no-notifications">Không có thông báo nào</div>
      ) : groupByType ? (
        Object.entries(groups).map(([type, notifs]) => (
          <div key={type} className="group-section">
            <h3 className="group-title">
              {type === "info"
                ? "Thông tin"
                : type === "success"
                ? "Thành công"
                : type === "warning"
                ? "Cảnh báo"
                : "Lỗi"}
            </h3>
            <ul className="notification-list">
              {notifs.map((n) => (
                <li
                  key={n.id}
                  className={\`notification-item \${!n.read ? "unread" : ""}\`}
                >
                  <span
                    className={\`notification-icon \${typeConfig[n.type].color}\`}
                  >
                    {typeConfig[n.type].icon}
                  </span>
                  <span className="notification-message">{n.message}</span>
                  <span className="notification-timestamp">{n.timestamp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="notification-list">
          {filteredNotifications.map((n) => (
            <li
              key={n.id}
              className={\`notification-item \${!n.read ? "unread" : ""}\`}
            >
              <span className={\`notification-icon \${typeConfig[n.type].color}\`}>
                {typeConfig[n.type].icon}
              </span>
              <span className="notification-message">{n.message}</span>
              <span className="notification-timestamp">{n.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default NotificationCenter;

`})]})}function a0(){const i=[{id:1,title:"Bắt đầu với React",author:"John Doe",date:"2024-01-15",tags:["react","javascript","tutorial"],views:1250,likes:89,featured:!0},{id:2,title:"Kỹ thuật CSS nâng cao",author:"Jane Smith",date:"2024-01-20",tags:["css","design","frontend"],views:890,likes:45,featured:!1},{id:3,title:"Thực hành tốt nhất với Node.js",author:"Bob Johnson",date:"2024-01-25",tags:["nodejs","javascript","backend"],views:2100,likes:156,featured:!0}],[o]=E.useState(i),[u,c]=E.useState(null),[f,p]=E.useState("latest"),[g,S]=E.useState(""),[y,h]=E.useState(2),v=o.filter(b=>!(u&&!b.tags.includes(u)||g&&!b.title.toLowerCase().includes(g.toLowerCase()))).sort((b,A)=>f==="views"?A.views-b.views:f==="likes"?A.likes-b.likes:f==="latest"?new Date(A.date)-new Date(b.date):0),N=v.slice(0,y),D=()=>{c(null),S(""),h(2)},q=()=>{h(b=>Math.min(b+2,v.length))};return r.jsxs("div",{className:"blog-posts",children:[r.jsxs($,{className:"blog-controls",children:[r.jsx(da,{placeholder:"Tìm kiếm theo tiêu đề....",icon:"🔍",value:g,onChange:b=>S(b.target.value)}),r.jsx(Kl,{value:f,onChange:b=>p(b.target.value),options:[{value:"latest",label:"Mới nhất"},{value:"views",label:"Xem nhiều nhất"},{value:"likes",label:"Thích nhiều nhất"}]}),u&&r.jsxs("div",{className:"current-tag",children:["Lọc theo: ",u,r.jsx(oe,{variant:"ghost",size:"sm",onClick:()=>c(null),children:"Clear"})]})]}),r.jsxs("div",{className:"results-count",children:["Tìm thấy ",v.length," bài viết"]}),v.length===0?r.jsxs("div",{className:"no-posts",children:[r.jsx("p",{children:"Không tìm thấy bài viết nào"}),r.jsx(oe,{variant:"primary",size:"sm",onClick:D,style:{marginTop:"16px"},children:"Đặt lại bộ lọc"})]}):r.jsxs(r.Fragment,{children:[r.jsx("ul",{className:"post-list",children:N.map(b=>r.jsxs($,{className:`post-item ${b.featured?"featured":""}`,children:[b.featured&&r.jsx("span",{className:"featured-icon",children:"⭐"}),r.jsx("h3",{className:"post-title",children:b.title}),r.jsxs("div",{className:"post-meta",children:["Bởi ",b.author," •"," ",new Date(b.date).toLocaleDateString("vi-VN")]}),r.jsx("div",{className:"post-tags",children:b.tags.map(A=>r.jsxs("span",{className:"tag-badge",onClick:()=>c(A),children:["#",A]},A))}),r.jsxs("div",{className:"post-stats",children:[r.jsxs("span",{children:["👁️ ",b.views.toLocaleString()]}),r.jsxs("span",{children:["❤️ ",b.likes]})]})]},b.id))}),y<v.length&&r.jsxs(oe,{variant:"primary",size:"lg",onClick:q,className:"load-more-btn",children:["Xem thêm (",v.length-y," bài còn lại)"]})]})]})}function n0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:4,title:"Blog Posts with Tags (Challenge)"}),r.jsx(V.Description,{children:`
function BlogPosts() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      date: "2024-01-15",
      tags: ["react", "javascript", "tutorial"],
      views: 1250,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      author: "Jane Smith",
      date: "2024-01-20",
      tags: ["css", "design", "frontend"],
      views: 890,
      likes: 45,
      featured: false,
    },
    {
      id: 3,
      title: "Node.js Best Practices",
      author: "Bob Johnson",
      date: "2024-01-25",
      tags: ["nodejs", "javascript", "backend"],
      views: 2100,
      likes: 156,
      featured: true,
    },
  ];

  // TODO:
  // 1. Render posts với key đúng
  // 2. Featured posts có border vàng và icon ⭐
  // 3. Render tags dưới dạng badges (clickable)
  // 4. Click vào tag để filter posts có tag đó
  // 5. Hiển thị views và likes với icons (👁️ và ❤️)
  // 6. Sort options: Latest, Most Viewed, Most Liked
  // 7. Search by title
  // 8. Nếu filter/search không có kết quả: "No posts found" với button reset
  // 9. Hiển thị total results count
  // 10. "Load more" button (giả lập pagination)

  return <div className="blog-posts">{/* Your code here */}</div>;
}
`}),r.jsx(V.Demo,{children:r.jsx(a0,{})}),r.jsx(V.Code,{children:`
import { Button, Card, Input, Select } from "@ui";
import { useState } from "react";

function BlogPosts() {
  const initialPosts = [
    {
      id: 1,
      title: "Bắt đầu với React",
      author: "John Doe",
      date: "2024-01-15",
      tags: ["react", "javascript", "tutorial"],
      views: 1250,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      title: "Kỹ thuật CSS nâng cao",
      author: "Jane Smith",
      date: "2024-01-20",
      tags: ["css", "design", "frontend"],
      views: 890,
      likes: 45,
      featured: false,
    },
    {
      id: 3,
      title: "Thực hành tốt nhất với Node.js",
      author: "Bob Johnson",
      date: "2024-01-25",
      tags: ["nodejs", "javascript", "backend"],
      views: 2100,
      likes: 156,
      featured: true,
    },
  ];

  const [posts] = useState(initialPosts);
  const [selectedTag, setSelectedTag] = useState(null);
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(2);

  const filteredPosts = posts
    .filter((p) => {
      if (selectedTag && !p.tags.includes(selectedTag)) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "views") return b.views - a.views;
      if (sort === "likes") return b.likes - a.likes;
      if (sort === "latest") return new Date(b.date) - new Date(a.date);
      return 0;
    });

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const resetFilters = () => {
    setSelectedTag(null);
    setSearch("");
    setVisibleCount(2);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, filteredPosts.length));
  };

  return (
    <div className="blog-posts">
      {/* Controls */}
      <Card className="blog-controls">
        <Input
          placeholder="Tìm kiếm theo tiêu đề...."
          icon="🔍"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          options={[
            { value: "latest", label: "Mới nhất" },
            { value: "views", label: "Xem nhiều nhất" },
            { value: "likes", label: "Thích nhiều nhất" },
          ]}
        />

        {selectedTag && (
          <div className="current-tag">
            Lọc theo: {selectedTag}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              Clear
            </Button>
          </div>
        )}
      </Card>

      {/* Results Count */}
      <div className="results-count">
        Tìm thấy {filteredPosts.length} bài viết
      </div>

      {/* Posts */}
      {filteredPosts.length === 0 ? (
        <div className="no-posts">
          <p>Không tìm thấy bài viết nào</p>
          <Button
            variant="primary"
            size="sm"
            onClick={resetFilters}
            style={{ marginTop: "16px" }}
          >
            Đặt lại bộ lọc
          </Button>
        </div>
      ) : (
        <>
          <ul className="post-list">
            {visiblePosts.map((post) => (
              <Card
                key={post.id}
                className={\`post-item \${post.featured ? "featured" : ""}\`}
              >
                {post.featured && <span className="featured-icon">⭐</span>}
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  Bởi {post.author} •{" "}
                  {new Date(post.date).toLocaleDateString("vi-VN")}
                </div>
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-badge"
                      onClick={() => setSelectedTag(tag)}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="post-stats">
                  <span>👁️ {post.views.toLocaleString()}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </Card>
            ))}
          </ul>

          {visibleCount < filteredPosts.length && (
            <Button
              variant="primary"
              size="lg"
              onClick={loadMore}
              className="load-more-btn"
            >
              Xem thêm ({filteredPosts.length - visibleCount} bài còn lại)
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export default BlogPosts;


`})]})}const l0={1:Ib,2:Pb,3:t0,4:n0},i0=()=>r.jsxs("div",{className:"day-content",children:[r.jsxs("div",{className:"day-header",children:[r.jsxs("div",{className:"day-header-content",children:[r.jsx(Pl,{size:32,color:"#00D9FF"}),r.jsxs("div",{children:[r.jsx("h1",{className:"day-title",children:"Ngày 2"}),r.jsx("p",{className:"day-subtitle",children:"Conditional & List Rendering"})]})]}),r.jsxs("section",{className:"lesson-goal",children:[r.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Render có điều kiện với nhiều cách khác nhau"}),r.jsxs("li",{children:["Render danh sách với ",r.jsx("span",{class:"code-badge",children:"map()"})]}),r.jsxs("li",{children:["Hiểu và sử dụng ",r.jsx("span",{class:"code-badge",children:"key"})," prop đúng cách"]}),r.jsx("li",{children:"Tránh anti-pattern: index as key"})]})]})]}),r.jsx("div",{className:"exercises-list",children:Array.from({length:4},(i,o)=>{const u=l0[o+1];return u?r.jsx(u,{},o):null})})]});function s0({user:i}){return r.jsxs("div",{className:"user-profile",children:[r.jsx(r0,{avatar:i.avatar,name:i.name,username:i.username,bio:i.bio,isVerified:i.isVerified}),r.jsx(c0,{posts:i.stats.posts,followers:i.stats.followers,following:i.stats.following}),r.jsx(o0,{posts:i.posts})]})}function r0({avatar:i,name:o,username:u,bio:c,isVerified:f}){return r.jsxs($,{className:"user-header",children:[i&&r.jsx("div",{className:"avatar",children:r.jsx("img",{className:"avatar-img",src:i,alt:o})}),r.jsxs("div",{className:"user-info",children:[r.jsxs("div",{className:"name-row",children:[r.jsx("h2",{className:"user-name",children:o}),f&&r.jsx("span",{className:"verified-badge",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 512 512",children:r.jsxs("g",{fill:"none",fillRule:"evenodd",children:[r.jsx("path",{d:"M256 472.153L176.892 512l-41.725-81.129-86.275-16.654 11.596-91.422L0 256l60.488-66.795-11.596-91.422 86.275-16.654L176.892 0 256 39.847 335.108 0l41.725 81.129 86.275 16.654-11.596 91.422L512 256l-60.488 66.795 11.596 91.422-86.275 16.654L335.108 512z",fill:"#4285f4"}),r.jsx("path",{d:"M211.824 284.5L171 243.678l-36 36 40.824 40.824-.063.062 36 36 .063-.062.062.062 36-36-.062-.062L376.324 192l-36-36z",fill:"#fff"})]})})})]}),r.jsxs("p",{className:"user-username",children:["@",u]}),c&&r.jsx("p",{className:"bio",children:c}),r.jsx(oe,{variant:"primary",size:"md",className:"follow-btn",children:"Follow"})]})]})}function o0({posts:i=[]}){return i.length===0?r.jsx($,{className:"user-posts",children:r.jsx("p",{className:"empty-state",children:"Chưa có bài viết nào."})}):r.jsx("div",{className:"user-posts",children:i.map(o=>r.jsx(u0,{post:o},o.id))})}function u0({post:i}){const{content:o,image:u,likes:c,comments:f,timestamp:p}=i;return r.jsxs($,{className:"post-card",children:[u&&r.jsx("img",{src:u,alt:"Bài viết",className:"post-image"}),r.jsxs("div",{className:"post-content",children:[r.jsx("p",{children:o}),r.jsxs("div",{className:"post-actions",children:[r.jsxs(oe,{variant:"ghost",size:"sm",className:"action-btn",children:["❤️ ",c]}),r.jsxs(oe,{variant:"ghost",size:"sm",className:"action-btn",children:["💬 ",f]}),r.jsx(oe,{variant:"ghost",size:"sm",className:"action-btn",children:"🔁"})]}),r.jsx("div",{className:"post-timestamp",children:p})]})]})}function c0({posts:i,followers:o,following:u}){const c=f=>f.toLocaleString("en-US");return r.jsxs("div",{className:"user-stats",children:[r.jsxs(oe,{variant:"ghost",className:"stat-item",children:[r.jsx("div",{className:"stat-value",children:c(i)}),r.jsx("div",{className:"stat-label",children:"Bài viết"})]}),r.jsxs(oe,{variant:"ghost",className:"stat-item",children:[r.jsx("div",{className:"stat-value",children:c(o)}),r.jsx("div",{className:"stat-label",children:"Người theo dõi"})]}),r.jsxs(oe,{variant:"ghost",className:"stat-item",children:[r.jsx("div",{className:"stat-value",children:c(u)}),r.jsx("div",{className:"stat-label",children:"Đang theo dõi"})]})]})}const d0={id:1,name:"John Doe",username:"johndoe",avatar:"https://i.pravatar.cc/150?img=1",bio:"Software Developer | React Enthusiast",isVerified:!0,stats:{posts:145,followers:2340,following:890},posts:[{id:1,content:"Just launched my new project!",image:"https://placehold.co/600x400?text=Post%20Image",likes:89,comments:12,timestamp:"2 hours ago"},{id:2,content:"Learning React is fun!",likes:45,comments:5,timestamp:"1 day ago"}]};function f0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:1,title:"UserProfile"}),r.jsx(V.Description,{children:`
// UserProfile.jsx
function UserProfile({ user }) {
  // TODO:
  // Render user profile với:
  // - UserHeader (avatar, name, bio)
  // - UserStats (posts, followers, following)
  // - UserPosts (list of posts)
  
  return (
    <div className="user-profile">
      {/* Your code */}
    </div>
  );
}

// UserHeader.jsx
function UserHeader({ avatar, name, username, bio, isVerified }) {
  // TODO:
  // - Avatar component
  // - Name với verified badge nếu isVerified
  // - Username (@username)
  // - Bio text
  // - Follow/Unfollow button
  
  return (
    <div className="user-header">
      {/* Your code */}
    </div>
  );
}

// UserStats.jsx
function UserStats({ posts, followers, following }) {
  // TODO:
  // Hiển thị 3 stats trong grid
  // Format numbers với commas (1,234)
  // Clickable stats
  
  return (
    <div className="user-stats">
      {/* Your code */}
    </div>
  );
}

// UserPosts.jsx
function UserPosts({ posts }) {
  // TODO:
  // Render list of PostCard components
  // Empty state nếu không có posts
  
  return (
    <div className="user-posts">
      {/* Your code */}
    </div>
  );
}

// PostCard.jsx
function PostCard({ post }) {
  // TODO:
  // - Post image/content
  // - Like, comment, share buttons
  // - Timestamp
  
  return (
    <div className="post-card">
      {/* Your code */}
    </div>
  );
}

// Demo data
const sampleUser = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  avatar: 'https://i.pravatar.cc/150?img=1',
  bio: 'Software Developer | React Enthusiast',
  isVerified: true,
  stats: {
    posts: 145,
    followers: 2340,
    following: 890
  },
  posts: [
    {
      id: 1,
      content: 'Just launched my new project!',
      image: 'https://via.placeholder.com/400',
      likes: 89,
      comments: 12,
      timestamp: '2 hours ago'
    },
    // More posts...
  ]
};

`}),r.jsx(V.Demo,{children:r.jsx(s0,{user:d0})}),r.jsx(V.Code,{children:`
import { Button, Card } from "@ui";
export default function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <UserHeader
        avatar={user.avatar}
        name={user.name}
        username={user.username}
        bio={user.bio}
        isVerified={user.isVerified}
      />
      <UserStats
        posts={user.stats.posts}
        followers={user.stats.followers}
        following={user.stats.following}
      />
      <UserPosts posts={user.posts} />
    </div>
  );
}

// UserHeader
function UserHeader({ avatar, name, username, bio, isVerified }) {
  return (
    <Card className="user-header">
      {avatar && (
        <div className="avatar">
          <img className="avatar-img" src={avatar} alt={name} />
        </div>
      )}
      <div className="user-info">
        <div className="name-row">
          <h2 className="user-name">{name}</h2>
          {isVerified && (
            <span className="verified-badge">
              {/* ICON verified */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                width={24}
                viewBox="0 0 512 512"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M256 472.153L176.892 512l-41.725-81.129-86.275-16.654 11.596-91.422L0 256l60.488-66.795-11.596-91.422 86.275-16.654L176.892 0 256 39.847 335.108 0l41.725 81.129 86.275 16.654-11.596 91.422L512 256l-60.488 66.795 11.596 91.422-86.275 16.654L335.108 512z"
                    fill="#4285f4"
                  />
                  <path
                    d="M211.824 284.5L171 243.678l-36 36 40.824 40.824-.063.062 36 36 .063-.062.062.062 36-36-.062-.062L376.324 192l-36-36z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </span>
          )}
        </div>
        <p className="user-username">@{username}</p>
        {bio && <p className="bio">{bio}</p>}
        <Button variant="primary" size="md" className="follow-btn">
          Follow
        </Button>
      </div>
    </Card>
  );
}
// UserPosts
function UserPosts({ posts = [] }) {
  if (posts.length === 0) {
    return (
      <Card className="user-posts">
        <p className="empty-state">Chưa có bài viết nào.</p>
      </Card>
    );
  }
  return (
    <div className="user-posts">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
// PostCard
function PostCard({ post }) {
  const { content, image, likes, comments, timestamp } = post;

  return (
    <Card className="post-card">
      {image && <img src={image} alt="Bài viết" className="post-image" />}

      <div className="post-content">
        <p>{content}</p>

        <div className="post-actions">
          <Button variant="ghost" size="sm" className="action-btn">
            ❤️ {likes}
          </Button>
          <Button variant="ghost" size="sm" className="action-btn">
            💬 {comments}
          </Button>
          <Button variant="ghost" size="sm" className="action-btn">
            🔁
          </Button>
        </div>

        <div className="post-timestamp">{timestamp}</div>
      </div>
    </Card>
  );
}
// UserStats
function UserStats({ posts, followers, following }) {
  const formatNumber = (num) => num.toLocaleString("en-US");

  return (
    <div className="user-stats">
      <Button variant="ghost" className="stat-item">
        <div className="stat-value">{formatNumber(posts)}</div>
        <div className="stat-label">Bài viết</div>
      </Button>
      <Button variant="ghost" className="stat-item">
        <div className="stat-value">{formatNumber(followers)}</div>
        <div className="stat-label">Người theo dõi</div>
      </Button>
      <Button variant="ghost" className="stat-item">
        <div className="stat-value">{formatNumber(following)}</div>
        <div className="stat-label">Đang theo dõi</div>
      </Button>
    </div>
  );
}

        `})]})}function m0({products:i,onAddToCart:o}){return r.jsx("div",{className:"product-grid",children:i.map(u=>r.jsx(p0,{product:u,onAddToCart:o},u.id))})}function p0({product:i,onAddToCart:o}){const{name:u,price:c,image:f,rating:p,reviews:g,inStock:S=!0,discount:y=0}=i,h=y>0?c/(1-y/100):null;return r.jsxs($,{className:`product-card ${S?"":"out-of-stock"}`,children:[r.jsx(h0,{src:f,alt:u,discount:y,inStock:S}),r.jsxs("div",{className:"product-info",children:[r.jsx("h3",{className:"product-name",children:u}),r.jsx(y0,{rating:p,reviews:g}),r.jsx(g0,{price:c,originalPrice:h,currency:"USD"}),r.jsx(oe,{variant:"primary",size:"md",className:"add-to-cart-btn",onClick:()=>o?.(i),disabled:!S,children:S?"Add to Cart":"Out of Stock"})]}),!S&&r.jsx("div",{className:"stock-overlay",children:"Out of Stock"})]})}function h0({src:i,alt:o,discount:u=0,inStock:c=!0}){return r.jsxs("div",{className:"product-image-wrapper",children:[r.jsx("img",{src:i||"https://via.placeholder.com/300",alt:o,className:"product-img"}),u>0&&r.jsxs("span",{className:"discount-badge",children:["-",u,"%"]}),!c&&r.jsx("div",{className:"stock-overlay",children:"Out of Stock"})]})}function g0({price:i,originalPrice:o,currency:u="USD"}){const c=o?o-i:0;return r.jsxs("div",{className:"product-price",children:[r.jsxs("span",{className:"current-price",children:[u," ",i.toFixed(2)]}),o&&r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"original-price",children:[u," ",o.toFixed(2)]}),r.jsxs("span",{className:"savings",children:["Save ",u," ",c.toFixed(2)]})]})]})}function y0({rating:i=0,reviews:o=0,size:u="medium"}){const c=Math.floor(i),f=i%1>=.5,p=5-c-(f?1:0);return r.jsxs("div",{className:`rating rating-${u}`,children:[r.jsxs("div",{className:"stars",children:["★".repeat(c),f&&"⯪","☆".repeat(p)]}),r.jsx("span",{className:"rating-value",children:i.toFixed(1)}),o>0&&r.jsxs("span",{className:"reviews-count",children:["(",o," reviews)"]})]})}const v0=[{id:1,name:"Wireless Headphones",price:79.99,image:"https://placehold.co/600x400?text=Wireless%20Headphones",rating:4.5,reviews:128,inStock:!0,discount:20},{id:2,name:"Office Chair",price:299,image:"https://placehold.co/600x400?text=Office%20Chair",rating:4,reviews:45,inStock:!1},{id:3,name:"Desk Lamp",price:49,image:"https://placehold.co/600x400?text=Desk%20Lamp",rating:4.8,reviews:89,inStock:!0}];function b0(){const i=o=>{alert(`Added ${o.name} to cart !`)};return r.jsxs(V,{children:[r.jsx(V.Header,{order:2,title:"ProductGrid"}),r.jsx(V.Description,{children:`
// ProductGrid.jsx
function ProductGrid({ products, onAddToCart }) {
  // TODO:
  // Render grid of ProductCard components
  // Pass onAddToCart down
  
  return (
    <div className="product-grid">
      {/* Your code */}
    </div>
  );
}

// ProductCard.jsx
function ProductCard({ product, onAddToCart }) {
  // Props: id, name, price, image, rating, inStock, discount
  
  // TODO:
  // - Product image
  // - Product name
  // - Price (hiển thị giá cũ nếu có discount)
  // - Rating stars
  // - Add to Cart button (disabled nếu out of stock)
  // - Discount badge nếu có
  // - Out of Stock overlay nếu !inStock
  
  return (
    <div className="product-card">
      {/* Your code */}
    </div>
  );
}

// ProductImage.jsx
function ProductImage({ src, alt, discount, inStock }) {
  // TODO:
  // - Image với fallback
  // - Discount badge overlay
  // - Out of stock overlay
  
  return (
    <div className="product-image">
      {/* Your code */}
    </div>
  );
}

// ProductPrice.jsx
function ProductPrice({ price, originalPrice, currency = 'USD' }) {
  // TODO:
  // - Current price (large, bold)
  // - Original price (strikethrough) nếu có discount
  // - Savings amount
  
  return (
    <div className="product-price">
      {/* Your code */}
    </div>
  );
}

// Rating.jsx
function Rating({ rating, reviews, size = 'medium' }) {
  // TODO:
  // - Star icons (filled/half/empty)
  // - Rating number (4.5)
  // - Reviews count (128 reviews)
  
  return (
    <div className="rating">
      {/* Your code */}
    </div>
  );
}



`}),r.jsx(V.Demo,{children:r.jsx(m0,{products:v0,onAddToCart:i})}),r.jsx(V.Code,{children:`
import { Card, Button } from "@ui";
// ProductGrid
export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

// ProductCard
function ProductCard({ product, onAddToCart }) {
  const {
    name,
    price,
    image,
    rating,
    reviews,
    inStock = true,
    discount = 0,
  } = product;

  const originalPrice = discount > 0 ? price / (1 - discount / 100) : null;

  return (
    <Card className={\`product-card \${!inStock ? "out-of-stock" : ""}\`}>
      <ProductImage
        src={image}
        alt={name}
        discount={discount}
        inStock={inStock}
      />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>

        <Rating rating={rating} reviews={reviews} />

        <ProductPrice
          price={price}
          originalPrice={originalPrice}
          currency="USD"
        />

        <Button
          variant="primary"
          size="md"
          className="add-to-cart-btn"
          onClick={() => onAddToCart?.(product)}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>

      {!inStock && <div className="stock-overlay">Out of Stock</div>}
    </Card>
  );
}
// ProductImage
function ProductImage({ src, alt, discount = 0, inStock = true }) {
  return (
    <div className="product-image-wrapper">
      <img
        src={src || "https://via.placeholder.com/300"}
        alt={alt}
        className="product-img"
      />

      {discount > 0 && <span className="discount-badge">-{discount}%</span>}

      {!inStock && <div className="stock-overlay">Out of Stock</div>}
    </div>
  );
}
//ProductPrice
function ProductPrice({ price, originalPrice, currency = "USD" }) {
  const savings = originalPrice ? originalPrice - price : 0;

  return (
    <div className="product-price">
      <span className="current-price">
        {currency} {price.toFixed(2)}
      </span>

      {originalPrice && (
        <>
          <span className="original-price">
            {currency} {originalPrice.toFixed(2)}
          </span>
          <span className="savings">
            Save {currency} {savings.toFixed(2)}
          </span>
        </>
      )}
    </div>
  );
}
//Rating
function Rating({ rating = 0, reviews = 0, size = "medium" }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={\`rating rating-\${size}\`}>
      <div className="stars">
        {"★".repeat(fullStars)}
        {hasHalfStar && "⯪"}
        {"☆".repeat(emptyStars)}
      </div>

      <span className="rating-value">{rating.toFixed(1)}</span>
      {reviews > 0 && (
        <span className="reviews-count">({reviews} reviews)</span>
      )}
    </div>
  );
}

`})]})}const bs={user:{name:"Admin User",avatar:"https://i.pravatar.cc/150?img=5"},sidebarItems:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"products",label:"Products",icon:"📦"},{id:"orders",label:"Orders",icon:"🛒"},{id:"customers",label:"Customers",icon:"👥"},{id:"analytics",label:"Analytics",icon:"📈"}],stats:[{title:"Total Revenue",value:"$45,231",icon:"💰",trend:"up",trendValue:"12%"},{title:"Orders",value:"1,234",icon:"🛒",trend:"up",trendValue:"8%"},{title:"Customers",value:"5,678",icon:"👥",trend:"down",trendValue:"3%"},{title:"Products",value:"890",icon:"📦",trend:"up",trendValue:"5%"}],notifications:5};function x0(){const[i,o]=E.useState("dashboard"),[u,c]=E.useState(!1),[f,p]=E.useState(!1),g=N=>{o(N)},S=()=>{c(N=>!N)},y=()=>{p(N=>!N)},h=()=>{alert("Logged out!"),c(!1)},v=()=>{alert("All notifications marked as read!"),p(!1)};return r.jsxs("div",{className:"dashboard",children:[r.jsx(N0,{items:bs.sidebarItems,activeItem:i,onItemClick:g}),r.jsxs("div",{className:"dashboard-main-content",children:[r.jsx(S0,{user:bs.user,notifications:bs.notifications,onProfileClick:S,onNotificationClick:y}),u&&r.jsx("div",{className:"dashboard-dropdown-menu",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Profile"}),r.jsx("li",{children:"Settings"}),r.jsx("li",{onClick:h,children:"Logout"})]})}),r.jsxs(Lt,{isOpen:f,onClose:()=>p(!1),children:[r.jsx(Lt.Header,{onClose:()=>p(!1),children:"Notifications"}),r.jsx(Lt.Body,{children:r.jsxs("div",{className:"dashboard-modal-body",children:[r.jsxs("div",{className:"dashboard-notification-item",children:[r.jsx("span",{className:"dashboard-notification-icon",children:"🛒"}),r.jsxs("span",{className:"dashboard-notification-text",children:["New order received — ",r.jsx("strong",{children:"#1024"})]})]}),r.jsxs("div",{className:"dashboard-notification-item",children:[r.jsx("span",{className:"dashboard-notification-icon",children:"👤"}),r.jsxs("span",{className:"dashboard-notification-text",children:["User ",r.jsx("strong",{children:"John Doe"})," just registered"]})]}),r.jsxs("div",{className:"dashboard-notification-item",children:[r.jsx("span",{className:"dashboard-notification-icon",children:"💾"}),r.jsx("span",{className:"dashboard-notification-text",children:"Server backup completed successfully"})]})]})}),r.jsxs(Lt.Footer,{children:[r.jsx(oe,{variant:"ghost",onClick:()=>p(!1),children:"Cancel"}),r.jsx(oe,{variant:"primary",onClick:v,children:"Mark all as read"})]})]}),r.jsxs("main",{className:"dashboard-content",children:[i==="dashboard"&&r.jsx("section",{className:"dashboard-stats-grid",children:bs.stats.map((N,D)=>r.jsx(j0,{title:N.title,value:N.value,icon:N.icon,trend:N.trend,trendValue:N.trendValue},D))}),r.jsxs("section",{className:"dashboard-recent-activity",children:[r.jsx("h2",{children:"Recent Activity"}),r.jsxs("p",{children:["Showing data for:"," ",r.jsxs("strong",{children:[i.charAt(0).toUpperCase(),i.slice(1)]})]})]})]}),r.jsx("footer",{className:"dashboard-footer",children:r.jsx("p",{children:"© 2025 Your Company. All rights reserved."})})]})]})}function S0({user:i,notifications:o=0,onProfileClick:u,onNotificationClick:c}){return r.jsxs("header",{className:"dashboard-header",children:[r.jsx(da,{placeholder:"Search...",icon:"🔍"}),r.jsxs("div",{className:"dashboard-user-menu",children:[r.jsxs("div",{className:"dashboard-notification-bell",onClick:c,children:["🔔",o>0&&r.jsx("span",{className:"dashboard-notification-badge",children:o})]}),r.jsxs("div",{className:"dashboard-user-avatar",onClick:u,role:"button",children:[r.jsx("img",{src:i.avatar,alt:i.name}),r.jsx("span",{className:"dashboard-user-name",children:i.name})]})]})]})}function N0({items:i=[],activeItem:o,onItemClick:u}){return r.jsxs("aside",{className:"dashboard-sidebar",children:[r.jsx("div",{className:"logo",children:r.jsx("h1",{children:"Dashboard"})}),r.jsx("nav",{className:"dashboard-nav",children:r.jsx("ul",{className:"dashboard-nav-list",children:i.map(c=>r.jsxs("li",{className:`dashboard-nav-item ${o===c.id?"active":""}`,onClick:()=>u(c.id),role:"button",children:[r.jsx("span",{className:"dashboard-nav-icon",children:c.icon}),r.jsx("span",{className:"dashboard-nav-label",children:c.label})]},c.id))})})]})}function j0({title:i,value:o,icon:u,trend:c,trendValue:f}){const p=c==="up",g=p?"dashboard-trend-up":"dashboard-trend-down",S=p?"↗️":"↘️";return r.jsxs($,{className:"dashboard-stat-card",children:[r.jsx("div",{className:"dashboard-stat-icon",children:u}),r.jsxs("div",{className:"dashboard-stat-info",children:[r.jsx("h3",{className:"dashboard-stat-title",children:i}),r.jsx("div",{className:"dashboard-stat-value",children:o})]}),r.jsxs("div",{className:`dashboard-trend ${g}`,children:[r.jsx("span",{className:"dashboard-trend-icon",children:S}),r.jsx("span",{className:"dashboard-trend-value",children:f})]})]})}function C0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:3,title:"Dashboard Layout"}),r.jsx(V.Description,{children:`
// Dashboard.jsx
function Dashboard() {
  // TODO:
  // Layout với:
  // - Sidebar (navigation)
  // - Header (user menu, notifications)
  // - Main content area
  // - Footer
  
  return (
    <div className="dashboard">
      {/* Your code */}
    </div>
  );
}

// Sidebar.jsx
function Sidebar({ items, activeItem, onItemClick }) {
  // TODO:
  // - Logo
  // - Navigation items
  // - Active state
  // - Icons cho mỗi item
  
  return (
    <aside className="sidebar">
      {/* Your code */}
    </aside>
  );
}

// Header.jsx
function Header({ user, notifications, onProfileClick, onNotificationClick }) {
  // TODO:
  // - Search bar
  // - Notification bell với badge count
  // - User menu dropdown
  
  return (
    <header className="header">
      {/* Your code */}
    </header>
  );
}

// StatCard.jsx
function StatCard({ title, value, icon, trend, trendValue }) {
  // TODO:
  // - Icon
  // - Title
  // - Large value number
  // - Trend indicator (up/down arrow với color)
  // - Trend percentage
  
  return (
    <div className="stat-card">
      {/* Your code */}
    </div>
  );
}

// Demo usage
const dashboardData = {
  user: {
    name: 'Admin User',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  sidebarItems: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'orders', label: 'Orders', icon: '🛒' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' }
  ],
  stats: [
    { title: 'Total Revenue', value: '$45,231', icon: '💰', trend: 'up', trendValue: '12%' },
    { title: 'Orders', value: '1,234', icon: '🛒', trend: 'up', trendValue: '8%' },
    { title: 'Customers', value: '5,678', icon: '👥', trend: 'down', trendValue: '3%' },
    { title: 'Products', value: '890', icon: '📦', trend: 'up', trendValue: '5%' }
  ]
};

`}),r.jsx(V.Demo,{children:r.jsx(x0,{})}),r.jsx(V.Code,{children:`
import { Card, Input, Button, Modal } from "@ui";
import { useState } from "react";
import { dashboardData } from "../data/dashboardData";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNavClick = (id) => {
    setActiveItem(id);
  };

  const handleProfileClick = () => {
    setShowUserMenu((prev) => !prev);
  };

  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleLogout = () => {
    alert("Logged out!");
    setShowUserMenu(false);
  };

  const markAllAsRead = () => {
    alert("All notifications marked as read!");
    setShowNotifications(false);
  };

  return (
    <div className="dashboard">
      <Sidebar
        items={dashboardData.sidebarItems}
        activeItem={activeItem}
        onItemClick={handleNavClick}
      />

      <div className="dashboard-main-content">
        <Header
          user={dashboardData.user}
          notifications={dashboardData.notifications}
          onProfileClick={handleProfileClick}
          onNotificationClick={handleNotificationClick}
        />

        {/* User Menu Dropdown */}
        {showUserMenu && (
          <div className="dashboard-dropdown-menu">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}

        {/* Notifications Modal */}
        <Modal
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
        >
          <Modal.Header onClose={() => setShowNotifications(false)}>
            Notifications
          </Modal.Header>
          <Modal.Body>
            <div className="dashboard-modal-body">
              <div className="dashboard-notification-item">
                <span className="dashboard-notification-icon">🛒</span>
                <span className="dashboard-notification-text">
                  New order received — <strong>#1024</strong>
                </span>
              </div>

              <div className="dashboard-notification-item">
                <span className="dashboard-notification-icon">👤</span>
                <span className="dashboard-notification-text">
                  User <strong>John Doe</strong> just registered
                </span>
              </div>

              <div className="dashboard-notification-item">
                <span className="dashboard-notification-icon">💾</span>
                <span className="dashboard-notification-text">
                  Server backup completed successfully
                </span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="ghost" onClick={() => setShowNotifications(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          </Modal.Footer>
        </Modal>
        <main className="dashboard-content">
          {activeItem === "dashboard" && (
            <section className="dashboard-stats-grid">
              {dashboardData.stats.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  trend={stat.trend}
                  trendValue={stat.trendValue}
                />
              ))}
            </section>
          )}

          <section className="dashboard-recent-activity">
            <h2>Recent Activity</h2>
            <p>
              Showing data for:{" "}
              <strong>
                {activeItem.charAt(0).toUpperCase()}
                {activeItem.slice(1)}
              </strong>
            </p>
          </section>
        </main>

        <footer className="dashboard-footer">
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

/* Header Component */
function Header({
  user,
  notifications = 0,
  onProfileClick,
  onNotificationClick,
}) {
  return (
    <header className="dashboard-header">
      <Input placeholder="Search..." icon="🔍" />

      <div className="dashboard-user-menu">
        <div
          className="dashboard-notification-bell"
          onClick={onNotificationClick}
        >
          🔔
          {notifications > 0 && (
            <span className="dashboard-notification-badge">
              {notifications}
            </span>
          )}
        </div>

        <div
          className="dashboard-user-avatar"
          onClick={onProfileClick}
          role="button"
        >
          <img src={user.avatar} alt={user.name} />
          <span className="dashboard-user-name">{user.name}</span>
        </div>
      </div>
    </header>
  );
}

/* Sidebar Component */
function Sidebar({ items = [], activeItem, onItemClick }) {
  return (
    <aside className="dashboard-sidebar">
      <div className="logo">
        <h1>Dashboard</h1>
      </div>

      <nav className="dashboard-nav">
        <ul className="dashboard-nav-list">
          {items.map((item) => (
            <li
              key={item.id}
              className={\`dashboard-nav-item \${
                activeItem === item.id ? "active" : ""
              }\`}
              onClick={() => onItemClick(item.id)}
              role="button"
            >
              <span className="dashboard-nav-icon">{item.icon}</span>
              <span className="dashboard-nav-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

/* StatCard Component */
function StatCard({ title, value, icon, trend, trendValue }) {
  const isUp = trend === "up";
  const trendColor = isUp ? "dashboard-trend-up" : "dashboard-trend-down";
  const trendIcon = isUp ? "↗️" : "↘️";

  return (
    <Card className="dashboard-stat-card">
      <div className="dashboard-stat-icon">{icon}</div>

      <div className="dashboard-stat-info">
        <h3 className="dashboard-stat-title">{title}</h3>
        <div className="dashboard-stat-value">{value}</div>
      </div>

      <div className={\`dashboard-trend \${trendColor}\`}>
        <span className="dashboard-trend-icon">{trendIcon}</span>
        <span className="dashboard-trend-value">{trendValue}</span>
      </div>
    </Card>
  );
}

`})]})}const E0=[{value:"vn",label:"Vietnam"},{value:"us",label:"United States"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"}];function A0(){const[i,o]=E.useState({email:"",password:"",country:"",agreedToTerms:!1}),[u,c]=E.useState({}),f=y=>{const{name:h,value:v,type:N,checked:D}=y.target;o(q=>({...q,[h]:N==="checkbox"?D:v}))},p=()=>{o({email:"",password:"",country:"",agreedToTerms:!1}),c({})},g=()=>{const y={};return i.email.includes("@")||(y.email="Invalid email"),i.password.length<6&&(y.password="Password too short"),i.country||(y.country="Please select a country"),i.agreedToTerms||(y.terms="You must agree to terms"),y},S=y=>{const h=g();if(Object.keys(h).length>0){c(h);return}p(),alert("🎉 Registration successful!")};return r.jsxs("div",{className:"form-page",children:[r.jsx("h2",{className:"form-title",children:"Register Account"}),r.jsxs(T0,{onSubmit:S,children:[r.jsx(lu,{label:"Email",required:!0,error:u.email,children:r.jsx(Lm,{type:"email",name:"email",placeholder:"Enter your email",icon:"📧",value:i.email,onChange:f})}),r.jsx(lu,{label:"Password",required:!0,error:u.password,children:r.jsx(Lm,{type:"password",name:"password",placeholder:"Enter password",icon:"🔒",value:i.password,onChange:f})}),r.jsx(lu,{label:"Country",error:u.country,children:r.jsx(w0,{name:"country",options:E0,value:i.country,onChange:f,placeholder:"Select country"})}),r.jsx(D0,{label:"I agree to terms and conditions",name:"agreedToTerms",checked:i.agreedToTerms,onChange:f}),u.terms&&r.jsx("div",{className:"form-error",children:u.terms}),r.jsx("button",{className:"submit-btn",type:"submit",children:"Register"})]})]})}function T0({onSubmit:i,children:o}){const u=c=>{c.preventDefault();const f=new FormData(c.target);i(f)};return r.jsx("form",{className:"form",onSubmit:u,children:o})}function lu({label:i,error:o,required:u,children:c}){return r.jsxs("div",{className:`form-field ${o?"has-error":""}`,children:[i&&r.jsxs("label",{className:"form-label",children:[i," ",u&&r.jsx("span",{className:"required-indicator",children:"*"})]}),r.jsx("div",{className:"form-input",children:c}),o&&r.jsx("div",{className:"form-error",children:o})]})}function Lm({type:i="text",placeholder:o,value:u,onChange:c,error:f,icon:p,...g}){return r.jsxs("div",{className:`input-wrapper ${f?"error":""}`,children:[p&&r.jsx("span",{className:"input-icon",children:p}),r.jsx("input",{className:"input-element",type:i,placeholder:o,value:u,onChange:c,...g})]})}function w0({options:i=[],value:o,onChange:u,placeholder:c,...f}){return r.jsxs("select",{className:"select-element",value:o,onChange:u,...f,children:[r.jsx("option",{value:"",children:c||"Select an option"}),i.map((p,g)=>r.jsx("option",{value:p.value||p.code,children:p.label||p.name},g))]})}function D0({label:i,checked:o,onChange:u,...c}){return r.jsxs("label",{className:"checkbox",children:[r.jsx("input",{type:"checkbox",checked:o,onChange:u,...c}),r.jsx("span",{className:"checkbox-custom"}),r.jsx("span",{className:"checkbox-label",children:i})]})}function O0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:4,title:"Form Components (Challenge)"}),r.jsx(V.Description,{children:`
// Form.jsx
function Form({ onSubmit, children }) {
  // TODO:
  // - Handle form submission
  // - Prevent default
  // - Pass handleSubmit down via children composition
  
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

// FormField.jsx
function FormField({ label, error, required, children }) {
  // TODO:
  // - Label với required indicator
  // - Children (input component)
  // - Error message
  
  return (
    <div className="form-field">
      {/* Your code */}
    </div>
  );
}

// Input.jsx
function Input({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon,
  ...props 
}) {
  // TODO:
  // - Input với all native props
  // - Icon (left/right)
  // - Error state styling
  
  return (
    <div className="input-wrapper">
      {/* Your code */}
    </div>
  );
}

// Select.jsx
function Select({ options, value, onChange, placeholder, ...props }) {
  // TODO:
  // - Select với options
  // - Placeholder option
  // - Custom styling
  
  return (
    <select value={value} onChange={onChange} {...props}>
      {/* Your code */}
    </select>
  );
}

// Checkbox.jsx
function Checkbox({ label, checked, onChange, ...props }) {
  // TODO:
  // - Custom styled checkbox
  // - Label
  
  return (
    <label className="checkbox">
      {/* Your code */}
    </label>
  );
}

// Usage Example
function RegistrationForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <FormField label="Email" required error={errors.email}>
        <Input
          type="email"
          placeholder="Enter your email"
          icon="📧"
          value={email}
          onChange={handleEmailChange}
        />
      </FormField>
      
      <FormField label="Password" required>
        <Input
          type="password"
          placeholder="Enter password"
          icon="🔒"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormField>
      
      <FormField label="Country">
        <Select
          options={countries}
          value={country}
          onChange={handleCountryChange}
          placeholder="Select country"
        />
      </FormField>
      
      <Checkbox
        label="I agree to terms and conditions"
        checked={agreedToTerms}
        onChange={handleTermsChange}
      />
      
      <Button type="submit" variant="primary">
        Register
      </Button>
    </Form>
  );
}

`}),r.jsx(V.Demo,{children:r.jsx(A0,{})}),r.jsx(V.Code,{children:`
import { useState } from "react";
import { countries } from "../data/countries";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      country: "",
      agreedToTerms: false,
    });
    setErrors({});
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Password too short";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.agreedToTerms) newErrors.terms = "You must agree to terms";
    return newErrors;
  };

  const handleSubmit = (formDataObj) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    resetForm();
    alert("🎉 Registration successful!");
  };

  return (
    <div className="form-page">
      <h2 className="form-title">Register Account</h2>
      <Form onSubmit={handleSubmit}>
        <FormField label="Email" required error={errors.email}>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            icon="📧"
            value={formData.email}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Password" required error={errors.password}>
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            icon="🔒"
            value={formData.password}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Country" error={errors.country}>
          <Select
            name="country"
            options={countries}
            value={formData.country}
            onChange={handleChange}
            placeholder="Select country"
          />
        </FormField>

        <Checkbox
          label="I agree to terms and conditions"
          name="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleChange}
        />
        {errors.terms && <div className="form-error">{errors.terms}</div>}

        <button className="submit-btn" type="submit">
          Register
        </button>
      </Form>
    </div>
  );
}

export default RegistrationForm;

//Form
function Form({ onSubmit, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

//FormField
function FormField({ label, error, required, children }) {
  return (
    <div className={\`form-field \${error ? "has-error" : ""}\`}>
      {label && (
        <label className="form-label">
          {label} {required && <span className="required-indicator">*</span>}
        </label>
      )}
      <div className="form-input">{children}</div>
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}
//Input
function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  ...props
}) {
  return (
    <div className={\`input-wrapper \${error ? "error" : ""}\`}>
      {icon && <span className="input-icon">{icon}</span>}
      <input
        className="input-element"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
//Select
function Select({ options = [], value, onChange, placeholder, ...props }) {
  return (
    <select
      className="select-element"
      value={value}
      onChange={onChange}
      {...props}
    >
      <option value="">{placeholder || "Select an option"}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value || opt.code}>
          {opt.label || opt.name}
        </option>
      ))}
    </select>
  );
}

//Checkbox
function Checkbox({ label, checked, onChange, ...props }) {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} {...props} />
      <span className="checkbox-custom" />
      <span className="checkbox-label">{label}</span>
    </label>
  );
}

`})]})}const R0={1:f0,2:b0,3:C0,4:O0},k0=()=>r.jsxs("div",{className:"day-content",children:[r.jsxs("div",{className:"day-header",children:[r.jsxs("div",{className:"day-header-content",children:[r.jsx(Pl,{size:32,color:"#00D9FF"}),r.jsxs("div",{children:[r.jsx("h1",{className:"day-title",children:"Ngày 3"}),r.jsx("p",{className:"day-subtitle",children:"Components Fundamentals"})]})]}),r.jsxs("section",{className:"lesson-goal",children:[r.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Hiểu sâu về Function Components"}),r.jsx("li",{children:"Mastering Props: passing data, prop types, default props"}),r.jsx("li",{children:"Props Destructuring cho code sạch hơn"}),r.jsx("li",{children:"Children prop và component composition"}),r.jsx("li",{children:"Prop Drilling: vấn đề và giải pháp cơ bản"})]})]})]}),r.jsx("div",{className:"exercises-list",children:Array.from({length:4},(i,o)=>{const u=R0[o+1];return u?r.jsx(u,{},o):null})})]}),pu=E.createContext(),_0={info:"ℹ️",success:"✅",warning:"⚠️",error:"❌"},z0={info:"alert-info",success:"alert-success",warning:"alert-warning",error:"alert-error"};function Je({children:i,variant:o="info",dismissible:u=!1,autoDismiss:c=0}){const[f,p]=E.useState(!0);return E.useEffect(()=>{if(c>0&&f){const g=setTimeout(()=>{p(!1)},c);return()=>clearTimeout(g)}},[c,f]),f?r.jsx(pu.Provider,{value:{variant:o,dismissible:u,setIsOpen:p},children:r.jsx("div",{className:`alert ${z0[o]}`,children:i})}):null}Je.Icon=function(){const{variant:o}=E.useContext(pu);return r.jsx("span",{className:"alert-icon",children:_0[o]})};Je.Title=function({children:o}){return r.jsx("h3",{className:"alert-title",children:o})};Je.Description=function({children:o}){return r.jsx("p",{className:"alert-description",children:o})};Je.CloseButton=function(){const{dismissible:o,setIsOpen:u}=E.useContext(pu);return o?r.jsx("button",{className:"alert-close",onClick:()=>u(!1),"aria-label":"Close alert",children:"X"}):null};function M0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:1,title:"Alert/Toast System (Compound Components)"}),r.jsx(V.Description,{children:`
// TODO: Implement compound components Alert system

// Alert.jsx
function Alert({ children, variant = 'info', dismissible = false }) {
  // TODO:
  // - Context để share state
  // - Auto dismiss sau X seconds (optional)
  // - Variants: info, success, warning, error
}

Alert.Icon = function AlertIcon({ children }) {
  // TODO: Render icon based on variant from context
}

Alert.Title = function AlertTitle({ children }) {
  // TODO: Render title
}

Alert.Description = function AlertDescription({ children }) {
  // TODO: Render description
}

Alert.CloseButton = function AlertCloseButton() {
  // TODO: Dismiss button
}

// Usage
<Alert variant="success" dismissible>
  <Alert.Icon />
  <div>
    <Alert.Title>Success!</Alert.Title>
    <Alert.Description>
      Your changes have been saved.
    </Alert.Description>
  </div>
  <Alert.CloseButton />
</Alert>


`}),r.jsx(V.Demo,{children:r.jsxs("div",{className:"grid grid-cols-1",children:[r.jsxs(Je,{variant:"info",dismissible:!0,autoDismiss:5e3,children:[r.jsx(Je.Icon,{}),r.jsxs("div",{children:[r.jsx(Je.Title,{children:"Information"}),r.jsxs(Je.Description,{children:["This is an informational message for the user."," ",r.jsx("strong",{children:"Auto Dismiss after 5s"})]})]}),r.jsx(Je.CloseButton,{})]}),r.jsxs(Je,{variant:"success",dismissible:!0,children:[r.jsx(Je.Icon,{}),r.jsxs("div",{children:[r.jsx(Je.Title,{children:"Success!"}),r.jsx(Je.Description,{children:"Your changes have been saved successfully."})]}),r.jsx(Je.CloseButton,{})]}),r.jsxs(Je,{variant:"error",children:[r.jsx(Je.Icon,{}),r.jsxs("div",{children:[r.jsx(Je.Title,{children:"Error!"}),r.jsx(Je.Description,{children:"Something went wrong, please try again later."})]})]})]})}),r.jsx(V.Code,{children:`
// Alert.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AlertContext = createContext();

// Icon map
const ICONS = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
};

const VARIANT_CLASSES = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

function Alert({
  children,
  variant = "info",
  dismissible = false,
  autoDismiss = 0, // ms, 0 = không tự đóng
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Auto dismiss
  useEffect(() => {
    if (autoDismiss > 0 && isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, autoDismiss);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, isOpen]);

  if (!isOpen) return null;

  return (
    <AlertContext.Provider value={{ variant, dismissible, setIsOpen }}>
      <div className={\`alert \${VARIANT_CLASSES[variant]}\`}>{children}</div>
    </AlertContext.Provider>
  );
}

// Sub-components
Alert.Icon = function AlertIcon() {
  const { variant } = useContext(AlertContext);
  return <span className="alert-icon">{ICONS[variant]}</span>;
};

Alert.Title = function AlertTitle({ children }) {
  return <h3 className="alert-title">{children}</h3>;
};

Alert.Description = function AlertDescription({ children }) {
  return <p className="alert-description">{children}</p>;
};

Alert.CloseButton = function AlertCloseButton() {
  const { dismissible, setIsOpen } = useContext(AlertContext);

  if (!dismissible) return null;

  return (
    <button
      className="alert-close"
      onClick={() => setIsOpen(false)}
      aria-label="Close alert"
    >
      X
    </button>
  );
};

export default Alert;

        `})]})}const Kn=E.createContext();function it({children:i,onComplete:o}){const[u,c]=E.useState([]),[f,p]=E.useState(0),[g,S]=E.useState({}),y=u.length,h=u[f],A={steps:u,currentStep:h,currentIndex:f,totalSteps:y,registerStep:(T,_)=>{c(O=>O.some(L=>L.id===T)?O:[...O,{id:T,title:_}])},next:()=>{f<y-1?p(T=>T+1):o&&o(g)},prev:()=>{f>0&&p(T=>T-1)},jumpTo:T=>{const _=u.findIndex(O=>O.id===T);_!==-1&&p(_)},formData:g,updateFormData:(T,_)=>{S(O=>({...O,[T]:_}))}};return r.jsx(Kn.Provider,{value:A,children:r.jsx("div",{className:"wizard",children:i})})}it.Steps=function({children:o}){const{steps:u,currentIndex:c}=E.useContext(Kn);return r.jsx("div",{className:"wizard-steps",children:E.Children.map(o,f=>{const p=u.findIndex(y=>y.id===f.props.stepId),g=p===c,S=p<c;return E.cloneElement(f,{isActive:g,isCompleted:S})})})};it.Step=function({stepId:o,title:u,isActive:c,isCompleted:f}){const{registerStep:p,jumpTo:g,steps:S}=E.useContext(Kn);E.useEffect(()=>{p(o,u)},[o,u,p]);const y=["step",c?"active":"",f?"completed":""].filter(Boolean).join(" "),h=S.findIndex(v=>v.id===o)+1;return r.jsxs("div",{className:y,onClick:()=>f&&g(o),children:[r.jsx("div",{className:"step-number",children:h}),r.jsx("div",{className:"step-label",children:u})]})};it.Panels=function({children:o}){const{currentStep:u}=E.useContext(Kn);return r.jsx("div",{className:"wizard-panels",children:E.Children.map(o,c=>c.props.stepId===u?.id?c:null)})};it.Panel=function({children:o}){const{formData:u,updateFormData:c}=E.useContext(Kn),f=E.Children.map(o,p=>typeof p=="object"?E.cloneElement(p,{formData:u,updateFormData:c}):p);return r.jsx("div",{className:"wizard-panel",children:f})};it.Navigation=function(){const{currentIndex:o,totalSteps:u,prev:c,next:f}=E.useContext(Kn);return r.jsxs("div",{className:"wizard-navigation",children:[r.jsx("button",{className:"btn btn-secondary",onClick:c,disabled:o===0,children:"← Previous"}),o<u-1?r.jsx("button",{className:"btn btn-primary",onClick:f,children:"Next →"}):r.jsx("button",{className:"btn btn-primary",onClick:f,children:"Submit ✅"})]})};function U0({formData:i,updateFormData:o}){return r.jsxs("div",{className:"form-group",children:[r.jsx("h2",{children:"Account Information"}),r.jsx("input",{name:"username",placeholder:"Username",value:i.username||"",onChange:u=>o("username",u.target.value)}),r.jsx("input",{type:"password",name:"password",placeholder:"Password",value:i.password||"",onChange:u=>o("password",u.target.value)})]})}function B0({formData:i,updateFormData:o}){return r.jsxs("div",{className:"form-group",children:[r.jsx("h2",{children:"Profile Details"}),r.jsx("input",{name:"fullName",placeholder:"Full Name",value:i.fullName||"",onChange:u=>o("fullName",u.target.value)}),r.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:i.email||"",onChange:u=>o("email",u.target.value)})]})}function L0({formData:i}){return r.jsxs("div",{className:"form-group review",children:[r.jsx("h2",{children:"Review & Submit"}),r.jsxs("div",{className:"summary",children:[r.jsxs("p",{children:[r.jsx("b",{children:"Username:"})," ",i.username]}),r.jsxs("p",{children:[r.jsx("b",{children:"Full Name:"})," ",i.fullName]}),r.jsxs("p",{children:[r.jsx("b",{children:"Email:"})," ",i.email]})]})]})}function H0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:2,title:"Wizard/Stepper (Compound Components)"}),r.jsx(V.Description,{children:`
// TODO: Multi-step form wizard

function Wizard({ children, onComplete }) {
  // TODO:
  // - Track current step
  // - Navigation (next, prev, jump to step)
  // - Validation before next
  // - Progress indicator
}

Wizard.Steps = function WizardSteps({ children }) {
  // TODO: Render step indicators
}

Wizard.Step = function WizardStep({ children, stepId, title }) {
  // TODO: Individual step indicator
}

Wizard.Panels = function WizardPanels({ children }) {
  // TODO: Container for panels
}

Wizard.Panel = function WizardPanel({ children, stepId }) {
  // TODO: Content for each step
}

Wizard.Navigation = function WizardNavigation() {
  // TODO: Previous, Next, Submit buttons
}

// Usage
<Wizard onComplete={handleComplete}>
  <Wizard.Steps>
    <Wizard.Step stepId={1} title="Account" />
    <Wizard.Step stepId={2} title="Profile" />
    <Wizard.Step stepId={3} title="Review" />
  </Wizard.Steps>

  <Wizard.Panels>
    <Wizard.Panel stepId={1}>
      <h2>Account Information</h2>
      {/* Form fields */}
    </Wizard.Panel>

    <Wizard.Panel stepId={2}>
      <h2>Profile Details</h2>
      {/* Form fields */}
    </Wizard.Panel>

    <Wizard.Panel stepId={3}>
      <h2>Review & Submit</h2>
      {/* Summary */}
    </Wizard.Panel>
  </Wizard.Panels>

  <Wizard.Navigation />
</Wizard>

`}),r.jsx(V.Demo,{children:r.jsxs(it,{onComplete:i=>{console.log(i)},children:[r.jsxs(it.Steps,{children:[r.jsx(it.Step,{stepId:1,title:"Account"}),r.jsx(it.Step,{stepId:2,title:"Profile"}),r.jsx(it.Step,{stepId:3,title:"Review"})]}),r.jsxs(it.Panels,{children:[r.jsx(it.Panel,{stepId:1,children:r.jsx(U0,{})}),r.jsx(it.Panel,{stepId:2,children:r.jsx(B0,{})}),r.jsx(it.Panel,{stepId:3,children:r.jsx(L0,{})})]}),r.jsx(it.Navigation,{})]})}),r.jsx(V.Code,{children:`
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WizardContext = createContext();

export function Wizard({ children, onComplete }) {
  const [steps, setSteps] = useState([]); // [{id, title}]
  const [currentIndex, setCurrentIndex] = useState(0); // index thay vì id
  const [formData, setFormData] = useState({});

  const totalSteps = steps.length;
  const currentStep = steps[currentIndex]; // object {id, title}

  const registerStep = (id, title) => {
    setSteps((prev) => {
      if (prev.some((s) => s.id === id)) return prev;
      return [...prev, { id, title }];
    });
  };

  const next = () => {
    if (currentIndex < totalSteps - 1) setCurrentIndex((i) => i + 1);
    else if (onComplete) onComplete(formData);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const jumpTo = (id) => {
    const targetIndex = steps.findIndex((s) => s.id === id);
    if (targetIndex !== -1) setCurrentIndex(targetIndex);
  };

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const value = {
    steps,
    currentStep,
    currentIndex,
    totalSteps,
    registerStep,
    next,
    prev,
    jumpTo,
    formData,
    updateFormData,
  };

  return (
    <WizardContext.Provider value={value}>
      <div className="wizard">{children}</div>
    </WizardContext.Provider>
  );
}

// --- Steps Header ---
Wizard.Steps = function WizardSteps({ children }) {
  const { steps, currentIndex } = useContext(WizardContext);

  return (
    <div className="wizard-steps">
      {Children.map(children, (child) => {
        const stepIndex = steps.findIndex((s) => s.id === child.props.stepId);
        const isActive = stepIndex === currentIndex;
        const isCompleted = stepIndex < currentIndex;
        return cloneElement(child, { isActive, isCompleted });
      })}
    </div>
  );
};

// --- Step Item ---
Wizard.Step = function WizardStep({ stepId, title, isActive, isCompleted }) {
  const { registerStep, jumpTo, steps } = useContext(WizardContext);

  useEffect(() => {
    registerStep(stepId, title);
  }, [stepId, title, registerStep]);

  const classes = [
    "step",
    isActive ? "active" : "",
    isCompleted ? "completed" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const stepIndex = steps.findIndex((s) => s.id === stepId) + 1;
  return (
    <div className={classes} onClick={() => isCompleted && jumpTo(stepId)}>
      <div className="step-number">{stepIndex}</div>
      <div className="step-label">{title}</div>
    </div>
  );
};

// --- Panels Container ---
Wizard.Panels = function WizardPanels({ children }) {
  const { currentStep } = useContext(WizardContext);

  return (
    <div className="wizard-panels">
      {Children.map(children, (child) =>
        child.props.stepId === currentStep?.id ? child : null
      )}
    </div>
  );
};

// --- Panel (with form data support) ---
Wizard.Panel = function WizardPanel({ children }) {
  const { formData, updateFormData } = useContext(WizardContext);

  const enhancedChildren = Children.map(children, (child) =>
    typeof child === "object"
      ? cloneElement(child, { formData, updateFormData })
      : child
  );

  return <div className="wizard-panel">{enhancedChildren}</div>;
};

// --- Navigation ---
Wizard.Navigation = function WizardNavigation() {
  const { currentIndex, totalSteps, prev, next } = useContext(WizardContext);

  return (
    <div className="wizard-navigation">
      <button
        className="btn btn-secondary"
        onClick={prev}
        disabled={currentIndex === 0}
      >
        ← Previous
      </button>

      {currentIndex < totalSteps - 1 ? (
        <button className="btn btn-primary" onClick={next}>
          Next →
        </button>
      ) : (
        <button className="btn btn-primary" onClick={next}>
          Submit ✅
        </button>
      )}
    </div>
  );
};

export function AccountStep({ formData, updateFormData }) {
  return (
    <div className="form-group">
      <h2>Account Information</h2>
      <input
        name="username"
        placeholder="Username"
        value={formData.username || ""}
        onChange={(e) => updateFormData("username", e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password || ""}
        onChange={(e) => updateFormData("password", e.target.value)}
      />
    </div>
  );
}

export function ProfileStep({ formData, updateFormData }) {
  return (
    <div className="form-group">
      <h2>Profile Details</h2>
      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName || ""}
        onChange={(e) => updateFormData("fullName", e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email || ""}
        onChange={(e) => updateFormData("email", e.target.value)}
      />
    </div>
  );
}

export function ReviewStep({ formData }) {
  return (
    <div className="form-group review">
      <h2>Review & Submit</h2>
      <div className="summary">
        <p>
          <b>Username:</b> {formData.username}
        </p>
        <p>
          <b>Full Name:</b> {formData.fullName}
        </p>
        <p>
          <b>Email:</b> {formData.email}
        </p>
      </div>
    </div>
  );
}

`})]})}const xs=new Map;function F0({url:i,children:o}){const[u,c]=E.useState(null),[f,p]=E.useState(!0),[g,S]=E.useState(null),y=E.useCallback(async()=>{const v=new AbortController,N=setTimeout(()=>v.abort(),5e3);try{if(p(!0),S(null),xs.has(i)){c(xs.get(i)),p(!1);return}const D=await fetch(i);if(!D.ok)throw new Error(`HTTP ${D.status}`);const q=await D.json();await new Promise(b=>setTimeout(b,3e3)),c(q),xs.set(i,q)}catch(D){S(D)}finally{clearTimeout(N),p(!1)}},[i]),h=()=>{xs.delete(i),y()};return E.useEffect(()=>{y()},[i,y]),o({data:u,loading:f,error:g,retry:h})}function q0({product:i}){return i?r.jsxs("div",{className:"product-card",children:[r.jsx("img",{src:"https://placehold.co/600x400?text=Product%20Image",alt:i.name,className:"product-image"}),r.jsx("h3",{children:i.title}),r.jsxs("p",{children:["Price: ",r.jsxs("strong",{children:["$",i.price]})]}),r.jsx("p",{children:i.description})]}):null}function G0({width:i="100%",height:o="20px",style:u={}}){return r.jsx("div",{className:"skeleton",style:{width:i,height:o,...u},children:r.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%)"},children:"Loading....."})})}function Y0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:3,title:"Data Fetcher (Render Props)"}),r.jsx(V.Description,{children:`
// TODO: Reusable data fetching component

function DataFetcher({ url, children, method = 'GET', body }) {
  // TODO:
  // - Fetch data from URL
  // - Handle loading, error, success states
  // - Retry functionality
  // - Cache (optional)
  // Pass { data, loading, error, retry } to children
}

// Usage 1: User List
<DataFetcher url="/api/users">
  {({ data, loading, error, retry }) => {
    if (loading) return <Spinner />;
    if (error) return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
    return <UserList users={data} />;
  }}
</DataFetcher>

// Usage 2: Product Details
<DataFetcher url="/api/products/123">
  {({ data: product, loading }) => {
    if (loading) return <Skeleton />;
    return <ProductCard product={product} />;
  }}
</DataFetcher>

`}),r.jsxs(V.Demo,{children:[r.jsx("h3",{children:"Simulate : 5s loading"}),r.jsx("br",{}),r.jsx(F0,{url:"https://fakestoreapi.com/products/1",children:({data:i,loading:o})=>o?r.jsx(G0,{width:"300px",height:"400px"}):r.jsx(q0,{product:i})})]}),r.jsx(V.Code,{children:`
import { useCallback, useEffect, useState } from "react";

// simple in-memory cache (optional)
const cache = new Map();

export function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout
    try {
      setLoading(true);
      setError(null);

      // 🧠 Check cache first
      if (cache.has(url)) {
        setData(cache.get(url));
        setLoading(false);
        return;
      }

      // 🧩 Fetch from API
      const res = await fetch(url);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      const json = await res.json();

      await new Promise((res) => setTimeout(res, 3000));

      // ✅ Save to state + cache
      setData(json);
      cache.set(url, json);
    } catch (err) {
      setError(err);
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [url]);

  // 🔁 Retry handler
  const retry = () => {
    cache.delete(url); // clear cache before retry
    fetchData();
  };

  // 🎬 Fetch once on mount / URL change
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  // 📦 Render Props pattern
  return children({ data, loading, error, retry });
}

`})]})}const un=E.createContext(null),Hm=(i,o)=>o?o.required&&(!i||i==="")?typeof o.required=="string"?o.required:"Trường này là bắt buộc":o.pattern&&i&&!(o.pattern instanceof RegExp?o.pattern:o.pattern.value).test(i)?o.pattern.message||"Định dạng không hợp lệ":o.minLength&&i&&i.length<o.minLength?`Tối thiểu ${o.minLength} ký tự`:o.maxLength&&i&&i.length>o.maxLength?`Tối đa ${o.maxLength} ký tự`:o.validate&&typeof o.validate=="function"?o.validate(i):null:null;function st({onSubmit:i,children:o}){const[u,c]=E.useState({}),[f,p]=E.useState({}),[g,S]=E.useState({}),[y,h]=E.useState(!1),v=E.useRef({}),N=E.useCallback((_,O={})=>{if(v.current[_]=O,!(_ in u)){const L=O.initialValue??(O.type==="checkbox"?!1:"");c(Q=>({...Q,[_]:L})),p(Q=>({...Q,[_]:null})),S(Q=>({...Q,[_]:!1}))}},[u]),D=E.useCallback((_,O)=>{c(Q=>({...Q,[_]:O})),S(Q=>({...Q,[_]:!0}));const L=Hm(O,v.current[_]);p(Q=>({...Q,[_]:L}))},[]),q=()=>{const _={};let O=!0;return Object.keys(v.current).forEach(L=>{const Q=u[L],te=Hm(Q,v.current[L]);_[L]=te,te&&(O=!1)}),p(_),O},b=async _=>{if(_.preventDefault(),S(Object.keys(u).reduce((O,L)=>({...O,[L]:!0}),{})),!!q()){h(!0);try{await i(u)}finally{h(!1)}}},T={values:u,errors:f,touched:g,isSubmitting:y,registerField:N,setFieldValue:D,resetForm:()=>{const _={};Object.keys(v.current).forEach(O=>{const L=v.current[O];_[O]=L.initialValue??(L.type==="checkbox"?!1:"")}),c(_),p({}),S({}),h(!1)}};return r.jsx(un.Provider,{value:T,children:r.jsx("form",{onSubmit:b,noValidate:!0,className:"form-wrapper",children:o})})}st.Field=function({name:o,label:u,rules:c,children:f}){const{values:p,errors:g,touched:S,registerField:y,setFieldValue:h}=E.useContext(un);Lg.useEffect(()=>{y(o,c)},[o,y,c]);const v=p[o]??"",N=S[o]&&g[o],D={value:v,error:N,onChange:q=>{const b=q.target.type==="checkbox"?q.target.checked:q.target.value;h(o,b)}};return r.jsxs("div",{className:"form-group",children:[u&&r.jsx("label",{className:"form-label",children:u}),f(D)]})};st.Input=function({name:o,...u}){const{values:c,setFieldValue:f}=E.useContext(un);return r.jsx("input",{...u,name:o,value:c[o]??"",onChange:p=>f(o,p.target.value),className:"form-input"})};st.Select=function({name:o,options:u,...c}){const{values:f,setFieldValue:p}=E.useContext(un);return r.jsxs("select",{...c,name:o,value:f[o]??"",onChange:g=>p(o,g.target.value),className:"form-select",children:[r.jsx("option",{value:"",children:"Chọn..."}),u.map(g=>r.jsx("option",{value:g.value,children:g.label},g.value))]})};st.Checkbox=function({name:o,label:u,...c}){const{values:f,setFieldValue:p}=E.useContext(un);return r.jsxs("label",{className:"form-checkbox-wrapper",children:[r.jsx("input",{...c,type:"checkbox",name:o,checked:!!f[o],onChange:g=>p(o,g.target.checked),className:"form-checkbox"}),r.jsx("span",{className:"form-checkbox-label",children:u})]})};st.Submit=function({children:o,loading:u}){const{isSubmitting:c}=E.useContext(un),f=u!==void 0?u:c;return r.jsx("button",{type:"submit",disabled:f,className:`form-submit ${f?"form-submit-loading":""}`,children:f?"Đang gửi...":o})};st.Reset=function({children:o}){const{resetForm:u}=E.useContext(un);return r.jsx("button",{type:"button",onClick:u,className:"form-reset",children:o})};const V0=[{value:"vn",label:"Việt Nam"},{value:"us",label:"Hoa Kỳ"},{value:"jp",label:"Nhật Bản"}];function X0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:4,title:"Form Builder (Mixed Patterns - Challenge)"}),r.jsx(V.Description,{children:`
// TODO: Flexible form builder với compound components + render props

// Hàm validate một field
// Cấu trúc các rules
// {
//   required: <true | string>,               // Bắt buộc nhập hay không (có thể là chuỗi thông báo lỗi)
//   minLength: <số>,                         // Độ dài tối thiểu
//   maxLength: <số>,                         // Độ dài tối đa
//   pattern: <RegExp | { value: <RegExp>, message: <string> }> // Kiểm tra định dạng (pattern là một RegExp hoặc object với value và message),
//   validate: <hàm tùy chỉnh(value, formData) => string | null>  // Hàm kiểm tra tuỳ chỉnh
// }

function Form({ onSubmit, children }) {
  // TODO:
  // - Form state management
  // - Validation
  // - Error handling
  // - Submit handling
}

Form.Field = function FormField({ name, label, rules, children }) {
  // TODO:
  // - Register field
  // - Validation
  // - Error display
  // Use render props pattern
}

Form.Input = function FormInput({ name, ...props }) {
  // TODO: Controlled input
}

Form.Select = function FormSelect({ name, options, ...props }) {
  // TODO: Controlled select
}

Form.Checkbox = function FormCheckbox({ name, label, ...props }) {
  // TODO: Controlled checkbox
}

Form.Submit = function FormSubmit({ children, loading }) {
  // TODO: Submit button với loading state
}

Form.Reset = function FormReset({ children }) {
  // TODO: Reset form
}

// Usage
<Form onSubmit={handleSubmit}>
  <Form.Field 
    name="email" 
    label="Email"
    rules={{ required: true, pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ }}
  >
    {({ value, onChange, error }) => (
      <>
        <Form.Input
          name="email"
          type="email"
          value={value}
          onChange={onChange}
        />
        {error && <span className="error">{error}</span>}
      </>
    )}
  </Form.Field>

  <Form.Field name="country" label="Country">
    {({ value, onChange }) => (
      <Form.Select
        name="country"
        value={value}
        onChange={onChange}
        options={countries}
      />
    )}
  </Form.Field>

  <Form.Field name="terms">
    {({ value, onChange }) => (
      <Form.Checkbox
        name="terms"
        checked={value}
        onChange={onChange}
        label="I agree to terms"
      />
    )}
  </Form.Field>

  <Form.Submit>Submit</Form.Submit>
  <Form.Reset>Reset</Form.Reset>
</Form>


`}),r.jsx(V.Demo,{children:r.jsxs(st,{onSubmit:i=>{console.log("Form submitted:",i),alert("Gửi thành công! Xem console để xem dữ liệu.")},children:[r.jsx(st.Field,{name:"email",label:"Email",rules:{required:"Email là bắt buộc",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Email không hợp lệ"}},children:({value:i,onChange:o,error:u})=>r.jsxs(r.Fragment,{children:[r.jsx(st.Input,{name:"email",type:"email",value:i,onChange:o}),u&&r.jsx("span",{style:{color:"red",fontSize:"0.875rem"},children:u})]})}),r.jsx(st.Field,{name:"country",label:"Quốc gia",rules:{required:!0},children:({value:i,onChange:o})=>r.jsx(st.Select,{name:"country",value:i,onChange:o,options:V0})}),r.jsx(st.Field,{name:"terms",rules:{required:"Bạn phải đồng ý điều khoản"},children:({value:i,onChange:o})=>r.jsx(st.Checkbox,{name:"terms",checked:i,onChange:o,label:"Tôi đồng ý với điều khoản sử dụng"})}),r.jsxs("div",{style:{marginTop:"1rem"},children:[r.jsx(st.Submit,{children:"Gửi"}),r.jsx(st.Reset,{children:"Xóa"})]})]})}),r.jsx(V.Code,{children:`
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

// Context để chia sẻ state form
const FormContext = createContext(null);

// Hàm validate một field
const validateField = (value, rules) => {
  if (!rules) return null;

  if (rules.required && (!value || value === "")) {
    return typeof rules.required === "string"
      ? rules.required
      : "Trường này là bắt buộc";
  }

  if (rules.pattern && value) {
    const regex =
      rules.pattern instanceof RegExp ? rules.pattern : rules.pattern.value;
    if (!regex.test(value)) {
      return rules.pattern.message || "Định dạng không hợp lệ";
    }
  }

  if (rules.minLength && value && value.length < rules.minLength) {
    return \`Tối thiểu \${rules.minLength} ký tự\`;
  }

  if (rules.maxLength && value && value.length > rules.maxLength) {
    return \`Tối đa \${rules.maxLength} ký tự\`;
  }

  if (rules.validate && typeof rules.validate === "function") {
    return rules.validate(value);
  }

  return null;
};

// === Form chính ===
export default function Form({ onSubmit, children }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rulesRef = useRef({});

  // Đăng ký field
  const registerField = useCallback(
    (name, rules = {}) => {
      rulesRef.current[name] = rules;

      if (!(name in values)) {
        const initialValue =
          rules.initialValue ?? (rules.type === "checkbox" ? false : "");
        setValues((prev) => ({ ...prev, [name]: initialValue }));
        setErrors((prev) => ({ ...prev, [name]: null }));
        setTouched((prev) => ({ ...prev, [name]: false }));
      }
    },
    [values]
  );

  // Cập nhật giá trị
  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(value, rulesRef.current[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  // Validate toàn bộ form
  const validateAll = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(rulesRef.current).forEach((name) => {
      const value = values[name];
      const error = validateField(value, rulesRef.current[name]);
      newErrors[name] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  // Xử lý submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(
      Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (!validateAll()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    const initial = {};
    Object.keys(rulesRef.current).forEach((name) => {
      const rules = rulesRef.current[name];
      initial[name] =
        rules.initialValue ?? (rules.type === "checkbox" ? false : "");
    });
    setValues(initial);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  const contextValue = {
    values,
    errors,
    touched,
    isSubmitting,
    registerField,
    setFieldValue,
    resetForm,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} noValidate className="form-wrapper">
        {children}
      </form>
    </FormContext.Provider>
  );
}

// === Form.Field (Render Props)  ===
Form.Field = function FormField({ name, label, rules, children }) {
  const { values, errors, touched, registerField, setFieldValue } =
    useContext(FormContext);

  React.useEffect(() => {
    registerField(name, rules);
  }, [name, registerField, rules]);

  const value = values[name] ?? "";
  const error = touched[name] && errors[name];
  const fieldProps = {
    value,
    error,
    onChange: (e) => {
      const val =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setFieldValue(name, val);
    },
  };

  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      {children(fieldProps)}
    </div>
  );
};

// === Form.Input  ===
Form.Input = function FormInput({ name, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <input
      {...props}
      name={name}
      value={values[name] ?? ""}
      onChange={(e) => setFieldValue(name, e.target.value)}
      className="form-input"
    />
  );
};

// === Form.Select  ===
Form.Select = function FormSelect({ name, options, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <select
      {...props}
      name={name}
      value={values[name] ?? ""}
      onChange={(e) => setFieldValue(name, e.target.value)}
      className="form-select"
    >
      <option value="">Chọn...</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

// === Form.Checkbox  ===
Form.Checkbox = function FormCheckbox({ name, label, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <label className="form-checkbox-wrapper">
      <input
        {...props}
        type="checkbox"
        name={name}
        checked={!!values[name]}
        onChange={(e) => setFieldValue(name, e.target.checked)}
        className="form-checkbox"
      />
      <span className="form-checkbox-label">{label}</span>
    </label>
  );
};

// === Form.Submit  ===
Form.Submit = function FormSubmit({ children, loading: loadingProp }) {
  const { isSubmitting } = useContext(FormContext);
  const loading = loadingProp !== undefined ? loadingProp : isSubmitting;

  return (
    <button
      type="submit"
      disabled={loading}
      className={\`form-submit \${loading ? "form-submit-loading" : ""}\`}
    >
      {loading ? "Đang gửi..." : children}
    </button>
  );
};

// === Form.Reset  ===
Form.Reset = function FormReset({ children }) {
  const { resetForm } = useContext(FormContext);

  return (
    <button type="button" onClick={resetForm} className="form-reset">
      {children}
    </button>
  );
};
`})]})}function Z0({items:i,loading:o,hasMore:u,observerRef:c}){return r.jsxs("div",{className:"infinite-list-container",children:[i.map((f,p)=>r.jsxs("div",{className:"infinite-list-item",children:[r.jsxs("h3",{className:"infinite-list-item-title",children:[p+1,". ",f.title||`Item ${f.id}`]}),r.jsx("p",{className:"infinite-list-item-body",children:f.body||"Nội dung mẫu..."})]},p)),o&&i.length===0&&r.jsx(r.Fragment,{children:[...Array(2)].map((f,p)=>r.jsxs("div",{className:"infinite-skeleton",children:[r.jsx("div",{className:"infinite-skeleton-title"}),r.jsx("div",{className:"infinite-skeleton-body"}),r.jsx("div",{className:"infinite-skeleton-body"})]},`skeleton-${p}`))}),o&&i.length>0&&r.jsx("div",{className:"infinite-loading",children:"Đang tải thêm..."}),u&&!o&&r.jsx("div",{ref:c,className:"infinite-observer"}),!u&&i.length>0&&r.jsx("div",{className:"infinite-end",children:"Đã hết dữ liệu (tối đa 10 bài)"})]})}function $0({fetchItems:i,initialItems:o=[]}){const[u,c]=E.useState(o),[f,p]=E.useState(!1),[g,S]=E.useState(!0),[y,h]=E.useState(1),v=E.useRef(null),N=10,D=2,q=E.useCallback(async()=>{if(!(f||!g||u.length>=N)){p(!0);try{const b=await i(y+1,D);if(b&&b.length>0){c(T=>[...T,...b]),h(T=>T+1);const A=u.length+b.length;S(A<N&&b.length===D)}else S(!1)}catch(b){console.error("Lỗi khi tải dữ liệu:",b),S(!1)}finally{p(!1)}}},[y,f,g,u.length,i]);return E.useEffect(()=>{const b=new IntersectionObserver(T=>{T[0].isIntersecting&&g&&!f&&q()},{threshold:.1}),A=v.current;return A&&b.observe(A),()=>{A&&b.unobserve(A)}},[g,f,q]),E.useEffect(()=>{o.length===0&&y===1&&u.length===0&&q()},[o.length,y,u.length,q]),r.jsx(Z0,{items:u,loading:f,hasMore:g,observerRef:v})}function Q0(){return r.jsxs(V,{children:[r.jsx(V.Header,{order:5,title:"Infinite Scroll List (Container/Presentational)"}),r.jsx(V.Description,{children:`
// TODO: Presentational Component
function List({ items, loading, hasMore, observerRef }) {
  // TODO:
  // - Render items
  // - Loading indicator
  // - Observer element for intersection
}

// TODO: Container Component
function InfiniteScrollList({ fetchItems, initialItems = [] }) {
  // TODO:
  // - Manage items state
  // - Intersection Observer setup
  // - Load more when reaching bottom
  // - Handle loading state
  
  return (
    <List
      items={items}
      loading={loading}
      hasMore={hasMore}
      observerRef={observerRef}
    />
  );
}

// Usage
<InfiniteScrollList
  fetchItems={async (page, limit = 2) => {
    const res = await fetch(
      \`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=\${limit}\`
    );
    return await res.json();
  }}
/>

`}),r.jsx(V.Demo,{children:r.jsx($0,{fetchItems:async(i,o=2)=>await(await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${i}&_limit=${o}`)).json()})}),r.jsx(V.Code,{children:`
import { useCallback, useEffect, useRef, useState } from "react";

// === Presentational Component ===
function List({ items, loading, hasMore, observerRef }) {
  return (
    <div className="infinite-list-container">
      {items.map((item, index) => (
        <div key={index} className="infinite-list-item">
          <h3 className="infinite-list-item-title">
             {index + 1}. {item.title || \`Item \${item.id}\`}
          </h3>
          <p className="infinite-list-item-body">
            {item.body || "Nội dung mẫu..."}
          </p>
        </div>
      ))}

      {loading && items.length === 0 && (
        <>
          {[...Array(2)].map((_, i) => (
            <div key={\`skeleton-\${i}\`} className="infinite-skeleton">
              <div className="infinite-skeleton-title"></div>
              <div className="infinite-skeleton-body"></div>
              <div className="infinite-skeleton-body"></div>
            </div>
          ))}
        </>
      )}

      {loading && items.length > 0 && (
        <div className="infinite-loading">Đang tải thêm...</div>
      )}

      {hasMore && !loading && (
        <div ref={observerRef} className="infinite-observer" />
      )}

      {!hasMore && items.length > 0 && (
        <div className="infinite-end">Đã hết dữ liệu (tối đa 10 bài)</div>
      )}
    </div>
  );
}

// === Container Component ===
export default function InfiniteScrollList({ fetchItems, initialItems = [] }) {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const observerRef = useRef(null);

  // Giới hạn: tối đa 10 post → 5 lần fetch (2 post/lần)
  const MAX_POSTS = 10;
  const POSTS_PER_PAGE = 2;

  const loadMore = useCallback(async () => {
    if (loading || !hasMore || items.length >= MAX_POSTS) return;

    setLoading(true);
    try {
      const newItems = await fetchItems(page + 1, POSTS_PER_PAGE);
      if (newItems && newItems.length > 0) {
        setItems((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);

        // Dừng khi đạt 10 bài hoặc không còn dữ liệu
        const totalLoaded = items.length + newItems.length;
        setHasMore(
          totalLoaded < MAX_POSTS && newItems.length === POSTS_PER_PAGE
        );
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, items.length, fetchItems]);

  // Setup IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, loading, loadMore]);

  // Tải lần đầu nếu chưa có data
  useEffect(() => {
    if (initialItems.length === 0 && page === 1 && items.length === 0) {
      loadMore();
    }
  }, [initialItems.length, page, items.length, loadMore]);

  return (
    <List
      items={items}
      loading={loading}
      hasMore={hasMore}
      observerRef={observerRef}
    />
  );
}
`})]})}const K0={1:M0,2:H0,3:Y0,4:X0,5:Q0},J0=()=>r.jsxs("div",{className:"day-content",children:[r.jsxs("div",{className:"day-header",children:[r.jsxs("div",{className:"day-header-content",children:[r.jsx(Pl,{size:32,color:"#00D9FF"}),r.jsxs("div",{children:[r.jsx("h1",{className:"day-title",children:"Ngày 3"}),r.jsx("p",{className:"day-subtitle",children:"Components Fundamentals"})]})]}),r.jsxs("section",{className:"lesson-goal",children:[r.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Master Compound Components pattern"}),r.jsx("li",{children:"Hiểu và implement Render Props pattern"}),r.jsx("li",{children:"Container/Presentational pattern"}),r.jsx("li",{children:"Học cách build flexible và reusable components"}),r.jsx("li",{children:"Tránh prop drilling với composition"})]})]})]}),r.jsx("div",{className:"exercises-list",children:Array.from({length:5},(i,o)=>{const u=K0[o+1];return u?r.jsx(u,{},o):null})})]}),I0=Object.freeze(Object.defineProperty({__proto__:null,Day1:Kb,Day2:i0,Day3:k0,Day4:J0},Symbol.toStringTag,{value:"Module"}));function W0(){const[i,o]=E.useState(!1),[u,c]=E.useState(""),[f,p]=E.useState("option1"),[g,S]=E.useState(!1),[y,h]=E.useState(!1),[v,N]=E.useState("all"),D=[{id:"input",name:"Input",category:"form"},{id:"button",name:"Button",category:"action"},{id:"select",name:"Select",category:"form"},{id:"checkbox",name:"Checkbox",category:"form"},{id:"switch",name:"Switch",category:"form"},{id:"card",name:"Card",category:"layout"},{id:"modal",name:"Modal",category:"overlay"},{id:"tooltip",name:"Tooltip",category:"overlay"}],q=b=>{document.getElementById(b)?.scrollIntoView({behavior:"smooth",block:"start"})};return r.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(180deg, #0a0e1a 0%, #0f172a 100%)"},children:[r.jsxs("header",{style:{padding:"80px 40px",textAlign:"center",background:"linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 163, 204, 0.05) 100%)",borderBottom:"1px solid #1e293b"},children:[r.jsx("h1",{style:{fontSize:"56px",fontWeight:"700",background:"linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"16px"},children:"UI Component Library"}),r.jsx("p",{style:{fontSize:"20px",color:"#94a3b8",maxWidth:"600px",margin:"0 auto 40px"},children:"Modern, beautiful, and fully customizable React components for your next project"}),r.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[r.jsx(oe,{variant:"primary",size:"lg",children:"Get Started"}),r.jsx(oe,{variant:"secondary",size:"lg",children:"View on GitHub"})]})]}),r.jsx("nav",{style:{position:"sticky",top:0,background:"rgba(10, 14, 26, 0.9)",backdropFilter:"blur(12px)",borderBottom:"1px solid #1e293b",padding:"20px 40px",zIndex:100},children:r.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"12px",overflowX:"auto"},children:["all","form","action","layout","overlay"].map(b=>r.jsx(oe,{variant:v===b?"primary":"ghost",size:"sm",onClick:()=>N(b),children:b.charAt(0).toUpperCase()+b.slice(1)},b))})}),r.jsxs("main",{style:{maxWidth:"1200px",margin:"0 auto",padding:"60px 40px"},children:[r.jsxs("section",{style:{marginBottom:"80px"},children:[r.jsx("h2",{style:{fontSize:"32px",fontWeight:"600",color:"#e4e4e7",marginBottom:"32px",textAlign:"center"},children:"Components"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"},children:D.filter(b=>v==="all"||b.category===v).map(b=>r.jsxs($,{style:{cursor:"pointer",textAlign:"center",transition:"transform 0.2s ease"},onClick:()=>q(b.id),onMouseEnter:A=>A.currentTarget.style.transform="translateY(-4px)",onMouseLeave:A=>A.currentTarget.style.transform="translateY(0)",children:[r.jsx("h3",{style:{fontSize:"18px",color:"#e4e4e7",margin:"0 0 8px 0"},children:b.name}),r.jsx("p",{style:{fontSize:"13px",color:"#64748b",margin:0},children:b.category})]},b.id))})]}),r.jsx("section",{id:"input",style:{marginBottom:"80px"},children:r.jsxs($,{children:[r.jsxs($.Header,{children:[r.jsx($.Title,{children:"Input"}),r.jsx($.Subtitle,{children:"Text input fields with labels, icons, and validation"})]}),r.jsx($.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx(da,{label:"Basic Input",placeholder:"Enter text here...",value:u,onChange:b=>c(b.target.value)}),r.jsx(da,{label:"With Helper Text",placeholder:"username",helperText:"Choose a unique username"}),r.jsx(da,{label:"With Error",placeholder:"email@example.com",error:"Invalid email format"}),r.jsx(da,{label:"With Icon",placeholder:"Search...",icon:"🔍"}),r.jsx(da,{label:"Disabled",placeholder:"Cannot edit",disabled:!0})]})})]})}),r.jsx("section",{id:"button",style:{marginBottom:"80px"},children:r.jsxs($,{children:[r.jsxs($.Header,{children:[r.jsx($.Title,{children:"Button"}),r.jsx($.Subtitle,{children:"Multiple variants and sizes for different use cases"})]}),r.jsx($.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#94a3b8",fontSize:"14px",marginBottom:"16px"},children:"Variants"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(oe,{variant:"primary",children:"Primary"}),r.jsx(oe,{variant:"secondary",children:"Secondary"}),r.jsx(oe,{variant:"ghost",children:"Ghost"}),r.jsx(oe,{variant:"danger",children:"Danger"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#94a3b8",fontSize:"14px",marginBottom:"16px"},children:"Sizes"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[r.jsx(oe,{variant:"primary",size:"sm",children:"Small"}),r.jsx(oe,{variant:"primary",size:"md",children:"Medium"}),r.jsx(oe,{variant:"primary",size:"lg",children:"Large"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#94a3b8",fontSize:"14px",marginBottom:"16px"},children:"States"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(oe,{variant:"primary",icon:"✨",children:"With Icon"}),r.jsx(oe,{variant:"primary",loading:!0,children:"Loading"}),r.jsx(oe,{variant:"primary",disabled:!0,children:"Disabled"})]})]})]})})]})}),r.jsx("section",{id:"select",style:{marginBottom:"80px"},children:r.jsxs($,{children:[r.jsxs($.Header,{children:[r.jsx($.Title,{children:"Select"}),r.jsx($.Subtitle,{children:"Dropdown selection with custom styling"})]}),r.jsx($.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx(Kl,{label:"Country",value:f,onChange:b=>p(b.target.value),options:[{value:"vn",label:"Vietnam"},{value:"us",label:"United States"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"},{value:"sg",label:"Singapore"}]}),r.jsx(Kl,{label:"Disabled Select",disabled:!0,options:[{value:"option1",label:"Cannot change"}]})]})})]})}),r.jsx("section",{id:"checkbox",style:{marginBottom:"80px"},children:r.jsxs($,{children:[r.jsxs($.Header,{children:[r.jsx($.Title,{children:"Checkbox"}),r.jsx($.Subtitle,{children:"Selection controls for multiple choices"})]}),r.jsx($.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(sn,{label:"Accept terms and conditions",checked:g,onChange:b=>S(b.target.checked)}),r.jsx(sn,{label:"Subscribe to newsletter"}),r.jsx(sn,{label:"Enable notifications",defaultChecked:!0}),r.jsx(sn,{label:"Disabled option",disabled:!0})]})})]})}),r.jsx("section",{id:"switch",style:{marginBottom:"80px"},children:r.jsxs($,{children:[r.jsxs($.Header,{children:[r.jsx($.Title,{children:"Switch"}),r.jsx($.Subtitle,{children:"Toggle between on/off states"})]}),r.jsx($.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx($l,{label:"Dark mode",checked:y,onChange:b=>h(b.target.checked)}),r.jsx($l,{label:"Auto-save",defaultChecked:!0}),r.jsx($l,{label:"Enable analytics"}),r.jsx($l,{label:"Disabled switch",disabled:!0})]})})]})}),r.jsx("section",{id:"card",style:{marginBottom:"80px"},children:r.jsxs($,{children:[r.jsxs($.Header,{children:[r.jsx($.Title,{children:"Card"}),r.jsx($.Subtitle,{children:"Flexible container for grouping content"})]}),r.jsx($.Content,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:[r.jsxs($,{children:[r.jsx($.Header,{children:r.jsx($.Title,{children:"Basic Card"})}),r.jsx($.Content,{children:r.jsx("p",{style:{margin:0,color:"#94a3b8"},children:"This is a simple card with just content."})})]}),r.jsxs($,{children:[r.jsxs($.Header,{children:[r.jsx($.Title,{children:"With Subtitle"}),r.jsx($.Subtitle,{children:"Additional description"})]}),r.jsx($.Content,{children:r.jsx("p",{style:{margin:0,color:"#94a3b8"},children:"Cards can have subtitles for more context."})})]}),r.jsxs($,{children:[r.jsx($.Header,{children:r.jsx($.Title,{children:"With Footer"})}),r.jsx($.Content,{children:r.jsx("p",{style:{margin:0,color:"#94a3b8"},children:"Add actions in the footer section."})}),r.jsx($.Footer,{children:r.jsx(oe,{variant:"primary",size:"sm",children:"Action"})})]})]})})]})}),r.jsx("section",{id:"modal",style:{marginBottom:"80px"},children:r.jsxs($,{children:[r.jsxs($.Header,{children:[r.jsx($.Title,{children:"Modal"}),r.jsx($.Subtitle,{children:"Overlay dialogs for important information"})]}),r.jsxs($.Content,{children:[r.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:r.jsx(oe,{variant:"primary",onClick:()=>o(!0),children:"Open Modal"})}),r.jsxs(Lt,{isOpen:i,onClose:()=>o(!1),children:[r.jsx(Lt.Header,{onClose:()=>o(!1),children:"Example Modal"}),r.jsx(Lt.Body,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx("p",{style:{color:"#94a3b8",margin:0},children:"This is a modal dialog with custom styling. It includes a header, body, and footer section."}),r.jsx(da,{label:"Your Name",placeholder:"Enter your name"}),r.jsx(sn,{label:"Remember my choice"})]})}),r.jsxs(Lt.Footer,{children:[r.jsx(oe,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),r.jsx(oe,{variant:"primary",onClick:()=>o(!1),children:"Confirm"})]})]})]})]})}),r.jsx("section",{id:"tooltip",style:{marginBottom:"80px"},children:r.jsxs($,{children:[r.jsxs($.Header,{children:[r.jsx($.Title,{children:"Tooltip"}),r.jsx($.Subtitle,{children:"Helpful hints that appear on hover"})]}),r.jsx($.Content,{children:r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(nu,{content:"This is a helpful tooltip",children:r.jsx(oe,{variant:"primary",children:"Hover me"})}),r.jsx(nu,{content:"You can add tooltips to any element",children:r.jsx(oe,{variant:"secondary",children:"Another one"})}),r.jsx(nu,{content:"Tooltips help explain features",children:r.jsx("span",{style:{display:"inline-block",padding:"12px 20px",background:"#1e293b",borderRadius:"8px",color:"#e4e4e7",cursor:"help"},children:"Hover this text"})})]})})]})})]}),r.jsxs("footer",{style:{borderTop:"1px solid #1e293b",padding:"40px",textAlign:"center",color:"#64748b"},children:[r.jsx("p",{style:{margin:"0 0 16px 0"},children:"Built with React • Styled with custom CSS • Open Source"}),r.jsxs("div",{style:{display:"flex",gap:"24px",justifyContent:"center",flexWrap:"wrap"},children:[r.jsx(oe,{variant:"ghost",size:"sm",children:"Documentation"}),r.jsx(oe,{variant:"ghost",size:"sm",children:"GitHub"}),r.jsx(oe,{variant:"ghost",size:"sm",children:"Examples"})]})]})]})}const iu=30,P0=4,ex=()=>{const[i,o]=E.useState(!0),[u,c]=E.useState(1),[f,p]=E.useState(!1),[g,S]=E.useState(!1);E.useEffect(()=>{const D=()=>{const q=window.innerWidth<768;S(q),o(!q)};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const y=D=>{c(D),p(!1),g&&o(!1)},h=()=>{p(!0),c(null),g&&o(!1)},v=Number(100*(P0/iu)).toFixed(2)+"%",N=I0[`Day${u??1}`];return r.jsxs("div",{className:"container",children:[r.jsx("button",{className:"toggle-button",onClick:()=>o(!i),children:i?r.jsx(_m,{size:24}):r.jsx(Dv,{size:24})}),g&&i&&r.jsx("div",{className:"overlay",onClick:()=>o(!1)}),r.jsxs("aside",{className:`sidebar ${i?"sidebar-open":"sidebar-closed"}`,children:[r.jsxs("div",{className:"sidebar-header",children:[r.jsxs("div",{className:"logo-container",children:[r.jsx(Pl,{size:28,color:"#00D9FF"}),r.jsxs("span",{className:"logo",children:[iu," Ngày ReactJS"]})]}),g&&r.jsx("button",{className:"close-button",onClick:()=>o(!1),children:r.jsx(_m,{size:24})})]}),r.jsxs("div",{className:"sidebar-content",children:[r.jsxs("div",{className:"progress-container",children:[r.jsxs("div",{className:"progress-header",children:[r.jsx("span",{className:"progress-text",children:"Tiến độ"}),r.jsx("span",{className:"progress-percent",children:v})]}),r.jsx("div",{className:"progress-bar",style:{"--progress":v},children:r.jsx("div",{className:"progress-fill"})})]}),r.jsxs("nav",{className:"nav",children:[r.jsxs("button",{className:`nav-item ${f?"nav-item-active":""}`,onClick:h,children:[r.jsx("span",{className:"nav-item-number",children:"Danh sách UI"}),f&&r.jsx("div",{className:"active-indicator"})]}),Array.from({length:iu},(D,q)=>q+1).map(D=>r.jsxs("button",{className:`nav-item ${u===D&&!f?"nav-item-active":""}`,onClick:()=>y(D),children:[r.jsxs("span",{className:"nav-item-number",children:["Ngày ",D]}),u===D&&!f&&r.jsx("div",{className:"active-indicator"})]},D))]})]})]}),r.jsx("main",{className:"main",style:{marginLeft:i?"280px":"0",width:i?"calc(100% - 280px)":"100%"},children:f?r.jsx(W0,{}):N?r.jsx(N,{}):r.jsx(Rv,{})})]})};Vg.createRoot(document.getElementById("root")).render(r.jsx(E.StrictMode,{children:r.jsx(nv,{basename:"/react-pure-exercise",children:r.jsx(ex,{})})}));
