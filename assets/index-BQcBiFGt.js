(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const v of f.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function d(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(p){if(p.ep)return;p.ep=!0;const f=d(p);fetch(p.href,f)}})();function getDefaultExportFromCjs(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var jsxRuntime={exports:{}},reactJsxRuntime_production={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactJsxRuntime_production;function requireReactJsxRuntime_production(){if(hasRequiredReactJsxRuntime_production)return reactJsxRuntime_production;hasRequiredReactJsxRuntime_production=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(u,p,f){var v=null;if(f!==void 0&&(v=""+f),p.key!==void 0&&(v=""+p.key),"key"in p){f={};for(var A in p)A!=="key"&&(f[A]=p[A])}else f=p;return p=f.ref,{$$typeof:l,type:u,key:v,ref:p!==void 0?p:null,props:f}}return reactJsxRuntime_production.Fragment=o,reactJsxRuntime_production.jsx=d,reactJsxRuntime_production.jsxs=d,reactJsxRuntime_production}var hasRequiredJsxRuntime;function requireJsxRuntime(){return hasRequiredJsxRuntime||(hasRequiredJsxRuntime=1,jsxRuntime.exports=requireReactJsxRuntime_production()),jsxRuntime.exports}var jsxRuntimeExports=requireJsxRuntime(),client={exports:{}},reactDomClient_production={},scheduler={exports:{}},scheduler_production={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredScheduler_production;function requireScheduler_production(){return hasRequiredScheduler_production||(hasRequiredScheduler_production=1,(function(l){function o(B,G){var Q=B.length;B.push(G);e:for(;0<Q;){var je=Q-1>>>1,me=B[je];if(0<p(me,G))B[je]=G,B[Q]=me,Q=je;else break e}}function d(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var G=B[0],Q=B.pop();if(Q!==G){B[0]=Q;e:for(var je=0,me=B.length,E=me>>>1;je<E;){var F=2*(je+1)-1,Y=B[F],$=F+1,ae=B[$];if(0>p(Y,Q))$<me&&0>p(ae,Y)?(B[je]=ae,B[$]=Q,je=$):(B[je]=Y,B[F]=Q,je=F);else if($<me&&0>p(ae,Q))B[je]=ae,B[$]=Q,je=$;else break e}}return G}function p(B,G){var Q=B.sortIndex-G.sortIndex;return Q!==0?Q:B.id-G.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var v=Date,A=v.now();l.unstable_now=function(){return v.now()-A}}var y=[],x=[],j=1,S=null,w=3,q=!1,h=!1,R=!1,N=!1,T=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function V(B){for(var G=d(x);G!==null;){if(G.callback===null)u(x);else if(G.startTime<=B)u(x),G.sortIndex=G.expirationTime,o(y,G);else break;G=d(x)}}function ne(B){if(R=!1,V(B),!h)if(d(y)!==null)h=!0,de||(de=!0,ie());else{var G=d(x);G!==null&&_e(ne,G.startTime-B)}}var de=!1,K=-1,P=5,W=-1;function ee(){return N?!0:!(l.unstable_now()-W<P)}function se(){if(N=!1,de){var B=l.unstable_now();W=B;var G=!0;try{e:{h=!1,R&&(R=!1,z(K),K=-1),q=!0;var Q=w;try{t:{for(V(B),S=d(y);S!==null&&!(S.expirationTime>B&&ee());){var je=S.callback;if(typeof je=="function"){S.callback=null,w=S.priorityLevel;var me=je(S.expirationTime<=B);if(B=l.unstable_now(),typeof me=="function"){S.callback=me,V(B),G=!0;break t}S===d(y)&&u(y),V(B)}else u(y);S=d(y)}if(S!==null)G=!0;else{var E=d(x);E!==null&&_e(ne,E.startTime-B),G=!1}}break e}finally{S=null,w=Q,q=!1}G=void 0}}finally{G?ie():de=!1}}}var ie;if(typeof L=="function")ie=function(){L(se)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Re=Ge.port2;Ge.port1.onmessage=se,ie=function(){Re.postMessage(null)}}else ie=function(){T(se,0)};function _e(B,G){K=T(function(){B(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return w},l.unstable_next=function(B){switch(w){case 1:case 2:case 3:var G=3;break;default:G=w}var Q=w;w=G;try{return B()}finally{w=Q}},l.unstable_requestPaint=function(){N=!0},l.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=w;w=B;try{return G()}finally{w=Q}},l.unstable_scheduleCallback=function(B,G,Q){var je=l.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?je+Q:je):Q=je,B){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Q+me,B={id:j++,callback:G,priorityLevel:B,startTime:Q,expirationTime:me,sortIndex:-1},Q>je?(B.sortIndex=Q,o(x,B),d(y)===null&&B===d(x)&&(R?(z(K),K=-1):R=!0,_e(ne,Q-je))):(B.sortIndex=me,o(y,B),h||q||(h=!0,de||(de=!0,ie()))),B},l.unstable_shouldYield=ee,l.unstable_wrapCallback=function(B){var G=w;return function(){var Q=w;w=G;try{return B.apply(this,arguments)}finally{w=Q}}}})(scheduler_production)),scheduler_production}var hasRequiredScheduler;function requireScheduler(){return hasRequiredScheduler||(hasRequiredScheduler=1,scheduler.exports=requireScheduler_production()),scheduler.exports}var react={exports:{}},react_production={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReact_production;function requireReact_production(){if(hasRequiredReact_production)return react_production;hasRequiredReact_production=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),v=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),w=Symbol.iterator;function q(E){return E===null||typeof E!="object"?null:(E=w&&E[w]||E["@@iterator"],typeof E=="function"?E:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,N={};function T(E,F,Y){this.props=E,this.context=F,this.refs=N,this.updater=Y||h}T.prototype.isReactComponent={},T.prototype.setState=function(E,F){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,F,"setState")},T.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function z(){}z.prototype=T.prototype;function L(E,F,Y){this.props=E,this.context=F,this.refs=N,this.updater=Y||h}var V=L.prototype=new z;V.constructor=L,R(V,T.prototype),V.isPureReactComponent=!0;var ne=Array.isArray;function de(){}var K={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function W(E,F,Y){var $=Y.ref;return{$$typeof:l,type:E,key:F,ref:$!==void 0?$:null,props:Y}}function ee(E,F){return W(E.type,F,E.props)}function se(E){return typeof E=="object"&&E!==null&&E.$$typeof===l}function ie(E){var F={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Y){return F[Y]})}var Ge=/\/+/g;function Re(E,F){return typeof E=="object"&&E!==null&&E.key!=null?ie(""+E.key):F.toString(36)}function _e(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(de,de):(E.status="pending",E.then(function(F){E.status==="pending"&&(E.status="fulfilled",E.value=F)},function(F){E.status==="pending"&&(E.status="rejected",E.reason=F)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function B(E,F,Y,$,ae){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var he=!1;if(E===null)he=!0;else switch(le){case"bigint":case"string":case"number":he=!0;break;case"object":switch(E.$$typeof){case l:case o:he=!0;break;case j:return he=E._init,B(he(E._payload),F,Y,$,ae)}}if(he)return ae=ae(E),he=$===""?"."+Re(E,0):$,ne(ae)?(Y="",he!=null&&(Y=he.replace(Ge,"$&/")+"/"),B(ae,F,Y,"",function(Ca){return Ca})):ae!=null&&(se(ae)&&(ae=ee(ae,Y+(ae.key==null||E&&E.key===ae.key?"":(""+ae.key).replace(Ge,"$&/")+"/")+he)),F.push(ae)),1;he=0;var Ve=$===""?".":$+":";if(ne(E))for(var De=0;De<E.length;De++)$=E[De],le=Ve+Re($,De),he+=B($,F,Y,le,ae);else if(De=q(E),typeof De=="function")for(E=De.call(E),De=0;!($=E.next()).done;)$=$.value,le=Ve+Re($,De++),he+=B($,F,Y,le,ae);else if(le==="object"){if(typeof E.then=="function")return B(_e(E),F,Y,$,ae);throw F=String(E),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return he}function G(E,F,Y){if(E==null)return E;var $=[],ae=0;return B(E,$,"","",function(le){return F.call(Y,le,ae++)}),$}function Q(E){if(E._status===-1){var F=E._result;F=F(),F.then(function(Y){(E._status===0||E._status===-1)&&(E._status=1,E._result=Y)},function(Y){(E._status===0||E._status===-1)&&(E._status=2,E._result=Y)}),E._status===-1&&(E._status=0,E._result=F)}if(E._status===1)return E._result.default;throw E._result}var je=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},me={map:G,forEach:function(E,F,Y){G(E,function(){F.apply(this,arguments)},Y)},count:function(E){var F=0;return G(E,function(){F++}),F},toArray:function(E){return G(E,function(F){return F})||[]},only:function(E){if(!se(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return react_production.Activity=S,react_production.Children=me,react_production.Component=T,react_production.Fragment=d,react_production.Profiler=p,react_production.PureComponent=L,react_production.StrictMode=u,react_production.Suspense=y,react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,react_production.__COMPILER_RUNTIME={__proto__:null,c:function(E){return K.H.useMemoCache(E)}},react_production.cache=function(E){return function(){return E.apply(null,arguments)}},react_production.cacheSignal=function(){return null},react_production.cloneElement=function(E,F,Y){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var $=R({},E.props),ae=E.key;if(F!=null)for(le in F.key!==void 0&&(ae=""+F.key),F)!P.call(F,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&F.ref===void 0||($[le]=F[le]);var le=arguments.length-2;if(le===1)$.children=Y;else if(1<le){for(var he=Array(le),Ve=0;Ve<le;Ve++)he[Ve]=arguments[Ve+2];$.children=he}return W(E.type,ae,$)},react_production.createContext=function(E){return E={$$typeof:v,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},react_production.createElement=function(E,F,Y){var $,ae={},le=null;if(F!=null)for($ in F.key!==void 0&&(le=""+F.key),F)P.call(F,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ae[$]=F[$]);var he=arguments.length-2;if(he===1)ae.children=Y;else if(1<he){for(var Ve=Array(he),De=0;De<he;De++)Ve[De]=arguments[De+2];ae.children=Ve}if(E&&E.defaultProps)for($ in he=E.defaultProps,he)ae[$]===void 0&&(ae[$]=he[$]);return W(E,le,ae)},react_production.createRef=function(){return{current:null}},react_production.forwardRef=function(E){return{$$typeof:A,render:E}},react_production.isValidElement=se,react_production.lazy=function(E){return{$$typeof:j,_payload:{_status:-1,_result:E},_init:Q}},react_production.memo=function(E,F){return{$$typeof:x,type:E,compare:F===void 0?null:F}},react_production.startTransition=function(E){var F=K.T,Y={};K.T=Y;try{var $=E(),ae=K.S;ae!==null&&ae(Y,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(de,je)}catch(le){je(le)}finally{F!==null&&Y.types!==null&&(F.types=Y.types),K.T=F}},react_production.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},react_production.use=function(E){return K.H.use(E)},react_production.useActionState=function(E,F,Y){return K.H.useActionState(E,F,Y)},react_production.useCallback=function(E,F){return K.H.useCallback(E,F)},react_production.useContext=function(E){return K.H.useContext(E)},react_production.useDebugValue=function(){},react_production.useDeferredValue=function(E,F){return K.H.useDeferredValue(E,F)},react_production.useEffect=function(E,F){return K.H.useEffect(E,F)},react_production.useEffectEvent=function(E){return K.H.useEffectEvent(E)},react_production.useId=function(){return K.H.useId()},react_production.useImperativeHandle=function(E,F,Y){return K.H.useImperativeHandle(E,F,Y)},react_production.useInsertionEffect=function(E,F){return K.H.useInsertionEffect(E,F)},react_production.useLayoutEffect=function(E,F){return K.H.useLayoutEffect(E,F)},react_production.useMemo=function(E,F){return K.H.useMemo(E,F)},react_production.useOptimistic=function(E,F){return K.H.useOptimistic(E,F)},react_production.useReducer=function(E,F,Y){return K.H.useReducer(E,F,Y)},react_production.useRef=function(E){return K.H.useRef(E)},react_production.useState=function(E){return K.H.useState(E)},react_production.useSyncExternalStore=function(E,F,Y){return K.H.useSyncExternalStore(E,F,Y)},react_production.useTransition=function(){return K.H.useTransition()},react_production.version="19.2.0",react_production}var hasRequiredReact;function requireReact(){return hasRequiredReact||(hasRequiredReact=1,react.exports=requireReact_production()),react.exports}var reactDom={exports:{}},reactDom_production={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactDom_production;function requireReactDom_production(){if(hasRequiredReactDom_production)return reactDom_production;hasRequiredReactDom_production=1;var l=requireReact();function o(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)x+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(o(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function f(y,x,j){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:S==null?null:""+S,children:y,containerInfo:x,implementation:j}}var v=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,reactDom_production.createPortal=function(y,x){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(o(299));return f(y,x,null,j)},reactDom_production.flushSync=function(y){var x=v.T,j=u.p;try{if(v.T=null,u.p=2,y)return y()}finally{v.T=x,u.p=j,u.d.f()}},reactDom_production.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(y,x))},reactDom_production.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},reactDom_production.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var j=x.as,S=A(j,x.crossOrigin),w=typeof x.integrity=="string"?x.integrity:void 0,q=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;j==="style"?u.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:q}):j==="script"&&u.d.X(y,{crossOrigin:S,integrity:w,fetchPriority:q,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},reactDom_production.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var j=A(x.as,x.crossOrigin);u.d.M(y,{crossOrigin:j,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(y)},reactDom_production.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var j=x.as,S=A(j,x.crossOrigin);u.d.L(y,j,{crossOrigin:S,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},reactDom_production.preloadModule=function(y,x){if(typeof y=="string")if(x){var j=A(x.as,x.crossOrigin);u.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:j,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(y)},reactDom_production.requestFormReset=function(y){u.d.r(y)},reactDom_production.unstable_batchedUpdates=function(y,x){return y(x)},reactDom_production.useFormState=function(y,x,j){return v.H.useFormState(y,x,j)},reactDom_production.useFormStatus=function(){return v.H.useHostTransitionStatus()},reactDom_production.version="19.2.0",reactDom_production}var hasRequiredReactDom;function requireReactDom(){if(hasRequiredReactDom)return reactDom.exports;hasRequiredReactDom=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),reactDom.exports=requireReactDom_production(),reactDom.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactDomClient_production;function requireReactDomClient_production(){if(hasRequiredReactDomClient_production)return reactDomClient_production;hasRequiredReactDomClient_production=1;var l=requireScheduler(),o=requireReact(),d=requireReactDom();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return y(s),e;if(i===a)return y(s),t;i=i.sibling}throw Error(u(188))}if(n.return!==a.return)n=s,a=i;else{for(var c=!1,m=s.child;m;){if(m===n){c=!0,n=s,a=i;break}if(m===a){c=!0,a=s,n=i;break}m=m.sibling}if(!c){for(m=i.child;m;){if(m===n){c=!0,n=i,a=s;break}if(m===a){c=!0,a=i,n=s;break}m=m.sibling}if(!c)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,w=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case T:return"Profiler";case N:return"StrictMode";case ne:return"Suspense";case de:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case h:return"Portal";case L:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}var _e=Array.isArray,B=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},je=[],me=-1;function E(e){return{current:e}}function F(e){0>me||(e.current=je[me],je[me]=null,me--)}function Y(e,t){me++,je[me]=e.current,e.current=t}var $=E(null),ae=E(null),le=E(null),he=E(null);function Ve(e,t){switch(Y(le,t),Y(ae,e),Y($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Cd(t),e=Nd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F($),Y($,e)}function De(){F($),F(ae),F(le)}function Ca(e){e.memoizedState!==null&&Y(he,e);var t=$.current,n=Nd(t,e.type);t!==n&&(Y(ae,e),Y($,n))}function vs(e){ae.current===e&&(F($),F(ae)),he.current===e&&(F(he),fs._currentValue=Q)}var Mr,eo;function En(e){if(Mr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mr=t&&t[1]||"",eo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mr+e+eo}var Ur=!1;function Fr(e,t){if(!e||Ur)return"";Ur=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(O){var _=O}Reflect.construct(e,[],H)}else{try{H.call()}catch(O){_=O}e.call(H.prototype)}}else{try{throw Error()}catch(O){_=O}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(O){if(O&&_&&typeof O.stack=="string")return[O.stack,_.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],m=i[1];if(c&&m){var g=c.split(`
`),k=m.split(`
`);for(s=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;s<k.length&&!k[s].includes("DetermineComponentFrameRoot");)s++;if(a===g.length||s===k.length)for(a=g.length-1,s=k.length-1;1<=a&&0<=s&&g[a]!==k[s];)s--;for(;1<=a&&0<=s;a--,s--)if(g[a]!==k[s]){if(a!==1||s!==1)do if(a--,s--,0>s||g[a]!==k[s]){var M=`
`+g[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=s);break}}}finally{Ur=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?En(n):""}function nm(e,t){switch(e.tag){case 26:case 27:case 5:return En(e.type);case 16:return En("Lazy");case 13:return e.child!==t&&t!==null?En("Suspense Fallback"):En("Suspense");case 19:return En("SuspenseList");case 0:case 15:return Fr(e.type,!1);case 11:return Fr(e.type.render,!1);case 1:return Fr(e.type,!0);case 31:return En("Activity");default:return""}}function to(e){try{var t="",n=null;do t+=nm(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Lr=Object.prototype.hasOwnProperty,Hr=l.unstable_scheduleCallback,qr=l.unstable_cancelCallback,am=l.unstable_shouldYield,sm=l.unstable_requestPaint,rt=l.unstable_now,rm=l.unstable_getCurrentPriorityLevel,no=l.unstable_ImmediatePriority,ao=l.unstable_UserBlockingPriority,ys=l.unstable_NormalPriority,im=l.unstable_LowPriority,so=l.unstable_IdlePriority,lm=l.log,om=l.unstable_setDisableYieldValue,Na=null,it=null;function Kt(e){if(typeof lm=="function"&&om(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Na,e)}catch{}}var lt=Math.clz32?Math.clz32:dm,cm=Math.log,um=Math.LN2;function dm(e){return e>>>=0,e===0?32:31-(cm(e)/um|0)|0}var js=256,bs=262144,Es=4194304;function Rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rs(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var s=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~i,a!==0?s=Rn(a):(c&=m,c!==0?s=Rn(c):n||(n=m&~e,n!==0&&(s=Rn(n))))):(m=a&~i,m!==0?s=Rn(m):c!==0?s=Rn(c):n||(n=a&~e,n!==0&&(s=Rn(n)))),s===0?0:t!==0&&t!==s&&(t&i)===0&&(i=s&-s,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:s}function Ta(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ro(){var e=Es;return Es<<=1,(Es&62914560)===0&&(Es=4194304),e}function Gr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Da(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pm(e,t,n,a,s,i){var c=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,g=e.expirationTimes,k=e.hiddenUpdates;for(n=c&~n;0<n;){var M=31-lt(n),H=1<<M;m[M]=0,g[M]=-1;var _=k[M];if(_!==null)for(k[M]=null,M=0;M<_.length;M++){var O=_[M];O!==null&&(O.lane&=-536870913)}n&=~H}a!==0&&io(e,a,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function io(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-lt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function lo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-lt(n),s=1<<a;s&t|e[a]&t&&(e[a]|=t),n&=~s}}function oo(e,t){var n=t&-t;return n=(n&42)!==0?1:Pr(n),(n&(e.suspendedLanes|t))!==0?0:n}function Pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function co(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Zd(e.type))}function uo(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var Qt=Math.random().toString(36).slice(2),$e="__reactFiber$"+Qt,Je="__reactProps$"+Qt,qn="__reactContainer$"+Qt,Vr="__reactEvents$"+Qt,fm="__reactListeners$"+Qt,hm="__reactHandles$"+Qt,mo="__reactResources$"+Qt,Aa="__reactMarker$"+Qt;function $r(e){delete e[$e],delete e[Je],delete e[Vr],delete e[fm],delete e[hm]}function Gn(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qn]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Od(e);e!==null;){if(n=e[$e])return n;e=Od(e)}return t}e=n,n=e.parentNode}return null}function Pn(e){if(e=e[$e]||e[qn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ka(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Yn(e){var t=e[mo];return t||(t=e[mo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[Aa]=!0}var po=new Set,fo={};function Sn(e,t){Vn(e,t),Vn(e+"Capture",t)}function Vn(e,t){for(fo[e]=t,e=0;e<t.length;e++)po.add(t[e])}var xm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ho={},xo={};function gm(e){return Lr.call(xo,e)?!0:Lr.call(ho,e)?!1:xm.test(e)?xo[e]=!0:(ho[e]=!0,!1)}function Ss(e,t,n){if(gm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Cs(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function _t(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function go(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(c){n=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){if(!e._valueTracker){var t=go(e)?"checked":"value";e._valueTracker=vm(e,t,""+e[t])}}function vo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=go(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ym=/[\n"\\]/g;function xt(e){return e.replace(ym,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xr(e,t,n,a,s,i,c,m){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Zr(e,c,ht(t)):n!=null?Zr(e,c,ht(n)):a!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+ht(m):e.removeAttribute("name")}function yo(e,t,n,a,s,i,c,m){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ir(e);return}n=n!=null?""+ht(n):"",t=t!=null?""+ht(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ir(e)}function Zr(e,t,n){t==="number"&&Ns(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function $n(e,t,n,a){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function jo(e,t,n){if(t!=null&&(t=""+ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ht(n):""}function bo(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(_e(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=ht(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Ir(e)}function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eo(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||jm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ro(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var s in t)a=t[s],t.hasOwnProperty(s)&&n[s]!==a&&Eo(e,s,a)}else for(var i in t)t.hasOwnProperty(i)&&Eo(e,i,t[i])}function Kr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Em=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ts(e){return Em.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var Qr=null;function Jr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xn=null,Zn=null;function So(e){var t=Pn(e);if(t&&(e=t.stateNode)){var n=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Xr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var s=a[Je]||null;if(!s)throw Error(u(90));Xr(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&vo(a)}break e;case"textarea":jo(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}}}var Wr=!1;function Co(e,t,n){if(Wr)return e(t,n);Wr=!0;try{var a=e(t);return a}finally{if(Wr=!1,(Xn!==null||Zn!==null)&&(fr(),Xn&&(t=Xn,e=Zn,Zn=Xn=null,So(t),e)))for(t=0;t<e.length;t++)So(e[t])}}function wa(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Je]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ei=!1;if(zt)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){ei=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{ei=!1}var Jt=null,ti=null,Ds=null;function No(){if(Ds)return Ds;var e,t=ti,n=t.length,a,s="value"in Jt?Jt.value:Jt.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===s[i-a];a++);return Ds=s.slice(e,1<a?1-a:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function To(){return!1}function We(e){function t(n,a,s,i,c){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(i):i[m]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ks:To,this.isPropagationStopped=To,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=We(Cn),Oa=S({},Cn,{view:0,detail:0}),Rm=We(Oa),ni,ai,za,_s=S({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==za&&(za&&e.type==="mousemove"?(ni=e.screenX-za.screenX,ai=e.screenY-za.screenY):ai=ni=0,za=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),Do=We(_s),Sm=S({},_s,{dataTransfer:0}),Cm=We(Sm),Nm=S({},Oa,{relatedTarget:0}),si=We(Nm),Tm=S({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dm=We(Tm),Am=S({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=We(Am),wm=S({},Cn,{data:0}),Ao=We(wm),_m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zm[e])?!!t[e]:!1}function ri(){return Bm}var Mm=S({},Oa,{key:function(e){if(e.key){var t=_m[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Om[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Um=We(Mm),Fm=S({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ko=We(Fm),Lm=S({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),Hm=We(Lm),qm=S({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gm=We(qm),Pm=S({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ym=We(Pm),Vm=S({},Cn,{newState:0,oldState:0}),$m=We(Vm),Im=[9,13,27,32],ii=zt&&"CompositionEvent"in window,Ba=null;zt&&"documentMode"in document&&(Ba=document.documentMode);var Xm=zt&&"TextEvent"in window&&!Ba,wo=zt&&(!ii||Ba&&8<Ba&&11>=Ba),_o=" ",Oo=!1;function zo(e,t){switch(e){case"keyup":return Im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function Zm(e,t){switch(e){case"compositionend":return Bo(t);case"keypress":return t.which!==32?null:(Oo=!0,_o);case"textInput":return e=t.data,e===_o&&Oo?null:e;default:return null}}function Km(e,t){if(Kn)return e==="compositionend"||!ii&&zo(e,t)?(e=No(),Ds=ti=Jt=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wo&&t.locale!=="ko"?null:t.data;default:return null}}var Qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qm[e.type]:t==="textarea"}function Uo(e,t,n,a){Xn?Zn?Zn.push(a):Zn=[a]:Xn=a,t=br(t,"onChange"),0<t.length&&(n=new ws("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ma=null,Ua=null;function Jm(e){yd(e,0)}function Os(e){var t=ka(e);if(vo(t))return e}function Fo(e,t){if(e==="change")return t}var Lo=!1;if(zt){var li;if(zt){var oi="oninput"in document;if(!oi){var Ho=document.createElement("div");Ho.setAttribute("oninput","return;"),oi=typeof Ho.oninput=="function"}li=oi}else li=!1;Lo=li&&(!document.documentMode||9<document.documentMode)}function qo(){Ma&&(Ma.detachEvent("onpropertychange",Go),Ua=Ma=null)}function Go(e){if(e.propertyName==="value"&&Os(Ua)){var t=[];Uo(t,Ua,e,Jr(e)),Co(Jm,t)}}function Wm(e,t,n){e==="focusin"?(qo(),Ma=t,Ua=n,Ma.attachEvent("onpropertychange",Go)):e==="focusout"&&qo()}function ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Os(Ua)}function tp(e,t){if(e==="click")return Os(t)}function np(e,t){if(e==="input"||e==="change")return Os(t)}function ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:ap;function Fa(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var s=n[a];if(!Lr.call(t,s)||!ot(e[s],t[s]))return!1}return!0}function Po(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yo(e,t){var n=Po(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Po(n)}}function Vo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $o(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ns(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ns(e.document)}return t}function ci(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var sp=zt&&"documentMode"in document&&11>=document.documentMode,Qn=null,ui=null,La=null,di=!1;function Io(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||Qn==null||Qn!==Ns(a)||(a=Qn,"selectionStart"in a&&ci(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Fa(La,a)||(La=a,a=br(ui,"onSelect"),0<a.length&&(t=new ws("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Qn)))}function Nn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:Nn("Animation","AnimationEnd"),animationiteration:Nn("Animation","AnimationIteration"),animationstart:Nn("Animation","AnimationStart"),transitionrun:Nn("Transition","TransitionRun"),transitionstart:Nn("Transition","TransitionStart"),transitioncancel:Nn("Transition","TransitionCancel"),transitionend:Nn("Transition","TransitionEnd")},mi={},Xo={};zt&&(Xo=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Tn(e){if(mi[e])return mi[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xo)return mi[e]=t[n];return e}var Zo=Tn("animationend"),Ko=Tn("animationiteration"),Qo=Tn("animationstart"),rp=Tn("transitionrun"),ip=Tn("transitionstart"),lp=Tn("transitioncancel"),Jo=Tn("transitionend"),Wo=new Map,pi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pi.push("scrollEnd");function Ct(e,t){Wo.set(e,t),Sn(t,[e])}var zs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gt=[],Wn=0,fi=0;function Bs(){for(var e=Wn,t=fi=Wn=0;t<e;){var n=gt[t];gt[t++]=null;var a=gt[t];gt[t++]=null;var s=gt[t];gt[t++]=null;var i=gt[t];if(gt[t++]=null,a!==null&&s!==null){var c=a.pending;c===null?s.next=s:(s.next=c.next,c.next=s),a.pending=s}i!==0&&ec(n,s,i)}}function Ms(e,t,n,a){gt[Wn++]=e,gt[Wn++]=t,gt[Wn++]=n,gt[Wn++]=a,fi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function hi(e,t,n,a){return Ms(e,t,n,a),Us(e)}function Dn(e,t){return Ms(e,null,null,t),Us(e)}function ec(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var s=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&t!==null&&(s=31-lt(n),e=i.hiddenUpdates,a=e[s],a===null?e[s]=[t]:a.push(t),t.lane=n|536870912),i):null}function Us(e){if(50<ls)throw ls=0,Sl=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ea={};function op(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,a){return new op(e,t,n,a)}function xi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bt(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function tc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fs(e,t,n,a,s,i){var c=0;if(a=e,typeof e=="function")xi(e)&&(c=1);else if(typeof e=="string")c=ff(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=ct(31,n,t,s),e.elementType=W,e.lanes=i,e;case R:return An(n.children,s,i,t);case N:c=8,s|=24;break;case T:return e=ct(12,n,t,s|2),e.elementType=T,e.lanes=i,e;case ne:return e=ct(13,n,t,s),e.elementType=ne,e.lanes=i,e;case de:return e=ct(19,n,t,s),e.elementType=de,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:c=10;break e;case z:c=9;break e;case V:c=11;break e;case K:c=14;break e;case P:c=16,a=null;break e}c=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=ct(c,n,t,s),t.elementType=e,t.type=a,t.lanes=i,t}function An(e,t,n,a){return e=ct(7,e,a,t),e.lanes=n,e}function gi(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function nc(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function vi(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ac=new WeakMap;function vt(e,t){if(typeof e=="object"&&e!==null){var n=ac.get(e);return n!==void 0?n:(t={value:e,source:t,stack:to(t)},ac.set(e,t),t)}return{value:e,source:t,stack:to(t)}}var ta=[],na=0,Ls=null,Ha=0,yt=[],jt=0,Wt=null,Dt=1,At="";function Mt(e,t){ta[na++]=Ha,ta[na++]=Ls,Ls=e,Ha=t}function sc(e,t,n){yt[jt++]=Dt,yt[jt++]=At,yt[jt++]=Wt,Wt=e;var a=Dt;e=At;var s=32-lt(a)-1;a&=~(1<<s),n+=1;var i=32-lt(t)+s;if(30<i){var c=s-s%5;i=(a&(1<<c)-1).toString(32),a>>=c,s-=c,Dt=1<<32-lt(t)+s|n<<s|a,At=i+e}else Dt=1<<i|n<<s|a,At=e}function yi(e){e.return!==null&&(Mt(e,1),sc(e,1,0))}function ji(e){for(;e===Ls;)Ls=ta[--na],ta[na]=null,Ha=ta[--na],ta[na]=null;for(;e===Wt;)Wt=yt[--jt],yt[jt]=null,At=yt[--jt],yt[jt]=null,Dt=yt[--jt],yt[jt]=null}function rc(e,t){yt[jt++]=Dt,yt[jt++]=At,yt[jt++]=Wt,Dt=t.id,At=t.overflow,Wt=e}var Ie=null,Ae=null,xe=!1,en=null,bt=!1,bi=Error(u(519));function tn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qa(vt(t,e)),bi}function ic(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[$e]=e,t[Je]=a,n){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(n=0;n<cs.length;n++)ue(cs[n],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),yo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),bo(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Rd(t.textContent,n)?(a.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),a.onScroll!=null&&ue("scroll",t),a.onScrollEnd!=null&&ue("scrollend",t),a.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||tn(e,!0)}function lc(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:Ie=Ie.return}}function aa(e){if(e!==Ie)return!1;if(!xe)return lc(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ll(e.type,e.memoizedProps)),n=!n),n&&Ae&&tn(e),lc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ae=_d(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ae=_d(e)}else t===27?(t=Ae,xn(e.type)?(e=Yl,Yl=null,Ae=e):Ae=t):Ae=Ie?Rt(e.stateNode.nextSibling):null;return!0}function kn(){Ae=Ie=null,xe=!1}function Ei(){var e=en;return e!==null&&(at===null?at=e:at.push.apply(at,e),en=null),e}function qa(e){en===null?en=[e]:en.push(e)}var Ri=E(null),wn=null,Ut=null;function nn(e,t,n){Y(Ri,t._currentValue),t._currentValue=n}function Ft(e){e._currentValue=Ri.current,F(Ri)}function Si(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ci(e,t,n,a){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var c=s.child;i=i.firstContext;e:for(;i!==null;){var m=i;i=s;for(var g=0;g<t.length;g++)if(m.context===t[g]){i.lanes|=n,m=i.alternate,m!==null&&(m.lanes|=n),Si(i.return,n,e),a||(c=null);break e}i=m.next}}else if(s.tag===18){if(c=s.return,c===null)throw Error(u(341));c.lanes|=n,i=c.alternate,i!==null&&(i.lanes|=n),Si(c,n,e),c=null}else c=s.child;if(c!==null)c.return=s;else for(c=s;c!==null;){if(c===e){c=null;break}if(s=c.sibling,s!==null){s.return=c.return,c=s;break}c=c.return}s=c}}function sa(e,t,n,a){e=null;for(var s=t,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var c=s.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var m=s.type;ot(s.pendingProps.value,c.value)||(e!==null?e.push(m):e=[m])}}else if(s===he.current){if(c=s.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(fs):e=[fs])}s=s.return}e!==null&&Ci(t,e,n,a),t.flags|=262144}function Hs(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _n(e){wn=e,Ut=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return oc(wn,e)}function qs(e,t){return wn===null&&_n(e),oc(e,t)}function oc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ut===null){if(e===null)throw Error(u(308));Ut=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ut=Ut.next=t;return n}var cp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},up=l.unstable_scheduleCallback,dp=l.unstable_NormalPriority,Ue={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ni(){return{controller:new cp,data:new Map,refCount:0}}function Ga(e){e.refCount--,e.refCount===0&&up(dp,function(){e.controller.abort()})}var Pa=null,Ti=0,ra=0,ia=null;function mp(e,t){if(Pa===null){var n=Pa=[];Ti=0,ra=kl(),ia={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ti++,t.then(cc,cc),t}function cc(){if(--Ti===0&&Pa!==null){ia!==null&&(ia.status="fulfilled");var e=Pa;Pa=null,ra=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(a.status="rejected",a.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),a}var uc=B.S;B.S=function(e,t){Iu=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&mp(e,t),uc!==null&&uc(e,t)};var On=E(null);function Di(){var e=On.current;return e!==null?e:Te.pooledCache}function Gs(e,t){t===null?Y(On,On.current):Y(On,t.pool)}function dc(){var e=Di();return e===null?null:{parent:Ue._currentValue,pool:e}}var la=Error(u(460)),Ai=Error(u(474)),Ps=Error(u(542)),Ys={then:function(){}};function mc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ot,Ot),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hc(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=a}},function(a){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hc(e),e}throw Bn=t,la}}function zn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Bn=n,la):n}}var Bn=null;function fc(){if(Bn===null)throw Error(u(459));var e=Bn;return Bn=null,e}function hc(e){if(e===la||e===Ps)throw Error(u(483))}var oa=null,Ya=0;function Vs(e){var t=Ya;return Ya+=1,oa===null&&(oa=[]),pc(oa,e,t)}function Va(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $s(e,t){throw t.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xc(e){function t(C,b){if(e){var D=C.deletions;D===null?(C.deletions=[b],C.flags|=16):D.push(b)}}function n(C,b){if(!e)return null;for(;b!==null;)t(C,b),b=b.sibling;return null}function a(C){for(var b=new Map;C!==null;)C.key!==null?b.set(C.key,C):b.set(C.index,C),C=C.sibling;return b}function s(C,b){return C=Bt(C,b),C.index=0,C.sibling=null,C}function i(C,b,D){return C.index=D,e?(D=C.alternate,D!==null?(D=D.index,D<b?(C.flags|=67108866,b):D):(C.flags|=67108866,b)):(C.flags|=1048576,b)}function c(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,b,D,U){return b===null||b.tag!==6?(b=gi(D,C.mode,U),b.return=C,b):(b=s(b,D),b.return=C,b)}function g(C,b,D,U){var J=D.type;return J===R?M(C,b,D.props.children,U,D.key):b!==null&&(b.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===P&&zn(J)===b.type)?(b=s(b,D.props),Va(b,D),b.return=C,b):(b=Fs(D.type,D.key,D.props,null,C.mode,U),Va(b,D),b.return=C,b)}function k(C,b,D,U){return b===null||b.tag!==4||b.stateNode.containerInfo!==D.containerInfo||b.stateNode.implementation!==D.implementation?(b=vi(D,C.mode,U),b.return=C,b):(b=s(b,D.children||[]),b.return=C,b)}function M(C,b,D,U,J){return b===null||b.tag!==7?(b=An(D,C.mode,U,J),b.return=C,b):(b=s(b,D),b.return=C,b)}function H(C,b,D){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=gi(""+b,C.mode,D),b.return=C,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case q:return D=Fs(b.type,b.key,b.props,null,C.mode,D),Va(D,b),D.return=C,D;case h:return b=vi(b,C.mode,D),b.return=C,b;case P:return b=zn(b),H(C,b,D)}if(_e(b)||ie(b))return b=An(b,C.mode,D,null),b.return=C,b;if(typeof b.then=="function")return H(C,Vs(b),D);if(b.$$typeof===L)return H(C,qs(C,b),D);$s(C,b)}return null}function _(C,b,D,U){var J=b!==null?b.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return J!==null?null:m(C,b,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case q:return D.key===J?g(C,b,D,U):null;case h:return D.key===J?k(C,b,D,U):null;case P:return D=zn(D),_(C,b,D,U)}if(_e(D)||ie(D))return J!==null?null:M(C,b,D,U,null);if(typeof D.then=="function")return _(C,b,Vs(D),U);if(D.$$typeof===L)return _(C,b,qs(C,D),U);$s(C,D)}return null}function O(C,b,D,U,J){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return C=C.get(D)||null,m(b,C,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case q:return C=C.get(U.key===null?D:U.key)||null,g(b,C,U,J);case h:return C=C.get(U.key===null?D:U.key)||null,k(b,C,U,J);case P:return U=zn(U),O(C,b,D,U,J)}if(_e(U)||ie(U))return C=C.get(D)||null,M(b,C,U,J,null);if(typeof U.then=="function")return O(C,b,D,Vs(U),J);if(U.$$typeof===L)return O(C,b,D,qs(b,U),J);$s(b,U)}return null}function I(C,b,D,U){for(var J=null,ge=null,Z=b,oe=b=0,fe=null;Z!==null&&oe<D.length;oe++){Z.index>oe?(fe=Z,Z=null):fe=Z.sibling;var ve=_(C,Z,D[oe],U);if(ve===null){Z===null&&(Z=fe);break}e&&Z&&ve.alternate===null&&t(C,Z),b=i(ve,b,oe),ge===null?J=ve:ge.sibling=ve,ge=ve,Z=fe}if(oe===D.length)return n(C,Z),xe&&Mt(C,oe),J;if(Z===null){for(;oe<D.length;oe++)Z=H(C,D[oe],U),Z!==null&&(b=i(Z,b,oe),ge===null?J=Z:ge.sibling=Z,ge=Z);return xe&&Mt(C,oe),J}for(Z=a(Z);oe<D.length;oe++)fe=O(Z,C,oe,D[oe],U),fe!==null&&(e&&fe.alternate!==null&&Z.delete(fe.key===null?oe:fe.key),b=i(fe,b,oe),ge===null?J=fe:ge.sibling=fe,ge=fe);return e&&Z.forEach(function(bn){return t(C,bn)}),xe&&Mt(C,oe),J}function te(C,b,D,U){if(D==null)throw Error(u(151));for(var J=null,ge=null,Z=b,oe=b=0,fe=null,ve=D.next();Z!==null&&!ve.done;oe++,ve=D.next()){Z.index>oe?(fe=Z,Z=null):fe=Z.sibling;var bn=_(C,Z,ve.value,U);if(bn===null){Z===null&&(Z=fe);break}e&&Z&&bn.alternate===null&&t(C,Z),b=i(bn,b,oe),ge===null?J=bn:ge.sibling=bn,ge=bn,Z=fe}if(ve.done)return n(C,Z),xe&&Mt(C,oe),J;if(Z===null){for(;!ve.done;oe++,ve=D.next())ve=H(C,ve.value,U),ve!==null&&(b=i(ve,b,oe),ge===null?J=ve:ge.sibling=ve,ge=ve);return xe&&Mt(C,oe),J}for(Z=a(Z);!ve.done;oe++,ve=D.next())ve=O(Z,C,oe,ve.value,U),ve!==null&&(e&&ve.alternate!==null&&Z.delete(ve.key===null?oe:ve.key),b=i(ve,b,oe),ge===null?J=ve:ge.sibling=ve,ge=ve);return e&&Z.forEach(function(Cf){return t(C,Cf)}),xe&&Mt(C,oe),J}function Ne(C,b,D,U){if(typeof D=="object"&&D!==null&&D.type===R&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case q:e:{for(var J=D.key;b!==null;){if(b.key===J){if(J=D.type,J===R){if(b.tag===7){n(C,b.sibling),U=s(b,D.props.children),U.return=C,C=U;break e}}else if(b.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===P&&zn(J)===b.type){n(C,b.sibling),U=s(b,D.props),Va(U,D),U.return=C,C=U;break e}n(C,b);break}else t(C,b);b=b.sibling}D.type===R?(U=An(D.props.children,C.mode,U,D.key),U.return=C,C=U):(U=Fs(D.type,D.key,D.props,null,C.mode,U),Va(U,D),U.return=C,C=U)}return c(C);case h:e:{for(J=D.key;b!==null;){if(b.key===J)if(b.tag===4&&b.stateNode.containerInfo===D.containerInfo&&b.stateNode.implementation===D.implementation){n(C,b.sibling),U=s(b,D.children||[]),U.return=C,C=U;break e}else{n(C,b);break}else t(C,b);b=b.sibling}U=vi(D,C.mode,U),U.return=C,C=U}return c(C);case P:return D=zn(D),Ne(C,b,D,U)}if(_e(D))return I(C,b,D,U);if(ie(D)){if(J=ie(D),typeof J!="function")throw Error(u(150));return D=J.call(D),te(C,b,D,U)}if(typeof D.then=="function")return Ne(C,b,Vs(D),U);if(D.$$typeof===L)return Ne(C,b,qs(C,D),U);$s(C,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,b!==null&&b.tag===6?(n(C,b.sibling),U=s(b,D),U.return=C,C=U):(n(C,b),U=gi(D,C.mode,U),U.return=C,C=U),c(C)):n(C,b)}return function(C,b,D,U){try{Ya=0;var J=Ne(C,b,D,U);return oa=null,J}catch(Z){if(Z===la||Z===Ps)throw Z;var ge=ct(29,Z,null,C.mode);return ge.lanes=U,ge.return=C,ge}finally{}}}var Mn=xc(!0),gc=xc(!1),an=!1;function ki(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var s=a.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),a.pending=t,t=Us(e),ec(e,null,n),t}return Ms(e,a,t,n),Us(e)}function $a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,lo(e,n)}}function _i(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?s=i=c:i=i.next=c,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Oi=!1;function Ia(){if(Oi){var e=ia;if(e!==null)throw e}}function Xa(e,t,n,a){Oi=!1;var s=e.updateQueue;an=!1;var i=s.firstBaseUpdate,c=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var g=m,k=g.next;g.next=null,c===null?i=k:c.next=k,c=g;var M=e.alternate;M!==null&&(M=M.updateQueue,m=M.lastBaseUpdate,m!==c&&(m===null?M.firstBaseUpdate=k:m.next=k,M.lastBaseUpdate=g))}if(i!==null){var H=s.baseState;c=0,M=k=g=null,m=i;do{var _=m.lane&-536870913,O=_!==m.lane;if(O?(pe&_)===_:(a&_)===_){_!==0&&_===ra&&(Oi=!0),M!==null&&(M=M.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var I=e,te=m;_=t;var Ne=n;switch(te.tag){case 1:if(I=te.payload,typeof I=="function"){H=I.call(Ne,H,_);break e}H=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=te.payload,_=typeof I=="function"?I.call(Ne,H,_):I,_==null)break e;H=S({},H,_);break e;case 2:an=!0}}_=m.callback,_!==null&&(e.flags|=64,O&&(e.flags|=8192),O=s.callbacks,O===null?s.callbacks=[_]:O.push(_))}else O={lane:_,tag:m.tag,payload:m.payload,callback:m.callback,next:null},M===null?(k=M=O,g=H):M=M.next=O,c|=_;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;O=m,m=O.next,O.next=null,s.lastBaseUpdate=O,s.shared.pending=null}}while(!0);M===null&&(g=H),s.baseState=g,s.firstBaseUpdate=k,s.lastBaseUpdate=M,i===null&&(s.shared.lanes=0),dn|=c,e.lanes=c,e.memoizedState=H}}function vc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function yc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vc(n[e],t)}var ca=E(null),Is=E(0);function jc(e,t){e=It,Y(Is,e),Y(ca,t),It=e|t.baseLanes}function zi(){Y(Is,It),Y(ca,ca.current)}function Bi(){It=Is.current,F(ca),F(Is)}var ut=E(null),Et=null;function ln(e){var t=e.alternate;Y(Be,Be.current&1),Y(ut,e),Et===null&&(t===null||ca.current!==null||t.memoizedState!==null)&&(Et=e)}function Mi(e){Y(Be,Be.current),Y(ut,e),Et===null&&(Et=e)}function bc(e){e.tag===22?(Y(Be,Be.current),Y(ut,e),Et===null&&(Et=e)):on()}function on(){Y(Be,Be.current),Y(ut,ut.current)}function dt(e){F(ut),Et===e&&(Et=null),F(Be)}var Be=E(0);function Xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gl(n)||Pl(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lt=0,re=null,Se=null,Fe=null,Zs=!1,ua=!1,Un=!1,Ks=0,Za=0,da=null,fp=0;function Oe(){throw Error(u(321))}function Ui(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Fi(e,t,n,a,s,i){return Lt=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?su:Wi,Un=!1,i=n(a,s),Un=!1,ua&&(i=Rc(t,n,a,s)),Ec(e),i}function Ec(e){B.H=Ja;var t=Se!==null&&Se.next!==null;if(Lt=0,Fe=Se=re=null,Zs=!1,Za=0,da=null,t)throw Error(u(300));e===null||Le||(e=e.dependencies,e!==null&&Hs(e)&&(Le=!0))}function Rc(e,t,n,a){re=e;var s=0;do{if(ua&&(da=null),Za=0,ua=!1,25<=s)throw Error(u(301));if(s+=1,Fe=Se=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}B.H=ru,i=t(n,a)}while(ua);return i}function hp(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Ka(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(re.flags|=1024),t}function Li(){var e=Ks!==0;return Ks=0,e}function Hi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function qi(e){if(Zs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zs=!1}Lt=0,Fe=Se=re=null,ua=!1,Za=Ks=0,da=null}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?re.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Me(){if(Se===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Fe===null?re.memoizedState:Fe.next;if(t!==null)Fe=t,Se=e;else{if(e===null)throw re.alternate===null?Error(u(467)):Error(u(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Fe===null?re.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Qs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ka(e){var t=Za;return Za+=1,da===null&&(da=[]),e=pc(da,e,t),t=re,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?su:Wi),e}function Js(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ka(e);if(e.$$typeof===L)return Xe(e)}throw Error(u(438,String(e)))}function Gi(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=re.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Qs(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ee;return t.index++,n}function Ht(e,t){return typeof t=="function"?t(e):t}function Ws(e){var t=Me();return Pi(t,Se,e)}function Pi(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var s=e.baseQueue,i=a.pending;if(i!==null){if(s!==null){var c=s.next;s.next=i.next,i.next=c}t.baseQueue=s=i,a.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{t=s.next;var m=c=null,g=null,k=t,M=!1;do{var H=k.lane&-536870913;if(H!==k.lane?(pe&H)===H:(Lt&H)===H){var _=k.revertLane;if(_===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),H===ra&&(M=!0);else if((Lt&_)===_){k=k.next,_===ra&&(M=!0);continue}else H={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},g===null?(m=g=H,c=i):g=g.next=H,re.lanes|=_,dn|=_;H=k.action,Un&&n(i,H),i=k.hasEagerState?k.eagerState:n(i,H)}else _={lane:H,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},g===null?(m=g=_,c=i):g=g.next=_,re.lanes|=H,dn|=H;k=k.next}while(k!==null&&k!==t);if(g===null?c=i:g.next=m,!ot(i,e.memoizedState)&&(Le=!0,M&&(n=ia,n!==null)))throw n;e.memoizedState=i,e.baseState=c,e.baseQueue=g,a.lastRenderedState=i}return s===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Yi(e){var t=Me(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var c=s=s.next;do i=e(i,c.action),c=c.next;while(c!==s);ot(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Sc(e,t,n){var a=re,s=Me(),i=xe;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var c=!ot((Se||s).memoizedState,n);if(c&&(s.memoizedState=n,Le=!0),s=s.queue,Ii(Tc.bind(null,a,s,e),[e]),s.getSnapshot!==t||c||Fe!==null&&Fe.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Nc.bind(null,a,s,n,t),null),Te===null)throw Error(u(349));i||(Lt&127)!==0||Cc(a,t,n)}return n}function Cc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=Qs(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nc(e,t,n,a){t.value=n,t.getSnapshot=a,Dc(t)&&Ac(e)}function Tc(e,t,n){return n(function(){Dc(t)&&Ac(e)})}function Dc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Ac(e){var t=Dn(e,2);t!==null&&st(t,e,2)}function Vi(e){var t=Qe();if(typeof e=="function"){var n=e;if(e=n(),Un){Kt(!0);try{n()}finally{Kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},t}function kc(e,t,n,a){return e.baseState=n,Pi(e,Se,typeof a=="function"?a:Ht)}function xp(e,t,n,a,s){if(nr(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};B.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,wc(t,i)):(i.next=n.next,t.pending=n.next=i)}}function wc(e,t){var n=t.action,a=t.payload,s=e.state;if(t.isTransition){var i=B.T,c={};B.T=c;try{var m=n(s,a),g=B.S;g!==null&&g(c,m),_c(e,t,m)}catch(k){$i(e,t,k)}finally{i!==null&&c.types!==null&&(i.types=c.types),B.T=i}}else try{i=n(s,a),_c(e,t,i)}catch(k){$i(e,t,k)}}function _c(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Oc(e,t,a)},function(a){return $i(e,t,a)}):Oc(e,t,n)}function Oc(e,t,n){t.status="fulfilled",t.value=n,zc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wc(e,n)))}function $i(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,zc(t),t=t.next;while(t!==a)}e.action=null}function zc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bc(e,t){return t}function Mc(e,t){if(xe){var n=Te.formState;if(n!==null){e:{var a=re;if(xe){if(Ae){t:{for(var s=Ae,i=bt;s.nodeType!==8;){if(!i){s=null;break t}if(s=Rt(s.nextSibling),s===null){s=null;break t}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){Ae=Rt(s.nextSibling),a=s.data==="F!";break e}}tn(a)}a=!1}a&&(t=n[0])}}return n=Qe(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bc,lastRenderedState:t},n.queue=a,n=tu.bind(null,re,a),a.dispatch=n,a=Vi(!1),i=Ji.bind(null,re,!1,a.queue),a=Qe(),s={state:t,dispatch:null,action:e,pending:null},a.queue=s,n=xp.bind(null,re,s,i,n),s.dispatch=n,a.memoizedState=e,[t,n,!1]}function Uc(e){var t=Me();return Fc(t,Se,e)}function Fc(e,t,n){if(t=Pi(e,t,Bc)[0],e=Ws(Ht)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ka(t)}catch(c){throw c===la?Ps:c}else a=t;t=Me();var s=t.queue,i=s.dispatch;return n!==t.memoizedState&&(re.flags|=2048,ma(9,{destroy:void 0},gp.bind(null,s,n),null)),[a,i,e]}function gp(e,t){e.action=t}function Lc(e){var t=Me(),n=Se;if(n!==null)return Fc(t,n,e);Me(),t=t.memoizedState,n=Me();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ma(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=re.updateQueue,t===null&&(t=Qs(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Hc(){return Me().memoizedState}function er(e,t,n,a){var s=Qe();re.flags|=e,s.memoizedState=ma(1|t,{destroy:void 0},n,a===void 0?null:a)}function tr(e,t,n,a){var s=Me();a=a===void 0?null:a;var i=s.memoizedState.inst;Se!==null&&a!==null&&Ui(a,Se.memoizedState.deps)?s.memoizedState=ma(t,i,n,a):(re.flags|=e,s.memoizedState=ma(1|t,i,n,a))}function qc(e,t){er(8390656,8,e,t)}function Ii(e,t){tr(2048,8,e,t)}function vp(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=Qs(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gc(e){var t=Me().memoizedState;return vp({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Pc(e,t){return tr(4,2,e,t)}function Yc(e,t){return tr(4,4,e,t)}function Vc(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $c(e,t,n){n=n!=null?n.concat([e]):null,tr(4,4,Vc.bind(null,t,e),n)}function Xi(){}function Ic(e,t){var n=Me();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ui(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Xc(e,t){var n=Me();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ui(t,a[1]))return a[0];if(a=e(),Un){Kt(!0);try{e()}finally{Kt(!1)}}return n.memoizedState=[a,t],a}function Zi(e,t,n){return n===void 0||(Lt&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Zu(),re.lanes|=e,dn|=e,n)}function Zc(e,t,n,a){return ot(n,t)?n:ca.current!==null?(e=Zi(e,n,a),ot(e,t)||(Le=!0),e):(Lt&42)===0||(Lt&1073741824)!==0&&(pe&261930)===0?(Le=!0,e.memoizedState=n):(e=Zu(),re.lanes|=e,dn|=e,t)}function Kc(e,t,n,a,s){var i=G.p;G.p=i!==0&&8>i?i:8;var c=B.T,m={};B.T=m,Ji(e,!1,t,n);try{var g=s(),k=B.S;if(k!==null&&k(m,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var M=pp(g,a);Qa(e,t,M,ft(e))}else Qa(e,t,a,ft(e))}catch(H){Qa(e,t,{then:function(){},status:"rejected",reason:H},ft())}finally{G.p=i,c!==null&&m.types!==null&&(c.types=m.types),B.T=c}}function yp(){}function Ki(e,t,n,a){if(e.tag!==5)throw Error(u(476));var s=Qc(e).queue;Kc(e,s,t,Q,n===null?yp:function(){return Jc(e),n(a)})}function Qc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:Q},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jc(e){var t=Qc(e);t.next===null&&(t=e.alternate.memoizedState),Qa(e,t.next.queue,{},ft())}function Qi(){return Xe(fs)}function Wc(){return Me().memoizedState}function eu(){return Me().memoizedState}function jp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ft();e=sn(n);var a=rn(t,e,n);a!==null&&(st(a,t,n),$a(a,t,n)),t={cache:Ni()},e.payload=t;return}t=t.return}}function bp(e,t,n){var a=ft();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},nr(e)?nu(t,n):(n=hi(e,t,n,a),n!==null&&(st(n,e,a),au(n,t,a)))}function tu(e,t,n){var a=ft();Qa(e,t,n,a)}function Qa(e,t,n,a){var s={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(nr(e))nu(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,m=i(c,n);if(s.hasEagerState=!0,s.eagerState=m,ot(m,c))return Ms(e,t,s,0),Te===null&&Bs(),!1}catch{}finally{}if(n=hi(e,t,s,a),n!==null)return st(n,e,a),au(n,t,a),!0}return!1}function Ji(e,t,n,a){if(a={lane:2,revertLane:kl(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},nr(e)){if(t)throw Error(u(479))}else t=hi(e,n,a,2),t!==null&&st(t,e,2)}function nr(e){var t=e.alternate;return e===re||t!==null&&t===re}function nu(e,t){ua=Zs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function au(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,lo(e,n)}}var Ja={readContext:Xe,use:Js,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};Ja.useEffectEvent=Oe;var su={readContext:Xe,use:Js,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:qc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,er(4194308,4,Vc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return er(4194308,4,e,t)},useInsertionEffect:function(e,t){er(4,2,e,t)},useMemo:function(e,t){var n=Qe();t=t===void 0?null:t;var a=e();if(Un){Kt(!0);try{e()}finally{Kt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Qe();if(n!==void 0){var s=n(t);if(Un){Kt(!0);try{n(t)}finally{Kt(!1)}}}else s=t;return a.memoizedState=a.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},a.queue=e,e=e.dispatch=bp.bind(null,re,e),[a.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:function(e){e=Vi(e);var t=e.queue,n=tu.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xi,useDeferredValue:function(e,t){var n=Qe();return Zi(n,e,t)},useTransition:function(){var e=Vi(!1);return e=Kc.bind(null,re,e.queue,!0,!1),Qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=re,s=Qe();if(xe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Te===null)throw Error(u(349));(pe&127)!==0||Cc(a,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,qc(Tc.bind(null,a,i,e),[e]),a.flags|=2048,ma(9,{destroy:void 0},Nc.bind(null,a,i,n,t),null),n},useId:function(){var e=Qe(),t=Te.identifierPrefix;if(xe){var n=At,a=Dt;n=(a&~(1<<32-lt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ks++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=fp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Qi,useFormState:Mc,useActionState:Mc,useOptimistic:function(e){var t=Qe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ji.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:Gi,useCacheRefresh:function(){return Qe().memoizedState=jp.bind(null,re)},useEffectEvent:function(e){var t=Qe(),n={impl:e};return t.memoizedState=n,function(){if((ye&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Wi={readContext:Xe,use:Js,useCallback:Ic,useContext:Xe,useEffect:Ii,useImperativeHandle:$c,useInsertionEffect:Pc,useLayoutEffect:Yc,useMemo:Xc,useReducer:Ws,useRef:Hc,useState:function(){return Ws(Ht)},useDebugValue:Xi,useDeferredValue:function(e,t){var n=Me();return Zc(n,Se.memoizedState,e,t)},useTransition:function(){var e=Ws(Ht)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:Ka(e),t]},useSyncExternalStore:Sc,useId:Wc,useHostTransitionStatus:Qi,useFormState:Uc,useActionState:Uc,useOptimistic:function(e,t){var n=Me();return kc(n,Se,e,t)},useMemoCache:Gi,useCacheRefresh:eu};Wi.useEffectEvent=Gc;var ru={readContext:Xe,use:Js,useCallback:Ic,useContext:Xe,useEffect:Ii,useImperativeHandle:$c,useInsertionEffect:Pc,useLayoutEffect:Yc,useMemo:Xc,useReducer:Yi,useRef:Hc,useState:function(){return Yi(Ht)},useDebugValue:Xi,useDeferredValue:function(e,t){var n=Me();return Se===null?Zi(n,e,t):Zc(n,Se.memoizedState,e,t)},useTransition:function(){var e=Yi(Ht)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:Ka(e),t]},useSyncExternalStore:Sc,useId:Wc,useHostTransitionStatus:Qi,useFormState:Lc,useActionState:Lc,useOptimistic:function(e,t){var n=Me();return Se!==null?kc(n,Se,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gi,useCacheRefresh:eu};ru.useEffectEvent=Gc;function el(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tl={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=ft(),s=sn(a);s.payload=t,n!=null&&(s.callback=n),t=rn(e,s,a),t!==null&&(st(t,e,a),$a(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=ft(),s=sn(a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=rn(e,s,a),t!==null&&(st(t,e,a),$a(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),a=sn(n);a.tag=2,t!=null&&(a.callback=t),t=rn(e,a,n),t!==null&&(st(t,e,n),$a(t,e,n))}};function iu(e,t,n,a,s,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!Fa(n,a)||!Fa(s,i):!0}function lu(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&tl.enqueueReplaceState(t,t.state,null)}function Fn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function ou(e){zs(e)}function cu(e){console.error(e)}function uu(e){zs(e)}function ar(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function du(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function nl(e,t,n){return n=sn(n),n.tag=3,n.payload={element:null},n.callback=function(){ar(e,t)},n}function mu(e){return e=sn(e),e.tag=3,e}function pu(e,t,n,a){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var i=a.value;e.payload=function(){return s(i)},e.callback=function(){du(t,n,a)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){du(t,n,a),typeof s!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function Ep(e,t,n,a,s){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&sa(t,n,s,!0),n=ut.current,n!==null){switch(n.tag){case 31:case 13:return Et===null?hr():n.alternate===null&&ze===0&&(ze=3),n.flags&=-257,n.flags|=65536,n.lanes=s,a===Ys?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Tl(e,a,s)),!1;case 22:return n.flags|=65536,a===Ys?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Tl(e,a,s)),!1}throw Error(u(435,n.tag))}return Tl(e,a,s),hr(),!1}if(xe)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,a!==bi&&(e=Error(u(422),{cause:a}),qa(vt(e,n)))):(a!==bi&&(t=Error(u(423),{cause:a}),qa(vt(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,a=vt(a,n),s=nl(e.stateNode,a,s),_i(e,s),ze!==4&&(ze=2)),!1;var i=Error(u(520),{cause:a});if(i=vt(i,n),is===null?is=[i]:is.push(i),ze!==4&&(ze=2),t===null)return!0;a=vt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=nl(n.stateNode,a,e),_i(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(mn===null||!mn.has(i))))return n.flags|=65536,s&=-s,n.lanes|=s,s=mu(s),pu(s,e,n,a),_i(n,s),!1}n=n.return}while(n!==null);return!1}var al=Error(u(461)),Le=!1;function Ze(e,t,n,a){t.child=e===null?gc(t,null,n,a):Mn(t,e.child,n,a)}function fu(e,t,n,a,s){n=n.render;var i=t.ref;if("ref"in a){var c={};for(var m in a)m!=="ref"&&(c[m]=a[m])}else c=a;return _n(t),a=Fi(e,t,n,c,i,s),m=Li(),e!==null&&!Le?(Hi(e,t,s),qt(e,t,s)):(xe&&m&&yi(t),t.flags|=1,Ze(e,t,a,s),t.child)}function hu(e,t,n,a,s){if(e===null){var i=n.type;return typeof i=="function"&&!xi(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,xu(e,t,i,a,s)):(e=Fs(n.type,null,a,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!dl(e,s)){var c=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(c,a)&&e.ref===t.ref)return qt(e,t,s)}return t.flags|=1,e=Bt(i,a),e.ref=t.ref,e.return=t,t.child=e}function xu(e,t,n,a,s){if(e!==null){var i=e.memoizedProps;if(Fa(i,a)&&e.ref===t.ref)if(Le=!1,t.pendingProps=a=i,dl(e,s))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,qt(e,t,s)}return sl(e,t,n,a,s)}function gu(e,t,n,a){var s=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;a=s&~i}else a=0,t.child=null;return vu(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gs(t,i!==null?i.cachePool:null),i!==null?jc(t,i):zi(),bc(t);else return a=t.lanes=536870912,vu(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Gs(t,i.cachePool),jc(t,i),on(),t.memoizedState=null):(e!==null&&Gs(t,null),zi(),on());return Ze(e,t,s,n),t.child}function Wa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vu(e,t,n,a,s){var i=Di();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Gs(t,null),zi(),bc(t),e!==null&&sa(e,t,a,!0),t.childLanes=s,null}function sr(e,t){return t=ir({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yu(e,t,n){return Mn(t,e.child,null,n),e=sr(t,t.pendingProps),e.flags|=2,dt(t),t.memoizedState=null,e}function Rp(e,t,n){var a=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(a.mode==="hidden")return e=sr(t,a),t.lanes=536870912,Wa(null,e);if(Mi(t),(e=Ae)?(e=wd(e,bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wt!==null?{id:Dt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},n=nc(e),n.return=t,t.child=n,Ie=t,Ae=null)):e=null,e===null)throw tn(t);return t.lanes=536870912,null}return sr(t,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Mi(t),s)if(t.flags&256)t.flags&=-257,t=yu(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Le||sa(e,t,n,!1),s=(n&e.childLanes)!==0,Le||s){if(a=Te,a!==null&&(c=oo(a,n),c!==0&&c!==i.retryLane))throw i.retryLane=c,Dn(e,c),st(a,e,c),al;hr(),t=yu(e,t,n)}else e=i.treeContext,Ae=Rt(c.nextSibling),Ie=t,xe=!0,en=null,bt=!1,e!==null&&rc(t,e),t=sr(t,a),t.flags|=4096;return t}return e=Bt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function sl(e,t,n,a,s){return _n(t),n=Fi(e,t,n,a,void 0,s),a=Li(),e!==null&&!Le?(Hi(e,t,s),qt(e,t,s)):(xe&&a&&yi(t),t.flags|=1,Ze(e,t,n,s),t.child)}function ju(e,t,n,a,s,i){return _n(t),t.updateQueue=null,n=Rc(t,a,n,s),Ec(e),a=Li(),e!==null&&!Le?(Hi(e,t,i),qt(e,t,i)):(xe&&a&&yi(t),t.flags|=1,Ze(e,t,n,i),t.child)}function bu(e,t,n,a,s){if(_n(t),t.stateNode===null){var i=ea,c=n.contextType;typeof c=="object"&&c!==null&&(i=Xe(c)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},ki(t),c=n.contextType,i.context=typeof c=="object"&&c!==null?Xe(c):ea,i.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(el(t,n,c,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&tl.enqueueReplaceState(i,i.state,null),Xa(t,a,i,s),Ia(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var m=t.memoizedProps,g=Fn(n,m);i.props=g;var k=i.context,M=n.contextType;c=ea,typeof M=="object"&&M!==null&&(c=Xe(M));var H=n.getDerivedStateFromProps;M=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,M||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m||k!==c)&&lu(t,i,a,c),an=!1;var _=t.memoizedState;i.state=_,Xa(t,a,i,s),Ia(),k=t.memoizedState,m||_!==k||an?(typeof H=="function"&&(el(t,n,H,a),k=t.memoizedState),(g=an||iu(t,n,g,a,_,k,c))?(M||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=k),i.props=a,i.state=k,i.context=c,a=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,wi(e,t),c=t.memoizedProps,M=Fn(n,c),i.props=M,H=t.pendingProps,_=i.context,k=n.contextType,g=ea,typeof k=="object"&&k!==null&&(g=Xe(k)),m=n.getDerivedStateFromProps,(k=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==H||_!==g)&&lu(t,i,a,g),an=!1,_=t.memoizedState,i.state=_,Xa(t,a,i,s),Ia();var O=t.memoizedState;c!==H||_!==O||an||e!==null&&e.dependencies!==null&&Hs(e.dependencies)?(typeof m=="function"&&(el(t,n,m,a),O=t.memoizedState),(M=an||iu(t,n,M,a,_,O,g)||e!==null&&e.dependencies!==null&&Hs(e.dependencies))?(k||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,O,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,O,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),i.props=a,i.state=O,i.context=g,a=M):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,rr(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Mn(t,e.child,null,s),t.child=Mn(t,null,n,s)):Ze(e,t,n,s),t.memoizedState=i.state,e=t.child):e=qt(e,t,s),e}function Eu(e,t,n,a){return kn(),t.flags|=256,Ze(e,t,n,a),t.child}var rl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function il(e){return{baseLanes:e,cachePool:dc()}}function ll(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=pt),e}function Ru(e,t,n){var a=t.pendingProps,s=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),c&&(s=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(s?ln(t):on(),(e=Ae)?(e=wd(e,bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wt!==null?{id:Dt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},n=nc(e),n.return=t,t.child=n,Ie=t,Ae=null)):e=null,e===null)throw tn(t);return Pl(e)?t.lanes=32:t.lanes=536870912,null}var m=a.children;return a=a.fallback,s?(on(),s=t.mode,m=ir({mode:"hidden",children:m},s),a=An(a,s,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,a=t.child,a.memoizedState=il(n),a.childLanes=ll(e,c,n),t.memoizedState=rl,Wa(null,a)):(ln(t),ol(t,m))}var g=e.memoizedState;if(g!==null&&(m=g.dehydrated,m!==null)){if(i)t.flags&256?(ln(t),t.flags&=-257,t=cl(e,t,n)):t.memoizedState!==null?(on(),t.child=e.child,t.flags|=128,t=null):(on(),m=a.fallback,s=t.mode,a=ir({mode:"visible",children:a.children},s),m=An(m,s,n,null),m.flags|=2,a.return=t,m.return=t,a.sibling=m,t.child=a,Mn(t,e.child,null,n),a=t.child,a.memoizedState=il(n),a.childLanes=ll(e,c,n),t.memoizedState=rl,t=Wa(null,a));else if(ln(t),Pl(m)){if(c=m.nextSibling&&m.nextSibling.dataset,c)var k=c.dgst;c=k,a=Error(u(419)),a.stack="",a.digest=c,qa({value:a,source:null,stack:null}),t=cl(e,t,n)}else if(Le||sa(e,t,n,!1),c=(n&e.childLanes)!==0,Le||c){if(c=Te,c!==null&&(a=oo(c,n),a!==0&&a!==g.retryLane))throw g.retryLane=a,Dn(e,a),st(c,e,a),al;Gl(m)||hr(),t=cl(e,t,n)}else Gl(m)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ae=Rt(m.nextSibling),Ie=t,xe=!0,en=null,bt=!1,e!==null&&rc(t,e),t=ol(t,a.children),t.flags|=4096);return t}return s?(on(),m=a.fallback,s=t.mode,g=e.child,k=g.sibling,a=Bt(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,k!==null?m=Bt(k,m):(m=An(m,s,n,null),m.flags|=2),m.return=t,a.return=t,a.sibling=m,t.child=a,Wa(null,a),a=t.child,m=e.child.memoizedState,m===null?m=il(n):(s=m.cachePool,s!==null?(g=Ue._currentValue,s=s.parent!==g?{parent:g,pool:g}:s):s=dc(),m={baseLanes:m.baseLanes|n,cachePool:s}),a.memoizedState=m,a.childLanes=ll(e,c,n),t.memoizedState=rl,Wa(e.child,a)):(ln(t),n=e.child,e=n.sibling,n=Bt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=n,t.memoizedState=null,n)}function ol(e,t){return t=ir({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ir(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function cl(e,t,n){return Mn(t,e.child,null,n),e=ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Su(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Si(e.return,t,n)}function ul(e,t,n,a,s,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=s,c.treeForkCount=i)}function Cu(e,t,n){var a=t.pendingProps,s=a.revealOrder,i=a.tail;a=a.children;var c=Be.current,m=(c&2)!==0;if(m?(c=c&1|2,t.flags|=128):c&=1,Y(Be,c),Ze(e,t,a,n),a=xe?Ha:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Xs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ul(t,!1,s,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Xs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ul(t,!0,n,null,i,a);break;case"together":ul(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hs(e)))}function Sp(e,t,n){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),nn(t,Ue,e.memoizedState.cache),kn();break;case 27:case 5:Ca(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:nn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Mi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ln(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ru(e,t,n):(ln(t),e=qt(e,t,n),e!==null?e.sibling:null);ln(t);break;case 19:var s=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(sa(e,t,n,!1),a=(n&t.childLanes)!==0),s){if(a)return Cu(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Y(Be,Be.current),a)break;return null;case 22:return t.lanes=0,gu(e,t,n,t.pendingProps);case 24:nn(t,Ue,e.memoizedState.cache)}return qt(e,t,n)}function Nu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!dl(e,n)&&(t.flags&128)===0)return Le=!1,Sp(e,t,n);Le=(e.flags&131072)!==0}else Le=!1,xe&&(t.flags&1048576)!==0&&sc(t,Ha,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=zn(t.elementType),t.type=e,typeof e=="function")xi(e)?(a=Fn(e,a),t.tag=1,t=bu(null,t,e,a,n)):(t.tag=0,t=sl(null,t,e,a,n));else{if(e!=null){var s=e.$$typeof;if(s===V){t.tag=11,t=fu(null,t,e,a,n);break e}else if(s===K){t.tag=14,t=hu(null,t,e,a,n);break e}}throw t=Re(e)||e,Error(u(306,t,""))}}return t;case 0:return sl(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,s=Fn(a,t.pendingProps),bu(e,t,a,s,n);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var i=t.memoizedState;s=i.element,wi(e,t),Xa(t,a,null,n);var c=t.memoizedState;if(a=c.cache,nn(t,Ue,a),a!==i.cache&&Ci(t,[Ue],n,!0),Ia(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Eu(e,t,a,n);break e}else if(a!==s){s=vt(Error(u(424)),t),qa(s),t=Eu(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=Rt(e.firstChild),Ie=t,xe=!0,en=null,bt=!0,n=gc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(kn(),a===s){t=qt(e,t,n);break e}Ze(e,t,a,n)}t=t.child}return t;case 26:return rr(e,t),e===null?(n=Ud(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,a=Er(le.current).createElement(n),a[$e]=t,a[Je]=e,Ke(a,n,e),Pe(a),t.stateNode=a):t.memoizedState=Ud(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ca(t),e===null&&xe&&(a=t.stateNode=zd(t.type,t.pendingProps,le.current),Ie=t,bt=!0,s=Ae,xn(t.type)?(Yl=s,Ae=Rt(a.firstChild)):Ae=s),Ze(e,t,t.pendingProps.children,n),rr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((s=a=Ae)&&(a=ef(a,t.type,t.pendingProps,bt),a!==null?(t.stateNode=a,Ie=t,Ae=Rt(a.firstChild),bt=!1,s=!0):s=!1),s||tn(t)),Ca(t),s=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,Ll(s,i)?a=null:c!==null&&Ll(s,c)&&(t.flags|=32),t.memoizedState!==null&&(s=Fi(e,t,hp,null,null,n),fs._currentValue=s),rr(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&xe&&((e=n=Ae)&&(n=tf(n,t.pendingProps,bt),n!==null?(t.stateNode=n,Ie=t,Ae=null,e=!0):e=!1),e||tn(t)),null;case 13:return Ru(e,t,n);case 4:return Ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Mn(t,null,a,n):Ze(e,t,a,n),t.child;case 11:return fu(e,t,t.type,t.pendingProps,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,nn(t,t.type,a.value),Ze(e,t,a.children,n),t.child;case 9:return s=t.type._context,a=t.pendingProps.children,_n(t),s=Xe(s),a=a(s),t.flags|=1,Ze(e,t,a,n),t.child;case 14:return hu(e,t,t.type,t.pendingProps,n);case 15:return xu(e,t,t.type,t.pendingProps,n);case 19:return Cu(e,t,n);case 31:return Rp(e,t,n);case 22:return gu(e,t,n,t.pendingProps);case 24:return _n(t),a=Xe(Ue),e===null?(s=Di(),s===null&&(s=Te,i=Ni(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=n),s=i),t.memoizedState={parent:a,cache:s},ki(t),nn(t,Ue,s)):((e.lanes&n)!==0&&(wi(e,t),Xa(t,null,null,n),Ia()),s=e.memoizedState,i=t.memoizedState,s.parent!==a?(s={parent:a,cache:a},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),nn(t,Ue,a)):(a=i.cache,nn(t,Ue,a),a!==s.cache&&Ci(t,[Ue],n,!0))),Ze(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Gt(e){e.flags|=4}function ml(e,t,n,a,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Wu())e.flags|=8192;else throw Bn=Ys,Ai}else e.flags&=-16777217}function Tu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gd(t))if(Wu())e.flags|=8192;else throw Bn=Ys,Ai}function lr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ro():536870912,e.lanes|=t,xa|=t)}function es(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags&65011712,a|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Cp(e,t,n){var a=t.pendingProps;switch(ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return ke(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Ue),De(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(aa(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ei())),ke(t),null;case 26:var s=t.type,i=t.memoizedState;return e===null?(Gt(t),i!==null?(ke(t),Tu(t,i)):(ke(t),ml(t,s,null,a,n))):i?i!==e.memoizedState?(Gt(t),ke(t),Tu(t,i)):(ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Gt(t),ke(t),ml(t,s,e,a,n)),null;case 27:if(vs(t),n=le.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Gt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return ke(t),null}e=$.current,aa(t)?ic(t):(e=zd(s,a,n),t.stateNode=e,Gt(t))}return ke(t),null;case 5:if(vs(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Gt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return ke(t),null}if(i=$.current,aa(t))ic(t);else{var c=Er(le.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(s,{is:a.is}):c.createElement(s)}}i[$e]=t,i[Je]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Ke(i,s,a),s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Gt(t)}}return ke(t),ml(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Gt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=le.current,aa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,s=Ie,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Rd(e.nodeValue,n)),e||tn(t,!0)}else e=Er(e).createTextNode(a),e[$e]=t,t.stateNode=e}return ke(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=aa(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[$e]=t}else kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),e=!1}else n=Ei(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return ke(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=aa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(u(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(u(317));s[$e]=t}else kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),s=!1}else s=Ei(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==s&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),lr(t,t.updateQueue),ke(t),null);case 4:return De(),e===null&&zl(t.stateNode.containerInfo),ke(t),null;case 10:return Ft(t.type),ke(t),null;case 19:if(F(Be),a=t.memoizedState,a===null)return ke(t),null;if(s=(t.flags&128)!==0,i=a.rendering,i===null)if(s)es(a,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Xs(e),i!==null){for(t.flags|=128,es(a,!1),e=i.updateQueue,t.updateQueue=e,lr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)tc(n,e),n=n.sibling;return Y(Be,Be.current&1|2),xe&&Mt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&rt()>mr&&(t.flags|=128,s=!0,es(a,!1),t.lanes=4194304)}else{if(!s)if(e=Xs(i),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,lr(t,e),es(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!xe)return ke(t),null}else 2*rt()-a.renderingStartTime>mr&&n!==536870912&&(t.flags|=128,s=!0,es(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=rt(),e.sibling=null,n=Be.current,Y(Be,s?n&1|2:n&1),xe&&Mt(t,a.treeForkCount),e):(ke(t),null);case 22:case 23:return dt(t),Bi(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),n=t.updateQueue,n!==null&&lr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&F(On),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ft(Ue),ke(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Np(e,t){switch(ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Ue),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return vs(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(u(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(Be),null;case 4:return De(),null;case 10:return Ft(t.type),null;case 22:case 23:return dt(t),Bi(),e!==null&&F(On),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Ue),null;case 25:return null;default:return null}}function Du(e,t){switch(ji(t),t.tag){case 3:Ft(Ue),De();break;case 26:case 27:case 5:vs(t);break;case 4:De();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:F(Be);break;case 10:Ft(t.type);break;case 22:case 23:dt(t),Bi(),e!==null&&F(On);break;case 24:Ft(Ue)}}function ts(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var s=a.next;n=s;do{if((n.tag&e)===e){a=void 0;var i=n.create,c=n.inst;a=i(),c.destroy=a}n=n.next}while(n!==s)}}catch(m){Ee(t,t.return,m)}}function cn(e,t,n){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var i=s.next;a=i;do{if((a.tag&e)===e){var c=a.inst,m=c.destroy;if(m!==void 0){c.destroy=void 0,s=t;var g=n,k=m;try{k()}catch(M){Ee(s,g,M)}}}a=a.next}while(a!==i)}}catch(M){Ee(t,t.return,M)}}function Au(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{yc(t,n)}catch(a){Ee(e,e.return,a)}}}function ku(e,t,n){n.props=Fn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ee(e,t,a)}}function ns(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(s){Ee(e,t,s)}}function kt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(s){Ee(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ee(e,t,s)}else n.current=null}function wu(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(s){Ee(e,e.return,s)}}function pl(e,t,n){try{var a=e.stateNode;Xp(a,e.type,n,t),a[Je]=t}catch(s){Ee(e,e.return,s)}}function _u(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xn(e.type)||e.tag===4}function fl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ot));else if(a!==4&&(a===27&&xn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}function or(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&xn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(or(e,t,n),e=e.sibling;e!==null;)or(e,t,n),e=e.sibling}function Ou(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ke(t,a,n),t[$e]=e,t[Je]=n}catch(i){Ee(e,e.return,i)}}var Pt=!1,He=!1,xl=!1,zu=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Tp(e,t){if(e=e.containerInfo,Ul=Ar,e=$o(e),ci(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var s=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var c=0,m=-1,g=-1,k=0,M=0,H=e,_=null;t:for(;;){for(var O;H!==n||s!==0&&H.nodeType!==3||(m=c+s),H!==i||a!==0&&H.nodeType!==3||(g=c+a),H.nodeType===3&&(c+=H.nodeValue.length),(O=H.firstChild)!==null;)_=H,H=O;for(;;){if(H===e)break t;if(_===n&&++k===s&&(m=c),_===i&&++M===a&&(g=c),(O=H.nextSibling)!==null)break;H=_,_=H.parentNode}H=O}n=m===-1||g===-1?null:{start:m,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},Ar=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,s=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var I=Fn(n.type,s);e=a.getSnapshotBeforeUpdate(I,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ee(n,n.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ql(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ql(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Bu(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Vt(e,n),a&4&&ts(5,n);break;case 1:if(Vt(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(c){Ee(n,n.return,c)}else{var s=Fn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ee(n,n.return,c)}}a&64&&Au(n),a&512&&ns(n,n.return);break;case 3:if(Vt(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{yc(e,t)}catch(c){Ee(n,n.return,c)}}break;case 27:t===null&&a&4&&Ou(n);case 26:case 5:Vt(e,n),t===null&&a&4&&wu(n),a&512&&ns(n,n.return);break;case 12:Vt(e,n);break;case 31:Vt(e,n),a&4&&Fu(e,n);break;case 13:Vt(e,n),a&4&&Lu(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Mp.bind(null,n),nf(e,n))));break;case 22:if(a=n.memoizedState!==null||Pt,!a){t=t!==null&&t.memoizedState!==null||He,s=Pt;var i=He;Pt=a,(He=t)&&!i?$t(e,n,(n.subtreeFlags&8772)!==0):Vt(e,n),Pt=s,He=i}break;case 30:break;default:Vt(e,n)}}function Mu(e){var t=e.alternate;t!==null&&(e.alternate=null,Mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$r(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,et=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Uu(e,t,n),n=n.sibling}function Uu(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Na,n)}catch{}switch(n.tag){case 26:He||kt(n,t),Yt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||kt(n,t);var a=we,s=et;xn(n.type)&&(we=n.stateNode,et=!1),Yt(e,t,n),ds(n.stateNode),we=a,et=s;break;case 5:He||kt(n,t);case 6:if(a=we,s=et,we=null,Yt(e,t,n),we=a,et=s,we!==null)if(et)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(i){Ee(n,t,i)}else try{we.removeChild(n.stateNode)}catch(i){Ee(n,t,i)}break;case 18:we!==null&&(et?(e=we,Ad(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Sa(e)):Ad(we,n.stateNode));break;case 4:a=we,s=et,we=n.stateNode.containerInfo,et=!0,Yt(e,t,n),we=a,et=s;break;case 0:case 11:case 14:case 15:cn(2,n,t),He||cn(4,n,t),Yt(e,t,n);break;case 1:He||(kt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&ku(n,t,a)),Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:He=(a=He)||n.memoizedState!==null,Yt(e,t,n),He=a;break;default:Yt(e,t,n)}}function Fu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sa(e)}catch(n){Ee(t,t.return,n)}}}function Lu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sa(e)}catch(n){Ee(t,t.return,n)}}function Dp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zu),t;default:throw Error(u(435,e.tag))}}function cr(e,t){var n=Dp(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var s=Up.bind(null,e,a);a.then(s,s)}})}function tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var s=n[a],i=e,c=t,m=c;e:for(;m!==null;){switch(m.tag){case 27:if(xn(m.type)){we=m.stateNode,et=!1;break e}break;case 5:we=m.stateNode,et=!1;break e;case 3:case 4:we=m.stateNode.containerInfo,et=!0;break e}m=m.return}if(we===null)throw Error(u(160));Uu(i,c,s),we=null,et=!1,i=s.alternate,i!==null&&(i.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Hu(t,e),t=t.sibling}var Nt=null;function Hu(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),nt(e),a&4&&(cn(3,e,e.return),ts(3,e),cn(5,e,e.return));break;case 1:tt(t,e),nt(e),a&512&&(He||n===null||kt(n,n.return)),a&64&&Pt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var s=Nt;if(tt(t,e),nt(e),a&512&&(He||n===null||kt(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(a){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Aa]||i[$e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(a),s.head.insertBefore(i,s.querySelector("head > title"))),Ke(i,a,n),i[$e]=e,Pe(i),a=i;break e;case"link":var c=Hd("link","href",s).get(a+(n.href||""));if(c){for(var m=0;m<c.length;m++)if(i=c[m],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(m,1);break t}}i=s.createElement(a),Ke(i,a,n),s.head.appendChild(i);break;case"meta":if(c=Hd("meta","content",s).get(a+(n.content||""))){for(m=0;m<c.length;m++)if(i=c[m],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(m,1);break t}}i=s.createElement(a),Ke(i,a,n),s.head.appendChild(i);break;default:throw Error(u(468,a))}i[$e]=e,Pe(i),a=i}e.stateNode=a}else qd(s,e.type,e.stateNode);else e.stateNode=Ld(s,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?qd(s,e.type,e.stateNode):Ld(s,a,e.memoizedProps)):a===null&&e.stateNode!==null&&pl(e,e.memoizedProps,n.memoizedProps)}break;case 27:tt(t,e),nt(e),a&512&&(He||n===null||kt(n,n.return)),n!==null&&a&4&&pl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tt(t,e),nt(e),a&512&&(He||n===null||kt(n,n.return)),e.flags&32){s=e.stateNode;try{In(s,"")}catch(I){Ee(e,e.return,I)}}a&4&&e.stateNode!=null&&(s=e.memoizedProps,pl(e,s,n!==null?n.memoizedProps:s)),a&1024&&(xl=!0);break;case 6:if(tt(t,e),nt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(I){Ee(e,e.return,I)}}break;case 3:if(Cr=null,s=Nt,Nt=Rr(t.containerInfo),tt(t,e),Nt=s,nt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(t.containerInfo)}catch(I){Ee(e,e.return,I)}xl&&(xl=!1,qu(e));break;case 4:a=Nt,Nt=Rr(e.stateNode.containerInfo),tt(t,e),nt(e),Nt=a;break;case 12:tt(t,e),nt(e);break;case 31:tt(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,cr(e,a)));break;case 13:tt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(dr=rt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,cr(e,a)));break;case 22:s=e.memoizedState!==null;var g=n!==null&&n.memoizedState!==null,k=Pt,M=He;if(Pt=k||s,He=M||g,tt(t,e),He=M,Pt=k,nt(e),a&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||g||Pt||He||Ln(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){g=n=t;try{if(i=g.stateNode,s)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{m=g.stateNode;var H=g.memoizedProps.style,_=H!=null&&H.hasOwnProperty("display")?H.display:null;m.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(I){Ee(g,g.return,I)}}}else if(t.tag===6){if(n===null){g=t;try{g.stateNode.nodeValue=s?"":g.memoizedProps}catch(I){Ee(g,g.return,I)}}}else if(t.tag===18){if(n===null){g=t;try{var O=g.stateNode;s?kd(O,!0):kd(g.stateNode,!1)}catch(I){Ee(g,g.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,cr(e,n))));break;case 19:tt(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,cr(e,a)));break;case 30:break;case 21:break;default:tt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(_u(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var s=n.stateNode,i=fl(e);or(e,i,s);break;case 5:var c=n.stateNode;n.flags&32&&(In(c,""),n.flags&=-33);var m=fl(e);or(e,m,c);break;case 3:case 4:var g=n.stateNode.containerInfo,k=fl(e);hl(e,k,g);break;default:throw Error(u(161))}}catch(M){Ee(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bu(e,t.alternate,t),t=t.sibling}function Ln(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:cn(4,t,t.return),Ln(t);break;case 1:kt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ku(t,t.return,n),Ln(t);break;case 27:ds(t.stateNode);case 26:case 5:kt(t,t.return),Ln(t);break;case 22:t.memoizedState===null&&Ln(t);break;case 30:Ln(t);break;default:Ln(t)}e=e.sibling}}function $t(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,s=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:$t(s,i,n),ts(4,i);break;case 1:if($t(s,i,n),a=i,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(k){Ee(a,a.return,k)}if(a=i,s=a.updateQueue,s!==null){var m=a.stateNode;try{var g=s.shared.hiddenCallbacks;if(g!==null)for(s.shared.hiddenCallbacks=null,s=0;s<g.length;s++)vc(g[s],m)}catch(k){Ee(a,a.return,k)}}n&&c&64&&Au(i),ns(i,i.return);break;case 27:Ou(i);case 26:case 5:$t(s,i,n),n&&a===null&&c&4&&wu(i),ns(i,i.return);break;case 12:$t(s,i,n);break;case 31:$t(s,i,n),n&&c&4&&Fu(s,i);break;case 13:$t(s,i,n),n&&c&4&&Lu(s,i);break;case 22:i.memoizedState===null&&$t(s,i,n),ns(i,i.return);break;case 30:break;default:$t(s,i,n)}t=t.sibling}}function gl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ga(n))}function vl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e))}function Tt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gu(e,t,n,a),t=t.sibling}function Gu(e,t,n,a){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Tt(e,t,n,a),s&2048&&ts(9,t);break;case 1:Tt(e,t,n,a);break;case 3:Tt(e,t,n,a),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e)));break;case 12:if(s&2048){Tt(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,m=i.onPostCommit;typeof m=="function"&&m(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Ee(t,t.return,g)}}else Tt(e,t,n,a);break;case 31:Tt(e,t,n,a);break;case 13:Tt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Tt(e,t,n,a):as(e,t):i._visibility&2?Tt(e,t,n,a):(i._visibility|=2,pa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),s&2048&&gl(c,t);break;case 24:Tt(e,t,n,a),s&2048&&vl(t.alternate,t);break;default:Tt(e,t,n,a)}}function pa(e,t,n,a,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,m=n,g=a,k=c.flags;switch(c.tag){case 0:case 11:case 15:pa(i,c,m,g,s),ts(8,c);break;case 23:break;case 22:var M=c.stateNode;c.memoizedState!==null?M._visibility&2?pa(i,c,m,g,s):as(i,c):(M._visibility|=2,pa(i,c,m,g,s)),s&&k&2048&&gl(c.alternate,c);break;case 24:pa(i,c,m,g,s),s&&k&2048&&vl(c.alternate,c);break;default:pa(i,c,m,g,s)}t=t.sibling}}function as(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,s=a.flags;switch(a.tag){case 22:as(n,a),s&2048&&gl(a.alternate,a);break;case 24:as(n,a),s&2048&&vl(a.alternate,a);break;default:as(n,a)}t=t.sibling}}var ss=8192;function fa(e,t,n){if(e.subtreeFlags&ss)for(e=e.child;e!==null;)Pu(e,t,n),e=e.sibling}function Pu(e,t,n){switch(e.tag){case 26:fa(e,t,n),e.flags&ss&&e.memoizedState!==null&&hf(n,Nt,e.memoizedState,e.memoizedProps);break;case 5:fa(e,t,n);break;case 3:case 4:var a=Nt;Nt=Rr(e.stateNode.containerInfo),fa(e,t,n),Nt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ss,ss=16777216,fa(e,t,n),ss=a):fa(e,t,n));break;default:fa(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ye=a,$u(a,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vu(e),e=e.sibling}function Vu(e){switch(e.tag){case 0:case 11:case 15:rs(e),e.flags&2048&&cn(9,e,e.return);break;case 3:rs(e);break;case 12:rs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ur(e)):rs(e);break;default:rs(e)}}function ur(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ye=a,$u(a,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:cn(8,t,t.return),ur(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ur(t));break;default:ur(t)}e=e.sibling}}function $u(e,t){for(;Ye!==null;){var n=Ye;switch(n.tag){case 0:case 11:case 15:cn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ga(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ye=a;else e:for(n=e;Ye!==null;){a=Ye;var s=a.sibling,i=a.return;if(Mu(a),a===n){Ye=null;break e}if(s!==null){s.return=i,Ye=s;break e}Ye=i}}}var Ap={getCacheForType:function(e){var t=Xe(Ue),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Xe(Ue).controller.signal}},kp=typeof WeakMap=="function"?WeakMap:Map,ye=0,Te=null,ce=null,pe=0,be=0,mt=null,un=!1,ha=!1,yl=!1,It=0,ze=0,dn=0,Hn=0,jl=0,pt=0,xa=0,is=null,at=null,bl=!1,dr=0,Iu=0,mr=1/0,pr=null,mn=null,qe=0,pn=null,ga=null,Xt=0,El=0,Rl=null,Xu=null,ls=0,Sl=null;function ft(){return(ye&2)!==0&&pe!==0?pe&-pe:B.T!==null?kl():co()}function Zu(){if(pt===0)if((pe&536870912)===0||xe){var e=bs;bs<<=1,(bs&3932160)===0&&(bs=262144),pt=e}else pt=536870912;return e=ut.current,e!==null&&(e.flags|=32),pt}function st(e,t,n){(e===Te&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(va(e,0),fn(e,pe,pt,!1)),Da(e,n),((ye&2)===0||e!==Te)&&(e===Te&&((ye&2)===0&&(Hn|=n),ze===4&&fn(e,pe,pt,!1)),wt(e))}function Ku(e,t,n){if((ye&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ta(e,t),s=a?Op(e,t):Nl(e,t,!0),i=a;do{if(s===0){ha&&!a&&fn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!wp(n)){s=Nl(e,t,!1),i=!1;continue}if(s===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var m=e;s=is;var g=m.current.memoizedState.isDehydrated;if(g&&(va(m,c).flags|=256),c=Nl(m,c,!1),c!==2){if(yl&&!g){m.errorRecoveryDisabledLanes|=i,Hn|=i,s=4;break e}i=at,at=s,i!==null&&(at===null?at=i:at.push.apply(at,i))}s=c}if(i=!1,s!==2)continue}}if(s===1){va(e,0),fn(e,t,0,!0);break}e:{switch(a=e,i=s,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:fn(a,t,pt,!un);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(s=dr+300-rt(),10<s)){if(fn(a,t,pt,!un),Rs(a,0,!0)!==0)break e;Xt=t,a.timeoutHandle=Td(Qu.bind(null,a,n,at,pr,bl,t,pt,Hn,xa,un,i,"Throttled",-0,0),s);break e}Qu(a,n,at,pr,bl,t,pt,Hn,xa,un,i,null,-0,0)}}break}while(!0);wt(e)}function Qu(e,t,n,a,s,i,c,m,g,k,M,H,_,O){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},Pu(t,i,H);var I=(i&62914560)===i?dr-rt():(i&4194048)===i?Iu-rt():0;if(I=xf(H,I),I!==null){Xt=i,e.cancelPendingCommit=I(rd.bind(null,e,t,i,n,a,s,c,m,g,M,H,null,_,O)),fn(e,i,c,!k);return}}rd(e,t,i,n,a,s,c,m,g)}function wp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var s=n[a],i=s.getSnapshot;s=s.value;try{if(!ot(i(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t,n,a){t&=~jl,t&=~Hn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var s=t;0<s;){var i=31-lt(s),c=1<<i;a[i]=-1,s&=~c}n!==0&&io(e,n,t)}function fr(){return(ye&6)===0?(os(0),!1):!0}function Cl(){if(ce!==null){if(be===0)var e=ce.return;else e=ce,Ut=wn=null,qi(e),oa=null,Ya=0,e=ce;for(;e!==null;)Du(e.alternate,e),e=e.return;ce=null}}function va(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Qp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Xt=0,Cl(),Te=e,ce=n=Bt(e.current,null),pe=t,be=0,mt=null,un=!1,ha=Ta(e,t),yl=!1,xa=pt=jl=Hn=dn=ze=0,at=is=null,bl=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var s=31-lt(a),i=1<<s;t|=e[s],a&=~i}return It=t,Bs(),n}function Ju(e,t){re=null,B.H=Ja,t===la||t===Ps?(t=fc(),be=3):t===Ai?(t=fc(),be=4):be=t===al?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,ce===null&&(ze=1,ar(e,vt(t,e.current)))}function Wu(){var e=ut.current;return e===null?!0:(pe&4194048)===pe?Et===null:(pe&62914560)===pe||(pe&536870912)!==0?e===Et:!1}function ed(){var e=B.H;return B.H=Ja,e===null?Ja:e}function td(){var e=B.A;return B.A=Ap,e}function hr(){ze=4,un||(pe&4194048)!==pe&&ut.current!==null||(ha=!0),(dn&134217727)===0&&(Hn&134217727)===0||Te===null||fn(Te,pe,pt,!1)}function Nl(e,t,n){var a=ye;ye|=2;var s=ed(),i=td();(Te!==e||pe!==t)&&(pr=null,va(e,t)),t=!1;var c=ze;e:do try{if(be!==0&&ce!==null){var m=ce,g=mt;switch(be){case 8:Cl(),c=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var k=be;if(be=0,mt=null,ya(e,m,g,k),n&&ha){c=0;break e}break;default:k=be,be=0,mt=null,ya(e,m,g,k)}}_p(),c=ze;break}catch(M){Ju(e,M)}while(!0);return t&&e.shellSuspendCounter++,Ut=wn=null,ye=a,B.H=s,B.A=i,ce===null&&(Te=null,pe=0,Bs()),c}function _p(){for(;ce!==null;)nd(ce)}function Op(e,t){var n=ye;ye|=2;var a=ed(),s=td();Te!==e||pe!==t?(pr=null,mr=rt()+500,va(e,t)):ha=Ta(e,t);e:do try{if(be!==0&&ce!==null){t=ce;var i=mt;t:switch(be){case 1:be=0,mt=null,ya(e,t,i,1);break;case 2:case 9:if(mc(i)){be=0,mt=null,ad(t);break}t=function(){be!==2&&be!==9||Te!==e||(be=7),wt(e)},i.then(t,t);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:mc(i)?(be=0,mt=null,ad(t)):(be=0,mt=null,ya(e,t,i,7));break;case 5:var c=null;switch(ce.tag){case 26:c=ce.memoizedState;case 5:case 27:var m=ce;if(c?Gd(c):m.stateNode.complete){be=0,mt=null;var g=m.sibling;if(g!==null)ce=g;else{var k=m.return;k!==null?(ce=k,xr(k)):ce=null}break t}}be=0,mt=null,ya(e,t,i,5);break;case 6:be=0,mt=null,ya(e,t,i,6);break;case 8:Cl(),ze=6;break e;default:throw Error(u(462))}}zp();break}catch(M){Ju(e,M)}while(!0);return Ut=wn=null,B.H=a,B.A=s,ye=n,ce!==null?0:(Te=null,pe=0,Bs(),ze)}function zp(){for(;ce!==null&&!am();)nd(ce)}function nd(e){var t=Nu(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?xr(e):ce=t}function ad(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ju(n,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=ju(n,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:qi(t);default:Du(n,t),t=ce=tc(t,It),t=Nu(n,t,It)}e.memoizedProps=e.pendingProps,t===null?xr(e):ce=t}function ya(e,t,n,a){Ut=wn=null,qi(t),oa=null,Ya=0;var s=t.return;try{if(Ep(e,s,t,n,pe)){ze=1,ar(e,vt(n,e.current)),ce=null;return}}catch(i){if(s!==null)throw ce=s,i;ze=1,ar(e,vt(n,e.current)),ce=null;return}t.flags&32768?(xe||a===1?e=!0:ha||(pe&536870912)!==0?e=!1:(un=e=!0,(a===2||a===9||a===3||a===6)&&(a=ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),sd(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){sd(t,un);return}e=t.return;var n=Cp(t.alternate,t,It);if(n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);ze===0&&(ze=5)}function sd(e,t){do{var n=Np(e.alternate,e);if(n!==null){n.flags&=32767,ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=n}while(e!==null);ze=6,ce=null}function rd(e,t,n,a,s,i,c,m,g){e.cancelPendingCommit=null;do gr();while(qe!==0);if((ye&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=fi,pm(e,n,i,c,m,g),e===Te&&(ce=Te=null,pe=0),ga=t,pn=e,Xt=n,El=i,Rl=s,Xu=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fp(ys,function(){return ud(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,s=G.p,G.p=2,c=ye,ye|=4;try{Tp(e,t,n)}finally{ye=c,G.p=s,B.T=a}}qe=1,id(),ld(),od()}}function id(){if(qe===1){qe=0;var e=pn,t=ga,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var a=G.p;G.p=2;var s=ye;ye|=4;try{Hu(t,e);var i=Fl,c=$o(e.containerInfo),m=i.focusedElem,g=i.selectionRange;if(c!==m&&m&&m.ownerDocument&&Vo(m.ownerDocument.documentElement,m)){if(g!==null&&ci(m)){var k=g.start,M=g.end;if(M===void 0&&(M=k),"selectionStart"in m)m.selectionStart=k,m.selectionEnd=Math.min(M,m.value.length);else{var H=m.ownerDocument||document,_=H&&H.defaultView||window;if(_.getSelection){var O=_.getSelection(),I=m.textContent.length,te=Math.min(g.start,I),Ne=g.end===void 0?te:Math.min(g.end,I);!O.extend&&te>Ne&&(c=Ne,Ne=te,te=c);var C=Yo(m,te),b=Yo(m,Ne);if(C&&b&&(O.rangeCount!==1||O.anchorNode!==C.node||O.anchorOffset!==C.offset||O.focusNode!==b.node||O.focusOffset!==b.offset)){var D=H.createRange();D.setStart(C.node,C.offset),O.removeAllRanges(),te>Ne?(O.addRange(D),O.extend(b.node,b.offset)):(D.setEnd(b.node,b.offset),O.addRange(D))}}}}for(H=[],O=m;O=O.parentNode;)O.nodeType===1&&H.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<H.length;m++){var U=H[m];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Ar=!!Ul,Fl=Ul=null}finally{ye=s,G.p=a,B.T=n}}e.current=t,qe=2}}function ld(){if(qe===2){qe=0;var e=pn,t=ga,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=G.p;G.p=2;var s=ye;ye|=4;try{Bu(e,t.alternate,t)}finally{ye=s,G.p=a,B.T=n}}qe=3}}function od(){if(qe===4||qe===3){qe=0,sm();var e=pn,t=ga,n=Xt,a=Xu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,ga=pn=null,cd(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(mn=null),Yr(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Na,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=B.T,s=G.p,G.p=2,B.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var m=a[c];i(m.value,{componentStack:m.stack})}}finally{B.T=t,G.p=s}}(Xt&3)!==0&&gr(),wt(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Sl?ls++:(ls=0,Sl=e):ls=0,os(0)}}function cd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ga(t)))}function gr(){return id(),ld(),od(),ud()}function ud(){if(qe!==5)return!1;var e=pn,t=El;El=0;var n=Yr(Xt),a=B.T,s=G.p;try{G.p=32>n?32:n,B.T=null,n=Rl,Rl=null;var i=pn,c=Xt;if(qe=0,ga=pn=null,Xt=0,(ye&6)!==0)throw Error(u(331));var m=ye;if(ye|=4,Vu(i.current),Gu(i,i.current,c,n),ye=m,os(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Na,i)}catch{}return!0}finally{G.p=s,B.T=a,cd(e,t)}}function dd(e,t,n){t=vt(n,t),t=nl(e.stateNode,t,2),e=rn(e,t,2),e!==null&&(Da(e,2),wt(e))}function Ee(e,t,n){if(e.tag===3)dd(e,e,n);else for(;t!==null;){if(t.tag===3){dd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(mn===null||!mn.has(a))){e=vt(n,e),n=mu(2),a=rn(t,n,2),a!==null&&(pu(n,a,t,e),Da(a,2),wt(a));break}}t=t.return}}function Tl(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new kp;var s=new Set;a.set(t,s)}else s=a.get(t),s===void 0&&(s=new Set,a.set(t,s));s.has(n)||(yl=!0,s.add(n),e=Bp.bind(null,e,t,n),t.then(e,e))}function Bp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(pe&n)===n&&(ze===4||ze===3&&(pe&62914560)===pe&&300>rt()-dr?(ye&2)===0&&va(e,0):jl|=n,xa===pe&&(xa=0)),wt(e)}function md(e,t){t===0&&(t=ro()),e=Dn(e,t),e!==null&&(Da(e,t),wt(e))}function Mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),md(e,n)}function Up(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),md(e,n)}function Fp(e,t){return Hr(e,t)}var vr=null,ja=null,Dl=!1,yr=!1,Al=!1,hn=0;function wt(e){e!==ja&&e.next===null&&(ja===null?vr=ja=e:ja=ja.next=e),yr=!0,Dl||(Dl=!0,Hp())}function os(e,t){if(!Al&&yr){Al=!0;do for(var n=!1,a=vr;a!==null;){if(e!==0){var s=a.pendingLanes;if(s===0)var i=0;else{var c=a.suspendedLanes,m=a.pingedLanes;i=(1<<31-lt(42|e)+1)-1,i&=s&~(c&~m),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,xd(a,i))}else i=pe,i=Rs(a,a===Te?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ta(a,i)||(n=!0,xd(a,i));a=a.next}while(n);Al=!1}}function Lp(){pd()}function pd(){yr=Dl=!1;var e=0;hn!==0&&Kp()&&(e=hn);for(var t=rt(),n=null,a=vr;a!==null;){var s=a.next,i=fd(a,t);i===0?(a.next=null,n===null?vr=s:n.next=s,s===null&&(ja=n)):(n=a,(e!==0||(i&3)!==0)&&(yr=!0)),a=s}qe!==0&&qe!==5||os(e),hn!==0&&(hn=0)}function fd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-lt(i),m=1<<c,g=s[c];g===-1?((m&n)===0||(m&a)!==0)&&(s[c]=mm(m,t)):g<=t&&(e.expiredLanes|=m),i&=~m}if(t=Te,n=pe,n=Rs(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&qr(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ta(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&qr(a),Yr(n)){case 2:case 8:n=ao;break;case 32:n=ys;break;case 268435456:n=so;break;default:n=ys}return a=hd.bind(null,e),n=Hr(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&qr(a),e.callbackPriority=2,e.callbackNode=null,2}function hd(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var a=pe;return a=Rs(e,e===Te?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ku(e,a,t),fd(e,rt()),e.callbackNode!=null&&e.callbackNode===n?hd.bind(null,e):null)}function xd(e,t){if(gr())return null;Ku(e,t,!0)}function Hp(){Jp(function(){(ye&6)!==0?Hr(no,Lp):pd()})}function kl(){if(hn===0){var e=ra;e===0&&(e=js,js<<=1,(js&261888)===0&&(js=256)),hn=e}return hn}function gd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ts(""+e)}function vd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function qp(e,t,n,a,s){if(t==="submit"&&n&&n.stateNode===s){var i=gd((s[Je]||null).action),c=a.submitter;c&&(t=(t=c[Je]||null)?gd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var m=new ws("action","action",null,a,s);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(hn!==0){var g=c?vd(s,c):new FormData(s);Ki(n,{pending:!0,data:g,method:s.method,action:i},null,g)}}else typeof i=="function"&&(m.preventDefault(),g=c?vd(s,c):new FormData(s),Ki(n,{pending:!0,data:g,method:s.method,action:i},i,g))},currentTarget:s}]})}}for(var wl=0;wl<pi.length;wl++){var _l=pi[wl],Gp=_l.toLowerCase(),Pp=_l[0].toUpperCase()+_l.slice(1);Ct(Gp,"on"+Pp)}Ct(Zo,"onAnimationEnd"),Ct(Ko,"onAnimationIteration"),Ct(Qo,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(rp,"onTransitionRun"),Ct(ip,"onTransitionStart"),Ct(lp,"onTransitionCancel"),Ct(Jo,"onTransitionEnd"),Vn("onMouseEnter",["mouseout","mouseover"]),Vn("onMouseLeave",["mouseout","mouseover"]),Vn("onPointerEnter",["pointerout","pointerover"]),Vn("onPointerLeave",["pointerout","pointerover"]),Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cs));function yd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],s=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var m=a[c],g=m.instance,k=m.currentTarget;if(m=m.listener,g!==i&&s.isPropagationStopped())break e;i=m,s.currentTarget=k;try{i(s)}catch(M){zs(M)}s.currentTarget=null,i=g}else for(c=0;c<a.length;c++){if(m=a[c],g=m.instance,k=m.currentTarget,m=m.listener,g!==i&&s.isPropagationStopped())break e;i=m,s.currentTarget=k;try{i(s)}catch(M){zs(M)}s.currentTarget=null,i=g}}}}function ue(e,t){var n=t[Vr];n===void 0&&(n=t[Vr]=new Set);var a=e+"__bubble";n.has(a)||(jd(t,e,2,!1),n.add(a))}function Ol(e,t,n){var a=0;t&&(a|=4),jd(n,e,a,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function zl(e){if(!e[jr]){e[jr]=!0,po.forEach(function(n){n!=="selectionchange"&&(Yp.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Ol("selectionchange",!1,t))}}function jd(e,t,n,a){switch(Zd(t)){case 2:var s=yf;break;case 8:s=jf;break;default:s=Zl}n=s.bind(null,t,n,e),s=void 0,!ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Bl(e,t,n,a,s){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var m=a.stateNode.containerInfo;if(m===s)break;if(c===4)for(c=a.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===s)return;c=c.return}for(;m!==null;){if(c=Gn(m),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){a=i=c;continue e}m=m.parentNode}}a=a.return}Co(function(){var k=i,M=Jr(n),H=[];e:{var _=Wo.get(e);if(_!==void 0){var O=ws,I=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":O=Um;break;case"focusin":I="focus",O=si;break;case"focusout":I="blur",O=si;break;case"beforeblur":case"afterblur":O=si;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Do;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Hm;break;case Zo:case Ko:case Qo:O=Dm;break;case Jo:O=Gm;break;case"scroll":case"scrollend":O=Rm;break;case"wheel":O=Ym;break;case"copy":case"cut":case"paste":O=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=ko;break;case"toggle":case"beforetoggle":O=$m}var te=(t&4)!==0,Ne=!te&&(e==="scroll"||e==="scrollend"),C=te?_!==null?_+"Capture":null:_;te=[];for(var b=k,D;b!==null;){var U=b;if(D=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||D===null||C===null||(U=wa(b,C),U!=null&&te.push(us(b,U,D))),Ne)break;b=b.return}0<te.length&&(_=new O(_,I,null,n,M),H.push({event:_,listeners:te}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",_&&n!==Qr&&(I=n.relatedTarget||n.fromElement)&&(Gn(I)||I[qn]))break e;if((O||_)&&(_=M.window===M?M:(_=M.ownerDocument)?_.defaultView||_.parentWindow:window,O?(I=n.relatedTarget||n.toElement,O=k,I=I?Gn(I):null,I!==null&&(Ne=f(I),te=I.tag,I!==Ne||te!==5&&te!==27&&te!==6)&&(I=null)):(O=null,I=k),O!==I)){if(te=Do,U="onMouseLeave",C="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(te=ko,U="onPointerLeave",C="onPointerEnter",b="pointer"),Ne=O==null?_:ka(O),D=I==null?_:ka(I),_=new te(U,b+"leave",O,n,M),_.target=Ne,_.relatedTarget=D,U=null,Gn(M)===k&&(te=new te(C,b+"enter",I,n,M),te.target=D,te.relatedTarget=Ne,U=te),Ne=U,O&&I)t:{for(te=Vp,C=O,b=I,D=0,U=C;U;U=te(U))D++;U=0;for(var J=b;J;J=te(J))U++;for(;0<D-U;)C=te(C),D--;for(;0<U-D;)b=te(b),U--;for(;D--;){if(C===b||b!==null&&C===b.alternate){te=C;break t}C=te(C),b=te(b)}te=null}else te=null;O!==null&&bd(H,_,O,te,!1),I!==null&&Ne!==null&&bd(H,Ne,I,te,!0)}}e:{if(_=k?ka(k):window,O=_.nodeName&&_.nodeName.toLowerCase(),O==="select"||O==="input"&&_.type==="file")var ge=Fo;else if(Mo(_))if(Lo)ge=np;else{ge=ep;var Z=Wm}else O=_.nodeName,!O||O.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?k&&Kr(k.elementType)&&(ge=Fo):ge=tp;if(ge&&(ge=ge(e,k))){Uo(H,ge,n,M);break e}Z&&Z(e,_,k),e==="focusout"&&k&&_.type==="number"&&k.memoizedProps.value!=null&&Zr(_,"number",_.value)}switch(Z=k?ka(k):window,e){case"focusin":(Mo(Z)||Z.contentEditable==="true")&&(Qn=Z,ui=k,La=null);break;case"focusout":La=ui=Qn=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,Io(H,n,M);break;case"selectionchange":if(sp)break;case"keydown":case"keyup":Io(H,n,M)}var oe;if(ii)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Kn?zo(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(wo&&n.locale!=="ko"&&(Kn||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Kn&&(oe=No()):(Jt=M,ti="value"in Jt?Jt.value:Jt.textContent,Kn=!0)),Z=br(k,fe),0<Z.length&&(fe=new Ao(fe,e,null,n,M),H.push({event:fe,listeners:Z}),oe?fe.data=oe:(oe=Bo(n),oe!==null&&(fe.data=oe)))),(oe=Xm?Zm(e,n):Km(e,n))&&(fe=br(k,"onBeforeInput"),0<fe.length&&(Z=new Ao("onBeforeInput","beforeinput",null,n,M),H.push({event:Z,listeners:fe}),Z.data=oe)),qp(H,e,k,n,M)}yd(H,t)})}function us(e,t,n){return{instance:e,listener:t,currentTarget:n}}function br(e,t){for(var n=t+"Capture",a=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=wa(e,n),s!=null&&a.unshift(us(e,s,i)),s=wa(e,t),s!=null&&a.push(us(e,s,i))),e.tag===3)return a;e=e.return}return[]}function Vp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bd(e,t,n,a,s){for(var i=t._reactName,c=[];n!==null&&n!==a;){var m=n,g=m.alternate,k=m.stateNode;if(m=m.tag,g!==null&&g===a)break;m!==5&&m!==26&&m!==27||k===null||(g=k,s?(k=wa(n,i),k!=null&&c.unshift(us(n,k,g))):s||(k=wa(n,i),k!=null&&c.push(us(n,k,g)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var $p=/\r\n?/g,Ip=/\u0000|\uFFFD/g;function Ed(e){return(typeof e=="string"?e:""+e).replace($p,`
`).replace(Ip,"")}function Rd(e,t){return t=Ed(t),Ed(e)===t}function Ce(e,t,n,a,s,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||In(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&In(e,""+a);break;case"className":Cs(e,"class",a);break;case"tabIndex":Cs(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Cs(e,n,a);break;case"style":Ro(e,a,i);break;case"data":if(t!=="object"){Cs(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ts(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ce(e,t,"name",s.name,s,null),Ce(e,t,"formEncType",s.formEncType,s,null),Ce(e,t,"formMethod",s.formMethod,s,null),Ce(e,t,"formTarget",s.formTarget,s,null)):(Ce(e,t,"encType",s.encType,s,null),Ce(e,t,"method",s.method,s,null),Ce(e,t,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ts(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ot);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ts(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ue("beforetoggle",e),ue("toggle",e),Ss(e,"popover",a);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ss(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=bm.get(n)||n,Ss(e,n,a))}}function Ml(e,t,n,a,s,i){switch(n){case"style":Ro(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?In(e,a):(typeof a=="number"||typeof a=="bigint")&&In(e,""+a);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),i=e[Je]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,s),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,s);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ss(e,n,a)}}}function Ke(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var a=!1,s=!1,i;for(i in n)if(n.hasOwnProperty(i)){var c=n[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ce(e,t,i,c,n,null)}}s&&Ce(e,t,"srcSet",n.srcSet,n,null),a&&Ce(e,t,"src",n.src,n,null);return;case"input":ue("invalid",e);var m=i=c=s=null,g=null,k=null;for(a in n)if(n.hasOwnProperty(a)){var M=n[a];if(M!=null)switch(a){case"name":s=M;break;case"type":c=M;break;case"checked":g=M;break;case"defaultChecked":k=M;break;case"value":i=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:Ce(e,t,a,M,n,null)}}yo(e,i,m,g,k,c,s,!1);return;case"select":ue("invalid",e),a=c=i=null;for(s in n)if(n.hasOwnProperty(s)&&(m=n[s],m!=null))switch(s){case"value":i=m;break;case"defaultValue":c=m;break;case"multiple":a=m;default:Ce(e,t,s,m,n,null)}t=i,n=c,e.multiple=!!a,t!=null?$n(e,!!a,t,!1):n!=null&&$n(e,!!a,n,!0);return;case"textarea":ue("invalid",e),i=s=a=null;for(c in n)if(n.hasOwnProperty(c)&&(m=n[c],m!=null))switch(c){case"value":a=m;break;case"defaultValue":s=m;break;case"children":i=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Ce(e,t,c,m,n,null)}bo(e,a,s,i);return;case"option":for(g in n)if(n.hasOwnProperty(g)&&(a=n[g],a!=null))switch(g){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ce(e,t,g,a,n,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(a=0;a<cs.length;a++)ue(cs[a],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(a=n[k],a!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ce(e,t,k,a,n,null)}return;default:if(Kr(t)){for(M in n)n.hasOwnProperty(M)&&(a=n[M],a!==void 0&&Ml(e,t,M,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&Ce(e,t,m,a,n,null))}function Xp(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,c=null,m=null,g=null,k=null,M=null;for(O in n){var H=n[O];if(n.hasOwnProperty(O)&&H!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":g=H;default:a.hasOwnProperty(O)||Ce(e,t,O,null,a,H)}}for(var _ in a){var O=a[_];if(H=n[_],a.hasOwnProperty(_)&&(O!=null||H!=null))switch(_){case"type":i=O;break;case"name":s=O;break;case"checked":k=O;break;case"defaultChecked":M=O;break;case"value":c=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:O!==H&&Ce(e,t,_,O,a,H)}}Xr(e,c,m,g,k,M,i,s);return;case"select":O=c=m=_=null;for(i in n)if(g=n[i],n.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":O=g;default:a.hasOwnProperty(i)||Ce(e,t,i,null,a,g)}for(s in a)if(i=a[s],g=n[s],a.hasOwnProperty(s)&&(i!=null||g!=null))switch(s){case"value":_=i;break;case"defaultValue":m=i;break;case"multiple":c=i;default:i!==g&&Ce(e,t,s,i,a,g)}t=m,n=c,a=O,_!=null?$n(e,!!n,_,!1):!!a!=!!n&&(t!=null?$n(e,!!n,t,!0):$n(e,!!n,n?[]:"",!1));return;case"textarea":O=_=null;for(m in n)if(s=n[m],n.hasOwnProperty(m)&&s!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ce(e,t,m,null,a,s)}for(c in a)if(s=a[c],i=n[c],a.hasOwnProperty(c)&&(s!=null||i!=null))switch(c){case"value":_=s;break;case"defaultValue":O=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:s!==i&&Ce(e,t,c,s,a,i)}jo(e,_,O);return;case"option":for(var I in n)if(_=n[I],n.hasOwnProperty(I)&&_!=null&&!a.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:Ce(e,t,I,null,a,_)}for(g in a)if(_=a[g],O=n[g],a.hasOwnProperty(g)&&_!==O&&(_!=null||O!=null))switch(g){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:Ce(e,t,g,_,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in n)_=n[te],n.hasOwnProperty(te)&&_!=null&&!a.hasOwnProperty(te)&&Ce(e,t,te,null,a,_);for(k in a)if(_=a[k],O=n[k],a.hasOwnProperty(k)&&_!==O&&(_!=null||O!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:Ce(e,t,k,_,a,O)}return;default:if(Kr(t)){for(var Ne in n)_=n[Ne],n.hasOwnProperty(Ne)&&_!==void 0&&!a.hasOwnProperty(Ne)&&Ml(e,t,Ne,void 0,a,_);for(M in a)_=a[M],O=n[M],!a.hasOwnProperty(M)||_===O||_===void 0&&O===void 0||Ml(e,t,M,_,a,O);return}}for(var C in n)_=n[C],n.hasOwnProperty(C)&&_!=null&&!a.hasOwnProperty(C)&&Ce(e,t,C,null,a,_);for(H in a)_=a[H],O=n[H],!a.hasOwnProperty(H)||_===O||_==null&&O==null||Ce(e,t,H,_,a,O)}function Sd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var s=n[a],i=s.transferSize,c=s.initiatorType,m=s.duration;if(i&&m&&Sd(c)){for(c=0,m=s.responseEnd,a+=1;a<n.length;a++){var g=n[a],k=g.startTime;if(k>m)break;var M=g.transferSize,H=g.initiatorType;M&&Sd(H)&&(g=g.responseEnd,c+=M*(g<m?1:(m-k)/(g-k)))}if(--a,t+=8*(i+c)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ul=null,Fl=null;function Er(e){return e.nodeType===9?e:e.ownerDocument}function Cd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hl=null;function Kp(){var e=window.event;return e&&e.type==="popstate"?e===Hl?!1:(Hl=e,!0):(Hl=null,!1)}var Td=typeof setTimeout=="function"?setTimeout:void 0,Qp=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,Jp=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(e){return Dd.resolve(null).then(e).catch(Wp)}:Td;function Wp(e){setTimeout(function(){throw e})}function xn(e){return e==="head"}function Ad(e,t){var n=t,a=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(s),Sa(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ds(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ds(n);for(var i=n.firstChild;i;){var c=i.nextSibling,m=i.nodeName;i[Aa]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=c}}else n==="body"&&ds(e.ownerDocument.body);n=s}while(n);Sa(t)}function kd(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function ql(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ql(n),$r(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ef(e,t,n,a){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Aa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function tf(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Rt(e.nextSibling),e===null))return null;return e}function wd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function Gl(e){return e.data==="$?"||e.data==="$~"}function Pl(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nf(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Yl=null;function _d(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Rt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function zd(e,t,n){switch(t=Er(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ds(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$r(e)}var St=new Map,Bd=new Set;function Rr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zt=G.d;G.d={f:af,r:sf,D:rf,C:lf,L:of,m:cf,X:df,S:uf,M:mf};function af(){var e=Zt.f(),t=fr();return e||t}function sf(e){var t=Pn(e);t!==null&&t.tag===5&&t.type==="form"?Jc(t):Zt.r(e)}var ba=typeof document>"u"?null:document;function Md(e,t,n){var a=ba;if(a&&typeof t=="string"&&t){var s=xt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Bd.has(s)||(Bd.add(s),e={rel:e,crossOrigin:n,href:t},a.querySelector(s)===null&&(t=a.createElement("link"),Ke(t,"link",e),Pe(t),a.head.appendChild(t)))}}function rf(e){Zt.D(e),Md("dns-prefetch",e,null)}function lf(e,t){Zt.C(e,t),Md("preconnect",e,t)}function of(e,t,n){Zt.L(e,t,n);var a=ba;if(a&&e&&t){var s='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+xt(n.imageSizes)+'"]')):s+='[href="'+xt(e)+'"]';var i=s;switch(t){case"style":i=Ea(e);break;case"script":i=Ra(e)}St.has(i)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),St.set(i,e),a.querySelector(s)!==null||t==="style"&&a.querySelector(ms(i))||t==="script"&&a.querySelector(ps(i))||(t=a.createElement("link"),Ke(t,"link",e),Pe(t),a.head.appendChild(t)))}}function cf(e,t){Zt.m(e,t);var n=ba;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+xt(a)+'"][href="'+xt(e)+'"]',i=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ra(e)}if(!St.has(i)&&(e=S({rel:"modulepreload",href:e},t),St.set(i,e),n.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ps(i)))return}a=n.createElement("link"),Ke(a,"link",e),Pe(a),n.head.appendChild(a)}}}function uf(e,t,n){Zt.S(e,t,n);var a=ba;if(a&&e){var s=Yn(a).hoistableStyles,i=Ea(e);t=t||"default";var c=s.get(i);if(!c){var m={loading:0,preload:null};if(c=a.querySelector(ms(i)))m.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=St.get(i))&&Vl(e,n);var g=c=a.createElement("link");Pe(g),Ke(g,"link",e),g._p=new Promise(function(k,M){g.onload=k,g.onerror=M}),g.addEventListener("load",function(){m.loading|=1}),g.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Sr(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:m},s.set(i,c)}}}function df(e,t){Zt.X(e,t);var n=ba;if(n&&e){var a=Yn(n).hoistableScripts,s=Ra(e),i=a.get(s);i||(i=n.querySelector(ps(s)),i||(e=S({src:e,async:!0},t),(t=St.get(s))&&$l(e,t),i=n.createElement("script"),Pe(i),Ke(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(s,i))}}function mf(e,t){Zt.M(e,t);var n=ba;if(n&&e){var a=Yn(n).hoistableScripts,s=Ra(e),i=a.get(s);i||(i=n.querySelector(ps(s)),i||(e=S({src:e,async:!0,type:"module"},t),(t=St.get(s))&&$l(e,t),i=n.createElement("script"),Pe(i),Ke(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(s,i))}}function Ud(e,t,n,a){var s=(s=le.current)?Rr(s):null;if(!s)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ea(n.href),n=Yn(s).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ea(n.href);var i=Yn(s).hoistableStyles,c=i.get(e);if(c||(s=s.ownerDocument||s,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=s.querySelector(ms(e)))&&!i._p&&(c.instance=i,c.state.loading=5),St.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},St.set(e,n),i||pf(s,e,n,c.state))),t&&a===null)throw Error(u(528,""));return c}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ra(n),n=Yn(s).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ea(e){return'href="'+xt(e)+'"'}function ms(e){return'link[rel="stylesheet"]['+e+"]"}function Fd(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function pf(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ke(t,"link",n),Pe(t),e.head.appendChild(t))}function Ra(e){return'[src="'+xt(e)+'"]'}function ps(e){return"script[async]"+e}function Ld(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+xt(n.href)+'"]');if(a)return t.instance=a,Pe(a),a;var s=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Pe(a),Ke(a,"style",s),Sr(a,n.precedence,e),t.instance=a;case"stylesheet":s=Ea(n.href);var i=e.querySelector(ms(s));if(i)return t.state.loading|=4,t.instance=i,Pe(i),i;a=Fd(n),(s=St.get(s))&&Vl(a,s),i=(e.ownerDocument||e).createElement("link"),Pe(i);var c=i;return c._p=new Promise(function(m,g){c.onload=m,c.onerror=g}),Ke(i,"link",a),t.state.loading|=4,Sr(i,n.precedence,e),t.instance=i;case"script":return i=Ra(n.src),(s=e.querySelector(ps(i)))?(t.instance=s,Pe(s),s):(a=n,(s=St.get(i))&&(a=S({},n),$l(a,s)),e=e.ownerDocument||e,s=e.createElement("script"),Pe(s),Ke(s,"link",a),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Sr(a,n.precedence,e));return t.instance}function Sr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,i=s,c=0;c<a.length;c++){var m=a[c];if(m.dataset.precedence===t)i=m;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vl(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $l(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cr=null;function Hd(e,t,n){if(Cr===null){var a=new Map,s=Cr=new Map;s.set(n,a)}else s=Cr,a=s.get(n),a||(a=new Map,s.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var i=n[s];if(!(i[Aa]||i[$e]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var m=a.get(c);m?m.push(i):a.set(c,[i])}}return a}function qd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ff(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hf(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Ea(a.href),i=t.querySelector(ms(s));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Nr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Pe(i);return}i=t.ownerDocument||t,a=Fd(a),(s=St.get(s))&&Vl(a,s),i=i.createElement("link"),Pe(i);var c=i;c._p=new Promise(function(m,g){c.onload=m,c.onerror=g}),Ke(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Nr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Il=0;function xf(e,t){return e.stylesheets&&e.count===0&&Dr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Dr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Il===0&&(Il=62500*Zp());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Dr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Il?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(s)}}:null}function Nr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Dr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Tr=null;function Dr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Tr=new Map,t.forEach(gf,e),Tr=null,Nr.call(e))}function gf(e,t){if(!(t.state.loading&4)){var n=Tr.get(e);if(n)var a=n.get(null);else{n=new Map,Tr.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var c=s[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),a=c)}a&&n.set(null,a)}s=t.instance,c=s.getAttribute("data-precedence"),i=n.get(c)||a,i===a&&n.set(null,s),n.set(c,s),this.count++,a=Nr.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var fs={$$typeof:L,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function vf(e,t,n,a,s,i,c,m,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gr(0),this.hiddenUpdates=Gr(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Pd(e,t,n,a,s,i,c,m,g,k,M,H){return e=new vf(e,t,n,c,g,k,M,H,m),t=1,i===!0&&(t|=24),i=ct(3,null,null,t),e.current=i,i.stateNode=e,t=Ni(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},ki(i),e}function Yd(e){return e?(e=ea,e):ea}function Vd(e,t,n,a,s,i){s=Yd(s),a.context===null?a.context=s:a.pendingContext=s,a=sn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=rn(e,a,t),n!==null&&(st(n,e,t),$a(n,e,t))}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xl(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function Id(e){if(e.tag===13||e.tag===31){var t=Dn(e,67108864);t!==null&&st(t,e,67108864),Xl(e,67108864)}}function Xd(e){if(e.tag===13||e.tag===31){var t=ft();t=Pr(t);var n=Dn(e,t);n!==null&&st(n,e,t),Xl(e,t)}}var Ar=!0;function yf(e,t,n,a){var s=B.T;B.T=null;var i=G.p;try{G.p=2,Zl(e,t,n,a)}finally{G.p=i,B.T=s}}function jf(e,t,n,a){var s=B.T;B.T=null;var i=G.p;try{G.p=8,Zl(e,t,n,a)}finally{G.p=i,B.T=s}}function Zl(e,t,n,a){if(Ar){var s=Kl(a);if(s===null)Bl(e,t,a,kr,n),Kd(e,a);else if(Ef(s,e,t,n,a))a.stopPropagation();else if(Kd(e,a),t&4&&-1<bf.indexOf(e)){for(;s!==null;){var i=Pn(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Rn(i.pendingLanes);if(c!==0){var m=i;for(m.pendingLanes|=2,m.entangledLanes|=2;c;){var g=1<<31-lt(c);m.entanglements[1]|=g,c&=~g}wt(i),(ye&6)===0&&(mr=rt()+500,os(0))}}break;case 31:case 13:m=Dn(i,2),m!==null&&st(m,i,2),fr(),Xl(i,2)}if(i=Kl(a),i===null&&Bl(e,t,a,kr,n),i===s)break;s=i}s!==null&&a.stopPropagation()}else Bl(e,t,a,null,n)}}function Kl(e){return e=Jr(e),Ql(e)}var kr=null;function Ql(e){if(kr=null,e=Gn(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=v(t),e!==null)return e;e=null}else if(n===31){if(e=A(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return kr=e,null}function Zd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rm()){case no:return 2;case ao:return 8;case ys:case im:return 32;case so:return 268435456;default:return 32}default:return 32}}var Jl=!1,gn=null,vn=null,yn=null,hs=new Map,xs=new Map,jn=[],bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kd(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":hs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(t.pointerId)}}function gs(e,t,n,a,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Pn(t),t!==null&&Id(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Ef(e,t,n,a,s){switch(t){case"focusin":return gn=gs(gn,e,t,n,a,s),!0;case"dragenter":return vn=gs(vn,e,t,n,a,s),!0;case"mouseover":return yn=gs(yn,e,t,n,a,s),!0;case"pointerover":var i=s.pointerId;return hs.set(i,gs(hs.get(i)||null,e,t,n,a,s)),!0;case"gotpointercapture":return i=s.pointerId,xs.set(i,gs(xs.get(i)||null,e,t,n,a,s)),!0}return!1}function Qd(e){var t=Gn(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=v(n),t!==null){e.blockedOn=t,uo(e.priority,function(){Xd(n)});return}}else if(t===31){if(t=A(n),t!==null){e.blockedOn=t,uo(e.priority,function(){Xd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kl(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Qr=a,n.target.dispatchEvent(a),Qr=null}else return t=Pn(n),t!==null&&Id(t),e.blockedOn=n,!1;t.shift()}return!0}function Jd(e,t,n){wr(e)&&n.delete(t)}function Rf(){Jl=!1,gn!==null&&wr(gn)&&(gn=null),vn!==null&&wr(vn)&&(vn=null),yn!==null&&wr(yn)&&(yn=null),hs.forEach(Jd),xs.forEach(Jd)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Rf)))}var Or=null;function Wd(e){Or!==e&&(Or=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Or===e&&(Or=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],s=e[t+2];if(typeof a!="function"){if(Ql(a||n)===null)continue;break}var i=Pn(n);i!==null&&(e.splice(t,3),t-=3,Ki(i,{pending:!0,data:s,method:n.method,action:a},a,s))}}))}function Sa(e){function t(g){return _r(g,e)}gn!==null&&_r(gn,e),vn!==null&&_r(vn,e),yn!==null&&_r(yn,e),hs.forEach(t),xs.forEach(t);for(var n=0;n<jn.length;n++){var a=jn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Qd(n),n.blockedOn===null&&jn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var s=n[a],i=n[a+1],c=s[Je]||null;if(typeof i=="function")c||Wd(n);else if(c){var m=null;if(i&&i.hasAttribute("formAction")){if(s=i,c=i[Je]||null)m=c.formAction;else if(Ql(s)!==null)continue}else m=c.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),Wd(n)}}}function em(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return s=c})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Wl(e){this._internalRoot=e}zr.prototype.render=Wl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=ft();Vd(n,a,e,t,null,null)},zr.prototype.unmount=Wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vd(e.current,2,null,e,null,null),fr(),t[qn]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=co();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&Qd(e)}};var tm=o.version;if(tm!=="19.2.0")throw Error(u(527,tm,"19.2.0"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var Sf={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Br.isDisabled&&Br.supportsFiber)try{Na=Br.inject(Sf),it=Br}catch{}}return reactDomClient_production.createRoot=function(e,t){if(!p(e))throw Error(u(299));var n=!1,a="",s=ou,i=cu,c=uu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Pd(e,1,!1,null,null,n,a,null,s,i,c,em),e[qn]=t.current,zl(e),new Wl(t)},reactDomClient_production.hydrateRoot=function(e,t,n){if(!p(e))throw Error(u(299));var a=!1,s="",i=ou,c=cu,m=uu,g=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(g=n.formState)),t=Pd(e,1,!0,t,n??null,a,s,g,i,c,m,em),t.context=Yd(null),n=t.current,a=ft(),a=Pr(a),s=sn(a),s.callback=null,rn(n,s,a),n=a,t.current.lanes=n,Da(t,n),wt(t),e[qn]=t.current,zl(e),new zr(t)},reactDomClient_production.version="19.2.0",reactDomClient_production}var hasRequiredClient;function requireClient(){if(hasRequiredClient)return client.exports;hasRequiredClient=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),client.exports=requireReactDomClient_production(),client.exports}var clientExports=requireClient(),reactExports=requireReact();const React=getDefaultExportFromCjs(reactExports);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const toKebabCase=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),toCamelCase=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,d,u)=>u?u.toUpperCase():d.toLowerCase()),toPascalCase=l=>{const o=toCamelCase(l);return o.charAt(0).toUpperCase()+o.slice(1)},mergeClasses=(...l)=>l.filter((o,d,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===d).join(" ").trim(),hasA11yProp=l=>{for(const o in l)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Icon=reactExports.forwardRef(({color:l="currentColor",size:o=24,strokeWidth:d=2,absoluteStrokeWidth:u,className:p="",children:f,iconNode:v,...A},y)=>reactExports.createElement("svg",{ref:y,...defaultAttributes,width:o,height:o,stroke:l,strokeWidth:u?Number(d)*24/Number(o):d,className:mergeClasses("lucide",p),...!f&&!hasA11yProp(A)&&{"aria-hidden":"true"},...A},[...v.map(([x,j])=>reactExports.createElement(x,j)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const createLucideIcon=(l,o)=>{const d=reactExports.forwardRef(({className:u,...p},f)=>reactExports.createElement(Icon,{ref:f,iconNode:o,className:mergeClasses(`lucide-${toKebabCase(toPascalCase(l))}`,`lucide-${l}`,u),...p}));return d.displayName=toPascalCase(l),d};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ChevronDown=createLucideIcon("chevron-down",__iconNode$6);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$5=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ChevronRight=createLucideIcon("chevron-right",__iconNode$5);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$4=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],CodeXml=createLucideIcon("code-xml",__iconNode$4);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$3=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Code=createLucideIcon("code",__iconNode$3);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Eye=createLucideIcon("eye",__iconNode$2);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Menu=createLucideIcon("menu",__iconNode$1);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],X=createLucideIcon("x",__iconNode),Input$1=reactExports.forwardRef(({label:l,error:o,helperText:d,icon:u,className:p="",...f},v)=>jsxRuntimeExports.jsxs("div",{className:"ui-input-wrapper",children:[l&&jsxRuntimeExports.jsx("label",{className:"ui-input-label",children:l}),jsxRuntimeExports.jsxs("div",{className:"ui-input-container",children:[u&&jsxRuntimeExports.jsx("span",{className:"ui-input-icon",children:u}),jsxRuntimeExports.jsx("input",{ref:v,className:`ui-input ${u?"has-icon":""} ${o?"error":""} ${p}`,...f})]}),o&&jsxRuntimeExports.jsx("span",{className:"ui-input-error",children:o}),d&&!o&&jsxRuntimeExports.jsx("span",{className:"ui-input-helper",children:d})]}));Input$1.displayName="Input";const Button=({children:l,variant:o="primary",size:d="md",loading:u=!1,icon:p,className:f="",...v})=>{const A=`ui-button ui-button-${o} ui-button-${d} ${u?"ui-button-loading":""} ${f}`;return jsxRuntimeExports.jsxs("button",{className:A,disabled:u||v.disabled,...v,children:[p&&!u&&p,l]})},Select$1=reactExports.forwardRef(({label:l,options:o=[],className:d="",...u},p)=>jsxRuntimeExports.jsxs("div",{className:"ui-select-wrapper",children:[l&&jsxRuntimeExports.jsx("label",{className:"ui-select-label",children:l}),jsxRuntimeExports.jsx("select",{ref:p,className:`ui-select ${d}`,...u,children:o.map((f,v)=>jsxRuntimeExports.jsx("option",{value:f.value,children:f.label},v))})]}));Select$1.displayName="Select";const Checkbox$1=reactExports.forwardRef(({label:l,className:o="",...d},u)=>jsxRuntimeExports.jsxs("label",{className:"ui-checkbox-wrapper",children:[jsxRuntimeExports.jsx("input",{ref:u,type:"checkbox",className:`ui-checkbox-input ${o}`,...d}),l&&jsxRuntimeExports.jsx("span",{className:"ui-checkbox-label",children:l})]}));Checkbox$1.displayName="Checkbox";const Switch=reactExports.forwardRef(({label:l,className:o="",...d},u)=>jsxRuntimeExports.jsxs("label",{className:"ui-switch-wrapper",children:[jsxRuntimeExports.jsx("input",{ref:u,type:"checkbox",className:`ui-switch-input ${o}`,...d}),l&&jsxRuntimeExports.jsx("span",{className:"ui-switch-label",children:l})]}));Switch.displayName="Switch";const Card=({children:l,className:o="",...d})=>jsxRuntimeExports.jsx("div",{className:`ui-card ${o}`,...d,children:l});Card.Header=({children:l,className:o=""})=>jsxRuntimeExports.jsx("div",{className:`ui-card-header ${o}`,children:l});Card.Title=({children:l,className:o=""})=>jsxRuntimeExports.jsx("h3",{className:`ui-card-title ${o}`,children:l});Card.Subtitle=({children:l,className:o=""})=>jsxRuntimeExports.jsx("p",{className:`ui-card-subtitle ${o}`,children:l});Card.Content=({children:l,className:o=""})=>jsxRuntimeExports.jsx("div",{className:`ui-card-content ${o}`,children:l});Card.Footer=({children:l,className:o=""})=>jsxRuntimeExports.jsx("div",{className:`ui-card-footer ${o}`,children:l});var reactDomExports=requireReactDom();const Modal=({isOpen:l,onClose:o,children:d})=>(reactExports.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[l]),l?reactDomExports.createPortal(jsxRuntimeExports.jsx("div",{className:"ui-modal-overlay",onClick:o,children:jsxRuntimeExports.jsx("div",{className:"ui-modal-content",onClick:u=>u.stopPropagation(),children:d})}),document.body):null);Modal.Header=({children:l,onClose:o})=>jsxRuntimeExports.jsxs("div",{className:"ui-modal-header",children:[jsxRuntimeExports.jsx("h2",{className:"ui-modal-title",children:l}),o&&jsxRuntimeExports.jsx("button",{className:"ui-modal-close",onClick:o,children:"✕"})]});Modal.Body=({children:l})=>jsxRuntimeExports.jsx("div",{className:"ui-modal-body",children:l});Modal.Footer=({children:l})=>jsxRuntimeExports.jsx("div",{className:"ui-modal-footer",children:l});const Tooltip=({children:l,content:o})=>jsxRuntimeExports.jsxs("div",{className:"ui-tooltip-wrapper",children:[l,jsxRuntimeExports.jsx("div",{className:"ui-tooltip-content",children:o})]});function ComingSoon(){return jsxRuntimeExports.jsx("div",{className:"coming-soon-page",children:jsxRuntimeExports.jsx(Card,{className:"coming-soon-card",children:jsxRuntimeExports.jsxs("div",{className:"coming-soon-content",children:[jsxRuntimeExports.jsx("h1",{className:"coming-title",children:"🚧 Coming Soon 🚧"}),jsxRuntimeExports.jsx("p",{className:"coming-subtitle",children:"Bài học này đang được xây dựng. Hãy quay lại sau nhé! 💻"}),jsxRuntimeExports.jsx("div",{className:"coming-illustration",children:"⏳"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"lg",className:"coming-home-button",onClick:()=>window.location.href="/",children:"← Quay về trang chính"})]})})})}function r(l){var o,d,u="";if(typeof l=="string"||typeof l=="number")u+=l;else if(typeof l=="object")if(Array.isArray(l)){var p=l.length;for(o=0;o<p;o++)l[o]&&(d=r(l[o]))&&(u&&(u+=" "),u+=d)}else for(d in l)l[d]&&(u&&(u+=" "),u+=d);return u}function clsx(){for(var l,o,d=0,u="",p=arguments.length;d<p;d++)(l=arguments[d])&&(o=r(l))&&(u&&(u+=" "),u+=o);return u}var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(l,o,d)=>o in l?__defProp(l,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[o]=d,__spreadValues=(l,o)=>{for(var d in o||(o={}))__hasOwnProp.call(o,d)&&__defNormalProp(l,d,o[d]);if(__getOwnPropSymbols)for(var d of __getOwnPropSymbols(o))__propIsEnum.call(o,d)&&__defNormalProp(l,d,o[d]);return l},__spreadProps=(l,o)=>__defProps(l,__getOwnPropDescs(o)),__objRest=(l,o)=>{var d={};for(var u in l)__hasOwnProp.call(l,u)&&o.indexOf(u)<0&&(d[u]=l[u]);if(l!=null&&__getOwnPropSymbols)for(var u of __getOwnPropSymbols(l))o.indexOf(u)<0&&__propIsEnum.call(l,u)&&(d[u]=l[u]);return d},__commonJS=(l,o)=>function(){return o||(0,l[__getOwnPropNames(l)[0]])((o={exports:{}}).exports,o),o.exports},__export=(l,o)=>{for(var d in o)__defProp(l,d,{get:o[d],enumerable:!0})},__copyProps=(l,o,d,u)=>{if(o&&typeof o=="object"||typeof o=="function")for(let p of __getOwnPropNames(o))!__hasOwnProp.call(l,p)&&p!==d&&__defProp(l,p,{get:()=>o[p],enumerable:!(u=__getOwnPropDesc(o,p))||u.enumerable});return l},__toESM=(l,o,d)=>(d=l!=null?__create(__getProtoOf(l)):{},__copyProps(!l||!l.__esModule?__defProp(d,"default",{value:l,enumerable:!0}):d,l)),require_prism=__commonJS({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(l,o){var d=(function(){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,f={},v={util:{encode:function h(R){return R instanceof A?new A(R.type,h(R.content),R.alias):Array.isArray(R)?R.map(h):R.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++p}),h.__id},clone:function h(R,N){N=N||{};var T,z;switch(v.util.type(R)){case"Object":if(z=v.util.objId(R),N[z])return N[z];T={},N[z]=T;for(var L in R)R.hasOwnProperty(L)&&(T[L]=h(R[L],N));return T;case"Array":return z=v.util.objId(R),N[z]?N[z]:(T=[],N[z]=T,R.forEach(function(V,ne){T[ne]=h(V,N)}),T);default:return R}},getLanguage:function(h){for(;h;){var R=u.exec(h.className);if(R)return R[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,R){h.className=h.className.replace(RegExp(u,"gi"),""),h.classList.add("language-"+R)},isActive:function(h,R,N){for(var T="no-"+R;h;){var z=h.classList;if(z.contains(R))return!0;if(z.contains(T))return!1;h=h.parentElement}return!!N}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(h,R){var N=v.util.clone(v.languages[h]);for(var T in R)N[T]=R[T];return N},insertBefore:function(h,R,N,T){T=T||v.languages;var z=T[h],L={};for(var V in z)if(z.hasOwnProperty(V)){if(V==R)for(var ne in N)N.hasOwnProperty(ne)&&(L[ne]=N[ne]);N.hasOwnProperty(V)||(L[V]=z[V])}var de=T[h];return T[h]=L,v.languages.DFS(v.languages,function(K,P){P===de&&K!=h&&(this[K]=L)}),L},DFS:function h(R,N,T,z){z=z||{};var L=v.util.objId;for(var V in R)if(R.hasOwnProperty(V)){N.call(R,V,R[V],T||V);var ne=R[V],de=v.util.type(ne);de==="Object"&&!z[L(ne)]?(z[L(ne)]=!0,h(ne,N,null,z)):de==="Array"&&!z[L(ne)]&&(z[L(ne)]=!0,h(ne,N,V,z))}}},plugins:{},highlight:function(h,R,N){var T={code:h,grammar:R,language:N};if(v.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=v.tokenize(T.code,T.grammar),v.hooks.run("after-tokenize",T),A.stringify(v.util.encode(T.tokens),T.language)},tokenize:function(h,R){var N=R.rest;if(N){for(var T in N)R[T]=N[T];delete R.rest}var z=new j;return S(z,z.head,h),x(h,z,R,z.head,0),q(z)},hooks:{all:{},add:function(h,R){var N=v.hooks.all;N[h]=N[h]||[],N[h].push(R)},run:function(h,R){var N=v.hooks.all[h];if(!(!N||!N.length))for(var T=0,z;z=N[T++];)z(R)}},Token:A};function A(h,R,N,T){this.type=h,this.content=R,this.alias=N,this.length=(T||"").length|0}A.stringify=function h(R,N){if(typeof R=="string")return R;if(Array.isArray(R)){var T="";return R.forEach(function(de){T+=h(de,N)}),T}var z={type:R.type,content:h(R.content,N),tag:"span",classes:["token",R.type],attributes:{},language:N},L=R.alias;L&&(Array.isArray(L)?Array.prototype.push.apply(z.classes,L):z.classes.push(L)),v.hooks.run("wrap",z);var V="";for(var ne in z.attributes)V+=" "+ne+'="'+(z.attributes[ne]||"").replace(/"/g,"&quot;")+'"';return"<"+z.tag+' class="'+z.classes.join(" ")+'"'+V+">"+z.content+"</"+z.tag+">"};function y(h,R,N,T){h.lastIndex=R;var z=h.exec(N);if(z&&T&&z[1]){var L=z[1].length;z.index+=L,z[0]=z[0].slice(L)}return z}function x(h,R,N,T,z,L){for(var V in N)if(!(!N.hasOwnProperty(V)||!N[V])){var ne=N[V];ne=Array.isArray(ne)?ne:[ne];for(var de=0;de<ne.length;++de){if(L&&L.cause==V+","+de)return;var K=ne[de],P=K.inside,W=!!K.lookbehind,ee=!!K.greedy,se=K.alias;if(ee&&!K.pattern.global){var ie=K.pattern.toString().match(/[imsuy]*$/)[0];K.pattern=RegExp(K.pattern.source,ie+"g")}for(var Ge=K.pattern||K,Re=T.next,_e=z;Re!==R.tail&&!(L&&_e>=L.reach);_e+=Re.value.length,Re=Re.next){var B=Re.value;if(R.length>h.length)return;if(!(B instanceof A)){var G=1,Q;if(ee){if(Q=y(Ge,_e,h,W),!Q||Q.index>=h.length)break;var F=Q.index,je=Q.index+Q[0].length,me=_e;for(me+=Re.value.length;F>=me;)Re=Re.next,me+=Re.value.length;if(me-=Re.value.length,_e=me,Re.value instanceof A)continue;for(var E=Re;E!==R.tail&&(me<je||typeof E.value=="string");E=E.next)G++,me+=E.value.length;G--,B=h.slice(_e,me),Q.index-=_e}else if(Q=y(Ge,0,B,W),!Q)continue;var F=Q.index,Y=Q[0],$=B.slice(0,F),ae=B.slice(F+Y.length),le=_e+B.length;L&&le>L.reach&&(L.reach=le);var he=Re.prev;$&&(he=S(R,he,$),_e+=$.length),w(R,he,G);var Ve=new A(V,P?v.tokenize(Y,P):Y,se,Y);if(Re=S(R,he,Ve),ae&&S(R,Re,ae),G>1){var De={cause:V+","+de,reach:le};x(h,R,N,Re.prev,_e,De),L&&De.reach>L.reach&&(L.reach=De.reach)}}}}}}function j(){var h={value:null,prev:null,next:null},R={value:null,prev:h,next:null};h.next=R,this.head=h,this.tail=R,this.length=0}function S(h,R,N){var T=R.next,z={value:N,prev:R,next:T};return R.next=z,T.prev=z,h.length++,z}function w(h,R,N){for(var T=R.next,z=0;z<N&&T!==h.tail;z++)T=T.next;R.next=T,T.prev=R,h.length-=z}function q(h){for(var R=[],N=h.head.next;N!==h.tail;)R.push(N.value),N=N.next;return R}return v})();o.exports=d,d.default=d}}),Prism=__toESM(require_prism());Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(l,u){var d={},d=(d["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[u]},d.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}}),u=(d["language-"+u]={pattern:/[\s\S]+/,inside:Prism.languages[u]},{});u[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:d},Prism.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(l,o){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:Prism.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,(function(l){var o={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},d=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,u="(?:[^\\\\-]|"+d.source+")",u=RegExp(u+"-"+u),p={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};l.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:u,inside:{escape:d,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":o,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:d}},"special-escape":o,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":p}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:d,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":p}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,Prism.languages.actionscript=Prism.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),Prism.languages.actionscript["class-name"].alias="function",delete Prism.languages.actionscript.parameter,delete Prism.languages.actionscript["literal-property"],Prism.languages.markup&&Prism.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:Prism.languages.markup}}),(function(l){var o=/#(?!\{).+/,d={pattern:/#\{[^}]+\}/,alias:"variable"};l.languages.coffeescript=l.languages.extend("javascript",{comment:o,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:d}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),l.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:o,interpolation:d}}}),l.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:l.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:d}}]}),l.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete l.languages.coffeescript["template-string"],l.languages.coffee=l.languages.coffeescript})(Prism),(function(l){var o=l.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(o,"addSupport",{value:function(d,u){(d=typeof d=="string"?[d]:d).forEach(function(p){var f=function(S){S.inside||(S.inside={}),S.inside.rest=u},v="doc-comment";if(A=l.languages[p]){var A,y=A[v];if((y=y||(A=l.languages.insertBefore(p,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[v])instanceof RegExp&&(y=A[v]={pattern:y}),Array.isArray(y))for(var x=0,j=y.length;x<j;x++)y[x]instanceof RegExp&&(y[x]={pattern:y[x]}),f(y[x]);else f(y)}})}}),o.addSupport(["java","javascript","php"],o)})(Prism),(function(l){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,o=(l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup);o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(Prism),(function(l){var o=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,o=(l.languages.css.selector={pattern:l.languages.css.selector.pattern,lookbehind:!0,inside:o={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+o.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[o,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},l.languages.css.atrule.inside["selector-function-argument"].inside=o,l.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),d={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};l.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:o,number:d,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:o,number:d})})(Prism),(function(l){var o=/[*&][^\s[\]{},]+/,d=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,u="(?:"+d.source+"(?:[ 	]+"+o.source+")?|"+o.source+"(?:[ 	]+"+d.source+")?)",p=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),f=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function v(A,y){y=(y||"").replace(/m/g,"")+"m";var x=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return u}).replace(/<<value>>/g,function(){return A});return RegExp(x,y)}l.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return u})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return u}).replace(/<<key>>/g,function(){return"(?:"+p+"|"+f+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:v(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:v(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:v(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:v(f),lookbehind:!0,greedy:!0},number:{pattern:v(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:d,important:o,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},l.languages.yml=l.languages.yaml})(Prism),(function(l){var o=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function d(x){return x=x.replace(/<inner>/g,function(){return o}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+x+")")}var u=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,p=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return u}),f=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,v=(l.languages.markdown=l.languages.extend("markup",{}),l.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:l.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+p+f+"(?:"+p+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+p+f+")(?:"+p+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(u),inside:l.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+p+")"+f+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+p+"$"),inside:{"table-header":{pattern:RegExp(u),alias:"important",inside:l.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:d(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:d(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:d(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:d(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(x){["url","bold","italic","strike","code-snippet"].forEach(function(j){x!==j&&(l.languages.markdown[x].inside.content.inside[j]=l.languages.markdown[j])})}),l.hooks.add("after-tokenize",function(x){x.language!=="markdown"&&x.language!=="md"||(function j(S){if(S&&typeof S!="string")for(var w=0,q=S.length;w<q;w++){var h,R=S[w];R.type!=="code"?j(R.content):(h=R.content[1],R=R.content[3],h&&R&&h.type==="code-language"&&R.type==="code-block"&&typeof h.content=="string"&&(h=h.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),h="language-"+(h=(/[a-z][\w-]*/i.exec(h)||[""])[0].toLowerCase()),R.alias?typeof R.alias=="string"?R.alias=[R.alias,h]:R.alias.push(h):R.alias=[h]))}})(x.tokens)}),l.hooks.add("wrap",function(x){if(x.type==="code-block"){for(var j="",S=0,w=x.classes.length;S<w;S++){var q=x.classes[S],q=/language-(.+)/.exec(q);if(q){j=q[1];break}}var h,R=l.languages[j];R?x.content=l.highlight((function(N){return N=N.replace(v,""),N=N.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(T,z){var L;return(z=z.toLowerCase())[0]==="#"?(L=z[1]==="x"?parseInt(z.slice(2),16):Number(z.slice(1)),y(L)):A[z]||T})})(x.content),R,j):j&&j!=="none"&&l.plugins.autoloader&&(h="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),x.attributes.id=h,l.plugins.autoloader.loadLanguages(j,function(){var N=document.getElementById(h);N&&(N.innerHTML=l.highlight(N.textContent,l.languages[j],j))}))}}),RegExp(l.languages.markup.tag.pattern.source,"gi")),A={amp:"&",lt:"<",gt:">",quot:'"'},y=String.fromCodePoint||String.fromCharCode;l.languages.md=l.languages.markdown})(Prism),Prism.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Prism.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},Prism.hooks.add("after-tokenize",function(l){if(l.language==="graphql")for(var o=l.tokens.filter(function(h){return typeof h!="string"&&h.type!=="comment"&&h.type!=="scalar"}),d=0;d<o.length;){var u=o[d++];if(u.type==="keyword"&&u.content==="mutation"){var p=[];if(S(["definition-mutation","punctuation"])&&j(1).content==="("){d+=2;var f=w(/^\($/,/^\)$/);if(f===-1)continue;for(;d<f;d++){var v=j(0);v.type==="variable"&&(q(v,"variable-input"),p.push(v.content))}d=f+1}if(S(["punctuation","property-query"])&&j(0).content==="{"&&(d++,q(j(0),"property-mutation"),0<p.length)){var A=w(/^\{$/,/^\}$/);if(A!==-1)for(var y=d;y<A;y++){var x=o[y];x.type==="variable"&&0<=p.indexOf(x.content)&&q(x,"variable-input")}}}}function j(h){return o[d+h]}function S(h,R){R=R||0;for(var N=0;N<h.length;N++){var T=j(N+R);if(!T||T.type!==h[N])return}return 1}function w(h,R){for(var N=1,T=d;T<o.length;T++){var z=o[T],L=z.content;if(z.type==="punctuation"&&typeof L=="string"){if(h.test(L))N++;else if(R.test(L)&&--N===0)return T}}return-1}function q(h,R){var N=h.alias;N?Array.isArray(N)||(h.alias=N=[N]):h.alias=N=[],N.push(R)}}),Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},(function(l){var o=l.languages.javascript["template-string"],d=o.pattern.source,u=o.inside.interpolation,p=u.inside["interpolation-punctuation"],f=u.pattern.source;function v(S,w){if(l.languages[S])return{pattern:RegExp("((?:"+w+")\\s*)"+d),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:S}}}}function A(S,w,q){return S={code:S,grammar:w,language:q},l.hooks.run("before-tokenize",S),S.tokens=l.tokenize(S.code,S.grammar),l.hooks.run("after-tokenize",S),S.tokens}function y(S,w,q){var N=l.tokenize(S,{interpolation:{pattern:RegExp(f),lookbehind:!0}}),h=0,R={},N=A(N.map(function(z){if(typeof z=="string")return z;for(var L,V,z=z.content;S.indexOf((V=h++,L="___"+q.toUpperCase()+"_"+V+"___"))!==-1;);return R[L]=z,L}).join(""),w,q),T=Object.keys(R);return h=0,(function z(L){for(var V=0;V<L.length;V++){if(h>=T.length)return;var ne,de,K,P,W,ee,se,ie=L[V];typeof ie=="string"||typeof ie.content=="string"?(ne=T[h],(se=(ee=typeof ie=="string"?ie:ie.content).indexOf(ne))!==-1&&(++h,de=ee.substring(0,se),W=R[ne],K=void 0,(P={})["interpolation-punctuation"]=p,(P=l.tokenize(W,P)).length===3&&((K=[1,1]).push.apply(K,A(P[1],l.languages.javascript,"javascript")),P.splice.apply(P,K)),K=new l.Token("interpolation",P,u.alias,W),P=ee.substring(se+ne.length),W=[],de&&W.push(de),W.push(K),P&&(z(ee=[P]),W.push.apply(W,ee)),typeof ie=="string"?(L.splice.apply(L,[V,1].concat(W)),V+=W.length-1):ie.content=W)):(se=ie.content,Array.isArray(se)?z(se):z([se]))}})(N),new l.Token(q,N,"language-"+q,S)}l.languages.javascript["template-string"]=[v("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),v("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),v("svg",/\bsvg/.source),v("markdown",/\b(?:markdown|md)/.source),v("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),v("sql",/\bsql/.source),o].filter(Boolean);var x={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function j(S){return typeof S=="string"?S:Array.isArray(S)?S.map(j).join(""):j(S.content)}l.hooks.add("after-tokenize",function(S){S.language in x&&(function w(q){for(var h=0,R=q.length;h<R;h++){var N,T,z,L=q[h];typeof L!="string"&&(N=L.content,Array.isArray(N)?L.type==="template-string"?(L=N[1],N.length===3&&typeof L!="string"&&L.type==="embedded-code"&&(T=j(L),L=L.alias,L=Array.isArray(L)?L[0]:L,z=l.languages[L])&&(N[1]=y(T,z,L))):w(N):typeof N!="string"&&w([N]))}})(S.tokens)})})(Prism),(function(l){l.languages.typescript=l.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),l.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete l.languages.typescript.parameter,delete l.languages.typescript["literal-property"];var o=l.languages.extend("typescript",{});delete o["class-name"],l.languages.typescript["class-name"].inside=o,l.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o}}}}),l.languages.ts=l.languages.typescript})(Prism),(function(l){var o=l.languages.javascript,d=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,u="(@(?:arg|argument|param|property)\\s+(?:"+d+"\\s+)?)";l.languages.jsdoc=l.languages.extend("javadoclike",{parameter:{pattern:RegExp(u+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),l.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(u+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:o,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return d})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+d),lookbehind:!0,inside:{string:o.string,number:o.number,boolean:o.boolean,keyword:l.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:o,alias:"language-javascript"}}}}),l.languages.javadoclike.addSupport("javascript",l.languages.jsdoc)})(Prism),(function(l){l.languages.flow=l.languages.extend("javascript",{}),l.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),l.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete l.languages.flow.parameter,l.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(l.languages.flow.keyword)||(l.languages.flow.keyword=[l.languages.flow.keyword]),l.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})})(Prism),Prism.languages.n4js=Prism.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),Prism.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),Prism.languages.n4jsd=Prism.languages.n4js,(function(l){function o(v,A){return RegExp(v.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),A)}l.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+l.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),l.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+l.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),l.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),l.languages.insertBefore("javascript","keyword",{imports:{pattern:o(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:l.languages.javascript},exports:{pattern:o(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:l.languages.javascript}}),l.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),l.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),l.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:o(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var d=["function","function-variable","method","method-variable","property-access"],u=0;u<d.length;u++){var f=d[u],p=l.languages.javascript[f],f=(p=l.util.type(p)==="RegExp"?l.languages.javascript[f]={pattern:p}:p).inside||{};(p.inside=f)["maybe-class-name"]=/^[A-Z][\s\S]*/}})(Prism),(function(l){var o=l.util.clone(l.languages.javascript),d=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,u=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,p=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function f(y,x){return y=y.replace(/<S>/g,function(){return d}).replace(/<BRACES>/g,function(){return u}).replace(/<SPREAD>/g,function(){return p}),RegExp(y,x)}p=f(p).source,l.languages.jsx=l.languages.extend("markup",o),l.languages.jsx.tag.pattern=f(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),l.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,l.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,l.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,l.languages.jsx.tag.inside.comment=o.comment,l.languages.insertBefore("inside","attr-name",{spread:{pattern:f(/<SPREAD>/.source),inside:l.languages.jsx}},l.languages.jsx.tag),l.languages.insertBefore("inside","special-attr",{script:{pattern:f(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:l.languages.jsx}}},l.languages.jsx.tag);function v(y){for(var x=[],j=0;j<y.length;j++){var S=y[j],w=!1;typeof S!="string"&&(S.type==="tag"&&S.content[0]&&S.content[0].type==="tag"?S.content[0].content[0].content==="</"?0<x.length&&x[x.length-1].tagName===A(S.content[0].content[1])&&x.pop():S.content[S.content.length-1].content!=="/>"&&x.push({tagName:A(S.content[0].content[1]),openedBraces:0}):0<x.length&&S.type==="punctuation"&&S.content==="{"?x[x.length-1].openedBraces++:0<x.length&&0<x[x.length-1].openedBraces&&S.type==="punctuation"&&S.content==="}"?x[x.length-1].openedBraces--:w=!0),(w||typeof S=="string")&&0<x.length&&x[x.length-1].openedBraces===0&&(w=A(S),j<y.length-1&&(typeof y[j+1]=="string"||y[j+1].type==="plain-text")&&(w+=A(y[j+1]),y.splice(j+1,1)),0<j&&(typeof y[j-1]=="string"||y[j-1].type==="plain-text")&&(w=A(y[j-1])+w,y.splice(j-1,1),j--),y[j]=new l.Token("plain-text",w,null,w)),S.content&&typeof S.content!="string"&&v(S.content)}}var A=function(y){return y?typeof y=="string"?y:typeof y.content=="string"?y.content:y.content.map(A).join(""):""};l.hooks.add("after-tokenize",function(y){y.language!=="jsx"&&y.language!=="tsx"||v(y.tokens)})})(Prism),(function(l){var o=l.util.clone(l.languages.typescript),o=(l.languages.tsx=l.languages.extend("jsx",o),delete l.languages.tsx.parameter,delete l.languages.tsx["literal-property"],l.languages.tsx.tag);o.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+o.pattern.source+")",o.pattern.flags),o.lookbehind=!0})(Prism),Prism.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},Prism.languages.swift["string-literal"].forEach(function(l){l.inside.interpolation.inside=Prism.languages.swift}),(function(l){l.languages.kotlin=l.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete l.languages.kotlin["class-name"];var o={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:l.languages.kotlin}};l.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:o},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:o},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete l.languages.kotlin.string,l.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),l.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),l.languages.kt=l.languages.kotlin,l.languages.kts=l.languages.kotlin})(Prism),Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean,Prism.languages.objectivec=Prism.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete Prism.languages.objectivec["class-name"],Prism.languages.objc=Prism.languages.objectivec,Prism.languages.reason=Prism.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),Prism.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete Prism.languages.reason.function,(function(l){for(var o=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,d=0;d<2;d++)o=o.replace(/<self>/g,function(){return o});o=o.replace(/<self>/g,function(){return/[^\s\S]/.source}),l.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+o),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},l.languages.rust["closure-params"].inside.rest=l.languages.rust,l.languages.rust.attribute.inside.string=l.languages.rust.string})(Prism),Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"],(function(l){var o=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,d=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return o.source});l.languages.cpp=l.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return o.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:o,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),l.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return d})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),l.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:l.languages.cpp}}}}),l.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),l.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:l.languages.extend("cpp",{})}}),l.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},l.languages.cpp["base-clause"])})(Prism),Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python,Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;var themes_exports={};__export(themes_exports,{dracula:()=>dracula_default,duotoneDark:()=>duotoneDark_default,duotoneLight:()=>duotoneLight_default,github:()=>github_default,gruvboxMaterialDark:()=>gruvboxMaterialDark_default,gruvboxMaterialLight:()=>gruvboxMaterialLight_default,jettwaveDark:()=>jettwaveDark_default,jettwaveLight:()=>jettwaveLight_default,nightOwl:()=>nightOwl_default,nightOwlLight:()=>nightOwlLight_default,oceanicNext:()=>oceanicNext_default,okaidia:()=>okaidia_default,oneDark:()=>oneDark_default,oneLight:()=>oneLight_default,palenight:()=>palenight_default,shadesOfPurple:()=>shadesOfPurple_default,synthwave84:()=>synthwave84_default,ultramin:()=>ultramin_default,vsDark:()=>vsDark_default,vsLight:()=>vsLight_default});var theme={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},dracula_default=theme,theme2={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},duotoneDark_default=theme2,theme3={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},duotoneLight_default=theme3,theme4={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},github_default=theme4,theme5={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},nightOwl_default=theme5,theme6={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},nightOwlLight_default=theme6,colors={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},theme7={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:colors.keyword}},{types:["attr-value"],style:{color:colors.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:colors.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:colors.primitive}},{types:["boolean"],style:{color:colors.boolean}},{types:["tag"],style:{color:colors.tag}},{types:["string"],style:{color:colors.string}},{types:["punctuation"],style:{color:colors.string}},{types:["selector","char","builtin","inserted"],style:{color:colors.char}},{types:["function"],style:{color:colors.function}},{types:["operator","entity","url","variable"],style:{color:colors.variable}},{types:["keyword"],style:{color:colors.keyword}},{types:["atrule","class-name"],style:{color:colors.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},oceanicNext_default=theme7,theme8={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},okaidia_default=theme8,theme9={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},palenight_default=theme9,theme10={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},shadesOfPurple_default=theme10,theme11={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},synthwave84_default=theme11,theme12={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},ultramin_default=theme12,theme13={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},vsDark_default=theme13,theme14={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},vsLight_default=theme14,theme15={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},jettwaveDark_default=theme15,theme16={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},jettwaveLight_default=theme16,theme17={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},oneDark_default=theme17,theme18={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},oneLight_default=theme18,theme19={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},gruvboxMaterialDark_default=theme19,theme20={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},gruvboxMaterialLight_default=theme20,useGetLineProps=l=>reactExports.useCallback(o=>{var d=o,{className:u,style:p,line:f}=d,v=__objRest(d,["className","style","line"]);const A=__spreadProps(__spreadValues({},v),{className:clsx("token-line",u)});return typeof l=="object"&&"plain"in l&&(A.style=l.plain),typeof p=="object"&&(A.style=__spreadValues(__spreadValues({},A.style||{}),p)),A},[l]),useGetTokenProps=l=>{const o=reactExports.useCallback(({types:d,empty:u})=>{if(l!=null){{if(d.length===1&&d[0]==="plain")return u!=null?{display:"inline-block"}:void 0;if(d.length===1&&u!=null)return l[d[0]]}return Object.assign(u!=null?{display:"inline-block"}:{},...d.map(p=>l[p]))}},[l]);return reactExports.useCallback(d=>{var u=d,{token:p,className:f,style:v}=u,A=__objRest(u,["token","className","style"]);const y=__spreadProps(__spreadValues({},A),{className:clsx("token",...p.types,f),children:p.content,style:o(p)});return v!=null&&(y.style=__spreadValues(__spreadValues({},y.style||{}),v)),y},[o])},newlineRe=/\r\n|\r|\n/,normalizeEmptyLines=l=>{l.length===0?l.push({types:["plain"],content:`
`,empty:!0}):l.length===1&&l[0].content===""&&(l[0].content=`
`,l[0].empty=!0)},appendTypes=(l,o)=>{const d=l.length;return d>0&&l[d-1]===o?l:l.concat(o)},normalizeTokens=l=>{const o=[[]],d=[l],u=[0],p=[l.length];let f=0,v=0,A=[];const y=[A];for(;v>-1;){for(;(f=u[v]++)<p[v];){let x,j=o[v];const w=d[v][f];if(typeof w=="string"?(j=v>0?j:["plain"],x=w):(j=appendTypes(j,w.type),w.alias&&(j=appendTypes(j,w.alias)),x=w.content),typeof x!="string"){v++,o.push(j),d.push(x),u.push(0),p.push(x.length);continue}const q=x.split(newlineRe),h=q.length;A.push({types:j,content:q[0]});for(let R=1;R<h;R++)normalizeEmptyLines(A),y.push(A=[]),A.push({types:j,content:q[R]})}v--,o.pop(),d.pop(),u.pop(),p.pop()}return normalizeEmptyLines(A),y},normalizeTokens_default=normalizeTokens,useTokenize=({prism:l,code:o,grammar:d,language:u})=>reactExports.useMemo(()=>{if(d==null)return normalizeTokens_default([o]);const p={code:o,grammar:d,language:u,tokens:[]};return l.hooks.run("before-tokenize",p),p.tokens=l.tokenize(o,d),l.hooks.run("after-tokenize",p),normalizeTokens_default(p.tokens)},[o,d,u,l]),themeToDict=(l,o)=>{const{plain:d}=l,u=l.styles.reduce((p,f)=>{const{languages:v,style:A}=f;return v&&!v.includes(o)||f.types.forEach(y=>{const x=__spreadValues(__spreadValues({},p[y]),A);p[y]=x}),p},{});return u.root=d,u.plain=__spreadProps(__spreadValues({},d),{backgroundColor:void 0}),u},themeToDict_default=themeToDict,Highlight=({children:l,language:o,code:d,theme:u,prism:p})=>{const f=o.toLowerCase(),v=themeToDict_default(u,f),A=useGetLineProps(v),y=useGetTokenProps(v),x=p.languages[f],j=useTokenize({prism:p,language:f,code:d,grammar:x});return l({tokens:j,className:`prism-code language-${f}`,style:v!=null?v.root:{},getLineProps:A,getTokenProps:y})},Highlight2=l=>reactExports.createElement(Highlight,__spreadProps(__spreadValues({},l),{prism:l.prism||Prism,theme:l.theme||vsDark_default,code:l.code,language:l.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const ExerciseCard=({children:l})=>{const[o,d]=reactExports.useState(!1),[u,p]=reactExports.useState("demo"),f=l.find(x=>x.type===ExerciseCard.Header),v=l.find(x=>x.type===ExerciseCard.Description),A=l.find(x=>x.type===ExerciseCard.Demo),y=l.find(x=>x.type===ExerciseCard.Code);return jsxRuntimeExports.jsxs("div",{className:"exercise-card",children:[jsxRuntimeExports.jsxs("div",{className:"exercise-header",onClick:()=>d(!o),children:[jsxRuntimeExports.jsx("div",{className:"exercise-header-left",children:f}),jsxRuntimeExports.jsx("div",{className:"expand-icon",children:o?jsxRuntimeExports.jsx(ChevronDown,{size:20}):jsxRuntimeExports.jsx(ChevronRight,{size:20})})]}),o&&jsxRuntimeExports.jsxs("div",{className:"solution-container",children:[jsxRuntimeExports.jsx("div",{className:"exercise-description",children:v}),jsxRuntimeExports.jsxs("div",{className:"tabs-container",children:[jsxRuntimeExports.jsxs("button",{className:`tab ${u==="demo"?"tab-active":""}`,onClick:()=>p("demo"),children:[jsxRuntimeExports.jsx(Eye,{size:16}),jsxRuntimeExports.jsx("span",{children:"Demo"})]}),jsxRuntimeExports.jsxs("button",{className:`tab ${u==="code"?"tab-active":""}`,onClick:()=>p("code"),children:[jsxRuntimeExports.jsx(Code,{size:16}),jsxRuntimeExports.jsx("span",{children:"Code"})]})]}),jsxRuntimeExports.jsx("div",{className:"tab-content",children:u==="demo"?jsxRuntimeExports.jsx("div",{className:"demo-slot",children:A}):jsxRuntimeExports.jsxs("div",{className:"code-container",children:[jsxRuntimeExports.jsx("div",{className:"code-header",children:jsxRuntimeExports.jsx("span",{className:"code-lang",children:"jsx"})}),jsxRuntimeExports.jsx(Highlight2,{theme:themes_exports.nightOwl,code:y?.props?.children||"",language:"jsx",children:({className:x,style:j,tokens:S,getLineProps:w,getTokenProps:q})=>jsxRuntimeExports.jsx("pre",{className:x,style:{...j,overflowX:"auto",borderRadius:8},children:S.map((h,R)=>jsxRuntimeExports.jsx("div",{...w({line:h,key:R}),children:h.map((N,T)=>jsxRuntimeExports.jsx("span",{...q({token:N,key:T})},T))},R))})})]})})]})]})};ExerciseCard.Header=({order:l,title:o})=>jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("div",{className:"exercise-number",children:l??"#"}),jsxRuntimeExports.jsx("h3",{className:"exercise-title",children:o})]});ExerciseCard.Description=({children:l})=>jsxRuntimeExports.jsx("pre",{className:"exercise-description-block",children:jsxRuntimeExports.jsx("code",{children:l})});ExerciseCard.Demo=({children:l})=>jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:l});ExerciseCard.Code=({children:l})=>jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:l});const init$3={name:"Wireless Headphones",price:99.99,currency:"USD",inStock:!0,rating:4.5,reviews:128,discount:20,image:"https://placehold.co/600x400?text=Headphones"};function ProductCard$2({product:l=init$3}){const o={true:"in",false:"out"},d=l.price*(1-l.discount/100),u=Math.round(l.rating);return jsxRuntimeExports.jsxs(Card,{className:"product-card-modern",children:[jsxRuntimeExports.jsxs("div",{className:"product-image-wrapper",children:[jsxRuntimeExports.jsx("img",{src:l.image,alt:l.name,className:"product-image"}),jsxRuntimeExports.jsx("div",{className:"product-image-overlay"}),l.discount>0&&jsxRuntimeExports.jsxs("div",{className:"discount-badge-premium",children:["−",l.discount,"%"]}),jsxRuntimeExports.jsx("div",{className:`stock-dot ${l.inStock?"":"out"}`})]}),jsxRuntimeExports.jsxs(Card.Content,{style:{padding:"24px"},children:[jsxRuntimeExports.jsx("h3",{className:"product-name-gradient",children:l.name}),jsxRuntimeExports.jsxs("div",{className:"product-price-wrapper",children:[jsxRuntimeExports.jsxs("span",{className:"price-discounted",children:[l.currency," ",d.toFixed(2)]}),l.discount>0&&jsxRuntimeExports.jsxs("span",{className:"price-original",children:[l.currency," ",l.price.toFixed(2)]})]}),jsxRuntimeExports.jsxs("div",{className:"product-rating-modern",children:[jsxRuntimeExports.jsx("div",{className:"rating-stars",children:[...Array(5)].map((p,f)=>jsxRuntimeExports.jsx("span",{className:f<u?"filled":"empty",children:"★"},f))}),jsxRuntimeExports.jsx("span",{className:"rating-value",children:l.rating}),jsxRuntimeExports.jsxs("span",{className:"reviews-count",children:["• ",l.reviews," đánh giá"]})]}),jsxRuntimeExports.jsxs("div",{className:`stock-pill ${o[l.inStock]}`,children:[jsxRuntimeExports.jsx("span",{className:"stock-pill-dot"}),l.inStock?"In Stock":"Out of Stock"]}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"lg",className:"product-cta-button",disabled:!l.inStock,children:l.inStock?"Thêm vào giỏ hàng":"Hết hàng"})]})]})}const products$1=[{name:"Wireless Headphones",price:99.99,currency:"USD",inStock:!0,rating:4.5,reviews:128,discount:20,image:"https://placehold.co/600x400?text=Headphones"},{name:"Bluetooth Speaker",price:59.99,currency:"USD",inStock:!0,rating:4,reviews:50,discount:0,image:"https://placehold.co/600x400?text=Speaker"},{name:"Noise Cancelling Earbuds",price:129.99,currency:"USD",inStock:!1,rating:5,reviews:200,discount:15,image:"https://placehold.co/600x400?text=Earbuds"},{name:"Smart Watch",price:199.99,currency:"USD",inStock:!1,rating:3.5,reviews:80,discount:0,image:"https://placehold.co/600x400?text=SmartWatch"},{name:"Budget Headphones",price:29.99,currency:"USD",inStock:!0,rating:2,reviews:5,discount:10,image:"https://placehold.co/600x400?text=Budget+Headphones"},{name:"New Release Earphones",price:49.99,currency:"USD",inStock:!0,rating:0,reviews:0,discount:0,image:"https://placehold.co/600x400?text=Earphones"}];function Exercise1$5(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:1,title:"Product Card Component"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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
`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx("div",{className:"grid grid-cols-3",children:products$1.map(l=>jsxRuntimeExports.jsx("div",{className:"grid-item",children:jsxRuntimeExports.jsx(ProductCard$2,{product:l})},l.name))})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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
`})]})}const init$2={city:"Hanoi",temperature:28,condition:"Sunny",humidity:65,wind:12};function WeatherWidget({weather:l=init$2}){const d={Sunny:{icon:"☀️",bgClass:"bg-sunny"},Rainy:{icon:"🌧️",bgClass:"bg-rainy"},Cloudy:{icon:"☁️",bgClass:"bg-cloudy"}}[l.condition];return jsxRuntimeExports.jsxs(Card,{className:`weather-widget-modern ${d.bgClass}`,children:[jsxRuntimeExports.jsx("h2",{className:"weather-city",children:l.city}),jsxRuntimeExports.jsx("div",{className:"weather-icon-big",children:d.icon}),jsxRuntimeExports.jsxs("div",{className:"weather-temperature",children:[l.temperature,"°C"]}),jsxRuntimeExports.jsxs("div",{className:"weather-details",children:[jsxRuntimeExports.jsxs("div",{className:"detail-item",children:[jsxRuntimeExports.jsx("span",{className:"detail-label",children:"Humidity"}),jsxRuntimeExports.jsxs("span",{className:"detail-value",children:[l.humidity,"%"]})]}),jsxRuntimeExports.jsxs("div",{className:"detail-item",children:[jsxRuntimeExports.jsx("span",{className:"detail-label",children:"Wind"}),jsxRuntimeExports.jsxs("span",{className:"detail-value",children:[l.wind," km/h"]})]})]})]})}const weathers=[{city:"Hanoi",temperature:28,condition:"Sunny",humidity:65,wind:12},{city:"Ho Chi Minh City",temperature:32,condition:"Cloudy",humidity:70,wind:8},{city:"Da Nang",temperature:30,condition:"Rainy",humidity:80,wind:15}];function Exercise2$5(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:2,title:"Weather Widget"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx("div",{className:"grid grid-cols-3",children:weathers.map(l=>jsxRuntimeExports.jsx("div",{className:"grid-item",children:jsxRuntimeExports.jsx(WeatherWidget,{weather:l})},l.city))})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

`})]})}function UserDashboard$1(){const l={posts:145,followers:2340,following:890,likes:5678},o=["Posted a new photo","Liked John's post","Followed Jane Smith","Commented on Sarah's story","Shared a reel"],d={posts:{label:"Posts",icon:"📰"},followers:{label:"Followers",icon:"🧑‍🤝‍🧑"},following:{label:"Following",icon:"🔔"},likes:{label:"Likes",icon:"💖"}},u=p=>p.toLocaleString("en-US");return jsxRuntimeExports.jsxs("div",{className:"user-dashboard-modern",children:[jsxRuntimeExports.jsx("div",{className:"stats-grid-modern",children:Object.entries(l).map(([p,f])=>{const{label:v,icon:A}=d[p];return jsxRuntimeExports.jsxs(Card,{className:"stat-item-modern","data-type":p,children:[jsxRuntimeExports.jsx("div",{className:"stat-icon-modern",children:A}),jsxRuntimeExports.jsx("div",{className:"stat-value-modern",children:u(f)}),jsxRuntimeExports.jsx("div",{className:"stat-label-modern",children:v})]},p)})}),jsxRuntimeExports.jsxs("div",{className:"activities-section",children:[jsxRuntimeExports.jsx("h3",{className:"activities-title",children:"Recent Activities"}),jsxRuntimeExports.jsx("ul",{className:"activity-list",children:o.map((p,f)=>jsxRuntimeExports.jsx("li",{className:"activity-item",children:p},f))})]})]})}function Exercise3$5(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:3,title:"User Stats Dashboard"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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


`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(UserDashboard$1,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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


`})]})}const init$1=new Date().getHours();function DynamicGreeting$1({currentHour:l=init$1}){const o="Alex",u=Object.values({morning:{hours:f=>f>=5&&f<=11,text:"Chào buổi sáng",icon:"🌅",bgClass:"bg-morning",quote:"Mỗi buổi sáng là một khởi đầu mới. Hãy làm nó đáng nhớ!"},afternoon:{hours:f=>f>=12&&f<=17,text:"Chào buổi chiều",icon:"☀️",bgClass:"bg-afternoon",quote:"Cố lên! Bạn đã đi được nửa chặng đường rồi!"},evening:{hours:f=>f>=18&&f<=21,text:"Chào buổi tối",icon:"🌆",bgClass:"bg-evening",quote:"Buổi tối là lúc để nhìn lại và nạp lại năng lượng."},night:{hours:f=>f>=22||f<=4,text:"Chúc ngủ ngon",icon:"🌙",bgClass:"bg-night",quote:"Ngủ ngon nhé. Ngày mai lại là một cuộc phiêu lưu mới!"}}).find(f=>f.hours(l)),p=new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit",hour12:!1});return jsxRuntimeExports.jsxs(Card,{className:`dynamic-greeting-modern ${u.bgClass}`,children:[jsxRuntimeExports.jsxs("div",{className:"greeting-header",children:[jsxRuntimeExports.jsx("span",{className:"greeting-icon-big",children:u.icon}),jsxRuntimeExports.jsxs("h1",{className:"greeting-text-big",children:[u.text,","," ",jsxRuntimeExports.jsx("span",{className:"user-name-highlight",children:o}),"!"]})]}),jsxRuntimeExports.jsxs("div",{className:"current-time-display",children:[p," • Hà Nội, Việt Nam",jsxRuntimeExports.jsx("div",{className:"flag-vn",children:"🇻🇳"})]}),jsxRuntimeExports.jsx("blockquote",{className:"motivational-quote-premium",children:u.quote})]})}function Exercise4$5(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:4,title:"Dynamic Greeting (Challenge)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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


`}),jsxRuntimeExports.jsxs(ExerciseCard.Demo,{children:[jsxRuntimeExports.jsxs("div",{className:"now-time",children:[jsxRuntimeExports.jsxs("p",{className:"time text-center",children:["Giờ hiện tại : ",new Date().toLocaleString()]}),jsxRuntimeExports.jsx(DynamicGreeting$1,{})]}),jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-2",children:[jsxRuntimeExports.jsxs("div",{className:"grid-item",children:[jsxRuntimeExports.jsx("p",{className:"time text-center",children:"Giờ giả lập: 8:00 AM"}),jsxRuntimeExports.jsx(DynamicGreeting$1,{currentHour:8})]}),jsxRuntimeExports.jsxs("div",{className:"grid-item",children:[jsxRuntimeExports.jsx("p",{className:"time text-center",children:"Giờ giả lập: 2:00 PM"}),jsxRuntimeExports.jsx(DynamicGreeting$1,{currentHour:14})]}),jsxRuntimeExports.jsxs("div",{className:"grid-item",children:[jsxRuntimeExports.jsx("p",{className:"time text-center",children:"Giờ giả lập: 7:00 PM"}),jsxRuntimeExports.jsx(DynamicGreeting$1,{currentHour:19})]}),jsxRuntimeExports.jsxs("div",{className:"grid-item",children:[jsxRuntimeExports.jsx("p",{className:"time text-center",children:"Giờ giả lập: 11:00 PM"}),jsxRuntimeExports.jsx(DynamicGreeting$1,{currentHour:23})]})]})]}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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


`})]})}const exercises$5={1:Exercise1$5,2:Exercise2$5,3:Exercise3$5,4:Exercise4$5},Day1=()=>jsxRuntimeExports.jsxs("div",{className:"day-content",children:[jsxRuntimeExports.jsxs("div",{className:"day-header",children:[jsxRuntimeExports.jsxs("div",{className:"day-header-content",children:[jsxRuntimeExports.jsx(CodeXml,{size:32,color:"#00D9FF"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h1",{className:"day-title",children:"Ngày 1"}),jsxRuntimeExports.jsx("p",{className:"day-subtitle",children:"JSX & Rendering Basics"})]})]}),jsxRuntimeExports.jsxs("section",{className:"lesson-goal",children:[jsxRuntimeExports.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{children:"Hiểu JSX là gì và cách hoạt động"}),jsxRuntimeExports.jsx("li",{children:"Sử dụng JavaScript expressions trong JSX"}),jsxRuntimeExports.jsx("li",{children:"Làm việc với Fragments"}),jsxRuntimeExports.jsx("li",{children:"Tạo được UI components đơn giản"})]})]})]}),jsxRuntimeExports.jsx("div",{className:"exercises-list",children:Object.keys(exercises$5).map(l=>{const o=exercises$5[l];return o?jsxRuntimeExports.jsx(o,{},l):null})})]});function UserDashboard(){const l=[{id:1,name:"John Doe",role:"admin",status:"online",lastActive:"2 phút trước",points:1250},{id:2,name:"Jane Smith",role:"user",status:"offline",lastActive:"1 giờ trước",points:890},{id:3,name:"Bob Johnson",role:"moderator",status:"away",lastActive:"15 phút trước",points:2100}],o=[...l].sort((v,A)=>A.points-v.points),d=l.reduce((v,A)=>(v[A.role]=(v[A.role]||0)+1,v),{}),u={online:"🟢",offline:"⚫",away:"🟡"},p={admin:"role-admin",moderator:"role-moderator",user:"role-user"},f={admin:"Admin",moderator:"Moderator",user:"User"};return jsxRuntimeExports.jsxs("div",{className:"user-dashboard-vn",children:[jsxRuntimeExports.jsxs(Card,{className:"role-summary-card",children:[jsxRuntimeExports.jsx("h3",{className:"role-summary-title",children:"Tổng quan vai trò"}),jsxRuntimeExports.jsx("ul",{className:"role-summary-list",children:Object.entries(d).map(([v,A])=>jsxRuntimeExports.jsxs("li",{className:"role-summary-item",children:[jsxRuntimeExports.jsx("span",{children:f[v]||v}),jsxRuntimeExports.jsxs("span",{children:[A," người"]})]},v))})]}),o.length===0?jsxRuntimeExports.jsx("div",{className:"empty-state-vn",children:"Không tìm thấy người dùng nào"}):jsxRuntimeExports.jsx("div",{className:"user-list-vn",children:o.map(v=>jsxRuntimeExports.jsxs(Card,{className:"user-item-card",children:[jsxRuntimeExports.jsxs("div",{className:"user-info",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[jsxRuntimeExports.jsx("span",{className:"user-name-vn",children:v.name}),jsxRuntimeExports.jsx("span",{className:`role-badge-vn ${p[v.role]}`,children:f[v.role]})]}),jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-1",children:[jsxRuntimeExports.jsxs("span",{className:"user-status-vn",children:[jsxRuntimeExports.jsx("span",{className:"status-dot",children:u[v.status]}),v.status==="online"?"Đang hoạt động":v.status==="away"?"Vắng mặt":"Ngoại tuyến"]}),v.status!=="online"&&jsxRuntimeExports.jsx("span",{className:"last-active-vn",children:v.lastActive}),jsxRuntimeExports.jsxs("span",{className:"user-points-vn",children:[v.points," điểm"]})]})]}),v.points>1e3&&jsxRuntimeExports.jsx("span",{className:"top-user-badge-vn",children:"Top User"})]},v.id))})]})}function Exercise1$4(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:1,title:"User Dashboard"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(UserDashboard,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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


`})]})}function ProductFilter(){const l=[{id:1,name:"Laptop Pro",category:"electronics",price:1299,inStock:!0,rating:4.5,icon:"💻"},{id:2,name:"Ghế văn phòng",category:"furniture",price:299,inStock:!1,rating:4,icon:"🪑"},{id:3,name:"Đèn bàn học",category:"furniture",price:49,inStock:!0,rating:4.8,icon:"💡"},{id:4,name:"Chuột không dây",category:"electronics",price:29,inStock:!0,rating:4.2,icon:"🖱️"},{id:5,name:"Sổ tay",category:"stationery",price:5,inStock:!0,rating:3.9,icon:"📒"}],[o,d]=reactExports.useState("all"),[u,p]=reactExports.useState("all"),[f,v]=reactExports.useState("all"),[A,y]=reactExports.useState("none"),x=l.filter(j=>!(o!=="all"&&j.category!==o||u==="in"&&!j.inStock||u==="out"&&j.inStock||f==="low"&&j.price>=50||f==="mid"&&(j.price<50||j.price>500)||f==="high"&&j.price<=500)).sort((j,S)=>A==="price-low"?j.price-S.price:A==="price-high"?S.price-j.price:A==="rating"?S.rating-j.rating:0);return jsxRuntimeExports.jsxs("div",{className:"product-filter",children:[jsxRuntimeExports.jsxs(Card,{className:"filter-bar",children:[jsxRuntimeExports.jsxs("select",{className:"custom-select",value:o,onChange:j=>d(j.target.value),children:[jsxRuntimeExports.jsx("option",{value:"all",children:"Tất cả danh mục"}),jsxRuntimeExports.jsx("option",{value:"electronics",children:"Điện tử"}),jsxRuntimeExports.jsx("option",{value:"furniture",children:"Nội thất"}),jsxRuntimeExports.jsx("option",{value:"stationery",children:"Văn phòng phẩm"})]}),jsxRuntimeExports.jsxs("select",{className:"custom-select",value:u,onChange:j=>p(j.target.value),children:[jsxRuntimeExports.jsx("option",{value:"all",children:"Tất cả kho"}),jsxRuntimeExports.jsx("option",{value:"in",children:"Còn hàng"}),jsxRuntimeExports.jsx("option",{value:"out",children:"Hết hàng"})]}),jsxRuntimeExports.jsxs("select",{className:"custom-select",value:f,onChange:j=>v(j.target.value),children:[jsxRuntimeExports.jsx("option",{value:"all",children:"Tất cả giá"}),jsxRuntimeExports.jsx("option",{value:"low",children:"Dưới 50$"}),jsxRuntimeExports.jsx("option",{value:"mid",children:"50$ - 500$"}),jsxRuntimeExports.jsx("option",{value:"high",children:"Trên 500$"})]}),jsxRuntimeExports.jsxs("select",{className:"custom-select",value:A,onChange:j=>y(j.target.value),children:[jsxRuntimeExports.jsx("option",{value:"none",children:"Không sắp xếp"}),jsxRuntimeExports.jsx("option",{value:"price-low",children:"Giá tăng dần"}),jsxRuntimeExports.jsx("option",{value:"price-high",children:"Giá giảm dần"}),jsxRuntimeExports.jsx("option",{value:"rating",children:"Đánh giá cao nhất"})]})]}),jsxRuntimeExports.jsxs("div",{className:"product-count-display",children:["Hiển thị ",x.length," / ",l.length," sản phẩm"]}),x.length===0?jsxRuntimeExports.jsx("div",{className:"no-products",children:"Không tìm thấy sản phẩm nào"}):jsxRuntimeExports.jsx("div",{className:"product-list",children:x.map(j=>jsxRuntimeExports.jsxs(Card,{className:"product-item-card",children:[jsxRuntimeExports.jsx("h3",{className:"product-name",children:j.name}),jsxRuntimeExports.jsx("p",{className:"product-img",children:j.icon}),jsxRuntimeExports.jsxs("div",{className:"product-price",children:["$",j.price]}),jsxRuntimeExports.jsxs("div",{className:"product-rating-stars",children:["★".repeat(Math.floor(j.rating)),j.rating%1>=.5&&"⯪"]}),!j.inStock&&jsxRuntimeExports.jsx("span",{className:"out-of-stock-badge",children:"Hết hàng"})]},j.id))})]})}function Exercise2$4(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:2,title:"Product Filter"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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


`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(ProductFilter,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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


`})]})}function NotificationCenter(){const[l,o]=reactExports.useState([{id:1,type:"info",message:"Cập nhật hệ thống đã sẵn sàng",read:!1,timestamp:"5 phút trước"},{id:2,type:"success",message:"Thanh toán thành công",read:!0,timestamp:"1 giờ trước"},{id:3,type:"warning",message:"Gói đăng ký của bạn hết hạn sau 3 ngày",read:!1,timestamp:"2 giờ trước"},{id:4,type:"error",message:"Đồng bộ dữ liệu thất bại",read:!1,timestamp:"3 giờ trước"}]),[d,u]=reactExports.useState("all"),[p,f]=reactExports.useState(!1),v={info:{icon:"ℹ️",color:"notification-icon-info"},success:{icon:"✅",color:"notification-icon-success"},warning:{icon:"⚠️",color:"notification-icon-warning"},error:{icon:"❌",color:"notification-icon-error"}},A=l.filter(w=>!w.read).length,y=l.filter(w=>d==="unread"?!w.read:d==="read"?w.read:!0),x=y.reduce((w,q)=>(w[q.type]||(w[q.type]=[]),w[q.type].push(q),w),{}),j=()=>{o(l.map(w=>({...w,read:!0})))},S=()=>{window.confirm("Bạn có chắc chắn muốn xóa tất cả thông báo?")&&o([])};return jsxRuntimeExports.jsxs(Card,{className:"notification-center",children:[jsxRuntimeExports.jsxs("div",{className:"notification-header",children:[jsxRuntimeExports.jsxs("h2",{className:"notification-title",children:["Trung tâm thông báo",A>0&&jsxRuntimeExports.jsx("span",{className:"unread-badge",children:A})]}),jsxRuntimeExports.jsxs("div",{className:"notification-controls",children:[jsxRuntimeExports.jsx(Select$1,{value:d,onChange:w=>u(w.target.value),options:[{value:"all",label:"Tất cả"},{value:"unread",label:"Chưa đọc"},{value:"read",label:"Đã đọc"}]}),jsxRuntimeExports.jsx(Checkbox$1,{label:"Nhóm theo loại",checked:p,onChange:w=>f(w.target.checked)}),A>0&&jsxRuntimeExports.jsx(Button,{variant:"primary",size:"sm",onClick:j,children:"Đánh dấu tất cả đã đọc"}),jsxRuntimeExports.jsx(Button,{variant:"danger",size:"sm",onClick:S,children:"Xóa tất cả"})]})]}),y.length===0?jsxRuntimeExports.jsx("div",{className:"no-notifications",children:"Không có thông báo nào"}):p?Object.entries(x).map(([w,q])=>jsxRuntimeExports.jsxs("div",{className:"group-section",children:[jsxRuntimeExports.jsx("h3",{className:"group-title",children:w==="info"?"Thông tin":w==="success"?"Thành công":w==="warning"?"Cảnh báo":"Lỗi"}),jsxRuntimeExports.jsx("ul",{className:"notification-list",children:q.map(h=>jsxRuntimeExports.jsxs("li",{className:`notification-item ${h.read?"":"unread"}`,children:[jsxRuntimeExports.jsx("span",{className:`notification-icon ${v[h.type].color}`,children:v[h.type].icon}),jsxRuntimeExports.jsx("span",{className:"notification-message",children:h.message}),jsxRuntimeExports.jsx("span",{className:"notification-timestamp",children:h.timestamp})]},h.id))})]},w)):jsxRuntimeExports.jsx("ul",{className:"notification-list",children:y.map(w=>jsxRuntimeExports.jsxs("li",{className:`notification-item ${w.read?"":"unread"}`,children:[jsxRuntimeExports.jsx("span",{className:`notification-icon ${v[w.type].color}`,children:v[w.type].icon}),jsxRuntimeExports.jsx("span",{className:"notification-message",children:w.message}),jsxRuntimeExports.jsx("span",{className:"notification-timestamp",children:w.timestamp})]},w.id))})]})}function Exercise3$4(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:3,title:"Notification Center"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(NotificationCenter,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

`})]})}function BlogPosts(){const l=[{id:1,title:"Bắt đầu với React",author:"John Doe",date:"2024-01-15",tags:["react","javascript","tutorial"],views:1250,likes:89,featured:!0},{id:2,title:"Kỹ thuật CSS nâng cao",author:"Jane Smith",date:"2024-01-20",tags:["css","design","frontend"],views:890,likes:45,featured:!1},{id:3,title:"Thực hành tốt nhất với Node.js",author:"Bob Johnson",date:"2024-01-25",tags:["nodejs","javascript","backend"],views:2100,likes:156,featured:!0}],[o]=reactExports.useState(l),[d,u]=reactExports.useState(null),[p,f]=reactExports.useState("latest"),[v,A]=reactExports.useState(""),[y,x]=reactExports.useState(2),j=o.filter(h=>!(d&&!h.tags.includes(d)||v&&!h.title.toLowerCase().includes(v.toLowerCase()))).sort((h,R)=>p==="views"?R.views-h.views:p==="likes"?R.likes-h.likes:p==="latest"?new Date(R.date)-new Date(h.date):0),S=j.slice(0,y),w=()=>{u(null),A(""),x(2)},q=()=>{x(h=>Math.min(h+2,j.length))};return jsxRuntimeExports.jsxs("div",{className:"blog-posts",children:[jsxRuntimeExports.jsxs(Card,{className:"blog-controls",children:[jsxRuntimeExports.jsx(Input$1,{placeholder:"Tìm kiếm theo tiêu đề....",icon:"🔍",value:v,onChange:h=>A(h.target.value)}),jsxRuntimeExports.jsx(Select$1,{value:p,onChange:h=>f(h.target.value),options:[{value:"latest",label:"Mới nhất"},{value:"views",label:"Xem nhiều nhất"},{value:"likes",label:"Thích nhiều nhất"}]}),d&&jsxRuntimeExports.jsxs("div",{className:"current-tag",children:["Lọc theo: ",d,jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"sm",onClick:()=>u(null),children:"Clear"})]})]}),jsxRuntimeExports.jsxs("div",{className:"results-count",children:["Tìm thấy ",j.length," bài viết"]}),j.length===0?jsxRuntimeExports.jsxs("div",{className:"no-posts",children:[jsxRuntimeExports.jsx("p",{children:"Không tìm thấy bài viết nào"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"sm",onClick:w,style:{marginTop:"16px"},children:"Đặt lại bộ lọc"})]}):jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("ul",{className:"post-list",children:S.map(h=>jsxRuntimeExports.jsxs(Card,{className:`post-item ${h.featured?"featured":""}`,children:[h.featured&&jsxRuntimeExports.jsx("span",{className:"featured-icon",children:"⭐"}),jsxRuntimeExports.jsx("h3",{className:"post-title",children:h.title}),jsxRuntimeExports.jsxs("div",{className:"post-meta",children:["Bởi ",h.author," •"," ",new Date(h.date).toLocaleDateString("vi-VN")]}),jsxRuntimeExports.jsx("div",{className:"post-tags",children:h.tags.map(R=>jsxRuntimeExports.jsxs("span",{className:"tag-badge",onClick:()=>u(R),children:["#",R]},R))}),jsxRuntimeExports.jsxs("div",{className:"post-stats",children:[jsxRuntimeExports.jsxs("span",{children:["👁️ ",h.views.toLocaleString()]}),jsxRuntimeExports.jsxs("span",{children:["❤️ ",h.likes]})]})]},h.id))}),y<j.length&&jsxRuntimeExports.jsxs(Button,{variant:"primary",size:"lg",onClick:q,className:"load-more-btn",children:["Xem thêm (",j.length-y," bài còn lại)"]})]})]})}function Exercise4$4(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:4,title:"Blog Posts with Tags (Challenge)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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
`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(BlogPosts,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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


`})]})}const exercises$4={1:Exercise1$4,2:Exercise2$4,3:Exercise3$4,4:Exercise4$4},Day2=()=>jsxRuntimeExports.jsxs("div",{className:"day-content",children:[jsxRuntimeExports.jsxs("div",{className:"day-header",children:[jsxRuntimeExports.jsxs("div",{className:"day-header-content",children:[jsxRuntimeExports.jsx(CodeXml,{size:32,color:"#00D9FF"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h1",{className:"day-title",children:"Ngày 2"}),jsxRuntimeExports.jsx("p",{className:"day-subtitle",children:"Conditional & List Rendering"})]})]}),jsxRuntimeExports.jsxs("section",{className:"lesson-goal",children:[jsxRuntimeExports.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{children:"Render có điều kiện với nhiều cách khác nhau"}),jsxRuntimeExports.jsxs("li",{children:["Render danh sách với ",jsxRuntimeExports.jsx("span",{className:"code-badge",children:"map()"})]}),jsxRuntimeExports.jsxs("li",{children:["Hiểu và sử dụng ",jsxRuntimeExports.jsx("span",{className:"code-badge",children:"key"})," prop đúng cách"]}),jsxRuntimeExports.jsx("li",{children:"Tránh anti-pattern: index as key"})]})]})]}),jsxRuntimeExports.jsx("div",{className:"exercises-list",children:Object.keys(exercises$4).map(l=>{const o=exercises$4[l];return o?jsxRuntimeExports.jsx(o,{},l):null})})]});function UserProfile({user:l}){return jsxRuntimeExports.jsxs("div",{className:"user-profile",children:[jsxRuntimeExports.jsx(UserHeader,{avatar:l.avatar,name:l.name,username:l.username,bio:l.bio,isVerified:l.isVerified}),jsxRuntimeExports.jsx(UserStats,{posts:l.stats.posts,followers:l.stats.followers,following:l.stats.following}),jsxRuntimeExports.jsx(UserPosts,{posts:l.posts})]})}function UserHeader({avatar:l,name:o,username:d,bio:u,isVerified:p}){return jsxRuntimeExports.jsxs(Card,{className:"user-header",children:[l&&jsxRuntimeExports.jsx("div",{className:"avatar",children:jsxRuntimeExports.jsx("img",{className:"avatar-img",src:l,alt:o})}),jsxRuntimeExports.jsxs("div",{className:"user-info",children:[jsxRuntimeExports.jsxs("div",{className:"name-row",children:[jsxRuntimeExports.jsx("h2",{className:"user-name",children:o}),p&&jsxRuntimeExports.jsx("span",{className:"verified-badge",children:jsxRuntimeExports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 512 512",children:jsxRuntimeExports.jsxs("g",{fill:"none",fillRule:"evenodd",children:[jsxRuntimeExports.jsx("path",{d:"M256 472.153L176.892 512l-41.725-81.129-86.275-16.654 11.596-91.422L0 256l60.488-66.795-11.596-91.422 86.275-16.654L176.892 0 256 39.847 335.108 0l41.725 81.129 86.275 16.654-11.596 91.422L512 256l-60.488 66.795 11.596 91.422-86.275 16.654L335.108 512z",fill:"#4285f4"}),jsxRuntimeExports.jsx("path",{d:"M211.824 284.5L171 243.678l-36 36 40.824 40.824-.063.062 36 36 .063-.062.062.062 36-36-.062-.062L376.324 192l-36-36z",fill:"#fff"})]})})})]}),jsxRuntimeExports.jsxs("p",{className:"user-username",children:["@",d]}),u&&jsxRuntimeExports.jsx("p",{className:"bio",children:u}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"md",className:"follow-btn",children:"Follow"})]})]})}function UserPosts({posts:l=[]}){return l.length===0?jsxRuntimeExports.jsx(Card,{className:"user-posts",children:jsxRuntimeExports.jsx("p",{className:"empty-state",children:"Chưa có bài viết nào."})}):jsxRuntimeExports.jsx("div",{className:"user-posts",children:l.map(o=>jsxRuntimeExports.jsx(PostCard,{post:o},o.id))})}function PostCard({post:l}){const{content:o,image:d,likes:u,comments:p,timestamp:f}=l;return jsxRuntimeExports.jsxs(Card,{className:"post-card",children:[d&&jsxRuntimeExports.jsx("img",{src:d,alt:"Bài viết",className:"post-image"}),jsxRuntimeExports.jsxs("div",{className:"post-content",children:[jsxRuntimeExports.jsx("p",{children:o}),jsxRuntimeExports.jsxs("div",{className:"post-actions",children:[jsxRuntimeExports.jsxs(Button,{variant:"ghost",size:"sm",className:"action-btn",children:["❤️ ",u]}),jsxRuntimeExports.jsxs(Button,{variant:"ghost",size:"sm",className:"action-btn",children:["💬 ",p]}),jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"sm",className:"action-btn",children:"🔁"})]}),jsxRuntimeExports.jsx("div",{className:"post-timestamp",children:f})]})]})}function UserStats({posts:l,followers:o,following:d}){const u=p=>p.toLocaleString("en-US");return jsxRuntimeExports.jsxs("div",{className:"user-stats",children:[jsxRuntimeExports.jsxs(Button,{variant:"ghost",className:"stat-item",children:[jsxRuntimeExports.jsx("div",{className:"stat-value",children:u(l)}),jsxRuntimeExports.jsx("div",{className:"stat-label",children:"Bài viết"})]}),jsxRuntimeExports.jsxs(Button,{variant:"ghost",className:"stat-item",children:[jsxRuntimeExports.jsx("div",{className:"stat-value",children:u(o)}),jsxRuntimeExports.jsx("div",{className:"stat-label",children:"Người theo dõi"})]}),jsxRuntimeExports.jsxs(Button,{variant:"ghost",className:"stat-item",children:[jsxRuntimeExports.jsx("div",{className:"stat-value",children:u(d)}),jsxRuntimeExports.jsx("div",{className:"stat-label",children:"Đang theo dõi"})]})]})}const users={id:1,name:"John Doe",username:"johndoe",avatar:"https://i.pravatar.cc/150?img=1",bio:"Software Developer | React Enthusiast",isVerified:!0,stats:{posts:145,followers:2340,following:890},posts:[{id:1,content:"Just launched my new project!",image:"https://placehold.co/600x400?text=Post%20Image",likes:89,comments:12,timestamp:"2 hours ago"},{id:2,content:"Learning React is fun!",likes:45,comments:5,timestamp:"1 day ago"}]};function Exercise1$3(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:1,title:"UserProfile"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(UserProfile,{user:users})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

        `})]})}function ProductGrid({products:l,onAddToCart:o}){return jsxRuntimeExports.jsx("div",{className:"product-grid",children:l.map(d=>jsxRuntimeExports.jsx(ProductCard$1,{product:d,onAddToCart:o},d.id))})}function ProductCard$1({product:l,onAddToCart:o}){const{name:d,price:u,image:p,rating:f,reviews:v,inStock:A=!0,discount:y=0}=l,x=y>0?u/(1-y/100):null;return jsxRuntimeExports.jsxs(Card,{className:`product-card ${A?"":"out-of-stock"}`,children:[jsxRuntimeExports.jsx(ProductImage,{src:p,alt:d,discount:y,inStock:A}),jsxRuntimeExports.jsxs("div",{className:"product-info",children:[jsxRuntimeExports.jsx("h3",{className:"product-name",children:d}),jsxRuntimeExports.jsx(Rating,{rating:f,reviews:v}),jsxRuntimeExports.jsx(ProductPrice,{price:u,originalPrice:x,currency:"USD"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"md",className:"add-to-cart-btn",onClick:()=>o?.(l),disabled:!A,children:A?"Add to Cart":"Out of Stock"})]}),!A&&jsxRuntimeExports.jsx("div",{className:"stock-overlay",children:"Out of Stock"})]})}function ProductImage({src:l,alt:o,discount:d=0,inStock:u=!0}){return jsxRuntimeExports.jsxs("div",{className:"product-image-wrapper",children:[jsxRuntimeExports.jsx("img",{src:l||"https://via.placeholder.com/300",alt:o,className:"product-img"}),d>0&&jsxRuntimeExports.jsxs("span",{className:"discount-badge",children:["-",d,"%"]}),!u&&jsxRuntimeExports.jsx("div",{className:"stock-overlay",children:"Out of Stock"})]})}function ProductPrice({price:l,originalPrice:o,currency:d="USD"}){const u=o?o-l:0;return jsxRuntimeExports.jsxs("div",{className:"product-price",children:[jsxRuntimeExports.jsxs("span",{className:"current-price",children:[d," ",l.toFixed(2)]}),o&&jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs("span",{className:"original-price",children:[d," ",o.toFixed(2)]}),jsxRuntimeExports.jsxs("span",{className:"savings",children:["Save ",d," ",u.toFixed(2)]})]})]})}function Rating({rating:l=0,reviews:o=0,size:d="medium"}){const u=Math.floor(l),p=l%1>=.5,f=5-u-(p?1:0);return jsxRuntimeExports.jsxs("div",{className:`rating rating-${d}`,children:[jsxRuntimeExports.jsxs("div",{className:"stars",children:["★".repeat(u),p&&"⯪","☆".repeat(f)]}),jsxRuntimeExports.jsx("span",{className:"rating-value",children:l.toFixed(1)}),o>0&&jsxRuntimeExports.jsxs("span",{className:"reviews-count",children:["(",o," reviews)"]})]})}const products=[{id:1,name:"Wireless Headphones",price:79.99,image:"https://placehold.co/600x400?text=Wireless%20Headphones",rating:4.5,reviews:128,inStock:!0,discount:20},{id:2,name:"Office Chair",price:299,image:"https://placehold.co/600x400?text=Office%20Chair",rating:4,reviews:45,inStock:!1},{id:3,name:"Desk Lamp",price:49,image:"https://placehold.co/600x400?text=Desk%20Lamp",rating:4.8,reviews:89,inStock:!0}];function Exercise2$3(){const l=o=>{alert(`Added ${o.name} to cart !`)};return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:2,title:"ProductGrid"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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



`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(ProductGrid,{products,onAddToCart:l})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

`})]})}const dashboardData={user:{name:"Admin User",avatar:"https://i.pravatar.cc/150?img=5"},sidebarItems:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"products",label:"Products",icon:"📦"},{id:"orders",label:"Orders",icon:"🛒"},{id:"customers",label:"Customers",icon:"👥"},{id:"analytics",label:"Analytics",icon:"📈"}],stats:[{title:"Total Revenue",value:"$45,231",icon:"💰",trend:"up",trendValue:"12%"},{title:"Orders",value:"1,234",icon:"🛒",trend:"up",trendValue:"8%"},{title:"Customers",value:"5,678",icon:"👥",trend:"down",trendValue:"3%"},{title:"Products",value:"890",icon:"📦",trend:"up",trendValue:"5%"}],notifications:5};function Dashboard(){const[l,o]=reactExports.useState("dashboard"),[d,u]=reactExports.useState(!1),[p,f]=reactExports.useState(!1),v=S=>{o(S)},A=()=>{u(S=>!S)},y=()=>{f(S=>!S)},x=()=>{alert("Logged out!"),u(!1)},j=()=>{alert("All notifications marked as read!"),f(!1)};return jsxRuntimeExports.jsxs("div",{className:"dashboard",children:[jsxRuntimeExports.jsx(Sidebar,{items:dashboardData.sidebarItems,activeItem:l,onItemClick:v}),jsxRuntimeExports.jsxs("div",{className:"dashboard-main-content",children:[jsxRuntimeExports.jsx(Header,{user:dashboardData.user,notifications:dashboardData.notifications,onProfileClick:A,onNotificationClick:y}),d&&jsxRuntimeExports.jsx("div",{className:"dashboard-dropdown-menu",children:jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{children:"Profile"}),jsxRuntimeExports.jsx("li",{children:"Settings"}),jsxRuntimeExports.jsx("li",{onClick:x,children:"Logout"})]})}),jsxRuntimeExports.jsxs(Modal,{isOpen:p,onClose:()=>f(!1),children:[jsxRuntimeExports.jsx(Modal.Header,{onClose:()=>f(!1),children:"Notifications"}),jsxRuntimeExports.jsx(Modal.Body,{children:jsxRuntimeExports.jsxs("div",{className:"dashboard-modal-body",children:[jsxRuntimeExports.jsxs("div",{className:"dashboard-notification-item",children:[jsxRuntimeExports.jsx("span",{className:"dashboard-notification-icon",children:"🛒"}),jsxRuntimeExports.jsxs("span",{className:"dashboard-notification-text",children:["New order received — ",jsxRuntimeExports.jsx("strong",{children:"#1024"})]})]}),jsxRuntimeExports.jsxs("div",{className:"dashboard-notification-item",children:[jsxRuntimeExports.jsx("span",{className:"dashboard-notification-icon",children:"👤"}),jsxRuntimeExports.jsxs("span",{className:"dashboard-notification-text",children:["User ",jsxRuntimeExports.jsx("strong",{children:"John Doe"})," just registered"]})]}),jsxRuntimeExports.jsxs("div",{className:"dashboard-notification-item",children:[jsxRuntimeExports.jsx("span",{className:"dashboard-notification-icon",children:"💾"}),jsxRuntimeExports.jsx("span",{className:"dashboard-notification-text",children:"Server backup completed successfully"})]})]})}),jsxRuntimeExports.jsxs(Modal.Footer,{children:[jsxRuntimeExports.jsx(Button,{variant:"ghost",onClick:()=>f(!1),children:"Cancel"}),jsxRuntimeExports.jsx(Button,{variant:"primary",onClick:j,children:"Mark all as read"})]})]}),jsxRuntimeExports.jsxs("main",{className:"dashboard-content",children:[l==="dashboard"&&jsxRuntimeExports.jsx("section",{className:"dashboard-stats-grid",children:dashboardData.stats.map((S,w)=>jsxRuntimeExports.jsx(StatCard,{title:S.title,value:S.value,icon:S.icon,trend:S.trend,trendValue:S.trendValue},w))}),jsxRuntimeExports.jsxs("section",{className:"dashboard-recent-activity",children:[jsxRuntimeExports.jsx("h2",{children:"Recent Activity"}),jsxRuntimeExports.jsxs("p",{children:["Showing data for:"," ",jsxRuntimeExports.jsxs("strong",{children:[l.charAt(0).toUpperCase(),l.slice(1)]})]})]})]}),jsxRuntimeExports.jsx("footer",{className:"dashboard-footer",children:jsxRuntimeExports.jsx("p",{children:"© 2025 Your Company. All rights reserved."})})]})]})}function Header({user:l,notifications:o=0,onProfileClick:d,onNotificationClick:u}){return jsxRuntimeExports.jsxs("header",{className:"dashboard-header",children:[jsxRuntimeExports.jsx(Input$1,{placeholder:"Search...",icon:"🔍"}),jsxRuntimeExports.jsxs("div",{className:"dashboard-user-menu",children:[jsxRuntimeExports.jsxs("div",{className:"dashboard-notification-bell",onClick:u,children:["🔔",o>0&&jsxRuntimeExports.jsx("span",{className:"dashboard-notification-badge",children:o})]}),jsxRuntimeExports.jsxs("div",{className:"dashboard-user-avatar",onClick:d,role:"button",children:[jsxRuntimeExports.jsx("img",{src:l.avatar,alt:l.name}),jsxRuntimeExports.jsx("span",{className:"dashboard-user-name",children:l.name})]})]})]})}function Sidebar({items:l=[],activeItem:o,onItemClick:d}){return jsxRuntimeExports.jsxs("aside",{className:"dashboard-sidebar",children:[jsxRuntimeExports.jsx("div",{className:"logo",children:jsxRuntimeExports.jsx("h1",{children:"Dashboard"})}),jsxRuntimeExports.jsx("nav",{className:"dashboard-nav",children:jsxRuntimeExports.jsx("ul",{className:"dashboard-nav-list",children:l.map(u=>jsxRuntimeExports.jsxs("li",{className:`dashboard-nav-item ${o===u.id?"active":""}`,onClick:()=>d(u.id),role:"button",children:[jsxRuntimeExports.jsx("span",{className:"dashboard-nav-icon",children:u.icon}),jsxRuntimeExports.jsx("span",{className:"dashboard-nav-label",children:u.label})]},u.id))})})]})}function StatCard({title:l,value:o,icon:d,trend:u,trendValue:p}){const f=u==="up",v=f?"dashboard-trend-up":"dashboard-trend-down",A=f?"↗️":"↘️";return jsxRuntimeExports.jsxs(Card,{className:"dashboard-stat-card",children:[jsxRuntimeExports.jsx("div",{className:"dashboard-stat-icon",children:d}),jsxRuntimeExports.jsxs("div",{className:"dashboard-stat-info",children:[jsxRuntimeExports.jsx("h3",{className:"dashboard-stat-title",children:l}),jsxRuntimeExports.jsx("div",{className:"dashboard-stat-value",children:o})]}),jsxRuntimeExports.jsxs("div",{className:`dashboard-trend ${v}`,children:[jsxRuntimeExports.jsx("span",{className:"dashboard-trend-icon",children:A}),jsxRuntimeExports.jsx("span",{className:"dashboard-trend-value",children:p})]})]})}function Exercise3$3(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:3,title:"Dashboard Layout"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(Dashboard,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

`})]})}const countries$1=[{value:"vn",label:"Vietnam"},{value:"us",label:"United States"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"}];function RegistrationForm$1(){const[l,o]=reactExports.useState({email:"",password:"",country:"",agreedToTerms:!1}),[d,u]=reactExports.useState({}),p=y=>{const{name:x,value:j,type:S,checked:w}=y.target;o(q=>({...q,[x]:S==="checkbox"?w:j}))},f=()=>{o({email:"",password:"",country:"",agreedToTerms:!1}),u({})},v=()=>{const y={};return l.email.includes("@")||(y.email="Invalid email"),l.password.length<6&&(y.password="Password too short"),l.country||(y.country="Please select a country"),l.agreedToTerms||(y.terms="You must agree to terms"),y},A=y=>{const x=v();if(Object.keys(x).length>0){u(x);return}f(),alert("🎉 Registration successful!")};return jsxRuntimeExports.jsxs("div",{className:"form-page",children:[jsxRuntimeExports.jsx("h2",{className:"form-title",children:"Register Account"}),jsxRuntimeExports.jsxs(Form$1,{onSubmit:A,children:[jsxRuntimeExports.jsx(FormField,{label:"Email",required:!0,error:d.email,children:jsxRuntimeExports.jsx(Input,{type:"email",name:"email",placeholder:"Enter your email",icon:"📧",value:l.email,onChange:p})}),jsxRuntimeExports.jsx(FormField,{label:"Password",required:!0,error:d.password,children:jsxRuntimeExports.jsx(Input,{type:"password",name:"password",placeholder:"Enter password",icon:"🔒",value:l.password,onChange:p})}),jsxRuntimeExports.jsx(FormField,{label:"Country",error:d.country,children:jsxRuntimeExports.jsx(Select,{name:"country",options:countries$1,value:l.country,onChange:p,placeholder:"Select country"})}),jsxRuntimeExports.jsx(Checkbox,{label:"I agree to terms and conditions",name:"agreedToTerms",checked:l.agreedToTerms,onChange:p}),d.terms&&jsxRuntimeExports.jsx("div",{className:"form-error",children:d.terms}),jsxRuntimeExports.jsx("button",{className:"submit-btn",type:"submit",children:"Register"})]})]})}function Form$1({onSubmit:l,children:o}){const d=u=>{u.preventDefault();const p=new FormData(u.target);l(p)};return jsxRuntimeExports.jsx("form",{className:"form",onSubmit:d,children:o})}function FormField({label:l,error:o,required:d,children:u}){return jsxRuntimeExports.jsxs("div",{className:`form-field ${o?"has-error":""}`,children:[l&&jsxRuntimeExports.jsxs("label",{className:"form-label",children:[l," ",d&&jsxRuntimeExports.jsx("span",{className:"required-indicator",children:"*"})]}),jsxRuntimeExports.jsx("div",{className:"form-input",children:u}),o&&jsxRuntimeExports.jsx("div",{className:"form-error",children:o})]})}function Input({type:l="text",placeholder:o,value:d,onChange:u,error:p,icon:f,...v}){return jsxRuntimeExports.jsxs("div",{className:`input-wrapper ${p?"error":""}`,children:[f&&jsxRuntimeExports.jsx("span",{className:"input-icon",children:f}),jsxRuntimeExports.jsx("input",{className:"input-element",type:l,placeholder:o,value:d,onChange:u,...v})]})}function Select({options:l=[],value:o,onChange:d,placeholder:u,...p}){return jsxRuntimeExports.jsxs("select",{className:"select-element",value:o,onChange:d,...p,children:[jsxRuntimeExports.jsx("option",{value:"",children:u||"Select an option"}),l.map((f,v)=>jsxRuntimeExports.jsx("option",{value:f.value||f.code,children:f.label||f.name},v))]})}function Checkbox({label:l,checked:o,onChange:d,...u}){return jsxRuntimeExports.jsxs("label",{className:"checkbox",children:[jsxRuntimeExports.jsx("input",{type:"checkbox",checked:o,onChange:d,...u}),jsxRuntimeExports.jsx("span",{className:"checkbox-custom"}),jsxRuntimeExports.jsx("span",{className:"checkbox-label",children:l})]})}function Exercise4$3(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:4,title:"Form Components (Challenge)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(RegistrationForm$1,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

`})]})}const exercises$3={1:Exercise1$3,2:Exercise2$3,3:Exercise3$3,4:Exercise4$3},Day3=()=>jsxRuntimeExports.jsxs("div",{className:"day-content",children:[jsxRuntimeExports.jsxs("div",{className:"day-header",children:[jsxRuntimeExports.jsxs("div",{className:"day-header-content",children:[jsxRuntimeExports.jsx(CodeXml,{size:32,color:"#00D9FF"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h1",{className:"day-title",children:"Ngày 3"}),jsxRuntimeExports.jsx("p",{className:"day-subtitle",children:"Components Fundamentals"})]})]}),jsxRuntimeExports.jsxs("section",{className:"lesson-goal",children:[jsxRuntimeExports.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{children:"Hiểu sâu về Function Components"}),jsxRuntimeExports.jsx("li",{children:"Mastering Props: passing data, prop types, default props"}),jsxRuntimeExports.jsx("li",{children:"Props Destructuring cho code sạch hơn"}),jsxRuntimeExports.jsx("li",{children:"Children prop và component composition"}),jsxRuntimeExports.jsx("li",{children:"Prop Drilling: vấn đề và giải pháp cơ bản"})]})]})]}),jsxRuntimeExports.jsx("div",{className:"exercises-list",children:Object.keys(exercises$3).map(l=>{const o=exercises$3[l];return o?jsxRuntimeExports.jsx(o,{},l):null})})]}),AlertContext=reactExports.createContext(),ICONS={info:"ℹ️",success:"✅",warning:"⚠️",error:"❌"},VARIANT_CLASSES={info:"alert-info",success:"alert-success",warning:"alert-warning",error:"alert-error"};function Alert({children:l,variant:o="info",dismissible:d=!1,autoDismiss:u=0}){const[p,f]=reactExports.useState(!0);return reactExports.useEffect(()=>{if(u>0&&p){const v=setTimeout(()=>{f(!1)},u);return()=>clearTimeout(v)}},[u,p]),p?jsxRuntimeExports.jsx(AlertContext.Provider,{value:{variant:o,dismissible:d,setIsOpen:f},children:jsxRuntimeExports.jsx("div",{className:`alert ${VARIANT_CLASSES[o]}`,children:l})}):null}Alert.Icon=function(){const{variant:o}=reactExports.useContext(AlertContext);return jsxRuntimeExports.jsx("span",{className:"alert-icon",children:ICONS[o]})};Alert.Title=function({children:o}){return jsxRuntimeExports.jsx("h3",{className:"alert-title",children:o})};Alert.Description=function({children:o}){return jsxRuntimeExports.jsx("p",{className:"alert-description",children:o})};Alert.CloseButton=function(){const{dismissible:o,setIsOpen:d}=reactExports.useContext(AlertContext);return o?jsxRuntimeExports.jsx("button",{className:"alert-close",onClick:()=>d(!1),"aria-label":"Close alert",children:"X"}):null};function Exercise1$2(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:1,title:"Alert/Toast System (Compound Components)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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


`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-1",children:[jsxRuntimeExports.jsxs(Alert,{variant:"info",dismissible:!0,autoDismiss:5e3,children:[jsxRuntimeExports.jsx(Alert.Icon,{}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx(Alert.Title,{children:"Information"}),jsxRuntimeExports.jsxs(Alert.Description,{children:["This is an informational message for the user."," ",jsxRuntimeExports.jsx("strong",{children:"Auto Dismiss after 5s"})]})]}),jsxRuntimeExports.jsx(Alert.CloseButton,{})]}),jsxRuntimeExports.jsxs(Alert,{variant:"success",dismissible:!0,children:[jsxRuntimeExports.jsx(Alert.Icon,{}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx(Alert.Title,{children:"Success!"}),jsxRuntimeExports.jsx(Alert.Description,{children:"Your changes have been saved successfully."})]}),jsxRuntimeExports.jsx(Alert.CloseButton,{})]}),jsxRuntimeExports.jsxs(Alert,{variant:"error",children:[jsxRuntimeExports.jsx(Alert.Icon,{}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx(Alert.Title,{children:"Error!"}),jsxRuntimeExports.jsx(Alert.Description,{children:"Something went wrong, please try again later."})]})]})]})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

        `})]})}const WizardContext=reactExports.createContext();function Wizard({children:l,onComplete:o}){const[d,u]=reactExports.useState([]),[p,f]=reactExports.useState(0),[v,A]=reactExports.useState({}),y=d.length,x=d[p],R={steps:d,currentStep:x,currentIndex:p,totalSteps:y,registerStep:(N,T)=>{u(z=>z.some(L=>L.id===N)?z:[...z,{id:N,title:T}])},next:()=>{p<y-1?f(N=>N+1):o&&o(v)},prev:()=>{p>0&&f(N=>N-1)},jumpTo:N=>{const T=d.findIndex(z=>z.id===N);T!==-1&&f(T)},formData:v,updateFormData:(N,T)=>{A(z=>({...z,[N]:T}))}};return jsxRuntimeExports.jsx(WizardContext.Provider,{value:R,children:jsxRuntimeExports.jsx("div",{className:"wizard",children:l})})}Wizard.Steps=function({children:o}){const{steps:d,currentIndex:u}=reactExports.useContext(WizardContext);return jsxRuntimeExports.jsx("div",{className:"wizard-steps",children:reactExports.Children.map(o,p=>{const f=d.findIndex(y=>y.id===p.props.stepId),v=f===u,A=f<u;return reactExports.cloneElement(p,{isActive:v,isCompleted:A})})})};Wizard.Step=function({stepId:o,title:d,isActive:u,isCompleted:p}){const{registerStep:f,jumpTo:v,steps:A}=reactExports.useContext(WizardContext);reactExports.useEffect(()=>{f(o,d)},[o,d,f]);const y=["step",u?"active":"",p?"completed":""].filter(Boolean).join(" "),x=A.findIndex(j=>j.id===o)+1;return jsxRuntimeExports.jsxs("div",{className:y,onClick:()=>p&&v(o),children:[jsxRuntimeExports.jsx("div",{className:"step-number",children:x}),jsxRuntimeExports.jsx("div",{className:"step-label",children:d})]})};Wizard.Panels=function({children:o}){const{currentStep:d}=reactExports.useContext(WizardContext);return jsxRuntimeExports.jsx("div",{className:"wizard-panels",children:reactExports.Children.map(o,u=>u.props.stepId===d?.id?u:null)})};Wizard.Panel=function({children:o}){const{formData:d,updateFormData:u}=reactExports.useContext(WizardContext),p=reactExports.Children.map(o,f=>typeof f=="object"?reactExports.cloneElement(f,{formData:d,updateFormData:u}):f);return jsxRuntimeExports.jsx("div",{className:"wizard-panel",children:p})};Wizard.Navigation=function(){const{currentIndex:o,totalSteps:d,prev:u,next:p}=reactExports.useContext(WizardContext);return jsxRuntimeExports.jsxs("div",{className:"wizard-navigation",children:[jsxRuntimeExports.jsx("button",{className:"btn btn-secondary",onClick:u,disabled:o===0,children:"← Previous"}),o<d-1?jsxRuntimeExports.jsx("button",{className:"btn btn-primary",onClick:p,children:"Next →"}):jsxRuntimeExports.jsx("button",{className:"btn btn-primary",onClick:p,children:"Submit ✅"})]})};function AccountStep({formData:l,updateFormData:o}){return jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx("h2",{children:"Account Information"}),jsxRuntimeExports.jsx("input",{name:"username",placeholder:"Username",value:l.username||"",onChange:d=>o("username",d.target.value)}),jsxRuntimeExports.jsx("input",{type:"password",name:"password",placeholder:"Password",value:l.password||"",onChange:d=>o("password",d.target.value)})]})}function ProfileStep({formData:l,updateFormData:o}){return jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx("h2",{children:"Profile Details"}),jsxRuntimeExports.jsx("input",{name:"fullName",placeholder:"Full Name",value:l.fullName||"",onChange:d=>o("fullName",d.target.value)}),jsxRuntimeExports.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:l.email||"",onChange:d=>o("email",d.target.value)})]})}function ReviewStep({formData:l}){return jsxRuntimeExports.jsxs("div",{className:"form-group review",children:[jsxRuntimeExports.jsx("h2",{children:"Review & Submit"}),jsxRuntimeExports.jsxs("div",{className:"summary",children:[jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("b",{children:"Username:"})," ",l.username]}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("b",{children:"Full Name:"})," ",l.fullName]}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("b",{children:"Email:"})," ",l.email]})]})]})}function Exercise2$2(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:2,title:"Wizard/Stepper (Compound Components)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsxs(Wizard,{onComplete:l=>{console.log(l)},children:[jsxRuntimeExports.jsxs(Wizard.Steps,{children:[jsxRuntimeExports.jsx(Wizard.Step,{stepId:1,title:"Account"}),jsxRuntimeExports.jsx(Wizard.Step,{stepId:2,title:"Profile"}),jsxRuntimeExports.jsx(Wizard.Step,{stepId:3,title:"Review"})]}),jsxRuntimeExports.jsxs(Wizard.Panels,{children:[jsxRuntimeExports.jsx(Wizard.Panel,{stepId:1,children:jsxRuntimeExports.jsx(AccountStep,{})}),jsxRuntimeExports.jsx(Wizard.Panel,{stepId:2,children:jsxRuntimeExports.jsx(ProfileStep,{})}),jsxRuntimeExports.jsx(Wizard.Panel,{stepId:3,children:jsxRuntimeExports.jsx(ReviewStep,{})})]}),jsxRuntimeExports.jsx(Wizard.Navigation,{})]})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

`})]})}const cache=new Map;function DataFetcher({url:l,children:o}){const[d,u]=reactExports.useState(null),[p,f]=reactExports.useState(!0),[v,A]=reactExports.useState(null),y=reactExports.useCallback(async()=>{const j=new AbortController,S=setTimeout(()=>j.abort(),5e3);try{if(f(!0),A(null),cache.has(l)){u(cache.get(l)),f(!1);return}const w=await fetch(l);if(!w.ok)throw new Error(`HTTP ${w.status}`);const q=await w.json();await new Promise(h=>setTimeout(h,3e3)),u(q),cache.set(l,q)}catch(w){A(w)}finally{clearTimeout(S),f(!1)}},[l]),x=()=>{cache.delete(l),y()};return reactExports.useEffect(()=>{y()},[l,y]),o({data:d,loading:p,error:v,retry:x})}function ProductCard({product:l}){return l?jsxRuntimeExports.jsxs("div",{className:"product-card",children:[jsxRuntimeExports.jsx("img",{src:"https://placehold.co/600x400?text=Product%20Image",alt:l.name,className:"product-image"}),jsxRuntimeExports.jsx("h3",{children:l.title}),jsxRuntimeExports.jsxs("p",{children:["Price: ",jsxRuntimeExports.jsxs("strong",{children:["$",l.price]})]}),jsxRuntimeExports.jsx("p",{children:l.description})]}):null}function Skeleton({width:l="100%",height:o="20px",style:d={}}){return jsxRuntimeExports.jsx("div",{className:"skeleton",style:{width:l,height:o,...d},children:jsxRuntimeExports.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%)"},children:"Loading....."})})}function Exercise3$2(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:3,title:"Data Fetcher (Render Props)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsxs(ExerciseCard.Demo,{children:[jsxRuntimeExports.jsx("h3",{children:"Simulate : 5s loading"}),jsxRuntimeExports.jsx("br",{}),jsxRuntimeExports.jsx(DataFetcher,{url:"https://fakestoreapi.com/products/1",children:({data:l,loading:o})=>o?jsxRuntimeExports.jsx(Skeleton,{width:"300px",height:"400px"}):jsxRuntimeExports.jsx(ProductCard,{product:l})})]}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

`})]})}const FormContext=reactExports.createContext(null),validateField$1=(l,o)=>o?o.required&&(!l||l==="")?typeof o.required=="string"?o.required:"Trường này là bắt buộc":o.pattern&&l&&!(o.pattern instanceof RegExp?o.pattern:o.pattern.value).test(l)?o.pattern.message||"Định dạng không hợp lệ":o.minLength&&l&&l.length<o.minLength?`Tối thiểu ${o.minLength} ký tự`:o.maxLength&&l&&l.length>o.maxLength?`Tối đa ${o.maxLength} ký tự`:o.validate&&typeof o.validate=="function"?o.validate(l):null:null;function Form({onSubmit:l,children:o}){const[d,u]=reactExports.useState({}),[p,f]=reactExports.useState({}),[v,A]=reactExports.useState({}),[y,x]=reactExports.useState(!1),j=reactExports.useRef({}),S=reactExports.useCallback((T,z={})=>{if(j.current[T]=z,!(T in d)){const L=z.initialValue??(z.type==="checkbox"?!1:"");u(V=>({...V,[T]:L})),f(V=>({...V,[T]:null})),A(V=>({...V,[T]:!1}))}},[d]),w=reactExports.useCallback((T,z)=>{u(V=>({...V,[T]:z})),A(V=>({...V,[T]:!0}));const L=validateField$1(z,j.current[T]);f(V=>({...V,[T]:L}))},[]),q=()=>{const T={};let z=!0;return Object.keys(j.current).forEach(L=>{const V=d[L],ne=validateField$1(V,j.current[L]);T[L]=ne,ne&&(z=!1)}),f(T),z},h=async T=>{if(T.preventDefault(),A(Object.keys(d).reduce((z,L)=>({...z,[L]:!0}),{})),!!q()){x(!0);try{await l(d)}finally{x(!1)}}},N={values:d,errors:p,touched:v,isSubmitting:y,registerField:S,setFieldValue:w,resetForm:()=>{const T={};Object.keys(j.current).forEach(z=>{const L=j.current[z];T[z]=L.initialValue??(L.type==="checkbox"?!1:"")}),u(T),f({}),A({}),x(!1)}};return jsxRuntimeExports.jsx(FormContext.Provider,{value:N,children:jsxRuntimeExports.jsx("form",{onSubmit:h,noValidate:!0,className:"form-wrapper",children:o})})}Form.Field=function({name:o,label:d,rules:u,children:p}){const{values:f,errors:v,touched:A,registerField:y,setFieldValue:x}=reactExports.useContext(FormContext);React.useEffect(()=>{y(o,u)},[o,y,u]);const j=f[o]??"",S=A[o]&&v[o],w={value:j,error:S,onChange:q=>{const h=q.target.type==="checkbox"?q.target.checked:q.target.value;x(o,h)}};return jsxRuntimeExports.jsxs("div",{className:"form-group",children:[d&&jsxRuntimeExports.jsx("label",{className:"form-label",children:d}),p(w)]})};Form.Input=function({name:o,...d}){const{values:u,setFieldValue:p}=reactExports.useContext(FormContext);return jsxRuntimeExports.jsx("input",{...d,name:o,value:u[o]??"",onChange:f=>p(o,f.target.value),className:"form-input"})};Form.Select=function({name:o,options:d,...u}){const{values:p,setFieldValue:f}=reactExports.useContext(FormContext);return jsxRuntimeExports.jsxs("select",{...u,name:o,value:p[o]??"",onChange:v=>f(o,v.target.value),className:"form-select",children:[jsxRuntimeExports.jsx("option",{value:"",children:"Chọn..."}),d.map(v=>jsxRuntimeExports.jsx("option",{value:v.value,children:v.label},v.value))]})};Form.Checkbox=function({name:o,label:d,...u}){const{values:p,setFieldValue:f}=reactExports.useContext(FormContext);return jsxRuntimeExports.jsxs("label",{className:"form-checkbox-wrapper",children:[jsxRuntimeExports.jsx("input",{...u,type:"checkbox",name:o,checked:!!p[o],onChange:v=>f(o,v.target.checked),className:"form-checkbox"}),jsxRuntimeExports.jsx("span",{className:"form-checkbox-label",children:d})]})};Form.Submit=function({children:o,loading:d}){const{isSubmitting:u}=reactExports.useContext(FormContext),p=d!==void 0?d:u;return jsxRuntimeExports.jsx("button",{type:"submit",disabled:p,className:`form-submit ${p?"form-submit-loading":""}`,children:p?"Đang gửi...":o})};Form.Reset=function({children:o}){const{resetForm:d}=reactExports.useContext(FormContext);return jsxRuntimeExports.jsx("button",{type:"button",onClick:d,className:"form-reset",children:o})};const countries=[{value:"vn",label:"Việt Nam"},{value:"us",label:"Hoa Kỳ"},{value:"jp",label:"Nhật Bản"}];function Exercise4$2(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:4,title:"Form Builder (Mixed Patterns - Challenge)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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


`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsxs(Form,{onSubmit:l=>{console.log("Form submitted:",l),alert("Gửi thành công! Xem console để xem dữ liệu.")},children:[jsxRuntimeExports.jsx(Form.Field,{name:"email",label:"Email",rules:{required:"Email là bắt buộc",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Email không hợp lệ"}},children:({value:l,onChange:o,error:d})=>jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Form.Input,{name:"email",type:"email",value:l,onChange:o}),d&&jsxRuntimeExports.jsx("span",{style:{color:"red",fontSize:"0.875rem"},children:d})]})}),jsxRuntimeExports.jsx(Form.Field,{name:"country",label:"Quốc gia",rules:{required:!0},children:({value:l,onChange:o})=>jsxRuntimeExports.jsx(Form.Select,{name:"country",value:l,onChange:o,options:countries})}),jsxRuntimeExports.jsx(Form.Field,{name:"terms",rules:{required:"Bạn phải đồng ý điều khoản"},children:({value:l,onChange:o})=>jsxRuntimeExports.jsx(Form.Checkbox,{name:"terms",checked:l,onChange:o,label:"Tôi đồng ý với điều khoản sử dụng"})}),jsxRuntimeExports.jsxs("div",{style:{marginTop:"1rem"},children:[jsxRuntimeExports.jsx(Form.Submit,{children:"Gửi"}),jsxRuntimeExports.jsx(Form.Reset,{children:"Xóa"})]})]})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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
`})]})}function List({items:l,loading:o,hasMore:d,observerRef:u}){return jsxRuntimeExports.jsxs("div",{className:"infinite-list-container",children:[l.map((p,f)=>jsxRuntimeExports.jsxs("div",{className:"infinite-list-item",children:[jsxRuntimeExports.jsxs("h3",{className:"infinite-list-item-title",children:[f+1,". ",p.title||`Item ${p.id}`]}),jsxRuntimeExports.jsx("p",{className:"infinite-list-item-body",children:p.body||"Nội dung mẫu..."})]},f)),o&&l.length===0&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:[...Array(2)].map((p,f)=>jsxRuntimeExports.jsxs("div",{className:"infinite-skeleton",children:[jsxRuntimeExports.jsx("div",{className:"infinite-skeleton-title"}),jsxRuntimeExports.jsx("div",{className:"infinite-skeleton-body"}),jsxRuntimeExports.jsx("div",{className:"infinite-skeleton-body"})]},`skeleton-${f}`))}),o&&l.length>0&&jsxRuntimeExports.jsx("div",{className:"infinite-loading",children:"Đang tải thêm..."}),d&&!o&&jsxRuntimeExports.jsx("div",{ref:u,className:"infinite-observer"}),!d&&l.length>0&&jsxRuntimeExports.jsx("div",{className:"infinite-end",children:"Đã hết dữ liệu (tối đa 10 bài)"})]})}function InfiniteScrollList({fetchItems:l,initialItems:o=[]}){const[d,u]=reactExports.useState(o),[p,f]=reactExports.useState(!1),[v,A]=reactExports.useState(!0),[y,x]=reactExports.useState(1),j=reactExports.useRef(null),S=10,w=2,q=reactExports.useCallback(async()=>{if(!(p||!v||d.length>=S)){f(!0);try{const h=await l(y+1,w);if(h&&h.length>0){u(N=>[...N,...h]),x(N=>N+1);const R=d.length+h.length;A(R<S&&h.length===w)}else A(!1)}catch(h){console.error("Lỗi khi tải dữ liệu:",h),A(!1)}finally{f(!1)}}},[y,p,v,d.length,l]);return reactExports.useEffect(()=>{const h=new IntersectionObserver(N=>{N[0].isIntersecting&&v&&!p&&q()},{threshold:.1}),R=j.current;return R&&h.observe(R),()=>{R&&h.unobserve(R)}},[v,p,q]),reactExports.useEffect(()=>{o.length===0&&y===1&&d.length===0&&q()},[o.length,y,d.length,q]),jsxRuntimeExports.jsx(List,{items:d,loading:p,hasMore:v,observerRef:j})}function Exercise5$2(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:5,title:"Infinite Scroll List (Container/Presentational)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(InfiniteScrollList,{fetchItems:async(l,o=2)=>await(await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${l}&_limit=${o}`)).json()})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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
`})]})}const exercises$2={1:Exercise1$2,2:Exercise2$2,3:Exercise3$2,4:Exercise4$2,5:Exercise5$2},Day4=()=>jsxRuntimeExports.jsxs("div",{className:"day-content",children:[jsxRuntimeExports.jsxs("div",{className:"day-header",children:[jsxRuntimeExports.jsxs("div",{className:"day-header-content",children:[jsxRuntimeExports.jsx(CodeXml,{size:32,color:"#00D9FF"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h1",{className:"day-title",children:"Ngày 4"}),jsxRuntimeExports.jsx("p",{className:"day-subtitle",children:"Component Composition Patterns"})]})]}),jsxRuntimeExports.jsxs("section",{className:"lesson-goal",children:[jsxRuntimeExports.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{children:"Master Compound Components pattern"}),jsxRuntimeExports.jsx("li",{children:"Hiểu và implement Render Props pattern"}),jsxRuntimeExports.jsx("li",{children:"Container/Presentational pattern"}),jsxRuntimeExports.jsx("li",{children:"Học cách build flexible và reusable components"}),jsxRuntimeExports.jsx("li",{children:"Tránh prop drilling với composition"})]})]})]}),jsxRuntimeExports.jsx("div",{className:"exercises-list",children:Object.keys(exercises$2).map(l=>{const o=exercises$2[l];return o?jsxRuntimeExports.jsx(o,{},l):null})})]}),DATA_KEY="todos";function loadTodos(){try{const l=localStorage.getItem(DATA_KEY);if(!l)return[];const o=JSON.parse(l);return Array.isArray(o)?o:[]}catch(l){return console.error("Invalid todos data:",l),localStorage.removeItem(DATA_KEY),[]}}function TodoList(){const[l,o]=reactExports.useState(()=>loadTodos()),[d,u]=reactExports.useState(""),[p,f]=reactExports.useState("all");reactExports.useEffect(()=>{localStorage.setItem(DATA_KEY,JSON.stringify(l))},[l]);const v=()=>{d.trim()&&(o(j=>[...j,{id:Date.now(),text:d.trim(),completed:!1}]),u(""))},A=j=>{o(S=>S.map(w=>w.id===j?{...w,completed:!w.completed}:w))},y=j=>{o(S=>S.filter(w=>w.id!==j))},x=l.filter(j=>p==="active"?!j.completed:p==="completed"?j.completed:!0);return jsxRuntimeExports.jsx("div",{className:"todo-app",children:jsxRuntimeExports.jsxs(Card,{className:"todo-card",children:[jsxRuntimeExports.jsx("h2",{className:"todo-title",children:"Todo List"}),jsxRuntimeExports.jsxs("div",{className:"todo-input-group",children:[jsxRuntimeExports.jsx(Input$1,{placeholder:"What needs to be done?",value:d,onChange:j=>u(j.target.value),onKeyPress:j=>j.key==="Enter"&&v(),className:"todo-input"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"md",onClick:v,children:"Add"})]}),jsxRuntimeExports.jsx("div",{className:"filter-group",children:["all","active","completed"].map(j=>jsxRuntimeExports.jsx(Button,{variant:p===j?"primary":"ghost",size:"sm",onClick:()=>f(j),className:"filter-btn",children:j.charAt(0).toUpperCase()+j.slice(1)},j))}),jsxRuntimeExports.jsx("ul",{className:"todo-list",children:x.length===0?jsxRuntimeExports.jsx("p",{className:"empty-state",children:p==="all"?"No todos yet. Add one!":`No ${p} todos.`}):x.map(j=>jsxRuntimeExports.jsxs("li",{className:"todo-item",children:[jsxRuntimeExports.jsx(Checkbox$1,{checked:j.completed,onChange:()=>A(j.id)}),jsxRuntimeExports.jsx("span",{className:`todo-text ${j.completed?"completed":""}`,children:j.text}),jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"sm",onClick:()=>y(j.id),className:"delete-btn",children:"Delete"})]},j.id))}),jsxRuntimeExports.jsx("div",{className:"todo-stats",children:jsxRuntimeExports.jsxs("span",{children:[l.filter(j=>!j.completed).length," active •"," ",l.filter(j=>j.completed).length," completed"]})})]})})}function Exercise1$1(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:1,title:"Convert Class to Function"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
// Refactor các class components sau thành function components:
// TODO: Convert to function component
import { Component } from "react";

// TODO: Convert to function component
class TodoList extends Component {
  state = {
    todos: [],
    inputValue: '',
    filter: 'all' // 'all', 'active', 'completed'
  };

  componentDidMount() {
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.setState({ todos: JSON.parse(saved) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = () => {
    if (this.state.inputValue.trim()) {
      this.setState(prevState => ({
        todos: [
          ...prevState.todos,
          {
            id: Date.now(),
            text: prevState.inputValue,
            completed: false
          }
        ],
        inputValue: ''
      }));
    }
  };

  toggleTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    switch (filter) {
      case 'active':
        return todos.filter(t => !t.completed);
      case 'completed':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  };

  render() {
    const filteredTodos = this.getFilteredTodos();

    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          onKeyPress={(e) => e.key === 'Enter' && this.addTodo()}
        />
        <button onClick={this.addTodo}>Add</button>

        <div>
          {['all', 'active', 'completed'].map(filter => (
            <button
              key={filter}
              onClick={() => this.setState({ filter })}
            >
              {filter}
            </button>
          ))}
        </div>

        <ul>
          {filteredTodos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.toggleTodo(todo.id)}
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoList;
`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(TodoList,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card, Checkbox, Input } from "@ui";
import { useEffect, useState } from "react";

const DATA_KEY = "todos";

/**
 * ✅ Hàm tiện ích load todos từ localStorage
 * - Trả về mảng todos hợp lệ
 * - Nếu lỗi JSON hoặc dữ liệu không phải mảng, trả về []
 */
function loadTodos() {
  try {
    const saved = localStorage.getItem(DATA_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Invalid todos data:", e);
    localStorage.removeItem(DATA_KEY);
    return [];
  }
}

/* ----------------------------- BONUS -----------------------------
Nếu không dùng lazy initializer, có thể dùng ref để tránh overwrite
lần đầu khi component mount:

const isFirstRender = useRef(true);

useEffect(() => {
  const saved = localStorage.getItem(DATA_KEY);
  if (saved) setTodos(JSON.parse(saved));
}, []);

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
  localStorage.setItem(DATA_KEY, JSON.stringify(todos));
}, [todos]);
------------------------------------------------------------------*/

export default function TodoList() {
  // ✅ Lazy initializer: gọi hàm loadTodos ngay khi tạo state
  const [todos, setTodos] = useState(() => loadTodos());

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  // Lưu todos xuống localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem(DATA_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: inputValue.trim(), completed: false },
    ]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <Card className="todo-card">
        <h2 className="todo-title">Todo List</h2>

        {/* Add Todo */}
        <div className="todo-input-group">
          <Input
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
            className="todo-input"
          />
          <Button variant="primary" size="md" onClick={addTodo}>
            Add
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="filter-group">
          {["all", "active", "completed"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "primary" : "ghost"}
              size="sm"
              onClick={() => setFilter(f)}
              className="filter-btn"
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        {/* Todo List */}
        <ul className="todo-list">
          {filteredTodos.length === 0 ? (
            <p className="empty-state">
              {filter === "all"
                ? "No todos yet. Add one!"
                : \`No \${filter} todos.\`}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={\`todo-text \${todo.completed ? "completed" : ""}\`}
                >
                  {todo.text}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </Button>
              </li>
            ))
          )}
        </ul>

        {/* Stats */}
        <div className="todo-stats">
          <span>
            {todos.filter((t) => !t.completed).length} active •{" "}
            {todos.filter((t) => t.completed).length} completed
          </span>
        </div>
      </Card>
    </div>
  );
}

        `})]})}class RegistrationForm extends reactExports.Component{state={formData:{username:"",email:"",password:"",confirmPassword:""},errors:{},touched:{},isSubmitting:!1};validateField=(o,d)=>{switch(o){case"username":return d.trim().length<3?"Username must be at least 3 characters":null;case"email":return/^\S+@\S+\.\S+$/.test(d)?null:"Please enter a valid email";case"password":return d.length<6?"Password must be at least 6 characters":null;case"confirmPassword":return d!==this.state.formData.password?"Passwords do not match":null;default:return null}};validateAll=()=>{const{formData:o}=this.state,d={};return Object.keys(o).forEach(u=>{const p=this.validateField(u,o[u]);p&&(d[u]=p)}),d};handleChange=o=>{const{name:d,value:u}=o.target;this.setState(p=>({formData:{...p.formData,[d]:u},errors:{...p.errors,[d]:null}}))};handleBlur=o=>{const{name:d,value:u}=o.target,p=this.validateField(d,u);this.setState(f=>({touched:{...f.touched,[d]:!0},errors:{...f.errors,[d]:p}}))};handleSubmit=async o=>{o.preventDefault();const d=this.validateAll(),u=Object.values(d).some(p=>p!==null);this.setState({touched:{username:!0,email:!0,password:!0,confirmPassword:!0},errors:d}),!u&&(this.setState({isSubmitting:!0}),await new Promise(p=>setTimeout(p,2e3)),console.log("Form submitted:",this.state.formData),alert("Registration successful!"),this.setState({isSubmitting:!1}))};isFormValid=()=>{const{errors:o}=this.state;return!Object.values(o).some(d=>d!==null)};render(){const{formData:o,errors:d,touched:u,isSubmitting:p}=this.state;return jsxRuntimeExports.jsx("div",{className:"registration-container",children:jsxRuntimeExports.jsxs(Card,{className:"registration-card",children:[jsxRuntimeExports.jsx("h2",{className:"form-title",children:"Create Account"}),jsxRuntimeExports.jsxs("form",{onSubmit:this.handleSubmit,noValidate:!0,children:[jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx(Input$1,{type:"text",name:"username",placeholder:"Username",value:o.username,onChange:this.handleChange,onBlur:this.handleBlur,className:"form-input"}),u.username&&d.username&&jsxRuntimeExports.jsx("p",{className:"error-text",children:d.username})]}),jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx(Input$1,{type:"email",name:"email",placeholder:"Email",value:o.email,onChange:this.handleChange,onBlur:this.handleBlur,className:"form-input"}),u.email&&d.email&&jsxRuntimeExports.jsx("p",{className:"error-text",children:d.email})]}),jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx(Input$1,{type:"password",name:"password",placeholder:"Password",value:o.password,onChange:this.handleChange,onBlur:this.handleBlur,className:"form-input"}),u.password&&d.password&&jsxRuntimeExports.jsx("p",{className:"error-text",children:d.password})]}),jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx(Input$1,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:o.confirmPassword,onChange:this.handleChange,onBlur:this.handleBlur,className:"form-input"}),u.confirmPassword&&d.confirmPassword&&jsxRuntimeExports.jsx("p",{className:"error-text",children:d.confirmPassword})]}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"lg",type:"submit",disabled:p||!this.isFormValid(),className:"submit-btn",children:p?"Creating Account...":"Register"})]}),jsxRuntimeExports.jsx("div",{className:"form-footer",children:jsxRuntimeExports.jsxs("p",{children:["Already have an account? ",jsxRuntimeExports.jsx("span",{className:"login-link",children:"Login"})]})})]})})}}function Exercise2$1(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:2,title:" Form with Validation (Class Component)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
Tạo form với validation using class component (để practice):
// TODO: Implement class component
class RegistrationForm extends Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errors: {},
    touched: {},
    isSubmitting: false
  };

  // TODO:
  // 1. Validate field on blur
  // 2. Validate entire form on submit
  // 3. Show errors only for touched fields
  // 4. Disable submit if form invalid
  // 5. Handle async submission

  validateField = (name, value) => {
    // TODO: Return error message or null
    // - username: min 3 chars
    // - email: valid email
    // - password: min 6 chars
    // - confirmPassword: must match password
  };

  handleChange = (e) => {
    // TODO: Update formData
  };

  handleBlur = (e) => {
    // TODO: Mark field as touched, validate
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Validate all, submit if valid
  };

  render() {
    // TODO: Render form with error messages
  }
}

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(RegistrationForm,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Component } from "react";
import { Card, Input, Button } from "@ui";

class RegistrationForm extends Component {
  state = {
    formData: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
    touched: {},
    isSubmitting: false,
  };

  validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.trim().length < 3
          ? "Username must be at least 3 characters"
          : null;
      case "email":
        return !/^\\S+@\\S+\\.\\S+$/.test(value)
          ? "Please enter a valid email"
          : null;
      case "password":
        return value.length < 6
          ? "Password must be at least 6 characters"
          : null;
      case "confirmPassword":
        return value !== this.state.formData.password
          ? "Passwords do not match"
          : null;
      default:
        return null;
    }
  };

  validateAll = () => {
    const { formData } = this.state;
    const errors = {};
    Object.keys(formData).forEach((field) => {
      const error = this.validateField(field, formData[field]);
      if (error) errors[field] = error;
    });
    return errors;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
      // Clear error on change
      errors: {
        ...prevState.errors,
        [name]: null,
      },
    }));
  };

  handleBlur = (e) => {
    const { name, value } = e.target;
    const error = this.validateField(name, value);
    this.setState((prevState) => ({
      touched: {
        ...prevState.touched,
        [name]: true,
      },
      errors: {
        ...prevState.errors,
        [name]: error,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validateAll();
    const hasErrors = Object.values(errors).some((err) => err !== null);

    // Mark all fields as touched
    this.setState({
      touched: {
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
      },
      errors,
    });

    if (hasErrors) return;

    this.setState({ isSubmitting: true });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", this.state.formData);
    alert("Registration successful!");
    this.setState({ isSubmitting: false });
  };

  isFormValid = () => {
    const { errors } = this.state;
    return !Object.values(errors).some((err) => err !== null);
  };

  render() {
    const { formData, errors, touched, isSubmitting } = this.state;

    return (
      <div className="registration-container">
        <Card className="registration-card">
          <h2 className="form-title">Create Account</h2>

          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.username && errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>

            <div className="form-group">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.email && errors.email && (
                <p className="error-text">{errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.password && errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <div className="form-group">
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>

            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isSubmitting || !this.isFormValid()}
              className="submit-btn"
            >
              {isSubmitting ? "Creating Account..." : "Register"}
            </Button>
          </form>

          <div className="form-footer">
            <p>
              Already have an account? <span className="login-link">Login</span>
            </p>
          </div>
        </Card>
      </div>
    );
  }
}

export default RegistrationForm;
`})]})}const sampleData=[{id:1,name:"Alice",email:"alice@example.com",role:"Admin",status:"Active"},{id:2,name:"Bob",email:"bob@example.com",role:"User",status:"Inactive"},{id:3,name:"Charlie",email:"charlie@example.com",role:"User",status:"Active"},{id:4,name:"David",email:"david@example.com",role:"User",status:"Inactive"},{id:5,name:"Eve",email:"eve@example.com",role:"Admin",status:"Active"},{id:6,name:"Frank",email:"frank@example.com",role:"User",status:"Active"}];class DataTableClass extends reactExports.Component{state={data:this.props.initialData||sampleData,sortKey:null,sortDirection:"asc",currentPage:1,itemsPerPage:10,searchTerm:"",selectedRows:new Set};tableRef=null;handleSort=o=>{const{sortKey:d,sortDirection:u,data:p}=this.state,f=d===o&&u==="asc"?"desc":"asc",v=[...p].sort((A,y)=>A[o]<y[o]?f==="asc"?-1:1:A[o]>y[o]?f==="asc"?1:-1:0);this.setState({data:v,sortKey:o,sortDirection:f,currentPage:1})};handleSearch=o=>{this.setState({searchTerm:o.target.value,currentPage:1})};handleSelectRow=o=>{this.setState(d=>{const u=new Set(d.selectedRows);return u.has(o)?u.delete(o):u.add(o),{selectedRows:u}})};handleSelectAll=()=>{const o=this.getPageData(),d=o.every(u=>this.state.selectedRows.has(u.id));this.setState(u=>{const p=new Set(u.selectedRows);return o.forEach(f=>{d?p.delete(f.id):p.add(f.id)}),{selectedRows:p}})};handleBulkDelete=()=>{window.confirm(`Delete ${this.state.selectedRows.size} items?`)&&this.setState(o=>({data:o.data.filter(d=>!o.selectedRows.has(d.id)),selectedRows:new Set}))};getFilteredData=()=>{const{data:o,searchTerm:d}=this.state;if(!Array.isArray(o))return[];if(!d)return o;const u=d.toLowerCase();return o.filter(p=>Object.values(p).some(f=>String(f).toLowerCase().includes(u)))};getPageData=()=>{const{currentPage:o,itemsPerPage:d}=this.state,u=this.getFilteredData(),p=(o-1)*d;return u.slice(p,p+d)};render(){const{selectedRows:o,sortKey:d,sortDirection:u,currentPage:p,itemsPerPage:f}=this.state,v=this.getPageData(),y=this.getFilteredData().length,x=Math.max(1,Math.ceil(y/f));return jsxRuntimeExports.jsx("div",{className:"datatable-class",children:jsxRuntimeExports.jsx(DataTableUI,{data:v,sortKey:d,sortDirection:u,onSort:this.handleSort,searchTerm:this.state.searchTerm,onSearch:this.handleSearch,selectedRows:o,onSelectRow:this.handleSelectRow,onSelectAll:this.handleSelectAll,onBulkDelete:this.handleBulkDelete,currentPage:p,totalPages:x,onPageChange:j=>this.setState({currentPage:j}),itemsPerPage:f,onItemsPerPageChange:j=>this.setState({itemsPerPage:j,currentPage:1}),totalItems:y})})}}function DataTable({initialData:l}){const[o,d]=reactExports.useState(l||sampleData),[u,p]=reactExports.useState(null),[f,v]=reactExports.useState("asc"),[A,y]=reactExports.useState(1),[x,j]=reactExports.useState(10),[S,w]=reactExports.useState(""),[q,h]=reactExports.useState(new Set),R=reactExports.useRef(null),N=reactExports.useMemo(()=>{let se=[...Array.isArray(o)?o:[]];if(S){const ie=S.toLowerCase();se=se.filter(Ge=>Object.values(Ge).some(Re=>String(Re).toLowerCase().includes(ie)))}return u&&se.sort((ie,Ge)=>ie[u]<Ge[u]?f==="asc"?-1:1:ie[u]>Ge[u]?f==="asc"?1:-1:0),se},[o,S,u,f]),T=N.length,z=Math.max(1,Math.ceil(T/x)),L=reactExports.useMemo(()=>{const ee=(A-1)*x;return N.slice(ee,ee+x)},[N,A,x]),V=reactExports.useCallback(ee=>{v(se=>u===ee&&se==="asc"?"desc":"asc"),p(ee),y(1)},[u]),ne=ee=>{w(ee.target.value),y(1)},de=reactExports.useCallback(ee=>{h(se=>{const ie=new Set(se);return ie.has(ee)?ie.delete(ee):ie.add(ee),ie})},[]),K=reactExports.useCallback(()=>{const ee=L.every(se=>q.has(se.id));h(se=>{const ie=new Set(se);return L.forEach(Ge=>{ee?ie.delete(Ge.id):ie.add(Ge.id)}),ie})},[L,q]),P=reactExports.useCallback(()=>{window.confirm(`Delete ${q.size} items?`)&&(d(ee=>ee.filter(se=>!q.has(se.id))),h(new Set))},[q]),W=reactExports.useCallback(ee=>{j(ee),y(1)},[]);return jsxRuntimeExports.jsx("div",{className:"datatable-function",children:jsxRuntimeExports.jsx(DataTableUI,{data:L,sortKey:u,sortDirection:f,onSort:V,searchTerm:S,onSearch:ne,selectedRows:q,onSelectRow:de,onSelectAll:K,onBulkDelete:P,currentPage:A,totalPages:z,totalItems:T,onPageChange:y,itemsPerPage:x,onItemsPerPageChange:W,ref:R})})}const DataTableUI=({data:l,sortKey:o,sortDirection:d,onSort:u,searchTerm:p,onSearch:f,selectedRows:v,onSelectRow:A,onSelectAll:y,onBulkDelete:x,currentPage:j,totalPages:S,onPageChange:w,itemsPerPage:q,onItemsPerPageChange:h,totalItems:R})=>{const N=l.length>0&&l.every(T=>v.has(T.id));return jsxRuntimeExports.jsxs(Card,{className:"datatable-card",children:[jsxRuntimeExports.jsxs("div",{className:"datatable-header",children:[jsxRuntimeExports.jsx(Input$1,{placeholder:"Search...",value:p,onChange:f,icon:"🔍",className:"datatable-search"}),v.size>0&&jsxRuntimeExports.jsxs(Button,{variant:"danger",size:"sm",onClick:x,children:["Delete Selected (",v.size,")"]})]}),jsxRuntimeExports.jsx("div",{className:"table-wrapper",children:jsxRuntimeExports.jsxs("table",{className:"datatable",children:[jsxRuntimeExports.jsx("thead",{children:jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("th",{children:jsxRuntimeExports.jsx(Checkbox$1,{checked:N,onChange:y})}),["id","name","email","role","status"].map(T=>jsxRuntimeExports.jsxs("th",{onClick:()=>u(T),className:"sortable",children:[T.charAt(0).toUpperCase()+T.slice(1),o===T&&(d==="asc"?" Up":" Down")]},T))]})}),jsxRuntimeExports.jsx("tbody",{children:l.map(T=>jsxRuntimeExports.jsxs("tr",{className:v.has(T.id)?"selected":"",children:[jsxRuntimeExports.jsx("td",{children:jsxRuntimeExports.jsx(Checkbox$1,{checked:v.has(T.id),onChange:()=>A(T.id)})}),jsxRuntimeExports.jsx("td",{children:T.id}),jsxRuntimeExports.jsx("td",{children:T.name}),jsxRuntimeExports.jsx("td",{children:T.email}),jsxRuntimeExports.jsx("td",{children:T.role}),jsxRuntimeExports.jsx("td",{children:jsxRuntimeExports.jsx("span",{className:`status ${T.status.toLowerCase()}`,children:T.status})})]},T.id))})]})}),jsxRuntimeExports.jsxs("div",{className:"datatable-footer",children:[jsxRuntimeExports.jsxs("div",{className:"items-per-page flex items-center gap-1",children:[jsxRuntimeExports.jsx("span",{children:"Shows "}),jsxRuntimeExports.jsx(Select$1,{value:q,onChange:T=>h(Number(T.target.value)),options:[5,10,25,50].map(T=>({value:T,label:`${T}`}))})]}),jsxRuntimeExports.jsxs("div",{className:"pagination",children:[jsxRuntimeExports.jsx(Button,{size:"sm",disabled:j===1,onClick:()=>w(j-1),children:"Previous"}),jsxRuntimeExports.jsxs("span",{className:"page-info",children:["Page ",j," of ",S," (",R," items)"]}),jsxRuntimeExports.jsx(Button,{size:"sm",disabled:j===S,onClick:()=>w(j+1),children:"Next"})]})]})]})};function Exercise3$1(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:3,title:"Data Table with Sorting (Both versions)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
        
/* ==================== SAMPLE DATA ==================== */
const initialData = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "User", status: "Active" },
  { id: 4, name: "David", email: "david@example.com", role: "User", status: "Inactive" },
  { id: 5, name: "Eve", email: "eve@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Frank", email: "frank@example.com", role: "User", status: "Active" },
];

/* ======================================== */
//Implement cả Class và Function version:
// Version 1: Class Component
class DataTable extends Component {
  state = {
    data: this.props.initialData,
    sortKey: null,
    sortDirection: 'asc',
    currentPage: 1,
    itemsPerPage: 10
  };

  // TODO:
  // 1. Sort functionality
  // 2. Pagination
  // 3. Search filter
  // 4. Select rows
  // 5. Bulk actions
}

// Version 2: Function Component
function DataTable({ initialData }) {
  // TODO: Convert above to hooks
}

`}),jsxRuntimeExports.jsxs(ExerciseCard.Demo,{children:[jsxRuntimeExports.jsx("h3",{children:"// Version 1: Class Component"}),jsxRuntimeExports.jsx(DataTableClass,{}),jsxRuntimeExports.jsx("h3",{children:"// Version 2: Function Component"}),jsxRuntimeExports.jsx(DataTable,{})]}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card, Checkbox, Input, Select } from "@ui";
import { Component, useCallback, useMemo, useRef, useState } from "react";

/* ==================== CLASS COMPONENT ==================== */
class DataTableClass extends Component {
  state = {
    data: this.props.initialData,
    sortKey: null,
    sortDirection: "asc",
    currentPage: 1,
    itemsPerPage: 10,
    searchTerm: "",
    selectedRows: new Set(),
  };

  // ===== Lazy initializer example for ref =====
  // Bonus: dùng ref để giữ tham chiếu DOM hoặc dữ liệu không gây render lại
  tableRef = null; // ref có thể gán cho table DOM
  /* ví dụ:
     this.tableRef = React.createRef();
     <table ref={this.tableRef}>...</table>
  */

  handleSort = (key) => {
    const { sortKey, sortDirection, data } = this.state;
    const direction =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    this.setState({
      data: sortedData,
      sortKey: key,
      sortDirection: direction,
      currentPage: 1,
    });
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value, currentPage: 1 });
  };

  handleSelectRow = (id) => {
    this.setState((prev) => {
      const selected = new Set(prev.selectedRows);
      selected.has(id) ? selected.delete(id) : selected.add(id);
      return { selectedRows: selected };
    });
  };

  handleSelectAll = () => {
    const pageData = this.getPageData();
    const allSelected = pageData.every((item) =>
      this.state.selectedRows.has(item.id)
    );
    this.setState((prev) => {
      const selected = new Set(prev.selectedRows);
      pageData.forEach((item) => {
        allSelected ? selected.delete(item.id) : selected.add(item.id);
      });
      return { selectedRows: selected };
    });
  };

  handleBulkDelete = () => {
    if (!window.confirm(\`Delete \${this.state.selectedRows.size} items?\`))
      return;
    this.setState((prev) => ({
      data: prev.data.filter((item) => !prev.selectedRows.has(item.id)),
      selectedRows: new Set(),
    }));
  };

  // ===== Lazy initializer function tách ngoài =====
  getFilteredData = () => {
    const { data, searchTerm } = this.state;
    if (!Array.isArray(data)) return []; // bảo vệ tránh undefined
    if (!searchTerm) return data;
    const term = searchTerm.toLowerCase();
    return data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(term)
      )
    );
  };

  getPageData = () => {
    const { currentPage, itemsPerPage } = this.state;
    const filtered = this.getFilteredData();
    const start = (currentPage - 1) * itemsPerPage;
    const sliced = filtered.slice(start, start + itemsPerPage);
    return sliced;
  };

  render() {
    const { selectedRows, sortKey, sortDirection, currentPage, itemsPerPage } =
      this.state;
    const pageData = this.getPageData();
    const filtered = this.getFilteredData();
    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    return (
      <div className="datatable-class">
        <DataTableUI
          data={pageData}
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={this.handleSort}
          searchTerm={this.state.searchTerm}
          onSearch={this.handleSearch}
          selectedRows={selectedRows}
          onSelectRow={this.handleSelectRow}
          onSelectAll={this.handleSelectAll}
          onBulkDelete={this.handleBulkDelete}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => this.setState({ currentPage: page })}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(val) =>
            this.setState({ itemsPerPage: val, currentPage: 1 })
          }
          totalItems={totalItems}
        />
      </div>
    );
  }
}

/* ==================== FUNCTION COMPONENT ==================== */
function DataTable({ initialData }) {
  const [data, setData] = useState(initialData);
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Bonus: useRef lazy initializer
  const tableRef = useRef(null);

  // ===== Filter + sort + pagination =====
  const filteredData = useMemo(() => {
    const arr = Array.isArray(data) ? data : [];
    let result = [...arr];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(term)
        )
      );
    }

    if (sortKey) {
      result.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, searchTerm, sortKey, sortDirection]);

  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const pageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  // ===== Handlers =====
  const handleSort = useCallback(
    (key) => {
      setSortDirection((prev) =>
        sortKey === key && prev === "asc" ? "desc" : "asc"
      );
      setSortKey(key);
      setCurrentPage(1);
    },
    [sortKey]
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const toggleRow = useCallback((id) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    const allSelected = pageData.every((item) => selectedRows.has(item.id));
    setSelectedRows((prev) => {
      const next = new Set(prev);
      pageData.forEach((item) => {
        allSelected ? next.delete(item.id) : next.add(item.id);
      });
      return next;
    });
  }, [pageData, selectedRows]);

  const handleBulkDelete = useCallback(() => {
    if (!window.confirm(\`Delete \${selectedRows.size} items?\`)) return;
    setData((prev) => prev.filter((item) => !selectedRows.has(item.id)));
    setSelectedRows(new Set());
  }, [selectedRows]);

  const handleItemsPerPageChange = useCallback((val) => {
    setItemsPerPage(val);
    setCurrentPage(1);
  }, []);

  return (
    <div className="datatable-function">
      <DataTableUI
        data={pageData}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSort={handleSort}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        selectedRows={selectedRows}
        onSelectRow={toggleRow}
        onSelectAll={toggleAll}
        onBulkDelete={handleBulkDelete}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        ref={tableRef} // Bonus: ref
      />
    </div>
  );
}

/* ==================== SHARED UI COMPONENT ==================== */
const DataTableUI = ({
  data,
  sortKey,
  sortDirection,
  onSort,
  searchTerm,
  onSearch,
  selectedRows,
  onSelectRow,
  onSelectAll,
  onBulkDelete,
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
}) => {
  const allSelectedOnPage =
    data.length > 0 && data.every((item) => selectedRows.has(item.id));

  return (
    <Card className="datatable-card">
      <div className="datatable-header">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearch}
          icon="🔍"
          className="datatable-search"
        />
        {selectedRows.size > 0 && (
          <Button variant="danger" size="sm" onClick={onBulkDelete}>
            Delete Selected ({selectedRows.size})
          </Button>
        )}
      </div>

      <div className="table-wrapper">
        <table className="datatable">
          <thead>
            <tr>
              <th>
                <Checkbox checked={allSelectedOnPage} onChange={onSelectAll} />
              </th>
              {["id", "name", "email", "role", "status"].map((key) => (
                <th key={key} onClick={() => onSort(key)} className="sortable">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortKey === key &&
                    (sortDirection === "asc" ? " Up" : " Down")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className={selectedRows.has(item.id) ? "selected" : ""}
              >
                <td>
                  <Checkbox
                    checked={selectedRows.has(item.id)}
                    onChange={() => onSelectRow(item.id)}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  <span className={\`status \${item.status.toLowerCase()}\`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="datatable-footer">
        <div className="items-per-page flex items-center gap-1">
          <span>Shows </span>
          <Select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            options={[5, 10, 25, 50].map((n) => ({
              value: n,
              label: \`\${n}\`,
            }))}
          />
        </div>
        <div className="pagination">
          <Button
            size="sm"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <span className="page-info">
            Page {currentPage} of {totalPages} ({totalItems} items)
          </span>
          <Button
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { DataTable, DataTableClass };

`})]})}const logErrorToService=(l,o)=>{console.error("ErrorBoundary caught an error:",l,o)};let ErrorBoundary$1=class extends reactExports.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,d){this.setState({errorInfo:d}),logErrorToService(o,d)}handleRetry=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};componentDidUpdate(o){this.props.resetKey&&this.props.resetKey!==o.resetKey&&this.setState({hasError:!1,error:null,errorInfo:null})}render(){const{hasError:o,error:d,errorInfo:u}=this.state,{children:p,fallback:f}=this.props;return o?f||jsxRuntimeExports.jsx("div",{className:"error-boundary",children:jsxRuntimeExports.jsxs(Card,{className:"error-card",children:[jsxRuntimeExports.jsx("div",{className:"error-icon",children:"Warning"}),jsxRuntimeExports.jsx("h2",{className:"error-title",children:"Something went wrong"}),jsxRuntimeExports.jsx("p",{className:"error-message",children:d?.message||"An unexpected error occurred"}),jsxRuntimeExports.jsxs("details",{className:"error-details",children:[jsxRuntimeExports.jsx("summary",{children:"View error details"}),jsxRuntimeExports.jsx("pre",{children:u?.componentStack})]}),jsxRuntimeExports.jsxs("div",{className:"error-actions",children:[jsxRuntimeExports.jsx(Button,{variant:"primary",size:"md",onClick:this.handleRetry,children:"Try Again"}),jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"md",onClick:()=>window.location.reload(),children:"Reload Page"})]})]})}):p}};class BuggyComponent extends reactExports.Component{state={shouldThrow:!1};componentDidUpdate(){if(this.state.shouldThrow)throw new Error("Intentional error for testing")}render(){return jsxRuntimeExports.jsxs(Card,{className:"buggy-card",children:[jsxRuntimeExports.jsx("h3",{children:"Buggy Component (For Testing)"}),jsxRuntimeExports.jsx("p",{children:"Click button to trigger an error"}),jsxRuntimeExports.jsx(Button,{variant:"danger",onClick:()=>this.setState({shouldThrow:!0}),children:"Trigger Error"})]})}}function Exercise4$1(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:4,title:"Error Boundary Usage"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
// TODO: Create custom ErrorBoundary
class ErrorBoundary extends Component {
  // TODO:
  // 1. Catch errors
  // 2. Log to service
  // 3. Show fallback UI
  // 4. Retry mechanism
  // 5. Reset on navigation
}

// TODO: Component that throws error
class BuggyComponent extends Component {
  state = { shouldThrow: false };

  componentDidUpdate() {
    if (this.state.shouldThrow) {
      throw new Error('Intentional error for testing');
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ shouldThrow: true })}>
          Trigger Error
        </button>
      </div>
    );
  }
}

// Usage
<ErrorBoundary>
  <BuggyComponent />
</ErrorBoundary>

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(ErrorBoundary$1,{children:jsxRuntimeExports.jsx(BuggyComponent,{})})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card } from "@ui";
import { Component } from "react";

// Fake error logging service
const logErrorToService = (error, errorInfo) => {
  console.error("ErrorBoundary caught an error:", error, errorInfo);
  // Gửi đến Sentry, LogRocket, v.v.
  // fetch('/api/errors', { method: 'POST', body: JSON.stringify({ error, errorInfo }) });
};

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    // Cập nhật state để render fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log lỗi ra service
    this.setState({ errorInfo });
    logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    // Reset state → thử render lại children
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  // Reset khi props thay đổi (ví dụ: route thay đổi)
  componentDidUpdate(prevProps) {
    if (this.props.resetKey && this.props.resetKey !== prevProps.resetKey) {
      this.setState({ hasError: false, error: null, errorInfo: null });
    }
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Custom fallback UI
      if (fallback) return fallback;

      return (
        <div className="error-boundary">
          <Card className="error-card">
            <div className="error-icon">Warning</div>
            <h2 className="error-title">Something went wrong</h2>
            <p className="error-message">
              {error?.message || "An unexpected error occurred"}
            </p>

            <details className="error-details">
              <summary>View error details</summary>
              <pre>{errorInfo?.componentStack}</pre>
            </details>

            <div className="error-actions">
              <Button variant="primary" size="md" onClick={this.handleRetry}>
                Try Again
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() => window.location.reload()}
              >
                Reload Page
              </Button>
            </div>
          </Card>
        </div>
      );
    }

    return children;
  }
}

//======= BuggyComponent ==============
class BuggyComponent extends Component {
  state = { shouldThrow: false };

  componentDidUpdate() {
    if (this.state.shouldThrow) {
      // Ném lỗi để ErrorBoundary bắt
      throw new Error("Intentional error for testing");
    }
  }

  render() {
    return (
      <Card className="buggy-card">
        <h3>Buggy Component (For Testing)</h3>
        <p>Click button to trigger an error</p>
        <Button
          variant="danger"
          onClick={() => this.setState({ shouldThrow: true })}
        >
          Trigger Error
        </Button>
      </Card>
    );
  }
}
export { BuggyComponent, ErrorBoundary };

`})]})}class LifecycleDemo extends reactExports.Component{state={count:0,showChild:!0};logsRef={current:[]};parentRenderCount=0;log=o=>this.logsRef.current.push(`${new Date().toLocaleTimeString()}: ${o}`);componentDidMount(){this.log("Parent Class: componentDidMount")}componentDidUpdate(o,d){d.count!==this.state.count&&this.log(`Parent Class: count → ${this.state.count}`),d.showChild!==this.state.showChild&&this.log(`Parent Class: showChild → ${this.state.showChild}`)}componentWillUnmount(){this.log("Parent Class: cleanup (unmount)")}render(){this.parentRenderCount++,this.log(`Parent Class: render (${this.parentRenderCount})`);const{count:o,showChild:d}=this.state;return jsxRuntimeExports.jsxs(Card,{className:"lifecycle-card",children:[jsxRuntimeExports.jsx("h2",{children:"Class Component"}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("strong",{children:"Parent Renders:"})," ",this.parentRenderCount]}),jsxRuntimeExports.jsxs("div",{className:"controls",children:[jsxRuntimeExports.jsxs(Button,{onClick:()=>this.setState({count:o+1}),variant:"primary",children:["Count (",o,")"]}),jsxRuntimeExports.jsxs(Button,{onClick:()=>this.setState({showChild:!d}),variant:"secondary",children:[d?"Hide":"Show"," Child"]}),jsxRuntimeExports.jsx(Button,{onClick:()=>{this.logsRef.current=[],this.forceUpdate()},variant:"danger",children:"Clear Logs"})]}),d&&jsxRuntimeExports.jsx(ChildClass,{log:this.log,count:o}),jsxRuntimeExports.jsx(LogsList,{logs:this.logsRef.current,title:"Class Logs"})]})}}class ChildClass extends reactExports.Component{childRenderCount=0;componentDidMount(){this.props.log("Child Class: Did Mount (~ useEffect[])")}componentDidUpdate(o){o.count!==this.props.count&&this.props.log(`Child Class: count → ${this.props.count}`)}componentWillUnmount(){this.props.log("Child Class: cleanup (unmount)")}render(){return this.childRenderCount++,this.props.log(`Child Class: render (${this.childRenderCount})`),jsxRuntimeExports.jsxs("div",{className:"child-box",children:["Child Class (count: ",this.props.count,") – Render #",this.childRenderCount]})}}function LifecycleFunction(){const[l,o]=reactExports.useState(0),[d,u]=reactExports.useState(!0),p=reactExports.useRef([]),f=reactExports.useRef(0),v=y=>p.current.push(`${new Date().toLocaleTimeString()}: ${y}`),A=()=>{p.current=[],o(y=>y+1)};return reactExports.useEffect(()=>(v("Function: useEffect (mount)"),()=>v("Function: useEffect cleanup (unmount)")),[]),reactExports.useEffect(()=>{l>0&&v(`Function: count → ${l}`)},[l]),f.current+=1,v(`Function: render (${f.current})`),jsxRuntimeExports.jsxs(Card,{className:"lifecycle-card",children:[jsxRuntimeExports.jsx("h2",{children:"Function Component"}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("strong",{children:"Parent Renders:"})," ",f.current]}),jsxRuntimeExports.jsxs("div",{className:"controls",children:[jsxRuntimeExports.jsxs(Button,{onClick:()=>o(y=>y+1),variant:"primary",children:["Count (",l,")"]}),jsxRuntimeExports.jsxs(Button,{onClick:()=>u(y=>!y),variant:"secondary",children:[d?"Hide":"Show"," Child"]}),jsxRuntimeExports.jsx(Button,{onClick:A,variant:"danger",children:"Clear Logs"})]}),d&&jsxRuntimeExports.jsx(ChildFunction,{log:v,count:l}),jsxRuntimeExports.jsx(LogsList,{logs:p.current,title:"Function Logs"})]})}function ChildFunction({log:l,count:o}){const d=reactExports.useRef(0);return d.current+=1,reactExports.useEffect(()=>(l("Child Function: useEffect (mount)"),()=>l("Child Function: cleanup (unmount)")),[l]),reactExports.useEffect(()=>{l(`Child Function: count → ${o}`)},[o,l]),l(`Child Function: render (${d.current})`),jsxRuntimeExports.jsxs("div",{className:"child-box function",children:["Child Function (count: ",o,") – Render #",d.current]})}function LogsList({logs:l,title:o}){return jsxRuntimeExports.jsxs("div",{className:"logs",children:[jsxRuntimeExports.jsxs("h3",{children:[o," (",l.length,")"]}),l.length===0?jsxRuntimeExports.jsx("p",{children:"No logs yet..."}):jsxRuntimeExports.jsx("ul",{children:l.map((d,u)=>jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("code",{children:d})},u))})]})}function LifecyclePlayground(){return jsxRuntimeExports.jsxs("div",{className:"playground",children:[jsxRuntimeExports.jsx("h1",{children:"Lifecycle Playground"}),jsxRuntimeExports.jsxs("div",{className:"grid",children:[jsxRuntimeExports.jsx(LifecycleDemo,{}),jsxRuntimeExports.jsx(LifecycleFunction,{})]}),jsxRuntimeExports.jsxs("div",{className:"success",style:{marginTop:"2rem",padding:"1.5rem",background:"#16213e",borderRadius:"12px",border:"2px solid #00ff88",lineHeight:"2em"},children:[jsxRuntimeExports.jsx("h3",{style:{color:"#00ff88"},children:"SO SÁNH LIFECYCLE – CLASS VS FUNCTION COMPONENT"}),jsxRuntimeExports.jsxs("p",{style:{color:"#a0d8ff",lineHeight:"1.8"},children:["Playground này giúp bạn ",jsxRuntimeExports.jsx("strong",{children:"nhìn thấy trực tiếp"})," từng giai đoạn lifecycle chạy như thế nào:"]}),jsxRuntimeExports.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",color:"#e0e0e0",fontSize:"0.95rem"},children:[jsxRuntimeExports.jsx("thead",{children:jsxRuntimeExports.jsxs("tr",{style:{background:"#1e2a44"},children:[jsxRuntimeExports.jsx("th",{style:{padding:"0.75rem",border:"1px solid #444",textAlign:"left"},children:"Giai đoạn"}),jsxRuntimeExports.jsx("th",{style:{padding:"0.75rem",border:"1px solid #444",textAlign:"left"},children:"Class Component"}),jsxRuntimeExports.jsx("th",{style:{padding:"0.75rem",border:"1px solid #444",textAlign:"left"},children:"Function Component + Hooks"})]})}),jsxRuntimeExports.jsxs("tbody",{children:[jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Render (mỗi lần)"})}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:[jsxRuntimeExports.jsx("code",{children:"render()"}),jsxRuntimeExports.jsx("br",{}),"→ Phải tự log + đếm bằng biến instance"]}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:[jsxRuntimeExports.jsx("code",{children:"Function body chạy lại"}),jsxRuntimeExports.jsx("br",{}),"→ Tự động log + đếm bằng ",jsxRuntimeExports.jsx("code",{children:"useRef"})]})]}),jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Mount (sau render đầu)"})}),jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:jsxRuntimeExports.jsx("code",{children:"componentDidMount()"})}),jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:jsxRuntimeExports.jsx("code",{children:"useEffect(() => { ... }, [])"})})]}),jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Update (khi state/props đổi)"})}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:[jsxRuntimeExports.jsx("code",{children:"componentDidUpdate(prevProps, prevState)"}),jsxRuntimeExports.jsx("br",{}),"→ Phải tự so sánh ",jsxRuntimeExports.jsx("code",{children:"prevState"})]}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:[jsxRuntimeExports.jsx("code",{children:"useEffect(() => { ... }, [deps])"}),jsxRuntimeExports.jsx("br",{}),"→ Tự động chạy khi ",jsxRuntimeExports.jsx("code",{children:"deps"})," thay đổi"]})]}),jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Unmount (trước khi mất)"})}),jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:jsxRuntimeExports.jsx("code",{children:"componentWillUnmount()"})}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:[jsxRuntimeExports.jsx("code",{children:"return () => cleanup"})," trong"," ",jsxRuntimeExports.jsx("code",{children:"useEffect"})]})]}),jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Các method khác"})}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:[jsxRuntimeExports.jsx("code",{children:"shouldComponentUpdate"}),","," ",jsxRuntimeExports.jsx("code",{children:"getSnapshotBeforeUpdate"}),", v.v."]}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:["Thay bằng ",jsxRuntimeExports.jsx("code",{children:"React.memo"}),", ",jsxRuntimeExports.jsx("code",{children:"useMemo"}),","," ",jsxRuntimeExports.jsx("code",{children:"useCallback"})]})]})]})]}),jsxRuntimeExports.jsx("h4",{style:{color:"#00ff88",marginTop:"1.5rem"},children:"Tóm tắt so sánh lifecycle:"}),jsxRuntimeExports.jsxs("ul",{style:{color:"#ffdd99",lineHeight:"1.9"},children:[jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Thứ tự chạy:"})," Giống hệt nhau → bạn thấy rõ trong logs"]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Function Component:"})," 1 hàm ",jsxRuntimeExports.jsx("code",{children:"useEffect"})," ","thay thế 3 lifecycle methods"]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Class Component:"})," Nhiều method riêng lẻ → dễ nhầm, dễ quên"]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Log giống hệt nhau:"})," Dễ nhìn ra sự tương đương 1-1"]})]}),jsxRuntimeExports.jsxs("p",{style:{marginTop:"1.5rem",color:"#00ff88",fontWeight:"bold",fontSize:"1.1rem"},children:["Kết luận:"," ",jsxRuntimeExports.jsx("strong",{children:"Hooks không phải là “khác biệt” – mà là “cách viết tốt hơn” của cùng một lifecycle!"})]})]})]})}function Exercise5$1(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:5,title:"Lifecycle Playground (Challenge)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
// ============================
// ĐỀ BÀI: Trực quan hóa các phương pháp Lifecycle trong React
// ============================

/*
Mục tiêu:
- Tạo một ứng dụng React để trực quan hóa và theo dõi các lifecycle methods của class component và function component.
- So sánh sự khác biệt giữa việc sử dụng lifecycle methods trong class component và hooks (useEffect) trong function component.

Yêu cầu:
1. Tạo Class Component và Function Component với các lifecycle methods sau:
    - componentDidMount: Được gọi sau khi component đã được mount vào DOM.
    - componentDidUpdate: Được gọi khi props hoặc state của component thay đổi.
    - componentWillUnmount: Được gọi trước khi component bị unmount khỏi DOM.
    - useEffect (Function Component): Thay thế các lifecycle methods trong function component.
    - useRef: Được sử dụng để đếm số lần render của parent và child component.

2. Thực hiện các thao tác sau trong class component và function component:
    - Increment Count: Nút để tăng giá trị count.
    - Show/Hide Child: Nút để ẩn hoặc hiện child component.
    - Clear Logs: Nút để xóa log.
    - Hiển thị logs cho các lifecycle methods của parent và child component.

3. Cần có các phương thức lifecycle sau cho child component:
    - componentDidMount/useEffect (mount): Được gọi khi child component được mount.
    - componentDidUpdate/useEffect (update): Được gọi khi count thay đổi.
    - componentWillUnmount/useEffect (cleanup): Được gọi trước khi component bị unmount.

4. Logs:
    - Cập nhật log mỗi khi render, mount, update, unmount diễn ra.
    - Hiển thị log cho cả parent và child component.

5. So sánh lifecycle:
    - So sánh trực quan giữa Class Component và Function Component khi thực hiện các thao tác trên.

6. Yêu cầu kỹ thuật:
    - Không gây lỗi "Maximum update depth exceeded".
    - Không gây lỗi "Cannot update during render".
    - Đảm bảo ứng dụng production-ready, không có render thừa và không bị đơ khi sử dụng.

7. Hiển thị số liệu hiệu suất:
    - Hiển thị số lần render của Parent và Child.
    - Hiển thị tổng số logs đã tạo ra trong quá trình lifecycle.

*/

// ============================
// Class Component (LifecycleDemo)
// ============================

/*
Tạo một class component có tên LifecycleDemo:
- State:
    - logs: Lưu các log lifecycle (array).
    - count: Dùng để đếm số lần render.
    - showChild: Điều khiển hiển thị child component.

- Phương thức lifecycle:
    - componentDidMount(): Log thông tin khi parent component được mount.
    - componentDidUpdate(prevProps, prevState): Log thông tin khi state count hoặc showChild thay đổi.
    - componentWillUnmount(): Log thông tin khi component bị unmount.
*/

// ============================
// Function Component (LifecycleFunction)
// ============================

/*
Tạo một function component có tên LifecycleFunction:
- Hooks:
    - useState: Quản lý các state count, showChild.
    - useRef: Đếm số lần render của component.
    - useEffect: Thay thế các lifecycle methods của class component.
        - useEffect với mảng dependencies rỗng: Thực hiện mount.
        - useEffect với dependency là count: Thực hiện update khi count thay đổi.
        - Cleanup trong useEffect: Giống như componentWillUnmount trong class component.

- Đảm bảo tương tự như class component, có log cho mọi thao tác lifecycle: render, mount, update, unmount.
*/

// ============================
// Child Component (ChildClass / ChildFunction)
// ============================

/*
Tạo child component cho cả Class và Function Component:
- Class Component (ChildClass):
    - Phương thức lifecycle:
        - componentDidMount(): Log khi child component được mount.
        - componentDidUpdate(prevProps): Log khi count thay đổi.
        - componentWillUnmount(): Log khi child component bị unmount.
    - Sử dụng this.props.count để hiển thị giá trị count.

- Function Component (ChildFunction):
    - useEffect: Tương tự như trong class component, gọi khi count thay đổi hoặc khi component mount/unmount.
    - useRef: Đếm số lần render của child.
*/

// ============================
// Tính năng bổ sung: So sánh Class và Function Component
// ============================

/*
Tạo bảng so sánh lifecycle methods của Class và Function Component:
    - Thứ tự gọi các lifecycle methods giữa class và function component.
    - So sánh giữa componentDidMount, componentDidUpdate, componentWillUnmount trong class component và useEffect trong function component.
    - Hiển thị số lần render của cả parent và child component.

Hiển thị kết quả trong bảng so sánh lifecycle:
    - Render (mỗi lần)
    - Mount (sau render đầu)
    - Update (khi state/props thay đổi)
    - Unmount (trước khi mất)
    - Các phương thức khác như shouldComponentUpdate, getSnapshotBeforeUpdate, React.memo, useMemo, useCallback
*/

// ============================
// Yêu cầu kỹ thuật:
// ============================

/*
    1. Không gây lỗi "Maximum update depth exceeded": Đảm bảo không có vòng lặp vô tận khi cập nhật state.
    2. Không gây lỗi "Cannot update during render": Tránh việc cập nhật state trong quá trình render.
    3. Sử dụng đúng lifecycle methods trong cả class component và function component.
    4. Đảm bảo các component được tối ưu hóa, tránh render thừa.
    5. Production-ready: Đảm bảo ứng dụng hoạt động ổn định và không gây lỗi trong môi trường sản xuất.

*/

// ============================
// Các phương thức cần sử dụng:
// ============================

/*
- Class Component:
    - componentDidMount, componentDidUpdate, componentWillUnmount
- Function Component:
    - useEffect, useRef, useState
    - Sử dụng useLayoutEffect khi cần thiết
*/


// ============================
// BONUS: Các lifecycle nâng cao (Advanced Lifecycle Methods)
// ============================

/*
BONUS: Tìm hiểu và implement các lifecycle nâng cao trong React

Hướng dẫn:

1. Class Component:
    - shouldComponentUpdate(nextProps, nextState):
        - Được gọi trước mỗi lần render, cho phép kiểm soát xem component có cần re-render hay không.
        - Tìm hiểu và implement phương thức này để quyết định khi nào nên re-render dựa trên nextProps và nextState.
        
    - getDerivedStateFromProps(nextProps, nextState):
        - Được gọi trước mỗi render, khi props thay đổi. Để cập nhật state dựa trên props mới.
        - Cần tìm hiểu cách sử dụng getDerivedStateFromProps để đồng bộ hóa state với props.
        
    - getSnapshotBeforeUpdate(prevProps, prevState):
        - Được gọi ngay trước khi React cập nhật DOM, có thể lấy thông tin snapshot của DOM trước khi cập nhật.
        - Cần tìm hiểu cách sử dụng getSnapshotBeforeUpdate để lấy snapshot của DOM trước khi update.

    - componentDidCatch(error, info):
        - Phương thức lifecycle dùng để bắt lỗi trong tree của React và hiển thị thông báo lỗi thay vì crash toàn bộ ứng dụng.
        - Cần tìm hiểu cách bắt lỗi bằng componentDidCatch và render UI fallback khi có lỗi.

2. Function Component (Hooks):
    - useMemo:
        - Sử dụng để ghi nhớ giá trị của tính toán đắt đỏ (expensive calculation) trong function component và tránh tính toán lại nếu không cần thiết.
        - Tìm hiểu cách sử dụng useMemo để tối ưu hóa hiệu suất.
        
    - useCallback:
        - Dùng để ghi nhớ một function và chỉ tái tạo lại function đó khi dependencies thay đổi.
        - Tìm hiểu cách sử dụng useCallback để tối ưu hóa việc truyền function xuống các component con.

    - useLayoutEffect:
        - Tương tự như useEffect nhưng được gọi ngay sau khi render và trước khi layout được vẽ lên, hữu ích khi muốn đo kích thước của DOM hoặc thay đổi style trước khi render.

    - useImperativeHandle:
        - Cung cấp cho child component API có thể gọi từ parent component, thường dùng khi cần phải làm việc với DOM elements hoặc component methods.

    - useErrorBoundary (React 18):
        - Nếu sử dụng React 18, tìm hiểu về useErrorBoundary hook để xử lý lỗi trong function component.

3. Yêu cầu:
    - Tìm hiểu cách sử dụng các lifecycle nâng cao trong React (class component và function component).
    - Implement ít nhất một trong các lifecycle nâng cao như shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate trong class component hoặc các hooks như useMemo, useCallback, useLayoutEffect trong function component.
    - Đảm bảo các lifecycle nâng cao này giúp tối ưu hóa hiệu suất và render.
    - Hiển thị logs hoặc bảng so sánh để chứng minh hiệu quả của các lifecycle nâng cao trong ứng dụng.
*/
Giải thích phần Bonus:
1. Class Component:
   - shouldComponentUpdate: Giúp quyết định xem component có cần re-render hay không.
   - getDerivedStateFromProps: Cập nhật state dựa trên sự thay đổi của props.
   - getSnapshotBeforeUpdate: Giúp lấy thông tin snapshot của DOM trước khi thực hiện update.
   - componentDidCatch: Dùng để bắt lỗi và hiển thị UI fallback.

2. Function Component:
   - useMemo: Giúp lưu lại kết quả tính toán để tránh tính lại trong những lần render sau.
   - useCallback: Giúp lưu lại một hàm để tránh tái tạo lại hàm đó trong những lần render không cần thiết.
   - useLayoutEffect: Giống như useEffect, nhưng chạy trước khi layout được render.
   - useImperativeHandle: Giúp child component expose các API cho parent component.
   - useErrorBoundary: Mới trong React 18, giúp bắt lỗi trong function component.

Phần Bonus này khuyến khích người làm việc tìm hiểu và áp dụng các lifecycle nâng cao để tối ưu hóa hiệu suất, giảm thiểu render thừa và xử lý lỗi trong ứng dụng React.

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(LifecyclePlayground,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card } from "@ui";
import { Component, useEffect, useRef, useState } from "react";

/* ==================== CLASS COMPONENT  ==================== */
class LifecycleDemo extends Component {
  state = { count: 0, showChild: true };
  logsRef = { current: [] };
  parentRenderCount = 0;

  log = (msg) =>
    this.logsRef.current.push(\`\${new Date().toLocaleTimeString()}: \${msg}\`);

  componentDidMount() {
    this.log("Parent Class: componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count)
      this.log(\`Parent Class: count → \${this.state.count}\`);
    if (prevState.showChild !== this.state.showChild)
      this.log(\`Parent Class: showChild → \${this.state.showChild}\`);
  }

  componentWillUnmount() {
    this.log("Parent Class: cleanup (unmount)");
  }

  render() {
    this.parentRenderCount++;
    this.log(\`Parent Class: render (\${this.parentRenderCount})\`);

    const { count, showChild } = this.state;

    return (
      <Card className="lifecycle-card">
        <h2>Class Component</h2>
        <p>
          <strong>Parent Renders:</strong> {this.parentRenderCount}
        </p>

        <div className="controls">
          <Button
            onClick={() => this.setState({ count: count + 1 })}
            variant="primary"
          >
            Count ({count})
          </Button>
          <Button
            onClick={() => this.setState({ showChild: !showChild })}
            variant="secondary"
          >
            {showChild ? "Hide" : "Show"} Child
          </Button>
          <Button
            onClick={() => {
              this.logsRef.current = [];
              this.forceUpdate();
            }}
            variant="danger"
          >
            Clear Logs
          </Button>
        </div>

        {showChild && <ChildClass log={this.log} count={count} />}
        <LogsList logs={this.logsRef.current} title="Class Logs" />
      </Card>
    );
  }
}

class ChildClass extends Component {
  childRenderCount = 0;

  componentDidMount() {
    this.props.log("Child Class: Did Mount (~ useEffect[])");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.props.log(\`Child Class: count → \${this.props.count}\`);
    }
  }

  componentWillUnmount() {
    this.props.log("Child Class: cleanup (unmount)");
  }

  render() {
    this.childRenderCount++;
    this.props.log(\`Child Class: render (\${this.childRenderCount})\`);

    return (
      <div className="child-box">
        Child Class (count: {this.props.count}) – Render #
        {this.childRenderCount}
      </div>
    );
  }
}

/* ==================== FUNCTION COMPONENT ==================== */
function LifecycleFunction() {
  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);
  const logsRef = useRef([]);
  const parentRenderCount = useRef(0);

  const log = (msg) =>
    logsRef.current.push(\`\${new Date().toLocaleTimeString()}: \${msg}\`);

  const clearLogs = () => {
    logsRef.current = [];
    setCount((c) => c + 1);
  };

  useEffect(() => {
    log("Function: useEffect (mount)");
    return () => log("Function: useEffect cleanup (unmount)");
  }, []);

  useEffect(() => {
    if (count > 0) log(\`Function: count → \${count}\`);
  }, [count]);

  parentRenderCount.current += 1;
  log(\`Function: render (\${parentRenderCount.current})\`);

  return (
    <Card className="lifecycle-card">
      <h2>Function Component</h2>
      <p>
        <strong>Parent Renders:</strong> {parentRenderCount.current}
      </p>

      <div className="controls">
        <Button onClick={() => setCount((c) => c + 1)} variant="primary">
          Count ({count})
        </Button>
        <Button onClick={() => setShowChild((s) => !s)} variant="secondary">
          {showChild ? "Hide" : "Show"} Child
        </Button>
        <Button onClick={clearLogs} variant="danger">
          Clear Logs
        </Button>
      </div>

      {showChild && <ChildFunction log={log} count={count} />}
      <LogsList logs={logsRef.current} title="Function Logs" />
    </Card>
  );
}

function ChildFunction({ log, count }) {
  const childRenderCount = useRef(0);
  childRenderCount.current += 1;

  useEffect(() => {
    log("Child Function: useEffect (mount)");
    return () => log("Child Function: cleanup (unmount)");
  }, [log]);

  useEffect(() => {
    log(\`Child Function: count → \${count}\`);
  }, [count, log]);

  log(\`Child Function: render (\${childRenderCount.current})\`);

  return (
    <div className="child-box function">
      Child Function (count: {count}) – Render #{childRenderCount.current}
    </div>
  );
}

function LogsList({ logs, title }) {
  return (
    <div className="logs">
      <h3>
        {title} ({logs.length})
      </h3>
      {logs.length === 0 ? (
        <p>No logs yet...</p>
      ) : (
        <ul>
          {logs.map((l, i) => (
            <li key={i}>
              <code>{l}</code>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ==================== MAIN APP ==================== */
export default function LifecyclePlayground() {
  return (
    <div className="playground">
      <h1>Lifecycle Playground</h1>
      <div className="grid">
        <LifecycleDemo />
        <LifecycleFunction />
      </div>
    </div>
  );
}

`})]})}const DefaultFallback=({error:l,resetError:o})=>jsxRuntimeExports.jsxs("div",{className:"error-fallback",children:[jsxRuntimeExports.jsx("div",{className:"error-icon",children:"Warning"}),jsxRuntimeExports.jsx("h2",{children:"Oops! Có lỗi xảy ra"}),jsxRuntimeExports.jsx("p",{children:"Chúng tôi đã ghi nhận lỗi này. Bạn có thể thử lại."}),jsxRuntimeExports.jsx("pre",{className:"error-message",children:l.message}),jsxRuntimeExports.jsx("button",{onClick:o,className:"retry-btn",children:"Thử lại"})]});class ErrorBoundary extends reactExports.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,d){this.setState({errorInfo:d}),this.props.onError?.(o,d),this.logToService(o,d)}logToService=(o,d)=>{console.error("ErrorBoundary caught:",o,d)};resetError=()=>{this.props.onReset?.(),this.setState({hasError:!1,error:null,errorInfo:null})};componentDidUpdate(o){this.state.hasError&&o.resetKeys!==this.props.resetKeys&&this.resetError()}render(){const{hasError:o,error:d,errorInfo:u}=this.state,{fallback:p,fallbackRender:f,FallbackComponent:v=DefaultFallback,children:A}=this.props;if(o&&d){const y={error:d,errorInfo:u,resetError:this.resetError};return p&&reactExports.isValidElement(p)?p:f?f(y):v?jsxRuntimeExports.jsx(v,{...y}):jsxRuntimeExports.jsx(DefaultFallback,{error:d,resetError:this.resetError})}return A}}function ErrorFallback({error:l,resetError:o,errorInfo:d,showStack:u=!0}){return jsxRuntimeExports.jsx("div",{className:"fallback-container",children:jsxRuntimeExports.jsxs("div",{className:"fallback-card",children:[jsxRuntimeExports.jsxs("div",{className:"fallback-header",children:[jsxRuntimeExports.jsx("span",{className:"icon-bug",children:"⚠️"}),jsxRuntimeExports.jsx("h2",{children:"Ứng dụng gặp sự cố"})]}),jsxRuntimeExports.jsxs("div",{className:"fallback-body",children:[jsxRuntimeExports.jsx("p",{children:"Chúng tôi xin lỗi vì sự bất tiện này."}),jsxRuntimeExports.jsxs("div",{className:"error-box",children:[jsxRuntimeExports.jsxs("strong",{children:[l.name,":"]})," ",l.message]}),u&&d&&jsxRuntimeExports.jsxs("details",{className:"stack-trace",children:[jsxRuntimeExports.jsx("summary",{children:"Xem chi tiết lỗi"}),jsxRuntimeExports.jsx("pre",{children:d.componentStack})]})]}),jsxRuntimeExports.jsxs("div",{className:"fallback-actions",children:[jsxRuntimeExports.jsx("button",{onClick:o,className:"btn-primary",children:"Thử lại ngay"}),jsxRuntimeExports.jsx("button",{onClick:()=>window.location.reload(),className:"btn-secondary",children:"Tải lại trang"})]}),jsxRuntimeExports.jsxs("footer",{className:"fallback-footer",children:["Mã lỗi: ",l.name,"-",Date.now().toString(36)]})]})})}function BuggyChildren(){const[errorType,setErrorType]=reactExports.useState(null),[count,setCount]=reactExports.useState(0);if(errorType==="sync")throw new Error("Lỗi đồng bộ – render crash ngay lập tức!");if(errorType==="async")throw new Error("Lỗi bất đồng bộ – xảy ra sau khi nhấn nút!");if(errorType==="null")return null.crash();if(errorType==="undefined"&&(void 0).method(),errorType==="promise"&&Promise.reject(new Error("Lỗi Promise – KHÔNG bắt được bằng ErrorBoundary!")),errorType==="network")throw new Error("Mất kết nối mạng – 500 Internal Server Error");return errorType==="syntax"&&eval("(((((("),jsxRuntimeExports.jsxs("div",{style:{padding:"2rem",background:"#1e293b",borderRadius:"16px",color:"#e2e8f0"},children:[jsxRuntimeExports.jsx("h2",{children:"Giả lập lỗi để test ErrorBoundary"}),jsxRuntimeExports.jsx("p",{children:"Click các nút để ném lỗi – ErrorBoundary sẽ bắt và hiển thị fallback!"}),jsxRuntimeExports.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",marginTop:"1.5rem"},children:[jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("sync"),variant:"danger",children:"Lỗi đồng bộ (render crash)"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("async"),variant:"warning",children:"Lỗi bất đồng bộ (ngay khi nhấn)"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("null"),variant:"secondary",children:"TypeError: null.crash()"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("undefined"),variant:"secondary",children:"TypeError: undefined.method()"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("promise"),variant:"info",children:"Promise.reject() – KHÔNG bắt được"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("network"),variant:"danger",children:"Lỗi mạng (500)"}),jsxRuntimeExports.jsxs(Button,{onClick:()=>setCount(l=>l+1),variant:"primary",children:["Tăng count: ",count," (bình thường)"]})]}),jsxRuntimeExports.jsxs("div",{style:{marginTop:"2rem",padding:"1rem",background:"#334155",borderRadius:"8px",fontSize:"0.9rem"},children:[jsxRuntimeExports.jsx("strong",{children:"Hướng dẫn test:"}),jsxRuntimeExports.jsxs("ul",{style:{margin:"0.5rem 0"},children:[jsxRuntimeExports.jsx("li",{children:"Click nút → ErrorBoundary bắt lỗi → hiển thị fallback"}),jsxRuntimeExports.jsx("li",{children:'Click "Thử lại" → reset lỗi → component render lại'}),jsxRuntimeExports.jsx("li",{children:"Lỗi Promise → KHÔNG bắt được → app crash (đúng chuẩn)"}),jsxRuntimeExports.jsx("li",{children:"Dev mode: hiện stack trace | Production: ẩn chi tiết"})]})]})]})}function Exercise6(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:6,title:"HOMEWORK: Error Boundary Library"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
Tạo reusable Error Boundary library:
// ErrorBoundary.jsx
class ErrorBoundary extends Component {
  // TODO:
  // - Multiple fallback options
  // - Error logging integration
  // - Retry mechanism
  // - Reset on route change
  // - Development vs Production mode
}

// FallbackComponent.jsx
function ErrorFallback({ error, resetError, errorInfo }) {
  // TODO: Customizable error UI
}

// Usage
<ErrorBoundary
  fallback={<ErrorFallback />}
  onError={(error, errorInfo) => logToService(error, errorInfo)}
  onReset={() => console.log('Reset')}
>
  <BuggyChildren />
</ErrorBoundary>

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(ErrorBoundary,{FallbackComponent:ErrorFallback,onError:(l,o)=>{console.error("Lỗi:",l),console.error("Info:",o)},onReset:()=>console.log("Đã reset lỗi"),resetKeys:[location.pathname],showDetails:!0,children:jsxRuntimeExports.jsx(BuggyChildren,{})})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
// src/components/ErrorBoundary.jsx
import { Component, isValidElement } from "react";

export const DefaultFallback = ({ error, resetError }) => (
  <div className="error-fallback">
    <div className="error-icon">Warning</div>
    <h2>Oops! Có lỗi xảy ra</h2>
    <p>Chúng tôi đã ghi nhận lỗi này. Bạn có thể thử lại.</p>
    <pre className="error-message">{error.message}</pre>
    <button onClick={resetError} className="retry-btn">
      Thử lại
    </button>
  </div>
);

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });

    // Gọi callback onError
    this.props.onError?.(error, errorInfo);
    // Gửi log
    this.logToService(error, errorInfo);
  }

  logToService = (error, errorInfo) => {
    console.error("ErrorBoundary caught:", error, errorInfo);
    // Hoặc gửi log lên server
    // fetch("/api/errors", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     message: error.message,
    //     stack: error.stack,
    //     componentStack: errorInfo.componentStack,
    //     url: window.location.href,
    //     timestamp: new Date().toISOString(),
    //   }),
    // }).catch(() => {});
  };

  resetError = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  componentDidUpdate(prevProps) {
    if (this.state.hasError && prevProps.resetKeys !== this.props.resetKeys) {
      this.resetError();
    }
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const {
      fallback,
      fallbackRender,
      FallbackComponent = DefaultFallback,
      children,
    } = this.props;

    if (hasError && error) {
      const fallbackProps = { error, errorInfo, resetError: this.resetError };

      if (fallback && isValidElement(fallback)) return fallback;
      if (fallbackRender) return fallbackRender(fallbackProps);
      if (FallbackComponent) return <FallbackComponent {...fallbackProps} />;

      return <DefaultFallback error={error} resetError={this.resetError} />;
    }

    return children;
  }
}

// ErrorFallback.jsx

export function ErrorFallback({
  error,
  resetError,
  errorInfo,
  showStack = true,
}) {
  return (
    <div className="fallback-container">
      <div className="fallback-card">
        <div className="fallback-header">
          <span className="icon-bug">⚠️</span>
          <h2>Ứng dụng gặp sự cố</h2>
        </div>

        <div className="fallback-body">
          <p>Chúng tôi xin lỗi vì sự bất tiện này.</p>
          <div className="error-box">
            <strong>{error.name}:</strong> {error.message}
          </div>

          {showStack && errorInfo && (
            <details className="stack-trace">
              <summary>Xem chi tiết lỗi</summary>
              <pre>{errorInfo.componentStack}</pre>
            </details>
          )}
        </div>

        <div className="fallback-actions">
          <button onClick={resetError} className="btn-primary">
            Thử lại ngay
          </button>
          <button
            onClick={() => window.location.reload()}
            className="btn-secondary"
          >
            Tải lại trang
          </button>
        </div>

        <footer className="fallback-footer">
          Mã lỗi: {error.name}-{Date.now().toString(36)}
        </footer>
      </div>
    </div>
  );
}

// BuggyChildren.jsx
import { Button } from "@ui";
import { useState } from "react";

export function BuggyChildren() {
  const [errorType, setErrorType] = useState(null);
  const [count, setCount] = useState(0);

  // GIẢ LẬP CÁC LOẠI LỖI
  if (errorType === "sync") {
    throw new Error("Lỗi đồng bộ – render crash ngay lập tức!");
  }

  if (errorType === "async") {
    throw new Error("Lỗi bất đồng bộ – xảy ra sau khi nhấn nút!");
  }

  if (errorType === "null") {
    return null.crash(); // TypeError: Cannot read properties of null
  }

  if (errorType === "undefined") {
    undefined.method(); // TypeError: Cannot read properties of undefined
  }

  if (errorType === "promise") {
    // Giả lập lỗi trong Promise (không bắt được bằng ErrorBoundary)
    // → Dùng để test sự khác biệt
    Promise.reject(
      new Error("Lỗi Promise – KHÔNG bắt được bằng ErrorBoundary!")
    );
  }

  if (errorType === "network") {
    throw new Error("Mất kết nối mạng – 500 Internal Server Error");
  }

  if (errorType === "syntax") {
    // Giả lập lỗi syntax (thực tế không chạy được)
    // Dùng để minh họa dev mode
    eval("(((((("); // SyntaxError
  }

  return (
    <div
      style={{
        padding: "2rem",
        background: "#1e293b",
        borderRadius: "16px",
        color: "#e2e8f0",
      }}
    >
      <h2>Giả lập lỗi để test ErrorBoundary</h2>
      <p>
        Click các nút để ném lỗi – ErrorBoundary sẽ bắt và hiển thị fallback!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <Button onClick={() => setErrorType("sync")} variant="danger">
          Lỗi đồng bộ (render crash)
        </Button>

        <Button onClick={() => setErrorType("async")} variant="warning">
          Lỗi bất đồng bộ (ngay khi nhấn)
        </Button>

        <Button onClick={() => setErrorType("null")} variant="secondary">
          TypeError: null.crash()
        </Button>

        <Button onClick={() => setErrorType("undefined")} variant="secondary">
          TypeError: undefined.method()
        </Button>

        <Button onClick={() => setErrorType("promise")} variant="info">
          Promise.reject() – KHÔNG bắt được
        </Button>

        <Button onClick={() => setErrorType("network")} variant="danger">
          Lỗi mạng (500)
        </Button>

        <Button onClick={() => setCount((c) => c + 1)} variant="primary">
          Tăng count: {count} (bình thường)
        </Button>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          background: "#334155",
          borderRadius: "8px",
          fontSize: "0.9rem",
        }}
      >
        <strong>Hướng dẫn test:</strong>
        <ul style={{ margin: "0.5rem 0" }}>
          <li>Click nút → ErrorBoundary bắt lỗi → hiển thị fallback</li>
          <li>Click "Thử lại" → reset lỗi → component render lại</li>
          <li>Lỗi Promise → KHÔNG bắt được → app crash (đúng chuẩn)</li>
          <li>Dev mode: hiện stack trace | Production: ẩn chi tiết</li>
        </ul>
      </div>
    </div>
  );
}

`})]})}const exercises$1={1:Exercise1$1,2:Exercise2$1,3:Exercise3$1,4:Exercise4$1,5:Exercise5$1,6:Exercise6},Day5=()=>jsxRuntimeExports.jsxs("div",{className:"day-content",children:[jsxRuntimeExports.jsxs("div",{className:"day-header",children:[jsxRuntimeExports.jsxs("div",{className:"day-header-content",children:[jsxRuntimeExports.jsx(CodeXml,{size:32,color:"#00D9FF"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h1",{className:"day-title",children:"Ngày 5"}),jsxRuntimeExports.jsx("p",{className:"day-subtitle",children:"Class Components (Legacy)"})]})]}),jsxRuntimeExports.jsxs("section",{className:"lesson-goal",children:[jsxRuntimeExports.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{children:"Hiểu Class Components syntax (để đọc code cũ)"}),jsxRuntimeExports.jsx("li",{children:"Master Lifecycle Methods"}),jsxRuntimeExports.jsx("li",{children:"So sánh Class vs Function Components"}),jsxRuntimeExports.jsx("li",{children:"Biết cách refactor Class → Function"}),jsxRuntimeExports.jsx("li",{children:"Migration strategies"})]})]})]}),jsxRuntimeExports.jsx("div",{className:"exercises-list",children:Object.keys(exercises$1).map(l=>{const o=exercises$1[l];return o?jsxRuntimeExports.jsx(o,{},l):null})})]}),initialValue={state:{count:0,history:[]},redoStack:[]};function AdvancedCounter(){const[l,o]=reactExports.useState(()=>initialValue.state),[d,u]=reactExports.useState(initialValue.redoStack),[p,f]=reactExports.useState(1),v=()=>{o(h=>({...h,count:h.count+p,history:[h.count+p,...h.history]}))},A=()=>{l.count<1||o(h=>({...h,count:h.count-p,history:[h.count-p,...h.history]}))},y=()=>{if(l.history<2)return;const[h,...R]=q;o(N=>({...N,count:R[0],history:R})),u([h,...d])},x=()=>{if(d.length===0)return;const[h,...R]=d;o(N=>({...N,count:h,history:[h,...N.history]})),u(R)},j=()=>{o(initialValue.state),u(initialValue.redoStack)},S=h=>f(+h.target.value),{count:w,history:q}=l;return jsxRuntimeExports.jsxs("div",{className:"advanced-counter",children:[jsxRuntimeExports.jsx("div",{className:"counter-value",children:w}),jsxRuntimeExports.jsxs("div",{className:"controls",children:[jsxRuntimeExports.jsx("button",{disabled:w<1,onClick:A,children:"-"}),jsxRuntimeExports.jsx("button",{onClick:v,children:"+"})]}),jsxRuntimeExports.jsxs("div",{className:"controls",children:[jsxRuntimeExports.jsx("button",{disabled:q<2,onClick:y,children:"Undo"}),jsxRuntimeExports.jsx("button",{disabled:d.length===0,onClick:x,children:"Redo"}),jsxRuntimeExports.jsx("button",{disabled:q.length===0,onClick:j,children:"Reset"})]}),jsxRuntimeExports.jsxs("div",{className:"step-control",children:[jsxRuntimeExports.jsx("label",{children:"Step: "}),jsxRuntimeExports.jsx("input",{min:1,type:"number",value:p,onChange:S})]}),q.length>0&&jsxRuntimeExports.jsxs("div",{className:"history",children:[jsxRuntimeExports.jsx("h3",{children:"History"}),jsxRuntimeExports.jsx("ul",{className:"history-list",children:q.map((h,R)=>jsxRuntimeExports.jsx("li",{className:`${R===0?"current":""}`,children:h},R+1))})]})]})}function Exercise1(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:1,title:"Counter Nâng Cao"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
function AdvancedCounter() {
  // TODO:
  // 1. Count state
  // 2. Step size state (có thể thay đổi được)
  // 3. History state (lưu các giá trị trước đó)
  // 4. Min/max limits
  // 5. Các nút: +, -, Reset, Undo, Redo
  // 6. Hiển thị history

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(AdvancedCounter,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { useState } from "react";
const initialValue = {
  state: {
    count: 0,
    history: [],
  },
  redoStack: [],
};
export default function AdvancedCounter() {
  // TODO:
  // 1. Count state
  // 2. Step size state (có thể thay đổi được)
  // 3. History state (lưu các giá trị trước đó)
  // 4. Min/max limits
  // 5. Các nút: +, -, Reset, Undo, Redo
  // 6. Hiển thị history
  const [state, setState] = useState(() => initialValue.state);
  const [redoStack, setRedoStack] = useState(initialValue.redoStack);
  const [step, setStep] = useState(1);
  const increment = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + step,
      history: [prev.count + step, ...prev.history],
    }));
  };
  const decrease = () => {
    if (state.count < 1) return;
    setState((prev) => ({
      ...prev,
      count: prev.count - step,
      history: [prev.count - step, ...prev.history],
    }));
  };

  const undo = () => {
    if (state.history < 2) return;

    const [newest, ...rest] = history;

    setState((prev) => ({
      ...prev,
      count: rest[0],
      history: rest,
    }));

    setRedoStack([newest, ...redoStack]);
  };
  const redo = () => {
    if (redoStack.length === 0) return;
    const [next, ...rest] = redoStack;
    setState((prev) => ({
      ...prev,
      count: next,
      history: [next, ...prev.history],
    }));
    setRedoStack(rest);
  };
  const reset = () => {
    setState(initialValue.state);
    setRedoStack(initialValue.redoStack);
  };
  const handleStepChange = (e) => setStep(+e.target.value);
  const { count, history } = state;

  return (
    <div className="advanced-counter">
      <div className="counter-value">{count}</div>
      <div className="controls">
        <button disabled={count < 1} onClick={decrease}>
          -
        </button>
        <button onClick={increment}>+</button>
      </div>
      <div className="controls">
        <button disabled={history < 2} onClick={undo}>
          Undo
        </button>
        <button disabled={redoStack.length === 0} onClick={redo}>
          Redo
        </button>
        <button disabled={history.length === 0} onClick={reset}>
          Reset
        </button>
      </div>
      <div className="step-control">
        <label>Step: </label>
        <input min={1} type="number" value={step} onChange={handleStepChange} />
      </div>
      {history.length > 0 && (
        <div className="history">
          <h3>History</h3>
          <ul className="history-list">
            {history.map((c, idx) => (
              <li key={idx + 1} className={\`\${idx === 0 ? "current" : ""}\`}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

`})]})}const priorityOrder={high:3,medium:2,low:1},priorityOptions=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],filterOptions=[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"completed",label:"Completed"}],sortOptions=[{value:"date",label:"Date"},{value:"priority",label:"Priority"},{value:"alphabetical",label:"Alphabetical"}];function TodoApp(){const[l,o]=reactExports.useState(()=>{const P=localStorage.getItem("todos");return P?JSON.parse(P):[]}),[d,u]=reactExports.useState(null),[p,f]=reactExports.useState(""),[v,A]=reactExports.useState("all"),[y,x]=reactExports.useState("date");reactExports.useEffect(()=>{localStorage.setItem("todos",JSON.stringify(l))},[l]);const j=P=>f(P.target.value),S=P=>{const W=l.find(ee=>ee.id===P);W&&(u(P),f(W.text))},w=()=>{u(null),f("")},q=()=>{p.trim()&&(o(P=>P.map(W=>W.id===d?{...W,text:p.trim()}:W)),u(null),f(""))},h=()=>{if(!p.trim())return;const P=new Date,W={id:P.getTime(),text:p.trim(),completed:!1,priority:"low",createdAt:P.toISOString()};o(ee=>[W,...ee]),f("")},R=P=>{o(W=>W.filter(ee=>ee.id!==P))},N=P=>{o(W=>W.map(ee=>ee.id===P?{...ee,completed:!ee.completed}:ee))},T=(P,W)=>{o(ee=>ee.map(se=>se.id===W?{...se,priority:P}:se))},z=()=>{const P=l.every(W=>W.completed);o(W=>W.map(ee=>({...ee,completed:!P})))},L=()=>{o(P=>P.filter(W=>!W.completed))},V=l.filter(P=>v==="active"?!P.completed:v==="completed"?P.completed:!0).sort((P,W)=>y==="date"?new Date(W.createdAt)-new Date(P.createdAt):y==="priority"?priorityOrder[W.priority]-priorityOrder[P.priority]:y==="alphabetical"?P.text.localeCompare(W.text):0),ne=V.length,de=V.filter(P=>P.completed).length,K=ne-de;return jsxRuntimeExports.jsx("div",{className:"todo-app-wrapper",children:jsxRuntimeExports.jsx("div",{className:"todo-app-container",children:jsxRuntimeExports.jsxs(Card,{className:"todo-app-card",children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"Todo App"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Manage your tasks with style"})]}),jsxRuntimeExports.jsxs(Card.Content,{children:[jsxRuntimeExports.jsxs("div",{className:"todo-app-input-area",children:[jsxRuntimeExports.jsx(Input$1,{placeholder:"What needs to be done?",value:p,onChange:j,onKeyDown:P=>{P.key==="Enter"&&(d?q():h()),P.key==="Escape"&&w()},autoFocus:!0}),jsxRuntimeExports.jsx("div",{className:"todo-app-input-actions",children:d?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Button,{variant:"secondary",size:"sm",onClick:w,children:"Cancel"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"sm",onClick:q,children:"Update Task"})]}):jsxRuntimeExports.jsx(Button,{variant:"primary",size:"md",onClick:h,disabled:!p.trim(),icon:"+ ",children:"Add Task"})})]}),jsxRuntimeExports.jsxs("div",{className:"todo-app-filters",children:[jsxRuntimeExports.jsx(Select$1,{label:"Filter",value:v,onChange:P=>A(P.target.value),options:filterOptions,className:"todo-app-filter-select"}),jsxRuntimeExports.jsx(Select$1,{label:"Sort by",value:y,onChange:P=>x(P.target.value),options:sortOptions,className:"todo-app-filter-select"})]}),jsxRuntimeExports.jsx("div",{className:"todo-app-list",children:V.length>0?jsxRuntimeExports.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:V.map(({id:P,text:W,completed:ee,priority:se})=>jsxRuntimeExports.jsx(Card,{className:`todo-app-item todo-app-item--${se}`,children:jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsxs("div",{className:"todo-app-item-content",children:[jsxRuntimeExports.jsx(Checkbox$1,{checked:ee,onChange:()=>N(P)}),jsxRuntimeExports.jsx("span",{className:`todo-app-item-text ${ee?"todo-app-item-text--completed":""}`,children:W}),jsxRuntimeExports.jsx(Select$1,{value:se,onChange:ie=>T(ie.target.value,P),options:priorityOptions,disabled:ee,style:{width:"120px"}}),jsxRuntimeExports.jsxs("div",{className:"todo-app-item-actions",children:[jsxRuntimeExports.jsx(Tooltip,{content:"Edit task",children:jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"sm",icon:"🖉",onClick:()=>S(P),disabled:ee||d===P})}),jsxRuntimeExports.jsx(Tooltip,{content:"Delete task",children:jsxRuntimeExports.jsx(Button,{variant:"danger",size:"sm",icon:"❌",onClick:()=>R(P)})})]})]})})},P))}):jsxRuntimeExports.jsx("p",{className:"todo-app-list-empty",children:"No tasks to do"})}),jsxRuntimeExports.jsxs("div",{className:"todo-app-actions",children:[jsxRuntimeExports.jsx(Button,{variant:"secondary",size:"sm",onClick:z,children:"Toggle All"}),jsxRuntimeExports.jsx(Button,{variant:"danger",size:"sm",onClick:L,children:"Clear Completed"})]}),jsxRuntimeExports.jsx(Card,{className:"todo-app-stats",children:jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsxs("div",{className:"todo-app-stats-grid",children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("div",{className:"todo-app-stat-number",style:{color:"#00D9FF"},children:ne}),jsxRuntimeExports.jsx("p",{className:"todo-app-stat-label",children:"Total"})]}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("div",{className:"todo-app-stat-number",style:{color:"#22c55e"},children:K}),jsxRuntimeExports.jsx("p",{className:"todo-app-stat-label",children:"Active"})]}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("div",{className:"todo-app-stat-number",style:{color:"#f59e0b"},children:de}),jsxRuntimeExports.jsx("p",{className:"todo-app-stat-label",children:"Completed"})]})]})})})]})]})})})}function Exercise2(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:2,title:"Todo App Hoàn Chỉnh"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
function TodoApp() {
  // TODO:
  // 1. Todos array state với: id, text, completed, priority, createdAt
  // 2. Input state
  // 3. Filter state (all/active/completed)
  // 4. Sort state (date/priority/alphabetical)
  // 5. Chức năng:
  //    - Thêm todo
  //    - Xóa todo
  //    - Toggle completed
  //    - Edit todo (inline editing)
  //    - Set priority (low/medium/high)
  //    - Filter và sort
  //    - Clear completed
  //    - Toggle all
  // 6. Save vào localStorage
  // 7. Stats: total, active, completed

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(TodoApp,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card, Checkbox, Input, Select, Tooltip } from "@ui";
import { useEffect, useState } from "react";

const priorityOrder = { high: 3, medium: 2, low: 1 };

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

const filterOptions = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

const sortOptions = [
  { value: "date", label: "Date" },
  { value: "priority", label: "Priority" },
  { value: "alphabetical", label: "Alphabetical" },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [editingId, setEditingId] = useState(null);
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChangeTodo = (e) => setTodo(e.target.value);

  const handleSelectEdit = (id) => {
    const item = todos.find((t) => t.id === id);
    if (item) {
      setEditingId(id);
      setTodo(item.text);
    }
  };

  const handCancel = () => {
    setEditingId(null);
    setTodo("");
  };

  const handleUpdate = () => {
    if (!todo.trim()) return;
    setTodos((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, text: todo.trim() } : item
      )
    );
    setEditingId(null);
    setTodo("");
  };

  const handleAdd = () => {
    if (!todo.trim()) return;
    const now = new Date();
    const newTodo = {
      id: now.getTime(),
      text: todo.trim(),
      completed: false,
      priority: "low",
      createdAt: now.toISOString(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    setTodo("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleChangePriority = (value, id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, priority: value } : t))
    );
  };

  const toggleAll = () => {
    const allCompleted = todos.every((t) => t.completed);
    setTodos((prev) => prev.map((t) => ({ ...t, completed: !allCompleted })));
  };

  const removeCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const todosFiltered = todos
    .filter((t) => {
      if (filter === "active") return !t.completed;
      if (filter === "completed") return t.completed;
      return true;
    })
    .sort((a, b) => {
      if (sort === "date") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sort === "priority")
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      if (sort === "alphabetical") return a.text.localeCompare(b.text);
      return 0;
    });

  const total = todosFiltered.length;
  const completed = todosFiltered.filter((t) => t.completed).length;
  const active = total - completed;

  return (
    <div className="todo-app-wrapper">
      <div className="todo-app-container">
        <Card className="todo-app-card">
          <Card.Header>
            <Card.Title>Todo App</Card.Title>
            <Card.Subtitle>Manage your tasks with style</Card.Subtitle>
          </Card.Header>

          <Card.Content>
            {/* Input Area */}
            <div className="todo-app-input-area">
              <Input
                placeholder="What needs to be done?"
                value={todo}
                onChange={handleChangeTodo}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    editingId ? handleUpdate() : handleAdd();
                  if (e.key === "Escape") handCancel();
                }}
                autoFocus
              />

              <div className="todo-app-input-actions">
                {editingId ? (
                  <>
                    <Button variant="secondary" size="sm" onClick={handCancel}>
                      Cancel
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleUpdate}>
                      Update Task
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleAdd}
                    disabled={!todo.trim()}
                    icon="+ "
                  >
                    Add Task
                  </Button>
                )}
              </div>
            </div>

            {/* Filters & Sort */}
            <div className="todo-app-filters">
              <Select
                label="Filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                options={filterOptions}
                className="todo-app-filter-select"
              />
              <Select
                label="Sort by"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                options={sortOptions}
                className="todo-app-filter-select"
              />
            </div>

            {/* Todo List */}
            <div className="todo-app-list">
              {todosFiltered.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {todosFiltered.map(({ id, text, completed, priority }) => (
                    <Card
                      key={id}
                      className={\`todo-app-item todo-app-item--\${priority}\`}
                    >
                      <Card.Content>
                        <div className="todo-app-item-content">
                          <Checkbox
                            checked={completed}
                            onChange={() => handleComplete(id)}
                          />

                          <span
                            className={\`todo-app-item-text \${
                              completed ? "todo-app-item-text--completed" : ""
                            }\`}
                          >
                            {text}
                          </span>

                          <Select
                            value={priority}
                            onChange={(e) =>
                              handleChangePriority(e.target.value, id)
                            }
                            options={priorityOptions}
                            disabled={completed}
                            style={{ width: "120px" }}
                          />

                          <div className="todo-app-item-actions">
                            <Tooltip content="Edit task">
                              <Button
                                variant="ghost"
                                size="sm"
                                icon="🖉"
                                onClick={() => handleSelectEdit(id)}
                                disabled={completed || editingId === id}
                              />
                            </Tooltip>

                            <Tooltip content="Delete task">
                              <Button
                                variant="danger"
                                size="sm"
                                icon="❌"
                                onClick={() => handleDelete(id)}
                              />
                            </Tooltip>
                          </div>
                        </div>
                      </Card.Content>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="todo-app-list-empty">No tasks to do</p>
              )}
            </div>

            {/* Actions */}
            <div className="todo-app-actions">
              <Button variant="secondary" size="sm" onClick={toggleAll}>
                Toggle All
              </Button>
              <Button variant="danger" size="sm" onClick={removeCompleted}>
                Clear Completed
              </Button>
            </div>

            {/* Stats */}
            <Card className="todo-app-stats">
              <Card.Content>
                <div className="todo-app-stats-grid">
                  <div>
                    <div
                      className="todo-app-stat-number"
                      style={{ color: "#00D9FF" }}
                    >
                      {total}
                    </div>
                    <p className="todo-app-stat-label">Total</p>
                  </div>
                  <div>
                    <div
                      className="todo-app-stat-number"
                      style={{ color: "#22c55e" }}
                    >
                      {active}
                    </div>
                    <p className="todo-app-stat-label">Active</p>
                  </div>
                  <div>
                    <div
                      className="todo-app-stat-number"
                      style={{ color: "#f59e0b" }}
                    >
                      {completed}
                    </div>
                    <p className="todo-app-stat-label">Completed</p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}


`})]})}const validateField=(l,o)=>o.trim()?l==="fullname"&&o.trim().length<6?"Tên quá ngắn":l==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?"Email không hợp lệ":l==="phone"&&o.trim().length<10?"Số điện thoại không hợp lệ":l==="card_number"&&o.trim().length<12?"Số thẻ không hợp lệ":l==="cvv"&&o.trim().length<3?"CVV không hợp lệ":null:"Trường này là bắt buộc",initialFormData={fullname:"",street:"",card_number:"",expiry_date:"",cvv:"",email:"",phone:"",city:"",postal_code:""};function MultiStepForm(){const[l,o]=reactExports.useState(1),[d,u]=reactExports.useState(initialFormData),[p,f]=reactExports.useState({}),[v,A]=reactExports.useState(!1),y=R=>{const N={1:["fullname","email","phone"],2:["street","city","postal_code"],3:["card_number","expiry_date","cvv"]}[R],T={};let z=!0;return N.forEach(L=>{const V=validateField(L,d[L]);T[L]=V,V&&(z=!1)}),f(L=>({...L,...T})),z},x=()=>{y(l)&&o(R=>Math.min(R+1,3))},j=()=>{o(R=>Math.max(R-1,1))},S=R=>{const{name:N,value:T}=R.target;u(z=>({...z,[N]:T})),p[N]&&f(z=>({...z,[N]:null}))},w=R=>{const{name:N,value:T}=R.target,z=validateField(N,T);f(L=>({...L,[N]:z}))},q=()=>{y(3)&&A(!0)},h=l/3*100;return jsxRuntimeExports.jsxs("div",{className:"multistep-form",children:[jsxRuntimeExports.jsx("div",{className:"multistep-form__container",children:jsxRuntimeExports.jsxs(Card,{className:"multistep-form__card",children:[jsxRuntimeExports.jsxs("div",{className:"multistep-form__header",children:[jsxRuntimeExports.jsx("h1",{className:"multistep-form__title",children:"Multi-Step Form"}),jsxRuntimeExports.jsx("p",{className:"multistep-form__subtitle",children:"Điền thông tin từng bước một cách dễ dàng"})]}),jsxRuntimeExports.jsx("div",{className:"multistep-form__progress",children:jsxRuntimeExports.jsx("div",{className:"multistep-form__progress-fill",style:{width:`${h}%`}})}),jsxRuntimeExports.jsxs(Card.Content,{className:"multistep-form__content",children:[jsxRuntimeExports.jsxs("div",{className:`multistep-form__step ${l===1?"multistep-form__step--active":""}`,children:[jsxRuntimeExports.jsx("h2",{className:"multistep-form__step-title",children:"Personal Information"}),jsxRuntimeExports.jsxs("div",{className:"multistep-form__grid",children:[jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsx(Input$1,{label:"Full Name",name:"fullname",value:d.fullname,onChange:S,onBlur:w,placeholder:"John Doe",error:p.fullname})}),jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsx(Input$1,{label:"Email",name:"email",type:"email",value:d.email,onChange:S,onBlur:w,placeholder:"example@email.com",error:p.email})}),jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsx(Input$1,{label:"Phone",name:"phone",type:"tel",value:d.phone,onChange:S,onBlur:w,placeholder:"+84 123 456 789",error:p.phone})})]})]}),jsxRuntimeExports.jsxs("div",{className:`multistep-form__step ${l===2?"multistep-form__step--active":""}`,children:[jsxRuntimeExports.jsx("h2",{className:"multistep-form__step-title",children:"Address Information"}),jsxRuntimeExports.jsxs("div",{className:"multistep-form__grid",children:[jsxRuntimeExports.jsx(Input$1,{label:"Street",name:"street",value:d.street,onChange:S,onBlur:w,placeholder:"123 Main St",error:p.street}),jsxRuntimeExports.jsx(Input$1,{label:"City",name:"city",value:d.city,onChange:S,onBlur:w,placeholder:"Hà Nội",error:p.city}),jsxRuntimeExports.jsx(Input$1,{label:"Postal Code",name:"postal_code",value:d.postal_code,onChange:S,onBlur:w,placeholder:"100000",error:p.postal_code})]})]}),jsxRuntimeExports.jsxs("div",{className:`multistep-form__step ${l===3?"multistep-form__step--active":""}`,children:[jsxRuntimeExports.jsx("h2",{className:"multistep-form__step-title",children:"Payment Details"}),jsxRuntimeExports.jsxs("div",{className:"multistep-form__grid",children:[jsxRuntimeExports.jsx(Input$1,{label:"Card Number",name:"card_number",value:d.card_number,onChange:S,onBlur:w,placeholder:"1234 5678 9012 3456",error:p.card_number}),jsxRuntimeExports.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[jsxRuntimeExports.jsx(Input$1,{label:"Expiry Date",name:"expiry_date",value:d.expiry_date,onChange:S,onBlur:w,placeholder:"MM/YY",error:p.expiry_date}),jsxRuntimeExports.jsx(Input$1,{label:"CVV",name:"cvv",type:"password",value:d.cvv,onChange:S,onBlur:w,placeholder:"123",error:p.cvv})]})]}),jsxRuntimeExports.jsxs("div",{className:"multistep-form__review",style:{marginTop:"2rem"},children:[jsxRuntimeExports.jsx("h3",{style:{color:"#00D9FF",marginBottom:"1rem"},children:"Review Your Information"}),Object.entries(d).map(([R,N])=>jsxRuntimeExports.jsxs("div",{className:"multistep-form__review-item",children:[jsxRuntimeExports.jsx("span",{className:"multistep-form__review-label",children:R.replace(/_/g," ").replace(/\b\w/g,T=>T.toUpperCase())}),jsxRuntimeExports.jsx("span",{className:"multistep-form__review-value",children:N||"-"})]},R))]})]}),jsxRuntimeExports.jsxs("div",{className:"multistep-form__actions",children:[jsxRuntimeExports.jsx(Button,{variant:"secondary",size:"md",onClick:j,disabled:l===1,children:"Previous"}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[l<3&&jsxRuntimeExports.jsx(Button,{variant:"primary",size:"md",onClick:x,children:"Next"}),l===3&&jsxRuntimeExports.jsx(Button,{variant:"primary",size:"lg",onClick:q,icon:"Check",children:"Submit Payment"})]})]})]})]})}),jsxRuntimeExports.jsxs(Modal,{isOpen:v,onClose:()=>A(!1),children:[jsxRuntimeExports.jsx(Modal.Header,{onClose:()=>A(!1),children:"Payment Successful!"}),jsxRuntimeExports.jsxs(Modal.Body,{children:[jsxRuntimeExports.jsx("p",{children:"Cảm ơn bạn đã hoàn thành form!"}),jsxRuntimeExports.jsx("div",{className:"multistep-form__review",style:{marginTop:"1rem"},children:Object.entries(d).map(([R,N])=>jsxRuntimeExports.jsxs("div",{className:"multistep-form__review-item",children:[jsxRuntimeExports.jsx("span",{className:"multistep-form__review-label",children:R.replace(/_/g," ").replace(/\b\w/g,T=>T.toUpperCase())}),jsxRuntimeExports.jsx("span",{className:"multistep-form__review-value",children:N})]},R))})]}),jsxRuntimeExports.jsx(Modal.Footer,{children:jsxRuntimeExports.jsx(Button,{variant:"primary",onClick:()=>{A(!1),u(initialFormData),f({}),o(1)},children:"Done"})})]})]})}function Exercise3(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:3,title:"Multi-Step Form"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
function MultiStepForm() {
  // TODO:
  // 1. Current step state (1, 2, 3)
  // 2. Form data state cho mỗi step:
  //    Step 1: Personal info (name, email, phone)
  //    Step 2: Address (street, city, postal code)
  //    Step 3: Payment (card number, expiry, cvv)
  // 3. Errors state cho mỗi step
  // 4. Validation cho mỗi step
  // 5. Nút: Next, Previous, Submit
  // 6. Progress bar
  // 7. Review tất cả data ở step cuối
  // 8. Không cho next nếu step hiện tại invalid

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(MultiStepForm,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card, Input, Modal } from "@ui";
import { useState } from "react";

const validateField = (fieldName, value) => {
  if (!value.trim()) return "Trường này là bắt buộc";
  if (fieldName === "fullname" && value.trim().length < 6)
    return "Tên quá ngắn";
  if (fieldName === "email" && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value))
    return "Email không hợp lệ";
  if (fieldName === "phone" && value.trim().length < 10)
    return "Số điện thoại không hợp lệ";
  if (fieldName === "card_number" && value.trim().length < 12)
    return "Số thẻ không hợp lệ";
  if (fieldName === "cvv" && value.trim().length < 3) return "CVV không hợp lệ";
  return null;
};

const initialFormData = {
  fullname: "",
  street: "",
  card_number: "",
  expiry_date: "",
  cvv: "",
  email: "",
  phone: "",
  city: "",
  postal_code: "",
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateStep = (step) => {
    const fields = {
      1: ["fullname", "email", "phone"],
      2: ["street", "city", "postal_code"],
      3: ["card_number", "expiry_date", "cvv"],
    }[step];

    const stepErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      const error = validateField(field, formData[field]);
      stepErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors((prev) => ({ ...prev, ...stepErrors }));
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((s) => Math.min(s + 1, 3));
    }
  };

  const handlePrev = () => {
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      setShowModal(true);
    }
  };

  const progress = (currentStep / 3) * 100;

  return (
    <div className="multistep-form">
      <div className="multistep-form__container">
        <Card className="multistep-form__card">
          <div className="multistep-form__header">
            <h1 className="multistep-form__title">Multi-Step Form</h1>
            <p className="multistep-form__subtitle">
              Điền thông tin từng bước một cách dễ dàng
            </p>
          </div>

          <div className="multistep-form__progress">
            <div
              className="multistep-form__progress-fill"
              style={{ width: \`\${progress}%\` }}
            />
          </div>

          <Card.Content className="multistep-form__content">
            {/* Step 1 */}
            <div
              className={\`multistep-form__step \${
                currentStep === 1 ? "multistep-form__step--active" : ""
              }\`}
            >
              <h2 className="multistep-form__step-title">
                Personal Information
              </h2>
              <div className="multistep-form__grid">
                <div>
                  <Input
                    label="Full Name"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    error={errors.fullname}
                  />
                </div>
                <div>
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="example@email.com"
                    error={errors.email}
                  />
                </div>
                <div>
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+84 123 456 789"
                    error={errors.phone}
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={\`multistep-form__step \${
                currentStep === 2 ? "multistep-form__step--active" : ""
              }\`}
            >
              <h2 className="multistep-form__step-title">
                Address Information
              </h2>
              <div className="multistep-form__grid">
                <Input
                  label="Street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="123 Main St"
                  error={errors.street}
                />
                <Input
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Hà Nội"
                  error={errors.city}
                />
                <Input
                  label="Postal Code"
                  name="postal_code"
                  value={formData.postal_code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="100000"
                  error={errors.postal_code}
                />
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={\`multistep-form__step \${
                currentStep === 3 ? "multistep-form__step--active" : ""
              }\`}
            >
              <h2 className="multistep-form__step-title">Payment Details</h2>
              <div className="multistep-form__grid">
                <Input
                  label="Card Number"
                  name="card_number"
                  value={formData.card_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="1234 5678 9012 3456"
                  error={errors.card_number}
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <Input
                    label="Expiry Date"
                    name="expiry_date"
                    value={formData.expiry_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="MM/YY"
                    error={errors.expiry_date}
                  />
                  <Input
                    label="CVV"
                    name="cvv"
                    type="password"
                    value={formData.cvv}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="123"
                    error={errors.cvv}
                  />
                </div>
              </div>

              <div
                className="multistep-form__review"
                style={{ marginTop: "2rem" }}
              >
                <h3 style={{ color: "#00D9FF", marginBottom: "1rem" }}>
                  Review Your Information
                </h3>
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="multistep-form__review-item">
                    <span className="multistep-form__review-label">
                      {key
                        .replace(/_/g, " ")
                        .replace(/\b\\w/g, (c) => c.toUpperCase())}
                    </span>
                    <span className="multistep-form__review-value">
                      {value || "-"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="multistep-form__actions">
              <Button
                variant="secondary"
                size="md"
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              <div style={{ display: "flex", gap: "1rem" }}>
                {currentStep < 3 && (
                  <Button variant="primary" size="md" onClick={handleNext}>
                    Next
                  </Button>
                )}
                {currentStep === 3 && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSubmit}
                    icon="Check"
                  >
                    Submit Payment
                  </Button>
                )}
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Success Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header onClose={() => setShowModal(false)}>
          Payment Successful!
        </Modal.Header>
        <Modal.Body>
          <p>Cảm ơn bạn đã hoàn thành form!</p>
          <div className="multistep-form__review" style={{ marginTop: "1rem" }}>
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="multistep-form__review-item">
                <span className="multistep-form__review-label">
                  {key
                    .replace(/_/g, " ")
                    .replace(/\b\\w/g, (c) => c.toUpperCase())}
                </span>
                <span className="multistep-form__review-value">{value}</span>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              setFormData(initialFormData);
              setErrors({});
              setCurrentStep(1);
            }}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

`})]})}const initialTime=30;function QuizApp(){const[l,o]=reactExports.useState(0),[d,u]=reactExports.useState(!1),[p,f]=reactExports.useState(initialTime),[v,A]=reactExports.useState([]),y=quizData.length,x=(l+1)/y*100,j=v[l];reactExports.useEffect(()=>{if(p<=0||d){u(!0);return}const N=setInterval(()=>f(T=>T-1),1e3);return()=>clearInterval(N)},[p,d]);const S=N=>{if(d)return;const T=[...v];T[l]=N,A(T)},w=()=>{l<y-1?o(N=>N+1):u(!0)},q=()=>{l>0&&o(N=>N-1)},h=()=>{o(0),u(!1),A([]),f(initialTime)},R=v.filter((N,T)=>N===quizData[T].correctAnswer).length;return jsxRuntimeExports.jsxs("div",{className:"quiz-container",children:[jsxRuntimeExports.jsx("h1",{className:"quiz-title",children:"Quiz App"}),jsxRuntimeExports.jsxs(Card,{className:"quiz-progress-wrapper",children:[jsxRuntimeExports.jsxs("div",{className:"quiz-progress-header",children:[jsxRuntimeExports.jsxs("span",{children:["Câu ",l+1," / ",y]}),jsxRuntimeExports.jsxs("span",{children:[Math.round(x),"%"]})]}),jsxRuntimeExports.jsx("div",{className:"quiz-progress-bar",children:jsxRuntimeExports.jsx("div",{className:"quiz-progress-fill",style:{width:`${x}%`}})})]}),!d&&jsxRuntimeExports.jsxs("div",{className:"quiz-timer",children:["⏱: ",p,"s"]}),jsxRuntimeExports.jsxs(Card,{className:"quiz-question-card",children:[jsxRuntimeExports.jsxs("div",{className:"quiz-question-header",children:[jsxRuntimeExports.jsxs("div",{className:"quiz-question-number",children:["Câu hỏi ",l+1]}),jsxRuntimeExports.jsx("h2",{className:"quiz-question-text",children:quizData[l].question})]}),jsxRuntimeExports.jsx("ul",{className:"quiz-options",children:quizData[l].options.map((N,T)=>{const z=j===T,L=T===quizData[l].correctAnswer;return jsxRuntimeExports.jsx("li",{onClick:()=>S(T),className:`
                  quiz-option
                  ${z?"selected":""}
                  ${d&&L?"correct":""}
                  ${d&&z&&!L?"incorrect":""}
                `.trim().replace(/\s+/g," "),children:N},T)})})]}),jsxRuntimeExports.jsxs("div",{className:"quiz-controls",children:[jsxRuntimeExports.jsx(Button,{variant:"secondary",size:"lg",onClick:q,disabled:l===0,children:"Trước"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"lg",onClick:w,disabled:!d&&j===void 0,children:l===y-1?"Nộp":"Tiếp"})]}),d&&jsxRuntimeExports.jsxs(Card,{className:"quiz-result",children:[jsxRuntimeExports.jsx("h3",{children:"Kết quả của bạn"}),jsxRuntimeExports.jsxs("div",{className:"quiz-result-score",children:[R," / ",y]}),jsxRuntimeExports.jsx("p",{style:{color:"#94a3b8",margin:"16px 0"},children:R===y?"Hoàn hảo!":R>=y*.7?"Rất tốt!":"Cố lên nhé!"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"lg",onClick:h,children:"Làm lại"})]})]})}const quizData=[{id:1,question:"React được tạo bởi?",options:["Google","Facebook","Microsoft","Apple"],correctAnswer:1},{id:2,question:"React sử dụng ngôn ngữ lập trình nào?",options:["Python","C++","JavaScript","Dart"],correctAnswer:2},{id:3,question:"Hook nào dùng để quản lý state trong React?",options:["useState","useEffect","useContext","useReducer"],correctAnswer:0},{id:4,question:"JSX là gì?",options:["Một framework CSS","Một cú pháp mở rộng cho JavaScript","Một ngôn ngữ mới","Một API của Node.js"],correctAnswer:1}];function Exercise4(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:4,title:"Quiz App"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
const quizData = [
  {
    id: 1,
    question: 'React được tạo bởi?',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 1
  },
  // More questions...
];

function QuizApp() {
  // TODO:
  // 1. Current question index state
  // 2. Selected answers state (array)
  // 3. Show result state (boolean)
  // 4. Time remaining state (optional - countdown timer)
  // 5. Chức năng:
  //    - Select answer
  //    - Next question
  //    - Previous question
  //    - Submit quiz
  //    - Show score
  //    - Restart quiz
  // 6. Highlight correct/incorrect answers khi submit
  // 7. Progress indicator
  // 8. Prevent changing answer after submit

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(QuizApp,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card } from "@ui";
import { useEffect, useState } from "react";

const initialTime = 30;

export default function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowResult, setIsShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [answerSelected, setAnswerSelected] = useState([]);

  const totalQuest = quizData.length;
  const progress = ((currentIndex + 1) / totalQuest) * 100;
  const currentAnswer = answerSelected[currentIndex];

  // Timer
  useEffect(() => {
    if (timeRemaining <= 0 || isShowResult) {
      setIsShowResult(true);
      return;
    }
    const timer = setInterval(() => setTimeRemaining((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeRemaining, isShowResult]);

  const handleSelectAnswer = (idx) => {
    if (isShowResult) return;
    const newAnswers = [...answerSelected];
    newAnswers[currentIndex] = idx;
    setAnswerSelected(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < totalQuest - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsShowResult(false);
    setAnswerSelected([]);
    setTimeRemaining(initialTime);
  };

  const totalCorrect = answerSelected.filter(
    (ans, i) => ans === quizData[i].correctAnswer
  ).length;

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz App</h1>

      {/* Thanh progress tự tạo */}
      <Card className="quiz-progress-wrapper">
        <div className="quiz-progress-header">
          <span>
            Câu {currentIndex + 1} / {totalQuest}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: \`\${progress}%\` }}
          />
        </div>
      </Card>

      {/* Timer */}
      {!isShowResult && <div className="quiz-timer">⏱: {timeRemaining}s</div>}

      {/* Câu hỏi */}
      <Card className="quiz-question-card">
        <div className="quiz-question-header">
          <div className="quiz-question-number">Câu hỏi {currentIndex + 1}</div>
          <h2 className="quiz-question-text">
            {quizData[currentIndex].question}
          </h2>
        </div>

        <ul className="quiz-options">
          {quizData[currentIndex].options.map((option, idx) => {
            const isSelected = currentAnswer === idx;
            const isCorrect = idx === quizData[currentIndex].correctAnswer;

            return (
              <li
                key={idx}
                onClick={() => handleSelectAnswer(idx)}
                className={\`
                  quiz-option
                  \${isSelected ? "selected" : ""}
                  \${isShowResult && isCorrect ? "correct" : ""}
                  \${isShowResult && isSelected && !isCorrect ? "incorrect" : ""}
                \`
                  .trim()
                  .replace(/\\s+/g, " ")}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </Card>

      {/* Nút điều hướng */}
      <div className="quiz-controls">
        <Button
          variant="secondary"
          size="lg"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Trước
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={handleNext}
          disabled={!isShowResult && currentAnswer === undefined}
        >
          {currentIndex === totalQuest - 1 ? "Nộp" : "Tiếp"}
        </Button>
      </div>

      {/* Kết quả */}
      {isShowResult && (
        <Card className="quiz-result">
          <h3>Kết quả của bạn</h3>
          <div className="quiz-result-score">
            {totalCorrect} / {totalQuest}
          </div>
          <p style={{ color: "#94a3b8", margin: "16px 0" }}>
            {totalCorrect === totalQuest
              ? "Hoàn hảo!"
              : totalCorrect >= totalQuest * 0.7
              ? "Rất tốt!"
              : "Cố lên nhé!"}
          </p>
          <Button variant="primary" size="lg" onClick={handleRestart}>
            Làm lại
          </Button>
        </Card>
      )}
    </div>
  );
}

`})]})}const init=new Date().getHours();function DynamicGreeting({currentHour:l=init}){const o="Alex",u=Object.values({morning:{hours:f=>f>=5&&f<=11,text:"Chào buổi sáng",icon:"🌅",bgClass:"bg-morning",quote:"Mỗi buổi sáng là một khởi đầu mới. Hãy làm nó đáng nhớ!"},afternoon:{hours:f=>f>=12&&f<=17,text:"Chào buổi chiều",icon:"☀️",bgClass:"bg-afternoon",quote:"Cố lên! Bạn đã đi được nửa chặng đường rồi!"},evening:{hours:f=>f>=18&&f<=21,text:"Chào buổi tối",icon:"🌆",bgClass:"bg-evening",quote:"Buổi tối là lúc để nhìn lại và nạp lại năng lượng."},night:{hours:f=>f>=22||f<=4,text:"Chúc ngủ ngon",icon:"🌙",bgClass:"bg-night",quote:"Ngủ ngon nhé. Ngày mai lại là một cuộc phiêu lưu mới!"}}).find(f=>f.hours(l)),p=new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit",hour12:!1});return jsxRuntimeExports.jsxs(Card,{className:`dynamic-greeting-modern ${u.bgClass}`,children:[jsxRuntimeExports.jsxs("div",{className:"greeting-header",children:[jsxRuntimeExports.jsx("span",{className:"greeting-icon-big",children:u.icon}),jsxRuntimeExports.jsxs("h1",{className:"greeting-text-big",children:[u.text,","," ",jsxRuntimeExports.jsx("span",{className:"user-name-highlight",children:o}),"!"]})]}),jsxRuntimeExports.jsxs("div",{className:"current-time-display",children:[p," • Hà Nội, Việt Nam",jsxRuntimeExports.jsx("div",{className:"flag-vn",children:"🇻🇳"})]}),jsxRuntimeExports.jsx("blockquote",{className:"motivational-quote-premium",children:u.quote})]})}function Exercise5(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:5,title:"Dynamic Greeting (Challenge)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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


`}),jsxRuntimeExports.jsxs(ExerciseCard.Demo,{children:[jsxRuntimeExports.jsxs("div",{className:"now-time",children:[jsxRuntimeExports.jsxs("p",{className:"time text-center",children:["Giờ hiện tại : ",new Date().toLocaleString()]}),jsxRuntimeExports.jsx(DynamicGreeting,{})]}),jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-2",children:[jsxRuntimeExports.jsxs("div",{className:"grid-item",children:[jsxRuntimeExports.jsx("p",{className:"time text-center",children:"Giờ giả lập: 8:00 AM"}),jsxRuntimeExports.jsx(DynamicGreeting,{currentHour:8})]}),jsxRuntimeExports.jsxs("div",{className:"grid-item",children:[jsxRuntimeExports.jsx("p",{className:"time text-center",children:"Giờ giả lập: 2:00 PM"}),jsxRuntimeExports.jsx(DynamicGreeting,{currentHour:14})]}),jsxRuntimeExports.jsxs("div",{className:"grid-item",children:[jsxRuntimeExports.jsx("p",{className:"time text-center",children:"Giờ giả lập: 7:00 PM"}),jsxRuntimeExports.jsx(DynamicGreeting,{currentHour:19})]}),jsxRuntimeExports.jsxs("div",{className:"grid-item",children:[jsxRuntimeExports.jsx("p",{className:"time text-center",children:"Giờ giả lập: 11:00 PM"}),jsxRuntimeExports.jsx(DynamicGreeting,{currentHour:23})]})]})]}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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


`})]})}const exercises={1:Exercise1,2:Exercise2,3:Exercise3,4:Exercise4,5:Exercise5},Day6=()=>jsxRuntimeExports.jsxs("div",{className:"day-content",children:[jsxRuntimeExports.jsxs("div",{className:"day-header",children:[jsxRuntimeExports.jsxs("div",{className:"day-header-content",children:[jsxRuntimeExports.jsx(CodeXml,{size:32,color:"#00D9FF"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h1",{className:"day-title",children:"Ngày 6"}),jsxRuntimeExports.jsx("p",{className:"day-subtitle",children:"useState Mastery"})]})]}),jsxRuntimeExports.jsxs("section",{className:"lesson-goal",children:[jsxRuntimeExports.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{children:"Hiểu sâu về useState hook"}),jsxRuntimeExports.jsx("li",{children:"Lazy initialization"}),jsxRuntimeExports.jsx("li",{children:"State immutability"}),jsxRuntimeExports.jsx("li",{children:"Best practices và patterns"}),jsxRuntimeExports.jsx("li",{children:"Tránh những lỗi phổ biến"})]})]})]}),jsxRuntimeExports.jsx("div",{className:"exercises-list",children:Object.keys(exercises).map(l=>{const o=exercises[l];return o?jsxRuntimeExports.jsx(o,{},l):null})})]}),Days=Object.freeze(Object.defineProperty({__proto__:null,Day1,Day2,Day3,Day4,Day5,Day6},Symbol.toStringTag,{value:"Module"}));function UIShowcase(){const[l,o]=reactExports.useState(!1),[d,u]=reactExports.useState(""),[p,f]=reactExports.useState("option1"),[v,A]=reactExports.useState(!1),[y,x]=reactExports.useState(!1),[j,S]=reactExports.useState("all"),w=[{id:"input",name:"Input",category:"form"},{id:"button",name:"Button",category:"action"},{id:"select",name:"Select",category:"form"},{id:"checkbox",name:"Checkbox",category:"form"},{id:"switch",name:"Switch",category:"form"},{id:"card",name:"Card",category:"layout"},{id:"modal",name:"Modal",category:"overlay"},{id:"tooltip",name:"Tooltip",category:"overlay"}],q=h=>{document.getElementById(h)?.scrollIntoView({behavior:"smooth",block:"start"})};return jsxRuntimeExports.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(180deg, #0a0e1a 0%, #0f172a 100%)"},children:[jsxRuntimeExports.jsxs("header",{style:{padding:"80px 40px",textAlign:"center",background:"linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 163, 204, 0.05) 100%)",borderBottom:"1px solid #1e293b"},children:[jsxRuntimeExports.jsx("h1",{style:{fontSize:"56px",fontWeight:"700",background:"linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"16px"},children:"UI Component Library"}),jsxRuntimeExports.jsx("p",{style:{fontSize:"20px",color:"#94a3b8",maxWidth:"600px",margin:"0 auto 40px"},children:"Modern, beautiful, and fully customizable React components for your next project"}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[jsxRuntimeExports.jsx(Button,{variant:"primary",size:"lg",children:"Get Started"}),jsxRuntimeExports.jsx(Button,{variant:"secondary",size:"lg",children:"View on GitHub"})]})]}),jsxRuntimeExports.jsx("nav",{style:{position:"sticky",top:0,background:"rgba(10, 14, 26, 0.9)",backdropFilter:"blur(12px)",borderBottom:"1px solid #1e293b",padding:"20px 40px",zIndex:100},children:jsxRuntimeExports.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"12px",overflowX:"auto"},children:["all","form","action","layout","overlay"].map(h=>jsxRuntimeExports.jsx(Button,{variant:j===h?"primary":"ghost",size:"sm",onClick:()=>S(h),children:h.charAt(0).toUpperCase()+h.slice(1)},h))})}),jsxRuntimeExports.jsxs("main",{style:{maxWidth:"1200px",margin:"0 auto",padding:"60px 40px"},children:[jsxRuntimeExports.jsxs("section",{style:{marginBottom:"80px"},children:[jsxRuntimeExports.jsx("h2",{style:{fontSize:"32px",fontWeight:"600",color:"#e4e4e7",marginBottom:"32px",textAlign:"center"},children:"Components"}),jsxRuntimeExports.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"},children:w.filter(h=>j==="all"||h.category===j).map(h=>jsxRuntimeExports.jsxs(Card,{style:{cursor:"pointer",textAlign:"center",transition:"transform 0.2s ease"},onClick:()=>q(h.id),onMouseEnter:R=>R.currentTarget.style.transform="translateY(-4px)",onMouseLeave:R=>R.currentTarget.style.transform="translateY(0)",children:[jsxRuntimeExports.jsx("h3",{style:{fontSize:"18px",color:"#e4e4e7",margin:"0 0 8px 0"},children:h.name}),jsxRuntimeExports.jsx("p",{style:{fontSize:"13px",color:"#64748b",margin:0},children:h.category})]},h.id))})]}),jsxRuntimeExports.jsx("section",{id:"input",style:{marginBottom:"80px"},children:jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"Input"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Text input fields with labels, icons, and validation"})]}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[jsxRuntimeExports.jsx(Input$1,{label:"Basic Input",placeholder:"Enter text here...",value:d,onChange:h=>u(h.target.value)}),jsxRuntimeExports.jsx(Input$1,{label:"With Helper Text",placeholder:"username",helperText:"Choose a unique username"}),jsxRuntimeExports.jsx(Input$1,{label:"With Error",placeholder:"email@example.com",error:"Invalid email format"}),jsxRuntimeExports.jsx(Input$1,{label:"With Icon",placeholder:"Search...",icon:"🔍"}),jsxRuntimeExports.jsx(Input$1,{label:"Disabled",placeholder:"Cannot edit",disabled:!0})]})})]})}),jsxRuntimeExports.jsx("section",{id:"button",style:{marginBottom:"80px"},children:jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"Button"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Multiple variants and sizes for different use cases"})]}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h4",{style:{color:"#94a3b8",fontSize:"14px",marginBottom:"16px"},children:"Variants"}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[jsxRuntimeExports.jsx(Button,{variant:"primary",children:"Primary"}),jsxRuntimeExports.jsx(Button,{variant:"secondary",children:"Secondary"}),jsxRuntimeExports.jsx(Button,{variant:"ghost",children:"Ghost"}),jsxRuntimeExports.jsx(Button,{variant:"danger",children:"Danger"})]})]}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h4",{style:{color:"#94a3b8",fontSize:"14px",marginBottom:"16px"},children:"Sizes"}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[jsxRuntimeExports.jsx(Button,{variant:"primary",size:"sm",children:"Small"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"md",children:"Medium"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"lg",children:"Large"})]})]}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h4",{style:{color:"#94a3b8",fontSize:"14px",marginBottom:"16px"},children:"States"}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[jsxRuntimeExports.jsx(Button,{variant:"primary",icon:"✨",children:"With Icon"}),jsxRuntimeExports.jsx(Button,{variant:"primary",loading:!0,children:"Loading"}),jsxRuntimeExports.jsx(Button,{variant:"primary",disabled:!0,children:"Disabled"})]})]})]})})]})}),jsxRuntimeExports.jsx("section",{id:"select",style:{marginBottom:"80px"},children:jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"Select"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Dropdown selection with custom styling"})]}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[jsxRuntimeExports.jsx(Select$1,{label:"Country",value:p,onChange:h=>f(h.target.value),options:[{value:"vn",label:"Vietnam"},{value:"us",label:"United States"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"},{value:"sg",label:"Singapore"}]}),jsxRuntimeExports.jsx(Select$1,{label:"Disabled Select",disabled:!0,options:[{value:"option1",label:"Cannot change"}]})]})})]})}),jsxRuntimeExports.jsx("section",{id:"checkbox",style:{marginBottom:"80px"},children:jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"Checkbox"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Selection controls for multiple choices"})]}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[jsxRuntimeExports.jsx(Checkbox$1,{label:"Accept terms and conditions",checked:v,onChange:h=>A(h.target.checked)}),jsxRuntimeExports.jsx(Checkbox$1,{label:"Subscribe to newsletter"}),jsxRuntimeExports.jsx(Checkbox$1,{label:"Enable notifications",defaultChecked:!0}),jsxRuntimeExports.jsx(Checkbox$1,{label:"Disabled option",disabled:!0})]})})]})}),jsxRuntimeExports.jsx("section",{id:"switch",style:{marginBottom:"80px"},children:jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"Switch"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Toggle between on/off states"})]}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[jsxRuntimeExports.jsx(Switch,{label:"Dark mode",checked:y,onChange:h=>x(h.target.checked)}),jsxRuntimeExports.jsx(Switch,{label:"Auto-save",defaultChecked:!0}),jsxRuntimeExports.jsx(Switch,{label:"Enable analytics"}),jsxRuntimeExports.jsx(Switch,{label:"Disabled switch",disabled:!0})]})})]})}),jsxRuntimeExports.jsx("section",{id:"card",style:{marginBottom:"80px"},children:jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"Card"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Flexible container for grouping content"})]}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:[jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsx(Card.Header,{children:jsxRuntimeExports.jsx(Card.Title,{children:"Basic Card"})}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsx("p",{style:{margin:0,color:"#94a3b8"},children:"This is a simple card with just content."})})]}),jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"With Subtitle"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Additional description"})]}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsx("p",{style:{margin:0,color:"#94a3b8"},children:"Cards can have subtitles for more context."})})]}),jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsx(Card.Header,{children:jsxRuntimeExports.jsx(Card.Title,{children:"With Footer"})}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsx("p",{style:{margin:0,color:"#94a3b8"},children:"Add actions in the footer section."})}),jsxRuntimeExports.jsx(Card.Footer,{children:jsxRuntimeExports.jsx(Button,{variant:"primary",size:"sm",children:"Action"})})]})]})})]})}),jsxRuntimeExports.jsx("section",{id:"modal",style:{marginBottom:"80px"},children:jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"Modal"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Overlay dialogs for important information"})]}),jsxRuntimeExports.jsxs(Card.Content,{children:[jsxRuntimeExports.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:jsxRuntimeExports.jsx(Button,{variant:"primary",onClick:()=>o(!0),children:"Open Modal"})}),jsxRuntimeExports.jsxs(Modal,{isOpen:l,onClose:()=>o(!1),children:[jsxRuntimeExports.jsx(Modal.Header,{onClose:()=>o(!1),children:"Example Modal"}),jsxRuntimeExports.jsx(Modal.Body,{children:jsxRuntimeExports.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[jsxRuntimeExports.jsx("p",{style:{color:"#94a3b8",margin:0},children:"This is a modal dialog with custom styling. It includes a header, body, and footer section."}),jsxRuntimeExports.jsx(Input$1,{label:"Your Name",placeholder:"Enter your name"}),jsxRuntimeExports.jsx(Checkbox$1,{label:"Remember my choice"})]})}),jsxRuntimeExports.jsxs(Modal.Footer,{children:[jsxRuntimeExports.jsx(Button,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),jsxRuntimeExports.jsx(Button,{variant:"primary",onClick:()=>o(!1),children:"Confirm"})]})]})]})]})}),jsxRuntimeExports.jsx("section",{id:"tooltip",style:{marginBottom:"80px"},children:jsxRuntimeExports.jsxs(Card,{children:[jsxRuntimeExports.jsxs(Card.Header,{children:[jsxRuntimeExports.jsx(Card.Title,{children:"Tooltip"}),jsxRuntimeExports.jsx(Card.Subtitle,{children:"Helpful hints that appear on hover"})]}),jsxRuntimeExports.jsx(Card.Content,{children:jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[jsxRuntimeExports.jsx(Tooltip,{content:"This is a helpful tooltip",children:jsxRuntimeExports.jsx(Button,{variant:"primary",children:"Hover me"})}),jsxRuntimeExports.jsx(Tooltip,{content:"You can add tooltips to any element",children:jsxRuntimeExports.jsx(Button,{variant:"secondary",children:"Another one"})}),jsxRuntimeExports.jsx(Tooltip,{content:"Tooltips help explain features",children:jsxRuntimeExports.jsx("span",{style:{display:"inline-block",padding:"12px 20px",background:"#1e293b",borderRadius:"8px",color:"#e4e4e7",cursor:"help"},children:"Hover this text"})})]})})]})})]}),jsxRuntimeExports.jsxs("footer",{style:{borderTop:"1px solid #1e293b",padding:"40px",textAlign:"center",color:"#64748b"},children:[jsxRuntimeExports.jsx("p",{style:{margin:"0 0 16px 0"},children:"Built with React • Styled with custom CSS • Open Source"}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"24px",justifyContent:"center",flexWrap:"wrap"},children:[jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"sm",children:"Documentation"}),jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"sm",children:"GitHub"}),jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"sm",children:"Examples"})]})]})]})}const DAY_NUMBER=30,CURRENT_DAY=6,App=()=>{const[l,o]=reactExports.useState(!0),[d,u]=reactExports.useState(1),[p,f]=reactExports.useState(!1),[v,A]=reactExports.useState(!1);reactExports.useEffect(()=>{const w=()=>{const q=window.innerWidth<768;A(q),o(!q)};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]);const y=w=>{u(w),f(!1),v&&o(!1)},x=()=>{f(!0),u(null),v&&o(!1)},j=Number(100*(CURRENT_DAY/DAY_NUMBER)).toFixed(2)+"%",S=Days[`Day${d??1}`];return jsxRuntimeExports.jsxs("div",{className:"container",children:[jsxRuntimeExports.jsx("button",{className:"toggle-button",onClick:()=>o(!l),children:l?jsxRuntimeExports.jsx(X,{size:24}):jsxRuntimeExports.jsx(Menu,{size:24})}),v&&l&&jsxRuntimeExports.jsx("div",{className:"overlay",onClick:()=>o(!1)}),jsxRuntimeExports.jsxs("aside",{className:`sidebar ${l?"sidebar-open":"sidebar-closed"}`,children:[jsxRuntimeExports.jsxs("div",{className:"sidebar-header",children:[jsxRuntimeExports.jsxs("div",{className:"logo-container",children:[jsxRuntimeExports.jsx(CodeXml,{size:28,color:"#00D9FF"}),jsxRuntimeExports.jsxs("span",{className:"logo",children:[DAY_NUMBER," Ngày ReactJS"]})]}),v&&jsxRuntimeExports.jsx("button",{className:"close-button",onClick:()=>o(!1),children:jsxRuntimeExports.jsx(X,{size:24})})]}),jsxRuntimeExports.jsxs("div",{className:"sidebar-content",children:[jsxRuntimeExports.jsxs("div",{className:"progress-container",children:[jsxRuntimeExports.jsxs("div",{className:"progress-header",children:[jsxRuntimeExports.jsx("span",{className:"progress-text",children:"Tiến độ"}),jsxRuntimeExports.jsx("span",{className:"progress-percent",children:j})]}),jsxRuntimeExports.jsx("div",{className:"progress-bar",style:{"--progress":j},children:jsxRuntimeExports.jsx("div",{className:"progress-fill"})})]}),jsxRuntimeExports.jsxs("nav",{className:"nav",children:[jsxRuntimeExports.jsxs("button",{className:`nav-item ${p?"nav-item-active":""}`,onClick:x,children:[jsxRuntimeExports.jsx("span",{className:"nav-item-number",children:"Danh sách UI"}),p&&jsxRuntimeExports.jsx("div",{className:"active-indicator"})]}),Array.from({length:DAY_NUMBER},(w,q)=>q+1).map(w=>jsxRuntimeExports.jsxs("button",{className:`nav-item ${d===w&&!p?"nav-item-active":""}`,onClick:()=>y(w),children:[jsxRuntimeExports.jsxs("span",{className:"nav-item-number",children:["Ngày ",w]}),d===w&&!p&&jsxRuntimeExports.jsx("div",{className:"active-indicator"})]},w))]})]})]}),jsxRuntimeExports.jsx("main",{className:"main",style:{marginLeft:l?"280px":"0",width:l?"calc(100% - 280px)":"100%"},children:p?jsxRuntimeExports.jsx(UIShowcase,{}):S?jsxRuntimeExports.jsx(S,{}):jsxRuntimeExports.jsx(ComingSoon,{})})]})};clientExports.createRoot(document.getElementById("root")).render(jsxRuntimeExports.jsx(App,{}));
