(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function e_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var od={exports:{}},Lo={};var Bx;function $S(){if(Bx)return Lo;Bx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var Ix;function ey(){return Ix||(Ix=1,od.exports=$S()),od.exports}var Ie=ey(),ld={exports:{}},st={};var Hx;function ty(){if(Hx)return st;Hx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function _(O,ae,Me){this.props=O,this.context=ae,this.refs=y,this.updater=Me||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,ae){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ae,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=_.prototype;function D(O,ae,Me){this.props=O,this.context=ae,this.refs=y,this.updater=Me||E}var z=D.prototype=new U;z.constructor=D,R(z,_.prototype),z.isPureReactComponent=!0;var V=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function w(O,ae,Me){var Te=Me.ref;return{$$typeof:s,type:O,key:ae,ref:Te!==void 0?Te:null,props:Me}}function C(O,ae){return w(O.type,ae,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function te(O){var ae={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Me){return ae[Me]})}var le=/\/+/g;function me(O,ae){return typeof O=="object"&&O!==null&&O.key!=null?te(""+O.key):ae.toString(36)}function fe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ae){O.status==="pending"&&(O.status="fulfilled",O.value=ae)},function(ae){O.status==="pending"&&(O.status="rejected",O.reason=ae)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,ae,Me,Te,Pe){var ne=typeof O;(ne==="undefined"||ne==="boolean")&&(O=null);var ue=!1;if(O===null)ue=!0;else switch(ne){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(O.$$typeof){case s:case e:ue=!0;break;case g:return ue=O._init,B(ue(O._payload),ae,Me,Te,Pe)}}if(ue)return Pe=Pe(O),ue=Te===""?"."+me(O,0):Te,V(Pe)?(Me="",ue!=null&&(Me=ue.replace(le,"$&/")+"/"),B(Pe,ae,Me,"",function(We){return We})):Pe!=null&&(k(Pe)&&(Pe=C(Pe,Me+(Pe.key==null||O&&O.key===Pe.key?"":(""+Pe.key).replace(le,"$&/")+"/")+ue)),ae.push(Pe)),1;ue=0;var we=Te===""?".":Te+":";if(V(O))for(var Ge=0;Ge<O.length;Ge++)Te=O[Ge],ne=we+me(Te,Ge),ue+=B(Te,ae,Me,ne,Pe);else if(Ge=M(O),typeof Ge=="function")for(O=Ge.call(O),Ge=0;!(Te=O.next()).done;)Te=Te.value,ne=we+me(Te,Ge++),ue+=B(Te,ae,Me,ne,Pe);else if(ne==="object"){if(typeof O.then=="function")return B(fe(O),ae,Me,Te,Pe);throw ae=String(O),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return ue}function j(O,ae,Me){if(O==null)return O;var Te=[],Pe=0;return B(O,Te,"","",function(ne){return ae.call(Me,ne,Pe++)}),Te}function Y(O){if(O._status===-1){var ae=O._result;ae=ae(),ae.then(function(Me){(O._status===0||O._status===-1)&&(O._status=1,O._result=Me)},function(Me){(O._status===0||O._status===-1)&&(O._status=2,O._result=Me)}),O._status===-1&&(O._status=0,O._result=ae)}if(O._status===1)return O._result.default;throw O._result}var _e=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ve={map:j,forEach:function(O,ae,Me){j(O,function(){ae.apply(this,arguments)},Me)},count:function(O){var ae=0;return j(O,function(){ae++}),ae},toArray:function(O){return j(O,function(ae){return ae})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return st.Activity=x,st.Children=ve,st.Component=_,st.Fragment=i,st.Profiler=l,st.PureComponent=D,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,st.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},st.cache=function(O){return function(){return O.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(O,ae,Me){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Te=R({},O.props),Pe=O.key;if(ae!=null)for(ne in ae.key!==void 0&&(Pe=""+ae.key),ae)!$.call(ae,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ae.ref===void 0||(Te[ne]=ae[ne]);var ne=arguments.length-2;if(ne===1)Te.children=Me;else if(1<ne){for(var ue=Array(ne),we=0;we<ne;we++)ue[we]=arguments[we+2];Te.children=ue}return w(O.type,Pe,Te)},st.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},st.createElement=function(O,ae,Me){var Te,Pe={},ne=null;if(ae!=null)for(Te in ae.key!==void 0&&(ne=""+ae.key),ae)$.call(ae,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Pe[Te]=ae[Te]);var ue=arguments.length-2;if(ue===1)Pe.children=Me;else if(1<ue){for(var we=Array(ue),Ge=0;Ge<ue;Ge++)we[Ge]=arguments[Ge+2];Pe.children=we}if(O&&O.defaultProps)for(Te in ue=O.defaultProps,ue)Pe[Te]===void 0&&(Pe[Te]=ue[Te]);return w(O,ne,Pe)},st.createRef=function(){return{current:null}},st.forwardRef=function(O){return{$$typeof:h,render:O}},st.isValidElement=k,st.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:Y}},st.memo=function(O,ae){return{$$typeof:p,type:O,compare:ae===void 0?null:ae}},st.startTransition=function(O){var ae=P.T,Me={};P.T=Me;try{var Te=O(),Pe=P.S;Pe!==null&&Pe(Me,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,_e)}catch(ne){_e(ne)}finally{ae!==null&&Me.types!==null&&(ae.types=Me.types),P.T=ae}},st.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},st.use=function(O){return P.H.use(O)},st.useActionState=function(O,ae,Me){return P.H.useActionState(O,ae,Me)},st.useCallback=function(O,ae){return P.H.useCallback(O,ae)},st.useContext=function(O){return P.H.useContext(O)},st.useDebugValue=function(){},st.useDeferredValue=function(O,ae){return P.H.useDeferredValue(O,ae)},st.useEffect=function(O,ae){return P.H.useEffect(O,ae)},st.useEffectEvent=function(O){return P.H.useEffectEvent(O)},st.useId=function(){return P.H.useId()},st.useImperativeHandle=function(O,ae,Me){return P.H.useImperativeHandle(O,ae,Me)},st.useInsertionEffect=function(O,ae){return P.H.useInsertionEffect(O,ae)},st.useLayoutEffect=function(O,ae){return P.H.useLayoutEffect(O,ae)},st.useMemo=function(O,ae){return P.H.useMemo(O,ae)},st.useOptimistic=function(O,ae){return P.H.useOptimistic(O,ae)},st.useReducer=function(O,ae,Me){return P.H.useReducer(O,ae,Me)},st.useRef=function(O){return P.H.useRef(O)},st.useState=function(O){return P.H.useState(O)},st.useSyncExternalStore=function(O,ae,Me){return P.H.useSyncExternalStore(O,ae,Me)},st.useTransition=function(){return P.H.useTransition()},st.version="19.2.0",st}var Gx;function Ih(){return Gx||(Gx=1,ld.exports=ty()),ld.exports}var ge=Ih();const Ja=e_(ge);var ud={exports:{}},No={},cd={exports:{}},fd={};var Vx;function ny(){return Vx||(Vx=1,(function(s){function e(B,j){var Y=B.length;B.push(j);e:for(;0<Y;){var _e=Y-1>>>1,ve=B[_e];if(0<l(ve,j))B[_e]=j,B[Y]=ve,Y=_e;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var j=B[0],Y=B.pop();if(Y!==j){B[0]=Y;e:for(var _e=0,ve=B.length,O=ve>>>1;_e<O;){var ae=2*(_e+1)-1,Me=B[ae],Te=ae+1,Pe=B[Te];if(0>l(Me,Y))Te<ve&&0>l(Pe,Me)?(B[_e]=Pe,B[Te]=Y,_e=Te):(B[_e]=Me,B[ae]=Y,_e=ae);else if(Te<ve&&0>l(Pe,Y))B[_e]=Pe,B[Te]=Y,_e=Te;else break e}}return j}function l(B,j){var Y=B.sortIndex-j.sortIndex;return Y!==0?Y:B.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,S=3,M=!1,E=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function z(B){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=B)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function V(B){if(R=!1,z(B),!E)if(i(m)!==null)E=!0,N||(N=!0,te());else{var j=i(p);j!==null&&fe(V,j.startTime-B)}}var N=!1,P=-1,$=5,w=-1;function C(){return y?!0:!(s.unstable_now()-w<$)}function k(){if(y=!1,N){var B=s.unstable_now();w=B;var j=!0;try{e:{E=!1,R&&(R=!1,U(P),P=-1),M=!0;var Y=S;try{t:{for(z(B),x=i(m);x!==null&&!(x.expirationTime>B&&C());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,S=x.priorityLevel;var ve=_e(x.expirationTime<=B);if(B=s.unstable_now(),typeof ve=="function"){x.callback=ve,z(B),j=!0;break t}x===i(m)&&r(m),z(B)}else r(m);x=i(m)}if(x!==null)j=!0;else{var O=i(p);O!==null&&fe(V,O.startTime-B),j=!1}}break e}finally{x=null,S=Y,M=!1}j=void 0}}finally{j?te():N=!1}}}var te;if(typeof D=="function")te=function(){D(k)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,me=le.port2;le.port1.onmessage=k,te=function(){me.postMessage(null)}}else te=function(){_(k,0)};function fe(B,j){P=_(function(){B(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(B){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Y=S;S=j;try{return B()}finally{S=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(B,j){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=S;S=B;try{return j()}finally{S=Y}},s.unstable_scheduleCallback=function(B,j,Y){var _e=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_e+Y:_e):Y=_e,B){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Y+ve,B={id:g++,callback:j,priorityLevel:B,startTime:Y,expirationTime:ve,sortIndex:-1},Y>_e?(B.sortIndex=Y,e(p,B),i(m)===null&&B===i(p)&&(R?(U(P),P=-1):R=!0,fe(V,Y-_e))):(B.sortIndex=ve,e(m,B),E||M||(E=!0,N||(N=!0,te()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var j=S;return function(){var Y=S;S=j;try{return B.apply(this,arguments)}finally{S=Y}}}})(fd)),fd}var kx;function iy(){return kx||(kx=1,cd.exports=ny()),cd.exports}var dd={exports:{}},Dn={};var Xx;function ay(){if(Xx)return Dn;Xx=1;var s=Ih();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Dn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.0",Dn}var Wx;function ry(){if(Wx)return dd.exports;Wx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),dd.exports=ay(),dd.exports}var qx;function sy(){if(qx)return No;qx=1;var s=iy(),e=Ih(),i=ry();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,o=f;break}if(T===o){v=!0,o=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,o=c;break}if(T===o){v=!0,o=f,a=c;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case D:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case $:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var fe=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},_e=[],ve=-1;function O(t){return{current:t}}function ae(t){0>ve||(t.current=_e[ve],_e[ve]=null,ve--)}function Me(t,n){ve++,_e[ve]=t.current,t.current=n}var Te=O(null),Pe=O(null),ne=O(null),ue=O(null);function we(t,n){switch(Me(ne,n),Me(Pe,t),Me(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ox(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ox(n),t=lx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(Te),Me(Te,t)}function Ge(){ae(Te),ae(Pe),ae(ne)}function We(t){t.memoizedState!==null&&Me(ue,t);var n=Te.current,a=lx(n,t.type);n!==a&&(Me(Pe,t),Me(Te,a))}function ut(t){Pe.current===t&&(ae(Te),ae(Pe)),ue.current===t&&(ae(ue),Co._currentValue=Y)}var an,ht;function At(t){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+t+ht}var I=!1;function pt(t,n){if(!t||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(se){var ee=se}Reflect.construct(t,[],pe)}else{try{pe.call()}catch(se){ee=se}t.call(pe.prototype)}}else{try{throw Error()}catch(se){ee=se}(pe=t())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(se){if(se&&ee&&typeof se.stack=="string")return[se.stack,ee.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var F=v.split(`
`),Q=T.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===Q.length)for(o=F.length-1,c=Q.length-1;1<=o&&0<=c&&F[o]!==Q[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==Q[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==Q[c]){var ce=`
`+F[o].replace(" at new "," at ");return t.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",t.displayName)),ce}while(1<=o&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?At(a):""}function xt(t,n){switch(t.tag){case 26:case 27:case 5:return At(t.type);case 16:return At("Lazy");case 13:return t.child!==n&&n!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return At("Activity");default:return""}}function zt(t){try{var n="",a=null;do n+=xt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ve=Object.prototype.hasOwnProperty,Wt=s.unstable_scheduleCallback,Ze=s.unstable_cancelCallback,rt=s.unstable_shouldYield,L=s.unstable_requestPaint,b=s.unstable_now,K=s.unstable_getCurrentPriorityLevel,he=s.unstable_ImmediatePriority,Se=s.unstable_UserBlockingPriority,oe=s.unstable_NormalPriority,Ye=s.unstable_LowPriority,Le=s.unstable_IdlePriority,Je=s.log,qe=s.unstable_setDisableYieldValue,ye=null,Ee=null;function je(t){if(typeof Je=="function"&&qe(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(ye,t)}catch{}}var ke=Math.clz32?Math.clz32:H,Oe=Math.log,it=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Oe(t)/it|0)|0}var De=256,Re=262144,Ce=4194304;function be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=be(o):(v&=T,v!==0?c=be(v):a||(a=T&~t,a!==0&&(c=be(a))))):(T=o&~f,T!==0?c=be(T):v!==0?c=be(v):a||(a=o&~t,a!==0&&(c=be(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wn(t,n,a,o,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,F=t.expirationTimes,Q=t.hiddenUpdates;for(a=v&~a;0<a;){var ce=31-ke(a),pe=1<<ce;T[ce]=0,F[ce]=-1;var ee=Q[ce];if(ee!==null)for(Q[ce]=null,ce=0;ce<ee.length;ce++){var se=ee[ce];se!==null&&(se.lane&=-536870913)}a&=~pe}o!==0&&nl(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function nl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ke(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Is(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ke(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Hs(t,n){var a=n&-n;return a=(a&42)!==0?1:mi(a),(a&(t.suspendedLanes|n))!==0?0:a}function mi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gs(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:Ux(t.type))}function Vs(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var qn=Math.random().toString(36).slice(2),ln="__reactFiber$"+qn,pn="__reactProps$"+qn,zi="__reactContainer$"+qn,Or="__reactEvents$"+qn,ec="__reactListeners$"+qn,tc="__reactHandles$"+qn,il="__reactResources$"+qn,ir="__reactMarker$"+qn;function ks(t){delete t[ln],delete t[pn],delete t[Or],delete t[ec],delete t[tc]}function va(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=mx(t);t!==null;){if(a=t[ln])return a;t=mx(t)}return n}t=a,a=t.parentNode}return null}function A(t){if(t=t[ln]||t[zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function X(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ie(t){var n=t[il];return n||(n=t[il]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(t){t[ir]=!0}var q=new Set,Ae={};function Ue(t,n){ze(t,n),ze(t+"Capture",n)}function ze(t,n){for(Ae[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},nt={};function Ke(t){return Ve.call(nt,t)?!0:Ve.call(et,t)?!1:Be.test(t)?nt[t]=!0:(et[t]=!0,!1)}function ct(t,n,a){if(Ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Tt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ct(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Pt(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function Mt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Sa=/[\n"\\]/g;function jt(t){return t.replace(Sa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(t,n,a,o,c,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+yt(n)):t.value!==""+yt(n)&&(t.value=""+yt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,v,yt(n)):a!=null?Sn(t,v,yt(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+yt(T):t.removeAttribute("name")}function Zt(t,n,a,o,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qt(t);return}a=a!=null?""+yt(a):"",n=n!=null?""+yt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),qt(t)}function Sn(t,n,a){n==="number"&&vn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mn(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+yt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+yt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+yt(a):""}function En(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(fe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=yt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function Ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ap(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function rp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&ap(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&ap(t,f,n[f])}function nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(t){return K_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var ic=null;function ac(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,zr=null;function sp(t){var n=A(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Fi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[pn]||null;if(!c)throw Error(r(90));Fi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Mt(o)}break e;case"textarea":yn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mn(t,!!a.multiple,n,!1)}}}var rc=!1;function op(t,n,a){if(rc)return t(n,a);rc=!0;try{var o=t(n);return o}finally{if(rc=!1,(Pr!==null||zr!==null)&&(Wl(),Pr&&(n=Pr,t=zr,zr=Pr=null,sp(n),t)))for(n=0;n<t.length;n++)sp(t[n])}}function Xs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=!1;if(Hi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){sc=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{sc=!1}var ya=null,oc=null,rl=null;function lp(){if(rl)return rl;var t,n=oc,a=n.length,o,c="value"in ya?ya.value:ya.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===c[f-o];o++);return rl=c.slice(t,1<o?1-o:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function up(){return!1}function zn(t){function n(a,o,c,f,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:up,this.isPropagationStopped=up,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=zn(ar),qs=x({},ar,{view:0,detail:0}),Q_=zn(qs),lc,uc,Ys,ul=x({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(lc=t.screenX-Ys.screenX,uc=t.screenY-Ys.screenY):uc=lc=0,Ys=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),cp=zn(ul),J_=x({},ul,{dataTransfer:0}),$_=zn(J_),ev=x({},qs,{relatedTarget:0}),cc=zn(ev),tv=x({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=zn(tv),iv=x({},ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),av=zn(iv),rv=x({},ar,{data:0}),fp=zn(rv),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=lv[t])?!!n[t]:!1}function fc(){return uv}var cv=x({},qs,{key:function(t){if(t.key){var n=sv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ov[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fv=zn(cv),dv=x({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=zn(dv),hv=x({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),pv=zn(hv),mv=x({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),xv=zn(mv),gv=x({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_v=zn(gv),vv=x({},ar,{newState:0,oldState:0}),Sv=zn(vv),yv=[9,13,27,32],dc=Hi&&"CompositionEvent"in window,js=null;Hi&&"documentMode"in document&&(js=document.documentMode);var Mv=Hi&&"TextEvent"in window&&!js,hp=Hi&&(!dc||js&&8<js&&11>=js),pp=" ",mp=!1;function xp(t,n){switch(t){case"keyup":return yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function bv(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return t=n.data,t===pp&&mp?null:t;default:return null}}function Ev(t,n){if(Fr)return t==="compositionend"||!dc&&xp(t,n)?(t=lp(),rl=oc=ya=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Tv[t.type]:n==="textarea"}function vp(t,n,a,o){Pr?zr?zr.push(o):zr=[o]:Pr=o,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Zs=null,Ks=null;function Av(t){tx(t,0)}function cl(t){var n=X(t);if(Mt(n))return t}function Sp(t,n){if(t==="change")return n}var yp=!1;if(Hi){var hc;if(Hi){var pc="oninput"in document;if(!pc){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),pc=typeof Mp.oninput=="function"}hc=pc}else hc=!1;yp=hc&&(!document.documentMode||9<document.documentMode)}function bp(){Zs&&(Zs.detachEvent("onpropertychange",Ep),Ks=Zs=null)}function Ep(t){if(t.propertyName==="value"&&cl(Ks)){var n=[];vp(n,Ks,t,ac(t)),op(Av,n)}}function Rv(t,n,a){t==="focusin"?(bp(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",Ep)):t==="focusout"&&bp()}function Cv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Ks)}function wv(t,n){if(t==="click")return cl(n)}function Dv(t,n){if(t==="input"||t==="change")return cl(n)}function Uv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Uv;function Qs(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ve.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,n){var a=Tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vn(t.document)}return n}function mc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Lv=Hi&&"documentMode"in document&&11>=document.documentMode,Br=null,xc=null,Js=null,gc=!1;function wp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||Br==null||Br!==vn(o)||(o=Br,"selectionStart"in o&&mc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Qs(Js,o)||(Js=o,o=Jl(xc,"onSelect"),0<o.length&&(n=new ll("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Br)))}function rr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ir={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},_c={},Dp={};Hi&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function sr(t){if(_c[t])return _c[t];if(!Ir[t])return t;var n=Ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return _c[t]=n[a];return t}var Up=sr("animationend"),Lp=sr("animationiteration"),Np=sr("animationstart"),Nv=sr("transitionrun"),Ov=sr("transitionstart"),Pv=sr("transitioncancel"),Op=sr("transitionend"),Pp=new Map,vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vc.push("scrollEnd");function xi(t,n){Pp.set(t,n),Ue(n,[t])}var fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Hr=0,Sc=0;function dl(){for(var t=Hr,n=Sc=Hr=0;n<t;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}f!==0&&zp(a,c,f)}}function hl(t,n,a,o){ai[Hr++]=t,ai[Hr++]=n,ai[Hr++]=a,ai[Hr++]=o,Sc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function yc(t,n,a,o){return hl(t,n,a,o),pl(t)}function or(t,n){return hl(t,null,null,n),pl(t)}function zp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ke(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function pl(t){if(50<yo)throw yo=0,Uf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function zv(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,o){return new zv(t,n,a,o)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ml(t,n,a,o,c,f){var v=0;if(o=t,typeof t=="function")Mc(t)&&(v=1);else if(typeof t=="string")v=GS(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=jn(31,a,n,c),t.elementType=w,t.lanes=f,t;case R:return lr(a.children,c,f,n);case y:v=8,c|=24;break;case _:return t=jn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case V:return t=jn(13,a,n,c),t.elementType=V,t.lanes=f,t;case N:return t=jn(19,a,n,c),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:v=10;break e;case U:v=9;break e;case z:v=11;break e;case P:v=14;break e;case $:v=16,o=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=jn(v,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function lr(t,n,a,o){return t=jn(7,t,o,n),t.lanes=a,t}function bc(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Bp(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function Ec(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ip=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=Ip.get(t);return a!==void 0?a:(n={value:t,source:n,stack:zt(n)},Ip.set(t,n),n)}return{value:t,source:n,stack:zt(n)}}var Vr=[],kr=0,xl=null,$s=0,si=[],oi=0,Ma=null,Ai=1,Ri="";function Vi(t,n){Vr[kr++]=$s,Vr[kr++]=xl,xl=t,$s=n}function Hp(t,n,a){si[oi++]=Ai,si[oi++]=Ri,si[oi++]=Ma,Ma=t;var o=Ai;t=Ri;var c=32-ke(o)-1;o&=~(1<<c),a+=1;var f=32-ke(n)+c;if(30<f){var v=c-c%5;f=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Ai=1<<32-ke(n)+c|a<<c|o,Ri=f+t}else Ai=1<<f|a<<c|o,Ri=t}function Tc(t){t.return!==null&&(Vi(t,1),Hp(t,1,0))}function Ac(t){for(;t===xl;)xl=Vr[--kr],Vr[kr]=null,$s=Vr[--kr],Vr[kr]=null;for(;t===Ma;)Ma=si[--oi],si[oi]=null,Ri=si[--oi],si[oi]=null,Ai=si[--oi],si[oi]=null}function Gp(t,n){si[oi++]=Ai,si[oi++]=Ri,si[oi++]=Ma,Ai=n.id,Ri=n.overflow,Ma=t}var Tn=null,Kt=null,bt=!1,ba=null,li=!1,Rc=Error(r(519));function Ea(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(ri(n,t)),Rc}function Vp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[pn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)_t(bo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Zt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||rx(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||Ea(t,!0)}function kp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Tn=Tn.return}}function Xr(t){if(t!==Tn)return!1;if(!bt)return kp(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qf(t.type,t.memoizedProps)),a=!a),a&&Kt&&Ea(t),kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=px(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=px(t)}else n===27?(n=Kt,Ba(t.type)?(t=Qf,Qf=null,Kt=t):Kt=n):Kt=Tn?ci(t.stateNode.nextSibling):null;return!0}function ur(){Kt=Tn=null,bt=!1}function Cc(){var t=ba;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),ba=null),t}function eo(t){ba===null?ba=[t]:ba.push(t)}var wc=O(null),cr=null,ki=null;function Ta(t,n,a){Me(wc,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=wc.current,ae(wc)}function Dc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Uc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var F=0;F<n.length;F++)if(T.context===n[F]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Dc(f.return,a,t),o||(v=null);break e}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Dc(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Wr(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=c.type;Yn(c.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(c===ue.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}c=c.return}t!==null&&Uc(n,t,a,o),n.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){cr=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Xp(cr,t)}function _l(t,n){return cr===null&&fr(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(t===null)throw Error(r(308));ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ki=ki.next=n;return a}var Fv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Bv=s.unstable_scheduleCallback,Iv=s.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lc(){return{controller:new Fv,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&Bv(Iv,function(){t.controller.abort()})}var no=null,Nc=0,qr=0,Yr=null;function Hv(t,n){if(no===null){var a=no=[];Nc=0,qr=Ff(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Nc++,n.then(Wp,Wp),n}function Wp(){if(--Nc===0&&no!==null){Yr!==null&&(Yr.status="fulfilled");var t=no;no=null,qr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Gv(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var qp=B.S;B.S=function(t,n){w0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hv(t,n),qp!==null&&qp(t,n)};var dr=O(null);function Oc(){var t=dr.current;return t!==null?t:Yt.pooledCache}function vl(t,n){n===null?Me(dr,dr.current):Me(dr,n.pool)}function Yp(){var t=Oc();return t===null?null:{parent:un._currentValue,pool:t}}var jr=Error(r(460)),Pc=Error(r(474)),Sl=Error(r(542)),yl={then:function(){}};function jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t}throw pr=n,jr}}function hr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pr=a,jr):a}}var pr=null;function Kp(){if(pr===null)throw Error(r(459));var t=pr;return pr=null,t}function Qp(t){if(t===jr||t===Sl)throw Error(r(483))}var Zr=null,io=0;function Ml(t){var n=io;return io+=1,Zr===null&&(Zr=[]),Zp(Zr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jp(t){function n(W,G){if(t){var Z=W.deletions;Z===null?(W.deletions=[G],W.flags|=16):Z.push(G)}}function a(W,G){if(!t)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function o(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=Gi(W,G),W.index=0,W.sibling=null,W}function f(W,G,Z){return W.index=Z,t?(Z=W.alternate,Z!==null?(Z=Z.index,Z<G?(W.flags|=67108866,G):Z):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function v(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,G,Z,de){return G===null||G.tag!==6?(G=bc(Z,W.mode,de),G.return=W,G):(G=c(G,Z),G.return=W,G)}function F(W,G,Z,de){var Qe=Z.type;return Qe===R?ce(W,G,Z.props.children,de,Z.key):G!==null&&(G.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===$&&hr(Qe)===G.type)?(G=c(G,Z.props),ao(G,Z),G.return=W,G):(G=ml(Z.type,Z.key,Z.props,null,W.mode,de),ao(G,Z),G.return=W,G)}function Q(W,G,Z,de){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=Ec(Z,W.mode,de),G.return=W,G):(G=c(G,Z.children||[]),G.return=W,G)}function ce(W,G,Z,de,Qe){return G===null||G.tag!==7?(G=lr(Z,W.mode,de,Qe),G.return=W,G):(G=c(G,Z),G.return=W,G)}function pe(W,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=bc(""+G,W.mode,Z),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return Z=ml(G.type,G.key,G.props,null,W.mode,Z),ao(Z,G),Z.return=W,Z;case E:return G=Ec(G,W.mode,Z),G.return=W,G;case $:return G=hr(G),pe(W,G,Z)}if(fe(G)||te(G))return G=lr(G,W.mode,Z,null),G.return=W,G;if(typeof G.then=="function")return pe(W,Ml(G),Z);if(G.$$typeof===D)return pe(W,_l(W,G),Z);bl(W,G)}return null}function ee(W,G,Z,de){var Qe=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Qe!==null?null:T(W,G,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:return Z.key===Qe?F(W,G,Z,de):null;case E:return Z.key===Qe?Q(W,G,Z,de):null;case $:return Z=hr(Z),ee(W,G,Z,de)}if(fe(Z)||te(Z))return Qe!==null?null:ce(W,G,Z,de,null);if(typeof Z.then=="function")return ee(W,G,Ml(Z),de);if(Z.$$typeof===D)return ee(W,G,_l(W,Z),de);bl(W,Z)}return null}function se(W,G,Z,de,Qe){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return W=W.get(Z)||null,T(G,W,""+de,Qe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case M:return W=W.get(de.key===null?Z:de.key)||null,F(G,W,de,Qe);case E:return W=W.get(de.key===null?Z:de.key)||null,Q(G,W,de,Qe);case $:return de=hr(de),se(W,G,Z,de,Qe)}if(fe(de)||te(de))return W=W.get(Z)||null,ce(G,W,de,Qe,null);if(typeof de.then=="function")return se(W,G,Z,Ml(de),Qe);if(de.$$typeof===D)return se(W,G,Z,_l(G,de),Qe);bl(G,de)}return null}function He(W,G,Z,de){for(var Qe=null,wt=null,Xe=G,ft=G=0,St=null;Xe!==null&&ft<Z.length;ft++){Xe.index>ft?(St=Xe,Xe=null):St=Xe.sibling;var Dt=ee(W,Xe,Z[ft],de);if(Dt===null){Xe===null&&(Xe=St);break}t&&Xe&&Dt.alternate===null&&n(W,Xe),G=f(Dt,G,ft),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt,Xe=St}if(ft===Z.length)return a(W,Xe),bt&&Vi(W,ft),Qe;if(Xe===null){for(;ft<Z.length;ft++)Xe=pe(W,Z[ft],de),Xe!==null&&(G=f(Xe,G,ft),wt===null?Qe=Xe:wt.sibling=Xe,wt=Xe);return bt&&Vi(W,ft),Qe}for(Xe=o(Xe);ft<Z.length;ft++)St=se(Xe,W,ft,Z[ft],de),St!==null&&(t&&St.alternate!==null&&Xe.delete(St.key===null?ft:St.key),G=f(St,G,ft),wt===null?Qe=St:wt.sibling=St,wt=St);return t&&Xe.forEach(function(ka){return n(W,ka)}),bt&&Vi(W,ft),Qe}function tt(W,G,Z,de){if(Z==null)throw Error(r(151));for(var Qe=null,wt=null,Xe=G,ft=G=0,St=null,Dt=Z.next();Xe!==null&&!Dt.done;ft++,Dt=Z.next()){Xe.index>ft?(St=Xe,Xe=null):St=Xe.sibling;var ka=ee(W,Xe,Dt.value,de);if(ka===null){Xe===null&&(Xe=St);break}t&&Xe&&ka.alternate===null&&n(W,Xe),G=f(ka,G,ft),wt===null?Qe=ka:wt.sibling=ka,wt=ka,Xe=St}if(Dt.done)return a(W,Xe),bt&&Vi(W,ft),Qe;if(Xe===null){for(;!Dt.done;ft++,Dt=Z.next())Dt=pe(W,Dt.value,de),Dt!==null&&(G=f(Dt,G,ft),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return bt&&Vi(W,ft),Qe}for(Xe=o(Xe);!Dt.done;ft++,Dt=Z.next())Dt=se(Xe,W,ft,Dt.value,de),Dt!==null&&(t&&Dt.alternate!==null&&Xe.delete(Dt.key===null?ft:Dt.key),G=f(Dt,G,ft),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return t&&Xe.forEach(function(JS){return n(W,JS)}),bt&&Vi(W,ft),Qe}function Vt(W,G,Z,de){if(typeof Z=="object"&&Z!==null&&Z.type===R&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:e:{for(var Qe=Z.key;G!==null;){if(G.key===Qe){if(Qe=Z.type,Qe===R){if(G.tag===7){a(W,G.sibling),de=c(G,Z.props.children),de.return=W,W=de;break e}}else if(G.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===$&&hr(Qe)===G.type){a(W,G.sibling),de=c(G,Z.props),ao(de,Z),de.return=W,W=de;break e}a(W,G);break}else n(W,G);G=G.sibling}Z.type===R?(de=lr(Z.props.children,W.mode,de,Z.key),de.return=W,W=de):(de=ml(Z.type,Z.key,Z.props,null,W.mode,de),ao(de,Z),de.return=W,W=de)}return v(W);case E:e:{for(Qe=Z.key;G!==null;){if(G.key===Qe)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(W,G.sibling),de=c(G,Z.children||[]),de.return=W,W=de;break e}else{a(W,G);break}else n(W,G);G=G.sibling}de=Ec(Z,W.mode,de),de.return=W,W=de}return v(W);case $:return Z=hr(Z),Vt(W,G,Z,de)}if(fe(Z))return He(W,G,Z,de);if(te(Z)){if(Qe=te(Z),typeof Qe!="function")throw Error(r(150));return Z=Qe.call(Z),tt(W,G,Z,de)}if(typeof Z.then=="function")return Vt(W,G,Ml(Z),de);if(Z.$$typeof===D)return Vt(W,G,_l(W,Z),de);bl(W,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,G!==null&&G.tag===6?(a(W,G.sibling),de=c(G,Z),de.return=W,W=de):(a(W,G),de=bc(Z,W.mode,de),de.return=W,W=de),v(W)):a(W,G)}return function(W,G,Z,de){try{io=0;var Qe=Vt(W,G,Z,de);return Zr=null,Qe}catch(Xe){if(Xe===jr||Xe===Sl)throw Xe;var wt=jn(29,Xe,null,W.mode);return wt.lanes=de,wt.return=W,wt}finally{}}}var mr=Jp(!0),$p=Jp(!1),Aa=!1;function zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=pl(t),zp(t,null,a),n}return hl(t,o,n,a),pl(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Is(t,a)}}function Bc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ic=!1;function so(){if(Ic){var t=Yr;if(t!==null)throw t}}function oo(t,n,a,o){Ic=!1;var c=t.updateQueue;Aa=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var F=T,Q=F.next;F.next=null,v===null?f=Q:v.next=Q,v=F;var ce=t.alternate;ce!==null&&(ce=ce.updateQueue,T=ce.lastBaseUpdate,T!==v&&(T===null?ce.firstBaseUpdate=Q:T.next=Q,ce.lastBaseUpdate=F))}if(f!==null){var pe=c.baseState;v=0,ce=Q=F=null,T=f;do{var ee=T.lane&-536870913,se=ee!==T.lane;if(se?(vt&ee)===ee:(o&ee)===ee){ee!==0&&ee===qr&&(Ic=!0),ce!==null&&(ce=ce.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var He=t,tt=T;ee=n;var Vt=a;switch(tt.tag){case 1:if(He=tt.payload,typeof He=="function"){pe=He.call(Vt,pe,ee);break e}pe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=tt.payload,ee=typeof He=="function"?He.call(Vt,pe,ee):He,ee==null)break e;pe=x({},pe,ee);break e;case 2:Aa=!0}}ee=T.callback,ee!==null&&(t.flags|=64,se&&(t.flags|=8192),se=c.callbacks,se===null?c.callbacks=[ee]:se.push(ee))}else se={lane:ee,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ce===null?(Q=ce=se,F=pe):ce=ce.next=se,v|=ee;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;se=T,T=se.next,se.next=null,c.lastBaseUpdate=se,c.shared.pending=null}}while(!0);ce===null&&(F=pe),c.baseState=F,c.firstBaseUpdate=Q,c.lastBaseUpdate=ce,f===null&&(c.shared.lanes=0),Na|=v,t.lanes=v,t.memoizedState=pe}}function em(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)em(a[t],n)}var Kr=O(null),El=O(0);function nm(t,n){t=$i,Me(El,t),Me(Kr,n),$i=t|n.baseLanes}function Hc(){Me(El,$i),Me(Kr,Kr.current)}function Gc(){$i=El.current,ae(Kr),ae(El)}var Zn=O(null),ui=null;function wa(t){var n=t.alternate;Me(rn,rn.current&1),Me(Zn,t),ui===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(ui=t)}function Vc(t){Me(rn,rn.current),Me(Zn,t),ui===null&&(ui=t)}function im(t){t.tag===22?(Me(rn,rn.current),Me(Zn,t),ui===null&&(ui=t)):Da()}function Da(){Me(rn,rn.current),Me(Zn,Zn.current)}function Kn(t){ae(Zn),ui===t&&(ui=null),ae(rn)}var rn=O(0);function Tl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zf(a)||Kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,ot=null,Ht=null,cn=null,Al=!1,Qr=!1,xr=!1,Rl=0,lo=0,Jr=null,Vv=0;function en(){throw Error(r(321))}function kc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Xc(t,n,a,o,c,f){return Wi=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Hm:sf,xr=!1,f=a(o,c),xr=!1,Qr&&(f=rm(n,a,o,c)),am(t),f}function am(t){B.H=fo;var n=Ht!==null&&Ht.next!==null;if(Wi=0,cn=Ht=ot=null,Al=!1,lo=0,Jr=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&gl(t)&&(fn=!0))}function rm(t,n,a,o){ot=t;var c=0;do{if(Qr&&(Jr=null),lo=0,Qr=!1,25<=c)throw Error(r(301));if(c+=1,cn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Gm,f=n(a,o)}while(Qr);return f}function kv(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?uo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ot.flags|=1024),n}function Wc(){var t=Rl!==0;return Rl=0,t}function qc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Yc(t){if(Al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Al=!1}Wi=0,cn=Ht=ot=null,Qr=!1,lo=Rl=0,Jr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ot.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Ht===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=cn===null?ot.memoizedState:cn.next;if(n!==null)cn=n,Ht=t;else{if(t===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},cn===null?ot.memoizedState=cn=t:cn=cn.next=t}return cn}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(t){var n=lo;return lo+=1,Jr===null&&(Jr=[]),t=Zp(Jr,t,n),n=ot,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Hm:sf),t}function wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return uo(t);if(t.$$typeof===D)return An(t)}throw Error(r(438,String(t)))}function jc(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function qi(t,n){return typeof n=="function"?n(t):n}function Dl(t){var n=sn();return Zc(n,Ht,t)}function Zc(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=v=null,F=null,Q=n,ce=!1;do{var pe=Q.lane&-536870913;if(pe!==Q.lane?(vt&pe)===pe:(Wi&pe)===pe){var ee=Q.revertLane;if(ee===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pe===qr&&(ce=!0);else if((Wi&ee)===ee){Q=Q.next,ee===qr&&(ce=!0);continue}else pe={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(T=F=pe,v=f):F=F.next=pe,ot.lanes|=ee,Na|=ee;pe=Q.action,xr&&a(f,pe),f=Q.hasEagerState?Q.eagerState:a(f,pe)}else ee={lane:pe,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(T=F=ee,v=f):F=F.next=ee,ot.lanes|=pe,Na|=pe;Q=Q.next}while(Q!==null&&Q!==n);if(F===null?v=f:F.next=T,!Yn(f,t.memoizedState)&&(fn=!0,ce&&(a=Yr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=F,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Kc(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);Yn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function sm(t,n,a){var o=ot,c=sn(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Yn((Ht||c).memoizedState,a);if(v&&(c.memoizedState=a,fn=!0),c=c.queue,$c(um.bind(null,o,c,t),[t]),c.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,$r(9,{destroy:void 0},lm.bind(null,o,c,a,n),null),Yt===null)throw Error(r(349));f||(Wi&127)!==0||om(o,n,a)}return a}function om(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Cl(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function lm(t,n,a,o){n.value=a,n.getSnapshot=o,cm(n)&&fm(t)}function um(t,n,a){return a(function(){cm(n)&&fm(t)})}function cm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function fm(t){var n=or(t,2);n!==null&&Gn(n,t,2)}function Qc(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),xr){je(!0);try{a()}finally{je(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},n}function dm(t,n,a,o){return t.baseState=a,Zc(t,Ht,typeof o=="function"?o:qi)}function Xv(t,n,a,o,c){if(Nl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=B.T,v={};B.T=v;try{var T=a(c,o),F=B.S;F!==null&&F(v,T),pm(t,n,T)}catch(Q){Jc(t,n,Q)}finally{f!==null&&v.types!==null&&(f.types=v.types),B.T=f}}else try{f=a(c,o),pm(t,n,f)}catch(Q){Jc(t,n,Q)}}function pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mm(t,n,o)},function(o){return Jc(t,n,o)}):mm(t,n,a)}function mm(t,n,a){n.status="fulfilled",n.value=a,xm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hm(t,a)))}function Jc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}t.action=null}function xm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gm(t,n){return n}function _m(t,n){if(bt){var a=Yt.formState;if(a!==null){e:{var o=ot;if(bt){if(Kt){t:{for(var c=Kt,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ci(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Kt=ci(c.nextSibling),o=c.data==="F!";break e}}Ea(o)}o=!1}o&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:n},a.queue=o,a=Fm.bind(null,ot,o),o.dispatch=a,o=Qc(!1),f=rf.bind(null,ot,!1,o.queue),o=Nn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=Xv.bind(null,ot,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function vm(t){var n=sn();return Sm(n,Ht,t)}function Sm(t,n,a){if(n=Zc(t,n,gm)[0],t=Dl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=uo(n)}catch(v){throw v===jr?Sl:v}else o=n;n=sn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,$r(9,{destroy:void 0},Wv.bind(null,c,a),null)),[o,f,t]}function Wv(t,n){t.action=n}function ym(t){var n=sn(),a=Ht;if(a!==null)return Sm(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function $r(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Cl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Mm(){return sn().memoizedState}function Ul(t,n,a,o){var c=Nn();ot.flags|=t,c.memoizedState=$r(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ll(t,n,a,o){var c=sn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ht!==null&&o!==null&&kc(o,Ht.memoizedState.deps)?c.memoizedState=$r(n,f,a,o):(ot.flags|=t,c.memoizedState=$r(1|n,f,a,o))}function bm(t,n){Ul(8390656,8,t,n)}function $c(t,n){Ll(2048,8,t,n)}function qv(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Cl(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Em(t){var n=sn().memoizedState;return qv({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Tm(t,n){return Ll(4,2,t,n)}function Am(t,n){return Ll(4,4,t,n)}function Rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cm(t,n,a){a=a!=null?a.concat([t]):null,Ll(4,4,Rm.bind(null,n,t),a)}function ef(){}function wm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&kc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Dm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&kc(n,o[1]))return o[0];if(o=t(),xr){je(!0);try{t()}finally{je(!1)}}return a.memoizedState=[o,n],o}function tf(t,n,a){return a===void 0||(Wi&1073741824)!==0&&(vt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=U0(),ot.lanes|=t,Na|=t,a)}function Um(t,n,a,o){return Yn(a,n)?a:Kr.current!==null?(t=tf(t,a,o),Yn(t,n)||(fn=!0),t):(Wi&42)===0||(Wi&1073741824)!==0&&(vt&261930)===0?(fn=!0,t.memoizedState=a):(t=U0(),ot.lanes|=t,Na|=t,n)}function Lm(t,n,a,o,c){var f=j.p;j.p=f!==0&&8>f?f:8;var v=B.T,T={};B.T=T,rf(t,!1,n,a);try{var F=c(),Q=B.S;if(Q!==null&&Q(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ce=Gv(F,o);co(t,n,ce,$n(t))}else co(t,n,o,$n(t))}catch(pe){co(t,n,{then:function(){},status:"rejected",reason:pe},$n())}finally{j.p=f,v!==null&&T.types!==null&&(v.types=T.types),B.T=v}}function Yv(){}function nf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Nm(t).queue;Lm(t,c,n,Y,a===null?Yv:function(){return Om(t),a(o)})}function Nm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Om(t){var n=Nm(t);n.next===null&&(n=t.alternate.memoizedState),co(t,n.next.queue,{},$n())}function af(){return An(Co)}function Pm(){return sn().memoizedState}function zm(){return sn().memoizedState}function jv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Ra(a);var o=Ca(n,t,a);o!==null&&(Gn(o,n,a),ro(o,n,a)),n={cache:Lc()},t.payload=n;return}n=n.return}}function Zv(t,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(t)?Bm(n,a):(a=yc(t,n,a,o),a!==null&&(Gn(a,t,o),Im(a,n,o)))}function Fm(t,n,a){var o=$n();co(t,n,a,o)}function co(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(t))Bm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Yn(T,v))return hl(t,n,c,0),Yt===null&&dl(),!1}catch{}finally{}if(a=yc(t,n,c,o),a!==null)return Gn(a,t,o),Im(a,n,o),!0}return!1}function rf(t,n,a,o){if(o={lane:2,revertLane:Ff(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Nl(t)){if(n)throw Error(r(479))}else n=yc(t,a,o,2),n!==null&&Gn(n,t,2)}function Nl(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function Bm(t,n){Qr=Al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Im(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Is(t,a)}}var fo={readContext:An,use:wl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};fo.useEffectEvent=en;var Hm={readContext:An,use:wl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:bm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ul(4194308,4,Rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ul(4194308,4,t,n)},useInsertionEffect:function(t,n){Ul(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var o=t();if(xr){je(!0);try{t()}finally{je(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Nn();if(a!==void 0){var c=a(n);if(xr){je(!0);try{a(n)}finally{je(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Zv.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Qc(t);var n=t.queue,a=Fm.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(t,n){var a=Nn();return tf(a,t,n)},useTransition:function(){var t=Qc(!1);return t=Lm.bind(null,ot,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ot,c=Nn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(vt&127)!==0||om(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,bm(um.bind(null,o,f,t),[t]),o.flags|=2048,$r(9,{destroy:void 0},lm.bind(null,o,f,a,n),null),a},useId:function(){var t=Nn(),n=Yt.identifierPrefix;if(bt){var a=Ri,o=Ai;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Vv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:af,useFormState:_m,useActionState:_m,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:jc,useCacheRefresh:function(){return Nn().memoizedState=jv.bind(null,ot)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:An,use:wl,useCallback:wm,useContext:An,useEffect:$c,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Dl,useRef:Mm,useState:function(){return Dl(qi)},useDebugValue:ef,useDeferredValue:function(t,n){var a=sn();return Um(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Dl(qi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:uo(t),n]},useSyncExternalStore:sm,useId:Pm,useHostTransitionStatus:af,useFormState:vm,useActionState:vm,useOptimistic:function(t,n){var a=sn();return dm(a,Ht,t,n)},useMemoCache:jc,useCacheRefresh:zm};sf.useEffectEvent=Em;var Gm={readContext:An,use:wl,useCallback:wm,useContext:An,useEffect:$c,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Kc,useRef:Mm,useState:function(){return Kc(qi)},useDebugValue:ef,useDeferredValue:function(t,n){var a=sn();return Ht===null?tf(a,t,n):Um(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Kc(qi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:uo(t),n]},useSyncExternalStore:sm,useId:Pm,useHostTransitionStatus:af,useFormState:ym,useActionState:ym,useOptimistic:function(t,n){var a=sn();return Ht!==null?dm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:jc,useCacheRefresh:zm};Gm.useEffectEvent=Em;function of(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var lf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=$n(),c=Ra(o);c.payload=n,a!=null&&(c.callback=a),n=Ca(t,c,o),n!==null&&(Gn(n,t,o),ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=$n(),c=Ra(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ca(t,c,o),n!==null&&(Gn(n,t,o),ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),o=Ra(a);o.tag=2,n!=null&&(o.callback=n),n=Ca(t,o,a),n!==null&&(Gn(n,t,a),ro(n,t,a))}};function Vm(t,n,a,o,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,o)||!Qs(c,f):!0}function km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&lf.enqueueReplaceState(n,n.state,null)}function gr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Xm(t){fl(t)}function Wm(t){console.error(t)}function qm(t){fl(t)}function Ol(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function uf(t,n,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(t,n)},a}function jm(t){return t=Ra(t),t.tag=3,t}function Zm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Ym(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,o),typeof c!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Kv(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?ql():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Of(t,o,c)),!1;case 22:return a.flags|=65536,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Of(t,o,c)),!1}throw Error(r(435,a.tag))}return Of(t,o,c),ql(),!1}if(bt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Rc&&(t=Error(r(422),{cause:o}),eo(ri(t,a)))):(o!==Rc&&(n=Error(r(423),{cause:o}),eo(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ri(o,a),c=uf(t.stateNode,o,c),Bc(t,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=ri(f,a),So===null?So=[f]:So.push(f),tn!==4&&(tn=2),n===null)return!0;o=ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=uf(a.stateNode,o,t),Bc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Oa===null||!Oa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=jm(c),Zm(c,t,a,o),Bc(a,c),!1}a=a.return}while(a!==null);return!1}var cf=Error(r(461)),fn=!1;function Rn(t,n,a,o){n.child=t===null?$p(n,null,a,o):mr(n,t.child,a,o)}function Km(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return fr(n),o=Xc(t,n,a,v,f,c),T=Wc(),t!==null&&!fn?(qc(t,n,c),Yi(t,n,c)):(bt&&T&&Tc(n),n.flags|=1,Rn(t,n,o,c),n.child)}function Qm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!Mc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(t,n,f,o,c)):(t=ml(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!_f(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(v,o)&&t.ref===n.ref)return Yi(t,n,c)}return n.flags|=1,t=Gi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Jm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Qs(f,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=f,_f(t,c))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,Yi(t,n,c)}return ff(t,n,a,o,c)}function $m(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return e0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?nm(n,f):Hc(),im(n);else return o=n.lanes=536870912,e0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(vl(n,f.cachePool),nm(n,f),Da(),n.memoizedState=null):(t!==null&&vl(n,null),Hc(),Da());return Rn(t,n,c,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function e0(t,n,a,o,c){var f=Oc();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vl(n,null),Hc(),im(n),t!==null&&Wr(t,n,o,!0),n.childLanes=c,null}function Pl(t,n){return n=Fl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function t0(t,n,a){return mr(n,t.child,null,a),t=Pl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Qv(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Pl(n,o),n.lanes=536870912,ho(null,t);if(Vc(n),(t=Kt)?(t=hx(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Tn=n,Kt=null)):t=null,t===null)throw Ea(n);return n.lanes=536870912,null}return Pl(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Vc(n),c)if(n.flags&256)n.flags&=-257,n=t0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Wr(t,n,a,!1),c=(a&t.childLanes)!==0,fn||c){if(o=Yt,o!==null&&(v=Hs(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,or(t,v),Gn(o,t,v),cf;ql(),n=t0(t,n,a)}else t=f.treeContext,Kt=ci(v.nextSibling),Tn=n,bt=!0,ba=null,li=!1,t!==null&&Gp(n,t),n=Pl(n,o),n.flags|=4096;return n}return t=Gi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,o,c){return fr(n),a=Xc(t,n,a,o,void 0,c),o=Wc(),t!==null&&!fn?(qc(t,n,c),Yi(t,n,c)):(bt&&o&&Tc(n),n.flags|=1,Rn(t,n,a,c),n.child)}function n0(t,n,a,o,c,f){return fr(n),n.updateQueue=null,a=rm(n,o,a,c),am(t),o=Wc(),t!==null&&!fn?(qc(t,n,f),Yi(t,n,f)):(bt&&o&&Tc(n),n.flags|=1,Rn(t,n,a,f),n.child)}function i0(t,n,a,o,c){if(fr(n),n.stateNode===null){var f=Gr,v=a.contextType;typeof v=="object"&&v!==null&&(f=An(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},zc(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?An(v):Gr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(of(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&lf.enqueueReplaceState(f,f.state,null),oo(n,o,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,F=gr(a,T);f.props=F;var Q=f.context,ce=a.contextType;v=Gr,typeof ce=="object"&&ce!==null&&(v=An(ce));var pe=a.getDerivedStateFromProps;ce=typeof pe=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ce||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==v)&&km(n,f,o,v),Aa=!1;var ee=n.memoizedState;f.state=ee,oo(n,o,f,c),so(),Q=n.memoizedState,T||ee!==Q||Aa?(typeof pe=="function"&&(of(n,a,pe,o),Q=n.memoizedState),(F=Aa||Vm(n,a,F,o,ee,Q,v))?(ce||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=Q),f.props=o,f.state=Q,f.context=v,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Fc(t,n),v=n.memoizedProps,ce=gr(a,v),f.props=ce,pe=n.pendingProps,ee=f.context,Q=a.contextType,F=Gr,typeof Q=="object"&&Q!==null&&(F=An(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==pe||ee!==F)&&km(n,f,o,F),Aa=!1,ee=n.memoizedState,f.state=ee,oo(n,o,f,c),so();var se=n.memoizedState;v!==pe||ee!==se||Aa||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof T=="function"&&(of(n,a,T,o),se=n.memoizedState),(ce=Aa||Vm(n,a,ce,o,ee,se,F)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,se,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,se,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),f.props=o,f.state=se,f.context=F,o=ce):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,zl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=mr(n,t.child,null,c),n.child=mr(n,null,a,c)):Rn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Yi(t,n,c),t}function a0(t,n,a,o){return ur(),n.flags|=256,Rn(t,n,a,o),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:Yp()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function r0(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(c?wa(n):Da(),(t=Kt)?(t=hx(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Tn=n,Kt=null)):t=null,t===null)throw Ea(n);return Kf(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(Da(),c=n.mode,T=Fl({mode:"hidden",children:T},c),o=lr(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=hf(a),o.childLanes=pf(t,v,a),n.memoizedState=df,ho(null,o)):(wa(n),mf(n,T))}var F=t.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(f)n.flags&256?(wa(n),n.flags&=-257,n=xf(t,n,a)):n.memoizedState!==null?(Da(),n.child=t.child,n.flags|=128,n=null):(Da(),T=o.fallback,c=n.mode,o=Fl({mode:"visible",children:o.children},c),T=lr(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,mr(n,t.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=pf(t,v,a),n.memoizedState=df,n=ho(null,o));else if(wa(n),Kf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var Q=v.dgst;v=Q,o=Error(r(419)),o.stack="",o.digest=v,eo({value:o,source:null,stack:null}),n=xf(t,n,a)}else if(fn||Wr(t,n,a,!1),v=(a&t.childLanes)!==0,fn||v){if(v=Yt,v!==null&&(o=Hs(v,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,or(t,o),Gn(v,t,o),cf;Zf(T)||ql(),n=xf(t,n,a)}else Zf(T)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Kt=ci(T.nextSibling),Tn=n,bt=!0,ba=null,li=!1,t!==null&&Gp(n,t),n=mf(n,o.children),n.flags|=4096);return n}return c?(Da(),T=o.fallback,c=n.mode,F=t.child,Q=F.sibling,o=Gi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,Q!==null?T=Gi(Q,T):(T=lr(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,ho(null,o),o=n.child,T=t.child.memoizedState,T===null?T=hf(a):(c=T.cachePool,c!==null?(F=un._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Yp(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=pf(t,v,a),n.memoizedState=df,ho(t.child,o)):(wa(n),a=t.child,t=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=Fl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Fl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function xf(t,n,a){return mr(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function s0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Dc(t.return,n,a)}function gf(t,n,a,o,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function o0(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var v=rn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,Me(rn,v),Rn(t,n,o,a),o=bt?$s:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s0(t,a,n);else if(t.tag===19)s0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Tl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),gf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Tl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}gf(n,!0,a,null,f,o);break;case"together":gf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Na|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Gi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Gi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function Jv(t,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),Ta(n,un,t.memoizedState.cache),ur();break;case 27:case 5:We(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?r0(t,n,a):(wa(n),t=Yi(t,n,a),t!==null?t.sibling:null);wa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Wr(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return o0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Me(rn,rn.current),o)break;return null;case 22:return n.lanes=0,$m(t,n,a,n.pendingProps);case 24:Ta(n,un,t.memoizedState.cache)}return Yi(t,n,a)}function l0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!_f(t,a)&&(n.flags&128)===0)return fn=!1,Jv(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,bt&&(n.flags&1048576)!==0&&Hp(n,$s,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=hr(n.elementType),n.type=t,typeof t=="function")Mc(t)?(o=gr(t,o),n.tag=1,n=i0(null,n,t,o,a)):(n.tag=0,n=ff(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===z){n.tag=11,n=Km(null,n,t,o,a);break e}else if(c===P){n.tag=14,n=Qm(null,n,t,o,a);break e}}throw n=me(t)||t,Error(r(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=gr(o,n.pendingProps),i0(t,n,o,c,a);case 3:e:{if(we(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Fc(t,n),oo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ta(n,un,o),o!==f.cache&&Uc(n,[un],a,!0),so(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=a0(t,n,o,a);break e}else if(o!==c){c=ri(Error(r(424)),n),eo(c),n=a0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=ci(t.firstChild),Tn=n,bt=!0,ba=null,li=!0,a=$p(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ur(),o===c){n=Yi(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return zl(t,n),t===null?(a=vx(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=$l(ne.current).createElement(a),o[ln]=n,o[pn]=t,Cn(o,a,t),J(o),n.stateNode=o):n.memoizedState=vx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return We(n),t===null&&bt&&(o=n.stateNode=xx(n.type,n.pendingProps,ne.current),Tn=n,li=!0,c=Kt,Ba(n.type)?(Qf=c,Kt=ci(o.firstChild)):Kt=c),Rn(t,n,n.pendingProps.children,a),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((c=o=Kt)&&(o=CS(o,n.type,n.pendingProps,li),o!==null?(n.stateNode=o,Tn=n,Kt=ci(o.firstChild),li=!1,c=!0):c=!1),c||Ea(n)),We(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,qf(c,f)?o=null:v!==null&&qf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Xc(t,n,kv,null,null,a),Co._currentValue=c),zl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Kt)&&(a=wS(a,n.pendingProps,li),a!==null?(n.stateNode=a,Tn=n,Kt=null,t=!0):t=!1),t||Ea(n)),null;case 13:return r0(t,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=mr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Km(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,fr(n),c=An(c),o=o(c),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Qm(t,n,n.type,n.pendingProps,a);case 15:return Jm(t,n,n.type,n.pendingProps,a);case 19:return o0(t,n,a);case 31:return Qv(t,n,a);case 22:return $m(t,n,a,n.pendingProps);case 24:return fr(n),o=An(un),t===null?(c=Oc(),c===null&&(c=Yt,f=Lc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},zc(n),Ta(n,un,c)):((t.lanes&a)!==0&&(Fc(t,n),oo(n,null,null,a),so()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ta(n,un,o)):(o=f.cache,Ta(n,un,o),o!==c.cache&&Uc(n,[un],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(t){t.flags|=4}function vf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(P0())t.flags|=8192;else throw pr=yl,Pc}else t.flags&=-16777217}function u0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ex(n))if(P0())t.flags|=8192;else throw pr=yl,Pc}function Bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?It():536870912,t.lanes|=n,is|=n)}function po(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function $v(t,n,a){var o=n.pendingProps;switch(Ac(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(un),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xr(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cc())),Qt(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ji(n),f!==null?(Qt(n),u0(n,f)):(Qt(n),vf(n,c,null,o,a))):f?f!==t.memoizedState?(ji(n),Qt(n),u0(n,f)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ji(n),Qt(n),vf(n,c,t,o,a)),null;case 27:if(ut(n),a=ne.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=Te.current,Xr(n)?Vp(n):(t=xx(c,o,a),n.stateNode=t,ji(n))}return Qt(n),null;case 5:if(ut(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(f=Te.current,Xr(n))Vp(n);else{var v=$l(ne.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}f[ln]=n,f[pn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ji(n)}}return Qt(n),vf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ne.current,Xr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||rx(t.nodeValue,a)),t||Ea(n,!0)}else t=$l(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Xr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Cc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Xr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),c=!1}else c=Cc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),Qt(n),null);case 4:return Ge(),t===null&&Gf(n.stateNode.containerInfo),Qt(n),null;case 10:return Xi(n.type),Qt(n),null;case 19:if(ae(rn),o=n.memoizedState,o===null)return Qt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)po(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Tl(t),f!==null){for(n.flags|=128,po(o,!1),t=f.updateQueue,n.updateQueue=t,Bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fp(a,t),a=a.sibling;return Me(rn,rn.current&1|2),bt&&Vi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>kl&&(n.flags|=128,c=!0,po(o,!1),n.lanes=4194304)}else{if(!c)if(t=Tl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Bl(n,t),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return Qt(n),null}else 2*b()-o.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,c=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=rn.current,Me(rn,c?a&1|2:a&1),bt&&Vi(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return Kn(n),Gc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ae(dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(un),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function eS(t,n){switch(Ac(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(un),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ut(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ae(rn),null;case 4:return Ge(),null;case 10:return Xi(n.type),null;case 22:case 23:return Kn(n),Gc(),t!==null&&ae(dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(un),null;case 25:return null;default:return null}}function c0(t,n){switch(Ac(n),n.tag){case 3:Xi(un),Ge();break;case 26:case 27:case 5:ut(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:ae(rn);break;case 10:Xi(n.type);break;case 22:case 23:Kn(n),Gc(),t!==null&&ae(dr);break;case 24:Xi(un)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==c)}}catch(T){Bt(n,n.return,T)}}function Ua(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var F=a,Q=T;try{Q()}catch(ce){Bt(c,F,ce)}}}o=o.next}while(o!==f)}}catch(ce){Bt(n,n.return,ce)}}function f0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{tm(n,a)}catch(o){Bt(t,t.return,o)}}}function d0(t,n,a){a.props=gr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Bt(t,n,c)}}function Ci(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Bt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(t,n,c)}else a.current=null}function h0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Bt(t,t.return,c)}}function Sf(t,n,a){try{var o=t.stateNode;MS(o,t.type,a,n),o[pn]=n}catch(c){Bt(t,t.return,c)}}function p0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ba(t.type)||t.tag===4}function yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(o!==4&&(o===27&&Ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Mf(t,n,a),t=t.sibling;t!==null;)Mf(t,n,a),t=t.sibling}function Il(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Il(t,n,a),t=t.sibling;t!==null;)Il(t,n,a),t=t.sibling}function m0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,o,a),n[ln]=t,n[pn]=a}catch(f){Bt(t,t.return,f)}}var Zi=!1,dn=!1,bf=!1,x0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function tS(t,n){if(t=t.containerInfo,Xf=su,t=Cp(t),mc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,F=-1,Q=0,ce=0,pe=t,ee=null;t:for(;;){for(var se;pe!==a||c!==0&&pe.nodeType!==3||(T=v+c),pe!==f||o!==0&&pe.nodeType!==3||(F=v+o),pe.nodeType===3&&(v+=pe.nodeValue.length),(se=pe.firstChild)!==null;)ee=pe,pe=se;for(;;){if(pe===t)break t;if(ee===a&&++Q===c&&(T=v),ee===f&&++ce===o&&(F=v),(se=pe.nextSibling)!==null)break;pe=ee,ee=pe.parentNode}pe=se}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:t,selectionRange:a},su=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var He=gr(a.type,c);t=o.getSnapshotBeforeUpdate(He,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Bt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function g0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),o&4&&mo(5,a);break;case 1:if(Qi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Bt(a,a.return,v)}else{var c=gr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Bt(a,a.return,v)}}o&64&&f0(a),o&512&&xo(a,a.return);break;case 3:if(Qi(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(t,n)}catch(v){Bt(a,a.return,v)}}break;case 27:n===null&&o&4&&m0(a);case 26:case 5:Qi(t,a),n===null&&o&4&&h0(a),o&512&&xo(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),o&4&&S0(t,a);break;case 13:Qi(t,a),o&4&&y0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cS.bind(null,a),DS(t,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||dn,c=Zi;var f=dn;Zi=o,(dn=n)&&!f?Ji(t,a,(a.subtreeFlags&8772)!==0):Qi(t,a),Zi=c,dn=f}break;case 30:break;default:Qi(t,a)}}function _0(t){var n=t.alternate;n!==null&&(t.alternate=null,_0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ks(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Fn=!1;function Ki(t,n,a){for(a=a.child;a!==null;)v0(t,n,a),a=a.sibling}function v0(t,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:dn||Ci(a,n),Ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Ci(a,n);var o=Jt,c=Fn;Ba(a.type)&&(Jt=a.stateNode,Fn=!1),Ki(t,n,a),To(a.stateNode),Jt=o,Fn=c;break;case 5:dn||Ci(a,n);case 6:if(o=Jt,c=Fn,Jt=null,Ki(t,n,a),Jt=o,Fn=c,Jt!==null)if(Fn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Jt!==null&&(Fn?(t=Jt,fx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fs(t)):fx(Jt,a.stateNode));break;case 4:o=Jt,c=Fn,Jt=a.stateNode.containerInfo,Fn=!0,Ki(t,n,a),Jt=o,Fn=c;break;case 0:case 11:case 14:case 15:Ua(2,a,n),dn||Ua(4,a,n),Ki(t,n,a);break;case 1:dn||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&d0(a,n,o)),Ki(t,n,a);break;case 21:Ki(t,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,Ki(t,n,a),dn=o;break;default:Ki(t,n,a)}}function S0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fs(t)}catch(a){Bt(n,n.return,a)}}}function y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fs(t)}catch(a){Bt(n,n.return,a)}}function nS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new x0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new x0),n;default:throw Error(r(435,t.tag))}}function Hl(t,n){var a=nS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=fS.bind(null,t,o);o.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ba(T.type)){Jt=T.stateNode,Fn=!1;break e}break;case 5:Jt=T.stateNode,Fn=!1;break e;case 3:case 4:Jt=T.stateNode.containerInfo,Fn=!0;break e}T=T.return}if(Jt===null)throw Error(r(160));v0(f,v,c),Jt=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)M0(n,t),n=n.sibling}var gi=null;function M0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),o&4&&(Ua(3,t,t.return),mo(3,t),Ua(5,t,t.return));break;case 1:Bn(n,t),In(t),o&512&&(dn||a===null||Ci(a,a.return)),o&64&&Zi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=gi;if(Bn(n,t),In(t),o&512&&(dn||a===null||Ci(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ir]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,o,a),f[ln]=t,J(f),o=f;break e;case"link":var v=Mx("link","href",c).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=c.createElement(o),Cn(f,o,a),c.head.appendChild(f);break;case"meta":if(v=Mx("meta","content",c).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=c.createElement(o),Cn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[ln]=t,J(f),o=f}t.stateNode=o}else bx(c,t.type,t.stateNode);else t.stateNode=yx(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?bx(c,t.type,t.stateNode):yx(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),o&512&&(dn||a===null||Ci(a,a.return)),a!==null&&o&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),o&512&&(dn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{Ti(c,"")}catch(He){Bt(t,t.return,He)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Sf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(bf=!0);break;case 6:if(Bn(n,t),In(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(He){Bt(t,t.return,He)}}break;case 3:if(nu=null,c=gi,gi=eu(n.containerInfo),Bn(n,t),gi=c,In(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(He){Bt(t,t.return,He)}bf&&(bf=!1,b0(t));break;case 4:o=gi,gi=eu(t.stateNode.containerInfo),Bn(n,t),In(t),gi=o;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Hl(t,o)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Hl(t,o)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,Q=Zi,ce=dn;if(Zi=Q||c,dn=ce||F,Bn(n,t),dn=ce,Zi=Q,In(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Zi||dn||_r(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=F.stateNode;var pe=F.memoizedProps.style,ee=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;T.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(He){Bt(F,F.return,He)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(He){Bt(F,F.return,He)}}}else if(n.tag===18){if(a===null){F=n;try{var se=F.stateNode;c?dx(se,!0):dx(F.stateNode,!1)}catch(He){Bt(F,F.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Hl(t,a))));break;case 19:Bn(n,t),In(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Hl(t,o)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(p0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=yf(t);Il(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Ti(v,""),a.flags&=-33);var T=yf(t);Il(t,T,v);break;case 3:case 4:var F=a.stateNode.containerInfo,Q=yf(t);Mf(t,Q,F);break;default:throw Error(r(161))}}catch(ce){Bt(t,t.return,ce)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function b0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;b0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)g0(t,n.alternate,n),n=n.sibling}function _r(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),_r(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&d0(n,n.return,a),_r(n);break;case 27:To(n.stateNode);case 26:case 5:Ci(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}t=t.sibling}}function Ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(c,f,a),mo(4,f);break;case 1:if(Ji(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Bt(o,o.return,Q)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)em(F[c],T)}catch(Q){Bt(o,o.return,Q)}}a&&v&64&&f0(f),xo(f,f.return);break;case 27:m0(f);case 26:case 5:Ji(c,f,a),a&&o===null&&v&4&&h0(f),xo(f,f.return);break;case 12:Ji(c,f,a);break;case 31:Ji(c,f,a),a&&v&4&&S0(c,f);break;case 13:Ji(c,f,a),a&&v&4&&y0(c,f);break;case 22:f.memoizedState===null&&Ji(c,f,a),xo(f,f.return);break;case 30:break;default:Ji(c,f,a)}n=n.sibling}}function Ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function _i(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)E0(t,n,a,o),n=n.sibling}function E0(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,o),c&2048&&mo(9,n);break;case 1:_i(t,n,a,o);break;case 3:_i(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(c&2048){_i(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Bt(n,n.return,F)}}else _i(t,n,a,o);break;case 31:_i(t,n,a,o);break;case 13:_i(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?_i(t,n,a,o):go(t,n):f._visibility&2?_i(t,n,a,o):(f._visibility|=2,es(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Ef(v,n);break;case 24:_i(t,n,a,o),c&2048&&Tf(n.alternate,n);break;default:_i(t,n,a,o)}}function es(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,F=o,Q=v.flags;switch(v.tag){case 0:case 11:case 15:es(f,v,T,F,c),mo(8,v);break;case 23:break;case 22:var ce=v.stateNode;v.memoizedState!==null?ce._visibility&2?es(f,v,T,F,c):go(f,v):(ce._visibility|=2,es(f,v,T,F,c)),c&&Q&2048&&Ef(v.alternate,v);break;case 24:es(f,v,T,F,c),c&&Q&2048&&Tf(v.alternate,v);break;default:es(f,v,T,F,c)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:go(a,o),c&2048&&Ef(o.alternate,o);break;case 24:go(a,o),c&2048&&Tf(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function ts(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)T0(t,n,a),t=t.sibling}function T0(t,n,a){switch(t.tag){case 26:ts(t,n,a),t.flags&_o&&t.memoizedState!==null&&VS(a,gi,t.memoizedState,t.memoizedProps);break;case 5:ts(t,n,a);break;case 3:case 4:var o=gi;gi=eu(t.stateNode.containerInfo),ts(t,n,a),gi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=_o,_o=16777216,ts(t,n,a),_o=o):ts(t,n,a));break;default:ts(t,n,a)}}function A0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,C0(o,t)}A0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)R0(t),t=t.sibling}function R0(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Gl(t)):vo(t);break;default:vo(t)}}function Gl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,C0(o,t)}A0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}t=t.sibling}}function C0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var c=o.sibling,f=o.return;if(_0(o),o===a){Mn=null;break e}if(c!==null){c.return=f,Mn=c;break e}Mn=f}}}var iS={getCacheForType:function(t){var n=An(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(un).controller.signal}},aS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Yt=null,gt=null,vt=0,Ft=0,Qn=null,La=!1,ns=!1,Af=!1,$i=0,tn=0,Na=0,vr=0,Rf=0,Jn=0,is=0,So=null,Hn=null,Cf=!1,Vl=0,w0=0,kl=1/0,Xl=null,Oa=null,xn=0,Pa=null,as=null,ea=0,wf=0,Df=null,D0=null,yo=0,Uf=null;function $n(){return(Nt&2)!==0&&vt!==0?vt&-vt:B.T!==null?Ff():Gs()}function U0(){if(Jn===0)if((vt&536870912)===0||bt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Gn(t,n,a){(t===Yt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(rs(t,0),za(t,vt,Jn,!1)),wn(t,a),((Nt&2)===0||t!==Yt)&&(t===Yt&&((Nt&2)===0&&(vr|=a),tn===4&&za(t,vt,Jn,!1)),wi(t))}function L0(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),c=o?oS(t,n):Nf(t,n,!0),f=o;do{if(c===0){ns&&!o&&za(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!rS(a)){c=Nf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=t;c=So;var F=T.current.memoizedState.isDehydrated;if(F&&(rs(T,v).flags|=256),v=Nf(T,v,!1),v!==2){if(Af&&!F){T.errorRecoveryDisabledLanes|=f,vr|=f,c=4;break e}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){rs(t,0),za(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:za(o,n,Jn,!La);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Vl+300-b(),10<c)){if(za(o,n,Jn,!La),xe(o,0,!0)!==0)break e;ea=n,o.timeoutHandle=ux(N0.bind(null,o,a,Hn,Xl,Cf,n,Jn,vr,is,La,f,"Throttled",-0,0),c);break e}N0(o,a,Hn,Xl,Cf,n,Jn,vr,is,La,f,null,-0,0)}}break}while(!0);wi(t)}function N0(t,n,a,o,c,f,v,T,F,Q,ce,pe,ee,se){if(t.timeoutHandle=-1,pe=n.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},T0(n,f,pe);var He=(f&62914560)===f?Vl-b():(f&4194048)===f?w0-b():0;if(He=kS(pe,He),He!==null){ea=f,t.cancelPendingCommit=He(G0.bind(null,t,n,f,a,o,c,v,T,F,ce,pe,null,ee,se)),za(t,f,v,!Q);return}}G0(t,n,f,a,o,c,v,T,F)}function rS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,a,o){n&=~Rf,n&=~vr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-ke(c),v=1<<f;o[f]=-1,c&=~v}a!==0&&nl(t,a,n)}function Wl(){return(Nt&6)===0?(Mo(0),!1):!0}function Lf(){if(gt!==null){if(Ft===0)var t=gt.return;else t=gt,ki=cr=null,Yc(t),Zr=null,io=0,t=gt;for(;t!==null;)c0(t.alternate,t),t=t.return;gt=null}}function rs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,TS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,Lf(),Yt=t,gt=a=Gi(t.current,null),vt=n,Ft=0,Qn=null,La=!1,ns=Fe(t,n),Af=!1,is=Jn=Rf=vr=Na=tn=0,Hn=So=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-ke(o),f=1<<c;n|=t[c],o&=~f}return $i=n,dl(),a}function O0(t,n){ot=null,B.H=fo,n===jr||n===Sl?(n=Kp(),Ft=3):n===Pc?(n=Kp(),Ft=4):Ft=n===cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&(tn=1,Ol(t,ri(n,t.current)))}function P0(){var t=Zn.current;return t===null?!0:(vt&4194048)===vt?ui===null:(vt&62914560)===vt||(vt&536870912)!==0?t===ui:!1}function z0(){var t=B.H;return B.H=fo,t===null?fo:t}function F0(){var t=B.A;return B.A=iS,t}function ql(){tn=4,La||(vt&4194048)!==vt&&Zn.current!==null||(ns=!0),(Na&134217727)===0&&(vr&134217727)===0||Yt===null||za(Yt,vt,Jn,!1)}function Nf(t,n,a){var o=Nt;Nt|=2;var c=z0(),f=F0();(Yt!==t||vt!==n)&&(Xl=null,rs(t,n)),n=!1;var v=tn;e:do try{if(Ft!==0&&gt!==null){var T=gt,F=Qn;switch(Ft){case 8:Lf(),v=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var Q=Ft;if(Ft=0,Qn=null,ss(t,T,F,Q),a&&ns){v=0;break e}break;default:Q=Ft,Ft=0,Qn=null,ss(t,T,F,Q)}}sS(),v=tn;break}catch(ce){O0(t,ce)}while(!0);return n&&t.shellSuspendCounter++,ki=cr=null,Nt=o,B.H=c,B.A=f,gt===null&&(Yt=null,vt=0,dl()),v}function sS(){for(;gt!==null;)B0(gt)}function oS(t,n){var a=Nt;Nt|=2;var o=z0(),c=F0();Yt!==t||vt!==n?(Xl=null,kl=b()+500,rs(t,n)):ns=Fe(t,n);e:do try{if(Ft!==0&&gt!==null){n=gt;var f=Qn;t:switch(Ft){case 1:Ft=0,Qn=null,ss(t,n,f,1);break;case 2:case 9:if(jp(f)){Ft=0,Qn=null,I0(n);break}n=function(){Ft!==2&&Ft!==9||Yt!==t||(Ft=7),wi(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:jp(f)?(Ft=0,Qn=null,I0(n)):(Ft=0,Qn=null,ss(t,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var T=gt;if(v?Ex(v):T.stateNode.complete){Ft=0,Qn=null;var F=T.sibling;if(F!==null)gt=F;else{var Q=T.return;Q!==null?(gt=Q,Yl(Q)):gt=null}break t}}Ft=0,Qn=null,ss(t,n,f,5);break;case 6:Ft=0,Qn=null,ss(t,n,f,6);break;case 8:Lf(),tn=6;break e;default:throw Error(r(462))}}lS();break}catch(ce){O0(t,ce)}while(!0);return ki=cr=null,B.H=o,B.A=c,Nt=a,gt!==null?0:(Yt=null,vt=0,dl(),tn)}function lS(){for(;gt!==null&&!rt();)B0(gt)}function B0(t){var n=l0(t.alternate,t,$i);t.memoizedProps=t.pendingProps,n===null?Yl(t):gt=n}function I0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=n0(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=n0(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Yc(n);default:c0(a,n),n=gt=Fp(n,$i),n=l0(a,n,$i)}t.memoizedProps=t.pendingProps,n===null?Yl(t):gt=n}function ss(t,n,a,o){ki=cr=null,Yc(n),Zr=null,io=0;var c=n.return;try{if(Kv(t,c,n,a,vt)){tn=1,Ol(t,ri(a,t.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;tn=1,Ol(t,ri(a,t.current)),gt=null;return}n.flags&32768?(bt||o===1?t=!0:ns||(vt&536870912)!==0?t=!1:(La=t=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),H0(n,t)):Yl(n)}function Yl(t){var n=t;do{if((n.flags&32768)!==0){H0(n,La);return}t=n.return;var a=$v(n.alternate,n,$i);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);tn===0&&(tn=5)}function H0(t,n){do{var a=eS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);tn=6,gt=null}function G0(t,n,a,o,c,f,v,T,F){t.cancelPendingCommit=null;do jl();while(xn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Sc,Wn(t,a,f,v,T,F),t===Yt&&(gt=Yt=null,vt=0),as=n,Pa=t,ea=a,wf=f,Df=c,D0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dS(oe,function(){return q0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=j.p,j.p=2,v=Nt,Nt|=4;try{tS(t,n,a)}finally{Nt=v,j.p=c,B.T=o}}xn=1,V0(),k0(),X0()}}function V0(){if(xn===1){xn=0;var t=Pa,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=j.p;j.p=2;var c=Nt;Nt|=4;try{M0(n,t);var f=Wf,v=Cp(t.containerInfo),T=f.focusedElem,F=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Rp(T.ownerDocument.documentElement,T)){if(F!==null&&mc(T)){var Q=F.start,ce=F.end;if(ce===void 0&&(ce=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ce,T.value.length);else{var pe=T.ownerDocument||document,ee=pe&&pe.defaultView||window;if(ee.getSelection){var se=ee.getSelection(),He=T.textContent.length,tt=Math.min(F.start,He),Vt=F.end===void 0?tt:Math.min(F.end,He);!se.extend&&tt>Vt&&(v=Vt,Vt=tt,tt=v);var W=Ap(T,tt),G=Ap(T,Vt);if(W&&G&&(se.rangeCount!==1||se.anchorNode!==W.node||se.anchorOffset!==W.offset||se.focusNode!==G.node||se.focusOffset!==G.offset)){var Z=pe.createRange();Z.setStart(W.node,W.offset),se.removeAllRanges(),tt>Vt?(se.addRange(Z),se.extend(G.node,G.offset)):(Z.setEnd(G.node,G.offset),se.addRange(Z))}}}}for(pe=[],se=T;se=se.parentNode;)se.nodeType===1&&pe.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pe.length;T++){var de=pe[T];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}su=!!Xf,Wf=Xf=null}finally{Nt=c,j.p=o,B.T=a}}t.current=n,xn=2}}function k0(){if(xn===2){xn=0;var t=Pa,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=j.p;j.p=2;var c=Nt;Nt|=4;try{g0(t,n.alternate,n)}finally{Nt=c,j.p=o,B.T=a}}xn=3}}function X0(){if(xn===4||xn===3){xn=0,L();var t=Pa,n=as,a=ea,o=D0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,as=Pa=null,W0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Oa=null),nr(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(ye,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=j.p,j.p=2,B.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var T=o[v];f(T.value,{componentStack:T.stack})}}finally{B.T=n,j.p=c}}(ea&3)!==0&&jl(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Uf?yo++:(yo=0,Uf=t):yo=0,Mo(0)}}function W0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function jl(){return V0(),k0(),X0(),q0()}function q0(){if(xn!==5)return!1;var t=Pa,n=wf;wf=0;var a=nr(ea),o=B.T,c=j.p;try{j.p=32>a?32:a,B.T=null,a=Df,Df=null;var f=Pa,v=ea;if(xn=0,as=Pa=null,ea=0,(Nt&6)!==0)throw Error(r(331));var T=Nt;if(Nt|=4,R0(f.current),E0(f,f.current,v,a),Nt=T,Mo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(ye,f)}catch{}return!0}finally{j.p=c,B.T=o,W0(t,n)}}function Y0(t,n,a){n=ri(a,n),n=uf(t.stateNode,n,2),t=Ca(t,n,2),t!==null&&(wn(t,2),wi(t))}function Bt(t,n,a){if(t.tag===3)Y0(t,t,a);else for(;n!==null;){if(n.tag===3){Y0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){t=ri(a,t),a=jm(2),o=Ca(n,a,2),o!==null&&(Zm(a,o,n,t),wn(o,2),wi(o));break}}n=n.return}}function Of(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new aS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Af=!0,c.add(a),t=uS.bind(null,t,n,a),n.then(t,t))}function uS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(vt&a)===a&&(tn===4||tn===3&&(vt&62914560)===vt&&300>b()-Vl?(Nt&2)===0&&rs(t,0):Rf|=a,is===vt&&(is=0)),wi(t)}function j0(t,n){n===0&&(n=It()),t=or(t,n),t!==null&&(wn(t,n),wi(t))}function cS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),j0(t,a)}function fS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),j0(t,a)}function dS(t,n){return Wt(t,n)}var Zl=null,os=null,Pf=!1,Kl=!1,zf=!1,Fa=0;function wi(t){t!==os&&t.next===null&&(os===null?Zl=os=t:os=os.next=t),Kl=!0,Pf||(Pf=!0,pS())}function Mo(t,n){if(!zf&&Kl){zf=!0;do for(var a=!1,o=Zl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var v=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-ke(42|t)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,J0(o,f))}else f=vt,f=xe(o,o===Yt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Fe(o,f)||(a=!0,J0(o,f));o=o.next}while(a);zf=!1}}function hS(){Z0()}function Z0(){Kl=Pf=!1;var t=0;Fa!==0&&ES()&&(t=Fa);for(var n=b(),a=null,o=Zl;o!==null;){var c=o.next,f=K0(o,n);f===0?(o.next=null,a===null?Zl=c:a.next=c,c===null&&(os=a)):(a=o,(t!==0||(f&3)!==0)&&(Kl=!0)),o=c}xn!==0&&xn!==5||Mo(t),Fa!==0&&(Fa=0)}function K0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-ke(f),T=1<<v,F=c[v];F===-1?((T&a)===0||(T&o)!==0)&&(c[v]=at(T,n)):F<=n&&(t.expiredLanes|=T),f&=~T}if(n=Yt,a=vt,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ze(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ze(o),nr(a)){case 2:case 8:a=Se;break;case 32:a=oe;break;case 268435456:a=Le;break;default:a=oe}return o=Q0.bind(null,t),a=Wt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ze(o),t.callbackPriority=2,t.callbackNode=null,2}function Q0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jl()&&t.callbackNode!==a)return null;var o=vt;return o=xe(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(L0(t,o,n),K0(t,b()),t.callbackNode!=null&&t.callbackNode===a?Q0.bind(null,t):null)}function J0(t,n){if(jl())return null;L0(t,n,!0)}function pS(){AS(function(){(Nt&6)!==0?Wt(he,hS):Z0()})}function Ff(){if(Fa===0){var t=qr;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Fa=t}return Fa}function $0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:al(""+t)}function ex(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function mS(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=$0((c[pn]||null).action),v=o.submitter;v&&(n=(n=v[pn]||null)?$0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new ll("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fa!==0){var F=v?ex(c,v):new FormData(c);nf(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(T.preventDefault(),F=v?ex(c,v):new FormData(c),nf(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Bf=0;Bf<vc.length;Bf++){var If=vc[Bf],xS=If.toLowerCase(),gS=If[0].toUpperCase()+If.slice(1);xi(xS,"on"+gS)}xi(Up,"onAnimationEnd"),xi(Lp,"onAnimationIteration"),xi(Np,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Nv,"onTransitionRun"),xi(Ov,"onTransitionStart"),xi(Pv,"onTransitionCancel"),xi(Op,"onTransitionEnd"),ze("onMouseEnter",["mouseout","mouseover"]),ze("onMouseLeave",["mouseout","mouseover"]),ze("onPointerEnter",["pointerout","pointerover"]),ze("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function tx(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var T=o[v],F=T.instance,Q=T.currentTarget;if(T=T.listener,F!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=Q;try{f(c)}catch(ce){fl(ce)}c.currentTarget=null,f=F}else for(v=0;v<o.length;v++){if(T=o[v],F=T.instance,Q=T.currentTarget,T=T.listener,F!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=Q;try{f(c)}catch(ce){fl(ce)}c.currentTarget=null,f=F}}}}function _t(t,n){var a=n[Or];a===void 0&&(a=n[Or]=new Set);var o=t+"__bubble";a.has(o)||(nx(n,t,2,!1),a.add(o))}function Hf(t,n,a){var o=0;n&&(o|=4),nx(a,t,o,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Gf(t){if(!t[Ql]){t[Ql]=!0,q.forEach(function(a){a!=="selectionchange"&&(_S.has(a)||Hf(a,!1,t),Hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Hf("selectionchange",!1,n))}}function nx(t,n,a,o){switch(Ux(n)){case 2:var c=qS;break;case 8:c=YS;break;default:c=nd}a=c.bind(null,n,a,t),c=void 0,!sc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Vf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=o.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=va(T),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){o=f=v;continue e}T=T.parentNode}}o=o.return}op(function(){var Q=f,ce=ac(a),pe=[];e:{var ee=Pp.get(t);if(ee!==void 0){var se=ll,He=t;switch(t){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":se=fv;break;case"focusin":He="focus",se=cc;break;case"focusout":He="blur",se=cc;break;case"beforeblur":case"afterblur":se=cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=pv;break;case Up:case Lp:case Np:se=nv;break;case Op:se=xv;break;case"scroll":case"scrollend":se=Q_;break;case"wheel":se=_v;break;case"copy":case"cut":case"paste":se=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=dp;break;case"toggle":case"beforetoggle":se=Sv}var tt=(n&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),W=tt?ee!==null?ee+"Capture":null:ee;tt=[];for(var G=Q,Z;G!==null;){var de=G;if(Z=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Z===null||W===null||(de=Xs(G,W),de!=null&&tt.push(Eo(G,de,Z))),Vt)break;G=G.return}0<tt.length&&(ee=new se(ee,He,null,a,ce),pe.push({event:ee,listeners:tt}))}}if((n&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",ee&&a!==ic&&(He=a.relatedTarget||a.fromElement)&&(va(He)||He[zi]))break e;if((se||ee)&&(ee=ce.window===ce?ce:(ee=ce.ownerDocument)?ee.defaultView||ee.parentWindow:window,se?(He=a.relatedTarget||a.toElement,se=Q,He=He?va(He):null,He!==null&&(Vt=u(He),tt=He.tag,He!==Vt||tt!==5&&tt!==27&&tt!==6)&&(He=null)):(se=null,He=Q),se!==He)){if(tt=cp,de="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(tt=dp,de="onPointerLeave",W="onPointerEnter",G="pointer"),Vt=se==null?ee:X(se),Z=He==null?ee:X(He),ee=new tt(de,G+"leave",se,a,ce),ee.target=Vt,ee.relatedTarget=Z,de=null,va(ce)===Q&&(tt=new tt(W,G+"enter",He,a,ce),tt.target=Z,tt.relatedTarget=Vt,de=tt),Vt=de,se&&He)t:{for(tt=vS,W=se,G=He,Z=0,de=W;de;de=tt(de))Z++;de=0;for(var Qe=G;Qe;Qe=tt(Qe))de++;for(;0<Z-de;)W=tt(W),Z--;for(;0<de-Z;)G=tt(G),de--;for(;Z--;){if(W===G||G!==null&&W===G.alternate){tt=W;break t}W=tt(W),G=tt(G)}tt=null}else tt=null;se!==null&&ix(pe,ee,se,tt,!1),He!==null&&Vt!==null&&ix(pe,Vt,He,tt,!0)}}e:{if(ee=Q?X(Q):window,se=ee.nodeName&&ee.nodeName.toLowerCase(),se==="select"||se==="input"&&ee.type==="file")var wt=Sp;else if(_p(ee))if(yp)wt=Dv;else{wt=Cv;var Xe=Rv}else se=ee.nodeName,!se||se.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?Q&&nc(Q.elementType)&&(wt=Sp):wt=wv;if(wt&&(wt=wt(t,Q))){vp(pe,wt,a,ce);break e}Xe&&Xe(t,ee,Q),t==="focusout"&&Q&&ee.type==="number"&&Q.memoizedProps.value!=null&&Sn(ee,"number",ee.value)}switch(Xe=Q?X(Q):window,t){case"focusin":(_p(Xe)||Xe.contentEditable==="true")&&(Br=Xe,xc=Q,Js=null);break;case"focusout":Js=xc=Br=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,wp(pe,a,ce);break;case"selectionchange":if(Lv)break;case"keydown":case"keyup":wp(pe,a,ce)}var ft;if(dc)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Fr?xp(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(hp&&a.locale!=="ko"&&(Fr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Fr&&(ft=lp()):(ya=ce,oc="value"in ya?ya.value:ya.textContent,Fr=!0)),Xe=Jl(Q,St),0<Xe.length&&(St=new fp(St,t,null,a,ce),pe.push({event:St,listeners:Xe}),ft?St.data=ft:(ft=gp(a),ft!==null&&(St.data=ft)))),(ft=Mv?bv(t,a):Ev(t,a))&&(St=Jl(Q,"onBeforeInput"),0<St.length&&(Xe=new fp("onBeforeInput","beforeinput",null,a,ce),pe.push({event:Xe,listeners:St}),Xe.data=ft)),mS(pe,t,Q,a,ce)}tx(pe,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Jl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Xs(t,a),c!=null&&o.unshift(Eo(t,c,f)),c=Xs(t,n),c!=null&&o.push(Eo(t,c,f))),t.tag===3)return o;t=t.return}return[]}function vS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ix(t,n,a,o,c){for(var f=n._reactName,v=[];a!==null&&a!==o;){var T=a,F=T.alternate,Q=T.stateNode;if(T=T.tag,F!==null&&F===o)break;T!==5&&T!==26&&T!==27||Q===null||(F=Q,c?(Q=Xs(a,f),Q!=null&&v.unshift(Eo(a,Q,F))):c||(Q=Xs(a,f),Q!=null&&v.push(Eo(a,Q,F)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var SS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function ax(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(yS,"")}function rx(t,n){return n=ax(n),ax(t)===n}function Gt(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ti(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ti(t,""+o);break;case"className":Tt(t,"class",o);break;case"tabIndex":Tt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Tt(t,a,o);break;case"style":rp(t,o,f);break;case"data":if(n!=="object"){Tt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",c.name,c,null),Gt(t,n,"formEncType",c.formEncType,c,null),Gt(t,n,"formMethod",c.formMethod,c,null),Gt(t,n,"formTarget",c.formTarget,c,null)):(Gt(t,n,"encType",c.encType,c,null),Gt(t,n,"method",c.method,c,null),Gt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ii);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=al(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),ct(t,"popover",o);break;case"xlinkActuate":Ct(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ct(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Z_.get(a)||a,ct(t,a,o))}}function kf(t,n,a,o,c,f){switch(a){case"style":rp(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ti(t,o):(typeof o=="number"||typeof o=="bigint")&&Ti(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ae.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ct(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,f,v,a,null)}}c&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var T=f=v=c=null,F=null,Q=null;for(o in a)if(a.hasOwnProperty(o)){var ce=a[o];if(ce!=null)switch(o){case"name":c=ce;break;case"type":v=ce;break;case"checked":F=ce;break;case"defaultChecked":Q=ce;break;case"value":f=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:Gt(t,n,o,ce,a,null)}}Zt(t,f,T,F,Q,v,c,!1);return;case"select":_t("invalid",t),o=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:Gt(t,n,c,T,a,null)}n=f,a=v,t.multiple=!!o,n!=null?mn(t,!!o,n,!1):a!=null&&mn(t,!!o,a,!0);return;case"textarea":_t("invalid",t),f=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Gt(t,n,v,T,a,null)}En(t,o,c,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,F,o,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<bo.length;o++)_t(bo[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,Q,o,a,null)}return;default:if(nc(n)){for(ce in a)a.hasOwnProperty(ce)&&(o=a[ce],o!==void 0&&kf(t,n,ce,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Gt(t,n,T,o,a,null))}function MS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,F=null,Q=null,ce=null;for(se in a){var pe=a[se];if(a.hasOwnProperty(se)&&pe!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":F=pe;default:o.hasOwnProperty(se)||Gt(t,n,se,null,o,pe)}}for(var ee in o){var se=o[ee];if(pe=a[ee],o.hasOwnProperty(ee)&&(se!=null||pe!=null))switch(ee){case"type":f=se;break;case"name":c=se;break;case"checked":Q=se;break;case"defaultChecked":ce=se;break;case"value":v=se;break;case"defaultValue":T=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==pe&&Gt(t,n,ee,se,o,pe)}}Fi(t,v,T,F,Q,ce,f,c);return;case"select":se=v=T=ee=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":se=F;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,F)}for(c in o)if(f=o[c],F=a[c],o.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":ee=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==F&&Gt(t,n,c,f,o,F)}n=T,a=v,o=se,ee!=null?mn(t,!!a,ee,!1):!!o!=!!a&&(n!=null?mn(t,!!a,n,!0):mn(t,!!a,a?[]:"",!1));return;case"textarea":se=ee=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Gt(t,n,T,null,o,c)}for(v in o)if(c=o[v],f=a[v],o.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":ee=c;break;case"defaultValue":se=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Gt(t,n,v,c,o,f)}yn(t,ee,se);return;case"option":for(var He in a)if(ee=a[He],a.hasOwnProperty(He)&&ee!=null&&!o.hasOwnProperty(He))switch(He){case"selected":t.selected=!1;break;default:Gt(t,n,He,null,o,ee)}for(F in o)if(ee=o[F],se=a[F],o.hasOwnProperty(F)&&ee!==se&&(ee!=null||se!=null))switch(F){case"selected":t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:Gt(t,n,F,ee,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ee=a[tt],a.hasOwnProperty(tt)&&ee!=null&&!o.hasOwnProperty(tt)&&Gt(t,n,tt,null,o,ee);for(Q in o)if(ee=o[Q],se=a[Q],o.hasOwnProperty(Q)&&ee!==se&&(ee!=null||se!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(r(137,n));break;default:Gt(t,n,Q,ee,o,se)}return;default:if(nc(n)){for(var Vt in a)ee=a[Vt],a.hasOwnProperty(Vt)&&ee!==void 0&&!o.hasOwnProperty(Vt)&&kf(t,n,Vt,void 0,o,ee);for(ce in o)ee=o[ce],se=a[ce],!o.hasOwnProperty(ce)||ee===se||ee===void 0&&se===void 0||kf(t,n,ce,ee,o,se);return}}for(var W in a)ee=a[W],a.hasOwnProperty(W)&&ee!=null&&!o.hasOwnProperty(W)&&Gt(t,n,W,null,o,ee);for(pe in o)ee=o[pe],se=a[pe],!o.hasOwnProperty(pe)||ee===se||ee==null&&se==null||Gt(t,n,pe,ee,o,se)}function sx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&sx(v)){for(v=0,T=c.responseEnd,o+=1;o<a.length;o++){var F=a[o],Q=F.startTime;if(Q>T)break;var ce=F.transferSize,pe=F.initiatorType;ce&&sx(pe)&&(F=F.responseEnd,v+=ce*(F<T?1:(T-Q)/(F-Q)))}if(--o,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xf=null,Wf=null;function $l(t){return t.nodeType===9?t:t.ownerDocument}function ox(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function ES(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var ux=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,cx=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof cx<"u"?function(t){return cx.resolve(null).then(t).catch(RS)}:ux;function RS(t){setTimeout(function(){throw t})}function Ba(t){return t==="head"}function fx(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),fs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")To(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[ir]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&To(t.ownerDocument.body);a=c}while(a);fs(n)}function dx(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function CS(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ir])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function wS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function hx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Zf(t){return t.data==="$?"||t.data==="$~"}function Kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function DS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Qf=null;function px(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function mx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function xx(t,n,a){switch(n=$l(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ks(t)}var fi=new Map,gx=new Set;function eu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ta=j.d;j.d={f:US,r:LS,D:NS,C:OS,L:PS,m:zS,X:BS,S:FS,M:IS};function US(){var t=ta.f(),n=Wl();return t||n}function LS(t){var n=A(t);n!==null&&n.tag===5&&n.type==="form"?Om(n):ta.r(t)}var ls=typeof document>"u"?null:document;function _x(t,n,a){var o=ls;if(o&&typeof n=="string"&&n){var c=jt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),gx.has(c)||(gx.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Cn(n,"link",t),J(n),o.head.appendChild(n)))}}function NS(t){ta.D(t),_x("dns-prefetch",t,null)}function OS(t,n){ta.C(t,n),_x("preconnect",t,n)}function PS(t,n,a){ta.L(t,n,a);var o=ls;if(o&&t&&n){var c='link[rel="preload"][as="'+jt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+jt(a.imageSizes)+'"]')):c+='[href="'+jt(t)+'"]';var f=c;switch(n){case"style":f=us(t);break;case"script":f=cs(t)}fi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ao(f))||n==="script"&&o.querySelector(Ro(f))||(n=o.createElement("link"),Cn(n,"link",t),J(n),o.head.appendChild(n)))}}function zS(t,n){ta.m(t,n);var a=ls;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+jt(o)+'"][href="'+jt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cs(t)}if(!fi.has(f)&&(t=x({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}o=a.createElement("link"),Cn(o,"link",t),J(o),a.head.appendChild(o)}}}function FS(t,n,a){ta.S(t,n,a);var o=ls;if(o&&t){var c=ie(o).hoistableStyles,f=us(t);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(Ao(f)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Jf(t,a);var F=v=o.createElement("link");J(F),Cn(F,"link",t),F._p=new Promise(function(Q,ce){F.onload=Q,F.onerror=ce}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,tu(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function BS(t,n){ta.X(t,n);var a=ls;if(a&&t){var o=ie(a).hoistableScripts,c=cs(t),f=o.get(c);f||(f=a.querySelector(Ro(c)),f||(t=x({src:t,async:!0},n),(n=fi.get(c))&&$f(t,n),f=a.createElement("script"),J(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function IS(t,n){ta.M(t,n);var a=ls;if(a&&t){var o=ie(a).hoistableScripts,c=cs(t),f=o.get(c);f||(f=a.querySelector(Ro(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&$f(t,n),f=a.createElement("script"),J(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function vx(t,n,a,o){var c=(c=ne.current)?eu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=ie(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var f=ie(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(Ao(t)))&&!f._p&&(v.instance=f,v.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||HS(c,t,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=ie(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function us(t){return'href="'+jt(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function Sx(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function HS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),J(n),t.head.appendChild(n))}function cs(t){return'[src="'+jt(t)+'"]'}function Ro(t){return"script[async]"+t}function yx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+jt(a.href)+'"]');if(o)return n.instance=o,J(o),o;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),J(o),Cn(o,"style",c),tu(o,a.precedence,t),n.instance=o;case"stylesheet":c=us(a.href);var f=t.querySelector(Ao(c));if(f)return n.state.loading|=4,n.instance=f,J(f),f;o=Sx(a),(c=fi.get(c))&&Jf(o,c),f=(t.ownerDocument||t).createElement("link"),J(f);var v=f;return v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),Cn(f,"link",o),n.state.loading|=4,tu(f,a.precedence,t),n.instance=f;case"script":return f=cs(a.src),(c=t.querySelector(Ro(f)))?(n.instance=c,J(c),c):(o=a,(c=fi.get(f))&&(o=x({},a),$f(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),J(c),Cn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tu(o,a.precedence,t));return n.instance}function tu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nu=null;function Mx(t,n,a){if(nu===null){var o=new Map,c=nu=new Map;c.set(a,o)}else c=nu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ir]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=o.get(v);T?T.push(f):o.set(v,[f])}}return o}function bx(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function GS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ex(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function VS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(o.href),f=n.querySelector(Ao(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=iu.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,J(f);return}f=n.ownerDocument||n,o=Sx(o),(c=fi.get(c))&&Jf(o,c),f=f.createElement("link"),J(f);var v=f;v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=iu.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ed=0;function kS(t,n){return t.stylesheets&&t.count===0&&ru(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&ru(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ed===0&&(ed=62500*bS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ru(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ed?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ru(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var au=null;function ru(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,au=new Map,n.forEach(XS,t),au=null,iu.call(t))}function XS(t,n){if(!(n.state.loading&4)){var a=au.get(t);if(a)var o=a.get(null);else{a=new Map,au.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,c),a.set(v,c),this.count++,o=iu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function WS(t,n,a,o,c,f,v,T,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Tx(t,n,a,o,c,f,v,T,F,Q,ce,pe){return t=new WS(t,n,a,v,F,Q,ce,pe,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Lc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},zc(f),t}function Ax(t){return t?(t=Gr,t):Gr}function Rx(t,n,a,o,c,f){c=Ax(c),o.context===null?o.context=c:o.pendingContext=c,o=Ra(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ca(t,o,n),a!==null&&(Gn(a,t,n),ro(a,t,n))}function Cx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function td(t,n){Cx(t,n),(t=t.alternate)&&Cx(t,n)}function wx(t){if(t.tag===13||t.tag===31){var n=or(t,67108864);n!==null&&Gn(n,t,67108864),td(t,67108864)}}function Dx(t){if(t.tag===13||t.tag===31){var n=$n();n=mi(n);var a=or(t,n);a!==null&&Gn(a,t,n),td(t,n)}}var su=!0;function qS(t,n,a,o){var c=B.T;B.T=null;var f=j.p;try{j.p=2,nd(t,n,a,o)}finally{j.p=f,B.T=c}}function YS(t,n,a,o){var c=B.T;B.T=null;var f=j.p;try{j.p=8,nd(t,n,a,o)}finally{j.p=f,B.T=c}}function nd(t,n,a,o){if(su){var c=id(o);if(c===null)Vf(t,n,o,ou,a),Lx(t,o);else if(ZS(c,t,n,a,o))o.stopPropagation();else if(Lx(t,o),n&4&&-1<jS.indexOf(t)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=be(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var F=1<<31-ke(v);T.entanglements[1]|=F,v&=~F}wi(f),(Nt&6)===0&&(kl=b()+500,Mo(0))}}break;case 31:case 13:T=or(f,2),T!==null&&Gn(T,f,2),Wl(),td(f,2)}if(f=id(o),f===null&&Vf(t,n,o,ou,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Vf(t,n,o,null,a)}}function id(t){return t=ac(t),ad(t)}var ou=null;function ad(t){if(ou=null,t=va(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ou=t,null}function Ux(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case he:return 2;case Se:return 8;case oe:case Ye:return 32;case Le:return 268435456;default:return 32}default:return 32}}var rd=!1,Ia=null,Ha=null,Ga=null,wo=new Map,Do=new Map,Va=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lx(t,n){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&wx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function ZS(t,n,a,o,c){switch(n){case"focusin":return Ia=Uo(Ia,t,n,a,o,c),!0;case"dragenter":return Ha=Uo(Ha,t,n,a,o,c),!0;case"mouseover":return Ga=Uo(Ga,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return wo.set(f,Uo(wo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Do.set(f,Uo(Do.get(f)||null,t,n,a,o,c)),!0}return!1}function Nx(t){var n=va(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){Dx(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){Dx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=id(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);ic=o,a.target.dispatchEvent(o),ic=null}else return n=A(a),n!==null&&wx(n),t.blockedOn=a,!1;n.shift()}return!0}function Ox(t,n,a){lu(t)&&a.delete(n)}function KS(){rd=!1,Ia!==null&&lu(Ia)&&(Ia=null),Ha!==null&&lu(Ha)&&(Ha=null),Ga!==null&&lu(Ga)&&(Ga=null),wo.forEach(Ox),Do.forEach(Ox)}function uu(t,n){t.blockedOn===n&&(t.blockedOn=null,rd||(rd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,KS)))}var cu=null;function Px(t){cu!==t&&(cu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cu===t&&(cu=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(ad(o||a)===null)continue;break}var f=A(a);f!==null&&(t.splice(n,3),n-=3,nf(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function fs(t){function n(F){return uu(F,t)}Ia!==null&&uu(Ia,t),Ha!==null&&uu(Ha,t),Ga!==null&&uu(Ga,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<Va.length;a++){var o=Va[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)Nx(a),a.blockedOn===null&&Va.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],v=c[pn]||null;if(typeof f=="function")v||Px(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[pn]||null)T=v.formAction;else if(ad(c)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Px(a)}}}function zx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function sd(t){this._internalRoot=t}fu.prototype.render=sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();Rx(a,o,t,n,null,null)},fu.prototype.unmount=sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Rx(t.current,2,null,t,null,null),Wl(),n[zi]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Gs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,t),a===0&&Nx(t)}};var Fx=e.version;if(Fx!=="19.2.0")throw Error(r(527,Fx,"19.2.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var QS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{ye=du.inject(QS),Ee=du}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Xm,f=Wm,v=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Tx(t,1,!1,null,null,a,o,null,c,f,v,zx),t[zi]=n.current,Gf(t),new sd(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Xm,v=Wm,T=qm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Tx(t,1,!0,n,a??null,o,c,F,f,v,T,zx),n.context=Ax(null),a=n.current,o=$n(),o=mi(o),c=Ra(o),c.callback=null,Ca(a,c,o),a=o,n.current.lanes=a,wn(n,a),wi(n),t[zi]=n.current,Gf(t),new fu(n)},No.version="19.2.0",No}var Yx;function oy(){if(Yx)return ud.exports;Yx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ud.exports=sy(),ud.exports}var ly=oy();const uy=e_(ly);var jx="popstate";function cy(s={}){function e(r,l){let{pathname:u,search:d,hash:h}=r.location;return Yd("",{pathname:u,search:d,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:ko(l)}return dy(e,i,null,s)}function $t(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ei(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fy(){return Math.random().toString(36).substring(2,10)}function Zx(s,e){return{usr:s.state,key:s.key,idx:e}}function Yd(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ns(e):e,state:i,key:e&&e.key||r||fy()}}function ko({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ns(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function dy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,d=l.history,h="POP",m=null,p=g();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function g(){return(d.state||{idx:null}).idx}function x(){h="POP";let y=g(),_=y==null?null:y-p;p=y,m&&m({action:h,location:R.location,delta:_})}function S(y,_){h="PUSH";let U=Yd(R.location,y,_);p=g()+1;let D=Zx(U,p),z=R.createHref(U);try{d.pushState(D,"",z)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;l.location.assign(z)}u&&m&&m({action:h,location:R.location,delta:1})}function M(y,_){h="REPLACE";let U=Yd(R.location,y,_);p=g();let D=Zx(U,p),z=R.createHref(U);d.replaceState(D,"",z),u&&m&&m({action:h,location:R.location,delta:0})}function E(y){return hy(y)}let R={get action(){return h},get location(){return s(l,d)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(jx,x),m=y,()=>{l.removeEventListener(jx,x),m=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:S,replace:M,go(y){return d.go(y)}};return R}function hy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:ko(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function t_(s,e,i="/"){return py(s,e,i,!1)}function py(s,e,i,r){let l=typeof e=="string"?Ns(e):e,u=ma(l.pathname||"/",i);if(u==null)return null;let d=n_(s);my(d);let h=null;for(let m=0;h==null&&m<d.length;++m){let p=Ay(u);h=Ey(d[m],p,r)}return h}function n_(s,e=[],i=[],r="",l=!1){let u=(d,h,m=l,p)=>{let g={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;$t(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let x=da([r,g.relativePath]),S=i.concat(g);d.children&&d.children.length>0&&($t(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),n_(d.children,e,S,x,m)),!(d.path==null&&!d.index)&&e.push({path:x,score:My(x,d.index),routesMeta:S})};return s.forEach((d,h)=>{if(d.path===""||!d.path?.includes("?"))u(d,h);else for(let m of i_(d.path))u(d,h,!0,m)}),e}function i_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let d=i_(r.join("/")),h=[];return h.push(...d.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...d),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function my(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:by(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var xy=/^:[\w-]+$/,gy=3,_y=2,vy=1,Sy=10,yy=-2,Kx=s=>s==="*";function My(s,e){let i=s.split("/"),r=i.length;return i.some(Kx)&&(r+=yy),e&&(r+=_y),i.filter(l=>!Kx(l)).reduce((l,u)=>l+(xy.test(u)?gy:u===""?vy:Sy),r)}function by(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Ey(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",d=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",x=Vu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),S=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Vu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),d.push({params:l,pathname:da([u,x.pathname]),pathnameBase:Uy(da([u,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(u=da([u,x.pathnameBase]))}return d}function Vu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Ty(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],d=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},S)=>{if(g==="*"){let E=h[S]||"";d=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[S];return x&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:d,pattern:s}}function Ty(s,e=!1,i=!0){Ei(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Ay(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ei(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ma(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cy=s=>Ry.test(s);function wy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ns(s):s,u;if(i)if(Cy(i))u=i;else{if(i.includes("//")){let d=i;i=i.replace(/\/\/+/g,"/"),Ei(!1,`Pathnames cannot have embedded double slashes - normalizing ${d} -> ${i}`)}i.startsWith("/")?u=Qx(i.substring(1),"/"):u=Qx(i,e)}else u=e;return{pathname:u,search:Ly(r),hash:Ny(l)}}function Qx(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function hd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Dy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function a_(s){let e=Dy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function r_(s,e,i,r=!1){let l;typeof s=="string"?l=Ns(s):(l={...s},$t(!l.pathname||!l.pathname.includes("?"),hd("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),hd("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),hd("#","search","hash",l)));let u=s===""||l.pathname==="",d=u?"/":l.pathname,h;if(d==null)h=i;else{let x=e.length-1;if(!r&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),x-=1;l.pathname=S.join("/")}h=x>=0?e[x]:"/"}let m=wy(l,h),p=d&&d!=="/"&&d.endsWith("/"),g=(u||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var da=s=>s.join("/").replace(/\/\/+/g,"/"),Uy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Ny=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Oy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var s_=["POST","PUT","PATCH","DELETE"];new Set(s_);var Py=["GET",...s_];new Set(Py);var Os=ge.createContext(null);Os.displayName="DataRouter";var ju=ge.createContext(null);ju.displayName="DataRouterState";ge.createContext(!1);var o_=ge.createContext({isTransitioning:!1});o_.displayName="ViewTransition";var zy=ge.createContext(new Map);zy.displayName="Fetchers";var Fy=ge.createContext(null);Fy.displayName="Await";var Pi=ge.createContext(null);Pi.displayName="Navigation";var Zo=ge.createContext(null);Zo.displayName="Location";var _a=ge.createContext({outlet:null,matches:[],isDataRoute:!1});_a.displayName="Route";var Hh=ge.createContext(null);Hh.displayName="RouteError";function By(s,{relative:e}={}){$t(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ge.useContext(Pi),{hash:l,pathname:u,search:d}=Qo(s,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:da([i,u])),r.createHref({pathname:h,search:d,hash:l})}function Ko(){return ge.useContext(Zo)!=null}function Nr(){return $t(Ko(),"useLocation() may be used only in the context of a <Router> component."),ge.useContext(Zo).location}var l_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function u_(s){ge.useContext(Pi).static||ge.useLayoutEffect(s)}function Iy(){let{isDataRoute:s}=ge.useContext(_a);return s?Jy():Hy()}function Hy(){$t(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let s=ge.useContext(Os),{basename:e,navigator:i}=ge.useContext(Pi),{matches:r}=ge.useContext(_a),{pathname:l}=Nr(),u=JSON.stringify(a_(r)),d=ge.useRef(!1);return u_(()=>{d.current=!0}),ge.useCallback((m,p={})=>{if(Ei(d.current,l_),!d.current)return;if(typeof m=="number"){i.go(m);return}let g=r_(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:da([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}ge.createContext(null);function Qo(s,{relative:e}={}){let{matches:i}=ge.useContext(_a),{pathname:r}=Nr(),l=JSON.stringify(a_(i));return ge.useMemo(()=>r_(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function Gy(s,e){return c_(s,e)}function c_(s,e,i,r,l){$t(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=ge.useContext(Pi),{matches:d}=ge.useContext(_a),h=d[d.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",x=h&&h.route;{let U=x&&x.path||"";f_(p,!x||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let S=Nr(),M;if(e){let U=typeof e=="string"?Ns(e):e;$t(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),M=U}else M=S;let E=M.pathname||"/",R=E;if(g!=="/"){let U=g.replace(/^\//,"").split("/");R="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let y=t_(s,{pathname:R});Ei(x||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ei(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=qy(y&&y.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:da([g,u.encodeLocation?u.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:da([g,u.encodeLocation?u.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),d,i,r,l);return e&&_?ge.createElement(Zo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function Vy(){let s=Qy(),e=Oy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=ge.createElement(ge.Fragment,null,ge.createElement("p",null,"💿 Hey developer 👋"),ge.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ge.createElement("code",{style:u},"ErrorBoundary")," or"," ",ge.createElement("code",{style:u},"errorElement")," prop on your route.")),ge.createElement(ge.Fragment,null,ge.createElement("h2",null,"Unexpected Application Error!"),ge.createElement("h3",{style:{fontStyle:"italic"}},e),i?ge.createElement("pre",{style:l},i):null,d)}var ky=ge.createElement(Vy,null),Xy=class extends ge.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?ge.createElement(_a.Provider,{value:this.props.routeContext},ge.createElement(Hh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Wy({routeContext:s,match:e,children:i}){let r=ge.useContext(Os);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ge.createElement(_a.Provider,{value:s},i)}function qy(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,d=i?.errors;if(d!=null){let g=u.findIndex(x=>x.route.id&&d?.[x.route.id]!==void 0);$t(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let h=!1,m=-1;if(i)for(let g=0;g<u.length;g++){let x=u[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=g),x.route.id){let{loaderData:S,errors:M}=i,E=x.route.loader&&!S.hasOwnProperty(x.route.id)&&(!M||M[x.route.id]===void 0);if(x.route.lazy||E){h=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let p=i&&r?(g,x)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},errorInfo:x})}:void 0;return u.reduceRight((g,x,S)=>{let M,E=!1,R=null,y=null;i&&(M=d&&x.route.id?d[x.route.id]:void 0,R=x.route.errorElement||ky,h&&(m<0&&S===0?(f_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):m===S&&(E=!0,y=x.route.hydrateFallbackElement||null)));let _=e.concat(u.slice(0,S+1)),U=()=>{let D;return M?D=R:E?D=y:x.route.Component?D=ge.createElement(x.route.Component,null):x.route.element?D=x.route.element:D=g,ge.createElement(Wy,{match:x,routeContext:{outlet:g,matches:_,isDataRoute:i!=null},children:D})};return i&&(x.route.ErrorBoundary||x.route.errorElement||S===0)?ge.createElement(Xy,{location:i.location,revalidation:i.revalidation,component:R,error:M,children:U(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):U()},null)}function Gh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yy(s){let e=ge.useContext(Os);return $t(e,Gh(s)),e}function jy(s){let e=ge.useContext(ju);return $t(e,Gh(s)),e}function Zy(s){let e=ge.useContext(_a);return $t(e,Gh(s)),e}function Vh(s){let e=Zy(s),i=e.matches[e.matches.length-1];return $t(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Ky(){return Vh("useRouteId")}function Qy(){let s=ge.useContext(Hh),e=jy("useRouteError"),i=Vh("useRouteError");return s!==void 0?s:e.errors?.[i]}function Jy(){let{router:s}=Yy("useNavigate"),e=Vh("useNavigate"),i=ge.useRef(!1);return u_(()=>{i.current=!0}),ge.useCallback(async(l,u={})=>{Ei(i.current,l_),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var Jx={};function f_(s,e,i){!e&&!Jx[s]&&(Jx[s]=!0,Ei(!1,i))}ge.memo($y);function $y({routes:s,future:e,state:i,unstable_onError:r}){return c_(s,void 0,i,r,e)}function jd(s){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){$t(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),h=ge.useMemo(()=>({basename:d,navigator:l,static:u,future:{}}),[d,l,u]);typeof i=="string"&&(i=Ns(i));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:S="default"}=i,M=ge.useMemo(()=>{let E=ma(m,d);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:S},navigationType:r}},[d,m,p,g,x,S,r]);return Ei(M!=null,`<Router basename="${d}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:ge.createElement(Pi.Provider,{value:h},ge.createElement(Zo.Provider,{children:e,value:M}))}function tM({children:s,location:e}){return Gy(Zd(s),e)}function Zd(s,e=[]){let i=[];return ge.Children.forEach(s,(r,l)=>{if(!ge.isValidElement(r))return;let u=[...e,l];if(r.type===ge.Fragment){i.push.apply(i,Zd(r.props.children,u));return}$t(r.type===jd,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Zd(r.props.children,u)),i.push(d)}),i}var Pu="get",zu="application/x-www-form-urlencoded";function Zu(s){return s!=null&&typeof s.tagName=="string"}function nM(s){return Zu(s)&&s.tagName.toLowerCase()==="button"}function iM(s){return Zu(s)&&s.tagName.toLowerCase()==="form"}function aM(s){return Zu(s)&&s.tagName.toLowerCase()==="input"}function rM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function sM(s,e){return s.button===0&&(!e||e==="_self")&&!rM(s)}var hu=null;function oM(){if(hu===null)try{new FormData(document.createElement("form"),0),hu=!1}catch{hu=!0}return hu}var lM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pd(s){return s!=null&&!lM.has(s)?(Ei(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zu}"`),null):s}function uM(s,e){let i,r,l,u,d;if(iM(s)){let h=s.getAttribute("action");r=h?ma(h,e):null,i=s.getAttribute("method")||Pu,l=pd(s.getAttribute("enctype"))||zu,u=new FormData(s)}else if(nM(s)||aM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?ma(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Pu,l=pd(s.getAttribute("formenctype"))||pd(h.getAttribute("enctype"))||zu,u=new FormData(h,s),!oM()){let{name:p,type:g,value:x}=s;if(g==="image"){let S=p?`${p}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else p&&u.append(p,x)}}else{if(Zu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Pu,r=null,l=zu,d=s}return u&&l==="text/plain"&&(d=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function cM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&ma(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function fM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function hM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let d=await fM(u,i);return d.links?d.links():[]}return[]}));return gM(r.flat(1).filter(dM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function $x(s,e,i,r,l,u){let d=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>d(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(d(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function pM(s,e,{includeHydrateFallback:i}={}){return mM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function mM(s){return[...new Set(s)]}function xM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function gM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(xM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function d_(){let s=ge.useContext(Os);return kh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function _M(){let s=ge.useContext(ju);return kh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Xh=ge.createContext(void 0);Xh.displayName="FrameworkContext";function h_(){let s=ge.useContext(Xh);return kh(s,"You must render this element inside a <HydratedRouter> element"),s}function vM(s,e){let i=ge.useContext(Xh),[r,l]=ge.useState(!1),[u,d]=ge.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,S=ge.useRef(null);ge.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let R=_=>{_.forEach(U=>{d(U.isIntersecting)})},y=new IntersectionObserver(R,{threshold:.5});return S.current&&y.observe(S.current),()=>{y.disconnect()}}},[s]),ge.useEffect(()=>{if(r){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),d(!1)};return i?s!=="intent"?[u,S,{}]:[u,S,{onFocus:Oo(h,M),onBlur:Oo(m,E),onMouseEnter:Oo(p,M),onMouseLeave:Oo(g,E),onTouchStart:Oo(x,M)}]:[!1,S,{}]}function Oo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function SM({page:s,...e}){let{router:i}=d_(),r=ge.useMemo(()=>t_(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ge.createElement(MM,{page:s,matches:r,...e}):null}function yM(s){let{manifest:e,routeModules:i}=h_(),[r,l]=ge.useState([]);return ge.useEffect(()=>{let u=!1;return hM(s,e,i).then(d=>{u||l(d)}),()=>{u=!0}},[s,e,i]),r}function MM({page:s,matches:e,...i}){let r=Nr(),{manifest:l,routeModules:u}=h_(),{basename:d}=d_(),{loaderData:h,matches:m}=_M(),p=ge.useMemo(()=>$x(s,e,m,l,r,"data"),[s,e,m,l,r]),g=ge.useMemo(()=>$x(s,e,m,l,r,"assets"),[s,e,m,l,r]),x=ge.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,R=!1;if(e.forEach(_=>{let U=l.routes[_.route.id];!U||!U.hasLoader||(!p.some(D=>D.route.id===_.route.id)&&_.route.id in h&&u[_.route.id]?.shouldRevalidate||U.hasClientLoader?R=!0:E.add(_.route.id))}),E.size===0)return[];let y=cM(s,d,"data");return R&&E.size>0&&y.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[d,h,r,l,p,e,s,u]),S=ge.useMemo(()=>pM(g,l),[g,l]),M=yM(g);return ge.createElement(ge.Fragment,null,x.map(E=>ge.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),S.map(E=>ge.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:R})=>ge.createElement("link",{key:E,nonce:i.nonce,...R})))}function bM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var p_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{p_&&(window.__reactRouterVersion="7.9.6")}catch{}function m_({basename:s,children:e,window:i}){let r=ge.useRef();r.current==null&&(r.current=cy({window:i,v5Compat:!0}));let l=r.current,[u,d]=ge.useState({action:l.action,location:l.location}),h=ge.useCallback(m=>{ge.startTransition(()=>d(m))},[d]);return ge.useLayoutEffect(()=>l.listen(h),[l,h]),ge.createElement(eM,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var x_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wh=ge.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:d,state:h,target:m,to:p,preventScrollReset:g,viewTransition:x,...S},M){let{basename:E}=ge.useContext(Pi),R=typeof p=="string"&&x_.test(p),y,_=!1;if(typeof p=="string"&&R&&(y=p,p_))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),k=ma(C.pathname,E);C.origin===w.origin&&k!=null?p=k+C.search+C.hash:_=!0}catch{Ei(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=By(p,{relative:l}),[D,z,V]=vM(r,S),N=RM(p,{replace:d,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:x});function P(w){e&&e(w),w.defaultPrevented||N(w)}let $=ge.createElement("a",{...S,...V,href:y||U,onClick:_||u?e:P,ref:bM(M,z),target:m,"data-discover":!R&&i==="render"?"true":void 0});return D&&!R?ge.createElement(ge.Fragment,null,$,ge.createElement(SM,{page:U})):$});Wh.displayName="Link";var EM=ge.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:d,viewTransition:h,children:m,...p},g){let x=Qo(d,{relative:p.relative}),S=Nr(),M=ge.useContext(ju),{navigator:E,basename:R}=ge.useContext(Pi),y=M!=null&&LM(x)&&h===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,U=S.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(U=U.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&R&&(D=ma(D,R)||D);const z=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=U===_||!l&&U.startsWith(_)&&U.charAt(z)==="/",N=D!=null&&(D===_||!l&&D.startsWith(_)&&D.charAt(_.length)==="/"),P={isActive:V,isPending:N,isTransitioning:y},$=V?e:void 0,w;typeof r=="function"?w=r(P):w=[r,V?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(P):u;return ge.createElement(Wh,{...p,"aria-current":$,className:w,ref:g,style:C,to:d,viewTransition:h},typeof m=="function"?m(P):m)});EM.displayName="NavLink";var TM=ge.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:d=Pu,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...S},M)=>{let E=DM(),R=UM(h,{relative:p}),y=d.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&x_.test(h),U=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let z=D.nativeEvent.submitter,V=z?.getAttribute("formmethod")||d;E(z||D.currentTarget,{fetcherKey:e,method:V,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:x})};return ge.createElement("form",{ref:M,method:y,action:R,onSubmit:r?m:U,...S,"data-discover":!_&&s==="render"?"true":void 0})});TM.displayName="Form";function AM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g_(s){let e=ge.useContext(Os);return $t(e,AM(s)),e}function RM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:d}={}){let h=Iy(),m=Nr(),p=Qo(s,{relative:u});return ge.useCallback(g=>{if(sM(g,e)){g.preventDefault();let x=i!==void 0?i:ko(m)===ko(p);h(s,{replace:x,state:r,preventScrollReset:l,relative:u,viewTransition:d})}},[m,h,p,i,r,e,s,l,u,d])}var CM=0,wM=()=>`__${String(++CM)}__`;function DM(){let{router:s}=g_("useSubmit"),{basename:e}=ge.useContext(Pi),i=Ky();return ge.useCallback(async(r,l={})=>{let{action:u,method:d,encType:h,formData:m,body:p}=uM(r,e);if(l.navigate===!1){let g=l.fetcherKey||wM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function UM(s,{relative:e}={}){let{basename:i}=ge.useContext(Pi),r=ge.useContext(_a);$t(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Qo(s||".",{relative:e})},d=Nr();if(s==null){u.search=d.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:da([i,u.pathname])),ko(u)}function LM(s,{relative:e}={}){let i=ge.useContext(o_);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=g_("useViewTransitionState"),l=Qo(s,{relative:e});if(!i.isTransitioning)return!1;let u=ma(i.currentLocation.pathname,r)||i.currentLocation.pathname,d=ma(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Vu(l.pathname,d)!=null||Vu(l.pathname,u)!=null}function NM(){return Ie.jsxs("nav",{children:[Ie.jsx("div",{className:"logo",children:"MyPortfolio"}),Ie.jsxs("div",{children:[Ie.jsx(Wh,{to:"/",children:"Home"}),Ie.jsx("a",{href:"#about",children:"About"}),Ie.jsx("a",{href:"#experience",children:"Experience"}),Ie.jsx("a",{href:"#projects",children:"Projects"}),Ie.jsx("a",{href:"#contact",children:"Contact"})]})]})}function OM(){return Ie.jsxs("section",{className:"hero",children:[Ie.jsxs("h1",{children:["Hi, I'm ",Ie.jsx("span",{className:"highlight",children:"Keshav Mistry"})," 👋"]}),Ie.jsx("p",{children:"3rd Year Computer Science Student at SP University"}),Ie.jsx("p",{children:"Full Stack Developer • React • Node.js • MERN"}),Ie.jsx("a",{href:"#projects",className:"btn",children:"View My Work"})]})}function PM(){return Ie.jsxs("section",{id:"about",className:"about",children:[Ie.jsx("h2",{children:"About Me"}),Ie.jsx("p",{children:"I'm a 3rd-year Computer Science student at SP University with a passion for building full-stack applications. I completed a full-stack internship and enjoy working with React, Node.js, MongoDB, and modern UI/UX design."})]})}function zM(){return Ie.jsxs("section",{id:"experience",className:"experience",children:[Ie.jsx("h2",{children:"Experience"}),Ie.jsxs("div",{className:"exp-card",children:[Ie.jsx("h3",{children:"Full Stack Developer Intern"}),Ie.jsx("p",{children:"Company Name — 2024"}),Ie.jsxs("p",{children:["Built responsive MERN applications",Ie.jsx("br",{}),"Integrated REST APIs & authentication",Ie.jsx("br",{}),"Worked with Git, Agile, and deployment"]})]})]})}function FM(){const s=[{name:"Project 1",desc:"Full-stack MERN app with authentication",link:"https://github.com/yourname/project1"},{name:"Portfolio 3D Website",desc:"React + Three.js portfolio",link:"https://github.com/yourname/portfolio"}];return Ie.jsxs("section",{id:"projects",className:"projects",children:[Ie.jsx("h2",{children:"Projects"}),Ie.jsx("div",{className:"project-grid",children:s.map(e=>Ie.jsxs("div",{className:"project-card",children:[Ie.jsx("h3",{children:e.name}),Ie.jsx("p",{children:e.desc}),Ie.jsx("a",{href:e.link,target:"_blank",children:"GitHub →"})]},e.name))})]})}const qh="181",BM=0,eg=1,IM=2,__=1,HM=2,la=3,er=0,kn=1,ua=2,ha=0,As=1,tg=2,ng=3,ig=4,GM=5,Rr=100,VM=101,kM=102,XM=103,WM=104,qM=200,YM=201,jM=202,ZM=203,Kd=204,Qd=205,KM=206,QM=207,JM=208,$M=209,eb=210,tb=211,nb=212,ib=213,ab=214,Jd=0,$d=1,eh=2,Cs=3,th=4,nh=5,ih=6,ah=7,v_=0,rb=1,sb=2,$a=0,ob=1,lb=2,ub=3,cb=4,fb=5,db=6,hb=7,S_=300,ws=301,Ds=302,rh=303,sh=304,Ku=306,oh=1e3,ca=1001,lh=1002,ii=1003,pb=1004,pu=1005,pi=1006,md=1007,wr=1008,Ni=1009,y_=1010,M_=1011,Xo=1012,Yh=1013,Ur=1014,fa=1015,Ps=1016,jh=1017,Zh=1018,Wo=1020,b_=35902,E_=35899,T_=1021,A_=1022,bi=1023,qo=1026,Yo=1027,R_=1028,Kh=1029,Qh=1030,Jh=1031,$h=1033,Fu=33776,Bu=33777,Iu=33778,Hu=33779,uh=35840,ch=35841,fh=35842,dh=35843,hh=36196,ph=37492,mh=37496,xh=37808,gh=37809,_h=37810,vh=37811,Sh=37812,yh=37813,Mh=37814,bh=37815,Eh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,wh=37821,Dh=36492,Uh=36494,Lh=36495,Nh=36283,Oh=36284,Ph=36285,zh=36286,mb=3200,xb=3201,C_=0,gb=1,Ka="",hi="srgb",Us="srgb-linear",ku="linear",kt="srgb",ds=7680,ag=519,_b=512,vb=513,Sb=514,w_=515,yb=516,Mb=517,bb=518,Eb=519,rg=35044,sg="300 es",Ui=2e3,Xu=2001;function D_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tb(){const s=Wu("canvas");return s.style.display="block",s}const og={};function lg(...s){const e="THREE."+s.shift();console.log(e,...s)}function lt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function on(...s){const e="THREE."+s.shift();console.error(e,...s)}function jo(...s){const e=s.join(" ");e in og||(og[e]=!0,lt(...s))}function Ab(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class zs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=Math.PI/180,Fh=180/Math.PI;function Jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Et(s,e,i){return Math.max(e,Math.min(i,s))}function Rb(s,e){return(s%e+e)%e}function gd(s,e,i){return(1-i)*s+i*e}function Po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,i=0){Lt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3],S=u[d+0],M=u[d+1],E=u[d+2],R=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(h>=1){e[i+0]=S,e[i+1]=M,e[i+2]=E,e[i+3]=R;return}if(x!==R||m!==S||p!==M||g!==E){let y=m*S+p*M+g*E+x*R;y<0&&(S=-S,M=-M,E=-E,R=-R,y=-y);let _=1-h;if(y<.9995){const U=Math.acos(y),D=Math.sin(U);_=Math.sin(_*U)/D,h=Math.sin(h*U)/D,m=m*_+S*h,p=p*_+M*h,g=g*_+E*h,x=x*_+R*h}else{m=m*_+S*h,p=p*_+M*h,g=g*_+E*h,x=x*_+R*h;const U=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=U,p*=U,g*=U,x*=U}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[d],S=u[d+1],M=u[d+2],E=u[d+3];return e[i]=h*E+g*x+m*M-p*S,e[i+1]=m*E+g*S+p*x-h*M,e[i+2]=p*E+g*M+h*S-m*x,e[i+3]=g*E-h*x-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),x=h(u/2),S=m(r/2),M=m(l/2),E=m(u/2);switch(d){case"XYZ":this._x=S*g*x+p*M*E,this._y=p*M*x-S*g*E,this._z=p*g*E+S*M*x,this._w=p*g*x-S*M*E;break;case"YXZ":this._x=S*g*x+p*M*E,this._y=p*M*x-S*g*E,this._z=p*g*E-S*M*x,this._w=p*g*x+S*M*E;break;case"ZXY":this._x=S*g*x-p*M*E,this._y=p*M*x+S*g*E,this._z=p*g*E+S*M*x,this._w=p*g*x-S*M*E;break;case"ZYX":this._x=S*g*x-p*M*E,this._y=p*M*x+S*g*E,this._z=p*g*E-S*M*x,this._w=p*g*x+S*M*E;break;case"YZX":this._x=S*g*x+p*M*E,this._y=p*M*x+S*g*E,this._z=p*g*E-S*M*x,this._w=p*g*x-S*M*E;break;case"XZY":this._x=S*g*x-p*M*E,this._y=p*M*x-S*g*E,this._z=p*g*E+S*M*x,this._w=p*g*x+S*M*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],S=r+h+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>x){const M=2*Math.sqrt(1+r-h-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-r-x);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(ug.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(ug.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),g=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+m*p+d*x-h*g,this.y=r+m*g+h*p-u*x,this.z=l+m*x+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _d=new re,ug=new $o;class dt{constructor(e,i,r,l,u,d,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],x=r[7],S=r[2],M=r[5],E=r[8],R=l[0],y=l[3],_=l[6],U=l[1],D=l[4],z=l[7],V=l[2],N=l[5],P=l[8];return u[0]=d*R+h*U+m*V,u[3]=d*y+h*D+m*N,u[6]=d*_+h*z+m*P,u[1]=p*R+g*U+x*V,u[4]=p*y+g*D+x*N,u[7]=p*_+g*z+x*P,u[2]=S*R+M*U+E*V,u[5]=S*y+M*D+E*N,u[8]=S*_+M*z+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*d-h*p,S=h*m-g*u,M=p*u-d*m,E=i*x+r*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=x*R,e[1]=(l*p-g*r)*R,e[2]=(h*r-l*d)*R,e[3]=S*R,e[4]=(g*i-l*m)*R,e[5]=(l*u-h*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(vd.makeScale(e,i)),this}rotate(e){return this.premultiply(vd.makeRotation(-e)),this}translate(e,i){return this.premultiply(vd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new dt,cg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fg=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cb(){const s={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===kt&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?ku:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Us]:{primaries:e,whitePoint:r,transfer:ku,toXYZ:cg,fromXYZ:fg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:cg,fromXYZ:fg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Ut=Cb();function pa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class wb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{hs===void 0&&(hs=Wu("canvas")),hs.width=e.width,hs.height=e.height;const l=hs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Wu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=pa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Db=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Sd(l[d].image)):u.push(Sd(l[d]))}else u=Sd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Sd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let Ub=0;const yd=new re;class Pn extends zs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=ca,l=ca,u=pi,d=wr,h=bi,m=Ni,p=Pn.DEFAULT_ANISOTROPY,g=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Jo(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case ca:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case ca:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=S_;Pn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,i=0,r=0,l=1){Xt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],S=m[1],M=m[5],E=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(x-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(x+R)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,z=(M+1)/2,V=(_+1)/2,N=(g+S)/4,P=(x+R)/4,$=(E+y)/4;return D>z&&D>V?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=N/r,u=P/r):z>V?z<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(z),r=N/l,u=$/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=P/u,l=$/u),this.set(r,l,u,i),this}let U=Math.sqrt((y-E)*(y-E)+(x-R)*(x-R)+(S-g)*(S-g));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(x-R)/U,this.z=(S-g)/U,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lb extends zs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Xt(0,0,e,i),this.scissorTest=!1,this.viewport=new Xt(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ep(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends Lb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class U_ extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nb extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,vi):vi.fromBufferAttribute(u,d),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mu.copy(r.boundingBox)),mu.applyMatrix4(e.matrixWorld),this.union(mu)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),xu.subVectors(this.max,zo),ps.subVectors(e.a,zo),ms.subVectors(e.b,zo),xs.subVectors(e.c,zo),Xa.subVectors(ms,ps),Wa.subVectors(xs,ms),Sr.subVectors(ps,xs);let i=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-Sr.z,Sr.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,Sr.z,0,-Sr.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-Sr.y,Sr.x,0];return!Md(i,ps,ms,xs,xu)||(i=[1,0,0,0,1,0,0,0,1],!Md(i,ps,ms,xs,xu))?!1:(gu.crossVectors(Xa,Wa),i=[gu.x,gu.y,gu.z],Md(i,ps,ms,xs,xu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const na=[new re,new re,new re,new re,new re,new re,new re,new re],vi=new re,mu=new el,ps=new re,ms=new re,xs=new re,Xa=new re,Wa=new re,Sr=new re,zo=new re,xu=new re,gu=new re,yr=new re;function Md(s,e,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){yr.fromArray(s,u);const h=l.x*Math.abs(yr.x)+l.y*Math.abs(yr.y)+l.z*Math.abs(yr.z),m=e.dot(yr),p=i.dot(yr),g=r.dot(yr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const Ob=new el,Fo=new re,bd=new re;class tp{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ob.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(bd)),this.expandByPoint(Fo.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ia=new re,Ed=new re,_u=new re,qa=new re,Td=new re,vu=new re,Ad=new re;class Pb{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ia)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ia.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ed.copy(e).add(i).multiplyScalar(.5),_u.copy(i).sub(e).normalize(),qa.copy(this.origin).sub(Ed);const u=e.distanceTo(i)*.5,d=-this.direction.dot(_u),h=qa.dot(this.direction),m=-qa.dot(_u),p=qa.lengthSq(),g=Math.abs(1-d*d);let x,S,M,E;if(g>0)if(x=d*m-h,S=d*h-m,E=u*g,x>=0)if(S>=-E)if(S<=E){const R=1/g;x*=R,S*=R,M=x*(x+d*S+2*h)+S*(d*x+S+2*m)+p}else S=u,x=Math.max(0,-(d*S+h)),M=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(d*S+h)),M=-x*x+S*(S+2*m)+p;else S<=-E?(x=Math.max(0,-(-d*u+h)),S=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p):S<=E?(x=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(x=Math.max(0,-(d*u+h)),S=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p);else S=d>0?-u:u,x=Math.max(0,-(d*S+h)),M=-x*x+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ed).addScaledVector(_u,S),M}intersectSphere(e,i){ia.subVectors(e.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,d=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,d=(e.min.y-S.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-S.z)*x,m=(e.max.z-S.z)*x):(h=(e.max.z-S.z)*x,m=(e.min.z-S.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ia)!==null}intersectTriangle(e,i,r,l,u){Td.subVectors(i,e),vu.subVectors(r,e),Ad.crossVectors(Td,vu);let d=this.direction.dot(Ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;qa.subVectors(this.origin,e);const m=h*this.direction.dot(vu.crossVectors(qa,vu));if(m<0)return null;const p=h*this.direction.dot(Td.cross(qa));if(p<0||m+p>d)return null;const g=-h*qa.dot(Ad);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,r,l,u,d,h,m,p,g,x,S,M,E,R,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,g,x,S,M,E,R,y)}set(e,i,r,l,u,d,h,m,p,g,x,S,M,E,R,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=S,_[3]=M,_[7]=E,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/gs.setFromMatrixColumn(e,0).length(),u=1/gs.setFromMatrixColumn(e,1).length(),d=1/gs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=d*g,M=d*x,E=h*g,R=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+E*p,i[5]=S-R*p,i[9]=-h*m,i[2]=R-S*p,i[6]=E+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*g,M=m*x,E=p*g,R=p*x;i[0]=S+R*h,i[4]=E*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=M*h-E,i[6]=R+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*g,M=m*x,E=p*g,R=p*x;i[0]=S-R*h,i[4]=-d*x,i[8]=E+M*h,i[1]=M+E*h,i[5]=d*g,i[9]=R-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*g,M=d*x,E=h*g,R=h*x;i[0]=m*g,i[4]=E*p-M,i[8]=S*p+R,i[1]=m*x,i[5]=R*p+S,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,E=h*m,R=h*p;i[0]=m*g,i[4]=R-S*x,i[8]=E*x+M,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*x+E,i[10]=S-R*x}else if(e.order==="XZY"){const S=d*m,M=d*p,E=h*m,R=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=S*x+R,i[5]=d*g,i[9]=M*x-E,i[2]=E*x-M,i[6]=h*g,i[10]=R*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zb,e,Fb)}lookAt(e,i,r){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ya.crossVectors(r,ei),Ya.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ya.crossVectors(r,ei)),Ya.normalize(),Su.crossVectors(ei,Ya),l[0]=Ya.x,l[4]=Su.x,l[8]=ei.x,l[1]=Ya.y,l[5]=Su.y,l[9]=ei.y,l[2]=Ya.z,l[6]=Su.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],x=r[5],S=r[9],M=r[13],E=r[2],R=r[6],y=r[10],_=r[14],U=r[3],D=r[7],z=r[11],V=r[15],N=l[0],P=l[4],$=l[8],w=l[12],C=l[1],k=l[5],te=l[9],le=l[13],me=l[2],fe=l[6],B=l[10],j=l[14],Y=l[3],_e=l[7],ve=l[11],O=l[15];return u[0]=d*N+h*C+m*me+p*Y,u[4]=d*P+h*k+m*fe+p*_e,u[8]=d*$+h*te+m*B+p*ve,u[12]=d*w+h*le+m*j+p*O,u[1]=g*N+x*C+S*me+M*Y,u[5]=g*P+x*k+S*fe+M*_e,u[9]=g*$+x*te+S*B+M*ve,u[13]=g*w+x*le+S*j+M*O,u[2]=E*N+R*C+y*me+_*Y,u[6]=E*P+R*k+y*fe+_*_e,u[10]=E*$+R*te+y*B+_*ve,u[14]=E*w+R*le+y*j+_*O,u[3]=U*N+D*C+z*me+V*Y,u[7]=U*P+D*k+z*fe+V*_e,u[11]=U*$+D*te+z*B+V*ve,u[15]=U*w+D*le+z*j+V*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],S=e[10],M=e[14],E=e[3],R=e[7],y=e[11],_=e[15];return E*(+u*m*x-l*p*x-u*h*S+r*p*S+l*h*M-r*m*M)+R*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*g-u*m*g)+y*(+i*p*x-i*h*M-u*d*x+r*d*M+u*h*g-r*p*g)+_*(-l*h*g-i*m*x+i*h*S+l*d*x-r*d*S+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],S=e[10],M=e[11],E=e[12],R=e[13],y=e[14],_=e[15],U=x*y*p-R*S*p+R*m*M-h*y*M-x*m*_+h*S*_,D=E*S*p-g*y*p-E*m*M+d*y*M+g*m*_-d*S*_,z=g*R*p-E*x*p+E*h*M-d*R*M-g*h*_+d*x*_,V=E*x*m-g*R*m-E*h*S+d*R*S+g*h*y-d*x*y,N=i*U+r*D+l*z+u*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/N;return e[0]=U*P,e[1]=(R*S*u-x*y*u-R*l*M+r*y*M+x*l*_-r*S*_)*P,e[2]=(h*y*u-R*m*u+R*l*p-r*y*p-h*l*_+r*m*_)*P,e[3]=(x*m*u-h*S*u-x*l*p+r*S*p+h*l*M-r*m*M)*P,e[4]=D*P,e[5]=(g*y*u-E*S*u+E*l*M-i*y*M-g*l*_+i*S*_)*P,e[6]=(E*m*u-d*y*u-E*l*p+i*y*p+d*l*_-i*m*_)*P,e[7]=(d*S*u-g*m*u+g*l*p-i*S*p-d*l*M+i*m*M)*P,e[8]=z*P,e[9]=(E*x*u-g*R*u-E*r*M+i*R*M+g*r*_-i*x*_)*P,e[10]=(d*R*u-E*h*u+E*r*p-i*R*p-d*r*_+i*h*_)*P,e[11]=(g*h*u-d*x*u-g*r*p+i*x*p+d*r*M-i*h*M)*P,e[12]=V*P,e[13]=(g*R*l-E*x*l+E*r*S-i*R*S-g*r*y+i*x*y)*P,e[14]=(E*h*l-d*R*l-E*r*m+i*R*m+d*r*y-i*h*y)*P,e[15]=(d*x*l-g*h*l+g*r*m-i*x*m-d*r*S+i*h*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,x=h+h,S=u*p,M=u*g,E=u*x,R=d*g,y=d*x,_=h*x,U=m*p,D=m*g,z=m*x,V=r.x,N=r.y,P=r.z;return l[0]=(1-(R+_))*V,l[1]=(M+z)*V,l[2]=(E-D)*V,l[3]=0,l[4]=(M-z)*N,l[5]=(1-(S+_))*N,l[6]=(y+U)*N,l[7]=0,l[8]=(E+D)*P,l[9]=(y-U)*P,l[10]=(1-(S+R))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=gs.set(l[0],l[1],l[2]).length();const d=gs.set(l[4],l[5],l[6]).length(),h=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,g=1/d,x=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,g=2*u/(i-e),x=2*u/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let E,R;if(m)E=u/(d-u),R=d*u/(d-u);else if(h===Ui)E=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===Xu)E=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,g=2/(i-e),x=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let E,R;if(m)E=1/(d-u),R=d/(d-u);else if(h===Ui)E=-2/(d-u),R=-(d+u)/(d-u);else if(h===Xu)E=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const gs=new re,Si=new nn,zb=new re(0,0,0),Fb=new re(1,1,1),Ya=new re,Su=new re,ei=new re,dg=new nn,hg=new $o;class Oi{constructor(e=0,i=0,r=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return hg.setFromEuler(this),this.setFromQuaternion(hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class L_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bb=0;const pg=new re,_s=new $o,aa=new nn,yu=new re,Bo=new re,Ib=new re,Hb=new $o,mg=new re(1,0,0),xg=new re(0,1,0),gg=new re(0,0,1),_g={type:"added"},Gb={type:"removed"},vs={type:"childadded",child:null},Rd={type:"childremoved",child:null};class Xn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new re,i=new Oi,r=new $o,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new dt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(xg,e)}rotateZ(e){return this.rotateOnAxis(gg,e)}translateOnAxis(e,i){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(xg,e)}translateZ(e){return this.translateOnAxis(gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?yu.copy(e):yu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Bo,yu,this.up):aa.lookAt(yu,Bo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(aa),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_g),vs.child=e,this.dispatchEvent(vs),vs.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Gb),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_g),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,Ib),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Hb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),x=d(e.shapes),S=d(e.skeletons),M=d(e.animations),E=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new re(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new re,ra=new re,Cd=new re,sa=new re,Ss=new re,ys=new re,vg=new re,wd=new re,Dd=new re,Ud=new re,Ld=new Xt,Nd=new Xt,Od=new Xt;class Mi{constructor(e=new re,i=new re,r=new re){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){yi.subVectors(l,i),ra.subVectors(r,i),Cd.subVectors(e,i);const d=yi.dot(yi),h=yi.dot(ra),m=yi.dot(Cd),p=ra.dot(ra),g=ra.dot(Cd),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(p*m-h*g)*S,E=(d*g-h*m)*S;return u.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,sa.x),m.addScaledVector(d,sa.y),m.addScaledVector(h,sa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return Ld.setScalar(0),Nd.setScalar(0),Od.setScalar(0),Ld.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,r),Od.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ld,u.x),d.addScaledVector(Nd,u.y),d.addScaledVector(Od,u.z),d}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),ra.subVectors(e,i),yi.cross(ra).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),yi.cross(ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;Ss.subVectors(l,r),ys.subVectors(u,r),wd.subVectors(e,r);const m=Ss.dot(wd),p=ys.dot(wd);if(m<=0&&p<=0)return i.copy(r);Dd.subVectors(e,l);const g=Ss.dot(Dd),x=ys.dot(Dd);if(g>=0&&x<=g)return i.copy(l);const S=m*x-g*p;if(S<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(Ss,d);Ud.subVectors(e,u);const M=Ss.dot(Ud),E=ys.dot(Ud);if(E>=0&&M<=E)return i.copy(u);const R=M*p-m*E;if(R<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(ys,h);const y=g*E-M*x;if(y<=0&&x-g>=0&&M-E>=0)return vg.subVectors(u,l),h=(x-g)/(x-g+(M-E)),i.copy(l).addScaledVector(vg,h);const _=1/(y+R+S);return d=R*_,h=S*_,i.copy(r).addScaledVector(Ss,d).addScaledVector(ys,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function Pd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ot{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ut.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ut.workingColorSpace){if(e=Rb(e,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Pd(d,u,e+1/3),this.g=Pd(d,u,e),this.b=Pd(d,u,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=N_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Ut.workingToColorSpace(Ln.copy(this),e),Math.round(Et(Ln.r*255,0,255))*65536+Math.round(Et(Ln.g*255,0,255))*256+Math.round(Et(Ln.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hi){Ut.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(Mu);const r=gd(ja.h,Mu.h,i),l=gd(ja.s,Mu.s,i),u=gd(ja.l,Mu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ot;Ot.NAMES=N_;let Vb=0;class tl extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=As,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Qd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Qd&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class O_ extends tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=v_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new re,bu=new Lt;let kb=0;class Li{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=rg,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bu.fromBufferAttribute(this,i),bu.applyMatrix3(e),this.setXY(i,bu.x,bu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rg&&(e.usage=this.usage),e}}class P_ extends Li{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class z_ extends Li{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Dr extends Li{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Xb=0;const di=new nn,zd=new Xn,Ms=new re,ti=new el,Io=new el,bn=new re;class tr extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D_(e)?z_:P_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new dt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Dr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Io.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ti.min,Io.min),ti.expandByPoint(bn),bn.addVectors(ti.max,Io.max),ti.expandByPoint(bn)):(ti.expandByPoint(Io.min),ti.expandByPoint(Io.max))}ti.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)bn.fromBufferAttribute(h,p),m&&(Ms.fromBufferAttribute(e,p),bn.add(Ms)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let $=0;$<r.count;$++)h[$]=new re,m[$]=new re;const p=new re,g=new re,x=new re,S=new Lt,M=new Lt,E=new Lt,R=new re,y=new re;function _($,w,C){p.fromBufferAttribute(r,$),g.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),S.fromBufferAttribute(u,$),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),g.sub(p),x.sub(p),M.sub(S),E.sub(S);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(k),y.copy(x).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(k),h[$].add(R),h[w].add(R),h[C].add(R),m[$].add(y),m[w].add(y),m[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let $=0,w=U.length;$<w;++$){const C=U[$],k=C.start,te=C.count;for(let le=k,me=k+te;le<me;le+=3)_(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const D=new re,z=new re,V=new re,N=new re;function P($){V.fromBufferAttribute(l,$),N.copy(V);const w=h[$];D.copy(w),D.sub(V.multiplyScalar(V.dot(w))).normalize(),z.crossVectors(N,w);const k=z.dot(m[$])<0?-1:1;d.setXYZW($,D.x,D.y,D.z,k)}for(let $=0,w=U.length;$<w;++$){const C=U[$],k=C.start,te=C.count;for(let le=k,me=k+te;le<me;le+=3)P(e.getX(le+0)),P(e.getX(le+1)),P(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new re,u=new re,d=new re,h=new re,m=new re,p=new re,g=new re,x=new re;if(e)for(let S=0,M=e.count;S<M;S+=3){const E=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,S=new p.constructor(m.length*g);let M=0,E=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*g;for(let _=0;_<g;_++)S[E++]=p[M++]}return new Li(S,g,x)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new tr,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,x=p.length;g<x;g++){const S=p[g],M=e(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let S=0,M=x.length;S<M;S++)g.push(x[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sg=new nn,Mr=new Pb,Eu=new tp,yg=new re,Tu=new re,Au=new re,Ru=new re,Fd=new re,Cu=new re,Mg=new re,wu=new re;class xa extends Xn{constructor(e=new tr,i=new O_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Cu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],x=u[m];g!==0&&(Fd.fromBufferAttribute(x,e),d?Cu.addScaledVector(Fd,g):Cu.addScaledVector(Fd.sub(i),g))}i.add(Cu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(u),Mr.copy(e.ray).recast(e.near),!(Eu.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Eu,yg)===null||Mr.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(Sg.copy(u).invert(),Mr.copy(e.ray).applyMatrix4(Sg),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Mr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,R=S.length;E<R;E++){const y=S[E],_=d[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let z=U,V=D;z<V;z+=3){const N=h.getX(z),P=h.getX(z+1),$=h.getX(z+2);l=Du(this,_,e,r,p,g,x,N,P,$),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let y=E,_=R;y<_;y+=3){const U=h.getX(y),D=h.getX(y+1),z=h.getX(y+2);l=Du(this,d,e,r,p,g,x,U,D,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,R=S.length;E<R;E++){const y=S[E],_=d[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let z=U,V=D;z<V;z+=3){const N=z,P=z+1,$=z+2;l=Du(this,_,e,r,p,g,x,N,P,$),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=E,_=R;y<_;y+=3){const U=y,D=y+1,z=y+2;l=Du(this,d,e,r,p,g,x,U,D,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Wb(s,e,i,r,l,u,d,h){let m;if(e.side===kn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===er,h),m===null)return null;wu.copy(h),wu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(wu);return p<i.near||p>i.far?null:{distance:p,point:wu.clone(),object:s}}function Du(s,e,i,r,l,u,d,h,m,p){s.getVertexPosition(h,Tu),s.getVertexPosition(m,Au),s.getVertexPosition(p,Ru);const g=Wb(s,e,i,r,Tu,Au,Ru,Mg);if(g){const x=new re;Mi.getBarycoord(Mg,Tu,Au,Ru,x),l&&(g.uv=Mi.getInterpolatedAttribute(l,h,m,p,x,new Lt)),u&&(g.uv1=Mi.getInterpolatedAttribute(u,h,m,p,x,new Lt)),d&&(g.normal=Mi.getInterpolatedAttribute(d,h,m,p,x,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new re,materialIndex:0};Mi.getNormal(Tu,Au,Ru,S.normal),g.face=S,g.barycoord=x}return g}class Fs extends tr{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],x=[];let S=0,M=0;E("z","y","x",-1,-1,r,i,e,d,u,0),E("z","y","x",1,-1,r,i,-e,d,u,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Dr(p,3)),this.setAttribute("normal",new Dr(g,3)),this.setAttribute("uv",new Dr(x,2));function E(R,y,_,U,D,z,V,N,P,$,w){const C=z/P,k=V/$,te=z/2,le=V/2,me=N/2,fe=P+1,B=$+1;let j=0,Y=0;const _e=new re;for(let ve=0;ve<B;ve++){const O=ve*k-le;for(let ae=0;ae<fe;ae++){const Me=ae*C-te;_e[R]=Me*U,_e[y]=O*D,_e[_]=me,p.push(_e.x,_e.y,_e.z),_e[R]=0,_e[y]=0,_e[_]=N>0?1:-1,g.push(_e.x,_e.y,_e.z),x.push(ae/P),x.push(1-ve/$),j+=1}}for(let ve=0;ve<$;ve++)for(let O=0;O<P;O++){const ae=S+O+fe*ve,Me=S+O+fe*(ve+1),Te=S+(O+1)+fe*(ve+1),Pe=S+(O+1)+fe*ve;m.push(ae,Me,Pe),m.push(Me,Te,Pe),Y+=6}h.addGroup(M,Y,w),M+=Y,S+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function On(s){const e={};for(let i=0;i<s.length;i++){const r=Ls(s[i]);for(const l in r)e[l]=r[l]}return e}function qb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function F_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const Yb={clone:Ls,merge:On};var jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jb,this.fragmentShader=Zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=qb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class B_ extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new re,bg=new Lt,Eg=new Lt;class ni extends B_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Za.x,Za.y).multiplyScalar(-e/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Za.x,Za.y).multiplyScalar(-e/Za.z)}getViewSize(e,i){return this.getViewBounds(e,bg,Eg),i.subVectors(Eg,bg)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(xd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Es=1;class Kb extends Xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ni(bs,Es,e,i);l.layers=this.layers,this.add(l);const u=new ni(bs,Es,e,i);u.layers=this.layers,this.add(u);const d=new ni(bs,Es,e,i);d.layers=this.layers,this.add(d);const h=new ni(bs,Es,e,i);h.layers=this.layers,this.add(h);const m=new ni(bs,Es,e,i);m.layers=this.layers,this.add(m);const p=new ni(bs,Es,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Xu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,S,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class I_ extends Pn{constructor(e=[],i=ws,r,l,u,d,h,m,p,g){super(e,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qb extends Lr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new I_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Fs(5,5,5),u=new ga({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ha});u.uniforms.tEquirect.value=i;const d=new xa(l,u),h=i.minFilter;return i.minFilter===wr&&(i.minFilter=pi),new Kb(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class Uu extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jb={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=g.position.distanceTo(x.position),M=.02,E=.005;p.inputState.pinching&&S>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Jb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Uu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class $b extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class e3 extends Pn{constructor(e=null,i=1,r=1,l,u,d,h,m,p=ii,g=ii,x,S){super(null,d,h,m,p,g,l,u,x,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Id=new re,t3=new re,n3=new dt;class Ar{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Id.subVectors(r,i).cross(t3.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Id),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||n3.getNormalMatrix(e),l=this.coplanarPoint(Id).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new tp,i3=new Lt(.5,.5),Lu=new re;class np{constructor(e=new Ar,i=new Ar,r=new Ar,l=new Ar,u=new Ar,d=new Ar){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ui,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],g=u[4],x=u[5],S=u[6],M=u[7],E=u[8],R=u[9],y=u[10],_=u[11],U=u[12],D=u[13],z=u[14],V=u[15];if(l[0].setComponents(p-d,M-g,_-E,V-U).normalize(),l[1].setComponents(p+d,M+g,_+E,V+U).normalize(),l[2].setComponents(p+h,M+x,_+R,V+D).normalize(),l[3].setComponents(p-h,M-x,_-R,V-D).normalize(),r)l[4].setComponents(m,S,y,z).normalize(),l[5].setComponents(p-m,M-S,_-y,V-z).normalize();else if(l[4].setComponents(p-m,M-S,_-y,V-z).normalize(),i===Ui)l[5].setComponents(p+m,M+S,_+y,V+z).normalize();else if(i===Xu)l[5].setComponents(m,S,y,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const i=i3.distanceTo(e.center);return br.radius=.7071067811865476+i,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lu.x=l.normal.x>0?e.max.x:e.min.x,Lu.y=l.normal.y>0?e.max.y:e.min.y,Lu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H_ extends Pn{constructor(e,i,r=Ur,l,u,d,h=ii,m=ii,p,g=qo,x=1){if(g!==qo&&g!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:x};super(S,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class G_ extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qu extends tr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,x=e/h,S=i/m,M=[],E=[],R=[],y=[];for(let _=0;_<g;_++){const U=_*S-d;for(let D=0;D<p;D++){const z=D*x-u;E.push(z,-U,0),R.push(0,0,1),y.push(D/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<h;U++){const D=U+p*_,z=U+p*(_+1),V=U+1+p*(_+1),N=U+1+p*_;M.push(D,z,N),M.push(z,V,N)}this.setIndex(M),this.setAttribute("position",new Dr(E,3)),this.setAttribute("normal",new Dr(R,3)),this.setAttribute("uv",new Dr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.width,e.height,e.widthSegments,e.heightSegments)}}class a3 extends tl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C_,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class r3 extends tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s3 extends tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class o3 extends Xn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Hd=new nn,Tg=new re,Ag=new re;class l3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Tg.setFromMatrixPosition(e.matrixWorld),i.position.copy(Tg),Ag.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Ag),i.updateMatrixWorld(),Hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rg=new nn,Ho=new re,Gd=new re;class u3 extends l3{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new re(1,0,0),new re(-1,0,0),new re(0,0,1),new re(0,0,-1),new re(0,1,0),new re(0,-1,0)],this._cubeUps=[new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,0,1),new re(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ho),Gd.copy(r.position),Gd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Gd),r.updateMatrixWorld(),l.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Rg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rg,r.coordinateSystem,r.reversedDepth)}}class c3 extends o3{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new u3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class f3 extends B_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class d3 extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Cg(s,e,i,r){const l=h3(r);switch(i){case T_:return s*e;case R_:return s*e/l.components*l.byteLength;case Kh:return s*e/l.components*l.byteLength;case Qh:return s*e*2/l.components*l.byteLength;case Jh:return s*e*2/l.components*l.byteLength;case A_:return s*e*3/l.components*l.byteLength;case bi:return s*e*4/l.components*l.byteLength;case $h:return s*e*4/l.components*l.byteLength;case Fu:case Bu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:case dh:return Math.max(s,16)*Math.max(e,8)/4;case uh:case fh:return Math.max(s,8)*Math.max(e,8)/2;case hh:case ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dh:case Uh:case Lh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Nh:case Oh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ph:case zh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function h3(s){switch(s){case Ni:case y_:return{byteLength:1,components:1};case Xo:case M_:case Ps:return{byteLength:2,components:1};case jh:case Zh:return{byteLength:2,components:4};case Ur:case Yh:case fa:return{byteLength:4,components:1};case b_:case E_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);function V_(){let s=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function p3(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,g);else{x.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<x.length;M++){const E=x[S],R=x[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++S,x[S]=R)}x.length=S+1;for(let M=0,E=x.length;M<E;M++){const R=x[M];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var m3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x3=`#ifdef USE_ALPHAHASH
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
#endif`,g3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y3=`#ifdef USE_AOMAP
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
#endif`,M3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b3=`#ifdef USE_BATCHING
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
#endif`,E3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C3=`#ifdef USE_IRIDESCENCE
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
#endif`,w3=`#ifdef USE_BUMPMAP
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
#endif`,D3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,B3=`#define PI 3.141592653589793
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
} // validated`,I3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H3=`vec3 transformedNormal = objectNormal;
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
#endif`,G3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W3="gl_FragColor = linearToOutputTexel( gl_FragColor );",q3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y3=`#ifdef USE_ENVMAP
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
#endif`,j3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z3=`#ifdef USE_ENVMAP
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
#endif`,K3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q3=`#ifdef USE_ENVMAP
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
#endif`,J3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n1=`#ifdef USE_GRADIENTMAP
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
}`,i1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
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
#endif`,o1=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,l1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d1=`PhysicalMaterial material;
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
#endif`,h1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,p1=`
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
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
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E1=`#if defined( USE_POINTS_UV )
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
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
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
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
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
#endif`,B1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$1=`float getShadowMask() {
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
}`,eE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tE=`#ifdef USE_SKINNING
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
#endif`,nE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iE=`#ifdef USE_SKINNING
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
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lE=`#ifdef USE_TRANSMISSION
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
#endif`,uE=`#ifdef USE_TRANSMISSION
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mE=`uniform sampler2D t2D;
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`#include <common>
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
}`,yE=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ME=`#define DISTANCE
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
}`,bE=`#define DISTANCE
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`uniform float scale;
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
}`,RE=`uniform vec3 diffuse;
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
}`,CE=`#include <common>
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
}`,wE=`uniform vec3 diffuse;
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
}`,DE=`#define LAMBERT
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
}`,UE=`#define LAMBERT
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
}`,LE=`#define MATCAP
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
}`,NE=`#define MATCAP
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
}`,OE=`#define NORMAL
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
}`,PE=`#define NORMAL
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
}`,zE=`#define PHONG
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
}`,FE=`#define PHONG
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
}`,BE=`#define STANDARD
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
}`,IE=`#define STANDARD
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
}`,HE=`#define TOON
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
}`,GE=`#define TOON
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
}`,VE=`uniform float size;
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
}`,kE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,WE=`uniform vec3 color;
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
}`,qE=`uniform float rotation;
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
}`,YE=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:m3,alphahash_pars_fragment:x3,alphamap_fragment:g3,alphamap_pars_fragment:_3,alphatest_fragment:v3,alphatest_pars_fragment:S3,aomap_fragment:y3,aomap_pars_fragment:M3,batching_pars_vertex:b3,batching_vertex:E3,begin_vertex:T3,beginnormal_vertex:A3,bsdfs:R3,iridescence_fragment:C3,bumpmap_pars_fragment:w3,clipping_planes_fragment:D3,clipping_planes_pars_fragment:U3,clipping_planes_pars_vertex:L3,clipping_planes_vertex:N3,color_fragment:O3,color_pars_fragment:P3,color_pars_vertex:z3,color_vertex:F3,common:B3,cube_uv_reflection_fragment:I3,defaultnormal_vertex:H3,displacementmap_pars_vertex:G3,displacementmap_vertex:V3,emissivemap_fragment:k3,emissivemap_pars_fragment:X3,colorspace_fragment:W3,colorspace_pars_fragment:q3,envmap_fragment:Y3,envmap_common_pars_fragment:j3,envmap_pars_fragment:Z3,envmap_pars_vertex:K3,envmap_physical_pars_fragment:o1,envmap_vertex:Q3,fog_vertex:J3,fog_pars_vertex:$3,fog_fragment:e1,fog_pars_fragment:t1,gradientmap_pars_fragment:n1,lightmap_pars_fragment:i1,lights_lambert_fragment:a1,lights_lambert_pars_fragment:r1,lights_pars_begin:s1,lights_toon_fragment:l1,lights_toon_pars_fragment:u1,lights_phong_fragment:c1,lights_phong_pars_fragment:f1,lights_physical_fragment:d1,lights_physical_pars_fragment:h1,lights_fragment_begin:p1,lights_fragment_maps:m1,lights_fragment_end:x1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:_1,logdepthbuf_pars_vertex:v1,logdepthbuf_vertex:S1,map_fragment:y1,map_pars_fragment:M1,map_particle_fragment:b1,map_particle_pars_fragment:E1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:A1,morphinstance_vertex:R1,morphcolor_vertex:C1,morphnormal_vertex:w1,morphtarget_pars_vertex:D1,morphtarget_vertex:U1,normal_fragment_begin:L1,normal_fragment_maps:N1,normal_pars_fragment:O1,normal_pars_vertex:P1,normal_vertex:z1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:B1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:G1,opaque_fragment:V1,packing:k1,premultiplied_alpha_fragment:X1,project_vertex:W1,dithering_fragment:q1,dithering_pars_fragment:Y1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:K1,shadowmap_pars_vertex:Q1,shadowmap_vertex:J1,shadowmask_pars_fragment:$1,skinbase_vertex:eE,skinning_pars_vertex:tE,skinning_vertex:nE,skinnormal_vertex:iE,specularmap_fragment:aE,specularmap_pars_fragment:rE,tonemapping_fragment:sE,tonemapping_pars_fragment:oE,transmission_fragment:lE,transmission_pars_fragment:uE,uv_pars_fragment:cE,uv_pars_vertex:fE,uv_vertex:dE,worldpos_vertex:hE,background_vert:pE,background_frag:mE,backgroundCube_vert:xE,backgroundCube_frag:gE,cube_vert:_E,cube_frag:vE,depth_vert:SE,depth_frag:yE,distanceRGBA_vert:ME,distanceRGBA_frag:bE,equirect_vert:EE,equirect_frag:TE,linedashed_vert:AE,linedashed_frag:RE,meshbasic_vert:CE,meshbasic_frag:wE,meshlambert_vert:DE,meshlambert_frag:UE,meshmatcap_vert:LE,meshmatcap_frag:NE,meshnormal_vert:OE,meshnormal_frag:PE,meshphong_vert:zE,meshphong_frag:FE,meshphysical_vert:BE,meshphysical_frag:IE,meshtoon_vert:HE,meshtoon_frag:GE,points_vert:VE,points_frag:kE,shadow_vert:XE,shadow_frag:WE,sprite_vert:qE,sprite_frag:YE},Ne={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Di={basic:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ot(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:On([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:On([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ot(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:On([Ne.points,Ne.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:On([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:On([Ne.common,Ne.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:On([Ne.sprite,Ne.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:On([Ne.common,Ne.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:On([Ne.lights,Ne.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Di.physical={uniforms:On([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Nu={r:0,b:0,g:0},Er=new Oi,jE=new nn;function ZE(s,e,i,r,l,u,d){const h=new Ot(0);let m=u===!0?0:1,p,g,x=null,S=0,M=null;function E(D){let z=D.isScene===!0?D.background:null;return z&&z.isTexture&&(z=(D.backgroundBlurriness>0?i:e).get(z)),z}function R(D){let z=!1;const V=E(D);V===null?_(h,m):V&&V.isColor&&(_(V,1),z=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||z)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,z){const V=E(z);V&&(V.isCubeTexture||V.mapping===Ku)?(g===void 0&&(g=new xa(new Fs(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:Ls(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,P,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Er.copy(z.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(Er)),g.material.toneMapped=Ut.getTransfer(V.colorSpace)!==kt,(x!==V||S!==V.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,x=V,S=V.version,M=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new xa(new Qu(2,2),new ga({name:"BackgroundMaterial",uniforms:Ls(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(V.colorSpace)!==kt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(x!==V||S!==V.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,x=V,S=V.version,M=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,z){D.getRGB(Nu,F_(s)),r.buffers.color.setClear(Nu.r,Nu.g,Nu.b,z,d)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,z=1){h.set(D),m=z,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,_(h,m)},render:R,addToRenderList:y,dispose:U}}function KE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(C,k,te,le,me){let fe=!1;const B=x(le,te,k);u!==B&&(u=B,p(u.object)),fe=M(C,le,te,me),fe&&E(C,le,te,me),me!==null&&e.update(me,s.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,z(C,k,te,le),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,k,te){const le=te.wireframe===!0;let me=r[C.id];me===void 0&&(me={},r[C.id]=me);let fe=me[k.id];fe===void 0&&(fe={},me[k.id]=fe);let B=fe[le];return B===void 0&&(B=S(m()),fe[le]=B),B}function S(C){const k=[],te=[],le=[];for(let me=0;me<i;me++)k[me]=0,te[me]=0,le[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:le,object:C,attributes:{},index:null}}function M(C,k,te,le){const me=u.attributes,fe=k.attributes;let B=0;const j=te.getAttributes();for(const Y in j)if(j[Y].location>=0){const ve=me[Y];let O=fe[Y];if(O===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ve===void 0||ve.attribute!==O||O&&ve.data!==O.data)return!0;B++}return u.attributesNum!==B||u.index!==le}function E(C,k,te,le){const me={},fe=k.attributes;let B=0;const j=te.getAttributes();for(const Y in j)if(j[Y].location>=0){let ve=fe[Y];ve===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor));const O={};O.attribute=ve,ve&&ve.data&&(O.data=ve.data),me[Y]=O,B++}u.attributes=me,u.attributesNum=B,u.index=le}function R(){const C=u.newAttributes;for(let k=0,te=C.length;k<te;k++)C[k]=0}function y(C){_(C,0)}function _(C,k){const te=u.newAttributes,le=u.enabledAttributes,me=u.attributeDivisors;te[C]=1,le[C]===0&&(s.enableVertexAttribArray(C),le[C]=1),me[C]!==k&&(s.vertexAttribDivisor(C,k),me[C]=k)}function U(){const C=u.newAttributes,k=u.enabledAttributes;for(let te=0,le=k.length;te<le;te++)k[te]!==C[te]&&(s.disableVertexAttribArray(te),k[te]=0)}function D(C,k,te,le,me,fe,B){B===!0?s.vertexAttribIPointer(C,k,te,me,fe):s.vertexAttribPointer(C,k,te,le,me,fe)}function z(C,k,te,le){R();const me=le.attributes,fe=te.getAttributes(),B=k.defaultAttributeValues;for(const j in fe){const Y=fe[j];if(Y.location>=0){let _e=me[j];if(_e===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor)),_e!==void 0){const ve=_e.normalized,O=_e.itemSize,ae=e.get(_e);if(ae===void 0)continue;const Me=ae.buffer,Te=ae.type,Pe=ae.bytesPerElement,ne=Te===s.INT||Te===s.UNSIGNED_INT||_e.gpuType===Yh;if(_e.isInterleavedBufferAttribute){const ue=_e.data,we=ue.stride,Ge=_e.offset;if(ue.isInstancedInterleavedBuffer){for(let We=0;We<Y.locationSize;We++)_(Y.location+We,ue.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let We=0;We<Y.locationSize;We++)y(Y.location+We);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let We=0;We<Y.locationSize;We++)D(Y.location+We,O/Y.locationSize,Te,ve,we*Pe,(Ge+O/Y.locationSize*We)*Pe,ne)}else{if(_e.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)_(Y.location+ue,_e.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ue=0;ue<Y.locationSize;ue++)y(Y.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let ue=0;ue<Y.locationSize;ue++)D(Y.location+ue,O/Y.locationSize,Te,ve,O*Pe,O/Y.locationSize*ue*Pe,ne)}}else if(B!==void 0){const ve=B[j];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(Y.location,ve);break;case 3:s.vertexAttrib3fv(Y.location,ve);break;case 4:s.vertexAttrib4fv(Y.location,ve);break;default:s.vertexAttrib1fv(Y.location,ve)}}}}U()}function V(){$();for(const C in r){const k=r[C];for(const te in k){const le=k[te];for(const me in le)g(le[me].object),delete le[me];delete k[te]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const te in k){const le=k[te];for(const me in le)g(le[me].object),delete le[me];delete k[te]}delete r[C.id]}function P(C){for(const k in r){const te=r[k];if(te[C.id]===void 0)continue;const le=te[C.id];for(const me in le)g(le[me].object),delete le[me];delete te[C.id]}}function $(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:y,disableUnusedAttributes:U}}function QE(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function h(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let M=0;for(let E=0;E<x;E++)M+=g[E];i.update(M,r,1)}function m(p,g,x,S){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)d(p[E],g[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,x);let E=0;for(let R=0;R<x;R++)E+=g[R]*S[R];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function JE(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==bi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const $=P===Ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ni&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fa&&!$)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(lt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),z=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:z,vertexTextures:V,maxSamples:N}}function $E(s){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Ar,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||r!==0||l;return l=S,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=g(x,S,0)},this.setState=function(x,S,M){const E=x.clippingPlanes,R=x.clipIntersection,y=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||u&&!y)u?g(null):p();else{const U=u?0:r,D=U*4;let z=_.clippingState||null;m.value=z,z=g(E,S,D,M);for(let V=0;V!==D;++V)z[V]=i[V];_.clippingState=z,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,S,M,E){const R=x!==null?x.length:0;let y=null;if(R!==0){if(y=m.value,E!==!0||y===null){const _=M+R*4,U=S.matrixWorldInverse;h.getNormalMatrix(U),(y===null||y.length<_)&&(y=new Float32Array(_));for(let D=0,z=M;D!==R;++D,z+=4)d.copy(x[D]).applyMatrix4(U,h),d.normal.toArray(y,z),y[z+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function eT(s){let e=new WeakMap;function i(d,h){return h===rh?d.mapping=ws:h===sh&&(d.mapping=Ds),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===rh||h===sh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Qb(m.height);return p.fromEquirectangularTexture(s,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Qa=4,wg=[.125,.215,.35,.446,.526,.582],Cr=20,tT=256,Go=new f3,Dg=new Ot;let Vd=null,kd=0,Xd=0,Wd=!1;const nT=new re;class Ug{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=nT}=u;Vd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,kd,Xd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ws||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Ps,format:bi,colorSpace:Us,depthBuffer:!1},l=Lg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iT(u)),this._blurMaterial=rT(u,e,i),this._ggxMaterial=aT(u,e,i)}return l}_compileMaterial(e){const i=new xa(new tr,e);this._renderer.compile(i,Go)}_sceneToCubeUV(e,i,r,l,u){const m=new ni(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,M=x.toneMapping;x.getClearColor(Dg),x.toneMapping=$a,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xa(new Fs,new O_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let _=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,_=!0):(y.color.copy(Dg),_=!0);for(let D=0;D<6;D++){const z=D%3;z===0?(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[D],u.y,u.z)):z===1?(m.up.set(0,0,p[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[D],u.z)):(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[D]));const V=this._cubeSize;Ts(l,z*V,D>2?V:0,V,V),x.setRenderTarget(l),_&&x.render(R,m),x.render(e,m)}x.toneMapping=M,x.autoClear=S,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ws||e.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ng());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Ts(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),S=.05+p*.95,M=x*S,{_lodMax:E}=this,R=this._sizeLods[r],y=3*R*(r>E-Qa?r-E+Qa:0),_=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Ts(u,y,_,3*R,2*R),l.setRenderTarget(u),l.render(h,Go),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-r,Ts(e,y,_,3*R,2*R),l.setRenderTarget(e),l.render(h,Go)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&on("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Cr-1),R=u/E,y=isFinite(u)?1+Math.floor(g*R):Cr;y>Cr&&lt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Cr}`);const _=[];let U=0;for(let P=0;P<Cr;++P){const $=P/R,w=Math.exp(-$*$/2);_.push(w),P===0?U+=w:P<y&&(U+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/U;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:D}=this;S.dTheta.value=E,S.mipInt.value=D-r;const z=this._sizeLods[l],V=3*z*(l>D-Qa?l-D+Qa:0),N=4*(this._cubeSize-z);Ts(i,V,N,3*z,2*z),m.setRenderTarget(i),m.render(x,Go)}}function iT(s){const e=[],i=[],r=[];let l=s;const u=s-Qa+1+wg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>s-Qa?m=wg[d-s+Qa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,x=1+p,S=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,E=6,R=3,y=2,_=1,U=new Float32Array(R*E*M),D=new Float32Array(y*E*M),z=new Float32Array(_*E*M);for(let N=0;N<M;N++){const P=N%3*2/3-1,$=N>2?0:-1,w=[P,$,0,P+2/3,$,0,P+2/3,$+1,0,P,$,0,P+2/3,$+1,0,P,$+1,0];U.set(w,R*E*N),D.set(S,y*E*N);const C=[N,N,N,N,N,N];z.set(C,_*E*N)}const V=new tr;V.setAttribute("position",new Li(U,R)),V.setAttribute("uv",new Li(D,y)),V.setAttribute("faceIndex",new Li(z,_)),r.push(new xa(V,null)),l>Qa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Lg(s,e,i){const r=new Lr(s,e,i);return r.texture.mapping=Ku,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ts(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function aT(s,e,i){return new ga({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function rT(s,e,i){const r=new Float32Array(Cr),l=new re(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Ng(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Og(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}function sT(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===rh||m===sh,g=m===ws||m===Ds;if(p||g){let x=e.get(h);const S=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Ug(s)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Ug(s)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function oT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&jo("WebGLRenderer: "+r+" extension not supported."),l}}}function lT(s,e,i,r){const l={},u=new WeakMap;function d(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(x,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function p(x){const S=[],M=x.index,E=x.attributes.position;let R=0;if(M!==null){const U=M.array;R=M.version;for(let D=0,z=U.length;D<z;D+=3){const V=U[D+0],N=U[D+1],P=U[D+2];S.push(V,N,N,P,P,V)}}else if(E!==void 0){const U=E.array;R=E.version;for(let D=0,z=U.length/3-1;D<z;D+=3){const V=D+0,N=D+1,P=D+2;S.push(V,N,N,P,P,V)}}else return;const y=new(D_(S)?z_:P_)(S,1);y.version=R;const _=u.get(x);_&&e.remove(_),u.set(x,y)}function g(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function uT(s,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){s.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,S*d,E),i.update(M,r,E))}function g(S,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,E);let y=0;for(let _=0;_<E;_++)y+=M[_];i.update(y,r,1)}function x(S,M,E,R){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/d,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,R,0,E);let _=0;for(let U=0;U<E;U++)_+=M[U]*R[U];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function cT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:on("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function fT(s,e,i){const r=new WeakMap,l=new Xt;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let S=r.get(h);if(S===void 0||S.count!==x){let C=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let z=0;E===!0&&(z=1),R===!0&&(z=2),y===!0&&(z=3);let V=h.attributes.position.count*z,N=1;V>e.maxTextureSize&&(N=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const P=new Float32Array(V*N*4*x),$=new U_(P,V,N,x);$.type=fa,$.needsUpdate=!0;const w=z*4;for(let k=0;k<x;k++){const te=_[k],le=U[k],me=D[k],fe=V*N*4*k;for(let B=0;B<te.count;B++){const j=B*w;E===!0&&(l.fromBufferAttribute(te,B),P[fe+j+0]=l.x,P[fe+j+1]=l.y,P[fe+j+2]=l.z,P[fe+j+3]=0),R===!0&&(l.fromBufferAttribute(le,B),P[fe+j+4]=l.x,P[fe+j+5]=l.y,P[fe+j+6]=l.z,P[fe+j+7]=0),y===!0&&(l.fromBufferAttribute(me,B),P[fe+j+8]=l.x,P[fe+j+9]=l.y,P[fe+j+10]=l.z,P[fe+j+11]=me.itemSize===4?l.w:1)}}S={count:x,texture:$,size:new Lt(V,N)},r.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const R=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:u}}function dT(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const k_=new Pn,Pg=new H_(1,1),X_=new U_,W_=new Nb,q_=new I_,zg=[],Fg=[],Bg=new Float32Array(16),Ig=new Float32Array(9),Hg=new Float32Array(4);function Bs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=zg[l];if(u===void 0&&(u=new Float32Array(l),zg[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(u,h)}return u}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function _n(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function $u(s,e){let i=Fg[e];i===void 0&&(i=new Int32Array(e),Fg[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function hT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function pT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),_n(i,e)}}function mT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),_n(i,e)}}function xT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),_n(i,e)}}function gT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;Hg.set(r),s.uniformMatrix2fv(this.addr,!1,Hg),_n(i,r)}}function _T(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;Ig.set(r),s.uniformMatrix3fv(this.addr,!1,Ig),_n(i,r)}}function vT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;Bg.set(r),s.uniformMatrix4fv(this.addr,!1,Bg),_n(i,r)}}function ST(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function yT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),_n(i,e)}}function MT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),_n(i,e)}}function bT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),_n(i,e)}}function ET(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function TT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),_n(i,e)}}function AT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),_n(i,e)}}function RT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),_n(i,e)}}function CT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Pg.compareFunction=w_,u=Pg):u=k_,i.setTexture2D(e||u,l)}function wT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||W_,l)}function DT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||q_,l)}function UT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||X_,l)}function LT(s){switch(s){case 5126:return hT;case 35664:return pT;case 35665:return mT;case 35666:return xT;case 35674:return gT;case 35675:return _T;case 35676:return vT;case 5124:case 35670:return ST;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return bT;case 5125:return ET;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}function NT(s,e){s.uniform1fv(this.addr,e)}function OT(s,e){const i=Bs(e,this.size,2);s.uniform2fv(this.addr,i)}function PT(s,e){const i=Bs(e,this.size,3);s.uniform3fv(this.addr,i)}function zT(s,e){const i=Bs(e,this.size,4);s.uniform4fv(this.addr,i)}function FT(s,e){const i=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function BT(s,e){const i=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function IT(s,e){const i=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function HT(s,e){s.uniform1iv(this.addr,e)}function GT(s,e){s.uniform2iv(this.addr,e)}function VT(s,e){s.uniform3iv(this.addr,e)}function kT(s,e){s.uniform4iv(this.addr,e)}function XT(s,e){s.uniform1uiv(this.addr,e)}function WT(s,e){s.uniform2uiv(this.addr,e)}function qT(s,e){s.uniform3uiv(this.addr,e)}function YT(s,e){s.uniform4uiv(this.addr,e)}function jT(s,e,i){const r=this.cache,l=e.length,u=$u(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||k_,u[d])}function ZT(s,e,i){const r=this.cache,l=e.length,u=$u(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||W_,u[d])}function KT(s,e,i){const r=this.cache,l=e.length,u=$u(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||q_,u[d])}function QT(s,e,i){const r=this.cache,l=e.length,u=$u(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||X_,u[d])}function JT(s){switch(s){case 5126:return NT;case 35664:return OT;case 35665:return PT;case 35666:return zT;case 35674:return FT;case 35675:return BT;case 35676:return IT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return kT;case 5125:return XT;case 36294:return WT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}class $T{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=LT(i.type)}}class e2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JT(i.type)}}class t2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function Gg(s,e){s.seq.push(e),s.map[e.id]=e}function n2(s,e,i){const r=s.name,l=r.length;for(qd.lastIndex=0;;){const u=qd.exec(r),d=qd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Gg(i,p===void 0?new $T(h,s,e):new e2(h,s,e));break}else{let x=i.map[h];x===void 0&&(x=new t2(h),Gg(i,x)),i=x}}}class Gu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);n2(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Vg(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const i2=37297;let a2=0;function r2(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const kg=new dt;function s2(s){Ut._getMatrix(kg,Ut.workingColorSpace,s);const e=`mat3( ${kg.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(s)){case ku:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xg(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+r2(s.getShaderSource(e),h)}else return u}function o2(s,e){const i=s2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function l2(s,e){let i;switch(e){case ob:i="Linear";break;case lb:i="Reinhard";break;case ub:i="Cineon";break;case cb:i="ACESFilmic";break;case db:i="AgX";break;case hb:i="Neutral";break;case fb:i="Custom";break;default:lt("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ou=new re;function u2(){Ut.getLuminanceCoefficients(Ou);const s=Ou.x.toFixed(4),e=Ou.y.toFixed(4),i=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function f2(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function d2(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),d=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function Vo(s){return s!==""}function Wg(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(s){return s.replace(h2,m2)}const p2=new Map;function m2(s,e){let i=mt[e];if(i===void 0){const r=p2.get(e);if(r!==void 0)i=mt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bh(i)}const x2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(s){return s.replace(x2,g2)}function g2(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function jg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===__?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===HM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===la&&(e="SHADOWMAP_TYPE_VSM"),e}function v2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Ds:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function y2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case v_:e="ENVMAP_BLENDING_MULTIPLY";break;case rb:e="ENVMAP_BLENDING_MIX";break;case sb:e="ENVMAP_BLENDING_ADD";break}return e}function M2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function b2(s,e,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=_2(i),p=v2(i),g=S2(i),x=y2(i),S=M2(i),M=c2(i),E=f2(u),R=l.createProgram();let y,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(y=[jg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[jg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$a?"#define TONE_MAPPING":"",i.toneMapping!==$a?mt.tonemapping_pars_fragment:"",i.toneMapping!==$a?l2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,o2("linearToOutputTexel",i.outputColorSpace),u2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),d=Bh(d),d=Wg(d,i),d=qg(d,i),h=Bh(h),h=Wg(h,i),h=qg(h,i),d=Yg(d),h=Yg(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=U+y+d,z=U+_+h,V=Vg(l,l.VERTEX_SHADER,D),N=Vg(l,l.FRAGMENT_SHADER,z);l.attachShader(R,V),l.attachShader(R,N),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(k){if(s.debug.checkShaderErrors){const te=l.getProgramInfoLog(R)||"",le=l.getShaderInfoLog(V)||"",me=l.getShaderInfoLog(N)||"",fe=te.trim(),B=le.trim(),j=me.trim();let Y=!0,_e=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,V,N);else{const ve=Xg(l,V,"vertex"),O=Xg(l,N,"fragment");on("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+ve+`
`+O)}else fe!==""?lt("WebGLProgram: Program Info Log:",fe):(B===""||j==="")&&(_e=!1);_e&&(k.diagnostics={runnable:Y,programLog:fe,vertexShader:{log:B,prefix:y},fragmentShader:{log:j,prefix:_}})}l.deleteShader(V),l.deleteShader(N),$=new Gu(l,R),w=d2(l,R)}let $;this.getUniforms=function(){return $===void 0&&P(this),$};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,i2)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=a2++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=N,this}let E2=0;class T2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new A2(e),i.set(e,r)),r}}class A2{constructor(e){this.id=E2++,this.code=e,this.usedTimes=0}}function R2(s,e,i,r,l,u,d){const h=new L_,m=new T2,p=new Set,g=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,k,te,le){const me=te.fog,fe=le.geometry,B=w.isMeshStandardMaterial?te.environment:null,j=(w.isMeshStandardMaterial?i:e).get(w.envMap||B),Y=j&&j.mapping===Ku?j.image.height:null,_e=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ve=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,O=ve!==void 0?ve.length:0;let ae=0;fe.morphAttributes.position!==void 0&&(ae=1),fe.morphAttributes.normal!==void 0&&(ae=2),fe.morphAttributes.color!==void 0&&(ae=3);let Me,Te,Pe,ne;if(_e){const Rt=Di[_e];Me=Rt.vertexShader,Te=Rt.fragmentShader}else Me=w.vertexShader,Te=w.fragmentShader,m.update(w),Pe=m.getVertexShaderID(w),ne=m.getFragmentShaderID(w);const ue=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ge=le.isInstancedMesh===!0,We=le.isBatchedMesh===!0,ut=!!w.map,an=!!w.matcap,ht=!!j,At=!!w.aoMap,I=!!w.lightMap,pt=!!w.bumpMap,xt=!!w.normalMap,zt=!!w.displacementMap,Ve=!!w.emissiveMap,Wt=!!w.metalnessMap,Ze=!!w.roughnessMap,rt=w.anisotropy>0,L=w.clearcoat>0,b=w.dispersion>0,K=w.iridescence>0,he=w.sheen>0,Se=w.transmission>0,oe=rt&&!!w.anisotropyMap,Ye=L&&!!w.clearcoatMap,Le=L&&!!w.clearcoatNormalMap,Je=L&&!!w.clearcoatRoughnessMap,qe=K&&!!w.iridescenceMap,ye=K&&!!w.iridescenceThicknessMap,Ee=he&&!!w.sheenColorMap,je=he&&!!w.sheenRoughnessMap,ke=!!w.specularMap,Oe=!!w.specularColorMap,it=!!w.specularIntensityMap,H=Se&&!!w.transmissionMap,De=Se&&!!w.thicknessMap,Re=!!w.gradientMap,Ce=!!w.alphaMap,be=w.alphaTest>0,xe=!!w.alphaHash,Fe=!!w.extensions;let at=$a;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(at=s.toneMapping);const It={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:Me,fragmentShader:Te,defines:w.defines,customVertexShaderID:Pe,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:We,batchingColor:We&&le._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&le.instanceColor!==null,instancingMorph:Ge&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Us,alphaToCoverage:!!w.alphaToCoverage,map:ut,matcap:an,envMap:ht,envMapMode:ht&&j.mapping,envMapCubeUVHeight:Y,aoMap:At,lightMap:I,bumpMap:pt,normalMap:xt,displacementMap:S&&zt,emissiveMap:Ve,normalMapObjectSpace:xt&&w.normalMapType===gb,normalMapTangentSpace:xt&&w.normalMapType===C_,metalnessMap:Wt,roughnessMap:Ze,anisotropy:rt,anisotropyMap:oe,clearcoat:L,clearcoatMap:Ye,clearcoatNormalMap:Le,clearcoatRoughnessMap:Je,dispersion:b,iridescence:K,iridescenceMap:qe,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:je,specularMap:ke,specularColorMap:Oe,specularIntensityMap:it,transmission:Se,transmissionMap:H,thicknessMap:De,gradientMap:Re,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:be,alphaHash:xe,combine:w.combine,mapUv:ut&&R(w.map.channel),aoMapUv:At&&R(w.aoMap.channel),lightMapUv:I&&R(w.lightMap.channel),bumpMapUv:pt&&R(w.bumpMap.channel),normalMapUv:xt&&R(w.normalMap.channel),displacementMapUv:zt&&R(w.displacementMap.channel),emissiveMapUv:Ve&&R(w.emissiveMap.channel),metalnessMapUv:Wt&&R(w.metalnessMap.channel),roughnessMapUv:Ze&&R(w.roughnessMap.channel),anisotropyMapUv:oe&&R(w.anisotropyMap.channel),clearcoatMapUv:Ye&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:je&&R(w.sheenRoughnessMap.channel),specularMapUv:ke&&R(w.specularMap.channel),specularColorMapUv:Oe&&R(w.specularColorMap.channel),specularIntensityMapUv:it&&R(w.specularIntensityMap.channel),transmissionMapUv:H&&R(w.transmissionMap.channel),thicknessMapUv:De&&R(w.thicknessMap.channel),alphaMapUv:Ce&&R(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(xt||rt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!fe.attributes.uv&&(ut||Ce),fog:!!me,useFog:w.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:we,skinning:le.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:ut&&w.map.isVideoTexture===!0&&Ut.getTransfer(w.map.colorSpace)===kt,decodeVideoTextureEmissive:Ve&&w.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(w.emissiveMap.colorSpace)===kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ua,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||We)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)C.push(k),C.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(U(C,w),D(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function U(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function D(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function z(w){const C=E[w.type];let k;if(C){const te=Di[C];k=Yb.clone(te.uniforms)}else k=w.uniforms;return k}function V(w,C){let k;for(let te=0,le=g.length;te<le;te++){const me=g[te];if(me.cacheKey===C){k=me,++k.usedTimes;break}}return k===void 0&&(k=new b2(s,C,w,u),g.push(k)),k}function N(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function P(w){m.remove(w)}function $(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:z,acquireProgram:V,releaseProgram:N,releaseShaderCache:P,programs:g,dispose:$}}function C2(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function w2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Kg(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(x,S,M,E,R,y){let _=s[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:E,renderOrder:x.renderOrder,z:R,group:y},s[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=R,_.group=y),e++,_}function h(x,S,M,E,R,y){const _=d(x,S,M,E,R,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,S,M,E,R,y){const _=d(x,S,M,E,R,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,S){i.length>1&&i.sort(x||w2),r.length>1&&r.sort(S||Zg),l.length>1&&l.sort(S||Zg)}function g(){for(let x=e,S=s.length;x<S;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function D2(){let s=new WeakMap;function e(r,l){const u=s.get(r);let d;return u===void 0?(d=new Kg,s.set(r,[d])):l>=u.length?(d=new Kg,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function U2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Ot};break;case"SpotLight":i={position:new re,direction:new re,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=i,i}}}function L2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let N2=0;function O2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function P2(s){const e=new U2,i=L2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,u=new nn,d=new nn;function h(p){let g=0,x=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,E=0,R=0,y=0,_=0,U=0,D=0,z=0,V=0,N=0,P=0;p.sort(O2);for(let w=0,C=p.length;w<C;w++){const k=p[w],te=k.color,le=k.intensity,me=k.distance,fe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=te.r*le,x+=te.g*le,S+=te.b*le;else if(k.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(k.sh.coefficients[B],le);P++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const j=k.shadow,Y=i.get(k);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=fe,r.directionalShadowMatrix[M]=k.shadow.matrix,U++}r.directional[M]=B,M++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(te).multiplyScalar(le),B.distance=me,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,r.spot[R]=B;const j=k.shadow;if(k.map&&(r.spotLightMap[V]=k.map,V++,j.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[R]=j.matrix,k.castShadow){const Y=i.get(k);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=fe,z++}R++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(te).multiplyScalar(le),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=B,y++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const j=k.shadow,Y=i.get(k);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=fe,r.pointShadowMatrix[E]=k.shadow.matrix,D++}r.point[E]=B,E++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(le),B.groundColor.copy(k.groundColor).multiplyScalar(le),r.hemi[_]=B,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=S;const $=r.hash;($.directionalLength!==M||$.pointLength!==E||$.spotLength!==R||$.rectAreaLength!==y||$.hemiLength!==_||$.numDirectionalShadows!==U||$.numPointShadows!==D||$.numSpotShadows!==z||$.numSpotMaps!==V||$.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=z,r.spotShadowMap.length=z,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=z+V-N,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=P,$.directionalLength=M,$.pointLength=E,$.spotLength=R,$.rectAreaLength=y,$.hemiLength=_,$.numDirectionalShadows=U,$.numPointShadows=D,$.numSpotShadows=z,$.numSpotMaps=V,$.numLightProbes=P,r.version=N2++)}function m(p,g){let x=0,S=0,M=0,E=0,R=0;const y=g.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const D=p[_];if(D.isDirectionalLight){const z=r.directional[x];z.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),x++}else if(D.isSpotLight){const z=r.spot[M];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(y),z.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const z=r.rectArea[E];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(y),d.identity(),u.copy(D.matrixWorld),u.premultiply(y),d.extractRotation(u),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),E++}else if(D.isPointLight){const z=r.point[S];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(y),S++}else if(D.isHemisphereLight){const z=r.hemi[R];z.direction.setFromMatrixPosition(D.matrixWorld),z.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function Qg(s){const e=new P2(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function z2(s){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new Qg(s),e.set(l,[h])):u>=d.length?(h=new Qg(s),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const F2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B2=`uniform sampler2D shadow_pass;
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
}`;function I2(s,e,i){let r=new np;const l=new Lt,u=new Lt,d=new Xt,h=new r3({depthPacking:xb}),m=new s3,p={},g=i.maxTextureSize,x={[er]:kn,[kn]:er,[ua]:ua},S=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:F2,fragmentShader:B2}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new tr;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new xa(E,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=__;let _=this.type;this.render=function(N,P,$){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),te=s.state;te.setBlending(ha),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const le=_!==la&&this.type===la,me=_===la&&this.type!==la;for(let fe=0,B=N.length;fe<B;fe++){const j=N[fe],Y=j.shadow;if(Y===void 0){lt("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const _e=Y.getFrameExtents();if(l.multiply(_e),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/_e.x),l.x=u.x*_e.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/_e.y),l.y=u.y*_e.y,Y.mapSize.y=u.y)),Y.map===null||le===!0||me===!0){const O=this.type!==la?{minFilter:ii,magFilter:ii}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Lr(l.x,l.y,O),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const ve=Y.getViewportCount();for(let O=0;O<ve;O++){const ae=Y.getViewport(O);d.set(u.x*ae.x,u.y*ae.y,u.x*ae.z,u.y*ae.w),te.viewport(d),Y.updateMatrices(j,O),r=Y.getFrustum(),z(P,$,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===la&&U(Y,$),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(w,C,k)};function U(N,P){const $=e.update(R);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Lr(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(P,null,$,S,R,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(P,null,$,M,R,null)}function D(N,P,$,w){let C=null;const k=$.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)C=k;else if(C=$.isPointLight===!0?m:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const te=C.uuid,le=P.uuid;let me=p[te];me===void 0&&(me={},p[te]=me);let fe=me[le];fe===void 0&&(fe=C.clone(),me[le]=fe,P.addEventListener("dispose",V)),C=fe}if(C.visible=P.visible,C.wireframe=P.wireframe,w===la?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:x[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,$.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const te=s.properties.get(C);te.light=$}return C}function z(N,P,$,w,C){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===la)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,N.matrixWorld);const le=e.update(N),me=N.material;if(Array.isArray(me)){const fe=le.groups;for(let B=0,j=fe.length;B<j;B++){const Y=fe[B],_e=me[Y.materialIndex];if(_e&&_e.visible){const ve=D(N,_e,w,C);N.onBeforeShadow(s,N,P,$,le,ve,Y),s.renderBufferDirect($,null,le,ve,N,Y),N.onAfterShadow(s,N,P,$,le,ve,Y)}}}else if(me.visible){const fe=D(N,me,w,C);N.onBeforeShadow(s,N,P,$,le,fe,null),s.renderBufferDirect($,null,le,fe,N,null),N.onAfterShadow(s,N,P,$,le,fe,null)}}const te=N.children;for(let le=0,me=te.length;le<me;le++)z(te[le],P,$,w,C)}function V(N){N.target.removeEventListener("dispose",V);for(const $ in p){const w=p[$],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const H2={[Jd]:$d,[eh]:ih,[th]:ah,[Cs]:nh,[$d]:Jd,[ih]:eh,[ah]:th,[nh]:Cs};function G2(s,e){function i(){let H=!1;const De=new Xt;let Re=null;const Ce=new Xt(0,0,0,0);return{setMask:function(be){Re!==be&&!H&&(s.colorMask(be,be,be,be),Re=be)},setLocked:function(be){H=be},setClear:function(be,xe,Fe,at,It){It===!0&&(be*=at,xe*=at,Fe*=at),De.set(be,xe,Fe,at),Ce.equals(De)===!1&&(s.clearColor(be,xe,Fe,at),Ce.copy(De))},reset:function(){H=!1,Re=null,Ce.set(-1,0,0,0)}}}function r(){let H=!1,De=!1,Re=null,Ce=null,be=null;return{setReversed:function(xe){if(De!==xe){const Fe=e.get("EXT_clip_control");xe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const at=be;be=null,this.setClear(at)}},getReversed:function(){return De},setTest:function(xe){xe?ue(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(xe){Re!==xe&&!H&&(s.depthMask(xe),Re=xe)},setFunc:function(xe){if(De&&(xe=H2[xe]),Ce!==xe){switch(xe){case Jd:s.depthFunc(s.NEVER);break;case $d:s.depthFunc(s.ALWAYS);break;case eh:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case th:s.depthFunc(s.EQUAL);break;case nh:s.depthFunc(s.GEQUAL);break;case ih:s.depthFunc(s.GREATER);break;case ah:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=xe}},setLocked:function(xe){H=xe},setClear:function(xe){be!==xe&&(De&&(xe=1-xe),s.clearDepth(xe),be=xe)},reset:function(){H=!1,Re=null,Ce=null,be=null,De=!1}}}function l(){let H=!1,De=null,Re=null,Ce=null,be=null,xe=null,Fe=null,at=null,It=null;return{setTest:function(Rt){H||(Rt?ue(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Rt){De!==Rt&&!H&&(s.stencilMask(Rt),De=Rt)},setFunc:function(Rt,wn,Wn){(Re!==Rt||Ce!==wn||be!==Wn)&&(s.stencilFunc(Rt,wn,Wn),Re=Rt,Ce=wn,be=Wn)},setOp:function(Rt,wn,Wn){(xe!==Rt||Fe!==wn||at!==Wn)&&(s.stencilOp(Rt,wn,Wn),xe=Rt,Fe=wn,at=Wn)},setLocked:function(Rt){H=Rt},setClear:function(Rt){It!==Rt&&(s.clearStencil(Rt),It=Rt)},reset:function(){H=!1,De=null,Re=null,Ce=null,be=null,xe=null,Fe=null,at=null,It=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},S=new WeakMap,M=[],E=null,R=!1,y=null,_=null,U=null,D=null,z=null,V=null,N=null,P=new Ot(0,0,0),$=0,w=!1,C=null,k=null,te=null,le=null,me=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=j>=2);let _e=null,ve={};const O=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),Me=new Xt().fromArray(O),Te=new Xt().fromArray(ae);function Pe(H,De,Re,Ce){const be=new Uint8Array(4),xe=s.createTexture();s.bindTexture(H,xe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<Re;Fe++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(De+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return xe}const ne={};ne[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(s.DEPTH_TEST),d.setFunc(Cs),pt(!1),xt(eg),ue(s.CULL_FACE),At(ha);function ue(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function we(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function Ge(H,De){return x[H]!==De?(s.bindFramebuffer(H,De),x[H]=De,H===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=De),H===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=De),!0):!1}function We(H,De){let Re=M,Ce=!1;if(H){Re=S.get(De),Re===void 0&&(Re=[],S.set(De,Re));const be=H.textures;if(Re.length!==be.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Fe=be.length;xe<Fe;xe++)Re[xe]=s.COLOR_ATTACHMENT0+xe;Re.length=be.length,Ce=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(Re)}function ut(H){return E!==H?(s.useProgram(H),E=H,!0):!1}const an={[Rr]:s.FUNC_ADD,[VM]:s.FUNC_SUBTRACT,[kM]:s.FUNC_REVERSE_SUBTRACT};an[XM]=s.MIN,an[WM]=s.MAX;const ht={[qM]:s.ZERO,[YM]:s.ONE,[jM]:s.SRC_COLOR,[Kd]:s.SRC_ALPHA,[eb]:s.SRC_ALPHA_SATURATE,[JM]:s.DST_COLOR,[KM]:s.DST_ALPHA,[ZM]:s.ONE_MINUS_SRC_COLOR,[Qd]:s.ONE_MINUS_SRC_ALPHA,[$M]:s.ONE_MINUS_DST_COLOR,[QM]:s.ONE_MINUS_DST_ALPHA,[tb]:s.CONSTANT_COLOR,[nb]:s.ONE_MINUS_CONSTANT_COLOR,[ib]:s.CONSTANT_ALPHA,[ab]:s.ONE_MINUS_CONSTANT_ALPHA};function At(H,De,Re,Ce,be,xe,Fe,at,It,Rt){if(H===ha){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(ue(s.BLEND),R=!0),H!==GM){if(H!==y||Rt!==w){if((_!==Rr||z!==Rr)&&(s.blendEquation(s.FUNC_ADD),_=Rr,z=Rr),Rt)switch(H){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tg:s.blendFunc(s.ONE,s.ONE);break;case ng:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ig:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:on("WebGLState: Invalid blending: ",H);break}else switch(H){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ng:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ig:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",H);break}U=null,D=null,V=null,N=null,P.set(0,0,0),$=0,y=H,w=Rt}return}be=be||De,xe=xe||Re,Fe=Fe||Ce,(De!==_||be!==z)&&(s.blendEquationSeparate(an[De],an[be]),_=De,z=be),(Re!==U||Ce!==D||xe!==V||Fe!==N)&&(s.blendFuncSeparate(ht[Re],ht[Ce],ht[xe],ht[Fe]),U=Re,D=Ce,V=xe,N=Fe),(at.equals(P)===!1||It!==$)&&(s.blendColor(at.r,at.g,at.b,It),P.copy(at),$=It),y=H,w=!1}function I(H,De){H.side===ua?we(s.CULL_FACE):ue(s.CULL_FACE);let Re=H.side===kn;De&&(Re=!Re),pt(Re),H.blending===As&&H.transparent===!1?At(ha):At(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const Ce=H.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){C!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),C=H)}function xt(H){H!==BM?(ue(s.CULL_FACE),H!==k&&(H===eg?s.cullFace(s.BACK):H===IM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),k=H}function zt(H){H!==te&&(B&&s.lineWidth(H),te=H)}function Ve(H,De,Re){H?(ue(s.POLYGON_OFFSET_FILL),(le!==De||me!==Re)&&(s.polygonOffset(De,Re),le=De,me=Re)):we(s.POLYGON_OFFSET_FILL)}function Wt(H){H?ue(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Ze(H){H===void 0&&(H=s.TEXTURE0+fe-1),_e!==H&&(s.activeTexture(H),_e=H)}function rt(H,De,Re){Re===void 0&&(_e===null?Re=s.TEXTURE0+fe-1:Re=_e);let Ce=ve[Re];Ce===void 0&&(Ce={type:void 0,texture:void 0},ve[Re]=Ce),(Ce.type!==H||Ce.texture!==De)&&(_e!==Re&&(s.activeTexture(Re),_e=Re),s.bindTexture(H,De||ne[H]),Ce.type=H,Ce.texture=De)}function L(){const H=ve[_e];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function he(){try{s.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Se(){try{s.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Le(){try{s.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Je(){try{s.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function qe(){try{s.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ye(){try{s.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(H){Me.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Me.copy(H))}function je(H){Te.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Te.copy(H))}function ke(H,De){let Re=p.get(De);Re===void 0&&(Re=new WeakMap,p.set(De,Re));let Ce=Re.get(H);Ce===void 0&&(Ce=s.getUniformBlockIndex(De,H.name),Re.set(H,Ce))}function Oe(H,De){const Ce=p.get(De).get(H);m.get(De)!==Ce&&(s.uniformBlockBinding(De,Ce,H.__bindingPointIndex),m.set(De,Ce))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},_e=null,ve={},x={},S=new WeakMap,M=[],E=null,R=!1,y=null,_=null,U=null,D=null,z=null,V=null,N=null,P=new Ot(0,0,0),$=0,w=!1,C=null,k=null,te=null,le=null,me=null,Me.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ue,disable:we,bindFramebuffer:Ge,drawBuffers:We,useProgram:ut,setBlending:At,setMaterial:I,setFlipSided:pt,setCullFace:xt,setLineWidth:zt,setPolygonOffset:Ve,setScissorTest:Wt,activeTexture:Ze,bindTexture:rt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:qe,texImage3D:ye,updateUBOMapping:ke,uniformBlockBinding:Oe,texStorage2D:Le,texStorage3D:Je,texSubImage2D:he,texSubImage3D:Se,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ye,scissor:Ee,viewport:je,reset:it}}function V2(s,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,g=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return M?new OffscreenCanvas(L,b):Wu("canvas")}function R(L,b,K){let he=1;const Se=rt(L);if((Se.width>K||Se.height>K)&&(he=K/Math.max(Se.width,Se.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const oe=Math.floor(he*Se.width),Ye=Math.floor(he*Se.height);x===void 0&&(x=E(oe,Ye));const Le=b?E(oe,Ye):x;return Le.width=oe,Le.height=Ye,Le.getContext("2d").drawImage(L,0,0,oe,Ye),lt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+oe+"x"+Ye+")."),Le}else return"data"in L&&lt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,b,K,he,Se=!1){if(L!==null){if(s[L]!==void 0)return s[L];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=b;if(b===s.RED&&(K===s.FLOAT&&(oe=s.R32F),K===s.HALF_FLOAT&&(oe=s.R16F),K===s.UNSIGNED_BYTE&&(oe=s.R8)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.R8UI),K===s.UNSIGNED_SHORT&&(oe=s.R16UI),K===s.UNSIGNED_INT&&(oe=s.R32UI),K===s.BYTE&&(oe=s.R8I),K===s.SHORT&&(oe=s.R16I),K===s.INT&&(oe=s.R32I)),b===s.RG&&(K===s.FLOAT&&(oe=s.RG32F),K===s.HALF_FLOAT&&(oe=s.RG16F),K===s.UNSIGNED_BYTE&&(oe=s.RG8)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RG8UI),K===s.UNSIGNED_SHORT&&(oe=s.RG16UI),K===s.UNSIGNED_INT&&(oe=s.RG32UI),K===s.BYTE&&(oe=s.RG8I),K===s.SHORT&&(oe=s.RG16I),K===s.INT&&(oe=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),K===s.UNSIGNED_INT&&(oe=s.RGB32UI),K===s.BYTE&&(oe=s.RGB8I),K===s.SHORT&&(oe=s.RGB16I),K===s.INT&&(oe=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),K===s.UNSIGNED_INT&&(oe=s.RGBA32UI),K===s.BYTE&&(oe=s.RGBA8I),K===s.SHORT&&(oe=s.RGBA16I),K===s.INT&&(oe=s.RGBA32I)),b===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),b===s.RGBA){const Ye=Se?ku:Ut.getTransfer(he);K===s.FLOAT&&(oe=s.RGBA32F),K===s.HALF_FLOAT&&(oe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(oe=Ye===kt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function z(L,b){let K;return L?b===null||b===Ur||b===Wo?K=s.DEPTH24_STENCIL8:b===fa?K=s.DEPTH32F_STENCIL8:b===Xo&&(K=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ur||b===Wo?K=s.DEPTH_COMPONENT24:b===fa?K=s.DEPTH_COMPONENT32F:b===Xo&&(K=s.DEPTH_COMPONENT16),K}function V(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==ii&&L.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function N(L){const b=L.target;b.removeEventListener("dispose",N),$(b),b.isVideoTexture&&g.delete(b)}function P(L){const b=L.target;b.removeEventListener("dispose",P),C(b)}function $(L){const b=r.get(L);if(b.__webglInit===void 0)return;const K=L.source,he=S.get(K);if(he){const Se=he[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&w(L),Object.keys(he).length===0&&S.delete(K)}r.remove(L)}function w(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const K=L.source,he=S.get(K);delete he[b.__cacheKey],d.memory.textures--}function C(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let Se=0;Se<b.__webglFramebuffer[he].length;Se++)s.deleteFramebuffer(b.__webglFramebuffer[he][Se]);else s.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)s.deleteFramebuffer(b.__webglFramebuffer[he]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=L.textures;for(let he=0,Se=K.length;he<Se;he++){const oe=r.get(K[he]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),d.memory.textures--),r.remove(K[he])}r.remove(L)}let k=0;function te(){k=0}function le(){const L=k;return L>=l.maxTextures&&lt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),k+=1,L}function me(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function fe(L,b){const K=r.get(L);if(L.isVideoTexture&&Wt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const he=L.image;if(he===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(K,L,b);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function B(L,b){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){ne(K,L,b);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function j(L,b){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){ne(K,L,b);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const K=r.get(L);if(L.version>0&&K.__version!==L.version){ue(K,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const _e={[oh]:s.REPEAT,[ca]:s.CLAMP_TO_EDGE,[lh]:s.MIRRORED_REPEAT},ve={[ii]:s.NEAREST,[pb]:s.NEAREST_MIPMAP_NEAREST,[pu]:s.NEAREST_MIPMAP_LINEAR,[pi]:s.LINEAR,[md]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},O={[_b]:s.NEVER,[Eb]:s.ALWAYS,[vb]:s.LESS,[w_]:s.LEQUAL,[Sb]:s.EQUAL,[bb]:s.GEQUAL,[yb]:s.GREATER,[Mb]:s.NOTEQUAL};function ae(L,b){if(b.type===fa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pi||b.magFilter===md||b.magFilter===pu||b.magFilter===wr||b.minFilter===pi||b.minFilter===md||b.minFilter===pu||b.minFilter===wr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,_e[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,_e[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,_e[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ve[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ii||b.minFilter!==pu&&b.minFilter!==wr||b.type===fa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Me(L,b){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",N));const he=b.source;let Se=S.get(he);Se===void 0&&(Se={},S.set(he,Se));const oe=me(b);if(oe!==L.__cacheKey){Se[oe]===void 0&&(Se[oe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,K=!0),Se[oe].usedTimes++;const Ye=Se[L.__cacheKey];Ye!==void 0&&(Se[L.__cacheKey].usedTimes--,Ye.usedTimes===0&&w(b)),L.__cacheKey=oe,L.__webglTexture=Se[oe].texture}return K}function Te(L,b,K){return Math.floor(Math.floor(L/K)/b)}function Pe(L,b,K,he){const oe=L.updateRanges;if(oe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,K,he,b.data);else{oe.sort((ye,Ee)=>ye.start-Ee.start);let Ye=0;for(let ye=1;ye<oe.length;ye++){const Ee=oe[Ye],je=oe[ye],ke=Ee.start+Ee.count,Oe=Te(je.start,b.width,4),it=Te(Ee.start,b.width,4);je.start<=ke+1&&Oe===it&&Te(je.start+je.count-1,b.width,4)===Oe?Ee.count=Math.max(Ee.count,je.start+je.count-Ee.start):(++Ye,oe[Ye]=je)}oe.length=Ye+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),Je=s.getParameter(s.UNPACK_SKIP_PIXELS),qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ye=0,Ee=oe.length;ye<Ee;ye++){const je=oe[ye],ke=Math.floor(je.start/4),Oe=Math.ceil(je.count/4),it=ke%b.width,H=Math.floor(ke/b.width),De=Oe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,it),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),i.texSubImage2D(s.TEXTURE_2D,0,it,H,De,Re,K,he,b.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,qe)}}function ne(L,b,K){let he=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=s.TEXTURE_3D);const Se=Me(L,b),oe=b.source;i.bindTexture(he,L.__webglTexture,s.TEXTURE0+K);const Ye=r.get(oe);if(oe.version!==Ye.__version||Se===!0){i.activeTexture(s.TEXTURE0+K);const Le=Ut.getPrimaries(Ut.workingColorSpace),Je=b.colorSpace===Ka?null:Ut.getPrimaries(b.colorSpace),qe=b.colorSpace===Ka||Le===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ye=R(b.image,!1,l.maxTextureSize);ye=Ze(b,ye);const Ee=u.convert(b.format,b.colorSpace),je=u.convert(b.type);let ke=D(b.internalFormat,Ee,je,b.colorSpace,b.isVideoTexture);ae(he,b);let Oe;const it=b.mipmaps,H=b.isVideoTexture!==!0,De=Ye.__version===void 0||Se===!0,Re=oe.dataReady,Ce=V(b,ye);if(b.isDepthTexture)ke=z(b.format===Yo,b.type),De&&(H?i.texStorage2D(s.TEXTURE_2D,1,ke,ye.width,ye.height):i.texImage2D(s.TEXTURE_2D,0,ke,ye.width,ye.height,0,Ee,je,null));else if(b.isDataTexture)if(it.length>0){H&&De&&i.texStorage2D(s.TEXTURE_2D,Ce,ke,it[0].width,it[0].height);for(let be=0,xe=it.length;be<xe;be++)Oe=it[be],H?Re&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ee,je,Oe.data):i.texImage2D(s.TEXTURE_2D,be,ke,Oe.width,Oe.height,0,Ee,je,Oe.data);b.generateMipmaps=!1}else H?(De&&i.texStorage2D(s.TEXTURE_2D,Ce,ke,ye.width,ye.height),Re&&Pe(b,ye,Ee,je)):i.texImage2D(s.TEXTURE_2D,0,ke,ye.width,ye.height,0,Ee,je,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,ke,it[0].width,it[0].height,ye.depth);for(let be=0,xe=it.length;be<xe;be++)if(Oe=it[be],b.format!==bi)if(Ee!==null)if(H){if(Re)if(b.layerUpdates.size>0){const Fe=Cg(Oe.width,Oe.height,b.format,b.type);for(const at of b.layerUpdates){const It=Oe.data.subarray(at*Fe/Oe.data.BYTES_PER_ELEMENT,(at+1)*Fe/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,at,Oe.width,Oe.height,1,Ee,It)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Oe.width,Oe.height,ye.depth,Ee,Oe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,ke,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Oe.width,Oe.height,ye.depth,Ee,je,Oe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,be,ke,Oe.width,Oe.height,ye.depth,0,Ee,je,Oe.data)}else{H&&De&&i.texStorage2D(s.TEXTURE_2D,Ce,ke,it[0].width,it[0].height);for(let be=0,xe=it.length;be<xe;be++)Oe=it[be],b.format!==bi?Ee!==null?H?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ee,Oe.data):i.compressedTexImage2D(s.TEXTURE_2D,be,ke,Oe.width,Oe.height,0,Oe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Re&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ee,je,Oe.data):i.texImage2D(s.TEXTURE_2D,be,ke,Oe.width,Oe.height,0,Ee,je,Oe.data)}else if(b.isDataArrayTexture)if(H){if(De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,ke,ye.width,ye.height,ye.depth),Re)if(b.layerUpdates.size>0){const be=Cg(ye.width,ye.height,b.format,b.type);for(const xe of b.layerUpdates){const Fe=ye.data.subarray(xe*be/ye.data.BYTES_PER_ELEMENT,(xe+1)*be/ye.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,ye.width,ye.height,1,Ee,je,Fe)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ee,je,ye.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,ye.width,ye.height,ye.depth,0,Ee,je,ye.data);else if(b.isData3DTexture)H?(De&&i.texStorage3D(s.TEXTURE_3D,Ce,ke,ye.width,ye.height,ye.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ee,je,ye.data)):i.texImage3D(s.TEXTURE_3D,0,ke,ye.width,ye.height,ye.depth,0,Ee,je,ye.data);else if(b.isFramebufferTexture){if(De)if(H)i.texStorage2D(s.TEXTURE_2D,Ce,ke,ye.width,ye.height);else{let be=ye.width,xe=ye.height;for(let Fe=0;Fe<Ce;Fe++)i.texImage2D(s.TEXTURE_2D,Fe,ke,be,xe,0,Ee,je,null),be>>=1,xe>>=1}}else if(it.length>0){if(H&&De){const be=rt(it[0]);i.texStorage2D(s.TEXTURE_2D,Ce,ke,be.width,be.height)}for(let be=0,xe=it.length;be<xe;be++)Oe=it[be],H?Re&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Ee,je,Oe):i.texImage2D(s.TEXTURE_2D,be,ke,Ee,je,Oe);b.generateMipmaps=!1}else if(H){if(De){const be=rt(ye);i.texStorage2D(s.TEXTURE_2D,Ce,ke,be.width,be.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,je,ye)}else i.texImage2D(s.TEXTURE_2D,0,ke,Ee,je,ye);y(b)&&_(he),Ye.__version=oe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ue(L,b,K){if(b.image.length!==6)return;const he=Me(L,b),Se=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const oe=r.get(Se);if(Se.version!==oe.__version||he===!0){i.activeTexture(s.TEXTURE0+K);const Ye=Ut.getPrimaries(Ut.workingColorSpace),Le=b.colorSpace===Ka?null:Ut.getPrimaries(b.colorSpace),Je=b.colorSpace===Ka||Ye===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const qe=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let xe=0;xe<6;xe++)!qe&&!ye?Ee[xe]=R(b.image[xe],!0,l.maxCubemapSize):Ee[xe]=ye?b.image[xe].image:b.image[xe],Ee[xe]=Ze(b,Ee[xe]);const je=Ee[0],ke=u.convert(b.format,b.colorSpace),Oe=u.convert(b.type),it=D(b.internalFormat,ke,Oe,b.colorSpace),H=b.isVideoTexture!==!0,De=oe.__version===void 0||he===!0,Re=Se.dataReady;let Ce=V(b,je);ae(s.TEXTURE_CUBE_MAP,b);let be;if(qe){H&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,it,je.width,je.height);for(let xe=0;xe<6;xe++){be=Ee[xe].mipmaps;for(let Fe=0;Fe<be.length;Fe++){const at=be[Fe];b.format!==bi?ke!==null?H?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,0,0,at.width,at.height,ke,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,it,at.width,at.height,0,at.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,0,0,at.width,at.height,ke,Oe,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,it,at.width,at.height,0,ke,Oe,at.data)}}}else{if(be=b.mipmaps,H&&De){be.length>0&&Ce++;const xe=rt(Ee[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,it,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(ye){H?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ee[xe].width,Ee[xe].height,ke,Oe,Ee[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,it,Ee[xe].width,Ee[xe].height,0,ke,Oe,Ee[xe].data);for(let Fe=0;Fe<be.length;Fe++){const It=be[Fe].image[xe].image;H?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,0,0,It.width,It.height,ke,Oe,It.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,it,It.width,It.height,0,ke,Oe,It.data)}}else{H?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ke,Oe,Ee[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,it,ke,Oe,Ee[xe]);for(let Fe=0;Fe<be.length;Fe++){const at=be[Fe];H?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,0,0,ke,Oe,at.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,it,ke,Oe,at.image[xe])}}}y(b)&&_(s.TEXTURE_CUBE_MAP),oe.__version=Se.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function we(L,b,K,he,Se,oe){const Ye=u.convert(K.format,K.colorSpace),Le=u.convert(K.type),Je=D(K.internalFormat,Ye,Le,K.colorSpace),qe=r.get(b),ye=r.get(K);if(ye.__renderTarget=b,!qe.__hasExternalTextures){const Ee=Math.max(1,b.width>>oe),je=Math.max(1,b.height>>oe);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?i.texImage3D(Se,oe,Je,Ee,je,b.depth,0,Ye,Le,null):i.texImage2D(Se,oe,Je,Ee,je,0,Ye,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Ve(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,Se,ye.__webglTexture,0,zt(b)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,Se,ye.__webglTexture,oe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(L,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const he=b.depthTexture,Se=he&&he.isDepthTexture?he.type:null,oe=z(b.stencilBuffer,Se),Ye=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=zt(b);Ve(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,oe,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,oe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,L)}else{const he=b.textures;for(let Se=0;Se<he.length;Se++){const oe=he[Se],Ye=u.convert(oe.format,oe.colorSpace),Le=u.convert(oe.type),Je=D(oe.internalFormat,Ye,Le,oe.colorSpace),qe=zt(b);K&&Ve(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Je,b.width,b.height):Ve(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,Je,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Je,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(b.depthTexture);he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe(b.depthTexture,0);const Se=he.__webglTexture,oe=zt(b);if(b.depthTexture.format===qo)Ve(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(b.depthTexture.format===Yo)Ve(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function ut(L){const b=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",Se)};he.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=he}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const he=L.texture.mipmaps;he&&he.length>0?We(b.__webglFramebuffer[0],L):We(b.__webglFramebuffer,L)}else if(K){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=s.createRenderbuffer(),Ge(b.__webglDepthbuffer[he],L,!1);else{const Se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,oe)}}else{const he=L.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ge(b.__webglDepthbuffer,L,!1);else{const Se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,oe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function an(L,b,K){const he=r.get(L);b!==void 0&&we(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&ut(L)}function ht(L){const b=L.texture,K=r.get(L),he=r.get(b);L.addEventListener("dispose",P);const Se=L.textures,oe=L.isWebGLCubeRenderTarget===!0,Ye=Se.length>1;if(Ye||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=b.version,d.memory.textures++),oe){K.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Le]=[];for(let Je=0;Je<b.mipmaps.length;Je++)K.__webglFramebuffer[Le][Je]=s.createFramebuffer()}else K.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Le=0;Le<b.mipmaps.length;Le++)K.__webglFramebuffer[Le]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let Le=0,Je=Se.length;Le<Je;Le++){const qe=r.get(Se[Le]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&Ve(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Le=0;Le<Se.length;Le++){const Je=Se[Le];K.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Le]);const qe=u.convert(Je.format,Je.colorSpace),ye=u.convert(Je.type),Ee=D(Je.internalFormat,qe,ye,Je.colorSpace,L.isXRRenderTarget===!0),je=zt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Ee,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,K.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(K.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){i.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ae(s.TEXTURE_CUBE_MAP,b);for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Je=0;Je<b.mipmaps.length;Je++)we(K.__webglFramebuffer[Le][Je],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Je);else we(K.__webglFramebuffer[Le],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let Le=0,Je=Se.length;Le<Je;Le++){const qe=Se[Le],ye=r.get(qe);let Ee=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ee,ye.__webglTexture),ae(Ee,qe),we(K.__webglFramebuffer,L,qe,s.COLOR_ATTACHMENT0+Le,Ee,0),y(qe)&&_(Ee)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Le=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,he.__webglTexture),ae(Le,b),b.mipmaps&&b.mipmaps.length>0)for(let Je=0;Je<b.mipmaps.length;Je++)we(K.__webglFramebuffer[Je],L,b,s.COLOR_ATTACHMENT0,Le,Je);else we(K.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Le,0);y(b)&&_(Le),i.unbindTexture()}L.depthBuffer&&ut(L)}function At(L){const b=L.textures;for(let K=0,he=b.length;K<he;K++){const Se=b[K];if(y(Se)){const oe=U(L),Ye=r.get(Se).__webglTexture;i.bindTexture(oe,Ye),_(oe),i.unbindTexture()}}}const I=[],pt=[];function xt(L){if(L.samples>0){if(Ve(L)===!1){const b=L.textures,K=L.width,he=L.height;let Se=s.COLOR_BUFFER_BIT;const oe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(L),Le=b.length>1;if(Le)for(let qe=0;qe<b.length;qe++)i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const Je=L.texture.mipmaps;Je&&Je.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let qe=0;qe<b.length;qe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const ye=r.get(b[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,K,he,0,0,K,he,Se,s.NEAREST),m===!0&&(I.length=0,pt.length=0,I.push(s.COLOR_ATTACHMENT0+qe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(I.push(oe),pt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let qe=0;qe<b.length;qe++){i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const ye=r.get(b[qe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,ye,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function zt(L){return Math.min(l.maxSamples,L.samples)}function Ve(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(L){const b=d.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Ze(L,b){const K=L.colorSpace,he=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Us&&K!==Ka&&(Ut.getTransfer(K)===kt?(he!==bi||Se!==Ni)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",K)),b}function rt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=te,this.setTexture2D=fe,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=an,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ve}function k2(s,e){function i(r,l=Ka){let u;const d=Ut.getTransfer(l);if(r===Ni)return s.UNSIGNED_BYTE;if(r===jh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===b_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===E_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===y_)return s.BYTE;if(r===M_)return s.SHORT;if(r===Xo)return s.UNSIGNED_SHORT;if(r===Yh)return s.INT;if(r===Ur)return s.UNSIGNED_INT;if(r===fa)return s.FLOAT;if(r===Ps)return s.HALF_FLOAT;if(r===T_)return s.ALPHA;if(r===A_)return s.RGB;if(r===bi)return s.RGBA;if(r===qo)return s.DEPTH_COMPONENT;if(r===Yo)return s.DEPTH_STENCIL;if(r===R_)return s.RED;if(r===Kh)return s.RED_INTEGER;if(r===Qh)return s.RG;if(r===Jh)return s.RG_INTEGER;if(r===$h)return s.RGBA_INTEGER;if(r===Fu||r===Bu||r===Iu||r===Hu)if(d===kt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Fu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Fu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===ch||r===fh||r===dh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===uh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ch)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hh||r===ph||r===mh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===hh||r===ph)return d===kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===mh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xh||r===gh||r===_h||r===vh||r===Sh||r===yh||r===Mh||r===bh||r===Eh||r===Th||r===Ah||r===Rh||r===Ch||r===wh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===xh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Th)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ah)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ch)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dh||r===Uh||r===Lh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Dh)return d===kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nh||r===Oh||r===Ph||r===zh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Nh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Oh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ph)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const X2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W2=`
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

}`;class q2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new G_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ga({vertexShader:X2,fragmentShader:W2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xa(new Qu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y2 extends zs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,S=null,M=null,E=null;const R=typeof XRWebGLBinding<"u",y=new q2,_={},U=i.getContextAttributes();let D=null,z=null;const V=[],N=[],P=new Lt;let $=null;const w=new ni;w.viewport=new Xt;const C=new ni;C.viewport=new Xt;const k=[w,C],te=new d3;let le=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=V[ne];return ue===void 0&&(ue=new Bd,V[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=V[ne];return ue===void 0&&(ue=new Bd,V[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=V[ne];return ue===void 0&&(ue=new Bd,V[ne]=ue),ue.getHandSpace()};function fe(ne){const ue=N.indexOf(ne.inputSource);if(ue===-1)return;const we=V[ue];we!==void 0&&(we.update(ne.inputSource,ne.frame,p||d),we.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",j);for(let ne=0;ne<V.length;ne++){const ue=N[ne];ue!==null&&(N[ne]=null,V[ne].disconnect(ue))}le=null,me=null,y.reset();for(const ne in _)delete _[ne];e.setRenderTarget(D),M=null,S=null,x=null,l=null,z=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio($),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",B),l.addEventListener("inputsourceschange",j),U.xrCompatible!==!0&&await i.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ge=null,We=null;U.depth&&(We=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=U.stencil?Yo:qo,Ge=U.stencil?Wo:Ur);const ut={colorFormat:i.RGBA8,depthFormat:We,scaleFactor:u};x=this.getBinding(),S=x.createProjectionLayer(ut),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),z=new Lr(S.textureWidth,S.textureHeight,{format:bi,type:Ni,depthTexture:new H_(S.textureWidth,S.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const we={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Lr(M.framebufferWidth,M.framebufferHeight,{format:bi,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(ne){for(let ue=0;ue<ne.removed.length;ue++){const we=ne.removed[ue],Ge=N.indexOf(we);Ge>=0&&(N[Ge]=null,V[Ge].disconnect(we))}for(let ue=0;ue<ne.added.length;ue++){const we=ne.added[ue];let Ge=N.indexOf(we);if(Ge===-1){for(let ut=0;ut<V.length;ut++)if(ut>=N.length){N.push(we),Ge=ut;break}else if(N[ut]===null){N[ut]=we,Ge=ut;break}if(Ge===-1)break}const We=V[Ge];We&&We.connect(we)}}const Y=new re,_e=new re;function ve(ne,ue,we){Y.setFromMatrixPosition(ue.matrixWorld),_e.setFromMatrixPosition(we.matrixWorld);const Ge=Y.distanceTo(_e),We=ue.projectionMatrix.elements,ut=we.projectionMatrix.elements,an=We[14]/(We[10]-1),ht=We[14]/(We[10]+1),At=(We[9]+1)/We[5],I=(We[9]-1)/We[5],pt=(We[8]-1)/We[0],xt=(ut[8]+1)/ut[0],zt=an*pt,Ve=an*xt,Wt=Ge/(-pt+xt),Ze=Wt*-pt;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ze),ne.translateZ(Wt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),We[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const rt=an+Wt,L=ht+Wt,b=zt-Ze,K=Ve+(Ge-Ze),he=At*ht/L*rt,Se=I*ht/L*rt;ne.projectionMatrix.makePerspective(b,K,he,Se,rt,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function O(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let ue=ne.near,we=ne.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(we=y.depthFar)),te.near=C.near=w.near=ue,te.far=C.far=w.far=we,(le!==te.near||me!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),le=te.near,me=te.far),te.layers.mask=ne.layers.mask|6,w.layers.mask=te.layers.mask&3,C.layers.mask=te.layers.mask&5;const Ge=ne.parent,We=te.cameras;O(te,Ge);for(let ut=0;ut<We.length;ut++)O(We[ut],Ge);We.length===2?ve(te,w,C):te.projectionMatrix.copy(w.projectionMatrix),ae(ne,te,Ge)};function ae(ne,ue,we){we===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(we.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Fh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(ne){m=ne,S!==null&&(S.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(ne){return _[ne]};let Me=null;function Te(ne,ue){if(g=ue.getViewerPose(p||d),E=ue,g!==null){const we=g.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let Ge=!1;we.length!==te.cameras.length&&(te.cameras.length=0,Ge=!0);for(let ht=0;ht<we.length;ht++){const At=we[ht];let I=null;if(M!==null)I=M.getViewport(At);else{const xt=x.getViewSubImage(S,At);I=xt.viewport,ht===0&&(e.setRenderTargetTextures(z,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(z))}let pt=k[ht];pt===void 0&&(pt=new ni,pt.layers.enable(ht),pt.viewport=new Xt,k[ht]=pt),pt.matrix.fromArray(At.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(At.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(I.x,I.y,I.width,I.height),ht===0&&(te.matrix.copy(pt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Ge===!0&&te.cameras.push(pt)}const We=l.enabledFeatures;if(We&&We.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){x=r.getBinding();const ht=x.getDepthInformation(we[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,l.renderState)}if(We&&We.includes("camera-access")&&R){e.state.unbindTexture(),x=r.getBinding();for(let ht=0;ht<we.length;ht++){const At=we[ht].camera;if(At){let I=_[At];I||(I=new G_,_[At]=I);const pt=x.getCameraImage(At);I.sourceTexture=pt}}}}for(let we=0;we<V.length;we++){const Ge=N[we],We=V[we];Ge!==null&&We!==void 0&&We.update(Ge,ue,p||d)}Me&&Me(ne,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Pe=new V_;Pe.setAnimationLoop(Te),this.setAnimationLoop=function(ne){Me=ne},this.dispose=function(){}}}const Tr=new Oi,j2=new nn;function Z2(s,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,F_(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,U,D,z){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,z)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,U,D):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===kn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===kn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const U=e.get(_),D=U.envMap,z=U.envMapRotation;D&&(y.envMap.value=D,Tr.copy(z),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),y.envMapRotation.value.setFromMatrix4(j2.makeRotationFromEuler(Tr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,U,D){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*U,y.scale.value=D*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,U){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const U=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function K2(s,e,i,r){let l={},u={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,D){const z=D.program;r.uniformBlockBinding(U,z)}function p(U,D){let z=l[U.id];z===void 0&&(E(U),z=g(U),l[U.id]=z,U.addEventListener("dispose",y));const V=D.program;r.updateUBOMapping(U,V);const N=e.render.frame;u[U.id]!==N&&(S(U),u[U.id]=N)}function g(U){const D=x();U.__bindingPointIndex=D;const z=s.createBuffer(),V=U.__size,N=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,z),s.bufferData(s.UNIFORM_BUFFER,V,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,z),z}function x(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const D=l[U.id],z=U.uniforms,V=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let N=0,P=z.length;N<P;N++){const $=Array.isArray(z[N])?z[N]:[z[N]];for(let w=0,C=$.length;w<C;w++){const k=$[w];if(M(k,N,w,V)===!0){const te=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let me=0;for(let fe=0;fe<le.length;fe++){const B=le[fe],j=R(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,te+me,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,me),me+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,D,z,V){const N=U.value,P=D+"_"+z;if(V[P]===void 0)return typeof N=="number"||typeof N=="boolean"?V[P]=N:V[P]=N.clone(),!0;{const $=V[P];if(typeof N=="number"||typeof N=="boolean"){if($!==N)return V[P]=N,!0}else if($.equals(N)===!1)return $.copy(N),!0}return!1}function E(U){const D=U.uniforms;let z=0;const V=16;for(let P=0,$=D.length;P<$;P++){const w=Array.isArray(D[P])?D[P]:[D[P]];for(let C=0,k=w.length;C<k;C++){const te=w[C],le=Array.isArray(te.value)?te.value:[te.value];for(let me=0,fe=le.length;me<fe;me++){const B=le[me],j=R(B),Y=z%V,_e=Y%j.boundary,ve=Y+_e;z+=_e,ve!==0&&V-ve<j.storage&&(z+=V-ve),te.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=z,z+=j.storage}}}const N=z%V;return N>0&&(z+=V-N),U.__size=z,U.__cache={},this}function R(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){const D=U.target;D.removeEventListener("dispose",y);const z=d.indexOf(D.__bindingPointIndex);d.splice(z,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const U in l)s.deleteBuffer(l[U]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}const Q2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let oa=null;function J2(){return oa===null&&(oa=new e3(Q2,32,32,Qh,Ps),oa.minFilter=pi,oa.magFilter=pi,oa.wrapS=ca,oa.wrapT=ca,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class $2{constructor(e={}){const{canvas:i=Tb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const E=new Set([$h,Jh,Kh]),R=new Set([Ni,Ur,Xo,Wo,jh,Zh]),y=new Uint32Array(4),_=new Int32Array(4);let U=null,D=null;const z=[],V=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1;this._outputColorSpace=hi;let $=0,w=0,C=null,k=-1,te=null;const le=new Xt,me=new Xt;let fe=null;const B=new Ot(0);let j=0,Y=i.width,_e=i.height,ve=1,O=null,ae=null;const Me=new Xt(0,0,Y,_e),Te=new Xt(0,0,Y,_e);let Pe=!1;const ne=new np;let ue=!1,we=!1;const Ge=new nn,We=new re,ut=new Xt,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function At(){return C===null?ve:1}let I=r;function pt(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qh}`),i.addEventListener("webglcontextlost",be,!1),i.addEventListener("webglcontextrestored",xe,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),I===null){const X="webgl2";if(I=pt(X,A),I===null)throw pt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let xt,zt,Ve,Wt,Ze,rt,L,b,K,he,Se,oe,Ye,Le,Je,qe,ye,Ee,je,ke,Oe,it,H,De;function Re(){xt=new oT(I),xt.init(),it=new k2(I,xt),zt=new JE(I,xt,e,it),Ve=new G2(I,xt),zt.reversedDepthBuffer&&S&&Ve.buffers.depth.setReversed(!0),Wt=new cT(I),Ze=new C2,rt=new V2(I,xt,Ve,Ze,zt,it,Wt),L=new eT(N),b=new sT(N),K=new p3(I),H=new KE(I,K),he=new lT(I,K,Wt,H),Se=new dT(I,he,K,Wt),je=new fT(I,zt,rt),qe=new $E(Ze),oe=new R2(N,L,b,xt,zt,H,qe),Ye=new Z2(N,Ze),Le=new D2,Je=new z2(xt),Ee=new ZE(N,L,b,Ve,Se,M,m),ye=new I2(N,Se,zt),De=new K2(I,Wt,zt,Ve),ke=new QE(I,xt,Wt),Oe=new uT(I,xt,Wt),Wt.programs=oe.programs,N.capabilities=zt,N.extensions=xt,N.properties=Ze,N.renderLists=Le,N.shadowMap=ye,N.state=Ve,N.info=Wt}Re();const Ce=new Y2(N,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(Y,_e,!1))},this.getSize=function(A){return A.set(Y,_e)},this.setSize=function(A,X,ie=!0){if(Ce.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,_e=X,i.width=Math.floor(A*ve),i.height=Math.floor(X*ve),ie===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Y*ve,_e*ve).floor()},this.setDrawingBufferSize=function(A,X,ie){Y=A,_e=X,ve=ie,i.width=Math.floor(A*ie),i.height=Math.floor(X*ie),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(le)},this.getViewport=function(A){return A.copy(Me)},this.setViewport=function(A,X,ie,J){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,X,ie,J),Ve.viewport(le.copy(Me).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(Te)},this.setScissor=function(A,X,ie,J){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,X,ie,J),Ve.scissor(me.copy(Te).multiplyScalar(ve).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(A){Ve.setScissorTest(Pe=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ie=!0){let J=0;if(A){let q=!1;if(C!==null){const Ae=C.texture.format;q=E.has(Ae)}if(q){const Ae=C.texture.type,Ue=R.has(Ae),ze=Ee.getClearColor(),Be=Ee.getClearAlpha(),et=ze.r,nt=ze.g,Ke=ze.b;Ue?(y[0]=et,y[1]=nt,y[2]=Ke,y[3]=Be,I.clearBufferuiv(I.COLOR,0,y)):(_[0]=et,_[1]=nt,_[2]=Ke,_[3]=Be,I.clearBufferiv(I.COLOR,0,_))}else J|=I.COLOR_BUFFER_BIT}X&&(J|=I.DEPTH_BUFFER_BIT),ie&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",be,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),Ee.dispose(),Le.dispose(),Je.dispose(),Ze.dispose(),L.dispose(),b.dispose(),Se.dispose(),H.dispose(),De.dispose(),oe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Is),Ce.removeEventListener("sessionend",Hs),mi.stop()};function be(A){A.preventDefault(),lg("WebGLRenderer: Context Lost."),P=!0}function xe(){lg("WebGLRenderer: Context Restored."),P=!1;const A=Wt.autoReset,X=ye.enabled,ie=ye.autoUpdate,J=ye.needsUpdate,q=ye.type;Re(),Wt.autoReset=A,ye.enabled=X,ye.autoUpdate=ie,ye.needsUpdate=J,ye.type=q}function Fe(A){on("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const X=A.target;X.removeEventListener("dispose",at),It(X)}function It(A){Rt(A),Ze.remove(A)}function Rt(A){const X=Ze.get(A).programs;X!==void 0&&(X.forEach(function(ie){oe.releaseProgram(ie)}),A.isShaderMaterial&&oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ie,J,q,Ae){X===null&&(X=an);const Ue=q.isMesh&&q.matrixWorld.determinant()<0,ze=ec(A,X,ie,J,q);Ve.setMaterial(J,Ue);let Be=ie.index,et=1;if(J.wireframe===!0){if(Be=he.getWireframeAttribute(ie),Be===void 0)return;et=2}const nt=ie.drawRange,Ke=ie.attributes.position;let ct=nt.start*et,Tt=(nt.start+nt.count)*et;Ae!==null&&(ct=Math.max(ct,Ae.start*et),Tt=Math.min(Tt,(Ae.start+Ae.count)*et)),Be!==null?(ct=Math.max(ct,0),Tt=Math.min(Tt,Be.count)):Ke!=null&&(ct=Math.max(ct,0),Tt=Math.min(Tt,Ke.count));const Ct=Tt-ct;if(Ct<0||Ct===1/0)return;H.setup(q,J,ze,ie,Be);let yt,Pt=ke;if(Be!==null&&(yt=K.get(Be),Pt=Oe,Pt.setIndex(yt)),q.isMesh)J.wireframe===!0?(Ve.setLineWidth(J.wireframeLinewidth*At()),Pt.setMode(I.LINES)):Pt.setMode(I.TRIANGLES);else if(q.isLine){let $e=J.linewidth;$e===void 0&&($e=1),Ve.setLineWidth($e*At()),q.isLineSegments?Pt.setMode(I.LINES):q.isLineLoop?Pt.setMode(I.LINE_LOOP):Pt.setMode(I.LINE_STRIP)}else q.isPoints?Pt.setMode(I.POINTS):q.isSprite&&Pt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const $e=q._multiDrawStarts,qt=q._multiDrawCounts,Mt=q._multiDrawCount,vn=Be?K.get(Be).bytesPerElement:1,Sa=Ze.get(J).currentProgram.getUniforms();for(let jt=0;jt<Mt;jt++)Sa.setValue(I,"_gl_DrawID",jt),Pt.render($e[jt]/vn,qt[jt])}else if(q.isInstancedMesh)Pt.renderInstances(ct,Ct,q.count);else if(ie.isInstancedBufferGeometry){const $e=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,qt=Math.min(ie.instanceCount,$e);Pt.renderInstances(ct,Ct,qt)}else Pt.render(ct,Ct)};function wn(A,X,ie){A.transparent===!0&&A.side===ua&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,pn(A,X,ie),A.side=er,A.needsUpdate=!0,pn(A,X,ie),A.side=ua):pn(A,X,ie)}this.compile=function(A,X,ie=null){ie===null&&(ie=A),D=Je.get(ie),D.init(X),V.push(D),ie.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(D.pushLight(q),q.castShadow&&D.pushShadow(q))}),A!==ie&&A.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(D.pushLight(q),q.castShadow&&D.pushShadow(q))}),D.setupLights();const J=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const ze=Ae[Ue];wn(ze,ie,q),J.add(ze)}else wn(Ae,ie,q),J.add(Ae)}),D=V.pop(),J},this.compileAsync=function(A,X,ie=null){const J=this.compile(A,X,ie);return new Promise(q=>{function Ae(){if(J.forEach(function(Ue){Ze.get(Ue).currentProgram.isReady()&&J.delete(Ue)}),J.size===0){q(A);return}setTimeout(Ae,10)}xt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Wn=null;function nl(A){Wn&&Wn(A)}function Is(){mi.stop()}function Hs(){mi.start()}const mi=new V_;mi.setAnimationLoop(nl),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(A){Wn=A,Ce.setAnimationLoop(A),A===null?mi.stop():mi.start()},Ce.addEventListener("sessionstart",Is),Ce.addEventListener("sessionend",Hs),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,X,C),D=Je.get(A,V.length),D.init(X),V.push(D),Ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ne.setFromProjectionMatrix(Ge,Ui,X.reversedDepth),we=this.localClippingEnabled,ue=qe.init(this.clippingPlanes,we),U=Le.get(A,z.length),U.init(),z.push(U),Ce.enabled===!0&&Ce.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&nr(Ae,X,-1/0,N.sortObjects)}nr(A,X,0,N.sortObjects),U.finish(),N.sortObjects===!0&&U.sort(O,ae),ht=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ht&&Ee.addToRenderList(U,A),this.info.render.frame++,ue===!0&&qe.beginShadows();const ie=D.state.shadowsArray;ye.render(ie,A,X),ue===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=U.opaque,q=U.transmissive;if(D.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(q.length>0)for(let Ue=0,ze=Ae.length;Ue<ze;Ue++){const Be=Ae[Ue];Vs(J,q,A,Be)}ht&&Ee.render(A);for(let Ue=0,ze=Ae.length;Ue<ze;Ue++){const Be=Ae[Ue];Gs(U,A,Be,Be.viewport)}}else q.length>0&&Vs(J,q,A,X),ht&&Ee.render(A),Gs(U,A,X);C!==null&&w===0&&(rt.updateMultisampleRenderTarget(C),rt.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(N,A,X),H.resetDefaultState(),k=-1,te=null,V.pop(),V.length>0?(D=V[V.length-1],ue===!0&&qe.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function nr(A,X,ie,J){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){J&&ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ge);const Ue=Se.update(A),ze=A.material;ze.visible&&U.push(A,Ue,ze,ie,ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){const Ue=Se.update(A),ze=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ut.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ut.copy(Ue.boundingSphere.center)),ut.applyMatrix4(A.matrixWorld).applyMatrix4(Ge)),Array.isArray(ze)){const Be=Ue.groups;for(let et=0,nt=Be.length;et<nt;et++){const Ke=Be[et],ct=ze[Ke.materialIndex];ct&&ct.visible&&U.push(A,Ue,ct,ie,ut.z,Ke)}}else ze.visible&&U.push(A,Ue,ze,ie,ut.z,null)}}const Ae=A.children;for(let Ue=0,ze=Ae.length;Ue<ze;Ue++)nr(Ae[Ue],X,ie,J)}function Gs(A,X,ie,J){const{opaque:q,transmissive:Ae,transparent:Ue}=A;D.setupLightsView(ie),ue===!0&&qe.setGlobalState(N.clippingPlanes,ie),J&&Ve.viewport(le.copy(J)),q.length>0&&qn(q,X,ie),Ae.length>0&&qn(Ae,X,ie),Ue.length>0&&qn(Ue,X,ie),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Vs(A,X,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[J.id]===void 0&&(D.state.transmissionRenderTarget[J.id]=new Lr(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Ps:Ni,minFilter:wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ae=D.state.transmissionRenderTarget[J.id],Ue=J.viewport||le;Ae.setSize(Ue.z*N.transmissionResolutionScale,Ue.w*N.transmissionResolutionScale);const ze=N.getRenderTarget(),Be=N.getActiveCubeFace(),et=N.getActiveMipmapLevel();N.setRenderTarget(Ae),N.getClearColor(B),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),ht&&Ee.render(ie);const nt=N.toneMapping;N.toneMapping=$a;const Ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),D.setupLightsView(J),ue===!0&&qe.setGlobalState(N.clippingPlanes,J),qn(A,ie,J),rt.updateMultisampleRenderTarget(Ae),rt.updateRenderTargetMipmap(Ae),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Tt=0,Ct=X.length;Tt<Ct;Tt++){const yt=X[Tt],{object:Pt,geometry:$e,material:qt,group:Mt}=yt;if(qt.side===ua&&Pt.layers.test(J.layers)){const vn=qt.side;qt.side=kn,qt.needsUpdate=!0,ln(Pt,ie,J,$e,qt,Mt),qt.side=vn,qt.needsUpdate=!0,ct=!0}}ct===!0&&(rt.updateMultisampleRenderTarget(Ae),rt.updateRenderTargetMipmap(Ae))}N.setRenderTarget(ze,Be,et),N.setClearColor(B,j),Ke!==void 0&&(J.viewport=Ke),N.toneMapping=nt}function qn(A,X,ie){const J=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ae=A.length;q<Ae;q++){const Ue=A[q],{object:ze,geometry:Be,group:et}=Ue;let nt=Ue.material;nt.allowOverride===!0&&J!==null&&(nt=J),ze.layers.test(ie.layers)&&ln(ze,X,ie,Be,nt,et)}}function ln(A,X,ie,J,q,Ae){A.onBeforeRender(N,X,ie,J,q,Ae),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(N,X,ie,J,A,Ae),q.transparent===!0&&q.side===ua&&q.forceSinglePass===!1?(q.side=kn,q.needsUpdate=!0,N.renderBufferDirect(ie,X,J,q,A,Ae),q.side=er,q.needsUpdate=!0,N.renderBufferDirect(ie,X,J,q,A,Ae),q.side=ua):N.renderBufferDirect(ie,X,J,q,A,Ae),A.onAfterRender(N,X,ie,J,q,Ae)}function pn(A,X,ie){X.isScene!==!0&&(X=an);const J=Ze.get(A),q=D.state.lights,Ae=D.state.shadowsArray,Ue=q.state.version,ze=oe.getParameters(A,q.state,Ae,X,ie),Be=oe.getProgramCacheKey(ze);let et=J.programs;J.environment=A.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(A.isMeshStandardMaterial?b:L).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",at),et=new Map,J.programs=et);let nt=et.get(Be);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Ue)return Or(A,ze),nt}else ze.uniforms=oe.getUniforms(A),A.onBeforeCompile(ze,N),nt=oe.acquireProgram(ze,Be),et.set(Be,nt),J.uniforms=ze.uniforms;const Ke=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=qe.uniform),Or(A,ze),J.needsLights=il(A),J.lightsStateVersion=Ue,J.needsLights&&(Ke.ambientLightColor.value=q.state.ambient,Ke.lightProbe.value=q.state.probe,Ke.directionalLights.value=q.state.directional,Ke.directionalLightShadows.value=q.state.directionalShadow,Ke.spotLights.value=q.state.spot,Ke.spotLightShadows.value=q.state.spotShadow,Ke.rectAreaLights.value=q.state.rectArea,Ke.ltc_1.value=q.state.rectAreaLTC1,Ke.ltc_2.value=q.state.rectAreaLTC2,Ke.pointLights.value=q.state.point,Ke.pointLightShadows.value=q.state.pointShadow,Ke.hemisphereLights.value=q.state.hemi,Ke.directionalShadowMap.value=q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ke.spotShadowMap.value=q.state.spotShadowMap,Ke.spotLightMatrix.value=q.state.spotLightMatrix,Ke.spotLightMap.value=q.state.spotLightMap,Ke.pointShadowMap.value=q.state.pointShadowMap,Ke.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function zi(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Gu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Or(A,X){const ie=Ze.get(A);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function ec(A,X,ie,J,q){X.isScene!==!0&&(X=an),rt.resetTextureUnits();const Ae=X.fog,Ue=J.isMeshStandardMaterial?X.environment:null,ze=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Us,Be=(J.isMeshStandardMaterial?b:L).get(J.envMap||Ue),et=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,nt=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ke=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,Tt=!!ie.morphAttributes.color;let Ct=$a;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ct=N.toneMapping);const yt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Pt=yt!==void 0?yt.length:0,$e=Ze.get(J),qt=D.state.lights;if(ue===!0&&(we===!0||A!==te)){const yn=A===te&&J.id===k;qe.setState(J,A,yn)}let Mt=!1;J.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==qt.state.version||$e.outputColorSpace!==ze||q.isBatchedMesh&&$e.batching===!1||!q.isBatchedMesh&&$e.batching===!0||q.isBatchedMesh&&$e.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&$e.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&$e.instancing===!1||!q.isInstancedMesh&&$e.instancing===!0||q.isSkinnedMesh&&$e.skinning===!1||!q.isSkinnedMesh&&$e.skinning===!0||q.isInstancedMesh&&$e.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&$e.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&$e.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&$e.instancingMorph===!1&&q.morphTexture!==null||$e.envMap!==Be||J.fog===!0&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==qe.numPlanes||$e.numIntersection!==qe.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==nt||$e.morphTargets!==Ke||$e.morphNormals!==ct||$e.morphColors!==Tt||$e.toneMapping!==Ct||$e.morphTargetsCount!==Pt)&&(Mt=!0):(Mt=!0,$e.__version=J.version);let vn=$e.currentProgram;Mt===!0&&(vn=pn(J,X,q));let Sa=!1,jt=!1,Fi=!1;const Zt=vn.getUniforms(),Sn=$e.uniforms;if(Ve.useProgram(vn.program)&&(Sa=!0,jt=!0,Fi=!0),J.id!==k&&(k=J.id,jt=!0),Sa||te!==A){Ve.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Zt.setValue(I,"projectionMatrix",A.projectionMatrix),Zt.setValue(I,"viewMatrix",A.matrixWorldInverse);const En=Zt.map.cameraPosition;En!==void 0&&En.setValue(I,We.setFromMatrixPosition(A.matrixWorld)),zt.logarithmicDepthBuffer&&Zt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Zt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),te!==A&&(te=A,jt=!0,Fi=!0)}if(q.isSkinnedMesh){Zt.setOptional(I,q,"bindMatrix"),Zt.setOptional(I,q,"bindMatrixInverse");const yn=q.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Zt.setValue(I,"boneTexture",yn.boneTexture,rt))}q.isBatchedMesh&&(Zt.setOptional(I,q,"batchingTexture"),Zt.setValue(I,"batchingTexture",q._matricesTexture,rt),Zt.setOptional(I,q,"batchingIdTexture"),Zt.setValue(I,"batchingIdTexture",q._indirectTexture,rt),Zt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Zt.setValue(I,"batchingColorTexture",q._colorsTexture,rt));const mn=ie.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&je.update(q,ie,vn),(jt||$e.receiveShadow!==q.receiveShadow)&&($e.receiveShadow=q.receiveShadow,Zt.setValue(I,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Sn.envMap.value=Be,Sn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(Sn.envMapIntensity.value=X.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=J2()),jt&&(Zt.setValue(I,"toneMappingExposure",N.toneMappingExposure),$e.needsLights&&tc(Sn,Fi),Ae&&J.fog===!0&&Ye.refreshFogUniforms(Sn,Ae),Ye.refreshMaterialUniforms(Sn,J,ve,_e,D.state.transmissionRenderTarget[A.id]),Gu.upload(I,zi($e),Sn,rt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Gu.upload(I,zi($e),Sn,rt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Zt.setValue(I,"center",q.center),Zt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Zt.setValue(I,"normalMatrix",q.normalMatrix),Zt.setValue(I,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const yn=J.uniformsGroups;for(let En=0,Ti=yn.length;En<Ti;En++){const Bi=yn[En];De.update(Bi,vn),De.bind(Bi,vn)}}return vn}function tc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function il(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,X,ie){const J=Ze.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ze.get(A.texture).__webglTexture=X,Ze.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ie,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ie=Ze.get(A);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const ir=I.createFramebuffer();this.setRenderTarget=function(A,X=0,ie=0){C=A,$=X,w=ie;let J=!0,q=null,Ae=!1,Ue=!1;if(A){const Be=Ze.get(A);if(Be.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(Be.__webglFramebuffer===void 0)rt.setupRenderTarget(A);else if(Be.__hasExternalTextures)rt.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Be.__boundDepthTexture!==Ke){if(Ke!==null&&Ze.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const nt=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?q=nt[X][ie]:q=nt[X],Ae=!0):A.samples>0&&rt.useMultisampledRTT(A)===!1?q=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[ie]:q=nt,le.copy(A.viewport),me.copy(A.scissor),fe=A.scissorTest}else le.copy(Me).multiplyScalar(ve).floor(),me.copy(Te).multiplyScalar(ve).floor(),fe=Pe;if(ie!==0&&(q=ir),Ve.bindFramebuffer(I.FRAMEBUFFER,q)&&J&&Ve.drawBuffers(A,q),Ve.viewport(le),Ve.scissor(me),Ve.setScissorTest(fe),Ae){const Be=Ze.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ie)}else if(Ue){const Be=X;for(let et=0;et<A.textures.length;et++){const nt=Ze.get(A.textures[et]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+et,nt.__webglTexture,ie,Be)}}else if(A!==null&&ie!==0){const Be=Ze.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Be.__webglTexture,ie)}k=-1},this.readRenderTargetPixels=function(A,X,ie,J,q,Ae,Ue,ze=0){if(!(A&&A.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){Ve.bindFramebuffer(I.FRAMEBUFFER,Be);try{const et=A.textures[ze],nt=et.format,Ke=et.type;if(!zt.textureFormatReadable(nt)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Ke)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-J&&ie>=0&&ie<=A.height-q&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ze),I.readPixels(X,ie,J,q,it.convert(nt),it.convert(Ke),Ae))}finally{const et=C!==null?Ze.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(I.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,X,ie,J,q,Ae,Ue,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be)if(X>=0&&X<=A.width-J&&ie>=0&&ie<=A.height-q){Ve.bindFramebuffer(I.FRAMEBUFFER,Be);const et=A.textures[ze],nt=et.format,Ke=et.type;if(!zt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.bufferData(I.PIXEL_PACK_BUFFER,Ae.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ze),I.readPixels(X,ie,J,q,it.convert(nt),it.convert(Ke),0);const Tt=C!==null?Ze.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(I.FRAMEBUFFER,Tt);const Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ab(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ae),I.deleteBuffer(ct),I.deleteSync(Ct),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ie=0){const J=Math.pow(2,-ie),q=Math.floor(A.image.width*J),Ae=Math.floor(A.image.height*J),Ue=X!==null?X.x:0,ze=X!==null?X.y:0;rt.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ie,0,0,Ue,ze,q,Ae),Ve.unbindTexture()};const ks=I.createFramebuffer(),va=I.createFramebuffer();this.copyTextureToTexture=function(A,X,ie=null,J=null,q=0,Ae=null){Ae===null&&(q!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=q,q=0):Ae=0);let Ue,ze,Be,et,nt,Ke,ct,Tt,Ct;const yt=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(ie!==null)Ue=ie.max.x-ie.min.x,ze=ie.max.y-ie.min.y,Be=ie.isBox3?ie.max.z-ie.min.z:1,et=ie.min.x,nt=ie.min.y,Ke=ie.isBox3?ie.min.z:0;else{const mn=Math.pow(2,-q);Ue=Math.floor(yt.width*mn),ze=Math.floor(yt.height*mn),A.isDataArrayTexture?Be=yt.depth:A.isData3DTexture?Be=Math.floor(yt.depth*mn):Be=1,et=0,nt=0,Ke=0}J!==null?(ct=J.x,Tt=J.y,Ct=J.z):(ct=0,Tt=0,Ct=0);const Pt=it.convert(X.format),$e=it.convert(X.type);let qt;X.isData3DTexture?(rt.setTexture3D(X,0),qt=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(rt.setTexture2DArray(X,0),qt=I.TEXTURE_2D_ARRAY):(rt.setTexture2D(X,0),qt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Mt=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sa=I.getParameter(I.UNPACK_SKIP_PIXELS),jt=I.getParameter(I.UNPACK_SKIP_ROWS),Fi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,et),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ke);const Zt=A.isDataArrayTexture||A.isData3DTexture,Sn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const mn=Ze.get(A),yn=Ze.get(X),En=Ze.get(mn.__renderTarget),Ti=Ze.get(yn.__renderTarget);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Bi=0;Bi<Be;Bi++)Zt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.get(A).__webglTexture,q,Ke+Bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.get(X).__webglTexture,Ae,Ct+Bi)),I.blitFramebuffer(et,nt,Ue,ze,ct,Tt,Ue,ze,I.DEPTH_BUFFER_BIT,I.NEAREST);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ze.has(A)){const mn=Ze.get(A),yn=Ze.get(X);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,ks),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,va);for(let En=0;En<Be;En++)Zt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,q,Ke+En):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,q),Sn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yn.__webglTexture,Ae,Ct+En):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yn.__webglTexture,Ae),q!==0?I.blitFramebuffer(et,nt,Ue,ze,ct,Tt,Ue,ze,I.COLOR_BUFFER_BIT,I.NEAREST):Sn?I.copyTexSubImage3D(qt,Ae,ct,Tt,Ct+En,et,nt,Ue,ze):I.copyTexSubImage2D(qt,Ae,ct,Tt,et,nt,Ue,ze);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Sn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(qt,Ae,ct,Tt,Ct,Ue,ze,Be,Pt,$e,yt.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(qt,Ae,ct,Tt,Ct,Ue,ze,Be,Pt,yt.data):I.texSubImage3D(qt,Ae,ct,Tt,Ct,Ue,ze,Be,Pt,$e,yt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ae,ct,Tt,Ue,ze,Pt,$e,yt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ae,ct,Tt,yt.width,yt.height,Pt,yt.data):I.texSubImage2D(I.TEXTURE_2D,Ae,ct,Tt,Ue,ze,Pt,$e,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sa),I.pixelStorei(I.UNPACK_SKIP_ROWS,jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fi),Ae===0&&X.generateMipmaps&&I.generateMipmap(qt),Ve.unbindTexture()},this.initRenderTarget=function(A){Ze.get(A).__webglFramebuffer===void 0&&rt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?rt.setTextureCube(A,0):A.isData3DTexture?rt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?rt.setTexture2DArray(A,0):rt.setTexture2D(A,0),Ve.unbindTexture()},this.resetState=function(){$=0,w=0,C=null,Ve.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}function eA(){const s=ge.useRef(null);return ge.useEffect(()=>{const e=new $b,i=new ni(75,s.current.clientWidth/s.current.clientHeight,.1,1e3);i.position.z=5;const r=new $2;r.setSize(s.current.clientWidth,s.current.clientHeight),s.current.appendChild(r.domElement);const l=new Fs(1,1,1),u=new a3({color:65280}),d=new xa(l,u);e.add(d);const h=new c3(16777215,1);h.position.set(5,5,5),e.add(h);const m=()=>{requestAnimationFrame(m),d.rotation.x+=.01,d.rotation.y+=.01,r.render(e,i)};return m(),()=>{r.dispose(),s.current&&r.domElement&&s.current.removeChild(r.domElement)}},[]),Ie.jsx("div",{ref:s,style:{width:"100%",height:"400px"}})}var Y_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jg=Ja.createContext&&Ja.createContext(Y_),tA=["attr","size","title"];function nA(s,e){if(s==null)return{};var i=iA(s,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function iA(s,e){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;i[r]=s[r]}return i}function qu(){return qu=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},qu.apply(this,arguments)}function $g(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Yu(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?$g(Object(i),!0).forEach(function(r){aA(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):$g(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function aA(s,e,i){return e=rA(e),e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function rA(s){var e=sA(s,"string");return typeof e=="symbol"?e:e+""}function sA(s,e){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function j_(s){return s&&s.map((e,i)=>Ja.createElement(e.tag,Yu({key:i},e.attr),j_(e.child)))}function ip(s){return e=>Ja.createElement(oA,qu({attr:Yu({},s.attr)},e),j_(s.child))}function oA(s){var e=i=>{var{attr:r,size:l,title:u}=s,d=nA(s,tA),h=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),Ja.createElement("svg",qu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,d,{className:m,style:Yu(Yu({color:s.color||i.color},i.style),s.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&Ja.createElement("title",null,u),s.children)};return Jg!==void 0?Ja.createElement(Jg.Consumer,null,i=>e(i)):e(Y_)}function lA(s){return ip({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function uA(s){return ip({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function cA(s){return ip({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(s)}function fA(){return Ie.jsx("section",{id:"contact",className:"bg-gray-900 text-white py-16 px-6",children:Ie.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[Ie.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Contact Me"}),Ie.jsx("p",{className:"mb-8 text-gray-300",children:"I'm open to freelance work, internships, or collaboration on exciting projects. Feel free to reach out!"}),Ie.jsxs("div",{className:"flex justify-center gap-6 text-xl",children:[Ie.jsxs("a",{href:"mailto:your.email@example.com",className:"hover:text-blue-400 transition","aria-label":"Email",children:[Ie.jsx(cA,{}),"keshavofficial57@gmail.com"]}),Ie.jsx("br",{}),Ie.jsx("a",{href:"https://www.linkedin.com/in/yourprofile",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-400 transition","aria-label":"LinkedIn",children:Ie.jsx(uA,{})}),Ie.jsx("br",{}),Ie.jsx("a",{href:"https://github.com/yourusername",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-400 transition","aria-label":"GitHub",children:Ie.jsx(lA,{})})]})]})})}function dA(){return Ie.jsxs(Ie.Fragment,{children:[Ie.jsx(OM,{}),Ie.jsx(eA,{}),Ie.jsx(PM,{}),Ie.jsx(zM,{}),Ie.jsx(FM,{}),Ie.jsx(fA,{})]})}function hA(){return Ie.jsxs("div",{style:{padding:"100px",textAlign:"center"},children:[Ie.jsx("h1",{children:"404 - Page Not Found"}),Ie.jsx("p",{children:"The page you are looking for doesn't exist."})]})}function pA(){return Ie.jsxs(m_,{children:[Ie.jsx(NM,{}),Ie.jsxs(tM,{children:[Ie.jsx(jd,{path:"/",element:Ie.jsx(dA,{})}),Ie.jsx(jd,{path:"*",element:Ie.jsx(hA,{})})]})]})}uy.createRoot(document.getElementById("root")).render(Ie.jsx(Ja.StrictMode,{children:Ie.jsx(m_,{children:Ie.jsx(pA,{})})}));
