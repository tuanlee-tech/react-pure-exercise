(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function d(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(m){if(m.ep)return;m.ep=!0;const h=d(m);fetch(m.href,h)}})();var Yu={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function Ag(){if(om)return Ll;om=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(o,m,h){var g=null;if(h!==void 0&&(g=""+h),m.key!==void 0&&(g=""+m.key),"key"in m){h={};for(var S in m)S!=="key"&&(h[S]=m[S])}else h=m;return m=h.ref,{$$typeof:i,type:o,key:g,ref:m!==void 0?m:null,props:h}}return Ll.Fragment=u,Ll.jsx=d,Ll.jsxs=d,Ll}var dm;function Tg(){return dm||(dm=1,Yu.exports=Ag()),Yu.exports}var r=Tg(),Fu={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function wg(){if(fm)return le;fm=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),g=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),_=Symbol.iterator;function F(E){return E===null||typeof E!="object"?null:(E=_&&E[_]||E["@@iterator"],typeof E=="function"?E:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,T={};function M(E,H,Z){this.props=E,this.context=H,this.refs=T,this.updater=Z||x}M.prototype.isReactComponent={},M.prototype.setState=function(E,H){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,H,"setState")},M.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function z(){}z.prototype=M.prototype;function Y(E,H,Z){this.props=E,this.context=H,this.refs=T,this.updater=Z||x}var P=Y.prototype=new z;P.constructor=Y,C(P,M.prototype),P.isPureReactComponent=!0;var te=Array.isArray;function fe(){}var J={H:null,A:null,T:null,S:null},ge=Object.prototype.hasOwnProperty;function ce(E,H,Z){var $=Z.ref;return{$$typeof:i,type:E,key:H,ref:$!==void 0?$:null,props:Z}}function Ue(E,H){return ce(E.type,H,E.props)}function Me(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function _e(E){var H={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Z){return H[Z]})}var Ut=/\/+/g;function De(E,H){return typeof E=="object"&&E!==null&&E.key!=null?_e(""+E.key):H.toString(36)}function Be(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(fe,fe):(E.status="pending",E.then(function(H){E.status==="pending"&&(E.status="fulfilled",E.value=H)},function(H){E.status==="pending"&&(E.status="rejected",E.reason=H)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function U(E,H,Z,$,ne){var se=typeof E;(se==="undefined"||se==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(se){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case i:case u:ye=!0;break;case v:return ye=E._init,U(ye(E._payload),H,Z,$,ne)}}if(ye)return ne=ne(E),ye=$===""?"."+De(E,0):$,te(ne)?(Z="",ye!=null&&(Z=ye.replace(Ut,"$&/")+"/"),U(ne,H,Z,"",function(Zn){return Zn})):ne!=null&&(Me(ne)&&(ne=Ue(ne,Z+(ne.key==null||E&&E.key===ne.key?"":(""+ne.key).replace(Ut,"$&/")+"/")+ye)),H.push(ne)),1;ye=0;var Je=$===""?".":$+":";if(te(E))for(var Oe=0;Oe<E.length;Oe++)$=E[Oe],se=Je+De($,Oe),ye+=U($,H,Z,se,ne);else if(Oe=F(E),typeof Oe=="function")for(E=Oe.call(E),Oe=0;!($=E.next()).done;)$=$.value,se=Je+De($,Oe++),ye+=U($,H,Z,se,ne);else if(se==="object"){if(typeof E.then=="function")return U(Be(E),H,Z,$,ne);throw H=String(E),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ye}function X(E,H,Z){if(E==null)return E;var $=[],ne=0;return U(E,$,"","",function(se){return H.call(Z,se,ne++)}),$}function I(E){if(E._status===-1){var H=E._result;H=H(),H.then(function(Z){(E._status===0||E._status===-1)&&(E._status=1,E._result=Z)},function(Z){(E._status===0||E._status===-1)&&(E._status=2,E._result=Z)}),E._status===-1&&(E._status=0,E._result=H)}if(E._status===1)return E._result.default;throw E._result}var Ne=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},me={map:X,forEach:function(E,H,Z){X(E,function(){H.apply(this,arguments)},Z)},count:function(E){var H=0;return X(E,function(){H++}),H},toArray:function(E){return X(E,function(H){return H})||[]},only:function(E){if(!Me(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return le.Activity=N,le.Children=me,le.Component=M,le.Fragment=d,le.Profiler=m,le.PureComponent=Y,le.StrictMode=o,le.Suspense=y,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,le.__COMPILER_RUNTIME={__proto__:null,c:function(E){return J.H.useMemoCache(E)}},le.cache=function(E){return function(){return E.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(E,H,Z){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var $=C({},E.props),ne=E.key;if(H!=null)for(se in H.key!==void 0&&(ne=""+H.key),H)!ge.call(H,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&H.ref===void 0||($[se]=H[se]);var se=arguments.length-2;if(se===1)$.children=Z;else if(1<se){for(var ye=Array(se),Je=0;Je<se;Je++)ye[Je]=arguments[Je+2];$.children=ye}return ce(E.type,ne,$)},le.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},le.createElement=function(E,H,Z){var $,ne={},se=null;if(H!=null)for($ in H.key!==void 0&&(se=""+H.key),H)ge.call(H,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ne[$]=H[$]);var ye=arguments.length-2;if(ye===1)ne.children=Z;else if(1<ye){for(var Je=Array(ye),Oe=0;Oe<ye;Oe++)Je[Oe]=arguments[Oe+2];ne.children=Je}if(E&&E.defaultProps)for($ in ye=E.defaultProps,ye)ne[$]===void 0&&(ne[$]=ye[$]);return ce(E,se,ne)},le.createRef=function(){return{current:null}},le.forwardRef=function(E){return{$$typeof:S,render:E}},le.isValidElement=Me,le.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:I}},le.memo=function(E,H){return{$$typeof:p,type:E,compare:H===void 0?null:H}},le.startTransition=function(E){var H=J.T,Z={};J.T=Z;try{var $=E(),ne=J.S;ne!==null&&ne(Z,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(fe,Ne)}catch(se){Ne(se)}finally{H!==null&&Z.types!==null&&(H.types=Z.types),J.T=H}},le.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},le.use=function(E){return J.H.use(E)},le.useActionState=function(E,H,Z){return J.H.useActionState(E,H,Z)},le.useCallback=function(E,H){return J.H.useCallback(E,H)},le.useContext=function(E){return J.H.useContext(E)},le.useDebugValue=function(){},le.useDeferredValue=function(E,H){return J.H.useDeferredValue(E,H)},le.useEffect=function(E,H){return J.H.useEffect(E,H)},le.useEffectEvent=function(E){return J.H.useEffectEvent(E)},le.useId=function(){return J.H.useId()},le.useImperativeHandle=function(E,H,Z){return J.H.useImperativeHandle(E,H,Z)},le.useInsertionEffect=function(E,H){return J.H.useInsertionEffect(E,H)},le.useLayoutEffect=function(E,H){return J.H.useLayoutEffect(E,H)},le.useMemo=function(E,H){return J.H.useMemo(E,H)},le.useOptimistic=function(E,H){return J.H.useOptimistic(E,H)},le.useReducer=function(E,H,Z){return J.H.useReducer(E,H,Z)},le.useRef=function(E){return J.H.useRef(E)},le.useState=function(E){return J.H.useState(E)},le.useSyncExternalStore=function(E,H,Z){return J.H.useSyncExternalStore(E,H,Z)},le.useTransition=function(){return J.H.useTransition()},le.version="19.2.0",le}var mm;function ec(){return mm||(mm=1,Fu.exports=wg()),Fu.exports}var R=ec(),Xu={exports:{}},Hl={},Zu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function Dg(){return pm||(pm=1,(function(i){function u(U,X){var I=U.length;U.push(X);e:for(;0<I;){var Ne=I-1>>>1,me=U[Ne];if(0<m(me,X))U[Ne]=X,U[I]=me,I=Ne;else break e}}function d(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var X=U[0],I=U.pop();if(I!==X){U[0]=I;e:for(var Ne=0,me=U.length,E=me>>>1;Ne<E;){var H=2*(Ne+1)-1,Z=U[H],$=H+1,ne=U[$];if(0>m(Z,I))$<me&&0>m(ne,Z)?(U[Ne]=ne,U[$]=I,Ne=$):(U[Ne]=Z,U[H]=I,Ne=H);else if($<me&&0>m(ne,I))U[Ne]=ne,U[$]=I,Ne=$;else break e}}return X}function m(U,X){var I=U.sortIndex-X.sortIndex;return I!==0?I:U.id-X.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var g=Date,S=g.now();i.unstable_now=function(){return g.now()-S}}var y=[],p=[],v=1,N=null,_=3,F=!1,x=!1,C=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function P(U){for(var X=d(p);X!==null;){if(X.callback===null)o(p);else if(X.startTime<=U)o(p),X.sortIndex=X.expirationTime,u(y,X);else break;X=d(p)}}function te(U){if(C=!1,P(U),!x)if(d(y)!==null)x=!0,fe||(fe=!0,_e());else{var X=d(p);X!==null&&Be(te,X.startTime-U)}}var fe=!1,J=-1,ge=5,ce=-1;function Ue(){return T?!0:!(i.unstable_now()-ce<ge)}function Me(){if(T=!1,fe){var U=i.unstable_now();ce=U;var X=!0;try{e:{x=!1,C&&(C=!1,z(J),J=-1),F=!0;var I=_;try{t:{for(P(U),N=d(y);N!==null&&!(N.expirationTime>U&&Ue());){var Ne=N.callback;if(typeof Ne=="function"){N.callback=null,_=N.priorityLevel;var me=Ne(N.expirationTime<=U);if(U=i.unstable_now(),typeof me=="function"){N.callback=me,P(U),X=!0;break t}N===d(y)&&o(y),P(U)}else o(y);N=d(y)}if(N!==null)X=!0;else{var E=d(p);E!==null&&Be(te,E.startTime-U),X=!1}}break e}finally{N=null,_=I,F=!1}X=void 0}}finally{X?_e():fe=!1}}}var _e;if(typeof Y=="function")_e=function(){Y(Me)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,De=Ut.port2;Ut.port1.onmessage=Me,_e=function(){De.postMessage(null)}}else _e=function(){M(Me,0)};function Be(U,X){J=M(function(){U(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(U){U.callback=null},i.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<U?Math.floor(1e3/U):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(U){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var I=_;_=X;try{return U()}finally{_=I}},i.unstable_requestPaint=function(){T=!0},i.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var I=_;_=U;try{return X()}finally{_=I}},i.unstable_scheduleCallback=function(U,X,I){var Ne=i.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Ne+I:Ne):I=Ne,U){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=I+me,U={id:v++,callback:X,priorityLevel:U,startTime:I,expirationTime:me,sortIndex:-1},I>Ne?(U.sortIndex=I,u(p,U),d(y)===null&&U===d(p)&&(C?(z(J),J=-1):C=!0,Be(te,I-Ne))):(U.sortIndex=me,u(y,U),x||F||(x=!0,fe||(fe=!0,_e()))),U},i.unstable_shouldYield=Ue,i.unstable_wrapCallback=function(U){var X=_;return function(){var I=_;_=X;try{return U.apply(this,arguments)}finally{_=I}}}})(Vu)),Vu}var hm;function _g(){return hm||(hm=1,Zu.exports=Dg()),Zu.exports}var Qu={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Og(){if(gm)return at;gm=1;var i=ec();function u(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(y,p,v){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:N==null?null:""+N,children:y,containerInfo:p,implementation:v}}var g=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,at.createPortal=function(y,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return h(y,p,null,v)},at.flushSync=function(y){var p=g.T,v=o.p;try{if(g.T=null,o.p=2,y)return y()}finally{g.T=p,o.p=v,o.d.f()}},at.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(y,p))},at.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},at.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var v=p.as,N=S(v,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,F=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?o.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:N,integrity:_,fetchPriority:F}):v==="script"&&o.d.X(y,{crossOrigin:N,integrity:_,fetchPriority:F,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},at.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=S(p.as,p.crossOrigin);o.d.M(y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(y)},at.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,N=S(v,p.crossOrigin);o.d.L(y,v,{crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},at.preloadModule=function(y,p){if(typeof y=="string")if(p){var v=S(p.as,p.crossOrigin);o.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(y)},at.requestFormReset=function(y){o.d.r(y)},at.unstable_batchedUpdates=function(y,p){return y(p)},at.useFormState=function(y,p,v){return g.H.useFormState(y,p,v)},at.useFormStatus=function(){return g.H.useHostTransitionStatus()},at.version="19.2.0",at}var ym;function Rm(){if(ym)return Qu.exports;ym=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Qu.exports=Og(),Qu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Rg(){if(vm)return Hl;vm=1;var i=_g(),u=ec(),d=Rm();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var s=l.alternate;if(s===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===a)return y(l),e;if(s===n)return y(l),t;s=s.sibling}throw Error(o(188))}if(a.return!==n.return)a=l,n=s;else{for(var c=!1,f=l.child;f;){if(f===a){c=!0,a=l,n=s;break}if(f===n){c=!0,n=l,a=s;break}f=f.sibling}if(!c){for(f=s.child;f;){if(f===a){c=!0,a=s,n=l;break}if(f===n){c=!0,n=s,a=l;break}f=f.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,_=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Me=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=Me&&e[Me]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList";case ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case Y:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:De(e.type)||"Memo";case ge:t=e._payload,e=e._init;try{return De(e(t))}catch{}}return null}var Be=Array.isArray,U=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Ne=[],me=-1;function E(e){return{current:e}}function H(e){0>me||(e.current=Ne[me],Ne[me]=null,me--)}function Z(e,t){me++,Ne[me]=e.current,e.current=t}var $=E(null),ne=E(null),se=E(null),ye=E(null);function Je(e,t){switch(Z(se,t),Z(ne,e),Z($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zf(t),e=kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H($),Z($,e)}function Oe(){H($),H(ne),H(se)}function Zn(e){e.memoizedState!==null&&Z(ye,e);var t=$.current,a=kf(t,e.type);t!==a&&(Z(ne,e),Z($,a))}function $l(e){ne.current===e&&(H($),H(ne)),ye.current===e&&(H(ye),kl._currentValue=I)}var Es,rc;function Ba(e){if(Es===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Es=t&&t[1]||"",rc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Es+e+rc}var Cs=!1;function As(e,t){if(!e||Cs)return"";Cs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(k){var O=k}Reflect.construct(e,[],q)}else{try{q.call()}catch(k){O=k}e.call(q.prototype)}}else{try{throw Error()}catch(k){O=k}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(k){if(k&&O&&typeof k.stack=="string")return[k.stack,O.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),c=s[0],f=s[1];if(c&&f){var b=c.split(`
`),D=f.split(`
`);for(l=n=0;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(n===b.length||l===D.length)for(n=b.length-1,l=D.length-1;1<=n&&0<=l&&b[n]!==D[l];)l--;for(;1<=n&&0<=l;n--,l--)if(b[n]!==D[l]){if(n!==1||l!==1)do if(n--,l--,0>l||b[n]!==D[l]){var B=`
`+b[n].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=n&&0<=l);break}}}finally{Cs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ba(a):""}function np(e,t){switch(e.tag){case 26:case 27:case 5:return Ba(e.type);case 16:return Ba("Lazy");case 13:return e.child!==t&&t!==null?Ba("Suspense Fallback"):Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 15:return As(e.type,!1);case 11:return As(e.type.render,!1);case 1:return As(e.type,!0);case 31:return Ba("Activity");default:return""}}function uc(e){try{var t="",a=null;do t+=np(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ts=Object.prototype.hasOwnProperty,ws=i.unstable_scheduleCallback,Ds=i.unstable_cancelCallback,lp=i.unstable_shouldYield,ip=i.unstable_requestPaint,dt=i.unstable_now,sp=i.unstable_getCurrentPriorityLevel,cc=i.unstable_ImmediatePriority,oc=i.unstable_UserBlockingPriority,Kl=i.unstable_NormalPriority,rp=i.unstable_LowPriority,dc=i.unstable_IdlePriority,up=i.log,cp=i.unstable_setDisableYieldValue,Vn=null,ft=null;function fa(e){if(typeof up=="function"&&cp(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Vn,e)}catch{}}var mt=Math.clz32?Math.clz32:fp,op=Math.log,dp=Math.LN2;function fp(e){return e>>>=0,e===0?32:31-(op(e)/dp|0)|0}var Jl=256,Wl=262144,Il=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~s,n!==0?l=La(n):(c&=f,c!==0?l=La(c):a||(a=f&~e,a!==0&&(l=La(a))))):(f=n&~s,f!==0?l=La(f):c!==0?l=La(c):a||(a=n&~e,a!==0&&(l=La(a)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:l}function Qn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fc(){var e=Il;return Il<<=1,(Il&62914560)===0&&(Il=4194304),e}function _s(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $n(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pp(e,t,a,n,l,s){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,b=e.expirationTimes,D=e.hiddenUpdates;for(a=c&~a;0<a;){var B=31-mt(a),q=1<<B;f[B]=0,b[B]=-1;var O=D[B];if(O!==null)for(D[B]=null,B=0;B<O.length;B++){var k=O[B];k!==null&&(k.lane&=-536870913)}a&=~q}n!==0&&mc(e,n,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~t))}function mc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-mt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function pc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-mt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function hc(e,t){var a=t&-t;return a=(a&42)!==0?1:Os(a),(a&(e.suspendedLanes|t))!==0?0:a}function Os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gc(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:nm(e.type))}function yc(e,t){var a=X.p;try{return X.p=e,t()}finally{X.p=a}}var ma=Math.random().toString(36).slice(2),We="__reactFiber$"+ma,lt="__reactProps$"+ma,sn="__reactContainer$"+ma,zs="__reactEvents$"+ma,hp="__reactListeners$"+ma,gp="__reactHandles$"+ma,vc="__reactResources$"+ma,Kn="__reactMarker$"+ma;function ks(e){delete e[We],delete e[lt],delete e[zs],delete e[hp],delete e[gp]}function rn(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[sn]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Gf(e);e!==null;){if(a=e[We])return a;e=Gf(e)}return t}e=a,a=e.parentNode}return null}function un(e){if(e=e[We]||e[sn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Jn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function cn(e){var t=e[vc];return t||(t=e[vc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[Kn]=!0}var bc=new Set,xc={};function Ha(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(xc[e]=t,e=0;e<t.length;e++)bc.add(t[e])}var yp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sc={},Nc={};function vp(e){return Ts.call(Nc,e)?!0:Ts.call(Sc,e)?!1:yp.test(e)?Nc[e]=!0:(Sc[e]=!0,!1)}function ei(e,t,a){if(vp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ti(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Xt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bp(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ms(e){if(!e._valueTracker){var t=jc(e)?"checked":"value";e._valueTracker=bp(e,t,""+e[t])}}function Ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=jc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xp=/[\n"\\]/g;function jt(e){return e.replace(xp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Us(e,t,a,n,l,s,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Bs(e,c,Nt(t)):a!=null?Bs(e,c,Nt(a)):n!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Nt(f):e.removeAttribute("name")}function Cc(e,t,a,n,l,s,c,f){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Ms(e);return}a=a!=null?""+Nt(a):"",t=t!=null?""+Nt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ms(e)}function Bs(e,t,a){t==="number"&&ai(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function dn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Nt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ac(e,t,a){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Nt(a):""}function Tc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(o(92));if(Be(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Nt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ms(e)}function fn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Sp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Sp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Dc(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&wc(e,l,n)}else for(var s in t)t.hasOwnProperty(s)&&wc(e,s,t[s])}function Ls(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ni(e){return jp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Hs=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mn=null,pn=null;function _c(e){var t=un(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Us(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[lt]||null;if(!l)throw Error(o(90));Us(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ec(n)}break e;case"textarea":Ac(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&dn(e,!!a.multiple,t,!1)}}}var Gs=!1;function Oc(e,t,a){if(Gs)return e(t,a);Gs=!0;try{var n=e(t);return n}finally{if(Gs=!1,(mn!==null||pn!==null)&&(Xi(),mn&&(t=mn,e=pn,pn=mn=null,_c(t),e)))for(t=0;t<e.length;t++)_c(e[t])}}function Wn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[lt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ys=!1;if(Vt)try{var In={};Object.defineProperty(In,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Ys=!1}var pa=null,Fs=null,li=null;function Rc(){if(li)return li;var e,t=Fs,a=t.length,n,l="value"in pa?pa.value:pa.textContent,s=l.length;for(e=0;e<a&&t[e]===l[e];e++);var c=a-e;for(n=1;n<=c&&t[a-n]===l[s-n];n++);return li=l.slice(e,1<n?1-n:void 0)}function ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function zc(){return!1}function it(e){function t(a,n,l,s,c){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?si:zc,this.isPropagationStopped=zc,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),t}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=it(qa),Pn=N({},qa,{view:0,detail:0}),Ep=it(Pn),Xs,Zs,el,ui=N({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==el&&(el&&e.type==="mousemove"?(Xs=e.screenX-el.screenX,Zs=e.screenY-el.screenY):Zs=Xs=0,el=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),kc=it(ui),Cp=N({},ui,{dataTransfer:0}),Ap=it(Cp),Tp=N({},Pn,{relatedTarget:0}),Vs=it(Tp),wp=N({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Dp=it(wp),_p=N({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Op=it(_p),Rp=N({},qa,{data:0}),Mc=it(Rp),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Up(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mp[e])?!!t[e]:!1}function Qs(){return Up}var Bp=N({},Pn,{key:function(e){if(e.key){var t=zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qs,charCode:function(e){return e.type==="keypress"?ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lp=it(Bp),Hp=N({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=it(Hp),qp=N({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qs}),Gp=it(qp),Yp=N({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=it(Yp),Xp=N({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=it(Xp),Vp=N({},qa,{newState:0,oldState:0}),Qp=it(Vp),$p=[9,13,27,32],$s=Vt&&"CompositionEvent"in window,tl=null;Vt&&"documentMode"in document&&(tl=document.documentMode);var Kp=Vt&&"TextEvent"in window&&!tl,Bc=Vt&&(!$s||tl&&8<tl&&11>=tl),Lc=" ",Hc=!1;function qc(e,t){switch(e){case"keyup":return $p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Jp(e,t){switch(e){case"compositionend":return Gc(t);case"keypress":return t.which!==32?null:(Hc=!0,Lc);case"textInput":return e=t.data,e===Lc&&Hc?null:e;default:return null}}function Wp(e,t){if(hn)return e==="compositionend"||!$s&&qc(e,t)?(e=Rc(),li=Fs=pa=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bc&&t.locale!=="ko"?null:t.data;default:return null}}var Ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ip[e.type]:t==="textarea"}function Fc(e,t,a,n){mn?pn?pn.push(n):pn=[n]:mn=n,t=Wi(t,"onChange"),0<t.length&&(a=new ri("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var al=null,nl=null;function Pp(e){Tf(e,0)}function ci(e){var t=Jn(e);if(Ec(t))return e}function Xc(e,t){if(e==="change")return t}var Zc=!1;if(Vt){var Ks;if(Vt){var Js="oninput"in document;if(!Js){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),Js=typeof Vc.oninput=="function"}Ks=Js}else Ks=!1;Zc=Ks&&(!document.documentMode||9<document.documentMode)}function Qc(){al&&(al.detachEvent("onpropertychange",$c),nl=al=null)}function $c(e){if(e.propertyName==="value"&&ci(nl)){var t=[];Fc(t,nl,e,qs(e)),Oc(Pp,t)}}function eh(e,t,a){e==="focusin"?(Qc(),al=t,nl=a,al.attachEvent("onpropertychange",$c)):e==="focusout"&&Qc()}function th(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(nl)}function ah(e,t){if(e==="click")return ci(t)}function nh(e,t){if(e==="input"||e==="change")return ci(t)}function lh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:lh;function ll(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Ts.call(t,l)||!pt(e[l],t[l]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jc(e,t){var a=Kc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kc(a)}}function Wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ic(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ai(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ai(e.document)}return t}function Ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ih=Vt&&"documentMode"in document&&11>=document.documentMode,gn=null,Is=null,il=null,Ps=!1;function Pc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ps||gn==null||gn!==ai(n)||(n=gn,"selectionStart"in n&&Ws(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),il&&ll(il,n)||(il=n,n=Wi(Is,"onSelect"),0<n.length&&(t=new ri("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=gn)))}function Ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var yn={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},er={},eo={};Vt&&(eo=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Ya(e){if(er[e])return er[e];if(!yn[e])return e;var t=yn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in eo)return er[e]=t[a];return e}var to=Ya("animationend"),ao=Ya("animationiteration"),no=Ya("animationstart"),sh=Ya("transitionrun"),rh=Ya("transitionstart"),uh=Ya("transitioncancel"),lo=Ya("transitionend"),io=new Map,tr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tr.push("scrollEnd");function Rt(e,t){io.set(e,t),Ha(t,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],vn=0,ar=0;function di(){for(var e=vn,t=ar=vn=0;t<e;){var a=Et[t];Et[t++]=null;var n=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var s=Et[t];if(Et[t++]=null,n!==null&&l!==null){var c=n.pending;c===null?l.next=l:(l.next=c.next,c.next=l),n.pending=l}s!==0&&so(a,l,s)}}function fi(e,t,a,n){Et[vn++]=e,Et[vn++]=t,Et[vn++]=a,Et[vn++]=n,ar|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function nr(e,t,a,n){return fi(e,t,a,n),mi(e)}function Fa(e,t){return fi(e,null,null,t),mi(e)}function so(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-mt(a),e=s.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),s):null}function mi(e){if(50<Tl)throw Tl=0,fu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bn={};function ch(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,a,n){return new ch(e,t,a,n)}function lr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var a=e.alternate;return a===null?(a=ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ro(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pi(e,t,a,n,l,s){var c=0;if(n=e,typeof e=="function")lr(e)&&(c=1);else if(typeof e=="string")c=pg(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ce:return e=ht(31,a,t,l),e.elementType=ce,e.lanes=s,e;case C:return Xa(a.children,l,s,t);case T:c=8,l|=24;break;case M:return e=ht(12,a,t,l|2),e.elementType=M,e.lanes=s,e;case te:return e=ht(13,a,t,l),e.elementType=te,e.lanes=s,e;case fe:return e=ht(19,a,t,l),e.elementType=fe,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:c=10;break e;case z:c=9;break e;case P:c=11;break e;case J:c=14;break e;case ge:c=16,n=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=ht(c,a,t,l),t.elementType=e,t.type=n,t.lanes=s,t}function Xa(e,t,a,n){return e=ht(7,e,n,t),e.lanes=a,e}function ir(e,t,a){return e=ht(6,e,null,t),e.lanes=a,e}function uo(e){var t=ht(18,null,null,0);return t.stateNode=e,t}function sr(e,t,a){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var co=new WeakMap;function Ct(e,t){if(typeof e=="object"&&e!==null){var a=co.get(e);return a!==void 0?a:(t={value:e,source:t,stack:uc(t)},co.set(e,t),t)}return{value:e,source:t,stack:uc(t)}}var xn=[],Sn=0,hi=null,sl=0,At=[],Tt=0,ha=null,Bt=1,Lt="";function $t(e,t){xn[Sn++]=sl,xn[Sn++]=hi,hi=e,sl=t}function oo(e,t,a){At[Tt++]=Bt,At[Tt++]=Lt,At[Tt++]=ha,ha=e;var n=Bt;e=Lt;var l=32-mt(n)-1;n&=~(1<<l),a+=1;var s=32-mt(t)+l;if(30<s){var c=l-l%5;s=(n&(1<<c)-1).toString(32),n>>=c,l-=c,Bt=1<<32-mt(t)+l|a<<l|n,Lt=s+e}else Bt=1<<s|a<<l|n,Lt=e}function rr(e){e.return!==null&&($t(e,1),oo(e,1,0))}function ur(e){for(;e===hi;)hi=xn[--Sn],xn[Sn]=null,sl=xn[--Sn],xn[Sn]=null;for(;e===ha;)ha=At[--Tt],At[Tt]=null,Lt=At[--Tt],At[Tt]=null,Bt=At[--Tt],At[Tt]=null}function fo(e,t){At[Tt++]=Bt,At[Tt++]=Lt,At[Tt++]=ha,Bt=t.id,Lt=t.overflow,ha=e}var Ie=null,Re=null,ve=!1,ga=null,wt=!1,cr=Error(o(519));function ya(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rl(Ct(t,e)),cr}function mo(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[We]=e,t[lt]=n,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<Dl.length;a++)de(Dl[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Cc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Tc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Of(t.textContent,a)?(n.popover!=null&&(de("beforetoggle",t),de("toggle",t)),n.onScroll!=null&&de("scroll",t),n.onScrollEnd!=null&&de("scrollend",t),n.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ya(e,!0)}function po(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Ie=Ie.return}}function Nn(e){if(e!==Ie)return!1;if(!ve)return po(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Tu(e.type,e.memoizedProps)),a=!a),a&&Re&&ya(e),po(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=qf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=qf(e)}else t===27?(t=Re,Oa(e.type)?(e=Ru,Ru=null,Re=e):Re=t):Re=Ie?_t(e.stateNode.nextSibling):null;return!0}function Za(){Re=Ie=null,ve=!1}function or(){var e=ga;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ga=null),e}function rl(e){ga===null?ga=[e]:ga.push(e)}var dr=E(null),Va=null,Kt=null;function va(e,t,a){Z(dr,t._currentValue),t._currentValue=a}function Jt(e){e._currentValue=dr.current,H(dr)}function fr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function mr(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var c=l.child;s=s.firstContext;e:for(;s!==null;){var f=s;s=l;for(var b=0;b<t.length;b++)if(f.context===t[b]){s.lanes|=a,f=s.alternate,f!==null&&(f.lanes|=a),fr(s.return,a,e),n||(c=null);break e}s=f.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(o(341));c.lanes|=a,s=c.alternate,s!==null&&(s.lanes|=a),fr(c,a,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function jn(e,t,a,n){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var f=l.type;pt(l.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(l===ye.current){if(c=l.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(kl):e=[kl])}l=l.return}e!==null&&mr(t,e,a,n),t.flags|=262144}function gi(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){Va=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return ho(Va,e)}function yi(e,t){return Va===null&&Qa(e),ho(e,t)}function ho(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Kt===null){if(e===null)throw Error(o(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return a}var oh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},dh=i.unstable_scheduleCallback,fh=i.unstable_NormalPriority,Ye={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pr(){return{controller:new oh,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&dh(fh,function(){e.controller.abort()})}var cl=null,hr=0,En=0,Cn=null;function mh(e,t){if(cl===null){var a=cl=[];hr=0,En=vu(),Cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return hr++,t.then(go,go),t}function go(){if(--hr===0&&cl!==null){Cn!==null&&(Cn.status="fulfilled");var e=cl;cl=null,En=0,Cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ph(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var yo=U.S;U.S=function(e,t){ef=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&mh(e,t),yo!==null&&yo(e,t)};var $a=E(null);function gr(){var e=$a.current;return e!==null?e:we.pooledCache}function vi(e,t){t===null?Z($a,$a.current):Z($a,t.pool)}function vo(){var e=gr();return e===null?null:{parent:Ye._currentValue,pool:e}}var An=Error(o(460)),yr=Error(o(474)),bi=Error(o(542)),xi={then:function(){}};function bo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,No(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,No(e),e}throw Ja=t,An}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ja=a,An):a}}var Ja=null;function So(){if(Ja===null)throw Error(o(459));var e=Ja;return Ja=null,e}function No(e){if(e===An||e===bi)throw Error(o(483))}var Tn=null,ol=0;function Si(e){var t=ol;return ol+=1,Tn===null&&(Tn=[]),xo(Tn,e,t)}function dl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ni(e,t){throw t.$$typeof===_?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jo(e){function t(A,j){if(e){var w=A.deletions;w===null?(A.deletions=[j],A.flags|=16):w.push(j)}}function a(A,j){if(!e)return null;for(;j!==null;)t(A,j),j=j.sibling;return null}function n(A){for(var j=new Map;A!==null;)A.key!==null?j.set(A.key,A):j.set(A.index,A),A=A.sibling;return j}function l(A,j){return A=Qt(A,j),A.index=0,A.sibling=null,A}function s(A,j,w){return A.index=w,e?(w=A.alternate,w!==null?(w=w.index,w<j?(A.flags|=67108866,j):w):(A.flags|=67108866,j)):(A.flags|=1048576,j)}function c(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function f(A,j,w,L){return j===null||j.tag!==6?(j=ir(w,A.mode,L),j.return=A,j):(j=l(j,w),j.return=A,j)}function b(A,j,w,L){var ee=w.type;return ee===C?B(A,j,w.props.children,L,w.key):j!==null&&(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ge&&Ka(ee)===j.type)?(j=l(j,w.props),dl(j,w),j.return=A,j):(j=pi(w.type,w.key,w.props,null,A.mode,L),dl(j,w),j.return=A,j)}function D(A,j,w,L){return j===null||j.tag!==4||j.stateNode.containerInfo!==w.containerInfo||j.stateNode.implementation!==w.implementation?(j=sr(w,A.mode,L),j.return=A,j):(j=l(j,w.children||[]),j.return=A,j)}function B(A,j,w,L,ee){return j===null||j.tag!==7?(j=Xa(w,A.mode,L,ee),j.return=A,j):(j=l(j,w),j.return=A,j)}function q(A,j,w){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ir(""+j,A.mode,w),j.return=A,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case F:return w=pi(j.type,j.key,j.props,null,A.mode,w),dl(w,j),w.return=A,w;case x:return j=sr(j,A.mode,w),j.return=A,j;case ge:return j=Ka(j),q(A,j,w)}if(Be(j)||_e(j))return j=Xa(j,A.mode,w,null),j.return=A,j;if(typeof j.then=="function")return q(A,Si(j),w);if(j.$$typeof===Y)return q(A,yi(A,j),w);Ni(A,j)}return null}function O(A,j,w,L){var ee=j!==null?j.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return ee!==null?null:f(A,j,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case F:return w.key===ee?b(A,j,w,L):null;case x:return w.key===ee?D(A,j,w,L):null;case ge:return w=Ka(w),O(A,j,w,L)}if(Be(w)||_e(w))return ee!==null?null:B(A,j,w,L,null);if(typeof w.then=="function")return O(A,j,Si(w),L);if(w.$$typeof===Y)return O(A,j,yi(A,w),L);Ni(A,w)}return null}function k(A,j,w,L,ee){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return A=A.get(w)||null,f(j,A,""+L,ee);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case F:return A=A.get(L.key===null?w:L.key)||null,b(j,A,L,ee);case x:return A=A.get(L.key===null?w:L.key)||null,D(j,A,L,ee);case ge:return L=Ka(L),k(A,j,w,L,ee)}if(Be(L)||_e(L))return A=A.get(w)||null,B(j,A,L,ee,null);if(typeof L.then=="function")return k(A,j,w,Si(L),ee);if(L.$$typeof===Y)return k(A,j,w,yi(j,L),ee);Ni(j,L)}return null}function K(A,j,w,L){for(var ee=null,be=null,W=j,re=j=0,he=null;W!==null&&re<w.length;re++){W.index>re?(he=W,W=null):he=W.sibling;var xe=O(A,W,w[re],L);if(xe===null){W===null&&(W=he);break}e&&W&&xe.alternate===null&&t(A,W),j=s(xe,j,re),be===null?ee=xe:be.sibling=xe,be=xe,W=he}if(re===w.length)return a(A,W),ve&&$t(A,re),ee;if(W===null){for(;re<w.length;re++)W=q(A,w[re],L),W!==null&&(j=s(W,j,re),be===null?ee=W:be.sibling=W,be=W);return ve&&$t(A,re),ee}for(W=n(W);re<w.length;re++)he=k(W,A,re,w[re],L),he!==null&&(e&&he.alternate!==null&&W.delete(he.key===null?re:he.key),j=s(he,j,re),be===null?ee=he:be.sibling=he,be=he);return e&&W.forEach(function(Ua){return t(A,Ua)}),ve&&$t(A,re),ee}function ae(A,j,w,L){if(w==null)throw Error(o(151));for(var ee=null,be=null,W=j,re=j=0,he=null,xe=w.next();W!==null&&!xe.done;re++,xe=w.next()){W.index>re?(he=W,W=null):he=W.sibling;var Ua=O(A,W,xe.value,L);if(Ua===null){W===null&&(W=he);break}e&&W&&Ua.alternate===null&&t(A,W),j=s(Ua,j,re),be===null?ee=Ua:be.sibling=Ua,be=Ua,W=he}if(xe.done)return a(A,W),ve&&$t(A,re),ee;if(W===null){for(;!xe.done;re++,xe=w.next())xe=q(A,xe.value,L),xe!==null&&(j=s(xe,j,re),be===null?ee=xe:be.sibling=xe,be=xe);return ve&&$t(A,re),ee}for(W=n(W);!xe.done;re++,xe=w.next())xe=k(W,A,re,xe.value,L),xe!==null&&(e&&xe.alternate!==null&&W.delete(xe.key===null?re:xe.key),j=s(xe,j,re),be===null?ee=xe:be.sibling=xe,be=xe);return e&&W.forEach(function(Cg){return t(A,Cg)}),ve&&$t(A,re),ee}function Te(A,j,w,L){if(typeof w=="object"&&w!==null&&w.type===C&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case F:e:{for(var ee=w.key;j!==null;){if(j.key===ee){if(ee=w.type,ee===C){if(j.tag===7){a(A,j.sibling),L=l(j,w.props.children),L.return=A,A=L;break e}}else if(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ge&&Ka(ee)===j.type){a(A,j.sibling),L=l(j,w.props),dl(L,w),L.return=A,A=L;break e}a(A,j);break}else t(A,j);j=j.sibling}w.type===C?(L=Xa(w.props.children,A.mode,L,w.key),L.return=A,A=L):(L=pi(w.type,w.key,w.props,null,A.mode,L),dl(L,w),L.return=A,A=L)}return c(A);case x:e:{for(ee=w.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===w.containerInfo&&j.stateNode.implementation===w.implementation){a(A,j.sibling),L=l(j,w.children||[]),L.return=A,A=L;break e}else{a(A,j);break}else t(A,j);j=j.sibling}L=sr(w,A.mode,L),L.return=A,A=L}return c(A);case ge:return w=Ka(w),Te(A,j,w,L)}if(Be(w))return K(A,j,w,L);if(_e(w)){if(ee=_e(w),typeof ee!="function")throw Error(o(150));return w=ee.call(w),ae(A,j,w,L)}if(typeof w.then=="function")return Te(A,j,Si(w),L);if(w.$$typeof===Y)return Te(A,j,yi(A,w),L);Ni(A,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,j!==null&&j.tag===6?(a(A,j.sibling),L=l(j,w),L.return=A,A=L):(a(A,j),L=ir(w,A.mode,L),L.return=A,A=L),c(A)):a(A,j)}return function(A,j,w,L){try{ol=0;var ee=Te(A,j,w,L);return Tn=null,ee}catch(W){if(W===An||W===bi)throw W;var be=ht(29,W,null,A.mode);return be.lanes=L,be.return=A,be}finally{}}}var Wa=jo(!0),Eo=jo(!1),ba=!1;function vr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function br(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Se&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=mi(e),so(e,null,a),t}return fi(e,n,t,a),mi(e)}function fl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,pc(e,a)}}function xr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?l=s=c:s=s.next=c,a=a.next}while(a!==null);s===null?l=s=t:s=s.next=t}else l=s=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Sr=!1;function ml(){if(Sr){var e=Cn;if(e!==null)throw e}}function pl(e,t,a,n){Sr=!1;var l=e.updateQueue;ba=!1;var s=l.firstBaseUpdate,c=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var b=f,D=b.next;b.next=null,c===null?s=D:c.next=D,c=b;var B=e.alternate;B!==null&&(B=B.updateQueue,f=B.lastBaseUpdate,f!==c&&(f===null?B.firstBaseUpdate=D:f.next=D,B.lastBaseUpdate=b))}if(s!==null){var q=l.baseState;c=0,B=D=b=null,f=s;do{var O=f.lane&-536870913,k=O!==f.lane;if(k?(pe&O)===O:(n&O)===O){O!==0&&O===En&&(Sr=!0),B!==null&&(B=B.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var K=e,ae=f;O=t;var Te=a;switch(ae.tag){case 1:if(K=ae.payload,typeof K=="function"){q=K.call(Te,q,O);break e}q=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=ae.payload,O=typeof K=="function"?K.call(Te,q,O):K,O==null)break e;q=N({},q,O);break e;case 2:ba=!0}}O=f.callback,O!==null&&(e.flags|=64,k&&(e.flags|=8192),k=l.callbacks,k===null?l.callbacks=[O]:k.push(O))}else k={lane:O,tag:f.tag,payload:f.payload,callback:f.callback,next:null},B===null?(D=B=k,b=q):B=B.next=k,c|=O;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;k=f,f=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);B===null&&(b=q),l.baseState=b,l.firstBaseUpdate=D,l.lastBaseUpdate=B,s===null&&(l.shared.lanes=0),Aa|=c,e.lanes=c,e.memoizedState=q}}function Co(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Ao(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Co(a[e],t)}var wn=E(null),ji=E(0);function To(e,t){e=ia,Z(ji,e),Z(wn,t),ia=e|t.baseLanes}function Nr(){Z(ji,ia),Z(wn,wn.current)}function jr(){ia=ji.current,H(wn),H(ji)}var gt=E(null),Dt=null;function Na(e){var t=e.alternate;Z(qe,qe.current&1),Z(gt,e),Dt===null&&(t===null||wn.current!==null||t.memoizedState!==null)&&(Dt=e)}function Er(e){Z(qe,qe.current),Z(gt,e),Dt===null&&(Dt=e)}function wo(e){e.tag===22?(Z(qe,qe.current),Z(gt,e),Dt===null&&(Dt=e)):ja()}function ja(){Z(qe,qe.current),Z(gt,gt.current)}function yt(e){H(gt),Dt===e&&(Dt=null),H(qe)}var qe=E(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_u(a)||Ou(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wt=0,ie=null,Ce=null,Fe=null,Ci=!1,Dn=!1,Ia=!1,Ai=0,hl=0,_n=null,hh=0;function Le(){throw Error(o(321))}function Cr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!pt(e[a],t[a]))return!1;return!0}function Ar(e,t,a,n,l,s){return Wt=s,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?dd:Gr,Ia=!1,s=a(n,l),Ia=!1,Dn&&(s=_o(t,a,n,l)),Do(e),s}function Do(e){U.H=vl;var t=Ce!==null&&Ce.next!==null;if(Wt=0,Fe=Ce=ie=null,Ci=!1,hl=0,_n=null,t)throw Error(o(300));e===null||Xe||(e=e.dependencies,e!==null&&gi(e)&&(Xe=!0))}function _o(e,t,a,n){ie=e;var l=0;do{if(Dn&&(_n=null),hl=0,Dn=!1,25<=l)throw Error(o(301));if(l+=1,Fe=Ce=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}U.H=fd,s=t(a,n)}while(Dn);return s}function gh(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?gl(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(ie.flags|=1024),t}function Tr(){var e=Ai!==0;return Ai=0,e}function wr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Dr(e){if(Ci){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ci=!1}Wt=0,Fe=Ce=ie=null,Dn=!1,hl=Ai=0,_n=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ie.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ge(){if(Ce===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Fe===null?ie.memoizedState:Fe.next;if(t!==null)Fe=t,Ce=e;else{if(e===null)throw ie.alternate===null?Error(o(467)):Error(o(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Fe===null?ie.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(e){var t=hl;return hl+=1,_n===null&&(_n=[]),e=xo(_n,e,t),t=ie,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?dd:Gr),e}function wi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gl(e);if(e.$$typeof===Y)return Pe(e)}throw Error(o(438,String(e)))}function _r(e){var t=null,a=ie.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ie.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ti(),ie.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ue;return t.index++,a}function It(e,t){return typeof t=="function"?t(e):t}function Di(e){var t=Ge();return Or(t,Ce,e)}function Or(e,t,a){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var l=e.baseQueue,s=n.pending;if(s!==null){if(l!==null){var c=l.next;l.next=s.next,s.next=c}t.baseQueue=l=s,n.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var f=c=null,b=null,D=t,B=!1;do{var q=D.lane&-536870913;if(q!==D.lane?(pe&q)===q:(Wt&q)===q){var O=D.revertLane;if(O===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),q===En&&(B=!0);else if((Wt&O)===O){D=D.next,O===En&&(B=!0);continue}else q={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},b===null?(f=b=q,c=s):b=b.next=q,ie.lanes|=O,Aa|=O;q=D.action,Ia&&a(s,q),s=D.hasEagerState?D.eagerState:a(s,q)}else O={lane:q,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},b===null?(f=b=O,c=s):b=b.next=O,ie.lanes|=q,Aa|=q;D=D.next}while(D!==null&&D!==t);if(b===null?c=s:b.next=f,!pt(s,e.memoizedState)&&(Xe=!0,B&&(a=Cn,a!==null)))throw a;e.memoizedState=s,e.baseState=c,e.baseQueue=b,n.lastRenderedState=s}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Rr(e){var t=Ge(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,s=t.memoizedState;if(l!==null){a.pending=null;var c=l=l.next;do s=e(s,c.action),c=c.next;while(c!==l);pt(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function Oo(e,t,a){var n=ie,l=Ge(),s=ve;if(s){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!pt((Ce||l).memoizedState,a);if(c&&(l.memoizedState=a,Xe=!0),l=l.queue,Mr(ko.bind(null,n,l,e),[e]),l.getSnapshot!==t||c||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,On(9,{destroy:void 0},zo.bind(null,n,l,a,t),null),we===null)throw Error(o(349));s||(Wt&127)!==0||Ro(n,t,a)}return a}function Ro(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ie.updateQueue,t===null?(t=Ti(),ie.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function zo(e,t,a,n){t.value=a,t.getSnapshot=n,Mo(t)&&Uo(e)}function ko(e,t,a){return a(function(){Mo(t)&&Uo(e)})}function Mo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!pt(e,a)}catch{return!0}}function Uo(e){var t=Fa(e,2);t!==null&&ot(t,e,2)}function zr(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),Ia){fa(!0);try{a()}finally{fa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},t}function Bo(e,t,a,n){return e.baseState=a,Or(e,Ce,typeof n=="function"?n:It)}function yh(e,t,a,n,l){if(Ri(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};U.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,Lo(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Lo(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var s=U.T,c={};U.T=c;try{var f=a(l,n),b=U.S;b!==null&&b(c,f),Ho(e,t,f)}catch(D){kr(e,t,D)}finally{s!==null&&c.types!==null&&(s.types=c.types),U.T=s}}else try{s=a(l,n),Ho(e,t,s)}catch(D){kr(e,t,D)}}function Ho(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){qo(e,t,n)},function(n){return kr(e,t,n)}):qo(e,t,a)}function qo(e,t,a){t.status="fulfilled",t.value=a,Go(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Lo(e,a)))}function kr(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Go(t),t=t.next;while(t!==n)}e.action=null}function Go(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yo(e,t){return t}function Fo(e,t){if(ve){var a=we.formState;if(a!==null){e:{var n=ie;if(ve){if(Re){t:{for(var l=Re,s=wt;l.nodeType!==8;){if(!s){l=null;break t}if(l=_t(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Re=_t(l.nextSibling),n=l.data==="F!";break e}}ya(n)}n=!1}n&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},a.queue=n,a=ud.bind(null,ie,n),n.dispatch=a,n=zr(!1),s=qr.bind(null,ie,!1,n.queue),n=nt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=yh.bind(null,ie,l,s,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Xo(e){var t=Ge();return Zo(t,Ce,e)}function Zo(e,t,a){if(t=Or(e,t,Yo)[0],e=Di(It)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=gl(t)}catch(c){throw c===An?bi:c}else n=t;t=Ge();var l=t.queue,s=l.dispatch;return a!==t.memoizedState&&(ie.flags|=2048,On(9,{destroy:void 0},vh.bind(null,l,a),null)),[n,s,e]}function vh(e,t){e.action=t}function Vo(e){var t=Ge(),a=Ce;if(a!==null)return Zo(t,a,e);Ge(),t=t.memoizedState,a=Ge();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function On(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ie.updateQueue,t===null&&(t=Ti(),ie.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Qo(){return Ge().memoizedState}function _i(e,t,a,n){var l=nt();ie.flags|=e,l.memoizedState=On(1|t,{destroy:void 0},a,n===void 0?null:n)}function Oi(e,t,a,n){var l=Ge();n=n===void 0?null:n;var s=l.memoizedState.inst;Ce!==null&&n!==null&&Cr(n,Ce.memoizedState.deps)?l.memoizedState=On(t,s,a,n):(ie.flags|=e,l.memoizedState=On(1|t,s,a,n))}function $o(e,t){_i(8390656,8,e,t)}function Mr(e,t){Oi(2048,8,e,t)}function bh(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=Ti(),ie.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ko(e){var t=Ge().memoizedState;return bh({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Jo(e,t){return Oi(4,2,e,t)}function Wo(e,t){return Oi(4,4,e,t)}function Io(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Po(e,t,a){a=a!=null?a.concat([e]):null,Oi(4,4,Io.bind(null,t,e),a)}function Ur(){}function ed(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Cr(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function td(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Cr(t,n[1]))return n[0];if(n=e(),Ia){fa(!0);try{e()}finally{fa(!1)}}return a.memoizedState=[n,t],n}function Br(e,t,a){return a===void 0||(Wt&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=af(),ie.lanes|=e,Aa|=e,a)}function ad(e,t,a,n){return pt(a,t)?a:wn.current!==null?(e=Br(e,a,n),pt(e,t)||(Xe=!0),e):(Wt&42)===0||(Wt&1073741824)!==0&&(pe&261930)===0?(Xe=!0,e.memoizedState=a):(e=af(),ie.lanes|=e,Aa|=e,t)}function nd(e,t,a,n,l){var s=X.p;X.p=s!==0&&8>s?s:8;var c=U.T,f={};U.T=f,qr(e,!1,t,a);try{var b=l(),D=U.S;if(D!==null&&D(f,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var B=ph(b,n);yl(e,t,B,xt(e))}else yl(e,t,n,xt(e))}catch(q){yl(e,t,{then:function(){},status:"rejected",reason:q},xt())}finally{X.p=s,c!==null&&f.types!==null&&(c.types=f.types),U.T=c}}function xh(){}function Lr(e,t,a,n){if(e.tag!==5)throw Error(o(476));var l=ld(e).queue;nd(e,l,t,I,a===null?xh:function(){return id(e),a(n)})}function ld(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function id(e){var t=ld(e);t.next===null&&(t=e.alternate.memoizedState),yl(e,t.next.queue,{},xt())}function Hr(){return Pe(kl)}function sd(){return Ge().memoizedState}function rd(){return Ge().memoizedState}function Sh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=xt();e=xa(a);var n=Sa(t,e,a);n!==null&&(ot(n,t,a),fl(n,t,a)),t={cache:pr()},e.payload=t;return}t=t.return}}function Nh(e,t,a){var n=xt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ri(e)?cd(t,a):(a=nr(e,t,a,n),a!==null&&(ot(a,e,n),od(a,t,n)))}function ud(e,t,a){var n=xt();yl(e,t,a,n)}function yl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ri(e))cd(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,f=s(c,a);if(l.hasEagerState=!0,l.eagerState=f,pt(f,c))return fi(e,t,l,0),we===null&&di(),!1}catch{}finally{}if(a=nr(e,t,l,n),a!==null)return ot(a,e,n),od(a,t,n),!0}return!1}function qr(e,t,a,n){if(n={lane:2,revertLane:vu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ri(e)){if(t)throw Error(o(479))}else t=nr(e,a,n,2),t!==null&&ot(t,e,2)}function Ri(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function cd(e,t){Dn=Ci=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function od(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,pc(e,a)}}var vl={readContext:Pe,use:wi,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};vl.useEffectEvent=Le;var dd={readContext:Pe,use:wi,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:$o,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,_i(4194308,4,Io.bind(null,t,e),a)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){_i(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var n=e();if(Ia){fa(!0);try{e()}finally{fa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=nt();if(a!==void 0){var l=a(t);if(Ia){fa(!0);try{a(t)}finally{fa(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Nh.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=zr(e);var t=e.queue,a=ud.bind(null,ie,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ur,useDeferredValue:function(e,t){var a=nt();return Br(a,e,t)},useTransition:function(){var e=zr(!1);return e=nd.bind(null,ie,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ie,l=nt();if(ve){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),we===null)throw Error(o(349));(pe&127)!==0||Ro(n,t,a)}l.memoizedState=a;var s={value:a,getSnapshot:t};return l.queue=s,$o(ko.bind(null,n,s,e),[e]),n.flags|=2048,On(9,{destroy:void 0},zo.bind(null,n,s,a,t),null),a},useId:function(){var e=nt(),t=we.identifierPrefix;if(ve){var a=Lt,n=Bt;a=(n&~(1<<32-mt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ai++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=hh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hr,useFormState:Fo,useActionState:Fo,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=qr.bind(null,ie,!0,a),a.dispatch=t,[e,t]},useMemoCache:_r,useCacheRefresh:function(){return nt().memoizedState=Sh.bind(null,ie)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((Se&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Gr={readContext:Pe,use:wi,useCallback:ed,useContext:Pe,useEffect:Mr,useImperativeHandle:Po,useInsertionEffect:Jo,useLayoutEffect:Wo,useMemo:td,useReducer:Di,useRef:Qo,useState:function(){return Di(It)},useDebugValue:Ur,useDeferredValue:function(e,t){var a=Ge();return ad(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Di(It)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Oo,useId:sd,useHostTransitionStatus:Hr,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){var a=Ge();return Bo(a,Ce,e,t)},useMemoCache:_r,useCacheRefresh:rd};Gr.useEffectEvent=Ko;var fd={readContext:Pe,use:wi,useCallback:ed,useContext:Pe,useEffect:Mr,useImperativeHandle:Po,useInsertionEffect:Jo,useLayoutEffect:Wo,useMemo:td,useReducer:Rr,useRef:Qo,useState:function(){return Rr(It)},useDebugValue:Ur,useDeferredValue:function(e,t){var a=Ge();return Ce===null?Br(a,e,t):ad(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Rr(It)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Oo,useId:sd,useHostTransitionStatus:Hr,useFormState:Vo,useActionState:Vo,useOptimistic:function(e,t){var a=Ge();return Ce!==null?Bo(a,Ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_r,useCacheRefresh:rd};fd.useEffectEvent=Ko;function Yr(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Fr={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=xt(),l=xa(n);l.payload=t,a!=null&&(l.callback=a),t=Sa(e,l,n),t!==null&&(ot(t,e,n),fl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=xt(),l=xa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Sa(e,l,n),t!==null&&(ot(t,e,n),fl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=xt(),n=xa(a);n.tag=2,t!=null&&(n.callback=t),t=Sa(e,n,a),t!==null&&(ot(t,e,a),fl(t,e,a))}};function md(e,t,a,n,l,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,c):t.prototype&&t.prototype.isPureReactComponent?!ll(a,n)||!ll(l,s):!0}function pd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Fr.enqueueReplaceState(t,t.state,null)}function Pa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function hd(e){oi(e)}function gd(e){console.error(e)}function yd(e){oi(e)}function zi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function vd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Xr(e,t,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){zi(e,t)},a}function bd(e){return e=xa(e),e.tag=3,e}function xd(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var s=n.value;e.payload=function(){return l(s)},e.callback=function(){vd(t,a,n)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){vd(t,a,n),typeof l!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function jh(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&jn(t,a,l,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:return Dt===null?Zi():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===xi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),hu(e,n,l)),!1;case 22:return a.flags|=65536,n===xi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),hu(e,n,l)),!1}throw Error(o(435,a.tag))}return hu(e,n,l),Zi(),!1}if(ve)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==cr&&(e=Error(o(422),{cause:n}),rl(Ct(e,a)))):(n!==cr&&(t=Error(o(423),{cause:n}),rl(Ct(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Ct(n,a),l=Xr(e.stateNode,n,l),xr(e,l),He!==4&&(He=2)),!1;var s=Error(o(520),{cause:n});if(s=Ct(s,a),Al===null?Al=[s]:Al.push(s),He!==4&&(He=2),t===null)return!0;n=Ct(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Xr(a.stateNode,n,e),xr(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))))return a.flags|=65536,l&=-l,a.lanes|=l,l=bd(l),xd(l,e,a,n),xr(a,l),!1}a=a.return}while(a!==null);return!1}var Zr=Error(o(461)),Xe=!1;function et(e,t,a,n){t.child=e===null?Eo(t,null,a,n):Wa(t,e.child,a,n)}function Sd(e,t,a,n,l){a=a.render;var s=t.ref;if("ref"in n){var c={};for(var f in n)f!=="ref"&&(c[f]=n[f])}else c=n;return Qa(t),n=Ar(e,t,a,c,s,l),f=Tr(),e!==null&&!Xe?(wr(e,t,l),Pt(e,t,l)):(ve&&f&&rr(t),t.flags|=1,et(e,t,n,l),t.child)}function Nd(e,t,a,n,l){if(e===null){var s=a.type;return typeof s=="function"&&!lr(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,jd(e,t,s,n,l)):(e=pi(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Pr(e,l)){var c=s.memoizedProps;if(a=a.compare,a=a!==null?a:ll,a(c,n)&&e.ref===t.ref)return Pt(e,t,l)}return t.flags|=1,e=Qt(s,n),e.ref=t.ref,e.return=t,t.child=e}function jd(e,t,a,n,l){if(e!==null){var s=e.memoizedProps;if(ll(s,n)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=n=s,Pr(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Pt(e,t,l)}return Vr(e,t,a,n,l)}function Ed(e,t,a,n){var l=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~s}else n=0,t.child=null;return Cd(e,t,s,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,s!==null?s.cachePool:null),s!==null?To(t,s):Nr(),wo(t);else return n=t.lanes=536870912,Cd(e,t,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(vi(t,s.cachePool),To(t,s),ja(),t.memoizedState=null):(e!==null&&vi(t,null),Nr(),ja());return et(e,t,l,a),t.child}function bl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Cd(e,t,a,n,l){var s=gr();return s=s===null?null:{parent:Ye._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&vi(t,null),Nr(),wo(t),e!==null&&jn(e,t,n,!0),t.childLanes=l,null}function ki(e,t){return t=Ui({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ad(e,t,a){return Wa(t,e.child,null,a),e=ki(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function Eh(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(n.mode==="hidden")return e=ki(t,n),t.lanes=536870912,bl(null,e);if(Er(t),(e=Re)?(e=Hf(e,wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Bt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=uo(e),a.return=t,t.child=a,Ie=t,Re=null)):e=null,e===null)throw ya(t);return t.lanes=536870912,null}return ki(t,n)}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(Er(t),l)if(t.flags&256)t.flags&=-257,t=Ad(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Xe||jn(e,t,a,!1),l=(a&e.childLanes)!==0,Xe||l){if(n=we,n!==null&&(c=hc(n,a),c!==0&&c!==s.retryLane))throw s.retryLane=c,Fa(e,c),ot(n,e,c),Zr;Zi(),t=Ad(e,t,a)}else e=s.treeContext,Re=_t(c.nextSibling),Ie=t,ve=!0,ga=null,wt=!1,e!==null&&fo(t,e),t=ki(t,n),t.flags|=4096;return t}return e=Qt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Mi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Vr(e,t,a,n,l){return Qa(t),a=Ar(e,t,a,n,void 0,l),n=Tr(),e!==null&&!Xe?(wr(e,t,l),Pt(e,t,l)):(ve&&n&&rr(t),t.flags|=1,et(e,t,a,l),t.child)}function Td(e,t,a,n,l,s){return Qa(t),t.updateQueue=null,a=_o(t,n,a,l),Do(e),n=Tr(),e!==null&&!Xe?(wr(e,t,s),Pt(e,t,s)):(ve&&n&&rr(t),t.flags|=1,et(e,t,a,s),t.child)}function wd(e,t,a,n,l){if(Qa(t),t.stateNode===null){var s=bn,c=a.contextType;typeof c=="object"&&c!==null&&(s=Pe(c)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Fr,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},vr(t),c=a.contextType,s.context=typeof c=="object"&&c!==null?Pe(c):bn,s.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Yr(t,a,c,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&Fr.enqueueReplaceState(s,s.state,null),pl(t,n,s,l),ml(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var f=t.memoizedProps,b=Pa(a,f);s.props=b;var D=s.context,B=a.contextType;c=bn,typeof B=="object"&&B!==null&&(c=Pe(B));var q=a.getDerivedStateFromProps;B=typeof q=="function"||typeof s.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,B||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f||D!==c)&&pd(t,s,n,c),ba=!1;var O=t.memoizedState;s.state=O,pl(t,n,s,l),ml(),D=t.memoizedState,f||O!==D||ba?(typeof q=="function"&&(Yr(t,a,q,n),D=t.memoizedState),(b=ba||md(t,a,b,n,O,D,c))?(B||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=D),s.props=n,s.state=D,s.context=c,n=b):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,br(e,t),c=t.memoizedProps,B=Pa(a,c),s.props=B,q=t.pendingProps,O=s.context,D=a.contextType,b=bn,typeof D=="object"&&D!==null&&(b=Pe(D)),f=a.getDerivedStateFromProps,(D=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==q||O!==b)&&pd(t,s,n,b),ba=!1,O=t.memoizedState,s.state=O,pl(t,n,s,l),ml();var k=t.memoizedState;c!==q||O!==k||ba||e!==null&&e.dependencies!==null&&gi(e.dependencies)?(typeof f=="function"&&(Yr(t,a,f,n),k=t.memoizedState),(B=ba||md(t,a,B,n,O,k,b)||e!==null&&e.dependencies!==null&&gi(e.dependencies))?(D||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,k,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,k,b)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),s.props=n,s.state=k,s.context=b,n=B):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Mi(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Wa(t,e.child,null,l),t.child=Wa(t,null,a,l)):et(e,t,a,l),t.memoizedState=s.state,e=t.child):e=Pt(e,t,l),e}function Dd(e,t,a,n){return Za(),t.flags|=256,et(e,t,a,n),t.child}var Qr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $r(e){return{baseLanes:e,cachePool:vo()}}function Kr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function _d(e,t,a){var n=t.pendingProps,l=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(l?Na(t):ja(),(e=Re)?(e=Hf(e,wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Bt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=uo(e),a.return=t,t.child=a,Ie=t,Re=null)):e=null,e===null)throw ya(t);return Ou(e)?t.lanes=32:t.lanes=536870912,null}var f=n.children;return n=n.fallback,l?(ja(),l=t.mode,f=Ui({mode:"hidden",children:f},l),n=Xa(n,l,a,null),f.return=t,n.return=t,f.sibling=n,t.child=f,n=t.child,n.memoizedState=$r(a),n.childLanes=Kr(e,c,a),t.memoizedState=Qr,bl(null,n)):(Na(t),Jr(t,f))}var b=e.memoizedState;if(b!==null&&(f=b.dehydrated,f!==null)){if(s)t.flags&256?(Na(t),t.flags&=-257,t=Wr(e,t,a)):t.memoizedState!==null?(ja(),t.child=e.child,t.flags|=128,t=null):(ja(),f=n.fallback,l=t.mode,n=Ui({mode:"visible",children:n.children},l),f=Xa(f,l,a,null),f.flags|=2,n.return=t,f.return=t,n.sibling=f,t.child=n,Wa(t,e.child,null,a),n=t.child,n.memoizedState=$r(a),n.childLanes=Kr(e,c,a),t.memoizedState=Qr,t=bl(null,n));else if(Na(t),Ou(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var D=c.dgst;c=D,n=Error(o(419)),n.stack="",n.digest=c,rl({value:n,source:null,stack:null}),t=Wr(e,t,a)}else if(Xe||jn(e,t,a,!1),c=(a&e.childLanes)!==0,Xe||c){if(c=we,c!==null&&(n=hc(c,a),n!==0&&n!==b.retryLane))throw b.retryLane=n,Fa(e,n),ot(c,e,n),Zr;_u(f)||Zi(),t=Wr(e,t,a)}else _u(f)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Re=_t(f.nextSibling),Ie=t,ve=!0,ga=null,wt=!1,e!==null&&fo(t,e),t=Jr(t,n.children),t.flags|=4096);return t}return l?(ja(),f=n.fallback,l=t.mode,b=e.child,D=b.sibling,n=Qt(b,{mode:"hidden",children:n.children}),n.subtreeFlags=b.subtreeFlags&65011712,D!==null?f=Qt(D,f):(f=Xa(f,l,a,null),f.flags|=2),f.return=t,n.return=t,n.sibling=f,t.child=n,bl(null,n),n=t.child,f=e.child.memoizedState,f===null?f=$r(a):(l=f.cachePool,l!==null?(b=Ye._currentValue,l=l.parent!==b?{parent:b,pool:b}:l):l=vo(),f={baseLanes:f.baseLanes|a,cachePool:l}),n.memoizedState=f,n.childLanes=Kr(e,c,a),t.memoizedState=Qr,bl(e.child,n)):(Na(t),a=e.child,e=a.sibling,a=Qt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Jr(e,t){return t=Ui({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ui(e,t){return e=ht(22,e,null,t),e.lanes=0,e}function Wr(e,t,a){return Wa(t,e.child,null,a),e=Jr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Od(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),fr(e.return,t,a)}function Ir(e,t,a,n,l,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=a,c.tailMode=l,c.treeForkCount=s)}function Rd(e,t,a){var n=t.pendingProps,l=n.revealOrder,s=n.tail;n=n.children;var c=qe.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,Z(qe,c),et(e,t,n,a),n=ve?sl:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,a,t);else if(e.tag===19)Od(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Ei(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Ir(t,!1,l,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ei(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Ir(t,!0,a,null,s,n);break;case"together":Ir(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Aa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Pr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gi(e)))}function Ch(e,t,a){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),va(t,Ye,e.memoizedState.cache),Za();break;case 27:case 5:Zn(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Er(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Na(t),t.flags|=128,null):(a&t.child.childLanes)!==0?_d(e,t,a):(Na(t),e=Pt(e,t,a),e!==null?e.sibling:null);Na(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(jn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Rd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(qe,qe.current),n)break;return null;case 22:return t.lanes=0,Ed(e,t,a,t.pendingProps);case 24:va(t,Ye,e.memoizedState.cache)}return Pt(e,t,a)}function zd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Pr(e,a)&&(t.flags&128)===0)return Xe=!1,Ch(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,ve&&(t.flags&1048576)!==0&&oo(t,sl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")lr(e)?(n=Pa(e,n),t.tag=1,t=wd(null,t,e,n,a)):(t.tag=0,t=Vr(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===P){t.tag=11,t=Sd(null,t,e,n,a);break e}else if(l===J){t.tag=14,t=Nd(null,t,e,n,a);break e}}throw t=De(e)||e,Error(o(306,t,""))}}return t;case 0:return Vr(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Pa(n,t.pendingProps),wd(e,t,n,l,a);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(o(387));n=t.pendingProps;var s=t.memoizedState;l=s.element,br(e,t),pl(t,n,null,a);var c=t.memoizedState;if(n=c.cache,va(t,Ye,n),n!==s.cache&&mr(t,[Ye],a,!0),ml(),n=c.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Dd(e,t,n,a);break e}else if(n!==l){l=Ct(Error(o(424)),t),rl(l),t=Dd(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=_t(e.firstChild),Ie=t,ve=!0,ga=null,wt=!0,a=Eo(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Za(),n===l){t=Pt(e,t,a);break e}et(e,t,n,a)}t=t.child}return t;case 26:return Mi(e,t),e===null?(a=Zf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,n=Ii(se.current).createElement(a),n[We]=t,n[lt]=e,tt(n,a,e),$e(n),t.stateNode=n):t.memoizedState=Zf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zn(t),e===null&&ve&&(n=t.stateNode=Yf(t.type,t.pendingProps,se.current),Ie=t,wt=!0,l=Re,Oa(t.type)?(Ru=l,Re=_t(n.firstChild)):Re=l),et(e,t,t.pendingProps.children,a),Mi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((l=n=Re)&&(n=tg(n,t.type,t.pendingProps,wt),n!==null?(t.stateNode=n,Ie=t,Re=_t(n.firstChild),wt=!1,l=!0):l=!1),l||ya(t)),Zn(t),l=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,n=s.children,Tu(l,s)?n=null:c!==null&&Tu(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=Ar(e,t,gh,null,null,a),kl._currentValue=l),Mi(e,t),et(e,t,n,a),t.child;case 6:return e===null&&ve&&((e=a=Re)&&(a=ag(a,t.pendingProps,wt),a!==null?(t.stateNode=a,Ie=t,Re=null,e=!0):e=!1),e||ya(t)),null;case 13:return _d(e,t,a);case 4:return Je(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Wa(t,null,n,a):et(e,t,n,a),t.child;case 11:return Sd(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,va(t,t.type,n.value),et(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Qa(t),l=Pe(l),n=n(l),t.flags|=1,et(e,t,n,a),t.child;case 14:return Nd(e,t,t.type,t.pendingProps,a);case 15:return jd(e,t,t.type,t.pendingProps,a);case 19:return Rd(e,t,a);case 31:return Eh(e,t,a);case 22:return Ed(e,t,a,t.pendingProps);case 24:return Qa(t),n=Pe(Ye),e===null?(l=gr(),l===null&&(l=we,s=pr(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=a),l=s),t.memoizedState={parent:n,cache:l},vr(t),va(t,Ye,l)):((e.lanes&a)!==0&&(br(e,t),pl(t,null,null,a),ml()),l=e.memoizedState,s=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),va(t,Ye,n)):(n=s.cache,va(t,Ye,n),n!==l.cache&&mr(t,[Ye],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ea(e){e.flags|=4}function eu(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(rf())e.flags|=8192;else throw Ja=xi,yr}else e.flags&=-16777217}function kd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(t))if(rf())e.flags|=8192;else throw Ja=xi,yr}function Bi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fc():536870912,e.lanes|=t,Mn|=t)}function xl(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ah(e,t,a){var n=t.pendingProps;switch(ur(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Jt(Ye),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Nn(t)?ea(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,or())),ze(t),null;case 26:var l=t.type,s=t.memoizedState;return e===null?(ea(t),s!==null?(ze(t),kd(t,s)):(ze(t),eu(t,l,null,n,a))):s?s!==e.memoizedState?(ea(t),ze(t),kd(t,s)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ea(t),ze(t),eu(t,l,e,n,a)),null;case 27:if($l(t),a=se.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ea(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return ze(t),null}e=$.current,Nn(t)?mo(t):(e=Yf(l,n,a),t.stateNode=e,ea(t))}return ze(t),null;case 5:if($l(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ea(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return ze(t),null}if(s=$.current,Nn(t))mo(t);else{var c=Ii(se.current);switch(s){case 1:s=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=c.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?c.createElement("select",{is:n.is}):c.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?c.createElement(l,{is:n.is}):c.createElement(l)}}s[We]=t,s[lt]=n;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=s;e:switch(tt(s,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ea(t)}}return ze(t),eu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ea(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=se.current,Nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ie,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Of(e.nodeValue,a)),e||ya(t,!0)}else e=Ii(e).createTextNode(n),e[We]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Nn(t),a!==null){if(e===null){if(!n)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[We]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return ze(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[We]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else l=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Bi(t,t.updateQueue),ze(t),null);case 4:return Oe(),e===null&&Nu(t.stateNode.containerInfo),ze(t),null;case 10:return Jt(t.type),ze(t),null;case 19:if(H(qe),n=t.memoizedState,n===null)return ze(t),null;if(l=(t.flags&128)!==0,s=n.rendering,s===null)if(l)xl(n,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ei(e),s!==null){for(t.flags|=128,xl(n,!1),e=s.updateQueue,t.updateQueue=e,Bi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ro(a,e),a=a.sibling;return Z(qe,qe.current&1|2),ve&&$t(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&dt()>Yi&&(t.flags|=128,l=!0,xl(n,!1),t.lanes=4194304)}else{if(!l)if(e=Ei(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Bi(t,e),xl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ve)return ze(t),null}else 2*dt()-n.renderingStartTime>Yi&&a!==536870912&&(t.flags|=128,l=!0,xl(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=dt(),e.sibling=null,a=qe.current,Z(qe,l?a&1|2:a&1),ve&&$t(t,n.treeForkCount),e):(ze(t),null);case 22:case 23:return yt(t),jr(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Bi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&H($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Jt(Ye),ze(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Th(e,t){switch(ur(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(Ye),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $l(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(o(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(qe),null;case 4:return Oe(),null;case 10:return Jt(t.type),null;case 22:case 23:return yt(t),jr(),e!==null&&H($a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jt(Ye),null;case 25:return null;default:return null}}function Md(e,t){switch(ur(t),t.tag){case 3:Jt(Ye),Oe();break;case 26:case 27:case 5:$l(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:H(qe);break;case 10:Jt(t.type);break;case 22:case 23:yt(t),jr(),e!==null&&H($a);break;case 24:Jt(Ye)}}function Sl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var s=a.create,c=a.inst;n=s(),c.destroy=n}a=a.next}while(a!==l)}}catch(f){Ee(t,t.return,f)}}function Ea(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var s=l.next;n=s;do{if((n.tag&e)===e){var c=n.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,l=t;var b=a,D=f;try{D()}catch(B){Ee(l,b,B)}}}n=n.next}while(n!==s)}}catch(B){Ee(t,t.return,B)}}function Ud(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ao(t,a)}catch(n){Ee(e,e.return,n)}}}function Bd(e,t,a){a.props=Pa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ee(e,t,n)}}function Nl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){Ee(e,t,l)}}function Ht(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ee(e,t,l)}else a.current=null}function Ld(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Ee(e,e.return,l)}}function tu(e,t,a){try{var n=e.stateNode;Kh(n,e.type,a,t),n[lt]=t}catch(l){Ee(e,e.return,l)}}function Hd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nu(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(n!==4&&(n===27&&Oa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(nu(e,t,a),e=e.sibling;e!==null;)nu(e,t,a),e=e.sibling}function Li(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Li(e,t,a),e=e.sibling;e!==null;)Li(e,t,a),e=e.sibling}function qd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);tt(t,n,a),t[We]=e,t[lt]=a}catch(s){Ee(e,e.return,s)}}var ta=!1,Ze=!1,lu=!1,Gd=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function wh(e,t){if(e=e.containerInfo,Cu=is,e=Ic(e),Ws(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var c=0,f=-1,b=-1,D=0,B=0,q=e,O=null;t:for(;;){for(var k;q!==a||l!==0&&q.nodeType!==3||(f=c+l),q!==s||n!==0&&q.nodeType!==3||(b=c+n),q.nodeType===3&&(c+=q.nodeValue.length),(k=q.firstChild)!==null;)O=q,q=k;for(;;){if(q===e)break t;if(O===a&&++D===l&&(f=c),O===s&&++B===n&&(b=c),(k=q.nextSibling)!==null)break;q=O,O=q.parentNode}q=k}a=f===-1||b===-1?null:{start:f,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Au={focusedElem:e,selectionRange:a},is=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,l=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var K=Pa(a.type,l);e=n.getSnapshotBeforeUpdate(K,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ee(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Du(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function Yd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),n&4&&Sl(5,a);break;case 1:if(na(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){Ee(a,a.return,c)}else{var l=Pa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ee(a,a.return,c)}}n&64&&Ud(a),n&512&&Nl(a,a.return);break;case 3:if(na(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ao(e,t)}catch(c){Ee(a,a.return,c)}}break;case 27:t===null&&n&4&&qd(a);case 26:case 5:na(e,a),t===null&&n&4&&Ld(a),n&512&&Nl(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),n&4&&Zd(e,a);break;case 13:na(e,a),n&4&&Vd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bh.bind(null,a),ng(e,a))));break;case 22:if(n=a.memoizedState!==null||ta,!n){t=t!==null&&t.memoizedState!==null||Ze,l=ta;var s=Ze;ta=n,(Ze=t)&&!s?la(e,a,(a.subtreeFlags&8772)!==0):na(e,a),ta=l,Ze=s}break;case 30:break;default:na(e,a)}}function Fd(e){var t=e.alternate;t!==null&&(e.alternate=null,Fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ks(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,st=!1;function aa(e,t,a){for(a=a.child;a!==null;)Xd(e,t,a),a=a.sibling}function Xd(e,t,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Vn,a)}catch{}switch(a.tag){case 26:Ze||Ht(a,t),aa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||Ht(a,t);var n=ke,l=st;Oa(a.type)&&(ke=a.stateNode,st=!1),aa(e,t,a),Ol(a.stateNode),ke=n,st=l;break;case 5:Ze||Ht(a,t);case 6:if(n=ke,l=st,ke=null,aa(e,t,a),ke=n,st=l,ke!==null)if(st)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(s){Ee(a,t,s)}else try{ke.removeChild(a.stateNode)}catch(s){Ee(a,t,s)}break;case 18:ke!==null&&(st?(e=ke,Bf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fn(e)):Bf(ke,a.stateNode));break;case 4:n=ke,l=st,ke=a.stateNode.containerInfo,st=!0,aa(e,t,a),ke=n,st=l;break;case 0:case 11:case 14:case 15:Ea(2,a,t),Ze||Ea(4,a,t),aa(e,t,a);break;case 1:Ze||(Ht(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Bd(a,t,n)),aa(e,t,a);break;case 21:aa(e,t,a);break;case 22:Ze=(n=Ze)||a.memoizedState!==null,aa(e,t,a),Ze=n;break;default:aa(e,t,a)}}function Zd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fn(e)}catch(a){Ee(t,t.return,a)}}}function Vd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fn(e)}catch(a){Ee(t,t.return,a)}}function Dh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Gd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Gd),t;default:throw Error(o(435,e.tag))}}function Hi(e,t){var a=Dh(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Lh.bind(null,e,n);n.then(l,l)}})}function rt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],s=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Oa(f.type)){ke=f.stateNode,st=!1;break e}break;case 5:ke=f.stateNode,st=!1;break e;case 3:case 4:ke=f.stateNode.containerInfo,st=!0;break e}f=f.return}if(ke===null)throw Error(o(160));Xd(s,c,l),ke=null,st=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qd(t,e),t=t.sibling}var zt=null;function Qd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ut(e),n&4&&(Ea(3,e,e.return),Sl(3,e),Ea(5,e,e.return));break;case 1:rt(t,e),ut(e),n&512&&(Ze||a===null||Ht(a,a.return)),n&64&&ta&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=zt;if(rt(t,e),ut(e),n&512&&(Ze||a===null||Ht(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Kn]||s[We]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),tt(s,n,a),s[We]=e,$e(s),n=s;break e;case"link":var c=$f("link","href",l).get(n+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(s=c[f],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}s=l.createElement(n),tt(s,n,a),l.head.appendChild(s);break;case"meta":if(c=$f("meta","content",l).get(n+(a.content||""))){for(f=0;f<c.length;f++)if(s=c[f],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}s=l.createElement(n),tt(s,n,a),l.head.appendChild(s);break;default:throw Error(o(468,n))}s[We]=e,$e(s),n=s}e.stateNode=n}else Kf(l,e.type,e.stateNode);else e.stateNode=Qf(l,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?Kf(l,e.type,e.stateNode):Qf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&tu(e,e.memoizedProps,a.memoizedProps)}break;case 27:rt(t,e),ut(e),n&512&&(Ze||a===null||Ht(a,a.return)),a!==null&&n&4&&tu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,e),ut(e),n&512&&(Ze||a===null||Ht(a,a.return)),e.flags&32){l=e.stateNode;try{fn(l,"")}catch(K){Ee(e,e.return,K)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,tu(e,l,a!==null?a.memoizedProps:l)),n&1024&&(lu=!0);break;case 6:if(rt(t,e),ut(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(K){Ee(e,e.return,K)}}break;case 3:if(ts=null,l=zt,zt=Pi(t.containerInfo),rt(t,e),zt=l,ut(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(K){Ee(e,e.return,K)}lu&&(lu=!1,$d(e));break;case 4:n=zt,zt=Pi(e.stateNode.containerInfo),rt(t,e),ut(e),zt=n;break;case 12:rt(t,e),ut(e);break;case 31:rt(t,e),ut(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hi(e,n)));break;case 13:rt(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gi=dt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hi(e,n)));break;case 22:l=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,D=ta,B=Ze;if(ta=D||l,Ze=B||b,rt(t,e),Ze=B,ta=D,ut(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||b||ta||Ze||en(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(s=b.stateNode,l)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=b.stateNode;var q=b.memoizedProps.style,O=q!=null&&q.hasOwnProperty("display")?q.display:null;f.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(K){Ee(b,b.return,K)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(K){Ee(b,b.return,K)}}}else if(t.tag===18){if(a===null){b=t;try{var k=b.stateNode;l?Lf(k,!0):Lf(b.stateNode,!1)}catch(K){Ee(b,b.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Hi(e,a))));break;case 19:rt(t,e),ut(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hi(e,n)));break;case 30:break;case 21:break;default:rt(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Hd(n)){a=n;break}n=n.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var l=a.stateNode,s=au(e);Li(e,s,l);break;case 5:var c=a.stateNode;a.flags&32&&(fn(c,""),a.flags&=-33);var f=au(e);Li(e,f,c);break;case 3:case 4:var b=a.stateNode.containerInfo,D=au(e);nu(e,D,b);break;default:throw Error(o(161))}}catch(B){Ee(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $d(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$d(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yd(e,t.alternate,t),t=t.sibling}function en(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ea(4,t,t.return),en(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Bd(t,t.return,a),en(t);break;case 27:Ol(t.stateNode);case 26:case 5:Ht(t,t.return),en(t);break;case 22:t.memoizedState===null&&en(t);break;case 30:en(t);break;default:en(t)}e=e.sibling}}function la(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,s=t,c=s.flags;switch(s.tag){case 0:case 11:case 15:la(l,s,a),Sl(4,s);break;case 1:if(la(l,s,a),n=s,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){Ee(n,n.return,D)}if(n=s,l=n.updateQueue,l!==null){var f=n.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)Co(b[l],f)}catch(D){Ee(n,n.return,D)}}a&&c&64&&Ud(s),Nl(s,s.return);break;case 27:qd(s);case 26:case 5:la(l,s,a),a&&n===null&&c&4&&Ld(s),Nl(s,s.return);break;case 12:la(l,s,a);break;case 31:la(l,s,a),a&&c&4&&Zd(l,s);break;case 13:la(l,s,a),a&&c&4&&Vd(l,s);break;case 22:s.memoizedState===null&&la(l,s,a),Nl(s,s.return);break;case 30:break;default:la(l,s,a)}t=t.sibling}}function iu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ul(a))}function su(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e))}function kt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kd(e,t,a,n),t=t.sibling}function Kd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,n),l&2048&&Sl(9,t);break;case 1:kt(e,t,a,n);break;case 3:kt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e)));break;case 12:if(l&2048){kt(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,c=s.id,f=s.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Ee(t,t.return,b)}}else kt(e,t,a,n);break;case 31:kt(e,t,a,n);break;case 13:kt(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,c=t.alternate,t.memoizedState!==null?s._visibility&2?kt(e,t,a,n):jl(e,t):s._visibility&2?kt(e,t,a,n):(s._visibility|=2,Rn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&iu(c,t);break;case 24:kt(e,t,a,n),l&2048&&su(t.alternate,t);break;default:kt(e,t,a,n)}}function Rn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,c=t,f=a,b=n,D=c.flags;switch(c.tag){case 0:case 11:case 15:Rn(s,c,f,b,l),Sl(8,c);break;case 23:break;case 22:var B=c.stateNode;c.memoizedState!==null?B._visibility&2?Rn(s,c,f,b,l):jl(s,c):(B._visibility|=2,Rn(s,c,f,b,l)),l&&D&2048&&iu(c.alternate,c);break;case 24:Rn(s,c,f,b,l),l&&D&2048&&su(c.alternate,c);break;default:Rn(s,c,f,b,l)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:jl(a,n),l&2048&&iu(n.alternate,n);break;case 24:jl(a,n),l&2048&&su(n.alternate,n);break;default:jl(a,n)}t=t.sibling}}var El=8192;function zn(e,t,a){if(e.subtreeFlags&El)for(e=e.child;e!==null;)Jd(e,t,a),e=e.sibling}function Jd(e,t,a){switch(e.tag){case 26:zn(e,t,a),e.flags&El&&e.memoizedState!==null&&hg(a,zt,e.memoizedState,e.memoizedProps);break;case 5:zn(e,t,a);break;case 3:case 4:var n=zt;zt=Pi(e.stateNode.containerInfo),zn(e,t,a),zt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=El,El=16777216,zn(e,t,a),El=n):zn(e,t,a));break;default:zn(e,t,a)}}function Wd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,Pd(n,e)}Wd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Id(e),e=e.sibling}function Id(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qi(e)):Cl(e);break;default:Cl(e)}}function qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,Pd(n,e)}Wd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ea(8,t,t.return),qi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,qi(t));break;default:qi(t)}e=e.sibling}}function Pd(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:Ea(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ul(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ke=n;else e:for(a=e;Ke!==null;){n=Ke;var l=n.sibling,s=n.return;if(Fd(n),n===a){Ke=null;break e}if(l!==null){l.return=s,Ke=l;break e}Ke=s}}}var _h={getCacheForType:function(e){var t=Pe(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Pe(Ye).controller.signal}},Oh=typeof WeakMap=="function"?WeakMap:Map,Se=0,we=null,oe=null,pe=0,je=0,vt=null,Ca=!1,kn=!1,ru=!1,ia=0,He=0,Aa=0,tn=0,uu=0,bt=0,Mn=0,Al=null,ct=null,cu=!1,Gi=0,ef=0,Yi=1/0,Fi=null,Ta=null,Ve=0,wa=null,Un=null,sa=0,ou=0,du=null,tf=null,Tl=0,fu=null;function xt(){return(Se&2)!==0&&pe!==0?pe&-pe:U.T!==null?vu():gc()}function af(){if(bt===0)if((pe&536870912)===0||ve){var e=Wl;Wl<<=1,(Wl&3932160)===0&&(Wl=262144),bt=e}else bt=536870912;return e=gt.current,e!==null&&(e.flags|=32),bt}function ot(e,t,a){(e===we&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(Bn(e,0),Da(e,pe,bt,!1)),$n(e,a),((Se&2)===0||e!==we)&&(e===we&&((Se&2)===0&&(tn|=a),He===4&&Da(e,pe,bt,!1)),qt(e))}function nf(e,t,a){if((Se&6)!==0)throw Error(o(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Qn(e,t),l=n?kh(e,t):pu(e,t,!0),s=n;do{if(l===0){kn&&!n&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!Rh(a)){l=pu(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;l=Al;var b=f.current.memoizedState.isDehydrated;if(b&&(Bn(f,c).flags|=256),c=pu(f,c,!1),c!==2){if(ru&&!b){f.errorRecoveryDisabledLanes|=s,tn|=s,l=4;break e}s=ct,ct=l,s!==null&&(ct===null?ct=s:ct.push.apply(ct,s))}l=c}if(s=!1,l!==2)continue}}if(l===1){Bn(e,0),Da(e,t,0,!0);break}e:{switch(n=e,s=l,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Da(n,t,bt,!Ca);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(l=Gi+300-dt(),10<l)){if(Da(n,t,bt,!Ca),Pl(n,0,!0)!==0)break e;sa=t,n.timeoutHandle=Mf(lf.bind(null,n,a,ct,Fi,cu,t,bt,tn,Mn,Ca,s,"Throttled",-0,0),l);break e}lf(n,a,ct,Fi,cu,t,bt,tn,Mn,Ca,s,null,-0,0)}}break}while(!0);qt(e)}function lf(e,t,a,n,l,s,c,f,b,D,B,q,O,k){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Jd(t,s,q);var K=(s&62914560)===s?Gi-dt():(s&4194048)===s?ef-dt():0;if(K=gg(q,K),K!==null){sa=s,e.cancelPendingCommit=K(mf.bind(null,e,t,s,a,n,l,c,f,b,B,q,null,O,k)),Da(e,s,c,!D);return}}mf(e,t,s,a,n,l,c,f,b)}function Rh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],s=l.getSnapshot;l=l.value;try{if(!pt(s(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,n){t&=~uu,t&=~tn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var s=31-mt(l),c=1<<s;n[s]=-1,l&=~c}a!==0&&mc(e,a,t)}function Xi(){return(Se&6)===0?(wl(0),!1):!0}function mu(){if(oe!==null){if(je===0)var e=oe.return;else e=oe,Kt=Va=null,Dr(e),Tn=null,ol=0,e=oe;for(;e!==null;)Md(e.alternate,e),e=e.return;oe=null}}function Bn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ih(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,mu(),we=e,oe=a=Qt(e.current,null),pe=t,je=0,vt=null,Ca=!1,kn=Qn(e,t),ru=!1,Mn=bt=uu=tn=Aa=He=0,ct=Al=null,cu=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-mt(n),s=1<<l;t|=e[l],n&=~s}return ia=t,di(),a}function sf(e,t){ie=null,U.H=vl,t===An||t===bi?(t=So(),je=3):t===yr?(t=So(),je=4):je=t===Zr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vt=t,oe===null&&(He=1,zi(e,Ct(t,e.current)))}function rf(){var e=gt.current;return e===null?!0:(pe&4194048)===pe?Dt===null:(pe&62914560)===pe||(pe&536870912)!==0?e===Dt:!1}function uf(){var e=U.H;return U.H=vl,e===null?vl:e}function cf(){var e=U.A;return U.A=_h,e}function Zi(){He=4,Ca||(pe&4194048)!==pe&&gt.current!==null||(kn=!0),(Aa&134217727)===0&&(tn&134217727)===0||we===null||Da(we,pe,bt,!1)}function pu(e,t,a){var n=Se;Se|=2;var l=uf(),s=cf();(we!==e||pe!==t)&&(Fi=null,Bn(e,t)),t=!1;var c=He;e:do try{if(je!==0&&oe!==null){var f=oe,b=vt;switch(je){case 8:mu(),c=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var D=je;if(je=0,vt=null,Ln(e,f,b,D),a&&kn){c=0;break e}break;default:D=je,je=0,vt=null,Ln(e,f,b,D)}}zh(),c=He;break}catch(B){sf(e,B)}while(!0);return t&&e.shellSuspendCounter++,Kt=Va=null,Se=n,U.H=l,U.A=s,oe===null&&(we=null,pe=0,di()),c}function zh(){for(;oe!==null;)of(oe)}function kh(e,t){var a=Se;Se|=2;var n=uf(),l=cf();we!==e||pe!==t?(Fi=null,Yi=dt()+500,Bn(e,t)):kn=Qn(e,t);e:do try{if(je!==0&&oe!==null){t=oe;var s=vt;t:switch(je){case 1:je=0,vt=null,Ln(e,t,s,1);break;case 2:case 9:if(bo(s)){je=0,vt=null,df(t);break}t=function(){je!==2&&je!==9||we!==e||(je=7),qt(e)},s.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:bo(s)?(je=0,vt=null,df(t)):(je=0,vt=null,Ln(e,t,s,7));break;case 5:var c=null;switch(oe.tag){case 26:c=oe.memoizedState;case 5:case 27:var f=oe;if(c?Jf(c):f.stateNode.complete){je=0,vt=null;var b=f.sibling;if(b!==null)oe=b;else{var D=f.return;D!==null?(oe=D,Vi(D)):oe=null}break t}}je=0,vt=null,Ln(e,t,s,5);break;case 6:je=0,vt=null,Ln(e,t,s,6);break;case 8:mu(),He=6;break e;default:throw Error(o(462))}}Mh();break}catch(B){sf(e,B)}while(!0);return Kt=Va=null,U.H=n,U.A=l,Se=a,oe!==null?0:(we=null,pe=0,di(),He)}function Mh(){for(;oe!==null&&!lp();)of(oe)}function of(e){var t=zd(e.alternate,e,ia);e.memoizedProps=e.pendingProps,t===null?Vi(e):oe=t}function df(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Td(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=Td(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:Dr(t);default:Md(a,t),t=oe=ro(t,ia),t=zd(a,t,ia)}e.memoizedProps=e.pendingProps,t===null?Vi(e):oe=t}function Ln(e,t,a,n){Kt=Va=null,Dr(t),Tn=null,ol=0;var l=t.return;try{if(jh(e,l,t,a,pe)){He=1,zi(e,Ct(a,e.current)),oe=null;return}}catch(s){if(l!==null)throw oe=l,s;He=1,zi(e,Ct(a,e.current)),oe=null;return}t.flags&32768?(ve||n===1?e=!0:kn||(pe&536870912)!==0?e=!1:(Ca=e=!0,(n===2||n===9||n===3||n===6)&&(n=gt.current,n!==null&&n.tag===13&&(n.flags|=16384))),ff(t,e)):Vi(t)}function Vi(e){var t=e;do{if((t.flags&32768)!==0){ff(t,Ca);return}e=t.return;var a=Ah(t.alternate,t,ia);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);He===0&&(He=5)}function ff(e,t){do{var a=Th(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);He=6,oe=null}function mf(e,t,a,n,l,s,c,f,b){e.cancelPendingCommit=null;do Qi();while(Ve!==0);if((Se&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=ar,pp(e,a,s,c,f,b),e===we&&(oe=we=null,pe=0),Un=t,wa=e,sa=a,ou=s,du=l,tf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hh(Kl,function(){return vf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null,l=X.p,X.p=2,c=Se,Se|=4;try{wh(e,t,a)}finally{Se=c,X.p=l,U.T=n}}Ve=1,pf(),hf(),gf()}}function pf(){if(Ve===1){Ve=0;var e=wa,t=Un,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var n=X.p;X.p=2;var l=Se;Se|=4;try{Qd(t,e);var s=Au,c=Ic(e.containerInfo),f=s.focusedElem,b=s.selectionRange;if(c!==f&&f&&f.ownerDocument&&Wc(f.ownerDocument.documentElement,f)){if(b!==null&&Ws(f)){var D=b.start,B=b.end;if(B===void 0&&(B=D),"selectionStart"in f)f.selectionStart=D,f.selectionEnd=Math.min(B,f.value.length);else{var q=f.ownerDocument||document,O=q&&q.defaultView||window;if(O.getSelection){var k=O.getSelection(),K=f.textContent.length,ae=Math.min(b.start,K),Te=b.end===void 0?ae:Math.min(b.end,K);!k.extend&&ae>Te&&(c=Te,Te=ae,ae=c);var A=Jc(f,ae),j=Jc(f,Te);if(A&&j&&(k.rangeCount!==1||k.anchorNode!==A.node||k.anchorOffset!==A.offset||k.focusNode!==j.node||k.focusOffset!==j.offset)){var w=q.createRange();w.setStart(A.node,A.offset),k.removeAllRanges(),ae>Te?(k.addRange(w),k.extend(j.node,j.offset)):(w.setEnd(j.node,j.offset),k.addRange(w))}}}}for(q=[],k=f;k=k.parentNode;)k.nodeType===1&&q.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<q.length;f++){var L=q[f];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}is=!!Cu,Au=Cu=null}finally{Se=l,X.p=n,U.T=a}}e.current=t,Ve=2}}function hf(){if(Ve===2){Ve=0;var e=wa,t=Un,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var n=X.p;X.p=2;var l=Se;Se|=4;try{Yd(e,t.alternate,t)}finally{Se=l,X.p=n,U.T=a}}Ve=3}}function gf(){if(Ve===4||Ve===3){Ve=0,ip();var e=wa,t=Un,a=sa,n=tf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Un=wa=null,yf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ta=null),Rs(a),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Vn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=U.T,l=X.p,X.p=2,U.T=null;try{for(var s=e.onRecoverableError,c=0;c<n.length;c++){var f=n[c];s(f.value,{componentStack:f.stack})}}finally{U.T=t,X.p=l}}(sa&3)!==0&&Qi(),qt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===fu?Tl++:(Tl=0,fu=e):Tl=0,wl(0)}}function yf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ul(t)))}function Qi(){return pf(),hf(),gf(),vf()}function vf(){if(Ve!==5)return!1;var e=wa,t=ou;ou=0;var a=Rs(sa),n=U.T,l=X.p;try{X.p=32>a?32:a,U.T=null,a=du,du=null;var s=wa,c=sa;if(Ve=0,Un=wa=null,sa=0,(Se&6)!==0)throw Error(o(331));var f=Se;if(Se|=4,Id(s.current),Kd(s,s.current,c,a),Se=f,wl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Vn,s)}catch{}return!0}finally{X.p=l,U.T=n,yf(e,t)}}function bf(e,t,a){t=Ct(a,t),t=Xr(e.stateNode,t,2),e=Sa(e,t,2),e!==null&&($n(e,2),qt(e))}function Ee(e,t,a){if(e.tag===3)bf(e,e,a);else for(;t!==null;){if(t.tag===3){bf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ta===null||!Ta.has(n))){e=Ct(a,e),a=bd(2),n=Sa(t,a,2),n!==null&&(xd(a,n,t,e),$n(n,2),qt(n));break}}t=t.return}}function hu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Oh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(ru=!0,l.add(a),e=Uh.bind(null,e,t,a),t.then(e,e))}function Uh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(pe&a)===a&&(He===4||He===3&&(pe&62914560)===pe&&300>dt()-Gi?(Se&2)===0&&Bn(e,0):uu|=a,Mn===pe&&(Mn=0)),qt(e)}function xf(e,t){t===0&&(t=fc()),e=Fa(e,t),e!==null&&($n(e,t),qt(e))}function Bh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),xf(e,a)}function Lh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),xf(e,a)}function Hh(e,t){return ws(e,t)}var $i=null,Hn=null,gu=!1,Ki=!1,yu=!1,_a=0;function qt(e){e!==Hn&&e.next===null&&(Hn===null?$i=Hn=e:Hn=Hn.next=e),Ki=!0,gu||(gu=!0,Gh())}function wl(e,t){if(!yu&&Ki){yu=!0;do for(var a=!1,n=$i;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var s=0;else{var c=n.suspendedLanes,f=n.pingedLanes;s=(1<<31-mt(42|e)+1)-1,s&=l&~(c&~f),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Ef(n,s))}else s=pe,s=Pl(n,n===we?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Qn(n,s)||(a=!0,Ef(n,s));n=n.next}while(a);yu=!1}}function qh(){Sf()}function Sf(){Ki=gu=!1;var e=0;_a!==0&&Wh()&&(e=_a);for(var t=dt(),a=null,n=$i;n!==null;){var l=n.next,s=Nf(n,t);s===0?(n.next=null,a===null?$i=l:a.next=l,l===null&&(Hn=a)):(a=n,(e!==0||(s&3)!==0)&&(Ki=!0)),n=l}Ve!==0&&Ve!==5||wl(e),_a!==0&&(_a=0)}function Nf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-mt(s),f=1<<c,b=l[c];b===-1?((f&a)===0||(f&n)!==0)&&(l[c]=mp(f,t)):b<=t&&(e.expiredLanes|=f),s&=~f}if(t=we,a=pe,a=Pl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ds(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Qn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ds(n),Rs(a)){case 2:case 8:a=oc;break;case 32:a=Kl;break;case 268435456:a=dc;break;default:a=Kl}return n=jf.bind(null,e),a=ws(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ds(n),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Qi()&&e.callbackNode!==a)return null;var n=pe;return n=Pl(e,e===we?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(nf(e,n,t),Nf(e,dt()),e.callbackNode!=null&&e.callbackNode===a?jf.bind(null,e):null)}function Ef(e,t){if(Qi())return null;nf(e,t,!0)}function Gh(){Ph(function(){(Se&6)!==0?ws(cc,qh):Sf()})}function vu(){if(_a===0){var e=En;e===0&&(e=Jl,Jl<<=1,(Jl&261888)===0&&(Jl=256)),_a=e}return _a}function Cf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ni(""+e)}function Af(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Yh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var s=Cf((l[lt]||null).action),c=n.submitter;c&&(t=(t=c[lt]||null)?Cf(t.formAction):c.getAttribute("formAction"),t!==null&&(s=t,c=null));var f=new ri("action","action",null,n,l);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(_a!==0){var b=c?Af(l,c):new FormData(l);Lr(a,{pending:!0,data:b,method:l.method,action:s},null,b)}}else typeof s=="function"&&(f.preventDefault(),b=c?Af(l,c):new FormData(l),Lr(a,{pending:!0,data:b,method:l.method,action:s},s,b))},currentTarget:l}]})}}for(var bu=0;bu<tr.length;bu++){var xu=tr[bu],Fh=xu.toLowerCase(),Xh=xu[0].toUpperCase()+xu.slice(1);Rt(Fh,"on"+Xh)}Rt(to,"onAnimationEnd"),Rt(ao,"onAnimationIteration"),Rt(no,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(sh,"onTransitionRun"),Rt(rh,"onTransitionStart"),Rt(uh,"onTransitionCancel"),Rt(lo,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));function Tf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var c=n.length-1;0<=c;c--){var f=n[c],b=f.instance,D=f.currentTarget;if(f=f.listener,b!==s&&l.isPropagationStopped())break e;s=f,l.currentTarget=D;try{s(l)}catch(B){oi(B)}l.currentTarget=null,s=b}else for(c=0;c<n.length;c++){if(f=n[c],b=f.instance,D=f.currentTarget,f=f.listener,b!==s&&l.isPropagationStopped())break e;s=f,l.currentTarget=D;try{s(l)}catch(B){oi(B)}l.currentTarget=null,s=b}}}}function de(e,t){var a=t[zs];a===void 0&&(a=t[zs]=new Set);var n=e+"__bubble";a.has(n)||(wf(t,e,2,!1),a.add(n))}function Su(e,t,a){var n=0;t&&(n|=4),wf(a,e,n,t)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function Nu(e){if(!e[Ji]){e[Ji]=!0,bc.forEach(function(a){a!=="selectionchange"&&(Zh.has(a)||Su(a,!1,e),Su(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ji]||(t[Ji]=!0,Su("selectionchange",!1,t))}}function wf(e,t,a,n){switch(nm(t)){case 2:var l=bg;break;case 8:l=xg;break;default:l=Bu}a=l.bind(null,t,a,e),l=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function ju(e,t,a,n,l){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var f=n.stateNode.containerInfo;if(f===l)break;if(c===4)for(c=n.return;c!==null;){var b=c.tag;if((b===3||b===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;f!==null;){if(c=rn(f),c===null)return;if(b=c.tag,b===5||b===6||b===26||b===27){n=s=c;continue e}f=f.parentNode}}n=n.return}Oc(function(){var D=s,B=qs(a),q=[];e:{var O=io.get(e);if(O!==void 0){var k=ri,K=e;switch(e){case"keypress":if(ii(a)===0)break e;case"keydown":case"keyup":k=Lp;break;case"focusin":K="focus",k=Vs;break;case"focusout":K="blur",k=Vs;break;case"beforeblur":case"afterblur":k=Vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Gp;break;case to:case ao:case no:k=Dp;break;case lo:k=Fp;break;case"scroll":case"scrollend":k=Ep;break;case"wheel":k=Zp;break;case"copy":case"cut":case"paste":k=Op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Uc;break;case"toggle":case"beforetoggle":k=Qp}var ae=(t&4)!==0,Te=!ae&&(e==="scroll"||e==="scrollend"),A=ae?O!==null?O+"Capture":null:O;ae=[];for(var j=D,w;j!==null;){var L=j;if(w=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||w===null||A===null||(L=Wn(j,A),L!=null&&ae.push(_l(j,L,w))),Te)break;j=j.return}0<ae.length&&(O=new k(O,K,null,a,B),q.push({event:O,listeners:ae}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",O&&a!==Hs&&(K=a.relatedTarget||a.fromElement)&&(rn(K)||K[sn]))break e;if((k||O)&&(O=B.window===B?B:(O=B.ownerDocument)?O.defaultView||O.parentWindow:window,k?(K=a.relatedTarget||a.toElement,k=D,K=K?rn(K):null,K!==null&&(Te=h(K),ae=K.tag,K!==Te||ae!==5&&ae!==27&&ae!==6)&&(K=null)):(k=null,K=D),k!==K)){if(ae=kc,L="onMouseLeave",A="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Uc,L="onPointerLeave",A="onPointerEnter",j="pointer"),Te=k==null?O:Jn(k),w=K==null?O:Jn(K),O=new ae(L,j+"leave",k,a,B),O.target=Te,O.relatedTarget=w,L=null,rn(B)===D&&(ae=new ae(A,j+"enter",K,a,B),ae.target=w,ae.relatedTarget=Te,L=ae),Te=L,k&&K)t:{for(ae=Vh,A=k,j=K,w=0,L=A;L;L=ae(L))w++;L=0;for(var ee=j;ee;ee=ae(ee))L++;for(;0<w-L;)A=ae(A),w--;for(;0<L-w;)j=ae(j),L--;for(;w--;){if(A===j||j!==null&&A===j.alternate){ae=A;break t}A=ae(A),j=ae(j)}ae=null}else ae=null;k!==null&&Df(q,O,k,ae,!1),K!==null&&Te!==null&&Df(q,Te,K,ae,!0)}}e:{if(O=D?Jn(D):window,k=O.nodeName&&O.nodeName.toLowerCase(),k==="select"||k==="input"&&O.type==="file")var be=Xc;else if(Yc(O))if(Zc)be=nh;else{be=th;var W=eh}else k=O.nodeName,!k||k.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?D&&Ls(D.elementType)&&(be=Xc):be=ah;if(be&&(be=be(e,D))){Fc(q,be,a,B);break e}W&&W(e,O,D),e==="focusout"&&D&&O.type==="number"&&D.memoizedProps.value!=null&&Bs(O,"number",O.value)}switch(W=D?Jn(D):window,e){case"focusin":(Yc(W)||W.contentEditable==="true")&&(gn=W,Is=D,il=null);break;case"focusout":il=Is=gn=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,Pc(q,a,B);break;case"selectionchange":if(ih)break;case"keydown":case"keyup":Pc(q,a,B)}var re;if($s)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else hn?qc(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(Bc&&a.locale!=="ko"&&(hn||he!=="onCompositionStart"?he==="onCompositionEnd"&&hn&&(re=Rc()):(pa=B,Fs="value"in pa?pa.value:pa.textContent,hn=!0)),W=Wi(D,he),0<W.length&&(he=new Mc(he,e,null,a,B),q.push({event:he,listeners:W}),re?he.data=re:(re=Gc(a),re!==null&&(he.data=re)))),(re=Kp?Jp(e,a):Wp(e,a))&&(he=Wi(D,"onBeforeInput"),0<he.length&&(W=new Mc("onBeforeInput","beforeinput",null,a,B),q.push({event:W,listeners:he}),W.data=re)),Yh(q,e,D,a,B)}Tf(q,t)})}function _l(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Wi(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Wn(e,a),l!=null&&n.unshift(_l(e,l,s)),l=Wn(e,t),l!=null&&n.push(_l(e,l,s))),e.tag===3)return n;e=e.return}return[]}function Vh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Df(e,t,a,n,l){for(var s=t._reactName,c=[];a!==null&&a!==n;){var f=a,b=f.alternate,D=f.stateNode;if(f=f.tag,b!==null&&b===n)break;f!==5&&f!==26&&f!==27||D===null||(b=D,l?(D=Wn(a,s),D!=null&&c.unshift(_l(a,D,b))):l||(D=Wn(a,s),D!=null&&c.push(_l(a,D,b)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Qh=/\r\n?/g,$h=/\u0000|\uFFFD/g;function _f(e){return(typeof e=="string"?e:""+e).replace(Qh,`
`).replace($h,"")}function Of(e,t){return t=_f(t),_f(e)===t}function Ae(e,t,a,n,l,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||fn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&fn(e,""+n);break;case"className":ti(e,"class",n);break;case"tabIndex":ti(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ti(e,a,n);break;case"style":Dc(e,n,s);break;case"data":if(t!=="object"){ti(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ni(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",l.name,l,null),Ae(e,t,"formEncType",l.formEncType,l,null),Ae(e,t,"formMethod",l.formMethod,l,null),Ae(e,t,"formTarget",l.formTarget,l,null)):(Ae(e,t,"encType",l.encType,l,null),Ae(e,t,"method",l.method,l,null),Ae(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ni(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Zt);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=ni(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":de("beforetoggle",e),de("toggle",e),ei(e,"popover",n);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ei(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Np.get(a)||a,ei(e,a,n))}}function Eu(e,t,a,n,l,s){switch(a){case"style":Dc(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof n=="string"?fn(e,n):(typeof n=="number"||typeof n=="bigint")&&fn(e,""+n);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),s=e[lt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):ei(e,a,n)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var n=!1,l=!1,s;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];if(c!=null)switch(s){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ae(e,t,s,c,a,null)}}l&&Ae(e,t,"srcSet",a.srcSet,a,null),n&&Ae(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var f=s=c=l=null,b=null,D=null;for(n in a)if(a.hasOwnProperty(n)){var B=a[n];if(B!=null)switch(n){case"name":l=B;break;case"type":c=B;break;case"checked":b=B;break;case"defaultChecked":D=B;break;case"value":s=B;break;case"defaultValue":f=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:Ae(e,t,n,B,a,null)}}Cc(e,s,f,b,D,c,l,!1);return;case"select":de("invalid",e),n=c=s=null;for(l in a)if(a.hasOwnProperty(l)&&(f=a[l],f!=null))switch(l){case"value":s=f;break;case"defaultValue":c=f;break;case"multiple":n=f;default:Ae(e,t,l,f,a,null)}t=s,a=c,e.multiple=!!n,t!=null?dn(e,!!n,t,!1):a!=null&&dn(e,!!n,a,!0);return;case"textarea":de("invalid",e),s=l=n=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":n=f;break;case"defaultValue":l=f;break;case"children":s=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:Ae(e,t,c,f,a,null)}Tc(e,n,l,s);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(n=a[b],n!=null))switch(b){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ae(e,t,b,n,a,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(n=0;n<Dl.length;n++)de(Dl[n],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(n=a[D],n!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ae(e,t,D,n,a,null)}return;default:if(Ls(t)){for(B in a)a.hasOwnProperty(B)&&(n=a[B],n!==void 0&&Eu(e,t,B,n,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!=null&&Ae(e,t,f,n,a,null))}function Kh(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,c=null,f=null,b=null,D=null,B=null;for(k in a){var q=a[k];if(a.hasOwnProperty(k)&&q!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":b=q;default:n.hasOwnProperty(k)||Ae(e,t,k,null,n,q)}}for(var O in n){var k=n[O];if(q=a[O],n.hasOwnProperty(O)&&(k!=null||q!=null))switch(O){case"type":s=k;break;case"name":l=k;break;case"checked":D=k;break;case"defaultChecked":B=k;break;case"value":c=k;break;case"defaultValue":f=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:k!==q&&Ae(e,t,O,k,n,q)}}Us(e,c,f,b,D,B,s,l);return;case"select":k=c=f=O=null;for(s in a)if(b=a[s],a.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":k=b;default:n.hasOwnProperty(s)||Ae(e,t,s,null,n,b)}for(l in n)if(s=n[l],b=a[l],n.hasOwnProperty(l)&&(s!=null||b!=null))switch(l){case"value":O=s;break;case"defaultValue":f=s;break;case"multiple":c=s;default:s!==b&&Ae(e,t,l,s,n,b)}t=f,a=c,n=k,O!=null?dn(e,!!a,O,!1):!!n!=!!a&&(t!=null?dn(e,!!a,t,!0):dn(e,!!a,a?[]:"",!1));return;case"textarea":k=O=null;for(f in a)if(l=a[f],a.hasOwnProperty(f)&&l!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ae(e,t,f,null,n,l)}for(c in n)if(l=n[c],s=a[c],n.hasOwnProperty(c)&&(l!=null||s!=null))switch(c){case"value":O=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==s&&Ae(e,t,c,l,n,s)}Ac(e,O,k);return;case"option":for(var K in a)if(O=a[K],a.hasOwnProperty(K)&&O!=null&&!n.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:Ae(e,t,K,null,n,O)}for(b in n)if(O=n[b],k=a[b],n.hasOwnProperty(b)&&O!==k&&(O!=null||k!=null))switch(b){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Ae(e,t,b,O,n,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)O=a[ae],a.hasOwnProperty(ae)&&O!=null&&!n.hasOwnProperty(ae)&&Ae(e,t,ae,null,n,O);for(D in n)if(O=n[D],k=a[D],n.hasOwnProperty(D)&&O!==k&&(O!=null||k!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Ae(e,t,D,O,n,k)}return;default:if(Ls(t)){for(var Te in a)O=a[Te],a.hasOwnProperty(Te)&&O!==void 0&&!n.hasOwnProperty(Te)&&Eu(e,t,Te,void 0,n,O);for(B in n)O=n[B],k=a[B],!n.hasOwnProperty(B)||O===k||O===void 0&&k===void 0||Eu(e,t,B,O,n,k);return}}for(var A in a)O=a[A],a.hasOwnProperty(A)&&O!=null&&!n.hasOwnProperty(A)&&Ae(e,t,A,null,n,O);for(q in n)O=n[q],k=a[q],!n.hasOwnProperty(q)||O===k||O==null&&k==null||Ae(e,t,q,O,n,k)}function Rf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],s=l.transferSize,c=l.initiatorType,f=l.duration;if(s&&f&&Rf(c)){for(c=0,f=l.responseEnd,n+=1;n<a.length;n++){var b=a[n],D=b.startTime;if(D>f)break;var B=b.transferSize,q=b.initiatorType;B&&Rf(q)&&(b=b.responseEnd,c+=B*(b<f?1:(f-D)/(b-D)))}if(--n,t+=8*(s+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cu=null,Au=null;function Ii(e){return e.nodeType===9?e:e.ownerDocument}function zf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wu=null;function Wh(){var e=window.event;return e&&e.type==="popstate"?e===wu?!1:(wu=e,!0):(wu=null,!1)}var Mf=typeof setTimeout=="function"?setTimeout:void 0,Ih=typeof clearTimeout=="function"?clearTimeout:void 0,Uf=typeof Promise=="function"?Promise:void 0,Ph=typeof queueMicrotask=="function"?queueMicrotask:typeof Uf<"u"?function(e){return Uf.resolve(null).then(e).catch(eg)}:Mf;function eg(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Bf(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Fn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Ol(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ol(a);for(var s=a.firstChild;s;){var c=s.nextSibling,f=s.nodeName;s[Kn]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=c}}else a==="body"&&Ol(e.ownerDocument.body);a=l}while(a);Fn(t)}function Lf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Du(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tg(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function ag(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function Hf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function _u(e){return e.data==="$?"||e.data==="$~"}function Ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ng(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ru=null;function qf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Gf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Yf(e,t,a){switch(t=Ii(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ol(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ks(e)}var Ot=new Map,Ff=new Set;function Pi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=X.d;X.d={f:lg,r:ig,D:sg,C:rg,L:ug,m:cg,X:dg,S:og,M:fg};function lg(){var e=ra.f(),t=Xi();return e||t}function ig(e){var t=un(e);t!==null&&t.tag===5&&t.type==="form"?id(t):ra.r(e)}var qn=typeof document>"u"?null:document;function Xf(e,t,a){var n=qn;if(n&&typeof t=="string"&&t){var l=jt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Ff.has(l)||(Ff.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),tt(t,"link",e),$e(t),n.head.appendChild(t)))}}function sg(e){ra.D(e),Xf("dns-prefetch",e,null)}function rg(e,t){ra.C(e,t),Xf("preconnect",e,t)}function ug(e,t,a){ra.L(e,t,a);var n=qn;if(n&&e&&t){var l='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+jt(a.imageSizes)+'"]')):l+='[href="'+jt(e)+'"]';var s=l;switch(t){case"style":s=Gn(e);break;case"script":s=Yn(e)}Ot.has(s)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(s,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Rl(s))||t==="script"&&n.querySelector(zl(s))||(t=n.createElement("link"),tt(t,"link",e),$e(t),n.head.appendChild(t)))}}function cg(e,t){ra.m(e,t);var a=qn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+jt(n)+'"][href="'+jt(e)+'"]',s=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Yn(e)}if(!Ot.has(s)&&(e=N({rel:"modulepreload",href:e},t),Ot.set(s,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zl(s)))return}n=a.createElement("link"),tt(n,"link",e),$e(n),a.head.appendChild(n)}}}function og(e,t,a){ra.S(e,t,a);var n=qn;if(n&&e){var l=cn(n).hoistableStyles,s=Gn(e);t=t||"default";var c=l.get(s);if(!c){var f={loading:0,preload:null};if(c=n.querySelector(Rl(s)))f.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(s))&&zu(e,a);var b=c=n.createElement("link");$e(b),tt(b,"link",e),b._p=new Promise(function(D,B){b.onload=D,b.onerror=B}),b.addEventListener("load",function(){f.loading|=1}),b.addEventListener("error",function(){f.loading|=2}),f.loading|=4,es(c,t,n)}c={type:"stylesheet",instance:c,count:1,state:f},l.set(s,c)}}}function dg(e,t){ra.X(e,t);var a=qn;if(a&&e){var n=cn(a).hoistableScripts,l=Yn(e),s=n.get(l);s||(s=a.querySelector(zl(l)),s||(e=N({src:e,async:!0},t),(t=Ot.get(l))&&ku(e,t),s=a.createElement("script"),$e(s),tt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function fg(e,t){ra.M(e,t);var a=qn;if(a&&e){var n=cn(a).hoistableScripts,l=Yn(e),s=n.get(l);s||(s=a.querySelector(zl(l)),s||(e=N({src:e,async:!0,type:"module"},t),(t=Ot.get(l))&&ku(e,t),s=a.createElement("script"),$e(s),tt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function Zf(e,t,a,n){var l=(l=se.current)?Pi(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Gn(a.href),a=cn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gn(a.href);var s=cn(l).hoistableStyles,c=s.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=l.querySelector(Rl(e)))&&!s._p&&(c.instance=s,c.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),s||mg(l,e,a,c.state))),t&&n===null)throw Error(o(528,""));return c}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yn(a),a=cn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Gn(e){return'href="'+jt(e)+'"'}function Rl(e){return'link[rel="stylesheet"]['+e+"]"}function Vf(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function mg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),tt(t,"link",a),$e(t),e.head.appendChild(t))}function Yn(e){return'[src="'+jt(e)+'"]'}function zl(e){return"script[async]"+e}function Qf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+jt(a.href)+'"]');if(n)return t.instance=n,$e(n),n;var l=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),$e(n),tt(n,"style",l),es(n,a.precedence,e),t.instance=n;case"stylesheet":l=Gn(a.href);var s=e.querySelector(Rl(l));if(s)return t.state.loading|=4,t.instance=s,$e(s),s;n=Vf(a),(l=Ot.get(l))&&zu(n,l),s=(e.ownerDocument||e).createElement("link"),$e(s);var c=s;return c._p=new Promise(function(f,b){c.onload=f,c.onerror=b}),tt(s,"link",n),t.state.loading|=4,es(s,a.precedence,e),t.instance=s;case"script":return s=Yn(a.src),(l=e.querySelector(zl(s)))?(t.instance=l,$e(l),l):(n=a,(l=Ot.get(s))&&(n=N({},a),ku(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),$e(l),tt(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,es(n,a.precedence,e));return t.instance}function es(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,s=l,c=0;c<n.length;c++){var f=n[c];if(f.dataset.precedence===t)s=f;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function zu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ku(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ts=null;function $f(e,t,a){if(ts===null){var n=new Map,l=ts=new Map;l.set(a,n)}else l=ts,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var s=a[l];if(!(s[Kn]||s[We]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(t)||"";c=e+c;var f=n.get(c);f?f.push(s):n.set(c,[s])}}return n}function Kf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function pg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Jf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hg(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Gn(n.href),s=t.querySelector(Rl(l));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=as.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,$e(s);return}s=t.ownerDocument||t,n=Vf(n),(l=Ot.get(l))&&zu(n,l),s=s.createElement("link"),$e(s);var c=s;c._p=new Promise(function(f,b){c.onload=f,c.onerror=b}),tt(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=as.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Mu=0;function gg(e,t){return e.stylesheets&&e.count===0&&ls(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&ls(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Mu===0&&(Mu=62500*Jh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ls(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Mu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function as(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ls(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ns=null;function ls(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ns=new Map,t.forEach(yg,e),ns=null,as.call(e))}function yg(e,t){if(!(t.state.loading&4)){var a=ns.get(e);if(a)var n=a.get(null);else{a=new Map,ns.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var c=l[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),n=c)}n&&a.set(null,n)}l=t.instance,c=l.getAttribute("data-precedence"),s=a.get(c)||n,s===n&&a.set(null,l),a.set(c,l),this.count++,n=as.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var kl={$$typeof:Y,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function vg(e,t,a,n,l,s,c,f,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_s(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.hiddenUpdates=_s(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Wf(e,t,a,n,l,s,c,f,b,D,B,q){return e=new vg(e,t,a,c,b,D,B,q,f),t=1,s===!0&&(t|=24),s=ht(3,null,null,t),e.current=s,s.stateNode=e,t=pr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},vr(s),e}function If(e){return e?(e=bn,e):bn}function Pf(e,t,a,n,l,s){l=If(l),n.context===null?n.context=l:n.pendingContext=l,n=xa(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Sa(e,n,t),a!==null&&(ot(a,e,t),fl(a,e,t))}function em(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Uu(e,t){em(e,t),(e=e.alternate)&&em(e,t)}function tm(e){if(e.tag===13||e.tag===31){var t=Fa(e,67108864);t!==null&&ot(t,e,67108864),Uu(e,67108864)}}function am(e){if(e.tag===13||e.tag===31){var t=xt();t=Os(t);var a=Fa(e,t);a!==null&&ot(a,e,t),Uu(e,t)}}var is=!0;function bg(e,t,a,n){var l=U.T;U.T=null;var s=X.p;try{X.p=2,Bu(e,t,a,n)}finally{X.p=s,U.T=l}}function xg(e,t,a,n){var l=U.T;U.T=null;var s=X.p;try{X.p=8,Bu(e,t,a,n)}finally{X.p=s,U.T=l}}function Bu(e,t,a,n){if(is){var l=Lu(n);if(l===null)ju(e,t,n,ss,a),lm(e,n);else if(Ng(l,e,t,a,n))n.stopPropagation();else if(lm(e,n),t&4&&-1<Sg.indexOf(e)){for(;l!==null;){var s=un(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=La(s.pendingLanes);if(c!==0){var f=s;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var b=1<<31-mt(c);f.entanglements[1]|=b,c&=~b}qt(s),(Se&6)===0&&(Yi=dt()+500,wl(0))}}break;case 31:case 13:f=Fa(s,2),f!==null&&ot(f,s,2),Xi(),Uu(s,2)}if(s=Lu(n),s===null&&ju(e,t,n,ss,a),s===l)break;l=s}l!==null&&n.stopPropagation()}else ju(e,t,n,null,a)}}function Lu(e){return e=qs(e),Hu(e)}var ss=null;function Hu(e){if(ss=null,e=rn(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=S(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ss=e,null}function nm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sp()){case cc:return 2;case oc:return 8;case Kl:case rp:return 32;case dc:return 268435456;default:return 32}default:return 32}}var qu=!1,Ra=null,za=null,ka=null,Ml=new Map,Ul=new Map,Ma=[],Sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lm(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(t.pointerId)}}function Bl(e,t,a,n,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[l]},t!==null&&(t=un(t),t!==null&&tm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ng(e,t,a,n,l){switch(t){case"focusin":return Ra=Bl(Ra,e,t,a,n,l),!0;case"dragenter":return za=Bl(za,e,t,a,n,l),!0;case"mouseover":return ka=Bl(ka,e,t,a,n,l),!0;case"pointerover":var s=l.pointerId;return Ml.set(s,Bl(Ml.get(s)||null,e,t,a,n,l)),!0;case"gotpointercapture":return s=l.pointerId,Ul.set(s,Bl(Ul.get(s)||null,e,t,a,n,l)),!0}return!1}function im(e){var t=rn(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,yc(e.priority,function(){am(a)});return}}else if(t===31){if(t=S(a),t!==null){e.blockedOn=t,yc(e.priority,function(){am(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Lu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Hs=n,a.target.dispatchEvent(n),Hs=null}else return t=un(a),t!==null&&tm(t),e.blockedOn=a,!1;t.shift()}return!0}function sm(e,t,a){rs(e)&&a.delete(t)}function jg(){qu=!1,Ra!==null&&rs(Ra)&&(Ra=null),za!==null&&rs(za)&&(za=null),ka!==null&&rs(ka)&&(ka=null),Ml.forEach(sm),Ul.forEach(sm)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,qu||(qu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,jg)))}var cs=null;function rm(e){cs!==e&&(cs=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){cs===e&&(cs=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Hu(n||a)===null)continue;break}var s=un(a);s!==null&&(e.splice(t,3),t-=3,Lr(s,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Fn(e){function t(b){return us(b,e)}Ra!==null&&us(Ra,e),za!==null&&us(za,e),ka!==null&&us(ka,e),Ml.forEach(t),Ul.forEach(t);for(var a=0;a<Ma.length;a++){var n=Ma[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)im(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],s=a[n+1],c=l[lt]||null;if(typeof s=="function")c||rm(a);else if(c){var f=null;if(s&&s.hasAttribute("formAction")){if(l=s,c=s[lt]||null)f=c.formAction;else if(Hu(l)!==null)continue}else f=c.action;typeof f=="function"?a[n+1]=f:(a.splice(n,3),n-=3),rm(a)}}}function um(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Gu(e){this._internalRoot=e}os.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,n=xt();Pf(a,n,e,t,null,null)},os.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pf(e.current,2,null,e,null,null),Xi(),t[sn]=null}};function os(e){this._internalRoot=e}os.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&im(e)}};var cm=u.version;if(cm!=="19.2.0")throw Error(o(527,cm,"19.2.0"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Eg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{Vn=ds.inject(Eg),ft=ds}catch{}}return Hl.createRoot=function(e,t){if(!m(e))throw Error(o(299));var a=!1,n="",l=hd,s=gd,c=yd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Wf(e,1,!1,null,null,a,n,null,l,s,c,um),e[sn]=t.current,Nu(e),new Gu(t)},Hl.hydrateRoot=function(e,t,a){if(!m(e))throw Error(o(299));var n=!1,l="",s=hd,c=gd,f=yd,b=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(b=a.formState)),t=Wf(e,1,!0,t,a??null,n,l,b,s,c,f,um),t.context=If(null),a=t.current,n=xt(),n=Os(n),l=xa(n),l.callback=null,Sa(a,l,n),a=n,t.current.lanes=a,$n(t,a),qt(t),e[sn]=t.current,Nu(e),new os(t)},Hl.version="19.2.0",Hl}var bm;function zg(){if(bm)return Xu.exports;bm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Xu.exports=Rg(),Xu.exports}var kg=zg();/**
 * react-router v7.9.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xm="popstate";function Mg(i={}){function u(o,m){let{pathname:h,search:g,hash:S}=o.location;return Pu("",{pathname:h,search:g,hash:S},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function d(o,m){return typeof m=="string"?m:Fl(m)}return Bg(u,d,null,i)}function Qe(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Yt(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Ug(){return Math.random().toString(36).substring(2,10)}function Sm(i,u){return{usr:i.state,key:i.key,idx:u}}function Pu(i,u,d=null,o){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?Zl(u):u,state:d,key:u&&u.key||o||Ug()}}function Fl({pathname:i="/",search:u="",hash:d=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function Zl(i){let u={};if(i){let d=i.indexOf("#");d>=0&&(u.hash=i.substring(d),i=i.substring(0,d));let o=i.indexOf("?");o>=0&&(u.search=i.substring(o),i=i.substring(0,o)),i&&(u.pathname=i)}return u}function Bg(i,u,d,o={}){let{window:m=document.defaultView,v5Compat:h=!1}=o,g=m.history,S="POP",y=null,p=v();p==null&&(p=0,g.replaceState({...g.state,idx:p},""));function v(){return(g.state||{idx:null}).idx}function N(){S="POP";let T=v(),M=T==null?null:T-p;p=T,y&&y({action:S,location:C.location,delta:M})}function _(T,M){S="PUSH";let z=Pu(C.location,T,M);p=v()+1;let Y=Sm(z,p),P=C.createHref(z);try{g.pushState(Y,"",P)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;m.location.assign(P)}h&&y&&y({action:S,location:C.location,delta:1})}function F(T,M){S="REPLACE";let z=Pu(C.location,T,M);p=v();let Y=Sm(z,p),P=C.createHref(z);g.replaceState(Y,"",P),h&&y&&y({action:S,location:C.location,delta:0})}function x(T){return Lg(T)}let C={get action(){return S},get location(){return i(m,g)},listen(T){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(xm,N),y=T,()=>{m.removeEventListener(xm,N),y=null}},createHref(T){return u(m,T)},createURL:x,encodeLocation(T){let M=x(T);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:_,replace:F,go(T){return g.go(T)}};return C}function Lg(i,u=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(d,"No window.location.(origin|href) available to create URL");let o=typeof i=="string"?i:Fl(i);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function zm(i,u,d="/"){return Hg(i,u,d,!1)}function Hg(i,u,d,o){let m=typeof u=="string"?Zl(u):u,h=oa(m.pathname||"/",d);if(h==null)return null;let g=km(i);qg(g);let S=null;for(let y=0;S==null&&y<g.length;++y){let p=Wg(h);S=Kg(g[y],p,o)}return S}function km(i,u=[],d=[],o="",m=!1){let h=(g,S,y=m,p)=>{let v={relativePath:p===void 0?g.path||"":p,caseSensitive:g.caseSensitive===!0,childrenIndex:S,route:g};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(o)&&y)return;Qe(v.relativePath.startsWith(o),`Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(o.length)}let N=ca([o,v.relativePath]),_=d.concat(v);g.children&&g.children.length>0&&(Qe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),km(g.children,u,_,N,y)),!(g.path==null&&!g.index)&&u.push({path:N,score:Qg(N,g.index),routesMeta:_})};return i.forEach((g,S)=>{if(g.path===""||!g.path?.includes("?"))h(g,S);else for(let y of Mm(g.path))h(g,S,!0,y)}),u}function Mm(i){let u=i.split("/");if(u.length===0)return[];let[d,...o]=u,m=d.endsWith("?"),h=d.replace(/\?$/,"");if(o.length===0)return m?[h,""]:[h];let g=Mm(o.join("/")),S=[];return S.push(...g.map(y=>y===""?h:[h,y].join("/"))),m&&S.push(...g),S.map(y=>i.startsWith("/")&&y===""?"/":y)}function qg(i){i.sort((u,d)=>u.score!==d.score?d.score-u.score:$g(u.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var Gg=/^:[\w-]+$/,Yg=3,Fg=2,Xg=1,Zg=10,Vg=-2,Nm=i=>i==="*";function Qg(i,u){let d=i.split("/"),o=d.length;return d.some(Nm)&&(o+=Vg),u&&(o+=Fg),d.filter(m=>!Nm(m)).reduce((m,h)=>m+(Gg.test(h)?Yg:h===""?Xg:Zg),o)}function $g(i,u){return i.length===u.length&&i.slice(0,-1).every((o,m)=>o===u[m])?i[i.length-1]-u[u.length-1]:0}function Kg(i,u,d=!1){let{routesMeta:o}=i,m={},h="/",g=[];for(let S=0;S<o.length;++S){let y=o[S],p=S===o.length-1,v=h==="/"?u:u.slice(h.length)||"/",N=gs({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},v),_=y.route;if(!N&&p&&d&&!o[o.length-1].route.index&&(N=gs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},v)),!N)return null;Object.assign(m,N.params),g.push({params:m,pathname:ca([h,N.pathname]),pathnameBase:ty(ca([h,N.pathnameBase])),route:_}),N.pathnameBase!=="/"&&(h=ca([h,N.pathnameBase]))}return g}function gs(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[d,o]=Jg(i.path,i.caseSensitive,i.end),m=u.match(d);if(!m)return null;let h=m[0],g=h.replace(/(.)\/+$/,"$1"),S=m.slice(1);return{params:o.reduce((p,{paramName:v,isOptional:N},_)=>{if(v==="*"){let x=S[_]||"";g=h.slice(0,h.length-x.length).replace(/(.)\/+$/,"$1")}const F=S[_];return N&&!F?p[v]=void 0:p[v]=(F||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:g,pattern:i}}function Jg(i,u=!1,d=!0){Yt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let o=[],m="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,S,y)=>(o.push({paramName:S,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(o.push({paramName:"*"}),m+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":i!==""&&i!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,u?void 0:"i"),o]}function Wg(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Yt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function oa(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let d=u.endsWith("/")?u.length-1:u.length,o=i.charAt(d);return o&&o!=="/"?null:i.slice(d)||"/"}function Ig(i,u="/"){let{pathname:d,search:o="",hash:m=""}=typeof i=="string"?Zl(i):i;return{pathname:d?d.startsWith("/")?d:Pg(d,u):u,search:ay(o),hash:ny(m)}}function Pg(i,u){let d=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function $u(i,u,d,o){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ey(i){return i.filter((u,d)=>d===0||u.route.path&&u.route.path.length>0)}function Um(i){let u=ey(i);return u.map((d,o)=>o===u.length-1?d.pathname:d.pathnameBase)}function Bm(i,u,d,o=!1){let m;typeof i=="string"?m=Zl(i):(m={...i},Qe(!m.pathname||!m.pathname.includes("?"),$u("?","pathname","search",m)),Qe(!m.pathname||!m.pathname.includes("#"),$u("#","pathname","hash",m)),Qe(!m.search||!m.search.includes("#"),$u("#","search","hash",m)));let h=i===""||m.pathname==="",g=h?"/":m.pathname,S;if(g==null)S=d;else{let N=u.length-1;if(!o&&g.startsWith("..")){let _=g.split("/");for(;_[0]==="..";)_.shift(),N-=1;m.pathname=_.join("/")}S=N>=0?u[N]:"/"}let y=Ig(m,S),p=g&&g!=="/"&&g.endsWith("/"),v=(h||g===".")&&d.endsWith("/");return!y.pathname.endsWith("/")&&(p||v)&&(y.pathname+="/"),y}var ca=i=>i.join("/").replace(/\/\/+/g,"/"),ty=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),ay=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ny=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function ly(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Lm=["POST","PUT","PATCH","DELETE"];new Set(Lm);var iy=["GET",...Lm];new Set(iy);var Xn=R.createContext(null);Xn.displayName="DataRouter";var vs=R.createContext(null);vs.displayName="DataRouterState";R.createContext(!1);var Hm=R.createContext({isTransitioning:!1});Hm.displayName="ViewTransition";var sy=R.createContext(new Map);sy.displayName="Fetchers";var ry=R.createContext(null);ry.displayName="Await";var Ft=R.createContext(null);Ft.displayName="Navigation";var bs=R.createContext(null);bs.displayName="Location";var da=R.createContext({outlet:null,matches:[],isDataRoute:!1});da.displayName="Route";var tc=R.createContext(null);tc.displayName="RouteError";function uy(i,{relative:u}={}){Qe(Vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=R.useContext(Ft),{hash:m,pathname:h,search:g}=Ql(i,{relative:u}),S=h;return d!=="/"&&(S=h==="/"?d:ca([d,h])),o.createHref({pathname:S,search:g,hash:m})}function Vl(){return R.useContext(bs)!=null}function nn(){return Qe(Vl(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(bs).location}var qm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gm(i){R.useContext(Ft).static||R.useLayoutEffect(i)}function cy(){let{isDataRoute:i}=R.useContext(da);return i?Ny():oy()}function oy(){Qe(Vl(),"useNavigate() may be used only in the context of a <Router> component.");let i=R.useContext(Xn),{basename:u,navigator:d}=R.useContext(Ft),{matches:o}=R.useContext(da),{pathname:m}=nn(),h=JSON.stringify(Um(o)),g=R.useRef(!1);return Gm(()=>{g.current=!0}),R.useCallback((y,p={})=>{if(Yt(g.current,qm),!g.current)return;if(typeof y=="number"){d.go(y);return}let v=Bm(y,JSON.parse(h),m,p.relative==="path");i==null&&u!=="/"&&(v.pathname=v.pathname==="/"?u:ca([u,v.pathname])),(p.replace?d.replace:d.push)(v,p.state,p)},[u,d,h,m,i])}R.createContext(null);function Ql(i,{relative:u}={}){let{matches:d}=R.useContext(da),{pathname:o}=nn(),m=JSON.stringify(Um(d));return R.useMemo(()=>Bm(i,JSON.parse(m),o,u==="path"),[i,m,o,u])}function dy(i,u,d,o,m){Qe(Vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=R.useContext(Ft),{matches:g}=R.useContext(da),S=g[g.length-1],y=S?S.params:{},p=S?S.pathname:"/",v=S?S.pathnameBase:"/",N=S&&S.route;{let z=N&&N.path||"";Ym(p,!N||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let _=nn(),F;F=_;let x=F.pathname||"/",C=x;if(v!=="/"){let z=v.replace(/^\//,"").split("/");C="/"+x.replace(/^\//,"").split("/").slice(z.length).join("/")}let T=zm(i,{pathname:C});return Yt(N||T!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),Yt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),gy(T&&T.map(z=>Object.assign({},z,{params:Object.assign({},y,z.params),pathname:ca([v,h.encodeLocation?h.encodeLocation(z.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?v:ca([v,h.encodeLocation?h.encodeLocation(z.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),g,d,o,m)}function fy(){let i=Sy(),u=ly(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),d=i instanceof Error?i.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},g=null;return console.error("Error handled by React Router default ErrorBoundary:",i),g=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:h},"ErrorBoundary")," or"," ",R.createElement("code",{style:h},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},u),d?R.createElement("pre",{style:m},d):null,g)}var my=R.createElement(fy,null),py=class extends R.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){this.props.unstable_onError?this.props.unstable_onError(i,u):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?R.createElement(da.Provider,{value:this.props.routeContext},R.createElement(tc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function hy({routeContext:i,match:u,children:d}){let o=R.useContext(Xn);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),R.createElement(da.Provider,{value:i},d)}function gy(i,u=[],d=null,o=null,m=null){if(i==null){if(!d)return null;if(d.errors)i=d.matches;else if(u.length===0&&!d.initialized&&d.matches.length>0)i=d.matches;else return null}let h=i,g=d?.errors;if(g!=null){let p=h.findIndex(v=>v.route.id&&g?.[v.route.id]!==void 0);Qe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),h=h.slice(0,Math.min(h.length,p+1))}let S=!1,y=-1;if(d)for(let p=0;p<h.length;p++){let v=h[p];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=p),v.route.id){let{loaderData:N,errors:_}=d,F=v.route.loader&&!N.hasOwnProperty(v.route.id)&&(!_||_[v.route.id]===void 0);if(v.route.lazy||F){S=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((p,v,N)=>{let _,F=!1,x=null,C=null;d&&(_=g&&v.route.id?g[v.route.id]:void 0,x=v.route.errorElement||my,S&&(y<0&&N===0?(Ym("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,C=null):y===N&&(F=!0,C=v.route.hydrateFallbackElement||null)));let T=u.concat(h.slice(0,N+1)),M=()=>{let z;return _?z=x:F?z=C:v.route.Component?z=R.createElement(v.route.Component,null):v.route.element?z=v.route.element:z=p,R.createElement(hy,{match:v,routeContext:{outlet:p,matches:T,isDataRoute:d!=null},children:z})};return d&&(v.route.ErrorBoundary||v.route.errorElement||N===0)?R.createElement(py,{location:d.location,revalidation:d.revalidation,component:x,error:_,children:M(),routeContext:{outlet:null,matches:T,isDataRoute:!0},unstable_onError:o}):M()},null)}function ac(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yy(i){let u=R.useContext(Xn);return Qe(u,ac(i)),u}function vy(i){let u=R.useContext(vs);return Qe(u,ac(i)),u}function by(i){let u=R.useContext(da);return Qe(u,ac(i)),u}function nc(i){let u=by(i),d=u.matches[u.matches.length-1];return Qe(d.route.id,`${i} can only be used on routes that contain a unique "id"`),d.route.id}function xy(){return nc("useRouteId")}function Sy(){let i=R.useContext(tc),u=vy("useRouteError"),d=nc("useRouteError");return i!==void 0?i:u.errors?.[d]}function Ny(){let{router:i}=yy("useNavigate"),u=nc("useNavigate"),d=R.useRef(!1);return Gm(()=>{d.current=!0}),R.useCallback(async(m,h={})=>{Yt(d.current,qm),d.current&&(typeof m=="number"?i.navigate(m):await i.navigate(m,{fromRouteId:u,...h}))},[i,u])}var jm={};function Ym(i,u,d){!u&&!jm[i]&&(jm[i]=!0,Yt(!1,d))}R.memo(jy);function jy({routes:i,future:u,state:d,unstable_onError:o}){return dy(i,void 0,d,o,u)}function Ey({basename:i="/",children:u=null,location:d,navigationType:o="POP",navigator:m,static:h=!1}){Qe(!Vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=i.replace(/^\/*/,"/"),S=R.useMemo(()=>({basename:g,navigator:m,static:h,future:{}}),[g,m,h]);typeof d=="string"&&(d=Zl(d));let{pathname:y="/",search:p="",hash:v="",state:N=null,key:_="default"}=d,F=R.useMemo(()=>{let x=oa(y,g);return x==null?null:{location:{pathname:x,search:p,hash:v,state:N,key:_},navigationType:o}},[g,y,p,v,N,_,o]);return Yt(F!=null,`<Router basename="${g}"> is not able to match the URL "${y}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:R.createElement(Ft.Provider,{value:S},R.createElement(bs.Provider,{children:u,value:F}))}var ps="get",hs="application/x-www-form-urlencoded";function xs(i){return i!=null&&typeof i.tagName=="string"}function Cy(i){return xs(i)&&i.tagName.toLowerCase()==="button"}function Ay(i){return xs(i)&&i.tagName.toLowerCase()==="form"}function Ty(i){return xs(i)&&i.tagName.toLowerCase()==="input"}function wy(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Dy(i,u){return i.button===0&&(!u||u==="_self")&&!wy(i)}var fs=null;function _y(){if(fs===null)try{new FormData(document.createElement("form"),0),fs=!1}catch{fs=!0}return fs}var Oy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ku(i){return i!=null&&!Oy.has(i)?(Yt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hs}"`),null):i}function Ry(i,u){let d,o,m,h,g;if(Ay(i)){let S=i.getAttribute("action");o=S?oa(S,u):null,d=i.getAttribute("method")||ps,m=Ku(i.getAttribute("enctype"))||hs,h=new FormData(i)}else if(Cy(i)||Ty(i)&&(i.type==="submit"||i.type==="image")){let S=i.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||S.getAttribute("action");if(o=y?oa(y,u):null,d=i.getAttribute("formmethod")||S.getAttribute("method")||ps,m=Ku(i.getAttribute("formenctype"))||Ku(S.getAttribute("enctype"))||hs,h=new FormData(S,i),!_y()){let{name:p,type:v,value:N}=i;if(v==="image"){let _=p?`${p}.`:"";h.append(`${_}x`,"0"),h.append(`${_}y`,"0")}else p&&h.append(p,N)}}else{if(xs(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=ps,o=null,m=hs,g=i}return h&&m==="text/plain"&&(g=h,h=void 0),{action:o,method:d.toLowerCase(),encType:m,formData:h,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lc(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function zy(i,u,d){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return o.pathname==="/"?o.pathname=`_root.${d}`:u&&oa(o.pathname,u)==="/"?o.pathname=`${u.replace(/\/$/,"")}/_root.${d}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${d}`,o}async function ky(i,u){if(i.id in u)return u[i.id];try{let d=await import(i.module);return u[i.id]=d,d}catch(d){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function My(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Uy(i,u,d){let o=await Promise.all(i.map(async m=>{let h=u.routes[m.route.id];if(h){let g=await ky(h,d);return g.links?g.links():[]}return[]}));return qy(o.flat(1).filter(My).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Em(i,u,d,o,m,h){let g=(y,p)=>d[p]?y.route.id!==d[p].route.id:!0,S=(y,p)=>d[p].pathname!==y.pathname||d[p].route.path?.endsWith("*")&&d[p].params["*"]!==y.params["*"];return h==="assets"?u.filter((y,p)=>g(y,p)||S(y,p)):h==="data"?u.filter((y,p)=>{let v=o.routes[y.route.id];if(!v||!v.hasLoader)return!1;if(g(y,p)||S(y,p))return!0;if(y.route.shouldRevalidate){let N=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function By(i,u,{includeHydrateFallback:d}={}){return Ly(i.map(o=>{let m=u.routes[o.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function Ly(i){return[...new Set(i)]}function Hy(i){let u={},d=Object.keys(i).sort();for(let o of d)u[o]=i[o];return u}function qy(i,u){let d=new Set;return new Set(u),i.reduce((o,m)=>{let h=JSON.stringify(Hy(m));return d.has(h)||(d.add(h),o.push({key:h,link:m})),o},[])}function Fm(){let i=R.useContext(Xn);return lc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Gy(){let i=R.useContext(vs);return lc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ic=R.createContext(void 0);ic.displayName="FrameworkContext";function Xm(){let i=R.useContext(ic);return lc(i,"You must render this element inside a <HydratedRouter> element"),i}function Yy(i,u){let d=R.useContext(ic),[o,m]=R.useState(!1),[h,g]=R.useState(!1),{onFocus:S,onBlur:y,onMouseEnter:p,onMouseLeave:v,onTouchStart:N}=u,_=R.useRef(null);R.useEffect(()=>{if(i==="render"&&g(!0),i==="viewport"){let C=M=>{M.forEach(z=>{g(z.isIntersecting)})},T=new IntersectionObserver(C,{threshold:.5});return _.current&&T.observe(_.current),()=>{T.disconnect()}}},[i]),R.useEffect(()=>{if(o){let C=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(C)}}},[o]);let F=()=>{m(!0)},x=()=>{m(!1),g(!1)};return d?i!=="intent"?[h,_,{}]:[h,_,{onFocus:ql(S,F),onBlur:ql(y,x),onMouseEnter:ql(p,F),onMouseLeave:ql(v,x),onTouchStart:ql(N,F)}]:[!1,_,{}]}function ql(i,u){return d=>{i&&i(d),d.defaultPrevented||u(d)}}function Fy({page:i,...u}){let{router:d}=Fm(),o=R.useMemo(()=>zm(d.routes,i,d.basename),[d.routes,i,d.basename]);return o?R.createElement(Zy,{page:i,matches:o,...u}):null}function Xy(i){let{manifest:u,routeModules:d}=Xm(),[o,m]=R.useState([]);return R.useEffect(()=>{let h=!1;return Uy(i,u,d).then(g=>{h||m(g)}),()=>{h=!0}},[i,u,d]),o}function Zy({page:i,matches:u,...d}){let o=nn(),{manifest:m,routeModules:h}=Xm(),{basename:g}=Fm(),{loaderData:S,matches:y}=Gy(),p=R.useMemo(()=>Em(i,u,y,m,o,"data"),[i,u,y,m,o]),v=R.useMemo(()=>Em(i,u,y,m,o,"assets"),[i,u,y,m,o]),N=R.useMemo(()=>{if(i===o.pathname+o.search+o.hash)return[];let x=new Set,C=!1;if(u.forEach(M=>{let z=m.routes[M.route.id];!z||!z.hasLoader||(!p.some(Y=>Y.route.id===M.route.id)&&M.route.id in S&&h[M.route.id]?.shouldRevalidate||z.hasClientLoader?C=!0:x.add(M.route.id))}),x.size===0)return[];let T=zy(i,g,"data");return C&&x.size>0&&T.searchParams.set("_routes",u.filter(M=>x.has(M.route.id)).map(M=>M.route.id).join(",")),[T.pathname+T.search]},[g,S,o,m,p,u,i,h]),_=R.useMemo(()=>By(v,m),[v,m]),F=Xy(v);return R.createElement(R.Fragment,null,N.map(x=>R.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...d})),_.map(x=>R.createElement("link",{key:x,rel:"modulepreload",href:x,...d})),F.map(({key:x,link:C})=>R.createElement("link",{key:x,nonce:d.nonce,...C})))}function Vy(...i){return u=>{i.forEach(d=>{typeof d=="function"?d(u):d!=null&&(d.current=u)})}}var Zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Zm&&(window.__reactRouterVersion="7.9.5")}catch{}function Qy({basename:i,children:u,window:d}){let o=R.useRef();o.current==null&&(o.current=Mg({window:d,v5Compat:!0}));let m=o.current,[h,g]=R.useState({action:m.action,location:m.location}),S=R.useCallback(y=>{R.startTransition(()=>g(y))},[g]);return R.useLayoutEffect(()=>m.listen(S),[m,S]),R.createElement(Ey,{basename:i,children:u,location:h.location,navigationType:h.action,navigator:m})}var Vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qm=R.forwardRef(function({onClick:u,discover:d="render",prefetch:o="none",relative:m,reloadDocument:h,replace:g,state:S,target:y,to:p,preventScrollReset:v,viewTransition:N,..._},F){let{basename:x}=R.useContext(Ft),C=typeof p=="string"&&Vm.test(p),T,M=!1;if(typeof p=="string"&&C&&(T=p,Zm))try{let ce=new URL(window.location.href),Ue=p.startsWith("//")?new URL(ce.protocol+p):new URL(p),Me=oa(Ue.pathname,x);Ue.origin===ce.origin&&Me!=null?p=Me+Ue.search+Ue.hash:M=!0}catch{Yt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=uy(p,{relative:m}),[Y,P,te]=Yy(o,_),fe=Wy(p,{replace:g,state:S,target:y,preventScrollReset:v,relative:m,viewTransition:N});function J(ce){u&&u(ce),ce.defaultPrevented||fe(ce)}let ge=R.createElement("a",{..._,...te,href:T||z,onClick:M||h?u:J,ref:Vy(F,P),target:y,"data-discover":!C&&d==="render"?"true":void 0});return Y&&!C?R.createElement(R.Fragment,null,ge,R.createElement(Fy,{page:z})):ge});Qm.displayName="Link";var $y=R.forwardRef(function({"aria-current":u="page",caseSensitive:d=!1,className:o="",end:m=!1,style:h,to:g,viewTransition:S,children:y,...p},v){let N=Ql(g,{relative:p.relative}),_=nn(),F=R.useContext(vs),{navigator:x,basename:C}=R.useContext(Ft),T=F!=null&&av(N)&&S===!0,M=x.encodeLocation?x.encodeLocation(N).pathname:N.pathname,z=_.pathname,Y=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;d||(z=z.toLowerCase(),Y=Y?Y.toLowerCase():null,M=M.toLowerCase()),Y&&C&&(Y=oa(Y,C)||Y);const P=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let te=z===M||!m&&z.startsWith(M)&&z.charAt(P)==="/",fe=Y!=null&&(Y===M||!m&&Y.startsWith(M)&&Y.charAt(M.length)==="/"),J={isActive:te,isPending:fe,isTransitioning:T},ge=te?u:void 0,ce;typeof o=="function"?ce=o(J):ce=[o,te?"active":null,fe?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof h=="function"?h(J):h;return R.createElement(Qm,{...p,"aria-current":ge,className:ce,ref:v,style:Ue,to:g,viewTransition:S},typeof y=="function"?y(J):y)});$y.displayName="NavLink";var Ky=R.forwardRef(({discover:i="render",fetcherKey:u,navigate:d,reloadDocument:o,replace:m,state:h,method:g=ps,action:S,onSubmit:y,relative:p,preventScrollReset:v,viewTransition:N,..._},F)=>{let x=ev(),C=tv(S,{relative:p}),T=g.toLowerCase()==="get"?"get":"post",M=typeof S=="string"&&Vm.test(S),z=Y=>{if(y&&y(Y),Y.defaultPrevented)return;Y.preventDefault();let P=Y.nativeEvent.submitter,te=P?.getAttribute("formmethod")||g;x(P||Y.currentTarget,{fetcherKey:u,method:te,navigate:d,replace:m,state:h,relative:p,preventScrollReset:v,viewTransition:N})};return R.createElement("form",{ref:F,method:T,action:C,onSubmit:o?y:z,..._,"data-discover":!M&&i==="render"?"true":void 0})});Ky.displayName="Form";function Jy(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $m(i){let u=R.useContext(Xn);return Qe(u,Jy(i)),u}function Wy(i,{target:u,replace:d,state:o,preventScrollReset:m,relative:h,viewTransition:g}={}){let S=cy(),y=nn(),p=Ql(i,{relative:h});return R.useCallback(v=>{if(Dy(v,u)){v.preventDefault();let N=d!==void 0?d:Fl(y)===Fl(p);S(i,{replace:N,state:o,preventScrollReset:m,relative:h,viewTransition:g})}},[y,S,p,d,o,u,i,m,h,g])}var Iy=0,Py=()=>`__${String(++Iy)}__`;function ev(){let{router:i}=$m("useSubmit"),{basename:u}=R.useContext(Ft),d=xy();return R.useCallback(async(o,m={})=>{let{action:h,method:g,encType:S,formData:y,body:p}=Ry(o,u);if(m.navigate===!1){let v=m.fetcherKey||Py();await i.fetch(v,d,m.action||h,{preventScrollReset:m.preventScrollReset,formData:y,body:p,formMethod:m.method||g,formEncType:m.encType||S,flushSync:m.flushSync})}else await i.navigate(m.action||h,{preventScrollReset:m.preventScrollReset,formData:y,body:p,formMethod:m.method||g,formEncType:m.encType||S,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[i,u,d])}function tv(i,{relative:u}={}){let{basename:d}=R.useContext(Ft),o=R.useContext(da);Qe(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),h={...Ql(i||".",{relative:u})},g=nn();if(i==null){h.search=g.search;let S=new URLSearchParams(h.search),y=S.getAll("index");if(y.some(v=>v==="")){S.delete("index"),y.filter(N=>N).forEach(N=>S.append("index",N));let v=S.toString();h.search=v?`?${v}`:""}}return(!i||i===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:ca([d,h.pathname])),Fl(h)}function av(i,{relative:u}={}){let d=R.useContext(Hm);Qe(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=$m("useViewTransitionState"),m=Ql(i,{relative:u});if(!d.isTransitioning)return!1;let h=oa(d.currentLocation.pathname,o)||d.currentLocation.pathname,g=oa(d.nextLocation.pathname,o)||d.nextLocation.pathname;return gs(m.pathname,g)!=null||gs(m.pathname,h)!=null}var nv=Rm();/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),iv=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,d,o)=>o?o.toUpperCase():d.toLowerCase()),Cm=i=>{const u=iv(i);return u.charAt(0).toUpperCase()+u.slice(1)},Km=(...i)=>i.filter((u,d,o)=>!!u&&u.trim()!==""&&o.indexOf(u)===d).join(" ").trim(),sv=i=>{for(const u in i)if(u.startsWith("aria-")||u==="role"||u==="title")return!0};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=R.forwardRef(({color:i="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:o,className:m="",children:h,iconNode:g,...S},y)=>R.createElement("svg",{ref:y,...rv,width:u,height:u,stroke:i,strokeWidth:o?Number(d)*24/Number(u):d,className:Km("lucide",m),...!h&&!sv(S)&&{"aria-hidden":"true"},...S},[...g.map(([p,v])=>R.createElement(p,v)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=(i,u)=>{const d=R.forwardRef(({className:o,...m},h)=>R.createElement(uv,{ref:h,iconNode:u,className:Km(`lucide-${lv(Cm(i))}`,`lucide-${i}`,o),...m}));return d.displayName=Cm(i),d};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ov=ln("chevron-down",cv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],fv=ln("chevron-right",dv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Ss=ln("code-xml",mv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],hv=ln("code",pv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],yv=ln("eye",gv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],bv=ln("menu",vv);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Am=ln("x",xv),ua=R.forwardRef(({label:i,error:u,helperText:d,icon:o,className:m="",...h},g)=>r.jsxs("div",{className:"ui-input-wrapper",children:[i&&r.jsx("label",{className:"ui-input-label",children:i}),r.jsxs("div",{className:"ui-input-container",children:[o&&r.jsx("span",{className:"ui-input-icon",children:o}),r.jsx("input",{ref:g,className:`ui-input ${o?"has-icon":""} ${u?"error":""} ${m}`,...h})]}),u&&r.jsx("span",{className:"ui-input-error",children:u}),d&&!u&&r.jsx("span",{className:"ui-input-helper",children:d})]}));ua.displayName="Input";const ue=({children:i,variant:u="primary",size:d="md",loading:o=!1,icon:m,className:h="",...g})=>{const S=`ui-button ui-button-${u} ui-button-${d} ${o?"ui-button-loading":""} ${h}`;return r.jsxs("button",{className:S,disabled:o||g.disabled,...g,children:[m&&!o&&m,i]})},Xl=R.forwardRef(({label:i,options:u=[],className:d="",...o},m)=>r.jsxs("div",{className:"ui-select-wrapper",children:[i&&r.jsx("label",{className:"ui-select-label",children:i}),r.jsx("select",{ref:m,className:`ui-select ${d}`,...o,children:u.map((h,g)=>r.jsx("option",{value:h.value,children:h.label},g))})]}));Xl.displayName="Select";const an=R.forwardRef(({label:i,className:u="",...d},o)=>r.jsxs("label",{className:"ui-checkbox-wrapper",children:[r.jsx("input",{ref:o,type:"checkbox",className:`ui-checkbox-input ${u}`,...d}),i&&r.jsx("span",{className:"ui-checkbox-label",children:i})]}));an.displayName="Checkbox";const Yl=R.forwardRef(({label:i,className:u="",...d},o)=>r.jsxs("label",{className:"ui-switch-wrapper",children:[r.jsx("input",{ref:o,type:"checkbox",className:`ui-switch-input ${u}`,...d}),i&&r.jsx("span",{className:"ui-switch-label",children:i})]}));Yl.displayName="Switch";const V=({children:i,className:u="",...d})=>r.jsx("div",{className:`ui-card ${u}`,...d,children:i});V.Header=({children:i,className:u=""})=>r.jsx("div",{className:`ui-card-header ${u}`,children:i});V.Title=({children:i,className:u=""})=>r.jsx("h3",{className:`ui-card-title ${u}`,children:i});V.Subtitle=({children:i,className:u=""})=>r.jsx("p",{className:`ui-card-subtitle ${u}`,children:i});V.Content=({children:i,className:u=""})=>r.jsx("div",{className:`ui-card-content ${u}`,children:i});V.Footer=({children:i,className:u=""})=>r.jsx("div",{className:`ui-card-footer ${u}`,children:i});const Mt=({isOpen:i,onClose:u,children:d})=>(R.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[i]),i?nv.createPortal(r.jsx("div",{className:"ui-modal-overlay",onClick:u,children:r.jsx("div",{className:"ui-modal-content",onClick:o=>o.stopPropagation(),children:d})}),document.body):null);Mt.Header=({children:i,onClose:u})=>r.jsxs("div",{className:"ui-modal-header",children:[r.jsx("h2",{className:"ui-modal-title",children:i}),u&&r.jsx("button",{className:"ui-modal-close",onClick:u,children:"✕"})]});Mt.Body=({children:i})=>r.jsx("div",{className:"ui-modal-body",children:i});Mt.Footer=({children:i})=>r.jsx("div",{className:"ui-modal-footer",children:i});const Ju=({children:i,content:u})=>r.jsxs("div",{className:"ui-tooltip-wrapper",children:[i,r.jsx("div",{className:"ui-tooltip-content",children:u})]});function Sv(){return r.jsx("div",{className:"coming-soon-page",children:r.jsx(V,{className:"coming-soon-card",children:r.jsxs("div",{className:"coming-soon-content",children:[r.jsx("h1",{className:"coming-title",children:"🚧 Coming Soon 🚧"}),r.jsx("p",{className:"coming-subtitle",children:"Bài học này đang được xây dựng. Hãy quay lại sau nhé! 💻"}),r.jsx("div",{className:"coming-illustration",children:"⏳"}),r.jsx(ue,{variant:"primary",size:"lg",className:"coming-home-button",onClick:()=>window.location.href="/",children:"← Quay về trang chính"})]})})})}function Jm(i){var u,d,o="";if(typeof i=="string"||typeof i=="number")o+=i;else if(typeof i=="object")if(Array.isArray(i)){var m=i.length;for(u=0;u<m;u++)i[u]&&(d=Jm(i[u]))&&(o&&(o+=" "),o+=d)}else for(d in i)i[d]&&(o&&(o+=" "),o+=d);return o}function Wm(){for(var i,u,d=0,o="",m=arguments.length;d<m;d++)(i=arguments[d])&&(u=Jm(i))&&(o&&(o+=" "),o+=u);return o}var Nv=Object.create,Ns=Object.defineProperty,jv=Object.defineProperties,Ev=Object.getOwnPropertyDescriptor,Cv=Object.getOwnPropertyDescriptors,Im=Object.getOwnPropertyNames,ys=Object.getOwnPropertySymbols,Av=Object.getPrototypeOf,sc=Object.prototype.hasOwnProperty,Pm=Object.prototype.propertyIsEnumerable,Tm=(i,u,d)=>u in i?Ns(i,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):i[u]=d,Gt=(i,u)=>{for(var d in u||(u={}))sc.call(u,d)&&Tm(i,d,u[d]);if(ys)for(var d of ys(u))Pm.call(u,d)&&Tm(i,d,u[d]);return i},js=(i,u)=>jv(i,Cv(u)),ep=(i,u)=>{var d={};for(var o in i)sc.call(i,o)&&u.indexOf(o)<0&&(d[o]=i[o]);if(i!=null&&ys)for(var o of ys(i))u.indexOf(o)<0&&Pm.call(i,o)&&(d[o]=i[o]);return d},Tv=(i,u)=>function(){return u||(0,i[Im(i)[0]])((u={exports:{}}).exports,u),u.exports},wv=(i,u)=>{for(var d in u)Ns(i,d,{get:u[d],enumerable:!0})},Dv=(i,u,d,o)=>{if(u&&typeof u=="object"||typeof u=="function")for(let m of Im(u))!sc.call(i,m)&&m!==d&&Ns(i,m,{get:()=>u[m],enumerable:!(o=Ev(u,m))||o.enumerable});return i},_v=(i,u,d)=>(d=i!=null?Nv(Av(i)):{},Dv(!i||!i.__esModule?Ns(d,"default",{value:i,enumerable:!0}):d,i)),Ov=Tv({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(i,u){var d=(function(){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,m=0,h={},g={util:{encode:function x(C){return C instanceof S?new S(C.type,x(C.content),C.alias):Array.isArray(C)?C.map(x):C.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(x){return Object.prototype.toString.call(x).slice(8,-1)},objId:function(x){return x.__id||Object.defineProperty(x,"__id",{value:++m}),x.__id},clone:function x(C,T){T=T||{};var M,z;switch(g.util.type(C)){case"Object":if(z=g.util.objId(C),T[z])return T[z];M={},T[z]=M;for(var Y in C)C.hasOwnProperty(Y)&&(M[Y]=x(C[Y],T));return M;case"Array":return z=g.util.objId(C),T[z]?T[z]:(M=[],T[z]=M,C.forEach(function(P,te){M[te]=x(P,T)}),M);default:return C}},getLanguage:function(x){for(;x;){var C=o.exec(x.className);if(C)return C[1].toLowerCase();x=x.parentElement}return"none"},setLanguage:function(x,C){x.className=x.className.replace(RegExp(o,"gi"),""),x.classList.add("language-"+C)},isActive:function(x,C,T){for(var M="no-"+C;x;){var z=x.classList;if(z.contains(C))return!0;if(z.contains(M))return!1;x=x.parentElement}return!!T}},languages:{plain:h,plaintext:h,text:h,txt:h,extend:function(x,C){var T=g.util.clone(g.languages[x]);for(var M in C)T[M]=C[M];return T},insertBefore:function(x,C,T,M){M=M||g.languages;var z=M[x],Y={};for(var P in z)if(z.hasOwnProperty(P)){if(P==C)for(var te in T)T.hasOwnProperty(te)&&(Y[te]=T[te]);T.hasOwnProperty(P)||(Y[P]=z[P])}var fe=M[x];return M[x]=Y,g.languages.DFS(g.languages,function(J,ge){ge===fe&&J!=x&&(this[J]=Y)}),Y},DFS:function x(C,T,M,z){z=z||{};var Y=g.util.objId;for(var P in C)if(C.hasOwnProperty(P)){T.call(C,P,C[P],M||P);var te=C[P],fe=g.util.type(te);fe==="Object"&&!z[Y(te)]?(z[Y(te)]=!0,x(te,T,null,z)):fe==="Array"&&!z[Y(te)]&&(z[Y(te)]=!0,x(te,T,P,z))}}},plugins:{},highlight:function(x,C,T){var M={code:x,grammar:C,language:T};if(g.hooks.run("before-tokenize",M),!M.grammar)throw new Error('The language "'+M.language+'" has no grammar.');return M.tokens=g.tokenize(M.code,M.grammar),g.hooks.run("after-tokenize",M),S.stringify(g.util.encode(M.tokens),M.language)},tokenize:function(x,C){var T=C.rest;if(T){for(var M in T)C[M]=T[M];delete C.rest}var z=new v;return N(z,z.head,x),p(x,z,C,z.head,0),F(z)},hooks:{all:{},add:function(x,C){var T=g.hooks.all;T[x]=T[x]||[],T[x].push(C)},run:function(x,C){var T=g.hooks.all[x];if(!(!T||!T.length))for(var M=0,z;z=T[M++];)z(C)}},Token:S};function S(x,C,T,M){this.type=x,this.content=C,this.alias=T,this.length=(M||"").length|0}S.stringify=function x(C,T){if(typeof C=="string")return C;if(Array.isArray(C)){var M="";return C.forEach(function(fe){M+=x(fe,T)}),M}var z={type:C.type,content:x(C.content,T),tag:"span",classes:["token",C.type],attributes:{},language:T},Y=C.alias;Y&&(Array.isArray(Y)?Array.prototype.push.apply(z.classes,Y):z.classes.push(Y)),g.hooks.run("wrap",z);var P="";for(var te in z.attributes)P+=" "+te+'="'+(z.attributes[te]||"").replace(/"/g,"&quot;")+'"';return"<"+z.tag+' class="'+z.classes.join(" ")+'"'+P+">"+z.content+"</"+z.tag+">"};function y(x,C,T,M){x.lastIndex=C;var z=x.exec(T);if(z&&M&&z[1]){var Y=z[1].length;z.index+=Y,z[0]=z[0].slice(Y)}return z}function p(x,C,T,M,z,Y){for(var P in T)if(!(!T.hasOwnProperty(P)||!T[P])){var te=T[P];te=Array.isArray(te)?te:[te];for(var fe=0;fe<te.length;++fe){if(Y&&Y.cause==P+","+fe)return;var J=te[fe],ge=J.inside,ce=!!J.lookbehind,Ue=!!J.greedy,Me=J.alias;if(Ue&&!J.pattern.global){var _e=J.pattern.toString().match(/[imsuy]*$/)[0];J.pattern=RegExp(J.pattern.source,_e+"g")}for(var Ut=J.pattern||J,De=M.next,Be=z;De!==C.tail&&!(Y&&Be>=Y.reach);Be+=De.value.length,De=De.next){var U=De.value;if(C.length>x.length)return;if(!(U instanceof S)){var X=1,I;if(Ue){if(I=y(Ut,Be,x,ce),!I||I.index>=x.length)break;var H=I.index,Ne=I.index+I[0].length,me=Be;for(me+=De.value.length;H>=me;)De=De.next,me+=De.value.length;if(me-=De.value.length,Be=me,De.value instanceof S)continue;for(var E=De;E!==C.tail&&(me<Ne||typeof E.value=="string");E=E.next)X++,me+=E.value.length;X--,U=x.slice(Be,me),I.index-=Be}else if(I=y(Ut,0,U,ce),!I)continue;var H=I.index,Z=I[0],$=U.slice(0,H),ne=U.slice(H+Z.length),se=Be+U.length;Y&&se>Y.reach&&(Y.reach=se);var ye=De.prev;$&&(ye=N(C,ye,$),Be+=$.length),_(C,ye,X);var Je=new S(P,ge?g.tokenize(Z,ge):Z,Me,Z);if(De=N(C,ye,Je),ne&&N(C,De,ne),X>1){var Oe={cause:P+","+fe,reach:se};p(x,C,T,De.prev,Be,Oe),Y&&Oe.reach>Y.reach&&(Y.reach=Oe.reach)}}}}}}function v(){var x={value:null,prev:null,next:null},C={value:null,prev:x,next:null};x.next=C,this.head=x,this.tail=C,this.length=0}function N(x,C,T){var M=C.next,z={value:T,prev:C,next:M};return C.next=z,M.prev=z,x.length++,z}function _(x,C,T){for(var M=C.next,z=0;z<T&&M!==x.tail;z++)M=M.next;C.next=M,M.prev=C,x.length-=z}function F(x){for(var C=[],T=x.head.next;T!==x.tail;)C.push(T.value),T=T.next;return C}return g})();u.exports=d,d.default=d}}),G=_v(Ov());G.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},G.languages.markup.tag.inside["attr-value"].inside.entity=G.languages.markup.entity,G.languages.markup.doctype.inside["internal-subset"].inside=G.languages.markup,G.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(G.languages.markup.tag,"addInlined",{value:function(i,o){var d={},d=(d["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:G.languages[o]},d.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}}),o=(d["language-"+o]={pattern:/[\s\S]+/,inside:G.languages[o]},{});o[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:d},G.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(G.languages.markup.tag,"addAttribute",{value:function(i,u){G.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:G.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),G.languages.html=G.languages.markup,G.languages.mathml=G.languages.markup,G.languages.svg=G.languages.markup,G.languages.xml=G.languages.extend("markup",{}),G.languages.ssml=G.languages.xml,G.languages.atom=G.languages.xml,G.languages.rss=G.languages.xml,(function(i){var u={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},d=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,o="(?:[^\\\\-]|"+d.source+")",o=RegExp(o+"-"+o),m={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};i.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:o,inside:{escape:d,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":u,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:d}},"special-escape":u,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":m}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:d,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":m}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(G),G.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},G.languages.javascript=G.languages.extend("clike",{"class-name":[G.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),G.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,G.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:G.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:G.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:G.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:G.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:G.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),G.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:G.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),G.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),G.languages.markup&&(G.languages.markup.tag.addInlined("script","javascript"),G.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),G.languages.js=G.languages.javascript,G.languages.actionscript=G.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),G.languages.actionscript["class-name"].alias="function",delete G.languages.actionscript.parameter,delete G.languages.actionscript["literal-property"],G.languages.markup&&G.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:G.languages.markup}}),(function(i){var u=/#(?!\{).+/,d={pattern:/#\{[^}]+\}/,alias:"variable"};i.languages.coffeescript=i.languages.extend("javascript",{comment:u,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:d}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),i.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:u,interpolation:d}}}),i.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:i.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:d}}]}),i.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete i.languages.coffeescript["template-string"],i.languages.coffee=i.languages.coffeescript})(G),(function(i){var u=i.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(u,"addSupport",{value:function(d,o){(d=typeof d=="string"?[d]:d).forEach(function(m){var h=function(N){N.inside||(N.inside={}),N.inside.rest=o},g="doc-comment";if(S=i.languages[m]){var S,y=S[g];if((y=y||(S=i.languages.insertBefore(m,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[g])instanceof RegExp&&(y=S[g]={pattern:y}),Array.isArray(y))for(var p=0,v=y.length;p<v;p++)y[p]instanceof RegExp&&(y[p]={pattern:y[p]}),h(y[p]);else h(y)}})}}),u.addSupport(["java","javascript","php"],u)})(G),(function(i){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,u=(i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css,i.languages.markup);u&&(u.tag.addInlined("style","css"),u.tag.addAttribute("style","css"))})(G),(function(i){var u=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,u=(i.languages.css.selector={pattern:i.languages.css.selector.pattern,lookbehind:!0,inside:u={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+u.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[u,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},i.languages.css.atrule.inside["selector-function-argument"].inside=u,i.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),d={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};i.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:u,number:d,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:u,number:d})})(G),(function(i){var u=/[*&][^\s[\]{},]+/,d=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,o="(?:"+d.source+"(?:[ 	]+"+u.source+")?|"+u.source+"(?:[ 	]+"+d.source+")?)",m=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),h=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function g(S,y){y=(y||"").replace(/m/g,"")+"m";var p=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<value>>/g,function(){return S});return RegExp(p,y)}i.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return o})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<key>>/g,function(){return"(?:"+m+"|"+h+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:g(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:g(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:g(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:g(h),lookbehind:!0,greedy:!0},number:{pattern:g(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:d,important:u,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},i.languages.yml=i.languages.yaml})(G),(function(i){var u=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function d(p){return p=p.replace(/<inner>/g,function(){return u}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+p+")")}var o=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,m=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return o}),h=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,g=(i.languages.markdown=i.languages.extend("markup",{}),i.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:i.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+m+h+"(?:"+m+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+m+h+")(?:"+m+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(o),inside:i.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+m+")"+h+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+m+"$"),inside:{"table-header":{pattern:RegExp(o),alias:"important",inside:i.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:d(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:d(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:d(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:d(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(p){["url","bold","italic","strike","code-snippet"].forEach(function(v){p!==v&&(i.languages.markdown[p].inside.content.inside[v]=i.languages.markdown[v])})}),i.hooks.add("after-tokenize",function(p){p.language!=="markdown"&&p.language!=="md"||(function v(N){if(N&&typeof N!="string")for(var _=0,F=N.length;_<F;_++){var x,C=N[_];C.type!=="code"?v(C.content):(x=C.content[1],C=C.content[3],x&&C&&x.type==="code-language"&&C.type==="code-block"&&typeof x.content=="string"&&(x=x.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),x="language-"+(x=(/[a-z][\w-]*/i.exec(x)||[""])[0].toLowerCase()),C.alias?typeof C.alias=="string"?C.alias=[C.alias,x]:C.alias.push(x):C.alias=[x]))}})(p.tokens)}),i.hooks.add("wrap",function(p){if(p.type==="code-block"){for(var v="",N=0,_=p.classes.length;N<_;N++){var F=p.classes[N],F=/language-(.+)/.exec(F);if(F){v=F[1];break}}var x,C=i.languages[v];C?p.content=i.highlight((function(T){return T=T.replace(g,""),T=T.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(M,z){var Y;return(z=z.toLowerCase())[0]==="#"?(Y=z[1]==="x"?parseInt(z.slice(2),16):Number(z.slice(1)),y(Y)):S[z]||M})})(p.content),C,v):v&&v!=="none"&&i.plugins.autoloader&&(x="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),p.attributes.id=x,i.plugins.autoloader.loadLanguages(v,function(){var T=document.getElementById(x);T&&(T.innerHTML=i.highlight(T.textContent,i.languages[v],v))}))}}),RegExp(i.languages.markup.tag.pattern.source,"gi")),S={amp:"&",lt:"<",gt:">",quot:'"'},y=String.fromCodePoint||String.fromCharCode;i.languages.md=i.languages.markdown})(G),G.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:G.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},G.hooks.add("after-tokenize",function(i){if(i.language==="graphql")for(var u=i.tokens.filter(function(x){return typeof x!="string"&&x.type!=="comment"&&x.type!=="scalar"}),d=0;d<u.length;){var o=u[d++];if(o.type==="keyword"&&o.content==="mutation"){var m=[];if(N(["definition-mutation","punctuation"])&&v(1).content==="("){d+=2;var h=_(/^\($/,/^\)$/);if(h===-1)continue;for(;d<h;d++){var g=v(0);g.type==="variable"&&(F(g,"variable-input"),m.push(g.content))}d=h+1}if(N(["punctuation","property-query"])&&v(0).content==="{"&&(d++,F(v(0),"property-mutation"),0<m.length)){var S=_(/^\{$/,/^\}$/);if(S!==-1)for(var y=d;y<S;y++){var p=u[y];p.type==="variable"&&0<=m.indexOf(p.content)&&F(p,"variable-input")}}}}function v(x){return u[d+x]}function N(x,C){C=C||0;for(var T=0;T<x.length;T++){var M=v(T+C);if(!M||M.type!==x[T])return}return 1}function _(x,C){for(var T=1,M=d;M<u.length;M++){var z=u[M],Y=z.content;if(z.type==="punctuation"&&typeof Y=="string"){if(x.test(Y))T++;else if(C.test(Y)&&--T===0)return M}}return-1}function F(x,C){var T=x.alias;T?Array.isArray(T)||(x.alias=T=[T]):x.alias=T=[],T.push(C)}}),G.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},(function(i){var u=i.languages.javascript["template-string"],d=u.pattern.source,o=u.inside.interpolation,m=o.inside["interpolation-punctuation"],h=o.pattern.source;function g(N,_){if(i.languages[N])return{pattern:RegExp("((?:"+_+")\\s*)"+d),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:N}}}}function S(N,_,F){return N={code:N,grammar:_,language:F},i.hooks.run("before-tokenize",N),N.tokens=i.tokenize(N.code,N.grammar),i.hooks.run("after-tokenize",N),N.tokens}function y(N,_,F){var T=i.tokenize(N,{interpolation:{pattern:RegExp(h),lookbehind:!0}}),x=0,C={},T=S(T.map(function(z){if(typeof z=="string")return z;for(var Y,P,z=z.content;N.indexOf((P=x++,Y="___"+F.toUpperCase()+"_"+P+"___"))!==-1;);return C[Y]=z,Y}).join(""),_,F),M=Object.keys(C);return x=0,(function z(Y){for(var P=0;P<Y.length;P++){if(x>=M.length)return;var te,fe,J,ge,ce,Ue,Me,_e=Y[P];typeof _e=="string"||typeof _e.content=="string"?(te=M[x],(Me=(Ue=typeof _e=="string"?_e:_e.content).indexOf(te))!==-1&&(++x,fe=Ue.substring(0,Me),ce=C[te],J=void 0,(ge={})["interpolation-punctuation"]=m,(ge=i.tokenize(ce,ge)).length===3&&((J=[1,1]).push.apply(J,S(ge[1],i.languages.javascript,"javascript")),ge.splice.apply(ge,J)),J=new i.Token("interpolation",ge,o.alias,ce),ge=Ue.substring(Me+te.length),ce=[],fe&&ce.push(fe),ce.push(J),ge&&(z(Ue=[ge]),ce.push.apply(ce,Ue)),typeof _e=="string"?(Y.splice.apply(Y,[P,1].concat(ce)),P+=ce.length-1):_e.content=ce)):(Me=_e.content,Array.isArray(Me)?z(Me):z([Me]))}})(T),new i.Token(F,T,"language-"+F,N)}i.languages.javascript["template-string"]=[g("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),g("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),g("svg",/\bsvg/.source),g("markdown",/\b(?:markdown|md)/.source),g("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),g("sql",/\bsql/.source),u].filter(Boolean);var p={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function v(N){return typeof N=="string"?N:Array.isArray(N)?N.map(v).join(""):v(N.content)}i.hooks.add("after-tokenize",function(N){N.language in p&&(function _(F){for(var x=0,C=F.length;x<C;x++){var T,M,z,Y=F[x];typeof Y!="string"&&(T=Y.content,Array.isArray(T)?Y.type==="template-string"?(Y=T[1],T.length===3&&typeof Y!="string"&&Y.type==="embedded-code"&&(M=v(Y),Y=Y.alias,Y=Array.isArray(Y)?Y[0]:Y,z=i.languages[Y])&&(T[1]=y(M,z,Y))):_(T):typeof T!="string"&&_([T]))}})(N.tokens)})})(G),(function(i){i.languages.typescript=i.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),i.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete i.languages.typescript.parameter,delete i.languages.typescript["literal-property"];var u=i.languages.extend("typescript",{});delete u["class-name"],i.languages.typescript["class-name"].inside=u,i.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:u}}}}),i.languages.ts=i.languages.typescript})(G),(function(i){var u=i.languages.javascript,d=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,o="(@(?:arg|argument|param|property)\\s+(?:"+d+"\\s+)?)";i.languages.jsdoc=i.languages.extend("javadoclike",{parameter:{pattern:RegExp(o+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),i.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(o+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:u,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return d})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+d),lookbehind:!0,inside:{string:u.string,number:u.number,boolean:u.boolean,keyword:i.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:u,alias:"language-javascript"}}}}),i.languages.javadoclike.addSupport("javascript",i.languages.jsdoc)})(G),(function(i){i.languages.flow=i.languages.extend("javascript",{}),i.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),i.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete i.languages.flow.parameter,i.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(i.languages.flow.keyword)||(i.languages.flow.keyword=[i.languages.flow.keyword]),i.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})})(G),G.languages.n4js=G.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),G.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),G.languages.n4jsd=G.languages.n4js,(function(i){function u(g,S){return RegExp(g.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),S)}i.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+i.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),i.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+i.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),i.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),i.languages.insertBefore("javascript","keyword",{imports:{pattern:u(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:i.languages.javascript},exports:{pattern:u(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:i.languages.javascript}}),i.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),i.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),i.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:u(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var d=["function","function-variable","method","method-variable","property-access"],o=0;o<d.length;o++){var h=d[o],m=i.languages.javascript[h],h=(m=i.util.type(m)==="RegExp"?i.languages.javascript[h]={pattern:m}:m).inside||{};(m.inside=h)["maybe-class-name"]=/^[A-Z][\s\S]*/}})(G),(function(i){var u=i.util.clone(i.languages.javascript),d=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,m=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function h(y,p){return y=y.replace(/<S>/g,function(){return d}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return m}),RegExp(y,p)}m=h(m).source,i.languages.jsx=i.languages.extend("markup",u),i.languages.jsx.tag.pattern=h(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),i.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,i.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,i.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,i.languages.jsx.tag.inside.comment=u.comment,i.languages.insertBefore("inside","attr-name",{spread:{pattern:h(/<SPREAD>/.source),inside:i.languages.jsx}},i.languages.jsx.tag),i.languages.insertBefore("inside","special-attr",{script:{pattern:h(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:i.languages.jsx}}},i.languages.jsx.tag);function g(y){for(var p=[],v=0;v<y.length;v++){var N=y[v],_=!1;typeof N!="string"&&(N.type==="tag"&&N.content[0]&&N.content[0].type==="tag"?N.content[0].content[0].content==="</"?0<p.length&&p[p.length-1].tagName===S(N.content[0].content[1])&&p.pop():N.content[N.content.length-1].content!=="/>"&&p.push({tagName:S(N.content[0].content[1]),openedBraces:0}):0<p.length&&N.type==="punctuation"&&N.content==="{"?p[p.length-1].openedBraces++:0<p.length&&0<p[p.length-1].openedBraces&&N.type==="punctuation"&&N.content==="}"?p[p.length-1].openedBraces--:_=!0),(_||typeof N=="string")&&0<p.length&&p[p.length-1].openedBraces===0&&(_=S(N),v<y.length-1&&(typeof y[v+1]=="string"||y[v+1].type==="plain-text")&&(_+=S(y[v+1]),y.splice(v+1,1)),0<v&&(typeof y[v-1]=="string"||y[v-1].type==="plain-text")&&(_=S(y[v-1])+_,y.splice(v-1,1),v--),y[v]=new i.Token("plain-text",_,null,_)),N.content&&typeof N.content!="string"&&g(N.content)}}var S=function(y){return y?typeof y=="string"?y:typeof y.content=="string"?y.content:y.content.map(S).join(""):""};i.hooks.add("after-tokenize",function(y){y.language!=="jsx"&&y.language!=="tsx"||g(y.tokens)})})(G),(function(i){var u=i.util.clone(i.languages.typescript),u=(i.languages.tsx=i.languages.extend("jsx",u),delete i.languages.tsx.parameter,delete i.languages.tsx["literal-property"],i.languages.tsx.tag);u.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+u.pattern.source+")",u.pattern.flags),u.lookbehind=!0})(G),G.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},G.languages.swift["string-literal"].forEach(function(i){i.inside.interpolation.inside=G.languages.swift}),(function(i){i.languages.kotlin=i.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete i.languages.kotlin["class-name"];var u={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:i.languages.kotlin}};i.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:u},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:u},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete i.languages.kotlin.string,i.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),i.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),i.languages.kt=i.languages.kotlin,i.languages.kts=i.languages.kotlin})(G),G.languages.c=G.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),G.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),G.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},G.languages.c.string],char:G.languages.c.char,comment:G.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:G.languages.c}}}}),G.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete G.languages.c.boolean,G.languages.objectivec=G.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete G.languages.objectivec["class-name"],G.languages.objc=G.languages.objectivec,G.languages.reason=G.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),G.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete G.languages.reason.function,(function(i){for(var u=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,d=0;d<2;d++)u=u.replace(/<self>/g,function(){return u});u=u.replace(/<self>/g,function(){return/[^\s\S]/.source}),i.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+u),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},i.languages.rust["closure-params"].inside.rest=i.languages.rust,i.languages.rust.attribute.inside.string=i.languages.rust.string})(G),G.languages.go=G.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),G.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete G.languages.go["class-name"],(function(i){var u=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,d=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return u.source});i.languages.cpp=i.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return u.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:u,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),i.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return d})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),i.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i.languages.cpp}}}}),i.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),i.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:i.languages.extend("cpp",{})}}),i.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},i.languages.cpp["base-clause"])})(G),G.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},G.languages.python["string-interpolation"].inside.interpolation.inside.rest=G.languages.python,G.languages.py=G.languages.python,G.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},G.languages.webmanifest=G.languages.json;var tp={};wv(tp,{dracula:()=>zv,duotoneDark:()=>Mv,duotoneLight:()=>Bv,github:()=>Hv,gruvboxMaterialDark:()=>pb,gruvboxMaterialLight:()=>gb,jettwaveDark:()=>sb,jettwaveLight:()=>ub,nightOwl:()=>Gv,nightOwlLight:()=>Fv,oceanicNext:()=>Zv,okaidia:()=>Qv,oneDark:()=>ob,oneLight:()=>fb,palenight:()=>Kv,shadesOfPurple:()=>Wv,synthwave84:()=>Pv,ultramin:()=>tb,vsDark:()=>ap,vsLight:()=>lb});var Rv={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},zv=Rv,kv={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Mv=kv,Uv={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},Bv=Uv,Lv={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},Hv=Lv,qv={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},Gv=qv,Yv={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},Fv=Yv,St={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},Xv={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:St.keyword}},{types:["attr-value"],style:{color:St.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:St.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:St.primitive}},{types:["boolean"],style:{color:St.boolean}},{types:["tag"],style:{color:St.tag}},{types:["string"],style:{color:St.string}},{types:["punctuation"],style:{color:St.string}},{types:["selector","char","builtin","inserted"],style:{color:St.char}},{types:["function"],style:{color:St.function}},{types:["operator","entity","url","variable"],style:{color:St.variable}},{types:["keyword"],style:{color:St.keyword}},{types:["atrule","class-name"],style:{color:St.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},Zv=Xv,Vv={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},Qv=Vv,$v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Kv=$v,Jv={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},Wv=Jv,Iv={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},Pv=Iv,eb={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},tb=eb,ab={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},ap=ab,nb={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},lb=nb,ib={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},sb=ib,rb={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},ub=rb,cb={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},ob=cb,db={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},fb=db,mb={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},pb=mb,hb={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},gb=hb,yb=i=>R.useCallback(u=>{var d=u,{className:o,style:m,line:h}=d,g=ep(d,["className","style","line"]);const S=js(Gt({},g),{className:Wm("token-line",o)});return typeof i=="object"&&"plain"in i&&(S.style=i.plain),typeof m=="object"&&(S.style=Gt(Gt({},S.style||{}),m)),S},[i]),vb=i=>{const u=R.useCallback(({types:d,empty:o})=>{if(i!=null){{if(d.length===1&&d[0]==="plain")return o!=null?{display:"inline-block"}:void 0;if(d.length===1&&o!=null)return i[d[0]]}return Object.assign(o!=null?{display:"inline-block"}:{},...d.map(m=>i[m]))}},[i]);return R.useCallback(d=>{var o=d,{token:m,className:h,style:g}=o,S=ep(o,["token","className","style"]);const y=js(Gt({},S),{className:Wm("token",...m.types,h),children:m.content,style:u(m)});return g!=null&&(y.style=Gt(Gt({},y.style||{}),g)),y},[u])},bb=/\r\n|\r|\n/,wm=i=>{i.length===0?i.push({types:["plain"],content:`
`,empty:!0}):i.length===1&&i[0].content===""&&(i[0].content=`
`,i[0].empty=!0)},Dm=(i,u)=>{const d=i.length;return d>0&&i[d-1]===u?i:i.concat(u)},xb=i=>{const u=[[]],d=[i],o=[0],m=[i.length];let h=0,g=0,S=[];const y=[S];for(;g>-1;){for(;(h=o[g]++)<m[g];){let p,v=u[g];const _=d[g][h];if(typeof _=="string"?(v=g>0?v:["plain"],p=_):(v=Dm(v,_.type),_.alias&&(v=Dm(v,_.alias)),p=_.content),typeof p!="string"){g++,u.push(v),d.push(p),o.push(0),m.push(p.length);continue}const F=p.split(bb),x=F.length;S.push({types:v,content:F[0]});for(let C=1;C<x;C++)wm(S),y.push(S=[]),S.push({types:v,content:F[C]})}g--,u.pop(),d.pop(),o.pop(),m.pop()}return wm(S),y},_m=xb,Sb=({prism:i,code:u,grammar:d,language:o})=>R.useMemo(()=>{if(d==null)return _m([u]);const m={code:u,grammar:d,language:o,tokens:[]};return i.hooks.run("before-tokenize",m),m.tokens=i.tokenize(u,d),i.hooks.run("after-tokenize",m),_m(m.tokens)},[u,d,o,i]),Nb=(i,u)=>{const{plain:d}=i,o=i.styles.reduce((m,h)=>{const{languages:g,style:S}=h;return g&&!g.includes(u)||h.types.forEach(y=>{const p=Gt(Gt({},m[y]),S);m[y]=p}),m},{});return o.root=d,o.plain=js(Gt({},d),{backgroundColor:void 0}),o},jb=Nb,Eb=({children:i,language:u,code:d,theme:o,prism:m})=>{const h=u.toLowerCase(),g=jb(o,h),S=yb(g),y=vb(g),p=m.languages[h],v=Sb({prism:m,language:h,code:d,grammar:p});return i({tokens:v,className:`prism-code language-${h}`,style:g!=null?g.root:{},getLineProps:S,getTokenProps:y})},Cb=i=>R.createElement(Eb,js(Gt({},i),{prism:i.prism||G,theme:i.theme||ap,code:i.code,language:i.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const Q=({children:i})=>{console.log(i);const[u,d]=R.useState(!1),[o,m]=R.useState("demo"),h=i.find(p=>p.type===Q.Header),g=i.find(p=>p.type===Q.Description),S=i.find(p=>p.type===Q.Demo),y=i.find(p=>p.type===Q.Code);return r.jsxs("div",{className:"exercise-card",children:[r.jsxs("div",{className:"exercise-header",onClick:()=>d(!u),children:[r.jsx("div",{className:"exercise-header-left",children:h}),r.jsx("div",{className:"expand-icon",children:u?r.jsx(ov,{size:20}):r.jsx(fv,{size:20})})]}),u&&r.jsxs("div",{className:"solution-container",children:[r.jsx("div",{className:"exercise-description",children:g}),r.jsxs("div",{className:"tabs-container",children:[r.jsxs("button",{className:`tab ${o==="demo"?"tab-active":""}`,onClick:()=>m("demo"),children:[r.jsx(yv,{size:16}),r.jsx("span",{children:"Demo"})]}),r.jsxs("button",{className:`tab ${o==="code"?"tab-active":""}`,onClick:()=>m("code"),children:[r.jsx(hv,{size:16}),r.jsx("span",{children:"Code"})]})]}),r.jsx("div",{className:"tab-content",children:o==="demo"?r.jsx("div",{className:"demo-slot",children:S}):r.jsxs("div",{className:"code-container",children:[r.jsx("div",{className:"code-header",children:r.jsx("span",{className:"code-lang",children:"jsx"})}),r.jsx(Cb,{theme:tp.nightOwl,code:y?.props?.children||"",language:"jsx",children:({className:p,style:v,tokens:N,getLineProps:_,getTokenProps:F})=>r.jsx("pre",{className:p,style:{...v,overflowX:"auto",borderRadius:8},children:N.map((x,C)=>r.jsx("div",{..._({line:x,key:C}),children:x.map((T,M)=>r.jsx("span",{...F({token:T,key:M})},M))},C))})})]})})]})]})};Q.Header=({order:i,title:u})=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"exercise-number",children:i??"#"}),r.jsx("h3",{className:"exercise-title",children:u})]});Q.Description=({children:i})=>r.jsx("pre",{className:"exercise-description-block",children:r.jsx("code",{children:i})});Q.Demo=({children:i})=>r.jsx(r.Fragment,{children:i});Q.Code=({children:i})=>r.jsx(r.Fragment,{children:i});const Ab={name:"Wireless Headphones",price:99.99,currency:"USD",inStock:!0,rating:4.5,reviews:128,discount:20,image:"https://placehold.co/600x400?text=Headphones"};function Tb({product:i=Ab}){const u={true:"in",false:"out"},d=i.price*(1-i.discount/100),o=Math.round(i.rating);return r.jsxs(V,{className:"product-card-modern",children:[r.jsxs("div",{className:"product-image-wrapper",children:[r.jsx("img",{src:i.image,alt:i.name,className:"product-image"}),r.jsx("div",{className:"product-image-overlay"}),i.discount>0&&r.jsxs("div",{className:"discount-badge-premium",children:["−",i.discount,"%"]}),r.jsx("div",{className:`stock-dot ${i.inStock?"":"out"}`})]}),r.jsxs(V.Content,{style:{padding:"24px"},children:[r.jsx("h3",{className:"product-name-gradient",children:i.name}),r.jsxs("div",{className:"product-price-wrapper",children:[r.jsxs("span",{className:"price-discounted",children:[i.currency," ",d.toFixed(2)]}),i.discount>0&&r.jsxs("span",{className:"price-original",children:[i.currency," ",i.price.toFixed(2)]})]}),r.jsxs("div",{className:"product-rating-modern",children:[r.jsx("div",{className:"rating-stars",children:[...Array(5)].map((m,h)=>r.jsx("span",{className:h<o?"filled":"empty",children:"★"},h))}),r.jsx("span",{className:"rating-value",children:i.rating}),r.jsxs("span",{className:"reviews-count",children:["• ",i.reviews," đánh giá"]})]}),r.jsxs("div",{className:`stock-pill ${u[i.inStock]}`,children:[r.jsx("span",{className:"stock-pill-dot"}),i.inStock?"In Stock":"Out of Stock"]}),r.jsx(ue,{variant:"primary",size:"lg",className:"product-cta-button",disabled:!i.inStock,children:i.inStock?"Thêm vào giỏ hàng":"Hết hàng"})]})]})}const wb=[{name:"Wireless Headphones",price:99.99,currency:"USD",inStock:!0,rating:4.5,reviews:128,discount:20,image:"https://placehold.co/600x400?text=Headphones"},{name:"Bluetooth Speaker",price:59.99,currency:"USD",inStock:!0,rating:4,reviews:50,discount:0,image:"https://placehold.co/600x400?text=Speaker"},{name:"Noise Cancelling Earbuds",price:129.99,currency:"USD",inStock:!1,rating:5,reviews:200,discount:15,image:"https://placehold.co/600x400?text=Earbuds"},{name:"Smart Watch",price:199.99,currency:"USD",inStock:!1,rating:3.5,reviews:80,discount:0,image:"https://placehold.co/600x400?text=SmartWatch"},{name:"Budget Headphones",price:29.99,currency:"USD",inStock:!0,rating:2,reviews:5,discount:10,image:"https://placehold.co/600x400?text=Budget+Headphones"},{name:"New Release Earphones",price:49.99,currency:"USD",inStock:!0,rating:0,reviews:0,discount:0,image:"https://placehold.co/600x400?text=Earphones"}];function Db(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:1,title:"Product Card Component"}),r.jsx(Q.Description,{children:`
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
`}),r.jsx(Q.Demo,{children:r.jsx("div",{className:"grid grid-cols-3",children:wb.map(i=>r.jsx("div",{className:"grid-item",children:r.jsx(Tb,{product:i})},i.id))})}),r.jsx(Q.Code,{children:`
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
`})]})}const _b={city:"Hanoi",temperature:28,condition:"Sunny",humidity:65,wind:12};function Ob({weather:i=_b}){const d={Sunny:{icon:"☀️",bgClass:"bg-sunny"},Rainy:{icon:"🌧️",bgClass:"bg-rainy"},Cloudy:{icon:"☁️",bgClass:"bg-cloudy"}}[i.condition];return r.jsxs(V,{className:`weather-widget-modern ${d.bgClass}`,children:[r.jsx("h2",{className:"weather-city",children:i.city}),r.jsx("div",{className:"weather-icon-big",children:d.icon}),r.jsxs("div",{className:"weather-temperature",children:[i.temperature,"°C"]}),r.jsxs("div",{className:"weather-details",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Humidity"}),r.jsxs("span",{className:"detail-value",children:[i.humidity,"%"]})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Wind"}),r.jsxs("span",{className:"detail-value",children:[i.wind," km/h"]})]})]})]})}const Rb=[{city:"Hanoi",temperature:28,condition:"Sunny",humidity:65,wind:12},{city:"Ho Chi Minh City",temperature:32,condition:"Cloudy",humidity:70,wind:8},{city:"Da Nang",temperature:30,condition:"Rainy",humidity:80,wind:15}];function zb(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:2,title:"Weather Widget"}),r.jsx(Q.Description,{children:`
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

`}),r.jsx(Q.Demo,{children:r.jsx("div",{className:"grid grid-cols-3",children:Rb.map(i=>r.jsx("div",{className:"grid-item",children:r.jsx(Ob,{weather:i})},i.city))})}),r.jsx(Q.Code,{children:`
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

`})]})}function kb(){const i={posts:145,followers:2340,following:890,likes:5678},u=["Posted a new photo","Liked John's post","Followed Jane Smith","Commented on Sarah's story","Shared a reel"],d={posts:{label:"Posts",icon:"📰"},followers:{label:"Followers",icon:"🧑‍🤝‍🧑"},following:{label:"Following",icon:"🔔"},likes:{label:"Likes",icon:"💖"}},o=m=>m.toLocaleString("en-US");return r.jsxs("div",{className:"user-dashboard-modern",children:[r.jsx("div",{className:"stats-grid-modern",children:Object.entries(i).map(([m,h])=>{const{label:g,icon:S}=d[m];return r.jsxs(V,{className:"stat-item-modern","data-type":m,children:[r.jsx("div",{className:"stat-icon-modern",children:S}),r.jsx("div",{className:"stat-value-modern",children:o(h)}),r.jsx("div",{className:"stat-label-modern",children:g})]},m)})}),r.jsxs("div",{className:"activities-section",children:[r.jsx("h3",{className:"activities-title",children:"Recent Activities"}),r.jsx("ul",{className:"activity-list",children:u.map((m,h)=>r.jsx("li",{className:"activity-item",children:m},h))})]})]})}function Mb(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:3,title:"User Stats Dashboard"}),r.jsx(Q.Description,{children:`
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


`}),r.jsx(Q.Demo,{children:r.jsx(kb,{})}),r.jsx(Q.Code,{children:`
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


`})]})}const Ub=new Date().getHours();function Gl({currentHour:i=Ub}){const u="Alex",o=Object.values({morning:{hours:h=>h>=5&&h<=11,text:"Chào buổi sáng",icon:"🌅",bgClass:"bg-morning",quote:"Mỗi buổi sáng là một khởi đầu mới. Hãy làm nó đáng nhớ!"},afternoon:{hours:h=>h>=12&&h<=17,text:"Chào buổi chiều",icon:"☀️",bgClass:"bg-afternoon",quote:"Cố lên! Bạn đã đi được nửa chặng đường rồi!"},evening:{hours:h=>h>=18&&h<=21,text:"Chào buổi tối",icon:"🌆",bgClass:"bg-evening",quote:"Buổi tối là lúc để nhìn lại và nạp lại năng lượng."},night:{hours:h=>h>=22||h<=4,text:"Chúc ngủ ngon",icon:"🌙",bgClass:"bg-night",quote:"Ngủ ngon nhé. Ngày mai lại là một cuộc phiêu lưu mới!"}}).find(h=>h.hours(i)),m=new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit",hour12:!1});return r.jsxs(V,{className:`dynamic-greeting-modern ${o.bgClass}`,children:[r.jsxs("div",{className:"greeting-header",children:[r.jsx("span",{className:"greeting-icon-big",children:o.icon}),r.jsxs("h1",{className:"greeting-text-big",children:[o.text,","," ",r.jsx("span",{className:"user-name-highlight",children:u}),"!"]})]}),r.jsxs("div",{className:"current-time-display",children:[m," • Hà Nội, Việt Nam",r.jsx("div",{className:"flag-vn",children:"🇻🇳"})]}),r.jsx("blockquote",{className:"motivational-quote-premium",children:o.quote})]})}function Bb(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:4,title:"Dynamic Greeting (Challenge)"}),r.jsx(Q.Description,{children:`
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


`}),r.jsxs(Q.Demo,{children:[r.jsxs("div",{className:"now-time",children:[r.jsxs("p",{className:"time text-center",children:["Giờ hiện tại : ",new Date().toLocaleString()]}),r.jsx(Gl,{})]}),r.jsxs("div",{className:"grid grid-cols-2",children:[r.jsxs("div",{className:"grid-item",children:[r.jsx("p",{className:"time text-center",children:"Giờ giả lập: 8:00 AM"}),r.jsx(Gl,{currentHour:8})]}),r.jsxs("div",{className:"grid-item",children:[r.jsx("p",{className:"time text-center",children:"Giờ giả lập: 2:00 PM"}),r.jsx(Gl,{currentHour:14})]}),r.jsxs("div",{className:"grid-item",children:[r.jsx("p",{className:"time text-center",children:"Giờ giả lập: 7:00 PM"}),r.jsx(Gl,{currentHour:19})]}),r.jsxs("div",{className:"grid-item",children:[r.jsx("p",{className:"time text-center",children:"Giờ giả lập: 11:00 PM"}),r.jsx(Gl,{currentHour:23})]})]})]}),r.jsx(Q.Code,{children:`
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


`})]})}const Lb={1:Db,2:zb,3:Mb,4:Bb},Hb=()=>r.jsxs("div",{className:"day-content",children:[r.jsxs("div",{className:"day-header",children:[r.jsxs("div",{className:"day-header-content",children:[r.jsx(Ss,{size:32,color:"#00D9FF"}),r.jsxs("div",{children:[r.jsx("h1",{className:"day-title",children:"Ngày 1"}),r.jsx("p",{className:"day-subtitle",children:"JSX & Rendering Basics"})]})]}),r.jsxs("section",{className:"lesson-goal",children:[r.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Hiểu JSX là gì và cách hoạt động"}),r.jsx("li",{children:"Sử dụng JavaScript expressions trong JSX"}),r.jsx("li",{children:"Làm việc với Fragments"}),r.jsx("li",{children:"Tạo được UI components đơn giản"})]})]})]}),r.jsx("div",{className:"exercises-list",children:Array.from({length:4},(i,u)=>{const d=Lb[u+1];return d?r.jsx(d,{},u):null})})]});function qb(){const i=[{id:1,name:"John Doe",role:"admin",status:"online",lastActive:"2 phút trước",points:1250},{id:2,name:"Jane Smith",role:"user",status:"offline",lastActive:"1 giờ trước",points:890},{id:3,name:"Bob Johnson",role:"moderator",status:"away",lastActive:"15 phút trước",points:2100}],u=[...i].sort((g,S)=>S.points-g.points),d=i.reduce((g,S)=>(g[S.role]=(g[S.role]||0)+1,g),{}),o={online:"🟢",offline:"⚫",away:"🟡"},m={admin:"role-admin",moderator:"role-moderator",user:"role-user"},h={admin:"Admin",moderator:"Moderator",user:"User"};return r.jsxs("div",{className:"user-dashboard-vn",children:[r.jsxs(V,{className:"role-summary-card",children:[r.jsx("h3",{className:"role-summary-title",children:"Tổng quan vai trò"}),r.jsx("ul",{className:"role-summary-list",children:Object.entries(d).map(([g,S])=>r.jsxs("li",{className:"role-summary-item",children:[r.jsx("span",{children:h[g]||g}),r.jsxs("span",{children:[S," người"]})]},g))})]}),u.length===0?r.jsx("div",{className:"empty-state-vn",children:"Không tìm thấy người dùng nào"}):r.jsx("div",{className:"user-list-vn",children:u.map(g=>r.jsxs(V,{className:"user-item-card",children:[r.jsxs("div",{className:"user-info",children:[r.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[r.jsx("span",{className:"user-name-vn",children:g.name}),r.jsx("span",{className:`role-badge-vn ${m[g.role]}`,children:h[g.role]})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsxs("span",{className:"user-status-vn",children:[r.jsx("span",{className:"status-dot",children:o[g.status]}),g.status==="online"?"Đang hoạt động":g.status==="away"?"Vắng mặt":"Ngoại tuyến"]}),g.status!=="online"&&r.jsx("span",{className:"last-active-vn",children:g.lastActive}),r.jsxs("span",{className:"user-points-vn",children:[g.points," điểm"]})]})]}),g.points>1e3&&r.jsx("span",{className:"top-user-badge-vn",children:"Top User"})]},g.id))})]})}function Gb(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:1,title:"User Dashboard"}),r.jsx(Q.Description,{children:`
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

`}),r.jsx(Q.Demo,{children:r.jsx(qb,{})}),r.jsx(Q.Code,{children:`
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


`})]})}function Yb(){const i=[{id:1,name:"Laptop Pro",category:"electronics",price:1299,inStock:!0,rating:4.5,icon:"💻"},{id:2,name:"Ghế văn phòng",category:"furniture",price:299,inStock:!1,rating:4,icon:"🪑"},{id:3,name:"Đèn bàn học",category:"furniture",price:49,inStock:!0,rating:4.8,icon:"💡"},{id:4,name:"Chuột không dây",category:"electronics",price:29,inStock:!0,rating:4.2,icon:"🖱️"},{id:5,name:"Sổ tay",category:"stationery",price:5,inStock:!0,rating:3.9,icon:"📒"}],[u,d]=R.useState("all"),[o,m]=R.useState("all"),[h,g]=R.useState("all"),[S,y]=R.useState("none"),p=i.filter(v=>!(u!=="all"&&v.category!==u||o==="in"&&!v.inStock||o==="out"&&v.inStock||h==="low"&&v.price>=50||h==="mid"&&(v.price<50||v.price>500)||h==="high"&&v.price<=500)).sort((v,N)=>S==="price-low"?v.price-N.price:S==="price-high"?N.price-v.price:S==="rating"?N.rating-v.rating:0);return r.jsxs("div",{className:"product-filter",children:[r.jsxs(V,{className:"filter-bar",children:[r.jsxs("select",{className:"custom-select",value:u,onChange:v=>d(v.target.value),children:[r.jsx("option",{value:"all",children:"Tất cả danh mục"}),r.jsx("option",{value:"electronics",children:"Điện tử"}),r.jsx("option",{value:"furniture",children:"Nội thất"}),r.jsx("option",{value:"stationery",children:"Văn phòng phẩm"})]}),r.jsxs("select",{className:"custom-select",value:o,onChange:v=>m(v.target.value),children:[r.jsx("option",{value:"all",children:"Tất cả kho"}),r.jsx("option",{value:"in",children:"Còn hàng"}),r.jsx("option",{value:"out",children:"Hết hàng"})]}),r.jsxs("select",{className:"custom-select",value:h,onChange:v=>g(v.target.value),children:[r.jsx("option",{value:"all",children:"Tất cả giá"}),r.jsx("option",{value:"low",children:"Dưới 50$"}),r.jsx("option",{value:"mid",children:"50$ - 500$"}),r.jsx("option",{value:"high",children:"Trên 500$"})]}),r.jsxs("select",{className:"custom-select",value:S,onChange:v=>y(v.target.value),children:[r.jsx("option",{value:"none",children:"Không sắp xếp"}),r.jsx("option",{value:"price-low",children:"Giá tăng dần"}),r.jsx("option",{value:"price-high",children:"Giá giảm dần"}),r.jsx("option",{value:"rating",children:"Đánh giá cao nhất"})]})]}),r.jsxs("div",{className:"product-count-display",children:["Hiển thị ",p.length," / ",i.length," sản phẩm"]}),p.length===0?r.jsx("div",{className:"no-products",children:"Không tìm thấy sản phẩm nào"}):r.jsx("div",{className:"product-list",children:p.map(v=>r.jsxs(V,{className:"product-item-card",children:[r.jsx("h3",{className:"product-name",children:v.name}),r.jsx("p",{className:"product-img",children:v.icon}),r.jsxs("div",{className:"product-price",children:["$",v.price]}),r.jsxs("div",{className:"product-rating-stars",children:["★".repeat(Math.floor(v.rating)),v.rating%1>=.5&&"⯪"]}),!v.inStock&&r.jsx("span",{className:"out-of-stock-badge",children:"Hết hàng"})]},v.id))})]})}function Fb(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:2,title:"Product Filter"}),r.jsx(Q.Description,{children:`
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


`}),r.jsx(Q.Demo,{children:r.jsx(Yb,{})}),r.jsx(Q.Code,{children:`
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


`})]})}function Xb(){const[i,u]=R.useState([{id:1,type:"info",message:"Cập nhật hệ thống đã sẵn sàng",read:!1,timestamp:"5 phút trước"},{id:2,type:"success",message:"Thanh toán thành công",read:!0,timestamp:"1 giờ trước"},{id:3,type:"warning",message:"Gói đăng ký của bạn hết hạn sau 3 ngày",read:!1,timestamp:"2 giờ trước"},{id:4,type:"error",message:"Đồng bộ dữ liệu thất bại",read:!1,timestamp:"3 giờ trước"}]),[d,o]=R.useState("all"),[m,h]=R.useState(!1),g={info:{icon:"ℹ️",color:"notification-icon-info"},success:{icon:"✅",color:"notification-icon-success"},warning:{icon:"⚠️",color:"notification-icon-warning"},error:{icon:"❌",color:"notification-icon-error"}},S=i.filter(_=>!_.read).length,y=i.filter(_=>d==="unread"?!_.read:d==="read"?_.read:!0),p=y.reduce((_,F)=>(_[F.type]||(_[F.type]=[]),_[F.type].push(F),_),{}),v=()=>{u(i.map(_=>({..._,read:!0})))},N=()=>{window.confirm("Bạn có chắc chắn muốn xóa tất cả thông báo?")&&u([])};return r.jsxs(V,{className:"notification-center",children:[r.jsxs("div",{className:"notification-header",children:[r.jsxs("h2",{className:"notification-title",children:["Trung tâm thông báo",S>0&&r.jsx("span",{className:"unread-badge",children:S})]}),r.jsxs("div",{className:"notification-controls",children:[r.jsx(Xl,{value:d,onChange:_=>o(_.target.value),options:[{value:"all",label:"Tất cả"},{value:"unread",label:"Chưa đọc"},{value:"read",label:"Đã đọc"}]}),r.jsx(an,{label:"Nhóm theo loại",checked:m,onChange:_=>h(_.target.checked)}),S>0&&r.jsx(ue,{variant:"primary",size:"sm",onClick:v,children:"Đánh dấu tất cả đã đọc"}),r.jsx(ue,{variant:"danger",size:"sm",onClick:N,children:"Xóa tất cả"})]})]}),y.length===0?r.jsx("div",{className:"no-notifications",children:"Không có thông báo nào"}):m?Object.entries(p).map(([_,F])=>r.jsxs("div",{className:"group-section",children:[r.jsx("h3",{className:"group-title",children:_==="info"?"Thông tin":_==="success"?"Thành công":_==="warning"?"Cảnh báo":"Lỗi"}),r.jsx("ul",{className:"notification-list",children:F.map(x=>r.jsxs("li",{className:`notification-item ${x.read?"":"unread"}`,children:[r.jsx("span",{className:`notification-icon ${g[x.type].color}`,children:g[x.type].icon}),r.jsx("span",{className:"notification-message",children:x.message}),r.jsx("span",{className:"notification-timestamp",children:x.timestamp})]},x.id))})]},_)):r.jsx("ul",{className:"notification-list",children:y.map(_=>r.jsxs("li",{className:`notification-item ${_.read?"":"unread"}`,children:[r.jsx("span",{className:`notification-icon ${g[_.type].color}`,children:g[_.type].icon}),r.jsx("span",{className:"notification-message",children:_.message}),r.jsx("span",{className:"notification-timestamp",children:_.timestamp})]},_.id))})]})}function Zb(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:3,title:"Notification Center"}),r.jsx(Q.Description,{children:`
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

`}),r.jsx(Q.Demo,{children:r.jsx(Xb,{})}),r.jsx(Q.Code,{children:`
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

`})]})}function Vb(){const i=[{id:1,title:"Bắt đầu với React",author:"John Doe",date:"2024-01-15",tags:["react","javascript","tutorial"],views:1250,likes:89,featured:!0},{id:2,title:"Kỹ thuật CSS nâng cao",author:"Jane Smith",date:"2024-01-20",tags:["css","design","frontend"],views:890,likes:45,featured:!1},{id:3,title:"Thực hành tốt nhất với Node.js",author:"Bob Johnson",date:"2024-01-25",tags:["nodejs","javascript","backend"],views:2100,likes:156,featured:!0}],[u]=R.useState(i),[d,o]=R.useState(null),[m,h]=R.useState("latest"),[g,S]=R.useState(""),[y,p]=R.useState(2),v=u.filter(x=>!(d&&!x.tags.includes(d)||g&&!x.title.toLowerCase().includes(g.toLowerCase()))).sort((x,C)=>m==="views"?C.views-x.views:m==="likes"?C.likes-x.likes:m==="latest"?new Date(C.date)-new Date(x.date):0),N=v.slice(0,y),_=()=>{o(null),S(""),p(2)},F=()=>{p(x=>Math.min(x+2,v.length))};return r.jsxs("div",{className:"blog-posts",children:[r.jsxs(V,{className:"blog-controls",children:[r.jsx(ua,{placeholder:"Tìm kiếm theo tiêu đề....",icon:"🔍",value:g,onChange:x=>S(x.target.value)}),r.jsx(Xl,{value:m,onChange:x=>h(x.target.value),options:[{value:"latest",label:"Mới nhất"},{value:"views",label:"Xem nhiều nhất"},{value:"likes",label:"Thích nhiều nhất"}]}),d&&r.jsxs("div",{className:"current-tag",children:["Lọc theo: ",d,r.jsx(ue,{variant:"ghost",size:"sm",onClick:()=>o(null),children:"Clear"})]})]}),r.jsxs("div",{className:"results-count",children:["Tìm thấy ",v.length," bài viết"]}),v.length===0?r.jsxs("div",{className:"no-posts",children:[r.jsx("p",{children:"Không tìm thấy bài viết nào"}),r.jsx(ue,{variant:"primary",size:"sm",onClick:_,style:{marginTop:"16px"},children:"Đặt lại bộ lọc"})]}):r.jsxs(r.Fragment,{children:[r.jsx("ul",{className:"post-list",children:N.map(x=>r.jsxs(V,{className:`post-item ${x.featured?"featured":""}`,children:[x.featured&&r.jsx("span",{className:"featured-icon",children:"⭐"}),r.jsx("h3",{className:"post-title",children:x.title}),r.jsxs("div",{className:"post-meta",children:["Bởi ",x.author," •"," ",new Date(x.date).toLocaleDateString("vi-VN")]}),r.jsx("div",{className:"post-tags",children:x.tags.map(C=>r.jsxs("span",{className:"tag-badge",onClick:()=>o(C),children:["#",C]},C))}),r.jsxs("div",{className:"post-stats",children:[r.jsxs("span",{children:["👁️ ",x.views.toLocaleString()]}),r.jsxs("span",{children:["❤️ ",x.likes]})]})]},x.id))}),y<v.length&&r.jsxs(ue,{variant:"primary",size:"lg",onClick:F,className:"load-more-btn",children:["Xem thêm (",v.length-y," bài còn lại)"]})]})]})}function Qb(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:4,title:"Blog Posts with Tags (Challenge)"}),r.jsx(Q.Description,{children:`
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
`}),r.jsx(Q.Demo,{children:r.jsx(Vb,{})}),r.jsx(Q.Code,{children:`
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


`})]})}const $b={1:Gb,2:Fb,3:Zb,4:Qb},Kb=()=>r.jsxs("div",{className:"day-content",children:[r.jsxs("div",{className:"day-header",children:[r.jsxs("div",{className:"day-header-content",children:[r.jsx(Ss,{size:32,color:"#00D9FF"}),r.jsxs("div",{children:[r.jsx("h1",{className:"day-title",children:"Ngày 2"}),r.jsx("p",{className:"day-subtitle",children:"Conditional & List Rendering"})]})]}),r.jsxs("section",{className:"lesson-goal",children:[r.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Render có điều kiện với nhiều cách khác nhau"}),r.jsxs("li",{children:["Render danh sách với ",r.jsx("span",{class:"code-badge",children:"map()"})]}),r.jsxs("li",{children:["Hiểu và sử dụng ",r.jsx("span",{class:"code-badge",children:"key"})," prop đúng cách"]}),r.jsx("li",{children:"Tránh anti-pattern: index as key"})]})]})]}),r.jsx("div",{className:"exercises-list",children:Array.from({length:4},(i,u)=>{const d=$b[u+1];return d?r.jsx(d,{},u):null})})]});function Jb({user:i}){return r.jsxs("div",{className:"user-profile",children:[r.jsx(Wb,{avatar:i.avatar,name:i.name,username:i.username,bio:i.bio,isVerified:i.isVerified}),r.jsx(e0,{posts:i.stats.posts,followers:i.stats.followers,following:i.stats.following}),r.jsx(Ib,{posts:i.posts})]})}function Wb({avatar:i,name:u,username:d,bio:o,isVerified:m}){return r.jsxs(V,{className:"user-header",children:[i&&r.jsx("div",{className:"avatar",children:r.jsx("img",{className:"avatar-img",src:i,alt:u})}),r.jsxs("div",{className:"user-info",children:[r.jsxs("div",{className:"name-row",children:[r.jsx("h2",{className:"user-name",children:u}),m&&r.jsx("span",{className:"verified-badge",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 512 512",children:r.jsxs("g",{fill:"none",fillRule:"evenodd",children:[r.jsx("path",{d:"M256 472.153L176.892 512l-41.725-81.129-86.275-16.654 11.596-91.422L0 256l60.488-66.795-11.596-91.422 86.275-16.654L176.892 0 256 39.847 335.108 0l41.725 81.129 86.275 16.654-11.596 91.422L512 256l-60.488 66.795 11.596 91.422-86.275 16.654L335.108 512z",fill:"#4285f4"}),r.jsx("path",{d:"M211.824 284.5L171 243.678l-36 36 40.824 40.824-.063.062 36 36 .063-.062.062.062 36-36-.062-.062L376.324 192l-36-36z",fill:"#fff"})]})})})]}),r.jsxs("p",{className:"user-username",children:["@",d]}),o&&r.jsx("p",{className:"bio",children:o}),r.jsx(ue,{variant:"primary",size:"md",className:"follow-btn",children:"Follow"})]})]})}function Ib({posts:i=[]}){return i.length===0?r.jsx(V,{className:"user-posts",children:r.jsx("p",{className:"empty-state",children:"Chưa có bài viết nào."})}):r.jsx("div",{className:"user-posts",children:i.map(u=>r.jsx(Pb,{post:u},u.id))})}function Pb({post:i}){const{content:u,image:d,likes:o,comments:m,timestamp:h}=i;return r.jsxs(V,{className:"post-card",children:[d&&r.jsx("img",{src:d,alt:"Bài viết",className:"post-image"}),r.jsxs("div",{className:"post-content",children:[r.jsx("p",{children:u}),r.jsxs("div",{className:"post-actions",children:[r.jsxs(ue,{variant:"ghost",size:"sm",className:"action-btn",children:["❤️ ",o]}),r.jsxs(ue,{variant:"ghost",size:"sm",className:"action-btn",children:["💬 ",m]}),r.jsx(ue,{variant:"ghost",size:"sm",className:"action-btn",children:"🔁"})]}),r.jsx("div",{className:"post-timestamp",children:h})]})]})}function e0({posts:i,followers:u,following:d}){const o=m=>m.toLocaleString("en-US");return r.jsxs("div",{className:"user-stats",children:[r.jsxs(ue,{variant:"ghost",className:"stat-item",children:[r.jsx("div",{className:"stat-value",children:o(i)}),r.jsx("div",{className:"stat-label",children:"Bài viết"})]}),r.jsxs(ue,{variant:"ghost",className:"stat-item",children:[r.jsx("div",{className:"stat-value",children:o(u)}),r.jsx("div",{className:"stat-label",children:"Người theo dõi"})]}),r.jsxs(ue,{variant:"ghost",className:"stat-item",children:[r.jsx("div",{className:"stat-value",children:o(d)}),r.jsx("div",{className:"stat-label",children:"Đang theo dõi"})]})]})}const t0={id:1,name:"John Doe",username:"johndoe",avatar:"https://i.pravatar.cc/150?img=1",bio:"Software Developer | React Enthusiast",isVerified:!0,stats:{posts:145,followers:2340,following:890},posts:[{id:1,content:"Just launched my new project!",image:"https://placehold.co/600x400?text=Post%20Image",likes:89,comments:12,timestamp:"2 hours ago"},{id:2,content:"Learning React is fun!",likes:45,comments:5,timestamp:"1 day ago"}]};function a0(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:1,title:"UserProfile"}),r.jsx(Q.Description,{children:`
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

`}),r.jsx(Q.Demo,{children:r.jsx(Jb,{user:t0})}),r.jsx(Q.Code,{children:`
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

        `})]})}function n0({products:i,onAddToCart:u}){return r.jsx("div",{className:"product-grid",children:i.map(d=>r.jsx(l0,{product:d,onAddToCart:u},d.id))})}function l0({product:i,onAddToCart:u}){const{name:d,price:o,image:m,rating:h,reviews:g,inStock:S=!0,discount:y=0}=i,p=y>0?o/(1-y/100):null;return r.jsxs(V,{className:`product-card ${S?"":"out-of-stock"}`,children:[r.jsx(i0,{src:m,alt:d,discount:y,inStock:S}),r.jsxs("div",{className:"product-info",children:[r.jsx("h3",{className:"product-name",children:d}),r.jsx(r0,{rating:h,reviews:g}),r.jsx(s0,{price:o,originalPrice:p,currency:"USD"}),r.jsx(ue,{variant:"primary",size:"md",className:"add-to-cart-btn",onClick:()=>u?.(i),disabled:!S,children:S?"Add to Cart":"Out of Stock"})]}),!S&&r.jsx("div",{className:"stock-overlay",children:"Out of Stock"})]})}function i0({src:i,alt:u,discount:d=0,inStock:o=!0}){return r.jsxs("div",{className:"product-image-wrapper",children:[r.jsx("img",{src:i||"https://via.placeholder.com/300",alt:u,className:"product-img"}),d>0&&r.jsxs("span",{className:"discount-badge",children:["-",d,"%"]}),!o&&r.jsx("div",{className:"stock-overlay",children:"Out of Stock"})]})}function s0({price:i,originalPrice:u,currency:d="USD"}){const o=u?u-i:0;return r.jsxs("div",{className:"product-price",children:[r.jsxs("span",{className:"current-price",children:[d," ",i.toFixed(2)]}),u&&r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"original-price",children:[d," ",u.toFixed(2)]}),r.jsxs("span",{className:"savings",children:["Save ",d," ",o.toFixed(2)]})]})]})}function r0({rating:i=0,reviews:u=0,size:d="medium"}){const o=Math.floor(i),m=i%1>=.5,h=5-o-(m?1:0);return r.jsxs("div",{className:`rating rating-${d}`,children:[r.jsxs("div",{className:"stars",children:["★".repeat(o),m&&"⯪","☆".repeat(h)]}),r.jsx("span",{className:"rating-value",children:i.toFixed(1)}),u>0&&r.jsxs("span",{className:"reviews-count",children:["(",u," reviews)"]})]})}const u0=[{id:1,name:"Wireless Headphones",price:79.99,image:"https://placehold.co/600x400?text=Wireless%20Headphones",rating:4.5,reviews:128,inStock:!0,discount:20},{id:2,name:"Office Chair",price:299,image:"https://placehold.co/600x400?text=Office%20Chair",rating:4,reviews:45,inStock:!1},{id:3,name:"Desk Lamp",price:49,image:"https://placehold.co/600x400?text=Desk%20Lamp",rating:4.8,reviews:89,inStock:!0}];function c0(){const i=u=>{alert(`Added ${u.name} to cart !`)};return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:2,title:"ProductGrid"}),r.jsx(Q.Description,{children:`
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



`}),r.jsx(Q.Demo,{children:r.jsx(n0,{products:u0,onAddToCart:i})}),r.jsx(Q.Code,{children:`
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

`})]})}const ms={user:{name:"Admin User",avatar:"https://i.pravatar.cc/150?img=5"},sidebarItems:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"products",label:"Products",icon:"📦"},{id:"orders",label:"Orders",icon:"🛒"},{id:"customers",label:"Customers",icon:"👥"},{id:"analytics",label:"Analytics",icon:"📈"}],stats:[{title:"Total Revenue",value:"$45,231",icon:"💰",trend:"up",trendValue:"12%"},{title:"Orders",value:"1,234",icon:"🛒",trend:"up",trendValue:"8%"},{title:"Customers",value:"5,678",icon:"👥",trend:"down",trendValue:"3%"},{title:"Products",value:"890",icon:"📦",trend:"up",trendValue:"5%"}],notifications:5};function o0(){const[i,u]=R.useState("dashboard"),[d,o]=R.useState(!1),[m,h]=R.useState(!1),g=N=>{u(N)},S=()=>{o(N=>!N)},y=()=>{h(N=>!N)},p=()=>{alert("Logged out!"),o(!1)},v=()=>{alert("All notifications marked as read!"),h(!1)};return r.jsxs("div",{className:"dashboard",children:[r.jsx(f0,{items:ms.sidebarItems,activeItem:i,onItemClick:g}),r.jsxs("div",{className:"dashboard-main-content",children:[r.jsx(d0,{user:ms.user,notifications:ms.notifications,onProfileClick:S,onNotificationClick:y}),d&&r.jsx("div",{className:"dashboard-dropdown-menu",children:r.jsxs("ul",{children:[r.jsx("li",{children:"Profile"}),r.jsx("li",{children:"Settings"}),r.jsx("li",{onClick:p,children:"Logout"})]})}),r.jsxs(Mt,{isOpen:m,onClose:()=>h(!1),children:[r.jsx(Mt.Header,{onClose:()=>h(!1),children:"Notifications"}),r.jsx(Mt.Body,{children:r.jsxs("div",{className:"dashboard-modal-body",children:[r.jsxs("div",{className:"dashboard-notification-item",children:[r.jsx("span",{className:"dashboard-notification-icon",children:"🛒"}),r.jsxs("span",{className:"dashboard-notification-text",children:["New order received — ",r.jsx("strong",{children:"#1024"})]})]}),r.jsxs("div",{className:"dashboard-notification-item",children:[r.jsx("span",{className:"dashboard-notification-icon",children:"👤"}),r.jsxs("span",{className:"dashboard-notification-text",children:["User ",r.jsx("strong",{children:"John Doe"})," just registered"]})]}),r.jsxs("div",{className:"dashboard-notification-item",children:[r.jsx("span",{className:"dashboard-notification-icon",children:"💾"}),r.jsx("span",{className:"dashboard-notification-text",children:"Server backup completed successfully"})]})]})}),r.jsxs(Mt.Footer,{children:[r.jsx(ue,{variant:"ghost",onClick:()=>h(!1),children:"Cancel"}),r.jsx(ue,{variant:"primary",onClick:v,children:"Mark all as read"})]})]}),r.jsxs("main",{className:"dashboard-content",children:[i==="dashboard"&&r.jsx("section",{className:"dashboard-stats-grid",children:ms.stats.map((N,_)=>r.jsx(m0,{title:N.title,value:N.value,icon:N.icon,trend:N.trend,trendValue:N.trendValue},_))}),r.jsxs("section",{className:"dashboard-recent-activity",children:[r.jsx("h2",{children:"Recent Activity"}),r.jsxs("p",{children:["Showing data for:"," ",r.jsxs("strong",{children:[i.charAt(0).toUpperCase(),i.slice(1)]})]})]})]}),r.jsx("footer",{className:"dashboard-footer",children:r.jsx("p",{children:"© 2025 Your Company. All rights reserved."})})]})]})}function d0({user:i,notifications:u=0,onProfileClick:d,onNotificationClick:o}){return r.jsxs("header",{className:"dashboard-header",children:[r.jsx(ua,{placeholder:"Search...",icon:"🔍"}),r.jsxs("div",{className:"dashboard-user-menu",children:[r.jsxs("div",{className:"dashboard-notification-bell",onClick:o,children:["🔔",u>0&&r.jsx("span",{className:"dashboard-notification-badge",children:u})]}),r.jsxs("div",{className:"dashboard-user-avatar",onClick:d,role:"button",children:[r.jsx("img",{src:i.avatar,alt:i.name}),r.jsx("span",{className:"dashboard-user-name",children:i.name})]})]})]})}function f0({items:i=[],activeItem:u,onItemClick:d}){return r.jsxs("aside",{className:"dashboard-sidebar",children:[r.jsx("div",{className:"logo",children:r.jsx("h1",{children:"Dashboard"})}),r.jsx("nav",{className:"dashboard-nav",children:r.jsx("ul",{className:"dashboard-nav-list",children:i.map(o=>r.jsxs("li",{className:`dashboard-nav-item ${u===o.id?"active":""}`,onClick:()=>d(o.id),role:"button",children:[r.jsx("span",{className:"dashboard-nav-icon",children:o.icon}),r.jsx("span",{className:"dashboard-nav-label",children:o.label})]},o.id))})})]})}function m0({title:i,value:u,icon:d,trend:o,trendValue:m}){const h=o==="up",g=h?"dashboard-trend-up":"dashboard-trend-down",S=h?"↗️":"↘️";return r.jsxs(V,{className:"dashboard-stat-card",children:[r.jsx("div",{className:"dashboard-stat-icon",children:d}),r.jsxs("div",{className:"dashboard-stat-info",children:[r.jsx("h3",{className:"dashboard-stat-title",children:i}),r.jsx("div",{className:"dashboard-stat-value",children:u})]}),r.jsxs("div",{className:`dashboard-trend ${g}`,children:[r.jsx("span",{className:"dashboard-trend-icon",children:S}),r.jsx("span",{className:"dashboard-trend-value",children:m})]})]})}function p0(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:3,title:"Dashboard Layout"}),r.jsx(Q.Description,{children:`
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

`}),r.jsx(Q.Demo,{children:r.jsx(o0,{})}),r.jsx(Q.Code,{children:`
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

`})]})}const h0=[{value:"vn",label:"Vietnam"},{value:"us",label:"United States"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"}];function g0(){const[i,u]=R.useState({email:"",password:"",country:"",agreedToTerms:!1}),[d,o]=R.useState({}),m=y=>{const{name:p,value:v,type:N,checked:_}=y.target;u(F=>({...F,[p]:N==="checkbox"?_:v}))},h=()=>{u({email:"",password:"",country:"",agreedToTerms:!1}),o({})},g=()=>{const y={};return i.email.includes("@")||(y.email="Invalid email"),i.password.length<6&&(y.password="Password too short"),i.country||(y.country="Please select a country"),i.agreedToTerms||(y.terms="You must agree to terms"),y},S=y=>{const p=g();if(Object.keys(p).length>0){o(p);return}h(),alert("🎉 Registration successful!")};return r.jsxs("div",{className:"form-page",children:[r.jsx("h2",{className:"form-title",children:"Register Account"}),r.jsxs(y0,{onSubmit:S,children:[r.jsx(Wu,{label:"Email",required:!0,error:d.email,children:r.jsx(Om,{type:"email",name:"email",placeholder:"Enter your email",icon:"📧",value:i.email,onChange:m})}),r.jsx(Wu,{label:"Password",required:!0,error:d.password,children:r.jsx(Om,{type:"password",name:"password",placeholder:"Enter password",icon:"🔒",value:i.password,onChange:m})}),r.jsx(Wu,{label:"Country",error:d.country,children:r.jsx(v0,{name:"country",options:h0,value:i.country,onChange:m,placeholder:"Select country"})}),r.jsx(b0,{label:"I agree to terms and conditions",name:"agreedToTerms",checked:i.agreedToTerms,onChange:m}),d.terms&&r.jsx("div",{className:"form-error",children:d.terms}),r.jsx("button",{className:"submit-btn",type:"submit",children:"Register"})]})]})}function y0({onSubmit:i,children:u}){const d=o=>{o.preventDefault();const m=new FormData(o.target);i(m)};return r.jsx("form",{className:"form",onSubmit:d,children:u})}function Wu({label:i,error:u,required:d,children:o}){return r.jsxs("div",{className:`form-field ${u?"has-error":""}`,children:[i&&r.jsxs("label",{className:"form-label",children:[i," ",d&&r.jsx("span",{className:"required-indicator",children:"*"})]}),r.jsx("div",{className:"form-input",children:o}),u&&r.jsx("div",{className:"form-error",children:u})]})}function Om({type:i="text",placeholder:u,value:d,onChange:o,error:m,icon:h,...g}){return r.jsxs("div",{className:`input-wrapper ${m?"error":""}`,children:[h&&r.jsx("span",{className:"input-icon",children:h}),r.jsx("input",{className:"input-element",type:i,placeholder:u,value:d,onChange:o,...g})]})}function v0({options:i=[],value:u,onChange:d,placeholder:o,...m}){return r.jsxs("select",{className:"select-element",value:u,onChange:d,...m,children:[r.jsx("option",{value:"",children:o||"Select an option"}),i.map((h,g)=>r.jsx("option",{value:h.value||h.code,children:h.label||h.name},g))]})}function b0({label:i,checked:u,onChange:d,...o}){return r.jsxs("label",{className:"checkbox",children:[r.jsx("input",{type:"checkbox",checked:u,onChange:d,...o}),r.jsx("span",{className:"checkbox-custom"}),r.jsx("span",{className:"checkbox-label",children:i})]})}function x0(){return r.jsxs(Q,{children:[r.jsx(Q.Header,{order:4,title:"Form Components (Challenge)"}),r.jsx(Q.Description,{children:`
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

`}),r.jsx(Q.Demo,{children:r.jsx(g0,{})}),r.jsx(Q.Code,{children:`
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

`})]})}const S0={1:a0,2:c0,3:p0,4:x0},N0=()=>r.jsxs("div",{className:"day-content",children:[r.jsxs("div",{className:"day-header",children:[r.jsxs("div",{className:"day-header-content",children:[r.jsx(Ss,{size:32,color:"#00D9FF"}),r.jsxs("div",{children:[r.jsx("h1",{className:"day-title",children:"Ngày 3"}),r.jsx("p",{className:"day-subtitle",children:"Components Fundamentals"})]})]}),r.jsxs("section",{className:"lesson-goal",children:[r.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Hiểu sâu về Function Components"}),r.jsx("li",{children:"Mastering Props: passing data, prop types, default props"}),r.jsx("li",{children:"Props Destructuring cho code sạch hơn"}),r.jsx("li",{children:"Children prop và component composition"}),r.jsx("li",{children:"Prop Drilling: vấn đề và giải pháp cơ bản"})]})]})]}),r.jsx("div",{className:"exercises-list",children:Array.from({length:4},(i,u)=>{const d=S0[u+1];return d?r.jsx(d,{},u):null})})]}),j0=Object.freeze(Object.defineProperty({__proto__:null,Day1:Hb,Day2:Kb,Day3:N0},Symbol.toStringTag,{value:"Module"}));function E0(){const[i,u]=R.useState(!1),[d,o]=R.useState(""),[m,h]=R.useState("option1"),[g,S]=R.useState(!1),[y,p]=R.useState(!1),[v,N]=R.useState("all"),_=[{id:"input",name:"Input",category:"form"},{id:"button",name:"Button",category:"action"},{id:"select",name:"Select",category:"form"},{id:"checkbox",name:"Checkbox",category:"form"},{id:"switch",name:"Switch",category:"form"},{id:"card",name:"Card",category:"layout"},{id:"modal",name:"Modal",category:"overlay"},{id:"tooltip",name:"Tooltip",category:"overlay"}],F=x=>{document.getElementById(x)?.scrollIntoView({behavior:"smooth",block:"start"})};return r.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(180deg, #0a0e1a 0%, #0f172a 100%)"},children:[r.jsxs("header",{style:{padding:"80px 40px",textAlign:"center",background:"linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 163, 204, 0.05) 100%)",borderBottom:"1px solid #1e293b"},children:[r.jsx("h1",{style:{fontSize:"56px",fontWeight:"700",background:"linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"16px"},children:"UI Component Library"}),r.jsx("p",{style:{fontSize:"20px",color:"#94a3b8",maxWidth:"600px",margin:"0 auto 40px"},children:"Modern, beautiful, and fully customizable React components for your next project"}),r.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[r.jsx(ue,{variant:"primary",size:"lg",children:"Get Started"}),r.jsx(ue,{variant:"secondary",size:"lg",children:"View on GitHub"})]})]}),r.jsx("nav",{style:{position:"sticky",top:0,background:"rgba(10, 14, 26, 0.9)",backdropFilter:"blur(12px)",borderBottom:"1px solid #1e293b",padding:"20px 40px",zIndex:100},children:r.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"12px",overflowX:"auto"},children:["all","form","action","layout","overlay"].map(x=>r.jsx(ue,{variant:v===x?"primary":"ghost",size:"sm",onClick:()=>N(x),children:x.charAt(0).toUpperCase()+x.slice(1)},x))})}),r.jsxs("main",{style:{maxWidth:"1200px",margin:"0 auto",padding:"60px 40px"},children:[r.jsxs("section",{style:{marginBottom:"80px"},children:[r.jsx("h2",{style:{fontSize:"32px",fontWeight:"600",color:"#e4e4e7",marginBottom:"32px",textAlign:"center"},children:"Components"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"},children:_.filter(x=>v==="all"||x.category===v).map(x=>r.jsxs(V,{style:{cursor:"pointer",textAlign:"center",transition:"transform 0.2s ease"},onClick:()=>F(x.id),onMouseEnter:C=>C.currentTarget.style.transform="translateY(-4px)",onMouseLeave:C=>C.currentTarget.style.transform="translateY(0)",children:[r.jsx("h3",{style:{fontSize:"18px",color:"#e4e4e7",margin:"0 0 8px 0"},children:x.name}),r.jsx("p",{style:{fontSize:"13px",color:"#64748b",margin:0},children:x.category})]},x.id))})]}),r.jsx("section",{id:"input",style:{marginBottom:"80px"},children:r.jsxs(V,{children:[r.jsxs(V.Header,{children:[r.jsx(V.Title,{children:"Input"}),r.jsx(V.Subtitle,{children:"Text input fields with labels, icons, and validation"})]}),r.jsx(V.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx(ua,{label:"Basic Input",placeholder:"Enter text here...",value:d,onChange:x=>o(x.target.value)}),r.jsx(ua,{label:"With Helper Text",placeholder:"username",helperText:"Choose a unique username"}),r.jsx(ua,{label:"With Error",placeholder:"email@example.com",error:"Invalid email format"}),r.jsx(ua,{label:"With Icon",placeholder:"Search...",icon:"🔍"}),r.jsx(ua,{label:"Disabled",placeholder:"Cannot edit",disabled:!0})]})})]})}),r.jsx("section",{id:"button",style:{marginBottom:"80px"},children:r.jsxs(V,{children:[r.jsxs(V.Header,{children:[r.jsx(V.Title,{children:"Button"}),r.jsx(V.Subtitle,{children:"Multiple variants and sizes for different use cases"})]}),r.jsx(V.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#94a3b8",fontSize:"14px",marginBottom:"16px"},children:"Variants"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(ue,{variant:"primary",children:"Primary"}),r.jsx(ue,{variant:"secondary",children:"Secondary"}),r.jsx(ue,{variant:"ghost",children:"Ghost"}),r.jsx(ue,{variant:"danger",children:"Danger"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#94a3b8",fontSize:"14px",marginBottom:"16px"},children:"Sizes"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[r.jsx(ue,{variant:"primary",size:"sm",children:"Small"}),r.jsx(ue,{variant:"primary",size:"md",children:"Medium"}),r.jsx(ue,{variant:"primary",size:"lg",children:"Large"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"#94a3b8",fontSize:"14px",marginBottom:"16px"},children:"States"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(ue,{variant:"primary",icon:"✨",children:"With Icon"}),r.jsx(ue,{variant:"primary",loading:!0,children:"Loading"}),r.jsx(ue,{variant:"primary",disabled:!0,children:"Disabled"})]})]})]})})]})}),r.jsx("section",{id:"select",style:{marginBottom:"80px"},children:r.jsxs(V,{children:[r.jsxs(V.Header,{children:[r.jsx(V.Title,{children:"Select"}),r.jsx(V.Subtitle,{children:"Dropdown selection with custom styling"})]}),r.jsx(V.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx(Xl,{label:"Country",value:m,onChange:x=>h(x.target.value),options:[{value:"vn",label:"Vietnam"},{value:"us",label:"United States"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"},{value:"sg",label:"Singapore"}]}),r.jsx(Xl,{label:"Disabled Select",disabled:!0,options:[{value:"option1",label:"Cannot change"}]})]})})]})}),r.jsx("section",{id:"checkbox",style:{marginBottom:"80px"},children:r.jsxs(V,{children:[r.jsxs(V.Header,{children:[r.jsx(V.Title,{children:"Checkbox"}),r.jsx(V.Subtitle,{children:"Selection controls for multiple choices"})]}),r.jsx(V.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(an,{label:"Accept terms and conditions",checked:g,onChange:x=>S(x.target.checked)}),r.jsx(an,{label:"Subscribe to newsletter"}),r.jsx(an,{label:"Enable notifications",defaultChecked:!0}),r.jsx(an,{label:"Disabled option",disabled:!0})]})})]})}),r.jsx("section",{id:"switch",style:{marginBottom:"80px"},children:r.jsxs(V,{children:[r.jsxs(V.Header,{children:[r.jsx(V.Title,{children:"Switch"}),r.jsx(V.Subtitle,{children:"Toggle between on/off states"})]}),r.jsx(V.Content,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(Yl,{label:"Dark mode",checked:y,onChange:x=>p(x.target.checked)}),r.jsx(Yl,{label:"Auto-save",defaultChecked:!0}),r.jsx(Yl,{label:"Enable analytics"}),r.jsx(Yl,{label:"Disabled switch",disabled:!0})]})})]})}),r.jsx("section",{id:"card",style:{marginBottom:"80px"},children:r.jsxs(V,{children:[r.jsxs(V.Header,{children:[r.jsx(V.Title,{children:"Card"}),r.jsx(V.Subtitle,{children:"Flexible container for grouping content"})]}),r.jsx(V.Content,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:[r.jsxs(V,{children:[r.jsx(V.Header,{children:r.jsx(V.Title,{children:"Basic Card"})}),r.jsx(V.Content,{children:r.jsx("p",{style:{margin:0,color:"#94a3b8"},children:"This is a simple card with just content."})})]}),r.jsxs(V,{children:[r.jsxs(V.Header,{children:[r.jsx(V.Title,{children:"With Subtitle"}),r.jsx(V.Subtitle,{children:"Additional description"})]}),r.jsx(V.Content,{children:r.jsx("p",{style:{margin:0,color:"#94a3b8"},children:"Cards can have subtitles for more context."})})]}),r.jsxs(V,{children:[r.jsx(V.Header,{children:r.jsx(V.Title,{children:"With Footer"})}),r.jsx(V.Content,{children:r.jsx("p",{style:{margin:0,color:"#94a3b8"},children:"Add actions in the footer section."})}),r.jsx(V.Footer,{children:r.jsx(ue,{variant:"primary",size:"sm",children:"Action"})})]})]})})]})}),r.jsx("section",{id:"modal",style:{marginBottom:"80px"},children:r.jsxs(V,{children:[r.jsxs(V.Header,{children:[r.jsx(V.Title,{children:"Modal"}),r.jsx(V.Subtitle,{children:"Overlay dialogs for important information"})]}),r.jsxs(V.Content,{children:[r.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:r.jsx(ue,{variant:"primary",onClick:()=>u(!0),children:"Open Modal"})}),r.jsxs(Mt,{isOpen:i,onClose:()=>u(!1),children:[r.jsx(Mt.Header,{onClose:()=>u(!1),children:"Example Modal"}),r.jsx(Mt.Body,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx("p",{style:{color:"#94a3b8",margin:0},children:"This is a modal dialog with custom styling. It includes a header, body, and footer section."}),r.jsx(ua,{label:"Your Name",placeholder:"Enter your name"}),r.jsx(an,{label:"Remember my choice"})]})}),r.jsxs(Mt.Footer,{children:[r.jsx(ue,{variant:"ghost",onClick:()=>u(!1),children:"Cancel"}),r.jsx(ue,{variant:"primary",onClick:()=>u(!1),children:"Confirm"})]})]})]})]})}),r.jsx("section",{id:"tooltip",style:{marginBottom:"80px"},children:r.jsxs(V,{children:[r.jsxs(V.Header,{children:[r.jsx(V.Title,{children:"Tooltip"}),r.jsx(V.Subtitle,{children:"Helpful hints that appear on hover"})]}),r.jsx(V.Content,{children:r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(Ju,{content:"This is a helpful tooltip",children:r.jsx(ue,{variant:"primary",children:"Hover me"})}),r.jsx(Ju,{content:"You can add tooltips to any element",children:r.jsx(ue,{variant:"secondary",children:"Another one"})}),r.jsx(Ju,{content:"Tooltips help explain features",children:r.jsx("span",{style:{display:"inline-block",padding:"12px 20px",background:"#1e293b",borderRadius:"8px",color:"#e4e4e7",cursor:"help"},children:"Hover this text"})})]})})]})})]}),r.jsxs("footer",{style:{borderTop:"1px solid #1e293b",padding:"40px",textAlign:"center",color:"#64748b"},children:[r.jsx("p",{style:{margin:"0 0 16px 0"},children:"Built with React • Styled with custom CSS • Open Source"}),r.jsxs("div",{style:{display:"flex",gap:"24px",justifyContent:"center",flexWrap:"wrap"},children:[r.jsx(ue,{variant:"ghost",size:"sm",children:"Documentation"}),r.jsx(ue,{variant:"ghost",size:"sm",children:"GitHub"}),r.jsx(ue,{variant:"ghost",size:"sm",children:"Examples"})]})]})]})}const Iu=30,C0=3,A0=()=>{const[i,u]=R.useState(!0),[d,o]=R.useState(1),[m,h]=R.useState(!1),[g,S]=R.useState(!1);R.useEffect(()=>{const _=()=>{const F=window.innerWidth<768;S(F),u(!F)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const y=_=>{o(_),h(!1),g&&u(!1)},p=()=>{h(!0),o(null),g&&u(!1)},v=Number(100*(C0/Iu)).toFixed(2)+"%",N=j0[`Day${d??1}`];return r.jsxs("div",{className:"container",children:[r.jsx("button",{className:"toggle-button",onClick:()=>u(!i),children:i?r.jsx(Am,{size:24}):r.jsx(bv,{size:24})}),g&&i&&r.jsx("div",{className:"overlay",onClick:()=>u(!1)}),r.jsxs("aside",{className:`sidebar ${i?"sidebar-open":"sidebar-closed"}`,children:[r.jsxs("div",{className:"sidebar-header",children:[r.jsxs("div",{className:"logo-container",children:[r.jsx(Ss,{size:28,color:"#00D9FF"}),r.jsxs("span",{className:"logo",children:[Iu," Ngày ReactJS"]})]}),g&&r.jsx("button",{className:"close-button",onClick:()=>u(!1),children:r.jsx(Am,{size:24})})]}),r.jsxs("div",{className:"sidebar-content",children:[r.jsxs("div",{className:"progress-container",children:[r.jsxs("div",{className:"progress-header",children:[r.jsx("span",{className:"progress-text",children:"Tiến độ"}),r.jsx("span",{className:"progress-percent",children:v})]}),r.jsx("div",{className:"progress-bar",style:{"--progress":v},children:r.jsx("div",{className:"progress-fill"})})]}),r.jsxs("nav",{className:"nav",children:[r.jsxs("button",{className:`nav-item ${m?"nav-item-active":""}`,onClick:p,children:[r.jsx("span",{className:"nav-item-number",children:"Danh sách UI"}),m&&r.jsx("div",{className:"active-indicator"})]}),Array.from({length:Iu},(_,F)=>F+1).map(_=>r.jsxs("button",{className:`nav-item ${d===_&&!m?"nav-item-active":""}`,onClick:()=>y(_),children:[r.jsxs("span",{className:"nav-item-number",children:["Ngày ",_]}),d===_&&!m&&r.jsx("div",{className:"active-indicator"})]},_))]})]})]}),r.jsx("main",{className:"main",style:{marginLeft:i?"280px":"0",width:i?"calc(100% - 280px)":"100%"},children:m?r.jsx(E0,{}):N?r.jsx(N,{}):r.jsx(Sv,{})})]})};kg.createRoot(document.getElementById("root")).render(r.jsx(R.StrictMode,{children:r.jsx(Qy,{basename:"/react-pure-exercise",children:r.jsx(A0,{})})}));
